import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { FriendsService } from "./friends.service";
import { AuthGuard } from "@nestjs/passport";
import { SendFriendRequestDto } from "./dto/send-friend-request.dto";
import { AcceptFriendRequestDto } from "./dto/accept-friend-request.dto";
import { RemoveFriendDto } from "./dto/remove-friend.dto";

@Controller('friends')
export class FriendsController {
    constructor(private friendsService: FriendsService) {}

    @UseGuards(AuthGuard('auth-jwt'))
    @Get()
    async getFriendList(@Request() req) {
        return {
            friends: await this.friendsService.getFriends(req.user.id),
        };
    }

    @UseGuards(AuthGuard('auth-jwt'))
    @Get("requests")
    async getFriendRequests(@Request() req) {
        return {
            friendRequests: await this.friendsService.getFriendRequests(req.user.id),
        };
    }
    
    @UseGuards(AuthGuard('auth-jwt'))
    @Post("send")
    sendFriendRequest(@Request() req, @Body() sendFriendRequestDto: SendFriendRequestDto) {
        console.log(req.user);
        return this.friendsService.sendFriendRequest(req.user.id, sendFriendRequestDto.profileId);
    }

    @UseGuards(AuthGuard('auth-jwt'))
    @Post("accept")
    acceptFriendRequest(@Request() req, @Body() acceptFriendRequestDto: AcceptFriendRequestDto) {
        return this.friendsService.acceptFriendRequest(req.user.id, acceptFriendRequestDto.friendsId);
    }

    @UseGuards(AuthGuard('auth-jwt'))
    @Post("remove")
    RemoveFriendRequest(@Request() req, @Body() RemoveFriendDto: RemoveFriendDto) {
        return this.friendsService.removeFriendRequest(req.user.id, RemoveFriendDto.friendsId);
    }
}