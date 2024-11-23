import { IsNotEmpty, IsEmail } from "class-validator";

export class NewslatterDto{
  @IsNotEmpty({
    message:"EMAIL SHOULD NOT BE EMPTY"
  })
  @IsEmail()
  email: string
}