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
var units = "imperial";
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
          url = "https://api.openweathermap.org/data/2.5/weather?units=".concat(units, "&lat=").concat(latitude, "&lon=").concat(longitude, "&appid=").concat(apiKey);
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
          if ((0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getHours)() >= 17 || (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.getHours)() <= 5) {
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.setNight)(true);
          } else {
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.setNight)(false);
          }

          //Display temp values
          timeOutput.innerHTML = "".concat(_src_utilities__WEBPACK_IMPORTED_MODULE_1__.localFormattedDate, " | ").concat(_src_utilities__WEBPACK_IMPORTED_MODULE_1__.localFormattedTime);
          currentTemp.innerHTML = Math.round(weatherData.main.temp);
          realtimeDescription.innerHTML = weatherData.weather[0].description;
          if (units === 'imperial') {
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
          url = "https://api.openweathermap.org/data/2.5/forecast?units=".concat(units, "&lat=").concat(latitude, "&lon=").concat(longitude, "&appid=").concat(apiKey);
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
    if (units === "imperial") {
      //Change to Metric (C), run getGeoCode
      unitBtn.classList.remove('imperial');
      unitBtn.classList.add('metric');
      units = "metric";
      unitSign = "C°";
      (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.getGeoCode)(locationSearch);
    } else {
      //Change to Imperial (F), run getGeoCode
      unitBtn.classList.remove('metric');
      unitBtn.classList.add('imperial');
      units = "imperial";
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
function updateBackground(localDate) {
  var hours = localDate.getUTCHours(); // Use getUTCHours() because you've manually adjusted localDate to represent local time

  if (hours >= 17) {
    body.className = 'evening';
  } else if (hours >= 12) {
    body.className = 'afternoon'; // Afternoon
  } else if (hours >= 6) {
    body.className = 'morning'; //Morning
  } else if (hours >= 4) {
    body.className = 'dawn'; //Dawn
  } else {
    body.className = 'night'; //Night
  }
}
function updateIcon(weatherDescription) {
  if (weatherDescription.innerHTML.includes('clouds')) {
    iconImg = "icons/overcast.png";
  } else if (weatherDescription.innerHTML.includes('thunderstorm')) {
    iconImg = "icons/thunder.png";
  } else if (weatherDescription.innerHTML.includes('drizzle')) {
    iconImg = "icons/sprinkles.png";
  } else if (weatherDescription.innerHTML.includes('rain')) {
    iconImg = "icons/rainy.png";
  } else if (weatherDescription.innerHTML.includes('snow')) {
    iconImg = "icons/snow.png";
  } else if (weatherDescription.innerHTML.includes('clear')) {
    iconImg = "icons/clear-day.png";
  }
  ;
  return iconImg;
}
function showLoad() {
  document.querySelector('.loading').style.display = 'none';
  document.querySelector('.content').style.display = 'flex';
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
/* harmony export */   localFormattedDate: () => (/* binding */ localFormattedDate),
/* harmony export */   localFormattedTime: () => (/* binding */ localFormattedTime),
/* harmony export */   parseLocation: () => (/* binding */ parseLocation),
/* harmony export */   setCurrentTime: () => (/* binding */ setCurrentTime),
/* harmony export */   setHours: () => (/* binding */ setHours),
/* harmony export */   setNight: () => (/* binding */ setNight),
/* harmony export */   setforecastUTC: () => (/* binding */ setforecastUTC)
/* harmony export */ });
/* harmony import */ var _src_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ui */ "./src/ui.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  night = hours;
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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ui.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRU8sU0FBUzVHLFFBQVFBLENBQUN6SCxLQUFLLEVBQUU7RUFDNUI2TyxLQUFLLEdBQUc3TyxLQUFLO0FBQ2pCO0FBRU8sU0FBU3dILFFBQVFBLENBQUEsRUFBRztFQUN2QixPQUFPcUgsS0FBSztBQUNoQjtBQUVPLFNBQVNsSCxjQUFjQSxDQUFDM0gsS0FBSyxFQUFFO0VBQ2xDNE8sV0FBVyxHQUFHNU8sS0FBSztBQUN2QjtBQUVPLFNBQVMwSCxjQUFjQSxDQUFBLEVBQUc7RUFDN0IsT0FBT2tILFdBQVc7QUFDdEI7Ozs7Ozs7VUN4TUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vc3JjL3VpLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW5pdFNpZ24sIHVwZGF0ZUJhY2tncm91bmQsIHNob3dMb2FkLCBoaWRlTG9hZCwgZGlzcGxheUhvdXJseUZvcmVjYXN0LCBkaXNwbGF5RGFpbHlGb3JlY2FzdCB9IGZyb20gJy4uL3NyYy91aSdcbmltcG9ydCB7IGxvY2FsRm9ybWF0dGVkRGF0ZSwgbG9jYWxGb3JtYXR0ZWRUaW1lLCBkYXlOYW1lLCBnZXRIb3Vycywgc2V0Q3VycmVudFRpbWUsIGdldE5pZ2h0LCBzZXROaWdodCwgZ2V0Rm9yZWNhc3RVVEMsIHNldGZvcmVjYXN0VVRDLCBjb252ZXJ0VGltZSwgY2xlYXJGb3JlY2FzdHMsIGRheVRlbXBzLCBjYWxjdWxhdGVBdmVyYWdlcyB9IGZyb20gJy4uL3NyYy91dGlsaXRpZXMnXG5cbmNvbnN0IGxvY2F0aW9uT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uT3V0cHV0Jyk7XG5jb25zdCB0aW1lT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVPdXRwdXQnKTtcbmNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJyk7XG5jb25zdCByZWFsdGltZUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZUxvdycpO1xuY29uc3QgcmVhbHRpbWVIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWx0aW1lSGlnaCcpO1xuY29uc3QgcmVhbHRpbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZURlc2NyaXB0aW9uJyk7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcblxubGV0IHVuaXRzID0gXCJpbXBlcmlhbFwiO1xubGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKCk7XG5sZXQgaG91cmx5VGVtcCA9IDA7XG5cblxuY29uc3QgYXBpS2V5ID0gXCJiMDg5MDRlZDMxMzJjM2M5YTQ2ZWYyYWJjYWNiNjJkNlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCkgeyAvL0dldHMgbG9jYXRpb24gaW5mbywgcnVucyBnZXRXZWF0aGVyICYgZ2V0Rm9yZWNhc3QsIGRpc3BsYXlzIGNvbnRlbnRcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvblNlYXJjaH0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gXG4gICAgc2hvd0xvYWQoKTtcblxuICB0cnkge1xuICAgICAgLy9NYWtlIGZldGNoIHJlcXVlc3QgYW5kIHN0b3JlcyBpdCBhcyByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAvL1N0b3JlIHRoZSBKU09OIFxuICAgICAgY29uc3QgZ2VvY29kZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGxldCBjaXR5ID0gZ2VvY29kZVswXS5uYW1lO1xuICAgICAgbGV0IHN0YXRlID0gZ2VvY29kZVswXS5zdGF0ZTtcbiAgICAgIGxldCBjb3VudHJ5ID0gZ2VvY29kZVswXS5jb3VudHJ5O1xuICAgICAgbGV0IGxhdGl0dWRlID0gZ2VvY29kZVswXS5sYXQ7XG4gICAgICBsZXQgbG9uZ2l0dWRlID0gZ2VvY29kZVswXS5sb247XG5cbiAgICAgIC8vRGlzcGxheSBMb2NhdGlvblxuICAgICAgaWYgKGNvdW50cnkgPT09ICdVUycpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uT3V0cHV0LmlubmVySFRNTCA9IGNpdHkgKyBcIiwgXCIgKyBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbk91dHB1dC5pbm5lckhUTUwgPSBjaXR5ICsgXCIsIFwiICsgc3RhdGUgKyBcIiwgXCIgKyBjb3VudHJ5O1xuICAgICAgfVxuXG4gICAgICBnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgZ2V0Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICBoaWRlTG9hZCgpO1xuXG4gIH0gY2F0Y2ggKGUpe1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGxvY2F0aW9uT3V0cHV0LmlubmVySFRNTCA9ICdDaXR5IEVycm9yLi4uIFBsZWFzZSBlbnRlciBjb3JyZWN0IGNpdHkgbmFtZSc7XG5cbiAgICAgIGhpZGVMb2FkKCk7XG4gIH07ICBcbiAgXG59XG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9JHt1bml0c30mbGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHthcGlLZXl9YFxuICAgIHRyeSB7XG4gICAgICAgIC8vRmV0Y2ggcmVxdWVzdCBhbmQgc3RvcmUgaXQgYXMgcmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAgIC8vU3RvcmUgdGhlIEpTT04gXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICAgICAgLy9HZXQgVGltZVxuICAgICAgICBzZXRDdXJyZW50VGltZSh0cnVlKTtcbiAgICAgICAgY29uc3QgdGltZXpvbmUgPSB3ZWF0aGVyRGF0YS50aW1lem9uZTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50VVRDID0gKGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAxMDAwOyBcbiAgICBcbiAgICAgICAgY29udmVydFRpbWUoY3VycmVudFVUQywgdGltZXpvbmUpO1xuICAgICAgICB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGlmIGRheSBvciBuaWdodFxuICAgICAgICBpZiAoZ2V0SG91cnMoKSA+PSAxNyB8fCBnZXRIb3VycygpIDw9IDUpIHtcbiAgICAgICAgICAgIHNldE5pZ2h0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TmlnaHQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9EaXNwbGF5IHRlbXAgdmFsdWVzXG4gICAgICAgIHRpbWVPdXRwdXQuaW5uZXJIVE1MID0gYCR7bG9jYWxGb3JtYXR0ZWREYXRlfSB8ICR7bG9jYWxGb3JtYXR0ZWRUaW1lfWA7XG4gICAgICAgIGN1cnJlbnRUZW1wLmlubmVySFRNTCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgcmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykge1xuICAgICAgICAgICAgcmVhbHRpbWVMb3cuaW5uZXJIVE1MID0gXCJMOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbikgKyBcIsKwRlwiO1xuICAgICAgICAgICAgcmVhbHRpbWVIaWdoLmlubmVySFRNTCA9IFwiSDogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpICsgXCLCsEZcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlYWx0aW1lTG93LmlubmVySFRNTCA9IFwiTDogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pICsgXCLCsENcIjtcbiAgICAgICAgICAgIHJlYWx0aW1lSGlnaC5pbm5lckhUTUwgPSBcIkg6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4KSArIFwiwrBDXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvL1VwZGF0ZSBpY29uXG4gICAgICAgIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykgJiYgZ2V0TmlnaHQoKSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvb3ZlcmNhc3QucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL3RodW5kZXIucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnZHJpenpsZScpKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCIuLi9pY29ucy9zcHJpbmtsZXMucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygncmFpbicpKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCIuLi9pY29ucy9yYWlueS5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdzbm93Jykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL3Nub3cucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xlYXInKSAmJiBnZXROaWdodCgpID09IGZhbHNlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCIuLi9pY29ucy9jbGVhci1kYXkucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xlYXInKSAmJiBnZXROaWdodCgpID09IHRydWUpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL2NsZWFyLW5pZ2h0LnBuZ1wiXG4gICAgICAgIH0gZWxzZSBpZiAocmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ2Nsb3VkcycpICYmIGdldE5pZ2h0KCkgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvY2xvdWR5LW5pZ2h0LnBuZ1wiXG4gICAgICAgIH07XG4gIH0gY2F0Y2ggKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH07ICBcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3VuaXRzPSR7dW5pdHN9JmxhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7YXBpS2V5fWBcbiAgICB0cnkge1xuICAgICAgICAvL01ha2UgZmV0Y2ggcmVxdWVzdCBhbmQgc3RvcmVzIGl0IGFzIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIFxuICAgICAgICAvL1N0b3JlIHRoZSBKU09OIFxuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YSk7XG5cbiAgICAgICAgLy9TdG9yZSBjaXR5IHRpbWUgem9uZSAob2Zmc2V0IHNlY29uZHMpXG4gICAgICAgIGxldCBsb2NhbFRpbWV6b25lID0gZm9yZWNhc3REYXRhLmNpdHkudGltZXpvbmU7XG5cbiAgICAgICAgLy8gQ2xlYXIgT2xkIERhdGFcbiAgICAgICAgY2xlYXJGb3JlY2FzdHMoKTtcblxuICAgICAgICAvLyBHZXQgSG91cmx5IEZvcmVjYXN0IERhdGEgXG4gICAgICAgIGZvcmVjYXN0RGF0YS5saXN0LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgaG91cmx5VGVtcCA9IE1hdGgucm91bmQoaW5kZXgubWFpbi50ZW1wKSArIHVuaXRTaWduO1xuICAgICAgICAgICAgc2V0Zm9yZWNhc3RVVEMoaW5kZXguZHQpO1xuXG4gICAgICAgICAgICBjb252ZXJ0VGltZShnZXRGb3JlY2FzdFVUQygpLCBsb2NhbFRpbWV6b25lKTtcbiAgICAgICAgICAgIGRpc3BsYXlIb3VybHlGb3JlY2FzdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkYXlUZW1wcyhob3VybHlUZW1wLCBkYXlOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb252ZXJ0VGltZShmb3JlY2FzdERhdGEubGlzdFswXS5kdCwgbG9jYWxUaW1lem9uZSk7XG4gICAgICAgIGNhbGN1bGF0ZUF2ZXJhZ2VzKCk7XG4gICAgICAgIGRpc3BsYXlEYWlseUZvcmVjYXN0KCk7XG4gICAgICAgIFxuICB9IGNhdGNoIChlKXtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9OyAgXG59XG5cbmV4cG9ydCB7IGhvdXJseVRlbXAgfTsiLCJpbXBvcnQgeyBkYXlOYW1lLCBsb2NhbEZvcm1hdHRlZFRpbWUsIGF2ZXJhZ2VUZW1wcywgZGF5T2ZXZWVrIH0gZnJvbSBcIi4uL3NyYy91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGhvdXJseVRlbXAsIGdldEdlb0NvZGUgfSBmcm9tIFwiLi4vc3JjL2FwaVwiO1xuXG5jb25zdCB1bml0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRCdG4nKTtcbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25JbnB1dCcpO1xuY29uc3QgaG91cmx5Rm9yZWNhc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseUZvcmVjYXN0RGF0YScpO1xuY29uc3QgZGFpbHlGb3JlY2FzdERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHlGb3JlY2FzdERhdGEnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBsb2NhdGlvblNlYXJjaCA9ICdQaG9lbml4JztcbmxldCBpY29uSW1nID0gXCJcIjtcbmxldCBjdXJyZW50RGF5ID0gJyc7XG5sZXQgdW5pdFNpZ24gPSBcIkbCsFwiO1xubGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHVwZGF0ZUJhY2tncm91bmQobG9jYWxEYXRlKTtcbiAgICBsb2NhdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgbG9jYXRpb25TZWFyY2ggPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1bml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikgeyAvL0NoYW5nZSB0byBNZXRyaWMgKEMpLCBydW4gZ2V0R2VvQ29kZVxuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbXBlcmlhbCcpO1xuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICAgICAgICAgIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJDwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vQ2hhbmdlIHRvIEltcGVyaWFsIChGKSwgcnVuIGdldEdlb0NvZGVcbiAgICAgICAgICAgIHVuaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWV0cmljJyk7XG4gICAgICAgICAgICB1bml0QnRuLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgICB1bml0cyA9IFwiaW1wZXJpYWxcIjtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJGwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdEJ0bi5pbm5lckhUTUwgPSB1bml0U2lnbjtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseUZvcmVjYXN0KCkgeyAgICBcbiAgICBjb25zdCBob3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91ckRpdi5jbGFzc05hbWUgPSAnaG91ckRpdic7XG4gICAgaG91cmx5Rm9yZWNhc3REYXRhLmFwcGVuZENoaWxkKGhvdXJEaXYpO1xuXG4gICAgY29uc3QgaG91ckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyRGF5LmlubmVySFRNTCA9IGAke2RheU5hbWV9IOKAoiAke2xvY2FsRm9ybWF0dGVkVGltZX1gO1xuICAgIGhvdXJEYXkuY2xhc3NOYW1lID0gJ2hvdXJEYXknO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91ckRheSk7XG5cbiAgICBjb25zdCBob3VyVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyVGVtcC5pbm5lckhUTUwgPSBob3VybHlUZW1wO1xuICAgIGhvdXJUZW1wLmNsYXNzTmFtZSA9ICdob3VyVGVtcCc7XG4gICAgaG91ckRpdi5hcHBlbmRDaGlsZChob3VyVGVtcCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURhaWx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc29sZS5sb2coYXZlcmFnZVRlbXBzKTtcbiAgICBcbiAgICAvLyBJbnB1dCBkYXlzIGluIG9yZGVyIG9mIHdlZWsgc3RhcnRpbmcgd2l0aCB0aGUgZGF5IGFmdGVyIHRoZSBjdXJyZW50IGRheVxuICAgIGNvbnN0IG9yZGVyZWREYXlzID0gW107XG4gICAgY3VycmVudERheSA9IGRheU9mV2VlaztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gKGN1cnJlbnREYXkgKyBpKSAlIDc7XG4gICAgICAgIGNvbnN0IGRheU5hbWUgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J11bZGF5T2ZXZWVrXTtcbiAgICAgICAgaWYgKGF2ZXJhZ2VUZW1wc1tkYXlOYW1lXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb3JkZXJlZERheXMucHVzaChkYXlOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc3BsYXkgZGF5IHRlbXBzIGluIHNwZWNpZmllZCBvcmRlclxuICAgIG9yZGVyZWREYXlzLmZvckVhY2goZGF5ID0+IHsgICAgXG4gICAgICAgIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlEaXYuY2xhc3NOYW1lID0gJ2RheURpdic7XG4gICAgICAgIGRhaWx5Rm9yZWNhc3REYXRhLmFwcGVuZENoaWxkKGRheURpdik7XG5cbiAgICAgICAgY29uc3QgZGF5RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkYXlEYXkuaW5uZXJIVE1MID0gYCR7ZGF5fWA7XG4gICAgICAgIGRheURheS5jbGFzc05hbWUgPSAnZGF5RGF5JztcbiAgICAgICAgZGF5RGl2LmFwcGVuZENoaWxkKGRheURheSk7XG5cbiAgICAgICAgY29uc3QgZGF5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGF5VGVtcC5pbm5lckhUTUwgPSBhdmVyYWdlVGVtcHNbZGF5XSArIHVuaXRTaWduO1xuICAgICAgICBkYXlUZW1wLmNsYXNzTmFtZSA9ICdkYXlUZW1wJztcbiAgICAgICAgZGF5RGl2LmFwcGVuZENoaWxkKGRheVRlbXApO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJhY2tncm91bmQobG9jYWxEYXRlKSB7XG4gICAgY29uc3QgaG91cnMgPSBsb2NhbERhdGUuZ2V0VVRDSG91cnMoKTsgLy8gVXNlIGdldFVUQ0hvdXJzKCkgYmVjYXVzZSB5b3UndmUgbWFudWFsbHkgYWRqdXN0ZWQgbG9jYWxEYXRlIHRvIHJlcHJlc2VudCBsb2NhbCB0aW1lXG5cbiAgICBpZihob3VycyA+PSAxNykge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdldmVuaW5nJztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2FmdGVybm9vbic7ICAvLyBBZnRlcm5vb25cbiAgICB9IGVsc2UgaWYoaG91cnMgPj02KSB7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ21vcm5pbmcnOyAvL01vcm5pbmdcbiAgICB9IGVsc2UgaWYoaG91cnMgPj00KXtcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnZGF3bic7IC8vRGF3blxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ25pZ2h0JzsgLy9OaWdodFxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJY29uKHdlYXRoZXJEZXNjcmlwdGlvbikge1xuICAgIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbG91ZHMnKSl7XG4gICAgICAgIGljb25JbWcgPSBcImljb25zL292ZXJjYXN0LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCd0aHVuZGVyc3Rvcm0nKSl7XG4gICAgICAgIGljb25JbWcgPSBcImljb25zL3RodW5kZXIucG5nXCJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ2RyaXp6bGUnKSl7XG4gICAgICAgIGljb25JbWcgPSBcImljb25zL3Nwcmlua2xlcy5wbmdcIlxuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygncmFpbicpKXtcbiAgICAgICAgaWNvbkltZyA9IFwiaWNvbnMvcmFpbnkucG5nXCJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3Nub3cnKSl7XG4gICAgICAgIGljb25JbWcgPSBcImljb25zL3Nub3cucG5nXCJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ2NsZWFyJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9jbGVhci1kYXkucG5nXCJcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBpY29uSW1nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cbmV4cG9ydCB7IGhvdXJseUZvcmVjYXN0RGF0YSwgZGFpbHlGb3JlY2FzdERhdGEsIHVuaXRTaWduIH07IiwiaW1wb3J0IHsgaG91cmx5Rm9yZWNhc3REYXRhLCBkYWlseUZvcmVjYXN0RGF0YSB9IGZyb20gXCIuLi9zcmMvdWlcIjtcblxubGV0IGxvY2FsRm9ybWF0dGVkRGF0ZSA9ICcnO1xubGV0IGxvY2FsRm9ybWF0dGVkVGltZSA9ICcnO1xubGV0IGhvdXJzID0gMDtcbmxldCBjdXJyZW50VGltZSA9IGZhbHNlO1xubGV0IGZvcmVjYXN0VVRDID0gMDtcbmxldCBuaWdodCA9IGZhbHNlO1xubGV0IGRheU5hbWUgPSAnJztcbmxldCBkYXlPZldlZWsgPSAnJztcbmxldCBhdmVyYWdlVGVtcCA9IDA7XG5sZXQgdGVtcGVyYXR1cmVzQnlEYXkgPSB7XG4gICAgJ1N1bic6IFtdLFxuICAgICdNb24nOiBbXSxcbiAgICAnVHVlcyc6IFtdLFxuICAgICdXZWQnOiBbXSxcbiAgICAnVGh1cic6IFtdLFxuICAgICdGcmknOiBbXSxcbiAgICAnU2F0JzogW11cbn07XG5sZXQgYXZlcmFnZVRlbXBzID0ge1xuICAgICdTdW4nOiBbXSxcbiAgICAnTW9uJzogW10sXG4gICAgJ1R1ZXMnOiBbXSxcbiAgICAnV2VkJzogW10sXG4gICAgJ1RodXInOiBbXSxcbiAgICAnRnJpJzogW10sXG4gICAgJ1NhdCc6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxvY2F0aW9uKGxvY2F0aW9uU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydHMgPSBsb2NhdGlvblN0cmluZy5zcGxpdCgnLCcpO1xuICAgIC8vIEV4dHJhY3QgcGFydHMgdG8ga2VlcFxuICAgIGxldCBjaXR5ID0gcGFydHNbMF0udHJpbSgpOyAvLyBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2VcbiAgICBsZXQgc3RhdGUgPSAnJztcbiAgICBsZXQgY291bnRyeSA9ICcnO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGVub3VnaCBwYXJ0c1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMykge1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBwYXJ0IGlzIFwiVW5pdGVkIFN0YXRlc1wiLCByZXBsYWNlIGl0IHdpdGggXCJVU0FcIlxuICAgICAgICBpZiAocGFydHNbcGFydHMubGVuZ3RoIC0gMV0udHJpbSgpID09PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSAnVVNBJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS50cmltKCk7IC8vIE90aGVyd2lzZSwgYXNzdW1lIHRoZSBsYXN0IHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgc2Vjb25kIGxhc3QgcGFydCBpcyBub3QgYSBzdGF0ZSBhYmJyZXZpYXRpb24sIHVzZSBpdCBhcyB0aGUgc3RhdGVcbiAgICAgICAgaWYgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdLnRyaW0oKS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgIHN0YXRlID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMl0udHJpbSgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gSWYgb25seSB0d28gcGFydHMsIGFzc3VtZSB0aGUgc2Vjb25kIHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgY291bnRyeSA9IHBhcnRzWzFdLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvLyBDb25jYXRlbmF0ZSB0aGUgcGFydHMgaW50byB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICBsZXQgcGFyc2VkTG9jYXRpb24gPSBjaXR5O1xuICAgIGlmIChzdGF0ZSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtzdGF0ZX1gO1xuICAgIH1cbiAgICBpZiAoY291bnRyeSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtjb3VudHJ5fWA7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRMb2NhdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZShmb3JlY2FzdFVUQywgbG9jYWxUaW1lem9uZSkge1xuICAgIC8vIEFkanVzdCB0aGUgdGltZXN0YW1wIGJ5IHRoZSB0aW1lem9uZSBvZmZzZXQgdG8gZ2V0IHRoZSBsb2NhbCB0aW1lXG4gICAgY29uc3QgbG9jYWxUaW1lc3RhbXAgPSBmb3JlY2FzdFVUQyArIGxvY2FsVGltZXpvbmU7XG4gICAgbGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZXN0YW1wICogMTAwMCk7XG4gICAgbGV0IGxvY2FsVGltZSA9IGxvY2FsRGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyBBcnJheSBvZiBtb250aCBuYW1lc1xuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbiAgICBcbiAgICAvLyBFeHRyYWN0IHRoZSBtb250aCwgZGF5LCBhbmQgeWVhciBmcm9tIGxvY2FsRGF0ZVxuICAgIGNvbnN0IG1vbnRoID0gbW9udGhOYW1lc1tsb2NhbERhdGUuZ2V0VVRDTW9udGgoKV07IC8vIGdldFVUQ01vbnRoKCkgcmV0dXJucyBhIHplcm8tYmFzZWQgaW5kZXhcbiAgICBjb25zdCBkYXkgPSBsb2NhbERhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBsb2NhbERhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblxuICAgIC8vIEZvcm1hdCB0aGUgbG9jYWwgZGF0ZSBhbmQgdGltZVxuICAgIGxvY2FsRm9ybWF0dGVkRGF0ZSA9IGAke21vbnRofSAke2RheX0sICR7eWVhcn1gOyAvLyBGb3JtYXQgdGhlIGxvY2FsIGRhdGUgYXMgXCJNb250aCBELCBZWVlZXCJcbiAgICBsb2NhbEZvcm1hdHRlZFRpbWUgPSBmb3JtYXRUaW1lKGxvY2FsRGF0ZSk7XG5cbiAgICAvLyBHZXQgZGF5IG9mIHRoZSB3ZWVrXG4gICAgZGF5TmFtZSA9IGdldERheShsb2NhbERhdGUpO1xuXG59XG5leHBvcnQgZnVuY3Rpb24gZGF5VGVtcHMoaG91cmx5VGVtcCwgZGF5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgaG91cmx5VGVtcCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIHJlbW92ZSB0aGUgdW5pdFxuICAgIGNvbnN0IHRlbXBWYWx1ZSA9IHBhcnNlRmxvYXQoaG91cmx5VGVtcCk7XG5cbiAgICAvLyBTdG9yZSB0aGUgdGVtcGVyYXR1cmUgdmFsdWUgaW4gdGhlIGNvcnJlc3BvbmRpbmcgZGF5IGFycmF5XG4gICAgaWYgKCFpc05hTih0ZW1wVmFsdWUpKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlc0J5RGF5W2RheU5hbWVdLnB1c2godGVtcFZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JlY2FzdHMoKSB7XG4gICAgLy9Ib3VybHkgRm9yZWNhc3REYXRhIERpc3BsYXlcbiAgICB3aGlsZSAoaG91cmx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaG91cmx5Rm9yZWNhc3REYXRhLnJlbW92ZUNoaWxkKGhvdXJseUZvcmVjYXN0RGF0YS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKGRhaWx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGFpbHlGb3JlY2FzdERhdGEucmVtb3ZlQ2hpbGQoZGFpbHlGb3JlY2FzdERhdGEuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy9EYWlseSBGb3JlY2FzdCBEYXRhIGZvciBjYWxjdWxhdGlvblxuICAgIHRlbXBlcmF0dXJlc0J5RGF5ID0ge1xuICAgICAgICAgICAgJ1N1bic6IFtdLFxuICAgICAgICAgICAgJ01vbic6IFtdLFxuICAgICAgICAgICAgJ1R1ZXMnOiBbXSxcbiAgICAgICAgICAgICdXZWQnOiBbXSxcbiAgICAgICAgICAgICdUaHVyJzogW10sXG4gICAgICAgICAgICAnRnJpJzogW10sXG4gICAgICAgICAgICAnU2F0JzogW11cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIEFkZCBsZWFkaW5nIHplcm8gaWYgbmVlZGVkXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gQWRkIGxlYWRpbmcgemVybyBpZiBuZWVkZWRcbiAgICBjb25zdCB0b2RheURhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIHJldHVybiB0b2RheURhdGU7XG59XG5mdW5jdGlvbiBnZXREYXkobG9jYWxEYXRlKSB7XG4gICAgZGF5T2ZXZWVrID0gbG9jYWxEYXRlLmdldFVUQ0RheSgpO1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J107XG4gICAgZGF5TmFtZSA9IGRheXNPZldlZWtbZGF5T2ZXZWVrXTtcblxuICAgIHJldHVybiBkYXlOYW1lO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZShsb2NhbERhdGUpIHtcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XG4gICAgLy8gQ2FsY3VsYXRlIEFNIG9yIFBNXG4gICAgaG91cnMgPSBsb2NhbERhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gKCcwJyArIGxvY2FsRGF0ZS5nZXRVVENNaW51dGVzKCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcblxuICAgIC8vIENvbnZlcnQgdG8gMTItaG91ciBmb3JtYXRcbiAgICBsZXQgaG91cnMxMiA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMxMiA9IGhvdXJzMTIgPyBob3VyczEyIDogMTI7IC8vIENvbnZlcnQgMCB0byAxMiBmb3IgbWlkbmlnaHRcblxuICAgIC8vIEZvcm1hdCB0aGUgbG9jYWwgdGltZSB3aXRoIEFNIG9yIFBNXG4gICAgaWYgKGN1cnJlbnRUaW1lID09PSB0cnVlKSB7XG4gICAgICAgIGZvcm1hdHRlZCA9IGhvdXJzMTIrICc6JysgbWludXRlcysgYW1wbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXR0ZWQgPSBob3VyczEyKyBhbXBtO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50VGltZSA9IGZhbHNlO1xuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQXZlcmFnZXMoKSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIHRlbXBlcmF0dXJlc0J5RGF5IGFzc2lnbmluZyBib3RoIHRoZSBkYXkgYW5kIHRlbXBlcmF0dXJlXG4gICAgZm9yIChjb25zdCBbZGF5LCB0ZW1wc10gb2YgT2JqZWN0LmVudHJpZXModGVtcGVyYXR1cmVzQnlEYXkpKSB7XG5cbiAgICAgICAgLy9DYWxjdWxhdGUgQXZlcmFnZSBUZW1wIChvbmx5IGZvciBkYXlzIHdpdGggdGVtcGVyYXR1cmUgZGF0YSlcbiAgICAgICAgaWYgKHRlbXBzLmxlbmd0aCA+IDApIHsgXG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdGVtcHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmVyYWdlVGVtcCA9IHN1bSAvIHRlbXBzLmxlbmd0aFxuICAgICAgICAgICAgYXZlcmFnZVRlbXBzW2RheV0gPSBhdmVyYWdlVGVtcC50b0ZpeGVkKDApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhdmVyYWdlVGVtcHNbZGF5XSA9IG51bGw7IC8vIEluZGljYXRlIG5vIGRhdGEgZm9yIHRoaXMgZGF5XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLy8gU2V0ICYgR2V0IFZhcmlhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRUaW1lKHZhbHVlKSB7XG4gICAgY3VycmVudFRpbWUgPSB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRIb3Vycyh2YWx1ZSkge1xuICAgIG5pZ2h0ID0gaG91cnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3VycygpIHtcbiAgICByZXR1cm4gaG91cnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROaWdodCh2YWx1ZSkge1xuICAgIG5pZ2h0ID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROaWdodCgpIHtcbiAgICByZXR1cm4gbmlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRmb3JlY2FzdFVUQyh2YWx1ZSkge1xuICAgIGZvcmVjYXN0VVRDID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JlY2FzdFVUQygpIHtcbiAgICByZXR1cm4gZm9yZWNhc3RVVEM7XG59XG5cblxuZXhwb3J0IHsgbG9jYWxGb3JtYXR0ZWREYXRlLCBsb2NhbEZvcm1hdHRlZFRpbWUsIGRheU5hbWUsIGF2ZXJhZ2VUZW1wcywgZGF5T2ZXZWVrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91aS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsInVuaXRTaWduIiwidXBkYXRlQmFja2dyb3VuZCIsInNob3dMb2FkIiwiaGlkZUxvYWQiLCJkaXNwbGF5SG91cmx5Rm9yZWNhc3QiLCJkaXNwbGF5RGFpbHlGb3JlY2FzdCIsImxvY2FsRm9ybWF0dGVkRGF0ZSIsImxvY2FsRm9ybWF0dGVkVGltZSIsImRheU5hbWUiLCJnZXRIb3VycyIsInNldEN1cnJlbnRUaW1lIiwiZ2V0TmlnaHQiLCJzZXROaWdodCIsImdldEZvcmVjYXN0VVRDIiwic2V0Zm9yZWNhc3RVVEMiLCJjb252ZXJ0VGltZSIsImNsZWFyRm9yZWNhc3RzIiwiZGF5VGVtcHMiLCJjYWxjdWxhdGVBdmVyYWdlcyIsImxvY2F0aW9uT3V0cHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGltZU91dHB1dCIsImN1cnJlbnRUZW1wIiwicmVhbHRpbWVMb3ciLCJyZWFsdGltZUhpZ2giLCJyZWFsdGltZURlc2NyaXB0aW9uIiwiaWNvbiIsInVuaXRzIiwibG9jYWxEYXRlIiwiRGF0ZSIsImhvdXJseVRlbXAiLCJhcGlLZXkiLCJnZXRHZW9Db2RlIiwiX3giLCJfZ2V0R2VvQ29kZSIsIl9jYWxsZWUiLCJsb2NhdGlvblNlYXJjaCIsInVybCIsInJlc3BvbnNlIiwiZ2VvY29kZSIsImNpdHkiLCJzdGF0ZSIsImNvdW50cnkiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjb25jYXQiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwibGF0IiwibG9uIiwiaW5uZXJIVE1MIiwiZ2V0V2VhdGhlciIsImdldEZvcmVjYXN0IiwidDAiLCJjb25zb2xlIiwibG9nIiwiX3gyIiwiX3gzIiwiX2dldFdlYXRoZXIiLCJfY2FsbGVlMiIsIndlYXRoZXJEYXRhIiwidGltZXpvbmUiLCJjdXJyZW50RGF0ZSIsImN1cnJlbnRVVEMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRUaW1lIiwiTWF0aCIsInJvdW5kIiwibWFpbiIsInRlbXAiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJ0ZW1wX21pbiIsInRlbXBfbWF4IiwiaW5jbHVkZXMiLCJzcmMiLCJfeDQiLCJfeDUiLCJfZ2V0Rm9yZWNhc3QiLCJfY2FsbGVlMyIsImZvcmVjYXN0RGF0YSIsImxvY2FsVGltZXpvbmUiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsaXN0IiwiaW5kZXgiLCJkdCIsImF2ZXJhZ2VUZW1wcyIsImRheU9mV2VlayIsInVuaXRCdG4iLCJsb2NhdGlvbklucHV0IiwiaG91cmx5Rm9yZWNhc3REYXRhIiwiZGFpbHlGb3JlY2FzdERhdGEiLCJib2R5IiwiaWNvbkltZyIsImN1cnJlbnREYXkiLCJ3aW5kb3ciLCJvbmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhvdXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJob3VyRGF5IiwiaG91clRlbXAiLCJvcmRlcmVkRGF5cyIsImRheSIsImRheURpdiIsImRheURheSIsImRheVRlbXAiLCJob3VycyIsImdldFVUQ0hvdXJzIiwidXBkYXRlSWNvbiIsIndlYXRoZXJEZXNjcmlwdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsImN1cnJlbnRUaW1lIiwiZm9yZWNhc3RVVEMiLCJuaWdodCIsImF2ZXJhZ2VUZW1wIiwidGVtcGVyYXR1cmVzQnlEYXkiLCJwYXJzZUxvY2F0aW9uIiwibG9jYXRpb25TdHJpbmciLCJwYXJ0cyIsInNwbGl0IiwidHJpbSIsInBhcnNlZExvY2F0aW9uIiwibG9jYWxUaW1lc3RhbXAiLCJsb2NhbFRpbWUiLCJtb250aE5hbWVzIiwibW9udGgiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJ5ZWFyIiwiZ2V0VVRDRnVsbFllYXIiLCJmb3JtYXRUaW1lIiwiZ2V0RGF5IiwidGVtcFZhbHVlIiwicGFyc2VGbG9hdCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImdldFRvZGF5c0RhdGUiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJ0b2RheURhdGUiLCJnZXRVVENEYXkiLCJkYXlzT2ZXZWVrIiwiZm9ybWF0dGVkIiwibWludXRlcyIsImdldFVUQ01pbnV0ZXMiLCJhbXBtIiwiaG91cnMxMiIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwidGVtcHMiLCJzdW0iLCJ0b0ZpeGVkIiwiZ2V0Q3VycmVudFRpbWUiLCJzZXRIb3VycyJdLCJzb3VyY2VSb290IjoiIn0=