import { IsNotEmpty, Length } from "class-validator"

export class CommentDto {
  @IsNotEmpty({
    message:"username shoud not be empty"
  })
  @Length(4, 24)
  userName: string

  @IsNotEmpty({
    message:"comment should not be empty"
  })
  comment : string

  @IsNotEmpty({
    message:"reaction should not be empty"
  })
  reaction: string

  @IsNotEmpty({
    message:"country should not be empty"
  })
  country: string

  @IsNotEmpty({
    message:"flag should not be empty"
  })
  flag: string
}
