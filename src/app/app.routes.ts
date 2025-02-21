import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { SummaryComponent } from './pages/summary/summary.component';

export const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: '', component: SummaryComponent },
];
