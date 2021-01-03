import schemas from '../schemas/index.js';
import config from '../../config/index.js';

export default (app) => {
  app.schema = schema => {
    if (typeof schema === 'string') {
      return config.schemas[schema];
    }

    if (!schema.$id) {
      throw new Error('Schema must include field $id');
    }

    config.schemas[schema.$id] = schema;
    
    app.ajv.addSchema(schema, schema.$id);
  }
};
