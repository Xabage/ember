import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    buttonLabel: 'Nuevo Disco',
    selectedGrupo:'',
    selectedFormato:'',
    router: service(),

  actions: {
    grupoSelectionChanged(grupo) {
      this.set('selectedGrupo', grupo);
      this.set('item.grupo',grupo.get('nombre') );

      
  },

  formatoSelectionChanged(formato){
      this.set('selectedFormato', formato);
      this.set('item.formato',formato.get('formato'));

  },
  
  saveDisco(newDisco) {
    newDisco.set('grupo', this.get('selectedGrupo')),
    newDisco.set('formato',this.get('selectedFormato')),
    newDisco.save().then(() => 
    this.get('router').transitionTo('discos'))
},

    buttonClicked(param) {
      this.sendAction('action', param);
    }

  }
});
