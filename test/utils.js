import { v4 as uuidv4 } from 'uuid';

export const getToken = async (request) => {
  const email = `${uuidv4()}@example.com`;

  const res = await request
    .post('/security/user')
    .set('Content-Type', 'application/json')
    .send({ email, password: 'password' });

  const user = res.body.data;
  return user.token;
};
