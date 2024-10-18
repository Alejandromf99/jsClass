String.prototype.reverse= function()  {
    let fraseAlreves='';
for(let i=this.length-1;i>=0;i--){
   fraseAlreves += this[i]; 
}
return fraseAlreves;
}
let frase= 'Hola que tal perron';
let frase2=frase.reverse();
console.log(frase2);
