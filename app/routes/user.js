import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UserRoute extends Route {
  @service store;
  model({ user_id }) {
    // const data = this.store.findAll('person');
    // console.log('user id', user_id);
    return this.store.findRecord('person', user_id);
  }
}
