(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/node_modules/glslify/browser.js":[function(require,module,exports){
module.exports = function(strings) {
  if (typeof strings === 'string') strings = [strings]
  var exprs = [].slice.call(arguments,1)
  var parts = []
  for (var i = 0; i < strings.length-1; i++) {
    parts.push(strings[i], exprs[i] || '')
  }
  parts.push(strings[i])
  return parts.join('')
}

},{}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/automaton.min.js":[function(require,module,exports){
(function (global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Automaton = e();
  }
}(function () {
  return function e(t, n, i) {
    function a(r, l) {
      if (!n[r]) {
        if (!t[r]) {
          var s = "function" == typeof require && require;if (!l && s) return s(r, !0);if (o) return o(r, !0);var u = new Error("Cannot find module '" + r + "'");throw u.code = "MODULE_NOT_FOUND", u;
        }var d = n[r] = { exports: {} };t[r][0].call(d.exports, function (e) {
          var n = t[r][1][e];return a(n ? n : e);
        }, d, d.exports, e, t, n, i);
      }return n[r].exports;
    }for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
      a(i[r]);
    }return a;
  }({ "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/colors.js": [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });var i = function i() {
        var e = { accent: "#2af", bar: "#f82" };return e;
      };n.default = i;
    }, {}], "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/gui.js": [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
      }Object.defineProperty(n, "__esModule", { value: !0 });var o = e("./colors"),
          r = i(o),
          l = e("./images"),
          s = i(l),
          u = e("./interpolator"),
          d = i(u),
          m = void 0,
          c = void 0,
          f = function f(e, t, n, i) {
        var a = n - e,
            o = i - t;return Math.sqrt(a * a + o * o);
      },
          p = function p(e, t, n) {
        var i = null;i = "string" == typeof e ? document.createElement(e) : e;for (var a in t) {
          i.style[a] = t[a];
        }return n && n.appendChild(i), i;
      },
          v = function v() {
        var e = {},
            t = "",
            n = 0,
            i = 0;e.el = p("div", { position: "fixed", padding: "2px", pointerEvents: "none", font: "200 12px Helvetica Neue, sans-serif", background: "#000", color: "#fff", opacity: "0.0" }), window.addEventListener("mousemove", function (e) {
          n = e.clientX, i = e.clientY;
        }), e.add = function (n, i, a) {
          var o = !1,
              r = 0,
              l = 0,
              s = "number" == typeof a ? a : 1,
              u = function u(n) {
            if (l++, 1 === l) {
              o = !0, r++;var a = r;t = i, setTimeout(function () {
                o && r === a && p(e.el, { opacity: "0.8" });
              }, 1e3 * s);
            }
          };n.addEventListener("mouseenter", u);var d = function d(t) {
            l--, 0 === l && (o = !1, p(e.el, { opacity: "0.0" }));
          };n.addEventListener("mouseleave", d);var m = function m(t) {
            o = !1, p(e.el, { opacity: "0.0" });
          };return n.addEventListener("mousedown", m), function () {
            n.removeEventListener("mouseenter", u), n.removeEventListener("mouseleave", d);
          };
        };var a = function a() {
          "function" == typeof t ? e.el.innerText = t() : e.el.innerText = t;var o = e.el.clientWidth,
              r = window.innerWidth - n < o + 10,
              l = { left: n + (r ? -o - 10 : 10) + "px", top: i - 15 + "px" };p(e.el, l), requestAnimationFrame(a);
        };return a(), e;
      },
          h = function h(e) {
        var t = {};t.automaton = e, m = (0, r.default)(), c = (0, s.default)(), t.inspector = v();var n = 240;t.parent = p("div", { position: "fixed", left: "0", bottom: "0", width: "100%", height: n + "px", background: "#222", color: "#ddd", userSelect: "none", font: "300 14px Helvetica Neue, sans-serif" }, document.body);var i = 30;t.header = p("div", { position: "absolute", left: "0", top: "0", width: "100%", height: i + "px", background: "#444" }, t.parent), t.headerTitle = p("div", { position: "absolute", left: "6px", top: "0px", font: "500 24px Century Gothic, sans-serif", letterSpacing: "8px", color: "#ddd" }, t.header), t.headerTitle.innerHTML = 'AUT<span style="color:' + m.accent + '">O</span>MAT<span style="color:' + m.accent + '">O</span>N', t.headerButtonContainer = p("div", { position: "absolute", right: "4px" }, t.header);var o = function o(e, n, i) {
          var a = p("img", { width: "24px", height: "24px", margin: "3px", cursor: "pointer" }, t.headerButtonContainer);a.src = e, t.inspector.add(a, n, .5), a.addEventListener("click", function (e) {
            1 === e.which && i();
          });
        };o(c.beatsnap, "Beat Snap", function () {
          t.beatSnapDialog();
        }), o(c.config, "Config", function () {
          t.config();
        }), o(c.save, "Save", function () {
          t.save();
        });var l = 120;t.paramList = p("div", { position: "absolute", left: "0", top: i + "px", width: l + "px", height: "calc( 100% - " + i + "px )", background: "#111", overflow: "hidden" }, t.parent), t.paramListChildren = [], t.currentParamIndex = -1, t.currentParamName = "", t.currentParam = null, t.paramListInside = p("div", { position: "absolute", top: "0px", width: "100%" }, t.paramList);var u = 0;t.paramListInside.addEventListener("wheel", function (e) {
          e.preventDefault(), u = Math.max(Math.min(u + e.deltaY, t.paramListInside.clientHeight - (n - i)), 0), p(t.paramListInside, { top: -u + "px" });
        });var h = 200;t.modMenu = p("div", { position: "absolute", right: "0", top: i + "px", width: h + "px", height: "100%", background: "#333", overflow: "hidden" }, t.parent), t.modMenuInside = p("div", { position: "absolute", top: "0px", width: "calc( 100% - 20px )", padding: "20px 10px" }, t.modMenu);var g = 0;t.modMenuInside.addEventListener("wheel", function (e) {
          e.preventDefault(), g = Math.max(Math.min(g + e.deltaY, t.modMenuInside.clientHeight - (n - i)), 0), p(t.modMenuInside, { top: -g + "px" });
        }), t.timeline = p("div", { position: "absolute", left: l + "px", top: i + "px", width: "calc( 100% - " + (l + h) + "px )", height: "calc( 100% - " + i + "px )", background: "#222", overflow: "hidden" }, t.parent), t.timelineCanvas = p("canvas", { position: "absolute", width: "100%", height: "100%" }, t.timeline), t.timelineContext = t.timelineCanvas.getContext("2d"), t.dialogContainer = p("div", { position: "absolute", display: "none", width: "100%", height: "100%" }, t.parent), t.dialogBackground = p("div", { position: "absolute", width: "100%", height: "100%", background: "#000", opacity: .5 }, t.dialogContainer), t.dialog = p("div", { position: "absolute", background: "#333" }, t.dialogContainer), t.dialogContent = p("div", { position: "absolute", top: "16px", width: "100%", height: "24px", textAlign: "center", whiteSpace: "pre-wrap" }, t.dialog), t.dialogButtonContainer = p("div", { position: "absolute", bottom: "16px", width: "100%", height: "24px", textAlign: "center" }, t.dialog), t.addDialogButton = function (e, n) {
          var i = p("div", { display: "inline-block", width: "60px", height: "16px", padding: "4px", margin: "0 5px", textAlign: "center", background: "#555", cursor: "pointer" }, t.dialogButtonContainer);i.innerText = e, i.addEventListener("click", function (e) {
            1 === e.which && n();
          });
        }, t.showDialog = function (e, n) {
          p(t.dialogContainer, { display: "block" }), p(t.dialog, a({ left: "calc( 50% - " + e / 2 + "px )", top: "calc( 50% - " + n / 2 + "px )", height: "", width: e + "px" }, "height", n + "px"));
        }, t.hideDialog = function () {
          for (p(t.dialogContainer, { display: "none" }); t.dialogContent.firstChild;) {
            t.dialogContent.removeChild(t.dialogContent.firstChild);
          }for (; t.dialogButtonContainer.firstChild;) {
            t.dialogButtonContainer.removeChild(t.dialogButtonContainer.firstChild);
          }
        }, window.addEventListener("keydown", function (e) {
          27 === e.which && t.hideDialog();
        }), t.beatSnap = !1, t.beatSnapOffset = 0, t.beatSnapBpm = 140, t.beatSnapDialog = function () {
          var e = function e(_e, i) {
            var a = p("div", { position: "relative", width: "160px", height: "20px", margin: "0 20px 10px 20px" }, t.dialogContent),
                o = p("div", { position: "absolute", left: "0", top: "3px" }, a);o.innerText = _e;var r = p("input", { position: "absolute", right: "0", padding: "4px", width: "60px", border: "none", background: "#666", color: "#fff", textAlign: "center" }, a);return "number" == typeof i ? (r.value = i, r.addEventListener("keydown", function (e) {
              13 === e.which && (e.preventDefault(), n());
            })) : (p(r, { top: "3px" }), r.type = "checkbox", r.checked = i), { parent: a, label: o, input: r };
          },
              n = function n() {
            t.hideDialog(), t.beatSnap = i.input.checked;var e = parseFloat(a.input.value);isNaN(e) || (t.beatSnapBpm = e);var n = parseFloat(o.input.value);isNaN(n) || (t.beatSnapOffset = n);
          },
              i = e("BeatSnap", t.beatSnap),
              a = e("BPM", t.beatSnapBpm),
              o = e("Offset", t.beatSnapOffset);t.addDialogButton("OK", n), t.addDialogButton("Cancel", function () {
            t.hideDialog();
          }), t.showDialog(200, 150);
        }, t.configLength = function (e) {
          t.automaton.length = e;for (var n in t.automaton.params) {
            for (var i = t.automaton.params[n], a = i.nodes.length - 1; 0 < a; a--) {
              var o = i.nodes[a];e < o.time && i.nodes.splice(a, 1);
            }var r = i.nodes[i.nodes.length - 1];r.time !== e && i.addNode(e, 0);
          }
        }, t.configConfirm = function (e) {
          var n = p("div", {}, t.dialogContent);n.innerText = "Shortening length may cause loss of node data.\nContinue?", t.addDialogButton("Shorten", function () {
            t.configLength(e), t.hideDialog();
          }), t.addDialogButton("Cancel", function () {
            t.hideDialog();
          }), t.showDialog(400, 100);
        }, t.config = function () {
          var e = function e(_e2, i) {
            var a = p("div", { position: "relative", width: "160px", height: "20px", margin: "0 20px 10px 20px" }, t.dialogContent),
                o = p("div", { position: "absolute", left: "0", top: "3px" }, a);o.innerText = _e2;var r = p("input", { position: "absolute", right: "0", padding: "4px", width: "60px", border: "none", background: "#666", color: "#fff", textAlign: "center" }, a);return r.value = i, r.addEventListener("keydown", function (e) {
              13 === e.which && (e.preventDefault(), n());
            }), { parent: a, label: o, input: r };
          },
              n = function n() {
            t.hideDialog();var e = parseFloat(i.input.value);isNaN(e) || (e < t.automaton.length ? t.configConfirm(e) : t.configLength(e));var n = parseInt(a.input.value);isNaN(n) || (t.automaton.resolution = n), t.automaton.renderAll();
          },
              i = e("Length", t.automaton.length),
              a = e("Resolution", t.automaton.resolution);t.addDialogButton("OK", n), t.addDialogButton("Cancel", function () {
            t.hideDialog();
          }), t.showDialog(200, 120);
        }, t.save = function () {
          var e = t.automaton.save(),
              n = p("div", {}, t.dialogContent);n.innerText = "Copy the JSON below";var i = p("input", { margin: "10px", padding: "4px", width: "100px", border: "none", background: "#666", color: "#fff" }, t.dialogContent);i.value = JSON.stringify(e), i.readOnly = !0, t.addDialogButton("OK", function () {
            t.hideDialog();
          }), t.showDialog(200, 120), i.select();
        }, t.addParam = function (e, n) {
          var i = p("div", { margin: "2px", padding: "2px 8px", width: "calc( 100% - 4px - 16px )", height: "20px", fontSize: "14px", background: "#333", cursor: "pointer" }, t.paramListInside);i.innerText = e, i.addEventListener("mousedown", function (e) {
            1 === e.which && t.selectParam(n);
          });var a = t.automaton.params[e];t.inspector.add(i, function () {
            return a.getValue().toFixed(3);
          }, .5), t.paramListChildren.push(i);
        }, t.clearParamList = function () {
          for (; t.paramListInside.firstChild;) {
            t.paramListInside.removeChild(t.paramListInside.firstChild);
          }t.paramListChildren = [];
        }, t.updateParamList = function () {
          t.clearParamList();var e = t.automaton.getParamNames();e.map(function (e, n) {
            t.addParam(e, n);
          }), t.selectParam(t.currentParamIndex);
        }, t.timelineMinV = 0, t.timelineMaxV = 1, t.timelineMinT = 0, t.timelineMaxT = 1, t.canvasWidth = 0, t.canvasHeight = 0, t.mapTime = function (e) {
          return t.canvasWidth * (e - t.timelineMinT) / (t.timelineMaxT - t.timelineMinT);
        }, t.mapValue = function (e) {
          return t.canvasHeight * (t.timelineMaxV - e) / (t.timelineMaxV - t.timelineMinV);
        }, t.rmapTime = function (e) {
          return t.timelineMinT + e / t.canvasWidth * (t.timelineMaxT - t.timelineMinT);
        }, t.rmapValue = function (e) {
          return -e / t.canvasHeight * (t.timelineMaxV - t.timelineMinV) + t.timelineMaxV;
        }, t.timelineNodeRadius = 4, t.timelineNodeRadiusGrab = 8, t.selectedTimelineNode = -1, t.selectTimelineNode = function (e) {
          t.selectedTimelineNode = e, t.resetModMenu();
        }, t.grabbingTimelineNode = -1, t.grabTimelineNode = function (e) {
          t.grabbingTimelineNode = e, t.selectTimelineNode(e);
        }, t.canvasDragging = !1, t.canvasSeeking = !1, t.canvasMouseX = 0, t.canvasMouseY = 0;var M = 0;return t.timelineCanvas.addEventListener("mousedown", function (e) {
          t.canvasDragging = !0;var n = t.currentParam;if (n) {
            var i = +new Date();if (i - M < 500) {
              var a = !1;if (n.nodes.map(function (e, i) {
                var o = t.mapTime(e.time),
                    r = t.mapValue(e.value);f(o, r, t.canvasMouseX, t.canvasMouseY) < t.timelineNodeRadiusGrab && (n.removeNode(i), t.selectTimelineNode(-1), a = !0);
              }), !a) {
                var o = n.addNode(t.rmapTime(t.canvasMouseX), t.rmapValue(t.canvasMouseY));t.grabTimelineNode(n.nodes.indexOf(o));
              }
            } else {
              var r = !1;n.nodes.map(function (e, n) {
                var i = t.mapTime(e.time),
                    a = t.mapValue(e.value);f(i, a, t.canvasMouseX, t.canvasMouseY) < t.timelineNodeRadiusGrab && (t.grabTimelineNode(n), r = !0);
              }), r || e.altKey && (t.canvasSeeking = !0);
            }M = i;
          }
        }), window.addEventListener("mousemove", function (e) {
          var n = t.timeline.getBoundingClientRect();if (t.canvasMouseX = e.clientX - n.left, t.canvasMouseY = e.clientY - n.top, t.grabbingTimelineNode !== -1) {
            var i = t.currentParam,
                a = (i.nodes[t.grabbingTimelineNode], t.canvasMouseX),
                o = t.rmapTime(a);if (t.beatSnap) {
              var r = 60 / t.beatSnapBpm,
                  l = t.timelineMaxT - t.timelineMinT,
                  s = Math.log(l / r) / Math.log(4),
                  u = Math.pow(4, Math.floor(s - .5)) * r,
                  d = Math.round((o - t.beatSnapOffset) / u) * u + t.beatSnapOffset;Math.abs(a - t.mapTime(d)) < t.timelineNodeRadiusGrab && (o = d);
            }i.setTime(t.grabbingTimelineNode, o), i.setValue(t.grabbingTimelineNode, t.rmapValue(t.canvasMouseY)), t.updateModMenu();
          }
        }), window.addEventListener("mouseup", function (e) {
          t.canvasDragging = !1, t.canvasSeeking = !1, t.grabbingTimelineNode !== -1 && (t.grabbingTimelineNode = -1);
        }), t.timelineCanvas.addEventListener("wheel", function (e) {
          if (e.preventDefault(), e.shiftKey) {
            var n = t.rmapTime(t.canvasMouseX);t.timelineMinT -= .005 * (n - t.timelineMinT) * e.deltaY, t.timelineMaxT += .005 * (t.timelineMaxT - n) * e.deltaY;var i = t.timelineMinT < 0,
                a = t.automaton.length < t.timelineMaxT;i ? a ? (t.timelineMinT = 0, t.timelineMaxT = t.automaton.length) : (t.timelineMaxT += 0 - t.timelineMinT, t.timelineMinT += 0 - t.timelineMinT) : a && (t.timelineMinT += t.automaton.length - t.timelineMaxT, t.timelineMaxT += t.automaton.length - t.timelineMaxT);
          } else if (e.altKey) {
            var o = t.rmapValue(t.canvasMouseY);t.timelineMinV -= .005 * (o - t.timelineMinV) * e.deltaY, t.timelineMaxV += .005 * (t.timelineMaxV - o) * e.deltaY;
          } else {
            var r = t.timelineMaxT - t.timelineMinT,
                l = t.timelineMaxV - t.timelineMinV;t.timelineMinT += e.deltaX * r / t.canvasWidth, t.timelineMaxT += e.deltaX * r / t.canvasWidth, t.timelineMinT < 0 && (t.timelineMaxT += 0 - t.timelineMinT, t.timelineMinT += 0 - t.timelineMinT), t.automaton.length < t.timelineMaxT && (t.timelineMinT += t.automaton.length - t.timelineMaxT, t.timelineMaxT += t.automaton.length - t.timelineMaxT), t.timelineMinV -= e.deltaY * l / t.canvasHeight, t.timelineMaxV -= e.deltaY * l / t.canvasHeight;
          }
        }), t.resetTimelineRange = function () {
          var e = t.currentParam;e && (t.timelineMinV = 0, t.timelineMaxV = 0, e.nodes.map(function (e) {
            t.timelineMinV = Math.min(t.timelineMinV, e.value), t.timelineMaxV = Math.max(t.timelineMaxV, e.value);
          }), t.timelineMinV === t.timelineMaxV && (t.timelineMinV -= .5, t.timelineMaxV += .5));
        }, t.updateTimelineCanvas = function (e) {
          t.timelineContext.clearRect(0, 0, t.canvasWidth, t.canvasHeight);for (var n = t.timelineMaxV - t.timelineMinV, i = Math.log10(n), a = Math.pow(10, Math.floor(i) - 1), o = i - Math.floor(i), r = Math.floor(t.timelineMinV / a), l = r * a, s = r - 10 * Math.floor(r / 10), u = r - 100 * Math.floor(r / 100), d = l; d < t.timelineMaxV; d += a) {
            t.timelineContext.globalAlpha = 0 === u ? .4 : 0 === s ? .4 - .3 * o : .1 - .1 * o, t.timelineContext.fillStyle = "#fff", t.timelineContext.fillRect(0, t.mapValue(d) - .5, t.canvasWidth, 1), s = (s + 1) % 10, u = (u + 1) % 100;
          }t.timelineContext.globalAlpha = 1;for (var c = t.timelineMaxT - t.timelineMinT, f = Math.log10(c), p = Math.pow(10, Math.floor(f) - 1), v = f - Math.floor(f), h = Math.floor(t.timelineMinT / p), g = h * p, M = h - 10 * Math.floor(h / 10), x = h - 100 * Math.floor(h / 100), T = g; T < t.timelineMaxT; T += p) {
            t.timelineContext.globalAlpha = 0 === x ? .4 : 0 === M ? .4 - .3 * v : .1 - .1 * v, t.timelineContext.fillStyle = "#fff", t.timelineContext.fillRect(t.mapTime(T) - .5, 0, 1, t.canvasHeight), M = (M + 1) % 10, x = (x + 1) % 100;
          }if (t.timelineContext.globalAlpha = 1, t.beatSnap) {
            var b = 60 / t.beatSnapBpm,
                y = t.timelineMaxT - t.timelineMinT,
                S = Math.log(y / b) / Math.log(4),
                D = Math.pow(4, Math.floor(S - .5)) * b,
                C = Math.floor(t.timelineMinT / D) * D + t.beatSnapOffset % D;t.timelineContext.font = "400 10px Helvetica Neue, sans-serif";for (var O = C; O < t.timelineMaxT; O += D) {
              t.timelineContext.globalAlpha = .6, t.timelineContext.fillStyle = m.accent, t.timelineContext.fillRect(t.mapTime(O) - .5, 0, 1, t.canvasHeight), t.timelineContext.fillText(((O - t.beatSnapOffset) / b).toFixed(2), t.mapTime(O) + 2, t.canvasHeight - 2);
            }t.timelineContext.globalAlpha = 1;
          }t.timelineContext.beginPath(), t.timelineContext.moveTo(0, t.mapValue(e.getValue(t.rmapTime(0))));for (var w = 1; w < t.timelineCanvas.width; w++) {
            var N = t.rmapTime(w),
                P = t.mapValue(e.getValue(N));t.timelineContext.lineTo(w, P);
          }t.timelineContext.strokeStyle = "#ddd", t.timelineContext.lineWidth = 2, t.timelineContext.lineCap = "round", t.timelineContext.lineJoin = "round", t.timelineContext.stroke();var E = t.mapTime(t.automaton.time),
              k = t.mapValue(t.currentParam.getValue(t.automaton.time));t.timelineContext.fillStyle = m.accent, t.timelineContext.fillRect(E - 1, 0, 2, t.canvasHeight), t.timelineContext.beginPath(), t.timelineContext.arc(E, k, 4, 0, 2 * Math.PI, !1), t.timelineContext.fill(), e.nodes.map(function (e, n) {
            var i = t.mapTime(e.time),
                a = t.mapValue(e.value);t.timelineContext.beginPath(), a < -t.timelineNodeRadius ? (t.timelineContext.moveTo(i, 5), t.timelineContext.lineTo(i - t.timelineNodeRadius, 5 + 1.7 * t.timelineNodeRadius), t.timelineContext.lineTo(i + t.timelineNodeRadius, 5 + 1.7 * t.timelineNodeRadius), t.timelineContext.closePath()) : t.canvasHeight + t.timelineNodeRadius < a ? (t.timelineContext.moveTo(i, t.canvasHeight - 5), t.timelineContext.lineTo(i - t.timelineNodeRadius, t.canvasHeight - 5 - 1.7 * t.timelineNodeRadius), t.timelineContext.lineTo(i + t.timelineNodeRadius, t.canvasHeight - 5 - 1.7 * t.timelineNodeRadius), t.timelineContext.closePath()) : t.timelineContext.arc(i, a, t.timelineNodeRadius, 0, 2 * Math.PI, !1), t.selectedTimelineNode === n ? (t.timelineContext.fillStyle = m.accent, t.timelineContext.strokeStyle = m.accent, t.timelineContext.lineWidth = 4, t.timelineContext.stroke(), t.timelineContext.fill()) : (t.timelineContext.fillStyle = "#222", t.timelineContext.strokeStyle = m.accent, t.timelineContext.lineWidth = 4, t.timelineContext.stroke(), t.timelineContext.fill());
          });
        }, t.updateTimeline = function () {
          if (t.canvasWidth = window.innerWidth - l - h, t.canvasHeight = n - i, t.timelineCanvas.width = t.canvasWidth, t.timelineCanvas.height = t.canvasHeight, t.canvasDragging) {
            var e = t.timelineMaxT - t.timelineMinT,
                a = t.canvasMouseX;if (a < 0) {
              var o = e * a / t.canvasWidth;t.timelineMinT += o, t.timelineMaxT += o;
            } else if (t.canvasWidth < a) {
              var r = e * (a - t.canvasWidth) / t.canvasWidth;t.timelineMinT += r, t.timelineMaxT += r;
            }t.timelineMinT < 0 && (t.timelineMaxT += 0 - t.timelineMinT, t.timelineMinT += 0 - t.timelineMinT), t.automaton.length < t.timelineMaxT && (t.timelineMinT += t.automaton.length - t.timelineMaxT, t.timelineMaxT += t.automaton.length - t.timelineMaxT);
          }var s = t.currentParam;s && t.updateTimelineCanvas(s);
        }, t.paramBoxListeners = [], t.resetModMenu = function () {
          var e = t.currentParam;if (e) {
            for (; t.modMenuInside.firstChild;) {
              t.modMenuInside.removeChild(t.modMenuInside.firstChild);
            }t.paramBoxListeners = [];var n = e.nodes[t.selectedTimelineNode];if (n) {
              var i = function i() {
                p("div", { width: "170px", height: "1px", margin: "0 5px 5px 5px", background: "#666" }, t.modMenuInside);
              },
                  a = function a(n, i, _a, o) {
                var r = function r(e) {
                  var t = parseFloat(e);t = isNaN(t) ? 0 : t, d.innerText = t.toFixed(3), c.value = t, "function" == typeof _a && (_a(t), t = i(), d.innerText = t.toFixed(3), c.value = t);
                },
                    l = p("div", { position: "relative", margin: "0 0 5px 0", width: "100%", height: "14px", fontSize: "12px" }, o),
                    s = p("div", { position: "absolute", left: "20px", top: "0", width: "50px", height: "100%" }, l);s.innerText = n;var u = p("div", { position: "absolute", right: "10px", top: "0", width: "60px", height: "100%" }, l),
                    d = p("div", { position: "absolute", left: "0", top: "0", width: "100%", height: "100%", textAlign: "center", cursor: "pointer" }, u),
                    m = 0;d.addEventListener("mousedown", function (e) {
                  var t = +new Date();t - m < 500 ? (p(c, { display: "block" }), setTimeout(function () {
                    c.focus(), c.select();
                  }, 10)) : !function () {
                    var t = e.clientY,
                        n = function n(e) {
                      var n = parseFloat(d.innerText),
                          i = e.clientY,
                          a = t - i;if (t = i, e.shiftKey) {
                        for (var o = Math.abs(a), l = Math.sign(a), s = 0; s < o; s++) {
                          var u = Math.abs(n),
                              m = Math.sign(n + 1e-4 * l),
                              c = Math.floor(Math.log10(u + 1e-4 * l * m)) - 1 - (e.altKey ? 1 : 0),
                              f = Math.max(.001, Math.pow(10, c)) * l;n = parseFloat((n + f).toFixed(3));
                        }r(n);
                      } else {
                        var p = e.altKey ? .001 : .01;r((n + a * p).toFixed(3));
                      }
                    },
                        i = function e(t) {
                      window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", e);
                    };window.addEventListener("mousemove", n), window.addEventListener("mouseup", i);
                  }(), m = t;
                });var c = p("input", { position: "absolute", display: "none", left: "0", top: "0", width: "100%", height: "100%", border: "none", padding: "0", background: "#666", color: "#fff", textAlign: "center" }, u);return c.addEventListener("keydown", function (e) {
                  13 === e.which && (e.preventDefault(), r(c.value), p(c, { display: "none" }));
                }), c.addEventListener("blur", function () {
                  r(c.value), p(c, { display: "none" });
                }), r(i()), t.paramBoxListeners.push(function () {
                  var e = i();d.innerText = e.toFixed(3), c.value = e;
                }), e;
              };a("time", function () {
                return n.time;
              }, function (n) {
                return e.setTime(t.selectedTimelineNode, n);
              }, t.modMenuInside), a("value", function () {
                return n.value;
              }, function (n) {
                return e.setValue(t.selectedTimelineNode, n);
              }, t.modMenuInside), i();for (var o = p("div", { margin: "5px 5px 0 5px", width: "180px" }, t.modMenuInside), r = n.mode, l = [], s = function s(n) {
                var i = p("img", { width: "30px", height: "30px", margin: "2px", cursor: "pointer", filter: n === r ? "" : "grayscale( 90% )" }, o);l.push(i), i.src = c.modes[n], i.addEventListener("mousedown", function (i) {
                  e.setMode(t.selectedTimelineNode, n), t.resetModMenu();
                }), t.inspector.add(i, d.default.modeNames[n], .5);
              }, u = 0; u < d.default.MODES; u++) {
                s(u);
              }var m = function m(i) {
                a(i, function () {
                  return n.params[i];
                }, function (n) {
                  var a = {};a[i] = n, e.setParams(t.selectedTimelineNode, a);
                }, t.modMenuInside);
              };for (var f in n.params) {
                m(f);
              }i();for (var v = function v(i) {
                var o = p("div", { position: "relative", margin: "10px 0 20px 0", width: "100%", minHeight: "24px" }, t.modMenuInside),
                    r = p("img", { position: "absolute", width: "24px", height: "24px", left: "10px", cursor: "pointer", filter: n.mods[i] ? "" : "grayscale( 90% )" }, o);if (r.src = c.mods[i], r.addEventListener("mousedown", function (a) {
                  e.activeModParams(t.selectedTimelineNode, i, !n.mods[i]), t.resetModMenu();
                }), t.inspector.add(r, d.default.modNames[i], .5), n.mods[i]) {
                  var l = p("div", { position: "relative", left: "30px", width: "calc( 100% - 30px )" }, o),
                      s = function s(o) {
                    a(o, function () {
                      return n.mods[i][o];
                    }, function (n) {
                      var a = {};a[o] = n, e.setModParams(t.selectedTimelineNode, i, a);
                    }, l);
                  };for (var u in n.mods[i]) {
                    s(u);
                  }
                }
              }, h = 0; h < d.default.MODS; h++) {
                v(h);
              }
            }
          }
        }, t.updateModMenu = function () {
          t.paramBoxListeners.map(function (e) {
            e();
          });
        }, t.selectParam = function (e) {
          e < 0 || t.paramListChildren.length <= e || (t.currentParam && p(t.paramListChildren[t.currentParamIndex], { background: "#333" }), t.currentParamIndex = e, t.currentParamName = t.paramListChildren[t.currentParamIndex].innerText, t.currentParam = t.automaton.params[t.currentParamName], p(t.paramListChildren[t.currentParamIndex], { background: "#555" }), t.selectTimelineNode(-1));
        }, p(t.inspector.el, {}, document.body), t.update = function () {
          if (t.canvasSeeking) {
            var e = t.rmapTime(t.canvasMouseX);t.automaton.seek(e);
          }t.updateTimeline(), t.paramListChildren.length !== t.automaton.countParams() && t.updateParamList();
        }, t.resize = function () {}, window.addEventListener("resize", t.resize), t.getState = function () {
          var e = { beatSnap: t.beatSnap, beatSnapBpm: t.beatSnapBpm, beatSnapOffset: t.beatSnapOffset, timelineMinT: t.timelineMinT, timelineMaxT: t.timelineMaxT, timelineMinV: t.timelineMinV, timelineMaxV: t.timelineMaxV };return e;
        }, t.setState = function (e) {
          var n = function n(e, t) {
            return "undefined" != typeof e ? e : t;
          };t.beatSnap = n(e.beatSnap, !1), t.beatSnapBpm = n(e.beatSnapBpm, 140), t.beatSnapOffset = n(e.beatSnapOffset, 0), t.timelineMinT = n(e.timelineMinT, 0), t.timelineMaxT = n(e.timelineMaxT, 1), t.timelineMinV = n(e.timelineMinV, 0), t.timelineMaxV = n(e.timelineMaxV, 1);
        }, t.updateParamList(), t.selectParam(0), t;
      };n.default = h;
    }, { "./colors": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/colors.js", "./images": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/images.js", "./interpolator": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/interpolator.js" }], "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/images.js": [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = e("./interpolator"),
          o = i(a),
          r = e("./colors"),
          l = i(r),
          s = void 0,
          u = function u() {
        var e = {};s = (0, l.default)();var t = document.createElement("canvas"),
            n = t.width = t.height = 128,
            i = t.getContext("2d");i.lineCap = "round", i.lineJoin = "round";var a = function a(e) {
          return i.save(), i.clearRect(0, 0, n, n), e(), i.restore(), t.toDataURL();
        };e.modes = [];for (var r = function r(t) {
          e.modes[t] = a(function () {
            i.beginPath(), i.moveTo(n / 8, n / 8 * 7);for (var e = o.default.generate({ mode: t }), a = 1; a < e.length; a++) {
              i.lineTo(n / 8 + n / 4 * 3 * a / e.length, n / 8 * 7 - n / 4 * 3 * e[a]);
            }i.strokeStyle = s.accent, i.lineWidth = n / 12, i.stroke();
          });
        }, u = 0; u < o.default.MODES; u++) {
          r(u);
        }return e.mods = [], e.mods[o.default.MOD_RESET] = a(function () {
          i.beginPath(), i.arc(n / 2, n / 2, n / 3, -Math.PI / 4, Math.PI / 4 * 5, !1), i.moveTo(n / 2, n / 2), i.lineTo(n / 2, n / 8), i.strokeStyle = s.accent, i.lineWidth = n / 12, i.stroke();
        }), e.mods[o.default.MOD_SIN] = a(function () {
          i.beginPath(), i.moveTo(n / 8, n / 2);for (var e = o.default.generate({ mode: o.default.MODE_LINEAR, start: .5, end: .5, mods: [!1, {}] }), t = 1; t < e.length; t++) {
            i.lineTo(n / 8 + n / 4 * 3 * t / e.length, n / 8 * 7 - n / 4 * 3 * e[t]);
          }i.strokeStyle = s.accent, i.lineWidth = n / 12, i.stroke();
        }), e.mods[o.default.MOD_NOISE] = a(function () {
          i.beginPath(), i.moveTo(n / 8, n / 2);for (var e = o.default.generate({ mode: o.default.MODE_LINEAR, start: .5, end: .5, mods: [!1, !1, {}] }), t = 1; t < e.length; t++) {
            i.lineTo(n / 8 + n / 4 * 3 * t / e.length, n / 8 * 7 - n / 4 * 3 * e[t]);
          }i.strokeStyle = s.accent, i.lineWidth = n / 12, i.stroke();
        }), e.mods[o.default.MOD_LOFI] = a(function () {
          i.beginPath(), i.moveTo(n / 8, n / 8 * 7);for (var e = o.default.generate({ mode: o.default.MODE_LINEAR, start: 0, end: 1, mods: [!1, !1, !1, {}] }), t = 1; t < e.length; t++) {
            i.lineTo(n / 8 + n / 4 * 3 * t / e.length, n / 8 * 7 - n / 4 * 3 * e[t]);
          }i.strokeStyle = s.accent, i.lineWidth = n / 12, i.stroke();
        }), e.save = a(function () {
          i.beginPath(), i.moveTo(n / 8, n / 8), i.lineTo(n / 8, n / 8 * 7), i.lineTo(n / 8 * 7, n / 8 * 7), i.lineTo(n / 8 * 7, n / 4), i.lineTo(n / 4 * 3, n / 8), i.closePath(), i.moveTo(n / 4, n / 2), i.lineTo(n / 4 * 3, n / 2), i.lineTo(n / 4 * 3, n / 6 * 5), i.lineTo(n / 4, n / 6 * 5), i.closePath(), i.moveTo(n / 4, n / 6), i.lineTo(n / 3 * 2, n / 6), i.lineTo(n / 3 * 2, n / 8 * 3), i.lineTo(n / 4, n / 8 * 3), i.closePath(), i.moveTo(n / 2, n / 5), i.lineTo(n / 8 * 5, n / 5), i.lineTo(n / 8 * 5, n / 3), i.lineTo(n / 2, n / 3), i.closePath(), i.fillStyle = s.accent, i.fill();
        }), e.beatsnap = a(function () {
          i.beginPath(), i.moveTo(n / 8, n / 4 * 3), i.lineTo(n / 8, n / 8 * 7), i.lineTo(n / 8 * 3, n / 8 * 7), i.lineTo(n / 8 * 3, n / 4 * 3), i.closePath(), i.moveTo(n / 8 * 5, n / 4 * 3), i.lineTo(n / 8 * 5, n / 8 * 7), i.lineTo(n / 8 * 7, n / 8 * 7), i.lineTo(n / 8 * 7, n / 4 * 3), i.closePath(), i.fillStyle = s.accent, i.fill(), i.beginPath(), i.moveTo(n / 8, n / 16 * 11), i.lineTo(n / 8, n / 2), i.arc(n / 2, n / 2, n / 8 * 3, Math.PI, 0, !1), i.lineTo(n / 8 * 7, n / 16 * 11), i.lineTo(n / 8 * 5, n / 16 * 11), i.lineTo(n / 8 * 5, n / 2), i.arc(n / 2, n / 2, n / 8, 0, Math.PI, !0), i.lineTo(n / 8 * 3, n / 16 * 11), i.closePath(), i.fillStyle = s.accent, i.fill();
        }), e.config = a(function () {
          i.beginPath();for (var e = n / 2, t = 0; t < 24; t++) {
            var a = 0 === (2 & t) ? .42 * n : .3 * n,
                o = Math.PI * (t - .5) / 12;0 === t ? i.moveTo(e + Math.cos(o) * a, e + Math.sin(o) * a) : i.lineTo(e + Math.cos(o) * a, e + Math.sin(o) * a);
          }i.closePath(), i.arc(e, e, .15 * n, 0, 2 * Math.PI, !0), i.fillStyle = s.accent, i.fill();
        }), e.save = a(function () {
          i.beginPath(), i.moveTo(n / 8, n / 8), i.lineTo(n / 8, n / 8 * 7), i.lineTo(n / 8 * 7, n / 8 * 7), i.lineTo(n / 8 * 7, n / 4), i.lineTo(n / 4 * 3, n / 8), i.closePath(), i.moveTo(n / 4, n / 2), i.lineTo(n / 4 * 3, n / 2), i.lineTo(n / 4 * 3, n / 6 * 5), i.lineTo(n / 4, n / 6 * 5), i.closePath(), i.moveTo(n / 4, n / 6), i.lineTo(n / 3 * 2, n / 6), i.lineTo(n / 3 * 2, n / 8 * 3), i.lineTo(n / 4, n / 8 * 3), i.closePath(), i.moveTo(n / 2, n / 5), i.lineTo(n / 8 * 5, n / 5), i.lineTo(n / 8 * 5, n / 3), i.lineTo(n / 2, n / 3), i.closePath(), i.fillStyle = s.accent, i.fill();
        }), e;
      };n.default = u;
    }, { "./colors": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/colors.js", "./interpolator": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/interpolator.js" }], "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/interpolator.js": [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          o = e("./noise"),
          r = i(o),
          l = function l(e) {
        var t = {};for (var n in e) {
          t[n] = e[n];
        }return t;
      },
          s = function s(e, t) {
        return "number" == typeof e ? e : t;
      },
          u = {};u.MODE_HOLD = 0, u.MODE_LINEAR = 1, u.MODE_SMOOTH = 2, u.MODE_EXP = 3, u.MODE_SPRING = 4, u.MODE_GRAVITY = 5, u.MODES = 6, u.modeNames = ["Hold", "Linear", "Smoothstep", "Exp. Smooth", "Critically Damped Spring", "Gravity and Bounce"], u.MOD_RESET = 0, u.MOD_SIN = 1, u.MOD_NOISE = 2, u.MOD_LOFI = 3, u.MODS = 4, u.modNames = ["Reset", "Sine Curve", "Perlin Noise", "Lo-Fi"], u.generate = function (e) {
        for (var t = "object" === ("undefined" == typeof e ? "undefined" : a(e)) ? e : {}, n = s(t.mode, u.MODE_LINEAR), i = s(t.start, 0), o = s(t.end, 1), d = s(t.length, 32), m = s(t.deltaTime, .01), c = "object" === a(t.mods) ? l(t.mods) : [], f = 0; f < u.MODS; f++) {
          c[f] = !!c[f] && c[f];
        }var p = [i];if (n === u.MODE_HOLD) {
          for (var v = 1; v < d; v++) {
            p[v] = i;
          }p[d - 1] = o;
        } else if (n === u.MODE_LINEAR) for (var h = 1; h < d; h++) {
          var g = h / (d - 1);p[h] = i + (o - i) * g;
        } else if (n === u.MODE_SMOOTH) for (var M = 1; M < d; M++) {
          var x = M / (d - 1),
              T = x * x * (3 - 2 * x);p[M] = i + (o - i) * T;
        } else if (n === u.MODE_EXP) for (var b = s(t.factor, 10), y = 1; y < d; y++) {
          var S = y * m,
              D = 1 - Math.exp(-b * S);p[y] = i + (o - i) * D;
        } else if (n === u.MODE_SPRING) for (var C = s(t.rate, 500), O = s(t.damp, 1), w = s(t.vel, 0), N = i, P = 1; P < d; P++) {
          w += (-C * (N - o) - 2 * w * Math.sqrt(C) * O) * m, N += w * m, p[P] = N;
        } else if (n === u.MODE_GRAVITY) for (var E = s(t.gravity, 70), k = s(t.bounce, .3), L = s(t.vel, 0), _ = Math.sign(o - i), I = i, V = 1; V < d; V++) {
          L += E * _ * m, I += L * m, _ !== Math.sign(o - I) && (I = o + (o - I) * k, L *= -k), p[V] = I;
        }if (c[u.MOD_SIN]) for (var R = s(c[u.MOD_SIN].freq, 2), Y = s(c[u.MOD_SIN].amp, .5), j = s(c[u.MOD_SIN].phase, 0), B = 0; B < d; B++) {
          p[B] += Math.sin(j * Math.PI * 2) * Y, j = (j + 1 / (d - 1) * R) % 1;
        }if (c[u.MOD_NOISE]) for (var A = s(c[u.MOD_NOISE].amp, 1), H = (0, r.default)({ length: d, recursion: s(c[u.MOD_NOISE].recursion, 3), freq: s(c[u.MOD_NOISE].freq, 1) * d / (d - 1), reso: s(c[u.MOD_NOISE].reso, 4), seed: s(c[u.MOD_NOISE].seed, 175) }), J = 0; J < d; J++) {
          p[J] += H[J] * A;
        }if (c[u.MOD_LOFI]) for (var U = (d - 1) / s(c[u.MOD_LOFI].freq, 4), W = 0; W < d; W++) {
          p[W] = p[Math.ceil(Math.floor(W / U) * U)];
        }return p;
      }, n.default = u;
    }, { "./noise": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/noise.js" }], "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/main.js": [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          o = e("./param"),
          r = i(o),
          l = e("./gui"),
          s = i(l),
          u = function u(e) {
        var t = {},
            n = "object" === ("undefined" == typeof e ? "undefined" : a(e)) ? e : {},
            i = n.data ? JSON.parse(n.data) : {};if (t.time = 0, t.length = "number" == typeof i.length ? i.length : 1, t.resolution = "number" == typeof i.resolution ? i.resolution : 1e3, t.params = {}, t.createParam = function (e) {
          var n = new r.default(t);return t.params[e] = n, n;
        }, t.getParamNames = function () {
          var e = [];for (var n in t.params) {
            e.push(n);
          }return e = e.sort();
        }, t.countParams = function () {
          var e = 0;for (var n in t.params) {
            e++;
          }return e;
        }, i.params) for (var o in i.params) {
          var l = t.createParam(o);l.load(i.params[o]);
        }return t.seek = function (e) {
          var i = e - Math.floor(e / t.length) * t.length,
              a = "function" == typeof n.onseek ? n.onseek(i) : null;t.time = "number" == typeof a ? a % t.length : t.time;
        }, n.gui && (t.gui = (0, s.default)(t), i.gui && t.gui.setState(i.gui)), t.renderAll = function () {
          for (var e in t.params) {
            t.params[e].render();
          }
        }, t.update = function (e) {
          t.time = e % t.length, t.gui && t.gui.update();
        }, t.auto = function (e) {
          if (!t.params[e]) {
            t.createParam(e);
          }return t.params[e].getValue();
        }, t.save = function () {
          var e = { length: t.length, resolution: t.resolution };e.params = {};for (var n in t.params) {
            var i = t.params[n];e.params[n] = i.nodes;
          }return t.gui && (e.gui = t.gui.getState()), e;
        }, t;
      };t.exports = u;
    }, { "./gui": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/gui.js", "./param": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/param.js" }], "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/noise.js": [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          o = e("./xorshift"),
          r = i(o),
          l = function l(e, t, n) {
        var i = n * n * (3 - 2 * n);return e + (t - e) * i;
      },
          s = function s(e) {
        var t = "object" === ("undefined" == typeof e ? "undefined" : a(e)) ? e : { length: 32, recursion: 6, freq: 1, reso: 4, seed: 0 };t.length = parseInt(t.length), t.recursion = parseInt(t.recursion), t.reso = parseInt(t.reso), t.seed = parseInt(t.seed);var n = [0];(0, r.default)(t.seed);for (var i = 1; i < t.reso; i++) {
          n[i] = 2 * (0, r.default)() - 1;
        }n.push(n[0]);for (var o = [], s = 0; s < t.length; s++) {
          o[s] = 0;for (var u = s / t.length, d = 0; d < t.recursion; d++) {
            var m = u * t.freq * t.reso * Math.pow(2, d) % t.reso,
                c = Math.floor(m),
                f = m % 1,
                p = Math.pow(2, -d - 1);o[s] += p * l(n[c], n[c + 1], f);
          }
        }return o;
      };n.default = s;
    }, { "./xorshift": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/xorshift.js" }], "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/param.js": [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          l = e("./interpolator"),
          s = i(l),
          u = function u(e) {
        if ("object" !== ("undefined" == typeof e ? "undefined" : r(e))) return e;var t = {};for (var n in e) {
          t[n] = e[n];
        }return t;
      },
          d = function () {
        function e(t) {
          a(this, e);var n = this;n.automaton = t, n.values = [];for (var i = Math.ceil(n.automaton.resolution * n.automaton.length) + 1, o = 0; o < i; o++) {
            n.values[o] = 0;
          }n.nodes = [], n.addNode(0, 0), n.addNode(n.automaton.length, 1), n.render();
        }return o(e, [{ key: "load", value: function value(e) {
            var t = this;t.nodes = e, t.render();
          } }, { key: "sortNodes", value: function value() {
            var e = this;e.nodes.sort(function (e, t) {
              return e.time - t.time;
            });
          } }, { key: "render", value: function value(e) {
            var t = this;t.values = [];for (var n = 1; n < t.nodes.length; n++) {
              var i = t.nodes[n - 1].time,
                  a = Math.floor(i * t.automaton.resolution),
                  o = t.nodes[n].time,
                  r = Math.floor(o * t.automaton.resolution),
                  l = 1 === n || t.nodes[n].mods[s.default.MOD_RESET],
                  u = t.nodes[n].mods[s.default.MOD_RESET] ? t.nodes[n].mods[s.default.MOD_RESET].velocity : 0,
                  d = 1 / t.automaton.resolution,
                  m = { mode: t.nodes[n].mode, start: l ? t.nodes[n - 1].value : t.values[a], end: t.nodes[n].value, deltaTime: d, length: r - a + 1, vel: !l && 2 < t.values.length ? (t.values[t.values.length - 1] - t.values[t.values.length - 2]) / d : u, mods: t.nodes[n].mods };for (var c in t.nodes[n].params) {
                m[c] = t.nodes[n].params[c];
              }var f = s.default.generate(m);t.values.pop(), t.values = t.values.concat(f);
            }
          } }, { key: "addNode", value: function value(e, t) {
            var n = this,
                i = n.nodes.filter(function (t) {
              return e < t.time;
            })[0];if (!i) {
              i = { mode: s.default.MODE_LINEAR, params: {}, mods: [] };for (var a = 0; a < s.default.MODS; a++) {
                i.mods[a] = !1;
              }
            }var o = { time: e, value: t, mode: i.mode, params: u(i.params), mods: i.mods.map(function (e) {
                return u(e);
              }) };return n.nodes.push(o), n.sortNodes(), n.render(), o;
          } }, { key: "setTime", value: function value(e, t) {
            var n = this;if (!(e < 0 || n.nodes.length <= e)) return 0 !== e && n.nodes.length - 1 !== e && (n.nodes[e].time = Math.min(Math.max(t, n.nodes[e - 1].time + 1 / n.automaton.resolution), n.nodes[e + 1].time - 1 / n.automaton.resolution), n.render()), n.nodes[e].time;
          } }, { key: "setValue", value: function value(e, t) {
            var n = this;if (!(e < 0 || n.nodes.length <= e)) return n.nodes[e].value = t, n.render(), n.nodes[e].value;
          } }, { key: "setMode", value: function value(e, t) {
            var n = this;if (!(e < 1 || n.nodes.length <= e)) {
              var i = n.nodes[e];i.mode = t, t === s.default.MODE_HOLD ? i.params = {} : t === s.default.MODE_LINEAR ? i.params = {} : t === s.default.MODE_SMOOTH ? i.params = {} : t === s.default.MODE_EXP ? i.params = { factor: 10 } : t === s.default.MODE_SPRING ? i.params = { rate: 500, damp: 1 } : t === s.default.MODE_GRAVITY && (i.params = { gravity: 70, bounce: .3 }), n.render();
            }
          } }, { key: "setParams", value: function value(e, t) {
            var n = this;if (!(e < 0 || n.nodes.length <= e)) {
              for (var i in t) {
                n.nodes[e].params[i] = t[i];
              }n.render();
            }
          } }, { key: "activeModParams", value: function value(e, t, n) {
            var i = this;if (!(e < 0 || i.nodes.length <= e || t < 0 || s.default.MODS <= t)) if (n) {
              i.nodes[e].mods[t] = {};var a = void 0;t === s.default.MOD_RESET ? a = { velocity: 0 } : t === s.default.MOD_SIN ? a = { freq: 5, amp: .1, phase: 0 } : t === s.default.MOD_NOISE ? a = { freq: 1, amp: .2, reso: 8, recursion: 4, seed: 1 } : t === s.default.MOD_LOFI && (a = { freq: 10 }), i.setModParams(e, t, a);
            } else i.nodes[e].mods[t] = !1;
          } }, { key: "setModParams", value: function value(e, t, n) {
            var i = this;if (!(e < 0 || i.nodes.length <= e || t < 0 || s.default.MODS <= t)) {
              for (var a in n) {
                i.nodes[e].mods[t][a] = n[a];
              }i.render();
            }
          } }, { key: "removeNode", value: function value(e) {
            var t = this;if (!(e < 1 || t.nodes.length - 1 <= e)) {
              var n = t.nodes.splice(e, 1);return t.render(), n;
            }
          } }, { key: "getValue", value: function value(e) {
            var t = this,
                n = "number" == typeof e ? e : t.automaton.time;n %= t.automaton.length;var i = n * t.automaton.resolution,
                a = Math.floor(i),
                o = i % 1,
                r = t.values[a],
                l = t.values[a + 1];return r + (l - r) * o;
          } }]), e;
      }();n.default = d;
    }, { "./interpolator": "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/interpolator.js" }], "/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/xorshift.js": [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });var i = void 0,
          a = function a(e) {
        return i = e || i || 1, i ^= i << 13, i ^= i >>> 17, i ^= i << 5, i / Math.pow(2, 32) + .5;
      };n.default = a;
    }, {}] }, {}, ["/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/main.js"])("/Users/Yutaka/Dropbox/pro/JavaScript/automaton/src/script/main.js");
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/bvh.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xorshift = require('./xorshift');

var _xorshift2 = _interopRequireDefault(_xorshift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bvh = function bvh(_array) {
  var tris = [];

  for (var iTri = 0; iTri < _array.length / 9; iTri++) {
    var verts = [];
    var min = [1E9, 1E9, 1E9];
    var max = [-1E9, -1E9, -1E9];
    var cen = [0.0, 0.0, 0.0];

    for (var iVert = 0; iVert < 3; iVert++) {
      verts[iVert] = [];

      for (var iAx = 0; iAx < 3; iAx++) {
        verts[iVert][iAx] = _array[iTri * 9 + iVert * 3 + iAx];
        min[iAx] = Math.min(min[iAx], verts[iVert][iAx]);
        max[iAx] = Math.max(max[iAx], verts[iVert][iAx]);
        cen[iAx] += verts[iVert][iAx];
      }
    }

    cen = cen.map(function (_v) {
      return _v / 3.0;
    });

    tris.push({
      verts: verts,
      min: min,
      max: max,
      cen: cen
    });
  }

  // ------

  var vLength = function vLength(_v1, _v2) {
    var x = _v2[0] - _v1[0];
    var y = _v2[1] - _v1[1];
    var z = _v2[2] - _v1[2];
    return Math.sqrt(x * x + y * y + z * z);
  };

  var clustersN = 4;
  var clusterDepth = 8;
  var clusterIter = 8;

  var cluster = function cluster(_tris, _vbox1, _vbox2) {
    var clusters = [];
    for (var iClu = 0; iClu < clustersN; iClu++) {
      clusters[iClu] = {
        tris: [],
        min: [1E9, 1E9, 1E9],
        max: [-1E9, -1E9, -1E9],
        cen: [_vbox1[0] + (_vbox2[0] - _vbox1[0]) * (0, _xorshift2.default)(), _vbox1[1] + (_vbox2[1] - _vbox1[1]) * (0, _xorshift2.default)(), _vbox1[2] + (_vbox2[2] - _vbox1[2]) * (0, _xorshift2.default)()],
        newsum: [0.0, 0.0, 0.0]
      };
    }

    for (var iIter = 0; iIter < clusterIter; iIter++) {
      _tris.map(function (_tri) {
        var nearestI = void 0;
        var nearestL = 1E9;

        for (var _iClu = 0; _iClu < clustersN; _iClu++) {
          var l = vLength(_tri.cen, clusters[_iClu].cen);
          if (l < nearestL) {
            nearestI = _iClu;
            nearestL = l;
          }
        }

        clusters[nearestI].tris.push(_tri);
        clusters[nearestI].min = [Math.min(clusters[nearestI].min[0], _tri.min[0]), Math.min(clusters[nearestI].min[1], _tri.min[1]), Math.min(clusters[nearestI].min[2], _tri.min[2])];
        clusters[nearestI].max = [Math.max(clusters[nearestI].max[0], _tri.max[0]), Math.max(clusters[nearestI].max[1], _tri.max[1]), Math.max(clusters[nearestI].max[2], _tri.max[2])];
        clusters[nearestI].newsum = [clusters[nearestI].newsum[0] + _tri.cen[0], clusters[nearestI].newsum[1] + _tri.cen[1], clusters[nearestI].newsum[2] + _tri.cen[2]];
      });

      if (iIter !== clusterIter - 1) {
        for (var _iClu2 = 0; _iClu2 < clustersN; _iClu2++) {
          clusters[_iClu2] = {
            tris: [],
            min: [1E9, 1E9, 1E9],
            max: [-1E9, -1E9, -1E9],
            cen: [clusters[_iClu2].newsum[0] / clusters[_iClu2].tris.length, clusters[_iClu2].newsum[1] / clusters[_iClu2].tris.length, clusters[_iClu2].newsum[2] / clusters[_iClu2].tris.length],
            newsum: [0.0, 0.0, 0.0]
          };
        }
      }
    }

    return clusters;
  };

  var treeClustering = function treeClustering(_tris, _vbox1, _vbox2, _depth) {
    var depth = _depth || 0;
    var tree = {
      min: _vbox1,
      max: _vbox2,
      clusters: cluster(_tris, _vbox1, _vbox2)
    };
    tree.clusters = tree.clusters.filter(function (_ctree) {
      return _ctree.tris.length !== 0;
    });
    if (depth < clusterDepth) {
      for (var iTree = 0; iTree < tree.clusters.length; iTree++) {
        tree.clusters[iTree] = treeClustering(tree.clusters[iTree].tris, tree.clusters[iTree].min, tree.clusters[iTree].max, depth + 1);
      }
    }
    return tree;
  };

  var rootCluster = treeClustering(tris, [-1.0, -1.0, -1.0], [1.0, 1.0, 1.0]);

  // ------

  var construct = function construct(_cluster) {
    var buffer = [];

    if (_cluster.clusters) {
      buffer = buffer.concat([_cluster.min[0], _cluster.min[1], _cluster.min[2], 0, _cluster.max[0], _cluster.max[1], _cluster.max[2], 0, 0.0, 0.0, 0.0, 0.0]);

      var bufferEndIndex = 1;
      _cluster.clusters.map(function (_clu) {
        var nextBuffer = construct(_clu);
        bufferEndIndex += nextBuffer.length / 12;
        buffer = buffer.concat(nextBuffer);
      });
      buffer[7] = bufferEndIndex;
    } else {
      _cluster.tris.map(function (_tri) {
        buffer = buffer.concat([_tri.verts[0][0], _tri.verts[0][1], _tri.verts[0][2], 1, _tri.verts[1][0], _tri.verts[1][1], _tri.verts[1][2], 1, _tri.verts[2][0], _tri.verts[2][1], _tri.verts[2][2], 0]);
      });
    }

    return buffer;
  };

  var buffer = construct(rootCluster);
  while (buffer.length % (768 * 4) !== 0) {
    buffer = buffer.concat([0.0, 0.0, 0.0, -1, 0.0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0]);
  }

  // ------

  var ret = new Float32Array(buffer);

  return {
    triangles: _array.length / 9,
    length: buffer.length,
    array: ret
  };
};

exports.default = bvh;

},{"./xorshift":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/xorshift.js"}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/cube.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  pos: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, 1, -1],
  nor: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].reduce(function (p, v) {
    for (var i = 0; i < 6; i++) {
      p = p.concat(v);
    }return p;
  }, [])
};

},{}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/glcat.min.js":[function(require,module,exports){
"use strict";
function _classCallCheck(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function e(e, r) {
    for (var t = 0; t < r.length; t++) {
      var a = r[t];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }return function (r, t, a) {
    return t && e(r.prototype, t), a && e(r, a), r;
  };
}(),
    GLCat = function () {
  function e(r) {
    _classCallCheck(this, e);var t = this;t.gl = r;var a = t.gl;a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.enable(a.BLEND), a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA), a.getExtension("OES_texture_float"), a.getExtension("OES_texture_float_linear"), t.extDrawBuffers = a.getExtension("WEBGL_draw_buffers"), t.extInstancedArrays = a.getExtension("ANGLE_instanced_arrays"), t.currentProgram = null;
  }return _createClass(e, [{ key: "createProgram", value: function value(e, r, t) {
      var a = this,
          E = a.gl,
          u = void 0;u = "function" == typeof t ? t : function (e) {
        console.error(e);
      };var n = E.createShader(E.VERTEX_SHADER);if (E.shaderSource(n, e), E.compileShader(n), !E.getShaderParameter(n, E.COMPILE_STATUS)) return u(E.getShaderInfoLog(n)), null;var f = E.createShader(E.FRAGMENT_SHADER);if (E.shaderSource(f, r), E.compileShader(f), !E.getShaderParameter(f, E.COMPILE_STATUS)) return u(E.getShaderInfoLog(f)), null;var T = E.createProgram();return E.attachShader(T, n), E.attachShader(T, f), E.linkProgram(T), E.getProgramParameter(T, E.LINK_STATUS) ? (T.locations = {}, T) : (u(E.getProgramInfoLog(T)), null);
    } }, { key: "useProgram", value: function value(e) {
      var r = this,
          t = r.gl;t.useProgram(e), r.currentProgram = e;
    } }, { key: "createVertexbuffer", value: function value(e) {
      var r = this,
          t = r.gl,
          a = t.createBuffer();return e && r.setVertexbuffer(a, e), a;
    } }, { key: "setVertexbuffer", value: function value(e, r) {
      var t = this,
          a = t.gl;a.bindBuffer(a.ARRAY_BUFFER, e), a.bufferData(a.ARRAY_BUFFER, new Float32Array(r), a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, null), e.length = r.length;
    } }, { key: "createIndexbuffer", value: function value(e) {
      var r = this,
          t = r.gl,
          a = t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, a), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Int16Array(e), t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null), a.length = e.length, a;
    } }, { key: "getAttribLocation", value: function value(e) {
      var r = this,
          t = r.gl,
          a = void 0;return r.currentProgram.locations[e] ? a = r.currentProgram.locations[e] : (a = t.getAttribLocation(r.currentProgram, e), r.currentProgram.locations[e] = a), a;
    } }, { key: "attribute", value: function value(e, r, t, a) {
      var E = this,
          u = E.gl,
          n = E.getAttribLocation(e);u.bindBuffer(u.ARRAY_BUFFER, r), u.enableVertexAttribArray(n), u.vertexAttribPointer(n, t, u.FLOAT, !1, 0, 0);var f = a || 0;E.extInstancedArrays.vertexAttribDivisorANGLE(n, f), u.bindBuffer(u.ARRAY_BUFFER, null);
    } }, { key: "getUniformLocation", value: function value(e) {
      var r = this,
          t = r.gl,
          a = void 0;return r.currentProgram.locations[e] ? a = r.currentProgram.locations[e] : (a = t.getUniformLocation(r.currentProgram, e), r.currentProgram.locations[e] = a), a;
    } }, { key: "uniform1i", value: function value(e, r) {
      var t = this,
          a = t.gl,
          E = t.getUniformLocation(e);a.uniform1i(E, r);
    } }, { key: "uniform1f", value: function value(e, r) {
      var t = this,
          a = t.gl,
          E = t.getUniformLocation(e);a.uniform1f(E, r);
    } }, { key: "uniform2fv", value: function value(e, r) {
      var t = this,
          a = t.gl,
          E = t.getUniformLocation(e);a.uniform2fv(E, r);
    } }, { key: "uniform3fv", value: function value(e, r) {
      var t = this,
          a = t.gl,
          E = t.getUniformLocation(e);a.uniform3fv(E, r);
    } }, { key: "uniform4fv", value: function value(e, r) {
      var t = this,
          a = t.gl,
          E = t.getUniformLocation(e);a.uniform4fv(E, r);
    } }, { key: "uniformCubemap", value: function value(e, r, t) {
      var a = this,
          E = a.gl,
          u = a.getUniformLocation(e);E.activeTexture(E.TEXTURE0 + t), E.bindTexture(E.TEXTURE_CUBE_MAP, r), E.uniform1i(u, t);
    } }, { key: "uniformTexture", value: function value(e, r, t) {
      var a = this,
          E = a.gl,
          u = a.getUniformLocation(e);E.activeTexture(E.TEXTURE0 + t), E.bindTexture(E.TEXTURE_2D, r), E.uniform1i(u, t);
    } }, { key: "createTexture", value: function value() {
      var e = this,
          r = e.gl,
          t = r.createTexture();return r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.bindTexture(r.TEXTURE_2D, null), t;
    } }, { key: "textureFilter", value: function value(e, r) {
      var t = this,
          a = t.gl;a.bindTexture(a.TEXTURE_2D, e), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, r), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, r), a.bindTexture(a.TEXTURE_2D, null);
    } }, { key: "textureWrap", value: function value(e, r) {
      var t = this,
          a = t.gl;a.bindTexture(a.TEXTURE_2D, e), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, r), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, r), a.bindTexture(a.TEXTURE_2D, null);
    } }, { key: "setTexture", value: function value(e, r) {
      var t = this,
          a = t.gl;a.bindTexture(a.TEXTURE_2D, e), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, r), a.bindTexture(a.TEXTURE_2D, null);
    } }, { key: "setTextureFromArray", value: function value(e, r, t, a) {
      var E = this,
          u = E.gl;u.bindTexture(u.TEXTURE_2D, e), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, r, t, 0, u.RGBA, u.UNSIGNED_BYTE, new Uint8Array(a)), u.bindTexture(u.TEXTURE_2D, null);
    } }, { key: "setTextureFromFloatArray", value: function value(e, r, t, a) {
      var E = this,
          u = E.gl;u.bindTexture(u.TEXTURE_2D, e), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, r, t, 0, u.RGBA, u.FLOAT, new Float32Array(a)), u.bindTexture(u.TEXTURE_2D, null);
    } }, { key: "copyTexture", value: function value(e, r, t) {
      var a = this,
          E = a.gl;E.bindTexture(E.TEXTURE_2D, e), E.copyTexImage2D(E.TEXTURE_2D, 0, E.RGBA, 0, 0, r, t, 0), E.bindTexture(E.TEXTURE_2D, null);
    } }, { key: "createCubemap", value: function value(e) {
      var r = this,
          t = r.gl,
          a = t.createTexture();t.bindTexture(t.TEXTURE_CUBE_MAP, a);for (var E = 0; 6 > E; E++) {
        t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e[E]);
      }return t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(t.TEXTURE_CUBE_MAP, null), a;
    } }, { key: "createFramebuffer", value: function value(e, r) {
      var t = this,
          a = t.gl,
          E = {};return E.framebuffer = a.createFramebuffer(), a.bindFramebuffer(a.FRAMEBUFFER, E.framebuffer), E.depth = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, E.depth), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, e, r), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, E.depth), E.texture = t.createTexture(), a.bindTexture(a.TEXTURE_2D, E.texture), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, e, r, 0, a.RGBA, a.UNSIGNED_BYTE, null), a.bindTexture(a.TEXTURE_2D, null), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, E.texture, 0), a.bindFramebuffer(a.FRAMEBUFFER, null), E;
    } }, { key: "resizeFramebuffer", value: function value(e, r, t) {
      var a = this,
          E = a.gl;E.bindFramebuffer(E.FRAMEBUFFER, e.framebuffer), E.renderbufferStorage(E.RENDERBUFFER, E.DEPTH_COMPONENT16, r, t), E.texImage2D(E.TEXTURE_2D, 0, E.RGBA, r, t, 0, E.RGBA, E.UNSIGNED_BYTE, null), E.bindFramebuffer(E.FRAMEBUFFER, null);
    } }, { key: "createFloatFramebuffer", value: function value(e, r) {
      var t = this,
          a = t.gl,
          E = {};return E.framebuffer = a.createFramebuffer(), a.bindFramebuffer(a.FRAMEBUFFER, E.framebuffer), E.depth = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, E.depth), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, e, r), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, E.depth), E.texture = t.createTexture(), a.bindTexture(a.TEXTURE_2D, E.texture), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, e, r, 0, a.RGBA, a.FLOAT, null), a.bindTexture(a.TEXTURE_2D, null), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, E.texture, 0), a.bindFramebuffer(a.FRAMEBUFFER, null), E;
    } }, { key: "resizeFloatFramebuffer", value: function value(e, r, t) {
      var a = this,
          E = a.gl;E.bindFramebuffer(E.FRAMEBUFFER, e.framebuffer), E.renderbufferStorage(E.RENDERBUFFER, E.DEPTH_COMPONENT16, r, t), E.texImage2D(E.TEXTURE_2D, 0, E.RGBA, r, t, 0, E.RGBA, E.FLOAT, null), E.bindFramebuffer(E.FRAMEBUFFER, null);
    } }, { key: "createDrawBuffers", value: function value(e, r, t) {
      var a = this,
          E = a.gl,
          u = a.extDrawBuffers;if (u.MAX_DRAW_BUFFERS_WEBGL < t) throw "createDrawBuffers: MAX_DRAW_BUFFERS_WEBGL is " + u.MAX_DRAW_BUFFERS_WEBGL;var n = {};n.framebuffer = E.createFramebuffer(), E.bindFramebuffer(E.FRAMEBUFFER, n.framebuffer), n.depth = E.createRenderbuffer(), E.bindRenderbuffer(E.RENDERBUFFER, n.depth), E.renderbufferStorage(E.RENDERBUFFER, E.DEPTH_COMPONENT16, e, r), E.framebufferRenderbuffer(E.FRAMEBUFFER, E.DEPTH_ATTACHMENT, E.RENDERBUFFER, n.depth), n.textures = [];for (var f = 0; t > f; f++) {
        n.textures[f] = a.createTexture(), E.bindTexture(E.TEXTURE_2D, n.textures[f]), E.texImage2D(E.TEXTURE_2D, 0, E.RGBA, e, r, 0, E.RGBA, E.FLOAT, null), E.bindTexture(E.TEXTURE_2D, null), E.framebufferTexture2D(E.FRAMEBUFFER, u.COLOR_ATTACHMENT0_WEBGL + f, E.TEXTURE_2D, n.textures[f], 0);
      }var T = E.checkFramebufferStatus(E.FRAMEBUFFER);if (T !== E.FRAMEBUFFER_COMPLETE) throw "createDrawBuffers: gl.checkFramebufferStatus( gl.FRAMEBUFFER ) is " + T;return E.bindFramebuffer(E.FRAMEBUFFER, null), n;
    } }, { key: "drawBuffers", value: function value(e) {
      var r = this,
          t = (r.gl, r.extDrawBuffers),
          a = [];if ("number" == typeof e) for (var E = 0; e > E; E++) {
        a.push(t.COLOR_ATTACHMENT0_WEBGL + E);
      } else a.concat(e);t.drawBuffersWEBGL(a);
    } }, { key: "clear", value: function value(e, r, t, a, E) {
      var u = this,
          n = u.gl,
          f = e || 0,
          T = r || 0,
          R = t || 0,
          i = "number" == typeof a ? a : 1,
          o = "number" == typeof E ? E : 1;n.clearColor(f, T, R, i), n.clearDepth(o), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    } }, { key: "render", value: function value(e) {
      var r = this,
          t = r.gl;e.viewport && t.viewport(e.viewport[0], e.viewport[1], e.viewport[2], e.viewport[3]), e.program && r.useProgram(e.program), e.framebuffer && t.bindFramebuffer(t.FRAMEBUFFER, e.framebuffer);var a = 0;e.clearColor && (t.clearColor(e.clearColor[0], e.clearColor[1], e.clearColor[2], e.clearColor[3]), a |= t.COLOR_BUFFER_BIT), e.clearDepth && (t.clearDepth(t.clearDepth), a |= t.DEPTH_BUFFER_BIT), t.clear;
    } }]), e;
}();exports["default"] = GLCat;

},{}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/main.js":[function(require,module,exports){
"use strict";

var _automaton = require("./automaton.min");

var _automaton2 = _interopRequireDefault(_automaton);

var _glcat = require("./glcat.min");

var _glcat2 = _interopRequireDefault(_glcat);

var _xorshift = require("./xorshift");

var _xorshift2 = _interopRequireDefault(_xorshift);

var _bvh = require("./bvh");

var _bvh2 = _interopRequireDefault(_bvh);

var _stl = require("./stl");

var _stl2 = _interopRequireDefault(_stl);

var _cube = require("./cube");

var _cube2 = _interopRequireDefault(_cube);

var _octahedron = require("./octahedron");

var _octahedron2 = _interopRequireDefault(_octahedron);

var _music = require("./music");

var _music2 = _interopRequireDefault(_music);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var glslify = require("glslify");

// ------

var go = function go() {
  var automaton = (0, _automaton2.default)({
    gui: checkboxGUI.checked,
    onseek: function onseek(t) {
      _music2.default.seek(t);return t;
    },
    data: "\n{\"length\":170,\"resolution\":400,\"params\":{\"particleSize\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.683214285714286,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":26.057142857142857,\"value\":0.7,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":89.14285714285715,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":91.88571428571429,\"value\":1,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":156.34285714285713,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftPosX\":[{\"time\":0,\"value\":8.083293868497366,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":8.083293868497366,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":10.32,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":10.32,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":6.5,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":3.98323639663728,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftPosY\":[{\"time\":0,\"value\":9.850362763367643,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":9.850362763367643,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":6.37,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.28454581097114,\"value\":6.37,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":6.85,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":5.314191908355392,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftPosZ\":[{\"time\":0,\"value\":8.966828315932505,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":8.966828315932505,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":4.46,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":4.46,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":3.72,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":4.071,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftSizeX\":[{\"time\":0,\"value\":1.2674567025691594,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":1.2674567025691594,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0.559853048931596,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":0.559853048931596,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0.8469336313170741,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.07,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.08571428571429,\"value\":-1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":0.07,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":-1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftSizeY\":[{\"time\":0,\"value\":0.2577030483575733,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":0.2577030483575733,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0.37569738978952394,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":0.37569738978952394,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0.28082107960568514,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.7,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftSizeZ\":[{\"time\":0,\"value\":0.051968738632372,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":0.051968738632372,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0.30203512613269456,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":0.30203512613269456,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0.10663260215602843,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.7,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftRotX\":[{\"time\":0,\"value\":0.1462945446883864,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":0.1331235666652777,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":-0.006976833315715303,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":-0.006976833315715303,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0.1462945446883864,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.16,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftRotY\":[{\"time\":0,\"value\":0.12834511830813566,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":0.09311788678702992,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":-0.025679657326344474,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":-0.025679657326344474,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0.12834511830813566,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.13,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"shiftRotZ\":[{\"time\":0,\"value\":-0.04858494172576461,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":-0.026899152847715158,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0.004244861090662244,\"mode\":4,\"params\":{\"rate\":2000,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":0.004244861090662244,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":-0.04858494172576461,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":68.57776396612941,\"value\":-0.02,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"cameraPosX\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":7,\"amp\":0.2,\"phase\":0},false,false]},{\"time\":24.685714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":45.25714285714285,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":5,\"amp\":2,\"phase\":0},false,false]},{\"time\":46.285714285714285,\"value\":1,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":1,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":74.05714285714286,\"value\":0.9949013330657657,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":79.54285714285714,\"value\":2.5678546430704148,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":79.54535714285714,\"value\":0.6016630055646042,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":85.05673744715212,\"value\":0,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.08571428571429,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":5,\"amp\":2,\"phase\":0},false,false]},{\"time\":112.45714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":0.017358397810538717,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":9,\"amp\":2,\"phase\":0},false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"cameraPosY\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":8,\"amp\":0.2,\"phase\":0},false,false]},{\"time\":24.685714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"cameraPosZ\":[{\"time\":0,\"value\":3,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":45.25714285714285,\"value\":2,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":5,\"amp\":2,\"phase\":0.25},false,false]},{\"time\":46.285714285714285,\"value\":52,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":52,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":2,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57392857142857,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":74.05714285714286,\"value\":3,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":74.05964285714286,\"value\":0.9075150380655073,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":79.54285714285714,\"value\":0.33950412056382806,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":79.54535714285714,\"value\":2.742627233070934,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":85.02857142857144,\"value\":1.519219103067317,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90,\"value\":50,\"mode\":5,\"params\":{\"gravity\":3,\"bounce\":0.3},\"mods\":[false,false,false,false]},{\"time\":90.0025,\"value\":2,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.08571428571429,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":5,\"amp\":2,\"phase\":0.25},false,false]},{\"time\":112.45714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":2,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":9,\"amp\":2,\"phase\":0.25},false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[{\"velocity\":0},false,false,false]}],\"cameraTarX\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":45.25714285714285,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":0.6,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0.6,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.6,\"mode\":0,\"params\":{},\"mods\":[false,false,{\"freq\":1,\"amp\":0.5,\"reso\":8,\"recursion\":4,\"seed\":76},false]},{\"time\":68.57392857142857,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"cameraTarY\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"cameraTarZ\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":45.25714285714285,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.28072842603181,\"value\":50,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":50,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,{\"freq\":1,\"amp\":0.5,\"reso\":8,\"recursion\":4,\"seed\":78},false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"spherePosX\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"spherePosY\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"spherePosZ\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"sphereSize\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.5,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":135.77142857142857,\"value\":0.5,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":156.34285714285713,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"sphereLofi\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.75,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0.375,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.08571428571429,\"value\":0.375,\"mode\":1,\"params\":{},\"mods\":[false,{\"freq\":3,\"amp\":0.375,\"phase\":0.25},false,false]},{\"time\":111.08821428571429,\"value\":0.75,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.42857142857143,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.77142857142857,\"value\":0.4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.11428571428571,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":1,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":0.75,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":155.31428571428572,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":155.65714285714284,\"value\":0.4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":156,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":156.34285714285713,\"value\":1,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"anotherShader\":[{\"time\":0,\"value\":1,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.17142857142858,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":111.08571428571429,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.47078087331866,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.20049040066792,\"value\":-0.7649420337895503,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":145.37142857142857,\"value\":3,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":10,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97392857142856,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"anotherShaderDif\":[{\"time\":0,\"value\":0.5,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.17142857142857,\"value\":0.23,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.22857142857143,\"value\":0.23,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":69.25714285714287,\"value\":0.4,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.08571428571429,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":142.62857142857143,\"value\":0.3,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":150.85714285714286,\"value\":0.2,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"anotherShaderEdge\":[{\"time\":0,\"value\":-1,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.17142857142857,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.22870073919495,\"value\":0.8,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57040571327354,\"value\":0,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.08571428571429,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":142.62857142857143,\"value\":-1,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"particlePosX\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"particlePosY\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":2,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":2,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"particlePosZ\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":45,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":65.8197481623429,\"value\":1.5,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0,\"mode\":4,\"params\":{\"rate\":5,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"cameraRoll\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.342857142857145,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":5,\"amp\":0.1,\"phase\":0},false,false]},{\"time\":24.685714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":45.25714285714285,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":8,\"amp\":0.1,\"phase\":0},false,false]},{\"time\":46.628571428571426,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,{\"freq\":1,\"amp\":0.2,\"reso\":8,\"recursion\":4,\"seed\":81},false]},{\"time\":90.51428571428572,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.08571428571429,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":4,\"amp\":0.1,\"phase\":0},false,false]},{\"time\":112.45714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":8,\"amp\":0.1,\"phase\":0},false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"particleGenSize\":[{\"time\":0,\"value\":10000,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0.2,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":3,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"particleField\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":0.2,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"particleGravity\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":4,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"distFuncMode\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":26.057142857142857,\"value\":1,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":30.171428571428574,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":31.542857142857144,\"value\":2,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":35.65714285714285,\"value\":2,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":37.028571428571425,\"value\":3,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":41.14285714285714,\"value\":3,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":42.51428571428571,\"value\":4,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45964285714287,\"value\":2.5,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":133.0285714285714,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,{\"freq\":2,\"amp\":1.5,\"phase\":0.75},false,false]},{\"time\":134.39999999999998,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[{\"velocity\":0},false,false,false]},{\"time\":170,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[{\"velocity\":0},false,false,false]}],\"randomyGlitch\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.17142857142858,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.11428571428571,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.45714285714287,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":156,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":156.34285714285713,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"sphereBeat\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0.3,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.08571428571429,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":134.39999999999998,\"value\":0.3,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"finalGlitch\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":19.2,\"value\":0,\"mode\":5,\"params\":{\"gravity\":0.004,\"bounce\":0.3},\"mods\":[false,false,false,false]},{\"time\":24,\"value\":0.2,\"mode\":5,\"params\":{\"gravity\":0.01,\"bounce\":0.3},\"mods\":[false,false,false,false]},{\"time\":24.685714285714287,\"value\":0,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":46.285714285714285,\"value\":0.17744413870839815,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":46.628571428571426,\"value\":0,\"mode\":4,\"params\":{\"rate\":720,\"damp\":1},\"mods\":[{\"velocity\":0},false,false,false]},{\"time\":68.22857142857143,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":68.57142857142857,\"value\":0.04,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":69.94285714285715,\"value\":0,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":85.02857142857144,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":89.82857142857144,\"value\":0.2,\"mode\":5,\"params\":{\"gravity\":0.01,\"bounce\":0.3},\"mods\":[false,false,false,false]},{\"time\":90.51428571428572,\"value\":0,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":111.08569040190697,\"value\":0.01,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.42857142857143,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":111.77142857142857,\"value\":0.01,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":112.11428571428571,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":154.97142857142856,\"value\":0.01,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":155.31428571428572,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":155.65714285714284,\"value\":0.01,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":156,\"value\":0,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":170,\"value\":1,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}]},\"gui\":{\"beatSnap\":true,\"beatSnapBpm\":175,\"beatSnapOffset\":2.742857142857143,\"timelineMinT\":0,\"timelineMaxT\":170,\"timelineMinV\":2.4211163725121034,\"timelineMaxV\":8.460160080159199}}\n    "
  });
  var auto = automaton.auto;

  // ------

  var reso = parseFloat(listResolution.value);
  var width = canvas.width = 1280 * reso;
  var height = canvas.height = 720 * reso;

  var gl = canvas.getContext("webgl");
  var glCat = new _glcat2.default(gl);

  var time = 0.0;
  var deltaTime = 1.0 / 60.0;
  var beginDate = +new Date();

  var particleCountSqrt = 64;
  var particleCount = particleCountSqrt * particleCountSqrt;
  var particleInit = true;

  var charCubeCountSqrt = 32;
  var charCubeCount = charCubeCountSqrt * charCubeCountSqrt;

  // ------

  var vboQuad = glCat.createVertexbuffer([-1, -1, 1, -1, -1, 1, 1, 1]);

  var vboParticle = glCat.createVertexbuffer(function () {
    var ret = [];
    for (var i = 0; i < particleCount; i++) {
      ret.push(i);
    }
    return ret;
  }());

  var vboCharCube = glCat.createVertexbuffer(function () {
    var ret = [];
    for (var i = 0; i < charCubeCount; i++) {
      ret.push(i);
    }
    return ret;
  }());

  var oct0 = (0, _octahedron2.default)(0);
  var vboOctPos = glCat.createVertexbuffer(oct0.pos);
  var vboOctNor = glCat.createVertexbuffer(oct0.nor);

  var vboCubePos = glCat.createVertexbuffer(_cube2.default.pos);
  var vboCubeNor = glCat.createVertexbuffer(_cube2.default.nor);

  // ------

  var shader = glslify(["\n#define PI 3.141592654\n#define TAU 6.283185307\n#define HUGE 9E16\n#define BPM 175.0\n#define FOV 70.0\n\n#define V vec3(0.,1.,-1.)\n#define saturate(i) clamp(i,0.,1.)\n#define saturateA(i) clamp(i,0.,1.)\n#define b2t(i) ((i)/BPM*60.0)\n#define noten(i) 440.0*pow(2.0,(float(i)+trans)/12.0)\n#define lofi(i,j) floor((i)/j)*j\n#define iff(i) for(int _=0;_<1;_++){if(!(i)){break;} \n#define endiff }\n\n#define INIT_LEN 1E-3\n#define MARCH_ITER 100\n// #define REFLECT_ITER 3\n\n#define BLOOM_SAMPLES 20\n\n#define MTL_AIR 0\n#define MTL_IFS 1\n#define MTL_MIRROR 2\n#define MTL_PARTICLE 3\n\n#extension GL_EXT_draw_buffers : require\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform bool init;\nuniform bool isVert;\nuniform float anotherShader;\nuniform float anotherShaderEdge;\nuniform float anotherShaderDif;\nuniform float bufferTime;\nuniform float bufferSize;\nuniform float cameraRoll;\nuniform float distFuncMode;\nuniform float sampleRate;\nuniform float time;\nuniform float deltaTime;\nuniform float gaussVar;\nuniform float sphereLofi;\nuniform float sphereBeat;\nuniform float particleCountSqrt;\nuniform float charCubeCountSqrt;\nuniform float particleSize;\nuniform float particleGravity;\nuniform float particleField;\nuniform float particleGenSize;\nuniform float sphereSize;\nuniform float randomyGlitch;\nuniform float finalGlitch;\nuniform vec2 resolution;\nuniform vec2 textureModelReso;\nuniform vec3 cameraPos;\nuniform vec3 cameraTar;\nuniform vec3 shiftPos;\nuniform vec3 shiftRot;\nuniform vec3 shiftSize;\nuniform vec3 particlePos;\nuniform vec3 spherePos;\nuniform sampler2D texture;\nuniform sampler2D textureModel;\nuniform sampler2D textureBloom;\nuniform sampler2D textureRender;\nuniform sampler2D textureRandom;\nuniform sampler2D textureRenderPos;\nuniform sampler2D textureRenderIll;\nuniform sampler2D textureParticlePos;\nuniform sampler2D textureParticleNor;\nuniform sampler2D textureParticleParam;\nuniform sampler2D textureParticleIllumination;\nuniform sampler2D textureCharCube;\nuniform sampler2D textureP0;\nuniform sampler2D textureP1;\nuniform sampler2D textureP2;\nuniform sampler2D textureP3;\n\n// ------\n\nmat2 rotate2D( float _t ) {\n  return mat2( cos( _t ), sin( _t ), -sin( _t ), cos( _t ) );\n}\n\nfloat gaussian( float _x, float _v ) {\n  return 1.0 / sqrt( 2.0 * PI * _v ) * exp( - _x * _x / 2.0 / _v );\n}\n\nfloat tri( float _phase ) {\n  float p = mod( _phase, 2.0 );\n  return p < 1.0 ? ( p ) : ( 2.0 - p );\n}\n\nfloat smin( float _a, float _b, float _k ){\n  float h = clamp( 0.5 + 0.5 * ( _b - _a ) / _k, 0.0, 1.0 );\n  return mix( _b, _a, h ) - _k * h * ( 1.0 - h );\n}\n\nvec4 random2D( vec2 _v ) {\n  return fract( sin( texture2D( textureRandom, _v ) * 25711.34 ) * 175.23 );\n}\n\nvec4 random( float _v ) {\n  return random2D( _v * V.yy );\n}\n\n// ------\n\nmat4 lookAt( vec3 _pos, vec3 _tar, float _roll ) {\n  vec3 dir = normalize( _tar - _pos );\n  vec3 sid = normalize( cross( dir, V.xyx ) );\n  vec3 top = normalize( cross( sid, dir ) );\n\n  vec3 tempSid = sid;\n  sid = cos( _roll ) * tempSid - sin( _roll ) * top;\n  top = sin( _roll ) * tempSid + cos( _roll ) * top;\n\n  return mat4(\n    sid.x, top.x, dir.x, 0.0,\n    sid.y, top.y, dir.y, 0.0,\n    sid.z, top.z, dir.z, 0.0,\n    - sid.x * _pos.x - sid.y * _pos.y - sid.z * _pos.z,\n    - top.x * _pos.x - top.y * _pos.y - top.z * _pos.z,\n    - dir.x * _pos.x - dir.y * _pos.y - dir.z * _pos.z,\n    1.0\n  );\n}\n\nmat4 perspective( float _fov, float _aspect, float _near, float _far ) {\n  float p = 1.0 / tan( _fov * PI / 180.0 / 2.0 );\n  float d = _far / ( _far - _near );\n  return mat4(\n    p / _aspect, 0.0, 0.0, 0.0,\n    0.0, p, 0.0, 0.0,\n    0.0, 0.0, d, 1.0,\n    0.0, 0.0, -_near * d, 0.0\n  );\n}\n\n// ------\n\nstruct Camera {\n  vec3 pos;\n  vec3 dir;\n  vec3 sid;\n  vec3 top;\n};\n\nstruct Ray {\n  vec3 dir;\n  vec3 ori;\n  int mtl;\n};\n\nstruct Intersection {\n  Ray ray;\n  float len;\n  vec3 pos;\n  vec3 normal;\n  int mtl;\n  vec4 props;\n};\n\n// ------\n\nCamera camInit( in vec3 _pos, in vec3 _tar, in float _roll ) {\n  Camera cam;\n  cam.pos = _pos;\n  cam.dir = normalize( _tar - _pos );\n  cam.sid = normalize( cross( cam.dir, V.xyx ) );\n  cam.top = normalize( cross( cam.sid, cam.dir ) );\n  vec3 tempSid = cam.sid;\n  cam.sid = tempSid * cos( _roll ) - cam.top * sin( _roll );\n  cam.top = tempSid * sin( _roll ) + cam.top * cos( _roll );\n\n  return cam;\n}\n\nRay rayInit( in vec3 _ori, in vec3 _dir, in int _mtl ) {\n  Ray ray;\n  ray.dir = _dir;\n  ray.ori = _ori + _dir * INIT_LEN;\n  ray.mtl = _mtl;\n  return ray;\n}\n\nRay rayFromCam( in vec2 _p, in Camera _cam, in float _fov ) {\n  vec3 dir = normalize(\n    _p.x * _cam.sid\n    + _p.y * _cam.top\n    + _cam.dir / tan( _fov * PI / 360.0 )\n  );\n  return rayInit( _cam.pos, dir, MTL_AIR );\n}\n\nIntersection interInit( in Ray _ray, in float _len, in vec3 _nor ) {\n  Intersection inter;\n  inter.ray = _ray;\n  inter.len = _len;\n  inter.pos = _ray.ori + _ray.dir * inter.len;\n  inter.normal = _nor;\n  inter.mtl = MTL_AIR;\n  inter.props = V.xxxx;\n  return inter;\n}\n\nIntersection applyIntersection( in Intersection _old, in Intersection _new ) {\n  Intersection inter = _old;\n  inter.len = _new.len;\n  inter.pos = inter.ray.ori + inter.ray.dir * inter.len;\n  inter.normal = _new.normal;\n  inter.mtl = _new.mtl;\n  inter.props = _new.props;\n  return inter;\n}\n\n// ------\n\nIntersection model( in Ray _ray, in sampler2D _model, in vec2 _reso, in vec3 _lofi ) {\n  float minLen = HUGE;\n  vec3 minNor = V.xxy;\n  float edge = 1E9;\n\n  float pos = 0.0;\n\n  for ( int i = 0; i < 1000; i ++ ) {\n    vec2 coord = vec2( mod( pos, 256.0 ) * 3.0, floor( pos / 256.0 ) ) + vec2( 0.5 );\n    vec4 tex1 = texture2D( _model, ( V.yx * 0.0 + coord ) / _reso );\n    vec4 tex2 = texture2D( _model, ( V.yx * 1.0 + coord ) / _reso );\n    vec4 tex3 = texture2D( _model, ( V.yx * 2.0 + coord ) / _reso );\n    tex1.xyz = floor( tex1.xyz / _lofi + 0.5 ) * _lofi;\n    tex2.xyz = floor( tex2.xyz / _lofi + 0.5 ) * _lofi;\n    tex3.xyz = floor( tex3.xyz / _lofi + 0.5 ) * _lofi;\n\n    if ( tex1.w == 0.0 ) {\n      float len1 = ( _ray.ori.x - tex1.x ) / _ray.dir.x; \n      float len2 = ( _ray.ori.x - tex2.x ) / _ray.dir.x;\n      float lenMin = min( len1, len2 );\n      float lenMax = max( len1, len2 );\n\n      len1 = ( _ray.ori.y - tex1.y ) / _ray.dir.y; \n      len2 = ( _ray.ori.y - tex2.y ) / _ray.dir.y;\n      lenMin = max( lenMin, min( len1, len2 ) );\n      lenMax = min( lenMax, max( len1, len2 ) );\n\n      len1 = ( _ray.ori.z - tex1.z ) / _ray.dir.z; \n      len2 = ( _ray.ori.z - tex2.z ) / _ray.dir.z;\n      lenMin = max( lenMin, min( len1, len2 ) );\n      lenMax = min( lenMax, max( len1, len2 ) );\n\n      if ( lenMin <= lenMax ) {\n        pos += 1.0;\n      } else {\n        pos += tex2.w;\n      }\n    } else if ( tex1.w == 1.0 ) {\n      vec3 v1 = tex2.xyz - tex1.xyz;\n      vec3 v2 = tex3.xyz - tex1.xyz;\n      vec3 nor = normalize( cross( v1, v2 ) );\n      nor = ( 0.0 < dot( nor, _ray.dir ) ) ? -nor : nor;\n\n      float len = ( dot( nor, _ray.ori ) - dot( nor, tex1.xyz ) ) / dot( -nor, _ray.dir );\n      if ( 0.0 < len && len < minLen ) {\n        vec3 pos = _ray.ori + _ray.dir * len;\n        vec3 c1 = cross( pos - tex1.xyz, tex2.xyz - tex1.xyz );\n        vec3 c2 = cross( pos - tex2.xyz, tex3.xyz - tex2.xyz );\n        vec3 c3 = cross( pos - tex3.xyz, tex1.xyz - tex3.xyz );\n        float tedge = min(\n          min(\n            dot( normalize( cross( nor, tex2.xyz - tex1.xyz ) ), pos - tex1.xyz ),\n            dot( normalize( cross( nor, tex3.xyz - tex2.xyz ) ), pos - tex2.xyz )\n          ),\n          dot( normalize( cross( nor, tex1.xyz - tex3.xyz ) ), pos - tex3.xyz )\n        );\n        if ( 0.0 < dot( c1, c2 ) && 0.0 < dot( c2, c3 ) ) {\n          minLen = len;\n          minNor = nor;\n          edge = tedge;\n        }\n      }\n\n      pos += 1.0;\n    } else {\n      break;\n    }\n  }\n\n  Intersection inter = interInit( _ray, minLen, minNor );\n  inter.props.w = smoothstep( 0.01, 0.001, edge );\n  return inter;\n}\n\n// ------\n\nfloat distFuncSphere( vec3 _p, float _r ) {\n  return length( _p ) - _r;\n}\n\nfloat distFuncBox( vec3 _p, vec3 _s ) {\n  vec3 d = abs( _p ) - _s;\n  return min( max( d.x, max( d.y, d.z ) ), 0.0 ) + length( max( d, 0.0 ) );\n}\n\nfloat distFuncTorus( vec3 _p, vec2 _r ) {\n  vec2 q = vec2( length( _p.xz ) - _r.x, _p.y );\n  return length( q ) - _r.y;\n}\n\nfloat distFuncSlasher( vec3 _p, float _ratio ) {\n  float phase = ( _p.x + _p.y );\n  float slash = abs( 0.5 - ( phase - floor( phase ) ) ) * 2.0;\n  return ( slash - _ratio ) / sqrt( 2.0 );\n}\n\nvec3 distFuncMandelbulb( vec3 _p, float _power, int _iter ) {\n\tvec3 p = _p.xzy;\n\tvec3 z = p;\n\tfloat dr = 1.0;\n\tfloat r = 0.0;\n\tfloat power = _power;\n\tfloat bailout = 2.0;\n\n\tfloat t0 = 1.0;\n\n\tfor( int i = 0; i < 20; i ++ ) {\n\t    if ( _iter == i ) { break; }\n\t    \n\t\tr = length( z );\n\t\tif( bailout < r ) { break; }\n\t\t\n\t\tfloat theta = atan( z.y / z.x );\n\t\tfloat phi = asin( z.z / r );\n\t\tdr = pow( r, power - 1.0 ) * dr * power + 1.0;\n\n\t\tr = pow( r, power );\n\t\ttheta = theta * power;\n\t\tphi = phi * power;\n\n\t\tz = r * vec3(\n\t\t    cos( theta ) * cos( phi ),\n\t\t    sin( theta ) * cos( phi ),\n\t\t    sin( phi )\n\t\t) + p;\n\n\t\tt0 = min( t0, r );\n\t}\n\treturn vec3( 0.5 * log( r ) * r / dr, t0, 0.0 );\n}\n\nvec3 ifs( vec3 _p, vec3 _rot, vec3 _shift ) {\n  vec3 pos = _p;\n\n  vec3 shift = _shift;\n\n  for ( int i = 0; i < 5; i ++ ) {\n    float intensity = pow( 2.0, -float( i ) );\n\n    pos.y -= 0.0;\n\n    pos = abs( pos ) - shift * intensity;\n\n    shift.yz = rotate2D( _rot.x ) * shift.yz;\n    shift.zx = rotate2D( _rot.y ) * shift.zx;\n    shift.xy = rotate2D( _rot.z ) * shift.xy;\n\n    if ( pos.x < pos.y ) { pos.xy = pos.yx; }\n    if ( pos.x < pos.z ) { pos.xz = pos.zx; }\n    if ( pos.y < pos.z ) { pos.yz = pos.zy; }\n  }\n\n  return pos;\n}\n\nfloat distFunc( vec3 _p, float _time, out int mtl, out vec4 props ) {\n  float dist = HUGE;\n  mtl = MTL_AIR;\n  props = V.xxxx;\n\n  {\n    vec3 p = mod( _p - 10.0, 20.0 ) - 10.0;\n    p = ifs(\n      p,\n      shiftRot,\n      shiftPos\n    );\n    float cdist = distFuncBox( p, shiftSize );\n\n    if ( cdist < dist ) {\n      dist = cdist;\n      mtl = MTL_IFS;\n      props = V.xxxx;\n    }\n  }\n\n  {\n    vec3 p = _p;\n    p.yz = rotate2D( time * 2.3 ) * p.yz;\n    p.zx = rotate2D( time * 0.7 ) * p.zx;\n\n    float dist0 = distFuncSphere( p, 0.0 );\n    float dist1 = distFuncSphere( p, 0.0 );\n\n    if ( abs( distFuncMode - 1.0 ) < 1.0 ) {\n      dist1 = distFuncBox( p, V.yyy * 0.4 );\n    }\n\n    if ( abs( distFuncMode - 2.0 ) < 1.0 ) {\n      dist0 = distFuncTorus( p, vec2( 0.5, 0.2 ) );\n    }\n\n    if ( abs( distFuncMode - 3.0 ) < 1.0 ) {\n      for ( int i = 1; i < 6; i ++ ) {\n        dist1 = smin( dist1, distFuncSphere( p - vec3(\n          sin( random2D( V.yy * float( i ) * 0.128 + 0.34 ).xyz * _time * 4.0 + random2D( V.yy * ( float( i ) * 0.45 + 4.5 ) ).xyz )\n        ) * 0.4, 0.3 ), 0.2 );\n      }\n    }\n\n    if ( abs( distFuncMode - 4.0 ) < 1.0 ) {\n      dist0 = distFuncMandelbulb( p * 1.6, 8.0, 4 ).x / 1.6;\n    }\n\n    float cdist = mix( dist0, dist1, tri( distFuncMode ) );\n\n    if ( cdist < dist ) {\n      dist = cdist;\n      mtl = MTL_MIRROR;\n      props = V.xxxx;\n    }\n  }\n\n  return dist;\n}\n\nfloat distFunc( vec3 _p, float _time ) {\n  int mtl;\n  vec4 props;\n  return distFunc( _p, _time, mtl, props );\n}\n\nfloat distFunc( vec3 _p ) {\n  return distFunc( _p, time );\n}\n\nvec3 normalFunc( in vec3 _p, in float _d ) {\n  vec3 d = V * _d;\n  return normalize( vec3(\n    distFunc( _p + d.yxx ) - distFunc( _p - d.yxx ),\n    distFunc( _p + d.xyx ) - distFunc( _p - d.xyx ),\n    distFunc( _p + d.xxy ) - distFunc( _p - d.xxy )\n  ) );\n}\n\nIntersection march( Ray _ray ) {\n  float rayLen = INIT_LEN;\n  vec3 rayPos = _ray.ori + rayLen * _ray.dir;\n  float rayDist = 0.0;\n\n  int mtl;\n  vec4 props;\n\n  for ( int iMarch = 0; iMarch < MARCH_ITER; iMarch ++ ) {\n    rayDist = distFunc( rayPos, time, mtl, props );\n    rayLen += rayDist * 0.8;\n    rayPos = _ray.ori + rayLen * _ray.dir;\n  }\n\n  vec3 nor = normalFunc( rayPos, 1E-4 );\n  float edge = exp( -rayLen * 0.1 ) * smoothstep( 0.1, 0.4, length( nor - normalFunc( rayPos, 1E-2 ) ) );\n  Intersection inter = interInit( _ray, rayLen, nor );\n\n  if ( rayDist < 1E-2 ) {\n    inter.mtl = mtl;\n    inter.props = vec4( props.xyz, edge );\n  } else {\n    inter.mtl = MTL_AIR;\n  }\n\n  return inter;\n}\n\n// ------\n\nIntersection trace( Ray _ray ) {\n  Intersection inter = march( _ray );\n\n  iff ( 0.0 < sphereSize )\n    float beat = time * BPM / 60.0;\n    float kickTime = mod( beat, 4.0 ) < 2.5 ? b2t( mod( mod( beat, 4.0 ), 1.75 ) ) : b2t( mod( beat - 2.5, 4.0 ) );\n\n    float scale = sphereSize * ( 1.0 + sphereBeat * sin( exp( -kickTime * 8.0 ) * PI ) );\n    float rotX = time;\n    float rotY = time;\n\n    Ray ray = _ray;\n    ray.ori -= spherePos;\n    ray.ori /= scale;\n    ray.ori.yz = rotate2D( -rotX ) * ray.ori.yz;\n    ray.dir.yz = rotate2D( -rotX ) * ray.dir.yz;\n    ray.ori.zx = rotate2D( -rotY ) * ray.ori.zx;\n    ray.dir.zx = rotate2D( -rotY ) * ray.dir.zx;\n\n    Intersection interModel = model( ray, textureModel, textureModelReso, V.yyy * max( 1E-4, sphereLofi ) );\n    interModel.len *= interModel.len == HUGE ? 1.0 : scale;\n    \n    iff ( interModel.len < inter.len )\n      inter = applyIntersection( inter, interModel );\n      inter.normal.zx = rotate2D( rotY ) * inter.normal.zx;\n      inter.normal.yz = rotate2D( rotX ) * inter.normal.yz;\n      inter.mtl = MTL_IFS;\n      inter.props.x = 1.0;\n    endiff\n  endiff\n\n  return inter;\n}\n\nIntersection traceParticle( Ray _ray, vec2 _uv ) {\n  Intersection inter = interInit( _ray, HUGE, V.xxy );\n  \n  vec3 pPos = texture2D( textureParticlePos, _uv ).xyz;\n  vec3 pNor = texture2D( textureParticleNor, _uv ).xyz;\n  vec3 pParam = texture2D( textureParticleParam, _uv ).xyz;\n  float pSize = pParam.x;\n\n  float len = length( pPos - cameraPos );\n\n  iff ( pSize != 0.0 )\n    inter = interInit( _ray, len, pNor );\n    inter.mtl = MTL_PARTICLE;\n    inter.props = vec4( pSize, V.xx, 1.0 );\n  endiff\n\n  return inter;\n}\n\nIntersection traceParticleSS( Ray _ray ) {\n  mat4 matP = perspective( FOV, resolution.x / resolution.y, 0.01, 100.0 );\n  mat4 matV = lookAt( cameraPos, cameraTar, cameraRoll );\n\n  Intersection inter = interInit( _ray, HUGE, V.xxy );\n\n  for ( int i = 0; i < 40; i ++ ) {\n    float len = float( i ) * 0.01;\n    vec3 pos = _ray.ori + len * _ray.dir;\n\n    vec4 p = matP * matV * vec4( pos, 1.0 );\n    vec2 uv = ( floor( ( p.xy / p.w * 0.5 + 0.5 ) * resolution ) + 0.5 ) / resolution;\n\n    if ( 0.5 < abs( uv.x - 0.5 ) || 0.5 < abs( uv.y - 0.5 ) ) { break; }\n\n    vec3 pPos = texture2D( textureParticlePos, uv ).xyz;\n    vec3 pNor = texture2D( textureParticleNor, uv ).xyz;\n    vec3 pParam = texture2D( textureParticleParam, uv ).xyz;\n    float pSize = pParam.x;\n\n    float lenDep = length( pPos - cameraPos );\n    float lenRay = length( pos - cameraPos );\n    iff ( pSize != 0.0 && lenDep < lenRay && ( lenRay - lenDep ) < pSize )\n      inter = interInit( _ray, len, pNor );\n      inter.mtl = MTL_PARTICLE;\n      inter.props = vec4( pSize, V.xxx );\n      break;\n    endiff\n  }\n\n  return inter;\n}\n\n// ------\n\n#ifdef _VQUAD\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _RETURN\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  gl_FragColor = texture2D( texture, uv );\n}\n#endif\n\n// ------\n\n#ifdef _PARTICLECOMPUTE\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / particleCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n\n  iff ( init || oth.x <= 0.0 )\n    vec2 ruv = uv + pos.xy;\n\n    pos = vec4( ( random2D( ruv ) * 2.0 - 1.0 ).xyz * particleGenSize, 1.0 );\n    pos.xyz += particlePos;\n\n    vel = ( random2D( ruv / 4.76 + 0.45 ) * 2.0 - 1.0 ) * 0.3;\n    rot = random2D( ruv / 2.77 + 0.19 ) * 2.0 - 1.0;\n    oth = init ? (\n      random2D( ruv / 1.82 + 0.77 )\n    ) : ( vec4(\n      1.0,\n      random2D( ruv / 1.82 + 0.77 ).yzw\n    ) );\n  endiff\n\n  float size = sin( oth.x * PI ) * 0.02 * particleSize;\n  float dist = distFunc( pos.xyz );\n  vec3 nor = normalFunc( pos.xyz, 1E-3 );\n\n  vel.xyz += (\n    2.0 * ( texture2D( textureRandom, pos.xy * 0.01 ).xyz * 2.0 - 1.0 ) +\n    0.5 * nor / max( 0.1, dist ) +\n    ( sphereSize == 0.0 ? V.xxx : normalize( pos.xyz - spherePos ) / max( 0.1, length( pos.xyz - spherePos ) - sphereSize ) )\n  ) * particleField * deltaTime;\n  vel.y -= particleGravity * deltaTime;\n  vel.xyz *= exp( -deltaTime );\n\n  pos += vel * deltaTime;\n\n  dist = distFunc( pos.xyz );\n  nor = normalFunc( pos.xyz, 1E-3 );\n  \n  iff ( dist < size )\n    float distP = distFunc( pos.xyz, time - 1E-3 );\n    float distVel = ( dist - distP ) * 1E3;\n\n    pos.xyz += nor * ( size - dist ) * 2.0;\n    vel.xyz += nor * distVel;\n    vel.xyz -= 1.4 * dot( vel.xyz, nor ) * nor;\n  endiff\n\n  rot.xy += rot.zw * 7.0 * deltaTime;\n\n  oth.x -= 0.4 * deltaTime;\n  oth.y = size;\n\n  gl_FragData[ 0 ] = pos;\n  gl_FragData[ 1 ] = vel;\n  gl_FragData[ 2 ] = rot;\n  gl_FragData[ 3 ] = oth;\n}\n#endif\n\n// ------\n\n#ifdef _VPARTICLERENDER\nattribute vec3 attPos;\nattribute vec3 attNor;\nattribute float particleId;\n\nvarying vec3 vNor;\nvarying vec3 vPos;\nvarying vec3 vaPos;\nvarying float vSize;\n\nvoid main() {\n  vec2 uv = ( vec2(\n    mod( particleId, particleCountSqrt ),\n    floor( particleId / particleCountSqrt )\n  ) + 0.5 ) / particleCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n\n  mat4 matP = perspective( FOV, resolution.x / resolution.y, 0.01, 100.0 );\n  mat4 matV = lookAt( cameraPos, cameraTar, cameraRoll );\n\n  float size = oth.y;\n  vSize = size;\n\n  vec3 cp = size * attPos;\n  cp.yz = rotate2D( rot.x ) * cp.yz;\n  cp.zx = rotate2D( rot.y ) * cp.zx;\n  pos.xyz += cp;\n\n  vPos = pos.xyz;\n  vaPos = attPos;\n  vec4 outPos = matP * matV * vec4( pos.xyz, 1.0 );\n  gl_Position = outPos;\n\n  vNor = attNor;\n  vNor.yz = rotate2D( rot.x ) * vNor.yz;\n  vNor.zx = rotate2D( rot.y ) * vNor.zx;\n}\n#endif\n\n// ------\n\n#ifdef _PARTICLERENDER\nvarying vec3 vNor;\nvarying vec3 vPos;\nvarying vec3 vaPos;\nvarying float vSize;\n\nuniform float particleKind;\n\nvoid main() {\n  gl_FragData[ 0 ] = vec4( vPos, 1.0 );\n  gl_FragData[ 1 ] = vec4( vNor, 1.0 );\n  gl_FragData[ 2 ] = vec4( vSize, 0.0, particleKind, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _CHARCUBECOMPUTE\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / charCubeCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n  vec4 gen = texture2D( textureCharCube, uv );\n\n  iff ( gen.w != 0.0 )\n    pos = vec4( gen.xyz * 0.1, 1.0 );\n    pos.xyz += particlePos;\n    vec4 rnd = random2D( pos.xy / 2.44 );\n    vel = vec4( rnd.xyz - 0.5, 1.0 );\n    pos.xyz -= vel.xyz;\n    rot = V.xxxy;\n    oth = vec4( rnd.w * 0.2 + ( time * BPM / 60.0 < 64.0 ? 5.0 : 1.1 ), 0.0, 1.0, 1.0 );\n  endiff\n\n  float size = oth.x == 0.0 ? 0.0 : 0.04 * ( 1.0 - oth.z );\n\n  vec3 d = vel.xyz * ( 1.0 - exp( -deltaTime * 6.0 ) );\n  vel.xyz -= d;\n  pos.xyz += d;\n\n  oth.x = max( 0.0, oth.x - 1.0 * deltaTime );\n  oth.y = size;\n  oth.z *= exp( -deltaTime * 5.0 );\n\n  gl_FragData[ 0 ] = pos;\n  gl_FragData[ 1 ] = vel;\n  gl_FragData[ 2 ] = rot;\n  gl_FragData[ 3 ] = oth;\n}\n#endif\n\n// ------\n\n#ifdef _RENDER\nvec3 colorAdd;\nvec3 colorMul;\nvec3 tempIll;\n\nvec3 illInt( in Intersection inter ) {\n  vec3 colDif = vec3( 0.0 );\n  float reflective = 0.0;\n  float illInt = 1.0;\n\n  if ( inter.mtl == MTL_IFS ) {\n    colDif = vec3( 0.2 );\n    reflective = 0.5;\n\n  } else if ( inter.mtl == MTL_MIRROR ) {\n    colDif = vec3( 0.9 );\n    reflective = 1.0;\n\n  }\n\n  colDif = mix( colDif, vec3( anotherShaderDif ), anotherShader );\n  reflective = mix( reflective, 0.0, anotherShader );\n  illInt = mix( illInt, 0.0, anotherShader );\n\n  return illInt * ( 1.0 - reflective ) * colDif;\n}\n\nvoid shade( in vec2 uv, in Camera cam, in Intersection inter ) {\n  if ( 0.5 < randomyGlitch ) {\n    colorAdd = random( floor( inter.pos.y / 0.01 ) / 7.53 + time ).xyz * 0.7;\n    colorMul *= 0.0;\n    return;\n  }\n\n  vec3 camDir = normalize( inter.pos - cam.pos );\n  vec3 ligPos = cam.pos;\n  vec3 ligDir = normalize( inter.pos - ligPos );\n\n  vec3 colDif = V.xxx;\n  vec3 colEmi = V.xxx;\n  vec3 colEdge = V.xxx;\n  float reflective = 0.0;\n\n  if ( inter.mtl == MTL_IFS ) {\n    colDif = vec3( 0.2 );\n    colEdge = vec3( 1.6, 0.1, 0.5 );\n    colEdge *= inter.props.x == 1.0 ? 1.0 : 0.2 + 1.8 * exp( -mod( -length( inter.pos ) * 0.4 + time * 0.4, 1.0 ) * 5.0 );\n    reflective = 0.5;\n\n  } else if ( inter.mtl == MTL_MIRROR ) {\n    colDif = vec3( 0.9 );\n    reflective = 1.0;\n\n  } else if ( inter.mtl == MTL_PARTICLE ) {\n    colEmi = vec3( 0.6, 1.0, 1.5 );\n    \n  }\n\n  colDif = mix( colDif, vec3( anotherShaderDif ), anotherShader );\n  colEmi = mix( colEmi, vec3( 0.0 ), anotherShader );\n  colEdge = mix( colEdge, vec3( inter.mtl == MTL_MIRROR ? 0.0 : anotherShaderEdge ), anotherShader );\n  reflective = mix( reflective, 0.0, anotherShader );\n\n  vec3 dif = V.yyy * ( 0.5 + 0.5 * dot( -inter.normal, ligDir ) );\n  float spe = pow( max( 0.0, dot( normalize( camDir - inter.normal ), ligDir ) ), 40.0 );\n\n  colorAdd += (\n    dif * colDif * ( 1.0 - reflective ) +\n    spe * 0.2 * reflective +\n    inter.props.w * colEdge +\n    colEmi\n  ) * colorMul;\n  colorMul *= dif * colDif * reflective;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 p = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;\n\n  Camera cam = camInit( cameraPos, cameraTar, cameraRoll );\n  Ray ray = rayFromCam( p, cam, FOV );\n\n  colorAdd = V.xxx;\n  colorMul = V.yyy;\n\n  for ( int iRef = 0; iRef < REFLECT_ITER; iRef ++ ) {\n    Intersection inter = trace( ray );\n    iff ( iRef == 0 )\n      gl_FragData[ 1 ] = vec4( inter.pos, 1.0 );\n      gl_FragData[ 2 ] = vec4( illInt( inter ), 1.0 );\n\n      Intersection interp = traceParticle( ray, uv );\n      if ( interp.len < inter.len ) { inter = interp; }\n    endiff\n\n    iff ( iRef != 0 )\n      Intersection interp = traceParticleSS( ray );\n      if ( interp.len < inter.len ) { inter = interp; }\n    endiff\n\n    float fog = 1.0 - exp( -inter.len * 0.01 );\n    colorAdd += fog * colorMul * vec3( 1.0, 2.0, 4.0 ) * ( 1.0 - anotherShader );\n    colorMul *= ( 1.0 - fog );\n\n    iff ( inter.mtl != MTL_AIR )\n      shade( uv, cam, inter );\n      ray = rayInit( inter.pos, reflect( ray.dir, inter.normal ), MTL_AIR );\n    endiff\n\n    iff ( inter.mtl == MTL_AIR )\n      colorMul *= 0.0;\n    endiff\n\n    if ( length( colorMul ) < 0.01 ) { break; }\n  }\n\n  gl_FragData[ 0 ] = vec4( max( V.xxx, colorAdd ), 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _DOWNSCALE\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  vec4 sum = V.xxxx;\n  float len = 1E9;\n  for ( int iy = 0; iy < 4; iy ++ ) {\n    for ( int ix = 0; ix < 4; ix ++ ) {\n      vec2 p = uv + vec2( -1.5 + float( ix ), -1.5 + float( iy ) ) / resolution / 4.0;\n      vec4 tex = texture2D( texture, p );\n\n      sum += tex / 16.0;\n    }\n  }\n\n  gl_FragColor = sum;\n}\n#endif\n\n// ------\n\n#ifdef _VPARTICLEILLUMINATION\nattribute float particleId;\n\nvarying vec3 vPos;\nvarying float vSize;\n\nvoid main() {\n  vec2 uv = ( vec2(\n    mod( particleId, particleCountSqrt ),\n    floor( particleId / particleCountSqrt )\n  ) + 0.5 ) / particleCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n\n  float size = oth.y;\n  vSize = size;\n\n  mat4 matP = perspective( FOV, resolution.x / resolution.y, 0.01, 100.0 );\n  mat4 matV = lookAt( cameraPos, cameraTar, cameraRoll );\n\n  vPos = pos.xyz;\n  vec4 outPos = matP * matV * vec4( pos.xyz, 1.0 );\n  gl_Position = outPos;\n  gl_PointSize = 128.0 / outPos.z;\n}\n#endif\n\n// ------\n\n#ifdef _PARTICLEILLUMINATION\nvarying vec3 vPos;\nvarying float vSize;\n\nvoid main() {\n  vec2 uv = ( floor( gl_FragCoord.xy / 0.25 ) + vec2( 0.5 ) ) / ( resolution / 0.25 );\n  vec3 pos = texture2D( textureRenderPos, uv ).xyz;\n  vec3 ill = texture2D( textureRenderIll, uv ).xyz;\n  float len = length( pos - vPos );\n  gl_FragColor = vec4( 0.3 * max( V.xxx, 10.0 / len / len * vSize * ill - 0.2 ) * vec3( 0.3, 0.6, 1.0 ), 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _BLOOM\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 bv = ( isVert ? vec2( 0.0, 1.0 ) : vec2( 1.0, 0.0 ) ) / resolution;\n\n  vec3 sum = V.xxx;\n  for ( int i = -BLOOM_SAMPLES; i <= BLOOM_SAMPLES; i ++ ) {\n    vec2 v = saturate( uv + bv * float( i ) );\n    vec3 tex = texture2D( texture, v ).xyz;\n    float mul = gaussian( abs( float( i ) ), gaussVar );\n    sum += tex * mul;\n  }\n\n  gl_FragColor = vec4( sum, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _POST\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  float beat = time * BPM / 60.0 - 8.0;\n\n  iff ( beat < 0.0 )\n    vec2 p = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;\n    gl_FragColor = vec4( V.yyy * smoothstep( 0.0, 0.01, 0.3 * exp( -fract( beat ) ) - length( p ) ), 1.0 );\n  endiff\n\n  iff ( 0.0 <= beat )\n    vec3 tex = texture2D( textureRender, uv ).xyz;\n    tex += texture2D( textureParticleIllumination, uv ).xyz * 0.2;\n    tex += max( V.xxx, texture2D( textureBloom, uv ).xyz - 0.7 ) * 0.4;\n    tex = mix(\n      vec3( 0.0 ),\n      tex,\n      1.14 - length( uv - 0.5 ) * 0.4 // vig\n    );\n\n    vec3 col = tex.xyz;\n    col = vec3(\n      smoothstep( 0.0, 1.0, col.x ),\n      smoothstep( 0.0, 1.0, col.y ),\n      smoothstep( -0.2, 1.2, col.z )\n    );\n    gl_FragColor = vec4( col, 1.0 );\n  endiff\n}\n#endif\n\n// ------\n\n#ifdef _GLITCH\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec3 uvx = mod( uv.x + sin( TAU * random( floor( uv.y * 128.0 ) * 19.29 + time ).xyz ) * finalGlitch, V.yyy );\n  float texInt = sin( time ) * 0.5 + 0.5;\n  vec3 col = vec3(\n    texture2D( texture, vec2( uvx.x, uv.y ) ).x,\n    texture2D( texture, vec2( uvx.y, uv.y ) ).y,\n    texture2D( texture, vec2( uvx.z, uv.y ) ).z\n  );\n  col *= 1.0 + finalGlitch * 10.0;\n  gl_FragColor = vec4( col, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _MUSIC\nvec2 kick( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return V.yy * sin( _phase * 300.0 - exp( -_phase * 70.0 ) * 80.0 ) * exp( -_phase * 4.0 );\n}\n\nvec2 kick2( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return V.yy * sin( _phase * 300.0 - exp( -_phase * 100.0 ) * 30.0 ) * exp( -_phase * 5.0 );\n}\n\nvec2 snare( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return saturateA( (\n    random( _phase / 0.034 ).xy +\n    sin( _phase * 2500.0 * vec2( 1.005, 0.995 ) - exp( -_phase * 400.0 ) * 30.0 )\n  ) * 2.0 * exp( -_phase * 23.0 ) );\n}\n\nvec2 snare2( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return (\n    random( lofi( _phase, 6E-5 ) / 2.06 ).xy * 0.5 +\n    sin( _phase * 2000.0 * vec2( 1.005, 0.995 ) - exp( -_phase * 800.0 ) * 20.0 )\n  ) * exp( -_phase * 31.0 );\n}\n\nvec2 cowbell( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 cow = (\n    sin( _phase * 800.0 * TAU * vec2( 1.005, 0.995 ) - exp( -_phase * 800.0 ) * 20.0 ) +\n    sin( _phase * 540.0 * TAU * vec2( 0.995, 1.005 ) - exp( -_phase * 800.0 ) * 20.0 )\n  );\n  return sign( cow ) * pow( abs( cow ) * exp( -_phase * 20.0 ), 0.8 * V.yy );\n}\n\nvec2 tam( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 s = V.yy * 2.0 * sin( _phase * _freq * TAU + random( _phase * 1.45 ).xy * 0.1 - exp( -_phase * 1000.0 ) * 9.0 );\n  float a = exp( -_phase * 20.0 ) / 2.5;\n  return s * a;\n}\n\nvec2 hihat( float _seed, float _dec ) {\n  return random( _seed ).xy * exp( -_dec );\n}\n\nfloat powNoise( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return 0.0; }\n  float p = mod( _phase * _freq, 1.0 ) + random( _phase * 1.45 ).x * 0.01;\n  return ( ( p < 0.4 ? -0.1 : 0.1 ) + sin( p * TAU ) * 0.7 );\n}\n\nfloat sharpSaw( float _phase ) {\n  return mod( _phase, 1.0 ) * 2.0 - 1.0;\n}\n\nfloat pwm( float _phase, float _pulse ) {\n  return fract( _phase ) < _pulse ? -1.0 : 1.0;\n}\n\nfloat saw( float _freq, float _phase, float _filt, float _q ) {\n  if ( _phase < 0.0 ) { return 0.0; }\n  float sum = 0.0;\n  for ( int i = 1; i <= 32; i ++ ) {\n    float cut = smoothstep( _filt * 1.2, _filt * 0.8, float( i ) * _freq );\n    cut += smoothstep( _filt * 0.3, 0.0, abs( _filt - float( i ) * _freq ) ) * _q;\n    sum += sin( float( i ) * _freq * _phase * TAU ) / float( i ) * cut;\n  }\n  return sum;\n}\n\nvec2 fms( float _freq, float _phase, float _mod ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  float p = _phase * _freq * TAU;\n  return vec2(\n    sin( p * 0.999 + sin( p * _mod * 1.002 ) * exp( -_phase * 7.0 ) ),\n    sin( p * 1.001 + sin( p * _mod * 0.998 ) * exp( -_phase * 7.0 ) )\n  ) * exp( -_phase * 7.0 );\n}\n\nvec2 bell( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 p = _freq * vec2( 1.001, 0.999 ) * _phase * TAU;\n  float d = exp( -_phase * 1.0 );\n  float d2 = exp( -_phase * 20.0 );\n  return (\n    sin( p * 1.0001 + sin( p * 3.5004 ) * d ) +\n    sin( p * 0.9998 + sin( p * 3.4997 ) * d ) +\n    sin( _phase * 2033.2 + sin( p * 1.9994 ) * exp( -_phase * 10.0 ) ) * exp( -_phase * 10.0 )\n  ) * 0.3 * d;\n}\n\nvec2 choir( float _freq, float _phase, float _time ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 sum = V.xx;\n  for ( int i = 0; i < 6; i ++ ) {\n    vec4 rand = random( float( i ) / 0.3 );\n    vec2 p = ( _time - _phase ) + _phase * _freq * PI * ( 0.98 + 0.04 * rand.xy ) + float( i );\n    p += sin( p / _freq * 3.0 + rand.zw );\n    sum += sin( 2.0 * p + sin( p ) * 1.0 + sin( 7.0 * p ) * 0.02 );\n  }\n  return sum / 8.0;\n}\n\nvec2 cccp( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 p = _freq * vec2( 0.999, 1.001 ) * _phase * TAU;\n  float dl = exp( -_phase * 1.0 );\n  float ds = exp( -_phase * 10.0 );\n  return (\n    sin( p * 1.0003 + sin( p * 11.0035 ) * 1.5 * ds + sin( p * 1.0003 ) * 1.0 * dl ) +\n    sin( p * 0.9997 + sin( p * 0.9997 + sin( p * 4.9984 ) * 2.0 * dl ) * 0.5 * ds )\n  ) * 0.5 * ds;\n}\n\nvec2 bass( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 p = _freq * vec2( 0.999, 1.001 ) * _phase * TAU;\n  float dl = exp( -_phase * 1.0 );\n  float ds = exp( -_phase * 14.0 );\n  return sin(\n    p +\n    sin( p ) * 1.5 * dl +\n    sin( p + sin( p * 10.0 ) * 2.5 * ds ) * 3.0 * ds +\n    sin( p + sin( p * 18.0 ) * 1.5 * ds ) * 0.5 * dl\n  ) * 0.5 * dl;\n}\n\nvoid main() {\n  float t = ( gl_FragCoord.x - 0.5 + resolution.x * ( gl_FragCoord.y - 0.5 ) ) / sampleRate;\n  float beat = t * BPM / 60.0 - 8.0;\n  vec2 ret = V.xx;\n  float tenkai = floor( beat / 4.0 );\n  float sidechain = 0.0;\n\n  float trans = 3.0;\n\n  float beati = floor( beat );\n  float beatf = fract( beat );\n  float beat32 = mod( beat, 32.0 );\n\n  float kickTime;\n  float snareTime;\n  \n  // ------\n\n  iff ( beat < 0.0 )\n    ret += 0.5 * sin( TAU * t * ( mod( beat, 4.0 ) < 1.0 ? 2000.0 : 1000.0 ) ) * ( beatf < 0.1 ? 1.0 : 0.0 );\n  endiff\n\n  // ------\n\n  iff ( ( 0.0 < beat && beat < 64.0 ) || ( 192.0 < beat && beat < 256.0 ) )\n    kickTime = b2t( mod( mod( beat, 4.0 ), 2.5 ) );\n    snareTime = b2t( mod( beat - 1.0, 2.0 ) );\n    float beat64 = mod( beat, 64.0 );\n\n    ret += 0.7 * kick2( kickTime );\n    ret += 0.5 * snare2( snareTime );\n    sidechain = smoothstep( 0.0, 0.2, min( kickTime, snareTime ) );\n\n    ret += 0.2 * sidechain * hihat( t, b2t( mod( beat, 0.5 ) ) * 100.0 );\n    if ( 32.0 < beat ) {\n      ret += 0.2 * hihat( t * 0.1, b2t( mod( beat, 0.25 ) ) * 1000.0 );\n    }\n\n    float build = max( 0.0, beat64 - 48.0 );\n    float ksk = pow( build * 0.3, 2.0 );\n    float vib = sin( t * ( 20.0 + ksk ) ) * ( 0.1 + ksk * 0.1 );\n    ret += sidechain * sharpSaw( noten( -24 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( -17 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( -14 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( -7 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( 2 ) * t + vib ) * 0.04;\n\n    ret += sidechain * 0.2 * build / 16.0 * random( lofi( t * 6.24, 0.0008 * lofi( build / 16.0, 0.02 ) ) ).xy;\n\n    iff ( 62.5 < beat64 )\n      ret = 0.7 * kick( b2t( beat64 - 62.5 ) );\n      ret += 0.5 * snare( b2t( beat64 - 63.0 ) );\n      if ( 255.0 < beat ) {\n        ret = 0.5 * snare( b2t( beat - 255.0 - lofi( beat - 255.0, 0.08 ) * 0.8 ) );\n      }\n    endiff\n  endiff\n\n  // ------\n\n  iff ( 64.0 < beat && beat < 192.0 )\n    if ( 124.5 < beat && beat < 128.0 ) {\n      ret += 0.7 * kick2( b2t(\n        mod( mod( beatf - 0.75, 1.0 ), 0.75 )\n      ) );\n      ret += 0.5 * snare2( b2t(\n        mod( mod( beatf - 0.25, 1.0 ), 0.75 )\n      ) );\n      if ( 127.0 < beat ) {\n        ret = 0.5 * snare( b2t( beat - 127.0 - lofi( beat - 127.0, 0.12 ) * 0.6 ) );\n      }\n      sidechain = 0.0;\n    } else {\n      kickTime = mod( beat, 4.0 ) < 2.5 ? b2t( mod( mod( beat, 4.0 ), 1.75 ) ) : b2t( mod( beat - 2.5, 4.0 ) );\n      snareTime = b2t( mod( beat - 1.0, 2.0 ) );\n\n      ret += 0.7 * kick( kickTime );\n      ret += 0.5 * snare( snareTime );\n      sidechain = smoothstep( 0.0, 0.2, min( kickTime, snareTime ) );\n    }\n\n    ret += 0.4 * tam( 300.0, b2t( mod( beat - 0.75, 2.0 ) ) );\n\n    if ( 96.0 < beat ) {\n      ret += 0.3 * sidechain * hihat( t, b2t( mod( beat, 0.25 ) ) * 100.0 );\n    }\n\n    iff ( mod( beat, 2.0 ) < 1.0 )\n      ret += sidechain * powNoise( noten( 0 ) / 8.0, t ) * 1.0;\n    endiff\n  endiff\n\n  iff ( 256.0 < beat && beat < 448.0 )\n    trans = beat < 320.0 ? 2.0 : beat < 384.0 ? 0.0 : -3.0;\n    kickTime = mod( beat, 4.0 ) < 2.5 ? b2t( mod( mod( beat, 4.0 ), 1.75 ) ) : b2t( mod( beat - 2.5, 4.0 ) );\n    snareTime = b2t( mod( beat - 1.0, 2.0 ) );\n\n    if ( ( 316.0 < beat && beat < 320.0 ) || 444.0 < beat ) {\n      sidechain = smoothstep( 0.0, 0.2, b2t( beatf ) );\n    } else {\n      ret += 0.7 * kick( kickTime );\n      ret += 0.5 * snare( snareTime );\n      sidechain = smoothstep( 0.0, 0.2, min( kickTime, snareTime ) );\n\n      iff ( beat < 384.0 )\n        ret += 0.4 * tam( 300.0, b2t( mod( beat - 0.75, 2.0 ) ) );\n        ret += 0.3 * sidechain * hihat( t, b2t( mod( beat, 0.25 ) ) * 100.0 );\n      endiff\n\n      float vib = sin( t * 20.0 ) * 0.1;\n      ret += sidechain * sharpSaw( noten( -24 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( -17 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( -14 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( -7 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( 2 ) * t + vib ) * 0.04;\n    }\n\n    iff ( mod( beat, 2.0 ) < 1.0 )\n      ret += sidechain * powNoise( noten( 0 ) / 8.0, t ) * 1.0;\n    endiff\n  endiff\n\n  // ------\n\n  iff ( ( 256.0 < beat && beat < 448.0 ) )\n    iff ( 1.25 < beat32 && beat32 < 2.0 )\n      ret += saturateA( saw(\n        noten( beatf < 0.5 ? 10 : beatf < 0.75 ? 12 : 0 ) / 4.0,\n        b2t( mod( beat, 0.25 ) ),\n        300.0 + 1200.0 * exp( -b2t( mod( beat, 0.25 ) ) * 20.0 ),\n        7.0\n      ) * 1.0 ) * 0.15;\n    endiff\n\n    iff ( 3.0 < beat32 && beat32 < 4.0 )    \n      ret += bell( noten( -2 ), b2t( beatf - 0.75 ) ) * 0.2;\n    endiff\n\n    iff ( 5.0 < beat32 && beat32 < 6.0 )    \n      ret += sidechain * sharpSaw( noten( 0 ) / 4.0 * t ) * 0.2;\n    endiff\n\n    iff ( 7.0 < beat32 && beat32 < 8.0 )\n      ret += sidechain * sharpSaw( noten( 0 ) * t + sin( t * 50.0 ) * 0.4 ) * 0.15;\n    endiff\n\n    iff ( 9.0 < beat32 && beat32 < 10.0 )\n      ret += 0.5 * tam( 200.0, b2t( beatf - 0.5 ) );\n    endiff\n\n    iff ( 11.0 < beat32 && beat32 < 12.0 )\n      if ( 0.5 < beatf ) {\n        ret += saw(\n          noten( beatf < 0.75 ? 10 : 0 ) / 4.0,\n          b2t( mod( beatf, 0.25 ) ),\n          300.0 + 4500.0 * exp( -b2t( mod( beatf, 0.25 ) ) * 20.0 ),\n          3.0\n        ) * 0.08;\n      }\n    endiff\n\n    iff ( 13.25 < beat32 && beat32 < 13.75 )\n      float p = mod( noten( beatf < 0.5 ? -2 : 0 ) / 8.0 * b2t( beatf ), 1.0 );\n      ret += 0.4 * exp( -1.0 * b2t( mod( beat, 0.25 ) ) ) * lofi( p < 0.5 ? p * 4.0 - 1.0 : 3.0 - p * 4.0, 0.1 );\n    endiff\n    \n    iff ( 15.0 < beat32 && beat32 < 16.0 )\n      ret += fms( noten( 0 ) / 2.0, b2t( beatf - 0.5 ), 2.0 ) * 0.1;\n      ret += fms( noten( 5 ) / 2.0, b2t( beatf - 0.5 ), 7.0 ) * 0.1;\n      ret += fms( noten( 7 ) / 2.0, b2t( beatf - 0.5 ), 1.0 ) * 0.1;\n      ret += fms( noten( 10 ) / 2.0, b2t( beatf - 0.5 ), 12.0 ) * 0.1;\n    endiff\n\n    iff ( 17.0 < beat32 && beat32 < 18.0 )\n      ret += 0.1 * sidechain * saw(\n        noten( 0 ) / 8.0,\n        lofi( b2t( beatf ), 2E-4 ),\n        300.0 + 3500.0 * exp( -b2t( beatf ) * 10.0 ),\n        7.0\n      );\n    endiff\n\n    iff ( 19.0 < beat32 && beat32 < 20.0 )\n      ret += 0.2 * sidechain * pwm( t * noten( -38 ), 0.5 );\n    endiff\n\n    iff ( 21.0 < beat32 && beat32 < 22.0 )\n      ret += cccp( noten( 2 ), b2t( beatf - 0.25 ) ) * 0.1;\n      ret += cccp( noten( 3 ), b2t( beatf - 0.5 ) ) * 0.1;\n      ret += cccp( noten( 10 ), b2t( beatf - 0.75 ) ) * 0.1;\n    endiff\n\n    iff ( 23.0 < beat32 && beat32 < 24.0 )\n      ret += cowbell( b2t( beatf - 0.5 ) ) * 0.2;\n    endiff\n\n    iff ( 25.25 < beat32 && beat32 < 25.75 )\n      ret += 0.15 * bass( noten( beatf < 0.5 ? -26 : -24 ), b2t( mod( beatf, 0.25 ) ) );\n    endiff\n\n    iff ( 27.00 < beat32 && beat32 < 28.00 )\n      ret += 0.15 * bass( noten( -26 ), b2t( lofi( beatf, 0.001 ) - 0.5 ) * 0.5 );\n    endiff\n\n    iff ( 29.0 < beat32 && beat32 < 30.0 )\n      ret += 0.1 * sidechain * pwm( t * noten( -7 ), beatf * 0.5 );\n    endiff\n\n    iff ( 31.0 < beat32 && beat32 < 32.0 )\n      int n = int( mod( floor( beatf * 12.0 ), 6.0 ) );\n      ret += 0.1 * sidechain * pwm( t * noten( n == 0 ? 0 : n == 1 ? 5 : n == 2 ? 7 : n == 3 ? 12 : n == 4 ? 17 : 19 ), 0.25 );\n    endiff\n  endiff\n\n  // ------\n\n  iff ( 128.0 < beat && beat < 254.5 )\n    for ( int i = 0; i < 3; i ++ ) {\n      float dice = random( floor( ( beat - float( i ) * 0.75 ) / 0.25 ) / 4.72 ).x;\n      int dicen = int( dice * 5.0 );\n      float note = dicen == 0 ? 0.0 : dicen == 1 ? 7.0 : dicen == 2 ? 10.0 : dicen == 3 ? 17.0 : 26.0;\n      float diceo = mod( floor( dice * 15.0 ), 3.0 );\n      note += diceo * 12.0;\n      ret += 0.07 / float( i * 4 + 1 ) * cccp( noten( note ) / 2.0, b2t( mod( beatf, 0.25 ) ) );\n    }\n  endiff\n\n  iff ( 320.0 < beat && beat < 444.0 )\n    for ( int i = 0; i < 3; i ++ ) {\n      float dice = random( floor( ( beat - float( i ) ) / 0.25 ) / 4.72 ).x;\n      int dicen = int( dice * 5.0 );\n      float note = dicen == 0 ? 0.0 : dicen == 1 ? 7.0 : dicen == 2 ? 10.0 : dicen == 3 ? 17.0 : 26.0;\n      float diceo = mod( floor( dice * 15.0 ), 3.0 );\n      note += diceo * 12.0;\n      float ph = b2t( mod( beatf, 0.25 ) );\n      ret += 0.03 * saw( noten( note ) / 2.0, ph, 200.0 + 6500.0 * exp( -ph * 20.0 ) / float( i * 5 + 1 ), 0.0 );\n    }\n  endiff\n\n  // ------\n\n  gl_FragColor = vec4( ret, 0.0, 1.0 );\n}\n#endif"]);
  shader = "\n#define REFLECT_ITER " + listReflection.value + "\n" + shader;

  var programReturn = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _RETURN" + shader);

  var programParticleCompute = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _PARTICLECOMPUTE" + shader);

  var programParticleRender = glCat.createProgram("#define _VERT\n#define _VPARTICLERENDER" + shader, "#define _FRAG\n#define _PARTICLERENDER" + shader);

  var programCharCubeCompute = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _CHARCUBECOMPUTE" + shader);

  var programRender = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _RENDER" + shader);

  var programDownscale = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _DOWNSCALE" + shader);

  var programParticleIllumination = glCat.createProgram("#define _VERT\n#define _VPARTICLEILLUMINATION" + shader, "#define _FRAG\n#define _PARTICLEILLUMINATION" + shader);

  var programBloom = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _BLOOM" + shader);

  var programPost = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _POST" + shader);

  var programGlitch = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _GLITCH" + shader);

  // ------

  var framebufferDownscale = glCat.createFloatFramebuffer(width * 0.25, height * 0.25);
  var framebufferParticleIllumination = glCat.createFloatFramebuffer(width * 0.25, height * 0.25);
  var framebufferBloomTemp = glCat.createFloatFramebuffer(width * 0.25, height * 0.25);
  var framebufferBloom = glCat.createFloatFramebuffer(width * 0.25, height * 0.25);

  var drawbuffersParticleIndex = 0;
  var drawbuffersParticle = [glCat.createDrawBuffers(particleCountSqrt, particleCountSqrt, 4), glCat.createDrawBuffers(particleCountSqrt, particleCountSqrt, 4)];
  var drawbuffersCharCube = [glCat.createDrawBuffers(charCubeCountSqrt, charCubeCountSqrt, 4), glCat.createDrawBuffers(charCubeCountSqrt, charCubeCountSqrt, 4)];

  var framebufferPost = glCat.createFloatFramebuffer(width, height);

  var drawbuffersParticleRender = glCat.createDrawBuffers(width, height, 3);
  var drawbuffersRender = glCat.createDrawBuffers(width, height, 3);

  // ------

  var textureRandomSize = 256;

  var textureRandomUpdate = function textureRandomUpdate(_tex) {
    glCat.setTextureFromFloatArray(_tex, textureRandomSize, textureRandomSize, function () {
      var len = textureRandomSize * textureRandomSize * 4;
      var ret = new Float32Array(len);
      for (var i = 0; i < len; i++) {
        ret[i] = (0, _xorshift2.default)();
      }
      return ret;
    }());
  };

  var textureRandom = glCat.createTexture();
  glCat.textureWrap(textureRandom, gl.REPEAT);
  textureRandomUpdate(textureRandom);

  var textureModelWidth = void 0;
  var textureModelHeight = void 0;
  var textureModel = glCat.createTexture();
  {
    var data = (0, _bvh2.default)((0, _octahedron2.default)(5).pos);
    textureModelWidth = 768;
    textureModelHeight = data.length / 4 / 768;
    glCat.setTextureFromFloatArray(textureModel, textureModelWidth, textureModelHeight, data.array);
  }

  var charDef = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4329476, 10813440, 11512810, 31636111, 18092113, 3332406, 4325376, 8523912, 2232450, 4897444, 4357252, 132, 31744, 4, 17043521, 15259182, 6426756, 16267327, 15249966, 18414096, 32554511, 31505966, 33079824, 15252014, 15268366, 131200, 131204, 8521864, 459200, 2236546, 15249412, 15267454, 15269425, 16301615, 15238702, 16303663, 32554047, 32554017, 14738990, 18415153, 32641183, 17318446, 18128177, 1082431, 18732593, 18470705, 15255086, 16301089, 15258934, 16301617, 31504911, 32641156, 18400814, 18393412, 18536106, 18157905, 18157700, 32772191, 12718220, 1118480, 6426758, 4521984, 31];

  var textureCharCube = glCat.createTexture();
  var textureCharCubeArray = new Float32Array(charCubeCount * 4);
  var textureCharCubeIndex = 0;
  var genCharCube = function genCharCube(_str) {
    for (var iChar = 0; iChar < _str.length; iChar++) {
      var v = charDef[_str.charCodeAt(iChar)];
      for (var iPos = 0; iPos < 25; iPos++) {
        if (v >> iPos & 1) {
          var x = iPos % 5 + 1 + iChar * 6 - _str.length * 3;
          var y = Math.floor(iPos / 5) - 2;
          textureCharCubeArray[textureCharCubeIndex * 4 + 0] = x;
          textureCharCubeArray[textureCharCubeIndex * 4 + 1] = y;
          textureCharCubeArray[textureCharCubeIndex * 4 + 2] = 0.0;
          textureCharCubeArray[textureCharCubeIndex * 4 + 3] = Math.random();
          textureCharCubeIndex = (textureCharCubeIndex + 1) % charCubeCount;
        }
      }
    }
    glCat.setTextureFromFloatArray(textureCharCube, charCubeCountSqrt, charCubeCountSqrt, textureCharCubeArray);
  };
  var resetCharCube = function resetCharCube() {
    textureCharCubeArray.fill(0);
    glCat.setTextureFromFloatArray(textureCharCube, charCubeCountSqrt, charCubeCountSqrt, textureCharCubeArray);
  };

  // ------

  var uniforms = function uniforms() {
    glCat.uniform1f("time", time);
    glCat.uniform1f("deltaTime", deltaTime);

    glCat.uniform1f("distFuncMode", auto("distFuncMode"));

    glCat.uniform1f("particleSize", auto("particleSize"));
    glCat.uniform1f("particleField", auto("particleField"));
    glCat.uniform1f("particleGravity", auto("particleGravity"));
    glCat.uniform1f("particleGenSize", auto("particleGenSize"));
    glCat.uniform3fv("particlePos", [auto("particlePosX"), auto("particlePosY"), auto("particlePosZ")]);

    glCat.uniform3fv("shiftPos", [auto("shiftPosX"), auto("shiftPosY"), auto("shiftPosZ")]);
    glCat.uniform3fv("shiftSize", [auto("shiftSizeX"), auto("shiftSizeY"), auto("shiftSizeZ")]);
    glCat.uniform3fv("shiftRot", [auto("shiftRotX"), auto("shiftRotY"), auto("shiftRotZ")]);

    glCat.uniform3fv("cameraPos", [auto("cameraPosX"), auto("cameraPosY"), auto("cameraPosZ")]);
    glCat.uniform3fv("cameraTar", [auto("cameraTarX"), auto("cameraTarY"), auto("cameraTarZ")]);
    glCat.uniform1f("cameraRoll", auto("cameraRoll"));

    glCat.uniform3fv("spherePos", [auto("spherePosX"), auto("spherePosY"), auto("spherePosZ")]);
    glCat.uniform1f("sphereSize", auto("sphereSize"));
    glCat.uniform1f("sphereBeat", auto("sphereBeat"));
    glCat.uniform1f("sphereLofi", auto("sphereLofi"));

    glCat.uniform1f("anotherShader", auto("anotherShader"));
    glCat.uniform1f("anotherShaderDif", auto("anotherShaderDif"));
    glCat.uniform1f("anotherShaderEdge", auto("anotherShaderEdge"));

    glCat.uniform1f("randomyGlitch", auto("randomyGlitch"));

    glCat.uniform1f("finalGlitch", auto("finalGlitch"));
  };

  // ------

  _music2.default.prepare(_defineProperty({
    gl: gl,
    glCat: glCat,
    uniforms: uniforms,
    auto: auto,
    textureRandom: textureRandom }, "textureRandom", textureRandom));

  // ------

  var render = function render() {
    gl.viewport(0, 0, particleCountSqrt, particleCountSqrt);
    glCat.useProgram(programParticleCompute);
    gl.bindFramebuffer(gl.FRAMEBUFFER, drawbuffersParticle[(drawbuffersParticleIndex + 1) % 2].framebuffer);
    glCat.drawBuffers(drawbuffersParticle[drawbuffersParticleIndex].textures.length);
    gl.blendFunc(gl.ONE, gl.ONE);
    glCat.clear(0.0, 0.0, 0.0, 0.0);

    glCat.attribute('p', vboQuad, 2);

    uniforms();

    glCat.uniform1i('init', particleInit);
    glCat.uniform1f('particleCountSqrt', particleCountSqrt);

    glCat.uniformTexture('textureP0', drawbuffersParticle[drawbuffersParticleIndex].textures[0], 0);
    glCat.uniformTexture('textureP1', drawbuffersParticle[drawbuffersParticleIndex].textures[1], 1);
    glCat.uniformTexture('textureP2', drawbuffersParticle[drawbuffersParticleIndex].textures[2], 2);
    glCat.uniformTexture('textureP3', drawbuffersParticle[drawbuffersParticleIndex].textures[3], 3);

    glCat.uniformTexture('textureRandom', textureRandom, 4);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // ------

    gl.viewport(0, 0, charCubeCountSqrt, charCubeCountSqrt);
    glCat.useProgram(programCharCubeCompute);
    gl.bindFramebuffer(gl.FRAMEBUFFER, drawbuffersCharCube[(drawbuffersParticleIndex + 1) % 2].framebuffer);
    glCat.drawBuffers(drawbuffersCharCube[drawbuffersParticleIndex].textures.length);
    gl.blendFunc(gl.ONE, gl.ONE);
    glCat.clear(0.0, 0.0, 0.0, 0.0);

    glCat.attribute('p', vboQuad, 2);

    uniforms();

    glCat.uniform1i('init', particleInit);
    glCat.uniform1f('charCubeCountSqrt', charCubeCountSqrt);

    glCat.uniformTexture('textureP0', drawbuffersCharCube[drawbuffersParticleIndex].textures[0], 0);
    glCat.uniformTexture('textureP1', drawbuffersCharCube[drawbuffersParticleIndex].textures[1], 1);
    glCat.uniformTexture('textureP2', drawbuffersCharCube[drawbuffersParticleIndex].textures[2], 2);
    glCat.uniformTexture('textureP3', drawbuffersCharCube[drawbuffersParticleIndex].textures[3], 3);
    glCat.uniformTexture('textureCharCube', textureCharCube, 4);

    glCat.uniformTexture('textureRandom', textureRandom, 5);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    resetCharCube();

    // ------

    drawbuffersParticleIndex = (drawbuffersParticleIndex + 1) % 2;
    particleInit = false;

    // ------

    gl.viewport(0, 0, width, height);
    glCat.useProgram(programParticleRender);
    gl.bindFramebuffer(gl.FRAMEBUFFER, drawbuffersParticleRender.framebuffer);
    glCat.drawBuffers(drawbuffersParticleRender.textures.length);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    glCat.clear(0.0, 0.0, 0.0, 0.0);

    glCat.attribute("attPos", vboOctPos, 3);
    glCat.attribute("attNor", vboOctNor, 3);
    glCat.attribute("particleId", vboParticle, 1, 1);

    uniforms();

    glCat.uniform2fv("resolution", [width, height]);
    glCat.uniform1f('particleCountSqrt', particleCountSqrt);

    glCat.uniformTexture('textureP0', drawbuffersParticle[drawbuffersParticleIndex].textures[0], 0);
    glCat.uniformTexture('textureP1', drawbuffersParticle[drawbuffersParticleIndex].textures[1], 1);
    glCat.uniformTexture('textureP2', drawbuffersParticle[drawbuffersParticleIndex].textures[2], 2);
    glCat.uniformTexture('textureP3', drawbuffersParticle[drawbuffersParticleIndex].textures[3], 3);

    glCat.extInstancedArrays.drawArraysInstancedANGLE(gl.TRIANGLES, 0, oct0.pos.length / 3, particleCount);

    // ------

    gl.viewport(0, 0, width, height);
    glCat.useProgram(programParticleRender);
    gl.bindFramebuffer(gl.FRAMEBUFFER, drawbuffersParticleRender.framebuffer);
    glCat.drawBuffers(drawbuffersParticleRender.textures.length);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    glCat.attribute("attPos", vboCubePos, 3);
    glCat.attribute("attNor", vboCubeNor, 3);
    glCat.attribute("particleId", vboCharCube, 1, 1);

    uniforms();

    glCat.uniform2fv("resolution", [width, height]);
    glCat.uniform1f('particleCountSqrt', charCubeCountSqrt);

    glCat.uniformTexture('textureP0', drawbuffersCharCube[drawbuffersParticleIndex].textures[0], 0);
    glCat.uniformTexture('textureP1', drawbuffersCharCube[drawbuffersParticleIndex].textures[1], 1);
    glCat.uniformTexture('textureP2', drawbuffersCharCube[drawbuffersParticleIndex].textures[2], 2);
    glCat.uniformTexture('textureP3', drawbuffersCharCube[drawbuffersParticleIndex].textures[3], 3);

    glCat.extInstancedArrays.drawArraysInstancedANGLE(gl.TRIANGLES, 0, _cube2.default.pos.length / 3, charCubeCount);

    // ------

    gl.viewport(0, 0, width, height);
    glCat.useProgram(programRender);
    gl.bindFramebuffer(gl.FRAMEBUFFER, drawbuffersRender.framebuffer);
    glCat.drawBuffers(drawbuffersRender.textures.length);
    gl.blendFunc(gl.ONE, gl.ONE);
    glCat.clear(0.0, 0.0, 0.0, 1.0);

    glCat.attribute("p", vboQuad, 2);

    uniforms();

    glCat.uniform2fv("resolution", [width, height]);

    glCat.uniform2fv("textureModelReso", [textureModelWidth, textureModelHeight]);
    glCat.uniformTexture("textureModel", textureModel, 0);

    glCat.uniformTexture("textureParticlePos", drawbuffersParticleRender.textures[0], 1);
    glCat.uniformTexture("textureParticleNor", drawbuffersParticleRender.textures[1], 2);
    glCat.uniformTexture("textureParticleParam", drawbuffersParticleRender.textures[2], 3);

    glCat.uniformTexture("textureRandom", textureRandom, 4);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // ------

    if (checkboxParticleIllumination.checked) {
      gl.viewport(0, 0, width * 0.25, height * 0.25);
      glCat.useProgram(programParticleIllumination);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferParticleIllumination.framebuffer);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      glCat.clear(0.0, 0.0, 0.0, 1.0);

      gl.disable(gl.DEPTH_TEST);

      glCat.attribute("particleId", vboParticle, 1);

      uniforms();

      glCat.uniform1f("particleCountSqrt", particleCountSqrt);
      glCat.uniform2fv("resolution", [width * 0.25, height * 0.25]);

      glCat.uniformTexture('textureP0', drawbuffersParticle[drawbuffersParticleIndex].textures[0], 0);
      glCat.uniformTexture('textureP1', drawbuffersParticle[drawbuffersParticleIndex].textures[1], 1);
      glCat.uniformTexture('textureP2', drawbuffersParticle[drawbuffersParticleIndex].textures[2], 2);
      glCat.uniformTexture('textureP3', drawbuffersParticle[drawbuffersParticleIndex].textures[3], 3);

      glCat.uniformTexture('textureRenderPos', drawbuffersRender.textures[1], 4);
      glCat.uniformTexture('textureRenderIll', drawbuffersRender.textures[2], 5);

      gl.drawArrays(gl.POINTS, 0, particleCount);

      gl.enable(gl.DEPTH_TEST);
    }

    // ------

    if (checkboxBloom.checked) {
      gl.viewport(0, 0, width * 0.25, height * 0.25);
      glCat.useProgram(programDownscale);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferDownscale.framebuffer);
      gl.blendFunc(gl.ONE, gl.ONE);
      glCat.clear(0.0, 0.0, 0.0, 1.0);

      glCat.attribute("p", vboQuad, 2);

      glCat.uniform2fv("resolution", [width * 0.25, height * 0.25]);

      glCat.uniformTexture("texture", drawbuffersRender.textures[0], 0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // ------

      for (var i = 0; i < 4; i++) {
        var gaussVar = Math.pow(3.0, i + 1.0);

        // ------

        gl.viewport(0, 0, width * 0.25, height * 0.25);
        glCat.useProgram(programBloom);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferBloomTemp.framebuffer);
        gl.blendFunc(gl.ONE, gl.ONE);
        glCat.clear(0.0, 0.0, 0.0, 1.0);

        glCat.attribute('p', vboQuad, 2);

        glCat.uniform1i('isVert', false);
        glCat.uniform1f('gaussVar', gaussVar);
        glCat.uniform2fv('resolution', [width * 0.25, height * 0.25]);

        glCat.uniformTexture('texture', framebufferDownscale.texture, 0);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        // ------

        gl.viewport(0, 0, width * 0.25, height * 0.25);
        glCat.useProgram(programBloom);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferBloom.framebuffer);
        gl.blendFunc(gl.ONE, gl.ONE);
        if (i === 0) {
          glCat.clear(0.0, 0.0, 0.0, 1.0);
        }

        glCat.attribute('p', vboQuad, 2);

        glCat.uniform1i('isVert', true);
        glCat.uniform1f('gaussVar', gaussVar);
        glCat.uniform2fv('resolution', [width * 0.25, height * 0.25]);

        glCat.uniformTexture('texture', framebufferBloomTemp.texture, 0);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    }

    // ------

    gl.viewport(0, 0, width, height);
    glCat.useProgram(programPost);
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferPost.framebuffer);
    gl.blendFunc(gl.ONE, gl.ONE);
    glCat.clear(0.0, 0.0, 0.0, 1.0);

    glCat.attribute('p', vboQuad, 2);

    uniforms();

    glCat.uniform2fv('resolution', [width, height]);

    glCat.uniformTexture('textureRender', drawbuffersRender.textures[0], 0);
    glCat.uniformTexture('textureBloom', framebufferBloom.texture, 1);
    glCat.uniformTexture('textureParticleIllumination', framebufferParticleIllumination.texture, 2);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // ------

    gl.viewport(0, 0, width, height);
    glCat.useProgram(programGlitch);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.blendFunc(gl.ONE, gl.ONE);
    glCat.clear(0.0, 0.0, 0.0, 1.0);

    glCat.attribute('p', vboQuad, 2);

    uniforms();

    glCat.uniform2fv('resolution', [width, height]);

    glCat.uniformTexture("textureRandom", textureRandom, 0);
    glCat.uniformTexture('texture', framebufferPost.texture, 1);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // ------

    gl.flush();
  };

  // ------

  var stop = false;
  var beatPrev = 0.0;
  var count = 0;

  var update = function update() {
    if (!stop) {
      time = _music2.default.getCurrentTime();
      var beat = Math.floor(time * 175.0 / 60.0) - 8;

      automaton.update(time);

      if (beat < 452.0) {
        if (beat !== beatPrev) {
          if (beat == 0.0) {
            genCharCube("FMS_CAT");
          }
          if (beat == 16.0) {
            genCharCube("WEBGL DEMO");
          }
          if (beat == 32.0) {
            genCharCube("SHIFT");
          }

          if (128.0 <= beat && beat < 192.0 && beat % 4 == 0) {
            genCharCube(["0X4015", "BRAINSTORM", "CTRL-ALT-TEST", "DOXAS", "GAM0022", "GAZ", "GYABO", "JUGEM-T", "NIKQ::CLUB", "RADIUM SOFTWARE", "POOBRAIN", "PRIMITIVE", "RTX1911", "SOMA_ARC", "SYSTEM K", "TOMOHIRO"][(beat - 128.0) / 4]);
          }
        }
        beatPrev = beat;

        render();

        // there is weird bug, here is emergency procedure
        if (10 === count++) {
          _music2.default.play();
        }
      }
    }

    requestAnimationFrame(update);
  };

  window.addEventListener("keydown", function (event) {
    if (event.which === 27) {
      stop = true;
      _music2.default.stop();
    }
  });
  update();
};

buttonFullscreen.addEventListener("click", function () {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.webkitRequestFullscreen) {
    document.body.webkitRequestFullscreen();
  } else if (document.body.mozRequestFullscreen) {
    document.body.mozRequestFullscreen();
  }
});

buttonStart.addEventListener("click", function () {
  divMenu.style.display = "none";
  go();
});

},{"./automaton.min":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/automaton.min.js","./bvh":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/bvh.js","./cube":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/cube.js","./glcat.min":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/glcat.min.js","./music":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/music.js","./octahedron":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/octahedron.js","./stl":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/stl.js","./xorshift":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/xorshift.js","glslify":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/node_modules/glslify/browser.js"}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/music.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var props = {};

var glslify = require("glslify");

var audio = new AudioContext();
var bufferSize = 2048;
var renderWidth = 4096;
var renderHeight = 2048;
var sampleRate = audio.sampleRate;

var bufferSource = void 0;
var buffer = audio.createBuffer(2, renderWidth * renderHeight, 44100);

var pixels = new Float32Array(4 * renderWidth * renderHeight);

var playing = false;

var prepare = function prepare(_props) {
  props = _props;

  var gl = props.gl;
  var glCat = props.glCat;

  // ------

  var vboQuad = glCat.createVertexbuffer([-1, -1, 1, -1, -1, 1, 1, 1]);

  var shader = glslify(["\n#define PI 3.141592654\n#define TAU 6.283185307\n#define HUGE 9E16\n#define BPM 175.0\n#define FOV 70.0\n\n#define V vec3(0.,1.,-1.)\n#define saturate(i) clamp(i,0.,1.)\n#define saturateA(i) clamp(i,0.,1.)\n#define b2t(i) ((i)/BPM*60.0)\n#define noten(i) 440.0*pow(2.0,(float(i)+trans)/12.0)\n#define lofi(i,j) floor((i)/j)*j\n#define iff(i) for(int _=0;_<1;_++){if(!(i)){break;} \n#define endiff }\n\n#define INIT_LEN 1E-3\n#define MARCH_ITER 100\n// #define REFLECT_ITER 3\n\n#define BLOOM_SAMPLES 20\n\n#define MTL_AIR 0\n#define MTL_IFS 1\n#define MTL_MIRROR 2\n#define MTL_PARTICLE 3\n\n#extension GL_EXT_draw_buffers : require\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform bool init;\nuniform bool isVert;\nuniform float anotherShader;\nuniform float anotherShaderEdge;\nuniform float anotherShaderDif;\nuniform float bufferTime;\nuniform float bufferSize;\nuniform float cameraRoll;\nuniform float distFuncMode;\nuniform float sampleRate;\nuniform float time;\nuniform float deltaTime;\nuniform float gaussVar;\nuniform float sphereLofi;\nuniform float sphereBeat;\nuniform float particleCountSqrt;\nuniform float charCubeCountSqrt;\nuniform float particleSize;\nuniform float particleGravity;\nuniform float particleField;\nuniform float particleGenSize;\nuniform float sphereSize;\nuniform float randomyGlitch;\nuniform float finalGlitch;\nuniform vec2 resolution;\nuniform vec2 textureModelReso;\nuniform vec3 cameraPos;\nuniform vec3 cameraTar;\nuniform vec3 shiftPos;\nuniform vec3 shiftRot;\nuniform vec3 shiftSize;\nuniform vec3 particlePos;\nuniform vec3 spherePos;\nuniform sampler2D texture;\nuniform sampler2D textureModel;\nuniform sampler2D textureBloom;\nuniform sampler2D textureRender;\nuniform sampler2D textureRandom;\nuniform sampler2D textureRenderPos;\nuniform sampler2D textureRenderIll;\nuniform sampler2D textureParticlePos;\nuniform sampler2D textureParticleNor;\nuniform sampler2D textureParticleParam;\nuniform sampler2D textureParticleIllumination;\nuniform sampler2D textureCharCube;\nuniform sampler2D textureP0;\nuniform sampler2D textureP1;\nuniform sampler2D textureP2;\nuniform sampler2D textureP3;\n\n// ------\n\nmat2 rotate2D( float _t ) {\n  return mat2( cos( _t ), sin( _t ), -sin( _t ), cos( _t ) );\n}\n\nfloat gaussian( float _x, float _v ) {\n  return 1.0 / sqrt( 2.0 * PI * _v ) * exp( - _x * _x / 2.0 / _v );\n}\n\nfloat tri( float _phase ) {\n  float p = mod( _phase, 2.0 );\n  return p < 1.0 ? ( p ) : ( 2.0 - p );\n}\n\nfloat smin( float _a, float _b, float _k ){\n  float h = clamp( 0.5 + 0.5 * ( _b - _a ) / _k, 0.0, 1.0 );\n  return mix( _b, _a, h ) - _k * h * ( 1.0 - h );\n}\n\nvec4 random2D( vec2 _v ) {\n  return fract( sin( texture2D( textureRandom, _v ) * 25711.34 ) * 175.23 );\n}\n\nvec4 random( float _v ) {\n  return random2D( _v * V.yy );\n}\n\n// ------\n\nmat4 lookAt( vec3 _pos, vec3 _tar, float _roll ) {\n  vec3 dir = normalize( _tar - _pos );\n  vec3 sid = normalize( cross( dir, V.xyx ) );\n  vec3 top = normalize( cross( sid, dir ) );\n\n  vec3 tempSid = sid;\n  sid = cos( _roll ) * tempSid - sin( _roll ) * top;\n  top = sin( _roll ) * tempSid + cos( _roll ) * top;\n\n  return mat4(\n    sid.x, top.x, dir.x, 0.0,\n    sid.y, top.y, dir.y, 0.0,\n    sid.z, top.z, dir.z, 0.0,\n    - sid.x * _pos.x - sid.y * _pos.y - sid.z * _pos.z,\n    - top.x * _pos.x - top.y * _pos.y - top.z * _pos.z,\n    - dir.x * _pos.x - dir.y * _pos.y - dir.z * _pos.z,\n    1.0\n  );\n}\n\nmat4 perspective( float _fov, float _aspect, float _near, float _far ) {\n  float p = 1.0 / tan( _fov * PI / 180.0 / 2.0 );\n  float d = _far / ( _far - _near );\n  return mat4(\n    p / _aspect, 0.0, 0.0, 0.0,\n    0.0, p, 0.0, 0.0,\n    0.0, 0.0, d, 1.0,\n    0.0, 0.0, -_near * d, 0.0\n  );\n}\n\n// ------\n\nstruct Camera {\n  vec3 pos;\n  vec3 dir;\n  vec3 sid;\n  vec3 top;\n};\n\nstruct Ray {\n  vec3 dir;\n  vec3 ori;\n  int mtl;\n};\n\nstruct Intersection {\n  Ray ray;\n  float len;\n  vec3 pos;\n  vec3 normal;\n  int mtl;\n  vec4 props;\n};\n\n// ------\n\nCamera camInit( in vec3 _pos, in vec3 _tar, in float _roll ) {\n  Camera cam;\n  cam.pos = _pos;\n  cam.dir = normalize( _tar - _pos );\n  cam.sid = normalize( cross( cam.dir, V.xyx ) );\n  cam.top = normalize( cross( cam.sid, cam.dir ) );\n  vec3 tempSid = cam.sid;\n  cam.sid = tempSid * cos( _roll ) - cam.top * sin( _roll );\n  cam.top = tempSid * sin( _roll ) + cam.top * cos( _roll );\n\n  return cam;\n}\n\nRay rayInit( in vec3 _ori, in vec3 _dir, in int _mtl ) {\n  Ray ray;\n  ray.dir = _dir;\n  ray.ori = _ori + _dir * INIT_LEN;\n  ray.mtl = _mtl;\n  return ray;\n}\n\nRay rayFromCam( in vec2 _p, in Camera _cam, in float _fov ) {\n  vec3 dir = normalize(\n    _p.x * _cam.sid\n    + _p.y * _cam.top\n    + _cam.dir / tan( _fov * PI / 360.0 )\n  );\n  return rayInit( _cam.pos, dir, MTL_AIR );\n}\n\nIntersection interInit( in Ray _ray, in float _len, in vec3 _nor ) {\n  Intersection inter;\n  inter.ray = _ray;\n  inter.len = _len;\n  inter.pos = _ray.ori + _ray.dir * inter.len;\n  inter.normal = _nor;\n  inter.mtl = MTL_AIR;\n  inter.props = V.xxxx;\n  return inter;\n}\n\nIntersection applyIntersection( in Intersection _old, in Intersection _new ) {\n  Intersection inter = _old;\n  inter.len = _new.len;\n  inter.pos = inter.ray.ori + inter.ray.dir * inter.len;\n  inter.normal = _new.normal;\n  inter.mtl = _new.mtl;\n  inter.props = _new.props;\n  return inter;\n}\n\n// ------\n\nIntersection model( in Ray _ray, in sampler2D _model, in vec2 _reso, in vec3 _lofi ) {\n  float minLen = HUGE;\n  vec3 minNor = V.xxy;\n  float edge = 1E9;\n\n  float pos = 0.0;\n\n  for ( int i = 0; i < 1000; i ++ ) {\n    vec2 coord = vec2( mod( pos, 256.0 ) * 3.0, floor( pos / 256.0 ) ) + vec2( 0.5 );\n    vec4 tex1 = texture2D( _model, ( V.yx * 0.0 + coord ) / _reso );\n    vec4 tex2 = texture2D( _model, ( V.yx * 1.0 + coord ) / _reso );\n    vec4 tex3 = texture2D( _model, ( V.yx * 2.0 + coord ) / _reso );\n    tex1.xyz = floor( tex1.xyz / _lofi + 0.5 ) * _lofi;\n    tex2.xyz = floor( tex2.xyz / _lofi + 0.5 ) * _lofi;\n    tex3.xyz = floor( tex3.xyz / _lofi + 0.5 ) * _lofi;\n\n    if ( tex1.w == 0.0 ) {\n      float len1 = ( _ray.ori.x - tex1.x ) / _ray.dir.x; \n      float len2 = ( _ray.ori.x - tex2.x ) / _ray.dir.x;\n      float lenMin = min( len1, len2 );\n      float lenMax = max( len1, len2 );\n\n      len1 = ( _ray.ori.y - tex1.y ) / _ray.dir.y; \n      len2 = ( _ray.ori.y - tex2.y ) / _ray.dir.y;\n      lenMin = max( lenMin, min( len1, len2 ) );\n      lenMax = min( lenMax, max( len1, len2 ) );\n\n      len1 = ( _ray.ori.z - tex1.z ) / _ray.dir.z; \n      len2 = ( _ray.ori.z - tex2.z ) / _ray.dir.z;\n      lenMin = max( lenMin, min( len1, len2 ) );\n      lenMax = min( lenMax, max( len1, len2 ) );\n\n      if ( lenMin <= lenMax ) {\n        pos += 1.0;\n      } else {\n        pos += tex2.w;\n      }\n    } else if ( tex1.w == 1.0 ) {\n      vec3 v1 = tex2.xyz - tex1.xyz;\n      vec3 v2 = tex3.xyz - tex1.xyz;\n      vec3 nor = normalize( cross( v1, v2 ) );\n      nor = ( 0.0 < dot( nor, _ray.dir ) ) ? -nor : nor;\n\n      float len = ( dot( nor, _ray.ori ) - dot( nor, tex1.xyz ) ) / dot( -nor, _ray.dir );\n      if ( 0.0 < len && len < minLen ) {\n        vec3 pos = _ray.ori + _ray.dir * len;\n        vec3 c1 = cross( pos - tex1.xyz, tex2.xyz - tex1.xyz );\n        vec3 c2 = cross( pos - tex2.xyz, tex3.xyz - tex2.xyz );\n        vec3 c3 = cross( pos - tex3.xyz, tex1.xyz - tex3.xyz );\n        float tedge = min(\n          min(\n            dot( normalize( cross( nor, tex2.xyz - tex1.xyz ) ), pos - tex1.xyz ),\n            dot( normalize( cross( nor, tex3.xyz - tex2.xyz ) ), pos - tex2.xyz )\n          ),\n          dot( normalize( cross( nor, tex1.xyz - tex3.xyz ) ), pos - tex3.xyz )\n        );\n        if ( 0.0 < dot( c1, c2 ) && 0.0 < dot( c2, c3 ) ) {\n          minLen = len;\n          minNor = nor;\n          edge = tedge;\n        }\n      }\n\n      pos += 1.0;\n    } else {\n      break;\n    }\n  }\n\n  Intersection inter = interInit( _ray, minLen, minNor );\n  inter.props.w = smoothstep( 0.01, 0.001, edge );\n  return inter;\n}\n\n// ------\n\nfloat distFuncSphere( vec3 _p, float _r ) {\n  return length( _p ) - _r;\n}\n\nfloat distFuncBox( vec3 _p, vec3 _s ) {\n  vec3 d = abs( _p ) - _s;\n  return min( max( d.x, max( d.y, d.z ) ), 0.0 ) + length( max( d, 0.0 ) );\n}\n\nfloat distFuncTorus( vec3 _p, vec2 _r ) {\n  vec2 q = vec2( length( _p.xz ) - _r.x, _p.y );\n  return length( q ) - _r.y;\n}\n\nfloat distFuncSlasher( vec3 _p, float _ratio ) {\n  float phase = ( _p.x + _p.y );\n  float slash = abs( 0.5 - ( phase - floor( phase ) ) ) * 2.0;\n  return ( slash - _ratio ) / sqrt( 2.0 );\n}\n\nvec3 distFuncMandelbulb( vec3 _p, float _power, int _iter ) {\n\tvec3 p = _p.xzy;\n\tvec3 z = p;\n\tfloat dr = 1.0;\n\tfloat r = 0.0;\n\tfloat power = _power;\n\tfloat bailout = 2.0;\n\n\tfloat t0 = 1.0;\n\n\tfor( int i = 0; i < 20; i ++ ) {\n\t    if ( _iter == i ) { break; }\n\t    \n\t\tr = length( z );\n\t\tif( bailout < r ) { break; }\n\t\t\n\t\tfloat theta = atan( z.y / z.x );\n\t\tfloat phi = asin( z.z / r );\n\t\tdr = pow( r, power - 1.0 ) * dr * power + 1.0;\n\n\t\tr = pow( r, power );\n\t\ttheta = theta * power;\n\t\tphi = phi * power;\n\n\t\tz = r * vec3(\n\t\t    cos( theta ) * cos( phi ),\n\t\t    sin( theta ) * cos( phi ),\n\t\t    sin( phi )\n\t\t) + p;\n\n\t\tt0 = min( t0, r );\n\t}\n\treturn vec3( 0.5 * log( r ) * r / dr, t0, 0.0 );\n}\n\nvec3 ifs( vec3 _p, vec3 _rot, vec3 _shift ) {\n  vec3 pos = _p;\n\n  vec3 shift = _shift;\n\n  for ( int i = 0; i < 5; i ++ ) {\n    float intensity = pow( 2.0, -float( i ) );\n\n    pos.y -= 0.0;\n\n    pos = abs( pos ) - shift * intensity;\n\n    shift.yz = rotate2D( _rot.x ) * shift.yz;\n    shift.zx = rotate2D( _rot.y ) * shift.zx;\n    shift.xy = rotate2D( _rot.z ) * shift.xy;\n\n    if ( pos.x < pos.y ) { pos.xy = pos.yx; }\n    if ( pos.x < pos.z ) { pos.xz = pos.zx; }\n    if ( pos.y < pos.z ) { pos.yz = pos.zy; }\n  }\n\n  return pos;\n}\n\nfloat distFunc( vec3 _p, float _time, out int mtl, out vec4 props ) {\n  float dist = HUGE;\n  mtl = MTL_AIR;\n  props = V.xxxx;\n\n  {\n    vec3 p = mod( _p - 10.0, 20.0 ) - 10.0;\n    p = ifs(\n      p,\n      shiftRot,\n      shiftPos\n    );\n    float cdist = distFuncBox( p, shiftSize );\n\n    if ( cdist < dist ) {\n      dist = cdist;\n      mtl = MTL_IFS;\n      props = V.xxxx;\n    }\n  }\n\n  {\n    vec3 p = _p;\n    p.yz = rotate2D( time * 2.3 ) * p.yz;\n    p.zx = rotate2D( time * 0.7 ) * p.zx;\n\n    float dist0 = distFuncSphere( p, 0.0 );\n    float dist1 = distFuncSphere( p, 0.0 );\n\n    if ( abs( distFuncMode - 1.0 ) < 1.0 ) {\n      dist1 = distFuncBox( p, V.yyy * 0.4 );\n    }\n\n    if ( abs( distFuncMode - 2.0 ) < 1.0 ) {\n      dist0 = distFuncTorus( p, vec2( 0.5, 0.2 ) );\n    }\n\n    if ( abs( distFuncMode - 3.0 ) < 1.0 ) {\n      for ( int i = 1; i < 6; i ++ ) {\n        dist1 = smin( dist1, distFuncSphere( p - vec3(\n          sin( random2D( V.yy * float( i ) * 0.128 + 0.34 ).xyz * _time * 4.0 + random2D( V.yy * ( float( i ) * 0.45 + 4.5 ) ).xyz )\n        ) * 0.4, 0.3 ), 0.2 );\n      }\n    }\n\n    if ( abs( distFuncMode - 4.0 ) < 1.0 ) {\n      dist0 = distFuncMandelbulb( p * 1.6, 8.0, 4 ).x / 1.6;\n    }\n\n    float cdist = mix( dist0, dist1, tri( distFuncMode ) );\n\n    if ( cdist < dist ) {\n      dist = cdist;\n      mtl = MTL_MIRROR;\n      props = V.xxxx;\n    }\n  }\n\n  return dist;\n}\n\nfloat distFunc( vec3 _p, float _time ) {\n  int mtl;\n  vec4 props;\n  return distFunc( _p, _time, mtl, props );\n}\n\nfloat distFunc( vec3 _p ) {\n  return distFunc( _p, time );\n}\n\nvec3 normalFunc( in vec3 _p, in float _d ) {\n  vec3 d = V * _d;\n  return normalize( vec3(\n    distFunc( _p + d.yxx ) - distFunc( _p - d.yxx ),\n    distFunc( _p + d.xyx ) - distFunc( _p - d.xyx ),\n    distFunc( _p + d.xxy ) - distFunc( _p - d.xxy )\n  ) );\n}\n\nIntersection march( Ray _ray ) {\n  float rayLen = INIT_LEN;\n  vec3 rayPos = _ray.ori + rayLen * _ray.dir;\n  float rayDist = 0.0;\n\n  int mtl;\n  vec4 props;\n\n  for ( int iMarch = 0; iMarch < MARCH_ITER; iMarch ++ ) {\n    rayDist = distFunc( rayPos, time, mtl, props );\n    rayLen += rayDist * 0.8;\n    rayPos = _ray.ori + rayLen * _ray.dir;\n  }\n\n  vec3 nor = normalFunc( rayPos, 1E-4 );\n  float edge = exp( -rayLen * 0.1 ) * smoothstep( 0.1, 0.4, length( nor - normalFunc( rayPos, 1E-2 ) ) );\n  Intersection inter = interInit( _ray, rayLen, nor );\n\n  if ( rayDist < 1E-2 ) {\n    inter.mtl = mtl;\n    inter.props = vec4( props.xyz, edge );\n  } else {\n    inter.mtl = MTL_AIR;\n  }\n\n  return inter;\n}\n\n// ------\n\nIntersection trace( Ray _ray ) {\n  Intersection inter = march( _ray );\n\n  iff ( 0.0 < sphereSize )\n    float beat = time * BPM / 60.0;\n    float kickTime = mod( beat, 4.0 ) < 2.5 ? b2t( mod( mod( beat, 4.0 ), 1.75 ) ) : b2t( mod( beat - 2.5, 4.0 ) );\n\n    float scale = sphereSize * ( 1.0 + sphereBeat * sin( exp( -kickTime * 8.0 ) * PI ) );\n    float rotX = time;\n    float rotY = time;\n\n    Ray ray = _ray;\n    ray.ori -= spherePos;\n    ray.ori /= scale;\n    ray.ori.yz = rotate2D( -rotX ) * ray.ori.yz;\n    ray.dir.yz = rotate2D( -rotX ) * ray.dir.yz;\n    ray.ori.zx = rotate2D( -rotY ) * ray.ori.zx;\n    ray.dir.zx = rotate2D( -rotY ) * ray.dir.zx;\n\n    Intersection interModel = model( ray, textureModel, textureModelReso, V.yyy * max( 1E-4, sphereLofi ) );\n    interModel.len *= interModel.len == HUGE ? 1.0 : scale;\n    \n    iff ( interModel.len < inter.len )\n      inter = applyIntersection( inter, interModel );\n      inter.normal.zx = rotate2D( rotY ) * inter.normal.zx;\n      inter.normal.yz = rotate2D( rotX ) * inter.normal.yz;\n      inter.mtl = MTL_IFS;\n      inter.props.x = 1.0;\n    endiff\n  endiff\n\n  return inter;\n}\n\nIntersection traceParticle( Ray _ray, vec2 _uv ) {\n  Intersection inter = interInit( _ray, HUGE, V.xxy );\n  \n  vec3 pPos = texture2D( textureParticlePos, _uv ).xyz;\n  vec3 pNor = texture2D( textureParticleNor, _uv ).xyz;\n  vec3 pParam = texture2D( textureParticleParam, _uv ).xyz;\n  float pSize = pParam.x;\n\n  float len = length( pPos - cameraPos );\n\n  iff ( pSize != 0.0 )\n    inter = interInit( _ray, len, pNor );\n    inter.mtl = MTL_PARTICLE;\n    inter.props = vec4( pSize, V.xx, 1.0 );\n  endiff\n\n  return inter;\n}\n\nIntersection traceParticleSS( Ray _ray ) {\n  mat4 matP = perspective( FOV, resolution.x / resolution.y, 0.01, 100.0 );\n  mat4 matV = lookAt( cameraPos, cameraTar, cameraRoll );\n\n  Intersection inter = interInit( _ray, HUGE, V.xxy );\n\n  for ( int i = 0; i < 40; i ++ ) {\n    float len = float( i ) * 0.01;\n    vec3 pos = _ray.ori + len * _ray.dir;\n\n    vec4 p = matP * matV * vec4( pos, 1.0 );\n    vec2 uv = ( floor( ( p.xy / p.w * 0.5 + 0.5 ) * resolution ) + 0.5 ) / resolution;\n\n    if ( 0.5 < abs( uv.x - 0.5 ) || 0.5 < abs( uv.y - 0.5 ) ) { break; }\n\n    vec3 pPos = texture2D( textureParticlePos, uv ).xyz;\n    vec3 pNor = texture2D( textureParticleNor, uv ).xyz;\n    vec3 pParam = texture2D( textureParticleParam, uv ).xyz;\n    float pSize = pParam.x;\n\n    float lenDep = length( pPos - cameraPos );\n    float lenRay = length( pos - cameraPos );\n    iff ( pSize != 0.0 && lenDep < lenRay && ( lenRay - lenDep ) < pSize )\n      inter = interInit( _ray, len, pNor );\n      inter.mtl = MTL_PARTICLE;\n      inter.props = vec4( pSize, V.xxx );\n      break;\n    endiff\n  }\n\n  return inter;\n}\n\n// ------\n\n#ifdef _VQUAD\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _RETURN\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  gl_FragColor = texture2D( texture, uv );\n}\n#endif\n\n// ------\n\n#ifdef _PARTICLECOMPUTE\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / particleCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n\n  iff ( init || oth.x <= 0.0 )\n    vec2 ruv = uv + pos.xy;\n\n    pos = vec4( ( random2D( ruv ) * 2.0 - 1.0 ).xyz * particleGenSize, 1.0 );\n    pos.xyz += particlePos;\n\n    vel = ( random2D( ruv / 4.76 + 0.45 ) * 2.0 - 1.0 ) * 0.3;\n    rot = random2D( ruv / 2.77 + 0.19 ) * 2.0 - 1.0;\n    oth = init ? (\n      random2D( ruv / 1.82 + 0.77 )\n    ) : ( vec4(\n      1.0,\n      random2D( ruv / 1.82 + 0.77 ).yzw\n    ) );\n  endiff\n\n  float size = sin( oth.x * PI ) * 0.02 * particleSize;\n  float dist = distFunc( pos.xyz );\n  vec3 nor = normalFunc( pos.xyz, 1E-3 );\n\n  vel.xyz += (\n    2.0 * ( texture2D( textureRandom, pos.xy * 0.01 ).xyz * 2.0 - 1.0 ) +\n    0.5 * nor / max( 0.1, dist ) +\n    ( sphereSize == 0.0 ? V.xxx : normalize( pos.xyz - spherePos ) / max( 0.1, length( pos.xyz - spherePos ) - sphereSize ) )\n  ) * particleField * deltaTime;\n  vel.y -= particleGravity * deltaTime;\n  vel.xyz *= exp( -deltaTime );\n\n  pos += vel * deltaTime;\n\n  dist = distFunc( pos.xyz );\n  nor = normalFunc( pos.xyz, 1E-3 );\n  \n  iff ( dist < size )\n    float distP = distFunc( pos.xyz, time - 1E-3 );\n    float distVel = ( dist - distP ) * 1E3;\n\n    pos.xyz += nor * ( size - dist ) * 2.0;\n    vel.xyz += nor * distVel;\n    vel.xyz -= 1.4 * dot( vel.xyz, nor ) * nor;\n  endiff\n\n  rot.xy += rot.zw * 7.0 * deltaTime;\n\n  oth.x -= 0.4 * deltaTime;\n  oth.y = size;\n\n  gl_FragData[ 0 ] = pos;\n  gl_FragData[ 1 ] = vel;\n  gl_FragData[ 2 ] = rot;\n  gl_FragData[ 3 ] = oth;\n}\n#endif\n\n// ------\n\n#ifdef _VPARTICLERENDER\nattribute vec3 attPos;\nattribute vec3 attNor;\nattribute float particleId;\n\nvarying vec3 vNor;\nvarying vec3 vPos;\nvarying vec3 vaPos;\nvarying float vSize;\n\nvoid main() {\n  vec2 uv = ( vec2(\n    mod( particleId, particleCountSqrt ),\n    floor( particleId / particleCountSqrt )\n  ) + 0.5 ) / particleCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n\n  mat4 matP = perspective( FOV, resolution.x / resolution.y, 0.01, 100.0 );\n  mat4 matV = lookAt( cameraPos, cameraTar, cameraRoll );\n\n  float size = oth.y;\n  vSize = size;\n\n  vec3 cp = size * attPos;\n  cp.yz = rotate2D( rot.x ) * cp.yz;\n  cp.zx = rotate2D( rot.y ) * cp.zx;\n  pos.xyz += cp;\n\n  vPos = pos.xyz;\n  vaPos = attPos;\n  vec4 outPos = matP * matV * vec4( pos.xyz, 1.0 );\n  gl_Position = outPos;\n\n  vNor = attNor;\n  vNor.yz = rotate2D( rot.x ) * vNor.yz;\n  vNor.zx = rotate2D( rot.y ) * vNor.zx;\n}\n#endif\n\n// ------\n\n#ifdef _PARTICLERENDER\nvarying vec3 vNor;\nvarying vec3 vPos;\nvarying vec3 vaPos;\nvarying float vSize;\n\nuniform float particleKind;\n\nvoid main() {\n  gl_FragData[ 0 ] = vec4( vPos, 1.0 );\n  gl_FragData[ 1 ] = vec4( vNor, 1.0 );\n  gl_FragData[ 2 ] = vec4( vSize, 0.0, particleKind, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _CHARCUBECOMPUTE\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / charCubeCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n  vec4 gen = texture2D( textureCharCube, uv );\n\n  iff ( gen.w != 0.0 )\n    pos = vec4( gen.xyz * 0.1, 1.0 );\n    pos.xyz += particlePos;\n    vec4 rnd = random2D( pos.xy / 2.44 );\n    vel = vec4( rnd.xyz - 0.5, 1.0 );\n    pos.xyz -= vel.xyz;\n    rot = V.xxxy;\n    oth = vec4( rnd.w * 0.2 + ( time * BPM / 60.0 < 64.0 ? 5.0 : 1.1 ), 0.0, 1.0, 1.0 );\n  endiff\n\n  float size = oth.x == 0.0 ? 0.0 : 0.04 * ( 1.0 - oth.z );\n\n  vec3 d = vel.xyz * ( 1.0 - exp( -deltaTime * 6.0 ) );\n  vel.xyz -= d;\n  pos.xyz += d;\n\n  oth.x = max( 0.0, oth.x - 1.0 * deltaTime );\n  oth.y = size;\n  oth.z *= exp( -deltaTime * 5.0 );\n\n  gl_FragData[ 0 ] = pos;\n  gl_FragData[ 1 ] = vel;\n  gl_FragData[ 2 ] = rot;\n  gl_FragData[ 3 ] = oth;\n}\n#endif\n\n// ------\n\n#ifdef _RENDER\nvec3 colorAdd;\nvec3 colorMul;\nvec3 tempIll;\n\nvec3 illInt( in Intersection inter ) {\n  vec3 colDif = vec3( 0.0 );\n  float reflective = 0.0;\n  float illInt = 1.0;\n\n  if ( inter.mtl == MTL_IFS ) {\n    colDif = vec3( 0.2 );\n    reflective = 0.5;\n\n  } else if ( inter.mtl == MTL_MIRROR ) {\n    colDif = vec3( 0.9 );\n    reflective = 1.0;\n\n  }\n\n  colDif = mix( colDif, vec3( anotherShaderDif ), anotherShader );\n  reflective = mix( reflective, 0.0, anotherShader );\n  illInt = mix( illInt, 0.0, anotherShader );\n\n  return illInt * ( 1.0 - reflective ) * colDif;\n}\n\nvoid shade( in vec2 uv, in Camera cam, in Intersection inter ) {\n  if ( 0.5 < randomyGlitch ) {\n    colorAdd = random( floor( inter.pos.y / 0.01 ) / 7.53 + time ).xyz * 0.7;\n    colorMul *= 0.0;\n    return;\n  }\n\n  vec3 camDir = normalize( inter.pos - cam.pos );\n  vec3 ligPos = cam.pos;\n  vec3 ligDir = normalize( inter.pos - ligPos );\n\n  vec3 colDif = V.xxx;\n  vec3 colEmi = V.xxx;\n  vec3 colEdge = V.xxx;\n  float reflective = 0.0;\n\n  if ( inter.mtl == MTL_IFS ) {\n    colDif = vec3( 0.2 );\n    colEdge = vec3( 1.6, 0.1, 0.5 );\n    colEdge *= inter.props.x == 1.0 ? 1.0 : 0.2 + 1.8 * exp( -mod( -length( inter.pos ) * 0.4 + time * 0.4, 1.0 ) * 5.0 );\n    reflective = 0.5;\n\n  } else if ( inter.mtl == MTL_MIRROR ) {\n    colDif = vec3( 0.9 );\n    reflective = 1.0;\n\n  } else if ( inter.mtl == MTL_PARTICLE ) {\n    colEmi = vec3( 0.6, 1.0, 1.5 );\n    \n  }\n\n  colDif = mix( colDif, vec3( anotherShaderDif ), anotherShader );\n  colEmi = mix( colEmi, vec3( 0.0 ), anotherShader );\n  colEdge = mix( colEdge, vec3( inter.mtl == MTL_MIRROR ? 0.0 : anotherShaderEdge ), anotherShader );\n  reflective = mix( reflective, 0.0, anotherShader );\n\n  vec3 dif = V.yyy * ( 0.5 + 0.5 * dot( -inter.normal, ligDir ) );\n  float spe = pow( max( 0.0, dot( normalize( camDir - inter.normal ), ligDir ) ), 40.0 );\n\n  colorAdd += (\n    dif * colDif * ( 1.0 - reflective ) +\n    spe * 0.2 * reflective +\n    inter.props.w * colEdge +\n    colEmi\n  ) * colorMul;\n  colorMul *= dif * colDif * reflective;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 p = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;\n\n  Camera cam = camInit( cameraPos, cameraTar, cameraRoll );\n  Ray ray = rayFromCam( p, cam, FOV );\n\n  colorAdd = V.xxx;\n  colorMul = V.yyy;\n\n  for ( int iRef = 0; iRef < REFLECT_ITER; iRef ++ ) {\n    Intersection inter = trace( ray );\n    iff ( iRef == 0 )\n      gl_FragData[ 1 ] = vec4( inter.pos, 1.0 );\n      gl_FragData[ 2 ] = vec4( illInt( inter ), 1.0 );\n\n      Intersection interp = traceParticle( ray, uv );\n      if ( interp.len < inter.len ) { inter = interp; }\n    endiff\n\n    iff ( iRef != 0 )\n      Intersection interp = traceParticleSS( ray );\n      if ( interp.len < inter.len ) { inter = interp; }\n    endiff\n\n    float fog = 1.0 - exp( -inter.len * 0.01 );\n    colorAdd += fog * colorMul * vec3( 1.0, 2.0, 4.0 ) * ( 1.0 - anotherShader );\n    colorMul *= ( 1.0 - fog );\n\n    iff ( inter.mtl != MTL_AIR )\n      shade( uv, cam, inter );\n      ray = rayInit( inter.pos, reflect( ray.dir, inter.normal ), MTL_AIR );\n    endiff\n\n    iff ( inter.mtl == MTL_AIR )\n      colorMul *= 0.0;\n    endiff\n\n    if ( length( colorMul ) < 0.01 ) { break; }\n  }\n\n  gl_FragData[ 0 ] = vec4( max( V.xxx, colorAdd ), 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _DOWNSCALE\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  vec4 sum = V.xxxx;\n  float len = 1E9;\n  for ( int iy = 0; iy < 4; iy ++ ) {\n    for ( int ix = 0; ix < 4; ix ++ ) {\n      vec2 p = uv + vec2( -1.5 + float( ix ), -1.5 + float( iy ) ) / resolution / 4.0;\n      vec4 tex = texture2D( texture, p );\n\n      sum += tex / 16.0;\n    }\n  }\n\n  gl_FragColor = sum;\n}\n#endif\n\n// ------\n\n#ifdef _VPARTICLEILLUMINATION\nattribute float particleId;\n\nvarying vec3 vPos;\nvarying float vSize;\n\nvoid main() {\n  vec2 uv = ( vec2(\n    mod( particleId, particleCountSqrt ),\n    floor( particleId / particleCountSqrt )\n  ) + 0.5 ) / particleCountSqrt;\n  vec4 pos = texture2D( textureP0, uv );\n  vec4 vel = texture2D( textureP1, uv );\n  vec4 rot = texture2D( textureP2, uv );\n  vec4 oth = texture2D( textureP3, uv );\n\n  float size = oth.y;\n  vSize = size;\n\n  mat4 matP = perspective( FOV, resolution.x / resolution.y, 0.01, 100.0 );\n  mat4 matV = lookAt( cameraPos, cameraTar, cameraRoll );\n\n  vPos = pos.xyz;\n  vec4 outPos = matP * matV * vec4( pos.xyz, 1.0 );\n  gl_Position = outPos;\n  gl_PointSize = 128.0 / outPos.z;\n}\n#endif\n\n// ------\n\n#ifdef _PARTICLEILLUMINATION\nvarying vec3 vPos;\nvarying float vSize;\n\nvoid main() {\n  vec2 uv = ( floor( gl_FragCoord.xy / 0.25 ) + vec2( 0.5 ) ) / ( resolution / 0.25 );\n  vec3 pos = texture2D( textureRenderPos, uv ).xyz;\n  vec3 ill = texture2D( textureRenderIll, uv ).xyz;\n  float len = length( pos - vPos );\n  gl_FragColor = vec4( 0.3 * max( V.xxx, 10.0 / len / len * vSize * ill - 0.2 ) * vec3( 0.3, 0.6, 1.0 ), 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _BLOOM\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 bv = ( isVert ? vec2( 0.0, 1.0 ) : vec2( 1.0, 0.0 ) ) / resolution;\n\n  vec3 sum = V.xxx;\n  for ( int i = -BLOOM_SAMPLES; i <= BLOOM_SAMPLES; i ++ ) {\n    vec2 v = saturate( uv + bv * float( i ) );\n    vec3 tex = texture2D( texture, v ).xyz;\n    float mul = gaussian( abs( float( i ) ), gaussVar );\n    sum += tex * mul;\n  }\n\n  gl_FragColor = vec4( sum, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _POST\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  float beat = time * BPM / 60.0 - 8.0;\n\n  iff ( beat < 0.0 )\n    vec2 p = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;\n    gl_FragColor = vec4( V.yyy * smoothstep( 0.0, 0.01, 0.3 * exp( -fract( beat ) ) - length( p ) ), 1.0 );\n  endiff\n\n  iff ( 0.0 <= beat )\n    vec3 tex = texture2D( textureRender, uv ).xyz;\n    tex += texture2D( textureParticleIllumination, uv ).xyz * 0.2;\n    tex += max( V.xxx, texture2D( textureBloom, uv ).xyz - 0.7 ) * 0.4;\n    tex = mix(\n      vec3( 0.0 ),\n      tex,\n      1.14 - length( uv - 0.5 ) * 0.4 // vig\n    );\n\n    vec3 col = tex.xyz;\n    col = vec3(\n      smoothstep( 0.0, 1.0, col.x ),\n      smoothstep( 0.0, 1.0, col.y ),\n      smoothstep( -0.2, 1.2, col.z )\n    );\n    gl_FragColor = vec4( col, 1.0 );\n  endiff\n}\n#endif\n\n// ------\n\n#ifdef _GLITCH\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec3 uvx = mod( uv.x + sin( TAU * random( floor( uv.y * 128.0 ) * 19.29 + time ).xyz ) * finalGlitch, V.yyy );\n  float texInt = sin( time ) * 0.5 + 0.5;\n  vec3 col = vec3(\n    texture2D( texture, vec2( uvx.x, uv.y ) ).x,\n    texture2D( texture, vec2( uvx.y, uv.y ) ).y,\n    texture2D( texture, vec2( uvx.z, uv.y ) ).z\n  );\n  col *= 1.0 + finalGlitch * 10.0;\n  gl_FragColor = vec4( col, 1.0 );\n}\n#endif\n\n// ------\n\n#ifdef _MUSIC\nvec2 kick( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return V.yy * sin( _phase * 300.0 - exp( -_phase * 70.0 ) * 80.0 ) * exp( -_phase * 4.0 );\n}\n\nvec2 kick2( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return V.yy * sin( _phase * 300.0 - exp( -_phase * 100.0 ) * 30.0 ) * exp( -_phase * 5.0 );\n}\n\nvec2 snare( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return saturateA( (\n    random( _phase / 0.034 ).xy +\n    sin( _phase * 2500.0 * vec2( 1.005, 0.995 ) - exp( -_phase * 400.0 ) * 30.0 )\n  ) * 2.0 * exp( -_phase * 23.0 ) );\n}\n\nvec2 snare2( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  return (\n    random( lofi( _phase, 6E-5 ) / 2.06 ).xy * 0.5 +\n    sin( _phase * 2000.0 * vec2( 1.005, 0.995 ) - exp( -_phase * 800.0 ) * 20.0 )\n  ) * exp( -_phase * 31.0 );\n}\n\nvec2 cowbell( float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 cow = (\n    sin( _phase * 800.0 * TAU * vec2( 1.005, 0.995 ) - exp( -_phase * 800.0 ) * 20.0 ) +\n    sin( _phase * 540.0 * TAU * vec2( 0.995, 1.005 ) - exp( -_phase * 800.0 ) * 20.0 )\n  );\n  return sign( cow ) * pow( abs( cow ) * exp( -_phase * 20.0 ), 0.8 * V.yy );\n}\n\nvec2 tam( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 s = V.yy * 2.0 * sin( _phase * _freq * TAU + random( _phase * 1.45 ).xy * 0.1 - exp( -_phase * 1000.0 ) * 9.0 );\n  float a = exp( -_phase * 20.0 ) / 2.5;\n  return s * a;\n}\n\nvec2 hihat( float _seed, float _dec ) {\n  return random( _seed ).xy * exp( -_dec );\n}\n\nfloat powNoise( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return 0.0; }\n  float p = mod( _phase * _freq, 1.0 ) + random( _phase * 1.45 ).x * 0.01;\n  return ( ( p < 0.4 ? -0.1 : 0.1 ) + sin( p * TAU ) * 0.7 );\n}\n\nfloat sharpSaw( float _phase ) {\n  return mod( _phase, 1.0 ) * 2.0 - 1.0;\n}\n\nfloat pwm( float _phase, float _pulse ) {\n  return fract( _phase ) < _pulse ? -1.0 : 1.0;\n}\n\nfloat saw( float _freq, float _phase, float _filt, float _q ) {\n  if ( _phase < 0.0 ) { return 0.0; }\n  float sum = 0.0;\n  for ( int i = 1; i <= 32; i ++ ) {\n    float cut = smoothstep( _filt * 1.2, _filt * 0.8, float( i ) * _freq );\n    cut += smoothstep( _filt * 0.3, 0.0, abs( _filt - float( i ) * _freq ) ) * _q;\n    sum += sin( float( i ) * _freq * _phase * TAU ) / float( i ) * cut;\n  }\n  return sum;\n}\n\nvec2 fms( float _freq, float _phase, float _mod ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  float p = _phase * _freq * TAU;\n  return vec2(\n    sin( p * 0.999 + sin( p * _mod * 1.002 ) * exp( -_phase * 7.0 ) ),\n    sin( p * 1.001 + sin( p * _mod * 0.998 ) * exp( -_phase * 7.0 ) )\n  ) * exp( -_phase * 7.0 );\n}\n\nvec2 bell( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 p = _freq * vec2( 1.001, 0.999 ) * _phase * TAU;\n  float d = exp( -_phase * 1.0 );\n  float d2 = exp( -_phase * 20.0 );\n  return (\n    sin( p * 1.0001 + sin( p * 3.5004 ) * d ) +\n    sin( p * 0.9998 + sin( p * 3.4997 ) * d ) +\n    sin( _phase * 2033.2 + sin( p * 1.9994 ) * exp( -_phase * 10.0 ) ) * exp( -_phase * 10.0 )\n  ) * 0.3 * d;\n}\n\nvec2 choir( float _freq, float _phase, float _time ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 sum = V.xx;\n  for ( int i = 0; i < 6; i ++ ) {\n    vec4 rand = random( float( i ) / 0.3 );\n    vec2 p = ( _time - _phase ) + _phase * _freq * PI * ( 0.98 + 0.04 * rand.xy ) + float( i );\n    p += sin( p / _freq * 3.0 + rand.zw );\n    sum += sin( 2.0 * p + sin( p ) * 1.0 + sin( 7.0 * p ) * 0.02 );\n  }\n  return sum / 8.0;\n}\n\nvec2 cccp( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 p = _freq * vec2( 0.999, 1.001 ) * _phase * TAU;\n  float dl = exp( -_phase * 1.0 );\n  float ds = exp( -_phase * 10.0 );\n  return (\n    sin( p * 1.0003 + sin( p * 11.0035 ) * 1.5 * ds + sin( p * 1.0003 ) * 1.0 * dl ) +\n    sin( p * 0.9997 + sin( p * 0.9997 + sin( p * 4.9984 ) * 2.0 * dl ) * 0.5 * ds )\n  ) * 0.5 * ds;\n}\n\nvec2 bass( float _freq, float _phase ) {\n  if ( _phase < 0.0 ) { return V.xx; }\n  vec2 p = _freq * vec2( 0.999, 1.001 ) * _phase * TAU;\n  float dl = exp( -_phase * 1.0 );\n  float ds = exp( -_phase * 14.0 );\n  return sin(\n    p +\n    sin( p ) * 1.5 * dl +\n    sin( p + sin( p * 10.0 ) * 2.5 * ds ) * 3.0 * ds +\n    sin( p + sin( p * 18.0 ) * 1.5 * ds ) * 0.5 * dl\n  ) * 0.5 * dl;\n}\n\nvoid main() {\n  float t = ( gl_FragCoord.x - 0.5 + resolution.x * ( gl_FragCoord.y - 0.5 ) ) / sampleRate;\n  float beat = t * BPM / 60.0 - 8.0;\n  vec2 ret = V.xx;\n  float tenkai = floor( beat / 4.0 );\n  float sidechain = 0.0;\n\n  float trans = 3.0;\n\n  float beati = floor( beat );\n  float beatf = fract( beat );\n  float beat32 = mod( beat, 32.0 );\n\n  float kickTime;\n  float snareTime;\n  \n  // ------\n\n  iff ( beat < 0.0 )\n    ret += 0.5 * sin( TAU * t * ( mod( beat, 4.0 ) < 1.0 ? 2000.0 : 1000.0 ) ) * ( beatf < 0.1 ? 1.0 : 0.0 );\n  endiff\n\n  // ------\n\n  iff ( ( 0.0 < beat && beat < 64.0 ) || ( 192.0 < beat && beat < 256.0 ) )\n    kickTime = b2t( mod( mod( beat, 4.0 ), 2.5 ) );\n    snareTime = b2t( mod( beat - 1.0, 2.0 ) );\n    float beat64 = mod( beat, 64.0 );\n\n    ret += 0.7 * kick2( kickTime );\n    ret += 0.5 * snare2( snareTime );\n    sidechain = smoothstep( 0.0, 0.2, min( kickTime, snareTime ) );\n\n    ret += 0.2 * sidechain * hihat( t, b2t( mod( beat, 0.5 ) ) * 100.0 );\n    if ( 32.0 < beat ) {\n      ret += 0.2 * hihat( t * 0.1, b2t( mod( beat, 0.25 ) ) * 1000.0 );\n    }\n\n    float build = max( 0.0, beat64 - 48.0 );\n    float ksk = pow( build * 0.3, 2.0 );\n    float vib = sin( t * ( 20.0 + ksk ) ) * ( 0.1 + ksk * 0.1 );\n    ret += sidechain * sharpSaw( noten( -24 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( -17 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( -14 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( -7 ) * t + vib ) * 0.04;\n    ret += sidechain * sharpSaw( noten( 2 ) * t + vib ) * 0.04;\n\n    ret += sidechain * 0.2 * build / 16.0 * random( lofi( t * 6.24, 0.0008 * lofi( build / 16.0, 0.02 ) ) ).xy;\n\n    iff ( 62.5 < beat64 )\n      ret = 0.7 * kick( b2t( beat64 - 62.5 ) );\n      ret += 0.5 * snare( b2t( beat64 - 63.0 ) );\n      if ( 255.0 < beat ) {\n        ret = 0.5 * snare( b2t( beat - 255.0 - lofi( beat - 255.0, 0.08 ) * 0.8 ) );\n      }\n    endiff\n  endiff\n\n  // ------\n\n  iff ( 64.0 < beat && beat < 192.0 )\n    if ( 124.5 < beat && beat < 128.0 ) {\n      ret += 0.7 * kick2( b2t(\n        mod( mod( beatf - 0.75, 1.0 ), 0.75 )\n      ) );\n      ret += 0.5 * snare2( b2t(\n        mod( mod( beatf - 0.25, 1.0 ), 0.75 )\n      ) );\n      if ( 127.0 < beat ) {\n        ret = 0.5 * snare( b2t( beat - 127.0 - lofi( beat - 127.0, 0.12 ) * 0.6 ) );\n      }\n      sidechain = 0.0;\n    } else {\n      kickTime = mod( beat, 4.0 ) < 2.5 ? b2t( mod( mod( beat, 4.0 ), 1.75 ) ) : b2t( mod( beat - 2.5, 4.0 ) );\n      snareTime = b2t( mod( beat - 1.0, 2.0 ) );\n\n      ret += 0.7 * kick( kickTime );\n      ret += 0.5 * snare( snareTime );\n      sidechain = smoothstep( 0.0, 0.2, min( kickTime, snareTime ) );\n    }\n\n    ret += 0.4 * tam( 300.0, b2t( mod( beat - 0.75, 2.0 ) ) );\n\n    if ( 96.0 < beat ) {\n      ret += 0.3 * sidechain * hihat( t, b2t( mod( beat, 0.25 ) ) * 100.0 );\n    }\n\n    iff ( mod( beat, 2.0 ) < 1.0 )\n      ret += sidechain * powNoise( noten( 0 ) / 8.0, t ) * 1.0;\n    endiff\n  endiff\n\n  iff ( 256.0 < beat && beat < 448.0 )\n    trans = beat < 320.0 ? 2.0 : beat < 384.0 ? 0.0 : -3.0;\n    kickTime = mod( beat, 4.0 ) < 2.5 ? b2t( mod( mod( beat, 4.0 ), 1.75 ) ) : b2t( mod( beat - 2.5, 4.0 ) );\n    snareTime = b2t( mod( beat - 1.0, 2.0 ) );\n\n    if ( ( 316.0 < beat && beat < 320.0 ) || 444.0 < beat ) {\n      sidechain = smoothstep( 0.0, 0.2, b2t( beatf ) );\n    } else {\n      ret += 0.7 * kick( kickTime );\n      ret += 0.5 * snare( snareTime );\n      sidechain = smoothstep( 0.0, 0.2, min( kickTime, snareTime ) );\n\n      iff ( beat < 384.0 )\n        ret += 0.4 * tam( 300.0, b2t( mod( beat - 0.75, 2.0 ) ) );\n        ret += 0.3 * sidechain * hihat( t, b2t( mod( beat, 0.25 ) ) * 100.0 );\n      endiff\n\n      float vib = sin( t * 20.0 ) * 0.1;\n      ret += sidechain * sharpSaw( noten( -24 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( -17 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( -14 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( -7 ) * t + vib ) * 0.04;\n      ret += sidechain * sharpSaw( noten( 2 ) * t + vib ) * 0.04;\n    }\n\n    iff ( mod( beat, 2.0 ) < 1.0 )\n      ret += sidechain * powNoise( noten( 0 ) / 8.0, t ) * 1.0;\n    endiff\n  endiff\n\n  // ------\n\n  iff ( ( 256.0 < beat && beat < 448.0 ) )\n    iff ( 1.25 < beat32 && beat32 < 2.0 )\n      ret += saturateA( saw(\n        noten( beatf < 0.5 ? 10 : beatf < 0.75 ? 12 : 0 ) / 4.0,\n        b2t( mod( beat, 0.25 ) ),\n        300.0 + 1200.0 * exp( -b2t( mod( beat, 0.25 ) ) * 20.0 ),\n        7.0\n      ) * 1.0 ) * 0.15;\n    endiff\n\n    iff ( 3.0 < beat32 && beat32 < 4.0 )    \n      ret += bell( noten( -2 ), b2t( beatf - 0.75 ) ) * 0.2;\n    endiff\n\n    iff ( 5.0 < beat32 && beat32 < 6.0 )    \n      ret += sidechain * sharpSaw( noten( 0 ) / 4.0 * t ) * 0.2;\n    endiff\n\n    iff ( 7.0 < beat32 && beat32 < 8.0 )\n      ret += sidechain * sharpSaw( noten( 0 ) * t + sin( t * 50.0 ) * 0.4 ) * 0.15;\n    endiff\n\n    iff ( 9.0 < beat32 && beat32 < 10.0 )\n      ret += 0.5 * tam( 200.0, b2t( beatf - 0.5 ) );\n    endiff\n\n    iff ( 11.0 < beat32 && beat32 < 12.0 )\n      if ( 0.5 < beatf ) {\n        ret += saw(\n          noten( beatf < 0.75 ? 10 : 0 ) / 4.0,\n          b2t( mod( beatf, 0.25 ) ),\n          300.0 + 4500.0 * exp( -b2t( mod( beatf, 0.25 ) ) * 20.0 ),\n          3.0\n        ) * 0.08;\n      }\n    endiff\n\n    iff ( 13.25 < beat32 && beat32 < 13.75 )\n      float p = mod( noten( beatf < 0.5 ? -2 : 0 ) / 8.0 * b2t( beatf ), 1.0 );\n      ret += 0.4 * exp( -1.0 * b2t( mod( beat, 0.25 ) ) ) * lofi( p < 0.5 ? p * 4.0 - 1.0 : 3.0 - p * 4.0, 0.1 );\n    endiff\n    \n    iff ( 15.0 < beat32 && beat32 < 16.0 )\n      ret += fms( noten( 0 ) / 2.0, b2t( beatf - 0.5 ), 2.0 ) * 0.1;\n      ret += fms( noten( 5 ) / 2.0, b2t( beatf - 0.5 ), 7.0 ) * 0.1;\n      ret += fms( noten( 7 ) / 2.0, b2t( beatf - 0.5 ), 1.0 ) * 0.1;\n      ret += fms( noten( 10 ) / 2.0, b2t( beatf - 0.5 ), 12.0 ) * 0.1;\n    endiff\n\n    iff ( 17.0 < beat32 && beat32 < 18.0 )\n      ret += 0.1 * sidechain * saw(\n        noten( 0 ) / 8.0,\n        lofi( b2t( beatf ), 2E-4 ),\n        300.0 + 3500.0 * exp( -b2t( beatf ) * 10.0 ),\n        7.0\n      );\n    endiff\n\n    iff ( 19.0 < beat32 && beat32 < 20.0 )\n      ret += 0.2 * sidechain * pwm( t * noten( -38 ), 0.5 );\n    endiff\n\n    iff ( 21.0 < beat32 && beat32 < 22.0 )\n      ret += cccp( noten( 2 ), b2t( beatf - 0.25 ) ) * 0.1;\n      ret += cccp( noten( 3 ), b2t( beatf - 0.5 ) ) * 0.1;\n      ret += cccp( noten( 10 ), b2t( beatf - 0.75 ) ) * 0.1;\n    endiff\n\n    iff ( 23.0 < beat32 && beat32 < 24.0 )\n      ret += cowbell( b2t( beatf - 0.5 ) ) * 0.2;\n    endiff\n\n    iff ( 25.25 < beat32 && beat32 < 25.75 )\n      ret += 0.15 * bass( noten( beatf < 0.5 ? -26 : -24 ), b2t( mod( beatf, 0.25 ) ) );\n    endiff\n\n    iff ( 27.00 < beat32 && beat32 < 28.00 )\n      ret += 0.15 * bass( noten( -26 ), b2t( lofi( beatf, 0.001 ) - 0.5 ) * 0.5 );\n    endiff\n\n    iff ( 29.0 < beat32 && beat32 < 30.0 )\n      ret += 0.1 * sidechain * pwm( t * noten( -7 ), beatf * 0.5 );\n    endiff\n\n    iff ( 31.0 < beat32 && beat32 < 32.0 )\n      int n = int( mod( floor( beatf * 12.0 ), 6.0 ) );\n      ret += 0.1 * sidechain * pwm( t * noten( n == 0 ? 0 : n == 1 ? 5 : n == 2 ? 7 : n == 3 ? 12 : n == 4 ? 17 : 19 ), 0.25 );\n    endiff\n  endiff\n\n  // ------\n\n  iff ( 128.0 < beat && beat < 254.5 )\n    for ( int i = 0; i < 3; i ++ ) {\n      float dice = random( floor( ( beat - float( i ) * 0.75 ) / 0.25 ) / 4.72 ).x;\n      int dicen = int( dice * 5.0 );\n      float note = dicen == 0 ? 0.0 : dicen == 1 ? 7.0 : dicen == 2 ? 10.0 : dicen == 3 ? 17.0 : 26.0;\n      float diceo = mod( floor( dice * 15.0 ), 3.0 );\n      note += diceo * 12.0;\n      ret += 0.07 / float( i * 4 + 1 ) * cccp( noten( note ) / 2.0, b2t( mod( beatf, 0.25 ) ) );\n    }\n  endiff\n\n  iff ( 320.0 < beat && beat < 444.0 )\n    for ( int i = 0; i < 3; i ++ ) {\n      float dice = random( floor( ( beat - float( i ) ) / 0.25 ) / 4.72 ).x;\n      int dicen = int( dice * 5.0 );\n      float note = dicen == 0 ? 0.0 : dicen == 1 ? 7.0 : dicen == 2 ? 10.0 : dicen == 3 ? 17.0 : 26.0;\n      float diceo = mod( floor( dice * 15.0 ), 3.0 );\n      note += diceo * 12.0;\n      float ph = b2t( mod( beatf, 0.25 ) );\n      ret += 0.03 * saw( noten( note ) / 2.0, ph, 200.0 + 6500.0 * exp( -ph * 20.0 ) / float( i * 5 + 1 ), 0.0 );\n    }\n  endiff\n\n  // ------\n\n  gl_FragColor = vec4( ret, 0.0, 1.0 );\n}\n#endif"]);
  var programMusic = glCat.createProgram("#define _VERT\n#define _VQUAD" + shader, "#define _FRAG\n#define _MUSIC" + shader);

  var framebufferMusic = glCat.createFloatFramebuffer(renderWidth, renderHeight);

  var textureRandom = props.textureRandom;

  // ------

  gl.viewport(0, 0, renderWidth, renderHeight);
  glCat.useProgram(programMusic);
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferMusic.framebuffer);
  gl.blendFunc(gl.ONE, gl.ONE);
  glCat.clear(0.0, 0.0, 0.0, 0.0);

  glCat.attribute('p', vboQuad, 2);

  props.uniforms();

  glCat.uniform1f('sampleRate', sampleRate);
  glCat.uniform2fv('resolution', [renderWidth, renderHeight]);

  glCat.uniformTexture('textureRandom', textureRandom, 0);

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.flush();

  gl.readPixels(0, 0, renderWidth, renderHeight, gl.RGBA, gl.FLOAT, pixels);

  for (var i = 0; i < renderWidth * renderHeight; i++) {
    buffer.getChannelData(0)[i] = pixels[i * 4 + 0];
    buffer.getChannelData(1)[i] = pixels[i * 4 + 1];
  }
};

var beginTime = void 0;
var play = function play() {
  if (playing) {
    return;
  }

  bufferSource = audio.createBufferSource();
  bufferSource.buffer = buffer;
  bufferSource.connect(audio.destination);

  beginTime = audio.currentTime + 1.0;
  bufferSource.start(beginTime);

  playing = true;
};

var stop = function stop() {
  if (!playing) {
    return;
  }

  bufferSource.stop();
  bufferSource = null;
  playing = false;
};

var seek = function seek(_time) {
  if (playing) {
    stop();

    bufferSource = audio.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.connect(audio.destination);

    bufferSource.start(audio.currentTime, _time);
    beginTime = audio.currentTime - _time;

    playing = true;
  }
};

var getCurrentTime = function getCurrentTime() {
  return playing ? audio.currentTime - beginTime : 0.0;
};

exports.default = {
  prepare: prepare,
  play: play,
  stop: stop,
  getCurrentTime: getCurrentTime,
  seek: seek
};

},{"glslify":"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/node_modules/glslify/browser.js"}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/octahedron.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var octahedron = function octahedron(_div) {
  var pos = [];
  var nor = [];

  for (var ii = 0; ii < 2; ii++) {
    for (var iq = 0; iq < 4; iq++) {
      for (var iy = 0; iy < _div + 1; iy++) {
        for (var ix = 0; ix < iy + 1; ix++) {
          var lat0 = (ii * 2.0 + iy / (_div + 1)) * Math.PI / 2.0;
          var lat1 = (ii * 2.0 + (iy + 1) / (_div + 1)) * Math.PI / 2.0;

          var lon0 = (ii * 2.0 - 1.0) * ((ix - 1) / Math.max(1, iy) + iq) * Math.PI / 2.0;
          var lon1 = (ii * 2.0 - 1.0) * (ix / (iy + 1) + iq) * Math.PI / 2.0;
          var lon2 = (ii * 2.0 - 1.0) * (ix / Math.max(1, iy) + iq) * Math.PI / 2.0;
          var lon3 = (ii * 2.0 - 1.0) * ((ix + 1) / (iy + 1) + iq) * Math.PI / 2.0;

          if (ix !== 0) {
            var x1 = Math.sin(lat0) * Math.cos(lon0);pos.push(x1);
            var y1 = Math.cos(lat0);pos.push(y1);
            var z1 = Math.sin(lat0) * Math.sin(lon0);pos.push(z1);

            var x2 = Math.sin(lat1) * Math.cos(lon1);pos.push(x2);
            var y2 = Math.cos(lat1);pos.push(y2);
            var z2 = Math.sin(lat1) * Math.sin(lon1);pos.push(z2);

            var x3 = Math.sin(lat0) * Math.cos(lon2);pos.push(x3);
            var y3 = Math.cos(lat0);pos.push(y3);
            var z3 = Math.sin(lat0) * Math.sin(lon2);pos.push(z3);

            {
              var x = x1 + x2 + x3;
              var y = y1 + y2 + y3;
              var z = z1 + z2 + z3;
              var l = Math.sqrt(x * x + y * y + z * z);

              for (var i = 0; i < 3; i++) {
                nor.push(x / l);
                nor.push(y / l);
                nor.push(z / l);
              }
            }
          }

          {
            var _x = Math.sin(lat0) * Math.cos(lon2);pos.push(_x);
            var _y = Math.cos(lat0);pos.push(_y);
            var _z = Math.sin(lat0) * Math.sin(lon2);pos.push(_z);

            var _x2 = Math.sin(lat1) * Math.cos(lon1);pos.push(_x2);
            var _y2 = Math.cos(lat1);pos.push(_y2);
            var _z2 = Math.sin(lat1) * Math.sin(lon1);pos.push(_z2);

            var _x3 = Math.sin(lat1) * Math.cos(lon3);pos.push(_x3);
            var _y3 = Math.cos(lat1);pos.push(_y3);
            var _z3 = Math.sin(lat1) * Math.sin(lon3);pos.push(_z3);

            {
              var _x4 = _x + _x2 + _x3;
              var _y4 = _y + _y2 + _y3;
              var _z4 = _z + _z2 + _z3;
              var _l = Math.sqrt(_x4 * _x4 + _y4 * _y4 + _z4 * _z4);

              for (var _i = 0; _i < 3; _i++) {
                nor.push(_x4 / _l);
                nor.push(_y4 / _l);
                nor.push(_z4 / _l);
              }
            }
          }
        }
      }
    }
  }

  return {
    pos: pos,
    nor: nor
  };
};

exports.default = octahedron;

},{}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/stl.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var stlLoader = function stlLoader(_url, _callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', _url, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    var view = new DataView(xhr.response);
    var head = 80;

    var triangleLength = view.getUint32(head, true);
    head += 4;

    // ------

    var tris = new Float32Array(triangleLength * 3 * 3);

    for (var iTri = 0; iTri < triangleLength; iTri++) {
      var verts = [];

      for (var iVert = 0; iVert < 3; iVert++) {
        verts[iVert] = [];

        for (var iAx = 0; iAx < 3; iAx++) {
          tris[iTri * 9 + iVert * 3 + iAx] = view.getFloat32(head + 12 + 4 * iAx + 12 * iVert, true);
        }
      }

      head += 50;
    }

    // ------

    _callback(tris);
  };
  xhr.send();
};

exports.default = stlLoader;

},{}],"/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/xorshift.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var seed = void 0;
var xorshift = function xorshift(_seed) {
  seed = _seed || seed || 1;
  seed = seed ^ seed << 13;
  seed = seed ^ seed >>> 17;
  seed = seed ^ seed << 5;
  return seed / Math.pow(2, 32) + 0.5;
};

exports.default = xorshift;

},{}]},{},["/Users/Yutaka/Dropbox/pro/JavaScript/tdf2017/src/script/main.js"]);
