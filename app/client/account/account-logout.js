Template.accountLogout.events({
  "click #account-logout": function(event){
    Meteor.logout(function(err){
      if(err){
        FlashMessages.sendError(err.reason);
      } else {
        FlashMessages.sendSuccess('You are now logged out');
        Router.go('/');
      }
    });
  }
});
