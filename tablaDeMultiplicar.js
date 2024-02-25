const fs = require("fs");

console.clear();

let base = 7;
let mensaje = ""

for(let i=1; i<=10; i++){
    mensaje += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile(`tabla del ${base}`, mensaje, (err)=>{
    if (err){
        throw "No se puede escribir el documento."
    }
    console.log("Documento escrito con exito.")
});