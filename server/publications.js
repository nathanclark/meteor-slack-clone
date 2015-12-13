Meteor.publish('allMessages', function () {
    return Messages.find();
});

Meteor.publish('channelMessages', function (channel) {
    return Messages.find({channel:channel});
});

Meteor.publish('channels', function () {
    return Channels.find();
});
