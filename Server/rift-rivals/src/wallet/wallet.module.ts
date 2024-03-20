import { Module } from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { WalletController } from "./wallet.controller";
import { UserModule } from "src/user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "src/auth/strategies/jwt.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule,
    ],
    controllers: [WalletController],
    providers: [
        WalletService,
        JwtStrategy,
    ],
})
export class WalletModule {}