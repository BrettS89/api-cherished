import config from '../../config/index.js';

const serviceUtils = app => {
  app.setService = service => {
    const serviceName = service.route.slice(1);
    config.services[serviceName] = service;
  };

  app.service = str => {
    return config.services[str];
  };
};

export default serviceUtils;
