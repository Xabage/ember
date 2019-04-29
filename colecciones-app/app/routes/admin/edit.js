import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('invitation', params.invitation_id);
  },

  actions: {

    saveInvitation(invitation) {
        invitation.save().then(() => this.transitionTo('admin.invitations'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Los cambios todavía no se han guardado. Desea abandonar este formulario?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});