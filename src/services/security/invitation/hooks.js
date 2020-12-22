import authenticate from '../../../hooks/authenticate.js';
import disallow from '../../../hooks/disallow.js';
import familyIdCheck from '../../../hooks/familyIdCheck.js';
import { getFamilyName } from './hooks/index.js';

export default {
  before: {
    all: [],
    create: [authenticate, familyIdCheck],
    find: [authenticate],
    get: [disallow],
    patch: [authenticate],
    delete: [disallow],
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
