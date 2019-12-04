import { Todo } from './todo/model/Todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as todo from './todo/todo.reducer';
import * as filter from './filter/filter.reducer';
import * as filterActions from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: filterActions.ValidFilters;
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
  todos: todo.todoReducer,
  filter: filter.filterReducer
}
