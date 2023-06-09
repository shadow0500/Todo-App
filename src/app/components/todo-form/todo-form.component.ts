import { Component,OnInit } from '@angular/core';
import {Todo} from "./../../model/todo"
// import { uuid} from "uuid";
import { TodoService } from "./../../service/todo.service"

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle!: string;
  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    
  }
  handleAdd(){
    const newTodo:Todo={
      id:"",
      title:this.todoTitle,
      isComplete:false,
      date:new Date(),
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle="";
  }

}
