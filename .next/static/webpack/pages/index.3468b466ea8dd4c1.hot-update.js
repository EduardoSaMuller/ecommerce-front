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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Button */ \"./src/components/atoms/Button.tsx\");\n/* harmony import */ var _atoms_HighlightText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/HighlightText */ \"./src/components/atoms/HighlightText.tsx\");\n/* harmony import */ var _atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/DescriptionText */ \"./src/components/atoms/DescriptionText.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Eduardo Muller\\\\Desktop\\\\Nova pasta\\\\ecommerce-front\\\\src\\\\components\\\\molecules\\\\ProductCard.tsx\";\n\n\n\n\n\n\nconst CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"ProductCard__CardContainer\",\n  componentId: \"sc-1cnphpc-0\"\n})([\"border:1px solid #ddd;padding:10px;margin:10px;max-width:240px;border-radius:10px;display:flex;flex-direction:column\"]);\n_c = CardContainer;\nconst ProductCard = ({\n  product,\n  addToCart\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CardContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_HighlightText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [product.quantity, \" unidades\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n      children: [\"Price: $\", product.price.toFixed(2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onClick: addToCart,\n      children: \"Add to Cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }, undefined);\n};\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c2;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUHJvZHVjdENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNGO0FBRWM7QUFDSTtBQUFBO0FBUXJELE1BQU1PLGFBQWEsR0FBR04sNkRBQVUsQ0FBQVEsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSw0SEFRL0I7QUFBQ0MsRUFBQSxHQVJJTCxhQUFhO0FBVXBCLE1BQU1NLFdBQXVDLEdBQUdBLENBQUM7RUFBRUMsT0FBTztFQUFFQztBQUFVLENBQUMsS0FBSztFQUN6RSxvQkFDRVQsNkRBQUEsQ0FBQ0MsYUFBYTtJQUFBUyxRQUFBLGdCQUNaViw2REFBQSxDQUFDSCw0REFBYTtNQUFBYSxRQUFBLEVBQUVGLE9BQU8sQ0FBQ0c7SUFBSTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBZ0IsQ0FBQyxlQUM3Q2YsNkRBQUEsQ0FBQ0YsOERBQWU7TUFBQVksUUFBQSxFQUFFRixPQUFPLENBQUNRO0lBQVc7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQWtCLENBQUMsZUFDeERmLDZEQUFBLENBQUNGLDhEQUFlO01BQUFZLFFBQUEsR0FBRUYsT0FBTyxDQUFDUyxRQUFRLEVBQUMsV0FBUztJQUFBO01BQUFMLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFpQixDQUFDLGVBQzlEZiw2REFBQTtNQUFBVSxRQUFBLEdBQU0sVUFBUSxFQUFDRixPQUFPLENBQUNVLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUFBO01BQUFQLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFPLENBQUMsZUFDL0NmLDZEQUFBLENBQUNKLHFEQUFNO01BQUN3QixPQUFPLEVBQUVYLFNBQVU7TUFBQUMsUUFBQSxFQUFDO0lBQVc7TUFBQUUsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQVEsQ0FBQztFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNuQyxDQUFDO0FBRXBCLENBQUM7QUFBQ00sR0FBQSxHQVZHZCxXQUF1QztBQVk1QywrREFBZUEsV0FBVyxFQUFDO0FBQUEsSUFBQUQsRUFBQSxFQUFBZSxHQUFBO0FBQUFDLFlBQUEsQ0FBQWhCLEVBQUE7QUFBQWdCLFlBQUEsQ0FBQUQsR0FBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUHJvZHVjdENhcmQudHN4PzE5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9hdG9tcy9CdXR0b25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2F0b21zL0ltYWdlJztcclxuaW1wb3J0IEhpZ2hsaWdodFRleHQgZnJvbSAnLi4vYXRvbXMvSGlnaGxpZ2h0VGV4dCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvblRleHQgZnJvbSAnLi4vYXRvbXMvRGVzY3JpcHRpb25UZXh0JztcclxuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuLi8uLi9kYXRhL2tleWJvYXJkJztcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcclxuICAgIHByb2R1Y3Q6IEtleWJvYXJkO1xyXG4gICAgYWRkVG9DYXJ0OiAoKSA9PiB2b2lkO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgYDtcclxuICBcclxuIGNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7IHByb2R1Y3QsIGFkZFRvQ2FydCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZENvbnRhaW5lcj5cclxuICAgICAgICA8SGlnaGxpZ2h0VGV4dD57cHJvZHVjdC5uYW1lfTwvSGlnaGxpZ2h0VGV4dD5cclxuICAgICAgICA8RGVzY3JpcHRpb25UZXh0Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb25UZXh0PlxyXG4gICAgICAgIDxEZXNjcmlwdGlvblRleHQ+e3Byb2R1Y3QucXVhbnRpdHl9IHVuaWRhZGVzPC9EZXNjcmlwdGlvblRleHQ+XHJcbiAgICAgICAgPHNwYW4+UHJpY2U6ICR7cHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpfTwvc3Bhbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZFRvQ2FydH0+QWRkIHRvIENhcnQ8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJ1dHRvbiIsIkhpZ2hsaWdodFRleHQiLCJEZXNjcmlwdGlvblRleHQiLCJqc3hERVYiLCJfanN4REVWIiwiQ2FyZENvbnRhaW5lciIsImRpdiIsIndpdGhDb25maWciLCJkaXNwbGF5TmFtZSIsImNvbXBvbmVudElkIiwiX2MiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJhZGRUb0NhcnQiLCJjaGlsZHJlbiIsIm5hbWUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwicHJpY2UiLCJ0b0ZpeGVkIiwib25DbGljayIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/ProductCard.tsx\n"));

/***/ })

});