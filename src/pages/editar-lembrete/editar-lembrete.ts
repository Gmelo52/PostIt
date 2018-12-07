import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListaAfazeres } from '../../models/listaAfazeres.interface';

/**
 * Generated class for the EditarLembretePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-lembrete',
  templateUrl: 'editar-lembrete.html',
})
export class EditarLembretePage {

  listaAfazeres = {} as ListaAfazeres;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarLembretePage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
