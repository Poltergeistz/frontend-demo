import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') givenName;
  @attr('string') familyName;

  get fullName() {
    return `${this.givenName} ${this.familyName}`;
  }
}
