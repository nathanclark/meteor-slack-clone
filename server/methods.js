Meteor.methods({
    newMessage: function (message) {
        message.timestamp = Date.now();
        message.user = Meteor.userId();
        Messages.insert(message);
    },
    messageCount: function (channel) {
        Messages.find({ "channel": channel }).count()
    }
})


if (Meteor.isServer) {
    Meteor.publish("messageCount", function (channel) {
        debugger
        return Messages.find({ channel: channel }).count();
    });

}
