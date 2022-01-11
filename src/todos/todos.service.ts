import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findOne(id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    return this.todoRepository.save({ ...updateTodoDto, id: todo.id });
  }

  async remove(id: number) {
    const todo = await this.findOne(id);
    return this.todoRepository.delete(todo.id);
  }
}
