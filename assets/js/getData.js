const DEFAULT_URL = 'http://api-geolocation.oscaraguilar-dev.com/';

/**
 * Consulta la API deseada y retorna la informacion del país del cliente.
 * @param {string} url url que se va a consultar
 * @returns Object
 */
export async function getData(url = DEFAULT_URL) {
    try {
        // Consultar la API y convertir la respuesta a JSON
        const resp = await fetch(url);
        const body = await resp.json();

        // Si la consulta es exitosa retorna la respuesta
        // Sino, manda un error a consola
        if (body.ok) {
            return body.result;
        } else {
            throw new Error('Error en la consulta');
        }
    } catch (error) {
        console.log(error);
    }
}
