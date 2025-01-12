import { User, UserRepository } from '@/user/domain';

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string, partialUser: Partial<User>): Promise<User> {
    return this.userRepository.update(id, partialUser);
  }
}
