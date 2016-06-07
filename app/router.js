import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //needed to add index.html to make the page render in SharePoint
  this.route('todos', {path:'/index.html'}, function() {
    this.route('complete');
    this.route('incomplete');
  });
});

export default Router;
