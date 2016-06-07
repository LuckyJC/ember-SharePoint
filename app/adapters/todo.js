/*import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({*/

import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  //Set findAll correctly in SharePoint
  namespace: 'ember/_vti_bin/ListData.svc',
  headers: {
    "Accept": "application/json; odata=verbose"
  },

  //Capitalize and add 's' to make /Todos for SharePoint list URL
  pathForType(modelName) {
    return Ember.String.capitalize(modelName) + 's';
  },

  //customize createRecord, updateRecord, deleteRecord for SharePoint
  createRecord: function(store, type, snapshot) {
    var data = this.serialize(snapshot, { includeId: true });
    var capitalType = type.modelName.capitalize() + 's';
    var url = '_vti_bin/ListData.svc/' + capitalType;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'POST',
        contentType: 'application/json',
        processData: false,
        url: url,
        dataType: 'json',
        data: JSON.stringify(data)
      }).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  },

  updateRecord: function(store, type, snapshot) {
    var data = this.serialize(snapshot, { includeId: true });
    var id = snapshot.id;
    var capitalType = type.modelName.capitalize() + 's';
    var url = '_vti_bin/ListData.svc/' + capitalType + '(' + id + ')';

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'POST',
        contentType:"application/json; charset=utf-8",
        processData: false,
        headers: {
          "If-Match": "*",
          "X-HTTP-Method": "MERGE"
        },
        url: url,
        dataType: 'json',
        data: JSON.stringify(data)
      }).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  },

  deleteRecord: function(store, type, snapshot) {
    var data = this.serialize(snapshot, { includeId: true });
    var id = snapshot.id;
    var capitalType = type.modelName.capitalize() + 's';
    var url = '_vti_bin/ListData.svc/' + capitalType + '(' + id + ')';

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'DELETE',
        contentType:"application/json; charset=utf-8",
        processData: false,
        url: url,
        dataType: 'json',
        data: JSON.stringify(data)
      }).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }

});
