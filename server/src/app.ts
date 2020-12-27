import express from 'express';
import bodyParser from 'body-parser';

import helloRouter from './routers/hello';

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', helloRouter);

export default app;
