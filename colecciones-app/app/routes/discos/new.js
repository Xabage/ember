import Route from '@ember/routing/route';


export default Route.extend({

  model(){
    return this.store.createRecord('disco',{
      grupos: this.store.findAll('grupo').then(function(grupos){
        return grupos;
      }),
      formatos: this.store.findAll('formato').then(function(formatos){
        return formatos;
      }),
  });
  },

 /* model() {
    return hash({      
      grupos: this.store.findAll('grupo').then(function(grupos){
        return grupos;
      }),
      formatos: this.store.findAll('formato'),
      discos: this.store.createRecord('disco')
    });
  },*/

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Añadir un nuevo Artículo');
    controller.set('buttonLabel', 'Nuevo Disco');
  },

  renderTemplate() {
    this.render('discos/form');
  },

  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'
    this.controller.get('model').rollbackAttributes();
  }
  
});