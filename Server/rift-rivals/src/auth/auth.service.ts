import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
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
        const payload = { username: user.username, id: user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async register(createUserDto: CreateUserDto) {
        try {
            const user = await this.userService.create(createUserDto);
            if (user)
                return true;
            else
                return false;
        } catch(err) {
            const isUsernameInUse = await this.userService.usernameAlreadyInUse(createUserDto.username);
            if (isUsernameInUse) 
                throw new BadRequestException("usernamealreadyinuse");

            const isEmailInUse = await this.userService.usernameAlreadyInUse(createUserDto.username);
            if (isEmailInUse) 
                throw new BadRequestException("emailalreadyinuse");

            throw new BadRequestException("registerfailed");
        }
    }

    async validateUser(
        username: string,
        password: string,
    ): Promise<any> {
        const user = await this.userService.findOne(username);
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