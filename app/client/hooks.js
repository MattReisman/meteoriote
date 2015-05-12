
var coreHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()){
        doc.userId = Meteor.userId();
      }

      return doc;
    }
  }
}

AutoForm.addHooks('insertCoreForm', coreHooks);
