import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('grupo');
  },

  actions: {

    saveGrupo(newGrupo) {
      newGrupo.save().then(() => this.transitionTo('grupos'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});