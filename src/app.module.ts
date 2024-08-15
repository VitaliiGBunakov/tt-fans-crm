import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { UtilitiesModule } from './modules/utilities/utilities.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'pass',
      database: process.env.DB_DATABASE || 'test',
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    UtilitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
