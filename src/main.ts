import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/exceptions/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Booking')
    .setDescription('The booking API description')
    .setVersion('1.0.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory, {
    swaggerOptions: {
      defaultModelExpandDepth: 1,
      docExpansion: 'list',
      persistAuthorization: true,
    },
  });

  app.enableCors({origin: true});
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    forbidNonWhitelisted: true,
    whitelist: true,
  }));

  await app.listen(3001, () => {
    Logger.log('App started on port 3001');
    Logger.log('documentation is on http://localhost:3001/docs')
  });
}

void bootstrap();
