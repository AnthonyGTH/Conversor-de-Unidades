(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Conversion de longitudes\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <ion-card-header>\n      Convertido\n    </ion-card-header>\n\n    <ion-card-content>\n      <h2>{{convertido}}</h2>\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title>Ingresa la longitud a convertir</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Cantidad:</ion-label>\n          <ion-input [(ngModel)]=\"cantIngresada\" (ionChange)=\"convertir()\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title>Selecciona las longitudes</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Convertir de</ion-label>\n          <ion-select [(ngModel)]=\"unidToConvert\" (ionChange)=\"convertir()\" okText=\"Ok\" cancelText=\"Cerrar\">\n            <ion-select-option value=\"1\">Pulgada</ion-select-option>\n            <ion-select-option value=\"2\">Pie</ion-select-option>\n            <ion-select-option value=\"3\">Yarda</ion-select-option>\n            <ion-select-option value=\"4\">Milla</ion-select-option>\n            <ion-select-option value=\"5\">Metros</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>A</ion-label>\n          <ion-select [(ngModel)]=\"unidToDoConvert\" (ionChange)=\"convertir()\" okText=\"Ok\" cancelText=\"Cerrar\">\n            <ion-select-option value=\"1\">Pulgada</ion-select-option>\n            <ion-select-option value=\"2\">Pie</ion-select-option>\n            <ion-select-option value=\"3\">Yarda</ion-select-option>\n            <ion-select-option value=\"4\">Milla</ion-select-option>\n            <ion-select-option value=\"5\">Metros</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-list lines=\"none\">\n        <ion-img src=\"/assets/Logo ITCG-13.png\"></ion-img>\n    </ion-list>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvRXNjcml0b3Jpby9BcEFwcElvbmljL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        this.convertido = 0.0;
        this.cantIngresada = 0.0;
    }
    Tab1Page.prototype.convertir = function () {
        switch (this.unidToConvert) {
            case "1": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = "Porque convertir pulgada a pulgada? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                    case "2": {
                        this.convertido = this.cantIngresada * 0.0833333;
                        break;
                    }
                    case "3": {
                        this.convertido = this.cantIngresada * 0.0277778;
                        break;
                    }
                    case "4": {
                        this.convertido = this.cantIngresada * 0.0000157832598024;
                        break;
                    }
                    case "5": {
                        this.convertido = this.cantIngresada * 0.02540002032;
                        break;
                    }
                }
                break;
            }
            case "2": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = this.cantIngresada * 12.0000096;
                        break;
                    }
                    case "2": {
                        this.convertido = "Porque convertir pie a pie? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                    case "3": {
                        this.convertido = this.cantIngresada * 0.333333;
                        break;
                    }
                    case "4": {
                        this.convertido = this.cantIngresada * 0.000189394;
                        break;
                    }
                    case "5": {
                        this.convertido = this.cantIngresada * 0.3048;
                        break;
                    }
                }
                break;
            }
            case "3": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = this.cantIngresada * 36;
                        break;
                    }
                    case "2": {
                        this.convertido = this.cantIngresada * 3;
                        break;
                    }
                    case "3": {
                        this.convertido = "Porque convertir yarda a yarda? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                    case "4": {
                        this.convertido = this.cantIngresada * 0.000568182;
                        break;
                    }
                    case "5": {
                        this.convertido = this.cantIngresada * 0.9144;
                        break;
                    }
                }
                break;
            }
            case "4": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = this.cantIngresada * 63360;
                        break;
                    }
                    case "2": {
                        this.convertido = this.cantIngresada * 5280;
                        break;
                    }
                    case "3": {
                        this.convertido = this.cantIngresada * 1760;
                        break;
                    }
                    case "4": {
                        this.convertido = "Porque convertir milla a milla? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                    case "5": {
                        this.convertido = this.cantIngresada * 1609.34;
                        break;
                    }
                }
                break;
            }
            case "5": {
                switch (this.unidToDoConvert) {
                    case "1": {
                        this.convertido = this.cantIngresada * 39.3701;
                        break;
                    }
                    case "2": {
                        this.convertido = this.cantIngresada * 3.28084;
                        break;
                    }
                    case "3": {
                        this.convertido = this.cantIngresada * 1.09361;
                        break;
                    }
                    case "4": {
                        this.convertido = this.cantIngresada * 0.000621371;
                        break;
                    }
                    case "5": {
                        this.convertido = "Porque convertir metro a metro? :v, weno es: " + this.cantIngresada;
                        break;
                    }
                }
                break;
            }
        }
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map