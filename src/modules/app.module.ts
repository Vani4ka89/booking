import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { PostgresModule } from './postgres/postgres.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [BookingModule, PostgresModule, RepositoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
