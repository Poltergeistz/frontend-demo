import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SearchBarComponent extends Component {
  @service store;
  @tracked value = '';
  @tracked filteredPeople;
  @tracked page;

  @action
  searchByName() {
    this.filteredPeople = this.store.query('person', {
      filter: this.value,
    });
  }
}
