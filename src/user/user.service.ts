import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(name: string) {
    return this.prisma.user.findFirst({
      where: {
        name,
      },
    });
  }
}
