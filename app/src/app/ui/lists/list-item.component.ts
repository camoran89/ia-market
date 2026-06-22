import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ia-list-item',
  standalone: true,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {}
