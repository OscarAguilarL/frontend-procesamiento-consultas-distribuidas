import { getData } from './js/getData.js';
import { getContinent } from './js/getContinent.js';
import { showData } from './js/showData.js';
import { API_SERVERS } from './js/constants.js';

const { continente, ip } = await getContinent();
const data = await getData(API_SERVERS[continente] || undefined);

showData(data, continente, ip);
