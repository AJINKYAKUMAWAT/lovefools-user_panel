export function formatInput(input) {
    const cleaned = input.replace(/[^\d.]/g, '');
  
    const parts = cleaned.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '';
  
    let lastThree = integerPart.slice(-3);
    const otherNumbers = integerPart.slice(0, -3);
  
    if (otherNumbers !== '') {  
      lastThree = ',' + lastThree;
    }
  
    const formattedInteger =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  
    let result = formattedInteger;
    if (decimalPart.length > 0 || input.includes('.')) {
      result += '.' + decimalPart;
    }
  
    return result;
  }