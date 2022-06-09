import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PersonComponent extends Component {
  text = 'hello John';
  @action
  sayHello() {
    console.log('Hello world');
  }
}
