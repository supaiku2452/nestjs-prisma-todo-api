import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoRepository {
  constructor(private prisma: PrismaService) {}

  async todos(): Promise<TodoDto[]> {
    return this.prisma.todos.findMany();
  }

  async create(title: string): Promise<TodoDto> {
    return this.prisma.todos.create({
      data: {
        title,
      },
    });
  }

  async todo(id: number): Promise<TodoDto> {
    return this.prisma.todos.findUnique({
      where: {
        id,
      },
    });
  }
}
