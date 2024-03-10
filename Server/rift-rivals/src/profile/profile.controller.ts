import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { AuthGuard } from "@nestjs/passport";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Get(":id")
    getProfile(@Param() params: any) {
        return this.profileService.getProfile(params.username);
    }

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
}