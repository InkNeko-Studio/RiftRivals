import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { FriendsController } from './friends.controller';
import { Profile } from 'src/profile/entities/profile.entity';
import { Friends } from 'src/friends/entities/friends.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([User, Profile, Friends]),
  ],
  controllers: [FriendsController],
  providers: [FriendsService, JwtStrategy]
})
export class FriendsModule {}
