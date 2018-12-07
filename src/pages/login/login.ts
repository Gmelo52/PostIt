import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioLogin} from '../../models/usuario.interface';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import firebase from 'firebase';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public loadingCtrl: LoadingController, public menuCtrl: MenuController, private admobFree: AdMobFree, public ref:ChangeDetectorRef) {
    this.menuCtrl.swipeEnable(false);
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

  loginRedesSociais(provider){
    let providerSign = null;
    switch(provider){
      case 'google':
      providerSign = new firebase.auth.GoogleAuthProvider();
      break;
      case 'facebook':
      providerSign = new firebase.auth.FacebookAuthProvider();
      break;
      
    }

    this.afAuth.auth.signInWithPopup(providerSign).then(()=>{
      this.afAuth.auth.getRedirectResult().then(res=>{
        this.ref.detectChanges();
        console.log(res);
        
        this.navCtrl.setRoot('PaginaInicialPage');
      });
    })
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
