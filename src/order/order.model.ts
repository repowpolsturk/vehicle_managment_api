import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Vehicle } from '../vehicle/vehicle.model';
import { User } from '../user/user.model';

@Table
export class Order extends Model<Order> {
  @ForeignKey(() => Vehicle)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vehicleId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  orderDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
