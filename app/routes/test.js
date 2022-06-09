import Route from '@ember/routing/route';
import { service } from '@ember/service';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class TestRoute extends Route.extend(DataTableRouteMixin) {
  @service store;
  model() {}
}
// export default Route.extend(DataTableRouteMixin, {
//   modelName: 'test',
// });
