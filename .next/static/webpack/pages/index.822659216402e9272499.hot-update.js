webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/Event-item.js":
false,

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

/***/ "./components/events/event-list.js":
/*!*****************************************!*\
  !*** ./components/events/event-list.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item */ "./components/events/event-item.js");


var _jsxFileName = "/mnt/c/Users/Atlas Neiko/Documents/GitHub/nextjs-course-code/components/events/event-list.js",
    _this = undefined;



var EventList = function EventList(_ref) {
  var _ref$events = _ref.events,
      events = _ref$events === void 0 ? [] : _ref$events;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: events.map(function (event, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_event_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0LmpzIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsImV2ZW50IiwiRXZlbnRMaW5rIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwibG9jYXRpb24iLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJFdmVudExpc3QiLCJldmVudHMiLCJtYXAiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMvQixNQUFNQyxTQUFTLG9CQUFhRCxLQUFLLENBQUNFLEVBQW5CLENBQWY7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGLEtBQUssQ0FBQ0c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLFNBQUcsRUFBRUgsS0FBSyxDQUFDSSxLQUFoQjtBQUF1QixTQUFHLFlBQUtKLEtBQUssQ0FBQ0csS0FBWDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLG9DQUFrQkgsS0FBSyxDQUFDSyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUEsZ0NBQWFMLEtBQUssQ0FBQ00sSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFNRTtBQUFBLGdCQUFJTixLQUFLLENBQUNPO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVOLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLEtBQVNELEtBQUssQ0FBQ0UsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWJEOztLQUFNSCxTO0FBY1NBLHdFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUNBLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXFCO0FBQUEseUJBQWxCQyxNQUFrQjtBQUFBLE1BQWxCQSxNQUFrQiw0QkFBVCxFQUFTO0FBQ3JDLHNCQUNFO0FBQUEsY0FDR0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ1YsS0FBRCxFQUFRVyxHQUFSLEVBQWdCO0FBQzFCLDBCQUFPLHFFQUFDLG1EQUFEO0FBQVcsYUFBSyxFQUFFWDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FSRDs7S0FBTVEsUztBQVNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MjI2NTkyMTY0MDJlOTI3MjQ5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgRXZlbnRJdGVtID0gKHsgZXZlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IEV2ZW50TGluayA9IGBldmVudHMvJHtldmVudC5pZH1gO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkga2V5PXtldmVudC5pZH0+XHJcbiAgICAgIDxoMT57ZXZlbnQudGl0bGV9PC9oMT5cclxuICAgICAgPGltZyBzcmM9e2V2ZW50LmltYWdlfSBhbHQ9e2Ake2V2ZW50LnRpdGxlfS1pbWdgfSAvPlxyXG4gICAgICA8aDM+e2Bsb2NhdGlvbjogJHtldmVudC5sb2NhdGlvbn1gfTwvaDM+XHJcbiAgICAgIDxwPntgZGF0ZTogJHtldmVudC5kYXRlfWB9PC9wPlxyXG5cclxuICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPExpbmsgaHJlZj17RXZlbnRMaW5rfT5FdmVudCBQYWdlPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XHJcbiIsImltcG9ydCBFdmVudEl0ZW0gZnJvbSBcIi4vZXZlbnQtaXRlbVwiO1xyXG5jb25zdCBFdmVudExpc3QgPSAoeyBldmVudHMgPSBbXSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgICAge2V2ZW50cy5tYXAoKGV2ZW50LCBpZHgpID0+IHtcclxuICAgICAgICByZXR1cm4gPEV2ZW50SXRlbSBldmVudD17ZXZlbnR9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9