import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  vehicleId: number;

  @IsInt()
  userId: number;

  @IsDateString()
  orderDate: string;

  @IsString()
  description: string;
}
