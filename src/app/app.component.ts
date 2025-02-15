import { Component } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailydayComponent } from './components/dailyday/dailyday.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CalendarComponent, DailydayComponent],
})
export class AppComponent {
  selectedDate: string | null = null;

  onDateSelected(date: string) {
    this.selectedDate = date;
  }
}
