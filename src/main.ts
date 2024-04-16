import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './modules/app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
config();
