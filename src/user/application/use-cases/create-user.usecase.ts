import { User, UserRepository } from '@/user/domain';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
