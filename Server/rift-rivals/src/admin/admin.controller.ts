import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import AdminService from "./admin.service";
import { SignInDto } from "./dto/sign-in.dto";
import { CreateAdminDto } from "./dto/create-admin.dto";

@Controller('admin')
export default class AdminController {
    constructor(private adminService: AdminService) {}

    @Post('login')
    login(@Body() signInDto: SignInDto) {
        return this.adminService.login(signInDto);
    }

    @Post('register')
    register(@Body() createAdminDto: CreateAdminDto) {
        return this.adminService.register(createAdminDto);
    }
}