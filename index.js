// import 'module-alias/register';
import {} from 'dotenv/config.js';
import app from './src/index.js';

app.listen(process.env.PORT, () => {
  console.log('server listening');
});
