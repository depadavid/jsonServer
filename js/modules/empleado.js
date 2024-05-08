async function getEmpleados() {
    const response = await fetch(`http://localhost:5501/employee`)
    return await response.json()
}

async function getEmpleadoPorCodigo(codigo) {
    const response = await fetch(`http://localhost:5501/employee?code_boss=${codigo}`)
    return await response.json()
}
export async function getEmpleadoPorId(id) {
    const response = await fetch(`http://localhost:5501/employee?employee_code=${id}`)
    return await response.json()
}

// console.log(getEmpleadoPorId(1));

async function getEmpleadoPorRol(rol, es=true) {
    let response
    if(!es) {
        response = (await fetch(`http://localhost:5501/employee?position=!${rol}`))
    }
    response = (await fetch(`http://localhost:5501/employee?position=${rol}`))
    return await response.json()
}

// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

async function getEmpleadosPorJefe(codigoJefe) {
    const response = await fetch(`http://localhost:3000/employee?code_boss=${codigoJefe}`)
    const empleados = await response.json()

    const empleadosInfo = empleados.map(({ name, lastname1, lastname2, email }) => ({ name, lastname1, lastname2, email }))
    console.log(empleadosInfo);
}

// getEmpleadosPorJefe(3)