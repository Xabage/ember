import Controller from '@ember/controller';

export default Controller.extend({

    selectedGrupo:'',

    actions:{
    grupoSelectionChanged(grupo) {
        this.set('selectedGrupo', grupo);
        this.set('model.grupo',grupo.get('nombre') )

        
    },

    formatoSelectionChanged(formato){
        this.set('selectedFormato', formato);
        this.set('model.formato',formato.get('formato'))

    },
    saveDisco(newDisco) {
        newDisco.set('grupo', this.get('selectedGrupo')),
        newDisco.set('formato',this.get('selectedFormato')),
        newDisco.save().then(() => 
        this.transitionToRoute('discos'))
    },

    /*willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }*/

}
});
