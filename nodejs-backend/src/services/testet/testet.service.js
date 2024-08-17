const { Testet } = require('./testet.class');
const createModel = require('../../models/testet.model');
const hooks = require('./testet.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/testet', new Testet(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('testet');

  service.hooks(hooks);
};