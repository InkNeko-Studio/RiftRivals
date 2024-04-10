import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { Wallet } from './wallet/entities/wallet.entity';
import { WalletModule } from './wallet/wallet.module';
import { Friends } from './friends/entities/friends.entity';
import { FriendsModule } from './friends/friends.module';
import { CharacterModule } from './character/character.module';
import { CharacterBase } from './character/entities/character-base.entity';
import { MintedCharacter } from './character/entities/minted-character.entity';
import { Banner } from './character/entities/banner.entity';
import { BannerEntry } from './character/entities/banner-entry.entity';
import { LoginData } from './analytics/entities/login-data.entity';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rift-rivals-database',
      port: 5432,
      password: 'riftpassword',
      username: 'riftuser',
      entities: [
        User, Profile,
        Friends, Wallet,
        Banner, BannerEntry,
        CharacterBase, MintedCharacter,
        LoginData
      ],
      database: 'riftdb',
      synchronize: true,
      logging: true,
    }),
    AnalyticsModule,
    AuthModule,
    UserModule,
    ProfileModule,
    FriendsModule,
    WalletModule,
    CharacterModule,
  ],
})
export class AppModule { }
