define(function(require) {

    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        RepoTemplate = require('text!../../templates/RepositoriesTemplate.html');

    var RepositoriesListView = function(model) {
        this._model = model;

        $('.m-search-input').on('keyup', this._onSearchHandle.bind(this));
    };

    RepositoriesListView.prototype = (function() {

        var template = _.template(RepoTemplate);

        var render = function(userid) {
            $('.m-search-input').focus();

            this._model.get(userid || null).done(function(data) {
                $('.m-user-info').html(template({ data: data }));
            }).fail(function(error) {
                if (error.status) {
                    alert(error.responseJSON.message);
                }

                $('.m-user-info').html(template({ data: error }));
            });
        },

        _onSearchHandle = function(e) {
            if (e.keyCode === 13) {
                var userID = $(e.target).val();

                this.render({ userId : userID });
                $(e.target).val('');
            }
        };

        return {
            render: render,
            _onSearchHandle: _onSearchHandle
        };

    })();

    return RepositoriesListView;
});

