import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{

  hello(): object{
    return {
      AUTHOR: "MIGUEL LUAMBA",
      PERMISSION:"space website",
      WARN:"ONLY APPLYED PERSON",
      COPYRIGHT:"@Miguel_Luamba all rights reserved | 11/2024"
    }
  }
}