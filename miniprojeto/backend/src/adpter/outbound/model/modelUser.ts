import { DataTypes, Model, Optional } from 'sequelize'
import dbConfig from '../../../cofig/configDb.js'
import {UserAttributes} from './interface/interfaceUser.js'

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public admin!: boolean;
}


UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, 
    },
  },
  {
    sequelize: dbConfig,
    tableName: 'Users',
    freezeTableName: true,
    timestamps: false,
  }
);

export default UserModel;
