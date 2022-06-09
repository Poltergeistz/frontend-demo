import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MandatenRoute extends Route {
  @service store;
  model() {
    return this.store.findAll('mandaten');
  }
}

// import Ember from 'ember';
// import DataTableRouteMixin from 'ember-data-table/mixins/route';

// export default Ember.Route.extend(DataTableRouteMixin, {
//   modelName: 'mandaten',
// });
