import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import { sequelize } from '../utils/database';

class Station extends Model<
  InferAttributes<Station>,
  InferCreationAttributes<Station>
> {
  declare id: number;

  declare stationName: string;

  declare stationAddress: string;

  declare coordinateX: string;

  declare coordinateY: string;
}

Station.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stationName: {
      type: DataTypes.CHAR(100),
    },
    stationAddress: {
      type: DataTypes.CHAR(100),
    },
    coordinateX: {
      type: DataTypes.CHAR(100),
    },
    coordinateY: {
      type: DataTypes.CHAR(100),
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'station',
    tableName: 'station',
  },
);

export default Station;
