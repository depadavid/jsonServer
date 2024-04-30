async function getClientes() {
    const response = await fetch("http://localhost:3000/clients")
    const clientes = await response.json()
    return clientes
}
async function getClientesPorPais(pais) {
    const response = await fetch(`http://localhost:3000/clients?country=${pais}`)
    const clientes = await response.json()
    return clientes
}

async function getClientesPorCiudad(ciudad) {
    const response = await fetch(`http://localhost:3000/clients?country=${region}`)
    const clientes = await response.json()
    return clientes
}

// 6. Devuelve un listado con el nombre de los todos los clientes españoles.

async function getClientesDeEspana() {
    const clientes = await getClientesPorPais("Spain")
    const nombresClientes = clientes.map(({client_name}) => ({client_name}))
    console.log(nombresClientes);
}

//  getClientesFromSpain()

// 16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

async function getClientesMadrid(prams) {
    
    const response1 = await fetch("http://localhost:3000/clients?city=Madrid&code_employee_sales_manager=11")
    const response2 = await fetch("http://localhost:3000/clients?city=Madrid&code_employee_sales_manager=30")
    const clientes1 = await response1.json()
    const clientes2 = await response2.json()
    console.log(...clientes1, ...clientes2);
}

// getClientesMadrid()