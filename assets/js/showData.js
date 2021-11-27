const $tableBody = document.querySelector('#districts');
const $location = document.querySelector('#data');

/**
 * Muestra los datos del país del cliente
 * @param {object} data Objeto de datos a mostrar
 * @param {string} continente Continente
 * @param {string} ip IP
 */
export function showData(data, continente, ip, country_name) {
    let tableTemplate = '';

    data.forEach((product) => {
        tableTemplate += `
        <tr>
            <th scope="row">${product.product_id}</th>
            <td>${product.product_name}</td>
            <td>${product.model_year}</td>
            <td>$${product.list_price}</td>
        </tr>
    `;
    });

    const dataTemplate = `
    <h3 id="location">País: <small>${country_name}</small></h3>
    <h3>IP: <small>${ip}</small></h3>
    <h3>Servidor: <small>${continente}</small></h3>
    `;

    $location.innerHTML = dataTemplate;
    $tableBody.innerHTML = tableTemplate;
}
