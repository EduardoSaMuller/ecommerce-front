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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Button */ \"./src/components/atoms/Button.tsx\");\n/* harmony import */ var _atoms_HighlightText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/HighlightText */ \"./src/components/atoms/HighlightText.tsx\");\n/* harmony import */ var _atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/DescriptionText */ \"./src/components/atoms/DescriptionText.tsx\");\n/* harmony import */ var _atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/InfoText */ \"./src/components/atoms/InfoText.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\Eduardo Muller\\\\Desktop\\\\Nova pasta\\\\ecommerce-front\\\\src\\\\components\\\\molecules\\\\ProductCard.tsx\";\n\n\n\n\n\n\n\nconst CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"ProductCard__CardContainer\",\n  componentId: \"sc-1cnphpc-0\"\n})([\"border:1px solid #ddd;padding:10px;margin:10px;max-width:240px;border-radius:10px;display:flex;flex-direction:column;span:nth-of-type(1){font-size:0.75rem;height:0.625rem;line-height:1.375rem;font-weight:400;display:flex;-webkit-box-align:center;align-items:center;color:rgb(127,133,141);text-decoration:line-through;}\"]);\n_c = CardContainer;\nconst ProductCard = ({\n  product,\n  addToCart\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(CardContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_HighlightText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_DescriptionText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [product.quantity, \" unidades\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: [\" R$\", product.oldPrice.toFixed(2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: [\" R$\", product.newPrice.toFixed(2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_InfoText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: \" \\xC0 vista no PIX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onClick: addToCart,\n      children: \"Add to Cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 7\n  }, undefined);\n};\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c2;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUHJvZHVjdENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDRjtBQUVjO0FBQ0k7QUFDZDtBQUFBO0FBUXZDLE1BQU1RLGFBQWEsR0FBR1AsNkRBQVUsQ0FBQVMsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSxzVUFvQi9CO0FBQUNDLEVBQUEsR0FwQklMLGFBQWE7QUFzQnBCLE1BQU1NLFdBQXVDLEdBQUdBLENBQUM7RUFBRUMsT0FBTztFQUFFQztBQUFVLENBQUMsS0FBSztFQUN6RSxvQkFDRVQsNkRBQUEsQ0FBQ0MsYUFBYTtJQUFBUyxRQUFBLGdCQUNaViw2REFBQSxDQUFDSiw0REFBYTtNQUFBYyxRQUFBLEVBQUVGLE9BQU8sQ0FBQ0c7SUFBSTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBZ0IsQ0FBQyxlQUM3Q2YsNkRBQUEsQ0FBQ0gsOERBQWU7TUFBQWEsUUFBQSxFQUFFRixPQUFPLENBQUNRO0lBQVc7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQWtCLENBQUMsZUFDeERmLDZEQUFBLENBQUNILDhEQUFlO01BQUFhLFFBQUEsR0FBRUYsT0FBTyxDQUFDUyxRQUFRLEVBQUMsV0FBUztJQUFBO01BQUFMLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFpQixDQUFDLGVBQzlEZiw2REFBQSxDQUFDRix1REFBUTtNQUFBWSxRQUFBLEdBQUMsS0FBRyxFQUFDRixPQUFPLENBQUNVLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUFBO01BQUFQLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFXLENBQUMsZUFDckRmLDZEQUFBLENBQUNGLHVEQUFRO01BQUFZLFFBQUEsR0FBQyxLQUFHLEVBQUNGLE9BQU8sQ0FBQ1ksUUFBUSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQUE7TUFBQVAsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQVcsQ0FBQyxlQUNyRGYsNkRBQUEsQ0FBQ0YsdURBQVE7TUFBQVksUUFBQSxFQUFDO0lBQWU7TUFBQUUsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQVUsQ0FBQyxlQUNwQ2YsNkRBQUEsQ0FBQ0wscURBQU07TUFBQzBCLE9BQU8sRUFBRVosU0FBVTtNQUFBQyxRQUFBLEVBQUM7SUFBVztNQUFBRSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBUSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ25DLENBQUM7QUFFcEIsQ0FBQztBQUFDTyxHQUFBLEdBWkdmLFdBQXVDO0FBYzVDLCtEQUFlQSxXQUFXLEVBQUM7QUFBQSxJQUFBRCxFQUFBLEVBQUFnQixHQUFBO0FBQUFDLFlBQUEsQ0FBQWpCLEVBQUE7QUFBQWlCLFlBQUEsQ0FBQUQsR0FBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUHJvZHVjdENhcmQudHN4PzE5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9hdG9tcy9CdXR0b25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2F0b21zL0ltYWdlJztcclxuaW1wb3J0IEhpZ2hsaWdodFRleHQgZnJvbSAnLi4vYXRvbXMvSGlnaGxpZ2h0VGV4dCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvblRleHQgZnJvbSAnLi4vYXRvbXMvRGVzY3JpcHRpb25UZXh0JztcclxuaW1wb3J0IEluZm9UZXh0IGZyb20gXCIuLi9hdG9tcy9JbmZvVGV4dFwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4uLy4uL2RhdGEva2V5Ym9hcmQnO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xyXG4gICAgcHJvZHVjdDogS2V5Ym9hcmQ7XHJcbiAgICBhZGRUb0NhcnQ6ICgpID0+IHZvaWQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgc3BhbjpudGgtb2YtdHlwZSgxKXtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDAuNjI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTI3LCAxMzMsIDE0MSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfVxyXG4gIGA7XHJcbiAgXHJcbiBjb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoeyBwcm9kdWN0LCBhZGRUb0NhcnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmRDb250YWluZXI+XHJcbiAgICAgICAgPEhpZ2hsaWdodFRleHQ+e3Byb2R1Y3QubmFtZX08L0hpZ2hsaWdodFRleHQ+XHJcbiAgICAgICAgPERlc2NyaXB0aW9uVGV4dD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uVGV4dD5cclxuICAgICAgICA8RGVzY3JpcHRpb25UZXh0Pntwcm9kdWN0LnF1YW50aXR5fSB1bmlkYWRlczwvRGVzY3JpcHRpb25UZXh0PlxyXG4gICAgICAgIDxJbmZvVGV4dD4gUiR7cHJvZHVjdC5vbGRQcmljZS50b0ZpeGVkKDIpfTwvSW5mb1RleHQ+XHJcbiAgICAgICAgPEluZm9UZXh0PiBSJHtwcm9kdWN0Lm5ld1ByaWNlLnRvRml4ZWQoMil9PC9JbmZvVGV4dD5cclxuICAgICAgICA8SW5mb1RleHQ+IMOAIHZpc3RhIG5vIFBJWDwvSW5mb1RleHQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGRUb0NhcnR9PkFkZCB0byBDYXJ0PC9CdXR0b24+XHJcbiAgICAgIDwvQ2FyZENvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJCdXR0b24iLCJIaWdobGlnaHRUZXh0IiwiRGVzY3JpcHRpb25UZXh0IiwiSW5mb1RleHQiLCJqc3hERVYiLCJfanN4REVWIiwiQ2FyZENvbnRhaW5lciIsImRpdiIsIndpdGhDb25maWciLCJkaXNwbGF5TmFtZSIsImNvbXBvbmVudElkIiwiX2MiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJhZGRUb0NhcnQiLCJjaGlsZHJlbiIsIm5hbWUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5Iiwib2xkUHJpY2UiLCJ0b0ZpeGVkIiwibmV3UHJpY2UiLCJvbkNsaWNrIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/molecules/ProductCard.tsx\n"));

/***/ })

});