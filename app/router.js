import EmberRouter from '@ember/routing/router';
import config from 'frontend-demo-two/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('index', { path: '/' });
  this.route('person', function () {
    this.route('page', { path: '/page/:page_id' });
  });
  // this.route('page');
  this.route('user', { path: '/person/:user_id' });
  this.route('mandatarissen');
  this.route('contact-point');
  this.route('mandaten');
  // this.route('test', { path: '/person/' });
});
