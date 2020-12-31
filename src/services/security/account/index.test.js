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
      .set('Authorization', token )
      .then(res => {
        const response = res.body.data
        expect(response.length).toBe(1);
      });
  });

  test('get', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const data = res.body.data;

    const found = await request
      .get(`/security/account/${data._id}`)
      .set('Authorization', token );

    const account = found.body.data;

    expect(account.name).toBe('Test family');
    expect(account._id).toBe(data._id);
    done();
  });

  test('patch', async (done) => {
    const token = await getToken(request);

    const created = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const data = created.body.data;

    const updated = await request
      .patch(`/security/account/${data._id}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', token )
      .send({ name: 'updated family' });

    const account = updated.body.data;

    expect(account.name).toBe('updated family');
    expect(account._id).toBe(data._id);
    done();
  });

  test('delete', async (done) => {
    const token = await getToken(request);

    const created = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .send({ name: 'Test family' });

    const account = created.body.data;

    await request
      .delete(`/security/account/${account._id}`)
      .set('Authorization', token );

    const data = await request
      .get(`/security/account/${account._id}`)
      .set('Authorization', token );
    
    expect(data.status).toBe(404);
    done();
  });
});
