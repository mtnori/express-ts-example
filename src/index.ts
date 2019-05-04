import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Model } from 'objection';

import UsersController from './controllers/UsersController';
import knexConfig from './knexConfig';

// Knexの設定
Model.knex(knexConfig);

const app = express();

// Cross Originの設定
app.use(cors());

// Promiseを扱えるようにする
const router = require('express-promise-router')();

// urlencodedとjsonは別々に初期化する
app
  .use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  .use(bodyParser.json());

const port = 3000;

// ルーティング設定
app.use('/users', UsersController(router));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
