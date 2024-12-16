import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Permite solicitudes desde este origen
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Headers permitidos
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
