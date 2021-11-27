import { getData } from './js/getData.js';
import { getContinent } from './js/getContinent.js';
import { showData } from './js/showData.js';
import { API_SERVERS } from './js/constants.js';

const { continente, ip, geoplugin_countryName } = await getContinent();
// const data = await getData(API_SERVERS[continente] || undefined);
const data = await getData('http://localhost/procesamiento-consultas-distribuidas/');

console.log(data);

showData(data, continente, ip, geoplugin_countryName);
