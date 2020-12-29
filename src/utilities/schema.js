import ajv from 'ajv';
import config from '../../config/index.js';

const schemaUtil = app => {
  app.schema = schema => {
    if (typeof schema === 'string') {
      return schemas[schema];
    }

    if (!schema.$id) {
      throw new Error('Schema must include field $id');
    }

    config.schmeas[schema.$id] = schema;
    
    app.ajv.addSchema(schema, schema.$id);
  }
};

export default schemaUtil;
