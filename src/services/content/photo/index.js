import Service from '../../../utilities/services/Service.js';
import model from './model.js';
import hooks from './hooks.js';
import schemas from './schemas/index.js';

const service = app => {
  const config = {
    model,
    route: '/content/photo',
    hooks,
  };

  app.registerService(new Service(config));
  schemas.forEach(s => app.schema(s));
};

export default service;
