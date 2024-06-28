import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserBankDetailEntity } from 'src/userBankDetails/entities/user-bank-detail.entity';

@Entity('expenses')
export class ExpenseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    description: string;

    @ManyToOne(() => UserBankDetailEntity, (userBankDetail) => userBankDetail.expenses)
    userBankDetail: UserBankDetailEntity;
}
