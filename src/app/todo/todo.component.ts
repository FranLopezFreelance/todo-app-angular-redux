import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToogleAllAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completed: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toogleAll(){
    this.completed = !this.completed;
    const action = new ToogleAllAction(this.completed);
    this.store.dispatch(action);
  }

}
