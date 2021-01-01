export const validate = schema => {
  return (context) => {
    const { app } = context;
    const foundSchema = app.schema(`/system/schema/${schema}`);

    if (!foundSchema) throw new Error('No schema was found');

    const validate = app.ajv.compile(foundSchema);

    const valid = validate(context.body);

    if (valid) return context;

    throw new Error('Validation failed');
  };
};
