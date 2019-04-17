import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('grupo',{
      discos: this.store.findAll('disco')
    });
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