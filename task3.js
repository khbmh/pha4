function checkDigitsInName(name) {
  if (typeof name === 'string') {
    let numbers = '1234567890';
    for (const letter of name) {
      if (numbers.includes(letter)) {
        return true;
      }
    }
    return false;
  } else {
    return 'Invalid Input';
  }
}