import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './interface/todo.interface';
import { TodoStatus } from './interface/todostatus.enum';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto) {
    createTodoDto.id = Math.random();
    createTodoDto.status = TodoStatus.Pending;
    createTodoDto.createdAt = new Date();

    this.todos.push(createTodoDto);
    return createTodoDto;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find((t) => t.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }

    const updatedTodo = { ...this.todos[index], ...updateTodoDto };
    return updatedTodo;
  }

  remove(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
