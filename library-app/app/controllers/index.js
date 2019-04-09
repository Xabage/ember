import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  emailAddress: '',
  responseMessage: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
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