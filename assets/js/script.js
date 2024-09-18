let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

let gastoActual = -1;

function btnAgregar() {
  let nombreDelGasto = document.getElementById("nombreGasto");
  let cantidadDelGasto = document.getElementById("valorGasto");
  let descripcionDelGasto = document.getElementById("descripcionGasto");
  agregar(
    nombreDelGasto.value,
    cantidadDelGasto.value,
    descripcionDelGasto.value
  );
  actualizarListaGastos();
}

function agregar(Nombre, valor, descripcion) {
  if (valor > 150) {
    alert("Haz registrado un gasto mayor a 150");
  }

  if (gastoActual === -1) {
    listaNombresGastos.push(Nombre);
    listaValoresGastos.push(valor);
    listaDescripcionesGastos.push(descripcion);
  } else {
    listaNombresGastos[gastoActual] = Nombre;
    listaValoresGastos[gastoActual] = valor;
    listaDescripcionesGastos[gastoActual] = descripcion;
    gastoActual = -1;
    document.getElementById("botonActualizar").style.display = "none";
    document.getElementById("botonFormulario").style.display = "block";
  }
}

function actualizarListaGastos() {
  const listaElementos = document.getElementById("listaDeGastos");
  const totalElementos = document.getElementById("totalGastos");
  let htmlLista = "";
  let totalGastos = 0;
  listaNombresGastos.forEach((elemento, posicion) => {
    const valorGasto = Number(listaValoresGastos[posicion]);
    const descripcionGasto = listaDescripcionesGastos[posicion]; // Obtener la descripcion
    htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
                      <br>Descripcion: ${descripcionGasto}
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    <button onclick="modificarGasto(${posicion});">Modificar</button>
                    </li>`;
    //Calculamos el total de gastos
    totalGastos += Number(valorGasto);
  });

  listaElementos.innerHTML = htmlLista;
  totalElementos.innerHTML = totalGastos.toFixed(2);
  limpiar();
}

function eliminarGasto(posicion) {
  listaNombresGastos.splice(posicion, 1);
  listaValoresGastos.splice(posicion, 1);
  listaDescripcionesGastos.splice(posicion, 1);
  actualizarListaGastos();
}
function limpiar() {
  document.getElementById("nombreGasto").value = "";
  document.getElementById("valorGasto").value = "";
  document.getElementById("descripcionGasto").value = "";
}
function modificarGasto(posicion) {
  document.getElementById("nombreGasto").value = listaNombresGastos[posicion];
  document.getElementById("valorGasto").value = listaValoresGastos[posicion];
  document.getElementById("descripcionGasto").value =
    listaDescripcionesGastos[posicion];
  gastoActual = posicion;
  document.getElementById("botonActualizar").style.display = "block";
  document.getElementById("botonFormulario").style.display = "none";
}
function actualizarGasto() {
  btnAgregar();
}


