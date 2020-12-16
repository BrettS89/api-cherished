import services from '../../config/index.js';

export default setService = app => {
  app.setService = service => {
    const serviceName = service.route.slice(1);
    services[serviceName] = service;
  };
};
