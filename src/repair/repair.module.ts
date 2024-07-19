import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RepairService } from './repair.service';
import { RepairController } from './repair.controller';
import { Repair } from './repair.model';

@Module({
  imports: [SequelizeModule.forFeature([Repair])],
  controllers: [RepairController],
  providers: [RepairService],
})
export class RepairModule {}
