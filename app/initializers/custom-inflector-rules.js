import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.irregular('person', 'personen');

  inflector.uncountable('mandatarissen');

  inflector.uncountable('mandaten');

  inflector.irregular('contact-point', 'contact-punten');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
