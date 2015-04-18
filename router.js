var app = app || {};

(function() {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      '': 'dashboard',
      'account': 'account'
    },

    dashboard: function() {
      new app.DashboardView();
    },

    account: function() {
      new app.AccountView();
    }
  });

  app.router = new Router();
})();