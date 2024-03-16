import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { Wallet } from './wallet/entities/wallet.entity';
import { WalletModule } from './wallet/wallet.module';
import { Friends } from './profile/entities/friends.entity';
import { ConfigModule } from '@nestjs/config';

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
      entities: [User, Profile, Friends, Wallet],
      database: process.env.DATABASE_DB,
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UserModule,
    ProfileModule,
    WalletModule
  ],
})
export class AppModule {}
