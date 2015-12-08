
Router.configure({
  trackPageView: true,
  layoutTemplate: 'layout',
  notFoundTemplate: 'appNotFound',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name:'home'
});

Router.route('/about', function() {
  this.render('contentAbout');
}, {
  name: 'about'
});

// Router.route('/dashboard', function() {
//   this.render('dashboardIndex');
// }, {
//   name: 'dashboard'
// });

// Router.route('/device/:_id', function() {
//   var item = Devices.findOne({_id: this.params._id});
//   this.render('deviceController', {data: item});
// }, {
//   name: 'dashboard.device'
// });



// Router.route('/device/:_id/edit', function() {
//   var item = Devices.findOne({_id: this.params._id});
//   this.render('deviceEdit', {data: item});
// }, {
//   name: 'dashboard.edit'
// });

// Router.route('/device/:_id/pinadd', function() {
//   var item = Devices.findOne({_id: this.params._id});
//   this.render('pinAdd', {data: item});
// }, {
//   name: 'pinAdd'
// });
