import { BooksService } from './../../Services/books/books.service';
import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common'
import { BookDTO } from '../../DTO/books.dto'

@Controller('books')
export class BooksController {

  constructor(
    private readonly BooksService : BooksService
  ){}

  @Get()
  async getAllBooks(): Promise<BookDTO[]> {
     await this.BooksService.getAllBooks()
     return
   
  }
  
  @Post()
  async saveBooks(@Body() newBook: BookDTO): Promise<BookDTO> {
    return await this.BooksService.saveBook(newBook)
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
