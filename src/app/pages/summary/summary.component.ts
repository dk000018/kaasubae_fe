import { Component, signal } from '@angular/core';
import { addCommas } from '../../utils/commonFunctions';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-summary',
  imports: [CardComponent],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  selectedMonthYear = signal(''); // Stores YYYY-MM
  selectedYear = signal(''); // Stores Year
  selectedMonth = signal(''); // Stores Month

  constructor() {
    // Get current date and format it as YYYY-MM
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = String(today.getMonth() + 1).padStart(2, '0');

    // Initialize signals with default values
    this.selectedYear.set(year);
    this.selectedMonth.set(month);
    this.selectedMonthYear.set(`${year}-${month}`);
  }

  // Update values when user selects a different month
  onMonthChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.selectedMonthYear.set(input.value);

      // Extract year and month from the input value
      const [year, month] = input.value.split('-');
      this.selectedYear.set(year);
      this.selectedMonth.set(month);

      console.log(
        `Selected Year: ${this.selectedYear()}, Selected Month: ${this.selectedMonth()}`
      );
    }
  }

  monthlySummaryData = {
    earnings: {
      title: 'Earnings',
      total: 21500,
      breakdown: [
        { type: 'Salary', amount: 10000 },
        { type: 'Freelance', amount: 4000 },
        { type: 'Investments', amount: 3000 },
        { type: 'Rental Income', amount: 2000 },
        { type: 'Side Business', amount: 1500 },
      ],
    },
    spends: {
      title: 'Spends',
      total: 7500,
      breakdown: [
        { type: 'Rent', amount: 3000 },
        { type: 'Groceries', amount: 1500 },
        { type: 'Utilities', amount: 1000 },
        { type: 'Transport', amount: 1000 },
        { type: 'Entertainment', amount: 1000 },
      ],
    },
    savings: {
      title: 'Savings',
      total: 5000,
      breakdown: [
        { type: 'Emergency Fund', amount: 2000 },
        { type: 'Retirement Fund', amount: 1500 },
        { type: 'Investments', amount: 1000 },
        { type: 'Vacation Savings', amount: 300 },
        { type: 'Miscellaneous Savings', amount: 200 },
      ],
    },
    balance: 5000,
    currency: '₹',
  };

  addCommas = addCommas;
}
