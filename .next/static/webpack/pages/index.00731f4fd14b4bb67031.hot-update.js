webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/EventItem.js":
/*!****************************************!*\
  !*** ./components/events/EventItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/mnt/c/Users/Atlas Neiko/Documents/GitHub/nextjs-course-code/components/events/EventItem.js",
    _this = undefined;

var EventItem = function EventItem(_ref) {
  var event = _ref.event;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: event.image,
      alt: "".concat(event.title, "-img")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "location: ".concat(event.location)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "date: ".concat(event.date)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: event.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, event.id, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
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
/* harmony import */ var _EventItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventItem */ "./components/events/EventItem.js");


var _jsxFileName = "/mnt/c/Users/Atlas Neiko/Documents/GitHub/nextjs-course-code/components/events/EventList.js",
    _this = undefined;



var EventList = function EventList(_ref) {
  var _ref$events = _ref.events,
      events = _ref$events === void 0 ? [] : _ref$events;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: events.map(function (event, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EventItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudExpc3QuanMiXSwibmFtZXMiOlsiRXZlbnRJdGVtIiwiZXZlbnQiLCJ0aXRsZSIsImltYWdlIiwibG9jYXRpb24iLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJpZCIsIkV2ZW50TGlzdCIsImV2ZW50cyIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMvQixzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBLEtBQUssQ0FBQ0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLFNBQUcsRUFBRUQsS0FBSyxDQUFDRSxLQUFoQjtBQUF1QixTQUFHLFlBQUtGLEtBQUssQ0FBQ0MsS0FBWDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLG9DQUFrQkQsS0FBSyxDQUFDRyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUEsZ0NBQWFILEtBQUssQ0FBQ0ksSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFNRTtBQUFBLGdCQUFJSixLQUFLLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsS0FBU0wsS0FBSyxDQUFDTSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0tBQU1QLFM7QUFZU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7QUFDQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQjtBQUFBLHlCQUFsQkMsTUFBa0I7QUFBQSxNQUFsQkEsTUFBa0IsNEJBQVQsRUFBUztBQUNyQyxzQkFDRTtBQUFBLGNBQ0dBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNULEtBQUQsRUFBUVUsR0FBUixFQUFnQjtBQUMxQiwwQkFBTyxxRUFBQyxrREFBRDtBQUFXLGFBQUssRUFBRVY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O0tBQU1PLFM7QUFTU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDA3MzFmNGZkMTRiNGJiNjcwMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50SXRlbSA9ICh7IGV2ZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGtleT17ZXZlbnQuaWR9PlxyXG4gICAgICA8aDE+e2V2ZW50LnRpdGxlfTwvaDE+XHJcbiAgICAgIDxpbWcgc3JjPXtldmVudC5pbWFnZX0gYWx0PXtgJHtldmVudC50aXRsZX0taW1nYH0gLz5cclxuICAgICAgPGgzPntgbG9jYXRpb246ICR7ZXZlbnQubG9jYXRpb259YH08L2gzPlxyXG4gICAgICA8cD57YGRhdGU6ICR7ZXZlbnQuZGF0ZX1gfTwvcD5cclxuXHJcbiAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50SXRlbTtcclxuIiwiaW1wb3J0IEV2ZW50SXRlbSBmcm9tIFwiLi9FdmVudEl0ZW1cIjtcclxuY29uc3QgRXZlbnRMaXN0ID0gKHsgZXZlbnRzID0gW10gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtldmVudHMubWFwKChldmVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxFdmVudEl0ZW0gZXZlbnQ9e2V2ZW50fSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==