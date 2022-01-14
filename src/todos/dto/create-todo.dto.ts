import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Max } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty()
  @IsNotEmpty()
  @Max(255)
  description: string;
}
