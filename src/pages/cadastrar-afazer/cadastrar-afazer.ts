import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaAfazeres } from '../../models/listaAfazeres.interface';
import { CadastrarTarefaProvider } from '../../providers/cadastrar-tarefa/cadastrar-tarefa';

/**
 * Generated class for the CadastrarAfazerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-afazer',
  templateUrl: 'cadastrar-afazer.html',
})
export class CadastrarAfazerPage {
  listaAfazeres = {} as ListaAfazeres;

  constructor(public navCtrl: NavController, public navParams: NavParams, private CadListarPv: CadastrarTarefaProvider, private alert: AlertController) {
  }

  ionViewDidLoad() {

    this.listaAfazeres.data = new Date();
  }



  async cadastrar(afazer: ListaAfazeres) {
    try {
      this.CadListarPv.addAfazer(afazer).then(res => {
        let alert = this.alert.create({
          title: 'Cadastrado',
          message: 'A lista foi cadastrada com sucesso!',
          buttons: ['ok']
        });
        alert.present();
      });

    } catch (error) {
      console.log('erro')
    }
  }
}
