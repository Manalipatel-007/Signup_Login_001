"use strict";
(self["webpackChunkProject"] = self["webpackChunkProject"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 8030);
/* harmony import */ var _signup_login_signup_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-login/signup-login.component */ 2515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





const routes = [
    { path: '', component: _signup_login_signup_login_component__WEBPACK_IMPORTED_MODULE_1__.SignupLoginComponent },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent }, // Add this if you have a dashboard component
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _signup_login_signup_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-login/signup-login.component */ 2515);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 8030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, // Add HttpClientModule here
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _signup_login_signup_login_component__WEBPACK_IMPORTED_MODULE_2__.SignupLoginComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule] }); })();


/***/ }),

/***/ 8030:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 251, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap", "rel", "stylesheet"], [1, "task-manager"], [1, "left-bar"], [1, "upper-part"], [1, "actions"], [1, "circle"], [1, "circle-2"], [1, "left-content"], [1, "action-list"], [1, "item"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "feather", "feather-inbox"], ["d", "M22 12h-6l-2 3h-4l-2-3H2"], ["d", "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-star"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "feather", "feather-calendar"], ["width", "18", "height", "18", "x", "3", "y", "4", "rx", "2", "ry", "2"], ["d", "M16 2v4M8 2v4m-5 4h18"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-hash"], ["x1", "4", "y1", "9", "x2", "20", "y2", "9"], ["x1", "4", "y1", "15", "x2", "20", "y2", "15"], ["x1", "10", "y1", "3", "x2", "8", "y2", "21"], ["x1", "16", "y1", "3", "x2", "14", "y2", "21"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-users"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "feather", "feather-trash"], ["d", "M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "category-list"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "feather", "feather-sun"], ["cx", "12", "cy", "12", "r", "5"], ["d", "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-trending-up"], ["points", "23 6 13.5 15.5 8.5 10.5 1 18"], ["points", "17 6 23 6 23 12"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-zap"], ["points", "13 2 3 14 12 14 11 22 21 10 12 10 13 2"], [1, "page-content"], [1, "header"], [1, "content-categories"], [1, "label-wrapper"], ["name", "nav", "type", "radio", "id", "opt-1", 1, "nav-item"], ["for", "opt-1", 1, "category"], ["name", "nav", "type", "radio", "id", "opt-2", "checked", "", 1, "nav-item"], ["for", "opt-2", 1, "category"], ["name", "nav", "type", "radio", "id", "opt-3", 1, "nav-item"], ["for", "opt-3", 1, "category"], ["name", "nav", "type", "radio", "id", "opt-4", 1, "nav-item"], ["for", "opt-4", 1, "category"], [1, "tasks-wrapper"], [1, "task"], ["name", "task", "type", "checkbox", "id", "item-1", "checked", "", 1, "task-item"], ["for", "item-1"], [1, "label-text"], [1, "tag", "approved"], ["name", "task", "type", "checkbox", "id", "item-2", "checked", "", 1, "task-item"], ["for", "item-2"], [1, "tag", "progress"], ["name", "task", "type", "checkbox", "id", "item-3", 1, "task-item"], ["for", "item-3"], [1, "tag", "review"], ["name", "task", "type", "checkbox", "id", "item-4", 1, "task-item"], ["for", "item-4"], ["name", "task", "type", "checkbox", "id", "item-5", 1, "task-item"], ["for", "item-5"], ["name", "task", "type", "checkbox", "id", "item-6", 1, "task-item"], ["for", "item-6"], [1, "header", "upcoming"], ["name", "task", "type", "checkbox", "id", "item-7", 1, "task-item"], ["for", "item-7"], [1, "tag", "waiting"], ["name", "task", "type", "checkbox", "id", "item-8", 1, "task-item"], ["for", "item-8"], ["name", "task", "type", "checkbox", "id", "item-9", 1, "task-item"], ["for", "item-9"], ["name", "task", "type", "checkbox", "id", "item-10", 1, "task-item"], ["for", "item-10"], [1, "right-bar"], [1, "top-part"], [1, "count"], [1, "right-content"], [1, "task-box", "yellow"], [1, "description-task"], [1, "time"], [1, "task-name"], [1, "more-button"], [1, "members"], ["src", "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", "alt", "member"], ["src", "https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80", "alt", "member-2"], ["src", "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", "alt", "member-3"], ["src", "https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80", "alt", "member-4"], [1, "task-box", "blue"], ["src", "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80", "alt", "member"], ["src", "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", "alt", "member-2"], ["src", "https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80", "alt", "member-3"], [1, "task-box", "red"], ["src", "https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80", "alt", "member-2"], ["src", "https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80", "alt", "member-3"], ["src", "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80", "alt", "member-4"], [1, "task-box", "green"], ["src", "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80", "alt", "member"], ["src", "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80", "alt", "member-2"], ["src", "https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80", "alt", "member-3"], ["src", "https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80", "alt", "member-4"], ["src", "https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80", "alt", "member-5"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "polygon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Meetings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Vacation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "polyline", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "polyline", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Festival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "polygon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Concerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Today Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Dashboard Design Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Create a userflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Application Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "In Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Create a Dashboard Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Create a Web Application Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Interactive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "In Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Upcoming Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Dashboard Design Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Waiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Create a userflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Waiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Application Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Waiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Create a Dashboard Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Waiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "08:00 - 09:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Product Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "10:00 - 11:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Design Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "01:00 - 02:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Team Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "03:00 - 04:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Release Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "08:00 - 09:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Release Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "11:00 - 12:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Practise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n  --bg-color: #f5f8ff;\r\n  --main-color: #353536;\r\n  --secondary-color: #8e92a4;\r\n  --main-text-color: #5d606b;\r\n  --secondary-dark-color: #9496a5;\r\n  --tag-color-one: #e0fbf6;\r\n  --tag-color-text-one: #58c2a9;\r\n  --tag-color-two: #ece7fe;\r\n  --tag-color-text-two: #8972f3;\r\n  --tag-color-three: #fde7ea;\r\n  --tag-color-text-three: #e77f89;\r\n  --tag-color-four: #f7f8fc;\r\n  --tag-color-text-four: #a0a6b5;\r\n  --checkbox-color: #009e90;\r\n  --button-color: #49beb7;\r\n  --box-color: #fff1d6;\r\n  --box-color-2: #d3e6ff;\r\n  --box-color-3: #ffd9d9;\r\n  --box-color-4: #daffe5;\r\n  --task-color: #777982;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .top-part[_ngcontent-%COMP%], .item[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  overflow: auto;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 20px;\r\n  font-family: \"DM Sans\", sans-serif;\r\n  font-size: 12px;\r\n  background-image: linear-gradient(21deg, rgba(64, 83, 206, 0.3697003235) 68%, rgba(255, 206, 196, 0.5) 163%), linear-gradient(163deg, rgba(49, 146, 170, 0.0794448997) 86%, rgba(239, 112, 138, 0.5) 40%), linear-gradient(30deg, rgba(76, 79, 173, 0.6173675717) 22%, rgba(237, 106, 134, 0.5) 169%), linear-gradient(48deg, rgba(31, 85, 147, 0.7323890642) 64%, rgba(247, 126, 132, 0.5) 43%);\r\n  background-blend-mode: overlay, multiply, color, normal;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-manager[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  height: 90vh;\r\n  max-height: 900px;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011), 0 0.7px 5.3px rgba(0, 0, 0, 0.016), 0 1.3px 10px rgba(0, 0, 0, 0.02), 0 2.2px 17.9px rgba(0, 0, 0, 0.024), 0 4.2px 33.4px rgba(0, 0, 0, 0.029), 0 10px 80px rgba(0, 0, 0, 0.04);\r\n  overflow: hidden;\r\n}\r\n\r\n.left-bar[_ngcontent-%COMP%] {\r\n  background-color: var(--bg-color);\r\n  width: 230px;\r\n  border-right: 1px solid #e3e7f7;\r\n  position: relative;\r\n}\r\n\r\n.left-content[_ngcontent-%COMP%] {\r\n  padding: 40px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n  color: var(--main-color);\r\n  margin-bottom: 14px;\r\n  font-weight: 500;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 14px;\r\n  height: 14px;\r\n  color: currentcolor;\r\n  margin-right: 10px;\r\n}\r\n\r\n.category-list[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.category-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.actions[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: #fe4d46;\r\n  box-shadow: 14px 0 0 0 #fbc023, 28px 0 0 0 #7dd21f;\r\n}\r\n\r\n.circle-2[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  width: 4px;\r\n  height: 4px;\r\n  background-color: #d5d7e3;\r\n  box-shadow: -6px 0 0 0 #d5d7e3, 6px 0 0 0 #d5d7e3;\r\n}\r\n\r\n.right-bar[_ngcontent-%COMP%] {\r\n  width: 320px;\r\n  border-left: 1px solid #e3e7f7;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.right-bar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: var(--main-text-color);\r\n  margin-left: 30px;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  align-self: flex-end;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 14px;\r\n  height: 14px;\r\n  color: var(--main-color);\r\n  margin-right: 14px;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-color: #623ce8;\r\n  color: #fff;\r\n  justify-content: center;\r\n}\r\n\r\n.right-content[_ngcontent-%COMP%] {\r\n  padding: 10px 40px;\r\n  overflow-y: auto;\r\n  flex: 1;\r\n}\r\n\r\n.task-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border-radius: 12px;\r\n  width: 100%;\r\n  margin: 20px 0;\r\n  padding: 16px;\r\n  cursor: pointer;\r\n  box-shadow: 2px 2px 4px 0px #ebebeb;\r\n}\r\n\r\n.task-box[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.time[_ngcontent-%COMP%] {\r\n  margin-bottom: 6px;\r\n  opacity: 0.4;\r\n  font-size: 10px;\r\n}\r\n\r\n.task-name[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  opacity: 0.6;\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%] {\r\n  background-color: var(--box-color);\r\n}\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n  background-color: var(--box-color-2);\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n  background-color: var(--box-color-3);\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  background-color: var(--box-color-4);\r\n}\r\n\r\n.more-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 3px;\r\n  height: 3px;\r\n  border-radius: 50%;\r\n  background-color: #8e92a4;\r\n  box-shadow: 0 -4px 0 0 #8e92a4, 0 4px 0 0 #8e92a4;\r\n  opacity: 0.4;\r\n  right: 20px;\r\n  top: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.members[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 14px;\r\n}\r\n\r\n.members[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-right: 4px;\r\n  object-fit: cover;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  padding: 40px 20px 0 20px;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n  font-size: 26px;\r\n  color: var(--main-color);\r\n  margin-top: 30px;\r\n}\r\n\r\n.content-categories[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  border-bottom: 1px solid #ddd;\r\n  padding: 20px 0;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: var(--secondary-color);\r\n  border-bottom: 1px solid #ddd;\r\n  transition: 0.4s ease-in;\r\n  padding: 20px 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n#opt-1[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], #opt-2[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], #opt-3[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], #opt-4[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n  color: var(--checkbox-color);\r\n  border-bottom: 2px solid var(--checkbox-color);\r\n}\r\n\r\n.task-item[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.tasks-wrapper[_ngcontent-%COMP%] {\r\n  padding: 30px 0;\r\n  flex: 1;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n  padding-right: 8px;\r\n}\r\n\r\n.task[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: relative;\r\n  margin-bottom: 16px;\r\n  padding-left: 30px;\r\n  color: var(--task-color);\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n}\r\n\r\n.task[_ngcontent-%COMP%]:hover {\r\n  transform: translatex(2px);\r\n}\r\n\r\n.task[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 14px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 2px;\r\n  left: -24px;\r\n  transition: 0.2s ease;\r\n}\r\n\r\n.task-item[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%]:before {\r\n  background-color: var(--checkbox-color);\r\n  border: none;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-size: 10px;\r\n  background-position: center;\r\n  border: 1px solid var(--checkbox-color);\r\n}\r\n\r\n.tag[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  padding: 4px 8px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.tag.approved[_ngcontent-%COMP%] {\r\n  background-color: var(--tag-color-one);\r\n  color: var(--tag-color-text-one);\r\n}\r\n\r\n.tag.progress[_ngcontent-%COMP%] {\r\n  background-color: var(--tag-color-two);\r\n  color: var(--tag-color-text-two);\r\n}\r\n\r\n.tag.review[_ngcontent-%COMP%] {\r\n  background-color: var(--tag-color-three);\r\n  color: var(--tag-color-text-three);\r\n}\r\n\r\n.tag.waiting[_ngcontent-%COMP%] {\r\n  background-color: var(--tag-color-four);\r\n  color: var(--tag-color-text-four);\r\n}\r\n\r\n.upcoming[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ddd;\r\n  padding-bottom: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .left-bar[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .task-manager[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .right-bar[_ngcontent-%COMP%], .page-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n  }\r\n\r\n  .tasks-wrapper[_ngcontent-%COMP%] {\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n  .page-content[_ngcontent-%COMP%] {\r\n    padding: 40px 10px 0 10px;\r\n  }\r\n\r\n  .right-content[_ngcontent-%COMP%] {\r\n    padding: 10px 16px;\r\n  }\r\n\r\n  .category[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0Isd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ1lBQWdZO0VBQ2hZLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtOQUErTjtFQUMvTixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLDRCQUE0QjtFQUM1Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWiw4U0FBOFM7RUFDOVMsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1iZy1jb2xvcjogI2Y1ZjhmZjtcclxuICAtLW1haW4tY29sb3I6ICMzNTM1MzY7XHJcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM4ZTkyYTQ7XHJcbiAgLS1tYWluLXRleHQtY29sb3I6ICM1ZDYwNmI7XHJcbiAgLS1zZWNvbmRhcnktZGFyay1jb2xvcjogIzk0OTZhNTtcclxuICAtLXRhZy1jb2xvci1vbmU6ICNlMGZiZjY7XHJcbiAgLS10YWctY29sb3ItdGV4dC1vbmU6ICM1OGMyYTk7XHJcbiAgLS10YWctY29sb3ItdHdvOiAjZWNlN2ZlO1xyXG4gIC0tdGFnLWNvbG9yLXRleHQtdHdvOiAjODk3MmYzO1xyXG4gIC0tdGFnLWNvbG9yLXRocmVlOiAjZmRlN2VhO1xyXG4gIC0tdGFnLWNvbG9yLXRleHQtdGhyZWU6ICNlNzdmODk7XHJcbiAgLS10YWctY29sb3ItZm91cjogI2Y3ZjhmYztcclxuICAtLXRhZy1jb2xvci10ZXh0LWZvdXI6ICNhMGE2YjU7XHJcbiAgLS1jaGVja2JveC1jb2xvcjogIzAwOWU5MDtcclxuICAtLWJ1dHRvbi1jb2xvcjogIzQ5YmViNztcclxuICAtLWJveC1jb2xvcjogI2ZmZjFkNjtcclxuICAtLWJveC1jb2xvci0yOiAjZDNlNmZmO1xyXG4gIC0tYm94LWNvbG9yLTM6ICNmZmQ5ZDk7XHJcbiAgLS1ib3gtY29sb3ItNDogI2RhZmZlNTtcclxuICAtLXRhc2stY29sb3I6ICM3Nzc5ODI7XHJcbn1cclxuXHJcbi50b3AtcGFydCAuY291bnQsIC50b3AtcGFydCwgLml0ZW0sIGJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRNIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIxZGVnLCByZ2JhKDY0LCA4MywgMjA2LCAwLjM2OTcwMDMyMzUpIDY4JSwgcmdiYSgyNTUsIDIwNiwgMTk2LCAwLjUpIDE2MyUpLCBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCByZ2JhKDQ5LCAxNDYsIDE3MCwgMC4wNzk0NDQ4OTk3KSA4NiUsIHJnYmEoMjM5LCAxMTIsIDEzOCwgMC41KSA0MCUpLCBsaW5lYXItZ3JhZGllbnQoMzBkZWcsIHJnYmEoNzYsIDc5LCAxNzMsIDAuNjE3MzY3NTcxNykgMjIlLCByZ2JhKDIzNywgMTA2LCAxMzQsIDAuNSkgMTY5JSksIGxpbmVhci1ncmFkaWVudCg0OGRlZywgcmdiYSgzMSwgODUsIDE0NywgMC43MzIzODkwNjQyKSA2NCUsIHJnYmEoMjQ3LCAxMjYsIDEzMiwgMC41KSA0MyUpO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheSwgbXVsdGlwbHksIGNvbG9yLCBub3JtYWw7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLW1hbmFnZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBtYXgtaGVpZ2h0OiA5MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDAuM3B4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMTEpLCAwIDAuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wMTYpLCAwIDEuM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAyKSwgMCAyLjJweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjAyNCksIDAgNC4ycHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wMjkpLCAwIDEwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sZWZ0LWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlN2Y3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxlZnQtY29udGVudCB7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLml0ZW0gc3ZnIHtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgY29sb3I6IGN1cnJlbnRjb2xvcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1saXN0IHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5jYXRlZ29yeS1saXN0IC5pdGVtIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNGQ0NjtcclxuICBib3gtc2hhZG93OiAxNHB4IDAgMCAwICNmYmMwMjMsIDI4cHggMCAwIDAgIzdkZDIxZjtcclxufVxyXG5cclxuLmNpcmNsZS0yIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkN2UzO1xyXG4gIGJveC1zaGFkb3c6IC02cHggMCAwIDAgI2Q1ZDdlMywgNnB4IDAgMCAwICNkNWQ3ZTM7XHJcbn1cclxuXHJcbi5yaWdodC1iYXIge1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlM2U3Zjc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5yaWdodC1iYXIgLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udG9wLXBhcnQge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuLnRvcC1wYXJ0IHN2ZyB7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbn1cclxuLnRvcC1wYXJ0IC5jb3VudCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyM2NlODtcclxuICBjb2xvcjogI2ZmZjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJpZ2h0LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50YXNrLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4ICNlYmViZWI7XHJcbn1cclxuLnRhc2stYm94OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi50YXNrLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvci0yKTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yLTMpO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvci00KTtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDNweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOTJhNDtcclxuICBib3gtc2hhZG93OiAwIC00cHggMCAwICM4ZTkyYTQsIDAgNHB4IDAgMCAjOGU5MmE0O1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICByaWdodDogMjBweDtcclxuICB0b3A6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVtYmVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcbi5tZW1iZXJzIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogNDBweCAyMHB4IDAgMjBweDtcclxufVxyXG4ucGFnZS1jb250ZW50IC5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY2F0ZWdvcmllcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jb3B0LTE6Y2hlY2tlZCArIGxhYmVsLFxyXG4jb3B0LTI6Y2hlY2tlZCArIGxhYmVsLFxyXG4jb3B0LTM6Y2hlY2tlZCArIGxhYmVsLFxyXG4jb3B0LTQ6Y2hlY2tlZCArIGxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jaGVja2JveC1jb2xvcik7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YXNrcy13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRhc2stY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50YXNrOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMnB4KTtcclxufVxyXG4udGFzayBsYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5sYWJlbCAubGFiZWwtdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5sYWJlbCAubGFiZWwtdGV4dDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBsZWZ0OiAtMjRweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW06Y2hlY2tlZCArIGxhYmVsIC5sYWJlbC10ZXh0OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzIwIDYgOSAxNyA0IDEyJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGVja2JveC1jb2xvcik7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLnRhZy5hcHByb3ZlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFnLWNvbG9yLW9uZSk7XHJcbiAgY29sb3I6IHZhcigtLXRhZy1jb2xvci10ZXh0LW9uZSk7XHJcbn1cclxuLnRhZy5wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFnLWNvbG9yLXR3byk7XHJcbiAgY29sb3I6IHZhcigtLXRhZy1jb2xvci10ZXh0LXR3byk7XHJcbn1cclxuLnRhZy5yZXZpZXcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhZy1jb2xvci10aHJlZSk7XHJcbiAgY29sb3I6IHZhcigtLXRhZy1jb2xvci10ZXh0LXRocmVlKTtcclxufVxyXG4udGFnLndhaXRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhZy1jb2xvci1mb3VyKTtcclxuICBjb2xvcjogdmFyKC0tdGFnLWNvbG9yLXRleHQtZm91cik7XHJcbn1cclxuXHJcbi51cGNvbWluZyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAubGVmdC1iYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAudGFzay1tYW5hZ2VyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWJhcixcclxuLnBhZ2UtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnRhc2tzLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNDBweCAxMHB4IDAgMTBweDtcclxuICB9XHJcblxyXG4gIC5yaWdodC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 6636:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);


class AuthService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://your-backend-api-url'; // Replace with your backend API URL
    }
    // Method to sign up user
    signUp(userData) {
        return this.http.post(`${this.apiUrl}/signup`, userData);
    }
    // Method to send OTP
    sendOtp(email) {
        return this.http.post(`${this.apiUrl}/send-otp`, { email });
    }
    // Method to verify OTP
    verifyOtp(otp) {
        return this.http.post(`${this.apiUrl}/verify-otp`, { otp });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2515:
/*!********************************************************!*\
  !*** ./src/app/signup-login/signup-login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupLoginComponent": () => (/* binding */ SignupLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 6636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);





function SignupLoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
} }
function SignupLoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
function SignupLoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupLoginComponent_div_27_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.otp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupLoginComponent_div_27_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.verifyOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Verify OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.otp);
} }
function SignupLoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.loginErrorMessage, " ");
} }
function SignupLoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.loginSuccessMessage, " ");
} }
class SignupLoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.otp = '';
        this.otpSent = false;
        this.isVerified = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.username = '';
        this.number = '';
        this.password = '';
        this.loginEmail = ''; // Add this line
        this.loginErrorMessage = ''; // Add this line
        this.loginSuccessMessage = ''; // Add this line
    }
    // Method for signup
    signUp() {
        if (this.username && this.email && this.number && this.password) {
            const userData = {
                username: this.username,
                email: this.email,
                number: this.number,
                password: this.password,
            };
            // Store user data in local storage
            localStorage.setItem('userData', JSON.stringify(userData));
            this.successMessage = 'Sign up successful!';
            this.errorMessage = '';
        }
        else {
            this.errorMessage = 'Please fill in all the fields.';
            this.successMessage = '';
        }
    }
    // Method to send OTP
    sendOtp() {
        if (this.loginEmail) { // Use loginEmail instead of email
            this.authService.sendOtp(this.loginEmail).subscribe((response) => {
                this.otpSent = true;
                this.loginErrorMessage = '';
                this.loginSuccessMessage = 'OTP sent successfully!';
            }, (error) => {
                this.loginErrorMessage = 'Error sending OTP. Please try again.';
            });
        }
        else {
            this.loginErrorMessage = 'Please enter a valid email address.';
        }
    }
    // Method to verify OTP
    verifyOtp() {
        if (this.otp) {
            this.authService.verifyOtp(this.otp).subscribe((response) => {
                this.isVerified = true;
                this.loginSuccessMessage = 'Login successful!';
                this.loginErrorMessage = '';
                this.router.navigate(['/dashboard']);
            }, (error) => {
                this.loginErrorMessage = 'Invalid OTP. Please try again.';
            });
        }
        else {
            this.loginErrorMessage = 'Please enter the OTP.';
        }
    }
}
SignupLoginComponent.ɵfac = function SignupLoginComponent_Factory(t) { return new (t || SignupLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SignupLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupLoginComponent, selectors: [["app-signup-login"]], decls: 30, vars: 10, consts: [["href", "https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap", "rel", "stylesheet"], [1, "main"], ["type", "checkbox", "id", "chk", "aria-hidden", "true"], [1, "signup"], [3, "ngSubmit"], ["for", "chk", "aria-hidden", "true"], ["type", "text", "name", "username", "placeholder", "User name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "number", "placeholder", "Number", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "login"], ["type", "email", "name", "loginEmail", "placeholder", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "click"], [4, "ngIf"], [1, "success-message"], [1, "error-message"], ["type", "text", "name", "otp", "placeholder", "Enter OTP", "required", "", 3, "ngModel", "ngModelChange"]], template: function SignupLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Slide Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupLoginComponent_Template_form_ngSubmit_9_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupLoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupLoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupLoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupLoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SignupLoginComponent_div_18_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SignupLoginComponent_div_19_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupLoginComponent_Template_input_ngModelChange_24_listener($event) { return ctx.loginEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupLoginComponent_Template_button_click_25_listener() { return ctx.sendOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Send OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SignupLoginComponent_div_27_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SignupLoginComponent_div_28_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SignupLoginComponent_div_29_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.otpSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginSuccessMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["body[_ngcontent-%COMP%]{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 100vh;\r\n\tfont-family: 'Jost', sans-serif;\r\n\tbackground: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);\r\n}\r\n.main[_ngcontent-%COMP%]{\r\n\twidth: 350px;\r\n\theight: 500px;\r\n\tbackground: red;\r\n\toverflow: hidden;\r\n\tbackground: url(\"https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38\") no-repeat center/ cover;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 5px 20px 50px #000;\r\n}\r\n#chk[_ngcontent-%COMP%]{\r\n\tdisplay: none;\r\n}\r\n.signup[_ngcontent-%COMP%]{\r\n\tposition: relative;\r\n\twidth:100%;\r\n\theight: 100%;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n\tcolor: #fff;\r\n\tfont-size: 2.1em;\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tmargin: 40px;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n\ttransition: .5s ease-in-out;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n\twidth: 60%;\r\n\theight: 5px;\r\n\tbackground: #e0dede;\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tmargin: 15px auto;\r\n\tpadding: 12px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n\twidth: 60%;\r\n\theight: 30px;\r\n\tmargin: 10px auto;\r\n\tjustify-content: center;\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\tbackground: #573b8a;\r\n\tfont-size: 1em;\r\n\tfont-weight: bold;\r\n\tmargin-top: 30px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\ttransition: .2s ease-in;\r\n\tcursor: pointer;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n\tbackground: #6d44b8;\r\n}\r\n.login[_ngcontent-%COMP%]{\r\n\theight: 460px;\r\n\tbackground: #eee;\r\n\tborder-radius: 60% / 10%;\r\n\ttransform: translateY(-180px);\r\n\ttransition: .8s ease-in-out;\r\n}\r\n.login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\tcolor: #573b8a;\r\n\ttransform: scale(.6);\r\n}\r\n#chk[_ngcontent-%COMP%]:checked    ~ .login[_ngcontent-%COMP%]{\r\n\ttransform: translateY(-500px);\r\n}\r\n#chk[_ngcontent-%COMP%]:checked    ~ .login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\ttransform: scale(1);\t\r\n}\r\n#chk[_ngcontent-%COMP%]:checked    ~ .signup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\ttransform: scale(.6);\r\n}\r\n.error-message[_ngcontent-%COMP%], .success-message[_ngcontent-%COMP%] {\r\n    color: white; \r\n    font-weight: bold;\r\n    margin-top: 20px; \r\n    text-align: center; \r\n    width: 100%; \r\n}\r\n.success-message[_ngcontent-%COMP%] {\r\n    color: green; \r\n}\r\n.error-message[_ngcontent-%COMP%] {\r\n    color: red; \r\n}\r\n\r\n.success-message[_ngcontent-%COMP%] {\r\n    color: green;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n}\r\n.error-message[_ngcontent-%COMP%] {\r\n    color: red;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #4CAF50;\r\n    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsK0JBQStCO0NBQy9CLGlFQUFpRTtBQUNsRTtBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHVXQUF1VztDQUN2VyxtQkFBbUI7Q0FDbkIsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixjQUFjO0NBQ2QsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4Qiw2QkFBNkI7Q0FDN0IsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2Qsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msb0JBQW9CO0FBQ3JCO0FBRUE7SUFDSSxZQUFZLEVBQUUsZ0RBQWdEO0lBQzlELGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBRSx3QkFBd0I7SUFDMUMsa0JBQWtCLEVBQUUsMEJBQTBCO0lBQzlDLFdBQVcsRUFBRSwrQ0FBK0M7QUFDaEU7QUFFQTtJQUNJLFlBQVksRUFBRSwwQkFBMEI7QUFDNUM7QUFFQTtJQUNJLFVBQVUsRUFBRSx3QkFBd0I7QUFDeEM7QUFJQSxzQ0FBc0M7QUFDdEM7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDBDQUEwQztBQUM5QyIsImZpbGUiOiJzaWdudXAtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBmMGMyOSwgIzMwMmI2MywgIzI0MjQzZSk7XHJcbn1cclxuLm1haW57XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdGhlaWdodDogNTAwcHg7XHJcblx0YmFja2dyb3VuZDogcmVkO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0YmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9kb2MtMDgtMmMtZG9jcy5nb29nbGV1c2VyY29udGVudC5jb20vZG9jcy9zZWN1cmVzYy82OGM5MHNtaWdsaWhuZzk1MzRtdnFtcTE5NDZkbWlzNS9mbzBwaWNzcDFuaGl1Y21jMGwyNXMyOXJlc3BncHI0ai8xNjMxNTI0Mjc1MDAwLzAzNTIyMzYwOTYwOTIyMjk4Mzc0LzAzNTIyMzYwOTYwOTIyMjk4Mzc0LzFTeDBqaGRwRXBuTkl5ZFM0cm5ONGtIU0p0VTFFeVdrYT9lPXZpZXcmYXV0aHVzZXI9MCZub25jZT1nY3JvY2VwZ2JiMTdtJnVzZXI9MDM1MjIzNjA5NjA5MjIyOTgzNzQmaGFzaD10ZmhnYnM4NmthNmRpdm8zbGxidnA5M21nNGNzdmIzOFwiKSBuby1yZXBlYXQgY2VudGVyLyBjb3ZlcjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJveC1zaGFkb3c6IDVweCAyMHB4IDUwcHggIzAwMDtcclxufVxyXG4jY2hre1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNpZ251cHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxubGFiZWx7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAyLjFlbTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbjogNDBweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0e1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0aGVpZ2h0OiA1cHg7XHJcblx0YmFja2dyb3VuZDogI2UwZGVkZTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbjogMTVweCBhdXRvO1xyXG5cdHBhZGRpbmc6IDEycHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmJ1dHRvbntcclxuXHR3aWR0aDogNjAlO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRtYXJnaW46IDEwcHggYXV0bztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjNTczYjhhO1xyXG5cdGZvbnQtc2l6ZTogMWVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHRyYW5zaXRpb246IC4ycyBlYXNlLWluO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5idXR0b246aG92ZXJ7XHJcblx0YmFja2dyb3VuZDogIzZkNDRiODtcclxufVxyXG4ubG9naW57XHJcblx0aGVpZ2h0OiA0NjBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZWVlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDYwJSAvIDEwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4MHB4KTtcclxuXHR0cmFuc2l0aW9uOiAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxvZ2luIGxhYmVse1xyXG5cdGNvbG9yOiAjNTczYjhhO1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG59XHJcblxyXG4jY2hrOmNoZWNrZWQgfiAubG9naW57XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XHJcbn1cclxuI2NoazpjaGVja2VkIH4gLmxvZ2luIGxhYmVse1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XHRcclxufVxyXG4jY2hrOmNoZWNrZWQgfiAuc2lnbnVwIGxhYmVse1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoLjYpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSwgLnN1Y2Nlc3MtbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7IC8qIE9yIGFueSBvdGhlciBjb2xvciBkZXBlbmRpbmcgb24geW91ciBkZXNpZ24gKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgLyogTWFyZ2luIGZyb20gdGhlIHRvcCAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgYWxpZ24gdGhlIHRleHQgKi9cclxuICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgZnVsbCB3aWR0aCB0byBjZW50ZXIgYWxpZ24gcHJvcGVybHkgKi9cclxufVxyXG5cclxuLnN1Y2Nlc3MtbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47IC8qIFN1Y2Nlc3MgbWVzc2FnZSBjb2xvciAqL1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkOyAvKiBFcnJvciBtZXNzYWdlIGNvbG9yICovXHJcbn1cclxuXHJcblxyXG5cclxuLyogU3VjY2VzcyBhbmQgRXJyb3IgTWVzc2FnZSBTdHlsaW5nICovXHJcbi5zdWNjZXNzLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBTdHlsaW5nICovXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vKiBJbnB1dCBGaWVsZCBGb2N1cyBTdHlsZSAqL1xyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map