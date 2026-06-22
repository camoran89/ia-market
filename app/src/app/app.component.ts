import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './ui/layout/toolbar.component.js';
import { SidenavComponent } from './ui/navigation/sidenav.component.js';

@Component({
  selector: 'ia-marketplace-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
