import { Module } from '@nestjs/common';
import { NewslatterService } from './newslatter.service';
import { PrismaService } from '../../database/prisma.service';
import { NewslatterController } from './newslatter.controller';

@Module({
  controllers: [NewslatterController],
  providers: [NewslatterService, PrismaService],
})
export class NewslatterModule {}
