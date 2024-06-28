import { UserBankDetailEntity } from "src/userBankDetails/entities/user-bank-detail.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    updated_at: Date;

    @DeleteDateColumn({})
    deleted_at: Date;

    @OneToOne(() => UserBankDetailEntity, (bankDetail) => bankDetail.user)
    @JoinColumn() 
    bankDetail: UserBankDetailEntity;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}