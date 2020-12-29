import app from '../../../index';
import supertest from 'supertest';
import { getToken } from '../../../../test/utils';
const request = supertest(app);

describe('security/account service', () => {
  test('create', async (done) => { 
    const data = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Baller family' });

    const res = data.body.data;
    expect(res).toBeTruthy();
    expect(res._id).toBeTruthy();
    expect(res.name).toBe('Baller family');
    done();
  });

  test('find', async () => {
    const token = await getToken(request);

    await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const created = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const account = created.body.data;

    return request
      .get('/security/account?sort=-1&limit=1')
      .set('authorization', token )
      .then(res => {
        const response = res.body.data
        expect(response.length).toBe(1);
        expect(response[0]._id).toBe(account._id);
      });
  });

  test('get', async () => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const data = res.body.data;

    const found = await request
      .get(`/security/account/${data._id}`)
      .set('authorization', token );

    const account = found.body.data;

    expect(account.name).toBe('Test family');
    expect(account._id).toBe(data._id);
  });

  test('patch', async () => {
    const token = await getToken(request);

    const created = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const data = created.body.data;

    const updated = await request
      .patch(`/security/account/${data._id}`)
      .set('Content-Type', 'application/json')
      .set('authorization', token )
      .send({ name: 'updated family' });

    const account = updated.body.data;

    expect(account.name).toBe('updated family');
    expect(account._id).toBe(data._id);
  });

  test('delete', async () => {
    const token = await getToken(request);

    const created = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const account = created.body.data;

    await request
      .delete(`/security/account/${account._id}`)
      .set('authorization', token );

    const data = await request
      .get(`/security/account/${account._id}`)
      .set('authorization', token );
    
    expect(data.status).toBe(404);
  });
});
