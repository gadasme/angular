import { createAction, props } from '@ngrx/store';

export type FiltrosValidosStrings = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: FiltrosValidosStrings }>()
);