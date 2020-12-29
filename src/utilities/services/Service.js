import throwError from '../../utilities/throwError.js';

class Service {
  constructor(config) {
    this.route = config.route;
    this.model = config.model;
    this.hooks = config.hooks;

    this.create = this.create.bind(this);
    this.find = this.find.bind(this);
    this.get = this.get.bind(this);
    this.patch = this.patch.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(data, params) {
    const Resource = this.model;
    const resource = new Resource(data);
    const saved = await resource.save();
    return saved;
  }

  async find(params) {
    const { query } = params;
    const skip = Number(query.skip) ?? 0;
    const limit = Number(query.limit) ?? 20;
    const sortBy = query.sortBy ?? '_id';
    const sort = Number(query.sort) === -1 ? -1 : 1;

    ['skip', 'limit', 'sortBy', 'sort'].forEach(val => delete query[val]);

    const Resource = this.model;
    const resources = await Resource.find(query)
      .sort({ [sortBy]: sort })
      .skip(skip)
      .limit(limit);

    return resources;
  }

  async get(id, params) {
    const Resource = this.model;
    const resource = await Resource.findById(id);
    if (!resource) throwError(404, 'no resource found');
    return resource;
  }

  async patch(id, data, params) {
    const Resource = this.model;
    const resource = await Resource.findById(id);
    
    if (!resource) throwError(404, 'no resource found');

    Object.entries(data).forEach(([key, value]) => {
      resource[key] = value;
    });

    const updated = await resource.save();
    return updated;
  }

  async update(req, res) {}

  async delete(id, params) {
    const Resource = this.model;
    const resource = await Resource.findById(id);

    if (!resource) throwError(404, 'no resource found');

    await resource.remove();

    return { message: 'resource deleted' };
  }
}

export default Service;
