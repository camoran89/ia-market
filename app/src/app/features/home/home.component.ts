import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/buttons/button.component.js';
import { CardComponent } from '../../ui/cards/card.component.js';
import { AppService } from '../../app.service.js';

@Component({
  selector: 'ia-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly appService = inject(AppService);

  readonly message = this.appService.message();

  loadHealth() {
    this.appService.loadApiHealth();
  }
}
