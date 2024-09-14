import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookDTO } from "src/DTO/books.dto";
import { Book } from "../Interfaces/book.interface";

@Injectable()
export class BookRepository {

    constructor(
        @InjectModel('book') private readonly bookModel: Model<Book>
    ) { }

    async saveBook(newBook: BookDTO): Promise<Book> {
        const saveBook = new this.bookModel(newBook);
        await saveBook.save()
        return
    }

    async getAllBooks(): Promise<Book[]> {
        await this.bookModel.find({}, { __v: false }).sort({ name: 1 }).exec()
        return
    }

    async getBookById(bookID: String): Promise<Book> {
        await this.bookModel.findById(bookID, { __v: false })
        return
    }

    async deleteBookById(bookID: String): Promise<Book> {
        await this.bookModel.findOneAndDelete()
        return
    }

    async updateBookById(bookID: String, newBook: BookDTO): Promise<Book> {
        await this.bookModel.replaceOne({ _id: bookID }, newBook)
        return
    }

    async getBookByAuthorName(authorName: String[]): Promise<Book[]> {
        await this.bookModel.find({

            $or: [
                { 'author.name': { $in: authorName } },
                { 'author.surnames': { $in: authorName } }
            ]
        })
        return
    }

    async getBookByName(bookName: String): Promise<Book[]> {
        await this.bookModel.find({
            name: { '$regex': bookName, '$options': 'i' }
        },
            { __v: false });

        return
    }
}