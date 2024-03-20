import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export default class AdminUserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async getAllUsers() {
        return await this.userRepository.find({
            relations: ['profile', 'wallet']
        });
    }

    async getUsersCount() {
        return await this.userRepository.count();
    }

    async updateUser(updateUserDto: UpdateUserDto) {
        let user = await this.userRepository.findOne({
            relations: ['profile', 'wallet'],
            where: {id: updateUserDto.id}
        });

        user.username = updateUserDto.username;
        user.profile.displayName = updateUserDto.displayName;
        user.email = updateUserDto.email;
        user.wallet.fans = updateUserDto.fans;
        user.wallet.coins = updateUserDto.coins;
        user.wallet.diamonds = updateUserDto.diamonds;

        return await this.userRepository.save(user);
    }
}