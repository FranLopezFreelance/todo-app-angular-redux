import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/Todo.model';
import * as FilterActions from './filter.actions';
@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: FilterActions.ValidFilters): any {
    switch (filter) {
      case 'Completadas':
        return todos.filter(todo => todo.done);
      case 'Pendientes':
        return todos.filter(todo => !todo.done);
      default:
        return todos;
    }
  }

}
