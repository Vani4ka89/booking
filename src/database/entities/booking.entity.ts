import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('Booking')
export class BookingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  user: string;

  @Column('date')
  date: Date;

  @Column('time')
  startTime: string;

  @Column('time')
  endTime: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}