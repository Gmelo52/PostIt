import { UsuarioLogin } from './../../models/usuario.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {
  usuarioLogin = {} as UsuarioLogin;
  alertCadastrar = this.alertCtrl.create({
    title:'Usuário cadastrado',
    buttons: [{
      text:'Ok',
      handler: () => {
        this.viewCtrl.dismiss();
      }
    }]
  })

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public alertCtrl: AlertController, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }
async cadastrar(usuario: UsuarioLogin){
  try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
    this.alertCadastrar.present();
  } catch (error) {
    
  }
}
}
