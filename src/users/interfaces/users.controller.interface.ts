import { PersonInfo } from '@prisma/client';

import { CreateUserDto, UpdateUserDto } from '../dto';

export interface UsersControllerInterface {
  getAllUsers: (page: number, limit: number) => Promise<PersonInfo[]>;
  getUserById: (id: number) => Promise<PersonInfo>;
  createUser: (createUserDto: CreateUserDto) => Promise<PersonInfo>;
  updateUser: (id: number, updateUserDto: UpdateUserDto) => Promise<PersonInfo>;
  deleteUser: (id: number) => Promise<void>;
}
