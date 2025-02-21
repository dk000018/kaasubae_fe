import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuItems = [
    { name: 'Summary', path: '/summary' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Mandates', path: '/mandates' },
    { name: 'Loans', path: '/loans' },
    { name: 'Investments', path: '/investments' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Settings', path: '/settings' },
    { name: 'Help', path: '/help' },
  ];
}
