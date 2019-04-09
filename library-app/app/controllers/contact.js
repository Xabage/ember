import { match, gte, and } from '@ember/object/computed';
import Controller from '@ember/controller';


export default Controller.extend({
    emailAddress: '',
    responseMessage: '',
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isMessageEnoughLong: gte('message.length', 5),

    isValid: and('isValidEmail', 'isMessageEnoughLong'),


    actions: {
        sendMessage() {
            const email = this.get('emailAddress');
            const message = this.get('message');

            const newMenssage = this.store.createRecord('contact', {
                email: email,
                message: message
            });

            newMenssage.save().then(response => {
                this.set('responseMessage', `Gracias! Hemos guardado su mensaje: ${response.get('message')}`);
                this.set('emailAddress', '');
                this.set('message', '');

            })

        }
    }
});