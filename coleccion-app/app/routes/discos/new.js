import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('disco');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Crear un nuevo Elemento');
    controller.set('buttonLabel', 'Crear');
  },

  renderTemplate() {
    this.render('discos/form');
  },

  actions: {

    saveDisco(newDisco) {
      newDisco.save().then(() => this.transitionTo('discos'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
