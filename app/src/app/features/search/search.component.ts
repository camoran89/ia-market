import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AppService } from '../../app.service.js';
import { ButtonComponent } from '../../ui/buttons/button.component.js';
import { CardComponent } from '../../ui/cards/card.component.js';
import { InputComponent } from '../../ui/form-controls/input/input.component.js';
import { ListComponent } from '../../ui/lists/list.component.js';
import { ListItemComponent } from '../../ui/lists/list-item.component.js';

@Component({
  selector: 'ia-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, CardComponent, InputComponent, ListComponent, ListItemComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  private readonly appService = inject(AppService);
  
  readonly query = signal('');
  readonly results = signal<Array<{ name: string; category: string; vendorId: string; distanceMeters: number; rating: number }>>([]);
  readonly loading = signal(false);

  async search() {
    const queryValue = this.query().trim();

    if (!queryValue) {
      this.results.set([]);
      return;
    }

    this.loading.set(true);
    try {
      const response = await this.appService.search(queryValue);
      this.results.set(response.results.map(item => ({
        name: item.name,
        category: item.category,
        vendorId: item.vendorId,
        distanceMeters: item.distanceMeters,
        rating: item.rating
      })));
    } finally {
      this.loading.set(false);
    }
  }
}
