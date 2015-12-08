Router.configure({
  trackPageView: true,
  layoutTemplate: 'layout',
  notFoundTemplate: 'appNotFound',
  loadingTemplate: 'appLoading',
  waitOn: function() {
    return [
      Meteor.subscribe('userDevices')
    ];
  }
});

// site pages
Router.route('/', {
  name:'home'
});

Router.route('/about', function() {
  this.render('contentAbout');
}, {
  name: 'about'
});


Router.route('/login', {
  name:'accountLogin'
});

Router.route('/register', {
  name:'accountRegister'
});


Router.route('/account', {
  name: 'accountUpdate',
  // layoutTemplate: 'dashboardLayout'
});


// dashboard
Router.route('/dashboard', function() {
  this.render('dashboard');
}, {
  name: 'dashboard'
});

Router.route('/device/:_id', function() {
  var item = Devices.findOne({_id: this.params._id});
  this.render('deviceController', {data: item});
}, {
  name: 'dashboard.device'
});



Router.route('/device/:_id/edit', function() {
  var item = Devices.findOne({_id: this.params._id});
  this.render('deviceEdit', {data: item});
}, {
  name: 'dashboard.edit'
});

Router.route('/device/:_id/pinadd', function() {
  var item = Devices.findOne({_id: this.params._id});
  this.render('pinAdd', {data: item});
}, {
  name: 'pinAdd'
});


Router.route('/interface/:_id', function() {
  var item = Devices.findOne({_id: this.params._id});
  this.render('deviceController', {data: item});
}, {
  name: 'interface'
});
