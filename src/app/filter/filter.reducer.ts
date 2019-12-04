import * as FilterActions from './filter.actions';

const initialState: FilterActions.ValidFilters = 'Todas';

/* REDUCER. ES UNA FUNCION PURA QUE RECIBE EL ESTADO ACTUAL y UNA ACCION
   DEVUELVE UN NUEVO ESTADO SIN MUTAR AL ANTERIOR */
export function filterReducer(
      state = initialState,
      action: FilterActions.Actions ): FilterActions.ValidFilters {
  switch(action.type){
    case FilterActions.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
