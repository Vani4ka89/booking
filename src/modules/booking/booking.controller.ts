import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './services/booking.service';
import { CreateBookingRequestDto } from './models/dto/request/create-booking.request.dto';
import { UpdateBookingRequestDto } from './models/dto/request/update-booking.request.dto';
import { BookingResponseDto, BookingResponseDtoAll } from './models/dto/response/booking.response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Booking')
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  public async create(@Body() dto: CreateBookingRequestDto):Promise<BookingResponseDto> {
    return await this.bookingService.create(dto);
  }

  @Get()
  public async findAll(): Promise<BookingResponseDtoAll> {
    return await this.bookingService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<BookingResponseDto> {
    return await this.bookingService.findOne(id);
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateBookingRequestDto): Promise<BookingResponseDto> {
    return await this.bookingService.update(id, dto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string):Promise<void> {
    await this.bookingService.remove(id);
  }
}
