import { Module } from '@nestjs/common';
import { TodosController } from './todos/todos.controller';
import { TodosModule } from './todos/todos.module';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [TodosModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class AppModule {}
