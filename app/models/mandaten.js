import Model, { attr } from '@ember-data/model';

export default class MandatenModel extends Model {
  @attr('string') uri;
}
