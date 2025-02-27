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
  selector: 'app-automations',
  standalone: true,
  imports: [TableComponent, ModalComponent, ReactiveFormsModule],
  templateUrl: './automations.component.html',
})
export class AutomationsComponent {
  data = {
    headers: ['name', 'amount', 'date', 'actions'],
    transactions: [
      { name: 'Salary', amount: '₹50,000', category: 'earnings', date: '1st' },
      {
        name: 'Freelance Project',
        amount: '₹15,000',
        category: 'earnings',
        date: '10th',
      },
      { name: 'Groceries', amount: '₹5,000', category: 'spends', date: '5th' },
      {
        name: 'Dining Out',
        amount: '₹2,500',
        category: 'spends',
        date: '15th',
      },
      {
        name: 'Index Fund SIP',
        amount: '₹3,000',
        category: 'savings',
        date: '20th',
      },
      {
        name: 'Emergency Fund',
        amount: '₹5,000',
        category: 'savings',
        date: '25th',
      },
    ],
  };

  categoryOptions = ['earnings', 'spends', 'savings'];
  days = Array.from({ length: 31 }, (_, i) => i + 1); // Days 1-31

  formData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('spends', Validators.required),
    amount: new FormControl(1, [Validators.required, Validators.min(1)]),
    date: new FormControl('', Validators.required),
  });

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
      category: 'spends',
      amount: 1,
      date: '',
    });
  }

  onSubmit() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }

    console.log('New Automation:', this.formData.value);
    this.resetForm();
    this.closeModal();
  }
}
