import { Component, ɵisBoundToModule__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';

  todos = [
    {
      completed: false,
      task: 'fold clothes'
    },
    {
      completed: false,
      task: 'put clothes in dresser'
    },
    {
      completed: false,
      task: 'relax'
    },
    {
      completed: true,
      task: 'try to pet cat'
    },
    {
      completed: false,
      task: 'pet dog'
    },
    {
      completed: false,
      task: 'be awesome'
    },
  ]

  addTask(newTodo : string) {
    if (newTodo) {
      console.log(JSON.stringify(this.todos));
      this.todos = [...this.todos, {task: newTodo, completed: false}];
      console.log(this.todos);
    }
  }

  removeTask(i){
    this.todos.splice(i, 1);
  }
}



