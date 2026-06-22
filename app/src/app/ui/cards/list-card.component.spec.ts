import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { ListCardComponent } from './list-card.component.js';
import { resolveAngularComponentResources } from '../../../test-helpers.js';

describe('ListCardComponent', () => {
  it('should render title and items', async () => {
    await resolveAngularComponentResources();

    await render(ListCardComponent, {
      componentProperties: {
        title: 'Test title',
        items: ['one', 'two']
      }
    });

    expect(screen.getByText('Test title')).toBeTruthy();
  });
});
