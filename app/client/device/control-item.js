Template.controlItem.helpers({
  activeDevice: function() {
    var currentDeviceId = Session.get('selectedDevice');
    return Devices.findOne({_id: currentDeviceId});
  }
});
