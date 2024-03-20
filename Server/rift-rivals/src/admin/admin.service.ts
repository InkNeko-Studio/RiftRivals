import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "./entities/admin.entity";
import { JwtService } from "@nestjs/jwt";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { createHash } from "crypto";
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export default class AdminService {
    constructor(
        @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
        private jwtService: JwtService,
    ) { }

    async login(signInDto: SignInDto) {
        const user = await this.adminRepository.findOneBy({ username: signInDto.username });
        if (!user) throw new UnauthorizedException();

        var hash = createHash('sha512');
        const password_data = hash.update(signInDto.password, 'utf-8');
        const password_hash = password_data.digest('hex');
        if (user.password !== password_hash) {
            throw new UnauthorizedException();
        }

        const payload = { username: user.username, id: user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async register(createAdminDto: CreateAdminDto) {
        try {
            var hash = createHash('sha512');
            const password_data = hash.update(createAdminDto.password, 'utf-8');

            let admin = new Admin();
            admin.username = createAdminDto.username;
            admin.email = createAdminDto.email;
            admin.password = password_data.digest('hex');
            admin.creationDate = new Date();

            const adminCreated = await this.adminRepository.save(admin);

            if (adminCreated)
                return true;
            else
                return false;
        } catch (err) {
            throw new BadRequestException("registerfailed");
        }
    }
}