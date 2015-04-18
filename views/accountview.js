var app = app || {};

(function() {
  'use strict';

  app.AccountView = Backbone.View.extend({

    el: '#app',

    template: _.template($('#tpl-account').html()),

    initialize: function() {
      this.render();
    },

    render: function() {
      var html = this.template();
      this.$el.html(html);
      console.log('test');
      return this;
    }
  });
})();