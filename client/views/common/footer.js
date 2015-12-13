Template.footer.rendered = function () {

    // FIXED FOOTER
    // Uncomment this if you want to have fixed footer or add 'fixed' class to footer element in html code
    // $('.footer').addClass('fixed');

};

Template.footer.helpers({
    settings: function() {
        return {
            position: "top",
            limit: 5,
            rules: [
                {
                    token: '@',
                    collection: Channels,
                    field: "name",
                    template: Template.userPill
                },
                {
                    token: '!',
                    collection: Channels,
                    field: "_id",
                    options: '',
                    matchAll: true,
                    filter: { type: "autocomplete" },
                    template: Template.dataPiece
                }
            ]
        };
    }
});