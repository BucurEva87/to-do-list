/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --blue: #2e8ae6;\\n  --gray: #222;\\n}\\n\\nhtml {\\n  font-size: 10px;\\n}\\n\\nbody {\\n  width: 32rem;\\n  max-width: 76.8rem;\\n  margin: 0 auto;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\\n}\\n\\nheader {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nheader #logo {\\n  padding: 1rem;\\n  text-align: center;\\n  margin-bottom: 4rem;\\n}\\n\\nheader #logo svg {\\n  width: 5rem;\\n  height: 5rem;\\n  margin: 0 auto;\\n  fill: white;\\n  background-color: var(--blue);\\n  padding: 1rem;\\n  border-radius: 0.5rem;\\n}\\n\\nheader #logo h1 {\\n  font-size: 3.6rem;\\n  color: var(--gray);\\n}\\n\\n.listContainer {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n\\n.listContainer ul {\\n  list-style-type: none;\\n  width: 100%;\\n}\\n\\n#refresh {\\n  top: 1.7rem;\\n}\\n\\n#refresh svg,\\n.listContainer .task svg,\\n#addNewTask a {\\n  width: 2rem;\\n  height: 2rem;\\n  fill: #ccc;\\n}\\n\\n#addNewTask a {\\n  text-align: center;\\n  margin-top: 0.5rem;\\n}\\n\\n#addNewTask p[contenteditable] {\\n  min-width: 1rem;\\n}\\n\\n#refresh[data-items]::after {\\n  content: attr(data-items);\\n  position: absolute;\\n  top: -30%;\\n  left: 40%;\\n  width: 1.7rem;\\n  height: 1.7rem;\\n  background-color: red;\\n  border-radius: 50%;\\n  color: white;\\n  border: 0.2rem solid white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.listContainer li {\\n  display: flex;\\n  padding: 1rem;\\n  border: 0.1rem solid #ddd;\\n  align-items: center;\\n  position: relative;\\n  height: 5rem;\\n}\\n\\n.listContainer li a:last-child,\\n.listContainer li a.trash-icon {\\n  position: absolute;\\n  right: 1rem;\\n  cursor: pointer;\\n}\\n\\n.listContainer .task.focused {\\n  background-color: #e6e5b1;\\n}\\n\\n.listContainer .task button {\\n  margin-right: 1rem;\\n  background-color: transparent;\\n  outline: none;\\n  padding: 0;\\n  border: 0.2rem solid #c1c1c3;\\n  color: transparent;\\n  width: 1.6rem;\\n  height: 1.6rem;\\n  border-radius: 0.2rem;\\n  cursor: pointer;\\n}\\n\\n.listContainer .task button.pressed {\\n  border: transparent;\\n}\\n\\n.listContainer .task button svg {\\n  margin: -0.2rem;\\n  width: 1rem;\\n  height: 1rem;\\n  fill: transparent;\\n}\\n\\n.listContainer .task button.pressed svg {\\n  fill: var(--blue);\\n}\\n\\n.listContainer .task button.pressed + p:not(:focus) {\\n  text-decoration: line-through;\\n  font-style: italic;\\n  color: var(--gray);\\n}\\n\\n.listContainer .task svg.drag-anchor {\\n  cursor: move;\\n}\\n\\n.listContainer p[contenteditable] {\\n  outline: 0px solid transparent;\\n}\\n\\n.listContainer p[contenteditable]:empty:not(:focus)::before {\\n  content: attr(data-placeholder);\\n  font-style: italic;\\n  font-weight: 300;\\n}\\n\\n#refresh:hover svg,\\n.listContainer li a:hover svg {\\n  fill: var(--gray);\\n}\\n\\n#footer {\\n  height: 5rem;\\n  border: none;\\n  color: #888;\\n  background-color: #eee;\\n  cursor: pointer;\\n}\\n\\n#footer:hover {\\n  text-decoration: underline;\\n  color: var(--gray);\\n}\\n\\n#refresh.focus {\\n  animation: swirl 2s;\\n}\\n\\n@keyframes swirl {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(-720deg);\\n  }\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _modules_Tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tasks.js */ \"./src/modules/Tasks.js\");\n/* harmony import */ var _modules_taskObjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/taskObjects.js */ \"./src/modules/taskObjects.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\nconst tasks = new _modules_Tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_modules_taskObjects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst list = _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('.listContainer ul');\nconst addTask = _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#addNewTask');\nconst addTaskIcon = _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#addNewTask object');\nconst deleteButton = _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#footer');\n\n// Completing tasks\nlist.addEventListener('click', (e) => {\n  const button = e.target.closest('button');\n\n  if (!button) return;\n\n  button.classList.toggle('pressed');\n\n  const index = +button.parentElement.dataset.tabIndex;\n  const task = tasks.tasks.find((t) => t.index === index);\n  task.completed = !task.completed;\n});\n\n// Adding a new task\nconst createNewTask = (target) => {\n  const task = {\n    description: target.textContent,\n    completed: false,\n    index: Math.max(...tasks.tasks.map((t) => t.index)) + 1,\n  };\n  tasks.addTask(task);\n  target.textContent = '';\n  target.blur();\n};\n\naddTask.addEventListener('keyup', (e) => {\n  const keyCode = e.which || e.keyCode;\n\n  if (keyCode == 13) {\n    createNewTask(e.target);\n  }\n});\naddTaskIcon.addEventListener('click', (e) => {\n  e.preventDefault();\n\n  const p = e.target.parentElement.previousElementSibling;\n\n  if (!p.textContent) return;\n\n  createNewTask(p);\n});\n\n// Show/hide trash icon when a task is focused\nlist.addEventListener('click', (e) => {\n  const { target } = e;\n\n  if (target.tagName !== 'P' || !target.closest('li.task')) return;\n\n  _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('.trash-icon', target.parentElement).classList.remove('hidden');\n  _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('a:last-child', target.parentElement).classList.add('hidden');\n  target.closest('li.task').classList.add('focused');\n});\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('li.task p').forEach((p) => {\n  p.addEventListener('blur', (e) => {\n    e.preventDefault();\n\n    const { target } = e;\n\n    if (target.tagName !== 'P' || !target.closest('li.task')) return;\n\n    target.closest('li.task').classList.remove('focused');\n    setTimeout(() => {\n      _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('.trash-icon', target.parentElement).classList.add('hidden');\n      _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('a:last-child', target.parentElement).classList.remove('hidden');\n    }, 100);\n  });\n});\n\n// Delete a single task\nlist.addEventListener('click', (e) => {\n  e.preventDefault();\n\n  const { target } = e;\n\n  if (!target.closest('a')?.classList.contains('trash-icon')) return;\n\n  const li = target.closest('li.task');\n\n  li.remove();\n  tasks.remove(+li.dataset.tabIndex);\n});\n\n// Delete all selected tasks\ndeleteButton.addEventListener('click', (e) => {\n  _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('button.pressed').forEach((b) => {\n    const li = b.closest('li.task');\n\n    li.remove();\n    tasks.remove(+li.dataset.tabIndex);\n  });\n});\n\n// Apperently we DO have a problem with WebKit browsers when it comes to contenteditable elements\n// receiving focus when the mouse is clicked on the same line the element is, but not on the element itself\nlist.addEventListener('click', (e) => {\n  // I'm getting bored of setting the same event over and over again\n  const { target } = e;\n\n  if (\n    target.tagName !== 'P' ||\n    !target.closest('li.task') ||\n    !target.contentEditable\n  )\n    return;\n\n  target.contentEditable = true;\n  target.focus();\n});\nlist.addEventListener(\n  'blur',\n  (e) => {\n    const { target } = e;\n\n    if (\n      target.tagName !== 'P' ||\n      !target.closest('li.task') ||\n      !target.contentEditable\n    )\n      return;\n\n    target.contentEditable = false;\n  },\n  true\n);\n\n// Rename a task\nlist.addEventListener('keypress', (e) => {\n  const keyCode = e.which || e.keyCode;\n  const { target } = e;\n\n  if (!target.contentEditable) return;\n\n  if (keyCode == 13) {\n    const li = target.closest('li.task');\n    const index = +li.dataset.tabIndex;\n    const task = tasks.tasks.find((t) => t.index === index);\n    task.description = target.textContent;\n    li.classList.remove('focused');\n    target.blur();\n  }\n});\n\n// Delete all tasks when clicking the refresh arrows\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#refresh').addEventListener('click', (e) => {\n  e.target.closest('a').classList.add('focus');\n});\n\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#refresh').addEventListener('animationend', (e) => {\n  e.target.closest('a').classList.remove('focus');\n\n  _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('li.task', list).forEach((li) => {\n    li.remove();\n    tasks.remove(li.dataset.tabIndex);\n  });\n});\n\n// Drag and drop\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Tasks.js":
/*!******************************!*\
  !*** ./src/modules/Tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n\n\nclass Tasks {\n  tasks = [];\n\n  constructor(tasks) {\n    tasks?.sort((a, b) => a.index - b.index).forEach((t) => this.addTask(t));\n  }\n\n  addTask(task) {\n    this.tasks.push(task);\n    this.appendToList(task);\n  }\n\n  appendToList(task) {\n    const li = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'li',\n      class: 'task',\n      draggable: true,\n      data: { tabIndex: task.index },\n    });\n    const button = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'button',\n      class: task.completed ? 'pressed' : null,\n    });\n    let svg = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'svg',\n      class: 'checkbox',\n    });\n    svg.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'use',\n        src: '../public/img/icons.svg#icon-check',\n      })\n    );\n    button.appendChild(svg);\n    li.appendChild(button);\n    li.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'p',\n        contenteditable: true,\n        textContent: task.description,\n      })\n    );\n    let a = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'a',\n      href: '#',\n      class: ['trash-icon', 'hidden'],\n    });\n    svg = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'svg',\n      class: 'checkbox',\n    });\n    svg.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'use',\n        src: '../public/img/icons.svg#icon-trash',\n      })\n    );\n    a.appendChild(svg);\n    li.appendChild(a);\n    a = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'a',\n      href: '#',\n    });\n    svg = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'svg',\n      class: ['checkbox', 'drag-anchor'],\n    });\n    svg.appendChild(\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n        tagName: 'use',\n        src: '../public//img/icons.svg#icon-more-vert',\n      })\n    );\n    a.appendChild(svg);\n    li.appendChild(a);\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('.listContainer ul').appendChild(li);\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#refresh').dataset.items = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('.task').length;\n  }\n\n  remove(index) {\n    const taskIndex = this.tasks.findIndex((t) => t.index === index);\n\n    this.tasks.splice(taskIndex, 1);\n\n    const badge = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qs('#refresh');\n    const tasks = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('.task').length;\n\n    if (tasks) {\n      badge.dataset.items = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qsa('.task').length;\n    } else {\n      delete badge.dataset.items;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Tasks.js?");

/***/ }),

/***/ "./src/modules/taskObjects.js":
/*!************************************!*\
  !*** ./src/modules/taskObjects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n  {\n    description: `Wash the car`,\n    completed: false,\n    index: 1,\n  },\n  {\n    description: 'Feed the cat',\n    completed: false,\n    index: 0,\n  },\n  {\n    description: 'Go to the grocery store',\n    completed: true,\n    index: 2,\n  },\n  {\n    description: 'Create a minimalist todo list',\n    completed: false,\n    index: 3,\n  },\n]);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/taskObjects.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createElement: (obj) => {\n    let element;\n\n    if (obj.tagName && ['svg', 'use'].includes(obj.tagName.toLowerCase())) {\n      element = document.createElementNS(\n        'http://www.w3.org/2000/svg',\n        obj.tagName\n      );\n      if (obj.tagName.toLowerCase() === 'use' && obj.src) {\n        element.setAttributeNS(\n          'http://www.w3.org/1999/xlink',\n          'xlink:href',\n          obj.src\n        );\n      }\n    } else {\n      element = document.createElement(obj.tagName ? obj.tagName : 'div');\n    }\n\n    delete obj.tagName;\n\n    // Itterate through each property of the obj and set it as a\n    // property of the element\n    Object.entries(obj).forEach(([prop, value]) => {\n      // Property is a class or a collection of classes\n      if (prop === 'class') {\n        if (typeof value === 'object' && value !== null) {\n          element.classList.add(...value.filter((v) => v));\n        } else {\n          if (value) {\n            element.classList.add(value);\n          }\n        }\n      } else if (prop === 'data' && typeof value === 'object') {\n        Object.entries(value).forEach(([prop, value]) => {\n          element.dataset[prop] = value;\n        });\n      } else {\n        if (typeof value === 'boolean') {\n          element.setAttribute(prop, value);\n        } else {\n          element[prop] = value;\n        }\n      }\n    });\n\n    return element;\n  },\n\n  qs: (selector = '*', element = document) => element.querySelector(selector),\n\n  qsa: (selector = '*', element = document) => [\n    ...element.querySelectorAll(selector),\n  ],\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;