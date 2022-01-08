import { TodoStatus } from '../interface/todostatus.enum';

export class CreateTodoDto {
  id: number;
  description: string;
  status: TodoStatus;
  createdAt: Date;
}
