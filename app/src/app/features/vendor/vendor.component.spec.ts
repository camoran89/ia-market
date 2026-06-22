import { render, screen } from '@testing-library/angular';
import { VendorComponent } from './vendor.component.js';

describe('VendorComponent', () => {
  it('should render subscribe button', async () => {
    await render(VendorComponent);

    expect(screen.getByText('Registrar suscripción')).toBeInTheDocument();
  });
});
