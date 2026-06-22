import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AppService } from '../../app.service.js';
import { ButtonComponent } from '../../ui/buttons/button.component.js';
import { CardComponent } from '../../ui/cards/card.component.js';
import { InputComponent } from '../../ui/form-controls/input/input.component.js';

@Component({
  selector: 'ia-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, CardComponent, InputComponent],
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorComponent {
  private readonly appService = inject(AppService);
  readonly vendorId = signal('vendor-123');
  readonly plan = signal('standard');
  readonly status = signal('');

  async subscribe() {
    await this.appService.registerVendorSubscription(this.vendorId(), this.plan());
    this.status.set('Subscription registered successfully');
  }
}
