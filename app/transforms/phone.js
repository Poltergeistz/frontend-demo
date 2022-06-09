import Transform from '@ember-data/serializer/transform';

export default class PhoneTransform extends Transform {
  deserialize(serialized) {
    console.log(serialized.replace(/\s+|\/+|[a-z]+|[A-Z]+|\./g, ''));
    return serialized.replace(/\s+|\/+|[a-z]+|[A-Z]+|\./g, '');
  }

  serialize(deserialized) {
    return deserialized;
  }
}
