import { getData } from './js/getData.js';
import { getContinent } from './js/getContinent.js';
import { showData } from './js/showData.js';

const API_SERVERS = {
    America:
        'http://consultas-distribuidas.levirevilla.com/geolocation-api-main/',
    Europe: 'http://bdd-act-31.saulgomezc.com/api/',
    Asia: 'http://api-montse.veracano.com/',
};

const { continente, ip } = await getContinent();
const data = await getData(API_SERVERS[continente] || undefined);

showData(data, continente, ip);
