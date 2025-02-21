import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuItems = [
    { name: 'Summary', path: '' },
    { name: 'Transactions', path: 'transactions' },
    { name: 'Mandates', path: 'mandates' },
    { name: 'Loans', path: 'loans' },
    { name: 'Investments', path: 'investments' },
    { name: 'Analytics', path: 'analytics' },
    { name: 'Settings', path: 'settings' },
    { name: 'Help', path: 'help' },
  ];
}
