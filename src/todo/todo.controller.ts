import { Body, Controller, Get, HttpCode, Injectable, Param, Post } from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { TodoService } from './todo.service';
import { TodoPostParam } from './todo.interface';

@Injectable()
@Controller('todos')
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  @HttpCode(200)
  async findAll(): Promise<TodoDto[]> {
    return this.service.getTodos();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: TodoPostParam): Promise<TodoDto> {
    return this.service.create(body.title);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TodoDto> {
    return this.service.getTodo(Number(id));
  }
}
