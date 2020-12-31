import supertest from 'supertest';
import app from '../../../index';
import { getToken } from '../../../../test/utils';
const request = supertest(app);

describe('security/invitation service', () => {
  test('create', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ name: 'Test family' });

    const account = res.body.data;

    const res2 = await request
      .post('/security/invitation')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ account_id: account._id, email: 'test@example.com' });

    const invitation = res2.body.data;

    expect(invitation.account_id).toBe(account._id);
    expect(invitation.email).toBe('test@example.com');
    expect(invitation.force).toBe(false);
    expect(invitation.active).toBe(true);
    done();
  });

  test('find', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ name: 'Test family' })

    const account = res.body.data;

    for (let i = 0; i < 3; i++) {
      await request
        .post('/security/invitation')
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
        .send({ account_id: account._id, email: 'test@example.com' });
    }

    const res2 = await request
      .get('/security/invitation?limit=2')
      .set('Authorization', token);

    const invitations = res2.body.data;

    expect(invitations.length).toBe(2);
    done();
  });

  test('patch', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ name: 'Test family' })

    const account = res.body.data;

    const res2 = await request
      .post('/security/invitation')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ account_id: account._id, email: 'test@example.com' });

    const invitation = res2.body.data;

    const res3 = await request
      .patch(`/security/invitation/${invitation._id}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ active: false });

    const updated = res3.body.data;

    expect(updated.active).toBe(false);
    expect(updated.active).not.toBe(invitation.active);
    expect(updated._id).toBe(invitation._id);
    expect(updated.email).toBe(invitation.email);
    done();
  });
});
