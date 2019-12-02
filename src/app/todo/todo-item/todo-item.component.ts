import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/Todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToogleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('textEditInput') textEditInput: ElementRef;
  checkField: FormControl;
  textInput: FormControl;
  editing: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl( this.todo.done );
    this.textInput = new FormControl( this.todo.text, Validators.required );
    this.checkField.valueChanges.subscribe(() => {
      const action = new ToogleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  setEditing(){
    this.editing = true;
    setTimeout(() => {
      this.textEditInput.nativeElement.select()
    }, 1);
  }

  doneEditing(){
    this.editing = false;
    if(this.textInput.invalid){
      return;
    }
    if(this.textInput.value === this.todo.text){
      return;
    }
    const action = new EditTodoAction(this.todo.id, this.textInput.value);
    this.store.dispatch(action);
  }

  deleteTodo(){
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
