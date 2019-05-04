import * as express from 'express';
import userRepository from '../repositories/UserRepository';

export default (router: express.Router) => {
  router.get('/', async (_, res) => {
    const user = await userRepository.findById(1);
    console.log(user);
    res.send('Hello Express!');
  });

  router.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST request to the homepage');
  });

  return router;
};
