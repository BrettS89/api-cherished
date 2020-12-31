import bcrypt from 'bcryptjs';
import Service from '../../../utilities/services/Service.js';
import throwError from '../../../utilities/throwError.js';

class SessionService extends Service {
  constructor(config) {
    super(config);
    this.app = config.app;
  }

  async create(data) {
    let user = await this.app.service('security/user')
      .find({ query: { email: data.email }});

    user = user[0];

    if (!user) {
      throwError(404, 'No user was found with this email');
    }
    
    const passwordMatch = bcrypt.compareSync(data.password, user.password);

    if (!passwordMatch) throwError(401, 'Incorrect login credentials');

    return user;
  }

  async find(params) {
    return params.user;
  }
}

export default SessionService;
