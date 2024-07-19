import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReportService } from './report.service';
import { ReportController } from './ report.controller';
import { Report } from './report.model';

@Module({
  imports: [SequelizeModule.forFeature([Report])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
