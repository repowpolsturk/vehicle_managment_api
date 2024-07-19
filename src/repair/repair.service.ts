import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repair } from './repair.model';
import { CreateRepairDto } from './dto/create-repair.dto';
import { UpdateRepairDto } from './dto/update-repair.dto';

@Injectable()
export class RepairService {
  constructor(@InjectModel(Repair) private readonly repairModel: typeof Repair) {}

  async create(createRepairDto: CreateRepairDto): Promise<Repair> {
    const repair = new Repair();
    repair.orderId = createRepairDto.orderId;
    repair.repairDate = new Date(createRepairDto.repairDate);
    repair.description = createRepairDto.description;
    repair.status = createRepairDto.status;
    return repair.save();
  }

  async findAll(): Promise<Repair[]> {
    return this.repairModel.findAll();
  }

  async findOne(id: number): Promise<Repair> {
    const repair = await this.repairModel.findByPk(id);
    if (!repair) {
      throw new NotFoundException('Repair not found');
    }
    return repair;
  }

  async update(id: number, updateRepairDto: UpdateRepairDto): Promise<Repair> {
    const repair = await this.findOne(id);
    if (updateRepairDto.orderId) {
      repair.orderId = updateRepairDto.orderId;
    }
    if (updateRepairDto.repairDate) {
      repair.repairDate = new Date(updateRepairDto.repairDate);
    }
    if (updateRepairDto.description) {
      repair.description = updateRepairDto.description;
    }
    if (updateRepairDto.status) {
      repair.status = updateRepairDto.status;
    }
    return repair.save();
  }

  async remove(id: number): Promise<void> {
    const repair = await this.findOne(id);
    await repair.destroy();
  }
}
