import { Table, Column, Model, DataType, BeforeCreate } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    defaultValue: ['user'],
  })
  roles: string[];

  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
  }
}
