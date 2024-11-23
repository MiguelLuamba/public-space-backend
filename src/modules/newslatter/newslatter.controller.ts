import { NewslatterDto } from './newslatter.dto';
import { NewslatterService } from './newslatter.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('newslatter')
export class NewslatterController {
  constructor(private readonly newslatterService: NewslatterService) {}

  @Post()
  create(@Body() email: NewslatterDto) {
    return this.newslatterService.create(email);
  }

  @Get()
  getAll() {
    return this.newslatterService.getAll()
  }

  @Delete("/:id")
  delete(@Param("id") id:string){
    return this.newslatterService.delete(id)
  }


}
