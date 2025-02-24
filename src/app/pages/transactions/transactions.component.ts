import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent {
  transactions = [
    { name: 'Salary', amount: 5000, category: 'Income' },
    { name: 'Freelance', amount: 1200, category: 'Income' },
    { name: 'Rent', amount: -1500, category: 'Expense' },
    { name: 'Groceries', amount: -300, category: 'Expense' },
    { name: 'Savings', amount: 2000, category: 'Savings' },
  ];

  addCommas(value: number): string {
    return value.toLocaleString(); // Adds commas
  }
}
