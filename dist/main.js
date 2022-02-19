/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #009AE4;\r\n}\r\n\r\nheader {\r\n  background-color: #00008B;\r\n  border: solid;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  color: white;\r\n}\r\n\r\n.nav-desktop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-mobile {\r\n  display: none;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\n.nav-desktop h2 {\r\n  font-size: clamp(2.3vw, 1.8rem, 1.8rem);\r\n  padding-left: 2em;\r\n  margin: 0.5em 0;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  padding: 0.4em 1.4em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n  font-size: max(1.3vw, 1rem);\r\n}\r\n\r\n.nav-links button {\r\n  background-color: darkblue;\r\n  color: white;\r\n  border: none;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n  padding: 0 1.5em;\r\n}\r\n\r\nfooter p {\r\n  font-size: max(1.5vw, 1.5rem);\r\n  font-weight: bold;\r\n  padding-left: 2em;\r\n}\r\n\r\n.contact-info p,\r\n.contact-info li {\r\n  font-size: max(1.5vw, 1.25rem);\r\n}\r\n\r\n.nav-links li + li {\r\n  border-left: 2px solid white;\r\n}\r\n\r\n.list-focus,\r\n.add-book-focus,\r\n.contact-focus {\r\n  text-decoration: underline red 4px;\r\n}\r\n\r\nmain {\r\n  margin-top: max(4.2vw, 3.8rem);\r\n  width: max(100%, 35rem);\r\n  margin-inline: auto;\r\n}\r\n\r\n.msg-date {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#greet {\r\n  font-weight: bold;\r\n  font-size: max(1.7vw, 1.4rem);\r\n  text-align: left;\r\n}\r\n\r\n.date {\r\n  text-align: right;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n}\r\n\r\n.date.mobile-date {\r\n  display: none;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 10rem;\r\n  left: 25%;\r\n  z-index: 1;\r\n  width: 50%;\r\n  border: rgba(0, 0, 139, 0.75) solid;\r\n  background-color: orange;\r\n  border-radius: 0.8rem;\r\n  padding-top: 0.5rem;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\n.greeting {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 3.5rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.greeting span {\r\n  display: block;\r\n}\r\n\r\n.user {\r\n  display: block;\r\n  margin: 2rem auto;\r\n  width: 40%;\r\n  padding: 0.8em 1em;\r\n  border-radius: 1rem;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n}\r\n\r\n.user:focus {\r\n  color: blue;\r\n  font-family: cursive;\r\n}\r\n\r\n.modal-buttons {\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.close,\r\n.enter {\r\n  padding: 0.5em 1em;\r\n  border-radius: 0.4rem;\r\n  border: 2px solid blue;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: max(3.2vw, 1.8rem);\r\n  margin-top: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.empty-message {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n  font-size: 2rem;\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  padding: max(1.5vw, 0.5rem);\r\n  border-radius: 1rem;\r\n  background-color: purple;\r\n  color: white;\r\n  display: none;\r\n  width: max(15vw, 10rem);\r\n}\r\n\r\n.empty-message p {\r\n  text-align: center;\r\n  font-size: max(1.5vw, 1rem);\r\n  margin: 0.4em;\r\n}\r\n\r\n.add-message {\r\n  text-align: center;\r\n  color: rgba(25, 25, 27, 0.75);\r\n  text-decoration: underline black;\r\n  background-color: purple;\r\n  border: none;\r\n  font-size: max(1.3vw, 1rem);\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  width: 100%;\r\n}\r\n\r\n.books-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 8rem;\r\n  font-size: max(2vw, 2rem);\r\n}\r\n\r\n.books {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: max(100%, 35rem);\r\n  margin-top: 1.8rem;\r\n}\r\n\r\n.book {\r\n  border: solid rgb(201, 41, 41);\r\n  width: max(70%, 30rem);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: relative;\r\n  padding: 0 1em;\r\n  margin-inline: auto;\r\n}\r\n\r\n.book-info {\r\n  font-size: max(1.3vw, 1.2rem);\r\n  color: white;\r\n}\r\n\r\n.books li:nth-child(odd) {\r\n  background-color: rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) {\r\n  background-color: rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.remove {\r\n  display: block;\r\n  align-self: center;\r\n  border: 2px solid rgba(128, 0, 128, 0.76);\r\n  font-size: max(1.2vw, 1rem);\r\n  padding: 0.5em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n}\r\n\r\n.books li:nth-child(odd) .remove {\r\n  border: 2px solid rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) .remove {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li p + p {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.input-field {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform input {\r\n  margin-bottom: 2.5rem;\r\n  padding: max(0.8vw, 0.5rem);\r\n  width: max(30vw, 20rem);\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  outline: none;\r\n  font-size: max(1.4vw, 1.5rem);\r\n}\r\n\r\n.book-added-msg {\r\n  font-size: max(1.4vw, 1.2rem);\r\n  font-style: italic;\r\n  color: blue;\r\n  margin-bottom: 1rem;\r\n  display: none;\r\n}\r\n\r\n.contact-info {\r\n  display: none;\r\n  font-size: 1.9rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 8.9em;\r\n}\r\n\r\n#reach-out {\r\n  padding-left: 0.3em;\r\n}\r\n\r\nfooter {\r\n  display: none;\r\n  background-color: darkblue;\r\n  border: 0.2rem solid black;\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  color: white;\r\n}\r\n\r\n.fa-bars {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fa-plus-square {\r\n  display: none;\r\n}\r\n\r\n.fa-times {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .date.mobile-date {\r\n    display: block;\r\n  }\r\n\r\n  .date.desktop-date {\r\n    display: none;\r\n  }\r\n\r\n  .fa-plus-square {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: block;\r\n  }\r\n\r\n  .fa-book {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: none;\r\n  }\r\n\r\n  .nav-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .nav-mobile {\r\n    display: block;\r\n  }\r\n\r\n  .nav-links.mobile {\r\n    position: relative;\r\n    display: none;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 0.6rem 0;\r\n  }\r\n\r\n  .nav-links.mobile li:last-child {\r\n    border: none;\r\n    position: absolute;\r\n    right: 1.2rem;\r\n  }\r\n\r\n  .header-home {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 1.2rem;\r\n    align-items: center;\r\n  }\r\n\r\n  .nav-mobile h2 {\r\n    font-size: 1.7rem;\r\n  }\r\n\r\n  #greet {\r\n    width: 10rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #009AE4;\r\n}\r\n\r\nheader {\r\n  background-color: #00008B;\r\n  border: solid;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  color: white;\r\n}\r\n\r\n.nav-desktop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-mobile {\r\n  display: none;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\n.nav-desktop h2 {\r\n  font-size: clamp(2.3vw, 1.8rem, 1.8rem);\r\n  padding-left: 2em;\r\n  margin: 0.5em 0;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  padding: 0.4em 1.4em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n  font-size: max(1.3vw, 1rem);\r\n}\r\n\r\n.nav-links button {\r\n  background-color: darkblue;\r\n  color: white;\r\n  border: none;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n  padding: 0 1.5em;\r\n}\r\n\r\nfooter p {\r\n  font-size: max(1.5vw, 1.5rem);\r\n  font-weight: bold;\r\n  padding-left: 2em;\r\n}\r\n\r\n.contact-info p,\r\n.contact-info li {\r\n  font-size: max(1.5vw, 1.25rem);\r\n}\r\n\r\n.nav-links li + li {\r\n  border-left: 2px solid white;\r\n}\r\n\r\n.list-focus,\r\n.add-book-focus,\r\n.contact-focus {\r\n  text-decoration: underline red 4px;\r\n}\r\n\r\nmain {\r\n  margin-top: max(4.2vw, 3.8rem);\r\n  width: max(100%, 35rem);\r\n  margin-inline: auto;\r\n}\r\n\r\n.msg-date {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#greet {\r\n  font-weight: bold;\r\n  font-size: max(1.7vw, 1.4rem);\r\n  text-align: left;\r\n}\r\n\r\n.date {\r\n  text-align: right;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n}\r\n\r\n.date.mobile-date {\r\n  display: none;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 10rem;\r\n  left: 25%;\r\n  z-index: 1;\r\n  width: 50%;\r\n  border: rgba(0, 0, 139, 0.75) solid;\r\n  background-color: orange;\r\n  border-radius: 0.8rem;\r\n  padding-top: 0.5rem;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\n.greeting {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 3.5rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.greeting span {\r\n  display: block;\r\n}\r\n\r\n.user {\r\n  display: block;\r\n  margin: 2rem auto;\r\n  width: 40%;\r\n  padding: 0.8em 1em;\r\n  border-radius: 1rem;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n}\r\n\r\n.user:focus {\r\n  color: blue;\r\n  font-family: cursive;\r\n}\r\n\r\n.modal-buttons {\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.close,\r\n.enter {\r\n  padding: 0.5em 1em;\r\n  border-radius: 0.4rem;\r\n  border: 2px solid blue;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: max(3.2vw, 1.8rem);\r\n  margin-top: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.empty-message {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n  font-size: 2rem;\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  padding: max(1.5vw, 0.5rem);\r\n  border-radius: 1rem;\r\n  background-color: purple;\r\n  color: white;\r\n  display: none;\r\n  width: max(15vw, 10rem);\r\n}\r\n\r\n.empty-message p {\r\n  text-align: center;\r\n  font-size: max(1.5vw, 1rem);\r\n  margin: 0.4em;\r\n}\r\n\r\n.add-message {\r\n  text-align: center;\r\n  color: rgba(25, 25, 27, 0.75);\r\n  text-decoration: underline black;\r\n  background-color: purple;\r\n  border: none;\r\n  font-size: max(1.3vw, 1rem);\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  width: 100%;\r\n}\r\n\r\n.books-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 8rem;\r\n  font-size: max(2vw, 2rem);\r\n}\r\n\r\n.books {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: max(100%, 35rem);\r\n  margin-top: 1.8rem;\r\n}\r\n\r\n.book {\r\n  border: solid rgb(201, 41, 41);\r\n  width: max(70%, 30rem);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: relative;\r\n  padding: 0 1em;\r\n  margin-inline: auto;\r\n}\r\n\r\n.book-info {\r\n  font-size: max(1.3vw, 1.2rem);\r\n  color: white;\r\n}\r\n\r\n.books li:nth-child(odd) {\r\n  background-color: rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) {\r\n  background-color: rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.remove {\r\n  display: block;\r\n  align-self: center;\r\n  border: 2px solid rgba(128, 0, 128, 0.76);\r\n  font-size: max(1.2vw, 1rem);\r\n  padding: 0.5em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n}\r\n\r\n.books li:nth-child(odd) .remove {\r\n  border: 2px solid rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) .remove {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li p + p {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.input-field {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform input {\r\n  margin-bottom: 2.5rem;\r\n  padding: max(0.8vw, 0.5rem);\r\n  width: max(30vw, 20rem);\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  outline: none;\r\n  font-size: max(1.4vw, 1.5rem);\r\n}\r\n\r\n.book-added-msg {\r\n  font-size: max(1.4vw, 1.2rem);\r\n  font-style: italic;\r\n  color: blue;\r\n  margin-bottom: 1rem;\r\n  display: none;\r\n}\r\n\r\n.contact-info {\r\n  display: none;\r\n  font-size: 1.9rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 8.9em;\r\n}\r\n\r\n#reach-out {\r\n  padding-left: 0.3em;\r\n}\r\n\r\nfooter {\r\n  display: none;\r\n  background-color: darkblue;\r\n  border: 0.2rem solid black;\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  color: white;\r\n}\r\n\r\n.fa-bars {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fa-plus-square {\r\n  display: none;\r\n}\r\n\r\n.fa-times {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .date.mobile-date {\r\n    display: block;\r\n  }\r\n\r\n  .date.desktop-date {\r\n    display: none;\r\n  }\r\n\r\n  .fa-plus-square {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: block;\r\n  }\r\n\r\n  .fa-book {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: none;\r\n  }\r\n\r\n  .nav-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .nav-mobile {\r\n    display: block;\r\n  }\r\n\r\n  .nav-links.mobile {\r\n    position: relative;\r\n    display: none;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 0.6rem 0;\r\n  }\r\n\r\n  .nav-links.mobile li:last-child {\r\n    border: none;\r\n    position: absolute;\r\n    right: 1.2rem;\r\n  }\r\n\r\n  .header-home {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 1.2rem;\r\n    align-items: center;\r\n  }\r\n\r\n  .nav-mobile h2 {\r\n    font-size: 1.7rem;\r\n  }\r\n\r\n  #greet {\r\n    width: 10rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/luxon/src/datetime.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/datetime.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTime),
/* harmony export */   "friendlyDateTime": () => (/* binding */ friendlyDateTime)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_diff_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./impl/diff.js */ "./node_modules/luxon/src/impl/diff.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./impl/tokenParser.js */ "./node_modules/luxon/src/impl/tokenParser.js");
/* harmony import */ var _impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/conversions.js */ "./node_modules/luxon/src/impl/conversions.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");

















const INVALID = "Invalid DateTime";
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"]("unsupported zone", `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.gregorianToWeek)(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.objToLocalTS)(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = {
      ...inst.c,
      year,
      month,
      day:
        Math.min(inst.c.day, (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.daysInMonth)(year, month)) +
        Math.trunc(dur.days) +
        Math.trunc(dur.weeks) * 7,
    },
    millisToAdd = _duration_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds,
    }).as("milliseconds"),
    localTS = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.objToLocalTS)(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(parsed, {
        ...opts,
        zone: interpretationZone,
        specificOffset,
      });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"]("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(_impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].create("en-US"), {
        allowZ,
        forceSimple: true,
      }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.month);
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.day);
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.month);
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.day);
  }
  return c;
}

function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
  let c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.hour);
  if (extended) {
    c += ":";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(Math.trunc(-o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(Math.trunc(o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(Math.trunc(o.o % 60));
    }
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

// Units in the supported calendars, sorted by bigness
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[unit.toLowerCase()];

  if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_7__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone),
    loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromObject(opts),
    tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].now();

  let ts, o;

  // assume we have the higher-order units
  if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(obj.year)) {
    for (const u of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.hasInvalidGregorianData)(obj) || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.hasInvalidTimeData)(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({ ts, zone, loc, o });
}

function diffRelative(start, end, opts) {
  const round = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(opts.round) ? true : opts.round,
    format = (c, unit) => {
      c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.roundTo)(c, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {},
    args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime#local}, {@link DateTime#utc}, and (most flexibly) {@link DateTime#fromObject}. To create one from a standard string format, use {@link DateTime#fromISO}, {@link DateTime#fromHTTP}, and {@link DateTime#fromRFC2822}. To create one from a custom string format, use {@link DateTime#fromFormat}. To create one from a native JS date, use {@link DateTime#fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
class DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone;

    let invalid =
      config.invalid ||
      (Number.isNaN(config.ts) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid input") : null) ||
      (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(config.ts) ? _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].now() : config.ts;

    let c = null,
      o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new DateTime({});
  }

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_9__["default"].utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isDate)(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_7__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromObject(options),
    });
  }

  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(milliseconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_7__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(seconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_7__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_7__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].now(),
      offsetProvis = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(opts.specificOffset)
        ? opts.specificOffset
        : zoneToUse.offset(tsNow),
      normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.normalizeObject)(obj, normalizeUnit),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.gregorianToWeek)(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.gregorianToOrdinal)(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.hasInvalidWeekData)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.hasInvalidOrdinalData)(normalized)
        : (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.hasInvalidGregorianData)(normalized),
      invalid = higherOrderInvalid || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.hasInvalidTimeData)(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.weekToGregorian)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.ordinalToGregorian)(normalized)
        : normalized,
      [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse),
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc,
      });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }

    return inst;
  }

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseISODate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseRFC2822Date)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseHTTPDate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }

  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(text) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(fmt)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidArgumentError("fromFormat requires an input string and a format");
    }

    const { locale = null, numberingSystem = null } = opts,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      }),
      [vals, parsedZone, specificOffset, invalid] = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.parseFromTokens)(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }

  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseSQL)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }

  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }

  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.gregorianToOrdinal)(this.c).ordinal : NaN;
  }

  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_12__["default"].months("short", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_12__["default"].months("long", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_12__["default"].weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_12__["default"].weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return (
        this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset
      );
    }
  }

  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isLeapYear)(this.year);
  }

  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.daysInMonth)(this.year, this.month);
  }

  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.daysInYear)(this.year) : NaN;
  }

  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.weeksInWeekYear)(this.weekYear) : NaN;
  }

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(_zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_9__["default"].instance(offset), opts);
  }

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(_settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone);
  }

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_7__.normalizeZone)(zone, _settings_js__WEBPACK_IMPORTED_MODULE_8__["default"].defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;

    const normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.normalizeObject)(values, normalizeUnit),
      settingWeekStuff =
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.weekYear) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.weekNumber) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.weekday),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.weekToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.gregorianToWeek)(this.c), ...normalized });
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.ordinal)) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.ordinalToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_1__.gregorianToOrdinal)(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(normalized.day)) {
        mixed.day = Math.min((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.daysInMonth)(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {},
      normalizedUnit = _duration_js__WEBPACK_IMPORTED_MODULE_3__["default"].normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      case "milliseconds":
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
          .startOf(unit)
          .minus(1)
      : this;
  }

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === "extended";

    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
    return c;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === "extended");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    format = "extended",
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    let c = includePrefix ? "T" : "";
    return (
      c +
      toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset)
    );
  }

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false } = {}) {
    let fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      fmt += " ";
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }

  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_3__["default"].invalid("created by diffing an invalid DateTime");
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.maybeArray)(unit).map(_duration_js__WEBPACK_IMPORTED_MODULE_3__["default"].normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = (0,_impl_diff_js__WEBPACK_IMPORTED_MODULE_14__["default"])(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? _interval_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromDateTimes(this, otherDateTime) : this;
  }

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return (
      this.isValid &&
      other.isValid &&
      this.valueOf() === other.valueOf() &&
      this.zone.equals(other.zone) &&
      this.loc.equals(other.loc)
    );
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }),
      padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit,
    });
  }

  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true,
    });
  }

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.bestBy)(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.bestBy)(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      });
    return (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.explainFromTokens)(localeToUse, text, fmt);
  }

  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
 * @private
 */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/duration.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/duration.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lowOrderMatrix": () => (/* binding */ lowOrderMatrix),
/* harmony export */   "casualMatrix": () => (/* binding */ casualMatrix),
/* harmony export */   "daysInYearAccurate": () => (/* binding */ daysInYearAccurate),
/* harmony export */   "daysInMonthAccurate": () => (/* binding */ daysInMonthAccurate),
/* harmony export */   "accurateMatrix": () => (/* binding */ accurateMatrix),
/* harmony export */   "default": () => (/* binding */ Duration)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");








const INVALID = "Invalid Duration";

// unit conversion constants
const lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
    minutes: { seconds: 60, milliseconds: 60 * 1000 },
    seconds: { milliseconds: 1000 },
  },
  casualMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000,
    },

    ...lowOrderMatrix,
  },
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: (daysInYearAccurate * 24) / 4,
      minutes: (daysInYearAccurate * 24 * 60) / 4,
      seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
      milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
    },
    ...lowOrderMatrix,
  };

// units ordered by size
const orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

const reverseUnits = orderedUnits.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added =
      !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration#fromMillis}, {@link Duration#fromObject}, or {@link Duration#fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration.months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
class Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_1__["default"].create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_2__.InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? "null" : typeof obj
        }`
      );
    }

    return new Duration({
      values: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.normalizeObject)(obj, Duration.normalizeUnit),
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
    });
  }

  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_2__.InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_3__.parseISODuration)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_3__.parseISOTimeOnly)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_2__.InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_5__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_2__.InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_2__.InvalidUnitError(unit);

    return normalized;
  }

  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a string representation of a Duration with all units included
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant. See {@link Intl.NumberFormat}.
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(opts = {}) {
    const l = orderedUnits
      .map((unit) => {
        const val = this.values[unit];
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts })
      .format(l);
  }

  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.roundTo)(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts,
    };

    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");

    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    let str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }

  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }

  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration),
      result = {};

    for (const k of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(dur.values, k) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, { values: result }, true);
  }

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.asNumber)(fn(this.values[k], k));
    }
    return clone(this, { values: result }, true);
  }

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.normalizeObject)(values, Duration.normalizeUnit) };
    return clone(this, { values: mixed });
  }

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem }),
      opts = { loc };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, { values: vals }, true);
  }

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {},
      accumulated = {},
      vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(vals[k])) {
          own += vals[k];
        }

        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (const down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] +=
          key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, { values: built }, true).normalize();
  }

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = -this.values[k];
    }
    return clone(this, { values: negated }, true);
  }

  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/errors.js":
/*!******************************************!*\
  !*** ./node_modules/luxon/src/errors.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidDateTimeError": () => (/* binding */ InvalidDateTimeError),
/* harmony export */   "InvalidIntervalError": () => (/* binding */ InvalidIntervalError),
/* harmony export */   "InvalidDurationError": () => (/* binding */ InvalidDurationError),
/* harmony export */   "ConflictingSpecificationError": () => (/* binding */ ConflictingSpecificationError),
/* harmony export */   "InvalidUnitError": () => (/* binding */ InvalidUnitError),
/* harmony export */   "InvalidArgumentError": () => (/* binding */ InvalidArgumentError),
/* harmony export */   "ZoneIsAbstractError": () => (/* binding */ ZoneIsAbstractError)
/* harmony export */ });
// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/conversions.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/conversions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gregorianToWeek": () => (/* binding */ gregorianToWeek),
/* harmony export */   "weekToGregorian": () => (/* binding */ weekToGregorian),
/* harmony export */   "gregorianToOrdinal": () => (/* binding */ gregorianToOrdinal),
/* harmony export */   "ordinalToGregorian": () => (/* binding */ ordinalToGregorian),
/* harmony export */   "hasInvalidWeekData": () => (/* binding */ hasInvalidWeekData),
/* harmony export */   "hasInvalidOrdinalData": () => (/* binding */ hasInvalidOrdinalData),
/* harmony export */   "hasInvalidGregorianData": () => (/* binding */ hasInvalidGregorianData),
/* harmony export */   "hasInvalidTimeData": () => (/* binding */ hasInvalidTimeData)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _invalid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid.js */ "./node_modules/luxon/src/impl/invalid.js");



const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new _invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}

function dayOfWeek(year, month, day) {
  const js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isLeapYear)(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isLeapYear)(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex((i) => i < ordinal),
    day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.weeksInWeekYear)(weekYear);
  } else if (weekNumber > (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.weeksInWeekYear)(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return { weekYear, weekNumber, weekday, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.timeObject)(gregObj) };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.daysInYear)(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.daysInYear)(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.daysInYear)(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.timeObject)(weekData) };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.timeObject)(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.timeObject)(ordinalData) };
}

function hasInvalidWeekData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isInteger)(obj.weekYear),
    validWeek = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(obj.weekNumber, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.weeksInWeekYear)(obj.weekYear)),
    validWeekday = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isInteger)(obj.year),
    validOrdinal = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(obj.ordinal, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.daysInYear)(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isInteger)(obj.year),
    validMonth = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(obj.month, 1, 12),
    validDay = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(obj.day, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.daysInMonth)(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour =
      (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(hour, 0, 23) ||
      (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
    validMinute = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(minute, 0, 59),
    validSecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(second, 0, 59),
    validMillisecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.integerBetween)(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/diff.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration.js */ "./node_modules/luxon/src/duration.js");


function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(),
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ["days", dayDiff],
  ];

  const results = {};
  let lowestOrder, highWater;

  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });

      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  } else {
    return duration;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/digits.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/digits.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDigits": () => (/* binding */ parseDigits),
/* harmony export */   "digitRegex": () => (/* binding */ digitRegex)
/* harmony export */ });
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d",
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}

function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/english.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/english.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monthsLong": () => (/* binding */ monthsLong),
/* harmony export */   "monthsShort": () => (/* binding */ monthsShort),
/* harmony export */   "monthsNarrow": () => (/* binding */ monthsNarrow),
/* harmony export */   "months": () => (/* binding */ months),
/* harmony export */   "weekdaysLong": () => (/* binding */ weekdaysLong),
/* harmony export */   "weekdaysShort": () => (/* binding */ weekdaysShort),
/* harmony export */   "weekdaysNarrow": () => (/* binding */ weekdaysNarrow),
/* harmony export */   "weekdays": () => (/* binding */ weekdays),
/* harmony export */   "meridiems": () => (/* binding */ meridiems),
/* harmony export */   "erasLong": () => (/* binding */ erasLong),
/* harmony export */   "erasShort": () => (/* binding */ erasShort),
/* harmony export */   "erasNarrow": () => (/* binding */ erasNarrow),
/* harmony export */   "eras": () => (/* binding */ eras),
/* harmony export */   "meridiemForDateTime": () => (/* binding */ meridiemForDateTime),
/* harmony export */   "weekdayForDateTime": () => (/* binding */ weekdayForDateTime),
/* harmony export */   "monthForDateTime": () => (/* binding */ monthForDateTime),
/* harmony export */   "eraForDateTime": () => (/* binding */ eraForDateTime),
/* harmony export */   "formatRelativeTime": () => (/* binding */ formatRelativeTime),
/* harmony export */   "formatString": () => (/* binding */ formatString)
/* harmony export */ });
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");



function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}

const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}

const meridiems = ["AM", "PM"];

const erasLong = ["Before Christ", "Anno Domini"];

const erasShort = ["BC", "AD"];

const erasNarrow = ["B", "A"];

function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
  };

  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
      default: // fall through
    }
  }

  const isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow
      ? singular
        ? lilUnits[1]
        : lilUnits[2] || lilUnits[1]
      : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  const filtered = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.pick)(knownFormat, [
      "weekday",
      "era",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "timeZoneName",
      "hourCycle",
    ]),
    key = stringify(filtered),
    dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
  switch (key) {
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_SHORT):
      return "M/d/yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_MED):
      return "LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FULL):
      return "LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_HUGE):
      return "EEEE, LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_SIMPLE):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SECONDS):
      return "h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SHORT_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_LONG_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_SIMPLE):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SECONDS):
      return "HH:mm:ss";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED):
      return "LLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE):
      return dateTimeHuge;
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return dateTimeHuge;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/formats.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/formats.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_SHORT": () => (/* binding */ DATE_SHORT),
/* harmony export */   "DATE_MED": () => (/* binding */ DATE_MED),
/* harmony export */   "DATE_MED_WITH_WEEKDAY": () => (/* binding */ DATE_MED_WITH_WEEKDAY),
/* harmony export */   "DATE_FULL": () => (/* binding */ DATE_FULL),
/* harmony export */   "DATE_HUGE": () => (/* binding */ DATE_HUGE),
/* harmony export */   "TIME_SIMPLE": () => (/* binding */ TIME_SIMPLE),
/* harmony export */   "TIME_WITH_SECONDS": () => (/* binding */ TIME_WITH_SECONDS),
/* harmony export */   "TIME_WITH_SHORT_OFFSET": () => (/* binding */ TIME_WITH_SHORT_OFFSET),
/* harmony export */   "TIME_WITH_LONG_OFFSET": () => (/* binding */ TIME_WITH_LONG_OFFSET),
/* harmony export */   "TIME_24_SIMPLE": () => (/* binding */ TIME_24_SIMPLE),
/* harmony export */   "TIME_24_WITH_SECONDS": () => (/* binding */ TIME_24_WITH_SECONDS),
/* harmony export */   "TIME_24_WITH_SHORT_OFFSET": () => (/* binding */ TIME_24_WITH_SHORT_OFFSET),
/* harmony export */   "TIME_24_WITH_LONG_OFFSET": () => (/* binding */ TIME_24_WITH_LONG_OFFSET),
/* harmony export */   "DATETIME_SHORT": () => (/* binding */ DATETIME_SHORT),
/* harmony export */   "DATETIME_SHORT_WITH_SECONDS": () => (/* binding */ DATETIME_SHORT_WITH_SECONDS),
/* harmony export */   "DATETIME_MED": () => (/* binding */ DATETIME_MED),
/* harmony export */   "DATETIME_MED_WITH_SECONDS": () => (/* binding */ DATETIME_MED_WITH_SECONDS),
/* harmony export */   "DATETIME_MED_WITH_WEEKDAY": () => (/* binding */ DATETIME_MED_WITH_WEEKDAY),
/* harmony export */   "DATETIME_FULL": () => (/* binding */ DATETIME_FULL),
/* harmony export */   "DATETIME_FULL_WITH_SECONDS": () => (/* binding */ DATETIME_FULL_WITH_SECONDS),
/* harmony export */   "DATETIME_HUGE": () => (/* binding */ DATETIME_HUGE),
/* harmony export */   "DATETIME_HUGE_WITH_SECONDS": () => (/* binding */ DATETIME_HUGE_WITH_SECONDS)
/* harmony export */ });
/**
 * @private
 */

const n = "numeric",
  s = "short",
  l = "long";

const DATE_SHORT = {
  year: n,
  month: n,
  day: n,
};

const DATE_MED = {
  year: n,
  month: s,
  day: n,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
};

const DATE_FULL = {
  year: n,
  month: l,
  day: n,
};

const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
};

const TIME_SIMPLE = {
  hour: n,
  minute: n,
};

const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l,
};

const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
};

const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};


/***/ }),

/***/ "./node_modules/luxon/src/impl/formatter.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/impl/formatter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Formatter)
/* harmony export */ });
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");




function stringifyTokens(splits, tokenToString) {
  let s = "";
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_SHORT,
  DD: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED,
  DDD: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_FULL,
  DDDD: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_HUGE,
  t: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_SIMPLE,
  tt: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SECONDS,
  ttt: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SHORT_OFFSET,
  tttt: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_LONG_OFFSET,
  T: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_SIMPLE,
  TT: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SECONDS,
  TTT: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SHORT_OFFSET,
  TTTT: _formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_LONG_OFFSET,
  f: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT,
  ff: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED,
  fff: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL,
  ffff: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE,
  F: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT_WITH_SECONDS,
  FF: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_SECONDS,
  FFF: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL_WITH_SECONDS,
  FFFF: _formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE_WITH_SECONDS,
};

/**
 * @private
 */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    let current = null,
      currentFull = "",
      bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }

  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.padStart)(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = (opts, extract) => this.loc.extract(dt, opts, extract),
      formatOffset = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = () =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_2__.meridiemForDateTime(dt)
          : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      month = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_2__.monthForDateTime(dt, length)
          : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"),
      weekday = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_2__.weekdayForDateTime(dt, length)
          : string(
              standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
              "weekday"
            ),
      maybeMacro = (token) => {
        const formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = (length) =>
        knownEnglish ? _english_js__WEBPACK_IMPORTED_MODULE_2__.eraForDateTime(dt, length) : string({ era: length }, "era"),
      tokenToString = (token) => {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          // hours
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          // offset
          case "Z":
            // like +6
            return formatOffset({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            // like +06:00
            return formatOffset({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            // like +0600
            return formatOffset({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          // zone
          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            // like 1
            return this.num(dt.weekday);
          case "ccc":
            // like 'Tues'
            return weekday("short", true);
          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);
          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            // like 1
            return this.num(dt.weekday);
          case "EEE":
            // like 'Tues'
            return weekday("short", false);
          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);
          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone
          case "L":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric", day: "numeric" }, "month")
              : this.num(dt.month);
          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter
              ? string({ month: "2-digit", day: "numeric" }, "month")
              : this.num(dt.month, 2);
          case "LLL":
            // like Jan
            return month("short", true);
          case "LLLL":
            // like January
            return month("long", true);
          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format
          case "M":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric" }, "month")
              : this.num(dt.month);
          case "MM":
            // like 01
            return useDateTimeFormatter
              ? string({ month: "2-digit" }, "month")
              : this.num(dt.month, 2);
          case "MMM":
            // like Jan
            return month("short", false);
          case "MMMM":
            // like January
            return month("long", false);
          case "MMMMM":
            // like J
            return month("narrow", false);
          // years
          case "y":
            // like 2014
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            // like 14
            return useDateTimeFormatter
              ? string({ year: "2-digit" }, "year")
              : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            // like 0012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 4);
          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 6);
          // eras
          case "G":
            // like AD
            return era("short");
          case "GG":
            // like Anno Domini
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            // like 1
            return this.num(dt.quarter);
          case "qq":
            // like 01
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1000));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      tokenToString = (lildur) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          return this.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(
        (found, { literal, val }) => (literal ? found : found.concat(val)),
        []
      ),
      collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/invalid.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/invalid.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invalid)
/* harmony export */ });
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/locale.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Locale)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");






// todo - remap caching

let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    const { numberingSystem, calendar } = options;
    // return the smaller one so that we can append the calendar and numbering overrides to it
    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return (
      loc.numberingSystem === "latn" ||
      !loc.locale ||
      loc.locale.startsWith("en") ||
      new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn"
    );
  }
}

/**
 * @private
 */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      const fixed = this.floor ? Math.floor(i) : (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.roundTo)(i, 3);
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.padStart)(fixed, this.padTo);
    }
  }
}

/**
 * @private
 */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;

    let z;
    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    const intlOpts = { ...this.opts };
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
 * @private
 */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.hasRelative)()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return _english_js__WEBPACK_IMPORTED_MODULE_3__.formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}

/**
 * @private
 */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || _settings_js__WEBPACK_IMPORTED_MODULE_4__["default"].defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || _settings_js__WEBPACK_IMPORTED_MODULE_4__["default"].defaultNumberingSystem;
    const outputCalendarR = outputCalendar || _settings_js__WEBPACK_IMPORTED_MODULE_4__["default"].defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness =
      (this.numberingSystem === null || this.numberingSystem === "latn") &&
      (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_3__.months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length },
        formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_3__.weekdays, () => {
      const intl = format
          ? { weekday: length, year: "numeric", month: "long", day: "numeric" }
          : { weekday: length },
        formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) =>
          this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems(defaultOK = true) {
    return listStuff(
      this,
      undefined,
      defaultOK,
      () => _english_js__WEBPACK_IMPORTED_MODULE_3__.meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [_datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].utc(2016, 11, 13, 9), _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }

        return this.meridiemCache;
      }
    );
  }

  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_3__.eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [_datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].utc(-40, 1, 1), _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].utc(2017, 1, 1)].map((dt) =>
          this.extract(dt, intl, "era")
        );
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    );
  }

  equals(other) {
    return (
      this.locale === other.locale &&
      this.numberingSystem === other.numberingSystem &&
      this.outputCalendar === other.outputCalendar
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/regexParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/regexParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseISODate": () => (/* binding */ parseISODate),
/* harmony export */   "parseRFC2822Date": () => (/* binding */ parseRFC2822Date),
/* harmony export */   "parseHTTPDate": () => (/* binding */ parseHTTPDate),
/* harmony export */   "parseISODuration": () => (/* binding */ parseISODuration),
/* harmony export */   "parseISOTimeOnly": () => (/* binding */ parseISOTimeOnly),
/* harmony export */   "parseSQL": () => (/* binding */ parseSQL)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");





/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) =>
    extractors
      .reduce(
        ([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{ ...mergedVals, ...val }, mergedZone || zone, next];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${offsetRegex.source}?`),
  isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`),
  isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
  isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
  isoOrdinalRegex = /(\d{4})-?(\d{3})/,
  extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
  extractISOOrdinalData = simpleParse("year", "ordinal"),
  sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, // dumbed-down version of the ISO one
  sqlTimeRegex = RegExp(
    `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${_util_js__WEBPACK_IMPORTED_MODULE_0__.ianaRegex.source}))?`
  ),
  sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(m) ? fallback : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1],
    fullOffset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration =
  /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] =
    match;

  const hasNegativePrefix = s[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";

  const maybeNegate = (num, force = false) =>
    num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num;

  return [
    {
      years: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(yearStr)),
      months: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(monthStr)),
      weeks: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(weekStr)),
      days: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(dayStr)),
      hours: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(hourStr)),
      minutes: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(minuteStr)),
      seconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr)) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr),
    month: _english_js__WEBPACK_IMPORTED_MODULE_3__.monthsShort.indexOf(monthStr) + 1,
    day: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(dayStr),
    hour: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(hourStr),
    minute: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(minuteStr),
  };

  if (secondStr) result.second = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(secondStr);
  if (weekdayStr) {
    result.weekday =
      weekdayStr.length > 3
        ? _english_js__WEBPACK_IMPORTED_MODULE_3__.weekdaysLong.indexOf(weekdayStr) + 1
        : _english_js__WEBPACK_IMPORTED_MODULE_3__.weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr,
    ] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(offHourStr, offMinuteStr);
  }

  return [result, new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_1__["default"](offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^)]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}

// http date

const rfc1123 =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 =
    /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset
);
const extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);

/**
 * @private
 */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOYmdTimeOffsetAndIANAZone = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/tokenParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/tokenParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "explainFromTokens": () => (/* binding */ explainFromTokens),
/* harmony export */   "parseFromTokens": () => (/* binding */ parseFromTokens)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _digits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digits.js */ "./node_modules/luxon/src/impl/digits.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");








const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post((0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.parseDigits)(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `( |${NBSP})`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s]) =>
        strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
    };
  }
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.signedOffset)(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  const one = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc),
    two = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{2}"),
    three = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{3}"),
    four = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{4}"),
    six = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{6}"),
    oneOrTwo = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{1,2}"),
    oneToThree = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{1,3}"),
    oneToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{1,6}"),
    oneToNine = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{1,9}"),
    twoToFour = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{2,4}"),
    fourToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_0__.digitRegex)(loc, "{4,6}"),
    literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true }),
    unitate = (t) => {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);
        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_1__.untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true, false), 1);
        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false, false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_1__.untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        default:
          return literal(t);
      }
    };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy",
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM",
  },
  day: {
    numeric: "d",
    "2-digit": "dd",
  },
  weekday: {
    short: "EEE",
    long: "EEEE",
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh",
  },
  minute: {
    numeric: "m",
    "2-digit": "mm",
  },
  second: {
    numeric: "s",
    "2-digit": "ss",
  },
};

function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;

  if (type === "literal") {
    return {
      literal: true,
      val: value,
    };
  }

  const style = formatOpts[type];

  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(handlers, i)) {
        const h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(matches.z)) {
    zone = _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(matches.z);
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(matches.Z)) {
    if (!zone) {
      zone = new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_3__["default"](matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(matches.u)) {
    matches.S = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.parseMillis)(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = _datetime_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = _formatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  const formatter = _formatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());

  const tokens = parts.map((p) => tokenForPart(p, locale, formatOpts));

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(_formatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].parseFormat(format), locale),
    units = tokens.map((t) => unitForToken(t, locale)),
    disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units),
      regex = RegExp(regexString, "i"),
      [rawMatches, matches] = match(input, regex, handlers),
      [result, zone, specificOffset] = matches
        ? dateTimeFromMatches(matches)
        : [null, null, undefined];
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(matches, "a") && (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(matches, "H")) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}

function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/util.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/util.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "hasRelative": () => (/* binding */ hasRelative),
/* harmony export */   "maybeArray": () => (/* binding */ maybeArray),
/* harmony export */   "bestBy": () => (/* binding */ bestBy),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "hasOwnProperty": () => (/* binding */ hasOwnProperty),
/* harmony export */   "integerBetween": () => (/* binding */ integerBetween),
/* harmony export */   "floorMod": () => (/* binding */ floorMod),
/* harmony export */   "padStart": () => (/* binding */ padStart),
/* harmony export */   "parseInteger": () => (/* binding */ parseInteger),
/* harmony export */   "parseFloating": () => (/* binding */ parseFloating),
/* harmony export */   "parseMillis": () => (/* binding */ parseMillis),
/* harmony export */   "roundTo": () => (/* binding */ roundTo),
/* harmony export */   "isLeapYear": () => (/* binding */ isLeapYear),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "daysInMonth": () => (/* binding */ daysInMonth),
/* harmony export */   "objToLocalTS": () => (/* binding */ objToLocalTS),
/* harmony export */   "weeksInWeekYear": () => (/* binding */ weeksInWeekYear),
/* harmony export */   "untruncateYear": () => (/* binding */ untruncateYear),
/* harmony export */   "parseZoneInfo": () => (/* binding */ parseZoneInfo),
/* harmony export */   "signedOffset": () => (/* binding */ signedOffset),
/* harmony export */   "asNumber": () => (/* binding */ asNumber),
/* harmony export */   "normalizeObject": () => (/* binding */ normalizeObject),
/* harmony export */   "formatOffset": () => (/* binding */ formatOffset),
/* harmony export */   "timeObject": () => (/* binding */ timeObject),
/* harmony export */   "ianaRegex": () => (/* binding */ ianaRegex)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/



/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    const f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits,
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 =
      (weekYear +
        Math.floor(weekYear / 4) -
        Math.floor(weekYear / 100) +
        Math.floor(weekYear / 400)) %
      7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}

const ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;


/***/ }),

/***/ "./node_modules/luxon/src/impl/zoneUtil.js":
/*!*************************************************!*\
  !*** ./node_modules/luxon/src/impl/zoneUtil.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeZone": () => (/* binding */ normalizeZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/**
 * @private
 */








function normalizeZone(input, defaultZone) {
  let offset;
  if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(input) || input === null) {
    return defaultZone;
  } else if (input instanceof _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    return input;
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system") return defaultZone;
    else if (lowered === "utc" || lowered === "gmt") return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance;
    else if (_zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].isValidSpecifier(lowered)) return _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(input);
    else return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].parseSpecifier(lowered) || new _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_4__["default"](input);
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(input)) {
    return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_4__["default"](input);
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/info.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/info.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");








/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
class Info {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = _settings_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultZone) {
    const proto = _datetime_js__WEBPACK_IMPORTED_MODULE_1__["default"].now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].isValidSpecifier(zone) && _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].isValidZone(zone);
  }

  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__.normalizeZone)(input, _settings_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultZone);
  }

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(locale).meridiems();
  }

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(locale, null, "gregory").eras(length);
  }

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasRelative)() };
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/interval.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/interval.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interval)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");






const INVALID = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval#fromDateTimes}, {@link Interval#after}, {@link Interval#before}, or {@link Interval#fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval#merge}, {@link Interval#xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
class Interval {
  /**
   * @private
   */
  constructor(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_1__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_3__.friendlyDateTime)(start),
      builtEnd = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_3__.friendlyDateTime)(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    } else {
      return validateError;
    }
  }

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_3__.friendlyDateTime)(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_3__.friendlyDateTime)(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s, e] = (text || "").split("/", 2);
    if (s && e) {
      let start, startIsValid;
      try {
        start = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end, endIsValid;
      try {
        end = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
        .map(_datetime_js__WEBPACK_IMPORTED_MODULE_3__.friendlyDateTime)
        .filter((d) => this.contains(d))
        .sort(),
      results = [];
    let { s } = this,
      i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    let { s } = this,
      idx = 1,
      next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null,
      currentCount = 0;
    const results = [],
      ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" },
      ]),
      flattened = Array.prototype.concat(...ends),
      arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(dateFormat, { separator = " – " } = {}) {
    if (!this.isValid) return INVALID;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"].invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/settings.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/settings.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");






let now = () => Date.now(),
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }

  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n) {
    now = n;
  }

  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_0__.normalizeZone)(defaultZone, _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].instance);
  }

  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetCache();
    _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetCache();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zone.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/zone.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zone)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");


/**
 * @interface
 */
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/IANAZone.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/zones/IANAZone.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IANAZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



const matchingRegex = RegExp(`^${_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.ianaRegex.source}$`);

let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
    [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date),
    filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i],
      pos = typeToPos[type];

    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
class IANAZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private **/
    this.zoneName = name;
    /** @private **/
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override **/
  get type() {
    return "iana";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale, this.name);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name),
      [year, month, day, hour, minute, second] = dtf.formatToParts
        ? partsOffset(dtf, date)
        : hackyOffset(dtf, date);

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.objToLocalTS)({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }

  /** @override **/
  get isValid() {
    return this.valid;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/fixedOffsetZone.js":
/*!*********************************************************!*\
  !*** ./node_modules/luxon/src/zones/fixedOffsetZone.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FixedOffsetZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
class FixedOffsetZone extends _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_1__.signedOffset)(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private **/
    this.fixed = offset;
  }

  /** @override **/
  get type() {
    return "fixed";
  }

  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_1__.formatOffset)(this.fixed, "narrow")}`;
  }

  /** @override **/
  offsetName() {
    return this.name;
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_1__.formatOffset)(this.fixed, format);
  }

  /** @override **/
  get isUniversal() {
    return true;
  }

  /** @override **/
  offset() {
    return this.fixed;
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/invalidZone.js":
/*!*****************************************************!*\
  !*** ./node_modules/luxon/src/zones/invalidZone.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvalidZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");


/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
class InvalidZone extends _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override **/
  get type() {
    return "invalid";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName() {
    return null;
  }

  /** @override **/
  formatOffset() {
    return "";
  }

  /** @override **/
  offset() {
    return NaN;
  }

  /** @override **/
  equals() {
    return false;
  }

  /** @override **/
  get isValid() {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/systemZone.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/zones/systemZone.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SystemZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
class SystemZone extends _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton === null) {
      singleton = new SystemZone();
    }
    return singleton;
  }

  /** @override **/
  get type() {
    return "system";
  }

  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_1__.parseZoneInfo)(ts, format, locale);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_1__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/books-data.js":
/*!***********************************!*\
  !*** ./src/modules/books-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ booksData)
/* harmony export */ });
class booksData {
  static fetchData() {
    if(localStorage.getItem('books') === null) {
      localStorage.setItem('books', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('books'));
  }

  static updateData(data) {
    localStorage.setItem('books', JSON.stringify(data));
  }
}

/***/ }),

/***/ "./src/modules/dates.js":
/*!******************************!*\
  !*** ./src/modules/dates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon/src/luxon.js */ "./node_modules/luxon/src/datetime.js");


const displayDate = () => {
  const desktopDate = document.querySelector('.desktop-date');
  const mobileDate = document.querySelector('.mobile-date');
  const dt = luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__["default"].now();
  desktopDate.innerHTML = dt.toLocaleString(luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__["default"].DATETIME_MED_WITH_SECONDS);
  mobileDate.innerHTML = `
  <span>${dt.toLocaleString(luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__["default"].TIME_WITH_SECONDS)}</span>
  <br/>
  <span>${dt.toLocaleString()}</span>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayDate);

/***/ }),

/***/ "./src/modules/display-books.js":
/*!**************************************!*\
  !*** ./src/modules/display-books.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayLibrary": () => (/* binding */ displayLibrary),
/* harmony export */   "libraryMessage": () => (/* binding */ libraryMessage)
/* harmony export */ });
/* harmony import */ var _books_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books-data.js */ "./src/modules/books-data.js");


const listContainer = document.querySelector('.books');

class displayLibrary {
  static loadBooks() {
    listContainer.innerHTML = '';
    const localBooks = _books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData();
    for (let i = 0; i < localBooks.length; i += 1) {
      listContainer.innerHTML += `
        <li class="book">
          <p class="book-info">${localBooks[i].title.toUpperCase()}
          <span>by</span>
          ${localBooks[i].author.toUpperCase()}</p>
          <button id="${i}" class="remove" type="button">Remove</button>
        </li>`;
    }
  }
}

const libraryMessage = () => {
  const emptyMessage = document.querySelector('.empty-message');
  if (_books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData().length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
};



/***/ }),

/***/ "./src/modules/dom-events.js":
/*!***********************************!*\
  !*** ./src/modules/dom-events.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ "./src/modules/user.js");
/* harmony import */ var _display_books_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-books.js */ "./src/modules/display-books.js");
/* harmony import */ var _edit_library_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-library.js */ "./src/modules/edit-library.js");
/* harmony import */ var _navigations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigations.js */ "./src/modules/navigations.js");
/* harmony import */ var _books_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books-data.js */ "./src/modules/books-data.js");






const keyUp = (e, btn) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn.click();
  }
};

const events = () => {
  const addButton = document.querySelector('#add');
  const listContainer = document.querySelector('.books');
  const list = document.querySelectorAll('.list, .fa-book');
  const goAddBook = document.querySelectorAll('.add-book, .fa-plus-square');
  const contact = document.querySelectorAll('.contact');
  const goToAddPage = document.querySelector('.add-message');
  const bookAuthor = document.querySelector('#author');
  const bookTitle = document.querySelector('#title');
  const menu = document.querySelector('.fa-bars');
  const mobileMenu = document.querySelector('.nav-links.mobile');
  const homeHeader = document.querySelector('.header-home');
  const closeMenu = document.querySelector('.fa-times');
  const booksIcon = document.querySelector('.fa-book');
  const addBookIcon = document.querySelector('.fa-plus-square');

  window.addEventListener('load', () => {
    list.forEach((n) => {
      n.classList.add('list-focus');
    });
    (0,_user_js__WEBPACK_IMPORTED_MODULE_0__.userName)()
    if (localStorage.getItem('user') !== null && _user_js__WEBPACK_IMPORTED_MODULE_0__.userData.fetchData().length > 0) {
      (0,_user_js__WEBPACK_IMPORTED_MODULE_0__.greetUser)();
    }
    _display_books_js__WEBPACK_IMPORTED_MODULE_1__.displayLibrary.loadBooks();
    (0,_display_books_js__WEBPACK_IMPORTED_MODULE_1__.libraryMessage)();
  });

  menu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    homeHeader.style.display = 'none';
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    homeHeader.style.display = 'flex';
  });

  _user_js__WEBPACK_IMPORTED_MODULE_0__.modalContainer.addEventListener('click', (event) => {
    const name = document.querySelector('.user');
    if (event.target.classList.contains('enter')) {
      if (name.value !== '') {
        event.path[3].innerHTML = '';
        const userdata = { username: name.value };
        const localData = _user_js__WEBPACK_IMPORTED_MODULE_0__.userData.fetchData();
        localData.push(userdata);
        _user_js__WEBPACK_IMPORTED_MODULE_0__.userData.setData(localData);
        (0,_user_js__WEBPACK_IMPORTED_MODULE_0__.greetUser)();
      }
    }
    if (event.target.classList.contains('close')) {
      _user_js__WEBPACK_IMPORTED_MODULE_0__.modalContainer.innerHTML = '';
    }
  });

  addButton.addEventListener('click', () => {
    _edit_library_js__WEBPACK_IMPORTED_MODULE_2__["default"].addBook();
    _display_books_js__WEBPACK_IMPORTED_MODULE_1__.displayLibrary.loadBooks();
    (0,_display_books_js__WEBPACK_IMPORTED_MODULE_1__.libraryMessage)();
  });

  bookAuthor.addEventListener('keyup', (event) => {
    keyUp(event, addButton);
  });

  bookTitle.addEventListener('keyup', (event) => {
    keyUp(event, addButton);
  });

  _user_js__WEBPACK_IMPORTED_MODULE_0__.modalContainer.addEventListener('keyup', (event) => {
    if (event.target.classList.contains('user')) {
      const enterName = document.querySelector('.enter');
      keyUp(event, enterName);
    }
  });

  list.forEach((n) => {
    n.addEventListener('click', () => {
      _navigations_js__WEBPACK_IMPORTED_MODULE_3__.navigation.showList();
      (0,_display_books_js__WEBPACK_IMPORTED_MODULE_1__.libraryMessage)();
      addBookIcon.style.display = 'block';
      booksIcon.style.display = 'none';
    });
  });

  goAddBook.forEach((n) => {
    n.addEventListener('click', () => {
      _navigations_js__WEBPACK_IMPORTED_MODULE_3__.navigation.showAddBook();
      (0,_display_books_js__WEBPACK_IMPORTED_MODULE_1__.libraryMessage)();
      addBookIcon.style.display = 'none';
      booksIcon.style.display = 'block';
    });
  });

  contact.forEach((n) => {
    n.addEventListener('click', () => {
      _navigations_js__WEBPACK_IMPORTED_MODULE_3__.navigation.showContactInfo();
      (0,_display_books_js__WEBPACK_IMPORTED_MODULE_1__.libraryMessage)();
      addBookIcon.style.display = 'none';
      booksIcon.style.display = 'block';
    });
  });

  goToAddPage.addEventListener('click', () => {
    _navigations_js__WEBPACK_IMPORTED_MODULE_3__.navigation.showAddBook();
    (0,_display_books_js__WEBPACK_IMPORTED_MODULE_1__.libraryMessage)();
  });

  listContainer.addEventListener('click', (event) => {
    _edit_library_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeBook(event);
    _display_books_js__WEBPACK_IMPORTED_MODULE_1__.displayLibrary.loadBooks();
    (0,_display_books_js__WEBPACK_IMPORTED_MODULE_1__.libraryMessage)();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);


/***/ }),

/***/ "./src/modules/edit-library.js":
/*!*************************************!*\
  !*** ./src/modules/edit-library.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ manipulateBooks)
/* harmony export */ });
/* harmony import */ var _books_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books-data.js */ "./src/modules/books-data.js");


const bookAuthor = document.querySelector('#author');
const bookTitle = document.querySelector('#title');
const addedMsg = document.querySelector('.book-added-msg');

class manipulateBooks {
  static removeBook(e) {
    if (e.target.classList.value === 'remove') {
      const id = Number(e.target.id);
      const storedBooks = _books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData();
      manipulateBooks.deleteBook(id, storedBooks);
    }
  }

  static deleteBook(index, arr) {
    delete arr[index];
    const newBooks = arr.filter((val) => val !== null);
    _books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateData(newBooks);
  }

  static addBook() {
    if (localStorage.getItem('books') === null) {
      _books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateData([]);
    }
    if (bookAuthor.value !== '' && bookTitle.value !== '') {
      const newBooks = _books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData();
      const newBook = { author: bookAuthor.value, title: bookTitle.value };
      newBooks.push(newBook);
      _books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateData(newBooks);
      bookAuthor.value = '';
      bookTitle.value = '';
      setTimeout(() => { addedMsg.style.display = 'block'; }, 300);
      setTimeout(() => { addedMsg.style.display = 'none'; }, 1500);
    }
  }
}


/***/ }),

/***/ "./src/modules/navigations.js":
/*!************************************!*\
  !*** ./src/modules/navigations.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation),
/* harmony export */   "booksContainer": () => (/* binding */ booksContainer)
/* harmony export */ });
const booksContainer = document.querySelector('.books-container');
const goAddBook = document.querySelectorAll('.add-book, .fa-plus-square');
const contact = document.querySelectorAll('.contact');
const list = document.querySelectorAll('.list');
const inputField = document.querySelector('.input-field');
const contactInfo = document.querySelector('.contact-info');

class navigation {
  static showList() {
    booksContainer.style.display = 'flex';
    inputField.style.display = 'none';
    contactInfo.style.display = 'none';
    list.forEach((n) => {
      n.classList.add('list-focus');
    });
    goAddBook.forEach((n) => {
      if (n.classList.contains('add-book')) {
        n.classList.remove('add-book-focus');
      }
    });
    contact.forEach((n) => {
      n.classList.remove('contact-focus');
    });
  }

  static showAddBook() {
    inputField.style.display = 'flex';
    booksContainer.style.display = 'none';
    contactInfo.style.display = 'none';
    goAddBook.forEach((n) => {
      if (n.classList.contains('add-book')) {
        n.classList.add('add-book-focus');
      }
    });
    list.forEach((n) => {
      n.classList.remove('list-focus');
    });
    contact.forEach((n) => {
      n.classList.remove('contact-focus');
    });
  }

  static showContactInfo() {
    contactInfo.style.display = 'flex';
    booksContainer.style.display = 'none';
    inputField.style.display = 'none';
    contact.forEach((n) => {
      n.classList.add('contact-focus');
    });
    goAddBook.forEach((n) => {
      if (n.classList.contains('add-book')) {
        n.classList.remove('add-book-focus');
      }
    });
    list.forEach((n) => {
      n.classList.remove('list-focus');
    });
  }
}



/***/ }),

/***/ "./src/modules/user.js":
/*!*****************************!*\
  !*** ./src/modules/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalContainer": () => (/* binding */ modalContainer),
/* harmony export */   "userName": () => (/* binding */ userName),
/* harmony export */   "greetUser": () => (/* binding */ greetUser),
/* harmony export */   "userData": () => (/* binding */ userData)
/* harmony export */ });
/* harmony import */ var luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon/src/luxon.js */ "./node_modules/luxon/src/datetime.js");


const modalContainer = document.querySelector('.modal-container');

class userData {
  static fetchData() {
    if(localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('user'));
  }

  static setData(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
}

const userName = () => {
  modalContainer.innerHTML = `
  <div class="modal">
    <h1 class="greeting">
       <span>Hey there new friend.</span>
       <span>I'm your personal library.</span>
    </h1>
    <input type="text" placeholder="What should I call you?" value="" class="user">
    <div class="modal-buttons">
      <button type="button" class="close">Close</button>
      <button type="button" class="enter">Enter</button>
    </div>
  </div>
  `;
};

const greetUser = () => {
  const greet = document.querySelector('#greet');
  const { hour } = luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__["default"].now();
  if (hour < 12) {
    greet.innerHTML = `${'Good Morning'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 12 && hour < 18) {
    greet.innerHTML = `${'Good Afternoon'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 18) {
    greet.innerHTML = `${'Good Evening'} ${userData.fetchData()[0].username}`;
  }
};



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_dates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dates.js */ "./src/modules/dates.js");
/* harmony import */ var _modules_display_books_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display-books.js */ "./src/modules/display-books.js");
/* harmony import */ var _modules_dom_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom-events.js */ "./src/modules/dom-events.js");





setInterval(_modules_dates_js__WEBPACK_IMPORTED_MODULE_1__["default"], 1000);
(0,_modules_display_books_js__WEBPACK_IMPORTED_MODULE_2__.libraryMessage)();
(0,_modules_dom_events_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFL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QUNBOztBQUVBLFVBQVUsSUFBSTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEMsVUFB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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUN3QjtBQUNlO0FBQ2Y7QUFDN0M7QUFDQSxZQUFZLHlEQUFXO0FBQ3ZCLHlFQUFjO0FBQ2Qsa0VBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2RhdGV0aW1lLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvZXJyb3JzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2RpZmYuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZGlnaXRzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2VuZ2xpc2guanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9mb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvaW52YWxpZC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvcmVnZXhQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvdG9rZW5QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvdXRpbC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC96b25lVXRpbC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9JQU5BWm9uZS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvem9uZXMvZml4ZWRPZmZzZXRab25lLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9pbnZhbGlkWm9uZS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvem9uZXMvc3lzdGVtWm9uZS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL21vZHVsZXMvYm9va3MtZGF0YS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9tb2R1bGVzL2RhdGVzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL21vZHVsZXMvZGlzcGxheS1ib29rcy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9tb2R1bGVzL2RvbS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9zcmMvbW9kdWxlcy9lZGl0LWxpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9tb2R1bGVzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlBRTQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDhCO1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtZGVza3RvcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tb2JpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1kZXNrdG9wIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi4zdncsIDEuOHJlbSwgMS44cmVtKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjRlbSAxLjRlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjRyZW0gMC4ycmVtIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjN2dywgMXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuM3JlbSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDAgMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxLjVyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyBwLFxcclxcbi5jb250YWN0LWluZm8gbGkge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuMjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpICsgbGkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZm9jdXMsXFxyXFxuLmFkZC1ib29rLWZvY3VzLFxcclxcbi5jb250YWN0LWZvY3VzIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJlZCA0cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogbWF4KDQuMnZ3LCAzLjhyZW0pO1xcclxcbiAgd2lkdGg6IG1heCgxMDAlLCAzNXJlbSk7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubXNnLWRhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2dyZWV0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS43dncsIDEuNHJlbSk7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxLjNyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLm1vYmlsZS1kYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwcmVtO1xcclxcbiAgbGVmdDogMjUlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IHJnYmEoMCwgMCwgMTM5LCAwLjc1KSBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0aW5nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmVldGluZyBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtIDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51c2VyOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1idXR0b25zIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UsXFxyXFxuLmVudGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDMuMnZ3LCAxLjhyZW0pO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktbWVzc2FnZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogbWF4KDEuNXZ3LCAwLjVyZW0pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4KDE1dncsIDEwcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5LW1lc3NhZ2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjV2dywgMXJlbSk7XFxyXFxuICBtYXJnaW46IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW1lc3NhZ2Uge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHJnYmEoMjUsIDI1LCAyNywgMC43NSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxcmVtKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMnZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogbWF4KDEwMCUsIDM1cmVtKTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMjAxLCA0MSwgNDEpO1xcclxcbiAgd2lkdGg6IG1heCg3MCUsIDMwcmVtKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1pbmZvIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxLjJyZW0pO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMjgsIDAsIDEyOCwgMC43Nik7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMXJlbSk7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjRyZW0gMC4ycmVtIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ib29rcyBsaTpudGgtY2hpbGQob2RkKSAucmVtb3ZlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTI4LCAwLCAxMjgsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKGV2ZW4pIC5yZW1vdmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGkgcCArIHAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IG1heCgwLjh2dywgMC41cmVtKTtcXHJcXG4gIHdpZHRoOiBtYXgoMzB2dywgMjByZW0pO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNHZ3LCAxLjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1hZGRlZC1tc2cge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS40dncsIDEuMnJlbSk7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuOXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDguOWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVhY2gtb3V0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC4zZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1wbHVzLXNxdWFyZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMge1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5kYXRlLm1vYmlsZS1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGF0ZS5kZXNrdG9wLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLXBsdXMtc3F1YXJlIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiA3cmVtO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1ib29rIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiA3cmVtO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1kZXNrdG9wIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbW9iaWxlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzLm1vYmlsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlua3MubW9iaWxlIGxpOmxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItaG9tZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAxLjJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LW1vYmlsZSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2dyZWV0IHtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixpQkFB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QUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlBRTQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDhCO1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtZGVza3RvcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tb2JpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1kZXNrdG9wIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi4zdncsIDEuOHJlbSwgMS44cmVtKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjRlbSAxLjRlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjRyZW0gMC4ycmVtIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjN2dywgMXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuM3JlbSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDAgMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxLjVyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyBwLFxcclxcbi5jb250YWN0LWluZm8gbGkge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuMjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpICsgbGkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZm9jdXMsXFxyXFxuLmFkZC1ib29rLWZvY3VzLFxcclxcbi5jb250YWN0LWZvY3VzIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJlZCA0cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogbWF4KDQuMnZ3LCAzLjhyZW0pO1xcclxcbiAgd2lkdGg6IG1heCgxMDAlLCAzNXJlbSk7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubXNnLWRhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2dyZWV0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS43dncsIDEuNHJlbSk7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxLjNyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLm1vYmlsZS1kYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwcmVtO1xcclxcbiAgbGVmdDogMjUlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IHJnYmEoMCwgMCwgMTM5LCAwLjc1KSBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0aW5nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmVldGluZyBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtIDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51c2VyOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1idXR0b25zIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UsXFxyXFxuLmVudGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDMuMnZ3LCAxLjhyZW0pO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktbWVzc2FnZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogbWF4KDEuNXZ3LCAwLjVyZW0pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4KDE1dncsIDEwcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5LW1lc3NhZ2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjV2dywgMXJlbSk7XFxyXFxuICBtYXJnaW46IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW1lc3NhZ2Uge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHJnYmEoMjUsIDI1LCAyNywgMC43NSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxcmVtKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMnZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogbWF4KDEwMCUsIDM1cmVtKTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMjAxLCA0MSwgNDEpO1xcclxcbiAgd2lkdGg6IG1heCg3MCUsIDMwcmVtKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1pbmZvIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxLjJyZW0pO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMjgsIDAsIDEyOCwgMC43Nik7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMXJlbSk7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjRyZW0gMC4ycmVtIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ib29rcyBsaTpudGgtY2hpbGQob2RkKSAucmVtb3ZlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTI4LCAwLCAxMjgsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKGV2ZW4pIC5yZW1vdmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGkgcCArIHAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IG1heCgwLjh2dywgMC41cmVtKTtcXHJcXG4gIHdpZHRoOiBtYXgoMzB2dywgMjByZW0pO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNHZ3LCAxLjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1hZGRlZC1tc2cge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS40dncsIDEuMnJlbSk7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuOXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDguOWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVhY2gtb3V0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC4zZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1wbHVzLXNxdWFyZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMge1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5kYXRlLm1vYmlsZS1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGF0ZS5kZXNrdG9wLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLXBsdXMtc3F1YXJlIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiA3cmVtO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1ib29rIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiA3cmVtO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1kZXNrdG9wIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbW9iaWxlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzLm1vYmlsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlua3MubW9iaWxlIGxpOmxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItaG9tZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAxLjJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LW1vYmlsZSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2dyZWV0IHtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCB7XG4gIGlzVW5kZWZpbmVkLFxuICBtYXliZUFycmF5LFxuICBpc0RhdGUsXG4gIGlzTnVtYmVyLFxuICBiZXN0QnksXG4gIGRheXNJbk1vbnRoLFxuICBkYXlzSW5ZZWFyLFxuICBpc0xlYXBZZWFyLFxuICB3ZWVrc0luV2Vla1llYXIsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbiAgb2JqVG9Mb2NhbFRTLFxuICBwYWRTdGFydCxcbn0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuaW1wb3J0IGRpZmYgZnJvbSBcIi4vaW1wbC9kaWZmLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVJGQzI4MjJEYXRlLCBwYXJzZUlTT0RhdGUsIHBhcnNlSFRUUERhdGUsIHBhcnNlU1FMIH0gZnJvbSBcIi4vaW1wbC9yZWdleFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VGcm9tVG9rZW5zLCBleHBsYWluRnJvbVRva2VucyB9IGZyb20gXCIuL2ltcGwvdG9rZW5QYXJzZXIuanNcIjtcbmltcG9ydCB7XG4gIGdyZWdvcmlhblRvV2VlayxcbiAgd2Vla1RvR3JlZ29yaWFuLFxuICBncmVnb3JpYW5Ub09yZGluYWwsXG4gIG9yZGluYWxUb0dyZWdvcmlhbixcbiAgaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEsXG4gIGhhc0ludmFsaWRXZWVrRGF0YSxcbiAgaGFzSW52YWxpZE9yZGluYWxEYXRhLFxuICBoYXNJbnZhbGlkVGltZURhdGEsXG59IGZyb20gXCIuL2ltcGwvY29udmVyc2lvbnMuanNcIjtcbmltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSBcIi4vaW1wbC9mb3JtYXRzLmpzXCI7XG5pbXBvcnQge1xuICBJbnZhbGlkQXJndW1lbnRFcnJvcixcbiAgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IsXG4gIEludmFsaWRVbml0RXJyb3IsXG4gIEludmFsaWREYXRlVGltZUVycm9yLFxufSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ltcGwvaW52YWxpZC5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIERhdGVUaW1lXCI7XG5jb25zdCBNQVhfREFURSA9IDguNjRlMTU7XG5cbmZ1bmN0aW9uIHVuc3VwcG9ydGVkWm9uZSh6b25lKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcInVuc3VwcG9ydGVkIHpvbmVcIiwgYHRoZSB6b25lIFwiJHt6b25lLm5hbWV9XCIgaXMgbm90IHN1cHBvcnRlZGApO1xufVxuXG4vLyB3ZSBjYWNoZSB3ZWVrIGRhdGEgb24gdGhlIERUIG9iamVjdCBhbmQgdGhpcyBpbnRlcm1lZGlhdGVzIHRoZSBjYWNoZVxuZnVuY3Rpb24gcG9zc2libHlDYWNoZWRXZWVrRGF0YShkdCkge1xuICBpZiAoZHQud2Vla0RhdGEgPT09IG51bGwpIHtcbiAgICBkdC53ZWVrRGF0YSA9IGdyZWdvcmlhblRvV2VlayhkdC5jKTtcbiAgfVxuICByZXR1cm4gZHQud2Vla0RhdGE7XG59XG5cbi8vIGNsb25lIHJlYWxseSBtZWFucywgXCJtYWtlIGEgbmV3IG9iamVjdCB3aXRoIHRoZXNlIG1vZGlmaWNhdGlvbnNcIi4gYWxsIFwic2V0dGVyc1wiIHJlYWxseSB1c2UgdGhpc1xuLy8gdG8gY3JlYXRlIGEgbmV3IG9iamVjdCB3aGlsZSBvbmx5IGNoYW5naW5nIHNvbWUgb2YgdGhlIHByb3BlcnRpZXNcbmZ1bmN0aW9uIGNsb25lKGluc3QsIGFsdHMpIHtcbiAgY29uc3QgY3VycmVudCA9IHtcbiAgICB0czogaW5zdC50cyxcbiAgICB6b25lOiBpbnN0LnpvbmUsXG4gICAgYzogaW5zdC5jLFxuICAgIG86IGluc3QubyxcbiAgICBsb2M6IGluc3QubG9jLFxuICAgIGludmFsaWQ6IGluc3QuaW52YWxpZCxcbiAgfTtcbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IC4uLmN1cnJlbnQsIC4uLmFsdHMsIG9sZDogY3VycmVudCB9KTtcbn1cblxuLy8gZmluZCB0aGUgcmlnaHQgb2Zmc2V0IGEgZ2l2ZW4gbG9jYWwgdGltZS4gVGhlIG8gaW5wdXQgaXMgb3VyIGd1ZXNzLCB3aGljaCBkZXRlcm1pbmVzIHdoaWNoXG4vLyBvZmZzZXQgd2UnbGwgcGljayBpbiBhbWJpZ3VvdXMgY2FzZXMgKGUuZy4gdGhlcmUgYXJlIHR3byAzIEFNcyBiL2MgRmFsbGJhY2sgRFNUKVxuZnVuY3Rpb24gZml4T2Zmc2V0KGxvY2FsVFMsIG8sIHR6KSB7XG4gIC8vIE91ciBVVEMgdGltZSBpcyBqdXN0IGEgZ3Vlc3MgYmVjYXVzZSBvdXIgb2Zmc2V0IGlzIGp1c3QgYSBndWVzc1xuICBsZXQgdXRjR3Vlc3MgPSBsb2NhbFRTIC0gbyAqIDYwICogMTAwMDtcblxuICAvLyBUZXN0IHdoZXRoZXIgdGhlIHpvbmUgbWF0Y2hlcyB0aGUgb2Zmc2V0IGZvciB0aGlzIHRzXG4gIGNvbnN0IG8yID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcblxuICAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcbiAgaWYgKG8gPT09IG8yKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgb107XG4gIH1cblxuICAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxuICB1dGNHdWVzcyAtPSAobzIgLSBvKSAqIDYwICogMTAwMDtcblxuICAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcbiAgY29uc3QgbzMgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuICBpZiAobzIgPT09IG8zKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgbzJdO1xuICB9XG5cbiAgLy8gSWYgaXQncyBkaWZmZXJlbnQsIHdlJ3JlIGluIGEgaG9sZSB0aW1lLiBUaGUgb2Zmc2V0IGhhcyBjaGFuZ2VkLCBidXQgdGhlIHdlIGRvbid0IGFkanVzdCB0aGUgdGltZVxuICByZXR1cm4gW2xvY2FsVFMgLSBNYXRoLm1pbihvMiwgbzMpICogNjAgKiAxMDAwLCBNYXRoLm1heChvMiwgbzMpXTtcbn1cblxuLy8gY29udmVydCBhbiBlcG9jaCB0aW1lc3RhbXAgaW50byBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBvZmZzZXRcbmZ1bmN0aW9uIHRzVG9PYmoodHMsIG9mZnNldCkge1xuICB0cyArPSBvZmZzZXQgKiA2MCAqIDEwMDA7XG5cbiAgY29uc3QgZCA9IG5ldyBEYXRlKHRzKTtcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGQuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICBtb250aDogZC5nZXRVVENNb250aCgpICsgMSxcbiAgICBkYXk6IGQuZ2V0VVRDRGF0ZSgpLFxuICAgIGhvdXI6IGQuZ2V0VVRDSG91cnMoKSxcbiAgICBtaW51dGU6IGQuZ2V0VVRDTWludXRlcygpLFxuICAgIHNlY29uZDogZC5nZXRVVENTZWNvbmRzKCksXG4gICAgbWlsbGlzZWNvbmQ6IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gIH07XG59XG5cbi8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXBcbmZ1bmN0aW9uIG9ialRvVFMob2JqLCBvZmZzZXQsIHpvbmUpIHtcbiAgcmV0dXJuIGZpeE9mZnNldChvYmpUb0xvY2FsVFMob2JqKSwgb2Zmc2V0LCB6b25lKTtcbn1cblxuLy8gY3JlYXRlIGEgbmV3IERUIGluc3RhbmNlIGJ5IGFkZGluZyBhIGR1cmF0aW9uLCBhZGp1c3RpbmcgZm9yIERTVHNcbmZ1bmN0aW9uIGFkanVzdFRpbWUoaW5zdCwgZHVyKSB7XG4gIGNvbnN0IG9QcmUgPSBpbnN0Lm8sXG4gICAgeWVhciA9IGluc3QuYy55ZWFyICsgTWF0aC50cnVuYyhkdXIueWVhcnMpLFxuICAgIG1vbnRoID0gaW5zdC5jLm1vbnRoICsgTWF0aC50cnVuYyhkdXIubW9udGhzKSArIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSAqIDMsXG4gICAgYyA9IHtcbiAgICAgIC4uLmluc3QuYyxcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGRheTpcbiAgICAgICAgTWF0aC5taW4oaW5zdC5jLmRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArXG4gICAgICAgIE1hdGgudHJ1bmMoZHVyLmRheXMpICtcbiAgICAgICAgTWF0aC50cnVuYyhkdXIud2Vla3MpICogNyxcbiAgICB9LFxuICAgIG1pbGxpc1RvQWRkID0gRHVyYXRpb24uZnJvbU9iamVjdCh7XG4gICAgICB5ZWFyczogZHVyLnllYXJzIC0gTWF0aC50cnVuYyhkdXIueWVhcnMpLFxuICAgICAgcXVhcnRlcnM6IGR1ci5xdWFydGVycyAtIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSxcbiAgICAgIG1vbnRoczogZHVyLm1vbnRocyAtIE1hdGgudHJ1bmMoZHVyLm1vbnRocyksXG4gICAgICB3ZWVrczogZHVyLndlZWtzIC0gTWF0aC50cnVuYyhkdXIud2Vla3MpLFxuICAgICAgZGF5czogZHVyLmRheXMgLSBNYXRoLnRydW5jKGR1ci5kYXlzKSxcbiAgICAgIGhvdXJzOiBkdXIuaG91cnMsXG4gICAgICBtaW51dGVzOiBkdXIubWludXRlcyxcbiAgICAgIHNlY29uZHM6IGR1ci5zZWNvbmRzLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkdXIubWlsbGlzZWNvbmRzLFxuICAgIH0pLmFzKFwibWlsbGlzZWNvbmRzXCIpLFxuICAgIGxvY2FsVFMgPSBvYmpUb0xvY2FsVFMoYyk7XG5cbiAgbGV0IFt0cywgb10gPSBmaXhPZmZzZXQobG9jYWxUUywgb1ByZSwgaW5zdC56b25lKTtcblxuICBpZiAobWlsbGlzVG9BZGQgIT09IDApIHtcbiAgICB0cyArPSBtaWxsaXNUb0FkZDtcbiAgICAvLyB0aGF0IGNvdWxkIGhhdmUgY2hhbmdlZCB0aGUgb2Zmc2V0IGJ5IGdvaW5nIG92ZXIgYSBEU1QsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgdGhlIHRzIHRoZSBzYW1lXG4gICAgbyA9IGluc3Quem9uZS5vZmZzZXQodHMpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHMsIG8gfTtcbn1cblxuLy8gaGVscGVyIHVzZWZ1bCBpbiB0dXJuaW5nIHRoZSByZXN1bHRzIG9mIHBhcnNpbmcgaW50byByZWFsIGRhdGVzXG4vLyBieSBoYW5kbGluZyB0aGUgem9uZSBvcHRpb25zXG5mdW5jdGlvbiBwYXJzZURhdGFUb0RhdGVUaW1lKHBhcnNlZCwgcGFyc2VkWm9uZSwgb3B0cywgZm9ybWF0LCB0ZXh0LCBzcGVjaWZpY09mZnNldCkge1xuICBjb25zdCB7IHNldFpvbmUsIHpvbmUgfSA9IG9wdHM7XG4gIGlmIChwYXJzZWQgJiYgT2JqZWN0LmtleXMocGFyc2VkKS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBpbnRlcnByZXRhdGlvblpvbmUgPSBwYXJzZWRab25lIHx8IHpvbmUsXG4gICAgICBpbnN0ID0gRGF0ZVRpbWUuZnJvbU9iamVjdChwYXJzZWQsIHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgem9uZTogaW50ZXJwcmV0YXRpb25ab25lLFxuICAgICAgICBzcGVjaWZpY09mZnNldCxcbiAgICAgIH0pO1xuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcbiAgICAgIG5ldyBJbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyAke2Zvcm1hdH1gKVxuICAgICk7XG4gIH1cbn1cblxuLy8gaWYgeW91IHdhbnQgdG8gb3V0cHV0IGEgdGVjaG5pY2FsIGZvcm1hdCAoZS5nLiBSRkMgMjgyMiksIHRoaXMgaGVscGVyXG4vLyBoZWxwcyBoYW5kbGUgdGhlIGRldGFpbHNcbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1ogPSB0cnVlKSB7XG4gIHJldHVybiBkdC5pc1ZhbGlkXG4gICAgPyBGb3JtYXR0ZXIuY3JlYXRlKExvY2FsZS5jcmVhdGUoXCJlbi1VU1wiKSwge1xuICAgICAgICBhbGxvd1osXG4gICAgICAgIGZvcmNlU2ltcGxlOiB0cnVlLFxuICAgICAgfSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmb3JtYXQpXG4gICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiB0b0lTT0RhdGUobywgZXh0ZW5kZWQpIHtcbiAgY29uc3QgbG9uZ0Zvcm1hdCA9IG8uYy55ZWFyID4gOTk5OSB8fCBvLmMueWVhciA8IDA7XG4gIGxldCBjID0gXCJcIjtcbiAgaWYgKGxvbmdGb3JtYXQgJiYgby5jLnllYXIgPj0gMCkgYyArPSBcIitcIjtcbiAgYyArPSBwYWRTdGFydChvLmMueWVhciwgbG9uZ0Zvcm1hdCA/IDYgOiA0KTtcblxuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHRvSVNPVGltZShvLCBleHRlbmRlZCwgc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kcywgaW5jbHVkZU9mZnNldCkge1xuICBsZXQgYyA9IHBhZFN0YXJ0KG8uYy5ob3VyKTtcbiAgaWYgKGV4dGVuZGVkKSB7XG4gICAgYyArPSBcIjpcIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xuICAgIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gIH1cblxuICBpZiAoby5jLnNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NTZWNvbmRzKSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMuc2Vjb25kKTtcblxuICAgIGlmIChvLmMubWlsbGlzZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzTWlsbGlzZWNvbmRzKSB7XG4gICAgICBjICs9IFwiLlwiO1xuICAgICAgYyArPSBwYWRTdGFydChvLmMubWlsbGlzZWNvbmQsIDMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgaWYgKG8uaXNPZmZzZXRGaXhlZCAmJiBvLm9mZnNldCA9PT0gMCkge1xuICAgICAgYyArPSBcIlpcIjtcbiAgICB9IGVsc2UgaWYgKG8ubyA8IDApIHtcbiAgICAgIGMgKz0gXCItXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAvIDYwKSk7XG4gICAgICBjICs9IFwiOlwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gJSA2MCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjICs9IFwiK1wiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAvIDYwKSk7XG4gICAgICBjICs9IFwiOlwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAlIDYwKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjO1xufVxuXG4vLyBkZWZhdWx0cyBmb3IgdW5zcGVjaWZpZWQgdW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnNcbmNvbnN0IGRlZmF1bHRVbml0VmFsdWVzID0ge1xuICAgIG1vbnRoOiAxLFxuICAgIGRheTogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH0sXG4gIGRlZmF1bHRXZWVrVW5pdFZhbHVlcyA9IHtcbiAgICB3ZWVrTnVtYmVyOiAxLFxuICAgIHdlZWtkYXk6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxuICB9LFxuICBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMgPSB7XG4gICAgb3JkaW5hbDogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH07XG5cbi8vIFVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzLCBzb3J0ZWQgYnkgYmlnbmVzc1xuY29uc3Qgb3JkZXJlZFVuaXRzID0gW1wieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdLFxuICBvcmRlcmVkV2Vla1VuaXRzID0gW1xuICAgIFwid2Vla1llYXJcIixcbiAgICBcIndlZWtOdW1iZXJcIixcbiAgICBcIndlZWtkYXlcIixcbiAgICBcImhvdXJcIixcbiAgICBcIm1pbnV0ZVwiLFxuICAgIFwic2Vjb25kXCIsXG4gICAgXCJtaWxsaXNlY29uZFwiLFxuICBdLFxuICBvcmRlcmVkT3JkaW5hbFVuaXRzID0gW1wieWVhclwiLCBcIm9yZGluYWxcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl07XG5cbi8vIHN0YW5kYXJkaXplIGNhc2UgYW5kIHBsdXJhbGl0eSBpbiB1bml0c1xuZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgZGF5OiBcImRheVwiLFxuICAgIGRheXM6IFwiZGF5XCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZFwiLFxuICAgIHdlZWtkYXk6IFwid2Vla2RheVwiLFxuICAgIHdlZWtkYXlzOiBcIndlZWtkYXlcIixcbiAgICB3ZWVrbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrc251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla251bWJlcnM6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWt5ZWFyOiBcIndlZWtZZWFyXCIsXG4gICAgd2Vla3llYXJzOiBcIndlZWtZZWFyXCIsXG4gICAgb3JkaW5hbDogXCJvcmRpbmFsXCIsXG4gIH1bdW5pdC50b0xvd2VyQ2FzZSgpXTtcblxuICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuXG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXG5cbi8vIHRoaXMgaXMgYSBkdW1iZWQgZG93biB2ZXJzaW9uIG9mIGZyb21PYmplY3QoKSB0aGF0IHJ1bnMgYWJvdXQgNjAlIGZhc3RlclxuLy8gYnV0IGRvZXNuJ3QgZG8gYW55IHZhbGlkYXRpb24sIG1ha2VzIGEgYnVuY2ggb2YgYXNzdW1wdGlvbnMgYWJvdXQgd2hhdCB1bml0c1xuLy8gYXJlIHByZXNlbnQsIGFuZCBzbyBvbi5cbmZ1bmN0aW9uIHF1aWNrRFQob2JqLCBvcHRzKSB7XG4gIGNvbnN0IHpvbmUgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgIHRzTm93ID0gU2V0dGluZ3Mubm93KCk7XG5cbiAgbGV0IHRzLCBvO1xuXG4gIC8vIGFzc3VtZSB3ZSBoYXZlIHRoZSBoaWdoZXItb3JkZXIgdW5pdHNcbiAgaWYgKCFpc1VuZGVmaW5lZChvYmoueWVhcikpIHtcbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB8fCBoYXNJbnZhbGlkVGltZURhdGEob2JqKTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0UHJvdmlzID0gem9uZS5vZmZzZXQodHNOb3cpO1xuICAgIFt0cywgb10gPSBvYmpUb1RTKG9iaiwgb2Zmc2V0UHJvdmlzLCB6b25lKTtcbiAgfSBlbHNlIHtcbiAgICB0cyA9IHRzTm93O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IHRzLCB6b25lLCBsb2MsIG8gfSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZSZWxhdGl2ZShzdGFydCwgZW5kLCBvcHRzKSB7XG4gIGNvbnN0IHJvdW5kID0gaXNVbmRlZmluZWQob3B0cy5yb3VuZCkgPyB0cnVlIDogb3B0cy5yb3VuZCxcbiAgICBmb3JtYXQgPSAoYywgdW5pdCkgPT4ge1xuICAgICAgYyA9IHJvdW5kVG8oYywgcm91bmQgfHwgb3B0cy5jYWxlbmRhcnkgPyAwIDogMiwgdHJ1ZSk7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBlbmQubG9jLmNsb25lKG9wdHMpLnJlbEZvcm1hdHRlcihvcHRzKTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGMsIHVuaXQpO1xuICAgIH0sXG4gICAgZGlmZmVyID0gKHVuaXQpID0+IHtcbiAgICAgIGlmIChvcHRzLmNhbGVuZGFyeSkge1xuICAgICAgICBpZiAoIWVuZC5oYXNTYW1lKHN0YXJ0LCB1bml0KSkge1xuICAgICAgICAgIHJldHVybiBlbmQuc3RhcnRPZih1bml0KS5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpLmdldCh1bml0KTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCk7XG4gICAgICB9XG4gICAgfTtcblxuICBpZiAob3B0cy51bml0KSB7XG4gICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdW5pdCBvZiBvcHRzLnVuaXRzKSB7XG4gICAgY29uc3QgY291bnQgPSBkaWZmZXIodW5pdCk7XG4gICAgaWYgKE1hdGguYWJzKGNvdW50KSA+PSAxKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdChzdGFydCA+IGVuZCA/IC0wIDogMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTtcbn1cblxuZnVuY3Rpb24gbGFzdE9wdHMoYXJnTGlzdCkge1xuICBsZXQgb3B0cyA9IHt9LFxuICAgIGFyZ3M7XG4gIGlmIChhcmdMaXN0Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgIG9wdHMgPSBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV07XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCkuc2xpY2UoMCwgYXJnTGlzdC5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KTtcbiAgfVxuICByZXR1cm4gW29wdHMsIGFyZ3NdO1xufVxuXG4vKipcbiAqIEEgRGF0ZVRpbWUgaXMgYW4gaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgYW5kIGFjY29tcGFueWluZyBtZXRob2RzLiBJdCBjb250YWlucyBjbGFzcyBhbmQgaW5zdGFuY2UgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBBIERhdGVUaW1lIGNvbXByaXNlcyBvZjpcbiAqICogQSB0aW1lc3RhbXAuIEVhY2ggRGF0ZVRpbWUgaW5zdGFuY2UgcmVmZXJzIHRvIGEgc3BlY2lmaWMgbWlsbGlzZWNvbmQgb2YgdGhlIFVuaXggZXBvY2guXG4gKiAqIEEgdGltZSB6b25lLiBFYWNoIGluc3RhbmNlIGlzIGNvbnNpZGVyZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBzcGVjaWZpYyB6b25lIChieSBkZWZhdWx0IHRoZSBsb2NhbCBzeXN0ZW0ncyB6b25lKS5cbiAqICogQ29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgZWZmZWN0IGhvdyBvdXRwdXQgc3RyaW5ncyBhcmUgZm9ybWF0dGVkLCBzdWNoIGFzIGBsb2NhbGVgLCBgbnVtYmVyaW5nU3lzdGVtYCwgYW5kIGBvdXRwdXRDYWxlbmRhcmAuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgZnVuY3Rpb25hbGl0eSBpdCBwcm92aWRlczpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKjogVG8gY3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBpdHMgY29tcG9uZW50cywgdXNlIG9uZSBvZiBpdHMgZmFjdG9yeSBjbGFzcyBtZXRob2RzOiB7QGxpbmsgRGF0ZVRpbWUjbG9jYWx9LCB7QGxpbmsgRGF0ZVRpbWUjdXRjfSwgYW5kIChtb3N0IGZsZXhpYmx5KSB7QGxpbmsgRGF0ZVRpbWUjZnJvbU9iamVjdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIHN0YW5kYXJkIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjZnJvbUlTT30sIHtAbGluayBEYXRlVGltZSNmcm9tSFRUUH0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjZnJvbVJGQzI4MjJ9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBjdXN0b20gc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZSNmcm9tRm9ybWF0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgbmF0aXZlIEpTIGRhdGUsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjZnJvbUpTRGF0ZX0uXG4gKiAqICoqR3JlZ29yaWFuIGNhbGVuZGFyIGFuZCB0aW1lKio6IFRvIGV4YW1pbmUgdGhlIEdyZWdvcmlhbiBwcm9wZXJ0aWVzIG9mIGEgRGF0ZVRpbWUgaW5kaXZpZHVhbGx5IChpLmUgYXMgb3Bwb3NlZCB0byBjb2xsZWN0aXZlbHkgdGhyb3VnaCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9KSwgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjeWVhcn0sIHtAbGluayBEYXRlVGltZSNtb250aH0sXG4gKiB7QGxpbmsgRGF0ZVRpbWUjZGF5fSwge0BsaW5rIERhdGVUaW1lI2hvdXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXRlfSwge0BsaW5rIERhdGVUaW1lI3NlY29uZH0sIHtAbGluayBEYXRlVGltZSNtaWxsaXNlY29uZH0gYWNjZXNzb3JzLlxuICogKiAqKldlZWsgY2FsZW5kYXIqKjogRm9yIElTTyB3ZWVrIGNhbGVuZGFyIGF0dHJpYnV0ZXMsIHNlZSB0aGUge0BsaW5rIERhdGVUaW1lI3dlZWtZZWFyfSwge0BsaW5rIERhdGVUaW1lI3dlZWtOdW1iZXJ9LCBhbmQge0BsaW5rIERhdGVUaW1lI3dlZWtkYXl9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjbG9jYWxlfSBhbmQge0BsaW5rIERhdGVUaW1lI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKio6IFRvIHRyYW5zZm9ybSB0aGUgRGF0ZVRpbWUgaW50byBvdGhlciBEYXRlVGltZXMsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0fSwge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSwge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0TG9jYWxlfSwge0BsaW5rIERhdGVUaW1lLnBsdXN9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXN9LCB7QGxpbmsgRGF0ZVRpbWUjZW5kT2Z9LCB7QGxpbmsgRGF0ZVRpbWUjc3RhcnRPZn0sIHtAbGluayBEYXRlVGltZSN0b1VUQ30sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0uXG4gKiAqICoqT3V0cHV0Kio6IFRvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZX0sIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlQ2FsZW5kYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9KU09OfSwge0BsaW5rIERhdGVUaW1lI3RvSVNPfSwge0BsaW5rIERhdGVUaW1lI3RvSFRUUH0sIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0sIHtAbGluayBEYXRlVGltZSN0b1JGQzI4MjJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9TdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9LCB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9KU0RhdGV9LlxuICpcbiAqIFRoZXJlJ3MgcGxlbnR5IG90aGVycyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGltZSB6b25lcywgYWx0ZXJuYXRpdmUgY2FsZW5kYXJzLCB2YWxpZGl0eSwgYW5kIHNvIG9uLCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVUaW1lIHtcbiAgLyoqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uc3Qgem9uZSA9IGNvbmZpZy56b25lIHx8IFNldHRpbmdzLmRlZmF1bHRab25lO1xuXG4gICAgbGV0IGludmFsaWQgPVxuICAgICAgY29uZmlnLmludmFsaWQgfHxcbiAgICAgIChOdW1iZXIuaXNOYU4oY29uZmlnLnRzKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGwpIHx8XG4gICAgICAoIXpvbmUuaXNWYWxpZCA/IHVuc3VwcG9ydGVkWm9uZSh6b25lKSA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudHMgPSBpc1VuZGVmaW5lZChjb25maWcudHMpID8gU2V0dGluZ3Mubm93KCkgOiBjb25maWcudHM7XG5cbiAgICBsZXQgYyA9IG51bGwsXG4gICAgICBvID0gbnVsbDtcbiAgICBpZiAoIWludmFsaWQpIHtcbiAgICAgIGNvbnN0IHVuY2hhbmdlZCA9IGNvbmZpZy5vbGQgJiYgY29uZmlnLm9sZC50cyA9PT0gdGhpcy50cyAmJiBjb25maWcub2xkLnpvbmUuZXF1YWxzKHpvbmUpO1xuXG4gICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgIFtjLCBvXSA9IFtjb25maWcub2xkLmMsIGNvbmZpZy5vbGQub107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvdCA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICBjID0gdHNUb09iaih0aGlzLnRzLCBvdCk7XG4gICAgICAgIGludmFsaWQgPSBOdW1iZXIuaXNOYU4oYy55ZWFyKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGw7XG4gICAgICAgIGMgPSBpbnZhbGlkID8gbnVsbCA6IGM7XG4gICAgICAgIG8gPSBpbnZhbGlkID8gbnVsbCA6IG90O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3pvbmUgPSB6b25lO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLndlZWtEYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmMgPSBjO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubyA9IG87XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uRGF0ZVRpbWUgPSB0cnVlO1xuICB9XG5cbiAgLy8gQ09OU1RSVUNUXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZvciB0aGUgY3VycmVudCBpbnN0YW50LCBpbiB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKlxuICAgKiBVc2UgU2V0dGluZ3MgdG8gb3ZlcnJpZGUgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vfj4gbm93IGluIHRoZSBJU08gZm9ybWF0XG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoeyB6b25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIiB9KSAgICAgIC8vfj4gbm93LCBpbiBVUyBlYXN0IGNvYXN0IHRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMCwgd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIHsgem9uZTogXCJ1dGNcIiB9KSAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMCwgaW4gVVRDXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBsb2NhbCgpIHtcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xuICAgIHJldHVybiBxdWlja0RUKHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVogd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgdXRjKCkge1xuICAgIGNvbnN0IFtvcHRzLCBhcmdzXSA9IGxhc3RPcHRzKGFyZ3VtZW50cyksXG4gICAgICBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXSA9IGFyZ3M7XG5cbiAgICBvcHRzLnpvbmUgPSBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XG4gICAgcmV0dXJuIHF1aWNrRFQoeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21KU0RhdGUoZGF0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdHMgPSBpc0RhdGUoZGF0ZSkgPyBkYXRlLnZhbHVlT2YoKSA6IE5hTjtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHRzKSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IHRzLFxuICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWlzTnVtYmVyKG1pbGxpc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYGZyb21NaWxsaXMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQsIGJ1dCByZWNlaXZlZCBhICR7dHlwZW9mIG1pbGxpc2Vjb25kc30gd2l0aCB2YWx1ZSAke21pbGxpc2Vjb25kc31gXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgLU1BWF9EQVRFIHx8IG1pbGxpc2Vjb25kcyA+IE1BWF9EQVRFKSB7XG4gICAgICAvLyB0aGlzIGlzbid0IHBlcmZlY3QgYmVjYXVzZSBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydFxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJUaW1lc3RhbXAgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21TZWNvbmRzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHNlY29uZHMgKiAxMDAwLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcicgYW5kICdob3VyJyB3aXRoIHJlYXNvbmFibGUgZGVmYXVsdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXIgLSBhIHllYXIsIHN1Y2ggYXMgMTk4N1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoIC0gYSBtb250aCwgMS0xMlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheSAtIGEgZGF5IG9mIHRoZSBtb250aCwgMS0zMSwgZGVwZW5kaW5nIG9uIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm9yZGluYWwgLSBkYXkgb2YgdGhlIHllYXIsIDEtMzY1IG9yIDM2NlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtZZWFyIC0gYW4gSVNPIHdlZWsgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtOdW1iZXIgLSBhbiBJU08gd2VlayBudW1iZXIsIGJldHdlZW4gMSBhbmQgNTIgb3IgNTMsIGRlcGVuZGluZyBvbiB0aGUgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtkYXkgLSBhbiBJU08gd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3VyIC0gaG91ciBvZiB0aGUgZGF5LCAwLTIzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlIC0gbWludXRlIG9mIHRoZSBob3VyLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kIC0gc2Vjb25kIG9mIHRoZSBtaW51dGUsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZCAtIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIDAtOTk5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gaW50ZXJwcmV0IHRoZSBudW1iZXJzIGluIHRoZSBjb250ZXh0IG9mIGEgcGFydGljdWxhciB6b25lLiBDYW4gdGFrZSBhbnkgdmFsdWUgdGFrZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHNldFpvbmUoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiwgbW9udGg6IDUsIGRheTogMjV9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiB9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9KSAvL34+IHRvZGF5IGF0IDEwOjI2OjA2XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ3V0YycgfSksXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ2xvY2FsJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgd2Vla1llYXI6IDIwMTYsIHdlZWtOdW1iZXI6IDIsIHdlZWtkYXk6IDMgfSkudG9JU09EYXRlKCkgLy89PiAnMjAxNi0wMS0xMydcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xuICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCB0c05vdyA9IFNldHRpbmdzLm5vdygpLFxuICAgICAgb2Zmc2V0UHJvdmlzID0gIWlzVW5kZWZpbmVkKG9wdHMuc3BlY2lmaWNPZmZzZXQpXG4gICAgICAgID8gb3B0cy5zcGVjaWZpY09mZnNldFxuICAgICAgICA6IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpLFxuICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZVVuaXQpLFxuICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcixcbiAgICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpO1xuXG4gICAgLy8gY2FzZXM6XG4gICAgLy8ganVzdCBhIHdlZWtkYXkgLT4gdGhpcyB3ZWVrJ3MgaW5zdGFuY2Ugb2YgdGhhdCB3ZWVrZGF5LCBubyB3b3JyaWVzXG4gICAgLy8gKGdyZWdvcmlhbiBkYXRhIG9yIG9yZGluYWwpICsgKHdlZWtZZWFyIG9yIHdlZWtOdW1iZXIpIC0+IGVycm9yXG4gICAgLy8gKGdyZWdvcmlhbiBtb250aCBvciBkYXkpICsgb3JkaW5hbCAtPiBlcnJvclxuICAgIC8vIG90aGVyd2lzZSBqdXN0IHVzZSB3ZWVrcyBvciBvcmRpbmFscyBvciBncmVnb3JpYW4sIGRlcGVuZGluZyBvbiB3aGF0J3Mgc3BlY2lmaWVkXG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlV2Vla0RhdGEgPSBkZWZpbml0ZVdlZWtEZWYgfHwgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3IpO1xuXG4gICAgLy8gY29uZmlndXJlIG91cnNlbHZlcyB0byBkZWFsIHdpdGggZ3JlZ29yaWFuIGRhdGVzIG9yIHdlZWsgc3R1ZmZcbiAgICBsZXQgdW5pdHMsXG4gICAgICBkZWZhdWx0VmFsdWVzLFxuICAgICAgb2JqTm93ID0gdHNUb09iaih0c05vdywgb2Zmc2V0UHJvdmlzKTtcbiAgICBpZiAodXNlV2Vla0RhdGEpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFdlZWtVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0V2Vla1VuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub1dlZWsob2JqTm93KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkT3JkaW5hbFVuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvT3JkaW5hbChvYmpOb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcbiAgICB9XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG1pc3Npbmcgc3R1ZmZcbiAgICBsZXQgZm91bmRGaXJzdCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykge1xuICAgICAgY29uc3QgdiA9IG5vcm1hbGl6ZWRbdV07XG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGZvdW5kRmlyc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0KSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBkZWZhdWx0VmFsdWVzW3VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IG9iak5vd1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHZhbHVlcyB3ZSBoYXZlIGFyZSBpbiByYW5nZVxuICAgIGNvbnN0IGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICBpbnZhbGlkID0gaGlnaGVyT3JkZXJJbnZhbGlkIHx8IGhhc0ludmFsaWRUaW1lRGF0YShub3JtYWxpemVkKTtcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9XG5cbiAgICAvLyBjb21wdXRlIHRoZSBhY3R1YWwgdGltZVxuICAgIGNvbnN0IGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogbm9ybWFsaXplZCxcbiAgICAgIFt0c0ZpbmFsLCBvZmZzZXRGaW5hbF0gPSBvYmpUb1RTKGdyZWdvcmlhbiwgb2Zmc2V0UHJvdmlzLCB6b25lVG9Vc2UpLFxuICAgICAgaW5zdCA9IG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiB0c0ZpbmFsLFxuICAgICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICAgIG86IG9mZnNldEZpbmFsLFxuICAgICAgICBsb2MsXG4gICAgICB9KTtcblxuICAgIC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxuICAgIGlmIChub3JtYWxpemVkLndlZWtkYXkgJiYgY29udGFpbnNHcmVnb3IgJiYgb2JqLndlZWtkYXkgIT09IGluc3Qud2Vla2RheSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXG4gICAgICAgIFwibWlzbWF0Y2hlZCB3ZWVrZGF5XCIsXG4gICAgICAgIGB5b3UgY2FuJ3Qgc3BlY2lmeSBib3RoIGEgd2Vla2RheSBvZiAke25vcm1hbGl6ZWQud2Vla2RheX0gYW5kIGEgZGF0ZSBvZiAke2luc3QudG9JU08oKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnLCB7c2V0Wm9uZTogdHJ1ZX0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJywge3pvbmU6ICd1dGMnfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi1XMDUtNCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VJU09EYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiSVNPIDg2MDFcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgdGhlIG9mZnNldCBpcyBhbHdheXMgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjM6MTIgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJ0ZyaSwgMjUgTm92IDIwMTYgMTM6MjM6MTIgKzA2MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjMgWicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21SRkMyODIyKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJSRkMgMjgyMlwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIEhUVFAgZGF0ZXMgYXJlIGFsd2F5cyBpbiBVVEMsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIHRoZSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZy4gRm9yIEhUVFAgZGF0ZXMsIHRoaXMgaXMgYWx3YXlzIFVUQywgc28gdGhpcyBvcHRpb24gaXMgZXF1aXZhbGVudCB0byBzZXR0aW5nIHRoZSBgem9uZWAgb3B0aW9uIHRvICd1dGMnLCBidXQgdGhpcyBvcHRpb24gaXMgaW5jbHVkZWQgZm9yIGNvbnNpc3RlbmN5IHdpdGggc2ltaWxhciBtZXRob2RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuLCAwNiBOb3YgMTk5NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuZGF5LCAwNi1Ob3YtOTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biBOb3YgIDYgMDg6NDk6MzcgMTk5NCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21IVFRQKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSFRUUERhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJIVFRQXCIsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gaW5wdXQgc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL3BhcnNpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSB0aGUgbGluayBiZWxvdyBmb3IgdGhlIGZvcm1hdHMpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzID0ge30pIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodGV4dCkgfHwgaXNVbmRlZmluZWQoZm10KSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbUZvcm1hdCByZXF1aXJlcyBhbiBpbnB1dCBzdHJpbmcgYW5kIGEgZm9ybWF0XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0cyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBbdmFscywgcGFyc2VkWm9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRdID0gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgYGZvcm1hdCAke2ZtdH1gLCB0ZXh0LCBzcGVjaWZpY09mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0IGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgU1FMIGRhdGUsIHRpbWUsIG9yIGRhdGV0aW1lXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNScpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnLCB7IHNldFpvbmU6IHRydWUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInLCB7IHpvbmU6ICdBbWVyaWNhL0xvc19BbmdlbGVzJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcwOToxMjozNC4zNDInKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tU1FMKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlU1FMKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiU1FMXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIERhdGVUaW1lIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGEgRGF0ZVRpbWUuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0RhdGVUaW1lKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uRGF0ZVRpbWUpIHx8IGZhbHNlO1xuICB9XG5cbiAgLy8gSU5GT1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdtb250aCcpOyAvLz0+IDdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdkYXknKTsgLy89PiA0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbdW5pdF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyB2YWxpZC4gSW52YWxpZCBEYXRlVGltZXMgb2NjdXIgd2hlbjpcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgZnJvbSBpbnZhbGlkIGNhbGVuZGFyIGluZm9ybWF0aW9uLCBzdWNoIGFzIHRoZSAxM3RoIG1vbnRoIG9yIEZlYnJ1YXJ5IDMwXG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGJ5IGFuIG9wZXJhdGlvbiBvbiBhbm90aGVyIGludmFsaWQgZGF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIERhdGVUaW1lIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxvY2FsZSBvZiBhIERhdGVUaW1lLCBzdWNoICdlbi1HQicuIFRoZSBsb2NhbGUgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIERhdGVUaW1lLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3V0cHV0IGNhbGVuZGFyIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2lzbGFtaWMnLiBUaGUgb3V0cHV0IGNhbGVuZGFyIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG91dHB1dENhbGVuZGFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0aW1lIHpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEB0eXBlIHtab25lfVxuICAgKi9cbiAgZ2V0IHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSB0aW1lIHpvbmUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgem9uZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5uYW1lIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHllYXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnllYXIgLy89PiAyMDE3XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgeWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWFydGVyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5xdWFydGVyIC8vPT4gMlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHF1YXJ0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguY2VpbCh0aGlzLmMubW9udGggLyAzKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm1vbnRoIC8vPT4gNVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1vbnRoKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubW9udGggOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoICgxLTMwaXNoKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLmRheSAvLz0+IDI1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuZGF5IDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG91ciBvZiB0aGUgZGF5ICgwLTIzKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzApLm1pbnV0ZSAvLz0+IDMwXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWludXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWludXRlIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2Vjb25kIG9mIHRoZSBtaW51dGUgKDAtNTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyKS5zZWNvbmQgLy89PiA1MlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnNlY29uZCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQgKDAtOTk5KS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbGxpc2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrIHllYXJcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDEyLCAzMSkud2Vla1llYXIgLy89PiAyMDE1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla1llYXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrIG51bWJlciBvZiB0aGUgd2VlayB5ZWFyICgxLTUyaXNoKS5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS53ZWVrTnVtYmVyIC8vPT4gMjFcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtOdW1iZXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsuXG4gICAqIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTEsIDMxKS53ZWVrZGF5IC8vPT4gNFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla2RheSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9yZGluYWwgKG1lYW5pbmcgdGhlIGRheSBvZiB0aGUgeWVhcilcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm9yZGluYWwgLy89PiAxNDVcbiAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX1cbiAgICovXG4gIGdldCBvcmRpbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKS5vcmRpbmFsIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0Jy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhTaG9ydCAvLz0+IE9jdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1vbnRoU2hvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKFwic2hvcnRcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdG9iZXInLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aExvbmcgLy89PiBPY3RvYmVyXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbW9udGhMb25nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcImxvbmdcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCB3ZWVrZGF5LCBzdWNoIGFzICdNb24nLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5U2hvcnQgLy89PiBNb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB3ZWVrZGF5U2hvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJzaG9ydFwiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyB3ZWVrZGF5LCBzdWNoIGFzICdNb25kYXknLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5TG9uZyAvLz0+IE1vbmRheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXlMb25nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKFwibG9uZ1wiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgVVRDIG9mZnNldCBvZiB0aGlzIERhdGVUaW1lIGluIG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkub2Zmc2V0IC8vPT4gLTI0MFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyArdGhpcy5vIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvZmZzZXROYW1lU2hvcnQoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9uZyBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVhc3Rlcm4gU3RhbmRhcmQgVGltZVwiIG9yIFwiRWFzdGVybiBEYXlsaWdodCBUaW1lXCIuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG9mZnNldE5hbWVMb25nKCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoaXMgem9uZSdzIG9mZnNldCBldmVyIGNoYW5nZXMsIGFzIGluIGEgRFNULlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc09mZnNldEZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUuaXNVbml2ZXJzYWwgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyBpbiBhIERTVC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNJbkRTVCgpIHtcbiAgICBpZiAodGhpcy5pc09mZnNldEZpeGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogMSB9KS5vZmZzZXQgfHwgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7IG1vbnRoOiA1IH0pLm9mZnNldFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW4gYSBsZWFwIHllYXIsIGZhbHNlIG90aGVyd2lzZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2KS5pc0luTGVhcFllYXIgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmlzSW5MZWFwWWVhciAvLz0+IGZhbHNlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzSW5MZWFwWWVhcigpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyBtb250aFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAyKS5kYXlzSW5Nb250aCAvLz0+IDI5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDMpLmRheXNJbk1vbnRoIC8vPT4gMzFcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBkYXlzSW5Nb250aCgpIHtcbiAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhclxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2KS5kYXlzSW5ZZWFyIC8vPT4gMzY2XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmRheXNJblllYXIgLy89PiAzNjVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBkYXlzSW5ZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBkYXlzSW5ZZWFyKHRoaXMueWVhcikgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdlZWtzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDA0KS53ZWVrc0luV2Vla1llYXIgLy89PiA1M1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS53ZWVrc0luV2Vla1llYXIgLy89PiA1MlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtzSW5XZWVrWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gd2Vla3NJbldlZWtZZWFyKHRoaXMud2Vla1llYXIpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc29sdmVkIEludGwgb3B0aW9ucyBmb3IgdGhpcyBEYXRlVGltZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gdW5kZXJzdGFuZGluZyB0aGUgYmVoYXZpb3Igb2YgZm9ybWF0dGluZyBtZXRob2RzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gdGhlIHNhbWUgb3B0aW9ucyBhcyB0b0xvY2FsZVN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICByZXNvbHZlZExvY2FsZU9wdGlvbnMob3B0cyA9IHt9KSB7XG4gICAgY29uc3QgeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXIgfSA9IEZvcm1hdHRlci5jcmVhdGUoXG4gICAgICB0aGlzLmxvYy5jbG9uZShvcHRzKSxcbiAgICAgIG9wdHNcbiAgICApLnJlc29sdmVkT3B0aW9ucyh0aGlzKTtcbiAgICByZXR1cm4geyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXI6IGNhbGVuZGFyIH07XG4gIH1cblxuICAvLyBUUkFOU0ZPUk1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIFVUQy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBFcXVpdmFsZW50IHRvIHtAbGluayBEYXRlVGltZSNzZXRab25lfSgndXRjJylcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBvcHRpb25hbGx5LCBhbiBvZmZzZXQgZnJvbSBVVEMgaW4gbWludXRlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dIC0gb3B0aW9ucyB0byBwYXNzIHRvIGBzZXRab25lKClgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgdG9VVEMob2Zmc2V0ID0gMCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHRoZSBob3N0J3MgbG9jYWwgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBFcXVpdmFsZW50IHRvIGBzZXRab25lKCdsb2NhbCcpYFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHRvTG9jYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHNwZWNpZmllZCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBzZXR0ZXIga2VlcHMgdGhlIHVuZGVybHlpbmcgdGltZSB0aGUgc2FtZSAoYXMgaW4sIHRoZSBzYW1lIHRpbWVzdGFtcCksIGJ1dCB0aGUgbmV3IGluc3RhbmNlIHdpbGwgcmVwb3J0IGRpZmZlcmVudCBsb2NhbCB0aW1lcyBhbmQgY29uc2lkZXIgRFNUcyB3aGVuIG1ha2luZyBjb21wdXRhdGlvbnMsIGFzIHdpdGgge0BsaW5rIERhdGVUaW1lI3BsdXN9LiBZb3UgbWF5IHdpc2ggdG8gdXNlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvVVRDfSB3aGljaCBwcm92aWRlIHNpbXBsZSBjb252ZW5pZW5jZSB3cmFwcGVycyBmb3IgY29tbW9ubHkgdXNlZCB6b25lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBhIHpvbmUgaWRlbnRpZmllci4gQXMgYSBzdHJpbmcsIHRoYXQgY2FuIGJlIGFueSBJQU5BIHpvbmUgc3VwcG9ydGVkIGJ5IHRoZSBob3N0IGVudmlyb25tZW50LCBvciBhIGZpeGVkLW9mZnNldCBuYW1lIG9mIHRoZSBmb3JtICdVVEMrMycsIG9yIHRoZSBzdHJpbmdzICdsb2NhbCcgb3IgJ3V0YycuIFlvdSBtYXkgYWxzbyBzdXBwbHkgYW4gaW5zdGFuY2Ugb2YgYSB7QGxpbmsgRGF0ZVRpbWUjWm9uZX0gY2xhc3MuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmtlZXBMb2NhbFRpbWU9ZmFsc2VdIC0gSWYgdHJ1ZSwgYWRqdXN0IHRoZSB1bmRlcmx5aW5nIHRpbWUgc28gdGhhdCB0aGUgbG9jYWwgdGltZSBzdGF5cyB0aGUgc2FtZSwgYnV0IGluIHRoZSB0YXJnZXQgem9uZS4gWW91IHNob3VsZCByYXJlbHkgbmVlZCB0aGlzLlxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldFpvbmUoem9uZSwgeyBrZWVwTG9jYWxUaW1lID0gZmFsc2UsIGtlZXBDYWxlbmRhclRpbWUgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB6b25lID0gbm9ybWFsaXplWm9uZSh6b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKHpvbmUuZXF1YWxzKHRoaXMuem9uZSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSBpZiAoIXpvbmUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RTID0gdGhpcy50cztcbiAgICAgIGlmIChrZWVwTG9jYWxUaW1lIHx8IGtlZXBDYWxlbmRhclRpbWUpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0R3Vlc3MgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgY29uc3QgYXNPYmogPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIFtuZXdUU10gPSBvYmpUb1RTKGFzT2JqLCBvZmZzZXRHdWVzcywgem9uZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmUodGhpcywgeyB0czogbmV3VFMsIHpvbmUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvciBvdXRwdXRDYWxlbmRhci4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9KTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyBsb2MgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEp1c3QgYSBjb252ZW5pZW50IGFsaWFzIGZvciByZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuc2V0TG9jYWxlKCdlbi1HQicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgIHJldHVybiB0aGlzLnJlY29uZmlndXJlKHsgbG9jYWxlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogWW91IGNhbiBvbmx5IHNldCB1bml0cyB3aXRoIHRoaXMgbWV0aG9kOyBmb3IgXCJzZXR0aW5nXCIgbWV0YWRhdGEsIHNlZSB7QGxpbmsgRGF0ZVRpbWUjcmVjb25maWd1cmV9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDE3IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IGhvdXI6IDgsIG1pbnV0ZTogMzAgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgd2Vla2RheTogNSB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDA1LCBvcmRpbmFsOiAyMzQgfSlcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzZXQodmFsdWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIG5vcm1hbGl6ZVVuaXQpLFxuICAgICAgc2V0dGluZ1dlZWtTdHVmZiA9XG4gICAgICAgICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtZZWFyKSB8fFxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrTnVtYmVyKSB8fFxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrZGF5KSxcbiAgICAgIGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpLFxuICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1ELFxuICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXI7XG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgbGV0IG1peGVkO1xuICAgIGlmIChzZXR0aW5nV2Vla1N0dWZmKSB7XG4gICAgICBtaXhlZCA9IHdlZWtUb0dyZWdvcmlhbih7IC4uLmdyZWdvcmlhblRvV2Vlayh0aGlzLmMpLCAuLi5ub3JtYWxpemVkIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCkpIHtcbiAgICAgIG1peGVkID0gb3JkaW5hbFRvR3JlZ29yaWFuKHsgLi4uZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYyksIC4uLm5vcm1hbGl6ZWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1peGVkID0geyAuLi50aGlzLnRvT2JqZWN0KCksIC4uLm5vcm1hbGl6ZWQgfTtcblxuICAgICAgLy8gaWYgd2UgZGlkbid0IHNldCB0aGUgZGF5IGJ1dCB3ZSBlbmRlZCB1cCBvbiBhbiBvdmVyZmxvdyBkYXRlLFxuICAgICAgLy8gdXNlIHRoZSBsYXN0IGRheSBvZiB0aGUgcmlnaHQgbW9udGhcbiAgICAgIGlmIChpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSkpIHtcbiAgICAgICAgbWl4ZWQuZGF5ID0gTWF0aC5taW4oZGF5c0luTW9udGgobWl4ZWQueWVhciwgbWl4ZWQubW9udGgpLCBtaXhlZC5kYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFt0cywgb10gPSBvYmpUb1RTKG1peGVkLCB0aGlzLm8sIHRoaXMuem9uZSk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdHMsIG8gfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICpcbiAgICogQWRkaW5nIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBvciBtaWxsaXNlY29uZHMgaW5jcmVhc2VzIHRoZSB0aW1lc3RhbXAgYnkgdGhlIHJpZ2h0IG51bWJlciBvZiBtaWxsaXNlY29uZHMuIEFkZGluZyBkYXlzLCBtb250aHMsIG9yIHllYXJzIHNoaWZ0cyB0aGUgY2FsZW5kYXIsIGFjY291bnRpbmcgZm9yIERTVHMgYW5kIGxlYXAgeWVhcnMgYWxvbmcgdGhlIHdheS4gVGh1cywgYGR0LnBsdXMoeyBob3VyczogMjQgfSlgIG1heSByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdGltZSB0aGFuIGBkdC5wbHVzKHsgZGF5czogMSB9KWAgaWYgdGhlcmUncyBhIERTVCBzaGlmdCBpbiBiZXR3ZWVuLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoMTIzKSAvL34+IGluIDEyMyBtaWxsaXNlY29uZHNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IG1pbnV0ZXM6IDE1IH0pIC8vfj4gaW4gMTUgbWludXRlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KSAvL34+IHRoaXMgdGltZSB0b21vcnJvd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogLTEgfSkgLy9+PiB0aGlzIHRpbWUgeWVzdGVyZGF5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBob3VyczogMywgbWludXRlczogMTMgfSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyhEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pKSAvL34+IGluIDMgaHIsIDEzIG1pblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogU3VidHJhY3QgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI3BsdXN9XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBtaW51cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKS5uZWdhdGUoKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHVuaXQgb2YgdGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgYmVnaW5uaW5nIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCdtb250aCcpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd5ZWFyJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3dlZWsnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMycsIHdlZWtzIGFsd2F5cyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdkYXknKS50b0lTT1RpbWUoKTsgLy89PiAnMDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignaG91cicpLnRvSVNPVGltZSgpOyAvLz0+ICcwNTowMDowMC4wMDAtMDU6MDAnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhcnRPZih1bml0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IG8gPSB7fSxcbiAgICAgIG5vcm1hbGl6ZWRVbml0ID0gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KTtcbiAgICBzd2l0Y2ggKG5vcm1hbGl6ZWRVbml0KSB7XG4gICAgICBjYXNlIFwieWVhcnNcIjpcbiAgICAgICAgby5tb250aCA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwicXVhcnRlcnNcIjpcbiAgICAgIGNhc2UgXCJtb250aHNcIjpcbiAgICAgICAgby5kYXkgPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcIndlZWtzXCI6XG4gICAgICBjYXNlIFwiZGF5c1wiOlxuICAgICAgICBvLmhvdXIgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcImhvdXJzXCI6XG4gICAgICAgIG8ubWludXRlID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJtaW51dGVzXCI6XG4gICAgICAgIG8uc2Vjb25kID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJzZWNvbmRzXCI6XG4gICAgICAgIG8ubWlsbGlzZWNvbmQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaWxsaXNlY29uZHNcIjpcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBubyBkZWZhdWx0LCBpbnZhbGlkIHVuaXRzIHRocm93IGluIG5vcm1hbGl6ZVVuaXQoKVxuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJ3ZWVrc1wiKSB7XG4gICAgICBvLndlZWtkYXkgPSAxO1xuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJxdWFydGVyc1wiKSB7XG4gICAgICBjb25zdCBxID0gTWF0aC5jZWlsKHRoaXMubW9udGggLyAzKTtcbiAgICAgIG8ubW9udGggPSAocSAtIDEpICogMyArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0KG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgZW5kIChtZWFuaW5nIHRoZSBsYXN0IG1pbGxpc2Vjb25kKSBvZiBhIHVuaXQgb2YgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBlbmQgb2YuIENhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCdtb250aCcpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMzFUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZigneWVhcicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMTItMzFUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignd2VlaycpLnRvSVNPKCk7IC8vID0+ICcyMDE0LTAzLTA5VDIzOjU5OjU5Ljk5OS0wNTowMCcsIHdlZWtzIHN0YXJ0IG9uIE1vbmRheXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdkYXknKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdob3VyJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QwNTo1OTo1OS45OTktMDU6MDAnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgZW5kT2YodW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gdGhpcy5wbHVzKHsgW3VuaXRdOiAxIH0pXG4gICAgICAgICAgLnN0YXJ0T2YodW5pdClcbiAgICAgICAgICAubWludXMoMSlcbiAgICAgIDogdGhpcztcbiAgfVxuXG4gIC8vIE9VVFBVVFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXG4gICAqICoqWW91IG1heSBub3Qgd2FudCB0aGlzLioqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvciBhIG1vcmUgZmxleGlibGUgZm9ybWF0dGluZyB0b29sLiBGb3IgYSB0YWJsZSBvZiB0b2tlbnMgYW5kIHRoZWlyIGludGVycHJldGF0aW9ucywgc2VlIFtoZXJlXShodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vIy9mb3JtYXR0aW5nP2lkPXRhYmxlLW9mLXRva2VucykuXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0cyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9uIHRoaXMgRGF0ZVRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBBcHIgMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZnInKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiAnMjAxNyBhdnIuIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdChcIkhIICdob3VycyBhbmQnIG1tICdtaW51dGVzJ1wiKSAvLz0+ICcyMCBob3VycyBhbmQgNTUgbWludXRlcydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Gb3JtYXQoZm10LCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MucmVkZWZhdWx0VG9FTihvcHRzKSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKHRoaXMsIGZtdClcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBkYXRlLiBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgdGhlIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3IgYW5kIGFueSBwcmVzZXRzIGRlZmluZWQgYnkgTHV4b24sIHN1Y2ggYXMgYERhdGVUaW1lLkRBVEVfRlVMTGAgb3IgYERhdGVUaW1lLlRJTUVfU0lNUExFYC5cbiAgICogVGhlIGV4YWN0IGJlaGF2aW9yIG9mIHRoaXMgbWV0aG9kIGlzIGJyb3dzZXItc3BlY2lmaWMsIGJ1dCBpbiBnZW5lcmFsIGl0IHdpbGwgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uXG4gICAqIG9mIHRoZSBEYXRlVGltZSBpbiB0aGUgYXNzaWduZWQgbG9jYWxlLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0gZm9ybWF0T3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucyBhbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0cyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9uIHRoaXMgRGF0ZVRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiA0LzIwLzIwMTdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdlbi1nYicpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gJzIwLzA0LzIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgbG9jYWxlOiAnZW4tZ2InIH0pOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+ICdBcHJpbCAyMCwgMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+ICcxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodXJzZGF5LCBBcHJpbCAyMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNyBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyQ3ljbGU6ICdoMjMnIH0pOyAvLz0+ICcxMTozMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cyA9IEZvcm1hdHMuREFURV9TSE9SVCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBmb3JtYXRPcHRzKS5mb3JtYXREYXRlVGltZSh0aGlzKVxuICAgICAgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0IFwicGFydHNcIiwgbWVhbmluZyBpbmRpdmlkdWFsIHRva2VucyBhbG9uZyB3aXRoIG1ldGFkYXRhLiBUaGlzIGlzIGFsbG93cyBjYWxsZXJzIHRvIHBvc3QtcHJvY2VzcyBpbmRpdmlkdWFsIHNlY3Rpb25zIG9mIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzXG4gICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLCBzYW1lIGFzIGB0b0xvY2FsZVN0cmluZ2AuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlUGFydHMoKTsgLy89PiBbXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnZGF5JywgdmFsdWU6ICcyNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ21vbnRoJywgdmFsdWU6ICcwNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ3llYXInLCB2YWx1ZTogJzE5ODInIH1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gXVxuICAgKi9cbiAgdG9Mb2NhbGVQYXJ0cyhvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lUGFydHModGhpcylcbiAgICAgIDogW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MywgNSwgMjUpLnRvSVNPKCkgLy89PiAnMTk4Mi0wNS0yNVQwMDowMDowMC4wMDBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1LTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcyMDE3MDQyMlQyMDQ3MDUuMzM1LTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPKHtcbiAgICBmb3JtYXQgPSBcImV4dGVuZGVkXCIsXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dCA9IGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiO1xuXG4gICAgbGV0IGMgPSB0b0lTT0RhdGUodGhpcywgZXh0KTtcbiAgICBjICs9IFwiVFwiO1xuICAgIGMgKz0gdG9JU09UaW1lKHRoaXMsIGV4dCwgc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kcywgaW5jbHVkZU9mZnNldCk7XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyBkYXRlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTk4MjA1MjUnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPRGF0ZSh7IGZvcm1hdCA9IFwiZXh0ZW5kZWRcIiB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvSVNPRGF0ZSh0aGlzLCBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB3ZWVrIGRhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT1dlZWtEYXRlKCkgLy89PiAnMTk4Mi1XMjEtMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09XZWVrRGF0ZSgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwia2tray0nVydXVy1jXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgdGltZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QwNzozNDoxOS4zNjFaJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUoe1xuICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gZmFsc2UsXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXG4gICAgaW5jbHVkZU9mZnNldCA9IHRydWUsXG4gICAgaW5jbHVkZVByZWZpeCA9IGZhbHNlLFxuICAgIGZvcm1hdCA9IFwiZXh0ZW5kZWRcIixcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjID0gaW5jbHVkZVByZWZpeCA/IFwiVFwiIDogXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgYyArXG4gICAgICB0b0lTT1RpbWUodGhpcywgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIsIHN1cHByZXNzU2Vjb25kcywgc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIFJGQyAyODIyLWNvbXBhdGlibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwICswMDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCAtMDQwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9SRkMyODIyKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJFRUUsIGRkIExMTCB5eXl5IEhIOm1tOnNzIFpaWlwiLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSFRUUCBoZWFkZXJzLiBUaGUgb3V0cHV0IGlzIGFsd2F5cyBleHByZXNzZWQgaW4gR01ULlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSBzdHJpbmcgY29uZm9ybXMgdG8gUkZDIDExMjMuXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCBHTVQnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMywgMTkpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMTk6MDA6MDAgR01UJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0hUVFAoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLnRvVVRDKCksIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyAnR01UJ1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMRGF0ZSgpIC8vPT4gJzIwMTQtMDctMTMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU1FMRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUxUaW1lKHsgaW5jbHVkZU9mZnNldCA9IHRydWUsIGluY2x1ZGVab25lID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgbGV0IGZtdCA9IFwiSEg6bW06c3MuU1NTXCI7XG5cbiAgICBpZiAoaW5jbHVkZVpvbmUgfHwgaW5jbHVkZU9mZnNldCkge1xuICAgICAgZm10ICs9IFwiIFwiO1xuICAgICAgaWYgKGluY2x1ZGVab25lKSB7XG4gICAgICAgIGZtdCArPSBcInpcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgICAgICBmbXQgKz0gXCJaWlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgZm10LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlWm9uZTogdHJ1ZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBBbWVyaWNhL05ld19Zb3JrJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1NRTChvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3RoaXMudG9TUUxEYXRlKCl9ICR7dGhpcy50b1NRTFRpbWUob3B0cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0lTTygpIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS4gQWxpYXMgb2Yge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvTWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdG9TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIC8gMTAwMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgQlNPTiBzZXJpYWxpemFibGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgdG9CU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSlNEYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcjogMjAxNywgbW9udGg6IDQsIGRheTogMjIsIGhvdXI6IDIwLCBtaW51dGU6IDQ5LCBzZWNvbmQ6IDQyLCBtaWxsaXNlY29uZDogMjY4IH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3Qob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcblxuICAgIGNvbnN0IGJhc2UgPSB7IC4uLnRoaXMuYyB9O1xuXG4gICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykge1xuICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7XG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBEYXRlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovXG4gIHRvSlNEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcbiAgfVxuXG4gIC8vIENPTVBBUkVcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIERhdGVUaW1lcyBhcyBhIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIERhdGVUaW1lIHRvIGNvbXBhcmUgdGhpcyBvbmUgdG9cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGkxID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4Mi0wNS0yNVQwOTo0NScpLFxuICAgKiAgICAgaTIgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgzLTEwLTE0VDEwOjMwJyk7XG4gICAqIGkyLmRpZmYoaTEpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogNDM4MDc1MDAwMDAgfVxuICAgKiBpMi5kaWZmKGkxLCAnaG91cnMnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTIxNjguNzUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LjAzMTI1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cycsICdob3VycyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOSwgaG91cnM6IDAuNzUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmYob3RoZXJEYXRlVGltZSwgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlckRhdGVUaW1lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwiY3JlYXRlZCBieSBkaWZmaW5nIGFuIGludmFsaWQgRGF0ZVRpbWVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyT3B0cyA9IHsgbG9jYWxlOiB0aGlzLmxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgLi4ub3B0cyB9O1xuXG4gICAgY29uc3QgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIG90aGVySXNMYXRlciA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpID4gdGhpcy52YWx1ZU9mKCksXG4gICAgICBlYXJsaWVyID0gb3RoZXJJc0xhdGVyID8gdGhpcyA6IG90aGVyRGF0ZVRpbWUsXG4gICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgZGlmZmVkID0gZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpO1xuXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCByaWdodCBub3cuXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjZGlmZn1cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmZOb3codW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpZmYoRGF0ZVRpbWUubm93KCksIHVuaXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgdW50aWwob3RoZXJEYXRlVGltZSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHRoaXMsIG90aGVyRGF0ZVRpbWUpIDogdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIERhdGVUaW1lIGlzIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZSBhcyBhbm90aGVyIERhdGVUaW1lLlxuICAgKiBIaWdoZXItb3JkZXIgdW5pdHMgbXVzdCBhbHNvIGJlIGlkZW50aWNhbCBmb3IgdGhpcyBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgLlxuICAgKiBOb3RlIHRoYXQgdGltZSB6b25lcyBhcmUgKippZ25vcmVkKiogaW4gdGhpcyBjb21wYXJpc29uLCB3aGljaCBjb21wYXJlcyB0aGUgKipsb2NhbCoqIGNhbGVuZGFyIHRpbWUuIFVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0gdG8gY29udmVydCBvbmUgb2YgdGhlIGRhdGVzIGlmIG5lZWRlZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuaGFzU2FtZShvdGhlckRULCAnZGF5Jyk7IC8vfj4gdHJ1ZSBpZiBvdGhlckRUIGlzIGluIHRoZSBzYW1lIGN1cnJlbnQgY2FsZW5kYXIgZGF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgaW5wdXRNcyA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xuICAgIGNvbnN0IGFkanVzdGVkVG9ab25lID0gdGhpcy5zZXRab25lKG90aGVyRGF0ZVRpbWUuem9uZSwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pO1xuICAgIHJldHVybiBhZGp1c3RlZFRvWm9uZS5zdGFydE9mKHVuaXQpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSBhZGp1c3RlZFRvWm9uZS5lbmRPZih1bml0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZmYgdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbWlsbGlzZWNvbmQsIGhhdmUgdGhlIHNhbWUgem9uZSBhbmQgbG9jYXRpb24sIGFuZCBhcmUgYm90aCB2YWxpZC5cbiAgICogVG8gY29tcGFyZSBqdXN0IHRoZSBtaWxsaXNlY29uZCB2YWx1ZXMsIHVzZSBgK2R0MSA9PT0gK2R0MmAuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc1ZhbGlkICYmXG4gICAgICBvdGhlci5pc1ZhbGlkICYmXG4gICAgICB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXIudmFsdWVPZigpICYmXG4gICAgICB0aGlzLnpvbmUuZXF1YWxzKG90aGVyLnpvbmUpICYmXG4gICAgICB0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRoaXMgdGltZSByZWxhdGl2ZSB0byBub3csIHN1Y2ggYXMgXCJpbiB0d28gZGF5c1wiLiBDYW4gb25seSBpbnRlcm5hdGlvbmFsaXplIGlmIHlvdXJcbiAgICogcGxhdGZvcm0gc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuIFJvdW5kcyBkb3duIGJ5IGRlZmF1bHQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zdHlsZT1cImxvbmdcIl0gLSB0aGUgc3R5bGUgb2YgdW5pdHMsIG11c3QgYmUgXCJsb25nXCIsIFwic2hvcnRcIiwgb3IgXCJuYXJyb3dcIlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdCBvciBhcnJheSBvZiB1bml0czsgaWYgb21pdHRlZCwgb3IgYW4gYXJyYXksIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSBiZXN0IHVuaXQuIFVzZSBhbiBhcnJheSBvciBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIG9yIFwic2Vjb25kc1wiXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucm91bmQ9dHJ1ZV0gLSB3aGV0aGVyIHRvIHJvdW5kIHRoZSBudW1iZXJzIGluIHRoZSBvdXRwdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5wYWRkaW5nPTBdIC0gcGFkZGluZyBpbiBtaWxsaXNlY29uZHMuIFRoaXMgYWxsb3dzIHlvdSB0byByb3VuZCB1cCB0aGUgcmVzdWx0IGlmIGl0IGZpdHMgaW5zaWRlIHRoZSB0aHJlc2hvbGQuIERvbid0IHVzZSBpbiBjb21iaW5hdGlvbiB3aXRoIHtyb3VuZDogZmFsc2V9IGJlY2F1c2UgdGhlIGRlY2ltYWwgb3V0cHV0IHdpbGwgaW5jbHVkZSB0aGUgcGFkZGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJpbiAxIGRheVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZShcImVzXCIpLnRvUmVsYXRpdmUoeyBkYXlzOiAxIH0pIC8vPT4gXCJkZW50cm8gZGUgMSBkw61hXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSh7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkYW5zIDIzIGhldXJlc1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSh7IHVuaXQ6IFwiaG91cnNcIiB9KSAvLz0+IFwiNDggaG91cnMgYWdvXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBob3VyczogMzYgfSkudG9SZWxhdGl2ZSh7IHJvdW5kOiBmYWxzZSB9KSAvLz0+IFwiMS41IGRheXMgYWdvXCJcbiAgICovXG4gIHRvUmVsYXRpdmUob3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGJhc2UgPSBvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwgeyB6b25lOiB0aGlzLnpvbmUgfSksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nID8gKHRoaXMgPCBiYXNlID8gLW9wdGlvbnMucGFkZGluZyA6IG9wdGlvbnMucGFkZGluZykgOiAwO1xuICAgIGxldCB1bml0cyA9IFtcInllYXJzXCIsIFwibW9udGhzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIl07XG4gICAgbGV0IHVuaXQgPSBvcHRpb25zLnVuaXQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy51bml0KSkge1xuICAgICAgdW5pdHMgPSBvcHRpb25zLnVuaXQ7XG4gICAgICB1bml0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKGJhc2UsIHRoaXMucGx1cyhwYWRkaW5nKSwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG51bWVyaWM6IFwiYWx3YXlzXCIsXG4gICAgICB1bml0cyxcbiAgICAgIHVuaXQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGRhdGUgcmVsYXRpdmUgdG8gdG9kYXksIHN1Y2ggYXMgXCJ5ZXN0ZXJkYXlcIiBvciBcIm5leHQgbW9udGhcIi5cbiAgICogT25seSBpbnRlcm5hdGlvbmFsaXplcyBvbiBwbGF0Zm9ybXMgdGhhdCBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0OyBpZiBvbWl0dGVkLCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgdW5pdC4gVXNlIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBvciBcImRheXNcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCJ0b21vcnJvd1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZShcImVzXCIpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiXCJtYcOxYW5hXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRlbWFpblwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqL1xuICB0b1JlbGF0aXZlQ2FsZW5kYXIob3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwgeyB6b25lOiB0aGlzLnpvbmUgfSksIHRoaXMsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBudW1lcmljOiBcImF1dG9cIixcbiAgICAgIHVuaXRzOiBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIl0sXG4gICAgICBjYWxlbmRhcnk6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtaW4gb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1pbmltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtaW4gRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi9cbiAgc3RhdGljIG1pbiguLi5kYXRlVGltZXMpIHtcbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWluIHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgKGkpID0+IGkudmFsdWVPZigpLCBNYXRoLm1pbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXggb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1heGltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtYXggRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi9cbiAgc3RhdGljIG1heCguLi5kYXRlVGltZXMpIHtcbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWF4IHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgKGkpID0+IGkudmFsdWVPZigpLCBNYXRoLm1heCk7XG4gIH1cblxuICAvLyBNSVNDXG5cbiAgLyoqXG4gICAqIEV4cGxhaW4gaG93IGEgc3RyaW5nIHdvdWxkIGJlIHBhcnNlZCBieSBmcm9tRm9ybWF0KClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSBkZXNjcmlwdGlvbilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRha2VuIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IG9wdGlvbnMsXG4gICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIHJldHVybiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdEV4cGxhaW4gaW5zdGVhZFxuICAgKi9cbiAgc3RhdGljIGZyb21TdHJpbmdFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBGT1JNQVQgUFJFU0VUU1xuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlIDEwLzE0LzE5ODNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9TSE9SVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX1NIT1JUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9NRUQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9NRUQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCBPY3QgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfTUVEX1dJVEhfV0VFS0RBWSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX01FRF9XSVRIX1dFRUtEQVk7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9GVUxMKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfRlVMTDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX0hVR0UoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9IVUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfU0lNUExFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfU0lNUExFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfV0lUSF9TSE9SVF9PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9MT05HX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9TSU1QTEUoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9TSU1QTEU7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9MT05HX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX1NIT1JUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgMTQgT2N0IDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9XRUVLREFZO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0ZVTEwoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfRlVMTDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0hVR0UoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfSFVHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyaWVuZGx5RGF0ZVRpbWUoZGF0ZVRpbWVpc2gpIHtcbiAgaWYgKERhdGVUaW1lLmlzRGF0ZVRpbWUoZGF0ZVRpbWVpc2gpKSB7XG4gICAgcmV0dXJuIGRhdGVUaW1laXNoO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIGRhdGVUaW1laXNoLnZhbHVlT2YgJiYgaXNOdW1iZXIoZGF0ZVRpbWVpc2gudmFsdWVPZigpKSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tSlNEYXRlKGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiB0eXBlb2YgZGF0ZVRpbWVpc2ggPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbU9iamVjdChkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgYFVua25vd24gZGF0ZXRpbWUgYXJndW1lbnQ6ICR7ZGF0ZVRpbWVpc2h9LCBvZiB0eXBlICR7dHlwZW9mIGRhdGVUaW1laXNofWBcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciwgSW52YWxpZER1cmF0aW9uRXJyb3IsIEludmFsaWRVbml0RXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcIi4vaW1wbC9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ltcGwvaW52YWxpZC5qc1wiO1xuaW1wb3J0IExvY2FsZSBmcm9tIFwiLi9pbXBsL2xvY2FsZS5qc1wiO1xuaW1wb3J0IHsgcGFyc2VJU09EdXJhdGlvbiwgcGFyc2VJU09UaW1lT25seSB9IGZyb20gXCIuL2ltcGwvcmVnZXhQYXJzZXIuanNcIjtcbmltcG9ydCB7XG4gIGFzTnVtYmVyLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaXNJbnRlZ2VyLFxuICBpc051bWJlcixcbiAgaXNVbmRlZmluZWQsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbn0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBEdXJhdGlvblwiO1xuXG4vLyB1bml0IGNvbnZlcnNpb24gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgbG93T3JkZXJNYXRyaXggPSB7XG4gICAgd2Vla3M6IHtcbiAgICAgIGRheXM6IDcsXG4gICAgICBob3VyczogNyAqIDI0LFxuICAgICAgbWludXRlczogNyAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIGRheXM6IHtcbiAgICAgIGhvdXJzOiAyNCxcbiAgICAgIG1pbnV0ZXM6IDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBob3VyczogeyBtaW51dGVzOiA2MCwgc2Vjb25kczogNjAgKiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMCB9LFxuICAgIG1pbnV0ZXM6IHsgc2Vjb25kczogNjAsIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwIH0sXG4gICAgc2Vjb25kczogeyBtaWxsaXNlY29uZHM6IDEwMDAgfSxcbiAgfSxcbiAgY2FzdWFsTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogNTIsXG4gICAgICBkYXlzOiAzNjUsXG4gICAgICBob3VyczogMzY1ICogMjQsXG4gICAgICBtaW51dGVzOiAzNjUgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcXVhcnRlcnM6IHtcbiAgICAgIG1vbnRoczogMyxcbiAgICAgIHdlZWtzOiAxMyxcbiAgICAgIGRheXM6IDkxLFxuICAgICAgaG91cnM6IDkxICogMjQsXG4gICAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICB3ZWVrczogNCxcbiAgICAgIGRheXM6IDMwLFxuICAgICAgaG91cnM6IDMwICogMjQsXG4gICAgICBtaW51dGVzOiAzMCAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG5cbiAgICAuLi5sb3dPcmRlck1hdHJpeCxcbiAgfSxcbiAgZGF5c0luWWVhckFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0MDAsXG4gIGRheXNJbk1vbnRoQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQ4MDAsXG4gIGFjY3VyYXRlTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBxdWFydGVyczoge1xuICAgICAgbW9udGhzOiAzLFxuICAgICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxuICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcbiAgICAgIGhvdXJzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQpIC8gNCxcbiAgICAgIG1pbnV0ZXM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwKSAvIDQsXG4gICAgICBzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwKSAvIDQsXG4gICAgICBtaWxsaXNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwKSAvIDQsXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiBkYXlzSW5Nb250aEFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LFxuICAgICAgbWludXRlczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIC4uLmxvd09yZGVyTWF0cml4LFxuICB9O1xuXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcbmNvbnN0IG9yZGVyZWRVbml0cyA9IFtcbiAgXCJ5ZWFyc1wiLFxuICBcInF1YXJ0ZXJzXCIsXG4gIFwibW9udGhzXCIsXG4gIFwid2Vla3NcIixcbiAgXCJkYXlzXCIsXG4gIFwiaG91cnNcIixcbiAgXCJtaW51dGVzXCIsXG4gIFwic2Vjb25kc1wiLFxuICBcIm1pbGxpc2Vjb25kc1wiLFxuXTtcblxuY29uc3QgcmV2ZXJzZVVuaXRzID0gb3JkZXJlZFVuaXRzLnNsaWNlKDApLnJldmVyc2UoKTtcblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zIFwiY3JlYXRlIGFub3RoZXIgaW5zdGFuY2UganVzdCBsaWtlIHRoaXMgb25lLCBidXQgd2l0aCB0aGVzZSBjaGFuZ2VzXCJcbmZ1bmN0aW9uIGNsb25lKGR1ciwgYWx0cywgY2xlYXIgPSBmYWxzZSkge1xuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXG4gIGNvbnN0IGNvbmYgPSB7XG4gICAgdmFsdWVzOiBjbGVhciA/IGFsdHMudmFsdWVzIDogeyAuLi5kdXIudmFsdWVzLCAuLi4oYWx0cy52YWx1ZXMgfHwge30pIH0sXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3ksXG4gIH07XG4gIHJldHVybiBuZXcgRHVyYXRpb24oY29uZik7XG59XG5cbmZ1bmN0aW9uIGFudGlUcnVuYyhuKSB7XG4gIHJldHVybiBuIDwgMCA/IE1hdGguZmxvb3IobikgOiBNYXRoLmNlaWwobik7XG59XG5cbi8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcbmZ1bmN0aW9uIGNvbnZlcnQobWF0cml4LCBmcm9tTWFwLCBmcm9tVW5pdCwgdG9NYXAsIHRvVW5pdCkge1xuICBjb25zdCBjb252ID0gbWF0cml4W3RvVW5pdF1bZnJvbVVuaXRdLFxuICAgIHJhdyA9IGZyb21NYXBbZnJvbVVuaXRdIC8gY29udixcbiAgICBzYW1lU2lnbiA9IE1hdGguc2lnbihyYXcpID09PSBNYXRoLnNpZ24odG9NYXBbdG9Vbml0XSksXG4gICAgLy8gb2ssIHNvIHRoaXMgaXMgd2lsZCwgYnV0IHNlZSB0aGUgbWF0cml4IGluIHRoZSB0ZXN0c1xuICAgIGFkZGVkID1cbiAgICAgICFzYW1lU2lnbiAmJiB0b01hcFt0b1VuaXRdICE9PSAwICYmIE1hdGguYWJzKHJhdykgPD0gMSA/IGFudGlUcnVuYyhyYXcpIDogTWF0aC50cnVuYyhyYXcpO1xuICB0b01hcFt0b1VuaXRdICs9IGFkZGVkO1xuICBmcm9tTWFwW2Zyb21Vbml0XSAtPSBhZGRlZCAqIGNvbnY7XG59XG5cbi8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlcyhtYXRyaXgsIHZhbHMpIHtcbiAgcmV2ZXJzZVVuaXRzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHNbY3VycmVudF0pKSB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29udmVydChtYXRyaXgsIHZhbHMsIHByZXZpb3VzLCB2YWxzLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfVxuICB9LCBudWxsKTtcbn1cblxuLyoqXG4gKiBBIER1cmF0aW9uIG9iamVjdCByZXByZXNlbnRzIGEgcGVyaW9kIG9mIHRpbWUsIGxpa2UgXCIyIG1vbnRoc1wiIG9yIFwiMSBkYXksIDEgaG91clwiLiBDb25jZXB0dWFsbHksIGl0J3MganVzdCBhIG1hcCBvZiB1bml0cyB0byB0aGVpciBxdWFudGl0aWVzLCBhY2NvbXBhbmllZCBieSBzb21lIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBhbmQgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS4gVGhleSBjYW4gYmUgdXNlZCBvbiB0aGVpciBvd24gb3IgaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBMdXhvbiB0eXBlczsgZm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHtAbGluayBEYXRlVGltZSNwbHVzfSB0byBhZGQgYSBEdXJhdGlvbiBvYmplY3QgdG8gYSBEYXRlVGltZSwgcHJvZHVjaW5nIGFub3RoZXIgRGF0ZVRpbWUuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBEdXJhdGlvbjpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYSBEdXJhdGlvbiwgdXNlIHtAbGluayBEdXJhdGlvbiNmcm9tTWlsbGlzfSwge0BsaW5rIER1cmF0aW9uI2Zyb21PYmplY3R9LCBvciB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT30uXG4gKiAqICoqVW5pdCB2YWx1ZXMqKiBTZWUgdGhlIHtAbGluayBEdXJhdGlvbiN5ZWFyc30sIHtAbGluayBEdXJhdGlvbi5tb250aHN9LCB7QGxpbmsgRHVyYXRpb24jd2Vla3N9LCB7QGxpbmsgRHVyYXRpb24jZGF5c30sIHtAbGluayBEdXJhdGlvbiNob3Vyc30sIHtAbGluayBEdXJhdGlvbiNtaW51dGVzfSwge0BsaW5rIER1cmF0aW9uI3NlY29uZHN9LCB7QGxpbmsgRHVyYXRpb24jbWlsbGlzZWNvbmRzfSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSAge0BsaW5rIER1cmF0aW9uI2xvY2FsZX0gYW5kIHtAbGluayBEdXJhdGlvbiNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBuZXcgRHVyYXRpb25zIG91dCBvZiBvbGQgb25lcyB1c2Uge0BsaW5rIER1cmF0aW9uI3BsdXN9LCB7QGxpbmsgRHVyYXRpb24jbWludXN9LCB7QGxpbmsgRHVyYXRpb24jbm9ybWFsaXplfSwge0BsaW5rIER1cmF0aW9uI3NldH0sIHtAbGluayBEdXJhdGlvbiNyZWNvbmZpZ3VyZX0sIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSwgYW5kIHtAbGluayBEdXJhdGlvbiNuZWdhdGV9LlxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIER1cmF0aW9uIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIER1cmF0aW9uI2FzfSwge0BsaW5rIER1cmF0aW9uI3RvSVNPfSwge0BsaW5rIER1cmF0aW9uI3RvRm9ybWF0fSwgYW5kIHtAbGluayBEdXJhdGlvbiN0b0pTT059XG4gKlxuICogVGhlcmUncyBhcmUgbW9yZSBtZXRob2RzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uIGFuZCB2YWxpZGl0eSwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdXJhdGlvbiB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uc3QgYWNjdXJhdGUgPSBjb25maWcuY29udmVyc2lvbkFjY3VyYWN5ID09PSBcImxvbmd0ZXJtXCIgfHwgZmFsc2U7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWx1ZXMgPSBjb25maWcudmFsdWVzO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb252ZXJzaW9uQWNjdXJhY3kgPSBhY2N1cmF0ZSA/IFwibG9uZ3Rlcm1cIiA6IFwiY2FzdWFsXCI7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm1hdHJpeCA9IGFjY3VyYXRlID8gYWNjdXJhdGVNYXRyaXggOiBjYXN1YWxNYXRyaXg7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uRHVyYXRpb24gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBEdXJhdGlvbiBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IG9mIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbU1pbGxpcyhjb3VudCwgb3B0cykge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiBjb3VudCB9LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogSWYgdGhpcyBvYmplY3QgaXMgZW1wdHkgdGhlbiBhIHplcm8gbWlsbGlzZWNvbmRzIGR1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnF1YXJ0ZXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGhzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXlzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91cnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9W11dIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iaiwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYER1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290ICR7XG4gICAgICAgICAgb2JqID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2Ygb2JqXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xuICAgICAgdmFsdWVzOiBub3JtYWxpemVPYmplY3Qob2JqLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0cyksXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9wdHMuY29udmVyc2lvbkFjY3VyYWN5LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gRHVyYXRpb25MaWtlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdCB8IG51bWJlciB8IER1cmF0aW9ufSBkdXJhdGlvbkxpa2VcbiAgICogT25lIG9mOlxuICAgKiAtIG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxuICAgKiAtIG51bWJlciByZXByZXNlbnRpbmcgbWlsbGlzZWNvbmRzXG4gICAqIC0gRHVyYXRpb24gaW5zdGFuY2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbkxpa2UpIHtcbiAgICBpZiAoaXNOdW1iZXIoZHVyYXRpb25MaWtlKSkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMoZHVyYXRpb25MaWtlKTtcbiAgICB9IGVsc2UgaWYgKER1cmF0aW9uLmlzRHVyYXRpb24oZHVyYXRpb25MaWtlKSkge1xuICAgICAgcmV0dXJuIGR1cmF0aW9uTGlrZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbkxpa2UgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KGR1cmF0aW9uTGlrZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYFVua25vd24gZHVyYXRpb24gYXJndW1lbnQgJHtkdXJhdGlvbkxpa2V9IG9mIHR5cGUgJHt0eXBlb2YgZHVyYXRpb25MaWtlfWBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgZHVyYXRpb24gc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1AzWTZNMVc0RFQxMkgzME01UycpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAzLCBtb250aHM6IDYsIHdlZWtzOiAxLCBkYXlzOiA0LCBob3VyczogMTIsIG1pbnV0ZXM6IDMwLCBzZWNvbmRzOiA1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUFQyM0gnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjMgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQNVkzTScpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiA1LCBtb250aHM6IDMgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcGFyc2VkXSA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCk7XG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgdGltZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MjI6MzMuNDQ0JykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAyMiwgc2Vjb25kczogMzMsIG1pbGxpc2Vjb25kczogNDQ0IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTT1RpbWUodGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09UaW1lT25seSh0ZXh0KTtcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIGRhdGV0aW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZER1cmF0aW9uRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRHVyYXRpb24oeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiBcInllYXJzXCIsXG4gICAgICB5ZWFyczogXCJ5ZWFyc1wiLFxuICAgICAgcXVhcnRlcjogXCJxdWFydGVyc1wiLFxuICAgICAgcXVhcnRlcnM6IFwicXVhcnRlcnNcIixcbiAgICAgIG1vbnRoOiBcIm1vbnRoc1wiLFxuICAgICAgbW9udGhzOiBcIm1vbnRoc1wiLFxuICAgICAgd2VlazogXCJ3ZWVrc1wiLFxuICAgICAgd2Vla3M6IFwid2Vla3NcIixcbiAgICAgIGRheTogXCJkYXlzXCIsXG4gICAgICBkYXlzOiBcImRheXNcIixcbiAgICAgIGhvdXI6IFwiaG91cnNcIixcbiAgICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgICBtaW51dGU6IFwibWludXRlc1wiLFxuICAgICAgbWludXRlczogXCJtaW51dGVzXCIsXG4gICAgICBzZWNvbmQ6IFwic2Vjb25kc1wiLFxuICAgICAgc2Vjb25kczogXCJzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZHNcIixcbiAgICB9W3VuaXQgPyB1bml0LnRvTG93ZXJDYXNlKCkgOiB1bml0XTtcblxuICAgIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEdXJhdGlvbi4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRHVyYXRpb24obykge1xuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25EdXJhdGlvbikgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0ICB0aGUgbG9jYWxlIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2VuLUdCJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEdXJhdGlvbiwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEdXJhdGlvblxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuIFlvdSBtYXkgdXNlIHRoZXNlIHRva2VuczpcbiAgICogKiBgU2AgZm9yIG1pbGxpc2Vjb25kc1xuICAgKiAqIGBzYCBmb3Igc2Vjb25kc1xuICAgKiAqIGBtYCBmb3IgbWludXRlc1xuICAgKiAqIGBoYCBmb3IgaG91cnNcbiAgICogKiBgZGAgZm9yIGRheXNcbiAgICogKiBgTWAgZm9yIG1vbnRoc1xuICAgKiAqIGB5YCBmb3IgeWVhcnNcbiAgICogTm90ZXM6XG4gICAqICogQWRkIHBhZGRpbmcgYnkgcmVwZWF0aW5nIHRoZSB0b2tlbiwgZS5nLiBcInl5XCIgcGFkcyB0aGUgeWVhcnMgdG8gdHdvIGRpZ2l0cywgXCJoaGhoXCIgcGFkcyB0aGUgaG91cnMgb3V0IHRvIGZvdXIgZGlnaXRzXG4gICAqICogVGhlIGR1cmF0aW9uIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBzZXQgb2YgdW5pdHMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgdXNpbmcge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99IGFuZCB0aGUgRHVyYXRpb25zJ3MgY29udmVyc2lvbiBhY2N1cmFjeSBzZXR0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxvb3I9dHJ1ZV0gLSBmbG9vciBudW1lcmljYWwgdmFsdWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInkgZCBzXCIpIC8vPT4gXCIxIDYgMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInl5IGRkIHNzc1wiKSAvLz0+IFwiMDEgMDYgMDAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwiTSBTXCIpIC8vPT4gXCIxMiA1MTg0MDIwMDBcIlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChmbXQsIG9wdHMgPSB7fSkge1xuICAgIC8vIHJldmVyc2UtY29tcGF0IHNpbmNlIDEuMjsgd2UgYWx3YXlzIHJvdW5kIGRvd24gbm93LCBuZXZlciB1cCwgYW5kIHdlIGRvIGl0IGJ5IGRlZmF1bHRcbiAgICBjb25zdCBmbXRPcHRzID0ge1xuICAgICAgLi4ub3B0cyxcbiAgICAgIGZsb29yOiBvcHRzLnJvdW5kICE9PSBmYWxzZSAmJiBvcHRzLmZsb29yICE9PSBmYWxzZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYywgZm10T3B0cykuZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKHRoaXMsIGZtdClcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgRHVyYXRpb24gd2l0aCBhbGwgdW5pdHMgaW5jbHVkZWRcbiAgICogVG8gbW9kaWZ5IGl0cyBiZWhhdmlvciB1c2UgdGhlIGBsaXN0U3R5bGVgIGFuZCBhbnkgSW50bC5OdW1iZXJGb3JtYXQgb3B0aW9uLCB0aG91Z2ggYHVuaXREaXNwbGF5YCBpcyBlc3BlY2lhbGx5IHJlbGV2YW50LiBTZWUge0BsaW5rIEludGwuTnVtYmVyRm9ybWF0fS5cbiAgICogQHBhcmFtIG9wdHMgLSBPbiBvcHRpb24gb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBmb3JtYXR0aW5nLiBBY2NlcHRzIHRoZSBzYW1lIGtleXMgYXMgdGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9mIHRoZSBuYXRpdmUgYEludC5OdW1iZXJGb3JtYXRgIGNvbnN0cnVjdG9yLCBhcyB3ZWxsIGFzIGBsaXN0U3R5bGVgLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiB2YXIgZHVyID0gRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDEsIGhvdXJzOiA1LCBtaW51dGVzOiA2IH0pXG4gICAqIGR1ci50b0h1bWFuKCkgLy89PiAnMSBkYXksIDUgaG91cnMsIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyBsaXN0U3R5bGU6IFwibG9uZ1wiIH0pIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCBhbmQgNiBtaW51dGVzJ1xuICAgKiBkdXIudG9IdW1hbih7IHVuaXREaXNwbGF5OiBcInNob3J0XCIgfSkgLy89PiAnMSBkYXksIDUgaHIsIDYgbWluJ1xuICAgKiBgYGBcbiAgICovXG4gIHRvSHVtYW4ob3B0cyA9IHt9KSB7XG4gICAgY29uc3QgbCA9IG9yZGVyZWRVbml0c1xuICAgICAgLm1hcCgodW5pdCkgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlc1t1bml0XTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2NcbiAgICAgICAgICAubnVtYmVyRm9ybWF0dGVyKHsgc3R5bGU6IFwidW5pdFwiLCB1bml0RGlzcGxheTogXCJsb25nXCIsIC4uLm9wdHMsIHVuaXQ6IHVuaXQuc2xpY2UoMCwgLTEpIH0pXG4gICAgICAgICAgLmZvcm1hdCh2YWwpO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKG4pID0+IG4pO1xuXG4gICAgcmV0dXJuIHRoaXMubG9jXG4gICAgICAubGlzdEZvcm1hdHRlcih7IHR5cGU6IFwiY29uanVuY3Rpb25cIiwgc3R5bGU6IG9wdHMubGlzdFN0eWxlIHx8IFwibmFycm93XCIsIC4uLm9wdHMgfSlcbiAgICAgIC5mb3JtYXQobCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3QoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcbiAgICByZXR1cm4geyAuLi50aGlzLnZhbHVlcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDMsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDNZVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNCwgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQNE1UNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA1IH0pLnRvSVNPKCkgLy89PiAnUDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogNSB9KS50b0lTTygpIC8vPT4gJ1BUNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDYgfSkudG9JU08oKSAvLz0+ICdQVDAuMDA2UydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08oKSB7XG4gICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZ1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBzID0gXCJQXCI7XG4gICAgaWYgKHRoaXMueWVhcnMgIT09IDApIHMgKz0gdGhpcy55ZWFycyArIFwiWVwiO1xuICAgIGlmICh0aGlzLm1vbnRocyAhPT0gMCB8fCB0aGlzLnF1YXJ0ZXJzICE9PSAwKSBzICs9IHRoaXMubW9udGhzICsgdGhpcy5xdWFydGVycyAqIDMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy53ZWVrcyAhPT0gMCkgcyArPSB0aGlzLndlZWtzICsgXCJXXCI7XG4gICAgaWYgKHRoaXMuZGF5cyAhPT0gMCkgcyArPSB0aGlzLmRheXMgKyBcIkRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCB8fCB0aGlzLm1pbnV0ZXMgIT09IDAgfHwgdGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxuICAgICAgcyArPSBcIlRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSB0aGlzLmhvdXJzICsgXCJIXCI7XG4gICAgaWYgKHRoaXMubWludXRlcyAhPT0gMCkgcyArPSB0aGlzLm1pbnV0ZXMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxuICAgICAgLy8gdGhpcyB3aWxsIGhhbmRsZSBcImZsb2F0aW5nIHBvaW50IG1hZG5lc3NcIiBieSByZW1vdmluZyBleHRyYSBkZWNpbWFsIHBsYWNlc1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTg4MDA0L2lzLWZsb2F0aW5nLXBvaW50LW1hdGgtYnJva2VuXG4gICAgICBzICs9IHJvdW5kVG8odGhpcy5zZWNvbmRzICsgdGhpcy5taWxsaXNlY29uZHMgLyAxMDAwLCAzKSArIFwiU1wiO1xuICAgIGlmIChzID09PSBcIlBcIikgcyArPSBcIlQwU1wiO1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLCBmb3JtYXR0ZWQgYXMgYSB0aW1lIG9mIGRheS5cbiAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGUgZHVyYXRpb24gaXMgaW52YWxpZCwgbmVnYXRpdmUsIG9yIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiAyNCBob3Vycy5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSgpIC8vPT4gJzExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc01pbGxpc2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMDowMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMTE6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxMTAwMDAuMDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbWlsbGlzID0gdGhpcy50b01pbGxpcygpO1xuICAgIGlmIChtaWxsaXMgPCAwIHx8IG1pbGxpcyA+PSA4NjQwMDAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICBvcHRzID0ge1xuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHM6IGZhbHNlLFxuICAgICAgc3VwcHJlc3NTZWNvbmRzOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVQcmVmaXg6IGZhbHNlLFxuICAgICAgZm9ybWF0OiBcImV4dGVuZGVkXCIsXG4gICAgICAuLi5vcHRzLFxuICAgIH07XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2hpZnRUbyhcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIik7XG5cbiAgICBsZXQgZm10ID0gb3B0cy5mb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwiaGhtbVwiIDogXCJoaDptbVwiO1xuXG4gICAgaWYgKCFvcHRzLnN1cHByZXNzU2Vjb25kcyB8fCB2YWx1ZS5zZWNvbmRzICE9PSAwIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgZm10ICs9IG9wdHMuZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcInNzXCIgOiBcIjpzc1wiO1xuICAgICAgaWYgKCFvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgICBmbXQgKz0gXCIuU1NTXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN0ciA9IHZhbHVlLnRvRm9ybWF0KGZtdCk7XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlUHJlZml4KSB7XG4gICAgICBzdHIgPSBcIlRcIiArIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIGRlYnVnZ2luZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5hcyhcIm1pbGxpc2Vjb25kc1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLiBBbGlhcyBvZiB7QGxpbmsgdG9NaWxsaXN9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gbG9uZ2VyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGR1ci52YWx1ZXMsIGspIHx8IGhhc093blByb3BlcnR5KHRoaXMudmFsdWVzLCBrKSkge1xuICAgICAgICByZXN1bHRba10gPSBkdXIuZ2V0KGspICsgdGhpcy5nZXQoayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiByZXN1bHQgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIHNob3J0ZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBtaW51cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzLnBsdXMoZHVyLm5lZ2F0ZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FsZSB0aGlzIER1cmF0aW9uIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB1bml0LiBBcml0eSBpcyAxIG9yIDI6IHRoZSB2YWx1ZSBvZiB0aGUgdW5pdCBhbmQsIG9wdGlvbmFsbHksIHRoZSB1bml0IG5hbWUuIE11c3QgcmV0dXJuIGEgbnVtYmVyLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKHggPT4geCAqIDIpIC8vPT4geyBob3VyczogMiwgbWludXRlczogNjAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKCh4LCB1KSA9PiB1ID09PSBcImhvdXJcIiA/IHggKiAyIDogeCkgLy89PiB7IGhvdXJzOiAyLCBtaW51dGVzOiAzMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWFwVW5pdHMoZm4pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xuICAgICAgcmVzdWx0W2tdID0gYXNOdW1iZXIoZm4odGhpcy52YWx1ZXNba10sIGspKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiByZXN1bHQgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCd5ZWFycycpIC8vPT4gMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnbW9udGhzJykgLy89PiAwXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdkYXlzJykgLy89PiAzXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KV07XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgeWVhcnM6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IGhvdXJzOiA4LCBtaW51dGVzOiAzMCB9KVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBtaXhlZCA9IHsgLi4udGhpcy52YWx1ZXMsIC4uLm5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpIH07XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiBtaXhlZCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUgYW5kL29yIG51bWJlcmluZ1N5c3RlbS4gIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgZHVyLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgY29udmVyc2lvbkFjY3VyYWN5IH0gPSB7fSkge1xuICAgIGNvbnN0IGxvYyA9IHRoaXMubG9jLmNsb25lKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSksXG4gICAgICBvcHRzID0geyBsb2MgfTtcblxuICAgIGlmIChjb252ZXJzaW9uQWNjdXJhY3kpIHtcbiAgICAgIG9wdHMuY29udmVyc2lvbkFjY3VyYWN5ID0gY29udmVyc2lvbkFjY3VyYWN5O1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgZHVyYXRpb24gaW4gdGhlIHNwZWNpZmllZCB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGVzJyBvciAnZGF5cydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnZGF5cycpIC8vPT4gMzY1XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ21vbnRocycpIC8vPT4gMTJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7aG91cnM6IDYwfSkuYXMoJ2RheXMnKSAvLz0+IDIuNVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBhcyh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuc2hpZnRUbyh1bml0KS5nZXQodW5pdCkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmVkdWNlIHRoaXMgRHVyYXRpb24gdG8gaXRzIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBpbiBpdHMgY3VycmVudCB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMiwgbWludXRlczogLTQ1IH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMTUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIG5vcm1hbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIHZhbHMpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogdmFscyB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHNoaWZ0VG8oLi4udW5pdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1bml0cyA9IHVuaXRzLm1hcCgodSkgPT4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KSk7XG5cbiAgICBjb25zdCBidWlsdCA9IHt9LFxuICAgICAgYWNjdW11bGF0ZWQgPSB7fSxcbiAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbGV0IGxhc3RVbml0O1xuXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKHVuaXRzLmluZGV4T2YoaykgPj0gMCkge1xuICAgICAgICBsYXN0VW5pdCA9IGs7XG5cbiAgICAgICAgbGV0IG93biA9IDA7XG5cbiAgICAgICAgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XG4gICAgICAgIGZvciAoY29uc3QgYWsgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgICAgICBvd24gKz0gdGhpcy5tYXRyaXhbYWtdW2tdICogYWNjdW11bGF0ZWRbYWtdO1xuICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIHRoYXQncyBhbHJlYWR5IGluIHRoaXMgdW5pdFxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgICBvd24gKz0gdmFsc1trXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLnRydW5jKG93bik7XG4gICAgICAgIGJ1aWx0W2tdID0gaTtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSAob3duICogMTAwMCAtIGkgKiAxMDAwKSAvIDEwMDA7XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXG4gICAgICAgIGZvciAoY29uc3QgZG93biBpbiB2YWxzKSB7XG4gICAgICAgICAgaWYgKG9yZGVyZWRVbml0cy5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzLmluZGV4T2YoaykpIHtcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gdmFsc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbnl0aGluZyBsZWZ0b3ZlciBiZWNvbWVzIHRoZSBkZWNpbWFsIGZvciB0aGUgbGFzdCB1bml0XG4gICAgLy8gbGFzdFVuaXQgbXVzdCBiZSBkZWZpbmVkIHNpbmNlIHVuaXRzIGlzIG5vdCBlbXB0eVxuICAgIGZvciAoY29uc3Qga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz1cbiAgICAgICAgICBrZXkgPT09IGxhc3RVbml0ID8gYWNjdW11bGF0ZWRba2V5XSA6IGFjY3VtdWxhdGVkW2tleV0gLyB0aGlzLm1hdHJpeFtsYXN0VW5pdF1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IGJ1aWx0IH0sIHRydWUpLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmVnYXRpdmUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5uZWdhdGUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogLTEsIHNlY29uZHM6IC0zMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbmVnYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBuZWdhdGVkID0ge307XG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xuICAgICAgbmVnYXRlZFtrXSA9IC10aGlzLnZhbHVlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiBuZWdhdGVkIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhcnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgeWVhcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnllYXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBxdWFydGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMucXVhcnRlcnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtb250aHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1vbnRocyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2Vla3NcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMud2Vla3MgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheXMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuZGF5cyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG91cnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaG91cnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmhvdXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbnV0ZXMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5zZWNvbmRzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBtaWxsaXNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbGxpc2Vjb25kcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgKiBvbiBpbnZhbGlkIERhdGVUaW1lcyBvciBJbnRlcnZhbHMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcSh2MSwgdjIpIHtcbiAgICAgIC8vIENvbnNpZGVyIDAgYW5kIHVuZGVmaW5lZCBhcyBlcXVhbFxuICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQgfHwgdjEgPT09IDApIHJldHVybiB2MiA9PT0gdW5kZWZpbmVkIHx8IHYyID09PSAwO1xuICAgICAgcmV0dXJuIHYxID09PSB2MjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoIWVxKHRoaXMudmFsdWVzW3VdLCBvdGhlci52YWx1ZXNbdV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8vIHRoZXNlIGFyZW4ndCByZWFsbHkgcHJpdmF0ZSwgYnV0IG5vciBhcmUgdGhleSByZWFsbHkgdXNlZnVsIHRvIGRvY3VtZW50XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgTHV4b25FcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWREYXRlVGltZUVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIERhdGVUaW1lOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkSW50ZXJ2YWxFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcbiAgICBzdXBlcihgSW52YWxpZCBJbnRlcnZhbDogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZER1cmF0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgRHVyYXRpb246ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7fVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkVW5pdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHVuaXQpIHtcbiAgICBzdXBlcihgSW52YWxpZCB1bml0ICR7dW5pdH1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgWm9uZUlzQWJzdHJhY3RFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlpvbmUgaXMgYW4gYWJzdHJhY3QgY2xhc3NcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGludGVnZXJCZXR3ZWVuLFxuICBpc0xlYXBZZWFyLFxuICB0aW1lT2JqZWN0LFxuICBkYXlzSW5ZZWFyLFxuICBkYXlzSW5Nb250aCxcbiAgd2Vla3NJbldlZWtZZWFyLFxuICBpc0ludGVnZXIsXG59IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ludmFsaWQuanNcIjtcblxuY29uc3Qgbm9uTGVhcExhZGRlciA9IFswLCAzMSwgNTksIDkwLCAxMjAsIDE1MSwgMTgxLCAyMTIsIDI0MywgMjczLCAzMDQsIDMzNF0sXG4gIGxlYXBMYWRkZXIgPSBbMCwgMzEsIDYwLCA5MSwgMTIxLCAxNTIsIDE4MiwgMjEzLCAyNDQsIDI3NCwgMzA1LCAzMzVdO1xuXG5mdW5jdGlvbiB1bml0T3V0T2ZSYW5nZSh1bml0LCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXG4gICAgXCJ1bml0IG91dCBvZiByYW5nZVwiLFxuICAgIGB5b3Ugc3BlY2lmaWVkICR7dmFsdWV9IChvZiB0eXBlICR7dHlwZW9mIHZhbHVlfSkgYXMgYSAke3VuaXR9LCB3aGljaCBpcyBpbnZhbGlkYFxuICApO1xufVxuXG5mdW5jdGlvbiBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSkge1xuICBjb25zdCBqcyA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgZGF5KSkuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiBqcyA9PT0gMCA/IDcgOiBqcztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSB7XG4gIGNvbnN0IHRhYmxlID0gaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyLFxuICAgIG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleCgoaSkgPT4gaSA8IG9yZGluYWwpLFxuICAgIGRheSA9IG9yZGluYWwgLSB0YWJsZVttb250aDBdO1xuICByZXR1cm4geyBtb250aDogbW9udGgwICsgMSwgZGF5IH07XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZ29yaWFuVG9XZWVrKGdyZWdPYmopIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnT2JqLFxuICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSxcbiAgICB3ZWVrZGF5ID0gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gIGxldCB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSxcbiAgICB3ZWVrWWVhcjtcblxuICBpZiAod2Vla051bWJlciA8IDEpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgLSAxO1xuICAgIHdlZWtOdW1iZXIgPSB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKHdlZWtOdW1iZXIgPiB3ZWVrc0luV2Vla1llYXIoeWVhcikpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xuICAgIHdlZWtOdW1iZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIHdlZWtZZWFyID0geWVhcjtcbiAgfVxuXG4gIHJldHVybiB7IHdlZWtZZWFyLCB3ZWVrTnVtYmVyLCB3ZWVrZGF5LCAuLi50aW1lT2JqZWN0KGdyZWdPYmopIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcbiAgY29uc3QgeyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSB9ID0gd2Vla0RhdGEsXG4gICAgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCksXG4gICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuXG4gIGxldCBvcmRpbmFsID0gd2Vla051bWJlciAqIDcgKyB3ZWVrZGF5IC0gd2Vla2RheU9mSmFuNCAtIDMsXG4gICAgeWVhcjtcblxuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qod2Vla0RhdGEpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVnb3JpYW5Ub09yZGluYWwoZ3JlZ0RhdGEpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnRGF0YTtcbiAgY29uc3Qgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpO1xuICByZXR1cm4geyB5ZWFyLCBvcmRpbmFsLCAuLi50aW1lT2JqZWN0KGdyZWdEYXRhKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbFRvR3JlZ29yaWFuKG9yZGluYWxEYXRhKSB7XG4gIGNvbnN0IHsgeWVhciwgb3JkaW5hbCB9ID0gb3JkaW5hbERhdGE7XG4gIGNvbnN0IHsgbW9udGgsIGRheSB9ID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKTtcbiAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSwgLi4udGltZU9iamVjdChvcmRpbmFsRGF0YSkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRXZWVrRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai53ZWVrWWVhciksXG4gICAgdmFsaWRXZWVrID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtOdW1iZXIsIDEsIHdlZWtzSW5XZWVrWWVhcihvYmoud2Vla1llYXIpKSxcbiAgICB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrWWVhclwiLCBvYmoud2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWspIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrXCIsIG9iai53ZWVrKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrZGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla2RheVwiLCBvYmoud2Vla2RheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkT3JkaW5hbERhdGEob2JqKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksXG4gICAgdmFsaWRPcmRpbmFsID0gaW50ZWdlckJldHdlZW4ob2JqLm9yZGluYWwsIDEsIGRheXNJblllYXIob2JqLnllYXIpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE9yZGluYWwpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJvcmRpbmFsXCIsIG9iai5vcmRpbmFsKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikge1xuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpLFxuICAgIHZhbGlkTW9udGggPSBpbnRlZ2VyQmV0d2VlbihvYmoubW9udGgsIDEsIDEyKSxcbiAgICB2YWxpZERheSA9IGludGVnZXJCZXR3ZWVuKG9iai5kYXksIDEsIGRheXNJbk1vbnRoKG9iai55ZWFyLCBvYmoubW9udGgpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1vbnRoKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibW9udGhcIiwgb2JqLm1vbnRoKTtcbiAgfSBlbHNlIGlmICghdmFsaWREYXkpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJkYXlcIiwgb2JqLmRheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkVGltZURhdGEob2JqKSB7XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0gPSBvYmo7XG4gIGNvbnN0IHZhbGlkSG91ciA9XG4gICAgICBpbnRlZ2VyQmV0d2Vlbihob3VyLCAwLCAyMykgfHxcbiAgICAgIChob3VyID09PSAyNCAmJiBtaW51dGUgPT09IDAgJiYgc2Vjb25kID09PSAwICYmIG1pbGxpc2Vjb25kID09PSAwKSxcbiAgICB2YWxpZE1pbnV0ZSA9IGludGVnZXJCZXR3ZWVuKG1pbnV0ZSwgMCwgNTkpLFxuICAgIHZhbGlkU2Vjb25kID0gaW50ZWdlckJldHdlZW4oc2Vjb25kLCAwLCA1OSksXG4gICAgdmFsaWRNaWxsaXNlY29uZCA9IGludGVnZXJCZXR3ZWVuKG1pbGxpc2Vjb25kLCAwLCA5OTkpO1xuXG4gIGlmICghdmFsaWRIb3VyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiaG91clwiLCBob3VyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaW51dGUpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaW51dGVcIiwgbWludXRlKTtcbiAgfSBlbHNlIGlmICghdmFsaWRTZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaWxsaXNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi4vZHVyYXRpb24uanNcIjtcblxuZnVuY3Rpb24gZGF5RGlmZihlYXJsaWVyLCBsYXRlcikge1xuICBjb25zdCB1dGNEYXlTdGFydCA9IChkdCkgPT4gZHQudG9VVEMoMCwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pLnN0YXJ0T2YoXCJkYXlcIikudmFsdWVPZigpLFxuICAgIG1zID0gdXRjRGF5U3RhcnQobGF0ZXIpIC0gdXRjRGF5U3RhcnQoZWFybGllcik7XG4gIHJldHVybiBNYXRoLmZsb29yKER1cmF0aW9uLmZyb21NaWxsaXMobXMpLmFzKFwiZGF5c1wiKSk7XG59XG5cbmZ1bmN0aW9uIGhpZ2hPcmRlckRpZmZzKGN1cnNvciwgbGF0ZXIsIHVuaXRzKSB7XG4gIGNvbnN0IGRpZmZlcnMgPSBbXG4gICAgW1wieWVhcnNcIiwgKGEsIGIpID0+IGIueWVhciAtIGEueWVhcl0sXG4gICAgW1wicXVhcnRlcnNcIiwgKGEsIGIpID0+IGIucXVhcnRlciAtIGEucXVhcnRlcl0sXG4gICAgW1wibW9udGhzXCIsIChhLCBiKSA9PiBiLm1vbnRoIC0gYS5tb250aCArIChiLnllYXIgLSBhLnllYXIpICogMTJdLFxuICAgIFtcbiAgICAgIFwid2Vla3NcIixcbiAgICAgIChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBkYXlEaWZmKGEsIGIpO1xuICAgICAgICByZXR1cm4gKGRheXMgLSAoZGF5cyAlIDcpKSAvIDc7XG4gICAgICB9LFxuICAgIF0sXG4gICAgW1wiZGF5c1wiLCBkYXlEaWZmXSxcbiAgXTtcblxuICBjb25zdCByZXN1bHRzID0ge307XG4gIGxldCBsb3dlc3RPcmRlciwgaGlnaFdhdGVyO1xuXG4gIGZvciAoY29uc3QgW3VuaXQsIGRpZmZlcl0gb2YgZGlmZmVycykge1xuICAgIGlmICh1bml0cy5pbmRleE9mKHVuaXQpID49IDApIHtcbiAgICAgIGxvd2VzdE9yZGVyID0gdW5pdDtcblxuICAgICAgbGV0IGRlbHRhID0gZGlmZmVyKGN1cnNvciwgbGF0ZXIpO1xuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoeyBbdW5pdF06IGRlbHRhIH0pO1xuXG4gICAgICBpZiAoaGlnaFdhdGVyID4gbGF0ZXIpIHtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBsdXMoeyBbdW5pdF06IGRlbHRhIC0gMSB9KTtcbiAgICAgICAgZGVsdGEgLT0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvciA9IGhpZ2hXYXRlcjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0c1t1bml0XSA9IGRlbHRhO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgb3B0cykge1xuICBsZXQgW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl0gPSBoaWdoT3JkZXJEaWZmcyhlYXJsaWVyLCBsYXRlciwgdW5pdHMpO1xuXG4gIGNvbnN0IHJlbWFpbmluZ01pbGxpcyA9IGxhdGVyIC0gY3Vyc29yO1xuXG4gIGNvbnN0IGxvd2VyT3JkZXJVbml0cyA9IHVuaXRzLmZpbHRlcihcbiAgICAodSkgPT4gW1wiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiXS5pbmRleE9mKHUpID49IDBcbiAgKTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChoaWdoV2F0ZXIgPCBsYXRlcikge1xuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoeyBbbG93ZXN0T3JkZXJdOiAxIH0pO1xuICAgIH1cblxuICAgIGlmIChoaWdoV2F0ZXIgIT09IGN1cnNvcikge1xuICAgICAgcmVzdWx0c1tsb3dlc3RPcmRlcl0gPSAocmVzdWx0c1tsb3dlc3RPcmRlcl0gfHwgMCkgKyByZW1haW5pbmdNaWxsaXMgLyAoaGlnaFdhdGVyIC0gY3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkdXJhdGlvbiA9IER1cmF0aW9uLmZyb21PYmplY3QocmVzdWx0cywgb3B0cyk7XG5cbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMocmVtYWluaW5nTWlsbGlzLCBvcHRzKVxuICAgICAgLnNoaWZ0VG8oLi4ubG93ZXJPcmRlclVuaXRzKVxuICAgICAgLnBsdXMoZHVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxufVxuIiwiY29uc3QgbnVtYmVyaW5nU3lzdGVtcyA9IHtcbiAgYXJhYjogXCJbXFx1MDY2MC1cXHUwNjY5XVwiLFxuICBhcmFiZXh0OiBcIltcXHUwNkYwLVxcdTA2RjldXCIsXG4gIGJhbGk6IFwiW1xcdTFCNTAtXFx1MUI1OV1cIixcbiAgYmVuZzogXCJbXFx1MDlFNi1cXHUwOUVGXVwiLFxuICBkZXZhOiBcIltcXHUwOTY2LVxcdTA5NkZdXCIsXG4gIGZ1bGx3aWRlOiBcIltcXHVGRjEwLVxcdUZGMTldXCIsXG4gIGd1anI6IFwiW1xcdTBBRTYtXFx1MEFFRl1cIixcbiAgaGFuaWRlYzogXCJb44CHfOS4gHzkuox85LiJfOWbm3zkupR85YWtfOS4g3zlhat85LmdXVwiLFxuICBraG1yOiBcIltcXHUxN0UwLVxcdTE3RTldXCIsXG4gIGtuZGE6IFwiW1xcdTBDRTYtXFx1MENFRl1cIixcbiAgbGFvbzogXCJbXFx1MEVEMC1cXHUwRUQ5XVwiLFxuICBsaW1iOiBcIltcXHUxOTQ2LVxcdTE5NEZdXCIsXG4gIG1seW06IFwiW1xcdTBENjYtXFx1MEQ2Rl1cIixcbiAgbW9uZzogXCJbXFx1MTgxMC1cXHUxODE5XVwiLFxuICBteW1yOiBcIltcXHUxMDQwLVxcdTEwNDldXCIsXG4gIG9yeWE6IFwiW1xcdTBCNjYtXFx1MEI2Rl1cIixcbiAgdGFtbGRlYzogXCJbXFx1MEJFNi1cXHUwQkVGXVwiLFxuICB0ZWx1OiBcIltcXHUwQzY2LVxcdTBDNkZdXCIsXG4gIHRoYWk6IFwiW1xcdTBFNTAtXFx1MEU1OV1cIixcbiAgdGlidDogXCJbXFx1MEYyMC1cXHUwRjI5XVwiLFxuICBsYXRuOiBcIlxcXFxkXCIsXG59O1xuXG5jb25zdCBudW1iZXJpbmdTeXN0ZW1zVVRGMTYgPSB7XG4gIGFyYWI6IFsxNjMyLCAxNjQxXSxcbiAgYXJhYmV4dDogWzE3NzYsIDE3ODVdLFxuICBiYWxpOiBbNjk5MiwgNzAwMV0sXG4gIGJlbmc6IFsyNTM0LCAyNTQzXSxcbiAgZGV2YTogWzI0MDYsIDI0MTVdLFxuICBmdWxsd2lkZTogWzY1Mjk2LCA2NTMwM10sXG4gIGd1anI6IFsyNzkwLCAyNzk5XSxcbiAga2htcjogWzYxMTIsIDYxMjFdLFxuICBrbmRhOiBbMzMwMiwgMzMxMV0sXG4gIGxhb286IFszNzkyLCAzODAxXSxcbiAgbGltYjogWzY0NzAsIDY0NzldLFxuICBtbHltOiBbMzQzMCwgMzQzOV0sXG4gIG1vbmc6IFs2MTYwLCA2MTY5XSxcbiAgbXltcjogWzQxNjAsIDQxNjldLFxuICBvcnlhOiBbMjkxOCwgMjkyN10sXG4gIHRhbWxkZWM6IFszMDQ2LCAzMDU1XSxcbiAgdGVsdTogWzMxNzQsIDMxODNdLFxuICB0aGFpOiBbMzY2NCwgMzY3M10sXG4gIHRpYnQ6IFszODcyLCAzODgxXSxcbn07XG5cbmNvbnN0IGhhbmlkZWNDaGFycyA9IG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYy5yZXBsYWNlKC9bXFxbfFxcXV0vZywgXCJcIikuc3BsaXQoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURpZ2l0cyhzdHIpIHtcbiAgbGV0IHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKHN0cltpXS5zZWFyY2gobnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgKz0gaGFuaWRlY0NoYXJzLmluZGV4T2Yoc3RyW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG51bWJlcmluZ1N5c3RlbXNVVEYxNikge1xuICAgICAgICAgIGNvbnN0IFttaW4sIG1heF0gPSBudW1iZXJpbmdTeXN0ZW1zVVRGMTZba2V5XTtcbiAgICAgICAgICBpZiAoY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXgpIHtcbiAgICAgICAgICAgIHZhbHVlICs9IGNvZGUgLSBtaW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlnaXRSZWdleCh7IG51bWJlcmluZ1N5c3RlbSB9LCBhcHBlbmQgPSBcIlwiKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKGAke251bWJlcmluZ1N5c3RlbXNbbnVtYmVyaW5nU3lzdGVtIHx8IFwibGF0blwiXX0ke2FwcGVuZH1gKTtcbn1cbiIsImltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSBcIi4vZm9ybWF0cy5qc1wiO1xuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuL3V0aWwuanNcIjtcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBPYmplY3Qua2V5cyhvYmopLnNvcnQoKSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgY29uc3QgbW9udGhzTG9uZyA9IFtcbiAgXCJKYW51YXJ5XCIsXG4gIFwiRmVicnVhcnlcIixcbiAgXCJNYXJjaFwiLFxuICBcIkFwcmlsXCIsXG4gIFwiTWF5XCIsXG4gIFwiSnVuZVwiLFxuICBcIkp1bHlcIixcbiAgXCJBdWd1c3RcIixcbiAgXCJTZXB0ZW1iZXJcIixcbiAgXCJPY3RvYmVyXCIsXG4gIFwiTm92ZW1iZXJcIixcbiAgXCJEZWNlbWJlclwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IG1vbnRoc1Nob3J0ID0gW1xuICBcIkphblwiLFxuICBcIkZlYlwiLFxuICBcIk1hclwiLFxuICBcIkFwclwiLFxuICBcIk1heVwiLFxuICBcIkp1blwiLFxuICBcIkp1bFwiLFxuICBcIkF1Z1wiLFxuICBcIlNlcFwiLFxuICBcIk9jdFwiLFxuICBcIk5vdlwiLFxuICBcIkRlY1wiLFxuXTtcblxuZXhwb3J0IGNvbnN0IG1vbnRoc05hcnJvdyA9IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRocyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gWy4uLm1vbnRoc05hcnJvd107XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gWy4uLm1vbnRoc1Nob3J0XTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNMb25nXTtcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBjYXNlIFwiMi1kaWdpdFwiOlxuICAgICAgcmV0dXJuIFtcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIiwgXCIwOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzTG9uZyA9IFtcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiLFxuICBcIlN1bmRheVwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzU2hvcnQgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG5cbmV4cG9ydCBjb25zdCB3ZWVrZGF5c05hcnJvdyA9IFtcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiLCBcIlNcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNMb25nXTtcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXJpZGllbXMgPSBbXCJBTVwiLCBcIlBNXCJdO1xuXG5leHBvcnQgY29uc3QgZXJhc0xvbmcgPSBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzU2hvcnQgPSBbXCJCQ1wiLCBcIkFEXCJdO1xuXG5leHBvcnQgY29uc3QgZXJhc05hcnJvdyA9IFtcIkJcIiwgXCJBXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gZXJhcyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gWy4uLmVyYXNOYXJyb3ddO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzU2hvcnRdO1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gWy4uLmVyYXNMb25nXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIHtcbiAgcmV0dXJuIG1lcmlkaWVtc1tkdC5ob3VyIDwgMTIgPyAwIDogMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gd2Vla2RheXMobGVuZ3RoKVtkdC53ZWVrZGF5IC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG1vbnRocyhsZW5ndGgpW2R0Lm1vbnRoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBlcmFzKGxlbmd0aClbZHQueWVhciA8IDAgPyAwIDogMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIG51bWVyaWMgPSBcImFsd2F5c1wiLCBuYXJyb3cgPSBmYWxzZSkge1xuICBjb25zdCB1bml0cyA9IHtcbiAgICB5ZWFyczogW1wieWVhclwiLCBcInlyLlwiXSxcbiAgICBxdWFydGVyczogW1wicXVhcnRlclwiLCBcInF0ci5cIl0sXG4gICAgbW9udGhzOiBbXCJtb250aFwiLCBcIm1vLlwiXSxcbiAgICB3ZWVrczogW1wid2Vla1wiLCBcIndrLlwiXSxcbiAgICBkYXlzOiBbXCJkYXlcIiwgXCJkYXlcIiwgXCJkYXlzXCJdLFxuICAgIGhvdXJzOiBbXCJob3VyXCIsIFwiaHIuXCJdLFxuICAgIG1pbnV0ZXM6IFtcIm1pbnV0ZVwiLCBcIm1pbi5cIl0sXG4gICAgc2Vjb25kczogW1wic2Vjb25kXCIsIFwic2VjLlwiXSxcbiAgfTtcblxuICBjb25zdCBsYXN0YWJsZSA9IFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIl0uaW5kZXhPZih1bml0KSA9PT0gLTE7XG5cbiAgaWYgKG51bWVyaWMgPT09IFwiYXV0b1wiICYmIGxhc3RhYmxlKSB7XG4gICAgY29uc3QgaXNEYXkgPSB1bml0ID09PSBcImRheXNcIjtcbiAgICBzd2l0Y2ggKGNvdW50KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9tb3Jyb3dcIiA6IGBuZXh0ICR7dW5pdHNbdW5pdF1bMF19YDtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwieWVzdGVyZGF5XCIgOiBgbGFzdCAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9kYXlcIiA6IGB0aGlzICR7dW5pdHNbdW5pdF1bMF19YDtcbiAgICAgIGRlZmF1bHQ6IC8vIGZhbGwgdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlzSW5QYXN0ID0gT2JqZWN0LmlzKGNvdW50LCAtMCkgfHwgY291bnQgPCAwLFxuICAgIGZtdFZhbHVlID0gTWF0aC5hYnMoY291bnQpLFxuICAgIHNpbmd1bGFyID0gZm10VmFsdWUgPT09IDEsXG4gICAgbGlsVW5pdHMgPSB1bml0c1t1bml0XSxcbiAgICBmbXRVbml0ID0gbmFycm93XG4gICAgICA/IHNpbmd1bGFyXG4gICAgICAgID8gbGlsVW5pdHNbMV1cbiAgICAgICAgOiBsaWxVbml0c1syXSB8fCBsaWxVbml0c1sxXVxuICAgICAgOiBzaW5ndWxhclxuICAgICAgPyB1bml0c1t1bml0XVswXVxuICAgICAgOiB1bml0O1xuICByZXR1cm4gaXNJblBhc3QgPyBgJHtmbXRWYWx1ZX0gJHtmbXRVbml0fSBhZ29gIDogYGluICR7Zm10VmFsdWV9ICR7Zm10VW5pdH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nKGtub3duRm9ybWF0KSB7XG4gIC8vIHRoZXNlIGFsbCBoYXZlIHRoZSBvZmZzZXRzIHJlbW92ZWQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGVtXG4gIC8vIHdpdGhvdXQgYWxsIHRoZSBpbnRsIHN0dWZmIHRoaXMgaXMgYmFja2ZpbGxpbmdcbiAgY29uc3QgZmlsdGVyZWQgPSBwaWNrKGtub3duRm9ybWF0LCBbXG4gICAgICBcIndlZWtkYXlcIixcbiAgICAgIFwiZXJhXCIsXG4gICAgICBcInllYXJcIixcbiAgICAgIFwibW9udGhcIixcbiAgICAgIFwiZGF5XCIsXG4gICAgICBcImhvdXJcIixcbiAgICAgIFwibWludXRlXCIsXG4gICAgICBcInNlY29uZFwiLFxuICAgICAgXCJ0aW1lWm9uZU5hbWVcIixcbiAgICAgIFwiaG91ckN5Y2xlXCIsXG4gICAgXSksXG4gICAga2V5ID0gc3RyaW5naWZ5KGZpbHRlcmVkKSxcbiAgICBkYXRlVGltZUh1Z2UgPSBcIkVFRUUsIExMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX1NIT1JUKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX01FRCk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9NRURfV0lUSF9XRUVLREFZKTpcbiAgICAgIHJldHVybiBcIkVFRSwgTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfRlVMTCk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfSFVHRSk6XG4gICAgICByZXR1cm4gXCJFRUVFLCBMTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfU0lNUExFKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1dJVEhfU0hPUlRfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX0xPTkdfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9TSU1QTEUpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkhIOm1tOnNzXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX1NIT1JUKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX01FRCk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9GVUxMKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9IVUdFKTpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKTpcbiAgICAgIHJldHVybiBcIkVFRSwgZCBMTEwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiRUVFRSwgTExMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG4gPSBcIm51bWVyaWNcIixcbiAgcyA9IFwic2hvcnRcIixcbiAgbCA9IFwibG9uZ1wiO1xuXG5leHBvcnQgY29uc3QgREFURV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9NRUQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBzLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuIiwiaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlUb2tlbnMoc3BsaXRzLCB0b2tlblRvU3RyaW5nKSB7XG4gIGxldCBzID0gXCJcIjtcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBzcGxpdHMpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcyArPSB0b2tlbi52YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcztcbn1cblxuY29uc3QgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcbiAgRDogRm9ybWF0cy5EQVRFX1NIT1JULFxuICBERDogRm9ybWF0cy5EQVRFX01FRCxcbiAgREREOiBGb3JtYXRzLkRBVEVfRlVMTCxcbiAgRERERDogRm9ybWF0cy5EQVRFX0hVR0UsXG4gIHQ6IEZvcm1hdHMuVElNRV9TSU1QTEUsXG4gIHR0OiBGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcbiAgdHR0dDogRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQsXG4gIFQ6IEZvcm1hdHMuVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTLFxuICBUVFQ6IEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCxcbiAgVFRUVDogRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IEZvcm1hdHMuREFURVRJTUVfU0hPUlQsXG4gIGZmOiBGb3JtYXRzLkRBVEVUSU1FX01FRCxcbiAgZmZmOiBGb3JtYXRzLkRBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IEZvcm1hdHMuREFURVRJTUVfSFVHRSxcbiAgRjogRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMsXG4gIEZGOiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcbiAgRkZGRjogRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyxcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtYXR0ZXIge1xuICBzdGF0aWMgY3JlYXRlKGxvY2FsZSwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtYXR0ZXIobG9jYWxlLCBvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUZvcm1hdChmbXQpIHtcbiAgICBsZXQgY3VycmVudCA9IG51bGwsXG4gICAgICBjdXJyZW50RnVsbCA9IFwiXCIsXG4gICAgICBicmFja2V0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBzcGxpdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZtdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYyA9IGZtdC5jaGFyQXQoaSk7XG4gICAgICBpZiAoYyA9PT0gXCInXCIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGJyYWNrZXRlZCwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gbnVsbDtcbiAgICAgICAgY3VycmVudEZ1bGwgPSBcIlwiO1xuICAgICAgICBicmFja2V0ZWQgPSAhYnJhY2tldGVkO1xuICAgICAgfSBlbHNlIGlmIChicmFja2V0ZWQpIHtcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gY3VycmVudCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGZhbHNlLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRGdWxsID0gYztcbiAgICAgICAgY3VycmVudCA9IGM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcbiAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogYnJhY2tldGVkLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdHM7XG4gIH1cblxuICBzdGF0aWMgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbikge1xuICAgIHJldHVybiBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzW3Rva2VuXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGxvY2FsZSwgZm9ybWF0T3B0cykge1xuICAgIHRoaXMub3B0cyA9IGZvcm1hdE9wdHM7XG4gICAgdGhpcy5sb2MgPSBsb2NhbGU7XG4gICAgdGhpcy5zeXN0ZW1Mb2MgPSBudWxsO1xuICB9XG5cbiAgZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIG9wdHMpIHtcbiAgICBpZiAodGhpcy5zeXN0ZW1Mb2MgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3lzdGVtTG9jID0gdGhpcy5sb2MucmVkZWZhdWx0VG9TeXN0ZW0oKTtcbiAgICB9XG4gICAgY29uc3QgZGYgPSB0aGlzLnN5c3RlbUxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdCgpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWUoZHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lUGFydHMoZHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICAgIHJldHVybiBkZi5mb3JtYXRUb1BhcnRzKCk7XG4gIH1cblxuICByZXNvbHZlZE9wdGlvbnMoZHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICAgIHJldHVybiBkZi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfVxuXG4gIG51bShuLCBwID0gMCkge1xuICAgIC8vIHdlIGdldCBzb21lIHBlcmYgb3V0IG9mIGRvaW5nIHRoaXMgaGVyZSwgYW5ub3lpbmdseVxuICAgIGlmICh0aGlzLm9wdHMuZm9yY2VTaW1wbGUpIHtcbiAgICAgIHJldHVybiBwYWRTdGFydChuLCBwKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0geyAuLi50aGlzLm9wdHMgfTtcblxuICAgIGlmIChwID4gMCkge1xuICAgICAgb3B0cy5wYWRUbyA9IHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9jLm51bWJlckZvcm1hdHRlcihvcHRzKS5mb3JtYXQobik7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZtdCkge1xuICAgIGNvbnN0IGtub3duRW5nbGlzaCA9IHRoaXMubG9jLmxpc3RpbmdNb2RlKCkgPT09IFwiZW5cIixcbiAgICAgIHVzZURhdGVUaW1lRm9ybWF0dGVyID0gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgJiYgdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgIT09IFwiZ3JlZ29yeVwiLFxuICAgICAgc3RyaW5nID0gKG9wdHMsIGV4dHJhY3QpID0+IHRoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpLFxuICAgICAgZm9ybWF0T2Zmc2V0ID0gKG9wdHMpID0+IHtcbiAgICAgICAgaWYgKGR0LmlzT2Zmc2V0Rml4ZWQgJiYgZHQub2Zmc2V0ID09PSAwICYmIG9wdHMuYWxsb3daKSB7XG4gICAgICAgICAgcmV0dXJuIFwiWlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGR0LmlzVmFsaWQgPyBkdC56b25lLmZvcm1hdE9mZnNldChkdC50cywgb3B0cy5mb3JtYXQpIDogXCJcIjtcbiAgICAgIH0sXG4gICAgICBtZXJpZGllbSA9ICgpID0+XG4gICAgICAgIGtub3duRW5nbGlzaFxuICAgICAgICAgID8gRW5nbGlzaC5tZXJpZGllbUZvckRhdGVUaW1lKGR0KVxuICAgICAgICAgIDogc3RyaW5nKHsgaG91cjogXCJudW1lcmljXCIsIGhvdXJDeWNsZTogXCJoMTJcIiB9LCBcImRheXBlcmlvZFwiKSxcbiAgICAgIG1vbnRoID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBFbmdsaXNoLm1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aClcbiAgICAgICAgICA6IHN0cmluZyhzdGFuZGFsb25lID8geyBtb250aDogbGVuZ3RoIH0gOiB7IG1vbnRoOiBsZW5ndGgsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKSxcbiAgICAgIHdlZWtkYXkgPSAobGVuZ3RoLCBzdGFuZGFsb25lKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2hcbiAgICAgICAgICA/IEVuZ2xpc2gud2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXG4gICAgICAgICAgOiBzdHJpbmcoXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmUgPyB7IHdlZWtkYXk6IGxlbmd0aCB9IDogeyB3ZWVrZGF5OiBsZW5ndGgsIG1vbnRoOiBcImxvbmdcIiwgZGF5OiBcIm51bWVyaWNcIiB9LFxuICAgICAgICAgICAgICBcIndlZWtkYXlcIlxuICAgICAgICAgICAgKSxcbiAgICAgIG1heWJlTWFjcm8gPSAodG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKTtcbiAgICAgICAgaWYgKGZvcm1hdE9wdHMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgZm9ybWF0T3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJhID0gKGxlbmd0aCkgPT5cbiAgICAgICAga25vd25FbmdsaXNoID8gRW5nbGlzaC5lcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyh7IGVyYTogbGVuZ3RoIH0sIFwiZXJhXCIpLFxuICAgICAgdG9rZW5Ub1N0cmluZyA9ICh0b2tlbikgPT4ge1xuICAgICAgICAvLyBXaGVyZSBwb3NzaWJsZTogaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lLTEvZGF0ZS10aW1lI1RPQy1TdGFuZGFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAvLyBtc1xuICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQpO1xuICAgICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taWxsaXNlY29uZCwgMyk7XG4gICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5zZWNvbmQsIDIpO1xuICAgICAgICAgIC8vIGZyYWN0aW9uYWwgc2Vjb25kc1xuICAgICAgICAgIGNhc2UgXCJ1dVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQubWlsbGlzZWNvbmQgLyAxMCksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ1dXVcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTAwKSk7XG4gICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlKTtcbiAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taW51dGUsIDIpO1xuICAgICAgICAgIC8vIGhvdXJzXG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMik7XG4gICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91cik7XG4gICAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciwgMik7XG4gICAgICAgICAgLy8gb2Zmc2V0XG4gICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzZcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6IFwibmFycm93XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzA2OjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInNob3J0XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICswNjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInRlY2hpZVwiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJzaG9ydFwiLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJsb25nXCIsIGxvY2FsZTogdGhpcy5sb2MubG9jYWxlIH0pO1xuICAgICAgICAgIC8vIHpvbmVcbiAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZU5hbWU7XG4gICAgICAgICAgLy8gbWVyaWRpZW1zXG4gICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xuICAgICAgICAgIC8vIGRhdGVzXG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogXCJudW1lcmljXCIgfSwgXCJkYXlcIikgOiB0aGlzLm51bShkdC5kYXkpO1xuICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgZGF5OiBcIjItZGlnaXRcIiB9LCBcImRheVwiKSA6IHRoaXMubnVtKGR0LmRheSwgMik7XG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gZm9ybWF0XG4gICAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIHN0YW5kYWxvbmVcbiAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCJudW1lcmljXCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDEsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoLCAyKTtcbiAgICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphblxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgpO1xuICAgICAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwiMi1kaWdpdFwiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyB5ZWFyc1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDIwMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKSA6IHRoaXMubnVtKGR0LnllYXIpO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxNFxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCIyLWRpZ2l0XCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAxMlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCJudW1lcmljXCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAgIC8vIGVyYXNcbiAgICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBRFxuICAgICAgICAgICAgcmV0dXJuIGVyYShcInNob3J0XCIpO1xuICAgICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxuICAgICAgICAgICAgcmV0dXJuIGVyYShcImxvbmdcIik7XG4gICAgICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgICAgICByZXR1cm4gZXJhKFwibmFycm93XCIpO1xuICAgICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLCA0KTtcbiAgICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuICAgICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQub3JkaW5hbCk7XG4gICAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xuICAgICAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyKTtcbiAgICAgICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyLCAyKTtcbiAgICAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQudHMgLyAxMDAwKSk7XG4gICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC50cyk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBtYXliZU1hY3JvKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksIHRva2VuVG9TdHJpbmcpO1xuICB9XG5cbiAgZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKGR1ciwgZm10KSB7XG4gICAgY29uc3QgdG9rZW5Ub0ZpZWxkID0gKHRva2VuKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG4gICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJob3VyXCI7XG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtb250aFwiO1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5Ub1N0cmluZyA9IChsaWxkdXIpID0+ICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xuICAgICAgICBpZiAobWFwcGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKFxuICAgICAgICAoZm91bmQsIHsgbGl0ZXJhbCwgdmFsIH0pID0+IChsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKSksXG4gICAgICAgIFtdXG4gICAgICApLFxuICAgICAgY29sbGFwc2VkID0gZHVyLnNoaWZ0VG8oLi4ucmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIoKHQpID0+IHQpKTtcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZCB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLmV4cGxhbmF0aW9uID0gZXhwbGFuYXRpb247XG4gIH1cblxuICB0b01lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGFuYXRpb24pIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnJlYXNvbn06ICR7dGhpcy5leHBsYW5hdGlvbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBwYWRTdGFydCwgcm91bmRUbywgaGFzUmVsYXRpdmUgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgKiBhcyBFbmdsaXNoIGZyb20gXCIuL2VuZ2xpc2guanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcblxuLy8gdG9kbyAtIHJlbWFwIGNhY2hpbmdcblxubGV0IGludGxMRkNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRMRihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIGxldCBkdGYgPSBpbnRsTEZDYWNoZVtrZXldO1xuICBpZiAoIWR0Zikge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkxpc3RGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTEZDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG5cbmxldCBpbnRsRFRDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkRFRGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGR0ZiA9IGludGxEVENhY2hlW2tleV07XG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsRFRDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG5cbmxldCBpbnRsTnVtQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZElORihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIGxldCBpbmYgPSBpbnRsTnVtQ2FjaGVba2V5XTtcbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTnVtQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxuXG5sZXQgaW50bFJlbENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3QgeyBiYXNlLCAuLi5jYWNoZUtleU9wdHMgfSA9IG9wdHM7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgY2FjaGVLZXlPcHRzXSk7XG4gIGxldCBpbmYgPSBpbnRsUmVsQ2FjaGVba2V5XTtcbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsUmVsQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxuXG5sZXQgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuZnVuY3Rpb24gc3lzdGVtTG9jYWxlKCkge1xuICBpZiAoc3lzTG9jYWxlQ2FjaGUpIHtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlU3RyKSB7XG4gIC8vIEkgcmVhbGx5IHdhbnQgdG8gYXZvaWQgd3JpdGluZyBhIEJDUCA0NyBwYXJzZXJcbiAgLy8gc2VlLCBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vYmNwLTQ3XG4gIC8vIEluc3RlYWQsIHdlJ2xsIGRvIHRoaXM6XG5cbiAgLy8gYSkgaWYgdGhlIHN0cmluZyBoYXMgbm8gLXUgZXh0ZW5zaW9ucywganVzdCBsZWF2ZSBpdCBhbG9uZVxuICAvLyBiKSBpZiBpdCBkb2VzLCB1c2UgSW50bCB0byByZXNvbHZlIGV2ZXJ5dGhpbmdcbiAgLy8gYykgaWYgSW50bCBmYWlscywgdHJ5IGFnYWluIHdpdGhvdXQgdGhlIC11XG5cbiAgY29uc3QgdUluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCItdS1cIik7XG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIGxldCBvcHRpb25zO1xuICAgIGNvbnN0IHNtYWxsZXIgPSBsb2NhbGVTdHIuc3Vic3RyaW5nKDAsIHVJbmRleCk7XG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gb3B0aW9ucztcbiAgICAvLyByZXR1cm4gdGhlIHNtYWxsZXIgb25lIHNvIHRoYXQgd2UgY2FuIGFwcGVuZCB0aGUgY2FsZW5kYXIgYW5kIG51bWJlcmluZyBvdmVycmlkZXMgdG8gaXRcbiAgICByZXR1cm4gW3NtYWxsZXIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChvdXRwdXRDYWxlbmRhciB8fCBudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBsb2NhbGVTdHIgKz0gXCItdVwiO1xuXG4gICAgaWYgKG91dHB1dENhbGVuZGFyKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gYC1jYS0ke291dHB1dENhbGVuZGFyfWA7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgbG9jYWxlU3RyICs9IGAtbnUtJHtudW1iZXJpbmdTeXN0ZW19YDtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jYWxlU3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcE1vbnRocyhmKSB7XG4gIGNvbnN0IG1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIG1hcFdlZWtkYXlzKGYpIHtcbiAgY29uc3QgbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgY29uc3QgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBsaXN0U3R1ZmYobG9jLCBsZW5ndGgsIGRlZmF1bHRPSywgZW5nbGlzaEZuLCBpbnRsRm4pIHtcbiAgY29uc3QgbW9kZSA9IGxvYy5saXN0aW5nTW9kZShkZWZhdWx0T0spO1xuXG4gIGlmIChtb2RlID09PSBcImVycm9yXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBsb2MubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIiB8fFxuICAgICAgIWxvYy5sb2NhbGUgfHxcbiAgICAgIGxvYy5sb2NhbGUuc3RhcnRzV2l0aChcImVuXCIpIHx8XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2MuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIlxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIFBvbHlOdW1iZXJGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykge1xuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XG4gICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7XG5cbiAgICBjb25zdCB7IHBhZFRvLCBmbG9vciwgLi4ub3RoZXJPcHRzIH0gPSBvcHRzO1xuXG4gICAgaWYgKCFmb3JjZVNpbXBsZSB8fCBPYmplY3Qua2V5cyhvdGhlck9wdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGludGxPcHRzID0geyB1c2VHcm91cGluZzogZmFsc2UsIC4uLm9wdHMgfTtcbiAgICAgIGlmIChvcHRzLnBhZFRvID4gMCkgaW50bE9wdHMubWluaW11bUludGVnZXJEaWdpdHMgPSBvcHRzLnBhZFRvO1xuICAgICAgdGhpcy5pbmYgPSBnZXRDYWNoZWRJTkYoaW50bCwgaW50bE9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdChpKSB7XG4gICAgaWYgKHRoaXMuaW5mKSB7XG4gICAgICBjb25zdCBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogaTtcbiAgICAgIHJldHVybiB0aGlzLmluZi5mb3JtYXQoZml4ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0byBtYXRjaCB0aGUgYnJvd3NlcidzIG51bWJlcmZvcm1hdHRlciBkZWZhdWx0c1xuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XG4gICAgICByZXR1cm4gcGFkU3RhcnQoZml4ZWQsIHRoaXMucGFkVG8pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY2xhc3MgUG9seURhdGVGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkdCwgaW50bCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG5cbiAgICBsZXQgejtcbiAgICBpZiAoZHQuem9uZS5pc1VuaXZlcnNhbCkge1xuICAgICAgLy8gVVRDLTggb3IgRXRjL1VUQy04IGFyZSBub3QgcGFydCBvZiB0emRhdGEsIG9ubHkgRXRjL0dNVCs4IGFuZCB0aGUgbGlrZS5cbiAgICAgIC8vIFRoYXQgaXMgd2h5IGZpeGVkLW9mZnNldCBUWiBpcyBzZXQgdG8gdGhhdCB1bmxlc3MgaXQgaXM6XG4gICAgICAvLyAxLiBSZXByZXNlbnRpbmcgb2Zmc2V0IDAgd2hlbiBVVEMgaXMgdXNlZCB0byBtYWludGFpbiBwcmV2aW91cyBiZWhhdmlvciBhbmQgZG9lcyBub3QgYmVjb21lIEdNVC5cbiAgICAgIC8vIDIuIFVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOlxuICAgICAgLy8gICAgLSBzb21lIGRvIG5vdCBzdXBwb3J0IEV0Yy9cbiAgICAgIC8vICAgIC0gPCBFdGMvR01ULTE0LCA+IEV0Yy9HTVQrMTIsIGFuZCAzMC1taW51dGUgb3IgNDUtbWludXRlIG9mZnNldHMgYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YVxuICAgICAgY29uc3QgZ210T2Zmc2V0ID0gLTEgKiAoZHQub2Zmc2V0IC8gNjApO1xuICAgICAgY29uc3Qgb2Zmc2V0WiA9IGdtdE9mZnNldCA+PSAwID8gYEV0Yy9HTVQrJHtnbXRPZmZzZXR9YCA6IGBFdGMvR01UJHtnbXRPZmZzZXR9YDtcbiAgICAgIGlmIChkdC5vZmZzZXQgIT09IDAgJiYgSUFOQVpvbmUuY3JlYXRlKG9mZnNldFopLnZhbGlkKSB7XG4gICAgICAgIHogPSBvZmZzZXRaO1xuICAgICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3QgYWxsIGZpeGVkLW9mZnNldCB6b25lcyBsaWtlIEV0Yy8rNDozMCBhcmUgcHJlc2VudCBpbiB0emRhdGEuXG4gICAgICAgIC8vIFNvIHdlIGhhdmUgdG8gbWFrZSBkby4gVHdvIGNhc2VzOlxuICAgICAgICAvLyAxLiBUaGUgZm9ybWF0IG9wdGlvbnMgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBXZSBjYW4ndCBkbyB0aGF0LCBzbyB0aGUgYmVzdFxuICAgICAgICAvLyB3ZSBjYW4gZG8gaXMgZm9ybWF0IHRoZSBkYXRlIGluIFVUQy5cbiAgICAgICAgLy8gMi4gVGhlIGZvcm1hdCBvcHRpb25zIGRvbid0IHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gVGhlbiB3ZSBjYW4gYWRqdXN0IHRoZW1cbiAgICAgICAgLy8gdGhlIHRpbWUgYW5kIHRlbGwgdGhlIGZvcm1hdHRlciB0byBzaG93IGl0IHRvIHVzIGluIFVUQywgc28gdGhhdCB0aGUgdGltZSBpcyByaWdodFxuICAgICAgICAvLyBhbmQgdGhlIGJhZCB6b25lIGRvZXNuJ3Qgc2hvdyB1cC5cbiAgICAgICAgeiA9IFwiVVRDXCI7XG4gICAgICAgIGlmIChvcHRzLnRpbWVab25lTmFtZSkge1xuICAgICAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmR0ID0gZHQub2Zmc2V0ID09PSAwID8gZHQgOiBEYXRlVGltZS5mcm9tTWlsbGlzKGR0LnRzICsgZHQub2Zmc2V0ICogNjAgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZHQuem9uZS50eXBlID09PSBcInN5c3RlbVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIHogPSBkdC56b25lLm5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgaW50bE9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xuICAgIGlmICh6KSB7XG4gICAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHo7XG4gICAgfVxuICAgIHRoaXMuZHRmID0gZ2V0Q2FjaGVkRFRGKGludGwsIGludGxPcHRzKTtcbiAgfVxuXG4gIGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0KHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH1cblxuICBmb3JtYXRUb1BhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXRUb1BhcnRzKHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH1cblxuICByZXNvbHZlZE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUG9seVJlbEZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKGludGwsIGlzRW5nbGlzaCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IHsgc3R5bGU6IFwibG9uZ1wiLCAuLi5vcHRzIH07XG4gICAgaWYgKCFpc0VuZ2xpc2ggJiYgaGFzUmVsYXRpdmUoKSkge1xuICAgICAgdGhpcy5ydGYgPSBnZXRDYWNoZWRSVEYoaW50bCwgb3B0cyk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0KGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVuZ2xpc2guZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCB0aGlzLm9wdHMubnVtZXJpYywgdGhpcy5vcHRzLnN0eWxlICE9PSBcImxvbmdcIik7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCkge1xuICAgIGlmICh0aGlzLnJ0Zikge1xuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGUge1xuICBzdGF0aWMgZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciwgZGVmYXVsdFRvRU4gPSBmYWxzZSkge1xuICAgIGNvbnN0IHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlO1xuICAgIC8vIHRoZSBzeXN0ZW0gbG9jYWxlIGlzIHVzZWZ1bCBmb3IgaHVtYW4gcmVhZGFibGUgc3RyaW5ncyBidXQgYW5ub3lpbmcgZm9yIHBhcnNpbmcvZm9ybWF0dGluZyBrbm93biBmb3JtYXRzXG4gICAgY29uc3QgbG9jYWxlUiA9IHNwZWNpZmllZExvY2FsZSB8fCAoZGVmYXVsdFRvRU4gPyBcImVuLVVTXCIgOiBzeXN0ZW1Mb2NhbGUoKSk7XG4gICAgY29uc3QgbnVtYmVyaW5nU3lzdGVtUiA9IG51bWJlcmluZ1N5c3RlbSB8fCBTZXR0aW5ncy5kZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICAgIGNvbnN0IG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gbmV3IExvY2FsZShsb2NhbGVSLCBudW1iZXJpbmdTeXN0ZW1SLCBvdXRwdXRDYWxlbmRhclIsIHNwZWNpZmllZExvY2FsZSk7XG4gIH1cblxuICBzdGF0aWMgcmVzZXRDYWNoZSgpIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XG4gICAgaW50bERUQ2FjaGUgPSB7fTtcbiAgICBpbnRsTnVtQ2FjaGUgPSB7fTtcbiAgICBpbnRsUmVsQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIG51bWJlcmluZywgb3V0cHV0Q2FsZW5kYXIsIHNwZWNpZmllZExvY2FsZSkge1xuICAgIGNvbnN0IFtwYXJzZWRMb2NhbGUsIHBhcnNlZE51bWJlcmluZ1N5c3RlbSwgcGFyc2VkT3V0cHV0Q2FsZW5kYXJdID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKTtcblxuICAgIHRoaXMubG9jYWxlID0gcGFyc2VkTG9jYWxlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nIHx8IHBhcnNlZE51bWJlcmluZ1N5c3RlbSB8fCBudWxsO1xuICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhciB8fCBwYXJzZWRPdXRwdXRDYWxlbmRhciB8fCBudWxsO1xuICAgIHRoaXMuaW50bCA9IGludGxDb25maWdTdHJpbmcodGhpcy5sb2NhbGUsIHRoaXMubnVtYmVyaW5nU3lzdGVtLCB0aGlzLm91dHB1dENhbGVuZGFyKTtcblxuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1vbnRoc0NhY2hlID0geyBmb3JtYXQ6IHt9LCBzdGFuZGFsb25lOiB7fSB9O1xuICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IG51bGw7XG4gICAgdGhpcy5lcmFDYWNoZSA9IHt9O1xuXG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XG4gIH1cblxuICBnZXQgZmFzdE51bWJlcnMoKSB7XG4gICAgaWYgKHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQ7XG4gIH1cblxuICBsaXN0aW5nTW9kZSgpIHtcbiAgICBjb25zdCBpc0FjdHVhbGx5RW4gPSB0aGlzLmlzRW5nbGlzaCgpO1xuICAgIGNvbnN0IGhhc05vV2VpcmRuZXNzID1cbiAgICAgICh0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gbnVsbCB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIpICYmXG4gICAgICAodGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gbnVsbCB8fCB0aGlzLm91dHB1dENhbGVuZGFyID09PSBcImdyZWdvcnlcIik7XG4gICAgcmV0dXJuIGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcyA/IFwiZW5cIiA6IFwiaW50bFwiO1xuICB9XG5cbiAgY2xvbmUoYWx0cykge1xuICAgIGlmICghYWx0cyB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhbHRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShcbiAgICAgICAgYWx0cy5sb2NhbGUgfHwgdGhpcy5zcGVjaWZpZWRMb2NhbGUsXG4gICAgICAgIGFsdHMubnVtYmVyaW5nU3lzdGVtIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBhbHRzLm91dHB1dENhbGVuZGFyIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIsXG4gICAgICAgIGFsdHMuZGVmYXVsdFRvRU4gfHwgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVkZWZhdWx0VG9FTihhbHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7IC4uLmFsdHMsIGRlZmF1bHRUb0VOOiB0cnVlIH0pO1xuICB9XG5cbiAgcmVkZWZhdWx0VG9TeXN0ZW0oYWx0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogZmFsc2UgfSk7XG4gIH1cblxuICBtb250aHMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIEVuZ2xpc2gubW9udGhzLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnRsID0gZm9ybWF0ID8geyBtb250aDogbGVuZ3RoLCBkYXk6IFwibnVtZXJpY1wiIH0gOiB7IG1vbnRoOiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcE1vbnRocygoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJtb250aFwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XG4gICAgfSk7XG4gIH1cblxuICB3ZWVrZGF5cyhsZW5ndGgsIGZvcm1hdCA9IGZhbHNlLCBkZWZhdWx0T0sgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgRW5nbGlzaC53ZWVrZGF5cywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdFxuICAgICAgICAgID8geyB3ZWVrZGF5OiBsZW5ndGgsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfVxuICAgICAgICAgIDogeyB3ZWVrZGF5OiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cygoZHQpID0+XG4gICAgICAgICAgdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcIndlZWtkYXlcIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyaWRpZW1zKGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKFxuICAgICAgdGhpcyxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIGRlZmF1bHRPSyxcbiAgICAgICgpID0+IEVuZ2xpc2gubWVyaWRpZW1zLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBJbiB0aGVvcnkgdGhlcmUgY291bGQgYmUgYXJpYml0cmFyeSBkYXkgcGVyaW9kcy4gV2UncmUgZ29ubmEgYXNzdW1lIHRoZXJlIGFyZSBleGFjdGx5IHR3b1xuICAgICAgICAvLyBmb3IgQU0gYW5kIFBNLiBUaGlzIGlzIHByb2JhYmx5IHdyb25nLCBidXQgaXQncyBtYWtlcyBwYXJzaW5nIHdheSBlYXNpZXIuXG4gICAgICAgIGlmICghdGhpcy5tZXJpZGllbUNhY2hlKSB7XG4gICAgICAgICAgY29uc3QgaW50bCA9IHsgaG91cjogXCJudW1lcmljXCIsIGhvdXJDeWNsZTogXCJoMTJcIiB9O1xuICAgICAgICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IFtEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCA5KSwgRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgMTkpXS5tYXAoXG4gICAgICAgICAgICAoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJkYXlwZXJpb2RcIilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWVyaWRpZW1DYWNoZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZXJhcyhsZW5ndGgsIGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBFbmdsaXNoLmVyYXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSB7IGVyYTogbGVuZ3RoIH07XG5cbiAgICAgIC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cbiAgICAgIGlmICghdGhpcy5lcmFDYWNoZVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoKGR0KSA9PlxuICAgICAgICAgIHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJlcmFcIilcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4dHJhY3QoZHQsIGludGxPcHRzLCBmaWVsZCkge1xuICAgIGNvbnN0IGRmID0gdGhpcy5kdEZvcm1hdHRlcihkdCwgaW50bE9wdHMpLFxuICAgICAgcmVzdWx0cyA9IGRmLmZvcm1hdFRvUGFydHMoKSxcbiAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKChtKSA9PiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZmllbGQpO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIG51bWJlckZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICAvLyB0aGlzIGZvcmNlc2ltcGxlIG9wdGlvbiBpcyBuZXZlciB1c2VkICh0aGUgb25seSBjYWxsZXIgc2hvcnQtY2lyY3VpdHMgb24gaXQsIGJ1dCBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSlcbiAgICAvLyAoaW4gY29udHJhc3QsIHRoZSByZXN0IG9mIHRoZSBjb25kaXRpb24gaXMgdXNlZCBoZWF2aWx5KVxuICAgIHJldHVybiBuZXcgUG9seU51bWJlckZvcm1hdHRlcih0aGlzLmludGwsIG9wdHMuZm9yY2VTaW1wbGUgfHwgdGhpcy5mYXN0TnVtYmVycywgb3B0cyk7XG4gIH1cblxuICBkdEZvcm1hdHRlcihkdCwgaW50bE9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seURhdGVGb3JtYXR0ZXIoZHQsIHRoaXMuaW50bCwgaW50bE9wdHMpO1xuICB9XG5cbiAgcmVsRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seVJlbEZvcm1hdHRlcih0aGlzLmludGwsIHRoaXMuaXNFbmdsaXNoKCksIG9wdHMpO1xuICB9XG5cbiAgbGlzdEZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICByZXR1cm4gZ2V0Q2FjaGVkTEYodGhpcy5pbnRsLCBvcHRzKTtcbiAgfVxuXG4gIGlzRW5nbGlzaCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sb2NhbGUgPT09IFwiZW5cIiB8fFxuICAgICAgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gXCJlbi11c1wiIHx8XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmludGwpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZS5zdGFydHNXaXRoKFwiZW4tdXNcIilcbiAgICApO1xuICB9XG5cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYWxlID09PSBvdGhlci5sb2NhbGUgJiZcbiAgICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiZcbiAgICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG90aGVyLm91dHB1dENhbGVuZGFyXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdW50cnVuY2F0ZVllYXIsXG4gIHNpZ25lZE9mZnNldCxcbiAgcGFyc2VJbnRlZ2VyLFxuICBwYXJzZU1pbGxpcyxcbiAgaWFuYVJlZ2V4LFxuICBpc1VuZGVmaW5lZCxcbiAgcGFyc2VGbG9hdGluZyxcbn0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcblxuLypcbiAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6XG4gKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC5cbiAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3RcbiAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLlxuICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhIFwiY3Vyc29yXCIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgaW4gdGhlIG1hdGNoIHRvIGxvb2sgYXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBjb21iaW5lIGV4dHJhY3RvcnMuXG4gKiBjb21iaW5lRXh0cmFjdG9ycygpIGRvZXMgdGhlIHdvcmsgb2YgY29tYmluaW5nIHRoZW0sIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnNvciB0aHJvdWdoIG11bHRpcGxlIGV4dHJhY3Rpb25zLlxuICogU29tZSBleHRyYWN0aW9ucyBhcmUgc3VwZXIgZHVtYiBhbmQgc2ltcGxlUGFyc2UgYW5kIGZyb21TdHJpbmdzIGhlbHAgRFJZIHRoZW0uXG4gKi9cblxuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoLi4ucmVnZXhlcykge1xuICBjb25zdCBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoKGYsIHIpID0+IGYgKyByLnNvdXJjZSwgXCJcIik7XG4gIHJldHVybiBSZWdFeHAoYF4ke2Z1bGx9JGApO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lRXh0cmFjdG9ycyguLi5leHRyYWN0b3JzKSB7XG4gIHJldHVybiAobSkgPT5cbiAgICBleHRyYWN0b3JzXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoW21lcmdlZFZhbHMsIG1lcmdlZFpvbmUsIGN1cnNvcl0sIGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgW3ZhbCwgem9uZSwgbmV4dF0gPSBleChtLCBjdXJzb3IpO1xuICAgICAgICAgIHJldHVybiBbeyAuLi5tZXJnZWRWYWxzLCAuLi52YWwgfSwgbWVyZ2VkWm9uZSB8fCB6b25lLCBuZXh0XTtcbiAgICAgICAgfSxcbiAgICAgICAgW3t9LCBudWxsLCAxXVxuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIDIpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzLCAuLi5wYXR0ZXJucykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAoY29uc3QgW3JlZ2V4LCBleHRyYWN0b3JdIG9mIHBhdHRlcm5zKSB7XG4gICAgY29uc3QgbSA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbbnVsbCwgbnVsbF07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZVBhcnNlKC4uLmtleXMpIHtcbiAgcmV0dXJuIChtYXRjaCwgY3Vyc29yKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgcmV0W2tleXNbaV1dID0gcGFyc2VJbnRlZ2VyKG1hdGNoW2N1cnNvciArIGldKTtcbiAgICB9XG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xuICB9O1xufVxuXG4vLyBJU08gYW5kIFNRTCBwYXJzaW5nXG5jb25zdCBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS8sXG4gIGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsMzB9KSk/KT8pPy8sXG4gIGlzb1RpbWVSZWdleCA9IFJlZ0V4cChgJHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0ke29mZnNldFJlZ2V4LnNvdXJjZX0/YCksXG4gIGlzb1RpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86VCR7aXNvVGltZVJlZ2V4LnNvdXJjZX0pP2ApLFxuICBpc29ZbWRSZWdleCA9IC8oWystXVxcZHs2fXxcXGR7NH0pKD86LT8oXFxkXFxkKSg/Oi0/KFxcZFxcZCkpPyk/LyxcbiAgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vLFxuICBpc29PcmRpbmFsUmVnZXggPSAvKFxcZHs0fSktPyhcXGR7M30pLyxcbiAgZXh0cmFjdElTT1dlZWtEYXRhID0gc2ltcGxlUGFyc2UoXCJ3ZWVrWWVhclwiLCBcIndlZWtOdW1iZXJcIiwgXCJ3ZWVrRGF5XCIpLFxuICBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZShcInllYXJcIiwgXCJvcmRpbmFsXCIpLFxuICBzcWxZbWRSZWdleCA9IC8oXFxkezR9KS0oXFxkXFxkKS0oXFxkXFxkKS8sIC8vIGR1bWJlZC1kb3duIHZlcnNpb24gb2YgdGhlIElTTyBvbmVcbiAgc3FsVGltZVJlZ2V4ID0gUmVnRXhwKFxuICAgIGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSA/KD86JHtvZmZzZXRSZWdleC5zb3VyY2V9fCgke2lhbmFSZWdleC5zb3VyY2V9KSk/YFxuICApLFxuICBzcWxUaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OiAke3NxbFRpbWVSZWdleC5zb3VyY2V9KT9gKTtcblxuZnVuY3Rpb24gaW50KG1hdGNoLCBwb3MsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IG0gPSBtYXRjaFtwb3NdO1xuICByZXR1cm4gaXNVbmRlZmluZWQobSkgPyBmYWxsYmFjayA6IHBhcnNlSW50ZWdlcihtKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT1ltZChtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgeWVhcjogaW50KG1hdGNoLCBjdXJzb3IpLFxuICAgIG1vbnRoOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDEpLFxuICAgIGRheTogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAxKSxcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPVGltZShtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgaG91cnM6IGludChtYXRjaCwgY3Vyc29yLCAwKSxcbiAgICBtaW51dGVzOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDApLFxuICAgIHNlY29uZHM6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMCksXG4gICAgbWlsbGlzZWNvbmRzOiBwYXJzZU1pbGxpcyhtYXRjaFtjdXJzb3IgKyAzXSksXG4gIH07XG5cbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyA0XTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT09mZnNldChtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IGxvY2FsID0gIW1hdGNoW2N1cnNvcl0gJiYgIW1hdGNoW2N1cnNvciArIDFdLFxuICAgIGZ1bGxPZmZzZXQgPSBzaWduZWRPZmZzZXQobWF0Y2hbY3Vyc29yICsgMV0sIG1hdGNoW2N1cnNvciArIDJdKSxcbiAgICB6b25lID0gbG9jYWwgPyBudWxsIDogRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGZ1bGxPZmZzZXQpO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElBTkFab25lKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3Qgem9uZSA9IG1hdGNoW2N1cnNvcl0gPyBJQU5BWm9uZS5jcmVhdGUobWF0Y2hbY3Vyc29yXSkgOiBudWxsO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAxXTtcbn1cblxuLy8gSVNPIHRpbWUgcGFyc2luZ1xuXG5jb25zdCBpc29UaW1lT25seSA9IFJlZ0V4cChgXlQ/JHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0kYCk7XG5cbi8vIElTTyBkdXJhdGlvbiBwYXJzaW5nXG5cbmNvbnN0IGlzb0R1cmF0aW9uID1cbiAgL14tP1AoPzooPzooLT9cXGR7MSw5fSg/OlxcLlxcZHsxLDl9KT8pWSk/KD86KC0/XFxkezEsOX0oPzpcXC5cXGR7MSw5fSk/KU0pPyg/OigtP1xcZHsxLDl9KD86XFwuXFxkezEsOX0pPylXKT8oPzooLT9cXGR7MSw5fSg/OlxcLlxcZHsxLDl9KT8pRCk/KD86VCg/OigtP1xcZHsxLDl9KD86XFwuXFxkezEsOX0pPylIKT8oPzooLT9cXGR7MSw5fSg/OlxcLlxcZHsxLDl9KT8pTSk/KD86KC0/XFxkezEsMjB9KSg/OlsuLF0oLT9cXGR7MSw5fSkpP1MpPyk/KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcbiAgY29uc3QgW3MsIHllYXJTdHIsIG1vbnRoU3RyLCB3ZWVrU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCBtaWxsaXNlY29uZHNTdHJdID1cbiAgICBtYXRjaDtcblxuICBjb25zdCBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09IFwiLVwiO1xuICBjb25zdCBuZWdhdGl2ZVNlY29uZHMgPSBzZWNvbmRTdHIgJiYgc2Vjb25kU3RyWzBdID09PSBcIi1cIjtcblxuICBjb25zdCBtYXliZU5lZ2F0ZSA9IChudW0sIGZvcmNlID0gZmFsc2UpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IChudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXgpKSA/IC1udW0gOiBudW07XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB5ZWFyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh5ZWFyU3RyKSksXG4gICAgICBtb250aHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobW9udGhTdHIpKSxcbiAgICAgIHdlZWtzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHdlZWtTdHIpKSxcbiAgICAgIGRheXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoZGF5U3RyKSksXG4gICAgICBob3VyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhob3VyU3RyKSksXG4gICAgICBtaW51dGVzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1pbnV0ZVN0cikpLFxuICAgICAgc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhzZWNvbmRTdHIpLCBzZWNvbmRTdHIgPT09IFwiLTBcIiksXG4gICAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0ciksIG5lZ2F0aXZlU2Vjb25kcyksXG4gICAgfSxcbiAgXTtcbn1cblxuLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxuY29uc3Qgb2JzT2Zmc2V0cyA9IHtcbiAgR01UOiAwLFxuICBFRFQ6IC00ICogNjAsXG4gIEVTVDogLTUgKiA2MCxcbiAgQ0RUOiAtNSAqIDYwLFxuICBDU1Q6IC02ICogNjAsXG4gIE1EVDogLTYgKiA2MCxcbiAgTVNUOiAtNyAqIDYwLFxuICBQRFQ6IC03ICogNjAsXG4gIFBTVDogLTggKiA2MCxcbn07XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB5ZWFyOiB5ZWFyU3RyLmxlbmd0aCA9PT0gMiA/IHVudHJ1bmNhdGVZZWFyKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSkgOiBwYXJzZUludGVnZXIoeWVhclN0ciksXG4gICAgbW9udGg6IEVuZ2xpc2gubW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0cikgKyAxLFxuICAgIGRheTogcGFyc2VJbnRlZ2VyKGRheVN0ciksXG4gICAgaG91cjogcGFyc2VJbnRlZ2VyKGhvdXJTdHIpLFxuICAgIG1pbnV0ZTogcGFyc2VJbnRlZ2VyKG1pbnV0ZVN0ciksXG4gIH07XG5cbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpO1xuICBpZiAod2Vla2RheVN0cikge1xuICAgIHJlc3VsdC53ZWVrZGF5ID1cbiAgICAgIHdlZWtkYXlTdHIubGVuZ3RoID4gM1xuICAgICAgICA/IEVuZ2xpc2gud2Vla2RheXNMb25nLmluZGV4T2Yod2Vla2RheVN0cikgKyAxXG4gICAgICAgIDogRW5nbGlzaC53ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUkZDIDI4MjIvNTMyMlxuY29uc3QgcmZjMjgyMiA9XG4gIC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcbiAgY29uc3QgW1xuICAgICAgLFxuICAgICAgd2Vla2RheVN0cixcbiAgICAgIGRheVN0cixcbiAgICAgIG1vbnRoU3RyLFxuICAgICAgeWVhclN0cixcbiAgICAgIGhvdXJTdHIsXG4gICAgICBtaW51dGVTdHIsXG4gICAgICBzZWNvbmRTdHIsXG4gICAgICBvYnNPZmZzZXQsXG4gICAgICBtaWxPZmZzZXQsXG4gICAgICBvZmZIb3VyU3RyLFxuICAgICAgb2ZmTWludXRlU3RyLFxuICAgIF0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG5cbiAgbGV0IG9mZnNldDtcbiAgaWYgKG9ic09mZnNldCkge1xuICAgIG9mZnNldCA9IG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgfSBlbHNlIGlmIChtaWxPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSAwO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldCA9IHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpO1xuICB9XG5cbiAgcmV0dXJuIFtyZXN1bHQsIG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KV07XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgcmV0dXJuIHNcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgXCIgXCIpXG4gICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCBcIiBcIilcbiAgICAudHJpbSgpO1xufVxuXG4vLyBodHRwIGRhdGVcblxuY29uc3QgcmZjMTEyMyA9XG4gICAgL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSwgKFxcZFxcZCkgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoXFxkezR9KSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgcmZjODUwID1cbiAgICAvXihNb25kYXl8VHVlc2RheXxXZWRzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheXxTdW5kYXkpLCAoXFxkXFxkKS0oSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpLShcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICBhc2NpaSA9XG4gICAgL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXFxkfFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgKFxcZHs0fSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzExMjNPcjg1MChtYXRjaCkge1xuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBkYXlTdHIsIG1vbnRoU3RyLCB5ZWFyU3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cl0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0QVNDSUkobWF0Y2gpIHtcbiAgY29uc3QgWywgd2Vla2RheVN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIsIHllYXJTdHJdID0gbWF0Y2gsXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxuY29uc3QgaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1ltZFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29XZWVrUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb09yZGluYWxSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb1RpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvVGltZVJlZ2V4KTtcblxuY29uc3QgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1ltZCxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXRcbik7XG5jb25zdCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1dlZWtEYXRhLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldFxuKTtcbmNvbnN0IGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT09yZGluYWxEYXRhLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldFxuKTtcbmNvbnN0IGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXG4gICAgW2lzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXRdLFxuICAgIFtpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZV0sXG4gICAgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUkZDMjgyMkRhdGUocykge1xuICByZXR1cm4gcGFyc2UocHJlcHJvY2Vzc1JGQzI4MjIocyksIFtyZmMyODIyLCBleHRyYWN0UkZDMjgyMl0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVFRQRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtyZmMxMTIzLCBleHRyYWN0UkZDMTEyM09yODUwXSxcbiAgICBbcmZjODUwLCBleHRyYWN0UkZDMTEyM09yODUwXSxcbiAgICBbYXNjaWksIGV4dHJhY3RBU0NJSV1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPRHVyYXRpb24ocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb0R1cmF0aW9uLCBleHRyYWN0SVNPRHVyYXRpb25dKTtcbn1cblxuY29uc3QgZXh0cmFjdElTT1RpbWVPbmx5ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU09UaW1lT25seShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvVGltZU9ubHksIGV4dHJhY3RJU09UaW1lT25seV0pO1xufVxuXG5jb25zdCBzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsWW1kUmVnZXgsIHNxbFRpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7XG5cbmNvbnN0IGV4dHJhY3RJU09ZbWRUaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1ltZCxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU1FMKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lT2Zmc2V0QW5kSUFOQVpvbmVdLFxuICAgIFtzcWxUaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZV1cbiAgKTtcbn1cbiIsImltcG9ydCB7IHBhcnNlTWlsbGlzLCBpc1VuZGVmaW5lZCwgdW50cnVuY2F0ZVllYXIsIHNpZ25lZE9mZnNldCwgaGFzT3duUHJvcGVydHkgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgRm9ybWF0dGVyIGZyb20gXCIuL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi4vem9uZXMvZml4ZWRPZmZzZXRab25lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4uL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgeyBkaWdpdFJlZ2V4LCBwYXJzZURpZ2l0cyB9IGZyb20gXCIuL2RpZ2l0cy5qc1wiO1xuaW1wb3J0IHsgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3JzLmpzXCI7XG5cbmNvbnN0IE1JU1NJTkdfRlRQID0gXCJtaXNzaW5nIEludGwuRGF0ZVRpbWVGb3JtYXQuZm9ybWF0VG9QYXJ0cyBzdXBwb3J0XCI7XG5cbmZ1bmN0aW9uIGludFVuaXQocmVnZXgsIHBvc3QgPSAoaSkgPT4gaSkge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbc10pID0+IHBvc3QocGFyc2VEaWdpdHMocykpIH07XG59XG5cbmNvbnN0IE5CU1AgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCk7XG5jb25zdCBzcGFjZU9yTkJTUCA9IGAoIHwke05CU1B9KWA7XG5jb25zdCBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsIFwiZ1wiKTtcblxuZnVuY3Rpb24gZml4TGlzdFJlZ2V4KHMpIHtcbiAgLy8gbWFrZSBkb3RzIG9wdGlvbmFsIGFuZCBhbHNvIG1ha2UgdGhlbSBsaXRlcmFsXG4gIC8vIG1ha2Ugc3BhY2UgYW5kIG5vbiBicmVha2FibGUgc3BhY2UgY2hhcmFjdGVycyBpbnRlcmNoYW5nZWFibGVcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuL2csIFwiXFxcXC4/XCIpLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIHNwYWNlT3JOQlNQKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9cXC4vZywgXCJcIikgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWxcbiAgICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgXCIgXCIpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXG4gICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oXCJ8XCIpKSxcbiAgICAgIGRlc2VyOiAoW3NdKSA9PlxuICAgICAgICBzdHJpbmdzLmZpbmRJbmRleCgoaSkgPT4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpKSArIHN0YXJ0SW5kZXgsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbLCBoLCBtXSkgPT4gc2lnbmVkT2Zmc2V0KGgsIG0pLCBncm91cHMgfTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcyB9O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICBjb25zdCBvbmUgPSBkaWdpdFJlZ2V4KGxvYyksXG4gICAgdHdvID0gZGlnaXRSZWdleChsb2MsIFwiezJ9XCIpLFxuICAgIHRocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezN9XCIpLFxuICAgIGZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7NH1cIiksXG4gICAgc2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezZ9XCIpLFxuICAgIG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsIFwiezEsMn1cIiksXG4gICAgb25lVG9UaHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDN9XCIpLFxuICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezEsNn1cIiksXG4gICAgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsIFwiezEsOX1cIiksXG4gICAgdHdvVG9Gb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezIsNH1cIiksXG4gICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezQsNn1cIiksXG4gICAgbGl0ZXJhbCA9ICh0KSA9PiAoeyByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksIGRlc2VyOiAoW3NdKSA9PiBzLCBsaXRlcmFsOiB0cnVlIH0pLFxuICAgIHVuaXRhdGUgPSAodCkgPT4ge1xuICAgICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHQudmFsKSB7XG4gICAgICAgIC8vIGVyYVxuICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcInNob3J0XCIsIGZhbHNlKSwgMCk7XG4gICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcImxvbmdcIiwgZmFsc2UpLCAwKTtcbiAgICAgICAgLy8geWVhcnNcbiAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1NpeCk7XG4gICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuICAgICAgICBjYXNlIFwieXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwieXl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoc2l4KTtcbiAgICAgICAgLy8gbW9udGhzXG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJsb25nXCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBkYXRlc1xuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgLy8gb3JkaW5hbHNcbiAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcbiAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgICAgLy8gdGltZVxuICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVUb05pbmUpO1xuICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIC8vIG1lcmlkaWVtXG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tZXJpZGllbXMoKSwgMCk7XG4gICAgICAgIC8vIHdlZWtZZWFyIChrKVxuICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgLy8gd2Vla051bWJlciAoVylcbiAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIHdlZWtkYXlzXG4gICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcbiAgICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAgIC8vIG9mZnNldC96b25lXG4gICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgIGNhc2UgXCJaWlwiOlxuICAgICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChgKFsrLV0ke29uZU9yVHdvLnNvdXJjZX0pKD86Oigke3R3by5zb3VyY2V9KSk/YCksIDIpO1xuICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoJHt0d28uc291cmNlfSk/YCksIDIpO1xuICAgICAgICAvLyB3ZSBkb24ndCBzdXBwb3J0IFpaWlogKFBTVCkgb3IgWlpaWlogKFBhY2lmaWMgU3RhbmRhcmQgVGltZSkgaW4gcGFyc2luZ1xuICAgICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYW55IHdheSB0byBmaWd1cmUgb3V0IHdoYXQgdGhleSBhcmVcbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFAsXG4gIH07XG5cbiAgdW5pdC50b2tlbiA9IHRva2VuO1xuXG4gIHJldHVybiB1bml0O1xufVxuXG5jb25zdCBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiLFxuICB9LFxuICBtb250aDoge1xuICAgIG51bWVyaWM6IFwiTVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIk1NXCIsXG4gICAgc2hvcnQ6IFwiTU1NXCIsXG4gICAgbG9uZzogXCJNTU1NXCIsXG4gIH0sXG4gIGRheToge1xuICAgIG51bWVyaWM6IFwiZFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImRkXCIsXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIixcbiAgfSxcbiAgZGF5cGVyaW9kOiBcImFcIixcbiAgZGF5UGVyaW9kOiBcImFcIixcbiAgaG91cjoge1xuICAgIG51bWVyaWM6IFwiaFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImhoXCIsXG4gIH0sXG4gIG1pbnV0ZToge1xuICAgIG51bWVyaWM6IFwibVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIm1tXCIsXG4gIH0sXG4gIHNlY29uZDoge1xuICAgIG51bWVyaWM6IFwic1wiLFxuICAgIFwiMi1kaWdpdFwiOiBcInNzXCIsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiB0b2tlbkZvclBhcnQocGFydCwgbG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHBhcnQ7XG5cbiAgaWYgKHR5cGUgPT09IFwibGl0ZXJhbFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpdGVyYWw6IHRydWUsXG4gICAgICB2YWw6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IGZvcm1hdE9wdHNbdHlwZV07XG5cbiAgbGV0IHZhbCA9IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsW3R5cGVdO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIikge1xuICAgIHZhbCA9IHZhbFtzdHlsZV07XG4gIH1cblxuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpdGVyYWw6IGZhbHNlLFxuICAgICAgdmFsLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBidWlsZFJlZ2V4KHVuaXRzKSB7XG4gIGNvbnN0IHJlID0gdW5pdHMubWFwKCh1KSA9PiB1LnJlZ2V4KS5yZWR1Y2UoKGYsIHIpID0+IGAke2Z9KCR7ci5zb3VyY2V9KWAsIFwiXCIpO1xuICByZXR1cm4gW2BeJHtyZX0kYCwgdW5pdHNdO1xufVxuXG5mdW5jdGlvbiBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICBjb25zdCBhbGwgPSB7fTtcbiAgICBsZXQgbWF0Y2hJbmRleCA9IDE7XG4gICAgZm9yIChjb25zdCBpIGluIGhhbmRsZXJzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoaGFuZGxlcnMsIGkpKSB7XG4gICAgICAgIGNvbnN0IGggPSBoYW5kbGVyc1tpXSxcbiAgICAgICAgICBncm91cHMgPSBoLmdyb3VwcyA/IGguZ3JvdXBzICsgMSA6IDE7XG4gICAgICAgIGlmICghaC5saXRlcmFsICYmIGgudG9rZW4pIHtcbiAgICAgICAgICBhbGxbaC50b2tlbi52YWxbMF1dID0gaC5kZXNlcihtYXRjaGVzLnNsaWNlKG1hdGNoSW5kZXgsIG1hdGNoSW5kZXggKyBncm91cHMpKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaEluZGV4ICs9IGdyb3VwcztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFttYXRjaGVzLCBhbGxdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbWF0Y2hlcywge31dO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykge1xuICBjb25zdCB0b0ZpZWxkID0gKHRva2VuKSA9PiB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG4gICAgICBjYXNlIFwiaFwiOlxuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgcmV0dXJuIFwiZGF5XCI7XG4gICAgICBjYXNlIFwib1wiOlxuICAgICAgICByZXR1cm4gXCJvcmRpbmFsXCI7XG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcbiAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgIHJldHVybiBcInllYXJcIjtcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrZGF5XCI7XG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrTnVtYmVyXCI7XG4gICAgICBjYXNlIFwia1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrWWVhclwiO1xuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFwicXVhcnRlclwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGxldCB6b25lID0gbnVsbDtcbiAgbGV0IHNwZWNpZmljT2Zmc2V0O1xuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMueikpIHtcbiAgICB6b25lID0gSUFOQVpvbmUuY3JlYXRlKG1hdGNoZXMueik7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuWikpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHpvbmUgPSBuZXcgRml4ZWRPZmZzZXRab25lKG1hdGNoZXMuWik7XG4gICAgfVxuICAgIHNwZWNpZmljT2Zmc2V0ID0gbWF0Y2hlcy5aO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnEpKSB7XG4gICAgbWF0Y2hlcy5NID0gKG1hdGNoZXMucSAtIDEpICogMyArIDE7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuaCkpIHtcbiAgICBpZiAobWF0Y2hlcy5oIDwgMTIgJiYgbWF0Y2hlcy5hID09PSAxKSB7XG4gICAgICBtYXRjaGVzLmggKz0gMTI7XG4gICAgfSBlbHNlIGlmIChtYXRjaGVzLmggPT09IDEyICYmIG1hdGNoZXMuYSA9PT0gMCkge1xuICAgICAgbWF0Y2hlcy5oID0gMDtcbiAgICB9XG4gIH1cblxuICBpZiAobWF0Y2hlcy5HID09PSAwICYmIG1hdGNoZXMueSkge1xuICAgIG1hdGNoZXMueSA9IC1tYXRjaGVzLnk7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMudSkpIHtcbiAgICBtYXRjaGVzLlMgPSBwYXJzZU1pbGxpcyhtYXRjaGVzLnUpO1xuICB9XG5cbiAgY29uc3QgdmFscyA9IE9iamVjdC5rZXlzKG1hdGNoZXMpLnJlZHVjZSgociwgaykgPT4ge1xuICAgIGNvbnN0IGYgPSB0b0ZpZWxkKGspO1xuICAgIGlmIChmKSB7XG4gICAgICByW2ZdID0gbWF0Y2hlc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbiAgfSwge30pO1xuXG4gIHJldHVybiBbdmFscywgem9uZSwgc3BlY2lmaWNPZmZzZXRdO1xufVxuXG5sZXQgZHVtbXlEYXRlVGltZUNhY2hlID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0RHVtbXlEYXRlVGltZSgpIHtcbiAgaWYgKCFkdW1teURhdGVUaW1lQ2FjaGUpIHtcbiAgICBkdW1teURhdGVUaW1lQ2FjaGUgPSBEYXRlVGltZS5mcm9tTWlsbGlzKDE1NTU1NTU1NTU1NTUpO1xuICB9XG5cbiAgcmV0dXJuIGR1bW15RGF0ZVRpbWVDYWNoZTtcbn1cblxuZnVuY3Rpb24gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHRva2VuLCBsb2NhbGUpIHtcbiAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4udmFsKTtcblxuICBpZiAoIWZvcm1hdE9wdHMpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXIgPSBGb3JtYXR0ZXIuY3JlYXRlKGxvY2FsZSwgZm9ybWF0T3B0cyk7XG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdERhdGVUaW1lUGFydHMoZ2V0RHVtbXlEYXRlVGltZSgpKTtcblxuICBjb25zdCB0b2tlbnMgPSBwYXJ0cy5tYXAoKHApID0+IHRva2VuRm9yUGFydChwLCBsb2NhbGUsIGZvcm1hdE9wdHMpKTtcblxuICBpZiAodG9rZW5zLmluY2x1ZGVzKHVuZGVmaW5lZCkpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBleHBhbmRNYWNyb1Rva2Vucyh0b2tlbnMsIGxvY2FsZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi50b2tlbnMubWFwKCh0KSA9PiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKSkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKSxcbiAgICB1bml0cyA9IHRva2Vucy5tYXAoKHQpID0+IHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpKSxcbiAgICBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoKHQpID0+IHQuaW52YWxpZFJlYXNvbik7XG5cbiAgaWYgKGRpc3F1YWxpZnlpbmdVbml0KSB7XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgaW52YWxpZFJlYXNvbjogZGlzcXVhbGlmeWluZ1VuaXQuaW52YWxpZFJlYXNvbiB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IFtyZWdleFN0cmluZywgaGFuZGxlcnNdID0gYnVpbGRSZWdleCh1bml0cyksXG4gICAgICByZWdleCA9IFJlZ0V4cChyZWdleFN0cmluZywgXCJpXCIpLFxuICAgICAgW3Jhd01hdGNoZXMsIG1hdGNoZXNdID0gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycyksXG4gICAgICBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldF0gPSBtYXRjaGVzXG4gICAgICAgID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKVxuICAgICAgICA6IFtudWxsLCBudWxsLCB1bmRlZmluZWRdO1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcImFcIikgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJIXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgaW5jbHVkZSBtZXJpZGllbSB3aGVuIHNwZWNpZnlpbmcgMjQtaG91ciBmb3JtYXRcIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgcmVnZXgsIHJhd01hdGNoZXMsIG1hdGNoZXMsIHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB7IHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb24gfSA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCk7XG4gIHJldHVybiBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZFJlYXNvbl07XG59XG4iLCIvKlxuICBUaGlzIGlzIGp1c3QgYSBqdW5rIGRyYXdlciwgY29udGFpbmluZyBhbnl0aGluZyB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjbGFzc2VzLlxuICBCZWNhdXNlIEx1eG9uIGlzIHNtYWxsKGlzaCksIHRoaXMgc2hvdWxkIHN0YXkgc21hbGwgYW5kIHdlIHdvbid0IHdvcnJ5IGFib3V0IHNwbGl0dGluZ1xuICBpdCB1cCBpbnRvLCBzYXksIHBhcnNpbmdVdGlsLmpzIGFuZCBiYXNpY1V0aWwuanMgYW5kIHNvIG9uLiBCdXQgdGhleSBhcmUgZGl2aWRlZCB1cCBieSBmZWF0dXJlIGFyZWEuXG4qL1xuXG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gXCIuLi9lcnJvcnMuanNcIjtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8vIFRZUEVTXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiICYmIG8gJSAxID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn1cblxuLy8gQ0FQQUJJTElUSUVTXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNSZWxhdGl2ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIEludGwgIT09IFwidW5kZWZpbmVkXCIgJiYgISFJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBPQkpFQ1RTIEFORCBBUlJBWVNcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnIucmVkdWNlKChiZXN0LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XG4gICAgaWYgKCFiZXN0KSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhLCBrKSA9PiB7XG4gICAgYVtrXSA9IG9ialtrXTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuLy8gTlVNQkVSUyBBTkQgU1RSSU5HU1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XG59XG5cbi8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yTW9kKHgsIG4pIHtcbiAgcmV0dXJuIHggLSBuICogTWF0aC5mbG9vcih4IC8gbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRTdGFydChpbnB1dCwgbiA9IDIpIHtcbiAgY29uc3QgaXNOZWcgPSBpbnB1dCA8IDA7XG4gIGxldCBwYWRkZWQ7XG4gIGlmIChpc05lZykge1xuICAgIHBhZGRlZCA9IFwiLVwiICsgKFwiXCIgKyAtaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwYWRkZWQgPSAoXCJcIiArIGlucHV0KS5wYWRTdGFydChuLCBcIjBcIik7XG4gIH1cbiAgcmV0dXJuIHBhZGRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZsb2F0aW5nKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1pbGxpcyhmcmFjdGlvbikge1xuICAvLyBSZXR1cm4gdW5kZWZpbmVkIChpbnN0ZWFkIG9mIDApIGluIHRoZXNlIGNhc2VzLCB3aGVyZSBmcmFjdGlvbiBpcyBub3Qgc2V0XG4gIGlmIChpc1VuZGVmaW5lZChmcmFjdGlvbikgfHwgZnJhY3Rpb24gPT09IG51bGwgfHwgZnJhY3Rpb24gPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGYgPSBwYXJzZUZsb2F0KFwiMC5cIiArIGZyYWN0aW9uKSAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBkaWdpdHMsIHRvd2FyZFplcm8gPSBmYWxzZSkge1xuICBjb25zdCBmYWN0b3IgPSAxMCAqKiBkaWdpdHMsXG4gICAgcm91bmRlciA9IHRvd2FyZFplcm8gPyBNYXRoLnRydW5jIDogTWF0aC5yb3VuZDtcbiAgcmV0dXJuIHJvdW5kZXIobnVtYmVyICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cblxuLy8gREFURSBCQVNJQ1NcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICBjb25zdCBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSxcbiAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcbiAgfVxufVxuXG4vLyBjb3ZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxuZXhwb3J0IGZ1bmN0aW9uIG9ialRvTG9jYWxUUyhvYmopIHtcbiAgbGV0IGQgPSBEYXRlLlVUQyhcbiAgICBvYmoueWVhcixcbiAgICBvYmoubW9udGggLSAxLFxuICAgIG9iai5kYXksXG4gICAgb2JqLmhvdXIsXG4gICAgb2JqLm1pbnV0ZSxcbiAgICBvYmouc2Vjb25kLFxuICAgIG9iai5taWxsaXNlY29uZFxuICApO1xuXG4gIC8vIGZvciBsZWdhY3kgcmVhc29ucywgeWVhcnMgYmV0d2VlbiAwIGFuZCA5OSBhcmUgaW50ZXJwcmV0ZWQgYXMgMTlYWDsgcmV2ZXJ0IHRoYXRcbiAgaWYgKG9iai55ZWFyIDwgMTAwICYmIG9iai55ZWFyID49IDApIHtcbiAgICBkID0gbmV3IERhdGUoZCk7XG4gICAgZC5zZXRVVENGdWxsWWVhcihkLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTAwKTtcbiAgfVxuICByZXR1cm4gK2Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpIHtcbiAgY29uc3QgcDEgPVxuICAgICAgKHdlZWtZZWFyICtcbiAgICAgICAgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQpIC1cbiAgICAgICAgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDEwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNDAwKSkgJVxuICAgICAgNyxcbiAgICBsYXN0ID0gd2Vla1llYXIgLSAxLFxuICAgIHAyID0gKGxhc3QgKyBNYXRoLmZsb29yKGxhc3QgLyA0KSAtIE1hdGguZmxvb3IobGFzdCAvIDEwMCkgKyBNYXRoLmZsb29yKGxhc3QgLyA0MDApKSAlIDc7XG4gIHJldHVybiBwMSA9PT0gNCB8fCBwMiA9PT0gMyA/IDUzIDogNTI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7XG4gIGlmICh5ZWFyID4gOTkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHJldHVybiB5ZWFyID4gNjAgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyO1xufVxuXG4vLyBQQVJTSU5HXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUgPSBudWxsKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgaW50bE9wdHMgPSB7XG4gICAgICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfTtcblxuICBpZiAodGltZVpvbmUpIHtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xuICB9XG5cbiAgY29uc3QgbW9kaWZpZWQgPSB7IHRpbWVab25lTmFtZTogb2Zmc2V0Rm9ybWF0LCAuLi5pbnRsT3B0cyB9O1xuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpXG4gICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCIpO1xuICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDtcbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XG4gIGxldCBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApO1xuXG4gIC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcbiAgICBvZmZIb3VyID0gMDtcbiAgfVxuXG4gIGNvbnN0IG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDAsXG4gICAgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47XG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XG59XG5cbi8vIENPRVJDSU9OXG5cbmV4cG9ydCBmdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xuICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4obnVtZXJpY1ZhbHVlKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoYEludmFsaWQgdW5pdCB2YWx1ZSAke3ZhbHVlfWApO1xuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xuICBjb25zdCBub3JtYWxpemVkID0ge307XG4gIGZvciAoY29uc3QgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgY29uc3QgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9mZnNldCwgZm9ybWF0KSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgLyA2MCkpLFxuICAgIG1pbnV0ZXMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAlIDYwKSksXG4gICAgc2lnbiA9IG9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcblxuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9OiR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke2hvdXJzfSR7bWludXRlcyA+IDAgPyBgOiR7bWludXRlc31gIDogXCJcIn1gO1xuICAgIGNhc2UgXCJ0ZWNoaWVcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoaG91cnMsIDIpfSR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFZhbHVlIGZvcm1hdCAke2Zvcm1hdH0gaXMgb3V0IG9mIHJhbmdlIGZvciBwcm9wZXJ0eSBmb3JtYXRgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZU9iamVjdChvYmopIHtcbiAgcmV0dXJuIHBpY2sob2JqLCBbXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0pO1xufVxuXG5leHBvcnQgY29uc3QgaWFuYVJlZ2V4ID0gL1tBLVphLXpfKy1dezEsMjU2fSg6P1xcL1tBLVphLXowLTlfKy1dezEsMjU2fShcXC9bQS1aYS16MC05XystXXsxLDI1Nn0pPyk/LztcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi4vem9uZXMvZml4ZWRPZmZzZXRab25lLmpzXCI7XG5pbXBvcnQgSW52YWxpZFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ludmFsaWRab25lLmpzXCI7XG5cbmltcG9ydCB7IGlzVW5kZWZpbmVkLCBpc1N0cmluZywgaXNOdW1iZXIgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xuICBsZXQgb2Zmc2V0O1xuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25zdCBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gXCJsb2NhbFwiIHx8IGxvd2VyZWQgPT09IFwic3lzdGVtXCIpIHJldHVybiBkZWZhdWx0Wm9uZTtcbiAgICBlbHNlIGlmIChsb3dlcmVkID09PSBcInV0Y1wiIHx8IGxvd2VyZWQgPT09IFwiZ210XCIpIHJldHVybiBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XG4gICAgZWxzZSBpZiAoSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihsb3dlcmVkKSkgcmV0dXJuIElBTkFab25lLmNyZWF0ZShpbnB1dCk7XG4gICAgZWxzZSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKGxvd2VyZWQpIHx8IG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiICYmIGlucHV0Lm9mZnNldCAmJiB0eXBlb2YgaW5wdXQub2Zmc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrXG4gICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdFxuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplWm9uZSB9IGZyb20gXCIuL2ltcGwvem9uZVV0aWwuanNcIjtcblxuaW1wb3J0IHsgaGFzUmVsYXRpdmUgfSBmcm9tIFwiLi9pbXBsL3V0aWwuanNcIjtcblxuLyoqXG4gKiBUaGUgSW5mbyBjbGFzcyBjb250YWlucyBzdGF0aWMgbWV0aG9kcyBmb3IgcmV0cmlldmluZyBnZW5lcmFsIHRpbWUgYW5kIGRhdGUgcmVsYXRlZCBkYXRhLiBGb3IgZXhhbXBsZSwgaXQgaGFzIG1ldGhvZHMgZm9yIGZpbmRpbmcgb3V0IGlmIGEgdGltZSB6b25lIGhhcyBhIERTVCwgZm9yIGxpc3RpbmcgdGhlIG1vbnRocyBpbiBhbnkgc3VwcG9ydGVkIGxvY2FsZSwgYW5kIGZvciBkaXNjb3ZlcmluZyB3aGljaCBvZiBMdXhvbiBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIHtcbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBjb250YWlucyBhIERTVC5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBab25lIHRvIGNoZWNrLiBEZWZhdWx0cyB0byB0aGUgZW52aXJvbm1lbnQncyBsb2NhbCB6b25lLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGhhc0RTVCh6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmUpIHtcbiAgICBjb25zdCBwcm90byA9IERhdGVUaW1lLm5vdygpLnNldFpvbmUoem9uZSkuc2V0KHsgbW9udGg6IDEyIH0pO1xuXG4gICAgcmV0dXJuICF6b25lLmlzVW5pdmVyc2FsICYmIHByb3RvLm9mZnNldCAhPT0gcHJvdG8uc2V0KHsgbW9udGg6IDYgfSkub2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBpcyBhIHZhbGlkIElBTkEgc3BlY2lmaWVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFpvbmUgdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKHpvbmUpICYmIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBpbnB1dCBpbnRvIGEge0BsaW5rIFpvbmV9IGluc3RhbmNlLlxuICAgKlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYWxyZWFkeSBhIFpvbmUgaW5zdGFuY2UsIGl0IGlzIHJldHVybmVkIHVuY2hhbmdlZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSB2YWxpZCB0aW1lIHpvbmUgbmFtZSwgYSBab25lIGluc3RhbmNlXG4gICAqICAgd2l0aCB0aGF0IG5hbWUgaXMgcmV0dXJuZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyB0aGF0IGRvZXNuJ3QgcmVmZXIgdG8gYSBrbm93biB0aW1lIHpvbmUsIGEgWm9uZVxuICAgKiAgIGluc3RhbmNlIHdpdGgge0BsaW5rIFpvbmUjaXNWYWxpZH0gPT0gZmFsc2UgaXMgcmV0dXJuZWQuXG4gICAqICogSWYgYGlucHV0IGlzIGEgbnVtYmVyLCBhIFpvbmUgaW5zdGFuY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGZpeGVkIG9mZnNldFxuICAgKiAgIGluIG1pbnV0ZXMgaXMgcmV0dXJuZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIHRoZSBkZWZhdWx0IHpvbmUgaXMgcmV0dXJuZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV8bnVtYmVyfSBbaW5wdXRdIC0gdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtab25lfVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZVpvbmUoaW5wdXQpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShpbnB1dCwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIG1vbnRoIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbW9udGhzKFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSBcImdyZWdvcnlcIiB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IG1vbnRoIG5hbWVzLlxuICAgKiBGb3JtYXQgbW9udGhzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgbW9udGhzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byB0aGUgZGF5IG9mIHRoZSBtb250aC4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIEluZm8jbW9udGhzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1vbnRoc0Zvcm1hdChcbiAgICBsZW5ndGggPSBcImxvbmdcIixcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwsIG91dHB1dENhbGVuZGFyID0gXCJncmVnb3J5XCIgfSA9IHt9XG4gICkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgd2VlayBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgd2Vla2RheSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKClbMF0gLy89PiAnTW9uZGF5J1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcpWzBdIC8vPT4gJ01vbidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9KVswXSAvLz0+ICdsdW4uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9in2YTYp9ir2YbZitmGJ1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyB3ZWVrZGF5cyhsZW5ndGggPSBcImxvbmdcIiwgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgd2VlayBuYW1lcy5cbiAgICogRm9ybWF0IHdlZWtkYXlzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgd2Vla2RheXMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIG1vcmUgZGF0ZSBpbmZvcm1hdGlvbi4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIEluZm8jd2Vla2RheXN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT1udWxsXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIHdlZWtkYXlzRm9ybWF0KFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIG1lcmlkaWVtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKCkgLy89PiBbICdBTScsICdQTScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcyh7IGxvY2FsZTogJ215JyB9KSAvLz0+IFsgJ+GAlOGAtuGAlOGAgOGAuicsICfhgIrhgJThgLEnIF1cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbWVyaWRpZW1zKHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUpLm1lcmlkaWVtcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBlcmFzLCBzdWNoIGFzIFsnQkMnLCAnQUQnXS4gVGhlIGxvY2FsZSBjYW4gYmUgc3BlY2lmaWVkLCBidXQgdGhlIGNhbGVuZGFyIHN5c3RlbSBpcyBhbHdheXMgR3JlZ29yaWFuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nc2hvcnQnXSAtIHRoZSBsZW5ndGggb2YgdGhlIGVyYSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcInNob3J0XCIgb3IgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoKSAvLz0+IFsgJ0JDJywgJ0FEJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycpIC8vPT4gWyAnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnLCB7IGxvY2FsZTogJ2ZyJyB9KSAvLz0+IFsgJ2F2YW50IErDqXN1cy1DaHJpc3QnLCAnYXByw6hzIErDqXN1cy1DaHJpc3QnIF1cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgZXJhcyhsZW5ndGggPSBcInNob3J0XCIsIHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bGwsIFwiZ3JlZ29yeVwiKS5lcmFzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuXG4gICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmcgc3VwcG9ydCBpcyBub3QgYXZhaWxhYmxlLiBVc2UgdGhpcyBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IGlmIHRoYXQncyB0aGUgY2FzZS5cbiAgICogS2V5czpcbiAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nXG4gICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgcmVsYXRpdmU6IGZhbHNlIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGZlYXR1cmVzKCkge1xuICAgIHJldHVybiB7IHJlbGF0aXZlOiBoYXNSZWxhdGl2ZSgpIH07XG4gIH1cbn1cbiIsImltcG9ydCBEYXRlVGltZSwgeyBmcmllbmRseURhdGVUaW1lIH0gZnJvbSBcIi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciwgSW52YWxpZEludGVydmFsRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ltcGwvaW52YWxpZC5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIEludGVydmFsXCI7XG5cbi8vIGNoZWNrcyBpZiB0aGUgc3RhcnQgaXMgZXF1YWwgdG8gb3IgYmVmb3JlIHRoZSBlbmRcbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgc3RhcnRcIik7XG4gIH0gZWxzZSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBlbmRcIik7XG4gIH0gZWxzZSBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcbiAgICAgIFwiZW5kIGJlZm9yZSBzdGFydFwiLFxuICAgICAgYFRoZSBlbmQgb2YgYW4gaW50ZXJ2YWwgbXVzdCBiZSBhZnRlciBpdHMgc3RhcnQsIGJ1dCB5b3UgaGFkIHN0YXJ0PSR7c3RhcnQudG9JU08oKX0gYW5kIGVuZD0ke2VuZC50b0lTTygpfWBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2Zyb21EYXRlVGltZXN9LCB7QGxpbmsgSW50ZXJ2YWwjYWZ0ZXJ9LCB7QGxpbmsgSW50ZXJ2YWwjYmVmb3JlfSwgb3Ige0BsaW5rIEludGVydmFsI2Zyb21JU099LlxuICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgSW50ZXJ2YWwjc3RhcnR9IGFuZCB7QGxpbmsgSW50ZXJ2YWwjZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2NvdW50fSwge0BsaW5rIEludGVydmFsI2xlbmd0aH0sIHtAbGluayBJbnRlcnZhbCNoYXNTYW1lfSwge0BsaW5rIEludGVydmFsI2NvbnRhaW5zfSwge0BsaW5rIEludGVydmFsI2lzQWZ0ZXJ9LCBvciB7QGxpbmsgSW50ZXJ2YWwjaXNCZWZvcmV9LlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjc2V0fSwge0BsaW5rIEludGVydmFsI3NwbGl0QXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRCeX0sIHtAbGluayBJbnRlcnZhbCNkaXZpZGVFcXVhbGx5fSwge0BsaW5rIEludGVydmFsI21lcmdlfSwge0BsaW5rIEludGVydmFsI3hvcn0sIHtAbGluayBJbnRlcnZhbCN1bmlvbn0sIHtAbGluayBJbnRlcnZhbCNpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgSW50ZXJ2YWwjZGlmZmVyZW5jZX0uXG4gKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNlcXVhbHN9LCB7QGxpbmsgSW50ZXJ2YWwjb3ZlcmxhcHN9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNTdGFydH0sIHtAbGluayBJbnRlcnZhbCNhYnV0c0VuZH0sIHtAbGluayBJbnRlcnZhbCNlbmd1bGZzfVxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIEludGVydmFsIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIEludGVydmFsI3RvU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvSVNPfSwge0BsaW5rIEludGVydmFsI3RvSVNPRGF0ZX0sIHtAbGluayBJbnRlcnZhbCN0b0lTT1RpbWV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9Gb3JtYXR9LCBhbmQge0BsaW5rIEludGVydmFsI3RvRHVyYXRpb259LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnZhbCB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zID0gY29uZmlnLnN0YXJ0O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZSA9IGNvbmZpZy5lbmQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25JbnRlcnZhbCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIEludGVydmFsIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEludGVydmFsRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhbiBlbmQgRGF0ZVRpbWUuIEluY2x1c2l2ZSBvZiB0aGUgc3RhcnQgYnV0IG5vdCB0aGUgZW5kLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpLFxuICAgICAgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG5cbiAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCk7XG5cbiAgICBpZiAodmFsaWRhdGVFcnJvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXG4gICAgICAgIGVuZDogYnVpbHRFbmQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlRXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGFmdGVyKHN0YXJ0LCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLFxuICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdCwgZHQucGx1cyhkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBlbmQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIGJhY2t3YXJkcyB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgYmVmb3JlKGVuZCwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0Lm1pbnVzKGR1ciksIGR0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuXG4gICAqIEFjY2VwdHMgYDxzdGFydD4vPGVuZD5gLCBgPHN0YXJ0Pi88ZHVyYXRpb24+YCwgYW5kIGA8ZHVyYXRpb24+LzxlbmQ+YCBmb3JtYXRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBvcHRpb25zIHRvIHBhc3Mge0BsaW5rIERhdGVUaW1lI2Zyb21JU099IGFuZCBvcHRpb25hbGx5IHtAbGluayBEdXJhdGlvbiNmcm9tSVNPfVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtzLCBlXSA9ICh0ZXh0IHx8IFwiXCIpLnNwbGl0KFwiL1wiLCAyKTtcbiAgICBpZiAocyAmJiBlKSB7XG4gICAgICBsZXQgc3RhcnQsIHN0YXJ0SXNWYWxpZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0ID0gRGF0ZVRpbWUuZnJvbUlTTyhzLCBvcHRzKTtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gc3RhcnQuaXNWYWxpZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxldCBlbmQsIGVuZElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBlbmQgPSBEYXRlVGltZS5mcm9tSVNPKGUsIG9wdHMpO1xuICAgICAgICBlbmRJc1ZhbGlkID0gZW5kLmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVuZElzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCAmJiBlbmRJc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRJc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5hZnRlcihzdGFydCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmRJc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08ocywgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBkdXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBJbnRlcnZhbC4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzSW50ZXJ2YWwobykge1xuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25JbnRlcnZhbCkgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhcnQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovXG4gIGdldCBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbmQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovXG4gIGdldCBlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYXQgbGVhc3QgaXRzIHN0YXJ0LCBtZWFuaW5nIHRoYXQgdGhlIEludGVydmFsIGlzbid0ICdiYWNrd2FyZHMnLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIEludGVydmFsIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gcmV0dXJuIHRoZSBsZW5ndGggaW4uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGxlbmd0aCh1bml0ID0gXCJtaWxsaXNlY29uZHNcIikge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvRHVyYXRpb24oLi4uW3VuaXRdKS5nZXQodW5pdCkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY291bnQgb2YgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgb3IgeWVhcnMgaW5jbHVkZWQgaW4gdGhlIEludGVydmFsLCBldmVuIGluIHBhcnQuXG4gICAqIFVubGlrZSB7QGxpbmsgSW50ZXJ2YWwjbGVuZ3RofSB0aGlzIGNvdW50cyBzZWN0aW9ucyBvZiB0aGUgY2FsZW5kYXIsIG5vdCBwZXJpb2RzIG9mIHRpbWUsIGUuZy4gc3BlY2lmeWluZyAnZGF5J1xuICAgKiBhc2tzICd3aGF0IGRhdGVzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGludGVydmFsPycsIG5vdCAnaG93IG1hbnkgZGF5cyBsb25nIGlzIHRoaXMgaW50ZXJ2YWw/J1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuaXQ9J21pbGxpc2Vjb25kcyddIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY291bnQodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuc3RhcnQuc3RhcnRPZih1bml0KSxcbiAgICAgIGVuZCA9IHRoaXMuZW5kLnN0YXJ0T2YodW5pdCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KSkgKyAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgYW5kIGVuZCBhcmUgYm90aCBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNTYW1lKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5pc0VtcHR5KCkgfHwgdGhpcy5lLm1pbnVzKDEpLmhhc1NhbWUodGhpcy5zLCB1bml0KSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgRGF0ZVRpbWVzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zLnZhbHVlT2YoKSA9PT0gdGhpcy5lLnZhbHVlT2YoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWZ0ZXIgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQWZ0ZXIoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPiBkYXRlVGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGJlZm9yZSB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNCZWZvcmUoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLmUgPD0gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBjb250YWlucyB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgY29udGFpbnMoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPD0gZGF0ZVRpbWUgJiYgdGhpcy5lID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRzXCIgdGhlIHN0YXJ0IGFuZC9vciBlbmQgZGF0ZXMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSB2YWx1ZXMgdG8gc2V0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5zdGFydCAtIHRoZSBzdGFydGluZyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuZW5kIC0gdGhlIGVuZGluZyBEYXRlVGltZVxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHNldCh7IHN0YXJ0LCBlbmQgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0IHx8IHRoaXMucywgZW5kIHx8IHRoaXMuZSk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBhdCBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRBdCguLi5kYXRlVGltZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHNvcnRlZCA9IGRhdGVUaW1lc1xuICAgICAgICAubWFwKGZyaWVuZGx5RGF0ZVRpbWUpXG4gICAgICAgIC5maWx0ZXIoKGQpID0+IHRoaXMuY29udGFpbnMoZCkpXG4gICAgICAgIC5zb3J0KCksXG4gICAgICByZXN1bHRzID0gW107XG4gICAgbGV0IHsgcyB9ID0gdGhpcyxcbiAgICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKHMgPCB0aGlzLmUpIHtcbiAgICAgIGNvbnN0IGFkZGVkID0gc29ydGVkW2ldIHx8IHRoaXMuZSxcbiAgICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcbiAgICAgIHMgPSBuZXh0O1xuICAgICAgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzcGxpdEJ5KGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhZHVyLmlzVmFsaWQgfHwgZHVyLmFzKFwibWlsbGlzZWNvbmRzXCIpID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IHsgcyB9ID0gdGhpcyxcbiAgICAgIGlkeCA9IDEsXG4gICAgICBuZXh0O1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBjb25zdCBhZGRlZCA9IHRoaXMuc3RhcnQucGx1cyhkdXIubWFwVW5pdHMoKHgpID0+IHggKiBpZHgpKTtcbiAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGlkeCArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzbWFsbGVyIGludGVydmFscy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mUGFydHMgLSBUaGUgbnVtYmVyIG9mIEludGVydmFscyB0byBkaXZpZGUgdGhlIEludGVydmFsIGludG8uXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGl2aWRlRXF1YWxseShudW1iZXJPZlBhcnRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gdGhpcy5zcGxpdEJ5KHRoaXMubGVuZ3RoKCkgLyBudW1iZXJPZlBhcnRzKS5zbGljZSgwLCBudW1iZXJPZlBhcnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIG92ZXJsYXBzIHdpdGggdGhlIHNwZWNpZmllZCBJbnRlcnZhbFxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgb3ZlcmxhcHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5lID4gb3RoZXIucyAmJiB0aGlzLnMgPCBvdGhlci5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIHN0YXJ0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgYWJ1dHNTdGFydChvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICt0aGlzLmUgPT09ICtvdGhlci5zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBpcyBhZGphY2VudCB0byB0aGUgc3BlY2lmaWVkIEludGVydmFsJ3MgZW5kLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgYWJ1dHNFbmQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArb3RoZXIuZSA9PT0gK3RoaXMucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGVuZ3VsZnMgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVuZ3VsZnMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPD0gb3RoZXIucyAmJiB0aGlzLmUgPj0gb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIGFzIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnMuZXF1YWxzKG90aGVyLnMpICYmIHRoaXMuZS5lcXVhbHMob3RoZXIuZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgYW5kIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHJlc3VsdGluZyBJbnRlcnZhbCBoYXMgdGhlIG1heGltdW0gc3RhcnQgdGltZSBhbmQgdGhlIG1pbmltdW0gZW5kIHRpbWUgb2YgdGhlIHR3byBJbnRlcnZhbHMuXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGUgaW50ZXJzZWN0aW9uIGlzIGVtcHR5LCBtZWFuaW5nLCB0aGUgaW50ZXJ2YWxzIGRvbid0IGludGVyc2VjdC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgcyA9IHRoaXMucyA+IG90aGVyLnMgPyB0aGlzLnMgOiBvdGhlci5zLFxuICAgICAgZSA9IHRoaXMuZSA8IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lO1xuXG4gICAgaWYgKHMgPj0gZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSB1bmlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtaW5pbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtYXhpbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHVuaW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnMgPCBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPiBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBhbiBhcnJheSBvZiBJbnRlcnZhbHMgaW50byBhIGVxdWl2YWxlbnQgbWluaW1hbCBzZXQgb2YgSW50ZXJ2YWxzLlxuICAgKiBDb21iaW5lcyBvdmVybGFwcGluZyBhbmQgYWRqYWNlbnQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbWVyZ2UoaW50ZXJ2YWxzKSB7XG4gICAgY29uc3QgW2ZvdW5kLCBmaW5hbF0gPSBpbnRlcnZhbHNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnMgLSBiLnMpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoW3NvZmFyLCBjdXJyZW50XSwgaXRlbSkgPT4ge1xuICAgICAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFtzb2ZhciwgaXRlbV07XG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm92ZXJsYXBzKGl0ZW0pIHx8IGN1cnJlbnQuYWJ1dHNTdGFydChpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtzb2ZhciwgY3VycmVudC51bmlvbihpdGVtKV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIuY29uY2F0KFtjdXJyZW50XSksIGl0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1tdLCBudWxsXVxuICAgICAgKTtcbiAgICBpZiAoZmluYWwpIHtcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIEludGVydmFscyByZXByZXNlbnRpbmcgdGhlIHNwYW5zIG9mIHRpbWUgdGhhdCBvbmx5IGFwcGVhciBpbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyB4b3IoaW50ZXJ2YWxzKSB7XG4gICAgbGV0IHN0YXJ0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnRDb3VudCA9IDA7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdLFxuICAgICAgZW5kcyA9IGludGVydmFscy5tYXAoKGkpID0+IFtcbiAgICAgICAgeyB0aW1lOiBpLnMsIHR5cGU6IFwic1wiIH0sXG4gICAgICAgIHsgdGltZTogaS5lLCB0eXBlOiBcImVcIiB9LFxuICAgICAgXSksXG4gICAgICBmbGF0dGVuZWQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmVuZHMpLFxuICAgICAgYXJyID0gZmxhdHRlbmVkLnNvcnQoKGEsIGIpID0+IGEudGltZSAtIGIudGltZSk7XG5cbiAgICBmb3IgKGNvbnN0IGkgb2YgYXJyKSB7XG4gICAgICBjdXJyZW50Q291bnQgKz0gaS50eXBlID09PSBcInNcIiA/IDEgOiAtMTtcblxuICAgICAgaWYgKGN1cnJlbnRDb3VudCA9PT0gMSkge1xuICAgICAgICBzdGFydCA9IGkudGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGFydCAmJiArc3RhcnQgIT09ICtpLnRpbWUpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgaS50aW1lKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEludGVydmFsLm1lcmdlKHJlc3VsdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHNwYW4gb2YgdGltZSBpbiB0aGlzIEludGVydmFsIHRoYXQgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0gey4uLkludGVydmFsfSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBkaWZmZXJlbmNlKC4uLmludGVydmFscykge1xuICAgIHJldHVybiBJbnRlcnZhbC54b3IoW3RoaXNdLmNvbmNhdChpbnRlcnZhbHMpKVxuICAgICAgLm1hcCgoaSkgPT4gdGhpcy5pbnRlcnNlY3Rpb24oaSkpXG4gICAgICAuZmlsdGVyKChpKSA9PiBpICYmICFpLmlzRW1wdHkoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYFske3RoaXMucy50b0lTTygpfSDigJMgJHt0aGlzLmUudG9JU08oKX0pYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTyhvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU08ob3B0cyl9LyR7dGhpcy5lLnRvSVNPKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGRhdGUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIHRpbWUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT0RhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU09EYXRlKCl9LyR7dGhpcy5lLnRvSVNPRGF0ZSgpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIGRhdGUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPVGltZShvcHRzKX0vJHt0aGlzLmUudG9JU09UaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZUZvcm1hdCAtIHRoZSBmb3JtYXQgc3RyaW5nLiBUaGlzIHN0cmluZyBmb3JtYXRzIHRoZSBzdGFydCBhbmQgZW5kIHRpbWUuIFNlZSB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9IGZvciBkZXRhaWxzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLnNlcGFyYXRvciA9ICAnIOKAkyAnXSAtIGEgc2VwYXJhdG9yIHRvIHBsYWNlIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgcmVwcmVzZW50YXRpb25zXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGRhdGVGb3JtYXQsIHsgc2VwYXJhdG9yID0gXCIg4oCTIFwiIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvRm9ybWF0KGRhdGVGb3JtYXQpfSR7c2VwYXJhdG9yfSR7dGhpcy5lLnRvRm9ybWF0KGRhdGVGb3JtYXQpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmUuZGlmZih0aGlzLnMsIHVuaXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKVxuICAgKi9cbiAgbWFwRW5kcG9pbnRzKG1hcEZuKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMobWFwRm4odGhpcy5zKSwgbWFwRm4odGhpcy5lKSk7XG4gIH1cbn1cbiIsImltcG9ydCBTeXN0ZW1ab25lIGZyb20gXCIuL3pvbmVzL3N5c3RlbVpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IExvY2FsZSBmcm9tIFwiLi9pbXBsL2xvY2FsZS5qc1wiO1xuXG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuXG5sZXQgbm93ID0gKCkgPT4gRGF0ZS5ub3coKSxcbiAgZGVmYXVsdFpvbmUgPSBcInN5c3RlbVwiLFxuICBkZWZhdWx0TG9jYWxlID0gbnVsbCxcbiAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bGwsXG4gIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG51bGwsXG4gIHRocm93T25JbnZhbGlkO1xuXG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgbm93KCkge1xuICAgIHJldHVybiBub3c7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBudW1iZXIsIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYW4gRXBvY2ggbWlsbGlzZWNvbmQgY291bnRcbiAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IDAgLy8gYWx3YXlzIHByZXRlbmQgaXQncyBKYW4gMSwgMTk3MCBhdCBtaWRuaWdodCBpbiBVVEMgdGltZVxuICAgKi9cbiAgc3RhdGljIHNldCBub3cobikge1xuICAgIG5vdyA9IG47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0Wm9uZSh6b25lKSB7XG4gICAgZGVmYXVsdFpvbmUgPSB6b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IGN1cnJlbnRseSB1c2VkIHRvIGNyZWF0ZSBEYXRlVGltZXMuIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxuICAgKiBAdHlwZSB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFpvbmUoKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoZGVmYXVsdFpvbmUsIFN5c3RlbVpvbmUuaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0TG9jYWxlKGxvY2FsZSkge1xuICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbShudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKG91dHB1dENhbGVuZGFyKSB7XG4gICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGdldCB0aHJvd09uSW52YWxpZCgpIHtcbiAgICByZXR1cm4gdGhyb3dPbkludmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIHNldCB0aHJvd09uSW52YWxpZCh0KSB7XG4gICAgdGhyb3dPbkludmFsaWQgPSB0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IEx1eG9uJ3MgZ2xvYmFsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc3RhdGljIHJlc2V0Q2FjaGVzKCkge1xuICAgIExvY2FsZS5yZXNldENhY2hlKCk7XG4gICAgSUFOQVpvbmUucmVzZXRDYWNoZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBab25lSXNBYnN0cmFjdEVycm9yIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab25lIHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoaXMgem9uZS5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgb2Zmc2V0TmFtZSh0cywgb3B0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmdcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBvZmZzZXQodHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRPZmZzZXQsIHBhcnNlWm9uZUluZm8sIGlzVW5kZWZpbmVkLCBpYW5hUmVnZXgsIG9ialRvTG9jYWxUUyB9IGZyb20gXCIuLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbmNvbnN0IG1hdGNoaW5nUmVnZXggPSBSZWdFeHAoYF4ke2lhbmFSZWdleC5zb3VyY2V9JGApO1xuXG5sZXQgZHRmQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIG1ha2VEVEYoem9uZSkge1xuICBpZiAoIWR0ZkNhY2hlW3pvbmVdKSB7XG4gICAgZHRmQ2FjaGVbem9uZV0gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgICB0aW1lWm9uZTogem9uZSxcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGR0ZkNhY2hlW3pvbmVdO1xufVxuXG5jb25zdCB0eXBlVG9Qb3MgPSB7XG4gIHllYXI6IDAsXG4gIG1vbnRoOiAxLFxuICBkYXk6IDIsXG4gIGhvdXI6IDMsXG4gIG1pbnV0ZTogNCxcbiAgc2Vjb25kOiA1LFxufTtcblxuZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIGNvbnN0IGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXQoZGF0ZSkucmVwbGFjZSgvXFx1MjAwRS9nLCBcIlwiKSxcbiAgICBwYXJzZWQgPSAvKFxcZCspXFwvKFxcZCspXFwvKFxcZCspLD8gKFxcZCspOihcXGQrKTooXFxkKykvLmV4ZWMoZm9ybWF0dGVkKSxcbiAgICBbLCBmTW9udGgsIGZEYXksIGZZZWFyLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF0gPSBwYXJzZWQ7XG4gIHJldHVybiBbZlllYXIsIGZNb250aCwgZkRheSwgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdO1xufVxuXG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gZHRmLmZvcm1hdFRvUGFydHMoZGF0ZSksXG4gICAgZmlsbGVkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gZm9ybWF0dGVkW2ldLFxuICAgICAgcG9zID0gdHlwZVRvUG9zW3R5cGVdO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWxsZWQ7XG59XG5cbmxldCBpYW5hWm9uZUNhY2hlID0ge307XG4vKipcbiAqIEEgem9uZSBpZGVudGlmaWVkIGJ5IGFuIElBTkEgaWRlbnRpZmllciwgbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSUFOQVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gWm9uZSBuYW1lXG4gICAqIEByZXR1cm4ge0lBTkFab25lfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShuYW1lKSB7XG4gICAgaWYgKCFpYW5hWm9uZUNhY2hlW25hbWVdKSB7XG4gICAgICBpYW5hWm9uZUNhY2hlW25hbWVdID0gbmV3IElBTkFab25lKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gaWFuYVpvbmVDYWNoZVtuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBsb2NhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHN0YXRpYyByZXNldENhY2hlKCkge1xuICAgIGlhbmFab25lQ2FjaGUgPSB7fTtcbiAgICBkdGZDYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlzIGEgdmFsaWQgc3BlY2lmaWVyLiBUaGlzIG9ubHkgY2hlY2tzIHRoZSBzdHJpbmcncyBmb3JtYXQsIG5vdCB0aGF0IHRoZSBzcGVjaWZpZXIgaWRlbnRpZmllcyBhIGtub3duIHpvbmU7IHNlZSBpc1ZhbGlkWm9uZSBmb3IgdGhhdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgc3RyaW5nIHRvIGNoZWNrIHZhbGlkaXR5IG9uXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcbiAgICByZXR1cm4gISEocyAmJiBzLm1hdGNoKG1hdGNoaW5nUmVnZXgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpZGVudGlmaWVzIGEgcmVhbCB6b25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gVGhlIHN0cmluZyB0byBjaGVja1xuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gZmFsc2VcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRab25lKHpvbmUpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwgeyB0aW1lWm9uZTogem9uZSB9KS5mb3JtYXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy56b25lTmFtZSA9IG5hbWU7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMudmFsaWQgPSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImlhbmFcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUodHMsIHsgZm9ybWF0LCBsb2NhbGUgfSkge1xuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSwgdGhpcy5uYW1lKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQodHMpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodHMpO1xuXG4gICAgaWYgKGlzTmFOKGRhdGUpKSByZXR1cm4gTmFOO1xuXG4gICAgY29uc3QgZHRmID0gbWFrZURURih0aGlzLm5hbWUpLFxuICAgICAgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kXSA9IGR0Zi5mb3JtYXRUb1BhcnRzXG4gICAgICAgID8gcGFydHNPZmZzZXQoZHRmLCBkYXRlKVxuICAgICAgICA6IGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSk7XG5cbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHVzaW5nIGhvdXIxMiBhbmQgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTAyNTU2NCZjYW49MiZxPSUyMjI0JTNBMDAlMjIlMjBkYXRldGltZWZvcm1hdFxuICAgIGNvbnN0IGFkanVzdGVkSG91ciA9IGhvdXIgPT09IDI0ID8gMCA6IGhvdXI7XG5cbiAgICBjb25zdCBhc1VUQyA9IG9ialRvTG9jYWxUUyh7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXksXG4gICAgICBob3VyOiBhZGp1c3RlZEhvdXIsXG4gICAgICBtaW51dGUsXG4gICAgICBzZWNvbmQsXG4gICAgICBtaWxsaXNlY29uZDogMCxcbiAgICB9KTtcblxuICAgIGxldCBhc1RTID0gK2RhdGU7XG4gICAgY29uc3Qgb3ZlciA9IGFzVFMgJSAxMDAwO1xuICAgIGFzVFMgLT0gb3ZlciA+PSAwID8gb3ZlciA6IDEwMDAgKyBvdmVyO1xuICAgIHJldHVybiAoYXNVVEMgLSBhc1RTKSAvICg2MCAqIDEwMDApO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJpYW5hXCIgJiYgb3RoZXJab25lLm5hbWUgPT09IHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnZhbGlkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRPZmZzZXQsIHNpZ25lZE9mZnNldCB9IGZyb20gXCIuLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlZE9mZnNldFpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBVVENcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCB1dGNJbnN0YW5jZSgpIHtcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24gPSBuZXcgRml4ZWRPZmZzZXRab25lKDApO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSB3aXRoIGEgc3BlY2lmaWVkIG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCBpbiBtaW51dGVzXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZShvZmZzZXQpIHtcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSBvZiBGaXhlZE9mZnNldFpvbmUgZnJvbSBhIFVUQyBvZmZzZXQgc3RyaW5nLCBsaWtlIFwiVVRDKzZcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBvZmZzZXQgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQys2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQyswNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMtNjowMFwiKVxuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgcGFyc2VTcGVjaWZpZXIocykge1xuICAgIGlmIChzKSB7XG4gICAgICBjb25zdCByID0gcy5tYXRjaCgvXnV0Yyg/OihbKy1dXFxkezEsMn0pKD86OihcXGR7Mn0pKT8pPyQvaSk7XG4gICAgICBpZiAocikge1xuICAgICAgICByZXR1cm4gbmV3IEZpeGVkT2Zmc2V0Wm9uZShzaWduZWRPZmZzZXQoclsxXSwgclsyXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9mZnNldCkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gXCJmaXhlZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyBcIlVUQ1wiIDogYFVUQyR7Zm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIFwibmFycm93XCIpfWA7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09IFwiZml4ZWRcIiAmJiBvdGhlclpvbmUuZml4ZWQgPT09IHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxuLyoqXG4gKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWRab25lIGV4dGVuZHMgWm9uZSB7XG4gIGNvbnN0cnVjdG9yKHpvbmVOYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogIEBwcml2YXRlICovXG4gICAgdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvIH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgbG9jYWwgem9uZVxuICAgKiBAcmV0dXJuIHtTeXN0ZW1ab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24gPSBuZXcgU3lzdGVtWm9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwic3lzdGVtXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBib29rc0RhdGEge1xuICBzdGF0aWMgZmV0Y2hEYXRhKCkge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib29rcycpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9va3MnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va3MnKSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlRGF0YShkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb2tzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59IiwiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbi9zcmMvbHV4b24uanMnO1xyXG5cclxuY29uc3QgZGlzcGxheURhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVza3RvcERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcC1kYXRlJyk7XHJcbiAgY29uc3QgbW9iaWxlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtZGF0ZScpO1xyXG4gIGNvbnN0IGR0ID0gRGF0ZVRpbWUubm93KCk7XHJcbiAgZGVza3RvcERhdGUuaW5uZXJIVE1MID0gZHQudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyk7XHJcbiAgbW9iaWxlRGF0ZS5pbm5lckhUTUwgPSBgXHJcbiAgPHNwYW4+JHtkdC50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1dJVEhfU0VDT05EUyl9PC9zcGFuPlxyXG4gIDxici8+XHJcbiAgPHNwYW4+JHtkdC50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheURhdGU7IiwiaW1wb3J0IGJvb2tzRGF0YSBmcm9tICcuL2Jvb2tzLWRhdGEuanMnO1xyXG5cclxuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rcycpO1xyXG5cclxuY2xhc3MgZGlzcGxheUxpYnJhcnkge1xyXG4gIHN0YXRpYyBsb2FkQm9va3MoKSB7XHJcbiAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgbG9jYWxCb29rcyA9IGJvb2tzRGF0YS5mZXRjaERhdGEoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxCb29rcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiYm9va1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJib29rLWluZm9cIj4ke2xvY2FsQm9va3NbaV0udGl0bGUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgIDxzcGFuPmJ5PC9zcGFuPlxyXG4gICAgICAgICAgJHtsb2NhbEJvb2tzW2ldLmF1dGhvci50b1VwcGVyQ2FzZSgpfTwvcD5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCIke2l9XCIgY2xhc3M9XCJyZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5gO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbGlicmFyeU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LW1lc3NhZ2UnKTtcclxuICBpZiAoYm9va3NEYXRhLmZldGNoRGF0YSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbXB0eU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5TGlicmFyeSwgbGlicmFyeU1lc3NhZ2UgfTsiLCJpbXBvcnQge1xyXG4gIG1vZGFsQ29udGFpbmVyLCB1c2VyRGF0YSwgZ3JlZXRVc2VyLCB1c2VyTmFtZSxcclxufSBmcm9tICcuL3VzZXIuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5TGlicmFyeSwgbGlicmFyeU1lc3NhZ2UgfSBmcm9tICcuL2Rpc3BsYXktYm9va3MuanMnO1xyXG5pbXBvcnQgbWFuaXB1bGF0ZUJvb2tzIGZyb20gJy4vZWRpdC1saWJyYXJ5LmpzJztcclxuaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gJy4vbmF2aWdhdGlvbnMuanMnO1xyXG5pbXBvcnQgYm9va3NEYXRhIGZyb20gJy4vYm9va3MtZGF0YS5qcyc7XHJcblxyXG5jb25zdCBrZXlVcCA9IChlLCBidG4pID0+IHtcclxuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYnRuLmNsaWNrKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcclxuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tzJyk7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LCAuZmEtYm9vaycpO1xyXG4gIGNvbnN0IGdvQWRkQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtYm9vaywgLmZhLXBsdXMtc3F1YXJlJyk7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0Jyk7XHJcbiAgY29uc3QgZ29Ub0FkZFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW1lc3NhZ2UnKTtcclxuICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dGhvcicpO1xyXG4gIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtYmFycycpO1xyXG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmtzLm1vYmlsZScpO1xyXG4gIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWhvbWUnKTtcclxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtdGltZXMnKTtcclxuICBjb25zdCBib29rc0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtYm9vaycpO1xyXG4gIGNvbnN0IGFkZEJvb2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXBsdXMtc3F1YXJlJyk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgbGlzdC5mb3JFYWNoKChuKSA9PiB7XHJcbiAgICAgIG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1mb2N1cycpO1xyXG4gICAgfSk7XHJcbiAgICB1c2VyTmFtZSgpXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSAhPT0gbnVsbCAmJiB1c2VyRGF0YS5mZXRjaERhdGEoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGdyZWV0VXNlcigpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheUxpYnJhcnkubG9hZEJvb2tzKCk7XHJcbiAgICBsaWJyYXJ5TWVzc2FnZSgpO1xyXG4gIH0pO1xyXG5cclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9iaWxlTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgaG9tZUhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG5cclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2JpbGVNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBob21lSGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgfSk7XHJcblxyXG4gIG1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbnRlcicpKSB7XHJcbiAgICAgIGlmIChuYW1lLnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgIGV2ZW50LnBhdGhbM10uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29uc3QgdXNlcmRhdGEgPSB7IHVzZXJuYW1lOiBuYW1lLnZhbHVlIH07XHJcbiAgICAgICAgY29uc3QgbG9jYWxEYXRhID0gdXNlckRhdGEuZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgbG9jYWxEYXRhLnB1c2godXNlcmRhdGEpO1xyXG4gICAgICAgIHVzZXJEYXRhLnNldERhdGEobG9jYWxEYXRhKTtcclxuICAgICAgICBncmVldFVzZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1hbmlwdWxhdGVCb29rcy5hZGRCb29rKCk7XHJcbiAgICBkaXNwbGF5TGlicmFyeS5sb2FkQm9va3MoKTtcclxuICAgIGxpYnJhcnlNZXNzYWdlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGJvb2tBdXRob3IuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgIGtleVVwKGV2ZW50LCBhZGRCdXR0b24pO1xyXG4gIH0pO1xyXG5cclxuICBib29rVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgIGtleVVwKGV2ZW50LCBhZGRCdXR0b24pO1xyXG4gIH0pO1xyXG5cclxuICBtb2RhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3VzZXInKSkge1xyXG4gICAgICBjb25zdCBlbnRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXInKTtcclxuICAgICAga2V5VXAoZXZlbnQsIGVudGVyTmFtZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGxpc3QuZm9yRWFjaCgobikgPT4ge1xyXG4gICAgbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbmF2aWdhdGlvbi5zaG93TGlzdCgpO1xyXG4gICAgICBsaWJyYXJ5TWVzc2FnZSgpO1xyXG4gICAgICBhZGRCb29rSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgYm9va3NJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZ29BZGRCb29rLmZvckVhY2goKG4pID0+IHtcclxuICAgIG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRpb24uc2hvd0FkZEJvb2soKTtcclxuICAgICAgbGlicmFyeU1lc3NhZ2UoKTtcclxuICAgICAgYWRkQm9va0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgYm9va3NJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhY3QuZm9yRWFjaCgobikgPT4ge1xyXG4gICAgbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbmF2aWdhdGlvbi5zaG93Q29udGFjdEluZm8oKTtcclxuICAgICAgbGlicmFyeU1lc3NhZ2UoKTtcclxuICAgICAgYWRkQm9va0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgYm9va3NJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGdvVG9BZGRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbmF2aWdhdGlvbi5zaG93QWRkQm9vaygpO1xyXG4gICAgbGlicmFyeU1lc3NhZ2UoKTtcclxuICB9KTtcclxuXHJcbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgbWFuaXB1bGF0ZUJvb2tzLnJlbW92ZUJvb2soZXZlbnQpO1xyXG4gICAgZGlzcGxheUxpYnJhcnkubG9hZEJvb2tzKCk7XHJcbiAgICBsaWJyYXJ5TWVzc2FnZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xyXG4iLCJpbXBvcnQgYm9va3NEYXRhIGZyb20gJy4vYm9va3MtZGF0YS5qcyc7XG5cbmNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yJyk7XG5jb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbmNvbnN0IGFkZGVkTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYWRkZWQtbXNnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hbmlwdWxhdGVCb29rcyB7XG4gIHN0YXRpYyByZW1vdmVCb29rKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09PSAncmVtb3ZlJykge1xuICAgICAgY29uc3QgaWQgPSBOdW1iZXIoZS50YXJnZXQuaWQpO1xuICAgICAgY29uc3Qgc3RvcmVkQm9va3MgPSBib29rc0RhdGEuZmV0Y2hEYXRhKCk7XG4gICAgICBtYW5pcHVsYXRlQm9va3MuZGVsZXRlQm9vayhpZCwgc3RvcmVkQm9va3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVCb29rKGluZGV4LCBhcnIpIHtcbiAgICBkZWxldGUgYXJyW2luZGV4XTtcbiAgICBjb25zdCBuZXdCb29rcyA9IGFyci5maWx0ZXIoKHZhbCkgPT4gdmFsICE9PSBudWxsKTtcbiAgICBib29rc0RhdGEudXBkYXRlRGF0YShuZXdCb29rcyk7XG4gIH1cblxuICBzdGF0aWMgYWRkQm9vaygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb2tzJykgPT09IG51bGwpIHtcbiAgICAgIGJvb2tzRGF0YS51cGRhdGVEYXRhKFtdKTtcbiAgICB9XG4gICAgaWYgKGJvb2tBdXRob3IudmFsdWUgIT09ICcnICYmIGJvb2tUaXRsZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld0Jvb2tzID0gYm9va3NEYXRhLmZldGNoRGF0YSgpO1xuICAgICAgY29uc3QgbmV3Qm9vayA9IHsgYXV0aG9yOiBib29rQXV0aG9yLnZhbHVlLCB0aXRsZTogYm9va1RpdGxlLnZhbHVlIH07XG4gICAgICBuZXdCb29rcy5wdXNoKG5ld0Jvb2spO1xuICAgICAgYm9va3NEYXRhLnVwZGF0ZURhdGEobmV3Qm9va3MpO1xuICAgICAgYm9va0F1dGhvci52YWx1ZSA9ICcnO1xuICAgICAgYm9va1RpdGxlLnZhbHVlID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYWRkZWRNc2cuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IH0sIDMwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYWRkZWRNc2cuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSwgMTUwMCk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBib29rc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rcy1jb250YWluZXInKTtcbmNvbnN0IGdvQWRkQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtYm9vaywgLmZhLXBsdXMtc3F1YXJlJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QnKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpO1xuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCcpO1xuY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1pbmZvJyk7XG5cbmNsYXNzIG5hdmlnYXRpb24ge1xuICBzdGF0aWMgc2hvd0xpc3QoKSB7XG4gICAgYm9va3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdEluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0LmZvckVhY2goKG4pID0+IHtcbiAgICAgIG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1mb2N1cycpO1xuICAgIH0pO1xuICAgIGdvQWRkQm9vay5mb3JFYWNoKChuKSA9PiB7XG4gICAgICBpZiAobi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1ib29rJykpIHtcbiAgICAgICAgbi5jbGFzc0xpc3QucmVtb3ZlKCdhZGQtYm9vay1mb2N1cycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnRhY3QuZm9yRWFjaCgobikgPT4ge1xuICAgICAgbi5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0LWZvY3VzJyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FkZEJvb2soKSB7XG4gICAgaW5wdXRGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGJvb2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdEluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBnb0FkZEJvb2suZm9yRWFjaCgobikgPT4ge1xuICAgICAgaWYgKG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYm9vaycpKSB7XG4gICAgICAgIG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJvb2stZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsaXN0LmZvckVhY2goKG4pID0+IHtcbiAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1mb2N1cycpO1xuICAgIH0pO1xuICAgIGNvbnRhY3QuZm9yRWFjaCgobikgPT4ge1xuICAgICAgbi5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0LWZvY3VzJyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0NvbnRhY3RJbmZvKCkge1xuICAgIGNvbnRhY3RJbmZvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgYm9va3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdC5mb3JFYWNoKChuKSA9PiB7XG4gICAgICBuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9jdXMnKTtcbiAgICB9KTtcbiAgICBnb0FkZEJvb2suZm9yRWFjaCgobikgPT4ge1xuICAgICAgaWYgKG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYm9vaycpKSB7XG4gICAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZSgnYWRkLWJvb2stZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsaXN0LmZvckVhY2goKG4pID0+IHtcbiAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1mb2N1cycpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IG5hdmlnYXRpb24sIGJvb2tzQ29udGFpbmVyIH07IiwiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbi9zcmMvbHV4b24uanMnO1xyXG5cclxuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJyk7XHJcblxyXG5jbGFzcyB1c2VyRGF0YSB7XHJcbiAgc3RhdGljIGZldGNoRGF0YSgpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgPT09IG51bGwpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0RGF0YShkYXRhKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJOYW1lID0gKCkgPT4ge1xyXG4gIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgIDxoMSBjbGFzcz1cImdyZWV0aW5nXCI+XHJcbiAgICAgICA8c3Bhbj5IZXkgdGhlcmUgbmV3IGZyaWVuZC48L3NwYW4+XHJcbiAgICAgICA8c3Bhbj5JJ20geW91ciBwZXJzb25hbCBsaWJyYXJ5Ljwvc3Bhbj5cclxuICAgIDwvaDE+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQgc2hvdWxkIEkgY2FsbCB5b3U/XCIgdmFsdWU9XCJcIiBjbGFzcz1cInVzZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVudGVyXCI+RW50ZXI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbn07XHJcblxyXG5jb25zdCBncmVldFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ3JlZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JlZXQnKTtcclxuICBjb25zdCB7IGhvdXIgfSA9IERhdGVUaW1lLm5vdygpO1xyXG4gIGlmIChob3VyIDwgMTIpIHtcclxuICAgIGdyZWV0LmlubmVySFRNTCA9IGAkeydHb29kIE1vcm5pbmcnfSAke3VzZXJEYXRhLmZldGNoRGF0YSgpWzBdLnVzZXJuYW1lfWA7XHJcbiAgfSBlbHNlIGlmIChob3VyID49IDEyICYmIGhvdXIgPCAxOCkge1xyXG4gICAgZ3JlZXQuaW5uZXJIVE1MID0gYCR7J0dvb2QgQWZ0ZXJub29uJ30gJHt1c2VyRGF0YS5mZXRjaERhdGEoKVswXS51c2VybmFtZX1gO1xyXG4gIH0gZWxzZSBpZiAoaG91ciA+PSAxOCkge1xyXG4gICAgZ3JlZXQuaW5uZXJIVE1MID0gYCR7J0dvb2QgRXZlbmluZyd9ICR7dXNlckRhdGEuZmV0Y2hEYXRhKClbMF0udXNlcm5hbWV9YDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIG1vZGFsQ29udGFpbmVyLCB1c2VyTmFtZSwgZ3JlZXRVc2VyLCB1c2VyRGF0YSxcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCBkaXNwbGF5RGF0ZSBmcm9tICcuL21vZHVsZXMvZGF0ZXMuanMnO1xyXG5pbXBvcnQgeyBsaWJyYXJ5TWVzc2FnZSB9IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5LWJvb2tzLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL21vZHVsZXMvZG9tLWV2ZW50cy5qcyc7XHJcblxyXG5zZXRJbnRlcnZhbChkaXNwbGF5RGF0ZSwgMTAwMCk7XHJcbmxpYnJhcnlNZXNzYWdlKCk7XHJcbmV2ZW50cygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=