import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { ToolbarComponent } from './toolbar.component.js';

describe('ToolbarComponent', () => {
  it('should render toolbar title', async () => {
    await render(ToolbarComponent);

    expect(screen.getByText('IA Marketplace')).toBeTruthy();
  });
});
