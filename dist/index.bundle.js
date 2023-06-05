"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./namef.ttf */ "./src/namef.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./mainf.otf */ "./src/mainf.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: whitesmoke;
}

.content {
    display: grid;
    height: 100vh;
}

.content.home {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr 0.5fr;
    grid-template-areas: 
        "header-bar header-bar"
        "img1 img2"
        "about about"
        "footer footer";
}

.content.menu {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: 
        "header-bar header-bar"
        "menu menu"
        "footer footer";
}

.content.contact {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: 
        "header-bar header-bar"
        "info info"
        "footer footer";
}

.header-bar {
    grid-area: header-bar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
}

.logo {
    width: 50px;
    height: 50px;
    margin: 20px;
}

.navItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 20px;
}

li {
    list-style: none;
    color: #ffffff;
    font-size: 20px;
    position: relative;
    display: inline-block;
    padding-bottom: 5px;
    font-family: 'main';
}
  
li::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: wheat;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}
  
li:hover::after {
    transform: scaleX(1);
}

.img1,
.img2 {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.2;
}

.nameContainer {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

@font-face {
    font-family: 'name';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

h1 {
    color: black;
    font-size: 50px;
    font-weight: 700;
    font-family: 'name';
    margin-bottom: 20px;
}

h2 {
    color: #000000;
    font-size: 30px;
    font-family: 'main';
}


@font-face {
    font-family: 'main';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.about {
    grid-area: about;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    font-family: 'main';
    font-size: 20px;
    height: 400px;
}

.footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #000000;
    height: 10px;
}

.footerText
{
    color: #ffffff;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,uCAAuC;IACvC;;;;uBAImB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,mCAAmC;IACnC;;;uBAGmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,mCAAmC;IACnC;;;uBAGmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,4CAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;AACvB;;;AAGA;IACI,mBAAmB;IACnB,4CAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;;IAEI,cAAc;AAClB","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    background-color: whitesmoke;\n}\n\n.content {\n    display: grid;\n    height: 100vh;\n}\n\n.content.home {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.5fr 1fr 1fr 0.5fr;\n    grid-template-areas: \n        \"header-bar header-bar\"\n        \"img1 img2\"\n        \"about about\"\n        \"footer footer\";\n}\n\n.content.menu {\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.5fr 1fr 0.5fr;\n    grid-template-areas: \n        \"header-bar header-bar\"\n        \"menu menu\"\n        \"footer footer\";\n}\n\n.content.contact {\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.5fr 1fr 0.5fr;\n    grid-template-areas: \n        \"header-bar header-bar\"\n        \"info info\"\n        \"footer footer\";\n}\n\n.header-bar {\n    grid-area: header-bar;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    background-color: #000000;\n}\n\n.logo {\n    width: 50px;\n    height: 50px;\n    margin: 20px;\n}\n\n.navItems {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n    margin: 20px;\n}\n\nli {\n    list-style: none;\n    color: #ffffff;\n    font-size: 20px;\n    position: relative;\n    display: inline-block;\n    padding-bottom: 5px;\n    font-family: 'main';\n}\n  \nli::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background-color: wheat;\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 0.3s ease;\n}\n  \nli:hover::after {\n    transform: scaleX(1);\n}\n\n.img1,\n.img2 {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.2;\n}\n\n.nameContainer {\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n@font-face {\n    font-family: 'name';\n    src: url('./namef.ttf');\n}\n\nh1 {\n    color: black;\n    font-size: 50px;\n    font-weight: 700;\n    font-family: 'name';\n    margin-bottom: 20px;\n}\n\nh2 {\n    color: #000000;\n    font-size: 30px;\n    font-family: 'main';\n}\n\n\n@font-face {\n    font-family: 'main';\n    src: url('./mainf.otf');\n}\n\n.about {\n    grid-area: about;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n    font-family: 'main';\n    font-size: 20px;\n    height: 400px;\n}\n\n.footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n    background-color: #000000;\n    height: 10px;\n}\n\n.footerText\n{\n    color: #ffffff;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const contactPage = () => {
    const content = document.querySelector('.content');
    content.classList.remove('home');
    content.classList.add('contact');

    content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_1__.header)());
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'Contact';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactInfoPhone = document.createElement('p');
    contactInfoPhone.classList.add('contact-info-phone');
    contactInfoPhone.textContent = 'Phone: +1 (555) 123-4567';

    const contactInfoEmail = document.createElement('p');
    contactInfoEmail.classList.add('contact-info-email');
    contactInfoEmail.textContent = 'Email: info@opulentcuisine.com ';

    const contactInfoAddress = document.createElement('p');
    contactInfoAddress.classList.add('contact-info-address');
    contactInfoAddress.textContent = 'Address: 123 Luxury Avenue, Cityville';

    const contactInfoSocial = document.createElement('div');
    contactInfoSocial.classList.add('contact-info-social');

    const contactInfoSocialInsta = document.createElement('p');
    contactInfoSocialInsta.classList.add('contact-info-social-insta');
    contactInfoSocialInsta.textContent = 'Instagram: @opulentcuisine';

    const contactInfoSocialFB = document.createElement('p');
    contactInfoSocialFB.classList.add('contact-info-social-fb');
    contactInfoSocialFB.textContent = 'Facebook: /opulentcuisine';

    const contactInfoSocialTwitter = document.createElement('p');
    contactInfoSocialTwitter.classList.add('contact-info-social-twitter');
    contactInfoSocialTwitter.textContent = 'Twitter: @opulentcuisine';

    contactInfoSocial.appendChild(contactInfoSocialInsta);
    contactInfoSocial.appendChild(contactInfoSocialFB);
    contactInfoSocial.appendChild(contactInfoSocialTwitter);

    contactInfo.appendChild(contactInfoPhone);
    contactInfo.appendChild(contactInfoEmail);
    contactInfo.appendChild(contactInfoAddress);
    contactInfo.appendChild(contactInfoSocial);

    contact.appendChild(contactTitle);
    contact.appendChild(contactInfo);

    content.appendChild(contact);
    content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_1__.footer)());

    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img1.png */ "./src/img1.png");
/* harmony import */ var _img2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img2.png */ "./src/img2.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







const homePageLoader = () => {
    const content = document.querySelector('.content');

    if (content.classList.contains('menu') || content.classList.contains('contact')) {
        content.classList.remove('menu', 'contact');
        content.classList.add('home');
    }
    content.innerHTML = '';
    content.appendChild(header());
    content.appendChild(name());
    content.appendChild(img1Pic());
    content.appendChild(img2Pic());
    content.appendChild(about());
    content.appendChild(footer());
}

const menuPageLoader = () => {
    const content = document.querySelector('.content');
    if (content.classList.contains('home') || content.classList.contains('contact')) {
        content.classList.remove('home', 'contact');
        content.classList.add('menu');
    }
    content.innerHTML = '';
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
}

const contactPageLoader = () => {
    const content = document.querySelector('.content');
    if (content.classList.contains('home') || content.classList.contains('menu')) {
        content.classList.remove('home', 'menu');
        content.classList.add('contact');
    }
    content.innerHTML = '';
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
}

const content = document.createElement('div');
content.classList.add('content', 'home');

const logoImg = () => {
    const logoImg = document.createElement('img');
    logoImg.src = _logo_png__WEBPACK_IMPORTED_MODULE_3__;
    logoImg.classList.add('logo');
    logoImg.addEventListener('click', homePageLoader);

    return logoImg;
}

const navBar = () => {
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const navItems = document.createElement('ul');
    navItems.classList.add('navItems');

    const menu = document.createElement('li');
    menu.classList.add('menu');
    menu.textContent = 'Menu';
    menu.addEventListener('click', menuPageLoader);

    const contact = document.createElement('li');
    contact.classList.add('contact');
    contact.textContent = 'Contact';
    contact.addEventListener('click', contactPageLoader);

    navItems.appendChild(menu);
    navItems.appendChild(contact);

    navBar.appendChild(navItems);

    return navBar;
}


const header = () => {
    const header = document.createElement('div');
    header.classList.add('header-bar');

    header.appendChild(logoImg());
    header.appendChild(navBar());
    return header;
}

content.appendChild(header());

const name = () => {
    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = 'Opulent Cuisine';

    const subtitle = document.createElement('h2');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Immerse yourself in an atmosphere of opulence and elegance as you savor our exquisite creations.';

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('nameContainer');

    nameContainer.appendChild(name);
    nameContainer.appendChild(subtitle);

    return nameContainer;
}

const img1Pic = () => {
    const img1Pic = document.createElement('img');
    img1Pic.src = _img1_png__WEBPACK_IMPORTED_MODULE_1__;
    img1Pic.classList.add('img1');

    return img1Pic;
}

const img2Pic = () => {

    const img2Pic = document.createElement('img');
    img2Pic.src = _img2_png__WEBPACK_IMPORTED_MODULE_2__;
    img2Pic.classList.add('img2');

    return img2Pic;
}

content.appendChild(name());
content.appendChild(img1Pic());
content.appendChild(img2Pic());
    
const about = () => {
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutText = document.createElement('p');
    aboutText.classList.add('aboutText');
    aboutText.textContent = 'Opulent Cuisine is a fine dining restaurant located in the heart of the city. We offer a wide variety of dishes, ranging from traditional to modern cuisine. Our chefs are experts in their field and will make sure that you have an unforgettable experience. Come visit us today!';

    about.appendChild(aboutText);

    return about;
}

content.appendChild(about());

const footer = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.classList.add('footerText');
    footerText.textContent = '© 2021 Opulent Cuisine';

    footer.appendChild(footerText);

    return footer;
}

content.appendChild(footer());

document.body.appendChild(content);




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const menuPage = () => {
    const content = document.querySelector('.content');

    content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_1__.header)());
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');

    const menuItem1Title = document.createElement('h2');
    menuItem1Title.classList.add('menu-item-title');
    menuItem1Title.textContent = 'Chicken';

    const menuItem1Desc = document.createElement('p');
    menuItem1Desc.classList.add('menu-item-desc');
    menuItem1Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem1Price = document.createElement('p');
    menuItem1Price.classList.add('menu-item-price');
    menuItem1Price.textContent = '$10';

    menuItem1.appendChild(menuItem1Title);
    menuItem1.appendChild(menuItem1Desc);
    menuItem1.appendChild(menuItem1Price);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');

    const menuItem2Title = document.createElement('h2');
    menuItem2Title.classList.add('menu-item-title');
    menuItem2Title.textContent = 'Beef';

    const menuItem2Desc = document.createElement('p');
    menuItem2Desc.classList.add('menu-item-desc');
    menuItem2Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem2Price = document.createElement('p');
    menuItem2Price.classList.add('menu-item-price');
    menuItem2Price.textContent = '$15';

    menuItem2.appendChild(menuItem2Title);
    menuItem2.appendChild(menuItem2Desc);
    menuItem2.appendChild(menuItem2Price);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');

    const menuItem3Title = document.createElement('h2');
    menuItem3Title.classList.add('menu-item-title');
    menuItem3Title.textContent = 'Pork';

    const menuItem3Desc = document.createElement('p');
    menuItem3Desc.classList.add('menu-item-desc');
    menuItem3Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem3Price = document.createElement('p');
    menuItem3Price.classList.add('menu-item-price');
    menuItem3Price.textContent = '$12';

    menuItem3.appendChild(menuItem3Title);
    menuItem3.appendChild(menuItem3Desc);
    menuItem3.appendChild(menuItem3Price);

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');

    const menuItem4Title = document.createElement('h2');
    menuItem4Title.classList.add('menu-item-title');
    menuItem4Title.textContent = 'Fish';

    const menuItem4Desc = document.createElement('p');
    menuItem4Desc.classList.add('menu-item-desc');
    menuItem4Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem4Price = document.createElement('p');
    menuItem4Price.classList.add('menu-item-price');
    menuItem4Price.textContent = '$12';

    menuItem4.appendChild(menuItem4Title);
    menuItem4.appendChild(menuItem4Desc);
    menuItem4.appendChild(menuItem4Price);

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menu-item');

    const menuItem5Title = document.createElement('h2');
    menuItem5Title.classList.add('menu-item-title');
    menuItem5Title.textContent = 'Vegetarian';

    const menuItem5Desc = document.createElement('p');
    menuItem5Desc.classList.add('menu-item-desc');
    menuItem5Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem5Price = document.createElement('p');
    menuItem5Price.classList.add('menu-item-price');
    menuItem5Price.textContent = '$10';

    menuItem5.appendChild(menuItem5Title);
    menuItem5.appendChild(menuItem5Desc);
    menuItem5.appendChild(menuItem5Price);

    const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menu-item');

    const menuItem6Title = document.createElement('h2');
    menuItem6Title.classList.add('menu-item-title');
    menuItem6Title.textContent = 'Vegan';

    const menuItem6Desc = document.createElement('p');
    menuItem6Desc.classList.add('menu-item-desc');
    menuItem6Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem6Price = document.createElement('p');
    menuItem6Price.classList.add('menu-item-price');
    menuItem6Price.textContent = '$10';

    menuItem6.appendChild(menuItem6Title);
    menuItem6.appendChild(menuItem6Desc);
    menuItem6.appendChild(menuItem6Price);

    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuItem6);

    menu.appendChild(menuTitle);
    menu.appendChild(menuItems);

    content.appendChild(menu);
    content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_1__.footer)());

    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/img1.png":
/*!**********************!*\
  !*** ./src/img1.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f28b79ad5c395129ef74.png";

/***/ }),

/***/ "./src/img2.png":
/*!**********************!*\
  !*** ./src/img2.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84c51f1b151a790191b7.png";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84f83c06ed901ab388eb.png";

/***/ }),

/***/ "./src/mainf.otf":
/*!***********************!*\
  !*** ./src/mainf.otf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25653f68593b66e7a094.otf";

/***/ }),

/***/ "./src/namef.ttf":
/*!***********************!*\
  !*** ./src/namef.ttf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64de5222f91200c4d728.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFXO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzQ0FBSTtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQUk7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixzQ0FBSTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktIO0FBQ3FCOztBQUUxQztBQUNBOztBQUVBLHdCQUF3QixpREFBTTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGlEQUFNOztBQUU5QjtBQUNBOztBQUVBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbmFtZWYudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9tYWluZi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGVudC5ob21lIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMWZyIDAuNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImhlYWRlci1iYXIgaGVhZGVyLWJhclwiXG4gICAgICAgIFwiaW1nMSBpbWcyXCJcbiAgICAgICAgXCJhYm91dCBhYm91dFwiXG4gICAgICAgIFwiZm9vdGVyIGZvb3RlclwiO1xufVxuXG4uY29udGVudC5tZW51IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJoZWFkZXItYmFyIGhlYWRlci1iYXJcIlxuICAgICAgICBcIm1lbnUgbWVudVwiXG4gICAgICAgIFwiZm9vdGVyIGZvb3RlclwiO1xufVxuXG4uY29udGVudC5jb250YWN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJoZWFkZXItYmFyIGhlYWRlci1iYXJcIlxuICAgICAgICBcImluZm8gaW5mb1wiXG4gICAgICAgIFwiZm9vdGVyIGZvb3RlclwiO1xufVxuXG4uaGVhZGVyLWJhciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXItYmFyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubmF2SXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xufVxuICBcbmxpOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbiAgXG5saTpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG4uaW1nMSxcbi5pbWcyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5uYW1lQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICduYW1lJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuaDEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogJ25hbWUnO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdtYWluJztcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4uYWJvdXQge1xuICAgIGdyaWQtYXJlYTogYWJvdXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdtYWluJztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5mb290ZXJUZXh0XG57XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkM7Ozs7dUJBSW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQzs7O3VCQUdtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkM7Ozt1QkFHbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudC5ob21lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAxZnIgMC41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImhlYWRlci1iYXIgaGVhZGVyLWJhclxcXCJcXG4gICAgICAgIFxcXCJpbWcxIGltZzJcXFwiXFxuICAgICAgICBcXFwiYWJvdXQgYWJvdXRcXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5jb250ZW50Lm1lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMC41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImhlYWRlci1iYXIgaGVhZGVyLWJhclxcXCJcXG4gICAgICAgIFxcXCJtZW51IG1lbnVcXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5jb250ZW50LmNvbnRhY3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMC41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImhlYWRlci1iYXIgaGVhZGVyLWJhclxcXCJcXG4gICAgICAgIFxcXCJpbmZvIGluZm9cXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXItYmFyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ubmF2SXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xcbn1cXG4gIFxcbmxpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcbiAgXFxubGk6aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5pbWcxLFxcbi5pbWcyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLm5hbWVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ25hbWUnO1xcbiAgICBzcmM6IHVybCgnLi9uYW1lZi50dGYnKTtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6ICduYW1lJztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xcbn1cXG5cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluJztcXG4gICAgc3JjOiB1cmwoJy4vbWFpbmYub3RmJyk7XFxufVxcblxcbi5hYm91dCB7XFxuICAgIGdyaWQtYXJlYTogYWJvdXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi5mb290ZXJUZXh0XFxue1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aGVhZGVyLCBmb290ZXJ9IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9QaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0SW5mb1Bob25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mby1waG9uZScpO1xuICAgIGNvbnRhY3RJbmZvUGhvbmUudGV4dENvbnRlbnQgPSAnUGhvbmU6ICsxICg1NTUpIDEyMy00NTY3JztcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEluZm9FbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8tZW1haWwnKTtcbiAgICBjb250YWN0SW5mb0VtYWlsLnRleHRDb250ZW50ID0gJ0VtYWlsOiBpbmZvQG9wdWxlbnRjdWlzaW5lLmNvbSAnO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9BZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RJbmZvQWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8tYWRkcmVzcycpO1xuICAgIGNvbnRhY3RJbmZvQWRkcmVzcy50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiAxMjMgTHV4dXJ5IEF2ZW51ZSwgQ2l0eXZpbGxlJztcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvU29jaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm9Tb2NpYWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvLXNvY2lhbCcpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9Tb2NpYWxJbnN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbEluc3RhLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mby1zb2NpYWwtaW5zdGEnKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbEluc3RhLnRleHRDb250ZW50ID0gJ0luc3RhZ3JhbTogQG9wdWxlbnRjdWlzaW5lJztcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvU29jaWFsRkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEluZm9Tb2NpYWxGQi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8tc29jaWFsLWZiJyk7XG4gICAgY29udGFjdEluZm9Tb2NpYWxGQi50ZXh0Q29udGVudCA9ICdGYWNlYm9vazogL29wdWxlbnRjdWlzaW5lJztcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvU29jaWFsVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbFR3aXR0ZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvLXNvY2lhbC10d2l0dGVyJyk7XG4gICAgY29udGFjdEluZm9Tb2NpYWxUd2l0dGVyLnRleHRDb250ZW50ID0gJ1R3aXR0ZXI6IEBvcHVsZW50Y3Vpc2luZSc7XG5cbiAgICBjb250YWN0SW5mb1NvY2lhbC5hcHBlbmRDaGlsZChjb250YWN0SW5mb1NvY2lhbEluc3RhKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbC5hcHBlbmRDaGlsZChjb250YWN0SW5mb1NvY2lhbEZCKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbC5hcHBlbmRDaGlsZChjb250YWN0SW5mb1NvY2lhbFR3aXR0ZXIpO1xuXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9QaG9uZSk7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9FbWFpbCk7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEluZm9BZGRyZXNzKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0SW5mb1NvY2lhbCk7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGltZzEgZnJvbSAnLi9pbWcxLnBuZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuL2ltZzIucG5nJztcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5wbmcnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LmpzJztcblxuY29uc3QgaG9tZVBhZ2VMb2FkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSB8fCBjb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnY29udGFjdCcpKSB7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudScsICdjb250YWN0Jyk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIH1cbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZzFQaWMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcyUGljKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG59XG5cbmNvbnN0IG1lbnVQYWdlTG9hZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpIHx8IGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWN0JykpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdob21lJywgJ2NvbnRhY3QnKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgfVxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcbn1cblxuY29uc3QgY29udGFjdFBhZ2VMb2FkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lJykgfHwgY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSkge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnLCAnbWVudScpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICB9XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKCkpO1xufVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAnaG9tZScpO1xuXG5jb25zdCBsb2dvSW1nID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XG4gICAgbG9nb0ltZy5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgbG9nb0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVQYWdlTG9hZGVyKTtcblxuICAgIHJldHVybiBsb2dvSW1nO1xufVxuXG5jb25zdCBuYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdkJhcicpO1xuXG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdkl0ZW1zLmNsYXNzTGlzdC5hZGQoJ25hdkl0ZW1zJyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51UGFnZUxvYWRlcik7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0UGFnZUxvYWRlcik7XG5cbiAgICBuYXZJdGVtcy5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBuYXZJdGVtcy5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZJdGVtcyk7XG5cbiAgICByZXR1cm4gbmF2QmFyO1xufVxuXG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJhcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29JbWcoKSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcigpKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcblxuY29uc3QgbmFtZSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ09wdWxlbnQgQ3Vpc2luZSc7XG5cbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdJbW1lcnNlIHlvdXJzZWxmIGluIGFuIGF0bW9zcGhlcmUgb2Ygb3B1bGVuY2UgYW5kIGVsZWdhbmNlIGFzIHlvdSBzYXZvciBvdXIgZXhxdWlzaXRlIGNyZWF0aW9ucy4nO1xuXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmFtZUNvbnRhaW5lcicpO1xuXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICAgIHJldHVybiBuYW1lQ29udGFpbmVyO1xufVxuXG5jb25zdCBpbWcxUGljID0gKCkgPT4ge1xuICAgIGNvbnN0IGltZzFQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcxUGljLnNyYyA9IGltZzE7XG4gICAgaW1nMVBpYy5jbGFzc0xpc3QuYWRkKCdpbWcxJyk7XG5cbiAgICByZXR1cm4gaW1nMVBpYztcbn1cblxuY29uc3QgaW1nMlBpYyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGltZzJQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcyUGljLnNyYyA9IGltZzI7XG4gICAgaW1nMlBpYy5jbGFzc0xpc3QuYWRkKCdpbWcyJyk7XG5cbiAgICByZXR1cm4gaW1nMlBpYztcbn1cblxuY29udGVudC5hcHBlbmRDaGlsZChuYW1lKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChpbWcxUGljKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChpbWcyUGljKCkpO1xuICAgIFxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0VGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dFRleHQnKTtcbiAgICBhYm91dFRleHQudGV4dENvbnRlbnQgPSAnT3B1bGVudCBDdWlzaW5lIGlzIGEgZmluZSBkaW5pbmcgcmVzdGF1cmFudCBsb2NhdGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eS4gV2Ugb2ZmZXIgYSB3aWRlIHZhcmlldHkgb2YgZGlzaGVzLCByYW5naW5nIGZyb20gdHJhZGl0aW9uYWwgdG8gbW9kZXJuIGN1aXNpbmUuIE91ciBjaGVmcyBhcmUgZXhwZXJ0cyBpbiB0aGVpciBmaWVsZCBhbmQgd2lsbCBtYWtlIHN1cmUgdGhhdCB5b3UgaGF2ZSBhbiB1bmZvcmdldHRhYmxlIGV4cGVyaWVuY2UuIENvbWUgdmlzaXQgdXMgdG9kYXkhJztcblxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG5cbiAgICByZXR1cm4gYWJvdXQ7XG59XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlclRleHQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVGV4dCcpO1xuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnwqkgMjAyMSBPcHVsZW50IEN1aXNpbmUnO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmV4cG9ydCB7aGVhZGVyLCBmb290ZXJ9O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2hlYWRlciwgZm9vdGVyfSBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMnKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51SXRlbTFUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBtZW51SXRlbTFUaXRsZS50ZXh0Q29udGVudCA9ICdDaGlja2VuJztcblxuICAgIGNvbnN0IG1lbnVJdGVtMURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0xRGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzYycpO1xuICAgIG1lbnVJdGVtMURlc2MudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJztcblxuICAgIGNvbnN0IG1lbnVJdGVtMVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtMVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICAgIG1lbnVJdGVtMVByaWNlLnRleHRDb250ZW50ID0gJyQxMCc7XG5cbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudUl0ZW0xVGl0bGUpO1xuICAgIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51SXRlbTFEZXNjKTtcbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudUl0ZW0xUHJpY2UpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0yLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0yVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVJdGVtMlRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG1lbnVJdGVtMlRpdGxlLnRleHRDb250ZW50ID0gJ0JlZWYnO1xuXG4gICAgY29uc3QgbWVudUl0ZW0yRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTJEZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjJyk7XG4gICAgbWVudUl0ZW0yRGVzYy50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW0yUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0yUHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgbWVudUl0ZW0yUHJpY2UudGV4dENvbnRlbnQgPSAnJDE1JztcblxuICAgIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZW51SXRlbTJUaXRsZSk7XG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVJdGVtMkRlc2MpO1xuICAgIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZW51SXRlbTJQcmljZSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbTNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudUl0ZW0zVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWVudUl0ZW0zVGl0bGUudGV4dENvbnRlbnQgPSAnUG9yayc7XG5cbiAgICBjb25zdCBtZW51SXRlbTNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtM0Rlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2MnKTtcbiAgICBtZW51SXRlbTNEZXNjLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLic7XG5cbiAgICBjb25zdCBtZW51SXRlbTNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTNQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcHJpY2UnKTtcbiAgICBtZW51SXRlbTNQcmljZS50ZXh0Q29udGVudCA9ICckMTInO1xuXG4gICAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVJdGVtM1RpdGxlKTtcbiAgICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobWVudUl0ZW0zRGVzYyk7XG4gICAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVJdGVtM1ByaWNlKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtNC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtNFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51SXRlbTRUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBtZW51SXRlbTRUaXRsZS50ZXh0Q29udGVudCA9ICdGaXNoJztcblxuICAgIGNvbnN0IG1lbnVJdGVtNERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW00RGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzYycpO1xuICAgIG1lbnVJdGVtNERlc2MudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJztcblxuICAgIGNvbnN0IG1lbnVJdGVtNFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtNFByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICAgIG1lbnVJdGVtNFByaWNlLnRleHRDb250ZW50ID0gJyQxMic7XG5cbiAgICBtZW51SXRlbTQuYXBwZW5kQ2hpbGQobWVudUl0ZW00VGl0bGUpO1xuICAgIG1lbnVJdGVtNC5hcHBlbmRDaGlsZChtZW51SXRlbTREZXNjKTtcbiAgICBtZW51SXRlbTQuYXBwZW5kQ2hpbGQobWVudUl0ZW00UHJpY2UpO1xuXG4gICAgY29uc3QgbWVudUl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW01LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgbWVudUl0ZW01VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVJdGVtNVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG1lbnVJdGVtNVRpdGxlLnRleHRDb250ZW50ID0gJ1ZlZ2V0YXJpYW4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW01RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTVEZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjJyk7XG4gICAgbWVudUl0ZW01RGVzYy50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW01UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW01UHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgbWVudUl0ZW01UHJpY2UudGV4dENvbnRlbnQgPSAnJDEwJztcblxuICAgIG1lbnVJdGVtNS5hcHBlbmRDaGlsZChtZW51SXRlbTVUaXRsZSk7XG4gICAgbWVudUl0ZW01LmFwcGVuZENoaWxkKG1lbnVJdGVtNURlc2MpO1xuICAgIG1lbnVJdGVtNS5hcHBlbmRDaGlsZChtZW51SXRlbTVQcmljZSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbTZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudUl0ZW02VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWVudUl0ZW02VGl0bGUudGV4dENvbnRlbnQgPSAnVmVnYW4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW02RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTZEZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjJyk7XG4gICAgbWVudUl0ZW02RGVzYy50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW02UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW02UHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgbWVudUl0ZW02UHJpY2UudGV4dENvbnRlbnQgPSAnJDEwJztcblxuICAgIG1lbnVJdGVtNi5hcHBlbmRDaGlsZChtZW51SXRlbTZUaXRsZSk7XG4gICAgbWVudUl0ZW02LmFwcGVuZENoaWxkKG1lbnVJdGVtNkRlc2MpO1xuICAgIG1lbnVJdGVtNi5hcHBlbmRDaGlsZChtZW51SXRlbTZQcmljZSk7XG5cbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW00KTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW01KTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW02KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==