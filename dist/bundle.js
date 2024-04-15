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
          _src_utilities__WEBPACK_IMPORTED_MODULE_1__.currentTime = true;
          timezone = weatherData.timezone;
          currentDate = new Date();
          currentUTC = currentDate.getTime() / 1000;
          (0,_src_utilities__WEBPACK_IMPORTED_MODULE_1__.convertTime)(currentUTC, timezone);
          (0,_src_ui__WEBPACK_IMPORTED_MODULE_0__.updateBackground)(localDate);

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
/* harmony export */   convertTime: () => (/* binding */ convertTime),
/* harmony export */   currentTime: () => (/* binding */ currentTime),
/* harmony export */   dayTemps: () => (/* binding */ dayTemps),
/* harmony export */   parseLocation: () => (/* binding */ parseLocation)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2pCLElBQUk2RCxhQUFhLEdBQUcsRUFBRTtBQUN0QixJQUFJbEMsT0FBTyxHQUFHLEVBQUU7QUFDaEIsSUFBSXVCLFNBQVMsR0FBRyxFQUFFO0FBQ2xCLElBQUlELFVBQVUsR0FBRyxFQUFFO0FBQ25CLElBQUlhLGFBQWEsR0FBRyxFQUFFO0FBQ3RCLElBQUlDLFdBQVcsR0FBRyxDQUFDOztBQUluQjs7QUFFQTZDLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLFlBQVU7RUFDdEJwSixvREFBVSxDQUFDSSxjQUFjLENBQUM7QUFDOUIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VzbGludHByYWMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2xpbnRwcmFjL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXNsaW50cHJhYy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXBkYXRlQmFja2dyb3VuZCwgc2hvd0xvYWQsIGhpZGVMb2FkIH0gZnJvbSAnLi4vc3JjL3VpJ1xuaW1wb3J0IHsgY3VycmVudFRpbWUsIGNvbnZlcnRUaW1lLCBjbGVhckZvcmVjYXN0cyB9IGZyb20gJy4uL3NyYy91dGlsaXRpZXMnXG5cbmNvbnN0IGxvY2F0aW9uT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uT3V0cHV0Jyk7XG5jb25zdCB0aW1lT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVPdXRwdXQnKTtcbmNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJyk7XG5jb25zdCByZWFsdGltZUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZUxvdycpO1xuY29uc3QgcmVhbHRpbWVIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlYWx0aW1lSGlnaCcpO1xuY29uc3QgcmVhbHRpbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsdGltZURlc2NyaXB0aW9uJyk7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcblxubGV0IHVuaXRzID0gXCJpbXBlcmlhbFwiO1xubGV0IHVuaXRTaWduID0gXCJGwrBcIjtcbmxldCBsb2NhbERhdGUgPSBuZXcgRGF0ZSgpO1xubGV0IGhvdXJseVRlbXAgPSAwO1xuXG5cbmNvbnN0IGFwaUtleSA9IFwiYjA4OTA0ZWQzMTMyYzNjOWE0NmVmMmFiY2FjYjYyZDZcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdlb0NvZGUobG9jYXRpb25TZWFyY2gpIHsgLy9HZXRzIGxvY2F0aW9uIGluZm8sIHJ1bnMgZ2V0V2VhdGhlciAmIGdldEZvcmVjYXN0LCBkaXNwbGF5cyBjb250ZW50XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25TZWFyY2h9JmxpbWl0PTUmYXBwaWQ9JHthcGlLZXl9YFxuICAgIHNob3dMb2FkKCk7XG5cbiAgdHJ5IHtcbiAgICAgIC8vTWFrZSBmZXRjaCByZXF1ZXN0IGFuZCBzdG9yZXMgaXQgYXMgcmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIFxuICAgICAgLy9TdG9yZSB0aGUgSlNPTiBcbiAgICAgIGNvbnN0IGdlb2NvZGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBsZXQgY2l0eSA9IGdlb2NvZGVbMF0ubmFtZTtcbiAgICAgIGxldCBzdGF0ZSA9IGdlb2NvZGVbMF0uc3RhdGU7XG4gICAgICBsZXQgY291bnRyeSA9IGdlb2NvZGVbMF0uY291bnRyeTtcbiAgICAgIGxldCBsYXRpdHVkZSA9IGdlb2NvZGVbMF0ubGF0O1xuICAgICAgbGV0IGxvbmdpdHVkZSA9IGdlb2NvZGVbMF0ubG9uO1xuXG4gICAgICAvL0Rpc3BsYXkgTG9jYXRpb25cbiAgICAgIGlmIChjb3VudHJ5ID09PSAnVVMnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk91dHB1dC5pbm5lckhUTUwgPSBjaXR5ICsgXCIsIFwiICsgc3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb25PdXRwdXQuaW5uZXJIVE1MID0gY2l0eSArIFwiLCBcIiArIHN0YXRlICsgXCIsIFwiICsgY291bnRyeTtcbiAgICAgIH1cblxuICAgICAgZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIGdldEZvcmVjYXN0KGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgaGlkZUxvYWQoKTtcblxuICB9IGNhdGNoIChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBsb2NhdGlvbk91dHB1dC5pbm5lckhUTUwgPSAnQ2l0eSBFcnJvci4uLiBQbGVhc2UgZW50ZXIgY29ycmVjdCBjaXR5IG5hbWUnO1xuXG4gICAgICBoaWRlTG9hZCgpO1xuICB9OyAgXG4gIFxufVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3VuaXRzPSR7dW5pdHN9JmxhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7YXBpS2V5fWBcbiAgICB0cnkge1xuICAgICAgICAvL0ZldGNoIHJlcXVlc3QgYW5kIHN0b3JlIGl0IGFzIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIFxuICAgICAgICAvL1N0b3JlIHRoZSBKU09OIFxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgICAgIC8vR2V0IFRpbWVcbiAgICAgICAgY3VycmVudFRpbWUgPSB0cnVlO1xuICAgICAgICBjb25zdCB0aW1lem9uZSA9IHdlYXRoZXJEYXRhLnRpbWV6b25lO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVVEMgPSAoY3VycmVudERhdGUuZ2V0VGltZSgpKSAvIDEwMDA7IFxuICAgIFxuICAgICAgICBjb252ZXJ0VGltZShjdXJyZW50VVRDLCB0aW1lem9uZSk7XG4gICAgICAgIHVwZGF0ZUJhY2tncm91bmQobG9jYWxEYXRlKTtcblxuICAgICAgICAvLyBVcGRhdGUgaWYgZGF5IG9yIG5pZ2h0XG4gICAgICAgIGlmIChob3VycyA+PSAxNyB8fCBob3VycyA8PSA1KSB7XG4gICAgICAgICAgICBuaWdodCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5pZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL0Rpc3BsYXkgdGVtcCB2YWx1ZXNcbiAgICAgICAgdGltZU91dHB1dC5pbm5lckhUTUwgPSBgJHtsb2NhbEZvcm1hdHRlZERhdGV9IHwgJHtsb2NhbEZvcm1hdHRlZFRpbWV9YDtcbiAgICAgICAgY3VycmVudFRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgICAgICByZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICAgICAgICByZWFsdGltZUxvdy5pbm5lckhUTUwgPSBcIkw6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluKSArIFwiwrBGXCI7XG4gICAgICAgICAgICByZWFsdGltZUhpZ2guaW5uZXJIVE1MID0gXCJIOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCkgKyBcIsKwRlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhbHRpbWVMb3cuaW5uZXJIVE1MID0gXCJMOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbikgKyBcIsKwQ1wiO1xuICAgICAgICAgICAgcmVhbHRpbWVIaWdoLmlubmVySFRNTCA9IFwiSDogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXgpICsgXCLCsENcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVXBkYXRlIGljb25cbiAgICAgICAgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbG91ZHMnKSAmJiBuaWdodCA9PSBmYWxzZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvb3ZlcmNhc3QucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcImljb25zL3RodW5kZXIucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnZHJpenpsZScpKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCJpY29ucy9zcHJpbmtsZXMucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygncmFpbicpKXtcbiAgICAgICAgICAgIGljb24uc3JjID0gXCJpY29ucy9yYWlueS5wbmdcIlxuICAgICAgICB9IGVsc2UgaWYgKHJlYWx0aW1lRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdzbm93Jykpe1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBcImljb25zL3Nub3cucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xlYXInKSAmJiBuaWdodCA9PSBmYWxzZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvY2xlYXItZGF5LnBuZ1wiXG4gICAgICAgIH0gZWxzZSBpZiAocmVhbHRpbWVEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ2NsZWFyJykgJiYgbmlnaHQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvY2xlYXItbmlnaHQucG5nXCJcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsdGltZURlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykgJiYgbmlnaHQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBpY29uLnNyYyA9IFwiaWNvbnMvY2xvdWR5LW5pZ2h0LnBuZ1wiXG4gICAgICAgIH07XG4gIH0gY2F0Y2ggKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH07ICBcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3VuaXRzPSR7dW5pdHN9JmxhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7YXBpS2V5fWBcbiAgICB0cnkge1xuICAgICAgICAvL01ha2UgZmV0Y2ggcmVxdWVzdCBhbmQgc3RvcmVzIGl0IGFzIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIFxuICAgICAgICAvL1N0b3JlIHRoZSBKU09OIFxuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YSk7XG5cbiAgICAgICAgLy9TdG9yZSBjaXR5IHRpbWUgem9uZSAob2Zmc2V0IHNlY29uZHMpXG4gICAgICAgIGxldCBsb2NhbFRpbWV6b25lID0gZm9yZWNhc3REYXRhLmNpdHkudGltZXpvbmU7XG5cbiAgICAgICAgLy8gQ2xlYXIgT2xkIERhdGFcbiAgICAgICAgY2xlYXJGb3JlY2FzdHMoKTtcblxuICAgICAgICAvLyBHZXQgSG91cmx5IEZvcmVjYXN0IERhdGEgXG4gICAgICAgIGZvcmVjYXN0RGF0YS5saXN0LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgaG91cmx5VGVtcCA9IE1hdGgucm91bmQoaW5kZXgubWFpbi50ZW1wKSArIHVuaXRTaWduO1xuICAgICAgICAgICAgZm9yZWNhc3RVVEMgPSBpbmRleC5kdDtcblxuICAgICAgICAgICAgY29udmVydFRpbWUoZm9yZWNhc3RVVEMsIGxvY2FsVGltZXpvbmUpO1xuICAgICAgICAgICAgZGlzcGxheUhvdXJseUZvcmVjYXN0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRheVRlbXBzKGhvdXJseVRlbXAsIGRheU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnZlcnRUaW1lKGZvcmVjYXN0RGF0YS5saXN0WzBdLmR0LCBsb2NhbFRpbWV6b25lKTtcbiAgICAgICAgY2FsY3VsYXRlQXZlcmFnZXMoKTtcbiAgICAgICAgZGlzcGxheURhaWx5Rm9yZWNhc3QoKTtcbiAgICAgICAgXG4gIH0gY2F0Y2ggKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH07ICBcbn1cbiIsIlxuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0QnRuJyk7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uSW5wdXQnKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHlGb3JlY2FzdERhdGEnKTtcbmNvbnN0IGRhaWx5Rm9yZWNhc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Rm9yZWNhc3REYXRhJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgbG9jYWxEYXRlID0gbmV3IERhdGUoKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHVwZGF0ZUJhY2tncm91bmQobG9jYWxEYXRlKTtcbiAgICBsb2NhdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgbG9jYXRpb25TZWFyY2ggPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1bml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikgeyAvL0NoYW5nZSB0byBNZXRyaWMgKEMpLCBydW4gZ2V0R2VvQ29kZVxuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbXBlcmlhbCcpO1xuICAgICAgICAgICAgdW5pdEJ0bi5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICAgICAgICAgIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJDwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vQ2hhbmdlIHRvIEltcGVyaWFsIChGKSwgcnVuIGdldEdlb0NvZGVcbiAgICAgICAgICAgIHVuaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWV0cmljJyk7XG4gICAgICAgICAgICB1bml0QnRuLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgICB1bml0cyA9IFwiaW1wZXJpYWxcIjtcbiAgICAgICAgICAgIHVuaXRTaWduID0gXCJGwrBcIlxuICAgICAgICAgICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdEJ0bi5pbm5lckhUTUwgPSB1bml0U2lnbjtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseUZvcmVjYXN0KCkgeyAgICBcbiAgICBjb25zdCBob3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91ckRpdi5jbGFzc05hbWUgPSAnaG91ckRpdic7XG4gICAgaG91cmx5Rm9yZWNhc3REYXRhLmFwcGVuZENoaWxkKGhvdXJEaXYpO1xuXG4gICAgY29uc3QgaG91ckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3VyRGF5LmlubmVySFRNTCA9IGAke2RheU5hbWV9IOKAoiAke2xvY2FsRm9ybWF0dGVkVGltZX1gO1xuICAgIGhvdXJEYXkuY2xhc3NOYW1lID0gJ2hvdXJEYXknO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91ckRheSk7XG5cbiAgICAvLyBjb25zdCBob3VyVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBob3VyVGltZS5pbm5lckhUTUwgPSBgJHtsb2NhbEZvcm1hdHRlZFRpbWV9YDtcbiAgICAvLyBob3VyVGltZS5jbGFzc05hbWUgPSAnaG91clRpbWUnO1xuICAgIC8vIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91clRpbWUpO1xuXG4gICAgY29uc3QgaG91clRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91clRlbXAuaW5uZXJIVE1MID0gaG91cmx5VGVtcDtcbiAgICBob3VyVGVtcC5jbGFzc05hbWUgPSAnaG91clRlbXAnO1xuICAgIGhvdXJEaXYuYXBwZW5kQ2hpbGQoaG91clRlbXApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEYWlseUZvcmVjYXN0KCkge1xuICAgIGNvbnNvbGUubG9nKGF2ZXJhZ2VUZW1wcyk7XG4gICAgXG4gICAgLy8gSW5wdXQgZGF5cyBpbiBvcmRlciBvZiB3ZWVrIHN0YXJ0aW5nIHdpdGggdGhlIGRheSBhZnRlciB0aGUgY3VycmVudCBkYXlcbiAgICBjb25zdCBvcmRlcmVkRGF5cyA9IFtdO1xuICAgIGN1cnJlbnREYXkgPSBkYXlPZldlZWs7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IChjdXJyZW50RGF5ICsgaSkgJSA3O1xuICAgICAgICBjb25zdCBkYXlOYW1lID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddW2RheU9mV2Vla107XG4gICAgICAgIGlmIChhdmVyYWdlVGVtcHNbZGF5TmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9yZGVyZWREYXlzLnB1c2goZGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGRheSB0ZW1wcyBpbiBzcGVjaWZpZWQgb3JkZXJcbiAgICBvcmRlcmVkRGF5cy5mb3JFYWNoKGRheSA9PiB7ICAgIFxuICAgICAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5RGl2LmNsYXNzTmFtZSA9ICdkYXlEaXYnO1xuICAgICAgICBkYWlseUZvcmVjYXN0RGF0YS5hcHBlbmRDaGlsZChkYXlEaXYpO1xuXG4gICAgICAgIGNvbnN0IGRheURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGF5RGF5LmlubmVySFRNTCA9IGAke2RheX1gO1xuICAgICAgICBkYXlEYXkuY2xhc3NOYW1lID0gJ2RheURheSc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlEYXkpO1xuXG4gICAgICAgIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRheVRlbXAuaW5uZXJIVE1MID0gYXZlcmFnZVRlbXBzW2RheV0gKyB1bml0U2lnbjtcbiAgICAgICAgZGF5VGVtcC5jbGFzc05hbWUgPSAnZGF5VGVtcCc7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlUZW1wKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKGxvY2FsRGF0ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gbG9jYWxEYXRlLmdldFVUQ0hvdXJzKCk7IC8vIFVzZSBnZXRVVENIb3VycygpIGJlY2F1c2UgeW91J3ZlIG1hbnVhbGx5IGFkanVzdGVkIGxvY2FsRGF0ZSB0byByZXByZXNlbnQgbG9jYWwgdGltZVxuXG4gICAgaWYoaG91cnMgPj0gMTcpIHtcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnZXZlbmluZyc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdhZnRlcm5vb24nOyAgLy8gQWZ0ZXJub29uXG4gICAgfSBlbHNlIGlmKGhvdXJzID49Nikge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdtb3JuaW5nJzsgLy9Nb3JuaW5nXG4gICAgfSBlbHNlIGlmKGhvdXJzID49NCl7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2Rhd24nOyAvL0Rhd25cbiAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICduaWdodCc7IC8vTmlnaHRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSWNvbih3ZWF0aGVyRGVzY3JpcHRpb24pIHtcbiAgICBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygnY2xvdWRzJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9vdmVyY2FzdC5wbmdcIlxuICAgIH0gZWxzZSBpZiAod2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTC5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy90aHVuZGVyLnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdkcml6emxlJykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9zcHJpbmtsZXMucG5nXCJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwuaW5jbHVkZXMoJ3JhaW4nKSl7XG4gICAgICAgIGljb25JbWcgPSBcImljb25zL3JhaW55LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdzbm93Jykpe1xuICAgICAgICBpY29uSW1nID0gXCJpY29ucy9zbm93LnBuZ1wiXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MLmluY2x1ZGVzKCdjbGVhcicpKXtcbiAgICAgICAgaWNvbkltZyA9IFwiaWNvbnMvY2xlYXItZGF5LnBuZ1wiXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gaWNvbkltZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5cbmV4cG9ydCB7IGhvdXJseUZvcmVjYXN0RGF0YSwgZGFpbHlGb3JlY2FzdERhdGEgfTsiLCJpbXBvcnQgeyBob3VybHlGb3JlY2FzdERhdGEsIGRhaWx5Rm9yZWNhc3REYXRhIH0gZnJvbSBcIi4vdWlcIjtcblxubGV0IGxvY2FsRm9ybWF0dGVkRGF0ZSA9ICcnO1xubGV0IGxvY2FsRm9ybWF0dGVkVGltZSA9ICcnO1xubGV0IGhvdXJzID0gMDtcbmxldCBjdXJyZW50VGltZSA9IGZhbHNlO1xubGV0IGZvcmVjYXN0VVRDID0gMDtcbmxldCBsb2NhbFRpbWV6b25lID0gMDtcbmxldCBuaWdodCA9IGZhbHNlO1xubGV0IGZvcm1hdHRlZERhdGUgPSAnJztcbmxldCBkYXlOYW1lID0gJyc7XG5sZXQgZGF5T2ZXZWVrID0gJyc7XG5sZXQgY3VycmVudERheSA9ICcnO1xubGV0IGZvcm1hdHRlZFRpbWUgPSAnJztcbmxldCBhdmVyYWdlVGVtcCA9IDA7XG5sZXQgdGVtcGVyYXR1cmVzQnlEYXkgPSB7XG4gICAgJ1N1bic6IFtdLFxuICAgICdNb24nOiBbXSxcbiAgICAnVHVlcyc6IFtdLFxuICAgICdXZWQnOiBbXSxcbiAgICAnVGh1cic6IFtdLFxuICAgICdGcmknOiBbXSxcbiAgICAnU2F0JzogW11cbn07XG5sZXQgYXZlcmFnZVRlbXBzID0ge1xuICAgICdTdW4nOiBbXSxcbiAgICAnTW9uJzogW10sXG4gICAgJ1R1ZXMnOiBbXSxcbiAgICAnV2VkJzogW10sXG4gICAgJ1RodXInOiBbXSxcbiAgICAnRnJpJzogW10sXG4gICAgJ1NhdCc6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxvY2F0aW9uKGxvY2F0aW9uU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydHMgPSBsb2NhdGlvblN0cmluZy5zcGxpdCgnLCcpO1xuICAgIC8vIEV4dHJhY3QgcGFydHMgdG8ga2VlcFxuICAgIGxldCBjaXR5ID0gcGFydHNbMF0udHJpbSgpOyAvLyBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2VcbiAgICBsZXQgc3RhdGUgPSAnJztcbiAgICBsZXQgY291bnRyeSA9ICcnO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGVub3VnaCBwYXJ0c1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMykge1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBwYXJ0IGlzIFwiVW5pdGVkIFN0YXRlc1wiLCByZXBsYWNlIGl0IHdpdGggXCJVU0FcIlxuICAgICAgICBpZiAocGFydHNbcGFydHMubGVuZ3RoIC0gMV0udHJpbSgpID09PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSAnVVNBJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50cnkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS50cmltKCk7IC8vIE90aGVyd2lzZSwgYXNzdW1lIHRoZSBsYXN0IHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgc2Vjb25kIGxhc3QgcGFydCBpcyBub3QgYSBzdGF0ZSBhYmJyZXZpYXRpb24sIHVzZSBpdCBhcyB0aGUgc3RhdGVcbiAgICAgICAgaWYgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdLnRyaW0oKS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgIHN0YXRlID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMl0udHJpbSgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gSWYgb25seSB0d28gcGFydHMsIGFzc3VtZSB0aGUgc2Vjb25kIHBhcnQgaXMgdGhlIGNvdW50cnlcbiAgICAgICAgY291bnRyeSA9IHBhcnRzWzFdLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvLyBDb25jYXRlbmF0ZSB0aGUgcGFydHMgaW50byB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICBsZXQgcGFyc2VkTG9jYXRpb24gPSBjaXR5O1xuICAgIGlmIChzdGF0ZSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtzdGF0ZX1gO1xuICAgIH1cbiAgICBpZiAoY291bnRyeSAhPT0gJycpIHtcbiAgICAgICAgcGFyc2VkTG9jYXRpb24gKz0gYCwgJHtjb3VudHJ5fWA7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRMb2NhdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZShmb3JlY2FzdFVUQywgbG9jYWxUaW1lem9uZSkge1xuICAgIC8vIEFkanVzdCB0aGUgdGltZXN0YW1wIGJ5IHRoZSB0aW1lem9uZSBvZmZzZXQgdG8gZ2V0IHRoZSBsb2NhbCB0aW1lXG4gICAgY29uc3QgbG9jYWxUaW1lc3RhbXAgPSBmb3JlY2FzdFVUQyArIGxvY2FsVGltZXpvbmU7XG4gICAgbGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZXN0YW1wICogMTAwMCk7XG4gICAgbGV0IGxvY2FsVGltZSA9IGxvY2FsRGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyBBcnJheSBvZiBtb250aCBuYW1lc1xuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbiAgICBcbiAgICAvLyBFeHRyYWN0IHRoZSBtb250aCwgZGF5LCBhbmQgeWVhciBmcm9tIGxvY2FsRGF0ZVxuICAgIGNvbnN0IG1vbnRoID0gbW9udGhOYW1lc1tsb2NhbERhdGUuZ2V0VVRDTW9udGgoKV07IC8vIGdldFVUQ01vbnRoKCkgcmV0dXJucyBhIHplcm8tYmFzZWQgaW5kZXhcbiAgICBjb25zdCBkYXkgPSBsb2NhbERhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBsb2NhbERhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblxuICAgIC8vIEZvcm1hdCB0aGUgbG9jYWwgZGF0ZSBhbmQgdGltZVxuICAgIGxvY2FsRm9ybWF0dGVkRGF0ZSA9IGAke21vbnRofSAke2RheX0sICR7eWVhcn1gOyAvLyBGb3JtYXQgdGhlIGxvY2FsIGRhdGUgYXMgXCJNb250aCBELCBZWVlZXCJcbiAgICBsb2NhbEZvcm1hdHRlZFRpbWUgPSBmb3JtYXRUaW1lKGxvY2FsRGF0ZSk7XG5cbiAgICAvLyBHZXQgZGF5IG9mIHRoZSB3ZWVrXG4gICAgZGF5TmFtZSA9IGdldERheShsb2NhbERhdGUpO1xuXG59XG5leHBvcnQgZnVuY3Rpb24gZGF5VGVtcHMoaG91cmx5VGVtcCwgZGF5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgaG91cmx5VGVtcCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIHJlbW92ZSB0aGUgdW5pdFxuICAgIGNvbnN0IHRlbXBWYWx1ZSA9IHBhcnNlRmxvYXQoaG91cmx5VGVtcCk7XG5cbiAgICAvLyBTdG9yZSB0aGUgdGVtcGVyYXR1cmUgdmFsdWUgaW4gdGhlIGNvcnJlc3BvbmRpbmcgZGF5IGFycmF5XG4gICAgaWYgKCFpc05hTih0ZW1wVmFsdWUpKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlc0J5RGF5W2RheU5hbWVdLnB1c2godGVtcFZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JlY2FzdHMoKSB7XG4gICAgLy9Ib3VybHkgRm9yZWNhc3REYXRhIERpc3BsYXlcbiAgICB3aGlsZSAoaG91cmx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaG91cmx5Rm9yZWNhc3REYXRhLnJlbW92ZUNoaWxkKGhvdXJseUZvcmVjYXN0RGF0YS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKGRhaWx5Rm9yZWNhc3REYXRhLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGFpbHlGb3JlY2FzdERhdGEucmVtb3ZlQ2hpbGQoZGFpbHlGb3JlY2FzdERhdGEuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy9EYWlseSBGb3JlY2FzdCBEYXRhIGZvciBjYWxjdWxhdGlvblxuICAgIHRlbXBlcmF0dXJlc0J5RGF5ID0ge1xuICAgICAgICAgICAgJ1N1bic6IFtdLFxuICAgICAgICAgICAgJ01vbic6IFtdLFxuICAgICAgICAgICAgJ1R1ZXMnOiBbXSxcbiAgICAgICAgICAgICdXZWQnOiBbXSxcbiAgICAgICAgICAgICdUaHVyJzogW10sXG4gICAgICAgICAgICAnRnJpJzogW10sXG4gICAgICAgICAgICAnU2F0JzogW11cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIEFkZCBsZWFkaW5nIHplcm8gaWYgbmVlZGVkXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gQWRkIGxlYWRpbmcgemVybyBpZiBuZWVkZWRcbiAgICBjb25zdCB0b2RheURhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIHJldHVybiB0b2RheURhdGU7XG59XG5mdW5jdGlvbiBnZXREYXkobG9jYWxEYXRlKSB7XG4gICAgZGF5T2ZXZWVrID0gbG9jYWxEYXRlLmdldFVUQ0RheSgpO1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J107XG4gICAgZGF5TmFtZSA9IGRheXNPZldlZWtbZGF5T2ZXZWVrXTtcblxuICAgIHJldHVybiBkYXlOYW1lO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZShsb2NhbERhdGUpIHtcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XG4gICAgLy8gQ2FsY3VsYXRlIEFNIG9yIFBNXG4gICAgaG91cnMgPSBsb2NhbERhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gKCcwJyArIGxvY2FsRGF0ZS5nZXRVVENNaW51dGVzKCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcblxuICAgIC8vIENvbnZlcnQgdG8gMTItaG91ciBmb3JtYXRcbiAgICBsZXQgaG91cnMxMiA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMxMiA9IGhvdXJzMTIgPyBob3VyczEyIDogMTI7IC8vIENvbnZlcnQgMCB0byAxMiBmb3IgbWlkbmlnaHRcblxuICAgIC8vIEZvcm1hdCB0aGUgbG9jYWwgdGltZSB3aXRoIEFNIG9yIFBNXG4gICAgaWYgKGN1cnJlbnRUaW1lID09PSB0cnVlKSB7XG4gICAgICAgIGZvcm1hdHRlZCA9IGhvdXJzMTIrICc6JysgbWludXRlcysgYW1wbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXR0ZWQgPSBob3VyczEyKyBhbXBtO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50VGltZSA9IGZhbHNlO1xuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5mdW5jdGlvbiBjYWxjdWxhdGVBdmVyYWdlcygpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggdGVtcGVyYXR1cmVzQnlEYXkgYXNzaWduaW5nIGJvdGggdGhlIGRheSBhbmQgdGVtcGVyYXR1cmVcbiAgICBmb3IgKGNvbnN0IFtkYXksIHRlbXBzXSBvZiBPYmplY3QuZW50cmllcyh0ZW1wZXJhdHVyZXNCeURheSkpIHtcblxuICAgICAgICAvL0NhbGN1bGF0ZSBBdmVyYWdlIFRlbXAgKG9ubHkgZm9yIGRheXMgd2l0aCB0ZW1wZXJhdHVyZSBkYXRhKVxuICAgICAgICBpZiAodGVtcHMubGVuZ3RoID4gMCkgeyBcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN1bSArPSB0ZW1wc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wID0gc3VtIC8gdGVtcHMubGVuZ3RoXG4gICAgICAgICAgICBhdmVyYWdlVGVtcHNbZGF5XSA9IGF2ZXJhZ2VUZW1wLnRvRml4ZWQoMCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wc1tkYXldID0gbnVsbDsgLy8gSW5kaWNhdGUgbm8gZGF0YSBmb3IgdGhpcyBkYXlcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgeyBjdXJyZW50VGltZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtnZXRHZW9Db2RlfSBmcm9tICcuLi9zcmMvYXBpJ1xuXG5sZXQgaWNvbkltZyA9IFwiXCI7XG5sZXQgbG9jYXRpb25TZWFyY2ggPSAnUGhvZW5peCc7XG5sZXQgaG91cmx5VGVtcCA9IDA7XG5sZXQgZm9yZWNhc3RVVEMgPSAwO1xubGV0IGxvY2FsVGltZXpvbmUgPSAwO1xubGV0IG5pZ2h0ID0gZmFsc2U7XG5sZXQgZm9ybWF0dGVkRGF0ZSA9ICcnO1xubGV0IGRheU5hbWUgPSAnJztcbmxldCBkYXlPZldlZWsgPSAnJztcbmxldCBjdXJyZW50RGF5ID0gJyc7XG5sZXQgZm9ybWF0dGVkVGltZSA9ICcnO1xubGV0IGF2ZXJhZ2VUZW1wID0gMDtcblxuXG5cbi8vIGNvbnN0IHRvZGF5RGF0ZSA9IGdldFRvZGF5c0RhdGUoKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgZ2V0R2VvQ29kZShsb2NhdGlvblNlYXJjaCk7XG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsInVwZGF0ZUJhY2tncm91bmQiLCJzaG93TG9hZCIsImhpZGVMb2FkIiwiY3VycmVudFRpbWUiLCJjb252ZXJ0VGltZSIsImNsZWFyRm9yZWNhc3RzIiwibG9jYXRpb25PdXRwdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lT3V0cHV0IiwiY3VycmVudFRlbXAiLCJyZWFsdGltZUxvdyIsInJlYWx0aW1lSGlnaCIsInJlYWx0aW1lRGVzY3JpcHRpb24iLCJpY29uIiwidW5pdHMiLCJ1bml0U2lnbiIsImxvY2FsRGF0ZSIsIkRhdGUiLCJob3VybHlUZW1wIiwiYXBpS2V5IiwiZ2V0R2VvQ29kZSIsIl94IiwiX2dldEdlb0NvZGUiLCJfY2FsbGVlIiwibG9jYXRpb25TZWFyY2giLCJ1cmwiLCJyZXNwb25zZSIsImdlb2NvZGUiLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY29uY2F0IiwiZmV0Y2giLCJtb2RlIiwianNvbiIsImxhdCIsImxvbiIsImlubmVySFRNTCIsImdldFdlYXRoZXIiLCJnZXRGb3JlY2FzdCIsInQwIiwiY29uc29sZSIsImxvZyIsIl94MiIsIl94MyIsIl9nZXRXZWF0aGVyIiwiX2NhbGxlZTIiLCJ3ZWF0aGVyRGF0YSIsInRpbWV6b25lIiwiY3VycmVudERhdGUiLCJjdXJyZW50VVRDIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0VGltZSIsImhvdXJzIiwibmlnaHQiLCJsb2NhbEZvcm1hdHRlZERhdGUiLCJsb2NhbEZvcm1hdHRlZFRpbWUiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJpbmNsdWRlcyIsInNyYyIsIl94NCIsIl94NSIsIl9nZXRGb3JlY2FzdCIsIl9jYWxsZWUzIiwiZm9yZWNhc3REYXRhIiwibG9jYWxUaW1lem9uZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxpc3QiLCJpbmRleCIsImZvcmVjYXN0VVRDIiwiZHQiLCJkaXNwbGF5SG91cmx5Rm9yZWNhc3QiLCJkYXlUZW1wcyIsImRheU5hbWUiLCJjYWxjdWxhdGVBdmVyYWdlcyIsImRpc3BsYXlEYWlseUZvcmVjYXN0IiwidW5pdEJ0biIsImxvY2F0aW9uSW5wdXQiLCJob3VybHlGb3JlY2FzdERhdGEiLCJkYWlseUZvcmVjYXN0RGF0YSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhvdXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJob3VyRGF5IiwiaG91clRlbXAiLCJhdmVyYWdlVGVtcHMiLCJvcmRlcmVkRGF5cyIsImN1cnJlbnREYXkiLCJkYXlPZldlZWsiLCJkYXkiLCJkYXlEaXYiLCJkYXlEYXkiLCJkYXlUZW1wIiwiZ2V0VVRDSG91cnMiLCJ1cGRhdGVJY29uIiwid2VhdGhlckRlc2NyaXB0aW9uIiwiaWNvbkltZyIsInN0eWxlIiwiZGlzcGxheSIsImZvcm1hdHRlZERhdGUiLCJmb3JtYXR0ZWRUaW1lIiwiYXZlcmFnZVRlbXAiLCJ0ZW1wZXJhdHVyZXNCeURheSIsInBhcnNlTG9jYXRpb24iLCJsb2NhdGlvblN0cmluZyIsInBhcnRzIiwic3BsaXQiLCJ0cmltIiwicGFyc2VkTG9jYXRpb24iLCJsb2NhbFRpbWVzdGFtcCIsImxvY2FsVGltZSIsIm1vbnRoTmFtZXMiLCJtb250aCIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsInllYXIiLCJnZXRVVENGdWxsWWVhciIsImZvcm1hdFRpbWUiLCJnZXREYXkiLCJ0ZW1wVmFsdWUiLCJwYXJzZUZsb2F0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZ2V0VG9kYXlzRGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJTdHJpbmciLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsInRvZGF5RGF0ZSIsImdldFVUQ0RheSIsImRheXNPZldlZWsiLCJmb3JtYXR0ZWQiLCJtaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsImFtcG0iLCJob3VyczEyIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJ0ZW1wcyIsInN1bSIsInRvRml4ZWQiLCJ3aW5kb3ciLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9