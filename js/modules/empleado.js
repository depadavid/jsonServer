async function getEmpleados() {
    const response = await fetch(`http://localhost:5501/employee`)
    return await response.json()
}

async function getEmpleadoPorCodigo(codigo) {
    const response = await fetch(`http://localhost:5501/employee?code_boss=${codigo}`)
    return await response.json()
}