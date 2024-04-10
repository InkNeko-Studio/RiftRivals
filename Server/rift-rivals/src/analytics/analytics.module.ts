import { Module } from "@nestjs/common";
import { AnalyticsService } from "./analytics.service";
import { LoginData } from "./entities/login-data.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([LoginData]),
    ],
    providers: [AnalyticsService],
    exports: [AnalyticsService],
})
export class AnalyticsModule {}