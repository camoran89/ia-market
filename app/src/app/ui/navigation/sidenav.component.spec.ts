import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { SidenavComponent } from './sidenav.component.js';

describe('SidenavComponent', () => {
  it('should render navigation links', async () => {
    await render(SidenavComponent);

    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Buscar')).toBeTruthy();
    expect(screen.getByText('Vendedor')).toBeTruthy();
  });
});
