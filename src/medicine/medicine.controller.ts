import { Body, Controller, Delete, Get, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineCreateDto, MedicineDeleteDto, MedicineGetDto, MedicineUpdateDto } from './medicine.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { JwtRequest } from '../auth/auth.type';

@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @UseGuards(JwtGuard)
  @Get()
  async get(@Req() req: JwtRequest, @Query() query: MedicineGetDto) {
    return this.medicineService.getAll(req.user.id, query.inUse);
  }

  @UseGuards(JwtGuard)
  @Post()
  async create(@Req() req: JwtRequest, @Body() body: MedicineCreateDto) {
    return this.medicineService.create({
      ...body,
      user: {
        connect: {
          id: req.user.id,
        },
      },
    });
  }

  @UseGuards(JwtGuard)
  @Put()
  async update(@Req() req: JwtRequest, @Body() body: MedicineUpdateDto) {
    const { id, ...params } = body;
    return this.medicineService.update(id, {
      ...params,
      user: {
        connect: {
          id: req.user.id,
        },
      },
    });
  }

  @UseGuards(JwtGuard)
  @Delete()
  async delete(@Req() req: JwtRequest, @Query() query: MedicineDeleteDto) {
    return this.medicineService.delete(Number(query.id));
  }
}
