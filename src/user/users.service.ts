import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}

    async findOne(name: string): Promise<UserEntity | undefined> {
        return this.usersRepository.findOne({ where: { name } });
    }

    async insert(name: string, password: string): Promise<UserEntity> {
        const user = new UserEntity({
            name,
            password,
        });
        
        await this.usersRepository.insert(user);
        return user;
    }

    async findById(id: number): Promise<UserEntity> {
        const user = this.usersRepository.findOne({ where: { userId : id } });

        if (!user) {
            throw new NotFoundException('User not found by id : ' + id);
        }

        return user;
    }
}
