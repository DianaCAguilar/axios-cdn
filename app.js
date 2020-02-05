const p1 = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')

const p2 = axios.get('https://acme-users-api-rev.herokuapp.com/api/products')

const p = Promise.all([p1, p2])
    .then(responses => {
        return responses.map(response => response.data);
    });

let companies = [];
let products;

p.then(data => {
    companies = data[0];
    products = data[1];
})
// console.log(companies, products)

const render = (event) => {
    const html = `

    `
}
