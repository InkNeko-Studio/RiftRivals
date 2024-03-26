import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Banner } from "src/character/entities/banner.entity";

@Injectable()
export default class AdminBannerService {
    constructor(
        @InjectRepository(Banner) private readonly bannerRepository: Repository<Banner>,
    ) { }

    async getAllBanners() {
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
}