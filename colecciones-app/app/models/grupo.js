import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({

    nombre: DS.attr('string'),
    discos: DS.hasMany('disco', { inverse: 'grupo', async: true }),

    isValid: notEmpty('nombre'),

});
