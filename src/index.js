import express from 'express';
import connections from './connections/index.js';
import middleware from './middleware/index.js';
import services from './services/index.js';

const app = express();

connections.forEach(conn => conn());
middleware.forEach(fn => fn(app));
services.forEach(fn => fn(app));

export default app;
