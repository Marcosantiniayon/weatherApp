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
          (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.updateIcon)(realtimeDescription);
          _context2.next = 26;
          break;
        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 26:
          ;
        case 27:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 23]]);
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



var unitBtn = document.querySelector('.unitBtn');
var locationInput = document.querySelector('.locationInput');
var hourlyForecastData = document.querySelector('.hourlyForecastData');
var dailyForecastData = document.querySelector('.dailyForecastData');
var body = document.querySelector('body');
var locationSearch = 'Phoenix';
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
}
function updateIcon(weatherDescription) {
  var icon = document.querySelector('.icon');
  if (weatherDescription.innerHTML.includes('clouds') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.getNight)() == false) {
    icon.src = "icons/overcast.png";
  } else if (weatherDescription.innerHTML.includes('thunderstorm')) {
    icon.src = "icons/thunder.png";
  } else if (weatherDescription.innerHTML.includes('drizzle')) {
    icon.src = "icons/sprinkles.png";
  } else if (weatherDescription.innerHTML.includes('rain')) {
    icon.src = "icons/rainy.png";
  } else if (weatherDescription.innerHTML.includes('snow')) {
    icon.src = "icons/snow.png";
  } else if (weatherDescription.innerHTML.includes('clear') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.getNight)() == false) {
    icon.src = "icons/clear-day.png";
  } else if (weatherDescription.innerHTML.includes('clear') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.getNight)() == true) {
    icon.src = "icons/clear-night.png";
  } else if (weatherDescription.innerHTML.includes('clouds') && (0,_src_utilities__WEBPACK_IMPORTED_MODULE_0__.getNight)() == true) {
    icon.src = "icons/cloudy-night.png";
  }
  ;
  return icon.src;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsa0NBQWtDO0FBQ2xDO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsV0FBVyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0s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V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW5pdFNpZ24sIHVwZGF0ZUJhY2tncm91bmQsIHNob3dMb2FkLCBoaWRlTG9hZCwgZGlzcGxheUhvdXJseUZvcmVjYXN0LCBkaXNwbGF5RGFpbHlGb3JlY2FzdCwgdXBkYXRlSWNvbiB9IGZyb20gJy4uL3NyYy91aSdcbmltcG9ydCB7IGxvY2FsRm9ybWF0dGVkRGF0ZSwgbG9jYWxGb3JtYXR0ZWRUaW1lLCBkYXlOYW1lLCBnZXRVbml0cywgZ2V0SG91cnMsIHNldEN1cnJlbnRUaW1lLCBnZXROaWdodCwgc2V0TmlnaHQsIGdldEZvcmVjYXN0VVRDLCBzZXRmb3JlY2FzdFVUQywgY29udmVydFRpbWUsIGNsZWFyRm9yZWNhc3RzLCBkYXlUZW1wcywgY2FsY3VsYXRlQXZlcmFnZXMgfSBmcm9tICcuLi9zcmMvdXRpbGl0aWVzJ1xuXG5jb25zdCBsb2NhdGlvbk91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbk91dHB1dCcpO1xuY29uc3QgdGltZU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lT3V0cHV0Jyk7XG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50VGVtcCcpO1xuY29uc3QgcmVhbHRpbWVMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhbHRpbWVMb3cnKTtcbmNvbnN0IHJlYWx0aW1lSGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZUhpZ2gnKTtcbmNvbnN0IHJlYWx0aW1lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhbHRpbWVEZXNjcmlwdGlvbicpO1xuXG5sZXQgbG9jYWxEYXRlID0gbmV3IERhdGUoKTtcbmxldCBob3VybHlUZW1wID0gMDtcblxuY29uc3QgYXBpS2V5ID0gXCJiMDg5MDRlZDMxMzJjM2M5YTQ2ZWYyYWJjYWNiNjJkNlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCkgeyAvL0dldHMgbG9jYXRpb24gaW5mbywgcnVucyBnZXRXZWF0aGVyICYgZ2V0Rm9yZWNhc3QsIGRpc3BsYXlzIGNvbnRlbnRcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvblNlYXJjaH0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gXG4gICAgc2hvd0xvYWQoKTtcblxuICB0cnkge1xuICAgICAgLy9NYWtlIGZldGNoIHJlcXVlc3QgYW5kIHN0b3JlcyBpdCBhcyByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAvL1N0b3JlIHRoZSBKU09OIFxuICAgICAgY29uc3QgZ2VvY29kZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGxldCBjaXR5ID0gZ2VvY29kZVswXS5uYW1lO1xuICAgICAgbGV0IHN0YXRlID0gZ2VvY29kZVswXS5zdGF0ZTtcbiAgICAgIGxldCBjb3VudHJ5ID0gZ2VvY29kZVswXS5jb3VudHJ5O1xuICAgICAgbGV0IGxhdGl0dWRlID0gZ2VvY29kZVswXS5sYXQ7XG4gICAgICBsZXQgbG9uZ2l0dWRlID0gZ2VvY29kZVswXS5sb247XG5cbiAgICAgIC8vRGlzcGxheSBMb2NhdGlvblxuICAgICAgaWYgKGNvdW50cnkgPT09ICdVUycpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uT3V0cHV0LmlubmVySFRNTCA9IGNpdHkgKyBcIiwgXCIgKyBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbk91dHB1dC5pbm5lckhUTUwgPSBjaXR5ICsgXCIsIFwiICsgc3RhdGUgKyBcIiwgXCIgKyBjb3VudHJ5O1xuICAgICAgfVxuXG4gICAgICBnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgZ2V0Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICBoaWRlTG9hZCgpO1xuXG4gIH0gY2F0Y2ggKGUpe1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGxvY2F0aW9uT3V0cHV0LmlubmVySFRNTCA9ICdDaXR5IEVycm9yLi4uIFBsZWFzZSBlbnRlciBjb3JyZWN0IGNpdHkgbmFtZSc7XG5cbiAgICAgIGhpZGVMb2FkKCk7XG4gIH07ICBcbiAgXG59XG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9JHtnZXRVbml0cygpfSZsYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD0ke2FwaUtleX1gXG4gICAgdHJ5IHtcbiAgICAgICAgLy9GZXRjaCByZXF1ZXN0IGFuZCBzdG9yZSBpdCBhcyByZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBcbiAgICAgICAgLy9TdG9yZSB0aGUgSlNPTiBcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgICAgICAvL0dldCBUaW1lXG4gICAgICAgIHNldEN1cnJlbnRUaW1lKHRydWUpO1xuICAgICAgICBjb25zdCB0aW1lem9uZSA9IHdlYXRoZXJEYXRhLnRpbWV6b25lO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVVEMgPSAoY3VycmVudERhdGUuZ2V0VGltZSgpKSAvIDEwMDA7IFxuICAgIFxuICAgICAgICBjb252ZXJ0VGltZShjdXJyZW50VVRDLCB0aW1lem9uZSk7XG4gICAgICAgIHVwZGF0ZUJhY2tncm91bmQobG9jYWxEYXRlKTtcblxuICAgICAgICAvLyBVcGRhdGUgaWYgZGF5IG9yIG5pZ2h0XG4gICAgICAgIGlmIChnZXRIb3VycygpID49IDE4IHx8IGdldEhvdXJzKCkgPD0gNSkge1xuICAgICAgICAgICAgc2V0TmlnaHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXROaWdodChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0Rpc3BsYXkgdGVtcCB2YWx1ZXNcbiAgICAgICAgdGltZU91dHB1dC5pbm5lckhUTUwgPSBgJHtsb2NhbEZvcm1hdHRlZERhdGV9IHwgJHtsb2NhbEZvcm1hdHRlZFRpbWV9YDtcbiAgICAgICAgY3VycmVudFRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgICAgICByZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgaWYgKGdldFVuaXRzKCkgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgICAgICAgIHJlYWx0aW1lTG93LmlubmVySFRNTCA9IFwiTDogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pICsgXCLCsEZcIjtcbiAgICAgICAgICAgIHJlYWx0aW1lSGlnaC5pbm5lckhUTUwgPSBcIkg6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4KSArIFwiwrBGXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFsdGltZUxvdy5pbm5lckhUTUwgPSBcIkw6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluKSArIFwiwrBDXCI7XG4gICAgICAgICAgICByZWFsdGltZUhpZ2guaW5uZXJIVE1MID0gXCJIOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCkgKyBcIsKwQ1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9VcGRhdGUgaWNvblxuICAgICAgICB1cGRhdGVJY29uKHJlYWx0aW1lRGVzY3JpcHRpb24pO1xuICAgICAgICBcbiAgfSBjYXRjaCAoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfTsgIFxufVxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/dW5pdHM9JHtnZXRVbml0cygpfSZsYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD0ke2FwaUtleX1gXG4gICAgdHJ5IHtcbiAgICAgICAgLy9NYWtlIGZldGNoIHJlcXVlc3QgYW5kIHN0b3JlcyBpdCBhcyByZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBcbiAgICAgICAgLy9TdG9yZSB0aGUgSlNPTiBcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpO1xuXG4gICAgICAgIC8vU3RvcmUgY2l0eSB0aW1lIHpvbmUgKG9mZnNldCBzZWNvbmRzKVxuICAgICAgICBsZXQgbG9jYWxUaW1lem9uZSA9IGZvcmVjYXN0RGF0YS5jaXR5LnRpbWV6b25lO1xuXG4gICAgICAgIC8vIENsZWFyIE9sZCBEYXRhXG4gICAgICAgIGNsZWFyRm9yZWNhc3RzKCk7XG5cbiAgICAgICAgLy8gR2V0IEhvdXJseSBGb3JlY2FzdCBEYXRhIFxuICAgICAgICBmb3JlY2FzdERhdGEubGlzdC5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIGhvdXJseVRlbXAgPSBNYXRoLnJvdW5kKGluZGV4Lm1haW4udGVtcCkgKyB1bml0U2lnbjtcbiAgICAgICAgICAgIHNldGZvcmVjYXN0VVRDKGluZGV4LmR0KTtcblxuICAgICAgICAgICAgY29udmVydFRpbWUoZ2V0Rm9yZWNhc3RVVEMoKSwgbG9jYWxUaW1lem9uZSk7XG4gICAgICAgICAgICBkaXNwbGF5SG91cmx5Rm9yZWNhc3QoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGF5VGVtcHMoaG91cmx5VGVtcCwgZGF5TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29udmVydFRpbWUoZm9yZWNhc3REYXRhLmxpc3RbMF0uZHQsIGxvY2FsVGltZXpvbmUpO1xuICAgICAgICBjYWxjdWxhdGVBdmVyYWdlcygpO1xuICAgICAgICBkaXNwbGF5RGFpbHlGb3JlY2FzdCgpO1xuICAgICAgICBcbiAgfSBjYXRjaCAoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfTsgIFxufVxuXG5leHBvcnQgeyBob3VybHlUZW1wIH07IiwiaW1wb3J0IHsgZGF5TmFtZSwgbG9jYWxGb3JtYXR0ZWRUaW1lLCBhdmVyYWdlVGVtcHMsIGRheU9mV2VlaywgZ2V0VW5pdHMsIHNldFVuaXRzLCBnZXRIb3VycywgZ2V0TmlnaHQgfSBmcm9tIFwiLi4vc3JjL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgaG91cmx5VGVtcCwgZ2V0R2VvQ29kZSB9IGZyb20gXCIuLi9zcmMvYXBpXCI7XG5pbXBvcnQgJy4uL3NyYy9zdHlsZS5jc3MnOyBcblxuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0QnRuJyk7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uSW5wdXQnKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHlGb3JlY2FzdERhdGEnKTtcbmNvbnN0IGRhaWx5Rm9yZWNhc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Rm9yZWNhc3REYXRhJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgbG9jYXRpb25TZWFyY2ggPSAnUGhvZW5peCc7XG5sZXQgY3VycmVudERheSA9ICcnO1xubGV0IHVuaXRTaWduID0gXCJGwrBcIjtcbmxldCBsb2NhbERhdGUgPSBuZXcgRGF0ZSgpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBnZXRHZW9Db2RlKGxvY2F0aW9uU2VhcmNoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSk7XG4gICAgbG9jYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICAgIGxvY2F0aW9uU2VhcmNoID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGdldFVuaXRzKCkgPT09IFwiaW1wZXJpYWxcIikgeyAvL0NoYW5nZSB0byBNZXRyaWMgKEMpLCBydW4gZ2V0R2VvQ29kZVxuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbXBlcmlhbCcpO1xuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICAgICAgICAgIHNldFVuaXRzKCdtZXRyaWMnKTtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJDwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vQ2hhbmdlIHRvIEltcGVyaWFsIChGKSwgcnVuIGdldEdlb0NvZGVcbiAgICAgICAgICAgIHVuaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWV0cmljJyk7XG4gICAgICAgICAgICB1bml0QnRuLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgICBzZXRVbml0cygnaW1wZXJpYWwnKTtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJGwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdEJ0bi5pbm5lckhUTUwgPSB1bml0U2lnbjtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseUZvcmVjYXN0KCkgeyAgICBcbiAgICBjb25zdCBob3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91ckRpdi5jbGFzc05hbWUgPSAnaG91ckRpdic7XG4gICAgaG91cmx5Rm9yZWNhc3REYXRhLmFwcGVuZENoaWxkKGhvdXJEaXYpO1xuXG4gICAgY29uc3QgaG91ckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyRGF5LmlubmVySFRNTCA9IGAke2RheU5hbWV9IOKAoiAke2xvY2FsRm9ybWF0dGVkVGltZX1gO1xuICAgIGhvdXJEYXkuY2xhc3NOYW1lID0gJ2hvdXJEYXknO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91ckRheSk7XG5cbiAgICBjb25zdCBob3VyVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyVGVtcC5pbm5lckhUTUwgPSBob3VybHlUZW1wO1xuICAgIGhvdXJUZW1wLmNsYXNzTmFtZSA9ICdob3VyVGVtcCc7XG4gICAgaG91ckRpdi5hcHBlbmRDaGlsZChob3VyVGVtcCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURhaWx5Rm9yZWNhc3QoKSB7XG4gICAgXG4gICAgLy8gSW5wdXQgZGF5cyBpbiBvcmRlciBvZiB3ZWVrIHN0YXJ0aW5nIHdpdGggdGhlIGRheSBhZnRlciB0aGUgY3VycmVudCBkYXlcbiAgICBjb25zdCBvcmRlcmVkRGF5cyA9IFtdO1xuICAgIGN1cnJlbnREYXkgPSBkYXlPZldlZWs7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IChjdXJyZW50RGF5ICsgaSkgJSA3O1xuICAgICAgICBjb25zdCBkYXlOYW1lID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddW2RheU9mV2Vla107XG4gICAgICAgIGlmIChhdmVyYWdlVGVtcHNbZGF5TmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9yZGVyZWREYXlzLnB1c2goZGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGRheSB0ZW1wcyBpbiBzcGVjaWZpZWQgb3JkZXJcbiAgICBvcmRlcmVkRGF5cy5mb3JFYWNoKGRheSA9PiB7ICAgIFxuICAgICAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5RGl2LmNsYXNzTmFtZSA9ICdkYXlEaXYnO1xuICAgICAgICBkYWlseUZvcmVjYXN0RGF0YS5hcHBlbmRDaGlsZChkYXlEaXYpO1xuXG4gICAgICAgIGNvbnN0IGRheURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGF5RGF5LmlubmVySFRNTCA9IGAke2RheX1gO1xuICAgICAgICBkYXlEYXkuY2xhc3NOYW1lID0gJ2RheURheSc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlEYXkpO1xuXG4gICAgICAgIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRheVRlbXAuaW5uZXJIVE1MID0gYXZlcmFnZVRlbXBzW2RheV0gKyB1bml0U2lnbjtcbiAgICAgICAgZGF5VGVtcC5jbGFzc05hbWUgPSAnZGF5VGVtcCc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlUZW1wKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKCkge1xuICAgIGNvbnN0IGhvdXJzID0gZ2V0SG91cnMoKTtcbiAgICBpZihob3VycyA+PTQgJiYgaG91cnM8PTcpe1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdkYXduJzsgLy9EYXduXG4gICAgfSBlbHNlIGlmKGhvdXJzID49NyAmJiBob3VycyA8PTEyKSB7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ21vcm5pbmcnOyAvL01vcm5pbmdcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyICYmIGhvdXJzIDw9MTcpIHtcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnYWZ0ZXJub29uJzsgIC8vIEFmdGVybm9vblxuICAgIH0gZWxzZSBpZihob3VycyA+PSAxNyAmJiBob3VycyA8PSAyMCkge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdldmVuaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICduaWdodCc7IC8vTmlnaHRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSWNvbih3ZWF0aGVyRGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcblxuICAgIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbG91ZHMnKSAmJiBnZXROaWdodCgpID09IGZhbHNlKXtcbiAgICAgICAgaWNvbi5zcmMgPSBcImljb25zL292ZXJjYXN0LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCd0aHVuZGVyc3Rvcm0nKSl7XG4gICAgICAgIGljb24uc3JjID0gXCJpY29ucy90aHVuZGVyLnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvc3ByaW5rbGVzLnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdyYWluJykpe1xuICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvcmFpbnkucG5nXCJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3Nub3cnKSl7XG4gICAgICAgIGljb24uc3JjID0gXCJpY29ucy9zbm93LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpICYmIGdldE5pZ2h0KCkgPT0gZmFsc2Upe1xuICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvY2xlYXItZGF5LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpICYmIGdldE5pZ2h0KCkgPT0gdHJ1ZSl7XG4gICAgICAgIGljb24uc3JjID0gXCJpY29ucy9jbGVhci1uaWdodC5wbmdcIlxuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykgJiYgZ2V0TmlnaHQoKSA9PSB0cnVlKXtcbiAgICAgICAgaWNvbi5zcmMgPSBcImljb25zL2Nsb3VkeS1uaWdodC5wbmdcIlxuICAgIH07XG5cbiAgICByZXR1cm4gaWNvbi5zcmM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cbmV4cG9ydCB7IGhvdXJseUZvcmVjYXN0RGF0YSwgZGFpbHlGb3JlY2FzdERhdGEsIHVuaXRTaWduIH07IiwiaW1wb3J0IHsgaG91cmx5Rm9yZWNhc3REYXRhLCBkYWlseUZvcmVjYXN0RGF0YSB9IGZyb20gXCIuLi9zcmMvdWlcIjtcblxubGV0IHVuaXRzID0gXCJpbXBlcmlhbFwiO1xubGV0IGxvY2FsRm9ybWF0dGVkRGF0ZSA9ICcnO1xubGV0IGxvY2FsRm9ybWF0dGVkVGltZSA9ICcnO1xubGV0IGhvdXJzID0gMDtcbmxldCBjdXJyZW50VGltZSA9IGZhbHNlO1xubGV0IGZvcmVjYXN0VVRDID0gMDtcbmxldCBuaWdodCA9IGZhbHNlO1xubGV0IGRheU5hbWUgPSAnJztcbmxldCBkYXlPZldlZWsgPSAnJztcbmxldCBhdmVyYWdlVGVtcCA9IDA7XG5cbmxldCB0ZW1wZXJhdHVyZXNCeURheSA9IHtcbiAgICAnU3VuJzogW10sXG4gICAgJ01vbic6IFtdLFxuICAgICdUdWVzJzogW10sXG4gICAgJ1dlZCc6IFtdLFxuICAgICdUaHVyJzogW10sXG4gICAgJ0ZyaSc6IFtdLFxuICAgICdTYXQnOiBbXVxufTtcblxubGV0IGF2ZXJhZ2VUZW1wcyA9IHtcbiAgICAnU3VuJzogW10sXG4gICAgJ01vbic6IFtdLFxuICAgICdUdWVzJzogW10sXG4gICAgJ1dlZCc6IFtdLFxuICAgICdUaHVyJzogW10sXG4gICAgJ0ZyaSc6IFtdLFxuICAgICdTYXQnOiBbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMb2NhdGlvbihsb2NhdGlvblN0cmluZykge1xuICAgIGNvbnN0IHBhcnRzID0gbG9jYXRpb25TdHJpbmcuc3BsaXQoJywnKTtcbiAgICAvLyBFeHRyYWN0IHBhcnRzIHRvIGtlZXBcbiAgICBsZXQgY2l0eSA9IHBhcnRzWzBdLnRyaW0oKTsgLy8gUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgbGV0IHN0YXRlID0gJyc7XG4gICAgbGV0IGNvdW50cnkgPSAnJztcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBlbm91Z2ggcGFydHNcbiAgICBpZiAocGFydHMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgcGFydCBpcyBcIlVuaXRlZCBTdGF0ZXNcIiwgcmVwbGFjZSBpdCB3aXRoIFwiVVNBXCJcbiAgICAgICAgaWYgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdLnRyaW0oKSA9PT0gJ1VuaXRlZCBTdGF0ZXMnKSB7XG4gICAgICAgICAgICBjb3VudHJ5ID0gJ1VTQSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudHJ5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV0udHJpbSgpOyAvLyBPdGhlcndpc2UsIGFzc3VtZSB0aGUgbGFzdCBwYXJ0IGlzIHRoZSBjb3VudHJ5XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHNlY29uZCBsYXN0IHBhcnQgaXMgbm90IGEgc3RhdGUgYWJicmV2aWF0aW9uLCB1c2UgaXQgYXMgdGhlIHN0YXRlXG4gICAgICAgIGlmIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXS50cmltKCkubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdLnRyaW0oKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIElmIG9ubHkgdHdvIHBhcnRzLCBhc3N1bWUgdGhlIHNlY29uZCBwYXJ0IGlzIHRoZSBjb3VudHJ5XG4gICAgICAgIGNvdW50cnkgPSBwYXJ0c1sxXS50cmltKCk7XG4gICAgfVxuXG4gICAgLy8gQ29uY2F0ZW5hdGUgdGhlIHBhcnRzIGludG8gdGhlIGRlc2lyZWQgZm9ybWF0XG4gICAgbGV0IHBhcnNlZExvY2F0aW9uID0gY2l0eTtcbiAgICBpZiAoc3RhdGUgIT09ICcnKSB7XG4gICAgICAgIHBhcnNlZExvY2F0aW9uICs9IGAsICR7c3RhdGV9YDtcbiAgICB9XG4gICAgaWYgKGNvdW50cnkgIT09ICcnKSB7XG4gICAgICAgIHBhcnNlZExvY2F0aW9uICs9IGAsICR7Y291bnRyeX1gO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkTG9jYXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRpbWUoZm9yZWNhc3RVVEMsIGxvY2FsVGltZXpvbmUpIHtcbiAgICAvLyBBZGp1c3QgdGhlIHRpbWVzdGFtcCBieSB0aGUgdGltZXpvbmUgb2Zmc2V0IHRvIGdldCB0aGUgbG9jYWwgdGltZVxuICAgIGNvbnN0IGxvY2FsVGltZXN0YW1wID0gZm9yZWNhc3RVVEMgKyBsb2NhbFRpbWV6b25lO1xuICAgIGxldCBsb2NhbERhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWVzdGFtcCAqIDEwMDApO1xuICAgIGxldCBsb2NhbFRpbWUgPSBsb2NhbERhdGUuZ2V0VGltZSgpO1xuXG4gICAgLy8gQXJyYXkgb2YgbW9udGggbmFtZXNcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgXG4gICAgLy8gRXh0cmFjdCB0aGUgbW9udGgsIGRheSwgYW5kIHllYXIgZnJvbSBsb2NhbERhdGVcbiAgICBjb25zdCBtb250aCA9IG1vbnRoTmFtZXNbbG9jYWxEYXRlLmdldFVUQ01vbnRoKCldOyAvLyBnZXRVVENNb250aCgpIHJldHVybnMgYSB6ZXJvLWJhc2VkIGluZGV4XG4gICAgY29uc3QgZGF5ID0gbG9jYWxEYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gbG9jYWxEYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgICAvLyBGb3JtYXQgdGhlIGxvY2FsIGRhdGUgYW5kIHRpbWVcbiAgICBsb2NhbEZvcm1hdHRlZERhdGUgPSBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDsgLy8gRm9ybWF0IHRoZSBsb2NhbCBkYXRlIGFzIFwiTW9udGggRCwgWVlZWVwiXG4gICAgbG9jYWxGb3JtYXR0ZWRUaW1lID0gZm9ybWF0VGltZShsb2NhbERhdGUpO1xuXG4gICAgLy8gR2V0IGRheSBvZiB0aGUgd2Vla1xuICAgIGRheU5hbWUgPSBnZXREYXkobG9jYWxEYXRlKTtcblxufVxuZXhwb3J0IGZ1bmN0aW9uIGRheVRlbXBzKGhvdXJseVRlbXAsIGRheU5hbWUpIHtcbiAgICAvLyBDb252ZXJ0IGhvdXJseVRlbXAgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIGFuZCByZW1vdmUgdGhlIHVuaXRcbiAgICBjb25zdCB0ZW1wVmFsdWUgPSBwYXJzZUZsb2F0KGhvdXJseVRlbXApO1xuXG4gICAgLy8gU3RvcmUgdGhlIHRlbXBlcmF0dXJlIHZhbHVlIGluIHRoZSBjb3JyZXNwb25kaW5nIGRheSBhcnJheVxuICAgIGlmICghaXNOYU4odGVtcFZhbHVlKSkge1xuICAgICAgICB0ZW1wZXJhdHVyZXNCeURheVtkYXlOYW1lXS5wdXNoKHRlbXBWYWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRm9yZWNhc3RzKCkge1xuICAgIC8vSG91cmx5IEZvcmVjYXN0RGF0YSBEaXNwbGF5XG4gICAgd2hpbGUgKGhvdXJseUZvcmVjYXN0RGF0YS5maXJzdENoaWxkKSB7XG4gICAgICAgIGhvdXJseUZvcmVjYXN0RGF0YS5yZW1vdmVDaGlsZChob3VybHlGb3JlY2FzdERhdGEuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHdoaWxlIChkYWlseUZvcmVjYXN0RGF0YS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRhaWx5Rm9yZWNhc3REYXRhLnJlbW92ZUNoaWxkKGRhaWx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vRGFpbHkgRm9yZWNhc3QgRGF0YSBmb3IgY2FsY3VsYXRpb25cbiAgICB0ZW1wZXJhdHVyZXNCeURheSA9IHtcbiAgICAgICAgICAgICdTdW4nOiBbXSxcbiAgICAgICAgICAgICdNb24nOiBbXSxcbiAgICAgICAgICAgICdUdWVzJzogW10sXG4gICAgICAgICAgICAnV2VkJzogW10sXG4gICAgICAgICAgICAnVGh1cic6IFtdLFxuICAgICAgICAgICAgJ0ZyaSc6IFtdLFxuICAgICAgICAgICAgJ1NhdCc6IFtdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFRvZGF5c0RhdGUoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvLyBBZGQgbGVhZGluZyB6ZXJvIGlmIG5lZWRlZFxuICAgIGNvbnN0IGRheSA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIEFkZCBsZWFkaW5nIHplcm8gaWYgbmVlZGVkXG4gICAgY29uc3QgdG9kYXlEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICByZXR1cm4gdG9kYXlEYXRlO1xufVxuZnVuY3Rpb24gZ2V0RGF5KGxvY2FsRGF0ZSkge1xuICAgIGRheU9mV2VlayA9IGxvY2FsRGF0ZS5nZXRVVENEYXkoKTtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddO1xuICAgIGRheU5hbWUgPSBkYXlzT2ZXZWVrW2RheU9mV2Vla107XG5cbiAgICByZXR1cm4gZGF5TmFtZTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobG9jYWxEYXRlKSB7XG4gICAgbGV0IGZvcm1hdHRlZCA9ICcnO1xuICAgIC8vIENhbGN1bGF0ZSBBTSBvciBQTVxuICAgIGhvdXJzID0gbG9jYWxEYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9ICgnMCcgKyBsb2NhbERhdGUuZ2V0VVRDTWludXRlcygpKS5zbGljZSgtMik7XG4gICAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cbiAgICAvLyBDb252ZXJ0IHRvIDEyLWhvdXIgZm9ybWF0XG4gICAgbGV0IGhvdXJzMTIgPSBob3VycyAlIDEyO1xuICAgIGhvdXJzMTIgPSBob3VyczEyID8gaG91cnMxMiA6IDEyOyAvLyBDb252ZXJ0IDAgdG8gMTIgZm9yIG1pZG5pZ2h0XG5cbiAgICAvLyBGb3JtYXQgdGhlIGxvY2FsIHRpbWUgd2l0aCBBTSBvciBQTVxuICAgIGlmIChjdXJyZW50VGltZSA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3JtYXR0ZWQgPSBob3VyczEyKyAnOicrIG1pbnV0ZXMrIGFtcG07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0dGVkID0gaG91cnMxMisgYW1wbTtcbiAgICB9XG4gICAgXG4gICAgY3VycmVudFRpbWUgPSBmYWxzZTtcbiAgICByZXR1cm4gZm9ybWF0dGVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUF2ZXJhZ2VzKCkge1xuICAgIC8vIExvb3AgdGhyb3VnaCB0ZW1wZXJhdHVyZXNCeURheSBhc3NpZ25pbmcgYm90aCB0aGUgZGF5IGFuZCB0ZW1wZXJhdHVyZVxuICAgIGZvciAoY29uc3QgW2RheSwgdGVtcHNdIG9mIE9iamVjdC5lbnRyaWVzKHRlbXBlcmF0dXJlc0J5RGF5KSkge1xuXG4gICAgICAgIC8vQ2FsY3VsYXRlIEF2ZXJhZ2UgVGVtcCAob25seSBmb3IgZGF5cyB3aXRoIHRlbXBlcmF0dXJlIGRhdGEpXG4gICAgICAgIGlmICh0ZW1wcy5sZW5ndGggPiAwKSB7IFxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IHRlbXBzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXZlcmFnZVRlbXAgPSBzdW0gLyB0ZW1wcy5sZW5ndGhcbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wc1tkYXldID0gYXZlcmFnZVRlbXAudG9GaXhlZCgwKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgYXZlcmFnZVRlbXBzW2RheV0gPSBudWxsOyAvLyBJbmRpY2F0ZSBubyBkYXRhIGZvciB0aGlzIGRheVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8vIFNldCAmIEdldCBWYXJpYWJsZXNcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VGltZSh2YWx1ZSkge1xuICAgIGN1cnJlbnRUaW1lID0gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SG91cnModmFsdWUpIHtcbiAgICBob3VycyA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG91cnMoKSB7XG4gICAgcmV0dXJuIGhvdXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TmlnaHQodmFsdWUpIHtcbiAgICBuaWdodCA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmlnaHQoKSB7XG4gICAgcmV0dXJuIG5pZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Zm9yZWNhc3RVVEModmFsdWUpIHtcbiAgICBmb3JlY2FzdFVUQyA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RVVEMoKSB7XG4gICAgcmV0dXJuIGZvcmVjYXN0VVRDO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VW5pdHModmFsdWUpe1xuICAgIHVuaXRzID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml0cygpIHtcbiAgICByZXR1cm4gdW5pdHM7XG5cbn1cblxuXG5cbmV4cG9ydCB7IGxvY2FsRm9ybWF0dGVkRGF0ZSwgbG9jYWxGb3JtYXR0ZWRUaW1lLCBkYXlOYW1lLCBhdmVyYWdlVGVtcHMsIGRheU9mV2VlayB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEZyYW5rbGluXCIsIHNhbnMtc2VyaWY7XG59XG4gICAgLm1vcm5pbmd7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5Y2M4ZGQsICM2YWEwYjcpO1xuICAgIH1cbiAgICAuYWZ0ZXJub29ue1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODFiZmRjLCAjNDc3Zjk3KTtcbiAgICB9XG4gICAgLmV2ZW5pbmd7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4NTlkZGUsICMzNDQ4N2EpO1xuICAgIH1cbiAgICAubmlnaHR7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzODM2NDcsICMwZDBkMTApO1xuICAgIH1cbiAgICAuZGF3bntcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZlNjZhNCwgIzEzMTExZSk7XG4gICAgfVxuXG5mb290ZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3R0b206IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmM2I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6ICNjMWM2ZGU7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA2MDBweDtcbiAgICByaWdodDogMDtcbn1cblxuLnNwaW5uZXIge1xuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICAgIC8qIExpZ2h0IGdyZXkgKi9cbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gICAgLyogQmx1ZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuXG5hOnZpc2l0ZWR7XG4gICAgY29sb3I6ICNmM2ZmYzg7XG59XG4jZ2l0aHViSWNvbntcbiAgICB3aWR0aDogMyU7XG59XG5zcGFue1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbmgxe1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiA2UkVNO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC8qIFNIRE9XIEVGRkVDVCBiZWxvdyAqL1xuICAgIC8qIHRleHQtc2hhZG93OiAtNXB4IDVweCAxMHB4ICM1MTUxNTE7XG4gICAgY29sb3I6IHdoaXRlOyAqL1xufVxuaDR7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5sb2NhdGlvbklucHV0e1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiM3YjgwOTRcbn1cblxuLm1haW4ge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbn1cbi5jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvY2F0aW9uT3V0cHV0e1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cbi50aW1lT3V0cHV0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi5yZWFsdGltZSB7XG4gICAgLyogd2lkdGg6IDE1JTsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC10ZW1wbGF0ZTogNGZyIDFmciAvIDFmciAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4gICAgLnJlYWx0aW1lVG9wIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogZ2FwOiAyNHB4OyAqL1xuICAgIH1cbiAgICAucmVhbHRpbWVMb3dIaWdoIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgICAuaWNvbntcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDIwcHg7XG4gICAgfVxuICAgIC5yZWFsdGltZURlc2NyaXB0aW9ue1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xuICAgIH1cblxuLnVuaXRCdG57XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbn1cbi51bml0QnRuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgICAubWV0cmlje1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjODU4NTg1O1xuICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICB9XG4gICAgLmltcGVyaWFsIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1ODU7XG4gICAgfVxuXG4uaG91cmx5Rm9yZWNhc3R7XG4gICAgd2lkdGg6IDgxMHB4O1xuICAgIG1hcmdpbjogMjRweCAwcHggMjRweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjNiO1xuICAgIHBhZGRpbmc6IDIwcHggMjZweCAyNnB4IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbiAgICBoM3tcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLmhvdXJseUZvcmVjYXN0RGF0YXtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA2NnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgICAgICAuaG91ckRpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaG91ckRpdiA+ICp7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xuICAgICAgICB9XG4gICAgICAgICAgICAuaG91ckljb24sIC5kYXlJY29ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbi5kYWlseUZvcmVjYXN0IHtcbiAgICB3aWR0aDogODEwcHg7XG4gICAgLyogcGFkZGluZzogMjZweDsgKi9cbiAgICAvKiBtYXJnaW46IDI0cHggMHB4IDI0cHggMHB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjNiOyAqL1xufVxuICAgIC5kYWlseUZvcmVjYXN0VGl0bGV7XG4gICAgICAgIG1hcmdpbjogMTJweCAyNHB4O1xuICAgIH1cbiAgICAuZGFpbHlGb3JlY2FzdERhdGF7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgICAgIC5kYXlEaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmM2I7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweCAwcHggMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgICAgIC5kYXlEYXl7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGF5VGVtcHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDZweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gICAgLmhvdXJseUZvcmVjYXN0e1xuICAgICAgICB3aWR0aDogNTI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjZweCAxOHB4IDI2cHg7XG4gICAgfVxuICAgIC5kYWlseUZvcmVjYXN0IHtcbiAgICAgICAgd2lkdGg6IDUyNXB4O1xuICAgIH1cbiAgICAuaG91cmx5Rm9yZWNhc3REYXRhIHtcbiAgICAgICAgZ2FwOiA2MHB4O1xuICAgIH1cbiAgICAuZGF5RGl2IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcblxuICAgIC5ob3VybHlGb3JlY2FzdCB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgIH1cbiAgICAuZGFpbHlGb3JlY2FzdHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDVweCAxOHB4IDVweDtcbiAgICB9XG4gICAgLmhvdXJseUZvcmVjYXN0RGF0YSB7XG4gICAgICAgIGdhcDogMzNweDtcbiAgICB9XG4gICAgLmRheURpdiB7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcblxuICAgIC5sb2NhdGlvbklucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5yZWFsdGltZXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogM2ZyIDFmciAvIDFmciAxZnJcbiAgICB9XG4gICAgLnJlYWx0aW1lVG9we1xuICAgICAgICBnYXA6IDBweDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjV2dztcblxuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB9XG4gICAgLmRheURheSwgLmRheVRlbXB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgfVxuICAgIC5ob3VybHlGb3JlY2FzdERhdGF7XG4gICAgICAgIGdhcDogMzBweDtcbiAgICB9XG4gICAgXG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx5Q0FBeUM7QUFDN0M7SUFDSTtRQUNJLHdEQUF3RDtJQUM1RDtJQUNBO1FBQ0ksd0RBQXdEO0lBQzVEO0lBQ0E7UUFDSSx3REFBd0Q7SUFDNUQ7SUFDQTtRQUNJLHdEQUF3RDtJQUM1RDtJQUNBO1FBQ0ksd0RBQXdEO0lBQzVEOztBQUVKO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZC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ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogXFxcIkxpYnJlIEZyYW5rbGluXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuICAgIC5tb3JuaW5ne1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzljYzhkZCwgIzZhYTBiNyk7XFxuICAgIH1cXG4gICAgLmFmdGVybm9vbntcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4MWJmZGMsICM0NzdmOTcpO1xcbiAgICB9XFxuICAgIC5ldmVuaW5ne1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1OWRkZSwgIzM0NDg3YSk7XFxuICAgIH1cXG4gICAgLm5pZ2h0e1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM4MzY0NywgIzBkMGQxMCk7XFxuICAgIH1cXG4gICAgLmRhd257XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNmU2NmE0LCAjMTMxMTFlKTtcXG4gICAgfVxcblxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmM2I7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgY29sb3I6ICNjMWM2ZGU7XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogNjAwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xcbiAgICAvKiBMaWdodCBncmV5ICovXFxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcXG4gICAgLyogQmx1ZSAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxufVxcblxcbmE6dmlzaXRlZHtcXG4gICAgY29sb3I6ICNmM2ZmYzg7XFxufVxcbiNnaXRodWJJY29ue1xcbiAgICB3aWR0aDogMyU7XFxufVxcbnNwYW57XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbmgxe1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDZSRU07XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICAvKiBTSERPVyBFRkZFQ1QgYmVsb3cgKi9cXG4gICAgLyogdGV4dC1zaGFkb3c6IC01cHggNXB4IDEwcHggIzUxNTE1MTtcXG4gICAgY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5oNHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9jYXRpb25JbnB1dHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjojN2I4MDk0XFxufVxcblxcbi5tYWluIHtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb3Jte1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2NhdGlvbk91dHB1dHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuLnRpbWVPdXRwdXR7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcbi5yZWFsdGltZSB7XFxuICAgIC8qIHdpZHRoOiAxNSU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGU6IDRmciAxZnIgLyAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuICAgIC5yZWFsdGltZVRvcCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIGdhcDogMjRweDsgKi9cXG4gICAgfVxcbiAgICAucmVhbHRpbWVMb3dIaWdoIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG4gICAgLmljb257XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xcbiAgICB9XFxuICAgIC5yZWFsdGltZURlc2NyaXB0aW9ue1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDIwcHg7XFxuICAgIH1cXG5cXG4udW5pdEJ0bntcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbn1cXG4udW5pdEJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4gICAgLm1ldHJpY3tcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTg1ODU7XFxuICAgICAgICBjb2xvcjogIzg1ODU4NTtcXG4gICAgfVxcbiAgICAuaW1wZXJpYWwge1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1ODU4NTtcXG4gICAgfVxcblxcbi5ob3VybHlGb3JlY2FzdHtcXG4gICAgd2lkdGg6IDgxMHB4O1xcbiAgICBtYXJnaW46IDI0cHggMHB4IDI0cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmM2I7XFxuICAgIHBhZGRpbmc6IDIwcHggMjZweCAyNnB4IDI2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcbiAgICBoM3tcXG4gICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIGxlZnQ6IDVweDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgLmhvdXJseUZvcmVjYXN0RGF0YXtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICAgICAgZ2FwOiA2NnB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIH1cXG4gICAgICAgIC5ob3VyRGl2e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmhvdXJEaXYgPiAqe1xcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweCAwcHggMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5ob3VySWNvbiwgLmRheUljb257XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIH1cXG4uZGFpbHlGb3JlY2FzdCB7XFxuICAgIHdpZHRoOiA4MTBweDtcXG4gICAgLyogcGFkZGluZzogMjZweDsgKi9cXG4gICAgLyogbWFyZ2luOiAyNHB4IDBweCAyNHB4IDBweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjNiOyAqL1xcbn1cXG4gICAgLmRhaWx5Rm9yZWNhc3RUaXRsZXtcXG4gICAgICAgIG1hcmdpbjogMTJweCAyNHB4O1xcbiAgICB9XFxuICAgIC5kYWlseUZvcmVjYXN0RGF0YXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG4gICAgICAgIC5kYXlEaXZ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzYjtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCAycHggMHB4IDJweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmRheURheXtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4IDBweCAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kYXlUZW1we1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDZweCAwcHggMHB4IDBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XFxuICAgIC5ob3VybHlGb3JlY2FzdHtcXG4gICAgICAgIHdpZHRoOiA1MjVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjZweCAxOHB4IDI2cHg7XFxuICAgIH1cXG4gICAgLmRhaWx5Rm9yZWNhc3Qge1xcbiAgICAgICAgd2lkdGg6IDUyNXB4O1xcbiAgICB9XFxuICAgIC5ob3VybHlGb3JlY2FzdERhdGEge1xcbiAgICAgICAgZ2FwOiA2MHB4O1xcbiAgICB9XFxuICAgIC5kYXlEaXYge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcXG5cXG4gICAgLmhvdXJseUZvcmVjYXN0IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIH1cXG4gICAgLmRhaWx5Rm9yZWNhc3R7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBwYWRkaW5nOiAxOHB4IDVweCAxOHB4IDVweDtcXG4gICAgfVxcbiAgICAuaG91cmx5Rm9yZWNhc3REYXRhIHtcXG4gICAgICAgIGdhcDogMzNweDtcXG4gICAgfVxcbiAgICAuZGF5RGl2IHtcXG4gICAgICAgIG1pbi13aWR0aDogMDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG5cXG4gICAgLmxvY2F0aW9uSW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLnJlYWx0aW1le1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogM2ZyIDFmciAvIDFmciAxZnJcXG4gICAgfVxcbiAgICAucmVhbHRpbWVUb3B7XFxuICAgICAgICBnYXA6IDBweDtcXG4gICAgfVxcbiAgICBoMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjV2dztcXG5cXG4gICAgfVxcbiAgICBoNHtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIH1cXG4gICAgLmRheURheSwgLmRheVRlbXB7XFxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICB9XFxuICAgIC5ob3VybHlGb3JlY2FzdERhdGF7XFxuICAgICAgICBnYXA6IDMwcHg7XFxuICAgIH1cXG4gICAgXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdWkuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJ1bml0U2lnbiIsInVwZGF0ZUJhY2tncm91bmQiLCJzaG93TG9hZCIsImhpZGVMb2FkIiwiZGlzcGxheUhvdXJseUZvcmVjYXN0IiwiZGlzcGxheURhaWx5Rm9yZWNhc3QiLCJ1cGRhdGVJY29uIiwibG9jYWxGb3JtYXR0ZWREYXRlIiwibG9jYWxGb3JtYXR0ZWRUaW1lIiwiZGF5TmFtZSIsImdldFVuaXRzIiwiZ2V0SG91cnMiLCJzZXRDdXJyZW50VGltZSIsImdldE5pZ2h0Iiwic2V0TmlnaHQiLCJnZXRGb3JlY2FzdFVUQyIsInNldGZvcmVjYXN0VVRDIiwiY29udmVydFRpbWUiLCJjbGVhckZvcmVjYXN0cyIsImRheVRlbXBzIiwiY2FsY3VsYXRlQXZlcmFnZXMiLCJsb2NhdGlvbk91dHB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpbWVPdXRwdXQiLCJjdXJyZW50VGVtcCIsInJlYWx0aW1lTG93IiwicmVhbHRpbWVIaWdoIiwicmVhbHRpbWVEZXNjcmlwdGlvbiIsImxvY2FsRGF0ZSIsIkRhdGUiLCJob3VybHlUZW1wIiwiYXBpS2V5IiwiZ2V0R2VvQ29kZSIsIl94IiwiX2dldEdlb0NvZGUiLCJfY2FsbGVlIiwibG9jYXRpb25TZWFyY2giLCJ1cmwiLCJyZXNwb25zZSIsImdlb2NvZGUiLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY29uY2F0IiwiZmV0Y2giLCJtb2RlIiwianNvbiIsImxhdCIsImxvbiIsImlubmVySFRNTCIsImdldFdlYXRoZXIiLCJnZXRGb3JlY2FzdCIsInQwIiwiY29uc29sZSIsImxvZyIsIl94MiIsIl94MyIsIl9nZXRXZWF0aGVyIiwiX2NhbGxlZTIiLCJ3ZWF0aGVyRGF0YSIsInRpbWV6b25lIiwiY3VycmVudERhdGUiLCJjdXJyZW50VVRDIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0VGltZSIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJ0ZW1wIiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsIl94NCIsIl94NSIsIl9nZXRGb3JlY2FzdCIsIl9jYWxsZWUzIiwiZm9yZWNhc3REYXRhIiwibG9jYWxUaW1lem9uZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxpc3QiLCJpbmRleCIsImR0IiwiYXZlcmFnZVRlbXBzIiwiZGF5T2ZXZWVrIiwic2V0VW5pdHMiLCJ1bml0QnRuIiwibG9jYXRpb25JbnB1dCIsImhvdXJseUZvcmVjYXN0RGF0YSIsImRhaWx5Rm9yZWNhc3REYXRhIiwiYm9keSIsImN1cnJlbnREYXkiLCJ3aW5kb3ciLCJvbmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhvdXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJob3VyRGF5IiwiaG91clRlbXAiLCJvcmRlcmVkRGF5cyIsImRheSIsImRheURpdiIsImRheURheSIsImRheVRlbXAiLCJob3VycyIsIndlYXRoZXJEZXNjcmlwdGlvbiIsImljb24iLCJpbmNsdWRlcyIsInNyYyIsInN0eWxlIiwiZGlzcGxheSIsInVuaXRzIiwiY3VycmVudFRpbWUiLCJmb3JlY2FzdFVUQyIsIm5pZ2h0IiwiYXZlcmFnZVRlbXAiLCJ0ZW1wZXJhdHVyZXNCeURheSIsInBhcnNlTG9jYXRpb24iLCJsb2NhdGlvblN0cmluZyIsInBhcnRzIiwic3BsaXQiLCJ0cmltIiwicGFyc2VkTG9jYXRpb24iLCJsb2NhbFRpbWVzdGFtcCIsImxvY2FsVGltZSIsIm1vbnRoTmFtZXMiLCJtb250aCIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsInllYXIiLCJnZXRVVENGdWxsWWVhciIsImZvcm1hdFRpbWUiLCJnZXREYXkiLCJ0ZW1wVmFsdWUiLCJwYXJzZUZsb2F0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZ2V0VG9kYXlzRGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJTdHJpbmciLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsInRvZGF5RGF0ZSIsImdldFVUQ0RheSIsImRheXNPZldlZWsiLCJmb3JtYXR0ZWQiLCJnZXRVVENIb3VycyIsIm1pbnV0ZXMiLCJnZXRVVENNaW51dGVzIiwiYW1wbSIsImhvdXJzMTIiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsInRlbXBzIiwic3VtIiwidG9GaXhlZCIsImdldEN1cnJlbnRUaW1lIiwic2V0SG91cnMiXSwic291cmNlUm9vdCI6IiJ9