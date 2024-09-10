import { IsNotEmpty,
         IsNumber,
         IsPositive,
         IsString,
         MaxLength,
         MinLength } from "class-validator"

export class BookDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string

    @IsNotEmpty()
    @IsString()
    readonly author: string[]

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly language: string


    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly releaseYear: number

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly publisher: string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly pages: number

}