 Meteor.publish('userDevices', function() {
  if (this.userId) {
    return Devices.find({userId: this.userId});
  } else {
    this.ready();
  }
})

