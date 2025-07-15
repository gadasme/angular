import { Action, createReducer, on } from '@ngrx/store';
import { setUser, unSetUser } from './auth.actions';
import { Usuario } from '../models/usuario.model';

export interface State {
    user: Usuario | null; 
}

export const initialState: State = {
   user: null
}

const _authReducer = createReducer(initialState,

    on(setUser, (state, { user }) => ({ ...state, user: new Usuario(user.nombre, user.email, user.uid) })),
    on(unSetUser, state => ({ ...state, user: null })),

);

export function authReducer(state: State | undefined, action: Action<string>) {
    return _authReducer(state, action);
}