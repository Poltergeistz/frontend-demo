import JSONAPISerializer from '@ember-data/serializer/json-api';
export default class PersonSerializer extends JSONAPISerializer {
  attrs = {
    givenName: 'gebruikte-voornaam',
    familyName: 'achternaam',
  };
}
