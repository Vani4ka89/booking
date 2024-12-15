import { IsString, Matches } from 'class-validator';

export class CreateBookingRequestDto {
  @IsString()
  user: string;

  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Date must be in the format YYYY-MM-DD.' })
  date: string;

  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Time must be in the format HH:mm.' })
  startTime: string;

  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Time must be in the format HH:mm.' })
  endTime: string;
}
