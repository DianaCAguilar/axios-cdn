const p1 = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')

const p2 = axios.get('https://acme-users-api-rev.herokuapp.com/api/products')

const p = Promise.all([p1, p2])
    .then(responses => {
        return responses.map(response => response.data);
    });


p.then(data => {
    let companies = data[0];
    let products = data[1];
    render(companies);
})
// console.log(companies, products)

const render = (event) => {
    //event.map(company => console.log(company))
    const html = event.map(company => {
        return `<tr>
            <td>${company.id}</td>
            <td>${company.name}</td>
            <td>${company.phone}</td>
            <td>${company.state}</td>
        </tr>`
    }).join('')
    
    let tbody = document.querySelector('TBODY')
    tbody.innerHTML = html
}

const renderNav =(companies, products)  => {
    const html = `<li>
        <a href = '#companies'>Companies (${companies.length} )</a> 
    </li>
    <li>
        <a href = '#products'>Products (${products.length} )</a> 
    </li>`

}