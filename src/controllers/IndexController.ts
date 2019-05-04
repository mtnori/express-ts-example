import * as express from 'express';

const router = express.Router();

router.get('/', (_: express.Request, res: express.Response) => {
  res.send('Hello Express!');
});

router.post('/', (req: express.Request, res: express.Response) => {
  console.log(req.body);
  res.send('POST request to the homepage');
});
export default router;
