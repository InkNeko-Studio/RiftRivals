import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { createHash } from 'crypto';
import { Profile } from 'src/profile/entities/profile.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user: User = new User();

        var hash = createHash('sha512');
        const password_data = hash.update(createUserDto.password, 'utf-8');

        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = password_data.digest('hex');

        user.profile = new Profile();
        user.profile.displayName = user.username;

        return this.userRepository.save(user);
    }

    findOne(username: string, options?: any): Promise<User> {
        return this.userRepository.findOne({
            relations: ['profile'],
            where: { username: username }
        });
    }

    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user: User = new User();
        user.username = updateUserDto.username;
        user.email = updateUserDto.email;
        user.password = updateUserDto.password;
        user.id = id;
        return this.userRepository.save(user);
    }

    remove(id: number): Promise<{ affected?: number }> {
        return this.userRepository.delete(id);
    }
}
