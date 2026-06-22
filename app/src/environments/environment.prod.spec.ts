import * as target from './environment.prod.js';

describe('environment.prod', () => {
  it('should load environment.prod', () => {
    expect(target).toBeDefined();
  });
});
