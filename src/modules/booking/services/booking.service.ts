import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateBookingRequestDto } from '../models/dto/request/create-booking.request.dto';
import { UpdateBookingRequestDto } from '../models/dto/request/update-booking.request.dto';
import { BookingResponseDto, BookingResponseDtoAll } from '../models/dto/response/booking.response.dto';
import { BookingRepository } from '../../repository/services/booking.repository';
import { BookingMapper } from './booking.mapper';

@Injectable()
export class BookingService {
  constructor(private readonly bookingRepository: BookingRepository) {
  }

  public async create(dto: CreateBookingRequestDto): Promise<BookingResponseDto> {
    const bookingEntity = await this.bookingRepository.save(this.bookingRepository.create(dto));
    return BookingMapper.toResponseDto(bookingEntity);
  }

  public async findAll(): Promise<BookingResponseDtoAll> {
    const bookingEntities = await this.bookingRepository.find();
    if (!bookingEntities) {
      throw new UnprocessableEntityException('Not found any data');
    }
    return BookingMapper.toResponseDtoAll(bookingEntities);
  }

  public async findOne(id: string): Promise<BookingResponseDto> {
    const bookingEntity = await this.bookingRepository.findOneBy({ id });
    if (!bookingEntity) {
      throw new UnprocessableEntityException('Data with this ID not found');
    }
    return BookingMapper.toResponseDto(bookingEntity);
  }

  public async update(id: string, dto: UpdateBookingRequestDto): Promise<BookingResponseDto> {
    const bookingEntity = await this.bookingRepository.findOneBy({ id });
    if (!bookingEntity) {
      throw new UnprocessableEntityException('Data with this ID not found');
    }
    const updatedBooking = await this.bookingRepository.save(this.bookingRepository.merge(bookingEntity, dto));
    return BookingMapper.toResponseDto(updatedBooking);
  }

  public async remove(id: string): Promise<void> {
    const booking = await this.bookingRepository.findOneBy({ id });
    if (!booking) {
      throw new UnprocessableEntityException('Data not found');
    }
    await this.bookingRepository.remove(booking);
  }
}
