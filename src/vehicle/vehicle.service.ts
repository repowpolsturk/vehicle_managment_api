import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vehicle } from './vehicle.model';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(@InjectModel(Vehicle) private readonly vehicleModel: typeof Vehicle) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = new Vehicle();
    vehicle.make = createVehicleDto.make;
    vehicle.model = createVehicleDto.model;
    vehicle.vin = createVehicleDto.vin;
    vehicle.year = createVehicleDto.year;
    vehicle.color = createVehicleDto.color;
    return vehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleModel.findAll();
  }

  async findOne(id: number): Promise<Vehicle> {
    const vehicle = await this.vehicleModel.findByPk(id);
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return vehicle;
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    const vehicle = await this.findOne(id);
    if (updateVehicleDto.make) {
      vehicle.make = updateVehicleDto.make;
    }
    if (updateVehicleDto.model) {
      vehicle.model = updateVehicleDto.model;
    }
    if (updateVehicleDto.vin) {
      vehicle.vin = updateVehicleDto.vin;
    }
    if (updateVehicleDto.year) {
      vehicle.year = updateVehicleDto.year;
    }
    if (updateVehicleDto.color) {
      vehicle.color = updateVehicleDto.color;
    }
    return vehicle.save();
  }

  async remove(id: number): Promise<void> {
    const vehicle = await this.findOne(id);
    await vehicle.destroy();
  }
}
