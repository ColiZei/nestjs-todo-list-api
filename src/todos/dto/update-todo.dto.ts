import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  MaxLength,
} from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
