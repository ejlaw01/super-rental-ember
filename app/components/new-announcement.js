import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
    actions: {
      announcementFormShow() {
        this.set('addNewAnnouncement', true);
      },

      saveAnnouncement() {
        var params = {
          message: this.get('message')
        };
        this.set('addNewAnnouncement',false);
        this.sendAction('addNewAnnouncement2', params);
        this.set('message','');
      }
    }
});
