import * as target from './vitest.setup.js';

describe('vitest.setup', () => {
  it('should load vitest.setup', () => {
    expect(target).toBeDefined();
  });
});
