import { Injectable } from '@nestjs/common';
import { CreateUserBankDetailDto } from './dto/create-user-bank-detail.dto';
import { UpdateUserBankDetailDto } from './dto/update-user-bank-detail.dto';
import { Repository } from 'typeorm';
import { UserBankDetailEntity } from './entities/user-bank-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserBankDetailsService {
  constructor(
    @InjectRepository(UserBankDetailEntity)
    private userBankDetailRepository: Repository<UserBankDetailEntity>
  ) {}

  create(createUserBankDetailDto: CreateUserBankDetailDto) {
    return this.userBankDetailRepository.save(createUserBankDetailDto)
  }

  findAll() {
    return this.userBankDetailRepository.find()
  }

  findOne(id: number) {
    return this.userBankDetailRepository.findOne({where : {userId : id}})
  }

  update(id: number, updateUserBankDetailDto: UpdateUserBankDetailDto) {
    return this.userBankDetailRepository.update(id ,updateUserBankDetailDto)
  }

  remove(id: number) {
    return this.userBankDetailRepository.softDelete(id)
  }
}
