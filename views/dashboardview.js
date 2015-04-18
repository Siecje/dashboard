var app = app || {};

(function() {
  'use strict';

  app.DashboardView = Backbone.View.extend({

    template: _._.template($('#tpl-dashboard').html()),

    render: function() {
      var html = this.template();
      this.$el.html(html);
    }
  });
})();