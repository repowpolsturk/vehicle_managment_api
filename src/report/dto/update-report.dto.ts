import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class UpdateReportDto {
  @IsInt()
  @IsOptional()
  orderId?: number;

  @IsDateString()
  @IsOptional()
  reportDate?: string;

  @IsString()
  @IsOptional()
  summary?: string;
}
