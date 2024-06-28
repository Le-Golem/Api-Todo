import { Module } from '@nestjs/common';
import { UserBankDetailsController } from './user-bank-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBankDetailEntity } from './entities/user-bank-detail.entity';
import { UserBankDetailsService } from './user-bank-details.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      UserBankDetailEntity
    ])],
  controllers: [UserBankDetailsController],
  providers: [UserBankDetailsService],
  exports: [UserBankDetailsService]
})
export class UserBankDetailsModule {}
