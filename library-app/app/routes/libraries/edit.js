import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Editar biblioteca');
    controller.set('buttonLabel', 'Guardar cambios');
  },

  renderTemplate() {
    this.render('libraries/form');
  },
  actions: {

    saveLibrary(library) {
      library.save().then(() => 
      this.transitionTo('libraries')
      );
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