import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema/schema';
import helloRouter from './routers/hello';

const mongo_uri = process.env.MONGO_URI;
if (mongo_uri) {
  mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', helloRouter);

export default app;
