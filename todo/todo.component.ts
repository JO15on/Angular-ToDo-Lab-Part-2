import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() completed : boolean;

  @Input() task : string;

  constructor() {
 
   }

  completeTask(){
     this.completed = true;
  }

  ngOnInit() {   
  }

}

