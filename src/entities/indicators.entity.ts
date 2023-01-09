import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Indicators {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  number: string;

  @Column({ length: 500 })
  partnerName: string;

  @Column({ type: 'date' })
  date: string;

  @Column({default: false, type: 'bool'})
  send: boolean;

  @Column({ type: 'datetime', nullable: true })
  date_send: Date;
}