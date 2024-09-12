import { BookRepository } from 'src/Mongo/Repository/book.repository';
import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ) { }

    saveBook(newBook: BookDTO): BookDTO {
        this.bookRepository.saveBook(newBook)
        return
    }
}
