import { Component } from '@angular/core';
import { TableComponent } from '../../components/ui/table/table.component';

@Component({
  selector: 'app-loans',
  imports: [TableComponent],
  templateUrl: './loans.component.html',
})
export class LoansComponent {
  columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Loan Amount', dataIndex: 'amount' },
    { title: 'Rate of Interest', dataIndex: 'interestRate' },
    { title: 'Tenure (Months)', dataIndex: 'tenure' },
    { title: 'Start Date', dataIndex: 'startDate' },
    { title: 'End Date', dataIndex: 'endDate' },
    { title: 'Paid Months', dataIndex: 'paidMonths' },
    { title: 'Remaining Months', dataIndex: 'remainingMonths' },
    { title: 'EMI Amount', dataIndex: 'emiAmount' },
    { title: 'Principle Paid', dataIndex: 'principlePaid' },
    { title: 'Interest Paid', dataIndex: 'interestPaid' },
    { title: 'Principle Remaining', dataIndex: 'principleRemaining' },
    { title: 'Interest Remaining', dataIndex: 'interestRemaining' },
    { title: 'Total Amount Paid', dataIndex: 'totalPaid' },
    { title: 'Total Outstanding', dataIndex: 'totalOutstanding' },
    { title: 'Next Due Date', dataIndex: 'nextDueDate' },
    { title: 'Actions', dataIndex: 'actions' },
  ];

  data = [
    {
      name: 'Home Loan',
      amount: '₹50,00,000',
      interestRate: '8.5%',
      tenure: 240,
      startDate: '01-01-2020',
      endDate: '01-01-2040',
      paidMonths: 48,
      remainingMonths: 192,
      emiAmount: '₹43,391',
      principlePaid: '₹5,00,000',
      interestPaid: '₹7,00,000',
      principleRemaining: '₹45,00,000',
      interestRemaining: '₹50,00,000',
      totalPaid: '₹12,00,000',
      totalOutstanding: '₹95,00,000',
      nextDueDate: '05-03-2024',
      status: 'Paid',
    },
    {
      name: 'Car Loan',
      amount: '₹10,00,000',
      interestRate: '9.0%',
      tenure: 60,
      startDate: '15-06-2022',
      endDate: '15-06-2027',
      paidMonths: 20,
      remainingMonths: 40,
      emiAmount: '₹20,750',
      principlePaid: '₹2,50,000',
      interestPaid: '₹1,50,000',
      principleRemaining: '₹7,50,000',
      interestRemaining: '₹2,00,000',
      totalPaid: '₹4,00,000',
      totalOutstanding: '₹9,50,000',
      nextDueDate: '10-03-2024',
      status: 'Pending',
    },
  ];

  amortColumns = [
    { title: 'Month', dataIndex: 'month' },
    { title: 'EMI Amount', dataIndex: 'emi' },
    { title: 'Principal Paid', dataIndex: 'principalPaid' },
    { title: 'Interest Paid', dataIndex: 'interestPaid' },
    { title: 'Remaining Balance', dataIndex: 'remainingBalance' },
  ];

  amortData = [
    {
      month: 1,
      emi: '₹43,391',
      principalPaid: '₹7,874',
      interestPaid: '₹35,516',
      remainingBalance: '₹49,21,126',
    },
    {
      month: 2,
      emi: '₹43,391',
      principalPaid: '₹7,941',
      interestPaid: '₹35,450',
      remainingBalance: '₹48,41,185',
    },
    {
      month: 3,
      emi: '₹43,391',
      principalPaid: '₹8,008',
      interestPaid: '₹35,383',
      remainingBalance: '₹47,57,777',
    },
    {
      month: 4,
      emi: '₹43,391',
      principalPaid: '₹8,076',
      interestPaid: '₹35,315',
      remainingBalance: '₹46,72,900',
    },
    {
      month: 5,
      emi: '₹43,391',
      principalPaid: '₹8,144',
      interestPaid: '₹35,247',
      remainingBalance: '₹45,86,556',
    },
  ];
}
