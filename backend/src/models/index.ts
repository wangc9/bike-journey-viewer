import Station from './station';
import Journey from './journey';

Station.hasMany(Journey, {
  foreignKey: 'departure_station_id',
  as: 'DepartureStation',
});

Station.hasMany(Journey, {
  foreignKey: 'return_station_id',
  as: 'ReturnStation',
});

Journey.belongsTo(Station, {
  foreignKey: 'departure_station_id',
  as: 'DepartureStation',
});

Journey.belongsTo(Station, {
  foreignKey: 'return_station_id',
  as: 'ReturnStation',
});

export default { Journey, Station };
