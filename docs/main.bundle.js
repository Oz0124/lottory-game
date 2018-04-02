webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lottery_lottery_page_component_lottery_page_component_component__ = __webpack_require__("../../../../../src/app/lottery/lottery-page-component/lottery-page-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_page_component_hero_page_component_component__ = __webpack_require__("../../../../../src/app/hero-page-component/hero-page-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_page_component_todo_page_component_component__ = __webpack_require__("../../../../../src/app/todo-page-component/todo-page-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '/lottery',
        pathMatch: 'full'
    },
    {
        path: 'lottery',
        component: __WEBPACK_IMPORTED_MODULE_3__lottery_lottery_page_component_lottery_page_component_component__["a" /* LotteryPageComponentComponent */]
    },
    {
        path: 'hero',
        component: __WEBPACK_IMPORTED_MODULE_4__hero_page_component_hero_page_component_component__["a" /* HeroPageComponentComponent */]
    },
    {
        path: 'todo',
        component: __WEBPACK_IMPORTED_MODULE_5__todo_page_component_todo_page_component_component__["a" /* TodoPageComponentComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/\">Angular Sample</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\" aria-expanded=\"false\" style=\"height: 1px;\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                    <a routerLink=\"/lottery\">Lottery</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/hero\">Hero</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/todo\">Todo</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" title={{i18nLanguage}}>\r\n                        <span class=\"glyphicon glyphicon-globe\"></span> {{currentLanguage}}\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li>\r\n                            <a (click)=\"useChineseTW()\">繁體中文</a>\r\n                        </li>\r\n                        <li>\r\n                            <a (click)=\"useEnglish()\">English</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>    \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'app';
        translate.addLangs(['zh-Hant', 'en-US']);
        translate.setDefaultLang('zh-Hant');
        translate.use('zh-Hant');
        this.currentLanguage = '繁體中文';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.i18nLanguage = _this.translate.instant('language');
        });
    };
    AppComponent.prototype.useEnglish = function () {
        this.translate.use('en-US');
        this.currentLanguage = 'English';
    };
    AppComponent.prototype.useChineseTW = function () {
        this.translate.use('zh-Hant');
        this.currentLanguage = '繁體中文';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_page_component_hero_page_component_component__ = __webpack_require__("../../../../../src/app/hero-page-component/hero-page-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_page_component_todo_page_component_component__ = __webpack_require__("../../../../../src/app/todo-page-component/todo-page-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lottery_lottery_page_component_lottery_page_component_component__ = __webpack_require__("../../../../../src/app/lottery/lottery-page-component/lottery-page-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lottery_components_game_control_game_control_component__ = __webpack_require__("../../../../../src/app/lottery/components/game-control/game-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lottery_components_game_items_game_items_component__ = __webpack_require__("../../../../../src/app/lottery/components/game-items/game-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lottery_components_game_list_game_list_component__ = __webpack_require__("../../../../../src/app/lottery/components/game-list/game-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// page



// lottery



// todo
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__hero_page_component_hero_page_component_component__["a" /* HeroPageComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__todo_page_component_todo_page_component_component__["a" /* TodoPageComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__lottery_lottery_page_component_lottery_page_component_component__["a" /* LotteryPageComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__lottery_components_game_control_game_control_component__["a" /* GameControlComponent */],
                __WEBPACK_IMPORTED_MODULE_13__lottery_components_game_items_game_items_component__["a" /* GameItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__lottery_components_game_list_game_list_component__["a" /* GameListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/hero-page-component/hero-page-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<!--\r\n\t<p>\r\n\t\thero-page-component works! {{ 'language' | translate:param }}\r\n\t</p>\r\n\t\r\n\t<div [translate]=\"'language'\" [translateParams]=\"{value: 'world'}\"></div>\r\n\t-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/hero-page-component/hero-page-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-page-component/hero-page-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroPageComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroPageComponentComponent = /** @class */ (function () {
    function HeroPageComponentComponent() {
    }
    HeroPageComponentComponent.prototype.ngOnInit = function () {
    };
    HeroPageComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-page-component',
            template: __webpack_require__("../../../../../src/app/hero-page-component/hero-page-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero-page-component/hero-page-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroPageComponentComponent);
    return HeroPageComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lottery/components/game-control/game-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n    <div class=\"calculate-box\" [style.width] = \"calculateBoxWidth + 'px'\" [style.height] = \"calculateBoxHeight + 'px'\" [style.left] = \"calculateBoxOffsetLeft + 'px'\" [style.top] = \"calculateBoxOffsetTop + 'px'\">   \r\n        <button class=\"btn btn-primary start\" (click)=\"start()\" *ngIf=\"!gameControl.isStart\">\r\n            {{'lottery.start' | translate:param}}\r\n        </button>\r\n        <button class=\"btn btn-danger stop\" (click)=\"stop()\" *ngIf=\"gameControl.isStart && !gameControl.isGet\">\r\n            {{'lottery.stop' | translate:param}}\r\n        </button>\r\n        <button class=\"btn btn-success get\" (click)=\"get()\" *ngIf=\"gameControl.isStart && gameControl.isGet\">\r\n            {{'lottery.check' | translate:param}}\r\n        </button>\r\n        <ul>\r\n            <li>\r\n                <h5>\r\n                    {{'lottery.totalCoin' | translate:param}}\r\n                </h5>\r\n                <h3 class=\"count\">\r\n                    {{gameCoin.totalCoin-gameCoin.usedCoin}}\r\n                </h3>\r\n                </li>\r\n            <li>\r\n                <h5>\r\n                    {{'lottery.usedCoin' | translate:param}}\r\n                </h5>\r\n                <h3 class=\"count\">\r\n                    {{gameCoin.usedCoin}}\r\n                </h3>\r\n            </li>\r\n            <li>\r\n                <h5>\r\n                    {{'lottery.winCoin' | translate:param}}\r\n                </h5>\r\n                <h3 class=\"count\">\r\n                    {{gameCoin.winCoin}}\r\n                </h3>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lottery/components/game-control/game-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n  position: absolute; }\n  .wrap .calculate-box {\n    position: relative; }\n  .wrap .calculate-box button {\n      color: #fff;\n      cursor: pointer;\n      width: 90%;\n      margin-left: 5%; }\n  .wrap .calculate-box ul {\n      width: 90%;\n      left: 5%;\n      padding: 0;\n      margin: 0 auto; }\n  .wrap .calculate-box ul li {\n        list-style: none;\n        float: left;\n        width: 33.3%;\n        text-align: center;\n        border: 1px solid #777;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n  .wrap .calculate-box ul li:nth-child(2) {\n          border-right: 0;\n          border-left: 0; }\n  .wrap .calculate-box ul li .count {\n          background: #222;\n          color: #d9534f;\n          margin: 0; }\n  .start {\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .stop {\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .get {\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lottery/components/game-control/game-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameControlComponent = /** @class */ (function () {
    function GameControlComponent(translate) {
        this.translate = translate;
        this.playGameEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.stopGameEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.calculateStartEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.calculateEndEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.listColumeNumber = 7;
    }
    GameControlComponent.prototype.ngOnInit = function () {
        this.onResize();
    };
    GameControlComponent.prototype.onResize = function () {
        var gameBoxWidth = __WEBPACK_IMPORTED_MODULE_2_jquery__('app-game-control').parent().width();
        var itemWidth = gameBoxWidth / this.listColumeNumber;
        this.calculateBoxWidth = gameBoxWidth - (2 * itemWidth);
        this.calculateBoxHeight = gameBoxWidth - (2 * itemWidth);
        this.calculateBoxOffsetTop = itemWidth * 3;
        this.calculateBoxOffsetLeft = itemWidth;
    };
    GameControlComponent.prototype.start = function () {
        this.playGameEvent.emit();
    };
    GameControlComponent.prototype.stop = function () {
        this.stopGameEvent.emit();
        this.calculateStartEvent.emit();
    };
    GameControlComponent.prototype.get = function () {
        this.calculateEndEvent.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "gameCoin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "gameControl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "playGameEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "stopGameEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "calculateStartEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "calculateEndEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:resize", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GameControlComponent.prototype, "onResize", null);
    GameControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-control',
            template: __webpack_require__("../../../../../src/app/lottery/components/game-control/game-control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lottery/components/game-control/game-control.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], GameControlComponent);
    return GameControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lottery/components/game-items/game-items.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"col-xs-12 col-sm-12\">\r\n\t<li *ngFor=\"let item of items\" [ngClass]=\"{'active':item.isActive}\">\r\n\t\t<h2 class=\"money\">\r\n\t\t\t{{item.price}}\r\n\t\t</h2>    \r\n\t\t<h5>\r\n\t\t\t{{item.title}}\r\n\t\t</h5>\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-xs minus\" (click)=\"minus(item)\">\r\n\t\t\t<span class=\"glyphicon glyphicon-minus\"></span>\r\n\t\t</button>\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-xs plus\" (click)=\"plus(item)\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\r\n\t\t</button>\r\n\t\t<h3 class=\"count\">\r\n\t\t\t{{item.count}}\r\n\t\t</h3>\r\n\t</li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/lottery/components/game-items/game-items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n  margin: 0 auto; }\n  ul li {\n    list-style: none;\n    float: left;\n    text-align: center;\n    border: 1px solid #777;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-right: 0;\n    padding: 0;\n    width: 12.5%; }\n  ul li:nth-last-child(1) {\n      border: 1px solid #777; }\n  ul li.active {\n      background: #f0ad4e; }\n  ul li .money {\n      background: #337ab7;\n      color: #fff;\n      margin: 0;\n      font-size: 20px; }\n  ul li button {\n      width: 50%;\n      float: left;\n      cursor: pointer;\n      border-radius: 0; }\n  ul li .count {\n      background: #222;\n      color: #d9534f;\n      margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lottery/components/game-items/game-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameItemsComponent = /** @class */ (function () {
    function GameItemsComponent() {
        this.plusCoinEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.minusCoinEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    GameItemsComponent.prototype.ngOnInit = function () {
    };
    GameItemsComponent.prototype.minus = function (item) {
        this.minusCoinEvent.emit(item);
    };
    GameItemsComponent.prototype.plus = function (item) {
        this.plusCoinEvent.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], GameItemsComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], GameItemsComponent.prototype, "plusCoinEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], GameItemsComponent.prototype, "minusCoinEvent", void 0);
    GameItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-items',
            template: __webpack_require__("../../../../../src/app/lottery/components/game-items/game-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lottery/components/game-items/game-items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GameItemsComponent);
    return GameItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lottery/components/game-list/game-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul [style.width] = \"itemContainerWidth + 'px'\" [style.height] = \"itemContainerHeight + 'px'\">\r\n\t<li *ngFor=\"let item of list\" [ngClass]=\"{'active': item.isActive}\" [style.width] = \"item.itemWidth + 'px'\" [style.height] = \"item.itemHeight + 'px'\" [style.left] = \"item.offsetLeft + 'px'\" [style.top] = \"item.offsetTop + 'px'\" [style.bottom] = \"item.offsetBottom + 'px'\" [style.right] = \"item.offsetRight + 'px'\">\r\n\t\t{{item.title}}\r\n\t</li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/lottery/components/game-list/game-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n  width: 700px;\n  height: 700px; }\n  ul li {\n    margin: 0;\n    list-style: none;\n    float: left;\n    text-align: center;\n    border: 1px solid #777;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    position: relative;\n    color: #333;\n    border-right: 0; }\n  ul li.active {\n      background: #f0ad4e;\n      font-size: 20px; }\n  ul li:nth-child(7) {\n      border-right: 1px solid #777; }\n  ul li:nth-child(8) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(9) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(10) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(11) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(12) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(13) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(19) {\n      border-top: 0; }\n  ul li:nth-child(20) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(21) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(22) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(23) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n  ul li:nth-child(24) {\n      border-right: 1px solid #777;\n      border-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lottery/components/game-list/game-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameListComponent = /** @class */ (function () {
    function GameListComponent(translate) {
        this.translate = translate;
        this.listColumeNumber = 7;
    }
    GameListComponent.prototype.ngOnInit = function () {
    };
    GameListComponent.prototype.ngAfterContentChecked = function () {
        this.onResize();
    };
    GameListComponent.prototype.onResize = function () {
        var gameBoxWidth = __WEBPACK_IMPORTED_MODULE_2_jquery__('app-game-list').parent().width();
        var itemWidth = gameBoxWidth / this.listColumeNumber;
        this.list.forEach(function (item, index) {
            var offsetTop = 0;
            var offsetBottom = 0;
            var offsetLeft = 0;
            var offsetRight = 0;
            switch (index + 1) {
                case 8:
                    offsetLeft = 6 * itemWidth;
                    break;
                case 9:
                    offsetLeft = 5 * itemWidth;
                    offsetTop = itemWidth;
                    break;
                case 10:
                    offsetLeft = 4 * itemWidth;
                    offsetTop = 2 * itemWidth;
                    break;
                case 11:
                    offsetLeft = 3 * itemWidth;
                    offsetTop = 3 * itemWidth;
                    break;
                case 12:
                    offsetLeft = 2 * itemWidth;
                    offsetTop = 4 * itemWidth;
                    break;
                case 13:
                    offsetLeft = 1 * itemWidth;
                    offsetTop = 5 * itemWidth;
                    break;
                case 14:
                    offsetLeft = -1 * itemWidth;
                    offsetTop = 5 * itemWidth;
                    break;
                case 15:
                    offsetLeft = 4 * itemWidth;
                    offsetTop = 4 * itemWidth;
                    break;
                case 16:
                    offsetLeft = 2 * itemWidth;
                    offsetTop = 4 * itemWidth;
                    break;
                case 17:
                    offsetTop = 4 * itemWidth;
                    break;
                case 18:
                    offsetLeft = -2 * itemWidth;
                    offsetTop = 4 * itemWidth;
                    break;
                case 19:
                    offsetLeft = -4 * itemWidth;
                    offsetTop = 4 * itemWidth;
                    break;
                case 20:
                    offsetLeft = -5 * itemWidth;
                    offsetTop = 3 * itemWidth;
                    break;
                case 21:
                    offsetLeft = -6 * itemWidth;
                    offsetTop = 2 * itemWidth;
                    break;
                case 22:
                    break;
                case 23:
                    offsetLeft = -1 * itemWidth;
                    offsetTop = -1 * itemWidth;
                    break;
                case 24:
                    offsetLeft = -2 * itemWidth;
                    offsetTop = -2 * itemWidth;
                    break;
                default:
            }
            item.itemWidth = itemWidth;
            item.itemHeight = itemWidth;
            item.offsetTop = offsetTop;
            item.offsetBottom = offsetBottom;
            item.offsetLeft = offsetLeft;
            item.offsetRight = offsetRight;
        });
        this.itemContainerWidth = gameBoxWidth;
        this.itemContainerHeight = gameBoxWidth;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], GameListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:resize", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GameListComponent.prototype, "onResize", null);
    GameListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-list',
            template: __webpack_require__("../../../../../src/app/lottery/components/game-list/game-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lottery/components/game-list/game-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lottery/lottery-page-component/lottery-page-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lottery-game-container\">\r\n\t<div class=\"game-box\">\r\n\t\t<app-game-control [gameControl]=\"gameControllerService.gameControl\" [gameCoin]=\"gameCoinService.gameCoin\" (playGameEvent)=\"playGame($event)\"\r\n\t    (stopGameEvent)=\"stopGame($event)\" (calculateStartEvent)=\"calculateStart($event)\" (calculateEndEvent)=\"calculateEnd($event)\">\r\n\t    </app-game-control>\r\n\t\t<app-game-list [list]=\"gameItemService.list\">\r\n\t\t</app-game-list>\r\n\t\t<app-game-items [items]=\"gameItemService.items\" (minusCoinEvent)=\"minusCoin($event)\" (plusCoinEvent)=\"plusCoin($event)\">\r\n\t\t</app-game-items>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lottery/lottery-page-component/lottery-page-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lottery-game-container {\n  padding-top: 20px; }\n  .lottery-game-container .game-box {\n    width: 80%;\n    margin: 0 auto;\n    max-width: 700px;\n    min-width: 370px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lottery/lottery-page-component/lottery-page-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotteryPageComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_game_item_service__ = __webpack_require__("../../../../../src/app/lottery/service/game-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_game_controller_service__ = __webpack_require__("../../../../../src/app/lottery/service/game-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_game_coin_service__ = __webpack_require__("../../../../../src/app/lottery/service/game-coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LotteryPageComponentComponent = /** @class */ (function () {
    function LotteryPageComponentComponent(translate, gameItemService, gameControllerService, gameCoinService) {
        this.translate = translate;
        this.gameItemService = gameItemService;
        this.gameControllerService = gameControllerService;
        this.gameCoinService = gameCoinService;
    }
    LotteryPageComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var makeGameItems = function () {
            _this.gameItemService.clear();
            _this.gameItemService.add({
                id: 1,
                title: _this.translate.instant('lottery.apple'),
                price: 5,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.add({
                id: 2,
                title: _this.translate.instant('lottery.orange'),
                price: 10,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.add({
                id: 3,
                title: _this.translate.instant('lottery.melon'),
                price: 15,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.add({
                id: 4,
                title: _this.translate.instant('lottery.bell'),
                price: 20,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.add({
                id: 5,
                title: _this.translate.instant('lottery.watermelon'),
                price: 20,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.add({
                id: 6,
                title: _this.translate.instant('lottery.star'),
                price: 30,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.add({
                id: 7,
                title: _this.translate.instant('lottery.seven'),
                price: 40,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.add({
                id: 8,
                title: _this.translate.instant('lottery.bar'),
                price: 100,
                count: 0,
                isActive: false,
                itemWidth: 0,
                itemHeight: 0,
                offsetTop: 0,
                offsetBottom: 0,
                offsetLeft: 0,
                offsetRight: 0
            });
            _this.gameItemService.getRandomList();
        };
        this.translate.onLangChange.subscribe(function (event) {
            makeGameItems();
        });
        makeGameItems();
        // 起始代幣
        this.gameCoinService.addTotalCoin(1000);
    };
    LotteryPageComponentComponent.prototype.playGame = function () {
        if (this.gameCoinService.gameCoin.usedCoin > 0) {
            this.gameControllerService.playGame();
        }
        else {
            alert(this.translate.instant('lottery.message.pleaseBetFirst'));
        }
    };
    LotteryPageComponentComponent.prototype.stopGame = function () {
        this.gameControllerService.stopGame();
    };
    LotteryPageComponentComponent.prototype.minusCoin = function (item) {
        if (this.gameControllerService.gameControl.isStart !== true) {
            this.gameCoinService.minusCoin(item);
        }
    };
    LotteryPageComponentComponent.prototype.plusCoin = function (item) {
        if (this.gameControllerService.gameControl.isStart !== true) {
            this.gameCoinService.plusCoin(item);
        }
    };
    LotteryPageComponentComponent.prototype.calculateStart = function () {
        this.gameCoinService.calculateStart();
    };
    LotteryPageComponentComponent.prototype.calculateEnd = function () {
        this.gameCoinService.calculateEnd();
        this.gameControllerService.setIsGet();
    };
    LotteryPageComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lottery-page-component',
            template: __webpack_require__("../../../../../src/app/lottery/lottery-page-component/lottery-page-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lottery/lottery-page-component/lottery-page-component.component.scss")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__service_game_item_service__["a" /* GameItemService */], useClass: __WEBPACK_IMPORTED_MODULE_1__service_game_item_service__["a" /* GameItemService */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__service_game_controller_service__["a" /* GameControllerService */], useClass: __WEBPACK_IMPORTED_MODULE_2__service_game_controller_service__["a" /* GameControllerService */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__service_game_coin_service__["a" /* GameCoinService */], useClass: __WEBPACK_IMPORTED_MODULE_3__service_game_coin_service__["a" /* GameCoinService */]
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__service_game_item_service__["a" /* GameItemService */], __WEBPACK_IMPORTED_MODULE_2__service_game_controller_service__["a" /* GameControllerService */], __WEBPACK_IMPORTED_MODULE_3__service_game_coin_service__["a" /* GameCoinService */]])
    ], LotteryPageComponentComponent);
    return LotteryPageComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lottery/service/game-coin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_item_service__ = __webpack_require__("../../../../../src/app/lottery/service/game-item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameCoinService = /** @class */ (function () {
    function GameCoinService(gameItemService) {
        this.gameItemService = gameItemService;
        this.gameCoin = {
            totalCoin: 0,
            usedCoin: 0,
            winCoin: 0
        };
    }
    // method
    GameCoinService.prototype.addTotalCoin = function (value) {
        this.gameCoin.totalCoin += value;
    };
    // 下注
    GameCoinService.prototype.plusCoin = function (item) {
        if (this.gameCoin.totalCoin >= (this.gameCoin.usedCoin + item.price)) {
            item.count += 1;
            this.gameCoin.usedCoin += item.price;
        }
    };
    GameCoinService.prototype.minusCoin = function (item) {
        if (item.count > 0) {
            item.count -= 1;
            this.gameCoin.usedCoin -= item.price;
        }
    };
    // 重設
    GameCoinService.prototype.resetPlayCoin = function () {
        this.gameCoin.usedCoin = 0;
        this.gameCoin.winCoin = 0;
        this.gameItemService.items.forEach(function (value, index) {
            value.count = 0;
        });
    };
    // 結算
    GameCoinService.prototype.calculateStart = function () {
        var activeId = this.gameItemService.getActiveId();
        var winItem = this.gameItemService.items.filter(function (GameItem) { return GameItem.id === activeId; })[0];
        winItem.isActive = true;
        this.gameCoin.winCoin = winItem.count * winItem.price * 2;
    };
    GameCoinService.prototype.calculateEnd = function () {
        this.gameCoin.totalCoin -= this.gameCoin.usedCoin;
        this.gameCoin.totalCoin += this.gameCoin.winCoin;
        this.resetPlayCoin();
        this.gameItemService.resetItemActive();
    };
    GameCoinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_item_service__["a" /* GameItemService */]])
    ], GameCoinService);
    return GameCoinService;
}());



/***/ }),

/***/ "../../../../../src/app/lottery/service/game-controller.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameControllerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_item_service__ = __webpack_require__("../../../../../src/app/lottery/service/game-item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameControllerService = /** @class */ (function () {
    function GameControllerService(gameItemService) {
        this.gameItemService = gameItemService;
        this.gameControl = {
            isStart: false,
            isGet: false,
            gameInterval: null
        };
    }
    // 開始遊戲
    GameControllerService.prototype.playGame = function () {
        var _this = this;
        /*
        let t = null;
        let nextCount = 0;

        this.speedSec = 200;
        
        this.gameControl.gameInterval = setInterval(() => {

        // 自動停止
        if (nextCount > 400) {
            this.stopGame();
        }
        
        // 由慢至快跳動項目
        if (t === null) {
            t = setTimeout(() => {
                this.gameItemService.setNextItem();

                if (this.speedSec > 10) {
                    this.speedSec -= 10;
                }

                nextCount ++;

                clearTimeout(t);
                t = null;
            }, this.speedSec);
        }
      
        }, 10);
        */
        this.gameControl.gameInterval = setInterval(function () {
            _this.gameItemService.setNextItem();
        }, 10);
        this.setIsStart();
    };
    GameControllerService.prototype.stopGame = function () {
        clearInterval(this.gameControl.gameInterval);
        this.setIsStop();
    };
    GameControllerService.prototype.setIsStart = function () {
        this.gameControl.isStart = true;
        this.gameControl.isGet = false;
    };
    GameControllerService.prototype.setIsStop = function () {
        this.gameControl.isGet = true;
    };
    GameControllerService.prototype.setIsGet = function () {
        this.gameControl.isStart = false;
        this.gameControl.isGet = false;
    };
    GameControllerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_item_service__["a" /* GameItemService */]])
    ], GameControllerService);
    return GameControllerService;
}());



/***/ }),

/***/ "../../../../../src/app/lottery/service/game-item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameItemService = /** @class */ (function () {
    function GameItemService() {
        // 初始值為空陣列
        // 基本項目
        this.items = [];
        // 項目清單
        this.list = [];
    }
    GameItemService.prototype.add = function (value) {
        this.items.push(value);
    };
    GameItemService.prototype.clear = function () {
        this.items = [];
        this.list = [];
    };
    // 產生項目清單
    GameItemService.prototype.getRandomList = function () {
        var size = this.items.length - 1;
        for (var loop = 0; loop < 24; loop++) {
            var index = Math.round(Math.random() * size);
            // 複製物件
            var gameItem = Object.assign({}, this.items[index]);
            this.list.push(gameItem);
        }
    };
    GameItemService.prototype.getActive = function () {
        for (var index = 0; index < this.list.length; index++) {
            if (this.list[index].isActive === true) {
                return this.list[index];
            }
        }
        return this.list[0];
    };
    GameItemService.prototype.getActiveIndex = function () {
        return this.list.indexOf(this.getActive());
    };
    GameItemService.prototype.getListNextIndex = function () {
        var activeIndex = this.getActiveIndex();
        return (activeIndex > this.list.length - 2) ? 0 : (activeIndex + 1);
    };
    GameItemService.prototype.getActiveId = function () {
        return this.getActive().id;
    };
    GameItemService.prototype.setNextItem = function () {
        var activeIndex = this.getActiveIndex();
        var nextIndex = this.getListNextIndex();
        this.list[activeIndex].isActive = false;
        this.list[nextIndex].isActive = true;
    };
    GameItemService.prototype.resetItemActive = function () {
        this.items.forEach(function (value, index) {
            value.isActive = false;
        });
    };
    GameItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GameItemService);
    return GameItemService;
}());



/***/ }),

/***/ "../../../../../src/app/todo-page-component/todo-page-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<p>\r\n\t\ttodo-page-component works!\r\n\t</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/todo-page-component/todo-page-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-page-component/todo-page-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoPageComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoPageComponentComponent = /** @class */ (function () {
    function TodoPageComponentComponent() {
    }
    TodoPageComponentComponent.prototype.ngOnInit = function () {
    };
    TodoPageComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-page-component',
            template: __webpack_require__("../../../../../src/app/todo-page-component/todo-page-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-page-component/todo-page-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoPageComponentComponent);
    return TodoPageComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map