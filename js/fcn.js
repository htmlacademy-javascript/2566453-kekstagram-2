let isLenOk = function (str, maxLength) {
  return str.length <= maxLength;
}
isLenOk('проверяемая строка', 20);

// 1 задание

let isPalindrome = function(inputString) {
  let charactersArray = inputString.split('');
  let reversedString = '';

  for (let i = charactersArray.length - 1; i >= 0; i--) {
    reversedString += charactersArray[i];
  }

  if (reversedString.toLowerCase() === inputString.toLowerCase()) {
    return 'True';
  } else {
    return 'False';
  }
}

// 2 задание

let extractDigits = function (input) {
  let strInput = String(input);
  let result = '';
  let characters = strInput.split('');

  characters.filter(function (char) {
    if (!isNaN(char) && char !== ' ') {
      result += char;
    }
  });

  if (result === "") {
    return NaN;
  }

  return Number(result);
}

// 3 задание
