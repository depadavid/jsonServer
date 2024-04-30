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