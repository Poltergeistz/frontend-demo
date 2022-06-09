import JSONAPISerializer from '@ember-data/serializer/json-api';
// import { dasherize } from '@ember/string';

export default class UserSerializer extends JSONAPISerializer {
  attrs = {
    givenName: 'gebruikte-voornaam',
    familyName: 'achternaam',
  };
}
