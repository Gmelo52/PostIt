webpackJsonp([2],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarLembretePageModule", function() { return EditarLembretePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_lembrete__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarLembretePageModule = /** @class */ (function () {
    function EditarLembretePageModule() {
    }
    EditarLembretePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editar_lembrete__["a" /* EditarLembretePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar_lembrete__["a" /* EditarLembretePage */]),
            ],
        })
    ], EditarLembretePageModule);
    return EditarLembretePageModule;
}());

//# sourceMappingURL=editar-lembrete.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarLembretePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
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
 * Generated class for the EditarLembretePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarLembretePage = /** @class */ (function () {
    function EditarLembretePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listaAfazeres = {};
    }
    EditarLembretePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarLembretePage');
    };
    EditarLembretePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditarLembretePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-lembrete',template:/*ion-inline-start:"C:\Users\Gmelo\MobileProg\src\pages\editar-lembrete\editar-lembrete.html"*/'<!--\n  Generated template for the EditarLembretePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="secondary">\n    <ion-title>Editar Lembrete</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <h6 ion-text text-center color="light">Edite seu lembrete</h6>\n    <ion-item>\n      <ion-label floating>Nome do lembrete </ion-label>\n      <ion-input type="text" [(ngModel)]="listaAfazeres.titulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Descrição do lembrete </ion-label>\n      <ion-input type="text" [(ngModel)]="listaAfazeres.descricao"></ion-input>\n    </ion-item>\n    <br><br>\n    <button ion-button full round text-center>Atualizar</button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Gmelo\MobileProg\src\pages\editar-lembrete\editar-lembrete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], EditarLembretePage);
    return EditarLembretePage;
}());

//# sourceMappingURL=editar-lembrete.js.map

/***/ })

});
//# sourceMappingURL=2.js.map