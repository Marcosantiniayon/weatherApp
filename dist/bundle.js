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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");


var unitBtn = document.querySelector('.unitBtn');
var locationInput = document.querySelector('.locationInput');
var hourlyForecastData = document.querySelector('.hourlyForecastData');
var dailyForecastData = document.querySelector('.dailyForecastData');
var body = document.querySelector('body');
var currentDay = '';
var unitSign = "F°";
var localDate = new Date();
document.addEventListener('DOMContentLoaded', function () {
  updateBackground(localDate);
  locationInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      locationSearch = locationInput.value;
      getGeoCode(locationSearch);
    }
  });
  unitBtn.addEventListener('click', function () {
    if (units === "imperial") {
      //Change to Metric (C), run getGeoCode
      unitBtn.classList.remove('imperial');
      unitBtn.classList.add('metric');
      units = "metric";
      unitSign = "C°";
      getGeoCode(locationSearch);
    } else {
      //Change to Imperial (F), run getGeoCode
      unitBtn.classList.remove('metric');
      unitBtn.classList.add('imperial');
      units = "imperial";
      unitSign = "F°";
      getGeoCode(locationSearch);
    }
    unitBtn.innerHTML = unitSign;
  });
});
function displayHourlyForecast() {
  var hourDiv = document.createElement('div');
  hourDiv.className = 'hourDiv';
  hourlyForecastData.appendChild(hourDiv);
  var hourDay = document.createElement('p');
  hourDay.innerHTML = "".concat(_utilities__WEBPACK_IMPORTED_MODULE_0__.dayName, " \u2022 ").concat(_utilities__WEBPACK_IMPORTED_MODULE_0__.localFormattedTime);
  hourDay.className = 'hourDay';
  hourDiv.appendChild(hourDay);
  var hourTemp = document.createElement('p');
  hourTemp.innerHTML = _api__WEBPACK_IMPORTED_MODULE_1__.hourlyTemp;
  hourTemp.className = 'hourTemp';
  hourDiv.appendChild(hourTemp);
}
function displayDailyForecast() {
  console.log(_utilities__WEBPACK_IMPORTED_MODULE_0__.averageTemps);

  // Input days in order of week starting with the day after the current day
  var orderedDays = [];
  currentDay = _utilities__WEBPACK_IMPORTED_MODULE_0__.dayOfWeek;
  for (var i = 0; i <= 6; i++) {
    var _dayOfWeek = (currentDay + i) % 7;
    var _dayName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'][_dayOfWeek];
    if (_utilities__WEBPACK_IMPORTED_MODULE_0__.averageTemps[_dayName] !== null) {
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
    dayTemp.innerHTML = _utilities__WEBPACK_IMPORTED_MODULE_0__.averageTemps[day] + unitSign;
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
  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.content').style.display = 'none';
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
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
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
var localTimezone = 0;
var night = false;
var formattedDate = '';
var dayName = '';
var dayOfWeek = '';
var formattedTime = '';
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
  while (_ui__WEBPACK_IMPORTED_MODULE_0__.hourlyForecastData.firstChild) {
    _ui__WEBPACK_IMPORTED_MODULE_0__.hourlyForecastData.removeChild(_ui__WEBPACK_IMPORTED_MODULE_0__.hourlyForecastData.firstChild);
  }
  while (_ui__WEBPACK_IMPORTED_MODULE_0__.dailyForecastData.firstChild) {
    _ui__WEBPACK_IMPORTED_MODULE_0__.dailyForecastData.removeChild(_ui__WEBPACK_IMPORTED_MODULE_0__.dailyForecastData.firstChild);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/api */ "./src/api.js");

var iconImg = "";
var locationSearch = 'Phoenix';
var hourlyTemp = 0;
var forecastUTC = 0;
var localTimezone = 0;
var night = false;
var formattedDate = '';
var dayName = '';
var dayOfWeek = '';
var currentDay = '';
var formattedTime = '';
var averageTemp = 0;

// const todayDate = getTodaysDate();

window.onload = function () {
  (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.getGeoCode)(locationSearch);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vc3JjL3VpLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bml0U2lnbiwgdXBkYXRlQmFja2dyb3VuZCwgc2hvd0xvYWQsIGhpZGVMb2FkLCBkaXNwbGF5SG91cmx5Rm9yZWNhc3QsIGRpc3BsYXlEYWlseUZvcmVjYXN0IH0gZnJvbSAnLi4vc3JjL3VpJ1xuaW1wb3J0IHsgbG9jYWxGb3JtYXR0ZWREYXRlLCBsb2NhbEZvcm1hdHRlZFRpbWUsIGRheU5hbWUsIGdldEhvdXJzLCBzZXRDdXJyZW50VGltZSwgZ2V0TmlnaHQsIHNldE5pZ2h0LCBnZXRGb3JlY2FzdFVUQywgc2V0Zm9yZWNhc3RVVEMsIGNvbnZlcnRUaW1lLCBjbGVhckZvcmVjYXN0cywgZGF5VGVtcHMsIGNhbGN1bGF0ZUF2ZXJhZ2VzIH0gZnJvbSAnLi4vc3JjL3V0aWxpdGllcydcblxuY29uc3QgbG9jYXRpb25PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25PdXRwdXQnKTtcbmNvbnN0IHRpbWVPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZU91dHB1dCcpO1xuY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXAnKTtcbmNvbnN0IHJlYWx0aW1lTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWx0aW1lTG93Jyk7XG5jb25zdCByZWFsdGltZUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhbHRpbWVIaWdoJyk7XG5jb25zdCByZWFsdGltZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWx0aW1lRGVzY3JpcHRpb24nKTtcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuXG5sZXQgdW5pdHMgPSBcImltcGVyaWFsXCI7XG5sZXQgbG9jYWxEYXRlID0gbmV3IERhdGUoKTtcbmxldCBob3VybHlUZW1wID0gMDtcblxuXG5jb25zdCBhcGlLZXkgPSBcImIwODkwNGVkMzEzMmMzYzlhNDZlZjJhYmNhY2I2MmQ2XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHZW9Db2RlKGxvY2F0aW9uU2VhcmNoKSB7IC8vR2V0cyBsb2NhdGlvbiBpbmZvLCBydW5zIGdldFdlYXRoZXIgJiBnZXRGb3JlY2FzdCwgZGlzcGxheXMgY29udGVudFxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uU2VhcmNofSZsaW1pdD01JmFwcGlkPSR7YXBpS2V5fWBcbiAgICBzaG93TG9hZCgpO1xuXG4gIHRyeSB7XG4gICAgICAvL01ha2UgZmV0Y2ggcmVxdWVzdCBhbmQgc3RvcmVzIGl0IGFzIHJlc3BvbnNlXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBcbiAgICAgIC8vU3RvcmUgdGhlIEpTT04gXG4gICAgICBjb25zdCBnZW9jb2RlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgbGV0IGNpdHkgPSBnZW9jb2RlWzBdLm5hbWU7XG4gICAgICBsZXQgc3RhdGUgPSBnZW9jb2RlWzBdLnN0YXRlO1xuICAgICAgbGV0IGNvdW50cnkgPSBnZW9jb2RlWzBdLmNvdW50cnk7XG4gICAgICBsZXQgbGF0aXR1ZGUgPSBnZW9jb2RlWzBdLmxhdDtcbiAgICAgIGxldCBsb25naXR1ZGUgPSBnZW9jb2RlWzBdLmxvbjtcblxuICAgICAgLy9EaXNwbGF5IExvY2F0aW9uXG4gICAgICBpZiAoY291bnRyeSA9PT0gJ1VTJykge1xuICAgICAgICAgICAgbG9jYXRpb25PdXRwdXQuaW5uZXJIVE1MID0gY2l0eSArIFwiLCBcIiArIHN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2F0aW9uT3V0cHV0LmlubmVySFRNTCA9IGNpdHkgKyBcIiwgXCIgKyBzdGF0ZSArIFwiLCBcIiArIGNvdW50cnk7XG4gICAgICB9XG5cbiAgICAgIGdldFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICBnZXRGb3JlY2FzdChsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIGhpZGVMb2FkKCk7XG5cbiAgfSBjYXRjaCAoZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgbG9jYXRpb25PdXRwdXQuaW5uZXJIVE1MID0gJ0NpdHkgRXJyb3IuLi4gUGxlYXNlIGVudGVyIGNvcnJlY3QgY2l0eSBuYW1lJztcblxuICAgICAgaGlkZUxvYWQoKTtcbiAgfTsgIFxuICBcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj91bml0cz0ke3VuaXRzfSZsYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD0ke2FwaUtleX1gXG4gICAgdHJ5IHtcbiAgICAgICAgLy9GZXRjaCByZXF1ZXN0IGFuZCBzdG9yZSBpdCBhcyByZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBcbiAgICAgICAgLy9TdG9yZSB0aGUgSlNPTiBcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgICAgICAvL0dldCBUaW1lXG4gICAgICAgIHNldEN1cnJlbnRUaW1lKHRydWUpO1xuICAgICAgICBjb25zdCB0aW1lem9uZSA9IHdlYXRoZXJEYXRhLnRpbWV6b25lO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVVEMgPSAoY3VycmVudERhdGUuZ2V0VGltZSgpKSAvIDEwMDA7IFxuICAgIFxuICAgICAgICBjb252ZXJ0VGltZShjdXJyZW50VVRDLCB0aW1lem9uZSk7XG4gICAgICAgIHVwZGF0ZUJhY2tncm91bmQobG9jYWxEYXRlKTtcblxuICAgICAgICAvLyBVcGRhdGUgaWYgZGF5IG9yIG5pZ2h0XG4gICAgICAgIGlmIChnZXRIb3VycygpID49IDE3IHx8IGdldEhvdXJzKCkgPD0gNSkge1xuICAgICAgICAgICAgc2V0TmlnaHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXROaWdodChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0Rpc3BsYXkgdGVtcCB2YWx1ZXNcbiAgICAgICAgdGltZU91dHB1dC5pbm5lckhUTUwgPSBgJHtsb2NhbEZvcm1hdHRlZERhdGV9IHwgJHtsb2NhbEZvcm1hdHRlZFRpbWV9YDtcbiAgICAgICAgY3VycmVudFRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgICAgICByZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICAgICAgICByZWFsdGltZUxvdy5pbm5lckhUTUwgPSBcIkw6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluKSArIFwiwrBGXCI7XG4gICAgICAgICAgICByZWFsdGltZUhpZ2guaW5uZXJIVE1MID0gXCJIOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCkgKyBcIsKwRlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhbHRpbWVMb3cuaW5uZXJIVE1MID0gXCJMOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbikgKyBcIsKwQ1wiO1xuICAgICAgICAgICAgcmVhbHRpbWVIaWdoLmlubmVySFRNTCA9IFwiSDogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpICsgXCLCsENcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVXBkYXRlIGljb25cbiAgICAgICAgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbG91ZHMnKSAmJiBnZXROaWdodCgpID09IGZhbHNlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCIuLi9pY29ucy9vdmVyY2FzdC5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCd0aHVuZGVyc3Rvcm0nKSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvdGh1bmRlci5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL3Nwcmlua2xlcy5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdyYWluJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL3JhaW55LnBuZ1wiXG4gICAgICAgIH0gZWxzZSBpZiAocmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3Nub3cnKSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvc25vdy5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpICYmIGdldE5pZ2h0KCkgPT0gZmFsc2Upe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcIi4uL2ljb25zL2NsZWFyLWRheS5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpICYmIGdldE5pZ2h0KCkgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiLi4vaWNvbnMvY2xlYXItbmlnaHQucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykgJiYgZ2V0TmlnaHQoKSA9PSB0cnVlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCIuLi9pY29ucy9jbG91ZHktbmlnaHQucG5nXCJcbiAgICAgICAgfTtcbiAgfSBjYXRjaCAoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfTsgIFxufVxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/dW5pdHM9JHt1bml0c30mbGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHthcGlLZXl9YFxuICAgIHRyeSB7XG4gICAgICAgIC8vTWFrZSBmZXRjaCByZXF1ZXN0IGFuZCBzdG9yZXMgaXQgYXMgcmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAgIC8vU3RvcmUgdGhlIEpTT04gXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcblxuICAgICAgICAvL1N0b3JlIGNpdHkgdGltZSB6b25lIChvZmZzZXQgc2Vjb25kcylcbiAgICAgICAgbGV0IGxvY2FsVGltZXpvbmUgPSBmb3JlY2FzdERhdGEuY2l0eS50aW1lem9uZTtcblxuICAgICAgICAvLyBDbGVhciBPbGQgRGF0YVxuICAgICAgICBjbGVhckZvcmVjYXN0cygpO1xuXG4gICAgICAgIC8vIEdldCBIb3VybHkgRm9yZWNhc3QgRGF0YSBcbiAgICAgICAgZm9yZWNhc3REYXRhLmxpc3QuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICBob3VybHlUZW1wID0gTWF0aC5yb3VuZChpbmRleC5tYWluLnRlbXApICsgdW5pdFNpZ247XG4gICAgICAgICAgICBzZXRmb3JlY2FzdFVUQyhpbmRleC5kdCk7XG5cbiAgICAgICAgICAgIGNvbnZlcnRUaW1lKGdldEZvcmVjYXN0VVRDKCksIGxvY2FsVGltZXpvbmUpO1xuICAgICAgICAgICAgZGlzcGxheUhvdXJseUZvcmVjYXN0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRheVRlbXBzKGhvdXJseVRlbXAsIGRheU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnZlcnRUaW1lKGZvcmVjYXN0RGF0YS5saXN0WzBdLmR0LCBsb2NhbFRpbWV6b25lKTtcbiAgICAgICAgY2FsY3VsYXRlQXZlcmFnZXMoKTtcbiAgICAgICAgZGlzcGxheURhaWx5Rm9yZWNhc3QoKTtcbiAgICAgICAgXG4gIH0gY2F0Y2ggKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH07ICBcbn1cblxuZXhwb3J0IHsgaG91cmx5VGVtcCB9OyIsImltcG9ydCB7IGRheU5hbWUsIGxvY2FsRm9ybWF0dGVkVGltZSwgYXZlcmFnZVRlbXBzLCBkYXlPZldlZWsgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGhvdXJseVRlbXAgfSBmcm9tIFwiLi9hcGlcIjtcblxuXG5jb25zdCB1bml0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRCdG4nKTtcbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25JbnB1dCcpO1xuY29uc3QgaG91cmx5Rm9yZWNhc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseUZvcmVjYXN0RGF0YScpO1xuY29uc3QgZGFpbHlGb3JlY2FzdERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHlGb3JlY2FzdERhdGEnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBjdXJyZW50RGF5ID0gJyc7XG5sZXQgdW5pdFNpZ24gPSBcIkbCsFwiO1xubGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKCk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSk7XG4gICAgbG9jYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICAgIGxvY2F0aW9uU2VhcmNoID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpIHsgLy9DaGFuZ2UgdG8gTWV0cmljIChDKSwgcnVuIGdldEdlb0NvZGVcbiAgICAgICAgICAgIHVuaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaW1wZXJpYWwnKTtcbiAgICAgICAgICAgIHVuaXRCdG4uY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gICAgICAgICAgICB1bml0cyA9IFwibWV0cmljXCI7XG4gICAgICAgICAgICB1bml0U2lnbiA9IFwiQ8KwXCJcbiAgICAgICAgICAgIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpO1xuICAgICAgICB9IGVsc2UgeyAvL0NoYW5nZSB0byBJbXBlcmlhbCAoRiksIHJ1biBnZXRHZW9Db2RlXG4gICAgICAgICAgICB1bml0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21ldHJpYycpO1xuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgICAgICAgICAgdW5pdHMgPSBcImltcGVyaWFsXCI7XG4gICAgICAgICAgICB1bml0U2lnbiA9IFwiRsKwXCJcbiAgICAgICAgICAgIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRCdG4uaW5uZXJIVE1MID0gdW5pdFNpZ247XG4gICAgfSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIb3VybHlGb3JlY2FzdCgpIHsgICAgXG4gICAgY29uc3QgaG91ckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJEaXYuY2xhc3NOYW1lID0gJ2hvdXJEaXYnO1xuICAgIGhvdXJseUZvcmVjYXN0RGF0YS5hcHBlbmRDaGlsZChob3VyRGl2KTtcblxuICAgIGNvbnN0IGhvdXJEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91ckRheS5pbm5lckhUTUwgPSBgJHtkYXlOYW1lfSDigKIgJHtsb2NhbEZvcm1hdHRlZFRpbWV9YDtcbiAgICBob3VyRGF5LmNsYXNzTmFtZSA9ICdob3VyRGF5JztcbiAgICBob3VyRGl2LmFwcGVuZENoaWxkKGhvdXJEYXkpO1xuXG4gICAgY29uc3QgaG91clRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91clRlbXAuaW5uZXJIVE1MID0gaG91cmx5VGVtcDtcbiAgICBob3VyVGVtcC5jbGFzc05hbWUgPSAnaG91clRlbXAnO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91clRlbXApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEYWlseUZvcmVjYXN0KCkge1xuICAgIGNvbnNvbGUubG9nKGF2ZXJhZ2VUZW1wcyk7XG4gICAgXG4gICAgLy8gSW5wdXQgZGF5cyBpbiBvcmRlciBvZiB3ZWVrIHN0YXJ0aW5nIHdpdGggdGhlIGRheSBhZnRlciB0aGUgY3VycmVudCBkYXlcbiAgICBjb25zdCBvcmRlcmVkRGF5cyA9IFtdO1xuICAgIGN1cnJlbnREYXkgPSBkYXlPZldlZWs7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IChjdXJyZW50RGF5ICsgaSkgJSA3O1xuICAgICAgICBjb25zdCBkYXlOYW1lID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddW2RheU9mV2Vla107XG4gICAgICAgIGlmIChhdmVyYWdlVGVtcHNbZGF5TmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9yZGVyZWREYXlzLnB1c2goZGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGRheSB0ZW1wcyBpbiBzcGVjaWZpZWQgb3JkZXJcbiAgICBvcmRlcmVkRGF5cy5mb3JFYWNoKGRheSA9PiB7ICAgIFxuICAgICAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5RGl2LmNsYXNzTmFtZSA9ICdkYXlEaXYnO1xuICAgICAgICBkYWlseUZvcmVjYXN0RGF0YS5hcHBlbmRDaGlsZChkYXlEaXYpO1xuXG4gICAgICAgIGNvbnN0IGRheURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGF5RGF5LmlubmVySFRNTCA9IGAke2RheX1gO1xuICAgICAgICBkYXlEYXkuY2xhc3NOYW1lID0gJ2RheURheSc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlEYXkpO1xuXG4gICAgICAgIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRheVRlbXAuaW5uZXJIVE1MID0gYXZlcmFnZVRlbXBzW2RheV0gKyB1bml0U2lnbjtcbiAgICAgICAgZGF5VGVtcC5jbGFzc05hbWUgPSAnZGF5VGVtcCc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlUZW1wKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gbG9jYWxEYXRlLmdldFVUQ0hvdXJzKCk7IC8vIFVzZSBnZXRVVENIb3VycygpIGJlY2F1c2UgeW91J3ZlIG1hbnVhbGx5IGFkanVzdGVkIGxvY2FsRGF0ZSB0byByZXByZXNlbnQgbG9jYWwgdGltZVxuXG4gICAgaWYoaG91cnMgPj0gMTcpIHtcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnZXZlbmluZyc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdhZnRlcm5vb24nOyAgLy8gQWZ0ZXJub29uXG4gICAgfSBlbHNlIGlmKGhvdXJzID49Nikge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdtb3JuaW5nJzsgLy9Nb3JuaW5nXG4gICAgfSBlbHNlIGlmKGhvdXJzID49NCl7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2Rhd24nOyAvL0Rhd25cbiAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICduaWdodCc7IC8vTmlnaHRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSWNvbih3ZWF0aGVyRGVzY3JpcHRpb24pIHtcbiAgICBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9vdmVyY2FzdC5wbmdcIlxuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy90aHVuZGVyLnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9zcHJpbmtsZXMucG5nXCJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3JhaW4nKSl7XG4gICAgICAgIGljb25JbWcgPSBcImljb25zL3JhaW55LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdzbm93Jykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9zbm93LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpKXtcbiAgICAgICAgaWNvbkltZyA9IFwiaWNvbnMvY2xlYXItZGF5LnBuZ1wiXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gaWNvbkltZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5cbmV4cG9ydCB7IGhvdXJseUZvcmVjYXN0RGF0YSwgZGFpbHlGb3JlY2FzdERhdGEsIHVuaXRTaWduIH07IiwiaW1wb3J0IHsgaG91cmx5Rm9yZWNhc3REYXRhLCBkYWlseUZvcmVjYXN0RGF0YSB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBob3VybHlUZW1wIH0gZnJvbSBcIi4vYXBpXCI7XG5cbmxldCBsb2NhbEZvcm1hdHRlZERhdGUgPSAnJztcbmxldCBsb2NhbEZvcm1hdHRlZFRpbWUgPSAnJztcbmxldCBob3VycyA9IDA7XG5sZXQgY3VycmVudFRpbWUgPSBmYWxzZTtcbmxldCBmb3JlY2FzdFVUQyA9IDA7XG5sZXQgbG9jYWxUaW1lem9uZSA9IDA7XG5sZXQgbmlnaHQgPSBmYWxzZTtcbmxldCBmb3JtYXR0ZWREYXRlID0gJyc7XG5sZXQgZGF5TmFtZSA9ICcnO1xubGV0IGRheU9mV2VlayA9ICcnO1xubGV0IGZvcm1hdHRlZFRpbWUgPSAnJztcbmxldCBhdmVyYWdlVGVtcCA9IDA7XG5sZXQgdGVtcGVyYXR1cmVzQnlEYXkgPSB7XG4gICAgJ1N1bic6IFtdLFxuICAgICdNb24nOiBbXSxcbiAgICAnVHVlcyc6IFtdLFxuICAgICdXZWQnOiBbXSxcbiAgICAnVGh1cic6IFtdLFxuICAgICdGcmknOiBbXSxcbiAgICAnU2F0JzogW11cbn07XG5sZXQgYXZlcmFnZVRlbXBzID0ge1xuICAgICdTdW4nOiBbXSxcbiAgICAnTW9uJzogW10sXG4gICAgJ1R1ZXMnOiBbXSxcbiAgICAnV2VkJzogW10sXG4gICAgJ1RodXInOiBbXSxcbiAgICAnRnJpJzogW10sXG4gICAgJ1NhdCc6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxvY2F0aW9uKGxvY2F0aW9uU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydHMgPSBsb2NhdGlvblN0cmluZy5zcGxpdCgnLCcpO1xuICAgIC8vIEV4dHJhY3QgcGFydHMgdG8ga2VlcFxuICAgIGxldCBjaXR5ID0gcGFydHNbMF0udHJpbSgpOyAvLyBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2VcbiAgICBsZXQgc3RhdGUgPSAnJztcbiAgICBsZXQgY291bnRyeSA9ICcnO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGVub3VnaCBwYXJ0c1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMykge1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBwYXJ0IGlzIFwiVW5pdGVkIFN0YXRlc1wiLCByZXBsYWNlIGl0IHdpdGggXCJVU0FcIlxuICAgICAgICBpZiAocGFydHNbcGFydHMubGVuZ3RoIC0gMV0udHJpbSgpID09PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSAnVVNBJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS50cmltKCk7IC8vIE90aGVyd2lzZSwgYXNzdW1lIHRoZSBsYXN0IHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgc2Vjb25kIGxhc3QgcGFydCBpcyBub3QgYSBzdGF0ZSBhYmJyZXZpYXRpb24sIHVzZSBpdCBhcyB0aGUgc3RhdGVcbiAgICAgICAgaWYgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdLnRyaW0oKS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgIHN0YXRlID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMl0udHJpbSgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gSWYgb25seSB0d28gcGFydHMsIGFzc3VtZSB0aGUgc2Vjb25kIHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgY291bnRyeSA9IHBhcnRzWzFdLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvLyBDb25jYXRlbmF0ZSB0aGUgcGFydHMgaW50byB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICBsZXQgcGFyc2VkTG9jYXRpb24gPSBjaXR5O1xuICAgIGlmIChzdGF0ZSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtzdGF0ZX1gO1xuICAgIH1cbiAgICBpZiAoY291bnRyeSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtjb3VudHJ5fWA7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRMb2NhdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZShmb3JlY2FzdFVUQywgbG9jYWxUaW1lem9uZSkge1xuICAgIC8vIEFkanVzdCB0aGUgdGltZXN0YW1wIGJ5IHRoZSB0aW1lem9uZSBvZmZzZXQgdG8gZ2V0IHRoZSBsb2NhbCB0aW1lXG4gICAgY29uc3QgbG9jYWxUaW1lc3RhbXAgPSBmb3JlY2FzdFVUQyArIGxvY2FsVGltZXpvbmU7XG4gICAgbGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZXN0YW1wICogMTAwMCk7XG4gICAgbGV0IGxvY2FsVGltZSA9IGxvY2FsRGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyBBcnJheSBvZiBtb250aCBuYW1lc1xuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbiAgICBcbiAgICAvLyBFeHRyYWN0IHRoZSBtb250aCwgZGF5LCBhbmQgeWVhciBmcm9tIGxvY2FsRGF0ZVxuICAgIGNvbnN0IG1vbnRoID0gbW9udGhOYW1lc1tsb2NhbERhdGUuZ2V0VVRDTW9udGgoKV07IC8vIGdldFVUQ01vbnRoKCkgcmV0dXJucyBhIHplcm8tYmFzZWQgaW5kZXhcbiAgICBjb25zdCBkYXkgPSBsb2NhbERhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBsb2NhbERhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblxuICAgIC8vIEZvcm1hdCB0aGUgbG9jYWwgZGF0ZSBhbmQgdGltZVxuICAgIGxvY2FsRm9ybWF0dGVkRGF0ZSA9IGAke21vbnRofSAke2RheX0sICR7eWVhcn1gOyAvLyBGb3JtYXQgdGhlIGxvY2FsIGRhdGUgYXMgXCJNb250aCBELCBZWVlZXCJcbiAgICBsb2NhbEZvcm1hdHRlZFRpbWUgPSBmb3JtYXRUaW1lKGxvY2FsRGF0ZSk7XG5cbiAgICAvLyBHZXQgZGF5IG9mIHRoZSB3ZWVrXG4gICAgZGF5TmFtZSA9IGdldERheShsb2NhbERhdGUpO1xuXG59XG5leHBvcnQgZnVuY3Rpb24gZGF5VGVtcHMoaG91cmx5VGVtcCwgZGF5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgaG91cmx5VGVtcCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIHJlbW92ZSB0aGUgdW5pdFxuICAgIGNvbnN0IHRlbXBWYWx1ZSA9IHBhcnNlRmxvYXQoaG91cmx5VGVtcCk7XG5cbiAgICAvLyBTdG9yZSB0aGUgdGVtcGVyYXR1cmUgdmFsdWUgaW4gdGhlIGNvcnJlc3BvbmRpbmcgZGF5IGFycmF5XG4gICAgaWYgKCFpc05hTih0ZW1wVmFsdWUpKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlc0J5RGF5W2RheU5hbWVdLnB1c2godGVtcFZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JlY2FzdHMoKSB7XG4gICAgLy9Ib3VybHkgRm9yZWNhc3REYXRhIERpc3BsYXlcbiAgICB3aGlsZSAoaG91cmx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaG91cmx5Rm9yZWNhc3REYXRhLnJlbW92ZUNoaWxkKGhvdXJseUZvcmVjYXN0RGF0YS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKGRhaWx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGFpbHlGb3JlY2FzdERhdGEucmVtb3ZlQ2hpbGQoZGFpbHlGb3JlY2FzdERhdGEuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy9EYWlseSBGb3JlY2FzdCBEYXRhIGZvciBjYWxjdWxhdGlvblxuICAgIHRlbXBlcmF0dXJlc0J5RGF5ID0ge1xuICAgICAgICAgICAgJ1N1bic6IFtdLFxuICAgICAgICAgICAgJ01vbic6IFtdLFxuICAgICAgICAgICAgJ1R1ZXMnOiBbXSxcbiAgICAgICAgICAgICdXZWQnOiBbXSxcbiAgICAgICAgICAgICdUaHVyJzogW10sXG4gICAgICAgICAgICAnRnJpJzogW10sXG4gICAgICAgICAgICAnU2F0JzogW11cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIEFkZCBsZWFkaW5nIHplcm8gaWYgbmVlZGVkXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gQWRkIGxlYWRpbmcgemVybyBpZiBuZWVkZWRcbiAgICBjb25zdCB0b2RheURhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIHJldHVybiB0b2RheURhdGU7XG59XG5mdW5jdGlvbiBnZXREYXkobG9jYWxEYXRlKSB7XG4gICAgZGF5T2ZXZWVrID0gbG9jYWxEYXRlLmdldFVUQ0RheSgpO1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J107XG4gICAgZGF5TmFtZSA9IGRheXNPZldlZWtbZGF5T2ZXZWVrXTtcblxuICAgIHJldHVybiBkYXlOYW1lO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZShsb2NhbERhdGUpIHtcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XG4gICAgLy8gQ2FsY3VsYXRlIEFNIG9yIFBNXG4gICAgaG91cnMgPSBsb2NhbERhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gKCcwJyArIGxvY2FsRGF0ZS5nZXRVVENNaW51dGVzKCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcblxuICAgIC8vIENvbnZlcnQgdG8gMTItaG91ciBmb3JtYXRcbiAgICBsZXQgaG91cnMxMiA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMxMiA9IGhvdXJzMTIgPyBob3VyczEyIDogMTI7IC8vIENvbnZlcnQgMCB0byAxMiBmb3IgbWlkbmlnaHRcblxuICAgIC8vIEZvcm1hdCB0aGUgbG9jYWwgdGltZSB3aXRoIEFNIG9yIFBNXG4gICAgaWYgKGN1cnJlbnRUaW1lID09PSB0cnVlKSB7XG4gICAgICAgIGZvcm1hdHRlZCA9IGhvdXJzMTIrICc6JysgbWludXRlcysgYW1wbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXR0ZWQgPSBob3VyczEyKyBhbXBtO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50VGltZSA9IGZhbHNlO1xuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQXZlcmFnZXMoKSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIHRlbXBlcmF0dXJlc0J5RGF5IGFzc2lnbmluZyBib3RoIHRoZSBkYXkgYW5kIHRlbXBlcmF0dXJlXG4gICAgZm9yIChjb25zdCBbZGF5LCB0ZW1wc10gb2YgT2JqZWN0LmVudHJpZXModGVtcGVyYXR1cmVzQnlEYXkpKSB7XG5cbiAgICAgICAgLy9DYWxjdWxhdGUgQXZlcmFnZSBUZW1wIChvbmx5IGZvciBkYXlzIHdpdGggdGVtcGVyYXR1cmUgZGF0YSlcbiAgICAgICAgaWYgKHRlbXBzLmxlbmd0aCA+IDApIHsgXG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdGVtcHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmVyYWdlVGVtcCA9IHN1bSAvIHRlbXBzLmxlbmd0aFxuICAgICAgICAgICAgYXZlcmFnZVRlbXBzW2RheV0gPSBhdmVyYWdlVGVtcC50b0ZpeGVkKDApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhdmVyYWdlVGVtcHNbZGF5XSA9IG51bGw7IC8vIEluZGljYXRlIG5vIGRhdGEgZm9yIHRoaXMgZGF5XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLy8gU2V0ICYgR2V0IFZhcmlhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRUaW1lKHZhbHVlKSB7XG4gICAgY3VycmVudFRpbWUgPSB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRIb3Vycyh2YWx1ZSkge1xuICAgIG5pZ2h0ID0gaG91cnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3VycygpIHtcbiAgICByZXR1cm4gaG91cnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROaWdodCh2YWx1ZSkge1xuICAgIG5pZ2h0ID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROaWdodCgpIHtcbiAgICByZXR1cm4gbmlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRmb3JlY2FzdFVUQyh2YWx1ZSkge1xuICAgIGZvcmVjYXN0VVRDID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JlY2FzdFVUQygpIHtcbiAgICByZXR1cm4gZm9yZWNhc3RVVEM7XG59XG5cblxuZXhwb3J0IHsgbG9jYWxGb3JtYXR0ZWREYXRlLCBsb2NhbEZvcm1hdHRlZFRpbWUsIGRheU5hbWUsIGF2ZXJhZ2VUZW1wcywgZGF5T2ZXZWVrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2dldEdlb0NvZGV9IGZyb20gJy4uL3NyYy9hcGknXG5cbmxldCBpY29uSW1nID0gXCJcIjtcbmxldCBsb2NhdGlvblNlYXJjaCA9ICdQaG9lbml4JztcbmxldCBob3VybHlUZW1wID0gMDtcbmxldCBmb3JlY2FzdFVUQyA9IDA7XG5sZXQgbG9jYWxUaW1lem9uZSA9IDA7XG5sZXQgbmlnaHQgPSBmYWxzZTtcbmxldCBmb3JtYXR0ZWREYXRlID0gJyc7XG5sZXQgZGF5TmFtZSA9ICcnO1xubGV0IGRheU9mV2VlayA9ICcnO1xubGV0IGN1cnJlbnREYXkgPSAnJztcbmxldCBmb3JtYXR0ZWRUaW1lID0gJyc7XG5sZXQgYXZlcmFnZVRlbXAgPSAwO1xuXG5cblxuLy8gY29uc3QgdG9kYXlEYXRlID0gZ2V0VG9kYXlzRGF0ZSgpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBnZXRHZW9Db2RlKGxvY2F0aW9uU2VhcmNoKTtcbn1cblxuXG5cblxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwidW5pdFNpZ24iLCJ1cGRhdGVCYWNrZ3JvdW5kIiwic2hvd0xvYWQiLCJoaWRlTG9hZCIsImRpc3BsYXlIb3VybHlGb3JlY2FzdCIsImRpc3BsYXlEYWlseUZvcmVjYXN0IiwibG9jYWxGb3JtYXR0ZWREYXRlIiwibG9jYWxGb3JtYXR0ZWRUaW1lIiwiZGF5TmFtZSIsImdldEhvdXJzIiwic2V0Q3VycmVudFRpbWUiLCJnZXROaWdodCIsInNldE5pZ2h0IiwiZ2V0Rm9yZWNhc3RVVEMiLCJzZXRmb3JlY2FzdFVUQyIsImNvbnZlcnRUaW1lIiwiY2xlYXJGb3JlY2FzdHMiLCJkYXlUZW1wcyIsImNhbGN1bGF0ZUF2ZXJhZ2VzIiwibG9jYXRpb25PdXRwdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lT3V0cHV0IiwiY3VycmVudFRlbXAiLCJyZWFsdGltZUxvdyIsInJlYWx0aW1lSGlnaCIsInJlYWx0aW1lRGVzY3JpcHRpb24iLCJpY29uIiwidW5pdHMiLCJsb2NhbERhdGUiLCJEYXRlIiwiaG91cmx5VGVtcCIsImFwaUtleSIsImdldEdlb0NvZGUiLCJfeCIsIl9nZXRHZW9Db2RlIiwiX2NhbGxlZSIsImxvY2F0aW9uU2VhcmNoIiwidXJsIiwicmVzcG9uc2UiLCJnZW9jb2RlIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNvbmNhdCIsImZldGNoIiwibW9kZSIsImpzb24iLCJsYXQiLCJsb24iLCJpbm5lckhUTUwiLCJnZXRXZWF0aGVyIiwiZ2V0Rm9yZWNhc3QiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJfeDIiLCJfeDMiLCJfZ2V0V2VhdGhlciIsIl9jYWxsZWUyIiwid2VhdGhlckRhdGEiLCJ0aW1lem9uZSIsImN1cnJlbnREYXRlIiwiY3VycmVudFVUQyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImdldFRpbWUiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJpbmNsdWRlcyIsInNyYyIsIl94NCIsIl94NSIsIl9nZXRGb3JlY2FzdCIsIl9jYWxsZWUzIiwiZm9yZWNhc3REYXRhIiwibG9jYWxUaW1lem9uZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxpc3QiLCJpbmRleCIsImR0IiwiYXZlcmFnZVRlbXBzIiwiZGF5T2ZXZWVrIiwidW5pdEJ0biIsImxvY2F0aW9uSW5wdXQiLCJob3VybHlGb3JlY2FzdERhdGEiLCJkYWlseUZvcmVjYXN0RGF0YSIsImJvZHkiLCJjdXJyZW50RGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJob3VyRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaG91ckRheSIsImhvdXJUZW1wIiwib3JkZXJlZERheXMiLCJkYXkiLCJkYXlEaXYiLCJkYXlEYXkiLCJkYXlUZW1wIiwiaG91cnMiLCJnZXRVVENIb3VycyIsInVwZGF0ZUljb24iLCJ3ZWF0aGVyRGVzY3JpcHRpb24iLCJpY29uSW1nIiwic3R5bGUiLCJkaXNwbGF5IiwiY3VycmVudFRpbWUiLCJmb3JlY2FzdFVUQyIsIm5pZ2h0IiwiZm9ybWF0dGVkRGF0ZSIsImZvcm1hdHRlZFRpbWUiLCJhdmVyYWdlVGVtcCIsInRlbXBlcmF0dXJlc0J5RGF5IiwicGFyc2VMb2NhdGlvbiIsImxvY2F0aW9uU3RyaW5nIiwicGFydHMiLCJzcGxpdCIsInRyaW0iLCJwYXJzZWRMb2NhdGlvbiIsImxvY2FsVGltZXN0YW1wIiwibG9jYWxUaW1lIiwibW9udGhOYW1lcyIsIm1vbnRoIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwieWVhciIsImdldFVUQ0Z1bGxZZWFyIiwiZm9ybWF0VGltZSIsImdldERheSIsInRlbXBWYWx1ZSIsInBhcnNlRmxvYXQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJnZXRUb2RheXNEYXRlIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsIlN0cmluZyIsImdldE1vbnRoIiwicGFkU3RhcnQiLCJnZXREYXRlIiwidG9kYXlEYXRlIiwiZ2V0VVRDRGF5IiwiZGF5c09mV2VlayIsImZvcm1hdHRlZCIsIm1pbnV0ZXMiLCJnZXRVVENNaW51dGVzIiwiYW1wbSIsImhvdXJzMTIiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsInRlbXBzIiwic3VtIiwidG9GaXhlZCIsImdldEN1cnJlbnRUaW1lIiwic2V0SG91cnMiLCJ3aW5kb3ciLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9