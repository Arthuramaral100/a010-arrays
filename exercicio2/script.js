const arrayNumber = [1, 56, 3, 8, 100, 23]
const arrayStrings = ["batata", "arroz", "cenoura", "banana"]
const arrayMisto = [56, "bolo", "torta", 30, false, "tomate"]

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("Itens da arrayNumber: ", arrayNumber.length);
console.log("Itens da arrayStrings: ", arrayStrings.length);
console.log("Itens da arrayMisto: ", arrayMisto.length);

//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("Primeiro item do primeiro Array: ", arrayNumber[0]);
console.log("Segundo item do segundo Array: ", arrayStrings[1]);
console.log("Terceiro item do terceiro Array: ", arrayMisto[2]);

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array.
console.log("Na primeira array tem o número 100?", arrayNumber.includes(100));
console.log("Na terceira array tem a string \"chocolate\" ?", arrayMisto.includes("chocolate"));


