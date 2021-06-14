webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-item.module.css */ "./components/events/event-item.module.css");
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/mnt/c/Users/Atlas Neiko/Documents/GitHub/nextjs-course-code/components/events/event-item.js",
    _this = undefined;




var EventItem = function EventItem(_ref) {
  var event = _ref.event;
  var EventLink = "events/".concat(event.id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: "event-item",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: event.image,
      alt: "".concat(event.title, "-img")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "location: ".concat(event.location)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "date: ".concat(event.date)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: event.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: EventLink,
      children: "Event Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, event.id, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = EventItem;
/* harmony default export */ __webpack_exports__["default"] = (EventItem);

var _c;

$RefreshReg$(_c, "EventItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-item.module.css":
/*!*************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/events/event-item.module.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".event-item_event-item__1Ki_O img {\r\n  max-width: 300px;\r\n  height: auto;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/events/event-item.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY;AACd","sourcesContent":[".event-item img {\r\n  max-width: 300px;\r\n  height: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"event-item": "event-item_event-item__1Ki_O"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsImV2ZW50IiwiRXZlbnRMaW5rIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwibG9jYXRpb24iLCJkYXRlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDL0IsTUFBTUMsU0FBUyxvQkFBYUQsS0FBSyxDQUFDRSxFQUFuQixDQUFmO0FBQ0Esc0JBQ0U7QUFBbUIsYUFBUyxFQUFDLFlBQTdCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0YsS0FBSyxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssU0FBRyxFQUFFSCxLQUFLLENBQUNJLEtBQWhCO0FBQXVCLFNBQUcsWUFBS0osS0FBSyxDQUFDRyxLQUFYO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsb0NBQWtCSCxLQUFLLENBQUNLLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBQSxnQ0FBYUwsS0FBSyxDQUFDTSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQU1FO0FBQUEsZ0JBQUlOLEtBQUssQ0FBQ087QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRU4sU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsS0FBU0QsS0FBSyxDQUFDRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBYkQ7O0tBQU1ILFM7QUFjU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsc0NBQXNDLHVCQUF1QixtQkFBbUIsS0FBSyxXQUFXLHdHQUF3RyxZQUFZLFdBQVcsMENBQTBDLHVCQUF1QixtQkFBbUIsS0FBSyx1QkFBdUI7QUFDdFg7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Mjk1YWUyNDllNGI0MmE4YmM3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuL2V2ZW50LWl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBFdmVudEl0ZW0gPSAoeyBldmVudCB9KSA9PiB7XHJcbiAgY29uc3QgRXZlbnRMaW5rID0gYGV2ZW50cy8ke2V2ZW50LmlkfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBrZXk9e2V2ZW50LmlkfSBjbGFzc05hbWU9XCJldmVudC1pdGVtXCI+XHJcbiAgICAgIDxoMT57ZXZlbnQudGl0bGV9PC9oMT5cclxuICAgICAgPGltZyBzcmM9e2V2ZW50LmltYWdlfSBhbHQ9e2Ake2V2ZW50LnRpdGxlfS1pbWdgfSAvPlxyXG4gICAgICA8aDM+e2Bsb2NhdGlvbjogJHtldmVudC5sb2NhdGlvbn1gfTwvaDM+XHJcbiAgICAgIDxwPntgZGF0ZTogJHtldmVudC5kYXRlfWB9PC9wPlxyXG5cclxuICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPExpbmsgaHJlZj17RXZlbnRMaW5rfT5FdmVudCBQYWdlPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XHJcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC1pdGVtX2V2ZW50LWl0ZW1fXzFLaV9PIGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZXZlbnQtaXRlbSBpbWcge1xcclxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZXZlbnQtaXRlbVwiOiBcImV2ZW50LWl0ZW1fZXZlbnQtaXRlbV9fMUtpX09cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9