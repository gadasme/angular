import { createReducer, on } from '@ngrx/store';
import { FiltrosValidosStrings, setFiltro } from './filtro.actions';

export const initialState: FiltrosValidosStrings = 'todos';

const _filtroReducer = createReducer<FiltrosValidosStrings>(
    initialState,
    on(setFiltro, (state, { filtro }) => filtro )
);

export function filtroReducer(state: any, action: any) {
    return _filtroReducer(state, action);
}