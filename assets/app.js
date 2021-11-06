import { getData } from './js/getData.js';
import { getContinent } from './js/getContinent.js';
import { showData } from './js/showData.js';

const continente = await getContinent();
const data = await getData();

showData(data, continente);
