import { Router } from 'express';
import * as usersController from '../controllers/UsersController';

export default (router: Router) => {
  router
    .route('/users')
    .get(usersController.index)
    .post(usersController.post);
};
