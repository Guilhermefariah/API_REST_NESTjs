import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookDTO } from "src/DTO/books.dto";
import { Book } from "../Interfaces/book.interface";

@Injectable()
export class BookRepository {
    
    constructor(
        @InjectModel('book') private readonly bookModel : Model<Book>
    ){}

    async saveBook(newBook: BookDTO): Promise<BookDTO> {
        const saveBook = new this.bookModel(newBook);
        await saveBook.save()
        return
    }

    async getAllBooks(): Promise<BookDTO[]> {
        await this.bookModel.find({}, { __v: false }).sort({ name: 1 }).exec()
        return
    }

}