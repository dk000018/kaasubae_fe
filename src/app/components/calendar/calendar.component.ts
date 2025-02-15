import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  imports: [NgFor],
})
export class CalendarComponent {
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentDate = new Date();
  currentMonthIndex: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();
  selectedDate: number | null = null;
  calendarDays: (number | null)[] = [];

  @Output() dateSelected = new EventEmitter<string>();

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDays = [];

    const firstDayIndex = new Date(
      this.currentYear,
      this.currentMonthIndex,
      1
    ).getDay();
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonthIndex + 1,
      0
    ).getDate();

    // Fill days in the month + empty spaces before the first day
    this.calendarDays = [
      ...Array(firstDayIndex).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    // Ensure 6 rows (42 cells in total)
    while (this.calendarDays.length < 42) {
      this.calendarDays.push(null);
    }
  }

  updateCalendar() {
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

    this.currentMonthIndex = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.generateCalendar();
  }

  selectDate(day: number | null) {
    if (day !== null) {
      this.selectedDate = day;
      this.dateSelected.emit(
        `${this.getMonthName()} ${day}, ${this.currentYear}`
      );
    }
  }

  changeMonth(offset: number) {
    this.currentMonthIndex += offset;

    // Handle year change when switching months
    if (this.currentMonthIndex < 0) {
      this.currentMonthIndex = 11;
      this.currentYear--;
    } else if (this.currentMonthIndex > 11) {
      this.currentMonthIndex = 0;
      this.currentYear++;
    }

    this.currentDate.setMonth(this.currentMonthIndex);
    this.currentDate.setFullYear(this.currentYear);
    this.updateCalendar();
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
    return monthNames[this.currentMonthIndex];
  }
}
