import { Controller, Get, Post, Patch } from '@nestjs/common'

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

  @Patch()
  updateBooks(): string {
    return 'Este livro foi atualizado!'
  }

  
}
