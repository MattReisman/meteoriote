Template.appHeader.events({
'click .navbar li a': function(e) {
  var navbar = $('.navbar-toggle');
  if (navbar && typeof(navbar) !== 'undefined') {
    navbar.click();
  }
}
});
