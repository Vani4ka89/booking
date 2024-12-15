import { BookingEntity } from '../../../database/entities/booking.entity';
import { BookingResponseDto, BookingResponseDtoAll } from '../models/dto/response/booking.response.dto';

export class BookingMapper {
  public static toResponseDto(entity: BookingEntity): BookingResponseDto {
    return {
      id: entity.id,
      user: entity.user,
      date: entity.date,
      startTime: entity.startTime.substring(0, 5),
      endTime: entity.endTime.substring(0, 5),
    };
  }

  public static toResponseDtoAll(entities: BookingEntity[]): BookingResponseDtoAll {
    return {
      data: entities.map(entity => this.toResponseDto(entity)),
    };
  }
}