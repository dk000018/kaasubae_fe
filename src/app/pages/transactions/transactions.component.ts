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
  columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Amount', dataIndex: 'amount' },
    { title: 'Tags', dataIndex: 'tags' },
    { title: 'Notes', dataIndex: 'notes' },
    { title: 'Actions', dataIndex: 'actions' },
  ];

  data = [
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
  ];

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

  selectedDate: string = this.getFormattedDate(new Date()); // Set default to today

  // Move to the previous day
  prevDay() {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    this.selectedDate = this.getFormattedDate(newDate);
  }

  // Move to the next day
  nextDay() {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    this.selectedDate = this.getFormattedDate(newDate);
  }

  // Update the selected date when user picks a new one
  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedDate = inputElement.value;
  }

  // Format date to 'YYYY-MM-DD' (compatible with date picker)
  private getFormattedDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

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
