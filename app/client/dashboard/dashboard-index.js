Template.dashboardIndex.helpers({
  devices: function() {
    return Devices.find();
  },
  activeDevice: function() {
    var currentDeviceId = Session.get('selectedDevice');
    return Devices.findOne({_id: currentDeviceId});
  }
});

Template.dashboardItem.events({
  'click .device-items': function() {
    console.log("Clicked");
    Session.set('selectedDevice', 'session value test');
    Session.get('selectedDevice');
  }
});
