Array.prototype.posiciones=function(valor){
let arrayPosiciones=[];
for(var i=0;i<this.length;i++){
if(this[i]==valor){
arrayPosiciones.push(i);
}
}
return arrayPosiciones;
}
var array1=['solete','macarena','figurin','solete','solete','mirador','paraguas'];

var posiciones=array1.posiciones('solete');
console.log(posiciones);