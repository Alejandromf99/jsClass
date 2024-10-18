function elemento(descripcion, cantidad, precio) {
  this.descripcion = descripcion;
  this.cantidad = cantidad;
  this.precio = precio;
}
function cliente(nombre, direccion, telefono, nif) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.telefono = telefono;
  this.nif = nif;
}
function empresa() {
  this.nombre = "Objetos SL";
  this.direccion = "Plaza España";
  this.telefono = "443322110";
  this.nif = "04279586J";
}

function factura(cliente, elementos, fpago, iva) {
  this.cliente = cliente;
  this.elementos = Array.isArray(elementos) ? elementos : [];
  this.fpago = fpago;
  this.empresa = new empresa();
  this.iva = iva;
  this.importeTotal = 0;
  this.anyadeEl=function(ele){
this.elementos.push(ele);

  }
  this.imprimeElemento = function (indice) {
    if (indice >= 0 && indice < this.elementos.length) {
      console.log(this.elementos[indice]);
    } else {
      alert("Índice fuera de rango");
    }
  };
  this.calculaImporte = function () {
    for (var i = 0; i < elementos.length; i++) {
      this.importeTotal +=
        (this.elementos[i].cantidad * this.elementos[i].precio) * (1 - this.iva);
    }
    alert(this.importeTotal);
  };
}

var cliente1 = new cliente(
  "Alejandro",
  "Levante U.D.",
  "611477454",
  "3434343243"
);

var elemento1 = new elemento("Cocacola pa la sed", 15, 2);
var elemento2 = new elemento("Fanta pa la garganta", 6, 3);
var elemento3 = new elemento("Aguita que cuesta poca guita", 15, 1);
var elementos = [elemento1, elemento2, elemento3];
var facturaC1 = new factura(cliente1, elementos, "Efectivo", 0.21);
facturaC1.imprimeElemento(2);
console.log(facturaC1.empresa);
facturaC1.calculaImporte();
