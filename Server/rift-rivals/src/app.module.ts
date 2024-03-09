import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rift-rivals-database',
      port: 5432,
      password: 'riftpassword',
      username: 'riftuser',
      entities: [User],
      database: 'riftdb',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
