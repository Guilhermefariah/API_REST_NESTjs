import { IsNotEmpty } from "class-validator"

export class BookDTO {

    @IsNotEmpty()
    readonly name: string

    readonly author: string[]
    readonly language: string
    readonly releaseYear: number
    readonly publisher: string
    readonly pages: number

}