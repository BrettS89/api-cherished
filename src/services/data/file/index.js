import FileService from './class.js';
import hooks from './hooks.js';

const service = app => {
  const config = {
    app,
    route: '/data/file',
    hooks,
  };

  app.registerService(new FileService(config));
  // app.schema(config.route, schema);
};

export default service;
