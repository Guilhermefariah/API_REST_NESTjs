import { BookRepository } from 'src/Mongo/Repository/book.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ) { }

    async getAllBooks(): Promise<BookDTO[]> {
        const allBooks = await this.bookRepository.getAllBooks()
        if (allBooks.length) {
            throw new BadRequestException('There are no books registered yet')
        }
        return allBooks
    }

    async saveBook(newBook: BookDTO): Promise<BookDTO> {
        await this.bookRepository.saveBook(newBook)
        return
    }
}
