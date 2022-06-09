// import JSONAPISerializer from '@ember-data/serializer/json-api';
// import DataTableSerializerMixin from 'ember-data-table/mixins/serializer';

// export default class ApplicationSerializer extends JSONAPISerializer.extend(
//   DataTableSerializerMixin
// ) {}

import DS from 'ember-data';
import DataTableSerializerMixin from 'ember-data-table/mixins/serializer';

export default DS.JSONAPISerializer.extend(DataTableSerializerMixin, {});