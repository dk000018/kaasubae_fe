import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  imports: [NgFor, NgIf],
})
export class CalendarComponent {
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentDate = new Date();
  currentDateDD = new Date().getDate();

  currentMonthIndex = signal(this.currentDate.getMonth());
  currentYear = signal(this.currentDate.getFullYear());
  selectedDate = signal<number | null>(null);

  @Output() dateSelected = new EventEmitter<string>();

  calendarDays = computed(() => this.generateCalendar());

  generateCalendar(): (number | null)[] {
    console.log('currentDateDD', this.currentDateDD);
    const firstDayIndex = new Date(
      this.currentYear(),
      this.currentMonthIndex(),
      1
    ).getDay();
    const daysInMonth = new Date(
      this.currentYear(),
      this.currentMonthIndex() + 1,
      0
    ).getDate();

    let days = [
      ...Array(firstDayIndex).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    while (days.length < 42) {
      days.push(null);
    }

    return days;
  }

  selectDate(day: number | null) {
    if (day !== null) {
      this.selectedDate.set(day);
      const formattedDate = `${day.toString().padStart(2, '0')}-${(
        this.currentMonthIndex() + 1
      )
        .toString()
        .padStart(2, '0')}-${this.currentYear()}`;
      this.dateSelected.emit(formattedDate);
    }
  }

  changeMonth(offset: number) {
    let newMonth = this.currentMonthIndex() + offset;
    let newYear = this.currentYear();

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    this.currentMonthIndex.set(newMonth);
    this.currentYear.set(newYear);
  }

  getMonthName(): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[this.currentMonthIndex()];
  }
}
