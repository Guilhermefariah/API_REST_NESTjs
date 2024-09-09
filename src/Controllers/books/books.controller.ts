import { Controller, Get, Post } from '@nestjs/common'

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros estão aqui!'
  }
  
  @Post()
  saveBooks(): string {
    return 'Este livro foi salvo!'
  }
}
