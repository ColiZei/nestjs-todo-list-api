import { TodoStatus } from './todostatus.enum';

export interface Todo {
  id?: number;
  description: string;
  status: TodoStatus;
  createdAt: Date;
}
