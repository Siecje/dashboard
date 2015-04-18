var app = app || {};

(function() {
  'use strict';

  app.AccountView = Backbone.View.extend({

    template: _._.template($('#tpl-account').html()),

    render: function() {
      var html = this.template();
      this.$el.html(html);
    }
  });
})();