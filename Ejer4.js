String.prototype.acortar=function(numero, extra=''){
var nuevaCadena='';
for(var i=0;i<numero;i++){
nuevaCadena+=this[i];
}
nuevaCadena+=extra;
return nuevaCadena;
}
let frase1='Hola mundo';
let frase2=frase1.acortar(5);
console.log(frase2);