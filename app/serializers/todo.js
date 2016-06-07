//import JSONAPISerializer from 'ember-data/serializers/json-api';

//export default JSONAPISerializer.extend({
import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType){
    payload[Ember.String.pluralize(primaryModelClass.modelName)] = payload.d.results;
    delete payload['d'];

    payload.todos.forEach((todo)=> {
      todo.type = primaryModelClass.modelName;
    })
    
    return this._super(...arguments)
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType){
    payload[primaryModelClass.modelName] = payload.d;
    delete payload['d'];

    payload.todo.type = primaryModelClass.modelName;

    return this._super(...arguments)
  },

  primaryKey: 'Id',

  attrs: {
    'title': 'Title',
    'isCompleted': 'IsCompleted'
    //'createdBy': 'CreatedById'
  }

});

