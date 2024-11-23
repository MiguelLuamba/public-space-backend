import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CommentGateway } from './gateways/comment.gateway';
import { CommentsModule } from './modules/comments/comments.module';
import { NewslatterModule } from './modules/newslatter/newslatter.module';


@Module({
  imports: [
    CommentsModule, 
    NewslatterModule, 
  ],
  controllers: [AppController],
  providers: [AppService, CommentGateway],
})
export class AppModule {}
