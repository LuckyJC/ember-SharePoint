import Ember from 'ember';

export default Ember.Route.extend({
    model() {
       return this.store.findAll('todo');


/*       
       let that = this;
       let url = '/ember/_vti_bin/ListData.svc/Todos';
       return Ember.$.getJSON(url).then((response) => {
         let results = Ember.A(response.d.results);
         console.log(results);

         Ember.$.each(results, function (index, value) {
           let todo = that.store.createRecord('todo', {
             title: value.Title,
             isCompleted: false
           });

           // Save the new model
           //todo.save();

         });

         //this.store.push(results);
         return that.store.peekAll('todo');
       });


      model() {
        this.store.push({
          data: [{
            id: 1,
            type: 'todo',
            attributes: {
              title: 'Todo 1',
              isCompleted: false
            },
            relationships: {}
          }, {
            id: 2,
            type: 'todo',
            attributes: {
              title: 'Todo 2',
              isCompleted: true
            },
            relationships: {}
          }]
        });

        return this.store.peekAll('todo');
*/


    },

    actions: {
        createTodo(newTitle) {
            this.store.createRecord('todo', {
                title: newTitle,
                isCompleted: false
            }).save();
        },
        updateTodo(todo) {
            todo.save();
        },
        deleteTodo(todo) {
            todo.destroyRecord();
        }
    }
});
