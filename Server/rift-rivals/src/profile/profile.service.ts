import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { Profile } from "./entities/profile.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { User } from "src/user/entities/user.entity";
import { Friends } from "./entities/friends.entity";

@Injectable()
export class ProfileService {
    constructor(
        private readonly userService: UserService,
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
        @InjectRepository(Friends) private readonly friendsRepository: Repository<Friends>,
    ) { }

    async getProfileById(id: number): Promise<Profile> {
        const profile = await this.profileRepository.findOneBy({id: id});
        if (!profile)
            throw new NotFoundException();
        return profile;
    }

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

    async getFriends(username: string): Promise<Profile[]> {
        const user = await this.userService.findOne(username);
        if (!user)
            throw new NotFoundException();

        const friendsSent = await this.friendsRepository.find({
            relations: ['receiver'],
            where: { senderId: user.profile.id, accepted: true }
        })

        const friendsReceived = await this.friendsRepository.find({
            relations: ['sender'],
            where: { receiverId: user.profile.id, accepted: true }
        });

        const friends = [];
        friendsSent.map(v => {
            friends.push(v.receiver);
        });

        friendsReceived.map(v => {
            friends.push(v.sender);
        });

        return friends;
    }

    async getFriendRequests(username: string): Promise<Friends[]> {
        const user = await this.userService.findOne(username);
        if (!user)
            throw new NotFoundException();
        return await this.friendsRepository.find({
            where: {
                receiver: user.profile,
                accepted: false,
            }
        });
    }

    async sendFriendRequest(username: string, friend: number): Promise<Friends> {
        const user = await this.userService.findOne(username);
        if (!user)
            throw new NotFoundException();

        const friendProfile = await this.profileRepository.findOneBy({id: friend});
        if (!friendProfile)
            throw new NotFoundException();

        const friends = new Friends();
        friends.sender = user.profile;
        friends.receiver = friendProfile;
        friends.accepted = false;

        return await this.friendsRepository.save(friends);
    }
    
    async acceptFriendRequest(username: string, friendsId: number): Promise<Friends> {
        const user = await this.userService.findOne(username);
        if (!user)
            throw new NotFoundException();

        const friendRequest = await this.friendsRepository.findOne({
            relations: ['receiver'],
            where: {id: friendsId}
        });
        if (!friendRequest)
            throw new NotFoundException();

        if (friendRequest.receiver.id != user.profile.id)
            throw new BadRequestException();

        friendRequest.accepted = true;

        return await this.friendsRepository.save(friendRequest);
    }
}