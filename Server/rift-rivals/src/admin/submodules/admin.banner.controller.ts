import { Controller, Get, UseGuards } from "@nestjs/common";
import { AdminGuard } from "../admin.guard";
import AdminBannerService from "./admin.banner.service";

@Controller('admin/banner')
export default class AdminBannerController {
    constructor(private adminBannerService: AdminBannerService) { }

    @Get()
    @UseGuards(AdminGuard)
    getAllBanners() {
        return this.adminBannerService.getAllBanners();
    }
}