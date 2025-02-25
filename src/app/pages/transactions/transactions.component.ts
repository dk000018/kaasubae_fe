import { Component } from '@angular/core';
import { TableComponent } from '../../components/ui/table/table.component';

@Component({
  selector: 'app-transactions',
  imports: [TableComponent],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent {
  data = {
    headers: ['name', 'amount', 'notes', 'actions'],
    transactions: [
      {
        name: 'Salary',
        amount: '₹1200',
        category: 'earnings',
        notes: 'The quick brown fox jumps over the lazy dog.',
      },
      { name: 'Freelance', amount: '₹1200', category: 'earnings' },
      { name: 'Rent', amount: '₹1200', category: 'spends' },
      { name: 'Groceries', amount: '₹1200', category: 'spends' },
      { name: 'Savings', amount: '₹1200', category: 'savings' },
    ],
  };

  
}
