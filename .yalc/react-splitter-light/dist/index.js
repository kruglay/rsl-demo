(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSimpleSplitter"] = factory(require("react"));
	else
		root["ReactSimpleSplitter"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/splitter.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/splitter.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.splitter-container {
	position: relative;
	display: flex;
	height: 100%;
}

.pane-container {
	flex-shrink: 1;
	flex-grow: 1;
	overflow: hidden;
}

.runner-container {
	position: absolute;
	background-color: gainsboro;
}

.runner-horizontal {
	cursor: col-resize;
	height: 100%;
}

.runner-vertical {
	cursor: row-resize;
	width: 100%;
}

`, "",{"version":3,"sources":["webpack://./src/splitter.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,cAAc;CACd,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,WAAW;AACZ","sourcesContent":[".splitter-container {\n\tposition: relative;\n\tdisplay: flex;\n\theight: 100%;\n}\n\n.pane-container {\n\tflex-shrink: 1;\n\tflex-grow: 1;\n\toverflow: hidden;\n}\n\n.runner-container {\n\tposition: absolute;\n\tbackground-color: gainsboro;\n}\n\n.runner-horizontal {\n\tcursor: col-resize;\n\theight: 100%;\n}\n\n.runner-vertical {\n\tcursor: row-resize;\n\twidth: 100%;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/splitter.css":
/*!**************************!*\
  !*** ./src/splitter.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_splitter_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./splitter.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/splitter.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_splitter_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_splitter_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_splitter_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_splitter_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Pane.tsx":
/*!**********************!*\
  !*** ./src/Pane.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pane: () => (/* binding */ Pane)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Pane = (props) => {
    const { children, size, minSize, maxSize, index, paneRefs, mode, className } = props;
    const paneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (paneRef.current) {
            paneRefs.current[index] = paneRef.current;
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `pane-container ${className ? className : ''}`, ref: paneRef, style: {
            flexBasis: size,
            [mode === 'horizontal' ? 'minWidth' : 'minHeight']: minSize,
            [mode === 'horizontal' ? 'maxWidth' : 'maxHeight']: maxSize
        } }, children));
};
Pane.displayName = 'Pane';


/***/ }),

/***/ "./src/Runner.tsx":
/*!************************!*\
  !*** ./src/Runner.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Runner: () => (/* binding */ Runner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Runner = (props) => {
    const { runnerRefs, refContainer, startAt, minBorder, maxBorder, paneRefs, pairIndex: [index1, index2], setSizes, onResize, onDragStart, onDragEnd, fullSizeInUnits, discrete = false, modeParams, style, className } = props;
    const runnerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const insideBorders = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (runnerRef.current) {
            runnerRefs.current[index1] = runnerRef.current;
        }
    }, [index1, runnerRefs]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let rollback;
        const runner = runnerRef.current;
        const pane1 = paneRefs.current[index1];
        const pane2 = paneRefs.current[index2];
        if (runner && pane1 && pane2 && refContainer.current) {
            const containerSize = refContainer.current.getBoundingClientRect()[modeParams.size];
            const rate = containerSize / fullSizeInUnits;
            const pairSum = pane1.getBoundingClientRect()[modeParams.size] + pane2.getBoundingClientRect()[modeParams.size];
            const mouseMove = (event) => {
                if (refContainer.current) {
                    const splitterContainerOffset = refContainer.current.getBoundingClientRect()[modeParams.offset];
                    const positionInSplitterContainer = event[modeParams.axis] - splitterContainerOffset;
                    const position = event[modeParams.axis];
                    const pane1Offset = pane1.getBoundingClientRect()[modeParams.offset];
                    const flexBasis = discrete ? Math.round((positionInSplitterContainer) / (Number(discrete) * rate)) * (Number(discrete) * rate) - (pane1Offset - splitterContainerOffset) : position - pane1Offset;
                    if (positionInSplitterContainer >= minBorder && positionInSplitterContainer <= maxBorder) {
                        runner.style[modeParams.offset] = `${positionInSplitterContainer - runner.getBoundingClientRect()[modeParams.size] / 2}px`;
                        if (!discrete || (flexBasis + pane1Offset - splitterContainerOffset >= minBorder && flexBasis + pane1Offset - splitterContainerOffset <= maxBorder)) {
                            pane1.style.flexBasis = `${flexBasis}px`;
                            pane2.style.flexBasis = `${pairSum - (flexBasis)}px`;
                            let sum = 0;
                            const sizes = [];
                            const sizesInUnits = paneRefs.current.map((pane, ind, arr) => {
                                const size = pane.getBoundingClientRect()[modeParams.size];
                                sizes.push(size);
                                if (ind === arr.length - 1) {
                                    return fullSizeInUnits - sum;
                                }
                                const sizeInUnits = (size * fullSizeInUnits) / containerSize;
                                sum += sizeInUnits;
                                return sizeInUnits;
                            });
                            insideBorders.current = true;
                            onResize && onResize(sizesInUnits, sizes);
                        }
                        else {
                            let runnerOffset = Math.max(positionInSplitterContainer, minBorder);
                            if (positionInSplitterContainer >= maxBorder)
                                runnerOffset = maxBorder;
                            runner.style[modeParams.offset] = `${runnerOffset - runner.getBoundingClientRect()[modeParams.size] / 2}px`;
                        }
                    }
                }
            };
            const mouseUp = (event) => {
                document.removeEventListener('mouseup', mouseUp);
                document.removeEventListener('mousemove', mouseMove);
                if (paneRefs.current) {
                    setSizes((prev) => {
                        const pane1 = paneRefs.current[index1];
                        const pane2 = paneRefs.current[index2];
                        const newSizes = [...prev];
                        if (pane1 && pane2) {
                            newSizes[index1] = pane1.getBoundingClientRect()[modeParams.size];
                            newSizes[index2] = pane2.getBoundingClientRect()[modeParams.size];
                        }
                        return newSizes;
                    });
                    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, [index1, index2]);
                }
            };
            const mouseDown = (event) => {
                if (event.button === 0) {
                    event.preventDefault();
                    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, [index1, index2]);
                    document.addEventListener('mouseup', mouseUp);
                    document.addEventListener('mousemove', mouseMove);
                }
            };
            rollback = () => {
                return runner.removeEventListener('mousedown', mouseDown);
            };
            runner.addEventListener('mousedown', mouseDown);
        }
        return rollback;
    }, [discrete, maxBorder, minBorder, onResize, refContainer, setSizes]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `runner-container ${className}`, ref: (element) => {
            var _a;
            if (element) {
                element.style[modeParams.offset] = `${startAt - ((_a = element.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a[modeParams.size])}px`;
                runnerRef.current = element;
            }
        }, style: Object.assign(Object.assign({}, style), { [modeParams.offset]: startAt }) }));
};


/***/ }),

/***/ "./src/Splitter.tsx":
/*!**************************!*\
  !*** ./src/Splitter.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Splitter: () => (/* binding */ Splitter)
/* harmony export */ });
/* harmony import */ var _splitter_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splitter.css */ "./src/splitter.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Runner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Runner */ "./src/Runner.tsx");
/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pane */ "./src/Pane.tsx");




const MIN_SIZE = 10;
const Splitter = (props) => {
    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const paneRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const runnerRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [sizes, setSizes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { children, onResize, onDragStart, onDragEnd, resizable = true, discrete = false, mode = 'horizontal', actionOnContainerResize = false, runnerSize = 6, runnerStyle, paneClassName, splitterClassName, splitterStyle } = props;
    let { minSizes, maxSizes } = props;
    const childrenCount = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children);
    const initialSizes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (props.initialSizes) {
            return props.initialSizes.slice(0, childrenCount);
        }
        else {
            let sum = 0;
            const unit = 100 / childrenCount;
            const res = Array(childrenCount).fill(1).map((value, ind, arr) => {
                if (ind === arr.length - 1) {
                    return 100 - sum;
                }
                sum += unit;
                return unit;
            });
            return res;
        }
    }, [props.initialSizes]);
    const fullSizeInUnits = initialSizes.reduce((prev, cur) => prev + cur, 0);
    const modeParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        const res = {
            offset: 'left',
            size: 'width',
            axis: 'clientX',
        };
        if (mode === 'vertical') {
            res.offset = 'top';
            res.size = 'height';
            res.axis = 'clientY';
        }
        return res;
    }, [mode]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        let observer;
        if (refContainer.current) {
            const observerCallback = (entries) => {
                const currentContainerSize = entries[0].contentRect[modeParams.size];
                setSizes((prevSizes) => {
                    const fullPrevSize = prevSizes.reduce((acc, cur) => acc + cur, 0);
                    let offset = 0;
                    const units = [];
                    const res = prevSizes.map((prevSize, ind) => {
                        const size = (prevSize * currentContainerSize) / fullPrevSize;
                        units.push(prevSize * fullSizeInUnits / fullPrevSize);
                        const runner = runnerRefs.current[ind - 1];
                        if (runner) {
                            const shift = runner.getBoundingClientRect()[modeParams.size] / 2;
                            runner.style[modeParams.offset] = `${offset - shift}px`;
                        }
                        if (ind < prevSizes.length - 1)
                            offset += size;
                        return size;
                    });
                    if (actionOnContainerResize && onResize)
                        onResize(units, res);
                    return res;
                });
            };
            observer = new ResizeObserver(observerCallback);
            observer.observe(refContainer.current, {
                box: 'border-box',
            });
        }
        return () => observer === null || observer === void 0 ? void 0 : observer.disconnect();
    }, [modeParams]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        var _a;
        if (refContainer.current) {
            const containerSize = (_a = refContainer.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()[modeParams.size];
            const curSizes = initialSizes.map((initialSize, ind) => {
                const rate = containerSize / fullSizeInUnits;
                return rate * initialSize;
            });
            setSizes(curSizes);
        }
    }, [initialSizes, modeParams]);
    const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        const res = [];
        const minSizesPx = [];
        const maxSizesPx = [];
        let minSizesArr;
        let maxSizesArr;
        if (minSizes != null) {
            minSizesArr = Array.isArray(minSizes) ? minSizes : Array(childrenCount).fill(minSizes);
        }
        if (maxSizes != null) {
            maxSizesArr = Array.isArray(maxSizes) ? maxSizes : Array(childrenCount).fill(maxSizes);
        }
        react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, (child, ind) => {
            var _a, _b;
            const rate = initialSizes[ind] / fullSizeInUnits;
            const containerSize = (_b = (_a = refContainer.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b[modeParams.size];
            let paneMinSize = MIN_SIZE;
            let paneMaxSize = Number.MAX_VALUE;
            if (containerSize && (minSizesArr === null || minSizesArr === void 0 ? void 0 : minSizesArr[ind]) != null) {
                if (typeof minSizesArr[ind] === 'number') {
                    paneMinSize = (minSizesArr[ind] * containerSize) / fullSizeInUnits;
                }
                else {
                    paneMinSize = Number(minSizesArr[ind].replace('px', ''));
                }
            }
            if (containerSize && (maxSizesArr === null || maxSizesArr === void 0 ? void 0 : maxSizesArr[ind]) != null) {
                if (typeof maxSizesArr[ind] === 'number') {
                    paneMaxSize = (maxSizesArr[ind] * containerSize) / fullSizeInUnits;
                }
                else {
                    paneMaxSize = Number(maxSizesArr[ind].replace('px', ''));
                }
            }
            minSizesPx.push(paneMinSize);
            maxSizesPx.push(paneMaxSize);
            res.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Pane__WEBPACK_IMPORTED_MODULE_3__.Pane, { size: (sizes === null || sizes === void 0 ? void 0 : sizes[ind]) != null ? sizes[ind] : `${rate * 100}%`, minSize: paneMinSize, maxSize: paneMaxSize, paneRefs: paneRefs, key: `sp_${ind}`, mode: mode, index: ind, className: paneClassName }, child));
            if (sizes.length > 0 && ind > 0) {
                const lastPaneBeginsAt = sizes.slice(0, ind - 1).reduce((acc, cur) => acc + cur, 0);
                const lastPaneEndsAt = sizes.slice(0, ind).reduce((acc, cur) => acc + cur, 0);
                const currentPaneEndsAt = lastPaneEndsAt + sizes[ind];
                const minBorder = Math.max(lastPaneBeginsAt + minSizesPx[ind - 1], currentPaneEndsAt - maxSizesPx[ind]);
                const maxBorder = Math.min(lastPaneBeginsAt + maxSizesPx[ind - 1], currentPaneEndsAt - minSizesPx[ind]);
                const runnerResizable = Array.isArray(resizable) ? (resizable[ind - 1] && resizable[ind]) : resizable;
                let style = {
                    display: runnerResizable ? 'block' : 'none'
                };
                let runnerClassName;
                if (mode === 'horizontal') {
                    style.width = runnerSize;
                    runnerClassName = `runner-horizontal`;
                }
                else {
                    style.width = '100%';
                    style.height = runnerSize;
                    runnerClassName = 'runner-vertical';
                }
                res.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Runner__WEBPACK_IMPORTED_MODULE_2__.Runner, { setSizes: setSizes, key: `r_${ind}`, startAt: sizes.slice(0, ind).reduce((acc, cur) => acc + cur, 0), pairIndex: [ind - 1, ind], onDragStart: onDragStart, onDragEnd: onDragEnd, paneRefs: paneRefs, minBorder: minBorder, maxBorder: maxBorder, refContainer: refContainer, onResize: onResize, fullSizeInUnits: fullSizeInUnits, runnerRefs: runnerRefs, discrete: discrete, modeParams: modeParams, style: Object.assign(Object.assign({}, style), runnerStyle), className: `${runnerClassName} ${props.runnerClassName ? props.runnerClassName : ''}` }));
            }
        });
        return res;
    }, [children, fullSizeInUnits, maxSizes, minSizes, sizes, initialSizes, modeParams]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: `splitter-container ${splitterClassName ? splitterClassName : ''}`, ref: refContainer, style: Object.assign({ flexDirection: mode === 'horizontal' ? 'row' : 'column' }, splitterStyle) }, content));
};


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pane: () => (/* reexport safe */ _Pane__WEBPACK_IMPORTED_MODULE_0__.Pane),
/* harmony export */   Runner: () => (/* reexport safe */ _Runner__WEBPACK_IMPORTED_MODULE_1__.Runner),
/* harmony export */   Splitter: () => (/* reexport safe */ _Splitter__WEBPACK_IMPORTED_MODULE_2__.Splitter)
/* harmony export */ });
/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pane */ "./src/Pane.tsx");
/* harmony import */ var _Runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Runner */ "./src/Runner.tsx");
/* harmony import */ var _Splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Splitter */ "./src/Splitter.tsx");




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map