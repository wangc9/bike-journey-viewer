import axios from 'axios';

const baseURL = '/api/stations';

const getAll = async (page: number) => {
  try {
    const response = await axios.get(`${baseURL}/?page=${page}`);

    return { code: 200, stations: response.data.stations };
  } catch (error) {
    if (error instanceof Error) {
      return { code: 401, error: error.message };
    }
    return { code: 500, error: `Unrecognisable error: ${error}` };
  }
};

const stationService = { getAll };

export default stationService;
