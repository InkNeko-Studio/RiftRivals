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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rift-rivals-database',
      port: 5432,
      password: 'riftpassword',
      username: 'riftuser',
      entities: [User, Profile, Friends, Wallet],
      database: 'riftdb',
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UserModule,
    ProfileModule,
    FriendsModule,
    WalletModule
  ],
})
export class AppModule {}
