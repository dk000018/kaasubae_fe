import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

export const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '', component: SummaryComponent },
];
