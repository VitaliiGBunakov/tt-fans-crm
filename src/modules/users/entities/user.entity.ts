import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  createdAt: false,
  updatedAt: false,
})
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;
}
