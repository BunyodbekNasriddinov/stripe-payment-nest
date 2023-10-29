import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log('server listening on port ', PORT));
}
bootstrap();
