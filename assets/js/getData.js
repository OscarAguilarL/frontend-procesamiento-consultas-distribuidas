const DEFAULT_URL = 'http://api-geolocation.oscaraguilar-dev.com/';

/**
 * Consulta la API deseada y retorna la informacion del país del cliente.
 * @param {string} apiUrl url que se va a consultar
 * @returns Object
 */
export async function getData(apiUrl = DEFAULT_URL) {
    console.log({ apiUrl });
    try {
        // Consultar la API y convertir la respuesta a JSON
        const resp = await fetch(apiUrl);
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
