import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Services/books/books.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/biblioteca')
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
