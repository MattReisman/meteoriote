Devices = new Mongo.Collection('devices');

var Schemas = {};

Schemas.Device = new SimpleSchema({
  deviceName: {
    type: String,
    label: "Name",
    max: 20
  },
  deviceDescription: {
    type: String,
    label: "Name",
    max: 200
  },
  deviceId: {
    type: String,
    label: "Device ID",
  },
  userId: {
    type: String,
    label: "Title"
  },
  accessToken: {
    type: String,
    label: "Access Token"
  }
});

Devices.attachSchema(Schemas.Device);

Devices.allow({
  insert: function(userId, doc){
    return doc && doc.userId === userId;
  },
  update: function(userId, doc){
    return doc && doc.userId === userId;
  },
});
