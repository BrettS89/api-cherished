import supertest from 'supertest';
import app from '../../../index';
import { getToken } from '../../../../test/utils';
const request = supertest(app);

describe('data/file service', () => {
  test('create', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/data/file')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ file_type: 'image/png' })

    const file = res.body.data;

    expect(typeof file.key).toBe('string');
    expect(typeof file.url).toBe('string');
    expect(Object.keys(file).length).toBe(2);
    done();
  });
});
