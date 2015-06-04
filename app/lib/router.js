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
// Router.route('/dashboard/:_id', function() {
//   this,layout('appLayout', {
//     data: function() {
//       return Devices.findOne({_id: this.params._id});
//     }
//   });

//   this.render('dashboardDevice', {});

// }, {
//   name: 'dashboard.device'
// });


// Router.route('/dashboard/:_id/edit', function() {
//   this,layout('appLayout', {
//     data: function() {
//       return Devices.findOne({_id: this.params._id});
//     }
//   });

//   this.render('dashboardEdit', {});

// }, {
//   name: 'dashboard.edit'
// });
