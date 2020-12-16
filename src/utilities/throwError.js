const throwError = (status, message) => {
  throw { status, error: new Error(message) };
};

export default throwError;
