/*! For license information please see main.min.js.LICENSE.txt */
!(function () {
  var e = {
      9662: function (e, t, n) {
        var r = n(7854),
          o = n(614),
          i = n(6330),
          a = r.TypeError;
        e.exports = function (e) {
          if (o(e)) return e;
          throw a(i(e) + " is not a function");
        };
      },
      9483: function (e, t, n) {
        var r = n(7854),
          o = n(4411),
          i = n(6330),
          a = r.TypeError;
        e.exports = function (e) {
          if (o(e)) return e;
          throw a(i(e) + " is not a constructor");
        };
      },
      1530: function (e, t, n) {
        "use strict";
        var r = n(8710).charAt;
        e.exports = function (e, t, n) {
          return t + (n ? r(e, t).length : 1);
        };
      },
      9670: function (e, t, n) {
        var r = n(7854),
          o = n(111),
          i = r.String,
          a = r.TypeError;
        e.exports = function (e) {
          if (o(e)) return e;
          throw a(i(e) + " is not an object");
        };
      },
      1318: function (e, t, n) {
        var r = n(5656),
          o = n(1400),
          i = n(6244),
          a = function (e) {
            return function (t, n, a) {
              var s,
                u = r(t),
                c = i(u),
                l = o(a, c);
              if (e && n != n) {
                for (; c > l; ) if ((s = u[l++]) != s) return !0;
              } else
                for (; c > l; l++)
                  if ((e || l in u) && u[l] === n) return e || l || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: a(!0), indexOf: a(!1) };
      },
      206: function (e, t, n) {
        var r = n(1702);
        e.exports = r([].slice);
      },
      4326: function (e, t, n) {
        var r = n(1702),
          o = r({}.toString),
          i = r("".slice);
        e.exports = function (e) {
          return i(o(e), 8, -1);
        };
      },
      648: function (e, t, n) {
        var r = n(7854),
          o = n(1694),
          i = n(614),
          a = n(4326),
          s = n(5112)("toStringTag"),
          u = r.Object,
          c =
            "Arguments" ==
            a(
              (function () {
                return arguments;
              })()
            );
        e.exports = o
          ? a
          : function (e) {
              var t, n, r;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = u(e)), s))
                ? n
                : c
                ? a(t)
                : "Object" == (r = a(t)) && i(t.callee)
                ? "Arguments"
                : r;
            };
      },
      9920: function (e, t, n) {
        var r = n(2597),
          o = n(3887),
          i = n(1236),
          a = n(3070);
        e.exports = function (e, t) {
          for (var n = o(t), s = a.f, u = i.f, c = 0; c < n.length; c++) {
            var l = n[c];
            r(e, l) || s(e, l, u(t, l));
          }
        };
      },
      8880: function (e, t, n) {
        var r = n(9781),
          o = n(3070),
          i = n(9114);
        e.exports = r
          ? function (e, t, n) {
              return o.f(e, t, i(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      9114: function (e) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      9781: function (e, t, n) {
        var r = n(7293);
        e.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      317: function (e, t, n) {
        var r = n(7854),
          o = n(111),
          i = r.document,
          a = o(i) && o(i.createElement);
        e.exports = function (e) {
          return a ? i.createElement(e) : {};
        };
      },
      8113: function (e, t, n) {
        var r = n(5005);
        e.exports = r("navigator", "userAgent") || "";
      },
      7392: function (e, t, n) {
        var r,
          o,
          i = n(7854),
          a = n(8113),
          s = i.process,
          u = i.Deno,
          c = (s && s.versions) || (u && u.version),
          l = c && c.v8;
        l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !o &&
            a &&
            (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = a.match(/Chrome\/(\d+)/)) &&
            (o = +r[1]),
          (e.exports = o);
      },
      748: function (e) {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      2109: function (e, t, n) {
        var r = n(7854),
          o = n(1236).f,
          i = n(8880),
          a = n(1320),
          s = n(3505),
          u = n(9920),
          c = n(4705);
        e.exports = function (e, t) {
          var n,
            l,
            f,
            p,
            d,
            h = e.target,
            v = e.global,
            g = e.stat;
          if ((n = v ? r : g ? r[h] || s(h, {}) : (r[h] || {}).prototype))
            for (l in t) {
              if (
                ((p = t[l]),
                (f = e.noTargetGet ? (d = o(n, l)) && d.value : n[l]),
                !c(v ? l : h + (g ? "." : "#") + l, e.forced) && void 0 !== f)
              ) {
                if (typeof p == typeof f) continue;
                u(p, f);
              }
              (e.sham || (f && f.sham)) && i(p, "sham", !0), a(n, l, p, e);
            }
        };
      },
      7293: function (e) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      7007: function (e, t, n) {
        "use strict";
        n(4916);
        var r = n(1702),
          o = n(1320),
          i = n(2261),
          a = n(7293),
          s = n(5112),
          u = n(8880),
          c = s("species"),
          l = RegExp.prototype;
        e.exports = function (e, t, n, f) {
          var p = s(e),
            d = !a(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            h =
              d &&
              !a(function () {
                var t = !1,
                  n = /a/;
                return (
                  "split" === e &&
                    (((n = {}).constructor = {}),
                    (n.constructor[c] = function () {
                      return n;
                    }),
                    (n.flags = ""),
                    (n[p] = /./[p])),
                  (n.exec = function () {
                    return (t = !0), null;
                  }),
                  n[p](""),
                  !t
                );
              });
          if (!d || !h || n) {
            var v = r(/./[p]),
              g = t(p, ""[e], function (e, t, n, o, a) {
                var s = r(e),
                  u = t.exec;
                return u === i || u === l.exec
                  ? d && !a
                    ? { done: !0, value: v(t, n, o) }
                    : { done: !0, value: s(n, t, o) }
                  : { done: !1 };
              });
            o(String.prototype, e, g[0]), o(l, p, g[1]);
          }
          f && u(l[p], "sham", !0);
        };
      },
      2104: function (e) {
        var t = Function.prototype,
          n = t.apply,
          r = t.bind,
          o = t.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (r
            ? o.bind(n)
            : function () {
                return o.apply(n, arguments);
              });
      },
      6916: function (e) {
        var t = Function.prototype.call;
        e.exports = t.bind
          ? t.bind(t)
          : function () {
              return t.apply(t, arguments);
            };
      },
      6530: function (e, t, n) {
        var r = n(9781),
          o = n(2597),
          i = Function.prototype,
          a = r && Object.getOwnPropertyDescriptor,
          s = o(i, "name"),
          u = s && "something" === function () {}.name,
          c = s && (!r || (r && a(i, "name").configurable));
        e.exports = { EXISTS: s, PROPER: u, CONFIGURABLE: c };
      },
      1702: function (e) {
        var t = Function.prototype,
          n = t.bind,
          r = t.call,
          o = n && n.bind(r);
        e.exports = n
          ? function (e) {
              return e && o(r, e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return r.apply(e, arguments);
                }
              );
            };
      },
      5005: function (e, t, n) {
        var r = n(7854),
          o = n(614),
          i = function (e) {
            return o(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t];
        };
      },
      8173: function (e, t, n) {
        var r = n(9662);
        e.exports = function (e, t) {
          var n = e[t];
          return null == n ? void 0 : r(n);
        };
      },
      7854: function (e, t, n) {
        var r = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          r("object" == typeof globalThis && globalThis) ||
          r("object" == typeof window && window) ||
          r("object" == typeof self && self) ||
          r("object" == typeof n.g && n.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      2597: function (e, t, n) {
        var r = n(1702),
          o = n(7908),
          i = r({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return i(o(e), t);
          };
      },
      3501: function (e) {
        e.exports = {};
      },
      490: function (e, t, n) {
        var r = n(5005);
        e.exports = r("document", "documentElement");
      },
      4664: function (e, t, n) {
        var r = n(9781),
          o = n(7293),
          i = n(317);
        e.exports =
          !r &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      8361: function (e, t, n) {
        var r = n(7854),
          o = n(1702),
          i = n(7293),
          a = n(4326),
          s = r.Object,
          u = o("".split);
        e.exports = i(function () {
          return !s("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == a(e) ? u(e, "") : s(e);
            }
          : s;
      },
      2788: function (e, t, n) {
        var r = n(1702),
          o = n(614),
          i = n(5465),
          a = r(Function.toString);
        o(i.inspectSource) ||
          (i.inspectSource = function (e) {
            return a(e);
          }),
          (e.exports = i.inspectSource);
      },
      9909: function (e, t, n) {
        var r,
          o,
          i,
          a = n(8536),
          s = n(7854),
          u = n(1702),
          c = n(111),
          l = n(8880),
          f = n(2597),
          p = n(5465),
          d = n(6200),
          h = n(3501),
          v = "Object already initialized",
          g = s.TypeError,
          y = s.WeakMap;
        if (a || p.state) {
          var m = p.state || (p.state = new y()),
            x = u(m.get),
            b = u(m.has),
            w = u(m.set);
          (r = function (e, t) {
            if (b(m, e)) throw new g(v);
            return (t.facade = e), w(m, e, t), t;
          }),
            (o = function (e) {
              return x(m, e) || {};
            }),
            (i = function (e) {
              return b(m, e);
            });
        } else {
          var T = d("state");
          (h[T] = !0),
            (r = function (e, t) {
              if (f(e, T)) throw new g(v);
              return (t.facade = e), l(e, T, t), t;
            }),
            (o = function (e) {
              return f(e, T) ? e[T] : {};
            }),
            (i = function (e) {
              return f(e, T);
            });
        }
        e.exports = {
          set: r,
          get: o,
          has: i,
          enforce: function (e) {
            return i(e) ? o(e) : r(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!c(t) || (n = o(t)).type !== e)
                throw g("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      614: function (e) {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      4411: function (e, t, n) {
        var r = n(1702),
          o = n(7293),
          i = n(614),
          a = n(648),
          s = n(5005),
          u = n(2788),
          c = function () {},
          l = [],
          f = s("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          d = r(p.exec),
          h = !p.exec(c),
          v = function (e) {
            if (!i(e)) return !1;
            try {
              return f(c, l, e), !0;
            } catch (e) {
              return !1;
            }
          };
        e.exports =
          !f ||
          o(function () {
            var e;
            return (
              v(v.call) ||
              !v(Object) ||
              !v(function () {
                e = !0;
              }) ||
              e
            );
          })
            ? function (e) {
                if (!i(e)) return !1;
                switch (a(e)) {
                  case "AsyncFunction":
                  case "GeneratorFunction":
                  case "AsyncGeneratorFunction":
                    return !1;
                }
                return h || !!d(p, u(e));
              }
            : v;
      },
      4705: function (e, t, n) {
        var r = n(7293),
          o = n(614),
          i = /#|\.prototype\./,
          a = function (e, t) {
            var n = u[s(e)];
            return n == l || (n != c && (o(t) ? r(t) : !!t));
          },
          s = (a.normalize = function (e) {
            return String(e).replace(i, ".").toLowerCase();
          }),
          u = (a.data = {}),
          c = (a.NATIVE = "N"),
          l = (a.POLYFILL = "P");
        e.exports = a;
      },
      111: function (e, t, n) {
        var r = n(614);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : r(e);
        };
      },
      1913: function (e) {
        e.exports = !1;
      },
      7850: function (e, t, n) {
        var r = n(111),
          o = n(4326),
          i = n(5112)("match");
        e.exports = function (e) {
          var t;
          return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e));
        };
      },
      2190: function (e, t, n) {
        var r = n(7854),
          o = n(5005),
          i = n(614),
          a = n(7976),
          s = n(3307),
          u = r.Object;
        e.exports = s
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = o("Symbol");
              return i(t) && a(t.prototype, u(e));
            };
      },
      6244: function (e, t, n) {
        var r = n(7466);
        e.exports = function (e) {
          return r(e.length);
        };
      },
      133: function (e, t, n) {
        var r = n(7392),
          o = n(7293);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && r && r < 41)
            );
          });
      },
      8536: function (e, t, n) {
        var r = n(7854),
          o = n(614),
          i = n(2788),
          a = r.WeakMap;
        e.exports = o(a) && /native code/.test(i(a));
      },
      30: function (e, t, n) {
        var r,
          o = n(9670),
          i = n(6048),
          a = n(748),
          s = n(3501),
          u = n(490),
          c = n(317),
          l = n(6200),
          f = l("IE_PROTO"),
          p = function () {},
          d = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          h = function (e) {
            e.write(d("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          v = function () {
            try {
              r = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v =
              "undefined" != typeof document
                ? document.domain && r
                  ? h(r)
                  : (((t = c("iframe")).style.display = "none"),
                    u.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(d("document.F=Object")),
                    e.close(),
                    e.F)
                : h(r);
            for (var n = a.length; n--; ) delete v.prototype[a[n]];
            return v();
          };
        (s[f] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e
                  ? ((p.prototype = o(e)),
                    (n = new p()),
                    (p.prototype = null),
                    (n[f] = e))
                  : (n = v()),
                void 0 === t ? n : i(n, t)
              );
            });
      },
      6048: function (e, t, n) {
        var r = n(9781),
          o = n(3070),
          i = n(9670),
          a = n(5656),
          s = n(1956);
        e.exports = r
          ? Object.defineProperties
          : function (e, t) {
              i(e);
              for (var n, r = a(t), u = s(t), c = u.length, l = 0; c > l; )
                o.f(e, (n = u[l++]), r[n]);
              return e;
            };
      },
      3070: function (e, t, n) {
        var r = n(7854),
          o = n(9781),
          i = n(4664),
          a = n(9670),
          s = n(4948),
          u = r.TypeError,
          c = Object.defineProperty;
        t.f = o
          ? c
          : function (e, t, n) {
              if ((a(e), (t = s(t)), a(n), i))
                try {
                  return c(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw u("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      1236: function (e, t, n) {
        var r = n(9781),
          o = n(6916),
          i = n(5296),
          a = n(9114),
          s = n(5656),
          u = n(4948),
          c = n(2597),
          l = n(4664),
          f = Object.getOwnPropertyDescriptor;
        t.f = r
          ? f
          : function (e, t) {
              if (((e = s(e)), (t = u(t)), l))
                try {
                  return f(e, t);
                } catch (e) {}
              if (c(e, t)) return a(!o(i.f, e, t), e[t]);
            };
      },
      8006: function (e, t, n) {
        var r = n(6324),
          o = n(748).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, o);
          };
      },
      5181: function (e, t) {
        t.f = Object.getOwnPropertySymbols;
      },
      7976: function (e, t, n) {
        var r = n(1702);
        e.exports = r({}.isPrototypeOf);
      },
      6324: function (e, t, n) {
        var r = n(1702),
          o = n(2597),
          i = n(5656),
          a = n(1318).indexOf,
          s = n(3501),
          u = r([].push);
        e.exports = function (e, t) {
          var n,
            r = i(e),
            c = 0,
            l = [];
          for (n in r) !o(s, n) && o(r, n) && u(l, n);
          for (; t.length > c; ) o(r, (n = t[c++])) && (~a(l, n) || u(l, n));
          return l;
        };
      },
      1956: function (e, t, n) {
        var r = n(6324),
          o = n(748);
        e.exports =
          Object.keys ||
          function (e) {
            return r(e, o);
          };
      },
      5296: function (e, t) {
        "use strict";
        var n = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          o = r && !n.call({ 1: 2 }, 1);
        t.f = o
          ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            }
          : n;
      },
      2140: function (e, t, n) {
        var r = n(7854),
          o = n(6916),
          i = n(614),
          a = n(111),
          s = r.TypeError;
        e.exports = function (e, t) {
          var n, r;
          if ("string" === t && i((n = e.toString)) && !a((r = o(n, e))))
            return r;
          if (i((n = e.valueOf)) && !a((r = o(n, e)))) return r;
          if ("string" !== t && i((n = e.toString)) && !a((r = o(n, e))))
            return r;
          throw s("Can't convert object to primitive value");
        };
      },
      3887: function (e, t, n) {
        var r = n(5005),
          o = n(1702),
          i = n(8006),
          a = n(5181),
          s = n(9670),
          u = o([].concat);
        e.exports =
          r("Reflect", "ownKeys") ||
          function (e) {
            var t = i.f(s(e)),
              n = a.f;
            return n ? u(t, n(e)) : t;
          };
      },
      1320: function (e, t, n) {
        var r = n(7854),
          o = n(614),
          i = n(2597),
          a = n(8880),
          s = n(3505),
          u = n(2788),
          c = n(9909),
          l = n(6530).CONFIGURABLE,
          f = c.get,
          p = c.enforce,
          d = String(String).split("String");
        (e.exports = function (e, t, n, u) {
          var c,
            f = !!u && !!u.unsafe,
            h = !!u && !!u.enumerable,
            v = !!u && !!u.noTargetGet,
            g = u && void 0 !== u.name ? u.name : t;
          o(n) &&
            ("Symbol(" === String(g).slice(0, 7) &&
              (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!i(n, "name") || (l && n.name !== g)) && a(n, "name", g),
            (c = p(n)).source ||
              (c.source = d.join("string" == typeof g ? g : ""))),
            e !== r
              ? (f ? !v && e[t] && (h = !0) : delete e[t],
                h ? (e[t] = n) : a(e, t, n))
              : h
              ? (e[t] = n)
              : s(t, n);
        })(Function.prototype, "toString", function () {
          return (o(this) && f(this).source) || u(this);
        });
      },
      7651: function (e, t, n) {
        var r = n(7854),
          o = n(6916),
          i = n(9670),
          a = n(614),
          s = n(4326),
          u = n(2261),
          c = r.TypeError;
        e.exports = function (e, t) {
          var n = e.exec;
          if (a(n)) {
            var r = o(n, e, t);
            return null !== r && i(r), r;
          }
          if ("RegExp" === s(e)) return o(u, e, t);
          throw c("RegExp#exec called on incompatible receiver");
        };
      },
      2261: function (e, t, n) {
        "use strict";
        var r,
          o,
          i = n(6916),
          a = n(1702),
          s = n(1340),
          u = n(7066),
          c = n(2999),
          l = n(2309),
          f = n(30),
          p = n(9909).get,
          d = n(9441),
          h = n(7168),
          v = l("native-string-replace", String.prototype.replace),
          g = RegExp.prototype.exec,
          y = g,
          m = a("".charAt),
          x = a("".indexOf),
          b = a("".replace),
          w = a("".slice),
          T =
            ((o = /b*/g),
            i(g, (r = /a/), "a"),
            i(g, o, "a"),
            0 !== r.lastIndex || 0 !== o.lastIndex),
          C = c.UNSUPPORTED_Y || c.BROKEN_CARET,
          S = void 0 !== /()??/.exec("")[1];
        (T || S || C || d || h) &&
          (y = function (e) {
            var t,
              n,
              r,
              o,
              a,
              c,
              l,
              d = this,
              h = p(d),
              E = s(e),
              j = h.raw;
            if (j)
              return (
                (j.lastIndex = d.lastIndex),
                (t = i(y, j, E)),
                (d.lastIndex = j.lastIndex),
                t
              );
            var k = h.groups,
              A = C && d.sticky,
              N = i(u, d),
              D = d.source,
              O = 0,
              L = E;
            if (
              (A &&
                ((N = b(N, "y", "")),
                -1 === x(N, "g") && (N += "g"),
                (L = w(E, d.lastIndex)),
                d.lastIndex > 0 &&
                  (!d.multiline ||
                    (d.multiline && "\n" !== m(E, d.lastIndex - 1))) &&
                  ((D = "(?: " + D + ")"), (L = " " + L), O++),
                (n = new RegExp("^(?:" + D + ")", N))),
              S && (n = new RegExp("^" + D + "$(?!\\s)", N)),
              T && (r = d.lastIndex),
              (o = i(g, A ? n : d, L)),
              A
                ? o
                  ? ((o.input = w(o.input, O)),
                    (o[0] = w(o[0], O)),
                    (o.index = d.lastIndex),
                    (d.lastIndex += o[0].length))
                  : (d.lastIndex = 0)
                : T &&
                  o &&
                  (d.lastIndex = d.global ? o.index + o[0].length : r),
              S &&
                o &&
                o.length > 1 &&
                i(v, o[0], n, function () {
                  for (a = 1; a < arguments.length - 2; a++)
                    void 0 === arguments[a] && (o[a] = void 0);
                }),
              o && k)
            )
              for (o.groups = c = f(null), a = 0; a < k.length; a++)
                c[(l = k[a])[0]] = o[l[1]];
            return o;
          }),
          (e.exports = y);
      },
      7066: function (e, t, n) {
        "use strict";
        var r = n(9670);
        e.exports = function () {
          var e = r(this),
            t = "";
          return (
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      2999: function (e, t, n) {
        var r = n(7293),
          o = n(7854).RegExp;
        (t.UNSUPPORTED_Y = r(function () {
          var e = o("a", "y");
          return (e.lastIndex = 2), null != e.exec("abcd");
        })),
          (t.BROKEN_CARET = r(function () {
            var e = o("^r", "gy");
            return (e.lastIndex = 2), null != e.exec("str");
          }));
      },
      9441: function (e, t, n) {
        var r = n(7293),
          o = n(7854).RegExp;
        e.exports = r(function () {
          var e = o(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      7168: function (e, t, n) {
        var r = n(7293),
          o = n(7854).RegExp;
        e.exports = r(function () {
          var e = o("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      4488: function (e, t, n) {
        var r = n(7854).TypeError;
        e.exports = function (e) {
          if (null == e) throw r("Can't call method on " + e);
          return e;
        };
      },
      3505: function (e, t, n) {
        var r = n(7854),
          o = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            o(r, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            r[e] = t;
          }
          return t;
        };
      },
      6200: function (e, t, n) {
        var r = n(2309),
          o = n(9711),
          i = r("keys");
        e.exports = function (e) {
          return i[e] || (i[e] = o(e));
        };
      },
      5465: function (e, t, n) {
        var r = n(7854),
          o = n(3505),
          i = "__core-js_shared__",
          a = r[i] || o(i, {});
        e.exports = a;
      },
      2309: function (e, t, n) {
        var r = n(1913),
          o = n(5465);
        (e.exports = function (e, t) {
          return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.19.0",
          mode: r ? "pure" : "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
        });
      },
      6707: function (e, t, n) {
        var r = n(9670),
          o = n(9483),
          i = n(5112)("species");
        e.exports = function (e, t) {
          var n,
            a = r(e).constructor;
          return void 0 === a || null == (n = r(a)[i]) ? t : o(n);
        };
      },
      8710: function (e, t, n) {
        var r = n(1702),
          o = n(9303),
          i = n(1340),
          a = n(4488),
          s = r("".charAt),
          u = r("".charCodeAt),
          c = r("".slice),
          l = function (e) {
            return function (t, n) {
              var r,
                l,
                f = i(a(t)),
                p = o(n),
                d = f.length;
              return p < 0 || p >= d
                ? e
                  ? ""
                  : void 0
                : (r = u(f, p)) < 55296 ||
                  r > 56319 ||
                  p + 1 === d ||
                  (l = u(f, p + 1)) < 56320 ||
                  l > 57343
                ? e
                  ? s(f, p)
                  : r
                : e
                ? c(f, p, p + 2)
                : l - 56320 + ((r - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: l(!1), charAt: l(!0) };
      },
      1400: function (e, t, n) {
        var r = n(9303),
          o = Math.max,
          i = Math.min;
        e.exports = function (e, t) {
          var n = r(e);
          return n < 0 ? o(n + t, 0) : i(n, t);
        };
      },
      5656: function (e, t, n) {
        var r = n(8361),
          o = n(4488);
        e.exports = function (e) {
          return r(o(e));
        };
      },
      9303: function (e) {
        var t = Math.ceil,
          n = Math.floor;
        e.exports = function (e) {
          var r = +e;
          return r != r || 0 === r ? 0 : (r > 0 ? n : t)(r);
        };
      },
      7466: function (e, t, n) {
        var r = n(9303),
          o = Math.min;
        e.exports = function (e) {
          return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
      },
      7908: function (e, t, n) {
        var r = n(7854),
          o = n(4488),
          i = r.Object;
        e.exports = function (e) {
          return i(o(e));
        };
      },
      7593: function (e, t, n) {
        var r = n(7854),
          o = n(6916),
          i = n(111),
          a = n(2190),
          s = n(8173),
          u = n(2140),
          c = n(5112),
          l = r.TypeError,
          f = c("toPrimitive");
        e.exports = function (e, t) {
          if (!i(e) || a(e)) return e;
          var n,
            r = s(e, f);
          if (r) {
            if (
              (void 0 === t && (t = "default"), (n = o(r, e, t)), !i(n) || a(n))
            )
              return n;
            throw l("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), u(e, t);
        };
      },
      4948: function (e, t, n) {
        var r = n(7593),
          o = n(2190);
        e.exports = function (e) {
          var t = r(e, "string");
          return o(t) ? t : t + "";
        };
      },
      1694: function (e, t, n) {
        var r = {};
        (r[n(5112)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(r));
      },
      1340: function (e, t, n) {
        var r = n(7854),
          o = n(648),
          i = r.String;
        e.exports = function (e) {
          if ("Symbol" === o(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return i(e);
        };
      },
      6330: function (e, t, n) {
        var r = n(7854).String;
        e.exports = function (e) {
          try {
            return r(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9711: function (e, t, n) {
        var r = n(1702),
          o = 0,
          i = Math.random(),
          a = r((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36);
        };
      },
      3307: function (e, t, n) {
        var r = n(133);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      5112: function (e, t, n) {
        var r = n(7854),
          o = n(2309),
          i = n(2597),
          a = n(9711),
          s = n(133),
          u = n(3307),
          c = o("wks"),
          l = r.Symbol,
          f = l && l.for,
          p = u ? l : (l && l.withoutSetter) || a;
        e.exports = function (e) {
          if (!i(c, e) || (!s && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            s && i(l, e) ? (c[e] = l[e]) : (c[e] = u && f ? f(t) : p(t));
          }
          return c[e];
        };
      },
      4916: function (e, t, n) {
        "use strict";
        var r = n(2109),
          o = n(2261);
        r({ target: "RegExp", proto: !0, forced: /./.exec !== o }, { exec: o });
      },
      3123: function (e, t, n) {
        "use strict";
        var r = n(2104),
          o = n(6916),
          i = n(1702),
          a = n(7007),
          s = n(7850),
          u = n(9670),
          c = n(4488),
          l = n(6707),
          f = n(1530),
          p = n(7466),
          d = n(1340),
          h = n(8173),
          v = n(206),
          g = n(7651),
          y = n(2261),
          m = n(2999),
          x = n(7293),
          b = m.UNSUPPORTED_Y,
          w = 4294967295,
          T = Math.min,
          C = [].push,
          S = i(/./.exec),
          E = i(C),
          j = i("".slice),
          k = !x(function () {
            var e = /(?:)/,
              t = e.exec;
            e.exec = function () {
              return t.apply(this, arguments);
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
          });
        a(
          "split",
          function (e, t, n) {
            var i;
            return (
              (i =
                "c" == "abbc".split(/(b)*/)[1] ||
                4 != "test".split(/(?:)/, -1).length ||
                2 != "ab".split(/(?:ab)*/).length ||
                4 != ".".split(/(.?)(.?)/).length ||
                ".".split(/()()/).length > 1 ||
                "".split(/.?/).length
                  ? function (e, n) {
                      var i = d(c(this)),
                        a = void 0 === n ? w : n >>> 0;
                      if (0 === a) return [];
                      if (void 0 === e) return [i];
                      if (!s(e)) return o(t, i, e, a);
                      for (
                        var u,
                          l,
                          f,
                          p = [],
                          h =
                            (e.ignoreCase ? "i" : "") +
                            (e.multiline ? "m" : "") +
                            (e.unicode ? "u" : "") +
                            (e.sticky ? "y" : ""),
                          g = 0,
                          m = new RegExp(e.source, h + "g");
                        (u = o(y, m, i)) &&
                        !(
                          (l = m.lastIndex) > g &&
                          (E(p, j(i, g, u.index)),
                          u.length > 1 &&
                            u.index < i.length &&
                            r(C, p, v(u, 1)),
                          (f = u[0].length),
                          (g = l),
                          p.length >= a)
                        );

                      )
                        m.lastIndex === u.index && m.lastIndex++;
                      return (
                        g === i.length
                          ? (!f && S(m, "")) || E(p, "")
                          : E(p, j(i, g)),
                        p.length > a ? v(p, 0, a) : p
                      );
                    }
                  : "0".split(void 0, 0).length
                  ? function (e, n) {
                      return void 0 === e && 0 === n ? [] : o(t, this, e, n);
                    }
                  : t),
              [
                function (t, n) {
                  var r = c(this),
                    a = null == t ? void 0 : h(t, e);
                  return a ? o(a, t, r, n) : o(i, d(r), t, n);
                },
                function (e, r) {
                  var o = u(this),
                    a = d(e),
                    s = n(i, o, a, r, i !== t);
                  if (s.done) return s.value;
                  var c = l(o, RegExp),
                    h = o.unicode,
                    v =
                      (o.ignoreCase ? "i" : "") +
                      (o.multiline ? "m" : "") +
                      (o.unicode ? "u" : "") +
                      (b ? "g" : "y"),
                    y = new c(b ? "^(?:" + o.source + ")" : o, v),
                    m = void 0 === r ? w : r >>> 0;
                  if (0 === m) return [];
                  if (0 === a.length) return null === g(y, a) ? [a] : [];
                  for (var x = 0, C = 0, S = []; C < a.length; ) {
                    y.lastIndex = b ? 0 : C;
                    var k,
                      A = g(y, b ? j(a, C) : a);
                    if (
                      null === A ||
                      (k = T(p(y.lastIndex + (b ? C : 0)), a.length)) === x
                    )
                      C = f(a, C, h);
                    else {
                      if ((E(S, j(a, x, C)), S.length === m)) return S;
                      for (var N = 1; N <= A.length - 1; N++)
                        if ((E(S, A[N]), S.length === m)) return S;
                      C = x = k;
                    }
                  }
                  return E(S, j(a, x)), S;
                },
              ]
            );
          },
          !k,
          b
        );
      },
      9755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            c = i.push,
            l = i.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            v = h.call(Object),
            g = {},
            y = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            x = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              o,
              i = (n = n || x).createElement("script");
            if (((i.text = e), t))
              for (r in b)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            S = function (e, t) {
              return new S.fn.init(e, t);
            };
          function E(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !y(e) &&
              !m(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (S.fn = S.prototype =
            {
              jquery: C,
              constructor: S,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return S.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  S.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: i.sort,
              splice: i.splice,
            }),
            (S.extend = S.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof a &&
                    ((c = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || y(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (c &&
                          r &&
                          (S.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || S.isPlainObject(n)
                                  ? n
                                  : {}),
                              (o = !1),
                              (a[t] = S.extend(c, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            S.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = a(e)) ||
                    ("function" ==
                      typeof (n = d.call(t, "constructor") && t.constructor) &&
                      h.call(n) === v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (E(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? S.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (E(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (S.fn[Symbol.iterator] = i[Symbol.iterator]),
            S.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var j = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              c,
              l,
              f,
              p,
              d,
              h,
              v,
              g,
              y,
              m,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              C = 0,
              S = ue(),
              E = ue(),
              j = ue(),
              k = ue(),
              A = function (e, t) {
                return e === t && (f = !0), 0;
              },
              N = {}.hasOwnProperty,
              D = [],
              O = D.pop,
              L = D.push,
              q = D.push,
              P = D.slice,
              R = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              H =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              I = "[\\x20\\t\\r\\n\\f]",
              M =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              F =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                M +
                ")(?:" +
                I +
                "*([*^$|!~]?=)" +
                I +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                I +
                "*\\]",
              W =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                F +
                ")*)|.*)\\)|)",
              $ = new RegExp(I + "+", "g"),
              B = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              _ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              U = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              z = new RegExp(I + "|>"),
              X = new RegExp(W),
              G = new RegExp("^" + M + "$"),
              V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              oe = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ie = function () {
                p();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              q.apply((D = P.call(w.childNodes)), w.childNodes),
                D[w.childNodes.length].nodeType;
            } catch (e) {
              q = {
                apply: D.length
                  ? function (e, t) {
                      L.apply(e, P.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, o) {
              var i,
                s,
                c,
                l,
                f,
                h,
                y,
                m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!o && (p(t), (t = t || d), v)) {
                if (11 !== w && (f = Z.exec(e)))
                  if ((i = f[1])) {
                    if (9 === w) {
                      if (!(c = t.getElementById(i))) return r;
                      if (c.id === i) return r.push(c), r;
                    } else if (
                      m &&
                      (c = m.getElementById(i)) &&
                      x(t, c) &&
                      c.id === i
                    )
                      return r.push(c), r;
                  } else {
                    if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (i = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return q.apply(r, t.getElementsByClassName(i)), r;
                  }
                if (
                  n.qsa &&
                  !k[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (m = t), 1 === w && (z.test(e) || U.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((l = t.getAttribute("id"))
                          ? (l = l.replace(re, oe))
                          : t.setAttribute("id", (l = b))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (l ? "#" + l : ":scope") + " " + xe(h[s]);
                    y = h.join(",");
                  }
                  try {
                    return q.apply(r, m.querySelectorAll(y)), r;
                  } catch (t) {
                    k(e, !0);
                  } finally {
                    l === b && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(B, "$1"), t, r, o);
            }
            function ue() {
              var e = [];
              return function t(n, o) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = o)
                );
              };
            }
            function ce(e) {
              return (e[b] = !0), e;
            }
            function le(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function de(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function ye(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (i = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = se.setDocument =
              function (e) {
                var t,
                  o,
                  a = e ? e.ownerDocument || e : w;
                return a != d && 9 === a.nodeType && a.documentElement
                  ? ((h = (d = a).documentElement),
                    (v = !i(d)),
                    w != d &&
                      (o = d.defaultView) &&
                      o.top !== o &&
                      (o.addEventListener
                        ? o.addEventListener("unload", ie, !1)
                        : o.attachEvent && o.attachEvent("onunload", ie)),
                    (n.scope = le(function (e) {
                      return (
                        h.appendChild(e).appendChild(d.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = le(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = le(function (e) {
                      return (
                        e.appendChild(d.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = J.test(
                      d.getElementsByClassName
                    )),
                    (n.getById = le(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !d.getElementsByName || !d.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              r,
                              o,
                              i = t.getElementById(e);
                            if (i) {
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                              for (
                                o = t.getElementsByName(e), r = 0;
                                (i = o[r++]);

                              )
                                if (
                                  (n = i.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [i];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = i[o++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return i;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (y = []),
                    (g = []),
                    (n.qsa = J.test(d.querySelectorAll)) &&
                      (le(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")"
                            ),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          (t = d.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      le(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = J.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      le(function (e) {
                        (n.disconnectedMatch = m.call(e, "*")),
                          m.call(e, "[s!='']:x"),
                          y.push("!=", W);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (y = y.length && new RegExp(y.join("|"))),
                    (t = J.test(h.compareDocumentPosition)),
                    (x =
                      t || J.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (A = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == d || (e.ownerDocument == w && x(w, e))
                                ? -1
                                : t == d || (t.ownerDocument == w && x(w, t))
                                ? 1
                                : l
                                ? R(l, e) - R(l, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!o || !i)
                            return e == d
                              ? -1
                              : t == d
                              ? 1
                              : o
                              ? -1
                              : i
                              ? 1
                              : l
                              ? R(l, e) - R(l, t)
                              : 0;
                          if (o === i) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? pe(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    d)
                  : d;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  v &&
                  !k[t + " "] &&
                  (!y || !y.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  k(t, !0);
                }
              return se(t, d, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), x(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var o = r.attrHandle[t.toLowerCase()],
                i =
                  o && N.call(r.attrHandle, t.toLowerCase())
                    ? o(e, t, !v)
                    : void 0;
              return void 0 !== i
                ? i
                : n.attributes || !v
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, oe);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                o = 0,
                i = 0;
              if (
                ((f = !n.detectDuplicates),
                (l = !n.sortStable && e.slice(0)),
                e.sort(A),
                f)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
                for (; o--; ) e.splice(r[o], 1);
              }
              return (l = null), e;
            }),
            (o = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  i = e.nodeType;
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                  } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += o(t);
                return n;
              }),
            (r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return V.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            X.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = S[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + I + "|$)"
                      )) &&
                        S(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = se.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                              ? o !== n
                              : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                              ? n && o.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + o.replace($, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (o === n ||
                                  o.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var c,
                            l,
                            f,
                            p,
                            d,
                            h,
                            v = i !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                          if (g) {
                            if (i) {
                              for (; v; ) {
                                for (p = t; (p = p[v]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === y
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = v = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? g.firstChild : g.lastChild]), a && m)
                            ) {
                              for (
                                x =
                                  (d =
                                    (c =
                                      (l =
                                        (f = (p = g)[b] || (p[b] = {}))[
                                          p.uniqueID
                                        ] || (f[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && c[1]) && c[2],
                                  p = d && g.childNodes[d];
                                (p =
                                  (++d && p && p[v]) || (x = d = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++x && p === t) {
                                  l[e] = [T, d, x];
                                  break;
                                }
                            } else if (
                              (m &&
                                (x = d =
                                  (c =
                                    (l =
                                      (f = (p = t)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && c[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (p =
                                  (++d && p && p[v]) ||
                                  (x = d = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? p.nodeName.toLowerCase() !== y
                                  : 1 !== p.nodeType) ||
                                  !++x ||
                                  (m &&
                                    ((l =
                                      (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                      (f[p.uniqueID] = {}))[e] = [T, x]),
                                  p !== t));

                              );
                            return (x -= o) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      o =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return o[b]
                      ? o(t)
                      : o.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var r, i = o(e, t), a = i.length; a--; )
                                e[(r = R(e, i[a]))] = !(n[r] = i[a]);
                            })
                          : function (e) {
                              return o(e, 0, n);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(B, "$1"));
                    return r[b]
                      ? ce(function (e, t, n, o) {
                          for (
                            var i, a = r(e, null, o, []), s = e.length;
                            s--;

                          )
                            (i = a[s]) && (e[s] = !(t[s] = i));
                        })
                      : function (e, o, i) {
                          return (
                            (t[0] = e),
                            r(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || o(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      G.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === d.activeElement &&
                      (!d.hasFocus || d.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ve(!1),
                  disabled: ve(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return K.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = de(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function me() {}
            function xe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function be(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = C++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, u) {
                    var c,
                      l,
                      f,
                      p = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((l =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((c = l[i]) && c[0] === T && c[1] === s)
                              return (p[2] = c[2]);
                            if (((l[i] = p), (p[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, c = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
              return a;
            }
            function Ce(e, t, n, r, o, i) {
              return (
                r && !r[b] && (r = Ce(r)),
                o && !o[b] && (o = Ce(o, i)),
                ce(function (i, a, s, u) {
                  var c,
                    l,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    v =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || (!i && t) ? v : Te(v, p, e, s, u),
                    y = n ? (o || (i ? e : h || r) ? [] : a) : g;
                  if ((n && n(g, y, s, u), r))
                    for (c = Te(y, d), r(c, [], s, u), l = c.length; l--; )
                      (f = c[l]) && (y[d[l]] = !(g[d[l]] = f));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (c = [], l = y.length; l--; )
                          (f = y[l]) && c.push((g[l] = f));
                        o(null, (y = []), c, u);
                      }
                      for (l = y.length; l--; )
                        (f = y[l]) &&
                          (c = o ? R(i, f) : p[l]) > -1 &&
                          (i[c] = !(a[c] = f));
                    }
                  } else (y = Te(y === a ? y.splice(h, y.length) : y)), o ? o(null, a, y, u) : q.apply(a, y);
                })
              );
            }
            function Se(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  l = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = be(
                    function (e) {
                      return R(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  p = [
                    function (e, n, r) {
                      var o =
                        (!a && (r || n !== c)) ||
                        ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                      return (t = null), o;
                    },
                  ];
                u < i;
                u++
              )
                if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                    return Ce(
                      u > 1 && we(p),
                      u > 1 &&
                        xe(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(B, "$1"),
                      n,
                      u < o && Se(e.slice(u, o)),
                      o < i && Se((e = e.slice(o))),
                      o < i && xe(e)
                    );
                  }
                  p.push(n);
                }
              return we(p);
            }
            return (
              (me.prototype = r.filters = r.pseudos),
              (r.setFilters = new me()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    o,
                    i,
                    a,
                    s,
                    u,
                    c,
                    l = E[e + " "];
                  if (l) return t ? 0 : l.slice(0);
                  for (s = e, u = [], c = r.preFilter; s; ) {
                    for (a in ((n && !(o = _.exec(s))) ||
                      (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                    (n = !1),
                    (o = U.exec(s)) &&
                      ((n = o.shift()),
                      i.push({ value: n, type: o[0].replace(B, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(o = V[a].exec(s)) ||
                        (c[a] && !(o = c[a](o))) ||
                        ((n = o.shift()),
                        i.push({ value: n, type: a, matches: o }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : E(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    o = [],
                    i = [],
                    s = j[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Se(t[n]))[b] ? o.push(s) : i.push(s);
                    (s = j(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          o = e.length > 0,
                          i = function (i, a, s, u, l) {
                            var f,
                              h,
                              g,
                              y = 0,
                              m = "0",
                              x = i && [],
                              b = [],
                              w = c,
                              C = i || (o && r.find.TAG("*", l)),
                              S = (T += null == w ? 1 : Math.random() || 0.1),
                              E = C.length;
                            for (
                              l && (c = a == d || a || l);
                              m !== E && null != (f = C[m]);
                              m++
                            ) {
                              if (o && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == d ||
                                      (p(f), (s = !v));
                                  (g = e[h++]);

                                )
                                  if (g(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                  }
                                l && (T = S);
                              }
                              n && ((f = !g && f) && y--, i && x.push(f));
                            }
                            if (((y += m), n && m !== y)) {
                              for (h = 0; (g = t[h++]); ) g(x, b, a, s);
                              if (i) {
                                if (y > 0)
                                  for (; m--; )
                                    x[m] || b[m] || (b[m] = O.call(u));
                                b = Te(b);
                              }
                              q.apply(u, b),
                                l &&
                                  !i &&
                                  b.length > 0 &&
                                  y + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return l && ((T = S), (c = w)), x;
                          };
                        return n ? ce(i) : i;
                      })(i, o)
                    )),
                      (s.selector = e);
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, o) {
                  var i,
                    u,
                    c,
                    l,
                    f,
                    p = "function" == typeof e && e,
                    d = !o && a((e = p.selector || e));
                  if (((n = n || []), 1 === d.length)) {
                    if (
                      (u = d[0] = d[0].slice(0)).length > 2 &&
                      "ID" === (c = u[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      i = V.needsContext.test(e) ? 0 : u.length;
                      i-- && ((c = u[i]), !r.relative[(l = c.type)]);

                    )
                      if (
                        (f = r.find[l]) &&
                        (o = f(
                          c.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ye(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(i, 1), !(e = o.length && xe(u))))
                          return q.apply(n, o), n;
                        break;
                      }
                  }
                  return (
                    (p || s(e, d))(
                      o,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && ye(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(A).join("") === b),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = le(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              le(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                le(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              le(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(H, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (S.find = j),
            (S.expr = j.selectors),
            (S.expr[":"] = S.expr.pseudos),
            (S.uniqueSort = S.unique = j.uniqueSort),
            (S.text = j.getText),
            (S.isXMLDoc = j.isXML),
            (S.contains = j.contains),
            (S.escapeSelector = j.escape);
          var k = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && S(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            A = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            N = S.expr.match.needsContext;
          function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var O =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e, t, n) {
            return y(t)
              ? S.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? S.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? S.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
                })
              : S.filter(t, e, n);
          }
          (S.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            S.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    S(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (S.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  S.find(e, o[t], n);
                return r > 1 ? S.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(
                  this,
                  "string" == typeof e && N.test(e) ? S(e) : e || [],
                  !1
                ).length;
              },
            });
          var q,
            P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || q), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : P.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(
                    this,
                    S.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0
                    )
                  ),
                  O.test(r[1]) && S.isPlainObject(t))
                )
                  for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = x.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this);
          }).prototype = S.fn),
            (q = S(x));
          var R = /^(?:parents|prev(?:Until|All))/,
            H = { children: !0, contents: !0, next: !0, prev: !0 };
          function I(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function (e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && S(e);
              if (!N.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && S.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? S.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? l.call(S(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            S.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return k(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return k(e, "parentNode", n);
                },
                next: function (e) {
                  return I(e, "nextSibling");
                },
                prev: function (e) {
                  return I(e, "previousSibling");
                },
                nextAll: function (e) {
                  return k(e, "nextSibling");
                },
                prevAll: function (e) {
                  return k(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return k(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return k(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return A((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return A(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (D(e, "template") && (e = e.content || e),
                      S.merge([], e.childNodes));
                },
              },
              function (e, t) {
                S.fn[e] = function (n, r) {
                  var o = S.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = S.filter(r, o)),
                    this.length > 1 &&
                      (H[e] || S.uniqueSort(o), R.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var M = /[^\x20\t\r\n\f]+/g;
          function F(e) {
            return e;
          }
          function W(e) {
            throw e;
          }
          function $(e, t, n, r) {
            var o;
            try {
              e && y((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && y((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      S.each(e.match(M) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              u = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        S.each(n, function (n, r) {
                          y(r)
                            ? (e.unique && c.has(r)) || i.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    S.each(arguments, function (e, t) {
                      for (var n; (n = S.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? S.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return c;
          }),
            S.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      S.Callbacks("memory"),
                      S.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return S.Deferred(function (n) {
                        S.each(t, function (t, r) {
                          var o = y(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            u = arguments,
                            c = function () {
                              var r, c;
                              if (!(e < i)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  y(c)
                                    ? o
                                      ? c.call(r, a(i, t, F, o), a(i, t, W, o))
                                      : (i++,
                                        c.call(
                                          r,
                                          a(i, t, F, o),
                                          a(i, t, W, o),
                                          a(i, t, F, t.notifyWith)
                                        ))
                                    : (n !== F && ((s = void 0), (u = [r])),
                                      (o || t.resolveWith)(s, u));
                              }
                            },
                            l = o
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (r) {
                                    S.Deferred.exceptionHook &&
                                      S.Deferred.exceptionHook(r, l.stackTrace),
                                      e + 1 >= i &&
                                        (n !== W && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? l()
                            : (S.Deferred.getStackHook &&
                                (l.stackTrace = S.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return S.Deferred(function (r) {
                        t[0][3].add(a(0, r, y(o) ? o : F, r.notifyWith)),
                          t[1][3].add(a(0, r, y(e) ? e : F)),
                          t[2][3].add(a(0, r, y(n) ? n : W));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? S.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  S.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = S.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  ($(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || y(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) $(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              B.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (S.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var _ = S.Deferred();
          function U() {
            x.removeEventListener("DOMContentLoaded", U),
              r.removeEventListener("load", U),
              S.ready();
          }
          (S.fn.ready = function (e) {
            return (
              _.then(e).catch(function (e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0),
                  (!0 !== e && --S.readyWait > 0) || _.resolveWith(x, [S]));
              },
            }),
            (S.ready.then = _.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? r.setTimeout(S.ready)
              : (x.addEventListener("DOMContentLoaded", U),
                r.addEventListener("load", U));
          var z = function (e, t, n, r, o, i, a) {
              var s = 0,
                u = e.length,
                c = null == n;
              if ("object" === T(n))
                for (s in ((o = !0), n)) z(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                y(r) || (a = !0),
                c &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(S(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
            },
            X = /^-ms-/,
            G = /-([a-z])/g;
          function V(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(X, "ms-").replace(G, V);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = S.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[Y(t)] = n;
                else for (r in t) o[Y(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in r
                      ? [t]
                      : t.match(M) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || S.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var J = new K(),
            Z = new K(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          S.extend({
            hasData: function (e) {
              return Z.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            S.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = Z.get(i)),
                    1 === i.nodeType && !J.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = Y(r.slice(5))), ne(i, r, o[r]));
                    J.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : z(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = Z.get(i, e)) ||
                            void 0 !== (n = ne(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            S.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = J.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = J.access(e, t, S.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = S._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        S.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            S.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = S.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = J.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), o.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ae = x.documentElement,
            se = function (e) {
              return S.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === S.css(e, "display"))
            );
          };
          function le(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return S.css(e, t, "");
                  },
              u = s(),
              c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
              l =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== c && +u)) &&
                oe.exec(S.css(e, t));
            if (l && l[3] !== c) {
              for (u /= 2, c = c || l[3], l = +u || 1; a--; )
                S.style(e, t, l + c),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (l /= i);
              (l *= 2), S.style(e, t, l + c), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +u || 0),
                (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = c), (r.start = l), (r.end = o))),
              o
            );
          }
          var fe = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = fe[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = S.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (fe[r] = o),
              o)
            );
          }
          function de(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = J.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && ce(r) && (o[i] = pe(r)))
                  : "none" !== n && ((o[i] = "none"), J.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          S.fn.extend({
            show: function () {
              return de(this, !0);
            },
            hide: function () {
              return de(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? S(this).show() : S(this).hide();
                  });
            },
          });
          var he,
            ve,
            ge = /^(?:checkbox|radio)$/i,
            ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
          (he = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (ve = x.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            he.appendChild(ve),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var xe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && D(e, t)) ? S.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            g.option ||
              (xe.optgroup = xe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Ce(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                c,
                l,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((i = e[d]) || 0 === i)
                if ("object" === T(i)) S.merge(p, i.nodeType ? [i] : i);
                else if (Te.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (ye.exec(i) || ["", ""])[1].toLowerCase(),
                      u = xe[s] || xe._default,
                      a.innerHTML = u[1] + S.htmlPrefilter(i) + u[2],
                      l = u[0];
                    l--;

                  )
                    a = a.lastChild;
                  S.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; (i = p[d++]); )
              if (r && S.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((c = se(i)),
                (a = be(f.appendChild(i), "script")),
                c && we(a),
                n)
              )
                for (l = 0; (i = a[l++]); ) me.test(i.type || "") && n.push(i);
            return f;
          }
          var Se = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function je() {
            return !1;
          }
          function ke(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ae(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Ae(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = je;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                (o = function (e) {
                  return S().off(e), a.apply(this, arguments);
                }),
                (o.guid = a.guid || (a.guid = S.guid++))),
              e.each(function () {
                S.event.add(this, t, o, r, n);
              })
            );
          }
          function Ne(e, t, n) {
            n
              ? (J.set(e, t, !1),
                S.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      o,
                      i = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i.length)
                        (S.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = s.call(arguments)),
                        J.set(this, t, i),
                        (r = n(this, t)),
                        this[t](),
                        i !== (o = J.get(this, t)) || r
                          ? J.set(this, t, !1)
                          : (o = {}),
                        i !== o)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          o && o.value
                        );
                    } else
                      i.length &&
                        (J.set(this, t, {
                          value: S.event.trigger(
                            S.extend(i[0], S.Event.prototype),
                            i.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && S.event.add(e, t, Ee);
          }
          (S.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                v,
                g = J.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && S.find.matchesSelector(ae, o),
                    n.guid || (n.guid = S.guid++),
                    (u = g.events) || (u = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== S && S.event.triggered !== t.type
                            ? S.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(M) || [""]).length;
                  c--;

                )
                  (d = v = (s = Se.exec(t[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = S.event.special[d] || {}),
                      (d = (o ? f.delegateType : f.bindType) || d),
                      (f = S.event.special[d] || {}),
                      (l = S.extend(
                        {
                          type: d,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && S.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                      (S.event.global[d] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                v,
                g = J.hasData(e) && J.get(e);
              if (g && (u = g.events)) {
                for (c = (t = (t || "").match(M) || [""]).length; c--; )
                  if (
                    ((d = v = (s = Se.exec(t[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = S.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = i = p.length;
                      i--;

                    )
                      (l = p[i]),
                        (!o && v !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (s && !s.test(l.namespace)) ||
                          (r &&
                            r !== l.selector &&
                            ("**" !== r || !l.selector)) ||
                          (p.splice(i, 1),
                          l.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, l));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                        S.removeEvent(e, d, g.handle),
                      delete u[d]);
                  } else for (d in u) S.event.remove(e, d + t[c], n, r, !0);
                S.isEmptyObject(u) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                c =
                  (J.get(this, "events") || Object.create(null))[u.type] || [],
                l = S.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, u))
              ) {
                for (
                  a = S.event.handlers.call(this, u, c), t = 0;
                  (o = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== i.namespace &&
                      !u.rnamespace.test(i.namespace)) ||
                      ((u.handleObj = i),
                      (u.data = i.data),
                      void 0 !==
                        (r = (
                          (S.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                c = e.target;
              if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? S(o, this).index(c) > -1
                          : S.find(o, this, null, [c]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: c, handlers: i });
                  }
              return (
                (c = this),
                u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Ne(t, "click", Ee),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Ne(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      J.get(t, "click")) ||
                    D(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (S.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function (e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : je),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: je,
              isPropagationStopped: je,
              isImmediatePropagationStopped: je,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            S.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              S.event.addProp
            ),
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              S.event.special[e] = {
                setup: function () {
                  return Ne(this, e, ke), !1;
                },
                trigger: function () {
                  return Ne(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            S.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      o = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (o && (o === r || S.contains(r, o))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            S.fn.extend({
              on: function (e, t, n, r) {
                return Ae(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ae(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    S(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = je),
                  this.each(function () {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var De = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function qe(e, t) {
            return (
              (D(e, "table") &&
                D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
              e
            );
          }
          function Pe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Re(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function He(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (s = J.get(e).events))
                for (o in (J.remove(t, "handle events"), s))
                  for (n = 0, r = s[o].length; n < r; n++)
                    S.event.add(t, o, s[o][n]);
              Z.hasData(e) &&
                ((i = Z.access(e)), (a = S.extend({}, i)), Z.set(t, a));
            }
          }
          function Ie(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Me(e, t, n, r) {
            t = u(t);
            var o,
              i,
              a,
              s,
              c,
              l,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              v = y(h);
            if (
              v ||
              (p > 1 && "string" == typeof h && !g.checkClone && Oe.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                v && (t[0] = h.call(this, o, i.html())), Me(i, t, n, r);
              });
            if (
              p &&
              ((i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (s = (a = S.map(be(o, "script"), Pe)).length; f < p; f++)
                (c = o),
                  f !== d &&
                    ((c = S.clone(c, !0, !0)),
                    s && S.merge(a, be(c, "script"))),
                  n.call(e[f], c, f);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, S.map(a, Re), f = 0;
                  f < s;
                  f++
                )
                  (c = a[f]),
                    me.test(c.type || "") &&
                      !J.access(c, "globalEval") &&
                      S.contains(l, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? S._evalUrl &&
                          !c.noModule &&
                          S._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            l
                          )
                        : w(c.textContent.replace(Le, ""), c, l));
            }
            return e;
          }
          function Fe(e, t, n) {
            for (
              var r, o = t ? S.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || S.cleanData(be(r)),
                r.parentNode &&
                  (n && se(r) && we(be(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          S.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  S.isXMLDoc(e)
                )
              )
                for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++)
                  Ie(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || be(e), a = a || be(s), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    He(i[r], a[r]);
                else He(e, s);
              return (
                (a = be(s, "script")).length > 0 &&
                  we(a, !u && be(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = S.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (Q(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? S.event.remove(n, r)
                          : S.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function (e) {
                return Fe(this, e, !0);
              },
              remove: function (e) {
                return Fe(this, e);
              },
              text: function (e) {
                return z(
                  this,
                  function (e) {
                    return void 0 === e
                      ? S.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Me(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    qe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Me(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (S.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return z(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !De.test(e) &&
                      !xe[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (S.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Me(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 &&
                      (S.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            S.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                S.fn[e] = function (e) {
                  for (
                    var n, r = [], o = S(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      S(o[a])[t](n),
                      c.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            $e = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            _e = new RegExp(ie.join("|"), "i");
          function Ue(e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.style;
            return (
              (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = S.style(e, t)),
                !g.pixelBoxStyles() &&
                  We.test(a) &&
                  _e.test(t) &&
                  ((r = s.width),
                  (o = s.minWidth),
                  (i = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = o),
                  (s.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function ze(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (l) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(c).appendChild(l);
                var e = r.getComputedStyle(l);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (l.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (l.style.position = "absolute"),
                  (i = 12 === t(l.offsetWidth / 3)),
                  ae.removeChild(c),
                  (l = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              u,
              c = x.createElement("div"),
              l = x.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === l.style.backgroundClip),
              S.extend(g, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s =
                        parseInt(o.height, 10) +
                          parseInt(o.borderTopWidth, 10) +
                          parseInt(o.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Xe = ["Webkit", "Moz", "ms"],
            Ge = x.createElement("div").style,
            Ve = {};
          function Ye(e) {
            var t = S.cssProps[e] || Ve[e];
            return (
              t ||
              (e in Ge
                ? e
                : (Ve[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                        n--;

                      )
                        if ((e = Xe[n] + t) in Ge) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Je = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function tt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += S.css(e, n + ie[a], !0, o)),
                r
                  ? ("content" === n &&
                      (u -= S.css(e, "padding" + ie[a], !0, o)),
                    "margin" !== n &&
                      (u -= S.css(e, "border" + ie[a] + "Width", !0, o)))
                  : ((u += S.css(e, "padding" + ie[a], !0, o)),
                    "padding" !== n
                      ? (u += S.css(e, "border" + ie[a] + "Width", !0, o))
                      : (s += S.css(e, "border" + ie[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function nt(e, t, n) {
            var r = $e(e),
              o =
                (!g.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, r),
              i = o,
              a = Ue(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (We.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!g.boxSizingReliable() && o) ||
                (!g.reliableTrDimensions() && D(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === S.css(e, "boxSizing", !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }
          function rt(e, t, n, r, o) {
            return new rt.prototype.init(e, t, n, r, o);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ue(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = Y(t),
                  u = Ke.test(t),
                  c = e.style;
                if (
                  (u || (t = Ye(s)),
                  (a = S.cssHooks[t] || S.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : c[t];
                "string" === (i = typeof n) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = le(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (S.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = Y(t);
              return (
                Ke.test(t) || (t = Ye(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = Ue(e, t, r)),
                "normal" === o && t in Ze && (o = Ze[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            S.each(["height", "width"], function (e, t) {
              S.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Qe.test(S.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, r)
                      : Be(e, Je, function () {
                          return nt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = $e(e),
                    a = !g.scrollboxSize() && "absolute" === i.position,
                    s =
                      (a || r) && "border-box" === S.css(e, "boxSizing", !1, i),
                    u = r ? tt(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          tt(e, t, "border", !1, i) -
                          0.5
                      )),
                    u &&
                      (o = oe.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = S.css(e, t))),
                    et(0, n, u)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = ze(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ue(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            S.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (S.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (S.cssHooks[e + t].set = et);
              }
            ),
            S.fn.extend({
              css: function (e, t) {
                return z(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = $e(e), o = t.length; a < o; a++)
                        i[t[a]] = S.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (S.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (S.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        S.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!S.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (S.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (S.fx = rt.prototype.init),
            (S.fx.step = {});
          var ot,
            it,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function ut() {
            it &&
              (!1 === x.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ut)
                : r.setTimeout(ut, S.fx.interval),
              S.fx.tick());
          }
          function ct() {
            return (
              r.setTimeout(function () {
                ot = void 0;
              }),
              (ot = Date.now())
            );
          }
          function lt(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function ft(e, t, n) {
            for (
              var r,
                o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function pt(e, t, n) {
            var r,
              o,
              i = 0,
              a = pt.prefilters.length,
              s = S.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (
                  var t = ot || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    r = 1 - (n / c.duration || 0),
                    i = 0,
                    a = c.tweens.length;
                  i < a;
                  i++
                )
                  c.tweens[i].run(r);
                return (
                  s.notifyWith(e, [c, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [c, 1, 0]),
                      s.resolveWith(e, [c]),
                      !1)
                );
              },
              c = s.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(
                  !0,
                  { specialEasing: {}, easing: S.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = S.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? c.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                      : s.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              l = c.props;
            for (
              !(function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = Y(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = S.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(l, c.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = pt.prefilters[i].call(c, e, l, c.opts)))
                return (
                  y(r.stop) &&
                    (S._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              S.map(l, ft, c),
              y(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              S.fx.timer(
                S.extend(u, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (S.Animation = S.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return le(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              y(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  v = e.nodeType && ce(e),
                  g = J.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = S._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), at.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !g || void 0 === g[r]) continue;
                      v = !0;
                    }
                    d[r] = (g && g[r]) || S.style(e, r);
                  }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = J.get(e, "display")),
                    "none" === (l = S.css(e, "display")) &&
                      (c
                        ? (l = c)
                        : (de([e], !0),
                          (c = e.style.display || c),
                          (l = S.css(e, "display")),
                          de([e]))),
                    ("inline" === l || ("inline-block" === l && null != c)) &&
                      "none" === S.css(e, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((l = h.display), (c = "none" === l ? "" : l))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (g
                        ? "hidden" in g && (v = g.hidden)
                        : (g = J.access(e, "fxshow", { display: c })),
                      i && (g.hidden = !v),
                      v && de([e], !0),
                      p.done(function () {
                        for (r in (v || de([e]), J.remove(e, "fxshow"), d))
                          S.style(e, r, d[r]);
                      })),
                      (u = ft(v ? g[r] : 0, r, p)),
                      r in g ||
                        ((g[r] = u.start),
                        v && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (S.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? S.extend({}, e)
                  : {
                      complete: n || (!n && t) || (y(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !y(t) && t),
                    };
              return (
                S.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in S.fx.speeds
                      ? (r.duration = S.fx.speeds[r.duration])
                      : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  y(r.old) && r.old.call(this),
                    r.queue && S.dequeue(this, r.queue);
                }),
                r
              );
            }),
            S.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = S.isEmptyObject(e),
                  i = S.speed(t, n, r),
                  a = function () {
                    var t = pt(this, S.extend({}, e), i);
                    (o || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = S.timers,
                      a = J.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && st.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || S.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = S.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        S.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(["toggle", "show", "hide"], function (e, t) {
              var n = S.fn[t];
              S.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(lt(t, !0), e, r, o);
              };
            }),
            S.each(
              {
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                S.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (S.timers = []),
            (S.fx.tick = function () {
              var e,
                t = 0,
                n = S.timers;
              for (ot = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (ot = void 0);
            }),
            (S.fx.timer = function (e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function () {
              it || ((it = !0), ut());
            }),
            (S.fx.stop = function () {
              it = null;
            }),
            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (S.fn.delay = function (e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var dt,
            ht = S.expr.attrHandle;
          S.fn.extend({
            attr: function (e, t) {
              return z(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === i && S.isXMLDoc(e)) ||
                        (o =
                          S.attrHooks[t.toLowerCase()] ||
                          (S.expr.match.bool.test(t) ? dt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = S.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && D(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(M);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (dt = {
              set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || S.find.attr;
              ht[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = ht[a]),
                    (ht[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (ht[a] = i)),
                  o
                );
              };
            });
          var vt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function yt(e) {
            return (e.match(M) || []).join(" ");
          }
          function mt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(M)) || [];
          }
          S.fn.extend({
            prop: function (e, t) {
              return z(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && S.isXMLDoc(e)) ||
                      ((t = S.propFix[t] || t), (o = S.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : vt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (S.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            S.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                S.propFix[this.toLowerCase()] = this;
              }
            ),
            S.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (y(e))
                  return this.each(function (t) {
                    S(this).addClass(e.call(this, t, mt(this)));
                  });
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = mt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      o !== (s = yt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (y(e))
                  return this.each(function (t) {
                    S(this).removeClass(e.call(this, t, mt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = mt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        for (; r.indexOf(" " + i + " ") > -1; )
                          r = r.replace(" " + i + " ", " ");
                      o !== (s = yt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : y(e)
                  ? this.each(function (n) {
                      S(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })
                  : this.each(function () {
                      var t, o, i, a;
                      if (r)
                        for (o = 0, i = S(this), a = xt(e); (t = a[o++]); )
                          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = mt(this)) && J.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : J.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + yt(mt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var bt = /\r/g;
          S.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = y(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, S(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = S.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        S.valHooks[this.type] ||
                        S.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    S.valHooks[o.type] ||
                    S.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(bt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : yt(S.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                      ) {
                        if (((t = S(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = S.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        S.inArray(S.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            S.each(["radio", "checkbox"], function () {
              (S.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in r);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                h = [n || x],
                v = d.call(e, "type") ? e.type : e,
                g = d.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !wt.test(v + S.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((g = v.split(".")), (v = g.shift()), g.sort()),
                  (c = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[S.expando]
                    ? e
                    : new S.Event(v, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (f = S.event.special[v] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !m(n)) {
                  for (
                    u = f.delegateType || v,
                      wt.test(u + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || x) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = i > 1 ? u : f.bindType || v),
                    (l =
                      (J.get(a, "events") || Object.create(null))[e.type] &&
                      J.get(a, "handle")) && l.apply(a, t),
                    (l = c && a[c]) &&
                      l.apply &&
                      Q(a) &&
                      ((e.result = l.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (c &&
                      y(n[v]) &&
                      !m(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (S.event.triggered = v),
                      e.isPropagationStopped() && p.addEventListener(v, Tt),
                      n[v](),
                      e.isPropagationStopped() && p.removeEventListener(v, Tt),
                      (S.event.triggered = void 0),
                      s && (n[c] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
              S.event.trigger(r, null, t);
            },
          }),
            S.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  S.event.simulate(t, e.target, S.event.fix(e));
                };
                S.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = J.access(r, t);
                    o || r.addEventListener(e, n, !0),
                      J.access(r, t, (o || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = J.access(r, t) - 1;
                    o
                      ? J.access(r, t, o)
                      : (r.removeEventListener(e, n, !0), J.remove(r, t));
                  },
                };
              });
          var Ct = r.location,
            St = { guid: Date.now() },
            Et = /\?/;
          S.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                S.error(
                  "Invalid XML: " +
                    (n
                      ? S.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var jt = /\[\]$/,
            kt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
          function Dt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              S.each(t, function (t, o) {
                n || jt.test(e)
                  ? r(e, o)
                  : Dt(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) Dt(e + "[" + o + "]", t[o], n, r);
          }
          (S.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = y(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Dt(n, e[n], t, o);
            return r.join("&");
          }),
            S.fn.extend({
              serialize: function () {
                return S.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = S.prop(this, "elements");
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(":disabled") &&
                      Nt.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? S.map(n, function (e) {
                          return { name: t.name, value: e.replace(kt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(kt, "\r\n") };
                  })
                  .get();
              },
            });
          var Ot = /%20/g,
            Lt = /#.*$/,
            qt = /([?&])_=[^&]*/,
            Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Rt = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            It = {},
            Mt = {},
            Ft = "*/".concat("*"),
            Wt = x.createElement("a");
          function $t(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(M) || [];
              if (y(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Bt(e, t, n, r) {
            var o = {},
              i = e === Mt;
            function a(s) {
              var u;
              return (
                (o[s] = !0),
                S.each(e[s] || [], function (e, s) {
                  var c = s(t, n, r);
                  return "string" != typeof c || i || o[c]
                    ? i
                      ? !(u = c)
                      : void 0
                    : (t.dataTypes.unshift(c), a(c), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function _t(e, t) {
            var n,
              r,
              o = S.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && S.extend(!0, e, r), e;
          }
          (Wt.href = Ct.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ft,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? _t(_t(e, S.ajaxSettings), t) : _t(S.ajaxSettings, e);
              },
              ajaxPrefilter: $t(It),
              ajaxTransport: $t(Mt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d = S.ajaxSetup({}, t),
                  h = d.context || d,
                  v = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                  g = S.Deferred(),
                  y = S.Callbacks("once memory"),
                  m = d.statusCode || {},
                  b = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!a)
                          for (a = {}; (t = Pt.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (g.promise(C),
                  (d.url = ((e || d.url || Ct.href) + "").replace(
                    Ht,
                    Ct.protocol + "//"
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = x.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        Wt.protocol + "//" + Wt.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = S.param(d.data, d.traditional)),
                  Bt(It, d, t, C),
                  c)
                )
                  return C;
                for (f in ((l = S.event && d.global) &&
                  0 == S.active++ &&
                  S.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Rt.test(d.type)),
                (o = d.url.replace(Lt, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(Ot, "+"))
                  : ((p = d.url.slice(o.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((o += (Et.test(o) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((o = o.replace(qt, "$1")),
                      (p = (Et.test(o) ? "&" : "?") + "_=" + St.guid++ + p)),
                    (d.url = o + p)),
                d.ifModified &&
                  (S.lastModified[o] &&
                    C.setRequestHeader("If-Modified-Since", S.lastModified[o]),
                  S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", d.contentType),
                C.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  C.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || c))
                  return C.abort();
                if (
                  ((T = "abort"),
                  y.add(d.complete),
                  C.done(d.success),
                  C.fail(d.error),
                  (n = Bt(Mt, d, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), l && v.trigger("ajaxSend", [C, d]), c)
                  )
                    return C;
                  d.async &&
                    d.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      C.abort("timeout");
                    }, d.timeout));
                  try {
                    (c = !1), n.send(b, E);
                  } catch (e) {
                    if (c) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, a, u) {
                  var f,
                    p,
                    x,
                    b,
                    w,
                    T = t;
                  c ||
                    ((c = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = u || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(d, C, a)),
                    !f &&
                      S.inArray("script", d.dataTypes) > -1 &&
                      S.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        c = {},
                        l = e.dataTypes.slice();
                      if (l[1])
                        for (a in e.converters)
                          c[a.toLowerCase()] = e.converters[a];
                      for (i = l.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = l.shift()))
                        )
                          if ("*" === i) i = u;
                          else if ("*" !== u && u !== i) {
                            if (!(a = c[u + " " + i] || c["* " + i]))
                              for (o in c)
                                if (
                                  (s = o.split(" "))[1] === i &&
                                  (a = c[u + " " + s[0]] || c["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = c[o])
                                    : !0 !== c[o] &&
                                      ((i = s[0]), l.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(d, b, C, f)),
                    f
                      ? (d.ifModified &&
                          ((w = C.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[o] = w),
                          (w = C.getResponseHeader("etag")) && (S.etag[o] = w)),
                        204 === e || "HEAD" === d.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = b.state), (p = b.data), (f = !(x = b.error))))
                      : ((x = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    f
                      ? g.resolveWith(h, [p, T, C])
                      : g.rejectWith(h, [C, T, x]),
                    C.statusCode(m),
                    (m = void 0),
                    l &&
                      v.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        C,
                        d,
                        f ? p : x,
                      ]),
                    y.fireWith(h, [C, T]),
                    l &&
                      (v.trigger("ajaxComplete", [C, d]),
                      --S.active || S.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
              },
            }),
            S.each(["get", "post"], function (e, t) {
              S[t] = function (e, n, r, o) {
                return (
                  y(n) && ((o = o || r), (r = n), (n = void 0)),
                  S.ajax(
                    S.extend(
                      { url: e, type: t, dataType: o, data: n, success: r },
                      S.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            S.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (S._evalUrl = function (e, t, n) {
              return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  S.globalEval(e, t, n);
                },
              });
            }),
            S.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (y(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return y(e)
                  ? this.each(function (t) {
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function (e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (S.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Ut = { 0: 200, 1223: 204 },
            zt = S.ajaxSettings.xhr();
          (g.cors = !!zt && "withCredentials" in zt),
            (g.ajax = zt = !!zt),
            S.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (zt && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? i(0, "error")
                              : i(s.status, s.statusText)
                            : i(
                                Ut[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            S.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            S.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = S("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Xt,
            Gt = [],
            Vt = /(=)\?(?=&|$)|\?\?/;
          S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Gt.pop() || S.expando + "_" + St.guid++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Vt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Vt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Vt, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || S.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? S(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(o)),
                      a && y(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Xt = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Xt.childNodes.length)),
            (S.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t =
                          x.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = x.location.href),
                        t.head.appendChild(r))
                      : (t = x)),
                  (i = !n && []),
                  (o = O.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Ce([e], t, i)),
                      i && i.length && S(i).remove(),
                      S.merge([], o.childNodes)));
              var r, o, i;
            }),
            (S.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
                y(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  S.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? S("<div>").append(S.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (S.expr.pseudos.animated = function (e) {
              return S.grep(S.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c = S.css(e, "position"),
                  l = S(e),
                  f = {};
                "static" === c && (e.style.position = "relative"),
                  (s = l.offset()),
                  (i = S.css(e, "top")),
                  (u = S.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (i + u).indexOf("auto") > -1
                    ? ((a = (r = l.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                  y(t) && (t = t.call(e, n, S.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + o),
                  "using" in t ? t.using.call(e, f) : l.css(f);
              },
            }),
            S.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        S.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === S.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = S(e).offset()).top += S.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += S.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - S.css(r, "marginTop", !0),
                    left: t.left - o.left - S.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === S.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            S.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function (r) {
                  return z(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (m(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            S.each(["top", "left"], function (e, t) {
              S.cssHooks[t] = ze(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ue(e, t)), We.test(n) ? S(e).position()[t] + "px" : n
                  );
              });
            }),
            S.each({ Height: "height", Width: "width" }, function (e, t) {
              S.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  S.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                      s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return z(
                      this,
                      function (t, n, o) {
                        var i;
                        return m(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((i = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              i["scroll" + e],
                              t.body["offset" + e],
                              i["offset" + e],
                              i["client" + e]
                            ))
                          : void 0 === o
                          ? S.css(t, n, s)
                          : S.style(t, n, o, s);
                      },
                      t,
                      a ? o : void 0,
                      a
                    );
                  };
                }
              );
            }),
            S.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                S.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            S.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            S.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                S.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (S.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = s.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || S.guid++),
                o
              );
          }),
            (S.holdReady = function (e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = D),
            (S.isFunction = y),
            (S.isWindow = m),
            (S.camelCase = Y),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
              var t = S.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (S.trim = function (e) {
              return null == e ? "" : (e + "").replace(Yt, "");
            }),
            void 0 ===
              (n = function () {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var Qt = r.jQuery,
            Kt = r.$;
          return (
            (S.noConflict = function (e) {
              return (
                r.$ === S && (r.$ = Kt),
                e && r.jQuery === S && (r.jQuery = Qt),
                S
              );
            }),
            void 0 === o && (r.jQuery = r.$ = S),
            S
          );
        });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (function () {
      "use strict";
      n(9755), n(4916), n(3123);
      var e = n(9755);
      e(document).ready(function () {
        if (e("#back-to-top").length) {
          var t =
              e(".presentation-video").innerHeight() +
              e(".approach-alt-card").innerHeight() -
              100,
            n = function () {
              e(window).scrollTop() > t
                ? e("#back-to-top").addClass("show")
                : e("#back-to-top").removeClass("show");
            };
          n(),
            e(window).on("scroll", function () {
              n();
            }),
            e("#back-to-top").on("click", function (t) {
              t.preventDefault(), e("html,body").animate({ scrollTop: 0 }, 700);
            });
        }
        function r() {
          if (e(window).width() < 1024) var t = 62;
          else t = 70;
          var n = e(document).scrollTop() + t + 10;
          e('.header-nav a[href^="#"]').each(function () {
            var t = e(this);
            e(t.attr("href")).position().top < n
              ? (e('.header-nav a[href^="#"]').parent().removeClass("active"),
                t.parent().addClass("active"))
              : t.parent().removeClass("active");
          });
        }
        e(".btn-menu").click(function () {
          e(this).toggleClass("clicked"),
            e(".header-wrap").toggleClass("active"),
            e("html, body").toggleClass("overflow"),
            e(".header-nav").slideToggle();
        }),
          e(window).scrollTop() >= 50
            ? e(".header-wrap").addClass("header-scroll")
            : e(".header-wrap").removeClass("header-scroll"),
          e(window).scroll(function () {
            e(window).scrollTop() >= 50
              ? e(".header-wrap").addClass("header-scroll")
              : e(".header-wrap").removeClass("header-scroll");
          }),
          e(document).on("scroll", r),
          e('.header-nav a[href^="#"]').on("click", function (t) {
            t.preventDefault,
              e(".header-wrap").removeClass("active"),
              e("html, body").removeClass("overflow"),
              e(".header-nav").slideUp();
            var n = this.hash;
            if ((($target = e(n)), e(window).width() < 1024)) var r = 62;
            else if ("#technology" == n) r = -280;
            else r = 70;
            e("html, body")
              .stop()
              .animate(
                { scrollTop: $target.offset().top - r },
                500,
                "swing",
                function () {
                  window.location.hash = n;
                }
              );
          }),
          e(window).on("load", function () {
            var t = window.location.href.split("#")[1];
            if (e(window).width() < 1024) var n = 62;
            else if ("technology" == t) n = -280;
            else n = 70;
            t &&
              e("#" + t).length &&
              e("html,body").animate(
                { scrollTop: e("#" + t).offset().top - n },
                500
              );
          }),
          e(".anchor-link").on("click", function (t) {
            var n = this.hash;
            if ((($target = e(n)), e(window).width() < 1024)) var o = 62;
            else o = 70;
            e("html, body")
              .stop()
              .animate(
                { scrollTop: $target.offset().top - o },
                500,
                "swing",
                function () {
                  (window.location.hash = n), e(document).on("scroll", r);
                }
              );
          });
      });
    })();
})();
