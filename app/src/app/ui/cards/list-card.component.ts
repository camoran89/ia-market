import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardComponent } from './card.component.js';
import { ListComponent } from '../lists/list.component.js';
import { ListItemComponent } from '../lists/list-item.component.js';

@Component({
  selector: 'ia-list-card',
  standalone: true,
  imports: [CardComponent, ListComponent, ListItemComponent],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCardComponent {
  title = input<string>();
  items = input<string[]>();
}
