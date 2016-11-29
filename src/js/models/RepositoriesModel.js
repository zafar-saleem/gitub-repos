define(function(require) {

    'use strict';

    var $ = require('jquery');

    var RepositoriesModel = function() {};

    RepositoriesModel.prototype = (function() {

        var user = {};

        var get = function(userid) {
            var deferred = new $.Deferred();

            if (userid == null) {
                return deferred.reject({
                    error: true,
                    message: 'Please provide user github id in above field and hit enter'
                });
            }

            return $.ajax({
                url: 'https://api.github.com/users/' + userid.userId,
                method: 'GET',
                type: 'JSON'
            }).then(function(userInfo) {
                setUserAttributes(userInfo);

                return $.ajax({
                    url: userInfo.repos_url + '?page=1&per_page=1000',
                    method: 'GET',
                    type: 'JSON'
                });
            }).then(function(repositories) {
                user['repos'] = repositories;

                return user;
            });
        },

        setUserAttributes = function(userInfo) {
            user['name'] = userInfo.name;
            user['joined'] = userInfo.created_at;
            user['bio'] = userInfo.bio;
            user['location'] = userInfo.location;
            user['avatar'] = userInfo.avatar_url;
            user['hireable'] = userInfo.hireable;
            user['followers'] = userInfo.followers;
            user['following'] = userInfo.following;
            user['email'] = userInfo.email;
            user['public_repos'] = userInfo.public_repos;
            user['profile_url'] = userInfo.html_url;
        };

        return {
            get: get
        };
    })();

    return RepositoriesModel;
});

