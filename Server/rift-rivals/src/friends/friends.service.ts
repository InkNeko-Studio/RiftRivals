import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Profile } from "src/profile/entities/profile.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Friends } from "../friends/entities/friends.entity";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class FriendsService {
    constructor(
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
        @InjectRepository(Friends) private readonly friendsRepository: Repository<Friends>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async getFriends(id: number): Promise<Profile[]> {
        const user = await this.userRepository.findOne({
            relations: ['profile'],
            where:{id: id}
        });
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

    async getFriendRequests(id: number): Promise<Friends[]> {
        const user = await this.userRepository.findOne({
            relations: ['profile'],
            where:{id: id}
        });
        if (!user)
            throw new NotFoundException();
        return await this.friendsRepository.find({
            relations: ['sender'],
            where: {
                receiver: user.profile,
                accepted: false,
            }
        });
    }

    async sendFriendRequest(id: number, friend: number): Promise<Friends> {
        const user = await this.userRepository.findOne({
            relations: ['profile'],
            where:{id: id}
        });
        console.log("SERVICE", user);
        if (!user)
            throw new UnauthorizedException();

        const friendProfile = await this.profileRepository.findOneBy({id: friend});
        if (!friendProfile)
            throw new NotFoundException();

        const friends = new Friends();
        friends.sender = user.profile;
        friends.receiver = friendProfile;
        friends.accepted = false;

        return await this.friendsRepository.save(friends);
    }
    
    async acceptFriendRequest(id: number, friendsId: number): Promise<Friends> {
        const user = await this.userRepository.findOne({
            relations: ['profile'],
            where:{id: id}
        });
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
    
    async removeFriendRequest(id: number, friendsId: number): Promise<Friends> {
        const user = await this.userRepository.findOne({
            relations: ['profile'],
            where:{id: id}
        });
        if (!user)
            throw new UnauthorizedException();

        const friendRequest = await this.friendsRepository.findOne({
            relations: ['sender', 'receiver'],
            where: {id: friendsId}
        });
        if (!friendRequest)
            throw new NotFoundException();

        if (friendRequest.sender.id != user.profile.id)
            throw new UnauthorizedException();

        if (friendRequest.receiver.id != user.profile.id)
            throw new UnauthorizedException();

        return await this.friendsRepository.remove(friendRequest);
    }
}