// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const multiplyByIndex = numbers => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

multiplyByIndex([1, 2, 3, 4, 5]);

// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const dividedByIndex = numbers => {
  const resultDivisions = numbers.map((number, index) => {
    return number / (index + 1);
  });

  return resultDivisions;
};

const resultDivisions = dividedByIndex([1, 2, 3, 4, 5]);
console.log(resultDivisions);

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const wordsToUpper = words => {
  const resultWords = words.map(word => {
    return word.toUpperCase();
  });

  return resultWords;
};

const resultWords = wordsToUpper(['hola', 'adios']);
console.log(resultWords);

// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas y minúsculas.

const filteredWordsByLetter = (words, letter) => {
  // const filteredWords = []
  //   for (const word of words) {
  //     if (word.startsWith(letter)) {
  //      filteredWords.push(word)
  //     }
  //   }

  const filteredWords = words.filter(word => {
    return word.toLowerCase().startsWith(letter.toLowerCase());
  });

  if (filteredWords.length > 0) {
    return filteredWords;
  }

  return 'No hay palabras que empiecen por la letra ' + letter;
};

const resultFilterWords = filteredWordsByLetter(['hola', 'adios', 'amanda'], 'A');
console.log(resultFilterWords);

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumAllNumbers = numbers => {
  const total = numbers.reduce((acc, number) => {
    return acc + number;
  });

  console.log(total);
};

sumAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo.

const squareAndCubeNumber = numbers => {
  numbers.forEach(number => {
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);

    console.log(`Número: ${number} - cuadrado: ${square} - cubo: ${cube}`);
  });
};

squareAndCubeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsToUpper = word => {
  const vowels = 'aeiouáéíóú';
  const newWord = word.split('').reduce((finalWord, letter) => {
    console.log(finalWord);
    if (vowels.includes(letter.toLowerCase())) {
      return finalWord + letter.toUpperCase();
    } else {
      return finalWord + letter;
    }
  }, '');

  console.log(newWord);
};

vowelsToUpper('ordenador');

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const someNumberGreaterThan5 = numbers => {
  const greaterThan5 = numbers.some(number => number > 5);

  if (greaterThan5) {
    console.log('Algún número es mayor de 5');
  } else {
    console.log('Ningún número es mayor de 5');
  }
};

someNumberGreaterThan5([1, 2, 3, 4, 51, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const filterWordsByLength = (words, length) => {
  const filteredWords = words.filter(word => {
    return word.length === length;
  });

  console.log(filteredWords);
};

filterWordsByLength(['hola', 'adios', 'gato', 'perro', 'casa'], 5);

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

const filterNumbersByDivider = (numbers, divider) => {
  return numbers.filter(number => number % divider === 0);
};

console.log(filterNumbersByDivider([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
const filterUsersByAge = () => {
  const filteredUsers = users.filter(user => user.age < 30);
  return filteredUsers;
};

console.log(filterUsersByAge());

// - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

const allNumbersAreEven = numbers => {
  const areAllEven = numbers.every(number => number % 2 === 0);

  if (areAllEven) {
    console.log('Todos son pares');
  } else {
    console.log('Alguno es impar');
  }
};

allNumbersAreEven([12, 2, 32, 4, 52, 6, 72, 8, 92, 10]);

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
const sortByLength = words => {
  console.log(words);
  words.sort((a, b) => a.length - b.length);
  console.log(words);
};

// Números -> a - b ó b - a
// Strings -> a.localeCompare(b) ó b.localeCompare(a)

sortByLength(['adios', 'ordenador', 'hola']);

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

const reverseWord = word => {
  //   const reversedWord = word.split('').reduce((acc, letter) => {
  //     console.log('ACUMULADO', acc);
  //     console.log('LETRA ACTUAL ', letter);
  //     return letter + acc;
  //   });

  //   let reversedWord = '';

  //   for (const letter of word) {
  //     console.log(reversedWord);
  //     reversedWord = letter + reversedWord;
  //   }

  const reversedWord = word.split('').reverse().join('');

  console.log(reversedWord);
};

/* 
    Mariposas

    M
    a
    r
    i
    p
    o
    s
    a
    s


*/

reverseWord('Mariposas');
