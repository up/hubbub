(function () {
  'use strict';

  var $ = window.jQuery;
  var app = window.app;
  var _ = window._;

  app.WelcomeModalView = app.ModalView.extend({
    className: 'issue-modal',

    template: _.template($('#js-welcome-modal-template').html()),

    events: function(){
      return _.extend({},app.ModalView.prototype.events,{
        'click .exit': 'removeAndBack'
      });
    },

    render: function () {
      this.$el.html(this.template());
      $('body').prepend(this.$el);
      return this;
    },


    initialize: function() {
    }
  });
})();