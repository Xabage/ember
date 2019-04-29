import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('disco', params.disco_id);
  },

  actions: {

    saveDisco(disco) {
      disco.save().then(() => this.transitionTo('discos'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Los cambios todavía no se han guardado. Desea abandonar este formulario?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});