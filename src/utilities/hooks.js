export const executeHooks = async (obj, hooks) => {
  for (let fn of hooks) {
    obj = await fn(obj);
  }
  return obj;
};
