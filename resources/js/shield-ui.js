/* Shield UI Lite 1.7.10 | Copyright 2013-2015 Shield UI Ltd. | https://www.shieldui.com */ ! function(a, g, l) {
    "use strict";

    function $(a) {
        var b, c = "";
        a = Math.abs(a);
        do b = a % 26, c = String.fromCharCode(b + 97) + c, a = (a - b) / 26; while (a > 0);
        return c
    }

    function S() {
        return A + $(O++)
    }

    function Z() {
        return P++
    }

    function W() {
        var b = [8, 9, "a", "b"],
            a = function() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            };
        return a() + a() + "-" + a() + "-4" + a().substr(0, 3) + "-" + b[Math.floor(4 * Math.random())] + a().substr(0, 3) + "-" + a() + a() + a()
    }

    function V(a, b) {
        return typeof Globalize === f && typeof Globalize.format === f ? Globalize.parseDate(a, b) : new Date(a)
    }

    function T(a) {
        var c;
        return c = b.defined(a) && typeof Globalize === f && typeof Globalize.parseFloat === f ? Globalize.parseFloat(a) : Number(a), isNaN(c) ? null : c
    }

    function x(c) {
        if (!b.defined(c) || "" === c) return "";
        var d = /\{([\.\d\w\:\-\/\' \[\]]+)\}/g,
            a = arguments,
            e = a && a.length > 1 && typeof a[1] === r,
            g = typeof Globalize === f && typeof Globalize.format === f;
        return c.replace(d, function(i, b) {
            var c, d, f = b.indexOf(":");
            if (f > 0) {
                var h = b;
                b = h.substring(0, f), d = h.substring(f + 1)
            }
            return c = e ? /^\d+$/.test(b) ? a[parseInt(b, 10) + 1] : D(a[1], b) : a[parseInt(b, 10) + 1], d && g && (c = Globalize.format(c, d)), c
        })
    }

    function t(a) {
        if (b.func(a)) {
            var c = [].slice.call(arguments);
            return c.shift(), a.apply(this, c)
        }
        return x.apply(this, arguments)
    }

    function K() {
        return typeof Globalize === f && Globalize.cultures && Globalize.cultures[Globalize.cultureSelector] && Globalize.cultures[Globalize.cultureSelector].calendar ? Globalize.cultures[Globalize.cultureSelector].calendar : {
            days: {
                names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
            },
            firstDay: 0,
            months: {
                names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
            }
        }
    }

    function R() {
        return typeof Globalize === f && Globalize.cultures && Globalize.cultures[Globalize.cultureSelector] && Globalize.cultures[Globalize.cultureSelector].numberFormat ? Globalize.cultures[Globalize.cultureSelector].numberFormat.currency : {
            pattern: ["($n)", "$n"],
            decimals: 2,
            groupSizes: [3],
            ",": ",",
            ".": ".",
            symbol: "$"
        }
    }

    function Q(b, a) {
        if (a = a !== l ? a : m.dieOnError) throw new Error(b);
        g.console && g.console.error && console.error(b)
    }

    function d(a) {
        var b = Object.prototype.toString.call(a);
        return null === a ? "null" : a === l ? "undefined" : b.substr(8, b.length - 9).toLowerCase()
    }

    function s(f) {
        var g, h, e, i, c, k = Array.apply(null, arguments),
            m = b.array(f) && f.length && !y(f, function(a) {
                return !b.func(a)
            }).length,
            d = k[1],
            n = function(a, b) {
                return a instanceof b
            };
        if (!m) return j.apply(a, k);
        for (b.object(d) || b.array(d) || (d = {}), h = 2; h < k.length; h++)
            if (g = k[h])
                for (e in g) g.hasOwnProperty(e) && (c = g[e], i = d[e], c && y(f, z(n, null, c)).length ? d[e] = c : b.object(c) || b.array(c) ? (b.object(i) || (i = d[e] = b.array(c) ? [] : {}), d[e] = s(f, i, c)) : b.date(c) ? d[e] = new Date(c.getTime()) : c !== l && (d[e] = c));
        return d
    }

    function B(b) {
        var a, c = [];
        for (a in b) b.hasOwnProperty(a) && c.push(a);
        return c
    }

    function D(d, a) {
        var c;
        if (!b.string(a)) throw new Error("shield.get: parameter 'path' must be a string.");
        if (a = G(a), c = I[a]) return c(d);
        try {
            c = new Function("a", "try{return a" + a + "}catch(e){return arguments[1];}")
        } catch (e) {
            throw new Error("shield.get: invalid 'path' parameter")
        }
        return I[a] = c, c(d)
    }

    function N(d, a, e) {
        var c;
        if (!b.string(a)) throw new Error("shield.set: parameter 'path' must be a string");
        if (a = G(a), c = E[a]) return c(d, e);
        try {
            c = new Function("obj,val", "obj" + a + "=val;")
        } catch (f) {
            throw new Error("shield.set: invalid 'path' parameter")
        }
        return E[a] = c, c(d, e), d
    }

    function G(g) {
        var d, b, f, a, e, c = g.split(".");
        for (b = 0, f = c.length; f > b; b++) a = c[b], d = a.indexOf("["), a && (0 > d ? (e = a.indexOf("'") < 0 ? "'" : '"', a = c[b] = "[" + e + a + e + "]") : d > 0 && (a = c[b] = "." + a));
        return c.join("")
    }

    function M(b, c) {
        m.ui[b] = c, a.fn[A + b] = function(d) {
            var e, g = this;
            return typeof d === F ? (e = [].slice.call(arguments, 1), this.each(function() {
                var c, h, i = a.data(this, n);
                if (!i) throw new Error(t("shield: cannot call method '{0}' on uninitialized {1}.", d, b));
                if (c = i[d], typeof c !== f) throw new Error(t("shield: cannot find method '{0}' of {1}", d, b));
                return h = c.apply(i, e), h !== l ? (g = h, !1) : void 0
            }), g) : this.each(function() {
                var e = new c(this, d);
                a(this).data(n, e), a(this).data(n + "-" + b, e)
            })
        }
    }

    function h(a) {
        a ? e.onselectstart == h.handler && (e.onselectstart = h.onselectstart, e.ondragstart = h.ondragstart) : e.onselectstart != h.handler && (h.onselectstart = e.onselectstart, h.ondragstart = e.ondragstart, e.onselectstart = e.ondragstart = h.handler)
    }
    var m = g.shield = g.shield || {},
        j = a.extend,
        y = a.grep,
        z = a.proxy,
        c = navigator.userAgent,
        e = document,
        A = "shield",
        n = "shieldWidget",
        r = "object",
        F = "string",
        f = "function",
        u = "array",
        v = "number",
        J = "date",
        L = "boolean",
        C = "null",
        H = "undefined",
        q = function() {},
        O = 1200,
        P = 1e3,
        i = {},
        I = {},
        E = {},
        o = function() {},
        U = {
            SVG_NS: "http://www.w3.org/2000/svg",
            KeyCode: {
                BACK: 8,
                TAB: 9,
                ENTER: 13,
                CTRL: 17,
                ESC: 27,
                SPACE: 32,
                PAGEUP: 33,
                PAGEDOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DEL: 46
            }
        };
    o.extend = function(a) {
        var f, b, c, h, g = this,
            e = a && a.init ? a.init : function() {
                g.apply(this, arguments)
            },
            i = function() {};
        i.prototype = g.prototype, f = e.fn = e.prototype = new i;
        for (b in a) a.hasOwnProperty(b) && (c = a[b], h = d(c), c && typeof c === r ? f[b] = j(!0, h === u ? [] : {}, g.prototype[b], c) : f[b] = c);
        return f.constructor = e, e.extend = g.extend, e
    }, Date.prototype.toISOString || ! function() {
        function a(b) {
            var a = String(b);
            return 1 === a.length && (a = "0" + a), a
        }
        Date.prototype.toISOString = function() {
            return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
        }
    }(), a.fn.swidget = function(c) {
        var b = this.map(function(b) {
            return c ? a(this).data(n + "-" + c) : a(this).data(n)
        }).get();
        return b.length ? b.length > 1 ? b : b[0] : null
    };
    var k = o.extend({
            init: function(b) {
                var a, d = this,
                    c = (b || {}).events;
                d.events = {}, b = b || {};
                for (a in c) typeof c[a] === f && d.on(a, c[a])
            },
            on: function(a, f, m) {
                var c, l, e, k, g, h = this,
                    j = h.events,
                    d = p.array(a),
                    i = b.func(f);
                if (b.object(a)) {
                    d = [];
                    for (g in a) a.hasOwnProperty(g) && d.push(g);
                    i = !1, f = a
                }
                for (e = 0, k = d.length; k > e; e++) a = d[e], c = i ? f : f[a], b.func(c) && (m && (l = c, c = h._one(a, c)), (j[a] || (j[a] = [])).push(c));
                return h
            },
            _one: function(b, c) {
                var d = this,
                    a = function() {
                        d.off(b, a), c.apply(this, arguments)
                    };
                return a
            },
            one: function(a, b) {
                this.on(a, b, !0)
            },
            off: function(a, f) {
                var c, i, e, d, h, j = this,
                    k = j.events,
                    g = p.array(a),
                    l = b.func(f);
                if (b.object(a)) {
                    g = [];
                    for (h in a) a.hasOwnProperty(h) && g.push(h);
                    l = !1, f = a
                }
                for (e = 0; e < g.length; e++) {
                    if (a = g[e], c = k[a] || [], i = l ? f : (f || {})[a])
                        for (d = c.length - 1; d >= 0; d--) c[d] === i && c.splice(d, 1);
                    else c.length = 0;
                    c.length || delete k[a]
                }
                return j
            },
            trigger: function(e, f) {
                var a, b, c = this,
                    d = (c.events[e] || []).slice();
                for (a = 0, b = d.length; b > a; a++) d[a].apply(c, [].slice.call(arguments, 1));
                return f
            },
            destroy: function() {
                this.events = {}
            }
        }),
        w = o.extend({
            init: function(c) {
                var a = !1,
                    b = !1;
                j(this, {
                    timeStamp: (new Date).getTime(),
                    isDefaultPrevented: function() {
                        return a
                    },
                    isPropagationStopped: function() {
                        return b
                    },
                    preventDefault: function() {
                        a = !0
                    },
                    stopPropagation: function() {
                        b = !0
                    }
                }, c)
            }
        }),
        X = k.extend({
            init: function(e, b) {
                var c = this,
                    d = c.constructor;
                b = b || {}, c.element = a(e), c.initialOptions = b, c.options = j(!0, {}, d.defaults, (d.themes || {})[b.theme], b), c._iid = Z(), k.fn.init.call(c, b)
            },
            getInstanceId: function() {
                return this._iid
            },
            refresh: function(a) {
                this.refreshWithElement(this.element, a)
            },
            refreshWithElement: function(b, c) {
                var a = this,
                    d = s([o], a.options, c);
                a.destroy(), a.init(b, d)
            },
            hide: function() {
                a(this.element).hide()
            },
            show: function() {
                a(this.element).show()
            },
            isVisible: function() {
                return a(this.element).is(":visible")
            },
            visible: function() {
                var a = this,
                    b = [].slice.call(arguments);
                return b.length > 0 ? void(b[0] ? a.show() : a.hide()) : a.isVisible()
            },
            focus: function() {
                a(this.element).focus()
            },
            trigger: function(g, c, h) {
                var d, e = this;
                return c = b.event(c) ? {
                    domEvent: c
                } : c, !c || !c.domEvent || c.domEvent instanceof a.Event || (c.domEvent = a.Event(c.domEvent)), d = new w(j({
                    type: g,
                    target: e
                }, c)), k.fn.trigger.call(e, g, d), typeof h !== f || d.isDefaultPrevented() || h.call(e, d), d
            }
        }),
        Y = k.extend({
            options: {
                total: 0,
                pageBuffer: 2,
                createContainer: q,
                getItems: q,
                eventNS: ".shieldVirtualized",
                skipRender: !1
            },
            init: function(d, c) {
                var b = this;
                c = b.options = j({}, b.options, c), b.element = a(d), k.fn.init.call(b, c), c.skipRender || b.render()
            },
            _elements: function() {
                var c, e, b = this,
                    f = b.element,
                    d = b.options;
                c = b.wrapper = f.off(d.eventNS).empty().css({
                    overflow: "auto",
                    position: "relative"
                }).on("scroll" + d.eventNS, z(b.scroll, b)).append("<div class='sui-virtualized' />").find(".sui-virtualized").css({
                    position: "relative",
                    overflow: "visible"
                }), e = b.container = a(d.createContainer(c)), c.children().css({
                    position: "absolute",
                    top: 0
                })
            },
            _dimensions: function() {
                var c = this,
                    d = c.options,
                    e = d.total,
                    a = d.itemHeight,
                    f = Math.min(e * a, m.support.maxElementHeight),
                    b = c.element.height(),
                    g = Math.ceil(b / a),
                    h = g * a,
                    i = f - b;
                return {
                    total: e,
                    itemHeight: a,
                    totalHeight: f,
                    viewportHeight: b,
                    itemsPerPage: g,
                    pageHeight: h,
                    totalScrollableHeight: i
                }
            },
            render: function() {
                var b, a = this,
                    d = a.element,
                    c = a.options;
                a._elements(), a.prevScroll = 0, b = a.dimensions = a._dimensions(), d.find(".sui-virtualized").height(b.totalHeight), a._renderItems(0, Math.min(c.total, (c.pageBuffer + 1) * b.itemsPerPage))
            },
            scroll: function() {
                var e, h, i, b = this,
                    m = b.options,
                    d = m.pageBuffer,
                    a = b.dimensions,
                    f = b.element.scrollTop(),
                    p = b.prevScroll,
                    j = f - p,
                    g = f / a.totalScrollableHeight,
                    k = b.wrapper.children(),
                    l = parseFloat(k.css("top")) || 0,
                    c = f - g * (a.pageHeight - a.viewportHeight),
                    o = j > 0 && c - l > (d / 4 + 1) * a.pageHeight,
                    n = 0 > j && c - l <= d / 4 * a.pageHeight;
                (n || o) && (h = Math.floor(g * a.total - g * a.itemsPerPage), e = Math.max(0, h - d / 2 * a.itemsPerPage), i = Math.min(a.total, e + (d + 1) * a.itemsPerPage), c = Math.max(0, c - (h - e) * a.itemHeight), b._renderItems(e, i, function() {
                    k.css("top", c)
                })), b.prevScroll = f
            },
            _renderItems: function(f, g, d) {
                var a, e, c = this,
                    h = c.options;
                h.getItems(f, g, function(g, f) {
                    for (f = b.defined(f) ? !!f : !0, f && c.container.empty(), a = 0, e = g.length; e > a; a++) c.container.append(g[a]);
                    d && d()
                })
            },
            destroy: function() {
                var a = this,
                    b = a.options;
                a.element.off(b.eventNS), a.element = null, b.createContainer = q, b.getItems = q, k.fn.destroy.call(a)
            }
        }),
        b = {
            string: function(a) {
                return d(a) === F
            },
            number: function(a) {
                return d(a) === v
            },
            integer: function(a) {
                return d(a) === v && /^[\+\-]?\d+$/.test(a + "")
            },
            "float": function(a) {
                return d(a) === v && /^[\+\-]?\d+\.\d+$/.test(a + "")
            },
            func: function(a) {
                return d(a) === f
            },
            object: function(a) {
                return d(a) === r
            },
            array: function(a) {
                return d(a) === u
            },
            date: function(a) {
                return d(a) === J
            },
            "boolean": function(a) {
                return d(a) === L
            },
            "null": function(a) {
                return d(a) === C
            },
            undefined: function(a) {
                return d(a) === H
            },
            defined: function(a) {
                return a !== l && null !== a
            },
            event: function(a) {
                return typeof g.Event == f && a instanceof g.Event || a && a.altKey !== l
            }
        },
        p = {
            "int": function(a, b) {
                return parseInt(a, b || 10)
            },
            "float": function(a) {
                return parseFloat(a)
            },
            number: function(a) {
                return T(a + "")
            },
            array: function(a) {
                return a instanceof Array ? a : a !== l ? [a] : []
            },
            string: function(a) {
                return a + ""
            },
            key: function(b) {
                var g, c, e, f, h = d(b);
                switch (h) {
                    case C:
                    case H:
                        return h;
                    case r:
                        return g = B(b).sort(), c = [], a.each(g, function(d, a) {
                            c.push(a + ":" + p.key(b[a]))
                        }), "{" + c.join(",") + "}";
                    case u:
                        for (c = "[", e = 0, f = b.length; f > e; e++) c += p.key(b[e]), f - 1 > e && (c += ",");
                        return c += "]";
                    case J:
                        return b.toISOString();
                    default:
                        return b + ""
                }
            }
        };
    ! function() {
        i.stableSort = function() {
            var a = "abcdefghijklmnopqrstuvwxyz";
            return "xyzvwtursopqmnklhijfgdeabc" == a.split("").sort(function(b, c) {
                return ~~(a.indexOf(c) / 2.3) - ~~(a.indexOf(b) / 2.3)
            }).join("")
        }(), i.scrollbar = function() {
            var b, a = e.createElement("div");
            return a.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both", a.innerHTML = "&nbsp;", e.body.appendChild(a), b = a.offsetWidth - a.scrollWidth, e.body.removeChild(a), b
        }, i.isRtl = function(b) {
            return a(b).closest(".sui-rtl").length > 0
        }, i.transitions = function() {
            var a, c = (e.body || e.documentElement).style,
                d = "Transition",
                f = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
            if (b.string(c[d.toLowerCase()])) return !0;
            for (a = 0; a < f.length; a++)
                if (b.string(c[f[a] + d])) return !0;
            return !1
        }()
    }(),
    function() {
        m.rAF = function(a) {
            return (g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || function(a) {
                return this.setTimeout(a, 1e3 / 60)
            }).call(g, a)
        }, m.cAF = function(a) {
            return (g.cancelAnimationFrame || g.clearTimeout)(a)
        }
    }(),
    function() {
        var b = /MSIE/i.test(c),
            d = /Trident/i.test(c),
            e = /Firefox/i.test(c),
            f = /Opera/i.test(c),
            g = /Safari/i.test(c),
            a = /Chrome/i.test(c),
            h = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c);
        i.browser = {
            ie: b || d,
            firefox: e,
            opera: f,
            safari: !a && g,
            chrome: a,
            mobile: h,
            version: b ? parseInt(c.substr(c.indexOf("MSIE ") + 5), 10) : d ? parseInt(c.substr(c.indexOf("rv:") + 3), 10) : e ? parseInt(c.substr(c.indexOf("Firefox/") + 8), 10) : f ? parseInt(c.substr(c.indexOf("Version/") + 8), 10) : a ? parseInt(c.substr(c.indexOf("Chrome/") + 7), 10) : g ? parseInt(c.substr(c.indexOf("Version/") + 8), 10) : 0
        }
    }(), a(function() {
        for (var b, f = 1e6, g = i.browser.firefox ? 6e6 : 1e9, c = a("<div style='display:none' />").appendTo(e.body), d = f;;) {
            if (b = d + f, c.css("height", b), b > g || c.height() !== b) break;
            d = b
        }
        c.remove(), i.maxElementHeight = d
    }), h.handler = function() {
        return !1
    }, j(m, {
        Class: o,
        Dispatcher: k,
        Event: w,
        Constants: U,
        format: t,
        formatString: x,
        parseDate: V,
        getCalendarInfo: K,
        getCurrencyInfo: R,
        error: Q,
        dieOnError: !0,
        strid: S,
        guid: W,
        support: i,
        extend: s,
        selection: h,
        type: d,
        is: b,
        to: p,
        keys: B,
        get: D,
        set: N,
        ui: j({}, m.ui || {}, {
            Widget: X,
            VirtualizedContainer: Y,
            plugin: M
        })
    })
}(jQuery, this),
function(c, h, T, f) {
    "use strict";

    function t(b, c) {
        var a, d, e = [];
        if (b.map) return b.map(c);
        for (a = 0, d = b.length; d > a; a++) e[a] = c(b[a], a, b);
        return e
    }

    function x(c, e, b, h, i) {
        var a = g(c, e);
        return a === f ? b && (a = d.def(b, h, i !== !1)) : a = d.convert(a, b), a
    }
    var O, P, p, e, u, b, y, q, r, J, G, F, E, d, n = h.Class,
        m = h.Dispatcher,
        K = Math.min,
        A = Math.max,
        a = h.is,
        z = h.to,
        g = h.get,
        B = h.set,
        o = (h.support, h.type),
        L = function() {},
        i = c.extend,
        k = c.proxy,
        j = c.each,
        C = c.grep,
        I = c.inArray,
        v = c.Deferred,
        w = "function",
        D = "array",
        M = "object",
        R = "string",
        l = "change",
        s = "error",
        Q = "start",
        N = "complete",
        S = "save",
        H = "afterset";
    O = n.extend({
        init: function(a) {
            this.data = a
        },
        read: function(b, a, c) {
            return a(this.data)
        },
        modify: function(b, a, c) {
            a()
        }
    }), P = n.extend({
        init: function(a, b) {
            this.options = a, this.cache = b
        },
        read: function(d, e, h) {
            var g, k = this.options,
                b = k.read,
                j = this.cache;
            return a.func(b) ? void b(d, e, h) : (b = a.string(b) ? {
                url: b
            } : i(!0, {}, b), a.func(b.data) && (d = b.data(d)), g = j.get(d), void(g !== f ? e(g, !0) : (b.data = d, b.error = h, b.success = function(a) {
                j.set(d, a), e(a)
            }, c.ajax(b))))
        },
        modify: function(h, m, o) {
            var d, b, l, f, e, p = this.options,
                j = p.modify || {},
                n = ["create", "update", "remove"],
                q = ["added", "edited", "removed"],
                g = [],
                r = function(a) {
                    return a.data
                };
            if (a.func(j)) return void j(h, m, o);
            for (e = 0; e < n.length; e++) l = n[e], f = q[e], b = j[l], h[f].length ? (a.string(b) && (b = {
                url: b,
                type: "POST"
            }), a.func(b) ? (d = g[e] = new v, b(h[f], k(d.resolve, d), k(d.reject, d))) : a.object(b) ? (b = i(!0, {}, b), a.func(b.data) ? b.data = b.data(h[f]) : (b.data = {}, b.data[f] = t(h[f], r)), d = g[e] = c.ajax(b)) : (d = g[e] = new v, d.resolve())) : (d = g[e] = new v, d.resolve());
            c.when.apply(c, g).then(m, o)
        }
    }), p = n.extend({
        init: function() {
            this.values = {}
        },
        get: function(a) {
            return this.values[z.key(a)]
        },
        set: function(b, a) {
            return this.values[z.key(b)] = a, a
        },
        remove: function(b) {
            var a = z.key(b),
                c = this.values[a];
            return delete this.values[a], c
        },
        clear: function() {
            this.values = []
        }
    }), p.noop = {
        get: L,
        set: L
    }, u = n.extend({
        init: function(b, c) {
            a.object(b) ? b = z.array(b) : a.string(b) && (b = [{
                path: b,
                desc: !!c
            }]), this._expr = b
        },
        build: function() {
            var b = this._expr,
                c = u.cache;
            return a.func(b) ? function(a) {
                return function(b, c) {
                    var d = a(b.item, c.item);
                    return 0 !== d ? d : b.index - c.index
                }
            }(b) : a.array(b) ? c.get(b) || c.set(b, function(b) {
                return function(k, l) {
                    var i, e, f, h, m, c, d, j;
                    for (h = 0, m = b.length; m > h; h++)
                        if (c = k.item, d = l.item, i = b[h] || {}, e = i.path, f = i.desc ? -1 : 1, a.string(e) ? (c = g(c, e), d = g(d, e)) : a.func(e) && (c = e(c), d = e(d)), a.date(c) && (c = c.getTime()), a.date(d) && (d = d.getTime()), c !== d && (null != c || null != d)) {
                            if (null == c) return -1 * f;
                            if (null == d) return 1 * f;
                            if (a.number(c) && a.number(d) || (c = c.toString(), d = d.toString()), c.localeCompare) {
                                if (j = c.localeCompare(d), 0 === j) continue;
                                return j * f
                            }
                            if (c > d) return 1 * f;
                            if (d > c) return -1 * f
                        }
                    return k.index - l.index
                }
            }(b)) : void 0
        }
    }), u.cache = new p, b = n.extend({
        init: function(a) {
            this._expr = a || []
        },
        build: function() {
            var c = this,
                e = b.cache,
                d = c._expr,
                a = c._func || (c._func = e.get(d));
            return a || (a = c._buildRecursive(d, !0), a && e.set(d, a)), a
        },
        _single: function(c) {
            var d;
            if (c) {
                if (a.func(c.filter)) return c.filter;
                if (d = b.filters[b.filterAliases[c.filter]]) return function(a, b, c, d) {
                    return function(e) {
                        return b(g(e, a), c, d)
                    }
                }(c.path, d, c.value, c.sensitive)
            }
        },
        _multiple: function(a, b) {
            return function(e) {
                var c, d = !0,
                    f = a.length;
                for (c = 0; f > c; c++)
                    if (d = a[c](e), b) {
                        if (!d) break
                    } else if (d) break;
                return d
            }
        },
        _buildRecursive: function(b, g) {
            var c, f, d = this,
                e = [];
            if (a.array(b)) {
                for (c = 0, f = b.length; f > c; c++) e.push(d._buildRecursive(b[c]));
                return e.length > 1 ? d._multiple(e, g) : e[0]
            }
            return b.and || b.or ? d._buildRecursive(b.and || b.or, !!b.and) : d._single(b)
        }
    }), b.cache = new p, b.normalize = {
        equatable: function(c, d, e) {
            return a.date(c) ? {
                a: c.getTime(),
                b: new Date(d).getTime()
            } : b.normalize.string(c, d, e)
        },
        string: function(a, b, c) {
            return {
                a: c ? a + "" : (a + "").toLowerCase(),
                b: c ? b + "" : (b + "").toLowerCase()
            }
        },
        scalar: function(b, c) {
            return a.date(b) ? {
                a: b.getTime(),
                b: new Date(c).getTime()
            } : isNaN(parseFloat(b)) ? {
                a: b,
                b: c
            } : {
                a: parseFloat(b),
                b: parseFloat(c)
            }
        }
    }, b.filters = {
        eq: function(c, d, e) {
            var a = b.normalize.equatable(c, d, e);
            return a.a === a.b
        },
        neq: function(c, d, e) {
            var a = b.normalize.equatable(c, d, e);
            return a.a !== a.b
        },
        con: function(c, d, e) {
            var a = b.normalize.string(c, d, e);
            return a.a.indexOf(a.b) > -1
        },
        notcon: function(c, d, e) {
            var a = b.normalize.string(c, d, e);
            return a.a.indexOf(a.b) < 0
        },
        starts: function(c, d, e) {
            var a = b.normalize.string(c, d, e);
            return 0 === a.a.indexOf(a.b)
        },
        ends: function(c, d, e) {
            var a = b.normalize.string(c, d, e);
            return a.a.indexOf(a.b) === a.a.length - a.b.length
        },
        gt: function(c, d) {
            var a = b.normalize.scalar(c, d);
            return a.a > a.b
        },
        lt: function(c, d) {
            var a = b.normalize.scalar(c, d);
            return a.a < a.b
        },
        gte: function(c, d) {
            var a = b.normalize.scalar(c, d);
            return a.a >= a.b
        },
        lte: function(c, d) {
            var a = b.normalize.scalar(c, d);
            return a.a <= a.b
        },
        isnull: function(a) {
            return null == a
        },
        notnull: function(a) {
            return null != a
        }
    }, b.filterAliases = {
        eq: "eq",
        equal: "eq",
        equals: "eq",
        "==": "eq",
        neq: "neq",
        ne: "neq",
        doesnotequal: "neq",
        notequal: "neq",
        notequals: "neq",
        "!=": "neq",
        con: "con",
        contains: "con",
        notcon: "notcon",
        doesnotcontain: "notcon",
        notcontains: "notcon",
        starts: "starts",
        startswith: "starts",
        ends: "ends",
        endswith: "ends",
        gt: "gt",
        greaterthan: "gt",
        ">": "gt",
        lt: "lt",
        lessthan: "lt",
        "<": "lt",
        gte: "gte",
        ge: "gte",
        greaterthanorequal: "gte",
        ">=": "gte",
        lte: "lte",
        le: "lte",
        lessthanorequal: "lte",
        "<=": "lte",
        isnull: "isnull",
        "null": "isnull",
        notnull: "notnull",
        isnotnull: "notnull"
    }, y = n.extend({
        init: function() {},
        build: function(b) {
            var d = this,
                c = y.cache,
                a = c.get(b);
            return a || (a = d._build(b), a && c.set(b, a)), a
        },
        _build: function(e) {
            if (!e) return null;
            var g = e.field,
                c = e.aggregate,
                b = e.type || Number,
                h = function(a) {
                    return a === f ? d.def(b) : d.convert(a, b)
                };
            return a.func(c) ? c : "count" == c ? function(a) {
                return a.length
            } : "sum" == c ? function(e) {
                var c, d, f = 0,
                    i = e.length;
                for (c = 0; i > c; c++) d = x(e[c], g, b), f += b == Date && a.date(d) ? d.getTime() : d;
                return h(f)
            } : "average" == c ? function(e) {
                var c, d, f = 0,
                    i = e.length;
                for (c = 0; i > c; c++) d = x(e[c], g, b), f += b == Date && a.date(d) ? d.getTime() : d;
                return h(f / i)
            } : "min" == c ? function(a) {
                return h(K.apply(null, t(a, function(a) {
                    return x(a, g, b)
                })))
            } : "max" == c ? function(a) {
                return h(A.apply(null, t(a, function(a) {
                    return x(a, g, b)
                })))
            } : f
        }
    }), y.cache = new p, e = n.extend({
        init: function(c, d, f, g, e) {
            var b = this;
            b.data = c, b.total = null != d ? d : c ? c.length : 0, b.aggregates = f, b.groups = g, b.indices = a.array(e) ? e.slice(0) : t(c || [], function(b, a) {
                return a
            })
        },
        filter: function(k) {
            var c, h, f, a = this,
                i = new b(k).build(),
                g = a.data,
                d = [],
                j = [];
            if (i) {
                for (c = 0, h = g.length; h > c; c++) f = g[c], i(f) && (d.push(f), j.push(a.indices[c]));
                a.indices = j
            } else d = g.slice(0);
            return new e(d, d.length, a.aggregates, a.groups, a.indices)
        },
        aggregate: function(c) {
            var d, f, g, h, b = this,
                k = new y,
                j = b.data;
            for (a.array(c) || (c = [c]), b.aggregates = [], d = 0; d < c.length; d++) f = c[d], g = k.build(f), g && (h = g(j, f)), b.aggregates.push(i({}, f, {
                value: h
            }));
            return new e(j.slice(0), b.total, b.aggregates, b.groups, b.indices)
        },
        aggregateGroups: function(c) {
            var a = this,
                b = a.data.slice(0),
                d = new e(a._getInnerMostItems(b), null, null, null, null).aggregate(c);
            return new e(b, a.total, d.aggregates, a.groups, a.indices)
        },
        _getInnerMostItems: function(b) {
            var a = [];
            return j(this._getInnerMostGroups(b), function(c, b) {
                a = a.concat(b.items)
            }), a
        },
        _getInnerMostGroups: function(c) {
            var b = this,
                a = [];
            return j(c || [], function(d, c) {
                a = a.concat(b._hasInnerGroups(c) ? b._getInnerMostGroups(c.items) : c)
            }), a
        },
        _hasInnerGroups: function(b) {
            return b && b.items && b.items.length > 0 ? b.items[0].field && a.array(b.items[0].items) : !1
        },
        group: function(c) {
            var d, b = this,
                f = b.data.slice(0);
            return a.array(c) || (c = [c]), c.length > 0 && (d = b._groupData(c, f, b.indices), f = d[0], b.indices = d[1]), new e(f, b.total, b.aggregates, b.groups, b.indices)
        },
        _groupData: function(B, y, q) {
            var r, k, o, b, d, z = this,
                c = [],
                m = [],
                l = B.slice(0),
                h = l.shift(),
                x = h.field,
                t = h.aggregate,
                v = h.order,
                w = {};
            if (j(y, function(d, b) {
                    k = g(b, x), o = w[k], a.defined(o) ? c[o].items.push({
                        item: b,
                        index: q[d]
                    }) : (w[k] = c.length, c.push(i({}, h, {
                        value: k,
                        items: [{
                            item: b,
                            index: q[d]
                        }]
                    })))
                }), v && (r = new u("value", "desc" == v).build())) {
                for (b = 0; b < c.length; b++) c[b] = {
                    item: c[b],
                    index: b
                };
                for (c.sort(r), b = 0; b < c.length; b++) c[b] = c[b].item
            }
            for (b = 0; b < c.length; b++)
                for (d = 0; d < c[b].items.length; d++) m.push(c[b].items[d].index), c[b].items[d] = c[b].items[d].item;
            if (t && j(c, function(a, b) {
                    c[a].aggregate = new e(b.items).aggregate(t).aggregates
                }), l && l.length > 0) {
                var p = 0,
                    n = [];
                for (b = 0; b < c.length; b++) {
                    var f = c[b],
                        A = m.slice(p, p + (f.items ? f.items.length : 0)),
                        s = z._groupData(l, f.items, A);
                    c[b].items = s[0], n = n.concat(s[1]), p += f.items ? f.items.length : 0
                }
                m = n
            }
            return [c, m]
        },
        sort: function(h, i) {
            var a, b = this,
                f = new u(h, i).build(),
                c = b.data.slice(0),
                d = [],
                g = c ? c.length : 0,
                j = b.indices;
            if (f) {
                for (a = 0; g > a; a++) d.push({
                    index: j[a],
                    item: c[a]
                });
                for (d.sort(f), a = 0; g > a; a++) c[a] = d[a].item, b.indices[a] = d[a].index
            }
            return new e(c, b.total, b.aggregates, b.groups, b.indices)
        },
        sortGroups: function(g, h) {
            var b, a = this,
                f = a.data.slice(0),
                c = [],
                d = 0;
            return b = function(f) {
                if (a._hasInnerGroups(f)) j(f.items, function(c, a) {
                    b(a)
                });
                else {
                    var i = new e(f.items, null, null, null, a.indices.slice(d, d + (f.items ? f.items.length : 0))).sort(g, h);
                    f.items = i.data, c = c.concat(i.indices), d += f.items ? f.items.length : 0
                }
            }, j(f, function(c, a) {
                b(a)
            }), new e(f, a.total, a.aggregates, a.groups, c)
        },
        _sliceGroups: function(f, g, b, c) {
            var d, l = this,
                h = 0,
                i = [],
                e = [],
                k = a.defined(c);
            return 0 !== b || k ? (d = function(i) {
                if (l._hasInnerGroups(i)) {
                    var q = [],
                        r = 0;
                    return j(i.items, function(c, a) {
                        var b = d(a);
                        b > 0 && (q.push(a), r += b)
                    }), i.items = q, r
                }
                var m, n, f = h,
                    o = i.items.length,
                    p = f + o - 1;
                return k ? c - 1 >= p ? p >= b && (m = A(0, b - f), n = o) : c - 1 >= f && p >= b && (m = A(0, b - f), n = K(o, c - f)) : f >= b ? (m = 0, n = o) : b >= f && p >= b && (m = A(0, b - f), n = o), a.defined(m) && a.defined(n) && n > m ? (i.items = i.items.slice(m, n), e = e.concat(g.slice(f + m, f + n))) : i.items = [], h += o, i.items.length
            }, j(f, function(c, a) {
                var b = d(a);
                b > 0 && i.push(a)
            }), [i, e]) : [f.slice(0), g.slice(0)]
        },
        skip: function(b) {
            var a = this;
            return new e(a.data.slice(b), a.total, a.aggregates, a.groups, a.indices.slice(b))
        },
        skipGroups: function(c) {
            var a = this,
                b = a._sliceGroups(a.data, a.indices, c);
            return new e(b[0], a.total, a.aggregates, a.groups, b[1])
        },
        take: function(b) {
            var a = this;
            return new e(a.data.slice(0, b), a.total, a.aggregates, a.groups, a.indices.slice(0, b))
        },
        takeGroups: function(c) {
            var a = this,
                b = a._sliceGroups(a.data, a.indices, 0, c);
            return new e(b[0], a.total, a.aggregates, a.groups, b[1])
        }
    }), e.create = function(c, a, d, f, g) {
        a = a || {};
        var b = new e(c, d, f, g),
            h = a.remoteOperations || [],
            i = h.join(" "),
            j = i.indexOf("group") > -1;
        return a.group || j ? (a.group ? (a.filter && (b = b.filter(a.filter)), b = b.group(a.group)) : b.data = b.groups, a.aggregate && (b = b.aggregateGroups(a.aggregate)), a.sort && (b = b.sortGroups(a.sort)), a.skip && (b = b.skipGroups(a.skip)), a.take && (b = b.takeGroups(a.take))) : (a.filter && (b = b.filter(a.filter)), a.aggregate && (b = b.aggregate(a.aggregate)), a.sort && (b = b.sort(a.sort)), a.skip && (b = b.skip(a.skip)), a.take && (b = b.take(a.take))), b
    }, q = m.extend({
        init: function(d) {
            var b = this,
                c = b.options = a.array(d) ? {
                    data: d
                } : d || {},
                e = c.schema || {},
                f = q.schemas[e.type || "json"];
            b.data = null, b.filter = c.filter, b.sort = c.sort, b.skip = c.skip, b.take = c.take, b.group = c.group, b.aggregate = c.aggregate, b.schema = new f(e), b.remote = c.remote, b.cache = new p, m.fn.init.call(b, c)
        },
        trigger: h.ui.Widget.fn.trigger,
        _client: function() {
            var b = this,
                c = b.remote;
            return a.object(c) ? new P(c, c.cache ? b.cache : p.noop) : new O(b.options.data)
        },
        _params: function() {
            var a, b = this,
                d = ["filter", "aggregate", "group", "sort", "skip", "take"],
                e = b.remote,
                f = b._remoteOperations().join(" "),
                c = {
                    local: {},
                    remote: {}
                };
            return j(d, function(g, d) {
                a = b[d], null != a && (e && f.indexOf(d) > -1 ? c.remote[d] = a : c.local[d] = a)
            }), c
        },
        _remoteOperations: function() {
            var a = this.remote;
            return a && a.read ? a.read.operations || a.operations || [] : []
        },
        _success: function(d, e, f, c) {
            var a = this,
                g = a.schema,
                b = g.process(f);
            a.data = b.data, a._createView(b.data, e, b.total, b.aggregates, b.groups), d.resolve(a.view, !!c), a.trigger(N), a.trigger(l, {
                fromCache: !!c
            })
        },
        _createView: function(c, d, f, g, h) {
            var a = this,
                b = e.create(c, i({}, d || a._params().local, {
                    remoteOperations: a._remoteOperations()
                }), f, g, h);
            a.view = b.data, a.total = b.total, a._indices = b.indices, a.aggregates = b.aggregates
        },
        _error: function(c, d, e, a) {
            var b = this;
            c.reject(a), d && b.trigger(N), b.trigger(s, {
                errorType: "transport",
                error: a,
                operation: e
            })
        },
        read: function() {
            var a = this,
                b = new v,
                c = a._params(),
                d = a.trigger(Q, {
                    params: c
                });
            return d.isDefaultPrevented() ? b.resolve() : (a.cancel(), a._client().read(c.remote, k(a._success, a, b, c.local), k(a._error, a, b, !0, "read"))), b.promise()
        },
        _ensureTracker: function() {
            var b = this,
                c = b.tracker,
                d = b.data;
            if (!c) {
                if (!d || !a.array(d)) throw new Error("shield.DataSource: cannot modify when no data array is available.");
                c = b.tracker = new E({
                    data: d,
                    model: b.schema.model,
                    events: {
                        change: function(a) {
                            b._createView(b.data), a && a.afterset || b.trigger(l)
                        },
                        error: function(a) {
                            b.trigger(s, {
                                errorType: "tracker",
                                path: a ? a.path : "undefined path",
                                value: a ? a.value : "undefined value",
                                error: a ? a.reason : "undefined error",
                                model: a ? a.target : "undefined target model"
                            })
                        }
                    }
                }), b.data = c.data
            }
        },
        add: function(a) {
            return this._ensureTracker(), this.tracker.add(a)
        },
        insert: function(a, b) {
            return this._ensureTracker(), this.tracker.insert(a, b)
        },
        remove: function(a) {
            return this._ensureTracker(), this.tracker.remove(a)
        },
        removeAt: function(a) {
            return this._ensureTracker(), this.tracker.removeAt(a)
        },
        edit: function(a) {
            return this._ensureTracker(), this.tracker.edit(a)
        },
        insertView: function(a, b) {
            return this._ensureTracker(), this.tracker.insert(this._indices[a], b)
        },
        removeAtView: function(a) {
            return this._ensureTracker(), this.tracker.removeAt(this._indices[a])
        },
        editView: function(a) {
            return this._ensureTracker(), this.tracker.edit(this._indices[a])
        },
        save: function(f) {
            var g, h, e, i, b = this,
                c = b.tracker,
                j = c ? c.changes : {
                    added: [],
                    edited: [],
                    removed: []
                },
                m = c && b.trigger(S, {
                    changes: j
                }),
                d = new v;
            if (f = a.defined(f) ? !!f : !0, m && !m.isDefaultPrevented()) {
                for (g = b.data = c.original, h = c.data, g.length = 0, e = 0; e < h.length; e++) g[e] = h[e];
                b.options.data && !a.func(b.options.data) && d.done(k(b._syncLocalData, b)), b._client().modify(j, k(d.resolve, d), k(b._error, b, d, !1, "save")), c.destroy(), c = b.tracker = null
            } else d.resolve(j);
            return f && (i = function() {
                b._createView(b.data), b.trigger(l)
            }, d.then(i, i)), d.promise()
        },
        _syncLocalData: function() {
            var b, c = this,
                d = c.schema,
                f = (d.options.fields, c.data),
                e = (c.options.data, []),
                g = a.array(d.getReverseDataFirstItem(c.options.data));
            for (b = 0; b < f.length; b++) e[b] = g ? [] : {}, d.reverseFields(f[b], e[b]);
            d.reverseData(e, c.options.data)
        },
        cancel: function() {
            var b = this,
                a = b.tracker,
                c = a && (a.changes.added.length || a.changes.edited.length || a.changes.removed.length);
            a && (b.data = a.original, a.destroy(), a = b.tracker = null, c && (b._createView(b.data), b.trigger(l)))
        },
        destroy: function() {
            var a, b = this,
                c = ["options", "data", "total", "aggregates", "filter", "sort", "aggregate", "group", "skip", "take", "schema", "remote", "view", "cache"];
            for (b.cancel(), b.cache.clear(), a = 0; a < c.length; a++) delete b[c[a]];
            m.fn.destroy.call(b)
        }
    }), q.create = function(a, b) {
        return a instanceof q ? a : new q(i({}, a, b))
    }, r = n.extend({
        init: function(a) {
            this.options = a
        },
        parse: function(b) {
            var d = this.options.parse;
            if (a.func(d)) return d(b);
            if (a.string(b)) try {
                b = c.parseJSON(b)
            } catch (e) {}
            return b
        },
        data: function(c) {
            var b = this.options.data;
            return a.func(b) ? b(c) : a.string(b) ? g(c, b) : c
        },
        aggregates: function(c) {
            var b = this.options.aggregates;
            return a.func(b) ? b(c) : a.string(b) ? g(c, b) : f
        },
        groups: function(c) {
            var b = this.options.groups;
            return a.func(b) ? b(c) : a.string(b) ? g(c, b) : f
        },
        reverseData: function(d, b) {
            var c, e = this.options.data;
            if (a.func(e)) e(d, b);
            else if (a.string(e)) B(b, e, d);
            else if (a.array(b))
                for (b.length = 0, c = 0; c < d.length; c++) b[c] = d[c]
        },
        getReverseDataFirstItem: function(c) {
            var b = this.data(c);
            return a.array(b) && b.length > 0 ? b[0] : f
        },
        total: function(b, d) {
            var c = this.options.total;
            return b = b || [], d = d || [], a.func(c) ? c(b) : a.string(c) ? g(b, c) : d.length
        },
        fields: function(a) {
            var b = this,
                c = b.options.fields,
                e = b.model = d.define(c);
            return c ? t(a, function(a) {
                return r.mapFields(a, e.fn.fields)
            }) : a
        },
        reverseFields: function() {
            var c, d, b, j = this,
                e = j.options.fields,
                f = [].slice.call(arguments),
                g = f[0],
                i = f.length <= 1,
                h = i ? g : f[1];
            for (b in e) e.hasOwnProperty(b) && (c = e[b], d = g[b], a.string(c.path) ? B(h, c.path, d) : a.func(c.path) ? c.path(g, d) : h[b] = d, i && delete h[b])
        },
        process: function(b) {
            var a = this,
                c = a.parse(b),
                d = (a.aggregates(b), a.groups(b), a.fields(a.data(c)));
            return {
                data: d,
                total: a.total(c, d)
            }
        }
    }), r.mapFields = function(e, i) {
        var h, b, c, j = {};
        e = e || {};
        for (h in i) i.hasOwnProperty(h) && (b = i[h], a.string(b.path) ? (c = g(e, b.path), c === f && (c = g(e, h))) : c = a.func(b.path) ? b.path(e) : e[h], c === f ? b.type && (c = d.def(b.type, b.def, b.nullable !== !1)) : c = d.convert(c, b.type), j[h] = c);
        return j
    }, J = r.extend({
        parse: function(b) {
            var d = this,
                e = d.options;
            if (a.func(e.parse)) b = e.parse(b);
            else if (a.string(b)) try {
                b = c.parseXML(b)
            } catch (f) {}
            return b && 9 === b.nodeType && (b = d._json(d._root(b))), b
        },
        _root: function(d) {
            var a, c, b = d.childNodes;
            for (a = 0, c = b.length; c > a; a++)
                if (1 === b[a].nodeType) return b[a];
            return null
        },
        _json: function(g) {
            var b, d, e, h, c = {},
                i = {},
                f = "";
            for (e = 0, h = g.attributes.length; h > e; e++) b = g.attributes[e], c["_" + b.nodeName] = b.nodeValue;
            for (e = 0, h = g.childNodes.length; h > e; e++) switch (b = g.childNodes[e], d = b.nodeName, b.nodeType) {
                case 1:
                    i[d] ? (a.array(c[d]) || (c[d] = [c[d]]), c[d].push(this._json(b))) : (c[d] = this._json(b), i[d] = !0);
                    break;
                case 3:
                    f += b.nodeValue;
                    break;
                case 4:
                    c._cdata = b.nodeValue
            }
            return f = f.replace(/^\s+(.*)\s+$/gim, "$1"), f && (c._text = f), c
        }
    }), G = r.extend({
        parse: function(d) {
            var e, b = this.options,
                h = b.parse,
                f = c(d),
                g = [],
                i = [];
            if (a.func(h)) return h(d);
            if (b.result) return b.result;
            if (!f[0] || "table" !== f[0].tagName.toLowerCase()) return d;
            f.eq(0).find("thead th").each(function() {
                i.push(c(this).text())
            }).end().find("tbody tr").each(function() {
                e = {}, c(this).children().each(function(a) {
                    e[i[a]] = c(this).text()
                }), g.push(e)
            });
            return b.result = g, g
        }
    }), F = r.extend({
        parse: function(d) {
            var b = this.options,
                g = b.parse,
                e = c(d),
                f = [];
            return a.func(g) ? g(d) : b.result ? b.result : e[0] && "select" === e[0].tagName.toLowerCase() ? (e.find("option").each(function(b) {
                var a = c(this);
                f.push({
                    value: a.attr("value"),
                    text: a.text(),
                    selected: a.is(":selected")
                })
            }), b.result = f, f) : d
        }
    }), q.schemas = {
        json: r,
        xml: J,
        table: G,
        select: F
    }, E = m.extend({
        init: function(a) {
            var b = this;
            b.original = a.data, b.data = Array.apply(null, a.data), b.model = a.model, b.changes = {
                added: [],
                edited: [],
                removed: []
            }, m.fn.init.call(this, a)
        },
        _model: function(c) {
            var a = this,
                b = new a.model(c);
            return b.on(l, k(a.trigger, a, l)), b.on(s, k(a.trigger, a, s)), b.on(H, function() {
                a.trigger(l, {
                    afterset: !0
                })
            }), b
        },
        add: function(a) {
            return this.insert(this.data.length, a)
        },
        insert: function(b, e) {
            var a, c = this,
                d = c.data,
                f = c.changes;
            if (0 > b || b > d.length) throw new Error("shield.DataSource: invalid item index.");
            return a = c._model(e), f.added.push(a), d.splice(b, 0, a.data), c.trigger(l, {
                operation: "add",
                index: b,
                model: a
            }), a
        },
        edit: function(a) {
            var b, d = this,
                c = d.data,
                e = d.changes;
            if (isNaN(a) || 0 > a || a >= c.length) throw new Error("shield.DataSource: invalid item index.");
            return (b = C(e.added.concat(e.edited), function(b) {
                return b.data === c[a]
            })[0]) ? b : (b = d._model(c[a]), e.edited.push(b), c[a] = b.data, b)
        },
        remove: function(c) {
            var a = this,
                e = a.changes,
                f = C(e.added.concat(e.edited), function(a) {
                    return a === c
                })[0],
                b = -1;
            return c instanceof d ? f && (b = I(f.data, a.data)) : b = I(c, a.data), b > -1 ? a.removeAt(b) : void 0
        },
        removeAt: function(a) {
            var c = this,
                d = c.data,
                e = c.changes,
                b = C(e.added.concat(e.edited), function(b) {
                    return b.data === d[a]
                })[0];
            if (0 > a || a > d.length) throw new Error("shield.DataSource: invalid item index.");
            return b ? b.destroy() : b = new c.model(d[a]), e.removed.push(b), d.splice(a, 1), c.trigger(l, {
                operation: "remove",
                index: a,
                model: b
            }), b
        },
        destroy: function() {
            var b, c = this,
                a = c.changes,
                d = a.added.concat(a.edited).concat(a.removed);
            for (b = 0; b < d.length; b++) d[b].destroy();
            a.added.length = a.edited.length = a.removed.length = 0, c.data = null, c.original = null, m.fn.destroy.call(c)
        }
    }), d = m.extend({
        init: function(b, c) {
            var a = this;
            m.fn.init.call(a, c), a.fields = i(!0, {}, a.constructor.prototype.fields), a.data = i(!0, {}, b)
        },
        trigger: h.ui.Widget.fn.trigger,
        get: function(a) {
            return g(this.data, a)
        },
        set: function(c, a) {
            var b = this;
            a = b.validate(c, a), a !== f && (B(b.data, c, a), b.trigger(H))
        },
        validate: function(e, a) {
            var c, h, i = this,
                b = g(i.fields, e);
            if (!b) return a;
            if (o(b.validator) === w) c = b.validator;
            else if (o(b.type.validate) === w) c = b.type.validate;
            else {
                var j = b.type.toString().split("(")[0].split(" ")[1].toLowerCase();
                c = d.validators[j]
            }
            if (c) {
                if (h = c(a), h === f) return void i.trigger(s, {
                    errorType: "validation",
                    path: e,
                    value: a,
                    error: "validation error"
                });
                a = h
            }
            return null === a && b.nullable === !1 ? void i.trigger(s, {
                errorType: "validation",
                path: e,
                value: a,
                error: "null value not allowed"
            }) : a
        }
    }), d.define = function(a) {
        return d.extend({
            fields: d.normalize(i(!0, {}, a))
        })
    }, d.normalize = function(a) {
        var b, c, d;
        a = a || {};
        for (b in a) a.hasOwnProperty(b) && (c = a[b], d = o(c), d === w ? a[b] = {
            type: c
        } : d === D ? a[b] = {
            type: c
        } : d === R && (a[b] = {
            path: c
        }));
        return a
    }, d.def = function(a, b, d) {
        var c;
        return b !== f ? o(b) === w ? b() : b : d ? null : a === String ? "" : a === Number ? 0 : a === Date ? null : a === Boolean ? !1 : a === Array ? [] : a === Object ? {} : (c = o(a), c === D ? [] : c === M ? {} : c === w ? a() : null)
    }, d.convert = function(b, d) {
        var c;
        return null == b ? b : d === String ? b.toString() : d === Number ? (c = parseFloat(b), isNaN(c) ? b : c) : d === Date ? (c = new Date(b), isNaN(c.getTime()) ? b : c) : d === Boolean ? a.string(b) ? !/^(false|0)$/i.test(b) : !!b : b
    }, d.validators = {
        string: function(a) {
            return null == a ? null : a.toString()
        },
        number: function(a) {
            return null === a ? null : isNaN(+a) ? f : +a
        },
        date: function(a) {
            return null === a ? null : a instanceof Date ? a : (a = new Date(a), isNaN(a.getTime()) ? f : a)
        },
        "boolean": function(a) {
            return null === a ? null : null == a ? f : !!a
        },
        array: function(a) {
            return null === a ? null : o(a) === D ? a : f
        },
        object: function(a) {
            return null === a ? null : o(a) === M ? a : f
        }
    }, i(h, {
        map: t,
        DataSource: q,
        DataQuery: e,
        Model: d
    })
}(jQuery, shield, this),
function(a, e, s, b) {
    "use strict";

    function N() {
        if (f(H)) return H;
        var d, c, b = a('<div style="width:50px;position:absolute;overflow:hidden;height:50px;display:block;"><div style="width:auto;height:100px;"></div></div>'),
            e = b.children()[0];
        return a(g.body).append(b), d = e.offsetWidth, b.css(ma, D), c = e.offsetWidth, d === c && (c = b[0].clientWidth), b.remove(), H = d - c
    }

    function Fa(a) {
        var b = a.isWindow || a.isDocument ? "" : a.element.css(oa),
            c = a.isWindow || a.isDocument ? "" : a.element.css(pa),
            d = b === D || b === ka && a.width < a.element[0].scrollWidth,
            e = c === D || c === ka && a.height < a.element[0].scrollHeight;
        return {
            width: e ? N() : 0,
            height: d ? N() : 0
        }
    }

    function fa(e) {
        var b = a(e || s),
            c = ea(b[0]),
            d = !!b[0] && 9 === b[0].nodeType;
        return {
            element: b,
            isWindow: c,
            isDocument: d,
            offset: b.offset() || {
                left: 0,
                top: 0
            },
            scrollLeft: b.scrollLeft(),
            scrollTop: b.scrollTop(),
            width: c || d ? b.width() : b.outerWidth(),
            height: c || d ? b.height() : b.outerHeight()
        }
    }

    function ia(a, b, c) {
        return [M(a[0]) * (S.test(a[0]) ? b / 100 : 1), M(a[1]) * (S.test(a[1]) ? c / 100 : 1)]
    }

    function d(b, c) {
        var a = b.css(c);
        return a ? Aa(a) || 0 : 0
    }

    function Ea(a) {
        var b = a[0];
        return 9 === b.nodeType ? {
            width: a.width(),
            height: a.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : ea(b) ? {
            width: a.width(),
            height: a.height(),
            offset: {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }
        } : b.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: b.pageY,
                left: b.pageX
            }
        } : {
            width: a.outerWidth(),
            height: a.outerHeight(),
            offset: a.offset()
        }
    }

    function T(c, e) {
        var b = 0,
            g = f(e) ? a(e).find(c) : a(c);
        return g.each(function(c) {
            b = i(b, d(a(this), "z-index"))
        }), b
    }
    var H, w, y, z, x, o, K, ca, E, ga, r = e.ui.Widget,
        Da = (e.Class, e.Constants.KeyCode),
        g = document,
        c = Math.abs,
        C = Math.min,
        i = Math.max,
        V = Math.round,
        Z = Math.floor,
        $ = a.extend,
        m = a.proxy,
        da = a.each,
        ea = a.isWindow,
        f = e.is.defined,
        I = e.is.func,
        Ca = e.is.number,
        Ba = e.is.object,
        Aa = e.to["int"],
        M = e.to.number,
        sa = e.to.string,
        O = /left|center|right/,
        P = /top|center|bottom/,
        Q = /[\+\-]\d+(\.[\d]+)?%?/,
        la = /^\w+/,
        S = /%$/,
        n = "mousedown",
        A = "mouseup",
        p = "mousemove",
        W = "keydown",
        X = "start",
        Y = "stop",
        ra = "resize",
        qa = "resized",
        na = "drag",
        wa = "cancel",
        ba = "disabled",
        l = "px",
        j = "left",
        v = "right",
        k = "top",
        u = "bottom",
        ha = "middle",
        h = "center",
        ma = "overflow",
        ka = "auto",
        t = "position",
        aa = "absolute",
        _ = "relative",
        oa = "overflow-x",
        pa = "overflow-y",
        D = "scroll",
        G = "horizontal",
        J = "vertical",
        ta = "my",
        ua = "at",
        va = "marginLeft",
        Ga = "marginRight",
        xa = "marginTop",
        ya = "marginBottom",
        za = "flip",
        F = "sui-resizable",
        ja = F + "-" + ba,
        q = "sui-draggable",
        L = q + "-" + ba,
        R = q + "-dragging",
        B = "sui-unselectable",
        U = 0;
    z = {}, z.GetWithinInfo = fa, z.GetMaxZIndex = T, e.ui.Util = z, w = function() {
        return U++, y ? y : (this.init(), void(y = this))
    }, w.prototype = {
        _pos: null,
        init: function() {
            var b = this;
            a(g).on(p + ".suiMouseTracker", m(b._onMouseMove, b))
        },
        _onMouseMove: function(a) {
            this._pos = this.getPosFromEvent(a)
        },
        getPosFromEvent: function(a) {
            return a.pageX || a.pageY ? {
                x: a.pageX,
                y: a.pageY
            } : {
                x: a.clientX + g.body.scrollLeft - g.body.clientLeft,
                y: a.clientY + g.body.scrollTop - g.body.clientTop
            }
        },
        getPosition: function(b) {
            var a = this;
            return null === a._pos && f(b) && (a._pos = a.getPosFromEvent(b)), a._pos
        },
        isInWindow: function(g) {
            var h = this,
                b = h.getPosition(g),
                c = b.x,
                d = b.y,
                e = a(s).scrollTop(),
                f = a(s).scrollLeft();
            return c >= f && c <= f + a(s).width() && d >= e && d <= e + a(s).height()
        },
        destroy: function() {
            --U > 0 || (a(g).off(p + ".suiMouseTracker"), y = null)
        }
    }, e.MouseTracker = w, x = {}, x.Set = function(H, B, n) {
        if (!H || !B || !n) throw "Invalid arguments passed to Position.Set";
        var s, g, l, r, m, w, e = {
                my: n.source,
                at: n.target,
                collision: n.overflow,
                inside: n.inside
            },
            A = a(B),
            D = fa(e.inside),
            C = Fa(D),
            t = (e.collision || za).split(" "),
            y = {};
        w = Ea(A), A[0].preventDefault && (e.at = "left top"), g = w.width, l = w.height, r = w.offset, m = $({}, r), da([ta, ua], function() {
            var b, c, d = this,
                a = (e[d] || "").split(" ");
            1 === a.length && (a = O.test(a[0]) ? a.concat([h]) : P.test(a[0]) ? [h].concat(a) : [h, h]), a[0] = O.test(a[0]) ? a[0] : h, a[1] = P.test(a[1]) ? a[1] : h, b = Q.exec(a[0]), c = Q.exec(a[1]), y[d] = [b ? b[0] : 0, c ? c[0] : 0], e[d] = [la.exec(a[0])[0], la.exec(a[1])[0]]
        }), 1 === t.length && (t[1] = t[0]), e.at[0] === v ? m.left += g : e.at[0] === h && (m.left += g / 2), e.at[1] === u ? m.top += l : e.at[1] === h && (m.top += l / 2), s = ia(y.at, g, l), m.left += s[0], m.top += s[1];
        var E, z, f = a(H),
            q = f.outerWidth(),
            p = f.outerHeight(),
            K = d(f, va),
            F = d(f, xa),
            M = q + K + d(f, Ga) + C.width,
            L = p + F + d(f, ya) + C.height,
            b = $({}, m),
            x = ia(y.my, f.outerWidth(), f.outerHeight());
        e.my[0] === v ? b.left -= q : e.my[0] === h && (b.left -= q / 2), e.my[1] === u ? b.top -= p : e.my[1] === h && (b.top -= p / 2), b.left += x[0], b.top += x[1], b.left = V(b.left), b.top = V(b.top), E = {
            marginLeft: K,
            marginTop: F
        }, da([j, k], function(a, c) {
            o[t[a]] && o[t[a]][c](b, {
                targetWidth: g,
                targetHeight: l,
                elemWidth: q,
                elemHeight: p,
                collisionPosition: E,
                collisionWidth: M,
                collisionHeight: L,
                offset: [s[0] + x[0], s[1] + x[1]],
                my: e.my,
                at: e.at,
                within: D,
                elem: f
            })
        }), I(n.callback) && (z = function() {
            var d = r.left - b.left,
                m = d + g - q,
                e = r.top - b.top,
                o = e + l - p,
                a = {
                    target: {
                        element: A,
                        left: r.left,
                        top: r.top,
                        width: g,
                        height: l
                    },
                    element: {
                        element: f,
                        left: b.left,
                        top: b.top,
                        width: q,
                        height: p
                    },
                    horizontal: 0 > m ? j : d > 0 ? v : h,
                    vertical: 0 > o ? k : e > 0 ? u : ha
                };
            q > g && c(d + m) < g && (a.horizontal = h), p > l && c(e + o) < l && (a.vertical = ha), i(c(d), c(m)) > i(c(e), c(o)) ? a.important = G : a.important = J, n.callback(a)
        }), f.offset(b), z && z()
    }, o = {
        fit: {
            left: function(a, c) {
                var j, f = c.within,
                    d = f.isWindow ? f.scrollLeft : f.offset.left,
                    g = f.width,
                    h = a.left - c.collisionPosition.marginLeft,
                    b = d - h,
                    e = h + c.collisionWidth - g - d;
                c.collisionWidth > g ? b > 0 && 0 >= e ? (j = a.left + b + c.collisionWidth - g - d, a.left += b - j) : e > 0 && 0 >= b ? a.left = d : b > e ? a.left = d + g - c.collisionWidth : a.left = d : b > 0 ? a.left += b : e > 0 ? a.left -= e : a.left = i(a.left - h, a.left)
            },
            top: function(a, b) {
                var j, g = b.within,
                    d = g.isWindow ? g.scrollTop : g.offset.top,
                    f = b.within.height,
                    h = a.top - b.collisionPosition.marginTop,
                    c = d - h,
                    e = h + b.collisionHeight - f - d;
                b.collisionHeight > f ? c > 0 && 0 >= e ? (j = a.top + c + b.collisionHeight - f - d, a.top += c - j) : e > 0 && 0 >= c ? a.top = d : c > e ? a.top = d + f - b.collisionHeight : a.top = d : c > 0 ? a.top += c : e > 0 ? a.top -= e : a.top = i(a.top - h, a.top)
            }
        },
        flip: {
            left: function(d, a) {
                var i, h, b = a.within,
                    p = b.offset.left + b.scrollLeft,
                    l = b.width,
                    k = b.isWindow ? b.scrollLeft : b.offset.left,
                    m = d.left - a.collisionPosition.marginLeft,
                    n = m - k,
                    o = m + a.collisionWidth - l - k,
                    e = a.my[0] === j ? -a.elemWidth : a.my[0] === v ? a.elemWidth : 0,
                    g = a.at[0] === j ? a.targetWidth : a.at[0] === v ? -a.targetWidth : 0,
                    f = -2 * a.offset[0];
                0 > n ? (i = d.left + e + g + f + a.collisionWidth - l - p, (0 > i || i < c(n)) && (d.left += e + g + f)) : o > 0 && (h = d.left - a.collisionPosition.marginLeft + e + g + f - k, (h > 0 || c(h) < o) && (d.left += e + g + f))
            },
            top: function(b, a) {
                var l, j, f = a.within,
                    p = f.offset.top + f.scrollTop,
                    n = f.height,
                    m = f.isWindow ? f.scrollTop : f.offset.top,
                    o = b.top - a.collisionPosition.marginTop,
                    h = o - m,
                    i = o + a.collisionHeight - n - m,
                    q = a.my[1] === k,
                    e = q ? -a.elemHeight : a.my[1] === u ? a.elemHeight : 0,
                    d = a.at[1] === k ? a.targetHeight : a.at[1] === u ? -a.targetHeight : 0,
                    g = -2 * a.offset[1];
                0 > h ? (j = b.top + e + d + g + a.collisionHeight - n - p, b.top + e + d + g > h && (0 > j || j < c(h)) && (b.top += e + d + g)) : i > 0 && (l = b.top - a.collisionPosition.marginTop + e + d + g - m, b.top + e + d + g > i && (l > 0 || c(l) < i) && (b.top += e + d + g))
            }
        },
        flipfit: {
            left: function() {
                o.flip.left.apply(this, arguments), o.fit.left.apply(this, arguments)
            },
            top: function() {
                o.flip.top.apply(this, arguments), o.fit.top.apply(this, arguments)
            }
        }
    }, e.ui.Position = x, ga = {
        enabled: !0,
        cls: b,
        resizeCls: b,
        delta: 1,
        handles: ["e", "w", "n", "s", "se", "sw", "ne", "nw"],
        handleWidth: 8,
        handleZIndex: 105,
        minHeight: 16,
        minWidth: 16,
        maxHeight: b,
        maxWidth: b,
        events: {}
    }, E = r.extend({
        init: function() {
            r.fn.init.apply(this, arguments);
            var b = this,
                e = a(b.element),
                c = b.options,
                d = c.cls;
            b.mouseTracker = new w, e.addClass(F + (d ? " " + d : "")), b._initHandles(), b.enabled(c.enabled)
        },
        _initHandles: function() {
            var h, d, e, b = this,
                o = a(b.element),
                r = (o.width(), o.height()),
                j = b.options,
                q = j.handles,
                k = j.handleWidth,
                i = k + l,
                f = k + 2 + l,
                c = "-" + (k - 2) + l,
                s = j.handleZIndex;
            for (b.handles = [], e = 0; e < q.length; e++) {
                switch (h = sa(q[e]).toLowerCase(), d = {}, h) {
                    case "e":
                        d = {
                            width: i,
                            height: r + l,
                            top: 0,
                            right: c
                        };
                        break;
                    case "w":
                        d = {
                            width: i,
                            height: r + l,
                            top: 0,
                            left: c
                        };
                        break;
                    case "n":
                        d = {
                            width: "100%",
                            height: i,
                            top: c
                        };
                        break;
                    case "s":
                        d = {
                            width: "100%",
                            height: i,
                            bottom: c
                        };
                        break;
                    case "se":
                        d = {
                            width: f,
                            height: f,
                            bottom: c,
                            right: c
                        };
                        break;
                    case "sw":
                        d = {
                            width: f,
                            height: f,
                            bottom: c,
                            left: c
                        };
                        break;
                    case "ne":
                        d = {
                            width: f,
                            height: f,
                            top: c,
                            right: c
                        };
                        break;
                    case "nw":
                        d = {
                            width: f,
                            height: f,
                            top: c,
                            left: c
                        }
                }
                d.zIndex = s, b.handles[e] = {
                    type: h
                }, b.handles[e][n] = m(b._handleMouseDown, b, e), b.handles[e].element = a('<div class="sui-resizable-handle sui-resizable-dir-' + h + '"></div>').appendTo(o).css(d).on(n, b.handles[e][n])
            }
            a(g).on(A + ".shieldResizable" + b.getInstanceId(), m(b._handleMouseUp, b)), a(g).on(p + ".shieldResizable" + b.getInstanceId(), m(b._handleMouseMove, b))
        },
        _destroyHandles: function() {
            var c, b = this,
                d = b.handles;
            for (a(g).off(A + ".shieldResizable" + b.getInstanceId()), a(g).off(p + ".shieldResizable" + b.getInstanceId()), c = 0; c < d.length; c++) a(b.handles[c].element).off(n, b.handles[c][n]).remove();
            b.handles = []
        },
        _handleMouseDown: function(c, d) {
            var b = this;
            b._enabled && !b.resizing && (b.resizing = !0, b.resizingHandle = c, b.oldPos = b.mouseTracker.getPosition(d), b.startSent = !1, a(b.element).addClass(B))
        },
        _handleMouseMove: function(G) {
            var s, x, y, n, m, e, b, i, h, v, w, q, o, t, g = this,
                p = a(g.element),
                r = g.options,
                u = r.delta,
                z = r.minWidth,
                A = r.maxWidth,
                B = r.minHeight,
                C = r.maxHeight,
                E = r.resizeCls,
                F = g.resizingHandle,
                D = g.handles,
                H = g.mouseTracker,
                I = g.oldPos;
            if (H.isInWindow(G) && g.resizing && f(F) && (y = H.getPosition(G), n = y.x - I.x, m = y.y - I.y, s = D[F], x = s.type, c(n) >= u || c(m) >= u)) {
                switch (/^(se|sw|ne|nw)$/i.test(x) || (/^(e|w)$/i.test(x) ? m = 0 : n = 0), c(n) < u && (n = 0), c(m) < u && (m = 0), e = n, b = m, i = 0, h = 0, x) {
                    case "w":
                        e = -n, i = -e;
                        break;
                    case "n":
                        b = -m, h = -b;
                        break;
                    case "nw":
                        e = -n, b = -m, i = -e, h = -b;
                        break;
                    case "sw":
                        e = -n, i = -e;
                        break;
                    case "ne":
                        b = -m, h = -b
                }
                if (q = p.width(), o = p.height(), v = d(p, k), w = d(p, j), e > 0 ? (f(A) && q + e > A && (e = A - q, 0 !== i && (i = -e)), 0 > w + i && (e -= w - i, i = -e)) : 0 > e && f(z) && z > q + e && (e = z - q, 0 !== i && (i = -e)), b > 0 ? (f(C) && o + b > C && (b = C - o, 0 !== h && (h = -b)), 0 > v + h && (b -= v - h, h = -b)) : 0 > b && f(B) && B > o + b && (b = B - o, 0 !== h && (h = -b)), 0 !== e || 0 !== b) {
                    g.startSent || (g.startSent = !0, g.trigger(X), E && p.addClass(E));
                    var J = g.trigger(ra, {
                        deltaX: e,
                        deltaY: b
                    });
                    if (!J.isDefaultPrevented()) {
                        if (p.width(q + e).height(o + b), (0 !== i || 0 !== h) && p.css({
                                top: v + h + l,
                                left: w + i + l
                            }), g.oldPos.x = g.oldPos.x + n, g.oldPos.y = g.oldPos.y + m, 0 !== m)
                            for (t = 0; t < D.length; t++) s = D[t], /^(e|w)$/i.test(s.type) && a(s.element).height(o + b);
                        g.trigger(qa)
                    }
                }
            }
        },
        _handleMouseUp: function(f) {
            var c = this,
                e = !!c.startSent,
                d = c.options.resizeCls;
            c.resizing && (c.resizing = !1, c.resizingHandle = b, c.oldPos = b, c.startSent = !1, e && c.trigger(Y), a(c.element).removeClass(B + (d ? " " + d : "")))
        },
        resize: function(c, d) {
            var e = this,
                b = e.options;
            c = i(C(c, b.maxWidth), b.minWidth), d = i(C(d, b.maxHeight), b.minHeight), a(e.element).width(c).height(d)
        },
        enabled: function() {
            var b, c = this,
                d = a(c.element),
                e = [].slice.call(arguments);
            return e.length > 0 ? (b = !!e[0], b ? d.removeClass(ja) : d.addClass(ja), c._enabled = b, void 0) : c._enabled
        },
        destroy: function() {
            var b = this,
                c = b.options.cls;
            b.mouseTracker.destroy(), b.mouseTracker = null, a(b.element).removeClass(F + (c ? " " + c : "")), b._destroyHandles(), r.fn.destroy.call(b)
        }
    }), E.defaults = ga, e.ui.plugin("Resizable", E), ca = {
        enabled: !0,
        cls: b,
        dragCls: b,
        handle: b,
        direction: b,
        min: b,
        max: b,
        step: b,
        allowedPositions: b,
        stack: !0,
        helper: b,
        events: {}
    }, K = r.extend({
        init: function() {
            r.fn.init.apply(this, arguments);
            var c, b = this,
                d = a(b.element),
                e = b.options,
                f = e.cls;
            b.mouseTracker = new w, d.addClass(q + (f ? " " + f : "")), c = d.css(t), c !== _ && c !== aa && (b._origPosStyle = c, d.css(t, _)), b.enabled(e.enabled), b.startSent = !1
        },
        _handleMouseDown: function(i) {
            var c, b = this,
                f = b.element,
                h = b.options,
                e = h.helper,
                l = h.cls,
                n = h.dragCls;
            b._enabled && !b._dragging && (b._dragging = !0, b.startSent = !1, b._helper = b._isCustomHelper = null, b.stepPosition = b.mousePos = b.mouseTracker.getPosition(i), a(g).on(p + ".shieldDraggable" + b.getInstanceId(), m(b._handleMouseMove, b)).on(A + ".shieldDraggable" + b.getInstanceId(), m(b._handleMouseUp, b)).on(W + ".shieldDraggable" + b.getInstanceId(), m(b._handleKeyDown, b)), e && "original" !== e ? (c = I(e) ? e.call(b, {
                position: b.oriPosition,
                event: i
            }) : "clone" == e ? f.clone() : a(e), c.parents("body").length || f.after(c), /(fixed|absolute)/i.test(c.css(t)) || c.css(t, aa), x.Set(c, f, {
                source: "left top",
                target: "left top",
                overflow: "none"
            }), b._isCustomHelper = !0) : (c = f, b._isCustomHelper = !1), b._helper = c, c.addClass(B + " " + q + (l ? " " + l : "") + " " + R + (n ? " " + n : "")), b.oriPosition = {
                left: d(c, j),
                top: d(c, k)
            })
        },
        _handleMouseMove: function(A) {
            var u, p, o, z, y, l, m, g, h, e = this,
                n = a(e._helper),
                R = n.width(),
                Q = n.height(),
                x = e.options,
                B = x.step,
                F = x.direction,
                q = x.allowedPositions,
                S = q !== b && q.length > 0,
                t = x.min,
                s = x.max,
                P = e.mouseTracker,
                v = P.getPosition(A);
            if (P.isInWindow(A) && e._dragging) {
                if (z = d(n, k), y = d(n, j), S) {
                    var N, O, H, K, w, r, E = b,
                        D = b,
                        L = b,
                        M = b;
                    for (N = v.x - e.stepPosition.x, O = v.y - e.stepPosition.y, H = y + N, K = z + O, w = 0; w < q.length; w++) r = q[w], r.x !== b && (L === b || L > c(H - r.x)) && (L = c(H - r.x), E = w), r.y !== b && (M === b || M > c(K - r.y)) && (M = c(K - r.y), D = w);
                    l = y, m = z, E !== b && (l = q[E].x, e.stepPosition.x += q[E].x - y), D !== b && (m = q[D].y, e.stepPosition.y += q[D].y - z)
                } else {
                    if (g = F == J ? 0 : v.x - e.mousePos.x, h = F == G ? 0 : v.y - e.mousePos.y, f(B)) {
                        if (u = I(B) ? B.call(this, {
                                deltaX: g,
                                deltaY: h,
                                element: n,
                                domEvent: A,
                                helperLeft: d(n, j),
                                helperTop: d(n, k),
                                mouse: v
                            }) : B, Ca(u) ? p = o = u : Ba(u) && (p = u.x, o = u.y), f(p) && c(g) < p && f(o) && c(h) < o) return;
                        f(p) && p > 1 && g % p !== 0 && (g = (g >= 0 ? 1 : -1) * Z(c(g) / p) * p), f(o) && o > 1 && h % o !== 0 && (h = (h >= 0 ? 1 : -1) * Z(c(h) / o) * o)
                    }
                    l = y + g, m = i(0, z + h)
                }
                F == G && (t !== b && (l = i(t, l), l === t && (g = 0)), s !== b && (l = C(s - R, l), l === s - R && (g = 0))), F == J && (t && (m = i(t, m), m === t && (h = 0)), s && (m = C(s - Q, m), m === s - Q && (h = 0))), n.css({
                    left: l,
                    top: m
                }), e.mousePos = v, e.startSent || (e.startSent = !0, e.trigger(X, {
                    element: n,
                    domEvent: A
                }), e._adjustZIndex()), e.trigger(na, {
                    deltaX: g,
                    deltaY: h,
                    element: n,
                    domEvent: A
                })
            }
        },
        _handleMouseUp: function(f) {
            var c, a = this,
                e = a.element,
                b = a._helper;
            a._dragging && (a.startSent && (c = a.trigger(Y, {
                left: d(b, j),
                top: d(b, k),
                element: b,
                domEvent: f
            }), c.isDefaultPrevented() ? a._isCustomHelper || b.css({
                left: a.oriPosition.left,
                top: a.oriPosition.top
            }) : a._isCustomHelper && (x.Set(e, b, {
                source: "left top",
                target: "left top",
                overflow: "none"
            }), a._adjustZIndex(e))), a._endDrag())
        },
        _adjustZIndex: function(b) {
            var d = this,
                c = d.options.stack;
            c !== !1 && (f(b) || (b = d._helper), a(b).css("z-index", T(c === !0 ? "." + q : c) + 1))
        },
        _handleKeyDown: function(b) {
            var a = this,
                c = b.keyCode;
            switch (c) {
                case Da.ESC:
                    a._dragging && (a._helper.css({
                        left: a.oriPosition.left + l,
                        top: a.oriPosition.top + l
                    }), a.trigger(wa), a._endDrag())
            }
        },
        _endDrag: function() {
            var b = this,
                c = b.options.dragCls;
            b._dragging = !1, b._isCustomHelper ? a(b._helper).remove() : a(b._helper).removeClass(B + " " + R + (c ? " " + c : "")), a(g).off(p + ".shieldDraggable" + b.getInstanceId()).off(A + ".shieldDraggable" + b.getInstanceId()).off(W + ".shieldDraggable" + b.getInstanceId()), b.mousePos = b.oriPosition = b._helper = b._isCustomHelper = null
        },
        enabled: function() {
            var c, b = this,
                d = a(b.element),
                e = b.options,
                f = e.handle ? a(e.handle) : d,
                g = [].slice.call(arguments);
            return g.length > 0 ? (c = !!g[0], c ? (d.removeClass(L), b._mouseDownProxy || (b._mouseDownProxy = m(b._handleMouseDown, b), f.on(n, b._mouseDownProxy))) : (d.addClass(L), b._mouseDownProxy && (f.off(n, b._mouseDownProxy), b._mouseDownProxy = null)), b._enabled = c, void 0) : b._enabled
        },
        destroy: function() {
            var b = this,
                c = b.options.cls;
            b.mouseTracker.destroy(), b.mouseTracker = null, a(b.element).removeClass(q + (c ? " " + c : "")), b._origPosStyle && (a(b.element).css(t, b._origPosStyle), b._origPosStyle = null), r.fn.destroy.call(b)
        }
    }), K.defaults = ca, e.ui.plugin("Draggable", K)
}(jQuery, shield, this);
shield.version = '1.7.10';
! function(n, d, B, A) {
    "use strict";
    var l = d.ui.Widget,
        t = d.Constants,
        o = d.Class,
        e = document,
        r = t.SVG_NS,
        s = !!e.createElementNS && !!e.createElementNS(r, "svg").createSVGRect,
        k = n.map,
        a = d.to["int"],
        i = d.error,
        c = function(b) {
            return a(b, 10).toString(2)
        },
        z = function(b) {
            return a(b, 2)
        },
        b = function(a, b) {
            for (a += ""; a.length < b;) a = "0" + a;
            return a
        },
        q = function(a, b) {
            for (a += ""; a.length < b;) a += "0";
            return a
        },
        m = "byte",
        g = "numeric",
        h = "alphanumeric",
        f = {
            modes: [],
            addMode: function(a) {
                this.modes[a.prototype.mode] = a
            },
            byMode: function(a) {
                return this.modes[a] ? new this.modes[a] : null
            }
        },
        j = o.extend({
            mode: null,
            codeMode: null,
            validateRegex: null,
            _verErrLenTable: {
                "1L": 152,
                "1M": 128,
                "1Q": 104,
                "1H": 72,
                "2L": 272,
                "2M": 224,
                "2Q": 176,
                "2H": 128,
                "3L": 440,
                "3M": 352,
                "3Q": 272,
                "3H": 208,
                "4L": 640,
                "4M": 512,
                "4Q": 384,
                "4H": 288,
                "5L": 864,
                "5M": 688,
                "5Q": 496,
                "5H": 368,
                "6L": 1088,
                "6M": 864,
                "6Q": 608,
                "6H": 480,
                "7L": 1248,
                "7M": 992,
                "7Q": 704,
                "7H": 528,
                "8L": 1552,
                "8M": 1232,
                "8Q": 880,
                "8H": 688,
                "9L": 1856,
                "9M": 1456,
                "9Q": 1056,
                "9H": 800,
                "10L": 2192,
                "10M": 1728,
                "10Q": 1232,
                "10H": 976,
                "11L": 2592,
                "11M": 2032,
                "11Q": 1440,
                "11H": 1120,
                "12L": 2960,
                "12M": 2320,
                "12Q": 1648,
                "12H": 1264,
                "13L": 3424,
                "13M": 2672,
                "13Q": 1952,
                "13H": 1440,
                "14L": 3688,
                "14M": 2920,
                "14Q": 2088,
                "14H": 1576,
                "15L": 4184,
                "15M": 3320,
                "15Q": 2360,
                "15H": 1784,
                "16L": 4712,
                "16M": 3624,
                "16Q": 2600,
                "16H": 2024,
                "17L": 5176,
                "17M": 4056,
                "17Q": 2936,
                "17H": 2264,
                "18L": 5768,
                "18M": 4504,
                "18Q": 3176,
                "18H": 2504,
                "19L": 6360,
                "19M": 5016,
                "19Q": 3560,
                "19H": 2728,
                "20L": 6888,
                "20M": 5352,
                "20Q": 3880,
                "20H": 3080,
                "21L": 7456,
                "21M": 5712,
                "21Q": 4096,
                "21H": 3248,
                "22L": 8048,
                "22M": 6256,
                "22Q": 4544,
                "22H": 3536,
                "23L": 8752,
                "23M": 6880,
                "23Q": 4912,
                "23H": 3712,
                "24L": 9392,
                "24M": 7312,
                "24Q": 5312,
                "24H": 4112,
                "25L": 10208,
                "25M": 8e3,
                "25Q": 5744,
                "25H": 4304,
                "26L": 10960,
                "26M": 8496,
                "26Q": 6032,
                "26H": 4768,
                "27L": 11744,
                "27M": 9024,
                "27Q": 6464,
                "27H": 5024,
                "28L": 12248,
                "28M": 9544,
                "28Q": 6968,
                "28H": 5288,
                "29L": 13048,
                "29M": 10136,
                "29Q": 7288,
                "29H": 5608,
                "30L": 13880,
                "30M": 10984,
                "30Q": 7880,
                "30H": 5960,
                "31L": 14744,
                "31M": 11640,
                "31Q": 8264,
                "31H": 6344,
                "32L": 15640,
                "32M": 12328,
                "32Q": 8920,
                "32H": 6760,
                "33L": 16568,
                "33M": 13048,
                "33Q": 9368,
                "33H": 7208,
                "34L": 17528,
                "34M": 13800,
                "34Q": 9848,
                "34H": 7688,
                "35L": 18448,
                "35M": 14496,
                "35Q": 10288,
                "35H": 7888,
                "36L": 19472,
                "36M": 15312,
                "36Q": 10832,
                "36H": 8432,
                "37L": 20528,
                "37M": 15936,
                "37Q": 11408,
                "37H": 8768,
                "38L": 21616,
                "38M": 16816,
                "38Q": 12016,
                "38H": 9136,
                "39L": 22496,
                "39M": 17728,
                "39Q": 12656,
                "39H": 9776,
                "40L": 23648,
                "40M": 18672,
                "40Q": 13328,
                "40H": 10208
            },
            _errorCorrectionToMask: {
                L: "01",
                M: "00",
                Q: "11",
                H: "10"
            },
            _formatInformation: {
                "00000": "101010000010010",
                "00001": "101000100100101",
                "00010": "101111001111100",
                "00011": "101101101001011",
                "00100": "100010111111001",
                "00101": "100000011001110",
                "00110": "100111110010111",
                "00111": "100101010100000",
                "01000": "111011111000100",
                "01001": "111001011110011",
                "01010": "111110110101010",
                "01011": "111100010011101",
                "01100": "110011000101111",
                "01101": "110001100011000",
                "01110": "110110001000001",
                "01111": "110100101110110",
                10000: "001011010001001",
                10001: "001001110111110",
                10010: "001110011100111",
                10011: "001100111010000",
                10100: "000011101100010",
                10101: "000001001010101",
                10110: "000110100001100",
                10111: "000100000111011",
                11000: "011010101011111",
                11001: "011000001101000",
                11010: "011111100110001",
                11011: "011101000000110",
                11100: "010010010110100",
                11101: "010000110000011",
                11110: "010111011011010",
                11111: "010101111101101"
            },
            validate: function(a) {
                return this.validateRegex ? new RegExp(this.validateRegex).test(a) : !0
            },
            encode: function(d, c) {
                var e, o, i, n, b = this,
                    f = b._getVersion(d, c),
                    p = 4,
                    j = 21 + 4 * (f - 1),
                    k = j + 2 * p,
                    l = f + c,
                    g = b._getFormatData(d, c),
                    a = b.encodeValue(d),
                    h = b._getDataLength(d, c),
                    m = h - (g.length + a.length) > 4 ? 4 : h - (g.length + a.length);
                return a = q(a, a.length + m), e = b._getBinaryValues(g + a), a = e.join(""), a = b._padEncodedToLength(a, h), e = b._getBinaryValues(a), i = b._getIntegerValues(e), a = b._getEC(l, o, i), n = b._getBinaryMatrix(a, f, j, k, c)
            },
            encodeValue: null,
            _getBinaryMatrix: function(s, j, g, h, r) {
                var l, p, k, m, f, i, b, a, e = this,
                    o = ["000", "001", "010", "011", "100", "101", "110", "111"],
                    q = [],
                    c = [],
                    d = [],
                    n = e._getPositionAdjustmentsTable();
                for (f = 0; h > f; f++)
                    for (c[f] = [], i = 0; h > i; i++) c[f][i] = 0;
                for (f = 0; g > f; f++) d.push(new Array(g));
                if (e._fullFinderPattern(c, 4, 4), e._fillFinderPatternFilledValues(d, 0, 0), e._fullFinderPattern(c, 4, h - 11), e._fillFinderPatternFilledValues(d, 0, g - 8), e._fullFinderPattern(c, h - 11, 4), e._fillFinderPatternFilledValues(d, g - 8, 0), e._fillTimingPattern(c, d, g), c[h - 12][12] = 1, d[h - 16][8] = 1, j > 1)
                    for (f = 0; f < n[j].length; f++)
                        for (i = 0; i < n[j].length; i++) b = n[j][f] + 4, a = n[j][i] + 4, 10 == b && 10 == a || 10 == b && a == h - 11 || b == h - 11 && 10 == a || (c[b - 2][a - 2] = 1, d[b - 6][a - 6] = 1, c[b - 2][a - 1] = 1, d[b - 6][a - 5] = 1, c[b - 2][a] = 1, d[b - 6][a - 4] = 1, c[b - 2][a + 1] = 1, d[b - 6][a - 3] = 1, c[b - 2][a + 2] = 1, d[b - 6][a - 2] = 1, c[b - 1][a - 2] = 1, d[b - 5][a - 6] = 1, c[b - 1][a - 1] = 0, d[b - 5][a - 5] = 1, c[b - 1][a] = 0, d[b - 5][a - 4] = 1, c[b - 1][a + 1] = 0, d[b - 5][a - 3] = 1, c[b - 1][a + 2] = 1, d[b - 5][a - 2] = 1, c[b][a - 2] = 1, d[b - 4][a - 6] = 1, c[b][a - 1] = 0, d[b - 4][a - 5] = 1, c[b][a] = 1, d[b - 4][a - 4] = 1, c[b][a + 1] = 0, d[b - 4][a - 3] = 1, c[b][a + 2] = 1, d[b - 4][a - 2] = 1, c[b + 1][a - 2] = 1, d[b - 3][a - 6] = 1, c[b + 1][a - 1] = 0, d[b - 3][a - 5] = 1, c[b + 1][a] = 0, d[b - 3][a - 4] = 1, c[b + 1][a + 1] = 0, d[b - 3][a - 3] = 1, c[b + 1][a + 2] = 1, d[b - 3][a - 2] = 1, c[b + 2][a - 2] = 1, d[b - 2][a - 6] = 1, c[b + 2][a - 1] = 1, d[b - 2][a - 5] = 1, c[b + 2][a] = 1, d[b - 2][a - 4] = 1, c[b + 2][a + 1] = 1, d[b - 2][a - 3] = 1, c[b + 2][a + 2] = 1, d[b - 2][a - 2] = 1);
                for (j >= 7 && e._fillHigherVersionData(c, d, j, g, h), m = 0; 8 > m; m++) {
                    for (l = 0, k = [], f = 0; f < c.length; f++) k.push(c[f].slice(0));
                    e._fillFormatData(c, d, g, h, o[m], r), e._fillMatrix(d, k, o[m], g, s), l += e._calcPenalty1(k, g), l += e._calcPenalty2(k, g), l += e._calcPenalty3(k, g), l += e._calcPenalty4(k, g), q.push(l)
                }
                return p = e._getSmallestPenaltyIndex(q), e._fillFormatData(c, d, g, h, o[p], r), e._fillMatrix(d, c, o[p], g, s), c
            },
            _fillHigherVersionData: function(a, b, g, c, d) {
                var e = this,
                    h = {
                        7: [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
                        8: [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                        9: [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0],
                        10: [1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
                        11: [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
                        12: [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
                        13: [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                        14: [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
                        15: [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                        16: [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0],
                        17: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
                        18: [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
                        19: [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
                        20: [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
                        21: [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
                        22: [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
                        23: [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
                        24: [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
                        25: [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        26: [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
                        27: [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
                        28: [0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
                        29: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0],
                        30: [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
                        31: [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
                        32: [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                        33: [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                        34: [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                        35: [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
                        36: [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
                        37: [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                        38: [0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
                        39: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
                        40: [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1]
                    },
                    f = h[g];
                e._fillUpperVersionInformation(a, b, f, c, d), e._fillLowerVersionInformation(a, b, f, c, d)
            },
            _fillUpperVersionInformation: function(c, d, e, h, i) {
                var a, f = i - 15,
                    g = h - 11,
                    b = 0;
                for (a = 4; 10 > a; a++) c[a][f] = e[b], d[a - 4][g] = 1, b++, c[a][f + 1] = e[b], d[a - 4][g + 1] = 1, b++, c[a][f + 2] = e[b], d[a - 4][g + 2] = 1, b++
            },
            _fillLowerVersionInformation: function(c, d, e, h, i) {
                var a, f = i - 13,
                    g = h - 9,
                    b = 0;
                for (a = 4; 10 > a; a++) c[f][a] = e[b], d[g][a - 4] = 1, b++, c[f - 1][a] = e[b], d[g - 1][a - 4] = 1, b++, c[f - 2][a] = e[b], d[g - 2][a - 4] = 1, b++
            },
            _getSmallestPenaltyIndex: function(b) {
                var a, d = b[0],
                    c = 0;
                for (a = 0; a < b.length; a++) b[a] < d && (c = a);
                return c
            },
            _calcPenalty1: function(e, f) {
                var g, a, b, c, d = 0;
                for (a = 0; f > a; a++)
                    for (c = 1, b = 1; f > b; b++) g = e[a + 4][b + 4], g === e[a + 4][b + 3] ? (c++, 5 == c ? d += 3 : c > 5 && d++) : c = 1;
                for (b = 0; f > b; b++)
                    for (c = 1, a = 1; f > a; a++) g = e[a + 4][b + 4], g === e[a + 3][b + 4] ? (c++, 5 === c ? d += 3 : c > 5 && d++) : c = 1;
                return d
            },
            _calcPenalty2: function(c, e) {
                var d, a, b, f = 0;
                for (a = 0; e - 1 > a; a++)
                    for (b = 0; e - 1 > b; b++) d = c[a + 4][b + 4], d == c[a + 4][b + 5] && d == c[a + 5][b + 4] && d == c[a + 5][b + 5] && (f += 3);
                return f
            },
            _calcPenalty3: function(c, d) {
                var a, b, e = 0;
                for (a = 0; d > a; a++)
                    for (b = 0; d - 7 >= b; b++) c[a + 4][b + 4] && !c[a + 4][b + 5] && c[a + 4][b + 6] && c[a + 4][b + 7] && c[a + 4][b + 8] && !c[a + 4][b + 9] && c[a + 4][b + 10] && (e += 40);
                for (b = 0; d > b; b++)
                    for (a = 0; d - 7 >= a; a++) c[a + 4][b + 4] && !c[a + 5][b + 4] && c[a + 6][b + 4] && c[a + 7][b + 4] && c[a + 8][b + 4] && !c[a + 9][b + 4] && c[a + 10][b + 4] && (e += 40);
                return e
            },
            _calcPenalty4: function(g, e) {
                var b, c, h = 0,
                    d = 0,
                    f = 0;
                for (b = 0; e > b; b++)
                    for (c = 0; e > c; c++) g[b + 4][c + 4] ? d++ : f++;
                return h = a(2 * (d / (d + f) * 100 - 50))
            },
            _fillFormatData: function(b, d, e, i, j, l) {
                var h = this,
                    k = h._errorCorrectionToMask[l] + j,
                    c = h._formatInformation[k],
                    g = i - 5,
                    f = i - 5;
                b[12][4] = a(c.charAt(0)), b[12][5] = a(c.charAt(1)), b[12][6] = a(c.charAt(2)), b[12][7] = a(c.charAt(3)), b[12][8] = a(c.charAt(4)), b[12][9] = a(c.charAt(5)), b[12][11] = a(c.charAt(6)), b[12][12] = a(c.charAt(7)), b[11][12] = a(c.charAt(8)), b[9][12] = a(c.charAt(9)), b[8][12] = a(c.charAt(10)), b[7][12] = a(c.charAt(11)), b[6][12] = a(c.charAt(12)), b[5][12] = a(c.charAt(13)), b[4][12] = a(c.charAt(14)), b[g][12] = a(c.charAt(0)), b[g - 1][12] = a(c.charAt(1)), b[g - 2][12] = a(c.charAt(2)), b[g - 3][12] = a(c.charAt(3)), b[g - 4][12] = a(c.charAt(4)), b[g - 5][12] = a(c.charAt(5)), b[g - 6][12] = a(c.charAt(6)), b[12][f - 7] = a(c.charAt(7)), b[12][f - 6] = a(c.charAt(8)), b[12][f - 5] = a(c.charAt(9)), b[12][f - 4] = a(c.charAt(10)), b[12][f - 3] = a(c.charAt(11)), b[12][f - 2] = a(c.charAt(12)), b[12][f - 1] = a(c.charAt(13)), b[12][f] = a(c.charAt(14)), d[8][0] = 1, d[8][1] = 1, d[8][2] = 1, d[8][3] = 1, d[8][4] = 1, d[8][5] = 1, d[8][7] = 1, d[8][8] = 1, d[7][8] = 1, d[5][8] = 1, d[4][8] = 1, d[3][8] = 1, d[2][8] = 1, d[1][8] = 1, d[0][8] = 1, d[e - 1][8] = 1, d[e - 2][8] = 1, d[e - 3][8] = 1, d[e - 4][8] = 1, d[e - 5][8] = 1, d[e - 6][8] = 1, d[e - 7][8] = 1, d[8][e - 8] = 1, d[8][e - 7] = 1, d[8][e - 6] = 1, d[8][e - 5] = 1, d[8][e - 4] = 1, d[8][e - 3] = 1, d[8][e - 2] = 1, d[8][e - 1] = 1
            },
            _fillMatrix: function(e, f, g, j, h) {
                var a, b, i = this,
                    c = 0,
                    d = !0;
                for (a = j - 1; a >= 0; a -= 2)
                    if (6 == a && a--, d) {
                        for (b = j - 1; b >= 0; b--) e[b][a] || (i._fillModule(b, a, c, f, g, h), c++), a - 1 >= 0 && !e[b][a - 1] && (i._fillModule(b, a - 1, c, f, g, h), c++);
                        d = !d
                    } else {
                        for (b = 0; j > b; b++) e[b][a] || (i._fillModule(b, a, c, f, g, h), c++), a - 1 >= 0 && !e[b][a - 1] && (i._fillModule(b, a - 1, c, f, g, h), c++);
                        d = !d
                    }
            },
            _fillModule: function(a, b, c, d, e, f) {
                var g = this;
                c < f.length ? g._fillCharacter(a, b, f.charAt(c), d, e) : g._fillCharacter(a, b, "0", d, e)
            },
            _fillCharacter: function(a, b, d, f, g) {
                var c, e;
                switch (g) {
                    case "000":
                        c = (a + b) % 2 === 0;
                        break;
                    case "001":
                        c = a % 2 === 0;
                        break;
                    case "010":
                        c = b % 3 === 0;
                        break;
                    case "011":
                        c = (a + b) % 3 === 0;
                        break;
                    case "100":
                        c = (a / 2 + b / 3) % 2 === 0;
                        break;
                    case "101":
                        c = a * b % 2 + a * b % 3 === 0;
                        break;
                    case "110":
                        c = (a * b % 2 + a * b % 3) % 2 === 0;
                        break;
                    case "111":
                        c = ((a + b) % 2 + a * b % 3) % 2 === 0;
                        break;
                    default:
                        c = (a + b) % 2 === 0
                }
                e = c ? "0" == d ? 1 : 0 : "0" == d ? 0 : 1, f[a + 4][b + 4] = e
            },
            _fillTimingPattern: function(d, e, f) {
                for (var a = 10, b = 12, c = !0; f - 4 > b;) c && (d[a][b] = 1), e[a - 4][b - 4] = 1, c = !c, b++;
                for (b = 10, a = 12, c = !0; f - 4 > a;) c && (d[a][b] = 1), e[a - 4][b - 4] = 1, c = !c, a++
            },
            _fullFinderPattern: function(d, b, c) {
                var a;
                for (a = 0; 7 > a; a++) d[b + a][c] = 1, d[b][c + a] = 1, d[b + a][c + 6] = 1, d[b + 6][c + a] = 1;
                for (b += 2, c += 2, a = 0; 3 > a; a++) d[b + a][c] = 1, d[b + a][c + 1] = 1, d[b + a][c + 2] = 1
            },
            _fillFinderPatternFilledValues: function(g, a, b) {
                var c, d, e, f;
                for (0 === a && 0 === b ? c = d = 8 : 0 === a && b > 0 ? (c = 8, d = b + 8) : (c = a + 8, d = 8), e = a; c > e; e++)
                    for (f = b; d > f; f++) g[e][f] = 1
            },
            _getEC: function(E, F, y) {
                for (var u, v, r = this, B = r._getCodewordsLengthTable(), e = B[E], p = 0, j = [], h = [], g = [], f = [], k = [], i = [], q = [], o = [], x = e.firstBlockCount, w = e.secondBlockCount, m = [], n = []; x > 0; x--) {
                    for (m = [], u = 0; u < e.firstDataCodeWords; u++) m[m.length] = y[p], p++;
                    j[j.length] = m, k[k.length] = r._getErrorCorrectionForBlock(m, e)
                }
                for (; w > 0; w--) {
                    for (n = [], v = 0; v < e.secondBlockCodeWords; v++) n[n.length] = y[p], p++;
                    h[h.length] = n, i[i.length] = r._getErrorCorrectionForBlock(n, e)
                }
                var l, z = e.firstDataCodeWords * e.firstBlockCount + e.secondBlockCodeWords * e.secondBlockCount,
                    A = e.codewordsPerBlock * e.firstBlockCount + e.codewordsPerBlock * e.secondBlockCount,
                    a = 0,
                    s = j.length + h.length;
                for (l = 0; s > l; l++) 0 === a ? j.length > 0 ? (g[g.length] = j[0], j.splice(0, 1)) : (g[g.length] = h[0], a++, h.splice(0, 1)) : 1 === a && h.length > 0 && (g[g.length] = h[0], h.splice(0, 1));
                for (a = 0, s = k.length + i.length, l = 0; s > l; l++) 0 === a ? k.length > 0 ? (f[f.length] = k[0], k.splice(0, 1)) : (f[f.length] = i[0], a++, i.splice(0, 1)) : 1 === a && i.length > 0 && (f[f.length] = i[0], i.splice(0, 1));
                var d, C = g.length,
                    D = f.length,
                    t = "";
                for (a = 0, d = 0; z > d; d++) a === C && (a = 0), g[a].length > 0 ? (q[q.length] = g[a][0], g[a].splice(0, 1), a++) : (a++, d--);
                for (a = 0, d = 0; A > d; d++) a === D && (a = 0), f[a].length > 0 ? (o[o.length] = f[a][0], f[a].splice(0, 1), a++) : (a++, d--);
                for (d = 0; d < q.length; d++) t += b(c(q[d]), 8);
                for (d = 0; d < o.length; d++) t += b(c(o[d]), 8);
                return t
            },
            _getErrorCorrectionForBlock: function(f, i) {
                var c, a, e, g, h = i.codewordsPerBlock,
                    b = [],
                    d = [],
                    j = 0,
                    k = {
                        7: [87, 229, 146, 149, 238, 102, 21],
                        10: [251, 67, 46, 61, 118, 70, 64, 94, 32, 45],
                        13: [74, 152, 176, 100, 86, 100, 106, 104, 130, 218, 206, 140, 78],
                        15: [8, 183, 61, 91, 202, 37, 51, 58, 58, 237, 140, 124, 5, 99, 105],
                        16: [120, 104, 107, 109, 102, 161, 76, 3, 91, 191, 147, 169, 182, 194, 225, 120],
                        17: [43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136],
                        18: [215, 234, 158, 94, 184, 97, 118, 170, 79, 187, 152, 148, 252, 179, 5, 98, 96, 153],
                        20: [17, 60, 79, 50, 61, 163, 26, 187, 202, 180, 221, 225, 83, 239, 156, 164, 212, 212, 188, 190],
                        22: [210, 171, 247, 242, 93, 230, 14, 109, 221, 53, 200, 74, 8, 172, 98, 80, 219, 134, 160, 105, 165, 231],
                        24: [229, 121, 135, 48, 211, 117, 251, 126, 159, 180, 169, 152, 192, 226, 228, 218, 111, 0, 117, 232, 87, 96, 227, 21],
                        26: [173, 125, 158, 2, 103, 182, 118, 17, 145, 201, 111, 28, 165, 53, 161, 21, 245, 142, 13, 102, 48, 227, 153, 145, 218, 70],
                        28: [168, 223, 200, 104, 224, 234, 108, 180, 110, 190, 195, 147, 205, 27, 232, 201, 21, 43, 245, 87, 42, 195, 212, 119, 242, 37, 9, 123],
                        30: [41, 173, 145, 152, 216, 31, 179, 182, 50, 48, 110, 86, 239, 96, 222, 125, 42, 173, 226, 193, 224, 130, 156, 37, 251, 216, 238, 40, 192, 180]
                    },
                    l = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 1],
                    m = [-1, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175];
                for (c = 0; c < f.length + h; c++) d[j++] = c < f.length ? f[c] : 0;
                for (c = 0; c < f.length; c++)
                    if (e = d[0], d.splice(0, 1), 0 !== e) {
                        for (b = k[h].slice(0), e = m[e], a = 0; a < b.length; a++) g = e + b[a], g > 255 && (g %= 255), b[a] = g;
                        for (a = 0; a < b.length; a++) b[a] = l[b[a]];
                        for (a = 0; a < b.length; a++) d[a] = d[a] ^ b[a]
                    }
                return d
            },
            _getIntegerValues: function(a) {
                return k(a, function(a) {
                    return z(a)
                })
            },
            _getBinaryValues: function(b) {
                var a, c = [];
                for (a = 0; a < b.length; a += 8) a + 8 <= b.length ? c.push(b.substr(a, 8)) : c.push(q(b.substring(a), 8));
                return c
            },
            _padEncodedToLength: function(a, b) {
                if (a.length >= b) return a.substr(0, b);
                for (var c = a, e = "11101100", f = "00010001", d = !0; c.length < b;) c += d ? e : f, d = !d;
                return c
            },
            _getVersion: function(b, c) {
                var a, d = b.length;
                for (a = 1; 39 > a && !(this._verErrLenTable[a + "" + c] / 8 >= d); a++);
                return a + 1
            },
            _getDataLength: function(c, a) {
                var b = this;
                return b._verErrLenTable[b._getVersion(c, a) + "" + a]
            },
            _getFormatData: function(a, d) {
                return this.codeMode + b(c(a.length), this._getFormatLengthTotal(a, d))
            },
            _getFormatLengthTotal: function(d, e) {
                var c = this,
                    a = c.mode,
                    b = c._getVersion(d, e);
                return b >= 1 && 9 >= b ? a == g ? 10 : a == h ? 9 : 8 : b >= 10 && 26 >= b ? a == g ? 12 : a == h ? 11 : a == m ? 16 : 10 : a == g ? 14 : a == h ? 13 : a == m ? 16 : 12
            },
            _getCodewordsLengthTable: function() {
                var b = this;
                if (b._clt) return b._clt;
                var d, e, c = [7, 1, 19, 0, 0, 10, 1, 16, 0, 0, 13, 1, 13, 0, 0, 17, 1, 9, 0, 0, 10, 1, 34, 0, 0, 16, 1, 28, 0, 0, 22, 1, 22, 0, 0, 28, 1, 16, 0, 0, 15, 1, 55, 0, 0, 26, 1, 44, 0, 0, 18, 2, 17, 0, 0, 22, 2, 13, 0, 0, 20, 1, 80, 0, 0, 18, 2, 32, 0, 0, 26, 2, 24, 0, 0, 16, 4, 9, 0, 0, 26, 1, 108, 0, 0, 24, 2, 43, 0, 0, 18, 2, 15, 2, 16, 22, 2, 11, 2, 12, 18, 2, 68, 0, 0, 16, 4, 27, 0, 0, 24, 4, 19, 0, 0, 28, 4, 15, 0, 0, 20, 2, 78, 0, 0, 18, 4, 31, 0, 0, 18, 2, 14, 4, 15, 26, 4, 13, 1, 14, 24, 2, 97, 0, 0, 22, 2, 38, 2, 39, 22, 4, 18, 2, 19, 26, 4, 14, 2, 15, 30, 2, 116, 0, 0, 22, 3, 36, 2, 37, 20, 4, 16, 4, 17, 24, 4, 12, 4, 13, 18, 2, 68, 2, 69, 26, 4, 43, 1, 44, 24, 6, 19, 2, 20, 28, 6, 15, 2, 16, 20, 4, 81, 0, 0, 30, 1, 50, 4, 51, 28, 4, 22, 4, 23, 24, 3, 12, 8, 13, 24, 2, 92, 2, 93, 22, 6, 36, 2, 37, 26, 4, 20, 6, 21, 28, 7, 14, 4, 15, 26, 4, 107, 0, 0, 22, 8, 37, 1, 38, 24, 8, 20, 4, 21, 22, 12, 11, 4, 12, 30, 3, 115, 1, 116, 24, 4, 40, 5, 41, 20, 11, 16, 5, 17, 24, 11, 12, 5, 13, 22, 5, 87, 1, 88, 24, 5, 41, 5, 42, 30, 5, 24, 7, 25, 24, 11, 12, 7, 13, 24, 5, 98, 1, 99, 28, 7, 45, 3, 46, 24, 15, 19, 2, 20, 30, 3, 15, 13, 16, 28, 1, 107, 5, 108, 28, 10, 46, 1, 47, 28, 1, 22, 15, 23, 28, 2, 14, 17, 15, 30, 5, 120, 1, 121, 26, 9, 43, 4, 44, 28, 17, 22, 1, 23, 28, 2, 14, 19, 15, 28, 3, 113, 4, 114, 26, 3, 44, 11, 45, 26, 17, 21, 4, 22, 26, 9, 13, 16, 14, 28, 3, 107, 5, 108, 26, 3, 41, 13, 42, 30, 15, 24, 5, 25, 28, 15, 15, 10, 16, 28, 4, 116, 4, 117, 26, 17, 42, 0, 0, 28, 17, 22, 6, 23, 30, 19, 16, 6, 17, 28, 2, 111, 7, 112, 28, 17, 46, 0, 0, 30, 7, 24, 16, 25, 24, 34, 13, 0, 0, 30, 4, 121, 5, 122, 28, 4, 47, 14, 48, 30, 11, 24, 14, 25, 30, 16, 15, 14, 16, 30, 6, 117, 4, 118, 28, 6, 45, 14, 46, 30, 11, 24, 16, 25, 30, 30, 16, 2, 17, 26, 8, 106, 4, 107, 28, 8, 47, 13, 48, 30, 7, 24, 22, 25, 30, 22, 15, 13, 16, 28, 10, 114, 2, 115, 28, 19, 46, 4, 47, 28, 28, 22, 6, 23, 30, 33, 16, 4, 17, 30, 8, 122, 4, 123, 28, 22, 45, 3, 46, 30, 8, 23, 26, 24, 30, 12, 15, 28, 16, 30, 3, 117, 10, 118, 28, 3, 45, 23, 46, 30, 4, 24, 31, 25, 30, 11, 15, 31, 16, 30, 7, 116, 7, 117, 28, 21, 45, 7, 46, 30, 1, 23, 37, 24, 30, 19, 15, 26, 16, 30, 5, 115, 10, 116, 28, 19, 47, 10, 48, 30, 15, 24, 25, 25, 30, 23, 15, 25, 16, 30, 13, 115, 3, 116, 28, 2, 46, 29, 47, 30, 42, 24, 1, 25, 30, 23, 15, 28, 16, 30, 17, 115, 0, 0, 28, 10, 46, 23, 47, 30, 10, 24, 35, 25, 30, 19, 15, 35, 16, 30, 17, 115, 1, 116, 28, 14, 46, 21, 47, 30, 29, 24, 19, 25, 30, 11, 15, 46, 16, 30, 13, 115, 6, 116, 28, 14, 46, 23, 47, 30, 44, 24, 7, 25, 30, 59, 16, 1, 17, 30, 12, 121, 7, 122, 28, 12, 47, 26, 48, 30, 39, 24, 14, 25, 30, 22, 15, 41, 16, 30, 6, 121, 14, 122, 28, 6, 47, 34, 48, 30, 46, 24, 10, 25, 30, 2, 15, 64, 16, 30, 17, 122, 4, 123, 28, 29, 46, 14, 47, 30, 49, 24, 10, 25, 30, 24, 15, 46, 16, 30, 4, 122, 18, 123, 28, 13, 46, 32, 47, 30, 48, 24, 14, 25, 30, 42, 15, 32, 16, 30, 20, 117, 4, 118, 28, 40, 47, 7, 48, 30, 43, 24, 22, 25, 30, 10, 15, 67, 16, 30, 19, 118, 6, 119, 28, 18, 47, 31, 48, 30, 34, 24, 34, 25, 30, 20, 15, 61, 16],
                    f = ["L", "M", "Q", "H"],
                    a = 0;
                for (b._clt = {}, d = 1; 40 >= d; d++)
                    for (e = 0; e < f.length; e++) b._clt[d + "" + f[e]] = {
                        codewordsPerBlock: c[a],
                        firstBlockCount: c[a + 1],
                        firstDataCodeWords: c[a + 2],
                        secondBlockCount: c[a + 3],
                        secondBlockCodeWords: c[a + 4]
                    }, a += 5;
                return b._clt
            },
            _getPositionAdjustmentsTable: function() {
                var a = [],
                    b = 2;
                return a[b++] = [6, 18], a[b++] = [6, 22], a[b++] = [6, 26], a[b++] = [6, 30], a[b++] = [6, 34], a[b++] = [6, 22, 38], a[b++] = [6, 24, 42], a[b++] = [6, 26, 46], a[b++] = [6, 28, 50], a[b++] = [6, 30, 54], a[b++] = [6, 32, 58], a[b++] = [6, 34, 62], a[b++] = [6, 26, 46, 66], a[b++] = [6, 26, 48, 70], a[b++] = [6, 26, 50, 74], a[b++] = [6, 30, 54, 78], a[b++] = [6, 30, 56, 82], a[b++] = [6, 30, 58, 86], a[b++] = [6, 34, 62, 90], a[b++] = [6, 28, 50, 72, 94], a[b++] = [6, 26, 50, 74, 98], a[b++] = [6, 30, 54, 78, 102], a[b++] = [6, 28, 54, 80, 106], a[b++] = [6, 32, 58, 84, 110], a[b++] = [6, 30, 58, 86, 114], a[b++] = [6, 34, 62, 90, 118], a[b++] = [6, 26, 50, 74, 98, 122], a[b++] = [6, 30, 54, 78, 102, 126], a[b++] = [6, 26, 52, 78, 104, 130], a[b++] = [6, 30, 56, 82, 108, 134], a[b++] = [6, 34, 60, 86, 112, 138], a[b++] = [6, 30, 58, 86, 114, 142], a[b++] = [6, 34, 62, 90, 118, 146], a[b++] = [6, 30, 54, 78, 102, 126, 150], a[b++] = [6, 24, 50, 76, 102, 128, 154], a[b++] = [6, 28, 54, 80, 106, 132, 158], a[b++] = [6, 32, 58, 84, 110, 136, 162], a[b++] = [6, 26, 54, 82, 110, 138, 166], a[b++] = [6, 30, 58, 86, 114, 142, 170], a
            }
        }),
        u = j.extend({
            mode: g,
            codeMode: "0001",
            validateRegex: "^\\d+$",
            encodeValue: function(d) {
                for (var e = []; d.length > 0;) d.length > 2 ? (e.push(b(c(a(d.substr(0, 3))), 10)), d = d.substr(3)) : 2 === d.length ? (e.push(b(c(a(d)), 7)), d = "") : (e.push(b(c(a(d)), 4)), d = "");
                return 0 === e.length && e.push(b(c(0), 4)), e.join("")
            }
        });
    f.addMode(u);
    var v = j.extend({
        mode: m,
        codeMode: "0100",
        validateRegex: "^[0-9A-Za-z'\\\r\\\n\\ \\!\\\"\\#\\$\\%\\&\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\¥\\]\\^\\_\\`\\{\\|\\}\\¯\\｡\\｢\\｣\\､\\･\\ｦ\\ｧ\\ｨ\\ｩ\\ｪ\\ｫ\\ｬ\\ｭ\\ｮ\\ｯ\\ｰ\\ｱ\\ｲ\\ｳ\\ｴ\\ｵ\\ｶ\\ｷ\\ｸ\\ｹ\\ｺ\\ｻ\\ｼ\\ｽ\\ｾ\\ｿ\\ﾀ\\ﾁ\\ﾂ\\ﾃ\\ﾄ\\ﾅ\\ﾆ\\ﾇ\\ﾈ\\ﾉ\\ﾊ\\ﾋ\\ﾌ\\ﾍ\\ﾎ\\ﾏ\\ﾐ\\ﾑ\\ﾒ\\ﾓ\\ﾔ\\ﾕ\\ﾖ\\ﾗ\\ﾘ\\ﾙ\\ﾚ\\ﾛ\\ﾜ\\ﾝ\\ﾞ\\ﾟ]+$",
        encodingTable: {
            "\r": "13",
            "\n": "10",
            " ": "32",
            "!": "33",
            '"': "34",
            "#": "35",
            $: "36",
            "%": "37",
            "&": "38",
            "'": "39",
            "(": "40",
            ")": "41",
            "*": "42",
            "+": "43",
            ",": "44",
            "-": "45",
            ".": "46",
            "/": "47",
            0: "48",
            1: "49",
            2: "50",
            3: "51",
            4: "52",
            5: "53",
            6: "54",
            7: "55",
            8: "56",
            9: "57",
            ":": "58",
            ";": "59",
            "<": "60",
            "=": "61",
            ">": "62",
            "?": "63",
            "@": "64",
            A: "65",
            B: "66",
            C: "67",
            D: "68",
            E: "69",
            F: "70",
            G: "71",
            H: "72",
            I: "73",
            J: "74",
            K: "75",
            L: "76",
            M: "77",
            N: "78",
            O: "79",
            P: "80",
            Q: "81",
            R: "82",
            S: "83",
            T: "84",
            U: "85",
            V: "86",
            W: "87",
            X: "88",
            Y: "89",
            Z: "90",
            "[": "91",
            "¥": "92",
            "]": "93",
            "^": "94",
            _: "95",
            "`": "96",
            a: "97",
            b: "98",
            c: "99",
            d: "100",
            e: "101",
            f: "102",
            g: "103",
            h: "104",
            i: "105",
            j: "106",
            k: "107",
            l: "108",
            m: "109",
            n: "110",
            o: "111",
            p: "112",
            q: "113",
            r: "114",
            s: "115",
            t: "116",
            u: "117",
            v: "118",
            w: "119",
            x: "120",
            y: "121",
            z: "122",
            "{": "123",
            "|": "124",
            "}": "125",
            "¯": "126",
            "｡": "161",
            "｢": "162",
            "｣": "163",
            "､": "164",
            "･": "165",
            "ｦ": "166",
            "ｧ": "167",
            "ｨ": "168",
            "ｩ": "169",
            "ｪ": "170",
            "ｫ": "171",
            "ｬ": "172",
            "ｭ": "173",
            "ｮ": "174",
            "ｯ": "175",
            "ｰ": "176",
            "ｱ": "177",
            "ｲ": "178",
            "ｳ": "179",
            "ｴ": "180",
            "ｵ": "181",
            "ｶ": "182",
            "ｷ": "183",
            "ｸ": "184",
            "ｹ": "185",
            "ｺ": "186",
            "ｻ": "187",
            "ｼ": "188",
            "ｽ": "189",
            "ｾ": "190",
            "ｿ": "191",
            "ﾀ": "192",
            "ﾁ": "193",
            "ﾂ": "194",
            "ﾃ": "195",
            "ﾄ": "196",
            "ﾅ": "197",
            "ﾆ": "198",
            "ﾇ": "199",
            "ﾈ": "200",
            "ﾉ": "201",
            "ﾊ": "202",
            "ﾋ": "203",
            "ﾌ": "204",
            "ﾍ": "205",
            "ﾎ": "206",
            "ﾏ": "207",
            "ﾐ": "208",
            "ﾑ": "209",
            "ﾒ": "210",
            "ﾓ": "211",
            "ﾔ": "212",
            "ﾕ": "213",
            "ﾖ": "214",
            "ﾗ": "215",
            "ﾘ": "216",
            "ﾙ": "217",
            "ﾚ": "218",
            "ﾛ": "219",
            "ﾜ": "220",
            "ﾝ": "221",
            "ﾞ": "222",
            "ﾟ": "223"
        },
        encodeValue: function(e) {
            var d, g = this,
                f = [];
            for (d = 0; d < e.length; d++) f.push(b(c(a(g.encodingTable[e.charAt(d)])), 8));
            return f.join("")
        }
    });
    f.addMode(v);
    var w = j.extend({
        mode: h,
        codeMode: "0010",
        validateRegex: "^[0-9A-Z \\$\\%\\*\\+\\-\\.\\/\\:]+$",
        encodingTable: {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            A: "10",
            B: "11",
            C: "12",
            D: "13",
            E: "14",
            F: "15",
            G: "16",
            H: "17",
            I: "18",
            J: "19",
            K: "20",
            L: "21",
            M: "22",
            N: "23",
            O: "24",
            P: "25",
            Q: "26",
            R: "27",
            S: "28",
            T: "29",
            U: "30",
            V: "31",
            W: "32",
            X: "33",
            Y: "34",
            Z: "35",
            " ": "36",
            $: "37",
            "%": "38",
            "*": "39",
            "+": "40",
            "-": "41",
            ".": "42",
            "/": "43",
            ":": "44"
        },
        encodeValue: function(h) {
            var l, d, j, m, e, o = this,
                n = h.length % 2 !== 0,
                g = [],
                f = [],
                k = [],
                i = 0;
            for (d = 0; d < h.length; d++) l = h.charAt(d), g[d] = o.encodingTable[l];
            for (d = 0; d < g.length; d += 2) j = g[d], d + 1 <= g.length - 1 ? (m = g[d + 1], f[i] = a(45 * j) + a(m)) : f[i] = j, i++;
            for (d = 0; d < f.length; d++) e = c(f[d]), n && d === f.length - 1 ? (e = b(e, 6), k[d] = e) : (e = b(e, 11), k[d] = e);
            return k.join("")
        }
    });
    f.addMode(w);
    var x = o.extend({
            init: function(a) {
                var b = this,
                    c = a.style;
                b.options = a, b.size = a.size - 2 * c.padding, s || e.namespaces.sqrv || (e.namespaces.add("sqrv", "urn:schemas-microsoft-com:vml", "#default#VML"), e.createStyleSheet().cssText = "sqrv\\:fill, sqrv\\:path, sqrv\\:shape, sqrv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ")
            },
            all: function(i) {
                var e, f, m = this,
                    d = m.size,
                    n = m.options,
                    c = n.style,
                    b = d / i.length,
                    g = "",
                    j = [];
                for (c.padding && (g += "margin:" + c.padding + "px;"), e = 0; e < i.length; e++)
                    for (f = 0; f < i[e].length; f++) i[e][f] && j.push({
                        x: f * b,
                        y: e * b
                    });
                if (s) return '<svg xmlns="' + r + '" version="1.1" width="' + d + '" height="' + d + '" shape-rendering="crispEdges"' + (g ? ' style="' + g + '" ' : "") + '><path d="' + k(j, function(a) {
                    return "M" + a.x + " " + a.y + " L" + (a.x + b) + " " + a.y + " L" + (a.x + b) + " " + (a.y + b) + " L" + a.x + " " + (a.y + b) + " z"
                }).join(" ") + '" fill="' + c.color + '" stroke="' + c.color + '" stroke-width="0" /></svg>';
                var l = 1e4 / d,
                    h = a(b * l),
                    o = k(j, function(d) {
                        var b = a(d.x * l),
                            c = a(d.y * l);
                        return "m" + b + "," + c + " l" + (b + h) + "," + c + "," + (b + h) + "," + (c + h) + "," + b + "," + (c + h)
                    }).join(" ") + " e";
                return '<sqrv:shape style="z-index:200; position:absolute; width:' + d + "px; height:" + d + "px; display:block; " + g + '" coordsize="10000,10000" path="' + o + '" filled="t" fillcolor="' + c.color + '" stroked="f" strokecolor="' + c.color + '" strokeweight="0"></sqrv:shape>'
            }
        }),
        y = {
            value: "",
            mode: "byte",
            errorLevel: "L",
            size: 300,
            style: {
                background: null,
                borderColor: null,
                borderStyle: null,
                borderWidth: 0,
                color: "#000000",
                padding: 5
            }
        },
        p = l.extend({
            init: function(p, o) {
                l.fn.init.apply(this, arguments);
                var j, e = this,
                    a = e.options,
                    c = a.style,
                    d = a.value,
                    k = (a.mode + "").toLowerCase(),
                    b = a.errorLevel,
                    h = a.dieOnError,
                    g = f.byMode(k),
                    m = new x(a);
                return n(e.element).css({
                    background: c.background,
                    borderColor: c.borderColor,
                    borderStyle: c.borderStyle,
                    borderWidth: c.borderWidth,
                    width: a.size,
                    height: a.size
                }), g ? g.validate(d) ? "L" != b && "M" != b && "Q" != b && "H" != b ? void i("Invalid errorLevel: " + b, h) : (j = g.encode(d, b), void n(e.element).html(m.all(j))) : void i("Invalid qrcode value: " + d, h) : void i("Invalid qrcode mode: " + k, h)
            },
            destroy: function() {
                this.element.empty(), l.fn.destroy.call(this)
            }
        });
    p.defaults = y, d.ui.plugin("QRcode", p)
}(jQuery, shield, this);
! function(a, e, i, m) {
    "use strict";
    var g, f, c = e.ui.Widget,
        d = document,
        b = Math.ceil,
        j = navigator.userAgent,
        k = i.opera,
        l = /msie/i.test(j) && !k,
        h = l && 7 === d.documentMode;
    a.extend;
    g = {
        show: !1,
        showImage: !0,
        text: null,
        template: null,
        useSmallImage: !1
    }, f = c.extend({
        init: function(b, d) {
            var a = this;
            c.fn.init.apply(a, arguments), a.refresh(), a.options.show ? a.show() : a.hide()
        },
        destroy: function() {
            var b = this;
            a(b.mainElement).remove(), b.options.showImage && (a(b.loadingImage).remove(), b.loadingImage = null), b.loadingText && (a(b.loadingText).remove(), b.loadingText = null), a(b.backgroundElement).remove(), b.mainElement = b.backgroundElement = null, c.fn.destroy.call(b)
        },
        _render: function() {
            var f, c = this,
                g = c.options,
                e = g.template;
            if (c.mainElement = f = a("<div/>").appendTo(d.body), f.addClass("sui-loading-panel"), h && f.addClass("sui-loading-panel-ie7"), e) {
                e = a(e.replace(/^\s+/, "").replace(/\s+$/, "")), e.appendTo(d.body);
                var k = b((c.element.height() - e.height()) / 2),
                    l = b((c.element.width() - e.width()) / 2);
                e.css({
                    "z-index": "inherit",
                    position: "relative",
                    dispaly: "block",
                    top: k + "px",
                    left: l + "px"
                }).appendTo(f), c.template = e
            } else {
                if (g.showImage) {
                    var i = a("<span/>").appendTo(f);
                    c.loadingImage = i, g.useSmallImage ? i.addClass("sui-loading-image-small") : i.addClass("sui-loading-image")
                }
                g.text && c._generateTextElement()
            }
            var j = a("<span/>").appendTo(f);
            c.backgroundElement = j, j.addClass("sui-loading-back"), c._setPosition()
        },
        _generateTextElement: function() {
            var b = this,
                c = a("<span/>").appendTo(b.mainElement);
            c.get(0).innerHTML = b.options.text, c.addClass("sui-loading-text"), b.loadingText = c
        },
        refresh: function() {
            var a = this,
                b = (a.options, a.mainElement && "none" != a.mainElement.css("display") ? !1 : !0);
            a.destroy(), a._render(), b ? a.hide() : a.show()
        },
        _setPosition: function() {
            var a = this,
                f = (a.options, a.element),
                d = f.offset(),
                c = e.ui.Util.GetMaxZIndex("div") + 1;
            a.mainElement.css({
                left: b(d.left) + "px",
                top: b(d.top) + "px",
                "z-index": c
            }), h && (a.loadingText && a.loadingText.css({
                "z-index": c + 1
            }), a.loadingImage && a.loadingImage.css({
                "z-index": c + 1
            }), a.template && a.template.css("z-index", c + 1))
        },
        _setElementsPosition: function() {
            var a = this,
                f = a.element.height(),
                c = a.loadingImage,
                d = a.loadingText,
                g = c ? c.height() : 0,
                h = d ? d.height() : 0,
                e = b((f - g - h) / 2);
            c && a.loadingImage.css("top", e + "px"), d && a.loadingText.css("top", e + "px")
        },
        show: function() {
            var a = this,
                c = a.options,
                b = a.element;
            a.mainElement.width(b.get(0).offsetWidth), a.mainElement.height(b.get(0).offsetHeight), a._setPosition(), a.mainElement.css("display", ""), c.template || a._setElementsPosition()
        },
        hide: function() {
            this.mainElement.css("display", "none")
        },
        setText: function(a) {
            this.options.text = a, this.refresh()
        }
    }), f.defaults = g, e.ui.plugin("LoadingPanel", f)
}(jQuery, shield, this);
! function(b, a, r, v) {
    "use strict";
    var e = a.ui.Widget,
        n = (a.Class, a.DataSource),
        s = document,
        k = a.is,
        p = (a.get, a.format),
        c = a.to["int"],
        j = (Math.abs, b.each, b.proxy),
        u = (b.extend, b.map, r.opera),
        t = navigator.userAgent,
        f = /msie/i.test(t) && !u,
        d = f && 7 === s.documentMode,
        i = "width",
        q = "sui-selected",
        h = "sui-disabled",
        l = "click",
        m = "px",
        o = {
            currentPage: 1,
            totalItems: null,
            pageSize: 10,
            pageLinksCount: 5,
            directionLinks: !0,
            boundaryLinks: !0,
            imageLinks: !1,
            messages: {
                infoBarTemplate: "{0} - {1} of {2} items",
                previousText: "&lsaquo;",
                nextText: "&rsaquo;",
                firstText: "&laquo;",
                lastText: "&raquo;",
                firstTooltip: "Go to the first page",
                previousTooltip: "Go to the previous page",
                nextTooltip: "Go to the next page",
                lastTooltip: "Go to the last page"
            }
        },
        g = e.extend({
            init: function(g, h) {
                e.fn.init.apply(this, arguments);
                var c, d, a = this,
                    b = a.options;
                a.currentPage = b.currentPage, a._createWrappers(), a._createPagerElements(), f && a.element.on("selectstart", a._selectStart = function() {
                    return !1
                }), a.element.on(l, "a", a._click = j(a._clickHandler, a)), b.dataSource ? (c = a.dataSource = n.create(b.dataSource), d = a._changeDelegate = j(a._dataChange, a), c.on("change", d), a._updateDataSource()) : a.refresh(!0)
            },
            destroy: function() {
                var a = this;
                a.dataSource && (a.dataSource.off("change", a._changeDelegate), a._changeDelegate = null), a.pagination = null, a.infoBox = null, a.element.off("selectstart", a._selectStart), a._selectStart = null, a.element.off(l, "a", a._click), a._click = null, a.startLinkIndex = null, a.endLinkIndex = null, a.element.remove(), e.fn.destroy.call(a)
            },
            _clickHandler: function(d) {
                var e = b(d.currentTarget),
                    a = this;
                a.options;
                if (d.preventDefault(), !e.parent().hasClass(h)) {
                    var f = c(e.attr("data-page"));
                    a.currentPage = f, a.refresh()
                }
            },
            _createWrappers: function() {
                var a = this,
                    c = a.element;
                c.addClass("sui-pager sui-pager-core");
                var e = b("<ul />").appendTo(c);
                d ? e.addClass("sui-pagination sui-pagination-ie7") : e.addClass("sui-pagination");
                var g = b("<div />").appendTo(c);
                f && !d ? g.addClass("sui-pager-info-box-ie") : g.addClass("sui-pager-info-box"), a.pagination = e, a.infoBox = g
            },
            _updateInfoBox: function() {
                var b = this,
                    a = b.options,
                    e = a.messages,
                    c = a.pageSize * (b.currentPage - 1) + 1,
                    d = c - 1 + a.pageSize,
                    f = Math.ceil(a.totalItems / a.pageSize);
                d > a.totalItems && (d = a.totalItems), 0 === a.totalItems && (c = 0);
                var g = p(e.infoBarTemplate, c, d, a.totalItems, b.currentPage, f);
                b.infoBox.empty(), b.infoBox.html(g)
            },
            _createPagerElements: function() {
                var j = this,
                    g = j.options,
                    e = g.messages,
                    k = j.currentPage,
                    o = j.pagination,
                    l = Math.ceil(g.totalItems / g.pageSize),
                    A = Math.min(g.pageLinksCount, l),
                    a = "",
                    n = "",
                    t = "",
                    v = "",
                    s = "",
                    x = c((k - 1) / g.pageLinksCount),
                    u = x * g.pageLinksCount + 1;
                1 == k && (t = " " + h), k != l && g.totalItems || (v = " " + h), g.imageLinks && (e.previousText = "&nbsp;", e.nextText = "&nbsp;", e.firstText = "&nbsp;", e.lastText = "&nbsp;", n = "sui-navigation-links ");
                var w = Math.min(u + A, l + 1);
                j.startLinkIndex = u, j.endLinkIndex = w - 1, x > 0 && (a += "<li class='sui-pager-element'><a data-page='" + (j.startLinkIndex - 1) + "'>...</a></li>");
                for (var f = u; w > f; f++) f == k && (s = " " + q), a += "<li class='sui-pager-element'><a data-page='" + f + "' class='sui-pager-number" + s + "'>" + f + "</a></li>", s = "";
                j.endLinkIndex < l && (a += "<li class='sui-pager-element'><a data-page='" + (j.endLinkIndex + 1) + "'>...</a></li>"), g.directionLinks && (a = "<li class='sui-pager-element" + t + "'><a title='" + e.previousTooltip + "' data-page='" + (k - 1) + "' class='" + n + "sui-prev'>" + e.previousText + "</a></li>" + a, a = a + "<li class='sui-pager-element" + v + "'><a title='" + e.nextTooltip + "' data-page='" + (k + 1) + "' class='" + n + "sui-next'>" + e.nextText + "</a></li>"), g.boundaryLinks && (a = "<li class='sui-pager-element" + t + "'><a title='" + e.firstTooltip + "' data-page='1' class='" + n + "'>" + e.firstText + "</a></li>" + a, a = a + "<li class='sui-pager-element" + v + "'><a title='" + e.lastTooltip + "' data-page='" + l + "' class='" + n + "'>" + e.lastText + "</a></li>"), o.html(a);
                var p = o.find("a");
                if (p.length > 0 && (b(p[0]).addClass("sui-first"), b(p[p.length - 1]).addClass("sui-last")), d) {
                    var r = o.find("li");
                    if (r.length > 0) {
                        var y = 0;
                        for (f = 0; f < r.length; f++) {
                            var z = r[f].clientWidth;
                            y += z, b(r[f]).css(i, z + m)
                        }
                        o.css(i, y + m)
                    }
                }
            },
            _dataChange: function() {
                var a = this,
                    c = a.options,
                    b = a.dataSource,
                    d = b.take,
                    e = Math.ceil(b.skip / d) + 1;
                a.currentPage = e, c.pageSize = d, c.totalItems = b.total, a.refresh(!0)
            },
            refresh: function(c) {
                var a = this,
                    b = a.options;
                Math.ceil(b.totalItems / b.pageSize), a.currentPage, a.dataSource;
                a.pagination.empty(), a._createPagerElements(), a._updateInfoBox(), c || (a._updateDataSource(), a.trigger("change", {
                    currentPage: a.currentPage,
                    pageSize: b.pageSize
                }))
            },
            _updateDataSource: function() {
                var b = this,
                    a = b.dataSource,
                    c = b.options;
                a && (a.skip = (b.currentPage - 1) * c.pageSize, a.take = c.pageSize, a.read())
            },
            page: function(b) {
                var a = this;
                if (!b) return a.currentPage;
                var d = c(b);
                a._isValidPage(d) && (a.currentPage = d, a.refresh())
            },
            first: function() {
                this.currentPage = 1, this.refresh()
            },
            last: function() {
                var a = this,
                    b = a.options,
                    c = Math.ceil(b.totalItems / b.pageSize);
                a.currentPage = c, a.refresh()
            },
            next: function() {
                var a = this,
                    b = a.options,
                    c = Math.ceil(b.totalItems / b.pageSize);
                a.currentPage != c && (a.currentPage = a.currentPage + 1, a.refresh())
            },
            prev: function() {
                var a = this;
                a.options;
                1 != a.currentPage && (a.currentPage = a.currentPage - 1, a.refresh())
            },
            pageSize: function(b) {
                var a = this,
                    d = a.options;
                if (!b) return d.pageSize;
                var e = c(b);
                a._isValidPageSize(e) && (a.currentPage = 1, d.pageSize = e, a.refresh())
            },
            _isValidPage: function(c) {
                var b = this.options,
                    d = Math.ceil(b.totalItems / b.pageSize);
                return k.integer(c) ? c > d || 1 > c ? (a.error("Invalid page number. The page number must be greater than 0 and less than " + d + ".", b.dieOnError), !1) : !0 : (a.error("Invalid page number. The page number must integer.", b.dieOnError), !1)
            },
            _isValidPageSize: function(b) {
                var c = this.options;
                return k.integer(b) ? 1 > b ? (a.error("Invalid page number. The page number must be greater than 0 (zero).", c.dieOnError), !1) : !0 : (a.error("Invalid page size number. The page size number must be integer.", c.dieOnError), !1)
            }
        });
    g.defaults = o, a.ui.plugin("Pager", g), a.ui.Pager = g
}(jQuery, shield, this);
! function(a, h, z, d) {
    "use strict";
    var za, E, ya, S, xa, V, va, W, ta, X, Y, B, sa, Z, ga, _, pa, aa, na, U, la, ba, g = h.ui.Widget,
        ra = (h.Class, h.DataSource),
        f = h.Constants.KeyCode,
        r = h.error,
        ca = h.is.func,
        ka = h.is.array,
        e = h.is.defined,
        oa = (h.is.number, h.to.array),
        Ba = h.to["int"],
        $ = h.to.number,
        A = h.support.browser,
        t = h.format,
        u = document,
        Ia = Math.min,
        Da = Math.max,
        Fa = Math.pow,
        ua = a.extend,
        Ha = (a.map, a.each),
        b = a.proxy,
        T = a.inArray,
        ma = "alt",
        wa = "title",
        c = "disabled",
        o = "checked",
        O = "selected",
        l = "tabindex",
        J = "mousedown",
        I = "mouseup",
        H = "mouseout",
        i = "click",
        j = "keydown",
        ja = "keypress",
        ia = "keyup",
        qa = "cut",
        ha = "paste",
        P = "dragstart",
        fa = "dragenter",
        ea = "dragover",
        da = "drop",
        n = "change",
        m = "focus",
        k = "blur",
        G = "resize",
        w = "select",
        Ga = "input",
        s = "value",
        R = "placeholder",
        x = "selectstart",
        N = "unselectable",
        M = "on",
        Ca = "width",
        K = "height",
        F = "suilbitemdata",
        y = "suilbitemindex",
        v = "suilbitemvalue",
        L = "suilbitemtext",
        q = "uts",
        p = "uti",
        Ea = "uto",
        D = function(c) {
            var b = a(c).prop("tagName").toLowerCase();
            return b == w ? q : b == Ga ? p : Ea
        },
        C = function(d) {
            var c, b = a(d);
            b.focus(), b.get(0).setSelectionRange ? (c = 2 * b.val().length, b.get(0).setSelectionRange(c, c)) : b.val(b.val())
        },
        Aa = function(a) {
            a += "";
            var b = a.lastIndexOf(".");
            return b > -1 ? a.length - b - 1 : 0
        },
        Q = function(a, b) {
            if (a && !ca(a))
                if (ka(a))
                    for (var c = 0; c < a.length; c++) Q(a[c], b);
                else if (a.or || a.and)
                for (var d in a) a.hasOwnProperty(d) && Q(a[d], b);
            else a.value = b
        };
    za = {
        enabled: !0,
        cls: d,
        dataSource: d,
        readDataSource: !0,
        valueTemplate: d,
        textTemplate: d,
        multiple: d,
        selected: d,
        values: d,
        width: d,
        height: d,
        maxHeight: d,
        events: {}
    }, E = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var h, t, f, i, c = this,
                d = c.options,
                v = d.dieOnError,
                u = d.dataSource,
                s = d.selected,
                o = d.values,
                x = d.renderToINTERNAL,
                y = d.wrapOriginalINTERNAL,
                z = d.tabindexINTERNAL,
                A = d.filterINTERNAL,
                B = e(A) ? {
                    filter: A
                } : {},
                C = e(y) ? y : !0;
            if (c._original = h = a(c.element), c._utype = i = D(h), i == p && d.multiple) return c.destroy(), void r("shieldListBox: Cannot initialize a multi-selection ListBox from an input element.", v);
            if (e(o) || e(s) || i != q && i != p || (o = h.val()), C ? (c.wrapper = h.wrap("<span/>").parent(), c._isWrapped = !0) : c._isWrapped = !1, h.hide(), c._focusHandler = b(c._focus, c), c._blurHandler = b(c._blur, c), c.element = f = a("<ul/>").on(m, c._focusHandler).on(k, c._blurHandler), e(d.width) && f.css(Ca, d.width), e(d.height) && f.css(K, d.height), e(d.maxHeight) && f.css("max-height", d.maxHeight), a(x).length > 0 ? a(x).append(f) : h.after(f), u) c.dataSource = ra.create(u, B), d.valueTemplate || (d.valueTemplate = "{0}"), d.textTemplate || (d.textTemplate = "{0}");
            else {
                if (i != q) return c.destroy(), void r("shieldListBox: No dataSource or underlying SELECT element found.", v);
                c.dataSource = ra.create(ua({}, {
                    data: h,
                    schema: {
                        type: w
                    }
                }, B)), d.valueTemplate || (d.valueTemplate = "{value}"), d.textTemplate || (d.textTemplate = "{text}"), e(d.multiple) || (d.multiple = h.not("[multiple]").length <= 0)
            }
            f.addClass("sui-listbox"), d.cls && f.addClass(d.cls), t = e(z) ? z : h.attr(l), f.attr(l, e(t) ? t : "0"), c._keydownHandler = b(c._keydown, c), f.on(j, c._keydownHandler), c._dsChangeHandler = b(c._dsChange, c), c.dataSource.on(n, c._dsChangeHandler), e(o) ? c._initValues = o : e(s) && (c._initSelected = s), d.readDataSource && c.dataSource.read(), c.enabled(d.enabled)
        },
        refresh: function(a) {
            this.refreshWithElement(this._original, a)
        },
        _focus: function(b) {
            var a = this;
            a._oldSelection = a.selected(), a.trigger(m)
        },
        _blur: function(e) {
            var b = this,
                d = b._oldSelection,
                c = b.selected();
            (0 !== a(d).not(c).length || 0 !== a(c).not(d).length) && b.trigger(n), b._oldSelection = c, b.trigger(k)
        },
        _dsChange: function(b) {
            var a = this;
            a._render(), a._dsLoadedOnce || (a._dsLoadedOnce = !0, e(a._initValues) ? a.values(a._initValues) : e(a._initSelected) && a.selected(a._initSelected))
        },
        _keydown: function(a) {
            var b = this,
                c = !0;
            switch (a.keyCode) {
                case f.UP:
                    b._move("up", a);
                    break;
                case f.DOWN:
                    b._move("down", a);
                    break;
                case f.SPACE:
                    b._toggleActive(a);
                    break;
                case f.ENTER:
                    b._toggleActive(a);
                    break;
                default:
                    c = !1
            }
            c && a.preventDefault()
        },
        _render: function() {
            var b = this,
                f = b.options,
                g = b.dataSource.view,
                h = a(b.element),
                c = b._utype,
                e = b._original;
            c == p ? b._original.val() : d;
            h.empty(), c == q ? e.empty() : c == p && e.removeAttr(s), g && Ha(g, function(i, d) {
                var j = t.call(b, f.valueTemplate, d),
                    g = t.call(b, f.textTemplate, d),
                    k = a("<li>" + g + "</li>").addClass("sui-listbox-item sui-unselectable").click(function(c) {
                        b._enabled && (b._setActive(a(this)), b._toggleActive(c)), b.trigger("itemclick", {
                            index: i,
                            item: d
                        })
                    }).on(x, function() {
                        return !1
                    }).data(F, d).data(y, i).data(v, j).data(L, g);
                h.append(k), c == q && e.append(a("<option/>").attr(s, j).text(g))
            })
        },
        _move: function(e, g) {
            var c = this,
                f = a(c.element),
                d = f.find(".sui-listbox-item-active").first(),
                b = f.find(":first");
            c._enabled && ("up" == e ? d.prev().length > 0 && (b = d.prev()) : "down" == e && (d.next().length > 0 ? b = d.next() : d.length > 0 && (b = d)), b.length <= 0 || (c.options.multiple ? (c._setActive(b), c._ensureInScrollableArea(b)) : c._select(b)))
        },
        _ensureInScrollableArea: function(d) {
            var h = this,
                b = a(h.element),
                e = b.height(),
                f = b.scrollTop(),
                i = d.outerHeight(),
                c = d.position().top,
                g = c + i;
            0 > c ? b.scrollTop(f + c) : g > e && b.scrollTop(f + (g - e))
        },
        ensureActiveViewableINTERNAL: function() {
            var a = this,
                b = a._getActive();
            b.length > 0 && a._ensureInScrollableArea(b)
        },
        _getActive: function() {
            return a(this.element).find(".sui-listbox-item-active").first()
        },
        _setActive: function(a) {
            a.addClass("sui-listbox-item-active").siblings().removeClass("sui-listbox-item-active")
        },
        _setSelected: function(a) {
            a.addClass("sui-listbox-item-selected")
        },
        _unsetSelected: function(a) {
            a.removeClass("sui-listbox-item-selected")
        },
        _toggleActive: function(a) {
            this._toggle(a, this._getActive())
        },
        _toggle: function(c, a) {
            var b = this;
            b._enabled && (!a || a.length <= 0 || (b.options.multiple && a.hasClass("sui-listbox-item-selected") ? b._deselect(a) : b._select(a)))
        },
        _select: function(a, e) {
            var b = this,
                c = b._original,
                d = b._utype;
            b.options.multiple || b.clearSelection(), b._setActive(a), b._ensureInScrollableArea(a), b._setSelected(a), d == q ? c.find("option:eq(" + a.data(y) + ")").attr(O, O) : d == p && c.attr(s, a.data(v)), e || b.trigger(w, {
                index: a.data(y),
                item: a.data(F),
                value: a.data(v),
                text: a.data(L),
                selected: !0
            })
        },
        _deselect: function(a, e) {
            var b = this,
                c = b._original,
                d = b._utype;
            b._setActive(a), b._unsetSelected(a), d == q ? c.find("option:eq(" + a.data(y) + ")").removeAttr(O) : d == p && c.removeAttr(s), e || b.trigger(w, {
                index: a.data(y),
                item: a.data(F),
                value: a.data(v),
                text: a.data(L),
                selected: !1
            })
        },
        enabled: function() {
            var d, b = this,
                e = a(b.element),
                f = b._original,
                g = [].slice.call(arguments);
            return g.length > 0 ? (d = !!g[0], d ? (e.removeAttr(c).removeClass("sui-listbox-disabled"), f.removeAttr(c)) : (e.attr(c, c).addClass("sui-listbox-disabled"), f.attr(c, c)), b._enabled = d, void 0) : b._enabled
        },
        selected: function() {
            var d, f, c = this,
                g = a(c.element),
                b = [].slice.call(arguments);
            if (!(b.length > 0)) {
                var h = [];
                return g.find(".sui-listbox-item-selected").each(function() {
                    h.push(a(this).data(y))
                }), h
            }
            d = oa(b[0]), f = e(b[1]) ? !!b[1] : !0, g.find(".sui-listbox-item").each(function(b) {
                T(b, d) > -1 && (f ? c._select(a(this), !0) : c._deselect(a(this), !0))
            })
        },
        selectedItems: function() {
            var b = [];
            return a(this.element).find(".sui-listbox-item-selected").each(function() {
                b.push(a(this).data(F))
            }), b
        },
        values: function() {
            var c, b = this,
                d = a(b.element),
                e = [].slice.call(arguments);
            if (!(e.length > 0)) {
                var f = [];
                return d.find(".sui-listbox-item-selected").each(function() {
                    f.push(a(this).data(v))
                }), f
            }
            c = oa(e[0]), d.find(".sui-listbox-item").each(function() {
                return T(a(this).data(v), c) > -1 ? (b._select(a(this), !0), b.options.multiple ? !0 : !1) : void 0
            })
        },
        texts: function() {
            var b = [];
            return a(this.element).find(".sui-listbox-item-selected").each(function() {
                b.push(a(this).data(L))
            }), b
        },
        clearSelection: function() {
            var b = this,
                c = b._original,
                d = b._utype;
            d == q ? c.find("option").removeAttr(O) : d == p && c.removeAttr(s), a(b.element).find(".sui-listbox-item-selected").removeClass("sui-listbox-item-selected sui-listbox-item-active")
        },
        destroy: function() {
            var b = this;
            b._dsLoadedOnce = !1, a(b.element).off(m, b._focusHandler).off(k, b._blurHandler).remove(), b.dataSource && b.dataSource.off(n, b._dsChangeHandler), b._dsChangeHandler = b._focusHandler = b._blurHandler = null, b._isWrapped && b._original.unwrap(), b._original.show(), g.fn.destroy.call(b)
        }
    }), E.defaults = za, h.ui.plugin("ListBox", E), xa = {
        enabled: !0,
        cls: d,
        autoComplete: d,
        value: d,
        events: {}
    }, V = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var c = this,
                f = c.options,
                h = f.autoComplete,
                i = f.cls,
                j = f.value,
                d = a(c.element);
            d.addClass("sui-input"), h && (c.autoComplete = new S(d, h)), i && d.addClass(i), c._focusHandler = b(c._focus, c), d.on(m, c._focusHandler), c._blurHandler = b(c._blur, c), d.on(k, c._blurHandler), c.enabled(f.enabled), e(j) && c.value(j)
        },
        focus: function() {
            a(this.element).focus(), C(a(this.element))
        },
        _focus: function(c) {
            var a = this;
            a.oldValue = a._value(), a.interval = setInterval(b(a._detectChanges, a), 1), a.trigger(m)
        },
        _blur: function(a) {
            clearInterval(this.interval), this.trigger(k)
        },
        _detectChanges: function() {
            var b, a = this;
            a._enabled && a.oldValue !== a._value() && (b = a.trigger(n, {
                value: a._value(),
                old: a.oldValue
            }), b.isDefaultPrevented() ? a._value(a.oldValue) : a.oldValue = a._value())
        },
        _value: function() {
            return this.element.val.apply(this.element, arguments)
        },
        value: function() {
            return this._value.apply(this, arguments)
        },
        enabled: function() {
            var b, d = this,
                e = a(d.element),
                f = [].slice.call(arguments);
            return f.length > 0 ? (b = !!f[0], b ? e.removeAttr(c).removeClass("sui-input-disabled") : e.attr(c, c).addClass("sui-input-disabled"), d._enabled = b, void 0) : d._enabled
        },
        destroy: function() {
            var a = this,
                b = a.autoComplete,
                c = a.options.cls;
            clearInterval(a.interval), a.element.off(m, a._focusHandler).off(k, a._blurHandler).removeClass("sui-input" + (c ? " " + c : "")), a._focusHandler = a._blurHandler = null, b && b.destroy(), g.fn.destroy.call(a)
        }
    }), V.defaults = xa, h.ui.plugin("TextBox", V), ya = {
        dataSource: d,
        valueTemplate: "{0}",
        textTemplate: "{0}",
        open: !1,
        delay: 200,
        minLength: 2,
        animation: {
            enabled: !0,
            openDelay: 200,
            closeDelay: 100
        },
        events: {}
    }, S = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var c = this,
                d = a(c.element),
                e = c.options,
                f = e.dataSource,
                h = e.dieOnError;
            return c.pending = 0, c.oldValue = d.val(), f ? (f.filter || (f.filter = {
                and: [{
                    path: "",
                    filter: "contains",
                    value: ""
                }]
            }), d.addClass("sui-input"), c.listElement = a("<span/>").appendTo(u.body), c.listBox = new E(c.listElement, {
                cls: "sui-autocomplete",
                dataSource: f,
                readDataSource: !1,
                textTemplate: e.textTemplate,
                multiple: !1,
                width: d.innerWidth(),
                events: {
                    select: function(a) {
                        c._value(t.call(c, e.valueTemplate, a.item))
                    },
                    itemclick: function(a) {
                        d.focus(), c._inputBlur(a, 0)
                    },
                    blur: function(a) {
                        c._inputBlur(a, 0)
                    }
                }
            }), c.listBox.element.hide(), c.dataSource = c.listBox.dataSource, c._inputKeydownHandler = b(c._inputKeydown, c), d.on(j, c._inputKeydownHandler), c._inputBlurHandler = b(c._inputBlur, c, 100), d.on(k, c._inputBlurHandler), c._dsChangeHandler = b(c._dsChange, c), c.listBox.dataSource.on(n, c._dsChangeHandler), a(z).on(G + ".shieldAutoComplete" + c.getInstanceId(), b(c._position, c)), c._open = !1, void(e.open && c._searchTimeout())) : (c.destroy(), void r("shieldAutoComplete: No dataSource set", h))
        },
        _checkValueUpdated: function() {
            var a = this,
                c = a.element,
                b = c.val();
            a.oldValue !== b && (a.trigger(n), a.oldValue = b)
        },
        _restoreOldValue: function() {
            this._value(this.oldValue)
        },
        _inputKeydown: function(b) {
            var a = this;
            switch (b.keyCode) {
                case f.TAB:
                    break;
                case f.UP:
                case f.DOWN:
                    a._inputUpDown(b);
                    break;
                case f.ENTER:
                    b.preventDefault(), a.cancelSearch = !0, a._hideItemList(), a._checkValueUpdated();
                    break;
                case f.ESC:
                    b.preventDefault(), a.cancelSearch = !0, a._hideItemList(), a._restoreOldValue();
                    break;
                default:
                    a._searchTimeout(b)
            }
        },
        _inputUpDown: function(c) {
            var b = this;
            b._open ? b._hasData() && a(b.listBox.element).trigger(c) : b._hasData() && b._showItemList()
        },
        _inputBlur: function(d, c) {
            var b = this;
            setTimeout(function() {
                a(b.listBox.element).is(":focus") || (b._hideItemList(), b._checkValueUpdated())
            }, c)
        },
        _searchTimeout: function(b) {
            var a = this;
            clearTimeout(a.searchTimeout), a.searchTimeout = setTimeout(function() {
                a.term !== a._value() && a._search()
            }, a.options.delay)
        },
        _search: function() {
            var b = this;
            return b.term = b._value(), b.term.length < b.options.minLength ? void b._hideItemList() : (b.cancelSearch = !1, b.pending++, a(b.element).addClass("sui-autocomplete-loading"), Q(b.listBox.dataSource.filter, b.term), void b.listBox.dataSource.read())
        },
        _dsChange: function() {
            var b = this;
            b.pending--, b.pending || a(b.element).removeClass("sui-autocomplete-loading"), !b.cancelSearch && b._hasData() ? b._showItemList() : b._hideItemList()
        },
        _hasData: function() {
            var a = this.listBox.dataSource.view;
            return a && a.length > 0
        },
        _position: function() {
            var c = this,
                b = a(c.element),
                e = a(c.listBox.element),
                d = b.offset(),
                f = b.outerHeight();
            e.css({
                top: d.top + f,
                left: d.left,
                width: b.innerWidth()
            })
        },
        _showItemList: function() {
            var c = this,
                d = c.listBox,
                f = a(d.element),
                e = c.options.animation;
            c._position(), e && e.enabled ? f.slideDown(e.openDelay, b(d.ensureActiveViewableINTERNAL, d)) : (f.show(), d.ensureActiveViewableINTERNAL()), c._open = !0
        },
        _hideItemList: function() {
            var b = this,
                d = a(b.listBox.element),
                c = b.options.animation;
            c && c.enabled ? d.slideUp(c.closeDelay) : d.hide(), b._open = !1
        },
        _value: function() {
            return this.element.val.apply(this.element, arguments)
        },
        hide: function() {
            a(this.listBox.element).hide()
        },
        show: function() {
            a(this.listBox.element).show()
        },
        isVisible: function() {
            return a(this.listBox.element).is(":visible")
        },
        destroy: function() {
            var b = this;
            b.dataSource = null, b.listBox && (b.listBox.dataSource.off(n, b._dsChangeHandler), b._dsChangeHandler = null, b.listBox.destroy(), b.listBox = null), b.element.off(j, b._inputKeydownHandler).off(k, b._inputBlurHandler).removeClass("sui-input"), a(z).off(G + ".shieldAutoComplete" + b.getInstanceId()), b._inputKeydownHandler = b._inputBlurHandler = null, b.listElement && b.listElement.remove(), g.fn.destroy.call(b)
        }
    }), S.defaults = ya, h.ui.plugin("AutoComplete", S), va = {
        enabled: !0,
        cls: "",
        min: 0,
        max: 10000,
        value: d,
        step: d,
        editable: !0,
        spinners: !0,
        valueTemplate: d,
        textTemplate: d,
        labels: {
            increase: "Increase value",
            decrease: "Decrease value"
        },
        events: {}
    }, W = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var n, t, o, h, v, w, q, s, c = this,
                d = c.options,
                u = d.cls,
                i = d.value,
                f = d.step,
                E = d.editable,
                y = d.spinners,
                z = d.labels,
                A = z.increase,
                B = z.decrease,
                C = d.dieOnError;
            return c._original = n = a(c.element), D(n) != p ? void r("shieldNumericTextBox: Underlying element is not INPUT", C) : (e(f) ? d.step = f = $(f) : (q = Aa(e(i) ? i : c._value()), q > 0 ? d.step = f = 1 / Fa(10, q) : d.step = f = 1), f ? (c.element = o = n.wrap("<span/>").parent(), n.hide(), e(i) || (i = c._value()), E ? (h = a('<input type="text" class="sui-input" />'), t = n.attr(R), e(t) && h.attr(R, t)) : h = a('<span class="sui-input">&nbsp;</span>').attr(l, "0"), c.textElement = h, h.appendTo(o), c._focusHandler = b(c._focus, c), c._blurHandler = b(c._blur, c), h.on(m, c._focusHandler).on(k, c._blurHandler), y && (c._onSpinUpMDProxy = b(c._spinUpMD, c), c._onSpinDownMDProxy = b(c._spinDownMD, c), c._onSpinnerMUProxy = b(c._spinnerMU, c), c.spinUp = v = a('<span class="sui-spinner sui-spinner-up sui-unselectable" />').html('<span class="sui-caret-up sui-unselectable" unselectable="on" />').attr(N, M).attr(ma, A).attr(wa, A).on(J, c._onSpinUpMDProxy).on(I, c._onSpinnerMUProxy).on(H, c._onSpinnerMUProxy).on(x, function() {
                return !1
            }), c.spinDown = w = a('<span class="sui-spinner sui-spinner-down sui-unselectable" />').html('<span class="sui-caret-down sui-unselectable" unselectable="on" />').attr(N, M).attr(ma, B).attr(wa, B).on(J, c._onSpinDownMDProxy).on(I, c._onSpinnerMUProxy).on(H, c._onSpinnerMUProxy).on(x, function() {
                return !1
            }), o.append(a('<span class="sui-spinners" />').append(v, w))), c._keydownHandler = b(c._keydown, c), h.on(j, c._keydownHandler), o.addClass("sui-numeric-textbox" + (y ? "" : " sui-numeric-textbox-nosp") + (u ? " " + u : "")), s = Aa(f), e(d.textTemplate) || (d.textTemplate = "{0:n" + s + "}"), e(d.valueTemplate) || (d.valueTemplate = "{0:n" + s + "}"), c.enabled(d.enabled), e(i) && c.value(i), void(c._destroyed = !1)) : void r("shieldNumericTextBox: Invalid step", C))
        },
        refresh: function(a) {
            this.refreshWithElement(this._original, a)
        },
        _focus: function(c) {
            var b = this;
            b._hasFocus || (b._hasFocus = !0, a(b.element).addClass("sui-numeric-textbox-focus"), b.value(b.value()), b.trigger(m))
        },
        _blur: function(g) {
            var b = this,
                d = a(b.element),
                e = a(b.textElement);
            if (b.options.editable) {
                var c, f = b.value();
                b._updateIfDirty(), c = b.value(), c !== f && b.trigger(n, {
                    value: c
                })
            }
            setTimeout(function() {
                if (!(d.is(":focus") || e.is(":focus") || b._destroyed)) {
                    if (b._hasFocus = !1, d.removeClass("sui-numeric-textbox-focus"), b.options.editable) {
                        var a, c = b.value();
                        b.value(e.val()), a = b.value(), a !== c && b.trigger(n, {
                            value: a
                        })
                    } else b.value(b.value());
                    b.trigger(k)
                }
            }, 100)
        },
        _keydown: function(c) {
            var b = this,
                a = c.keyCode,
                d = b._enabled;
            switch (a) {
                case f.TAB:
                case f.LEFT:
                case f.RIGHT:
                case f.END:
                case f.HOME:
                    break;
                case f.ESC:
                    d && b.value(b.value()), c.preventDefault();
                    break;
                case f.UP:
                    b._updateValue(!0, !1), c.preventDefault();
                    break;
                case f.DOWN:
                    b._updateValue(!1, !1), c.preventDefault();
                    break;
                default:
                    b.options.editable && d && (a >= 48 && 57 >= a || a >= 96 && 105 >= a || 190 == a || 110 == a || 173 == a || 109 == a || 189 == a || a == f.DEL || a == f.BACK || a == f.ENTER || c.ctrlKey && (118 == a || 86 == a)) ? b._dirty = !0 : c.preventDefault()
            }
        },
        _spinUpMD: function(c) {
            var a = this;
            c.preventDefault(), a._updateValue(!0, !1), a._spinUpCancel = !1, setTimeout(function() {
                a._spinUpInt || a._spinUpCancel || (a._spinUpInt = setInterval(b(a._updateValue, a, !0, !1), 20))
            }, 100)
        },
        _spinDownMD: function(c) {
            var a = this;
            c.preventDefault(), a._updateValue(!1, !1), a._spinDownCancel = !1, setTimeout(function() {
                a._spinDownInt || a._spinDownCancel || (a._spinDownInt = setInterval(b(a._updateValue, a, !1, !1), 20))
            }, 100)
        },
        _spinnerMU: function(b) {
            var a = this;
            a._spinUpCancel = a._spinDownCancel = !0, clearInterval(a._spinUpInt), clearInterval(a._spinDownInt), a._spinUpInt = a._spinDownInt = null
        },
        _updateIfDirty: function() {
            var b = this,
                c = a(b.textElement);
            b._dirty && (b.value(c.val()), b._dirty = !1)
        },
        _updateValue: function(m, g, f) {
            var c, b = this,
                d = b.options,
                k = d.min,
                l = d.max,
                i = d.step,
                j = a(b.textElement),
                h = !1;
            b._enabled && (b._updateIfDirty(), c = b.value(), e(c) || (c = 0), g = e(g) ? !!g : !0, f = e(f) ? !!f : !0, m ? l > c && (b.value(c + i), h = !0) : c > k && (b.value(c - i), h = !0), f && (j.focus(), d.editable && C(j)), h && !g && b.trigger(n, {
                value: b.value()
            }))
        },
        increment: function() {
            this._updateValue(!0, !0, !1)
        },
        decrement: function() {
            this._updateValue(!1, !0, !1)
        },
        value: function() {
            var b, g, c = this,
                d = c.options,
                f = [].slice.call(arguments),
                h = a(c.textElement);
            return f.length > 0 ? (e(f[0]) && null !== f[0] && "" !== f[0] ? (b = Da(Ia(f[0], d.max), d.min), b = t.call(c, d.valueTemplate, b), b = $(b), g = t.call(c, d.textTemplate, b) + "") : (b = null, g = ""), d.editable ? c._hasFocus && c._enabled ? h.val(b) : h.val(g) : h.html(g), c._value(b), void 0) : $(c._value())
        },
        _value: function() {
            return this._original.attr.apply(this._original, [s].concat([].slice.call(arguments)))
        },
        enabled: function() {
            var b, d = this,
                e = a(d.element),
                f = [].slice.call(arguments);
            return f.length > 0 ? (b = !!f[0], b ? e.removeAttr(c).removeClass("sui-numeric-textbox-disabled") : e.attr(c, c).addClass("sui-numeric-textbox-disabled"), d._enabled = b, void 0) : d._enabled
        },
        focus: function() {
            a(this.textElement).focus(), C(a(this.textElement))
        },
        destroy: function() {
            var b = this;
            b._destroyed = !0, b.options.spinners && (b.spinUp.off(J, b._onSpinUpMDProxy).off(I, b._onSpinnerMUProxy).off(H, b._onSpinnerMUProxy).off(x), b.spinDown.off(J, b._onSpinDownMDProxy).off(I, b._onSpinnerMUProxy).off(H, b._onSpinnerMUProxy).off(x), a(b.spinUp).remove(), a(b.spinDown).remove(), b.spinUp = b.spinDown = null), a(b.textElement).off(j, b._keydownHandler).off(m, b._focusHandler).off(k, b._blurHandler).remove(), b.textElement = null, b._original.unwrap().show(), b._original = null, g.fn.destroy.call(b)
        }
    }), W.defaults = va, h.ui.plugin("NumericTextBox", W), ta = {
        enabled: !0,
        mask: "00-00-0000",
        promptChar: "_",
        value: "",
        rules: {
            0: function(a) {
                return /^[0-9]$/.test(a)
            },
            9: function(a) {
                return /^[0-9 ]$/.test(a)
            },
            "#": function(a) {
                return /^[0-9 \+\-]$/.test(a)
            },
            L: function(a) {
                return /^[a-zA-Z]$/.test(a)
            },
            "?": function(a) {
                return /^[a-zA-Z ]$/.test(a)
            },
            "&": function(a) {
                return /^[\S]$/.test(a)
            },
            C: function(a) {
                return /^[.]$/.test(a)
            },
            A: function(a) {
                return /^[0-9a-zA-Z]$/.test(a)
            },
            a: function(a) {
                return /^[0-9a-zA-Z ]$/.test(a)
            }
        },
        cultureSpecific: [".", ",", "$"],
        separators: ["/", "-", " ", "(", ")"],
        cls: d,
        events: {}
    }, X = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var c = this,
                f = c.options,
                h = f.dieOnError,
                i = f.value,
                d = a(c.element);
            return D(d) != p ? void r("shieldMaskedTextBox: Underlying element is not INPUT", h) : c._verifyMask() ? (d.addClass("sui-input"), f.cls && d.addClass(f.cls), e(i) && c.value(i), c._focusHandler = b(c._focus, c), d.on(m, c._focusHandler), c._blurHandler = b(c._blur, c), d.on(k, c._blurHandler), c._keydownHandler = b(c._keydown, c), d.on(j, c._keydownHandler), c._keypressHandler = b(c._keypress, c), d.on(ja, c._keypressHandler), c._cutHandler = b(c._cut, c), d.on(qa, c._cutHandler), c._pasteHandler = b(c._paste, c), d.on(ha, c._pasteHandler), c._dragStartHandler = b(c._dragstart, c), d.on(P, c._dragStartHandler), c._dragEnterHandler = b(c._dragenter, c), d.on(fa, c._dragEnterHandler), c._dragOverHandler = b(c._dragover, c), d.on(ea, c._dragOverHandler), c._dropHandler = b(c._drop, c), d.on(da, c._dropHandler), void c.enabled(f.enabled)) : void r("shieldMaskedTextBox: Invalid mask", h)
        },
        _getMask: function() {
            for (var a, b = this, d = b.options.mask, e = "", c = 0; c < d.length; c++) a = d.charAt(c), e += b._isCultureSpecific(a) ? b._getCultureSpecific(a) : a;
            return e
        },
        _isCultureSpecific: function(a) {
            return -1 !== T(a, this.options.cultureSpecific)
        },
        _getCultureSpecific: function(a) {
            var b = h.getCurrencyInfo();
            return "$" == a ? b.symbol : b[a]
        },
        _skipSymbol: function(a) {
            var b = this,
                c = b.options.separators;
            return -1 !== T(a, c) || b._isCultureSpecific(a)
        },
        _insertAt: function(a, c, b) {
            return a.substr(0, b) + c + a.substr(b)
        },
        _removeAt: function(a, b) {
            return a.substr(0, b) + a.substr(b + 1)
        },
        _caret: function(c, d) {
            var e, f = this,
                b = a(f.element);
            if (0 !== b.length && !b.is(":hidden")) return "number" == typeof c ? (d = "number" == typeof d ? d : c, b.each(function() {
                b.setSelectionRange ? b.setSelectionRange(c, d) : b.createTextRange && (e = b.createTextRange(), e.collapse(!0), e.moveEnd("character", d), e.moveStart("character", c), e.select())
            })) : (b[0].setSelectionRange ? (c = b[0].selectionStart, d = b[0].selectionEnd) : u.selection && u.selection.createRange && (e = u.selection.createRange(), c = 0 - e.duplicate().moveStart("character", -1e5), d = c + e.text.length), {
                begin: c,
                end: d
            })
        },
        _caretTo: function(e) {
            var f = this,
                b = a(f.element);
            if (b.prop("selectionStart") !== d) b.prop("selectionStart", e), b.prop("selectionEnd", e);
            else if (u.selection) {
                b.focus();
                var c = u.selection.createRange();
                c.moveStart("character", -f.value().length), c.moveEnd("character", -f.value().length), c.moveStart("character", e), c.select()
            }
        },
        _isValid: function(f, c) {
            var a, b = this,
                d = b._getMask(),
                e = b.options.rules;
            return c >= d.length ? !1 : (a = d.charAt(c), ca(e[a]) && e[a].call(b, f))
        },
        _removeRegion: function(i) {
            var f, d, a = this,
                j = a.options,
                e = a._getMask(),
                b = a._value(),
                g = a._caret(),
                h = j.promptChar,
                c = g.begin;
            if (c == g.end) i ? (f = e.charAt(--c), a._skipSymbol(f) || (c >= 0 ? (b = a._removeAt(b, c), b = a._insertAt(b, h, c), a._value(b)) : c = 0)) : c < b.length && (f = e.charAt(c), a._skipSymbol(f) ? c++ : (b = a._shiftLeft(b, c), a._value(b)));
            else {
                for (d = c; d < g.end; d++) a._skipSymbol(e.charAt(d)) || (b = a._removeAt(b, d), b = a._insertAt(b, h, d));
                for (; a._skipSymbol(e.charAt(c));) ++c;
                for (d = c; d < g.end; d++) a._skipSymbol(e.charAt(d)) || (b = a._shiftLeft(b, c));
                a._value(b)
            }
            a._caretTo(c)
        },
        _shiftLeft: function(a, h) {
            for (var e, f, d, b = this, i = b.options, j = b._getMask(), g = i.promptChar, c = h; c < a.length - 1;) {
                for (d = c + 1; b._skipSymbol(j.charAt(d));) d++;
                if (d > a.length - 1) break;
                e = a.charAt(d), a = b._removeAt(a, c), f = b._isValid(e, c), a = b._insertAt(a, f ? e : g, c), c = d
            }
            return a = b._removeAt(a, c), a = b._insertAt(a, g, c)
        },
        _shiftRightKey: function(a, f) {
            var e, d, j, c = this,
                m = c.options,
                k = c._getMask(),
                l = a.charAt(f),
                g = m.promptChar;
            if (l != g && f < a.length - 1) {
                for (var h = f + 1, i = a.charAt(h); i != g && h <= a.length;) i = a.charAt(++h);
                if (i == g)
                    for (var b = h; b > f;) {
                        if (!c._skipSymbol(k.charAt(b))) {
                            for (d = b - 1, e = a.charAt(d); c._skipSymbol(k.charAt(d));) e = a.charAt(--d);
                            a = c._removeAt(a, b), j = c._isValid(e, b), a = c._insertAt(a, j ? e : g, b)
                        }
                        b--
                    }
            }
            return a
        },
        _shiftRightPaste: function(a, h) {
            var f, d, b, g, c = this,
                i = c.options,
                j = c._getMask(),
                k = i.promptChar,
                e = h;
            for (d = a.charAt(e); e < a.length - 1;) {
                for (b = e + 1; c._skipSymbol(j.charAt(b));) b++;
                if (b > a.length - 1) break;
                f = a.charAt(b), a = c._removeAt(a, b), g = c._isValid(d, b), a = c._insertAt(a, g ? d : k, b), d = f, e = b
            }
            return a
        },
        _commit: function(e) {
            for (var c, a = this, f = a._getMask(), d = a._caret(), b = d.begin; a._skipSymbol(f.charAt(b));) ++b;
            if (a._isValid(e, b)) {
                for (d.end > d.begin && a._removeRegion(!1), c = a._value(), c = a._shiftRightKey(c, b), c = a._removeAt(c, b), c = a._insertAt(c, e, b), a._value(c), b++; a._skipSymbol(f.charAt(b));) b++;
                a._caretTo(b)
            }
        },
        _verifyValue: function(c) {
            var d = this,
                b = d._getMask();
            if (c.length != b.length) return !1;
            for (var a = 0; a < b.length; a++)
                if (d._skipSymbol(b.charAt(a))) {
                    if (b.charAt(a) !== c.charAt(a)) return !1
                } else if (!d._isValid(c.charAt(a), a)) return !1;
            return !0
        },
        _verifyMask: function() {
            for (var d, b = this, c = b._getMask(), e = b.options.rules, a = 0; a < c.length; a++)
                if (!b._skipSymbol(c.charAt(a)) && (d = c.charAt(a), !ca(e[d]))) return !1;
            return !0
        },
        _applyMask: function() {
            for (var a = this, e = a.options, c = a._getMask(), f = e.promptChar, d = "", b = 0; b < c.length; b++) d += a._skipSymbol(c.charAt(b)) ? c.charAt(b) : f;
            a._value(d)
        },
        _isEmptyMask: function() {
            for (var a = this, d = a._value(), e = a.options, c = a._getMask(), f = e.promptChar, b = 0; b < c.length; b++)
                if (!a._skipSymbol(c.charAt(b)) && d.charAt(b) !== f) return !1;
            return !0
        },
        _clearMaskOnBlur: function() {
            this._isEmptyMask() && this._value("")
        },
        _focus: function(d) {
            var c, b = this;
            a(b.element).addClass("sui-input-focus"), c = b._value(), c && "" !== c || b._applyMask(), b.trigger(m)
        },
        _blur: function(a) {
            this._clearMaskOnBlur(), this.trigger(k)
        },
        _preventDrag: function(a) {
            if (a.type == P || a.type == fa || a.type == ea || a.type == da) {
                var b = a.originalEvent.dataTransfer;
                return a.type == P ? b.effectAllowed = "none" : b.dropEffect = "none", a.stopPropagation && (a.preventDefault(), a.stopPropagation()), !1
            }
        },
        _triggerChange: function(b) {
            var c, a = this;
            b !== a._value() && (c = a.trigger(n, {
                value: a._value(),
                old: b
            }), c.isDefaultPrevented() && a._value(a.oldValue)), clearInterval(a.changeInterval), a.changeInterval = d
        },
        _dragstart: function(a) {
            return this._preventDrag(a)
        },
        _dragenter: function(a) {
            return this._preventDrag(a)
        },
        _dragover: function(a) {
            return this._preventDrag(a)
        },
        _drop: function(a) {
            return this._preventDrag(a)
        },
        _keydown: function(e) {
            var a = this,
                c = e.keyCode,
                h = a._enabled,
                g = a._value();
            switch (h || e.preventDefault(), c) {
                case f.BACK:
                case f.DEL:
                    a._removeRegion(c == f.BACK), a.changeInterval === d && (a.changeInterval = setInterval(b(a._triggerChange, a, g), 20)), e.preventDefault();
                    break;
                default:
                    if (e.ctrlKey) switch (c) {
                        case 118:
                        case 86:
                        case 122:
                        case 90:
                        case 121:
                        case 89:
                            118 == c || 86 == c ? a._paste() : (122 == c || 90 == c) && (a._undo(), a.changeInterval === d && (a.changeInterval = setInterval(b(a._triggerChange, a, g), 20))), e.preventDefault()
                    }
            }
        },
        _keypress: function(c) {
            var e, a = this,
                h = c.keyCode,
                i = c.which,
                g = (a._enabled, a._value());
            if (!c.ctrlKey) {
                switch (h) {
                    case f.HOME:
                    case f.END:
                    case f.LEFT:
                    case f.RIGHT:
                    case f.TAB:
                        if (!A.ie) return;
                        break;
                    default:
                        e = String.fromCharCode(i), a._commit(e)
                }
                c.preventDefault(), a.changeInterval === d && g != a._value() && (a.changeInterval = setInterval(b(a._triggerChange, a, g), 20))
            }
        },
        _cut: function(e) {
            var a = this,
                c = a._caret();
            a.cutInterval === d && (a.cutInterval = setInterval(b(a._aftercut, a, c), 20))
        },
        _aftercut: function(g) {
            var e, a = this,
                f = a._getMask(),
                b = a.value(),
                i = b,
                j = a.options.promptChar,
                c = g.begin;
            for (e = c; e < g.end; e++) b = a._insertAt(b, a._skipSymbol(f.charAt(e)) ? f.charAt(e) : j, e);
            for (a._value(b), a._caretTo(c); a._skipSymbol(f.charAt(c));) ++c;
            for (var h = c; h < g.end; h++) a._skipSymbol(f.charAt(h)) || (b = a._shiftLeft(b, c));
            a._value(b), a._caretTo(c), clearInterval(a.cutInterval), a.cutInterval = d, a._triggerChange(i)
        },
        _paste: function(i) {
            var g, j, h, f, a = this,
                m = a._getMask(),
                c = a._value(),
                o = c,
                l = a._caret(),
                e = l.begin,
                k = a.options.promptChar,
                n = i.originalEvent || i;
            if (e == c.length) return void i.preventDefault();
            if (n.clipboardData ? g = n.clipboardData.getData("text/plain") : z.clipboardData && (g = z.clipboardData.getData("Text")), null == g) return void i.preventDefault();
            if (e == l.end) {
                for (; a._skipSymbol(m.charAt(e));) e++;
                for (f = g.length - 1; f >= 0; f--) c = a._shiftRightPaste(c, e), c = a._removeAt(c, e), j = a._isValid(g.charAt(f), e), c = a._insertAt(c, j ? g.charAt(f) : k, e);
                e += g.length
            } else {
                for (h = e; h < l.end; h++) a._skipSymbol(m.charAt(h)) || (c = a._removeAt(c, h), c = a._insertAt(c, k, h));
                for (f = 0; f < g.length; f++) {
                    for (; a._skipSymbol(m.charAt(e));) e++;
                    c = a._removeAt(c, e), j = a._isValid(g.charAt(f), e), c = a._insertAt(c, j ? g.charAt(f) : k, e), e++
                }
            }
            a._value(c), a._caretTo(e), i.preventDefault(), a.changeInterval === d && (a.changeInterval = setInterval(b(a._triggerChange, a, o), 20))
        },
        _undo: function() {
            var a = this;
            a._applyMask()
        },
        _value: function() {
            return this.element.val.apply(this.element, arguments)
        },
        value: function() {
            if (arguments.length > 0) {
                var a = [].slice.call(arguments);
                if (!this._verifyValue(a[0])) return !1
            }
            return this._value.apply(this, arguments)
        },
        enabled: function() {
            var b, d = this,
                e = a(d.element),
                f = [].slice.call(arguments);
            return f.length > 0 ? (b = !!f[0], b ? e.removeAttr(c).removeClass("sui-input-disabled") : e.attr(c, c).addClass("sui-input-disabled"), d._enabled = b, void 0) : d._enabled
        },
        destroy: function() {
            var a = this,
                b = a.options.cls;
            a.element.off(m, a._focusHandler).off(k, a._blurHandler).off(j, a._keydownHandler).off(ja, a._keypressHandler).off(qa, a._cutHandler).off(ha, a._pasteHandler).off(P, a._dragStartHandler).off(fa, a._dragEnterHandler).off(ea, a._dragOverHandler).off(da, a._dropHandler).removeClass("sui-input" + (b ? " " + b : "")), a._focusHandler = a._blurHandler = a._keydownHandler = a._keypressHandler = a._cutHandler = a._pasteHandler = a._dragStartHandler = a._dragEnterHandler = a._dragOverHandler = a._dropHandler = null, g.fn.destroy.call(a)
        }
    }), X.defaults = ta, h.ui.plugin("MaskedTextBox", X), Y = {
        editable: !0,
        enabled: !0,
        open: !1,
        cls: d,
        dataSource: d,
        autoComplete: {
            enabled: !1,
            delay: 200,
            minLength: 0,
            filter: d
        },
        valueTemplate: d,
        textTemplate: d,
        inputTemplate: d,
        selected: d,
        value: d,
        width: d,
        height: d,
        dropDownWidth: d,
        dropDownHeight: 200,
        animation: {
            enabled: !0,
            openDelay: 200,
            closeDelay: 100
        },
        events: {}
    }, B = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var p, t, B, h, o, F, c = this,
                f = c.options,
                s = f.editable,
                I = f.dieOnError,
                v = f.dataSource,
                C = f.autoComplete,
                y = f.selected,
                J = f.value,
                H = d;
            return c._original = p = a(c.element), c._utype = D(p), v || c._utype == q ? (c.pending = 0, c.element = h = p.wrap("<span/>").parent(), p.hide(), c._onDDHandler = b(c._onDD, c), s ? (o = a('<input type="text" class="sui-input" />').focus(function() {
                a(this).parent().addClass("sui-combobox-focus")
            }).blur(function() {
                a(this).parent().removeClass("sui-combobox-focus"), c._blur()
            }), B = p.attr(R), e(B) && o.attr(R, B)) : o = a('<span class="sui-input sui-unselectable">&nbsp;</span>').attr(N, M).on(i, c._onDDHandler).on(x, function() {
                return !1
            }), c.textElement = o, o.appendTo(h), c.ddElement = F = a('<span class="sui-caret-container sui-unselectable" />').html('<span class="sui-caret sui-unselectable" unselectable="on" />').attr(N, M).on(i, c._onDDHandler).appendTo(h), h.addClass(s ? "sui-combobox" : "sui-dropdown"), f.cls && h.addClass(f.cls), t = p.attr(l), s ? o.attr(l, e(t) ? t : "0") : h.attr(l, e(t) ? t : "0"), e(f.width) && h.width(f.width), e(f.height) && (h.css(K, f.height), o.css(K, f.height), F.css(K, f.height)), c._keydownHandler = b(c._keydown, c), h.on(j, c._keydownHandler), c._keyupHandler = b(c._keyup, c), h.on(ia, c._keyupHandler), c._focusHandler = b(c._focus, c), s ? o.on(m, c._focusHandler) : h.on(m, c._focusHandler), c._blurHandler = b(c._blur, c), h.on(k, c._blurHandler), c.listElement = a("<span/>").appendTo(u.body), C && (H = e(C.filter) ? C.filter : v && v.filter ? v.filter : c._utype == q ? {
                and: [{
                    path: "text",
                    filter: "contains",
                    value: ""
                }]
            } : {
                and: [{
                    path: "",
                    filter: "contains",
                    value: ""
                }]
            }), c.listBox = new E(p, {
                cls: "sui-autocomplete",
                dataSource: v,
                readDataSource: !1,
                valueTemplate: f.valueTemplate,
                textTemplate: f.textTemplate,
                multiple: !1,
                selected: e(y) && ka(y) ? y[0] : y,
                values: J,
                width: f.dropDownWidth || h.innerWidth(),
                maxHeight: f.dropDownHeight,
                renderToINTERNAL: c.listElement,
                wrapOriginalINTERNAL: !1,
                tabindexINTERNAL: A.ie && A.version <= 8 ? 0 : -1,
                filterINTERNAL: H,
                events: {
                    select: function(a) {
                        c._onLBSelChanged(), c.trigger(w, {
                            index: a.index,
                            item: a.item,
                            text: a.text,
                            value: a.value
                        })
                    },
                    itemclick: function(a) {
                        s ? o.focus() : h.focus(), c._hideDD()
                    },
                    blur: function(a) {
                        setTimeout(b(c._blur, c), 20)
                    }
                }
            }), c.listBox.element.hide(), c.dataSource = c.listBox.dataSource, c._dsChangeHandler = b(c._dsChange, c), c.listBox.dataSource.on(n, c._dsChangeHandler), f.textTemplate = c.listBox.options.textTemplate, f.valueTemplate = c.listBox.options.valueTemplate, c.listBox.dataSource.read(), a(z).on(G + ".shieldComboBox" + c.getInstanceId(), b(c._position, c)), c.enabled(f.enabled), c._open = !1, f.enabled && f.open && c._showDD(), void(c._destroyed = !1)) : (c.destroy(), void r((s ? "shieldComboBox" : "shieldDropDown") + ": No dataSource or underlying SELECT element found.", I))
        },
        refresh: function(a) {
            this.refreshWithElement(this._original, a)
        },
        focus: function() {
            this.options.editable ? (a(this.textElement).focus(), C(a(this.textElement))) : a(this.element).focus()
        },
        _focus: function(b) {
            var a = this;
            a._hasFocus || (a._hasFocus = !0, a._oldValue = a.value(), a.trigger(m))
        },
        _blur: function(c) {
            var b = this;
            setTimeout(function() {
                b._destroyed || null == b.listBox || a(b.listBox.element).is(":focus") || a(b.element).is(":focus") || a(b.textElement).is(":focus") || (b._hideDD(),
                    b._oldValue !== b.value() && b.trigger(n), b.trigger(k), b._hasFocus = !1)
            }, 100)
        },
        _keydown: function(a) {
            var b = this;
            switch (a.keyCode) {
                case f.TAB:
                    break;
                case f.UP:
                case f.DOWN:
                    b._keydownUpDown(a), a.preventDefault();
                    break;
                case f.ESC:
                case f.ENTER:
                    a.preventDefault(), b.cancelSearch = !0, b._hideDD();
                    break;
                default:
                    b._keydownDefault(a)
            }
        },
        _keyup: function(c) {
            var b = this;
            b.options.editable && b._utype == p && a(b._original).attr(s, a(b.textElement).val())
        },
        _keydownUpDown: function(b) {
            this._enabled && a(this.listBox.element).trigger(b)
        },
        _keydownDefault: function(b) {
            var a = this;
            a.listBox.clearSelection(), a._searchTimeout(b)
        },
        _searchTimeout: function(d) {
            var b = this,
                c = b.options.autoComplete;
            c && c.enabled && (clearTimeout(b.searchTimeout), b.searchTimeout = setTimeout(function() {
                b.term !== a(b.textElement).val() && b._search()
            }, c.delay))
        },
        _search: function() {
            var b = this;
            b.listBox.dataSource;
            return b.term = a(b.textElement).val(), b.term.length < b.options.autoComplete.minLength ? void b._hideDD() : (b.cancelSearch = !1, b.pending++, a(b.textElement).addClass("sui-autocomplete-loading"), Q(b.listBox.dataSource.filter, b.term), void b.listBox.dataSource.read())
        },
        _dsChange: function() {
            var b = this,
                d = b._original,
                e = b._utype,
                c = b.textElement.val();
            return b._dsLoaded ? (b.pending--, b.pending || a(b.textElement).removeClass("sui-autocomplete-loading"), !b.cancelSearch && b._hasData() ? b._showDD() : b._hideDD(), e == q ? d.val(c) : e == p && d.attr(s, c), void b.trigger(w, {
                index: -1,
                item: c
            })) : (b._dsLoaded = !0, !b.options.editable && b.listBox.selected().length <= 0 && b.listBox.selected(0), void b._onLBSelChanged())
        },
        _hasData: function() {
            var a = this.listBox.dataSource.view;
            return a && a.length > 0
        },
        _onLBSelChanged: function() {
            var h, f, d, a = this,
                b = a.options,
                g = b.editable,
                i = a.listBox,
                c = i.selectedItems();
            c && c.length > 0 ? (h = t.call(a, b.valueTemplate, c[0]), f = t.call(a, b.textTemplate, c[0]), d = e(b.inputTemplate) ? t.call(a, b.inputTemplate, c[0]) : f, g ? a.textElement.val(d) : a.textElement.html(d)) : g ? a.textElement.val("") : a.textElement.html("&nbsp;")
        },
        _onDD: function(c) {
            var a = this,
                b = a.textElement;
            a.options.editable ? (b.focus(), C(b)) : a.element.focus(), a._open ? a._hideDD() : a._hasData() && a._showDD()
        },
        _position: function() {
            var c = this,
                b = a(c.element),
                e = a(c.listBox.element),
                d = b.offset(),
                f = b.outerHeight();
            e.css({
                top: d.top + f,
                left: d.left,
                width: b.innerWidth()
            })
        },
        _showDD: function() {
            var c = this,
                d = c.listBox,
                f = a(d.element),
                e = c.options.animation;
            c._enabled && (c._position(), e && e.enabled ? f.slideDown(e.openDelay, b(d.ensureActiveViewableINTERNAL, d)) : (f.show(), d.ensureActiveViewableINTERNAL()), c._open = !0)
        },
        _hideDD: function() {
            var b = this,
                d = a(b.listBox.element),
                c = b.options.animation;
            c && c.enabled ? d.slideUp(c.closeDelay) : d.hide(), b._open = !1
        },
        enabled: function() {
            var d, b = this,
                e = b.options.editable,
                f = a(b.element),
                g = b.textElement,
                h = b.ddElement,
                i = b._original,
                j = [].slice.call(arguments);
            return j.length > 0 ? (d = !!j[0], d ? (f.removeAttr(c).removeClass(e ? "sui-combobox-disabled" : "sui-dropdown-disabled"), g.removeAttr(c), h.removeAttr(c), i.removeAttr(c)) : (b._open && b._hideDD(), f.attr(c, c).addClass(e ? "sui-combobox-disabled" : "sui-dropdown-disabled"), g.attr(c, c), h.attr(c, c), i.attr(c, c)), b._enabled = d, void 0) : b._enabled
        },
        selected: function() {
            var a, c = this,
                b = c.listBox,
                d = [].slice.call(arguments);
            return d.length > 0 ? (a = d[0], b.clearSelection(), e(a) && (a = Ba(a), a > -1 ? b.selected(a) : c.options.editable || b.selected(0)), c._onLBSelChanged(), void 0) : (a = b.selected(), a && a.length > 0 ? a[0] : -1)
        },
        selectedItem: function() {
            var b = this,
                a = b.listBox.selectedItems();
            return a && a.length > 0 ? a[0] : null
        },
        value: function() {
            var b, c = this,
                d = c.listBox,
                e = [].slice.call(arguments);
            return e.length > 0 ? (d.clearSelection(), d.values(e[0]), c._onLBSelChanged(), void 0) : (b = d.values(), b && b.length > 0 ? b[0] : c.options.editable ? a(c.textElement).val() : null)
        },
        text: function() {
            var b = this,
                c = b.listBox.texts();
            return c && c.length > 0 ? c[0] : b.options.editable ? a(b.textElement).val() : null
        },
        destroy: function() {
            var b = this,
                e = a(b.element),
                c = a(b.textElement),
                d = a(b.ddElement);
            b._destroyed || (b._destroyed = !0, b._dsLoaded = !1, c.off(i, b._onDDHandler), d.off(i, b._onDDHandler), b._onDDHandler = null, a(z).off(G + ".shieldComboBox" + b.getInstanceId()), e.off(j, b._keydownHandler).off(ia, b._keyupHandler).off(k, b._blurHandler), b.dataSource = null, b.listBox && (b.listBox.dataSource.off(n, b._dsChangeHandler), b._dsChangeHandler = null, b.listBox.destroy(), b.listBox = null), a(b.listElement).remove(), c.remove(), d.remove(), b._keydownHandler = b._keyupHandler = b._blurHandler = null, b._original.unwrap().show(), b._original = null, g.fn.destroy.call(b))
        }
    }), B.defaults = Y, h.ui.plugin("ComboBox", B), sa = ua({}, Y, {
        editable: !1,
        autoComplete: d
    }), Z = B.extend({
        init: function(b, a) {
            a && (a.editable = !1, a.autoComplete = d), B.prototype.init.call(this, b, a)
        }
    }), Z.defaults = sa, h.ui.plugin("DropDown", Z), ga = {
        enabled: !0,
        cls: d,
        toggle: !1,
        checked: !1,
        events: {}
    }, _ = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var c = this,
                d = a(c.element),
                e = c.options,
                f = e.cls;
            d.addClass("sui-button sui-unselectable"), f && d.addClass(f), c._clickHandler = b(c._click, c), d.on(i, c._clickHandler), c.enabled(e.enabled), e.toggle && (c._checked = !!e.checked, c._checked ? d.addClass("sui-button-checked") : d.removeClass("sui-button-checked"))
        },
        _click: function(d) {
            var b = this,
                c = a(b.element);
            b._enabled && (b.options.toggle && (b._checked = !b._checked, b._checked ? c.addClass("sui-button-checked") : c.removeClass("sui-button-checked")), b.trigger(i, d))
        },
        checked: function() {
            var b = this,
                c = a(b.element),
                d = [].slice.call(arguments);
            return d.length > 0 ? void(b.options.toggle && (b._checked = !!d[0], b._checked ? c.addClass("sui-button-checked") : c.removeClass("sui-button-checked"))) : b._checked
        },
        enabled: function() {
            var b, d = this,
                e = a(d.element),
                f = [].slice.call(arguments);
            return f.length > 0 ? (b = !!f[0], b ? e.removeAttr(c).removeClass("sui-button-disabled") : e.attr(c, c).addClass("sui-button-disabled"), d._enabled = b, void 0) : d._enabled
        },
        destroy: function() {
            var a = this,
                b = a.options.cls;
            a.element.removeClass("sui-button sui-button-checked sui-button-disabled sui-unselectable" + (b ? " " + b : "")).off(i, a._clickHandler), a._clickHandler = null, g.fn.destroy.call(a)
        }
    }), _.defaults = ga, h.ui.plugin("Button", _), pa = {
        enabled: !0,
        enableThreeStates: !1,
        enableLabelClick: !0,
        checked: !1,
        label: "",
        events: {}
    }, aa = g.extend({
        init: function() {
            var e, d, m, h, c = this;
            g.fn.init.apply(this, arguments), e = c.options;
            var f = a(c.element).addClass("sui-checkbox-input");
            m = f.attr(l), f.attr(l, "0"), h = c.wrapper = f.wrap("<span class='sui-checkbox'/>").parent().attr(l, m);
            var k = a("<span class='sui-checkbox-element sui-checkbox-unchecked' />");
            k.appendTo(h), c.checkBoxElement = k, a("<span class='sui-checkmark' />").appendTo(k), e.label ? (d = a("<label class='sui-checkbox-label' />"), d.appendTo(h), d.attr("for", f.id), d.get(0).innerHTML = e.label, e.enableLabelClick && d.addClass("sui-checkbox-label-hover")) : (d = f.parent().parent(), d && !d.is("label") && (d = a('label[for="' + f.get(0).id + '"]')), d && e.enableLabelClick && d.addClass("sui-checkbox-label-hover")), f.attr(o) && (e.checked = !0), c.enabled(e.enabled), c.checked(e.checked), c._clickHandler = b(c._click, c), k.on(i, c._clickHandler), c._keydownHandler = b(c._keydown, c), k.on(j, c._keydownHandler), d && e.enableLabelClick && (d.on(i, c._clickHandler), d.on(j, c._keydownHandler)), h.onselectstart = function() {
                return !1
            }, h.onmousedown = function() {
                return !1
            }
        },
        _click: function(c) {
            var b = this;
            a(b.element);
            b._enabled && (b._checked ? b.options.enableThreeStates ? b._checked = null : b._checked = !1 : b._checked === !1 ? b._checked = !0 : null === b._checked && (b._checked = !1), b.checked(b._checked), b.trigger(i, c), c.preventDefault(), c.stopPropagation())
        },
        _keydown: function(a) {
            a.keyCode == f.SPACE && this._click(a)
        },
        hide: function() {
            a(this.wrapper).hide()
        },
        show: function() {
            a(this.wrapper).show()
        },
        isVisible: function() {
            return a(this.wrapper).is(":visible")
        },
        checked: function() {
            var c = this,
                g = [].slice.call(arguments),
                b = a(c.element),
                d = c.wrapper,
                f = d.find(".sui-checkmark");
            if (!(g.length > 0)) return c._checked;
            var e = g[0];
            c._checked = e, e ? (d.find(".sui-checkbox-element").removeClass("sui-checkbox-unchecked sui-checkbox-indeterminate").addClass("sui-checkbox-checked"), b.attr(o, o), b.data("1"), A.ie && A.version <= 8 && f.css("filter", "progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand', M11=0.7071067811865476, M12=0.7071067811865475, M21=-0.7071067811865475, M22=0.7071067811865476)")) : e === !1 ? (d.find(".sui-checkbox-element").removeClass("sui-checkbox-checked sui-checkbox-indeterminate").addClass("sui-checkbox-unchecked"), b.removeAttr(o), b.data("0"), f.css("filter", "")) : null === e && c.options.enableThreeStates && (d.find(".sui-checkbox-element").removeClass("sui-checkbox-checked sui-checkbox-unchecked").addClass("sui-checkbox-indeterminate"), b.removeAttr(o), b.data("2"), f.css("filter", ""))
        },
        enabled: function() {
            var b = this,
                d = [].slice.call(arguments),
                e = a(b.element);
            if (!(d.length > 0)) return b._enabled;
            var f = !!d[0];
            f ? (b.wrapper.removeAttr(c).removeClass("sui-checkbox-disabled"), e.removeAttr(c)) : (b.wrapper.attr(c, c).addClass("sui-checkbox-disabled"), e.attr(c, c)), b._enabled = f
        },
        destroy: function() {
            var a = this;
            a.element.removeClass("sui-checkbox-input").removeAttr(l), a.checkBoxElement && a.checkBoxElement.off(i, a._clickHandler), a.wrapper && (a.wrapper.find(".sui-checkbox-label").off(i, a._clickHandler).end().removeAttr(c).removeClass("sui-checkbox-disabled").replaceWith(a.element), a.wrapper = null), a._clickHandler = null, a._keydownHandler = null, g.fn.destroy.call(a)
        }
    }), aa.defaults = pa, h.ui.plugin("CheckBox", aa), na = {
        enabled: !0,
        enableLabelClick: !0,
        checked: !1,
        label: "",
        events: {}
    }, U = g.extend({
        init: function() {
            var e, d, m, f, c = this;
            g.fn.init.apply(this, arguments), e = c.options;
            var h = c.element.addClass("sui-radiobutton-input");
            m = h.attr(l), h.attr(l, "0"), f = c.wrapper = h.wrap("<span class='sui-radiobutton'/>").parent(), f.attr(l, m);
            var k = a("<span class='sui-radiobutton-element' />");
            k.appendTo(f), c.radioButtonElement = k, a("<span class='sui-checkmark' />").appendTo(k), e.label ? (d = a("<label class='sui-radiobutton-label' />"), d.appendTo(f), d.attr("for", c.element.id), d.get(0).innerHTML = e.label, e.enableLabelClick && d.addClass("sui-radiobutton-label-hover")) : (d = h.parent().parent(), d && !d.is("label") && (d = a('label[for="' + h.get(0).id + '"]')), d && e.enableLabelClick && d.addClass("sui-radiobutton-label-hover")), h.attr(o) && (e.checked = !0), c.enabled(e.enabled), e.checked ? c.checked(e.checked) : c._checked = !1, e.enabled && (c._clickHandler = b(c._click, c), k.on(i, c._clickHandler), c._keydownHandler = b(c._keydown, c), k.on(j, c._keydownHandler), d && e.enableLabelClick && (d.on(i, c._clickHandler), d.on(j, c._keydownHandler))), f.onselectstart = function() {
                return !1
            }, f.onmousedown = function() {
                return !1
            }
        },
        _click: function(a) {
            var b = this;
            b.checked(!0), b.trigger(i, a), a.preventDefault(), a.stopPropagation()
        },
        _keydown: function(a) {
            a.keyCode == f.SPACE && this._click(a)
        },
        hide: function() {
            a(this.wrapper).hide()
        },
        show: function() {
            a(this.wrapper).show()
        },
        isVisible: function() {
            return a(this.wrapper).is(":visible")
        },
        checked: function() {
            var a = this,
                b = [].slice.call(arguments);
            return b.length > 0 ? (a._uncheckAllFromSameGroup(), void a._checkInternal(b[0])) : a._checked
        },
        _checkInternal: function(c) {
            var b = this,
                d = a(b.element);
            b._checked = c, c ? (b.wrapper.find(".sui-radiobutton-element").removeClass("sui-radiobutton-unchecked sui-radiobutton-indeterminate").addClass("sui-radiobutton-checked"), d.attr(o, o)) : (b.wrapper.find(".sui-radiobutton-element").removeClass("sui-radiobutton-checked"), d.removeAttr(o))
        },
        _uncheckAllFromSameGroup: function() {
            var c = this,
                b = a(c.element);
            a('input[type="radio"][name="' + b.attr("name") + '"]').not(b).each(function() {
                var b = a(this).swidget();
                b && (b._checkInternal(!1), b.trigger(n))
            })
        },
        enabled: function() {
            var b = this,
                d = [].slice.call(arguments),
                e = a(b.element);
            if (!(d.length > 0)) return b._enabled;
            var f = !!d[0];
            f ? (b.wrapper.removeAttr(c).removeClass("sui-radiobutton-disabled"), e.removeAttr(c)) : (b.wrapper.attr(c, c).addClass("sui-radiobutton-disabled"), e.attr(c, c)), b._enabled = f
        },
        destroy: function() {
            var a = this;
            if (a.element.removeClass("sui-radiobutton-input").removeAttr(l), a.radioButtonElement && (a.radioButtonElement.off(i, a._clickHandler), a.radioButtonElement.off(j, a._keydownHandler)), a.radioButtonElement = null, a.wrapper) {
                var b = a.label;
                b && (b.off(i, a._clickHandler), b.off(j, a._keydownHandler)), a.label = null, a.wrapper.removeAttr(c).removeClass("sui-radiobutton-disabled"), a.wrapper.replaceWith(a.element), a.wrapper = null
            }
            a._clickHandler = null, a._keydownHandler = null, g.fn.destroy.call(a)
        }
    }), U.defaults = na, h.ui.plugin("RadioButton", U), la = {
        cls: d,
        enabled: !0,
        checked: d,
        onText: d,
        offText: d,
        events: {}
    }, ba = g.extend({
        init: function() {
            g.fn.init.apply(this, arguments);
            var d, m, f, n, q, c = this,
                h = c.options,
                t = h.dieOnError,
                s = h.cls,
                k = h.checked;
            return c._original = d = a(c.element), D(d) !== p || "checkbox" !== d.attr("type") ? void r("shieldSwitch: Underlying element must ne an input of type checkbox.", t) : (c.element = f = d.wrap('<div class="sui-switch sui-unselectable' + (s ? " " + s : "") + '" />').parent(), q = a('<div class="sui-switch-inner sui-unselectable" />').appendTo(f), c._text = a('<span class="sui-switch-text sui-unselectable" />').appendTo(q), c._handle = n = a('<div class="sui-switch-handle sui-unselectable" />').appendTo(f), n.height(f.height()), d.hide(), m = d.attr(l), f.attr(l, e(m) ? m : "0"), c._clickProxy = b(c._click, c), c.element.on(i, c._clickProxy), c._keydownProxy = b(c._keydown, c), c.element.on(j, c._keydownProxy), k = e(k) ? !!k : !!d.attr(o), c.checked(k, !1), void c.enabled(h.enabled))
        },
        refresh: function(a) {
            this.refreshWithElement(this._original, a)
        },
        _keydown: function(a) {
            var b = this;
            a.keyCode === f.SPACE && (b._click(a), a.preventDefault())
        },
        _click: function(b) {
            var a = this;
            a._enabled && (a.checked(!a._checked), a.trigger(i, b), b.preventDefault(), b.stopPropagation())
        },
        checked: function() {
            var f, j, b = this,
                n = b.options,
                k = n.onText,
                i = n.offText,
                d = a(b.element),
                g = a(b._handle),
                l = a(b._text),
                m = b._original,
                c = [].slice.call(arguments),
                h = 100;
            return c.length > 0 ? (f = !!c[0], j = e(c[1]) ? !!c[1] : !0, j || (h = 0), f ? (m.attr(o, o), g.animate({
                left: d.width() - g.width() - 2
            }, h, function() {
                d.addClass("sui-switch-checked"), e(k) && l.html(k)
            })) : (m.removeAttr(o), g.animate({
                left: -2
            }, h, function() {
                d.removeClass("sui-switch-checked"), e(i) && l.html(i)
            })), b._checked = f, void 0) : b._checked
        },
        enabled: function() {
            var d, b = this,
                e = a(b.element),
                f = b._original,
                g = [].slice.call(arguments);
            return g.length > 0 ? (d = !!g[0], d ? (e.removeAttr(c).removeClass("sui-switch-disabled"), f.removeAttr(c)) : (e.attr(c, c).addClass("sui-switch-disabled"), f.attr(c, c)), b._enabled = d, void 0) : b._enabled
        },
        destroy: function() {
            var b = this;
            a(b.element).off(i, b._clickProxy).off(j, b._keydownProxy), a(b._inner).remove(), a(b._handle).remove(), b._original.unwrap().show(), b._clickProxy = b._keydownProxy = b._original = b._inner = b._handle = null, g.fn.destroy.call(b)
        }
    }), ba.defaults = la, h.ui.plugin("Switch", ba)
}(jQuery, shield, this);
! function(a, b, D, U) {
    "use strict";
    var J, x, q, i, A, E, w, I, y, C, p = b.ui.Widget,
        T = b.Class,
        o = b.format,
        S = b.parseDate,
        j = document,
        n = b.is.func,
        B = b.is,
        c = a.proxy,
        R = navigator.userAgent,
        Q = D.opera,
        H = /msie/i.test(R) && !Q,
        O = H && 8 === j.documentMode,
        s = a.extend,
        L = B.undefined,
        l = "month",
        h = "year",
        k = "decade",
        m = "century",
        d = "click",
        r = "mousedown",
        N = "keypress",
        t = "focus",
        K = "selectstart",
        M = "select",
        e = "change",
        z = "viewChange",
        v = "depthChange",
        P = "open",
        G = "close",
        F = "blur",
        f = "display",
        g = "none";
    J = {
        enabled: !0,
        readOnly: !1,
        hover: !0,
        footer: {
            enabled: !0,
            footerTemlpate: "Today"
        },
        min: new Date(1900, 0, 1),
        max: new Date(2099, 11, 31),
        value: U,
        focused: new Date,
        labels: {
            previous: "Previous",
            next: "Next"
        },
        view: {
            depth: l,
            start: l
        },
        dayTemplate: "{day}",
        otherMonthDayTemplate: "{day}",
        outOfRangeDayTemplate: "&nbsp;",
        dateTooltipTemplate: "{date:MM/dd/yyyy}",
        events: {}
    };
    var u = function(a) {
            var b = !1,
                d = "Webkit Moz ms O".split(" "),
                e = j.createElement("div"),
                f = null;
            if (a = a.toLowerCase(), e.style[a] && (b = !0), b === !1) {
                f = a.charAt(0).toUpperCase() + a.substr(1);
                for (var c = 0; c < d.length; c++)
                    if (void 0 !== e.style[d[c] + f]) {
                        b = !0;
                        break
                    }
            }
            return b
        },
        V = T.extend({
            init: function(d) {
                var h = this,
                    e = d.listbox,
                    i = d.min,
                    k = d.max,
                    l = d.interval,
                    c = d.parent,
                    m = d.textTemplate;
                if (b.ui.ListBox) {
                    if (B.object(e) && e instanceof b.ui.ListBox) c.listBox = e;
                    else {
                        c._listBoxWrapper = a("<div style='display: none;' />").appendTo(j.body);
                        var n = h._populateDataSource(i, k, l);
                        c.listBox = new b.ui.ListBox(c._listBoxWrapper, s({}, e, {
                            dataSource: {
                                data: n
                            },
                            multiple: !1,
                            textTemplate: m,
                            width: c._wrapper.innerWidth(),
                            maxHeight: 200
                        })), c._wrapper.parent().hasClass("sui-rtl") ? c.listBox.element.parent().addClass("sui-rtl") : c.listBox.element.parent().css(f, g)
                    }
                    c._shouldShowPopup = !0
                }
            },
            _populateDataSource: function(b, a, f) {
                var c, d, e = [];
                for (b >= a ? a = new Date(b.getFullYear(), b.getMonth(), b.getDate() + 1, a.getHours(), a.getMinutes(), a.getSeconds()) : (a = new Date(b.getFullYear(), b.getMonth(), b.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()), a.getTime() == b.getTime() && (a = new Date(b.getFullYear(), b.getMonth(), b.getDate() + 1, a.getHours(), a.getMinutes(), a.getSeconds()))), c = b.getTime(), d = a.getTime(); d > c;) e.push(new Date(c)), c += 60 * f * 1e3;
                return e
            },
            destroy: function() {
                var a = this;
                a.listBox;
                a.listBox && (a.listBox.destroy(), a.listBox = null)
            }
        });
    x = p.extend({
        init: function(f, g) {
            p.fn.init.apply(this, arguments);
            var a = this,
                b = a.options,
                e = b.value;
            a.element.addClass("sui-calendar"), a._focusedDate = b.focused, a._view = b.view.start, a._enabled = b.enabled, e && (a._focusedDate = a._selectedDate = new Date(e.getFullYear(), e.getMonth(), e.getDate())), a._initializeHeader(), a._render(), b.footer.enabled && a._initializeFooter(), !b.readOnly && b.enabled ? (a.element.find(".sui-prev").on(d, a._movePrev = c(a._movePrevHandler, a)), a.element.find(".sui-next").on(d, a._moveNext = c(a._moveNextHandler, a)), a.element.find(".sui-text").on(d, a._changeViewDepth = c(a._changeViewDepthHandler, a)), a.element.find(".sui-footer").on(d, a._selectToday = c(a._selectTodayHandler, a))) : b.readOnly ? a.element.addClass("sui-read-only") : a.element.addClass("sui-calendar-disabled"), H && a.element.on(K, a._selectStart = function() {
                return !1
            })
        },
        _calendarSelectionHandler: function(n) {
            var c, g, b = this,
                f = a(n.target).closest("td"),
                d = b._focusedDate;
            b.options.view.depth;
            if (f.length && !f.hasClass("sui-out-of-range") && !f.hasClass("sui-no-hover") && b._enabled) switch (b._calendarTable.find(".sui-focused").removeClass("sui-focused"), b._view) {
                case l:
                    c = new Date(f.attr("data-value"));
                    var o = b._shouldChangeView(c),
                        i = !1;
                    c.getTime() > b._focusedDate && (i = !0), b._focusedDate = c, b._selectedDate = c, o && (b._animationBegins(i), b._renderView(), b._animationEnds(i), b.trigger(z)), b._selectDateCell(c), b.trigger(e);
                    break;
                case h:
                    var j = parseInt(f.attr("data-value"), 10);
                    c = new Date(d.getFullYear(), j, d.getDate()), c.getDate() != d.getDate() && (c = new Date(d.getFullYear(), j + 1, 0)), b._focusedDate = c, b.options.view.depth == h ? (b._selectedDate = c, b._selectDateCell(c), b.trigger(e)) : (b._view = l, b._viewDepthAnimationBegins(), b._renderView(), b._viewDepthAnimationEnds(), b.trigger(v));
                    break;
                case k:
                    g = parseInt(f.attr("data-value"), 10), c = new Date(g, d.getMonth(), d.getDate()), c.getDate() != d.getDate() && (c = new Date(g, d.getMonth() + 1, 0)), b._focusedDate = c, b.options.view.depth == k ? (b._selectedDate = c, b._selectDateCell(c), b.trigger(e)) : (b._view = h, b._viewDepthAnimationBegins(), b._renderView(), b._viewDepthAnimationEnds(), b.trigger(v));
                    break;
                case m:
                    g = parseInt(f.attr("data-value"), 10), c = new Date(g, d.getMonth(), d.getDate()), c.getDate() != d.getDate() && (c = new Date(g, d.getMonth() + 1, 0)), b._focusedDate = c, b.options.view.depth == m ? (b._selectedDate = c, b._selectDateCell(c), b.trigger(e)) : (b._view = k, b._viewDepthAnimationBegins(), b._renderView(), b._viewDepthAnimationEnds(), b.trigger(v))
            }
        },
        _shouldChangeView: function(f) {
            var a, e, g = this,
                i = g._focusedDate,
                d = !1,
                b = i.getFullYear(),
                c = f.getFullYear();
            switch (g._view) {
                case l:
                    (c != b || f.getMonth() != i.getMonth()) && (d = !0);
                    break;
                case h:
                    c != b && (d = !0);
                    break;
                case k:
                    a = b - b % 10, e = a + 10, (a > c || c > e) && (d = !0);
                    break;
                case m:
                    a = b - b % 100, e = a + 100, (a > c || c > e) && (d = !0)
            }
            return d
        },
        _selectTodayHandler: function() {
            var a = this,
                b = new Date,
                f = a._shouldChangeView(b),
                c = !1;
            if (a._enabled) {
                var d = new Date(b.getFullYear(), b.getMonth(), b.getDate());
                d.getTime() > a._focusedDate && (c = !0), a._selectedDate = a._focusedDate = d, a._view != a.options.view.depth ? (a._view = a.options.view.depth, a._viewDepthAnimationBegins(), a._renderView(), a._viewDepthAnimationEnds(), a.trigger(v)) : f ? (a._animationBegins(c), a._renderView(), a._animationEnds(c), a.trigger(z)) : a._selectDateCell(a._focusedDate), a.trigger(e)
            }
        },
        _selectDateCell: function(b) {
            var c = this,
                d = null;
            switch (c._view) {
                case l:
                    d = c._calendarTable.find(".sui-date:not('.sui-other-month')").filter(function() {
                        var d = a(this).attr("data-value"),
                            c = new Date(d);
                        return c.getDate() == b.getDate() && c.getMonth() == b.getMonth() && c.getFullYear() == b.getFullYear()
                    });
                    break;
                case h:
                    d = c._calendarTable.find(".sui-month").filter(function() {
                        return a(this).attr("data-value") == b.getMonth()
                    });
                    break;
                case k:
                    d = c._calendarTable.find(".sui-year").filter(function() {
                        return a(this).attr("data-value") == b.getFullYear()
                    });
                    break;
                case m:
                    d = c._calendarTable.find(".sui-years").filter(function() {
                        var c = parseInt(a(this).attr("data-value"), 10);
                        return b.getFullYear() >= c && b.getFullYear() < c + 10
                    })
            }
            c._calendarTable.find(".sui-selected").removeClass("sui-selected"), d.addClass("sui-selected")
        },
        _viewDepthAnimationBegins: function() {
            var a = this;
            if (!u("transition")) return void a._calendarTable.empty();
            a._enabled = !1;
            var b = a._calendarTable;
            b.bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(c) {
                b.unbind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"), b.remove(), a._enabled = !0
            }), b.addClass("sui-fade-in"), a._renderTable()
        },
        _viewDepthAnimationEnds: function() {
            u("transition") && this._calendarTable.addClass("sui-scaling")
        },
        _changeViewDepthHandler: function(d) {
            var a = this,
                b = [l, h, k, m],
                c = jQuery.inArray(a._view, b);
            3 > c && a._enabled && (a._view = b[c + 1], a._viewDepthAnimationBegins(), a._renderView(), a._viewDepthAnimationEnds())
        },
        _movePrevMonth: function() {
            var b = this,
                a = b._focusedDate,
                c = (b._view, new Date(a.getFullYear(), a.getMonth() - 1, a.getDate()));
            c.getDate() != a.getDate() && (c = new Date(a.getFullYear(), a.getMonth(), 0)), b._focusedDate = c
        },
        _moveNextMonth: function() {
            var b = this,
                a = b._focusedDate,
                c = (b._view, new Date(a.getFullYear(), a.getMonth() + 1, a.getDate()));
            c.getDate() != a.getDate() && (c = new Date(a.getFullYear(), a.getMonth() + 2, 0)), b._focusedDate = c
        },
        _movePrevYears: function(d) {
            var b = this,
                a = b._focusedDate,
                c = (b._view, new Date(a.getFullYear() - d, a.getMonth(), a.getDate()));
            c.getMonth() != a.getMonth() && (c = new Date(a.getFullYear() - d, a.getMonth() + 1, 0)), b._focusedDate = c, b._calendarTable.empty()
        },
        _moveNextYears: function(d) {
            var b = this,
                a = b._focusedDate,
                c = (b._view, new Date(a.getFullYear() + d, a.getMonth(), a.getDate()));
            c.getMonth() != a.getMonth() && (c = new Date(a.getFullYear() + d, a.getMonth() + 1, 0)), b._focusedDate = c, b._calendarTable.empty()
        },
        _animationBegins: function(c) {
            var b = this,
                d = "-";
            return u("transition") ? (b._calendarTable.removeClass("sui-scaling"), b._tableWrapper = a("<div>").insertAfter(b.element.find(".sui-header")), b._tableWrapper.width(2 * b.element.width()), b.element.find(".sui-calendar-view").appendTo(b._tableWrapper), b.element.parent().hasClass("sui-rtl") && (c = !c, d = "+"), b._renderTable(c), c || (b._tableWrapper.css("position", "relative"), b._tableWrapper.css("left", d + b.element.width() + "px")), b._tableWrapper.addClass("sui-calendar-animation"), b._enabled = !1, void b._tableWrapper.bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(a) {
                b._tempTable.remove(), b._calendarTable.insertAfter(b.element.find(".sui-header")), b._tableWrapper.unbind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"), b._tableWrapper.remove(), b._tableWrapper = null, b._enabled = !0
            })) : void b._calendarTable.empty()
        },
        _animationEnds: function(c) {
            var b = this;
            if (u("transition")) {
                var a = b.element.width();
                c && (a = -1 * a), b._tableWrapper.css("transform", "translateX(" + a + "px)")
            }
        },
        _moveView: function(b) {
            var a = this;
            switch (a._animationBegins(b), a._view) {
                case l:
                    b ? a._moveNextMonth() : a._movePrevMonth(), a._createMonthView();
                    break;
                case h:
                    b ? a._moveNextYears(1) : a._movePrevYears(1), a._createYearsView();
                    break;
                case k:
                    b ? a._moveNextYears(10) : a._movePrevYears(10), a._createDecadeView();
                    break;
                case m:
                    b ? a._moveNextYears(100) : a._movePrevYears(100), a._createcenturyView()
            }
            a._animationEnds(b), a.trigger(z)
        },
        _disablePrev: function(c) {
            var a = this,
                b = a.element.find(".sui-prev");
            c ? (a.preventPrevNavigation = !0, b.addClass("sui-calendar-disabled")) : (a.preventPrevNavigation = !1, b.removeClass("sui-calendar-disabled"))
        },
        _disableNext: function(c) {
            var a = this,
                b = a.element.find(".sui-next");
            c ? (a.preventNextNavigation = !0, b.addClass("sui-calendar-disabled")) : (a.preventNextNavigation = !1, b.removeClass("sui-calendar-disabled"))
        },
        _movePrevHandler: function() {
            var a = this;
            !a.preventPrevNavigation && a._enabled && a._moveView(!1)
        },
        _moveNextHandler: function() {
            var a = this;
            !a.preventNextNavigation && a._enabled && a._moveView(!0)
        },
        _initializeHeader: function() {
            var c = this,
                b = c.options.labels;
            this._header = a('<div class="sui-header"><span unselectable="on"  title="' + b.previous + '" class="sui-prev"><span unselectable="on" class="sui-left-arrow"></span></span><span class="sui-text"></span><span unselectable="on" title="' + b.next + '" class="sui-next"><span unselectable="on" class="sui-right-arrow"></span></span></div>').appendTo(this.element)
        },
        _renderTable: function(g) {
            var b = this,
                e = b.options,
                f = "sui-calendar-view";
            e.hover && e.enabled && (f += " sui-hoverable"), b._calendarTable ? (b.element.find(".sui-calendar-view").off(d, b._calendarSelection), b._calendarSelection = null, g ? (b._tempTable = b.element.find(".sui-calendar-view"), b._calendarTable = a("<table />").width(b.element.width()).addClass(f).insertAfter(b._tempTable)) : (b._tempTable = b.element.find(".sui-calendar-view"), b._calendarTable = a("<table />").width(b.element.width()).addClass(f).insertBefore(b._tempTable))) : b._calendarTable = a("<table />").width(b.element.width()).addClass(f).insertAfter(b.element.find(".sui-header")), !e.readOnly && e.enabled && b.element.find(".sui-calendar-view").on(d, b._calendarSelection = c(b._calendarSelectionHandler, b))
        },
        _render: function() {
            this._renderTable(), this._renderView()
        },
        _renderView: function() {
            var a = this;
            switch (a._view) {
                case l:
                    a._createMonthView();
                    break;
                case h:
                    a._createYearsView();
                    break;
                case k:
                    a._createDecadeView();
                    break;
                case m:
                    a._createcenturyView();
                    break;
                default:
                    a._createMonthView()
            }
        },
        _initializeFooter: function() {
            var c = this,
                d = c.options,
                b = d.footer.footerTemlpate,
                e = n(b) ? b : function(a) {
                    return o(b, a)
                };
            a('<div class="sui-footer"><span class="sui-footer-text">' + e.call(c, new Date) + "</span></div>").appendTo(this.element)
        },
        _createMonthView: function() {
            var c = this,
                i = c.options,
                t = c._focusedDate,
                H = c._calendarTable,
                w = b.getCalendarInfo(),
                s = w.days,
                l = w.firstDay,
                Z = w.months,
                r = s.namesShort,
                p = [],
                Y = s.namesAbbr,
                X = s.names,
                O = i.min,
                F = i.max,
                x = i.dayTemplate,
                y = i.otherMonthDayTemplate,
                z = i.dateTooltipTemplate,
                A = i.outOfRangeDayTemplate,
                W = n(x) ? x : function(a) {
                    return o(x, a)
                },
                P = n(y) ? y : function(a) {
                    return o(y, a)
                },
                U = n(z) ? z : function(a) {
                    return o(z, a)
                },
                T = n(A) ? A : function(a) {
                    return o(A, a)
                },
                S = a("<thead />").appendTo(H),
                R = a("<tr />").addClass("sui-week-header").appendTo(S),
                N = "",
                e = 0;
            for (e = l; e < r.length; e++) p.push(r[e]);
            for (var v = 0; l > v; v++) p.push(r[v]);
            for (var j = 0; j < p.length; j++) {
                p[j];
                N += "<th scope='col' abbr='" + Y[j] + "' title='" + X[j] + "'>" + p[j] + "</th>"
            }
            R.html(N);
            var V = a('<tbody class="sui-days"/>').appendTo(H),
                f = t.getFullYear(),
                g = t.getMonth(),
                q = new Date(f, g, 1).getDay() - l,
                Q = new Date(f, g + 1, 0).getDay() - l,
                L = new Date(f, g + 1, 0).getDate(),
                M = 7;
            c._header.find(".sui-text").text(Z.names[g] + " " + f), 0 >= q && (q = 7 - (0 === q ? 0 : l), M = 0);
            var C = -1 * q + 1,
                k = 6 - Q + L + M,
                B = 0,
                G = null,
                u = "";
            for (k - C > 42 && (k -= 7), 35 > k - C && (k += 7), e = C; k >= e; e++) {
                var d = new Date(f, g, e, 0, 0, 0, 0),
                    I = "sui-date",
                    D = d.getTime() < O.getTime() || d.getTime() > F.getTime() ? " sui-out-of-range" : "",
                    h = 1 > e || e > L ? " sui-other-month" : "",
                    E = 6 == d.getDay() || 0 === d.getDay() ? " sui-weekend" : "",
                    K = D || t.getDate() != e || h ? "" : " sui-focused",
                    J = c._selectedDate && d.getTime() == c._selectedDate.getTime() && !h ? " sui-selected" : "",
                    m = null;
                D ? (m = T.call(c, {
                    date: d,
                    day: d.getDate()
                }), h = "", E = "", K = "", J = "", I = "") : h ? (m = P.call(c, {
                    date: d,
                    day: d.getDate()
                }), "" === m && (h += " sui-no-hover")) : m = W.call(c, {
                    date: d,
                    day: d.getDate()
                }), u += "<td title='" + U.call(c, {
                    date: d,
                    day: d.getDate()
                }) + "' data-value='" + d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + "' class='" + I + h + E + K + J + D + "'>" + m + "</td>", B++, 7 == B && (G = a('<tr role="row" />').appendTo(V), G.html(u), B = 0, u = "")
            }
            var $ = new Date(f, g, 1, 0, 0, 0, 0),
                _ = new Date(f, g + 1, 0);
            $.getTime() <= O.getTime() ? c._disablePrev(!0) : c.element.find(".sui-prev").hasClass("sui-calendar-disabled") && c._disablePrev(!1), _.getTime() >= F.getTime() ? c._disableNext(!0) : c.element.find(".sui-next").hasClass("sui-calendar-disabled") && c._disableNext(!1)
        },
        _createYearsView: function() {
            var c = this,
                m = c.options,
                v = c._calendarTable,
                e = c._focusedDate,
                y = b.getCalendarInfo(),
                s = y.months,
                x = s.names,
                q = s.namesAbbr,
                w = a('<tbody class="sui-months"/>').appendTo(v),
                o = null,
                n = "",
                i = m.min,
                l = m.max,
                k = "",
                j = 0;
            c._header.find(".sui-text").text(e.getFullYear());
            for (var d = 0; d < q.length; d++) {
                var f = new Date(e.getFullYear(), d, e.getDate(), 0, 0, 0, 0),
                    u = e.getMonth() == d ? " sui-focused" : "";
                m.view.depth == h && (k = c._selectedDate && f.getTime() == c._selectedDate.getTime() ? " sui-selected" : "");
                var g = "",
                    t = x[d],
                    r = q[d],
                    p = "sui-month";
                (f.getFullYear() <= i.getFullYear() && f.getMonth() < i.getMonth() || f.getFullYear() >= l.getFullYear() && f.getMonth() > l.getMonth()) && (g = " sui-out-of-range"), g && (u = "", k = "", t = r = "&nbsp;", p = ""), n += "<td data-value='" + d + "' class='" + p + u + k + g + "' title='" + t + "'>" + r + "</td>", j++, 4 == j && (o = a("<tr />").appendTo(w), o.html(n), j = 0, n = "")
            }
            e.getFullYear() <= i.getFullYear() ? c._disablePrev(!0) : c.element.find(".sui-prev").hasClass("sui-calendar-disabled") && c._disablePrev(!1), e.getFullYear() >= l.getFullYear() ? c._disableNext(!0) : c.element.find(".sui-next").hasClass("sui-calendar-disabled") && c._disableNext(!1)
        },
        _createDecadeView: function() {
            var b = this,
                i = b.options,
                x = b._calendarTable,
                h = b._focusedDate,
                d = h.getFullYear(),
                s = d % 10,
                w = a('<tbody class="sui-decade"/>').appendTo(x),
                r = null,
                n = "",
                o = 0,
                q = i.min,
                v = i.max,
                f = d - s - 1,
                l = "",
                g = d + (10 - s);
            b._header.find(".sui-text").text(f + 1 + "-" + (g - 1));
            for (var c = f; g >= c; c++) {
                var j = new Date(c, h.getMonth(), h.getDate(), 0, 0, 0, 0),
                    t = c == f || c == g ? " sui-other-year" : "",
                    u = d == c ? " sui-focused" : "",
                    m = "",
                    e = c,
                    p = "sui-year";
                (j.getFullYear() < q.getFullYear() || j.getFullYear() > v.getFullYear()) && (m = " sui-out-of-range"), i.view.depth == k && (l = b._selectedDate && j.getTime() == b._selectedDate.getTime() ? " sui-selected" : ""), m && (t = "", u = "", l = "", p = "", e = "&nbsp;"), n += "<td data-value='" + e + "' class='" + p + t + u + l + m + "' title='" + e + "'>" + e + "</td>", o++, 4 == o && (r = a("<tr />").appendTo(w), r.html(n), o = 0, n = "")
            }
            f < q.getFullYear() ? b._disablePrev(!0) : b.element.find(".sui-prev").hasClass("sui-calendar-disabled") && b._disablePrev(!1), g > v.getFullYear() ? b._disableNext(!0) : b.element.find(".sui-next").hasClass("sui-calendar-disabled") && b._disableNext(!1)
        },
        _createcenturyView: function() {
            var A, b = this,
                p = b.options,
                z = b._calendarTable,
                d = b._focusedDate,
                f = d.getFullYear(),
                y = f % 100,
                x = a('<tbody class="sui-decade"/>').appendTo(z),
                s = null,
                n = "",
                o = "",
                i = p.min,
                q = p.max,
                k = 0,
                e = f - y - 10,
                g = e + 99 + 10 + 2;
            b._header.find(".sui-text").text(e + 10 + "-" + (g - 2));
            for (var c = e; g > c; c += 10) {
                var t = c == e || c == g - 1 ? " sui-other-years" : "",
                    h = new Date(c, d.getMonth(), d.getDate(), 0, 0, 0, 0),
                    w = new Date(c + 10, d.getMonth(), d.getDate(), 0, 0, 0, 0),
                    j = "",
                    r = f >= c && c + 10 > f ? " sui-focused" : "",
                    v = "sui-years",
                    l = c + " - " + (c + 9),
                    u = c;
                (h.getFullYear() < i.getFullYear() && w.getFullYear() <= i.getFullYear() || h.getFullYear() > q.getFullYear()) && (j = " sui-out-of-range"), p.view.depth == m && (o = b._selectedDate && b._selectedDate.getFullYear() >= h.getFullYear() && b._selectedDate.getFullYear() < h.getFullYear() + 10 ? " sui-selected" : ""), j && (t = "", r = "", o = "", v = "", A = u = l = "&nbsp;"), n += "<td data-value='" + u + "' class='" + v + t + r + o + j + "' title='" + l + "'>" + l + "</td>", k++, 4 == k && (s = a("<tr />").appendTo(x), s.html(n), k = 0, n = "")
            }
            e < i.getFullYear() ? b._disablePrev(!0) : b.element.find(".sui-prev").hasClass("sui-calendar-disabled") && b._disablePrev(!1), g > q.getFullYear() ? b._disableNext(!0) : b.element.find(".sui-next").hasClass("sui-calendar-disabled") && b._disableNext(!1)
        },
        value: function() {
            var a = this,
                c = a.options,
                e = c.min,
                f = c.max,
                d = [].slice.call(arguments);
            if (!(d.length > 0)) return a._selectedDate;
            var b = d[0];
            if (null == b || "" === b || L(b)) a._selectedDate = null, a._focusedDate = c.focused;
            else {
                if (b.getTime() < e.getTime() || b.getTime() > f.getTime()) return;
                a._focusedDate = a._selectedDate = new Date(b.getFullYear(), b.getMonth(), b.getDate())
            }
            a._calendarTable.empty(), a._renderView()
        },
        enabled: function() {
            var a = this,
                d = a.options,
                b = [].slice.call(arguments);
            if (!(b.length > 0)) return a._enabled;
            var c = b[0];
            c ? (d.hover && a._calendarTable.addClass("sui-hoverable"), a.element.removeClass("sui-calendar-disabled")) : (a._calendarTable.removeClass("sui-hoverable"), a.element.addClass("sui-calendar-disabled")), a._enabled = c
        },
        previous: function() {
            var a = this;
            a.preventPrevNavigation || a._moveView(!1)
        },
        next: function() {
            var a = this;
            a.preventNextNavigation || a._moveView(!0)
        },
        view: function() {
            var a = this,
                b = [].slice.call(arguments);
            if (!(b.length > 0)) return a._view;
            var c = b[0];
            c != a._view && (a._view = c, a._calendarTable.empty(), a._renderView())
        },
        focused: function() {
            var a = this,
                b = [].slice.call(arguments);
            if (!(b.length > 0)) return a._focusedDate;
            a._focusedDate = b[0];
            b.length > 1 && a._view != b[1] && (a._view = b[1]), a._calendarTable.empty(), a._renderView()
        },
        visible: function() {
            var a = this,
                b = (a.options, [].slice.call(arguments));
            if (!(b.length > 0)) return a.element.hasClass("sui-hidden") || "none" == a.element.css("display") ? !1 : !0;
            var c = b[0];
            c ? a.element.removeClass("sui-hidden") : a.element.addClass("sui-hidden")
        },
        destroy: function() {
            var a = this;
            a.element.removeClass("sui-calendar").removeClass("sui-read-only").removeClass("sui-calendar-disabled"), a._focusedDate = null, a._header = null, a._calendarTable = null, a._view = null, a._enabled = null, a._selectedDate = null, a._tempTable = null, a._tableWrapper = null, a.element.find(".sui-prev").off(d, a._movePrev), a._movePrev = null, a.element.find(".sui-next").off(d, a._moveNext), a._moveNext = null, a.element.find(".sui-text").off(d, a._changeViewDepth), a._changeViewDepth = null, a.element.find(".sui-footer").off(d, a._selectToday), a._selectToday = null, a.element.find(".sui-calendar-view").off(d, a._calendarSelection), a._calendarSelection = null, a.element.off(K, a._selectStart), a._selectStart = null, a.element.empty(), p.fn.destroy.call(a)
        }
    }), x.defaults = J, b.ui.plugin("Calendar", x), q = {
        calendar: null,
        format: "{0:MM/dd/yyyy}",
        textTemplate: "{0:MM/dd/yyyy}",
        value: null,
        parseFormats: ["MM/dd/yyyy"],
        openOnFocus: !1,
        showButton: !0,
        editable: !0,
        enabled: !0,
        messages: {
            calendarIconTooltip: "",
            buttonText: "select"
        },
        min: new Date(1900, 0, 1),
        max: new Date(2099, 11, 31),
        events: {}
    }, i = p.extend({
        init: function(j, l) {
            p.fn.init.apply(this, arguments);
            var b = this,
                d = b.options,
                h = d.value,
                i = d.showButton ? "" : " sui-no-button";
            O && (i += " sui-ie8");
            var e = a(d.isMonthYearPicker ? "<span class='sui-monthyearpicker" + i + "' />" : d.isTimePicker ? "<span class='sui-timepicker" + i + "' />" : d.isDateTimePicker ? "<span class='sui-datetimepicker" + i + "' />" : "<span class='sui-datepicker" + i + "' />");
            if (b._selectedDate = null, a(j).after(e), b._wrapper = e, b._visibleInput = a("<input class='sui-picker-input' type='text' />").appendTo(e), d.showButton) {
                var k = d.messages.calendarIconTooltip;
                d.isTimePicker && (k = d.messages.timeIconTooltip), b._iconWrapper = a("<span class='sui-icon-wrapper' unselectable='on' title='" + k + "' />").appendTo(e);
                a('<span class="sui-sprite sui-calendar-icon" unselectable="on">' + d.messages.buttonText + "</span>").appendTo(b._iconWrapper);
                d.isDateTimePicker && (b._timeIconWrapper = a("<span class='sui-time-icon-wrapper' unselectable='on' title='" + d.messages.timeIconTooltip + "' />").appendTo(e), a('<span class="sui-sprite sui-time-icon" unselectable="on">' + d.messages.buttonText + "</span>").appendTo(b._timeIconWrapper))
            }
            a(j).css(f, g).appendTo(e), b._enabled = d.enabled, d.enabled || (e.addClass("sui-disabled"), b._visibleInput.on(t, b._visibleInputFocused = c(b._visibleInputFocusedHandler, b))), b._attachEvents(), h && (d.isMonthYearPicker ? b._selectedDate = new Date(h.getFullYear(), h.getMonth(), 1) : b._selectedDate = h, b._changeInputsValues(h))
        },
        _changeInputsValues: function(b) {
            var a = this,
                c = a.options,
                d = c.format,
                e = c.textTemplate,
                f = n(d) ? d : function(a) {
                    return o(d, a.date)
                };
            a.element.get(0).value = f.call(a, {
                date: b
            });
            var g = n(e) ? e : function(a) {
                return o(e, a.date)
            };
            a._visibleInput.get(0).value = g.call(a, {
                date: b
            }), c.isMonthYearPicker ? a._selectedDate = new Date(b.getFullYear(), b.getMonth(), 1) : a._selectedDate = b
        },
        _attachEvents: function() {
            var b = this,
                f = b.options;
            f.showButton && (f.isTimePicker ? b._iconWrapper.on(d, b._toggleListBoxVisibility = c(b._toggleListBoxVisibilityHandler, b)) : f.isDateTimePicker ? (b._timeIconWrapper.on(d, b._toggleListBoxVisibility = c(b._toggleListBoxVisibilityHandler, b)), b._iconWrapper.on(d, b._toggleCalendarVisibility = c(b._toggleCalendarVisibilityHandler, b))) : b._iconWrapper.on(d, b._toggleCalendarVisibility = c(b._toggleCalendarVisibilityHandler, b))), b._visibleInput.on(N, b._visibleInputKeyPress = c(b._visibleInputKeyPressHandler, b)), a(j).on(r + ".shieldDatePicker" + b.getInstanceId(), c(b._hidePopupHandler, b)), b._visibleInput.on(t, b._visibleInputFocused = c(b._visibleInputFocusedHandler, b)), b._visibleInput.on(F, b._visibleInputBlured = c(b._visibleInputBluredHandler, b)), b._visibleInput.on(e, b._visibleInputChanged = c(b._visibleInputChangedHandler, b))
        },
        _visibleInputChangedHandler: function() {
            var a = this,
                b = a.options,
                d = b.format,
                c = b.min,
                f = b.max;
            if (a._enabled) {
                a._selectedDate = S(a._visibleInput.get(0).value, b.parseFormats), a._selectedDate && (a._selectedDate.getTime() > f || a._selectedDate.getTime() < c) && (b.isTimePicker ? a._selectedDate = new Date(c.getFullYear(), c.getMonth(), c.getDate(), a._selectedDate.getHours(), a._selectedDate.getMinutes(), a._selectedDate.getSeconds()) : a._selectedDate = null), null != a._selectedDate && (a._selectedDate && a.calendar && a.calendar.value(a._selectedDate), a._selectedDate && a.listBox && a._selectValueInListBox(a._selectedDate));
                var g = n(d) ? d : function(a) {
                    return o(d, a.date)
                };
                a.element.get(0).value = g.call(a, {
                    date: a._selectedDate
                }), a.trigger(e)
            }
        },
        _visibleInputFocusedHandler: function(c) {
            var a = this,
                b = a.options;
            return a._enabled ? (b.isMonthYearPicker ? a._wrapper.addClass("sui-monthyearpicker-focus") : b.isTimePicker ? a._wrapper.addClass("sui-timepicker-focus") : b.isDateTimePicker ? a._wrapper.addClass("sui-datetimepicker-focus") : a._wrapper.addClass("sui-datepicker-focus"), void(b.openOnFocus && (a._shouldShowPopup || !a.calendar) && (a._toggleCalendarVisibilityHandler(), a._shouldShowPopup = !1))) : void c.target.blur()
        },
        _visibleInputBluredHandler: function() {
            var c = this,
                b = c.options,
                a = c._wrapper;
            b.isMonthYearPicker ? a.removeClass("sui-monthyearpicker-focus") : b.isTimePicker ? a.removeClass("sui-timepicker-focus") : b.isDateTimePicker ? a.removeClass("sui-datetimepicker-focus") : a.removeClass("sui-datepicker-focus")
        },
        _visibleInputKeyPressHandler: function(a) {
            var b = this,
                d = b.options;
            if (b._enabled) {
                if (d.editable === !1) return a.preventDefault(), void a.stopPropagation();
                var c = a.keyCode || a.charCode;
                (13 == c || 9 == c || 27 == c) && (this._shouldShowPopup = !0, this.calendar.element.css(f) != g && (this.calendar.element.css(f, g), b.trigger(G)))
            }
        },
        _hidePopupHandler: function(c) {
            var d, b = this;
            if (b.listBox) {
                if (b._visibleInput.get(0) == c.target || b._iconWrapper && b._iconWrapper.get(0) == c.target || b._iconWrapper && b._iconWrapper.children(0).get(0) == c.target || b._timeIconWrapper && b._timeIconWrapper.get(0) == c.target || b._timeIconWrapper && b._timeIconWrapper.children(0).get(0) == c.target) return;
                b._popupIsOver ? (d = b.listBox.element.parent().height(), b.listBox.element.parent().animate({
                    height: 0,
                    top: b._visibleInput.offset().top
                }, 150, function() {
                    a(this).css(f, g), a(this).css("height", d)
                })) : b.listBox.element.parent().slideUp(150, function() {}), b._shouldShowPopup = !0
            }
            if (b.calendar) {
                if (b._visibleInput.get(0) == c.target || b._iconWrapper && b._iconWrapper.get(0) == c.target || b._iconWrapper && b._iconWrapper.children(0).get(0) == c.target) return;
                b._popupIsOver ? (d = b.calendar.element.height(), b.calendar.element.animate({
                    height: 0,
                    top: b._visibleInput.offset().top
                }, 150, function() {
                    a(this).css(f, g), a(this).css("height", d)
                })) : b.calendar.element.slideUp(150, function() {}), b._shouldShowPopup = !0
            }
        },
        _toggleListBoxVisibilityHandler: function() {
            var a = this,
                b = a.options,
                d = b.listBox;
            if (a._enabled) {
                if (!a.listBox) {
                    new V({
                        listbox: d,
                        parent: a,
                        min: b.min,
                        max: b.max,
                        interval: b.interval,
                        textTemplate: b.isDateTimePicker ? b.timeFormat : b.textTemplate
                    });
                    a.listBox.on(M, a._listBoxChange = c(a._listBoxChangeHandler, a)), a.listBox.element.on(r, a._popupMouseDown = c(a._popupMouseDownHandler, a)), a._selectedDate && a._selectValueInListBox(a._selectedDate)
                }
                b.isDateTimePicker && (a.calendar && a.calendar.element.css(f) != g && (a.calendar.element.slideUp(150, function() {}), a._shouldShowPopup = !0), a._toggleTimePopup = !0), a._shouldShowPopup ? a._showPopup() : a._hidePopup(), a._shouldShowPopup ? a._shouldShowPopup = !1 : a._shouldShowPopup = !0
            }
        },
        _listBoxChangeHandler: function(j) {
            var c = this;
            if (c.options.isDateTimePicker) {
                var d = c._selectedDate,
                    f = j.item;
                d ? c._selectedDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), f.getHours(), f.getMinutes(), f.getSeconds()) : (d = new Date, c._selectedDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), f.getHours(), f.getMinutes(), f.getSeconds()))
            } else c._selectedDate = j.item;
            var h = c.options,
                k = h.isDateTimePicker ? b.format(h.timeFormat, c._selectedDate) : b.format(h.textTemplate, c._selectedDate),
                i = c.listBox.element.find(".sui-listbox-item"),
                g = 0;
            for (g; g < i.length; g++)
                if (i[g].innerHTML == k) {
                    c._selectedElement = a(i[g]);
                    break
                }
            c._changeInputsValues(c._selectedDate), c._hidePopup(), c._shouldShowPopup = !0, c.trigger(e)
        },
        _toggleCalendarVisibilityHandler: function() {
            var d = this,
                h = d.options,
                i = h.calendar;
            d._enabled && (d.calendar || (b.ui.Calendar && (B.object(i) && i instanceof b.ui.Calendar ? d.calendar = i : (d._wrapper.parent().hasClass("sui-rtl") ? (d._calendarWrapper = a("<div style='display: none;' />").appendTo(j.body), d._calendarWrapper.wrap("<span class='sui-rtl'></span>")) : d._calendarWrapper = a("<div style='display: none;' />").appendTo(j.body), d.calendar = new b.ui.Calendar(d._calendarWrapper, s({}, i, {
                min: h.min,
                max: h.max
            }))), d._shouldShowPopup = !0), d.calendar.on(e, d._calendarChange = c(d._calendarChangeHandler, d)), d.calendar.element.on(r, d._popupMouseDown = c(d._popupMouseDownHandler, d)), d._selectedDate && d.calendar.value(d._selectedDate)), h.isDateTimePicker && (d.listBox && d.listBox.element.parent().css(f) != g && (d.listBox.element.parent().slideUp(150, function() {}), d._shouldShowPopup = !0), d._toggleTimePopup = !1), d._shouldShowPopup ? d._showPopup() : d._hidePopup(), d._shouldShowPopup ? d._shouldShowPopup = !1 : d._shouldShowPopup = !0)
        },
        _calendarChangeHandler: function() {
            var b, a = this,
                c = a.options;
            c.isMonthYearPicker ? (b = a.calendar.value(), a._selectedDate = new Date(b.getFullYear(), b.getMonth(), 1)) : c.isDateTimePicker ? (b = a.calendar.value(), a._selectedDate ? a._selectedDate = new Date(b.getFullYear(), b.getMonth(), b.getDate(), a._selectedDate.getHours(), a._selectedDate.getMinutes(), a._selectedDate.getSeconds()) : a._selectedDate = a.calendar.value()) : a._selectedDate = a.calendar.value(), a._changeInputsValues(a._selectedDate), a._hidePopup(), a._shouldShowPopup = !0, a.trigger(e)
        },
        _calculateLeftOffsetWhenRtl: function() {
            var b, a = this,
                d = a.options,
                c = (a._wrapper.offset(), 0);
            return d.isTimePicker || d.isDateTimePicker && a._toggleTimePopup ? (b = a._visibleInput.offset().left - (a.listBox.element.parent().width() - a._visibleInput.width()), b > 0 && (c = b)) : (b = a._visibleInput.offset().left - (a.calendar.element.width() - a._visibleInput.width()), b > 0 && (c = b)), c
        },
        _showPopup: function() {
            var d, b = this,
                g = b.options,
                e = b._wrapper.offset(),
                i = e.top - a(j).scrollTop(),
                h = b._wrapper.height(),
                k = a(D).height(),
                c = e.top + h,
                f = e.left;
            b._wrapper.parent().hasClass("sui-rtl") && (f = b._calculateLeftOffsetWhenRtl()), d = g.isTimePicker || g.isDateTimePicker && b._toggleTimePopup ? b.listBox.element.parent().height() : b.calendar.element.height(), d + i + h > k ? c = e.top - d - 1 : c++, (0 > c || a(j).scrollTop() > c) && (c = e.top + h + 1), b._visibleInput.offset().top > c ? b._popupIsOver = !0 : b._popupIsOver = !1, g.isTimePicker || g.isDateTimePicker && b._toggleTimePopup ? b._popupIsOver ? (b.listBox.element.parent().css({
                position: "absolute",
                zIndex: 10002,
                top: c + d,
                left: f,
                height: 0,
                display: ""
            }), b.listBox.element.parent().animate({
                height: d,
                top: c + 2
            }, 150)) : (b.listBox.element.parent().css({
                position: "absolute",
                top: c,
                left: f,
                zIndex: 10002
            }), b.listBox.element.parent().slideDown(150, function() {
                if (b._selectedElement) {
                    var a = Math.abs(b._selectedElement.get(0).offsetTop),
                        c = b._selectedElement.parent().scrollTop();
                    a > b._selectedElement.parent().get(0).scrollTopMax && (a = b._selectedElement.parent().get(0).scrollTopMax), c + b.listBox.element.height() > a && a > c || b.listBox.element.scrollTop(a)
                }
            })) : b._popupIsOver ? (b.calendar.element.css({
                position: "absolute",
                zIndex: 10002,
                top: c + d,
                left: f,
                height: 0,
                display: ""
            }), b.calendar.element.animate({
                height: d,
                top: c
            }, 150)) : (b.calendar.element.css({
                position: "absolute",
                zIndex: 10002,
                top: c,
                left: f
            }), b.calendar.element.slideDown(150, function() {})), b.trigger(P)
        },
        _hidePopup: function() {
            var c, b = this,
                d = b.options;
            d.isTimePicker || d.isDateTimePicker && b._toggleTimePopup ? b.listBox && b.listBox.element.parent().css(f) != g && (b._popupIsOver ? (c = b.listBox.element.parent().height(), b.listBox.element.parent().animate({
                height: 0,
                top: b._visibleInput.offset().top
            }, 150, function() {
                a(this).css(f, g), a(this).css("height", c)
            })) : b.listBox.element.parent().slideUp(150, function() {})) : b.calendar && b.calendar.element.css(f) != g && (b._popupIsOver ? (c = b.calendar.element.height(), b.calendar.element.animate({
                height: 0,
                top: b._visibleInput.offset().top
            }, 150, function() {
                a(this).css(f, g), a(this).css("height", c)
            })) : b.calendar.element.slideUp(150, function() {})), b.trigger(G)
        },
        _popupMouseDownHandler: function(a) {
            a.preventDefault(), a.stopPropagation()
        },
        _selectValueInListBox: function(g) {
            var d = this;
            if (d.listBox) {
                var c, e = d.options,
                    h = e.isDateTimePicker ? b.format(e.timeFormat, g) : b.format(e.textTemplate, g),
                    f = d.listBox.element.find(".sui-listbox-item");
                for (c = 0; c < f.length; c++)
                    if (f[c].innerHTML == h) {
                        d._selectedElement = a(f[c]);
                        break
                    }
                d.listBox.selected(c, !0)
            }
        },
        enabled: function() {
            var a = this,
                b = (a.options, [].slice.call(arguments));
            if (!(b.length > 0)) return a._enabled;
            var d = b[0];
            a._enabled = d, d ? (a._visibleInputFocused && (a._visibleInput.off(t, a._visibleInputFocused), a._visibleInputFocused = null), a._wrapper.removeClass("sui-disabled")) : (a._wrapper.addClass("sui-disabled"), a._visibleInput.on(t, a._visibleInputFocused = c(a._visibleInputFocusedHandler, a)))
        },
        visible: function() {
            var a = this,
                b = (a.options, [].slice.call(arguments));
            if (!(b.length > 0)) return a._wrapper.hasClass("sui-hidden") || "none" == a._wrapper.css("display") ? !1 : !0;
            var c = b[0];
            c ? a._wrapper.removeClass("sui-hidden") : a._wrapper.addClass("sui-hidden")
        },
        focus: function() {
            a(this._visibleInput).focus()
        },
        value: function() {
            var a = this,
                c = a.options,
                e = c.min,
                f = c.max,
                d = [].slice.call(arguments);
            if (!(d.length > 0)) return a._selectedDate;
            var b = d[0];
            return null == b || "" === b || L(b) ? (a._visibleInput.get(0).value = "", a._selectedDate = null, a.calendar && a.calendar.value(null), void((c.isTimePicker || c.isDateTimePicker) && a.listBox && a.listBox.clearSelection())) : void((c.isTimePicker || !(b.getTime() < e.getTime() || b.getTime() > f.getTime())) && (a._changeInputsValues(b), a.calendar && a.calendar.value(b), a._selectedDate = b, (c.isTimePicker || c.isDateTimePicker) && a._selectValueInListBox(b)))
        },
        close: function() {
            var a = this,
                b = [].slice.call(arguments);
            a.options.isDateTimePicker ? b.length > 0 && ("calendar" == b[0] && (a._shouldShowPopup = !1,
                a._toggleCalendarVisibilityHandler()), "timeview" == b[0] && (a._shouldShowPopup = !1, a._toggleListBoxVisibilityHandler())) : (a._shouldShowPopup = !1, a._toggleCalendarVisibilityHandler())
        },
        open: function() {
            var a = this,
                b = [].slice.call(arguments);
            a.options.isDateTimePicker ? b.length > 0 && ("calendar" == b[0] && (a._shouldShowPopup = !0, a._toggleCalendarVisibilityHandler()), "timeview" == b[0] && (a._shouldShowPopup = !0, a._toggleListBoxVisibilityHandler())) : (a._shouldShowPopup = !0, a._toggleCalendarVisibilityHandler())
        },
        destroy: function() {
            var b = this;
            b.options.isTimePicker ? (b._iconWrapper.off(d, b._toggleListBoxVisibility), b._toggleListBoxVisibility = null) : b.options.isDateTimePicker ? (b._iconWrapper.off(d, b._toggleListBoxVisibility), b._toggleListBoxVisibility = null, b._timeIconWrapper = null, b._iconWrapper.off(d, b._toggleCalendarVisibility), b._toggleCalendarVisibility = null) : (b._iconWrapper.off(d, b._toggleCalendarVisibility), b._toggleCalendarVisibility = null), b._iconWrapper = null, b._popupIsOver = null, a(j).off(r + ".shieldDatePicker" + b.getInstanceId()), a(b.element).css(f, "").insertAfter(b._wrapper), b._wrapper.remove(), b._wrapper = null, b._destroyCalendar(), b._destroyListBox(), b._shouldShowPopup = null, b._visibleInput.off(t, b._visibleInputFocused), b._visibleInput.off(e, b._visibleInputChanged), b._visibleInput.off(F, b._visibleInputBlured), b._visibleInputFocused = null, b._visibleInputChanged = null, b._visibleInputBlured = null, b._visibleInput = null, b._selectedDate = null, b._enabled = null, p.fn.destroy.call(b)
        },
        _destroyCalendar: function() {
            var a = this;
            a.calendar && (a.calendar.off(e, a._calendarChange), a._calendarChange = null, a.calendar.element.off(r, a._popupMouseDown), a._popupMouseDown = null, a.calendar.destroy(), a.calendar = null, a._calendarWrapper && a._calendarWrapper.remove())
        },
        _destroyListBox: function() {
            var a = this;
            a.listBox && (a._selectedElement = null, a.listBox.off(e, a._listBoxChange), a._listBoxChange = null, a.listBox.destroy(), a.listBox = null, a._listBoxWrapper && (a._listBoxWrapper.remove(), a._listBoxWrapper = null))
        }
    }), i.defaults = q, b.ui.plugin("DatePicker", i), E = s({}, q, {
        isMonthYearPicker: !0,
        calendar: {
            view: {
                depth: h,
                start: h
            }
        },
        format: "{0:MMMM yyyy}",
        textTemplate: "{0:MMMM yyyy}",
        parseFormats: ["MMMM yyyy"]
    }), A = i.extend({
        init: function(b, a) {
            a && (a.isMonthYearPicker = !0), i.prototype.init.call(this, b, a)
        }
    }), A.defaults = E, b.ui.plugin("MonthYearPicker", A), I = s({}, q, {
        isTimePicker: !0,
        listBox: null,
        format: "{0:h:mm tt}",
        textTemplate: "{0:h:mm tt}",
        parseFormats: ["h:mm tt"],
        interval: 30,
        min: new Date(1900, 0, 1, 0, 0, 0),
        max: new Date(1900, 0, 1, 0, 0, 0),
        messages: {
            timeIconTooltip: "",
            buttonText: "select"
        }
    }), w = i.extend({
        init: function(b, a) {
            a && (a.isTimePicker = !0), i.prototype.init.call(this, b, a)
        }
    }), w.defaults = I, b.ui.plugin("TimePicker", w), C = s({}, q, {
        isDateTimePicker: !0,
        listBox: null,
        format: "{0:MM/dd/yyyy h:mm tt}",
        textTemplate: "{0:MM/dd/yyyy h:mm tt}",
        parseFormats: ["MM/dd/yyyy h:mm tt"],
        interval: 30,
        min: new Date(1900, 0, 1, 0, 0, 0),
        max: new Date(2099, 11, 31, 0, 0, 0),
        messages: {
            calendarIconTooltip: "",
            timeIconTooltip: "",
            buttonText: "select"
        },
        timeFormat: "{0:h:mm tt}"
    }), y = i.extend({
        init: function(b, a) {
            a && (a.isDateTimePicker = !0), i.prototype.init.call(this, b, a)
        }
    }), y.defaults = C, b.ui.plugin("DateTimePicker", y)
}(jQuery, shield, this);
! function(a, b, v, ya) {
    "use strict";

    function ba(a) {
        var b, c = " ";
        if (a) {
            if (G(a)) return a;
            for (b in a) a.hasOwnProperty(b) && (c += b + '="' + a[b] + '"')
        }
        return c
    }

    function wa(e, f) {
        var b = a(e.target).closest(".sui-cell", f);
        if (!b.length) return null;
        var c = b[0].parentNode,
            d = b[0];
        return null == c || null == d ? null : {
            row: c,
            cell: d
        }
    }
    var P, H = b.ui.Widget,
        l = b.Class,
        sa = b.DataSource,
        h = b.format,
        p = b.support,
        N = b.get,
        j = b.is,
        u = j.func,
        G = j.string,
        E = j.object,
        S = j["boolean"],
        t = j.defined,
        oa = j.number,
        f = j.undefined,
        d = document,
        r = Math.abs,
        n = Math.min,
        k = Math.max,
        x = a.each,
        c = a.proxy,
        i = a.extend,
        z = (a.map, a.inArray),
        L = navigator.userAgent,
        na = v.opera,
        y = /msie/i.test(L) && !na,
        w = y && 7 === d.documentMode,
        ma = y && 8 === d.documentMode,
        la = (y && 10 === d.documentMode, 8 === d.documentMode, /AppleWebKit/.test(L)),
        K = (/Firefox/.test(L), "height"),
        ka = "sui-selectable",
        m = "sui-selected",
        I = "change",
        fa = "start",
        ha = "scroll",
        e = "command",
        Q = "selectionChanged",
        R = "dataBound",
        q = "mousedown",
        o = "mousemove",
        s = "mouseup",
        V = "resize",
        g = "click",
        X = "dblclick",
        Y = "sort",
        Z = "detailCreated",
        $ = "columnReorder",
        _ = "groupsReorder",
        aa = "group",
        A = "ungroup",
        D = "editorCreating",
        M = "filterWidgetCreating",
        ja = "getCustomFilterValue",
        qa = "clearFilter",
        ia = "expandButtonCreate",
        C = "cancel",
        F = "edit",
        ea = "insert",
        B = "save",
        U = "delete",
        O = "error",
        ga = "collapse",
        W = "expand";
    P = {
        columns: [],
        rowHover: !0,
        scrolling: !1,
        paging: !1,
        columnReorder: !1,
        showHeader: !0,
        grouping: {
            showGroupHeader: !1,
            allowDragToGroup: !1,
            message: "Drag a column header here to group by a column"
        }
    };
    var pa = l.extend({
            init: function(h, d) {
                var b, i, c, f, e, g = this;
                for (g._grid = d, e = 0; e < h.length; e++) b = h[e], i = b.position ? b.position : "top", c = a("<div class='sui-toolbar'></div>"), "top" === i ? (f = d.element.find(".sui-toolbar"), f.length > 0 ? a(f[0]).after(c) : d.element.prepend(c)) : (c.addClass("sui-toolbar-bottom"), c.appendTo(d.element)), b.template ? g._initializeTemplate(b, c) : b.buttons.length > 0 && g._buildButtons(c, b)
            },
            _buildButtons: function(c, d) {
                var a, e = this,
                    b = d.buttons;
                for (a = 0; a < b.length; a++) e._buildButton(b[a], c)
            },
            _buildButton: function(d, i) {
                var h, j, e = this,
                    g = d.commandName,
                    f = d.click;
                b.ui.Button && (h = a("<button type='button'>" + d.caption + "</button>").appendTo(i), "insert" === g ? f = e._insertButtonClicked : "save" === g ? f = e._saveButtonClicked : "cancel" === g && (f = e._cancelButtonClicked), j = new b.ui.Button(h, {
                    cls: d.cls,
                    events: {
                        click: c(f, e._grid)
                    }
                }))
            },
            _insertButtonClicked: function(l) {
                var b, f, c, g, d, a = this,
                    h = a.options,
                    i = h.editing.insertNewRowAt,
                    j = a.dataSource;
                if (a._editingInProcess = !0, g = a.trigger(e, {
                        commandName: ea,
                        cancel: !1
                    }), !g.cancel) {
                    c = "pagebottom" === i ? k(0, a.contentTable.find("tbody > tr").length - 1) : 0, b = j.insertView(c, {});
                    for (d in b.fields) b.fields.hasOwnProperty(d) && (b.data[d] = null);
                    a._editing._insertedItems.push(b), f = a.contentTable.find("tbody > tr").eq(c), a._editing._putRowInEditMode(f, 0), a.trigger(ea)
                }
            },
            _saveButtonClicked: function(f) {
                var b, c, a = this,
                    d = a.contentTable.find(".sui-editable-cell");
                return d.length > 0 && (b = d.get(0).parentNode.rowIndex, a._updateItem(b, null), a._errorDuringEdit) ? void(a._errorDuringEdit = !1) : (c = a.trigger(e, {
                    commandName: B,
                    cancel: !1
                }), void(c.cancel || (a.dataSource.save(), a.trigger(B))))
            },
            _cancelButtonClicked: function(c) {
                var a = this,
                    b = a.trigger(e, {
                        commandName: C,
                        cancel: !1
                    });
                b.cancel || (a.dataSource.cancel(), a.trigger(C))
            },
            _initializeTemplate: function(d, b) {
                var e = this,
                    c = d.template,
                    f = j["null"];
                if (u(c)) {
                    var a = c.call(e._grid, b);
                    t(a) && !f(a) && "" !== a && b.html(a)
                } else b.html(c)
            },
            destroy: function() {
                this._grid = null
            }
        }),
        za = l.extend({
            init: function(b, d) {
                var a = this;
                a._grid = d, a.options = b, a._editors = {}, a._insertedItems = [], b.enabled && a._initEditing(), a._grid.dataSource.on(O, a._dsErrorHandler = c(a._dsError, a))
            },
            _dsError: function(a) {
                var b = this,
                    c = b._editors[a.path];
                b._grid.trigger(O, {
                    type: a.type,
                    path: a.path,
                    value: a.value,
                    editor: c,
                    reason: a.reason
                }), b._errorDuringEdit = !0
            },
            _initEditing: function() {
                var b = this,
                    h = b.options,
                    e = h.event;
                f(e) || ("click" === e ? b._grid.element.on(g, ".sui-cell", b._editingTriggeredHandler = c(b._editingTriggered, b)) : "doubleclick" === e && b._grid.element.on(X, ".sui-cell", b._editingTriggeredHandler = c(b._editingTriggered, b)), a(d).on(g, b._documentClickedHandler = c(b._documentClicked, b)))
            },
            _editingTriggered: function(p) {
                var k, j, c = this,
                    h = p.target,
                    g = a(p.target).parent(),
                    d = g.get(0).rowIndex,
                    n = c.options,
                    o = n.mode,
                    i = n.type,
                    l = c._grid.dataSource,
                    q = n.batch,
                    r = c._grid.trigger(e, {
                        commandName: F,
                        cancel: !1,
                        row: g,
                        cell: h
                    });
                if (!r.cancel) {
                    if (q) {
                        if (k = c._grid.contentTable.find(".sui-editable-cell"), k.length > 0) {
                            if (d = k.get(0).parentNode.rowIndex, "TR" !== g.get(0).nodeName.toUpperCase() || g.get(0).rowIndex == d && "row" == i) return;
                            var m = c._grid._updateItem(d, h);
                            if (c._errorDuringEdit) return c._errorDuringEdit = !1, void(m = null);
                            j = g.get(0).rowIndex, c._grid._putRowInViewMode(d, null), !c._grid._populateInsertedItem && m && m.length > 0 && c._grid._renderUpdateMarkers(m, d), c._grid._populateInsertedItem = !1, j === d && (h = c._grid.contentTable.find("tbody > tr").eq(d).get(0).cells[h.cellIndex]), d = j
                        }
                        f(i) || "cell" === i ? c._putCellInEditMode(h, d) : "row" === i ? c._putRowInEditMode(g, h.cellIndex) : b.error("Invalid editing.type declaration. The editing.type must be 'row' or 'cell'.", this.options.dieOnError)
                    } else if (l.tracker && l.tracker.changes && l.tracker.changes.added && l.tracker.changes.added.length > 0) "TR" !== g.get(0).nodeName.toUpperCase() || g.get(0).rowIndex == d && "row" == i || l.cancel();
                    else if (f(o) || "inline" === o) {
                        if (k = c._grid.contentTable.find(".sui-editable-cell"), k.length > 0) {
                            if (d = k.get(0).parentNode.rowIndex, "TR" !== g.get(0).nodeName.toUpperCase() || g.get(0).rowIndex == d && "row" == i) return;
                            if (c._grid._updateItem(d, h), c._errorDuringEdit) return void(c._errorDuringEdit = !1);
                            j = g.get(0).rowIndex, c._grid._closeAllEditedRows(), j === d && (h = c._grid.contentTable.find("tbody > tr").eq(d).get(0).cells[h.cellIndex]), d = j
                        }
                        f(i) || "cell" === i ? c._putCellInEditMode(h, d) : "row" === i ? c._putRowInEditMode(g, h.cellIndex) : b.error("Invalid editing.type declaration. The editing.type must be 'row' or 'cell'.", this.options.dieOnError)
                    }
                    c._grid.trigger(F, {
                        row: g,
                        cell: h
                    })
                }
            },
            _documentClicked: function(g) {
                var e, c, b = this,
                    h = b.options.batch,
                    d = a(g.target);
                if (b._grid._editingInProcess || b._grid._preventClosingEditors) return void(b._grid._editingInProcess = !1);
                if (!(d.hasClass("sui-cell") || d.parents().hasClass("sui-cell") || d.parents().hasClass("sui-calendar") || d.parents().hasClass("sui-listbox")) && (e = this._grid.contentTable.find(".sui-editable-cell"), e.length > 0)) {
                    c = e.get(0).parentNode.rowIndex;
                    var f = b._grid._updateItem(c, null);
                    if (b._errorDuringEdit) return void(b._errorDuringEdit = !1);
                    b._grid._putRowInViewMode(c, null), h && !b._grid._populateInsertedItem && f && f.length > 0 && b._grid._renderUpdateMarkers(f, c), b._grid._populateInsertedItem = !1
                }
            },
            _getColumnIndex: function(b) {
                return b.cellIndex - a(b.parentNode).find(".sui-indent-cell, .sui-expand-cell, .sui-expand-cell-disabled, .sui-collapse-cell").length
            },
            _putCellInEditMode: function(b, j) {
                var i, h, e, a = this,
                    l = a._getColumnIndex(b),
                    k = a._grid,
                    f = k.dataSource,
                    d = k.columns[l];
                if (d && d.field) {
                    if (f.group && f.group.length > 0)
                        for (h = a._grid.contentTable.find(".sui-row, .sui-alt-row"), e = 0; e < h.length; e++)
                            if (h[e] == b.parentNode) {
                                j = e;
                                break
                            }
                    i = f.editView(j).data;
                    var m = f.schema.options.fields[d.field].type,
                        g = N(i, d.field),
                        c = !1;
                    if (arguments.length > 2 ? arguments[2] == l && (c = !0) : c = !0, d.editor) a._instantiateCustomEditor(d, b, i, j, c);
                    else switch (m) {
                        case Number:
                            a._instantiateNumeric(b, g, c);
                            break;
                        case Date:
                            a._instantiateDatePicker(b, g, c);
                            break;
                        case String:
                            a._instantiateTextBox(b, g, c);
                            break;
                        case Boolean:
                            a._instantiateCheckBox(b, g, c)
                    }
                }
            },
            _prepareCell: function(b) {
                a(b).empty().addClass("sui-editable-cell")
            },
            _instantiateCustomEditor: function(e, c, f, g, h) {
                var d, b = this,
                    i = b._getColumnIndex(c),
                    j = b._grid.columns[i].field;
                b._prepareCell(c), d = e.editor.call(b._grid, c, f, g, h), a(c).html(d), b._editors[j] = "custom"
            },
            _instantiateNumeric: function(d, h, j) {
                var e, c = this,
                    f = a("<input />"),
                    k = c._getColumnIndex(d),
                    g = c._grid.columns[k].field;
                c._prepareCell(d), f.appendTo(d);
                var l = c._grid.trigger(D, {
                        field: g,
                        options: {}
                    }),
                    m = i({}, l.options, {
                        value: h
                    });
                b.ui.NumericTextBox && (e = new b.ui.NumericTextBox(f, m), j && e.focus(), c._editors[g] = e)
            },
            _instantiateDatePicker: function(d, h, j) {
                var e, c = this,
                    f = a("<input />"),
                    k = c._getColumnIndex(d),
                    g = c._grid.columns[k].field;
                c._prepareCell(d), f.appendTo(d);
                var l = c._grid.trigger(D, {
                        field: g,
                        options: {}
                    }),
                    m = i({}, l.options, {
                        value: h
                    });
                b.ui.DatePicker && (e = new b.ui.DatePicker(f, m), j && e.focus(), c._editors[g] = e)
            },
            _instantiateTextBox: function(d, h, j) {
                var e, c = this,
                    f = a("<input type='text' />"),
                    k = c._getColumnIndex(d),
                    g = c._grid.columns[k].field;
                c._prepareCell(d), f.appendTo(d);
                var l = c._grid.trigger(D, {
                        field: g,
                        options: {}
                    }),
                    m = i({}, l.options, {
                        value: h
                    });
                b.ui.TextBox && (e = new b.ui.TextBox(f, m), j && e.focus(), c._editors[g] = e)
            },
            _instantiateCheckBox: function(e, f, j) {
                var d, c = this,
                    g = a("<input type='checkbox' />"),
                    k = c._getColumnIndex(e),
                    h = c._grid.columns[k].field;
                c._prepareCell(e), g.appendTo(e);
                var l = c._grid.trigger(D, {
                        field: h,
                        options: {}
                    }),
                    m = i({}, l.options, {
                        value: f
                    });
                b.ui.CheckBox && (d = new b.ui.CheckBox(g, m), j && d.focus(), d.checked(f), c._editors[h] = d)
            },
            _putRowInEditMode: function(b, g) {
                var d, c, e = this,
                    f = b.find(".sui-cell");
                for (c = 0; c < f.length; c++) e._putCellInEditMode(f[c], b.get(0).rowIndex, g - b.find(".sui-indent-cell, .sui-expand-cell, .sui-expand-cell-disabled, .sui-collapse-cell").length);
                d = b.find(".sui-edit"), d.length > 0 && e._grid._changeEditColumnButtons(b.get(0).rowIndex, a(b.find(".sui-button-cell")[0]))
            },
            _destroyRow: function(f) {
                var a, d, b = this,
                    e = b._grid,
                    g = e.contentTable.find("tbody > tr").eq(f),
                    c = e.columns;
                for (a = 0; a < c.length; a++) d = b._editors[c[a].field], d && (u(d.destroy) && b._editors[c[a].field].destroy(), delete b._editors[c[a].field]);
                g.remove()
            },
            destroy: function() {
                var c, e, b = this;
                if (b._grid.dataSource.off(O, b._dsErrorHandler), b._grid.element.off(g, ".sui-cell", b._editingTriggeredHandler), b._grid.element.off(X, ".sui-cell", b._editingTriggeredHandler), a(d).off(g, b._documentClickedHandler), b._editors)
                    for (c = 0; c < b._editors.length; c++) e = b._editors[c].editor.element(), b._editors[c].editor.destroy(), e.remove();
                b._editingTriggeredHandler = b._dsErrorHandler = b._documentClickedHandler = b._grid = b._errorDuringEdit = b.options = null
            }
        }),
        ra = l.extend({
            init: function(a) {
                var b = this;
                G(a) ? b.field = a : E(a) && (b.field = a.field, b.title = a.title, b.format = a.format, b.width = a.width, b.minWidth = a.minWidth, b.maxWidth = a.maxWidth, b.resizable = null != a.resizable ? !!a.resizable : !0, b.attributes = a.attributes, b.headerAttributes = a.headerAttributes, b.headerTemplate = a.headerTemplate, b.columnTemplate = a.columnTemplate, b.footerTemplate = a.footerTemplate, b.groupFooterTemplate = a.groupFooterTemplate, b.buttons = a.buttons, b.editor = a.editor, b.customFilter = a.customFilter, b.sortable = a.sortable, b.filterable = a.filterable)
            },
            destroy: function() {
                var a = this;
                a.buttons && (a.buttons.length = 0), a.field = a.title = a.editor = a.format = a.width = a.minWidth = a.maxWidth = a.resizable = a.attributes = a.headerAttributes = a.headerTemplate = a.buttons = a.customFilter = a.footerTemplate = a.groupFooterTemplate = a.sortable = a.filterable = a.columnTemplate = null
            }
        }),
        ca = l.extend({
            options: {
                ns: ".shieldGridColumnResizing",
                width: 12,
                offset: 6,
                min: 12
            },
            init: function(b) {
                var a = this;
                a.grid = b, a.options = i(!0, {}, ca.fn.options), b.headerTable.on(o + a.options.ns, ".sui-headercell", c(a._showHandle, a))
            },
            _showHandle: function(h) {
                if (!this.resizing) {
                    var d = this,
                        g = d.options,
                        e = (d.grid, d.handle),
                        f = h.pageX,
                        b = d.params = d._params(a(h.currentTarget)),
                        i = f >= b.offset.left && f <= b.offset.left + g.offset && b.header.index() > 0;
                    b.isRtl && (i = f >= b.offset.left + b.width - g.offset && f <= b.offset.left + b.width && b.header.index() > 0), i && (b = d.params = d._params(b.header.prev())), b.column.resizable && (f >= b.threshold && f <= b.edge + g.offset ? (e || (e = d.handle = a('<div class="sui-resizable-handle"/>').on(q + g.ns, c(d._down, d)).appendTo(b.header.parents(".sui-headercontent"))), e.css({
                        top: b.position.top,
                        left: e.parent()[0].scrollLeft + b.handleLeft,
                        width: g.width,
                        height: b.height
                    }).show()) : e && e.hide())
                }
            },
            _params: function(b) {
                var f = this,
                    a = f.options,
                    j = b.offset(),
                    g = b.position(),
                    d = p.isRtl(f.grid.element),
                    e = b.outerWidth(),
                    h = j.left + (d ? a.width : e),
                    i = b.index(),
                    c = f.grid.columns[i],
                    k = c.minWidth >= 0 ? +c.minWidth : a.min,
                    l = c.maxWidth >= k ? +c.maxWidth : null;
                return {
                    header: b,
                    index: i,
                    column: c,
                    min: k,
                    max: l,
                    offset: j,
                    isRtl: d,
                    width: e,
                    current: e,
                    height: b.outerHeight(),
                    edge: h,
                    threshold: h - a.width + (d ? -1 : 1) * a.offset,
                    position: g,
                    handleLeft: g.left + (d ? a.width : e) - a.width + (d ? -1 : 1) * a.offset
                }
            },
            _down: function(h) {
                var g, e = this,
                    i = e.grid,
                    f = e.params;
                if (!(h.button > 1) && f) return g = "> colgroup col:nth-child(" + (f.index + 1) + ")", f.origin = h.pageX, f.cols = a().add(i.headerTable.find(g)).add(i.contentTable.find(g)), e.resizing = !0, e.handle.hide(), a(d).on(o + e.options.ns, c(e._move, e)).on(s + e.options.ns, c(e._up, e)), b.selection(!1), !1
            },
            _move: function(d) {
                var c = this,
                    a = c.params,
                    e = (a.isRtl ? -1 : 1) * (d.pageX - a.origin),
                    b = k(a.width + e, a.min);
                return a.max && (b = n(b, a.max)), c.resizing ? void(b !== a.current && a.cols.width(a.current = b)) : void c._up()
            },
            _up: function() {
                var c = this,
                    e = c.grid,
                    f = c.params.index,
                    g = c.params.current,
                    h = e.columns[f] || {},
                    i = (e.options.columns || [])[f] || {};
                c.resizing = !1, c.params = null, h.width = i.width = g + "px", a(d).off(c.options.ns), b.selection(!0)
            },
            destroy: function() {
                var a = this;
                a._up(), a.grid.headerTable.off(a.options.ns), a.grid = null, a.handle && (a.handle.off(a.options.ns).remove(), a.handle = null)
            }
        }),
        ta = l.extend({
            init: function(b) {
                var a = this;
                a.grid = b, a._filters = {}, a._createFilterRow()
            },
            _createFilterRow: function() {
                var p, l, h, k, i, b, f = this,
                    j = f.grid,
                    r = j.headerTable,
                    o = r.find(">thead"),
                    n = a("<tr class='sui-filter-row' />"),
                    q = o.find(".sui-indent-cell").length,
                    m = j.dataSource.schema,
                    e = j.columns;
                for (i = 0; q > i; i++) a('<th class="sui-indent-cell">').appendTo(n);
                for (m && m.options.fields && (k = m.options.fields), b = 0; b < e.length; b++) p = k ? k[e[b].field].type : null, l = e[b].field ? e[b].field.replace(/[\"\']/g, "@") : "", h = a("<th class='sui-filter-cell'  data-field='" + l + "' />"), h.appendTo(n), e[b].filterable !== !1 && l.length > 0 && (f._initializeEditor(h, p, e[b].field, e[b]), f._appendFilterButton(h));
                n.appendTo(o), a(d).on(g, f._documentClickedHandler = c(f._documentClicked, f))
            },
            _documentClicked: function(d) {
                var c, e, b = this;
                !b.listBox || a(d.target).hasClass("sui-filter-button") || a(d.target).hasClass("sui-filter-button-content") || (b._filterByField = null, c = b.listBox.element.parent().height(), e = b.listBox.element.parent().offset().top, b._slideUp ? b.listBox.element.parent().animate({
                    height: 0,
                    top: e + c
                }, 150, function() {
                    b.listBox.element.parent().css({
                        display: "none",
                        height: c
                    })
                }) : b.listBox.element.parent().animate({
                    height: 0
                }, 150, function() {
                    b.listBox.element.parent().css({
                        display: "none",
                        height: c
                    })
                }))
            },
            _appendFilterButton: function(d) {
                if (b.ui.Button) {
                    var e = a('<button type="button"><span class="sui-sprite sui-filter-button-content"></span></button>').appendTo(d);
                    new b.ui.Button(e, {
                        cls: "sui-filter-button",
                        events: {
                            click: c(this._filterButtonClicked, this)
                        }
                    })
                }
            },
            _filterButtonClicked: function(f) {
                var k, g, m, e = this,
                    l = e.grid,
                    j = l.dataSource.schema,
                    h = l.options.filtering,
                    n = h.stringFunc ? h.stringFunc : [{
                        func: "eq",
                        name: "Equal to"
                    }, {
                        func: "neq",
                        name: "Not equal to"
                    }, {
                        func: "con",
                        name: "Contains"
                    }, {
                        func: "notcon",
                        name: "Not contains"
                    }, {
                        func: "starts",
                        name: "Starts with"
                    }, {
                        func: "ends",
                        name: "Ends with"
                    }, {
                        func: "gt",
                        name: "Greater than"
                    }, {
                        func: "lt",
                        name: "Less than"
                    }, {
                        func: "gte",
                        name: "Greater than or equal"
                    }, {
                        func: "lte",
                        name: "Less than or equal"
                    }, {
                        func: "isnull",
                        name: "Is null"
                    }, {
                        func: "notnull",
                        name: "Is not null"
                    }],
                    p = h.nonStingFunc ? h.nonStingFunc : [{
                        func: "eq",
                        name: "Equal to"
                    }, {
                        func: "neq",
                        name: "Not equal to"
                    }, {
                        func: "gt",
                        name: "Greater than"
                    }, {
                        func: "lt",
                        name: "Less than"
                    }, {
                        func: "gte",
                        name: "Greater than or equal"
                    }, {
                        func: "lte",
                        name: "Less than or equal"
                    }, {
                        func: "isnull",
                        name: "Is null"
                    }, {
                        func: "notnull",
                        name: "Is not null"
                    }],
                    o = f.target.element.parent().attr("data-field").replace(/[@]/g, "'");
                if (e._filterByField = o, j && j.options.fields) {
                    var q = j.options.fields;
                    k = q[o].type == String ? n : p
                } else k = n;
                b.ui.ListBox && (e.listBox || (e._menuWrapper = a("<div style='display: none;' />").appendTo(d.body), e.listBox = new b.ui.ListBox(e._menuWrapper, i({}, {}, {
                    dataSource: {
                        data: k
                    },
                    textTemplate: "{name}",
                    valueTemplate: "{func}",
                    multiple: !1,
                    width: 150,
                    maxHeight: 300,
                    events: {
                        select: c(e._selectFilterFunction, e)
                    }
                })), e.grid.element.parent().hasClass("sui-rtl") ? e.listBox.element.parent().addClass("sui-rtl") : e.listBox.element.parent().css("display", "none")), g = e.listBox.element.parent().height(), e._positionListBox(f), e._slideUp ? (m = f.target.element.offset().top - g, e.listBox.element.parent().css({
                    top: f.target.element.offset().top
                }), e.listBox.element.parent().animate({
                    height: g,
                    top: m - e.listBox.element.parent().innerHeight()
                }, 150)) : e.listBox.element.parent().animate({
                    height: g
                }, 150)), e._selectFilterMenuValue()
            },
            _selectFilterMenuValue: function() {
                var a, e, b = this,
                    f = b._filterByField,
                    c = b.grid.dataSource.filter;
                if (c && c.and && c.and.length > 0) {
                    a = c.and;
                    for (var d = 0; d < a.length; d++) a[d].path === f && (e = a[d].filter)
                }
                e ? b.listBox.values(e) : b.listBox.clearSelection()
            },
            _selectFilterFunction: function(i) {
                var c, g, a = this,
                    h = !0,
                    b = "@@custom" == a._filters[a._filterByField] ? "@@custom" : a._filters[a._filterByField].value(),
                    d = i.item.func,
                    e = {
                        path: a._filterByField,
                        filter: d,
                        value: b
                    };
                if ("@@custom" == b && (g = a.grid.trigger(ja, {
                        field: a._filterByField,
                        value: null
                    }), b = g.value, e = {
                        path: a._filterByField,
                        filter: d,
                        value: b
                    }), "" !== b && null !== b || "notnull" == d || "isnull" == d) {
                    if (a.grid.dataSource.filter && a.grid.dataSource.filter.and) {
                        c = a.grid.dataSource.filter.and;
                        for (var f = 0; f < c.length; f++) c[f].path === a._filterByField && (c[f] = e, h = !1);
                        h && c.push(e)
                    } else a.grid.dataSource.filter = {
                        and: [e]
                    };
                    a.grid.dataSource.read(), a._addRemoveFilterButton()
                }
            },
            _addRemoveFilterButton: function() {
                var d, e, g, h = this;
                if (b.ui.Button) {
                    d = h.grid.headerTable.find(".sui-filter-row > th");
                    for (var f = 0; f < d.length; f++)
                        if (e = a(d[f]), e.attr("data-field") && e.attr("data-field").replace(/[@]/g, "'") == h._filterByField) {
                            g = d[f];
                            break
                        }
                    if (0 === e.find(".sui-clear-filter-button").length) {
                        var i = a('<button type="button"><span class="sui-sprite sui-clear-filter-button-content"></span></button>').appendTo(g);
                        new b.ui.Button(i, {
                            cls: "sui-clear-filter-button",
                            events: {
                                click: c(this._clearFilterButtonClicked, this)
                            }
                        })
                    }
                }
            },
            _clearFilterButtonClicked: function(d) {
                for (var f, a = this, b = d.target.element.parent().attr("data-field").replace(/[@]/g, "'"), e = a.grid.dataSource.filter.and, c = 0; c < e.length; c++) e[c].path == b && e.splice(c, 1);
                f = d.target.element, d.target.destroy(), f.remove(), "@@custom" != a._filters[b] ? a._filters[b].value(null) : a.grid.trigger(qa, {
                    field: b,
                    value: null
                }), a.grid.dataSource.read()
            },
            _positionListBox: function(i) {
                var a = this,
                    d = i.target.element,
                    e = d.offset(),
                    b = e.top,
                    c = e.left,
                    g = a.listBox.element.parent().innerWidth(),
                    h = a.listBox.element.parent().innerHeight(),
                    f = (d.innerWidth(), d.innerHeight());
                0 > c && (c = 1), c + g > v.innerWidth && (c = v.innerWidth - g - 20), a._slideUp = !1, b + h > v.innerHeight && (b -= h, f = 0, a._slideUp = !0), 0 > b && (b = e.top, f = d.innerHeight(), a._slideUp = !1), a.listBox.element.parent().css({
                    position: "absolute",
                    zIndex: 10002,
                    top: b + f,
                    left: c,
                    height: 0,
                    display: ""
                })
            },
            _initializeEditor: function(b, e, c, d) {
                var a = this;
                if (d.customFilter) a._filters[c] = "@@custom", d.customFilter.call(a, b);
                else switch (e) {
                    case Number:
                        a._instantiateNumeric(b, c);
                        break;
                    case Date:
                        a._instantiateDatePicker(b, c);
                        break;
                    case String:
                        a._instantiateTextBox(b, c);
                        break;
                    default:
                        a._instantiateTextBox(b, c)
                }
            },
            _instantiateNumeric: function(g, c) {
                var d, e = this,
                    f = a("<input />");
                f.appendTo(g);
                var h = e.grid.trigger(M, {
                        field: c,
                        options: {}
                    }),
                    j = i({}, h.options);
                b.ui.NumericTextBox && (d = new b.ui.NumericTextBox(f, j), e._filters[c] = d)
            },
            _instantiateDatePicker: function(g, c) {
                var d, e = this,
                    f = a("<input />");
                f.appendTo(g);
                var h = e.grid.trigger(M, {
                        field: c,
                        options: {}
                    }),
                    j = i({}, h.options);
                b.ui.DatePicker && (d = new b.ui.DatePicker(f, j), e._filters[c] = d)
            },
            _instantiateTextBox: function(g, c) {
                var d, e = this,
                    f = a("<input type='text' />");
                f.appendTo(g);
                var h = e.grid.trigger(M, {
                        field: c,
                        options: {}
                    }),
                    j = i({}, h.options);
                b.ui.TextBox && (d = new b.ui.TextBox(f, j), e._filters[c] = d)
            },
            destroy: function() {
                var c, b = this;
                b.grid = null;
                for (c in b._filters) b._filters.hasOwnProperty(c) && (b._filters[c].destroy(), b._filters[c] = null);
                b.listBox && (b.listBox.destroy(), b.listBox = null), a(d).off(g, b._documentClickedHandler), b._filterByField = b._documentClickedHandler = b._filters = b._slideUp = b._menuWrapper = null
            }
        }),
        ua = l.extend({
            init: function(b, c) {
                var a = this;
                a.grid = c, a.sortExpressions = [], S(b) ? (a.allowUnsort = !0, a.multiple = !1, a.firstAscending = !0, a.ascText = "&#9650;", a.descText = "&#9660;") : E(b) && (a.allowUnsort = f(b.allowUnsort) ? !0 : b.allowUnsort, a.multiple = b.multiple, a.firstAscending = f(b.firstAscending) ? !0 : b.firstAscending, a.ascText = f(b.ascText) ? "&#9650;" : b.ascText, a.descText = f(b.descText) ? "&#9660;" : b.descText), a._initialize()
            },
            destroy: function() {
                var b = this;
                b.allowUnsort = b.multiple = b.sortExpressions = null, b.length = 0, b._click && (b.grid.headerTable.find(".sui-link").each(function() {
                    a(this).off(g, b._click)
                }), b._click = null), b.grid = null
            },
            _initialize: function() {
                var b = this,
                    i = b.grid,
                    f = i.dataSource.sort,
                    e = i.columns,
                    j = i.headerTable.find(".sui-headercell");
                if (b._click = c(b._clickHandler, b), j.each(function(d) {
                        var c = a(this),
                            f = c.html();
                        e[d].sortable !== !1 && (c.empty(), a('<a href="#" class="sui-link"></a>').appendTo(c).html(f).on(g, b._click))
                    }), f)
                    for (var h = 0; h < f.length; h++)
                        for (var o = f[h], d = 0; d < e.length; d++)
                            if (e[d].sortable !== !1 && o.path == e[d].field) {
                                var l = a(j[d]).find(".sui-link"),
                                    m = "ascending",
                                    n = "sui-asc",
                                    k = b.ascText;
                                o.desc && (m = "descending", k = b.descText, n = "sui-desc"), l.addClass(n), a('<span class="sui-' + m + '">' + k + "</span>").appendTo(l)
                            }
            },
            _clickHandler: function(f) {
                var b = this,
                    d = a(f.target).closest(".sui-link"),
                    e = b.grid,
                    g = z(d.parent().get(0), e.headerTable.find(".sui-headercell")),
                    c = e.columns[g];
                return d.hasClass("sui-desc") ? b.allowUnsort && b.firstAscending ? b._sortInternal(c, !0, !0) : b._sortInternal(c, !1, !1) : d.hasClass("sui-asc") ? b.allowUnsort && !b.firstAscending ? b._sortInternal(c, !1, !0) : b._sortInternal(c, !0, !1) : b.firstAscending ? b._sortInternal(c, !1, !1) : b._sortInternal(c, !0, !1), !1
            },
            _sortInternal: function(d, c, f) {
                var h = this,
                    g = h.grid,
                    i = g.dataSource,
                    b = i.sort,
                    k = g.trigger(e, {
                        commandName: Y,
                        cancel: !1,
                        column: d,
                        desc: c,
                        unsort: f
                    });
                if (!k.cancel) {
                    if (b) {
                        if (!h.multiple && b) b.length = 0;
                        else {
                            var j = a.grep(b, function(a) {
                                return a.path === d.field && a.desc === (f ? c : !c)
                            });
                            if (j.length > 0) {
                                var l = z(j[0], b);
                                b.splice(l, 1)
                            }
                        }
                        f || b.push({
                            path: d.field,
                            desc: c
                        })
                    } else f || (b = i.sort = [{
                        path: d.field,
                        desc: c
                    }]);
                    g._refreshOnSort(), g.trigger(Y, {
                        column: d,
                        desc: c,
                        unsort: f
                    })
                }
            },
            _sort: function(c, f, h) {
                var d, e, l = this,
                    g = l.grid,
                    k = g.dataSource,
                    b = k.sort;
                if (b && (d = a.grep(b, function(a) {
                        return a.path === c && a.desc === f
                    })), !d || d.length <= 0)
                    if (!l.multiple && b && (b.length = 0), b) {
                        var i = !1,
                            j = a.grep(b, function(a) {
                                return a.path === c && a.desc != f
                            });
                        j && j.length > 0 && (e = z(j[0], b), b.splice(e, 1), i = !0), h || (b.push({
                            path: c,
                            desc: f
                        }), i = !0), i && g._refreshOnSort()
                    } else h || (k.sort = [{
                        path: c,
                        desc: f
                    }], g._refreshOnSort());
                else h && (e = z(d[0], b), b.splice(e, 1), g._refreshOnSort())
            }
        }),
        va = l.extend({
            init: function(h, g, e, i) {
                var b = this;
                S(e) ? (b.type = "row", b.multiple = !1, b.toggle = !1, b.spreadsheet = !0) : E(e) && (b.type = e.type ? e.type : "row", b.multiple = e.multiple, b.toggle = e.toggle ? e.toggle : !1, b.spreadsheet = f(e.spreadsheet) ? !0 : e.spreadsheet), b.parentGrid = i, g.addClass(ka), h.addClass("sui-non-selectable"), b.table = g, b.lastSelected = null, g.on(q, b._mouseDown = c(b._mouseDownHandler, b)), g.on(o, b._mouseMove = c(b._mouseMoveHandler, b)), a(d).on(s, b._mouseUp = c(b._mouseUpHandler, b)), y && g.on("selectstart", b._selectStart = function() {
                    return !1
                }), b.multiple && (b.area = a(d.createElement("span")), b.area.addClass("sui-area sui-area-color"))
            },
            destroy: function() {
                var b = this;
                b.parentGrid = null, b.type = null, b.multiple = null, b.lastSelected = null, b.toggle = null, b.spreadsheet = null, b.table.off(q, b._mouseDown), b._mouseDown = null, b.table.off(o, b._mouseMove), b._mouseMove = null, b.table.off(s, b._mouseUp), a(d).off(s, b._mouseUp), b._mouseUp = null, b.x = null, b.y = null, b.table.off("selectstart", b._selectStart), b._selectStart = null, b.elements = null, b.table = null, b.area && (b.area.remove(), b.area = null)
            },
            select: function(b) {
                var c = this;
                return b ? void b.each(function() {
                    c._selectElement(a(this))
                }) : c.table.find("." + m)
            },
            clear: function() {
                var a = this;
                "row" == a.type ? a._clearSelectedRows() : a._clearSelectedCells()
            },
            _getParentTable: function(a) {
                return a ? "TABLE" == a[0].nodeName.toUpperCase() ? a[0] : a.parent() ? this._getParentTable(a.parent()) : void 0 : void 0
            },
            _mouseDownHandler: function(f) {
                var e = this,
                    g = f.pageX,
                    h = f.pageY,
                    c = a(f.target);
                e.x = g, e.y = h, ("TD" != c[0].nodeName.toUpperCase() || e._getParentTable(c) == e.table[0]) && (!(c.hasClass("sui-cell") || c.hasClass("sui-row") || c.hasClass("sui-alt-row")) || c.hasClass("sui-detail-cell") || c.hasClass("sui-detail-row") || c.hasClass("sui-collapse-cell") || c.hasClass("sui-expand-cell") || c.hasClass("sui-expand-cell-disabled") || c.hasClass("sui-indent-cell") || (e.multiple && e.area.appendTo(d.body).css({
                    left: g + 1,
                    top: h + 1,
                    width: 0,
                    height: 0
                }), a(d).on(o, e._mouseMove), b.selection(!1), e.elements = wa(f, e.table)))
            },
            _mouseMoveHandler: function(b) {
                var a = this,
                    c = b.pageX,
                    d = b.pageY,
                    e = a.x,
                    f = a.y,
                    g = {
                        left: e > c ? c : e,
                        top: f > d ? d : f,
                        width: r(c - a.x),
                        height: r(d - a.y)
                    };
                a.multiple && a.area.css(g), b.preventDefault()
            },
            _mouseUpHandler: function(j) {
                var g, c = this,
                    l = j.ctrlKey,
                    h = c.area,
                    k = c.elements;
                if (a(d).off(o, c._mouseMove), b.selection(!0), k) {
                    c.elementsToBeSelected = [], "row" == c.type ? c._performRowSelection(h, l, k, j) : c._performCellSelection(h, l, k, j);
                    var i = [];
                    for (g = 0; g < c.elementsToBeSelected.length; g++) {
                        var f = c.elementsToBeSelected[g];
                        !(f.hasClass("sui-cell") || f.hasClass("sui-row") || f.hasClass("sui-alt-row")) || f.hasClass("sui-detail-cell") || f.hasClass("sui-detail-row") || f.hasClass("sui-collapse-cell") || f.hasClass("sui-expand-cell") || f.hasClass("sui-expand-cell-disabled") || f.hasClass("sui-indent-cell") || i.push(f)
                    }
                    var m = c.parentGrid.trigger(e, {
                        commandName: Q,
                        cancel: !1,
                        toBeSelected: i
                    });
                    if (!m.cancel) {
                        for (g = 0; g < i.length; g++) c._selectElement(i[g]);
                        c.parentGrid.trigger(Q), c.elements = null
                    }
                }
                h && h.remove()
            },
            _performRowSelection: function(e, f, d, b) {
                var c = this;
                if (!(a(b.target).hasClass("sui-expand-cell") || a(b.target).hasClass("sui-expand-cell-disabled") || a(b.target).hasClass("sui-collapse-cell") || a(b.target) && a(b.target).parent() && (a(b.target).parent().hasClass("sui-expand-cell") || a(b.target).parent().hasClass("sui-expand-cell-disabled") || a(b.target).parent().hasClass("sui-collapse-cell"))))
                    if (e && 0 === e.height() && 0 === e.width()) c.multiple ? c._processMultiRowSelection(b, d) : c._processSingleRowSelection(b, d);
                    else if (c.multiple) {
                    var h = c.table.find(">tbody > tr"),
                        g = null;
                    x(h, function(f, c) {
                        var d = a(c),
                            e = d.offset().top;
                        e < b.pageY && (g = c.rowIndex)
                    }), f || c._clearSelectedRows(), c._selectRowRange(d.row.rowIndex, g, f)
                } else c._processSingleRowSelection(b, d)
            },
            _performCellSelection: function(f, h, g, b) {
                var c = this;
                if (!(a(b.target).hasClass("sui-expand-cell") || a(b.target).hasClass("sui-expand-cell-disabled") || a(b.target).hasClass("sui-collapse-cell") || a(b.target) && a(b.target).parent() && (a(b.target).parent().hasClass("sui-expand-cell") || a(b.target).parent().hasClass("sui-expand-cell-disabled") || a(b.target).parent().hasClass("sui-collapse-cell"))))
                    if (f && 0 === f.height() && 0 === f.width()) c.multiple ? c._processMultiCellSelection(b, g) : c._processSingleCellSelection(b, g);
                    else if (c.multiple) {
                    var i = c.table.find(">tbody > tr > td"),
                        d = [];
                    x(i, function(u, j) {
                        var e = a(j),
                            r = e.get(0).clientWidth,
                            t = e.get(0).clientHeight,
                            g = e.offset().top,
                            h = e.offset().left,
                            p = g + t,
                            o = h + r,
                            l = n(b.pageX, c.x),
                            q = k(b.pageX, c.x),
                            m = n(b.pageY, c.y),
                            s = k(b.pageY, c.y),
                            i = !1,
                            f = !1;
                        m > g ? p > m && (i = !0) : s > g && (i = !0), l > h ? o > l && (f = !0) : q > h && (f = !0), i && f && d.push(j)
                    }), h || c._clearSelectedCells();
                    for (var e = 0; e < d.length; e++) {
                        var j = a(d[e]);
                        j.hasClass(m) ? c._deselectElement(a(d[e])) : c.elementsToBeSelected.push(a(d[e]))
                    }
                } else c._processSingleCellSelection(b, g)
            },
            _selectRowRange: function(e, f, g) {
                for (var b = this, h = n(e, f), i = k(e, f), j = b.table.find(">tbody > tr"), c = h; i >= c; c++) {
                    var d = a(j[c]);
                    g && d.hasClass(m) ? b._deselectElement(d) : b.elementsToBeSelected.push(d)
                }
            },
            _clearSelectedRows: function() {
                var b = this,
                    c = b.table.find(">tbody>tr." + m);
                x(c, function(d, c) {
                    b._deselectElement(a(c))
                })
            },
            _clearSelectedCells: function() {
                var b = this,
                    c = b.table.find(">tbody > tr > td." + m);
                x(c, function(d, c) {
                    b._deselectElement(a(c))
                })
            },
            _processSingleRowSelection: function(h, d) {
                var b = this,
                    e = (b.table, b.toggle),
                    f = b.multiple,
                    c = a(d.row),
                    g = c.hasClass(m);
                f || b._clearSelectedRows(), e ? g ? b._deselectElement(c) : b.elementsToBeSelected.push(c) : (b._clearSelectedRows(), b.elementsToBeSelected.push(c)), b.lastSelected = c
            },
            _processMultiRowSelection: function(f, g) {
                var b = this,
                    r = b.table,
                    j = f.ctrlKey,
                    l = f.shiftKey,
                    c = a(g.row);
                if (j) c.hasClass(m) ? (b._deselectElement(c), b.lastSelected = c) : (b.elementsToBeSelected.push(c), b.lastSelected = c);
                else if (l) {
                    b.table.find(">tbody tr." + m);
                    if (b.lastSelected) {
                        var s = b.lastSelected,
                            d = s.get(0).rowIndex,
                            h = r.find(">tbody > tr"),
                            i = c.get(0).rowIndex,
                            p = n(i, d),
                            q = k(i, d);
                        b._clearSelectedRows();
                        for (var e = p; q >= e; e++)
                            if (e !== d) {
                                var o = a(h[e]);
                                b.elementsToBeSelected.push(o)
                            }
                        b.elementsToBeSelected.push(a(h[d]))
                    } else b.elementsToBeSelected.push(c), b.lastSelected = c
                } else b._processSingleRowSelection(f, g)
            },
            _processSingleCellSelection: function(h, d) {
                var b = this,
                    e = (b.table, b.toggle),
                    f = b.multiple,
                    c = a(d.cell),
                    g = c.hasClass(m);
                b.lastSelected;
                f || b._clearSelectedCells(), e ? g ? b._deselectElement(c) : b.elementsToBeSelected.push(c) : (b._clearSelectedCells(), b.elementsToBeSelected.push(c)), b.lastSelected = c
            },
            _processMultiCellSelection: function(h, v) {
                var b = this,
                    A = b.table,
                    w = h.ctrlKey,
                    x = h.shiftKey,
                    c = a(v.cell);
                if (w) c.hasClass(m) ? (b._deselectElement(c), b.lastSelected = c) : (b.elementsToBeSelected.push(c), b.lastSelected = c);
                else if (x)
                    if (b.lastSelected) {
                        var d, j = b.lastSelected,
                            s = b.table.get(0),
                            q = s.rows[0].cells.length,
                            o = j.parent().get(0).rowIndex,
                            e = o * q + j.get(0).cellIndex,
                            r = A.find(">tbody > tr > td"),
                            l = c.parent().get(0).rowIndex,
                            t = l * q + c.get(0).cellIndex,
                            g = n(t, e),
                            i = k(t, e);
                        if (b._clearSelectedCells(), b.spreadsheet) {
                            var p = j[0].cellIndex,
                                u = c[0].cellIndex;
                            g = n(p, u), i = k(p, u);
                            var y = n(o, l),
                                z = k(o, l);
                            for (d = y; z >= d; d++) {
                                var f, B = s.rows[d];
                                for (f = g; i >= f; f++) b.elementsToBeSelected.push(a(B.cells[f]))
                            }
                        } else
                            for (d = g; i >= d; d++)
                                if (d !== e) {
                                    var C = a(r[d]);
                                    b.elementsToBeSelected.push(C)
                                }
                        b.elementsToBeSelected.push(a(r[e]))
                    } else b.elementsToBeSelected.push(c), b.lastSelected = c;
                else b._processSingleCellSelection(h, v)
            },
            _selectElement: function(a) {
                a.addClass(m)
            },
            _deselectElement: function(a) {
                a.removeClass(m)
            }
        }),
        da = l.extend({
            init: function(b) {
                var a = this;
                a.grid = b, a.options = i(!0, {}, da.fn.options), a._events(!0)
            },
            options: {
                ns: ".shieldGridGroupReorder",
                returnDuration: 50,
                returnEasing: "ease-out",
                dragTreshold: 20,
                draggedTemplate: "<div style='border-color:transparent;' class='sui-grid sui-grid-core'><div class='sui-group-panel-indicator'><span class='sui-group-title'>{0}</span><span class='sui-group-close-button'></span></div></div>"
            },
            _events: function(d) {
                var a = this,
                    b = a.grid.element;
                d ? (a._downProxy = c(a._down, a), b.on(q + a.options.ns, ".sui-group-panel-indicator", a._downProxy)) : (b.off(q + a.options.ns, ".sui-group-panel-indicator", a._downProxy), a._downProxy = null)
            },
            _down: function(g) {
                var e = this,
                    f = a(g.target).closest(".sui-group-panel-indicator"),
                    i = f.offset(),
                    h = e.grid.element,
                    j = h.offset(),
                    k = e.options.ns,
                    l = g.pageX,
                    m = g.pageY;
                return e.dataField = f.attr("data-field"), g.button > 1 ? void 0 : (e._moveProxy = c(e._move, e), e._upProxy = c(e._up, e), a(d).on(o + k, e._moveProxy).on(s + k, e._upProxy), e.start = {
                    left: l - i.left,
                    top: m - i.top,
                    x: l,
                    y: m,
                    target: f,
                    index: f.parent().find(".sui-group-panel-indicator").index(f),
                    positions: e._positions(f),
                    gridPosition: {
                        left: j.left,
                        top: j.top,
                        width: h.outerWidth(),
                        height: h.outerHeight()
                    },
                    isRtl: p.isRtl(h)
                }, b.selection(!1), !1)
            },
            _move: function(g) {
                var c = this,
                    i = c.options,
                    j = c.dragged,
                    b = c.start,
                    e = g.pageX,
                    f = g.pageY,
                    k = i.dragTreshold;
                j ? (j.css({
                    left: e - b.left,
                    top: f - b.top
                }), c.hovered = c._index(e, f), c._indicator()) : (r(b.x - e) > k || r(b.y - f) > k) && (c.dragged = a(h(i.draggedTemplate, b.target.html())).css({
                    position: "absolute",
                    left: e - b.left,
                    top: f - b.top,
                    zIndex: 999
                }).find("table").css("width", "auto").end().find("th").attr("style", b.target[0].style.cssText).css({
                    width: b.target.width(),
                    height: b.target.height()
                }).end().appendTo(d.body))
            },
            _positions: function(f) {
                var a, c, d = f.parent().children(".sui-group-panel-indicator"),
                    b = 0,
                    e = [];
                for (b; b < d.length; b++) a = d.eq(b), c = a.offset(), e.push({
                    left: c.left,
                    top: c.top,
                    width: a.outerWidth(),
                    height: a.outerHeight()
                });
                return e
            },
            _index: function(d, e) {
                var a, c, g, h, f = this.start,
                    b = f.gridPosition;
                for (c = 0; c < f.positions.length; c++)
                    if (a = f.positions[c], g = a.left <= d && d <= a.left + a.width && a.top <= e && e <= a.top + a.height, h = b.left <= d && d <= b.left + b.width && b.top <= e && e <= b.top + b.height, g && h) return c;
                return -1
            },
            _indicator: function() {
                var h, f = this,
                    b = f.start,
                    c = f.hovered,
                    g = b.positions[c],
                    e = f.reorderIndicator,
                    j = b.gridPosition.left,
                    l = b.gridPosition.left + b.gridPosition.width,
                    i = b.target.parent().children(".sui-group-panel-indicator"),
                    m = b.isRtl ? b.index < c : b.index > c;
                i.removeClass("sui-reorder-target"), e && e.hide(), null != c && c > -1 && (i.eq(c).addClass("sui-reorder-target"), e || (e = f.reorderIndicator = a("<div class='sui-grid-reorder-indicator'><span class='sui-grid-indicator-top' /><span class='sui-grid-indicator-bottom' /></div>").appendTo(d.body)), c !== b.index && (h = g.left + (m ? 0 : g.width), e.css({
                    left: n(k(j, h), l),
                    top: g.top,
                    height: g.height
                }).show()))
            },
            _up: function(q) {
                var f, c = this,
                    m = c.options,
                    g = c.grid,
                    k = c.dragged,
                    n = c.start,
                    h = c.hovered,
                    l = c.dataField;
                if (c._detachDocumentEvents(), k)
                    if (null != h && h > -1) {
                        if (k.remove(), f = g.trigger(e, {
                                commandName: _,
                                cancel: !1,
                                index: n.index,
                                newIndex: h
                            }), !f.cancel)
                            for (var i = g.dataSource.group, j = 0; j < i.length; j++)
                                if (i[j].field == l) {
                                    var o = i[j];
                                    i[j] = i[h], i[h] = o;
                                    break
                                }
                    } else setTimeout(function() {
                        k.remove()
                    }, p.transitions ? m.returnDuration : 0), c.grid.dataSource.group && (f = g.trigger(e, {
                        commandName: A,
                        cancel: !1,
                        field: l
                    }), f.cancel || (c.grid.ungroup(l), g.trigger(A, f)));
                c.dragged = c.dataField = c.hovered = h = null, c._indicator(), c.reorderIndicator && (c.reorderIndicator.remove(), c.reorderIndicator = null), c.start = null, a(d).off(m.ns), b.selection(!0), f && !f.cancel && (delete f.cancel, delete f.commandName, g.dataSource.read(), g.trigger(_, f))
            },
            _detachDocumentEvents: function() {
                var b = this,
                    c = b.options.ns;
                b._moveProxy = b._upProxy = null, a(d).off(o + c, b._moveProxy).off(s + c, b._upProxy)
            },
            destroy: function() {
                var a = this;
                a.dataField = null, a._detachDocumentEvents(), a._events(!1)
            }
        }),
        xa = l.extend({
            init: function(b) {
                var a = this;
                a.grid = b, a.options = i(!0, {}, J.fn.options), a._events(!0), b.headerTable.addClass("sui-reorderable")
            },
            options: {
                ns: ".shieldGridColumnGroupReorder",
                returnDuration: 150,
                returnEasing: "ease-out",
                dragTreshold: 20,
                draggedTemplate: "<div class='sui-grid sui-grid-core'><div class='sui-gridheader'><table class='sui-table'><thead><tr class='sui-columnheader'><th class='sui-headercell'>{0}</th></tr></thead></table></div></div>"
            },
            _events: function(d) {
                var a = this,
                    b = a.grid.element;
                d ? (a._downProxy = c(a._down, a), b.on(q + a.options.ns, ".sui-headercell", a._downProxy)) : (b.off(q + a.options.ns, ".sui-headercell", a._downProxy), a._downProxy = null)
            },
            _down: function(f) {
                var e = this,
                    g = a(f.target).closest(".sui-headercell"),
                    n = g.offset(),
                    h = e.grid.element,
                    k = h.offset(),
                    q = e.options.ns,
                    l = f.pageX,
                    m = f.pageY;
                if (!(f.button > 1)) {
                    var r = g.attr("data-field"),
                        j = e.grid.dataSource.group;
                    if (j)
                        for (var i = 0; i < j.length; i++)
                            if (r === j[i].field) return;
                    return a(d).on(o + q, c(e._move, e)).on(s + q, c(e._up, e)), e.start = {
                        left: l - n.left,
                        top: m - n.top,
                        x: l,
                        y: m,
                        target: g,
                        index: 1e3,
                        positions: e._positions(g),
                        gridPosition: {
                            left: k.left,
                            top: k.top,
                            width: h.outerWidth(),
                            height: h.outerHeight()
                        },
                        isRtl: p.isRtl(h)
                    }, b.selection(!1), !1
                }
            },
            _move: function(g) {
                var c = this,
                    i = c.options,
                    j = c.dragged,
                    b = c.start,
                    e = g.pageX,
                    f = g.pageY,
                    k = i.dragTreshold;
                j ? (j.css({
                    left: e - b.left,
                    top: f - b.top
                }), c.hovered = c._index(e, f), c._indicator()) : (r(b.x - e) > k || r(b.y - f) > k) && (c.dragged = a(h(i.draggedTemplate, b.target.html())).css({
                    position: "absolute",
                    left: e - b.left,
                    top: f - b.top,
                    zIndex: 999
                }).find("table").css("width", "auto").end().find("th").attr("style", b.target[0].style.cssText).css({
                    width: b.target.width(),
                    height: b.target.height()
                }).end().appendTo(d.body))
            },
            _positions: function(f) {
                var a, b, d = this.grid.element.find(".sui-group-panel-indicator"),
                    c = 0,
                    e = [];
                for (c; c < d.length; c++) a = d.eq(c), b = a.offset(), e.push({
                    left: b.left,
                    top: b.top,
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }), c == d.length - 1 && e.push({
                    left: b.left,
                    top: b.top,
                    width: a.outerWidth(),
                    height: a.outerHeight()
                });
                return e
            },
            _index: function(b, c) {
                var d, f, i, h, j, g = this.start,
                    e = g.gridPosition,
                    a = this.grid.element.find(".sui-group-panel");
                if (g.positions.length > 0) {
                    for (f = 0; f < g.positions.length; f++)
                        if (d = g.positions[f], i = d.left <= b && b <= d.left + d.width && d.top <= c && c <= d.top + d.height, j = e.left <= b && b <= e.left + e.width && e.top <= c && c <= e.top + e.height, h = a.offset().left <= b && b <= a.offset().left + a.width() && a.offset().top <= c && c <= a.offset().top + a.height(), i && j) return f
                } else h = a.offset().left <= b && b <= a.offset().left + a.width() && a.offset().top <= c && c <= a.offset().top + a.height();
                return h ? (this.isOnGroupPanel = !0, this.grid.element.find(".sui-group-panel-indicator").length) : -1
            },
            _indicator: function() {
                var h, f = this,
                    b = f.start,
                    c = f.hovered,
                    g = b.positions[c],
                    e = f.reorderIndicator,
                    j = b.gridPosition.left,
                    m = b.gridPosition.left + b.gridPosition.width,
                    l = b.target.parent().children(".sui-group-panel-indicator"),
                    i = b.isRtl ? b.index < c : b.index > c;
                l.removeClass("sui-reorder-target"), e && e.hide(), null != c && c > -1 && (l.eq(c).addClass("sui-reorder-target"), e || (e = f.reorderIndicator = a("<div class='sui-grid-reorder-indicator'><span class='sui-grid-indicator-top' /><span class='sui-grid-indicator-bottom' /></div>").appendTo(d.body)), this.isOnGroupPanel && (i = !1), g ? (h = g.left + (i ? 0 : g.width), this.isOnGroupPanel = null, e.css({
                    left: n(k(j, h), m),
                    top: g.top,
                    height: g.height
                }).show()) : (h = j + (i ? b.gridPosition.width : 0), this.isOnGroupPanel = null, e.css({
                    left: h,
                    top: b.gridPosition.top,
                    height: f.grid.element.find(".sui-group-panel-empty").outerHeight()
                }).show()))
            },
            _up: function(n) {
                var f, c = this,
                    j = c.options,
                    k = c.grid,
                    l = c.dragged,
                    g = c.start,
                    i = c.hovered;
                if (l)
                    if (l.css({
                            left: g.x - g.left,
                            top: g.y - g.top,
                            transition: h("left {0} {1}ms, top {0} {1}ms", j.returnEasing, j.returnDuration)
                        }), null != i && i > -1) {
                        l.remove();
                        var m = g.target.attr("data-field");
                        f = k.trigger(e, {
                            commandName: aa,
                            cancel: !1,
                            field: m,
                            index: i
                        }), f.cancel || k.group(m, i, "asc")
                    } else setTimeout(function() {
                        l.remove()
                    }, p.transitions ? j.returnDuration : 0);
                c.dragged = c.hovered = i = null, c._indicator(), c.reorderIndicator && (c.reorderIndicator.remove(), c.reorderIndicator = null), c.start = null, a(d).off(j.ns), b.selection(!0), f && !f.cancel && (delete f.cancel, delete f.commandName, k.dataSource.read(), k.trigger(aa, f))
            },
            destroy: function() {
                this._events(!1), this.grid.headerTable.removeClass("sui-reorderable")
            }
        }),
        J = l.extend({
            init: function(b) {
                var a = this;
                a.grid = b, a.options = i(!0, {}, J.fn.options), a._events(!0), b.headerTable.addClass("sui-reorderable")
            },
            options: {
                ns: ".shieldGridColumnReorder",
                returnDuration: 150,
                returnEasing: "ease-out",
                dragTreshold: 20,
                draggedTemplate: "<div class='sui-grid sui-grid-core'><div class='sui-gridheader'><table class='sui-table'><thead><tr class='sui-columnheader'><th class='sui-headercell'>{0}</th></tr></thead></table></div></div>"
            },
            _events: function(d) {
                var a = this,
                    b = a.grid.element;
                d ? (a._downProxy = c(a._down, a), b.on(q + a.options.ns, ".sui-headercell", a._downProxy)) : (b.off(q + a.options.ns, ".sui-headercell", a._downProxy), a._downProxy = null)
            },
            _down: function(g) {
                var e = this,
                    f = a(g.target).closest(".sui-headercell"),
                    i = f.offset(),
                    h = e.grid.element,
                    j = h.offset(),
                    k = e.options.ns,
                    l = g.pageX,
                    m = g.pageY;
                if (!(g.button > 1)) return a(d).on(o + k, c(e._move, e)).on(s + k, c(e._up, e)), e.start = {
                    left: l - i.left,
                    top: m - i.top,
                    x: l,
                    y: m,
                    target: f,
                    index: f.parent().find(".sui-headercell").index(f),
                    positions: e._positions(f),
                    gridPosition: {
                        left: j.left,
                        top: j.top,
                        width: h.outerWidth(),
                        height: h.outerHeight()
                    },
                    isRtl: p.isRtl(h)
                }, b.selection(!1), !1
            },
            _move: function(g) {
                var c = this,
                    i = c.options,
                    j = c.dragged,
                    b = c.start,
                    e = g.pageX,
                    f = g.pageY,
                    k = i.dragTreshold;
                j ? (j.css({
                    left: e - b.left,
                    top: f - b.top
                }), c.hovered = c._index(e, f), c._indicator()) : (r(b.x - e) > k || r(b.y - f) > k) && (c.dragged = a(h(i.draggedTemplate, b.target.html())).css({
                    position: "absolute",
                    left: e - b.left,
                    top: f - b.top,
                    zIndex: 999
                }).find("table").css("width", "auto").end().find("th").attr("style", b.target[0].style.cssText).css({
                    width: b.target.width(),
                    height: b.target.height()
                }).end().appendTo(d.body))
            },
            _positions: function(f) {
                var a, c, d = f.parent().children(".sui-headercell"),
                    b = 0,
                    e = [];
                for (b; b < d.length; b++) a = d.eq(b), c = a.offset(), e.push({
                    left: c.left,
                    top: c.top,
                    width: a.outerWidth(),
                    height: a.outerHeight()
                });
                return e
            },
            _index: function(d, e) {
                var a, c, g, h, f = this.start,
                    b = f.gridPosition;
                for (c = 0; c < f.positions.length; c++)
                    if (a = f.positions[c], g = a.left <= d && d <= a.left + a.width && a.top <= e && e <= a.top + a.height, h = b.left <= d && d <= b.left + b.width && b.top <= e && e <= b.top + b.height, g && h) return c;
                return -1
            },
            _indicator: function() {
                var h, f = this,
                    b = f.start,
                    c = f.hovered,
                    g = b.positions[c],
                    e = f.reorderIndicator,
                    j = b.gridPosition.left,
                    l = b.gridPosition.left + b.gridPosition.width,
                    i = b.target.parent().children(".sui-headercell"),
                    m = b.isRtl ? b.index < c : b.index > c;
                i.removeClass("sui-reorder-target"), e && e.hide(), null != c && c > -1 && (i.eq(c).addClass("sui-reorder-target"), e || (e = f.reorderIndicator = a("<div class='sui-grid-reorder-indicator'><span class='sui-grid-indicator-top' /><span class='sui-grid-indicator-bottom' /></div>").appendTo(d.body)), c !== b.index && (h = g.left + (m ? 0 : g.width), e.css({
                    left: n(k(j, h), l),
                    top: g.top,
                    height: g.height
                }).show()))
            },
            _up: function(m) {
                var f, c = this,
                    j = c.options,
                    l = c.grid,
                    k = c.dragged,
                    g = c.start,
                    i = c.hovered;
                k && (k.css({
                    left: g.x - g.left,
                    top: g.y - g.top,
                    transition: h("left {0} {1}ms, top {0} {1}ms", j.returnEasing, j.returnDuration)
                }), null != i && i > -1 ? (k.remove(), f = l.trigger(e, {
                    commandName: $,
                    cancel: !1,
                    index: g.index,
                    newIndex: i
                }), f.cancel || l.reorderColumn(g.index, i)) : setTimeout(function() {
                    k.remove()
                }, p.transitions ? j.returnDuration : 0)), c.dragged = c.hovered = i = null, c._indicator(), c.reorderIndicator && (c.reorderIndicator.remove(), c.reorderIndicator = null), c.start = null, a(d).off(j.ns), b.selection(!0), f && !f.cancel && (delete f.cancel, delete f.commandName, l.trigger($, f))
            },
            destroy: function() {
                this._events(!1), this.grid.headerTable.removeClass("sui-reorderable")
            }
        }),
        T = H.extend({
            init: function(a, b) {
                H.fn.init.apply(this, arguments), this.refresh()
            },
            destroy: function() {
                this._destroyInternal(), H.fn.destroy.call(this)
            },
            _destroyInternal: function() {
                var c, d, e, b = this;
                b.options;
                if (b.contentWrapper) {
                    if (b._markedCells) {
                        for (d in b._markedCells) b._markedCells.hasOwnProperty(d) && (b._markedCells[d].length = 0);
                        b._markedCells = null
                    }
                    for (a(v).off(V + b._rsNS), b._resize = b._rsNS = null, b.sorting && (b.sorting.destroy(), b.sorting = null), b.virtualizedContainer && (b.virtualizedContainer.destroy(), b.virtualizedContainer = null), c = 0; c < b.columns; c++) b.columns[c].destroy();
                    if (b.contentWrapper && b.contentWrapper.off(ha, b._hScrollHandler), b._hScrollHandler = b.scrollableWrapper = null, b._selectable && (b._selectable.destroy(), b._selectable = null), b.options.scrolling ? (b.contentWrapper.parent().remove(), b.headerWrapper.parent().remove()) : (b.contentWrapper.remove(), b.headerWrapper.remove()), b._hasDetailTemplate() && (b.contentTable.off(g, ".sui-expand-cell", b._toggleDetailTemplateHandler).off(g, ".sui-collapse-cell", b._toggleDetailTemplateHandler), b._toggleDetailTemplateHandler = null), b.columns = b.contentWrapper = b.headerWrapper = b.contentTable = b.hederTable = null, b._buttons) {
                        for (c = 0; c < b._buttons.length; c++) e = b._buttons[c].button.element, b._buttons[c].button.destroy(), e.remove();
                        b._buttons.length = 0
                    }
                    b.pager && (b.pager.destroy(), b.pager = null, b.pagerWrapper && (b.pagerWrapper.parent().remove(), b.pagerWrapper = null)), b.loadingPanel && (b.loadingPanel = null, clearTimeout(b.loadingPanelTimeout), b.loadingPanelTimeout = null), b._columnResizing && (b._columnResizing.destroy(), b._columnResizing = null), b._toolbar && (b._toolbar.destroy(), b._toolbar = null), b._editing && (b._editing.destroy(), b._editing = null), b._columnReorder && (b._columnReorder.destroy(), b._columnReorder = null), b._sortingInProgress = b._scrollLeft = b._scrollTop = b._populateInsertedItem = b._preventClosingEditors = b._editingInProcess = null, b._filter && (b._filter.destroy(), b._filter = null), b._groupReorder && (b._groupReorder.destroy(), b._groupReorder = null), b._columnGroupReorder && (b._columnGroupReorder.destroy(), b._columnGroupReorder = null), b.dataSource.off(I, b._dsChange), b.dataSource.off(fa, b._dsStart), b._dsChange = b._dsStart = b.dataSource = null, b.element.removeClass("sui-grid sui-grid-core").css(K, "").empty()
                }
            },
            _resizeHandler: function() {
                this.options.scrolling && this._scrolling()
            },
            _hasDetailTemplate: function() {
                var a = this.options;
                return a.detailTemplate || a.events && a.events.detailCreated
            },
            _hasVirtualScrolling: function() {
                var a = this.options;
                return a.scrolling && a.scrolling.virtual && !a.paging && !this._hasDetailTemplate()
            },
            _canExpandCollapse: function() {
                return this.options.detailExpandCollapse !== !1
            },
            _resolveColumns: function(a) {
                var c = this.columns = [];
                j.array(a) ? x(a, function(b, a) {
                    c.push(new ra(a))
                }) : b.error("Invalid columns declaration. The columns have to be array.", this.options.dieOnError)
            },
            _createWrappers: function() {
                var b = this,
                    e = b.element;
                b._wrapper();
                var c = a("<div />").prependTo(e);
                c.addClass("sui-gridcontent");
                var d = a("<div />").prependTo(e);
                d.addClass("sui-gridheader"), b.options.showHeader || (d.css("display", "none"), c.addClass("sui-no-header")), b.headerWrapper = d, b.contentWrapper = c
            },
            _wrapper: function() {
                var b = this.options.height,
                    a = this.element;
                a.is("div") || (a = a.wrap("<div/>").parent()), a.addClass("sui-grid sui-grid-core"), a && a.css(K, b)
            },
            _createGroupPanel: function() {
                var d, g, e, b = this,
                    h = !1,
                    c = b.dataSource;
                if (e = b.element.find(".sui-group-panel"), e.length > 0 && e.remove(), b.options.grouping.showGroupHeader)
                    if (c.group && 0 !== c.group.length) {
                        d = a("<div class='sui-group-panel' />"), b.element.prepend(d);
                        for (var f = 0; f < c.group.length; f++) g = c.group[f], b._createGroupHeaderIndicator(g, d), h = !0;
                        h && b.options.grouping.allowDragToGroup && (b._groupReorder && b._groupReorder.destroy(), b._groupReorder = new da(b), b._columnGroupReorder && b._columnGroupReorder.destroy(), b._columnGroupReorder = new xa(b))
                    } else b.element.prepend(a("<div class='sui-group-panel sui-group-panel-empty' >" + b.options.grouping.message + "</div>"))
            },
            _createGroupHeaderIndicator: function(e, i) {
                var f, h, d, b = this;
                d = a("<div class='sui-group-panel-indicator' data-field=\"" + e.field + '" />').appendTo(i), h = "desc" == e.order ? a("<span class='sui-descending'>&#9660;</span>").appendTo(d) : a("<span class='sui-ascending'>&#9650;</span>").appendTo(d), a("<span class='sui-group-title'>" + e.field + "</span>").appendTo(d), b.options.grouping.allowDragToGroup && (f = a("<span class='sui-group-close-button'>&#10006;</span>").appendTo(d), f.on(g, b._closeButtonClicked = c(b._closeButtonClickedHandler, b))), h.on(g, b._sortButtonClicked = c(b._sortButtonClickedHandler, b))
            },
            _sortButtonClickedHandler: function(f) {
                for (var d = this, e = a(f.currentTarget), g = e.parent().attr("data-field"), c = d.dataSource.group, b = 0; b < c.length; b++) c[b].field == g && (e.hasClass("sui-descending") ? c[b].order = "asc" : c[b].order = "desc", d.dataSource.read())
            },
            _closeButtonClickedHandler: function(f) {
                var c, b = this,
                    g = a(f.currentTarget),
                    d = g.parent().attr("data-field");
                b.dataSource.group && (c = b.trigger(e, {
                    commandName: A,
                    cancel: !1,
                    field: d
                }), c.cancel || (b.ungroup(d), b.trigger(A, c)))
            },
            _createHeaderTable: function() {
                var c = this,
                    d = c.headerWrapper,
                    b = c.element;
                b.is("table") || (b = d.children("table"), b.length || (b = a("<table />").appendTo(d))), w && b.attr("cellspacing", 0), b.addClass("sui-table"), c.headerTable = b, c._createTbody(b, !0), c._createThead(b, !0), c._createFakeRow(b, c.columns.length)
            },
            _createContentTable: function() {
                var b = this,
                    f = b.options,
                    e = b.contentWrapper,
                    d = b.element;
                d.is("table") || (d = e.children("table"), d.length || (d = a("<table />").appendTo(e))), w && d.attr("cellspacing", 0), d.addClass("sui-table"), f.rowHover && d.addClass("sui-hover"), b._hasDetailTemplate() && (b._canExpandCollapse() && d.addClass("sui-expandable"), d.on(g, ".sui-expand-cell", b._toggleDetailTemplateHandler = c(b._expandCollapseDetailTemplate, b)), d.on(g, ".sui-collapse-cell", b._toggleDetailTemplateHandler)), b.contentTable = d, b._createTbody(b.contentTable, !1)
            },
            _createTbody: function(c, d) {
                var b = c.find(">tbody");
                b.length || (b = a("<tbody/>").appendTo(c)), d && b.addClass("sui-hide"), c.tbody = b
            },
            _createThead: function(g) {
                var e, k, b, i, c, h = this,
                    f = (h.options, h.columns),
                    j = "",
                    d = g.find(">thead");
                if (d.length || (d = a("<thead/>").insertBefore(g.tbody)), b = g.find("tr:has(th):first"), b.length || (b = d.children().first(), b.length || (b = a("<tr/>"))), !b.children().length) {
                    for (e = 0, k = f.length; k > e; e++) c = f[e], i = c.headerTemplate || c.title || c.field || c, j += "<th " + ba(c.headerAttributes) + ' data-field="' + f[e].field + '">' + i + "</th>";
                    b.html(j)
                }
                if (b.addClass("sui-columnheader"), b.find("th").addClass("sui-headercell"), f.length && h._hasDetailTemplate() && h._canExpandCollapse()) {
                    var l = a('<th class="sui-indent-cell" />');
                    w && l.html("&nbsp;"), l.prependTo(b)
                }
                b.appendTo(d), g.thead = d
            },
            _createFakeRow: function(e, f) {
                var b = e.find(">tbody");
                if (b.length) {
                    for (var c = a("<tr/>"), d = 0; f > d; d++) a("<td/>").appendTo(c);
                    c.appendTo(b)
                }
            },
            _createColgroup: function(f) {
                var d, g, b, e = this,
                    j = e.options,
                    i = e.columns,
                    c = f.find(">colgroup");
                for (c.length || (c = a("<colgroup/>").prependTo(f)), c.html(""), j.columns.length && e._hasDetailTemplate() && e._canExpandCollapse() && a("<col class='sui-indent-col'/>").appendTo(c), d = 0, g = i.length; g > d; d++) b = i[d].width, a(b && 0 !== parseInt(b, 10) ? h('<col style="width:{0}"/>', G(b) ? b : b + "px") : "<col />").appendTo(c)
            },
            _scrolling: function() {
                var f, i, j, o, d = this,
                    n = d.element,
                    h = d.dataSource,
                    m = d._hasVirtualScrolling(),
                    g = d.headerWrapper,
                    e = d.contentWrapper,
                    l = g.outerHeight();
                if (g.parent().hasClass("sui-gridheader sui-scrolldiv") ? l = g.parent().outerHeight() : (g.addClass("sui-headercontent").removeClass("sui-gridheader"), g.wrap("<div class='sui-gridheader sui-scrolldiv'></div>"), e.addClass("sui-content").removeClass("sui-gridcontent"), e.wrap("<div class='sui-gridcontent sui-scroller'></div>"), w && (d.headerTable.addClass("sui-table-ie7").removeClass("sui-table"), d.contentTable.addClass("sui-table-ie7").removeClass("sui-table")), a(d.element).find(".sui-scrolldiv").css(p.isRtl(n) ? "padding-left" : "padding-right", p.scrollbar() - 1), i = d.scrollableWrapper = m ? e.parent() : e, i.on(ha, d._hScrollHandler = c(d._hscroll, d))), f = n.innerHeight() - l, d.pagerWrapper && (f -= d.pagerWrapper.outerHeight()), d._toolbar) {
                    var k, q = d.element.find(".sui-toolbar"),
                        r = 0;
                    for (k = 0; k < q.length; k++) r += a(q[0]).outerHeight();
                    f -= r + 1
                }
                var s = d.element.find(".sui-group-panel");
                if (s.length > 0 && (f -= s.outerHeight()), a(e).add(e.parent()).css({
                        height: f,
                        width: "100%"
                    }), m && h.view && h.view.length) {
                    if (d.virtualizedContainer) d.virtualizedContainer.options.total = h.total, d.virtualizedContainer.render();
                    else {
                        var u = d.dataSource.view[0];
                        j = d._renderRow(0, d.contentTable.tbody, u), o = j.outerHeight(), j.remove(), d.virtualizedContainer = new b.ui.VirtualizedContainer(i, {
                            itemHeight: o,
                            total: h.total,
                            createContainer: function(a) {
                                return a.addClass("sui-content").append(d.contentTable).find("tbody").empty()
                            },
                            getItems: c(d._loadVirtualRows, d),
                            skipRender: !0
                        }), d.virtualizedContainer.render()
                    }
                    d.contentWrapper = d.virtualizedContainer.element.children().eq(0)
                } else if (y && !w && !ma) {
                    var t = e.get(0);
                    t.scrollWidth <= t.clientWidth && e.css(K, f + 1)
                }
            },
            _loadVirtualRows: function(e, f, h) {
                var c, a = this,
                    b = a.dataSource,
                    g = null != b.skip ? b.skip : 0,
                    i = null != b.take ? b.take : b.view.length,
                    j = 100,
                    d = a.virtualizedContainer.container;
                if (!a._sortingInProgress && b.remote && (g > e || f > g + i)) clearTimeout(a._loadWaitTimeout), a._loadWaitTimeout = setTimeout(function(e, f, g) {
                    return function() {
                        a._loadWaitTimeout = null, b.skip = e, b.take = f - e, a._loadingVirtualRows = !0, b.read().then(function() {
                            if (!a._loadWaitTimeout) {
                                for (d.empty(), c = e; f > c && c < b.total; c++) {
                                    var h = a.dataSource.view[c - e];
                                    a._renderRow(c - e, d, h)
                                }
                                b.one(I, function() {
                                    a._loadWaitTimeout || (a._loadingVirtualRows = !1)
                                }), a.loading(!1), g([], !1)
                            }
                        })
                    }
                }(e, f, h), j);
                else {
                    for (d.empty(), c = e; f > c && c < b.total; c++) {
                        var k = a.dataSource.view[c];
                        a._renderRow(c, d, k)
                    }
                    h([], !1)
                }
                a._checkIfVerticalScroll()
            },
            _checkIfVerticalScroll: function() {
                var a = this,
                    b = a.element.find(".sui-virtualized").get(0),
                    c = a.element.get(0),
                    d = b.scrollHeight > c.scrollHeight;
                d ? (a.headerWrapper.parent().css("padding-right", "16px"), a.headerWrapper.removeClass("sui-grid-no-gap")) : (a.headerWrapper.parent().css("padding-right", "0px"), a.headerWrapper.addClass("sui-grid-no-gap"))
            },
            _hscroll: function(g) {
                var b = this,
                    d = b.scrollableWrapper,
                    a = d.get(0),
                    e = b.headerWrapper,
                    c = d.scrollLeft(),
                    f = e.scrollLeft();
                p.isRtl(b.element) && la && a.clientHeight < a.scrollHeight && (c += a.offsetWidth - a.clientWidth), c != f && e.scrollLeft(c)
            },
            _sorting: function() {
                var a = this,
                    b = a.options.sorting;
                a.element;
                b && a.columns.length && (a.sorting = new ua(b, a))
            },
            _renderData: function() {
                var c, d, a = this,
                    g = a.dataSource.view,
                    b = a.options;
                b.scrolling, f(b.altRows) ? !0 : b.altRows, b.rowTemplate, b.altRowTemplate, a.contentTable;
                a._loadingVirtualRows || (d = a.trigger(e, {
                    commandName: R,
                    cancel: !1
                }), d.cancel || (a._sortingInProgress ? a._updateGrid() : (a.columns.length || (c = [], g.length && x(g[0], function(a, b) {
                    c.push(a)
                }), b.columns = c, a._resolveColumns(c), a._createThead(a.headerTable, !0)), a._createColgroup(a.headerTable)), a._createColgroup(a.contentTable), a._sortingInProgress = !1, a._renderRows(), a._renderFooter(), a.loading(!1), a.trigger(R)))
            },
            _renderRows: function() {
                var g, c, b = this,
                    d = b.options,
                    i = b.dataSource,
                    e = i.view,
                    h = b.contentTable;
                if (b._markedCells) {
                    for (var j in b._markedCells) b._markedCells.hasOwnProperty(j) && (b._markedCells[j].length = 0);
                    b._markedCells = null
                }
                if (h.tbody.empty(), !e || !e.length) return void(f(d.noRecordsTemplate) ? a("<tr><td colspan='" + b.columns.length + "'>" + (d.noRecordsText || "No records to display") + "</td></tr>").appendTo(h.tbody) : a("<td></td>").append(d.noRecordsTemplate).wrap("<tr></tr>").parent().appendTo(h.tbody));
                if (!b._hasVirtualScrolling() || b._sortingInProgress)
                    if (c = i.group, c && c.length > 0) {
                        var k = 0;
                        for (b._renderGroupedData(e, k, 0), b.headerTable.find(">colgroup").find(".sui-indent-col").remove(), b.headerTable.thead.find(".sui-columnheader > .sui-indent-cell").remove(), g = 0; g < c.length; g++) a("<col class='sui-indent-col'/>").prependTo(b.headerTable.find(">colgroup")), a("<col class='sui-indent-col'/>").prependTo(b.contentTable.find(">colgroup")), a("<th class='sui-indent-cell'/>").prependTo(b.headerTable.thead.find(".sui-columnheader"));
                        b._addAllIntendCells(), b.contentTable.addClass("sui-grouped-table")
                    } else b._renderRowsAndDetails(e);
                b._createGroupPanel(), d.scrolling && !b._sortingInProgress && b._scrolling()
            },
            _addAllIntendCells: function() {
                for (var b, g = this, f = g.contentTable.get(0).rows, d = 0; d < f.length; d++) {
                    var c = a(f[d]),
                        e = parseInt(c.attr("data-group-level"), 10);
                    if (c.hasClass("sui-group-header")) {
                        if (e > 1)
                            for (b = 0; e - 1 > b; b++) a("<td class='sui-indent-cell'/>").prependTo(c)
                    } else
                        for (b = 0; e > b; b++) a("<td class='sui-indent-cell sui-group-intend-cell'/>").prependTo(c)
                }
            },
            _renderGroupedData: function(f, d, b) {
                var c = this;
                c.options.detailExpandCollapse = !1;
                for (var e = 0; e < f.length; e++) {
                    var a = f[e];
                    a.hasOwnProperty("field") && a.hasOwnProperty("items") && a.hasOwnProperty("value") && a.hasOwnProperty("order") ? (b++, c._renderGroupHeader(a, b), c._renderGroupedData(a.items, d, b), c._renderGroupAggregates(a), b--) : (c._renderDataItem(a, d, b), d++)
                }
            },
            _renderGroupAggregates: function(n) {
                if (n.aggregate) {
                    var k, f, o, b, i, g = this,
                        e = g.columns,
                        l = {},
                        p = j["null"],
                        d = n.aggregate;
                    for (b = 0; b < e.length; b++)
                        if (f = e[b].groupFooterTemplate) {
                            k = a("<tr class='sui-group-footer' />").appendTo(g.contentTable.tbody);
                            break
                        }
                    if (k) {
                        for (b = 0; b < e.length; b++)
                            if (i = a("<td class='sui-group-footer-cell' />").appendTo(k), f = e[b].groupFooterTemplate) {
                                o = e[b].field;
                                for (var c = 0; c < d.length; c++) d[c].field == o && (u(d[c].aggregate) ? l.custom = d[c].value : l[d[c].aggregate] = d[c].value);
                                if (u(f)) {
                                    var m = f.call(g, i, l);
                                    t(m) && !p(m) && "" !== m && i.html(m)
                                } else i.html(h.call(g, f, l))
                            }
                        var q = g.dataSource.group.length;
                        for (b = 0; q > b; b++) k.prepend(a("<td class='sui-indent-cell' />"))
                    }
                }
            },
            _renderGroupHeader: function(d, e) {
                var b = this,
                    h = b.contentTable,
                    i = b.columns.length + b.dataSource.group.length - e + 1,
                    j = a("<tr class='sui-group-header' data-group-level='" + e + "' />").appendTo(h),
                    f = a("<td class='sui-group-header-cell' colspan='" + i + "' />").appendTo(j),
                    k = a("<span class='sui-collapse'>&#9662;</span>").appendTo(f);
                a("<span class='sui-group-header-text'>" + d.field + ": " + d.value + "</span>").appendTo(f), k.on(g, b._expandCollapse = c(b._expandCollapseHandler, b))
            },
            _expandCollapseHandler: function(g) {
                var f, b = this,
                    c = a(g.currentTarget),
                    d = c.parent().parent();
                c.hasClass("sui-collapse") ? (f = b.trigger(e, {
                    commandName: ga,
                    cancel: !1,
                    row: d
                }), f.cancel || (b.collapseGroup(d), c.html("&#9656;"), c.removeClass("sui-collapse").addClass("sui-expand"), b.trigger(ga, {
                    row: d
                }))) : (f = b.trigger(e, {
                    commandName: W,
                    cancel: !1,
                    row: d
                }), f.cancel || (b.expandGroup(d), c.html("&#9662;"), c.removeClass("sui-expand").addClass("sui-collapse"), b.trigger(W, {
                    row: d
                })))
            },
            _renderDataItem: function(b, c, d) {
                var a = this,
                    e = a.contentTable;
                a._renderRow(c, e, b).attr("data-group-level", d)
            },
            _renderRowsAndDetails: function(c) {
                var d, a, b = this,
                    e = b.contentTable;
                for (a = 0, d = c.length; d > a; a++) {
                    var f = b.dataSource.view[a];
                    b._renderRow(a, e.tbody, f), b._hasDetailTemplate() && !b._canExpandCollapse() && b._addDetailTemplate(c[a])
                }
            },
            _renderRow: function(s, l, d) {
                var q, b, z, o, c = this,
                    y = t(l),
                    F = j["null"],
                    g = c.options,
                    x = f(g.altRows) ? !0 : g.altRows,
                    n = x && s % 2 && g.altRowTemplate ? g.altRowTemplate : g.rowTemplate,
                    A = c.columns;
                if (n) G(n) && (n = n.replace(/^\s+/, "").replace(/\s+$/, "")), b = a(h(n, d)), y && l.append(b);
                else {
                    if (b = a("<tr class='" + (x && s % 2 ? "sui-alt-row" : "sui-row") + "'/>"), arguments.length > 3) {
                        var B = arguments[3],
                            D = l.find("tr"),
                            E = D.eq(B);
                        D.length == B ? l.append(b) : b.insertBefore(E)
                    } else y && l.append(b);
                    for (o = 0; o < A.length; o++) {
                        var k, p, m = A[o],
                            r = m.columnTemplate,
                            C = m.format,
                            w = m.field,
                            v = m.buttons,
                            i = a("<td " + ba(m.attributes) + " class='sui-cell' />").appendTo(b);
                        if (v)
                            for (p = 0; p < v.length; p++) c._buildButton(v[p], i, b.get(0).rowIndex);
                        else r ? u(r) ? (k = r.call(c, i, d, s), t(k) && !F(k) && "" !== k && i.html(k)) : i.html(h.call(c, r, d)) : C ? i.html(h.call(c, C, w ? N(d, w) : d)) : i.html("" + N(d, w))
                    }
                }
                return c._hasDetailTemplate() && c._canExpandCollapse() && (z = c.trigger(e, {
                    commandName: ia,
                    cancel: !1,
                    item: d
                }), z.cancel ? q = a("<td class='sui-cell sui-expand-cell-disabled' />") : (q = a("<td class='sui-cell sui-expand-cell' />"), c._setExpandCollapseCellText(q, g.detailExpandText, g.detailCollapseText)), q.prependTo(b)), b
            },
            _renderFooter: function() {
                var f, i, o, b, l, g = this,
                    e = g.columns,
                    k = {},
                    p = j["null"],
                    d = g.dataSource.aggregates;
                for (b = 0; b < e.length; b++)
                    if (i = e[b].footerTemplate) {
                        f = a("<tr class='sui-grid-footer' />").appendTo(g.contentTable.tbody);
                        break
                    }
                if (f) {
                    for (b = 0; b < e.length; b++)
                        if (l = a("<td class='sui-footer-cell' />").appendTo(f), i = e[b].footerTemplate) {
                            o = e[b].field;
                            for (var c = 0; c < d.length; c++) d[c].field == o && (u(d[c].aggregate) ? k.custom = d[c].value : k[d[c].aggregate] = d[c].value);
                            if (u(i)) {
                                var m = i.call(g, l, k);
                                t(m) && !p(m) && "" !== m && l.html(m)
                            } else l.html(h.call(g, i, k))
                        }
                    var n = f.prev();
                    (n.find(".sui-expand-cell").length > 0 || n.find(".sui-expand-cell-disabled").length > 0 || n.find(".sui-indent-cell").length > 0 || n.find(".sui-collapse-cell").length > 0) && f.prepend(a("<td />"))
                }
            },
            _buildButton: function(d, h, j) {
                var k, e = this,
                    g = d.commandName,
                    i = d.click;
                if (b.ui.Button) {
                    var l = a("<button type='button'>" + d.caption + "</button>").appendTo(h);
                    h.addClass("sui-button-cell"), "delete" === g ? (i = e._deleteButtonClicked, f(d.cls) ? d.cls = "sui-delete" : d.cls += " sui-delete") : "edit" === g && (e._editing && (e._editing.type = "row"), e._preventClosingEditors = !0, i = e._editButtonClicked, f(d.cls) ? d.cls = "sui-edit" : d.cls += " sui-edit"), k = new b.ui.Button(l, {
                        cls: d.cls,
                        events: {
                            click: c(i, e, j, h)
                        }
                    }), ("delete" == g || "edit" == g) && (e._buttons || (e._buttons = []), e._buttons.push({
                        index: j,
                        button: k
                    }))
                }
            },
            _deleteButtonClicked: function(b, g) {
                var a = this,
                    d = a.dataSource,
                    c = a.options.editing ? a.options.editing.confirmation : null,
                    f = a.trigger(e, {
                        commandName: U,
                        cancel: !1,
                        rowIndex: b
                    });
                if (!f.cancel) {
                    if (c && c["delete"] && c["delete"].enabled && !v.confirm(h(c["delete"].template, d.view[b]))) return;
                    d.removeAtView(b), a.options.editing && !a.options.editing.batch && d.save(!1), a.trigger(U, {
                        rowIndex: b
                    })
                }
            },
            _editButtonClicked: function(f, c) {
                var b = this,
                    g = b._editing,
                    d = b.dataSource,
                    h = b.trigger(e, {
                        commandName: F,
                        cancel: !1,
                        row: a(c).parent(),
                        cell: c
                    });
                b._editingInProcess = !0, h.cancel || (d.tracker && d.tracker.changes && d.tracker.changes.added && d.tracker.changes.added.length > 0 ? d.cancel() : (b._closeAllEditedRows(), g && g.options.enabled && b._editing._putRowInEditMode(a(b.contentTable.find("tbody > tr")[f])), b._changeEditColumnButtons(f, c)), b.trigger(F, {
                    row: a(c).parent(),
                    cell: c
                }))
            },
            _changeEditColumnButtons: function(c, b) {
                var a = this;
                a._removeButtons(b, c), a._buildButton({
                    caption: "Update",
                    click: a._updateButtonClicked
                }, b, c), a._buildButton({
                    caption: "Cancel",
                    click: a._cancelButtonClicked
                }, b, c), b.addClass("sui-update-buttons")
            },
            _removeButtons: function(c, d) {
                for (var a = this, b = a._buttons.length; b--;) a._buttons[b].index == d && (a._buttons[b].button.destroy(), a._buttons.splice(b, 1));
                c.removeClass("sui-update-buttons").empty()
            },
            _updateButtonClicked: function(b, c) {
                var a = this;
                a.dataSource;
                return a._updateItem(b, c), a._editing._errorDuringEdit ? void(a._editing._errorDuringEdit = !1) : void a._putRowInViewMode(b, c)
            },
            _updateItem: function(k, o) {
                var d, c, g, b, a = this,
                    i = a.dataSource,
                    j = (a.pager, []),
                    l = !0;
                if (i.group && i.group.length > 0)
                    for (var m = a.contentTable.find(".sui-row, .sui-alt-row"), n = a.contentTable.find("tr").get(k), h = 0; h < m.length; h++)
                        if (m[h] == n) {
                            k = h;
                            break
                        }
                d = i.editView(k);
                for (b in d.data) d.data.hasOwnProperty(b) && (null != d.data[b] && (l = !1), a._editing._editors[b] && ("custom" == a._editing._editors[b] ? (g = a.trigger("getCustomEditorValue", {
                    field: b,
                    value: null
                }), c = g.value, a._editing._editors[b] = null) : c = a._editing._editors[b].value ? a._editing._editors[b].value() : a._editing._editors[b].checked ? a._editing._editors[b].checked() : ya, d.data[b] != c && j.push(b), (f(c) || null == c) && (c = a._getDefaultValue(b)), d.set(b, c)));
                return a._editing._errorDuringEdit ? void(j.length = 0) : (a._editing.options.batch || (g = a.trigger(e, {
                    commandName: B,
                    cancel: !1
                }), g.cancel || (i.save(!1), a.trigger(B))), a._populateInsertedItem = l, j)
            },
            _getDefaultValue: function(c) {
                var a, d = this,
                    b = d.dataSource.schema;
                if (b && b.options.fields) switch (b.options.fields[c].type) {
                    case Number:
                        a = 0;
                        break;
                    case Date:
                        a = new Date;
                        break;
                    case String:
                        a = "";
                        break;
                    case Boolean:
                        a = !1
                } else a = "";
                return a
            },
            _closeAllEditedRows: function(c) {
                var d, e, b = this,
                    f = b.contentTable.find(".sui-editable-cell");
                f.length > 0 && (d = f.get(0).parentNode.rowIndex, e = b.contentTable.find(".sui-update-buttons").get(0), b._cancelButtonClicked(d, a(e)), c && c.length > 0 && b._renderUpdateMarkers(c, d))
            },
            _cancelButtonClicked: function(c, d) {
                var b = this,
                    a = b.dataSource,
                    f = b.trigger(e, {
                        commandName: C,
                        cancel: !1,
                        rowIndex: c,
                        cell: d
                    });
                f.cancel || (a.tracker && a.tracker.changes && a.tracker.changes.added && a.tracker.changes.added.length > 0 ? a.cancel() : b._putRowInViewMode(c, d), b.trigger(C))
            },
            _putRowInViewMode: function(d, l) {
                var n, e, f, b, c = this,
                    h = c.dataSource,
                    j = c.contentTable,
                    k = d;
                if (h.group && h.group.length > 0)
                    for (f = j.find(".sui-row, .sui-alt-row"), e = j.find("tr").get(d), b = 0; b < f.length; b++)
                        if (f[b] == e) {
                            k = b;
                            break
                        }
                n = h.editView(k).data, l && c._removeButtons(l, d), e = j.find("tr").get(d);
                var i = parseInt(a(e).attr("data-group-level"), 10);
                for (c._editing._destroyRow(d), e = c._renderRow(k, c.contentTable.tbody, n, d), b = 0; i > b; b++) a("<td class='sui-indent-cell sui-group-intend-cell'/>").prependTo(e);
                if (i && e.attr("data-group-level", i), c._editing.options.batch) {
                    var m = e.find(".sui-cell");
                    if (c._markedCells && c._markedCells[d]) {
                        var g, o, p = c._markedCells[d];
                        for (b = 0; b < p.length; b++) g = p[b], o = a(m[g]).html(), a(m[g]).html("<span class='sui-updated-marker' />" + o)
                    }
                }
            },
            _renderUpdateMarkers: function(f, d) {
                var e, c, g, b = this,
                    h = b.columns,
                    i = b.contentTable.find("tbody > tr").eq(d).find(".sui-cell");
                for (e = 0; e < f.length; e++)
                    for (c = 0; c < h.length; c++) h[c].field === f[e] && (g = a(i[c]).html(), a(i[c]).html("<span class='sui-updated-marker' />" + g), b._markedCells ? (b._markedCells[d] || (b._markedCells[d] = []), b._markedCells[d].push(c)) : (b._markedCells = {}, b._markedCells[d] = [], b._markedCells[d].push(c)))
            },
            _selection: function() {
                var a = this,
                    b = a.options;
                b.selection && (a._selectable = new va(a.headerTable, a.contentTable, b.selection, a))
            },
            _filtering: function() {
                var a = this,
                    b = a.options;
                b.filtering && b.filtering.enabled && (a._filter = new ta(a))
            },
            _paging: function(d) {
                var e, c = this,
                    f = c.element;
                b.ui.Pager && d && (E(d) && d instanceof b.ui.Pager ? (c.pager = d, c.pager.dataSource = c.dataSource, c.pager.element.appendTo(f)) : (e = a("<div />").appendTo(f), e.addClass("sui-pager"), c.pagerWrapper = e, c.pager = new b.ui.Pager(e.get(0), i({}, d, {
                    dataSource: c.dataSource
                }))))
            },
            _reorder: function() {
                var a = this,
                    b = a.options;
                b.columnReorder && (a._columnReorder = new J(a))
            },
            _expandCollapseDetailTemplate: function(d) {
                var b = this,
                    c = a(d.target).closest(".sui-row", b.contentTable);
                c.length || (c = a(d.target).closest(".sui-alt-row", b.contentTable)), b._toggleDetailTemplate(c)
            },
            _toggleDetailTemplate: function(c) {
                var d, b = this,
                    g = b.contentTable.find("tr:first").parent().children().not(".sui-detail-row"),
                    h = z(c[0], g),
                    i = b.dataSource.view,
                    e = c.next(),
                    f = b.options;
                e && e.hasClass("sui-detail-row") ? (e.toggle(), d = a(c.get(0).cells[0]), b._toggleClasses(d, "sui-expand-cell", "sui-collapse-cell"), b._setExpandCollapseCellText(d, f.detailExpandText, f.detailCollapseText)) : b._addDetailTemplate(i[h], c)
            },
            _setExpandCollapseCellText: function(a, d, e) {
                f(e) && (e = "-"), f(d) && (d = "+");
                var b = this.options.detailCollapseCssClass,
                    c = this.options.detailExpandCssClass;
                b = f(b) ? "" : " class = '" + b + "'", c = f(c) ? "" : " class = '" + c + "'", a.hasClass("sui-collapse-cell") ? a.html("<span" + b + ">" + e + "</span>") : a.hasClass("sui-expand-cell") && a.html("<span" + c + ">" + d + "</span>")
            },
            _addDetailTemplate: function(i, c) {
                var j, b = this,
                    d = b.options,
                    f = a("<tr class='sui-detail-row'/>");
                b._canExpandCollapse() && (j = a("<td class='sui-cell sui-indent-cell'/>"), w && j.html("&nbsp;"), j.appendTo(f));
                var g = a('<td class="sui-detail-cell" colspan="' + b.columns.length + '"></td>'),
                    l = b.trigger(e, {
                        commandName: Z,
                        cancel: !1,
                        detailCell: g,
                        item: i
                    });
                if (!l.cancel && (g.appendTo(f), d.detailTemplate && g.html(h(d.detailTemplate, i)), c ? f.insertAfter(c) : f.appendTo(b.contentTable.tbody), b.trigger(Z, {
                        detailCell: g,
                        item: i
                    }), c)) {
                    var k = a(c.get(0).cells[0]);
                    b._toggleClasses(k, "sui-expand-cell", "sui-collapse-cell"), b._setExpandCollapseCellText(k, d.detailExpandText, d.detailCollapseText)
                }
            },
            _toggleClasses: function(a, b, c) {
                a.hasClass(b) ? (a.removeClass(b), a.addClass(c)) : (a.removeClass(c), a.addClass(b))
            },
            _resizing: function() {
                var a = this;
                a.options.resizing && a.options.scrolling && (a._columnResizing = new ca(a))
            },
            _initToolbar: function() {
                var a = this,
                    b = a.options;
                b.toolbar && (a._toolbar = new pa(b.toolbar, a))
            },
            _initEditing: function() {
                var a = this,
                    b = a.options;
                b.editing && (a._buttons = [], a._editing = new za(b.editing, a))
            },
            _refreshOnSort: function() {
                this._sortingInProgress = !0, this.dataSource.read()
            },
            _updateGrid: function() {
                var c = this,
                    d = b.extend([l], c.options, d);
                c.sorting && (c.sorting.destroy(), c.sorting = null), c.headerWrapper.find(".sui-headercell .sui-link").each(function(d, c) {
                    var b = a(c);
                    b.parent().html(b.html())
                }), c.headerWrapper.find('.sui-headercell span[class^="sui-"]').remove(), c._sorting()
            },
            _dsStartHandler: function() {
                this.loading(!0)
            },
            refresh: function(e) {
                var d = this,
                    h = e ? e.dataSource : null;
                e = b.extend([l], d.options, e), h && (e.dataSource = h);
                var f, i = e.scrolling,
                    j = d.pager ? d.pager.options : e.paging,
                    g = 0;
                i && d.contentWrapper && (g = d.contentWrapper.get(0).scrollLeft), d._destroyInternal(), f = d.dataSource = sa.create(e.dataSource), f.on(I, d._dsChange = c(d._renderData, d)), f.on(fa, d._dsStart = c(d._dsStartHandler, d)), d._resolveColumns(e.columns), d._createWrappers(), d._createHeaderTable(), d._createContentTable(), d._initToolbar(), d._initEditing(), d._selection(), d._paging(j), d._resizing(), d._reorder(), d._filtering(), d.pager || d.dataSource.read(), d._sorting(), d._rsNS = ".rs." + d.getInstanceId(), a(v).on(V + d._rsNS, d._resize = c(d._resizeHandler, d)), g && (d.contentWrapper.get(0).scrollLeft = g)
            },
            loading: function(c) {
                var a = this;
                b.ui.LoadingPanel && (c ? (a.loadingPanel || (a.loadingPanel = new b.ui.LoadingPanel(a.element.get(0))), a.loadingPanelTimeout = setTimeout(function() {
                    a.loadingPanel && a.loadingPanel.show()
                }, 50)) : a.loadingPanel && (clearTimeout(a.loadingPanelTimeout), a.loadingPanelTimeout = null, a.loadingPanel.hide()))
            },
            select: function(b) {
                var d = this,
                    c = d._selectable;
                return b = a(b), b.length ? (c.multiple || (c.clear(), b = b.first()), void c.select(b)) : c.value()
            },
            clearSelection: function() {
                this._selectable.clear()
            },
            sort: function(a, b, c) {
                this.sorting && this.sorting._sort(a, b, c)
            },
            _getItemRow: function(a) {
                return oa(a) && (a = this.contentTable.children("tbody").children(".sui-row, .sui-alt-row").get(a)), a
            },
            expandRow: function(e) {
                var b = this,
                    c = a(b._getItemRow(e)),
                    d = c.next();
                d.hasClass("sui-detail-row") ? "none" == d.css("display") && b._toggleDetailTemplate(c) : b._toggleDetailTemplate(c)
            },
            collapseRow: function(e) {
                var c = this,
                    b = a(c._getItemRow(e)),
                    d = b.next();
                d.hasClass("sui-detail-row") ? "none" != d.css("display") && c._toggleDetailTemplate(b) : (c._toggleDetailTemplate(b), b.next().toggle())
            },
            reorderColumn: function(b, c) {
                var d, e = this,
                    f = e.element,
                    g = e.columns,
                    h = e.options.columns || [],
                    k = e.headerWrapper,
                    i = "before",
                    j = k.find(".sui-indent-cell").length;
                if (b = +b, c = +c, isNaN(b) || isNaN(c) || 0 > b || 0 > c || b > g.length - 1 || c > g.length - 1) throw new Error("Invalid index in column reorder.");
                b !== c && (c > b && (i = "after"), d = g.splice(b, 1)[0], g.splice(c, 0, d), d = h.splice(b, 1)[0], h.splice(c, 0, d), b += j, c += j, f.find(".sui-gridheader col:nth-child(" + (b + 1) + ")").add(f.find(".sui-gridheader .sui-columnheader th:nth-child(" + (b + 1) + ")")).add(f.find(".sui-gridcontent col:nth-child(" + (b + 1) + ")")).add(f.find(".sui-gridcontent tr:not(.sui-detail-row) td:nth-child(" + (b + 1) + ")")).each(function() {
                    a(this).parent().children().eq(c)[i](this)
                }))
            },
            addRow: function(a) {
                return this.dataSource.add(t(a) ? a : {})
            },
            insertRow: function(b, a) {
                return this.dataSource.insertView(b, t(a) ? a : {})
            },
            saveChanges: function() {
                this.dataSource.save()
            },
            revertChanges: function() {
                this.dataSource.cancel()
            },
            dataItem: function(a) {
                return this.dataSource.view[a]
            },
            editCell: function(b, c) {
                var a = this,
                    d = a.contentTable.find("tbody > tr").eq(b).find("td").eq(c).get(0);
                a._editingInProcess = !0, a._editing._putCellInEditMode(d, b)
            },
            editRow: function(c) {
                var b = this,
                    d = b.contentTable.find("tbody > tr").eq(c).get(0);
                b._editingInProcess = !0, b._editing._putRowInEditMode(a(d), 0)
            },
            cancelEditing: function() {
                var c, d, b = this,
                    e = b.contentTable.find(".sui-editable-cell");
                e.length > 0 && (c = e.get(0).parentNode.rowIndex, d = b.contentTable.find(".sui-update-buttons").get(0), b._putRowInViewMode(c, a(d)))
            },
            deleteRow: function(a) {
                this.dataSource.removeAtView(a)
            },
            filter: function() {
                var c = this,
                    a = c.dataSource,
                    b = [].slice.call(arguments);
                return b.length > 0 ? (a.filter = b[0], void a.read()) : a.filter
            },
            group: function(b, f, c, d) {
                var a = this,
                    e = a.dataSource.group;
                e ? e.splice(f, 0, {
                    field: b,
                    order: c,
                    aggregates: d
                }) : (a.dataSource.group = [], a.dataSource.group.push({
                    field: b,
                    order: c,
                    aggregates: d
                }))
            },
            ungroup: function(d) {
                var a = this,
                    b = a.dataSource.group;
                a.headerTable.thead.find(".sui-columnheader > .sui-indent-cell").remove();
                for (var c = 0; c < b.length; c++) b[c].field == d && (b.splice(c, 1), 0 === b.length && (a.dataSource.group = null), a.dataSource.read())
            },
            collapseGroup: function(a) {
                for (var b = !0, c = parseInt(a.attr("data-group-level"), 10); b;)
                    if (a = a.next().css("display", "none"), a.next().length > 0) {
                        var d = parseInt(a.next().attr("data-group-level"), 10);
                        c >= d && a.next().hasClass("sui-group-header") && (b = !1)
                    } else b = !1
            },
            expandGroup: function(a) {
                for (var b = !0, c = parseInt(a.attr("data-group-level"), 10); b;) {
                    if (a = a.next().css("display", ""), a.hasClass("sui-group-header") && a.find(".sui-expand").length > 0) return;
                    if (a.next().length > 0) {
                        var d = parseInt(a.next().attr("data-group-level"), 10);
                        c >= d && a.next().hasClass("sui-group-header") && (b = !1)
                    } else b = !1
                }
            }
        });
    T.defaults = P, b.ui.plugin("Grid", T)
}(jQuery, shield, this);