import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return hash({
      formatos: this.store.findAll('formato'),
      discos: this.store.findAll('disco'),
      grupos: this.store.findAll('grupo')
    })
  },

  setupController(controller, model) {
    controller.set('formatos', model.formatos);
    controller.set('discos', model.discos);
    controller.set('grupos', model.grupos);
    
    this._super(controller, model);
  }
});