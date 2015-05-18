/**
 * Created by johnwayne on 3/13/15.
 */
var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.route('/users')
        .post(users.create)
        .get(users.list);
};