import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    limit: { refreshModel: true },
    letter: { refreshModel: true }
  },

 model(params) {
  if (params.limit === 'all') {
      this.store.findAll('grupo');
      this.store.findAll('formato');
    return this.store.findAll('disco');
  }
  return this.store.query('disco', {
    orderBy: 'titulo',
    startAt: params.letter,
    endAt: params.letter+"\uf8ff"
  });

},
  actions: {

    deleteDisco(disco) {
      let confirmation = confirm(`Estás seguro? Borrar disco ${disco.get('id')} -  ${disco.get('titulo')}`);

      if (confirmation) {
        disco.destroyRecord();
      }
    }
  }
});