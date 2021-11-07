const $tableBody = document.querySelector('#districts');
const $location = document.querySelector('#data');

/**
 * Muestra los datos del país del cliente
 * @param {object} data Objeto de datos a mostrar
 * @param {string} continente Continente
 * @param {string} ip IP
 */
export function showData(data, continente, ip) {
    let tableTemplate = '';

    data.citys.forEach((district, index) => {
        tableTemplate += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${district}</td>
        </tr>
    `;
    });

    const dataTemplate = `
    <h3 id="location">País: <small>${data.country_name}</small></h3>
    <h3>IP: <small>${ip}</small></h3>
    <h3>Servidor: <small>${continente}</small></h3>
    `;

    $location.innerHTML = dataTemplate;
    $tableBody.innerHTML = tableTemplate;
}
