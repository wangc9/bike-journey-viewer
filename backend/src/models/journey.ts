import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
  DataTypes,
} from 'sequelize';
import { sequelize } from '../utils/database';
import Station from './station';

class Journey extends Model<
  InferAttributes<Journey>,
  InferCreationAttributes<Journey>
> {
  declare id: number;

  declare departureDateTime?: Date;

  declare returnDateTime?: Date;

  declare departureStationId: ForeignKey<Station['id']>;

  declare returnStationId: ForeignKey<Station['id']>;

  declare distance?: number;

  declare duration?: number;
}

Journey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    departureDateTime: {
      type: DataTypes.DATE,
    },
    returnDateTime: {
      type: DataTypes.DATE,
    },
    distance: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'journey',
    tableName: 'journey',
  },
);

export default Journey;
