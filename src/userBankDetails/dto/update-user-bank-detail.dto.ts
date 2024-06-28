import { PartialType } from '@nestjs/swagger';
import { CreateUserBankDetailDto } from './create-user-bank-detail.dto';

export class UpdateUserBankDetailDto extends PartialType(CreateUserBankDetailDto) {}
