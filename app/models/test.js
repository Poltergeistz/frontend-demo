import Model, { attr } from '@ember-data/model';

export default class TestModel extends Model {
  @attr('string') givenName;
  @attr('string') familyName;
}
