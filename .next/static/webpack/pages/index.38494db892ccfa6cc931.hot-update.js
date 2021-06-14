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
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");


var _jsxFileName = "/mnt/c/Users/Atlas Neiko/Documents/GitHub/nextjs-course-code/components/events/event-item.js",
    _this = undefined;





var EventItem = function EventItem(_ref) {
  var event = _ref.event;
  var EventLink = "/events/".concat(event.id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.eventItem,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "event.image",
      alt: "".concat(event.title, "-img")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "location: ".concat(event.location)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "date: ".concat(event.date)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: event.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      link: EventLink,
      children: "Event Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcyJdLCJuYW1lcyI6WyJFdmVudEl0ZW0iLCJldmVudCIsIkV2ZW50TGluayIsImlkIiwiY2xhc3NlcyIsImV2ZW50SXRlbSIsInRpdGxlIiwibG9jYXRpb24iLCJkYXRlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDL0IsTUFBTUMsU0FBUyxxQkFBY0QsS0FBSyxDQUFDRSxFQUFwQixDQUFmO0FBQ0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDZEQUFPLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0osS0FBSyxDQUFDSztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssU0FBRyxlQUFSO0FBQXlCLFNBQUcsWUFBS0wsS0FBSyxDQUFDSyxLQUFYO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsb0NBQWtCTCxLQUFLLENBQUNNLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBQSxnQ0FBYU4sS0FBSyxDQUFDTyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQU1FO0FBQUEsZ0JBQUlQLEtBQUssQ0FBQ1E7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRSxxRUFBQyxrREFBRDtBQUFRLFVBQUksRUFBRVAsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FkRDs7S0FBTUYsUztBQWVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zODQ5NGRiODkyY2NmYTZjYzkzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9ldmVudC1pdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XHJcbmNvbnN0IEV2ZW50SXRlbSA9ICh7IGV2ZW50IH0pID0+IHtcclxuICBjb25zdCBFdmVudExpbmsgPSBgL2V2ZW50cy8ke2V2ZW50LmlkfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuZXZlbnRJdGVtfT5cclxuICAgICAgPGgxPntldmVudC50aXRsZX08L2gxPlxyXG4gICAgICA8aW1nIHNyYz17YGV2ZW50LmltYWdlYH0gYWx0PXtgJHtldmVudC50aXRsZX0taW1nYH0gLz5cclxuICAgICAgPGgzPntgbG9jYXRpb246ICR7ZXZlbnQubG9jYXRpb259YH08L2gzPlxyXG4gICAgICA8cD57YGRhdGU6ICR7ZXZlbnQuZGF0ZX1gfTwvcD5cclxuXHJcbiAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxCdXR0b24gbGluaz17RXZlbnRMaW5rfT5FdmVudCBQYWdlPC9CdXR0b24+XHJcbiAgICAgIHsvKiA8TGluayBocmVmPXtFdmVudExpbmt9PkV2ZW50IFBhZ2U8L0xpbms+ICovfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=