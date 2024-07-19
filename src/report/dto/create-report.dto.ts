import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateReportDto {
  @IsInt()
  orderId: number;

  @IsDateString()
  reportDate: string;

  @IsString()
  summary: string;
}
