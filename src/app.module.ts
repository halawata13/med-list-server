import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicineService } from './services/medicine/medicine.service';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MedicineService, PrismaService],
})
export class AppModule {}
