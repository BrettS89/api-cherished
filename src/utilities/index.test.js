import app from '../index';
import { executeAfterHooks, executeBeforeHooks } from './hooks';
import { afterHook, beforeHook } from '../../test/mock';

const afterMock = [
  afterHook,
  afterHook,
];

const after = [
  obj => obj.data,
  obj => obj.data,
];

const beforeMock = [
  beforeHook,
  beforeHook,
];

const before = [
  obj => obj,
  obj => obj,
];

jest.mock('../../test/mock');

describe('utils', () => {
  describe('executeAfterHooks', () => {
    test('executes twice', async () => {
      const obj = { name: 'Brett' };
      await executeAfterHooks(obj, afterMock);
      expect(afterHook).toHaveBeenCalledTimes(2)
    });

    test('returns obj.data', async () => {
      const obj = { data: { name: 'Brett' } };
      const data = await executeAfterHooks(obj, after);
      expect(data).toBe(obj.data);
    });
  });

  describe('executeBeforeHooks', () => {
    test('executes twice', async () => {
      const obj = { name: 'Brett' };
      await executeBeforeHooks(obj, beforeMock);
      expect(beforeHook).toHaveBeenCalledTimes(2)
    });

    test('returns obj', async () => {
      const obj = { name: 'Brett' };
      const res = await executeBeforeHooks(obj, before);
      expect(obj).toBe(res);
    });
  });

  describe('schemaUtil', () => {
    test('sets and retrieves a schema', () => {
      const schema = {
        $id: 'test.schema',
        type: 'object',
        properties: {
          name: {
            type: 'string',
          }
        }
      };

      app.schema(schema);
      const foundSchema = app.schema('test.schema');
      expect(typeof foundSchema).toBe('object');
    });

    test('throws an error when schema has no id', () => {
      const schema = {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          }
        }
      };

      const fn = () => app.schema(schema);
      expect(fn).toThrow('Schema must include field $id');
    });
  });
});
