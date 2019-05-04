import { Model } from 'objection';

export default class User extends Model {
  readonly id!: number;

  name?: string;

  static tableName = 'users';

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 }
    }
  };
}
