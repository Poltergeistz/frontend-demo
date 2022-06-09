import JSONAPISerializer from '@ember-data/serializer/json-api';
// import { dasherize } from '@ember/string';

export default class PersonSerializer extends JSONAPISerializer {
  attrs = {
    isBestuurlijkeAliasVan: 'is-bestuurlijke-alias-van',
  };
}
