import familyIdCheck from '../../../../hooks/familyIdCheck.js';
import api from '../../../../index.js';

export const sendEmailInvitation = context => {
  const { app } = context;

  const email = context.body.email;
  const subject = 'tbd';
  const message = 'subect';

  app.email(email, subject, message);

  return context;
};

export const getFamilyName = async ({ data }) => {
  const invitation = data.find(d => d.active);
  if (!invitation) return data;
  const family = await api.service('security/account')
    .get(invitation.account_id);
  
  data.family_name = family.name;
  const newData = data.map(d => ({ ...d.toObject(), family_name: family.name }));

  return newData;
};

// export const updateUser = async data => {
//   let updated = await api.service('security/user')
//     .find({ email: data.email });

//   updated = updated[0];

//   const toPatch = { account_id: data.account_id };

//   await api.service('security/user').patch(updated._id, toPatch);

//   return data;
// };
