import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('wallet')
export class WalletController {
    constructor(private walletService: WalletService) { }

    @UseGuards(AuthGuard('auth-jwt'))
    @Get()
    getWallet(@Request() req) {
        return this.walletService.getWallet(req.user.username);
    }
}