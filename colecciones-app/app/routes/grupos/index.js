import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('grupo');
  },

  actions: {

    deleteGrupo(grupo) {
      let confirmation = confirm('Estás seguro?');

      if (confirmation) {
        grupo.destroyRecord();
      }
    }
  }

});