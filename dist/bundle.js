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
/* harmony export */   getGeoCode: () => (/* binding */ getGeoCode)
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
var unitSign = "F°";
var currentTime = false;
var localDate = new Date();
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
          currentTime = true;
          timezone = weatherData.timezone;
          currentDate = new Date();
          currentUTC = currentDate.getTime() / 1000;
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.convertTime)(currentUTC, timezone);
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.updateBackground)(localDate);

          // Update if day or night
          if (hours >= 17 || hours <= 5) {
            night = true;
          } else {
            night = false;
          }

          //Display temp values
          timeOutput.innerHTML = "".concat(localFormattedDate, " | ").concat(localFormattedTime);
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
          if (realtimeDescription.innerHTML.includes('clouds') && night == false) {
            icon.src = "icons/overcast.png";
          } else if (realtimeDescription.innerHTML.includes('thunderstorm')) {
            icon.src = "icons/thunder.png";
          } else if (realtimeDescription.innerHTML.includes('drizzle')) {
            icon.src = "icons/sprinkles.png";
          } else if (realtimeDescription.innerHTML.includes('rain')) {
            icon.src = "icons/rainy.png";
          } else if (realtimeDescription.innerHTML.includes('snow')) {
            icon.src = "icons/snow.png";
          } else if (realtimeDescription.innerHTML.includes('clear') && night == false) {
            icon.src = "icons/clear-day.png";
          } else if (realtimeDescription.innerHTML.includes('clear') && night == true) {
            icon.src = "icons/clear-night.png";
          } else if (realtimeDescription.innerHTML.includes('clouds') && night == true) {
            icon.src = "icons/cloudy-night.png";
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
          console.log(temperaturesByDay);

          // Get Hourly Forecast Data 
          forecastData.list.forEach(function (index) {
            hourlyTemp = Math.round(index.main.temp) + unitSign;
            forecastUTC = index.dt;
            (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.convertTime)(forecastUTC, localTimezone);
            displayHourlyForecast();
            dayTemps(hourlyTemp, dayName);
          });
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.convertTime)(forecastData.list[0].dt, localTimezone);
          calculateAverages();
          displayDailyForecast();
          _context3.next = 21;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 21:
          ;
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 18]]);
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
/* harmony export */   displayDailyForecast: () => (/* binding */ displayDailyForecast),
/* harmony export */   displayHourlyForecast: () => (/* binding */ displayHourlyForecast),
/* harmony export */   hideLoad: () => (/* binding */ hideLoad),
/* harmony export */   showLoad: () => (/* binding */ showLoad),
/* harmony export */   updateBackground: () => (/* binding */ updateBackground),
/* harmony export */   updateIcon: () => (/* binding */ updateIcon)
/* harmony export */ });
var unitBtn = document.querySelector('.unitBtn');
var locationInput = document.querySelector('.locationInput');
var hourlyForecastData = document.querySelector('.hourlyForecastData');
var dailyForecastData = document.querySelector('.dailyForecastData');
var body = document.querySelector('body');
var localDate = new Date();
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded and parsed");
  console.log(locationInput);
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
  hourDay.innerHTML = "".concat(dayName, " \u2022 ").concat(localFormattedTime);
  hourDay.className = 'hourDay';
  hourDiv.appendChild(hourDay);

  // const hourTime = document.createElement('p');
  // hourTime.innerHTML = `${localFormattedTime}`;
  // hourTime.className = 'hourTime';
  // hourDiv.appendChild(hourTime);

  var hourTemp = document.createElement('p');
  hourTemp.innerHTML = hourlyTemp;
  hourTemp.className = 'hourTemp';
  hourDiv.appendChild(hourTemp);
}
function displayDailyForecast() {
  console.log(averageTemps);

  // Input days in order of week starting with the day after the current day
  var orderedDays = [];
  currentDay = dayOfWeek;
  for (var i = 0; i <= 6; i++) {
    var _dayOfWeek = (currentDay + i) % 7;
    var _dayName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'][_dayOfWeek];
    if (averageTemps[_dayName] !== null) {
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
    dayTemp.innerHTML = averageTemps[day] + unitSign;
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
/* harmony export */   clearForecasts: () => (/* binding */ clearForecasts),
/* harmony export */   convertTime: () => (/* binding */ convertTime)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  localDate = new Date(localTimestamp * 1000);
  localTime = localDate.getTime();

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
  while (hourlyForecastData.firstChild) {
    hourlyForecastData.removeChild(hourlyForecastData.firstChild);
  }
  while (dailyForecastData.firstChild) {
    dailyForecastData.removeChild(dailyForecastData.firstChild);
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
var localFormattedDate = '';
var localFormattedTime = '';
var hours = 0;
var night = false;
var formattedDate = '';
var dayName = '';
var dayOfWeek = '';
var currentDay = '';
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

// const todayDate = getTodaysDate();

window.onload = function () {
  (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.getGeoCode)(locationSearch);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE1BQU0sR0FBRyxZQUFVO0VBQ3RCckosb0RBQVUsQ0FBQ0ksY0FBYyxDQUFDO0FBQzlCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzbGludHByYWMvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dMb2FkLCBoaWRlTG9hZCB9IGZyb20gJy4uL3NyYy91aSdcbmltcG9ydCB7IGNvbnZlcnRUaW1lLCBjbGVhckZvcmVjYXN0cywgdXBkYXRlQmFja2dyb3VuZCB9IGZyb20gJy4uL3NyYy91dGlsaXRpZXMnXG5cbmNvbnN0IGxvY2F0aW9uT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uT3V0cHV0Jyk7XG5jb25zdCB0aW1lT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVPdXRwdXQnKTtcbmNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJyk7XG5jb25zdCByZWFsdGltZUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZUxvdycpO1xuY29uc3QgcmVhbHRpbWVIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWx0aW1lSGlnaCcpO1xuY29uc3QgcmVhbHRpbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZURlc2NyaXB0aW9uJyk7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcblxubGV0IHVuaXRzID0gXCJpbXBlcmlhbFwiO1xubGV0IHVuaXRTaWduID0gXCJGwrBcIjtcbmxldCBjdXJyZW50VGltZSA9IGZhbHNlO1xubGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKCk7XG5cblxuY29uc3QgYXBpS2V5ID0gXCJiMDg5MDRlZDMxMzJjM2M5YTQ2ZWYyYWJjYWNiNjJkNlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCkgeyAvL0dldHMgbG9jYXRpb24gaW5mbywgcnVucyBnZXRXZWF0aGVyICYgZ2V0Rm9yZWNhc3QsIGRpc3BsYXlzIGNvbnRlbnRcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvblNlYXJjaH0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gXG4gICAgc2hvd0xvYWQoKTtcblxuICB0cnkge1xuICAgICAgLy9NYWtlIGZldGNoIHJlcXVlc3QgYW5kIHN0b3JlcyBpdCBhcyByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAvL1N0b3JlIHRoZSBKU09OIFxuICAgICAgY29uc3QgZ2VvY29kZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGxldCBjaXR5ID0gZ2VvY29kZVswXS5uYW1lO1xuICAgICAgbGV0IHN0YXRlID0gZ2VvY29kZVswXS5zdGF0ZTtcbiAgICAgIGxldCBjb3VudHJ5ID0gZ2VvY29kZVswXS5jb3VudHJ5O1xuICAgICAgbGV0IGxhdGl0dWRlID0gZ2VvY29kZVswXS5sYXQ7XG4gICAgICBsZXQgbG9uZ2l0dWRlID0gZ2VvY29kZVswXS5sb247XG5cbiAgICAgIC8vRGlzcGxheSBMb2NhdGlvblxuICAgICAgaWYgKGNvdW50cnkgPT09ICdVUycpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uT3V0cHV0LmlubmVySFRNTCA9IGNpdHkgKyBcIiwgXCIgKyBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbk91dHB1dC5pbm5lckhUTUwgPSBjaXR5ICsgXCIsIFwiICsgc3RhdGUgKyBcIiwgXCIgKyBjb3VudHJ5O1xuICAgICAgfVxuXG4gICAgICBnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgZ2V0Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICBoaWRlTG9hZCgpO1xuXG4gIH0gY2F0Y2ggKGUpe1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGxvY2F0aW9uT3V0cHV0LmlubmVySFRNTCA9ICdDaXR5IEVycm9yLi4uIFBsZWFzZSBlbnRlciBjb3JyZWN0IGNpdHkgbmFtZSc7XG5cbiAgICAgIGhpZGVMb2FkKCk7XG4gIH07ICBcbiAgXG59XG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9JHt1bml0c30mbGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHthcGlLZXl9YFxuICAgIHRyeSB7XG4gICAgICAgIC8vRmV0Y2ggcmVxdWVzdCBhbmQgc3RvcmUgaXQgYXMgcmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAgIC8vU3RvcmUgdGhlIEpTT04gXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICAgICAgLy9HZXQgVGltZVxuICAgICAgICBjdXJyZW50VGltZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lID0gd2VhdGhlckRhdGEudGltZXpvbmU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgY3VycmVudFVUQyA9IChjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gMTAwMDsgXG4gICAgXG4gICAgICAgIGNvbnZlcnRUaW1lKGN1cnJlbnRVVEMsIHRpbWV6b25lKTtcbiAgICAgICAgdXBkYXRlQmFja2dyb3VuZChsb2NhbERhdGUpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBpZiBkYXkgb3IgbmlnaHRcbiAgICAgICAgaWYgKGhvdXJzID49IDE3IHx8IGhvdXJzIDw9IDUpIHtcbiAgICAgICAgICAgIG5pZ2h0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRGlzcGxheSB0ZW1wIHZhbHVlc1xuICAgICAgICB0aW1lT3V0cHV0LmlubmVySFRNTCA9IGAke2xvY2FsRm9ybWF0dGVkRGF0ZX0gfCAke2xvY2FsRm9ybWF0dGVkVGltZX1gO1xuICAgICAgICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gICAgICAgIHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBpZiAodW5pdHMgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgICAgICAgIHJlYWx0aW1lTG93LmlubmVySFRNTCA9IFwiTDogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4pICsgXCLCsEZcIjtcbiAgICAgICAgICAgIHJlYWx0aW1lSGlnaC5pbm5lckhUTUwgPSBcIkg6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4KSArIFwiwrBGXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFsdGltZUxvdy5pbm5lckhUTUwgPSBcIkw6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluKSArIFwiwrBDXCI7XG4gICAgICAgICAgICByZWFsdGltZUhpZ2guaW5uZXJIVE1MID0gXCJIOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCkgKyBcIsKwQ1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9VcGRhdGUgaWNvblxuICAgICAgICBpZiAocmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ2Nsb3VkcycpICYmIG5pZ2h0ID09IGZhbHNlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCJpY29ucy9vdmVyY2FzdC5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCd0aHVuZGVyc3Rvcm0nKSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvdGh1bmRlci5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcImljb25zL3Nwcmlua2xlcy5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdyYWluJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcImljb25zL3JhaW55LnBuZ1wiXG4gICAgICAgIH0gZWxzZSBpZiAocmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3Nub3cnKSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvc25vdy5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpICYmIG5pZ2h0ID09IGZhbHNlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCJpY29ucy9jbGVhci1kYXkucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xlYXInKSAmJiBuaWdodCA9PSB0cnVlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCJpY29ucy9jbGVhci1uaWdodC5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbG91ZHMnKSAmJiBuaWdodCA9PSB0cnVlKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCJpY29ucy9jbG91ZHktbmlnaHQucG5nXCJcbiAgICAgICAgfTtcbiAgfSBjYXRjaCAoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfTsgIFxufVxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/dW5pdHM9JHt1bml0c30mbGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHthcGlLZXl9YFxuICAgIHRyeSB7XG4gICAgICAgIC8vTWFrZSBmZXRjaCByZXF1ZXN0IGFuZCBzdG9yZXMgaXQgYXMgcmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAgIC8vU3RvcmUgdGhlIEpTT04gXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcblxuICAgICAgICAvL1N0b3JlIGNpdHkgdGltZSB6b25lIChvZmZzZXQgc2Vjb25kcylcbiAgICAgICAgbGV0IGxvY2FsVGltZXpvbmUgPSBmb3JlY2FzdERhdGEuY2l0eS50aW1lem9uZTtcblxuICAgICAgICAvLyBDbGVhciBPbGQgRGF0YVxuICAgICAgICBjbGVhckZvcmVjYXN0cygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBlcmF0dXJlc0J5RGF5KTtcblxuICAgICAgICAvLyBHZXQgSG91cmx5IEZvcmVjYXN0IERhdGEgXG4gICAgICAgIGZvcmVjYXN0RGF0YS5saXN0LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgaG91cmx5VGVtcCA9IE1hdGgucm91bmQoaW5kZXgubWFpbi50ZW1wKSArIHVuaXRTaWduO1xuICAgICAgICAgICAgZm9yZWNhc3RVVEMgPSBpbmRleC5kdDtcblxuICAgICAgICAgICAgY29udmVydFRpbWUoZm9yZWNhc3RVVEMsIGxvY2FsVGltZXpvbmUpO1xuICAgICAgICAgICAgZGlzcGxheUhvdXJseUZvcmVjYXN0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRheVRlbXBzKGhvdXJseVRlbXAsIGRheU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnZlcnRUaW1lKGZvcmVjYXN0RGF0YS5saXN0WzBdLmR0LCBsb2NhbFRpbWV6b25lKTtcbiAgICAgICAgY2FsY3VsYXRlQXZlcmFnZXMoKTtcbiAgICAgICAgZGlzcGxheURhaWx5Rm9yZWNhc3QoKTtcbiAgICAgICAgXG4gIH0gY2F0Y2ggKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH07ICBcbn1cbiIsIlxuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0QnRuJyk7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uSW5wdXQnKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHlGb3JlY2FzdERhdGEnKTtcbmNvbnN0IGRhaWx5Rm9yZWNhc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Rm9yZWNhc3REYXRhJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgbG9jYWxEYXRlID0gbmV3IERhdGUoKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiRE9NIGZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkXCIpO1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uSW5wdXQpO1xuICAgIHVwZGF0ZUJhY2tncm91bmQobG9jYWxEYXRlKTtcbiAgICBsb2NhdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgbG9jYXRpb25TZWFyY2ggPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1bml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikgeyAvL0NoYW5nZSB0byBNZXRyaWMgKEMpLCBydW4gZ2V0R2VvQ29kZVxuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbXBlcmlhbCcpO1xuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICAgICAgICAgIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJDwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vQ2hhbmdlIHRvIEltcGVyaWFsIChGKSwgcnVuIGdldEdlb0NvZGVcbiAgICAgICAgICAgIHVuaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWV0cmljJyk7XG4gICAgICAgICAgICB1bml0QnRuLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgICB1bml0cyA9IFwiaW1wZXJpYWxcIjtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJGwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdEJ0bi5pbm5lckhUTUwgPSB1bml0U2lnbjtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseUZvcmVjYXN0KCkgeyAgICBcbiAgICBjb25zdCBob3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91ckRpdi5jbGFzc05hbWUgPSAnaG91ckRpdic7XG4gICAgaG91cmx5Rm9yZWNhc3REYXRhLmFwcGVuZENoaWxkKGhvdXJEaXYpO1xuXG4gICAgY29uc3QgaG91ckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyRGF5LmlubmVySFRNTCA9IGAke2RheU5hbWV9IOKAoiAke2xvY2FsRm9ybWF0dGVkVGltZX1gO1xuICAgIGhvdXJEYXkuY2xhc3NOYW1lID0gJ2hvdXJEYXknO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91ckRheSk7XG5cbiAgICAvLyBjb25zdCBob3VyVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBob3VyVGltZS5pbm5lckhUTUwgPSBgJHtsb2NhbEZvcm1hdHRlZFRpbWV9YDtcbiAgICAvLyBob3VyVGltZS5jbGFzc05hbWUgPSAnaG91clRpbWUnO1xuICAgIC8vIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91clRpbWUpO1xuXG4gICAgY29uc3QgaG91clRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91clRlbXAuaW5uZXJIVE1MID0gaG91cmx5VGVtcDtcbiAgICBob3VyVGVtcC5jbGFzc05hbWUgPSAnaG91clRlbXAnO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91clRlbXApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEYWlseUZvcmVjYXN0KCkge1xuICAgIGNvbnNvbGUubG9nKGF2ZXJhZ2VUZW1wcyk7XG4gICAgXG4gICAgLy8gSW5wdXQgZGF5cyBpbiBvcmRlciBvZiB3ZWVrIHN0YXJ0aW5nIHdpdGggdGhlIGRheSBhZnRlciB0aGUgY3VycmVudCBkYXlcbiAgICBjb25zdCBvcmRlcmVkRGF5cyA9IFtdO1xuICAgIGN1cnJlbnREYXkgPSBkYXlPZldlZWs7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IChjdXJyZW50RGF5ICsgaSkgJSA3O1xuICAgICAgICBjb25zdCBkYXlOYW1lID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddW2RheU9mV2Vla107XG4gICAgICAgIGlmIChhdmVyYWdlVGVtcHNbZGF5TmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9yZGVyZWREYXlzLnB1c2goZGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGRheSB0ZW1wcyBpbiBzcGVjaWZpZWQgb3JkZXJcbiAgICBvcmRlcmVkRGF5cy5mb3JFYWNoKGRheSA9PiB7ICAgIFxuICAgICAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5RGl2LmNsYXNzTmFtZSA9ICdkYXlEaXYnO1xuICAgICAgICBkYWlseUZvcmVjYXN0RGF0YS5hcHBlbmRDaGlsZChkYXlEaXYpO1xuXG4gICAgICAgIGNvbnN0IGRheURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGF5RGF5LmlubmVySFRNTCA9IGAke2RheX1gO1xuICAgICAgICBkYXlEYXkuY2xhc3NOYW1lID0gJ2RheURheSc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlEYXkpO1xuXG4gICAgICAgIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRheVRlbXAuaW5uZXJIVE1MID0gYXZlcmFnZVRlbXBzW2RheV0gKyB1bml0U2lnbjtcbiAgICAgICAgZGF5VGVtcC5jbGFzc05hbWUgPSAnZGF5VGVtcCc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlUZW1wKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gbG9jYWxEYXRlLmdldFVUQ0hvdXJzKCk7IC8vIFVzZSBnZXRVVENIb3VycygpIGJlY2F1c2UgeW91J3ZlIG1hbnVhbGx5IGFkanVzdGVkIGxvY2FsRGF0ZSB0byByZXByZXNlbnQgbG9jYWwgdGltZVxuXG4gICAgaWYoaG91cnMgPj0gMTcpIHtcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnZXZlbmluZyc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdhZnRlcm5vb24nOyAgLy8gQWZ0ZXJub29uXG4gICAgfSBlbHNlIGlmKGhvdXJzID49Nikge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdtb3JuaW5nJzsgLy9Nb3JuaW5nXG4gICAgfSBlbHNlIGlmKGhvdXJzID49NCl7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2Rhd24nOyAvL0Rhd25cbiAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICduaWdodCc7IC8vTmlnaHRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSWNvbih3ZWF0aGVyRGVzY3JpcHRpb24pIHtcbiAgICBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9vdmVyY2FzdC5wbmdcIlxuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy90aHVuZGVyLnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9zcHJpbmtsZXMucG5nXCJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3JhaW4nKSl7XG4gICAgICAgIGljb25JbWcgPSBcImljb25zL3JhaW55LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdzbm93Jykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9zbm93LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpKXtcbiAgICAgICAgaWNvbkltZyA9IFwiaWNvbnMvY2xlYXItZGF5LnBuZ1wiXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gaWNvbkltZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuIiwiXG5mdW5jdGlvbiBwYXJzZUxvY2F0aW9uKGxvY2F0aW9uU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydHMgPSBsb2NhdGlvblN0cmluZy5zcGxpdCgnLCcpO1xuICAgIC8vIEV4dHJhY3QgcGFydHMgdG8ga2VlcFxuICAgIGxldCBjaXR5ID0gcGFydHNbMF0udHJpbSgpOyAvLyBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2VcbiAgICBsZXQgc3RhdGUgPSAnJztcbiAgICBsZXQgY291bnRyeSA9ICcnO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGVub3VnaCBwYXJ0c1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMykge1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBwYXJ0IGlzIFwiVW5pdGVkIFN0YXRlc1wiLCByZXBsYWNlIGl0IHdpdGggXCJVU0FcIlxuICAgICAgICBpZiAocGFydHNbcGFydHMubGVuZ3RoIC0gMV0udHJpbSgpID09PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSAnVVNBJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS50cmltKCk7IC8vIE90aGVyd2lzZSwgYXNzdW1lIHRoZSBsYXN0IHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgc2Vjb25kIGxhc3QgcGFydCBpcyBub3QgYSBzdGF0ZSBhYmJyZXZpYXRpb24sIHVzZSBpdCBhcyB0aGUgc3RhdGVcbiAgICAgICAgaWYgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdLnRyaW0oKS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgIHN0YXRlID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMl0udHJpbSgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gSWYgb25seSB0d28gcGFydHMsIGFzc3VtZSB0aGUgc2Vjb25kIHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgY291bnRyeSA9IHBhcnRzWzFdLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvLyBDb25jYXRlbmF0ZSB0aGUgcGFydHMgaW50byB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICBsZXQgcGFyc2VkTG9jYXRpb24gPSBjaXR5O1xuICAgIGlmIChzdGF0ZSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtzdGF0ZX1gO1xuICAgIH1cbiAgICBpZiAoY291bnRyeSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtjb3VudHJ5fWA7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRMb2NhdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZShmb3JlY2FzdFVUQywgbG9jYWxUaW1lem9uZSkge1xuICAgIC8vIEFkanVzdCB0aGUgdGltZXN0YW1wIGJ5IHRoZSB0aW1lem9uZSBvZmZzZXQgdG8gZ2V0IHRoZSBsb2NhbCB0aW1lXG4gICAgY29uc3QgbG9jYWxUaW1lc3RhbXAgPSBmb3JlY2FzdFVUQyArIGxvY2FsVGltZXpvbmU7XG4gICAgbG9jYWxEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lc3RhbXAgKiAxMDAwKTtcbiAgICBsb2NhbFRpbWUgPSBsb2NhbERhdGUuZ2V0VGltZSgpO1xuXG4gICAgLy8gQXJyYXkgb2YgbW9udGggbmFtZXNcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgXG4gICAgLy8gRXh0cmFjdCB0aGUgbW9udGgsIGRheSwgYW5kIHllYXIgZnJvbSBsb2NhbERhdGVcbiAgICBjb25zdCBtb250aCA9IG1vbnRoTmFtZXNbbG9jYWxEYXRlLmdldFVUQ01vbnRoKCldOyAvLyBnZXRVVENNb250aCgpIHJldHVybnMgYSB6ZXJvLWJhc2VkIGluZGV4XG4gICAgY29uc3QgZGF5ID0gbG9jYWxEYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gbG9jYWxEYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgICAvLyBGb3JtYXQgdGhlIGxvY2FsIGRhdGUgYW5kIHRpbWVcbiAgICBsb2NhbEZvcm1hdHRlZERhdGUgPSBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDsgLy8gRm9ybWF0IHRoZSBsb2NhbCBkYXRlIGFzIFwiTW9udGggRCwgWVlZWVwiXG4gICAgbG9jYWxGb3JtYXR0ZWRUaW1lID0gZm9ybWF0VGltZShsb2NhbERhdGUpO1xuXG4gICAgLy8gR2V0IGRheSBvZiB0aGUgd2Vla1xuICAgIGRheU5hbWUgPSBnZXREYXkobG9jYWxEYXRlKTtcblxufVxuZnVuY3Rpb24gZGF5VGVtcHMoaG91cmx5VGVtcCwgZGF5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgaG91cmx5VGVtcCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIHJlbW92ZSB0aGUgdW5pdFxuICAgIGNvbnN0IHRlbXBWYWx1ZSA9IHBhcnNlRmxvYXQoaG91cmx5VGVtcCk7XG5cbiAgICAvLyBTdG9yZSB0aGUgdGVtcGVyYXR1cmUgdmFsdWUgaW4gdGhlIGNvcnJlc3BvbmRpbmcgZGF5IGFycmF5XG4gICAgaWYgKCFpc05hTih0ZW1wVmFsdWUpKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlc0J5RGF5W2RheU5hbWVdLnB1c2godGVtcFZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JlY2FzdHMoKSB7XG4gICAgLy9Ib3VybHkgRm9yZWNhc3REYXRhIERpc3BsYXlcbiAgICB3aGlsZSAoaG91cmx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaG91cmx5Rm9yZWNhc3REYXRhLnJlbW92ZUNoaWxkKGhvdXJseUZvcmVjYXN0RGF0YS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKGRhaWx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGFpbHlGb3JlY2FzdERhdGEucmVtb3ZlQ2hpbGQoZGFpbHlGb3JlY2FzdERhdGEuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy9EYWlseSBGb3JlY2FzdCBEYXRhIGZvciBjYWxjdWxhdGlvblxuICAgIHRlbXBlcmF0dXJlc0J5RGF5ID0ge1xuICAgICAgICAgICAgJ1N1bic6IFtdLFxuICAgICAgICAgICAgJ01vbic6IFtdLFxuICAgICAgICAgICAgJ1R1ZXMnOiBbXSxcbiAgICAgICAgICAgICdXZWQnOiBbXSxcbiAgICAgICAgICAgICdUaHVyJzogW10sXG4gICAgICAgICAgICAnRnJpJzogW10sXG4gICAgICAgICAgICAnU2F0JzogW11cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIEFkZCBsZWFkaW5nIHplcm8gaWYgbmVlZGVkXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gQWRkIGxlYWRpbmcgemVybyBpZiBuZWVkZWRcbiAgICBjb25zdCB0b2RheURhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIHJldHVybiB0b2RheURhdGU7XG59XG5mdW5jdGlvbiBnZXREYXkobG9jYWxEYXRlKSB7XG4gICAgZGF5T2ZXZWVrID0gbG9jYWxEYXRlLmdldFVUQ0RheSgpO1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J107XG4gICAgZGF5TmFtZSA9IGRheXNPZldlZWtbZGF5T2ZXZWVrXTtcblxuICAgIHJldHVybiBkYXlOYW1lO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZShsb2NhbERhdGUpIHtcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XG4gICAgLy8gQ2FsY3VsYXRlIEFNIG9yIFBNXG4gICAgaG91cnMgPSBsb2NhbERhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gKCcwJyArIGxvY2FsRGF0ZS5nZXRVVENNaW51dGVzKCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcblxuICAgIC8vIENvbnZlcnQgdG8gMTItaG91ciBmb3JtYXRcbiAgICBsZXQgaG91cnMxMiA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMxMiA9IGhvdXJzMTIgPyBob3VyczEyIDogMTI7IC8vIENvbnZlcnQgMCB0byAxMiBmb3IgbWlkbmlnaHRcblxuICAgIC8vIEZvcm1hdCB0aGUgbG9jYWwgdGltZSB3aXRoIEFNIG9yIFBNXG4gICAgaWYgKGN1cnJlbnRUaW1lID09PSB0cnVlKSB7XG4gICAgICAgIGZvcm1hdHRlZCA9IGhvdXJzMTIrICc6JysgbWludXRlcysgYW1wbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXR0ZWQgPSBob3VyczEyKyBhbXBtO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50VGltZSA9IGZhbHNlO1xuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5mdW5jdGlvbiBjYWxjdWxhdGVBdmVyYWdlcygpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggdGVtcGVyYXR1cmVzQnlEYXkgYXNzaWduaW5nIGJvdGggdGhlIGRheSBhbmQgdGVtcGVyYXR1cmVcbiAgICBmb3IgKGNvbnN0IFtkYXksIHRlbXBzXSBvZiBPYmplY3QuZW50cmllcyh0ZW1wZXJhdHVyZXNCeURheSkpIHtcblxuICAgICAgICAvL0NhbGN1bGF0ZSBBdmVyYWdlIFRlbXAgKG9ubHkgZm9yIGRheXMgd2l0aCB0ZW1wZXJhdHVyZSBkYXRhKVxuICAgICAgICBpZiAodGVtcHMubGVuZ3RoID4gMCkgeyBcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN1bSArPSB0ZW1wc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wID0gc3VtIC8gdGVtcHMubGVuZ3RoXG4gICAgICAgICAgICBhdmVyYWdlVGVtcHNbZGF5XSA9IGF2ZXJhZ2VUZW1wLnRvRml4ZWQoMCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wc1tkYXldID0gbnVsbDsgLy8gSW5kaWNhdGUgbm8gZGF0YSBmb3IgdGhpcyBkYXlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2dldEdlb0NvZGV9IGZyb20gJy4uL3NyYy9hcGknXG5cbmxldCBpY29uSW1nID0gXCJcIjtcbmxldCBsb2NhdGlvblNlYXJjaCA9ICdQaG9lbml4JztcbmxldCBob3VybHlUZW1wID0gMDtcbmxldCBmb3JlY2FzdFVUQyA9IDA7XG5sZXQgbG9jYWxUaW1lem9uZSA9IDA7XG5sZXQgbG9jYWxGb3JtYXR0ZWREYXRlID0gJyc7XG5sZXQgbG9jYWxGb3JtYXR0ZWRUaW1lID0gJyc7XG5sZXQgaG91cnMgPSAwO1xubGV0IG5pZ2h0ID0gZmFsc2U7XG5sZXQgZm9ybWF0dGVkRGF0ZSA9ICcnO1xubGV0IGRheU5hbWUgPSAnJztcbmxldCBkYXlPZldlZWsgPSAnJztcbmxldCBjdXJyZW50RGF5ID0gJyc7XG5sZXQgZm9ybWF0dGVkVGltZSA9ICcnO1xubGV0IGF2ZXJhZ2VUZW1wID0gMDtcbmxldCB0ZW1wZXJhdHVyZXNCeURheSA9IHtcbiAgICAnU3VuJzogW10sXG4gICAgJ01vbic6IFtdLFxuICAgICdUdWVzJzogW10sXG4gICAgJ1dlZCc6IFtdLFxuICAgICdUaHVyJzogW10sXG4gICAgJ0ZyaSc6IFtdLFxuICAgICdTYXQnOiBbXVxufTtcbmxldCBhdmVyYWdlVGVtcHMgPSB7XG4gICAgJ1N1bic6IFtdLFxuICAgICdNb24nOiBbXSxcbiAgICAnVHVlcyc6IFtdLFxuICAgICdXZWQnOiBbXSxcbiAgICAnVGh1cic6IFtdLFxuICAgICdGcmknOiBbXSxcbiAgICAnU2F0JzogW11cbn1cblxuXG4vLyBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheXNEYXRlKCk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpO1xufVxuXG5cblxuXG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJzaG93TG9hZCIsImhpZGVMb2FkIiwiY29udmVydFRpbWUiLCJjbGVhckZvcmVjYXN0cyIsInVwZGF0ZUJhY2tncm91bmQiLCJsb2NhdGlvbk91dHB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpbWVPdXRwdXQiLCJjdXJyZW50VGVtcCIsInJlYWx0aW1lTG93IiwicmVhbHRpbWVIaWdoIiwicmVhbHRpbWVEZXNjcmlwdGlvbiIsImljb24iLCJ1bml0cyIsInVuaXRTaWduIiwiY3VycmVudFRpbWUiLCJsb2NhbERhdGUiLCJEYXRlIiwiYXBpS2V5IiwiZ2V0R2VvQ29kZSIsIl94IiwiX2dldEdlb0NvZGUiLCJfY2FsbGVlIiwibG9jYXRpb25TZWFyY2giLCJ1cmwiLCJyZXNwb25zZSIsImdlb2NvZGUiLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY29uY2F0IiwiZmV0Y2giLCJtb2RlIiwianNvbiIsImxhdCIsImxvbiIsImlubmVySFRNTCIsImdldFdlYXRoZXIiLCJnZXRGb3JlY2FzdCIsInQwIiwiY29uc29sZSIsImxvZyIsIl94MiIsIl94MyIsIl9nZXRXZWF0aGVyIiwiX2NhbGxlZTIiLCJ3ZWF0aGVyRGF0YSIsInRpbWV6b25lIiwiY3VycmVudERhdGUiLCJjdXJyZW50VVRDIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0VGltZSIsImhvdXJzIiwibmlnaHQiLCJsb2NhbEZvcm1hdHRlZERhdGUiLCJsb2NhbEZvcm1hdHRlZFRpbWUiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJpbmNsdWRlcyIsInNyYyIsIl94NCIsIl94NSIsIl9nZXRGb3JlY2FzdCIsIl9jYWxsZWUzIiwiZm9yZWNhc3REYXRhIiwibG9jYWxUaW1lem9uZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInRlbXBlcmF0dXJlc0J5RGF5IiwibGlzdCIsImluZGV4IiwiaG91cmx5VGVtcCIsImZvcmVjYXN0VVRDIiwiZHQiLCJkaXNwbGF5SG91cmx5Rm9yZWNhc3QiLCJkYXlUZW1wcyIsImRheU5hbWUiLCJjYWxjdWxhdGVBdmVyYWdlcyIsImRpc3BsYXlEYWlseUZvcmVjYXN0IiwidW5pdEJ0biIsImxvY2F0aW9uSW5wdXQiLCJob3VybHlGb3JlY2FzdERhdGEiLCJkYWlseUZvcmVjYXN0RGF0YSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhvdXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJob3VyRGF5IiwiaG91clRlbXAiLCJhdmVyYWdlVGVtcHMiLCJvcmRlcmVkRGF5cyIsImN1cnJlbnREYXkiLCJkYXlPZldlZWsiLCJkYXkiLCJkYXlEaXYiLCJkYXlEYXkiLCJkYXlUZW1wIiwiZ2V0VVRDSG91cnMiLCJ1cGRhdGVJY29uIiwid2VhdGhlckRlc2NyaXB0aW9uIiwiaWNvbkltZyIsInN0eWxlIiwiZGlzcGxheSIsInBhcnNlTG9jYXRpb24iLCJsb2NhdGlvblN0cmluZyIsInBhcnRzIiwic3BsaXQiLCJ0cmltIiwicGFyc2VkTG9jYXRpb24iLCJsb2NhbFRpbWVzdGFtcCIsImxvY2FsVGltZSIsIm1vbnRoTmFtZXMiLCJtb250aCIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsInllYXIiLCJnZXRVVENGdWxsWWVhciIsImZvcm1hdFRpbWUiLCJnZXREYXkiLCJ0ZW1wVmFsdWUiLCJwYXJzZUZsb2F0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZ2V0VG9kYXlzRGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJTdHJpbmciLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsInRvZGF5RGF0ZSIsImdldFVUQ0RheSIsImRheXNPZldlZWsiLCJmb3JtYXR0ZWQiLCJtaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsImFtcG0iLCJob3VyczEyIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJ0ZW1wcyIsInN1bSIsImF2ZXJhZ2VUZW1wIiwidG9GaXhlZCIsImZvcm1hdHRlZERhdGUiLCJmb3JtYXR0ZWRUaW1lIiwid2luZG93Iiwib25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==