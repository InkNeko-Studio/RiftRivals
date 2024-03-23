import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { AuthGuard } from "@nestjs/passport";
import { MintCharacterDto } from "./dto/mint-character.dto";

@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getMintedCharacters(@Request() req) {
        return this.characterService.getMintedCharacters(req.user.id);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get('banners')
    getBanners(@Request() req) {
        return this.characterService.getBanners();
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post('mint')
    mintCharacter(@Request() req, @Body() mintCharacterDto: MintCharacterDto) {
        return this.characterService.mintCharacter(req.user.id, mintCharacterDto.bannerId);
    }
}