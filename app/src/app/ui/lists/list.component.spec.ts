import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { ListComponent } from './list.component.js';
import { ListItemComponent } from './list-item.component.js';

describe('ListComponent', () => {
  it('should render list container', async () => {
    await render(`<ia-list><ia-list-item>Item 1</ia-list-item></ia-list>`, {
      imports: [ListComponent, ListItemComponent]
    });

    expect(screen.getByText('Item 1')).toBeTruthy();
  });
});
