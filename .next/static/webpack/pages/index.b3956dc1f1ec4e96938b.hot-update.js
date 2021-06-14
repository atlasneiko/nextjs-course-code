webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/Event-item.js":
/*!*****************************************!*\
  !*** ./components/events/Event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/mnt/c/Users/Atlas Neiko/Documents/GitHub/nextjs-course-code/components/events/EventItem.js",
    _this = undefined;



var EventItem = function EventItem(_ref) {
  var event = _ref.event;
  var EventLink = "events/".concat(event.id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
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

/***/ "./components/events/EventItem.js":
false,

/***/ "./components/events/EventList.js":
/*!****************************************!*\
  !*** ./components/events/EventList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event-item */ "./components/events/Event-item.js");


var _jsxFileName = "/mnt/c/Users/Atlas Neiko/Documents/GitHub/nextjs-course-code/components/events/EventList.js",
    _this = undefined;



var EventList = function EventList(_ref) {
  var _ref$events = _ref.events,
      events = _ref$events === void 0 ? [] : _ref$events;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: events.map(function (event, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Event_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
        event: event
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = EventList;
/* harmony default export */ __webpack_exports__["default"] = (EventList);

var _c;

$RefreshReg$(_c, "EventList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudExpc3QuanMiXSwibmFtZXMiOlsiRXZlbnRJdGVtIiwiZXZlbnQiLCJFdmVudExpbmsiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJsb2NhdGlvbiIsImRhdGUiLCJkZXNjcmlwdGlvbiIsIkV2ZW50TGlzdCIsImV2ZW50cyIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQy9CLE1BQU1DLFNBQVMsb0JBQWFELEtBQUssQ0FBQ0UsRUFBbkIsQ0FBZjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0YsS0FBSyxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssU0FBRyxFQUFFSCxLQUFLLENBQUNJLEtBQWhCO0FBQXVCLFNBQUcsWUFBS0osS0FBSyxDQUFDRyxLQUFYO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsb0NBQWtCSCxLQUFLLENBQUNLLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBQSxnQ0FBYUwsS0FBSyxDQUFDTSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQU1FO0FBQUEsZ0JBQUlOLEtBQUssQ0FBQ087QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRU4sU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsS0FBU0QsS0FBSyxDQUFDRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBYkQ7O0tBQU1ILFM7QUFjU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBQ0EsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBcUI7QUFBQSx5QkFBbEJDLE1BQWtCO0FBQUEsTUFBbEJBLE1BQWtCLDRCQUFULEVBQVM7QUFDckMsc0JBQ0U7QUFBQSxjQUNHQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFDVixLQUFELEVBQVFXLEdBQVIsRUFBZ0I7QUFDMUIsMEJBQU8scUVBQUMsbURBQUQ7QUFBVyxhQUFLLEVBQUVYO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVJEOztLQUFNUSxTO0FBU1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzOTU2ZGMxZjFlYzRlOTY5MzhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBFdmVudEl0ZW0gPSAoeyBldmVudCB9KSA9PiB7XHJcbiAgY29uc3QgRXZlbnRMaW5rID0gYGV2ZW50cy8ke2V2ZW50LmlkfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBrZXk9e2V2ZW50LmlkfT5cclxuICAgICAgPGgxPntldmVudC50aXRsZX08L2gxPlxyXG4gICAgICA8aW1nIHNyYz17ZXZlbnQuaW1hZ2V9IGFsdD17YCR7ZXZlbnQudGl0bGV9LWltZ2B9IC8+XHJcbiAgICAgIDxoMz57YGxvY2F0aW9uOiAke2V2ZW50LmxvY2F0aW9ufWB9PC9oMz5cclxuICAgICAgPHA+e2BkYXRlOiAke2V2ZW50LmRhdGV9YH08L3A+XHJcblxyXG4gICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8TGluayBocmVmPXtFdmVudExpbmt9PkV2ZW50IFBhZ2U8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50SXRlbTtcclxuIiwiaW1wb3J0IEV2ZW50SXRlbSBmcm9tIFwiLi9FdmVudC1pdGVtXCI7XHJcbmNvbnN0IEV2ZW50TGlzdCA9ICh7IGV2ZW50cyA9IFtdIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7ZXZlbnRzLm1hcCgoZXZlbnQsIGlkeCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8RXZlbnRJdGVtIGV2ZW50PXtldmVudH0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFdmVudExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=