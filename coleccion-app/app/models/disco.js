import DS from 'ember-data';


export default DS.Model.extend({     

    titulo: DS.attr('string'),
    grupo: DS.attr('string'),
    portada: DS.attr('string', { defaultValue: 'https://emberjs.com/images/tomster-sm-45d6007ea34621fb603f29bd6a77798a.png'}),
    publicacion: DS.attr('string'),
    formato: DS.attr('string'),

    //isValid: match('portada', /(http:|https:){1,1}.*\.(jpe?g|png|gif)$'/)

});
