import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso) {
    const uid = this.authService.user.uid;
    const payload: any = {
      descripcion: ingresoEgreso.descripcion,
      monto: ingresoEgreso.monto,
      tipo: ingresoEgreso.tipo
    };

    // Only include uid if it's defined
    if (ingresoEgreso.uid !== undefined) {
      payload.uid = ingresoEgreso.uid;
    }

    return this.firestore.doc(`${uid}/ingresos-egresos`)
      .collection('items')
      .add(payload);
  }

  initIngresoEgresoListener(uid: string) {
    return this.firestore.collection(`${uid}/ingresos-egresos/items`)
      .snapshotChanges()
      .pipe(
        map(snapshot => {
          return snapshot.map(doc => {
            return { uid: doc.payload.doc.id, ...doc.payload.doc.data() as any };
          });
        })
      );
  }

  borrarIngresoEgreso(uidItem: string) {
    const uid = this.authService.user.uid;
    return this.firestore.doc(`${uid}/ingresos-egresos/items/${uidItem}`).delete();
  } 
}
