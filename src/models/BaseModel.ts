import { each } from 'lodash';
import { Model, snakeCaseMappers } from 'objection';

export default class BaseModel extends Model {
  createdAt?: string;

  updatedAt?: string;

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  $beforeInsert() {
    const timestamp = new Date().toISOString();
    this.createdAt = timestamp;
    this.updatedAt = timestamp;
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  $formatDatabaseJson(json: any) {
    const db = json;
    each(
      (<typeof BaseModel>this.constructor).jsonSchema.properties,
      (schema: any, prop: string) => {
        if (schema.format === 'date-time') {
          db[prop] = db[prop] && new Date(db[prop]);
        }
      }
    );
    // 後でスネークケースに変換する必要がある
    return super.$formatDatabaseJson(db);
  }

  $parseDatabaseJson(db: any) {
    // 先にキャメルケースに変換する必要がある
    const json = super.$parseDatabaseJson(db);
    each(
      (<typeof BaseModel>this.constructor).jsonSchema.properties,
      (schema: any, prop: string) => {
        if (schema.format === 'date-time') {
          json[prop] = json[prop] && (json[prop] as Date).toISOString();
        }
      }
    );
    return json;
  }
}
