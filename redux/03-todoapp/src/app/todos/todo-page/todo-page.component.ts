import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;
  
  constructor(private store: Store<AppState>) {}

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(actions.toggleAll({ completado: this.completado }));
  }
  
  ngOnInit(): void {}
}
