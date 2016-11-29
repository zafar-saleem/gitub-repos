/*global define:false */
define(function(require) {

	'use strict';

    var RepositoryModel = require('models/RepositoriesModel'),
        RepositoriesListView = require('views/RepositoriesListView');

    var App = (function() {

        var init = function() {
            var model = new RepositoryModel(),
                view = new RepositoriesListView(model, {});

            view.render();
        };

        return {
            init: init
        };

    }());

	return App;
});

