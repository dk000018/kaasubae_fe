import { Component } from '@angular/core';
import { TableComponent } from '../../components/ui/table/table.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalComponent } from '../../components/ui/modal/modal.component';

@Component({
  selector: 'app-investments',
  imports: [TableComponent, ReactiveFormsModule, ModalComponent],
  templateUrl: './investments.component.html',
})
export class InvestmentsComponent {
  columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Invested Money', dataIndex: 'investedMoney' },
    { title: 'Expected Return Rate', dataIndex: 'expectedReturnRate' },
    { title: 'Starting Date', dataIndex: 'startingDate' },
    { title: 'Frequency', dataIndex: 'frequency' },
    { title: 'Actions', dataIndex: 'actions' },
  ];

  data = [
    {
      name: 'Stock Market',
      investedMoney: '₹5,00,000',
      expectedReturnRate: '15%',
      startingDate: '01-01-2022',
      frequency: 'Yearly',
    },
    {
      name: 'Mutual Funds',
      investedMoney: '₹2,00,000',
      expectedReturnRate: '12%',
      startingDate: '15-03-2021',
      frequency: 'Monthly',
    },
    {
      name: 'Fixed Deposit',
      investedMoney: '₹3,00,000',
      expectedReturnRate: '6%',
      startingDate: '10-06-2020',
      frequency: 'Quarterly',
    },
    {
      name: 'Gold ETF',
      investedMoney: '₹1,50,000',
      expectedReturnRate: '8%',
      startingDate: '20-08-2022',
      frequency: 'Yearly',
    },
    {
      name: 'Real Estate',
      investedMoney: '₹25,00,000',
      expectedReturnRate: '10%',
      startingDate: '01-01-2018',
      frequency: 'Lump Sum',
    },
  ];

  formData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl(1, [Validators.required, Validators.min(1)]),
    err: new FormControl(1, [Validators.required, Validators.min(1)]),
    startDate: new FormControl('', Validators.required),
    frequency: new FormControl('', Validators.required),
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
      amount: 1,
      err: 1,
      startDate: '',
      frequency: '',
    });
  }

  onSubmit() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }

    console.log('New Loan:', this.formData.value);
    this.resetForm();
    this.closeModal();
  }

  frequencyOptions = [
    'Daily',
    'Weekly',
    'Monthly',
    'Quarterly',
    'Half - Yearly',
    'Annually',
    'Lumpsum',
  ];
}
