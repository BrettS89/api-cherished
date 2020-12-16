import sgMail from '@sendgrid/mail';


const setupEmailUtility = app => {
  sgMail.setApiKey(app.var('sendgridApiKey'));

  app.email = (email, subject, message) => {

  };
};

export default setupEmailUtility;
