import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatWindowComponent } from '../common/chat/chat-window.component.js';
import { ChatService } from '../../services/chat.service.js';
import { ButtonComponent } from '../../ui/buttons/button.component.js';
import { CardComponent } from '../../ui/cards/card.component.js';
import { InputComponent } from '../../ui/form-controls/input/input.component.js';

@Component({
  selector: 'ia-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule, ChatWindowComponent, ButtonComponent, CardComponent, InputComponent],
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorComponent {
  private readonly chatService = inject(ChatService);
  readonly vendorId = signal('vendor-123');
  readonly plan = signal('standard');
  readonly status = signal('');
  readonly messages = this.chatService.conversation.messagesSignal;

  subscribe() {
    this.chatService
      .sendMessage(`Registrar suscripción en el plan ${this.plan()}`, 'vendor', this.vendorId())
      .subscribe(() => this.status.set('Subscription request sent'));
  }

  handleMessage(messageText: string) {
    this.chatService.sendMessage(messageText, 'vendor', this.vendorId()).subscribe();
  }
}
