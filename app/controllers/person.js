import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class PersonController extends Controller {
  @service store;
  constructor() {
    super(...arguments);

    this.people = this.store.findAll('person');
    // this.page = this.store.query('person', { page: { number: params.id}})
    // console.log(this.people);
  }
  queryParams = ['page'];
  @tracked page = 0;
  // how to make page 0 page 1
  givenName = 'John';
  familyName = 'Smith';
  get fullName() {
    return `${this.givenName} ${this.familyName} : `;
  }
  @action
  nextPage() {
    this.page >= 910 ? (this.page += 910) : (this.page = this.page + 1);
  }
  @action
  prevPage() {
    this.page <= 0 ? (this.page += 0) : (this.page = this.page - 1);
  }
  @action
  lastPage() {
    this.page = 910;
  }
  @action
  firstPage() {
    this.page = 0;
  }
}
