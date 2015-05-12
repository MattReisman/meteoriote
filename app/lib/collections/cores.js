Cores = new Mongo.Collection('cores');

var Schemas = {};

Schemas.Core = new SimpleSchema({
    deviceId: {
        type: String,
        label: "Device ID",
        max: 200
    },
    accessToken: {
        type: String,
        label: "Access Token"
    }
});

Cores.attachSchema(Schemas.Core);
