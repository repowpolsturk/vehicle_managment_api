import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Order } from '../order/order.model';

@Table
export class Report extends Model<Report> {
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
  reportDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  summary: string;
}
