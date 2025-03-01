function checkStringLength(str, maxLength) {
  if (typeof str !== 'string') {
    throw new Error('Первый аргумент должен быть строкой');
  }
  if (typeof maxLength !== 'number' || maxLength <= 0) {
    throw new Error('Второй аргумент должен быть положительным числом');
  }
  return str.length <= maxLength;
}
