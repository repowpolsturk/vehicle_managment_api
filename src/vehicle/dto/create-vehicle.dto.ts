import { IsString, IsInt } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsString()
  vin: string;

  @IsInt()
  year: number;

  @IsString()
  color: string;
}
