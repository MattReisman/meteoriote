Template.pinAdd.events({
  'submit form': function(e) {
    e.preventDefault();
    var deviceId = Devices.findOne();
    var thisId = this._id;
    Router.go('dashboard.device');
  }
});


