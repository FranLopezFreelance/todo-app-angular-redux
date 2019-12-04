import { Component, OnInit } from '@angular/core';
import * as FilterActions from '../../filter/filter.actions';
import * as TodoActions from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/Todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: FilterActions.ValidFilters[] = ['Todas', 'Completadas', 'Pendientes'];
  selectedFilter: FilterActions.ValidFilters = 'Todas';
  pendings: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.selectedFilter = state.filter;
      this.countPendings(state.todos);
    })
  }

  setFilter(newFilter: FilterActions.ValidFilters){
    const action = new FilterActions.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countPendings(todos: Todo[]){
    this.pendings = todos.filter( todo => !todo.done).length;
  }

  deleteDones(){
    const action = new TodoActions.DeleteDonesAction();
    this.store.dispatch(action);
  }

}
