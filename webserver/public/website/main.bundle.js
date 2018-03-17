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

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_startpage_startpage_component__ = __webpack_require__("../../../../../src/app/components/startpage/startpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_startpage_startpage_component__["a" /* StartpageComponent */], data: { animation: '' } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */], data: { animation: 'login' } },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_2__components_project_project_component__["a" /* ProjectComponent */], data: { animation: 'project' } },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__components_users_users_component__["a" /* UsersComponent */], data: { animation: 'users' } },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__["a" /* RegistrationComponent */], data: { animation: 'registration' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_startpage_startpage_component__ = __webpack_require__("../../../../../src/app/components/startpage/startpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user-detail/user-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_startpage_startpage_component__["a" /* StartpageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerAnimation]=\"getRouteAnimation(route)\">\r\n<app-navbar></app-navbar>\r\n\r\n\r\n\r\n    <router-outlet #route=\"outlet\"></router-outlet>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
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
    function AppComponent() {
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('routerAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* <=> *', [
                        // Initial state of new route
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                            position: 'fixed',
                            width: '100%',
                            transform: 'translateX(-100%)'
                        }), { optional: true }),
                        // move page off screen right on leave
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                            position: 'fixed',
                            width: '100%',
                            transform: 'translateX(100%)'
                        })), { optional: true }),
                        // move page in screen from left to right
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                            opacity: 1,
                            transform: 'translateX(0%)'
                        })), { optional: true }),
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n  input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n.container {\r\n    padding: 16px;\r\n}\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n    <h2>Login Form</h2>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm\">\r\n    <form action=\"/action_page.php\">\r\n      <div class=\"imgcontainer\">\r\n\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <label for=\"uname\">\r\n          <b>Username</b>\r\n        </label>\r\n        <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\r\n\r\n        <label for=\"psw\">\r\n          <b>Password</b>\r\n        </label>\r\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n\r\n        <button type=\"submit\">Login</button>\r\n        <label>\r\n          <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n        <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n        <span class=\"psw\">Forgot\r\n          <a href=\"#\">password?</a>\r\n        </span>\r\n      </div>\r\n    </form>\r\n\r\n\r\n  </div>\r\n  </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 1086px) {\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n\r\n    .navbar-toggle {\r\n        display: block;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid transparent;\r\n        -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);\r\n                box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);\r\n    }\r\n    .navbar-fixed-top {\r\n        top: 0;\r\n        border-width: 0 0 1px;\r\n    }\r\n    .navbar-collapse.collapse {\r\n        display: none!important;\r\n    }\r\n    .navbar-nav {\r\n        float: none!important;\r\n        margin-top: 7.5px;\r\n    }\r\n    .navbar-nav {\r\n        float: inherit ;\r\n    }\r\n    .navbar-nav>li>a {\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n    }\r\n    .collapse.in{\r\n        display:block !important;\r\n    }\r\n  }\r\n    nav {\r\n    font-family: 'Black Ops One';\r\n    font-size: 22px;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: none;\r\n}\r\n    li{\r\n    font-size: 14px;\r\n    background-color: transparent !important;\r\n}\r\n    .navbar-default{\r\n    background-color: initial;\r\n}\r\n    .navbar-default .navbar-brand{\r\n    font-size: 22px;\r\n    color: #ff8b00;\r\n}\r\n    .navbar-default .navbar-nav>li>a {\r\n    color: #b2b2b2;\r\n}\r\n    a:active{\r\n    color:black !important;\r\n}\r\n    @media (min-width: 768px){\r\n.navbar-nav {\r\n    float: inherit;\r\n\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bgImg\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand active\" routerLink=\"/\" routerLinkActive=\"active\">{{title}}</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <div class=\"nav navbar-nav\">\r\n        <li>\r\n          <a routerLink=\"/project\" routerLinkActive=\"active\">Project</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\r\n          </li>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"nav navbar-nav\">\r\n          <a class=\"right\" routerLink=\"/login\" routerLinkActive=\"active\">\r\n            <span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\r\n        </li>\r\n        <li class=\"nav navbar-nav\">\r\n            <a class=\"right\" routerLink=\"/registration\" routerLinkActive=\"active\">\r\n              <span class=\"glyphicon glyphicon-user\"></span> Sign Up</a>\r\n          </li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'BLΛNK Agency Ƹ̵̡Ӝ̵̨̄Ʒ';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat\r\n    vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae\r\n    est. Mauris placerat eleifend leo.</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
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

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/components/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/project.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\ninput{\r\n    color: black;\r\n}\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\ninput[type=text]:focus, input[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n}\r\nbutton:hover {\r\n    opacity:1;\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn, .signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n.container{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <h1>Sign Up</h1>\r\n      <p>Please fill in this form to create an account.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <form action=\"\">\r\n\r\n        <hr>\r\n\r\n        <label for=\"email\">\r\n          <b>Email</b>\r\n        </label>\r\n        <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n        <label for=\"psw\">\r\n          <b>Password</b>\r\n        </label>\r\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n\r\n        <label for=\"psw-repeat\">\r\n          <b>Repeat Password</b>\r\n        </label>\r\n        <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\r\n\r\n        <label>\r\n          <input type=\"checkbox\" checked=\"checked\" name=\"remember\" style=\"margin-bottom:15px\"> Remember me\r\n        </label>\r\n\r\n        <p>By creating an account you agree to our\r\n          <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\r\n\r\n        <div class=\"clearfix\">\r\n          <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n          <button type=\"submit\" class=\"signupbtn\">Sign Up</button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
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

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/registration/registration.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/startpage/startpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin-right: -12px;\r\n}\r\n.navbar-nav>li>a{\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n.txt{\r\n    color: white;\r\n    width: 80%;\r\n    font-size: 15px;\r\n}\r\n.introHeader{\r\n    color: #6b83ff;\r\n    margin-bottom: 30px;\r\n}\r\n.headerIntro{\r\n    font-size: 15px;\r\n}\r\n#constructionTxt{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding-top: 95px;\r\n}\r\n#firstRow{\r\n    margin-top: 30px;\r\n}\r\np{\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\np.overlay>b{\r\n    padding: 16px;\r\n}\r\n.tooltip {\r\n    position: static;\r\n    z-index: 1070;\r\n    display: inline;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 25px;\r\n    font-style: normal;\r\n    font-weight: none;\r\n    line-height: none;\r\n    text-align: none;\r\n    text-align: none;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: normal;\r\n    filter: alpha(opacity=0);\r\n    opacity: 1;\r\n    line-break: auto;\r\n}\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    font-size: 15px;\r\n\r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n#col-sm-5{\r\n    min-width: 50%;\r\n}\r\n.container2{\r\n    width: 600px;\r\n    height: 230px;\r\n    background: white;\r\n    overflow: hidden;\r\n    position: relative;\r\n    right: 9%;\r\n\r\n  }\r\n.diagonal{\r\n    height: 1000px;\r\n    width: 200px;\r\n    overflow: hidden;\r\n    -webkit-transform: rotate(25deg);\r\n            transform: rotate(25deg);\r\n     position: absolute;\r\n     top: -200px;\r\n    }\r\nimg{\r\n       -webkit-transform: rotate(-25deg);\r\n               transform: rotate(-25deg);\r\n      margin-top: -100px;\r\n        margin-left: -300px;\r\n    }\r\n.overlay{\r\n        -webkit-transform: rotate(-25deg);\r\n                transform: rotate(-25deg);\r\n        height: 1000px;\r\n        width: 800px;\r\n        position: absolute;\r\n        top: -50px;\r\n        left: 0;\r\n        background: black;\r\n        opacity: 0;\r\n        color: white;\r\n        -webkit-transition: opacity .5s;\r\n        transition: opacity .5s;\r\n        vertical-align: middle;\r\n        text-align:start;\r\n        }\r\n.overlay:hover{\r\n          opacity: .6;\r\n        }\r\n#d0{\r\n        left: -180px;\r\n        \r\n      }\r\n#d1{\r\n        left: 40px;\r\n      }\r\n#d2{\r\n        left: 260px;\r\n      \r\n      }\r\n#d3{\r\n        left: 480px;\r\n      \r\n      }\r\n#d4{\r\n        left: 700px;\r\n      \r\n      } \r\n      \r\n  \r\n  \r\n    \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/startpage/startpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" id=\"firstRow\">\r\n    <div class=\"col-sm-4\">\r\n\r\n      <div class=\"introHeader\">\r\n        <div class=\"tooltip\">\r\n          Introduction 4.0\r\n          <span class=\"tooltiptext\">Introduction </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\" id=\"col-sm-5\">\r\n      <p class=\"txt\">\r\n        First of all - this Project was never finished, is not finished and will never be finished. This page is currently showing\r\n        companies some of my qualities and technologies I used in the past or I am working with at the present time so they\r\n        can determine a lot faster if I fulfill their demands.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-sm-5 offset-sm-8\">\r\n      <div class=\"container2\">\r\n\r\n        <div class=\"diagonal\" id=\"d0\">\r\n\r\n          <img src=\"https://img00.deviantart.net/889d/i/2014/260/f/0/fairy_tail_manga_lineart_chapter_304_page_18_by_luna_ris-d7zj88d.png\"\r\n          />\r\n          <p class=\"overlay\">\r\n            <b>This is an experiment with css3 - maybe svg or canvas later on - for a 'diagonal layered' preview of some content.</b>\r\n          </p>\r\n\r\n        </div>\r\n\r\n        <div class=\"diagonal\" id=\"d1\">\r\n\r\n          <img src=\"https://lh3.googleusercontent.com/-kNfJ5V6s7UI/WN-tYSSGi0I/AAAAAAABZGk/nmMsX-VP1YIfuB8ZH_nrhp2ZS0gPdlTJQCJoC/w530-h749-n/paoYWOtnf3.jpg\"\r\n          />\r\n          <p class=\"overlay\">\r\n            <b>This is an experiment with css3 - maybe svg or canvas later on - for a 'diagonal layered' preview of some content.</b>\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"diagonal\" id=\"d2\">\r\n\r\n          <img src=\"https://pm1.narvii.com/5989/0847d30d4ba4e7d35de684af5836929bf2f1a7e4_hq.jpg\" />\r\n          <p class=\"overlay\">\r\n            TEST\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"diagonal\" id=\"d3\">\r\n\r\n          <img src=\"https://orig00.deviantart.net/c5ce/f/2017/053/f/5/dragon_ball_super_manga_21_color__first_picture__by_bolman2003jump-db00wev.png\"\r\n          />\r\n          <p class=\"overlay\">\r\n            TEST\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <p id=\"constructionTxt\">\r\n\r\n        <b>- - - - - STILL UNDER CONSTRUCTION - - - - -</b>\r\n        <br>\r\n\r\n        <br>\r\n        <b>Moving on at own risk!!!</b>\r\n\r\n      </p>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" id=\"lastRow\">\r\n    <div class=\"col-sm\">\r\n\r\n\r\n    </div>\r\n    <div class=\"col-sm\">\r\n\r\n\r\n    </div>\r\n    <div class=\"col-sm\">\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/startpage/startpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartpageComponent; });
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

var StartpageComponent = /** @class */ (function () {
    function StartpageComponent() {
    }
    StartpageComponent.prototype.ngOnInit = function () {
    };
    StartpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start',
            template: __webpack_require__("../../../../../src/app/components/startpage/startpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/startpage/startpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartpageComponent);
    return StartpageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n\r\n    <h2>{{ user.name | uppercase }} Express Static Data User Details</h2>\r\n    <div><span>id: </span>{{user.id}}</div>\r\n    <div><span>age: </span>{{user.age}}</div>\r\n  \r\n  </div>\r\n\r\n  <div *ngIf=\"dbUser\">\r\n\r\n      <h2>{{ dbUser.name | uppercase }} Database User Details</h2>\r\n      <div><span>id: </span>{{dbUser.id}}</div>\r\n      <div><span>age: </span>{{dbUser.age}}</div>\r\n    \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/components/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent() {
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__user__["b" /* User */])
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__user__["a" /* DbUser */])
    ], UserDetailComponent.prototype, "dbUser", void 0);
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("../../../../../src/app/components/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbUser; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var DbUser = /** @class */ (function () {
    function DbUser() {
    }
    return DbUser;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    color:white;\r\n}\r\n\r\n.selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n\r\n.users {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n\r\n.users li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n\r\n.users li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n\r\n.row{\r\n    color: white;\r\n    padding-bottom: 35px;\r\n}\r\n\r\nh2{\r\n    color: white;\r\n}\r\n\r\nth{\r\n  padding-right: 15px;\r\n}\r\n\r\ntd{\r\n  padding-right: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <h2>Registered Users</h2>\r\n\r\n      <ul class=\"users\">\r\n        <li *ngFor=\"let user of data\" [class.selected]=\"user === selectedUser\" (click)=\"onSelect(user)\">\r\n          {{user.name}}\r\n        </li>\r\n      </ul>\r\n      <app-user-detail [user]=\"selectedUser\"></app-user-detail>\r\n    </div>\r\n  </div>\r\n\r\n <div class=\"row\">\r\n      <ul class=\"users\">\r\n\r\n          <li *ngFor=\"let dbUser of data2\" [class.selected]=\"dbUser === selectedDbUser\" (click)=\"onSelectDbUser(dbUser)\">\r\n              {{dbUser.name}}\r\n            </li>\r\n  </ul>\r\n  <app-user-detail [dbUser]=\"selectedDbUser\"></app-user-detail>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { USERS } from '../mock-users';

var UsersComponent = /** @class */ (function () {
    // @Input() id2 = '';
    function UsersComponent(backendService) {
        this.backendService = backendService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getDbUsers();
    };
    // getUsers() {
    //  this.backendService.getUsersById().subscribe(data => {
    //    this.name = data[0].Group.GroupName;
    // });
    // }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.backendService.getUsers().subscribe(function (data) {
            console.log(data);
            _this.id = data[0];
            _this.age = data[0];
            _this.name = data[0];
            _this.data = data;
        });
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UsersComponent.prototype.onSelectDbUser = function (dbUser) {
        this.selectedDbUser = dbUser;
    };
    UsersComponent.prototype.getDbUsers = function () {
        var _this = this;
        this.backendService.getDbUsers().subscribe(function (data) {
            console.log(data);
            _this.name2 = data[0];
            _this.id2 = data[0];
            _this.data2 = data.json();
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/users.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
        this.dummyUrl = 'http://localhost/3000/users';
    }
    BackendService.prototype.getAll = function () {
        return this.http.get(this.dummyUrl + '?_sort=id&_order=desc')
            .map(function (response) { return response.json(); });
    };
    // getUsers() {
    //  return this.http.get(this.dummyUrl)
    //    .map(res => res.json());
    // }
    BackendService.prototype.getUsers = function () {
        return this.http.get('http://94.130.24.207:3000/users').map(function (res) { return res.json(); });
    };
    BackendService.prototype.getDbUsers = function () {
        return this.http.get('http://localhost:3000/hallo');
    };
    BackendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BackendService);
    return BackendService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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