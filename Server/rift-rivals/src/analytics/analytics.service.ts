import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginData } from "./entities/login-data.entity";
import { Repository } from "typeorm";

@Injectable()
export class AnalyticsService {
    constructor(
        @InjectRepository(LoginData) private readonly loginDataRepository: Repository<LoginData>
    ) {}

    async getLoginCount() {
        return await this.loginDataRepository.find({
            select: ['id', 'timestamp']
        });
    }

    async getLoginDevices() {
        return await this.loginDataRepository.createQueryBuilder('loginData')
        .addSelect('COUNT(loginData.id) AS total')
        .groupBy("loginData.device")         
        .getRawMany();
    }

    async registerLogin(loginData: LoginData) {
        await this.loginDataRepository.save(loginData);
    }
}