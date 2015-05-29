Template.deviceActive.onRendered( function() {
   var unitId = this.deviceId;
   var unitToken = this.accessToken;
    Session.setDefault('deviceID', unitId);
    Session.setDefault('accessToken', unitToken);
  });

  Template.deviceActive.helpers({
    // tester: function() {
    //   var document = "test";
    //   return document;
    // },
    // device: function() {
    //   return Session.get('deviceID');
    // },
    // token: function() {
    //   return Session.get('accessToken');
    // }
    unitId: function() {
      var unitId = this.deviceId;
      Session.setDefault('deviceID', unitId);
      return unitId;
    },
    unitToken: function() {
     var unitToken = this.accessToken;
     Session.setDefault('accessToken', unitToken);
     return unitToken;
    }
  });
