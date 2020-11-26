import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

interface IRequest {
    user_id: string;
    name: string;
    email: string;
    password?: string;
    old_password?: string;
}

@injectable()
class UpdateProfileService {
    constructor(
        @inject('UserRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        name,
        user_id,
        email,
        password,
        old_password,
    }: IRequest): Promise<User> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found.');
        }

        const userWithUpdatedEmail = await this.usersRepository.findByEmail(
            email,
        );

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
            throw new AppError('E-mail already in use.');
        }

        user.name = name;
        user.email = email;

        if (password && !old_password) {
            throw new AppError('Old password not informed.');
        }

        if (password && old_password) {
            const checkOldPassword = await this.hashProvider.compareHash(
                old_password,
                user.password,
            );

            if (!checkOldPassword) {
                throw new AppError('Old password is incorrect');
            }

            user.password = await this.hashProvider.generateHash(password);
        }

        return this.usersRepository.save(user);
    }
}

export default UpdateProfileService;
