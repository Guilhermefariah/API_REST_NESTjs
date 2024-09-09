import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common'

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros estão aqui!'
  }
  
  @Post()
  saveBooks(@Body() newBook: string): string {
    return newBook
  }

  @Patch()
  updateBooks(): string {
    return 'Este livro foi atualizado!'
  }

  @Delete()
  deleteBooks(): string {
    return 'Este livro foi deletado!'
  }
}
