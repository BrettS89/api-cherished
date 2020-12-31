import supertest from 'supertest';
import app from '../../../index';
import { getToken } from '../../../../test/utils';
import expectCt from 'helmet/dist/middlewares/expect-ct';
const request = supertest(app);

describe('content/photo service', () => {
  test('create', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('authorization', token)
      .send({ name: 'test family' });

    const account = res.body.data;

    const res2 = await request
      .post('/content/album')
      .set('Content-Type', 'application/json')
      .set('authorization', token)
      .send({ account_id: account._id, name: 'test album' });

    const album = res2.body.data;

    const res3 = await request
      .post('/content/photo')
      .set('Content-Type', 'application/json')
      .set('authorization', token)
      .send({
        account_id: account._id,
        album_id: album._id,
        thumbnail: 'test1',
        url: 'test2',
      });

      const photo = res3.body.data;

      expect(photo.account_id).toBe(account._id);
      expect(photo.album_id).toBe(album._id);
      expect(photo.thumbnail).toBe('test1');
      expect(photo.url).toBe('test2');
      done();
  });

  test('find', async (done) => {
    const token = await getToken(request);

    const res = await request
      .post('/security/account')
      .set('Content-Type', 'application/json')
      .set('authorization', token)
      .send({ name: 'test family' });

    const account = res.body.data;

    const res2 = await request
      .post('/content/album')
      .set('Content-Type', 'application/json')
      .set('authorization', token)
      .send({ account_id: account._id, name: 'test album' });

    const album = res2.body.data;

    for (let i = 0; i < 3; i++) {
      await request
        .post('/content/photo')
        .set('Content-Type', 'application/json')
        .set('authorization', token)
        .send({
          account_id: account._id,
          album_id: album._id,
          thumbnail: 'test1',
          url: 'test2',
        });
    }

    const res3 = await request
      .get('/content/photo?limit=2')
      .set('authorization', token);

    const photos = res3.body.data;

    expect(photos.length).toBe(2);
    done();
  });
});
