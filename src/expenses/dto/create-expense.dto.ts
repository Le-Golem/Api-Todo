import { IsNumber, IsString } from "@nestjs/class-validator";

export class CreateExpenseDto {
    @IsNumber()
    amount: number;

    @IsString()
    description: string;
}
