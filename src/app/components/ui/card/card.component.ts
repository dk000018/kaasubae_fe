import { Component, Input } from '@angular/core';
import { getTextColor } from '../../../utils/commonFunctions';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() data: any;

  getTextColor = getTextColor;
}
