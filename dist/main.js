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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: skyblue;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  border: solid;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  color: white;\r\n}\r\n\r\n.nav-desktop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-mobile {\r\n  display: none;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\n.nav-desktop h2 {\r\n  font-size: clamp(2.3vw, 1.8rem, 1.8rem);\r\n  padding-left: 2em;\r\n  margin: 0.5em 0;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  padding: 0.4em 1.4em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n  font-size: max(1.3vw, 1rem);\r\n}\r\n\r\n.nav-links button {\r\n  background-color: darkblue;\r\n  color: white;\r\n  border: none;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n  padding: 0 1.5em;\r\n}\r\n\r\nfooter p {\r\n  font-size: max(1.5vw, 1.5rem);\r\n  font-weight: bold;\r\n  padding-left: 2em;\r\n}\r\n\r\n.contact-info p,\r\n.contact-info li {\r\n  font-size: max(1.5vw, 1.25rem);\r\n}\r\n\r\n.nav-links li + li {\r\n  border-left: 2px solid white;\r\n}\r\n\r\n.list-focus,\r\n.add-book-focus,\r\n.contact-focus {\r\n  text-decoration: underline red 4px;\r\n}\r\n\r\nmain {\r\n  margin-top: max(4.2vw, 3.8rem);\r\n  width: max(100%, 35rem);\r\n  margin-inline: auto;\r\n}\r\n\r\n.msg-date {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#greet {\r\n  font-weight: bold;\r\n  font-size: max(1.7vw, 1.4rem);\r\n  text-align: left;\r\n}\r\n\r\n.date {\r\n  text-align: right;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n}\r\n\r\n.date.mobile-date {\r\n  display: none;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 10rem;\r\n  left: 25%;\r\n  z-index: 1;\r\n  width: 50%;\r\n  border: rgba(0, 0, 139, 0.75) solid;\r\n  background-color: orange;\r\n  border-radius: 0.8rem;\r\n  padding-top: 0.5rem;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\n.greeting {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 3.5rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.greeting span {\r\n  display: block;\r\n}\r\n\r\n.user {\r\n  display: block;\r\n  margin: 2rem auto;\r\n  width: 40%;\r\n  padding: 0.8em 1em;\r\n  border-radius: 1rem;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n}\r\n\r\n.user:focus {\r\n  color: blue;\r\n  font-family: cursive;\r\n}\r\n\r\n.modal-buttons {\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.close,\r\n.enter {\r\n  padding: 0.5em 1em;\r\n  border-radius: 0.4rem;\r\n  border: 2px solid blue;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: max(3.2vw, 1.8rem);\r\n  margin-top: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.empty-message {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n  font-size: 2rem;\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  padding: max(1.5vw, 0.5rem);\r\n  border-radius: 1rem;\r\n  background-color: purple;\r\n  color: white;\r\n  display: none;\r\n  width: max(15vw, 10rem);\r\n}\r\n\r\n.empty-message p {\r\n  text-align: center;\r\n  font-size: max(1.5vw, 1rem);\r\n  margin: 0.4em;\r\n}\r\n\r\n.add-message {\r\n  text-align: center;\r\n  color: rgba(25, 25, 27, 0.75);\r\n  text-decoration: underline black;\r\n  background-color: purple;\r\n  border: none;\r\n  font-size: max(1.3vw, 1rem);\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  width: 100%;\r\n}\r\n\r\n.books-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 8rem;\r\n  font-size: max(2vw, 2rem);\r\n}\r\n\r\n.books {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: max(100%, 35rem);\r\n  margin-top: 1.8rem;\r\n}\r\n\r\n.book {\r\n  border: solid rgb(201, 41, 41);\r\n  width: max(70%, 30rem);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: relative;\r\n  padding: 0 1em;\r\n  margin-inline: auto;\r\n}\r\n\r\n.book-info {\r\n  font-size: max(1.3vw, 1.2rem);\r\n  color: white;\r\n}\r\n\r\n.books li:nth-child(odd) {\r\n  background-color: rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) {\r\n  background-color: rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.remove {\r\n  display: block;\r\n  align-self: center;\r\n  border: 2px solid rgba(128, 0, 128, 0.76);\r\n  font-size: max(1.2vw, 1rem);\r\n  padding: 0.5em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n}\r\n\r\n.books li:nth-child(odd) .remove {\r\n  border: 2px solid rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) .remove {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li p + p {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.input-field {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform input {\r\n  margin-bottom: 2.5rem;\r\n  padding: max(0.8vw, 0.5rem);\r\n  width: max(30vw, 20rem);\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  outline: none;\r\n  font-size: max(1.4vw, 1.5rem);\r\n}\r\n\r\n.book-added-msg {\r\n  font-size: max(1.4vw, 1.2rem);\r\n  font-style: italic;\r\n  color: blue;\r\n  margin-bottom: 1rem;\r\n  display: none;\r\n}\r\n\r\n.contact-info {\r\n  display: none;\r\n  font-size: 1.9rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 8.9em;\r\n}\r\n\r\n#reach-out {\r\n  padding-left: 0.3em;\r\n}\r\n\r\nfooter {\r\n  background-color: darkblue;\r\n  border: 0.2rem solid black;\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  color: white;\r\n}\r\n\r\n.fa-bars {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fa-plus-square {\r\n  display: none;\r\n}\r\n\r\n.fa-times {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .date.mobile-date {\r\n    display: block;\r\n  }\r\n\r\n  .date.desktop-date {\r\n    display: none;\r\n  }\r\n\r\n  .fa-plus-square {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: block;\r\n  }\r\n\r\n  .fa-book {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: none;\r\n  }\r\n\r\n  .nav-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .nav-mobile {\r\n    display: block;\r\n  }\r\n\r\n  .nav-links.mobile {\r\n    position: relative;\r\n    display: none;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 0.6rem 0;\r\n  }\r\n\r\n  .nav-links.mobile li:last-child {\r\n    border: none;\r\n    position: absolute;\r\n    right: 1.2rem;\r\n  }\r\n\r\n  .header-home {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 1.2rem;\r\n    align-items: center;\r\n  }\r\n\r\n  .nav-mobile h2 {\r\n    font-size: 1.7rem;\r\n  }\r\n\r\n  #greet {\r\n    width: 10rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: skyblue;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  border: solid;\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  color: white;\r\n}\r\n\r\n.nav-desktop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-mobile {\r\n  display: none;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\n.nav-desktop h2 {\r\n  font-size: clamp(2.3vw, 1.8rem, 1.8rem);\r\n  padding-left: 2em;\r\n  margin: 0.5em 0;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nform button {\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  padding: 0.4em 1.4em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n  font-size: max(1.3vw, 1rem);\r\n}\r\n\r\n.nav-links button {\r\n  background-color: darkblue;\r\n  color: white;\r\n  border: none;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n  padding: 0 1.5em;\r\n}\r\n\r\nfooter p {\r\n  font-size: max(1.5vw, 1.5rem);\r\n  font-weight: bold;\r\n  padding-left: 2em;\r\n}\r\n\r\n.contact-info p,\r\n.contact-info li {\r\n  font-size: max(1.5vw, 1.25rem);\r\n}\r\n\r\n.nav-links li + li {\r\n  border-left: 2px solid white;\r\n}\r\n\r\n.list-focus,\r\n.add-book-focus,\r\n.contact-focus {\r\n  text-decoration: underline red 4px;\r\n}\r\n\r\nmain {\r\n  margin-top: max(4.2vw, 3.8rem);\r\n  width: max(100%, 35rem);\r\n  margin-inline: auto;\r\n}\r\n\r\n.msg-date {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#greet {\r\n  font-weight: bold;\r\n  font-size: max(1.7vw, 1.4rem);\r\n  text-align: left;\r\n}\r\n\r\n.date {\r\n  text-align: right;\r\n  font-size: max(1.5vw, 1.3rem);\r\n  font-weight: bold;\r\n}\r\n\r\n.date.mobile-date {\r\n  display: none;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 10rem;\r\n  left: 25%;\r\n  z-index: 1;\r\n  width: 50%;\r\n  border: rgba(0, 0, 139, 0.75) solid;\r\n  background-color: orange;\r\n  border-radius: 0.8rem;\r\n  padding-top: 0.5rem;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\n.greeting {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 3.5rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.greeting span {\r\n  display: block;\r\n}\r\n\r\n.user {\r\n  display: block;\r\n  margin: 2rem auto;\r\n  width: 40%;\r\n  padding: 0.8em 1em;\r\n  border-radius: 1rem;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n}\r\n\r\n.user:focus {\r\n  color: blue;\r\n  font-family: cursive;\r\n}\r\n\r\n.modal-buttons {\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.close,\r\n.enter {\r\n  padding: 0.5em 1em;\r\n  border-radius: 0.4rem;\r\n  border: 2px solid blue;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: max(3.2vw, 1.8rem);\r\n  margin-top: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n.empty-message {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n  font-size: 2rem;\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  padding: max(1.5vw, 0.5rem);\r\n  border-radius: 1rem;\r\n  background-color: purple;\r\n  color: white;\r\n  display: none;\r\n  width: max(15vw, 10rem);\r\n}\r\n\r\n.empty-message p {\r\n  text-align: center;\r\n  font-size: max(1.5vw, 1rem);\r\n  margin: 0.4em;\r\n}\r\n\r\n.add-message {\r\n  text-align: center;\r\n  color: rgba(25, 25, 27, 0.75);\r\n  text-decoration: underline black;\r\n  background-color: purple;\r\n  border: none;\r\n  font-size: max(1.3vw, 1rem);\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  width: 100%;\r\n}\r\n\r\n.books-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 8rem;\r\n  font-size: max(2vw, 2rem);\r\n}\r\n\r\n.books {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: max(100%, 35rem);\r\n  margin-top: 1.8rem;\r\n}\r\n\r\n.book {\r\n  border: solid rgb(201, 41, 41);\r\n  width: max(70%, 30rem);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: relative;\r\n  padding: 0 1em;\r\n  margin-inline: auto;\r\n}\r\n\r\n.book-info {\r\n  font-size: max(1.3vw, 1.2rem);\r\n  color: white;\r\n}\r\n\r\n.books li:nth-child(odd) {\r\n  background-color: rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) {\r\n  background-color: rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.remove {\r\n  display: block;\r\n  align-self: center;\r\n  border: 2px solid rgba(128, 0, 128, 0.76);\r\n  font-size: max(1.2vw, 1rem);\r\n  padding: 0.5em;\r\n  box-shadow: 0.4rem 0.4rem 0.2rem black;\r\n  font-weight: bold;\r\n}\r\n\r\n.books li:nth-child(odd) .remove {\r\n  border: 2px solid rgba(128, 0, 128, 0.75);\r\n}\r\n\r\n.books li:nth-child(even) .remove {\r\n  border: 2px solid rgba(0, 0, 139, 0.75);\r\n}\r\n\r\n.books li p + p {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.input-field {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform input {\r\n  margin-bottom: 2.5rem;\r\n  padding: max(0.8vw, 0.5rem);\r\n  width: max(30vw, 20rem);\r\n  border: 0.2rem solid rgba(0, 0, 139, 0.75);\r\n  border-radius: 0.5rem;\r\n  outline: none;\r\n  font-size: max(1.4vw, 1.5rem);\r\n}\r\n\r\n.book-added-msg {\r\n  font-size: max(1.4vw, 1.2rem);\r\n  font-style: italic;\r\n  color: blue;\r\n  margin-bottom: 1rem;\r\n  display: none;\r\n}\r\n\r\n.contact-info {\r\n  display: none;\r\n  font-size: 1.9rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 8.9em;\r\n}\r\n\r\n#reach-out {\r\n  padding-left: 0.3em;\r\n}\r\n\r\nfooter {\r\n  background-color: darkblue;\r\n  border: 0.2rem solid black;\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  color: white;\r\n}\r\n\r\n.fa-bars {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fa-plus-square {\r\n  display: none;\r\n}\r\n\r\n.fa-times {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .date.mobile-date {\r\n    display: block;\r\n  }\r\n\r\n  .date.desktop-date {\r\n    display: none;\r\n  }\r\n\r\n  .fa-plus-square {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: block;\r\n  }\r\n\r\n  .fa-book {\r\n    color: blue;\r\n    position: fixed;\r\n    bottom: 7rem;\r\n    right: 1rem;\r\n    font-size: 3rem;\r\n    display: none;\r\n  }\r\n\r\n  .nav-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .nav-mobile {\r\n    display: block;\r\n  }\r\n\r\n  .nav-links.mobile {\r\n    position: relative;\r\n    display: none;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 0.6rem 0;\r\n  }\r\n\r\n  .nav-links.mobile li:last-child {\r\n    border: none;\r\n    position: absolute;\r\n    right: 1.2rem;\r\n  }\r\n\r\n  .header-home {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 1.2rem;\r\n    align-items: center;\r\n  }\r\n\r\n  .nav-mobile h2 {\r\n    font-size: 1.7rem;\r\n  }\r\n\r\n  #greet {\r\n    width: 10rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  <span>${dt.toLocaleString(luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__["default"].TIME_WITH_SECONDS)}</span> <br/>
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

function libraryMessage() {
  const emptyMessage = document.querySelector('.empty-message');
  if (_books_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData().length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}



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






function keyUp(e, btn) {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn.click();
  }
}

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
    if (localStorage.getItem('books') === null) {
      _books_data_js__WEBPACK_IMPORTED_MODULE_4__["default"].updateData([]);
    }
    if (localStorage.getItem('user') === null) {
      _user_js__WEBPACK_IMPORTED_MODULE_0__.userData.setData([]);
      (0,_user_js__WEBPACK_IMPORTED_MODULE_0__.userName)();
    }
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
    return JSON.parse(localStorage.getItem('user'));
  }

  static setData(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
}

function userName() {
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
}

function greetUser() {
  const greet = document.querySelector('#greet');
  const { hour } = luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__["default"].now();
  if (hour < 12) {
    greet.innerHTML = `${'Good Morning'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 12 && hour < 18) {
    greet.innerHTML = `${'Good Afternoon'} ${userData.fetchData()[0].username}`;
  } else if (hour >= 18) {
    greet.innerHTML = `${'Good Evening'} ${userData.fetchData()[0].username}`;
  }
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZ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TSIsInNvdXJjZXMiOlsid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvZGF0ZXRpbWUuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2R1cmF0aW9uLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZGlmZi5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9kaWdpdHMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZW5nbGlzaC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9mb3JtYXRzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2Zvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9pbnZhbGlkLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9yZWdleFBhcnNlci5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC90b2tlblBhcnNlci5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC91dGlsLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3pvbmVVdGlsLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbmZvLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmUuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL0lBTkFab25lLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9maXhlZE9mZnNldFpvbmUuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL2ludmFsaWRab25lLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9zeXN0ZW1ab25lLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9zcmMvbW9kdWxlcy9ib29rcy1kYXRhLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL21vZHVsZXMvZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LWJvb2tzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL21vZHVsZXMvZG9tLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9tb2R1bGVzL2VkaXQtbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi8uL3NyYy9tb2R1bGVzL25hdmlnYXRpb25zLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL21vZHVsZXMvdXNlci5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy1lczYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLWVzNi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MtZXM2Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtZGVza3RvcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tb2JpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1kZXNrdG9wIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi4zdncsIDEuOHJlbSwgMS44cmVtKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjRlbSAxLjRlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjRyZW0gMC4ycmVtIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjN2dywgMXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuM3JlbSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDAgMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxLjVyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyBwLFxcclxcbi5jb250YWN0LWluZm8gbGkge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuMjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpICsgbGkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZm9jdXMsXFxyXFxuLmFkZC1ib29rLWZvY3VzLFxcclxcbi5jb250YWN0LWZvY3VzIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJlZCA0cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogbWF4KDQuMnZ3LCAzLjhyZW0pO1xcclxcbiAgd2lkdGg6IG1heCgxMDAlLCAzNXJlbSk7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubXNnLWRhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2dyZWV0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS43dncsIDEuNHJlbSk7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxLjNyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLm1vYmlsZS1kYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwcmVtO1xcclxcbiAgbGVmdDogMjUlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IHJnYmEoMCwgMCwgMTM5LCAwLjc1KSBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0aW5nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmVldGluZyBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtIDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51c2VyOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1idXR0b25zIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UsXFxyXFxuLmVudGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDMuMnZ3LCAxLjhyZW0pO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktbWVzc2FnZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogbWF4KDEuNXZ3LCAwLjVyZW0pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4KDE1dncsIDEwcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5LW1lc3NhZ2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjV2dywgMXJlbSk7XFxyXFxuICBtYXJnaW46IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW1lc3NhZ2Uge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHJnYmEoMjUsIDI1LCAyNywgMC43NSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxcmVtKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMnZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogbWF4KDEwMCUsIDM1cmVtKTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMjAxLCA0MSwgNDEpO1xcclxcbiAgd2lkdGg6IG1heCg3MCUsIDMwcmVtKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1pbmZvIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxLjJyZW0pO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMjgsIDAsIDEyOCwgMC43Nik7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMXJlbSk7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjRyZW0gMC4ycmVtIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ib29rcyBsaTpudGgtY2hpbGQob2RkKSAucmVtb3ZlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTI4LCAwLCAxMjgsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGk6bnRoLWNoaWxkKGV2ZW4pIC5yZW1vdmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MgbGkgcCArIHAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IG1heCgwLjh2dywgMC41cmVtKTtcXHJcXG4gIHdpZHRoOiBtYXgoMzB2dywgMjByZW0pO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmdiYSgwLCAwLCAxMzksIDAuNzUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNHZ3LCAxLjVyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1hZGRlZC1tc2cge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS40dncsIDEuMnJlbSk7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuOXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDguOWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVhY2gtb3V0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC4zZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYmFycyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXBsdXMtc3F1YXJlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lcyB7XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLmRhdGUubW9iaWxlLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kYXRlLmRlc2t0b3AtZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtcGx1cy1zcXVhcmUge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDdyZW07XFxyXFxuICAgIHJpZ2h0OiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWJvb2sge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDdyZW07XFxyXFxuICAgIHJpZ2h0OiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWRlc2t0b3Age1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlua3MubW9iaWxlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5tb2JpbGUgbGk6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci1ob21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDEuMnJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbW9iaWxlIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZ3JlZXQge1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7OztFQUdFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JC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QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1kZXNrdG9wIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1vYmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWRlc2t0b3AgaDIge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgyLjN2dywgMS44cmVtLCAxLjhyZW0pO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxyXFxuICBtYXJnaW46IDAuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJnYmEoMCwgMCwgMTM5LCAwLjc1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtIDEuNGVtO1xcclxcbiAgYm94LXNoYWRvdzogMC40cmVtIDAuNHJlbSAwLjJyZW0gYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjV2dywgMS4zcmVtKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogMCAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuNXJlbSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIHAsXFxyXFxuLmNvbnRhY3QtaW5mbyBsaSB7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjV2dywgMS4yNXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkgKyBsaSB7XFxyXFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1mb2N1cyxcXHJcXG4uYWRkLWJvb2stZm9jdXMsXFxyXFxuLmNvbnRhY3QtZm9jdXMge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkIDRweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiBtYXgoNC4ydncsIDMuOHJlbSk7XFxyXFxuICB3aWR0aDogbWF4KDEwMCUsIDM1cmVtKTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tc2ctZGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JlZXQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjd2dywgMS40cmVtKTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS41dncsIDEuM3JlbSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUubW9iaWxlLWRhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTByZW07XFxyXFxuICBsZWZ0OiAyNSU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJvcmRlcjogcmdiYSgwLCAwLCAxMzksIDAuNzUpIHNvbGlkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZXRpbmcge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0aW5nIHNwYW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi51c2VyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgcGFkZGluZzogMC44ZW0gMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXI6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWJ1dHRvbnMge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSxcXHJcXG4uZW50ZXIge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMy4ydncsIDEuOHJlbSk7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eS1tZXNzYWdlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMTM5LCAwLjc1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiBtYXgoMS41dncsIDAuNXJlbSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiBtYXgoMTV2dywgMTByZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktbWVzc2FnZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuNXZ3LCAxcmVtKTtcXHJcXG4gIG1hcmdpbjogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtbWVzc2FnZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogcmdiYSgyNSwgMjUsIDI3LCAwLjc1KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS4zdncsIDFyZW0pO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxyXFxuICBmb250LXNpemU6IG1heCgydncsIDJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3Mge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiBtYXgoMTAwJSwgMzVyZW0pO1xcclxcbiAgbWFyZ2luLXRvcDogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vayB7XFxyXFxuICBib3JkZXI6IHNvbGlkIHJnYigyMDEsIDQxLCA0MSk7XFxyXFxuICB3aWR0aDogbWF4KDcwJSwgMzByZW0pO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ib29rLWluZm8ge1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS4zdncsIDEuMnJlbSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ib29rcyBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbi5ib29rcyBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDAsIDEyOCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEyOCwgMCwgMTI4LCAwLjc2KTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxcmVtKTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYm94LXNoYWRvdzogMC40cmVtIDAuNHJlbSAwLjJyZW0gYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzIGxpOm50aC1jaGlsZChvZGQpIC5yZW1vdmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMjgsIDAsIDEyOCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbi5ib29rcyBsaTpudGgtY2hpbGQoZXZlbikgLnJlbW92ZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbi5ib29rcyBsaSBwICsgcCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcclxcbiAgcGFkZGluZzogbWF4KDAuOHZ3LCAwLjVyZW0pO1xcclxcbiAgd2lkdGg6IG1heCgzMHZ3LCAyMHJlbSk7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCByZ2JhKDAsIDAsIDEzOSwgMC43NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS40dncsIDEuNXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWFkZGVkLW1zZyB7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjR2dywgMS4ycmVtKTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOC45ZW07XFxyXFxufVxcclxcblxcclxcbiNyZWFjaC1vdXQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mYS1iYXJzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtcGx1cy1zcXVhcmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAuZGF0ZS5tb2JpbGUtZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRhdGUuZGVza3RvcC1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1wbHVzLXNxdWFyZSB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogN3JlbTtcXHJcXG4gICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtYm9vayB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogN3JlbTtcXHJcXG4gICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtZGVza3RvcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LW1vYmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcy5tb2JpbGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC42cmVtIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzLm1vYmlsZSBsaTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1tb2JpbGUgaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNncmVldCB7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IEludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuL2luZm8uanNcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcIi4vaW1wbC9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4vem9uZXMvZml4ZWRPZmZzZXRab25lLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQge1xuICBpc1VuZGVmaW5lZCxcbiAgbWF5YmVBcnJheSxcbiAgaXNEYXRlLFxuICBpc051bWJlcixcbiAgYmVzdEJ5LFxuICBkYXlzSW5Nb250aCxcbiAgZGF5c0luWWVhcixcbiAgaXNMZWFwWWVhcixcbiAgd2Vla3NJbldlZWtZZWFyLFxuICBub3JtYWxpemVPYmplY3QsXG4gIHJvdW5kVG8sXG4gIG9ialRvTG9jYWxUUyxcbiAgcGFkU3RhcnQsXG59IGZyb20gXCIuL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplWm9uZSB9IGZyb20gXCIuL2ltcGwvem9uZVV0aWwuanNcIjtcbmltcG9ydCBkaWZmIGZyb20gXCIuL2ltcGwvZGlmZi5qc1wiO1xuaW1wb3J0IHsgcGFyc2VSRkMyODIyRGF0ZSwgcGFyc2VJU09EYXRlLCBwYXJzZUhUVFBEYXRlLCBwYXJzZVNRTCB9IGZyb20gXCIuL2ltcGwvcmVnZXhQYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlRnJvbVRva2VucywgZXhwbGFpbkZyb21Ub2tlbnMgfSBmcm9tIFwiLi9pbXBsL3Rva2VuUGFyc2VyLmpzXCI7XG5pbXBvcnQge1xuICBncmVnb3JpYW5Ub1dlZWssXG4gIHdlZWtUb0dyZWdvcmlhbixcbiAgZ3JlZ29yaWFuVG9PcmRpbmFsLFxuICBvcmRpbmFsVG9HcmVnb3JpYW4sXG4gIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhLFxuICBoYXNJbnZhbGlkV2Vla0RhdGEsXG4gIGhhc0ludmFsaWRPcmRpbmFsRGF0YSxcbiAgaGFzSW52YWxpZFRpbWVEYXRhLFxufSBmcm9tIFwiLi9pbXBsL2NvbnZlcnNpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2ltcGwvZm9ybWF0cy5qc1wiO1xuaW1wb3J0IHtcbiAgSW52YWxpZEFyZ3VtZW50RXJyb3IsXG4gIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yLFxuICBJbnZhbGlkVW5pdEVycm9yLFxuICBJbnZhbGlkRGF0ZVRpbWVFcnJvcixcbn0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbXBsL2ludmFsaWQuanNcIjtcblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBEYXRlVGltZVwiO1xuY29uc3QgTUFYX0RBVEUgPSA4LjY0ZTE1O1xuXG5mdW5jdGlvbiB1bnN1cHBvcnRlZFpvbmUoem9uZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXCJ1bnN1cHBvcnRlZCB6b25lXCIsIGB0aGUgem9uZSBcIiR7em9uZS5uYW1lfVwiIGlzIG5vdCBzdXBwb3J0ZWRgKTtcbn1cblxuLy8gd2UgY2FjaGUgd2VlayBkYXRhIG9uIHRoZSBEVCBvYmplY3QgYW5kIHRoaXMgaW50ZXJtZWRpYXRlcyB0aGUgY2FjaGVcbmZ1bmN0aW9uIHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEoZHQpIHtcbiAgaWYgKGR0LndlZWtEYXRhID09PSBudWxsKSB7XG4gICAgZHQud2Vla0RhdGEgPSBncmVnb3JpYW5Ub1dlZWsoZHQuYyk7XG4gIH1cbiAgcmV0dXJuIGR0LndlZWtEYXRhO1xufVxuXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMsIFwibWFrZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGVzZSBtb2RpZmljYXRpb25zXCIuIGFsbCBcInNldHRlcnNcIiByZWFsbHkgdXNlIHRoaXNcbi8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2hpbGUgb25seSBjaGFuZ2luZyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBjbG9uZShpbnN0LCBhbHRzKSB7XG4gIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgdHM6IGluc3QudHMsXG4gICAgem9uZTogaW5zdC56b25lLFxuICAgIGM6IGluc3QuYyxcbiAgICBvOiBpbnN0Lm8sXG4gICAgbG9jOiBpbnN0LmxvYyxcbiAgICBpbnZhbGlkOiBpbnN0LmludmFsaWQsXG4gIH07XG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoeyAuLi5jdXJyZW50LCAuLi5hbHRzLCBvbGQ6IGN1cnJlbnQgfSk7XG59XG5cbi8vIGZpbmQgdGhlIHJpZ2h0IG9mZnNldCBhIGdpdmVuIGxvY2FsIHRpbWUuIFRoZSBvIGlucHV0IGlzIG91ciBndWVzcywgd2hpY2ggZGV0ZXJtaW5lcyB3aGljaFxuLy8gb2Zmc2V0IHdlJ2xsIHBpY2sgaW4gYW1iaWd1b3VzIGNhc2VzIChlLmcuIHRoZXJlIGFyZSB0d28gMyBBTXMgYi9jIEZhbGxiYWNrIERTVClcbmZ1bmN0aW9uIGZpeE9mZnNldChsb2NhbFRTLCBvLCB0eikge1xuICAvLyBPdXIgVVRDIHRpbWUgaXMganVzdCBhIGd1ZXNzIGJlY2F1c2Ugb3VyIG9mZnNldCBpcyBqdXN0IGEgZ3Vlc3NcbiAgbGV0IHV0Y0d1ZXNzID0gbG9jYWxUUyAtIG8gKiA2MCAqIDEwMDA7XG5cbiAgLy8gVGVzdCB3aGV0aGVyIHRoZSB6b25lIG1hdGNoZXMgdGhlIG9mZnNldCBmb3IgdGhpcyB0c1xuICBjb25zdCBvMiA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XG5cbiAgLy8gSWYgc28sIG9mZnNldCBkaWRuJ3QgY2hhbmdlIGFuZCB3ZSdyZSBkb25lXG4gIGlmIChvID09PSBvMikge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG9dO1xuICB9XG5cbiAgLy8gSWYgbm90LCBjaGFuZ2UgdGhlIHRzIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHRoZSBvZmZzZXRcbiAgdXRjR3Vlc3MgLT0gKG8yIC0gbykgKiA2MCAqIDEwMDA7XG5cbiAgLy8gSWYgdGhhdCBnaXZlcyB1cyB0aGUgbG9jYWwgdGltZSB3ZSB3YW50LCB3ZSdyZSBkb25lXG4gIGNvbnN0IG8zID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcbiAgaWYgKG8yID09PSBvMykge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG8yXTtcbiAgfVxuXG4gIC8vIElmIGl0J3MgZGlmZmVyZW50LCB3ZSdyZSBpbiBhIGhvbGUgdGltZS4gVGhlIG9mZnNldCBoYXMgY2hhbmdlZCwgYnV0IHRoZSB3ZSBkb24ndCBhZGp1c3QgdGhlIHRpbWVcbiAgcmV0dXJuIFtsb2NhbFRTIC0gTWF0aC5taW4obzIsIG8zKSAqIDYwICogMTAwMCwgTWF0aC5tYXgobzIsIG8zKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gZXBvY2ggdGltZXN0YW1wIGludG8gYSBjYWxlbmRhciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gb2Zmc2V0XG5mdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHtcbiAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSh0cyk7XG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBkLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgbW9udGg6IGQuZ2V0VVRDTW9udGgoKSArIDEsXG4gICAgZGF5OiBkLmdldFVUQ0RhdGUoKSxcbiAgICBob3VyOiBkLmdldFVUQ0hvdXJzKCksXG4gICAgbWludXRlOiBkLmdldFVUQ01pbnV0ZXMoKSxcbiAgICBzZWNvbmQ6IGQuZ2V0VVRDU2Vjb25kcygpLFxuICAgIG1pbGxpc2Vjb25kOiBkLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICB9O1xufVxuXG4vLyBjb252ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgZXBvY2ggdGltZXN0YW1wXG5mdW5jdGlvbiBvYmpUb1RTKG9iaiwgb2Zmc2V0LCB6b25lKSB7XG4gIHJldHVybiBmaXhPZmZzZXQob2JqVG9Mb2NhbFRTKG9iaiksIG9mZnNldCwgem9uZSk7XG59XG5cbi8vIGNyZWF0ZSBhIG5ldyBEVCBpbnN0YW5jZSBieSBhZGRpbmcgYSBkdXJhdGlvbiwgYWRqdXN0aW5nIGZvciBEU1RzXG5mdW5jdGlvbiBhZGp1c3RUaW1lKGluc3QsIGR1cikge1xuICBjb25zdCBvUHJlID0gaW5zdC5vLFxuICAgIHllYXIgPSBpbnN0LmMueWVhciArIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcbiAgICBtb250aCA9IGluc3QuYy5tb250aCArIE1hdGgudHJ1bmMoZHVyLm1vbnRocykgKyBNYXRoLnRydW5jKGR1ci5xdWFydGVycykgKiAzLFxuICAgIGMgPSB7XG4gICAgICAuLi5pbnN0LmMsXG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXk6XG4gICAgICAgIE1hdGgubWluKGluc3QuYy5kYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgK1xuICAgICAgICBNYXRoLnRydW5jKGR1ci5kYXlzKSArXG4gICAgICAgIE1hdGgudHJ1bmMoZHVyLndlZWtzKSAqIDcsXG4gICAgfSxcbiAgICBtaWxsaXNUb0FkZCA9IER1cmF0aW9uLmZyb21PYmplY3Qoe1xuICAgICAgeWVhcnM6IGR1ci55ZWFycyAtIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcbiAgICAgIHF1YXJ0ZXJzOiBkdXIucXVhcnRlcnMgLSBNYXRoLnRydW5jKGR1ci5xdWFydGVycyksXG4gICAgICBtb250aHM6IGR1ci5tb250aHMgLSBNYXRoLnRydW5jKGR1ci5tb250aHMpLFxuICAgICAgd2Vla3M6IGR1ci53ZWVrcyAtIE1hdGgudHJ1bmMoZHVyLndlZWtzKSxcbiAgICAgIGRheXM6IGR1ci5kYXlzIC0gTWF0aC50cnVuYyhkdXIuZGF5cyksXG4gICAgICBob3VyczogZHVyLmhvdXJzLFxuICAgICAgbWludXRlczogZHVyLm1pbnV0ZXMsXG4gICAgICBzZWNvbmRzOiBkdXIuc2Vjb25kcyxcbiAgICAgIG1pbGxpc2Vjb25kczogZHVyLm1pbGxpc2Vjb25kcyxcbiAgICB9KS5hcyhcIm1pbGxpc2Vjb25kc1wiKSxcbiAgICBsb2NhbFRTID0gb2JqVG9Mb2NhbFRTKGMpO1xuXG4gIGxldCBbdHMsIG9dID0gZml4T2Zmc2V0KGxvY2FsVFMsIG9QcmUsIGluc3Quem9uZSk7XG5cbiAgaWYgKG1pbGxpc1RvQWRkICE9PSAwKSB7XG4gICAgdHMgKz0gbWlsbGlzVG9BZGQ7XG4gICAgLy8gdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWQgdGhlIG9mZnNldCBieSBnb2luZyBvdmVyIGEgRFNULCBidXQgd2Ugd2FudCB0byBrZWVwIHRoZSB0cyB0aGUgc2FtZVxuICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTtcbiAgfVxuXG4gIHJldHVybiB7IHRzLCBvIH07XG59XG5cbi8vIGhlbHBlciB1c2VmdWwgaW4gdHVybmluZyB0aGUgcmVzdWx0cyBvZiBwYXJzaW5nIGludG8gcmVhbCBkYXRlc1xuLy8gYnkgaGFuZGxpbmcgdGhlIHpvbmUgb3B0aW9uc1xuZnVuY3Rpb24gcGFyc2VEYXRhVG9EYXRlVGltZShwYXJzZWQsIHBhcnNlZFpvbmUsIG9wdHMsIGZvcm1hdCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpIHtcbiAgY29uc3QgeyBzZXRab25lLCB6b25lIH0gPSBvcHRzO1xuICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3QgaW50ZXJwcmV0YXRpb25ab25lID0gcGFyc2VkWm9uZSB8fCB6b25lLFxuICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QocGFyc2VkLCB7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIHpvbmU6IGludGVycHJldGF0aW9uWm9uZSxcbiAgICAgICAgc3BlY2lmaWNPZmZzZXQsXG4gICAgICB9KTtcbiAgICByZXR1cm4gc2V0Wm9uZSA/IGluc3QgOiBpbnN0LnNldFpvbmUoem9uZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXG4gICAgICBuZXcgSW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgJHtmb3JtYXR9YClcbiAgICApO1xuICB9XG59XG5cbi8vIGlmIHlvdSB3YW50IHRvIG91dHB1dCBhIHRlY2huaWNhbCBmb3JtYXQgKGUuZy4gUkZDIDI4MjIpLCB0aGlzIGhlbHBlclxuLy8gaGVscHMgaGFuZGxlIHRoZSBkZXRhaWxzXG5mdW5jdGlvbiB0b1RlY2hGb3JtYXQoZHQsIGZvcm1hdCwgYWxsb3daID0gdHJ1ZSkge1xuICByZXR1cm4gZHQuaXNWYWxpZFxuICAgID8gRm9ybWF0dGVyLmNyZWF0ZShMb2NhbGUuY3JlYXRlKFwiZW4tVVNcIiksIHtcbiAgICAgICAgYWxsb3daLFxuICAgICAgICBmb3JjZVNpbXBsZTogdHJ1ZSxcbiAgICAgIH0pLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm9ybWF0KVxuICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gdG9JU09EYXRlKG8sIGV4dGVuZGVkKSB7XG4gIGNvbnN0IGxvbmdGb3JtYXQgPSBvLmMueWVhciA+IDk5OTkgfHwgby5jLnllYXIgPCAwO1xuICBsZXQgYyA9IFwiXCI7XG4gIGlmIChsb25nRm9ybWF0ICYmIG8uYy55ZWFyID49IDApIGMgKz0gXCIrXCI7XG4gIGMgKz0gcGFkU3RhcnQoby5jLnllYXIsIGxvbmdGb3JtYXQgPyA2IDogNCk7XG5cbiAgaWYgKGV4dGVuZGVkKSB7XG4gICAgYyArPSBcIi1cIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5tb250aCk7XG4gICAgYyArPSBcIi1cIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiB0b0lTT1RpbWUobywgZXh0ZW5kZWQsIHN1cHByZXNzU2Vjb25kcywgc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQpIHtcbiAgbGV0IGMgPSBwYWRTdGFydChvLmMuaG91cik7XG4gIGlmIChleHRlbmRlZCkge1xuICAgIGMgKz0gXCI6XCI7XG4gICAgYyArPSBwYWRTdGFydChvLmMubWludXRlKTtcbiAgICBpZiAoby5jLnNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NTZWNvbmRzKSB7XG4gICAgICBjICs9IFwiOlwiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xuICB9XG5cbiAgaWYgKG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLnNlY29uZCk7XG5cbiAgICBpZiAoby5jLm1pbGxpc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc01pbGxpc2Vjb25kcykge1xuICAgICAgYyArPSBcIi5cIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbGxpc2Vjb25kLCAzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgIGlmIChvLmlzT2Zmc2V0Rml4ZWQgJiYgby5vZmZzZXQgPT09IDApIHtcbiAgICAgIGMgKz0gXCJaXCI7XG4gICAgfSBlbHNlIGlmIChvLm8gPCAwKSB7XG4gICAgICBjICs9IFwiLVwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vICUgNjApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYyArPSBcIitcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gJSA2MCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYztcbn1cblxuLy8gZGVmYXVsdHMgZm9yIHVuc3BlY2lmaWVkIHVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzXG5jb25zdCBkZWZhdWx0VW5pdFZhbHVlcyA9IHtcbiAgICBtb250aDogMSxcbiAgICBkYXk6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxuICB9LFxuICBkZWZhdWx0V2Vla1VuaXRWYWx1ZXMgPSB7XG4gICAgd2Vla051bWJlcjogMSxcbiAgICB3ZWVrZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMCxcbiAgfSxcbiAgZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzID0ge1xuICAgIG9yZGluYWw6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxuICB9O1xuXG4vLyBVbml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFycywgc29ydGVkIGJ5IGJpZ25lc3NcbmNvbnN0IG9yZGVyZWRVbml0cyA9IFtcInllYXJcIiwgXCJtb250aFwiLCBcImRheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSxcbiAgb3JkZXJlZFdlZWtVbml0cyA9IFtcbiAgICBcIndlZWtZZWFyXCIsXG4gICAgXCJ3ZWVrTnVtYmVyXCIsXG4gICAgXCJ3ZWVrZGF5XCIsXG4gICAgXCJob3VyXCIsXG4gICAgXCJtaW51dGVcIixcbiAgICBcInNlY29uZFwiLFxuICAgIFwibWlsbGlzZWNvbmRcIixcbiAgXSxcbiAgb3JkZXJlZE9yZGluYWxVbml0cyA9IFtcInllYXJcIiwgXCJvcmRpbmFsXCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdO1xuXG4vLyBzdGFuZGFyZGl6ZSBjYXNlIGFuZCBwbHVyYWxpdHkgaW4gdW5pdHNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICBjb25zdCBub3JtYWxpemVkID0ge1xuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIGRheTogXCJkYXlcIixcbiAgICBkYXlzOiBcImRheVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmQ6IFwibWlsbGlzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZHM6IFwibWlsbGlzZWNvbmRcIixcbiAgICB3ZWVrZGF5OiBcIndlZWtkYXlcIixcbiAgICB3ZWVrZGF5czogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3NudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtudW1iZXJzOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVreWVhcjogXCJ3ZWVrWWVhclwiLFxuICAgIHdlZWt5ZWFyczogXCJ3ZWVrWWVhclwiLFxuICAgIG9yZGluYWw6IFwib3JkaW5hbFwiLFxuICB9W3VuaXQudG9Mb3dlckNhc2UoKV07XG5cbiAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcblxuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cblxuLy8gdGhpcyBpcyBhIGR1bWJlZCBkb3duIHZlcnNpb24gb2YgZnJvbU9iamVjdCgpIHRoYXQgcnVucyBhYm91dCA2MCUgZmFzdGVyXG4vLyBidXQgZG9lc24ndCBkbyBhbnkgdmFsaWRhdGlvbiwgbWFrZXMgYSBidW5jaCBvZiBhc3N1bXB0aW9ucyBhYm91dCB3aGF0IHVuaXRzXG4vLyBhcmUgcHJlc2VudCwgYW5kIHNvIG9uLlxuXG4vLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXG5mdW5jdGlvbiBxdWlja0RUKG9iaiwgb3B0cykge1xuICBjb25zdCB6b25lID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKSxcbiAgICB0c05vdyA9IFNldHRpbmdzLm5vdygpO1xuXG4gIGxldCB0cywgbztcblxuICAvLyBhc3N1bWUgd2UgaGF2ZSB0aGUgaGlnaGVyLW9yZGVyIHVuaXRzXG4gIGlmICghaXNVbmRlZmluZWQob2JqLnllYXIpKSB7XG4gICAgZm9yIChjb25zdCB1IG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKGlzVW5kZWZpbmVkKG9ialt1XSkpIHtcbiAgICAgICAgb2JqW3VdID0gZGVmYXVsdFVuaXRWYWx1ZXNbdV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldFByb3ZpcyA9IHpvbmUub2Zmc2V0KHRzTm93KTtcbiAgICBbdHMsIG9dID0gb2JqVG9UUyhvYmosIG9mZnNldFByb3Zpcywgem9uZSk7XG4gIH0gZWxzZSB7XG4gICAgdHMgPSB0c05vdztcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoeyB0cywgem9uZSwgbG9jLCBvIH0pO1xufVxuXG5mdW5jdGlvbiBkaWZmUmVsYXRpdmUoc3RhcnQsIGVuZCwgb3B0cykge1xuICBjb25zdCByb3VuZCA9IGlzVW5kZWZpbmVkKG9wdHMucm91bmQpID8gdHJ1ZSA6IG9wdHMucm91bmQsXG4gICAgZm9ybWF0ID0gKGMsIHVuaXQpID0+IHtcbiAgICAgIGMgPSByb3VuZFRvKGMsIHJvdW5kIHx8IG9wdHMuY2FsZW5kYXJ5ID8gMCA6IDIsIHRydWUpO1xuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZW5kLmxvYy5jbG9uZShvcHRzKS5yZWxGb3JtYXR0ZXIob3B0cyk7XG4gICAgICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChjLCB1bml0KTtcbiAgICB9LFxuICAgIGRpZmZlciA9ICh1bml0KSA9PiB7XG4gICAgICBpZiAob3B0cy5jYWxlbmRhcnkpIHtcbiAgICAgICAgaWYgKCFlbmQuaGFzU2FtZShzdGFydCwgdW5pdCkpIHtcbiAgICAgICAgICByZXR1cm4gZW5kLnN0YXJ0T2YodW5pdCkuZGlmZihzdGFydC5zdGFydE9mKHVuaXQpLCB1bml0KS5nZXQodW5pdCk7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmQuZGlmZihzdGFydCwgdW5pdCkuZ2V0KHVuaXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgaWYgKG9wdHMudW5pdCkge1xuICAgIHJldHVybiBmb3JtYXQoZGlmZmVyKG9wdHMudW5pdCksIG9wdHMudW5pdCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHVuaXQgb2Ygb3B0cy51bml0cykge1xuICAgIGNvbnN0IGNvdW50ID0gZGlmZmVyKHVuaXQpO1xuICAgIGlmIChNYXRoLmFicyhjb3VudCkgPj0gMSkge1xuICAgICAgcmV0dXJuIGZvcm1hdChjb3VudCwgdW5pdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXQoc3RhcnQgPiBlbmQgPyAtMCA6IDAsIG9wdHMudW5pdHNbb3B0cy51bml0cy5sZW5ndGggLSAxXSk7XG59XG5cbmZ1bmN0aW9uIGxhc3RPcHRzKGFyZ0xpc3QpIHtcbiAgbGV0IG9wdHMgPSB7fSxcbiAgICBhcmdzO1xuICBpZiAoYXJnTGlzdC5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBvcHRzID0gYXJnTGlzdFthcmdMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ0xpc3QpLnNsaWNlKDAsIGFyZ0xpc3QubGVuZ3RoIC0gMSk7XG4gIH0gZWxzZSB7XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCk7XG4gIH1cbiAgcmV0dXJuIFtvcHRzLCBhcmdzXTtcbn1cblxuLyoqXG4gKiBBIERhdGVUaW1lIGlzIGFuIGltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIGFuZCBhY2NvbXBhbnlpbmcgbWV0aG9kcy4gSXQgY29udGFpbnMgY2xhc3MgYW5kIGluc3RhbmNlIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uXG4gKlxuICogQSBEYXRlVGltZSBjb21wcmlzZXMgb2Y6XG4gKiAqIEEgdGltZXN0YW1wLiBFYWNoIERhdGVUaW1lIGluc3RhbmNlIHJlZmVycyB0byBhIHNwZWNpZmljIG1pbGxpc2Vjb25kIG9mIHRoZSBVbml4IGVwb2NoLlxuICogKiBBIHRpbWUgem9uZS4gRWFjaCBpbnN0YW5jZSBpcyBjb25zaWRlcmVkIGluIHRoZSBjb250ZXh0IG9mIGEgc3BlY2lmaWMgem9uZSAoYnkgZGVmYXVsdCB0aGUgbG9jYWwgc3lzdGVtJ3Mgem9uZSkuXG4gKiAqIENvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IGVmZmVjdCBob3cgb3V0cHV0IHN0cmluZ3MgYXJlIGZvcm1hdHRlZCwgc3VjaCBhcyBgbG9jYWxlYCwgYG51bWJlcmluZ1N5c3RlbWAsIGFuZCBgb3V0cHV0Q2FsZW5kYXJgLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIGZ1bmN0aW9uYWxpdHkgaXQgcHJvdmlkZXM6XG4gKlxuICogKiAqKkNyZWF0aW9uKio6IFRvIGNyZWF0ZSBhIERhdGVUaW1lIGZyb20gaXRzIGNvbXBvbmVudHMsIHVzZSBvbmUgb2YgaXRzIGZhY3RvcnkgY2xhc3MgbWV0aG9kczoge0BsaW5rIERhdGVUaW1lI2xvY2FsfSwge0BsaW5rIERhdGVUaW1lI3V0Y30sIGFuZCAobW9zdCBmbGV4aWJseSkge0BsaW5rIERhdGVUaW1lI2Zyb21PYmplY3R9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBzdGFuZGFyZCBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lI2Zyb21JU099LCB7QGxpbmsgRGF0ZVRpbWUjZnJvbUhUVFB9LCBhbmQge0BsaW5rIERhdGVUaW1lI2Zyb21SRkMyODIyfS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgY3VzdG9tIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjZnJvbUZvcm1hdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIG5hdGl2ZSBKUyBkYXRlLCB1c2Uge0BsaW5rIERhdGVUaW1lI2Zyb21KU0RhdGV9LlxuICogKiAqKkdyZWdvcmlhbiBjYWxlbmRhciBhbmQgdGltZSoqOiBUbyBleGFtaW5lIHRoZSBHcmVnb3JpYW4gcHJvcGVydGllcyBvZiBhIERhdGVUaW1lIGluZGl2aWR1YWxseSAoaS5lIGFzIG9wcG9zZWQgdG8gY29sbGVjdGl2ZWx5IHRocm91Z2gge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSksIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbW9udGh9LFxuICoge0BsaW5rIERhdGVUaW1lI2RheX0sIHtAbGluayBEYXRlVGltZSNob3VyfSwge0BsaW5rIERhdGVUaW1lI21pbnV0ZX0sIHtAbGluayBEYXRlVGltZSNzZWNvbmR9LCB7QGxpbmsgRGF0ZVRpbWUjbWlsbGlzZWNvbmR9IGFjY2Vzc29ycy5cbiAqICogKipXZWVrIGNhbGVuZGFyKio6IEZvciBJU08gd2VlayBjYWxlbmRhciBhdHRyaWJ1dGVzLCBzZWUgdGhlIHtAbGluayBEYXRlVGltZSN3ZWVrWWVhcn0sIHtAbGluayBEYXRlVGltZSN3ZWVrTnVtYmVyfSwgYW5kIHtAbGluayBEYXRlVGltZSN3ZWVrZGF5fSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSB0aGUge0BsaW5rIERhdGVUaW1lI2xvY2FsZX0gYW5kIHtAbGluayBEYXRlVGltZSNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqOiBUbyB0cmFuc2Zvcm0gdGhlIERhdGVUaW1lIGludG8gb3RoZXIgRGF0ZVRpbWVzLCB1c2Uge0BsaW5rIERhdGVUaW1lI3NldH0sIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0sIHtAbGluayBEYXRlVGltZSNzZXRab25lfSwge0BsaW5rIERhdGVUaW1lI3NldExvY2FsZX0sIHtAbGluayBEYXRlVGltZS5wbHVzfSwge0BsaW5rIERhdGVUaW1lI21pbnVzfSwge0BsaW5rIERhdGVUaW1lI2VuZE9mfSwge0BsaW5rIERhdGVUaW1lI3N0YXJ0T2Z9LCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9LCBhbmQge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9LlxuICogKiAqKk91dHB1dCoqOiBUbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmV9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZUNhbGVuZGFyfSwge0BsaW5rIERhdGVUaW1lI3RvSlNPTn0sIHtAbGluayBEYXRlVGltZSN0b0lTT30sIHtAbGluayBEYXRlVGltZSN0b0hUVFB9LCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SRkMyODIyfSwge0BsaW5rIERhdGVUaW1lI3RvU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSwge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvSlNEYXRlfS5cbiAqXG4gKiBUaGVyZSdzIHBsZW50eSBvdGhlcnMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRpbWUgem9uZXMsIGFsdGVybmF0aXZlIGNhbGVuZGFycywgdmFsaWRpdHksIGFuZCBzbyBvbiwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVGltZSB7XG4gIC8qKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbnN0IHpvbmUgPSBjb25maWcuem9uZSB8fCBTZXR0aW5ncy5kZWZhdWx0Wm9uZTtcblxuICAgIGxldCBpbnZhbGlkID1cbiAgICAgIGNvbmZpZy5pbnZhbGlkIHx8XG4gICAgICAoTnVtYmVyLmlzTmFOKGNvbmZpZy50cykgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsKSB8fFxuICAgICAgKCF6b25lLmlzVmFsaWQgPyB1bnN1cHBvcnRlZFpvbmUoem9uZSkgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRzID0gaXNVbmRlZmluZWQoY29uZmlnLnRzKSA/IFNldHRpbmdzLm5vdygpIDogY29uZmlnLnRzO1xuXG4gICAgbGV0IGMgPSBudWxsLFxuICAgICAgbyA9IG51bGw7XG4gICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICBjb25zdCB1bmNoYW5nZWQgPSBjb25maWcub2xkICYmIGNvbmZpZy5vbGQudHMgPT09IHRoaXMudHMgJiYgY29uZmlnLm9sZC56b25lLmVxdWFscyh6b25lKTtcblxuICAgICAgaWYgKHVuY2hhbmdlZCkge1xuICAgICAgICBbYywgb10gPSBbY29uZmlnLm9sZC5jLCBjb25maWcub2xkLm9dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3QgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgYyA9IHRzVG9PYmoodGhpcy50cywgb3QpO1xuICAgICAgICBpbnZhbGlkID0gTnVtYmVyLmlzTmFOKGMueWVhcikgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsO1xuICAgICAgICBjID0gaW52YWxpZCA/IG51bGwgOiBjO1xuICAgICAgICBvID0gaW52YWxpZCA/IG51bGwgOiBvdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl96b25lID0gem9uZTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGludmFsaWQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy53ZWVrRGF0YSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jID0gYztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm8gPSBvO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkRhdGVUaW1lID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIENPTlNUUlVDVFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmb3IgdGhlIGN1cnJlbnQgaW5zdGFudCwgaW4gdGhlIHN5c3RlbSdzIHRpbWUgem9uZS5cbiAgICpcbiAgICogVXNlIFNldHRpbmdzIHRvIG92ZXJyaWRlIHRoZXNlIGRlZmF1bHQgdmFsdWVzIGlmIG5lZWRlZC5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvL34+IG5vdyBpbiB0aGUgSVNPIGZvcm1hdFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7fSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgbG9jYWwoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKHsgem9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCIgfSkgICAgICAvL34+IG5vdywgaW4gVVMgZWFzdCBjb2FzdCB0aW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDAsIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCB7IHpvbmU6IFwidXRjXCIgfSkgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDAsIGluIFVUQ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgbG9jYWwoKSB7XG4gICAgY29uc3QgW29wdHMsIGFyZ3NdID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgIFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdID0gYXJncztcbiAgICByZXR1cm4gcXVpY2tEVCh7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCB9LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBpbiBVVENcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgdXRjKClgIHdpdGggbm8gYXJndW1lbnRzKSwgdGhlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHVzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttb250aD0xXSAtIFRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGF5PTFdIC0gVGhlIGRheSBvZiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMub3V0cHV0Q2FsZW5kYXJdIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubnVtYmVyaW5nU3lzdGVtXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFogd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1LCB7IGxvY2FsZTogXCJmclwiIH0pIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVaIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIHV0YygpIHtcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xuXG4gICAgb3B0cy56b25lID0gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIHJldHVybiBxdWlja0RUKHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSlNEYXRlKGRhdGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRzID0gaXNEYXRlKGRhdGUpID8gZGF0ZS52YWx1ZU9mKCkgOiBOYU47XG4gICAgaWYgKE51bWJlci5pc05hTih0cykpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgIHRzOiB0cyxcbiAgICAgIHpvbmU6IHpvbmVUb1VzZSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tTWlsbGlzKG1pbGxpc2Vjb25kcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFpc051bWJlcihtaWxsaXNlY29uZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBmcm9tTWlsbGlzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0LCBidXQgcmVjZWl2ZWQgYSAke3R5cGVvZiBtaWxsaXNlY29uZHN9IHdpdGggdmFsdWUgJHttaWxsaXNlY29uZHN9YFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKG1pbGxpc2Vjb25kcyA8IC1NQVhfREFURSB8fCBtaWxsaXNlY29uZHMgPiBNQVhfREFURSkge1xuICAgICAgLy8gdGhpcyBpc24ndCBwZXJmZWN0IGJlY2F1c2UgYmVjYXVzZSB3ZSBjYW4gc3RpbGwgZW5kIHVwIG91dCBvZiByYW5nZSBiZWNhdXNlIG9mIGFkZGl0aW9uYWwgc2hpZnRpbmcsIGJ1dCBpdCdzIGEgc3RhcnRcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiVGltZXN0YW1wIG91dCBvZiByYW5nZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBtaWxsaXNlY29uZHMsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tU2Vjb25kcyhzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWlzTnVtYmVyKHNlY29uZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJmcm9tU2Vjb25kcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBzZWNvbmRzICogMTAwMCxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXInIGFuZCAnaG91cicgd2l0aCByZWFzb25hYmxlIGRlZmF1bHRzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyIC0gYSB5ZWFyLCBzdWNoIGFzIDE5ODdcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aCAtIGEgbW9udGgsIDEtMTJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXkgLSBhIGRheSBvZiB0aGUgbW9udGgsIDEtMzEsIGRlcGVuZGluZyBvbiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5vcmRpbmFsIC0gZGF5IG9mIHRoZSB5ZWFyLCAxLTM2NSBvciAzNjZcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrWWVhciAtIGFuIElTTyB3ZWVrIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrTnVtYmVyIC0gYW4gSVNPIHdlZWsgbnVtYmVyLCBiZXR3ZWVuIDEgYW5kIDUyIG9yIDUzLCBkZXBlbmRpbmcgb24gdGhlIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrZGF5IC0gYW4gSVNPIHdlZWtkYXksIDEtNywgd2hlcmUgMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91ciAtIGhvdXIgb2YgdGhlIGRheSwgMC0yM1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZSAtIG1pbnV0ZSBvZiB0aGUgaG91ciwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZCAtIHNlY29uZCBvZiB0aGUgbWludXRlLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmQgLSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCAwLTk5OVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGludGVycHJldCB0aGUgbnVtYmVycyBpbiB0aGUgY29udGV4dCBvZiBhIHBhcnRpY3VsYXIgem9uZS4gQ2FuIHRha2UgYW55IHZhbHVlIHRha2VuIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBzZXRab25lKClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIsIG1vbnRoOiA1LCBkYXk6IDI1fSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIgfSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wMS0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSkgLy9+PiB0b2RheSBhdCAxMDoyNjowNlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICd1dGMnIH0pLFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdsb2NhbCcgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAnQW1lcmljYS9OZXdfWW9yaycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHdlZWtZZWFyOiAyMDE2LCB3ZWVrTnVtYmVyOiAyLCB3ZWVrZGF5OiAzIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzIwMTYtMDEtMTMnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21PYmplY3Qob2JqLCBvcHRzID0ge30pIHtcbiAgICBvYmogPSBvYmogfHwge307XG4gICAgY29uc3Qgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdHNOb3cgPSBTZXR0aW5ncy5ub3coKSxcbiAgICAgIG9mZnNldFByb3ZpcyA9ICFpc1VuZGVmaW5lZChvcHRzLnNwZWNpZmljT2Zmc2V0KVxuICAgICAgICA/IG9wdHMuc3BlY2lmaWNPZmZzZXRcbiAgICAgICAgOiB6b25lVG9Vc2Uub2Zmc2V0KHRzTm93KSxcbiAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVVbml0KSxcbiAgICAgIGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpLFxuICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1ELFxuICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXIsXG4gICAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKTtcblxuICAgIC8vIGNhc2VzOlxuICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllc1xuICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvclxuICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3JcbiAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZFxuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZVdlZWtEYXRhID0gZGVmaW5pdGVXZWVrRGVmIHx8IChub3JtYWxpemVkLndlZWtkYXkgJiYgIWNvbnRhaW5zR3JlZ29yKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBvdXJzZWx2ZXMgdG8gZGVhbCB3aXRoIGdyZWdvcmlhbiBkYXRlcyBvciB3ZWVrIHN0dWZmXG4gICAgbGV0IHVuaXRzLFxuICAgICAgZGVmYXVsdFZhbHVlcyxcbiAgICAgIG9iak5vdyA9IHRzVG9PYmoodHNOb3csIG9mZnNldFByb3Zpcyk7XG4gICAgaWYgKHVzZVdlZWtEYXRhKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFVuaXRWYWx1ZXM7XG4gICAgfVxuXG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGZvciBtaXNzaW5nIHN0dWZmXG4gICAgbGV0IGZvdW5kRmlyc3QgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcbiAgICAgIGNvbnN0IHYgPSBub3JtYWxpemVkW3VdO1xuICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRGaXJzdCkge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gZGVmYXVsdFZhbHVlc1t1XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBvYmpOb3dbdV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSB2YWx1ZXMgd2UgaGF2ZSBhcmUgaW4gcmFuZ2VcbiAgICBjb25zdCBoaWdoZXJPcmRlckludmFsaWQgPSB1c2VXZWVrRGF0YVxuICAgICAgICA/IGhhc0ludmFsaWRXZWVrRGF0YShub3JtYWxpemVkKVxuICAgICAgICA6IGNvbnRhaW5zT3JkaW5hbFxuICAgICAgICA/IGhhc0ludmFsaWRPcmRpbmFsRGF0YShub3JtYWxpemVkKVxuICAgICAgICA6IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG5vcm1hbGl6ZWQpLFxuICAgICAgaW52YWxpZCA9IGhpZ2hlck9yZGVySW52YWxpZCB8fCBoYXNJbnZhbGlkVGltZURhdGEobm9ybWFsaXplZCk7XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZSB0aGUgYWN0dWFsIHRpbWVcbiAgICBjb25zdCBncmVnb3JpYW4gPSB1c2VXZWVrRGF0YVxuICAgICAgICA/IHdlZWtUb0dyZWdvcmlhbihub3JtYWxpemVkKVxuICAgICAgICA6IGNvbnRhaW5zT3JkaW5hbFxuICAgICAgICA/IG9yZGluYWxUb0dyZWdvcmlhbihub3JtYWxpemVkKVxuICAgICAgICA6IG5vcm1hbGl6ZWQsXG4gICAgICBbdHNGaW5hbCwgb2Zmc2V0RmluYWxdID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKSxcbiAgICAgIGluc3QgPSBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogdHNGaW5hbCxcbiAgICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgICBvOiBvZmZzZXRGaW5hbCxcbiAgICAgICAgbG9jLFxuICAgICAgfSk7XG5cbiAgICAvLyBncmVnb3JpYW4gZGF0YSArIHdlZWtkYXkgc2VydmVzIG9ubHkgdG8gdmFsaWRhdGVcbiAgICBpZiAobm9ybWFsaXplZC53ZWVrZGF5ICYmIGNvbnRhaW5zR3JlZ29yICYmIG9iai53ZWVrZGF5ICE9PSBpbnN0LndlZWtkYXkpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFxuICAgICAgICBcIm1pc21hdGNoZWQgd2Vla2RheVwiLFxuICAgICAgICBgeW91IGNhbid0IHNwZWNpZnkgYm90aCBhIHdlZWtkYXkgb2YgJHtub3JtYWxpemVkLndlZWtkYXl9IGFuZCBhIGRhdGUgb2YgJHtpbnN0LnRvSVNPKCl9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIElTTyA4NjAxIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJywge3NldFpvbmU6IHRydWV9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycsIHt6b25lOiAndXRjJ30pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtVzA1LTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIklTTyA4NjAxXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIHRoZSBvZmZzZXQgaXMgYWx3YXlzIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzOjEyIEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCdGcmksIDI1IE5vdiAyMDE2IDEzOjIzOjEyICswNjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzIFonKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tUkZDMjgyMih0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVJGQzI4MjJEYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiUkZDIDI4MjJcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSBIVFRQIGRhdGVzIGFyZSBhbHdheXMgaW4gVVRDLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCB0aGUgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcuIEZvciBIVFRQIGRhdGVzLCB0aGlzIGlzIGFsd2F5cyBVVEMsIHNvIHRoaXMgb3B0aW9uIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYHpvbmVgIG9wdGlvbiB0byAndXRjJywgYnV0IHRoaXMgb3B0aW9uIGlzIGluY2x1ZGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHNpbWlsYXIgbWV0aG9kcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSFRUUCh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZUhUVFBEYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiSFRUUFwiLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZy5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLiBGb3IgYSB0YWJsZSBvZiB0b2tlbnMgYW5kIHRoZWlyIGludGVycHJldGF0aW9ucywgc2VlIFtoZXJlXShodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vIy9wYXJzaW5nP2lkPXRhYmxlLW9mLXRva2VucykuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgdGhlIGxpbmsgYmVsb3cgZm9yIHRoZSBmb3JtYXRzKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IG9wdHMsXG4gICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgW3ZhbHMsIHBhcnNlZFpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkXSA9IHBhcnNlRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIGBmb3JtYXQgJHtmbXR9YCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgZnJvbVN0cmluZyh0ZXh0LCBmbXQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIFNRTCBkYXRlLCB0aW1lLCBvciBkYXRldGltZVxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJywgeyBzZXRab25lOiB0cnVlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJywgeyB6b25lOiAnQW1lcmljYS9Mb3NfQW5nZWxlcycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMDk6MTI6MzQuMzQyJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVNRTCh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVNRTCh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIlNRTFwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEYXRlVGltZSBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRGF0ZVRpbWVFcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IGludmFsaWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEYXRlVGltZShvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkRhdGVUaW1lKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8vIElORk9cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnbW9udGgnKTsgLy89PiA3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnZGF5Jyk7IC8vPT4gNFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQodW5pdCkge1xuICAgIHJldHVybiB0aGlzW3VuaXRdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgdmFsaWQuIEludmFsaWQgRGF0ZVRpbWVzIG9jY3VyIHdoZW46XG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGZyb20gaW52YWxpZCBjYWxlbmRhciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgMTN0aCBtb250aCBvciBGZWJydWFyeSAzMFxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBieSBhbiBvcGVyYXRpb24gb24gYW5vdGhlciBpbnZhbGlkIGRhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEYXRlVGltZSBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb2NhbGUgb2YgYSBEYXRlVGltZSwgc3VjaCAnZW4tR0InLiBUaGUgbG9jYWxlIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEYXRlVGltZSwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG91dHB1dCBjYWxlbmRhciBvZiBhIERhdGVUaW1lLCBzdWNoICdpc2xhbWljJy4gVGhlIG91dHB1dCBjYWxlbmRhciBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvdXRwdXRDYWxlbmRhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdGltZSB6b25lIGFzc29jaWF0ZWQgd2l0aCB0aGlzIERhdGVUaW1lLlxuICAgKiBAdHlwZSB7Wm9uZX1cbiAgICovXG4gIGdldCB6b25lKCkge1xuICAgIHJldHVybiB0aGlzLl96b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgdGltZSB6b25lLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHpvbmVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUubmFtZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS55ZWFyIC8vPT4gMjAxN1xuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy55ZWFyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcXVhcnRlclxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucXVhcnRlciAvLz0+IDJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBxdWFydGVyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBNYXRoLmNlaWwodGhpcy5jLm1vbnRoIC8gMykgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtb250aCAoMS0xMikuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5tb250aCAvLz0+IDVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtb250aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1vbnRoIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCAoMS0zMGlzaCkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5kYXkgLy89PiAyNVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmRheSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhvdXIgb2YgdGhlIGRheSAoMC0yMykuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5KS5ob3VyIC8vPT4gOVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGhvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5ob3VyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWludXRlIG9mIHRoZSBob3VyICgwLTU5KS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwKS5taW51dGUgLy89PiAzMFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbnV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbnV0ZSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlY29uZCBvZiB0aGUgbWludXRlICgwLTU5KS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1Mikuc2Vjb25kIC8vPT4gNTJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBzZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5zZWNvbmQgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kICgwLTk5OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIsIDY1NCkubWlsbGlzZWNvbmQgLy89PiA2NTRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtaWxsaXNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbGxpc2Vjb25kIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2VlayB5ZWFyXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMiwgMzEpLndlZWtZZWFyIC8vPT4gMjAxNVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2VlayBudW1iZXIgb2YgdGhlIHdlZWsgeWVhciAoMS01MmlzaCkuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkud2Vla051bWJlciAvLz0+IDIxXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla051bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrTnVtYmVyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrLlxuICAgKiAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDExLCAzMSkud2Vla2RheSAvLz0+IDRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtkYXkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcmRpbmFsIChtZWFuaW5nIHRoZSBkYXkgb2YgdGhlIHllYXIpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5vcmRpbmFsIC8vPT4gMTQ1XG4gICAqIEB0eXBlIHtudW1iZXJ8RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgb3JkaW5hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYykub3JkaW5hbCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdCcuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoU2hvcnQgLy89PiBPY3RcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBtb250aFNob3J0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcInNob3J0XCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyBtb250aCBuYW1lLCBzdWNoIGFzICdPY3RvYmVyJy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhMb25nIC8vPT4gT2N0b2JlclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1vbnRoTG9uZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJsb25nXCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgd2Vla2RheSwgc3VjaCBhcyAnTW9uJy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheVNob3J0IC8vPT4gTW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgd2Vla2RheVNob3J0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKFwic2hvcnRcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgd2Vla2RheSwgc3VjaCBhcyAnTW9uZGF5Jy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheUxvbmcgLy89PiBNb25kYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB3ZWVrZGF5TG9uZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcImxvbmdcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIFVUQyBvZmZzZXQgb2YgdGhpcyBEYXRlVGltZSBpbiBtaW51dGVzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm9mZnNldCAvLz0+IC0yNDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkub2Zmc2V0IC8vPT4gMFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gK3RoaXMubyA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNob3J0IGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRVNUXCIgb3IgXCJFRFRcIi5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb2Zmc2V0TmFtZVNob3J0KCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgIGZvcm1hdDogXCJzaG9ydFwiLFxuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxvbmcgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcIiBvciBcIkVhc3Rlcm4gRGF5bGlnaHQgVGltZVwiLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvZmZzZXROYW1lTG9uZygpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICBmb3JtYXQ6IFwibG9uZ1wiLFxuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB0aGlzIHpvbmUncyBvZmZzZXQgZXZlciBjaGFuZ2VzLCBhcyBpbiBhIERTVC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNPZmZzZXRGaXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLmlzVW5pdmVyc2FsIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgaW4gYSBEU1QuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzSW5EU1QoKSB7XG4gICAgaWYgKHRoaXMuaXNPZmZzZXRGaXhlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsgbW9udGg6IDEgfSkub2Zmc2V0IHx8IHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogNSB9KS5vZmZzZXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIERhdGVUaW1lIGlzIGluIGEgbGVhcCB5ZWFyLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuaXNJbkxlYXBZZWFyIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luTGVhcFllYXIoKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMikuZGF5c0luTW9udGggLy89PiAyOVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAzKS5kYXlzSW5Nb250aCAvLz0+IDMxXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luTW9udGgoKSB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5kYXlzSW5ZZWFyIC8vPT4gMzY1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZGF5c0luWWVhcih0aGlzLnllYXIpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3ZWVrcyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhclxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykud2Vla3NJbldlZWtZZWFyIC8vPT4gNTJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrc0luV2Vla1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHdlZWtzSW5XZWVrWWVhcih0aGlzLndlZWtZZWFyKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXNvbHZlZCBJbnRsIG9wdGlvbnMgZm9yIHRoaXMgRGF0ZVRpbWUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIHVuZGVyc3RhbmRpbmcgdGhlIGJlaGF2aW9yIG9mIGZvcm1hdHRpbmcgbWV0aG9kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIHRoZSBzYW1lIG9wdGlvbnMgYXMgdG9Mb2NhbGVTdHJpbmdcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgcmVzb2x2ZWRMb2NhbGVPcHRpb25zKG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyIH0gPSBGb3JtYXR0ZXIuY3JlYXRlKFxuICAgICAgdGhpcy5sb2MuY2xvbmUob3B0cyksXG4gICAgICBvcHRzXG4gICAgKS5yZXNvbHZlZE9wdGlvbnModGhpcyk7XG4gICAgcmV0dXJuIHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyOiBjYWxlbmRhciB9O1xuICB9XG5cbiAgLy8gVFJBTlNGT1JNXG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBVVEMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0oJ3V0YycpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0PTBdIC0gb3B0aW9uYWxseSwgYW4gb2Zmc2V0IGZyb20gVVRDIGluIG1pbnV0ZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XSAtIG9wdGlvbnMgdG8gcGFzcyB0byBgc2V0Wm9uZSgpYFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHRvVVRDKG9mZnNldCA9IDAsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKG9mZnNldCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byB0aGUgaG9zdCdzIGxvY2FsIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byBgc2V0Wm9uZSgnbG9jYWwnKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICB0b0xvY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBzcGVjaWZpZWQgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgc2V0dGVyIGtlZXBzIHRoZSB1bmRlcmx5aW5nIHRpbWUgdGhlIHNhbWUgKGFzIGluLCB0aGUgc2FtZSB0aW1lc3RhbXApLCBidXQgdGhlIG5ldyBpbnN0YW5jZSB3aWxsIHJlcG9ydCBkaWZmZXJlbnQgbG9jYWwgdGltZXMgYW5kIGNvbnNpZGVyIERTVHMgd2hlbiBtYWtpbmcgY29tcHV0YXRpb25zLCBhcyB3aXRoIHtAbGluayBEYXRlVGltZSNwbHVzfS4gWW91IG1heSB3aXNoIHRvIHVzZSB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0gYW5kIHtAbGluayBEYXRlVGltZSN0b1VUQ30gd2hpY2ggcHJvdmlkZSBzaW1wbGUgY29udmVuaWVuY2Ugd3JhcHBlcnMgZm9yIGNvbW1vbmx5IHVzZWQgem9uZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gYSB6b25lIGlkZW50aWZpZXIuIEFzIGEgc3RyaW5nLCB0aGF0IGNhbiBiZSBhbnkgSUFOQSB6b25lIHN1cHBvcnRlZCBieSB0aGUgaG9zdCBlbnZpcm9ubWVudCwgb3IgYSBmaXhlZC1vZmZzZXQgbmFtZSBvZiB0aGUgZm9ybSAnVVRDKzMnLCBvciB0aGUgc3RyaW5ncyAnbG9jYWwnIG9yICd1dGMnLiBZb3UgbWF5IGFsc28gc3VwcGx5IGFuIGluc3RhbmNlIG9mIGEge0BsaW5rIERhdGVUaW1lI1pvbmV9IGNsYXNzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5rZWVwTG9jYWxUaW1lPWZhbHNlXSAtIElmIHRydWUsIGFkanVzdCB0aGUgdW5kZXJseWluZyB0aW1lIHNvIHRoYXQgdGhlIGxvY2FsIHRpbWUgc3RheXMgdGhlIHNhbWUsIGJ1dCBpbiB0aGUgdGFyZ2V0IHpvbmUuIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdGhpcy5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzZXRab25lKHpvbmUsIHsga2VlcExvY2FsVGltZSA9IGZhbHNlLCBrZWVwQ2FsZW5kYXJUaW1lID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgem9uZSA9IG5vcm1hbGl6ZVpvbmUoem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICh6b25lLmVxdWFscyh0aGlzLnpvbmUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2UgaWYgKCF6b25lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUUyA9IHRoaXMudHM7XG4gICAgICBpZiAoa2VlcExvY2FsVGltZSB8fCBrZWVwQ2FsZW5kYXJUaW1lKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldEd1ZXNzID0gem9uZS5vZmZzZXQodGhpcy50cyk7XG4gICAgICAgIGNvbnN0IGFzT2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICBbbmV3VFNdID0gb2JqVG9UUyhhc09iaiwgb2Zmc2V0R3Vlc3MsIHpvbmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdHM6IG5ld1RTLCB6b25lIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3Igb3V0cHV0Q2FsZW5kYXIuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyB0byBzZXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSA9IHt9KSB7XG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgbG9jIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBKdXN0IGEgY29udmVuaWVudCBhbGlhcyBmb3IgcmVjb25maWd1cmUoeyBsb2NhbGUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnNldExvY2FsZSgnZW4tR0InKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIFlvdSBjYW4gb25seSBzZXQgdW5pdHMgd2l0aCB0aGlzIG1ldGhvZDsgZm9yIFwic2V0dGluZ1wiIG1ldGFkYXRhLCBzZWUge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSBhbmQge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyBob3VyOiA4LCBtaW51dGU6IDMwIH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHdlZWtkYXk6IDUgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAwNSwgb3JkaW5hbDogMjM0IH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3QodmFsdWVzLCBub3JtYWxpemVVbml0KSxcbiAgICAgIHNldHRpbmdXZWVrU3R1ZmYgPVxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrWWVhcikgfHxcbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla051bWJlcikgfHxcbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla2RheSksXG4gICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyO1xuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIGxldCBtaXhlZDtcbiAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikge1xuICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oeyAuLi5ncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgLi4ubm9ybWFsaXplZCB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpKSB7XG4gICAgICBtaXhlZCA9IG9yZGluYWxUb0dyZWdvcmlhbih7IC4uLmdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLCAuLi5ub3JtYWxpemVkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaXhlZCA9IHsgLi4udGhpcy50b09iamVjdCgpLCAuLi5ub3JtYWxpemVkIH07XG5cbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSxcbiAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbdHMsIG9dID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzLCBvIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqXG4gICAqIEFkZGluZyBob3VycywgbWludXRlcywgc2Vjb25kcywgb3IgbWlsbGlzZWNvbmRzIGluY3JlYXNlcyB0aGUgdGltZXN0YW1wIGJ5IHRoZSByaWdodCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLiBBZGRpbmcgZGF5cywgbW9udGhzLCBvciB5ZWFycyBzaGlmdHMgdGhlIGNhbGVuZGFyLCBhY2NvdW50aW5nIGZvciBEU1RzIGFuZCBsZWFwIHllYXJzIGFsb25nIHRoZSB3YXkuIFRodXMsIGBkdC5wbHVzKHsgaG91cnM6IDI0IH0pYCBtYXkgcmVzdWx0IGluIGEgZGlmZmVyZW50IHRpbWUgdGhhbiBgZHQucGx1cyh7IGRheXM6IDEgfSlgIGlmIHRoZXJlJ3MgYSBEU1Qgc2hpZnQgaW4gYmV0d2Vlbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKDEyMykgLy9+PiBpbiAxMjMgbWlsbGlzZWNvbmRzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkgLy9+PiB0aGlzIHRpbWUgdG9tb3Jyb3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IC0xIH0pIC8vfj4gdGhpcyB0aW1lIHllc3RlcmRheVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNwbHVzfVxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbikubmVnYXRlKCk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSB1bml0IG9mIHRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGJlZ2lubmluZyBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd3ZWVrJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDMnLCB3ZWVrcyBhbHdheXMgc3RhcnQgb24gTW9uZGF5c1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXJ0T2YodW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBvID0ge30sXG4gICAgICBub3JtYWxpemVkVW5pdCA9IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCk7XG4gICAgc3dpdGNoIChub3JtYWxpemVkVW5pdCkge1xuICAgICAgY2FzZSBcInllYXJzXCI6XG4gICAgICAgIG8ubW9udGggPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcInF1YXJ0ZXJzXCI6XG4gICAgICBjYXNlIFwibW9udGhzXCI6XG4gICAgICAgIG8uZGF5ID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJ3ZWVrc1wiOlxuICAgICAgY2FzZSBcImRheXNcIjpcbiAgICAgICAgby5ob3VyID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJob3Vyc1wiOlxuICAgICAgICBvLm1pbnV0ZSA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwibWludXRlc1wiOlxuICAgICAgICBvLnNlY29uZCA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwic2Vjb25kc1wiOlxuICAgICAgICBvLm1pbGxpc2Vjb25kID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWlsbGlzZWNvbmRzXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gbm8gZGVmYXVsdCwgaW52YWxpZCB1bml0cyB0aHJvdyBpbiBub3JtYWxpemVVbml0KClcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwid2Vla3NcIikge1xuICAgICAgby53ZWVrZGF5ID0gMTtcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwicXVhcnRlcnNcIikge1xuICAgICAgY29uc3QgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7XG4gICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldChvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3dlZWsnKS50b0lTTygpOyAvLyA9PiAnMjAxNC0wMy0wOVQyMzo1OTo1OS45OTktMDU6MDAnLCB3ZWVrcyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIGVuZE9mKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IHRoaXMucGx1cyh7IFt1bml0XTogMSB9KVxuICAgICAgICAgIC5zdGFydE9mKHVuaXQpXG4gICAgICAgICAgLm1pbnVzKDEpXG4gICAgICA6IHRoaXM7XG4gIH1cblxuICAvLyBPVVRQVVRcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvZm9ybWF0dGluZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2ZyJykudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBhdnIuIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLnJlZGVmYXVsdFRvRU4ob3B0cykpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXG4gICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIGZvcm1hdE9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IGxvY2FsZTogJ2VuLWdiJyB9KTsgLy89PiAnMjAvMDQvMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMKTsgLy89PiAnQXByaWwgMjAsIDIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiAnMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX1NIT1JUKTsgLy89PiAnNC8yMC8yMDE3LCAxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHVyc2RheSwgQXByaWwgMjAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHUsIEFwciAyMCwgMTE6MjcgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JywgaG91ckN5Y2xlOiAnaDIzJyB9KTsgLy89PiAnMTE6MzInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvTG9jYWxlU3RyaW5nKGZvcm1hdE9wdHMgPSBGb3JtYXRzLkRBVEVfU0hPUlQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcylcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZvcm1hdCBcInBhcnRzXCIsIG1lYW5pbmcgaW5kaXZpZHVhbCB0b2tlbnMgYWxvbmcgd2l0aCBtZXRhZGF0YS4gVGhpcyBpcyBhbGxvd3MgY2FsbGVycyB0byBwb3N0LXByb2Nlc3MgaW5kaXZpZHVhbCBzZWN0aW9ucyBvZiB0aGUgZm9ybWF0dGVkIG91dHB1dC5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvZm9ybWF0VG9QYXJ0c1xuICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucywgc2FtZSBhcyBgdG9Mb2NhbGVTdHJpbmdgLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gW1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cbiAgICovXG4gIHRvTG9jYWxlUGFydHMob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpXG4gICAgICA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODMsIDUsIDI1KS50b0lTTygpIC8vPT4gJzE5ODItMDUtMjVUMDA6MDA6MDAuMDAwWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNS0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMjAxNzA0MjJUMjA0NzA1LjMzNS0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTyh7XG4gICAgZm9ybWF0ID0gXCJleHRlbmRlZFwiLFxuICAgIHN1cHByZXNzU2Vjb25kcyA9IGZhbHNlLFxuICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gZmFsc2UsXG4gICAgaW5jbHVkZU9mZnNldCA9IHRydWUsXG4gIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHQgPSBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIjtcblxuICAgIGxldCBjID0gdG9JU09EYXRlKHRoaXMsIGV4dCk7XG4gICAgYyArPSBcIlRcIjtcbiAgICBjICs9IHRvSVNPVGltZSh0aGlzLCBleHQsIHN1cHByZXNzU2Vjb25kcywgc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQpO1xuICAgIHJldHVybiBjO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgZGF0ZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzE5ODIwNTI1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT0RhdGUoeyBmb3JtYXQgPSBcImV4dGVuZGVkXCIgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3Mgd2VlayBkYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09XZWVrRGF0ZSgpIC8vPT4gJzE5ODItVzIxLTInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPV2Vla0RhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcImtra2stJ1cnV1ctY1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHRpbWUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoKSAvLz0+ICcwNzozNDoxOS4zNjFaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0LCBzZWNvbmRzOiAwLCBtaWxsaXNlY29uZHM6IDAgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzA3OjM0WidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMDczNDE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMDc6MzQ6MTkuMzYxWidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKHtcbiAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IGZhbHNlLFxuICAgIHN1cHByZXNzU2Vjb25kcyA9IGZhbHNlLFxuICAgIGluY2x1ZGVPZmZzZXQgPSB0cnVlLFxuICAgIGluY2x1ZGVQcmVmaXggPSBmYWxzZSxcbiAgICBmb3JtYXQgPSBcImV4dGVuZGVkXCIsXG4gIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgYyA9IGluY2x1ZGVQcmVmaXggPyBcIlRcIiA6IFwiXCI7XG4gICAgcmV0dXJuIChcbiAgICAgIGMgK1xuICAgICAgdG9JU09UaW1lKHRoaXMsIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiLCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlpcIiwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy4gVGhlIG91dHB1dCBpcyBhbHdheXMgZXhwcmVzc2VkIGluIEdNVC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1NRTERhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdG9JU09EYXRlKHRoaXMsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoKSAvLz0+ICcwNToxNToxNi4zNDUgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoeyBpbmNsdWRlWm9uZTogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1IEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU1FMVGltZSh7IGluY2x1ZGVPZmZzZXQgPSB0cnVlLCBpbmNsdWRlWm9uZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGxldCBmbXQgPSBcIkhIOm1tOnNzLlNTU1wiO1xuXG4gICAgaWYgKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpIHtcbiAgICAgIGZtdCArPSBcIiBcIjtcbiAgICAgIGlmIChpbmNsdWRlWm9uZSkge1xuICAgICAgICBmbXQgKz0gXCJ6XCI7XG4gICAgICB9IGVsc2UgaWYgKGluY2x1ZGVPZmZzZXQpIHtcbiAgICAgICAgZm10ICs9IFwiWlpcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIGZtdCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IHRydWUgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUwob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt0aGlzLnRvU1FMRGF0ZSgpfSAke3RoaXMudG9TUUxUaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9JU08oKSA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuIEFsaWFzIG9mIHtAbGluayBEYXRlVGltZSN0b01pbGxpc31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEJTT04gc2VyaWFsaXphYmxlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovXG4gIHRvQlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0pTRGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRGF0ZVRpbWUncyB5ZWFyLCBtb250aCwgZGF5LCBhbmQgc28gb24uXG4gICAqIEBwYXJhbSBvcHRzIC0gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUNvbmZpZz1mYWxzZV0gLSBpbmNsdWRlIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlcyBpbiB0aGUgb3V0cHV0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvT2JqZWN0KCkgLy89PiB7IHllYXI6IDIwMTcsIG1vbnRoOiA0LCBkYXk6IDIyLCBob3VyOiAyMCwgbWludXRlOiA0OSwgc2Vjb25kOiA0MiwgbWlsbGlzZWNvbmQ6IDI2OCB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHRvT2JqZWN0KG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XG5cbiAgICBjb25zdCBiYXNlID0geyAuLi50aGlzLmMgfTtcblxuICAgIGlmIChvcHRzLmluY2x1ZGVDb25maWcpIHtcbiAgICAgIGJhc2Uub3V0cHV0Q2FsZW5kYXIgPSB0aGlzLm91dHB1dENhbGVuZGFyO1xuICAgICAgYmFzZS5udW1iZXJpbmdTeXN0ZW0gPSB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW07XG4gICAgICBiYXNlLmxvY2FsZSA9IHRoaXMubG9jLmxvY2FsZTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgRGF0ZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge0RhdGV9XG4gICAqL1xuICB0b0pTRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTik7XG4gIH1cblxuICAvLyBDT01QQVJFXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBEYXRlVGltZXMgYXMgYSBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBEYXRlVGltZSB0byBjb21wYXJlIHRoaXMgb25lIHRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIGFycmF5IG9mIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBpMSA9IERhdGVUaW1lLmZyb21JU08oJzE5ODItMDUtMjVUMDk6NDUnKSxcbiAgICogICAgIGkyID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4My0xMC0xNFQxMDozMCcpO1xuICAgKiBpMi5kaWZmKGkxKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDQzODA3NTAwMDAwIH1cbiAgICogaTIuZGlmZihpMSwgJ2hvdXJzJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDEyMTY4Ljc1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOS4wMzEyNSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnLCAnaG91cnMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTksIGhvdXJzOiAwLjc1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBkaWZmKG90aGVyRGF0ZVRpbWUsIHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiLCBvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXJEYXRlVGltZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcImNyZWF0ZWQgYnkgZGlmZmluZyBhbiBpbnZhbGlkIERhdGVUaW1lXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1ck9wdHMgPSB7IGxvY2FsZTogdGhpcy5sb2NhbGUsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sIC4uLm9wdHMgfTtcblxuICAgIGNvbnN0IHVuaXRzID0gbWF5YmVBcnJheSh1bml0KS5tYXAoRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXG4gICAgICBvdGhlcklzTGF0ZXIgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKSA+IHRoaXMudmFsdWVPZigpLFxuICAgICAgZWFybGllciA9IG90aGVySXNMYXRlciA/IHRoaXMgOiBvdGhlckRhdGVUaW1lLFxuICAgICAgbGF0ZXIgPSBvdGhlcklzTGF0ZXIgPyBvdGhlckRhdGVUaW1lIDogdGhpcyxcbiAgICAgIGRpZmZlZCA9IGRpZmYoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBkdXJPcHRzKTtcblxuICAgIHJldHVybiBvdGhlcklzTGF0ZXIgPyBkaWZmZWQubmVnYXRlKCkgOiBkaWZmZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgcmlnaHQgbm93LlxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI2RpZmZ9XG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBkaWZmTm93KHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiLCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5kaWZmKERhdGVUaW1lLm5vdygpLCB1bml0LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgc3Bhbm5pbmcgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCBhbm90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgZW5kIHBvaW50IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHVudGlsKG90aGVyRGF0ZVRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyh0aGlzLCBvdGhlckRhdGVUaW1lKSA6IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBEYXRlVGltZSBpcyBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWUgYXMgYW5vdGhlciBEYXRlVGltZS5cbiAgICogSGlnaGVyLW9yZGVyIHVuaXRzIG11c3QgYWxzbyBiZSBpZGVudGljYWwgZm9yIHRoaXMgZnVuY3Rpb24gdG8gcmV0dXJuIGB0cnVlYC5cbiAgICogTm90ZSB0aGF0IHRpbWUgem9uZXMgYXJlICoqaWdub3JlZCoqIGluIHRoaXMgY29tcGFyaXNvbiwgd2hpY2ggY29tcGFyZXMgdGhlICoqbG9jYWwqKiBjYWxlbmRhciB0aW1lLiBVc2Uge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9IHRvIGNvbnZlcnQgb25lIG9mIHRoZSBkYXRlcyBpZiBuZWVkZWQuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLmhhc1NhbWUob3RoZXJEVCwgJ2RheScpOyAvL34+IHRydWUgaWYgb3RoZXJEVCBpcyBpbiB0aGUgc2FtZSBjdXJyZW50IGNhbGVuZGFyIGRheVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzU2FtZShvdGhlckRhdGVUaW1lLCB1bml0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGlucHV0TXMgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcbiAgICBjb25zdCBhZGp1c3RlZFRvWm9uZSA9IHRoaXMuc2V0Wm9uZShvdGhlckRhdGVUaW1lLnpvbmUsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KTtcbiAgICByZXR1cm4gYWRqdXN0ZWRUb1pvbmUuc3RhcnRPZih1bml0KSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gYWRqdXN0ZWRUb1pvbmUuZW5kT2YodW5pdCk7XG4gIH1cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIERhdGVUaW1lcyBhcmUgZXF1YWwgaWZmIHRoZXkgcmVwcmVzZW50IHRoZSBzYW1lIG1pbGxpc2Vjb25kLCBoYXZlIHRoZSBzYW1lIHpvbmUgYW5kIGxvY2F0aW9uLCBhbmQgYXJlIGJvdGggdmFsaWQuXG4gICAqIFRvIGNvbXBhcmUganVzdCB0aGUgbWlsbGlzZWNvbmQgdmFsdWVzLCB1c2UgYCtkdDEgPT09ICtkdDJgLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlciAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNWYWxpZCAmJlxuICAgICAgb3RoZXIuaXNWYWxpZCAmJlxuICAgICAgdGhpcy52YWx1ZU9mKCkgPT09IG90aGVyLnZhbHVlT2YoKSAmJlxuICAgICAgdGhpcy56b25lLmVxdWFscyhvdGhlci56b25lKSAmJlxuICAgICAgdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0aGlzIHRpbWUgcmVsYXRpdmUgdG8gbm93LCBzdWNoIGFzIFwiaW4gdHdvIGRheXNcIi4gQ2FuIG9ubHkgaW50ZXJuYXRpb25hbGl6ZSBpZiB5b3VyXG4gICAqIHBsYXRmb3JtIHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LiBSb3VuZHMgZG93biBieSBkZWZhdWx0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc3R5bGU9XCJsb25nXCJdIC0gdGhlIHN0eWxlIG9mIHVuaXRzLCBtdXN0IGJlIFwibG9uZ1wiLCBcInNob3J0XCIsIG9yIFwibmFycm93XCJcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHM7IGlmIG9taXR0ZWQsIG9yIGFuIGFycmF5LCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgYmVzdCB1bml0LiBVc2UgYW4gYXJyYXkgb3Igb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBvciBcInNlY29uZHNcIlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJvdW5kPXRydWVdIC0gd2hldGhlciB0byByb3VuZCB0aGUgbnVtYmVycyBpbiB0aGUgb3V0cHV0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMucGFkZGluZz0wXSAtIHBhZGRpbmcgaW4gbWlsbGlzZWNvbmRzLiBUaGlzIGFsbG93cyB5b3UgdG8gcm91bmQgdXAgdGhlIHJlc3VsdCBpZiBpdCBmaXRzIGluc2lkZSB0aGUgdGhyZXNob2xkLiBEb24ndCB1c2UgaW4gY29tYmluYXRpb24gd2l0aCB7cm91bmQ6IGZhbHNlfSBiZWNhdXNlIHRoZSBkZWNpbWFsIG91dHB1dCB3aWxsIGluY2x1ZGUgdGhlIHBhZGRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiaW4gMSBkYXlcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS50b1JlbGF0aXZlKHsgZGF5czogMSB9KSAvLz0+IFwiZGVudHJvIGRlIDEgZMOtYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGFucyAyMyBoZXVyZXNcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoeyB1bml0OiBcImhvdXJzXCIgfSkgLy89PiBcIjQ4IGhvdXJzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgaG91cnM6IDM2IH0pLnRvUmVsYXRpdmUoeyByb3VuZDogZmFsc2UgfSkgLy89PiBcIjEuNSBkYXlzIGFnb1wiXG4gICAqL1xuICB0b1JlbGF0aXZlKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBiYXNlID0gb3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogdGhpcy56b25lIH0pLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA/ICh0aGlzIDwgYmFzZSA/IC1vcHRpb25zLnBhZGRpbmcgOiBvcHRpb25zLnBhZGRpbmcpIDogMDtcbiAgICBsZXQgdW5pdHMgPSBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdO1xuICAgIGxldCB1bml0ID0gb3B0aW9ucy51bml0O1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMudW5pdCkpIHtcbiAgICAgIHVuaXRzID0gb3B0aW9ucy51bml0O1xuICAgICAgdW5pdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShiYXNlLCB0aGlzLnBsdXMocGFkZGluZyksIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBudW1lcmljOiBcImFsd2F5c1wiLFxuICAgICAgdW5pdHMsXG4gICAgICB1bml0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBkYXRlIHJlbGF0aXZlIHRvIHRvZGF5LCBzdWNoIGFzIFwieWVzdGVyZGF5XCIgb3IgXCJuZXh0IG1vbnRoXCIuXG4gICAqIE9ubHkgaW50ZXJuYXRpb25hbGl6ZXMgb24gcGxhdGZvcm1zIHRoYXQgc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgb3IgXCJkYXlzXCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwidG9tb3Jyb3dcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcIlwibWHDsWFuYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcih7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkZW1haW5cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKi9cbiAgdG9SZWxhdGl2ZUNhbGVuZGFyKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUob3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogdGhpcy56b25lIH0pLCB0aGlzLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbnVtZXJpYzogXCJhdXRvXCIsXG4gICAgICB1bml0czogW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCJdLFxuICAgICAgY2FsZW5kYXJ5OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovXG4gIHN0YXRpYyBtaW4oLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm1pbiByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIChpKSA9PiBpLnZhbHVlT2YoKSwgTWF0aC5taW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWF4IG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtYXhpbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWF4IERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovXG4gIHN0YXRpYyBtYXgoLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm1heCByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIChpKSA9PiBpLnZhbHVlT2YoKSwgTWF0aC5tYXgpO1xuICB9XG5cbiAgLy8gTUlTQ1xuXG4gIC8qKlxuICAgKiBFeHBsYWluIGhvdyBhIHN0cmluZyB3b3VsZCBiZSBwYXJzZWQgYnkgZnJvbUZvcm1hdCgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgZGVzY3JpcHRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0YWtlbiBieSBmcm9tRm9ybWF0KClcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSBvcHRpb25zLFxuICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgZGVmYXVsdFRvRU46IHRydWUsXG4gICAgICB9KTtcbiAgICByZXR1cm4gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXRFeHBsYWluIGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBmcm9tU3RyaW5nRXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gRk9STUFUIFBSRVNFVFNcblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAxMC8xNC8xOTgzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfU0hPUlQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9TSE9SVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfTUVEKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfTUVEO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgT2N0IDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX01FRF9XSVRIX1dFRUtEQVkoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9NRURfV0lUSF9XRUVLREFZO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfRlVMTCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX0ZVTEw7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnVHVlc2RheSwgT2N0b2JlciAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9IVUdFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfSFVHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1NJTVBMRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1NJTVBMRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NIT1JUX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1dJVEhfU0hPUlRfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfTE9OR19PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX0xPTkdfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfU0lNUExFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfU0lNUExFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVEVCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRWFzdGVybiBEYXlsaWdodCBUaW1lJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9TSE9SVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9TSE9SVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9NRUQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIDE0IE9jdCAxOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9GVUxMKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0ZVTEw7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9IVUdFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0hVR0U7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUztcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmllbmRseURhdGVUaW1lKGRhdGVUaW1laXNoKSB7XG4gIGlmIChEYXRlVGltZS5pc0RhdGVUaW1lKGRhdGVUaW1laXNoKSkge1xuICAgIHJldHVybiBkYXRlVGltZWlzaDtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiBkYXRlVGltZWlzaC52YWx1ZU9mICYmIGlzTnVtYmVyKGRhdGVUaW1laXNoLnZhbHVlT2YoKSkpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUpTRGF0ZShkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgdHlwZW9mIGRhdGVUaW1laXNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21PYmplY3QoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgIGBVbmtub3duIGRhdGV0aW1lIGFyZ3VtZW50OiAke2RhdGVUaW1laXNofSwgb2YgdHlwZSAke3R5cGVvZiBkYXRlVGltZWlzaH1gXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IsIEludmFsaWREdXJhdGlvbkVycm9yLCBJbnZhbGlkVW5pdEVycm9yIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgRm9ybWF0dGVyIGZyb20gXCIuL2ltcGwvZm9ybWF0dGVyLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbXBsL2ludmFsaWQuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCB7IHBhcnNlSVNPRHVyYXRpb24sIHBhcnNlSVNPVGltZU9ubHkgfSBmcm9tIFwiLi9pbXBsL3JlZ2V4UGFyc2VyLmpzXCI7XG5pbXBvcnQge1xuICBhc051bWJlcixcbiAgaGFzT3duUHJvcGVydHksXG4gIGlzSW50ZWdlcixcbiAgaXNOdW1iZXIsXG4gIGlzVW5kZWZpbmVkLFxuICBub3JtYWxpemVPYmplY3QsXG4gIHJvdW5kVG8sXG59IGZyb20gXCIuL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XG5cbmNvbnN0IElOVkFMSUQgPSBcIkludmFsaWQgRHVyYXRpb25cIjtcblxuLy8gdW5pdCBjb252ZXJzaW9uIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IGxvd09yZGVyTWF0cml4ID0ge1xuICAgIHdlZWtzOiB7XG4gICAgICBkYXlzOiA3LFxuICAgICAgaG91cnM6IDcgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDcgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBkYXlzOiB7XG4gICAgICBob3VyczogMjQsXG4gICAgICBtaW51dGVzOiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgaG91cnM6IHsgbWludXRlczogNjAsIHNlY29uZHM6IDYwICogNjAsIG1pbGxpc2Vjb25kczogNjAgKiA2MCAqIDEwMDAgfSxcbiAgICBtaW51dGVzOiB7IHNlY29uZHM6IDYwLCBtaWxsaXNlY29uZHM6IDYwICogMTAwMCB9LFxuICAgIHNlY29uZHM6IHsgbWlsbGlzZWNvbmRzOiAxMDAwIH0sXG4gIH0sXG4gIGNhc3VhbE1hdHJpeCA9IHtcbiAgICB5ZWFyczoge1xuICAgICAgcXVhcnRlcnM6IDQsXG4gICAgICBtb250aHM6IDEyLFxuICAgICAgd2Vla3M6IDUyLFxuICAgICAgZGF5czogMzY1LFxuICAgICAgaG91cnM6IDM2NSAqIDI0LFxuICAgICAgbWludXRlczogMzY1ICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHF1YXJ0ZXJzOiB7XG4gICAgICBtb250aHM6IDMsXG4gICAgICB3ZWVrczogMTMsXG4gICAgICBkYXlzOiA5MSxcbiAgICAgIGhvdXJzOiA5MSAqIDI0LFxuICAgICAgbWludXRlczogOTEgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDkxICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIG1vbnRoczoge1xuICAgICAgd2Vla3M6IDQsXG4gICAgICBkYXlzOiAzMCxcbiAgICAgIGhvdXJzOiAzMCAqIDI0LFxuICAgICAgbWludXRlczogMzAgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuXG4gICAgLi4ubG93T3JkZXJNYXRyaXgsXG4gIH0sXG4gIGRheXNJblllYXJBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDAwLFxuICBkYXlzSW5Nb250aEFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0ODAwLFxuICBhY2N1cmF0ZU1hdHJpeCA9IHtcbiAgICB5ZWFyczoge1xuICAgICAgcXVhcnRlcnM6IDQsXG4gICAgICBtb250aHM6IDEyLFxuICAgICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDcsXG4gICAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUsXG4gICAgICBob3VyczogZGF5c0luWWVhckFjY3VyYXRlICogMjQsXG4gICAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcXVhcnRlcnM6IHtcbiAgICAgIG1vbnRoczogMyxcbiAgICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyAyOCxcbiAgICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSAvIDQsXG4gICAgICBob3VyczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0KSAvIDQsXG4gICAgICBtaW51dGVzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCkgLyA0LFxuICAgICAgc2Vjb25kczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCkgLyA0LFxuICAgICAgbWlsbGlzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCkgLyA0LFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICB3ZWVrczogZGF5c0luTW9udGhBY2N1cmF0ZSAvIDcsXG4gICAgICBkYXlzOiBkYXlzSW5Nb250aEFjY3VyYXRlLFxuICAgICAgaG91cnM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICAuLi5sb3dPcmRlck1hdHJpeCxcbiAgfTtcblxuLy8gdW5pdHMgb3JkZXJlZCBieSBzaXplXG5jb25zdCBvcmRlcmVkVW5pdHMgPSBbXG4gIFwieWVhcnNcIixcbiAgXCJxdWFydGVyc1wiLFxuICBcIm1vbnRoc1wiLFxuICBcIndlZWtzXCIsXG4gIFwiZGF5c1wiLFxuICBcImhvdXJzXCIsXG4gIFwibWludXRlc1wiLFxuICBcInNlY29uZHNcIixcbiAgXCJtaWxsaXNlY29uZHNcIixcbl07XG5cbmNvbnN0IHJldmVyc2VVbml0cyA9IG9yZGVyZWRVbml0cy5zbGljZSgwKS5yZXZlcnNlKCk7XG5cbi8vIGNsb25lIHJlYWxseSBtZWFucyBcImNyZWF0ZSBhbm90aGVyIGluc3RhbmNlIGp1c3QgbGlrZSB0aGlzIG9uZSwgYnV0IHdpdGggdGhlc2UgY2hhbmdlc1wiXG5mdW5jdGlvbiBjbG9uZShkdXIsIGFsdHMsIGNsZWFyID0gZmFsc2UpIHtcbiAgLy8gZGVlcCBtZXJnZSBmb3IgdmFsc1xuICBjb25zdCBjb25mID0ge1xuICAgIHZhbHVlczogY2xlYXIgPyBhbHRzLnZhbHVlcyA6IHsgLi4uZHVyLnZhbHVlcywgLi4uKGFsdHMudmFsdWVzIHx8IHt9KSB9LFxuICAgIGxvYzogZHVyLmxvYy5jbG9uZShhbHRzLmxvYyksXG4gICAgY29udmVyc2lvbkFjY3VyYWN5OiBhbHRzLmNvbnZlcnNpb25BY2N1cmFjeSB8fCBkdXIuY29udmVyc2lvbkFjY3VyYWN5LFxuICB9O1xuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xufVxuXG5mdW5jdGlvbiBhbnRpVHJ1bmMobikge1xuICByZXR1cm4gbiA8IDAgPyBNYXRoLmZsb29yKG4pIDogTWF0aC5jZWlsKG4pO1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBjb252ZXJ0KG1hdHJpeCwgZnJvbU1hcCwgZnJvbVVuaXQsIHRvTWFwLCB0b1VuaXQpIHtcbiAgY29uc3QgY29udiA9IG1hdHJpeFt0b1VuaXRdW2Zyb21Vbml0XSxcbiAgICByYXcgPSBmcm9tTWFwW2Zyb21Vbml0XSAvIGNvbnYsXG4gICAgc2FtZVNpZ24gPSBNYXRoLnNpZ24ocmF3KSA9PT0gTWF0aC5zaWduKHRvTWFwW3RvVW5pdF0pLFxuICAgIC8vIG9rLCBzbyB0aGlzIGlzIHdpbGQsIGJ1dCBzZWUgdGhlIG1hdHJpeCBpbiB0aGUgdGVzdHNcbiAgICBhZGRlZCA9XG4gICAgICAhc2FtZVNpZ24gJiYgdG9NYXBbdG9Vbml0XSAhPT0gMCAmJiBNYXRoLmFicyhyYXcpIDw9IDEgPyBhbnRpVHJ1bmMocmF3KSA6IE1hdGgudHJ1bmMocmF3KTtcbiAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDtcbiAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252O1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XG4gIHJldmVyc2VVbml0cy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnZlcnQobWF0cml4LCB2YWxzLCBwcmV2aW91cywgdmFscywgY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cbiAgfSwgbnVsbCk7XG59XG5cbi8qKlxuICogQSBEdXJhdGlvbiBvYmplY3QgcmVwcmVzZW50cyBhIHBlcmlvZCBvZiB0aW1lLCBsaWtlIFwiMiBtb250aHNcIiBvciBcIjEgZGF5LCAxIGhvdXJcIi4gQ29uY2VwdHVhbGx5LCBpdCdzIGp1c3QgYSBtYXAgb2YgdW5pdHMgdG8gdGhlaXIgcXVhbnRpdGllcywgYWNjb21wYW5pZWQgYnkgc29tZSBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gYW5kIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uIFRoZXkgY2FuIGJlIHVzZWQgb24gdGhlaXIgb3duIG9yIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgTHV4b24gdHlwZXM7IGZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c30gdG8gYWRkIGEgRHVyYXRpb24gb2JqZWN0IHRvIGEgRGF0ZVRpbWUsIHByb2R1Y2luZyBhbm90aGVyIERhdGVUaW1lLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gRHVyYXRpb246XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGEgRHVyYXRpb24sIHVzZSB7QGxpbmsgRHVyYXRpb24jZnJvbU1pbGxpc30sIHtAbGluayBEdXJhdGlvbiNmcm9tT2JqZWN0fSwgb3Ige0BsaW5rIER1cmF0aW9uI2Zyb21JU099LlxuICogKiAqKlVuaXQgdmFsdWVzKiogU2VlIHRoZSB7QGxpbmsgRHVyYXRpb24jeWVhcnN9LCB7QGxpbmsgRHVyYXRpb24ubW9udGhzfSwge0BsaW5rIER1cmF0aW9uI3dlZWtzfSwge0BsaW5rIER1cmF0aW9uI2RheXN9LCB7QGxpbmsgRHVyYXRpb24jaG91cnN9LCB7QGxpbmsgRHVyYXRpb24jbWludXRlc30sIHtAbGluayBEdXJhdGlvbiNzZWNvbmRzfSwge0BsaW5rIER1cmF0aW9uI21pbGxpc2Vjb25kc30gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgIHtAbGluayBEdXJhdGlvbiNsb2NhbGV9IGFuZCB7QGxpbmsgRHVyYXRpb24jbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgbmV3IER1cmF0aW9ucyBvdXQgb2Ygb2xkIG9uZXMgdXNlIHtAbGluayBEdXJhdGlvbiNwbHVzfSwge0BsaW5rIER1cmF0aW9uI21pbnVzfSwge0BsaW5rIER1cmF0aW9uI25vcm1hbGl6ZX0sIHtAbGluayBEdXJhdGlvbiNzZXR9LCB7QGxpbmsgRHVyYXRpb24jcmVjb25maWd1cmV9LCB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30sIGFuZCB7QGxpbmsgRHVyYXRpb24jbmVnYXRlfS5cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBEdXJhdGlvbiBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBEdXJhdGlvbiNhc30sIHtAbGluayBEdXJhdGlvbiN0b0lTT30sIHtAbGluayBEdXJhdGlvbiN0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgRHVyYXRpb24jdG9KU09OfVxuICpcbiAqIFRoZXJlJ3MgYXJlIG1vcmUgbWV0aG9kcyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiBhbmQgdmFsaWRpdHksIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVyYXRpb24ge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbnN0IGFjY3VyYXRlID0gY29uZmlnLmNvbnZlcnNpb25BY2N1cmFjeSA9PT0gXCJsb25ndGVybVwiIHx8IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWVzID0gY29uZmlnLnZhbHVlcztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udmVyc2lvbkFjY3VyYWN5ID0gYWNjdXJhdGUgPyBcImxvbmd0ZXJtXCIgOiBcImNhc3VhbFwiO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5tYXRyaXggPSBhY2N1cmF0ZSA/IGFjY3VyYXRlTWF0cml4IDogY2FzdWFsTWF0cml4O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkR1cmF0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgRHVyYXRpb24gZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBvZiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21NaWxsaXMoY291bnQsIG9wdHMpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogY291bnQgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXG4gICAqIElmIHRoaXMgb2JqZWN0IGlzIGVtcHR5IHRoZW4gYSB6ZXJvIG1pbGxpc2Vjb25kcyBkdXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5xdWFydGVyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5c1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPVtdXSAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBEdXJhdGlvbi5mcm9tT2JqZWN0OiBhcmd1bWVudCBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QsIGdvdCAke1xuICAgICAgICAgIG9iaiA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIG9ialxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKHtcbiAgICAgIHZhbHVlczogbm9ybWFsaXplT2JqZWN0KG9iaiwgRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5OiBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIER1cmF0aW9uTGlrZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3QgfCBudW1iZXIgfCBEdXJhdGlvbn0gZHVyYXRpb25MaWtlXG4gICAqIE9uZSBvZjpcbiAgICogLSBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogLSBudW1iZXIgcmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kc1xuICAgKiAtIER1cmF0aW9uIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb25MaWtlKSB7XG4gICAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uTGlrZSk7XG4gICAgfSBlbHNlIGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBkdXJhdGlvbkxpa2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb25MaWtlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbkxpa2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBVbmtub3duIGR1cmF0aW9uIGFyZ3VtZW50ICR7ZHVyYXRpb25MaWtlfSBvZiB0eXBlICR7dHlwZW9mIGR1cmF0aW9uTGlrZX1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIGR1cmF0aW9uIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQM1k2TTFXNERUMTJIMzBNNVMnKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMywgbW9udGhzOiA2LCB3ZWVrczogMSwgZGF5czogNCwgaG91cnM6IDEyLCBtaW51dGVzOiAzMCwgc2Vjb25kczogNSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1BUMjNIJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDIzIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDVZM00nKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogNSwgbW9udGhzOiAzIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgY29uc3QgW3BhcnNlZF0gPSBwYXJzZUlTT0R1cmF0aW9uKHRleHQpO1xuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIHRpbWUgc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjIyOjMzLjQ0NCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMjIsIHNlY29uZHM6IDMzLCBtaWxsaXNlY29uZHM6IDQ0NCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21JU09UaW1lKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcGFyc2VkXSA9IHBhcnNlSVNPVGltZU9ubHkodGV4dCk7XG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBkYXRldGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIER1cmF0aW9uIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREdXJhdGlvbkVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IER1cmF0aW9uKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0ge1xuICAgICAgeWVhcjogXCJ5ZWFyc1wiLFxuICAgICAgeWVhcnM6IFwieWVhcnNcIixcbiAgICAgIHF1YXJ0ZXI6IFwicXVhcnRlcnNcIixcbiAgICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJzXCIsXG4gICAgICBtb250aDogXCJtb250aHNcIixcbiAgICAgIG1vbnRoczogXCJtb250aHNcIixcbiAgICAgIHdlZWs6IFwid2Vla3NcIixcbiAgICAgIHdlZWtzOiBcIndlZWtzXCIsXG4gICAgICBkYXk6IFwiZGF5c1wiLFxuICAgICAgZGF5czogXCJkYXlzXCIsXG4gICAgICBob3VyOiBcImhvdXJzXCIsXG4gICAgICBob3VyczogXCJob3Vyc1wiLFxuICAgICAgbWludXRlOiBcIm1pbnV0ZXNcIixcbiAgICAgIG1pbnV0ZXM6IFwibWludXRlc1wiLFxuICAgICAgc2Vjb25kOiBcInNlY29uZHNcIixcbiAgICAgIHNlY29uZHM6IFwic2Vjb25kc1wiLFxuICAgICAgbWlsbGlzZWNvbmQ6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZHM6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgfVt1bml0ID8gdW5pdC50b0xvd2VyQ2FzZSgpIDogdW5pdF07XG5cbiAgICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGEgRHVyYXRpb24uIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0R1cmF0aW9uKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uRHVyYXRpb24pIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCAgdGhlIGxvY2FsZSBvZiBhIER1cmF0aW9uLCBzdWNoICdlbi1HQidcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRHVyYXRpb25cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBudW1iZXJpbmdTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLiBZb3UgbWF5IHVzZSB0aGVzZSB0b2tlbnM6XG4gICAqICogYFNgIGZvciBtaWxsaXNlY29uZHNcbiAgICogKiBgc2AgZm9yIHNlY29uZHNcbiAgICogKiBgbWAgZm9yIG1pbnV0ZXNcbiAgICogKiBgaGAgZm9yIGhvdXJzXG4gICAqICogYGRgIGZvciBkYXlzXG4gICAqICogYE1gIGZvciBtb250aHNcbiAgICogKiBgeWAgZm9yIHllYXJzXG4gICAqIE5vdGVzOlxuICAgKiAqIEFkZCBwYWRkaW5nIGJ5IHJlcGVhdGluZyB0aGUgdG9rZW4sIGUuZy4gXCJ5eVwiIHBhZHMgdGhlIHllYXJzIHRvIHR3byBkaWdpdHMsIFwiaGhoaFwiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0c1xuICAgKiAqIFRoZSBkdXJhdGlvbiB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgc2V0IG9mIHVuaXRzIGluIHRoZSBmb3JtYXQgc3RyaW5nIHVzaW5nIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSBhbmQgdGhlIER1cmF0aW9ucydzIGNvbnZlcnNpb24gYWNjdXJhY3kgc2V0dGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmZsb29yPXRydWVdIC0gZmxvb3IgbnVtZXJpY2FsIHZhbHVlc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5IGQgc1wiKSAvLz0+IFwiMSA2IDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5eSBkZCBzc3NcIikgLy89PiBcIjAxIDA2IDAwMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcIk0gU1wiKSAvLz0+IFwiMTIgNTE4NDAyMDAwXCJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Gb3JtYXQoZm10LCBvcHRzID0ge30pIHtcbiAgICAvLyByZXZlcnNlLWNvbXBhdCBzaW5jZSAxLjI7IHdlIGFsd2F5cyByb3VuZCBkb3duIG5vdywgbmV2ZXIgdXAsIGFuZCB3ZSBkbyBpdCBieSBkZWZhdWx0XG4gICAgY29uc3QgZm10T3B0cyA9IHtcbiAgICAgIC4uLm9wdHMsXG4gICAgICBmbG9vcjogb3B0cy5yb3VuZCAhPT0gZmFsc2UgJiYgb3B0cy5mbG9vciAhPT0gZmFsc2UsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MsIGZtdE9wdHMpLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyh0aGlzLCBmbXQpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIER1cmF0aW9uIHdpdGggYWxsIHVuaXRzIGluY2x1ZGVkXG4gICAqIFRvIG1vZGlmeSBpdHMgYmVoYXZpb3IgdXNlIHRoZSBgbGlzdFN0eWxlYCBhbmQgYW55IEludGwuTnVtYmVyRm9ybWF0IG9wdGlvbiwgdGhvdWdoIGB1bml0RGlzcGxheWAgaXMgZXNwZWNpYWxseSByZWxldmFudC4gU2VlIHtAbGluayBJbnRsLk51bWJlckZvcm1hdH0uXG4gICAqIEBwYXJhbSBvcHRzIC0gT24gb3B0aW9uIG9iamVjdCB0byBvdmVycmlkZSB0aGUgZm9ybWF0dGluZy4gQWNjZXB0cyB0aGUgc2FtZSBrZXlzIGFzIHRoZSBvcHRpb25zIHBhcmFtZXRlciBvZiB0aGUgbmF0aXZlIGBJbnQuTnVtYmVyRm9ybWF0YCBjb25zdHJ1Y3RvciwgYXMgd2VsbCBhcyBgbGlzdFN0eWxlYC5cbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogdmFyIGR1ciA9IER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxLCBob3VyczogNSwgbWludXRlczogNiB9KVxuICAgKiBkdXIudG9IdW1hbigpIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCA2IG1pbnV0ZXMnXG4gICAqIGR1ci50b0h1bWFuKHsgbGlzdFN0eWxlOiBcImxvbmdcIiB9KSAvLz0+ICcxIGRheSwgNSBob3VycywgYW5kIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyB1bml0RGlzcGxheTogXCJzaG9ydFwiIH0pIC8vPT4gJzEgZGF5LCA1IGhyLCA2IG1pbidcbiAgICogYGBgXG4gICAqL1xuICB0b0h1bWFuKG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IGwgPSBvcmRlcmVkVW5pdHNcbiAgICAgIC5tYXAoKHVuaXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZXNbdW5pdF07XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9jXG4gICAgICAgICAgLm51bWJlckZvcm1hdHRlcih7IHN0eWxlOiBcInVuaXRcIiwgdW5pdERpc3BsYXk6IFwibG9uZ1wiLCAuLi5vcHRzLCB1bml0OiB1bml0LnNsaWNlKDAsIC0xKSB9KVxuICAgICAgICAgIC5mb3JtYXQodmFsKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChuKSA9PiBuKTtcblxuICAgIHJldHVybiB0aGlzLmxvY1xuICAgICAgLmxpc3RGb3JtYXR0ZXIoeyB0eXBlOiBcImNvbmp1bmN0aW9uXCIsIHN0eWxlOiBvcHRzLmxpc3RTdHlsZSB8fCBcIm5hcnJvd1wiLCAuLi5vcHRzIH0pXG4gICAgICAuZm9ybWF0KGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRHVyYXRpb24ncyB2YWx1ZXMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHRvT2JqZWN0KCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XG4gICAgcmV0dXJuIHsgLi4udGhpcy52YWx1ZXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAzLCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1AzWVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDQsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDRNVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNSB9KS50b0lTTygpIC8vPT4gJ1A1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbnV0ZXM6IDUgfSkudG9JU08oKSAvLz0+ICdQVDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiA2IH0pLnRvSVNPKCkgLy89PiAnUFQwLjAwNlMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPKCkge1xuICAgIC8vIHdlIGNvdWxkIHVzZSB0aGUgZm9ybWF0dGVyLCBidXQgdGhpcyBpcyBhbiBlYXNpZXIgd2F5IHRvIGdldCB0aGUgbWluaW11bSBzdHJpbmdcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgcyA9IFwiUFwiO1xuICAgIGlmICh0aGlzLnllYXJzICE9PSAwKSBzICs9IHRoaXMueWVhcnMgKyBcIllcIjtcbiAgICBpZiAodGhpcy5tb250aHMgIT09IDAgfHwgdGhpcy5xdWFydGVycyAhPT0gMCkgcyArPSB0aGlzLm1vbnRocyArIHRoaXMucXVhcnRlcnMgKiAzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMud2Vla3MgIT09IDApIHMgKz0gdGhpcy53ZWVrcyArIFwiV1wiO1xuICAgIGlmICh0aGlzLmRheXMgIT09IDApIHMgKz0gdGhpcy5kYXlzICsgXCJEXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDAgfHwgdGhpcy5taW51dGVzICE9PSAwIHx8IHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMClcbiAgICAgIHMgKz0gXCJUXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDApIHMgKz0gdGhpcy5ob3VycyArIFwiSFwiO1xuICAgIGlmICh0aGlzLm1pbnV0ZXMgIT09IDApIHMgKz0gdGhpcy5taW51dGVzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMClcbiAgICAgIC8vIHRoaXMgd2lsbCBoYW5kbGUgXCJmbG9hdGluZyBwb2ludCBtYWRuZXNzXCIgYnkgcmVtb3ZpbmcgZXh0cmEgZGVjaW1hbCBwbGFjZXNcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4ODAwNC9pcy1mbG9hdGluZy1wb2ludC1tYXRoLWJyb2tlblxuICAgICAgcyArPSByb3VuZFRvKHRoaXMuc2Vjb25kcyArIHRoaXMubWlsbGlzZWNvbmRzIC8gMTAwMCwgMykgKyBcIlNcIjtcbiAgICBpZiAocyA9PT0gXCJQXCIpIHMgKz0gXCJUMFNcIjtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiwgZm9ybWF0dGVkIGFzIGEgdGltZSBvZiBkYXkuXG4gICAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlIGR1cmF0aW9uIGlzIGludmFsaWQsIG5lZ2F0aXZlLCBvciBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gMjQgaG91cnMuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoKSAvLz0+ICcxMTowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NNaWxsaXNlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDA6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzExOjAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTEwMDAwLjAwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IG1pbGxpcyA9IHRoaXMudG9NaWxsaXMoKTtcbiAgICBpZiAobWlsbGlzIDwgMCB8fCBtaWxsaXMgPj0gODY0MDAwMDApIHJldHVybiBudWxsO1xuXG4gICAgb3B0cyA9IHtcbiAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzOiBmYWxzZSxcbiAgICAgIHN1cHByZXNzU2Vjb25kczogZmFsc2UsXG4gICAgICBpbmNsdWRlUHJlZml4OiBmYWxzZSxcbiAgICAgIGZvcm1hdDogXCJleHRlbmRlZFwiLFxuICAgICAgLi4ub3B0cyxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNoaWZ0VG8oXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCIpO1xuXG4gICAgbGV0IGZtdCA9IG9wdHMuZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcImhobW1cIiA6IFwiaGg6bW1cIjtcblxuICAgIGlmICghb3B0cy5zdXBwcmVzc1NlY29uZHMgfHwgdmFsdWUuc2Vjb25kcyAhPT0gMCB8fCB2YWx1ZS5taWxsaXNlY29uZHMgIT09IDApIHtcbiAgICAgIGZtdCArPSBvcHRzLmZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJzc1wiIDogXCI6c3NcIjtcbiAgICAgIGlmICghb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcyB8fCB2YWx1ZS5taWxsaXNlY29uZHMgIT09IDApIHtcbiAgICAgICAgZm10ICs9IFwiLlNTU1wiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzdHIgPSB2YWx1ZS50b0Zvcm1hdChmbXQpO1xuXG4gICAgaWYgKG9wdHMuaW5jbHVkZVByZWZpeCkge1xuICAgICAgc3RyID0gXCJUXCIgKyBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXMoXCJtaWxsaXNlY29uZHNcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShkdXIudmFsdWVzLCBrKSB8fCBoYXNPd25Qcm9wZXJ0eSh0aGlzLnZhbHVlcywgaykpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gZHVyLmdldChrKSArIHRoaXMuZ2V0KGspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cyh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cygoeCwgdSkgPT4gdSA9PT0gXCJob3VyXCIgPyB4ICogMiA6IHgpIC8vPT4geyBob3VyczogMiwgbWludXRlczogMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIG1hcFVuaXRzKGZuKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcykpIHtcbiAgICAgIHJlc3VsdFtrXSA9IGFzTnVtYmVyKGZuKHRoaXMudmFsdWVzW2tdLCBrKSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgneWVhcnMnKSAvLz0+IDJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ21vbnRocycpIC8vPT4gMFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnZGF5cycpIC8vPT4gM1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQodW5pdCkge1xuICAgIHJldHVybiB0aGlzW0R1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCldO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IHllYXJzOiAyMDE3IH0pXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyBob3VyczogOCwgbWludXRlczogMzAgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzZXQodmFsdWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgbWl4ZWQgPSB7IC4uLnRoaXMudmFsdWVzLCAuLi5ub3JtYWxpemVPYmplY3QodmFsdWVzLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSB9O1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogbWl4ZWQgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlIGFuZC9vciBudW1iZXJpbmdTeXN0ZW0uICBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBleGFtcGxlIGR1ci5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHJlY29uZmlndXJlKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGNvbnZlcnNpb25BY2N1cmFjeSB9ID0ge30pIHtcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pLFxuICAgICAgb3B0cyA9IHsgbG9jIH07XG5cbiAgICBpZiAoY29udmVyc2lvbkFjY3VyYWN5KSB7XG4gICAgICBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGNvbnZlcnNpb25BY2N1cmFjeTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgYXModW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnNoaWZ0VG8odW5pdCkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMTUsIGRheXM6IDI1NSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTIsIG1pbnV0ZXM6IC00NSB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDE1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBub3JtYWxpemUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCB2YWxzKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHZhbHMgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGlzIER1cmF0aW9uIGludG8gaXRzIHJlcHJlc2VudGF0aW9uIGluIGEgZGlmZmVyZW50IHNldCBvZiB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5zaGlmdFRvKCdtaW51dGVzJywgJ21pbGxpc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDYwLCBtaWxsaXNlY29uZHM6IDMwMDAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzaGlmdFRvKC4uLnVuaXRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5pdHMgPSB1bml0cy5tYXAoKHUpID0+IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodSkpO1xuXG4gICAgY29uc3QgYnVpbHQgPSB7fSxcbiAgICAgIGFjY3VtdWxhdGVkID0ge30sXG4gICAgICB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIGxldCBsYXN0VW5pdDtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmICh1bml0cy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgbGFzdFVuaXQgPSBrO1xuXG4gICAgICAgIGxldCBvd24gPSAwO1xuXG4gICAgICAgIC8vIGFueXRoaW5nIHdlIGhhdmVuJ3QgYm9pbGVkIGRvd24geWV0IHNob3VsZCBnZXQgYm9pbGVkIHRvIHRoaXMgdW5pdFxuICAgICAgICBmb3IgKGNvbnN0IGFrIGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTtcbiAgICAgICAgICBhY2N1bXVsYXRlZFtha10gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgICAgb3duICs9IHZhbHNba107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpID0gTWF0aC50cnVuYyhvd24pO1xuICAgICAgICBidWlsdFtrXSA9IGk7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gKG93biAqIDEwMDAgLSBpICogMTAwMCkgLyAxMDAwO1xuXG4gICAgICAgIC8vIHBsdXMgYW55dGhpbmcgZnVydGhlciBkb3duIHRoZSBjaGFpbiB0aGF0IHNob3VsZCBiZSByb2xsZWQgdXAgaW4gdG8gdGhpc1xuICAgICAgICBmb3IgKGNvbnN0IGRvd24gaW4gdmFscykge1xuICAgICAgICAgIGlmIChvcmRlcmVkVW5pdHMuaW5kZXhPZihkb3duKSA+IG9yZGVyZWRVbml0cy5pbmRleE9mKGspKSB7XG4gICAgICAgICAgICBjb252ZXJ0KHRoaXMubWF0cml4LCB2YWxzLCBkb3duLCBidWlsdCwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSwga2VlcCBpdCBpbiB0aGUgd2luZ3MgdG8gYm9pbCBpdCBsYXRlclxuICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IHZhbHNba107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxuICAgIC8vIGxhc3RVbml0IG11c3QgYmUgZGVmaW5lZCBzaW5jZSB1bml0cyBpcyBub3QgZW1wdHlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY2N1bXVsYXRlZCkge1xuICAgICAgaWYgKGFjY3VtdWxhdGVkW2tleV0gIT09IDApIHtcbiAgICAgICAgYnVpbHRbbGFzdFVuaXRdICs9XG4gICAgICAgICAga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiBidWlsdCB9LCB0cnVlKS5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5lZ2F0aXZlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkubmVnYXRlKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IC0xLCBzZWNvbmRzOiAtMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIG5lZ2F0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgbmVnYXRlZCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcykpIHtcbiAgICAgIG5lZ2F0ZWRba10gPSAtdGhpcy52YWx1ZXNba107XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogbmVnYXRlZCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHllYXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHllYXJzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy55ZWFycyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcXVhcnRlcnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcXVhcnRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnF1YXJ0ZXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtb250aHMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbW9udGhzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5tb250aHMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWtzXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLndlZWtzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXlzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmRheXMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhvdXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGhvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5ob3VycyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWludXRlcy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtaW51dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taW51dGVzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZWNvbmRzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuc2Vjb25kcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWlsbGlzZWNvbmRzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWlsbGlzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taWxsaXNlY29uZHMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIER1cmF0aW9uIGlzIGludmFsaWQuIEludmFsaWQgZHVyYXRpb25zIGFyZSByZXR1cm5lZCBieSBkaWZmIG9wZXJhdGlvbnNcbiAgICogb24gaW52YWxpZCBEYXRlVGltZXMgb3IgSW50ZXJ2YWxzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEVxdWFsaXR5IGNoZWNrXG4gICAqIFR3byBEdXJhdGlvbnMgYXJlIGVxdWFsIGlmZiB0aGV5IGhhdmUgdGhlIHNhbWUgdW5pdHMgYW5kIHRoZSBzYW1lIHZhbHVlcyBmb3IgZWFjaCB1bml0LlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXEodjEsIHYyKSB7XG4gICAgICAvLyBDb25zaWRlciAwIGFuZCB1bmRlZmluZWQgYXMgZXF1YWxcbiAgICAgIGlmICh2MSA9PT0gdW5kZWZpbmVkIHx8IHYxID09PSAwKSByZXR1cm4gdjIgPT09IHVuZGVmaW5lZCB8fCB2MiA9PT0gMDtcbiAgICAgIHJldHVybiB2MSA9PT0gdjI7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB1IG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKCFlcSh0aGlzLnZhbHVlc1t1XSwgb3RoZXIudmFsdWVzW3VdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvLyB0aGVzZSBhcmVuJ3QgcmVhbGx5IHByaXZhdGUsIGJ1dCBub3IgYXJlIHRoZXkgcmVhbGx5IHVzZWZ1bCB0byBkb2N1bWVudFxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEx1eG9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkRGF0ZVRpbWVFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcbiAgICBzdXBlcihgSW52YWxpZCBEYXRlVGltZTogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZEludGVydmFsRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgSW50ZXJ2YWw6ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWREdXJhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIER1cmF0aW9uOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZFVuaXRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih1bml0KSB7XG4gICAgc3VwZXIoYEludmFsaWQgdW5pdCAke3VuaXR9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFpvbmVJc0Fic3RyYWN0RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJab25lIGlzIGFuIGFic3RyYWN0IGNsYXNzXCIpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBpbnRlZ2VyQmV0d2VlbixcbiAgaXNMZWFwWWVhcixcbiAgdGltZU9iamVjdCxcbiAgZGF5c0luWWVhcixcbiAgZGF5c0luTW9udGgsXG4gIHdlZWtzSW5XZWVrWWVhcixcbiAgaXNJbnRlZ2VyLFxufSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbnZhbGlkLmpzXCI7XG5cbmNvbnN0IG5vbkxlYXBMYWRkZXIgPSBbMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzRdLFxuICBsZWFwTGFkZGVyID0gWzAsIDMxLCA2MCwgOTEsIDEyMSwgMTUyLCAxODIsIDIxMywgMjQ0LCAyNzQsIDMwNSwgMzM1XTtcblxuZnVuY3Rpb24gdW5pdE91dE9mUmFuZ2UodW5pdCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFxuICAgIFwidW5pdCBvdXQgb2YgcmFuZ2VcIixcbiAgICBgeW91IHNwZWNpZmllZCAke3ZhbHVlfSAob2YgdHlwZSAke3R5cGVvZiB2YWx1ZX0pIGFzIGEgJHt1bml0fSwgd2hpY2ggaXMgaW52YWxpZGBcbiAgKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgY29uc3QganMgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpLmdldFVUQ0RheSgpO1xuICByZXR1cm4ganMgPT09IDAgPyA3IDoganM7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgcmV0dXJuIGRheSArIChpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIpW21vbnRoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCkge1xuICBjb25zdCB0YWJsZSA9IGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcixcbiAgICBtb250aDAgPSB0YWJsZS5maW5kSW5kZXgoKGkpID0+IGkgPCBvcmRpbmFsKSxcbiAgICBkYXkgPSBvcmRpbmFsIC0gdGFibGVbbW9udGgwXTtcbiAgcmV0dXJuIHsgbW9udGg6IG1vbnRoMCArIDEsIGRheSB9O1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWdvcmlhblRvV2VlayhncmVnT2JqKSB7XG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ09iaixcbiAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSksXG4gICAgd2Vla2RheSA9IGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KTtcblxuICBsZXQgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKG9yZGluYWwgLSB3ZWVrZGF5ICsgMTApIC8gNyksXG4gICAgd2Vla1llYXI7XG5cbiAgaWYgKHdlZWtOdW1iZXIgPCAxKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyIC0gMTtcbiAgICB3ZWVrTnVtYmVyID0gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICh3ZWVrTnVtYmVyID4gd2Vla3NJbldlZWtZZWFyKHllYXIpKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyICsgMTtcbiAgICB3ZWVrTnVtYmVyID0gMTtcbiAgfSBlbHNlIHtcbiAgICB3ZWVrWWVhciA9IHllYXI7XG4gIH1cblxuICByZXR1cm4geyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSwgLi4udGltZU9iamVjdChncmVnT2JqKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla1RvR3JlZ29yaWFuKHdlZWtEYXRhKSB7XG4gIGNvbnN0IHsgd2Vla1llYXIsIHdlZWtOdW1iZXIsIHdlZWtkYXkgfSA9IHdlZWtEYXRhLFxuICAgIHdlZWtkYXlPZkphbjQgPSBkYXlPZldlZWsod2Vla1llYXIsIDEsIDQpLFxuICAgIHllYXJJbkRheXMgPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcblxuICBsZXQgb3JkaW5hbCA9IHdlZWtOdW1iZXIgKiA3ICsgd2Vla2RheSAtIHdlZWtkYXlPZkphbjQgLSAzLFxuICAgIHllYXI7XG5cbiAgaWYgKG9yZGluYWwgPCAxKSB7XG4gICAgeWVhciA9IHdlZWtZZWFyIC0gMTtcbiAgICBvcmRpbmFsICs9IGRheXNJblllYXIoeWVhcik7XG4gIH0gZWxzZSBpZiAob3JkaW5hbCA+IHllYXJJbkRheXMpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgKyAxO1xuICAgIG9yZGluYWwgLT0gZGF5c0luWWVhcih3ZWVrWWVhcik7XG4gIH0gZWxzZSB7XG4gICAgeWVhciA9IHdlZWtZZWFyO1xuICB9XG5cbiAgY29uc3QgeyBtb250aCwgZGF5IH0gPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpO1xuICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF5LCAuLi50aW1lT2JqZWN0KHdlZWtEYXRhKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZ29yaWFuVG9PcmRpbmFsKGdyZWdEYXRhKSB7XG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ0RhdGE7XG4gIGNvbnN0IG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KTtcbiAgcmV0dXJuIHsgeWVhciwgb3JkaW5hbCwgLi4udGltZU9iamVjdChncmVnRGF0YSkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWxUb0dyZWdvcmlhbihvcmRpbmFsRGF0YSkge1xuICBjb25zdCB7IHllYXIsIG9yZGluYWwgfSA9IG9yZGluYWxEYXRhO1xuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qob3JkaW5hbERhdGEpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkV2Vla0RhdGEob2JqKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoud2Vla1llYXIpLFxuICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSksXG4gICAgdmFsaWRXZWVrZGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtkYXksIDEsIDcpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1llYXJcIiwgb2JqLndlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1wiLCBvYmoud2Vlayk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vla2RheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtkYXlcIiwgb2JqLndlZWtkYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZE9yZGluYWxEYXRhKG9iaikge1xuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpLFxuICAgIHZhbGlkT3JkaW5hbCA9IGludGVnZXJCZXR3ZWVuKG9iai5vcmRpbmFsLCAxLCBkYXlzSW5ZZWFyKG9iai55ZWFyKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRPcmRpbmFsKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwib3JkaW5hbFwiLCBvYmoub3JkaW5hbCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE1vbnRoID0gaW50ZWdlckJldHdlZW4ob2JqLm1vbnRoLCAxLCAxMiksXG4gICAgdmFsaWREYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmouZGF5LCAxLCBkYXlzSW5Nb250aChvYmoueWVhciwgb2JqLm1vbnRoKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNb250aCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1vbnRoXCIsIG9iai5tb250aCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkRGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiZGF5XCIsIG9iai5kYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZFRpbWVEYXRhKG9iaikge1xuICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCB9ID0gb2JqO1xuICBjb25zdCB2YWxpZEhvdXIgPVxuICAgICAgaW50ZWdlckJldHdlZW4oaG91ciwgMCwgMjMpIHx8XG4gICAgICAoaG91ciA9PT0gMjQgJiYgbWludXRlID09PSAwICYmIHNlY29uZCA9PT0gMCAmJiBtaWxsaXNlY29uZCA9PT0gMCksXG4gICAgdmFsaWRNaW51dGUgPSBpbnRlZ2VyQmV0d2VlbihtaW51dGUsIDAsIDU5KSxcbiAgICB2YWxpZFNlY29uZCA9IGludGVnZXJCZXR3ZWVuKHNlY29uZCwgMCwgNTkpLFxuICAgIHZhbGlkTWlsbGlzZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihtaWxsaXNlY29uZCwgMCwgOTk5KTtcblxuICBpZiAoIXZhbGlkSG91cikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImhvdXJcIiwgaG91cik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWludXRlKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkU2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWlsbGlzZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgRHVyYXRpb24gZnJvbSBcIi4uL2R1cmF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGRheURpZmYoZWFybGllciwgbGF0ZXIpIHtcbiAgY29uc3QgdXRjRGF5U3RhcnQgPSAoZHQpID0+IGR0LnRvVVRDKDAsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS5zdGFydE9mKFwiZGF5XCIpLnZhbHVlT2YoKSxcbiAgICBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcyhcImRheXNcIikpO1xufVxuXG5mdW5jdGlvbiBoaWdoT3JkZXJEaWZmcyhjdXJzb3IsIGxhdGVyLCB1bml0cykge1xuICBjb25zdCBkaWZmZXJzID0gW1xuICAgIFtcInllYXJzXCIsIChhLCBiKSA9PiBiLnllYXIgLSBhLnllYXJdLFxuICAgIFtcInF1YXJ0ZXJzXCIsIChhLCBiKSA9PiBiLnF1YXJ0ZXIgLSBhLnF1YXJ0ZXJdLFxuICAgIFtcIm1vbnRoc1wiLCAoYSwgYikgPT4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyXSxcbiAgICBbXG4gICAgICBcIndlZWtzXCIsXG4gICAgICAoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gZGF5RGlmZihhLCBiKTtcbiAgICAgICAgcmV0dXJuIChkYXlzIC0gKGRheXMgJSA3KSkgLyA3O1xuICAgICAgfSxcbiAgICBdLFxuICAgIFtcImRheXNcIiwgZGF5RGlmZl0sXG4gIF07XG5cbiAgY29uc3QgcmVzdWx0cyA9IHt9O1xuICBsZXQgbG93ZXN0T3JkZXIsIGhpZ2hXYXRlcjtcblxuICBmb3IgKGNvbnN0IFt1bml0LCBkaWZmZXJdIG9mIGRpZmZlcnMpIHtcbiAgICBpZiAodW5pdHMuaW5kZXhPZih1bml0KSA+PSAwKSB7XG4gICAgICBsb3dlc3RPcmRlciA9IHVuaXQ7XG5cbiAgICAgIGxldCBkZWx0YSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTtcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKHsgW3VuaXRdOiBkZWx0YSB9KTtcblxuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wbHVzKHsgW3VuaXRdOiBkZWx0YSAtIDEgfSk7XG4gICAgICAgIGRlbHRhIC09IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3IgPSBoaWdoV2F0ZXI7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHNbdW5pdF0gPSBkZWx0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpIHtcbiAgbGV0IFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKTtcblxuICBjb25zdCByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjtcblxuICBjb25zdCBsb3dlck9yZGVyVW5pdHMgPSB1bml0cy5maWx0ZXIoXG4gICAgKHUpID0+IFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl0uaW5kZXhPZih1KSA+PSAwXG4gICk7XG5cbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaGlnaFdhdGVyIDwgbGF0ZXIpIHtcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKHsgW2xvd2VzdE9yZGVyXTogMSB9KTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaFdhdGVyICE9PSBjdXJzb3IpIHtcbiAgICAgIHJlc3VsdHNbbG93ZXN0T3JkZXJdID0gKHJlc3VsdHNbbG93ZXN0T3JkZXJdIHx8IDApICsgcmVtYWluaW5nTWlsbGlzIC8gKGhpZ2hXYXRlciAtIGN1cnNvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZHVyYXRpb24gPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHJlc3VsdHMsIG9wdHMpO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKHJlbWFpbmluZ01pbGxpcywgb3B0cylcbiAgICAgIC5zaGlmdFRvKC4uLmxvd2VyT3JkZXJVbml0cylcbiAgICAgIC5wbHVzKGR1cmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cbn1cbiIsImNvbnN0IG51bWJlcmluZ1N5c3RlbXMgPSB7XG4gIGFyYWI6IFwiW1xcdTA2NjAtXFx1MDY2OV1cIixcbiAgYXJhYmV4dDogXCJbXFx1MDZGMC1cXHUwNkY5XVwiLFxuICBiYWxpOiBcIltcXHUxQjUwLVxcdTFCNTldXCIsXG4gIGJlbmc6IFwiW1xcdTA5RTYtXFx1MDlFRl1cIixcbiAgZGV2YTogXCJbXFx1MDk2Ni1cXHUwOTZGXVwiLFxuICBmdWxsd2lkZTogXCJbXFx1RkYxMC1cXHVGRjE5XVwiLFxuICBndWpyOiBcIltcXHUwQUU2LVxcdTBBRUZdXCIsXG4gIGhhbmlkZWM6IFwiW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV1cIixcbiAga2htcjogXCJbXFx1MTdFMC1cXHUxN0U5XVwiLFxuICBrbmRhOiBcIltcXHUwQ0U2LVxcdTBDRUZdXCIsXG4gIGxhb286IFwiW1xcdTBFRDAtXFx1MEVEOV1cIixcbiAgbGltYjogXCJbXFx1MTk0Ni1cXHUxOTRGXVwiLFxuICBtbHltOiBcIltcXHUwRDY2LVxcdTBENkZdXCIsXG4gIG1vbmc6IFwiW1xcdTE4MTAtXFx1MTgxOV1cIixcbiAgbXltcjogXCJbXFx1MTA0MC1cXHUxMDQ5XVwiLFxuICBvcnlhOiBcIltcXHUwQjY2LVxcdTBCNkZdXCIsXG4gIHRhbWxkZWM6IFwiW1xcdTBCRTYtXFx1MEJFRl1cIixcbiAgdGVsdTogXCJbXFx1MEM2Ni1cXHUwQzZGXVwiLFxuICB0aGFpOiBcIltcXHUwRTUwLVxcdTBFNTldXCIsXG4gIHRpYnQ6IFwiW1xcdTBGMjAtXFx1MEYyOV1cIixcbiAgbGF0bjogXCJcXFxcZFwiLFxufTtcblxuY29uc3QgbnVtYmVyaW5nU3lzdGVtc1VURjE2ID0ge1xuICBhcmFiOiBbMTYzMiwgMTY0MV0sXG4gIGFyYWJleHQ6IFsxNzc2LCAxNzg1XSxcbiAgYmFsaTogWzY5OTIsIDcwMDFdLFxuICBiZW5nOiBbMjUzNCwgMjU0M10sXG4gIGRldmE6IFsyNDA2LCAyNDE1XSxcbiAgZnVsbHdpZGU6IFs2NTI5NiwgNjUzMDNdLFxuICBndWpyOiBbMjc5MCwgMjc5OV0sXG4gIGtobXI6IFs2MTEyLCA2MTIxXSxcbiAga25kYTogWzMzMDIsIDMzMTFdLFxuICBsYW9vOiBbMzc5MiwgMzgwMV0sXG4gIGxpbWI6IFs2NDcwLCA2NDc5XSxcbiAgbWx5bTogWzM0MzAsIDM0MzldLFxuICBtb25nOiBbNjE2MCwgNjE2OV0sXG4gIG15bXI6IFs0MTYwLCA0MTY5XSxcbiAgb3J5YTogWzI5MTgsIDI5MjddLFxuICB0YW1sZGVjOiBbMzA0NiwgMzA1NV0sXG4gIHRlbHU6IFszMTc0LCAzMTgzXSxcbiAgdGhhaTogWzM2NjQsIDM2NzNdLFxuICB0aWJ0OiBbMzg3MiwgMzg4MV0sXG59O1xuXG5jb25zdCBoYW5pZGVjQ2hhcnMgPSBudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMucmVwbGFjZSgvW1xcW3xcXF1dL2csIFwiXCIpLnNwbGl0KFwiXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEaWdpdHMoc3RyKSB7XG4gIGxldCB2YWx1ZSA9IHBhcnNlSW50KHN0ciwgMTApO1xuICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgdmFsdWUgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgIGlmIChzdHJbaV0uc2VhcmNoKG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlICs9IGhhbmlkZWNDaGFycy5pbmRleE9mKHN0cltpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBudW1iZXJpbmdTeXN0ZW1zVVRGMTYpIHtcbiAgICAgICAgICBjb25zdCBbbWluLCBtYXhdID0gbnVtYmVyaW5nU3lzdGVtc1VURjE2W2tleV07XG4gICAgICAgICAgaWYgKGNvZGUgPj0gbWluICYmIGNvZGUgPD0gbWF4KSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBjb2RlIC0gbWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZ2l0UmVnZXgoeyBudW1iZXJpbmdTeXN0ZW0gfSwgYXBwZW5kID0gXCJcIikge1xuICByZXR1cm4gbmV3IFJlZ0V4cChgJHtudW1iZXJpbmdTeXN0ZW1zW251bWJlcmluZ1N5c3RlbSB8fCBcImxhdG5cIl19JHthcHBlbmR9YCk7XG59XG4iLCJpbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmopIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgT2JqZWN0LmtleXMob2JqKS5zb3J0KCkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGNvbnN0IG1vbnRoc0xvbmcgPSBbXG4gIFwiSmFudWFyeVwiLFxuICBcIkZlYnJ1YXJ5XCIsXG4gIFwiTWFyY2hcIixcbiAgXCJBcHJpbFwiLFxuICBcIk1heVwiLFxuICBcIkp1bmVcIixcbiAgXCJKdWx5XCIsXG4gIFwiQXVndXN0XCIsXG4gIFwiU2VwdGVtYmVyXCIsXG4gIFwiT2N0b2JlclwiLFxuICBcIk5vdmVtYmVyXCIsXG4gIFwiRGVjZW1iZXJcIixcbl07XG5cbmV4cG9ydCBjb25zdCBtb250aHNTaG9ydCA9IFtcbiAgXCJKYW5cIixcbiAgXCJGZWJcIixcbiAgXCJNYXJcIixcbiAgXCJBcHJcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5cIixcbiAgXCJKdWxcIixcbiAgXCJBdWdcIixcbiAgXCJTZXBcIixcbiAgXCJPY3RcIixcbiAgXCJOb3ZcIixcbiAgXCJEZWNcIixcbl07XG5cbmV4cG9ydCBjb25zdCBtb250aHNOYXJyb3cgPSBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNOYXJyb3ddO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4ubW9udGhzTG9uZ107XG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgY2FzZSBcIjItZGlnaXRcIjpcbiAgICAgIHJldHVybiBbXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLCBcIjA1XCIsIFwiMDZcIiwgXCIwN1wiLCBcIjA4XCIsIFwiMDlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB3ZWVrZGF5c0xvbmcgPSBbXG4gIFwiTW9uZGF5XCIsXG4gIFwiVHVlc2RheVwiLFxuICBcIldlZG5lc2RheVwiLFxuICBcIlRodXJzZGF5XCIsXG4gIFwiRnJpZGF5XCIsXG4gIFwiU2F0dXJkYXlcIixcbiAgXCJTdW5kYXlcIixcbl07XG5cbmV4cG9ydCBjb25zdCB3ZWVrZGF5c1Nob3J0ID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xuXG5leHBvcnQgY29uc3Qgd2Vla2RheXNOYXJyb3cgPSBbXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIiwgXCJTXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c05hcnJvd107XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzU2hvcnRdO1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzTG9uZ107XG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWVyaWRpZW1zID0gW1wiQU1cIiwgXCJQTVwiXTtcblxuZXhwb3J0IGNvbnN0IGVyYXNMb25nID0gW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdO1xuXG5leHBvcnQgY29uc3QgZXJhc1Nob3J0ID0gW1wiQkNcIiwgXCJBRFwiXTtcblxuZXhwb3J0IGNvbnN0IGVyYXNOYXJyb3cgPSBbXCJCXCIsIFwiQVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVyYXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4uZXJhc1Nob3J0XTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzTG9uZ107XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJpZGllbUZvckRhdGVUaW1lKGR0KSB7XG4gIHJldHVybiBtZXJpZGllbXNbZHQuaG91ciA8IDEyID8gMCA6IDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHdlZWtkYXlzKGxlbmd0aClbZHQud2Vla2RheSAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBtb250aHMobGVuZ3RoKVtkdC5tb250aCAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gZXJhcyhsZW5ndGgpW2R0LnllYXIgPCAwID8gMCA6IDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCBudW1lcmljID0gXCJhbHdheXNcIiwgbmFycm93ID0gZmFsc2UpIHtcbiAgY29uc3QgdW5pdHMgPSB7XG4gICAgeWVhcnM6IFtcInllYXJcIiwgXCJ5ci5cIl0sXG4gICAgcXVhcnRlcnM6IFtcInF1YXJ0ZXJcIiwgXCJxdHIuXCJdLFxuICAgIG1vbnRoczogW1wibW9udGhcIiwgXCJtby5cIl0sXG4gICAgd2Vla3M6IFtcIndlZWtcIiwgXCJ3ay5cIl0sXG4gICAgZGF5czogW1wiZGF5XCIsIFwiZGF5XCIsIFwiZGF5c1wiXSxcbiAgICBob3VyczogW1wiaG91clwiLCBcImhyLlwiXSxcbiAgICBtaW51dGVzOiBbXCJtaW51dGVcIiwgXCJtaW4uXCJdLFxuICAgIHNlY29uZHM6IFtcInNlY29uZFwiLCBcInNlYy5cIl0sXG4gIH07XG5cbiAgY29uc3QgbGFzdGFibGUgPSBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdLmluZGV4T2YodW5pdCkgPT09IC0xO1xuXG4gIGlmIChudW1lcmljID09PSBcImF1dG9cIiAmJiBsYXN0YWJsZSkge1xuICAgIGNvbnN0IGlzRGF5ID0gdW5pdCA9PT0gXCJkYXlzXCI7XG4gICAgc3dpdGNoIChjb3VudCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvbW9ycm93XCIgOiBgbmV4dCAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInllc3RlcmRheVwiIDogYGxhc3QgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvZGF5XCIgOiBgdGhpcyAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBkZWZhdWx0OiAvLyBmYWxsIHRocm91Z2hcbiAgICB9XG4gIH1cblxuICBjb25zdCBpc0luUGFzdCA9IE9iamVjdC5pcyhjb3VudCwgLTApIHx8IGNvdW50IDwgMCxcbiAgICBmbXRWYWx1ZSA9IE1hdGguYWJzKGNvdW50KSxcbiAgICBzaW5ndWxhciA9IGZtdFZhbHVlID09PSAxLFxuICAgIGxpbFVuaXRzID0gdW5pdHNbdW5pdF0sXG4gICAgZm10VW5pdCA9IG5hcnJvd1xuICAgICAgPyBzaW5ndWxhclxuICAgICAgICA/IGxpbFVuaXRzWzFdXG4gICAgICAgIDogbGlsVW5pdHNbMl0gfHwgbGlsVW5pdHNbMV1cbiAgICAgIDogc2luZ3VsYXJcbiAgICAgID8gdW5pdHNbdW5pdF1bMF1cbiAgICAgIDogdW5pdDtcbiAgcmV0dXJuIGlzSW5QYXN0ID8gYCR7Zm10VmFsdWV9ICR7Zm10VW5pdH0gYWdvYCA6IGBpbiAke2ZtdFZhbHVlfSAke2ZtdFVuaXR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFN0cmluZyhrbm93bkZvcm1hdCkge1xuICAvLyB0aGVzZSBhbGwgaGF2ZSB0aGUgb2Zmc2V0cyByZW1vdmVkIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlbVxuICAvLyB3aXRob3V0IGFsbCB0aGUgaW50bCBzdHVmZiB0aGlzIGlzIGJhY2tmaWxsaW5nXG4gIGNvbnN0IGZpbHRlcmVkID0gcGljayhrbm93bkZvcm1hdCwgW1xuICAgICAgXCJ3ZWVrZGF5XCIsXG4gICAgICBcImVyYVwiLFxuICAgICAgXCJ5ZWFyXCIsXG4gICAgICBcIm1vbnRoXCIsXG4gICAgICBcImRheVwiLFxuICAgICAgXCJob3VyXCIsXG4gICAgICBcIm1pbnV0ZVwiLFxuICAgICAgXCJzZWNvbmRcIixcbiAgICAgIFwidGltZVpvbmVOYW1lXCIsXG4gICAgICBcImhvdXJDeWNsZVwiLFxuICAgIF0pLFxuICAgIGtleSA9IHN0cmluZ2lmeShmaWx0ZXJlZCksXG4gICAgZGF0ZVRpbWVIdWdlID0gXCJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW0gYVwiO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9TSE9SVCk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9NRUQpOlxuICAgICAgcmV0dXJuIFwiTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfTUVEX1dJVEhfV0VFS0RBWSk6XG4gICAgICByZXR1cm4gXCJFRUUsIExMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX0ZVTEwpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX0hVR0UpOlxuICAgICAgcmV0dXJuIFwiRUVFRSwgTExMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1NJTVBMRSk6XG4gICAgICByZXR1cm4gXCJoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcImg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfV0lUSF9MT05HX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfU0lNUExFKTpcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJISDptbTpzc1wiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9TSE9SVCk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9NRUQpOlxuICAgICAgcmV0dXJuIFwiTExMIGQsIHl5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfRlVMTCk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfSFVHRSk6XG4gICAgICByZXR1cm4gZGF0ZVRpbWVIdWdlO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSk6XG4gICAgICByZXR1cm4gXCJFRUUsIGQgTExMIHl5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkVFRUUsIExMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gIH1cbn1cbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBuID0gXCJudW1lcmljXCIsXG4gIHMgPSBcInNob3J0XCIsXG4gIGwgPSBcImxvbmdcIjtcblxuZXhwb3J0IGNvbnN0IERBVEVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9NRUQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9NRURfV0lUSF9XRUVLREFZID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9XSVRIX1NIT1JUX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogcyxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcbiIsImltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSBcIi4vZW5nbGlzaC5qc1wiO1xuaW1wb3J0ICogYXMgRm9ybWF0cyBmcm9tIFwiLi9mb3JtYXRzLmpzXCI7XG5pbXBvcnQgeyBwYWRTdGFydCB9IGZyb20gXCIuL3V0aWwuanNcIjtcblxuZnVuY3Rpb24gc3RyaW5naWZ5VG9rZW5zKHNwbGl0cywgdG9rZW5Ub1N0cmluZykge1xuICBsZXQgcyA9IFwiXCI7XG4gIGZvciAoY29uc3QgdG9rZW4gb2Ygc3BsaXRzKSB7XG4gICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgIHMgKz0gdG9rZW4udmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzICs9IHRva2VuVG9TdHJpbmcodG9rZW4udmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbmNvbnN0IG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHMgPSB7XG4gIEQ6IEZvcm1hdHMuREFURV9TSE9SVCxcbiAgREQ6IEZvcm1hdHMuREFURV9NRUQsXG4gIERERDogRm9ybWF0cy5EQVRFX0ZVTEwsXG4gIEREREQ6IEZvcm1hdHMuREFURV9IVUdFLFxuICB0OiBGb3JtYXRzLlRJTUVfU0lNUExFLFxuICB0dDogRm9ybWF0cy5USU1FX1dJVEhfU0VDT05EUyxcbiAgdHR0OiBGb3JtYXRzLlRJTUVfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIHR0dHQ6IEZvcm1hdHMuVElNRV9XSVRIX0xPTkdfT0ZGU0VULFxuICBUOiBGb3JtYXRzLlRJTUVfMjRfU0lNUExFLFxuICBUVDogRm9ybWF0cy5USU1FXzI0X1dJVEhfU0VDT05EUyxcbiAgVFRUOiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIFRUVFQ6IEZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VULFxuICBmOiBGb3JtYXRzLkRBVEVUSU1FX1NIT1JULFxuICBmZjogRm9ybWF0cy5EQVRFVElNRV9NRUQsXG4gIGZmZjogRm9ybWF0cy5EQVRFVElNRV9GVUxMLFxuICBmZmZmOiBGb3JtYXRzLkRBVEVUSU1FX0hVR0UsXG4gIEY6IEZvcm1hdHMuREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTLFxuICBGRjogRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTLFxuICBGRkY6IEZvcm1hdHMuREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMsXG4gIEZGRkY6IEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMsXG59O1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybWF0dGVyIHtcbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgRm9ybWF0dGVyKGxvY2FsZSwgb3B0cyk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VGb3JtYXQoZm10KSB7XG4gICAgbGV0IGN1cnJlbnQgPSBudWxsLFxuICAgICAgY3VycmVudEZ1bGwgPSBcIlwiLFxuICAgICAgYnJhY2tldGVkID0gZmFsc2U7XG4gICAgY29uc3Qgc3BsaXRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBmbXQuY2hhckF0KGkpO1xuICAgICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRGdWxsID0gXCJcIjtcbiAgICAgICAgYnJhY2tldGVkID0gIWJyYWNrZXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoYnJhY2tldGVkKSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2UgaWYgKGMgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBmYWxzZSwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RnVsbCA9IGM7XG4gICAgICAgIGN1cnJlbnQgPSBjO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGJyYWNrZXRlZCwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRzO1xuICB9XG5cbiAgc3RhdGljIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pIHtcbiAgICByZXR1cm4gbWFjcm9Ub2tlblRvRm9ybWF0T3B0c1t0b2tlbl07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIGZvcm1hdE9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBmb3JtYXRPcHRzO1xuICAgIHRoaXMubG9jID0gbG9jYWxlO1xuICAgIHRoaXMuc3lzdGVtTG9jID0gbnVsbDtcbiAgfVxuXG4gIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7XG4gICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7XG4gICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7XG4gICAgfVxuICAgIGNvbnN0IGRmID0gdGhpcy5zeXN0ZW1Mb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lKGR0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZVBhcnRzKGR0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZm9ybWF0VG9QYXJ0cygpO1xuICB9XG5cbiAgcmVzb2x2ZWRPcHRpb25zKGR0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYucmVzb2x2ZWRPcHRpb25zKCk7XG4gIH1cblxuICBudW0obiwgcCA9IDApIHtcbiAgICAvLyB3ZSBnZXQgc29tZSBwZXJmIG91dCBvZiBkb2luZyB0aGlzIGhlcmUsIGFubm95aW5nbHlcbiAgICBpZiAodGhpcy5vcHRzLmZvcmNlU2ltcGxlKSB7XG4gICAgICByZXR1cm4gcGFkU3RhcnQobiwgcCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IHsgLi4udGhpcy5vcHRzIH07XG5cbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIob3B0cykuZm9ybWF0KG4pO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmbXQpIHtcbiAgICBjb25zdCBrbm93bkVuZ2xpc2ggPSB0aGlzLmxvYy5saXN0aW5nTW9kZSgpID09PSBcImVuXCIsXG4gICAgICB1c2VEYXRlVGltZUZvcm1hdHRlciA9IHRoaXMubG9jLm91dHB1dENhbGVuZGFyICYmIHRoaXMubG9jLm91dHB1dENhbGVuZGFyICE9PSBcImdyZWdvcnlcIixcbiAgICAgIHN0cmluZyA9IChvcHRzLCBleHRyYWN0KSA9PiB0aGlzLmxvYy5leHRyYWN0KGR0LCBvcHRzLCBleHRyYWN0KSxcbiAgICAgIGZvcm1hdE9mZnNldCA9IChvcHRzKSA9PiB7XG4gICAgICAgIGlmIChkdC5pc09mZnNldEZpeGVkICYmIGR0Lm9mZnNldCA9PT0gMCAmJiBvcHRzLmFsbG93Wikge1xuICAgICAgICAgIHJldHVybiBcIlpcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkdC5pc1ZhbGlkID8gZHQuem9uZS5mb3JtYXRPZmZzZXQoZHQudHMsIG9wdHMuZm9ybWF0KSA6IFwiXCI7XG4gICAgICB9LFxuICAgICAgbWVyaWRpZW0gPSAoKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2hcbiAgICAgICAgICA/IEVuZ2xpc2gubWVyaWRpZW1Gb3JEYXRlVGltZShkdClcbiAgICAgICAgICA6IHN0cmluZyh7IGhvdXI6IFwibnVtZXJpY1wiLCBob3VyQ3ljbGU6IFwiaDEyXCIgfSwgXCJkYXlwZXJpb2RcIiksXG4gICAgICBtb250aCA9IChsZW5ndGgsIHN0YW5kYWxvbmUpID0+XG4gICAgICAgIGtub3duRW5nbGlzaFxuICAgICAgICAgID8gRW5nbGlzaC5tb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXG4gICAgICAgICAgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHsgbW9udGg6IGxlbmd0aCB9IDogeyBtb250aDogbGVuZ3RoLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIiksXG4gICAgICB3ZWVrZGF5ID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBFbmdsaXNoLndlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKVxuICAgICAgICAgIDogc3RyaW5nKFxuICAgICAgICAgICAgICBzdGFuZGFsb25lID8geyB3ZWVrZGF5OiBsZW5ndGggfSA6IHsgd2Vla2RheTogbGVuZ3RoLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfSxcbiAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCJcbiAgICAgICAgICAgICksXG4gICAgICBtYXliZU1hY3JvID0gKHRva2VuKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbik7XG4gICAgICAgIGlmIChmb3JtYXRPcHRzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIGZvcm1hdE9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVyYSA9IChsZW5ndGgpID0+XG4gICAgICAgIGtub3duRW5nbGlzaCA/IEVuZ2xpc2guZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoeyBlcmE6IGxlbmd0aCB9LCBcImVyYVwiKSxcbiAgICAgIHRva2VuVG9TdHJpbmcgPSAodG9rZW4pID0+IHtcbiAgICAgICAgLy8gV2hlcmUgcG9zc2libGU6IGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZS0xL2RhdGUtdGltZSNUT0MtU3RhbmRhbG9uZS12cy4tRm9ybWF0LVN0eWxlc1xuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgICAgLy8gbXNcbiAgICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbGxpc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQsIDMpO1xuICAgICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnNlY29uZCk7XG4gICAgICAgICAgY2FzZSBcInNzXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcbiAgICAgICAgICAvLyBmcmFjdGlvbmFsIHNlY29uZHNcbiAgICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTApLCAyKTtcbiAgICAgICAgICBjYXNlIFwidXV1XCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwMCkpO1xuICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbnV0ZSk7XG4gICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlLCAyKTtcbiAgICAgICAgICAvLyBob3Vyc1xuICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xuICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyLCAyKTtcbiAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIpO1xuICAgICAgICAgIGNhc2UgXCJISFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIsIDIpO1xuICAgICAgICAgIC8vIG9mZnNldFxuICAgICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICs2XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcIm5hcnJvd1wiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICswNjowMFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogXCJzaG9ydFwiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSArMDYwMFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogXCJ0ZWNoaWVcIiwgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEVTVFxuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6IFwic2hvcnRcIiwgbG9jYWxlOiB0aGlzLmxvYy5sb2NhbGUgfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEVhc3Rlcm4gU3RhbmRhcmQgVGltZVxuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6IFwibG9uZ1wiLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcbiAgICAgICAgICAvLyB6b25lXG4gICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lO1xuICAgICAgICAgIC8vIG1lcmlkaWVtc1xuICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICByZXR1cm4gbWVyaWRpZW0oKTtcbiAgICAgICAgICAvLyBkYXRlc1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyBkYXk6IFwibnVtZXJpY1wiIH0sIFwiZGF5XCIpIDogdGhpcy5udW0oZHQuZGF5KTtcbiAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogXCIyLWRpZ2l0XCIgfSwgXCJkYXlcIikgOiB0aGlzLm51bShkdC5kYXksIDIpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gc3RhbmRhbG9uZVxuICAgICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcImxvbmdcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyBtb250aHMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwibnVtZXJpY1wiLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCk7XG4gICAgICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICAgIHJldHVybiBtb250aChcImxvbmdcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgICAvLyBtb250aHMgLSBmb3JtYXRcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIjItZGlnaXRcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgsIDIpO1xuICAgICAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCBmYWxzZSk7XG4gICAgICAgICAgLy8geWVhcnNcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAyMDE0XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyB5ZWFyOiBcIm51bWVyaWNcIiB9LCBcInllYXJcIikgOiB0aGlzLm51bShkdC55ZWFyKTtcbiAgICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwiMi1kaWdpdFwiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDQpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiBcIm51bWVyaWNcIiB9LCBcInllYXJcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLCA2KTtcbiAgICAgICAgICAvLyBlcmFzXG4gICAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQURcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJzaG9ydFwiKTtcbiAgICAgICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQW5ubyBEb21pbmlcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJsb25nXCIpO1xuICAgICAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICAgICAgcmV0dXJuIGVyYShcIm5hcnJvd1wiKTtcbiAgICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyKTtcbiAgICAgICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyLCAyKTtcbiAgICAgICAgICBjYXNlIFwib1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwpO1xuICAgICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5vcmRpbmFsLCAzKTtcbiAgICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlcik7XG4gICAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlciwgMik7XG4gICAgICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0LnRzIC8gMTAwMCkpO1xuICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQudHMpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbWF5YmVNYWNybyh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcbiAgfVxuXG4gIGZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyhkdXIsIGZtdCkge1xuICAgIGNvbnN0IHRva2VuVG9GaWVsZCA9ICh0b2tlbikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaW51dGVcIjtcbiAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJkYXlcIjtcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRva2VuVG9TdHJpbmcgPSAobGlsZHVyKSA9PiAodG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkID0gdG9rZW5Ub0ZpZWxkKHRva2VuKTtcbiAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm51bShsaWxkdXIuZ2V0KG1hcHBlZCksIHRva2VuLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5zID0gRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksXG4gICAgICByZWFsVG9rZW5zID0gdG9rZW5zLnJlZHVjZShcbiAgICAgICAgKGZvdW5kLCB7IGxpdGVyYWwsIHZhbCB9KSA9PiAobGl0ZXJhbCA/IGZvdW5kIDogZm91bmQuY29uY2F0KHZhbCkpLFxuICAgICAgICBbXVxuICAgICAgKSxcbiAgICAgIGNvbGxhcHNlZCA9IGR1ci5zaGlmdFRvKC4uLnJlYWxUb2tlbnMubWFwKHRva2VuVG9GaWVsZCkuZmlsdGVyKCh0KSA9PiB0KSk7XG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2Vucyh0b2tlbnMsIHRva2VuVG9TdHJpbmcoY29sbGFwc2VkKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWQge1xuICBjb25zdHJ1Y3RvcihyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5leHBsYW5hdGlvbiA9IGV4cGxhbmF0aW9uO1xuICB9XG5cbiAgdG9NZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5yZWFzb259OiAke3RoaXMuZXhwbGFuYXRpb259YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFkU3RhcnQsIHJvdW5kVG8sIGhhc1JlbGF0aXZlIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uL3NldHRpbmdzLmpzXCI7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4uL3pvbmVzL0lBTkFab25lLmpzXCI7XG5cbi8vIHRvZG8gLSByZW1hcCBjYWNoaW5nXG5cbmxldCBpbnRsTEZDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkTEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICBsZXQgZHRmID0gaW50bExGQ2FjaGVba2V5XTtcbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5MaXN0Rm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bExGQ2FjaGVba2V5XSA9IGR0ZjtcbiAgfVxuICByZXR1cm4gZHRmO1xufVxuXG5sZXQgaW50bERUQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZERURihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIGxldCBkdGYgPSBpbnRsRFRDYWNoZVtrZXldO1xuICBpZiAoIWR0Zikge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bERUQ2FjaGVba2V5XSA9IGR0ZjtcbiAgfVxuICByZXR1cm4gZHRmO1xufVxuXG5sZXQgaW50bE51bUNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRJTkYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICBsZXQgaW5mID0gaW50bE51bUNhY2hlW2tleV07XG4gIGlmICghaW5mKSB7XG4gICAgaW5mID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bE51bUNhY2hlW2tleV0gPSBpbmY7XG4gIH1cbiAgcmV0dXJuIGluZjtcbn1cblxubGV0IGludGxSZWxDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkUlRGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IHsgYmFzZSwgLi4uY2FjaGVLZXlPcHRzIH0gPSBvcHRzOyAvLyBleGNsdWRlIGBiYXNlYCBmcm9tIHRoZSBvcHRpb25zXG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIGNhY2hlS2V5T3B0c10pO1xuICBsZXQgaW5mID0gaW50bFJlbENhY2hlW2tleV07XG4gIGlmICghaW5mKSB7XG4gICAgaW5mID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bFJlbENhY2hlW2tleV0gPSBpbmY7XG4gIH1cbiAgcmV0dXJuIGluZjtcbn1cblxubGV0IHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcbmZ1bmN0aW9uIHN5c3RlbUxvY2FsZSgpIHtcbiAgaWYgKHN5c0xvY2FsZUNhY2hlKSB7XG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xuICB9IGVsc2Uge1xuICAgIHN5c0xvY2FsZUNhY2hlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGU7XG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZVN0cikge1xuICAvLyBJIHJlYWxseSB3YW50IHRvIGF2b2lkIHdyaXRpbmcgYSBCQ1AgNDcgcGFyc2VyXG4gIC8vIHNlZSwgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2JjcC00N1xuICAvLyBJbnN0ZWFkLCB3ZSdsbCBkbyB0aGlzOlxuXG4gIC8vIGEpIGlmIHRoZSBzdHJpbmcgaGFzIG5vIC11IGV4dGVuc2lvbnMsIGp1c3QgbGVhdmUgaXQgYWxvbmVcbiAgLy8gYikgaWYgaXQgZG9lcywgdXNlIEludGwgdG8gcmVzb2x2ZSBldmVyeXRoaW5nXG4gIC8vIGMpIGlmIEludGwgZmFpbHMsIHRyeSBhZ2FpbiB3aXRob3V0IHRoZSAtdVxuXG4gIGNvbnN0IHVJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXUtXCIpO1xuICBpZiAodUluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBbbG9jYWxlU3RyXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgb3B0aW9ucztcbiAgICBjb25zdCBzbWFsbGVyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB1SW5kZXgpO1xuICAgIHRyeSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKGxvY2FsZVN0cikucmVzb2x2ZWRPcHRpb25zKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb3B0aW9ucyA9IGdldENhY2hlZERURihzbWFsbGVyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXIgfSA9IG9wdGlvbnM7XG4gICAgLy8gcmV0dXJuIHRoZSBzbWFsbGVyIG9uZSBzbyB0aGF0IHdlIGNhbiBhcHBlbmQgdGhlIGNhbGVuZGFyIGFuZCBudW1iZXJpbmcgb3ZlcnJpZGVzIHRvIGl0XG4gICAgcmV0dXJuIFtzbWFsbGVyLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRsQ29uZmlnU3RyaW5nKGxvY2FsZVN0ciwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikge1xuICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgbG9jYWxlU3RyICs9IFwiLXVcIjtcblxuICAgIGlmIChvdXRwdXRDYWxlbmRhcikge1xuICAgICAgbG9jYWxlU3RyICs9IGAtY2EtJHtvdXRwdXRDYWxlbmRhcn1gO1xuICAgIH1cblxuICAgIGlmIChudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICAgIGxvY2FsZVN0ciArPSBgLW51LSR7bnVtYmVyaW5nU3lzdGVtfWA7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVTdHI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBNb250aHMoZikge1xuICBjb25zdCBtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgY29uc3QgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgaSwgMSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBtYXBXZWVrZGF5cyhmKSB7XG4gIGNvbnN0IG1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgIGNvbnN0IGR0ID0gRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMyArIGkpO1xuICAgIG1zLnB1c2goZihkdCkpO1xuICB9XG4gIHJldHVybiBtcztcbn1cblxuZnVuY3Rpb24gbGlzdFN0dWZmKGxvYywgbGVuZ3RoLCBkZWZhdWx0T0ssIGVuZ2xpc2hGbiwgaW50bEZuKSB7XG4gIGNvbnN0IG1vZGUgPSBsb2MubGlzdGluZ01vZGUoZGVmYXVsdE9LKTtcblxuICBpZiAobW9kZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJlblwiKSB7XG4gICAgcmV0dXJuIGVuZ2xpc2hGbihsZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnRsRm4obGVuZ3RoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0Zhc3ROdW1iZXJzKGxvYykge1xuICBpZiAobG9jLm51bWJlcmluZ1N5c3RlbSAmJiBsb2MubnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgbG9jLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIgfHxcbiAgICAgICFsb2MubG9jYWxlIHx8XG4gICAgICBsb2MubG9jYWxlLnN0YXJ0c1dpdGgoXCJlblwiKSB8fFxuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jLmludGwpLnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCJcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jbGFzcyBQb2x5TnVtYmVyRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoaW50bCwgZm9yY2VTaW1wbGUsIG9wdHMpIHtcbiAgICB0aGlzLnBhZFRvID0gb3B0cy5wYWRUbyB8fCAwO1xuICAgIHRoaXMuZmxvb3IgPSBvcHRzLmZsb29yIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgeyBwYWRUbywgZmxvb3IsIC4uLm90aGVyT3B0cyB9ID0gb3B0cztcblxuICAgIGlmICghZm9yY2VTaW1wbGUgfHwgT2JqZWN0LmtleXMob3RoZXJPcHRzKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbnRsT3B0cyA9IHsgdXNlR3JvdXBpbmc6IGZhbHNlLCAuLi5vcHRzIH07XG4gICAgICBpZiAob3B0cy5wYWRUbyA+IDApIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcbiAgICAgIHRoaXMuaW5mID0gZ2V0Q2FjaGVkSU5GKGludGwsIGludGxPcHRzKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoaSkge1xuICAgIGlmICh0aGlzLmluZikge1xuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7XG4gICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcbiAgICAgIGNvbnN0IGZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiByb3VuZFRvKGksIDMpO1xuICAgICAgcmV0dXJuIHBhZFN0YXJ0KGZpeGVkLCB0aGlzLnBhZFRvKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIFBvbHlEYXRlRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoZHQsIGludGwsIG9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuXG4gICAgbGV0IHo7XG4gICAgaWYgKGR0LnpvbmUuaXNVbml2ZXJzYWwpIHtcbiAgICAgIC8vIFVUQy04IG9yIEV0Yy9VVEMtOCBhcmUgbm90IHBhcnQgb2YgdHpkYXRhLCBvbmx5IEV0Yy9HTVQrOCBhbmQgdGhlIGxpa2UuXG4gICAgICAvLyBUaGF0IGlzIHdoeSBmaXhlZC1vZmZzZXQgVFogaXMgc2V0IHRvIHRoYXQgdW5sZXNzIGl0IGlzOlxuICAgICAgLy8gMS4gUmVwcmVzZW50aW5nIG9mZnNldCAwIHdoZW4gVVRDIGlzIHVzZWQgdG8gbWFpbnRhaW4gcHJldmlvdXMgYmVoYXZpb3IgYW5kIGRvZXMgbm90IGJlY29tZSBHTVQuXG4gICAgICAvLyAyLiBVbnN1cHBvcnRlZCBieSB0aGUgYnJvd3NlcjpcbiAgICAgIC8vICAgIC0gc29tZSBkbyBub3Qgc3VwcG9ydCBFdGMvXG4gICAgICAvLyAgICAtIDwgRXRjL0dNVC0xNCwgPiBFdGMvR01UKzEyLCBhbmQgMzAtbWludXRlIG9yIDQ1LW1pbnV0ZSBvZmZzZXRzIGFyZSBub3QgcGFydCBvZiB0emRhdGFcbiAgICAgIGNvbnN0IGdtdE9mZnNldCA9IC0xICogKGR0Lm9mZnNldCAvIDYwKTtcbiAgICAgIGNvbnN0IG9mZnNldFogPSBnbXRPZmZzZXQgPj0gMCA/IGBFdGMvR01UKyR7Z210T2Zmc2V0fWAgOiBgRXRjL0dNVCR7Z210T2Zmc2V0fWA7XG4gICAgICBpZiAoZHQub2Zmc2V0ICE9PSAwICYmIElBTkFab25lLmNyZWF0ZShvZmZzZXRaKS52YWxpZCkge1xuICAgICAgICB6ID0gb2Zmc2V0WjtcbiAgICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90IGFsbCBmaXhlZC1vZmZzZXQgem9uZXMgbGlrZSBFdGMvKzQ6MzAgYXJlIHByZXNlbnQgaW4gdHpkYXRhLlxuICAgICAgICAvLyBTbyB3ZSBoYXZlIHRvIG1ha2UgZG8uIFR3byBjYXNlczpcbiAgICAgICAgLy8gMS4gVGhlIGZvcm1hdCBvcHRpb25zIHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gV2UgY2FuJ3QgZG8gdGhhdCwgc28gdGhlIGJlc3RcbiAgICAgICAgLy8gd2UgY2FuIGRvIGlzIGZvcm1hdCB0aGUgZGF0ZSBpbiBVVEMuXG4gICAgICAgIC8vIDIuIFRoZSBmb3JtYXQgb3B0aW9ucyBkb24ndCB0ZWxsIHVzIHRvIHNob3cgdGhlIHpvbmUuIFRoZW4gd2UgY2FuIGFkanVzdCB0aGVtXG4gICAgICAgIC8vIHRoZSB0aW1lIGFuZCB0ZWxsIHRoZSBmb3JtYXR0ZXIgdG8gc2hvdyBpdCB0byB1cyBpbiBVVEMsIHNvIHRoYXQgdGhlIHRpbWUgaXMgcmlnaHRcbiAgICAgICAgLy8gYW5kIHRoZSBiYWQgem9uZSBkb2Vzbid0IHNob3cgdXAuXG4gICAgICAgIHogPSBcIlVUQ1wiO1xuICAgICAgICBpZiAob3B0cy50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kdCA9IGR0Lm9mZnNldCA9PT0gMCA/IGR0IDogRGF0ZVRpbWUuZnJvbU1pbGxpcyhkdC50cyArIGR0Lm9mZnNldCAqIDYwICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIikge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGludGxPcHRzID0geyAuLi50aGlzLm9wdHMgfTtcbiAgICBpZiAoeikge1xuICAgICAgaW50bE9wdHMudGltZVpvbmUgPSB6O1xuICAgIH1cbiAgICB0aGlzLmR0ZiA9IGdldENhY2hlZERURihpbnRsLCBpbnRsT3B0cyk7XG4gIH1cblxuICBmb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdCh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICB9XG5cbiAgZm9ybWF0VG9QYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0VG9QYXJ0cyh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICB9XG5cbiAgcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFBvbHlSZWxGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRsLCBpc0VuZ2xpc2gsIG9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSB7IHN0eWxlOiBcImxvbmdcIiwgLi4ub3B0cyB9O1xuICAgIGlmICghaXNFbmdsaXNoICYmIGhhc1JlbGF0aXZlKCkpIHtcbiAgICAgIHRoaXMucnRmID0gZ2V0Q2FjaGVkUlRGKGludGwsIG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdChjb3VudCwgdW5pdCkge1xuICAgIGlmICh0aGlzLnJ0Zikge1xuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdChjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFbmdsaXNoLmZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpIHtcbiAgICBpZiAodGhpcy5ydGYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxlIHtcbiAgc3RhdGljIGZyb21PcHRzKG9wdHMpIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShvcHRzLmxvY2FsZSwgb3B0cy5udW1iZXJpbmdTeXN0ZW0sIG9wdHMub3V0cHV0Q2FsZW5kYXIsIG9wdHMuZGVmYXVsdFRvRU4pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOID0gZmFsc2UpIHtcbiAgICBjb25zdCBzcGVjaWZpZWRMb2NhbGUgPSBsb2NhbGUgfHwgU2V0dGluZ3MuZGVmYXVsdExvY2FsZTtcbiAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuICAgIGNvbnN0IGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpO1xuICAgIGNvbnN0IG51bWJlcmluZ1N5c3RlbVIgPSBudW1iZXJpbmdTeXN0ZW0gfHwgU2V0dGluZ3MuZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICBjb25zdCBvdXRwdXRDYWxlbmRhclIgPSBvdXRwdXRDYWxlbmRhciB8fCBTZXR0aW5ncy5kZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XG4gICAgcmV0dXJuIG5ldyBMb2NhbGUobG9jYWxlUiwgbnVtYmVyaW5nU3lzdGVtUiwgb3V0cHV0Q2FsZW5kYXJSLCBzcGVjaWZpZWRMb2NhbGUpO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuICAgIGludGxEVENhY2hlID0ge307XG4gICAgaW50bE51bUNhY2hlID0ge307XG4gICAgaW50bFJlbENhY2hlID0ge307XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdCh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICBjb25zdCBbcGFyc2VkTG9jYWxlLCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0sIHBhcnNlZE91dHB1dENhbGVuZGFyXSA9IHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZSk7XG5cbiAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDtcbiAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDtcbiAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7XG5cbiAgICB0aGlzLndlZWtkYXlzQ2FjaGUgPSB7IGZvcm1hdDoge30sIHN0YW5kYWxvbmU6IHt9IH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTtcblxuICAgIHRoaXMuc3BlY2lmaWVkTG9jYWxlID0gc3BlY2lmaWVkTG9jYWxlO1xuICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGZhc3ROdW1iZXJzKCkge1xuICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBzdXBwb3J0c0Zhc3ROdW1iZXJzKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICB9XG5cbiAgbGlzdGluZ01vZGUoKSB7XG4gICAgY29uc3QgaXNBY3R1YWxseUVuID0gdGhpcy5pc0VuZ2xpc2goKTtcbiAgICBjb25zdCBoYXNOb1dlaXJkbmVzcyA9XG4gICAgICAodGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG51bGwgfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiKSAmJlxuICAgICAgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gXCJncmVnb3J5XCIpO1xuICAgIHJldHVybiBpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MgPyBcImVuXCIgOiBcImludGxcIjtcbiAgfVxuXG4gIGNsb25lKGFsdHMpIHtcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoXG4gICAgICAgIGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLFxuICAgICAgICBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlZGVmYXVsdFRvRU4oYWx0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlZGVmYXVsdFRvU3lzdGVtKGFsdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKHsgLi4uYWx0cywgZGVmYXVsdFRvRU46IGZhbHNlIH0pO1xuICB9XG5cbiAgbW9udGhzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UsIGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBFbmdsaXNoLm1vbnRocywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdCA/IHsgbW9udGg6IGxlbmd0aCwgZGF5OiBcIm51bWVyaWNcIiB9IDogeyBtb250aDogbGVuZ3RoIH0sXG4gICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/IFwiZm9ybWF0XCIgOiBcInN0YW5kYWxvbmVcIjtcbiAgICAgIGlmICghdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0pIHtcbiAgICAgICAgdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBNb250aHMoKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwibW9udGhcIikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgd2Vla2RheXMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIEVuZ2xpc2gud2Vla2RheXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXRcbiAgICAgICAgICA/IHsgd2Vla2RheTogbGVuZ3RoLCB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH1cbiAgICAgICAgICA6IHsgd2Vla2RheTogbGVuZ3RoIH0sXG4gICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/IFwiZm9ybWF0XCIgOiBcInN0YW5kYWxvbmVcIjtcbiAgICAgIGlmICghdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwV2Vla2RheXMoKGR0KSA9PlxuICAgICAgICAgIHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJ3ZWVrZGF5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIG1lcmlkaWVtcyhkZWZhdWx0T0sgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZihcbiAgICAgIHRoaXMsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICBkZWZhdWx0T0ssXG4gICAgICAoKSA9PiBFbmdsaXNoLm1lcmlkaWVtcyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gSW4gdGhlb3J5IHRoZXJlIGNvdWxkIGJlIGFyaWJpdHJhcnkgZGF5IHBlcmlvZHMuIFdlJ3JlIGdvbm5hIGFzc3VtZSB0aGVyZSBhcmUgZXhhY3RseSB0d29cbiAgICAgICAgLy8gZm9yIEFNIGFuZCBQTS4gVGhpcyBpcyBwcm9iYWJseSB3cm9uZywgYnV0IGl0J3MgbWFrZXMgcGFyc2luZyB3YXkgZWFzaWVyLlxuICAgICAgICBpZiAoIXRoaXMubWVyaWRpZW1DYWNoZSkge1xuICAgICAgICAgIGNvbnN0IGludGwgPSB7IGhvdXI6IFwibnVtZXJpY1wiLCBob3VyQ3ljbGU6IFwiaDEyXCIgfTtcbiAgICAgICAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBbRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgOSksIERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDE5KV0ubWFwKFxuICAgICAgICAgICAgKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwiZGF5cGVyaW9kXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1lcmlkaWVtQ2FjaGU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGVyYXMobGVuZ3RoLCBkZWZhdWx0T0sgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgRW5nbGlzaC5lcmFzLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnRsID0geyBlcmE6IGxlbmd0aCB9O1xuXG4gICAgICAvLyBUaGlzIGlzIHByb2JsZW1hdGljLiBEaWZmZXJlbnQgY2FsZW5kYXJzIGFyZSBnb2luZyB0byBkZWZpbmUgZXJhcyB0b3RhbGx5IGRpZmZlcmVudGx5LiBXaGF0IEkgbmVlZCBpcyB0aGUgbWluaW11bSBzZXQgb2YgZGF0ZXNcbiAgICAgIC8vIHRvIGRlZmluaXRlbHkgZW51bWVyYXRlIHRoZW0uXG4gICAgICBpZiAoIXRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLmVyYUNhY2hlW2xlbmd0aF0gPSBbRGF0ZVRpbWUudXRjKC00MCwgMSwgMSksIERhdGVUaW1lLnV0YygyMDE3LCAxLCAxKV0ubWFwKChkdCkgPT5cbiAgICAgICAgICB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwiZXJhXCIpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVyYUNhY2hlW2xlbmd0aF07XG4gICAgfSk7XG4gIH1cblxuICBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICBjb25zdCBkZiA9IHRoaXMuZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSxcbiAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICBtYXRjaGluZyA9IHJlc3VsdHMuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkKTtcbiAgICByZXR1cm4gbWF0Y2hpbmcgPyBtYXRjaGluZy52YWx1ZSA6IG51bGw7XG4gIH1cblxuICBudW1iZXJGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XG4gICAgLy8gdGhpcyBmb3JjZXNpbXBsZSBvcHRpb24gaXMgbmV2ZXIgdXNlZCAodGhlIG9ubHkgY2FsbGVyIHNob3J0LWNpcmN1aXRzIG9uIGl0LCBidXQgaXQgc2VlbXMgc2FmZXIgdG8gbGVhdmUpXG4gICAgLy8gKGluIGNvbnRyYXN0LCB0aGUgcmVzdCBvZiB0aGUgY29uZGl0aW9uIGlzIHVzZWQgaGVhdmlseSlcbiAgICByZXR1cm4gbmV3IFBvbHlOdW1iZXJGb3JtYXR0ZXIodGhpcy5pbnRsLCBvcHRzLmZvcmNlU2ltcGxlIHx8IHRoaXMuZmFzdE51bWJlcnMsIG9wdHMpO1xuICB9XG5cbiAgZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFBvbHlEYXRlRm9ybWF0dGVyKGR0LCB0aGlzLmludGwsIGludGxPcHRzKTtcbiAgfVxuXG4gIHJlbEZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFBvbHlSZWxGb3JtYXR0ZXIodGhpcy5pbnRsLCB0aGlzLmlzRW5nbGlzaCgpLCBvcHRzKTtcbiAgfVxuXG4gIGxpc3RGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIGdldENhY2hlZExGKHRoaXMuaW50bCwgb3B0cyk7XG4gIH1cblxuICBpc0VuZ2xpc2goKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYWxlID09PSBcImVuXCIgfHxcbiAgICAgIHRoaXMubG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09IFwiZW4tdXNcIiB8fFxuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGUuc3RhcnRzV2l0aChcImVuLXVzXCIpXG4gICAgKTtcbiAgfVxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmXG4gICAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gb3RoZXIubnVtYmVyaW5nU3lzdGVtICYmXG4gICAgICB0aGlzLm91dHB1dENhbGVuZGFyID09PSBvdGhlci5vdXRwdXRDYWxlbmRhclxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHVudHJ1bmNhdGVZZWFyLFxuICBzaWduZWRPZmZzZXQsXG4gIHBhcnNlSW50ZWdlcixcbiAgcGFyc2VNaWxsaXMsXG4gIGlhbmFSZWdleCxcbiAgaXNVbmRlZmluZWQsXG4gIHBhcnNlRmxvYXRpbmcsXG59IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSBcIi4vZW5nbGlzaC5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi4vem9uZXMvZml4ZWRPZmZzZXRab25lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4uL3pvbmVzL0lBTkFab25lLmpzXCI7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaGFuZGxlcyBwYXJzaW5nIGZvciB3ZWxsLXNwZWNpZmllZCBmb3JtYXRzLiBIZXJlJ3MgaG93IGl0IHdvcmtzOlxuICogVHdvIHRoaW5ncyBnbyBpbnRvIHBhcnNpbmc6IGEgcmVnZXggdG8gbWF0Y2ggd2l0aCBhbmQgYW4gZXh0cmFjdG9yIHRvIHRha2UgYXBhcnQgdGhlIGdyb3VwcyBpbiB0aGUgbWF0Y2guXG4gKiBBbiBleHRyYWN0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZWdleCBtYXRjaCBhcnJheSBhbmQgcmV0dXJucyBhIHsgeWVhcjogLi4uLCBtb250aDogLi4uIH0gb2JqZWN0XG4gKiBwYXJzZSgpIGRvZXMgdGhlIHdvcmsgb2YgZXhlY3V0aW5nIHRoZSByZWdleCBhbmQgYXBwbHlpbmcgdGhlIGV4dHJhY3Rvci4gSXQgdGFrZXMgbXVsdGlwbGUgcmVnZXgvZXh0cmFjdG9yIHBhaXJzIHRvIHRyeSBpbiBzZXF1ZW5jZS5cbiAqIEV4dHJhY3RvcnMgY2FuIHRha2UgYSBcImN1cnNvclwiIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IGluIHRoZSBtYXRjaCB0byBsb29rIGF0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gY29tYmluZSBleHRyYWN0b3JzLlxuICogY29tYmluZUV4dHJhY3RvcnMoKSBkb2VzIHRoZSB3b3JrIG9mIGNvbWJpbmluZyB0aGVtLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJzb3IgdGhyb3VnaCBtdWx0aXBsZSBleHRyYWN0aW9ucy5cbiAqIFNvbWUgZXh0cmFjdGlvbnMgYXJlIHN1cGVyIGR1bWIgYW5kIHNpbXBsZVBhcnNlIGFuZCBmcm9tU3RyaW5ncyBoZWxwIERSWSB0aGVtLlxuICovXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWdleGVzKC4uLnJlZ2V4ZXMpIHtcbiAgY29uc3QgZnVsbCA9IHJlZ2V4ZXMucmVkdWNlKChmLCByKSA9PiBmICsgci5zb3VyY2UsIFwiXCIpO1xuICByZXR1cm4gUmVnRXhwKGBeJHtmdWxsfSRgKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoLi4uZXh0cmFjdG9ycykge1xuICByZXR1cm4gKG0pID0+XG4gICAgZXh0cmFjdG9yc1xuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFttZXJnZWRWYWxzLCBtZXJnZWRab25lLCBjdXJzb3JdLCBleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IFt2YWwsIHpvbmUsIG5leHRdID0gZXgobSwgY3Vyc29yKTtcbiAgICAgICAgICByZXR1cm4gW3sgLi4ubWVyZ2VkVmFscywgLi4udmFsIH0sIG1lcmdlZFpvbmUgfHwgem9uZSwgbmV4dF07XG4gICAgICAgIH0sXG4gICAgICAgIFt7fSwgbnVsbCwgMV1cbiAgICAgIClcbiAgICAgIC5zbGljZSgwLCAyKTtcbn1cblxuZnVuY3Rpb24gcGFyc2UocywgLi4ucGF0dGVybnMpIHtcbiAgaWYgKHMgPT0gbnVsbCkge1xuICAgIHJldHVybiBbbnVsbCwgbnVsbF07XG4gIH1cblxuICBmb3IgKGNvbnN0IFtyZWdleCwgZXh0cmFjdG9yXSBvZiBwYXR0ZXJucykge1xuICAgIGNvbnN0IG0gPSByZWdleC5leGVjKHMpO1xuICAgIGlmIChtKSB7XG4gICAgICByZXR1cm4gZXh0cmFjdG9yKG0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW251bGwsIG51bGxdO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVQYXJzZSguLi5rZXlzKSB7XG4gIHJldHVybiAobWF0Y2gsIGN1cnNvcikgPT4ge1xuICAgIGNvbnN0IHJldCA9IHt9O1xuICAgIGxldCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJldFtrZXlzW2ldXSA9IHBhcnNlSW50ZWdlcihtYXRjaFtjdXJzb3IgKyBpXSk7XG4gICAgfVxuICAgIHJldHVybiBbcmV0LCBudWxsLCBjdXJzb3IgKyBpXTtcbiAgfTtcbn1cblxuLy8gSVNPIGFuZCBTUUwgcGFyc2luZ1xuY29uc3Qgb2Zmc2V0UmVnZXggPSAvKD86KFopfChbKy1dXFxkXFxkKSg/Ojo/KFxcZFxcZCkpPykvLFxuICBpc29UaW1lQmFzZVJlZ2V4ID0gLyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzpbLixdKFxcZHsxLDMwfSkpPyk/KT8vLFxuICBpc29UaW1lUmVnZXggPSBSZWdFeHAoYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JHtvZmZzZXRSZWdleC5zb3VyY2V9P2ApLFxuICBpc29UaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OlQke2lzb1RpbWVSZWdleC5zb3VyY2V9KT9gKSxcbiAgaXNvWW1kUmVnZXggPSAvKFsrLV1cXGR7Nn18XFxkezR9KSg/Oi0/KFxcZFxcZCkoPzotPyhcXGRcXGQpKT8pPy8sXG4gIGlzb1dlZWtSZWdleCA9IC8oXFxkezR9KS0/VyhcXGRcXGQpKD86LT8oXFxkKSk/LyxcbiAgaXNvT3JkaW5hbFJlZ2V4ID0gLyhcXGR7NH0pLT8oXFxkezN9KS8sXG4gIGV4dHJhY3RJU09XZWVrRGF0YSA9IHNpbXBsZVBhcnNlKFwid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla0RheVwiKSxcbiAgZXh0cmFjdElTT09yZGluYWxEYXRhID0gc2ltcGxlUGFyc2UoXCJ5ZWFyXCIsIFwib3JkaW5hbFwiKSxcbiAgc3FsWW1kUmVnZXggPSAvKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZCkvLCAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXG4gIHNxbFRpbWVSZWdleCA9IFJlZ0V4cChcbiAgICBgJHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0gPyg/OiR7b2Zmc2V0UmVnZXguc291cmNlfXwoJHtpYW5hUmVnZXguc291cmNlfSkpP2BcbiAgKSxcbiAgc3FsVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKGAoPzogJHtzcWxUaW1lUmVnZXguc291cmNlfSk/YCk7XG5cbmZ1bmN0aW9uIGludChtYXRjaCwgcG9zLCBmYWxsYmFjaykge1xuICBjb25zdCBtID0gbWF0Y2hbcG9zXTtcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKG0pID8gZmFsbGJhY2sgOiBwYXJzZUludGVnZXIobSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09ZbWQobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCBpdGVtID0ge1xuICAgIHllYXI6IGludChtYXRjaCwgY3Vyc29yKSxcbiAgICBtb250aDogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAxKSxcbiAgICBkYXk6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMSksXG4gIH07XG5cbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT1RpbWUobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCBpdGVtID0ge1xuICAgIGhvdXJzOiBpbnQobWF0Y2gsIGN1cnNvciwgMCksXG4gICAgbWludXRlczogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAwKSxcbiAgICBzZWNvbmRzOiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDApLFxuICAgIG1pbGxpc2Vjb25kczogcGFyc2VNaWxsaXMobWF0Y2hbY3Vyc29yICsgM10pLFxuICB9O1xuXG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgNF07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09PZmZzZXQobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCBsb2NhbCA9ICFtYXRjaFtjdXJzb3JdICYmICFtYXRjaFtjdXJzb3IgKyAxXSxcbiAgICBmdWxsT2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG1hdGNoW2N1cnNvciArIDFdLCBtYXRjaFtjdXJzb3IgKyAyXSksXG4gICAgem9uZSA9IGxvY2FsID8gbnVsbCA6IEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShmdWxsT2Zmc2V0KTtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgM107XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJQU5BWm9uZShtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IHpvbmUgPSBtYXRjaFtjdXJzb3JdID8gSUFOQVpvbmUuY3JlYXRlKG1hdGNoW2N1cnNvcl0pIDogbnVsbDtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgMV07XG59XG5cbi8vIElTTyB0aW1lIHBhcnNpbmdcblxuY29uc3QgaXNvVGltZU9ubHkgPSBSZWdFeHAoYF5UPyR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JGApO1xuXG4vLyBJU08gZHVyYXRpb24gcGFyc2luZ1xuXG5jb25zdCBpc29EdXJhdGlvbiA9XG4gIC9eLT9QKD86KD86KC0/XFxkezEsOX0oPzpcXC5cXGR7MSw5fSk/KVkpPyg/OigtP1xcZHsxLDl9KD86XFwuXFxkezEsOX0pPylNKT8oPzooLT9cXGR7MSw5fSg/OlxcLlxcZHsxLDl9KT8pVyk/KD86KC0/XFxkezEsOX0oPzpcXC5cXGR7MSw5fSk/KUQpPyg/OlQoPzooLT9cXGR7MSw5fSg/OlxcLlxcZHsxLDl9KT8pSCk/KD86KC0/XFxkezEsOX0oPzpcXC5cXGR7MSw5fSk/KU0pPyg/OigtP1xcZHsxLDIwfSkoPzpbLixdKC0/XFxkezEsOX0pKT9TKT8pPykkLztcblxuZnVuY3Rpb24gZXh0cmFjdElTT0R1cmF0aW9uKG1hdGNoKSB7XG4gIGNvbnN0IFtzLCB5ZWFyU3RyLCBtb250aFN0ciwgd2Vla1N0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0ciwgbWlsbGlzZWNvbmRzU3RyXSA9XG4gICAgbWF0Y2g7XG5cbiAgY29uc3QgaGFzTmVnYXRpdmVQcmVmaXggPSBzWzBdID09PSBcIi1cIjtcbiAgY29uc3QgbmVnYXRpdmVTZWNvbmRzID0gc2Vjb25kU3RyICYmIHNlY29uZFN0clswXSA9PT0gXCItXCI7XG5cbiAgY29uc3QgbWF5YmVOZWdhdGUgPSAobnVtLCBmb3JjZSA9IGZhbHNlKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIChmb3JjZSB8fCAobnVtICYmIGhhc05lZ2F0aXZlUHJlZml4KSkgPyAtbnVtIDogbnVtO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgeWVhcnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoeWVhclN0cikpLFxuICAgICAgbW9udGhzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1vbnRoU3RyKSksXG4gICAgICB3ZWVrczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh3ZWVrU3RyKSksXG4gICAgICBkYXlzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKGRheVN0cikpLFxuICAgICAgaG91cnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoaG91clN0cikpLFxuICAgICAgbWludXRlczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhtaW51dGVTdHIpKSxcbiAgICAgIHNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoc2Vjb25kU3RyKSwgc2Vjb25kU3RyID09PSBcIi0wXCIpLFxuICAgICAgbWlsbGlzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZU1pbGxpcyhtaWxsaXNlY29uZHNTdHIpLCBuZWdhdGl2ZVNlY29uZHMpLFxuICAgIH0sXG4gIF07XG59XG5cbi8vIFRoZXNlIGFyZSBhIGxpdHRsZSBicmFpbmRlYWQuIEVEVCAqc2hvdWxkKiB0ZWxsIHVzIHRoYXQgd2UncmUgaW4sIHNheSwgQW1lcmljYS9OZXdfWW9ya1xuLy8gYW5kIG5vdCBqdXN0IHRoYXQgd2UncmUgaW4gLTI0MCAqcmlnaHQgbm93Ki4gQnV0IHNpbmNlIEkgZG9uJ3QgdGhpbmsgdGhlc2UgYXJlIHVzZWQgdGhhdCBvZnRlblxuLy8gSSdtIGp1c3QgZ29pbmcgdG8gaWdub3JlIHRoYXRcbmNvbnN0IG9ic09mZnNldHMgPSB7XG4gIEdNVDogMCxcbiAgRURUOiAtNCAqIDYwLFxuICBFU1Q6IC01ICogNjAsXG4gIENEVDogLTUgKiA2MCxcbiAgQ1NUOiAtNiAqIDYwLFxuICBNRFQ6IC02ICogNjAsXG4gIE1TVDogLTcgKiA2MCxcbiAgUERUOiAtNyAqIDYwLFxuICBQU1Q6IC04ICogNjAsXG59O1xuXG5mdW5jdGlvbiBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgeWVhcjogeWVhclN0ci5sZW5ndGggPT09IDIgPyB1bnRydW5jYXRlWWVhcihwYXJzZUludGVnZXIoeWVhclN0cikpIDogcGFyc2VJbnRlZ2VyKHllYXJTdHIpLFxuICAgIG1vbnRoOiBFbmdsaXNoLm1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpICsgMSxcbiAgICBkYXk6IHBhcnNlSW50ZWdlcihkYXlTdHIpLFxuICAgIGhvdXI6IHBhcnNlSW50ZWdlcihob3VyU3RyKSxcbiAgICBtaW51dGU6IHBhcnNlSW50ZWdlcihtaW51dGVTdHIpLFxuICB9O1xuXG4gIGlmIChzZWNvbmRTdHIpIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludGVnZXIoc2Vjb25kU3RyKTtcbiAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICByZXN1bHQud2Vla2RheSA9XG4gICAgICB3ZWVrZGF5U3RyLmxlbmd0aCA+IDNcbiAgICAgICAgPyBFbmdsaXNoLndlZWtkYXlzTG9uZy5pbmRleE9mKHdlZWtkYXlTdHIpICsgMVxuICAgICAgICA6IEVuZ2xpc2gud2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpICsgMTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFJGQyAyODIyLzUzMjJcbmNvbnN0IHJmYzI4MjIgPVxuICAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLFxccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoPzooWystXVxcZFxcZCkoXFxkXFxkKSkpJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RSRkMyODIyKG1hdGNoKSB7XG4gIGNvbnN0IFtcbiAgICAgICxcbiAgICAgIHdlZWtkYXlTdHIsXG4gICAgICBkYXlTdHIsXG4gICAgICBtb250aFN0cixcbiAgICAgIHllYXJTdHIsXG4gICAgICBob3VyU3RyLFxuICAgICAgbWludXRlU3RyLFxuICAgICAgc2Vjb25kU3RyLFxuICAgICAgb2JzT2Zmc2V0LFxuICAgICAgbWlsT2Zmc2V0LFxuICAgICAgb2ZmSG91clN0cixcbiAgICAgIG9mZk1pbnV0ZVN0cixcbiAgICBdID0gbWF0Y2gsXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuXG4gIGxldCBvZmZzZXQ7XG4gIGlmIChvYnNPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gIH0gZWxzZSBpZiAobWlsT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXQgPSBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKTtcbiAgfVxuXG4gIHJldHVybiBbcmVzdWx0LCBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCldO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gIHJldHVybiBzXG4gICAgLnJlcGxhY2UoL1xcKFteKV0qXFwpfFtcXG5cXHRdL2csIFwiIFwiKVxuICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgXCIgXCIpXG4gICAgLnRyaW0oKTtcbn1cblxuLy8gaHR0cCBkYXRlXG5cbmNvbnN0IHJmYzExMjMgPVxuICAgIC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksIChcXGRcXGQpIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKFxcZHs0fSkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gIHJmYzg1MCA9XG4gICAgL14oTW9uZGF5fFR1ZXNkYXl8V2Vkc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxcZFxcZCktKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKS0oXFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgYXNjaWkgPVxuICAgIC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1bikgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoIFxcZHxcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIChcXGR7NH0pJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RSRkMxMTIzT3I4NTAobWF0Y2gpIHtcbiAgY29uc3QgWywgd2Vla2RheVN0ciwgZGF5U3RyLCBtb250aFN0ciwgeWVhclN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHJdID0gbWF0Y2gsXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEFTQ0lJKG1hdGNoKSB7XG4gIGNvbnN0IFssIHdlZWtkYXlTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCB5ZWFyU3RyXSA9IG1hdGNoLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG5cbmNvbnN0IGlzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29ZbWRSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvV2Vla1JlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29PcmRpbmFsUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29UaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1RpbWVSZWdleCk7XG5cbmNvbnN0IGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09ZbWQsXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0XG4pO1xuY29uc3QgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09XZWVrRGF0YSxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXRcbik7XG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGVBbmRUaW1lID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09PcmRpbmFsRGF0YSxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXRcbik7XG5jb25zdCBleHRyYWN0SVNPVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0KTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTT0RhdGUocykge1xuICByZXR1cm4gcGFyc2UoXG4gICAgcyxcbiAgICBbaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXRdLFxuICAgIFtpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0XSxcbiAgICBbaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWVdLFxuICAgIFtpc29UaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXRdXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJGQzI4MjJEYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHByZXByb2Nlc3NSRkMyODIyKHMpLCBbcmZjMjgyMiwgZXh0cmFjdFJGQzI4MjJdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSFRUUERhdGUocykge1xuICByZXR1cm4gcGFyc2UoXG4gICAgcyxcbiAgICBbcmZjMTEyMywgZXh0cmFjdFJGQzExMjNPcjg1MF0sXG4gICAgW3JmYzg1MCwgZXh0cmFjdFJGQzExMjNPcjg1MF0sXG4gICAgW2FzY2lpLCBleHRyYWN0QVNDSUldXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTT0R1cmF0aW9uKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29EdXJhdGlvbiwgZXh0cmFjdElTT0R1cmF0aW9uXSk7XG59XG5cbmNvbnN0IGV4dHJhY3RJU09UaW1lT25seSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPVGltZU9ubHkocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb1RpbWVPbmx5LCBleHRyYWN0SVNPVGltZU9ubHldKTtcbn1cblxuY29uc3Qgc3FsWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFltZFJlZ2V4LCBzcWxUaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3Qgc3FsVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxUaW1lUmVnZXgpO1xuXG5jb25zdCBleHRyYWN0SVNPWW1kVGltZU9mZnNldEFuZElBTkFab25lID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09ZbWQsXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5jb25zdCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNRTChzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZU9mZnNldEFuZElBTkFab25lXSxcbiAgICBbc3FsVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmVdXG4gICk7XG59XG4iLCJpbXBvcnQgeyBwYXJzZU1pbGxpcywgaXNVbmRlZmluZWQsIHVudHJ1bmNhdGVZZWFyLCBzaWduZWRPZmZzZXQsIGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IHsgZGlnaXRSZWdleCwgcGFyc2VEaWdpdHMgfSBmcm9tIFwiLi9kaWdpdHMuanNcIjtcbmltcG9ydCB7IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuXG5jb25zdCBNSVNTSU5HX0ZUUCA9IFwibWlzc2luZyBJbnRsLkRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMgc3VwcG9ydFwiO1xuXG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0ID0gKGkpID0+IGkpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoW3NdKSA9PiBwb3N0KHBhcnNlRGlnaXRzKHMpKSB9O1xufVxuXG5jb25zdCBOQlNQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xuY29uc3Qgc3BhY2VPck5CU1AgPSBgKCB8JHtOQlNQfSlgO1xuY29uc3Qgc3BhY2VPck5CU1BSZWdFeHAgPSBuZXcgUmVnRXhwKHNwYWNlT3JOQlNQLCBcImdcIik7XG5cbmZ1bmN0aW9uIGZpeExpc3RSZWdleChzKSB7XG4gIC8vIG1ha2UgZG90cyBvcHRpb25hbCBhbmQgYWxzbyBtYWtlIHRoZW0gbGl0ZXJhbFxuICAvLyBtYWtlIHNwYWNlIGFuZCBub24gYnJlYWthYmxlIHNwYWNlIGNoYXJhY3RlcnMgaW50ZXJjaGFuZ2VhYmxlXG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuP1wiKS5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCBzcGFjZU9yTkJTUCk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpIHtcbiAgcmV0dXJuIHNcbiAgICAucmVwbGFjZSgvXFwuL2csIFwiXCIpIC8vIGlnbm9yZSBkb3RzIHRoYXQgd2VyZSBtYWRlIG9wdGlvbmFsXG4gICAgLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIFwiIFwiKSAvLyBpbnRlcmNoYW5nZSBzcGFjZSBhbmQgbmJzcFxuICAgIC50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBvbmVPZihzdHJpbmdzLCBzdGFydEluZGV4KSB7XG4gIGlmIChzdHJpbmdzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoc3RyaW5ncy5tYXAoZml4TGlzdFJlZ2V4KS5qb2luKFwifFwiKSksXG4gICAgICBkZXNlcjogKFtzXSkgPT5cbiAgICAgICAgc3RyaW5ncy5maW5kSW5kZXgoKGkpID0+IHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpID09PSBzdHJpcEluc2Vuc2l0aXZpdGllcyhpKSkgKyBzdGFydEluZGV4LFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gb2Zmc2V0KHJlZ2V4LCBncm91cHMpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoWywgaCwgbV0pID0+IHNpZ25lZE9mZnNldChoLCBtKSwgZ3JvdXBzIH07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZShyZWdleCkge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbc10pID0+IHMgfTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlVG9rZW4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuZnVuY3Rpb24gdW5pdEZvclRva2VuKHRva2VuLCBsb2MpIHtcbiAgY29uc3Qgb25lID0gZGlnaXRSZWdleChsb2MpLFxuICAgIHR3byA9IGRpZ2l0UmVnZXgobG9jLCBcInsyfVwiKSxcbiAgICB0aHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInszfVwiKSxcbiAgICBmb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezR9XCIpLFxuICAgIHNpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns2fVwiKSxcbiAgICBvbmVPclR3byA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDJ9XCIpLFxuICAgIG9uZVRvVGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwzfVwiKSxcbiAgICBvbmVUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDZ9XCIpLFxuICAgIG9uZVRvTmluZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDl9XCIpLFxuICAgIHR3b1RvRm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcInsyLDR9XCIpLFxuICAgIGZvdXJUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns0LDZ9XCIpLFxuICAgIGxpdGVyYWwgPSAodCkgPT4gKHsgcmVnZXg6IFJlZ0V4cChlc2NhcGVUb2tlbih0LnZhbCkpLCBkZXNlcjogKFtzXSkgPT4gcywgbGl0ZXJhbDogdHJ1ZSB9KSxcbiAgICB1bml0YXRlID0gKHQpID0+IHtcbiAgICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0LnZhbCkge1xuICAgICAgICAvLyBlcmFcbiAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJzaG9ydFwiLCBmYWxzZSksIDApO1xuICAgICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJsb25nXCIsIGZhbHNlKSwgMCk7XG4gICAgICAgIC8vIHllYXJzXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcInl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHNpeCk7XG4gICAgICAgIC8vIG1vbnRoc1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgLy8gZGF0ZXNcbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIG9yZGluYWxzXG4gICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIC8vIHRpbWVcbiAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xuICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUob25lVG9OaW5lKTtcbiAgICAgICAgY2FzZSBcInV1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJ1dXVcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuICAgICAgICAvLyBtZXJpZGllbVxuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubWVyaWRpZW1zKCksIDApO1xuICAgICAgICAvLyB3ZWVrWWVhciAoaylcbiAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG4gICAgICAgIC8vIHdlZWtOdW1iZXIgKFcpXG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICAvLyB3ZWVrZGF5c1xuICAgICAgICBjYXNlIFwiRVwiOlxuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwibG9uZ1wiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBvZmZzZXQvem9uZVxuICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoYChbKy1dJHtvbmVPclR3by5zb3VyY2V9KSg/OjooJHt0d28uc291cmNlfSkpP2ApLCAyKTtcbiAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChgKFsrLV0ke29uZU9yVHdvLnNvdXJjZX0pKCR7dHdvLnNvdXJjZX0pP2ApLCAyKTtcbiAgICAgICAgLy8gd2UgZG9uJ3Qgc3VwcG9ydCBaWlpaIChQU1QpIG9yIFpaWlpaIChQYWNpZmljIFN0YW5kYXJkIFRpbWUpIGluIHBhcnNpbmdcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFueSB3YXkgdG8gZmlndXJlIG91dCB3aGF0IHRoZXkgYXJlXG4gICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZSgvW2Etel8rLS9dezEsMjU2fT8vaSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgICB9XG4gICAgfTtcblxuICBjb25zdCB1bml0ID0gdW5pdGF0ZSh0b2tlbikgfHwge1xuICAgIGludmFsaWRSZWFzb246IE1JU1NJTkdfRlRQLFxuICB9O1xuXG4gIHVuaXQudG9rZW4gPSB0b2tlbjtcblxuICByZXR1cm4gdW5pdDtcbn1cblxuY29uc3QgcGFydFR5cGVTdHlsZVRvVG9rZW5WYWwgPSB7XG4gIHllYXI6IHtcbiAgICBcIjItZGlnaXRcIjogXCJ5eVwiLFxuICAgIG51bWVyaWM6IFwieXl5eXlcIixcbiAgfSxcbiAgbW9udGg6IHtcbiAgICBudW1lcmljOiBcIk1cIixcbiAgICBcIjItZGlnaXRcIjogXCJNTVwiLFxuICAgIHNob3J0OiBcIk1NTVwiLFxuICAgIGxvbmc6IFwiTU1NTVwiLFxuICB9LFxuICBkYXk6IHtcbiAgICBudW1lcmljOiBcImRcIixcbiAgICBcIjItZGlnaXRcIjogXCJkZFwiLFxuICB9LFxuICB3ZWVrZGF5OiB7XG4gICAgc2hvcnQ6IFwiRUVFXCIsXG4gICAgbG9uZzogXCJFRUVFXCIsXG4gIH0sXG4gIGRheXBlcmlvZDogXCJhXCIsXG4gIGRheVBlcmlvZDogXCJhXCIsXG4gIGhvdXI6IHtcbiAgICBudW1lcmljOiBcImhcIixcbiAgICBcIjItZGlnaXRcIjogXCJoaFwiLFxuICB9LFxuICBtaW51dGU6IHtcbiAgICBudW1lcmljOiBcIm1cIixcbiAgICBcIjItZGlnaXRcIjogXCJtbVwiLFxuICB9LFxuICBzZWNvbmQ6IHtcbiAgICBudW1lcmljOiBcInNcIixcbiAgICBcIjItZGlnaXRcIjogXCJzc1wiLFxuICB9LFxufTtcblxuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGxvY2FsZSwgZm9ybWF0T3B0cykge1xuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBwYXJ0O1xuXG4gIGlmICh0eXBlID09PSBcImxpdGVyYWxcIikge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiB0cnVlLFxuICAgICAgdmFsOiB2YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSBmb3JtYXRPcHRzW3R5cGVdO1xuXG4gIGxldCB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFt0eXBlXTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xuICB9XG5cbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgIHZhbCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykge1xuICBjb25zdCByZSA9IHVuaXRzLm1hcCgodSkgPT4gdS5yZWdleCkucmVkdWNlKChmLCByKSA9PiBgJHtmfSgke3Iuc291cmNlfSlgLCBcIlwiKTtcbiAgcmV0dXJuIFtgXiR7cmV9JGAsIHVuaXRzXTtcbn1cblxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xuICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2gocmVnZXgpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgY29uc3QgYWxsID0ge307XG4gICAgbGV0IG1hdGNoSW5kZXggPSAxO1xuICAgIGZvciAoY29uc3QgaSBpbiBoYW5kbGVycykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xuICAgICAgICBjb25zdCBoID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgY29uc3QgdG9GaWVsZCA9ICh0b2tlbikgPT4ge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiBcImhvdXJcIjtcbiAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIFwib3JkaW5hbFwiO1xuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG4gICAgICBjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla2RheVwiO1xuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla051bWJlclwiO1xuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla1llYXJcIjtcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBcInF1YXJ0ZXJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBsZXQgem9uZSA9IG51bGw7XG4gIGxldCBzcGVjaWZpY09mZnNldDtcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnopKSB7XG4gICAgem9uZSA9IElBTkFab25lLmNyZWF0ZShtYXRjaGVzLnopO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLlopKSB7XG4gICAgaWYgKCF6b25lKSB7XG4gICAgICB6b25lID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZShtYXRjaGVzLlopO1xuICAgIH1cbiAgICBzcGVjaWZpY09mZnNldCA9IG1hdGNoZXMuWjtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcbiAgICAgIG1hdGNoZXMuaCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1hdGNoZXMuRyA9PT0gMCAmJiBtYXRjaGVzLnkpIHtcbiAgICBtYXRjaGVzLnkgPSAtbWF0Y2hlcy55O1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5yZWR1Y2UoKHIsIGspID0+IHtcbiAgICBjb25zdCBmID0gdG9GaWVsZChrKTtcbiAgICBpZiAoZikge1xuICAgICAgcltmXSA9IG1hdGNoZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gW3ZhbHMsIHpvbmUsIHNwZWNpZmljT2Zmc2V0XTtcbn1cblxubGV0IGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldER1bW15RGF0ZVRpbWUoKSB7XG4gIGlmICghZHVtbXlEYXRlVGltZUNhY2hlKSB7XG4gICAgZHVtbXlEYXRlVGltZUNhY2hlID0gRGF0ZVRpbWUuZnJvbU1pbGxpcygxNTU1NTU1NTU1NTU1KTtcbiAgfVxuXG4gIHJldHVybiBkdW1teURhdGVUaW1lQ2FjaGU7XG59XG5cbmZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7XG4gIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XG5cbiAgaWYgKCFmb3JtYXRPcHRzKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyID0gRm9ybWF0dGVyLmNyZWF0ZShsb2NhbGUsIGZvcm1hdE9wdHMpO1xuICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXREYXRlVGltZVBhcnRzKGdldER1bW15RGF0ZVRpbWUoKSk7XG5cbiAgY29uc3QgdG9rZW5zID0gcGFydHMubWFwKChwKSA9PiB0b2tlbkZvclBhcnQocCwgbG9jYWxlLCBmb3JtYXRPcHRzKSk7XG5cbiAgaWYgKHRva2Vucy5pbmNsdWRlcyh1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZXhwYW5kTWFjcm9Ub2tlbnModG9rZW5zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4udG9rZW5zLm1hcCgodCkgPT4gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHQsIGxvY2FsZSkpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgY29uc3QgdG9rZW5zID0gZXhwYW5kTWFjcm9Ub2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZvcm1hdCksIGxvY2FsZSksXG4gICAgdW5pdHMgPSB0b2tlbnMubWFwKCh0KSA9PiB1bml0Rm9yVG9rZW4odCwgbG9jYWxlKSksXG4gICAgZGlzcXVhbGlmeWluZ1VuaXQgPSB1bml0cy5maW5kKCh0KSA9PiB0LmludmFsaWRSZWFzb24pO1xuXG4gIGlmIChkaXNxdWFsaWZ5aW5nVW5pdCkge1xuICAgIHJldHVybiB7IGlucHV0LCB0b2tlbnMsIGludmFsaWRSZWFzb246IGRpc3F1YWxpZnlpbmdVbml0LmludmFsaWRSZWFzb24gfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbcmVnZXhTdHJpbmcsIGhhbmRsZXJzXSA9IGJ1aWxkUmVnZXgodW5pdHMpLFxuICAgICAgcmVnZXggPSBSZWdFeHAocmVnZXhTdHJpbmcsIFwiaVwiKSxcbiAgICAgIFtyYXdNYXRjaGVzLCBtYXRjaGVzXSA9IG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpLFxuICAgICAgW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXRdID0gbWF0Y2hlc1xuICAgICAgICA/IGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcylcbiAgICAgICAgOiBbbnVsbCwgbnVsbCwgdW5kZWZpbmVkXTtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJhXCIpICYmIGhhc093blByb3BlcnR5KG1hdGNoZXMsIFwiSFwiKSkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IGluY2x1ZGUgbWVyaWRpZW0gd2hlbiBzcGVjaWZ5aW5nIDI0LWhvdXIgZm9ybWF0XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7IGlucHV0LCB0b2tlbnMsIHJlZ2V4LCByYXdNYXRjaGVzLCBtYXRjaGVzLCByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0IH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgY29uc3QgeyByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uIH0gPSBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpO1xuICByZXR1cm4gW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb25dO1xufVxuIiwiLypcbiAgVGhpcyBpcyBqdXN0IGEganVuayBkcmF3ZXIsIGNvbnRhaW5pbmcgYW55dGhpbmcgdXNlZCBhY3Jvc3MgbXVsdGlwbGUgY2xhc3Nlcy5cbiAgQmVjYXVzZSBMdXhvbiBpcyBzbWFsbChpc2gpLCB0aGlzIHNob3VsZCBzdGF5IHNtYWxsIGFuZCB3ZSB3b24ndCB3b3JyeSBhYm91dCBzcGxpdHRpbmdcbiAgaXQgdXAgaW50bywgc2F5LCBwYXJzaW5nVXRpbC5qcyBhbmQgYmFzaWNVdGlsLmpzIGFuZCBzbyBvbi4gQnV0IHRoZXkgYXJlIGRpdmlkZWQgdXAgYnkgZmVhdHVyZSBhcmVhLlxuKi9cblxuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IgfSBmcm9tIFwiLi4vZXJyb3JzLmpzXCI7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG4vLyBUWVBFU1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwidW5kZWZpbmVkXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIiAmJiBvICUgMSA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInN0cmluZ1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gXCJbb2JqZWN0IERhdGVdXCI7XG59XG5cbi8vIENBUEFCSUxJVElFU1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzUmVsYXRpdmUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSBcInVuZGVmaW5lZFwiICYmICEhSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gT0JKRUNUUyBBTkQgQVJSQVlTXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXliZUFycmF5KHRoaW5nKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IHRoaW5nIDogW3RoaW5nXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJlc3RCeShhcnIsIGJ5LCBjb21wYXJlKSB7XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYXJyLnJlZHVjZSgoYmVzdCwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHBhaXIgPSBbYnkobmV4dCksIG5leHRdO1xuICAgIGlmICghYmVzdCkge1xuICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfSBlbHNlIGlmIChjb21wYXJlKGJlc3RbMF0sIHBhaXJbMF0pID09PSBiZXN0WzBdKSB7XG4gICAgICByZXR1cm4gYmVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfVxuICB9LCBudWxsKVsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgoYSwgaykgPT4ge1xuICAgIGFba10gPSBvYmpba107XG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbi8vIE5VTUJFUlMgQU5EIFNUUklOR1NcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVnZXJCZXR3ZWVuKHRoaW5nLCBib3R0b20sIHRvcCkge1xuICByZXR1cm4gaXNJbnRlZ2VyKHRoaW5nKSAmJiB0aGluZyA+PSBib3R0b20gJiYgdGhpbmcgPD0gdG9wO1xufVxuXG4vLyB4ICUgbiBidXQgdGFrZXMgdGhlIHNpZ24gb2YgbiBpbnN0ZWFkIG9mIHhcbmV4cG9ydCBmdW5jdGlvbiBmbG9vck1vZCh4LCBuKSB7XG4gIHJldHVybiB4IC0gbiAqIE1hdGguZmxvb3IoeCAvIG4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkU3RhcnQoaW5wdXQsIG4gPSAyKSB7XG4gIGNvbnN0IGlzTmVnID0gaW5wdXQgPCAwO1xuICBsZXQgcGFkZGVkO1xuICBpZiAoaXNOZWcpIHtcbiAgICBwYWRkZWQgPSBcIi1cIiArIChcIlwiICsgLWlucHV0KS5wYWRTdGFydChuLCBcIjBcIik7XG4gIH0gZWxzZSB7XG4gICAgcGFkZGVkID0gKFwiXCIgKyBpbnB1dCkucGFkU3RhcnQobiwgXCIwXCIpO1xuICB9XG4gIHJldHVybiBwYWRkZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludGVnZXIoc3RyaW5nKSB7XG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludChzdHJpbmcsIDEwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGbG9hdGluZyhzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNaWxsaXMoZnJhY3Rpb24pIHtcbiAgLy8gUmV0dXJuIHVuZGVmaW5lZCAoaW5zdGVhZCBvZiAwKSBpbiB0aGVzZSBjYXNlcywgd2hlcmUgZnJhY3Rpb24gaXMgbm90IHNldFxuICBpZiAoaXNVbmRlZmluZWQoZnJhY3Rpb24pIHx8IGZyYWN0aW9uID09PSBudWxsIHx8IGZyYWN0aW9uID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmID0gcGFyc2VGbG9hdChcIjAuXCIgKyBmcmFjdGlvbikgKiAxMDAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGYpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZFRvKG51bWJlciwgZGlnaXRzLCB0b3dhcmRaZXJvID0gZmFsc2UpIHtcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGlnaXRzLFxuICAgIHJvdW5kZXIgPSB0b3dhcmRaZXJvID8gTWF0aC50cnVuYyA6IE1hdGgucm91bmQ7XG4gIHJldHVybiByb3VuZGVyKG51bWJlciAqIGZhY3RvcikgLyBmYWN0b3I7XG59XG5cbi8vIERBVEUgQkFTSUNTXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgY29uc3QgbW9kTW9udGggPSBmbG9vck1vZChtb250aCAtIDEsIDEyKSArIDEsXG4gICAgbW9kWWVhciA9IHllYXIgKyAobW9udGggLSBtb2RNb250aCkgLyAxMjtcblxuICBpZiAobW9kTW9udGggPT09IDIpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcihtb2RZZWFyKSA/IDI5IDogMjg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vZE1vbnRoIC0gMV07XG4gIH1cbn1cblxuLy8gY292ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgbG9jYWwgdGltZXN0YW1wIChlcG9jaCwgYnV0IHdpdGggdGhlIG9mZnNldCBiYWtlZCBpbilcbmV4cG9ydCBmdW5jdGlvbiBvYmpUb0xvY2FsVFMob2JqKSB7XG4gIGxldCBkID0gRGF0ZS5VVEMoXG4gICAgb2JqLnllYXIsXG4gICAgb2JqLm1vbnRoIC0gMSxcbiAgICBvYmouZGF5LFxuICAgIG9iai5ob3VyLFxuICAgIG9iai5taW51dGUsXG4gICAgb2JqLnNlY29uZCxcbiAgICBvYmoubWlsbGlzZWNvbmRcbiAgKTtcblxuICAvLyBmb3IgbGVnYWN5IHJlYXNvbnMsIHllYXJzIGJldHdlZW4gMCBhbmQgOTkgYXJlIGludGVycHJldGVkIGFzIDE5WFg7IHJldmVydCB0aGF0XG4gIGlmIChvYmoueWVhciA8IDEwMCAmJiBvYmoueWVhciA+PSAwKSB7XG4gICAgZCA9IG5ldyBEYXRlKGQpO1xuICAgIGQuc2V0VVRDRnVsbFllYXIoZC5nZXRVVENGdWxsWWVhcigpIC0gMTkwMCk7XG4gIH1cbiAgcmV0dXJuICtkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKSB7XG4gIGNvbnN0IHAxID1cbiAgICAgICh3ZWVrWWVhciArXG4gICAgICAgIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0KSAtXG4gICAgICAgIE1hdGguZmxvb3Iod2Vla1llYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQwMCkpICVcbiAgICAgIDcsXG4gICAgbGFzdCA9IHdlZWtZZWFyIC0gMSxcbiAgICBwMiA9IChsYXN0ICsgTWF0aC5mbG9vcihsYXN0IC8gNCkgLSBNYXRoLmZsb29yKGxhc3QgLyAxMDApICsgTWF0aC5mbG9vcihsYXN0IC8gNDAwKSkgJSA3O1xuICByZXR1cm4gcDEgPT09IDQgfHwgcDIgPT09IDMgPyA1MyA6IDUyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhcikge1xuICBpZiAoeWVhciA+IDk5KSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSByZXR1cm4geWVhciA+IDYwID8gMTkwMCArIHllYXIgOiAyMDAwICsgeWVhcjtcbn1cblxuLy8gUEFSU0lOR1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2Vab25lSW5mbyh0cywgb2Zmc2V0Rm9ybWF0LCBsb2NhbGUsIHRpbWVab25lID0gbnVsbCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodHMpLFxuICAgIGludGxPcHRzID0ge1xuICAgICAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH07XG5cbiAgaWYgKHRpbWVab25lKSB7XG4gICAgaW50bE9wdHMudGltZVpvbmUgPSB0aW1lWm9uZTtcbiAgfVxuXG4gIGNvbnN0IG1vZGlmaWVkID0geyB0aW1lWm9uZU5hbWU6IG9mZnNldEZvcm1hdCwgLi4uaW50bE9wdHMgfTtcblxuICBjb25zdCBwYXJzZWQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG1vZGlmaWVkKVxuICAgIC5mb3JtYXRUb1BhcnRzKGRhdGUpXG4gICAgLmZpbmQoKG0pID0+IG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInRpbWV6b25lbmFtZVwiKTtcbiAgcmV0dXJuIHBhcnNlZCA/IHBhcnNlZC52YWx1ZSA6IG51bGw7XG59XG5cbi8vIHNpZ25lZE9mZnNldCgnLTUnLCAnMzAnKSAtPiAtMzMwXG5leHBvcnQgZnVuY3Rpb24gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cikge1xuICBsZXQgb2ZmSG91ciA9IHBhcnNlSW50KG9mZkhvdXJTdHIsIDEwKTtcblxuICAvLyBkb24ndCB8fCB0aGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBwcmVzZXJ2ZSAtMFxuICBpZiAoTnVtYmVyLmlzTmFOKG9mZkhvdXIpKSB7XG4gICAgb2ZmSG91ciA9IDA7XG4gIH1cblxuICBjb25zdCBvZmZNaW4gPSBwYXJzZUludChvZmZNaW51dGVTdHIsIDEwKSB8fCAwLFxuICAgIG9mZk1pblNpZ25lZCA9IG9mZkhvdXIgPCAwIHx8IE9iamVjdC5pcyhvZmZIb3VyLCAtMCkgPyAtb2ZmTWluIDogb2ZmTWluO1xuICByZXR1cm4gb2ZmSG91ciAqIDYwICsgb2ZmTWluU2lnbmVkO1xufVxuXG4vLyBDT0VSQ0lPTlxuXG5leHBvcnQgZnVuY3Rpb24gYXNOdW1iZXIodmFsdWUpIHtcbiAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgfHwgdmFsdWUgPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKG51bWVyaWNWYWx1ZSkpXG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKGBJbnZhbGlkIHVuaXQgdmFsdWUgJHt2YWx1ZX1gKTtcbiAgcmV0dXJuIG51bWVyaWNWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZXIpIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHt9O1xuICBmb3IgKGNvbnN0IHUgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgdSkpIHtcbiAgICAgIGNvbnN0IHYgPSBvYmpbdV07XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgbm9ybWFsaXplZFtub3JtYWxpemVyKHUpXSA9IGFzTnVtYmVyKHYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE9mZnNldChvZmZzZXQsIGZvcm1hdCkge1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoTWF0aC5hYnMob2Zmc2V0IC8gNjApKSxcbiAgICBtaW51dGVzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgJSA2MCkpLFxuICAgIHNpZ24gPSBvZmZzZXQgPj0gMCA/IFwiK1wiIDogXCItXCI7XG5cbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoaG91cnMsIDIpfToke3BhZFN0YXJ0KG1pbnV0ZXMsIDIpfWA7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIGAke3NpZ259JHtob3Vyc30ke21pbnV0ZXMgPiAwID8gYDoke21pbnV0ZXN9YCA6IFwiXCJ9YDtcbiAgICBjYXNlIFwidGVjaGllXCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke3BhZFN0YXJ0KGhvdXJzLCAyKX0ke3BhZFN0YXJ0KG1pbnV0ZXMsIDIpfWA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBWYWx1ZSBmb3JtYXQgJHtmb3JtYXR9IGlzIG91dCBvZiByYW5nZSBmb3IgcHJvcGVydHkgZm9ybWF0YCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVPYmplY3Qob2JqKSB7XG4gIHJldHVybiBwaWNrKG9iaiwgW1wiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdKTtcbn1cblxuZXhwb3J0IGNvbnN0IGlhbmFSZWdleCA9IC9bQS1aYS16XystXXsxLDI1Nn0oOj9cXC9bQS1aYS16MC05XystXXsxLDI1Nn0oXFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KT8pPy87XG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IEludmFsaWRab25lIGZyb20gXCIuLi96b25lcy9pbnZhbGlkWm9uZS5qc1wiO1xuXG5pbXBvcnQgeyBpc1VuZGVmaW5lZCwgaXNTdHJpbmcsIGlzTnVtYmVyIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplWm9uZShpbnB1dCwgZGVmYXVsdFpvbmUpIHtcbiAgbGV0IG9mZnNldDtcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSB8fCBpbnB1dCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBkZWZhdWx0Wm9uZTtcbiAgfSBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIFpvbmUpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uc3QgbG93ZXJlZCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxvd2VyZWQgPT09IFwibG9jYWxcIiB8fCBsb3dlcmVkID09PSBcInN5c3RlbVwiKSByZXR1cm4gZGVmYXVsdFpvbmU7XG4gICAgZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIGVsc2UgaWYgKElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIobG93ZXJlZCkpIHJldHVybiBJQU5BWm9uZS5jcmVhdGUoaW5wdXQpO1xuICAgIGVsc2UgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBuZXcgSW52YWxpZFpvbmUoaW5wdXQpO1xuICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoaW5wdXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJvYmplY3RcIiAmJiBpbnB1dC5vZmZzZXQgJiYgdHlwZW9mIGlucHV0Lm9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgIC8vIFRoaXMgaXMgZHVtYiwgYnV0IHRoZSBpbnN0YW5jZW9mIGNoZWNrIGFib3ZlIGRvZXNuJ3Qgc2VlbSB0byByZWFsbHkgd29ya1xuICAgIC8vIHNvIHdlJ3JlIGR1Y2sgY2hlY2tpbmcgaXRcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZVpvbmUgfSBmcm9tIFwiLi9pbXBsL3pvbmVVdGlsLmpzXCI7XG5cbmltcG9ydCB7IGhhc1JlbGF0aXZlIH0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5cbi8qKlxuICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyB7XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBoYXNEU1Qoem9uZSA9IFNldHRpbmdzLmRlZmF1bHRab25lKSB7XG4gICAgY29uc3QgcHJvdG8gPSBEYXRlVGltZS5ub3coKS5zZXRab25lKHpvbmUpLnNldCh7IG1vbnRoOiAxMiB9KTtcblxuICAgIHJldHVybiAhem9uZS5pc1VuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7IG1vbnRoOiA2IH0pLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZElBTkFab25lKHpvbmUpIHtcbiAgICByZXR1cm4gSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcih6b25lKSAmJiBJQU5BWm9uZS5pc1ZhbGlkWm9uZSh6b25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lI2lzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVab25lKGlucHV0KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKClbMF0gLy89PiAnSmFudWFyeSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JylbMF0gLy89PiAnSmFuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycpWzBdIC8vPT4gJzEnXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0gKVswXSAvLz0+ICdqYW52LidcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfZoSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ2xvbmcnLCB7IG91dHB1dENhbGVuZGFyOiAnaXNsYW1pYycgfSlbMF0gLy89PiAnUmFiacq7IEknXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1vbnRocyhcbiAgICBsZW5ndGggPSBcImxvbmdcIixcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwsIG91dHB1dENhbGVuZGFyID0gXCJncmVnb3J5XCIgfSA9IHt9XG4gICkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCBtb250aCBuYW1lcy5cbiAgICogRm9ybWF0IG1vbnRocyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIG1vbnRocyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gdGhlIGRheSBvZiB0aGUgbW9udGguIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBJbmZvI21vbnRoc31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtb250aHNGb3JtYXQoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsLCBvdXRwdXRDYWxlbmRhciA9IFwiZ3JlZ29yeVwiIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIHdlZWsgbmFtZXMuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHdlZWtkYXkgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygpWzBdIC8vPT4gJ01vbmRheSdcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnKVswXSAvLz0+ICdNb24nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSlbMF0gLy89PiAnbHVuLidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfYp9mE2KfYq9mG2YrZhidcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgd2Vla2RheXMobGVuZ3RoID0gXCJsb25nXCIsIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IHdlZWsgbmFtZXMuXG4gICAqIEZvcm1hdCB3ZWVrZGF5cyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIHdlZWtkYXlzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byBtb3JlIGRhdGUgaW5mb3JtYXRpb24uIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBJbmZvI3dlZWtkYXlzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyB3ZWVrZGF5c0Zvcm1hdChcbiAgICBsZW5ndGggPSBcImxvbmdcIixcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwgfSA9IHt9XG4gICkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBtZXJpZGllbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcygpIC8vPT4gWyAnQU0nLCAnUE0nIF1cbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoeyBsb2NhbGU6ICdteScgfSkgLy89PiBbICfhgJThgLbhgJThgIDhgLonLCAn4YCK4YCU4YCxJyBdXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmlkaWVtcyh7IGxvY2FsZSA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlKS5tZXJpZGllbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZXJhcywgc3VjaCBhcyBbJ0JDJywgJ0FEJ10uIFRoZSBsb2NhbGUgY2FuIGJlIHNwZWNpZmllZCwgYnV0IHRoZSBjYWxlbmRhciBzeXN0ZW0gaXMgYWx3YXlzIEdyZWdvcmlhbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J3Nob3J0J10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBlcmEgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJzaG9ydFwiIG9yIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCkgLy89PiBbICdCQycsICdBRCcgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnKSAvLz0+IFsgJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJywgeyBsb2NhbGU6ICdmcicgfSkgLy89PiBbICdhdmFudCBKw6lzdXMtQ2hyaXN0JywgJ2FwcsOocyBKw6lzdXMtQ2hyaXN0JyBdXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGVyYXMobGVuZ3RoID0gXCJzaG9ydFwiLCB7IGxvY2FsZSA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudWxsLCBcImdyZWdvcnlcIikuZXJhcyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc2V0IG9mIGF2YWlsYWJsZSBmZWF0dXJlcyBpbiB0aGlzIGVudmlyb25tZW50LlxuICAgKiBTb21lIGZlYXR1cmVzIG9mIEx1eG9uIGFyZSBub3QgYXZhaWxhYmxlIGluIGFsbCBlbnZpcm9ubWVudHMuIEZvciBleGFtcGxlLCBvbiBvbGRlciBicm93c2VycywgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nIHN1cHBvcnQgaXMgbm90IGF2YWlsYWJsZS4gVXNlIHRoaXMgZnVuY3Rpb24gdG8gZmlndXJlIG91dCBpZiB0aGF0J3MgdGhlIGNhc2UuXG4gICAqIEtleXM6XG4gICAqICogYHJlbGF0aXZlYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZ1xuICAgKiBAZXhhbXBsZSBJbmZvLmZlYXR1cmVzKCkgLy89PiB7IHJlbGF0aXZlOiBmYWxzZSB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBmZWF0dXJlcygpIHtcbiAgICByZXR1cm4geyByZWxhdGl2ZTogaGFzUmVsYXRpdmUoKSB9O1xuICB9XG59XG4iLCJpbXBvcnQgRGF0ZVRpbWUsIHsgZnJpZW5kbHlEYXRlVGltZSB9IGZyb20gXCIuL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgRHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IsIEludmFsaWRJbnRlcnZhbEVycm9yIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbXBsL2ludmFsaWQuanNcIjtcblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBJbnRlcnZhbFwiO1xuXG4vLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXG5mdW5jdGlvbiB2YWxpZGF0ZVN0YXJ0RW5kKHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCB8fCAhc3RhcnQuaXNWYWxpZCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwibWlzc2luZyBvciBpbnZhbGlkIHN0YXJ0XCIpO1xuICB9IGVsc2UgaWYgKCFlbmQgfHwgIWVuZC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgZW5kXCIpO1xuICB9IGVsc2UgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXG4gICAgICBcImVuZCBiZWZvcmUgc3RhcnRcIixcbiAgICAgIGBUaGUgZW5kIG9mIGFuIGludGVydmFsIG11c3QgYmUgYWZ0ZXIgaXRzIHN0YXJ0LCBidXQgeW91IGhhZCBzdGFydD0ke3N0YXJ0LnRvSVNPKCl9IGFuZCBlbmQ9JHtlbmQudG9JU08oKX1gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIEludGVydmFsIG9iamVjdCByZXByZXNlbnRzIGEgaGFsZi1vcGVuIGludGVydmFsIG9mIHRpbWUsIHdoZXJlIGVhY2ggZW5kcG9pbnQgaXMgYSB7QGxpbmsgRGF0ZVRpbWV9LiBDb25jZXB0dWFsbHksIGl0J3MgYSBjb250YWluZXIgZm9yIHRob3NlIHR3byBlbmRwb2ludHMsIGFjY29tcGFuaWVkIGJ5IG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCBjb21wYXJpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIEludGVydmFsOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhbiBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbCNmcm9tRGF0ZVRpbWVzfSwge0BsaW5rIEludGVydmFsI2FmdGVyfSwge0BsaW5rIEludGVydmFsI2JlZm9yZX0sIG9yIHtAbGluayBJbnRlcnZhbCNmcm9tSVNPfS5cbiAqICogKipBY2Nlc3NvcnMqKiBVc2Uge0BsaW5rIEludGVydmFsI3N0YXJ0fSBhbmQge0BsaW5rIEludGVydmFsI2VuZH0gdG8gZ2V0IHRoZSBzdGFydCBhbmQgZW5kLlxuICogKiAqKkludGVycm9nYXRpb24qKiBUbyBhbmFseXplIHRoZSBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbCNjb3VudH0sIHtAbGluayBJbnRlcnZhbCNsZW5ndGh9LCB7QGxpbmsgSW50ZXJ2YWwjaGFzU2FtZX0sIHtAbGluayBJbnRlcnZhbCNjb250YWluc30sIHtAbGluayBJbnRlcnZhbCNpc0FmdGVyfSwgb3Ige0BsaW5rIEludGVydmFsI2lzQmVmb3JlfS5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBvdGhlciBJbnRlcnZhbHMgb3V0IG9mIHRoaXMgb25lLCB1c2Uge0BsaW5rIEludGVydmFsI3NldH0sIHtAbGluayBJbnRlcnZhbCNzcGxpdEF0fSwge0BsaW5rIEludGVydmFsI3NwbGl0Qnl9LCB7QGxpbmsgSW50ZXJ2YWwjZGl2aWRlRXF1YWxseX0sIHtAbGluayBJbnRlcnZhbCNtZXJnZX0sIHtAbGluayBJbnRlcnZhbCN4b3J9LCB7QGxpbmsgSW50ZXJ2YWwjdW5pb259LCB7QGxpbmsgSW50ZXJ2YWwjaW50ZXJzZWN0aW9ufSwgb3Ige0BsaW5rIEludGVydmFsI2RpZmZlcmVuY2V9LlxuICogKiAqKkNvbXBhcmlzb24qKiBUbyBjb21wYXJlIHRoaXMgSW50ZXJ2YWwgdG8gYW5vdGhlciBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjZXF1YWxzfSwge0BsaW5rIEludGVydmFsI292ZXJsYXBzfSwge0BsaW5rIEludGVydmFsI2FidXRzU3RhcnR9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNFbmR9LCB7QGxpbmsgSW50ZXJ2YWwjZW5ndWxmc31cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBJbnRlcnZhbCN0b1N0cmluZ30sIHtAbGluayBJbnRlcnZhbCN0b0lTT30sIHtAbGluayBJbnRlcnZhbCN0b0lTT0RhdGV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU09UaW1lfSwge0BsaW5rIEludGVydmFsI3RvRm9ybWF0fSwgYW5kIHtAbGluayBJbnRlcnZhbCN0b0R1cmF0aW9ufS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJ2YWwge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmUgPSBjb25maWcuZW5kO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uSW50ZXJ2YWwgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBJbnRlcnZhbCBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIEludGVydmFsIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnRlcnZhbEVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYW4gZW5kIERhdGVUaW1lLiBJbmNsdXNpdmUgb2YgdGhlIHN0YXJ0IGJ1dCBub3QgdGhlIGVuZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IGJ1aWx0U3RhcnQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KSxcbiAgICAgIGJ1aWx0RW5kID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuXG4gICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IHZhbGlkYXRlU3RhcnRFbmQoYnVpbHRTdGFydCwgYnVpbHRFbmQpO1xuXG4gICAgaWYgKHZhbGlkYXRlRXJyb3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7XG4gICAgICAgIHN0YXJ0OiBidWlsdFN0YXJ0LFxuICAgICAgICBlbmQ6IGJ1aWx0RW5kLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZUVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBhZnRlcihzdGFydCwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCk7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQsIGR0LnBsdXMoZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gZW5kIERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCBiYWNrd2FyZHMgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGJlZm9yZShlbmQsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdC5taW51cyhkdXIpLCBkdCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nLlxuICAgKiBBY2NlcHRzIGA8c3RhcnQ+LzxlbmQ+YCwgYDxzdGFydD4vPGR1cmF0aW9uPmAsIGFuZCBgPGR1cmF0aW9uPi88ZW5kPmAgZm9ybWF0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gb3B0aW9ucyB0byBwYXNzIHtAbGluayBEYXRlVGltZSNmcm9tSVNPfSBhbmQgb3B0aW9uYWxseSB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT31cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcywgZV0gPSAodGV4dCB8fCBcIlwiKS5zcGxpdChcIi9cIiwgMik7XG4gICAgaWYgKHMgJiYgZSkge1xuICAgICAgbGV0IHN0YXJ0LCBzdGFydElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBzdGFydCA9IERhdGVUaW1lLmZyb21JU08ocywgb3B0cyk7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IHN0YXJ0LmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW5kLCBlbmRJc1ZhbGlkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gRGF0ZVRpbWUuZnJvbUlTTyhlLCBvcHRzKTtcbiAgICAgICAgZW5kSXNWYWxpZCA9IGVuZC5pc1ZhbGlkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlbmRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydElzVmFsaWQgJiYgZW5kSXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCkge1xuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKGUsIG9wdHMpO1xuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYWZ0ZXIoc3RhcnQsIGR1cik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kSXNWYWxpZCkge1xuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYmVmb3JlKGVuZCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gSW50ZXJ2YWwuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0ludGVydmFsKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uSW50ZXJ2YWwpIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMucyA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkUmVhc29uID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbCBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIHJldHVybiB0aGUgbGVuZ3RoIGluLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBsZW5ndGgodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0R1cmF0aW9uKC4uLlt1bml0XSkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LlxuICAgKiBVbmxpa2Uge0BsaW5rIEludGVydmFsI2xlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheSdcbiAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPydcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvdW50KHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksXG4gICAgICBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucy52YWx1ZU9mKCkgPT09IHRoaXMuZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQmVmb3JlKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzZXQoeyBzdGFydCwgZW5kIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHNwbGl0QXQoLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICBjb25zdCBzb3J0ZWQgPSBkYXRlVGltZXNcbiAgICAgICAgLm1hcChmcmllbmRseURhdGVUaW1lKVxuICAgICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmNvbnRhaW5zKGQpKVxuICAgICAgICAuc29ydCgpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpID0gMDtcblxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBjb25zdCBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRCeShkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpZHggPSAxLFxuICAgICAgbmV4dDtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgY29uc3QgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKCh4KSA9PiB4ICogaWR4KSk7XG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIG92ZXJsYXBzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzRW5kKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID49IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmdlKGludGVydmFscykge1xuICAgIGNvbnN0IFtmb3VuZCwgZmluYWxdID0gaW50ZXJ2YWxzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zIC0gYi5zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFtzb2ZhciwgY3VycmVudF0sIGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGN1cnJlbnQudW5pb24oaXRlbSldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtbXSwgbnVsbF1cbiAgICAgICk7XG4gICAgaWYgKGZpbmFsKSB7XG4gICAgICBmb3VuZC5wdXNoKGZpbmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgeG9yKGludGVydmFscykge1xuICAgIGxldCBzdGFydCA9IG51bGwsXG4gICAgICBjdXJyZW50Q291bnQgPSAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKChpKSA9PiBbXG4gICAgICAgIHsgdGltZTogaS5zLCB0eXBlOiBcInNcIiB9LFxuICAgICAgICB7IHRpbWU6IGkuZSwgdHlwZTogXCJlXCIgfSxcbiAgICAgIF0pLFxuICAgICAgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKSxcbiAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGlmZmVyZW5jZSguLi5pbnRlcnZhbHMpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSlcbiAgICAgIC5tYXAoKGkpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxuICAgICAgLmZpbHRlcigoaSkgPT4gaSAmJiAhaS5pc0VtcHR5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGBbJHt0aGlzLnMudG9JU08oKX0g4oCTICR7dGhpcy5lLnRvSVNPKCl9KWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPKG9wdHMpfS8ke3RoaXMuZS50b0lTTyhvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBkYXRlIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSB0aW1lIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09EYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPRGF0ZSgpfS8ke3RoaXMuZS50b0lTT0RhdGUoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTT1RpbWUob3B0cyl9LyR7dGhpcy5lLnRvSVNPVGltZShvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgLSB0aGUgZm9ybWF0IHN0cmluZy4gVGhpcyBzdHJpbmcgZm9ybWF0cyB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLiBTZWUge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSBmb3IgZGV0YWlscy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5zZXBhcmF0b3IgPSAgJyDigJMgJ10gLSBhIHNlcGFyYXRvciB0byBwbGFjZSBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kIHJlcHJlc2VudGF0aW9uc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChkYXRlRm9ybWF0LCB7IHNlcGFyYXRvciA9IFwiIOKAkyBcIiB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KX0ke3NlcGFyYXRvcn0ke3RoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIER1cmF0aW9uIHJlcHJlc2VudGluZyB0aGUgdGltZSBzcGFubmVkIGJ5IHRoaXMgaW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDg4NDg5MjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignZGF5cycpLnRvT2JqZWN0KCkgLy89PiB7IGRheXM6IDEuMDI0MTgxMjE1Mjc3Nzc3OCB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQuODIwOTUgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQsIHNlY29uZHM6IDQ5LjI1NyB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ3NlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBzZWNvbmRzOiA4ODQ4OS4yNTcgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHRvRHVyYXRpb24odW5pdCwgb3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWRSZWFzb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lLmRpZmYodGhpcy5zLCB1bml0LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gbWFwRm4gb24gdGhlIGludGVydmFsIHN0YXJ0IGFuZCBlbmQsIHJldHVybmluZyBhIG5ldyBJbnRlcnZhbCBmcm9tIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQudG9VVEMoKSlcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnBsdXMoeyBob3VyczogMiB9KSlcbiAgICovXG4gIG1hcEVuZHBvaW50cyhtYXBGbikge1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKG1hcEZuKHRoaXMucyksIG1hcEZuKHRoaXMuZSkpO1xuICB9XG59XG4iLCJpbXBvcnQgU3lzdGVtWm9uZSBmcm9tIFwiLi96b25lcy9zeXN0ZW1ab25lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcblxuaW1wb3J0IHsgbm9ybWFsaXplWm9uZSB9IGZyb20gXCIuL2ltcGwvem9uZVV0aWwuanNcIjtcblxubGV0IG5vdyA9ICgpID0+IERhdGUubm93KCksXG4gIGRlZmF1bHRab25lID0gXCJzeXN0ZW1cIixcbiAgZGVmYXVsdExvY2FsZSA9IG51bGwsXG4gIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudWxsLFxuICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBudWxsLFxuICB0aHJvd09uSW52YWxpZDtcblxuLyoqXG4gKiBTZXR0aW5ncyBjb250YWlucyBzdGF0aWMgZ2V0dGVycyBhbmQgc2V0dGVycyB0aGF0IGNvbnRyb2wgTHV4b24ncyBvdmVyYWxsIGJlaGF2aW9yLiBMdXhvbiBpcyBhIHNpbXBsZSBsaWJyYXJ5IHdpdGggZmV3IG9wdGlvbnMsIGJ1dCB0aGUgb25lcyBpdCBkb2VzIGhhdmUgbGl2ZSBoZXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAqL1xuICBzdGF0aWMgZ2V0IG5vdygpIHtcbiAgICByZXR1cm4gbm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAqIFRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgbnVtYmVyLCB3aGljaCB3aWxsIGJlIGludGVycHJldGVkIGFzIGFuIEVwb2NoIG1pbGxpc2Vjb25kIGNvdW50XG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gRGF0ZS5ub3coKSArIDMwMDAgLy8gcHJldGVuZCBpdCBpcyAzIHNlY29uZHMgaW4gdGhlIGZ1dHVyZVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiAwIC8vIGFsd2F5cyBwcmV0ZW5kIGl0J3MgSmFuIDEsIDE5NzAgYXQgbWlkbmlnaHQgaW4gVVRDIHRpbWVcbiAgICovXG4gIHN0YXRpYyBzZXQgbm93KG4pIHtcbiAgICBub3cgPSBuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogVXNlIHRoZSB2YWx1ZSBcInN5c3RlbVwiIHRvIHJlc2V0IHRoaXMgdmFsdWUgdG8gdGhlIHN5c3RlbSdzIHRpbWUgem9uZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdFpvbmUoem9uZSkge1xuICAgIGRlZmF1bHRab25lID0gem9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIG9iamVjdCBjdXJyZW50bHkgdXNlZCB0byBjcmVhdGUgRGF0ZVRpbWVzLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgc3lzdGVtJ3MgdGltZSB6b25lICh0aGUgb25lIHNldCBvbiB0aGUgbWFjaGluZSB0aGF0IHJ1bnMgdGhpcyBjb2RlKS5cbiAgICogQHR5cGUge1pvbmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRab25lKCkge1xuICAgIHJldHVybiBub3JtYWxpemVab25lKGRlZmF1bHRab25lLCBTeXN0ZW1ab25lLmluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdExvY2FsZSgpIHtcbiAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdExvY2FsZShsb2NhbGUpIHtcbiAgICBkZWZhdWx0TG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICByZXR1cm4gZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc2V0IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0obnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZ1N5c3RlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKCkge1xuICAgIHJldHVybiBkZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc2V0IGRlZmF1bHRPdXRwdXRDYWxlbmRhcihvdXRwdXRDYWxlbmRhcikge1xuICAgIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgdGhyb3dPbkludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRocm93T25JbnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBzZXQgdGhyb3dPbkludmFsaWQodCkge1xuICAgIHRocm93T25JbnZhbGlkID0gdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBMdXhvbidzIGdsb2JhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHN0YXRpYyByZXNldENhY2hlcygpIHtcbiAgICBMb2NhbGUucmVzZXRDYWNoZSgpO1xuICAgIElBTkFab25lLnJlc2V0Q2FjaGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgWm9uZUlzQWJzdHJhY3RFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9mZnNldCBpcyBrbm93biB0byBiZSBmaXhlZCBmb3IgdGhlIHdob2xlIHllYXIuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIGNvbW1vbiBuYW1lIChzdWNoIGFzIEVTVCkgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXBcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBuYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucyB0byBhZmZlY3QgdGhlIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5mb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uIEFjY2VwdHMgJ2xvbmcnIG9yICdzaG9ydCcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmxvY2FsZSAtIFdoYXQgbG9jYWxlIHRvIHJldHVybiB0aGUgb2Zmc2V0IG5hbWUgaW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIG9mZnNldE5hbWUodHMsIG9wdHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHRzICduYXJyb3cnLCAnc2hvcnQnLCBvciAndGVjaGllJy4gUmV0dXJuaW5nICcrNicsICcrMDY6MDAnLCBvciAnKzA2MDAnIHJlc3BlY3RpdmVseVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBvZmZzZXQgaW4gbWludXRlcyBmb3IgdGhpcyB6b25lIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBjb21wdXRlIHRoZSBvZmZzZXRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgb2Zmc2V0KHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgZXF1YWwgdG8gYW5vdGhlciB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge1pvbmV9IG90aGVyWm9uZSAtIHRoZSB6b25lIHRvIGNvbXBhcmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvLCBpc1VuZGVmaW5lZCwgaWFuYVJlZ2V4LCBvYmpUb0xvY2FsVFMgfSBmcm9tIFwiLi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuXG5jb25zdCBtYXRjaGluZ1JlZ2V4ID0gUmVnRXhwKGBeJHtpYW5hUmVnZXguc291cmNlfSRgKTtcblxubGV0IGR0ZkNhY2hlID0ge307XG5mdW5jdGlvbiBtYWtlRFRGKHpvbmUpIHtcbiAgaWYgKCFkdGZDYWNoZVt6b25lXSkge1xuICAgIGR0ZkNhY2hlW3pvbmVdID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICBob3VyMTI6IGZhbHNlLFxuICAgICAgdGltZVpvbmU6IHpvbmUsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBkdGZDYWNoZVt6b25lXTtcbn1cblxuY29uc3QgdHlwZVRvUG9zID0ge1xuICB5ZWFyOiAwLFxuICBtb250aDogMSxcbiAgZGF5OiAyLFxuICBob3VyOiAzLFxuICBtaW51dGU6IDQsXG4gIHNlY29uZDogNSxcbn07XG5cbmZ1bmN0aW9uIGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1xcdTIwMEUvZywgXCJcIiksXG4gICAgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSw/IChcXGQrKTooXFxkKyk6KFxcZCspLy5leGVjKGZvcm1hdHRlZCksXG4gICAgWywgZk1vbnRoLCBmRGF5LCBmWWVhciwgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdID0gcGFyc2VkO1xuICByZXR1cm4gW2ZZZWFyLCBmTW9udGgsIGZEYXksIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXTtcbn1cblxuZnVuY3Rpb24gcGFydHNPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIGNvbnN0IGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpLFxuICAgIGZpbGxlZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHRlZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IGZvcm1hdHRlZFtpXSxcbiAgICAgIHBvcyA9IHR5cGVUb1Bvc1t0eXBlXTtcblxuICAgIGlmICghaXNVbmRlZmluZWQocG9zKSkge1xuICAgICAgZmlsbGVkW3Bvc10gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmlsbGVkO1xufVxuXG5sZXQgaWFuYVpvbmVDYWNoZSA9IHt9O1xuLyoqXG4gKiBBIHpvbmUgaWRlbnRpZmllZCBieSBhbiBJQU5BIGlkZW50aWZpZXIsIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElBTkFab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFpvbmUgbmFtZVxuICAgKiBAcmV0dXJuIHtJQU5BWm9uZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUobmFtZSkge1xuICAgIGlmICghaWFuYVpvbmVDYWNoZVtuYW1lXSkge1xuICAgICAgaWFuYVpvbmVDYWNoZVtuYW1lXSA9IG5ldyBJQU5BWm9uZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGlhbmFab25lQ2FjaGVbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgbG9jYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzdGF0aWMgcmVzZXRDYWNoZSgpIHtcbiAgICBpYW5hWm9uZUNhY2hlID0ge307XG4gICAgZHRmQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpcyBhIHZhbGlkIHNwZWNpZmllci4gVGhpcyBvbmx5IGNoZWNrcyB0aGUgc3RyaW5nJ3MgZm9ybWF0LCBub3QgdGhhdCB0aGUgc3BlY2lmaWVyIGlkZW50aWZpZXMgYSBrbm93biB6b25lOyBzZWUgaXNWYWxpZFpvbmUgZm9yIHRoYXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIHN0cmluZyB0byBjaGVjayB2YWxpZGl0eSBvblxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIkZhbnRhc2lhL0Nhc3RsZVwiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZFNwZWNpZmllcihzKSB7XG4gICAgcmV0dXJuICEhKHMgJiYgcy5tYXRjaChtYXRjaGluZ1JlZ2V4KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaWRlbnRpZmllcyBhIHJlYWwgem9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkZhbnRhc2lhL0Nhc3RsZVwiKSAvLz0+IGZhbHNlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkWm9uZSh6b25lKSB7XG4gICAgaWYgKCF6b25lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHsgdGltZVpvbmU6IHpvbmUgfSkuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMuem9uZU5hbWUgPSBuYW1lO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cbiAgICB0aGlzLnZhbGlkID0gSUFOQVpvbmUuaXNWYWxpZFpvbmUobmFtZSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gXCJpYW5hXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUsIHRoaXMubmFtZSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0KHRzKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRzKTtcblxuICAgIGlmIChpc05hTihkYXRlKSkgcmV0dXJuIE5hTjtcblxuICAgIGNvbnN0IGR0ZiA9IG1ha2VEVEYodGhpcy5uYW1lKSxcbiAgICAgIFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZF0gPSBkdGYuZm9ybWF0VG9QYXJ0c1xuICAgICAgICA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSlcbiAgICAgICAgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpO1xuXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyBob3VyMTIgYW5kIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwMjU1NjQmY2FuPTImcT0lMjIyNCUzQTAwJTIyJTIwZGF0ZXRpbWVmb3JtYXRcbiAgICBjb25zdCBhZGp1c3RlZEhvdXIgPSBob3VyID09PSAyNCA/IDAgOiBob3VyO1xuXG4gICAgY29uc3QgYXNVVEMgPSBvYmpUb0xvY2FsVFMoe1xuICAgICAgeWVhcixcbiAgICAgIG1vbnRoLFxuICAgICAgZGF5LFxuICAgICAgaG91cjogYWRqdXN0ZWRIb3VyLFxuICAgICAgbWludXRlLFxuICAgICAgc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IDAsXG4gICAgfSk7XG5cbiAgICBsZXQgYXNUUyA9ICtkYXRlO1xuICAgIGNvbnN0IG92ZXIgPSBhc1RTICUgMTAwMDtcbiAgICBhc1RTIC09IG92ZXIgPj0gMCA/IG92ZXIgOiAxMDAwICsgb3ZlcjtcbiAgICByZXR1cm4gKGFzVVRDIC0gYXNUUykgLyAoNjAgKiAxMDAwKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09IFwiaWFuYVwiICYmIG90aGVyWm9uZS5uYW1lID09PSB0aGlzLm5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBzaWduZWRPZmZzZXQgfSBmcm9tIFwiLi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuXG5sZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBBIHpvbmUgd2l0aCBhIGZpeGVkIG9mZnNldCAobWVhbmluZyBubyBEU1QpXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRPZmZzZXRab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgVVRDXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgdXRjSW5zdGFuY2UoKSB7XG4gICAgaWYgKHNpbmdsZXRvbiA9PT0gbnVsbCkge1xuICAgICAgc2luZ2xldG9uID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZSgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlc1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2Uob2Zmc2V0KSB7XG4gICAgcmV0dXJuIG9mZnNldCA9PT0gMCA/IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZSA6IG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgRml4ZWRPZmZzZXRab25lIGZyb20gYSBVVEMgb2Zmc2V0IHN0cmluZywgbGlrZSBcIlVUQys2XCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgb2Zmc2V0IHN0cmluZyB0byBwYXJzZVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrMDZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDLTY6MDBcIilcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlU3BlY2lmaWVyKHMpIHtcbiAgICBpZiAocykge1xuICAgICAgY29uc3QgciA9IHMubWF0Y2goL151dGMoPzooWystXVxcZHsxLDJ9KSg/OjooXFxkezJ9KSk/KT8kL2kpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvZmZzZXQpIHtcbiAgICBzdXBlcigpO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cbiAgICB0aGlzLmZpeGVkID0gb2Zmc2V0O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiZml4ZWRcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZpeGVkID09PSAwID8gXCJVVENcIiA6IGBVVEMke2Zvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCBcIm5hcnJvd1wiKX1gO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImZpeGVkXCIgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbi8qKlxuICogQSB6b25lIHRoYXQgZmFpbGVkIHRvIHBhcnNlLiBZb3Ugc2hvdWxkIG5ldmVyIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhpcy5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkWm9uZSBleHRlbmRzIFpvbmUge1xuICBjb25zdHJ1Y3Rvcih6b25lTmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqICBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuem9uZU5hbWUgPSB6b25lTmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdE9mZnNldCwgcGFyc2Vab25lSW5mbyB9IGZyb20gXCIuLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGxvY2FsIHpvbmUgZm9yIHRoaXMgSmF2YVNjcmlwdCBlbnZpcm9ubWVudC5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXN0ZW1ab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmVcbiAgICogQHJldHVybiB7U3lzdGVtWm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKHNpbmdsZXRvbiA9PT0gbnVsbCkge1xuICAgICAgc2luZ2xldG9uID0gbmV3IFN5c3RlbVpvbmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQodHMpIHtcbiAgICByZXR1cm4gLW5ldyBEYXRlKHRzKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9va3NEYXRhIHtcbiAgc3RhdGljIGZldGNoRGF0YSgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va3MnKSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlRGF0YShkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb2tzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59IiwiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbi9zcmMvbHV4b24uanMnO1xuXG5jb25zdCBkaXNwbGF5RGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgZGVza3RvcERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcC1kYXRlJyk7XG4gIGNvbnN0IG1vYmlsZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWRhdGUnKTtcbiAgY29uc3QgZHQgPSBEYXRlVGltZS5ub3coKTtcbiAgZGVza3RvcERhdGUuaW5uZXJIVE1MID0gZHQudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyk7XG4gIG1vYmlsZURhdGUuaW5uZXJIVE1MID0gYFxuICA8c3Bhbj4ke2R0LnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfV0lUSF9TRUNPTkRTKX08L3NwYW4+IDxici8+XG4gIDxzcGFuPiR7ZHQudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlEYXRlOyIsImltcG9ydCBib29rc0RhdGEgZnJvbSAnLi9ib29rcy1kYXRhLmpzJztcblxuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rcycpO1xuXG5jbGFzcyBkaXNwbGF5TGlicmFyeSB7XG4gIHN0YXRpYyBsb2FkQm9va3MoKSB7XG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBsb2NhbEJvb2tzID0gYm9va3NEYXRhLmZldGNoRGF0YSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxCb29rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8bGkgY2xhc3M9XCJib29rXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJib29rLWluZm9cIj4ke2xvY2FsQm9va3NbaV0udGl0bGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICA8c3Bhbj5ieTwvc3Bhbj5cbiAgICAgICAgICAke2xvY2FsQm9va3NbaV0uYXV0aG9yLnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCIke2l9XCIgY2xhc3M9XCJyZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgIDwvbGk+YDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlicmFyeU1lc3NhZ2UoKSB7XG4gIGNvbnN0IGVtcHR5TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1tZXNzYWdlJyk7XG4gIGlmIChib29rc0RhdGEuZmV0Y2hEYXRhKCkubGVuZ3RoID09PSAwKSB7XG4gICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlMaWJyYXJ5LCBsaWJyYXJ5TWVzc2FnZSB9OyIsImltcG9ydCB7XG4gIG1vZGFsQ29udGFpbmVyLCB1c2VyRGF0YSwgZ3JlZXRVc2VyLCB1c2VyTmFtZSxcbn0gZnJvbSAnLi91c2VyLmpzJztcbmltcG9ydCB7IGRpc3BsYXlMaWJyYXJ5LCBsaWJyYXJ5TWVzc2FnZSB9IGZyb20gJy4vZGlzcGxheS1ib29rcy5qcyc7XG5pbXBvcnQgbWFuaXB1bGF0ZUJvb2tzIGZyb20gJy4vZWRpdC1saWJyYXJ5LmpzJztcbmltcG9ydCB7IG5hdmlnYXRpb24gfSBmcm9tICcuL25hdmlnYXRpb25zLmpzJztcbmltcG9ydCBib29rc0RhdGEgZnJvbSAnLi9ib29rcy1kYXRhLmpzJztcblxuZnVuY3Rpb24ga2V5VXAoZSwgYnRuKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGJ0bi5jbGljaygpO1xuICB9XG59XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tzJyk7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCwgLmZhLWJvb2snKTtcbiAgY29uc3QgZ29BZGRCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1ib29rLCAuZmEtcGx1cy1zcXVhcmUnKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0Jyk7XG4gIGNvbnN0IGdvVG9BZGRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1tZXNzYWdlJyk7XG4gIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yJyk7XG4gIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWJhcnMnKTtcbiAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGlua3MubW9iaWxlJyk7XG4gIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWhvbWUnKTtcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRpbWVzJyk7XG4gIGNvbnN0IGJvb2tzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1ib29rJyk7XG4gIGNvbnN0IGFkZEJvb2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXBsdXMtc3F1YXJlJyk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgbGlzdC5mb3JFYWNoKChuKSA9PiB7XG4gICAgICBuLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9jdXMnKTtcbiAgICB9KTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb2tzJykgPT09IG51bGwpIHtcbiAgICAgIGJvb2tzRGF0YS51cGRhdGVEYXRhKFtdKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgPT09IG51bGwpIHtcbiAgICAgIHVzZXJEYXRhLnNldERhdGEoW10pO1xuICAgICAgdXNlck5hbWUoKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgIT09IG51bGwgJiYgdXNlckRhdGEuZmV0Y2hEYXRhKCkubGVuZ3RoID4gMCkge1xuICAgICAgZ3JlZXRVc2VyKCk7XG4gICAgfVxuICAgIGRpc3BsYXlMaWJyYXJ5LmxvYWRCb29rcygpO1xuICAgIGxpYnJhcnlNZXNzYWdlKCk7XG4gIH0pO1xuXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9iaWxlTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGhvbWVIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vYmlsZU1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBob21lSGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0pO1xuXG4gIG1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyJyk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VudGVyJykpIHtcbiAgICAgIGlmIChuYW1lLnZhbHVlICE9PSAnJykge1xuICAgICAgICBldmVudC5wYXRoWzNdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB1c2VyZGF0YSA9IHsgdXNlcm5hbWU6IG5hbWUudmFsdWUgfTtcbiAgICAgICAgY29uc3QgbG9jYWxEYXRhID0gdXNlckRhdGEuZmV0Y2hEYXRhKCk7XG4gICAgICAgIGxvY2FsRGF0YS5wdXNoKHVzZXJkYXRhKTtcbiAgICAgICAgdXNlckRhdGEuc2V0RGF0YShsb2NhbERhdGEpO1xuICAgICAgICBncmVldFVzZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1hbmlwdWxhdGVCb29rcy5hZGRCb29rKCk7XG4gICAgZGlzcGxheUxpYnJhcnkubG9hZEJvb2tzKCk7XG4gICAgbGlicmFyeU1lc3NhZ2UoKTtcbiAgfSk7XG5cbiAgYm9va0F1dGhvci5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgIGtleVVwKGV2ZW50LCBhZGRCdXR0b24pO1xuICB9KTtcblxuICBib29rVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBrZXlVcChldmVudCwgYWRkQnV0dG9uKTtcbiAgfSk7XG5cbiAgbW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndXNlcicpKSB7XG4gICAgICBjb25zdCBlbnRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXInKTtcbiAgICAgIGtleVVwKGV2ZW50LCBlbnRlck5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGlzdC5mb3JFYWNoKChuKSA9PiB7XG4gICAgbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5hdmlnYXRpb24uc2hvd0xpc3QoKTtcbiAgICAgIGxpYnJhcnlNZXNzYWdlKCk7XG4gICAgICBhZGRCb29rSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGJvb2tzSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcblxuICBnb0FkZEJvb2suZm9yRWFjaCgobikgPT4ge1xuICAgIG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uLnNob3dBZGRCb29rKCk7XG4gICAgICBsaWJyYXJ5TWVzc2FnZSgpO1xuICAgICAgYWRkQm9va0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGJvb2tzSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29udGFjdC5mb3JFYWNoKChuKSA9PiB7XG4gICAgbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5hdmlnYXRpb24uc2hvd0NvbnRhY3RJbmZvKCk7XG4gICAgICBsaWJyYXJ5TWVzc2FnZSgpO1xuICAgICAgYWRkQm9va0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGJvb2tzSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgfSk7XG5cbiAgZ29Ub0FkZFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2aWdhdGlvbi5zaG93QWRkQm9vaygpO1xuICAgIGxpYnJhcnlNZXNzYWdlKCk7XG4gIH0pO1xuXG4gIGxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBtYW5pcHVsYXRlQm9va3MucmVtb3ZlQm9vayhldmVudCk7XG4gICAgZGlzcGxheUxpYnJhcnkubG9hZEJvb2tzKCk7XG4gICAgbGlicmFyeU1lc3NhZ2UoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG4iLCJpbXBvcnQgYm9va3NEYXRhIGZyb20gJy4vYm9va3MtZGF0YS5qcyc7XG5cbmNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yJyk7XG5jb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbmNvbnN0IGFkZGVkTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYWRkZWQtbXNnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hbmlwdWxhdGVCb29rcyB7XG4gIHN0YXRpYyByZW1vdmVCb29rKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09PSAncmVtb3ZlJykge1xuICAgICAgY29uc3QgaWQgPSBOdW1iZXIoZS50YXJnZXQuaWQpO1xuICAgICAgY29uc3Qgc3RvcmVkQm9va3MgPSBib29rc0RhdGEuZmV0Y2hEYXRhKCk7XG4gICAgICBtYW5pcHVsYXRlQm9va3MuZGVsZXRlQm9vayhpZCwgc3RvcmVkQm9va3MpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVCb29rKGluZGV4LCBhcnIpIHtcbiAgICBkZWxldGUgYXJyW2luZGV4XTtcbiAgICBjb25zdCBuZXdCb29rcyA9IGFyci5maWx0ZXIoKHZhbCkgPT4gdmFsICE9PSBudWxsKTtcbiAgICBib29rc0RhdGEudXBkYXRlRGF0YShuZXdCb29rcyk7XG4gIH1cblxuICBzdGF0aWMgYWRkQm9vaygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb2tzJykgPT09IG51bGwpIHtcbiAgICAgIGJvb2tzRGF0YS51cGRhdGVEYXRhKFtdKTtcbiAgICB9XG4gICAgaWYgKGJvb2tBdXRob3IudmFsdWUgIT09ICcnICYmIGJvb2tUaXRsZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG5ld0Jvb2tzID0gYm9va3NEYXRhLmZldGNoRGF0YSgpO1xuICAgICAgY29uc3QgbmV3Qm9vayA9IHsgYXV0aG9yOiBib29rQXV0aG9yLnZhbHVlLCB0aXRsZTogYm9va1RpdGxlLnZhbHVlIH07XG4gICAgICBuZXdCb29rcy5wdXNoKG5ld0Jvb2spO1xuICAgICAgYm9va3NEYXRhLnVwZGF0ZURhdGEobmV3Qm9va3MpO1xuICAgICAgYm9va0F1dGhvci52YWx1ZSA9ICcnO1xuICAgICAgYm9va1RpdGxlLnZhbHVlID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYWRkZWRNc2cuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IH0sIDMwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYWRkZWRNc2cuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSwgMTUwMCk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBib29rc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rcy1jb250YWluZXInKTtcbmNvbnN0IGdvQWRkQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtYm9vaywgLmZhLXBsdXMtc3F1YXJlJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QnKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpO1xuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCcpO1xuY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1pbmZvJyk7XG5cbmNsYXNzIG5hdmlnYXRpb24ge1xuICBzdGF0aWMgc2hvd0xpc3QoKSB7XG4gICAgYm9va3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdEluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0LmZvckVhY2goKG4pID0+IHtcbiAgICAgIG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1mb2N1cycpO1xuICAgIH0pO1xuICAgIGdvQWRkQm9vay5mb3JFYWNoKChuKSA9PiB7XG4gICAgICBpZiAobi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1ib29rJykpIHtcbiAgICAgICAgbi5jbGFzc0xpc3QucmVtb3ZlKCdhZGQtYm9vay1mb2N1cycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnRhY3QuZm9yRWFjaCgobikgPT4ge1xuICAgICAgbi5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0LWZvY3VzJyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FkZEJvb2soKSB7XG4gICAgaW5wdXRGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGJvb2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdEluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBnb0FkZEJvb2suZm9yRWFjaCgobikgPT4ge1xuICAgICAgaWYgKG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYm9vaycpKSB7XG4gICAgICAgIG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJvb2stZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsaXN0LmZvckVhY2goKG4pID0+IHtcbiAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1mb2N1cycpO1xuICAgIH0pO1xuICAgIGNvbnRhY3QuZm9yRWFjaCgobikgPT4ge1xuICAgICAgbi5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0LWZvY3VzJyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0NvbnRhY3RJbmZvKCkge1xuICAgIGNvbnRhY3RJbmZvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgYm9va3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFjdC5mb3JFYWNoKChuKSA9PiB7XG4gICAgICBuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9jdXMnKTtcbiAgICB9KTtcbiAgICBnb0FkZEJvb2suZm9yRWFjaCgobikgPT4ge1xuICAgICAgaWYgKG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYm9vaycpKSB7XG4gICAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZSgnYWRkLWJvb2stZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsaXN0LmZvckVhY2goKG4pID0+IHtcbiAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1mb2N1cycpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IG5hdmlnYXRpb24sIGJvb2tzQ29udGFpbmVyIH07IiwiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbi9zcmMvbHV4b24uanMnO1xuXG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250YWluZXInKTtcblxuY2xhc3MgdXNlckRhdGEge1xuICBzdGF0aWMgZmV0Y2hEYXRhKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICB9XG5cbiAgc3RhdGljIHNldERhdGEoZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZXJOYW1lKCkge1xuICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuICAgIDxoMSBjbGFzcz1cImdyZWV0aW5nXCI+XG4gICAgICAgPHNwYW4+SGV5IHRoZXJlIG5ldyBmcmllbmQuPC9zcGFuPlxuICAgICAgIDxzcGFuPkknbSB5b3VyIHBlcnNvbmFsIGxpYnJhcnkuPC9zcGFuPlxuICAgIDwvaDE+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0IHNob3VsZCBJIGNhbGwgeW91P1wiIHZhbHVlPVwiXCIgY2xhc3M9XCJ1c2VyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJlbnRlclwiPkVudGVyPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuXG5mdW5jdGlvbiBncmVldFVzZXIoKSB7XG4gIGNvbnN0IGdyZWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyZWV0Jyk7XG4gIGNvbnN0IHsgaG91ciB9ID0gRGF0ZVRpbWUubm93KCk7XG4gIGlmIChob3VyIDwgMTIpIHtcbiAgICBncmVldC5pbm5lckhUTUwgPSBgJHsnR29vZCBNb3JuaW5nJ30gJHt1c2VyRGF0YS5mZXRjaERhdGEoKVswXS51c2VybmFtZX1gO1xuICB9IGVsc2UgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE4KSB7XG4gICAgZ3JlZXQuaW5uZXJIVE1MID0gYCR7J0dvb2QgQWZ0ZXJub29uJ30gJHt1c2VyRGF0YS5mZXRjaERhdGEoKVswXS51c2VybmFtZX1gO1xuICB9IGVsc2UgaWYgKGhvdXIgPj0gMTgpIHtcbiAgICBncmVldC5pbm5lckhUTUwgPSBgJHsnR29vZCBFdmVuaW5nJ30gJHt1c2VyRGF0YS5mZXRjaERhdGEoKVswXS51c2VybmFtZX1gO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIG1vZGFsQ29udGFpbmVyLCB1c2VyTmFtZSwgZ3JlZXRVc2VyLCB1c2VyRGF0YSxcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGRpc3BsYXlEYXRlIGZyb20gJy4vbW9kdWxlcy9kYXRlcy5qcyc7XG5pbXBvcnQgeyBsaWJyYXJ5TWVzc2FnZSB9IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5LWJvb2tzLmpzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9tb2R1bGVzL2RvbS1ldmVudHMuanMnO1xuXG5zZXRJbnRlcnZhbChkaXNwbGF5RGF0ZSwgMTAwMCk7XG5cbmxpYnJhcnlNZXNzYWdlKCk7XG5cbmV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9