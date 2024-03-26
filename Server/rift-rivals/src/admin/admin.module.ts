import { Module } from "@nestjs/common";
import AdminController from "./admin.controller";
import AdminService from "./admin.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Admin } from "./entities/admin.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import AdminUserController from "./submodules/admin.user.controller";
import AdminUserService from "./submodules/admin.user.service";
import { CharacterBase } from "src/character/entities/character-base.entity";
import AdminCharacterController from "./submodules/admin.character.controller";
import AdminCharacterService from "./submodules/admin.character.service";
import AdminBannerController from "./submodules/admin.banner.controller";
import { Banner } from "src/character/entities/banner.entity";
import AdminBannerService from "./submodules/admin.banner.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            global: true,
            secret: "ultrasecretkey",
            signOptions: { expiresIn: "24h" }
        }),
        TypeOrmModule.forFeature([Admin, User, CharacterBase, Banner]),
    ],
    controllers: [
        AdminController,
        AdminUserController,
        AdminCharacterController,
        AdminBannerController,
    ],
    providers: [
        AdminService,
        AdminUserService,
        AdminCharacterService,
        AdminBannerService,
    ]
})
export default class AdminModule {

}