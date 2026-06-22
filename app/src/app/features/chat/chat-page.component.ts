import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/buttons/button.component';
import { InputComponent } from '../../ui/form-controls/input/input.component';

@Component({
  selector: 'ia-chat-page',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule],
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPageComponent {}
