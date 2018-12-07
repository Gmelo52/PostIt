import { ListaAfazeres } from './../../models/listaAfazeres.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

/*
  Generated class for the CadastrarTarefaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarTarefaProvider {

  listaAfazeres = {} as ListaAfazeres;
  afazeresObs: Observable<ListaAfazeres[]>;
  listaAfazzeresCol: AngularFirestoreCollection<ListaAfazeres>;

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {


    this.listaAfazzeresCol = db.collection<any>('ListaDeAfazeres');
    this.afazeresObs = this.listaAfazzeresCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as ListaAfazeres;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    console.log('Hello CadastrarTarefaProvider Provider');
  }
  getAfazeres() {
    return this.afazeresObs;
  }
  getAfazer(id) {
    return this.listaAfazzeresCol.doc<ListaAfazeres>(id).valueChanges();
  }
  updateAfazeres(afazer: ListaAfazeres, id: string) {
    return this.listaAfazzeresCol.doc(id).update(afazer);
  }
  addAfazer(afazer: ListaAfazeres) {
    return this.listaAfazzeresCol.add(afazer);
  }
  remove(id) {
    return this.listaAfazzeresCol.doc(id).delete();
  }

}
