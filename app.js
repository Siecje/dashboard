var app = app || {};

(function() {
  'use strict';

  app = {

    Models: {},
    Collections: {},
    Views: {},

    // Use this to manage memory manually when changing views
    currentView: null,

    start: function() {
      // Handle routes
      app.router = new app.Router();

      // Dashboard
      app.router.on('route:dashboard', function() {
        console.log('Route: dashboard');
        if (app.currentView) app.currentView.remove();
        app.currentView = new app.DashboardView();
      });

      // Account
      app.router.on('route:account', function() {
        console.log('Route: account');
        if (app.currentView) app.currentView.remove();
        app.currentView = new app.AccountView();
      });

      // Start the router
      Backbone.history.start();
    }
  };
})();