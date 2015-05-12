
Template.dashboardEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentDeviceId = this._id;
    var deviceProperties = {
      deviceName: $(e.target).find('[name=deviceName]').val(),
      deviceDescription: $(e.target).find('[name=deviceDescription]').val(),
      deviceId: $(e.target).find('[name=deviceId]').val(),
      accessToken: $(e.target).find('[name=accessToken]').val()
    }

    Devices.update(currentDeviceId, {$set: deviceProperties}, function() {
      Router.go('dashboard');
    });
  }
});
