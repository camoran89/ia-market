import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'ia-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  readonly label: WritableSignal<string> = signal('');
  readonly options: WritableSignal<{ value: string; label: string }[]> = signal([]);
  readonly value: WritableSignal<string> = signal('');
}
