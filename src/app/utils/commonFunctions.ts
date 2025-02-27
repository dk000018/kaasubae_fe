export function getTextColor(title: string): string {
  switch (title.toLowerCase()) {
    case 'earnings':
      return 'earnings';
    case 'spends':
      return 'spends';
    case 'savings':
      return 'savings';
    default:
      return 'text-slate-200'; // Default case for Savings or others
  }
}
