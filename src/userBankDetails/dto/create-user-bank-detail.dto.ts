import { IsNumber } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserBankDetailDto {
    @ApiProperty()
    @IsNumber()
    Solde :  number     

    @ApiProperty()
    userId : number
}
