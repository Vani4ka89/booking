export class BookingResponseDto {
  id: string;
  user: string;
  date: Date;
  startTime: string;
  endTime: string;
  // createdAt: Date;
  // updatedAt: Date;
}

export class BookingResponseDtoAll {
  data: BookingResponseDto[]
}