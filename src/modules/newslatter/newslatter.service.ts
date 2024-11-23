import { NewslatterDto } from './newslatter.dto';
import { PrismaService } from 'src/database/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class NewslatterService {
  constructor(private readonly prisma: PrismaService){}

  // ADD EMAIL TO NEWSLATTER
  async create({email}: NewslatterDto){
    const verify = await this.prisma.newslatter.findMany({
      where:{
        email:{
          equals:email
        }
      }
    })

    if(verify.length > 0){
      return {
        message: "Already exists"
      }
    }

    try {
      const addNewEmail = await this.prisma.newslatter.create({
        data:{
          email
        }
      })
      return addNewEmail
    } catch (error) {

      throw new HttpException("Internal error", HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }

  // GET ALL NEWSLATTER's EMAILS
  async getAll(): Promise<NewslatterDto[]> {
    try {
      const allUsers = await this.prisma.newslatter.findMany()
      return allUsers
    } catch (error) {
      throw new HttpException("Server error", HttpStatus.BAD_GATEWAY)
    }
  }

  // DELETE SPECIFY NEWSLATTER's EMAIL
  async delete(id: string){
    const response = await this.prisma.newslatter.findMany({
      where:{
        id:{
          equals:id
        }
      }
    })

    if(response.length > 0){
      await this.prisma.newslatter.delete({where:{id}})
      return {message:"EMAIL DELETED"}
    }else{
      throw new HttpException("None EMAIL exists with this id" , HttpStatus.NOT_FOUND)
    }

  }
}
