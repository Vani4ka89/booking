import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'node:path';
import * as process from 'node:process';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: "0.0.0.0",
        port: 5432,
        username: "user",
        password: "pass",
        database: "booking_db",
        entities: [path.join(process.cwd(), 'dist', 'database', 'entities', '*.entity.js')],
        migrations: [path.join(process.cwd(), 'dist', 'database', 'migrations', '*.js')],
        migrationsRun: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {
}
