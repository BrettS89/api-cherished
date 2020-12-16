import Service from '../../../utilities/services/Service.js';
import model from './model.js';
import hooks from './hooks.js';

const service = app => {
  const config = {
    model,
    route: '/content/album',
    hooks,
  };

  app.registerService(new Service(config));
  // app.schema(config.route, schema);
};

export default service;
