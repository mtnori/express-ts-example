import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import IndexController from './controllers/IndexController';

const app = express();

app.use(cors());

// urlencodedとjsonは別々に初期化する
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const port = 3000;

app.use('/', IndexController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
