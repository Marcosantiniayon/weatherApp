/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGeoCode: () => (/* binding */ getGeoCode),
/* harmony export */   hourlyTemp: () => (/* binding */ hourlyTemp)
/* harmony export */ });
/* harmony import */ var _src_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ui */ "./src/ui.js");
/* harmony import */ var _src_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utilities */ "./src/utilities.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var locationOutput = document.querySelector('.locationOutput');
var timeOutput = document.querySelector('.timeOutput');
var currentTemp = document.querySelector('.currentTemp');
var realtimeLow = document.querySelector('.realtimeLow');
var realtimeHigh = document.querySelector('.realtimeHigh');
var realtimeDescription = document.querySelector('.realtimeDescription');
var icon = document.querySelector('.icon');
var localDate = new Date();
var hourlyTemp = 0;
var apiKey = "b08904ed3132c3c9a46ef2abcacb62d6";
function getGeoCode(_x) {
  return _getGeoCode.apply(this, arguments);
}
function _getGeoCode() {
  _getGeoCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(locationSearch) {
    var url, response, geocode, city, state, country, latitude, longitude;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          //Gets location info, runs getWeather & getForecast, displays content
          url = "https://api.openweathermap.org/geo/1.0/direct?q=".concat(locationSearch, "&limit=5&appid=").concat(apiKey);
          (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.showLoad)();
          _context.prev = 2;
          _context.next = 5;
          return fetch(url, {
            mode: 'cors'
          });
        case 5:
          response = _context.sent;
          _context.next = 8;
          return response.json();
        case 8:
          geocode = _context.sent;
          city = geocode[0].name;
          state = geocode[0].state;
          country = geocode[0].country;
          latitude = geocode[0].lat;
          longitude = geocode[0].lon; //Display Location
          if (country === 'US') {
            locationOutput.innerHTML = city + ", " + state;
          } else {
            locationOutput.innerHTML = city + ", " + state + ", " + country;
          }
          getWeather(latitude, longitude);
          getForecast(latitude, longitude);
          (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.hideLoad)();
          _context.next = 25;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
          locationOutput.innerHTML = 'City Error... Please enter correct city name';
          (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.hideLoad)();
        case 25:
          ;
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 20]]);
  }));
  return _getGeoCode.apply(this, arguments);
}
function getWeather(_x2, _x3) {
  return _getWeather.apply(this, arguments);
}
function _getWeather() {
  _getWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(latitude, longitude) {
    var url, response, weatherData, timezone, currentDate, currentUTC;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          url = "https://api.openweathermap.org/data/2.5/weather?units=".concat((0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getUnits)(), "&lat=").concat(latitude, "&lon=").concat(longitude, "&appid=").concat(apiKey);
          _context2.prev = 1;
          _context2.next = 4;
          return fetch(url, {
            mode: 'cors'
          });
        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return response.json();
        case 7:
          weatherData = _context2.sent;
          console.log(weatherData);

          //Get Time
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.setCurrentTime)(true);
          timezone = weatherData.timezone;
          currentDate = new Date();
          currentUTC = currentDate.getTime() / 1000;
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.convertTime)(currentUTC, timezone);
          (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.updateBackground)(localDate);

          // Update if day or night
          if ((0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getHours)() >= 18 || (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getHours)() <= 5) {
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.setNight)(true);
          } else {
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.setNight)(false);
          }

          //Display temp values
          timeOutput.innerHTML = "".concat(_src_utilities__WEBPACK_IMPORTED_MODULE_1__.localFormattedDate, " | ").concat(_src_utilities__WEBPACK_IMPORTED_MODULE_1__.localFormattedTime);
          currentTemp.innerHTML = Math.round(weatherData.main.temp);
          realtimeDescription.innerHTML = weatherData.weather[0].description;
          if ((0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getUnits)() === 'imperial') {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°F";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°F";
          } else {
            realtimeLow.innerHTML = "L: " + Math.round(weatherData.main.temp_min) + "°C";
            realtimeHigh.innerHTML = "H: " + Math.round(weatherData.main.temp_max) + "°C";
          }

          //Update icon
          if (realtimeDescription.innerHTML.includes('clouds') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getNight)() == false) {
            icon.src = "../icons/overcast.png";
          } else if (realtimeDescription.innerHTML.includes('thunderstorm')) {
            icon.src = "../icons/thunder.png";
          } else if (realtimeDescription.innerHTML.includes('drizzle')) {
            icon.src = "../icons/sprinkles.png";
          } else if (realtimeDescription.innerHTML.includes('rain')) {
            icon.src = "../icons/rainy.png";
          } else if (realtimeDescription.innerHTML.includes('snow')) {
            icon.src = "../icons/snow.png";
          } else if (realtimeDescription.innerHTML.includes('clear') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getNight)() == false) {
            icon.src = "../icons/clear-day.png";
          } else if (realtimeDescription.innerHTML.includes('clear') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getNight)() == true) {
            icon.src = "../icons/clear-night.png";
          } else if (realtimeDescription.innerHTML.includes('clouds') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getNight)() == true) {
            icon.src = "../icons/cloudy-night.png";
          }
          ;
          _context2.next = 27;
          break;
        case 24:
          _context2.prev = 24;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 27:
          ;
        case 28:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 24]]);
  }));
  return _getWeather.apply(this, arguments);
}
function getForecast(_x4, _x5) {
  return _getForecast.apply(this, arguments);
}
function _getForecast() {
  _getForecast = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(latitude, longitude) {
    var url, response, forecastData, localTimezone;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          url = "https://api.openweathermap.org/data/2.5/forecast?units=".concat((0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getUnits)(), "&lat=").concat(latitude, "&lon=").concat(longitude, "&appid=").concat(apiKey);
          _context3.prev = 1;
          _context3.next = 4;
          return fetch(url, {
            mode: 'cors'
          });
        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return response.json();
        case 7:
          forecastData = _context3.sent;
          console.log(forecastData);

          //Store city time zone (offset seconds)
          localTimezone = forecastData.city.timezone; // Clear Old Data
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.clearForecasts)();

          // Get Hourly Forecast Data 
          forecastData.list.forEach(function (index) {
            hourlyTemp = Math.round(index.main.temp) + _src_ui__WEBPACK_IMPORTED_MODULE_0__.unitSign;
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.setforecastUTC)(index.dt);
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.convertTime)((0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getForecastUTC)(), localTimezone);
            (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.displayHourlyForecast)();
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.dayTemps)(hourlyTemp, _src_utilities__WEBPACK_IMPORTED_MODULE_1__.dayName);
          });
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.convertTime)(forecastData.list[0].dt, localTimezone);
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.calculateAverages)();
          (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.displayDailyForecast)();
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 20:
          ;
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 17]]);
  }));
  return _getForecast.apply(this, arguments);
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dailyForecastData: () => (/* binding */ dailyForecastData),
/* harmony export */   displayDailyForecast: () => (/* binding */ displayDailyForecast),
/* harmony export */   displayHourlyForecast: () => (/* binding */ displayHourlyForecast),
/* harmony export */   hideLoad: () => (/* binding */ hideLoad),
/* harmony export */   hourlyForecastData: () => (/* binding */ hourlyForecastData),
/* harmony export */   showLoad: () => (/* binding */ showLoad),
/* harmony export */   unitSign: () => (/* binding */ unitSign),
/* harmony export */   updateBackground: () => (/* binding */ updateBackground),
/* harmony export */   updateIcon: () => (/* binding */ updateIcon)
/* harmony export */ });
/* harmony import */ var _src_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utilities */ "./src/utilities.js");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/api */ "./src/api.js");
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _icons_overcast_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/overcast.png */ "./icons/overcast.png");
/* harmony import */ var _icons_thunder_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/thunder.png */ "./icons/thunder.png");
/* harmony import */ var _icons_sprinkles_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/sprinkles.png */ "./icons/sprinkles.png");
/* harmony import */ var _icons_rainy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/rainy.png */ "./icons/rainy.png");
/* harmony import */ var _icons_snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/snow.png */ "./icons/snow.png");
/* harmony import */ var _icons_clear_day_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/clear-day.png */ "./icons/clear-day.png");









var unitBtn = document.querySelector('.unitBtn');
var locationInput = document.querySelector('.locationInput');
var hourlyForecastData = document.querySelector('.hourlyForecastData');
var dailyForecastData = document.querySelector('.dailyForecastData');
var body = document.querySelector('body');
var locationSearch = 'Phoenix';
var iconImg = "";
var currentDay = '';
var unitSign = "F°";
var localDate = new Date();
window.onload = function () {
  (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.getGeoCode)(locationSearch);
};
document.addEventListener('DOMContentLoaded', function () {
  updateBackground(localDate);
  locationInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      locationSearch = locationInput.value;
      (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.getGeoCode)(locationSearch);
    }
  });
  unitBtn.addEventListener('click', function () {
    if ((0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.getUnits)() === "imperial") {
      //Change to Metric (C), run getGeoCode
      unitBtn.classList.remove('imperial');
      unitBtn.classList.add('metric');
      (0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.setUnits)('metric');
      unitSign = "C°";
      (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.getGeoCode)(locationSearch);
    } else {
      //Change to Imperial (F), run getGeoCode
      unitBtn.classList.remove('metric');
      unitBtn.classList.add('imperial');
      (0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.setUnits)('imperial');
      unitSign = "F°";
      (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.getGeoCode)(locationSearch);
    }
    unitBtn.innerHTML = unitSign;
  });
});
function displayHourlyForecast() {
  var hourDiv = document.createElement('div');
  hourDiv.className = 'hourDiv';
  hourlyForecastData.appendChild(hourDiv);
  var hourDay = document.createElement('p');
  hourDay.innerHTML = "".concat(_src_utilities__WEBPACK_IMPORTED_MODULE_0__.dayName, " \u2022 ").concat(_src_utilities__WEBPACK_IMPORTED_MODULE_0__.localFormattedTime);
  hourDay.className = 'hourDay';
  hourDiv.appendChild(hourDay);
  var hourTemp = document.createElement('p');
  hourTemp.innerHTML = _src_api__WEBPACK_IMPORTED_MODULE_1__.hourlyTemp;
  hourTemp.className = 'hourTemp';
  hourDiv.appendChild(hourTemp);
}
function displayDailyForecast() {
  console.log(_src_utilities__WEBPACK_IMPORTED_MODULE_0__.averageTemps);

  // Input days in order of week starting with the day after the current day
  var orderedDays = [];
  currentDay = _src_utilities__WEBPACK_IMPORTED_MODULE_0__.dayOfWeek;
  for (var i = 0; i <= 6; i++) {
    var _dayOfWeek = (currentDay + i) % 7;
    var _dayName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'][_dayOfWeek];
    if (_src_utilities__WEBPACK_IMPORTED_MODULE_0__.averageTemps[_dayName] !== null) {
      orderedDays.push(_dayName);
    }
  }

  // Display day temps in specified order
  orderedDays.forEach(function (day) {
    var dayDiv = document.createElement('div');
    dayDiv.className = 'dayDiv';
    dailyForecastData.appendChild(dayDiv);
    var dayDay = document.createElement('p');
    dayDay.innerHTML = "".concat(day);
    dayDay.className = 'dayDay';
    dayDiv.appendChild(dayDay);
    var dayTemp = document.createElement('p');
    dayTemp.innerHTML = _src_utilities__WEBPACK_IMPORTED_MODULE_0__.averageTemps[day] + unitSign;
    dayTemp.className = 'dayTemp';
    dayDiv.appendChild(dayTemp);
  });
}
function updateBackground() {
  console.log((0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.getHours)());
  var hours = (0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.getHours)();
  if (hours >= 4 && hours <= 7) {
    body.className = 'dawn'; //Dawn
  } else if (hours >= 7 && hours <= 12) {
    body.className = 'morning'; //Morning
  } else if (hours >= 12 && hours <= 17) {
    body.className = 'afternoon'; // Afternoon
  } else if (hours >= 17 && hours <= 20) {
    body.className = 'evening';
  } else {
    body.className = 'night'; //Night
  }
  console.log(body.className);
}
function updateIcon(weatherDescription) {
  if (weatherDescription.innerHTML.includes('clouds')) {
    iconImg = _icons_overcast_png__WEBPACK_IMPORTED_MODULE_3__["default"];
  } else if (weatherDescription.innerHTML.includes('thunderstorm')) {
    iconImg = _icons_thunder_png__WEBPACK_IMPORTED_MODULE_4__["default"];
  } else if (weatherDescription.innerHTML.includes('drizzle')) {
    iconImg = _icons_sprinkles_png__WEBPACK_IMPORTED_MODULE_5__["default"];
  } else if (weatherDescription.innerHTML.includes('rain')) {
    iconImg = _icons_rainy_png__WEBPACK_IMPORTED_MODULE_6__["default"];
  } else if (weatherDescription.innerHTML.includes('snow')) {
    iconImg = _icons_snow_png__WEBPACK_IMPORTED_MODULE_7__["default"];
  } else if (weatherDescription.innerHTML.includes('clear')) {
    iconImg = _icons_clear_day_png__WEBPACK_IMPORTED_MODULE_8__["default"];
  }
  ;
  return iconImg;
}
function showLoad() {
  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.content').style.display = 'none';
}
function hideLoad() {
  document.querySelector('.loading').style.display = 'none';
  document.querySelector('.content').style.display = 'flex';
}


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   averageTemps: () => (/* binding */ averageTemps),
/* harmony export */   calculateAverages: () => (/* binding */ calculateAverages),
/* harmony export */   clearForecasts: () => (/* binding */ clearForecasts),
/* harmony export */   convertTime: () => (/* binding */ convertTime),
/* harmony export */   dayName: () => (/* binding */ dayName),
/* harmony export */   dayOfWeek: () => (/* binding */ dayOfWeek),
/* harmony export */   dayTemps: () => (/* binding */ dayTemps),
/* harmony export */   getCurrentTime: () => (/* binding */ getCurrentTime),
/* harmony export */   getForecastUTC: () => (/* binding */ getForecastUTC),
/* harmony export */   getHours: () => (/* binding */ getHours),
/* harmony export */   getNight: () => (/* binding */ getNight),
/* harmony export */   getUnits: () => (/* binding */ getUnits),
/* harmony export */   localFormattedDate: () => (/* binding */ localFormattedDate),
/* harmony export */   localFormattedTime: () => (/* binding */ localFormattedTime),
/* harmony export */   parseLocation: () => (/* binding */ parseLocation),
/* harmony export */   setCurrentTime: () => (/* binding */ setCurrentTime),
/* harmony export */   setHours: () => (/* binding */ setHours),
/* harmony export */   setNight: () => (/* binding */ setNight),
/* harmony export */   setUnits: () => (/* binding */ setUnits),
/* harmony export */   setforecastUTC: () => (/* binding */ setforecastUTC)
/* harmony export */ });
/* harmony import */ var _src_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ui */ "./src/ui.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var units = "imperial";
var localFormattedDate = '';
var localFormattedTime = '';
var hours = 0;
var currentTime = false;
var forecastUTC = 0;
var night = false;
var dayName = '';
var dayOfWeek = '';
var averageTemp = 0;
var temperaturesByDay = {
  'Sun': [],
  'Mon': [],
  'Tues': [],
  'Wed': [],
  'Thur': [],
  'Fri': [],
  'Sat': []
};
var averageTemps = {
  'Sun': [],
  'Mon': [],
  'Tues': [],
  'Wed': [],
  'Thur': [],
  'Fri': [],
  'Sat': []
};
function parseLocation(locationString) {
  var parts = locationString.split(',');
  // Extract parts to keep
  var city = parts[0].trim(); // Removes leading and trailing whitespace
  var state = '';
  var country = '';

  // Check if there are enough parts
  if (parts.length >= 3) {
    // If the last part is "United States", replace it with "USA"
    if (parts[parts.length - 1].trim() === 'United States') {
      country = 'USA';
    } else {
      country = parts[parts.length - 1].trim(); // Otherwise, assume the last part is the country
    }
    // If the second last part is not a state abbreviation, use it as the state
    if (parts[parts.length - 2].trim().length !== 2) {
      state = parts[parts.length - 2].trim();
    }
  } else if (parts.length === 2) {
    // If only two parts, assume the second part is the country
    country = parts[1].trim();
  }

  // Concatenate the parts into the desired format
  var parsedLocation = city;
  if (state !== '') {
    parsedLocation += ", ".concat(state);
  }
  if (country !== '') {
    parsedLocation += ", ".concat(country);
  }
  return parsedLocation;
}
function convertTime(forecastUTC, localTimezone) {
  // Adjust the timestamp by the timezone offset to get the local time
  var localTimestamp = forecastUTC + localTimezone;
  var localDate = new Date(localTimestamp * 1000);
  var localTime = localDate.getTime();

  // Array of month names
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Extract the month, day, and year from localDate
  var month = monthNames[localDate.getUTCMonth()]; // getUTCMonth() returns a zero-based index
  var day = localDate.getUTCDate();
  var year = localDate.getUTCFullYear();

  // Format the local date and time
  localFormattedDate = "".concat(month, " ").concat(day, ", ").concat(year); // Format the local date as "Month D, YYYY"
  localFormattedTime = formatTime(localDate);

  // Get day of the week
  dayName = getDay(localDate);
}
function dayTemps(hourlyTemp, dayName) {
  // Convert hourlyTemp from string to number and remove the unit
  var tempValue = parseFloat(hourlyTemp);

  // Store the temperature value in the corresponding day array
  if (!isNaN(tempValue)) {
    temperaturesByDay[dayName].push(tempValue);
  }
}
function clearForecasts() {
  //Hourly ForecastData Display
  while (_src_ui__WEBPACK_IMPORTED_MODULE_0__.hourlyForecastData.firstChild) {
    _src_ui__WEBPACK_IMPORTED_MODULE_0__.hourlyForecastData.removeChild(_src_ui__WEBPACK_IMPORTED_MODULE_0__.hourlyForecastData.firstChild);
  }
  while (_src_ui__WEBPACK_IMPORTED_MODULE_0__.dailyForecastData.firstChild) {
    _src_ui__WEBPACK_IMPORTED_MODULE_0__.dailyForecastData.removeChild(_src_ui__WEBPACK_IMPORTED_MODULE_0__.dailyForecastData.firstChild);
  }

  //Daily Forecast Data for calculation
  temperaturesByDay = {
    'Sun': [],
    'Mon': [],
    'Tues': [],
    'Wed': [],
    'Thur': [],
    'Fri': [],
    'Sat': []
  };
}
function getTodaysDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
  var day = String(today.getDate()).padStart(2, '0'); // Add leading zero if needed
  var todayDate = "".concat(year, "-").concat(month, "-").concat(day);
  return todayDate;
}
function getDay(localDate) {
  dayOfWeek = localDate.getUTCDay();
  var daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  dayName = daysOfWeek[dayOfWeek];
  return dayName;
}
function formatTime(localDate) {
  var formatted = '';
  // Calculate AM or PM
  hours = localDate.getUTCHours();
  var minutes = ('0' + localDate.getUTCMinutes()).slice(-2);
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  var hours12 = hours % 12;
  hours12 = hours12 ? hours12 : 12; // Convert 0 to 12 for midnight

  // Format the local time with AM or PM
  if (currentTime === true) {
    formatted = hours12 + ':' + minutes + ampm;
  } else {
    formatted = hours12 + ampm;
  }
  currentTime = false;
  return formatted;
}
function calculateAverages() {
  // Loop through temperaturesByDay assigning both the day and temperature
  for (var _i = 0, _Object$entries = Object.entries(temperaturesByDay); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      day = _Object$entries$_i[0],
      temps = _Object$entries$_i[1];
    //Calculate Average Temp (only for days with temperature data)
    if (temps.length > 0) {
      var sum = 0;
      for (var i = 0; i < temps.length; i++) {
        sum += temps[i];
      }
      averageTemp = sum / temps.length;
      averageTemps[day] = averageTemp.toFixed(0);
    } else {
      averageTemps[day] = null; // Indicate no data for this day
    }
  }
}

// Set & Get Variables
function setCurrentTime(value) {
  currentTime = value;
}
function getCurrentTime() {
  return currentTime;
}
function setHours(value) {
  hours = value;
}
function getHours() {
  return hours;
}
function setNight(value) {
  night = value;
}
function getNight() {
  return night;
}
function setforecastUTC(value) {
  forecastUTC = value;
}
function getForecastUTC() {
  return forecastUTC;
}
function setUnits(value) {
  units = value;
}
function getUnits() {
  return units;
}


/***/ }),

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    /* border: 1px solid red; */
}

body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-family: "Libre Franklin", sans-serif;
}
    .morning{
        background: linear-gradient(to bottom, #9cc8dd, #6aa0b7);
    }
    .afternoon{
        background: linear-gradient(to bottom, #81bfdc, #477f97);
    }
    .evening{
        background: linear-gradient(to bottom, #859dde, #34487a);
    }
    .night{
        background: linear-gradient(to bottom, #383647, #0d0d10);
    }
    .dawn{
        background: linear-gradient(to bottom, #6e66a4, #13111e);
    }

footer {
    padding: 5px;
    bottom: 0;
    flex-shrink: 0;
    background-color:#ffffff3b;
    text-align: center;
    font-size: small;
    color: #c1c6de;
}

.loading {
    display: none;
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 2em;
    overflow: visible;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 600px;
    right: 0;
}

.spinner {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

a:visited{
    color: #f3ffc8;
}
#githubIcon{
    width: 3%;
}
span{
    font-size: small;
}

h1{
    font-weight: 500;
    font-size: 6REM;
    margin: 0px;
    /* SHDOW EFFECT below */
    /* text-shadow: -5px 5px 10px #515151;
    color: white; */
}
h4{
    font-weight: 500;
    margin: 0;
}

.locationInput{
    width: 350px;
    height: 25px;
    padding: 8px;
    border-radius: 12px;
    border: 0;
    color:#7b8094
}

.main {
    padding: 24px;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
form{
    width: 100%;
    display: flex;
    justify-content: center;
}
.locationOutput{
    margin-bottom: 0px;
    font-size: larger;
}
.timeOutput{
    margin-top: 10px;
    font-size: small;
}
.realtime {
    /* width: 15%; */
    display: grid;
    grid-auto-flow: column;
    grid-template: 4fr 1fr / 1fr 1fr;
    justify-content: center;
}
    .realtimeTop {
        display: flex;
        align-items: center;
        /* gap: 24px; */
    }
    .realtimeLowHigh {
        display: flex;
        gap: 20px;
    }
    .icon{
        width: 70%;
        margin: 0;
        padding: 12px;
        align-self: center;
        justify-self: center;
        margin: 0px 0px 0px 20px;
    }
    .realtimeDescription{
        justify-self: center;
        margin: 0px 0px 0px 20px;
    }

.unitBtn{
    margin-left: auto;
    border-radius: 24px;
    align-self: baseline;
}
.unitBtn:hover{
    cursor: pointer;
}
    .metric{
        border: 2px solid #858585;
        color: #858585;
    }
    .imperial {
        border: 2px solid #ffffff;
        color: #ffffff;
        background-color: #858585;
    }

.hourlyForecast{
    width: 810px;
    margin: 24px 0px 24px 0px;
    background-color: #ffffff3b;
    padding: 20px 26px 26px 26px;
    border-radius: 12px;
}
    h3{
        margin: 4px;
        position: sticky;
        left: 5px;
        z-index: 1;
    }
    .hourlyForecastData{
        display: grid;
        grid-auto-flow: column;
        gap: 66px;
        text-align: center;
        overflow-x: auto;
        white-space: nowrap;
    }
        .hourDiv{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .hourDiv > *{
            margin: 6px 0px 0px 0px;
            font-size: .85rem;
        }
            .hourIcon, .dayIcon{
                width: 35px;
                display: flex;
                flex-direction: column;
            }
.dailyForecast {
    width: 810px;
    /* padding: 26px; */
    /* margin: 24px 0px 24px 0px; */
    border-radius: 12px;
    /* background-color: #ffffff3b; */
}
    .dailyForecastTitle{
        margin: 12px 24px;
    }
    .dailyForecastData{
        display: flex;
        justify-content: space-between;
    }
        .dayDiv{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            background-color: #ffffff3b;
            width: 100%;
            margin: 0px 2px 0px 2px;
            padding: 24px;
            border-radius: 12px;
        }
            .dayDay{
                margin: 6px 0px 0px 0px;
            }
            .dayTemp{
                margin: 6px 0px 0px 0px;
            }
            
@media (max-width: 930px) {
    .hourlyForecast{
        width: 525px;
        padding: 10px 26px 18px 26px;
    }
    .dailyForecast {
        width: 525px;
    }
    .hourlyForecastData {
        gap: 60px;
    }
    .dayDiv {
        padding: 10px;
    }
}
@media (max-width: 530px) {

    .hourlyForecast {
        width: 100vw;
        border-radius: 0px;
        padding: 18px;
    }
    .dailyForecast{
        width: 100vw;
        padding: 18px 5px 18px 5px;
    }
    .hourlyForecastData {
        gap: 33px;
    }
    .dayDiv {
        min-width: 0;
    }
}
@media (max-width: 400px) {

    .locationInput {
        width: 100%;
    }
    .realtime{
        grid-template: 3fr 1fr / 1fr 1fr
    }
    .realtimeTop{
        gap: 0px;
    }
    h1{
        font-size: 25vw;

    }
    h4{
        font-size: small;
    }
    .dayDay, .dayTemp{
        font-size: small;
    }
    .hourlyForecastData{
        gap: 30px;
    }
    
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n\nbody {\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    color: #ffffff;\n    font-family: \"Libre Franklin\", sans-serif;\n}\n    .morning{\n        background: linear-gradient(to bottom, #9cc8dd, #6aa0b7);\n    }\n    .afternoon{\n        background: linear-gradient(to bottom, #81bfdc, #477f97);\n    }\n    .evening{\n        background: linear-gradient(to bottom, #859dde, #34487a);\n    }\n    .night{\n        background: linear-gradient(to bottom, #383647, #0d0d10);\n    }\n    .dawn{\n        background: linear-gradient(to bottom, #6e66a4, #13111e);\n    }\n\nfooter {\n    padding: 5px;\n    bottom: 0;\n    flex-shrink: 0;\n    background-color:#ffffff3b;\n    text-align: center;\n    font-size: small;\n    color: #c1c6de;\n}\n\n.loading {\n    display: none;\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: visible;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 600px;\n    right: 0;\n}\n\n.spinner {\n    border: 16px solid #f3f3f3;\n    /* Light grey */\n    border-top: 16px solid #3498db;\n    /* Blue */\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\na:visited{\n    color: #f3ffc8;\n}\n#githubIcon{\n    width: 3%;\n}\nspan{\n    font-size: small;\n}\n\nh1{\n    font-weight: 500;\n    font-size: 6REM;\n    margin: 0px;\n    /* SHDOW EFFECT below */\n    /* text-shadow: -5px 5px 10px #515151;\n    color: white; */\n}\nh4{\n    font-weight: 500;\n    margin: 0;\n}\n\n.locationInput{\n    width: 350px;\n    height: 25px;\n    padding: 8px;\n    border-radius: 12px;\n    border: 0;\n    color:#7b8094\n}\n\n.main {\n    padding: 24px;\n    width: 100%;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: center; */\n}\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\nform{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n.locationOutput{\n    margin-bottom: 0px;\n    font-size: larger;\n}\n.timeOutput{\n    margin-top: 10px;\n    font-size: small;\n}\n.realtime {\n    /* width: 15%; */\n    display: grid;\n    grid-auto-flow: column;\n    grid-template: 4fr 1fr / 1fr 1fr;\n    justify-content: center;\n}\n    .realtimeTop {\n        display: flex;\n        align-items: center;\n        /* gap: 24px; */\n    }\n    .realtimeLowHigh {\n        display: flex;\n        gap: 20px;\n    }\n    .icon{\n        width: 70%;\n        margin: 0;\n        padding: 12px;\n        align-self: center;\n        justify-self: center;\n        margin: 0px 0px 0px 20px;\n    }\n    .realtimeDescription{\n        justify-self: center;\n        margin: 0px 0px 0px 20px;\n    }\n\n.unitBtn{\n    margin-left: auto;\n    border-radius: 24px;\n    align-self: baseline;\n}\n.unitBtn:hover{\n    cursor: pointer;\n}\n    .metric{\n        border: 2px solid #858585;\n        color: #858585;\n    }\n    .imperial {\n        border: 2px solid #ffffff;\n        color: #ffffff;\n        background-color: #858585;\n    }\n\n.hourlyForecast{\n    width: 810px;\n    margin: 24px 0px 24px 0px;\n    background-color: #ffffff3b;\n    padding: 20px 26px 26px 26px;\n    border-radius: 12px;\n}\n    h3{\n        margin: 4px;\n        position: sticky;\n        left: 5px;\n        z-index: 1;\n    }\n    .hourlyForecastData{\n        display: grid;\n        grid-auto-flow: column;\n        gap: 66px;\n        text-align: center;\n        overflow-x: auto;\n        white-space: nowrap;\n    }\n        .hourDiv{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        .hourDiv > *{\n            margin: 6px 0px 0px 0px;\n            font-size: .85rem;\n        }\n            .hourIcon, .dayIcon{\n                width: 35px;\n                display: flex;\n                flex-direction: column;\n            }\n.dailyForecast {\n    width: 810px;\n    /* padding: 26px; */\n    /* margin: 24px 0px 24px 0px; */\n    border-radius: 12px;\n    /* background-color: #ffffff3b; */\n}\n    .dailyForecastTitle{\n        margin: 12px 24px;\n    }\n    .dailyForecastData{\n        display: flex;\n        justify-content: space-between;\n    }\n        .dayDiv{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-items: center;\n            background-color: #ffffff3b;\n            width: 100%;\n            margin: 0px 2px 0px 2px;\n            padding: 24px;\n            border-radius: 12px;\n        }\n            .dayDay{\n                margin: 6px 0px 0px 0px;\n            }\n            .dayTemp{\n                margin: 6px 0px 0px 0px;\n            }\n            \n@media (max-width: 930px) {\n    .hourlyForecast{\n        width: 525px;\n        padding: 10px 26px 18px 26px;\n    }\n    .dailyForecast {\n        width: 525px;\n    }\n    .hourlyForecastData {\n        gap: 60px;\n    }\n    .dayDiv {\n        padding: 10px;\n    }\n}\n@media (max-width: 530px) {\n\n    .hourlyForecast {\n        width: 100vw;\n        border-radius: 0px;\n        padding: 18px;\n    }\n    .dailyForecast{\n        width: 100vw;\n        padding: 18px 5px 18px 5px;\n    }\n    .hourlyForecastData {\n        gap: 33px;\n    }\n    .dayDiv {\n        min-width: 0;\n    }\n}\n@media (max-width: 400px) {\n\n    .locationInput {\n        width: 100%;\n    }\n    .realtime{\n        grid-template: 3fr 1fr / 1fr 1fr\n    }\n    .realtimeTop{\n        gap: 0px;\n    }\n    h1{\n        font-size: 25vw;\n\n    }\n    h4{\n        font-size: small;\n    }\n    .dayDay, .dayTemp{\n        font-size: small;\n    }\n    .hourlyForecastData{\n        gap: 30px;\n    }\n    \n}\n\n"],"sourceRoot":""}]);
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

/***/ "./icons/clear-day.png":
/*!*****************************!*\
  !*** ./icons/clear-day.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/clear-day.png");

/***/ }),

/***/ "./icons/overcast.png":
/*!****************************!*\
  !*** ./icons/overcast.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/overcast.png");

/***/ }),

/***/ "./icons/rainy.png":
/*!*************************!*\
  !*** ./icons/rainy.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/rainy.png");

/***/ }),

/***/ "./icons/snow.png":
/*!************************!*\
  !*** ./icons/snow.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/snow.png");

/***/ }),

/***/ "./icons/sprinkles.png":
/*!*****************************!*\
  !*** ./icons/sprinkles.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/sprinkles.png");

/***/ }),

/***/ "./icons/thunder.png":
/*!***************************!*\
  !*** ./icons/thunder.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icons/thunder.png");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ui.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixrQ0FBa0M7QUFDbEM7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxL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Q0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL2ljb25zL2NsZWFyLWRheS5wbmciLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL2ljb25zL292ZXJjYXN0LnBuZyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vaWNvbnMvcmFpbnkucG5nIiwid2VicGFjazovL2VzbGludHByYWMvLi9pY29ucy9zbm93LnBuZyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vaWNvbnMvc3ByaW5rbGVzLnBuZyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vaWNvbnMvdGh1bmRlci5wbmciLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bml0U2lnbiwgdXBkYXRlQmFja2dyb3VuZCwgc2hvd0xvYWQsIGhpZGVMb2FkLCBkaXNwbGF5SG91cmx5Rm9yZWNhc3QsIGRpc3BsYXlEYWlseUZvcmVjYXN0IH0gZnJvbSAnLi4vc3JjL3VpJ1xuaW1wb3J0IHsgbG9jYWxGb3JtYXR0ZWREYXRlLCBsb2NhbEZvcm1hdHRlZFRpbWUsIGRheU5hbWUsIGdldFVuaXRzLCBnZXRIb3Vycywgc2V0Q3VycmVudFRpbWUsIGdldE5pZ2h0LCBzZXROaWdodCwgZ2V0Rm9yZWNhc3RVVEMsIHNldGZvcmVjYXN0VVRDLCBjb252ZXJ0VGltZSwgY2xlYXJGb3JlY2FzdHMsIGRheVRlbXBzLCBjYWxjdWxhdGVBdmVyYWdlcyB9IGZyb20gJy4uL3NyYy91dGlsaXRpZXMnXG5cbmNvbnN0IGxvY2F0aW9uT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uT3V0cHV0Jyk7XG5jb25zdCB0aW1lT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVPdXRwdXQnKTtcbmNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJyk7XG5jb25zdCByZWFsdGltZUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZUxvdycpO1xuY29uc3QgcmVhbHRpbWVIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWx0aW1lSGlnaCcpO1xuY29uc3QgcmVhbHRpbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZURlc2NyaXB0aW9uJyk7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcblxubGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKCk7XG5sZXQgaG91cmx5VGVtcCA9IDA7XG5cbmNvbnN0IGFwaUtleSA9IFwiYjA4OTA0ZWQzMTMyYzNjOWE0NmVmMmFiY2FjYjYyZDZcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpIHsgLy9HZXRzIGxvY2F0aW9uIGluZm8sIHJ1bnMgZ2V0V2VhdGhlciAmIGdldEZvcmVjYXN0LCBkaXNwbGF5cyBjb250ZW50XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25TZWFyY2h9JmxpbWl0PTUmYXBwaWQ9JHthcGlLZXl9YFxuICAgIHNob3dMb2FkKCk7XG5cbiAgdHJ5IHtcbiAgICAgIC8vTWFrZSBmZXRjaCByZXF1ZXN0IGFuZCBzdG9yZXMgaXQgYXMgcmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIFxuICAgICAgLy9TdG9yZSB0aGUgSlNPTiBcbiAgICAgIGNvbnN0IGdlb2NvZGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBsZXQgY2l0eSA9IGdlb2NvZGVbMF0ubmFtZTtcbiAgICAgIGxldCBzdGF0ZSA9IGdlb2NvZGVbMF0uc3RhdGU7XG4gICAgICBsZXQgY291bnRyeSA9IGdlb2NvZGVbMF0uY291bnRyeTtcbiAgICAgIGxldCBsYXRpdHVkZSA9IGdlb2NvZGVbMF0ubGF0O1xuICAgICAgbGV0IGxvbmdpdHVkZSA9IGdlb2NvZGVbMF0ubG9uO1xuXG4gICAgICAvL0Rpc3BsYXkgTG9jYXRpb25cbiAgICAgIGlmIChjb3VudHJ5ID09PSAnVVMnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk91dHB1dC5pbm5lckhUTUwgPSBjaXR5ICsgXCIsIFwiICsgc3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb25PdXRwdXQuaW5uZXJIVE1MID0gY2l0eSArIFwiLCBcIiArIHN0YXRlICsgXCIsIFwiICsgY291bnRyeTtcbiAgICAgIH1cblxuICAgICAgZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIGdldEZvcmVjYXN0KGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgaGlkZUxvYWQoKTtcblxuICB9IGNhdGNoIChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBsb2NhdGlvbk91dHB1dC5pbm5lckhUTUwgPSAnQ2l0eSBFcnJvci4uLiBQbGVhc2UgZW50ZXIgY29ycmVjdCBjaXR5IG5hbWUnO1xuXG4gICAgICBoaWRlTG9hZCgpO1xuICB9OyAgXG4gIFxufVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3VuaXRzPSR7Z2V0VW5pdHMoKX0mbGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHthcGlLZXl9YFxuICAgIHRyeSB7XG4gICAgICAgIC8vRmV0Y2ggcmVxdWVzdCBhbmQgc3RvcmUgaXQgYXMgcmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAgIC8vU3RvcmUgdGhlIEpTT04gXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICAgICAgLy9HZXQgVGltZVxuICAgICAgICBzZXRDdXJyZW50VGltZSh0cnVlKTtcbiAgICAgICAgY29uc3QgdGltZXpvbmUgPSB3ZWF0aGVyRGF0YS50aW1lem9uZTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50VVRDID0gKGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAxMDAwOyBcbiAgICBcbiAgICAgICAgY29udmVydFRpbWUoY3VycmVudFVUQywgdGltZXpvbmUpO1xuICAgICAgICB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGlmIGRheSBvciBuaWdodFxuICAgICAgICBpZiAoZ2V0SG91cnMoKSA+PSAxOCB8fCBnZXRIb3VycygpIDw9IDUpIHtcbiAgICAgICAgICAgIHNldE5pZ2h0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TmlnaHQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9EaXNwbGF5IHRlbXAgdmFsdWVzXG4gICAgICAgIHRpbWVPdXRwdXQuaW5uZXJIVE1MID0gYCR7bG9jYWxGb3JtYXR0ZWREYXRlfSB8ICR7bG9jYWxGb3JtYXR0ZWRUaW1lfWA7XG4gICAgICAgIGN1cnJlbnRUZW1wLmlubmVySFRNTCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgcmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGlmIChnZXRVbml0cygpID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICAgICAgICByZWFsdGltZUxvdy5pbm5lckhUTUwgPSBcIkw6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluKSArIFwiwrBGXCI7XG4gICAgICAgICAgICByZWFsdGltZUhpZ2guaW5uZXJIVE1MID0gXCJIOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCkgKyBcIsKwRlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhbHRpbWVMb3cuaW5uZXJIVE1MID0gXCJMOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbikgKyBcIsKwQ1wiO1xuICAgICAgICAgICAgcmVhbHRpbWVIaWdoLmlubmVySFRNTCA9IFwiSDogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpICsgXCLCsENcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVXBkYXRlIGljb25cbiAgICAgICAgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbG91ZHMnKSAmJiBnZXROaWdodCgpID09IGZhbHNlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCIuLi9pY29ucy9vdmVyY2FzdC5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCd0aHVuZGVyc3Rvcm0nKSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvdGh1bmRlci5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL3Nwcmlua2xlcy5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdyYWluJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL3JhaW55LnBuZ1wiXG4gICAgICAgIH0gZWxzZSBpZiAocmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3Nub3cnKSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvc25vdy5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpICYmIGdldE5pZ2h0KCkgPT0gZmFsc2Upe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL2NsZWFyLWRheS5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpICYmIGdldE5pZ2h0KCkgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvY2xlYXItbmlnaHQucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykgJiYgZ2V0TmlnaHQoKSA9PSB0cnVlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCIuLi9pY29ucy9jbG91ZHktbmlnaHQucG5nXCJcbiAgICAgICAgfTtcbiAgfSBjYXRjaCAoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfTsgIFxufVxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/dW5pdHM9JHtnZXRVbml0cygpfSZsYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD0ke2FwaUtleX1gXG4gICAgdHJ5IHtcbiAgICAgICAgLy9NYWtlIGZldGNoIHJlcXVlc3QgYW5kIHN0b3JlcyBpdCBhcyByZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBcbiAgICAgICAgLy9TdG9yZSB0aGUgSlNPTiBcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpO1xuXG4gICAgICAgIC8vU3RvcmUgY2l0eSB0aW1lIHpvbmUgKG9mZnNldCBzZWNvbmRzKVxuICAgICAgICBsZXQgbG9jYWxUaW1lem9uZSA9IGZvcmVjYXN0RGF0YS5jaXR5LnRpbWV6b25lO1xuXG4gICAgICAgIC8vIENsZWFyIE9sZCBEYXRhXG4gICAgICAgIGNsZWFyRm9yZWNhc3RzKCk7XG5cbiAgICAgICAgLy8gR2V0IEhvdXJseSBGb3JlY2FzdCBEYXRhIFxuICAgICAgICBmb3JlY2FzdERhdGEubGlzdC5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIGhvdXJseVRlbXAgPSBNYXRoLnJvdW5kKGluZGV4Lm1haW4udGVtcCkgKyB1bml0U2lnbjtcbiAgICAgICAgICAgIHNldGZvcmVjYXN0VVRDKGluZGV4LmR0KTtcblxuICAgICAgICAgICAgY29udmVydFRpbWUoZ2V0Rm9yZWNhc3RVVEMoKSwgbG9jYWxUaW1lem9uZSk7XG4gICAgICAgICAgICBkaXNwbGF5SG91cmx5Rm9yZWNhc3QoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGF5VGVtcHMoaG91cmx5VGVtcCwgZGF5TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29udmVydFRpbWUoZm9yZWNhc3REYXRhLmxpc3RbMF0uZHQsIGxvY2FsVGltZXpvbmUpO1xuICAgICAgICBjYWxjdWxhdGVBdmVyYWdlcygpO1xuICAgICAgICBkaXNwbGF5RGFpbHlGb3JlY2FzdCgpO1xuICAgICAgICBcbiAgfSBjYXRjaCAoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfTsgIFxufVxuXG5leHBvcnQgeyBob3VybHlUZW1wIH07IiwiaW1wb3J0IHsgZGF5TmFtZSwgbG9jYWxGb3JtYXR0ZWRUaW1lLCBhdmVyYWdlVGVtcHMsIGRheU9mV2VlaywgZ2V0VW5pdHMsIHNldFVuaXRzLCBnZXRIb3VycyB9IGZyb20gXCIuLi9zcmMvdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBob3VybHlUZW1wLCBnZXRHZW9Db2RlIH0gZnJvbSBcIi4uL3NyYy9hcGlcIjtcbmltcG9ydCAnLi4vc3JjL3N0eWxlLmNzcyc7IFxuaW1wb3J0IG92ZXJjYXN0SWNvbiBmcm9tICcuLi9pY29ucy9vdmVyY2FzdC5wbmcnO1xuaW1wb3J0IHRodW5kZXJJY29uIGZyb20gJy4uL2ljb25zL3RodW5kZXIucG5nJztcbmltcG9ydCBzcHJpbmtsZXNJY29uIGZyb20gJy4uL2ljb25zL3Nwcmlua2xlcy5wbmcnO1xuaW1wb3J0IHJhaW55SWNvbiBmcm9tICcuLi9pY29ucy9yYWlueS5wbmcnO1xuaW1wb3J0IHNub3dJY29uIGZyb20gJy4uL2ljb25zL3Nub3cucG5nJztcbmltcG9ydCBjbGVhckRheUljb24gZnJvbSAnLi4vaWNvbnMvY2xlYXItZGF5LnBuZyc7XG5cblxuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0QnRuJyk7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uSW5wdXQnKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHlGb3JlY2FzdERhdGEnKTtcbmNvbnN0IGRhaWx5Rm9yZWNhc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Rm9yZWNhc3REYXRhJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgbG9jYXRpb25TZWFyY2ggPSAnUGhvZW5peCc7XG5sZXQgaWNvbkltZyA9IFwiXCI7XG5sZXQgY3VycmVudERheSA9ICcnO1xubGV0IHVuaXRTaWduID0gXCJGwrBcIjtcbmxldCBsb2NhbERhdGUgPSBuZXcgRGF0ZSgpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBnZXRHZW9Db2RlKGxvY2F0aW9uU2VhcmNoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSk7XG4gICAgbG9jYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICAgIGxvY2F0aW9uU2VhcmNoID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGdldFVuaXRzKCkgPT09IFwiaW1wZXJpYWxcIikgeyAvL0NoYW5nZSB0byBNZXRyaWMgKEMpLCBydW4gZ2V0R2VvQ29kZVxuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbXBlcmlhbCcpO1xuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICAgICAgICAgIHNldFVuaXRzKCdtZXRyaWMnKTtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJDwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vQ2hhbmdlIHRvIEltcGVyaWFsIChGKSwgcnVuIGdldEdlb0NvZGVcbiAgICAgICAgICAgIHVuaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWV0cmljJyk7XG4gICAgICAgICAgICB1bml0QnRuLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgICBzZXRVbml0cygnaW1wZXJpYWwnKTtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJGwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdEJ0bi5pbm5lckhUTUwgPSB1bml0U2lnbjtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseUZvcmVjYXN0KCkgeyAgICBcbiAgICBjb25zdCBob3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91ckRpdi5jbGFzc05hbWUgPSAnaG91ckRpdic7XG4gICAgaG91cmx5Rm9yZWNhc3REYXRhLmFwcGVuZENoaWxkKGhvdXJEaXYpO1xuXG4gICAgY29uc3QgaG91ckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyRGF5LmlubmVySFRNTCA9IGAke2RheU5hbWV9IOKAoiAke2xvY2FsRm9ybWF0dGVkVGltZX1gO1xuICAgIGhvdXJEYXkuY2xhc3NOYW1lID0gJ2hvdXJEYXknO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91ckRheSk7XG5cbiAgICBjb25zdCBob3VyVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyVGVtcC5pbm5lckhUTUwgPSBob3VybHlUZW1wO1xuICAgIGhvdXJUZW1wLmNsYXNzTmFtZSA9ICdob3VyVGVtcCc7XG4gICAgaG91ckRpdi5hcHBlbmRDaGlsZChob3VyVGVtcCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURhaWx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc29sZS5sb2coYXZlcmFnZVRlbXBzKTtcbiAgICBcbiAgICAvLyBJbnB1dCBkYXlzIGluIG9yZGVyIG9mIHdlZWsgc3RhcnRpbmcgd2l0aCB0aGUgZGF5IGFmdGVyIHRoZSBjdXJyZW50IGRheVxuICAgIGNvbnN0IG9yZGVyZWREYXlzID0gW107XG4gICAgY3VycmVudERheSA9IGRheU9mV2VlaztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gKGN1cnJlbnREYXkgKyBpKSAlIDc7XG4gICAgICAgIGNvbnN0IGRheU5hbWUgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J11bZGF5T2ZXZWVrXTtcbiAgICAgICAgaWYgKGF2ZXJhZ2VUZW1wc1tkYXlOYW1lXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb3JkZXJlZERheXMucHVzaChkYXlOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc3BsYXkgZGF5IHRlbXBzIGluIHNwZWNpZmllZCBvcmRlclxuICAgIG9yZGVyZWREYXlzLmZvckVhY2goZGF5ID0+IHsgICAgXG4gICAgICAgIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlEaXYuY2xhc3NOYW1lID0gJ2RheURpdic7XG4gICAgICAgIGRhaWx5Rm9yZWNhc3REYXRhLmFwcGVuZENoaWxkKGRheURpdik7XG5cbiAgICAgICAgY29uc3QgZGF5RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkYXlEYXkuaW5uZXJIVE1MID0gYCR7ZGF5fWA7XG4gICAgICAgIGRheURheS5jbGFzc05hbWUgPSAnZGF5RGF5JztcbiAgICAgICAgZGF5RGl2LmFwcGVuZENoaWxkKGRheURheSk7XG5cbiAgICAgICAgY29uc3QgZGF5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGF5VGVtcC5pbm5lckhUTUwgPSBhdmVyYWdlVGVtcHNbZGF5XSArIHVuaXRTaWduO1xuICAgICAgICBkYXlUZW1wLmNsYXNzTmFtZSA9ICdkYXlUZW1wJztcbiAgICAgICAgZGF5RGl2LmFwcGVuZENoaWxkKGRheVRlbXApO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJhY2tncm91bmQoKSB7XG4gICAgY29uc29sZS5sb2coZ2V0SG91cnMoKSk7XG4gICAgY29uc3QgaG91cnMgPSBnZXRIb3VycygpO1xuICAgIGlmKGhvdXJzID49NCAmJiBob3Vyczw9Nyl7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2Rhd24nOyAvL0Rhd25cbiAgICB9IGVsc2UgaWYoaG91cnMgPj03ICYmIGhvdXJzIDw9MTIpIHtcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnbW9ybmluZyc7IC8vTW9ybmluZ1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIgJiYgaG91cnMgPD0xNykge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdhZnRlcm5vb24nOyAgLy8gQWZ0ZXJub29uXG4gICAgfSBlbHNlIGlmKGhvdXJzID49IDE3ICYmIGhvdXJzIDw9IDIwKSB7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2V2ZW5pbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ25pZ2h0JzsgLy9OaWdodFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib2R5LmNsYXNzTmFtZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSWNvbih3ZWF0aGVyRGVzY3JpcHRpb24pIHtcbiAgICBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykpe1xuICAgICAgICBpY29uSW1nID0gb3ZlcmNhc3RJY29uO1xuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykpe1xuICAgICAgICBpY29uSW1nID0gdGh1bmRlckljb247XG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICBpY29uSW1nID0gc3ByaW5rbGVzSWNvbjtcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3JhaW4nKSl7XG4gICAgICAgIGljb25JbWcgPSByYWlueUljb247XG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdzbm93Jykpe1xuICAgICAgICBpY29uSW1nID0gc25vd0ljb247XG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpKXtcbiAgICAgICAgaWNvbkltZyA9IGNsZWFyRGF5SWNvbjtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBpY29uSW1nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59XG5leHBvcnQgeyBob3VybHlGb3JlY2FzdERhdGEsIGRhaWx5Rm9yZWNhc3REYXRhLCB1bml0U2lnbiB9OyIsImltcG9ydCB7IGhvdXJseUZvcmVjYXN0RGF0YSwgZGFpbHlGb3JlY2FzdERhdGEgfSBmcm9tIFwiLi4vc3JjL3VpXCI7XG5cbmxldCB1bml0cyA9IFwiaW1wZXJpYWxcIjtcbmxldCBsb2NhbEZvcm1hdHRlZERhdGUgPSAnJztcbmxldCBsb2NhbEZvcm1hdHRlZFRpbWUgPSAnJztcbmxldCBob3VycyA9IDA7XG5sZXQgY3VycmVudFRpbWUgPSBmYWxzZTtcbmxldCBmb3JlY2FzdFVUQyA9IDA7XG5sZXQgbmlnaHQgPSBmYWxzZTtcbmxldCBkYXlOYW1lID0gJyc7XG5sZXQgZGF5T2ZXZWVrID0gJyc7XG5sZXQgYXZlcmFnZVRlbXAgPSAwO1xuXG5sZXQgdGVtcGVyYXR1cmVzQnlEYXkgPSB7XG4gICAgJ1N1bic6IFtdLFxuICAgICdNb24nOiBbXSxcbiAgICAnVHVlcyc6IFtdLFxuICAgICdXZWQnOiBbXSxcbiAgICAnVGh1cic6IFtdLFxuICAgICdGcmknOiBbXSxcbiAgICAnU2F0JzogW11cbn07XG5cbmxldCBhdmVyYWdlVGVtcHMgPSB7XG4gICAgJ1N1bic6IFtdLFxuICAgICdNb24nOiBbXSxcbiAgICAnVHVlcyc6IFtdLFxuICAgICdXZWQnOiBbXSxcbiAgICAnVGh1cic6IFtdLFxuICAgICdGcmknOiBbXSxcbiAgICAnU2F0JzogW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTG9jYXRpb24obG9jYXRpb25TdHJpbmcpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGxvY2F0aW9uU3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgLy8gRXh0cmFjdCBwYXJ0cyB0byBrZWVwXG4gICAgbGV0IGNpdHkgPSBwYXJ0c1swXS50cmltKCk7IC8vIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZVxuICAgIGxldCBzdGF0ZSA9ICcnO1xuICAgIGxldCBjb3VudHJ5ID0gJyc7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgZW5vdWdoIHBhcnRzXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIC8vIElmIHRoZSBsYXN0IHBhcnQgaXMgXCJVbml0ZWQgU3RhdGVzXCIsIHJlcGxhY2UgaXQgd2l0aCBcIlVTQVwiXG4gICAgICAgIGlmIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS50cmltKCkgPT09ICdVbml0ZWQgU3RhdGVzJykge1xuICAgICAgICAgICAgY291bnRyeSA9ICdVU0EnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291bnRyeSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdLnRyaW0oKTsgLy8gT3RoZXJ3aXNlLCBhc3N1bWUgdGhlIGxhc3QgcGFydCBpcyB0aGUgY291bnRyeVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBzZWNvbmQgbGFzdCBwYXJ0IGlzIG5vdCBhIHN0YXRlIGFiYnJldmlhdGlvbiwgdXNlIGl0IGFzIHRoZSBzdGF0ZVxuICAgICAgICBpZiAocGFydHNbcGFydHMubGVuZ3RoIC0gMl0udHJpbSgpLmxlbmd0aCAhPT0gMikge1xuICAgICAgICAgICAgc3RhdGUgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXS50cmltKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBJZiBvbmx5IHR3byBwYXJ0cywgYXNzdW1lIHRoZSBzZWNvbmQgcGFydCBpcyB0aGUgY291bnRyeVxuICAgICAgICBjb3VudHJ5ID0gcGFydHNbMV0udHJpbSgpO1xuICAgIH1cblxuICAgIC8vIENvbmNhdGVuYXRlIHRoZSBwYXJ0cyBpbnRvIHRoZSBkZXNpcmVkIGZvcm1hdFxuICAgIGxldCBwYXJzZWRMb2NhdGlvbiA9IGNpdHk7XG4gICAgaWYgKHN0YXRlICE9PSAnJykge1xuICAgICAgICBwYXJzZWRMb2NhdGlvbiArPSBgLCAke3N0YXRlfWA7XG4gICAgfVxuICAgIGlmIChjb3VudHJ5ICE9PSAnJykge1xuICAgICAgICBwYXJzZWRMb2NhdGlvbiArPSBgLCAke2NvdW50cnl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZExvY2F0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUaW1lKGZvcmVjYXN0VVRDLCBsb2NhbFRpbWV6b25lKSB7XG4gICAgLy8gQWRqdXN0IHRoZSB0aW1lc3RhbXAgYnkgdGhlIHRpbWV6b25lIG9mZnNldCB0byBnZXQgdGhlIGxvY2FsIHRpbWVcbiAgICBjb25zdCBsb2NhbFRpbWVzdGFtcCA9IGZvcmVjYXN0VVRDICsgbG9jYWxUaW1lem9uZTtcbiAgICBsZXQgbG9jYWxEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lc3RhbXAgKiAxMDAwKTtcbiAgICBsZXQgbG9jYWxUaW1lID0gbG9jYWxEYXRlLmdldFRpbWUoKTtcblxuICAgIC8vIEFycmF5IG9mIG1vbnRoIG5hbWVzXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xuICAgIFxuICAgIC8vIEV4dHJhY3QgdGhlIG1vbnRoLCBkYXksIGFuZCB5ZWFyIGZyb20gbG9jYWxEYXRlXG4gICAgY29uc3QgbW9udGggPSBtb250aE5hbWVzW2xvY2FsRGF0ZS5nZXRVVENNb250aCgpXTsgLy8gZ2V0VVRDTW9udGgoKSByZXR1cm5zIGEgemVyby1iYXNlZCBpbmRleFxuICAgIGNvbnN0IGRheSA9IGxvY2FsRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGxvY2FsRGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gICAgLy8gRm9ybWF0IHRoZSBsb2NhbCBkYXRlIGFuZCB0aW1lXG4gICAgbG9jYWxGb3JtYXR0ZWREYXRlID0gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7IC8vIEZvcm1hdCB0aGUgbG9jYWwgZGF0ZSBhcyBcIk1vbnRoIEQsIFlZWVlcIlxuICAgIGxvY2FsRm9ybWF0dGVkVGltZSA9IGZvcm1hdFRpbWUobG9jYWxEYXRlKTtcblxuICAgIC8vIEdldCBkYXkgb2YgdGhlIHdlZWtcbiAgICBkYXlOYW1lID0gZ2V0RGF5KGxvY2FsRGF0ZSk7XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBkYXlUZW1wcyhob3VybHlUZW1wLCBkYXlOYW1lKSB7XG4gICAgLy8gQ29udmVydCBob3VybHlUZW1wIGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgcmVtb3ZlIHRoZSB1bml0XG4gICAgY29uc3QgdGVtcFZhbHVlID0gcGFyc2VGbG9hdChob3VybHlUZW1wKTtcblxuICAgIC8vIFN0b3JlIHRoZSB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiB0aGUgY29ycmVzcG9uZGluZyBkYXkgYXJyYXlcbiAgICBpZiAoIWlzTmFOKHRlbXBWYWx1ZSkpIHtcbiAgICAgICAgdGVtcGVyYXR1cmVzQnlEYXlbZGF5TmFtZV0ucHVzaCh0ZW1wVmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckZvcmVjYXN0cygpIHtcbiAgICAvL0hvdXJseSBGb3JlY2FzdERhdGEgRGlzcGxheVxuICAgIHdoaWxlIChob3VybHlGb3JlY2FzdERhdGEuZmlyc3RDaGlsZCkge1xuICAgICAgICBob3VybHlGb3JlY2FzdERhdGEucmVtb3ZlQ2hpbGQoaG91cmx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICB3aGlsZSAoZGFpbHlGb3JlY2FzdERhdGEuZmlyc3RDaGlsZCkge1xuICAgICAgICBkYWlseUZvcmVjYXN0RGF0YS5yZW1vdmVDaGlsZChkYWlseUZvcmVjYXN0RGF0YS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvL0RhaWx5IEZvcmVjYXN0IERhdGEgZm9yIGNhbGN1bGF0aW9uXG4gICAgdGVtcGVyYXR1cmVzQnlEYXkgPSB7XG4gICAgICAgICAgICAnU3VuJzogW10sXG4gICAgICAgICAgICAnTW9uJzogW10sXG4gICAgICAgICAgICAnVHVlcyc6IFtdLFxuICAgICAgICAgICAgJ1dlZCc6IFtdLFxuICAgICAgICAgICAgJ1RodXInOiBbXSxcbiAgICAgICAgICAgICdGcmknOiBbXSxcbiAgICAgICAgICAgICdTYXQnOiBbXVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRUb2RheXNEYXRlKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gQWRkIGxlYWRpbmcgemVybyBpZiBuZWVkZWRcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpOyAvLyBBZGQgbGVhZGluZyB6ZXJvIGlmIG5lZWRlZFxuICAgIGNvbnN0IHRvZGF5RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgcmV0dXJuIHRvZGF5RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldERheShsb2NhbERhdGUpIHtcbiAgICBkYXlPZldlZWsgPSBsb2NhbERhdGUuZ2V0VVRDRGF5KCk7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnXTtcbiAgICBkYXlOYW1lID0gZGF5c09mV2Vla1tkYXlPZldlZWtdO1xuXG4gICAgcmV0dXJuIGRheU5hbWU7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lKGxvY2FsRGF0ZSkge1xuICAgIGxldCBmb3JtYXR0ZWQgPSAnJztcbiAgICAvLyBDYWxjdWxhdGUgQU0gb3IgUE1cbiAgICBob3VycyA9IGxvY2FsRGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSAoJzAnICsgbG9jYWxEYXRlLmdldFVUQ01pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xuXG4gICAgLy8gQ29udmVydCB0byAxMi1ob3VyIGZvcm1hdFxuICAgIGxldCBob3VyczEyID0gaG91cnMgJSAxMjtcbiAgICBob3VyczEyID0gaG91cnMxMiA/IGhvdXJzMTIgOiAxMjsgLy8gQ29udmVydCAwIHRvIDEyIGZvciBtaWRuaWdodFxuXG4gICAgLy8gRm9ybWF0IHRoZSBsb2NhbCB0aW1lIHdpdGggQU0gb3IgUE1cbiAgICBpZiAoY3VycmVudFRpbWUgPT09IHRydWUpIHtcbiAgICAgICAgZm9ybWF0dGVkID0gaG91cnMxMisgJzonKyBtaW51dGVzKyBhbXBtO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdHRlZCA9IGhvdXJzMTIrIGFtcG07XG4gICAgfVxuICAgIFxuICAgIGN1cnJlbnRUaW1lID0gZmFsc2U7XG4gICAgcmV0dXJuIGZvcm1hdHRlZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBdmVyYWdlcygpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggdGVtcGVyYXR1cmVzQnlEYXkgYXNzaWduaW5nIGJvdGggdGhlIGRheSBhbmQgdGVtcGVyYXR1cmVcbiAgICBmb3IgKGNvbnN0IFtkYXksIHRlbXBzXSBvZiBPYmplY3QuZW50cmllcyh0ZW1wZXJhdHVyZXNCeURheSkpIHtcblxuICAgICAgICAvL0NhbGN1bGF0ZSBBdmVyYWdlIFRlbXAgKG9ubHkgZm9yIGRheXMgd2l0aCB0ZW1wZXJhdHVyZSBkYXRhKVxuICAgICAgICBpZiAodGVtcHMubGVuZ3RoID4gMCkgeyBcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN1bSArPSB0ZW1wc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wID0gc3VtIC8gdGVtcHMubGVuZ3RoXG4gICAgICAgICAgICBhdmVyYWdlVGVtcHNbZGF5XSA9IGF2ZXJhZ2VUZW1wLnRvRml4ZWQoMCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wc1tkYXldID0gbnVsbDsgLy8gSW5kaWNhdGUgbm8gZGF0YSBmb3IgdGhpcyBkYXlcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vLyBTZXQgJiBHZXQgVmFyaWFibGVzXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFRpbWUodmFsdWUpIHtcbiAgICBjdXJyZW50VGltZSA9IHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiBjdXJyZW50VGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvdXJzKHZhbHVlKSB7XG4gICAgaG91cnMgPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvdXJzKCkge1xuICAgIHJldHVybiBob3Vycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5pZ2h0KHZhbHVlKSB7XG4gICAgbmlnaHQgPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5pZ2h0KCkge1xuICAgIHJldHVybiBuaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldGZvcmVjYXN0VVRDKHZhbHVlKSB7XG4gICAgZm9yZWNhc3RVVEMgPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcmVjYXN0VVRDKCkge1xuICAgIHJldHVybiBmb3JlY2FzdFVUQztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVuaXRzKHZhbHVlKXtcbiAgICB1bml0cyA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdHMoKSB7XG4gICAgcmV0dXJuIHVuaXRzO1xuXG59XG5cblxuXG5leHBvcnQgeyBsb2NhbEZvcm1hdHRlZERhdGUsIGxvY2FsRm9ybWF0dGVkVGltZSwgZGF5TmFtZSwgYXZlcmFnZVRlbXBzLCBkYXlPZldlZWsgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZSBGcmFua2xpblwiLCBzYW5zLXNlcmlmO1xufVxuICAgIC5tb3JuaW5ne1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOWNjOGRkLCAjNmFhMGI3KTtcbiAgICB9XG4gICAgLmFmdGVybm9vbntcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzgxYmZkYywgIzQ3N2Y5Nyk7XG4gICAgfVxuICAgIC5ldmVuaW5ne1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODU5ZGRlLCAjMzQ0ODdhKTtcbiAgICB9XG4gICAgLm5pZ2h0e1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzgzNjQ3LCAjMGQwZDEwKTtcbiAgICB9XG4gICAgLmRhd257XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2ZTY2YTQsICMxMzExMWUpO1xuICAgIH1cblxuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjNiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjYzFjNmRlO1xufVxuXG4ubG9hZGluZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNjAwcHg7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5zcGlubmVyIHtcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgICAvKiBMaWdodCBncmV5ICovXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAgIC8qIEJsdWUgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuYTp2aXNpdGVke1xuICAgIGNvbG9yOiAjZjNmZmM4O1xufVxuI2dpdGh1Ykljb257XG4gICAgd2lkdGg6IDMlO1xufVxuc3BhbntcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5oMXtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogNlJFTTtcbiAgICBtYXJnaW46IDBweDtcbiAgICAvKiBTSERPVyBFRkZFQ1QgYmVsb3cgKi9cbiAgICAvKiB0ZXh0LXNoYWRvdzogLTVweCA1cHggMTBweCAjNTE1MTUxO1xuICAgIGNvbG9yOiB3aGl0ZTsgKi9cbn1cbmg0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubG9jYXRpb25JbnB1dHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjojN2I4MDk0XG59XG5cbi5tYWluIHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG59XG4uY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2NhdGlvbk91dHB1dHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4udGltZU91dHB1dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4ucmVhbHRpbWUge1xuICAgIC8qIHdpZHRoOiAxNSU7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtdGVtcGxhdGU6IDRmciAxZnIgLyAxZnIgMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuICAgIC5yZWFsdGltZVRvcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIGdhcDogMjRweDsgKi9cbiAgICB9XG4gICAgLnJlYWx0aW1lTG93SGlnaCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG4gICAgLmljb257XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xuICAgIH1cbiAgICAucmVhbHRpbWVEZXNjcmlwdGlvbntcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcbiAgICB9XG5cbi51bml0QnRue1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG59XG4udW5pdEJ0bjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gICAgLm1ldHJpY3tcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1ODU4NTtcbiAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgfVxuICAgIC5pbXBlcmlhbCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU4NTg1O1xuICAgIH1cblxuLmhvdXJseUZvcmVjYXN0e1xuICAgIHdpZHRoOiA4MTBweDtcbiAgICBtYXJnaW46IDI0cHggMHB4IDI0cHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzYjtcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHggMjZweCAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4gICAgaDN7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5ob3VybHlGb3JlY2FzdERhdGF7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgICAgIGdhcDogNjZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgICAgICAgLmhvdXJEaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhvdXJEaXYgPiAqe1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NXJlbTtcbiAgICAgICAgfVxuICAgICAgICAgICAgLmhvdXJJY29uLCAuZGF5SWNvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4uZGFpbHlGb3JlY2FzdCB7XG4gICAgd2lkdGg6IDgxMHB4O1xuICAgIC8qIHBhZGRpbmc6IDI2cHg7ICovXG4gICAgLyogbWFyZ2luOiAyNHB4IDBweCAyNHB4IDBweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzYjsgKi9cbn1cbiAgICAuZGFpbHlGb3JlY2FzdFRpdGxle1xuICAgICAgICBtYXJnaW46IDEycHggMjRweDtcbiAgICB9XG4gICAgLmRhaWx5Rm9yZWNhc3REYXRhe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgICAgICAuZGF5RGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjNiO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAycHggMHB4IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgICAgICAuZGF5RGF5e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRheVRlbXB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xuICAgIC5ob3VybHlGb3JlY2FzdHtcbiAgICAgICAgd2lkdGg6IDUyNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI2cHggMThweCAyNnB4O1xuICAgIH1cbiAgICAuZGFpbHlGb3JlY2FzdCB7XG4gICAgICAgIHdpZHRoOiA1MjVweDtcbiAgICB9XG4gICAgLmhvdXJseUZvcmVjYXN0RGF0YSB7XG4gICAgICAgIGdhcDogNjBweDtcbiAgICB9XG4gICAgLmRheURpdiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XG5cbiAgICAuaG91cmx5Rm9yZWNhc3Qge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICB9XG4gICAgLmRhaWx5Rm9yZWNhc3R7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgcGFkZGluZzogMThweCA1cHggMThweCA1cHg7XG4gICAgfVxuICAgIC5ob3VybHlGb3JlY2FzdERhdGEge1xuICAgICAgICBnYXA6IDMzcHg7XG4gICAgfVxuICAgIC5kYXlEaXYge1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG5cbiAgICAubG9jYXRpb25JbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucmVhbHRpbWV7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDNmciAxZnIgLyAxZnIgMWZyXG4gICAgfVxuICAgIC5yZWFsdGltZVRvcHtcbiAgICAgICAgZ2FwOiAwcHg7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDI1dnc7XG5cbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgfVxuICAgIC5kYXlEYXksIC5kYXlUZW1we1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIH1cbiAgICAuaG91cmx5Rm9yZWNhc3REYXRhe1xuICAgICAgICBnYXA6IDMwcHg7XG4gICAgfVxuICAgIFxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QseUNBQXlDO0FBQzdDO0lBQ0k7UUFDSSx3REFBd0Q7SUFDNUQ7SUFDQTtRQUNJLHdEQUF3RDtJQUM1RDtJQUNBO1FBQ0ksd0RBQXdEO0lBQzVEO0lBQ0E7UUFDSSx3REFBd0Q7SUFDNUQ7SUFDQTtRQUNJLHdEQUF3RDtJQUM1RDs7QUFFSjtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsY0FBYztJQUNkLDBC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O1lBQ0k7Z0JBQ0ksdUJBQXVCO1lBQzNCO1lBQ0E7Z0JBQ0ksdUJBQXVCO1lBQzNCOztBQUVaO0lBQ0k7UUFDSSxZQUFZO1FBQ1osNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUNBOztJQUVJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBOztJQUVJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLGVBQWU7O0lBRW5CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksU0FBUztJQUNiOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMaWJyZSBGcmFua2xpblxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbiAgICAubW9ybmluZ3tcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5Y2M4ZGQsICM2YWEwYjcpO1xcbiAgICB9XFxuICAgIC5hZnRlcm5vb257XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODFiZmRjLCAjNDc3Zjk3KTtcXG4gICAgfVxcbiAgICAuZXZlbmluZ3tcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4NTlkZGUsICMzNDQ4N2EpO1xcbiAgICB9XFxuICAgIC5uaWdodHtcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzODM2NDcsICMwZDBkMTApO1xcbiAgICB9XFxuICAgIC5kYXdue1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZlNjZhNCwgIzEzMTExZSk7XFxuICAgIH1cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjNiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGNvbG9yOiAjYzFjNmRlO1xcbn1cXG5cXG4ubG9hZGluZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDYwMHB4O1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnNwaW5uZXIge1xcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcXG4gICAgLyogTGlnaHQgZ3JleSAqL1xcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XFxuICAgIC8qIEJsdWUgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG5hOnZpc2l0ZWR7XFxuICAgIGNvbG9yOiAjZjNmZmM4O1xcbn1cXG4jZ2l0aHViSWNvbntcXG4gICAgd2lkdGg6IDMlO1xcbn1cXG5zcGFue1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiA2UkVNO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgLyogU0hET1cgRUZGRUNUIGJlbG93ICovXFxuICAgIC8qIHRleHQtc2hhZG93OiAtNXB4IDVweCAxMHB4ICM1MTUxNTE7XFxuICAgIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuaDR7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvY2F0aW9uSW5wdXR7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IzdiODA5NFxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZm9ybXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubG9jYXRpb25PdXRwdXR7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcbi50aW1lT3V0cHV0e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG4ucmVhbHRpbWUge1xcbiAgICAvKiB3aWR0aDogMTUlOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlOiA0ZnIgMWZyIC8gMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiAgICAucmVhbHRpbWVUb3Age1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiBnYXA6IDI0cHg7ICovXFxuICAgIH1cXG4gICAgLnJlYWx0aW1lTG93SGlnaCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuICAgIC5pY29ue1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcXG4gICAgfVxcbiAgICAucmVhbHRpbWVEZXNjcmlwdGlvbntcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xcbiAgICB9XFxuXFxuLnVuaXRCdG57XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG59XFxuLnVuaXRCdG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuICAgIC5tZXRyaWN7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjODU4NTg1O1xcbiAgICAgICAgY29sb3I6ICM4NTg1ODU7XFxuICAgIH1cXG4gICAgLmltcGVyaWFsIHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1ODU7XFxuICAgIH1cXG5cXG4uaG91cmx5Rm9yZWNhc3R7XFxuICAgIHdpZHRoOiA4MTBweDtcXG4gICAgbWFyZ2luOiAyNHB4IDBweCAyNHB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjNiO1xcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHggMjZweCAyNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG4gICAgaDN7XFxuICAgICAgICBtYXJnaW46IDRweDtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICBsZWZ0OiA1cHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuICAgIC5ob3VybHlGb3JlY2FzdERhdGF7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNjZweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuICAgICAgICAuaG91ckRpdntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5ob3VyRGl2ID4gKntcXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwcHggMHB4IDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IC44NXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuaG91ckljb24sIC5kYXlJY29ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICB9XFxuLmRhaWx5Rm9yZWNhc3Qge1xcbiAgICB3aWR0aDogODEwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDI2cHg7ICovXFxuICAgIC8qIG1hcmdpbjogMjRweCAwcHggMjRweCAwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzYjsgKi9cXG59XFxuICAgIC5kYWlseUZvcmVjYXN0VGl0bGV7XFxuICAgICAgICBtYXJnaW46IDEycHggMjRweDtcXG4gICAgfVxcbiAgICAuZGFpbHlGb3JlY2FzdERhdGF7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuICAgICAgICAuZGF5RGl2e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmM2I7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4IDBweCAycHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMjRweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5kYXlEYXl7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweCAwcHggMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGF5VGVtcHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDBweCAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xcbiAgICAuaG91cmx5Rm9yZWNhc3R7XFxuICAgICAgICB3aWR0aDogNTI1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI2cHggMThweCAyNnB4O1xcbiAgICB9XFxuICAgIC5kYWlseUZvcmVjYXN0IHtcXG4gICAgICAgIHdpZHRoOiA1MjVweDtcXG4gICAgfVxcbiAgICAuaG91cmx5Rm9yZWNhc3REYXRhIHtcXG4gICAgICAgIGdhcDogNjBweDtcXG4gICAgfVxcbiAgICAuZGF5RGl2IHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XFxuXFxuICAgIC5ob3VybHlGb3JlY2FzdCB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICB9XFxuICAgIC5kYWlseUZvcmVjYXN0e1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgcGFkZGluZzogMThweCA1cHggMThweCA1cHg7XFxuICAgIH1cXG4gICAgLmhvdXJseUZvcmVjYXN0RGF0YSB7XFxuICAgICAgICBnYXA6IDMzcHg7XFxuICAgIH1cXG4gICAgLmRheURpdiB7XFxuICAgICAgICBtaW4td2lkdGg6IDA7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuXFxuICAgIC5sb2NhdGlvbklucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5yZWFsdGltZXtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDNmciAxZnIgLyAxZnIgMWZyXFxuICAgIH1cXG4gICAgLnJlYWx0aW1lVG9we1xcbiAgICAgICAgZ2FwOiAwcHg7XFxuICAgIH1cXG4gICAgaDF7XFxuICAgICAgICBmb250LXNpemU6IDI1dnc7XFxuXFxuICAgIH1cXG4gICAgaDR7XFxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICB9XFxuICAgIC5kYXlEYXksIC5kYXlUZW1we1xcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgfVxcbiAgICAuaG91cmx5Rm9yZWNhc3REYXRhe1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiaWNvbnMvY2xlYXItZGF5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaWNvbnMvb3ZlcmNhc3QucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpY29ucy9yYWlueS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImljb25zL3Nub3cucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpY29ucy9zcHJpbmtsZXMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpY29ucy90aHVuZGVyLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3VpLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwidW5pdFNpZ24iLCJ1cGRhdGVCYWNrZ3JvdW5kIiwic2hvd0xvYWQiLCJoaWRlTG9hZCIsImRpc3BsYXlIb3VybHlGb3JlY2FzdCIsImRpc3BsYXlEYWlseUZvcmVjYXN0IiwibG9jYWxGb3JtYXR0ZWREYXRlIiwibG9jYWxGb3JtYXR0ZWRUaW1lIiwiZGF5TmFtZSIsImdldFVuaXRzIiwiZ2V0SG91cnMiLCJzZXRDdXJyZW50VGltZSIsImdldE5pZ2h0Iiwic2V0TmlnaHQiLCJnZXRGb3JlY2FzdFVUQyIsInNldGZvcmVjYXN0VVRDIiwiY29udmVydFRpbWUiLCJjbGVhckZvcmVjYXN0cyIsImRheVRlbXBzIiwiY2FsY3VsYXRlQXZlcmFnZXMiLCJsb2NhdGlvbk91dHB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpbWVPdXRwdXQiLCJjdXJyZW50VGVtcCIsInJlYWx0aW1lTG93IiwicmVhbHRpbWVIaWdoIiwicmVhbHRpbWVEZXNjcmlwdGlvbiIsImljb24iLCJsb2NhbERhdGUiLCJEYXRlIiwiaG91cmx5VGVtcCIsImFwaUtleSIsImdldEdlb0NvZGUiLCJfeCIsIl9nZXRHZW9Db2RlIiwiX2NhbGxlZSIsImxvY2F0aW9uU2VhcmNoIiwidXJsIiwicmVzcG9uc2UiLCJnZW9jb2RlIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNvbmNhdCIsImZldGNoIiwibW9kZSIsImpzb24iLCJsYXQiLCJsb24iLCJpbm5lckhUTUwiLCJnZXRXZWF0aGVyIiwiZ2V0Rm9yZWNhc3QiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJfeDIiLCJfeDMiLCJfZ2V0V2VhdGhlciIsIl9jYWxsZWUyIiwid2VhdGhlckRhdGEiLCJ0aW1lem9uZSIsImN1cnJlbnREYXRlIiwiY3VycmVudFVUQyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImdldFRpbWUiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJpbmNsdWRlcyIsInNyYyIsIl94NCIsIl94NSIsIl9nZXRGb3JlY2FzdCIsIl9jYWxsZWUzIiwiZm9yZWNhc3REYXRhIiwibG9jYWxUaW1lem9uZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxpc3QiLCJpbmRleCIsImR0IiwiYXZlcmFnZVRlbXBzIiwiZGF5T2ZXZWVrIiwic2V0VW5pdHMiLCJvdmVyY2FzdEljb24iLCJ0aHVuZGVySWNvbiIsInNwcmlua2xlc0ljb24iLCJyYWlueUljb24iLCJzbm93SWNvbiIsImNsZWFyRGF5SWNvbiIsInVuaXRCdG4iLCJsb2NhdGlvbklucHV0IiwiaG91cmx5Rm9yZWNhc3REYXRhIiwiZGFpbHlGb3JlY2FzdERhdGEiLCJib2R5IiwiaWNvbkltZyIsImN1cnJlbnREYXkiLCJ3aW5kb3ciLCJvbmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhvdXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJob3VyRGF5IiwiaG91clRlbXAiLCJvcmRlcmVkRGF5cyIsImRheSIsImRheURpdiIsImRheURheSIsImRheVRlbXAiLCJob3VycyIsInVwZGF0ZUljb24iLCJ3ZWF0aGVyRGVzY3JpcHRpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJ1bml0cyIsImN1cnJlbnRUaW1lIiwiZm9yZWNhc3RVVEMiLCJuaWdodCIsImF2ZXJhZ2VUZW1wIiwidGVtcGVyYXR1cmVzQnlEYXkiLCJwYXJzZUxvY2F0aW9uIiwibG9jYXRpb25TdHJpbmciLCJwYXJ0cyIsInNwbGl0IiwidHJpbSIsInBhcnNlZExvY2F0aW9uIiwibG9jYWxUaW1lc3RhbXAiLCJsb2NhbFRpbWUiLCJtb250aE5hbWVzIiwibW9udGgiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJ5ZWFyIiwiZ2V0VVRDRnVsbFllYXIiLCJmb3JtYXRUaW1lIiwiZ2V0RGF5IiwidGVtcFZhbHVlIiwicGFyc2VGbG9hdCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImdldFRvZGF5c0RhdGUiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJ0b2RheURhdGUiLCJnZXRVVENEYXkiLCJkYXlzT2ZXZWVrIiwiZm9ybWF0dGVkIiwiZ2V0VVRDSG91cnMiLCJtaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsImFtcG0iLCJob3VyczEyIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJ0ZW1wcyIsInN1bSIsInRvRml4ZWQiLCJnZXRDdXJyZW50VGltZSIsInNldEhvdXJzIl0sInNvdXJjZVJvb3QiOiIifQ==