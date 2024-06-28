import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserBankDetailDto } from './dto/create-user-bank-detail.dto';
import { UpdateUserBankDetailDto } from './dto/update-user-bank-detail.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserBankDetailsService } from './user-bank-details.service';

@ApiTags('UserBankDetails')
@Controller('user-bank-details')
export class UserBankDetailsController {
  constructor(private readonly userBankDetailsService: UserBankDetailsService) {}

  @Post()
  create(@Body() createUserBankDetailDto: CreateUserBankDetailDto) {
    return this.userBankDetailsService.create(createUserBankDetailDto);
  }

  @Get()
  findAll() {
    return this.userBankDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBankDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBankDetailDto: UpdateUserBankDetailDto) {
    return this.userBankDetailsService.update(+id, updateUserBankDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBankDetailsService.remove(+id);
  }
}
