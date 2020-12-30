// import 'module-alias/register';
import {} from 'dotenv/config.js';
import app from './index.js';

app.listen(process.env.PORT, () => {
  console.log('server listening');
});
