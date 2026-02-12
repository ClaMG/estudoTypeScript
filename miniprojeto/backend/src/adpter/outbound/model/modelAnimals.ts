import { DataTypes, Model, Optional } from 'sequelize'
import dbConfig from '../../../cofig/configDb.js'
import {AnimalAttributes} from './interface/interfaceAnimal.js'
import UserModel from './modelUser.js'

interface AnimalCreationAttributes extends Optional<AnimalAttributes, 'id'> {}
class AnimalModel extends Model<AnimalAttributes, AnimalCreationAttributes> implements AnimalAttributes {
    public id!: number
    public idUser!: number
    public name!: string
    public age!: number
    public species!: string
    public gender!: string
    public code!: number
}


AnimalModel.init(
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize: dbConfig,
    tableName: 'Animal',
    freezeTableName: true,
    timestamps: false,
  }
);

UserModel.hasMany(AnimalModel, {
  foreignKey: 'idUser',
  as: 'animals' 
});

AnimalModel.belongsTo(UserModel, {
  foreignKey: 'idUser',
  as: 'owner'
});

export default AnimalModel;
