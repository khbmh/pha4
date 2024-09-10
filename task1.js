function calculateTax(income, expenses) {
  if (0 <= income && 0 <= expenses && income >= expenses) {
    let taxPayableIncome = income - expenses;
    let tax = taxPayableIncome * 0.2;
    return tax;
  } else {
    return 'Invalid Input';
  }
}
