import { Injectable, NotFoundException } from '@nestjs/common';
import { PersonInfo } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UsersServiceInterface } from './interfaces';

@Injectable()
export class UsersService implements UsersServiceInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllUsers(page: number, limit: number): Promise<PersonInfo[]> {
    const users = await this.prismaService.personInfo.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (users.length === 0) {
      throw new NotFoundException('No users found');
    }

    return users;
  }

  async getUserById(id: number): Promise<PersonInfo> {
    const user = await this.prismaService.personInfo.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<PersonInfo> {
    const newUser = await this.prismaService.personInfo.create({
      data: {
        ...createUserDto,
      },
    });

    return newUser;
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<PersonInfo> {
    const updatedUser = await this.prismaService.personInfo.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });

    return updatedUser;
  }

  async deleteUser(id: number): Promise<void> {
    await this.prismaService.personInfo.delete({
      where: {
        id,
      },
    });
  }
}
