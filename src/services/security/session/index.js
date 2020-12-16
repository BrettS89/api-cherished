import SessionClass from './class.js';
// import schema from './schema/index.js';
import hooks from './hooks.js';

const service = app => {
  const config = {
    route: '/security/session',
    hooks,
    app,
  };

  app.registerService(new SessionClass(config));
  // app.schema(config.route, schema);
};

export default service;
