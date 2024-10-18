Array.prototype.sense=function(valor){
for(var i=0;i<this.length;i++){
    if(this[i]==valor){
    this.splice(i, 1);
    }
}
return this;  
}
let array= [1,2,3,4,5];
let array2=array.sense(3);
console.log(array2);