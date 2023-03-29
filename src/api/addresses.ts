import axios from 'axios';

export const getAddresses = async () => {
  const { data } = await axios.get(
    'https://express-shina.ru/vacancy/geo-state',
  );

  return data;
};
