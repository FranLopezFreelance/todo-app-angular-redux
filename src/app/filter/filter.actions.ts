import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] - Setear Filtro';

export type ValidFilters = 'Todas' | 'Completadas' | 'Pendientes';

/* ACTION CREATORS. TODA ACTION TIENE UN TYPE Y/O UN PAYLOAD (data) */
export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor( public filter: ValidFilters ){}
}

export type Actions = SetFilterAction;
