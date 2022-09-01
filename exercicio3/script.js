const arrayNumber = [1, 56, 3, 8, 100, 23]
const arrayStrings = ["batata", "arroz", "cenoura", "banana"]
const arrayMisto = [56, "bolo", "torta", 30, false, "tomate"]

//crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const arrayNumberCopia = arrayNumber.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistoCopia = arrayMisto.slice()

//dicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumberCopia.push(4)
console.log("Array original: ", arrayNumber);
console.log("Cópia do Array: ", arrayNumberCopia);

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayStringsCopia.pop()
console.log("Array original: ", arrayStrings);
console.log("Cópia do Array: ", arrayStringsCopia);

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayMistoCopia.splice(1,1)
console.log("Array original: ", arrayMisto);
console.log("Copia do Array: ", arrayMistoCopia);

