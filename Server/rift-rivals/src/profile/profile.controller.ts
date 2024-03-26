import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { AuthGuard } from "@nestjs/passport";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { FindProfileDto } from "./dto/find-profile.dto";

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @UseGuards(AuthGuard('auth-jwt'))
    @Get()
    getCurrentProfile(@Request() req) {
        return this.profileService.getUserProfile(req.user.id);
    }

    @UseGuards(AuthGuard('auth-jwt'))
    @Post()
    findProfile(@Body() findProfileDto: FindProfileDto) {
        return this.profileService.getProfileById(findProfileDto.profileId);
    }
    
    @UseGuards(AuthGuard('auth-jwt'))
    @Post('update')
    updateCurrentProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.updateProfile(req.user.id, updateProfileDto);
    }
}