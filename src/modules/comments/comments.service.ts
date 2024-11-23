import { Prisma } from '@prisma/client';
import { CommentDto } from './comment.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CommentGateway } from 'src/gateways/comment.gateway';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly commentGateway: CommentGateway
  ) {}

  // CREATE NEW COMMENT
  async create(data: CommentDto) {
    try {
      // Cria o comentário no banco de dados e armazena o resultado em uma variável
      const newComment = await this.prisma.comments.create({
        data,
      });
  
      // Emite o comentário criado para o frontend
      this.commentGateway.emitNewComment(newComment);
  
      // Retorna o comentário criado para o frontend, caso necessário
      return new HttpException("Comment added", HttpStatus.OK);
  
    } catch (error) {
      // Trata erros conhecidos do Prisma
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
      }
  
      // Lança um erro genérico para outros casos
      throw new HttpException("Error to create comment", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  // GET ALL COMMENTS
  async getAllComments(): Promise<CommentDto[]>{
    const data = await this.prisma.comments.findMany()
    
    return data
  }

  // DELETE SPECIFY COMMENT
  async delete(id: string){
    const response = await this.prisma.comments.findMany({
      where:{
        id:{
          equals:id
        }
      }
    })

    if(response.length > 0){
      await this.prisma.comments.delete({where:{id}})
      return new HttpException("COMMENT DELETES", HttpStatus.OK)

    } else {
      throw new HttpException("None comment exists with this id" , HttpStatus.NOT_FOUND)
    }
  }
  
}
