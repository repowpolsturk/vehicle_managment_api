import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Vehicle extends Model<Vehicle> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  make: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vin: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;
}
