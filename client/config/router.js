Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound',
});

//
// Example pages routes
//

Router.route('/:channel', function () {
    Session.set('channel', this.params.channel);
    this.render('messages');
});

Router.route('/', function () {
    this.redirect('/general');
});
