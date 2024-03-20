import { Controller, Get, UseGuards } from "@nestjs/common";
import { AdminGuard } from "../admin.guard";
import AdminCharacterService from "./admin.character.service";

@Controller('admin/characters')
export default class AdminCharacterController {
    constructor(private adminCharacterService: AdminCharacterService) { }

    @Get('')
    @UseGuards(AdminGuard)
    getAllCharacters() {
        return this.adminCharacterService.getAllCharacters();
    }
}