import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  model(params) {
    return this.store.findRecord('disco', params.disco_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Editar artículo');
    controller.set('buttonLabel', 'Guardar Cambios');
  },

  renderTemplate() {
    this.render('discos/form');
  },
  actions: {

    saveDisco(disco) {
      disco.set('grupo', this.get('selectedGrupo')),
      disco.set('formato',this.get('selectedFormato')),
      disco.save().then(() => this.get('router').transitionTo('discos'));
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