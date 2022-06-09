import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ContactPointRoute extends Route {
  @service store;
  model() {
    return this.store.findAll('contact-point');
  }
}
