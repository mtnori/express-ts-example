import BaseModel from './BaseModel';

export default class User extends BaseModel {
  readonly id!: number;

  name?: string;

  static tableName = 'users';

  static get timestamps() {
    return true;
  }

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: ['string', 'null'], format: 'date-time' }
    }
  };
}
