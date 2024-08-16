const meuArray = [1, 2, 3];
meuArray[0] = 4;
console.log(meuArray);

let minhaString = "Olá";

minhaString[0] = 'o';
console.log(minhaString);

minhaString = 'o' + 
minhaString.slice(1);
console.log(minhaString);