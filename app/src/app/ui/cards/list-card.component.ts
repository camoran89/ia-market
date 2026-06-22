import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ia-list-card',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCardComponent {
  readonly title: WritableSignal<string> = signal('');
  readonly items: WritableSignal<string[]> = signal([]);
}
