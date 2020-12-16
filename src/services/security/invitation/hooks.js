import authenticate from '../../../hooks/authenticate.js';
import familyIdCheck from '../../../hooks/familyIdCheck.js';
import { getFamilyName } from './hooks/index.js';

export default {
  before: {
    all: [],
    create: [authenticate, familyIdCheck],
    find: [],
    get: [],
    patch: [],
    delete: [],
  },
  after: {
    all: [],
    create: [],
    find: [getFamilyName],
    get: [],
    patch: [],
    delete: [],
  },
};
