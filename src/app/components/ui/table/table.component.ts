import { Component, Input } from '@angular/core';
import { getTextColor } from '../../../utils/commonFunctions';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() data: any;
  @Input() columns: any;

  getTextColor = getTextColor;
}
