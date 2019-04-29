import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('grupo',{
      discos: this.store.findAll('disco')
    });
  },

  actions: {

      editGrupo(grupo) {
        grupo.set('isEditing', true);
      },
  
      cancelGrupoEdit(grupo) {
        grupo.set('isEditing', false);
        grupo.rollbackAttributes();
      },
  
      saveGrupo(grupo) {
        if (grupo.get('isNotValid')) {
          return;
        }
        
        grupo.set('isEditing', false);
        grupo.save();
      
  }

}

});