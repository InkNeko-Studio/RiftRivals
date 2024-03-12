import { Module, forwardRef } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "src/profile/entities/profile.entity";
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ProfileController } from './profile.controller';
import { UserModule } from 'src/user/user.module';
import { Friends } from './entities/friends.entity';

@Module({
  imports: [
    UserModule,
    PassportModule,
    TypeOrmModule.forFeature([Profile, Friends]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService, JwtStrategy],
  exports: [ProfileService]
})
export class ProfileModule {}
