import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ia-textarea',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent {
  readonly label: WritableSignal<string> = signal('');
  readonly placeholder: WritableSignal<string> = signal('');
  readonly value: WritableSignal<string> = signal('');
}
