import User from '../models/User';

async function findById(id: number) {
  const user = await User.query().findById(id);
  return user;
}

async function insert(user: User) {
  const result = await User.query().insert(user);
  return result;
}

async function update(id: number, user: User) {
  const result = await User.query()
    .update(user)
    .where('id', id);
  return result;
}

export default {
  findById,
  insert,
  update
};
