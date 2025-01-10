import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as filtroActions from '../../filtro/filtro.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtroActions.FiltrosValidosStrings = 'todos';
  filtros: filtroActions.FiltrosValidosStrings[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: filtroActions.FiltrosValidosStrings) {
    this.store.dispatch(filtroActions.setFiltro({ filtro: filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(todoActions.limpiarCompletados());
  }
}