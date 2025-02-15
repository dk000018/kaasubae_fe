import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dailyday',
  imports: [NgIf],
  templateUrl: './dailyday.component.html',
})
export class DailydayComponent {
  @Input() selectedDate: string | null = null;
}
