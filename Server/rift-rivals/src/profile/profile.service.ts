import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { Profile } from "./entities/profile.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class ProfileService {
    constructor(
        private readonly userService: UserService,
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
    ) { }

    async getProfile(username: string): Promise<Profile> {
        const user = await this.userService.findOne(username);
        if (!user)
            throw new NotFoundException();
        return user.profile;
    }

    async updateProfile(username: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
        const user = await this.userService.findOne(username);
        if (!user)
            throw new NotFoundException();
        user.profile.displayName = updateProfileDto.displayName;
        return this.profileRepository.save(user.profile);
    }
}