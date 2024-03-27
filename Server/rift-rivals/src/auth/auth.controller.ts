import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { SignInDto } from "./dto/sign-in.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('auth-local'))
    @Post('login')
    login(@Body() signInDto: SignInDto, @Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('refresh-jwt'))
    @Get('refresh')
    refresh(@Request() req) {
        return this.authService.refresh(req.user);
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }
}