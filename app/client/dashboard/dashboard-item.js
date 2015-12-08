Template.dashboardItem.helpers({
  devices: function() {
    return Devices.find();
  },
  'activeDevice': function() {
    var deviceId = this._id;
    var selectedDevice = Session.get("selectedDevice");
    if(deviceId == selectedDevice){
      return "selectedDevice"
    }
  }
});

Template.dashboardItem.events({
  'click .device-items': function() {

    var deviceId = this._id;

    Session.set('selectedDevice', deviceId);

  }
});
