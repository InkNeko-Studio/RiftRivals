import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { Wallet } from './wallet/entities/wallet.entity';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from '@nestjs/config';
import { FriendsModule } from './friends/friends.module';
import { CharacterModule } from './character/character.module';
import { CharacterBase } from './character/entities/character-base.entity';
import { MintedCharacter } from './character/entities/minted-character.entity';
import AdminModule from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { Friends } from './friends/entities/friends.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      extra: {
        "socketPath": process.env.DATABASE_HOST
      },
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USERNAME,
      database: process.env.DATABASE_DB,
      entities: [Admin, User, Profile, Friends, Wallet, CharacterBase, MintedCharacter],
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UserModule,
    ProfileModule,
    FriendsModule,
    WalletModule,
    CharacterModule,
    AdminModule,
  ],
})
export class AppModule {}
