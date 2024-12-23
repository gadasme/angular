import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: '../../../styles.css'
})
export class HijoComponent implements OnInit {

  contador: number = 20;
  
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador )
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }

}
