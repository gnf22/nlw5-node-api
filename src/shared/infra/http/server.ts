import express from 'express';

import '../typeorm';

const app = express();

app.get('/', (request, response) => {
  return response.json({ hello: 'world' });
});

app.listen(3333, () => {
  console.log('Server started at port 3333');
});
