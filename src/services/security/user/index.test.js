import app from '../../../index';
import supertest from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import { getToken } from '../../../../test/utils';
const request = supertest(app);

describe('security/user service', () => {
  test('create', async (done) => {
    const email = `${uuidv4()}@example.com`;

    const res = await request
      .post('/security/user')
      .set('Content-Type', 'application/json')
      .send({ email, password: 'password' });

    const user = res.body.data;

    expect(user.email).toBe(email);
    expect(typeof user.token).toBe('string');
    done();
  });

  test('patch', async (done) => {
    const token = await getToken(request);

    const email = `${uuidv4()}@example.com`;
    const email2 = `${uuidv4()}@example.com`;

    const res = await request
      .post('/security/user')
      .set('Content-Type', 'application/json')
      .send({ email, password: 'password' });

    const user = res.body.data;

    const updated = await request
      .patch(`/security/user/${user._id}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ email: email2 });

    const updatedUser = updated.body.data;

    expect(updatedUser.email).toBe(email2);
    done();
  });
});
