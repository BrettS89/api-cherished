export const getToken = async (request) => {
  const res = await request['post']('/security/session')
    .set('Accept', 'application/json')
    .send({ email: 'blsodie@gmail.com', password: 'password' });

  return res.body.data.token;
};
