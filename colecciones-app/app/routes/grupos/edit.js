import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('grupo', params.grupo_id);
  },

  actions: {

    saveGrupo(grupo) {
      grupo.save().then(() => this.transitionTo('grupos'));
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