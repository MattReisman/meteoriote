  Template.interfaceControls.onRendered( function() {
  Session.setDefault('lightState', 0);

  });

  Template.interfaceControls.helpers({
    // device: function() {
    //   return Session.get('deviceID');
    // },
    // token: function() {
    //   return Session.get('accessToken');
    // },

    device: function() {
      var unitId = this.deviceId;
      Session.setDefault('deviceID', unitId);
      return unitId;
    },
    token: function() {
     var unitToken = this.accessToken;
     Session.setDefault('accessToken', unitToken);
     return unitToken;
    },
    lightState: function () {
      var device = Session.get('deviceID');
      var token = Session.get('accessToken');
      Meteor.http.get(
        "https://api.particle.io/v1/devices/" +
        device +
        "/lights?access_token=" +
       token,
        function (err, data ){
          console.log(data.data.result );
          Session.set('lightState', data.data.result);
        });
      if(Session.get('lightState')==1) {
        document.getElementById("lightButton").value="Turn OFF";
      } else {
        document.getElementById("lightButton").value="Turn ON";
      }
      return Session.get('lightState');
    }
  });

  Template.interfaceControls.events({
    'click button': function () {
      var device = Session.get('deviceID');
      var token = Session.get('accessToken');
      Meteor.http.post(
        "https://api.particle.io/v1/devices/" + device +
        "/toggleLight?access_token=" + token,
        function (err, data ){
        console.log("HTTP POST response received");
        console.log(data);
        Session.set('lightState', data.data.result);
      });
    }
  });
