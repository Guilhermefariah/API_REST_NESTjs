import { Controller, Get, Post, Patch, Delete } from '@nestjs/common'

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

  @Delete()
  deleteBooks(): string {
    return 'Este livro foi deletado!'
  }
}
