import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common'
import { BookDTO } from '../../DTO/books.dto'

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros estão aqui!'
  }
  
  @Post()
  saveBooks(@Body() newBook: BookDTO): BookDTO {
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
