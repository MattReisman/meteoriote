Router.configure({
  //appLayout template defines the layout for the entire app
  layoutTemplate: 'appLayout',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

});

Router.route('/', function() {
  this.render('contentHome');
}, {
  name:'home'
});

Router.route('/about', function() {
  this.render('contentAbout');
}, {
  name: 'about'
});
