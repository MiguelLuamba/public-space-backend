import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CommentGateway } from 'src/gateways/comment.gateway';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService, CommentGateway],
})
export class CommentsModule {}
