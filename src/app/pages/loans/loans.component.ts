import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  imports: [],
  templateUrl: './loans.component.html',
})
export class LoansComponent {
  data = {
    headers: ['name', 'amount'],
  };
}
