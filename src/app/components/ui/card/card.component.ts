import { Component, Input } from '@angular/core';
import { addCommas, getTextColor } from '../../../utils/commonFunctions';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() data!: {
    title: string;
    total: number;
    breakdown: { type: string; amount: number }[];
  };

  addCommas = addCommas;
  getTextColor = getTextColor;
}
