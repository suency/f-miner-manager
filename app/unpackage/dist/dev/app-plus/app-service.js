(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***********************************!*\
  !*** E:/work/starapp/app/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 179));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 180));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIseUU7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************!*\
  !*** E:/work/starapp/app/pages.json ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/workers/workers', function () {return Vue.extend(__webpack_require__(/*! pages/workers/workers.vue?mpType=page */ 148).default);});
__definePage('pages/blocks/blocks', function () {return Vue.extend(__webpack_require__(/*! pages/blocks/blocks.vue?mpType=page */ 153).default);});
__definePage('pages/operations/operations', function () {return Vue.extend(__webpack_require__(/*! pages/operations/operations.vue?mpType=page */ 158).default);});
__definePage('pages/node/node', function () {return Vue.extend(__webpack_require__(/*! pages/node/node.vue?mpType=page */ 164).default);});
__definePage('pages/tiger/tiger', function () {return Vue.extend(__webpack_require__(/*! pages/tiger/tiger.vue?mpType=page */ 169).default);});
__definePage('pages/2643/2643', function () {return Vue.extend(__webpack_require__(/*! pages/2643/2643.vue?mpType=page */ 174).default);});

/***/ }),
/* 2 */
/*!*************************************************************!*\
  !*** E:/work/starapp/app/pages/index/index.vue?mpType=page ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************************************************************!*\
  !*** E:/work/starapp/app/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "center refresh"),
        attrs: { _i: 1 },
        on: {
          click: function($event) {
            return _vm.initData()
          }
        }
      }),
      _c("view", { staticClass: _vm._$s(2, "sc", "title"), attrs: { _i: 2 } }, [
        _c("view"),
        _c("view", {
          staticClass: _vm._$s(4, "sc", "center"),
          attrs: { _i: 4 },
          on: {
            click: function($event) {
              return _vm.initData()
            }
          }
        })
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "baoinfo"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "bar"),
            attrs: { _i: 6 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(7, "sc", "top"), attrs: { _i: 7 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(8, "sc", "text"), attrs: { _i: 8 } },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(_vm._$s(10, "t0-0", _vm._s(_vm.allData.miner)))
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(11, "sc", "text"), attrs: { _i: 11 } },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(_vm._$s(13, "t0-0", _vm._s(_vm.allData.power)))
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(14, "sc", "text"), attrs: { _i: 14 } },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(_vm._$s(16, "t0-0", _vm._s(_vm.allData.win)))
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(17, "sc", "text"), attrs: { _i: 17 } },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(
                      _vm._$s(
                        19,
                        "t0-0",
                        _vm._s(_vm.allData.minerBalance.substr(0, 10) + " STAR")
                      )
                    )
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(20, "sc", "text"), attrs: { _i: 20 } },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(
                      _vm._$s(
                        22,
                        "t0-0",
                        _vm._s(_vm.allData.vesting.substr(0, 10) + " STAR")
                      )
                    )
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(23, "sc", "text"), attrs: { _i: 23 } },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(
                      _vm._$s(
                        25,
                        "t0-0",
                        _vm._s(_vm.allData.available.substr(0, 10) + " STAR")
                      )
                    )
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(26, "sc", "text"), attrs: { _i: 26 } },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(
                      _vm._$s(
                        28,
                        "t0-0",
                        _vm._s(
                          _vm.allData.workerBalance.substr(0, 10) + " STAR"
                        )
                      )
                    )
                  ])
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(29, "sc", "bottom"), attrs: { _i: 29 } },
            _vm._l(
              _vm._$s(30, "f", { forItems: _vm.allData.sectors }),
              function(item, index, $20, $30) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(30, "f", {
                      forIndex: $20,
                      key: 30 + "-" + $30
                    }),
                    staticClass: _vm._$s("30-" + $30, "sc", "text"),
                    attrs: { _i: "30-" + $30 }
                  },
                  [
                    _c("view", [
                      _vm._v(_vm._$s("31-" + $30, "t0-0", _vm._s(item)))
                    ])
                  ]
                )
              }
            ),
            0
          )
        ]
      ),
      _vm._$s(32, "i", !_vm.hideJobs)
        ? _c(
            "view",
            { staticClass: _vm._$s(32, "sc", "title"), attrs: { _i: 32 } },
            [
              _c("view", [
                _vm._v(_vm._$s(33, "t0-0", _vm._s(_vm.jobs.length)))
              ]),
              _c("view")
            ]
          )
        : _vm._e(),
      _vm._$s(35, "i", !_vm.hideJobs)
        ? _c(
            "view",
            { staticClass: _vm._$s(35, "sc", "jobList"), attrs: { _i: 35 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(36, "sc", "jobTopBar"),
                  attrs: { _i: 36 }
                },
                [_c("view"), _c("view"), _c("view"), _c("view"), _c("view")]
              ),
              _vm._l(_vm._$s(42, "f", { forItems: _vm.jobs }), function(
                item1,
                index1,
                $21,
                $31
              ) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(42, "f", {
                      forIndex: $21,
                      key: 42 + "-" + $31
                    }),
                    staticClass: _vm._$s("42-" + $31, "sc", "jobTopBar"),
                    attrs: { _i: "42-" + $31 }
                  },
                  [
                    _c("view", [
                      _vm._v(_vm._$s("43-" + $31, "t0-0", _vm._s(item1[1])))
                    ]),
                    _c("view", [
                      _vm._v(_vm._$s("44-" + $31, "t0-0", _vm._s(item1[3])))
                    ]),
                    _c("view", [
                      _vm._v(_vm._$s("45-" + $31, "t0-0", _vm._s(item1[4])))
                    ]),
                    _c("view", [
                      _vm._v(_vm._$s("46-" + $31, "t0-0", _vm._s(item1[5])))
                    ]),
                    _c("view", [
                      _vm._v(_vm._$s("47-" + $31, "t0-0", _vm._s(item1[6])))
                    ])
                  ]
                )
              })
            ],
            2
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(48, "sc", "title"), attrs: { _i: 48 } },
        [
          _c("view", [
            _vm._v(_vm._$s(49, "t0-0", _vm._s(_vm.baoData.totalCount)))
          ]),
          _c("view")
        ]
      ),
      _vm._l(_vm._$s(51, "f", { forItems: _vm.baoData.blocks }), function(
        item,
        index,
        $22,
        $32
      ) {
        return _vm._$s("51-" + $32, "i", index < _vm.num)
          ? _c(
              "view",
              {
                key: _vm._$s(51, "f", { forIndex: $22, key: 51 + "-" + $32 }),
                staticClass: _vm._$s("51-" + $32, "sc", "baoList"),
                attrs: { _i: "51-" + $32 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("52-" + $32, "sc", "baoItem"),
                    attrs: { _i: "52-" + $32 }
                  },
                  [
                    _c("view"),
                    _c("view", [
                      _vm._v(
                        _vm._$s(
                          "54-" + $32,
                          "t0-0",
                          _vm._s(_vm._f("getTime")(item.timestamp))
                        )
                      )
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("55-" + $32, "sc", "baoItem"),
                    attrs: { _i: "55-" + $32 }
                  },
                  [
                    _c("view"),
                    _c("view", [
                      _vm._v(
                        _vm._$s(
                          "57-" + $32,
                          "t0-0",
                          _vm._s(
                            (item.reward / Math.pow(10, 18)).toFixed(2) +
                              " STAR"
                          )
                        )
                      )
                    ])
                  ]
                )
              ]
            )
          : _vm._e()
      }),
      _c(
        "view",
        {
          staticClass: _vm._$s(58, "sc", "more"),
          attrs: { _i: 58 },
          on: { click: _vm.displayMore }
        },
        [
          _vm._v(
            _vm._$s(58, "t0-0", _vm._s(_vm.num == 5 ? "????????????" : "??????"))
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(59, "sc", "title"), attrs: { _i: 59 } },
        [
          _c("view", [
            _vm._v(_vm._$s(60, "t0-0", _vm._s(_vm.baoData2643.totalCount)))
          ]),
          _c("view")
        ]
      ),
      _vm._l(_vm._$s(62, "f", { forItems: _vm.baoData2643.blocks }), function(
        item,
        index,
        $23,
        $33
      ) {
        return _vm._$s("62-" + $33, "i", index < _vm.num)
          ? _c(
              "view",
              {
                key: _vm._$s(62, "f", { forIndex: $23, key: 62 + "-" + $33 }),
                staticClass: _vm._$s("62-" + $33, "sc", "baoList"),
                attrs: { _i: "62-" + $33 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("63-" + $33, "sc", "baoItem"),
                    attrs: { _i: "63-" + $33 }
                  },
                  [
                    _c("view"),
                    _c("view", [
                      _vm._v(
                        _vm._$s(
                          "65-" + $33,
                          "t0-0",
                          _vm._s(_vm._f("getTime")(item.timestamp))
                        )
                      )
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("66-" + $33, "sc", "baoItem"),
                    attrs: { _i: "66-" + $33 }
                  },
                  [
                    _c("view"),
                    _c("view", [
                      _vm._v(
                        _vm._$s(
                          "68-" + $33,
                          "t0-0",
                          _vm._s(
                            (item.reward / Math.pow(10, 18)).toFixed(2) +
                              " STAR"
                          )
                        )
                      )
                    ])
                  ]
                )
              ]
            )
          : _vm._e()
      }),
      _c(
        "view",
        {
          staticClass: _vm._$s(69, "sc", "more"),
          attrs: { _i: 69 },
          on: { click: _vm.displayMore }
        },
        [
          _vm._v(
            _vm._$s(69, "t0-0", _vm._s(_vm.num == 5 ? "????????????" : "??????"))
          )
        ]
      )
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*************************************************************************************!*\
  !*** E:/work/starapp/app/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVxQixDQUFnQixzc0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/api/api.js */ 7));\nvar _moment = _interopRequireDefault(__webpack_require__(/*! moment */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { hideJobs: true, baoData: {}, baoData2643: {}, num: 5, allData: { \"miner\": \"f03001\", \"power\": \"4.656 TiB / 81.44 PiB (0.0055%)\", \"win\": \"0.7920/day (every 30h18m10s)\", \"minerBalance\": \"52.899986461063991974 STAR\", \"vesting\": \"51.502291886963462102 STAR\", \"available\": \"1.397694574100529872 STAR\", \"workerBalance\": \"1.091296395610211843 STAR\", \"total\": \"639\", \"proving\": \"618\", \"sectors\": [\"Total: 639\", \"Proving: 618\", \"PreCommit1:4\", \"PreCommit2:4\", \"WaitSeed:1\", \"Committing:6\", \"Removed:6\"] }, jobs: [[\"14\", \"635\", \"0\", \"suency-X99\", \"PC1\", \"running\", \"1h32m13.6s\", \"\"]] };}, filters: { getTime: function getTime(unixTime, timeZone) {if (typeof timeZone == 'number') {unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;}var now = new Date(unixTime * 1000);var year = now.getFullYear();var month = now.getMonth() + 1;var date = now.getDate();var hour = now.getHours();var minute = now.getMinutes(); // return moment(new Date(unixTime* 1000)).fromNow();\n      return year + \"-\" + month.toString().padStart(2, 0) + \"-\" + date.toString().padStart(2, 0) + \"   \" + hour.toString().padStart(2, 0) + \":\" + minute.toString().padStart(2, 0) + ' | ' + (0, _moment.default)(new Date(unixTime * 1000)).fromNow();}, fixNumbers: function fixNumbers(a, n) {//return a.replace(\"STAR\",'');\n      //return parseFloat(a.replace(' STAR','')).toFixed(2);\n    } }, onLoad: function onLoad() {//console.log(moment().format('YYYY-MM-DD'));\n    //console.log(1);\n    this.initData();}, methods: { displayMore: function displayMore() {if (this.num == 5) {this.num = this.baoData.blocks.length;} else {this.num = 5;}}, initData: function initData() {var that = this;uni.showLoading({ title: '?????????' });uni.request({ url: _api.default.getUrl + 'star/blockWin', success: function success(res) {//console.log(res.data);\n          that.allData = res.data;uni.hideLoading();} }); //??????jobs??????\n      /* uni.request({\n      \turl: api.getUrl + 'star/getJobs',\n      \tsuccess: (res) => {\n      \t\tconsole.log(res.data);\n      \t\tthat.jobs = res.data;\n      \t\tuni.hideLoading();\n      \t}\n      }); */uni.request({ url: _api.default.getUrl + 'star/bao', success: function success(res) {//console.log(res.data);\n          that.baoData = res.data;} });uni.request({ url: _api.default.getUrl + 'star/bao2643', success: function success(res) {//console.log(res.data);\n          that.baoData2643 = res.data;} });} } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0lBO0FBQ0EsMkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLGNBREEsRUFFQSxXQUZBLEVBR0EsZUFIQSxFQUlBLE1BSkEsRUFLQSxXQUNBLGlCQURBLEVBRUEsMENBRkEsRUFHQSxxQ0FIQSxFQUlBLDRDQUpBLEVBS0EsdUNBTEEsRUFNQSx3Q0FOQSxFQU9BLDRDQVBBLEVBUUEsY0FSQSxFQVNBLGdCQVRBLEVBVUEsWUFDQSxZQURBLEVBRUEsY0FGQSxFQUdBLGNBSEEsRUFJQSxjQUpBLEVBS0EsWUFMQSxFQU1BLGNBTkEsRUFPQSxXQVBBLENBVkEsRUFMQSxFQXlCQSxPQUNBLENBQ0EsSUFEQSxFQUVBLEtBRkEsRUFHQSxHQUhBLEVBSUEsWUFKQSxFQUtBLEtBTEEsRUFNQSxTQU5BLEVBT0EsWUFQQSxFQVFBLEVBUkEsQ0FEQSxDQXpCQSxHQXVDQSxDQXpDQSxFQTBDQSxXQUNBLE9BREEsbUJBQ0EsUUFEQSxFQUNBLFFBREEsRUFDQSxDQUNBLGtDQUNBLDZEQUNBLENBQ0Esb0NBQ0EsNkJBQ0EsK0JBQ0EseUJBQ0EsMEJBQ0EsOEJBVEEsQ0FVQTtBQUNBLGtKQUNBLGdDQURBLEdBQ0EsS0FEQSxHQUNBLHlEQURBLENBRUEsQ0FkQSxFQWVBLFVBZkEsc0JBZUEsQ0FmQSxFQWVBLENBZkEsRUFlQSxDQUNBO0FBQ0E7QUFDQSxLQWxCQSxFQTFDQSxFQThEQSxNQTlEQSxvQkE4REEsQ0FDQTtBQUNBO0FBQ0Esb0JBQ0EsQ0FsRUEsRUFtRUEsV0FDQSxXQURBLHlCQUNBLENBQ0Esb0JBQ0Esc0NBQ0EsQ0FGQSxNQUVBLENBQ0EsYUFDQSxDQUNBLENBUEEsRUFRQSxRQVJBLHNCQVFBLENBQ0EsZ0JBQ0Esa0JBQ0EsWUFEQSxJQUdBLGNBQ0EsMENBREEsRUFFQSxnQ0FDQTtBQUNBLGtDQUNBLGtCQUNBLENBTkEsSUFMQSxDQWNBO0FBQ0E7Ozs7Ozs7WUFTQSxjQUNBLHFDQURBLEVBRUEsZ0NBQ0E7QUFDQSxrQ0FDQSxDQUxBLElBUUEsY0FDQSx5Q0FEQSxFQUVBLGdDQUNBO0FBQ0Esc0NBQ0EsQ0FMQSxJQU9BLENBL0NBLEVBbkVBLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyIHJlZnJlc2hcIiBAY2xpY2s9XCJpbml0RGF0YSgpXCI+5Yi35pawPC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHQ8dmlldz7ln7rmnKzkv6Hmga88L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyXCIgQGNsaWNrPVwiaW5pdERhdGEoKVwiIHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuO1wiPuWIt+aWsDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYmFvaW5mb1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJhclwiPlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRvcFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+TWluZXI6PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+e3thbGxEYXRhLm1pbmVyfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+UG93ZXI6PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+e3thbGxEYXRhLnBvd2VyfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+V2luOjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3Pnt7YWxsRGF0YS53aW59fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHQ8dmlldz5NaW5lciBCYWxhbmNlOjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3Pnt7YWxsRGF0YS5taW5lckJhbGFuY2Uuc3Vic3RyKDAsMTApICsgJyBTVEFSJ319PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj5cclxuXHRcdFx0XHRcdDx2aWV3PlZlc3Rpbmc6PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+e3thbGxEYXRhLnZlc3Rpbmcuc3Vic3RyKDAsMTApICsgJyBTVEFSJ319PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj5cclxuXHRcdFx0XHRcdDx2aWV3PkF2YWlsYWJsZTo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldz57e2FsbERhdGEuYXZhaWxhYmxlLnN1YnN0cigwLDEwKSArICcgU1RBUid9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHQ8dmlldz5Xb3JrZXIgQmFsYW5jZTo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldz57e2FsbERhdGEud29ya2VyQmFsYW5jZS5zdWJzdHIoMCwxMCkgKyAnIFNUQVInfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gYWxsRGF0YS5zZWN0b3JzXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImZvbnQtd2VpZ2h0OiBub3JtYWw7XCI+e3tpdGVtfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDYwcnB4O1wiIHYtaWY9XCIhaGlkZUpvYnNcIj5cclxuXHRcdFx0PHZpZXc+5Li75py65Lu75YqhKHt7am9icy5sZW5ndGh9fSk8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuO1wiPuS4u+acuuS7u+WKoTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiam9iTGlzdFwiIHYtaWY9XCIhaGlkZUpvYnNcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJqb2JUb3BCYXJcIj5cclxuXHRcdFx0XHQ8dmlldz5TZWN0b3I8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+SG9zdG5hbWU8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+VGFzazwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz5TdGF0dXM8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+VGltZTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImpvYlRvcEJhclwiIHYtZm9yPVwiKGl0ZW0xLGluZGV4MSkgaW4gam9ic1wiPlxyXG5cdFx0XHRcdDx2aWV3Pnt7aXRlbTFbMV19fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz57e2l0ZW0xWzNdfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+e3tpdGVtMVs0XX19PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7aXRlbTFbNV19fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz57e2l0ZW0xWzZdfX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiIHN0eWxlPVwibWFyZ2luLXRvcDogNjBycHg7XCI+XHJcblx0XHRcdDx2aWV3Png5OS3niIblnZfliJfooagoe3tiYW9EYXRhLnRvdGFsQ291bnR9fSk8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuO1wiPuS4u+acuuS7u+WKoTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cImJhb0xpc3RcIiB2LWlmPVwiaW5kZXggPCBudW1cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gYmFvRGF0YS5ibG9ja3NcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiYW9JdGVtXCI+XHJcblx0XHRcdFx0PHZpZXc+5pe26Ze0Ojwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz57e2l0ZW0udGltZXN0YW1wIHwgZ2V0VGltZX19PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmFvSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3PuWlluWKsTo8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+e3soaXRlbS5yZXdhcmQgLyAxMCoqMTgpLnRvRml4ZWQoMikgKyAnIFNUQVInfX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtb3JlXCIgQGNsaWNrPVwiZGlzcGxheU1vcmVcIj57e251bSA9PSA1PyBcIuaYvuekuuabtOWkmlwiIDogXCLmlLbotbdcIn19Pj48L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDYwcnB4O1wiPlxyXG5cdFx0XHQ8dmlldz4yNjQzLeeIhuWdl+WIl+ihqCh7e2Jhb0RhdGEyNjQzLnRvdGFsQ291bnR9fSk8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuO1wiPuS4u+acuuS7u+WKoTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYmFvTGlzdFwiIHYtaWY9XCJpbmRleCA8IG51bVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBiYW9EYXRhMjY0My5ibG9ja3NcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiYW9JdGVtXCI+XHJcblx0XHRcdFx0PHZpZXc+5pe26Ze0Ojwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz57e2l0ZW0udGltZXN0YW1wIHwgZ2V0VGltZX19PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmFvSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3PuWlluWKsTo8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+e3soaXRlbS5yZXdhcmQgLyAxMCoqMTgpLnRvRml4ZWQoMikgKyAnIFNUQVInfX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtb3JlXCIgQGNsaWNrPVwiZGlzcGxheU1vcmVcIj57e251bSA9PSA1PyBcIuaYvuekuuabtOWkmlwiIDogXCLmlLbotbdcIn19Pj48L3ZpZXc+XHJcblx0XHRcclxuXHJcblx0XHRcclxuPCEtLSBcdFx0PHZpZXcgY2xhc3M9XCJqb2JzXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiam9iXCIgdi1mb3I9XCIoaXRlbTEsaW5kZXgxKSBpbiBqb2JzXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXIxXCIgOmNsYXNzPVwie2JnX2JsdWU6aXRlbTFbNF0gPT0gJ1BDMScsYmdfZ3JlZW46aXRlbTFbNF0gPT0gJ1BDMicsYmdfcGluazppdGVtMVs0XSA9PSAnQzEnLGJnX3B1cnBsZTppdGVtMVs0XSA9PSAnQzInLGJnX2dldHRpbmc6aXRlbTFbNF0gPT0gJ0dFVCcsIGJnX2FwOml0ZW0xWzRdID09ICdBUCd9XCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiam9iVGl0bGVcIj57e2l0ZW0xWzNdfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJqb2JDb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dmlldz5pZDo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldz57e2l0ZW0xWzBdfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiam9iQ29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+U2VjdG9yOjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3Pnt7aXRlbTFbMV19fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJqb2JDb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dmlldz5Xb3JrZXI6PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXc+e3tpdGVtMVsyXX19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidXR0b25Hcm91cFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjZW50ZXJcIiA6Y2xhc3M9XCJ7YmdfYmx1ZTppdGVtMVs0XSA9PSAnUEMxJyxiZ19ncmVlbjppdGVtMVs0XSA9PSAnUEMyJyxiZ19waW5rOml0ZW0xWzRdID09ICdDMScsYmdfcHVycGxlOml0ZW0xWzRdID09ICdDMicsYmdfZ2V0dGluZzppdGVtMVs0XSA9PSAnR0VUJywgYmdfYXA6aXRlbTFbNF0gPT0gJ0FQJ31cIj57e2l0ZW0xWzRdfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlclwiIDpjbGFzcz1cIntiZ19ibHVlOml0ZW0xWzRdID09ICdQQzEnLGJnX2dyZWVuOml0ZW0xWzRdID09ICdQQzInLGJnX3Bpbms6aXRlbTFbNF0gPT0gJ0MxJyxiZ19wdXJwbGU6aXRlbTFbNF0gPT0gJ0MyJyxiZ19nZXR0aW5nOml0ZW0xWzRdID09ICdHRVQnLCBiZ19hcDppdGVtMVs0XSA9PSAnQVAnfVwiPnt7aXRlbTFbNV19fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyXCI+e3tpdGVtMVs2XX19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpLmpzJztcclxuXHRpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRoaWRlSm9iczp0cnVlLFxyXG5cdFx0XHRcdGJhb0RhdGE6IHt9LFxyXG5cdFx0XHRcdGJhb0RhdGEyNjQzOnt9LFxyXG5cdFx0XHRcdG51bTo1LFxyXG5cdFx0XHRcdGFsbERhdGE6IHtcclxuXHRcdFx0XHRcdFwibWluZXJcIjogXCJmMDMwMDFcIixcclxuXHRcdFx0XHRcdFwicG93ZXJcIjogXCI0LjY1NiBUaUIgLyA4MS40NCBQaUIgKDAuMDA1NSUpXCIsXHJcblx0XHRcdFx0XHRcIndpblwiOiBcIjAuNzkyMC9kYXkgKGV2ZXJ5IDMwaDE4bTEwcylcIixcclxuXHRcdFx0XHRcdFwibWluZXJCYWxhbmNlXCI6IFwiNTIuODk5OTg2NDYxMDYzOTkxOTc0IFNUQVJcIixcclxuXHRcdFx0XHRcdFwidmVzdGluZ1wiOiBcIjUxLjUwMjI5MTg4Njk2MzQ2MjEwMiBTVEFSXCIsXHJcblx0XHRcdFx0XHRcImF2YWlsYWJsZVwiOiBcIjEuMzk3Njk0NTc0MTAwNTI5ODcyIFNUQVJcIixcclxuXHRcdFx0XHRcdFwid29ya2VyQmFsYW5jZVwiOiBcIjEuMDkxMjk2Mzk1NjEwMjExODQzIFNUQVJcIixcclxuXHRcdFx0XHRcdFwidG90YWxcIjogXCI2MzlcIixcclxuXHRcdFx0XHRcdFwicHJvdmluZ1wiOiBcIjYxOFwiLFxyXG5cdFx0XHRcdFx0XCJzZWN0b3JzXCI6IFtcclxuXHRcdFx0XHRcdFx0XCJUb3RhbDogNjM5XCIsXHJcblx0XHRcdFx0XHRcdFwiUHJvdmluZzogNjE4XCIsXHJcblx0XHRcdFx0XHRcdFwiUHJlQ29tbWl0MTo0XCIsXHJcblx0XHRcdFx0XHRcdFwiUHJlQ29tbWl0Mjo0XCIsXHJcblx0XHRcdFx0XHRcdFwiV2FpdFNlZWQ6MVwiLFxyXG5cdFx0XHRcdFx0XHRcIkNvbW1pdHRpbmc6NlwiLFxyXG5cdFx0XHRcdFx0XHRcIlJlbW92ZWQ6NlwiXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRqb2JzOiBbXHJcblx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdFwiMTRcIixcclxuXHRcdFx0XHRcdFx0XCI2MzVcIixcclxuXHRcdFx0XHRcdFx0XCIwXCIsXHJcblx0XHRcdFx0XHRcdFwic3VlbmN5LVg5OVwiLFxyXG5cdFx0XHRcdFx0XHRcIlBDMVwiLFxyXG5cdFx0XHRcdFx0XHRcInJ1bm5pbmdcIixcclxuXHRcdFx0XHRcdFx0XCIxaDMybTEzLjZzXCIsXHJcblx0XHRcdFx0XHRcdFwiXCJcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHRdXHJcblxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZmlsdGVyczoge1xyXG5cdFx0XHRnZXRUaW1lKHVuaXhUaW1lLCB0aW1lWm9uZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YodGltZVpvbmUpID09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0XHR1bml4VGltZSA9IHBhcnNlSW50KHVuaXhUaW1lKSArIHBhcnNlSW50KHRpbWVab25lKSAqIDYwICogNjA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBub3cgPSBuZXcgRGF0ZSh1bml4VGltZSAqIDEwMDApO1xyXG5cdFx0XHRcdHZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0dmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG5cdFx0XHRcdHZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxuXHRcdFx0XHR2YXIgaG91ciA9IG5vdy5nZXRIb3VycygpO1xyXG5cdFx0XHRcdHZhciBtaW51dGUgPSBub3cuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRcdC8vIHJldHVybiBtb21lbnQobmV3IERhdGUodW5peFRpbWUqIDEwMDApKS5mcm9tTm93KCk7XHJcblx0XHRcdFx0cmV0dXJuIHllYXIgKyBcIi1cIiArIG1vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgMCkgKyBcIi1cIiArIGRhdGUudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKSArIFwiICAgXCIgKyBob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgMCkgKyBcIjpcIiArXHJcblx0XHRcdFx0XHRtaW51dGUudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKSArICcgfCAnICttb21lbnQobmV3IERhdGUodW5peFRpbWUqIDEwMDApKS5mcm9tTm93KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZpeE51bWJlcnMoYSwgbikge1xyXG5cdFx0XHRcdC8vcmV0dXJuIGEucmVwbGFjZShcIlNUQVJcIiwnJyk7XHJcblx0XHRcdFx0Ly9yZXR1cm4gcGFyc2VGbG9hdChhLnJlcGxhY2UoJyBTVEFSJywnJykpLnRvRml4ZWQoMik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2cobW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKDEpO1xyXG5cdFx0XHR0aGlzLmluaXREYXRhKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRkaXNwbGF5TW9yZSgpe1xyXG5cdFx0XHRcdGlmKHRoaXMubnVtID09IDUpe1xyXG5cdFx0XHRcdFx0dGhpcy5udW0gPSB0aGlzLmJhb0RhdGEuYmxvY2tzLmxlbmd0aDtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQgICB0aGlzLm51bSA9IDU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0RGF0YSgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogYXBpLmdldFVybCArICdzdGFyL2Jsb2NrV2luJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuYWxsRGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL+makOiXj2pvYnPliJfooahcclxuXHRcdFx0XHQvKiB1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IGFwaS5nZXRVcmwgKyAnc3Rhci9nZXRKb2JzJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmpvYnMgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7ICovXHJcblxyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogYXBpLmdldFVybCArICdzdGFyL2JhbycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJhb0RhdGEgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IGFwaS5nZXRVcmwgKyAnc3Rhci9iYW8yNjQzJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuYmFvRGF0YTI2NDMgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LmpvYkxpc3R7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHRcclxuXHQuam9iVG9wQmFye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblx0XHJcblx0LmpvYlRvcEJhciB2aWV3Om50aC1jaGlsZCgxKXtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5qb2JUb3BCYXIgdmlldzpudGgtY2hpbGQoMil7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuam9iVG9wQmFyIHZpZXc6bnRoLWNoaWxkKDMpe1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHR9XHJcblx0XHJcblx0LmpvYlRvcEJhciB2aWV3Om50aC1jaGlsZCg0KXtcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0fVxyXG5cdC5qb2JUb3BCYXIgdmlldzpudGgtY2hpbGQoNSl7XHJcblx0XHR3aWR0aDogMTgwcnB4O1xyXG5cdH1cclxuXHQubW9yZXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5yZWZyZXNoe1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHR0b3A6NDAlO1xyXG5cdFx0cmlnaHQ6IDUlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0E4ODBFMztcclxuXHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0XHRib3gtc2hhZG93OjBweCAyNXJweCAyMHJweCAtMjVycHggIzAwMDtcclxuXHR9XHJcblx0LmJhb0l0ZW0+dmlldzpmaXJzdC1jaGlsZHtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5iYW9MaXN0IHtcclxuXHRcdHBhZGRpbmc6IDE1cnB4IDA7XHJcblx0XHRib3JkZXItYm90dG9tOiAzcnB4IHNvbGlkICNBODgwRTM7XHJcblx0fVxyXG5cclxuXHQuYmFvSXRlbSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0fVxyXG5cclxuXHQuYm9sZCB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5jZW50ZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRwYWRkaW5nOiA2MHJweDtcclxuXHR9XHJcblxyXG5cdC50aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC50aXRsZT52aWV3Omxhc3QtY2hpbGQge1xyXG5cdFx0d2lkdGg6IDE1NHJweDtcclxuXHRcdGhlaWdodDogNTRycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjQTg4MEUzO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHR9XHJcblxyXG5cdC5iYW9pbmZvIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBycHggNHJweCAxMnJweCByZ2JhKDE4OCwgMTg4LCAxODgsIDAuNSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDI2cnB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdHBhZGRpbmc6IDM2cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8qIGhlaWdodDogMzAwcnB4OyAqL1xyXG5cdH1cclxuXHJcblx0LnRleHQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdC50ZXh0PnZpZXc6Zmlyc3QtY2hpbGQge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbSB7XHJcblx0XHRtYXJnaW4tdG9wOiA0MnJweDtcclxuXHR9XHJcblxyXG5cdC5iYXIge1xyXG5cdFx0d2lkdGg6IDEwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjQTg4MEUzO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IC01cnB4O1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0fVxyXG5cclxuXHQuam9iIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAzMjZycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym94LXNoYWRvdzogMHJweCA0cnB4IDEycnB4IHJnYmEoMTg4LCAxODgsIDE4OCwgMC41KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjZycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0fVxyXG5cclxuXHQuYmFyMSB7XHJcblx0XHR3aWR0aDogMTBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAtNXJweDtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdH1cclxuXHJcblx0LmJnX2JsdWUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzUzRDdGRjtcclxuXHR9XHJcblxyXG5cdC5iZ19ncmVlbiB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDdFMDc5O1xyXG5cdH1cclxuXHJcblx0LmJnX3Bpbmsge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGODQ4NDtcclxuXHR9XHJcblxyXG5cdC5iZ19wdXJwbGUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0EyNTRGMjtcclxuXHR9XHJcblxyXG5cdC5iZ19nZXR0aW5nIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1QTMyNEI7XHJcblx0fVxyXG5cclxuXHQuYmdfYXAge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcclxuXHR9XHJcblxyXG5cdC5qb2JUaXRsZSB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LmpvYkNvbnRlbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHQuam9iQ29udGVudD52aWV3OmZpcnN0LWNoaWxkIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5qb2JzIC5saW5lIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxLjVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uR3JvdXAge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uR3JvdXA+dmlldzpudGgtY2hpbGQoMSkge1xyXG5cdFx0d2lkdGg6IDEzOHJweDtcclxuXHRcdGhlaWdodDogNTFycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uR3JvdXA+dmlldzpudGgtY2hpbGQoMikge1xyXG5cdFx0d2lkdGg6IDE4OHJweDtcclxuXHRcdGhlaWdodDogNTFycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uR3JvdXA+dmlldzpudGgtY2hpbGQoMykge1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRoZWlnaHQ6IDUxcnB4O1xyXG5cdFx0d2lkdGg6IDEzOHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**************************************!*\
  !*** E:/work/starapp/app/api/api.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  getUrl: 'http://i373802482.goho.co/' };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2FwaS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0VXJsIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCQyxRQUFNLEVBQUUsNEJBRFEsRUFBakIiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldFVybDogJ2h0dHA6Ly9pMzczODAyNDgyLmdvaG8uY28vJ1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/moment.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__f__, module) {var require;//! moment.js
//! version : 2.29.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, function () {'use strict';

  var hookCallback;

  function hooks() {
    return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with moment()
  // without creating circular dependencies.
  function setHookCallback(callback) {
    hookCallback = callback;
  }

  function isArray(input) {
    return (
      input instanceof Array ||
      Object.prototype.toString.call(input) === '[object Array]');

  }

  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
      input != null &&
      Object.prototype.toString.call(input) === '[object Object]');

  }

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }

  function isUndefined(input) {
    return input === void 0;
  }

  function isNumber(input) {
    return (
      typeof input === 'number' ||
      Object.prototype.toString.call(input) === '[object Number]');

  }

  function isDate(input) {
    return (
      input instanceof Date ||
      Object.prototype.toString.call(input) === '[object Date]');

  }

  function map(arr, fn) {
    var res = [],
    i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }

  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  }

  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false };

  }

  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }

  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function some(fun) {
      var t = Object(this),
      len = t.length >>> 0,
      i;

      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  }

  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m),
      parsedParts = some.call(flags.parsedDateParts, function (i) {
        return i != null;
      }),
      isNowValid =
      !isNaN(m._d.getTime()) &&
      flags.overflow < 0 &&
      !flags.empty &&
      !flags.invalidEra &&
      !flags.invalidMonth &&
      !flags.invalidWeekday &&
      !flags.weekdayMismatch &&
      !flags.nullInput &&
      !flags.invalidFormat &&
      !flags.userInvalidated && (
      !flags.meridiem || flags.meridiem && parsedParts);

      if (m._strict) {
        isNowValid =
        isNowValid &&
        flags.charsLeftOver === 0 &&
        flags.unusedTokens.length === 0 &&
        flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }
    return m._isValid;
  }

  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }

    return m;
  }

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  var momentProperties = hooks.momentProperties = [],
  updateInProgress = false;

  function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
      for (i = 0; i < momentProperties.length; i++) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }

    return to;
  }

  // Moment prototype object
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }

  function isMoment(obj) {
    return (
      obj instanceof Moment || obj != null && obj._isAMomentObject != null);

  }

  function warn(msg) {
    if (
    hooks.suppressDeprecationWarnings === false &&
    typeof console !== 'undefined' &&
    console.warn)
    {
      __f__("warn", 'Deprecation warning: ' + msg, " at node_modules/moment/moment.js:283");
    }
  }

  function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [],
        arg,
        i,
        key;
        for (i = 0; i < arguments.length; i++) {
          arg = '';
          if (typeof arguments[i] === 'object') {
            arg += '\n[' + i + '] ';
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ': ' + arguments[0][key] + ', ';
              }
            }
            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(
        msg +
        '\nArguments: ' +
        Array.prototype.slice.call(args).join('') +
        '\n' +
        new Error().stack);

        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
    return (
      typeof Function !== 'undefined' && input instanceof Function ||
      Object.prototype.toString.call(input) === '[object Function]');

  }

  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
    '|' +
    /\d{1,2}/.source);

  }

  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
    prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (
      hasOwnProp(parentConfig, prop) &&
      !hasOwnProp(childConfig, prop) &&
      isObject(parentConfig[prop]))
      {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }

  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  var keys;

  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function keys(obj) {
      var i,
      res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }

  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L' };


  function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }

  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
    zerosToFill = targetLength - absNumber.length,
    sign = number >= 0;
    return (
      (sign ? forceSign ? '+' : '' : '-') +
      Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
      absNumber);

  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  formatFunctions = {},
  formatTokenFunctions = {};

  // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function func() {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(
        func.apply(this, arguments),
        token);

      };
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
    i,
    length;

    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }

    return function (mom) {
      var output = '',
      i;
      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ?
        array[i].call(mom, format) :
        array[i];
      }
      return output;
    };
  }

  // format date using native date object
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
    formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(
      localFormattingTokens,
      replaceLongDateFormatTokens);

      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }

    return format;
  }

  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A' };


  function longDateFormat(key) {
    var format = this._longDateFormat[key],
    formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
      return format;
    }

    this._longDateFormat[key] = formatUpper.
    match(formattingTokens).
    map(function (tok) {
      if (
      tok === 'MMMM' ||
      tok === 'MM' ||
      tok === 'DD' ||
      tok === 'dddd')
      {
        return tok.slice(1);
      }
      return tok;
    }).
    join('');

    return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate() {
    return this._invalidDate;
  }

  var defaultOrdinal = '%d',
  defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years' };


  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ?
    output(number, withoutSuffix, string, isFuture) :
    output.replace(/%d/i, number);
  }

  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
    return typeof units === 'string' ?
    aliases[units] || aliases[units.toLowerCase()] :
    undefined;
  }

  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
    normalizedProp,
    prop;

    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }

    return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
    var units = [],
    u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({ unit: u, priority: priorities[u] });
      }
    }
    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }

  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }

  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }

  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
    value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }

    return value;
  }

  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }

  function get(mom, unit) {
    return mom.isValid() ?
    mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() :
    NaN;
  }

  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (
      unit === 'FullYear' &&
      isLeapYear(mom.year()) &&
      mom.month() === 1 &&
      mom.date() === 29)
      {
        value = toInt(value);
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
        value,
        mom.month(),
        daysInMonth(value, mom.month()));

      } else {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
  }

  // MOMENTS

  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }

  function stringSet(units, value) {
    if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units),
      i;
      for (i = 0; i < prioritized.length; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }

  var match1 = /\d/, //       0 - 9
  match2 = /\d\d/, //      00 - 99
  match3 = /\d{3}/, //     000 - 999
  match4 = /\d{4}/, //    0000 - 9999
  match6 = /[+-]?\d{6}/, // -999999 - 999999
  match1to2 = /\d\d?/, //       0 - 99
  match3to4 = /\d\d\d\d?/, //     999 - 9999
  match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
  match1to3 = /\d{1,3}/, //       0 - 999
  match1to4 = /\d{1,4}/, //       0 - 9999
  match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
  matchUnsigned = /\d+/, //       0 - inf
  matchSigned = /[+-]?\d+/, //    -inf - inf
  matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
  matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
  matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months
  matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  regexes;

  regexes = {};

  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ?
    regex :
    function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }

  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
    return regexEscape(
    s.
    replace('\\', '').
    replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
    matched,
    p1,
    p2,
    p3,
    p4)
    {
      return p1 || p2 || p3 || p4;
    }));

  }

  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken(token, callback) {
    var i,
    func = callback;
    if (typeof token === 'string') {
      token = [token];
    }
    if (isNumber(callback)) {
      func = function func(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }

  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }

  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }

  var YEAR = 0,
  MONTH = 1,
  DATE = 2,
  HOUR = 3,
  MINUTE = 4,
  SECOND = 5,
  MILLISECOND = 6,
  WEEK = 7,
  WEEKDAY = 8;

  function mod(n, x) {
    return (n % x + x) % x;
  }

  var indexOf;

  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function indexOf(o) {
      // I know
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }

  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ?
    isLeapYear(year) ?
    29 :
    28 :
    31 - modMonth % 7 % 2;
  }

  // FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });

  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });

  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  });

  // ALIASES

  addUnitAlias('month', 'M');

  // PRIORITY

  addUnitPriority('month', 8);

  // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });

  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });

  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });

  // LOCALES

  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
  '_'),

  defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
  '_'),

  MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  defaultMonthsShortRegex = matchWord,
  defaultMonthsRegex = matchWord;

  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ?
      this._months :
      this._months['standalone'];
    }
    return isArray(this._months) ?
    this._months[m.month()] :
    this._months[
    (this._months.isFormat || MONTHS_IN_FORMAT).test(format) ?
    'format' :
    'standalone'][
    m.month()];
  }

  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort) ?
      this._monthsShort :
      this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ?
    this._monthsShort[m.month()] :
    this._monthsShort[
    MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][
    m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
    var i,
    ii,
    mom,
    llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(
        mom,
        '').
        toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
        '^' + this.months(mom, '').replace('.', '') + '$',
        'i');

        this._shortMonthsParse[i] = new RegExp(
        '^' + this.monthsShort(mom, '').replace('.', '') + '$',
        'i');

      }
      if (!strict && !this._monthsParse[i]) {
        regex =
        '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (
      strict &&
      format === 'MMMM' &&
      this._longMonthsParse[i].test(monthName))
      {
        return i;
      } else if (
      strict &&
      format === 'MMM' &&
      this._shortMonthsParse[i].test(monthName))
      {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
      // No op
      return mom;
    }

    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        // TODO: Another silent failure?
        if (!isNumber(value)) {
          return mom;
        }
      }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }

  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }

  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }

  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ?
      this._monthsShortStrictRegex :
      this._monthsShortRegex;
    }
  }

  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ?
      this._monthsStrictRegex :
      this._monthsRegex;
    }
  }

  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var shortPieces = [],
    longPieces = [],
    mixedPieces = [],
    i,
    mom;
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
    '^(' + longPieces.join('|') + ')',
    'i');

    this._monthsShortStrictRegex = new RegExp(
    '^(' + shortPieces.join('|') + ')',
    'i');

  }

  // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : '+' + y;
  });

  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });

  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  // ALIASES

  addUnitAlias('year', 'y');

  // PRIORITIES

  addUnitPriority('year', 1);

  // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);

  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] =
    input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  });

  // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  // HOOKS

  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  // MOMENTS

  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear() {
    return isLeapYear(this.year());
  }

  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
  }

  function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      // preserve leap years using a full 400 year cycle, then reset
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
  }

  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    fwd = 7 + dow - doy,
    // first-week day local weekday -- which local weekday is fwd
    fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
  }

  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
    weekOffset = firstWeekOffset(year, dow, doy),
    dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
    resYear,
    resDayOfYear;

    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }

    return {
      year: resYear,
      dayOfYear: resDayOfYear };

  }

  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
    week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
    resWeek,
    resYear;

    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }

    return {
      week: resWeek,
      year: resYear };

  }

  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
    weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

  // FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

  // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

  // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);

  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
  input,
  week,
  config,
  token)
  {
    week[token.substr(0, 1)] = toInt(input);
  });

  // HELPERS

  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 6th is the first week of the year.
  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }

  function localeFirstDayOfYear() {
    return this._week.doy;
  }

  // MOMENTS

  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  // FORMATTING

  addFormatToken('d', 0, 'do', 'day');

  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });

  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });

  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });

  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

  // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

  // PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

  // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });

  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });

  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  });

  // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }

    if (!isNaN(input)) {
      return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }

    return null;
  }

  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }

  // LOCALES
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }

  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
  '_'),

  defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  defaultWeekdaysRegex = matchWord,
  defaultWeekdaysShortRegex = matchWord,
  defaultWeekdaysMinRegex = matchWord;

  function localeWeekdays(m, format) {
    var weekdays = isArray(this._weekdays) ?
    this._weekdays :
    this._weekdays[
    m && m !== true && this._weekdays.isFormat.test(format) ?
    'format' :
    'standalone'];

    return m === true ?
    shiftWeekdays(weekdays, this._week.dow) :
    m ?
    weekdays[m.day()] :
    weekdays;
  }

  function localeWeekdaysShort(m) {
    return m === true ?
    shiftWeekdays(this._weekdaysShort, this._week.dow) :
    m ?
    this._weekdaysShort[m.day()] :
    this._weekdaysShort;
  }

  function localeWeekdaysMin(m) {
    return m === true ?
    shiftWeekdays(this._weekdaysMin, this._week.dow) :
    m ?
    this._weekdaysMin[m.day()] :
    this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
    var i,
    ii,
    mom,
    llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(
        mom,
        '').
        toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(
        mom,
        '').
        toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already

      mom = createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(
        '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
        'i');

        this._shortWeekdaysParse[i] = new RegExp(
        '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
        'i');

        this._minWeekdaysParse[i] = new RegExp(
        '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
        'i');

      }
      if (!this._weekdaysParse[i]) {
        regex =
        '^' +
        this.weekdays(mom, '') +
        '|^' +
        this.weekdaysShort(mom, '') +
        '|^' +
        this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (
      strict &&
      format === 'dddd' &&
      this._fullWeekdaysParse[i].test(weekdayName))
      {
        return i;
      } else if (
      strict &&
      format === 'ddd' &&
      this._shortWeekdaysParse[i].test(weekdayName))
      {
        return i;
      } else if (
      strict &&
      format === 'dd' &&
      this._minWeekdaysParse[i].test(weekdayName))
      {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }

  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }

  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ?
      this._weekdaysStrictRegex :
      this._weekdaysRegex;
    }
  }

  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ?
      this._weekdaysShortStrictRegex :
      this._weekdaysShortRegex;
    }
  }

  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ?
      this._weekdaysMinStrictRegex :
      this._weekdaysMinRegex;
    }
  }

  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var minPieces = [],
    shortPieces = [],
    longPieces = [],
    mixedPieces = [],
    i,
    mom,
    minp,
    shortp,
    longp;
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ''));
      shortp = regexEscape(this.weekdaysShort(mom, ''));
      longp = regexEscape(this.weekdays(mom, ''));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp(
    '^(' + longPieces.join('|') + ')',
    'i');

    this._weekdaysShortStrictRegex = new RegExp(
    '^(' + shortPieces.join('|') + ')',
    'i');

    this._weekdaysMinStrictRegex = new RegExp(
    '^(' + minPieces.join('|') + ')',
    'i');

  }

  // FORMATTING

  function hFormat() {
    return this.hours() % 12 || 12;
  }

  function kFormat() {
    return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);

  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });

  addFormatToken('hmmss', 0, 0, function () {
    return (
      '' +
      hFormat.apply(this) +
      zeroFill(this.minutes(), 2) +
      zeroFill(this.seconds(), 2));

  });

  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });

  addFormatToken('Hmmss', 0, 0, function () {
    return (
      '' +
      this.hours() +
      zeroFill(this.minutes(), 2) +
      zeroFill(this.seconds(), 2));

  });

  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      lowercase);

    });
  }

  meridiem('a', true);
  meridiem('A', false);

  // ALIASES

  addUnitAlias('hour', 'h');

  // PRIORITY
  addUnitPriority('hour', 13);

  // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }

  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);

  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);

  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
    pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
    pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });

  // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
  // Setting the hour should keep the time, because the user explicitly
  // specified which hour they want. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.
  getSetHour = makeGetSet('Hours', true);

  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }

  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse };


  // internal storage for locale config files
  var locales = {},
  localeFamilies = {},
  globalLocale;

  function commonPrefix(arr1, arr2) {
    var i,
    minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }

  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
    var i = 0,
    j,
    next,
    locale,
    split;

    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (
        next &&
        next.length >= j &&
        commonPrefix(split, next) >= j - 1)
        {
          //the next array item is better than a shallower substring of this one
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }

  function loadLocale(name) {
    var oldLocale = null,
    aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (
    locales[name] === undefined &&
    typeof module !== 'undefined' &&
    module &&
    module.exports)
    {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        __webpack_require__(11)("./" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        // mark as not found to avoid repeating expensive file require call causing high CPU
        // when trying to find en-US, en_US, en-us for every format call
        locales[name] = null; // null means not found
      }
    }
    return locales[name];
  }

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }

      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else {
        if (typeof console !== 'undefined' && console.warn) {
          //warn user if arguments are passed but the locale could not be set
          __f__("warn",
          'Locale ' + key + ' not found. Did you forget to load it?', " at node_modules/moment/moment.js:2121");

        }
      }
    }

    return globalLocale._abbr;
  }

  function defineLocale(name, config) {
    if (config !== null) {
      var locale,
      parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple(
        'defineLocaleOverride',
        'use moment.updateLocale(localeName, config) to change ' +
        'an existing locale. moment.defineLocale(localeName, ' +
        'config) should only be used for creating a new locale ' +
        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');

        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);
          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name: name,
              config: config });

            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      }

      // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.
      getSetGlobalLocale(name);

      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }

  function updateLocale(name, config) {
    if (config != null) {
      var locale,
      tmpLocale,
      parentConfig = baseConfig;

      if (locales[name] != null && locales[name].parentLocale != null) {
        // Update existing child locale in-place to avoid memory-leaks
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          // updateLocale is called for creating a new locale
          // Set abbr so it will have a name (getters return
          // undefined otherwise).
          config.abbr = name;
        }
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
      }

      // backwards compat for now: also set the locale
      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }

  // returns locale data
  function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }

    if (!key) {
      return globalLocale;
    }

    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }

    return chooseLocale(key);
  }

  function listLocales() {
    return keys(locales);
  }

  function checkOverflow(m) {
    var overflow,
    a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
      overflow =
      a[MONTH] < 0 || a[MONTH] > 11 ?
      MONTH :
      a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ?
      DATE :
      a[HOUR] < 0 ||
      a[HOUR] > 24 ||
      a[HOUR] === 24 && (
      a[MINUTE] !== 0 ||
      a[SECOND] !== 0 ||
      a[MILLISECOND] !== 0) ?
      HOUR :
      a[MINUTE] < 0 || a[MINUTE] > 59 ?
      MINUTE :
      a[SECOND] < 0 || a[SECOND] > 59 ?
      SECOND :
      a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ?
      MILLISECOND :
      -1;

      if (
      getParsingFlags(m)._overflowDayOfYear && (
      overflow < YEAR || overflow > DATE))
      {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
    }

    return m;
  }

  // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
  isoDates = [
  ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
  ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
  ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
  ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
  ['YYYY-DDD', /\d{4}-\d{3}/],
  ['YYYY-MM', /\d{4}-\d\d/, false],
  ['YYYYYYMMDD', /[+-]\d{10}/],
  ['YYYYMMDD', /\d{8}/],
  ['GGGG[W]WWE', /\d{4}W\d{3}/],
  ['GGGG[W]WW', /\d{4}W\d{2}/, false],
  ['YYYYDDD', /\d{7}/],
  ['YYYYMM', /\d{6}/, false],
  ['YYYY', /\d{4}/, false]],

  // iso time formats and regexes
  isoTimes = [
  ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
  ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
  ['HH:mm:ss', /\d\d:\d\d:\d\d/],
  ['HH:mm', /\d\d:\d\d/],
  ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
  ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
  ['HHmmss', /\d\d\d\d\d\d/],
  ['HHmm', /\d\d\d\d/],
  ['HH', /\d\d/]],

  aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
  // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
  rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60 };


  // date from iso format
  function configFromISO(config) {
    var i,
    l,
    string = config._i,
    match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
    allowTime,
    dateFormat,
    timeFormat,
    tzFormat;

    if (match) {
      getParsingFlags(config).iso = true;

      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }

  function extractFromRFC2822Strings(
  yearStr,
  monthStr,
  dayStr,
  hourStr,
  minuteStr,
  secondStr)
  {
    var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)];


    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }

    return result;
  }

  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2000 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }

  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.
    replace(/\([^)]*\)|[\n\t]/g, ' ').
    replace(/(\s\s+)/g, ' ').
    replace(/^\s\s*/, '').
    replace(/\s\s*$/, '');
  }

  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
      weekdayActual = new Date(
      parsedInput[0],
      parsedInput[1],
      parsedInput[2]).
      getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }

  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    } else {
      var hm = parseInt(numOffset, 10),
      m = hm % 100,
      h = (hm - m) / 100;
      return h * 60 + m;
    }
  }

  // date and time from ref 2822 format
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
    parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(
      match[4],
      match[3],
      match[2],
      match[5],
      match[6],
      match[7]);

      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }

      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);

      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }

  // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }

    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    if (config._strict) {
      config._isValid = false;
    } else {
      // Final attempt, use Input Fallback
      hooks.createFromInputFallback(config);
    }
  }

  hooks.createFromInputFallback = deprecate(
  'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
  'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
  'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });


  // Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }

  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
      nowValue.getUTCFullYear(),
      nowValue.getUTCMonth(),
      nowValue.getUTCDate()];

    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function configFromArray(config) {
    var i,
    date,
    input = [],
    currentDate,
    expectedWeekday,
    yearToUse;

    if (config._d) {
      return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (
      config._dayOfYear > daysInYear(yearToUse) ||
      config._dayOfYear === 0)
      {
        getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
      config._a[i] = input[i] =
      config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }

    // Check for 24:00:00.000
    if (
    config._a[HOUR] === 24 &&
    config._a[MINUTE] === 0 &&
    config._a[SECOND] === 0 &&
    config._a[MILLISECOND] === 0)
    {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(
    null,
    input);

    expectedWeekday = config._useUTC ?
    config._d.getUTCDay() :
    config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
      config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (
    config._w &&
    typeof config._w.d !== 'undefined' &&
    config._w.d !== expectedWeekday)
    {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }

  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = defaults(
      w.GG,
      config._a[YEAR],
      weekOfYear(createLocal(), 1, 4).year);

      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;

      curWeek = weekOfYear(createLocal(), dow, doy);

      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

      // Default to current week.
      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from beginning of week
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to beginning of week
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }

  // constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

  // constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

  // date from string and format string
  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
    i,
    parsedInput,
    tokens,
    token,
    skipped,
    stringLength = string.length,
    totalParsedInputLength = 0,
    era;

    tokens =
    expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) ||
      [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(
        string.indexOf(parsedInput) + parsedInput.length);

        totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver =
    stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (
    config._a[HOUR] <= 12 &&
    getParsingFlags(config).bigHour === true &&
    config._a[HOUR] > 0)
    {
      getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(
    config._locale,
    config._a[HOUR],
    config._meridiem);


    // handle era
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }

    configFromArray(config);
    checkOverflow(config);
  }

  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
      // nothing to do
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  }

  // date from string and array of format strings
  function configFromStringAndArray(config) {
    var tempConfig,
    bestMoment,
    scoreToBeat,
    i,
    currentScore,
    validFormatFound,
    bestFormatIsValid = false;

    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }

    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (isValid(tempConfig)) {
        validFormatFound = true;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += getParsingFlags(tempConfig).charsLeftOver;

      //or tokens
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

      getParsingFlags(tempConfig).score = currentScore;

      if (!bestFormatIsValid) {
        if (
        scoreToBeat == null ||
        currentScore < scoreToBeat ||
        validFormatFound)
        {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }

    extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
    if (config._d) {
      return;
    }

    var i = normalizeObjectUnits(config._i),
    dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = map(
    [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
    function (obj) {
      return obj && parseInt(obj, 10);
    });


    configFromArray(config);
  }

  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }

    return res;
  }

  function prepareConfig(config) {
    var input = config._i,
    format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || format === undefined && input === '') {
      return createInvalid({ nullInput: true });
    }

    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }

    if (!isValid(config)) {
      config._d = null;
    }

    return config;
  }

  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }

  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (format === true || format === false) {
      strict = format;
      format = undefined;
    }

    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }

    if (
    isObject(input) && isObjectEmpty(input) ||
    isArray(input) && input.length === 0)
    {
      input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
  }

  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate(
  'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
  function () {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  }),

  prototypeMax = deprecate(
  'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
  function () {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  });


  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }

  // TODO: Use [].sort instead?
  function min() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
  }

  function max() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
  }

  var now = function now() {
    return Date.now ? Date.now() : +new Date();
  };

  var ordering = [
  'year',
  'quarter',
  'month',
  'week',
  'day',
  'hour',
  'minute',
  'second',
  'millisecond'];


  function isDurationValid(m) {
    var key,
    unitHasDecimal = false,
    i;
    for (key in m) {
      if (
      hasOwnProp(m, key) &&
      !(
      indexOf.call(ordering, key) !== -1 && (
      m[key] == null || !isNaN(m[key]))))

      {
        return false;
      }
    }

    for (i = 0; i < ordering.length; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }

    return true;
  }

  function isValid$1() {
    return this._isValid;
  }

  function createInvalid$1() {
    return createDuration(NaN);
  }

  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
    years = normalizedInput.year || 0,
    quarters = normalizedInput.quarter || 0,
    months = normalizedInput.month || 0,
    weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
    days = normalizedInput.day || 0,
    hours = normalizedInput.hour || 0,
    minutes = normalizedInput.minute || 0,
    seconds = normalizedInput.second || 0,
    milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds =
    +milliseconds +
    seconds * 1e3 + // 1000
    minutes * 6e4 + // 1000 * 60
    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
  }

  function isDuration(obj) {
    return obj instanceof Duration;
  }

  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
    lengthDiff = Math.abs(array1.length - array2.length),
    diffs = 0,
    i;
    for (i = 0; i < len; i++) {
      if (
      dontConvert && array1[i] !== array2[i] ||
      !dontConvert && toInt(array1[i]) !== toInt(array2[i]))
      {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }

  // FORMATTING

  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset(),
      sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return (
        sign +
        zeroFill(~~(offset / 60), 2) +
        separator +
        zeroFill(~~offset % 60, 2));

    });
  }

  offset('Z', ':');
  offset('ZZ', '');

  // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });

  // HELPERS

  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']
  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
    chunk,
    parts,
    minutes;

    if (matches === null) {
      return null;
    }

    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  }

  // Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
      res = model.clone();
      diff =
      (isMoment(input) || isDate(input) ?
      input.valueOf() :
      createLocal(input).valueOf()) - res.valueOf();
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(res._d.valueOf() + diff);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }

  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
  }

  // HOOKS

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

  // MOMENTS

  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
    localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(
          this,
          createDuration(input - offset, 'm'),
          1,
          false);

        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }

  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }

      this.utcOffset(input, keepLocalTime);

      return this;
    } else {
      return -this.utcOffset();
    }
  }

  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }

  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }

  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset());

  }

  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }

    var c = {},
    other;

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted =
      this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }

    return this._isDSTShifted;
  }

  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }

  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // ASP.NET json date format regex
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day
  isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function createDuration(input, key) {
    var duration = input,
    // matching against regexp is expensive, do it on demand
    match = null,
    sign,
    ret,
    diffRes;

    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months };

    } else if (isNumber(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
      };
    } else if (match = isoRegex.exec(input)) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign) };

    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (
    typeof duration === 'object' && (
    'from' in duration || 'to' in duration))
    {
      diffRes = momentsDifference(
      createLocal(duration.from),
      createLocal(duration.to));


      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }

    if (isDuration(input) && hasOwnProp(input, '_isValid')) {
      ret._isValid = input._isValid;
    }

    return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
    var res = {};

    res.months =
    other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
  }

  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }

    return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;
      //invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
        name,
        'moment().' +
        name +
        '(period, number) is deprecated. Please use moment().' +
        name +
        '(number, period). ' +
        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');

        tmp = val;
        val = period;
        period = tmp;
      }

      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }

  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
    days = absRound(duration._days),
    months = absRound(duration._months);

    if (!mom.isValid()) {
      // No op
      return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }

  var add = createAdder(1, 'add'),
  subtract = createAdder(-1, 'subtract');

  function isString(input) {
    return typeof input === 'string' || input instanceof String;
  }

  // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
  function isMomentInput(input) {
    return (
      isMoment(input) ||
      isDate(input) ||
      isString(input) ||
      isNumber(input) ||
      isNumberOrStringArray(input) ||
      isMomentInputObject(input) ||
      input === null ||
      input === undefined);

  }

  function isMomentInputObject(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input),
    propertyTest = false,
    properties = [
    'years',
    'year',
    'y',
    'months',
    'month',
    'M',
    'days',
    'day',
    'd',
    'dates',
    'date',
    'D',
    'hours',
    'hour',
    'h',
    'minutes',
    'minute',
    'm',
    'seconds',
    'second',
    's',
    'milliseconds',
    'millisecond',
    'ms'],

    i,
    property;

    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }

    return objectTest && propertyTest;
  }

  function isNumberOrStringArray(input) {
    var arrayTest = isArray(input),
    dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest =
      input.filter(function (item) {
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }

  function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input),
    propertyTest = false,
    properties = [
    'sameDay',
    'nextDay',
    'lastDay',
    'nextWeek',
    'lastWeek',
    'sameElse'],

    i,
    property;

    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }

    return objectTest && propertyTest;
  }

  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ?
    'sameElse' :
    diff < -1 ?
    'lastWeek' :
    diff < 0 ?
    'lastDay' :
    diff < 1 ?
    'sameDay' :
    diff < 2 ?
    'nextDay' :
    diff < 7 ?
    'nextWeek' :
    'sameElse';
  }

  function calendar$1(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = undefined;
        formats = undefined;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = undefined;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = undefined;
      }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
    sod = cloneWithOffset(now, this).startOf('day'),
    format = hooks.calendarFormat(this, sod) || 'sameElse',
    output =
    formats && (
    isFunction(formats[format]) ?
    formats[format].call(this, now) :
    formats[format]);

    return this.format(
    output || this.localeData().calendar(format, this, createLocal(now)));

  }

  function clone() {
    return new Moment(this);
  }

  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }

  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }

  function isBetween(from, to, units, inclusivity) {
    var localFrom = isMoment(from) ? from : createLocal(from),
    localTo = isMoment(to) ? to : createLocal(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || '()';
    return (
      (inclusivity[0] === '(' ?
      this.isAfter(localFrom, units) :
      !this.isBefore(localFrom, units)) && (
      inclusivity[1] === ')' ?
      this.isBefore(localTo, units) :
      !this.isAfter(localTo, units)));

  }

  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
    inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return (
        this.clone().startOf(units).valueOf() <= inputMs &&
        inputMs <= this.clone().endOf(units).valueOf());

    }
  }

  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }

  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }

  function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
      return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
      return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
      case 'year':
        output = monthDiff(this, that) / 12;
        break;
      case 'month':
        output = monthDiff(this, that);
        break;
      case 'quarter':
        output = monthDiff(this, that) / 3;
        break;
      case 'second':
        output = (this - that) / 1e3;
        break; // 1000
      case 'minute':
        output = (this - that) / 6e4;
        break; // 1000 * 60
      case 'hour':
        output = (this - that) / 36e5;
        break; // 1000 * 60 * 60
      case 'day':
        output = (this - that - zoneDelta) / 864e5;
        break; // 1000 * 60 * 60 * 24, negate dst
      case 'week':
        output = (this - that - zoneDelta) / 6048e5;
        break; // 1000 * 60 * 60 * 24 * 7, negate dst
      default:
        output = this - that;}


    return asFloat ? output : absFloor(output);
  }

  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      // end-of-month calculations work correct when the start month has more
      // days than the end month.
      return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
    // b is in (anchor - 1 month, anchor + 1 month)
    anchor = a.clone().add(wholeMonthDiff, 'months'),
    anchor2,
    adjust;

    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true,
    m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(
      m,
      utc ?
      'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' :
      'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');

    }
    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).
        toISOString().
        replace('Z', formatMoment(m, 'Z'));
      }
    }
    return formatMoment(
    m,
    utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');

  }

  /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
  function inspect() {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
    zone = '',
    prefix,
    year,
    datetime,
    suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
  }

  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ?
      hooks.defaultFormatUtc :
      hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  function from(time, withoutSuffix) {
    if (
    this.isValid() && (
    isMoment(time) && time.isValid() || createLocal(time).isValid()))
    {
      return createDuration({ to: this, from: time }).
      locale(this.locale()).
      humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  function to(time, withoutSuffix) {
    if (
    this.isValid() && (
    isMoment(time) && time.isValid() || createLocal(time).isValid()))
    {
      return createDuration({ from: this, to: time }).
      locale(this.locale()).
      humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }

  // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.
  function locale(key) {
    var newLocaleData;

    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }

  var lang = deprecate(
  'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
  function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });


  function localeData() {
    return this._locale;
  }

  var MS_PER_SECOND = 1000,
  MS_PER_MINUTE = 60 * MS_PER_SECOND,
  MS_PER_HOUR = 60 * MS_PER_MINUTE,
  MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

  // actual modulo - handles negative numbers (for dates before 1970):
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }

  function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }

  function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }

  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
      case 'year':
        time = startOfDate(this.year(), 0, 1);
        break;
      case 'quarter':
        time = startOfDate(
        this.year(),
        this.month() - this.month() % 3,
        1);

        break;
      case 'month':
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case 'week':
        time = startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday());

        break;
      case 'isoWeek':
        time = startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1));

        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case 'hour':
        time = this._d.valueOf();
        time -= mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR);

        break;
      case 'minute':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case 'second':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;}


    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }

  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
      case 'year':
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case 'quarter':
        time =
        startOfDate(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1) -
        1;
        break;
      case 'month':
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case 'week':
        time =
        startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7) -
        1;
        break;
      case 'isoWeek':
        time =
        startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7) -
        1;
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case 'hour':
        time = this._d.valueOf();
        time +=
        MS_PER_HOUR -
        mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR) -

        1;
        break;
      case 'minute':
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case 'second':
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;}


    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }

  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }

  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }

  function toDate() {
    return new Date(this.valueOf());
  }

  function toArray() {
    var m = this;
    return [
    m.year(),
    m.month(),
    m.date(),
    m.hour(),
    m.minute(),
    m.second(),
    m.millisecond()];

  }

  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds() };

  }

  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2() {
    return isValid(this);
  }

  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }

  function invalidAt() {
    return getParsingFlags(this).overflow;
  }

  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict };

  }

  addFormatToken('N', 0, 0, 'eraAbbr');
  addFormatToken('NN', 0, 0, 'eraAbbr');
  addFormatToken('NNN', 0, 0, 'eraAbbr');
  addFormatToken('NNNN', 0, 0, 'eraName');
  addFormatToken('NNNNN', 0, 0, 'eraNarrow');

  addFormatToken('y', ['y', 1], 'yo', 'eraYear');
  addFormatToken('y', ['yy', 2], 0, 'eraYear');
  addFormatToken('y', ['yyy', 3], 0, 'eraYear');
  addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

  addRegexToken('N', matchEraAbbr);
  addRegexToken('NN', matchEraAbbr);
  addRegexToken('NNN', matchEraAbbr);
  addRegexToken('NNNN', matchEraName);
  addRegexToken('NNNNN', matchEraNarrow);

  addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
  input,
  array,
  config,
  token)
  {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
      getParsingFlags(config).era = era;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  });

  addRegexToken('y', matchUnsigned);
  addRegexToken('yy', matchUnsigned);
  addRegexToken('yyy', matchUnsigned);
  addRegexToken('yyyy', matchUnsigned);
  addRegexToken('yo', matchEraYearOrdinal);

  addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
  addParseToken(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }

    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });

  function localeEras(m, format) {
    var i,
    l,
    date,
    eras = this._eras || getLocale('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case 'string':
          // truncate time
          date = hooks(eras[i].since).startOf('day');
          eras[i].since = date.valueOf();
          break;}


      switch (typeof eras[i].until) {
        case 'undefined':
          eras[i].until = +Infinity;
          break;
        case 'string':
          // truncate time
          date = hooks(eras[i].until).startOf('day').valueOf();
          eras[i].until = date.valueOf();
          break;}

    }
    return eras;
  }

  function localeErasParse(eraName, format, strict) {
    var i,
    l,
    eras = this.eras(),
    name,
    abbr,
    narrow;
    eraName = eraName.toUpperCase();

    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();

      if (strict) {
        switch (format) {
          case 'N':
          case 'NN':
          case 'NNN':
            if (abbr === eraName) {
              return eras[i];
            }
            break;

          case 'NNNN':
            if (name === eraName) {
              return eras[i];
            }
            break;

          case 'NNNNN':
            if (narrow === eraName) {
              return eras[i];
            }
            break;}

      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }

  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }

  function getEraName() {
    var i,
    l,
    val,
    eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }

    return '';
  }

  function getEraNarrow() {
    var i,
    l,
    val,
    eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }

    return '';
  }

  function getEraAbbr() {
    var i,
    l,
    val,
    eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }

    return '';
  }

  function getEraYear() {
    var i,
    l,
    dir,
    val,
    eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? +1 : -1;

      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (
      eras[i].since <= val && val <= eras[i].until ||
      eras[i].until <= val && val <= eras[i].since)
      {
        return (
          (this.year() - hooks(eras[i].since).year()) * dir +
          eras[i].offset);

      }
    }

    return this.year();
  }

  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNameRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }

  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, '_erasAbbrRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }

  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNarrowRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }

  function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
  }

  function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
  }

  function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
  }

  function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || matchUnsigned;
  }

  function computeErasParse() {
    var abbrPieces = [],
    namePieces = [],
    narrowPieces = [],
    mixedPieces = [],
    i,
    l,
    eras = this.eras();

    for (i = 0, l = eras.length; i < l; ++i) {
      namePieces.push(regexEscape(eras[i].name));
      abbrPieces.push(regexEscape(eras[i].abbr));
      narrowPieces.push(regexEscape(eras[i].narrow));

      mixedPieces.push(regexEscape(eras[i].name));
      mixedPieces.push(regexEscape(eras[i].abbr));
      mixedPieces.push(regexEscape(eras[i].narrow));
    }

    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp(
    '^(' + narrowPieces.join('|') + ')',
    'i');

  }

  // FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });

  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

  // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);

  // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);

  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
  input,
  week,
  config,
  token)
  {
    week[token.substr(0, 2)] = toInt(input);
  });

  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  });

  // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
    this,
    input,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy);

  }

  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
    this,
    input,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4);

  }

  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }

  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }

  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
    date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }

  // FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

  // ALIASES

  addUnitAlias('quarter', 'Q');

  // PRIORITY

  addUnitPriority('quarter', 7);

  // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });

  // MOMENTS

  function getSetQuarter(input) {
    return input == null ?
    Math.ceil((this.month() + 1) / 3) :
    this.month((input - 1) * 3 + this.month() % 3);
  }

  // FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

  // ALIASES

  addUnitAlias('date', 'D');

  // PRIORITY
  addUnitPriority('date', 9);

  // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
    locale._dayOfMonthOrdinalParse || locale._ordinalParse :
    locale._dayOfMonthOrdinalParseLenient;
  });

  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });

  // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true);

  // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  // ALIASES

  addUnitAlias('dayOfYear', 'DDD');

  // PRIORITY
  addUnitPriority('dayOfYear', 4);

  // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  });

  // HELPERS

  // MOMENTS

  function getSetDayOfYear(input) {
    var dayOfYear =
    Math.round(
    (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) +
    1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  }

  // FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

  // ALIASES

  addUnitAlias('minute', 'm');

  // PRIORITY

  addUnitPriority('minute', 14);

  // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

  // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false);

  // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

  // ALIASES

  addUnitAlias('second', 's');

  // PRIORITY

  addUnitPriority('second', 15);

  // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

  // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false);

  // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });

  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });

  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  });

  // ALIASES

  addUnitAlias('millisecond', 'ms');

  // PRIORITY

  addUnitPriority('millisecond', 16);

  // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);

  var token, getSetMillisecond;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }

  getSetMillisecond = makeGetSet('Milliseconds', false);

  // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

  // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }

  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;

  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
      return 'Moment<' + this.format() + '>';
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate(
  'dates accessor is deprecated. Use date instead.',
  getSetDayOfMonth);

  proto.months = deprecate(
  'months accessor is deprecated. Use month instead',
  getSetMonth);

  proto.years = deprecate(
  'years accessor is deprecated. Use year instead',
  getSetYear);

  proto.zone = deprecate(
  'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
  getSetZone);

  proto.isDSTShifted = deprecate(
  'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
  isDaylightSavingTimeShifted);


  function createUnix(input) {
    return createLocal(input * 1000);
  }

  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat(string) {
    return string;
  }

  var proto$1 = Locale.prototype;

  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;

  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;

  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;

  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;

  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1(format, index, field, setter) {
    var locale = getLocale(),
    utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }

  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';

    if (index != null) {
      return get$1(format, index, field, 'month');
    }

    var i,
    out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }
    return out;
  }

  // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)
  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    }

    var locale = getLocale(),
    shift = localeSorted ? locale._week.dow : 0,
    i,
    out = [];

    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }

  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
    eras: [
    {
      since: '0001-01-01',
      until: +Infinity,
      offset: 1,
      name: 'Anno Domini',
      narrow: 'AD',
      abbr: 'AD' },

    {
      since: '0000-12-31',
      until: -Infinity,
      offset: 1,
      name: 'Before Christ',
      narrow: 'BC',
      abbr: 'BC' }],


    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      toInt(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    } });


  // Side effect imports

  hooks.lang = deprecate(
  'moment.lang is deprecated. Use moment.locale instead.',
  getSetGlobalLocale);

  hooks.langData = deprecate(
  'moment.langData is deprecated. Use moment.localeData instead.',
  getLocale);


  var mathAbs = Math.abs;

  function abs() {
    var data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
  }

  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
  }

  // supports only 2.0-style add(1, 's') or add(duration)
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }

  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }

  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }

  function bubble() {
    var milliseconds = this._milliseconds,
    days = this._days,
    months = this._months,
    data = this._data,
    seconds,
    minutes,
    hours,
    years,
    monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
    !(
    milliseconds >= 0 && days >= 0 && months >= 0 ||
    milliseconds <= 0 && days <= 0 && months <= 0))

    {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;

    hours = absFloor(minutes / 60);
    data.hours = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
  }

  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }

  function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }

  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days,
    months,
    milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      switch (units) {
        case 'month':
          return months;
        case 'quarter':
          return months / 3;
        case 'year':
          return months / 12;}

    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error('Unknown unit ' + units);}

    }
  }

  // TODO: Use this.as('ms')?
  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }
    return (
      this._milliseconds +
      this._days * 864e5 +
      this._months % 12 * 2592e6 +
      toInt(this._months / 12) * 31536e6);

  }

  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }

  var asMilliseconds = makeAs('ms'),
  asSeconds = makeAs('s'),
  asMinutes = makeAs('m'),
  asHours = makeAs('h'),
  asDays = makeAs('d'),
  asWeeks = makeAs('w'),
  asMonths = makeAs('M'),
  asQuarters = makeAs('Q'),
  asYears = makeAs('y');

  function clone$1() {
    return createDuration(this);
  }

  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }

  var milliseconds = makeGetter('milliseconds'),
  seconds = makeGetter('seconds'),
  minutes = makeGetter('minutes'),
  hours = makeGetter('hours'),
  days = makeGetter('days'),
  months = makeGetter('months'),
  years = makeGetter('years');

  function weeks() {
    return absFloor(this.days() / 7);
  }

  var round = Math.round,
  thresholds = {
    ss: 44, // a few seconds to seconds
    s: 45, // seconds to minute
    m: 45, // minutes to hour
    h: 22, // hours to day
    d: 26, // days to month/week
    w: null, // weeks to month
    M: 11 // months to year
  };

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = createDuration(posNegDuration).abs(),
    seconds = round(duration.as('s')),
    minutes = round(duration.as('m')),
    hours = round(duration.as('h')),
    days = round(duration.as('d')),
    months = round(duration.as('M')),
    weeks = round(duration.as('w')),
    years = round(duration.as('y')),
    a =
    seconds <= thresholds.ss && ['s', seconds] ||
    seconds < thresholds.s && ['ss', seconds] ||
    minutes <= 1 && ['m'] ||
    minutes < thresholds.m && ['mm', minutes] ||
    hours <= 1 && ['h'] ||
    hours < thresholds.h && ['hh', hours] ||
    days <= 1 && ['d'] ||
    days < thresholds.d && ['dd', days];

    if (thresholds.w != null) {
      a =
      a ||
      weeks <= 1 && ['w'] ||
      weeks < thresholds.w && ['ww', weeks];
    }
    a = a ||
    months <= 1 && ['M'] ||
    months < thresholds.M && ['MM', months] ||
    years <= 1 && ['y'] || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }

  // This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }
    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }
    return false;
  }

  // This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }
    return true;
  }

  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var withSuffix = false,
    th = thresholds,
    locale,
    output;

    if (typeof argWithSuffix === 'object') {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }

    locale = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale);

    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }

  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000,
    days = abs$1(this._days),
    months = abs$1(this._months),
    minutes,
    hours,
    years,
    s,
    total = this.asSeconds(),
    totalSign,
    ymSign,
    daysSign,
    hmsSign;

    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return (
      totalSign +
      'P' + (
      years ? ymSign + years + 'Y' : '') + (
      months ? ymSign + months + 'M' : '') + (
      days ? daysSign + days + 'D' : '') + (
      hours || minutes || seconds ? 'T' : '') + (
      hours ? hmsSign + hours + 'H' : '') + (
      minutes ? hmsSign + minutes + 'M' : '') + (
      seconds ? hmsSign + s + 'S' : ''));

  }

  var proto$2 = Duration.prototype;

  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;

  proto$2.toIsoString = deprecate(
  'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
  toISOString$1);

  proto$2.lang = lang;

  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

  // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  });

  //! moment.js

  hooks.version = '2.29.1';

  setHookCallback(createLocal);

  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;

  // currently HTML5 input type only supports 24-hour formats
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM' // <input type="month" />
  };

  return hooks;

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)["default"], __webpack_require__(/*! (webpack)/buildin/module.js */ 10)(module)))

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 10 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 11 */
/*!********************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale sync ^\.\/.*$ ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 12,
	"./af.js": 12,
	"./ar": 13,
	"./ar-dz": 14,
	"./ar-dz.js": 14,
	"./ar-kw": 15,
	"./ar-kw.js": 15,
	"./ar-ly": 16,
	"./ar-ly.js": 16,
	"./ar-ma": 17,
	"./ar-ma.js": 17,
	"./ar-sa": 18,
	"./ar-sa.js": 18,
	"./ar-tn": 19,
	"./ar-tn.js": 19,
	"./ar.js": 13,
	"./az": 20,
	"./az.js": 20,
	"./be": 21,
	"./be.js": 21,
	"./bg": 22,
	"./bg.js": 22,
	"./bm": 23,
	"./bm.js": 23,
	"./bn": 24,
	"./bn-bd": 25,
	"./bn-bd.js": 25,
	"./bn.js": 24,
	"./bo": 26,
	"./bo.js": 26,
	"./br": 27,
	"./br.js": 27,
	"./bs": 28,
	"./bs.js": 28,
	"./ca": 29,
	"./ca.js": 29,
	"./cs": 30,
	"./cs.js": 30,
	"./cv": 31,
	"./cv.js": 31,
	"./cy": 32,
	"./cy.js": 32,
	"./da": 33,
	"./da.js": 33,
	"./de": 34,
	"./de-at": 35,
	"./de-at.js": 35,
	"./de-ch": 36,
	"./de-ch.js": 36,
	"./de.js": 34,
	"./dv": 37,
	"./dv.js": 37,
	"./el": 38,
	"./el.js": 38,
	"./en-au": 39,
	"./en-au.js": 39,
	"./en-ca": 40,
	"./en-ca.js": 40,
	"./en-gb": 41,
	"./en-gb.js": 41,
	"./en-ie": 42,
	"./en-ie.js": 42,
	"./en-il": 43,
	"./en-il.js": 43,
	"./en-in": 44,
	"./en-in.js": 44,
	"./en-nz": 45,
	"./en-nz.js": 45,
	"./en-sg": 46,
	"./en-sg.js": 46,
	"./eo": 47,
	"./eo.js": 47,
	"./es": 48,
	"./es-do": 49,
	"./es-do.js": 49,
	"./es-mx": 50,
	"./es-mx.js": 50,
	"./es-us": 51,
	"./es-us.js": 51,
	"./es.js": 48,
	"./et": 52,
	"./et.js": 52,
	"./eu": 53,
	"./eu.js": 53,
	"./fa": 54,
	"./fa.js": 54,
	"./fi": 55,
	"./fi.js": 55,
	"./fil": 56,
	"./fil.js": 56,
	"./fo": 57,
	"./fo.js": 57,
	"./fr": 58,
	"./fr-ca": 59,
	"./fr-ca.js": 59,
	"./fr-ch": 60,
	"./fr-ch.js": 60,
	"./fr.js": 58,
	"./fy": 61,
	"./fy.js": 61,
	"./ga": 62,
	"./ga.js": 62,
	"./gd": 63,
	"./gd.js": 63,
	"./gl": 64,
	"./gl.js": 64,
	"./gom-deva": 65,
	"./gom-deva.js": 65,
	"./gom-latn": 66,
	"./gom-latn.js": 66,
	"./gu": 67,
	"./gu.js": 67,
	"./he": 68,
	"./he.js": 68,
	"./hi": 69,
	"./hi.js": 69,
	"./hr": 70,
	"./hr.js": 70,
	"./hu": 71,
	"./hu.js": 71,
	"./hy-am": 72,
	"./hy-am.js": 72,
	"./id": 73,
	"./id.js": 73,
	"./is": 74,
	"./is.js": 74,
	"./it": 75,
	"./it-ch": 76,
	"./it-ch.js": 76,
	"./it.js": 75,
	"./ja": 77,
	"./ja.js": 77,
	"./jv": 78,
	"./jv.js": 78,
	"./ka": 79,
	"./ka.js": 79,
	"./kk": 80,
	"./kk.js": 80,
	"./km": 81,
	"./km.js": 81,
	"./kn": 82,
	"./kn.js": 82,
	"./ko": 83,
	"./ko.js": 83,
	"./ku": 84,
	"./ku.js": 84,
	"./ky": 85,
	"./ky.js": 85,
	"./lb": 86,
	"./lb.js": 86,
	"./lo": 87,
	"./lo.js": 87,
	"./lt": 88,
	"./lt.js": 88,
	"./lv": 89,
	"./lv.js": 89,
	"./me": 90,
	"./me.js": 90,
	"./mi": 91,
	"./mi.js": 91,
	"./mk": 92,
	"./mk.js": 92,
	"./ml": 93,
	"./ml.js": 93,
	"./mn": 94,
	"./mn.js": 94,
	"./mr": 95,
	"./mr.js": 95,
	"./ms": 96,
	"./ms-my": 97,
	"./ms-my.js": 97,
	"./ms.js": 96,
	"./mt": 98,
	"./mt.js": 98,
	"./my": 99,
	"./my.js": 99,
	"./nb": 100,
	"./nb.js": 100,
	"./ne": 101,
	"./ne.js": 101,
	"./nl": 102,
	"./nl-be": 103,
	"./nl-be.js": 103,
	"./nl.js": 102,
	"./nn": 104,
	"./nn.js": 104,
	"./oc-lnc": 105,
	"./oc-lnc.js": 105,
	"./pa-in": 106,
	"./pa-in.js": 106,
	"./pl": 107,
	"./pl.js": 107,
	"./pt": 108,
	"./pt-br": 109,
	"./pt-br.js": 109,
	"./pt.js": 108,
	"./ro": 110,
	"./ro.js": 110,
	"./ru": 111,
	"./ru.js": 111,
	"./sd": 112,
	"./sd.js": 112,
	"./se": 113,
	"./se.js": 113,
	"./si": 114,
	"./si.js": 114,
	"./sk": 115,
	"./sk.js": 115,
	"./sl": 116,
	"./sl.js": 116,
	"./sq": 117,
	"./sq.js": 117,
	"./sr": 118,
	"./sr-cyrl": 119,
	"./sr-cyrl.js": 119,
	"./sr.js": 118,
	"./ss": 120,
	"./ss.js": 120,
	"./sv": 121,
	"./sv.js": 121,
	"./sw": 122,
	"./sw.js": 122,
	"./ta": 123,
	"./ta.js": 123,
	"./te": 124,
	"./te.js": 124,
	"./tet": 125,
	"./tet.js": 125,
	"./tg": 126,
	"./tg.js": 126,
	"./th": 127,
	"./th.js": 127,
	"./tk": 128,
	"./tk.js": 128,
	"./tl-ph": 129,
	"./tl-ph.js": 129,
	"./tlh": 130,
	"./tlh.js": 130,
	"./tr": 131,
	"./tr.js": 131,
	"./tzl": 132,
	"./tzl.js": 132,
	"./tzm": 133,
	"./tzm-latn": 134,
	"./tzm-latn.js": 134,
	"./tzm.js": 133,
	"./ug-cn": 135,
	"./ug-cn.js": 135,
	"./uk": 136,
	"./uk.js": 136,
	"./ur": 137,
	"./ur.js": 137,
	"./uz": 138,
	"./uz-latn": 139,
	"./uz-latn.js": 139,
	"./uz.js": 138,
	"./vi": 140,
	"./vi.js": 140,
	"./x-pseudo": 141,
	"./x-pseudo.js": 141,
	"./yo": 142,
	"./yo.js": 142,
	"./zh-cn": 143,
	"./zh-cn.js": 143,
	"./zh-hk": 144,
	"./zh-hk.js": 144,
	"./zh-mo": 145,
	"./zh-mo.js": 145,
	"./zh-tw": 146,
	"./zh-tw.js": 146
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 11;

/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/af.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Afrikaans [af]
//! author : Werner Mollentze : https://github.com/wernerm

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var af = moment.defineLocale('af', {
    months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split(
    '_'),

    weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM: function isPM(input) {
      return /^nm$/i.test(input);
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'vm' : 'VM';
      } else {
        return isLower ? 'nm' : 'NM';
      }
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Vandag om] LT',
      nextDay: '[M??re om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[Gister om] LT',
      lastWeek: '[Laas] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'oor %s',
      past: '%s gelede',
      s: "'n paar sekondes",
      ss: '%d sekondes',
      m: "'n minuut",
      mm: '%d minute',
      h: "'n uur",
      hh: '%d ure',
      d: "'n dag",
      dd: '%d dae',
      M: "'n maand",
      MM: '%d maande',
      y: "'n jaar",
      yy: '%d jaar' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return (
        number + (
        number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'));
      // Thanks to Joris R??ling : https://github.com/jjupiter
    },
    week: {
      dow: 1, // Maandag is die eerste dag van die week.
      doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
    } });


  return af;

});

/***/ }),
/* 13 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ar.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '??',
    2: '??',
    3: '??',
    4: '??',
    5: '??',
    6: '??',
    7: '??',
    8: '??',
    9: '??',
    0: '??' },

  numberMap = {
    '??': '1',
    '??': '2',
    '??': '3',
    '??': '4',
    '??': '5',
    '??': '6',
    '??': '7',
    '??': '8',
    '??': '9',
    '??': '0' },

  pluralForm = function pluralForm(n) {
    return n === 0 ?
    0 :
    n === 1 ?
    1 :
    n === 2 ?
    2 :
    n % 100 >= 3 && n % 100 <= 10 ?
    3 :
    n % 100 >= 11 ?
    4 :
    5;
  },
  plurals = {
    s: [
    '?????? ???? ??????????',
    '?????????? ??????????',
    ['??????????????', '??????????????'],
    '%d ????????',
    '%d ??????????',
    '%d ??????????'],

    m: [
    '?????? ???? ??????????',
    '?????????? ??????????',
    ['??????????????', '??????????????'],
    '%d ??????????',
    '%d ??????????',
    '%d ??????????'],

    h: [
    '?????? ???? ????????',
    '???????? ??????????',
    ['????????????', '????????????'],
    '%d ??????????',
    '%d ????????',
    '%d ????????'],

    d: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ????????',
    '%d ??????????',
    '%d ??????'],

    M: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ????????',
    '%d ????????',
    '%d ??????'],

    y: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ??????????',
    '%d ??????????',
    '%d ??????'] },


  pluralize = function pluralize(u) {
    return function (number, withoutSuffix, string, isFuture) {
      var f = pluralForm(number),
      str = plurals[u][pluralForm(number)];
      if (f === 2) {
        str = str[withoutSuffix ? 0 : 1];
      }
      return str.replace(/%d/i, number);
    };
  },
  months = [
  '??????????',
  '????????????',
  '????????',
  '??????????',
  '????????',
  '??????????',
  '??????????',
  '??????????',
  '????????????',
  '????????????',
  '????????????',
  '????????????'];


  var ar = moment.defineLocale('ar', {
    months: months,
    monthsShort: months,
    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /??|??/,
    isPM: function isPM(input) {
      return '??' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??';
      } else {
        return '??';
      }
    },
    calendar: {
      sameDay: '[?????????? ?????? ????????????] LT',
      nextDay: '[???????? ?????? ????????????] LT',
      nextWeek: 'dddd [?????? ????????????] LT',
      lastDay: '[?????? ?????? ????????????] LT',
      lastWeek: 'dddd [?????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '?????? %s',
      past: '?????? %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y') },

    preparse: function preparse(string) {
      return string.
      replace(/[????????????????????]/g, function (match) {
        return numberMap[match];
      }).
      replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.
      replace(/\d/g, function (match) {
        return symbolMap[match];
      }).
      replace(/,/g, '??');
    },
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return ar;

});

/***/ }),
/* 14 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ar-dz.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Algeria) [ar-dz]
//! author : Amine Roukh: https://github.com/Amine27
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
//! author : Noureddine LOUAHEDJ : https://github.com/noureddinem

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var pluralForm = function pluralForm(n) {
    return n === 0 ?
    0 :
    n === 1 ?
    1 :
    n === 2 ?
    2 :
    n % 100 >= 3 && n % 100 <= 10 ?
    3 :
    n % 100 >= 11 ?
    4 :
    5;
  },
  plurals = {
    s: [
    '?????? ???? ??????????',
    '?????????? ??????????',
    ['??????????????', '??????????????'],
    '%d ????????',
    '%d ??????????',
    '%d ??????????'],

    m: [
    '?????? ???? ??????????',
    '?????????? ??????????',
    ['??????????????', '??????????????'],
    '%d ??????????',
    '%d ??????????',
    '%d ??????????'],

    h: [
    '?????? ???? ????????',
    '???????? ??????????',
    ['????????????', '????????????'],
    '%d ??????????',
    '%d ????????',
    '%d ????????'],

    d: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ????????',
    '%d ??????????',
    '%d ??????'],

    M: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ????????',
    '%d ????????',
    '%d ??????'],

    y: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ??????????',
    '%d ??????????',
    '%d ??????'] },


  pluralize = function pluralize(u) {
    return function (number, withoutSuffix, string, isFuture) {
      var f = pluralForm(number),
      str = plurals[u][pluralForm(number)];
      if (f === 2) {
        str = str[withoutSuffix ? 0 : 1];
      }
      return str.replace(/%d/i, number);
    };
  },
  months = [
  '??????????',
  '??????????',
  '????????',
  '??????????',
  '??????',
  '????????',
  '????????????',
  '??????',
  '????????????',
  '????????????',
  '????????????',
  '????????????'];


  var arDz = moment.defineLocale('ar-dz', {
    months: months,
    monthsShort: months,
    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /??|??/,
    isPM: function isPM(input) {
      return '??' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??';
      } else {
        return '??';
      }
    },
    calendar: {
      sameDay: '[?????????? ?????? ????????????] LT',
      nextDay: '[???????? ?????? ????????????] LT',
      nextWeek: 'dddd [?????? ????????????] LT',
      lastDay: '[?????? ?????? ????????????] LT',
      lastWeek: 'dddd [?????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '?????? %s',
      past: '?????? %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y') },

    postformat: function postformat(string) {
      return string.replace(/,/g, '??');
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return arDz;

});

/***/ }),
/* 15 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ar-kw.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Kuwait) [ar-kw]
//! author : Nusret Parlak: https://github.com/nusretparlak

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var arKw = moment.defineLocale('ar-kw', {
    months: '??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????'.split(
    '_'),

    monthsShort: '??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????'.split(
    '_'),

    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[?????????? ?????? ????????????] LT',
      nextDay: '[?????? ?????? ????????????] LT',
      nextWeek: 'dddd [?????? ????????????] LT',
      lastDay: '[?????? ?????? ????????????] LT',
      lastWeek: 'dddd [?????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '?????? %s',
      s: '????????',
      ss: '%d ??????????',
      m: '??????????',
      mm: '%d ??????????',
      h: '????????',
      hh: '%d ??????????',
      d: '??????',
      dd: '%d ????????',
      M: '??????',
      MM: '%d ????????',
      y: '??????',
      yy: '%d ??????????' },

    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return arKw;

});

/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ar-ly.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Lybia) [ar-ly]
//! author : Ali Hmer: https://github.com/kikoanis

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0' },

  pluralForm = function pluralForm(n) {
    return n === 0 ?
    0 :
    n === 1 ?
    1 :
    n === 2 ?
    2 :
    n % 100 >= 3 && n % 100 <= 10 ?
    3 :
    n % 100 >= 11 ?
    4 :
    5;
  },
  plurals = {
    s: [
    '?????? ???? ??????????',
    '?????????? ??????????',
    ['??????????????', '??????????????'],
    '%d ????????',
    '%d ??????????',
    '%d ??????????'],

    m: [
    '?????? ???? ??????????',
    '?????????? ??????????',
    ['??????????????', '??????????????'],
    '%d ??????????',
    '%d ??????????',
    '%d ??????????'],

    h: [
    '?????? ???? ????????',
    '???????? ??????????',
    ['????????????', '????????????'],
    '%d ??????????',
    '%d ????????',
    '%d ????????'],

    d: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ????????',
    '%d ??????????',
    '%d ??????'],

    M: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ????????',
    '%d ????????',
    '%d ??????'],

    y: [
    '?????? ???? ??????',
    '?????? ????????',
    ['??????????', '??????????'],
    '%d ??????????',
    '%d ??????????',
    '%d ??????'] },


  pluralize = function pluralize(u) {
    return function (number, withoutSuffix, string, isFuture) {
      var f = pluralForm(number),
      str = plurals[u][pluralForm(number)];
      if (f === 2) {
        str = str[withoutSuffix ? 0 : 1];
      }
      return str.replace(/%d/i, number);
    };
  },
  months = [
  '??????????',
  '????????????',
  '????????',
  '??????????',
  '????????',
  '??????????',
  '??????????',
  '??????????',
  '????????????',
  '????????????',
  '????????????',
  '????????????'];


  var arLy = moment.defineLocale('ar-ly', {
    months: months,
    monthsShort: months,
    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /??|??/,
    isPM: function isPM(input) {
      return '??' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??';
      } else {
        return '??';
      }
    },
    calendar: {
      sameDay: '[?????????? ?????? ????????????] LT',
      nextDay: '[???????? ?????? ????????????] LT',
      nextWeek: 'dddd [?????? ????????????] LT',
      lastDay: '[?????? ?????? ????????????] LT',
      lastWeek: 'dddd [?????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '?????? %s',
      past: '?????? %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y') },

    preparse: function preparse(string) {
      return string.replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.
      replace(/\d/g, function (match) {
        return symbolMap[match];
      }).
      replace(/,/g, '??');
    },
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return arLy;

});

/***/ }),
/* 17 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ar-ma.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Morocco) [ar-ma]
//! author : ElFadili Yassine : https://github.com/ElFadiliY
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var arMa = moment.defineLocale('ar-ma', {
    months: '??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????'.split(
    '_'),

    monthsShort: '??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????'.split(
    '_'),

    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[?????????? ?????? ????????????] LT',
      nextDay: '[?????? ?????? ????????????] LT',
      nextWeek: 'dddd [?????? ????????????] LT',
      lastDay: '[?????? ?????? ????????????] LT',
      lastWeek: 'dddd [?????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '?????? %s',
      s: '????????',
      ss: '%d ??????????',
      m: '??????????',
      mm: '%d ??????????',
      h: '????????',
      hh: '%d ??????????',
      d: '??????',
      dd: '%d ????????',
      M: '??????',
      MM: '%d ????????',
      y: '??????',
      yy: '%d ??????????' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return arMa;

});

/***/ }),
/* 18 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ar-sa.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Saudi Arabia) [ar-sa]
//! author : Suhail Alkowaileet : https://github.com/xsoh

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '??',
    2: '??',
    3: '??',
    4: '??',
    5: '??',
    6: '??',
    7: '??',
    8: '??',
    9: '??',
    0: '??' },

  numberMap = {
    '??': '1',
    '??': '2',
    '??': '3',
    '??': '4',
    '??': '5',
    '??': '6',
    '??': '7',
    '??': '8',
    '??': '9',
    '??': '0' };


  var arSa = moment.defineLocale('ar-sa', {
    months: '??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????'.split(
    '_'),

    monthsShort: '??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????'.split(
    '_'),

    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /??|??/,
    isPM: function isPM(input) {
      return '??' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??';
      } else {
        return '??';
      }
    },
    calendar: {
      sameDay: '[?????????? ?????? ????????????] LT',
      nextDay: '[?????? ?????? ????????????] LT',
      nextWeek: 'dddd [?????? ????????????] LT',
      lastDay: '[?????? ?????? ????????????] LT',
      lastWeek: 'dddd [?????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '?????? %s',
      s: '????????',
      ss: '%d ??????????',
      m: '??????????',
      mm: '%d ??????????',
      h: '????????',
      hh: '%d ??????????',
      d: '??????',
      dd: '%d ????????',
      M: '??????',
      MM: '%d ????????',
      y: '??????',
      yy: '%d ??????????' },

    preparse: function preparse(string) {
      return string.
      replace(/[????????????????????]/g, function (match) {
        return numberMap[match];
      }).
      replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.
      replace(/\d/g, function (match) {
        return symbolMap[match];
      }).
      replace(/,/g, '??');
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return arSa;

});

/***/ }),
/* 19 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ar-tn.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]
//! author : Nader Toukabri : https://github.com/naderio

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var arTn = moment.defineLocale('ar-tn', {
    months: '??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????'.split(
    '_'),

    monthsShort: '??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????'.split(
    '_'),

    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[?????????? ?????? ????????????] LT',
      nextDay: '[?????? ?????? ????????????] LT',
      nextWeek: 'dddd [?????? ????????????] LT',
      lastDay: '[?????? ?????? ????????????] LT',
      lastWeek: 'dddd [?????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '?????? %s',
      s: '????????',
      ss: '%d ??????????',
      m: '??????????',
      mm: '%d ??????????',
      h: '????????',
      hh: '%d ??????????',
      d: '??????',
      dd: '%d ????????',
      M: '??????',
      MM: '%d ????????',
      y: '??????',
      yy: '%d ??????????' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return arTn;

});

/***/ }),
/* 20 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/az.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Azerbaijani [az]
//! author : topchiyev : https://github.com/topchiyev

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var suffixes = {
    1: '-inci',
    5: '-inci',
    8: '-inci',
    70: '-inci',
    80: '-inci',
    2: '-nci',
    7: '-nci',
    20: '-nci',
    50: '-nci',
    3: '-??nc??',
    4: '-??nc??',
    100: '-??nc??',
    6: '-nc??',
    9: '-uncu',
    10: '-uncu',
    30: '-uncu',
    60: '-??nc??',
    90: '-??nc??' };


  var az = moment.defineLocale('az', {
    months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split(
    '_'),

    monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays: 'Bazar_Bazar ert??si_????r????nb?? ax??am??_????r????nb??_C??m?? ax??am??_C??m??_????nb??'.split(
    '_'),

    weekdaysShort: 'Baz_BzE_??Ax_????r_CAx_C??m_????n'.split('_'),
    weekdaysMin: 'Bz_BE_??A_????_CA_C??_????'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[bug??n saat] LT',
      nextDay: '[sabah saat] LT',
      nextWeek: '[g??l??n h??ft??] dddd [saat] LT',
      lastDay: '[d??n??n] LT',
      lastWeek: '[ke????n h??ft??] dddd [saat] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s sonra',
      past: '%s ??vv??l',
      s: 'bir ne???? saniy??',
      ss: '%d saniy??',
      m: 'bir d??qiq??',
      mm: '%d d??qiq??',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir g??n',
      dd: '%d g??n',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir il',
      yy: '%d il' },

    meridiemParse: /gec??|s??h??r|g??nd??z|ax??am/,
    isPM: function isPM(input) {
      return /^(g??nd??z|ax??am)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'gec??';
      } else if (hour < 12) {
        return 's??h??r';
      } else if (hour < 17) {
        return 'g??nd??z';
      } else {
        return 'ax??am';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(??nc??|inci|nci|??nc??|nc??|uncu)/,
    ordinal: function ordinal(number) {
      if (number === 0) {
        // special case for zero
        return number + '-??nc??';
      }
      var a = number % 10,
      b = number % 100 - a,
      c = number >= 100 ? 100 : null;
      return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return az;

});

/***/ }),
/* 21 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/be.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elens??le : https://github.com/Oire

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ?
    forms[0] :
    num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ?
    forms[1] :
    forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
      mm: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
      hh: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
      dd: '??????????_??????_????????',
      MM: '??????????_????????????_??????????????',
      yy: '??????_????????_??????????' };

    if (key === 'm') {
      return withoutSuffix ? '??????????????' : '??????????????';
    } else if (key === 'h') {
      return withoutSuffix ? '??????????????' : '??????????????';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }

  var be = moment.defineLocale('be', {
    months: {
      format: '????????????????_????????????_????????????????_??????????????????_????????????_??????????????_????????????_????????????_??????????????_??????????????????????_??????????????????_????????????'.split(
      '_'),

      standalone: '????????????????_????????_??????????????_????????????????_??????????????_??????????????_????????????_??????????????_????????????????_????????????????????_????????????????_??????????????'.split(
      '_') },


    monthsShort: '????????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????'.split(
    '_'),

    weekdays: {
      format: '??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????'.split(
      '_'),

      standalone: '??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????'.split(
      '_'),

      isFormat: /\[ ?[??????] ?(?:??????????????|??????????????????)? ?\] ?dddd/ },

    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY ??.',
      LLL: 'D MMMM YYYY ??., HH:mm',
      LLLL: 'dddd, D MMMM YYYY ??., HH:mm' },

    calendar: {
      sameDay: '[?????????? ??] LT',
      nextDay: '[???????????? ??] LT',
      lastDay: '[?????????? ??] LT',
      nextWeek: function nextWeek() {
        return '[??] dddd [??] LT';
      },
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return '[?? ??????????????] dddd [??] LT';
          case 1:
          case 2:
          case 4:
            return '[?? ????????????] dddd [??] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: '???????? %s',
      past: '%s ????????',
      s: '???????????????? ????????????',
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: relativeTimeWithPlural,
      hh: relativeTimeWithPlural,
      d: '??????????',
      dd: relativeTimeWithPlural,
      M: '??????????',
      MM: relativeTimeWithPlural,
      y: '??????',
      yy: relativeTimeWithPlural },

    meridiemParse: /????????|????????????|??????|????????????/,
    isPM: function isPM(input) {
      return /^(??????|????????????)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '????????';
      } else if (hour < 12) {
        return '????????????';
      } else if (hour < 17) {
        return '??????';
      } else {
        return '????????????';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(??|??|????)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return (number % 10 === 2 || number % 10 === 3) &&
          number % 100 !== 12 &&
          number % 100 !== 13 ?
          number + '-??' :
          number + '-??';
        case 'D':
          return number + '-????';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return be;

});

/***/ }),
/* 22 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/bg.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var bg = moment.defineLocale('bg', {
    months: '????????????_????????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_????????????????_??????????????_????????????????'.split(
    '_'),

    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '????????????_????????????????????_??????????????_??????????_??????????????????_??????????_????????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[???????? ??] LT',
      nextDay: '[???????? ??] LT',
      nextWeek: 'dddd [??] LT',
      lastDay: '[?????????? ??] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[????????????????] dddd [??] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[??????????????] dddd [??] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: '???????? %s',
      past: '?????????? %s',
      s: '?????????????? ??????????????',
      ss: '%d ??????????????',
      m: '????????????',
      mm: '%d ????????????',
      h: '??????',
      hh: '%d ????????',
      d: '??????',
      dd: '%d ????????',
      w: '??????????????',
      ww: '%d ??????????????',
      M: '??????????',
      MM: '%d ????????????',
      y: '????????????',
      yy: '%d ????????????' },

    dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????|????|????)/,
    ordinal: function ordinal(number) {
      var lastDigit = number % 10,
      last2Digits = number % 100;
      if (number === 0) {
        return number + '-????';
      } else if (last2Digits === 0) {
        return number + '-????';
      } else if (last2Digits > 10 && last2Digits < 20) {
        return number + '-????';
      } else if (lastDigit === 1) {
        return number + '-????';
      } else if (lastDigit === 2) {
        return number + '-????';
      } else if (lastDigit === 7 || lastDigit === 8) {
        return number + '-????';
      } else {
        return number + '-????';
      }
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return bg;

});

/***/ }),
/* 23 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/bm.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bambara [bm]
//! author : Estelle Comment : https://github.com/estellecomment

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var bm = moment.defineLocale('bm', {
    months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M??kalo_Zuw??nkalo_Zuluyekalo_Utikalo_S??tanburukalo_??kut??burukalo_Nowanburukalo_Desanburukalo'.split(
    '_'),

    monthsShort: 'Zan_Few_Mar_Awi_M??_Zuw_Zul_Uti_S??t_??ku_Now_Des'.split('_'),
    weekdays: 'Kari_Nt??n??n_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
    weekdaysShort: 'Kar_Nt??_Tar_Ara_Ala_Jum_Sib'.split('_'),
    weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'MMMM [tile] D [san] YYYY',
      LLL: 'MMMM [tile] D [san] YYYY [l??r??] HH:mm',
      LLLL: 'dddd MMMM [tile] D [san] YYYY [l??r??] HH:mm' },

    calendar: {
      sameDay: '[Bi l??r??] LT',
      nextDay: '[Sini l??r??] LT',
      nextWeek: 'dddd [don l??r??] LT',
      lastDay: '[Kunu l??r??] LT',
      lastWeek: 'dddd [t??m??nen l??r??] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s k??n??',
      past: 'a b?? %s b??',
      s: 'sanga dama dama',
      ss: 'sekondi %d',
      m: 'miniti kelen',
      mm: 'miniti %d',
      h: 'l??r?? kelen',
      hh: 'l??r?? %d',
      d: 'tile kelen',
      dd: 'tile %d',
      M: 'kalo kelen',
      MM: 'kalo %d',
      y: 'san kelen',
      yy: 'san %d' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return bm;

});

/***/ }),
/* 24 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/bn.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var bn = moment.defineLocale('bn', {
    months: '????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_?????????????????????_????????????????????????'.split(
    '_'),

    monthsShort: '????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_???????????????_???????????????_?????????_????????????'.split(
    '_'),

    weekdays: '??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????????????????_????????????????????????_??????????????????'.split(
    '_'),

    weekdaysShort: '?????????_?????????_???????????????_?????????_????????????????????????_???????????????_?????????'.split('_'),
    weekdaysMin: '?????????_?????????_???????????????_?????????_?????????_???????????????_?????????'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ?????????',
      LTS: 'A h:mm:ss ?????????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ?????????',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ?????????' },

    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[????????????????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[???????????????] LT',
      lastWeek: '[??????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ?????????',
      past: '%s ?????????',
      s: '???????????? ?????????????????????',
      ss: '%d ?????????????????????',
      m: '?????? ???????????????',
      mm: '%d ???????????????',
      h: '?????? ???????????????',
      hh: '%d ???????????????',
      d: '?????? ?????????',
      dd: '%d ?????????',
      M: '?????? ?????????',
      MM: '%d ?????????',
      y: '?????? ?????????',
      yy: '%d ?????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /?????????|????????????|???????????????|???????????????|?????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (
      meridiem === '?????????' && hour >= 4 ||
      meridiem === '???????????????' && hour < 5 ||
      meridiem === '???????????????')
      {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '?????????';
      } else if (hour < 10) {
        return '????????????';
      } else if (hour < 17) {
        return '???????????????';
      } else if (hour < 20) {
        return '???????????????';
      } else {
        return '?????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return bn;

});

/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/bn-bd.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bengali (Bangladesh) [bn-bd]
//! author : Asraf Hossain Patoary : https://github.com/ashwoolford

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var bnBd = moment.defineLocale('bn-bd', {
    months: '????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_?????????????????????_????????????????????????'.split(
    '_'),

    monthsShort: '????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_???????????????_???????????????_?????????_????????????'.split(
    '_'),

    weekdays: '??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????????????????_????????????????????????_??????????????????'.split(
    '_'),

    weekdaysShort: '?????????_?????????_???????????????_?????????_????????????????????????_???????????????_?????????'.split('_'),
    weekdaysMin: '?????????_?????????_???????????????_?????????_?????????_???????????????_?????????'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ?????????',
      LTS: 'A h:mm:ss ?????????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ?????????',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ?????????' },

    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[????????????????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[???????????????] LT',
      lastWeek: '[??????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ?????????',
      past: '%s ?????????',
      s: '???????????? ?????????????????????',
      ss: '%d ?????????????????????',
      m: '?????? ???????????????',
      mm: '%d ???????????????',
      h: '?????? ???????????????',
      hh: '%d ???????????????',
      d: '?????? ?????????',
      dd: '%d ?????????',
      M: '?????? ?????????',
      MM: '%d ?????????',
      y: '?????? ?????????',
      yy: '%d ?????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },

    meridiemParse: /?????????|?????????|????????????|???????????????|???????????????|?????????????????????|?????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '?????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '?????????') {
        return hour;
      } else if (meridiem === '????????????') {
        return hour;
      } else if (meridiem === '???????????????') {
        return hour >= 3 ? hour : hour + 12;
      } else if (meridiem === '???????????????') {
        return hour + 12;
      } else if (meridiem === '?????????????????????') {
        return hour + 12;
      }
    },

    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '?????????';
      } else if (hour < 6) {
        return '?????????';
      } else if (hour < 12) {
        return '????????????';
      } else if (hour < 15) {
        return '???????????????';
      } else if (hour < 18) {
        return '???????????????';
      } else if (hour < 20) {
        return '?????????????????????';
      } else {
        return '?????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return bnBd;

});

/***/ }),
/* 26 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/bo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tibetan [bo]
//! author : Thupten N. Chakrishar : https://github.com/vajradog

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var bo = moment.defineLocale('bo', {
    months: '??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????'.split(
    '_'),

    monthsShort: '?????????1_?????????2_?????????3_?????????4_?????????5_?????????6_?????????7_?????????8_?????????9_?????????10_?????????11_?????????12'.split(
    '_'),

    monthsShortRegex: /^(?????????\d{1,2})/,
    monthsParseExact: true,
    weekdays: '???????????????????????????_???????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????'.split(
    '_'),

    weekdaysShort: '???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????'.split(
    '_'),

    weekdaysMin: '??????_??????_?????????_?????????_?????????_?????????_????????????'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm' },

    calendar: {
      sameDay: '[??????????????????] LT',
      nextDay: '[??????????????????] LT',
      nextWeek: '[?????????????????????????????????????????????], LT',
      lastDay: '[????????????] LT',
      lastWeek: '[??????????????????????????????????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ??????',
      past: '%s ???????????????',
      s: '???????????????',
      ss: '%d ??????????????????',
      m: '??????????????????????????????',
      mm: '%d ???????????????',
      h: '?????????????????????????????????',
      hh: '%d ??????????????????',
      d: '????????????????????????',
      dd: '%d ????????????',
      M: '???????????????????????????',
      MM: '%d ????????????',
      y: '?????????????????????',
      yy: '%d ??????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /??????????????????|?????????????????????|?????????????????????|?????????????????????|??????????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (
      meridiem === '??????????????????' && hour >= 4 ||
      meridiem === '?????????????????????' && hour < 5 ||
      meridiem === '?????????????????????')
      {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '??????????????????';
      } else if (hour < 10) {
        return '?????????????????????';
      } else if (hour < 17) {
        return '?????????????????????';
      } else if (hour < 20) {
        return '?????????????????????';
      } else {
        return '??????????????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return bo;

});

/***/ }),
/* 27 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/br.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Breton [br]
//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function relativeTimeWithMutation(number, withoutSuffix, key) {
    var format = {
      mm: 'munutenn',
      MM: 'miz',
      dd: 'devezh' };

    return number + ' ' + mutation(format[key], number);
  }
  function specialMutationForYears(number) {
    switch (lastNumber(number)) {
      case 1:
      case 3:
      case 4:
      case 5:
      case 9:
        return number + ' bloaz';
      default:
        return number + ' vloaz';}

  }
  function lastNumber(number) {
    if (number > 9) {
      return lastNumber(number % 10);
    }
    return number;
  }
  function mutation(text, number) {
    if (number === 2) {
      return softMutation(text);
    }
    return text;
  }
  function softMutation(text) {
    var mutationTable = {
      m: 'v',
      b: 'v',
      d: 'z' };

    if (mutationTable[text.charAt(0)] === undefined) {
      return text;
    }
    return mutationTable[text.charAt(0)] + text.substring(1);
  }

  var monthsParse = [
  /^gen/i,
  /^c[??\']hwe/i,
  /^meu/i,
  /^ebr/i,
  /^mae/i,
  /^(mez|eve)/i,
  /^gou/i,
  /^eos/i,
  /^gwe/i,
  /^her/i,
  /^du/i,
  /^ker/i],

  monthsRegex = /^(genver|c[??\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[??\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
  monthsStrictRegex = /^(genver|c[??\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
  monthsShortStrictRegex = /^(gen|c[??\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
  fullWeekdaysParse = [
  /^sul/i,
  /^lun/i,
  /^meurzh/i,
  /^merc[??\']her/i,
  /^yaou/i,
  /^gwener/i,
  /^sadorn/i],

  shortWeekdaysParse = [
  /^Sul/i,
  /^Lun/i,
  /^Meu/i,
  /^Mer/i,
  /^Yao/i,
  /^Gwe/i,
  /^Sad/i],

  minWeekdaysParse = [
  /^Su/i,
  /^Lu/i,
  /^Me([^r]|$)/i,
  /^Mer/i,
  /^Ya/i,
  /^Gw/i,
  /^Sa/i];


  var br = moment.defineLocale('br', {
    months: 'Genver_C??hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split(
    '_'),

    monthsShort: 'Gen_C??hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
    weekdays: 'Sul_Lun_Meurzh_Merc??her_Yaou_Gwener_Sadorn'.split('_'),
    weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
    weekdaysParse: minWeekdaysParse,
    fullWeekdaysParse: fullWeekdaysParse,
    shortWeekdaysParse: shortWeekdaysParse,
    minWeekdaysParse: minWeekdaysParse,

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: monthsStrictRegex,
    monthsShortStrictRegex: monthsShortStrictRegex,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [a viz] MMMM YYYY',
      LLL: 'D [a viz] MMMM YYYY HH:mm',
      LLLL: 'dddd, D [a viz] MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Hiziv da] LT',
      nextDay: '[Warc??hoazh da] LT',
      nextWeek: 'dddd [da] LT',
      lastDay: '[Dec??h da] LT',
      lastWeek: 'dddd [paset da] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'a-benn %s',
      past: '%s ??zo',
      s: 'un nebeud segondenno??',
      ss: '%d eilenn',
      m: 'ur vunutenn',
      mm: relativeTimeWithMutation,
      h: 'un eur',
      hh: '%d eur',
      d: 'un devezh',
      dd: relativeTimeWithMutation,
      M: 'ur miz',
      MM: relativeTimeWithMutation,
      y: 'ur bloaz',
      yy: specialMutationForYears },

    dayOfMonthOrdinalParse: /\d{1,2}(a??|vet)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'a??' : 'vet';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    meridiemParse: /a.m.|g.m./, // goude merenn | a-raok merenn
    isPM: function isPM(token) {
      return token === 'g.m.';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      return hour < 12 ? 'a.m.' : 'g.m.';
    } });


  return br;

});

/***/ }),
/* 28 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/bs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bosnian [bs]
//! author : Nedim Cholich : https://github.com/frontyard
//! based on (hr) translation by Bojan Markovi??

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        if (number === 1) {
          result += 'sekunda';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sekunde';
        } else {
          result += 'sekundi';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        if (number === 1) {
          result += 'minuta';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'minute';
        } else {
          result += 'minuta';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
        if (number === 1) {
          result += 'sat';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sata';
        } else {
          result += 'sati';
        }
        return result;
      case 'dd':
        if (number === 1) {
          result += 'dan';
        } else {
          result += 'dana';
        }
        return result;
      case 'MM':
        if (number === 1) {
          result += 'mjesec';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'mjeseca';
        } else {
          result += 'mjeseci';
        }
        return result;
      case 'yy':
        if (number === 1) {
          result += 'godina';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'godine';
        } else {
          result += 'godina';
        }
        return result;}

  }

  var bs = moment.defineLocale('bs', {
    months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split(
    '_'),

    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota'.split(
    '_'),

    weekdaysShort: 'ned._pon._uto._sri._??et._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_??e_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[ju??er u] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
            return '[pro??lu] dddd [u] LT';
          case 6:
            return '[pro??le] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[pro??li] dddd [u] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: 'dan',
      dd: translate,
      M: 'mjesec',
      MM: translate,
      y: 'godinu',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return bs;

});

/***/ }),
/* 29 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ca.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ca = moment.defineLocale('ca', {
    months: {
      standalone: 'gener_febrer_mar??_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split(
      '_'),

      format: "de gener_de febrer_de mar??_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
      '_'),

      isFormat: /D[oD]?(\s)+MMMM/ },

    monthsShort: 'gen._febr._mar??_abr._maig_juny_jul._ag._set._oct._nov._des.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split(
    '_'),

    weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [de] YYYY',
      ll: 'D MMM YYYY',
      LLL: 'D MMMM [de] YYYY [a les] H:mm',
      lll: 'D MMM YYYY, H:mm',
      LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
      llll: 'ddd D MMM YYYY, H:mm' },

    calendar: {
      sameDay: function sameDay() {
        return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      nextDay: function nextDay() {
        return '[dem?? a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      lastWeek: function lastWeek() {
        return (
          '[el] dddd [passat a ' + (
          this.hours() !== 1 ? 'les' : 'la') +
          '] LT');

      },
      sameElse: 'L' },

    relativeTime: {
      future: "d'aqu?? %s",
      past: 'fa %s',
      s: 'uns segons',
      ss: '%d segons',
      m: 'un minut',
      mm: '%d minuts',
      h: 'una hora',
      hh: '%d hores',
      d: 'un dia',
      dd: '%d dies',
      M: 'un mes',
      MM: '%d mesos',
      y: 'un any',
      yy: '%d anys' },

    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|??|a)/,
    ordinal: function ordinal(number, period) {
      var output =
      number === 1 ?
      'r' :
      number === 2 ?
      'n' :
      number === 3 ?
      'r' :
      number === 4 ?
      't' :
      '??';
      if (period === 'w' || period === 'W') {
        output = 'a';
      }
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ca;

});

/***/ }),
/* 30 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/cs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var months = 'leden_??nor_b??ezen_duben_kv??ten_??erven_??ervenec_srpen_z??????_????jen_listopad_prosinec'.split(
  '_'),

  monthsShort = 'led_??no_b??e_dub_kv??_??vn_??vc_srp_z????_????j_lis_pro'.split('_'),
  monthsParse = [
  /^led/i,
  /^??no/i,
  /^b??e/i,
  /^dub/i,
  /^kv??/i,
  /^(??vn|??erven$|??ervna)/i,
  /^(??vc|??ervenec|??ervence)/i,
  /^srp/i,
  /^z????/i,
  /^????j/i,
  /^lis/i,
  /^pro/i],

  // NOTE: '??erven' is substring of '??ervenec'; therefore '??ervenec' must precede '??erven' in the regex to be fully matched.
  // Otherwise parser matches '1. ??ervenec' as '1. ??erven' + 'ec'.
  monthsRegex = /^(leden|??nor|b??ezen|duben|kv??ten|??ervenec|??ervence|??erven|??ervna|srpen|z??????|????jen|listopad|prosinec|led|??no|b??e|dub|kv??|??vn|??vc|srp|z????|????j|lis|pro)/i;

  function plural(n) {
    return n > 1 && n < 5 && ~~(n / 10) !== 1;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's': // a few seconds / in a few seconds / a few seconds ago
        return withoutSuffix || isFuture ? 'p??r sekund' : 'p??r sekundami';
      case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'sekundy' : 'sekund');
        } else {
          return result + 'sekundami';
        }
      case 'm': // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';
      case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'minuty' : 'minut');
        } else {
          return result + 'minutami';
        }
      case 'h': // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
      case 'hh': // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'hodiny' : 'hodin');
        } else {
          return result + 'hodinami';
        }
      case 'd': // a day / in a day / a day ago
        return withoutSuffix || isFuture ? 'den' : 'dnem';
      case 'dd': // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'dny' : 'dn??');
        } else {
          return result + 'dny';
        }
      case 'M': // a month / in a month / a month ago
        return withoutSuffix || isFuture ? 'm??s??c' : 'm??s??cem';
      case 'MM': // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'm??s??ce' : 'm??s??c??');
        } else {
          return result + 'm??s??ci';
        }
      case 'y': // a year / in a year / a year ago
        return withoutSuffix || isFuture ? 'rok' : 'rokem';
      case 'yy': // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'roky' : 'let');
        } else {
          return result + 'lety';
        }}

  }

  var cs = moment.defineLocale('cs', {
    months: months,
    monthsShort: monthsShort,
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    // NOTE: '??erven' is substring of '??ervenec'; therefore '??ervenec' must precede '??erven' in the regex to be fully matched.
    // Otherwise parser matches '1. ??ervenec' as '1. ??erven' + 'ec'.
    monthsStrictRegex: /^(leden|ledna|??nora|??nor|b??ezen|b??ezna|duben|dubna|kv??ten|kv??tna|??ervenec|??ervence|??erven|??ervna|srpen|srpna|z??????|????jen|????jna|listopadu|listopad|prosinec|prosince)/i,
    monthsShortStrictRegex: /^(led|??no|b??e|dub|kv??|??vn|??vc|srp|z????|????j|lis|pro)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'ned??le_pond??l??_??ter??_st??eda_??tvrtek_p??tek_sobota'.split('_'),
    weekdaysShort: 'ne_po_??t_st_??t_p??_so'.split('_'),
    weekdaysMin: 'ne_po_??t_st_??t_p??_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm',
      l: 'D. M. YYYY' },

    calendar: {
      sameDay: '[dnes v] LT',
      nextDay: '[z??tra v] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v ned??li v] LT';
          case 1:
          case 2:
            return '[v] dddd [v] LT';
          case 3:
            return '[ve st??edu v] LT';
          case 4:
            return '[ve ??tvrtek v] LT';
          case 5:
            return '[v p??tek v] LT';
          case 6:
            return '[v sobotu v] LT';}

      },
      lastDay: '[v??era v] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[minulou ned??li v] LT';
          case 1:
          case 2:
            return '[minul??] dddd [v] LT';
          case 3:
            return '[minulou st??edu v] LT';
          case 4:
          case 5:
            return '[minul??] dddd [v] LT';
          case 6:
            return '[minulou sobotu v] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'p??ed %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return cs;

});

/***/ }),
/* 31 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/cv.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var cv = moment.defineLocale('cv', {
    months: '????????????_??????????_??????_??????_??????_????????????_??????_??????????_????????_??????_??????_????????????'.split(
    '_'),

    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '??????????????????????_????????????????_??????????????????_??????????_??????????????????????_??????????????_????????????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'YYYY [??????????] MMMM [????????????] D[-????????]',
      LLL: 'YYYY [??????????] MMMM [????????????] D[-????????], HH:mm',
      LLLL: 'dddd, YYYY [??????????] MMMM [????????????] D[-????????], HH:mm' },

    calendar: {
      sameDay: '[????????] LT [??????????????]',
      nextDay: '[????????] LT [??????????????]',
      lastDay: '[????????] LT [??????????????]',
      nextWeek: '[??????????] dddd LT [??????????????]',
      lastWeek: '[??????????] dddd LT [??????????????]',
      sameElse: 'L' },

    relativeTime: {
      future: function future(output) {
        var affix = /??????????$/i.exec(output) ?
        '??????' :
        /??????$/i.exec(output) ?
        '??????' :
        '??????';
        return output + affix;
      },
      past: '%s ????????????',
      s: '??????-???? ??????????????',
      ss: '%d ??????????????',
      m: '?????? ??????????',
      mm: '%d ??????????',
      h: '?????? ??????????',
      hh: '%d ??????????',
      d: '?????? ??????',
      dd: '%d ??????',
      M: '?????? ????????',
      MM: '%d ????????',
      y: '?????? ??????',
      yy: '%d ??????' },

    dayOfMonthOrdinalParse: /\d{1,2}-??????/,
    ordinal: '%d-??????',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return cv;

});

/***/ }),
/* 32 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/cy.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Welsh [cy]
//! author : Robert Allen : https://github.com/robgallen
//! author : https://github.com/ryangreaves

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var cy = moment.defineLocale('cy', {
    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split(
    '_'),

    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split(
    '_'),

    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split(
    '_'),

    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
    weekdaysParseExact: true,
    // time formats are the same as en-gb
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Heddiw am] LT',
      nextDay: '[Yfory am] LT',
      nextWeek: 'dddd [am] LT',
      lastDay: '[Ddoe am] LT',
      lastWeek: 'dddd [diwethaf am] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'mewn %s',
      past: '%s yn ??l',
      s: 'ychydig eiliadau',
      ss: '%d eiliad',
      m: 'munud',
      mm: '%d munud',
      h: 'awr',
      hh: '%d awr',
      d: 'diwrnod',
      dd: '%d diwrnod',
      M: 'mis',
      MM: '%d mis',
      y: 'blwyddyn',
      yy: '%d flynedd' },

    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
    ordinal: function ordinal(number) {
      var b = number,
      output = '',
      lookup = [
      '',
      'af',
      'il',
      'ydd',
      'ydd',
      'ed',
      'ed',
      'ed',
      'fed',
      'fed',
      'fed', // 1af to 10fed
      'eg',
      'fed',
      'eg',
      'eg',
      'fed',
      'eg',
      'eg',
      'fed',
      'eg',
      'fed' // 11eg to 20fed
      ];
      if (b > 20) {
        if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
          output = 'fed'; // not 30ain, 70ain or 90ain
        } else {
          output = 'ain';
        }
      } else if (b > 0) {
        output = lookup[b];
      }
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return cy;

});

/***/ }),
/* 33 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/da.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Danish [da]
//! author : Ulrik Nielsen : https://github.com/mrbase

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var da = moment.defineLocale('da', {
    months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
    '_'),

    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 's??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag'.split('_'),
    weekdaysShort: 's??n_man_tir_ons_tor_fre_l??r'.split('_'),
    weekdaysMin: 's??_ma_ti_on_to_fr_l??'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm' },

    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'p?? dddd [kl.] LT',
      lastDay: '[i g??r kl.] LT',
      lastWeek: '[i] dddd[s kl.] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'f?? sekunder',
      ss: '%d sekunder',
      m: 'et minut',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dage',
      M: 'en m??ned',
      MM: '%d m??neder',
      y: 'et ??r',
      yy: '%d ??r' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return da;

});

/***/ }),
/* 34 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/de.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elens??le: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eine Minute', 'einer Minute'],
      h: ['eine Stunde', 'einer Stunde'],
      d: ['ein Tag', 'einem Tag'],
      dd: [number + ' Tage', number + ' Tagen'],
      w: ['eine Woche', 'einer Woche'],
      M: ['ein Monat', 'einem Monat'],
      MM: [number + ' Monate', number + ' Monaten'],
      y: ['ein Jahr', 'einem Jahr'],
      yy: [number + ' Jahre', number + ' Jahren'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }

  var de = moment.defineLocale('de', {
    months: 'Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
    '_'),

    monthsShort: 'Jan._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
    '_'),

    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]' },

    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      w: processRelativeTime,
      ww: '%d Wochen',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return de;

});

/***/ }),
/* 35 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/de-at.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German (Austria) [de-at]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elens??le: https://github.com/Oire
//! author : Martin Groller : https://github.com/MadMG
//! author : Mikolaj Dadela : https://github.com/mik01aj

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eine Minute', 'einer Minute'],
      h: ['eine Stunde', 'einer Stunde'],
      d: ['ein Tag', 'einem Tag'],
      dd: [number + ' Tage', number + ' Tagen'],
      w: ['eine Woche', 'einer Woche'],
      M: ['ein Monat', 'einem Monat'],
      MM: [number + ' Monate', number + ' Monaten'],
      y: ['ein Jahr', 'einem Jahr'],
      yy: [number + ' Jahre', number + ' Jahren'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }

  var deAt = moment.defineLocale('de-at', {
    months: 'J??nner_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
    '_'),

    monthsShort: 'J??n._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
    '_'),

    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]' },

    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      w: processRelativeTime,
      ww: '%d Wochen',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return deAt;

});

/***/ }),
/* 36 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/de-ch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German (Switzerland) [de-ch]
//! author : sschueller : https://github.com/sschueller

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eine Minute', 'einer Minute'],
      h: ['eine Stunde', 'einer Stunde'],
      d: ['ein Tag', 'einem Tag'],
      dd: [number + ' Tage', number + ' Tagen'],
      w: ['eine Woche', 'einer Woche'],
      M: ['ein Monat', 'einem Monat'],
      MM: [number + ' Monate', number + ' Monaten'],
      y: ['ein Jahr', 'einem Jahr'],
      yy: [number + ' Jahre', number + ' Jahren'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }

  var deCh = moment.defineLocale('de-ch', {
    months: 'Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
    '_'),

    monthsShort: 'Jan._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
    '_'),

    weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]' },

    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      w: processRelativeTime,
      ww: '%d Wochen',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return deCh;

});

/***/ }),
/* 37 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/dv.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var months = [
  '????????????????',
  '????????????????????',
  '????????????',
  '????????????????',
  '????',
  '????????',
  '????????????',
  '????????????????',
  '????????????????????????',
  '????????????????????',
  '????????????????????',
  '????????????????????'],

  weekdays = [
  '????????????????',
  '????????',
  '????????????????',
  '????????',
  '????????????????????',
  '????????????',
  '????????????????'];


  var dv = moment.defineLocale('dv', {
    months: months,
    monthsShort: months,
    weekdays: weekdays,
    weekdaysShort: weekdays,
    weekdaysMin: '????????_????????_????????_????????_????????_????????_????????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'D/M/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    meridiemParse: /????|????/,
    isPM: function isPM(input) {
      return '????' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '????';
      } else {
        return '????';
      }
    },
    calendar: {
      sameDay: '[????????????] LT',
      nextDay: '[????????????] LT',
      nextWeek: 'dddd LT',
      lastDay: '[????????????] LT',
      lastWeek: '[????????????????] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???????????????? %s',
      past: '???????????? %s',
      s: '????????????????????????????',
      ss: 'd% ????????????????',
      m: '????????????????',
      mm: '???????????? %d',
      h: '????????????????????',
      hh: '???????????????? %d',
      d: '????????????????',
      dd: '???????????? %d',
      M: '????????????',
      MM: '???????? %d',
      y: '????????????????',
      yy: '???????????? %d' },

    preparse: function preparse(string) {
      return string.replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '??');
    },
    week: {
      dow: 7, // Sunday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return dv;

});

/***/ }),
/* 38 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/el.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function isFunction(input) {
    return (
      typeof Function !== 'undefined' && input instanceof Function ||
      Object.prototype.toString.call(input) === '[object Function]');

  }

  var el = moment.defineLocale('el', {
    monthsNominativeEl: '????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????'.split(
    '_'),

    monthsGenitiveEl: '????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????'.split(
    '_'),

    months: function months(momentToFormat, format) {
      if (!momentToFormat) {
        return this._monthsNominativeEl;
      } else if (
      typeof format === 'string' &&
      /D/.test(format.substring(0, format.indexOf('MMMM'))))
      {
        // if there is a day number before 'MMMM'
        return this._monthsGenitiveEl[momentToFormat.month()];
      } else {
        return this._monthsNominativeEl[momentToFormat.month()];
      }
    },
    monthsShort: '??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '??????????????_??????????????_??????????_??????????????_????????????_??????????????????_??????????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? '????' : '????';
      } else {
        return isLower ? '????' : '????';
      }
    },
    isPM: function isPM(input) {
      return (input + '').toLowerCase()[0] === '??';
    },
    meridiemParse: /[????]\.????\.?/i,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendarEl: {
      sameDay: '[???????????? {}] LT',
      nextDay: '[?????????? {}] LT',
      nextWeek: 'dddd [{}] LT',
      lastDay: '[???????? {}] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 6:
            return '[???? ??????????????????????] dddd [{}] LT';
          default:
            return '[?????? ??????????????????????] dddd [{}] LT';}

      },
      sameElse: 'L' },

    calendar: function calendar(key, mom) {
      var output = this._calendarEl[key],
      hours = mom && mom.hours();
      if (isFunction(output)) {
        output = output.apply(mom);
      }
      return output.replace('{}', hours % 12 === 1 ? '??????' : '????????');
    },
    relativeTime: {
      future: '???? %s',
      past: '%s ????????',
      s: '???????? ????????????????????????',
      ss: '%d ????????????????????????',
      m: '?????? ??????????',
      mm: '%d ??????????',
      h: '?????? ??????',
      hh: '%d ????????',
      d: '?????? ????????',
      dd: '%d ??????????',
      M: '???????? ??????????',
      MM: '%d ??????????',
      y: '???????? ????????????',
      yy: '%d ????????????' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4st is the first week of the year.
    } });


  return el;

});

/***/ }),
/* 39 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-au.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Australia) [en-au]
//! author : Jared Morse : https://github.com/jarcoal

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enAu = moment.defineLocale('en-au', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enAu;

});

/***/ }),
/* 40 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-ca.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Canada) [en-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enCa = moment.defineLocale('en-ca', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'YYYY-MM-DD',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    } });


  return enCa;

});

/***/ }),
/* 41 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-gb.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enGb = moment.defineLocale('en-gb', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enGb;

});

/***/ }),
/* 42 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-ie.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Ireland) [en-ie]
//! author : Chris Cartlidge : https://github.com/chriscartlidge

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enIe = moment.defineLocale('en-ie', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enIe;

});

/***/ }),
/* 43 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-il.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Israel) [en-il]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enIl = moment.defineLocale('en-il', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    } });


  return enIl;

});

/***/ }),
/* 44 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-in.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (India) [en-in]
//! author : Jatin Agrawal : https://github.com/jatinag22

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enIn = moment.defineLocale('en-in', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 1st is the first week of the year.
    } });


  return enIn;

});

/***/ }),
/* 45 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-nz.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (New Zealand) [en-nz]
//! author : Luke McGregor : https://github.com/lukemcgregor

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enNz = moment.defineLocale('en-nz', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enNz;

});

/***/ }),
/* 46 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/en-sg.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Singapore) [en-sg]
//! author : Matthew Castrillon-Madrigal : https://github.com/techdimension

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var enSg = moment.defineLocale('en-sg', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'),

    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return enSg;

});

/***/ }),
/* 47 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/eo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Esperanto [eo]
//! author : Colin Dean : https://github.com/colindean
//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
//! comment : miestasmia corrected the translation by colindean
//! comment : Vivakvo corrected the translation by colindean and miestasmia

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var eo = moment.defineLocale('eo', {
    months: 'januaro_februaro_marto_aprilo_majo_junio_julio_a??gusto_septembro_oktobro_novembro_decembro'.split(
    '_'),

    monthsShort: 'jan_feb_mart_apr_maj_jun_jul_a??g_sept_okt_nov_dec'.split('_'),
    weekdays: 'diman??o_lundo_mardo_merkredo_??a??do_vendredo_sabato'.split('_'),
    weekdaysShort: 'dim_lun_mard_merk_??a??_ven_sab'.split('_'),
    weekdaysMin: 'di_lu_ma_me_??a_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: '[la] D[-an de] MMMM, YYYY',
      LLL: '[la] D[-an de] MMMM, YYYY HH:mm',
      LLLL: 'dddd[n], [la] D[-an de] MMMM, YYYY HH:mm',
      llll: 'ddd, [la] D[-an de] MMM, YYYY HH:mm' },

    meridiemParse: /[ap]\.t\.m/i,
    isPM: function isPM(input) {
      return input.charAt(0).toLowerCase() === 'p';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'p.t.m.' : 'P.T.M.';
      } else {
        return isLower ? 'a.t.m.' : 'A.T.M.';
      }
    },
    calendar: {
      sameDay: '[Hodia?? je] LT',
      nextDay: '[Morga?? je] LT',
      nextWeek: 'dddd[n je] LT',
      lastDay: '[Hiera?? je] LT',
      lastWeek: '[pasintan] dddd[n je] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'post %s',
      past: 'anta?? %s',
      s: 'kelkaj sekundoj',
      ss: '%d sekundoj',
      m: 'unu minuto',
      mm: '%d minutoj',
      h: 'unu horo',
      hh: '%d horoj',
      d: 'unu tago', //ne 'diurno', ??ar estas uzita por proksimumo
      dd: '%d tagoj',
      M: 'unu monato',
      MM: '%d monatoj',
      y: 'unu jaro',
      yy: '%d jaroj' },

    dayOfMonthOrdinalParse: /\d{1,2}a/,
    ordinal: '%da',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return eo;

});

/***/ }),
/* 48 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/es.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napur?? : https://github.com/julionc

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
  '_'),

  _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  monthsParse = [
  /^ene/i,
  /^feb/i,
  /^mar/i,
  /^abr/i,
  /^may/i,
  /^jun/i,
  /^jul/i,
  /^ago/i,
  /^sep/i,
  /^oct/i,
  /^nov/i,
  /^dic/i],

  monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  var es = moment.defineLocale('es', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
    '_'),

    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mi??._jue._vie._s??b.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_s??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[ma??ana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return (
          '[el] dddd [pasado a la' + (
          this.hours() !== 1 ? 's' : '') +
          '] LT');

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un d??a',
      dd: '%d d??as',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un a??o',
      yy: '%d a??os' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    invalidDate: 'Fecha inv??lida' });


  return es;

});

/***/ }),
/* 49 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/es-do.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
  '_'),

  _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  monthsParse = [
  /^ene/i,
  /^feb/i,
  /^mar/i,
  /^abr/i,
  /^may/i,
  /^jun/i,
  /^jul/i,
  /^ago/i,
  /^sep/i,
  /^oct/i,
  /^nov/i,
  /^dic/i],

  monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  var esDo = moment.defineLocale('es-do', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
    '_'),

    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mi??._jue._vie._s??b.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_s??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY h:mm A',
      LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[ma??ana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return (
          '[el] dddd [pasado a la' + (
          this.hours() !== 1 ? 's' : '') +
          '] LT');

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un d??a',
      dd: '%d d??as',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un a??o',
      yy: '%d a??os' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return esDo;

});

/***/ }),
/* 50 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/es-mx.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish (Mexico) [es-mx]
//! author : JC Franco : https://github.com/jcfranco

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
  '_'),

  _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  monthsParse = [
  /^ene/i,
  /^feb/i,
  /^mar/i,
  /^abr/i,
  /^may/i,
  /^jun/i,
  /^jul/i,
  /^ago/i,
  /^sep/i,
  /^oct/i,
  /^nov/i,
  /^dic/i],

  monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  var esMx = moment.defineLocale('es-mx', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
    '_'),

    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mi??._jue._vie._s??b.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_s??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[ma??ana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return (
          '[el] dddd [pasado a la' + (
          this.hours() !== 1 ? 's' : '') +
          '] LT');

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un d??a',
      dd: '%d d??as',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un a??o',
      yy: '%d a??os' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    invalidDate: 'Fecha inv??lida' });


  return esMx;

});

/***/ }),
/* 51 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/es-us.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
//! author : chrisrodz : https://github.com/chrisrodz

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
  '_'),

  _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  monthsParse = [
  /^ene/i,
  /^feb/i,
  /^mar/i,
  /^abr/i,
  /^may/i,
  /^jun/i,
  /^jul/i,
  /^ago/i,
  /^sep/i,
  /^oct/i,
  /^nov/i,
  /^dic/i],

  monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  var esUs = moment.defineLocale('es-us', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
    '_'),

    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mi??._jue._vie._s??b.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_s??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'MM/DD/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY h:mm A',
      LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[ma??ana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return (
          '[el] dddd [pasado a la' + (
          this.hours() !== 1 ? 's' : '') +
          '] LT');

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un d??a',
      dd: '%d d??as',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un a??o',
      yy: '%d a??os' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return esUs;

});

/***/ }),
/* 52 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/et.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['m??ne sekundi', 'm??ni sekund', 'paar sekundit'],
      ss: [number + 'sekundi', number + 'sekundit'],
      m: ['??he minuti', '??ks minut'],
      mm: [number + ' minuti', number + ' minutit'],
      h: ['??he tunni', 'tund aega', '??ks tund'],
      hh: [number + ' tunni', number + ' tundi'],
      d: ['??he p??eva', '??ks p??ev'],
      M: ['kuu aja', 'kuu aega', '??ks kuu'],
      MM: [number + ' kuu', number + ' kuud'],
      y: ['??he aasta', 'aasta', '??ks aasta'],
      yy: [number + ' aasta', number + ' aastat'] };

    if (withoutSuffix) {
      return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
  }

  var et = moment.defineLocale('et', {
    months: 'jaanuar_veebruar_m??rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split(
    '_'),

    monthsShort: 'jaan_veebr_m??rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split(
    '_'),

    weekdays: 'p??hap??ev_esmasp??ev_teisip??ev_kolmap??ev_neljap??ev_reede_laup??ev'.split(
    '_'),

    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[T??na,] LT',
      nextDay: '[Homme,] LT',
      nextWeek: '[J??rgmine] dddd LT',
      lastDay: '[Eile,] LT',
      lastWeek: '[Eelmine] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s p??rast',
      past: '%s tagasi',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: '%d p??eva',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return et;

});

/***/ }),
/* 53 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/eu.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Basque [eu]
//! author : Eneko Illarramendi : https://github.com/eillarra

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var eu = moment.defineLocale('eu', {
    months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split(
    '_'),

    monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split(
    '_'),

    weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY[ko] MMMM[ren] D[a]',
      LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
      LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
      l: 'YYYY-M-D',
      ll: 'YYYY[ko] MMM D[a]',
      lll: 'YYYY[ko] MMM D[a] HH:mm',
      llll: 'ddd, YYYY[ko] MMM D[a] HH:mm' },

    calendar: {
      sameDay: '[gaur] LT[etan]',
      nextDay: '[bihar] LT[etan]',
      nextWeek: 'dddd LT[etan]',
      lastDay: '[atzo] LT[etan]',
      lastWeek: '[aurreko] dddd LT[etan]',
      sameElse: 'L' },

    relativeTime: {
      future: '%s barru',
      past: 'duela %s',
      s: 'segundo batzuk',
      ss: '%d segundo',
      m: 'minutu bat',
      mm: '%d minutu',
      h: 'ordu bat',
      hh: '%d ordu',
      d: 'egun bat',
      dd: '%d egun',
      M: 'hilabete bat',
      MM: '%d hilabete',
      y: 'urte bat',
      yy: '%d urte' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return eu;

});

/***/ }),
/* 54 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fa.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Ebrahim Byagowi : https://github.com/ebraminio

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '??',
    2: '??',
    3: '??',
    4: '??',
    5: '??',
    6: '??',
    7: '??',
    8: '??',
    9: '??',
    0: '??' },

  numberMap = {
    '??': '1',
    '??': '2',
    '??': '3',
    '??': '4',
    '??': '5',
    '??': '6',
    '??': '7',
    '??': '8',
    '??': '9',
    '??': '0' };


  var fa = moment.defineLocale('fa', {
    months: '????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????'.split(
    '_'),

    monthsShort: '????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????'.split(
    '_'),

    weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split(
    '_'),

    weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split(
    '_'),

    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    meridiemParse: /?????? ???? ??????|?????? ???? ??????/,
    isPM: function isPM(input) {
      return /?????? ???? ??????/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '?????? ???? ??????';
      } else {
        return '?????? ???? ??????';
      }
    },
    calendar: {
      sameDay: '[?????????? ????????] LT',
      nextDay: '[???????? ????????] LT',
      nextWeek: 'dddd [????????] LT',
      lastDay: '[?????????? ????????] LT',
      lastWeek: 'dddd [??????] [????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '%s ??????',
      s: '?????? ??????????',
      ss: '%d ??????????',
      m: '???? ??????????',
      mm: '%d ??????????',
      h: '???? ????????',
      hh: '%d ????????',
      d: '???? ??????',
      dd: '%d ??????',
      M: '???? ??????',
      MM: '%d ??????',
      y: '???? ??????',
      yy: '%d ??????' },

    preparse: function preparse(string) {
      return string.
      replace(/[??-??]/g, function (match) {
        return numberMap[match];
      }).
      replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.
      replace(/\d/g, function (match) {
        return symbolMap[match];
      }).
      replace(/,/g, '??');
    },
    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return fa;

});

/***/ }),
/* 55 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fi.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Finnish [fi]
//! author : Tarmo Aidantausta : https://github.com/bleadof

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var numbersPast = 'nolla yksi kaksi kolme nelj?? viisi kuusi seitsem??n kahdeksan yhdeks??n'.split(
  ' '),

  numbersFuture = [
  'nolla',
  'yhden',
  'kahden',
  'kolmen',
  'nelj??n',
  'viiden',
  'kuuden',
  numbersPast[7],
  numbersPast[8],
  numbersPast[9]];

  function translate(number, withoutSuffix, key, isFuture) {
    var result = '';
    switch (key) {
      case 's':
        return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
      case 'ss':
        result = isFuture ? 'sekunnin' : 'sekuntia';
        break;
      case 'm':
        return isFuture ? 'minuutin' : 'minuutti';
      case 'mm':
        result = isFuture ? 'minuutin' : 'minuuttia';
        break;
      case 'h':
        return isFuture ? 'tunnin' : 'tunti';
      case 'hh':
        result = isFuture ? 'tunnin' : 'tuntia';
        break;
      case 'd':
        return isFuture ? 'p??iv??n' : 'p??iv??';
      case 'dd':
        result = isFuture ? 'p??iv??n' : 'p??iv????';
        break;
      case 'M':
        return isFuture ? 'kuukauden' : 'kuukausi';
      case 'MM':
        result = isFuture ? 'kuukauden' : 'kuukautta';
        break;
      case 'y':
        return isFuture ? 'vuoden' : 'vuosi';
      case 'yy':
        result = isFuture ? 'vuoden' : 'vuotta';
        break;}

    result = verbalNumber(number, isFuture) + ' ' + result;
    return result;
  }
  function verbalNumber(number, isFuture) {
    return number < 10 ?
    isFuture ?
    numbersFuture[number] :
    numbersPast[number] :
    number;
  }

  var fi = moment.defineLocale('fi', {
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes??kuu_hein??kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
    '_'),

    monthsShort: 'tammi_helmi_maalis_huhti_touko_kes??_hein??_elo_syys_loka_marras_joulu'.split(
    '_'),

    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
    '_'),

    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM[ta] YYYY',
      LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
      LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
      l: 'D.M.YYYY',
      ll: 'Do MMM YYYY',
      lll: 'Do MMM YYYY, [klo] HH.mm',
      llll: 'ddd, Do MMM YYYY, [klo] HH.mm' },

    calendar: {
      sameDay: '[t??n????n] [klo] LT',
      nextDay: '[huomenna] [klo] LT',
      nextWeek: 'dddd [klo] LT',
      lastDay: '[eilen] [klo] LT',
      lastWeek: '[viime] dddd[na] [klo] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s p????st??',
      past: '%s sitten',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fi;

});

/***/ }),
/* 56 */
/*!*************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fil.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Filipino [fil]
//! author : Dan Hagman : https://github.com/hagmandan
//! author : Matthew Co : https://github.com/matthewdeeco

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var fil = moment.defineLocale('fil', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split(
    '_'),

    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split(
    '_'),

    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'MM/D/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM DD, YYYY HH:mm' },

    calendar: {
      sameDay: 'LT [ngayong araw]',
      nextDay: '[Bukas ng] LT',
      nextWeek: 'LT [sa susunod na] dddd',
      lastDay: 'LT [kahapon]',
      lastWeek: 'LT [noong nakaraang] dddd',
      sameElse: 'L' },

    relativeTime: {
      future: 'sa loob ng %s',
      past: '%s ang nakalipas',
      s: 'ilang segundo',
      ss: '%d segundo',
      m: 'isang minuto',
      mm: '%d minuto',
      h: 'isang oras',
      hh: '%d oras',
      d: 'isang araw',
      dd: '%d araw',
      M: 'isang buwan',
      MM: '%d buwan',
      y: 'isang taon',
      yy: '%d taon' },

    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fil;

});

/***/ }),
/* 57 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Faroese [fo]
//! author : Ragnar Johannesen : https://github.com/ragnar123
//! author : Kristian Sakarisson : https://github.com/sakarisson

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var fo = moment.defineLocale('fo', {
    months: 'januar_februar_mars_apr??l_mai_juni_juli_august_september_oktober_november_desember'.split(
    '_'),

    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays: 'sunnudagur_m??nadagur_t??sdagur_mikudagur_h??sdagur_fr??ggjadagur_leygardagur'.split(
    '_'),

    weekdaysShort: 'sun_m??n_t??s_mik_h??s_fr??_ley'.split('_'),
    weekdaysMin: 'su_m??_t??_mi_h??_fr_le'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D. MMMM, YYYY HH:mm' },

    calendar: {
      sameDay: '[?? dag kl.] LT',
      nextDay: '[?? morgin kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[?? gj??r kl.] LT',
      lastWeek: '[s????stu] dddd [kl] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'um %s',
      past: '%s s????ani',
      s: 'f?? sekund',
      ss: '%d sekundir',
      m: 'ein minuttur',
      mm: '%d minuttir',
      h: 'ein t??mi',
      hh: '%d t??mar',
      d: 'ein dagur',
      dd: '%d dagar',
      M: 'ein m??na??ur',
      MM: '%d m??na??ir',
      y: 'eitt ??r',
      yy: '%d ??r' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fo;

});

/***/ }),
/* 58 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fr.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsStrictRegex = /^(janvier|f??vrier|mars|avril|mai|juin|juillet|ao??t|septembre|octobre|novembre|d??cembre)/i,
  monthsShortStrictRegex = /(janv\.?|f??vr\.?|mars|avr\.?|mai|juin|juil\.?|ao??t|sept\.?|oct\.?|nov\.?|d??c\.?)/i,
  monthsRegex = /(janv\.?|f??vr\.?|mars|avr\.?|mai|juin|juil\.?|ao??t|sept\.?|oct\.?|nov\.?|d??c\.?|janvier|f??vrier|mars|avril|mai|juin|juillet|ao??t|septembre|octobre|novembre|d??cembre)/i,
  monthsParse = [
  /^janv/i,
  /^f??vr/i,
  /^mars/i,
  /^avr/i,
  /^mai/i,
  /^juin/i,
  /^juil/i,
  /^ao??t/i,
  /^sept/i,
  /^oct/i,
  /^nov/i,
  /^d??c/i];


  var fr = moment.defineLocale('fr', {
    months: 'janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre'.split(
    '_'),

    monthsShort: 'janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.'.split(
    '_'),

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: monthsStrictRegex,
    monthsShortStrictRegex: monthsShortStrictRegex,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Aujourd???hui ??] LT',
      nextDay: '[Demain ??] LT',
      nextWeek: 'dddd [??] LT',
      lastDay: '[Hier ??] LT',
      lastWeek: 'dddd [dernier ??] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      w: 'une semaine',
      ww: '%d semaines',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans' },

    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // TODO: Return 'e' when day of month > 1. Move this case inside
        // block for masculine words below.
        // See https://github.com/moment/moment/issues/3375
        case 'D':
          return number + (number === 1 ? 'er' : '');

        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fr;

});

/***/ }),
/* 59 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fr-ca.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var frCa = moment.defineLocale('fr-ca', {
    months: 'janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre'.split(
    '_'),

    monthsShort: 'janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Aujourd???hui ??] LT',
      nextDay: '[Demain ??] LT',
      nextWeek: 'dddd [??] LT',
      lastDay: '[Hier ??] LT',
      lastWeek: 'dddd [dernier ??] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans' },

    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');}

    } });


  return frCa;

});

/***/ }),
/* 60 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fr-ch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Switzerland) [fr-ch]
//! author : Gaspard Bucher : https://github.com/gaspard

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var frCh = moment.defineLocale('fr-ch', {
    months: 'janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre'.split(
    '_'),

    monthsShort: 'janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Aujourd???hui ??] LT',
      nextDay: '[Demain ??] LT',
      nextWeek: 'dddd [??] LT',
      lastDay: '[Hier ??] LT',
      lastWeek: 'dddd [dernier ??] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans' },

    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return frCh;

});

/***/ }),
/* 61 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/fy.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Frisian [fy]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split(
  '_'),

  monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split(
  '_');


  var fy = moment.defineLocale('fy', {
    months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split(
    '_'),

    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },
    monthsParseExact: true,
    weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split(
    '_'),

    weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
    weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[hjoed om] LT',
      nextDay: '[moarn om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[juster om] LT',
      lastWeek: '[??fr??ne] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'oer %s',
      past: '%s lyn',
      s: 'in pear sekonden',
      ss: '%d sekonden',
      m: 'ien min??t',
      mm: '%d minuten',
      h: 'ien oere',
      hh: '%d oeren',
      d: 'ien dei',
      dd: '%d dagen',
      M: 'ien moanne',
      MM: '%d moannen',
      y: 'ien jier',
      yy: '%d jierren' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return (
        number + (
        number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'));

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return fy;

});

/***/ }),
/* 62 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ga.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Irish or Irish Gaelic [ga]
//! author : Andr?? Silva : https://github.com/askpt

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var months = [
  'Ean??ir',
  'Feabhra',
  'M??rta',
  'Aibre??n',
  'Bealtaine',
  'Meitheamh',
  'I??il',
  'L??nasa',
  'Me??n F??mhair',
  'Deireadh F??mhair',
  'Samhain',
  'Nollaig'],

  monthsShort = [
  'Ean',
  'Feabh',
  'M??rt',
  'Aib',
  'Beal',
  'Meith',
  'I??il',
  'L??n',
  'M.F.',
  'D.F.',
  'Samh',
  'Noll'],

  weekdays = [
  'D?? Domhnaigh',
  'D?? Luain',
  'D?? M??irt',
  'D?? C??adaoin',
  'D??ardaoin',
  'D?? hAoine',
  'D?? Sathairn'],

  weekdaysShort = ['Domh', 'Luan', 'M??irt', 'C??ad', 'D??ar', 'Aoine', 'Sath'],
  weekdaysMin = ['Do', 'Lu', 'M??', 'C??', 'D??', 'A', 'Sa'];

  var ga = moment.defineLocale('ga', {
    months: months,
    monthsShort: monthsShort,
    monthsParseExact: true,
    weekdays: weekdays,
    weekdaysShort: weekdaysShort,
    weekdaysMin: weekdaysMin,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Inniu ag] LT',
      nextDay: '[Am??rach ag] LT',
      nextWeek: 'dddd [ag] LT',
      lastDay: '[Inn?? ag] LT',
      lastWeek: 'dddd [seo caite] [ag] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'i %s',
      past: '%s ?? shin',
      s: 'c??pla soicind',
      ss: '%d soicind',
      m: 'n??im??ad',
      mm: '%d n??im??ad',
      h: 'uair an chloig',
      hh: '%d uair an chloig',
      d: 'l??',
      dd: '%d l??',
      M: 'm??',
      MM: '%d m??onna',
      y: 'bliain',
      yy: '%d bliain' },

    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ga;

});

/***/ }),
/* 63 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/gd.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Scottish Gaelic [gd]
//! author : Jon Ashdown : https://github.com/jonashdown

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var months = [
  'Am Faoilleach',
  'An Gearran',
  'Am M??rt',
  'An Giblean',
  'An C??itean',
  'An t-??gmhios',
  'An t-Iuchar',
  'An L??nastal',
  'An t-Sultain',
  'An D??mhair',
  'An t-Samhain',
  'An D??bhlachd'],

  monthsShort = [
  'Faoi',
  'Gear',
  'M??rt',
  'Gibl',
  'C??it',
  '??gmh',
  'Iuch',
  'L??n',
  'Sult',
  'D??mh',
  'Samh',
  'D??bh'],

  weekdays = [
  'Did??mhnaich',
  'Diluain',
  'Dim??irt',
  'Diciadain',
  'Diardaoin',
  'Dihaoine',
  'Disathairne'],

  weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
  weekdaysMin = ['D??', 'Lu', 'M??', 'Ci', 'Ar', 'Ha', 'Sa'];

  var gd = moment.defineLocale('gd', {
    months: months,
    monthsShort: monthsShort,
    monthsParseExact: true,
    weekdays: weekdays,
    weekdaysShort: weekdaysShort,
    weekdaysMin: weekdaysMin,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[An-diugh aig] LT',
      nextDay: '[A-m??ireach aig] LT',
      nextWeek: 'dddd [aig] LT',
      lastDay: '[An-d?? aig] LT',
      lastWeek: 'dddd [seo chaidh] [aig] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'ann an %s',
      past: 'bho chionn %s',
      s: 'beagan diogan',
      ss: '%d diogan',
      m: 'mionaid',
      mm: '%d mionaidean',
      h: 'uair',
      hh: '%d uairean',
      d: 'latha',
      dd: '%d latha',
      M: 'm??os',
      MM: '%d m??osan',
      y: 'bliadhna',
      yy: '%d bliadhna' },

    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return gd;

});

/***/ }),
/* 64 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/gl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var gl = moment.defineLocale('gl', {
    months: 'xaneiro_febreiro_marzo_abril_maio_xu??o_xullo_agosto_setembro_outubro_novembro_decembro'.split(
    '_'),

    monthsShort: 'xan._feb._mar._abr._mai._xu??._xul._ago._set._out._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'domingo_luns_martes_m??rcores_xoves_venres_s??bado'.split('_'),
    weekdaysShort: 'dom._lun._mar._m??r._xov._ven._s??b.'.split('_'),
    weekdaysMin: 'do_lu_ma_m??_xo_ve_s??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm' },

    calendar: {
      sameDay: function sameDay() {
        return '[hoxe ' + (this.hours() !== 1 ? '??s' : '??') + '] LT';
      },
      nextDay: function nextDay() {
        return '[ma???? ' + (this.hours() !== 1 ? '??s' : '??') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [' + (this.hours() !== 1 ? '??s' : 'a') + '] LT';
      },
      lastDay: function lastDay() {
        return '[onte ' + (this.hours() !== 1 ? '??' : 'a') + '] LT';
      },
      lastWeek: function lastWeek() {
        return (
          '[o] dddd [pasado ' + (this.hours() !== 1 ? '??s' : 'a') + '] LT');

      },
      sameElse: 'L' },

    relativeTime: {
      future: function future(str) {
        if (str.indexOf('un') === 0) {
          return 'n' + str;
        }
        return 'en ' + str;
      },
      past: 'hai %s',
      s: 'uns segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'unha hora',
      hh: '%d horas',
      d: 'un d??a',
      dd: '%d d??as',
      M: 'un mes',
      MM: '%d meses',
      y: 'un ano',
      yy: '%d anos' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return gl;

});

/***/ }),
/* 65 */
/*!******************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/gom-deva.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Konkani Devanagari script [gom-deva]
//! author : The Discoverer : https://github.com/WikiDiscoverer

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['??????????????? ???????????????????????????', '???????????? ???????????????'],
      ss: [number + ' ???????????????????????????', number + ' ???????????????'],
      m: ['????????? ??????????????????', '?????? ???????????????'],
      mm: [number + ' ????????????????????????', number + ' ??????????????????'],
      h: ['????????? ????????????', '?????? ??????'],
      hh: [number + ' ??????????????????', number + ' ????????????'],
      d: ['????????? ???????????????', '?????? ?????????'],
      dd: [number + ' ?????????????????????', number + ' ?????????'],
      M: ['????????? ???????????????????????????', '?????? ??????????????????'],
      MM: [number + ' ??????????????????????????????', number + ' ??????????????????'],
      y: ['????????? ??????????????????', '?????? ????????????'],
      yy: [number + ' ????????????????????????', number + ' ??????????????????'] };

    return isFuture ? format[key][0] : format[key][1];
  }

  var gomDeva = moment.defineLocale('gom-deva', {
    months: {
      standalone: '????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_????????????_???????????????_????????????????????????_?????????????????????_???????????????????????????_?????????????????????'.split(
      '_'),

      format: '????????????????????????????????????_??????????????????????????????????????????_??????????????????????????????_?????????????????????????????????_????????????????????????_????????????????????????_???????????????????????????_??????????????????????????????_???????????????????????????????????????_????????????????????????????????????_??????????????????????????????????????????_????????????????????????????????????'.split(
      '_'),

      isFormat: /MMMM(\s)+D[oD]?/ },

    monthsShort: '????????????._??????????????????._???????????????_???????????????._??????_?????????_?????????._??????._??????????????????._???????????????._?????????????????????._???????????????.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '???????????????_???????????????_??????????????????_??????????????????_???????????????????????????_?????????????????????_??????????????????'.split('_'),
    weekdaysShort: '?????????._?????????._????????????._?????????._?????????????????????._???????????????._?????????.'.split('_'),
    weekdaysMin: '???_??????_??????_??????_????????????_??????_??????'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'A h:mm [??????????????????]',
      LTS: 'A h:mm:ss [??????????????????]',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY A h:mm [??????????????????]',
      LLLL: 'dddd, MMMM Do, YYYY, A h:mm [??????????????????]',
      llll: 'ddd, D MMM YYYY, A h:mm [??????????????????]' },

    calendar: {
      sameDay: '[?????????] LT',
      nextDay: '[?????????????????????] LT',
      nextWeek: '[???????????????] dddd[,] LT',
      lastDay: '[?????????] LT',
      lastWeek: '[???????????????] dddd[,] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s',
      past: '%s ????????????',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}(?????????)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // the ordinal '?????????' only applies to day of the month
        case 'D':
          return number + '?????????';
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
        case 'w':
        case 'W':
          return number;}

    },
    week: {
      dow: 0, // Sunday is the first day of the week
      doy: 3 // The week that contains Jan 4th is the first week of the year (7 + 0 - 4)
    },
    meridiemParse: /????????????|??????????????????|?????????????????????|???????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '????????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '??????????????????') {
        return hour;
      } else if (meridiem === '?????????????????????') {
        return hour > 12 ? hour : hour + 12;
      } else if (meridiem === '???????????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '????????????';
      } else if (hour < 12) {
        return '??????????????????';
      } else if (hour < 16) {
        return '?????????????????????';
      } else if (hour < 20) {
        return '???????????????';
      } else {
        return '????????????';
      }
    } });


  return gomDeva;

});

/***/ }),
/* 66 */
/*!******************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/gom-latn.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Konkani Latin script [gom-latn]
//! author : The Discoverer : https://github.com/WikiDiscoverer

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['thoddea sekondamni', 'thodde sekond'],
      ss: [number + ' sekondamni', number + ' sekond'],
      m: ['eka mintan', 'ek minut'],
      mm: [number + ' mintamni', number + ' mintam'],
      h: ['eka voran', 'ek vor'],
      hh: [number + ' voramni', number + ' voram'],
      d: ['eka disan', 'ek dis'],
      dd: [number + ' disamni', number + ' dis'],
      M: ['eka mhoinean', 'ek mhoino'],
      MM: [number + ' mhoineamni', number + ' mhoine'],
      y: ['eka vorsan', 'ek voros'],
      yy: [number + ' vorsamni', number + ' vorsam'] };

    return isFuture ? format[key][0] : format[key][1];
  }

  var gomLatn = moment.defineLocale('gom-latn', {
    months: {
      standalone: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split(
      '_'),

      format: 'Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea'.split(
      '_'),

      isFormat: /MMMM(\s)+D[oD]?/ },

    monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split('_'),
    weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
    weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'A h:mm [vazta]',
      LTS: 'A h:mm:ss [vazta]',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY A h:mm [vazta]',
      LLLL: 'dddd, MMMM Do, YYYY, A h:mm [vazta]',
      llll: 'ddd, D MMM YYYY, A h:mm [vazta]' },

    calendar: {
      sameDay: '[Aiz] LT',
      nextDay: '[Faleam] LT',
      nextWeek: '[Fuddlo] dddd[,] LT',
      lastDay: '[Kal] LT',
      lastWeek: '[Fattlo] dddd[,] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s',
      past: '%s adim',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // the ordinal 'er' only applies to day of the month
        case 'D':
          return number + 'er';
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
        case 'w':
        case 'W':
          return number;}

    },
    week: {
      dow: 0, // Sunday is the first day of the week
      doy: 3 // The week that contains Jan 4th is the first week of the year (7 + 0 - 4)
    },
    meridiemParse: /rati|sokallim|donparam|sanje/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'rati') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'sokallim') {
        return hour;
      } else if (meridiem === 'donparam') {
        return hour > 12 ? hour : hour + 12;
      } else if (meridiem === 'sanje') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'rati';
      } else if (hour < 12) {
        return 'sokallim';
      } else if (hour < 16) {
        return 'donparam';
      } else if (hour < 20) {
        return 'sanje';
      } else {
        return 'rati';
      }
    } });


  return gomLatn;

});

/***/ }),
/* 67 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/gu.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Gujarati [gu]
//! author : Kaushik Thanki : https://github.com/Kaushik1987

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var gu = moment.defineLocale('gu', {
    months: '???????????????????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_???????????????????????????_?????????????????????_?????????????????????_????????????????????????'.split(
    '_'),

    monthsShort: '??????????????????._??????????????????._???????????????_???????????????._??????_?????????_????????????._??????._???????????????._???????????????._?????????._????????????.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '??????????????????_??????????????????_?????????????????????_?????????????????????_?????????????????????_????????????????????????_??????????????????'.split(
    '_'),

    weekdaysShort: '?????????_?????????_????????????_????????????_????????????_???????????????_?????????'.split('_'),
    weekdaysMin: '???_??????_??????_??????_??????_??????_???'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ??????????????????',
      LTS: 'A h:mm:ss ??????????????????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ??????????????????',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ??????????????????' },

    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[??????????????????] LT',
      lastWeek: '[???????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ??????',
      past: '%s ???????????????',
      s: '???????????? ?????????',
      ss: '%d ???????????????',
      m: '?????? ???????????????',
      mm: '%d ???????????????',
      h: '?????? ????????????',
      hh: '%d ????????????',
      d: '?????? ????????????',
      dd: '%d ????????????',
      M: '?????? ???????????????',
      MM: '%d ???????????????',
      y: '?????? ????????????',
      yy: '%d ????????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
    meridiemParse: /?????????|????????????|????????????|????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '?????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour;
      } else if (meridiem === '????????????') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '?????????';
      } else if (hour < 10) {
        return '????????????';
      } else if (hour < 17) {
        return '????????????';
      } else if (hour < 20) {
        return '????????????';
      } else {
        return '?????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return gu;

});

/***/ }),
/* 68 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/he.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var he = moment.defineLocale('he', {
    months: '??????????_????????????_??????_??????????_??????_????????_????????_????????????_????????????_??????????????_????????????_??????????'.split(
    '_'),

    monthsShort: '????????_????????_??????_????????_??????_????????_????????_????????_????????_????????_????????_????????'.split(
    '_'),

    weekdays: '??????????_??????_??????????_??????????_??????????_????????_??????'.split('_'),
    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [??]MMMM YYYY',
      LLL: 'D [??]MMMM YYYY HH:mm',
      LLLL: 'dddd, D [??]MMMM YYYY HH:mm',
      l: 'D/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm' },

    calendar: {
      sameDay: '[???????? ????]LT',
      nextDay: '[?????? ????]LT',
      nextWeek: 'dddd [????????] LT',
      lastDay: '[?????????? ????]LT',
      lastWeek: '[????????] dddd [???????????? ????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???????? %s',
      past: '???????? %s',
      s: '???????? ??????????',
      ss: '%d ??????????',
      m: '??????',
      mm: '%d ????????',
      h: '??????',
      hh: function hh(number) {
        if (number === 2) {
          return '????????????';
        }
        return number + ' ????????';
      },
      d: '??????',
      dd: function dd(number) {
        if (number === 2) {
          return '????????????';
        }
        return number + ' ????????';
      },
      M: '????????',
      MM: function MM(number) {
        if (number === 2) {
          return '??????????????';
        }
        return number + ' ????????????';
      },
      y: '??????',
      yy: function yy(number) {
        if (number === 2) {
          return '????????????';
        } else if (number % 10 === 0 && number !== 10) {
          return number + ' ??????';
        }
        return number + ' ????????';
      } },

    meridiemParse: /??????"??|????????"??|???????? ??????????????|???????? ??????????????|?????????? ????????|??????????|????????/i,
    isPM: function isPM(input) {
      return /^(??????"??|???????? ??????????????|????????)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 5) {
        return '?????????? ????????';
      } else if (hour < 10) {
        return '??????????';
      } else if (hour < 12) {
        return isLower ? '????????"??' : '???????? ??????????????';
      } else if (hour < 18) {
        return isLower ? '??????"??' : '???????? ??????????????';
      } else {
        return '????????';
      }
    } });


  return he;

});

/***/ }),
/* 69 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/hi.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' },

  monthsParse = [
  /^??????/i,
  /^?????????|??????/i,
  /^???????????????/i,
  /^???????????????/i,
  /^??????/i,
  /^?????????/i,
  /^?????????/i,
  /^??????/i,
  /^????????????|?????????/i,
  /^???????????????/i,
  /^??????|?????????/i,
  /^????????????|?????????/i],

  shortMonthsParse = [
  /^??????/i,
  /^?????????/i,
  /^???????????????/i,
  /^???????????????/i,
  /^??????/i,
  /^?????????/i,
  /^?????????/i,
  /^??????/i,
  /^?????????/i,
  /^???????????????/i,
  /^??????/i,
  /^?????????/i];


  var hi = moment.defineLocale('hi', {
    months: {
      format: '???????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_?????????????????????_?????????????????????_??????????????????_?????????????????????'.split(
      '_'),

      standalone: '???????????????_???????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????_?????????????????????_???????????????_??????????????????'.split(
      '_') },


    monthsShort: '??????._?????????._???????????????_???????????????._??????_?????????_?????????._??????._?????????._???????????????._??????._?????????.'.split(
    '_'),

    weekdays: '??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????'.split('_'),
    weekdaysShort: '?????????_?????????_????????????_?????????_????????????_???????????????_?????????'.split('_'),
    weekdaysMin: '???_??????_??????_??????_??????_??????_???'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ?????????',
      LTS: 'A h:mm:ss ?????????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ?????????',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ?????????' },


    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: shortMonthsParse,

    monthsRegex: /^(???????????????|??????\.?|??????????????????|???????????????|?????????\.?|????????????????|??????????????????|???????????????\.?|???????|??????????|???????????????|?????????\.?|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?|?????????????????????|???????????????\.?|??????????????????|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?)/i,

    monthsShortRegex: /^(???????????????|??????\.?|??????????????????|???????????????|?????????\.?|????????????????|??????????????????|???????????????\.?|???????|??????????|???????????????|?????????\.?|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?|?????????????????????|???????????????\.?|??????????????????|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?)/i,

    monthsStrictRegex: /^(????????????????|??????????????????|????????????????|????????????????|???????????????????|???????|??????????|????????????????|????????????????|?????????????????????|??????????????????|??????????\.?|?????????????????????|???????????????\.?|??????????????????|????????????????|?????????????????????|???????????????????)/i,

    monthsShortStrictRegex: /^(??????\.?|?????????\.?|????????????????|???????????????\.?|???????|??????????|?????????\.?|??????\.?|?????????\.?|???????????????\.?|??????\.?|?????????\.?)/i,

    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[??????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[??????] LT',
      lastWeek: '[???????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ?????????',
      past: '%s ????????????',
      s: '????????? ?????? ????????????',
      ss: '%d ???????????????',
      m: '?????? ????????????',
      mm: '%d ????????????',
      h: '?????? ????????????',
      hh: '%d ????????????',
      d: '?????? ?????????',
      dd: '%d ?????????',
      M: '?????? ???????????????',
      MM: '%d ???????????????',
      y: '?????? ????????????',
      yy: '%d ????????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /?????????|????????????|???????????????|?????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '?????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour;
      } else if (meridiem === '???????????????') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === '?????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '?????????';
      } else if (hour < 10) {
        return '????????????';
      } else if (hour < 17) {
        return '???????????????';
      } else if (hour < 20) {
        return '?????????';
      } else {
        return '?????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return hi;

});

/***/ }),
/* 70 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/hr.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Bojan Markovi?? : https://github.com/bmarkovic

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        if (number === 1) {
          result += 'sekunda';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sekunde';
        } else {
          result += 'sekundi';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        if (number === 1) {
          result += 'minuta';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'minute';
        } else {
          result += 'minuta';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
        if (number === 1) {
          result += 'sat';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sata';
        } else {
          result += 'sati';
        }
        return result;
      case 'dd':
        if (number === 1) {
          result += 'dan';
        } else {
          result += 'dana';
        }
        return result;
      case 'MM':
        if (number === 1) {
          result += 'mjesec';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'mjeseca';
        } else {
          result += 'mjeseci';
        }
        return result;
      case 'yy':
        if (number === 1) {
          result += 'godina';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'godine';
        } else {
          result += 'godina';
        }
        return result;}

  }

  var hr = moment.defineLocale('hr', {
    months: {
      format: 'sije??nja_velja??e_o??ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
      '_'),

      standalone: 'sije??anj_velja??a_o??ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
      '_') },


    monthsShort: 'sij._velj._o??u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota'.split(
    '_'),

    weekdaysShort: 'ned._pon._uto._sri._??et._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_??e_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM YYYY',
      LLL: 'Do MMMM YYYY H:mm',
      LLLL: 'dddd, Do MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[ju??er u] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[pro??lu] [nedjelju] [u] LT';
          case 3:
            return '[pro??lu] [srijedu] [u] LT';
          case 6:
            return '[pro??le] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[pro??li] dddd [u] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: 'dan',
      dd: translate,
      M: 'mjesec',
      MM: translate,
      y: 'godinu',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return hr;

});

/***/ }),
/* 71 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/hu.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
//! author : Peter Viszt  : https://github.com/passatgt

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var weekEndings = 'vas??rnap h??tf??n kedden szerd??n cs??t??rt??k??n p??nteken szombaton'.split(
  ' ');

  function translate(number, withoutSuffix, key, isFuture) {
    var num = number;
    switch (key) {
      case 's':
        return isFuture || withoutSuffix ?
        'n??h??ny m??sodperc' :
        'n??h??ny m??sodperce';
      case 'ss':
        return num + (isFuture || withoutSuffix) ?
        ' m??sodperc' :
        ' m??sodperce';
      case 'm':
        return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'mm':
        return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'h':
        return 'egy' + (isFuture || withoutSuffix ? ' ??ra' : ' ??r??ja');
      case 'hh':
        return num + (isFuture || withoutSuffix ? ' ??ra' : ' ??r??ja');
      case 'd':
        return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'dd':
        return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'M':
        return 'egy' + (isFuture || withoutSuffix ? ' h??nap' : ' h??napja');
      case 'MM':
        return num + (isFuture || withoutSuffix ? ' h??nap' : ' h??napja');
      case 'y':
        return 'egy' + (isFuture || withoutSuffix ? ' ??v' : ' ??ve');
      case 'yy':
        return num + (isFuture || withoutSuffix ? ' ??v' : ' ??ve');}

    return '';
  }
  function week(isFuture) {
    return (
      (isFuture ? '' : '[m??lt] ') +
      '[' +
      weekEndings[this.day()] +
      '] LT[-kor]');

  }

  var hu = moment.defineLocale('hu', {
    months: 'janu??r_febru??r_m??rcius_??prilis_m??jus_j??nius_j??lius_augusztus_szeptember_okt??ber_november_december'.split(
    '_'),

    monthsShort: 'jan._feb._m??rc._??pr._m??j._j??n._j??l._aug._szept._okt._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'vas??rnap_h??tf??_kedd_szerda_cs??t??rt??k_p??ntek_szombat'.split('_'),
    weekdaysShort: 'vas_h??t_kedd_sze_cs??t_p??n_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY. MMMM D.',
      LLL: 'YYYY. MMMM D. H:mm',
      LLLL: 'YYYY. MMMM D., dddd H:mm' },

    meridiemParse: /de|du/i,
    isPM: function isPM(input) {
      return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower === true ? 'de' : 'DE';
      } else {
        return isLower === true ? 'du' : 'DU';
      }
    },
    calendar: {
      sameDay: '[ma] LT[-kor]',
      nextDay: '[holnap] LT[-kor]',
      nextWeek: function nextWeek() {
        return week.call(this, true);
      },
      lastDay: '[tegnap] LT[-kor]',
      lastWeek: function lastWeek() {
        return week.call(this, false);
      },
      sameElse: 'L' },

    relativeTime: {
      future: '%s m??lva',
      past: '%s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return hu;

});

/***/ }),
/* 72 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/hy-am.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Armenian [hy-am]
//! author : Armendarabyan : https://github.com/armendarabyan

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var hyAm = moment.defineLocale('hy-am', {
    months: {
      format: '????????????????_????????????????_??????????_????????????_????????????_??????????????_??????????????_????????????????_????????????????????_????????????????????_??????????????????_????????????????????'.split(
      '_'),

      standalone: '??????????????_??????????????_????????_??????????_??????????_????????????_????????????_??????????????_??????????????????_??????????????????_????????????????_??????????????????'.split(
      '_') },


    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '????????????_????????????????????_??????????????????_????????????????????_??????????????????_????????????_??????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_??????_??????_????????_??????'.split('_'),
    weekdaysMin: '??????_??????_??????_??????_??????_????????_??????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY ??.',
      LLL: 'D MMMM YYYY ??., HH:mm',
      LLLL: 'dddd, D MMMM YYYY ??., HH:mm' },

    calendar: {
      sameDay: '[??????????] LT',
      nextDay: '[????????] LT',
      lastDay: '[????????] LT',
      nextWeek: function nextWeek() {
        return 'dddd [?????? ????????] LT';
      },
      lastWeek: function lastWeek() {
        return '[??????????] dddd [?????? ????????] LT';
      },
      sameElse: 'L' },

    relativeTime: {
      future: '%s ????????',
      past: '%s ????????',
      s: '???? ???????? ????????????????',
      ss: '%d ????????????????',
      m: '????????',
      mm: '%d ????????',
      h: '??????',
      hh: '%d ??????',
      d: '????',
      dd: '%d ????',
      M: '????????',
      MM: '%d ????????',
      y: '????????',
      yy: '%d ????????' },

    meridiemParse: /??????????????|????????????????|??????????????|????????????????/,
    isPM: function isPM(input) {
      return /^(??????????????|????????????????)$/.test(input);
    },
    meridiem: function meridiem(hour) {
      if (hour < 4) {
        return '??????????????';
      } else if (hour < 12) {
        return '????????????????';
      } else if (hour < 17) {
        return '??????????????';
      } else {
        return '????????????????';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(????|????)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'DDD':
        case 'w':
        case 'W':
        case 'DDDo':
          if (number === 1) {
            return number + '-????';
          }
          return number + '-????';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return hyAm;

});

/***/ }),
/* 73 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/id.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var id = moment.defineLocale('id', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'siang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sore' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'siang';
      } else if (hours < 19) {
        return 'sore';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Besok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kemarin pukul] LT',
      lastWeek: 'dddd [lalu pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lalu',
      s: 'beberapa detik',
      ss: '%d detik',
      m: 'semenit',
      mm: '%d menit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun' },

    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return id;

});

/***/ }),
/* 74 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/is.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik ??rn Sigur??sson : https://github.com/hinrik

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function plural(n) {
    if (n % 100 === 11) {
      return true;
    } else if (n % 10 === 1) {
      return false;
    }
    return true;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ?
        'nokkrar sek??ndur' :
        'nokkrum sek??ndum';
      case 'ss':
        if (plural(number)) {
          return (
            result + (
            withoutSuffix || isFuture ? 'sek??ndur' : 'sek??ndum'));

        }
        return result + 'sek??nda';
      case 'm':
        return withoutSuffix ? 'm??n??ta' : 'm??n??tu';
      case 'mm':
        if (plural(number)) {
          return (
            result + (withoutSuffix || isFuture ? 'm??n??tur' : 'm??n??tum'));

        } else if (withoutSuffix) {
          return result + 'm??n??ta';
        }
        return result + 'm??n??tu';
      case 'hh':
        if (plural(number)) {
          return (
            result + (
            withoutSuffix || isFuture ?
            'klukkustundir' :
            'klukkustundum'));

        }
        return result + 'klukkustund';
      case 'd':
        if (withoutSuffix) {
          return 'dagur';
        }
        return isFuture ? 'dag' : 'degi';
      case 'dd':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'dagar';
          }
          return result + (isFuture ? 'daga' : 'd??gum');
        } else if (withoutSuffix) {
          return result + 'dagur';
        }
        return result + (isFuture ? 'dag' : 'degi');
      case 'M':
        if (withoutSuffix) {
          return 'm??nu??ur';
        }
        return isFuture ? 'm??nu??' : 'm??nu??i';
      case 'MM':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'm??nu??ir';
          }
          return result + (isFuture ? 'm??nu??i' : 'm??nu??um');
        } else if (withoutSuffix) {
          return result + 'm??nu??ur';
        }
        return result + (isFuture ? 'm??nu??' : 'm??nu??i');
      case 'y':
        return withoutSuffix || isFuture ? '??r' : '??ri';
      case 'yy':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? '??r' : '??rum');
        }
        return result + (withoutSuffix || isFuture ? '??r' : '??ri');}

  }

  var is = moment.defineLocale('is', {
    months: 'jan??ar_febr??ar_mars_apr??l_ma??_j??n??_j??l??_??g??st_september_okt??ber_n??vember_desember'.split(
    '_'),

    monthsShort: 'jan_feb_mar_apr_ma??_j??n_j??l_??g??_sep_okt_n??v_des'.split('_'),
    weekdays: 'sunnudagur_m??nudagur_??ri??judagur_mi??vikudagur_fimmtudagur_f??studagur_laugardagur'.split(
    '_'),

    weekdaysShort: 'sun_m??n_??ri_mi??_fim_f??s_lau'.split('_'),
    weekdaysMin: 'Su_M??_??r_Mi_Fi_F??_La'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm' },

    calendar: {
      sameDay: '[?? dag kl.] LT',
      nextDay: '[?? morgun kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[?? g??r kl.] LT',
      lastWeek: '[s????asta] dddd [kl.] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'eftir %s',
      past: 'fyrir %s s????an',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: 'klukkustund',
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return is;

});

/***/ }),
/* 75 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/it.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
//! author: Marco : https://github.com/Manfre98

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var it = moment.defineLocale('it', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
    '_'),

    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_luned??_marted??_mercoled??_gioved??_venerd??_sabato'.split(
    '_'),

    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: function sameDay() {
        return (
          '[Oggi a' + (
          this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
          ']LT');

      },
      nextDay: function nextDay() {
        return (
          '[Domani a' + (
          this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
          ']LT');

      },
      nextWeek: function nextWeek() {
        return (
          'dddd [a' + (
          this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
          ']LT');

      },
      lastDay: function lastDay() {
        return (
          '[Ieri a' + (
          this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
          ']LT');

      },
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return (
              '[La scorsa] dddd [a' + (
              this.hours() > 1 ?
              'lle ' :
              this.hours() === 0 ?
              ' ' :
              "ll'") +
              ']LT');

          default:
            return (
              '[Lo scorso] dddd [a' + (
              this.hours() > 1 ?
              'lle ' :
              this.hours() === 0 ?
              ' ' :
              "ll'") +
              ']LT');}


      },
      sameElse: 'L' },

    relativeTime: {
      future: 'tra %s',
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: "un'ora",
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      w: 'una settimana',
      ww: '%d settimane',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return it;

});

/***/ }),
/* 76 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/it-ch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Italian (Switzerland) [it-ch]
//! author : xfh : https://github.com/xfh

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var itCh = moment.defineLocale('it-ch', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
    '_'),

    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_luned??_marted??_mercoled??_gioved??_venerd??_sabato'.split(
    '_'),

    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Oggi alle] LT',
      nextDay: '[Domani alle] LT',
      nextWeek: 'dddd [alle] LT',
      lastDay: '[Ieri alle] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[la scorsa] dddd [alle] LT';
          default:
            return '[lo scorso] dddd [alle] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: function future(s) {
        return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
      },
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: "un'ora",
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return itCh;

});

/***/ }),
/* 77 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ja.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ja = moment.defineLocale('ja', {
    eras: [
    {
      since: '2019-05-01',
      offset: 1,
      name: '??????',
      narrow: '???',
      abbr: 'R' },

    {
      since: '1989-01-08',
      until: '2019-04-30',
      offset: 1,
      name: '??????',
      narrow: '???',
      abbr: 'H' },

    {
      since: '1926-12-25',
      until: '1989-01-07',
      offset: 1,
      name: '??????',
      narrow: '???',
      abbr: 'S' },

    {
      since: '1912-07-30',
      until: '1926-12-24',
      offset: 1,
      name: '??????',
      narrow: '???',
      abbr: 'T' },

    {
      since: '1873-01-01',
      until: '1912-07-29',
      offset: 6,
      name: '??????',
      narrow: '???',
      abbr: 'M' },

    {
      since: '0001-01-01',
      until: '1873-12-31',
      offset: 1,
      name: '??????',
      narrow: 'AD',
      abbr: 'AD' },

    {
      since: '0000-12-31',
      until: -Infinity,
      offset: 1,
      name: '?????????',
      narrow: 'BC',
      abbr: 'BC' }],


    eraYearOrdinalRegex: /(???|\d+)???/,
    eraYearOrdinalParse: function eraYearOrdinalParse(input, match) {
      return match[1] === '???' ? 1 : parseInt(match[1] || input, 10);
    },
    months: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split(
    '_'),

    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdaysShort: '???_???_???_???_???_???_???'.split('_'),
    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY???M???D???',
      LLL: 'YYYY???M???D??? HH:mm',
      LLLL: 'YYYY???M???D??? dddd HH:mm',
      l: 'YYYY/MM/DD',
      ll: 'YYYY???M???D???',
      lll: 'YYYY???M???D??? HH:mm',
      llll: 'YYYY???M???D???(ddd) HH:mm' },

    meridiemParse: /??????|??????/i,
    isPM: function isPM(input) {
      return input === '??????';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??????';
      } else {
        return '??????';
      }
    },
    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[??????] LT',
      nextWeek: function nextWeek(now) {
        if (now.week() !== this.week()) {
          return '[??????]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      lastDay: '[??????] LT',
      lastWeek: function lastWeek(now) {
        if (this.week() !== now.week()) {
          return '[??????]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}???/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'y':
          return number === 1 ? '??????' : number + '???';
        case 'd':
        case 'D':
        case 'DDD':
          return number + '???';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s???',
      past: '%s???',
      s: '??????',
      ss: '%d???',
      m: '1???',
      mm: '%d???',
      h: '1??????',
      hh: '%d??????',
      d: '1???',
      dd: '%d???',
      M: '1??????',
      MM: '%d??????',
      y: '1???',
      yy: '%d???' } });



  return ja;

});

/***/ }),
/* 78 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/jv.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Javanese [jv]
//! author : Rony Lantip : https://github.com/lantip
//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var jv = moment.defineLocale('jv', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'enjing') {
        return hour;
      } else if (meridiem === 'siyang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'enjing';
      } else if (hours < 15) {
        return 'siyang';
      } else if (hours < 19) {
        return 'sonten';
      } else {
        return 'ndalu';
      }
    },
    calendar: {
      sameDay: '[Dinten puniko pukul] LT',
      nextDay: '[Mbenjang pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kala wingi pukul] LT',
      lastWeek: 'dddd [kepengker pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'wonten ing %s',
      past: '%s ingkang kepengker',
      s: 'sawetawis detik',
      ss: '%d detik',
      m: 'setunggal menit',
      mm: '%d menit',
      h: 'setunggal jam',
      hh: '%d jam',
      d: 'sedinten',
      dd: '%d dinten',
      M: 'sewulan',
      MM: '%d wulan',
      y: 'setaun',
      yy: '%d taun' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return jv;

});

/***/ }),
/* 79 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ka.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/IrakliJani

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ka = moment.defineLocale('ka', {
    months: '?????????????????????_???????????????????????????_???????????????_??????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????'.split(
    '_'),

    monthsShort: '?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdays: {
      standalone: '???????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????'.split(
      '_'),

      format: '??????????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????'.split(
      '_'),

      isFormat: /(????????????|??????????????????)/ },

    weekdaysShort: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdaysMin: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[????????????] LT[-??????]',
      nextDay: '[????????????] LT[-??????]',
      lastDay: '[???????????????] LT[-??????]',
      nextWeek: '[??????????????????] dddd LT[-??????]',
      lastWeek: '[????????????] dddd LT-??????',
      sameElse: 'L' },

    relativeTime: {
      future: function future(s) {
        return s.replace(/(?????????|?????????|????????????|?????????|??????|??????)(???|???)/, function (
        $0,
        $1,
        $2)
        {
          return $2 === '???' ? $1 + '??????' : $1 + $2 + '??????';
        });
      },
      past: function past(s) {
        if (/(????????????|????????????|???????????????|?????????|?????????)/.test(s)) {
          return s.replace(/(???|???)$/, '?????? ?????????');
        }
        if (/????????????/.test(s)) {
          return s.replace(/????????????$/, '???????????? ?????????');
        }
        return s;
      },
      s: '??????????????????????????? ????????????',
      ss: '%d ????????????',
      m: '????????????',
      mm: '%d ????????????',
      h: '???????????????',
      hh: '%d ???????????????',
      d: '?????????',
      dd: '%d ?????????',
      M: '?????????',
      MM: '%d ?????????',
      y: '????????????',
      yy: '%d ????????????' },

    dayOfMonthOrdinalParse: /0|1-??????|??????-\d{1,2}|\d{1,2}-???/,
    ordinal: function ordinal(number) {
      if (number === 0) {
        return number;
      }
      if (number === 1) {
        return number + '-??????';
      }
      if (
      number < 20 ||
      number <= 100 && number % 20 === 0 ||
      number % 100 === 0)
      {
        return '??????-' + number;
      }
      return number + '-???';
    },
    week: {
      dow: 1,
      doy: 7 } });



  return ka;

});

/***/ }),
/* 80 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/kk.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var suffixes = {
    0: '-????',
    1: '-????',
    2: '-????',
    3: '-????',
    4: '-????',
    5: '-????',
    6: '-????',
    7: '-????',
    8: '-????',
    9: '-????',
    10: '-????',
    20: '-????',
    30: '-????',
    40: '-????',
    50: '-????',
    60: '-????',
    70: '-????',
    80: '-????',
    90: '-????',
    100: '-????' };


  var kk = moment.defineLocale('kk', {
    months: '????????????_??????????_????????????_??????????_??????????_????????????_??????????_??????????_????????????????_??????????_????????????_??????????????????'.split(
    '_'),

    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '????????????????_????????????????_????????????????_????????????????_????????????????_????????_??????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[?????????? ??????????] LT',
      nextDay: '[?????????? ??????????] LT',
      nextWeek: 'dddd [??????????] LT',
      lastDay: '[???????? ??????????] LT',
      lastWeek: '[?????????? ??????????????] dddd [??????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ????????????',
      past: '%s ??????????',
      s: '?????????????? ????????????',
      ss: '%d ????????????',
      m: '?????? ??????????',
      mm: '%d ??????????',
      h: '?????? ??????????',
      hh: '%d ??????????',
      d: '?????? ??????',
      dd: '%d ??????',
      M: '?????? ????',
      MM: '%d ????',
      y: '?????? ??????',
      yy: '%d ??????' },

    dayOfMonthOrdinalParse: /\d{1,2}-(????|????)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
      b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return kk;

});

/***/ }),
/* 81 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/km.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var km = moment.defineLocale('km', {
    months: '????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????'.split(
    '_'),

    monthsShort: '????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????'.split(
    '_'),

    weekdays: '?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????'.split('_'),
    weekdaysShort: '??????_???_???_???_?????????_??????_???'.split('_'),
    weekdaysMin: '??????_???_???_???_?????????_??????_???'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    meridiemParse: /???????????????|???????????????/,
    isPM: function isPM(input) {
      return input === '???????????????';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '???????????????';
      } else {
        return '???????????????';
      }
    },
    calendar: {
      sameDay: '[????????????????????? ????????????] LT',
      nextDay: '[??????????????? ????????????] LT',
      nextWeek: 'dddd [????????????] LT',
      lastDay: '[???????????????????????? ????????????] LT',
      lastWeek: 'dddd [??????????????????????????????] [????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s?????????',
      past: '%s?????????',
      s: '??????????????????????????????????????????',
      ss: '%d ??????????????????',
      m: '?????????????????????',
      mm: '%d ????????????',
      h: '?????????????????????',
      hh: '%d ????????????',
      d: '?????????????????????',
      dd: '%d ????????????',
      M: '???????????????',
      MM: '%d ??????',
      y: '????????????????????????',
      yy: '%d ???????????????' },

    dayOfMonthOrdinalParse: /??????\d{1,2}/,
    ordinal: '??????%d',
    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return km;

});

/***/ }),
/* 82 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/kn.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kannada [kn]
//! author : Rajeev Naik : https://github.com/rajeevnaikte

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var kn = moment.defineLocale('kn', {
    months: '???????????????_????????????????????????_??????????????????_?????????????????????_?????????_????????????_???????????????_??????????????????_??????????????????????????????_??????????????????????????????_?????????????????????_????????????????????????'.split(
    '_'),

    monthsShort: '??????_???????????????_??????????????????_?????????????????????_?????????_????????????_???????????????_??????????????????_?????????????????????_?????????????????????_????????????_???????????????'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '?????????????????????_????????????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????'.split(
    '_'),

    weekdaysShort: '????????????_???????????????_????????????_?????????_????????????_???????????????_?????????'.split('_'),
    weekdaysMin: '??????_????????????_??????_??????_??????_??????_???'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm' },

    calendar: {
      sameDay: '[????????????] LT',
      nextDay: '[????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[??????????????????] LT',
      lastWeek: '[??????????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ????????????',
      past: '%s ???????????????',
      s: '??????????????? ?????????????????????',
      ss: '%d ??????????????????????????????',
      m: '???????????? ???????????????',
      mm: '%d ???????????????',
      h: '???????????? ????????????',
      hh: '%d ????????????',
      d: '???????????? ?????????',
      dd: '%d ?????????',
      M: '???????????? ??????????????????',
      MM: '%d ??????????????????',
      y: '???????????? ????????????',
      yy: '%d ????????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /??????????????????|????????????????????????|????????????????????????|????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '??????????????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '????????????????????????') {
        return hour;
      } else if (meridiem === '????????????????????????') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '??????????????????';
      } else if (hour < 10) {
        return '????????????????????????';
      } else if (hour < 17) {
        return '????????????????????????';
      } else if (hour < 20) {
        return '????????????';
      } else {
        return '??????????????????';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(?????????)/,
    ordinal: function ordinal(number) {
      return number + '?????????';
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return kn;

});

/***/ }),
/* 83 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ko.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ko = moment.defineLocale('ko', {
    months: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split(
    '_'),

    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdaysShort: '???_???_???_???_???_???_???'.split('_'),
    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY??? MMMM D???',
      LLL: 'YYYY??? MMMM D??? A h:mm',
      LLLL: 'YYYY??? MMMM D??? dddd A h:mm',
      l: 'YYYY.MM.DD.',
      ll: 'YYYY??? MMMM D???',
      lll: 'YYYY??? MMMM D??? A h:mm',
      llll: 'YYYY??? MMMM D??? dddd A h:mm' },

    calendar: {
      sameDay: '?????? LT',
      nextDay: '?????? LT',
      nextWeek: 'dddd LT',
      lastDay: '?????? LT',
      lastWeek: '????????? dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ???',
      past: '%s ???',
      s: '??? ???',
      ss: '%d???',
      m: '1???',
      mm: '%d???',
      h: '??? ??????',
      hh: '%d??????',
      d: '??????',
      dd: '%d???',
      M: '??? ???',
      MM: '%d???',
      y: '??? ???',
      yy: '%d???' },

    dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '???';
        case 'M':
          return number + '???';
        case 'w':
        case 'W':
          return number + '???';
        default:
          return number;}

    },
    meridiemParse: /??????|??????/,
    isPM: function isPM(token) {
      return token === '??????';
    },
    meridiem: function meridiem(hour, minute, isUpper) {
      return hour < 12 ? '??????' : '??????';
    } });


  return ko;

});

/***/ }),
/* 84 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ku.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kurdish [ku]
//! author : Shahram Mebashar : https://github.com/ShahramMebashar

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '??',
    2: '??',
    3: '??',
    4: '??',
    5: '??',
    6: '??',
    7: '??',
    8: '??',
    9: '??',
    0: '??' },

  numberMap = {
    '??': '1',
    '??': '2',
    '??': '3',
    '??': '4',
    '??': '5',
    '??': '6',
    '??': '7',
    '??': '8',
    '??': '9',
    '??': '0' },

  months = [
  '???????????? ??????????',
  '??????????',
  '??????????',
  '??????????',
  '??????????',
  '????????????????',
  '????????????',
  '??????',
  '??????????????',
  '???????????? ??????????',
  '???????????? ??????????',
  '???????????? ??????????'];


  var ku = moment.defineLocale('ku', {
    months: months,
    monthsShort: months,
    weekdays: '?????????????????????????_??????????????????????_????????????????????_????????????????????????_????????????????????????_?????????????_????????????????'.split(
    '_'),

    weekdaysShort: '??????????????????_???????????????_?????????????_?????????????????_?????????????????_?????????????_????????????????'.split(
    '_'),

    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    meridiemParse: /???????????????|???????????????/,
    isPM: function isPM(input) {
      return /???????????????/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '???????????????';
      } else {
        return '???????????????';
      }
    },
    calendar: {
      sameDay: '[????????????? ??????????????] LT',
      nextDay: '[??????????????? ??????????????] LT',
      nextWeek: 'dddd [??????????????] LT',
      lastDay: '[?????????? ??????????????] LT',
      lastWeek: 'dddd [??????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '??????? %s',
      past: '%s',
      s: '??????????? ????????????????????',
      ss: '??????????? %d',
      m: '????????? ?????????????',
      mm: '%d ?????????????',
      h: '????????? ??????????????',
      hh: '%d ??????????????',
      d: '????????? ??????',
      dd: '%d ??????',
      M: '????????? ????????',
      MM: '%d ????????',
      y: '????????? ??????',
      yy: '%d ??????' },

    preparse: function preparse(string) {
      return string.
      replace(/[????????????????????]/g, function (match) {
        return numberMap[match];
      }).
      replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.
      replace(/\d/g, function (match) {
        return symbolMap[match];
      }).
      replace(/,/g, '??');
    },
    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return ku;

});

/***/ }),
/* 85 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ky.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var suffixes = {
    0: '-????',
    1: '-????',
    2: '-????',
    3: '-????',
    4: '-????',
    5: '-????',
    6: '-????',
    7: '-????',
    8: '-????',
    9: '-????',
    10: '-????',
    20: '-????',
    30: '-????',
    40: '-????',
    50: '-????',
    60: '-????',
    70: '-????',
    80: '-????',
    90: '-????',
    100: '-????' };


  var ky = moment.defineLocale('ky', {
    months: '????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????'.split(
    '_'),

    monthsShort: '??????_??????_????????_??????_??????_????????_????????_??????_??????_??????_??????_??????'.split(
    '_'),

    weekdays: '????????????????_????????????????_????????????????_????????????????_????????????????_????????_????????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[?????????? ????????] LT',
      nextDay: '[?????????? ????????] LT',
      nextWeek: 'dddd [????????] LT',
      lastDay: '[?????????? ????????] LT',
      lastWeek: '[?????????? ??????????????] dddd [????????] [????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ????????????',
      past: '%s ??????????',
      s: '?????????????? ????????????',
      ss: '%d ????????????',
      m: '?????? ??????????',
      mm: '%d ??????????',
      h: '?????? ????????',
      hh: '%d ????????',
      d: '?????? ??????',
      dd: '%d ??????',
      M: '?????? ????',
      MM: '%d ????',
      y: '?????? ??????',
      yy: '%d ??????' },

    dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
      b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return ky;

});

/***/ }),
/* 86 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/lb.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eng Minutt', 'enger Minutt'],
      h: ['eng Stonn', 'enger Stonn'],
      d: ['een Dag', 'engem Dag'],
      M: ['ee Mount', 'engem Mount'],
      y: ['ee Joer', 'engem Joer'] };

    return withoutSuffix ? format[key][0] : format[key][1];
  }
  function processFutureTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'a ' + string;
    }
    return 'an ' + string;
  }
  function processPastTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'viru ' + string;
    }
    return 'virun ' + string;
  }
  /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
  function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
      return false;
    }
    if (number < 0) {
      // Negative Number --> always true
      return true;
    } else if (number < 10) {
      // Only 1 digit
      if (4 <= number && number <= 7) {
        return true;
      }
      return false;
    } else if (number < 100) {
      // 2 digits
      var lastDigit = number % 10,
      firstDigit = number / 10;
      if (lastDigit === 0) {
        return eifelerRegelAppliesToNumber(firstDigit);
      }
      return eifelerRegelAppliesToNumber(lastDigit);
    } else if (number < 10000) {
      // 3 or 4 digits --> recursively check first digit
      while (number >= 10) {
        number = number / 10;
      }
      return eifelerRegelAppliesToNumber(number);
    } else {
      // Anything larger than 4 digits: recursively check first n-3 digits
      number = number / 1000;
      return eifelerRegelAppliesToNumber(number);
    }
  }

  var lb = moment.defineLocale('lb', {
    months: 'Januar_Februar_M??erz_Abr??ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split(
    '_'),

    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'Sonndeg_M??indeg_D??nschdeg_M??ttwoch_Donneschdeg_Freideg_Samschdeg'.split(
    '_'),

    weekdaysShort: 'So._M??._D??._M??._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_M??_D??_M??_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm [Auer]',
      LTS: 'H:mm:ss [Auer]',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm [Auer]',
      LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]' },

    calendar: {
      sameDay: '[Haut um] LT',
      sameElse: 'L',
      nextDay: '[Muer um] LT',
      nextWeek: 'dddd [um] LT',
      lastDay: '[G??schter um] LT',
      lastWeek: function lastWeek() {
        // Different date string for 'D??nschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
        switch (this.day()) {
          case 2:
          case 4:
            return '[Leschten] dddd [um] LT';
          default:
            return '[Leschte] dddd [um] LT';}

      } },

    relativeTime: {
      future: processFutureTime,
      past: processPastTime,
      s: 'e puer Sekonnen',
      ss: '%d Sekonnen',
      m: processRelativeTime,
      mm: '%d Minutten',
      h: processRelativeTime,
      hh: '%d Stonnen',
      d: processRelativeTime,
      dd: '%d Deeg',
      M: processRelativeTime,
      MM: '%d M??int',
      y: processRelativeTime,
      yy: '%d Joer' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return lb;

});

/***/ }),
/* 87 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/lo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lao [lo]
//! author : Ryan Hart : https://github.com/ryanhart2

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var lo = moment.defineLocale('lo', {
    months: '??????????????????_???????????????_????????????_????????????_?????????????????????_??????????????????_?????????????????????_???????????????_???????????????_????????????_???????????????_???????????????'.split(
    '_'),

    monthsShort: '??????????????????_???????????????_????????????_????????????_?????????????????????_??????????????????_?????????????????????_???????????????_???????????????_????????????_???????????????_???????????????'.split(
    '_'),

    weekdays: '???????????????_?????????_??????????????????_?????????_???????????????_?????????_????????????'.split('_'),
    weekdaysShort: '?????????_?????????_??????????????????_?????????_???????????????_?????????_????????????'.split('_'),
    weekdaysMin: '???_???_??????_???_??????_??????_???'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: '?????????dddd D MMMM YYYY HH:mm' },

    meridiemParse: /????????????????????????|??????????????????/,
    isPM: function isPM(input) {
      return input === '??????????????????';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '????????????????????????';
      } else {
        return '??????????????????';
      }
    },
    calendar: {
      sameDay: '[??????????????????????????????] LT',
      nextDay: '[?????????????????????????????????] LT',
      nextWeek: '[?????????]dddd[?????????????????????] LT',
      lastDay: '[???????????????????????????????????????] LT',
      lastWeek: '[?????????]dddd[?????????????????????????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '????????? %s',
      past: '%s??????????????????',
      s: '????????????????????????????????????????????????',
      ss: '%d ??????????????????',
      m: '1 ????????????',
      mm: '%d ????????????',
      h: '1 ?????????????????????',
      hh: '%d ?????????????????????',
      d: '1 ?????????',
      dd: '%d ?????????',
      M: '1 ???????????????',
      MM: '%d ???????????????',
      y: '1 ??????',
      yy: '%d ??????' },

    dayOfMonthOrdinalParse: /(?????????)\d{1,2}/,
    ordinal: function ordinal(number) {
      return '?????????' + number;
    } });


  return lo;

});

/***/ }),
/* 88 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/lt.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Mindaugas Moz??ras : https://github.com/mmozuras

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var units = {
    ss: 'sekund??_sekund??i??_sekundes',
    m: 'minut??_minut??s_minut??',
    mm: 'minut??s_minu??i??_minutes',
    h: 'valanda_valandos_valand??',
    hh: 'valandos_valand??_valandas',
    d: 'diena_dienos_dien??',
    dd: 'dienos_dien??_dienas',
    M: 'm??nuo_m??nesio_m??nes??',
    MM: 'm??nesiai_m??nesi??_m??nesius',
    y: 'metai_met??_metus',
    yy: 'metai_met??_metus' };

  function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
      return 'kelios sekund??s';
    } else {
      return isFuture ? 'keli?? sekund??i??' : 'kelias sekundes';
    }
  }
  function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ?
    forms(key)[0] :
    isFuture ?
    forms(key)[1] :
    forms(key)[2];
  }
  function special(number) {
    return number % 10 === 0 || number > 10 && number < 20;
  }
  function forms(key) {
    return units[key].split('_');
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
      return (
        result + translateSingular(number, withoutSuffix, key[0], isFuture));

    } else if (withoutSuffix) {
      return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
      if (isFuture) {
        return result + forms(key)[1];
      } else {
        return result + (special(number) ? forms(key)[1] : forms(key)[2]);
      }
    }
  }
  var lt = moment.defineLocale('lt', {
    months: {
      format: 'sausio_vasario_kovo_baland??io_gegu????s_bir??elio_liepos_rugpj????io_rugs??jo_spalio_lapkri??io_gruod??io'.split(
      '_'),

      standalone: 'sausis_vasaris_kovas_balandis_gegu????_bir??elis_liepa_rugpj??tis_rugs??jis_spalis_lapkritis_gruodis'.split(
      '_'),

      isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ },

    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
      format: 'sekmadien??_pirmadien??_antradien??_tre??iadien??_ketvirtadien??_penktadien??_??e??tadien??'.split(
      '_'),

      standalone: 'sekmadienis_pirmadienis_antradienis_tre??iadienis_ketvirtadienis_penktadienis_??e??tadienis'.split(
      '_'),

      isFormat: /dddd HH:mm/ },

    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_??e??'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY [m.] MMMM D [d.]',
      LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
      l: 'YYYY-MM-DD',
      ll: 'YYYY [m.] MMMM D [d.]',
      lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]' },

    calendar: {
      sameDay: '[??iandien] LT',
      nextDay: '[Rytoj] LT',
      nextWeek: 'dddd LT',
      lastDay: '[Vakar] LT',
      lastWeek: '[Pra??jus??] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'po %s',
      past: 'prie?? %s',
      s: translateSeconds,
      ss: translate,
      m: translateSingular,
      mm: translate,
      h: translateSingular,
      hh: translate,
      d: translateSingular,
      dd: translate,
      M: translateSingular,
      MM: translate,
      y: translateSingular,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: function ordinal(number) {
      return number + '-oji';
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return lt;

});

/***/ }),
/* 89 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/lv.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : J??nis Elmeris : https://github.com/JanisE

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var units = {
    ss: 'sekundes_sekund??m_sekunde_sekundes'.split('_'),
    m: 'min??tes_min??t??m_min??te_min??tes'.split('_'),
    mm: 'min??tes_min??t??m_min??te_min??tes'.split('_'),
    h: 'stundas_stund??m_stunda_stundas'.split('_'),
    hh: 'stundas_stund??m_stunda_stundas'.split('_'),
    d: 'dienas_dien??m_diena_dienas'.split('_'),
    dd: 'dienas_dien??m_diena_dienas'.split('_'),
    M: 'm??ne??a_m??ne??iem_m??nesis_m??ne??i'.split('_'),
    MM: 'm??ne??a_m??ne??iem_m??nesis_m??ne??i'.split('_'),
    y: 'gada_gadiem_gads_gadi'.split('_'),
    yy: 'gada_gadiem_gads_gadi'.split('_') };

  /**
                                               * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
                                               */
  function format(forms, number, withoutSuffix) {
    if (withoutSuffix) {
      // E.g. "21 min??te", "3 min??tes".
      return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
    } else {
      // E.g. "21 min??tes" as in "p??c 21 min??tes".
      // E.g. "3 min??t??m" as in "p??c 3 min??t??m".
      return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
    }
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    return number + ' ' + format(units[key], number, withoutSuffix);
  }
  function relativeTimeWithSingular(number, withoutSuffix, key) {
    return format(units[key], number, withoutSuffix);
  }
  function relativeSeconds(number, withoutSuffix) {
    return withoutSuffix ? 'da??as sekundes' : 'da????m sekund??m';
  }

  var lv = moment.defineLocale('lv', {
    months: 'janv??ris_febru??ris_marts_apr??lis_maijs_j??nijs_j??lijs_augusts_septembris_oktobris_novembris_decembris'.split(
    '_'),

    monthsShort: 'jan_feb_mar_apr_mai_j??n_j??l_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'sv??tdiena_pirmdiena_otrdiena_tre??diena_ceturtdiena_piektdiena_sestdiena'.split(
    '_'),

    weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY.',
      LL: 'YYYY. [gada] D. MMMM',
      LLL: 'YYYY. [gada] D. MMMM, HH:mm',
      LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm' },

    calendar: {
      sameDay: '[??odien pulksten] LT',
      nextDay: '[R??t pulksten] LT',
      nextWeek: 'dddd [pulksten] LT',
      lastDay: '[Vakar pulksten] LT',
      lastWeek: '[Pag??ju????] dddd [pulksten] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'p??c %s',
      past: 'pirms %s',
      s: relativeSeconds,
      ss: relativeTimeWithPlural,
      m: relativeTimeWithSingular,
      mm: relativeTimeWithPlural,
      h: relativeTimeWithSingular,
      hh: relativeTimeWithPlural,
      d: relativeTimeWithSingular,
      dd: relativeTimeWithPlural,
      M: relativeTimeWithSingular,
      MM: relativeTimeWithPlural,
      y: relativeTimeWithSingular,
      yy: relativeTimeWithPlural },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return lv;

});

/***/ }),
/* 90 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/me.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Montenegrin [me]
//! author : Miodrag Nika?? <miodrag@restartit.me> : https://github.com/miodragnikac

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var translator = {
    words: {
      //Different grammatical cases
      ss: ['sekund', 'sekunda', 'sekundi'],
      m: ['jedan minut', 'jednog minuta'],
      mm: ['minut', 'minuta', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      dd: ['dan', 'dana', 'dana'],
      MM: ['mjesec', 'mjeseca', 'mjeseci'],
      yy: ['godina', 'godine', 'godina'] },

    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      return number === 1 ?
      wordKey[0] :
      number >= 2 && number <= 4 ?
      wordKey[1] :
      wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return (
          number +
          ' ' +
          translator.correctGrammaticalCase(number, wordKey));

      }
    } };


  var me = moment.defineLocale('me', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
    '_'),

    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota'.split(
    '_'),

    weekdaysShort: 'ned._pon._uto._sri._??et._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_??e_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sjutra u] LT',

      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[ju??e u] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = [
        '[pro??le] [nedjelje] [u] LT',
        '[pro??log] [ponedjeljka] [u] LT',
        '[pro??log] [utorka] [u] LT',
        '[pro??le] [srijede] [u] LT',
        '[pro??log] [??etvrtka] [u] LT',
        '[pro??log] [petka] [u] LT',
        '[pro??le] [subote] [u] LT'];

        return lastWeekDays[this.day()];
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: 'dan',
      dd: translator.translate,
      M: 'mjesec',
      MM: translator.translate,
      y: 'godinu',
      yy: translator.translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return me;

});

/***/ }),
/* 91 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/mi.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maori [mi]
//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var mi = moment.defineLocale('mi', {
    months: 'Kohi-t??te_Hui-tanguru_Pout??-te-rangi_Paenga-wh??wh??_Haratua_Pipiri_H??ngoingoi_Here-turi-k??k??_Mahuru_Whiringa-??-nuku_Whiringa-??-rangi_Hakihea'.split(
    '_'),

    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_H??ngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split(
    '_'),

    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: 'R??tapu_Mane_T??rei_Wenerei_T??ite_Paraire_H??tarei'.split('_'),
    weekdaysShort: 'Ta_Ma_T??_We_T??i_Pa_H??'.split('_'),
    weekdaysMin: 'Ta_Ma_T??_We_T??i_Pa_H??'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [i] HH:mm',
      LLLL: 'dddd, D MMMM YYYY [i] HH:mm' },

    calendar: {
      sameDay: '[i teie mahana, i] LT',
      nextDay: '[apopo i] LT',
      nextWeek: 'dddd [i] LT',
      lastDay: '[inanahi i] LT',
      lastWeek: 'dddd [whakamutunga i] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'i roto i %s',
      past: '%s i mua',
      s: 'te h??kona ruarua',
      ss: '%d h??kona',
      m: 'he meneti',
      mm: '%d meneti',
      h: 'te haora',
      hh: '%d haora',
      d: 'he ra',
      dd: '%d ra',
      M: 'he marama',
      MM: '%d marama',
      y: 'he tau',
      yy: '%d tau' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return mi;

});

/***/ }),
/* 92 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/mk.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0
//! author : Sashko Todorov : https://github.com/bkyceh

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var mk = moment.defineLocale('mk', {
    months: '??????????????_????????????????_????????_??????????_??????_????????_????????_????????????_??????????????????_????????????????_??????????????_????????????????'.split(
    '_'),

    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '????????????_????????????????????_??????????????_??????????_????????????????_??????????_????????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '??e_??o_????_????_????_????_??a'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[?????????? ????] LT',
      nextDay: '[???????? ????] LT',
      nextWeek: '[????] dddd [????] LT',
      lastDay: '[?????????? ????] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[????????????????????] dddd [????] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[????????????????????] dddd [????] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '???????? %s',
      s: '?????????????? ??????????????',
      ss: '%d ??????????????',
      m: '???????? ????????????',
      mm: '%d ????????????',
      h: '???????? ??????',
      hh: '%d ????????',
      d: '???????? ??????',
      dd: '%d ????????',
      M: '???????? ??????????',
      MM: '%d ????????????',
      y: '???????? ????????????',
      yy: '%d ????????????' },

    dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????|????|????)/,
    ordinal: function ordinal(number) {
      var lastDigit = number % 10,
      last2Digits = number % 100;
      if (number === 0) {
        return number + '-????';
      } else if (last2Digits === 0) {
        return number + '-????';
      } else if (last2Digits > 10 && last2Digits < 20) {
        return number + '-????';
      } else if (lastDigit === 1) {
        return number + '-????';
      } else if (lastDigit === 2) {
        return number + '-????';
      } else if (lastDigit === 7 || lastDigit === 8) {
        return number + '-????';
      } else {
        return number + '-????';
      }
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return mk;

});

/***/ }),
/* 93 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ml.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malayalam [ml]
//! author : Floyd Pink : https://github.com/floydpink

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ml = moment.defineLocale('ml', {
    months: '??????????????????_???????????????????????????_?????????????????????_??????????????????_????????????_?????????_????????????_????????????????????????_??????????????????????????????_?????????????????????_???????????????_??????????????????'.split(
    '_'),

    monthsShort: '?????????._??????????????????._?????????._???????????????._????????????_?????????_????????????._??????._?????????????????????._???????????????._?????????._????????????.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '????????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????_?????????????????????????????????_????????????????????????'.split(
    '_'),

    weekdaysShort: '????????????_??????????????????_???????????????_????????????_??????????????????_??????????????????_?????????'.split('_'),
    weekdaysMin: '??????_??????_??????_??????_????????????_??????_???'.split('_'),
    longDateFormat: {
      LT: 'A h:mm -??????',
      LTS: 'A h:mm:ss -??????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm -??????',
      LLLL: 'dddd, D MMMM YYYY, A h:mm -??????' },

    calendar: {
      sameDay: '[???????????????] LT',
      nextDay: '[????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[??????????????????] LT',
      lastWeek: '[??????????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ?????????????????????',
      past: '%s ???????????????',
      s: '????????? ???????????????????????????',
      ss: '%d ????????????????????????',
      m: '????????? ????????????????????????',
      mm: '%d ????????????????????????',
      h: '????????? ????????????????????????',
      hh: '%d ????????????????????????',
      d: '????????? ???????????????',
      dd: '%d ???????????????',
      M: '????????? ????????????',
      MM: '%d ????????????',
      y: '????????? ????????????',
      yy: '%d ????????????' },

    meridiemParse: /??????????????????|??????????????????|???????????? ?????????????????????|??????????????????????????????|??????????????????/i,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (
      meridiem === '??????????????????' && hour >= 4 ||
      meridiem === '???????????? ?????????????????????' ||
      meridiem === '??????????????????????????????')
      {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '??????????????????';
      } else if (hour < 12) {
        return '??????????????????';
      } else if (hour < 17) {
        return '???????????? ?????????????????????';
      } else if (hour < 20) {
        return '??????????????????????????????';
      } else {
        return '??????????????????';
      }
    } });


  return ml;

});

/***/ }),
/* 94 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/mn.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function translate(number, withoutSuffix, key, isFuture) {
    switch (key) {
      case 's':
        return withoutSuffix ? '???????????? ????????????' : '???????????? ????????????????';
      case 'ss':
        return number + (withoutSuffix ? ' ????????????' : ' ????????????????');
      case 'm':
      case 'mm':
        return number + (withoutSuffix ? ' ??????????' : ' ??????????????');
      case 'h':
      case 'hh':
        return number + (withoutSuffix ? ' ??????' : ' ????????????');
      case 'd':
      case 'dd':
        return number + (withoutSuffix ? ' ????????' : ' ????????????');
      case 'M':
      case 'MM':
        return number + (withoutSuffix ? ' ??????' : ' ??????????');
      case 'y':
      case 'yy':
        return number + (withoutSuffix ? ' ??????' : ' ????????????');
      default:
        return number;}

  }

  var mn = moment.defineLocale('mn', {
    months: '?????????????????? ??????_???????????????????? ??????_?????????????????????? ??????_?????????????????????? ??????_?????????????????? ??????_?????????????????????? ??????_?????????????????? ??????_???????????????????? ??????_???????????????? ??????_???????????????????? ??????_?????????? ?????????????????? ??????_?????????? ???????????????????? ??????'.split(
    '_'),

    monthsShort: '1 ??????_2 ??????_3 ??????_4 ??????_5 ??????_6 ??????_7 ??????_8 ??????_9 ??????_10 ??????_11 ??????_12 ??????'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '??????_??????????_????????????_????????????_??????????_????????????_??????????'.split('_'),
    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY ?????? MMMM???? D',
      LLL: 'YYYY ?????? MMMM???? D HH:mm',
      LLLL: 'dddd, YYYY ?????? MMMM???? D HH:mm' },

    meridiemParse: /????|????/i,
    isPM: function isPM(input) {
      return input === '????';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '????';
      } else {
        return '????';
      }
    },
    calendar: {
      sameDay: '[??????????????] LT',
      nextDay: '[??????????????] LT',
      nextWeek: '[????????] dddd LT',
      lastDay: '[??????????????] LT',
      lastWeek: '[????????????????] dddd LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ??????????',
      past: '%s ????????',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2} ????????/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + ' ????????';
        default:
          return number;}

    } });


  return mn;

});

/***/ }),
/* 95 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/mr.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Marathi [mr]
//! author : Harshad Kale : https://github.com/kalehv
//! author : Vivek Athalye : https://github.com/vnathalye

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  function relativeTimeMr(number, withoutSuffix, string, isFuture) {
    var output = '';
    if (withoutSuffix) {
      switch (string) {
        case 's':
          output = '???????????? ???????????????';
          break;
        case 'ss':
          output = '%d ???????????????';
          break;
        case 'm':
          output = '?????? ???????????????';
          break;
        case 'mm':
          output = '%d ??????????????????';
          break;
        case 'h':
          output = '?????? ?????????';
          break;
        case 'hh':
          output = '%d ?????????';
          break;
        case 'd':
          output = '?????? ????????????';
          break;
        case 'dd':
          output = '%d ????????????';
          break;
        case 'M':
          output = '?????? ???????????????';
          break;
        case 'MM':
          output = '%d ???????????????';
          break;
        case 'y':
          output = '?????? ????????????';
          break;
        case 'yy':
          output = '%d ???????????????';
          break;}

    } else {
      switch (string) {
        case 's':
          output = '???????????? ?????????????????????';
          break;
        case 'ss':
          output = '%d ?????????????????????';
          break;
        case 'm':
          output = '????????? ??????????????????';
          break;
        case 'mm':
          output = '%d ?????????????????????';
          break;
        case 'h':
          output = '????????? ????????????';
          break;
        case 'hh':
          output = '%d ???????????????';
          break;
        case 'd':
          output = '????????? ???????????????';
          break;
        case 'dd':
          output = '%d ??????????????????';
          break;
        case 'M':
          output = '????????? ?????????????????????';
          break;
        case 'MM':
          output = '%d ????????????????????????';
          break;
        case 'y':
          output = '????????? ???????????????';
          break;
        case 'yy':
          output = '%d ??????????????????';
          break;}

    }
    return output.replace(/%d/i, number);
  }

  var mr = moment.defineLocale('mr', {
    months: '????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_????????????_???????????????_????????????????????????_?????????????????????_???????????????????????????_?????????????????????'.split(
    '_'),

    monthsShort: '????????????._??????????????????._???????????????._???????????????._??????._?????????._????????????._??????._??????????????????._???????????????._?????????????????????._???????????????.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????'.split('_'),
    weekdaysShort: '?????????_?????????_????????????_?????????_????????????_???????????????_?????????'.split('_'),
    weekdaysMin: '???_??????_??????_??????_??????_??????_???'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ???????????????',
      LTS: 'A h:mm:ss ???????????????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ???????????????',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ???????????????' },

    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[???????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[?????????] LT',
      lastWeek: '[???????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s???????????????',
      past: '%s??????????????????',
      s: relativeTimeMr,
      ss: relativeTimeMr,
      m: relativeTimeMr,
      mm: relativeTimeMr,
      h: relativeTimeMr,
      hh: relativeTimeMr,
      d: relativeTimeMr,
      dd: relativeTimeMr,
      M: relativeTimeMr,
      MM: relativeTimeMr,
      y: relativeTimeMr,
      yy: relativeTimeMr },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /???????????????|???????????????|??????????????????|????????????????????????|??????????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '???????????????' || meridiem === '???????????????') {
        return hour;
      } else if (
      meridiem === '??????????????????' ||
      meridiem === '????????????????????????' ||
      meridiem === '??????????????????')
      {
        return hour >= 12 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour >= 0 && hour < 6) {
        return '???????????????';
      } else if (hour < 12) {
        return '???????????????';
      } else if (hour < 17) {
        return '??????????????????';
      } else if (hour < 20) {
        return '????????????????????????';
      } else {
        return '??????????????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return mr;

});

/***/ }),
/* 96 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ms.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ms = moment.defineLocale('ms', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return ms;

});

/***/ }),
/* 97 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ms-my.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms-my]
//! note : DEPRECATED, the correct one is [ms]
//! author : Weldan Jamili : https://github.com/weldan

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var msMy = moment.defineLocale('ms-my', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm' },

    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return msMy;

});

/***/ }),
/* 98 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/mt.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maltese (Malta) [mt]
//! author : Alessandro Maruccia : https://github.com/alesma

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var mt = moment.defineLocale('mt', {
    months: 'Jannar_Frar_Marzu_April_Mejju_??unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di??embru'.split(
    '_'),

    monthsShort: 'Jan_Fra_Mar_Apr_Mej_??un_Lul_Aww_Set_Ott_Nov_Di??'.split('_'),
    weekdays: 'Il-??add_It-Tnejn_It-Tlieta_L-Erbg??a_Il-??amis_Il-??img??a_Is-Sibt'.split(
    '_'),

    weekdaysShort: '??ad_Tne_Tli_Erb_??am_??im_Sib'.split('_'),
    weekdaysMin: '??a_Tn_Tl_Er_??a_??i_Si'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Illum fil-]LT',
      nextDay: '[G??ada fil-]LT',
      nextWeek: 'dddd [fil-]LT',
      lastDay: '[Il-biera?? fil-]LT',
      lastWeek: 'dddd [li g??adda] [fil-]LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'f??? %s',
      past: '%s ilu',
      s: 'ftit sekondi',
      ss: '%d sekondi',
      m: 'minuta',
      mm: '%d minuti',
      h: 'sieg??a',
      hh: '%d sieg??at',
      d: '??urnata',
      dd: '%d ??ranet',
      M: 'xahar',
      MM: '%d xhur',
      y: 'sena',
      yy: '%d sni' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return mt;

});

/***/ }),
/* 99 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/my.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Burmese [my]
//! author : Squar team, mysquar.com
//! author : David Rossellat : https://github.com/gholadr
//! author : Tin Aung Lin : https://github.com/thanyawzinmin

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var my = moment.defineLocale('my', {
    months: '????????????????????????_??????????????????????????????_?????????_????????????_??????_????????????_?????????????????????_??????????????????_????????????????????????_??????????????????????????????_????????????????????????_?????????????????????'.split(
    '_'),

    monthsShort: '?????????_??????_?????????_?????????_??????_????????????_???????????????_??????_?????????_???????????????_?????????_??????'.split('_'),
    weekdays: '???????????????????????????_?????????????????????_??????????????????_????????????????????????_????????????????????????_??????????????????_?????????'.split(
    '_'),

    weekdaysShort: '?????????_??????_??????_?????????_?????????_?????????_??????'.split('_'),
    weekdaysMin: '?????????_??????_??????_?????????_?????????_?????????_??????'.split('_'),

    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[?????????.] LT [?????????]',
      nextDay: '[????????????????????????] LT [?????????]',
      nextWeek: 'dddd LT [?????????]',
      lastDay: '[?????????.???] LT [?????????]',
      lastWeek: '[??????????????????????????????] dddd LT [?????????]',
      sameElse: 'L' },

    relativeTime: {
      future: '?????????????????? %s ?????????',
      past: '?????????????????????????????? %s ???',
      s: '??????????????????.????????????????????????',
      ss: '%d ?????????????????????',
      m: '????????????????????????',
      mm: '%d ???????????????',
      h: '?????????????????????',
      hh: '%d ????????????',
      d: '??????????????????',
      dd: '%d ?????????',
      M: '????????????',
      MM: '%d ???',
      y: '?????????????????????',
      yy: '%d ????????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return my;

});

/***/ }),
/* 100 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/nb.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Norwegian Bokm??l [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
//!           Stephen Ramthun : https://github.com/stephenramthun

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var nb = moment.defineLocale('nb', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
    '_'),

    monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 's??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag'.split('_'),
    weekdaysShort: 's??._ma._ti._on._to._fr._l??.'.split('_'),
    weekdaysMin: 's??_ma_ti_on_to_fr_l??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm' },

    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[i g??r kl.] LT',
      lastWeek: '[forrige] dddd [kl.] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'noen sekunder',
      ss: '%d sekunder',
      m: 'ett minutt',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dager',
      w: 'en uke',
      ww: '%d uker',
      M: 'en m??ned',
      MM: '%d m??neder',
      y: 'ett ??r',
      yy: '%d ??r' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nb;

});

/***/ }),
/* 101 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ne.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nepalese [ne]
//! author : suvash : https://github.com/suvash

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var ne = moment.defineLocale('ne', {
    months: '???????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_????????????????????????_????????????????????????'.split(
    '_'),

    monthsShort: '??????._??????????????????._???????????????_???????????????._??????_?????????_???????????????._??????._???????????????._???????????????._????????????._????????????.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????'.split(
    '_'),

    weekdaysShort: '?????????._?????????._???????????????._?????????._????????????._???????????????._?????????.'.split('_'),
    weekdaysMin: '???._??????._??????._??????._??????._??????._???.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'A?????? h:mm ?????????',
      LTS: 'A?????? h:mm:ss ?????????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A?????? h:mm ?????????',
      LLLL: 'dddd, D MMMM YYYY, A?????? h:mm ?????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /????????????|???????????????|??????????????????|????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '????????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '???????????????') {
        return hour;
      } else if (meridiem === '??????????????????') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 3) {
        return '????????????';
      } else if (hour < 12) {
        return '???????????????';
      } else if (hour < 16) {
        return '??????????????????';
      } else if (hour < 20) {
        return '????????????';
      } else {
        return '????????????';
      }
    },
    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[????????????] LT',
      nextWeek: '[???????????????] dddd[,] LT',
      lastDay: '[????????????] LT',
      lastWeek: '[????????????] dddd[,] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s??????',
      past: '%s ???????????????',
      s: '???????????? ????????????',
      ss: '%d ?????????????????????',
      m: '?????? ???????????????',
      mm: '%d ???????????????',
      h: '?????? ???????????????',
      hh: '%d ???????????????',
      d: '?????? ?????????',
      dd: '%d ?????????',
      M: '?????? ???????????????',
      MM: '%d ???????????????',
      y: '?????? ????????????',
      yy: '%d ????????????' },

    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return ne;

});

/***/ }),
/* 102 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/nl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris R??ling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
  '_'),

  monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split(
  '_'),

  monthsParse = [
  /^jan/i,
  /^feb/i,
  /^maart|mrt.?$/i,
  /^apr/i,
  /^mei$/i,
  /^jun[i.]?$/i,
  /^jul[i.]?$/i,
  /^aug/i,
  /^sep/i,
  /^okt/i,
  /^nov/i,
  /^dec/i],

  monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

  var nl = moment.defineLocale('nl', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
    '_'),

    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
    '_'),

    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: '????n minuut',
      mm: '%d minuten',
      h: '????n uur',
      hh: '%d uur',
      d: '????n dag',
      dd: '%d dagen',
      w: '????n week',
      ww: '%d weken',
      M: '????n maand',
      MM: '%d maanden',
      y: '????n jaar',
      yy: '%d jaar' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return (
        number + (
        number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'));

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nl;

});

/***/ }),
/* 103 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/nl-be.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris R??ling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
  '_'),

  monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split(
  '_'),

  monthsParse = [
  /^jan/i,
  /^feb/i,
  /^maart|mrt.?$/i,
  /^apr/i,
  /^mei$/i,
  /^jun[i.]?$/i,
  /^jul[i.]?$/i,
  /^aug/i,
  /^sep/i,
  /^okt/i,
  /^nov/i,
  /^dec/i],

  monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

  var nlBe = moment.defineLocale('nl-be', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
    '_'),

    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
    '_'),

    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: '????n minuut',
      mm: '%d minuten',
      h: '????n uur',
      hh: '%d uur',
      d: '????n dag',
      dd: '%d dagen',
      M: '????n maand',
      MM: '%d maanden',
      y: '????n jaar',
      yy: '%d jaar' },

    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return (
        number + (
        number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'));

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nlBe;

});

/***/ }),
/* 104 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/nn.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! authors : https://github.com/mechuwind
//!           Stephen Ramthun : https://github.com/stephenramthun

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var nn = moment.defineLocale('nn', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
    '_'),

    monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'sundag_m??ndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort: 'su._m??._ty._on._to._fr._lau.'.split('_'),
    weekdaysMin: 'su_m??_ty_on_to_fr_la'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm' },

    calendar: {
      sameDay: '[I dag klokka] LT',
      nextDay: '[I morgon klokka] LT',
      nextWeek: 'dddd [klokka] LT',
      lastDay: '[I g??r klokka] LT',
      lastWeek: '[F??reg??ande] dddd [klokka] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: '%s sidan',
      s: 'nokre sekund',
      ss: '%d sekund',
      m: 'eit minutt',
      mm: '%d minutt',
      h: 'ein time',
      hh: '%d timar',
      d: 'ein dag',
      dd: '%d dagar',
      w: 'ei veke',
      ww: '%d veker',
      M: 'ein m??nad',
      MM: '%d m??nader',
      y: 'eit ??r',
      yy: '%d ??r' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return nn;

});

/***/ }),
/* 105 */
/*!****************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/oc-lnc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Occitan, lengadocian dialecte [oc-lnc]
//! author : Quentin PAG??S : https://github.com/Quenty31

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ocLnc = moment.defineLocale('oc-lnc', {
    months: {
      standalone: 'geni??r_febri??r_mar??_abril_mai_junh_julhet_agost_setembre_oct??bre_novembre_decembre'.split(
      '_'),

      format: "de geni??r_de febri??r_de mar??_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'oct??bre_de novembre_de decembre".split(
      '_'),

      isFormat: /D[oD]?(\s)+MMMM/ },

    monthsShort: 'gen._febr._mar??_abr._mai_junh_julh._ago._set._oct._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'dimenge_diluns_dimars_dim??cres_dij??us_divendres_dissabte'.split(
    '_'),

    weekdaysShort: 'dg._dl._dm._dc._dj._dv._ds.'.split('_'),
    weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [de] YYYY',
      ll: 'D MMM YYYY',
      LLL: 'D MMMM [de] YYYY [a] H:mm',
      lll: 'D MMM YYYY, H:mm',
      LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
      llll: 'ddd D MMM YYYY, H:mm' },

    calendar: {
      sameDay: '[u??i a] LT',
      nextDay: '[deman a] LT',
      nextWeek: 'dddd [a] LT',
      lastDay: '[i??r a] LT',
      lastWeek: 'dddd [passat a] LT',
      sameElse: 'L' },

    relativeTime: {
      future: "d'aqu?? %s",
      past: 'fa %s',
      s: 'unas segondas',
      ss: '%d segondas',
      m: 'una minuta',
      mm: '%d minutas',
      h: 'una ora',
      hh: '%d oras',
      d: 'un jorn',
      dd: '%d jorns',
      M: 'un mes',
      MM: '%d meses',
      y: 'un an',
      yy: '%d ans' },

    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|??|a)/,
    ordinal: function ordinal(number, period) {
      var output =
      number === 1 ?
      'r' :
      number === 2 ?
      'n' :
      number === 3 ?
      'r' :
      number === 4 ?
      't' :
      '??';
      if (period === 'w' || period === 'W') {
        output = 'a';
      }
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 } });



  return ocLnc;

});

/***/ }),
/* 106 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/pa-in.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var paIn = moment.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
    months: '???????????????_??????????????????_????????????_??????????????????_??????_?????????_???????????????_????????????_???????????????_??????????????????_???????????????_???????????????'.split(
    '_'),

    monthsShort: '???????????????_??????????????????_????????????_??????????????????_??????_?????????_???????????????_????????????_???????????????_??????????????????_???????????????_???????????????'.split(
    '_'),

    weekdays: '???????????????_??????????????????_?????????????????????_??????????????????_??????????????????_???????????????????????????_???????????????????????????'.split(
    '_'),

    weekdaysShort: '??????_?????????_????????????_?????????_?????????_???????????????_????????????'.split('_'),
    weekdaysMin: '??????_?????????_????????????_?????????_?????????_???????????????_????????????'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ?????????',
      LTS: 'A h:mm:ss ?????????',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ?????????',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ?????????' },

    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[??????] LT',
      nextWeek: '[????????????] dddd, LT',
      lastDay: '[??????] LT',
      lastWeek: '[???????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ????????????',
      past: '%s ???????????????',
      s: '????????? ???????????????',
      ss: '%d ???????????????',
      m: '?????? ????????????',
      mm: '%d ????????????',
      h: '????????? ????????????',
      hh: '%d ????????????',
      d: '????????? ?????????',
      dd: '%d ?????????',
      M: '????????? ???????????????',
      MM: '%d ???????????????',
      y: '????????? ?????????',
      yy: '%d ?????????' },

    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /?????????|????????????|??????????????????|????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '?????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour;
      } else if (meridiem === '??????????????????') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '?????????';
      } else if (hour < 10) {
        return '????????????';
      } else if (hour < 17) {
        return '??????????????????';
      } else if (hour < 20) {
        return '????????????';
      } else {
        return '?????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return paIn;

});

/***/ }),
/* 107 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/pl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var monthsNominative = 'stycze??_luty_marzec_kwiecie??_maj_czerwiec_lipiec_sierpie??_wrzesie??_pa??dziernik_listopad_grudzie??'.split(
  '_'),

  monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze??nia_pa??dziernika_listopada_grudnia'.split(
  '_'),

  monthsParse = [
  /^sty/i,
  /^lut/i,
  /^mar/i,
  /^kwi/i,
  /^maj/i,
  /^cze/i,
  /^lip/i,
  /^sie/i,
  /^wrz/i,
  /^pa??/i,
  /^lis/i,
  /^gru/i];

  function plural(n) {
    return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
  }
  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        return result + (plural(number) ? 'sekundy' : 'sekund');
      case 'm':
        return withoutSuffix ? 'minuta' : 'minut??';
      case 'mm':
        return result + (plural(number) ? 'minuty' : 'minut');
      case 'h':
        return withoutSuffix ? 'godzina' : 'godzin??';
      case 'hh':
        return result + (plural(number) ? 'godziny' : 'godzin');
      case 'ww':
        return result + (plural(number) ? 'tygodnie' : 'tygodni');
      case 'MM':
        return result + (plural(number) ? 'miesi??ce' : 'miesi??cy');
      case 'yy':
        return result + (plural(number) ? 'lata' : 'lat');}

  }

  var pl = moment.defineLocale('pl', {
    months: function months(momentToFormat, format) {
      if (!momentToFormat) {
        return monthsNominative;
      } else if (/D MMMM/.test(format)) {
        return monthsSubjective[momentToFormat.month()];
      } else {
        return monthsNominative[momentToFormat.month()];
      }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa??_lis_gru'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'niedziela_poniedzia??ek_wtorek_??roda_czwartek_pi??tek_sobota'.split(
    '_'),

    weekdaysShort: 'ndz_pon_wt_??r_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_??r_Cz_Pt_So'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Dzi?? o] LT',
      nextDay: '[Jutro o] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[W niedziel?? o] LT';

          case 2:
            return '[We wtorek o] LT';

          case 3:
            return '[W ??rod?? o] LT';

          case 6:
            return '[W sobot?? o] LT';

          default:
            return '[W] dddd [o] LT';}

      },
      lastDay: '[Wczoraj o] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[W zesz???? niedziel?? o] LT';
          case 3:
            return '[W zesz???? ??rod?? o] LT';
          case 6:
            return '[W zesz???? sobot?? o] LT';
          default:
            return '[W zesz??y] dddd [o] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: '%s temu',
      s: 'kilka sekund',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: '1 dzie??',
      dd: '%d dni',
      w: 'tydzie??',
      ww: translate,
      M: 'miesi??c',
      MM: translate,
      y: 'rok',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return pl;

});

/***/ }),
/* 108 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/pt.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese [pt]
//! author : Jefferson : https://github.com/jalex79

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var pt = moment.defineLocale('pt', {
    months: 'janeiro_fevereiro_mar??o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
    '_'),

    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Ter??a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S??bado'.split(
    '_'),

    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_S??b'.split('_'),
    weekdaysMin: 'Do_2??_3??_4??_5??_6??_S??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm' },

    calendar: {
      sameDay: '[Hoje ??s] LT',
      nextDay: '[Amanh?? ??s] LT',
      nextWeek: 'dddd [??s] LT',
      lastDay: '[Ontem ??s] LT',
      lastWeek: function lastWeek() {
        return this.day() === 0 || this.day() === 6 ?
        '[??ltimo] dddd [??s] LT' // Saturday + Sunday
        : '[??ltima] dddd [??s] LT'; // Monday - Friday
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'em %s',
      past: 'h?? %s',
      s: 'segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      w: 'uma semana',
      ww: '%d semanas',
      M: 'um m??s',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return pt;

});

/***/ }),
/* 109 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/pt-br.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ptBr = moment.defineLocale('pt-br', {
    months: 'janeiro_fevereiro_mar??o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
    '_'),

    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'domingo_segunda-feira_ter??a-feira_quarta-feira_quinta-feira_sexta-feira_s??bado'.split(
    '_'),

    weekdaysShort: 'dom_seg_ter_qua_qui_sex_s??b'.split('_'),
    weekdaysMin: 'do_2??_3??_4??_5??_6??_s??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [??s] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [??s] HH:mm' },

    calendar: {
      sameDay: '[Hoje ??s] LT',
      nextDay: '[Amanh?? ??s] LT',
      nextWeek: 'dddd [??s] LT',
      lastDay: '[Ontem ??s] LT',
      lastWeek: function lastWeek() {
        return this.day() === 0 || this.day() === 6 ?
        '[??ltimo] dddd [??s] LT' // Saturday + Sunday
        : '[??ltima] dddd [??s] LT'; // Monday - Friday
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'em %s',
      past: 'h?? %s',
      s: 'poucos segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um m??s',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos' },

    dayOfMonthOrdinalParse: /\d{1,2}??/,
    ordinal: '%d??',
    invalidDate: 'Data inv??lida' });


  return ptBr;

});

/***/ }),
/* 110 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ro.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
//! author : Emanuel Cepoi : https://github.com/cepem

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: 'secunde',
      mm: 'minute',
      hh: 'ore',
      dd: 'zile',
      ww: 's??pt??m??ni',
      MM: 'luni',
      yy: 'ani' },

    separator = ' ';
    if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
      separator = ' de ';
    }
    return number + separator + format[key];
  }

  var ro = moment.defineLocale('ro', {
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split(
    '_'),

    monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'duminic??_luni_mar??i_miercuri_joi_vineri_s??mb??t??'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_S??m'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_S??'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[azi la] LT',
      nextDay: '[m??ine la] LT',
      nextWeek: 'dddd [la] LT',
      lastDay: '[ieri la] LT',
      lastWeek: '[fosta] dddd [la] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'peste %s',
      past: '%s ??n urm??',
      s: 'c??teva secunde',
      ss: relativeTimeWithPlural,
      m: 'un minut',
      mm: relativeTimeWithPlural,
      h: 'o or??',
      hh: relativeTimeWithPlural,
      d: 'o zi',
      dd: relativeTimeWithPlural,
      w: 'o s??pt??m??n??',
      ww: relativeTimeWithPlural,
      M: 'o lun??',
      MM: relativeTimeWithPlural,
      y: 'un an',
      yy: relativeTimeWithPlural },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return ro;

});

/***/ }),
/* 111 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ru.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! author : Menelion Elens??le : https://github.com/Oire
//! author : ?????????????????? ???????? : https://github.com/socketpair

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ?
    forms[0] :
    num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ?
    forms[1] :
    forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
      mm: withoutSuffix ? '????????????_????????????_??????????' : '????????????_????????????_??????????',
      hh: '??????_????????_??????????',
      dd: '????????_??????_????????',
      ww: '????????????_????????????_????????????',
      MM: '??????????_????????????_??????????????',
      yy: '??????_????????_??????' };

    if (key === 'm') {
      return withoutSuffix ? '????????????' : '????????????';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }
  var monthsParse = [
  /^??????/i,
  /^??????/i,
  /^??????/i,
  /^??????/i,
  /^????[????]/i,
  /^??????/i,
  /^??????/i,
  /^??????/i,
  /^??????/i,
  /^??????/i,
  /^??????/i,
  /^??????/i];


  // http://new.gramota.ru/spravka/rules/139-prop : ?? 103
  // ???????????????????? ??????????????: http://new.gramota.ru/spravka/buro/search-answer?s=242637
  // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
  var ru = moment.defineLocale('ru', {
    months: {
      format: '????????????_??????????????_??????????_????????????_??????_????????_????????_??????????????_????????????????_??????????????_????????????_??????????????'.split(
      '_'),

      standalone: '????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????'.split(
      '_') },


    monthsShort: {
      // ???? CLDR ???????????? "??????." ?? "??????.", ???? ?????????? ?????????? ???????????? ?????????? ???? ???????????
      format: '??????._????????._??????._??????._??????_????????_????????_??????._????????._??????._????????._??????.'.split(
      '_'),

      standalone: '??????._????????._????????_??????._??????_????????_????????_??????._????????._??????._????????._??????.'.split(
      '_') },


    weekdays: {
      standalone: '??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????'.split(
      '_'),

      format: '??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????'.split(
      '_'),

      isFormat: /\[ ?[????] ?(?:??????????????|??????????????????|??????)? ?] ?dddd/ },

    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    // ???????????? ???????????????? ?? ????????????????, ???? ?????? ??????????, ?????? ??????????????????, ???? 4 ??????????, ???????????????????? ?? ???????????? ?? ?????? ??????????
    monthsRegex: /^(??????????[????]|??????\.?|????????????[????]|?????????\.?|???????????|??????\.?|??????????[????]|??????\.?|????[????]|??????[????]|??????\.?|??????[????]|??????\.?|???????????????|??????\.?|??????????????[????]|?????????\.?|????????????[????]|??????\.?|??????????[????]|?????????\.?|????????????[????]|??????\.?)/i,

    // ?????????? ??????????????????????
    monthsShortRegex: /^(??????????[????]|??????\.?|????????????[????]|?????????\.?|???????????|??????\.?|??????????[????]|??????\.?|????[????]|??????[????]|??????\.?|??????[????]|??????\.?|???????????????|??????\.?|??????????????[????]|?????????\.?|????????????[????]|??????\.?|??????????[????]|?????????\.?|????????????[????]|??????\.?)/i,

    // ???????????? ???????????????? ?? ????????????????
    monthsStrictRegex: /^(??????????[????]|????????????[????]|???????????|??????????[????]|????[????]|??????[????]|??????[????]|???????????????|??????????????[????]|????????????[????]|??????????[????]|????????????[????])/i,

    // ??????????????????, ?????????????? ?????????????????????????? ???????????? ?????????????????????? ????????????
    monthsShortStrictRegex: /^(??????\.|?????????\.|??????[??.]|??????\.|????[????]|??????[????.]|??????[????.]|??????\.|?????????\.|??????\.|?????????\.|??????\.)/i,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY ??.',
      LLL: 'D MMMM YYYY ??., H:mm',
      LLLL: 'dddd, D MMMM YYYY ??., H:mm' },

    calendar: {
      sameDay: '[??????????????, ??] LT',
      nextDay: '[????????????, ??] LT',
      lastDay: '[??????????, ??] LT',
      nextWeek: function nextWeek(now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[?? ??????????????????] dddd, [??] LT';
            case 1:
            case 2:
            case 4:
              return '[?? ??????????????????] dddd, [??] LT';
            case 3:
            case 5:
            case 6:
              return '[?? ??????????????????] dddd, [??] LT';}

        } else {
          if (this.day() === 2) {
            return '[????] dddd, [??] LT';
          } else {
            return '[??] dddd, [??] LT';
          }
        }
      },
      lastWeek: function lastWeek(now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[?? ??????????????] dddd, [??] LT';
            case 1:
            case 2:
            case 4:
              return '[?? ??????????????] dddd, [??] LT';
            case 3:
            case 5:
            case 6:
              return '[?? ??????????????] dddd, [??] LT';}

        } else {
          if (this.day() === 2) {
            return '[????] dddd, [??] LT';
          } else {
            return '[??] dddd, [??] LT';
          }
        }
      },
      sameElse: 'L' },

    relativeTime: {
      future: '?????????? %s',
      past: '%s ??????????',
      s: '?????????????????? ????????????',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: '??????',
      hh: relativeTimeWithPlural,
      d: '????????',
      dd: relativeTimeWithPlural,
      w: '????????????',
      ww: relativeTimeWithPlural,
      M: '??????????',
      MM: relativeTimeWithPlural,
      y: '??????',
      yy: relativeTimeWithPlural },

    meridiemParse: /????????|????????|??????|????????????/i,
    isPM: function isPM(input) {
      return /^(??????|????????????)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '????????';
      } else if (hour < 12) {
        return '????????';
      } else if (hour < 17) {
        return '??????';
      } else {
        return '????????????';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(??|????|??)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
          return number + '-??';
        case 'D':
          return number + '-????';
        case 'w':
        case 'W':
          return number + '-??';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ru;

});

/***/ }),
/* 112 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sd.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sindhi [sd]
//! author : Narain Sagar : https://github.com/narainsagar

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var months = [
  '??????????',
  '??????????????',
  '????????',
  '??????????',
  '??????',
  '??????',
  '????????????',
  '????????',
  '??????????????',
  '????????????',
  '??????????',
  '??????????'],

  days = ['??????', '????????', '??????????', '????????', '????????', '??????', '????????'];

  var sd = moment.defineLocale('sd', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd?? D MMMM YYYY HH:mm' },

    meridiemParse: /??????|??????/,
    isPM: function isPM(input) {
      return '??????' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??????';
      }
      return '??????';
    },
    calendar: {
      sameDay: '[????] LT',
      nextDay: '[??????????] LT',
      nextWeek: 'dddd [???????? ???????? ????] LT',
      lastDay: '[??????????] LT',
      lastWeek: '[?????????? ????????] dddd [????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ??????',
      past: '%s ????',
      s: '?????? ??????????',
      ss: '%d ??????????',
      m: '???? ??????',
      mm: '%d ??????',
      h: '???? ????????',
      hh: '%d ????????',
      d: '???? ??????????',
      dd: '%d ??????????',
      M: '???? ??????????',
      MM: '%d ??????????',
      y: '???? ??????',
      yy: '%d ??????' },

    preparse: function preparse(string) {
      return string.replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '??');
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sd;

});

/***/ }),
/* 113 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/se.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : B??rd Rolstad Henriksen : https://github.com/karamell

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var se = moment.defineLocale('se', {
    months: 'o????ajagem??nnu_guovvam??nnu_njuk??am??nnu_cuo??om??nnu_miessem??nnu_geassem??nnu_suoidnem??nnu_borgem??nnu_??ak??am??nnu_golggotm??nnu_sk??bmam??nnu_juovlam??nnu'.split(
    '_'),

    monthsShort: 'o????j_guov_njuk_cuo_mies_geas_suoi_borg_??ak??_golg_sk??b_juov'.split(
    '_'),

    weekdays: 'sotnabeaivi_vuoss??rga_ma????eb??rga_gaskavahkku_duorastat_bearjadat_l??vvardat'.split(
    '_'),

    weekdaysShort: 'sotn_vuos_ma??_gask_duor_bear_l??v'.split('_'),
    weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'MMMM D. [b.] YYYY',
      LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
      LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm' },

    calendar: {
      sameDay: '[otne ti] LT',
      nextDay: '[ihttin ti] LT',
      nextWeek: 'dddd [ti] LT',
      lastDay: '[ikte ti] LT',
      lastWeek: '[ovddit] dddd [ti] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s gea??es',
      past: 'ma??it %s',
      s: 'moadde sekunddat',
      ss: '%d sekunddat',
      m: 'okta minuhta',
      mm: '%d minuhtat',
      h: 'okta diimmu',
      hh: '%d diimmut',
      d: 'okta beaivi',
      dd: '%d beaivvit',
      M: 'okta m??nnu',
      MM: '%d m??nut',
      y: 'okta jahki',
      yy: '%d jagit' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return se;

});

/***/ }),
/* 114 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/si.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  /*jshint -W100*/
  var si = moment.defineLocale('si', {
    months: '??????????????????_????????????????????????_??????????????????_????????????????????????_????????????_????????????_????????????_?????????????????????_?????????????????????????????????_????????????????????????_???????????????????????????_???????????????????????????'.split(
    '_'),

    monthsShort: '??????_?????????_????????????_?????????_????????????_????????????_????????????_?????????_????????????_?????????_????????????_????????????'.split(
    '_'),

    weekdays: '???????????????_???????????????_???????????????????????????_???????????????_??????????????????????????????????????????_????????????????????????_???????????????????????????'.split(
    '_'),

    weekdaysShort: '?????????_?????????_??????_?????????_???????????????_????????????_?????????'.split('_'),
    weekdaysMin: '???_???_???_???_????????????_??????_??????'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'a h:mm',
      LTS: 'a h:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY MMMM D',
      LLL: 'YYYY MMMM D, a h:mm',
      LLLL: 'YYYY MMMM D [????????????] dddd, a h:mm:ss' },

    calendar: {
      sameDay: '[??????] LT[???]',
      nextDay: '[?????????] LT[???]',
      nextWeek: 'dddd LT[???]',
      lastDay: '[?????????] LT[???]',
      lastWeek: '[??????????????????] dddd LT[???]',
      sameElse: 'L' },

    relativeTime: {
      future: '%s????????????',
      past: '%s?????? ?????????',
      s: '??????????????? ??????????????????',
      ss: '??????????????? %d',
      m: '???????????????????????????',
      mm: '???????????????????????? %d',
      h: '?????????',
      hh: '????????? %d',
      d: '????????????',
      dd: '????????? %d',
      M: '????????????',
      MM: '????????? %d',
      y: '?????????',
      yy: '????????? %d' },

    dayOfMonthOrdinalParse: /\d{1,2} ????????????/,
    ordinal: function ordinal(number) {
      return number + ' ????????????';
    },
    meridiemParse: /????????? ?????????|????????? ?????????|??????.???|???.???./,
    isPM: function isPM(input) {
      return input === '???.???.' || input === '????????? ?????????';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? '???.???.' : '????????? ?????????';
      } else {
        return isLower ? '??????.???.' : '????????? ?????????';
      }
    } });


  return si;

});

/***/ }),
/* 115 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sk.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Martin Minka : https://github.com/k2s
//! based on work of petrbela : https://github.com/petrbela

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var months = 'janu??r_febru??r_marec_apr??l_m??j_j??n_j??l_august_september_okt??ber_november_december'.split(
  '_'),

  monthsShort = 'jan_feb_mar_apr_m??j_j??n_j??l_aug_sep_okt_nov_dec'.split('_');
  function plural(n) {
    return n > 1 && n < 5;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's': // a few seconds / in a few seconds / a few seconds ago
        return withoutSuffix || isFuture ? 'p??r sek??nd' : 'p??r sekundami';
      case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'sekundy' : 'sek??nd');
        } else {
          return result + 'sekundami';
        }
      case 'm': // a minute / in a minute / a minute ago
        return withoutSuffix ? 'min??ta' : isFuture ? 'min??tu' : 'min??tou';
      case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'min??ty' : 'min??t');
        } else {
          return result + 'min??tami';
        }
      case 'h': // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
      case 'hh': // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'hodiny' : 'hod??n');
        } else {
          return result + 'hodinami';
        }
      case 'd': // a day / in a day / a day ago
        return withoutSuffix || isFuture ? 'de??' : 'd??om';
      case 'dd': // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'dni' : 'dn??');
        } else {
          return result + 'd??ami';
        }
      case 'M': // a month / in a month / a month ago
        return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
      case 'MM': // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'mesiace' : 'mesiacov');
        } else {
          return result + 'mesiacmi';
        }
      case 'y': // a year / in a year / a year ago
        return withoutSuffix || isFuture ? 'rok' : 'rokom';
      case 'yy': // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'roky' : 'rokov');
        } else {
          return result + 'rokmi';
        }}

  }

  var sk = moment.defineLocale('sk', {
    months: months,
    monthsShort: monthsShort,
    weekdays: 'nede??a_pondelok_utorok_streda_??tvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_??t_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_??t_pi_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[dnes o] LT',
      nextDay: '[zajtra o] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v nede??u o] LT';
          case 1:
          case 2:
            return '[v] dddd [o] LT';
          case 3:
            return '[v stredu o] LT';
          case 4:
            return '[vo ??tvrtok o] LT';
          case 5:
            return '[v piatok o] LT';
          case 6:
            return '[v sobotu o] LT';}

      },
      lastDay: '[v??era o] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[minul?? nede??u o] LT';
          case 1:
          case 2:
            return '[minul??] dddd [o] LT';
          case 3:
            return '[minul?? stredu o] LT';
          case 4:
          case 5:
            return '[minul??] dddd [o] LT';
          case 6:
            return '[minul?? sobotu o] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'pred %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sk;

});

/***/ }),
/* 116 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : Robert Sedov??ek : https://github.com/sedovsek

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ?
        'nekaj sekund' :
        'nekaj sekundami';
      case 'ss':
        if (number === 1) {
          result += withoutSuffix ? 'sekundo' : 'sekundi';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
        } else {
          result += 'sekund';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'ena minuta' : 'eno minuto';
      case 'mm':
        if (number === 1) {
          result += withoutSuffix ? 'minuta' : 'minuto';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'minute' : 'minutami';
        } else {
          result += withoutSuffix || isFuture ? 'minut' : 'minutami';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'ena ura' : 'eno uro';
      case 'hh':
        if (number === 1) {
          result += withoutSuffix ? 'ura' : 'uro';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'uri' : 'urama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'ure' : 'urami';
        } else {
          result += withoutSuffix || isFuture ? 'ur' : 'urami';
        }
        return result;
      case 'd':
        return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
      case 'dd':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'dan' : 'dnem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
        } else {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
        }
        return result;
      case 'M':
        return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
      case 'MM':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
        } else {
          result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
        }
        return result;
      case 'y':
        return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
      case 'yy':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'leto' : 'letom';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'leti' : 'letoma';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'leta' : 'leti';
        } else {
          result += withoutSuffix || isFuture ? 'let' : 'leti';
        }
        return result;}

  }

  var sl = moment.defineLocale('sl', {
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split(
    '_'),

    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_??etrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._??et._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_??e_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm' },

    calendar: {
      sameDay: '[danes ob] LT',
      nextDay: '[jutri ob] LT',

      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v] [nedeljo] [ob] LT';
          case 3:
            return '[v] [sredo] [ob] LT';
          case 6:
            return '[v] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[v] dddd [ob] LT';}

      },
      lastDay: '[v??eraj ob] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[prej??njo] [nedeljo] [ob] LT';
          case 3:
            return '[prej??njo] [sredo] [ob] LT';
          case 6:
            return '[prej??njo] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prej??nji] dddd [ob] LT';}

      },
      sameElse: 'L' },

    relativeTime: {
      future: '??ez %s',
      past: 'pred %s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return sl;

});

/***/ }),
/* 117 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sq.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Flak??rim Ismani : https://github.com/flakerimi
//! author : Menelion Elens??le : https://github.com/Oire
//! author : Oerd Cukalla : https://github.com/oerd

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var sq = moment.defineLocale('sq', {
    months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N??ntor_Dhjetor'.split(
    '_'),

    monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N??n_Dhj'.split('_'),
    weekdays: 'E Diel_E H??n??_E Mart??_E M??rkur??_E Enjte_E Premte_E Shtun??'.split(
    '_'),

    weekdaysShort: 'Die_H??n_Mar_M??r_Enj_Pre_Sht'.split('_'),
    weekdaysMin: 'D_H_Ma_M??_E_P_Sh'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /PD|MD/,
    isPM: function isPM(input) {
      return input.charAt(0) === 'M';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Sot n??] LT',
      nextDay: '[Nes??r n??] LT',
      nextWeek: 'dddd [n??] LT',
      lastDay: '[Dje n??] LT',
      lastWeek: 'dddd [e kaluar n??] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'n?? %s',
      past: '%s m?? par??',
      s: 'disa sekonda',
      ss: '%d sekonda',
      m: 'nj?? minut??',
      mm: '%d minuta',
      h: 'nj?? or??',
      hh: '%d or??',
      d: 'nj?? dit??',
      dd: '%d dit??',
      M: 'nj?? muaj',
      MM: '%d muaj',
      y: 'nj?? vit',
      yy: '%d vite' },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sq;

});

/***/ }),
/* 118 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sr.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian [sr]
//! author : Milan Jana??kovi??<milanjanackovic@gmail.com> : https://github.com/milan-j
//! author : Stefan Crnjakovi?? <stefan@hotmail.rs> : https://github.com/crnjakovic

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var translator = {
    words: {
      //Different grammatical cases
      ss: ['sekunda', 'sekunde', 'sekundi'],
      m: ['jedan minut', 'jedne minute'],
      mm: ['minut', 'minute', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      dd: ['dan', 'dana', 'dana'],
      MM: ['mesec', 'meseca', 'meseci'],
      yy: ['godina', 'godine', 'godina'] },

    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      return number === 1 ?
      wordKey[0] :
      number >= 2 && number <= 4 ?
      wordKey[1] :
      wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return (
          number +
          ' ' +
          translator.correctGrammaticalCase(number, wordKey));

      }
    } };


  var sr = moment.defineLocale('sr', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
    '_'),

    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_??etvrtak_petak_subota'.split(
    '_'),

    weekdaysShort: 'ned._pon._uto._sre._??et._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_??e_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D. M. YYYY.',
      LL: 'D. MMMM YYYY.',
      LLL: 'D. MMMM YYYY. H:mm',
      LLLL: 'dddd, D. MMMM YYYY. H:mm' },

    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedelju] [u] LT';
          case 3:
            return '[u] [sredu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';}

      },
      lastDay: '[ju??e u] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = [
        '[pro??le] [nedelje] [u] LT',
        '[pro??log] [ponedeljka] [u] LT',
        '[pro??log] [utorka] [u] LT',
        '[pro??le] [srede] [u] LT',
        '[pro??log] [??etvrtka] [u] LT',
        '[pro??log] [petka] [u] LT',
        '[pro??le] [subote] [u] LT'];

        return lastWeekDays[this.day()];
      },
      sameElse: 'L' },

    relativeTime: {
      future: 'za %s',
      past: 'pre %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: 'dan',
      dd: translator.translate,
      M: 'mesec',
      MM: translator.translate,
      y: 'godinu',
      yy: translator.translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return sr;

});

/***/ }),
/* 119 */
/*!*****************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sr-cyrl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Jana??kovi??<milanjanackovic@gmail.com> : https://github.com/milan-j
//! author : Stefan Crnjakovi?? <stefan@hotmail.rs> : https://github.com/crnjakovic

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var translator = {
    words: {
      //Different grammatical cases
      ss: ['??????????????', '??????????????', '??????????????'],
      m: ['?????????? ??????????', '?????????? ????????????'],
      mm: ['??????????', '????????????', '????????????'],
      h: ['?????????? ??????', '???????????? ????????'],
      hh: ['??????', '????????', '????????'],
      dd: ['??????', '????????', '????????'],
      MM: ['??????????', '????????????', '????????????'],
      yy: ['????????????', '????????????', '????????????'] },

    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      return number === 1 ?
      wordKey[0] :
      number >= 2 && number <= 4 ?
      wordKey[1] :
      wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return (
          number +
          ' ' +
          translator.correctGrammaticalCase(number, wordKey));

      }
    } };


  var srCyrl = moment.defineLocale('sr-cyrl', {
    months: '????????????_??????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_??????????????_????????????????_????????????????'.split(
    '_'),

    monthsShort: '??????._??????._??????._??????._??????_??????_??????_??????._??????._??????._??????._??????.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '????????????_??????????????????_????????????_??????????_????????????????_??????????_????????????'.split('_'),
    weekdaysShort: '??????._??????._??????._??????._??????._??????._??????.'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D. M. YYYY.',
      LL: 'D. MMMM YYYY.',
      LLL: 'D. MMMM YYYY. H:mm',
      LLLL: 'dddd, D. MMMM YYYY. H:mm' },

    calendar: {
      sameDay: '[?????????? ??] LT',
      nextDay: '[?????????? ??] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[??] [????????????] [??] LT';
          case 3:
            return '[??] [??????????] [??] LT';
          case 6:
            return '[??] [????????????] [??] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[??] dddd [??] LT';}

      },
      lastDay: '[???????? ??] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = [
        '[????????????] [????????????] [??] LT',
        '[??????????????] [??????????????????] [??] LT',
        '[??????????????] [????????????] [??] LT',
        '[????????????] [??????????] [??] LT',
        '[??????????????] [????????????????] [??] LT',
        '[??????????????] [??????????] [??] LT',
        '[????????????] [????????????] [??] LT'];

        return lastWeekDays[this.day()];
      },
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '?????? %s',
      s: '???????????????? ??????????????',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: '??????',
      dd: translator.translate,
      M: '??????????',
      MM: translator.translate,
      y: '????????????',
      yy: translator.translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1st is the first week of the year.
    } });


  return srCyrl;

});

/***/ }),
/* 120 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ss.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : siSwati [ss]
//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ss = moment.defineLocale('ss', {
    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
    '_'),

    monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
    weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split(
    '_'),

    weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
    weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[Namuhla nga] LT',
      nextDay: '[Kusasa nga] LT',
      nextWeek: 'dddd [nga] LT',
      lastDay: '[Itolo nga] LT',
      lastWeek: 'dddd [leliphelile] [nga] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'nga %s',
      past: 'wenteka nga %s',
      s: 'emizuzwana lomcane',
      ss: '%d mzuzwana',
      m: 'umzuzu',
      mm: '%d emizuzu',
      h: 'lihora',
      hh: '%d emahora',
      d: 'lilanga',
      dd: '%d emalanga',
      M: 'inyanga',
      MM: '%d tinyanga',
      y: 'umnyaka',
      yy: '%d iminyaka' },

    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'ekuseni';
      } else if (hours < 15) {
        return 'emini';
      } else if (hours < 19) {
        return 'entsambama';
      } else {
        return 'ebusuku';
      }
    },
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ekuseni') {
        return hour;
      } else if (meridiem === 'emini') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
        if (hour === 0) {
          return 0;
        }
        return hour + 12;
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: '%d',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ss;

});

/***/ }),
/* 121 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sv.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var sv = moment.defineLocale('sv', {
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split(
    '_'),

    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 's??ndag_m??ndag_tisdag_onsdag_torsdag_fredag_l??rdag'.split('_'),
    weekdaysShort: 's??n_m??n_tis_ons_tor_fre_l??r'.split('_'),
    weekdaysMin: 's??_m??_ti_on_to_fr_l??'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd D MMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Idag] LT',
      nextDay: '[Imorgon] LT',
      lastDay: '[Ig??r] LT',
      nextWeek: '[P??] dddd LT',
      lastWeek: '[I] dddd[s] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'om %s',
      past: 'f??r %s sedan',
      s: 'n??gra sekunder',
      ss: '%d sekunder',
      m: 'en minut',
      mm: '%d minuter',
      h: 'en timme',
      hh: '%d timmar',
      d: 'en dag',
      dd: '%d dagar',
      M: 'en m??nad',
      MM: '%d m??nader',
      y: 'ett ??r',
      yy: '%d ??r' },

    dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      ':e' :
      b === 1 ?
      ':a' :
      b === 2 ?
      ':a' :
      b === 3 ?
      ':e' :
      ':e';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return sv;

});

/***/ }),
/* 122 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/sw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Swahili [sw]
//! author : Fahad Kassim : https://github.com/fadsel

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var sw = moment.defineLocale('sw', {
    months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split(
    '_'),

    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split(
    '_'),

    weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
    weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'hh:mm A',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[leo saa] LT',
      nextDay: '[kesho saa] LT',
      nextWeek: '[wiki ijayo] dddd [saat] LT',
      lastDay: '[jana] LT',
      lastWeek: '[wiki iliyopita] dddd [saat] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s baadaye',
      past: 'tokea %s',
      s: 'hivi punde',
      ss: 'sekunde %d',
      m: 'dakika moja',
      mm: 'dakika %d',
      h: 'saa limoja',
      hh: 'masaa %d',
      d: 'siku moja',
      dd: 'siku %d',
      M: 'mwezi mmoja',
      MM: 'miezi %d',
      y: 'mwaka mmoja',
      yy: 'miaka %d' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return sw;

});

/***/ }),
/* 123 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ta.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var symbolMap = {
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
    7: '???',
    8: '???',
    9: '???',
    0: '???' },

  numberMap = {
    '???': '1',
    '???': '2',
    '???': '3',
    '???': '4',
    '???': '5',
    '???': '6',
    '???': '7',
    '???': '8',
    '???': '9',
    '???': '0' };


  var ta = moment.defineLocale('ta', {
    months: '???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????'.split(
    '_'),

    monthsShort: '???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????'.split(
    '_'),

    weekdays: '?????????????????????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????'.split(
    '_'),

    weekdaysShort: '??????????????????_?????????????????????_????????????????????????_???????????????_?????????????????????_??????????????????_?????????'.split(
    '_'),

    weekdaysMin: '??????_??????_??????_??????_??????_??????_???'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, HH:mm',
      LLLL: 'dddd, D MMMM YYYY, HH:mm' },

    calendar: {
      sameDay: '[???????????????] LT',
      nextDay: '[????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[??????????????????] LT',
      lastWeek: '[??????????????? ???????????????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ?????????',
      past: '%s ????????????',
      s: '????????? ????????? ???????????????????????????',
      ss: '%d ???????????????????????????',
      m: '????????? ?????????????????????',
      mm: '%d ??????????????????????????????',
      h: '????????? ????????? ???????????????',
      hh: '%d ????????? ???????????????',
      d: '????????? ????????????',
      dd: '%d ?????????????????????',
      M: '????????? ???????????????',
      MM: '%d ????????????????????????',
      y: '????????? ??????????????????',
      yy: '%d ????????????????????????' },

    dayOfMonthOrdinalParse: /\d{1,2}?????????/,
    ordinal: function ordinal(number) {
      return number + '?????????';
    },
    preparse: function preparse(string) {
      return string.replace(/[??????????????????????????????]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /???????????????|???????????????|????????????|?????????????????????|?????????????????????|????????????/,
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 2) {
        return ' ???????????????';
      } else if (hour < 6) {
        return ' ???????????????'; // ???????????????
      } else if (hour < 10) {
        return ' ????????????'; // ????????????
      } else if (hour < 14) {
        return ' ?????????????????????'; // ?????????????????????
      } else if (hour < 18) {
        return ' ?????????????????????'; // ?????????????????????
      } else if (hour < 22) {
        return ' ????????????'; // ????????????
      } else {
        return ' ???????????????';
      }
    },
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '???????????????') {
        return hour < 2 ? hour : hour + 12;
      } else if (meridiem === '???????????????' || meridiem === '????????????') {
        return hour;
      } else if (meridiem === '?????????????????????') {
        return hour >= 10 ? hour : hour + 12;
      } else {
        return hour + 12;
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return ta;

});

/***/ }),
/* 124 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/te.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var te = moment.defineLocale('te', {
    months: '???????????????_????????????????????????_??????????????????_?????????????????????_??????_????????????_????????????_??????????????????_??????????????????????????????_????????????????????????_??????????????????_????????????????????????'.split(
    '_'),

    monthsShort: '??????._???????????????._??????????????????_???????????????._??????_????????????_????????????_??????._????????????._???????????????._??????._????????????.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '?????????????????????_?????????????????????_????????????????????????_?????????????????????_????????????????????????_???????????????????????????_?????????????????????'.split(
    '_'),

    weekdaysShort: '?????????_?????????_????????????_?????????_????????????_???????????????_?????????'.split('_'),
    weekdaysMin: '???_??????_??????_??????_??????_??????_???'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm' },

    calendar: {
      sameDay: '[????????????] LT',
      nextDay: '[????????????] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[???????????????] LT',
      lastWeek: '[??????] dddd, LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ??????',
      past: '%s ??????????????????',
      s: '?????????????????? ?????????????????????',
      ss: '%d ?????????????????????',
      m: '?????? ??????????????????',
      mm: '%d ????????????????????????',
      h: '?????? ?????????',
      hh: '%d ???????????????',
      d: '?????? ????????????',
      dd: '%d ??????????????????',
      M: '?????? ?????????',
      MM: '%d ???????????????',
      y: '?????? ????????????????????????',
      yy: '%d ??????????????????????????????' },

    dayOfMonthOrdinalParse: /\d{1,2}???/,
    ordinal: '%d???',
    meridiemParse: /??????????????????|????????????|???????????????????????????|????????????????????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '??????????????????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '????????????') {
        return hour;
      } else if (meridiem === '???????????????????????????') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === '????????????????????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '??????????????????';
      } else if (hour < 10) {
        return '????????????';
      } else if (hour < 17) {
        return '???????????????????????????';
      } else if (hour < 20) {
        return '????????????????????????';
      } else {
        return '??????????????????';
      }
    },
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    } });


  return te;

});

/***/ }),
/* 125 */
/*!*************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tet.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tetun Dili (East Timor) [tet]
//! author : Joshua Brooks : https://github.com/joshbrooks
//! author : Onorio De J. Afonso : https://github.com/marobo
//! author : Sonia Simoes : https://github.com/soniasimoes

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var tet = moment.defineLocale('tet', {
    months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju??u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split(
    '_'),

    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
    weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
    weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[Ohin iha] LT',
      nextDay: '[Aban iha] LT',
      nextWeek: 'dddd [iha] LT',
      lastDay: '[Horiseik iha] LT',
      lastWeek: 'dddd [semana kotuk] [iha] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'iha %s',
      past: '%s liuba',
      s: 'segundu balun',
      ss: 'segundu %d',
      m: 'minutu ida',
      mm: 'minutu %d',
      h: 'oras ida',
      hh: 'oras %d',
      d: 'loron ida',
      dd: 'loron %d',
      M: 'fulan ida',
      MM: 'fulan %d',
      y: 'tinan ida',
      yy: 'tinan %d' },

    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return tet;

});

/***/ }),
/* 126 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tg.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tajik [tg]
//! author : Orif N. Jr. : https://github.com/orif-jr

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var suffixes = {
    0: '-????',
    1: '-????',
    2: '-????',
    3: '-????',
    4: '-????',
    5: '-????',
    6: '-????',
    7: '-????',
    8: '-????',
    9: '-????',
    10: '-????',
    12: '-????',
    13: '-????',
    20: '-????',
    30: '-????',
    40: '-????',
    50: '-????',
    60: '-????',
    70: '-????',
    80: '-????',
    90: '-????',
    100: '-????' };


  var tg = moment.defineLocale('tg', {
    months: {
      format: '????????????_??????????????_??????????_????????????_????????_????????_????????_??????????????_????????????????_??????????????_????????????_??????????????'.split(
      '_'),

      standalone: '??????????_????????????_????????_??????????_??????_??????_??????_????????????_??????????????_????????????_??????????_????????????'.split(
      '_') },


    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '??????????????_??????????????_??????????????_????????????????_??????????????????_??????????_??????????'.split(
    '_'),

    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[?????????? ??????????] LT',
      nextDay: '[?????????? ??????????] LT',
      lastDay: '[?????????? ??????????] LT',
      nextWeek: 'dddd[??] [???????????? ?????????? ??????????] LT',
      lastWeek: 'dddd[??] [???????????? ?????????????? ??????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '?????????? %s',
      past: '%s ??????',
      s: '???????????? ??????????',
      m: '???? ????????????',
      mm: '%d ????????????',
      h: '???? ????????',
      hh: '%d ????????',
      d: '???? ??????',
      dd: '%d ??????',
      M: '???? ??????',
      MM: '%d ??????',
      y: '???? ??????',
      yy: '%d ??????' },

    meridiemParse: /??????|????????|??????|??????????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '??????') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === '????????') {
        return hour;
      } else if (meridiem === '??????') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '??????????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '??????';
      } else if (hour < 11) {
        return '????????';
      } else if (hour < 16) {
        return '??????';
      } else if (hour < 19) {
        return '??????????';
      } else {
        return '??????';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(????|????)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
      b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1th is the first week of the year.
    } });


  return tg;

});

/***/ }),
/* 127 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/th.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var th = moment.defineLocale('th', {
    months: '??????????????????_??????????????????????????????_??????????????????_??????????????????_?????????????????????_????????????????????????_?????????????????????_?????????????????????_?????????????????????_??????????????????_???????????????????????????_?????????????????????'.split(
    '_'),

    monthsShort: '???.???._???.???._??????.???._??????.???._???.???._??????.???._???.???._???.???._???.???._???.???._???.???._???.???.'.split(
    '_'),

    monthsParseExact: true,
    weekdays: '?????????????????????_??????????????????_??????????????????_?????????_????????????????????????_???????????????_???????????????'.split('_'),
    weekdaysShort: '?????????????????????_??????????????????_??????????????????_?????????_???????????????_???????????????_???????????????'.split('_'), // yes, three characters difference
    weekdaysMin: '??????._???._???._???._??????._???._???.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY ???????????? H:mm',
      LLLL: '?????????dddd????????? D MMMM YYYY ???????????? H:mm' },

    meridiemParse: /??????????????????????????????|??????????????????????????????/,
    isPM: function isPM(input) {
      return input === '??????????????????????????????';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??????????????????????????????';
      } else {
        return '??????????????????????????????';
      }
    },
    calendar: {
      sameDay: '[?????????????????? ????????????] LT',
      nextDay: '[???????????????????????? ????????????] LT',
      nextWeek: 'dddd[???????????? ????????????] LT',
      lastDay: '[????????????????????????????????? ????????????] LT',
      lastWeek: '[?????????]dddd[????????????????????? ????????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '????????? %s',
      past: '%s?????????????????????',
      s: '????????????????????????????????????',
      ss: '%d ??????????????????',
      m: '1 ????????????',
      mm: '%d ????????????',
      h: '1 ?????????????????????',
      hh: '%d ?????????????????????',
      d: '1 ?????????',
      dd: '%d ?????????',
      w: '1 ?????????????????????',
      ww: '%d ?????????????????????',
      M: '1 ???????????????',
      MM: '%d ???????????????',
      y: '1 ??????',
      yy: '%d ??????' } });



  return th;

});

/***/ }),
/* 128 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tk.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Turkmen [tk]
//! author : Atamyrat Abdyrahmanov : https://github.com/atamyratabdy

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var suffixes = {
    1: "'inji",
    5: "'inji",
    8: "'inji",
    70: "'inji",
    80: "'inji",
    2: "'nji",
    7: "'nji",
    20: "'nji",
    50: "'nji",
    3: "'??nji",
    4: "'??nji",
    100: "'??nji",
    6: "'njy",
    9: "'unjy",
    10: "'unjy",
    30: "'unjy",
    60: "'ynjy",
    90: "'ynjy" };


  var tk = moment.defineLocale('tk', {
    months: '??anwar_Fewral_Mart_Aprel_Ma??_I??un_I??ul_Awgust_Sent??abr_Okt??abr_No??abr_Dekabr'.split(
    '_'),

    monthsShort: '??an_Few_Mar_Apr_Ma??_I??n_I??l_Awg_Sen_Okt_No??_Dek'.split('_'),
    weekdays: '??ek??enbe_Du??enbe_Si??enbe_??ar??enbe_Pen??enbe_Anna_??enbe'.split(
    '_'),

    weekdaysShort: '??ek_Du??_Si??_??ar_Pen_Ann_??en'.split('_'),
    weekdaysMin: '??k_D??_S??_??r_Pn_An_??n'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[bug??n sagat] LT',
      nextDay: '[ertir sagat] LT',
      nextWeek: '[indiki] dddd [sagat] LT',
      lastDay: '[d????n] LT',
      lastWeek: '[ge??en] dddd [sagat] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s so??',
      past: '%s ????',
      s: 'birn????e sekunt',
      m: 'bir minut',
      mm: '%d minut',
      h: 'bir sagat',
      hh: '%d sagat',
      d: 'bir g??n',
      dd: '%d g??n',
      M: 'bir a??',
      MM: '%d a??',
      y: 'bir ??yl',
      yy: '%d ??yl' },

    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {
            // special case for zero
            return number + "'unjy";
          }
          var a = number % 10,
          b = number % 100 - a,
          c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return tk;

});

/***/ }),
/* 129 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tl-ph.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tagalog (Philippines) [tl-ph]
//! author : Dan Hagman : https://github.com/hagmandan

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var tlPh = moment.defineLocale('tl-ph', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split(
    '_'),

    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split(
    '_'),

    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'MM/D/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM DD, YYYY HH:mm' },

    calendar: {
      sameDay: 'LT [ngayong araw]',
      nextDay: '[Bukas ng] LT',
      nextWeek: 'LT [sa susunod na] dddd',
      lastDay: 'LT [kahapon]',
      lastWeek: 'LT [noong nakaraang] dddd',
      sameElse: 'L' },

    relativeTime: {
      future: 'sa loob ng %s',
      past: '%s ang nakalipas',
      s: 'ilang segundo',
      ss: '%d segundo',
      m: 'isang minuto',
      mm: '%d minuto',
      h: 'isang oras',
      hh: '%d oras',
      d: 'isang araw',
      dd: '%d araw',
      M: 'isang buwan',
      MM: '%d buwan',
      y: 'isang taon',
      yy: '%d taon' },

    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return tlPh;

});

/***/ }),
/* 130 */
/*!*************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tlh.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Klingon [tlh]
//! author : Dominika Kruk : https://github.com/amaranthrose

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var numbersNouns = 'pagh_wa???_cha???_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

  function translateFuture(output) {
    var time = output;
    time =
    output.indexOf('jaj') !== -1 ?
    time.slice(0, -3) + 'leS' :
    output.indexOf('jar') !== -1 ?
    time.slice(0, -3) + 'waQ' :
    output.indexOf('DIS') !== -1 ?
    time.slice(0, -3) + 'nem' :
    time + ' pIq';
    return time;
  }

  function translatePast(output) {
    var time = output;
    time =
    output.indexOf('jaj') !== -1 ?
    time.slice(0, -3) + 'Hu???' :
    output.indexOf('jar') !== -1 ?
    time.slice(0, -3) + 'wen' :
    output.indexOf('DIS') !== -1 ?
    time.slice(0, -3) + 'ben' :
    time + ' ret';
    return time;
  }

  function translate(number, withoutSuffix, string, isFuture) {
    var numberNoun = numberAsNoun(number);
    switch (string) {
      case 'ss':
        return numberNoun + ' lup';
      case 'mm':
        return numberNoun + ' tup';
      case 'hh':
        return numberNoun + ' rep';
      case 'dd':
        return numberNoun + ' jaj';
      case 'MM':
        return numberNoun + ' jar';
      case 'yy':
        return numberNoun + ' DIS';}

  }

  function numberAsNoun(number) {
    var hundred = Math.floor(number % 1000 / 100),
    ten = Math.floor(number % 100 / 10),
    one = number % 10,
    word = '';
    if (hundred > 0) {
      word += numbersNouns[hundred] + 'vatlh';
    }
    if (ten > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
    }
    if (one > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[one];
    }
    return word === '' ? 'pagh' : word;
  }

  var tlh = moment.defineLocale('tlh', {
    months: 'tera??? jar wa???_tera??? jar cha???_tera??? jar wej_tera??? jar loS_tera??? jar vagh_tera??? jar jav_tera??? jar Soch_tera??? jar chorgh_tera??? jar Hut_tera??? jar wa???maH_tera??? jar wa???maH wa???_tera??? jar wa???maH cha???'.split(
    '_'),

    monthsShort: 'jar wa???_jar cha???_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa???maH_jar wa???maH wa???_jar wa???maH cha???'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
    '_'),

    weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
    '_'),

    weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
    '_'),

    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[DaHjaj] LT',
      nextDay: '[wa???leS] LT',
      nextWeek: 'LLL',
      lastDay: '[wa???Hu???] LT',
      lastWeek: 'LLL',
      sameElse: 'L' },

    relativeTime: {
      future: translateFuture,
      past: translatePast,
      s: 'puS lup',
      ss: translate,
      m: 'wa??? tup',
      mm: translate,
      h: 'wa??? rep',
      hh: translate,
      d: 'wa??? jaj',
      dd: translate,
      M: 'wa??? jar',
      MM: translate,
      y: 'wa??? DIS',
      yy: translate },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return tlh;

});

/***/ }),
/* 131 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tr.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yi??it Kaya: https://github.com/BYK

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var suffixes = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",
    3: "'??nc??",
    4: "'??nc??",
    100: "'??nc??",
    6: "'nc??",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'??nc??",
    90: "'??nc??" };


  var tr = moment.defineLocale('tr', {
    months: 'Ocak_??ubat_Mart_Nisan_May??s_Haziran_Temmuz_A??ustos_Eyl??l_Ekim_Kas??m_Aral??k'.split(
    '_'),

    monthsShort: 'Oca_??ub_Mar_Nis_May_Haz_Tem_A??u_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Sal??_??ar??amba_Per??embe_Cuma_Cumartesi'.split(
    '_'),

    weekdaysShort: 'Paz_Pts_Sal_??ar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_??a_Pe_Cu_Ct'.split('_'),
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? '????' : '????';
      } else {
        return isLower ? '??s' : '??S';
      }
    },
    meridiemParse: /????|????|??s|??S/,
    isPM: function isPM(input) {
      return input === '??s' || input === '??S';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[bug??n saat] LT',
      nextDay: '[yar??n saat] LT',
      nextWeek: '[gelecek] dddd [saat] LT',
      lastDay: '[d??n] LT',
      lastWeek: '[ge??en] dddd [saat] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s sonra',
      past: '%s ??nce',
      s: 'birka?? saniye',
      ss: '%d saniye',
      m: 'bir dakika',
      mm: '%d dakika',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir g??n',
      dd: '%d g??n',
      w: 'bir hafta',
      ww: '%d hafta',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir y??l',
      yy: '%d y??l' },

    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {
            // special case for zero
            return number + "'??nc??";
          }
          var a = number % 10,
          b = number % 100 - a,
          c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return tr;

});

/***/ }),
/* 132 */
/*!*************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tzl.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Talossan [tzl]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
//! author : Iust?? Canun

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
  // This is currently too difficult (maybe even impossible) to add.
  var tzl = moment.defineLocale('tzl', {
    months: 'Januar_Fevraglh_Mar??_Avr??u_Mai_G??n_Julia_Guscht_Setemvar_Listop??ts_Noemvar_Zecemvar'.split(
    '_'),

    monthsShort: 'Jan_Fev_Mar_Avr_Mai_G??n_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays: 'S??ladi_L??ne??i_Maitzi_M??rcuri_Xh??adi_Vi??ner??i_S??turi'.split('_'),
    weekdaysShort: 'S??l_L??n_Mai_M??r_Xh??_Vi??_S??t'.split('_'),
    weekdaysMin: 'S??_L??_Ma_M??_Xh_Vi_S??'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM [dallas] YYYY',
      LLL: 'D. MMMM [dallas] YYYY HH.mm',
      LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm' },

    meridiemParse: /d\'o|d\'a/i,
    isPM: function isPM(input) {
      return "d'o" === input.toLowerCase();
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? "d'o" : "D'O";
      } else {
        return isLower ? "d'a" : "D'A";
      }
    },
    calendar: {
      sameDay: '[oxhi ??] LT',
      nextDay: '[dem?? ??] LT',
      nextWeek: 'dddd [??] LT',
      lastDay: '[ieiri ??] LT',
      lastWeek: '[s??r el] dddd [lasteu ??] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'osprei %s',
      past: 'ja%s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime },

    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['viensas secunds', "'iensas secunds"],
      ss: [number + ' secunds', '' + number + ' secunds'],
      m: ["'n m??ut", "'iens m??ut"],
      mm: [number + ' m??uts', '' + number + ' m??uts'],
      h: ["'n ??ora", "'iensa ??ora"],
      hh: [number + ' ??oras', '' + number + ' ??oras'],
      d: ["'n ziua", "'iensa ziua"],
      dd: [number + ' ziuas', '' + number + ' ziuas'],
      M: ["'n mes", "'iens mes"],
      MM: [number + ' mesen', '' + number + ' mesen'],
      y: ["'n ar", "'iens ar"],
      yy: [number + ' ars', '' + number + ' ars'] };

    return isFuture ?
    format[key][0] :
    withoutSuffix ?
    format[key][0] :
    format[key][1];
  }

  return tzl;

});

/***/ }),
/* 133 */
/*!*************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tzm.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Central Atlas Tamazight [tzm]
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var tzm = moment.defineLocale('tzm', {
    months: '??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????'.split(
    '_'),

    monthsShort: '??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????'.split(
    '_'),

    weekdays: '??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????'.split('_'),
    weekdaysShort: '??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????'.split('_'),
    weekdaysMin: '??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[???????????? ???] LT',
      nextDay: '[???????????? ???] LT',
      nextWeek: 'dddd [???] LT',
      lastDay: '[??????????????? ???] LT',
      lastWeek: 'dddd [???] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '???????????? ??? ????????? %s',
      past: '????????? %s',
      s: '????????????',
      ss: '%d ????????????',
      m: '???????????????',
      mm: '%d ???????????????',
      h: '????????????',
      hh: '%d ????????????????????????',
      d: '?????????',
      dd: '%d o????????????',
      M: '??????o??????',
      MM: '%d ??????????????????',
      y: '???????????????',
      yy: '%d ??????????????????' },

    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return tzm;

});

/***/ }),
/* 134 */
/*!******************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/tzm-latn.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Central Atlas Tamazight Latin [tzm-latn]
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var tzmLatn = moment.defineLocale('tzm-latn', {
    months: 'innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir'.split(
    '_'),

    monthsShort: 'innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir'.split(
    '_'),

    weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asi???yas'.split('_'),
    weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asi???yas'.split('_'),
    weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asi???yas'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[asdkh g] LT',
      nextDay: '[aska g] LT',
      nextWeek: 'dddd [g] LT',
      lastDay: '[assant g] LT',
      lastWeek: 'dddd [g] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'dadkh s yan %s',
      past: 'yan %s',
      s: 'imik',
      ss: '%d imik',
      m: 'minu???',
      mm: '%d minu???',
      h: 'sa??a',
      hh: '%d tassa??in',
      d: 'ass',
      dd: '%d ossan',
      M: 'ayowr',
      MM: '%d iyyirn',
      y: 'asgas',
      yy: '%d isgasn' },

    week: {
      dow: 6, // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    } });


  return tzmLatn;

});

/***/ }),
/* 135 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ug-cn.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uyghur (China) [ug-cn]
//! author: boyaq : https://github.com/boyaq

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var ugCn = moment.defineLocale('ug-cn', {
    months: '????????????_????????????_????????_????????????_??????_??????????_??????????_??????????????_????????????????_????????????????_??????????????_??????????????'.split(
    '_'),

    monthsShort: '????????????_????????????_????????_????????????_??????_??????????_??????????_??????????????_????????????????_????????????????_??????????????_??????????????'.split(
    '_'),

    weekdays: '????????????????_??????????????_????????????????_????????????????_????????????????_????????_??????????'.split(
    '_'),

    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY-????????M-????????????D-????????',
      LLL: 'YYYY-????????M-????????????D-?????????? HH:mm',
      LLLL: 'dddd?? YYYY-????????M-????????????D-?????????? HH:mm' },

    meridiemParse: /?????????? ????????|??????????|???????????? ??????????|??????|???????????? ??????????|??????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (
      meridiem === '?????????? ????????' ||
      meridiem === '??????????' ||
      meridiem === '???????????? ??????????')
      {
        return hour;
      } else if (meridiem === '???????????? ??????????' || meridiem === '??????') {
        return hour + 12;
      } else {
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '?????????? ????????';
      } else if (hm < 900) {
        return '??????????';
      } else if (hm < 1130) {
        return '???????????? ??????????';
      } else if (hm < 1230) {
        return '??????';
      } else if (hm < 1800) {
        return '???????????? ??????????';
      } else {
        return '??????';
      }
    },
    calendar: {
      sameDay: '[?????????? ??????????] LT',
      nextDay: '[???????? ??????????] LT',
      nextWeek: '[??????????????] dddd [??????????] LT',
      lastDay: '[??????????????] LT',
      lastWeek: '[????????????????] dddd [??????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ??????????',
      past: '%s ??????????',
      s: '?????????? ????????????',
      ss: '%d ????????????',
      m: '?????? ??????????',
      mm: '%d ??????????',
      h: '?????? ??????????',
      hh: '%d ??????????',
      d: '?????? ??????',
      dd: '%d ??????',
      M: '?????? ??????',
      MM: '%d ??????',
      y: '?????? ??????',
      yy: '%d ??????' },


    dayOfMonthOrdinalParse: /\d{1,2}(-????????|-??????|-??????????)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '-????????';
        case 'w':
        case 'W':
          return number + '-??????????';
        default:
          return number;}

    },
    preparse: function preparse(string) {
      return string.replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '??');
    },
    week: {
      // GB/T 7408-1994?????????????????????????????????????????????????????????????????????????ISO 8601:1988??????
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1st is the first week of the year.
    } });


  return ugCn;

});

/***/ }),
/* 136 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/uk.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elens??le : https://github.com/Oire

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ?
    forms[0] :
    num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ?
    forms[1] :
    forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
      mm: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
      hh: withoutSuffix ? '????????????_????????????_??????????' : '????????????_????????????_??????????',
      dd: '????????_??????_????????',
      MM: '????????????_????????????_??????????????',
      yy: '??????_????????_??????????' };

    if (key === 'm') {
      return withoutSuffix ? '??????????????' : '??????????????';
    } else if (key === 'h') {
      return withoutSuffix ? '????????????' : '????????????';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }
  function weekdaysCaseReplace(m, format) {
    var weekdays = {
      nominative: '????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????'.split(
      '_'),

      accusative: '????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????'.split(
      '_'),

      genitive: '????????????_??????????????????_????????????????_????????????_????????????????_?????????????????_????????????'.split(
      '_') },


    nounCase;

    if (m === true) {
      return weekdays['nominative'].
      slice(1, 7).
      concat(weekdays['nominative'].slice(0, 1));
    }
    if (!m) {
      return weekdays['nominative'];
    }

    nounCase = /(\[[????????]\]) ?dddd/.test(format) ?
    'accusative' :
    /\[?(?:??????????????|??????????????????)? ?\] ?dddd/.test(format) ?
    'genitive' :
    'nominative';
    return weekdays[nounCase][m.day()];
  }
  function processHoursFunction(str) {
    return function () {
      return str + '??' + (this.hours() === 11 ? '??' : '') + '] LT';
    };
  }

  var uk = moment.defineLocale('uk', {
    months: {
      format: '??????????_????????????_??????????????_????????????_????????????_????????????_??????????_????????????_??????????????_????????????_??????????????????_????????????'.split(
      '_'),

      standalone: '????????????_??????????_????????????????_??????????????_??????????????_??????????????_????????????_??????????????_????????????????_??????????????_????????????????_??????????????'.split(
      '_') },


    monthsShort: '??????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????'.split(
    '_'),

    weekdays: weekdaysCaseReplace,
    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY ??.',
      LLL: 'D MMMM YYYY ??., HH:mm',
      LLLL: 'dddd, D MMMM YYYY ??., HH:mm' },

    calendar: {
      sameDay: processHoursFunction('[???????????????? '),
      nextDay: processHoursFunction('[???????????? '),
      lastDay: processHoursFunction('[?????????? '),
      nextWeek: processHoursFunction('[??] dddd ['),
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return processHoursFunction('[??????????????] dddd [').call(this);
          case 1:
          case 2:
          case 4:
            return processHoursFunction('[????????????????] dddd [').call(this);}

      },
      sameElse: 'L' },

    relativeTime: {
      future: '???? %s',
      past: '%s ????????',
      s: '???????????????? ????????????',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: '????????????',
      hh: relativeTimeWithPlural,
      d: '????????',
      dd: relativeTimeWithPlural,
      M: '????????????',
      MM: relativeTimeWithPlural,
      y: '??????',
      yy: relativeTimeWithPlural },

    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /????????|??????????|??????|????????????/,
    isPM: function isPM(input) {
      return /^(??????|????????????)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return '????????';
      } else if (hour < 12) {
        return '??????????';
      } else if (hour < 17) {
        return '??????';
      } else {
        return '????????????';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(??|????)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return number + '-??';
        case 'D':
          return number + '-????';
        default:
          return number;}

    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return uk;

});

/***/ }),
/* 137 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/ur.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Urdu [ur]
//! author : Sawood Alam : https://github.com/ibnesayeed
//! author : Zack : https://github.com/ZackVision

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var months = [
  '??????????',
  '??????????',
  '????????',
  '??????????',
  '??????',
  '??????',
  '????????????',
  '????????',
  '??????????',
  '????????????',
  '??????????',
  '??????????'],

  days = ['??????????', '??????', '????????', '??????', '????????????', '????????', '????????'];

  var ur = moment.defineLocale('ur', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd?? D MMMM YYYY HH:mm' },

    meridiemParse: /??????|??????/,
    isPM: function isPM(input) {
      return '??????' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '??????';
      }
      return '??????';
    },
    calendar: {
      sameDay: '[???? ????????] LT',
      nextDay: '[???? ????????] LT',
      nextWeek: 'dddd [????????] LT',
      lastDay: '[?????????? ?????? ????????] LT',
      lastWeek: '[??????????] dddd [????????] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s ??????',
      past: '%s ??????',
      s: '?????? ??????????',
      ss: '%d ??????????',
      m: '?????? ??????',
      mm: '%d ??????',
      h: '?????? ??????????',
      hh: '%d ??????????',
      d: '?????? ????',
      dd: '%d ????',
      M: '?????? ??????',
      MM: '%d ??????',
      y: '?????? ??????',
      yy: '%d ??????' },

    preparse: function preparse(string) {
      return string.replace(/??/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '??');
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return ur;

});

/***/ }),
/* 138 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/uz.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var uz = moment.defineLocale('uz', {
    months: '??????????_????????????_????????_??????????_??????_??????_??????_????????????_??????????????_????????????_??????????_????????????'.split(
    '_'),

    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdays: '??????????????_??????????????_??????????????_????????????????_????????????????_????????_??????????'.split('_'),
    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm' },

    calendar: {
      sameDay: '[?????????? ????????] LT [????]',
      nextDay: '[????????????] LT [????]',
      nextWeek: 'dddd [???????? ????????] LT [????]',
      lastDay: '[???????? ????????] LT [????]',
      lastWeek: '[??????????] dddd [???????? ????????] LT [????]',
      sameElse: 'L' },

    relativeTime: {
      future: '???????? %s ??????????',
      past: '?????? ???????? %s ??????????',
      s: '????????????',
      ss: '%d ????????????',
      m: '?????? ????????????',
      mm: '%d ????????????',
      h: '?????? ????????',
      hh: '%d ????????',
      d: '?????? ??????',
      dd: '%d ??????',
      M: '?????? ????',
      MM: '%d ????',
      y: '?????? ??????',
      yy: '%d ??????' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 4th is the first week of the year.
    } });


  return uz;

});

/***/ }),
/* 139 */
/*!*****************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/uz-latn.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uzbek Latin [uz-latn]
//! author : Rasulbek Mirzayev : github.com/Rasulbeeek

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var uzLatn = moment.defineLocale('uz-latn', {
    months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split(
    '_'),

    monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
    weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split(
    '_'),

    weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
    weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm' },

    calendar: {
      sameDay: '[Bugun soat] LT [da]',
      nextDay: '[Ertaga] LT [da]',
      nextWeek: 'dddd [kuni soat] LT [da]',
      lastDay: '[Kecha soat] LT [da]',
      lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
      sameElse: 'L' },

    relativeTime: {
      future: 'Yaqin %s ichida',
      past: 'Bir necha %s oldin',
      s: 'soniya',
      ss: '%d soniya',
      m: 'bir daqiqa',
      mm: '%d daqiqa',
      h: 'bir soat',
      hh: '%d soat',
      d: 'bir kun',
      dd: '%d kun',
      M: 'bir oy',
      MM: '%d oy',
      y: 'bir yil',
      yy: '%d yil' },

    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    } });


  return uzLatn;

});

/***/ }),
/* 140 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/vi.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk
//! author : Chien Kira : https://github.com/chienkira

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var vi = moment.defineLocale('vi', {
    months: 'th??ng 1_th??ng 2_th??ng 3_th??ng 4_th??ng 5_th??ng 6_th??ng 7_th??ng 8_th??ng 9_th??ng 10_th??ng 11_th??ng 12'.split(
    '_'),

    monthsShort: 'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'ch??? nh???t_th??? hai_th??? ba_th??? t??_th??? n??m_th??? s??u_th??? b???y'.split(
    '_'),

    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM: function isPM(input) {
      return /^ch$/i.test(input);
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'sa' : 'SA';
      } else {
        return isLower ? 'ch' : 'CH';
      }
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [n??m] YYYY',
      LLL: 'D MMMM [n??m] YYYY HH:mm',
      LLLL: 'dddd, D MMMM [n??m] YYYY HH:mm',
      l: 'DD/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm' },

    calendar: {
      sameDay: '[H??m nay l??c] LT',
      nextDay: '[Ng??y mai l??c] LT',
      nextWeek: 'dddd [tu???n t???i l??c] LT',
      lastDay: '[H??m qua l??c] LT',
      lastWeek: 'dddd [tu???n tr?????c l??c] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '%s t???i',
      past: '%s tr?????c',
      s: 'v??i gi??y',
      ss: '%d gi??y',
      m: 'm???t ph??t',
      mm: '%d ph??t',
      h: 'm???t gi???',
      hh: '%d gi???',
      d: 'm???t ng??y',
      dd: '%d ng??y',
      w: 'm???t tu???n',
      ww: '%d tu???n',
      M: 'm???t th??ng',
      MM: '%d th??ng',
      y: 'm???t n??m',
      yy: '%d n??m' },

    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return vi;

});

/***/ }),
/* 141 */
/*!******************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/x-pseudo.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var xPseudo = moment.defineLocale('x-pseudo', {
    months: 'J~????????~r??_F~??br??~??r??_~M??rc~h_??p~r??l_~M????_~J??????~_J??l~??_????~g??st~_S??p~t??mb~??r_??~ct??b~??r_??~??v??m~b??r_~D??c??~mb??r'.split(
    '_'),

    monthsShort: 'J~????_~F??b_~M??r_~??pr_~M????_~J????_~J??l_~????g_~S??p_~??ct_~????v_~D??c'.split(
    '_'),

    monthsParseExact: true,
    weekdays: 'S~????d??~??_M??~??d????~_T????~sd????~_W??d~????sd~????_T~h??rs~d????_~Fr??d~????_S~??t??r~d????'.split(
    '_'),

    weekdaysShort: 'S~????_~M????_~T????_~W??d_~Th??_~Fr??_~S??t'.split('_'),
    weekdaysMin: 'S~??_M??~_T??_~W??_T~h_Fr~_S??'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm' },

    calendar: {
      sameDay: '[T~??d??~?? ??t] LT',
      nextDay: '[T~??m??~rr??~w ??t] LT',
      nextWeek: 'dddd [??t] LT',
      lastDay: '[??~??st~??rd??~?? ??t] LT',
      lastWeek: '[L~??st] dddd [??t] LT',
      sameElse: 'L' },

    relativeTime: {
      future: '??~?? %s',
      past: '%s ??~g??',
      s: '?? ~f??w ~s??c??~??ds',
      ss: '%d s~??c????~ds',
      m: '?? ~m????~??t??',
      mm: '%d m~??????~t??s',
      h: '??~?? h??~??r',
      hh: '%d h~????rs',
      d: '?? ~d????',
      dd: '%d d~????s',
      M: '?? ~m????~th',
      MM: '%d m~????t~hs',
      y: '?? ~??????r',
      yy: '%d ??~????rs' },

    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
      output =
      ~~(number % 100 / 10) === 1 ?
      'th' :
      b === 1 ?
      'st' :
      b === 2 ?
      'nd' :
      b === 3 ?
      'rd' :
      'th';
      return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return xPseudo;

});

/***/ }),
/* 142 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/yo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var yo = moment.defineLocale('yo', {
    months: 'S?????r?????_E??re??le??_???r?????na??_I??gbe??_E??bibi_O??ku??du_Ag???mo_O??gu??n_Owewe_?????wa??ra??_Be??lu??_?????p???????'.split(
    '_'),

    monthsShort: 'S?????r_E??rl_???rn_I??gb_E??bi_O??ku??_Ag???_O??gu??_Owe_?????wa??_Be??l_?????p???????'.split('_'),
    weekdays: 'A??i??ku??_Aje??_I??s?????gun_???j?????ru??_???j?????b???_???ti??_A??ba??m?????ta'.split('_'),
    weekdaysShort: 'A??i??k_Aje??_I??s?????_???jr_???jb_???ti??_A??ba??'.split('_'),
    weekdaysMin: 'A??i??_Aj_I??s_???r_???b_???t_A??b'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A' },

    calendar: {
      sameDay: '[O??ni?? ni] LT',
      nextDay: '[?????la ni] LT',
      nextWeek: "dddd [???s????? to??n'b???] [ni] LT",
      lastDay: '[A??na ni] LT',
      lastWeek: 'dddd [???s????? to??l?????] [ni] LT',
      sameElse: 'L' },

    relativeTime: {
      future: 'ni?? %s',
      past: '%s k???ja??',
      s: 'i??s???ju?? aaya?? die',
      ss: 'aaya?? %d',
      m: 'i??s???ju?? kan',
      mm: 'i??s???ju?? %d',
      h: 'wa??kati kan',
      hh: 'wa??kati %d',
      d: '???j????? kan',
      dd: '???j????? %d',
      M: 'osu?? kan',
      MM: 'osu?? %d',
      y: '???du??n kan',
      yy: '???du??n %d' },

    dayOfMonthOrdinalParse: /???j?????\s\d{1,2}/,
    ordinal: '???j????? %d',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return yo;

});

/***/ }),
/* 143 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/zh-cn.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
//! author : uu109 : https://github.com/uu109

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var zhCn = moment.defineLocale('zh-cn', {
    months: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split(
    '_'),

    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split(
    '_'),

    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY???M???D???',
      LLL: 'YYYY???M???D???Ah???mm???',
      LLLL: 'YYYY???M???D???ddddAh???mm???',
      l: 'YYYY/M/D',
      ll: 'YYYY???M???D???',
      lll: 'YYYY???M???D??? HH:mm',
      llll: 'YYYY???M???D???dddd HH:mm' },

    meridiemParse: /??????|??????|??????|??????|??????|??????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '??????' || meridiem === '??????' || meridiem === '??????') {
        return hour;
      } else if (meridiem === '??????' || meridiem === '??????') {
        return hour + 12;
      } else {
        // '??????'
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '??????';
      } else if (hm < 900) {
        return '??????';
      } else if (hm < 1130) {
        return '??????';
      } else if (hm < 1230) {
        return '??????';
      } else if (hm < 1800) {
        return '??????';
      } else {
        return '??????';
      }
    },
    calendar: {
      sameDay: '[??????]LT',
      nextDay: '[??????]LT',
      nextWeek: function nextWeek(now) {
        if (now.week() !== this.week()) {
          return '[???]dddLT';
        } else {
          return '[???]dddLT';
        }
      },
      lastDay: '[??????]LT',
      lastWeek: function lastWeek(now) {
        if (this.week() !== now.week()) {
          return '[???]dddLT';
        } else {
          return '[???]dddLT';
        }
      },
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '???';
        case 'M':
          return number + '???';
        case 'w':
        case 'W':
          return number + '???';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s???',
      past: '%s???',
      s: '??????',
      ss: '%d ???',
      m: '1 ??????',
      mm: '%d ??????',
      h: '1 ??????',
      hh: '%d ??????',
      d: '1 ???',
      dd: '%d ???',
      w: '1 ???',
      ww: '%d ???',
      M: '1 ??????',
      MM: '%d ??????',
      y: '1 ???',
      yy: '%d ???' },

    week: {
      // GB/T 7408-1994?????????????????????????????????????????????????????????????????????????ISO 8601:1988??????
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    } });


  return zhCn;

});

/***/ }),
/* 144 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/zh-hk.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd
//! author : Anthony : https://github.com/anthonylau

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var zhHk = moment.defineLocale('zh-hk', {
    months: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split(
    '_'),

    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split(
    '_'),

    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY???M???D???',
      LLL: 'YYYY???M???D??? HH:mm',
      LLLL: 'YYYY???M???D???dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY???M???D???',
      lll: 'YYYY???M???D??? HH:mm',
      llll: 'YYYY???M???D???dddd HH:mm' },

    meridiemParse: /??????|??????|??????|??????|??????|??????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '??????' || meridiem === '??????' || meridiem === '??????') {
        return hour;
      } else if (meridiem === '??????') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '??????' || meridiem === '??????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '??????';
      } else if (hm < 900) {
        return '??????';
      } else if (hm < 1200) {
        return '??????';
      } else if (hm === 1200) {
        return '??????';
      } else if (hm < 1800) {
        return '??????';
      } else {
        return '??????';
      }
    },
    calendar: {
      sameDay: '[??????]LT',
      nextDay: '[??????]LT',
      nextWeek: '[???]ddddLT',
      lastDay: '[??????]LT',
      lastWeek: '[???]ddddLT',
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '???';
        case 'M':
          return number + '???';
        case 'w':
        case 'W':
          return number + '???';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s???',
      past: '%s???',
      s: '??????',
      ss: '%d ???',
      m: '1 ??????',
      mm: '%d ??????',
      h: '1 ??????',
      hh: '%d ??????',
      d: '1 ???',
      dd: '%d ???',
      M: '1 ??????',
      MM: '%d ??????',
      y: '1 ???',
      yy: '%d ???' } });



  return zhHk;

});

/***/ }),
/* 145 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/zh-mo.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Macau) [zh-mo]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Tan Yuanhong : https://github.com/le0tan

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var zhMo = moment.defineLocale('zh-mo', {
    months: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split(
    '_'),

    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split(
    '_'),

    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'YYYY???M???D???',
      LLL: 'YYYY???M???D??? HH:mm',
      LLLL: 'YYYY???M???D???dddd HH:mm',
      l: 'D/M/YYYY',
      ll: 'YYYY???M???D???',
      lll: 'YYYY???M???D??? HH:mm',
      llll: 'YYYY???M???D???dddd HH:mm' },

    meridiemParse: /??????|??????|??????|??????|??????|??????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '??????' || meridiem === '??????' || meridiem === '??????') {
        return hour;
      } else if (meridiem === '??????') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '??????' || meridiem === '??????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '??????';
      } else if (hm < 900) {
        return '??????';
      } else if (hm < 1130) {
        return '??????';
      } else if (hm < 1230) {
        return '??????';
      } else if (hm < 1800) {
        return '??????';
      } else {
        return '??????';
      }
    },
    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[??????] LT',
      nextWeek: '[???]dddd LT',
      lastDay: '[??????] LT',
      lastWeek: '[???]dddd LT',
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '???';
        case 'M':
          return number + '???';
        case 'w':
        case 'W':
          return number + '???';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s???',
      past: '%s???',
      s: '??????',
      ss: '%d ???',
      m: '1 ??????',
      mm: '%d ??????',
      h: '1 ??????',
      hh: '%d ??????',
      d: '1 ???',
      dd: '%d ???',
      M: '1 ??????',
      MM: '%d ??????',
      y: '1 ???',
      yy: '%d ???' } });



  return zhMo;

});

/***/ }),
/* 146 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/node_modules/moment/locale/zh-tw.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris

;(function (global, factory) {
   true ? factory(__webpack_require__(/*! ../moment */ 8)) :
  undefined;
})(this, function (moment) {'use strict';

  //! moment.js locale configuration

  var zhTw = moment.defineLocale('zh-tw', {
    months: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split(
    '_'),

    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split(
    '_'),

    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY???M???D???',
      LLL: 'YYYY???M???D??? HH:mm',
      LLLL: 'YYYY???M???D???dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY???M???D???',
      lll: 'YYYY???M???D??? HH:mm',
      llll: 'YYYY???M???D???dddd HH:mm' },

    meridiemParse: /??????|??????|??????|??????|??????|??????/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '??????' || meridiem === '??????' || meridiem === '??????') {
        return hour;
      } else if (meridiem === '??????') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '??????' || meridiem === '??????') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '??????';
      } else if (hm < 900) {
        return '??????';
      } else if (hm < 1130) {
        return '??????';
      } else if (hm < 1230) {
        return '??????';
      } else if (hm < 1800) {
        return '??????';
      } else {
        return '??????';
      }
    },
    calendar: {
      sameDay: '[??????] LT',
      nextDay: '[??????] LT',
      nextWeek: '[???]dddd LT',
      lastDay: '[??????] LT',
      lastWeek: '[???]dddd LT',
      sameElse: 'L' },

    dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '???';
        case 'M':
          return number + '???';
        case 'w':
        case 'W':
          return number + '???';
        default:
          return number;}

    },
    relativeTime: {
      future: '%s???',
      past: '%s???',
      s: '??????',
      ss: '%d ???',
      m: '1 ??????',
      mm: '%d ??????',
      h: '1 ??????',
      hh: '%d ??????',
      d: '1 ???',
      dd: '%d ???',
      M: '1 ??????',
      MM: '%d ??????',
      y: '1 ???',
      yy: '%d ???' } });



  return zhTw;

});

/***/ }),
/* 147 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 148 */
/*!*****************************************************************!*\
  !*** E:/work/starapp/app/pages/workers/workers.vue?mpType=page ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workers.vue?vue&type=template&id=149f26c2&mpType=page */ 149);\n/* harmony import */ var _workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workers.vue?vue&type=script&lang=js&mpType=page */ 151);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/workers/workers.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi93b3JrZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDlmMjZjMiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd29ya2Vycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vd29ya2Vycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy93b3JrZXJzL3dvcmtlcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///148\n");

/***/ }),
/* 149 */
/*!***********************************************************************************************!*\
  !*** E:/work/starapp/app/pages/workers/workers.vue?vue&type=template&id=149f26c2&mpType=page ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./workers.vue?vue&type=template&id=149f26c2&mpType=page */ 150);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_template_id_149f26c2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 150 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/workers/workers.vue?vue&type=template&id=149f26c2&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "title"), attrs: { _i: 1 } }, [
        _c("view", [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.workers.length)))]),
        _c("view", {
          staticClass: _vm._$s(3, "sc", "center"),
          attrs: { _i: 3 },
          on: {
            click: function($event) {
              return _vm.initData()
            }
          }
        })
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "jobs"), attrs: { _i: 4 } },
        _vm._l(_vm._$s(5, "f", { forItems: _vm.workers }), function(
          item,
          index,
          $20,
          $30
        ) {
          return _c(
            "view",
            {
              key: _vm._$s(5, "f", { forIndex: $20, key: 5 + "-" + $30 }),
              staticClass: _vm._$s("5-" + $30, "sc", "job"),
              attrs: { _i: "5-" + $30 }
            },
            [
              _c("view", {
                staticClass: _vm._$s("6-" + $30, "sc", "bar1 bg_workers"),
                attrs: { _i: "6-" + $30 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s("7-" + $30, "sc", "jobTitle"),
                  attrs: { _i: "7-" + $30 }
                },
                [_vm._v(_vm._$s("7-" + $30, "t0-0", _vm._s(item[0])))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s("8-" + $30, "sc", "jobContent"),
                  attrs: { _i: "8-" + $30 }
                },
                [
                  _c("view"),
                  _c("view", [
                    _vm._v(_vm._$s("10-" + $30, "t0-0", _vm._s(item[4])))
                  ])
                ]
              ),
              _c("view", {
                staticClass: _vm._$s("11-" + $30, "sc", "line"),
                attrs: { _i: "11-" + $30 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s("12-" + $30, "sc", "buttonGroup"),
                  attrs: { _i: "12-" + $30 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "13-" + $30,
                        "sc",
                        "center bg_workers"
                      ),
                      attrs: { _i: "13-" + $30 }
                    },
                    [
                      _vm._v(
                        _vm._$s("13-" + $30, "t0-0", _vm._s("core:" + item[1]))
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "14-" + $30,
                        "sc",
                        "center bg_workers"
                      ),
                      attrs: { _i: "14-" + $30 }
                    },
                    [
                      _vm._v(
                        _vm._$s("14-" + $30, "t0-0", _vm._s("ram:" + item[2]))
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        "15-" + $30,
                        "sc",
                        "center bg_workers"
                      ),
                      attrs: { _i: "15-" + $30 }
                    },
                    [
                      _vm._v(
                        _vm._$s("15-" + $30, "t0-0", _vm._s("vram:" + item[3]))
                      )
                    ]
                  )
                ]
              )
            ]
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 151 */
/*!*****************************************************************************************!*\
  !*** E:/work/starapp/app/pages/workers/workers.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./workers.vue?vue&type=script&lang=js&mpType=page */ 152);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_workers_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlxQixDQUFnQix3c0JBQUcsRUFBQyIsImZpbGUiOiIxNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93b3JrZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93b3JrZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///151\n");

/***/ }),
/* 152 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/workers/workers.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/api/api.js */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { workers: [[\"Worker 0, host suency-X99\", \"5/56\", \"60%\", \"22%\", \"GeForce GTX 1080 Ti, not used\"]] };}, onLoad: function onLoad() {this.initData();}, methods: { initData: function initData() {var that = this;uni.showLoading({ title: '?????????' });uni.request({ url: _api.default.getUrl + 'star/getWorkers',\n        success: function success(res) {\n          //console.log(res.data);\n          that.workers = res.data;\n          uni.hideLoading();\n        } });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvd29ya2Vycy93b3JrZXJzLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSw4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsVUFDQSxDQUNBLDJCQURBLEVBRUEsTUFGQSxFQUdBLEtBSEEsRUFJQSxLQUpBLEVBS0EsK0JBTEEsQ0FEQSxDQURBLEdBV0EsQ0FiQSxFQWNBLE1BZEEsb0JBY0EsQ0FDQSxnQkFDQSxDQWhCQSxFQWlCQSxXQUNBLFFBREEsc0JBQ0EsQ0FDQSxnQkFDQSxrQkFDQSxZQURBLElBR0EsY0FDQSw0Q0FEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTs7QUFRQSxLQWRBLEVBakJBLEUiLCJmaWxlIjoiMTUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdDx2aWV3PuW3peS9nOS4u+acuih7e3dvcmtlcnMubGVuZ3RofX0pPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlclwiIEBjbGljaz1cImluaXREYXRhKClcIj7liLfmlrA8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImpvYnNcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJqb2JcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB3b3JrZXJzXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYXIxIGJnX3dvcmtlcnNcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJqb2JUaXRsZVwiPnt7aXRlbVswXX19PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiam9iQ29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+R1BVOjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3Pnt7aXRlbVs0XX19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidXR0b25Hcm91cFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjZW50ZXIgYmdfd29ya2Vyc1wiPnt7XCJjb3JlOlwiK2l0ZW1bMV19fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyIGJnX3dvcmtlcnNcIj57e1wicmFtOlwiK2l0ZW1bMl19fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyIGJnX3dvcmtlcnNcIj57e1widnJhbTpcIitpdGVtWzNdfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGkuanMnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHdvcmtlcnM6W1xyXG5cdFx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0XCJXb3JrZXIgMCwgaG9zdCBzdWVuY3ktWDk5XCIsXHJcblx0XHRcdFx0XHRcIjUvNTZcIixcclxuXHRcdFx0XHRcdFwiNjAlXCIsXHJcblx0XHRcdFx0XHRcIjIyJVwiLFxyXG5cdFx0XHRcdFx0XCJHZUZvcmNlIEdUWCAxMDgwIFRpLCBub3QgdXNlZFwiXHJcblx0XHRcdFx0ICBdXHJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLmluaXREYXRhKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRpbml0RGF0YSgpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK0nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBhcGkuZ2V0VXJsICsgJ3N0YXIvZ2V0V29ya2VycycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LndvcmtlcnMgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cclxuXHQuYm9sZHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQuY2VudGVye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdHBhZGRpbmc6IDYwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cdFxyXG5cdC50aXRsZT52aWV3Omxhc3QtY2hpbGR7XHJcblx0XHR3aWR0aDogMTU0cnB4O1xyXG5cdFx0aGVpZ2h0OiA1NHJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNBODgwRTM7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cnB4O1xyXG5cdFx0Y29sb3I6I0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5iYW9pbmZve1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym94LXNoYWRvdzogMHJweCA0cnB4IDEycnB4IHJnYmEoMTg4LCAxODgsIDE4OCwgMC41KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjZycHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0cGFkZGluZzogMzZycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogaGVpZ2h0OiAzMDBycHg7ICovXHJcblx0fVxyXG5cdFxyXG5cdC50ZXh0e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblx0LnRleHQ+dmlldzpmaXJzdC1jaGlsZHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHR9XHJcblx0XHJcblx0LmJvdHRvbXtcclxuXHRcdG1hcmdpbi10b3A6IDQycnB4O1xyXG5cdH1cclxuXHRcclxuXHQuYmFye1xyXG5cdFx0d2lkdGg6IDEwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjQTg4MEUzO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6LTVycHg7XHJcblx0XHR0b3A6NTAlO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdH1cclxuXHRcclxuXHQuam9ie1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDI0NnJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRib3gtc2hhZG93OiAwcnB4IDRycHggMTJycHggcmdiYSgxODgsIDE4OCwgMTg4LCAwLjUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyNnJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHR9XHJcblx0XHJcblx0LmJhcjF7XHJcblx0XHR3aWR0aDogMTBycHg7XHJcblx0XHRoZWlnaHQ6IDE1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0Oi01cnB4O1xyXG5cdFx0dG9wOjUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHR9XHJcblx0XHJcblx0LmJnX2JsdWV7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNEN0ZGO1xyXG5cdH1cclxuXHQuYmdfZ3JlZW57XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDdFMDc5O1xyXG5cdH1cclxuXHQuYmdfcGlua3tcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRjg0ODQ7XHJcblx0fVxyXG5cdC5iZ19wdXJwbGV7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjQTI1NEYyO1xyXG5cdH1cclxuXHQuYmdfd29ya2Vyc3tcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNBRjdCRkI7XHJcblx0fVxyXG5cdFxyXG5cdC5qb2JUaXRsZXtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0fVxyXG5cdC5qb2JDb250ZW50e1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdFxyXG5cdC5qb2JDb250ZW50PnZpZXc6Zmlyc3QtY2hpbGR7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0fVxyXG5cdC5qb2JzIC5saW5le1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEuNXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXJweDtcclxuXHR9XHJcblx0XHJcblx0LmJ1dHRvbkdyb3Vwe1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjojRkZGRkZGO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmJ1dHRvbkdyb3VwPnZpZXc6bnRoLWNoaWxkKDEpe1xyXG5cdFx0d2lkdGg6IDEzOHJweDtcclxuXHRcdGhlaWdodDogNTFycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5idXR0b25Hcm91cD52aWV3Om50aC1jaGlsZCgyKXtcclxuXHRcdHdpZHRoOiAxODhycHg7XHJcblx0XHRoZWlnaHQ6IDUxcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnJweDtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuYnV0dG9uR3JvdXA+dmlldzpudGgtY2hpbGQoMyl7XHJcblx0XHRcclxuXHRcdGhlaWdodDogNTFycHg7XHJcblx0XHR3aWR0aDogMTM4cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///152\n");

/***/ }),
/* 153 */
/*!***************************************************************!*\
  !*** E:/work/starapp/app/pages/blocks/blocks.vue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks.vue?vue&type=template&id=451a9f56&mpType=page */ 154);\n/* harmony import */ var _blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks.vue?vue&type=script&lang=js&mpType=page */ 156);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/blocks/blocks.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ibG9ja3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1MWE5ZjU2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ibG9ja3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Jsb2Nrcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9ibG9ja3MvYmxvY2tzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///153\n");

/***/ }),
/* 154 */
/*!*********************************************************************************************!*\
  !*** E:/work/starapp/app/pages/blocks/blocks.vue?vue&type=template&id=451a9f56&mpType=page ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./blocks.vue?vue&type=template&id=451a9f56&mpType=page */ 155);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_template_id_451a9f56_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 155 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/blocks/blocks.vue?vue&type=template&id=451a9f56&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "title"), attrs: { _i: 1 } }, [
        _c("view", [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.sectors.length)))]),
        _c("view", {
          staticClass: _vm._$s(3, "sc", "center"),
          attrs: { _i: 3 },
          on: {
            click: function($event) {
              return _vm.initData()
            }
          }
        })
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "tables"), attrs: { _i: 4 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "item"), attrs: { _i: 5 } },
            [_c("view"), _c("view"), _c("view"), _c("view"), _c("view")]
          ),
          _vm._l(_vm._$s(11, "f", { forItems: _vm.sectors }), function(
            item,
            index,
            $20,
            $30
          ) {
            return _c(
              "view",
              { key: _vm._$s(11, "f", { forIndex: $20, key: 11 + "-" + $30 }) },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("12-" + $30, "sc", "item"),
                    class: _vm._$s("12-" + $30, "c", {
                      colorProving: item[1] !== "Proving"
                    }),
                    attrs: { _i: "12-" + $30 }
                  },
                  [
                    _c("view", [
                      _vm._v(_vm._$s("13-" + $30, "t0-0", _vm._s(item[0])))
                    ]),
                    _c("view", [
                      _vm._v(_vm._$s("14-" + $30, "t0-0", _vm._s(item[1])))
                    ]),
                    _c("view", [
                      _vm._v(_vm._$s("15-" + $30, "t0-0", _vm._s(item[2])))
                    ]),
                    _c(
                      "view",
                      {
                        class: _vm._$s("16-" + $30, "c", {
                          colorProving: item[3] !== "YES"
                        }),
                        attrs: { _i: "16-" + $30 }
                      },
                      [_vm._v(_vm._$s("16-" + $30, "t0-0", _vm._s(item[3])))]
                    ),
                    _c("view", [
                      _vm._v(
                        _vm._$s(
                          "17-" + $30,
                          "t0-0",
                          _vm._s(
                            item[6]
                              ? item[6] + item[7] + item[8] + item[9]
                              : "N/A"
                          )
                        )
                      )
                    ])
                  ]
                ),
                _c("view", {
                  staticClass: _vm._$s("18-" + $30, "sc", "line"),
                  attrs: { _i: "18-" + $30 }
                })
              ]
            )
          })
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 156 */
/*!***************************************************************************************!*\
  !*** E:/work/starapp/app/pages/blocks/blocks.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./blocks.vue?vue&type=script&lang=js&mpType=page */ 157);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_blocks_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdxQixDQUFnQix1c0JBQUcsRUFBQyIsImZpbGUiOiIxNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ibG9ja3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jsb2Nrcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///156\n");

/***/ }),
/* 157 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/blocks/blocks.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/api/api.js */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { sectors: [[\"0\", \"Proving\", \"YES\", \"YES\", \"1818153\", \"(in\", \"1\", \"year\", \"20\", \"weeks)\", \"CC\", \"\"], [\"0\", \"Committing\", \"NO\", \"NO\", \"1818153\", \"(in\", \"1\", \"year\", \"20\", \"weeks)\",\n      \"CC\",\n      \"\"]] };\n\n\n\n  },\n  onLoad: function onLoad() {\n    this.initData();\n  },\n  methods: {\n    initData: function initData() {\n      var that = this;\n      uni.showLoading({\n        title: '?????????' });\n\n      uni.request({\n        url: _api.default.getUrl + 'star/getSectors',\n        success: function success(res) {\n          //console.log(res.data);\n          that.sectors = res.data.reverse();\n          uni.hideLoading();\n        } });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYmxvY2tzL2Jsb2Nrcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLDhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsVUFDQSxDQUNBLEdBREEsRUFFQSxTQUZBLEVBR0EsS0FIQSxFQUlBLEtBSkEsRUFLQSxTQUxBLEVBTUEsS0FOQSxFQU9BLEdBUEEsRUFRQSxNQVJBLEVBU0EsSUFUQSxFQVVBLFFBVkEsRUFXQSxJQVhBLEVBWUEsRUFaQSxDQURBLEVBZUEsQ0FDQSxHQURBLEVBRUEsWUFGQSxFQUdBLElBSEEsRUFJQSxJQUpBLEVBS0EsU0FMQSxFQU1BLEtBTkEsRUFPQSxHQVBBLEVBUUEsTUFSQSxFQVNBLElBVEEsRUFVQSxRQVZBO0FBV0EsVUFYQTtBQVlBLFFBWkEsQ0FmQSxDQURBOzs7O0FBZ0NBLEdBbENBO0FBbUNBLFFBbkNBLG9CQW1DQTtBQUNBO0FBQ0EsR0FyQ0E7QUFzQ0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBOztBQUdBO0FBQ0Esb0RBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7O0FBUUEsS0FkQSxFQXRDQSxFIiwiZmlsZSI6IjE1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHQ8dmlldz7ljLrlnZfkv6Hmga8oe3tzZWN0b3JzLmxlbmd0aH19KTwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjZW50ZXJcIiBAY2xpY2s9XCJpbml0RGF0YSgpXCI+5Yi35pawPC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0YWJsZXNcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCIgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj5cclxuXHRcdFx0XHQ8dmlldz5JRDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz5TdGF0ZTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz5DaGFpbjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz5BY3RpdmU8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+RXhwaXJhdGlvbjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBzZWN0b3JzXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCIgOmNsYXNzPVwie2NvbG9yUHJvdmluZzppdGVtWzFdIT09J1Byb3ZpbmcnfVwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+e3tpdGVtWzBdfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldz57e2l0ZW1bMV19fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3Pnt7aXRlbVsyXX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgOmNsYXNzPVwie2NvbG9yUHJvdmluZzppdGVtWzNdIT09J1lFUyd9XCI+e3tpdGVtWzNdfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldz57e2l0ZW1bNl0/KGl0ZW1bNl0gKyBpdGVtWzddICsgaXRlbVs4XSArIGl0ZW1bOV0pOlwiTi9BXCJ9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGkuanMnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNlY3RvcnM6W1xyXG5cdFx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0ICAgIFwiMFwiLFxyXG5cdFx0XHRcdFx0ICAgIFwiUHJvdmluZ1wiLFxyXG5cdFx0XHRcdFx0ICAgIFwiWUVTXCIsXHJcblx0XHRcdFx0XHQgICAgXCJZRVNcIixcclxuXHRcdFx0XHRcdCAgICBcIjE4MTgxNTNcIixcclxuXHRcdFx0XHRcdCAgICBcIihpblwiLFxyXG5cdFx0XHRcdFx0ICAgIFwiMVwiLFxyXG5cdFx0XHRcdFx0ICAgIFwieWVhclwiLFxyXG5cdFx0XHRcdFx0ICAgIFwiMjBcIixcclxuXHRcdFx0XHRcdCAgICBcIndlZWtzKVwiLFxyXG5cdFx0XHRcdFx0ICAgIFwiQ0NcIixcclxuXHRcdFx0XHRcdCAgICBcIlwiXHJcblx0XHRcdFx0XHQgIF0sXHJcblx0XHRcdFx0XHQgIFtcclxuXHRcdFx0XHRcdCAgICAgIFwiMFwiLFxyXG5cdFx0XHRcdFx0ICAgICAgXCJDb21taXR0aW5nXCIsXHJcblx0XHRcdFx0XHQgICAgICBcIk5PXCIsXHJcblx0XHRcdFx0XHQgICAgICBcIk5PXCIsXHJcblx0XHRcdFx0XHQgICAgICBcIjE4MTgxNTNcIixcclxuXHRcdFx0XHRcdCAgICAgIFwiKGluXCIsXHJcblx0XHRcdFx0XHQgICAgICBcIjFcIixcclxuXHRcdFx0XHRcdCAgICAgIFwieWVhclwiLFxyXG5cdFx0XHRcdFx0ICAgICAgXCIyMFwiLFxyXG5cdFx0XHRcdFx0ICAgICAgXCJ3ZWVrcylcIixcclxuXHRcdFx0XHRcdCAgICAgIFwiQ0NcIixcclxuXHRcdFx0XHRcdCAgICAgIFwiXCJcclxuXHRcdFx0XHRcdCAgICBdXHJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLmluaXREYXRhKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRpbml0RGF0YSgpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK0nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBhcGkuZ2V0VXJsICsgJ3N0YXIvZ2V0U2VjdG9ycycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNlY3RvcnMgPSByZXMuZGF0YS5yZXZlcnNlKCk7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XHJcblx0LmNvbG9yUHJvdmluZ3tcclxuXHRcdGNvbG9yOiNBODgwRTMgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5jb2xvck90aGVyc3tcclxuXHRcdGNvbG9yOiNhYzBkMGQ7XHJcblx0fVxyXG5cdFxyXG5cdC5saW5le1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDFycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xyXG5cdFx0bWFyZ2luOiA1cnB4IDA7ICovXHJcblx0fVxyXG5cdC50YWJsZXN7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVte1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjpncmVlbjtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0+dmlldzpudGgtY2hpbGQoMSl7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuaXRlbT52aWV3Om50aC1jaGlsZCgyKXtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtPnZpZXc6bnRoLWNoaWxkKDMpe1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0+dmlldzpudGgtY2hpbGQoNCl7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuaXRlbT52aWV3Om50aC1jaGlsZCg1KXtcclxuXHRcdHdpZHRoOiAyNTBycHg7XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHRcclxuXHQuYm9sZHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQuY2VudGVye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdHBhZGRpbmc6IDYwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cdFxyXG5cdC50aXRsZT52aWV3Omxhc3QtY2hpbGR7XHJcblx0XHR3aWR0aDogMTU0cnB4O1xyXG5cdFx0aGVpZ2h0OiA1NHJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNBODgwRTM7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cnB4O1xyXG5cdFx0Y29sb3I6I0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///157\n");

/***/ }),
/* 158 */
/*!***********************************************************************!*\
  !*** E:/work/starapp/app/pages/operations/operations.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations.vue?vue&type=template&id=2e6a9816&mpType=page */ 159);\n/* harmony import */ var _operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations.vue?vue&type=script&lang=js&mpType=page */ 161);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/operations/operations.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDs7O0FBR3BFO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9vcGVyYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTZhOTgxNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb3BlcmF0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vb3BlcmF0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9vcGVyYXRpb25zL29wZXJhdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///158\n");

/***/ }),
/* 159 */
/*!*****************************************************************************************************!*\
  !*** E:/work/starapp/app/pages/operations/operations.vue?vue&type=template&id=2e6a9816&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./operations.vue?vue&type=template&id=2e6a9816&mpType=page */ 160);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_template_id_2e6a9816_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 160 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/operations/operations.vue?vue&type=template&id=2e6a9816&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "title"), attrs: { _i: 1 } }, [
        _c("view"),
        _c(
          "view",
          { staticClass: _vm._$s(3, "sc", "tasks"), attrs: { _i: 3 } },
          [
            _c("view", {
              staticClass: _vm._$s(4, "sc", "center ops"),
              attrs: { _i: 4 },
              on: {
                click: function($event) {
                  return _vm.postTask(1)
                }
              }
            }),
            _c("view", {
              staticClass: _vm._$s(5, "sc", "center ops"),
              attrs: { _i: 5 },
              on: {
                click: function($event) {
                  return _vm.postTask(3)
                }
              }
            }),
            _c("view", {
              staticClass: _vm._$s(6, "sc", "center ops"),
              attrs: { _i: 6 },
              on: {
                click: function($event) {
                  return _vm.postTask(5)
                }
              }
            }),
            _c("view", {
              staticClass: _vm._$s(7, "sc", "center ops"),
              attrs: { _i: 7 },
              on: {
                click: function($event) {
                  return _vm.postTask(10)
                }
              }
            }),
            _c("view", {
              staticClass: _vm._$s(8, "sc", "center ops"),
              attrs: { _i: 8 },
              on: {
                click: function($event) {
                  return _vm.postTask(15)
                }
              }
            }),
            _c("view", {
              staticClass: _vm._$s(9, "sc", "center ops"),
              attrs: { _i: 9 },
              on: {
                click: function($event) {
                  return _vm.postTask(20)
                }
              }
            })
          ]
        ),
        _c("view", [
          _c("view", {
            staticClass: _vm._$s(11, "sc", "center ops"),
            attrs: { _i: 11 },
            on: {
              click: function($event) {
                return _vm.getNode(1)
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(12, "sc", "center ops"),
            attrs: { _i: 12 },
            on: {
              click: function($event) {
                return _vm.getNode(3)
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(13, "sc", "center ops"),
            attrs: { _i: 13 },
            on: {
              click: function($event) {
                return _vm.getNode(2)
              }
            }
          })
        ])
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(14, "sc", "title"), attrs: { _i: 14 } },
        [
          _c("view"),
          _c(
            "view",
            { staticClass: _vm._$s(16, "sc", "cmdContent"), attrs: { _i: 16 } },
            [_vm._v(_vm._$s(16, "t0-0", _vm._s(_vm.cmd)))]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(17, "sc", "switcher"), attrs: { _i: 17 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    18,
                    "sc",
                    "switch-item uni-list-cell uni-list-cell-pd"
                  ),
                  attrs: { _i: 18 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(19, "sc", "uni-list-cell-db"),
                      attrs: { _i: 19 }
                    },
                    [_vm._v(_vm._$s(19, "t0-0", _vm._s(_vm.allSwitchers.ap)))]
                  ),
                  _c("switch", {
                    attrs: { _i: 20 },
                    on: { change: _vm.switchChangeAP }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    21,
                    "sc",
                    "switch-item uni-list-cell uni-list-cell-pd"
                  ),
                  attrs: { _i: 21 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(22, "sc", "uni-list-cell-db"),
                      attrs: { _i: 22 }
                    },
                    [
                      _vm._v(
                        _vm._$s(22, "t0-0", _vm._s(_vm.allSwitchers.unseal))
                      )
                    ]
                  ),
                  _c("switch", {
                    attrs: { _i: 23 },
                    on: { change: _vm.switchChangeUnseal }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    24,
                    "sc",
                    "switch-item uni-list-cell uni-list-cell-pd"
                  ),
                  attrs: { _i: 24 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(25, "sc", "uni-list-cell-db"),
                      attrs: { _i: 25 }
                    },
                    [_vm._v(_vm._$s(25, "t0-0", _vm._s(_vm.allSwitchers.pc1)))]
                  ),
                  _c("switch", {
                    attrs: { _i: 26 },
                    on: { change: _vm.switchChangePC1 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    27,
                    "sc",
                    "switch-item uni-list-cell uni-list-cell-pd"
                  ),
                  attrs: { _i: 27 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(28, "sc", "uni-list-cell-db"),
                      attrs: { _i: 28 }
                    },
                    [_vm._v(_vm._$s(28, "t0-0", _vm._s(_vm.allSwitchers.pc2)))]
                  ),
                  _c("switch", {
                    attrs: { _i: 29 },
                    on: { change: _vm.switchChangePC2 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    30,
                    "sc",
                    "switch-item uni-list-cell uni-list-cell-pd"
                  ),
                  attrs: { _i: 30 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(31, "sc", "uni-list-cell-db"),
                      attrs: { _i: 31 }
                    },
                    [_vm._v(_vm._$s(31, "t0-0", _vm._s(_vm.allSwitchers.c2)))]
                  ),
                  _c("switch", {
                    attrs: { _i: 32 },
                    on: { change: _vm.switchChangeC2 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    33,
                    "sc",
                    "switch-item uni-form-item uni-column"
                  ),
                  attrs: { _i: 33 }
                },
                [
                  _c("view"),
                  _c("input", {
                    staticClass: _vm._$s(35, "sc", "uni-input"),
                    attrs: { _i: 35 },
                    on: { input: _vm.portInput }
                  })
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(36, "sc", "center cmd"),
                attrs: { _i: 36 },
                on: {
                  click: function($event) {
                    return _vm.copy(_vm.cmd)
                  }
                }
              }),
              _c("view", {
                staticClass: _vm._$s(37, "sc", "line"),
                attrs: { _i: 37 }
              }),
              _vm._l(_vm._$s(38, "f", { forItems: _vm.cmdList }), function(
                item,
                index,
                $20,
                $30
              ) {
                return _c(
                  "view",
                  { key: _vm._$s(38, "f", { forIndex: $20, key: index }) },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s("39-" + $30, "sc", "cmdContent"),
                        attrs: { _i: "39-" + $30 }
                      },
                      [_vm._v(_vm._$s("39-" + $30, "t0-0", _vm._s(item)))]
                    ),
                    _c("view", {
                      staticClass: _vm._$s("40-" + $30, "sc", "center cmd"),
                      attrs: { _i: "40-" + $30 },
                      on: {
                        click: function($event) {
                          return _vm.copy(item)
                        }
                      }
                    }),
                    _c("view", {
                      staticClass: _vm._$s("41-" + $30, "sc", "line"),
                      attrs: { _i: "41-" + $30 }
                    })
                  ]
                )
              })
            ],
            2
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 161 */
/*!***********************************************************************************************!*\
  !*** E:/work/starapp/app/pages/operations/operations.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./operations.vue?vue&type=script&lang=js&mpType=page */ 162);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_operations_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRxQixDQUFnQiwyc0JBQUcsRUFBQyIsImZpbGUiOiIxNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcGVyYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcGVyYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///161\n");

/***/ }),
/* 162 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/operations/operations.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/api/api.js */ 7));\nvar _uniCopy = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/xb-copy/uni-copy.js */ 163));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { allSwitchers: { pc1: false, pc2: false, c1: false, c2: false, ap: false, unseal: false, port: 3456 }, cmdList: [\"lotus-miner info\", \"lotus-miner sealing jobs\", \"watch -n 1 lotus-miner sealing jobs\", \"lotus-miner sealing workers\", \"lotus-miner sectors list\", \"lotus-miner sectors pledge\", \"export LOTUS_WORKER_PATH=/mnt/dell/worker32-p1\", \"lotus net peers\", \"lotus-miner sectors status --log xxx\", \"lotus-miner sectors remove --really-do-it=true xxx\", \"lotus-miner storage list\"] };}, computed: { cmd: function cmd() {return \"screen lotus-worker run --listen 0.0.0.0:\".concat(this.allSwitchers.port, \" --addpiece=\").concat(this.allSwitchers.ap, \" --precommit1=\").concat(this.allSwitchers.pc1, \" --unseal=\").concat(this.allSwitchers.unseal, \" --precommit2=\").concat(this.allSwitchers.pc2, \" --commit=\").concat(this.allSwitchers.c2);} }, mounted: function mounted() {var that = this;uni.showLoading({ title: \"loading\" });uni.request({ url: _api.default.getUrl + 'star/get_onlineip', success: function success(res) {//console.log(res.data);\n        that.cmdList.unshift(res.data.ip);__f__(\"log\", res, \" at pages/operations/operations.vue:113\");uni.hideLoading();} });}, methods: { copy: function copy(e) {(0, _uniCopy.default)({ content: e, success: function success(res) {uni.showToast({ title: res, icon: 'none' });}, error: function error(e) {uni.showToast({ title: e, icon: 'none', duration: 3000 });} });\n\n    },\n    portInput: function portInput(e) {\n      this.allSwitchers.port = e.target.value;\n    },\n    switchChangeAP: function switchChangeAP(e) {\n      this.allSwitchers.ap = e.target.value;\n    },\n    switchChangeUnseal: function switchChangeUnseal(e) {\n      this.allSwitchers.unseal = e.target.value;\n    },\n    switchChangePC1: function switchChangePC1(e) {\n      this.allSwitchers.pc1 = e.target.value;\n    },\n    switchChangePC2: function switchChangePC2(e) {\n      this.allSwitchers.pc2 = e.target.value;\n    },\n    switchChangeC2: function switchChangeC2(e) {\n      this.allSwitchers.c2 = e.target.value;\n    },\n    postTask: function postTask(n) {\n      uni.showModal({\n        title: '??????',\n        content: \"\\u4E0B\\u8FBE\".concat(n, \"\\u4EFB\\u52A1\"),\n        success: function success(res) {\n          if (res.confirm) {\n            uni.request({\n              url: _api.default.getUrl + 'star/pledge',\n              data: { n: n },\n              success: function success(res) {\n                // console.log(res,'22222222');\n                if (res.data.status) {\n                  uni.showToast({\n                    title: '??????',\n                    duration: 2000 });\n\n                } else {\n                  uni.showToast({\n                    title: '??????',\n                    duration: 2000 });\n\n                }\n              } });\n\n          } else if (res.cancel) {\n            __f__(\"log\", '??????????????????', \" at pages/operations/operations.vue:180\");\n          }\n        } });\n\n    },\n    getNode: function getNode(e) {\n      if (e == 1) {\n        uni.navigateTo({\n          url: \"../node/node\" });\n\n      } else if (e == 2) {\n        uni.navigateTo({\n          url: \"../tiger/tiger\" });\n\n      } else {\n        uni.navigateTo({\n          url: \"../2643/2643\" });\n\n      }\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvb3BlcmF0aW9ucy9vcGVyYXRpb25zLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUE7QUFDQSxvRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLGdCQUNBLFVBREEsRUFFQSxVQUZBLEVBR0EsU0FIQSxFQUlBLFNBSkEsRUFLQSxTQUxBLEVBTUEsYUFOQSxFQU9BLFVBUEEsRUFEQSxFQVVBLFVBQ0Esa0JBREEsRUFFQSwwQkFGQSxFQUdBLHFDQUhBLEVBSUEsNkJBSkEsRUFLQSwwQkFMQSxFQU1BLDRCQU5BLEVBT0EsZ0RBUEEsRUFRQSxpQkFSQSxFQVNBLHNDQVRBLEVBVUEsb0RBVkEsRUFXQSwwQkFYQSxDQVZBLEdBeUJBLENBM0JBLEVBNEJBLFlBQ0EscUJBQ0EseVRBQ0EsQ0FIQSxFQTVCQSxFQWlDQSxPQWpDQSxxQkFpQ0EsQ0FDQSxnQkFDQSxrQkFDQSxnQkFEQSxJQUlBLGNBQ0EsOENBREEsRUFFQSxnQ0FDQTtBQUNBLDBDQUNBLDZEQUNBLGtCQUNBLENBUEEsSUFTQSxDQWhEQSxFQWlEQSxXQUNBLElBREEsZ0JBQ0EsQ0FEQSxFQUNBLENBQ0Esd0JBQ0EsVUFEQSxFQUVBLGdDQUNBLGdCQUNBLFVBREEsRUFFQSxZQUZBLElBSUEsQ0FQQSxFQVFBLDBCQUNBLGdCQUNBLFFBREEsRUFFQSxZQUZBLEVBR0EsY0FIQSxJQUtBLENBZEE7O0FBZ0JBLEtBbEJBO0FBbUJBLGFBbkJBLHFCQW1CQSxDQW5CQSxFQW1CQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsa0JBdEJBLDBCQXNCQSxDQXRCQSxFQXNCQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkEsc0JBekJBLDhCQXlCQSxDQXpCQSxFQXlCQTtBQUNBO0FBQ0EsS0EzQkE7QUE0QkEsbUJBNUJBLDJCQTRCQSxDQTVCQSxFQTRCQTtBQUNBO0FBQ0EsS0E5QkE7QUErQkEsbUJBL0JBLDJCQStCQSxDQS9CQSxFQStCQTtBQUNBO0FBQ0EsS0FqQ0E7QUFrQ0Esa0JBbENBLDBCQWtDQSxDQWxDQSxFQWtDQTtBQUNBO0FBQ0EsS0FwQ0E7QUFxQ0EsWUFyQ0Esb0JBcUNBLENBckNBLEVBcUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLHlEQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0Esc0RBREE7QUFFQSw0QkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSxrQ0FGQTs7QUFJQSxpQkFMQSxNQUtBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLGtDQUZBOztBQUlBO0FBQ0EsZUFoQkE7O0FBa0JBLFdBbkJBLE1BbUJBO0FBQ0E7QUFDQTtBQUNBLFNBMUJBOztBQTRCQSxLQWxFQTtBQW1FQSxXQW5FQSxtQkFtRUEsQ0FuRUEsRUFtRUE7QUFDQTtBQUNBO0FBQ0EsNkJBREE7O0FBR0EsT0FKQSxNQUlBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQSxPQUpBLE1BSUE7QUFDQTtBQUNBLDZCQURBOztBQUdBOztBQUVBLEtBbEZBLEVBakRBLEUiLCJmaWxlIjoiMTYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdDx2aWV3PuaTjeS9nDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YXNrc1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyIG9wc1wiIEBjbGljaz1cInBvc3RUYXNrKDEpXCI+MeS4quS7u+WKoTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlciBvcHNcIiBAY2xpY2s9XCJwb3N0VGFzaygzKVwiPjPkuKrku7vliqE8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjZW50ZXIgb3BzXCIgQGNsaWNrPVwicG9zdFRhc2soNSlcIj415Liq5Lu75YqhPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyIG9wc1wiIEBjbGljaz1cInBvc3RUYXNrKDEwKVwiPjEw5Liq5Lu75YqhPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyIG9wc1wiIEBjbGljaz1cInBvc3RUYXNrKDE1KVwiPjE15Liq5Lu75YqhPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2VudGVyIG9wc1wiIEBjbGljaz1cInBvc3RUYXNrKDIwKVwiPjIw5Liq5Lu75YqhPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbi10b3A6IDYwcnB4O2Rpc3BsYXk6IGZsZXg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjZW50ZXIgb3BzXCIgQGNsaWNrPVwiZ2V0Tm9kZSgxKVwiPuiKgueCueS/oeaBrzwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlciBvcHNcIiBAY2xpY2s9XCJnZXROb2RlKDMpXCI+MjY0Mzwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlciBvcHNcIiBAY2xpY2s9XCJnZXROb2RlKDIpXCI+5bCP6ICB6JmOPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA2MHJweDtcIj5cclxuXHRcdFx0PHZpZXc+5ZG95LukPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNtZENvbnRlbnRcIj57e2NtZH19PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInN3aXRjaGVyXCI+XHJcblx0XHRcdFx0IDx2aWV3IGNsYXNzPVwic3dpdGNoLWl0ZW0gdW5pLWxpc3QtY2VsbCB1bmktbGlzdC1jZWxsLXBkXCI+XHJcblx0XHRcdFx0IFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWRiXCI+YWRkcGllY2U6IHt7YWxsU3dpdGNoZXJzLmFwfX08L3ZpZXc+XHJcblx0XHRcdFx0IFx0PHN3aXRjaCBAY2hhbmdlPVwic3dpdGNoQ2hhbmdlQVBcIiBjb2xvcj1cIiNBODgwRTNcIiBzdHlsZT1cInRyYW5zZm9ybTpzY2FsZSgwLjgpO1wiLz5cclxuXHRcdFx0XHQgPC92aWV3PlxyXG5cdFx0XHRcdCA8dmlldyBjbGFzcz1cInN3aXRjaC1pdGVtIHVuaS1saXN0LWNlbGwgdW5pLWxpc3QtY2VsbC1wZFwiPlxyXG5cdFx0XHRcdCBcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPnVuc2VhbDoge3thbGxTd2l0Y2hlcnMudW5zZWFsfX08L3ZpZXc+XHJcblx0XHRcdFx0IFx0PHN3aXRjaCBAY2hhbmdlPVwic3dpdGNoQ2hhbmdlVW5zZWFsXCIgY29sb3I9XCIjQTg4MEUzXCIgc3R5bGU9XCJ0cmFuc2Zvcm06c2NhbGUoMC44KTtcIi8+XHJcblx0XHRcdFx0IDwvdmlldz5cclxuXHRcdFx0XHQgPHZpZXcgY2xhc3M9XCJzd2l0Y2gtaXRlbSB1bmktbGlzdC1jZWxsIHVuaS1saXN0LWNlbGwtcGRcIj5cclxuXHRcdFx0XHQgXHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGwtZGJcIj5wcmVjb21taXQxOiB7e2FsbFN3aXRjaGVycy5wYzF9fTwvdmlldz5cclxuXHRcdFx0XHQgXHQ8c3dpdGNoIEBjaGFuZ2U9XCJzd2l0Y2hDaGFuZ2VQQzFcIiBjb2xvcj1cIiNBODgwRTNcIiBzdHlsZT1cInRyYW5zZm9ybTpzY2FsZSgwLjgpO1wiLz5cclxuXHRcdFx0XHQgPC92aWV3PlxyXG5cdFx0XHRcdCA8dmlldyBjbGFzcz1cInN3aXRjaC1pdGVtIHVuaS1saXN0LWNlbGwgdW5pLWxpc3QtY2VsbC1wZFwiPlxyXG5cdFx0XHRcdCBcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3QtY2VsbC1kYlwiPnByZWNvbW1pdDI6IHt7YWxsU3dpdGNoZXJzLnBjMn19PC92aWV3PlxyXG5cdFx0XHRcdCBcdDxzd2l0Y2ggQGNoYW5nZT1cInN3aXRjaENoYW5nZVBDMlwiIGNvbG9yPVwiI0E4ODBFM1wiIHN0eWxlPVwidHJhbnNmb3JtOnNjYWxlKDAuOCk7XCIvPlxyXG5cdFx0XHRcdCA8L3ZpZXc+XHJcblx0XHRcdFx0IDx2aWV3IGNsYXNzPVwic3dpdGNoLWl0ZW0gdW5pLWxpc3QtY2VsbCB1bmktbGlzdC1jZWxsLXBkXCI+XHJcblx0XHRcdFx0IFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdC1jZWxsLWRiXCI+Y29tbWl0OiB7e2FsbFN3aXRjaGVycy5jMn19PC92aWV3PlxyXG5cdFx0XHRcdCBcdDxzd2l0Y2ggQGNoYW5nZT1cInN3aXRjaENoYW5nZUMyXCIgY29sb3I9XCIjQTg4MEUzXCIgc3R5bGU9XCJ0cmFuc2Zvcm06c2NhbGUoMC44KTtcIi8+XHJcblx0XHRcdFx0IDwvdmlldz5cclxuXHRcdFx0XHQgPHZpZXcgY2xhc3M9XCJzd2l0Y2gtaXRlbSB1bmktZm9ybS1pdGVtIHVuaS1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdCA8dmlldz5wb3J0Ojwvdmlldz5cclxuXHRcdFx0XHRcdCA8aW5wdXQgY2xhc3M9XCJ1bmktaW5wdXRcIiB2YWx1ZT1cIjM0NTZcIiBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCLnq6/lj6Plj7dcIiB0eXBlPVwibnVtYmVyXCIgQGlucHV0PVwicG9ydElucHV0XCIvPlxyXG5cdFx0XHRcdCA8L3ZpZXc+XHJcblx0XHRcdFx0IDx2aWV3IGNsYXNzPVwiY2VudGVyIGNtZFwiIEBjbGljaz1cImNvcHkoY21kKVwiPuWkjeWItuWRveS7pDwvdmlldz5cclxuXHRcdFx0XHQgXHJcblx0XHRcdFx0IDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cclxuXHRcdFx0XHQgXHJcblx0XHRcdFx0IDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjbWRMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQgPHZpZXcgY2xhc3M9XCJjbWRDb250ZW50XCI+e3tpdGVtfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQgPHZpZXcgY2xhc3M9XCJjZW50ZXIgY21kXCIgQGNsaWNrPVwiY29weShpdGVtKVwiPuWkjeWItuWRveS7pDwvdmlldz5cclxuXHRcdFx0XHRcdCA8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0IDwvdmlldz5cclxuXHRcdFx0XHQgXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGkuanMnO1xyXG5cdGltcG9ydCB1bmlDb3B5IGZyb20gJ0AvanNfc2RrL3hiLWNvcHkvdW5pLWNvcHkuanMnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGFsbFN3aXRjaGVyczp7XHJcblx0XHRcdFx0XHRwYzE6IGZhbHNlLFxyXG5cdFx0XHRcdFx0cGMyOiBmYWxzZSxcclxuXHRcdFx0XHRcdGMxOiBmYWxzZSxcclxuXHRcdFx0XHRcdGMyOiBmYWxzZSxcclxuXHRcdFx0XHRcdGFwOiBmYWxzZSxcclxuXHRcdFx0XHRcdHVuc2VhbDpmYWxzZSxcclxuXHRcdFx0XHRcdHBvcnQ6IDM0NTZcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNtZExpc3Q6W1xyXG5cdFx0XHRcdFx0XCJsb3R1cy1taW5lciBpbmZvXCIsXHJcblx0XHRcdFx0XHRcImxvdHVzLW1pbmVyIHNlYWxpbmcgam9ic1wiLFxyXG5cdFx0XHRcdFx0XCJ3YXRjaCAtbiAxIGxvdHVzLW1pbmVyIHNlYWxpbmcgam9ic1wiLFxyXG5cdFx0XHRcdFx0XCJsb3R1cy1taW5lciBzZWFsaW5nIHdvcmtlcnNcIixcclxuXHRcdFx0XHRcdFwibG90dXMtbWluZXIgc2VjdG9ycyBsaXN0XCIsXHJcblx0XHRcdFx0XHRcImxvdHVzLW1pbmVyIHNlY3RvcnMgcGxlZGdlXCIsXHJcblx0XHRcdFx0XHRcImV4cG9ydCBMT1RVU19XT1JLRVJfUEFUSD0vbW50L2RlbGwvd29ya2VyMzItcDFcIixcclxuXHRcdFx0XHRcdFwibG90dXMgbmV0IHBlZXJzXCIsXHJcblx0XHRcdFx0XHRcImxvdHVzLW1pbmVyIHNlY3RvcnMgc3RhdHVzIC0tbG9nIHh4eFwiLFxyXG5cdFx0XHRcdFx0XCJsb3R1cy1taW5lciBzZWN0b3JzIHJlbW92ZSAtLXJlYWxseS1kby1pdD10cnVlIHh4eFwiLFxyXG5cdFx0XHRcdFx0XCJsb3R1cy1taW5lciBzdG9yYWdlIGxpc3RcIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6e1xyXG5cdFx0XHRjbWQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmV0dXJuIGBzY3JlZW4gbG90dXMtd29ya2VyIHJ1biAtLWxpc3RlbiAwLjAuMC4wOiR7dGhpcy5hbGxTd2l0Y2hlcnMucG9ydH0gLS1hZGRwaWVjZT0ke3RoaXMuYWxsU3dpdGNoZXJzLmFwfSAtLXByZWNvbW1pdDE9JHt0aGlzLmFsbFN3aXRjaGVycy5wYzF9IC0tdW5zZWFsPSR7dGhpcy5hbGxTd2l0Y2hlcnMudW5zZWFsfSAtLXByZWNvbW1pdDI9JHt0aGlzLmFsbFN3aXRjaGVycy5wYzJ9IC0tY29tbWl0PSR7dGhpcy5hbGxTd2l0Y2hlcnMuYzJ9YDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKXtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOlwibG9hZGluZ1wiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogYXBpLmdldFVybCArICdzdGFyL2dldF9vbmxpbmVpcCcsXHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHR0aGF0LmNtZExpc3QudW5zaGlmdChyZXMuZGF0YS5pcCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjb3B5KGUpe1xyXG5cdFx0XHRcdHVuaUNvcHkoe1xyXG5cdFx0XHRcdFx0Y29udGVudDplLFxyXG5cdFx0XHRcdFx0c3VjY2VzczoocmVzKT0+e1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yOihlKT0+e1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246MzAwMCxcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3J0SW5wdXQoZSl7XHJcblx0XHRcdFx0dGhpcy5hbGxTd2l0Y2hlcnMucG9ydCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzd2l0Y2hDaGFuZ2VBUChlKXtcclxuXHRcdFx0XHR0aGlzLmFsbFN3aXRjaGVycy5hcCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzd2l0Y2hDaGFuZ2VVbnNlYWwoZSl7XHJcblx0XHRcdFx0dGhpcy5hbGxTd2l0Y2hlcnMudW5zZWFsID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN3aXRjaENoYW5nZVBDMShlKXtcclxuXHRcdFx0XHR0aGlzLmFsbFN3aXRjaGVycy5wYzEgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpdGNoQ2hhbmdlUEMyKGUpe1xyXG5cdFx0XHRcdHRoaXMuYWxsU3dpdGNoZXJzLnBjMiA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzd2l0Y2hDaGFuZ2VDMihlKXtcclxuXHRcdFx0XHR0aGlzLmFsbFN3aXRjaGVycy5jMiA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3N0VGFzayhuKXtcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHQgICAgdGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdCAgICBjb250ZW50OiBg5LiL6L6+JHtufeS7u+WKoWAsXHJcblx0XHRcdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHQgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdHVybDogYXBpLmdldFVybCArICdzdGFyL3BsZWRnZScsXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhOntuOm59LFxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMsJzIyMjIyMjIyJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLnN0YXR1cyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHRpdGxlOiAn5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHRpdGxlOiAn5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0fVxyXG5cdFx0XHRcdCAgICAgICAgICAgIH0pO1xyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXG5cdFx0XHRnZXROb2RlKGUpe1xyXG5cdFx0XHRcdGlmKGUgPT0gMSl7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDpcIi4uL25vZGUvbm9kZVwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIGlmKGUgPT0gMil7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDpcIi4uL3RpZ2VyL3RpZ2VyXCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDpcIi4uLzI2NDMvMjY0M1wiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cclxuXHQubGluZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0E4ODBFMztcclxuXHRcdG1hcmdpbjogNDBycHggMDtcclxuXHR9XHJcblx0XHJcblx0LnN3aXRjaC1pdGVte1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC51bmktaW5wdXR7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0XHRwYWRkaW5nOiA4cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdGJvcmRlcjogI0E4ODBFMyBzb2xpZCAycnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMnJweDtcclxuXHR9XHJcblx0LnVuaS1saXN0LWNlbGwtZGJ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHQuY21kQ29udGVudHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwZTIyMzM7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cdC50YXNrc3tcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cdFxyXG5cdC5ib2xke1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC5jZW50ZXJ7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuY29udGVudCB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0cGFkZGluZzogNjBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC50aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGl0bGUgLm9wc3tcclxuXHRcdHdpZHRoOiAxODBycHg7XHJcblx0XHRoZWlnaHQ6IDU0cnB4O1xyXG5cdFx0YmFja2dyb3VuZDogI0E4ODBFMztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZycHg7XHJcblx0XHRjb2xvcjojRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyOHJweDtcclxuXHR9XHJcblx0XHJcblx0LnRpdGxlIC5jbWR7XHJcblx0XHR3aWR0aDogMTUwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0NXJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNBODgwRTM7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cnB4O1xyXG5cdFx0Y29sb3I6I0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjhycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5iYW9pbmZve1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym94LXNoYWRvdzogMHJweCA0cnB4IDEycnB4IHJnYmEoMTg4LCAxODgsIDE4OCwgMC41KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjZycHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0cGFkZGluZzogMzZycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogaGVpZ2h0OiAzMDBycHg7ICovXHJcblx0fVxyXG5cdFxyXG5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///162\n");

/***/ }),
/* 163 */
/*!******************************************************!*\
  !*** E:/work/starapp/app/js_sdk/xb-copy/uni-copy.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = uniCopy;function uniCopy(_ref) {var content = _ref.content,_success = _ref.success,error = _ref.error;\n  if (!content) return error('??????????????????????????? !');\n  content = typeof content === 'string' ? content : content.toString(); // ???????????????????????????????????????????????????????????????\n  /**\r\n   * ???????????? ??? app??????????????????\r\n   */\n\n  uni.setClipboardData({\n    data: content,\n    success: function success() {\n      _success(\"????????????~\");\n      __f__(\"log\", 'success', \" at js_sdk/xb-copy/uni-copy.js:12\");\n    },\n    fail: function fail() {\n      _success(\"????????????~\");\n    } });\n\n\n\n  /**\r\n           * H5??????????????????\r\n           */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3hiLWNvcHkvdW5pLWNvcHkuanMiXSwibmFtZXMiOlsidW5pQ29weSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ0b1N0cmluZyIsInVuaSIsInNldENsaXBib2FyZERhdGEiLCJkYXRhIiwiZmFpbCJdLCJtYXBwaW5ncyI6InFJQUFlLFNBQVNBLE9BQVQsT0FBMEMsS0FBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QixDQUFoQkMsUUFBZ0IsUUFBaEJBLE9BQWdCLENBQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUN4RCxNQUFHLENBQUNGLE9BQUosRUFBYSxPQUFPRSxLQUFLLENBQUMsYUFBRCxDQUFaO0FBQ2JGLFNBQU8sR0FBRyxPQUFPQSxPQUFQLEtBQW1CLFFBQW5CLEdBQThCQSxPQUE5QixHQUF3Q0EsT0FBTyxDQUFDRyxRQUFSLEVBQWxELENBRndELENBRWE7QUFDckU7Ozs7QUFJQUMsS0FBRyxDQUFDQyxnQkFBSixDQUFxQjtBQUNwQkMsUUFBSSxFQUFFTixPQURjO0FBRXBCQyxXQUFPLEVBQUUsbUJBQVc7QUFDbkJBLGNBQU8sQ0FBQyxPQUFELENBQVA7QUFDQSxtQkFBWSxTQUFaO0FBQ0EsS0FMbUI7QUFNcEJNLFFBQUksRUFBQyxnQkFBVTtBQUNkTixjQUFPLENBQUMsT0FBRCxDQUFQO0FBQ0EsS0FSbUIsRUFBckI7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxDIiwiZmlsZSI6IjE2My5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaUNvcHkoe2NvbnRlbnQsc3VjY2VzcyxlcnJvcn0pIHtcclxuXHRpZighY29udGVudCkgcmV0dXJuIGVycm9yKCflpI3liLbnmoTlhoXlrrnkuI3og73kuLrnqbogIScpXHJcblx0Y29udGVudCA9IHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyA/IGNvbnRlbnQgOiBjb250ZW50LnRvU3RyaW5nKCkgLy8g5aSN5Yi25YaF5a6577yM5b+F6aG75a2X56ym5Liy77yM5pWw5a2X6ZyA6KaB6L2s5o2i5Li65a2X56ym5LiyXHJcblx0LyoqXHJcblx0ICog5bCP56iL5bqP56uvIOWSjCBhcHDnq6/nmoTlpI3liLbpgLvovpFcclxuXHQgKi9cclxuXHJcblx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0ZGF0YTogY29udGVudCxcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdWNjZXNzKFwi5aSN5Yi25oiQ5YqfflwiKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG5cdFx0fSxcclxuXHRcdGZhaWw6ZnVuY3Rpb24oKXtcclxuXHRcdFx0c3VjY2VzcyhcIuWkjeWItuWksei0pX5cIilcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0XHJcblx0LyoqXHJcblx0ICogSDXnq6/nmoTlpI3liLbpgLvovpFcclxuXHQgKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///163\n");

/***/ }),
/* 164 */
/*!***********************************************************!*\
  !*** E:/work/starapp/app/pages/node/node.vue?mpType=page ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.vue?vue&type=template&id=460f9a96&mpType=page */ 165);\n/* harmony import */ var _node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.vue?vue&type=script&lang=js&mpType=page */ 167);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/node/node.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ub2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjBmOWE5NiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9ub2RlL25vZGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///164\n");

/***/ }),
/* 165 */
/*!*****************************************************************************************!*\
  !*** E:/work/starapp/app/pages/node/node.vue?vue&type=template&id=460f9a96&mpType=page ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=template&id=460f9a96&mpType=page */ 166);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_460f9a96_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 166 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/node/node.vue?vue&type=template&id=460f9a96&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("web-view", {
      attrs: {
        "webview-styles": _vm._$s(1, "a-webview-styles", _vm.webviewStyles),
        _i: 1
      }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 167 */
/*!***********************************************************************************!*\
  !*** E:/work/starapp/app/pages/node/node.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=script&lang=js&mpType=page */ 168);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNxQixDQUFnQixxc0JBQUcsRUFBQyIsImZpbGUiOiIxNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///167\n");

/***/ }),
/* 168 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/node/node.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      webviewStyles: {\n        progress: {\n          color: '#FF3333' } } };\n\n\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbm9kZS9ub2RlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREEsRUFEQSxFQURBOzs7O0FBT0EsR0FUQTtBQVVBLGFBVkEsRSIsImZpbGUiOiIxNjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDx3ZWItdmlldyA6d2Vidmlldy1zdHlsZXM9XCJ3ZWJ2aWV3U3R5bGVzXCIgc3JjPVwiaHR0cHM6Ly9maWxlc3Rhci5pbmZvL2VuL2FkZHJlc3MvZjAxODEwMzBcIj48L3dlYi12aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHdlYnZpZXdTdHlsZXM6IHtcclxuXHRcdFx0XHRcdHByb2dyZXNzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnI0ZGMzMzMydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///168\n");

/***/ }),
/* 169 */
/*!*************************************************************!*\
  !*** E:/work/starapp/app/pages/tiger/tiger.vue?mpType=page ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiger.vue?vue&type=template&id=1c0bff54&mpType=page */ 170);\n/* harmony import */ var _tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiger.vue?vue&type=script&lang=js&mpType=page */ 172);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tiger/tiger.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90aWdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMwYmZmNTQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RpZ2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi90aWdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90aWdlci90aWdlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///169\n");

/***/ }),
/* 170 */
/*!*******************************************************************************************!*\
  !*** E:/work/starapp/app/pages/tiger/tiger.vue?vue&type=template&id=1c0bff54&mpType=page ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tiger.vue?vue&type=template&id=1c0bff54&mpType=page */ 171);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_template_id_1c0bff54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 171 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/tiger/tiger.vue?vue&type=template&id=1c0bff54&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("web-view", {
      attrs: {
        "webview-styles": _vm._$s(1, "a-webview-styles", _vm.webviewStyles),
        _i: 1
      }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 172 */
/*!*************************************************************************************!*\
  !*** E:/work/starapp/app/pages/tiger/tiger.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tiger.vue?vue&type=script&lang=js&mpType=page */ 173);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiger_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVxQixDQUFnQixzc0JBQUcsRUFBQyIsImZpbGUiOiIxNzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aWdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGlnZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///172\n");

/***/ }),
/* 173 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/tiger/tiger.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      webviewStyles: {\n        progress: {\n          color: '#FF3333' } } };\n\n\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGlnZXIvdGlnZXIudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQSxFQURBLEVBREE7Ozs7QUFPQSxHQVRBO0FBVUEsYUFWQSxFIiwiZmlsZSI6IjE3My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0PHdlYi12aWV3IDp3ZWJ2aWV3LXN0eWxlcz1cIndlYnZpZXdTdHlsZXNcIiBzcmM9XCJodHRwczovL2ZpbGVzdGFyLmluZm8vZW4vYWRkcmVzcy9mMDI0MjBcIj48L3dlYi12aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHdlYnZpZXdTdHlsZXM6IHtcclxuXHRcdFx0XHRcdHByb2dyZXNzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnI0ZGMzMzMydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///173\n");

/***/ }),
/* 174 */
/*!***********************************************************!*\
  !*** E:/work/starapp/app/pages/2643/2643.vue?mpType=page ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2643.vue?vue&type=template&id=4d93cb36&mpType=page */ 175);\n/* harmony import */ var _2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2643.vue?vue&type=script&lang=js&mpType=page */ 177);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/2643/2643.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi8yNjQzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDkzY2IzNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vMjY0My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vMjY0My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy8yNjQzLzI2NDMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///174\n");

/***/ }),
/* 175 */
/*!*****************************************************************************************!*\
  !*** E:/work/starapp/app/pages/2643/2643.vue?vue&type=template&id=4d93cb36&mpType=page ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./2643.vue?vue&type=template&id=4d93cb36&mpType=page */ 176);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_template_id_4d93cb36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 176 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/2643/2643.vue?vue&type=template&id=4d93cb36&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("web-view", {
      attrs: {
        "webview-styles": _vm._$s(1, "a-webview-styles", _vm.webviewStyles),
        _i: 1
      }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 177 */
/*!***********************************************************************************!*\
  !*** E:/work/starapp/app/pages/2643/2643.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./2643.vue?vue&type=script&lang=js&mpType=page */ 178);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_2643_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNxQixDQUFnQixxc0JBQUcsRUFBQyIsImZpbGUiOiIxNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi8yNjQzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi8yNjQzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///177\n");

/***/ }),
/* 178 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/pages/2643/2643.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      webviewStyles: {\n        progress: {\n          color: '#FF3333' } } };\n\n\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvMjY0My8yNjQzLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREEsRUFEQSxFQURBOzs7O0FBT0EsR0FUQTtBQVVBLGFBVkEsRSIsImZpbGUiOiIxNzguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDx3ZWItdmlldyA6d2Vidmlldy1zdHlsZXM9XCJ3ZWJ2aWV3U3R5bGVzXCIgc3JjPVwiaHR0cHM6Ly9maWxlc3Rhci5pbmZvL2VuL2FkZHJlc3MvZjAxODMxMzNcIj48L3dlYi12aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHdlYnZpZXdTdHlsZXM6IHtcclxuXHRcdFx0XHRcdHByb2dyZXNzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnI0ZGMzMzMydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///178\n");

/***/ }),
/* 179 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 180 */
/*!***********************************!*\
  !*** E:/work/starapp/app/App.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 181);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 147);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDb007QUFDcE0sZ0JBQWdCLDZNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE4MC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///180\n");

/***/ }),
/* 181 */
/*!************************************************************!*\
  !*** E:/work/starapp/app/App.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 182);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBwQixDQUFnQix5ckJBQUcsRUFBQyIsImZpbGUiOiIxODEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///181\n");

/***/ }),
/* 182 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/starapp/app/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTgyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///182\n");

/***/ })
],[[0,"app-config"]]]);