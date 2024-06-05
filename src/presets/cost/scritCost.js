let costosIndirectos = 0;
let costoManoDeObra = 0;

function calcularCostosIndirectos() {
    const formacionEmpleados = parseFloat(document.getElementById('formacionEmpleados').value) || 0;
    const equiposProteccion = parseFloat(document.getElementById('equiposProteccion').value) || 0;
    const alquilerLocal = parseFloat(document.getElementById('alquilerLocal').value) || 0;
    const serviciosPublicos = parseFloat(document.getElementById('serviciosPublicos').value) || 0;
    const mantenimientoMaquinaria = parseFloat(document.getElementById('mantenimientoMaquinaria').value) || 0;
    const seguros = parseFloat(document.getElementById('seguros').value) || 0;
    const oficina = parseFloat(document.getElementById('oficina').value) || 0;
    const transporteLogistica = parseFloat(document.getElementById('transporteLogistica').value) || 0;
    const licenciasPermisos = parseFloat(document.getElementById('licenciasPermisos').value) || 0;
    const serviciosLimpieza = parseFloat(document.getElementById('serviciosLimpieza').value) || 0;

    costosIndirectos = formacionEmpleados + equiposProteccion + alquilerLocal + serviciosPublicos + mantenimientoMaquinaria + seguros + oficina + transporteLogistica + licenciasPermisos + serviciosLimpieza;

    alert('Costos Indirectos calculados: ' + costosIndirectos.toFixed(2));
}

function calcularCostosManoDeObra() {
    const salarioBase = parseFloat(document.getElementById('salarioBase').value) || 0;
    const cantidadEmpleados = parseInt(document.getElementById('cantidadEmpleados').value) || 0;
    const horasTrabajadas = parseInt(document.getElementById('horasTrabajadas').value) || 0;
    const segurosSalud = parseFloat(document.getElementById('segurosSalud').value) || 0;
    const bonos = parseFloat(document.getElementById('bonos').value) || 0;
    const vacacionesPagadas = parseFloat(document.getElementById('vacacionesPagadas').value) || 0;
    const contribucionesSociales = parseFloat(document.getElementById('contribucionesSociales').value) || 0;
    const gastosExtra = parseFloat(document.getElementById('gastosExtra').value) || 0;

    const salarioTotal = salarioBase * horasTrabajadas * cantidadEmpleados;
    const beneficiosPrestaciones = segurosSalud + bonos + vacacionesPagadas + contribucionesSociales + gastosExtra;

    costoManoDeObra = salarioTotal + beneficiosPrestaciones + costosIndirectos;

    alert('Costos de Mano de Obra calculados: ' + costoManoDeObra.toFixed(2));
}

function generarInformeFinal() {
    const cantidadProductos = parseInt(document.getElementById('cantidadProductos').value) || 1;
    const costoPorProducto = costoManoDeObra / cantidadProductos;

    const informe = `
        <p>Costos Indirectos: ${costosIndirectos.toFixed(2)} USD</p>
        <p>Costos de Mano de Obra: ${costoManoDeObra.toFixed(2)} USD</p>
        <p>Costo por Producto: ${costoPorProducto.toFixed(2)} USD</p>
        <p>Costo por Lote (${cantidadProductos} productos): ${(costoPorProducto * cantidadProductos).toFixed(2)} USD</p>
    `;

    document.getElementById('resultado').innerHTML = informe;
}
