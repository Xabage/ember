import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Crear una nueva Biblioteca');
    controller.set('buttonLabel', 'Crear');
  },

  renderTemplate() {
    this.render('libraries/form');
  },
  
  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },
    /*we create a new record and that will be the model. 
    It automatically appears in the controller and in the template. 
    In the saveLibrary action we accept a parameter and we save that model, 
    and then we send the application back to the Libraries home page with transitionTo.*/

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
  /*There is a built-in Ember.js action (event) called willTransition that is called when you leave a page (route). 
  In our case, we use this action to reset the model if we haven’t saved it in the database yet.*/
});