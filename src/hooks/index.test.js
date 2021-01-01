import supertest from 'supertest';
import app from '../index';
import { getToken } from '../../test/utils';
import { authenticate, setToken, validate } from './index';
const request = supertest(app);

describe('hooks', () => {
  describe('authenticate', () => {
    it('returns a user object', async() => {
      const token = await getToken(request);
      const req = { rawHeaders: ['authorization', token] };
      const result = await authenticate(req);
      expect(result.user).toBeTruthy();
      expect(typeof result.user).toBe('object');
    });
  });

  describe('setToken', () => {
    it('returns a token', () => {
      const data = {
        data: {
          _id: 'testId',
        }
      };

      const result = setToken(data);
      expect(result.token).toBeTruthy();
      expect(typeof result.token).toBe('string');
    });

    it('returns no token', () => {
      const data = {
        data: {
          email: 'test@example.com',
        }
      };

      const result = setToken(data);
      expect(result.token).toBeUndefined();
    });
  });

  describe('validate', () => {
    it('returns context', () => {
      const schema = {
        $id: '/system/schema/test.schema',
        title: 'Test.Schema',
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        },
        additionalProperties: false,
      };
  
      app.schema(schema);

      const context = { app, body: { name: 'brett' } };

      const fn = validate('test.schema');
      const result = fn(context);

      expect(result).toBe(context);
    });

    it('throws an error for wrong type', () => {
      const schema = {
        $id: '/system/schema/test.schema2',
        title: 'Test.Schema',
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        },
        additionalProperties: false,
      };
  
      app.schema(schema);

      const context = { app, body: { name: 20 } };

      const fn = validate('test.schema2');

      const testFn = () => {
        fn(context);
      };

      expect(testFn).toThrow('Validation failed');
    });

    it('throws an error for additional properties', () => {
      const schema = {
        $id: '/system/schema/test.schema3',
        title: 'Test.Schema',
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        },
        additionalProperties: false,
      };
  
      app.schema(schema);

      const context = { app, body: { name: 'brett', birthday: 'april' } };

      const fn = validate('test.schema3');

      const testFn = () => {
        fn(context);
      };

      expect(testFn).toThrow('Validation failed');
    });
  });
});
