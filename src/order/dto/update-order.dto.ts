import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsInt()
  @IsOptional()
  vehicleId?: number;

  @IsInt()
  @IsOptional()
  userId?: number;

  @IsDateString()
  @IsOptional()
  orderDate?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
