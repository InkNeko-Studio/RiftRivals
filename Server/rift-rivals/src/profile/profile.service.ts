import { Injectable, NotFoundException } from "@nestjs/common";
import { Profile } from "./entities/profile.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async getProfileById(id: number): Promise<Profile> {
        const profile = await this.profileRepository.findOneBy({id: id});
        if (!profile)
            throw new NotFoundException();
        return profile;
    }

    async getUserProfile(id: number): Promise<Profile> {
        const user = await this.userRepository.findOne({
            relations: ['profile'],
            where:{id: id}
        });
        if (!user)
            throw new NotFoundException();
        return user.profile;
    }

    async updateProfile(id: number, updateProfileDto: UpdateProfileDto): Promise<Profile> {
        const user = await this.userRepository.findOne({
            relations: ['profile'],
            where:{id: id}
        });
        if (!user)
            throw new NotFoundException();
        user.profile.displayName = updateProfileDto.displayName;
        return this.profileRepository.save(user.profile);
    }
}