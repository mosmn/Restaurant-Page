"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1HQUE4QjtBQUMxRSw0Q0FBNEMsbUdBQThCO0FBQzFFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxTQUFTLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsZ0NBQWdDLGdCQUFnQixpQkFBaUIsOEJBQThCLG1DQUFtQyxHQUFHLGNBQWMsb0JBQW9CLG9CQUFvQixHQUFHLG1CQUFtQixxQ0FBcUMsOENBQThDLDBJQUEwSSxHQUFHLG1CQUFtQixpQ0FBaUMsMENBQTBDLGlIQUFpSCxHQUFHLHNCQUFzQixpQ0FBaUMsMENBQTBDLGlIQUFpSCxHQUFHLGlCQUFpQiw0QkFBNEIsb0JBQW9CLHFDQUFxQywwQkFBMEIsa0JBQWtCLG1CQUFtQixnQ0FBZ0MsR0FBRyxXQUFXLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsZUFBZSxvQkFBb0IscUNBQXFDLDBCQUEwQixnQkFBZ0IsbUJBQW1CLEdBQUcsUUFBUSx1QkFBdUIscUJBQXFCLHNCQUFzQix5QkFBeUIsNEJBQTRCLDBCQUEwQiwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLHlCQUF5QixjQUFjLGdCQUFnQixrQkFBa0Isa0JBQWtCLDhCQUE4QiwyQkFBMkIsNkJBQTZCLHNDQUFzQyxHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyxtQkFBbUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsZ0NBQWdDLGlCQUFpQixHQUFHLG9CQUFvQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLHlCQUF5QixHQUFHLGdCQUFnQiwwQkFBMEIsOEJBQThCLEdBQUcsUUFBUSxtQkFBbUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsMEJBQTBCLEdBQUcsUUFBUSxxQkFBcUIsc0JBQXNCLDBCQUEwQixHQUFHLGtCQUFrQiwwQkFBMEIsOEJBQThCLEdBQUcsWUFBWSx1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLGdCQUFnQixvQkFBb0IsMEJBQTBCLHNCQUFzQixvQkFBb0IsR0FBRyxhQUFhLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQiw2QkFBNkIsZ0JBQWdCLG9CQUFvQixnQ0FBZ0MsbUJBQW1CLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLHFCQUFxQjtBQUNqc0k7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM5SzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNicUI7QUFDcUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixpREFBTTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsaURBQU07O0FBRTlCO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVMO0FBQ1M7QUFDQTtBQUNBO0FBQ0c7QUFDTTs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVc7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNDQUFJO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzQ0FBSTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLHNDQUFJO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0g7QUFDcUI7O0FBRTFDO0FBQ0E7O0FBRUEsd0JBQXdCLGlEQUFNO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsaURBQU07O0FBRTlCO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9uYW1lZi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21haW5mLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250ZW50LmhvbWUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAxZnIgMC41ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgIFwiaGVhZGVyLWJhciBoZWFkZXItYmFyXCJcbiAgICAgICAgXCJpbWcxIGltZzJcIlxuICAgICAgICBcImFib3V0IGFib3V0XCJcbiAgICAgICAgXCJmb290ZXIgZm9vdGVyXCI7XG59XG5cbi5jb250ZW50Lm1lbnUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDAuNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImhlYWRlci1iYXIgaGVhZGVyLWJhclwiXG4gICAgICAgIFwibWVudSBtZW51XCJcbiAgICAgICAgXCJmb290ZXIgZm9vdGVyXCI7XG59XG5cbi5jb250ZW50LmNvbnRhY3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDAuNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImhlYWRlci1iYXIgaGVhZGVyLWJhclwiXG4gICAgICAgIFwiaW5mbyBpbmZvXCJcbiAgICAgICAgXCJmb290ZXIgZm9vdGVyXCI7XG59XG5cbi5oZWFkZXItYmFyIHtcbiAgICBncmlkLWFyZWE6IGhlYWRlci1iYXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5uYXZJdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XG59XG4gIFxubGk6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuICBcbmxpOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5pbWcxLFxuLmltZzIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLm5hbWVDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ25hbWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5oMSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZmFtaWx5OiAnbmFtZSc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaDIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi5hYm91dCB7XG4gICAgZ3JpZC1hcmVhOiBhYm91dDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGhlaWdodDogMTBweDtcbn1cblxuLmZvb3RlclRleHRcbntcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2Qzs7Ozt1QkFJbUI7QUFDdkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DOzs7dUJBR21CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQzs7O3VCQUdtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50LmhvbWUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDFmciAwLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaGVhZGVyLWJhciBoZWFkZXItYmFyXFxcIlxcbiAgICAgICAgXFxcImltZzEgaW1nMlxcXCJcXG4gICAgICAgIFxcXCJhYm91dCBhYm91dFxcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmNvbnRlbnQubWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaGVhZGVyLWJhciBoZWFkZXItYmFyXFxcIlxcbiAgICAgICAgXFxcIm1lbnUgbWVudVxcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmNvbnRlbnQuY29udGFjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaGVhZGVyLWJhciBoZWFkZXItYmFyXFxcIlxcbiAgICAgICAgXFxcImluZm8gaW5mb1xcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmhlYWRlci1iYXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlci1iYXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5uYXZJdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XFxufVxcbiAgXFxubGk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuICBcXG5saTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLmltZzEsXFxuLmltZzIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4ubmFtZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbmFtZSc7XFxuICAgIHNyYzogdXJsKCcuL25hbWVmLnR0ZicpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogJ25hbWUnO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XFxufVxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xcbiAgICBzcmM6IHVybCgnLi9tYWluZi5vdGYnKTtcXG59XFxuXFxuLmFib3V0IHtcXG4gICAgZ3JpZC1hcmVhOiBhYm91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluJztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuLmZvb3RlclRleHRcXG57XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtoZWFkZXIsIGZvb3Rlcn0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mb1Bob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RJbmZvUGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvLXBob25lJyk7XG4gICAgY29udGFjdEluZm9QaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogKzEgKDU1NSkgMTIzLTQ1NjcnO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9FbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0SW5mb0VtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mby1lbWFpbCcpO1xuICAgIGNvbnRhY3RJbmZvRW1haWwudGV4dENvbnRlbnQgPSAnRW1haWw6IGluZm9Ab3B1bGVudGN1aXNpbmUuY29tICc7XG5cbiAgICBjb25zdCBjb250YWN0SW5mb0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEluZm9BZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mby1hZGRyZXNzJyk7XG4gICAgY29udGFjdEluZm9BZGRyZXNzLnRleHRDb250ZW50ID0gJ0FkZHJlc3M6IDEyMyBMdXh1cnkgQXZlbnVlLCBDaXR5dmlsbGUnO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9Tb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8tc29jaWFsJyk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mb1NvY2lhbEluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RJbmZvU29jaWFsSW5zdGEuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvLXNvY2lhbC1pbnN0YScpO1xuICAgIGNvbnRhY3RJbmZvU29jaWFsSW5zdGEudGV4dENvbnRlbnQgPSAnSW5zdGFncmFtOiBAb3B1bGVudGN1aXNpbmUnO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9Tb2NpYWxGQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbEZCLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mby1zb2NpYWwtZmInKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbEZCLnRleHRDb250ZW50ID0gJ0ZhY2Vib29rOiAvb3B1bGVudGN1aXNpbmUnO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9Tb2NpYWxUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RJbmZvU29jaWFsVHdpdHRlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8tc29jaWFsLXR3aXR0ZXInKTtcbiAgICBjb250YWN0SW5mb1NvY2lhbFR3aXR0ZXIudGV4dENvbnRlbnQgPSAnVHdpdHRlcjogQG9wdWxlbnRjdWlzaW5lJztcblxuICAgIGNvbnRhY3RJbmZvU29jaWFsLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvU29jaWFsSW5zdGEpO1xuICAgIGNvbnRhY3RJbmZvU29jaWFsLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvU29jaWFsRkIpO1xuICAgIGNvbnRhY3RJbmZvU29jaWFsLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvU29jaWFsVHdpdHRlcik7XG5cbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0SW5mb1Bob25lKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0SW5mb0VtYWlsKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0SW5mb0FkZHJlc3MpO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvU29jaWFsKTtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW1nMSBmcm9tICcuL2ltZzEucG5nJztcbmltcG9ydCBpbWcyIGZyb20gJy4vaW1nMi5wbmcnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnBuZyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBob21lUGFnZUxvYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudScpIHx8IGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWN0JykpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51JywgJ2NvbnRhY3QnKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgfVxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nMVBpYygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZzJQaWMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbn1cblxuY29uc3QgbWVudVBhZ2VMb2FkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lJykgfHwgY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhY3QnKSkge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnLCAnY29udGFjdCcpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICB9XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVQYWdlKCkpO1xufVxuXG5jb25zdCBjb250YWN0UGFnZUxvYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUnKSB8fCBjb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudScpKSB7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScsICdtZW51Jyk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIH1cbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XG59XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICdob21lJyk7XG5cbmNvbnN0IGxvZ29JbWcgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ29JbWcuc3JjID0gbG9nbztcbiAgICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZVBhZ2VMb2FkZXIpO1xuXG4gICAgcmV0dXJuIGxvZ29JbWc7XG59XG5cbmNvbnN0IG5hdkJhciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2SXRlbXMuY2xhc3NMaXN0LmFkZCgnbmF2SXRlbXMnKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVQYWdlTG9hZGVyKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3RQYWdlTG9hZGVyKTtcblxuICAgIG5hdkl0ZW1zLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdkl0ZW1zLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1zKTtcblxuICAgIHJldHVybiBuYXZCYXI7XG59XG5cblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYmFyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0ltZygpKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuXG5jb25zdCBuYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnT3B1bGVudCBDdWlzaW5lJztcblxuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gJ0ltbWVyc2UgeW91cnNlbGYgaW4gYW4gYXRtb3NwaGVyZSBvZiBvcHVsZW5jZSBhbmQgZWxlZ2FuY2UgYXMgeW91IHNhdm9yIG91ciBleHF1aXNpdGUgY3JlYXRpb25zLic7XG5cbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYW1lQ29udGFpbmVyJyk7XG5cbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gICAgcmV0dXJuIG5hbWVDb250YWluZXI7XG59XG5cbmNvbnN0IGltZzFQaWMgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1nMVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzFQaWMuc3JjID0gaW1nMTtcbiAgICBpbWcxUGljLmNsYXNzTGlzdC5hZGQoJ2ltZzEnKTtcblxuICAgIHJldHVybiBpbWcxUGljO1xufVxuXG5jb25zdCBpbWcyUGljID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaW1nMlBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzJQaWMuc3JjID0gaW1nMjtcbiAgICBpbWcyUGljLmNsYXNzTGlzdC5hZGQoJ2ltZzInKTtcblxuICAgIHJldHVybiBpbWcyUGljO1xufVxuXG5jb250ZW50LmFwcGVuZENoaWxkKG5hbWUoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGltZzFQaWMoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGltZzJQaWMoKSk7XG4gICAgXG5jb25zdCBhYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0VGV4dCcpO1xuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdPcHVsZW50IEN1aXNpbmUgaXMgYSBmaW5lIGRpbmluZyByZXN0YXVyYW50IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LiBXZSBvZmZlciBhIHdpZGUgdmFyaWV0eSBvZiBkaXNoZXMsIHJhbmdpbmcgZnJvbSB0cmFkaXRpb25hbCB0byBtb2Rlcm4gY3Vpc2luZS4gT3VyIGNoZWZzIGFyZSBleHBlcnRzIGluIHRoZWlyIGZpZWxkIGFuZCB3aWxsIG1ha2Ugc3VyZSB0aGF0IHlvdSBoYXZlIGFuIHVuZm9yZ2V0dGFibGUgZXhwZXJpZW5jZS4gQ29tZSB2aXNpdCB1cyB0b2RheSEnO1xuXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcblxuICAgIHJldHVybiBhYm91dDtcbn1cblxuY29udGVudC5hcHBlbmRDaGlsZChhYm91dCgpKTtcblxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdmb290ZXJUZXh0Jyk7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICfCqSAyMDIxIE9wdWxlbnQgQ3Vpc2luZSc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuZXhwb3J0IHtoZWFkZXIsIGZvb3Rlcn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aGVhZGVyLCBmb290ZXJ9IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBtZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0xVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVJdGVtMVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG1lbnVJdGVtMVRpdGxlLnRleHRDb250ZW50ID0gJ0NoaWNrZW4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW0xRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTFEZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjJyk7XG4gICAgbWVudUl0ZW0xRGVzYy50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW0xUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0xUHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgbWVudUl0ZW0xUHJpY2UudGV4dENvbnRlbnQgPSAnJDEwJztcblxuICAgIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51SXRlbTFUaXRsZSk7XG4gICAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG1lbnVJdGVtMURlc2MpO1xuICAgIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51SXRlbTFQcmljZSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudUl0ZW0yVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWVudUl0ZW0yVGl0bGUudGV4dENvbnRlbnQgPSAnQmVlZic7XG5cbiAgICBjb25zdCBtZW51SXRlbTJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtMkRlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2MnKTtcbiAgICBtZW51SXRlbTJEZXNjLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLic7XG5cbiAgICBjb25zdCBtZW51SXRlbTJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTJQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcHJpY2UnKTtcbiAgICBtZW51SXRlbTJQcmljZS50ZXh0Q29udGVudCA9ICckMTUnO1xuXG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVJdGVtMlRpdGxlKTtcbiAgICBtZW51SXRlbTIuYXBwZW5kQ2hpbGQobWVudUl0ZW0yRGVzYyk7XG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVJdGVtMlByaWNlKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51SXRlbTNUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBtZW51SXRlbTNUaXRsZS50ZXh0Q29udGVudCA9ICdQb3JrJztcblxuICAgIGNvbnN0IG1lbnVJdGVtM0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0zRGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzYycpO1xuICAgIG1lbnVJdGVtM0Rlc2MudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJztcblxuICAgIGNvbnN0IG1lbnVJdGVtM1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtM1ByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICAgIG1lbnVJdGVtM1ByaWNlLnRleHRDb250ZW50ID0gJyQxMic7XG5cbiAgICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobWVudUl0ZW0zVGl0bGUpO1xuICAgIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChtZW51SXRlbTNEZXNjKTtcbiAgICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobWVudUl0ZW0zUHJpY2UpO1xuXG4gICAgY29uc3QgbWVudUl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW00LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgbWVudUl0ZW00VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVJdGVtNFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG1lbnVJdGVtNFRpdGxlLnRleHRDb250ZW50ID0gJ0Zpc2gnO1xuXG4gICAgY29uc3QgbWVudUl0ZW00RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTREZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjJyk7XG4gICAgbWVudUl0ZW00RGVzYy50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xuXG4gICAgY29uc3QgbWVudUl0ZW00UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW00UHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgbWVudUl0ZW00UHJpY2UudGV4dENvbnRlbnQgPSAnJDEyJztcblxuICAgIG1lbnVJdGVtNC5hcHBlbmRDaGlsZChtZW51SXRlbTRUaXRsZSk7XG4gICAgbWVudUl0ZW00LmFwcGVuZENoaWxkKG1lbnVJdGVtNERlc2MpO1xuICAgIG1lbnVJdGVtNC5hcHBlbmRDaGlsZChtZW51SXRlbTRQcmljZSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbTVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudUl0ZW01VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWVudUl0ZW01VGl0bGUudGV4dENvbnRlbnQgPSAnVmVnZXRhcmlhbic7XG5cbiAgICBjb25zdCBtZW51SXRlbTVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtNURlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2MnKTtcbiAgICBtZW51SXRlbTVEZXNjLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLic7XG5cbiAgICBjb25zdCBtZW51SXRlbTVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTVQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcHJpY2UnKTtcbiAgICBtZW51SXRlbTVQcmljZS50ZXh0Q29udGVudCA9ICckMTAnO1xuXG4gICAgbWVudUl0ZW01LmFwcGVuZENoaWxkKG1lbnVJdGVtNVRpdGxlKTtcbiAgICBtZW51SXRlbTUuYXBwZW5kQ2hpbGQobWVudUl0ZW01RGVzYyk7XG4gICAgbWVudUl0ZW01LmFwcGVuZENoaWxkKG1lbnVJdGVtNVByaWNlKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtNi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtNlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51SXRlbTZUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBtZW51SXRlbTZUaXRsZS50ZXh0Q29udGVudCA9ICdWZWdhbic7XG5cbiAgICBjb25zdCBtZW51SXRlbTZEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtNkRlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2MnKTtcbiAgICBtZW51SXRlbTZEZXNjLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLic7XG5cbiAgICBjb25zdCBtZW51SXRlbTZQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbTZQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcHJpY2UnKTtcbiAgICBtZW51SXRlbTZQcmljZS50ZXh0Q29udGVudCA9ICckMTAnO1xuXG4gICAgbWVudUl0ZW02LmFwcGVuZENoaWxkKG1lbnVJdGVtNlRpdGxlKTtcbiAgICBtZW51SXRlbTYuYXBwZW5kQ2hpbGQobWVudUl0ZW02RGVzYyk7XG4gICAgbWVudUl0ZW02LmFwcGVuZENoaWxkKG1lbnVJdGVtNlByaWNlKTtcblxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbTIpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbTMpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbTQpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbTUpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbTYpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9