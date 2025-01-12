import { User } from '../entity';

export interface UserRepository {
  getAll(): Promise<User[]>;
  getOne(id: string): Promise<User>;
  create(user: User): Promise<User>;
  update(id: string, partialUser: Partial<User>): Promise<User>;
}
