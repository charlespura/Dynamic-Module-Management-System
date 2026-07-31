(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Menus.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      menus: [],
      parentMenus: [],
      showAddModal: false,
      editingMenu: null,
      form: {
        name: '',
        parent_id: '',
        icon: '',
        route: '',
        component: '',
        sort_order: 0,
        status: 1
      }
    };
  },
  
  created: function created() {
    this.fetchMenus();
    this.fetchParentMenus();
  },
  methods: {
    fetchMenus: function fetchMenus() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/menus');
            case 1:
              response = _context.v;
              _this.menus = response.data.data;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error fetching menus:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    fetchParentMenus: function fetchParentMenus() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/menus');
            case 1:
              response = _context2.v;
              _this2.parentMenus = response.data.data.filter(function (m) {
                return m.parent_id === null;
              });
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error('Error fetching parent menus:', _t2);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    editMenu: function editMenu(menu) {
      this.editingMenu = menu;
      this.form = _objectSpread({}, menu);
      this.showAddModal = true;
    },
    closeModal: function closeModal() {
      this.showAddModal = false;
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.editingMenu = null;
      this.form = {
        name: '',
        parent_id: '',
        icon: '',
        route: '',
        component: '',
        sort_order: 0,
        status: 1
      };
    },
    saveMenu: function saveMenu() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _error$response, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              if (!_this3.editingMenu) {
                _context3.n = 2;
                break;
              }
              _context3.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/menus/".concat(_this3.editingMenu.id), _this3.form);
            case 1:
              response = _context3.v;
              _context3.n = 4;
              break;
            case 2:
              _context3.n = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/menus', _this3.form);
            case 3:
              response = _context3.v;
            case 4:
              alert(response.data.message);
              _this3.closeModal();
              _this3.fetchMenus();
              _this3.$store.dispatch('fetchMenus');
              _context3.n = 6;
              break;
            case 5:
              _context3.p = 5;
              _t3 = _context3.v;
              alert('Error saving menu: ' + (((_error$response = _t3.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _t3.message));
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 5]]);
      }))();
    },
    deleteMenu: function deleteMenu(id) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _error$response2, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (confirm('Are you sure you want to delete this menu?')) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              _context4.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/menus/".concat(id));
            case 2:
              response = _context4.v;
              alert(response.data.message);
              _this4.fetchMenus();
              _this4.$store.dispatch('fetchMenus');
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              alert('Error deleting menu: ' + (((_error$response2 = _t4.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _t4.message));
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=template&id=78617599&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Menus.vue?vue&type=template&id=78617599&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h2", [_vm._v("Menu Management")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    on: {
      click: function click($event) {
        _vm.showAddModal = true;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Add Menu\n    ")]), _vm._v(" "), _c("table", {
    staticClass: "table mt-3"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.menus, function (menu) {
    return _c("tr", {
      key: menu.id
    }, [_c("td", [_vm._v(_vm._s(menu.name))]), _vm._v(" "), _c("td", [_c("i", {
      "class": "fa fa-" + menu.icon
    })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(menu.route))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": menu.status ? "badge-success" : "badge-danger"
    }, [_vm._v("\n                        " + _vm._s(menu.status ? "Active" : "Inactive") + "\n                    ")])]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-sm btn-info",
      on: {
        click: function click($event) {
          return _vm.editMenu(menu);
        }
      }
    }, [_vm._v("Edit")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-danger",
      on: {
        click: function click($event) {
          return _vm.deleteMenu(menu.id);
        }
      }
    }, [_vm._v("Delete")])])]);
  }), 0)]), _vm._v(" "), _vm.showAddModal ? _c("div", {
    staticClass: "modal",
    "class": {
      show: _vm.showAddModal
    },
    staticStyle: {
      display: "block"
    },
    attrs: {
      tabindex: "-1"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.editingMenu ? "Edit Menu" : "Add Menu"))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_c("span", [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveMenu.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      required: ""
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Parent Menu")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.parent_id,
      expression: "form.parent_id"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "parent_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("None (Top Level)")]), _vm._v(" "), _vm._l(_vm.parentMenus, function (menu) {
    return _c("option", {
      key: menu.id,
      domProps: {
        value: menu.id
      }
    }, [_vm._v("\n                                    " + _vm._s(menu.name) + "\n                                ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Icon")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.icon,
      expression: "form.icon"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "e.g., users, home, money"
    },
    domProps: {
      value: _vm.form.icon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "icon", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Route")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.route,
      expression: "form.route"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "/hr/employees"
    },
    domProps: {
      value: _vm.form.route
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "route", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Component")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.component,
      expression: "form.component"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Employees"
    },
    domProps: {
      value: _vm.form.component
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "component", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Sort Order")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sort_order,
      expression: "form.sort_order"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.form.sort_order
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sort_order", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Status")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    domProps: {
      value: 1
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c("option", {
    domProps: {
      value: 0
    }
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.editingMenu ? "Update" : "Save"))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v("Cancel")])])])])])]) : _vm._e(), _vm._v(" "), _vm.showAddModal ? _c("div", {
    staticClass: "modal-backdrop"
  }) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Icon")]), _vm._v(" "), _c("th", [_vm._v("Route")]), _vm._v(" "), _c("th", [_vm._v("Status")]), _vm._v(" "), _c("th", [_vm._v("Actions")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal.show[data-v-78617599] {\r\n    display: block;\n}\n.modal-backdrop[data-v-78617599] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.5);\r\n    z-index: 1040;\n}\n.modal[data-v-78617599] {\r\n    z-index: 1050;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Menus.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Menus.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menus_vue_vue_type_template_id_78617599_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menus.vue?vue&type=template&id=78617599&scoped=true */ "./resources/js/components/Menus.vue?vue&type=template&id=78617599&scoped=true");
/* harmony import */ var _Menus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menus.vue?vue&type=script&lang=js */ "./resources/js/components/Menus.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Menus_vue_vue_type_style_index_0_id_78617599_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css */ "./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Menus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menus_vue_vue_type_template_id_78617599_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menus_vue_vue_type_template_id_78617599_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78617599",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Menus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Menus.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Menus.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Menus.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_style_index_0_id_78617599_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=style&index=0&id=78617599&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_style_index_0_id_78617599_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_style_index_0_id_78617599_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_style_index_0_id_78617599_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_style_index_0_id_78617599_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Menus.vue?vue&type=template&id=78617599&scoped=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Menus.vue?vue&type=template&id=78617599&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_template_id_78617599_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Menus.vue?vue&type=template&id=78617599&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menus.vue?vue&type=template&id=78617599&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_template_id_78617599_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Menus_vue_vue_type_template_id_78617599_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);