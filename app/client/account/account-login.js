Template.accountLogin.events({
  "submit .form-signin": function(event){
    var email = event.target.inputEmail.value;
    var password = event.target.inputPassword.value;

    Meteor.loginWithPassword(email, password, function(err){
      if (err) {
        event.target.inputEmail.value = email;
        event.target.inputPassword.value = password;
        FlashMessages.sendError(err.reason);
      } else {
        FlashMessages.sendSuccess('You are now logged in');
        Router.go('/dashboard');
      }
    });
    // Prevent submit
    return false;
  }
});
