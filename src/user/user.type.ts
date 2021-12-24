import { User } from '@prisma/client';

export type PasswordOmitUser = Omit<User, 'password'>;
