import handlers from '../utilities/handlers.js';
import { executeAfterHooks, executeBeforeHooks } from './hooks.js';

export default (app) => {
  app.registerService = service => {
    app.setService(service);

    const route = service.route;
    const routeWithId = `${route}/:id`;
    const hooks = !!service.hooks && typeof service.hooks === 'object';
    // add format hooks utility

    app.get(route, async (req, res) => {
      try {
        if (service.hooks && service.hooks.before) {
          req = await executeBeforeHooks(req, [...service.hooks.before.all, ...service.hooks.before.find]);
        }

        let data = await service.find({ ...req });
  
        if (hooks && service.hooks.after) {
          data = await executeAfterHooks({ data, ...req, ...res }, [...service.hooks.after.all, ...service.hooks.after.find]);
        }
  
        handlers.success(req, res, data);
      } catch(e) {
        handlers.error(req, res, e);
      }
    });

    app.get(routeWithId, async (req, res) => {
      try {
        if (hooks && service.hooks.before) {
          req = await executeBeforeHooks(req, [...service.hooks.before.all, ...service.hooks.before.get]);
        }
  
        let data = await service.get(req.params.id, { ...req });
  
        if (hooks && service.hooks.after) {
          data = await executeAfterHooks({ data, ...req, ...res }, [...service.hooks.after.all, ...service.hooks.after.get]);
        }
        handlers.success(req, res, data);
      } catch(e) {
        handlers.error(req, res, e);
      }
    });
  
    app.post(route, async (req, res) => {
      try {
        if (hooks && service.hooks.before) {
          req = await executeBeforeHooks(req, [...service.hooks.before.all, ...service.hooks.before.create]);
        }
  
        let data = await service.create(req.body, { ...req });
  
        if (hooks && service.hooks.after) {
          data = await executeAfterHooks({ data, ...req, ...res }, [...service.hooks.after.all, ...service.hooks.after.create]);
        }
        handlers.success(req, res, data);
      } catch(e) {
        handlers.error(req, res, e);
      }
    });

    app.patch(routeWithId, async (req, res) => {
      try {
        if (hooks && service.hooks.before) {
          req = await executeBeforeHooks(req, [...service.hooks.before.all, ...service.hooks.before.patch]);
        }

        let data = await service.patch(req.params.id, req.body, { ...req });

        if (hooks && hooks.after) {
          data = await executeAfterHooks({ data, ...req, ...res }, [...hooks.after.all, ...hooks.after.patch]);
        }
        
        handlers.success(req, res, data);
      } catch(e) {
        handlers.error(req, res, e);
      }
    });

    app.delete(routeWithId, async (req, res) => {
      try {

      } catch(e) {
        handlers.error(req, res, e);
      }
    });
  }
};
