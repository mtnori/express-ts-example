import * as _ from 'lodash';
import { Model } from 'objection';

export default class BaseModel extends Model {
  timestamps: boolean;

  createdAt?: string;

  updatedAt?: string;

  $beforeInsert() {
    if (this.timestamps) {
      // <-- Should actually be `this.constructor.timestamps`
      const timestamp = new Date().toISOString();
      this.createdAt = timestamp;
      this.updatedAt = timestamp;
    }
  }

  $beforeUpdate() {
    if (this.timestamps) {
      // <-- Should actually be `this.constructor.timestamps`
      this.updatedAt = new Date().toISOString();
    }
  }

  $formatJson(json: any) {
    const db = super.$formatDatabaseJson(json);
    _.each(
      (<typeof BaseModel>this.constructor).jsonSchema.properties,
      (schema: any, prop: any) => {
        if (schema.format === 'date-time') {
          db[prop] = db[prop] && (db[prop] as Date).toISOString();
        }
      }
    );
    return db;
  }

  $parseJson(db: any) {
    const json = super.$parseDatabaseJson(db);
    _.each(
      (<typeof BaseModel>this.constructor).jsonSchema.properties,
      (schema: any, prop: any) => {
        if (schema.format === 'date-time') {
          json[prop] = json[prop] && new Date(json[prop]);
        }
      }
    );
    return json;
  }

  $formatDatabaseJson(json: any) {
    const db = super.$formatDatabaseJson(json);
    _.each(
      (<typeof BaseModel>this.constructor).jsonSchema.properties,
      (schema: any, prop: any) => {
        if (schema.format === 'date-time') {
          db[prop] = db[prop] && (db[prop] as Date).toISOString();
        }
      }
    );
    return db;
  }

  $parseDatabaseJson(db: any) {
    const json = super.$parseDatabaseJson(db);
    _.each(
      (<typeof BaseModel>this.constructor).jsonSchema.properties,
      (schema: any, prop: any) => {
        if (schema.format === 'date-time') {
          json[prop] = json[prop] && new Date(json[prop]);
        }
      }
    );
    return json;
  }
}
