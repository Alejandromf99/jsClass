class animal{

constructor(especie, nrPatas,cola){
this.especie=especie;
this.nrPatas=nrPatas;
this.cola=cola;
}
getEspecie= function(){
return this.especie;
}
getNrPatas= function(){
return this.nrPatas;
}
getCola= function(){
return this.cola;
}

setEspecie= function(especie){
    this.especie=especie;
}
setNrPatas= function(nrPatas){
    this.nrPatas=nrPatas;
}
setCola= function(cola){
    this.cola=cola;
}

}
class vaca extends animal{
    constructor(especie, nrPatas,cola, litrosLeche){
        super(especie, nrPatas, cola);
        this.litrosLeche=litrosLeche;
        }
        getLitrosLeche() {
            return this.litrosLeche;
        }
        setlitrosLeche= function(litrosLeche){
            this.litrosLeche=litrosLeche;
        }  
        ordeñar(litros) {
            if (litros > this.litrosLeche) {
                console.log("No hay suficientes litros de leche para ordeñar.");
                return 0;
            }
            this.litrosLeche -= litros;
            return litros;
        }

}
class tigre extends animal{
    constructor(especie, nrPatas,cola, nrVictimas){
        super(especie, nrPatas, cola);
        this.nrVictimas=nrVictimas;
        }
setVictimas= function(nrVictimas){
    this.nrVictimas=nrVictimas;
    }
    getVictimas=function(){
        return this.nrVictimas;
        }
sumarCazadas=function(victimas){
    this.nrVictimas= this.nrVictimas+victimas;
    }

}
var Parrula= new vaca('vaca',4,true,20);
console.log(Parrula);
Parrula.ordeñar(21);