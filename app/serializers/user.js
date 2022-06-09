import JSONAPISerializer from '@ember-data/serializer/json-api';
export default class UserSerializer extends JSONAPISerializer {
  attrs = {
    givenName: 'gebruikte-voornaam',
    familyName: 'achternaam',
  };
}
