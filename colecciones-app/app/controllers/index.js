import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

    headerMessage: 'Bienvenido',
    responseMessage: '',
    emailAddress: '',

    isValid: match('emailAddress', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    isDisabled: not('isValid'),

    actions: {

        saveInvitation() {
            const email = this.get('emailAddress');
    
          //alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
    
          const newInvitation = this.store.createRecord('invitation', { email: email });
          newInvitation.save().then(response => {
            this.set('responseMessage', `Gracias! Hemos guardado su dirección de e-mail con el siguiente id: ${response.get('id')}`);
            this.set('emailAddress', '');
          });
    
        }
      }
});