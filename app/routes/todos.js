import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let todos = [
      {
        title: "Learn Ember",
        complete: false,
      },
      {
        title: "Fill out pre-close paperwork",
        complete: false,
      }
    ];
    return todos;
  }
});