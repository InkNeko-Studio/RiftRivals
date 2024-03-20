import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CharacterBase } from "./entities/character-base.entity";
import { User } from "src/user/entities/user.entity";
import { MintedCharacter } from "./entities/minted-character.entity";

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(CharacterBase) private readonly characterBaseRepository: Repository<CharacterBase>,
        @InjectRepository(MintedCharacter) private readonly mintedCharacterRepository: Repository<MintedCharacter>,
    ) { }

    async getMintedCharacters(id: number) {
        return await this.mintedCharacterRepository.find({
            relations: ['characterBase'],
            where: {userId: id}
        });
    }

    async mintCharacter(id: number) {
        const user = await this.userRepository.findOne({
            relations: ['wallet'],
            where: {id: id}
        });

        if (user.wallet.diamonds < 50)
            throw new BadRequestException("notenoughdiamonds")

        user.wallet.diamonds -= 50;

        let size = await this.characterBaseRepository.count();
        let character = Math.floor(Math.random() * size) + 1;
        const characterBase = await this.characterBaseRepository.findOneBy({id: character});

        let mintedCharacter = new MintedCharacter();
        mintedCharacter.user = user;
        mintedCharacter.characterBase = characterBase;

        await this.userRepository.save(user);

        return await this.mintedCharacterRepository.save(mintedCharacter);
    }
}