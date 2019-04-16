import Controller from '@ember/controller';


export default Controller.extend({
    formato: '',
    responseMessage: '',


    actions: {
        formatNew() {
            const tipo = this.get('formato');

            const newMenssage = this.store.createRecord('formato', {
                tipo: tipo,
                
            });

            newMenssage.save().then(response => {
                this.set('responseMessage', `Añadido nuevo formato: ${response.get('tipo')}`);
                this.set('formato', '');
            })

        }
    }
});