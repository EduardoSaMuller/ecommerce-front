"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/molecules/ProductCard.tsx":
/*!**************************************************!*\
  !*** ./src/components/molecules/ProductCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Button */ \"./src/components/atoms/Button.tsx\");\n/* harmony import */ var _atoms_HighlightText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/HighlightText */ \"./src/components/atoms/HighlightText.tsx\");\n/* harmony import */ var _atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/DescriptionText */ \"./src/components/atoms/DescriptionText.tsx\");\n/* harmony import */ var _atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/InfoText */ \"./src/components/atoms/InfoText.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\Eduardo Muller\\\\Desktop\\\\Nova pasta\\\\ecommerce-front\\\\src\\\\components\\\\molecules\\\\ProductCard.tsx\";\n\n\n\n\n\n\n\nconst CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"ProductCard__CardContainer\",\n  componentId: \"sc-1cnphpc-0\"\n})([\"border:1px solid #ddd;padding:10px;margin:10px;max-width:240px;border-radius:10px;display:flex;flex-direction:column;span:nth-of-type(1){font-size:0.75rem;height:0.625rem;line-height:1.375rem;font-weight:400;display:flex;-webkit-box-align:center;align-items:center;color:rgb(127,133,141);text-decoration:line-through;}span:nth-of-type(2){display:flex;-webkit-box-align:center;align-items:center;margin-bottom:0.25rem;margin-top:0.25rem;font-size:1.25rem;line-height:1.875rem;font-weight:700;height:1.25rem;text-decoration:none;color:rgb(255,101,0);}span:nth-of-type(3){display:flex;-webkit-box-align:center;align-items:center;font-size:0.75rem;line-height:1rem;font-weight:400;height:0.75rem;color:rgb(127,133,141);}\"]);\n_c = CardContainer;\nconst ProductCard = ({\n  product,\n  addToCart\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(CardContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_HighlightText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [product.quantity, \" unidades\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: [\" R$\", product.oldPrice.toFixed(2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: [\" R$\", product.newPrice.toFixed(2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: \" \\xC0 vista no PIX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onClick: addToCart,\n      children: \"Add to Cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 7\n  }, undefined);\n};\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c2;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUHJvZHVjdENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDRjtBQUVjO0FBQ0k7QUFDZDtBQUFBO0FBUXZDLE1BQU1RLGFBQWEsR0FBR1AsNkRBQVUsQ0FBQVMsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSxvdEJBMkMvQjtBQUFDQyxFQUFBLEdBM0NJTCxhQUFhO0FBNkNwQixNQUFNTSxXQUF1QyxHQUFHQSxDQUFDO0VBQUVDLE9BQU87RUFBRUM7QUFBVSxDQUFDLEtBQUs7RUFDekUsb0JBQ0VULDZEQUFBLENBQUNDLGFBQWE7SUFBQVMsUUFBQSxnQkFDWlYsNkRBQUEsQ0FBQ0osNERBQWE7TUFBQWMsUUFBQSxFQUFFRixPQUFPLENBQUNHO0lBQUk7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQWdCLENBQUMsZUFFN0NmLDZEQUFBLENBQUNILDhEQUFlO01BQUFhLFFBQUEsR0FBRUYsT0FBTyxDQUFDUSxRQUFRLEVBQUMsV0FBUztJQUFBO01BQUFKLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFpQixDQUFDLGVBQzlEZiw2REFBQSxDQUFDRix1REFBUTtNQUFBWSxRQUFBLEdBQUMsS0FBRyxFQUFDRixPQUFPLENBQUNTLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUFBO01BQUFOLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFXLENBQUMsZUFDckRmLDZEQUFBLENBQUNGLHVEQUFRO01BQUFZLFFBQUEsR0FBQyxLQUFHLEVBQUNGLE9BQU8sQ0FBQ1csUUFBUSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQUE7TUFBQU4sUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQVcsQ0FBQyxlQUNyRGYsNkRBQUEsQ0FBQ0YsdURBQVE7TUFBQVksUUFBQSxFQUFDO0lBQWU7TUFBQUUsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQVUsQ0FBQyxlQUNwQ2YsNkRBQUEsQ0FBQ0wscURBQU07TUFBQ3lCLE9BQU8sRUFBRVgsU0FBVTtNQUFBQyxRQUFBLEVBQUM7SUFBVztNQUFBRSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBUSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ25DLENBQUM7QUFFcEIsQ0FBQztBQUFDTSxHQUFBLEdBWkdkLFdBQXVDO0FBYzVDLCtEQUFlQSxXQUFXLEVBQUM7QUFBQSxJQUFBRCxFQUFBLEVBQUFlLEdBQUE7QUFBQUMsWUFBQSxDQUFBaEIsRUFBQTtBQUFBZ0IsWUFBQSxDQUFBRCxHQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9kdWN0Q2FyZC50c3g/MTllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL0J1dHRvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vYXRvbXMvSW1hZ2UnO1xyXG5pbXBvcnQgSGlnaGxpZ2h0VGV4dCBmcm9tICcuLi9hdG9tcy9IaWdobGlnaHRUZXh0JztcclxuaW1wb3J0IERlc2NyaXB0aW9uVGV4dCBmcm9tICcuLi9hdG9tcy9EZXNjcmlwdGlvblRleHQnO1xyXG5pbXBvcnQgSW5mb1RleHQgZnJvbSBcIi4uL2F0b21zL0luZm9UZXh0XCI7XHJcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi4vLi4vZGF0YS9rZXlib2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdENhcmRQcm9wcyB7XHJcbiAgICBwcm9kdWN0OiBLZXlib2FyZDtcclxuICAgIGFkZFRvQ2FydDogKCkgPT4gdm9pZDtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBzcGFuOm50aC1vZi10eXBlKDEpe1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGhlaWdodDogMC42MjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHJnYigxMjcsIDEzMywgMTQxKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgICBzcGFuOm50aC1vZi10eXBlKDIpe1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg3NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAxMDEsIDApO1xyXG4gICAgfVxyXG4gICAgc3BhbjpudGgtb2YtdHlwZSgzKXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICBjb2xvcjogcmdiKDEyNywgMTMzLCAxNDEpO1xyXG4gICAgfVxyXG4gIGA7XHJcbiAgXHJcbiBjb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoeyBwcm9kdWN0LCBhZGRUb0NhcnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmRDb250YWluZXI+XHJcbiAgICAgICAgPEhpZ2hsaWdodFRleHQ+e3Byb2R1Y3QubmFtZX08L0hpZ2hsaWdodFRleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPERlc2NyaXB0aW9uVGV4dD57cHJvZHVjdC5xdWFudGl0eX0gdW5pZGFkZXM8L0Rlc2NyaXB0aW9uVGV4dD5cclxuICAgICAgICA8SW5mb1RleHQ+IFIke3Byb2R1Y3Qub2xkUHJpY2UudG9GaXhlZCgyKX08L0luZm9UZXh0PlxyXG4gICAgICAgIDxJbmZvVGV4dD4gUiR7cHJvZHVjdC5uZXdQcmljZS50b0ZpeGVkKDIpfTwvSW5mb1RleHQ+XHJcbiAgICAgICAgPEluZm9UZXh0PiDDgCB2aXN0YSBubyBQSVg8L0luZm9UZXh0PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17YWRkVG9DYXJ0fT5BZGQgdG8gQ2FydDwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQnV0dG9uIiwiSGlnaGxpZ2h0VGV4dCIsIkRlc2NyaXB0aW9uVGV4dCIsIkluZm9UZXh0IiwianN4REVWIiwiX2pzeERFViIsIkNhcmRDb250YWluZXIiLCJkaXYiLCJ3aXRoQ29uZmlnIiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnRJZCIsIl9jIiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0IiwiYWRkVG9DYXJ0IiwiY2hpbGRyZW4iLCJuYW1lIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicXVhbnRpdHkiLCJvbGRQcmljZSIsInRvRml4ZWQiLCJuZXdQcmljZSIsIm9uQ2xpY2siLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/molecules/ProductCard.tsx\n"));

/***/ })

});