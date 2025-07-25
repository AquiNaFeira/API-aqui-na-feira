import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { FeiranteModule } from './feirante/feirante.module';
import { BancoModule } from './banco/banco.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { FavoriteModule } from './favorite/favorite.module';
import { NotificationModule } from './notification/notification.module';
import { TagsModule } from './tags/tags.module';
import { PrismaService } from './prisma-database/prisma.service';

@Module({
  imports: [AthModule, UserModule, ClientModule, FeiranteModule, BancoModule, EvaluationModule, FavoriteModule, NotificationModule, TagsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
