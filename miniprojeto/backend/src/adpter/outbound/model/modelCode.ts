import { DataTypes, Model, Optional } from 'sequelize'
import dbConfig from '../../../cofig/configDb.js'
import {CodeAttributes} from './interface/interfaceCode.js'
import UserModel from './modelUser.js'

interface AnimalCreationAttributes extends Optional<CodeAttributes, 'id'> {}
class CodeModel extends Model<CodeAttributes, AnimalCreationAttributes> implements CodeAttributes {
    public id!: number
    public idUser!: number
    public code!: string
}


CodeModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel, 
        key: 'id', 
     },
     onDelete: 'CASCADE',
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: dbConfig,
    tableName: 'Code',
    freezeTableName: true,
    timestamps: false,
  }
);

UserModel.hasMany(CodeModel, {
  foreignKey: 'idUser',
  as: 'codes' 
});

CodeModel.belongsTo(UserModel, {
  foreignKey: 'idUser',
  as: 'owner'
});

export default CodeModel;
