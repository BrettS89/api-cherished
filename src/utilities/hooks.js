export const executeBeforeHooks = async (obj, hooks) => {
  for (let fn of hooks) {
    obj = await fn(obj);
  }
  return obj;
};

export const executeAfterHooks = async (obj, hooks) => {
  for (let fn of hooks) {
    obj.data = await fn(obj);
  }
  return obj.data;
};
