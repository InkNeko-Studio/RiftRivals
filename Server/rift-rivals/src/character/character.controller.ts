import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getCurrentProfile(@Request() req) {
        return this.characterService.getMintedCharacters(req.user.id);
    }

    
    @UseGuards(AuthGuard('jwt'))
    @Get('mint')
    mintCharacter(@Request() req) {
        return this.characterService.mintCharacter(req.user.id);
    }
}