import throwError from '../utilities/throwError.js';

const disallow = () => {
  throwError(405, 'method not allowed');
};

export default disallow;
