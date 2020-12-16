import envVars from './envVars.js';
import http from './http.js';
import registerService from './registerService.js';
import schema from './schema.js';
import security from './security.js';
import sendgridUtil from './sendgrid.js';
import serviceUtils from './serviceUtils.js';

export default [
  envVars,
  http,
  registerService,
  schema,
  security,
  sendgridUtil,
  serviceUtils,
];
