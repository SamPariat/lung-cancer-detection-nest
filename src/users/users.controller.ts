import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PersonInfo } from '@prisma/client';

import { CreateUserDto, UpdateUserDto } from './dto';
import { UsersControllerInterface } from './interfaces';
import { UsersService } from './users.service';

@UseInterceptors(CacheInterceptor)
@Controller('users')
export class UsersController implements UsersControllerInterface {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAllUsers(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<PersonInfo[]> {
    return this.usersService.getAllUsers(page, limit);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PersonInfo> {
    return this.usersService.getUserById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<PersonInfo> {
    return this.usersService.createUser(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<PersonInfo> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
