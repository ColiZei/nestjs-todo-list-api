import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TodoRepository } from './entities/todo.repository';
import { TodosService } from './todos.service';

const mockRepository = {};

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: getRepositoryToken(TodoRepository),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
