import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty({
    example: 'My Todo',
    description: 'The description of your todo',
  })
  description: string;

  @Column({ default: false })
  @ApiProperty()
  status: boolean;
}
