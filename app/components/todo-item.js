import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['todo.isCompleted:completed', 'isEditing:editing'],
    isEditing: false,
    actions: {
        editTodo() {
            this.toggleProperty('isEditing');
            //this.set('isEditing', true);
        },
        submitTodo(todo) {
            //can pass in todo as an object in the function or use let todo as in below function
            if (todo.get('title') === "") {
                this.sendAction('deleteTodo', todo);
            } else {
                this.sendAction('updateTodo', todo);
            }
            this.set('isEditing', false);
        },
        deleteTodo() {
            let todo = this.get('todo');
            this.sendAction('deleteTodo', todo);
        },
        toggleCompleteTodo(todo) {
            todo.toggleProperty('isCompleted');
            todo.save();
        }

    }
});
