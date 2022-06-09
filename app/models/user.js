import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') givenName;
  @attr('string') familyName;
  @hasMany('mandatarissen') mandatarissen;

  get fullName() {
    return `${this.givenName} ${this.familyName}`;
  }
}
