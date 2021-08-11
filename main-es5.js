function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/elements */
    "./node_modules/@angular/elements/__ivy_ngcc__/fesm2015/elements.js");
    /* harmony import */


    var _position_position_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./position/position.component */
    "./src/app/position/position.component.ts");
    /* harmony import */


    var _main_ausloser_main_ausloser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-ausloser/main-ausloser.component */
    "./src/app/main-ausloser/main-ausloser.component.ts");

    var AppModule = /*#__PURE__*/function () {
      function AppModule(injector) {
        _classCallCheck(this, AppModule);

        this.injector = injector;
      }

      _createClass(AppModule, [{
        key: "ngDoBootstrap",
        value: function ngDoBootstrap() {
          var table = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_2__["createCustomElement"])(_main_ausloser_main_ausloser_component__WEBPACK_IMPORTED_MODULE_4__["MainAusloserComponent"], {
            injector: this.injector
          });
          customElements.define('app-component', table);
        }
      }]);

      return AppModule;
    }();

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_main_ausloser_main_ausloser_component__WEBPACK_IMPORTED_MODULE_4__["MainAusloserComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_position_position_component__WEBPACK_IMPORTED_MODULE_3__["PositionComponent"], _main_ausloser_main_ausloser_component__WEBPACK_IMPORTED_MODULE_4__["MainAusloserComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_position_position_component__WEBPACK_IMPORTED_MODULE_3__["PositionComponent"], _main_ausloser_main_ausloser_component__WEBPACK_IMPORTED_MODULE_4__["MainAusloserComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_main_ausloser_main_ausloser_component__WEBPACK_IMPORTED_MODULE_4__["MainAusloserComponent"]],
          entryComponents: [_main_ausloser_main_ausloser_component__WEBPACK_IMPORTED_MODULE_4__["MainAusloserComponent"]]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/entities/PositionSettings.ts":
  /*!**********************************************!*\
    !*** ./src/app/entities/PositionSettings.ts ***!
    \**********************************************/

  /*! exports provided: PositionSettings */

  /***/
  function srcAppEntitiesPositionSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionSettings", function () {
      return PositionSettings;
    });

    var PositionSettings = function PositionSettings(name, marginLeft, marginTop, isSelected) {
      _classCallCheck(this, PositionSettings);

      this.Name = name;
      this.MarginLeft = marginLeft + "px";
      this.MarginTop = marginTop + "px";
      this.IsSelected = isSelected;
    };
    /***/

  },

  /***/
  "./src/app/entities/positionData.ts":
  /*!******************************************!*\
    !*** ./src/app/entities/positionData.ts ***!
    \******************************************/

  /*! exports provided: PositionData */

  /***/
  function srcAppEntitiesPositionDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionData", function () {
      return PositionData;
    });

    var PositionData = function PositionData(name, marginLeft, marginTop) {
      _classCallCheck(this, PositionData);

      this.Name = name;
      this.MarginLeft = marginLeft + "px";
      this.MarginTop = marginTop + "px";
    };
    /***/

  },

  /***/
  "./src/app/main-ausloser/main-ausloser.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main-ausloser/main-ausloser.component.ts ***!
    \**********************************************************/

  /*! exports provided: MainAusloserComponent */

  /***/
  function srcAppMainAusloserMainAusloserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainAusloserComponent", function () {
      return MainAusloserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _entities_positionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../entities/positionData */
    "./src/app/entities/positionData.ts");
    /* harmony import */


    var _entities_PositionSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../entities/PositionSettings */
    "./src/app/entities/PositionSettings.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _position_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../position/position.component */
    "./src/app/position/position.component.ts");

    function MainAusloserComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAusloserComponent_div_5_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pst_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.selectPositionSetting(pst_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pst_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pst_r3.Name, " ");
      }
    }

    function MainAusloserComponent_div_5_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAusloserComponent_div_5_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var pst_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.selectPositionSetting(pst_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pst_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pst_r3.Name, " ");
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "margin-left": a0,
        "margin-top": a1
      };
    };

    function MainAusloserComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainAusloserComponent_div_5_div_2_Template, 2, 1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainAusloserComponent_div_5_div_3_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pst_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, pst_r3.MarginLeft, pst_r3.MarginTop));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pst_r3.IsSelected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !pst_r3.IsSelected);
      }
    }

    function MainAusloserComponent_position_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "position", 22);
      }

      if (rf & 2) {
        var pst_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("positionName", pst_r14.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, pst_r14.MarginLeft, pst_r14.MarginTop));
      }
    }

    var _c1 = function _c1() {
      return {
        "display": "block"
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        "width": a0,
        "height": a1
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "width": a0
      };
    };

    var MainAusloserComponent = /*#__PURE__*/function () {
      function MainAusloserComponent() {
        _classCallCheck(this, MainAusloserComponent);

        this.staticPossiblePositions = new Array("GRKD", "MS", "MLD", "1", "2", "3", "4", "5", "6");
        this.reserveLeute = 0;
        this.positions = new Array();
        this.possiblePositions = new Array("GRKD", "MS", "MLD", "1", "2", "3", "4", "5", "6");
        this.displaySettings = false;
      }

      _createClass(MainAusloserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupSettings();
        }
      }, {
        key: "setupSettings",
        value: function setupSettings() {
          var columns;

          if (window.innerHeight > window.innerWidth) {
            this.settingsHeight = "550px";
            this.settingsWidth = "325px";
            columns = 3;
          } else {
            this.settingsHeight = "324px";
            this.settingsWidth = "520px";
            columns = 5;
          }

          this.possibleForSelection = new Array();
          var marginLeftCounter = 0;
          var marginTopCounter = 0;

          for (var i = 0; i < this.staticPossiblePositions.length; i++) {
            if (i % columns == 0 && i != 0) {
              marginTopCounter += 100;
              marginLeftCounter = 0;
            }

            var positionData = new _entities_PositionSettings__WEBPACK_IMPORTED_MODULE_2__["PositionSettings"](this.staticPossiblePositions[i], marginLeftCounter, marginTopCounter, true);
            this.possibleForSelection.push(positionData);
            marginLeftCounter += 100;
          }

          if (columns != 3) {
            this.selectionMarginLeft = marginLeftCounter + "px";
            this.selectionMarginTop = marginTopCounter + "px";
          } else {
            this.selectionMarginTop = marginTopCounter + 100 + "px";
          }
        }
      }, {
        key: "selectPositionSetting",
        value: function selectPositionSetting(positionSetting) {
          this.possibleForSelection.find(function (x) {
            return x.Name == positionSetting.Name;
          }).IsSelected = !positionSetting.IsSelected;
        }
      }, {
        key: "saveSettings",
        value: function saveSettings(reserveLeute) {
          this.reserveLeute = reserveLeute;
          this.displaySettings = false;
          this.clear();
        }
      }, {
        key: "fillPossiblePositions",
        value: function fillPossiblePositions() {
          var _this = this;

          this.possiblePositions = new Array();
          this.possibleForSelection.forEach(function (element) {
            if (element.IsSelected) {
              _this.possiblePositions.push(element.Name);
            }
          });
        }
      }, {
        key: "getColumns",
        value: function getColumns() {
          var columns;

          if (window.innerHeight > window.innerWidth) {
            this.positionsContainerWidth = "340px";
            columns = 3;
          } else {
            this.positionsContainerWidth = "700px";
            columns = 6;
          }

          return columns;
        }
      }, {
        key: "generate",
        value: function generate() {
          this.clear();
          var columns = this.getColumns();

          if (this.reserveLeute > 0) {
            for (var i = 0; i < this.reserveLeute; i++) {
              this.possiblePositions.push("RES");
            }
          }

          var count = this.possiblePositions.length;
          var marginLeftCounter = 0;
          var marginTopCounter = 0;

          for (var _i = 0; _i < count; _i++) {
            if (_i % columns == 0 && _i != 0) {
              marginTopCounter += 120;
              marginLeftCounter = 0;
            }

            var random = Math.trunc(Math.random() * this.possiblePositions.length);
            var positionData = new _entities_positionData__WEBPACK_IMPORTED_MODULE_1__["PositionData"](this.possiblePositions[random], marginLeftCounter, marginTopCounter);
            this.positions.push(positionData);
            this.possiblePositions.splice(random, 1);
            marginLeftCounter += 120;
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.positions = new Array();
          this.fillPossiblePositions();
        }
      }, {
        key: "openSettings",
        value: function openSettings() {
          this.setupSettings();
          this.displaySettings = true;
        }
      }]);

      return MainAusloserComponent;
    }();

    MainAusloserComponent.ɵfac = function MainAusloserComponent_Factory(t) {
      return new (t || MainAusloserComponent)();
    };

    MainAusloserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainAusloserComponent,
      selectors: [["main-ausloser"]],
      decls: 31,
      vars: 15,
      consts: [[1, "overlay", "noselect", 3, "ngStyle"], [1, "overlay-content", "noselect", 3, "ngStyle"], [1, "overlay-main", "noselect"], [1, "noselect", 2, "margin-left", "2%"], ["style", "position: absolute;", "class", "noselect", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "RES", 1, "overlay-input", 3, "ngStyle"], ["reserveLeute", ""], ["align", "center"], [1, "button", 3, "click"], [1, "main-content"], [2, "width", "100%"], [2, "width", "33%"], [1, "content-button", 2, "margin-right", "10px", 3, "click"], [2, "text-align", "center"], [2, "margin", "auto", "display", "inline-flex", 3, "ngStyle"], ["class", "circle", 3, "ngStyle", "positionName", 4, "ngFor", "ngForOf"], [1, "noselect", 2, "position", "absolute", 3, "ngStyle"], [1, "noselect"], ["class", "noselect", "style", "background:#0c71e4;height: 80px;width: 80px; border-radius: 3rem;text-align: center;line-height: 80px;font-size: 22px;", 3, "click", 4, "ngIf"], ["class", "noselect", "style", "height: 80px;width: 80px;text-align: center;line-height: 80px;font-size: 22px;background:#cfcfcf;border-radius: 3rem;", 3, "click", 4, "ngIf"], [1, "noselect", 2, "background", "#0c71e4", "height", "80px", "width", "80px", "border-radius", "3rem", "text-align", "center", "line-height", "80px", "font-size", "22px", 3, "click"], [1, "noselect", 2, "height", "80px", "width", "80px", "text-align", "center", "line-height", "80px", "font-size", "22px", "background", "#cfcfcf", "border-radius", "3rem", 3, "click"], [1, "circle", 3, "ngStyle", "positionName"]],
      template: function MainAusloserComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainAusloserComponent_div_5_Template, 4, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAusloserComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return ctx.saveSettings(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Schlie\xDFen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAusloserComponent_Template_button_click_18_listener() {
            return ctx.generate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Generieren");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAusloserComponent_Template_button_click_21_listener() {
            return ctx.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAusloserComponent_Template_button_click_24_listener() {
            return ctx.openSettings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Einstellungen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MainAusloserComponent_position_30_Template, 1, 5, "position", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.displaySettings && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.settingsWidth, ctx.settingsHeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.possibleForSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.selectionMarginLeft, ctx.selectionMarginTop));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.positionsContainerWidth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _position_position_component__WEBPACK_IMPORTED_MODULE_4__["PositionComponent"]],
      styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #69696952;\n  z-index: 2;\n  cursor: pointer;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: auto;\n  border-radius: 0.25rem;\n  margin-top: 15px;\n}\n\n.overlay-main[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.overlay-input[_ngcontent-%COMP%] {\n  margin-top: 300px;\n  height: 80px;\n  width: 80px;\n  border-radius: 3rem;\n  border-color: transparent;\n  text-align: center;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n  background-color: #f0efef;\n  font-size: 21px;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  border: 2px solid #4CAF50;\n  \n  border-radius: 2rem;\n  height: 80px;\n  width: 150px;\n  outline: none;\n  font-size: 22px;\n}\n\n.content-button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  border: 2px solid #4CAF50;\n  \n  border-radius: 2rem;\n  height: 80px;\n  width: 100%;\n  outline: none;\n  font-size: 22px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  float: left;\n}\n\n.noselect[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1hdXNsb3Nlci9EOlxcU3R1ZmZcXEF1c2xvc2VyXFxmZi1hdXNsb3Nlci9zcmNcXGFwcFxcbWFpbi1hdXNsb3NlclxcbWFpbi1hdXNsb3Nlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1hdXNsb3Nlci9tYWluLWF1c2xvc2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFBMkIsVUFBQTtFQUMzQixtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQTJCLFVBQUE7RUFDM0IsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFFSSxXQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNJSjs7QUREQTtFQUNJLDJCQUFBO0VBQTZCLGVBQUE7RUFDN0IseUJBQUE7RUFBMkIsV0FBQTtFQUNELG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLDRCQUFBO0VBQ3hCLHFCQUFBO0VBQXVCLDJCQUFBO0VBQ3ZCLGlCQUFBO0VBQ0Esd0NBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL21haW4tYXVzbG9zZXIvbWFpbi1hdXNsb3Nlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njk2OTUyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbi5vdmVybGF5LWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ub3ZlcmxheS1tYWlue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm92ZXJsYXktaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGVmZWY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5jb250ZW50LWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4ubWFpbi1jb250ZW50XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2lyY2xle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5ub3NlbGVjdCB7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IFxyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9IiwiLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njk2OTUyO1xuICB6LWluZGV4OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vdmVybGF5LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ub3ZlcmxheS1tYWluIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm92ZXJsYXktaW5wdXQge1xuICBtYXJnaW4tdG9wOiAzMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZmVmO1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XG4gIC8qIEdyZWVuICovXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5jb250ZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDtcbiAgLyogR3JlZW4gKi9cbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAusloserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-ausloser',
          templateUrl: './main-ausloser.component.html',
          styleUrls: ['./main-ausloser.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/position/position.component.ts":
  /*!************************************************!*\
    !*** ./src/app/position/position.component.ts ***!
    \************************************************/

  /*! exports provided: PositionComponent */

  /***/
  function srcAppPositionPositionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionComponent", function () {
      return PositionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PositionComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PositionComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.showNumber();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PositionComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.positionName, " ");
      }
    }

    var PositionComponent = /*#__PURE__*/function () {
      function PositionComponent() {
        _classCallCheck(this, PositionComponent);

        this.isNumberShown = false;
      }

      _createClass(PositionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showNumber",
        value: function showNumber() {
          this.isNumberShown = true;
        }
      }]);

      return PositionComponent;
    }();

    PositionComponent.ɵfac = function PositionComponent_Factory(t) {
      return new (t || PositionComponent)();
    };

    PositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PositionComponent,
      selectors: [["position"]],
      inputs: {
        positionName: "positionName"
      },
      decls: 4,
      vars: 2,
      consts: [["style", "background:#A50810;height: 100px;width: 100px; border-radius: 3rem;", 3, "click", 4, "ngIf"], ["class", "noselect", "style", "height: 100px;width: 100px;text-align: center;line-height: 100px;font-size: 22px;background:#cfcfcf;border-radius: 3rem;", 4, "ngIf"], [2, "background", "#A50810", "height", "100px", "width", "100px", "border-radius", "3rem", 3, "click"], [1, "noselect", 2, "height", "100px", "width", "100px", "text-align", "center", "line-height", "100px", "font-size", "22px", "background", "#cfcfcf", "border-radius", "3rem"]],
      template: function PositionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PositionComponent_div_1_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PositionComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNumberShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNumberShown);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".noselect[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24vRDpcXFN0dWZmXFxBdXNsb3NlclxcZmYtYXVzbG9zZXIvc3JjXFxhcHBcXHBvc2l0aW9uXFxwb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUE2QixlQUFBO0VBQzdCLHlCQUFBO0VBQTJCLFdBQUE7RUFDRCxtQkFBQTtFQUMxQixzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4QixxQkFBQTtFQUF1QiwyQkFBQTtFQUN2QixpQkFBQTtFQUNBLHdDQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wb3NpdGlvbi9wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3NlbGVjdCB7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IFxyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iLCIubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'position',
          templateUrl: './position.component.html',
          styleUrls: ['./position.component.scss']
        }]
      }], function () {
        return [];
      }, {
        positionName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["positionName"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Stuff\Ausloser\ff-ausloser\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map