##Requirements
Below is the stack I used in this project. Please follow the getting started section in order to make this project run.

## Stack
 - HTML5.
 - CSS
 - jQuery
 - requirejs
 - Underscorejs
 - Git
 - Bitbucket
 - font-awesome
 - [Bower](http://bower.io/).
 - Expressjs.
 - VIM.
 - Mac OS X.
 - Grunt (as build tool) with following plugin!
   - [CSSmin](https://github.com/gruntjs/grunt-contrib-cssmin)
   - [Concat](https://github.com/gruntjs/grunt-contrib-concat)
   - [JSHint](https://github.com/gruntjs/grunt-contrib-jshint)
   - [CSSLint](https://github.com/gruntjs/grunt-contrib-csslint)
   - [Clean](https://github.com/gruntjs/grunt-contrib-clean)
   - [HTMLmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
   - [ProcessHTML](https://github.com/dciccale/grunt-processhtml)
   - [Copy](https://github.com/gruntjs/grunt-contrib-copy)
   - [Nodemon](https://github.com/ChrisWren/grunt-nodemon)
   - [Concurrent](https://github.com/sindresorhus/grunt-concurrent)
   - [Watch](https://github.com/gruntjs/grunt-contrib-watch)
   - [Requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)

## Getting started
In order to run this project in the browser successfully, please follow the steps below!

    1. Clone this repository. Make sure Git is installed on your systems.
    2. CD to the root folder of this project.
    3. Run `npm install` (if it complains then run `sudo npm install`) to install all Grunt plugins(dependencies). Please make sure that nodejs is installed on your machine before running npm install.
    4. Run `bower install` to install all project dependencies i.e. jquery into js/libs folder. Please make sure that bower is install on your machine before running bower install command.
    5. Now run `grunt` command on your terminal in `root` folder of this project.
    6. Now go to your browser and type `localhost:8000` to view this project in action.

## Description
Above steps, in getting started section, will install all dependencies required for this project to run and make the project ready for
production by minifying all resources. It will place the production ready project in `dist` folder in `root` level.

In this task, I followed MV* pattern. I created 2 folders inside `src/js/` i.e. `models` and `views`. Inside `models` I wrote `RepositoriesModel.js` which is responsible for getting data from github API endpoint. And manipulate data to make it useful for my needs for this code challenge. I am using jquery promises chain and I am calling two ajax requests. First I am getting user details and then all repositories associated with queried user.

In `views` folder, I wrote `RepositoriesListView.js` module. This is responsible for getting data from the `model`(mentioned in previous paragraph) and display it to the user. For templates, I am using minimal `underscorejs` template engine. `src/templates/` folder consists of template i.e. `RepositoriesTemplate.html`.

## Usage

In order to query user, you have to use user's github username such as mine is `zafar-saleem` or `addyosmani` or `nzakas` etc.