import { BooksService } from './../../Services/books/books.service';
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common'
import { Book } from '../../Mongo/Interfaces/book.interface'
import { BookDTO } from 'src/DTO/books.dto';

@Controller('books')
export class BooksController {

  constructor(
    private readonly BooksService : BooksService
  ){}

  @Get()
  async getAllBooks(): Promise<Book[]> {
     await this.BooksService.getAllBooks()
     return
  }

  @Get(':bookID')
  async getBookById(@Param('bookID') bookID: String): Promise<Book>{
    return await this.BooksService.getBookById(bookID)
  }
  
  @Get('author/:authorName')
  async getBookByAuthorName(@Param('authorName') authorName: String): Promise<Book[]> {
    return await this.BooksService.getBookByAuthorName(authorName)
  }

  @Get('name/:bookName')
  async getBookByName(@Param('bookName') bookName: String): Promise<Book[]> {
    return await this.BooksService.getBookByName(bookName)
  }

  @Post()
  async saveBooks(@Body() newBook: BookDTO): Promise<Book> {
    return await this.BooksService.saveBook(newBook)
  }

  @Patch(':bookID')
  async updateBooks(@Param('bookID') bookID: String, @Body() newBook: BookDTO ): Promise<Book> {
    await this.BooksService.updateBookById(bookID, newBook)
    return 
  }

  @Delete(':bookID')
  async deleteBookById(@Param('bookID') bookID: String): Promise<Book> {
    return await this.BooksService.deleteBookById(bookID)
  }
}
