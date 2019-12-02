import * as todoActions from './todo.actions';
import {
  Todo
} from './model/Todo.model';

let todo1 = new Todo('Tarea 1');
let todo2 = new Todo('Tarea 2');
let todo3 = new Todo('Tarea 3');
todo2.done = true;
const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = initialState, action: todoActions.Actions): Todo[] {
  switch (action.type) {
    case todoActions.ADD_TODO:
      let todo = new Todo(action.text);
      return [...state, todo];
    case todoActions.TOOGLE_ALL:
      return state.map(todoEdit => {
          return {...todoEdit, done: action.done };
      });
    case todoActions.TOOGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, done: !todoEdit.done };
        } else {
          return todoEdit;
        }
      });
    case todoActions.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, text: action.text };
        } else {
          return todoEdit;
        }
      });
    case todoActions.DELETE_TODO:
      return state.filter(todo => todo.id != action.id);
    default:
      return state;
  }

}
