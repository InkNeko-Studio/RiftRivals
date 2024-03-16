import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { AuthGuard } from "@nestjs/passport";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { FriendRequestDto } from "./dto/friend-request.dto";

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getCurrentProfile(@Request() req) {
        return this.profileService.getProfile(req.user.username);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    updateCurrentProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.updateProfile(req.user.username, updateProfileDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("/friends")
    getFriendList(@Request() req) {
        return this.profileService.getFriends(req.user.username);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("/friends/requests")
    getFriendRequests(@Request() req) {
        return this.profileService.getFriendRequests(req.user.username);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post("/friends/send")
    sendFriendRequest(@Request() req, @Body() friendRequestDto: FriendRequestDto) {
        return this.profileService.sendFriendRequest(req.user.username, friendRequestDto.friendId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post("/friends/accept")
    acceptFriendRequest(@Request() req, @Body() friendRequestDto: FriendRequestDto) {
        return this.profileService.acceptFriendRequest(req.user.username, friendRequestDto.friendId);
    }
}