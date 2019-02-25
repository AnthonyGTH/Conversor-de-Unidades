(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Conversion de masas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <ion-card-header>\n      Convertido\n    </ion-card-header>\n\n    <ion-card-content>\n      <h2>{{convertido}}</h2>\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title>Ingresa la masa a convertir</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Cantidad:</ion-label>\n          <ion-input [(ngModel)]=\"cantIngresada\" (ionChange)=\"convertir()\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title>Selecciona las masas</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Convertir de</ion-label>\n          <ion-select [(ngModel)]=\"unidToConvert\" (ionChange)=\"convertir()\" okText=\"Ok\" cancelText=\"Cerrar\">\n            <ion-select-option value=\"1\">Libra</ion-select-option>\n            <ion-select-option value=\"2\">Onza</ion-select-option>\n            <ion-select-option value=\"3\">Tonelada</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>A</ion-label>\n          <ion-select [(ngModel)]=\"unidToDoConvert\" (ionChange)=\"convertir()\" okText=\"Ok\" cancelText=\"Cerrar\">\n            <ion-select-option value=\"1\">Libra</ion-select-option>\n            <ion-select-option value=\"2\">Onza</ion-select-option>\n            <ion-select-option value=\"3\">Tonelada</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-list lines=\"none\">\n        <ion-img src=\"/assets/Logo-TecNM-2017.png\"></ion-img>\n    </ion-list>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab2Page = /** @class */ (function () {
    function Tab2Page() {
        this.convertido = 0.0;
        this.cantIngresada = 0.0;
    }
    Tab2Page.prototype.convertir = function () {
        switch (this.unidToConvert) {
            case "1": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = "Porque convertir libra a libra? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                    case "2": {
                        this.convertido = this.cantIngresada * 16;
                        break;
                    }
                    case "3": {
                        this.convertido = this.cantIngresada * 0.000453592;
                        break;
                    }
                }
                break;
            }
            case "2": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = this.cantIngresada * 0.0625;
                        break;
                    }
                    case "2": {
                        this.convertido = "Porque convertir onza a onza? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                    case "3": {
                        this.convertido = this.cantIngresada * 0.00002835;
                        break;
                    }
                }
                break;
            }
            case "3": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = this.cantIngresada * 2204.62;
                        break;
                    }
                    case "2": {
                        this.convertido = this.cantIngresada * 35274;
                        break;
                    }
                    case "3": {
                        this.convertido = "Porque convertir tonelada a tonelada? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                }
                break;
            }
        }
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map