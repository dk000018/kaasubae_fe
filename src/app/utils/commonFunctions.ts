export function addCommas(num: number): string {
  return num.toLocaleString('en-US');
}

export function getTextColor(title: string): string {
  switch (title) {
    case 'Earnings':
      return 'earnings';
    case 'Spends':
      return 'spends';
    case 'Savings':
      return 'savings';
    default:
      return 'text-gray-500'; // Default case for Savings or others
  }
}
