import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { createHash } from "crypto";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    async login(user: User) {
        const payload = { username: user.username, sub: user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async register(createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    async getProfile(username: string): Promise<{}> {
        const user = await this.userService.findOneByUsername(username);
        return {
            "id": user.id,
            "username": user.username
        };
    }

    async validateUser(
        username: string,
        password: string,
    ): Promise<any> {
        const user = await this.userService.findOneByUsername(username);
        if (!user) return null;
        
        var hash = createHash('sha512');
        const password_data = hash.update(password, 'utf-8');
        const password_hash = password_data.digest('hex');
        if (user.password === password_hash) {
            return user;
        }
        return null;
    }
}