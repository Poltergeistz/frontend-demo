import Model, { attr } from '@ember-data/model';

export default class ContactPointModel extends Model {
  @attr('string', { defaultValue: 'No email found' }) email;
  @attr('phone', { defaultValue: 'No phone number found' }) telefoon;
}
