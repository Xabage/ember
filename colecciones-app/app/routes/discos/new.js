import Route from '@ember/routing/route';

export default Route.extend({

 model() {
    return this.store.createRecord('disco',{
        grupos: this.store.findAll('grupo'),
        formatos: this.store.findAll('formato')
    });
  },

  actions: {

    saveDisco(newDisco) {
        newDisco.save().then(() => 
        this.transitionTo('discos'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});