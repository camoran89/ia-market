import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module.js';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, new FastifyAdapter(), {
    logger: ['log', 'error', 'warn', 'debug', 'verbose']
  });

  app.enableShutdownHooks();

  const port = process.env.PORT ? Number(process.env.PORT) : 4000;
  await app.listen(port, '0.0.0.0');
  logger.log(`IA Marketplace service running on http://localhost:${port}`);
}

bootstrap();
