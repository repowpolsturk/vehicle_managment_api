import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Order } from '../order/order.model';

@Table
export class Repair extends Model<Repair> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  repairDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;
}
