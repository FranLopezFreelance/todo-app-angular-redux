import { Action } from '@ngrx/store';

export const ADD_TODO = '[Todo] - Agregar Tarea';
export const TOOGLE_ALL = '[Todo] - Toogle todas las Tareas';
export const TOOGLE_TODO = '[Todo] - Toogle Tarea';
export const EDIT_TODO = '[Todo] - Editar Tarea';
export const DELETE_TODO = '[Todo] - Borrar Tarea';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor( public text: string ){};
}

export class ToogleAllAction implements Action {
  readonly type = TOOGLE_ALL;
  constructor( public done: boolean ){};
}

export class ToogleTodoAction implements Action {
  readonly type = TOOGLE_TODO;
  constructor( public id: number ){};
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor( public id: number, public text: string ){};
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor( public id: number ){};
}

export type Actions = AddTodoAction | ToogleAllAction | ToogleTodoAction |
                      EditTodoAction | DeleteTodoAction;
