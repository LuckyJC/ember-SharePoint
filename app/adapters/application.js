import JSONAPIAdapter from 'ember-data/adapters/json-api';
//import Ember from 'ember';

export default JSONAPIAdapter.extend({

 /* findAll: function () {
    var that = this;
    var result = Ember.A();
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        type: 'GET',
        url: '/ember/_vti_bin/ListData.svc/Todos?&$expand=CreatedBy',
        headers: {"Accept": "application/json; odata=verbose"},
        success: function (data) {
          data.d.results.forEach(function (item) {
            result.pushObject(
              that.store.createRecord('todo', {
                id: item.Id,
                title: item.Title,
                isCompleted: item.IsCompleted,
                createdBy: item.CreatedBy.Name
              })
            );
          });
          console.log(result);
          resolve(result);
        },
        error: function (request, textStatus, error) {
          console.log(error);
          reject(error);
        }
      });
    });
  }
*/

});



/*

import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host:'https://vaww.oas.aac.dva.va.gov',
  namespace: 'ember/_vti_bin/ListData.svc',
  headers: {
    "Accept": "application/json; odata=verbose"
  },
  pathForType: function(modelName) {
    var capitalized = Ember.String.capitalize(modelName);
    return Ember.String.pluralize(capitalized);
  }
  /!*findAll: function () {
    var that = this;
    var result = Ember.A();
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        type: 'GET',
        url: '/ember/_vti_bin/ListData.svc/Todos?&$expand=CreatedBy',
        headers: {"Accept": "application/json; odata=verbose"},
        success: function (data) {
          data.d.results.forEach(function (item) {
            result.pushObject(
              that.store.createRecord('todo', {
                id: item.Id,
                title: item.Title,
                isCompleted: item.IsCompleted,
                createdBy: item.CreatedBy.Name
              })
            );
          });
          console.log(result);
          resolve(result);
        },
        error: function (request, textStatus, error) {
          console.log(error);
          reject(error);
        }
      });
    });
  }*!/


  /!*  findAll: function () {

   var that = this;
   var url = '/ember/_vti_bin/ListData.svc/Todos';
   return Ember.$.getJSON(url).then((response) => {
   var results = Ember.A(response.d.results);
   console.log(results);

   Ember.$.each(results, function (index, value) {
   that.store.createRecord('todo', {
   title: value.Title,
   isCompleted: false
   });

   });

   console.log(this.store.peekAll('todo'));
   //this.store.pushPayload(results);

   });

   }//end find*!/



});

*/
