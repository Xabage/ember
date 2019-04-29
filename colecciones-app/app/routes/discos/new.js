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

  /*setupController(controller, model) {
    const discos = model.discos;
    const grupos = model.grupos;
    const formatos = model.formatos;

    this._super(controller, discos);

    controller.set('grupos', grupos);
    controller.set('formatos', formatos);
  }*/

  
});