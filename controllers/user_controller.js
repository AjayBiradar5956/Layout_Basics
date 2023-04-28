module.exports.user = function (req, res) {
    return res.render('user', {
        title: 'user-profile'
    });
}