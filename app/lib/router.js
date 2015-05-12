Router.configure({
  //appLayout template defines the layout for the entire app
  layoutTemplate: 'appLayout',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  waitOn: function() {
    return [
      Meteor.subscribe('userDevices')
    ];
  }
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

Router.route('/dashboard', function() {
  this.render('dashboardIndex');
}, {
  name: 'dashboard'
});

Router.route('/dashboard/:_id', function() {
  var item = Devices.findOne({_id: this.params._id});
  this.render('dashboardItem', {data: item});
}, {
  name: 'dashboard.item'
});

Router.route('/device/:_id', function() {
 var item = Devices.findOne({_id: this.params._id});
  this.render('control.item', {data: item});
}, {
  name: 'control.item'
});

Router.route('/device/:_id/edit', function() {
  var item = Devices.findOne({_id: this.params._id});
  this.render('deviceEdit', {data: item});
}, {
  name: 'device.edit'
});

