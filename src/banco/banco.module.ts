import { Module } from '@nestjs/common';
import { BancoService } from './banco.service';
import { BancoController } from './banco.controller';

@Module({
  providers: [BancoService],
  controllers: [BancoController]
})
export class BancoModule {}
