Array.prototype.addEl = function (element, boolean) {
    if (boolean === true) {
     this.push(element);
        return this;
    }
    else {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return this;
            }
        }
    this.push(element);
        return this;
    }
}

let array1 = ['hola','buenos' , 'adios'];
array1.addEl('hola',false);
console.log(array1);
array1.addEl('hola', true);
console.log(array1);