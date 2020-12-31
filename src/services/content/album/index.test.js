import supertest from 'supertest';
import app from '../../../index';
import { getToken } from '../../../../test/utils';
const request = supertest(app);

describe('content/album service', () => {
  test('create', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ name: 'test family' });

    const account = res.body.data;

    const res2 = await request
      .post('/content/album')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ account_id: account._id, name: 'test album' });

    const album = res2.body.data;

    expect(album.name).toBe('test album');
    expect(album.account_id).toBe(account._id);
    done();
  });

  test('find', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ name: 'test family' });

    const account = res.body.data;

    for (let i = 0; i < 3; i++) {
      await request
        .post('/content/album')
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
        .send({ account_id: account._id, name: 'test album' });
    }

    const res2 = await request
      .get('/content/album?limit=2')
      .set('Authorization', token);

    const albums = res2.body.data;

    expect(albums.length).toBe(2);
    done();
  });

  test('patch', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ name: 'test family' });

    const account = res.body.data;

    const res2 = await request
      .post('/content/album')
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ account_id: account._id, name: 'test album' });

    const album = res2.body.data;

    const res3 = await request
      .patch(`/content/album/${album._id}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', token)
      .send({ name: 'updated test album' });

    const updated = res3.body.data;

    expect(updated.name).toBe('updated test album')
    expect(updated.account_id).toBe(album.account_id);
    expect(updated._id).toBe(album._id);
    done();
  });
});
