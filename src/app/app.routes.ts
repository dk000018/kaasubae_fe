import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AutomationsComponent } from './pages/automations/automations.component';
import { LoansComponent } from './pages/loans/loans.component';

export const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '', component: SummaryComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'automations', component: AutomationsComponent },
  { path: 'loans', component: LoansComponent },
];
