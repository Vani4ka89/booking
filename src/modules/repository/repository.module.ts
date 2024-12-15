import { Global, Module } from '@nestjs/common';
import { BookingRepository } from './services/booking.repository';

@Global()
@Module({
  providers: [BookingRepository],
  exports: [BookingRepository]
})
export class RepositoryModule {}
