import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MedicineService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(userId: number, inUse?: boolean) {
    return this.prisma.medicine.findMany({
      where: {
        userId,
        inUse,
      },
    });
  }

  async create(data: Prisma.MedicineCreateInput) {
    return this.prisma.medicine.create({ data });
  }

  async update(id: number, data: Prisma.MedicineUpdateInput) {
    return this.prisma.medicine.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.medicine.delete({
      where: {
        id,
      },
    });
  }
}
