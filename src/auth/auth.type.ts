import { User } from '@prisma/client';
import { PasswordOmitUser } from '../user/user.type';

export type JwtPayload = Pick<User, 'id' | 'name'>;

export interface JwtRequest {
  user: PasswordOmitUser;
}
