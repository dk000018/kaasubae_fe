import { Component, signal } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailydayComponent } from './components/dailyday/dailyday.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CalendarComponent, DailydayComponent],
})
export class AppComponent {
  selectedDate = signal<string | null>(null);

  onDateSelected(date: string) {
    this.selectedDate.set(date);
  }
}
