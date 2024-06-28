import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { ExpenseEntity } from 'src/expenses/entities/expense.entity';

@Entity('userBankDetails')
export class UserBankDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Solde: number;

    @Column()
    userId: number;

    @OneToMany(() => ExpenseEntity, (expense) => expense.userBankDetail, { nullable: true })
    expenses: ExpenseEntity[];

    @OneToOne(() => UserEntity, (user) => user.bankDetail)
    user: UserEntity;
}
