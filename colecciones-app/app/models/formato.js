import DS from 'ember-data';

export default DS.Model.extend({

    tipo: DS.attr('string'),
    discos: DS.hasMany('disco', { inverse: 'formato', async: true }),

});
