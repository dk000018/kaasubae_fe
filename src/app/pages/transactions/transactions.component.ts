import { Component } from '@angular/core';
import { TableComponent } from '../../components/ui/table/table.component';
import { ModalComponent } from '../../components/ui/modal/modal.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-transactions',
  imports: [TableComponent, ModalComponent, ReactiveFormsModule],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent {
  data = {
    headers: ['name', 'amount', 'tags', 'notes', 'actions'],
    transactions: [
      {
        name: 'Salary',
        amount: '₹1200',
        category: 'earnings',
        notes: 'The quick brown fox jumps over the lazy dog.',
        tags: 'Main Income',
      },
      {
        name: 'Freelance',
        amount: '₹1200',
        category: 'earnings',
        tags: 'Side Income',
      },
      { name: 'Rent', amount: '₹1200', category: 'spends', tags: 'Rent' },
      { name: 'Groceries', amount: '₹1200', category: 'spends', tags: 'Food' },
      { name: 'Savings', amount: '₹1200', category: 'savings', tags: 'Gold' },
    ],
  };

  tagOptions = [
    'Food',
    'Clothes',
    'Rent',
    'Transport',
    'Entertainment',
    'Bills',
    'Savings',
    'Investments',
  ];

  categoryOptions = ['earnings', 'spends', 'savings'];

  // Fix form initialization: Use new FormControl()
  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('spends'), // Default empty selection
    amount: new FormControl(1, [Validators.min(1)]),
    tags: new FormControl('', [Validators.required]), // Default empty selection
    notes: new FormControl(''),
  });

  onSubmit() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched(); // Highlight errors
      return;
    }

    console.log(this.formData.value);
    this.resetForm();
    this.closeModal();
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.formData.reset({
      name: '',
      category: 'spends', // Default value
      amount: 1, // Default value
      tags: '', // Default empty selection
      notes: '',
    });
  }
}
