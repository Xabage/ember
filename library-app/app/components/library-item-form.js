import Component from '@ember/component';

export default Component.extend({
    buttonLabel: 'Guardar',

  actions: {

    buttonClicked(param) {
      this.sendAction('action', param);
    }

  }
});
