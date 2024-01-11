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

  declare stationName: string | null;

  declare stationAddress: string | null;

  declare coordinateX: string | null;

  declare coordinateY: string | null;
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
      allowNull: true,
    },
    stationAddress: {
      type: DataTypes.CHAR(100),
      allowNull: true,
    },
    coordinateX: {
      type: DataTypes.CHAR(100),
      allowNull: true,
    },
    coordinateY: {
      type: DataTypes.CHAR(100),
      allowNull: true,
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
