import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: ``
})
export class EstadisticaComponent implements OnInit {

  ingresos: number = 0;
  egresos : number = 0;
  totalIngresos: number = 0;
  totalEgresos : number = 0;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('ingresosEgresos')
      .subscribe(({ items }) => this.generarEstadisticas(items)); 
  }

  generarEstadisticas(items: IngresoEgreso[]) {
    for (const item of items) {
      if (item.tipo === 'ingreso') {
        this.ingresos++;
        this.totalIngresos += item.monto;
      } else {
        this.egresos++;
        this.totalEgresos += item.monto;
      }
    }
  }

}
