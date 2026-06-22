import { render, screen } from '@testing-library/angular';
import { SelectComponent } from './select.component.js';

describe('SelectComponent', () => {
  it('should render slot for select content', async () => {
    await render(SelectComponent, {
      template: `<ia-select><span label>Plan</span><mat-select></mat-select></ia-select>`,
      imports: []
    });

    expect(screen.getByText('Plan')).toBeInTheDocument();
  });
});
