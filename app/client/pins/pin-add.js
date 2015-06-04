Template.pinAdd.events({
  'submit form': function(e) {
    e.preventDefault();
    var deviceId = Session.get('deviceID');
    Router.go('dashboard.device', {'_id': 'deviceId'});
  }
});


