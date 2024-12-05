import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: ``
})
export class NietoComponent implements OnInit {

  contador: number = 20;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador )
  }

  reset() {
    this.store.dispatch(actions.resetear());
  }

}
