import { CommentDto } from './comment.dto';
import { CommentsService } from './comments.service';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  constructor(private readonly comment: CommentsService) {}

  @Post()
  create(@Body() newData: CommentDto){
    return this.comment.create(newData)
  }

  @Get()
  getAllComments(){
    return this.comment.getAllComments()
  }

  @Delete("/:id")
  deleteComment(@Param("id") id:string){
    return this.comment.delete(id)
  }
}
