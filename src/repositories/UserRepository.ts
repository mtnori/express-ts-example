import User from '../models/User';

async function findById(id: number) {
  const user = await User.query().findById(id);
  return user;
}

export default {
  findById
};
