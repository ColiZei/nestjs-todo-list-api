import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('todos')
@Controller()
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: 'Create todo' })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all todos' })
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get todo' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  async findOne(@Param('id') id: string) {
    try {
      const todo = await this.todosService.findOne(+id);
      return todo;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update todo' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      const todo = await this.todosService.update(+id, updateTodoDto);
      return todo;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete todo' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  async remove(@Param('id') id: string) {
    try {
      const removed = await this.todosService.remove(+id);
      return removed;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
