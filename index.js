// import 'module-alias/register';
import {} from 'dotenv/config.js';
import app from './src/index.js';

app.listen(4000, () => {
  console.log('server listening');
});
