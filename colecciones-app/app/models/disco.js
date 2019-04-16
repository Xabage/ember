import DS from 'ember-data';
import { match } from '@ember/object/computed';

export default DS.Model.extend({

    titulo: DS.attr('string'),
    grupo: DS.belongsTo('grupo', { inverse: 'discos', async: true }),
    portada: DS.attr('string', { defaultValue: 'https://emberjs.com/images/tomster-sm-45d6007ea34621fb603f29bd6a77798a.png'}),
    publicacion: DS.attr('string'),
    formato: DS.belongsTo('formato', { inverse: 'discos', async: true }),

    isValid: match('portada', /(http:|https:){1,1}.*\.(jpe?g|png|gif)/)

});
