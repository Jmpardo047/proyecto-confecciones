let idCounter = 1;
const materiasPrimas = {
    materias_primas: []
}

function actualizarId(){
    document.getElementById('id').value =
    `MP${idCounter.toString().padStart(3, '0')}`;
}

function guardarDatos(){
    const materiaPrima = {
        nombre: document.getElementById('nombre').value,
        descripcion: document.getElementById('descripcion').value,
        categoria: document.getElementById('categoria').value,
        proveedor: document.getElementById('proveedor').value,
        costo_por_unidad: parseFloat(document.getElementById('costoPorUnidad').value),
        unidad_de_medida: document.getElementById('unidadDeMedida').value,
        cantidad_en_stock: parseFloat(document.getElementById('cantidadEnStock').value),
        fecha_de_adquisicion: document.getElementById('fechaDeAdquisicion').value,
        ubicacion_en_almacen: document.getElementById('ubicacionEnAlmacen').value,
        notas_adicionales: document.getElementById('notasAdicionales').value
    };


    materiasPrimas.materias_primas.push(materiaPrima);
    idCounter++;
    actualizarId()

    const jsonString = JSON.stringify(materiasPrimas, null, 2)
    console.log(jsonString)

    document.getElementById('materiaPrimaForm').reset();
}

document.addEventListener('DOMContentLoaded',() => {
    document.actualizarId();
});