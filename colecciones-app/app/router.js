import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');

  this.route('discos', function() {
    this.route('new');
  });

  this.route('grupos', function() {
    this.route('new');
    this.route('edit', { path: '/:grupo_id/edit' });
  });

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
    this.route('format');
  });
});

export default Router;
