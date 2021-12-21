import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MedicineService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAll(userId: number, inUse: boolean) {
    return this.prisma.medicine.findMany({
      where: {
        userId,
        inUse,
      },
    });
  }

  public async create(data: Prisma.MedicineCreateInput) {
    return this.prisma.medicine.create({
      data,
    });
  }

  public async update(id: number, data: Prisma.MedicineUpdateInput) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  public async delete(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
