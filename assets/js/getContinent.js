/**
 * Consulta dos diferentes API para obtener
 * el continenete de donde se conecta el cliente
 * @returns string
 */
export async function getContinent() {
    // Consultar la API ipify para obtener la IP del cliente
    const resp = await fetch('https://api.ipify.org?format=json');
    const { ip } = await resp.json();

    // Consulta a la api de geoPlugin para obtener la zona horaria del cliente
    // y posteriormente el continente
    const geoPluginResp = await fetch(`http://geoplugin.net/json.gp?ip=${ip}`);
    const { geoplugin_timezone } = await geoPluginResp.json();

    // America/Mexico_City
    return geoplugin_timezone.split('/')[0];
}
