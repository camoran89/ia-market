import * as target from './vendor.module.js';

describe('vendor.module', () => {
  it('should load vendor.module', () => {
    expect(target).toBeDefined();
  });
});
