import { User, UserRepository } from '@/user/domain';

export class GetOneUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    return this.userRepository.getOne(id);
  }
}
