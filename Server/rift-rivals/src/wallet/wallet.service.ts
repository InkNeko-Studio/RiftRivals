import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { Wallet } from "./entities/wallet.entity";

@Injectable()
export class WalletService {
    constructor(
        private readonly userService: UserService,
    ) {}

    async getWallet(username: string): Promise<Wallet> {
        const user = await this.userService.findOne(username);
        if (!user)
            throw new NotFoundException();
        return user.wallet;
    }
}