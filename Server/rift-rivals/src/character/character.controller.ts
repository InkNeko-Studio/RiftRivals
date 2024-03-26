import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { AuthGuard } from "@nestjs/passport";
import { MintCharacterDto } from "./dto/mint-character.dto";

@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService) {}

    @UseGuards(AuthGuard('auth-jwt'))
    @Get()
    async getMintedCharacters(@Request() req) {
        return {
            mintedCharacters: await this.characterService.getMintedCharacters(req.user.id)
        };
    }
    
    @UseGuards(AuthGuard('auth-jwt'))
    @Get('banners')
    async getBanners(@Request() req) {
        return {
            banners: await this.characterService.getBanners()
        };
    }
    
    @UseGuards(AuthGuard('auth-jwt'))
    @Post('mint')
    async mintCharacter(@Request() req, @Body() mintCharacterDto: MintCharacterDto) {
        return await this.characterService.mintCharacter(req.user.id, mintCharacterDto.bannerId);
    }
}