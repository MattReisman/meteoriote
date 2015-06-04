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
    label: "Description",
    max: 200
  },
  deviceType: {
    type: String,
    label: "Device Type",
    optional: true
  },
  deviceId: {
    type: String,
    label: "Device ID",
  },
  userId: {
    type: String,
    label: "Title",
    optional: true
  },
  accessToken: {
    type: String,
    label: "Access Token"
  },
  pins: {
    type: Array,
    optional: true
    // blackbox: true
  },
  'pins.$': {
    type: Object,
    label: "Add Pin"
  },
  'pins.$.name': {
    type: String
  },
  'pins.$.position': {
type: String,
    type: String,
    allowedValues: ['D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6']
  },
  'pins.$.direction': {
    type: String,
    label: "Read or Write",
    allowedValues: ['read', 'write'],
    autoform: {
      options: [
      {label: "Read", value: "read"},
      {label: "Write", value: "write"}
      ]
    }
  }
});
  // 'pins.$.type': {
  //   type: String,
  //   allowedValues: ['digital', 'analog'],
  //   autoform: {
  //     options: [
  //     {label: "Digital", value: "digital"},
  //     {label: "Analog", value: "analog"}
  //     ]
  //   }
  // },
  // 'pins.$.position': {
  //   type: Number,
  //   min: 0,
  //   max: 8
  // },
  // pinCount: {
  //   type: Number,
  //   label: "Pin Count"
  // },
  // pinD0: {
  //   type: Schemas.digitalPin,
  //   optional: true
  // },
  // pinD1: {
  //   type: Schemas.digitalPin,
  //   optional: true
  // },

// Schemas.particleCore = new SimpleSchema({
//   pinD0:

// });



// Schemas.digitalPin = new SimpleSchema({
//      name: {
//       label: "Pin Name",
//       type: String
//      },
//      location: {
//         label: "Pin Location",
//         type: String
//       },
//       setting: {
//         label: "Read or Write",
//         type: Boolean
//       },
//       value: {
//         label: "On Off",
//         type: Boolean
//       }
//       // direction: {
//       //   label: "Read or Write",
//       //   type: Boolean,
//       // },
//       // value: {
//       //   label: "Pin Value",
//       //   type: Number,
//       // },
//       // active: {
//       //   type: Boolean,
//       //   label: "Active Pin"
//       // },
//       // analogWrite: {
//       //   label: "Analog Write"
//       //   type: String
//       // },
//       // analogWrite: {
//       //   label: "Analog Write"
//       //   type: String
//       // },
// });

Devices.attachSchema(Schemas.Device);

Devices.allow({
  insert: function(userId, doc){
    return doc && doc.userId === userId;
  },
  update: function(userId, doc){
    return doc && doc.userId === userId;
  },
});


Devices.allow({
 insert: function () {
    return true;
  },
   update: function () {
    return true;
  }
})
