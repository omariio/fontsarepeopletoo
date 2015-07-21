if (Meteor.isClient) {
  Template.messages.helpers({
    messages: function () {
      return Messages.find({}, {sort: { time: -1}});
    }
  });
  // Template.input.events({})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
