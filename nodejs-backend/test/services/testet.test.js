const assert = require('assert');
const app = require('../../src/app');

describe('\'testet\' service', () => {
  it('registered the service', () => {
    const service = app.service('testet');

    assert.ok(service, 'Registered the service (testet)');
  });
});
