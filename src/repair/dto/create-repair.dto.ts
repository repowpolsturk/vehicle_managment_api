import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateRepairDto {
  @IsInt()
  orderId: number;

  @IsDateString()
  repairDate: string;

  @IsString()
  description: string;

  @IsString()
  status: string;
}
