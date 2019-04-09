import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('library');
  },
  actions: {

    deleteLibrary(library) {
      let confirmation = confirm('Está seguro?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }
});