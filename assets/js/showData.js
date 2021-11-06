const $tableBody = document.querySelector('#districts');
const $location = document.querySelector('#location');

/**
 * Muestra los datos del país del cliente
 * @param {object} data Objeto de datos a mostrar
 * @param {string} continente Continente
 */
export function showData(data, continente) {
    let template = '';

    data.citys.forEach((district, index) => {
        template += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${district}</td>
        </tr>
    `;
    });

    $location.innerText = `${data.country_name} - ${continente}`;
    $tableBody.innerHTML = template;
}
