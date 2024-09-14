import { BookRepository } from 'src/Mongo/Repository/book.repository'
import { BadRequestException, Injectable } from '@nestjs/common'
import { BookDTO } from 'src/DTO/books.dto'
import { Book } from 'src/Mongo/Interfaces/book.interface'

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ) { }

    async getAllBooks(): Promise<Book[]> {
        const allBooks = await this.bookRepository.getAllBooks()
        if (allBooks.length) {
            throw new BadRequestException('There are no books registered yet')
        }
        return allBooks
    }

    async saveBook(newBook: BookDTO): Promise<Book> {
        await this.bookRepository.saveBook(newBook)
        return
    }

    async getBookById(bookID: String): Promise<Book> {
        try {
            const existBook = await this.bookRepository.getBookById(bookID)
            if (!existBook) {
                throw new BadRequestException('There are no results')
            }
            return existBook
        } catch (error) {
            throw new BadRequestException('There are no results')
        }
    }

    async deleteBookById(bookID: String): Promise<Book> {
        try {
            return await this.bookRepository.deleteBookById(bookID)
        } catch (error) {
            throw new BadRequestException('This book does not exist')
        }
    }

    async updateBookById(bookID: String, newBook: BookDTO): Promise<Book> {
        const existBook = await this.bookRepository.getBookById(bookID)
        if (!existBook)
            throw new BadRequestException('There are no results that do not exist this ID');

        const updateBook = await this.bookRepository.updateBookById(bookID, newBook);

        if (updateBook)
            return this.bookRepository.getBookById(bookID);
        else 
            throw new BadRequestException('Error in the update process');
    }

    async getBookByAuthorName(authorName: String): Promise<Book[]> {

        const spliterAuthorName = authorName.split(' ');
        const foundBooks = await this.bookRepository.getBookByAuthorName(spliterAuthorName);

        if (!foundBooks.length) 
            throw new BadRequestException('There are no results');

        return foundBooks;
    }

    async getBookByName(bookName: String): Promise<Book[]> {

        const spliterBookName = bookName.split(' ');
        const foundBooks = await this.bookRepository.getBookByName(bookName);

        if (!foundBooks.length)
            throw new BadRequestException('There are no results for this name');

        return foundBooks;
    }
    
}
