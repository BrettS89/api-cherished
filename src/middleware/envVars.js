import config from '../../config/index.js'

export default app => {
  app.var = str => {
    return process.env[config[str]];
  };
};
