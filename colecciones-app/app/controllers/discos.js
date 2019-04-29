import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByGrupo(param) {
          if (param !== '') {
            return this.store.query('disco', { grupo: param });
          } else {
            return this.store.findAll('disco');
          }
        }
      }
});
