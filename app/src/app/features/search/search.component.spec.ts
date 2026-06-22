import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './search.component.js';
import { resolveAngularComponentResources } from '../../../test-helpers.js';

describe('SearchComponent', () => {
  it('should render search button', async () => {
    await resolveAngularComponentResources();

    await render(SearchComponent, {
      imports: [HttpClientTestingModule]
    });

    expect(screen.getByText('Buscar')).toBeTruthy();
  });
});
