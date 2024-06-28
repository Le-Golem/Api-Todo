import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseEntity } from './entities/expense.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ExpensesService {

  constructor(
    @InjectRepository(ExpenseEntity) 
    private expensesRepository : Repository<ExpenseEntity>
  ) {}

  create(createExpenseDto: CreateExpenseDto) {
    return this.expensesRepository.insert(createExpenseDto);
  }

  findAll() {
    return this.expensesRepository.find();
  }

  findOne(id: number) {
    return this.expensesRepository.findOneBy({ id: id });
  }


  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = this.expensesRepository.findOneBy({ id: id });
    if (expense) {
      return this.expensesRepository.update(id, updateExpenseDto);
    }
  }

  remove(id: number) {
     const expense = this.expensesRepository.findOneBy({ id: id });
     if (expense){
       return this.expensesRepository.delete(id);
     }
  }
}
