import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BookingEntity } from '../../../database/entities/booking.entity';

@Injectable()
export class BookingRepository extends Repository<BookingEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(BookingEntity, dataSource.manager);

  }
}
