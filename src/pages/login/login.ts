import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioLogin} from '../../models/usuario.interface';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuarioLogin = {} as UsuarioLogin;
  loading = this.loadingCtrl.create({
    content: "Autenticando usuário"
  });
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public loadingCtrl: LoadingController, public menuCtrl: MenuController, private admobFree: AdMobFree) {
    
  }
  async login (usuario: UsuarioLogin){

    try {
      this.loading.present();
      const result = await this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
      if(result){
        this.navCtrl.setRoot('PaginaInicialPage');
        this.loading.dismiss();
      }
    } catch (error) {
      this.loading.dismiss();      
    }
  }

  cadastrar(){
    this.navCtrl.push('CadastroUsuarioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test conf
      isTesting: false,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
        
       })
       .catch(e => console.log(e));
  }

}
