webpackJsonp([0],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaInicialPageModule", function() { return PaginaInicialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagina_inicial__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaginaInicialPageModule = /** @class */ (function () {
    function PaginaInicialPageModule() {
    }
    PaginaInicialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pagina_inicial__["a" /* PaginaInicialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pagina_inicial__["a" /* PaginaInicialPage */]),
            ],
        })
    ], PaginaInicialPageModule);
    return PaginaInicialPageModule;
}());

//# sourceMappingURL=pagina-inicial.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaInicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cadastrar_tarefa_cadastrar_tarefa__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaginaInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaginaInicialPage = /** @class */ (function () {
    function PaginaInicialPage(navCtrl, navParams, CadListarPv, alert, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CadListarPv = CadListarPv;
        this.alert = alert;
        this.modal = modal;
        this.listaAfazeres = {};
    }
    PaginaInicialPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.subscription = this.CadListarPv.getAfazeres().subscribe(function (res) {
            _this.afazeresArray = res;
        });
    };
    PaginaInicialPage.prototype.cadastrar = function () {
        this.navCtrl.push('CadastrarAfazerPage');
    };
    PaginaInicialPage.prototype.editar = function () {
        this.modal.create('EditarLembretePage').present();
    };
    PaginaInicialPage.prototype.excluir = function (id) {
        this.CadListarPv.remove(id);
    };
    PaginaInicialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagina-inicial',template:/*ion-inline-start:"C:\Users\Gmelo\MobileProg\src\pages\pagina-inicial\pagina-inicial.html"*/'<!--\n\n  Generated template for the PaginaInicialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Minhas tarefas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let afazer of afazeresArray" class="card">\n\n    <ion-card-title class="card-title" padding>{{afazer.titulo}}</ion-card-title>\n\n    <ion-card-content>{{afazer.descricao}}</ion-card-content>\n\n    <button ion-button clear (click)="editar()">Editar</button>\n\n    <button ion-button end clear (click)="excluir(afazer.id)">Excluir</button>\n\n  </ion-card>\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="cadastrar()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gmelo\MobileProg\src\pages\pagina-inicial\pagina-inicial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cadastrar_tarefa_cadastrar_tarefa__["a" /* CadastrarTarefaProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], PaginaInicialPage);
    return PaginaInicialPage;
}());

//# sourceMappingURL=pagina-inicial.js.map

/***/ })

});
//# sourceMappingURL=0.js.map