var app = app || {};

(function() {
  'use strict';

  app.DashboardView = Backbone.View.extend({

    el: '#app',

    template: _.template($('#tpl-dashboard').html()),

    initialize: function() {
      this.render();
    },

    render: function() {
      var html = this.template();
      this.$el.html(html);
      return this;
    }
  });
})();