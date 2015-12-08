Template.accountUpdate.helpers({
  // username: function(){
  //   return Meteor.user().username;
  // },
  firstname: function(){
    return Meteor.user().profile.first_name;
  },
  lastname: function(){
    return Meteor.user().profile.last_name;
  },

  email: function(){
    return Meteor.user().emails[0].address;
  },
  zipcode: function(){
    return Meteor.user().profile.zipcode;
  }
});


Template.accountUpdate.events({
  "submit .form-update": function(event){
    event.preventDefault();
    // confirm("Are you sure you want to update your profile?");
    var first_name = trimInput(event.target.firstName.value);
    var last_name = trimInput(event.target.lastName.value);
    // var email = trimInput(event.target.inputEmail.value);
    // var username = trimInput(event.target.username.value);
    var zipcode = trimInput(event.target.zipcode.value);
    // var password = trimInput(event.target.inputPassword.value);
    // var password2 = trimInput(event.target.inputPassword2.value);

    if(isNotEmpty(first_name) &&
      isNotEmpty(last_name) &&
      // isNotEmpty(email) &&
      // isNotEmpty(username) &&
      // isValidUsername(username) &&
      isNotEmpty(zipcode) &&
      isValidZipcode(zipcode)
      // isEmail(email)
      // &&
      // areValidPasswords(password, password2)
      ){
        Meteor.users.update({_id:Meteor.user()._id},
        {$set:{
          // emails[0].address: email,
          // password: password,
          profile: {
            first_name: first_name,
            last_name: last_name,
            zipcode: zipcode
          }
        }
      }, function(err){
        if(err){
          FlashMessages.sendError('err')
        } else {
          FlashMessages.sendSuccess('Account Created! You are now logged in');
          Router.go('/dashboard');
        }
      });
    }

  }
});


//Validation Rules

// Trim Helper
var trimInput = function(val){
  return val.replace(/^\s*|\s*$/g, "");
}

// Check for Empty Fields
isNotEmpty = function(value) {
  if(value && value !== '') {
    return true;
  }
  FlashMessages.sendError("Pleass fill in all fields");
  return false;
};

//Validate Email
isEmail=function(value) {
  var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (filter.test(value)) {
    return true;
  }
  FlashMessages.sendError("Please use a valid email address");
  return false;
};

// Check Password Field
isValidPassword = function(password) {
  if (password.length <6) {
    FlashMessages.sendError("Password must be at least 6 characters");
    return false;
  }
  return true;
};

// Check Username Field
isValidUsername = function(username) {
  if (username.length <3) {
    FlashMessages.sendError("Username must be at least 3 characters");
    return false;
  }
  return true;
};

// Check valid zipcode
isValidZipcode = function(zipcode) {
  var filter = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  if (filter.test(zipcode)) {
  return true;
}
  FlashMessages.sendError("Please use a valid zipcode");
  return false;
};

// Match Password
areValidPasswords = function(password, confirm) {
  if(!isValidPassword(password)) {
    return false;
  }
  if (password !== confirm) {
    FlashMessages.sendError("Passwords do not match");
    return false;
  }
  return true;
};




































