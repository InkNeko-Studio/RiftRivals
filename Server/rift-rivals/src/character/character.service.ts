import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CharacterBase } from "./entities/character-base.entity";
import { User } from "src/user/entities/user.entity";
import { MintedCharacter } from "./entities/minted-character.entity";
import { Banner } from "./entities/banner.entity";
import { BannerEntry } from "./entities/banner-entry.entity";

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Banner) private readonly bannerRepository: Repository<Banner>,
        @InjectRepository(BannerEntry) private readonly bannerEntryRepository: Repository<BannerEntry>,
        @InjectRepository(CharacterBase) private readonly characterBaseRepository: Repository<CharacterBase>,
        @InjectRepository(MintedCharacter) private readonly mintedCharacterRepository: Repository<MintedCharacter>,
    ) { }

    async getMintedCharacters(id: number) {
        return await this.mintedCharacterRepository.find({
            relations: ['characterBase'],
            where: {userId: id}
        });
    }

    async getBanners() {
        return await this.bannerRepository.find({
            join: {
                alias: "banner",
                leftJoinAndSelect: {
                    "bannerEntry": "banner.characters",
                    "character": "bannerEntry.character"
                }
            }
        });
    }

    async mintCharacter(id: number, bannerId: number) {
        const user = await this.userRepository.findOne({
            relations: ['wallet'],
            where: {id: id}
        });
        
        if (!user)
            throw new UnauthorizedException();

        const banner = await this.bannerRepository.findOne({
            join: {
                alias: "banner",
                leftJoinAndSelect: {
                    "bannerEntry": "banner.characters",
                    "character": "bannerEntry.character"
                }
            },
            where: {id: bannerId}
        });

        if (!banner)
            throw new BadRequestException("unknownbanner");
        
        if (user.wallet.diamonds < banner.price)
            throw new BadRequestException("notenoughdiamonds")

        user.wallet.diamonds -= banner.price;

        let size = banner.characters.length;

        let percentageSum = 0;
        let randomChar = Math.floor(Math.random() * 100);
        let characterBase = banner.characters[0].character;;

        for (var i in banner.characters) {
            percentageSum += banner.characters[i].percentage;
            if (randomChar < percentageSum) {
                characterBase = banner.characters[i].character;
                break;
            }
        }

        let mintedCharacter = new MintedCharacter();
        mintedCharacter.user = user;
        mintedCharacter.characterBase = characterBase;

        await this.userRepository.save(user);

        return await this.mintedCharacterRepository.save(mintedCharacter);
    }
}