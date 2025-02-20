import { Component, signal } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailydayComponent } from './components/dailyday/dailyday.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CalendarComponent, DailydayComponent, NavbarComponent],
})
export class AppComponent {
  selectedDate = signal<string | null>(null);
  selectedMonth = signal<string | null>(null);
  selectedYear = signal<string | null>(null);

  onDateSelected(date: string) {
    this.selectedDate.set(date);
  }

  onMonthSelected(month: string) {
    this.selectedMonth.set(month);
  }

  onYearSelected(year: string) {
    this.selectedYear.set(year);
  }
}
