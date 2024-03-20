import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { CharacterBase } from './entities/character-base.entity';
import { User } from 'src/user/entities/user.entity';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { MintedCharacter } from './entities/minted-character.entity';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([User, CharacterBase, MintedCharacter]),
  ],
  controllers: [CharacterController],
  providers: [CharacterService, JwtStrategy],
})
export class CharacterModule {}
