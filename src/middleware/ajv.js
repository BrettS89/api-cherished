import Ajv from 'ajv';
import schemas from '../schemas/index.js';

const fn = app => {
  app.ajv = new Ajv();
  schemas.forEach(s => app.ajv.addSchema(s));
};

export default fn;
