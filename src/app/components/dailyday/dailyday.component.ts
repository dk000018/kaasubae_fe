import { NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-dailyday',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dailyday.component.html',
})
export class DailydayComponent {
  private _selectedDate = signal<string | null>(null);

  @Input() set selectedDate(value: string | null) {
    this._selectedDate.set(value);
  }

  get selectedDate() {
    return this._selectedDate();
  }
}
