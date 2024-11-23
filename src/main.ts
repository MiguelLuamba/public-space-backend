import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe)

  app.enableCors({
    origin: [
      "http://localhost:3000/",
      "http://localhost:3000"
    ]
  })

  await app.listen(9889);
}
bootstrap();
