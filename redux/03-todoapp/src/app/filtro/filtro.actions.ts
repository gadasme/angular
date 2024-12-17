import { createAction, props } from '@ngrx/store';

export type FiltrosValidos = 'todos' | 'completados' | 'pendientes';
export type FiltrosValidosType = { filtro: FiltrosValidos };

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<FiltrosValidosType>()
);