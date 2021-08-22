var y = 9;

console.log("Seja y = " + y);
console.log("Se y for par, é dividido por 2.");
console.log("Se for impar, é múltiplicado por 3 e depois somado a 1.");
console.log("E o ciclo se repete até que y seja igual a 1.")

var count = 0;
var numeros = [];

console.log("y=" + y);

while(y != 1){
    if(y%2==0){
        y=y/2;
        console.log(y + "=y/2");
    } else {
        y=y*3+1;
        console.log(y + "=y*3+1");
    }
    numeros[count]=y;
    count++;
}

console.log(count + " passos pra chegar em 1.");
console.log("Sempre chega no 1.");

console.log("Se você ficar curioso da origem disso aqui, veja:");
console.log("https://youtu.be/094y1Z2wpJg");