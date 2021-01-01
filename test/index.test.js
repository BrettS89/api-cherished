import superagent from 'supertest';
import app from '../src';
import { getToken } from './utils';
const request = superagent(app);

describe('test utils', () => {
  describe('getToken', () => {
    it('returns a token', async (done) => {
      const token = await getToken(request);
      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      done();
    });
  });
});
