import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString
} from 'class-validator';
import { MedicineType } from '@prisma/client';

export class MedicineGetDto {
  @IsBoolean()
  @IsOptional()
  inUse?: boolean;
}

export class MedicineCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  hospital?: string;

  @IsOptional()
  @IsDate()
  prescriptionDate?: string;

  @IsNotEmpty()
  @IsString()
  type: MedicineType;

  @IsNotEmpty()
  @IsPositive()
  count: number;

  @IsNotEmpty()
  @IsBoolean()
  inUse: boolean;
}

export class MedicineUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  hospital?: string;

  @IsOptional()
  @IsDate()
  prescriptionDate?: string;

  @IsOptional()
  @IsString()
  type?: MedicineType;

  @IsOptional()
  @IsPositive()
  count?: number;

  @IsOptional()
  @IsBoolean()
  inUse?: boolean;
}

export class MedicineDeleteDto {
  @IsNotEmpty()
  @IsNumberString()
  id: number
}
