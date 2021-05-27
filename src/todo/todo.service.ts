import { Injectable } from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private repository: TodoRepository) {}
  async getTodos(): Promise<TodoDto[]> {
    return await this.repository.todos();
  }

  async create(title: string): Promise<TodoDto> {
    return await this.repository.create(title);
  }

  async getTodo(id: number): Promise<TodoDto> {
    return await this.repository.todo(id);
  }
}
