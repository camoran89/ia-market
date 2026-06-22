import { render, screen } from '@testing-library/angular';
import { ListItemComponent } from './list-item.component.js';

describe('ListItemComponent', () => {
  it('should render list item content', async () => {
    await render(ListItemComponent, {
      template: `<ia-list-item>Item text</ia-list-item>`
    });

    expect(screen.getByText('Item text')).toBeInTheDocument();
  });
});
