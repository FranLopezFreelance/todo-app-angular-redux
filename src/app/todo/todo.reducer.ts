import * as TodoActions from './todo.actions';
import {
  Todo
} from './model/Todo.model';

let todo1 = new Todo('Tarea 1');
let todo2 = new Todo('Tarea 2');
let todo3 = new Todo('Tarea 3');
todo2.done = true;
const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = initialState, action: TodoActions.Actions): Todo[] {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      let todo = new Todo(action.text);
      return [...state, todo];
    case TodoActions.TOOGLE_ALL:
      return state.map(todoEdit => {
          return {...todoEdit, done: action.done };
      });
    case TodoActions.TOOGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, done: !todoEdit.done };
        } else {
          return todoEdit;
        }
      });
    case TodoActions.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, text: action.text };
        } else {
          return todoEdit;
        }
      });
    case TodoActions.DELETE_TODO:
      return state.filter(todoEdit => todoEdit.id != action.id);
    case TodoActions.DELETE_DONES:
          return state.filter(todoEdit => !todoEdit.done);
    default:
      return state;
  }

}
