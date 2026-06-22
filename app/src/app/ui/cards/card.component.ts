import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ia-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  readonly title: WritableSignal<string> = signal('');
}
