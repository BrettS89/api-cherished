import schemas from '../schemas/index.js';

export default (app) => {
  app.schema = (route, schema = null) => {
    if (!schema) {
      const foundSchema = schemas[route];

      if (!foundSchema) {
        throw new Error('No schema found');
      }

      return foundSchema;
    }

    schemas[route] = schema;
  };
};
