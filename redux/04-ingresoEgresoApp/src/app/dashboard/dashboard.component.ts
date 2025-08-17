import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import * as ingresoEgresoActions from '../ingreso-egreso/ingreso-egreso.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit, OnDestroy {

  userSubs!: Subscription
  ingresosSubs!: Subscription;

  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('user')
      .pipe(
        filter(auth => auth.user !== null)
      )
      .subscribe(({user}) => {
        console.log(user);
        if (user && user.uid) {
          this.ingresosSubs = this.ingresoEgresoService.initIngresoEgresoListener(user.uid)
            .subscribe(ingresosEgresosFB => {
              console.log(ingresosEgresosFB);
              this.store.dispatch(ingresoEgresoActions.setItems({ items: ingresosEgresosFB }));
            });
        } else {
          console.error('User UID is undefined or user is null');
        }
      });
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
    this.ingresosSubs?.unsubscribe();
  }
}
