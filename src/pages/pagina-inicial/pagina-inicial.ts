import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ListaAfazeres } from '../../models/listaAfazeres.interface';
import { Subscription } from 'rxjs';
import { CadastrarTarefaProvider } from '../../providers/cadastrar-tarefa/cadastrar-tarefa';

/**
 * Generated class for the PaginaInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-inicial',
  templateUrl: 'pagina-inicial.html',
})
export class PaginaInicialPage {
  listaAfazeres = {} as ListaAfazeres;
  afazeresArray: ListaAfazeres[];
  subscription: Subscription;


  constructor(public navCtrl: NavController, public navParams: NavParams, private CadListarPv: CadastrarTarefaProvider, private alert: AlertController, private modal:ModalController) {
  }

  ionViewDidLoad() {
    this.subscription = this.CadListarPv.getAfazeres().subscribe(res=>{
      this.afazeresArray = res;
    });
  }

  cadastrar(){
    this.navCtrl.push('CadastrarAfazerPage');
  }
  editar(){
    this.modal.create('EditarLembretePage').present();
  }
  excluir(id){
    this.CadListarPv.remove(id);
  }

}
