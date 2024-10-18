Object.prototype.implementa=function (metodo){
if(typeof this[metodo]=="function"){
return true;
}
else{
    return false;
}
}
console.log(Math.implementa('pow'));
