import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Report } from './report.model';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(@InjectModel(Report) private readonly reportModel: typeof Report) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = new Report();
    report.orderId = createReportDto.orderId;
    report.reportDate = new Date(createReportDto.reportDate);
    report.summary = createReportDto.summary;
    return report.save();
  }

  async findAll(): Promise<Report[]> {
    return this.reportModel.findAll();
  }

  async findOne(id: number): Promise<Report> {
    const report = await this.reportModel.findByPk(id);
    if (!report) {
      throw new NotFoundException('Report not found');
    }
    return report;
  }

  async update(id: number, updateReportDto: UpdateReportDto): Promise<Report> {
    const report = await this.findOne(id);
    if (updateReportDto.orderId) {
      report.orderId = updateReportDto.orderId;
    }
    if (updateReportDto.reportDate) {
      report.reportDate = new Date(updateReportDto.reportDate);
    }
    if (updateReportDto.summary) {
      report.summary = updateReportDto.summary;
    }
    return report.save();
  }

  async remove(id: number): Promise<void> {
    const report = await this.findOne(id);
    await report.destroy();
  }
}
