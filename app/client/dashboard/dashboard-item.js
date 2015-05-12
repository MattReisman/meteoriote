Template.dashboardItem.helpers({
  devices: function() {
    return Devices.find();
  }
});
Template.dashboardItem.events({
  selectedDevice: function() {
    return Devices.find();
  }
});
