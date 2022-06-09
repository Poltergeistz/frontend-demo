import Model, { attr, belongsTo } from '@ember-data/model';

export default class MandatarissenModel extends Model {
  @attr('date') start;
  @attr('date') einde;
  @attr('string') uri;
  @belongsTo('person') isBestuurlijkeAliasVan;
}
