import { match, gte, and } from '@ember/object/computed';
import Controller from '@ember/controller';


export default Controller.extend({
    emailAddress: '',
    responseMessage: '',
    isValidEmail: match('emailAddress', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
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