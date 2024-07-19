import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class UpdateRepairDto {
  @IsInt()
  @IsOptional()
  orderId?: number;

  @IsDateString()
  @IsOptional()
  repairDate?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
