import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AdminGuard } from "../admin.guard";
import AdminUserService from "./admin.user.service";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('admin/users')
export default class AdminUserController {
    constructor(private adminUserService: AdminUserService) { }

    @Get('')
    @UseGuards(AdminGuard)
    getAllUsers() {
        return this.adminUserService.getAllUsers();
    }

    @Get('count')
    @UseGuards(AdminGuard)
    getUsersCount() {
        return this.adminUserService.getUsersCount();
    }

    @Post('')
    @UseGuards(AdminGuard)
    updateUser(@Body() updateUserDto: UpdateUserDto) {
        return this.adminUserService.updateUser(updateUserDto);
    }
}