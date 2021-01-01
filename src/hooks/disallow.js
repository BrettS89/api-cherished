import throwError from '../utilities/throwError.js';

export const disallow = () => {
  throwError(405, 'method not allowed');
};
