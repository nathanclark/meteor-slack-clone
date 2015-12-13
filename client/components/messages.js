$(function(){
    $('.full-height-scroll').slimScroll({
        height: '100%'
    });
});

Template.messages.helpers({
    channelMessages: function(){
        return Messages.find({ channel:Session.get("channel")});
    }

});

Template.messages.onCreated(function() {
    var self = this;
    this.autorun(function() {
        self.subscribe('allMessages');
        self.subscribe('channelMessages', Session.get("channel"));

    });
});
