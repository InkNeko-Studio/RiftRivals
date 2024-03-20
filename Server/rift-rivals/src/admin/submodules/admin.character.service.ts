import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CharacterBase } from "src/character/entities/character-base.entity";

@Injectable()
export default class AdminCharacterService {
    constructor(
        @InjectRepository(CharacterBase) private readonly characterBaseRepository: Repository<CharacterBase>,
    ) { }

    async getAllCharacters() {
        return await this.characterBaseRepository.find();
    }
}