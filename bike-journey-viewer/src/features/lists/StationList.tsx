import { useState, useEffect } from 'react';
import stationService from '../../services/station';

export interface StationReturn {
  id: number;
  stationName: string | null;
  stationAddress: string | null;
  coordinateX: string | null;
  coordinateY: string | null;
}

/**
 * Element containing a list of stations.
 */
export default function StationList(): React.JSX.Element {
  const [stations, setStations] = useState<Array<StationReturn>>([]);

  useEffect(() => {
    stationService
      .getAll(0)
      .then((stationResponse) => setStations(stationResponse.stations));
  }, []);

  return (
    <div className="flex w-fit flex-col rounded-lg bg-slate-300 px-2 py-4">
      <table>
        <tbody>
          {stations.map((station) => (
            <tr key={station.id.toString()}>
              <td>{station.stationName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
