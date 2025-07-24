import { Module } from '@nestjs/common';
import { FeiranteService } from './feirante.service';
import { FeiranteController } from './feirante.controller';

@Module({
  providers: [FeiranteService],
  controllers: [FeiranteController]
})
export class FeiranteModule {}
