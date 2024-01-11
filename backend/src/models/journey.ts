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

  declare departureDateTime: Date | null;

  declare returnDateTime: Date | null;

  declare departureStationId: ForeignKey<Station['id']>;

  declare returnStationId: ForeignKey<Station['id']>;

  declare distance: number | null;

  declare duration: number | null;
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
      allowNull: true,
    },
    returnDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    departureStationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'station',
        key: 'id',
      },
    },
    returnStationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'station',
        key: 'id',
      },
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
