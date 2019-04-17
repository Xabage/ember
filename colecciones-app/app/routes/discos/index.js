import Route from '@ember/routing/route';

export default Route.extend({

  model() {
      this.store.findAll('grupo');
      this.store.findAll('formato');
    return this.store.findAll('disco');
  },
  actions: {

    deleteDisco(disco) {
      let confirmation = confirm('Está seguro?');

      if (confirmation) {
        disco.destroyRecord();
      }
    }
  }
});