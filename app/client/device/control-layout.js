Template.controlLayout.helpers({
  'device': function() {
    return Devices.find();
  },
  'activeDevice': function() {
    var deviceId = this._id;
    var selectedDevice = Session.get("selectedDevice");
    if(deviceId == selectedDevice){
      return "selected"
    }
  }
});

Template.controlLayout.events({
  'click .device-items': function() {

    var deviceId = this._id;

    Session.set('selectedDevice', deviceId);

  }
});
