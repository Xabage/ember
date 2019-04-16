import DS from 'ember-data';

export default DS.Model.extend({

    nombre: DS.attr('string'),
    discos: DS.hasMany('disco', { inverse: 'grupo', async: true }),

});
