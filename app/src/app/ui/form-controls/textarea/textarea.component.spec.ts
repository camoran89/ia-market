import { render, screen } from '@testing-library/angular';
import { TextareaComponent } from './textarea.component.js';

describe('TextareaComponent', () => {
  it('should render textarea wrapper content', async () => {
    await render(TextareaComponent, {
      template: `<ia-textarea><span label>Comentario</span><textarea></textarea></ia-textarea>`
    });

    expect(screen.getByText('Comentario')).toBeInTheDocument();
  });
});
