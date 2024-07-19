import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private readonly orderModel: typeof Order) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.vehicleId = createOrderDto.vehicleId;
    order.userId = createOrderDto.userId;
    order.orderDate = new Date(createOrderDto.orderDate);
    order.description = createOrderDto.description;
    return order.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.findAll();
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderModel.findByPk(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findOne(id);
    if (updateOrderDto.vehicleId) {
      order.vehicleId = updateOrderDto.vehicleId;
    }
    if (updateOrderDto.userId) {
      order.userId = updateOrderDto.userId;
    }
    if (updateOrderDto.orderDate) {
      order.orderDate = new Date(updateOrderDto.orderDate);
    }
    if (updateOrderDto.description) {
      order.description = updateOrderDto.description;
    }
    return order.save();
  }

  async remove(id: number): Promise<void> {
    const order = await this.findOne(id);
    await order.destroy();
  }
}
