import { Request, Response } from 'express';
import userRepository from '../repositories/UserRepository';
import User from '../models/User';

export async function index(_: Request, res: Response) {
  /*
    const user = User.fromJson({
      name: 'motoyoshi'
    });
    const result = await userRepository.insert(user);
    console.log(result);
    const userX = await userRepository.findById(5);
    console.log(userX);
     */

  const patchUser = User.fromJson(
    {
      name: 'norinori'
    },
    { patch: true }
  );
  const response = await userRepository.update(1, patchUser);
  console.log(response);
  res.send('Hello Express!');
}

export function post(req: Request, res: Response) {
  console.log(req.body);
  res.send('POST request to the homepage');
}
