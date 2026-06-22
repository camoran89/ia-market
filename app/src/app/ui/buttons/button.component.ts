import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ia-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  readonly variant: WritableSignal<'primary' | 'secondary'> = signal('primary');
  readonly disabled: WritableSignal<boolean> = signal(false);
}
