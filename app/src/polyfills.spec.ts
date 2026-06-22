import * as target from './polyfills.js';

describe('polyfills', () => {
  it('should load polyfills', () => {
    expect(target).toBeDefined();
  });
});
