import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';

@ApiTags("users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


    @Post()
    async insertUser(@Body('name') name: string, @Body('password') password: string): Promise<UserEntity> {
        return this.usersService.insert(name, password);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.usersService.findById(id);
    }
    

}
