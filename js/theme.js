jQuery(document).ready(function(e) {
        "use strict";
        var t = e("#awardslisting");
        t.imagesLoaded(function() {
            t.isotope({
                layoutMode: "vertical",
                itemSelector: ".award-listings__grid"
            })
        }), e("#awardsfilters").on("click", "a", function(i) {
            i.preventDefault();
            var n = "." + e(this).attr("data-filter");
            t.isotope({
                filter: n
            }), e(this).siblings().removeClass("inactive active").addClass("inactive"), e(this).removeClass("inactive active").addClass("active")
        })
    }),
    function(e, t) {
        function i(e, t) {
            var i = e.createElement("p"),
                n = e.getElementsByTagName("head")[0] || e.documentElement;
            return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
        }

        function n() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var i = b.elements;
            "string" != typeof i && (i = i.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = i + " " + e, u(t)
        }

        function r(e) {
            var t = v[e[g]];
            return t || (t = {}, y++, e[g] = y, v[y] = t), t
        }

        function s(e, i, n) {
            if (i || (i = t), d) return i.createElement(e);
            n || (n = r(i));
            var o;
            return o = n.cache[e] ? n.cache[e].cloneNode() : m.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e), !o.canHaveChildren || h.test(e) || o.tagUrn ? o : n.frag.appendChild(o)
        }

        function a(e, i) {
            if (e || (e = t), d) return e.createDocumentFragment();
            i = i || r(e);
            for (var o = i.frag.cloneNode(), s = 0, a = n(), l = a.length; s < l; s++) o.createElement(a[s]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(i) {
                return b.shivMethods ? s(i, e, t) : t.createElem(i)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }

        function u(e) {
            e || (e = t);
            var n = r(e);
            return !b.shivCSS || c || n.hasCSS || (n.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || l(e, n), e
        }
        var c, d, p = "3.7.3",
            f = e.html5 || {},
            h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            y = 0,
            v = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, d = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (e) {
                c = !0, d = !0
            }
        }();
        var b = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: p,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: s,
            createDocumentFragment: a,
            addElements: o
        };
        e.html5 = b, u(t), "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof window ? window : this, document),
    function() {
        "use strict";
        jQuery.fn.bgGrab = function(e) {
            return jQuery(this).each(function() {
                e = jQuery.extend({
                    selector: "> img:first-child"
                }, e);
                var t = jQuery(this).find(e.selector).attr("src");
                jQuery(this).css({
                    background: "url(" + t + ") no-repeat center center",
                    backgroundSize: "cover"
                }), jQuery(this).find(e.selector).remove()
            }), this
        }
    }(),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(t, i, n) {
            var o = i.hash.slice(1),
                r = document.getElementById(o) || document.getElementsByName(o)[0];
            if (r) {
                t && t.preventDefault();
                var s = e(n.target);
                if (!(n.lock && s.is(":animated") || n.onBefore && n.onBefore(t, r, s) === !1)) {
                    if (n.stop && s.stop(!0), n.hash) {
                        var a = r.id === o ? "id" : "name",
                            l = e("<a> </a>").attr(a, o).css({
                                position: "absolute",
                                top: e(window).scrollTop(),
                                left: e(window).scrollLeft()
                            });
                        r[a] = "", e("body").prepend(l), location.hash = i.hash, l.remove(), r[a] = o
                    }
                    s.scrollTo(r, n).trigger("notify.serialScroll", [r])
                }
            }
        }
        var i = location.href.replace(/#.*/, ""),
            n = e.localScroll = function(t) {
                e("body").localScroll(t)
            };
        return n.defaults = {
            duration: 1e3,
            axis: "y",
            event: "click",
            stop: !0,
            target: window
        }, e.fn.localScroll = function(o) {
            function r() {
                return !!this.href && !!this.hash && this.href.replace(this.hash, "") === i && (!o.filter || e(this).is(o.filter))
            }
            return o = e.extend({}, n.defaults, o), o.hash && location.hash && (o.target && window.scrollTo(0, 0), t(0, location, o)), o.lazy ? this.on(o.event, "a,area", function(e) {
                r.call(this) && t(e, this, o)
            }) : this.find("a,area").filter(r).bind(o.event, function(e) {
                t(e, this, o)
            }).end().end()
        }, n.hash = function() {}, n
    }),
    function() {
        "use strict";
        jQuery.fn.fullHeight = function(e) {
            e = jQuery.extend({
                match: window,
                ratio: 1
            }, e);
            var t, i = jQuery(window).height(),
                n = this;
            return jQuery(this).each(function() {
                jQuery(this).data("full-height") && (e.ratio = jQuery(this).data("full-height")), i *= parseFloat(e.ratio), jQuery(this).height(i)
            }), jQuery(window).resize(function() {
                clearTimeout(t), t = setTimeout(function() {
                    jQuery(n).fullHeight(e)
                }, 100)
            }), jQuery(window).load(function() {
                jQuery(n).fullHeight(e)
            }), this
        }
    }(),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
    }(window, function() {
        "use strict";
        var e = function() {
            var e = Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
                var n = t[i],
                    o = n + "MatchesSelector";
                if (e[o]) return o
            }
        }();
        return function(t, i) {
            return t[e](i)
        }
    }),
    function() {
        "use strict";
        jQuery.fn.gMap = function(e) {
            function t() {
                return "object" == typeof google && "object" == typeof google.maps && jQuery("#async-maps-api").length
            }

            function i() {
                if (t()) return window.gMapsLoaded();
                var e = "";
                jQuery('<script type="text/javascript" id="async-maps-api" src="' + e + '" />').prependTo("body")
            }
            e = jQuery.extend({
                /*latLng: {
                    lat: 23.0709539,
                    lng: 72.5208034
                },*/
				label: "We're here",
                scrollable: !1,
                scrollwheel: !1
            }, e);
            var n = this;
            return window.gMapsLoaded = function() {
                jQuery(n).gMap(e)
            }, !!jQuery(this).length && (t() ? jQuery(this).each(function() {
                var t = new google.maps.Map(this, {
                        zoom: 14,
                        center: e.latLng,
                        draggable: !1,
                        scrollable: !1,
                        scrollwheel: !1
                    }),
                    i = new google.maps.Marker({
                        position: e.latLng,
                        map: t,
                        title: e.label
                    });
                jQuery(this).data("map") && "" !== jQuery(this).data("map") && (e.address = jQuery(this).data("map")), void 0 !== e.address && (new google.maps.Geocoder).geocode({
                    address: e.address
                }, function(e, n) {
                    n === google.maps.GeocoderStatus.OK && (i.setPosition(e[0].geometry.location), t.setCenter(e[0].geometry.location))
                })
            }) : i(), this)
        }
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
    }("undefined" != typeof window ? window : this, function() {
        "use strict";

        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var i = this._events = this._events || {},
                    n = i[e] = i[e] || [];
                return n.indexOf(t) == -1 && n.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[e] = i[e] || {};
                return n[t] = !0, this
            }
        }, t.off = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return n != -1 && i.splice(n, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                    var s = r && r[o];
                    s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n]
                }
                return this
            }
        }, e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["desandro-matches-selector/matches-selector"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
    }(window, function(e, t) {
        "use strict";
        var i = {};
        i.extend = function(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }, i.modulo = function(e, t) {
            return (e % t + t) % t
        }, i.makeArray = function(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }, i.removeFrom = function(e, t) {
            var i = e.indexOf(t);
            i != -1 && e.splice(i, 1)
        }, i.getParent = function(e, i) {
            for (; e != document.body;)
                if (e = e.parentNode, t(e, i)) return e
        }, i.getQueryElement = function(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        }, i.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, i.filterFindElements = function(e, n) {
            e = i.makeArray(e);
            var o = [];
            return e.forEach(function(e) {
                if (e instanceof HTMLElement) {
                    if (!n) return void o.push(e);
                    t(e, n) && o.push(e);
                    for (var i = e.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                }
            }), o
        }, i.debounceMethod = function(e, t, i) {
            var n = e.prototype[t],
                o = t + "Timeout";
            e.prototype[t] = function() {
                var e = this[o];
                e && clearTimeout(e);
                var t = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, t), delete r[o]
                }, i || 100)
            }
        }, i.docReady = function(e) {
            var t = document.readyState;
            "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
        }, i.toDashed = function(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, i) {
                return t + "-" + i
            }).toLowerCase()
        };
        var n = e.console;
        return i.htmlInit = function(t, o) {
            i.docReady(function() {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + r),
                    u = i.makeArray(a).concat(i.makeArray(l)),
                    c = s + "-options",
                    d = e.jQuery;
                u.forEach(function(e) {
                    var i, r = e.getAttribute(s) || e.getAttribute(c);
                    try {
                        i = r && JSON.parse(r)
                    } catch (t) {
                        return void(n && n.error("Error parsing " + s + " on " + e.className + ": " + t))
                    }
                    var a = new t(e, i);
                    d && d.data(e, o, a)
                })
            })
        }, i
    }),
    function() {
        "use strict";
        jQuery.fn.stickyPlaceholder = function() {
            var e = jQuery(this).find("input:not(:disabled)").val(),
                t = this;
            return jQuery(this).find("select:not(:disabled):not(.disabled)").length && (e = jQuery(this).find("option:selected").val()), e ? jQuery(this).addClass("sticky-placeholder--has-value") : jQuery(this).removeClass("sticky-placeholder--has-value"), jQuery(window).load(function() {
                jQuery(t).stickyPlaceholder()
            }), jQuery(this).find(":input").on("change", function() {
                jQuery(t).stickyPlaceholder()
            }), this
        }
    }(),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(function() {
            return t()
        }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
    }(window, function() {
        "use strict";

        function e(e) {
            var t = parseFloat(e),
                i = e.indexOf("%") == -1 && !isNaN(t);
            return i && t
        }

        function t() {}

        function i() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0; t < u; t++) {
                var i = l[t];
                e[i] = 0
            }
            return e
        }

        function n(e) {
            var t = getComputedStyle(e);
            return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See"), t
        }

        function o() {
            if (!c) {
                c = !0;
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = n(t);
                r.isBoxSizeOuter = s = 200 == e(o.width), i.removeChild(t)
            }
        }

        function r(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var r = n(t);
                if ("none" == r.display) return i();
                var a = {};
                a.width = t.offsetWidth, a.height = t.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == r.boxSizing, d = 0; d < u; d++) {
                    var p = l[d],
                        f = r[p],
                        h = parseFloat(f);
                    a[p] = isNaN(h) ? 0 : h
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    x = a.borderTopWidth + a.borderBottomWidth,
                    w = c && s,
                    S = e(r.width);
                S !== !1 && (a.width = S + (w ? 0 : m + b));
                var k = e(r.height);
                return k !== !1 && (a.height = k + (w ? 0 : g + x)), a.innerWidth = a.width - (m + b), a.innerHeight = a.height - (g + x), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
            }
        }
        var s, a = "undefined" == typeof console ? t : function(e) {
                console.error(e)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = l.length,
            c = !1;
        return r
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unipointer = t(e, e.EvEmitter)
    }(window, function(e, t) {
        "use strict";

        function i() {}

        function n() {}
        var o = n.prototype = Object.create(t.prototype);
        o.bindStartEvent = function(e) {
            this._bindStartEvent(e, !0)
        }, o.unbindStartEvent = function(e) {
            this._bindStartEvent(e, !1)
        }, o._bindStartEvent = function(t, i) {
            i = void 0 === i || !!i;
            var n = i ? "addEventListener" : "removeEventListener";
            e.navigator.pointerEnabled ? t[n]("pointerdown", this) : e.navigator.msPointerEnabled ? t[n]("MSPointerDown", this) : (t[n]("mousedown", this), t[n]("touchstart", this))
        }, o.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, o.getTouch = function(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                if (i.identifier == this.pointerIdentifier) return i
            }
        }, o.onmousedown = function(e) {
            var t = e.button;
            t && 0 !== t && 1 !== t || this._pointerDown(e, e)
        }, o.ontouchstart = function(e) {
            this._pointerDown(e, e.changedTouches[0])
        }, o.onMSPointerDown = o.onpointerdown = function(e) {
            this._pointerDown(e, e)
        }, o._pointerDown = function(e, t) {
            this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t))
        }, o.pointerDown = function(e, t) {
            this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
        };
        var r = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        };
        return o._bindPostStartEvents = function(t) {
            if (t) {
                var i = r[t.type];
                i.forEach(function(t) {
                    e.addEventListener(t, this)
                }, this), this._boundPointerEvents = i
            }
        }, o._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
                e.removeEventListener(t, this)
            }, this), delete this._boundPointerEvents)
        }, o.onmousemove = function(e) {
            this._pointerMove(e, e)
        }, o.onMSPointerMove = o.onpointermove = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
        }, o.ontouchmove = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerMove(e, t)
        }, o._pointerMove = function(e, t) {
            this.pointerMove(e, t)
        }, o.pointerMove = function(e, t) {
            this.emitEvent("pointerMove", [e, t])
        }, o.onmouseup = function(e) {
            this._pointerUp(e, e)
        }, o.onMSPointerUp = o.onpointerup = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
        }, o.ontouchend = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerUp(e, t)
        }, o._pointerUp = function(e, t) {
            this._pointerDone(), this.pointerUp(e, t)
        }, o.pointerUp = function(e, t) {
            this.emitEvent("pointerUp", [e, t])
        }, o._pointerDone = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, o.pointerDone = i, o.onMSPointerCancel = o.onpointercancel = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
        }, o.ontouchcancel = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerCancel(e, t)
        }, o._pointerCancel = function(e, t) {
            this._pointerDone(), this.pointerCancel(e, t)
        }, o.pointerCancel = function(e, t) {
            this.emitEvent("pointerCancel", [e, t])
        }, n.getPointerPoint = function(e) {
            return {
                x: e.pageX,
                y: e.pageY
            }
        }, n
    }),
    function() {
        "use strict";

        function e(e, t, i, n) {
            jQuery(n).removeClass(function() {
                return (jQuery(this).attr("class").match(/(^|\s)waypoint-\S+/g) || []).join(" ")
            }), jQuery(n).addClass("waypoint-enabled"), jQuery(n).addClass("waypoint-triggered"), "up" === e && "bottom" === t && "top" === i || "down" === e && "top" === t && "bottom" === i || (jQuery(n).addClass("waypoint-visible"), jQuery(n).addClass("waypoint-" + e), jQuery(n).addClass("waypoint-window-" + t), jQuery(n).addClass("waypoint-element-" + i))
        }
        jQuery.fn.waypointClasses = function() {
            return jQuery(this).addClass("waypoint-enabled"), jQuery(".waypoint-enabled").waypoint({
                handler: function(t) {
                    e(t, "top", "top", this.element)
                }
            }), jQuery(".waypoint-enabled").waypoint({
                offset: function() {
                    return -this.element.clientHeight
                },
                handler: function(t) {
                    e(t, "top", "bottom", this.element)
                }
            }), jQuery(".waypoint-enabled").waypoint({
                offset: "100%",
                handler: function(t) {
                    e(t, "bottom", "top", this.element)
                }
            }), jQuery(".waypoint-enabled").waypoint({
                offset: "bottom-in-view",
                handler: function(t) {
                    e(t, "bottom", "bottom", this.element)
                }
            }), this
        }
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["unipointer/unipointer"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("unipointer")) : e.TapListener = t(e, e.Unipointer)
    }(window, function(e, t) {
        "use strict";

        function i(e) {
            this.bindTap(e)
        }
        var n = i.prototype = Object.create(t.prototype);
        return n.bindTap = function(e) {
            e && (this.unbindTap(), this.tapElement = e, this._bindStartEvent(e, !0))
        }, n.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        }, n.pointerUp = function(i, n) {
            if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
                var o = t.getPointerPoint(n),
                    r = this.tapElement.getBoundingClientRect(),
                    s = e.pageXOffset,
                    a = e.pageYOffset,
                    l = o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a;
                if (l && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
                    this.isIgnoringMouseUp = !0;
                    var u = this;
                    setTimeout(function() {
                        delete u.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, n.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, i
    }), jQuery(document).ready(function(e) {
        "use strict";
        e("a.menu-link").on("click", function(t) {
            t.preventDefault();
            var i = e(this).data("link");
            e("body").toggleClass("is-active"), e("div" + i).toggleClass("is-active")
        }), e(".menu-item-has-children").on("click", function() {
            e(this).toggleClass("sub-menu__show-menu"), e(this).find(".sub-menu").toggleClass("sub-menu__visible")
        }), e("a.main-header__close-link").on("click", function(t) {
            t.preventDefault();
            var i = e(this).data("link");
            e("body").toggleClass("is-active"), e("div" + i).toggleClass("is-active")
        }), e(window).scroll(function() {
            e(window).scrollTop() > 145 ? (e(".main-header").addClass("main-header__scrolled"), e("body").addClass("scrolled")) : (e(".main-header").removeClass("main-header__scrolled"), e("body").removeClass("scrolled"))
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["unipointer/unipointer"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("unipointer")) : e.Unidragger = t(e, e.Unipointer)
    }(window, function(e, t) {
        "use strict";

        function i() {}

        function n() {}
        var o = n.prototype = Object.create(t.prototype);
        o.bindHandles = function() {
            this._bindHandles(!0)
        }, o.unbindHandles = function() {
            this._bindHandles(!1)
        };
        var r = e.navigator;
        return o._bindHandles = function(e) {
            e = void 0 === e || !!e;
            var t;
            t = r.pointerEnabled ? function(t) {
                t.style.touchAction = e ? "none" : ""
            } : r.msPointerEnabled ? function(t) {
                t.style.msTouchAction = e ? "none" : ""
            } : i;
            for (var n = e ? "addEventListener" : "removeEventListener", o = 0; o < this.handles.length; o++) {
                var s = this.handles[o];
                this._bindStartEvent(s, e), t(s), s[n]("click", this)
            }
        }, o.pointerDown = function(e, t) {
            if ("INPUT" == e.target.nodeName && "range" == e.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(e, t);
            var i = document.activeElement;
            i && i.blur && i.blur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
        }, o._dragPointerDown = function(e, i) {
            this.pointerDownPoint = t.getPointerPoint(i);
            var n = this.canPreventDefaultOnPointerDown(e, i);
            n && e.preventDefault()
        }, o.canPreventDefaultOnPointerDown = function(e) {
            return "SELECT" != e.target.nodeName
        }, o.pointerMove = function(e, t) {
            var i = this._dragPointerMove(e, t);
            this.emitEvent("pointerMove", [e, t, i]), this._dragMove(e, t, i)
        }, o._dragPointerMove = function(e, i) {
            var n = t.getPointerPoint(i),
                o = {
                    x: n.x - this.pointerDownPoint.x,
                    y: n.y - this.pointerDownPoint.y
                };
            return !this.isDragging && this.hasDragStarted(o) && this._dragStart(e, i), o
        }, o.hasDragStarted = function(e) {
            return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
        }, o.pointerUp = function(e, t) {
            this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t)
        }, o._dragPointerUp = function(e, t) {
            this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
        }, o._dragStart = function(e, i) {
            this.isDragging = !0, this.dragStartPoint = t.getPointerPoint(i), this.isPreventingClicks = !0, this.dragStart(e, i)
        }, o.dragStart = function(e, t) {
            this.emitEvent("dragStart", [e, t])
        }, o._dragMove = function(e, t, i) {
            this.isDragging && this.dragMove(e, t, i)
        }, o.dragMove = function(e, t, i) {
            e.preventDefault(), this.emitEvent("dragMove", [e, t, i])
        }, o._dragEnd = function(e, t) {
            this.isDragging = !1, setTimeout(function() {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(e, t)
        }, o.dragEnd = function(e, t) {
            this.emitEvent("dragEnd", [e, t])
        }, o.onclick = function(e) {
            this.isPreventingClicks && e.preventDefault()
        }, o._staticClick = function(e, t) {
            if (!this.isIgnoringMouseUp || "mouseup" != e.type) {
                var i = e.target.nodeName;
                "INPUT" != i && "TEXTAREA" != i || e.target.focus(), this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                    delete this.isIgnoringMouseUp
                }.bind(this), 400))
            }
        }, o.staticClick = function(e, t) {
            this.emitEvent("staticClick", [e, t])
        }, n.getPointerPoint = t.getPointerPoint, n
    }), jQuery(document).ready(function(e) {
        "use strict";
        e(window).scroll(function() {
            e(window).scrollTop() > 545 ? e("#scrolltop").addClass("is-visible") : e("#scrolltop").removeClass("is-visible")
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
    }(window, function(e, t) {
        "use strict";

        function i(i, r, a) {
            function l(e, t, n) {
                var o, r = "$()." + i + '("' + t + '")';
                return e.each(function(e, l) {
                    var u = a.data(l, i);
                    if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                    var c = u[t];
                    if (!c || "_" == t.charAt(0)) return void s(r + " is not a valid method");
                    var d = c.apply(u, n);
                    o = void 0 === o ? d : o
                }), void 0 !== o ? o : e
            }

            function u(e, t) {
                e.each(function(e, n) {
                    var o = a.data(n, i);
                    o ? (o.option(t), o._init()) : (o = new r(n, t), a.data(n, i, o))
                })
            }
            a = a || t || e.jQuery, a && (r.prototype.option || (r.prototype.option = function(e) {
                a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
            }), a.fn[i] = function(e) {
                if ("string" == typeof e) {
                    var t = o.call(arguments, 1);
                    return l(this, e, t)
                }
                return u(this, e), this
            }, n(a))
        }

        function n(e) {
            !e || e && e.bridget || (e.bridget = i)
        }
        var o = Array.prototype.slice,
            r = e.console,
            s = "undefined" == typeof r ? function() {} : function(e) {
                r.error(e)
            };
        return n(t || e.jQuery), i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
    }("undefined" != typeof window ? window : this, function() {
        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var i = this._events = this._events || {},
                    n = i[e] = i[e] || [];
                return n.indexOf(t) == -1 && n.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[e] = i[e] || {};
                return n[t] = !0, this
            }
        }, t.off = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return n != -1 && i.splice(n, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                    var s = r && r[o];
                    s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n]
                }
                return this
            }
        }, e
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return t()
        }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
    }(window, function() {
        "use strict";

        function e(e) {
            var t = parseFloat(e),
                i = e.indexOf("%") == -1 && !isNaN(t);
            return i && t
        }

        function t() {}

        function i() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0; t < u; t++) {
                var i = l[t];
                e[i] = 0
            }
            return e
        }

        function n(e) {
            var t = getComputedStyle(e);
            return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See"), t
        }

        function o() {
            if (!c) {
                c = !0;
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = n(t);
                r.isBoxSizeOuter = s = 200 == e(o.width), i.removeChild(t)
            }
        }

        function r(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var r = n(t);
                if ("none" == r.display) return i();
                var a = {};
                a.width = t.offsetWidth, a.height = t.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == r.boxSizing, d = 0; d < u; d++) {
                    var p = l[d],
                        f = r[p],
                        h = parseFloat(f);
                    a[p] = isNaN(h) ? 0 : h
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    x = a.borderTopWidth + a.borderBottomWidth,
                    w = c && s,
                    S = e(r.width);
                S !== !1 && (a.width = S + (w ? 0 : m + b));
                var k = e(r.height);
                return k !== !1 && (a.height = k + (w ? 0 : g + x)), a.innerWidth = a.width - (m + b), a.innerHeight = a.height - (g + x), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
            }
        }
        var s, a = "undefined" == typeof console ? t : function(e) {
                console.error(e)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = l.length,
            c = !1;
        return r
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
    }(window, function() {
        "use strict";
        var e = function() {
            var e = Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
                var n = t[i],
                    o = n + "MatchesSelector";
                if (e[o]) return o
            }
        }();
        return function(t, i) {
            return t[e](i)
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
    }(window, function(e, t) {
        var i = {};
        i.extend = function(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }, i.modulo = function(e, t) {
            return (e % t + t) % t
        }, i.makeArray = function(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }, i.removeFrom = function(e, t) {
            var i = e.indexOf(t);
            i != -1 && e.splice(i, 1)
        }, i.getParent = function(e, i) {
            for (; e != document.body;)
                if (e = e.parentNode, t(e, i)) return e
        }, i.getQueryElement = function(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        }, i.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, i.filterFindElements = function(e, n) {
            e = i.makeArray(e);
            var o = [];
            return e.forEach(function(e) {
                if (e instanceof HTMLElement) {
                    if (!n) return void o.push(e);
                    t(e, n) && o.push(e);
                    for (var i = e.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                }
            }), o
        }, i.debounceMethod = function(e, t, i) {
            var n = e.prototype[t],
                o = t + "Timeout";
            e.prototype[t] = function() {
                var e = this[o];
                e && clearTimeout(e);
                var t = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, t), delete r[o]
                }, i || 100)
            }
        }, i.docReady = function(e) {
            var t = document.readyState;
            "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
        }, i.toDashed = function(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, i) {
                return t + "-" + i
            }).toLowerCase()
        };
        var n = e.console;
        return i.htmlInit = function(t, o) {
            i.docReady(function() {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + r),
                    u = i.makeArray(a).concat(i.makeArray(l)),
                    c = s + "-options",
                    d = e.jQuery;
                u.forEach(function(e) {
                    var i, r = e.getAttribute(s) || e.getAttribute(c);
                    try {
                        i = r && JSON.parse(r)
                    } catch (t) {
                        return void(n && n.error("Error parsing " + s + " on " + e.className + ": " + t))
                    }
                    var a = new t(e, i);
                    d && d.data(e, o, a)
                })
            })
        }, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = t(e, e.getSize))
    }(window, function(e, t) {
        function i(e, t) {
            this.element = e, this.parent = t, this.create()
        }
        var n = i.prototype;
        return n.create = function() {
            this.element.style.position = "absolute", this.x = 0, this.shift = 0
        }, n.destroy = function() {
            this.element.style.position = "";
            var e = this.parent.originSide;
            this.element.style[e] = ""
        }, n.getSize = function() {
            this.size = t(this.element)
        }, n.setPosition = function(e) {
            this.x = e, this.updateTarget(), this.renderPosition(e)
        }, n.updateTarget = n.setDefaultTarget = function() {
            var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign
        }, n.renderPosition = function(e) {
            var t = this.parent.originSide;
            this.element.style[t] = this.parent.getPositionValue(e)
        }, n.wrapShift = function(e) {
            this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e)
        }, n.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/slide", t) : "object" == typeof module && module.exports ? module.exports = t() : (e.Flickity = e.Flickity || {}, e.Flickity.Slide = t())
    }(window, function() {
        "use strict";

        function e(e) {
            this.parent = e, this.isOriginLeft = "left" == e.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var t = e.prototype;
        return t.addCell = function(e) {
            if (this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = e.x;
                var t = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = e.size[t]
            }
        }, t.updateTarget = function() {
            var e = this.isOriginLeft ? "marginRight" : "marginLeft",
                t = this.getLastCell(),
                i = t ? t.size[e] : 0,
                n = this.outerWidth - (this.firstMargin + i);
            this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }, t.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, t.select = function() {
            this.changeSelectedClass("add")
        }, t.unselect = function() {
            this.changeSelectedClass("remove")
        }, t.changeSelectedClass = function(e) {
            this.cells.forEach(function(t) {
                t.element.classList[e]("is-selected")
            })
        }, t.getCellElements = function() {
            return this.cells.map(function(e) {
                return e.element
            })
        }, e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = t(e, e.fizzyUIUtils))
    }(window, function(e, t) {
        var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
            n = 0;
        i || (i = function(e) {
            var t = (new Date).getTime(),
                i = Math.max(0, 16 - (t - n)),
                o = setTimeout(e, i);
            return n = t + i, o
        });
        var o = {};
        o.startAnimation = function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        }, o.animate = function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var e = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating) {
                var t = this;
                i(function() {
                    t.animate()
                })
            }
        };
        var r = function() {
            var e = document.documentElement.style;
            return "string" == typeof e.transform ? "transform" : "WebkitTransform"
        }();
        return o.positionSlider = function() {
            var e = this.x;
            this.options.wrapAround && this.cells.length > 1 && (e = t.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), e += this.cursorPosition, e = this.options.rightToLeft && r ? -e : e;
            var i = this.getPositionValue(e);
            this.slider.style[r] = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
            var n = this.slides[0];
            if (n) {
                var o = -this.x - n.target,
                    s = o / this.slidesWidth;
                this.dispatchEvent("scroll", null, [s, o])
            }
        }, o.positionSliderAtSelected = function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.positionSlider())
        }, o.getPositionValue = function(e) {
            return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px"
        }, o.settle = function(e) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle"))
        }, o.shiftWrapCells = function(e) {
            var t = this.cursorPosition + e;
            this._shiftCells(this.beforeShiftCells, t, -1);
            var i = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        }, o._shiftCells = function(e, t, i) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n],
                    r = t > 0 ? i : 0;
                o.wrapShift(r), t -= o.size.outerWidth
            }
        }, o._unshiftCells = function(e) {
            if (e && e.length)
                for (var t = 0; t < e.length; t++) e[t].wrapShift(0)
        }, o.integratePhysics = function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        }, o.applyForce = function(e) {
            this.velocity += e
        }, o.getFrictionFactor = function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, o.getRestingPosition = function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, o.applyDragForce = function() {
            if (this.isPointerDown) {
                var e = this.dragX - this.x,
                    t = e - this.velocity;
                this.applyForce(t)
            }
        }, o.applySelectedAttraction = function() {
            if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
                var e = this.selectedSlide.target * -1 - this.x,
                    t = e * this.options.selectedAttraction;
                this.applyForce(t)
            }
        }, o
    }),
    function(e, t) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, o, r, s, a) {
            return t(e, i, n, o, r, s, a)
        });
        else if ("object" == typeof module && module.exports) module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
        else {
            var i = e.Flickity;
            e.Flickity = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
        }
    }(window, function(e, t, i, n, o, r, s) {
        function a(e, t) {
            for (e = n.makeArray(e); e.length;) t.appendChild(e.shift())
        }

        function l(e, t) {
            var i = n.getQueryElement(e);
            if (!i) return void(d && d.error("Bad element for Flickity: " + (i || e)));
            if (this.element = i, this.element.flickityGUID) {
                var o = f[this.element.flickityGUID];
                return o.option(t), o
            }
            u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t), this._create()
        }
        var u = e.jQuery,
            c = e.getComputedStyle,
            d = e.console,
            p = 0,
            f = {};
        l.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, l.createMethods = [];
        var h = l.prototype;
        n.extend(h, t.prototype), h._create = function() {
            var t = this.guid = ++p;
            this.element.flickityGUID = t, f[t] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this), l.createMethods.forEach(function(e) {
                this[e]()
            }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
        }, h.option = function(e) {
            n.extend(this.options, e)
        }, h.activate = function() {
            if (!this.isActive) {
                this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
                var e = this._filterFindCellElements(this.element.children);
                a(e, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");
                var t, i = this.options.initialIndex;
                t = this.isInitActivated ? this.selectedIndex : void 0 !== i && this.cells[i] ? i : 0, this.select(t, !1, !0), this.isInitActivated = !0
            }
        }, h._createSlider = function() {
            var e = document.createElement("div");
            e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e
        }, h._filterFindCellElements = function(e) {
            return n.filterFindElements(e, this.options.cellSelector)
        }, h.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, h._makeCells = function(e) {
            var t = this._filterFindCellElements(e),
                i = t.map(function(e) {
                    return new o(e, this)
                }, this);
            return i
        }, h.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, h.getLastSlide = function() {
            return this.slides[this.slides.length - 1]
        }, h.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, h._positionCells = function(e) {
            e = e || 0, this.maxCellHeight = e ? this.maxCellHeight || 0 : 0;
            var t = 0;
            if (e > 0) {
                var i = this.cells[e - 1];
                t = i.x + i.size.outerWidth
            }
            for (var n = this.cells.length, o = e; o < n; o++) {
                var r = this.cells[o];
                r.setPosition(t), t += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
        }, h._sizeCells = function(e) {
            e.forEach(function(e) {
                e.getSize()
            })
        }, h.updateSlides = function() {
            if (this.slides = [], this.cells.length) {
                var e = new r(this);
                this.slides.push(e);
                var t = "left" == this.originSide,
                    i = t ? "marginRight" : "marginLeft",
                    n = this._getCanCellFit();
                this.cells.forEach(function(t, o) {
                    if (!e.cells.length) return void e.addCell(t);
                    var s = e.outerWidth - e.firstMargin + (t.size.outerWidth - t.size[i]);
                    n.call(this, o, s) ? e.addCell(t) : (e.updateTarget(), e = new r(this), this.slides.push(e), e.addCell(t))
                }, this), e.updateTarget(), this.updateSelectedSlide()
            }
        }, h._getCanCellFit = function() {
            var e = this.options.groupCells;
            if (!e) return function() {
                return !1
            };
            if ("number" == typeof e) {
                var t = parseInt(e, 10);
                return function(e) {
                    return e % t !== 0
                }
            }
            var i = "string" == typeof e && e.match(/^(\d+)%$/),
                n = i ? parseInt(i[1], 10) / 100 : 1;
            return function(e, t) {
                return t <= (this.size.innerWidth + 1) * n
            }
        }, h._init = h.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, h.getSize = function() {
            this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var m = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        return h.setCellAlign = function() {
            var e = m[this.options.cellAlign];
            this.cellAlign = e ? e[this.originSide] : this.options.cellAlign
        }, h.setGallerySize = function() {
            if (this.options.setGallerySize) {
                var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = e + "px"
            }
        }, h._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var e = this.cursorPosition,
                    t = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(e, t, -1), e = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(e, 0, 1)
            }
        }, h._getGapCells = function(e, t, i) {
            for (var n = []; e > 0;) {
                var o = this.cells[t];
                if (!o) break;
                n.push(o), t += i, e -= o.size.outerWidth
            }
            return n
        }, h._containSlides = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var e = this.options.rightToLeft,
                    t = e ? "marginRight" : "marginLeft",
                    i = e ? "marginLeft" : "marginRight",
                    n = this.slideableWidth - this.getLastCell().size[i],
                    o = n < this.size.innerWidth,
                    r = this.cursorPosition + this.cells[0].size[t],
                    s = n - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach(function(e) {
                    o ? e.target = n * this.cellAlign : (e.target = Math.max(e.target, r), e.target = Math.min(e.target, s))
                }, this)
            }
        }, h.dispatchEvent = function(e, t, i) {
            var n = t ? [t].concat(i) : i;
            if (this.emitEvent(e, n), u && this.$element) {
                e += this.options.namespaceJQueryEvents ? ".flickity" : "";
                var o = e;
                if (t) {
                    var r = u.Event(t);
                    r.type = e, o = r
                }
                this.$element.trigger(o, i)
            }
        }, h.select = function(e, t, i) {
            this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = n.modulo(e, this.slides.length)), this.slides[e] && (this.selectedIndex = e, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select"), this.dispatchEvent("cellSelect")))
        }, h._wrapSelect = function(e) {
            var t = this.slides.length,
                i = this.options.wrapAround && t > 1;
            if (!i) return e;
            var o = n.modulo(e, t),
                r = Math.abs(o - this.selectedIndex),
                s = Math.abs(o + t - this.selectedIndex),
                a = Math.abs(o - t - this.selectedIndex);
            !this.isDragSelect && s < r ? e += t : !this.isDragSelect && a < r && (e -= t), e < 0 ? this.x -= this.slideableWidth : e >= t && (this.x += this.slideableWidth)
        }, h.previous = function(e, t) {
            this.select(this.selectedIndex - 1, e, t)
        }, h.next = function(e, t) {
            this.select(this.selectedIndex + 1, e, t)
        }, h.updateSelectedSlide = function() {
            var e = this.slides[this.selectedIndex];
            e && (this.unselectSelectedSlide(), this.selectedSlide = e, e.select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0])
        }, h.unselectSelectedSlide = function() {
            this.selectedSlide && this.selectedSlide.unselect()
        }, h.selectCell = function(e, t, i) {
            var n;
            "number" == typeof e ? n = this.cells[e] : ("string" == typeof e && (e = this.element.querySelector(e)), n = this.getCell(e));
            for (var o = 0; n && o < this.slides.length; o++) {
                var r = this.slides[o],
                    s = r.cells.indexOf(n);
                if (s != -1) return void this.select(o, t, i)
            }
        }, h.getCell = function(e) {
            for (var t = 0; t < this.cells.length; t++) {
                var i = this.cells[t];
                if (i.element == e) return i
            }
        }, h.getCells = function(e) {
            e = n.makeArray(e);
            var t = [];
            return e.forEach(function(e) {
                var i = this.getCell(e);
                i && t.push(i)
            }, this), t
        }, h.getCellElements = function() {
            return this.cells.map(function(e) {
                return e.element
            })
        }, h.getParentCell = function(e) {
            var t = this.getCell(e);
            return t ? t : (e = n.getParent(e, ".flickity-slider > *"), this.getCell(e))
        }, h.getAdjacentCellElements = function(e, t) {
            if (!e) return this.selectedSlide.getCellElements();
            t = void 0 === t ? this.selectedIndex : t;
            var i = this.slides.length;
            if (1 + 2 * e >= i) return this.getCellElements();
            for (var o = [], r = t - e; r <= t + e; r++) {
                var s = this.options.wrapAround ? n.modulo(r, i) : r,
                    a = this.slides[s];
                a && (o = o.concat(a.getCellElements()))
            }
            return o
        }, h.uiChange = function() {
            this.emitEvent("uiChange")
        }, h.childUIPointerDown = function(e) {
            this.emitEvent("childUIPointerDown", [e])
        }, h.onresize = function() {
            this.watchCSS(), this.resize()
        }, n.debounceMethod(l, "onresize", 150), h.resize = function() {
            if (this.isActive) {
                this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var e = this.selectedElements && this.selectedElements[0];
                this.selectCell(e, !1, !0)
            }
        }, h.watchCSS = function() {
            var e = this.options.watchCSS;
            if (e) {
                var t = c(this.element, ":after").content;
                t.indexOf("flickity") != -1 ? this.activate() : this.deactivate()
            }
        }, h.onkeydown = function(e) {
            if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
                if (37 == e.keyCode) {
                    var t = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[t]()
                } else if (39 == e.keyCode) {
                var i = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[i]()
            }
        }, h.deactivate = function() {
            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.cells.forEach(function(e) {
                e.destroy()
            }), this.unselectSelectedSlide(), this.element.removeChild(this.viewport), a(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
        }, h.destroy = function() {
            this.deactivate(), e.removeEventListener("resize", this), this.emitEvent("destroy"), u && this.$element && u.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
        }, n.extend(h, s), l.data = function(e) {
            e = n.getQueryElement(e);
            var t = e && e.flickityGUID;
            return t && f[t]
        }, n.htmlInit(l, "flickity"), u && u.bridget && u.bridget("flickity", l), l.Cell = o, l
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unipointer = t(e, e.EvEmitter)
    }(window, function(e, t) {
        function i() {}

        function n() {}
        var o = n.prototype = Object.create(t.prototype);
        o.bindStartEvent = function(e) {
            this._bindStartEvent(e, !0)
        }, o.unbindStartEvent = function(e) {
            this._bindStartEvent(e, !1)
        }, o._bindStartEvent = function(t, i) {
            i = void 0 === i || !!i;
            var n = i ? "addEventListener" : "removeEventListener";
            e.navigator.pointerEnabled ? t[n]("pointerdown", this) : e.navigator.msPointerEnabled ? t[n]("MSPointerDown", this) : (t[n]("mousedown", this), t[n]("touchstart", this))
        }, o.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, o.getTouch = function(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                if (i.identifier == this.pointerIdentifier) return i
            }
        }, o.onmousedown = function(e) {
            var t = e.button;
            t && 0 !== t && 1 !== t || this._pointerDown(e, e)
        }, o.ontouchstart = function(e) {
            this._pointerDown(e, e.changedTouches[0])
        }, o.onMSPointerDown = o.onpointerdown = function(e) {
            this._pointerDown(e, e)
        }, o._pointerDown = function(e, t) {
            this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t))
        }, o.pointerDown = function(e, t) {
            this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
        };
        var r = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        };
        return o._bindPostStartEvents = function(t) {
            if (t) {
                var i = r[t.type];
                i.forEach(function(t) {
                    e.addEventListener(t, this)
                }, this), this._boundPointerEvents = i
            }
        }, o._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
                e.removeEventListener(t, this)
            }, this), delete this._boundPointerEvents)
        }, o.onmousemove = function(e) {
            this._pointerMove(e, e)
        }, o.onMSPointerMove = o.onpointermove = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
        }, o.ontouchmove = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerMove(e, t)
        }, o._pointerMove = function(e, t) {
            this.pointerMove(e, t)
        }, o.pointerMove = function(e, t) {
            this.emitEvent("pointerMove", [e, t])
        }, o.onmouseup = function(e) {
            this._pointerUp(e, e)
        }, o.onMSPointerUp = o.onpointerup = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
        }, o.ontouchend = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerUp(e, t)
        }, o._pointerUp = function(e, t) {
            this._pointerDone(), this.pointerUp(e, t)
        }, o.pointerUp = function(e, t) {
            this.emitEvent("pointerUp", [e, t])
        }, o._pointerDone = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, o.pointerDone = i, o.onMSPointerCancel = o.onpointercancel = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
        }, o.ontouchcancel = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerCancel(e, t)
        }, o._pointerCancel = function(e, t) {
            this._pointerDone(), this.pointerCancel(e, t)
        }, o.pointerCancel = function(e, t) {
            this.emitEvent("pointerCancel", [e, t])
        }, n.getPointerPoint = function(e) {
            return {
                x: e.pageX,
                y: e.pageY
            }
        }, n
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("unipointer")) : e.Unidragger = t(e, e.Unipointer)
    }(window, function(e, t) {
        function i() {}

        function n() {}
        var o = n.prototype = Object.create(t.prototype);
        o.bindHandles = function() {
            this._bindHandles(!0)
        }, o.unbindHandles = function() {
            this._bindHandles(!1)
        };
        var r = e.navigator;
        return o._bindHandles = function(e) {
            e = void 0 === e || !!e;
            var t;
            t = r.pointerEnabled ? function(t) {
                t.style.touchAction = e ? "none" : ""
            } : r.msPointerEnabled ? function(t) {
                t.style.msTouchAction = e ? "none" : ""
            } : i;
            for (var n = e ? "addEventListener" : "removeEventListener", o = 0; o < this.handles.length; o++) {
                var s = this.handles[o];
                this._bindStartEvent(s, e), t(s), s[n]("click", this)
            }
        }, o.pointerDown = function(e, t) {
            if ("INPUT" == e.target.nodeName && "range" == e.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(e, t);
            var i = document.activeElement;
            i && i.blur && i.blur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
        }, o._dragPointerDown = function(e, i) {
            this.pointerDownPoint = t.getPointerPoint(i);
            var n = this.canPreventDefaultOnPointerDown(e, i);
            n && e.preventDefault()
        }, o.canPreventDefaultOnPointerDown = function(e) {
            return "SELECT" != e.target.nodeName
        }, o.pointerMove = function(e, t) {
            var i = this._dragPointerMove(e, t);
            this.emitEvent("pointerMove", [e, t, i]), this._dragMove(e, t, i)
        }, o._dragPointerMove = function(e, i) {
            var n = t.getPointerPoint(i),
                o = {
                    x: n.x - this.pointerDownPoint.x,
                    y: n.y - this.pointerDownPoint.y
                };
            return !this.isDragging && this.hasDragStarted(o) && this._dragStart(e, i), o
        }, o.hasDragStarted = function(e) {
            return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
        }, o.pointerUp = function(e, t) {
            this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t)
        }, o._dragPointerUp = function(e, t) {
            this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
        }, o._dragStart = function(e, i) {
            this.isDragging = !0, this.dragStartPoint = t.getPointerPoint(i), this.isPreventingClicks = !0, this.dragStart(e, i)
        }, o.dragStart = function(e, t) {
            this.emitEvent("dragStart", [e, t])
        }, o._dragMove = function(e, t, i) {
            this.isDragging && this.dragMove(e, t, i)
        }, o.dragMove = function(e, t, i) {
            e.preventDefault(), this.emitEvent("dragMove", [e, t, i])
        }, o._dragEnd = function(e, t) {
            this.isDragging = !1, setTimeout(function() {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(e, t)
        }, o.dragEnd = function(e, t) {
            this.emitEvent("dragEnd", [e, t])
        }, o.onclick = function(e) {
            this.isPreventingClicks && e.preventDefault()
        }, o._staticClick = function(e, t) {
            if (!this.isIgnoringMouseUp || "mouseup" != e.type) {
                var i = e.target.nodeName;
                "INPUT" != i && "TEXTAREA" != i || e.target.focus(), this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                    delete this.isIgnoringMouseUp
                }.bind(this), 400))
            }
        }, o.staticClick = function(e, t) {
            this.emitEvent("staticClick", [e, t])
        }, n.getPointerPoint = t.getPointerPoint, n
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, o) {
            return t(e, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils)
    }(window, function(e, t, i, n) {
        function o() {
            return {
                x: e.pageXOffset,
                y: e.pageYOffset
            }
        }
        n.extend(t.defaults, {
            draggable: !0,
            dragThreshold: 3
        }), t.createMethods.push("_createDrag");
        var r = t.prototype;
        n.extend(r, i.prototype);
        var s = "createTouch" in document,
            a = !1;
        r._createDrag = function() {
            this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag), s && !a && (e.addEventListener("touchmove", function() {}), a = !0)
        }, r.bindDrag = function() {
            this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
        }, r.unbindDrag = function() {
            this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), delete this.isDragBound)
        }, r._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, r._childUIPointerDownDrag = function(e) {
            e.preventDefault(), this.pointerDownFocus(e)
        };
        var l = {
                TEXTAREA: !0,
                INPUT: !0,
                OPTION: !0
            },
            u = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0
            };
        r.pointerDown = function(t, i) {
            var n = l[t.target.nodeName] && !u[t.target.type];
            if (n) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(t, i);
            var r = document.activeElement;
            r && r.blur && r != this.element && r != document.body && r.blur(), this.pointerDownFocus(t), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this._bindPostStartEvents(t), this.pointerDownScroll = o(), e.addEventListener("scroll", this), this.dispatchEvent("pointerDown", t, [i])
        };
        var c = {
                touchstart: !0,
                MSPointerDown: !0
            },
            d = {
                INPUT: !0,
                SELECT: !0
            };
        return r.pointerDownFocus = function(t) {
            if (this.options.accessibility && !c[t.type] && !d[t.target.nodeName]) {
                var i = e.pageYOffset;
                this.element.focus(), e.pageYOffset != i && e.scrollTo(e.pageXOffset, i)
            }
        }, r.canPreventDefaultOnPointerDown = function(e) {
            var t = "touchstart" == e.type,
                i = e.target.nodeName;
            return !t && "SELECT" != i
        }, r.hasDragStarted = function(e) {
            return Math.abs(e.x) > this.options.dragThreshold
        }, r.pointerUp = function(e, t) {
            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t)
        }, r.pointerDone = function() {
            e.removeEventListener("scroll", this), delete this.pointerDownScroll
        }, r.dragStart = function(t, i) {
            this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [i])
        }, r.pointerMove = function(e, t) {
            var i = this._dragPointerMove(e, t);
            this.dispatchEvent("pointerMove", e, [t, i]), this._dragMove(e, t, i)
        }, r.dragMove = function(e, t, i) {
            e.preventDefault(), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1,
                o = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                o = o > r ? .5 * (o + r) : o;
                var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                o = o < s ? .5 * (o + s) : o
            }
            this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", e, [t, i])
        }, r.dragEnd = function(e, t) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t])
        }, r.dragEndRestingSelect = function() {
            var e = this.getRestingPosition(),
                t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
                i = this._getClosestResting(e, t, 1),
                n = this._getClosestResting(e, t, -1),
                o = i.distance < n.distance ? i.index : n.index;
            return o
        }, r._getClosestResting = function(e, t, i) {
            for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(e, t) {
                    return e <= t
                } : function(e, t) {
                    return e < t
                }; r(t, o) && (n += i, o = t, t = this.getSlideDistance(-e, n), null !== t);) t = Math.abs(t);
            return {
                distance: o,
                index: n - i
            }
        }, r.getSlideDistance = function(e, t) {
            var i = this.slides.length,
                o = this.options.wrapAround && i > 1,
                r = o ? n.modulo(t, i) : t,
                s = this.slides[r];
            if (!s) return null;
            var a = o ? this.slideableWidth * Math.floor(t / i) : 0;
            return e - (s.target + a)
        }, r.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
                t = this.previousDragX - this.dragX;
            return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0
        }, r.staticClick = function(e, t) {
            var i = this.getParentCell(e.target),
                n = i && i.element,
                o = i && this.cells.indexOf(i);
            this.dispatchEvent("staticClick", e, [t, n, o])
        }, r.onscroll = function() {
            var e = o(),
                t = this.pointerDownScroll.x - e.x,
                i = this.pointerDownScroll.y - e.y;
            (Math.abs(t) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("unipointer")) : e.TapListener = t(e, e.Unipointer)
    }(window, function(e, t) {
        function i(e) {
            this.bindTap(e)
        }
        var n = i.prototype = Object.create(t.prototype);
        return n.bindTap = function(e) {
            e && (this.unbindTap(), this.tapElement = e, this._bindStartEvent(e, !0))
        }, n.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        }, n.pointerUp = function(i, n) {
            if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
                var o = t.getPointerPoint(n),
                    r = this.tapElement.getBoundingClientRect(),
                    s = e.pageXOffset,
                    a = e.pageYOffset,
                    l = o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a;
                if (l && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
                    this.isIgnoringMouseUp = !0;
                    var u = this;
                    setTimeout(function() {
                        delete u.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, n.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
            return t(e, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils)
    }(window, function(e, t, i, n) {
        "use strict";

        function o(e, t) {
            this.direction = e, this.parent = t, this._create()
        }

        function r(e) {
            return "string" == typeof e ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z"
        }
        var s = "http://www.w3.org/2000/svg";
        o.prototype = new i, o.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = this.direction == -1;
            var e = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == e;
            var t = this.element = document.createElement("button");
            t.className = "flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
            var i = this.createSVG();
            t.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, o.prototype.activate = function() {
            this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this)
        }, o.prototype.createSVG = function() {
            var e = document.createElementNS(s, "svg");
            e.setAttribute("viewBox", "0 0 100 100");
            var t = document.createElementNS(s, "path"),
                i = r(this.parent.options.arrowShape);
            return t.setAttribute("d", i), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e
        }, o.prototype.onTap = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var e = this.isPrevious ? "previous" : "next";
                this.parent[e]()
            }
        }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
            var e = document.activeElement;
            e && e == this.element && this.onTap()
        }, o.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, o.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, o.prototype.update = function() {
            var e = this.parent.slides;
            if (this.parent.options.wrapAround && e.length > 1) return void this.enable();
            var t = e.length ? e.length - 1 : 0,
                i = this.isPrevious ? 0 : t,
                n = this.parent.selectedIndex == i ? "disable" : "enable";
            this[n]()
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, n.extend(t.defaults, {
            prevNextButtons: !0,
            arrowShape: {
                x0: 10,

                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), t.createMethods.push("_createPrevNextButtons");
        var a = t.prototype;
        return a._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new o((-1), this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
        }, a.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, a.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, t.PrevNextButton = o, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
            return t(e, i, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils)
    }(window, function(e, t, i, n) {
        function o(e) {
            this.parent = e, this._create()
        }
        o.prototype = new i, o.prototype._create = function() {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, o.prototype.activate = function() {
            this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this)
        }, o.prototype.setDots = function() {
            var e = this.parent.slides.length - this.dots.length;
            e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e)
        }, o.prototype.addDots = function(e) {
            for (var t = document.createDocumentFragment(), i = []; e;) {
                var n = document.createElement("li");
                n.className = "dot", t.appendChild(n), i.push(n), e--
            }
            this.holder.appendChild(t), this.dots = this.dots.concat(i)
        }, o.prototype.removeDots = function(e) {
            var t = this.dots.splice(this.dots.length - e, e);
            t.forEach(function(e) {
                this.holder.removeChild(e)
            }, this)
        }, o.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
        }, o.prototype.onTap = function(e) {
            var t = e.target;
            if ("LI" == t.nodeName) {
                this.parent.uiChange();
                var i = this.dots.indexOf(t);
                this.parent.select(i)
            }
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, t.PageDots = o, n.extend(t.defaults, {
            pageDots: !0
        }), t.createMethods.push("_createPageDots");
        var r = t.prototype;
        return r._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
        }, r.activatePageDots = function() {
            this.pageDots.activate()
        }, r.updateSelectedPageDots = function() {
            this.pageDots.updateSelected()
        }, r.updatePageDots = function() {
            this.pageDots.setDots()
        }, r.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, t.PageDots = o, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(e, i, n) {
            return t(e, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : t(e.EvEmitter, e.fizzyUIUtils, e.Flickity)
    }(window, function(e, t, i) {
        function n(e) {
            this.parent = e, this.state = "stopped", r && (this.onVisibilityChange = function() {
                this.visibilityChange()
            }.bind(this), this.onVisibilityPlay = function() {
                this.visibilityPlay()
            }.bind(this))
        }
        var o, r;
        "hidden" in document ? (o = "hidden", r = "visibilitychange") : "webkitHidden" in document && (o = "webkitHidden", r = "webkitvisibilitychange"), n.prototype = Object.create(e.prototype), n.prototype.play = function() {
            if ("playing" != this.state) {
                var e = document[o];
                if (r && e) return void document.addEventListener(r, this.onVisibilityPlay);
                this.state = "playing", r && document.addEventListener(r, this.onVisibilityChange), this.tick()
            }
        }, n.prototype.tick = function() {
            if ("playing" == this.state) {
                var e = this.parent.options.autoPlay;
                e = "number" == typeof e ? e : 3e3;
                var t = this;
                this.clear(), this.timeout = setTimeout(function() {
                    t.parent.next(!0), t.tick()
                }, e)
            }
        }, n.prototype.stop = function() {
            this.state = "stopped", this.clear(), r && document.removeEventListener(r, this.onVisibilityChange)
        }, n.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function() {
            "playing" == this.state && (this.state = "paused", this.clear())
        }, n.prototype.unpause = function() {
            "paused" == this.state && this.play()
        }, n.prototype.visibilityChange = function() {
            var e = document[o];
            this[e ? "pause" : "unpause"]()
        }, n.prototype.visibilityPlay = function() {
            this.play(), document.removeEventListener(r, this.onVisibilityPlay)
        }, t.extend(i.defaults, {
            pauseAutoPlayOnHover: !0
        }), i.createMethods.push("_createPlayer");
        var s = i.prototype;
        return s._createPlayer = function() {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, s.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
        }, s.playPlayer = function() {
            this.player.play()
        }, s.stopPlayer = function() {
            this.player.stop()
        }, s.pausePlayer = function() {
            this.player.pause()
        }, s.unpausePlayer = function() {
            this.player.unpause()
        }, s.deactivatePlayer = function() {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
        }, s.onmouseenter = function() {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
        }, s.onmouseleave = function() {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
        }, i.Player = n, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return t(e, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
    }(window, function(e, t, i) {
        function n(e) {
            var t = document.createDocumentFragment();
            return e.forEach(function(e) {
                t.appendChild(e.element)
            }), t
        }
        var o = t.prototype;
        return o.insert = function(e, t) {
            var i = this._makeCells(e);
            if (i && i.length) {
                var o = this.cells.length;
                t = void 0 === t ? o : t;
                var r = n(i),
                    s = t == o;
                if (s) this.slider.appendChild(r);
                else {
                    var a = this.cells[t].element;
                    this.slider.insertBefore(r, a)
                }
                if (0 === t) this.cells = i.concat(this.cells);
                else if (s) this.cells = this.cells.concat(i);
                else {
                    var l = this.cells.splice(t, o - t);
                    this.cells = this.cells.concat(i).concat(l)
                }
                this._sizeCells(i);
                var u = t > this.selectedIndex ? 0 : i.length;
                this._cellAddedRemoved(t, u)
            }
        }, o.append = function(e) {
            this.insert(e, this.cells.length)
        }, o.prepend = function(e) {
            this.insert(e, 0)
        }, o.remove = function(e) {
            var t, n, o = this.getCells(e),
                r = 0,
                s = o.length;
            for (t = 0; t < s; t++) {
                n = o[t];
                var a = this.cells.indexOf(n) < this.selectedIndex;
                r -= a ? 1 : 0
            }
            for (t = 0; t < s; t++) n = o[t], n.remove(), i.removeFrom(this.cells, n);
            o.length && this._cellAddedRemoved(0, r)
        }, o._cellAddedRemoved = function(e, t) {
            t = t || 0, this.selectedIndex += t, this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex)), this.cellChange(e, !0), this.emitEvent("cellAddedRemoved", [e, t])
        }, o.cellSizeChange = function(e) {
            var t = this.getCell(e);
            if (t) {
                t.getSize();
                var i = this.cells.indexOf(t);
                this.cellChange(i)
            }
        }, o.cellChange = function(e, t) {
            var i = this.slideableWidth;
            if (this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [e]), this.options.freeScroll) {
                var n = i - this.slideableWidth;
                this.x += n * this.cellAlign, this.positionSlider()
            } else t && this.positionSliderAtSelected(), this.select(this.selectedIndex)
        }, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return t(e, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils)
    }(window, function(e, t, i) {
        "use strict";

        function n(e) {
            if ("IMG" == e.nodeName && e.getAttribute("data-flickity-lazyload")) return [e];
            var t = e.querySelectorAll("img[data-flickity-lazyload]");
            return i.makeArray(t)
        }

        function o(e, t) {
            this.img = e, this.flickity = t, this.load()
        }
        t.createMethods.push("_createLazyload");
        var r = t.prototype;
        return r._createLazyload = function() {
            this.on("select", this.lazyLoad)
        }, r.lazyLoad = function() {
            var e = this.options.lazyLoad;
            if (e) {
                var t = "number" == typeof e ? e : 0,
                    i = this.getAdjacentCellElements(t),
                    r = [];
                i.forEach(function(e) {
                    var t = n(e);
                    r = r.concat(t)
                }), r.forEach(function(e) {
                    new o(e, this)
                }, this)
            }
        }, o.prototype.handleEvent = i.handleEvent, o.prototype.load = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
        }, o.prototype.onload = function(e) {
            this.complete(e, "flickity-lazyloaded")
        }, o.prototype.onerror = function(e) {
            this.complete(e, "flickity-lazyerror")
        }, o.prototype.complete = function(e, t) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var i = this.flickity.getParentCell(this.img),
                n = i && i.element;
            this.flickity.cellSizeChange(n), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, n)
        }, t.LazyLoader = o, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == typeof module && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function(e) {
        return e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e.Flickity, e.fizzyUIUtils)
    }(window, function(e, t) {
        function i(e, t, i) {
            return (t - e) * i + e
        }
        e.createMethods.push("_createAsNavFor");
        var n = e.prototype;
        return n._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var e = this.options.asNavFor;
            if (e) {
                var t = this;
                setTimeout(function() {
                    t.setNavCompanion(e)
                })
            }
        }, n.setNavCompanion = function(i) {
            i = t.getQueryElement(i);
            var n = e.data(i);
            if (n && n != this) {
                this.navCompanion = n;
                var o = this;
                this.onNavCompanionSelect = function() {
                    o.navCompanionSelect()
                }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
            }
        }, n.navCompanionSelect = function(e) {
            if (this.navCompanion) {
                var t = this.navCompanion.selectedCells[0],
                    n = this.navCompanion.cells.indexOf(t),
                    o = n + this.navCompanion.selectedCells.length - 1,
                    r = Math.floor(i(n, o, this.navCompanion.cellAlign));
                if (this.selectCell(r, !1, e), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                    var s = this.cells.slice(n, o + 1);
                    this.navSelectedElements = s.map(function(e) {
                        return e.element
                    }), this.changeNavSelectedClass("add")
                }
            }
        }, n.changeNavSelectedClass = function(e) {
            this.navSelectedElements.forEach(function(t) {
                t.classList[e]("is-nav-selected")
            })
        }, n.activateAsNavFor = function() {
            this.navCompanionSelect(!0)
        }, n.removeNavSelectedElements = function() {
            this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
        }, n.onNavStaticClick = function(e, t, i, n) {
            "number" == typeof n && this.navCompanion.selectCell(n)
        }, n.deactivateAsNavFor = function() {
            this.removeNavSelectedElements()
        }, n.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, e
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
    }(window, function(e, t) {
        function i(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function n(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function o(e, t, r) {
            return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(e, t, r)
        }

        function r(e) {
            this.img = e
        }

        function s(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var a = e.jQuery,
            l = e.console;
        o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && u[t]) {
                for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = e.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var u = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(e) {
            var t = getComputedStyle(e);
            if (t)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
                }
        }, o.prototype.addImage = function(e) {
            var t = new r(e);
            this.images.push(t)
        }, o.prototype.addBackground = function(e, t) {
            var i = new s(e, t);
            this.images.push(i)
        }, o.prototype.check = function() {
            function e(e, i, n) {
                setTimeout(function() {
                    t.progress(e, i, n)
                })
            }
            var t = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
                t.once("progress", e), t.check()
            }) : void this.complete()
        }, o.prototype.progress = function(e, t, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
        }, o.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, r.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
        }, r.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, r.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
        }, o.makeJQueryPlugin = function(t) {
            t = t || e.jQuery, t && (a = t, a.fn.imagesLoaded = function(e, t) {
                var i = new o(this, e, t);
                return i.jqDeferred.promise(a(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
            return t(e, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("flickity"), require("imagesloaded")) : e.Flickity = t(e, e.Flickity, e.imagesLoaded)
    }(window, function(e, t, i) {
        "use strict";
        t.createMethods.push("_createImagesLoaded");
        var n = t.prototype;
        return n._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, n.imagesLoaded = function() {
            function e(e, i) {
                var n = t.getParentCell(i.img);
                t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected()
            }
            if (this.options.imagesLoaded) {
                var t = this;
                i(this.slider).on("progress", e)
            }
        }, t
    }), jQuery(document).ready(function(e) {
        "use strict";

        function t() {
            sessionStorage.setItem("timeOnSite", new Date - new Date(sessionStorage.getItem("timeVisited")))
        }

        function i() {
            sessionStorage.setItem("timeVisited", new Date)
        }

        function n() {
            return t(), sessionStorage.getItem("timeOnSite") / 1e3
        }
        window.onload = function() {
            (!sessionStorage.getItem("timeVisited") || sessionStorage.getItem("timeVisited") > 72e5) && i()
        }, window.onbeforeunload = function() {
            t()
        }, n() > 1e3 && (sessionStorage.clear(), i()), sessionStorage && !sessionStorage.getItem("show-splash") && sessionStorage.setItem("show-splash", "yes"), sessionStorage && "yes" == sessionStorage.getItem("show-splash") ? (jQuery(".slider").imagesLoaded(function() {
            jQuery(".slider").length && e(window).scrollTop(0), jQuery(".splash-screen").addClass(".splash-screen--visible").fadeIn().delay(3100).fadeOut(), jQuery(".main-header__logo-link").fadeOut(), jQuery(window).width() > 650 && (e(window).scrollTop(0), jQuery(".splash-screen.splash-screen--visible").delay(3100).fadeOut(), setTimeout(function() {
                jQuery(".slider").addClass("splash-hidden"), jQuery(".main-header__logo-link").fadeIn()
            }, 4500))
        }), sessionStorage.setItem("show-splash", "no")) : jQuery(window).width() > 650 && (jQuery(".slider").length && e(window).scrollTop(0), e(window).scrollTop(0), setTimeout(function() {
            jQuery(".slider").addClass("splash-hidden")
        }, 500))
    }), jQuery(document).ready(function(e) {
        "use strict";
        var t;
        if (document.querySelector(".small-navigation")) var i = document.querySelector(".small-navigation");
        if (e(".main-header").outerHeight() > 88 ? (t = 88, i && (t += 62)) : (t = e(".main-header").outerHeight(), i && (t += 62)), jQuery(document).scroll(function() {
                jQuery(document).scrollTop() > 300 ? e(".call-band").addClass("call-band--visible") : e(".call-band").removeClass("call-band--visible")
            }), e.localScroll({
                target: "body",
                offset: t * -1
            }), e("[data-bg-grab]").bgGrab(), e("[data-waypoint]").waypointClasses(), e(".sticky-placeholder").stickyPlaceholder(), e("[data-map]").gMap(), e("[data-full-height]").fullHeight(), e("[data-mfp]").magnificPopup({
                gallery: {
                    enabled: !0
                }
            }), e("[data-vr]").magnificPopup({
                type: "iframe",
                gallery: {
                    enabled: !0
                },
                iframe: {
                    patterns: {
                        roundme: {
                            index: "#",
                            id: function(e) {
                                var t = e.match(/^.+roundme.com\/tour\/([0-9]+)\/view\/([0-9]+)?/);
                                return null !== t && void 0 !== t[2] ? t[1] + "/" + t[2] : ""
                            },
                            src: "#"
                        }
                    }
                }
            }), e(window).width() > 850) {
            var n, o, r;
            e("[data-image-url]").each(function() {
                o = e(this).data("image-url"), e("#backgroundswap").append('<img class="featured-projects__swap-img is-hidden" src="' + o + '" />')
            }), e(".project-excerpt").hover(function() {
                n = e(this).data("image-url"), r = e('img[src="' + n + '"]'), r.siblings().removeClass("is-visible"), r.toggleClass("is-visible")
            })
        }
        var s = 40,
            a = s / e(window).height(),
            l = s / e(window).width();
        e("#videoimg").mousemove(function(t) {
            var i = t.pageX - e(window).width() / 2,
                n = t.pageY - e(window).height() / 2,
                o = l * i * -1 - 40,
                r = a * n * -1 - 80;
            e("#videoimg").animate({
                backgroundPositionX: o,
                backgroundPositionY: r
            }, 1)
        });
        var u = e("#projectgrid");
        if (u.imagesLoaded(function() {
                u.isotope({
                    layoutMode: "packery",
                    itemSelector: ".filterable"
                })
            }), e("#projectfilter").on("change", function(t) {
                t.preventDefault();
                var i = "." + e(this).val();
                e.each(e(".filterable"), function(t, i) {
                    e(i).removeClass("is-visible")
                }), u.isotope({
                    filter: i
                });
                var n = u.isotope("getFilteredItemElements");
                e.each(n, function(t, i) {
                    e(i).addClass("is-visible")
                }), "all" == e(this).val() && e.each(e(".filterable"), function(t, i) {
                    e(i).removeClass("is-visible")
                }), u.isotope("layout"), e(this).parent().siblings().removeClass("inactive active").addClass("inactive"), e(this).parent().removeClass("inactive active").addClass("active")
            }), i) {
            var c = i.getBoundingClientRect(),
                d = document.createElement("div");
            d.style.width = c.width + "px", d.style.height = c.height + "px";
            var p = !1;
            window.addEventListener("scroll", function() {
                window.pageYOffset >= c.top && !p ? (i.classList.add("small-navigation--sticky"), i.parentNode.insertBefore(d, i), p = !0) : window.pageYOffset < c.top && p && (i.classList.remove("small-navigation--sticky"), i.parentNode.removeChild(d), p = !1)
            })
        }
        e("#postfilter").on("change", function() {
            var t = e(this).val();
            return t && (window.location = t), !1
        });
        var f = e("#image-slider");
        if (jQuery(f).length) {
            new Waypoint({
                element: f[0],
                handler: function(e) {
                    f.flickity("playPlayer", 3e3)
                }
            })
        }
    }), ! function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
            return t(e, document)
        }) : e.plyr = t(e, document)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function i() {
            var e, i, n, o = navigator.userAgent,
                r = navigator.appName,
                s = "" + parseFloat(navigator.appVersion),
                a = parseInt(navigator.appVersion, 10),
                l = !1,
                u = !1,
                c = !1,
                d = !1;
            return navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1 ? (l = !0, r = "IE", s = "11") : (i = o.indexOf("MSIE")) !== -1 ? (l = !0, r = "IE", s = o.substring(i + 5)) : (i = o.indexOf("Chrome")) !== -1 ? (c = !0, r = "Chrome", s = o.substring(i + 7)) : (i = o.indexOf("Safari")) !== -1 ? (d = !0, r = "Safari", s = o.substring(i + 7), (i = o.indexOf("Version")) !== -1 && (s = o.substring(i + 8))) : (i = o.indexOf("Firefox")) !== -1 ? (u = !0, r = "Firefox", s = o.substring(i + 8)) : (e = o.lastIndexOf(" ") + 1) < (i = o.lastIndexOf("/")) && (r = o.substring(e, i), s = o.substring(i + 1), r.toLowerCase() === r.toUpperCase() && (r = navigator.appName)), (n = s.indexOf(";")) !== -1 && (s = s.substring(0, n)), (n = s.indexOf(" ")) !== -1 && (s = s.substring(0, n)), a = parseInt("" + s, 10), isNaN(a) && (s = "" + parseFloat(navigator.appVersion), a = parseInt(navigator.appVersion, 10)), {
                name: r,
                version: a,
                isIE: l,
                isFirefox: u,
                isChrome: c,
                isSafari: d,
                isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
                isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
                isTouch: "ontouchstart" in t.documentElement
            }
        }

        function n(e, t) {
            var i = e.media;
            if ("video" === e.type) switch (t) {
                case "video/webm":
                    return !(!i.canPlayType || !i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                case "video/mp4":
                    return !(!i.canPlayType || !i.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                case "video/ogg":
                    return !(!i.canPlayType || !i.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
            } else if ("audio" === e.type) switch (t) {
                case "audio/mpeg":
                    return !(!i.canPlayType || !i.canPlayType("audio/mpeg;").replace(/no/, ""));
                case "audio/ogg":
                    return !(!i.canPlayType || !i.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                case "audio/wav":
                    return !(!i.canPlayType || !i.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
            }
            return !1
        }

        function o(e) {
            if (!t.querySelectorAll('script[src="' + e + '"]').length) {
                var i = t.createElement("script");
                i.src = e;
                var n = t.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(i, n)
            }
        }

        function r(e, t) {
            return Array.prototype.indexOf && e.indexOf(t) !== -1
        }

        function s(e, t, i) {
            return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), i)
        }

        function a(e, t) {
            e.length || (e = [e]);
            for (var i = e.length - 1; i >= 0; i--) {
                var n = i > 0 ? t.cloneNode(!0) : t,
                    o = e[i],
                    r = o.parentNode,
                    s = o.nextSibling;
                return n.appendChild(o), s ? r.insertBefore(n, s) : r.appendChild(n), n
            }
        }

        function l(e) {
            e && e.parentNode.removeChild(e)
        }

        function u(e, t) {
            e.insertBefore(t, e.firstChild)
        }

        function c(e, t) {
            for (var i in t) e.setAttribute(i, O.boolean(t[i]) && t[i] ? "" : t[i])
        }

        function d(e, i, n) {
            var o = t.createElement(e);
            c(o, n), u(i, o)
        }

        function p(e) {
            return e.replace(".", "")
        }

        function f(e, t, i) {
            if (e)
                if (e.classList) e.classList[i ? "add" : "remove"](t);
                else {
                    var n = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                    e.className = n + (i ? " " + t : "")
                }
        }

        function h(e, t) {
            return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
        }

        function m(e, i) {
            var n = Element.prototype,
                o = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function(e) {
                    return [].indexOf.call(t.querySelectorAll(e), this) !== -1
                };
            return o.call(e, i)
        }

        function g(e, t, i, n, o) {
            v(e, t, function(t) {
                i && i.apply(e, [t]), n.apply(e, [t])
            }, o)
        }

        function y(e, t, i, n, o) {
            var r = t.split(" ");
            if (O.boolean(o) || (o = !1), e instanceof NodeList)
                for (var s = 0; s < e.length; s++) e[s] instanceof Node && y(e[s], arguments[1], arguments[2], arguments[3]);
            else
                for (var a = 0; a < r.length; a++) e[n ? "addEventListener" : "removeEventListener"](r[a], i, o)
        }

        function v(e, t, i, n) {
            e && y(e, t, i, !0, n)
        }

        function b(e, t, i, n) {
            if (e && t) {
                O.boolean(i) || (i = !1);
                var o = new CustomEvent(t, {
                    bubbles: i,
                    detail: n
                });
                e.dispatchEvent(o)
            }
        }

        function x(e, t) {
            if (e) return t = O.boolean(t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t
        }

        function w(e, t) {
            return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
        }

        function S() {
            var e = arguments;
            if (e.length) {
                if (1 === e.length) return e[0];
                for (var t = Array.prototype.shift.call(e), i = e.length, n = 0; n < i; n++) {
                    var o = e[n];
                    for (var r in o) o[r] && o[r].constructor && o[r].constructor === Object ? (t[r] = t[r] || {}, S(t[r], o[r])) : t[r] = o[r]
                }
                return t
            }
        }

        function k(e) {
            var t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            return e.match(t) ? RegExp.$2 : e
        }

        function _(e) {
            var t = /^.*(vimeo.com\/|video\/)(\d+).*/;
            return e.match(t) ? RegExp.$2 : e
        }

        function E() {
            var e = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    element: null,
                    prefix: ""
                },
                i = "webkit o moz ms khtml".split(" ");
            if (O.undefined(t.cancelFullScreen))
                for (var n = 0, o = i.length; n < o; n++) {
                    if (e.prefix = i[n], !O.undefined(t[e.prefix + "CancelFullScreen"])) {
                        e.supportsFullScreen = !0;
                        break
                    }
                    if (!O.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                        e.prefix = "ms", e.supportsFullScreen = !0;
                        break
                    }
                } else e.supportsFullScreen = !0;
            return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
                switch (O.undefined(e) && (e = t.body), this.prefix) {
                    case "":
                        return t.fullscreenElement === e;
                    case "moz":
                        return t.mozFullScreenElement === e;
                    default:
                        return t[this.prefix + "FullscreenElement"] === e
                }
            }, e.requestFullScreen = function(e) {
                return O.undefined(e) && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
            }, e.cancelFullScreen = function() {
                return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
            }, e.element = function() {
                return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
            }), e
        }

        function C(y, C) {
            function P(e, t, i, n) {
                b(e, t, i, S({}, n, {
                    plyr: Ue
                }))
            }

            function F(t, i) {
                C.debug && e.console && (i = Array.prototype.slice.call(i), O.string(C.logPrefix) && C.logPrefix.length && i.unshift(C.logPrefix), console[t].apply(console, i))
            }

            function j() {
                return {
                    url: C.iconUrl,
                    absolute: 0 === C.iconUrl.indexOf("http") || Qe.browser.isIE
                }
            }

            function B() {
                var e = [],
                    t = j(),
                    i = (t.absolute ? "" : t.url) + "#" + C.iconPrefix;
                return r(C.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + C.i18n.play + "</span>", "</button>"), e.push('<div class="plyr__controls">'), r(C.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + i + '-restart" /></svg>', '<span class="plyr__sr-only">' + C.i18n.restart + "</span>", "</button>"), r(C.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + i + '-rewind" /></svg>', '<span class="plyr__sr-only">' + C.i18n.rewind + "</span>", "</button>"), r(C.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + C.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + i + '-pause" /></svg>', '<span class="plyr__sr-only">' + C.i18n.pause + "</span>", "</button>"), r(C.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + i + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + C.i18n.forward + "</span>", "</button>"), r(C.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + C.i18n.buffered, "</progress>"), C.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")), r(C.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + C.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), r(C.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + C.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), r(C.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + i + '-muted" /></svg>', '<svg><use xlink:href="' + i + '-volume" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleMute + "</span>", "</button>"), r(C.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + C.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + C.volumeMin + '" max="' + C.volumeMax + '" value="' + C.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + C.volumeMax + '" value="' + C.volumeMin + '" role="presentation"></progress>', "</span>"), r(C.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + i + '-captions-on" /></svg>', '<svg><use xlink:href="' + i + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleCaptions + "</span>", "</button>"), r(C.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + i + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + i + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</div>"), e.join("")
            }

            function W() {
                if (Qe.supported.full && ("audio" !== Qe.type || C.fullscreen.allowAudio) && C.fullscreen.enabled) {
                    var e = z.supportsFullScreen;
                    e || C.fullscreen.fallback && !V() ? (Ye((e ? "Native" : "Fallback") + " fullscreen enabled"), f(Qe.container, C.classes.fullscreen.enabled, !0)) : Ye("Fullscreen not supported and fallback disabled"), Qe.buttons && Qe.buttons.fullscreen && x(Qe.buttons.fullscreen, !1), G()
                }
            }

            function R() {
                if ("video" === Qe.type) {
                    Q(C.selectors.captions) || Qe.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + p(C.selectors.captions) + '"></div>'), Qe.usingTextTracks = !1, Qe.media.textTracks && (Qe.usingTextTracks = !0);
                    for (var e, t = "", i = Qe.media.childNodes, n = 0; n < i.length; n++) "track" === i[n].nodeName.toLowerCase() && (e = i[n].kind, "captions" !== e && "subtitles" !== e || (t = i[n].getAttribute("src")));
                    if (Qe.captionExists = !0, "" === t ? (Qe.captionExists = !1, Ye("No caption track found")) : Ye("Caption track found; URI: " + t), Qe.captionExists) {
                        for (var o = Qe.media.textTracks, r = 0; r < o.length; r++) o[r].mode = "hidden";
                        if (H(Qe), (Qe.browser.isIE && Qe.browser.version >= 10 || Qe.browser.isFirefox && Qe.browser.version >= 31) && (Ye("Detected browser with known TextTrack issues - using manual fallback"), Qe.usingTextTracks = !1), Qe.usingTextTracks) {
                            Ye("TextTracks supported");
                            for (var s = 0; s < o.length; s++) {
                                var a = o[s];
                                "captions" !== a.kind && "subtitles" !== a.kind || v(a, "cuechange", function() {
                                    this.activeCues[0] && "text" in this.activeCues[0] ? N(this.activeCues[0].getCueAsHTML()) : N()
                                })
                            }
                        } else if (Ye("TextTracks not supported so rendering captions manually"), Qe.currentCaption = "", Qe.captions = [], "" !== t) {
                            var l = new XMLHttpRequest;
                            l.onreadystatechange = function() {
                                if (4 === l.readyState)
                                    if (200 === l.status) {
                                        var e, t = [],
                                            i = l.responseText,
                                            n = "\r\n";
                                        i.indexOf(n + n) === -1 && (n = i.indexOf("\r\r") !== -1 ? "\r" : "\n"), t = i.split(n + n);
                                        for (var o = 0; o < t.length; o++) {
                                            e = t[o], Qe.captions[o] = [];
                                            var r = e.split(n),
                                                s = 0;
                                            r[s].indexOf(":") === -1 && (s = 1), Qe.captions[o] = [r[s], r[s + 1]]
                                        }
                                        Qe.captions.shift(), Ye("Successfully loaded the caption file via AJAX")
                                    } else $e(C.logPrefix + "There was a problem loading the caption file via AJAX")
                            }, l.open("get", t, !0), l.send()
                        }
                    } else f(Qe.container, C.classes.captions.enabled)
                }
            }

            function N(e) {
                var i = Q(C.selectors.captions),
                    n = t.createElement("span");
                i.innerHTML = "", O.undefined(e) && (e = ""), O.string(e) ? n.innerHTML = e.trim() : n.appendChild(e), i.appendChild(n), i.offsetHeight
            }

            function q(e) {
                function t(e, t) {
                    var i = [];
                    i = e.split(" --> ");
                    for (var n = 0; n < i.length; n++) i[n] = i[n].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                    return o(i[t])
                }

                function i(e) {
                    return t(e, 0)
                }

                function n(e) {
                    return t(e, 1)
                }

                function o(e) {
                    if (null === e || void 0 === e) return 0;
                    var t, i = [],
                        n = [];
                    return i = e.split(","), n = i[0].split(":"), t = Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
                }
                if (!Qe.usingTextTracks && "video" === Qe.type && Qe.supported.full && (Qe.subcount = 0, e = O.number(e) ? e : Qe.media.currentTime, Qe.captions[Qe.subcount])) {
                    for (; n(Qe.captions[Qe.subcount][0]) < e.toFixed(1);)
                        if (Qe.subcount++, Qe.subcount > Qe.captions.length - 1) {
                            Qe.subcount = Qe.captions.length - 1;
                            break
                        } Qe.media.currentTime.toFixed(1) >= i(Qe.captions[Qe.subcount][0]) && Qe.media.currentTime.toFixed(1) <= n(Qe.captions[Qe.subcount][0]) ? (Qe.currentCaption = Qe.captions[Qe.subcount][1], N(Qe.currentCaption)) : N()
                }
            }

            function H() {
                if (Qe.buttons.captions) {
                    f(Qe.container, C.classes.captions.enabled, !0);
                    var e = Qe.storage.captionsEnabled;
                    O.boolean(e) || (e = C.captions.defaultActive), e && (f(Qe.container, C.classes.captions.active, !0), x(Qe.buttons.captions, !0))
                }
            }

            function U(e) {
                return Qe.container.querySelectorAll(e)
            }

            function Q(e) {
                return U(e)[0]
            }

            function V() {
                try {
                    return e.self !== e.top
                } catch (e) {
                    return !0
                }
            }

            function G() {
                function e(e) {
                    9 === e.which && Qe.isFullscreen && (e.target !== n || e.shiftKey ? e.target === i && e.shiftKey && (e.preventDefault(), n.focus()) : (e.preventDefault(), i.focus()))
                }
                var t = U("input:not([disabled]), button:not([disabled])"),
                    i = t[0],
                    n = t[t.length - 1];
                v(Qe.container, "keydown", e)
            }

            function Y(e, t) {
                if (O.string(t)) d(e, Qe.media, {
                    src: t
                });
                else if (t.constructor === Array)
                    for (var i = t.length - 1; i >= 0; i--) d(e, Qe.media, t[i])
            }

            function $() {
                if (C.loadSprite) {
                    var e = j();
                    e.absolute ? (Ye("AJAX loading absolute SVG sprite" + (Qe.browser.isIE ? " (due to IE)" : "")), I(e.url, "sprite-plyr")) : Ye("Sprite will be used as external resource directly")
                }
                var i = C.html;
                Ye("Injecting custom controls"), i || (i = B()), i = s(i, "{seektime}", C.seekTime), i = s(i, "{id}", Math.floor(1e4 * Math.random()));
                var n;
                if (O.string(C.selectors.controls.container) && (n = t.querySelector(C.selectors.controls.container)), O.htmlElement(n) || (n = Qe.container), n.insertAdjacentHTML("beforeend", i), C.tooltips.controls)
                    for (var o = U([C.selectors.controls.wrapper, " ", C.selectors.labels, " .", C.classes.hidden].join("")), r = o.length - 1; r >= 0; r--) {
                        var a = o[r];
                        f(a, C.classes.hidden, !1), f(a, C.classes.tooltip, !0)
                    }
            }

            function X() {
                try {
                    return Qe.controls = Q(C.selectors.controls.wrapper), Qe.buttons = {}, Qe.buttons.seek = Q(C.selectors.buttons.seek), Qe.buttons.play = U(C.selectors.buttons.play), Qe.buttons.pause = Q(C.selectors.buttons.pause), Qe.buttons.restart = Q(C.selectors.buttons.restart), Qe.buttons.rewind = Q(C.selectors.buttons.rewind), Qe.buttons.forward = Q(C.selectors.buttons.forward), Qe.buttons.fullscreen = Q(C.selectors.buttons.fullscreen), Qe.buttons.mute = Q(C.selectors.buttons.mute), Qe.buttons.captions = Q(C.selectors.buttons.captions), Qe.progress = {}, Qe.progress.container = Q(C.selectors.progress.container), Qe.progress.buffer = {}, Qe.progress.buffer.bar = Q(C.selectors.progress.buffer), Qe.progress.buffer.text = Qe.progress.buffer.bar && Qe.progress.buffer.bar.getElementsByTagName("span")[0], Qe.progress.played = Q(C.selectors.progress.played), Qe.progress.tooltip = Qe.progress.container && Qe.progress.container.querySelector("." + C.classes.tooltip), Qe.volume = {}, Qe.volume.input = Q(C.selectors.volume.input), Qe.volume.display = Q(C.selectors.volume.display), Qe.duration = Q(C.selectors.duration), Qe.currentTime = Q(C.selectors.currentTime), Qe.seekTime = U(C.selectors.seekTime), !0
                } catch (e) {
                    return $e("It looks like there is a problem with your controls HTML"), J(!0), !1
                }
            }

            function K() {
                f(Qe.container, C.selectors.container.replace(".", ""), Qe.supported.full)
            }

            function J(e) {
                e && r(C.types.html5, Qe.type) ? Qe.media.setAttribute("controls", "") : Qe.media.removeAttribute("controls")
            }

            function Z(e) {
                var t = C.i18n.play;
                if (O.string(C.title) && C.title.length && (t += ", " + C.title, Qe.container.setAttribute("aria-label", C.title)), Qe.supported.full && Qe.buttons.play)
                    for (var i = Qe.buttons.play.length - 1; i >= 0; i--) Qe.buttons.play[i].setAttribute("aria-label", t);
                O.htmlElement(e) && e.setAttribute("title", C.i18n.frameTitle.replace("{title}", C.title))
            }

            function ee() {
                var t = null;
                Qe.storage = {}, D.supported && C.storage.enabled && (e.localStorage.removeItem("plyr-volume"), t = e.localStorage.getItem(C.storage.key), t && (/^\d+(\.\d+)?$/.test(t) ? te({
                    volume: parseFloat(t)
                }) : Qe.storage = JSON.parse(t)))
            }

            function te(t) {
                D.supported && C.storage.enabled && (S(Qe.storage, t), e.localStorage.setItem(C.storage.key, JSON.stringify(Qe.storage)))
            }

            function ie() {
                if (!Qe.media) return void $e("No media element found!");
                if (Qe.supported.full && (f(Qe.container, C.classes.type.replace("{0}", Qe.type), !0), r(C.types.embed, Qe.type) && f(Qe.container, C.classes.type.replace("{0}", "video"), !0), f(Qe.container, C.classes.stopped, C.autoplay), f(Qe.ontainer, C.classes.isIos, Qe.browser.isIos), f(Qe.container, C.classes.isTouch, Qe.browser.isTouch), "video" === Qe.type)) {
                    var e = t.createElement("div");
                    e.setAttribute("class", C.classes.videoWrapper),
                        a(Qe.media, e), Qe.videoContainer = e
                }
                r(C.types.embed, Qe.type) && ne()
            }

            function ne() {
                var i, n = t.createElement("div"),
                    r = Qe.type + "-" + Math.floor(1e4 * Math.random());
                switch (Qe.type) {
                    case "youtube":
                        i = k(Qe.embedId);
                        break;
                    case "vimeo":
                        i = _(Qe.embedId);
                        break;
                    default:
                        i = Qe.embedId
                }
                for (var s = U('[id^="' + Qe.type + '-"]'), a = s.length - 1; a >= 0; a--) l(s[a]);
                if (f(Qe.media, C.classes.videoWrapper, !0), f(Qe.media, C.classes.embedWrapper, !0), "youtube" === Qe.type) Qe.media.appendChild(n), n.setAttribute("id", r), O.object(e.YT) ? re(i, n) : (o(C.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function() {
                    re(i, n)
                }), e.onYouTubeIframeAPIReady = function() {
                    e.onYouTubeReadyCallbacks.forEach(function(e) {
                        e()
                    })
                });
                else if ("vimeo" === Qe.type)
                    if (Qe.supported.full ? Qe.media.appendChild(n) : n = Qe.media, n.setAttribute("id", r), O.object(e.Vimeo)) se(i, n);
                    else {
                        o(C.urls.vimeo.api);
                        var u = e.setInterval(function() {
                            O.object(e.Vimeo) && (e.clearInterval(u), se(i, n))
                        }, 50)
                    }
                else if ("soundcloud" === Qe.type) {
                    var d = t.createElement("iframe");
                    d.loaded = !1, v(d, "load", function() {
                        d.loaded = !0
                    }), c(d, {
                        src: "#" + i,
                        id: r
                    }), n.appendChild(d), Qe.media.appendChild(n), e.SC || o(C.urls.soundcloud.api);
                    var p = e.setInterval(function() {
                        e.SC && d.loaded && (e.clearInterval(p), ae.call(d))
                    }, 50)
                }
            }

            function oe() {
                Qe.supported.full && (qe(), He()), Z(Q("iframe"))
            }

            function re(t, i) {
                Qe.embed = new e.YT.Player(i.id, {
                    videoId: t,
                    playerVars: {
                        autoplay: C.autoplay ? 1 : 0,
                        controls: Qe.supported.full ? 0 : 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_load_policy: C.captions.defaultActive ? 1 : 0,
                        cc_lang_pref: "en",
                        wmode: "transparent",
                        modestbranding: 1,
                        disablekb: 1,
                        origin: "*"
                    },
                    events: {
                        onError: function(e) {
                            P(Qe.container, "error", !0, {
                                code: e.data,
                                embed: e.target
                            })
                        },
                        onReady: function(t) {
                            var i = t.target;
                            Qe.media.play = function() {
                                i.playVideo(), Qe.media.paused = !1
                            }, Qe.media.pause = function() {
                                i.pauseVideo(), Qe.media.paused = !0
                            }, Qe.media.stop = function() {
                                i.stopVideo(), Qe.media.paused = !0
                            }, Qe.media.duration = i.getDuration(), Qe.media.paused = !0, Qe.media.currentTime = 0, Qe.media.muted = i.isMuted(), C.title = i.getVideoData().title, Qe.supported.full && Qe.media.querySelector("iframe").setAttribute("tabindex", "-1"), oe(), P(Qe.media, "timeupdate"), P(Qe.media, "durationchange"), e.clearInterval(Ve.buffering), Ve.buffering = e.setInterval(function() {
                                Qe.media.buffered = i.getVideoLoadedFraction(), (null === Qe.media.lastBuffered || Qe.media.lastBuffered < Qe.media.buffered) && P(Qe.media, "progress"), Qe.media.lastBuffered = Qe.media.buffered, 1 === Qe.media.buffered && (e.clearInterval(Ve.buffering), P(Qe.media, "canplaythrough"))
                            }, 200)
                        },
                        onStateChange: function(t) {
                            var i = t.target;
                            switch (e.clearInterval(Ve.playing), t.data) {
                                case 0:
                                    Qe.media.paused = !0, P(Qe.media, "ended");
                                    break;
                                case 1:
                                    Qe.media.paused = !1, Qe.media.seeking && P(Qe.media, "seeked"), Qe.media.seeking = !1, P(Qe.media, "play"), P(Qe.media, "playing"), Ve.playing = e.setInterval(function() {
                                        Qe.media.currentTime = i.getCurrentTime(), P(Qe.media, "timeupdate")
                                    }, 100), Qe.media.duration !== i.getDuration() && (Qe.media.duration = i.getDuration(), P(Qe.media, "durationchange"));
                                    break;
                                case 2:
                                    Qe.media.paused = !0, P(Qe.media, "pause")
                            }
                            P(Qe.container, "statechange", !1, {
                                code: t.data
                            })
                        }
                    }
                })
            }

            function se(t, i) {
                Qe.embed = new e.Vimeo.Player(i, {
                    id: parseInt(t),
                    loop: C.loop,
                    autoplay: C.autoplay,
                    byline: !1,
                    portrait: !1,
                    title: !1
                }), Qe.media.play = function() {
                    Qe.embed.play(), Qe.media.paused = !1
                }, Qe.media.pause = function() {
                    Qe.embed.pause(), Qe.media.paused = !0
                }, Qe.media.stop = function() {
                    Qe.embed.stop(), Qe.media.paused = !0
                }, Qe.media.paused = !0, Qe.media.currentTime = 0, oe(), Qe.embed.getCurrentTime().then(function(e) {
                    Qe.media.currentTime = e, P(Qe.media, "timeupdate")
                }), Qe.embed.getDuration().then(function(e) {
                    Qe.media.duration = e, P(Qe.media, "durationchange")
                }), Qe.embed.on("loaded", function() {
                    O.htmlElement(Qe.embed.element) && Qe.supported.full && Qe.embed.element.setAttribute("tabindex", "-1")
                }), Qe.embed.on("play", function() {
                    Qe.media.paused = !1, P(Qe.media, "play"), P(Qe.media, "playing")
                }), Qe.embed.on("pause", function() {
                    Qe.media.paused = !0, P(Qe.media, "pause")
                }), Qe.embed.on("timeupdate", function(e) {
                    Qe.media.seeking = !1, Qe.media.currentTime = e.seconds, P(Qe.media, "timeupdate")
                }), Qe.embed.on("progress", function(e) {
                    Qe.media.buffered = e.percent, P(Qe.media, "progress"), 1 === parseInt(e.percent) && P(Qe.media, "canplaythrough")
                }), Qe.embed.on("seeked", function() {
                    Qe.media.seeking = !1, P(Qe.media, "seeked"), P(Qe.media, "play")
                }), Qe.embed.on("ended", function() {
                    Qe.media.paused = !0, P(Qe.media, "ended")
                })
            }

            function ae() {
                Qe.embed = e.SC.Widget(this), Qe.embed.bind(e.SC.Widget.Events.READY, function() {
                    Qe.media.play = function() {
                        Qe.embed.play(), Qe.media.paused = !1
                    }, Qe.media.pause = function() {
                        Qe.embed.pause(), Qe.media.paused = !0
                    }, Qe.media.stop = function() {
                        Qe.embed.seekTo(0), Qe.embed.pause(), Qe.media.paused = !0
                    }, Qe.media.paused = !0, Qe.media.currentTime = 0, Qe.embed.getDuration(function(e) {
                        Qe.media.duration = e / 1e3, oe()
                    }), Qe.embed.getPosition(function(e) {
                        Qe.media.currentTime = e, P(Qe.media, "timeupdate")
                    }), Qe.embed.bind(e.SC.Widget.Events.PLAY, function() {
                        Qe.media.paused = !1, P(Qe.media, "play"), P(Qe.media, "playing")
                    }), Qe.embed.bind(e.SC.Widget.Events.PAUSE, function() {
                        Qe.media.paused = !0, P(Qe.media, "pause")
                    }), Qe.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                        Qe.media.seeking = !1, Qe.media.currentTime = e.currentPosition / 1e3, P(Qe.media, "timeupdate")
                    }), Qe.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                        Qe.media.buffered = e.loadProgress, P(Qe.media, "progress"), 1 === parseInt(e.loadProgress) && P(Qe.media, "canplaythrough")
                    }), Qe.embed.bind(e.SC.Widget.Events.FINISH, function() {
                        Qe.media.paused = !0, P(Qe.media, "ended")
                    })
                })
            }

            function le() {
                "play" in Qe.media && Qe.media.play()
            }

            function ue() {
                "pause" in Qe.media && Qe.media.pause()
            }

            function ce(e) {
                return O.boolean(e) || (e = Qe.media.paused), e ? le() : ue(), e
            }

            function de(e) {
                O.number(e) || (e = C.seekTime), fe(Qe.media.currentTime - e)
            }

            function pe(e) {
                O.number(e) || (e = C.seekTime), fe(Qe.media.currentTime + e)
            }

            function fe(e) {
                var t = 0,
                    i = Qe.media.paused,
                    n = he();
                O.number(e) ? t = e : O.object(e) && r(["input", "change"], e.type) && (t = e.target.value / e.target.max * n), t < 0 ? t = 0 : t > n && (t = n), ze(t);
                try {
                    Qe.media.currentTime = t.toFixed(4)
                } catch (e) {}
                if (r(C.types.embed, Qe.type)) {
                    switch (Qe.type) {
                        case "youtube":
                            Qe.embed.seekTo(t);
                            break;
                        case "vimeo":
                            Qe.embed.setCurrentTime(t.toFixed(0));
                            break;
                        case "soundcloud":
                            Qe.embed.seekTo(1e3 * t)
                    }
                    i && ue(), P(Qe.media, "timeupdate"), Qe.media.seeking = !0, P(Qe.media, "seeking")
                }
                Ye("Seeking to " + Qe.media.currentTime + " seconds"), q(t)
            }

            function he() {
                var e = parseInt(C.duration),
                    t = 0;
                return null === Qe.media.duration || isNaN(Qe.media.duration) || (t = Qe.media.duration), isNaN(e) ? t : e
            }

            function me() {
                f(Qe.container, C.classes.playing, !Qe.media.paused), f(Qe.container, C.classes.stopped, Qe.media.paused), Me(Qe.media.paused)
            }

            function ge() {
                A = {
                    x: e.pageXOffset || 0,
                    y: e.pageYOffset || 0
                }
            }

            function ye() {
                e.scrollTo(A.x, A.y)
            }

            function ve(e) {
                var i = z.supportsFullScreen;
                if (i) {
                    if (!e || e.type !== z.fullScreenEventName) return z.isFullScreen(Qe.container) ? z.cancelFullScreen() : (ge(), z.requestFullScreen(Qe.container)), void(Qe.isFullscreen = z.isFullScreen(Qe.container));
                    Qe.isFullscreen = z.isFullScreen(Qe.container)
                } else Qe.isFullscreen = !Qe.isFullscreen, t.body.style.overflow = Qe.isFullscreen ? "hidden" : "";
                f(Qe.container, C.classes.fullscreen.active, Qe.isFullscreen), G(Qe.isFullscreen), Qe.buttons && Qe.buttons.fullscreen && x(Qe.buttons.fullscreen, Qe.isFullscreen), P(Qe.container, Qe.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Qe.isFullscreen && i && ye()
            }

            function be(e) {
                if (O.boolean(e) || (e = !Qe.media.muted), x(Qe.buttons.mute, e), Qe.media.muted = e, 0 === Qe.media.volume && xe(C.volume), r(C.types.embed, Qe.type)) {
                    switch (Qe.type) {
                        case "youtube":
                            Qe.embed[Qe.media.muted ? "mute" : "unMute"]();
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Qe.embed.setVolume(Qe.media.muted ? 0 : parseFloat(C.volume / C.volumeMax))
                    }
                    P(Qe.media, "volumechange")
                }
            }

            function xe(e) {
                var t = C.volumeMax,
                    i = C.volumeMin;
                if (O.undefined(e) && (e = Qe.storage.volume), (null === e || isNaN(e)) && (e = C.volume), e > t && (e = t), e < i && (e = i), Qe.media.volume = parseFloat(e / t), Qe.volume.display && (Qe.volume.display.value = e), r(C.types.embed, Qe.type)) {
                    switch (Qe.type) {
                        case "youtube":
                            Qe.embed.setVolume(100 * Qe.media.volume);
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Qe.embed.setVolume(Qe.media.volume)
                    }
                    P(Qe.media, "volumechange")
                }
                0 === e ? Qe.media.muted = !0 : Qe.media.muted && e > 0 && be()
            }

            function we(e) {
                var t = Qe.media.muted ? 0 : Qe.media.volume * C.volumeMax;
                O.number(e) || (e = C.volumeStep), xe(t + e)
            }

            function Se(e) {
                var t = Qe.media.muted ? 0 : Qe.media.volume * C.volumeMax;
                O.number(e) || (e = C.volumeStep), xe(t - e)
            }

            function ke() {
                var e = Qe.media.muted ? 0 : Qe.media.volume * C.volumeMax;
                Qe.supported.full && (Qe.volume.input && (Qe.volume.input.value = e), Qe.volume.display && (Qe.volume.display.value = e)), te({
                    volume: e
                }), f(Qe.container, C.classes.muted, 0 === e), Qe.supported.full && Qe.buttons.mute && x(Qe.buttons.mute, 0 === e)
            }

            function _e(e) {
                Qe.supported.full && Qe.buttons.captions && (O.boolean(e) || (e = Qe.container.className.indexOf(C.classes.captions.active) === -1), Qe.captionsEnabled = e, x(Qe.buttons.captions, Qe.captionsEnabled), f(Qe.container, C.classes.captions.active, Qe.captionsEnabled), P(Qe.container, Qe.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), te({
                    captionsEnabled: Qe.captionsEnabled
                }))
            }

            function Ee(e) {
                var t = "waiting" === e.type;
                clearTimeout(Ve.loading), Ve.loading = setTimeout(function() {
                    f(Qe.container, C.classes.loading, t), Me(t)
                }, t ? 250 : 0)
            }

            function Ce(e) {
                if (Qe.supported.full) {
                    var t = Qe.progress.played,
                        i = 0,
                        n = he();
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            if (Qe.controls.pressed) return;
                            i = w(Qe.media.currentTime, n), "timeupdate" === e.type && Qe.buttons.seek && (Qe.buttons.seek.value = i);
                            break;
                        case "playing":
                        case "progress":
                            t = Qe.progress.buffer, i = function() {
                                var e = Qe.media.buffered;
                                return e && e.length ? w(e.end(0), n) : O.number(e) ? 100 * e : 0
                            }()
                    }
                    Ie(t, i)
                }
            }

            function Ie(e, t) {
                if (Qe.supported.full) {
                    if (O.undefined(t) && (t = 0), O.undefined(e)) {
                        if (!Qe.progress || !Qe.progress.buffer) return;
                        e = Qe.progress.buffer
                    }
                    O.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
                }
            }

            function Te(e, t) {
                if (t) {
                    isNaN(e) && (e = 0), Qe.secs = parseInt(e % 60), Qe.mins = parseInt(e / 60 % 60), Qe.hours = parseInt(e / 60 / 60 % 60);
                    var i = parseInt(he() / 60 / 60 % 60) > 0;
                    Qe.secs = ("0" + Qe.secs).slice(-2), Qe.mins = ("0" + Qe.mins).slice(-2), t.innerHTML = (i ? Qe.hours + ":" : "") + Qe.mins + ":" + Qe.secs
                }
            }

            function Pe() {
                if (Qe.supported.full) {
                    var e = he() || 0;
                    !Qe.duration && C.displayDuration && Qe.media.paused && Te(e, Qe.currentTime), Qe.duration && Te(e, Qe.duration), Ae()
                }
            }

            function Le(e) {
                Te(Qe.media.currentTime, Qe.currentTime), e && "timeupdate" === e.type && Qe.media.seeking || Ce(e)
            }

            function ze(e) {
                O.number(e) || (e = 0);
                var t = he(),
                    i = w(e, t);
                Qe.progress && Qe.progress.played && (Qe.progress.played.value = i), Qe.buttons && Qe.buttons.seek && (Qe.buttons.seek.value = i)
            }

            function Ae(e) {
                var t = he();
                if (C.tooltips.seek && Qe.progress.container && 0 !== t) {
                    var i = Qe.progress.container.getBoundingClientRect(),
                        n = 0,
                        o = C.classes.tooltip + "--visible";
                    if (e) n = 100 / i.width * (e.pageX - i.left);
                    else {
                        if (!h(Qe.progress.tooltip, o)) return;
                        n = Qe.progress.tooltip.style.left.replace("%", "")
                    }
                    n < 0 ? n = 0 : n > 100 && (n = 100), Te(t / 100 * n, Qe.progress.tooltip), Qe.progress.tooltip.style.left = n + "%", e && r(["mouseenter", "mouseleave"], e.type) && f(Qe.progress.tooltip, o, "mouseenter" === e.type)
                }
            }

            function Me(t) {
                if (C.hideControls && "audio" !== Qe.type) {
                    var i = 0,
                        n = !1,
                        o = t,
                        s = h(Qe.container, C.classes.loading);
                    if (O.boolean(t) || (t && t.type ? (n = "enterfullscreen" === t.type, o = r(["mousemove", "touchstart", "mouseenter", "focus"], t.type), r(["mousemove", "touchmove"], t.type) && (i = 2e3), "focus" === t.type && (i = 3e3)) : o = h(Qe.container, C.classes.hideControls)), e.clearTimeout(Ve.hover), o || Qe.media.paused || s) {
                        if (f(Qe.container, C.classes.hideControls, !1), Qe.media.paused || s) return;
                        Qe.browser.isTouch && (i = 3e3)
                    }
                    o && Qe.media.paused || (Ve.hover = e.setTimeout(function() {
                        (!Qe.controls.pressed && !Qe.controls.hover || n) && f(Qe.container, C.classes.hideControls, !0)
                    }, i))
                }
            }

            function Oe(e) {
                if (!O.undefined(e)) return void De(e);
                var t;
                switch (Qe.type) {
                    case "youtube":
                        t = Qe.embed.getVideoUrl();
                        break;
                    case "vimeo":
                        Qe.embed.getVideoUrl.then(function(e) {
                            t = e
                        });
                        break;
                    case "soundcloud":
                        Qe.embed.getCurrentSound(function(e) {
                            t = e.permalink_url
                        });
                        break;
                    default:
                        t = Qe.media.currentSrc
                }
                return t || ""
            }

            function De(e) {
                function i() {
                    if (Qe.embed = null, l(Qe.media), "video" === Qe.type && Qe.videoContainer && l(Qe.videoContainer), Qe.container && Qe.container.removeAttribute("class"), "type" in e && (Qe.type = e.type, "video" === Qe.type)) {
                        var i = e.sources[0];
                        "type" in i && r(C.types.embed, i.type) && (Qe.type = i.type)
                    }
                    switch (Qe.supported = T(Qe.type), Qe.type) {
                        case "video":
                            Qe.media = t.createElement("video");
                            break;
                        case "audio":
                            Qe.media = t.createElement("audio");
                            break;
                        case "youtube":
                        case "vimeo":
                        case "soundcloud":
                            Qe.media = t.createElement("div"), Qe.embedId = e.sources[0].src
                    }
                    u(Qe.container, Qe.media), O.boolean(e.autoplay) && (C.autoplay = e.autoplay), r(C.types.html5, Qe.type) && (C.crossorigin && Qe.media.setAttribute("crossorigin", ""), C.autoplay && Qe.media.setAttribute("autoplay", ""), "poster" in e && Qe.media.setAttribute("poster", e.poster), C.loop && Qe.media.setAttribute("loop", "")), f(Qe.container, C.classes.fullscreen.active, Qe.isFullscreen), f(Qe.container, C.classes.captions.active, Qe.captionsEnabled), K(), r(C.types.html5, Qe.type) && Y("source", e.sources), ie(), r(C.types.html5, Qe.type) && ("tracks" in e && Y("track", e.tracks), Qe.media.load()), (r(C.types.html5, Qe.type) || r(C.types.embed, Qe.type) && !Qe.supported.full) && (qe(), He()), C.title = e.title, Z()
                }
                return O.object(e) && "sources" in e && e.sources.length ? (f(Qe.container, C.classes.ready, !1), ue(), ze(), Ie(), We(), void Re(i, !1)) : void $e("Invalid source format")
            }

            function Fe(e) {
                "video" === Qe.type && Qe.media.setAttribute("poster", e)
            }

            function je() {
                function i() {
                    var e = ce(),
                        t = Qe.buttons[e ? "play" : "pause"],
                        i = Qe.buttons[e ? "pause" : "play"];
                    if (i = i && i.length > 1 ? i[i.length - 1] : i[0]) {
                        var n = h(t, C.classes.tabFocus);
                        setTimeout(function() {
                            i.focus(), n && (f(t, C.classes.tabFocus, !1), f(i, C.classes.tabFocus, !0))
                        }, 100)
                    }
                }

                function n() {
                    var e = t.activeElement;
                    return e = e && e !== t.body ? t.querySelector(":focus") : null
                }

                function o(e) {
                    return e.keyCode ? e.keyCode : e.which
                }

                function s(e) {
                    for (var t in Qe.buttons) {
                        var i = Qe.buttons[t];
                        if (O.nodeList(i))
                            for (var n = 0; n < i.length; n++) f(i[n], C.classes.tabFocus, i[n] === e);
                        else f(i, C.classes.tabFocus, i === e)
                    }
                }

                function a(e) {
                    function t() {
                        var e = Qe.media.duration;
                        O.number(e) && fe(e / 10 * (i - 48))
                    }
                    var i = o(e),
                        n = "keydown" === e.type,
                        s = n && i === u;
                    if (O.number(i))
                        if (n) {
                            var a = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                            switch (r(a, i) && (e.preventDefault(), e.stopPropagation()), i) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    s || t();
                                    break;
                                case 32:
                                case 75:
                                    s || ce();
                                    break;
                                case 38:
                                    we();
                                    break;
                                case 40:
                                    Se();
                                    break;
                                case 77:
                                    s || be();
                                    break;
                                case 39:
                                    pe();
                                    break;
                                case 37:
                                    de();
                                    break;
                                case 70:
                                    ve();
                                    break;
                                case 67:
                                    s || _e()
                            }!z.supportsFullScreen && Qe.isFullscreen && 27 === i && ve(), u = i
                        } else u = null
                }
                var l = Qe.browser.isIE ? "change" : "input";
                if (C.keyboardShorcuts.focused) {
                    var u = null;
                    C.keyboardShorcuts.global && v(e, "keydown keyup", function(e) {
                        var t = o(e),
                            i = n(),
                            s = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67],
                            l = L().length;
                        1 !== l || !r(s, t) || O.htmlElement(i) && m(i, C.selectors.editable) || a(e)
                    }), v(Qe.container, "keydown keyup", a)
                }
                v(e, "keyup", function(e) {
                    var t = o(e),
                        i = n();
                    9 === t && s(i)
                }), v(t.body, "click", function() {
                    f(Q("." + C.classes.tabFocus), C.classes.tabFocus, !1)
                });
                for (var c in Qe.buttons) {
                    var d = Qe.buttons[c];
                    v(d, "blur", function() {
                        f(d, "tab-focus", !1)
                    })
                }
                g(Qe.buttons.play, "click", C.listeners.play, i), g(Qe.buttons.pause, "click", C.listeners.pause, i), g(Qe.buttons.restart, "click", C.listeners.restart, fe), g(Qe.buttons.rewind, "click", C.listeners.rewind, de), g(Qe.buttons.forward, "click", C.listeners.forward, pe), g(Qe.buttons.seek, l, C.listeners.seek, fe), g(Qe.volume.input, l, C.listeners.volume, function() {
                    xe(Qe.volume.input.value)
                }), g(Qe.buttons.mute, "click", C.listeners.mute, be), g(Qe.buttons.fullscreen, "click", C.listeners.fullscreen, ve), z.supportsFullScreen && v(t, z.fullScreenEventName, ve), v(Qe.buttons.captions, "click", _e), v(Qe.progress.container, "mouseenter mouseleave mousemove", Ae), C.hideControls && (v(Qe.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Me), v(Qe.controls, "mouseenter mouseleave", function(e) {
                    Qe.controls.hover = "mouseenter" === e.type
                }), v(Qe.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                    Qe.controls.pressed = r(["mousedown", "touchstart"], e.type)
                }), v(Qe.controls, "focus blur", Me, !0)), v(Qe.volume.input, "wheel", function(e) {
                    e.preventDefault();
                    var t = e.webkitDirectionInvertedFromDevice,
                        i = C.volumeStep / 5;
                    (e.deltaY < 0 || e.deltaX > 0) && (t ? Se(i) : we(i)), (e.deltaY > 0 || e.deltaX < 0) && (t ? we(i) : Se(i))
                })
            }

            function Be() {
                if (v(Qe.media, "timeupdate seeking", Le), v(Qe.media, "timeupdate", q), v(Qe.media, "durationchange loadedmetadata", Pe), v(Qe.media, "ended", function() {
                        "video" === Qe.type && C.showPosterOnEnd && ("video" === Qe.type && N(), fe(), Qe.media.load())
                    }), v(Qe.media, "progress playing", Ce), v(Qe.media, "volumechange", ke), v(Qe.media, "play pause ended", me), v(Qe.media, "waiting canplay seeked", Ee), C.clickToPlay && "audio" !== Qe.type) {
                    var e = Q("." + C.classes.videoWrapper);
                    if (!e) return;
                    e.style.cursor = "pointer", v(e, "click", function() {
                        C.hideControls && Qe.browser.isTouch && !Qe.media.paused || (Qe.media.paused ? le() : Qe.media.ended ? (fe(), le()) : ue())
                    })
                }
                C.disableContextMenu && v(Qe.media, "contextmenu", function(e) {
                    e.preventDefault()
                }), v(Qe.media, C.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                    P(Qe.container, e.type, !0)
                })
            }

            function We() {
                if (r(C.types.html5, Qe.type)) {
                    for (var e = Qe.media.querySelectorAll("source"), t = 0; t < e.length; t++) l(e[t]);
                    Qe.media.setAttribute("src", "#"), Qe.media.load(), Ye("Cancelled network requests")
                }
            }

            function Re(i, n) {
                function o() {
                    clearTimeout(Ve.cleanUp), O.boolean(n) || (n = !0), O.function(i) && i.call(Ge), n && (Qe.init = !1, Qe.container.parentNode.replaceChild(Ge, Qe.container), t.body.style.overflow = "", P(Ge, "destroyed", !0))
                }
                if (!Qe.init) return null;
                switch (Qe.type) {
                    case "youtube":
                        e.clearInterval(Ve.buffering), e.clearInterval(Ve.playing), Qe.embed.destroy(), o();
                        break;
                    case "vimeo":
                        Qe.embed.unload().then(o), Ve.cleanUp = e.setTimeout(o, 200);
                        break;
                    case "video":
                    case "audio":
                        J(!0), o()
                }
            }

            function Ne() {
                if (Qe.init) return null;
                if (z = E(), Qe.browser = i(), O.htmlElement(Qe.media)) {
                    ee();
                    var e = y.tagName.toLowerCase();
                    "div" === e ? (Qe.type = y.getAttribute("data-type"), Qe.embedId = y.getAttribute("data-video-id"), y.removeAttribute("data-type"), y.removeAttribute("data-video-id")) : (Qe.type = e, C.crossorigin = null !== y.getAttribute("crossorigin"), C.autoplay = C.autoplay || null !== y.getAttribute("autoplay"), C.loop = C.loop || null !== y.getAttribute("loop")), Qe.supported = T(Qe.type), Qe.supported.basic && (Qe.container = a(y, t.createElement("div")), Qe.container.setAttribute("tabindex", 0), K(), Ye("" + Qe.browser.name + " " + Qe.browser.version), ie(), (r(C.types.html5, Qe.type) || r(C.types.embed, Qe.type) && !Qe.supported.full) && (qe(), He(), Z()), Qe.init = !0)
                }
            }

            function qe() {
                if (!Qe.supported.full) return $e("Basic support only", Qe.type), l(Q(C.selectors.controls.wrapper)), l(Q(C.selectors.buttons.play)), void J(!0);
                var e = !U(C.selectors.controls.wrapper).length;
                e && $(), X() && (e && je(), Be(), J(), W(), R(), xe(), ke(), Le(), me())
            }

            function He() {
                e.setTimeout(function() {
                    P(Qe.media, "ready")
                }, 0), f(Qe.media, M.classes.setup, !0), f(Qe.container, C.classes.ready, !0), Qe.media.plyr = Ue, C.autoplay && le()
            }
            var Ue, Qe = this,
                Ve = {};
            Qe.media = y;
            var Ge = y.cloneNode(!0),
                Ye = function() {
                    F("log", arguments)
                },
                $e = function() {
                    F("warn", arguments)
                };
            return Ye("Config", C), Ue = {
                getOriginal: function() {
                    return Ge
                },
                getContainer: function() {
                    return Qe.container
                },
                getEmbed: function() {
                    return Qe.embed
                },
                getMedia: function() {
                    return Qe.media
                },
                getType: function() {
                    return Qe.type
                },
                getDuration: he,
                getCurrentTime: function() {
                    return Qe.media.currentTime
                },
                getVolume: function() {
                    return Qe.media.volume
                },
                isMuted: function() {
                    return Qe.media.muted
                },
                isReady: function() {
                    return h(Qe.container, C.classes.ready)
                },
                isLoading: function() {
                    return h(Qe.container, C.classes.loading)
                },
                isPaused: function() {
                    return Qe.media.paused
                },
                on: function(e, t) {
                    return v(Qe.container, e, t), this
                },
                play: le,
                pause: ue,
                stop: function() {
                    ue(), fe()
                },
                restart: fe,
                rewind: de,
                forward: pe,
                seek: fe,
                source: Oe,
                poster: Fe,
                setVolume: xe,
                togglePlay: ce,
                toggleMute: be,
                toggleCaptions: _e,
                toggleFullscreen: ve,
                toggleControls: Me,
                isFullscreen: function() {
                    return Qe.isFullscreen || !1
                },
                support: function(e) {
                    return n(Qe, e)
                },
                destroy: Re
            }, Ne(), Qe.init ? Ue : null
        }

        function I(e, i) {
            var n = new XMLHttpRequest;
            if (!O.string(i) || !O.htmlElement(t.querySelector("#" + i))) {
                var o = t.createElement("div");
                o.setAttribute("hidden", ""), O.string(i) && o.setAttribute("id", i), t.body.insertBefore(o, t.body.childNodes[0]), "withCredentials" in n && (n.open("GET", e, !0), n.onload = function() {
                    o.innerHTML = n.responseText
                }, n.send())
            }
        }

        function T(e) {
            var n = i(),
                o = n.isIE && n.version <= 9,
                r = n.isIos,
                s = n.isIphone,
                a = !!t.createElement("audio").canPlayType,
                l = !!t.createElement("video").canPlayType,
                u = !1,
                c = !1;
            switch (e) {
                case "video":
                    u = l, c = u && !o && !s;
                    break;
                case "audio":
                    u = a, c = u && !o;
                    break;
                case "vimeo":
                    u = !0, c = !o && !r;
                    break;
                case "youtube":
                    u = !0, c = !o && !r, r && !s && n.version >= 10 && (c = !0);
                    break;
                case "soundcloud":
                    u = !0, c = !o && !s;
                    break;
                default:
                    u = a && l, c = u && !o
            }
            return {
                basic: u,
                full: c
            }
        }

        function P(e, i) {
            function n(e, t) {
                h(t, M.classes.hook) || o.push({
                    target: e,
                    media: t
                })
            }
            var o = [],
                r = [],
                s = [M.selectors.html5, M.selectors.embed].join(",");
            if (O.string(e) ? e = t.querySelectorAll(e) : O.htmlElement(e) ? e = [e] : O.nodeList(e) || O.array(e) || O.string(e) || (O.undefined(i) && O.object(e) && (i = e), e = t.querySelectorAll(s)), O.nodeList(e) && (e = Array.prototype.slice.call(e)), !T().basic || !e.length) return !1;
            for (var a = 0; a < e.length; a++) {
                var l = e[a],
                    u = l.querySelectorAll(s);
                if (u.length)
                    for (var c = 0; c < u.length; c++) n(l, u[c]);
                else m(l, s) && n(l, l)
            }
            return o.forEach(function(e) {
                var t = e.target,
                    n = e.media,
                    o = !1;
                n === t && (o = !0);
                var s = {};
                try {
                    s = JSON.parse(t.getAttribute("data-plyr"))
                } catch (e) {}
                var a = S({}, M, i, s);
                if (!a.enabled) return null;
                var l = new C(n, a);
                if (O.object(l)) {
                    if (a.debug) {
                        var u = a.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                        v(l.getContainer(), u.join(" "), function(e) {
                            console.log([a.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                        })
                    }
                    b(l.getContainer(), "setup", !0, {
                        plyr: l
                    }), r.push(l)
                }
            }), r
        }

        function L(e) {
            if (O.string(e) ? e = t.querySelector(e) : O.undefined(e) && (e = t.body), O.htmlElement(e)) {
                var i = e.querySelectorAll("." + M.classes.setup),
                    n = [];
                return Array.prototype.slice.call(i).forEach(function(e) {
                    O.object(e.plyr) && n.push(e.plyr)
                }), n
            }
            return []
        }
        var z, A = {
                x: 0,
                y: 0
            },
            M = {
                enabled: !0,
                debug: !1,
                autoplay: !1,
                loop: !1,
                seekTime: 10,
                volume: 10,
                volumeMin: 0,
                volumeMax: 10,
                volumeStep: 1,
                duration: null,
                displayDuration: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "#",
                clickToPlay: !0,
                hideControls: !0,
                showPosterOnEnd: !1,
                disableContextMenu: !0,
                keyboardShorcuts: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                selectors: {
                    html5: "video, audio",
                    embed: "[data-type]",
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        seek: '[data-plyr="seek"]',
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        forward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        fullscreen: '[data-plyr="fullscreen"]'
                    },
                    volume: {
                        input: '[data-plyr="volume"]',
                        display: ".plyr__volume--display"
                    },
                    progress: {
                        container: ".plyr__progress",
                        buffer: ".plyr__progress--buffer",
                        played: ".plyr__progress--played"
                    },
                    captions: ".plyr__captions",
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration"
                },
                classes: {
                    setup: "plyr--setup",
                    ready: "plyr--ready",
                    videoWrapper: "plyr__video-wrapper",
                    embedWrapper: "plyr__video-embed",
                    type: "plyr--{0}",
                    stopped: "plyr--stopped",
                    playing: "plyr--playing",
                    muted: "plyr--muted",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        active: "plyr--fullscreen-active"
                    },
                    tabFocus: "tab-focus"
                },
                captions: {
                    defaultActive: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    allowAudio: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime} secs",
                    play: "Play",
                    pause: "Pause",
                    forward: "Forward {seektime} secs",
                    played: "played",
                    buffered: "buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    toggleMute: "Toggle Mute",
                    toggleCaptions: "Toggle Captions",
                    toggleFullscreen: "Toggle Fullscreen",
                    frameTitle: "Player for {title}"
                },
                types: {
                    embed: ["youtube", "vimeo", "soundcloud"],
                    html5: ["video", "audio"]
                },
                urls: {
                    vimeo: {
                        api: "#"
                    },
                    youtube: {
                        api: "#"
                    },
                    soundcloud: {
                        api: "#"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    forward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    fullscreen: null
                },
                events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
                logPrefix: "[Plyr]"
            },
            O = {
                object: function(e) {
                    return null !== e && "object" == typeof e
                },
                array: function(e) {
                    return null !== e && "object" == typeof e && e.constructor === Array
                },
                number: function(e) {
                    return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
                },
                string: function(e) {
                    return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
                },
                boolean: function(e) {
                    return null !== e && "boolean" == typeof e
                },
                nodeList: function(e) {
                    return null !== e && e instanceof NodeList
                },
                htmlElement: function(e) {
                    return null !== e && e instanceof HTMLElement
                },
                function: function(e) {
                    return null !== e && "function" == typeof e
                },
                undefined: function(e) {
                    return null !== e && "undefined" == typeof e
                }
            },
            D = {
                supported: function() {
                    if (!("localStorage" in e)) return !1;
                    try {
                        e.localStorage.setItem("___test", "OK");
                        var t = e.localStorage.getItem("___test");
                        return e.localStorage.removeItem("___test"), "OK" === t
                    } catch (e) {
                        return !1
                    }
                    return !1
                }()
            };
        return {
            setup: P,
            supported: T,
            loadSprite: I,
            get: L
        }
    }),
    function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(),
    function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
            return t(e, document)
        }) : e.plyr = t(e, document)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function i() {
            var e, i, n, o = navigator.userAgent,
                r = navigator.appName,
                s = "" + parseFloat(navigator.appVersion),
                a = parseInt(navigator.appVersion, 10),
                l = !1,
                u = !1,
                c = !1,
                d = !1;
            return navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1 ? (l = !0, r = "IE", s = "11") : (i = o.indexOf("MSIE")) !== -1 ? (l = !0, r = "IE", s = o.substring(i + 5)) : (i = o.indexOf("Chrome")) !== -1 ? (c = !0, r = "Chrome", s = o.substring(i + 7)) : (i = o.indexOf("Safari")) !== -1 ? (d = !0, r = "Safari", s = o.substring(i + 7), (i = o.indexOf("Version")) !== -1 && (s = o.substring(i + 8))) : (i = o.indexOf("Firefox")) !== -1 ? (u = !0, r = "Firefox", s = o.substring(i + 8)) : (e = o.lastIndexOf(" ") + 1) < (i = o.lastIndexOf("/")) && (r = o.substring(e, i), s = o.substring(i + 1), r.toLowerCase() === r.toUpperCase() && (r = navigator.appName)), (n = s.indexOf(";")) !== -1 && (s = s.substring(0, n)), (n = s.indexOf(" ")) !== -1 && (s = s.substring(0, n)), a = parseInt("" + s, 10), isNaN(a) && (s = "" + parseFloat(navigator.appVersion), a = parseInt(navigator.appVersion, 10)), {
                name: r,
                version: a,
                isIE: l,
                isFirefox: u,
                isChrome: c,
                isSafari: d,
                isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
                isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
                isTouch: "ontouchstart" in t.documentElement
            }
        }

        function n(e, t) {
            var i = e.media;
            if ("video" === e.type) switch (t) {
                case "video/webm":
                    return !(!i.canPlayType || !i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                case "video/mp4":
                    return !(!i.canPlayType || !i.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                case "video/ogg":
                    return !(!i.canPlayType || !i.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
            } else if ("audio" === e.type) switch (t) {
                case "audio/mpeg":
                    return !(!i.canPlayType || !i.canPlayType("audio/mpeg;").replace(/no/, ""));
                case "audio/ogg":
                    return !(!i.canPlayType || !i.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                case "audio/wav":
                    return !(!i.canPlayType || !i.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
            }
            return !1
        }

        function o(e) {
            if (!t.querySelectorAll('script[src="' + e + '"]').length) {
                var i = t.createElement("script");
                i.src = e;
                var n = t.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(i, n)
            }
        }

        function r(e, t) {
            return Array.prototype.indexOf && e.indexOf(t) !== -1
        }

        function s(e, t, i) {
            return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), i)
        }

        function a(e, t) {
            e.length || (e = [e]);
            for (var i = e.length - 1; i >= 0; i--) {
                var n = i > 0 ? t.cloneNode(!0) : t,
                    o = e[i],
                    r = o.parentNode,
                    s = o.nextSibling;
                return n.appendChild(o), s ? r.insertBefore(n, s) : r.appendChild(n), n
            }
        }

        function l(e) {
            e && e.parentNode.removeChild(e)
        }

        function u(e, t) {
            e.insertBefore(t, e.firstChild)
        }

        function c(e, t) {
            for (var i in t) e.setAttribute(i, O.boolean(t[i]) && t[i] ? "" : t[i])
        }

        function d(e, i, n) {
            var o = t.createElement(e);
            c(o, n), u(i, o)
        }

        function p(e) {
            return e.replace(".", "")
        }

        function f(e, t, i) {
            if (e)
                if (e.classList) e.classList[i ? "add" : "remove"](t);
                else {
                    var n = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                    e.className = n + (i ? " " + t : "")
                }
        }

        function h(e, t) {
            return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
        }

        function m(e, i) {
            var n = Element.prototype,
                o = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function(e) {
                    return [].indexOf.call(t.querySelectorAll(e), this) !== -1
                };
            return o.call(e, i)
        }

        function g(e, t, i, n, o) {
            v(e, t, function(t) {
                i && i.apply(e, [t]), n.apply(e, [t])
            }, o)
        }

        function y(e, t, i, n, o) {
            var r = t.split(" ");
            if (O.boolean(o) || (o = !1), e instanceof NodeList)
                for (var s = 0; s < e.length; s++) e[s] instanceof Node && y(e[s], arguments[1], arguments[2], arguments[3]);
            else
                for (var a = 0; a < r.length; a++) e[n ? "addEventListener" : "removeEventListener"](r[a], i, o)
        }

        function v(e, t, i, n) {
            e && y(e, t, i, !0, n)
        }

        function b(e, t, i, n) {
            if (e && t) {
                O.boolean(i) || (i = !1);
                var o = new CustomEvent(t, {
                    bubbles: i,
                    detail: n
                });
                e.dispatchEvent(o)
            }
        }

        function x(e, t) {
            if (e) return t = O.boolean(t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t
        }

        function w(e, t) {
            return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
        }

        function S() {
            var e = arguments;
            if (e.length) {
                if (1 === e.length) return e[0];
                for (var t = Array.prototype.shift.call(e), i = e.length, n = 0; n < i; n++) {
                    var o = e[n];
                    for (var r in o) o[r] && o[r].constructor && o[r].constructor === Object ? (t[r] = t[r] || {}, S(t[r], o[r])) : t[r] = o[r]
                }
                return t
            }
        }

        function k(e) {
            var t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            return e.match(t) ? RegExp.$2 : e
        }

        function _(e) {
            var t = /^.*(vimeo.com\/|video\/)(\d+).*/;
            return e.match(t) ? RegExp.$2 : e
        }

        function E() {
            var e = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    element: null,
                    prefix: ""
                },
                i = "webkit o moz ms khtml".split(" ");
            if (O.undefined(t.cancelFullScreen))
                for (var n = 0, o = i.length; n < o; n++) {
                    if (e.prefix = i[n], !O.undefined(t[e.prefix + "CancelFullScreen"])) {
                        e.supportsFullScreen = !0;
                        break
                    }
                    if (!O.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                        e.prefix = "ms", e.supportsFullScreen = !0;
                        break
                    }
                } else e.supportsFullScreen = !0;
            return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
                switch (O.undefined(e) && (e = t.body), this.prefix) {
                    case "":
                        return t.fullscreenElement === e;
                    case "moz":
                        return t.mozFullScreenElement === e;
                    default:
                        return t[this.prefix + "FullscreenElement"] === e
                }
            }, e.requestFullScreen = function(e) {
                return O.undefined(e) && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
            }, e.cancelFullScreen = function() {
                return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
            }, e.element = function() {
                return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
            }), e
        }

        function C(y, C) {
            function P(e, t, i, n) {
                b(e, t, i, S({}, n, {
                    plyr: Ue
                }))
            }

            function F(t, i) {
                C.debug && e.console && (i = Array.prototype.slice.call(i), O.string(C.logPrefix) && C.logPrefix.length && i.unshift(C.logPrefix), console[t].apply(console, i))
            }

            function j() {
                return {
                    url: C.iconUrl,
                    absolute: 0 === C.iconUrl.indexOf("http") || Qe.browser.isIE
                }
            }

            function B() {
                var e = [],
                    t = j(),
                    i = (t.absolute ? "" : t.url) + "#" + C.iconPrefix;
                return r(C.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + C.i18n.play + "</span>", "</button>"), e.push('<div class="plyr__controls">'), r(C.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + i + '-restart" /></svg>', '<span class="plyr__sr-only">' + C.i18n.restart + "</span>", "</button>"), r(C.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + i + '-rewind" /></svg>', '<span class="plyr__sr-only">' + C.i18n.rewind + "</span>", "</button>"), r(C.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + C.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + i + '-pause" /></svg>', '<span class="plyr__sr-only">' + C.i18n.pause + "</span>", "</button>"), r(C.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + i + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + C.i18n.forward + "</span>", "</button>"), r(C.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + C.i18n.buffered, "</progress>"), C.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")), r(C.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + C.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), r(C.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + C.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), r(C.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + i + '-muted" /></svg>', '<svg><use xlink:href="' + i + '-volume" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleMute + "</span>", "</button>"), r(C.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + C.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + C.volumeMin + '" max="' + C.volumeMax + '" value="' + C.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + C.volumeMax + '" value="' + C.volumeMin + '" role="presentation"></progress>', "</span>"), r(C.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + i + '-captions-on" /></svg>', '<svg><use xlink:href="' + i + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleCaptions + "</span>", "</button>"), r(C.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + i + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + i + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</div>"), e.join("")
            }

            function W() {
                if (Qe.supported.full && ("audio" !== Qe.type || C.fullscreen.allowAudio) && C.fullscreen.enabled) {
                    var e = z.supportsFullScreen;
                    e || C.fullscreen.fallback && !V() ? (Ye((e ? "Native" : "Fallback") + " fullscreen enabled"), f(Qe.container, C.classes.fullscreen.enabled, !0)) : Ye("Fullscreen not supported and fallback disabled"), Qe.buttons && Qe.buttons.fullscreen && x(Qe.buttons.fullscreen, !1), G()
                }
            }

            function R() {
                if ("video" === Qe.type) {
                    Q(C.selectors.captions) || Qe.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + p(C.selectors.captions) + '"></div>'), Qe.usingTextTracks = !1, Qe.media.textTracks && (Qe.usingTextTracks = !0);
                    for (var e, t = "", i = Qe.media.childNodes, n = 0; n < i.length; n++) "track" === i[n].nodeName.toLowerCase() && (e = i[n].kind, "captions" !== e && "subtitles" !== e || (t = i[n].getAttribute("src")));
                    if (Qe.captionExists = !0, "" === t ? (Qe.captionExists = !1, Ye("No caption track found")) : Ye("Caption track found; URI: " + t), Qe.captionExists) {
                        for (var o = Qe.media.textTracks, r = 0; r < o.length; r++) o[r].mode = "hidden";
                        if (H(Qe), (Qe.browser.isIE && Qe.browser.version >= 10 || Qe.browser.isFirefox && Qe.browser.version >= 31) && (Ye("Detected browser with known TextTrack issues - using manual fallback"), Qe.usingTextTracks = !1), Qe.usingTextTracks) {
                            Ye("TextTracks supported");
                            for (var s = 0; s < o.length; s++) {
                                var a = o[s];
                                "captions" !== a.kind && "subtitles" !== a.kind || v(a, "cuechange", function() {
                                    this.activeCues[0] && "text" in this.activeCues[0] ? N(this.activeCues[0].getCueAsHTML()) : N()
                                })
                            }
                        } else if (Ye("TextTracks not supported so rendering captions manually"), Qe.currentCaption = "", Qe.captions = [], "" !== t) {
                            var l = new XMLHttpRequest;
                            l.onreadystatechange = function() {
                                if (4 === l.readyState)
                                    if (200 === l.status) {
                                        var e, t = [],
                                            i = l.responseText,
                                            n = "\r\n";
                                        i.indexOf(n + n) === -1 && (n = i.indexOf("\r\r") !== -1 ? "\r" : "\n"), t = i.split(n + n);
                                        for (var o = 0; o < t.length; o++) {
                                            e = t[o], Qe.captions[o] = [];
                                            var r = e.split(n),
                                                s = 0;
                                            r[s].indexOf(":") === -1 && (s = 1), Qe.captions[o] = [r[s], r[s + 1]]
                                        }
                                        Qe.captions.shift(), Ye("Successfully loaded the caption file via AJAX")
                                    } else $e(C.logPrefix + "There was a problem loading the caption file via AJAX")
                            }, l.open("get", t, !0), l.send()
                        }
                    } else f(Qe.container, C.classes.captions.enabled)
                }
            }

            function N(e) {
                var i = Q(C.selectors.captions),
                    n = t.createElement("span");
                i.innerHTML = "", O.undefined(e) && (e = ""), O.string(e) ? n.innerHTML = e.trim() : n.appendChild(e), i.appendChild(n);
                i.offsetHeight
            }

            function q(e) {
                function t(e, t) {
                    var i = [];
                    i = e.split(" --> ");
                    for (var n = 0; n < i.length; n++) i[n] = i[n].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                    return o(i[t])
                }

                function i(e) {
                    return t(e, 0)
                }

                function n(e) {
                    return t(e, 1)
                }

                function o(e) {
                    if (null === e || void 0 === e) return 0;
                    var t, i = [],
                        n = [];
                    return i = e.split(","), n = i[0].split(":"), t = Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
                }
                if (!Qe.usingTextTracks && "video" === Qe.type && Qe.supported.full && (Qe.subcount = 0, e = O.number(e) ? e : Qe.media.currentTime, Qe.captions[Qe.subcount])) {
                    for (; n(Qe.captions[Qe.subcount][0]) < e.toFixed(1);)
                        if (Qe.subcount++, Qe.subcount > Qe.captions.length - 1) {
                            Qe.subcount = Qe.captions.length - 1;
                            break
                        } Qe.media.currentTime.toFixed(1) >= i(Qe.captions[Qe.subcount][0]) && Qe.media.currentTime.toFixed(1) <= n(Qe.captions[Qe.subcount][0]) ? (Qe.currentCaption = Qe.captions[Qe.subcount][1], N(Qe.currentCaption)) : N()
                }
            }

            function H() {
                if (Qe.buttons.captions) {
                    f(Qe.container, C.classes.captions.enabled, !0);
                    var e = Qe.storage.captionsEnabled;
                    O.boolean(e) || (e = C.captions.defaultActive), e && (f(Qe.container, C.classes.captions.active, !0), x(Qe.buttons.captions, !0))
                }
            }

            function U(e) {
                return Qe.container.querySelectorAll(e)
            }

            function Q(e) {
                return U(e)[0]
            }

            function V() {
                try {
                    return e.self !== e.top
                } catch (e) {
                    return !0
                }
            }

            function G() {
                function e(e) {
                    9 === e.which && Qe.isFullscreen && (e.target !== n || e.shiftKey ? e.target === i && e.shiftKey && (e.preventDefault(), n.focus()) : (e.preventDefault(), i.focus()))
                }
                var t = U("input:not([disabled]), button:not([disabled])"),
                    i = t[0],
                    n = t[t.length - 1];
                v(Qe.container, "keydown", e)
            }

            function Y(e, t) {
                if (O.string(t)) d(e, Qe.media, {
                    src: t
                });
                else if (t.constructor === Array)
                    for (var i = t.length - 1; i >= 0; i--) d(e, Qe.media, t[i])
            }

            function $() {
                if (C.loadSprite) {
                    var e = j();
                    e.absolute ? (Ye("AJAX loading absolute SVG sprite" + (Qe.browser.isIE ? " (due to IE)" : "")), I(e.url, "sprite-plyr")) : Ye("Sprite will be used as external resource directly")
                }
                var i = C.html;
                Ye("Injecting custom controls"), i || (i = B()), i = s(i, "{seektime}", C.seekTime), i = s(i, "{id}", Math.floor(1e4 * Math.random()));
                var n;
                if (O.string(C.selectors.controls.container) && (n = t.querySelector(C.selectors.controls.container)), O.htmlElement(n) || (n = Qe.container), n.insertAdjacentHTML("beforeend", i), C.tooltips.controls)
                    for (var o = U([C.selectors.controls.wrapper, " ", C.selectors.labels, " .", C.classes.hidden].join("")), r = o.length - 1; r >= 0; r--) {
                        var a = o[r];
                        f(a, C.classes.hidden, !1), f(a, C.classes.tooltip, !0)
                    }
            }

            function X() {
                try {
                    return Qe.controls = Q(C.selectors.controls.wrapper), Qe.buttons = {}, Qe.buttons.seek = Q(C.selectors.buttons.seek), Qe.buttons.play = U(C.selectors.buttons.play), Qe.buttons.pause = Q(C.selectors.buttons.pause), Qe.buttons.restart = Q(C.selectors.buttons.restart), Qe.buttons.rewind = Q(C.selectors.buttons.rewind), Qe.buttons.forward = Q(C.selectors.buttons.forward), Qe.buttons.fullscreen = Q(C.selectors.buttons.fullscreen), Qe.buttons.mute = Q(C.selectors.buttons.mute), Qe.buttons.captions = Q(C.selectors.buttons.captions), Qe.progress = {}, Qe.progress.container = Q(C.selectors.progress.container), Qe.progress.buffer = {}, Qe.progress.buffer.bar = Q(C.selectors.progress.buffer), Qe.progress.buffer.text = Qe.progress.buffer.bar && Qe.progress.buffer.bar.getElementsByTagName("span")[0], Qe.progress.played = Q(C.selectors.progress.played), Qe.progress.tooltip = Qe.progress.container && Qe.progress.container.querySelector("." + C.classes.tooltip), Qe.volume = {}, Qe.volume.input = Q(C.selectors.volume.input), Qe.volume.display = Q(C.selectors.volume.display), Qe.duration = Q(C.selectors.duration), Qe.currentTime = Q(C.selectors.currentTime), Qe.seekTime = U(C.selectors.seekTime), !0
                } catch (e) {
                    return $e("It looks like there is a problem with your controls HTML"), J(!0), !1
                }
            }

            function K() {
                f(Qe.container, C.selectors.container.replace(".", ""), Qe.supported.full)
            }

            function J(e) {
                e && r(C.types.html5, Qe.type) ? Qe.media.setAttribute("controls", "") : Qe.media.removeAttribute("controls")
            }

            function Z(e) {
                var t = C.i18n.play;
                if (O.string(C.title) && C.title.length && (t += ", " + C.title, Qe.container.setAttribute("aria-label", C.title)), Qe.supported.full && Qe.buttons.play)
                    for (var i = Qe.buttons.play.length - 1; i >= 0; i--) Qe.buttons.play[i].setAttribute("aria-label", t);
                O.htmlElement(e) && e.setAttribute("title", C.i18n.frameTitle.replace("{title}", C.title))
            }

            function ee() {
                var t = null;
                Qe.storage = {}, D.supported && C.storage.enabled && (e.localStorage.removeItem("plyr-volume"), t = e.localStorage.getItem(C.storage.key), t && (/^\d+(\.\d+)?$/.test(t) ? te({
                    volume: parseFloat(t)
                }) : Qe.storage = JSON.parse(t)))
            }

            function te(t) {
                D.supported && C.storage.enabled && (S(Qe.storage, t), e.localStorage.setItem(C.storage.key, JSON.stringify(Qe.storage)))
            }

            function ie() {
                if (!Qe.media) return void $e("No media element found!");
                if (Qe.supported.full && (f(Qe.container, C.classes.type.replace("{0}", Qe.type), !0), r(C.types.embed, Qe.type) && f(Qe.container, C.classes.type.replace("{0}", "video"), !0), f(Qe.container, C.classes.stopped, C.autoplay), f(Qe.ontainer, C.classes.isIos, Qe.browser.isIos), f(Qe.container, C.classes.isTouch, Qe.browser.isTouch), "video" === Qe.type)) {
                    var e = t.createElement("div");
                    e.setAttribute("class", C.classes.videoWrapper), a(Qe.media, e), Qe.videoContainer = e
                }
                r(C.types.embed, Qe.type) && ne()
            }

            function ne() {
                var i, n = t.createElement("div"),
                    r = Qe.type + "-" + Math.floor(1e4 * Math.random());
                switch (Qe.type) {
                    case "youtube":
                        i = k(Qe.embedId);
                        break;
                    case "vimeo":
                        i = _(Qe.embedId);
                        break;
                    default:
                        i = Qe.embedId
                }
                for (var s = U('[id^="' + Qe.type + '-"]'), a = s.length - 1; a >= 0; a--) l(s[a]);
                if (f(Qe.media, C.classes.videoWrapper, !0), f(Qe.media, C.classes.embedWrapper, !0), "youtube" === Qe.type) Qe.media.appendChild(n), n.setAttribute("id", r), O.object(e.YT) ? re(i, n) : (o(C.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function() {
                    re(i, n)
                }), e.onYouTubeIframeAPIReady = function() {
                    e.onYouTubeReadyCallbacks.forEach(function(e) {
                        e()
                    })
                });
                else if ("vimeo" === Qe.type)
                    if (Qe.supported.full ? Qe.media.appendChild(n) : n = Qe.media, n.setAttribute("id", r), O.object(e.Vimeo)) se(i, n);
                    else {
                        o(C.urls.vimeo.api);
                        var u = e.setInterval(function() {
                            O.object(e.Vimeo) && (e.clearInterval(u), se(i, n))
                        }, 50)
                    }
                else if ("soundcloud" === Qe.type) {
                    var d = t.createElement("iframe");
                    d.loaded = !1, v(d, "load", function() {
                        d.loaded = !0
                    }), c(d, {
                        src: "#" + i,
                        id: r
                    }), n.appendChild(d), Qe.media.appendChild(n), e.SC || o(C.urls.soundcloud.api);
                    var p = e.setInterval(function() {
                        e.SC && d.loaded && (e.clearInterval(p), ae.call(d))
                    }, 50)
                }
            }

            function oe() {
                Qe.supported.full && (qe(), He()), Z(Q("iframe"))
            }

            function re(t, i) {
                Qe.embed = new e.YT.Player(i.id, {
                    videoId: t,
                    playerVars: {
                        autoplay: C.autoplay ? 1 : 0,
                        controls: Qe.supported.full ? 0 : 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_load_policy: C.captions.defaultActive ? 1 : 0,
                        cc_lang_pref: "en",
                        wmode: "transparent",
                        modestbranding: 1,
                        disablekb: 1,
                        origin: "*"
                    },
                    events: {
                        onError: function(e) {
                            P(Qe.container, "error", !0, {
                                code: e.data,
                                embed: e.target
                            })
                        },
                        onReady: function(t) {
                            var i = t.target;
                            Qe.media.play = function() {
                                i.playVideo(), Qe.media.paused = !1
                            }, Qe.media.pause = function() {
                                i.pauseVideo(), Qe.media.paused = !0
                            }, Qe.media.stop = function() {
                                i.stopVideo(), Qe.media.paused = !0
                            }, Qe.media.duration = i.getDuration(), Qe.media.paused = !0, Qe.media.currentTime = 0, Qe.media.muted = i.isMuted(), C.title = i.getVideoData().title, Qe.supported.full && Qe.media.querySelector("iframe").setAttribute("tabindex", "-1"), oe(), P(Qe.media, "timeupdate"), P(Qe.media, "durationchange"), e.clearInterval(Ve.buffering), Ve.buffering = e.setInterval(function() {
                                Qe.media.buffered = i.getVideoLoadedFraction(), (null === Qe.media.lastBuffered || Qe.media.lastBuffered < Qe.media.buffered) && P(Qe.media, "progress"), Qe.media.lastBuffered = Qe.media.buffered, 1 === Qe.media.buffered && (e.clearInterval(Ve.buffering), P(Qe.media, "canplaythrough"))
                            }, 200)
                        },
                        onStateChange: function(t) {
                            var i = t.target;
                            switch (e.clearInterval(Ve.playing), t.data) {
                                case 0:
                                    Qe.media.paused = !0, P(Qe.media, "ended");
                                    break;
                                case 1:
                                    Qe.media.paused = !1, Qe.media.seeking && P(Qe.media, "seeked"), Qe.media.seeking = !1, P(Qe.media, "play"), P(Qe.media, "playing"), Ve.playing = e.setInterval(function() {
                                        Qe.media.currentTime = i.getCurrentTime(), P(Qe.media, "timeupdate")
                                    }, 100), Qe.media.duration !== i.getDuration() && (Qe.media.duration = i.getDuration(), P(Qe.media, "durationchange"));
                                    break;
                                case 2:
                                    Qe.media.paused = !0, P(Qe.media, "pause")
                            }
                            P(Qe.container, "statechange", !1, {
                                code: t.data
                            })
                        }
                    }
                })
            }

            function se(t, i) {
                Qe.embed = new e.Vimeo.Player(i, {
                    id: parseInt(t),
                    loop: C.loop,
                    autoplay: C.autoplay,
                    byline: !1,
                    portrait: !1,
                    title: !1
                }), Qe.media.play = function() {
                    Qe.embed.play(), Qe.media.paused = !1
                }, Qe.media.pause = function() {
                    Qe.embed.pause(), Qe.media.paused = !0
                }, Qe.media.stop = function() {
                    Qe.embed.stop(), Qe.media.paused = !0
                }, Qe.media.paused = !0, Qe.media.currentTime = 0, oe(), Qe.embed.getCurrentTime().then(function(e) {
                    Qe.media.currentTime = e, P(Qe.media, "timeupdate")
                }), Qe.embed.getDuration().then(function(e) {
                    Qe.media.duration = e, P(Qe.media, "durationchange")
                }), Qe.embed.on("loaded", function() {
                    O.htmlElement(Qe.embed.element) && Qe.supported.full && Qe.embed.element.setAttribute("tabindex", "-1")
                }), Qe.embed.on("play", function() {
                    Qe.media.paused = !1, P(Qe.media, "play"), P(Qe.media, "playing")
                }), Qe.embed.on("pause", function() {
                    Qe.media.paused = !0, P(Qe.media, "pause")
                }), Qe.embed.on("timeupdate", function(e) {
                    Qe.media.seeking = !1, Qe.media.currentTime = e.seconds, P(Qe.media, "timeupdate")
                }), Qe.embed.on("progress", function(e) {
                    Qe.media.buffered = e.percent, P(Qe.media, "progress"), 1 === parseInt(e.percent) && P(Qe.media, "canplaythrough")
                }), Qe.embed.on("seeked", function() {
                    Qe.media.seeking = !1, P(Qe.media, "seeked"), P(Qe.media, "play")
                }), Qe.embed.on("ended", function() {
                    Qe.media.paused = !0, P(Qe.media, "ended")
                })
            }

            function ae() {
                Qe.embed = e.SC.Widget(this), Qe.embed.bind(e.SC.Widget.Events.READY, function() {
                    Qe.media.play = function() {
                        Qe.embed.play(), Qe.media.paused = !1
                    }, Qe.media.pause = function() {
                        Qe.embed.pause(), Qe.media.paused = !0
                    }, Qe.media.stop = function() {
                        Qe.embed.seekTo(0), Qe.embed.pause(), Qe.media.paused = !0
                    }, Qe.media.paused = !0, Qe.media.currentTime = 0, Qe.embed.getDuration(function(e) {
                        Qe.media.duration = e / 1e3, oe()
                    }), Qe.embed.getPosition(function(e) {
                        Qe.media.currentTime = e, P(Qe.media, "timeupdate")
                    }), Qe.embed.bind(e.SC.Widget.Events.PLAY, function() {
                        Qe.media.paused = !1, P(Qe.media, "play"), P(Qe.media, "playing")
                    }), Qe.embed.bind(e.SC.Widget.Events.PAUSE, function() {
                        Qe.media.paused = !0, P(Qe.media, "pause")
                    }), Qe.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                        Qe.media.seeking = !1, Qe.media.currentTime = e.currentPosition / 1e3, P(Qe.media, "timeupdate")
                    }), Qe.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                        Qe.media.buffered = e.loadProgress, P(Qe.media, "progress"), 1 === parseInt(e.loadProgress) && P(Qe.media, "canplaythrough")
                    }), Qe.embed.bind(e.SC.Widget.Events.FINISH, function() {
                        Qe.media.paused = !0, P(Qe.media, "ended")
                    })
                })
            }

            function le() {
                "play" in Qe.media && Qe.media.play()
            }

            function ue() {
                "pause" in Qe.media && Qe.media.pause()
            }

            function ce(e) {
                return O.boolean(e) || (e = Qe.media.paused), e ? le() : ue(), e
            }

            function de(e) {
                O.number(e) || (e = C.seekTime), fe(Qe.media.currentTime - e)
            }

            function pe(e) {
                O.number(e) || (e = C.seekTime), fe(Qe.media.currentTime + e)
            }

            function fe(e) {
                var t = 0,
                    i = Qe.media.paused,
                    n = he();
                O.number(e) ? t = e : O.object(e) && r(["input", "change"], e.type) && (t = e.target.value / e.target.max * n), t < 0 ? t = 0 : t > n && (t = n), ze(t);
                try {
                    Qe.media.currentTime = t.toFixed(4)
                } catch (e) {}
                if (r(C.types.embed, Qe.type)) {
                    switch (Qe.type) {
                        case "youtube":
                            Qe.embed.seekTo(t);
                            break;
                        case "vimeo":
                            Qe.embed.setCurrentTime(t.toFixed(0));
                            break;
                        case "soundcloud":
                            Qe.embed.seekTo(1e3 * t)
                    }
                    i && ue(), P(Qe.media, "timeupdate"), Qe.media.seeking = !0, P(Qe.media, "seeking")
                }
                Ye("Seeking to " + Qe.media.currentTime + " seconds"), q(t)
            }

            function he() {
                var e = parseInt(C.duration),
                    t = 0;
                return null === Qe.media.duration || isNaN(Qe.media.duration) || (t = Qe.media.duration), isNaN(e) ? t : e
            }

            function me() {
                f(Qe.container, C.classes.playing, !Qe.media.paused), f(Qe.container, C.classes.stopped, Qe.media.paused), Me(Qe.media.paused)
            }

            function ge() {
                A = {
                    x: e.pageXOffset || 0,
                    y: e.pageYOffset || 0
                }
            }

            function ye() {
                e.scrollTo(A.x, A.y)
            }

            function ve(e) {
                var i = z.supportsFullScreen;
                if (i) {
                    if (!e || e.type !== z.fullScreenEventName) return z.isFullScreen(Qe.container) ? z.cancelFullScreen() : (ge(), z.requestFullScreen(Qe.container)), void(Qe.isFullscreen = z.isFullScreen(Qe.container));
                    Qe.isFullscreen = z.isFullScreen(Qe.container)
                } else Qe.isFullscreen = !Qe.isFullscreen, t.body.style.overflow = Qe.isFullscreen ? "hidden" : "";
                f(Qe.container, C.classes.fullscreen.active, Qe.isFullscreen), G(Qe.isFullscreen), Qe.buttons && Qe.buttons.fullscreen && x(Qe.buttons.fullscreen, Qe.isFullscreen), P(Qe.container, Qe.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Qe.isFullscreen && i && ye()
            }

            function be(e) {
                if (O.boolean(e) || (e = !Qe.media.muted), x(Qe.buttons.mute, e), Qe.media.muted = e, 0 === Qe.media.volume && xe(C.volume), r(C.types.embed, Qe.type)) {
                    switch (Qe.type) {
                        case "youtube":
                            Qe.embed[Qe.media.muted ? "mute" : "unMute"]();
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Qe.embed.setVolume(Qe.media.muted ? 0 : parseFloat(C.volume / C.volumeMax))
                    }
                    P(Qe.media, "volumechange")
                }
            }

            function xe(e) {
                var t = C.volumeMax,
                    i = C.volumeMin;
                if (O.undefined(e) && (e = Qe.storage.volume), (null === e || isNaN(e)) && (e = C.volume), e > t && (e = t), e < i && (e = i), Qe.media.volume = parseFloat(e / t), Qe.volume.display && (Qe.volume.display.value = e), r(C.types.embed, Qe.type)) {
                    switch (Qe.type) {
                        case "youtube":
                            Qe.embed.setVolume(100 * Qe.media.volume);
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Qe.embed.setVolume(Qe.media.volume)
                    }
                    P(Qe.media, "volumechange")
                }
                0 === e ? Qe.media.muted = !0 : Qe.media.muted && e > 0 && be()
            }

            function we(e) {
                var t = Qe.media.muted ? 0 : Qe.media.volume * C.volumeMax;
                O.number(e) || (e = C.volumeStep), xe(t + e)
            }

            function Se(e) {
                var t = Qe.media.muted ? 0 : Qe.media.volume * C.volumeMax;
                O.number(e) || (e = C.volumeStep), xe(t - e)
            }

            function ke() {
                var e = Qe.media.muted ? 0 : Qe.media.volume * C.volumeMax;
                Qe.supported.full && (Qe.volume.input && (Qe.volume.input.value = e), Qe.volume.display && (Qe.volume.display.value = e)), te({
                    volume: e
                }), f(Qe.container, C.classes.muted, 0 === e), Qe.supported.full && Qe.buttons.mute && x(Qe.buttons.mute, 0 === e)
            }

            function _e(e) {
                Qe.supported.full && Qe.buttons.captions && (O.boolean(e) || (e = Qe.container.className.indexOf(C.classes.captions.active) === -1), Qe.captionsEnabled = e, x(Qe.buttons.captions, Qe.captionsEnabled), f(Qe.container, C.classes.captions.active, Qe.captionsEnabled), P(Qe.container, Qe.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), te({
                    captionsEnabled: Qe.captionsEnabled
                }))
            }

            function Ee(e) {
                var t = "waiting" === e.type;
                clearTimeout(Ve.loading), Ve.loading = setTimeout(function() {
                    f(Qe.container, C.classes.loading, t), Me(t)
                }, t ? 250 : 0)
            }

            function Ce(e) {
                if (Qe.supported.full) {
                    var t = Qe.progress.played,
                        i = 0,
                        n = he();
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            if (Qe.controls.pressed) return;
                            i = w(Qe.media.currentTime, n), "timeupdate" === e.type && Qe.buttons.seek && (Qe.buttons.seek.value = i);
                            break;
                        case "playing":
                        case "progress":
                            t = Qe.progress.buffer, i = function() {
                                var e = Qe.media.buffered;
                                return e && e.length ? w(e.end(0), n) : O.number(e) ? 100 * e : 0
                            }()
                    }
                    Ie(t, i)
                }
            }

            function Ie(e, t) {
                if (Qe.supported.full) {
                    if (O.undefined(t) && (t = 0), O.undefined(e)) {
                        if (!Qe.progress || !Qe.progress.buffer) return;
                        e = Qe.progress.buffer
                    }
                    O.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
                }
            }

            function Te(e, t) {
                if (t) {
                    isNaN(e) && (e = 0), Qe.secs = parseInt(e % 60), Qe.mins = parseInt(e / 60 % 60), Qe.hours = parseInt(e / 60 / 60 % 60);
                    var i = parseInt(he() / 60 / 60 % 60) > 0;
                    Qe.secs = ("0" + Qe.secs).slice(-2), Qe.mins = ("0" + Qe.mins).slice(-2), t.innerHTML = (i ? Qe.hours + ":" : "") + Qe.mins + ":" + Qe.secs
                }
            }

            function Pe() {
                if (Qe.supported.full) {
                    var e = he() || 0;
                    !Qe.duration && C.displayDuration && Qe.media.paused && Te(e, Qe.currentTime), Qe.duration && Te(e, Qe.duration), Ae()
                }
            }

            function Le(e) {
                Te(Qe.media.currentTime, Qe.currentTime), e && "timeupdate" === e.type && Qe.media.seeking || Ce(e)
            }

            function ze(e) {
                O.number(e) || (e = 0);
                var t = he(),
                    i = w(e, t);
                Qe.progress && Qe.progress.played && (Qe.progress.played.value = i), Qe.buttons && Qe.buttons.seek && (Qe.buttons.seek.value = i)
            }

            function Ae(e) {
                var t = he();
                if (C.tooltips.seek && Qe.progress.container && 0 !== t) {
                    var i = Qe.progress.container.getBoundingClientRect(),
                        n = 0,
                        o = C.classes.tooltip + "--visible";
                    if (e) n = 100 / i.width * (e.pageX - i.left);
                    else {
                        if (!h(Qe.progress.tooltip, o)) return;
                        n = Qe.progress.tooltip.style.left.replace("%", "")
                    }
                    n < 0 ? n = 0 : n > 100 && (n = 100), Te(t / 100 * n, Qe.progress.tooltip), Qe.progress.tooltip.style.left = n + "%", e && r(["mouseenter", "mouseleave"], e.type) && f(Qe.progress.tooltip, o, "mouseenter" === e.type)
                }
            }

            function Me(t) {
                if (C.hideControls && "audio" !== Qe.type) {
                    var i = 0,
                        n = !1,
                        o = t,
                        s = h(Qe.container, C.classes.loading);
                    if (O.boolean(t) || (t && t.type ? (n = "enterfullscreen" === t.type, o = r(["mousemove", "touchstart", "mouseenter", "focus"], t.type), r(["mousemove", "touchmove"], t.type) && (i = 2e3), "focus" === t.type && (i = 3e3)) : o = h(Qe.container, C.classes.hideControls)), e.clearTimeout(Ve.hover), o || Qe.media.paused || s) {
                        if (f(Qe.container, C.classes.hideControls, !1), Qe.media.paused || s) return;
                        Qe.browser.isTouch && (i = 3e3)
                    }
                    o && Qe.media.paused || (Ve.hover = e.setTimeout(function() {
                        (!Qe.controls.pressed && !Qe.controls.hover || n) && f(Qe.container, C.classes.hideControls, !0)
                    }, i))
                }
            }

            function Oe(e) {
                if (!O.undefined(e)) return void De(e);
                var t;
                switch (Qe.type) {
                    case "youtube":
                        t = Qe.embed.getVideoUrl();
                        break;
                    case "vimeo":
                        Qe.embed.getVideoUrl.then(function(e) {
                            t = e
                        });
                        break;
                    case "soundcloud":
                        Qe.embed.getCurrentSound(function(e) {
                            t = e.permalink_url
                        });
                        break;
                    default:
                        t = Qe.media.currentSrc
                }
                return t || ""
            }

            function De(e) {
                function i() {
                    if (Qe.embed = null, l(Qe.media), "video" === Qe.type && Qe.videoContainer && l(Qe.videoContainer), Qe.container && Qe.container.removeAttribute("class"), "type" in e && (Qe.type = e.type, "video" === Qe.type)) {
                        var i = e.sources[0];
                        "type" in i && r(C.types.embed, i.type) && (Qe.type = i.type)
                    }
                    switch (Qe.supported = T(Qe.type), Qe.type) {
                        case "video":
                            Qe.media = t.createElement("video");
                            break;
                        case "audio":
                            Qe.media = t.createElement("audio");
                            break;
                        case "youtube":
                        case "vimeo":
                        case "soundcloud":
                            Qe.media = t.createElement("div"), Qe.embedId = e.sources[0].src
                    }
                    u(Qe.container, Qe.media), O.boolean(e.autoplay) && (C.autoplay = e.autoplay), r(C.types.html5, Qe.type) && (C.crossorigin && Qe.media.setAttribute("crossorigin", ""), C.autoplay && Qe.media.setAttribute("autoplay", ""), "poster" in e && Qe.media.setAttribute("poster", e.poster), C.loop && Qe.media.setAttribute("loop", "")), f(Qe.container, C.classes.fullscreen.active, Qe.isFullscreen), f(Qe.container, C.classes.captions.active, Qe.captionsEnabled), K(), r(C.types.html5, Qe.type) && Y("source", e.sources), ie(), r(C.types.html5, Qe.type) && ("tracks" in e && Y("track", e.tracks), Qe.media.load()), (r(C.types.html5, Qe.type) || r(C.types.embed, Qe.type) && !Qe.supported.full) && (qe(), He()), C.title = e.title, Z()
                }
                return O.object(e) && "sources" in e && e.sources.length ? (f(Qe.container, C.classes.ready, !1), ue(), ze(), Ie(), We(), void Re(i, !1)) : void $e("Invalid source format")
            }

            function Fe(e) {
                "video" === Qe.type && Qe.media.setAttribute("poster", e)
            }

            function je() {
                function i() {
                    var e = ce(),
                        t = Qe.buttons[e ? "play" : "pause"],
                        i = Qe.buttons[e ? "pause" : "play"];
                    if (i = i && i.length > 1 ? i[i.length - 1] : i[0]) {
                        var n = h(t, C.classes.tabFocus);
                        setTimeout(function() {
                            i.focus(), n && (f(t, C.classes.tabFocus, !1), f(i, C.classes.tabFocus, !0))
                        }, 100)
                    }
                }

                function n() {
                    var e = t.activeElement;
                    return e = e && e !== t.body ? t.querySelector(":focus") : null
                }

                function o(e) {
                    return e.keyCode ? e.keyCode : e.which
                }

                function s(e) {
                    for (var t in Qe.buttons) {
                        var i = Qe.buttons[t];
                        if (O.nodeList(i))
                            for (var n = 0; n < i.length; n++) f(i[n], C.classes.tabFocus, i[n] === e);
                        else f(i, C.classes.tabFocus, i === e)
                    }
                }

                function a(e) {
                    function t() {
                        var e = Qe.media.duration;
                        O.number(e) && fe(e / 10 * (i - 48))
                    }
                    var i = o(e),
                        n = "keydown" === e.type,
                        s = n && i === u;
                    if (O.number(i))
                        if (n) {
                            var a = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                            switch (r(a, i) && (e.preventDefault(), e.stopPropagation()), i) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    s || t();
                                    break;
                                case 32:
                                case 75:
                                    s || ce();
                                    break;
                                case 38:
                                    we();
                                    break;
                                case 40:
                                    Se();
                                    break;
                                case 77:
                                    s || be();
                                    break;
                                case 39:
                                    pe();
                                    break;
                                case 37:
                                    de();
                                    break;
                                case 70:
                                    ve();
                                    break;
                                case 67:
                                    s || _e()
                            }!z.supportsFullScreen && Qe.isFullscreen && 27 === i && ve(), u = i
                        } else u = null
                }
                var l = Qe.browser.isIE ? "change" : "input";
                if (C.keyboardShorcuts.focused) {
                    var u = null;
                    C.keyboardShorcuts.global && v(e, "keydown keyup", function(e) {
                        var t = o(e),
                            i = n(),
                            s = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67],
                            l = L().length;
                        1 !== l || !r(s, t) || O.htmlElement(i) && m(i, C.selectors.editable) || a(e)
                    }), v(Qe.container, "keydown keyup", a)
                }
                v(e, "keyup", function(e) {
                    var t = o(e),
                        i = n();
                    9 === t && s(i)
                }), v(t.body, "click", function() {
                    f(Q("." + C.classes.tabFocus), C.classes.tabFocus, !1)
                });
                for (var c in Qe.buttons) {
                    var d = Qe.buttons[c];
                    v(d, "blur", function() {
                        f(d, "tab-focus", !1)
                    })
                }
                g(Qe.buttons.play, "click", C.listeners.play, i), g(Qe.buttons.pause, "click", C.listeners.pause, i), g(Qe.buttons.restart, "click", C.listeners.restart, fe), g(Qe.buttons.rewind, "click", C.listeners.rewind, de), g(Qe.buttons.forward, "click", C.listeners.forward, pe), g(Qe.buttons.seek, l, C.listeners.seek, fe), g(Qe.volume.input, l, C.listeners.volume, function() {
                    xe(Qe.volume.input.value)
                }), g(Qe.buttons.mute, "click", C.listeners.mute, be), g(Qe.buttons.fullscreen, "click", C.listeners.fullscreen, ve), z.supportsFullScreen && v(t, z.fullScreenEventName, ve), v(Qe.buttons.captions, "click", _e), v(Qe.progress.container, "mouseenter mouseleave mousemove", Ae), C.hideControls && (v(Qe.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Me), v(Qe.controls, "mouseenter mouseleave", function(e) {
                    Qe.controls.hover = "mouseenter" === e.type
                }), v(Qe.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                    Qe.controls.pressed = r(["mousedown", "touchstart"], e.type)
                }), v(Qe.controls, "focus blur", Me, !0)), v(Qe.volume.input, "wheel", function(e) {
                    e.preventDefault();
                    var t = e.webkitDirectionInvertedFromDevice,
                        i = C.volumeStep / 5;
                    (e.deltaY < 0 || e.deltaX > 0) && (t ? Se(i) : we(i)), (e.deltaY > 0 || e.deltaX < 0) && (t ? we(i) : Se(i))
                })
            }

            function Be() {
                if (v(Qe.media, "timeupdate seeking", Le), v(Qe.media, "timeupdate", q), v(Qe.media, "durationchange loadedmetadata", Pe), v(Qe.media, "ended", function() {
                        "video" === Qe.type && C.showPosterOnEnd && ("video" === Qe.type && N(), fe(), Qe.media.load())
                    }), v(Qe.media, "progress playing", Ce), v(Qe.media, "volumechange", ke), v(Qe.media, "play pause ended", me), v(Qe.media, "waiting canplay seeked", Ee), C.clickToPlay && "audio" !== Qe.type) {
                    var e = Q("." + C.classes.videoWrapper);
                    if (!e) return;
                    e.style.cursor = "pointer", v(e, "click", function() {
                        C.hideControls && Qe.browser.isTouch && !Qe.media.paused || (Qe.media.paused ? le() : Qe.media.ended ? (fe(), le()) : ue())
                    })
                }
                C.disableContextMenu && v(Qe.media, "contextmenu", function(e) {
                    e.preventDefault()
                }), v(Qe.media, C.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                    P(Qe.container, e.type, !0)
                })
            }

            function We() {
                if (r(C.types.html5, Qe.type)) {
                    for (var e = Qe.media.querySelectorAll("source"), t = 0; t < e.length; t++) l(e[t]);
                    Qe.media.setAttribute("src", "#"), Qe.media.load(), Ye("Cancelled network requests")
                }
            }

            function Re(i, n) {
                function o() {
                    clearTimeout(Ve.cleanUp), O.boolean(n) || (n = !0), O.function(i) && i.call(Ge), n && (Qe.init = !1, Qe.container.parentNode.replaceChild(Ge, Qe.container), t.body.style.overflow = "", P(Ge, "destroyed", !0))
                }
                if (!Qe.init) return null;
                switch (Qe.type) {
                    case "youtube":
                        e.clearInterval(Ve.buffering), e.clearInterval(Ve.playing), Qe.embed.destroy(), o();
                        break;
                    case "vimeo":
                        Qe.embed.unload().then(o), Ve.cleanUp = e.setTimeout(o, 200);
                        break;
                    case "video":
                    case "audio":
                        J(!0), o()
                }
            }

            function Ne() {
                if (Qe.init) return null;
                if (z = E(), Qe.browser = i(), O.htmlElement(Qe.media)) {
                    ee();
                    var e = y.tagName.toLowerCase();
                    "div" === e ? (Qe.type = y.getAttribute("data-type"), Qe.embedId = y.getAttribute("data-video-id"), y.removeAttribute("data-type"), y.removeAttribute("data-video-id")) : (Qe.type = e, C.crossorigin = null !== y.getAttribute("crossorigin"), C.autoplay = C.autoplay || null !== y.getAttribute("autoplay"), C.loop = C.loop || null !== y.getAttribute("loop")), Qe.supported = T(Qe.type), Qe.supported.basic && (Qe.container = a(y, t.createElement("div")), Qe.container.setAttribute("tabindex", 0), K(), Ye("" + Qe.browser.name + " " + Qe.browser.version), ie(), (r(C.types.html5, Qe.type) || r(C.types.embed, Qe.type) && !Qe.supported.full) && (qe(), He(), Z()), Qe.init = !0)
                }
            }

            function qe() {
                if (!Qe.supported.full) return $e("Basic support only", Qe.type), l(Q(C.selectors.controls.wrapper)), l(Q(C.selectors.buttons.play)), void J(!0);
                var e = !U(C.selectors.controls.wrapper).length;
                e && $(), X() && (e && je(), Be(), J(), W(), R(), xe(), ke(), Le(), me())
            }

            function He() {
                e.setTimeout(function() {
                    P(Qe.media, "ready")
                }, 0), f(Qe.media, M.classes.setup, !0), f(Qe.container, C.classes.ready, !0), Qe.media.plyr = Ue, C.autoplay && le()
            }
            var Ue, Qe = this,
                Ve = {};
            Qe.media = y;
            var Ge = y.cloneNode(!0),
                Ye = function() {
                    F("log", arguments)
                },
                $e = function() {
                    F("warn", arguments)
                };
            return Ye("Config", C), Ue = {
                getOriginal: function() {
                    return Ge
                },
                getContainer: function() {
                    return Qe.container
                },
                getEmbed: function() {
                    return Qe.embed
                },
                getMedia: function() {
                    return Qe.media
                },
                getType: function() {
                    return Qe.type
                },
                getDuration: he,
                getCurrentTime: function() {
                    return Qe.media.currentTime
                },
                getVolume: function() {
                    return Qe.media.volume
                },
                isMuted: function() {
                    return Qe.media.muted
                },
                isReady: function() {
                    return h(Qe.container, C.classes.ready)
                },
                isLoading: function() {
                    return h(Qe.container, C.classes.loading)
                },
                isPaused: function() {
                    return Qe.media.paused
                },
                on: function(e, t) {
                    return v(Qe.container, e, t), this
                },
                play: le,
                pause: ue,
                stop: function() {
                    ue(), fe()
                },
                restart: fe,
                rewind: de,
                forward: pe,
                seek: fe,
                source: Oe,
                poster: Fe,
                setVolume: xe,
                togglePlay: ce,
                toggleMute: be,
                toggleCaptions: _e,
                toggleFullscreen: ve,
                toggleControls: Me,
                isFullscreen: function() {
                    return Qe.isFullscreen || !1
                },
                support: function(e) {
                    return n(Qe, e)
                },
                destroy: Re
            }, Ne(), Qe.init ? Ue : null
        }

        function I(e, i) {
            var n = new XMLHttpRequest;
            if (!O.string(i) || !O.htmlElement(t.querySelector("#" + i))) {
                var o = t.createElement("div");
                o.setAttribute("hidden", ""), O.string(i) && o.setAttribute("id", i), t.body.insertBefore(o, t.body.childNodes[0]), "withCredentials" in n && (n.open("GET", e, !0), n.onload = function() {
                    o.innerHTML = n.responseText
                }, n.send())
            }
        }

        function T(e) {
            var n = i(),
                o = n.isIE && n.version <= 9,
                r = n.isIos,
                s = n.isIphone,
                a = !!t.createElement("audio").canPlayType,
                l = !!t.createElement("video").canPlayType,
                u = !1,
                c = !1;
            switch (e) {
                case "video":
                    u = l, c = u && !o && !s;
                    break;
                case "audio":
                    u = a, c = u && !o;
                    break;
                case "vimeo":
                    u = !0, c = !o && !r;
                    break;
                case "youtube":
                    u = !0, c = !o && !r, r && !s && n.version >= 10 && (c = !0);
                    break;
                case "soundcloud":
                    u = !0, c = !o && !s;
                    break;
                default:
                    u = a && l, c = u && !o
            }
            return {
                basic: u,
                full: c
            }
        }

        function P(e, i) {
            function n(e, t) {
                h(t, M.classes.hook) || o.push({
                    target: e,
                    media: t
                })
            }
            var o = [],
                r = [],
                s = [M.selectors.html5, M.selectors.embed].join(",");
            if (O.string(e) ? e = t.querySelectorAll(e) : O.htmlElement(e) ? e = [e] : O.nodeList(e) || O.array(e) || O.string(e) || (O.undefined(i) && O.object(e) && (i = e), e = t.querySelectorAll(s)),
                O.nodeList(e) && (e = Array.prototype.slice.call(e)), !T().basic || !e.length) return !1;
            for (var a = 0; a < e.length; a++) {
                var l = e[a],
                    u = l.querySelectorAll(s);
                if (u.length)
                    for (var c = 0; c < u.length; c++) n(l, u[c]);
                else m(l, s) && n(l, l)
            }
            return o.forEach(function(e) {
                var t = e.target,
                    n = e.media,
                    o = !1;
                n === t && (o = !0);
                var s = {};
                try {
                    s = JSON.parse(t.getAttribute("data-plyr"))
                } catch (e) {}
                var a = S({}, M, i, s);
                if (!a.enabled) return null;
                var l = new C(n, a);
                if (O.object(l)) {
                    if (a.debug) {
                        var u = a.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                        v(l.getContainer(), u.join(" "), function(e) {
                            console.log([a.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                        })
                    }
                    b(l.getContainer(), "setup", !0, {
                        plyr: l
                    }), r.push(l)
                }
            }), r
        }

        function L(e) {
            if (O.string(e) ? e = t.querySelector(e) : O.undefined(e) && (e = t.body), O.htmlElement(e)) {
                var i = e.querySelectorAll("." + M.classes.setup),
                    n = [];
                return Array.prototype.slice.call(i).forEach(function(e) {
                    O.object(e.plyr) && n.push(e.plyr)
                }), n
            }
            return []
        }
        var z, A = {
                x: 0,
                y: 0
            },
            M = {
                enabled: !0,
                debug: !1,
                autoplay: !1,
                loop: !1,
                seekTime: 10,
                volume: 10,
                volumeMin: 0,
                volumeMax: 10,
                volumeStep: 1,
                duration: null,
                displayDuration: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "#",
                clickToPlay: !0,
                hideControls: !0,
                showPosterOnEnd: !1,
                disableContextMenu: !0,
                keyboardShorcuts: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                selectors: {
                    html5: "video, audio",
                    embed: "[data-type]",
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        seek: '[data-plyr="seek"]',
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        forward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        fullscreen: '[data-plyr="fullscreen"]'
                    },
                    volume: {
                        input: '[data-plyr="volume"]',
                        display: ".plyr__volume--display"
                    },
                    progress: {
                        container: ".plyr__progress",
                        buffer: ".plyr__progress--buffer",
                        played: ".plyr__progress--played"
                    },
                    captions: ".plyr__captions",
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration"
                },
                classes: {
                    setup: "plyr--setup",
                    ready: "plyr--ready",
                    videoWrapper: "plyr__video-wrapper",
                    embedWrapper: "plyr__video-embed",
                    type: "plyr--{0}",
                    stopped: "plyr--stopped",
                    playing: "plyr--playing",
                    muted: "plyr--muted",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        active: "plyr--fullscreen-active"
                    },
                    tabFocus: "tab-focus"
                },
                captions: {
                    defaultActive: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    allowAudio: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime} secs",
                    play: "Play",
                    pause: "Pause",
                    forward: "Forward {seektime} secs",
                    played: "played",
                    buffered: "buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    toggleMute: "Toggle Mute",
                    toggleCaptions: "Toggle Captions",
                    toggleFullscreen: "Toggle Fullscreen",
                    frameTitle: "Player for {title}"
                },
                types: {
                    embed: ["youtube", "vimeo", "soundcloud"],
                    html5: ["video", "audio"]
                },
                urls: {
                    vimeo: {
                        api: "#"
                    },
                    youtube: {
                        api: "#"
                    },
                    soundcloud: {
                        api: "#"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    forward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    fullscreen: null
                },
                events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
                logPrefix: "[Plyr]"
            },
            O = {
                object: function(e) {
                    return null !== e && "object" == typeof e
                },
                array: function(e) {
                    return null !== e && "object" == typeof e && e.constructor === Array
                },
                number: function(e) {
                    return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
                },
                string: function(e) {
                    return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
                },
                boolean: function(e) {
                    return null !== e && "boolean" == typeof e
                },
                nodeList: function(e) {
                    return null !== e && e instanceof NodeList
                },
                htmlElement: function(e) {
                    return null !== e && e instanceof HTMLElement
                },
                function: function(e) {
                    return null !== e && "function" == typeof e
                },
                undefined: function(e) {
                    return null !== e && "undefined" == typeof e
                }
            },
            D = {
                supported: function() {
                    if (!("localStorage" in e)) return !1;
                    try {
                        e.localStorage.setItem("___test", "OK");
                        var t = e.localStorage.getItem("___test");
                        return e.localStorage.removeItem("___test"), "OK" === t
                    } catch (e) {
                        return !1
                    }
                    return !1
                }()
            };
        return {
            setup: P,
            supported: T,
            loadSprite: I,
            get: L
        }
    }),
    function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(),
    function(e, t) {
        "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], t) : e.GMaps = t()
    }(this, function() {
        var t = function(e, t) {
                var i;
                if (e === t) return e;
                for (i in t) void 0 !== t[i] && (e[i] = t[i]);
                return e
            },
            i = function(e, t) {
                var i, n = Array.prototype.slice.call(arguments, 2),
                    o = [],
                    r = e.length;
                if (Array.prototype.map && e.map === Array.prototype.map) o = Array.prototype.map.call(e, function(e) {
                    var i = n.slice(0);
                    return i.splice(0, 0, e), t.apply(this, i)
                });
                else
                    for (i = 0; i < r; i++) callback_params = n, callback_params.splice(0, 0, e[i]), o.push(t.apply(this, callback_params));
                return o
            },
            n = function(e) {
                var t, i = [];
                for (t = 0; t < e.length; t++) i = i.concat(e[t]);
                return i
            },
            o = function(e, t) {
                var i = e[0],
                    n = e[1];
                return t && (i = e[1], n = e[0]), new google.maps.LatLng(i, n)
            },
            r = function(e, t) {
                var i;
                for (i = 0; i < e.length; i++) e[i] instanceof google.maps.LatLng || (e[i].length > 0 && "object" == typeof e[i][0] ? e[i] = r(e[i], t) : e[i] = o(e[i], t));
                return e
            },
            s = function(e, t) {
                var i, n = e.replace(".", "");
                return i = "jQuery" in this && t ? $("." + n, t)[0] : document.getElementsByClassName(n)[0]
            },
            a = function(e, t) {
                var i, e = e.replace("#", "");
                return i = "jQuery" in window && t ? $("#" + e, t)[0] : document.getElementById(e)
            },
            l = function(e) {
                var t = 0,
                    i = 0;
                if (e.offsetParent)
                    do t += e.offsetLeft, i += e.offsetTop; while (e = e.offsetParent);
                return [t, i]
            },
            u = function(e) {
                "use strict";
                var i = document,
                    n = function(e) {
                        if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library ."),
                            function() {};
                        if (!this) return new n(e);
                        e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
                        var o, r = function(e, t) {
                                return void 0 === e ? t : e
                            },
                            u = this,
                            c = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
                            d = ["mousemove", "mouseout", "mouseover"],
                            p = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
                            f = e.el || e.div,
                            h = e.markerClusterer,
                            m = google.maps.MapTypeId[e.mapType.toUpperCase()],
                            g = new google.maps.LatLng(e.lat, e.lng),
                            y = r(e.zoomControl, !0),
                            v = e.zoomControlOpt || {
                                style: "DEFAULT",
                                position: "TOP_LEFT"
                            },
                            b = v.style || "DEFAULT",
                            x = v.position || "TOP_LEFT",
                            w = r(e.panControl, !0),
                            S = r(e.mapTypeControl, !0),
                            k = r(e.scaleControl, !0),
                            _ = r(e.streetViewControl, !0),
                            E = r(E, !0),
                            C = {},
                            I = {
                                zoom: this.zoom,
                                center: g,
                                mapTypeId: m
                            },
                            T = {
                                panControl: w,
                                zoomControl: y,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle[b],
                                    position: google.maps.ControlPosition[x]
                                },
                                mapTypeControl: S,
                                scaleControl: k,
                                streetViewControl: _,
                                overviewMapControl: E
                            };
                        if ("string" == typeof e.el || "string" == typeof e.div ? f.indexOf("#") > -1 ? this.el = a(f, e.context) : this.el = s.apply(this, [f, e.context]) : this.el = f, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
                        for (window.context_menu = window.context_menu || {}, window.context_menu[u.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, o = 0; o < p.length; o++) delete e[p[o]];
                        for (1 != e.disableDefaultUI && (I = t(I, T)), C = t(I, e), o = 0; o < c.length; o++) delete C[c[o]];
                        for (o = 0; o < d.length; o++) delete C[d[o]];
                        this.map = new google.maps.Map(this.el, C), h && (this.markerClusterer = h.apply(this, [this.map]));
                        var P = function(e, t) {
                            var i = "",
                                n = window.context_menu[u.el.id][e];
                            for (var o in n)
                                if (n.hasOwnProperty(o)) {
                                    var r = n[o];
                                    i += '<li><a id="' + e + "_" + o + '" href="#">' + r.title + "</a></li>"
                                } if (a("gmaps_context_menu")) {
                                var s = a("gmaps_context_menu");
                                s.innerHTML = i;
                                var o, c = s.getElementsByTagName("a"),
                                    d = c.length;
                                for (o = 0; o < d; o++) {
                                    var p = c[o],
                                        f = function(i) {
                                            i.preventDefault(), n[this.id.replace(e + "_", "")].action.apply(u, [t]), u.hideContextMenu()
                                        };
                                    google.maps.event.clearListeners(p, "click"), google.maps.event.addDomListenerOnce(p, "click", f, !1)
                                }
                                var h = l.apply(this, [u.el]),
                                    m = h[0] + t.pixel.x - 15,
                                    g = h[1] + t.pixel.y - 15;
                                s.style.left = m + "px", s.style.top = g + "px"
                            }
                        };
                        this.buildContextMenu = function(e, t) {
                            if ("marker" === e) {
                                t.pixel = {};
                                var i = new google.maps.OverlayView;
                                i.setMap(u.map), i.draw = function() {
                                    var n = i.getProjection(),
                                        o = t.marker.getPosition();
                                    t.pixel = n.fromLatLngToContainerPixel(o), P(e, t)
                                }
                            } else P(e, t);
                            var n = a("gmaps_context_menu");
                            setTimeout(function() {
                                n.style.display = "block"
                            }, 0)
                        }, this.setContextMenu = function(e) {
                            window.context_menu[u.el.id][e.control] = {};
                            var t, n = i.createElement("ul");
                            for (t in e.options)
                                if (e.options.hasOwnProperty(t)) {
                                    var o = e.options[t];
                                    window.context_menu[u.el.id][e.control][o.name] = {
                                        title: o.title,
                                        action: o.action
                                    }
                                } n.id = "gmaps_context_menu", n.style.display = "none", n.style.position = "absolute", n.style.minWidth = "100px", n.style.background = "white", n.style.listStyle = "none", n.style.padding = "8px", n.style.boxShadow = "2px 2px 6px #ccc", a("gmaps_context_menu") || i.body.appendChild(n);
                            var r = a("gmaps_context_menu");
                            google.maps.event.addDomListener(r, "mouseout", function(e) {
                                e.relatedTarget && this.contains(e.relatedTarget) || window.setTimeout(function() {
                                    r.style.display = "none"
                                }, 400)
                            }, !1)
                        }, this.hideContextMenu = function() {
                            var e = a("gmaps_context_menu");
                            e && (e.style.display = "none")
                        };
                        var L = function(t, i) {
                            google.maps.event.addListener(t, i, function(t) {
                                void 0 == t && (t = this), e[i].apply(this, [t]), u.hideContextMenu()
                            })
                        };
                        google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
                        for (var z = 0; z < c.length; z++) {
                            var A = c[z];
                            A in e && L(this.map, A)
                        }
                        for (var z = 0; z < d.length; z++) {
                            var A = d[z];
                            A in e && L(this.map, A)
                        }
                        google.maps.event.addListener(this.map, "rightclick", function(t) {
                            e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[u.el.id].map && u.buildContextMenu("map", t)
                        }), this.refresh = function() {
                            google.maps.event.trigger(this.map, "resize")
                        }, this.fitZoom = function() {
                            var e, t = [],
                                i = this.markers.length;
                            for (e = 0; e < i; e++) "boolean" == typeof this.markers[e].visible && this.markers[e].visible && t.push(this.markers[e].getPosition());
                            this.fitLatLngBounds(t)
                        }, this.fitLatLngBounds = function(e) {
                            var t, i = e.length,
                                n = new google.maps.LatLngBounds;
                            for (t = 0; t < i; t++) n.extend(e[t]);
                            this.map.fitBounds(n)
                        }, this.setCenter = function(e, t, i) {
                            this.map.panTo(new google.maps.LatLng(e, t)), i && i()
                        }, this.getElement = function() {
                            return this.el
                        }, this.zoomIn = function(e) {
                            e = e || 1, this.zoom = this.map.getZoom() + e, this.map.setZoom(this.zoom)
                        }, this.zoomOut = function(e) {
                            e = e || 1, this.zoom = this.map.getZoom() - e, this.map.setZoom(this.zoom)
                        };
                        var M, O = [];
                        for (M in this.map) "function" != typeof this.map[M] || this[M] || O.push(M);
                        for (o = 0; o < O.length; o++) ! function(e, t, i) {
                            e[i] = function() {
                                return t[i].apply(t, arguments)
                            }
                        }(this, this.map, O[o])
                    };
                return n
            }(this);
        u.prototype.createControl = function(e) {
            var t = document.createElement("div");
            t.style.cursor = "pointer", e.disableDefaultStyles !== !0 && (t.style.fontFamily = "Roboto, Arial, sans-serif", t.style.fontSize = "11px", t.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
            for (var i in e.style) t.style[i] = e.style[i];
            e.id && (t.id = e.id), e.title && (t.title = e.title), e.classes && (t.className = e.classes), e.content && ("string" == typeof e.content ? t.innerHTML = e.content : e.content instanceof HTMLElement && t.appendChild(e.content)), e.position && (t.position = google.maps.ControlPosition[e.position.toUpperCase()]);
            for (var n in e.events) ! function(t, i) {
                google.maps.event.addDomListener(t, i, function() {
                    e.events[i].apply(this, [this])
                })
            }(t, n);
            return t.index = 1, t
        }, u.prototype.addControl = function(e) {
            var t = this.createControl(e);
            return this.controls.push(t), this.map.controls[t.position].push(t), t
        }, u.prototype.removeControl = function(e) {
            var t, i = null;
            for (t = 0; t < this.controls.length; t++) this.controls[t] == e && (i = this.controls[t].position, this.controls.splice(t, 1));
            if (i)
                for (t = 0; t < this.map.controls.length; t++) {
                    var n = this.map.controls[e.position];
                    if (n.getAt(t) == e) {
                        n.removeAt(t);
                        break
                    }
                }
            return e
        }, u.prototype.createMarker = function(e) {
            if (void 0 == e.lat && void 0 == e.lng && void 0 == e.position) throw "No latitude or longitude defined.";
            var i = this,
                n = e.details,
                o = e.fences,
                r = e.outside,
                s = {
                    position: new google.maps.LatLng(e.lat, e.lng),
                    map: null
                },
                a = t(s, e);
            delete a.lat, delete a.lng, delete a.fences, delete a.outside;
            var l = new google.maps.Marker(a);
            if (l.fences = o, e.infoWindow) {
                l.infoWindow = new google.maps.InfoWindow(e.infoWindow);
                for (var u = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], c = 0; c < u.length; c++) ! function(t, i) {
                    e.infoWindow[i] && google.maps.event.addListener(t, i, function(t) {
                        e.infoWindow[i].apply(this, [t])
                    })
                }(l.infoWindow, u[c])
            }
            for (var d = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], p = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], c = 0; c < d.length; c++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function() {
                    e[i].apply(this, [this])
                })
            }(l, d[c]);
            for (var c = 0; c < p.length; c++) ! function(t, i, n) {
                e[n] && google.maps.event.addListener(i, n, function(i) {
                    i.pixel || (i.pixel = t.getProjection().fromLatLngToPoint(i.latLng)), e[n].apply(this, [i])
                })
            }(this.map, l, p[c]);
            return google.maps.event.addListener(l, "click", function() {
                this.details = n, e.click && e.click.apply(this, [this]), l.infoWindow && (i.hideInfoWindows(), l.infoWindow.open(i.map, l))
            }), google.maps.event.addListener(l, "rightclick", function(t) {
                t.marker = this, e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[i.el.id].marker && i.buildContextMenu("marker", t)
            }), l.fences && google.maps.event.addListener(l, "dragend", function() {
                i.checkMarkerGeofence(l, function(e, t) {
                    r(e, t)
                })
            }), l
        }, u.prototype.addMarker = function(e) {
            var t;
            if (e.hasOwnProperty("gm_accessors_")) t = e;
            else {
                if (!(e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || e.position)) throw "No latitude or longitude defined.";
                t = this.createMarker(e)
            }
            return t.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(t), this.markers.push(t), u.fire("marker_added", t, this), t
        }, u.prototype.addMarkers = function(e) {
            for (var t, i = 0; t = e[i]; i++) this.addMarker(t);
            return this.markers
        }, u.prototype.hideInfoWindows = function() {
            for (var e, t = 0; e = this.markers[t]; t++) e.infoWindow && e.infoWindow.close()
        }, u.prototype.removeMarker = function(e) {
            for (var t = 0; t < this.markers.length; t++)
                if (this.markers[t] === e) {
                    this.markers[t].setMap(null), this.markers.splice(t, 1), this.markerClusterer && this.markerClusterer.removeMarker(e), u.fire("marker_removed", e, this);
                    break
                } return e
        }, u.prototype.removeMarkers = function(e) {
            var t = [];
            if ("undefined" == typeof e) {
                for (var i = 0; i < this.markers.length; i++) {
                    var n = this.markers[i];
                    n.setMap(null), u.fire("marker_removed", n, this)
                }
                this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = t
            } else {
                for (var i = 0; i < e.length; i++) {
                    var o = this.markers.indexOf(e[i]);
                    if (o > -1) {
                        var n = this.markers[o];
                        n.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(n), u.fire("marker_removed", n, this)
                    }
                }
                for (var i = 0; i < this.markers.length; i++) {
                    var n = this.markers[i];
                    null != n.getMap() && t.push(n)
                }
                this.markers = t
            }
        }, u.prototype.drawOverlay = function(e) {
            var t = new google.maps.OverlayView,
                i = !0;
            return t.setMap(this.map), null != e.auto_show && (i = e.auto_show), t.onAdd = function() {
                var i = document.createElement("div");
                i.style.borderStyle = "none", i.style.borderWidth = "0px", i.style.position = "absolute", i.style.zIndex = 100, i.innerHTML = e.content, t.el = i, e.layer || (e.layer = "overlayLayer");
                var n = this.getPanes(),
                    o = n[e.layer],
                    r = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
                o.appendChild(i);
                for (var s = 0; s < r.length; s++) ! function(e, t) {
                    google.maps.event.addDomListener(e, t, function(e) {
                        navigator.userAgent.toLowerCase().indexOf("msie") != -1 && document.all ? (e.cancelBubble = !0, e.returnValue = !1) : e.stopPropagation()
                    })
                }(i, r[s]);
                e.click && (n.overlayMouseTarget.appendChild(t.el), google.maps.event.addDomListener(t.el, "click", function() {
                    e.click.apply(t, [t])
                })), google.maps.event.trigger(this, "ready")
            }, t.draw = function() {
                var n = this.getProjection(),
                    o = n.fromLatLngToDivPixel(new google.maps.LatLng(e.lat, e.lng));
                e.horizontalOffset = e.horizontalOffset || 0, e.verticalOffset = e.verticalOffset || 0;
                var r = t.el,
                    s = r.children[0],
                    a = s.clientHeight,
                    l = s.clientWidth;
                switch (e.verticalAlign) {
                    case "top":
                        r.style.top = o.y - a + e.verticalOffset + "px";
                        break;
                    default:
                    case "middle":
                        r.style.top = o.y - a / 2 + e.verticalOffset + "px";
                        break;
                    case "bottom":
                        r.style.top = o.y + e.verticalOffset + "px"
                }
                switch (e.horizontalAlign) {
                    case "left":
                        r.style.left = o.x - l + e.horizontalOffset + "px";
                        break;
                    default:
                    case "center":
                        r.style.left = o.x - l / 2 + e.horizontalOffset + "px";
                        break;
                    case "right":
                        r.style.left = o.x + e.horizontalOffset + "px"
                }
                r.style.display = i ? "block" : "none", i || e.show.apply(this, [r])
            }, t.onRemove = function() {
                var i = t.el;
                e.remove ? e.remove.apply(this, [i]) : (t.el.parentNode.removeChild(t.el), t.el = null)
            }, this.overlays.push(t), t
        }, u.prototype.removeOverlay = function(e) {
            for (var t = 0; t < this.overlays.length; t++)
                if (this.overlays[t] === e) {
                    this.overlays[t].setMap(null), this.overlays.splice(t, 1);
                    break
                }
        }, u.prototype.removeOverlays = function() {
            for (var e, t = 0; e = this.overlays[t]; t++) e.setMap(null);
            this.overlays = []
        }, u.prototype.drawPolyline = function(e) {
            var t = [],
                i = e.path;
            if (i.length)
                if (void 0 === i[0][0]) t = i;
                else
                    for (var n, o = 0; n = i[o]; o++) t.push(new google.maps.LatLng(n[0], n[1]));
            var r = {
                map: this.map,
                path: t,
                strokeColor: e.strokeColor,
                strokeOpacity: e.strokeOpacity,
                strokeWeight: e.strokeWeight,
                geodesic: e.geodesic,
                clickable: !0,
                editable: !1,
                visible: !0
            };
            e.hasOwnProperty("clickable") && (r.clickable = e.clickable), e.hasOwnProperty("editable") && (r.editable = e.editable), e.hasOwnProperty("icons") && (r.icons = e.icons), e.hasOwnProperty("zIndex") && (r.zIndex = e.zIndex);
            for (var s = new google.maps.Polyline(r), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(s, a[l]);
            return this.polylines.push(s), u.fire("polyline_added", s, this), s
        }, u.prototype.removePolyline = function(e) {
            for (var t = 0; t < this.polylines.length; t++)
                if (this.polylines[t] === e) {
                    this.polylines[t].setMap(null), this.polylines.splice(t, 1), u.fire("polyline_removed", e, this);
                    break
                }
        }, u.prototype.removePolylines = function() {
            for (var e, t = 0; e = this.polylines[t]; t++) e.setMap(null);
            this.polylines = []
        }, u.prototype.drawCircle = function(e) {
            e = t({
                map: this.map,
                center: new google.maps.LatLng(e.lat, e.lng)
            }, e), delete e.lat, delete e.lng;
            for (var i = new google.maps.Circle(e), n = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], o = 0; o < n.length; o++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(i, n[o]);
            return this.polygons.push(i), i
        }, u.prototype.drawRectangle = function(e) {
            e = t({
                map: this.map
            }, e);
            var i = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
            e.bounds = i;
            for (var n = new google.maps.Rectangle(e), o = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < o.length; r++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(n, o[r]);
            return this.polygons.push(n), n
        }, u.prototype.drawPolygon = function(e) {
            var o = !1;
            e.hasOwnProperty("useGeoJSON") && (o = e.useGeoJSON), delete e.useGeoJSON, e = t({
                map: this.map
            }, e), 0 == o && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = n(i(e.paths, r, o)));
            for (var s = new google.maps.Polygon(e), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(s, a[l]);
            return this.polygons.push(s), u.fire("polygon_added", s, this), s
        }, u.prototype.removePolygon = function(e) {
            for (var t = 0; t < this.polygons.length; t++)
                if (this.polygons[t] === e) {
                    this.polygons[t].setMap(null), this.polygons.splice(t, 1), u.fire("polygon_removed", e, this);
                    break
                }
        }, u.prototype.removePolygons = function() {
            for (var e, t = 0; e = this.polygons[t]; t++) e.setMap(null);
            this.polygons = []
        }, u.prototype.getFromFusionTables = function(e) {
            var t = e.events;
            delete e.events;
            var i = e,
                n = new google.maps.FusionTablesLayer(i);
            for (var o in t) ! function(e, i) {
                google.maps.event.addListener(e, i, function(e) {
                    t[i].apply(this, [e])
                })
            }(n, o);
            return this.layers.push(n), n
        }, u.prototype.loadFromFusionTables = function(e) {
            var t = this.getFromFusionTables(e);
            return t.setMap(this.map), t
        }, u.prototype.getFromKML = function(e) {
            var t = e.url,
                i = e.events;
            delete e.url, delete e.events;
            var n = e,
                o = new google.maps.KmlLayer(t, n);
            for (var r in i) ! function(e, t) {
                google.maps.event.addListener(e, t, function(e) {
                    i[t].apply(this, [e])
                })
            }(o, r);
            return this.layers.push(o), o
        }, u.prototype.loadFromKML = function(e) {
            var t = this.getFromKML(e);
            return t.setMap(this.map), t
        }, u.prototype.addLayer = function(e, t) {
            t = t || {};
            var i;
            switch (e) {
                case "weather":
                    this.singleLayers.weather = i = new google.maps.weather.WeatherLayer;
                    break;
                case "clouds":
                    this.singleLayers.clouds = i = new google.maps.weather.CloudLayer;
                    break;
                case "traffic":
                    this.singleLayers.traffic = i = new google.maps.TrafficLayer;
                    break;
                case "transit":
                    this.singleLayers.transit = i = new google.maps.TransitLayer;
                    break;
                case "bicycling":
                    this.singleLayers.bicycling = i = new google.maps.BicyclingLayer;
                    break;
                case "panoramio":
                    this.singleLayers.panoramio = i = new google.maps.panoramio.PanoramioLayer, i.setTag(t.filter), delete t.filter, t.click && google.maps.event.addListener(i, "click", function(e) {
                        t.click(e), delete t.click
                    });
                    break;
                case "places":
                    if (this.singleLayers.places = i = new google.maps.places.PlacesService(this.map), t.search || t.nearbySearch || t.radarSearch) {
                        var n = {
                            bounds: t.bounds || null,
                            keyword: t.keyword || null,
                            location: t.location || null,
                            name: t.name || null,
                            radius: t.radius || null,
                            rankBy: t.rankBy || null,
                            types: t.types || null
                        };
                        t.radarSearch && i.radarSearch(n, t.radarSearch), t.search && i.search(n, t.search), t.nearbySearch && i.nearbySearch(n, t.nearbySearch)
                    }
                    if (t.textSearch) {
                        var o = {
                            bounds: t.bounds || null,
                            location: t.location || null,
                            query: t.query || null,
                            radius: t.radius || null
                        };
                        i.textSearch(o, t.textSearch)
                    }
            }
            if (void 0 !== i) return "function" == typeof i.setOptions && i.setOptions(t), "function" == typeof i.setMap && i.setMap(this.map), i
        }, u.prototype.removeLayer = function(e) {
            if ("string" == typeof e && void 0 !== this.singleLayers[e]) this.singleLayers[e].setMap(null), delete this.singleLayers[e];
            else
                for (var t = 0; t < this.layers.length; t++)
                    if (this.layers[t] === e) {
                        this.layers[t].setMap(null), this.layers.splice(t, 1);
                        break
                    }
        };
        var c, d;
        return u.prototype.getRoutes = function(e) {

            switch (e.travelMode) {
                case "bicycling":
                    c = google.maps.TravelMode.BICYCLING;
                    break;
                case "transit":
                    c = google.maps.TravelMode.TRANSIT;
                    break;
                case "driving":
                    c = google.maps.TravelMode.DRIVING;
                    break;
                default:
                    c = google.maps.TravelMode.WALKING
            }
            d = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
            var i = {
                    avoidHighways: !1,
                    avoidTolls: !1,
                    optimizeWaypoints: !1,
                    waypoints: []
                },
                n = t(i, e);
            n.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), n.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), n.travelMode = c, n.unitSystem = d, delete n.callback, delete n.error;
            var o = [],
                r = new google.maps.DirectionsService;
            r.route(n, function(t, i) {
                if (i === google.maps.DirectionsStatus.OK) {
                    for (var n in t.routes) t.routes.hasOwnProperty(n) && o.push(t.routes[n]);
                    e.callback && e.callback(o, t, i)
                } else e.error && e.error(t, i)
            })
        }, u.prototype.removeRoutes = function() {
            this.routes.length = 0
        }, u.prototype.getElevations = function(e) {
            e = t({
                locations: [],
                path: !1,
                samples: 256
            }, e), e.locations.length > 0 && e.locations[0].length > 0 && (e.locations = n(i([e.locations], r, !1)));
            var o = e.callback;
            delete e.callback;
            var s = new google.maps.ElevationService;
            if (e.path) {
                var a = {
                    path: e.locations,
                    samples: e.samples
                };
                s.getElevationAlongPath(a, function(e, t) {
                    o && "function" == typeof o && o(e, t)
                })
            } else delete e.path, delete e.samples, s.getElevationForLocations(e, function(e, t) {
                o && "function" == typeof o && o(e, t)
            })
        }, u.prototype.cleanRoute = u.prototype.removePolylines, u.prototype.renderRoute = function(e, i) {
            var n, o = "string" == typeof i.panel ? document.getElementById(i.panel.replace("#", "")) : i.panel;
            i.panel = o, i = t({
                map: this.map
            }, i), n = new google.maps.DirectionsRenderer(i), this.getRoutes({
                origin: e.origin,
                destination: e.destination,
                travelMode: e.travelMode,
                waypoints: e.waypoints,
                unitSystem: e.unitSystem,
                error: e.error,
                avoidHighways: e.avoidHighways,
                avoidTolls: e.avoidTolls,
                optimizeWaypoints: e.optimizeWaypoints,
                callback: function(e, t, i) {
                    i === google.maps.DirectionsStatus.OK && n.setDirections(t)
                }
            })
        }, u.prototype.drawRoute = function(e) {
            var t = this;
            this.getRoutes({
                origin: e.origin,
                destination: e.destination,
                travelMode: e.travelMode,
                waypoints: e.waypoints,
                unitSystem: e.unitSystem,
                error: e.error,
                avoidHighways: e.avoidHighways,
                avoidTolls: e.avoidTolls,
                optimizeWaypoints: e.optimizeWaypoints,
                callback: function(i) {
                    if (i.length > 0) {
                        var n = {
                            path: i[i.length - 1].overview_path,
                            strokeColor: e.strokeColor,
                            strokeOpacity: e.strokeOpacity,
                            strokeWeight: e.strokeWeight
                        };
                        e.hasOwnProperty("icons") && (n.icons = e.icons), t.drawPolyline(n), e.callback && e.callback(i[i.length - 1])
                    }
                }
            })
        }, u.prototype.travelRoute = function(e) {
            if (e.origin && e.destination) this.getRoutes({
                origin: e.origin,
                destination: e.destination,
                travelMode: e.travelMode,
                waypoints: e.waypoints,
                unitSystem: e.unitSystem,
                error: e.error,
                callback: function(t) {
                    if (t.length > 0 && e.start && e.start(t[t.length - 1]), t.length > 0 && e.step) {
                        var i = t[t.length - 1];
                        if (i.legs.length > 0)
                            for (var n, o = i.legs[0].steps, r = 0; n = o[r]; r++) n.step_number = r, e.step(n, i.legs[0].steps.length - 1)
                    }
                    t.length > 0 && e.end && e.end(t[t.length - 1])
                }
            });
            else if (e.route && e.route.legs.length > 0)
                for (var t, i = e.route.legs[0].steps, n = 0; t = i[n]; n++) t.step_number = n, e.step(t)
        }, u.prototype.drawSteppedRoute = function(e) {
            var t = this;
            if (e.origin && e.destination) this.getRoutes({
                origin: e.origin,
                destination: e.destination,
                travelMode: e.travelMode,
                waypoints: e.waypoints,
                error: e.error,
                callback: function(i) {
                    if (i.length > 0 && e.start && e.start(i[i.length - 1]), i.length > 0 && e.step) {
                        var n = i[i.length - 1];
                        if (n.legs.length > 0)
                            for (var o, r = n.legs[0].steps, s = 0; o = r[s]; s++) {
                                o.step_number = s;
                                var a = {
                                    path: o.path,
                                    strokeColor: e.strokeColor,
                                    strokeOpacity: e.strokeOpacity,
                                    strokeWeight: e.strokeWeight
                                };
                                e.hasOwnProperty("icons") && (a.icons = e.icons), t.drawPolyline(a), e.step(o, n.legs[0].steps.length - 1)
                            }
                    }
                    i.length > 0 && e.end && e.end(i[i.length - 1])
                }
            });
            else if (e.route && e.route.legs.length > 0)
                for (var i, n = e.route.legs[0].steps, o = 0; i = n[o]; o++) {
                    i.step_number = o;
                    var r = {
                        path: i.path,
                        strokeColor: e.strokeColor,
                        strokeOpacity: e.strokeOpacity,
                        strokeWeight: e.strokeWeight
                    };
                    e.hasOwnProperty("icons") && (r.icons = e.icons), t.drawPolyline(r), e.step(i)
                }
        }, u.Route = function(e) {
            this.origin = e.origin, this.destination = e.destination, this.waypoints = e.waypoints, this.map = e.map, this.route = e.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
            var t = {
                path: new google.maps.MVCArray,
                strokeColor: e.strokeColor,
                strokeOpacity: e.strokeOpacity,
                strokeWeight: e.strokeWeight
            };
            e.hasOwnProperty("icons") && (t.icons = e.icons), this.polyline = this.map.drawPolyline(t).getPath()
        }, u.Route.prototype.getRoute = function(t) {
            var i = this;
            this.map.getRoutes({
                origin: this.origin,
                destination: this.destination,
                travelMode: t.travelMode,
                waypoints: this.waypoints || [],
                error: t.error,
                callback: function() {
                    i.route = e[0], t.callback && t.callback.call(i)
                }
            })
        }, u.Route.prototype.back = function() {
            if (this.step_count > 0) {
                this.step_count--;
                var e = this.route.legs[0].steps[this.step_count].path;
                for (var t in e) e.hasOwnProperty(t) && this.polyline.pop()
            }
        }, u.Route.prototype.forward = function() {
            if (this.step_count < this.steps_length) {
                var e = this.route.legs[0].steps[this.step_count].path;
                for (var t in e) e.hasOwnProperty(t) && this.polyline.push(e[t]);
                this.step_count++
            }
        }, u.prototype.checkGeofence = function(e, t, i) {
            return i.containsLatLng(new google.maps.LatLng(e, t))
        }, u.prototype.checkMarkerGeofence = function(e, t) {
            if (e.fences)
                for (var i, n = 0; i = e.fences[n]; n++) {
                    var o = e.getPosition();
                    this.checkGeofence(o.lat(), o.lng(), i) || t(e, i)
                }
        }, u.prototype.toImage = function(e) {
            var e = e || {},
                t = {};
            if (t.size = e.size || [this.el.clientWidth, this.el.clientHeight], t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng(), this.markers.length > 0) {
                t.markers = [];
                for (var i = 0; i < this.markers.length; i++) t.markers.push({
                    lat: this.markers[i].getPosition().lat(),
                    lng: this.markers[i].getPosition().lng()
                })
            }
            if (this.polylines.length > 0) {
                var n = this.polylines[0];
                t.polyline = {}, t.polyline.path = google.maps.geometry.encoding.encodePath(n.getPath()), t.polyline.strokeColor = n.strokeColor, t.polyline.strokeOpacity = n.strokeOpacity, t.polyline.strokeWeight = n.strokeWeight
            }
            return u.staticMapURL(t)
        }, u.staticMapURL = function(e) {
            function t(e, t) {
                if ("#" === e[0] && (e = e.replace("#", "0x"), t)) {
                    if (t = parseFloat(t), t = Math.min(1, Math.max(t, 0)), 0 === t) return "0x00000000";
                    t = (255 * t).toString(16), 1 === t.length && (t += t), e = e.slice(0, 8) + t
                }
                return e
            }
            var i, n = [],
                o = ("file:" === location.protocol ? "http:" : location.protocol) + "#";
            e.url && (o = e.url, delete e.url), o += "?";
            var r = e.markers;
            delete e.markers, !r && e.marker && (r = [e.marker], delete e.marker);
            var s = e.styles;
            delete e.styles;
            var a = e.polyline;
            if (delete e.polyline, e.center) n.push("center=" + e.center), delete e.center;
            else if (e.address) n.push("center=" + e.address), delete e.address;
            else if (e.lat) n.push(["center=", e.lat, ",", e.lng].join("")), delete e.lat, delete e.lng;
            else if (e.visible) {
                var l = encodeURI(e.visible.join("|"));
                n.push("visible=" + l)
            }
            var u = e.size;
            u ? (u.join && (u = u.join("x")), delete e.size) : u = "630x300", n.push("size=" + u), e.zoom || e.zoom === !1 || (e.zoom = 15);
            var c = !e.hasOwnProperty("sensor") || !!e.sensor;
            delete e.sensor, n.push("sensor=" + c);
            for (var d in e) e.hasOwnProperty(d) && n.push(d + "=" + e[d]);
            if (r)
                for (var p, f, h = 0; i = r[h]; h++) {
                    p = [], i.size && "normal" !== i.size ? (p.push("size:" + i.size), delete i.size) : i.icon && (p.push("icon:" + encodeURI(i.icon)), delete i.icon), i.color && (p.push("color:" + i.color.replace("#", "0x")), delete i.color), i.label && (p.push("label:" + i.label[0].toUpperCase()), delete i.label), f = i.address ? i.address : i.lat + "," + i.lng, delete i.address, delete i.lat, delete i.lng;
                    for (var d in i) i.hasOwnProperty(d) && p.push(d + ":" + i[d]);
                    p.length || 0 === h ? (p.push(f), p = p.join("|"), n.push("markers=" + encodeURI(p))) : (p = n.pop() + encodeURI("|" + f), n.push(p))
                }
            if (s)
                for (var h = 0; h < s.length; h++) {
                    var m = [];
                    s[h].featureType && m.push("feature:" + s[h].featureType.toLowerCase()), s[h].elementType && m.push("element:" + s[h].elementType.toLowerCase());
                    for (var g = 0; g < s[h].stylers.length; g++)
                        for (var y in s[h].stylers[g]) {
                            var v = s[h].stylers[g][y];
                            "hue" != y && "color" != y || (v = "0x" + v.substring(1)), m.push(y + ":" + v)
                        }
                    var b = m.join("|");
                    "" != b && n.push("style=" + b)
                }
            if (a) {
                if (i = a, a = [], i.strokeWeight && a.push("weight:" + parseInt(i.strokeWeight, 10)), i.strokeColor) {
                    var x = t(i.strokeColor, i.strokeOpacity);
                    a.push("color:" + x)
                }
                if (i.fillColor) {
                    var w = t(i.fillColor, i.fillOpacity);
                    a.push("fillcolor:" + w)
                }
                var S = i.path;
                if (S.join)
                    for (var k, g = 0; k = S[g]; g++) a.push(k.join(","));
                else a.push("enc:" + S);
                a = a.join("|"), n.push("path=" + encodeURI(a))
            }
            var _ = window.devicePixelRatio || 1;
            return n.push("scale=" + _), n = n.join("&"), o + n
        }, u.prototype.addMapType = function(e, t) {
            if (!t.hasOwnProperty("getTileUrl") || "function" != typeof t.getTileUrl) throw "'getTileUrl' function required.";
            t.tileSize = t.tileSize || new google.maps.Size(256, 256);
            var i = new google.maps.ImageMapType(t);
            this.map.mapTypes.set(e, i)
        }, u.prototype.addOverlayMapType = function(e) {
            if (!e.hasOwnProperty("getTile") || "function" != typeof e.getTile) throw "'getTile' function required.";
            var t = e.index;
            delete e.index, this.map.overlayMapTypes.insertAt(t, e)
        }, u.prototype.removeOverlayMapType = function(e) {
            this.map.overlayMapTypes.removeAt(e)
        }, u.prototype.addStyle = function(e) {
            var t = new google.maps.StyledMapType(e.styles, {
                name: e.styledMapName
            });
            this.map.mapTypes.set(e.mapTypeId, t)
        }, u.prototype.setStyle = function(e) {
            this.map.setMapTypeId(e)
        }, u.prototype.createPanorama = function(e) {
            return e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || (e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng()), this.panorama = u.createPanorama(e), this.map.setStreetView(this.panorama), this.panorama
        }, u.createPanorama = function(e) {
            var i = a(e.el, e.context);
            e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
            for (var n = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], o = t({
                    visible: !0
                }, e), r = 0; r < n.length; r++) delete o[n[r]];
            for (var s = new google.maps.StreetViewPanorama(i, o), r = 0; r < n.length; r++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function() {
                    e[i].apply(this)
                })
            }(s, n[r]);
            return s
        }, u.prototype.on = function(e, t) {
            return u.on(e, this, t)
        }, u.prototype.off = function(e) {
            u.off(e, this)
        }, u.prototype.once = function(e, t) {
            return u.once(e, this, t)
        }, u.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], u.on = function(e, t, i) {
            if (u.custom_events.indexOf(e) == -1) return t instanceof u && (t = t.map), google.maps.event.addListener(t, e, i);
            var n = {
                handler: i,
                eventName: e
            };
            return t.registered_events[e] = t.registered_events[e] || [], t.registered_events[e].push(n), n
        }, u.off = function(e, t) {
            u.custom_events.indexOf(e) == -1 ? (t instanceof u && (t = t.map), google.maps.event.clearListeners(t, e)) : t.registered_events[e] = []
        }, u.once = function(e, t, i) {
            if (u.custom_events.indexOf(e) == -1) return t instanceof u && (t = t.map), google.maps.event.addListenerOnce(t, e, i)
        }, u.fire = function(e, t, i) {
            if (u.custom_events.indexOf(e) == -1) google.maps.event.trigger(t, e, Array.prototype.slice.apply(arguments).slice(2));
            else if (e in i.registered_events)
                for (var n = i.registered_events[e], o = 0; o < n.length; o++) ! function(e, t, i) {
                    e.apply(t, [i])
                }(n[o].handler, i, t)
        }, u.geolocate = function(e) {
            var t = e.always || e.complete;
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(i) {
                e.success(i), t && t()
            }, function(i) {
                e.error(i), t && t()
            }, e.options) : (e.not_supported(), t && t())
        }, u.geocode = function(e) {
            this.geocoder = new google.maps.Geocoder;
            var t = e.callback;
            e.hasOwnProperty("lat") && e.hasOwnProperty("lng") && (e.latLng = new google.maps.LatLng(e.lat, e.lng)), delete e.lat, delete e.lng, delete e.callback, this.geocoder.geocode(e, function(e, i) {
                t(e, i)
            })
        }, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(e) {
            for (var t, i = new google.maps.LatLngBounds, n = this.getPaths(), o = 0; o < n.getLength(); o++) {
                t = n.getAt(o);
                for (var r = 0; r < t.getLength(); r++) i.extend(t.getAt(r))
            }
            return i
        }), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(e) {
            var t = this.getBounds();
            if (null !== t && !t.contains(e)) return !1;
            for (var i = !1, n = this.getPaths().getLength(), o = 0; o < n; o++)
                for (var r = this.getPaths().getAt(o), s = r.getLength(), a = s - 1, l = 0; l < s; l++) {
                    var u = r.getAt(l),
                        c = r.getAt(a);
                    (u.lng() < e.lng() && c.lng() >= e.lng() || c.lng() < e.lng() && u.lng() >= e.lng()) && u.lat() + (e.lng() - u.lng()) / (c.lng() - u.lng()) * (c.lat() - u.lat()) < e.lat() && (i = !i), a = l
                }
            return i
        }), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(e) {
            return !google.maps.geometry || google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), e) <= this.getRadius()
        }), google.maps.Rectangle.prototype.containsLatLng = function(e) {
            return this.getBounds().contains(e)
        }, google.maps.LatLngBounds.prototype.containsLatLng = function(e) {
            return this.contains(e)
        }, google.maps.Marker.prototype.setFences = function(e) {
            this.fences = e
        }, google.maps.Marker.prototype.addFence = function(e) {
            this.fences.push(e)
        }, google.maps.Marker.prototype.getId = function() {
            return this.__gm_id
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            "use strict";
            if (null == this) throw new TypeError;
            var t = Object(this),
                i = t.length >>> 0;
            if (0 === i) return -1;
            var n = 0;
            if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= i) return -1;
            for (var o = n >= 0 ? n : Math.max(i - Math.abs(n), 0); o < i; o++)
                if (o in t && t[o] === e) return o;
            return -1
        }), u
    }),
    function() {
        "use strict";

        function e(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, n), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, t += 1
        }
        var t = 0,
            i = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, e.prototype.disable = function() {
            return this.enabled = !1, this
        }, e.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function() {
            return this.group.next(this)
        }, e.prototype.previous = function() {
            return this.group.previous(this)
        }, e.invokeAll = function(e) {
            var t = [];
            for (var n in i) t.push(i[n]);
            for (var o = 0, r = t.length; o < r; o++) t[o][e]()
        }, e.destroyAll = function() {
            e.invokeAll("destroy")
        }, e.disableAll = function() {
            e.invokeAll("disable")
        }, e.enableAll = function() {
            e.invokeAll("enable")
        }, e.refreshAll = function() {
            e.Context.refreshAll()
        }, e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = o.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            n = {},
            o = window.Waypoint,
            r = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete n[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                t.didScroll && !o.isTouch || (t.didScroll = !0, o.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            o.Context.refreshAll()
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in t) {
                var n = t[i],
                    o = n.newScroll > n.oldScroll,
                    r = o ? n.forward : n.backward;
                for (var s in this.waypoints[i]) {
                    var a = this.waypoints[i][s],
                        l = n.oldScroll < a.triggerPoint,
                        u = n.newScroll >= a.triggerPoint,
                        c = l && u,
                        d = !l && !u;
                    (c || d) && (a.queueTrigger(r), e[a.group.id] = a.group)
                }
            }
            for (var p in e) e[p].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
            for (var n = 0, o = e.length; n < o; n++) e[n].destroy()
        }, t.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                i = t ? void 0 : this.adapter.offset(),
                n = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : i.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : i.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in e) {
                var s = e[r];
                for (var a in this.waypoints[r]) {
                    var l, u, c, d, p, f = this.waypoints[r][a],
                        h = f.options.offset,
                        m = f.triggerPoint,
                        g = 0,
                        y = null == m;
                    f.element !== f.element.window && (g = f.adapter.offset()[s.offsetProp]), "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h), f.options.offset.indexOf("%") > -1 && (h = Math.ceil(s.contextDimension * h / 100))), l = s.contextScroll - s.contextOffset, f.triggerPoint = g + l - h, u = m < s.oldScroll, c = f.triggerPoint >= s.oldScroll, d = u && c, p = !u && !c, !y && d ? (f.queueTrigger(s.backward), n[f.group.id] = f.group) : !y && p ? (f.queueTrigger(s.forward), n[f.group.id] = f.group) : y && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), n[f.group.id] = f.group)
                }
            }
            return o.requestAnimationFrame(function() {
                for (var e in n) n[e].flushTriggers()
            }), this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in n) n[e].refresh()
        }, t.findByElement = function(e) {
            return n[e.waypointContextKey]
        }, window.onload = function() {
            r && r(), t.refreshAll()
        }, o.requestAnimationFrame = function(t) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            i.call(window, t)
        }, o.Context = t
    }(),
    function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function i(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            o = window.Waypoint;
        i.prototype.add = function(e) {
            this.waypoints.push(e)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i],
                    o = "up" === i || "left" === i;
                n.sort(o ? t : e);
                for (var r = 0, s = n.length; r < s; r += 1) {
                    var a = n[r];
                    (a.options.continuous || r === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(t) {
            this.waypoints.sort(e);
            var i = o.Adapter.inArray(t, this.waypoints),
                n = i === this.waypoints.length - 1;
            return n ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var i = o.Adapter.inArray(t, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, i.prototype.remove = function(e) {
            var t = o.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(e) {
            return n[e.axis][e.name] || new i(e)
        }, o.Group = i
    }(),
    function() {
        "use strict";

        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery,
            i = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
            e.prototype[i] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, e)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
            e[n] = t[n]
        }), i.adapters.push({
            name: "jquery",
            Adapter: e
        }), i.Adapter = e
    }(),
    function() {
        "use strict";

        function e(e) {
            return function() {
                var i = [],
                    n = arguments[0];
                return e.isFunction(arguments[0]) && (n = e.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function() {
                    var o = e.extend({}, n, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]), i.push(new t(o))
                }), i
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(), ! function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.flexibility = e()
        }
    }(function() {
        return function e(t, i, n) {
            function o(s, a) {
                if (!i[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(s, !0);
                        if (r) return r(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = i[s] = {
                        exports: {}
                    };
                    t[s][0].call(c.exports, function(e) {
                        var i = t[s][1][e];
                        return o(i ? i : e)
                    }, c, c.exports, e, t, i, n)
                }
                return i[s].exports
            }
            for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
            return o
        }({
            1: [function(e, t, i) {
                t.exports = function(e) {
                    var t, i, n, o = -1;
                    if (e.lines.length > 1 && "flex-start" === e.style.alignContent)
                        for (t = 0; n = e.lines[++o];) n.crossStart = t, t += n.cross;
                    else if (e.lines.length > 1 && "flex-end" === e.style.alignContent)
                        for (t = e.flexStyle.crossSpace; n = e.lines[++o];) n.crossStart = t, t += n.cross;
                    else if (e.lines.length > 1 && "center" === e.style.alignContent)
                        for (t = e.flexStyle.crossSpace / 2; n = e.lines[++o];) n.crossStart = t, t += n.cross;
                    else if (e.lines.length > 1 && "space-between" === e.style.alignContent)
                        for (i = e.flexStyle.crossSpace / (e.lines.length - 1), t = 0; n = e.lines[++o];) n.crossStart = t, t += n.cross + i;
                    else if (e.lines.length > 1 && "space-around" === e.style.alignContent)
                        for (i = 2 * e.flexStyle.crossSpace / (2 * e.lines.length), t = i / 2; n = e.lines[++o];) n.crossStart = t, t += n.cross + i;
                    else
                        for (i = e.flexStyle.crossSpace / e.lines.length, t = e.flexStyle.crossInnerBefore; n = e.lines[++o];) n.crossStart = t, n.cross += i, t += n.cross
                }
            }, {}],
            2: [function(e, t, i) {
                t.exports = function(e) {
                    for (var t, i = -1; line = e.lines[++i];)
                        for (t = -1; child = line.children[++t];) {
                            var n = child.style.alignSelf;
                            "auto" === n && (n = e.style.alignItems), "flex-start" === n ? child.flexStyle.crossStart = line.crossStart : "flex-end" === n ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === n ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter)
                        }
                }
            }, {}],
            3: [function(e, t, i) {
                t.exports = function e(t, e) {
                    var i = "row" === e || "row-reverse" === e,
                        n = t.mainAxis;
                    if (n) {
                        var o = i && "inline" === n || !i && "block" === n;
                        o || (t.flexStyle = {
                            main: t.flexStyle.cross,
                            cross: t.flexStyle.main,
                            mainOffset: t.flexStyle.crossOffset,
                            crossOffset: t.flexStyle.mainOffset,
                            mainBefore: t.flexStyle.crossBefore,
                            mainAfter: t.flexStyle.crossAfter,
                            crossBefore: t.flexStyle.mainBefore,
                            crossAfter: t.flexStyle.mainAfter,
                            mainInnerBefore: t.flexStyle.crossInnerBefore,
                            mainInnerAfter: t.flexStyle.crossInnerAfter,
                            crossInnerBefore: t.flexStyle.mainInnerBefore,
                            crossInnerAfter: t.flexStyle.mainInnerAfter,
                            mainBorderBefore: t.flexStyle.crossBorderBefore,
                            mainBorderAfter: t.flexStyle.crossBorderAfter,
                            crossBorderBefore: t.flexStyle.mainBorderBefore,
                            crossBorderAfter: t.flexStyle.mainBorderAfter
                        })
                    } else i ? t.flexStyle = {
                        main: t.style.width,
                        cross: t.style.height,
                        mainOffset: t.style.offsetWidth,
                        crossOffset: t.style.offsetHeight,
                        mainBefore: t.style.marginLeft,
                        mainAfter: t.style.marginRight,
                        crossBefore: t.style.marginTop,
                        crossAfter: t.style.marginBottom,
                        mainInnerBefore: t.style.paddingLeft,
                        mainInnerAfter: t.style.paddingRight,
                        crossInnerBefore: t.style.paddingTop,
                        crossInnerAfter: t.style.paddingBottom,
                        mainBorderBefore: t.style.borderLeftWidth,
                        mainBorderAfter: t.style.borderRightWidth,
                        crossBorderBefore: t.style.borderTopWidth,
                        crossBorderAfter: t.style.borderBottomWidth
                    } : t.flexStyle = {
                        main: t.style.height,
                        cross: t.style.width,
                        mainOffset: t.style.offsetHeight,
                        crossOffset: t.style.offsetWidth,
                        mainBefore: t.style.marginTop,
                        mainAfter: t.style.marginBottom,
                        crossBefore: t.style.marginLeft,
                        crossAfter: t.style.marginRight,
                        mainInnerBefore: t.style.paddingTop,
                        mainInnerAfter: t.style.paddingBottom,
                        crossInnerBefore: t.style.paddingLeft,
                        crossInnerAfter: t.style.paddingRight,
                        mainBorderBefore: t.style.borderTopWidth,
                        mainBorderAfter: t.style.borderBottomWidth,
                        crossBorderBefore: t.style.borderLeftWidth,
                        crossBorderAfter: t.style.borderRightWidth
                    }, "content-box" === t.style.boxSizing && ("number" == typeof t.flexStyle.main && (t.flexStyle.main += t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter), "number" == typeof t.flexStyle.cross && (t.flexStyle.cross += t.flexStyle.crossInnerBefore + t.flexStyle.crossInnerAfter + t.flexStyle.crossBorderBefore + t.flexStyle.crossBorderAfter));
                    t.mainAxis = i ? "inline" : "block", t.crossAxis = i ? "block" : "inline", "number" == typeof t.style.flexBasis && (t.flexStyle.main = t.style.flexBasis + t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter), t.flexStyle.mainOuter = t.flexStyle.main, t.flexStyle.crossOuter = t.flexStyle.cross, "auto" === t.flexStyle.mainOuter && (t.flexStyle.mainOuter = t.flexStyle.mainOffset), "auto" === t.flexStyle.crossOuter && (t.flexStyle.crossOuter = t.flexStyle.crossOffset), "number" == typeof t.flexStyle.mainBefore && (t.flexStyle.mainOuter += t.flexStyle.mainBefore), "number" == typeof t.flexStyle.mainAfter && (t.flexStyle.mainOuter += t.flexStyle.mainAfter), "number" == typeof t.flexStyle.crossBefore && (t.flexStyle.crossOuter += t.flexStyle.crossBefore), "number" == typeof t.flexStyle.crossAfter && (t.flexStyle.crossOuter += t.flexStyle.crossAfter)
                }
            }, {}],
            4: [function(e, t, i) {
                var n = e("../reduce");
                t.exports = function(e) {
                    if (e.mainSpace > 0) {
                        var t = n(e.children, function(e, t) {
                            return e + parseFloat(t.style.flexGrow)
                        }, 0);
                        t > 0 && (e.main = n(e.children, function(i, n) {
                            return "auto" === n.flexStyle.main ? n.flexStyle.main = n.flexStyle.mainOffset + parseFloat(n.style.flexGrow) / t * e.mainSpace : n.flexStyle.main += parseFloat(n.style.flexGrow) / t * e.mainSpace, n.flexStyle.mainOuter = n.flexStyle.main + n.flexStyle.mainBefore + n.flexStyle.mainAfter, i + n.flexStyle.mainOuter
                        }, 0), e.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            5: [function(e, t, i) {
                var n = e("../reduce");
                t.exports = function(e) {
                    if (e.mainSpace < 0) {
                        var t = n(e.children, function(e, t) {
                            return e + parseFloat(t.style.flexShrink)
                        }, 0);
                        t > 0 && (e.main = n(e.children, function(i, n) {
                            return n.flexStyle.main += parseFloat(n.style.flexShrink) / t * e.mainSpace, n.flexStyle.mainOuter = n.flexStyle.main + n.flexStyle.mainBefore + n.flexStyle.mainAfter, i + n.flexStyle.mainOuter
                        }, 0), e.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            6: [function(e, t, i) {
                var n = e("../reduce");
                t.exports = function(e) {
                    var t;
                    e.lines = [t = {
                        main: 0,
                        cross: 0,
                        children: []
                    }];
                    for (var i, o = -1; i = e.children[++o];) "nowrap" === e.style.flexWrap || 0 === t.children.length || "auto" === e.flexStyle.main || e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter >= t.main + i.flexStyle.mainOuter ? (t.main += i.flexStyle.mainOuter, t.cross = Math.max(t.cross, i.flexStyle.crossOuter)) : e.lines.push(t = {
                        main: i.flexStyle.mainOuter,
                        cross: i.flexStyle.crossOuter,
                        children: []
                    }), t.children.push(i);
                    e.flexStyle.mainLines = n(e.lines, function(e, t) {
                        return Math.max(e, t.main)
                    }, 0), e.flexStyle.crossLines = n(e.lines, function(e, t) {
                        return e + t.cross
                    }, 0), "auto" === e.flexStyle.main && (e.flexStyle.main = Math.max(e.flexStyle.mainOffset, e.flexStyle.mainLines + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter)), "auto" === e.flexStyle.cross && (e.flexStyle.cross = Math.max(e.flexStyle.crossOffset, e.flexStyle.crossLines + e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter)), e.flexStyle.crossSpace = e.flexStyle.cross - e.flexStyle.crossInnerBefore - e.flexStyle.crossInnerAfter - e.flexStyle.crossBorderBefore - e.flexStyle.crossBorderAfter - e.flexStyle.crossLines, e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter, e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter
                }
            }, {
                "../reduce": 12
            }],
            7: [function(e, t, i) {
                function n(t) {
                    for (var i, n = -1; i = t.children[++n];) e("./flex-direction")(i, t.style.flexDirection);
                    e("./flex-direction")(t, t.style.flexDirection), e("./order")(t), e("./flexbox-lines")(t), e("./align-content")(t), n = -1;
                    for (var o; o = t.lines[++n];) o.mainSpace = t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter - o.main, e("./flex-grow")(o), e("./flex-shrink")(o), e("./margin-main")(o), e("./margin-cross")(o), e("./justify-content")(o, t.style.justifyContent, t);
                    e("./align-items")(t)
                }
                t.exports = n
            }, {
                "./align-content": 1,
                "./align-items": 2,
                "./flex-direction": 3,
                "./flex-grow": 4,
                "./flex-shrink": 5,
                "./flexbox-lines": 6,
                "./justify-content": 8,
                "./margin-cross": 9,
                "./margin-main": 10,
                "./order": 11
            }],
            8: [function(e, t, i) {
                t.exports = function(e, t, i) {
                    var n, o, r, s = i.flexStyle.mainInnerBefore,
                        a = -1;
                    if ("flex-end" === t)
                        for (n = e.mainSpace, n += s; r = e.children[++a];) r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter;
                    else if ("center" === t)
                        for (n = e.mainSpace / 2, n += s; r = e.children[++a];) r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter;
                    else if ("space-between" === t)
                        for (o = e.mainSpace / (e.children.length - 1), n = 0, n += s; r = e.children[++a];) r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter + o;
                    else if ("space-around" === t)
                        for (o = 2 * e.mainSpace / (2 * e.children.length), n = o / 2, n += s; r = e.children[++a];) r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter + o;
                    else
                        for (n = 0, n += s; r = e.children[++a];) r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter
                }
            }, {}],
            9: [function(e, t, i) {
                t.exports = function(e) {
                    for (var t, i = -1; t = e.children[++i];) {
                        var n = 0;
                        "auto" === t.flexStyle.crossBefore && ++n, "auto" === t.flexStyle.crossAfter && ++n;
                        var o = e.cross - t.flexStyle.crossOuter;
                        "auto" === t.flexStyle.crossBefore && (t.flexStyle.crossBefore = o / n), "auto" === t.flexStyle.crossAfter && (t.flexStyle.crossAfter = o / n), "auto" === t.flexStyle.cross ? t.flexStyle.crossOuter = t.flexStyle.crossOffset + t.flexStyle.crossBefore + t.flexStyle.crossAfter : t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter
                    }
                }
            }, {}],
            10: [function(e, t, i) {
                t.exports = function(e) {
                    for (var t, i = 0, n = -1; t = e.children[++n];) "auto" === t.flexStyle.mainBefore && ++i, "auto" === t.flexStyle.mainAfter && ++i;
                    if (i > 0) {
                        for (n = -1; t = e.children[++n];) "auto" === t.flexStyle.mainBefore && (t.flexStyle.mainBefore = e.mainSpace / i), "auto" === t.flexStyle.mainAfter && (t.flexStyle.mainAfter = e.mainSpace / i), "auto" === t.flexStyle.main ? t.flexStyle.mainOuter = t.flexStyle.mainOffset + t.flexStyle.mainBefore + t.flexStyle.mainAfter : t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter;
                        e.mainSpace = 0
                    }
                }
            }, {}],
            11: [function(e, t, i) {
                var n = /^(column|row)-reverse$/;
                t.exports = function(e) {
                    e.children.sort(function(e, t) {
                        return e.style.order - t.style.order || e.index - t.index
                    }), n.test(e.style.flexDirection) && e.children.reverse()
                }
            }, {}],
            12: [function(e, t, i) {
                function n(e, t, i) {
                    for (var n = e.length, o = -1; ++o < n;) o in e && (i = t(i, e[o], o));
                    return i
                }
                t.exports = n
            }, {}],
            13: [function(e, t, i) {
                function n(e) {
                    a(s(e))
                }
                var o = e("./read"),
                    r = e("./write"),
                    s = e("./readAll"),
                    a = e("./writeAll");
                t.exports = n, t.exports.read = o, t.exports.write = r, t.exports.readAll = s, t.exports.writeAll = a
            }, {
                "./read": 15,
                "./readAll": 16,
                "./write": 17,
                "./writeAll": 18
            }],
            14: [function(e, t, i) {
                function n(e, t, i) {
                    var n = e[t],
                        s = String(n).match(r);
                    if (!s) {
                        var u = t.match(l);
                        if (u) {
                            var c = e["border" + u[1] + "Style"];
                            return "none" === c ? 0 : a[n] || 0
                        }
                        return n
                    }
                    var d = s[1],
                        p = s[2];
                    return "px" === p ? 1 * d : "cm" === p ? .3937 * d * 96 : "in" === p ? 96 * d : "mm" === p ? .3937 * d * 96 / 10 : "pc" === p ? 12 * d * 96 / 72 : "pt" === p ? 96 * d / 72 : "rem" === p ? 16 * d : o(n, i)
                }

                function o(e, t) {
                    s.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + e + "!important", t.parentNode.insertBefore(s, t.nextSibling);
                    var i = s.offsetWidth;
                    return t.parentNode.removeChild(s), i
                }
                t.exports = n;
                var r = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
                    s = document.createElement("div"),
                    a = {
                        medium: 4,
                        none: 0,
                        thick: 6,
                        thin: 2
                    },
                    l = /^border(Bottom|Left|Right|Top)Width$/
            }, {}],
            15: [function(e, t, i) {
                function n(e) {
                    var t = {
                            alignContent: "stretch",
                            alignItems: "stretch",
                            alignSelf: "auto",
                            borderBottomStyle: "none",
                            borderBottomWidth: 0,
                            borderLeftStyle: "none",
                            borderLeftWidth: 0,
                            borderRightStyle: "none",
                            borderRightWidth: 0,
                            borderTopStyle: "none",
                            borderTopWidth: 0,
                            boxSizing: "content-box",
                            display: "inline",
                            flexBasis: "auto",
                            flexDirection: "row",
                            flexGrow: 0,
                            flexShrink: 1,
                            flexWrap: "nowrap",
                            justifyContent: "flex-start",
                            height: "auto",
                            marginTop: 0,
                            marginRight: 0,
                            marginLeft: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            minHeight: 0,
                            minWidth: 0,
                            order: 0,
                            position: "static",
                            width: "auto"
                        },
                        i = e instanceof Element;
                    if (i) {
                        var n = e.hasAttribute("data-style"),
                            a = n ? e.getAttribute("data-style") : e.getAttribute("style") || "";
                        n || e.setAttribute("data-style", a);
                        var l = window.getComputedStyle && getComputedStyle(e) || {};
                        s(t, l);
                        var c = e.currentStyle || {};
                        o(t, c), r(t, a);
                        for (var d in t) t[d] = u(t, d, e);
                        var p = e.getBoundingClientRect();
                        t.offsetHeight = p.height || e.offsetHeight, t.offsetWidth = p.width || e.offsetWidth
                    }
                    var f = {
                        element: e,
                        style: t
                    };
                    return f
                }

                function o(e, t) {
                    for (var i in e) {
                        var n = i in t;
                        if (n) e[i] = t[i];
                        else {
                            var o = i.replace(/[A-Z]/g, "-$&").toLowerCase(),
                                r = o in t;
                            r && (e[i] = t[o])
                        }
                    }
                    var s = "-js-display" in t;
                    s && (e.display = t["-js-display"])
                }

                function r(e, t) {
                    for (var i; i = a.exec(t);) {
                        var n = i[1].toLowerCase().replace(/-[a-z]/g, function(e) {
                            return e.slice(1).toUpperCase()
                        });
                        e[n] = i[2]
                    }
                }

                function s(e, t) {
                    for (var i in e) {
                        var n = i in t;
                        n && !l.test(i) && (e[i] = t[i])
                    }
                }
                t.exports = n;
                var a = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
                    l = /^(alignSelf|height|width)$/,
                    u = e("./getComputedLength")
            }, {
                "./getComputedLength": 14
            }],
            16: [function(e, t, i) {
                function n(e) {
                    var t = [];
                    return o(e, t), t
                }

                function o(e, t) {
                    for (var i, n = r(e), a = [], l = -1; i = e.childNodes[++l];) {
                        var u = 3 === i.nodeType && !/^\s*$/.test(i.nodeValue);
                        if (n && u) {
                            var c = i;
                            i = e.insertBefore(document.createElement("flex-item"), c), i.appendChild(c)
                        }
                        var d = i instanceof Element;
                        if (d) {
                            var p = o(i, t);
                            if (n) {
                                var f = i.style;
                                f.display = "inline-block", f.position = "absolute", p.style = s(i).style, a.push(p)
                            }
                        }
                    }
                    var h = {
                        element: e,
                        children: a
                    };
                    return n && (h.style = s(e).style, t.push(h)), h
                }

                function r(e) {
                    var t = e instanceof Element,
                        i = t && e.getAttribute("data-style"),
                        n = t && e.currentStyle && e.currentStyle["-js-display"],
                        o = a.test(i) || l.test(n);
                    return o
                }
                t.exports = n;
                var s = e("../read"),
                    a = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
                    l = /^(inline-)?flex$/i
            }, {
                "../read": 15
            }],
            17: [function(e, t, i) {
                function n(e) {
                    r(e);
                    var t = e.element.style,
                        i = "inline" === e.mainAxis ? ["main", "cross"] : ["cross", "main"];
                    t.boxSizing = "content-box", t.display = "block", t.position = "relative", t.width = o(e.flexStyle[i[0]] - e.flexStyle[i[0] + "InnerBefore"] - e.flexStyle[i[0] + "InnerAfter"] - e.flexStyle[i[0] + "BorderBefore"] - e.flexStyle[i[0] + "BorderAfter"]), t.height = o(e.flexStyle[i[1]] - e.flexStyle[i[1] + "InnerBefore"] - e.flexStyle[i[1] + "InnerAfter"] - e.flexStyle[i[1] + "BorderBefore"] - e.flexStyle[i[1] + "BorderAfter"]);
                    for (var n, s = -1; n = e.children[++s];) {
                        var a = n.element.style,
                            l = "inline" === n.mainAxis ? ["main", "cross"] : ["cross", "main"];
                        a.boxSizing = "content-box", a.display = "block", a.position = "absolute", "auto" !== n.flexStyle[l[0]] && (a.width = o(n.flexStyle[l[0]] - n.flexStyle[l[0] + "InnerBefore"] - n.flexStyle[l[0] + "InnerAfter"] - n.flexStyle[l[0] + "BorderBefore"] - n.flexStyle[l[0] + "BorderAfter"])), "auto" !== n.flexStyle[l[1]] && (a.height = o(n.flexStyle[l[1]] - n.flexStyle[l[1] + "InnerBefore"] - n.flexStyle[l[1] + "InnerAfter"] - n.flexStyle[l[1] + "BorderBefore"] - n.flexStyle[l[1] + "BorderAfter"])), a.top = o(n.flexStyle[l[1] + "Start"]), a.left = o(n.flexStyle[l[0] + "Start"]), a.marginTop = o(n.flexStyle[l[1] + "Before"]), a.marginRight = o(n.flexStyle[l[0] + "After"]), a.marginBottom = o(n.flexStyle[l[1] + "After"]), a.marginLeft = o(n.flexStyle[l[0] + "Before"])
                    }
                }

                function o(e) {
                    return "string" == typeof e ? e : Math.max(e, 0) + "px"
                }
                t.exports = n;
                var r = e("../flexbox")
            }, {
                "../flexbox": 7
            }],
            18: [function(e, t, i) {
                function n(e) {
                    for (var t, i = -1; t = e[++i];) o(t)
                }
                t.exports = n;
                var o = e("../write")
            }, {
                "../write": 17
            }]
        }, {}, [13])(13)
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(e) {
        var t, i, n, o, r, s, a = "Close",
            l = "BeforeClose",
            u = "AfterClose",
            c = "BeforeAppend",
            d = "MarkupParse",
            p = "Open",
            f = "Change",
            h = "mfp",
            m = "." + h,
            g = "mfp-ready",
            y = "mfp-removing",
            v = "mfp-prevent-close",
            b = function() {},
            x = !!window.jQuery,
            w = e(window),
            S = function(e, i) {
                t.ev.on(h + e + m, i)
            },
            k = function(t, i, n, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + t, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = e(r), i && r.appendTo(i)), r
            },
            _ = function(i, n) {
                t.ev.triggerHandler(h + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
            },
            E = function(i) {
                return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
            },
            C = function() {
                e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
            },
            I = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            };
        b.prototype = {
            constructor: b,
            init: function() {
                var i = navigator.appVersion;
                t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = I(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
            },
            open: function(i) {
                var o;
                if (i.isObj === !1) {
                    t.items = i.items.toArray(), t.index = 0;
                    var s, a = i.items;
                    for (o = 0; o < a.length; o++)
                        if (s = a[o], s.parsed && (s = s.el[0]), s === i.el[0]) {
                            t.index = o;
                            break
                        }
                } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
                if (t.isOpen) return void t.updateItemHTML();
                t.types = [], r = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + m, function() {
                    t.close()
                }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + m, function(e) {
                    t._checkIfClose(e.target) && t.close()
                }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var u = l[o];
                    u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
                }
                _("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (S(d, function(e, t, i, n) {
                    i.close_replaceWith = E(n.type)
                }), r += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: w.scrollTop(),
                    position: "absolute"
                }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && n.on("keyup" + m, function(e) {
                    27 === e.keyCode && t.close()
                }), w.on("resize" + m, function() {
                    t.updateSize()
                }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
                var c = t.wH = w.height(),
                    f = {};
                if (t.fixedContentPos && t._hasScrollBar(c)) {
                    var h = t._getScrollbarSize();
                    h && (f.marginRight = h)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var y = t.st.mainClass;
                return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), _("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                    t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), n.on("focusin" + m, t._onFocusIn)
                }, 16), t.isOpen = !0, t.updateSize(c), _(p), i
            },
            close: function() {
                t.isOpen && (_(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                _(a);
                var i = y + " " + g + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
                }
                n.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, _(u)
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    t.wrap.css("height", n), t.wH = n
                } else t.wH = e || w.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), _("Resize")
            },
            updateItemHTML: function() {
                var i = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
                var n = i.type;
                if (_("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                    var r = !!t.st[n] && t.st[n].markup;
                    _("FirstMarkupParse", r), r ? t.currTemplate[n] = e(r) : t.currTemplate[n] = !0
                }
                o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
                var s = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
                t.appendContent(s, n), i.preloaded = !0, _(f, i), o = i.type, t.container.prepend(t.contentContainer), _("AfterChange")
            },
            appendContent: function(e, i) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", _(c), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(i) {
                var n, o = t.items[i];
                if (o.tagName ? o = {
                        el: e(o)
                    } : (n = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var r = t.types, s = 0; s < r.length; s++)
                        if (o.el.hasClass("mfp-" + r[s])) {
                            n = r[s];
                            break
                        } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, _("ElementParse", o), t.items[i]
            },
            addGroup: function(e, i) {
                var n = function(n) {
                    n.mfpEl = this, t._openClick(n, e, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
                if (r || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                    if (s)
                        if (e.isFunction(s)) {
                            if (!s.call(t)) return !0
                        } else if (w.width() < s) return !0;
                    i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
                }
            },
            updateStatus: function(e, n) {
                if (t.preloader) {
                    i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                    var o = {
                        status: e,
                        text: n
                    };
                    _("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), i = e
                }
            },
            _checkIfClose: function(i) {
                if (!e(i).hasClass(v)) {
                    var n = t.st.closeOnContentClick,
                        o = t.st.closeOnBgClick;
                    if (n && o) return !0;
                    if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                    if (i === t.content[0] || e.contains(t.content[0], i)) {
                        if (n) return !0
                    } else if (o && e.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || w.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(i) {
                if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target)) return t._setFocus(), !1
            },
            _parseMarkup: function(t, i, n) {
                var o;
                n.data && (i = e.extend(n.data, i)), _(d, [t, i, n]), e.each(i, function(i, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (o = i.split("_"), o.length > 1) {
                        var r = t.find(m + "-" + o[0]);
                        if (r.length > 0) {
                            var s = o[1];
                            "replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(e("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
                        }
                    } else t.find(m + "-" + i).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: b.prototype,
            modules: [],
            open: function(t, i) {
                return C(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, i) {
                i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, e.fn.magnificPopup = function(i) {
            C();
            var n = e(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, r = x ? n.data("magnificPopup") : n[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({
                        mfpEl: o
                    }, n, r)
                } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
            else i = e.extend(!0, {}, i), x ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
            return n
        };
        var T, P, L, z = "inline",
            A = function() {
                L && (P.after(L.addClass(T)).detach(), L = null)
            };
        e.magnificPopup.registerModule(z, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(z), S(a + "." + z, function() {
                        A()
                    })
                },
                getInline: function(i, n) {
                    if (A(), i.src) {
                        var o = t.st.inline,
                            r = e(i.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (P || (T = o.hiddenClass, P = k(T), T = "mfp-" + T), L = r.after(P).detach().removeClass(T)), t.updateStatus("ready")
                        } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                        return i.inlineElement = r, r
                    }
                    return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
                }
            }
        });
        var M, O = "ajax",
            D = function() {
                M && e(document.body).removeClass(M)
            },
            F = function() {
                D(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(O, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(O), M = t.st.ajax.cursor, S(a + "." + O, F), S("BeforeChange." + O, F)
                },
                getAjax: function(i) {
                    M && e(document.body).addClass(M), t.updateStatus("loading");
                    var n = e.extend({
                        url: i.src,
                        success: function(n, o, r) {
                            var s = {
                                data: n,
                                xhr: r
                            };
                            _("ParseAjax", s), t.appendContent(e(s.data), O), i.finished = !0, D(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(g)
                            }, 16), t.updateStatus("ready"), _("AjaxContentAdded")
                        },
                        error: function() {
                            D(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(n), ""
                }
            }
        });
        var j, B = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = t.st.image.titleSrc;
            if (n) {
                if (e.isFunction(n)) return n.call(t, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = t.st.image,
                        n = ".image";
                    t.types.push("image"), S(p + n, function() {
                        "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                    }), S(a + n, function() {
                        i.cursor && e(document.body).removeClass(i.cursor), w.off("resize" + m)
                    }), S("Resize" + n, t.resizeImage), t.isLowIE && S("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var i = 0;
                        t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, _("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var i = 0,
                        n = e.img[0],
                        o = function(r) {
                            j && clearInterval(j), j = setInterval(function() {
                                return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(j), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                            }, r)
                        };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0,
                        r = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, _("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(r, 100) : s()))
                        },
                        s = function() {
                            i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = t.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var u = document.createElement("img");
                        u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), i.img = e(u).on("load.mfploader", r).on("error.mfploader", s), u.src = i.src, l.is("img") && (i.img = i.img.clone()), u = i.img[0], u.naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1)
                    }
                    return t._parseMarkup(n, {
                        title: B(i),
                        img_replaceWith: i.img
                    }, i), t.resizeImage(), i.hasSize ? (j && clearInterval(j), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
                }
            }
        });
        var W, R = function() {
            return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
        };
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, i = t.st.zoom,
                        n = ".zoom";
                    if (i.enabled && t.supportsTransition) {
                        var o, r, s = i.duration,
                            u = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, t.css(o), t
                            },
                            c = function() {
                                t.content.css("visibility", "visible")
                            };
                        S("BuildControls" + n, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void c();
                                r = u(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                    r.css(t._getOffset(!0)), o = setTimeout(function() {
                                        c(), setTimeout(function() {
                                            r.remove(), e = r = null, _("ZoomAnimationEnded")
                                        }, 16)
                                    }, s)
                                }, 16)
                            }
                        }), S(l + n, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                    if (e = t._getItemToZoom(), !e) return;
                                    r = u(e)
                                }
                                r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    r.css(t._getOffset())
                                }, 16)
                            }
                        }), S(a + n, function() {
                            t._allowZoom() && (c(), r && r.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return !!t.currItem.hasSize && t.currItem.img
                },
                _getOffset: function(i) {
                    var n;
                    n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                    var o = n.offset(),
                        r = parseInt(n.css("padding-top"), 10),
                        s = parseInt(n.css("padding-bottom"), 10);
                    o.top -= e(window).scrollTop() - r;
                    var a = {
                        width: n.width(),
                        height: (x ? n.innerHeight() : n[0].offsetHeight) - s - r
                    };
                    return R() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
                }
            }
        });
        var N = "iframe",
            q = "//about:blank",
            H = function(e) {
                if (t.currTemplate[N]) {
                    var i = t.currTemplate[N].find("iframe");
                    i.length && (e || (i[0].src = q), t.isIE8 && i.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule(N, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push(N), S("BeforeChange", function(e, t, i) {
                        t !== i && (t === N ? H() : i === N && H(!0))
                    }), S(a + "." + N, function() {
                        H()
                    })
                },
                getIframe: function(i, n) {
                    var o = i.src,
                        r = t.st.iframe;
                    e.each(r.patterns, function() {
                        if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                    });
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(n, s, i), t.updateStatus("ready"), n
                }
            }
        });
        var U = function(e) {
                var i = t.items.length;
                return e > i - 1 ? e - i : e < 0 ? i + e : e
            },
            Q = function(e, t, i) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = t.st.gallery,
                        o = ".mfp-gallery";
                    return t.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", S(p + o, function() {
                        i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                            if (t.items.length > 1) return t.next(), !1
                        }), n.on("keydown" + o, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), S("UpdateStatus" + o, function(e, i) {
                        i.text && (i.text = Q(i.text, t.currItem.index, t.items.length))
                    }), S(d + o, function(e, n, o, r) {
                        var s = t.items.length;
                        o.counter = s > 1 ? Q(i.tCounter, r.index, s) : ""
                    }), S("BuildControls" + o, function() {
                        if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                            var n = i.arrowMarkup,
                                o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(v),
                                r = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(v);
                            o.click(function() {
                                t.prev()
                            }), r.click(function() {
                                t.next()
                            }), t.container.append(o.add(r))
                        }
                    }), S(f + o, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void S(a + o, function() {
                        n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                    }))
                },
                next: function() {
                    t.direction = !0, t.index = U(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = U(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, i = t.st.gallery.preload,
                        n = Math.min(i[0], t.items.length),
                        o = Math.min(i[1], t.items.length);
                    for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(i) {
                    if (i = U(i), !t.items[i].preloaded) {
                        var n = t.items[i];
                        n.parsed || (n = t.parseEl(i)), _("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, _("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var V = "retina";
        e.magnificPopup.registerModule(V, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            i = e.ratio;
                        i = isNaN(i) ? i() : i, i > 1 && (S("ImageHasSize." + V, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), S("ElementParse." + V, function(t, n) {
                            n.src = e.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }), C()
    }), ! function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
    }(window, function(e, t) {
        "use strict";

        function i(i, r, a) {
            function l(e, t, n) {
                var o, r = "$()." + i + '("' + t + '")';
                return e.each(function(e, l) {
                    var u = a.data(l, i);
                    if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                    var c = u[t];
                    if (!c || "_" == t.charAt(0)) return void s(r + " is not a valid method");
                    var d = c.apply(u, n);
                    o = void 0 === o ? d : o
                }), void 0 !== o ? o : e
            }

            function u(e, t) {
                e.each(function(e, n) {
                    var o = a.data(n, i);
                    o ? (o.option(t), o._init()) : (o = new r(n, t), a.data(n, i, o))
                })
            }
            a = a || t || e.jQuery, a && (r.prototype.option || (r.prototype.option = function(e) {
                a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
            }), a.fn[i] = function(e) {
                if ("string" == typeof e) {
                    var t = o.call(arguments, 1);
                    return l(this, e, t)
                }
                return u(this, e), this
            }, n(a))
        }

        function n(e) {
            !e || e && e.bridget || (e.bridget = i)
        }
        var o = Array.prototype.slice,
            r = e.console,
            s = "undefined" == typeof r ? function() {} : function(e) {
                r.error(e)
            };
        return n(t || e.jQuery), i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
    }("undefined" != typeof window ? window : this, function() {
        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var i = this._events = this._events || {},
                    n = i[e] = i[e] || [];
                return -1 == n.indexOf(t) && n.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[e] = i[e] || {};
                return n[t] = !0, this
            }
        }, t.off = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return -1 != n && i.splice(n, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                    var s = r && r[o];
                    s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n]
                }
                return this
            }
        }, e
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return t()
        }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
    }(window, function() {
        "use strict";

        function e(e) {
            var t = parseFloat(e),
                i = -1 == e.indexOf("%") && !isNaN(t);
            return i && t
        }

        function t() {}

        function i() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0; u > t; t++) {
                var i = l[t];
                e[i] = 0
            }
            return e
        }

        function n(e) {
            var t = getComputedStyle(e);
            return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See"), t
        }

        function o() {
            if (!c) {
                c = !0;
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = n(t);
                r.isBoxSizeOuter = s = 200 == e(o.width), i.removeChild(t)
            }
        }

        function r(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var r = n(t);
                if ("none" == r.display) return i();
                var a = {};
                a.width = t.offsetWidth, a.height = t.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == r.boxSizing, d = 0; u > d; d++) {
                    var p = l[d],
                        f = r[p],
                        h = parseFloat(f);
                    a[p] = isNaN(h) ? 0 : h
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    x = a.borderTopWidth + a.borderBottomWidth,
                    w = c && s,
                    S = e(r.width);
                S !== !1 && (a.width = S + (w ? 0 : m + b));
                var k = e(r.height);
                return k !== !1 && (a.height = k + (w ? 0 : g + x)), a.innerWidth = a.width - (m + b), a.innerHeight = a.height - (g + x), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
            }
        }
        var s, a = "undefined" == typeof console ? t : function(e) {
                console.error(e)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = l.length,
            c = !1;
        return r
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
    }(window, function() {
        "use strict";
        var e = function() {
            var e = Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
                var n = t[i],
                    o = n + "MatchesSelector";
                if (e[o]) return o
            }
        }();
        return function(t, i) {
            return t[e](i)
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
    }(window, function(e, t) {
        var i = {};
        i.extend = function(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }, i.modulo = function(e, t) {
            return (e % t + t) % t
        }, i.makeArray = function(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }, i.removeFrom = function(e, t) {
            var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
        }, i.getParent = function(e, i) {
            for (; e != document.body;)
                if (e = e.parentNode, t(e, i)) return e
        }, i.getQueryElement = function(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        }, i.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, i.filterFindElements = function(e, n) {
            e = i.makeArray(e);
            var o = [];
            return e.forEach(function(e) {
                if (e instanceof HTMLElement) {
                    if (!n) return void o.push(e);
                    t(e, n) && o.push(e);
                    for (var i = e.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                }
            }), o
        }, i.debounceMethod = function(e, t, i) {
            var n = e.prototype[t],
                o = t + "Timeout";
            e.prototype[t] = function() {
                var e = this[o];
                e && clearTimeout(e);
                var t = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, t), delete r[o]
                }, i || 100)
            }
        }, i.docReady = function(e) {
            var t = document.readyState;
            "complete" == t || "interactive" == t ? e() : document.addEventListener("DOMContentLoaded", e)
        }, i.toDashed = function(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, i) {
                return t + "-" + i
            }).toLowerCase()
        };
        var n = e.console;
        return i.htmlInit = function(t, o) {
            i.docReady(function() {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + r),
                    u = i.makeArray(a).concat(i.makeArray(l)),
                    c = s + "-options",
                    d = e.jQuery;
                u.forEach(function(e) {
                    var i, r = e.getAttribute(s) || e.getAttribute(c);
                    try {
                        i = r && JSON.parse(r)
                    } catch (t) {
                        return void(n && n.error("Error parsing " + s + " on " + e.className + ": " + t))
                    }
                    var a = new t(e, i);
                    d && d.data(e, o, a)
                })
            })
        }, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
    }(window, function(e, t) {
        "use strict";

        function i(e) {
            for (var t in e) return !1;
            return t = null, !0
        }

        function n(e, t) {
            e && (this.element = e, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function o(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }
        var r = document.documentElement.style,
            s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [s],
            u = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            },
            c = n.prototype = Object.create(e.prototype);
        c.constructor = n, c._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, c.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.getSize = function() {
            this.size = t(this.element)
        }, c.css = function(e) {
            var t = this.element.style;
            for (var i in e) {
                var n = u[i] || i;
                t[n] = e[i]
            }
        }, c.getPosition = function() {
            var e = getComputedStyle(this.element),
                t = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = e[t ? "left" : "right"],
                o = e[i ? "top" : "bottom"],
                r = this.layout.size,
                s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= t ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
        }, c.layoutPosition = function() {
            var e = this.layout.size,
                t = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                r = i ? "left" : "right",
                s = i ? "right" : "left",
                a = this.position.x + e[o];
            t[r] = this.getXValue(a), t[s] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                u = n ? "top" : "bottom",
                c = n ? "bottom" : "top",
                d = this.position.y + e[l];
            t[u] = this.getYValue(d), t[c] = "", this.css(t), this.emitEvent("layout", [this])
        }, c.getXValue = function(e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
        }, c.getYValue = function(e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
        }, c._transitionTo = function(e, t) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(e, 10),
                r = parseInt(t, 10),
                s = o === this.position.x && r === this.position.y;
            if (this.setPosition(e, t), s && !this.isTransitioning) return void this.layoutPosition();
            var a = e - i,
                l = t - n,
                u = {};
            u.transform = this.getTranslate(a, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, c.getTranslate = function(e, t) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return e = i ? e : -e, t = n ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)"
        }, c.goTo = function(e, t) {
            this.setPosition(e, t), this.layoutPosition()
        }, c.moveTo = c._transitionTo, c.setPosition = function(e, t) {
            this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
        }, c._nonTransition = function(e) {
            this.css(e.to), e.isCleaning && this._removeStyles(e.to);
            for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
        }, c.transition = function(e) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
            var t = this._transn;
            for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
            for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
            if (e.from) {
                this.css(e.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        };
        var d = "opacity," + o(a);
        c.enableTransition = function() {
            if (!this.isTransitioning) {
                var e = this.layout.options.transitionDuration;
                e = "number" == typeof e ? e + "ms" : e, this.css({
                    transitionProperty: d,
                    transitionDuration: e,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(l, this, !1)
            }
        }, c.onwebkitTransitionEnd = function(e) {
            this.ontransitionend(e)
        }, c.onotransitionend = function(e) {
            this.ontransitionend(e)
        };
        var p = {
            "-webkit-transform": "transform"
        };
        c.ontransitionend = function(e) {
            if (e.target === this.element) {
                var t = this._transn,
                    n = p[e.propertyName] || e.propertyName;
                if (delete t.ingProperties[n], i(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) {
                    var o = t.onEnd[n];
                    o.call(this), delete t.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, c.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, c._removeStyles = function(e) {
            var t = {};
            for (var i in e) t[i] = "";
            this.css(t)
        };
        var f = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return c.removeTransitionStyles = function() {
            this.css(f)
        }, c.stagger = function(e) {
            e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
        }, c.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, c.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, c.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var e = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            t[i] = this.onRevealTransitionEnd, this.transition({
                from: e.hiddenStyle,
                to: e.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, c.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, c.getHideRevealTransitionEndProperty = function(e) {
            var t = this.layout.options[e];
            if (t.opacity) return "opacity";
            for (var i in t) return i
        }, c.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var e = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            t[i] = this.onHideTransitionEnd, this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, c.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, c.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
            return t(e, i, n, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
    }(window, function(e, t, i, n, o) {
        "use strict";

        function r(e, t) {
            var i = n.getQueryElement(e);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e)));
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
            var o = ++d;
            this.element.outlayerGUID = o, p[o] = this, this._create();
            var r = this._getOption("initLayout");
            r && this.layout()
        }

        function s(e) {
            function t() {
                e.apply(this, arguments)
            }
            return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
        }

        function a(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                i = t && t[1],
                n = t && t[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = h[n] || 1;
            return i * o
        }
        var l = e.console,
            u = e.jQuery,
            c = function() {},
            d = 0,
            p = {};
        r.namespace = "outlayer", r.Item = o, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var f = r.prototype;
        n.extend(f, t.prototype), f.option = function(e) {
            n.extend(this.options, e)
        }, f._getOption = function(e) {
            var t = this.constructor.compatOptions[e];
            return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, f._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var e = this._getOption("resize");
            e && this.bindResize()
        }, f.reloadItems = function() {
            this.items = this._itemize(this.element.children);
        }, f._itemize = function(e) {
            for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], o = 0; o < t.length; o++) {
                var r = t[o],
                    s = new i(r, this);
                n.push(s)
            }
            return n
        }, f._filterFindItemElements = function(e) {
            return n.filterFindElements(e, this.options.itemSelector)
        }, f.getItemElements = function() {
            return this.items.map(function(e) {
                return e.element
            })
        }, f.layout = function() {
            this._resetLayout(), this._manageStamps();
            var e = this._getOption("layoutInstant"),
                t = void 0 !== e ? e : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, f._init = f.layout, f._resetLayout = function() {
            this.getSize()
        }, f.getSize = function() {
            this.size = i(this.element)
        }, f._getMeasurement = function(e, t) {
            var n, o = this.options[e];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[e] = n ? i(n)[t] : o) : this[e] = 0
        }, f.layoutItems = function(e, t) {
            e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
        }, f._getItemsForLayout = function(e) {
            return e.filter(function(e) {
                return !e.isIgnored
            })
        }, f._layoutItems = function(e, t) {
            if (this._emitCompleteOnItems("layout", e), e && e.length) {
                var i = [];
                e.forEach(function(e) {
                    var n = this._getItemLayoutPosition(e);
                    n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, f._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, f._processLayoutQueue = function(e) {
            this.updateStagger(), e.forEach(function(e, t) {
                this._positionItem(e.item, e.x, e.y, e.isInstant, t)
            }, this)
        }, f.updateStagger = function() {
            var e = this.options.stagger;
            return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = a(e), this.stagger)
        }, f._positionItem = function(e, t, i, n, o) {
            n ? e.goTo(t, i) : (e.stagger(o * this.stagger), e.moveTo(t, i))
        }, f._postLayout = function() {
            this.resizeContainer()
        }, f.resizeContainer = function() {
            var e = this._getOption("resizeContainer");
            if (e) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, f._getContainerSize = c, f._setContainerMeasure = function(e, t) {
            if (void 0 !== e) {
                var i = this.size;
                i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
            }
        }, f._emitCompleteOnItems = function(e, t) {
            function i() {
                o.dispatchEvent(e + "Complete", null, [t])
            }

            function n() {
                s++, s == r && i()
            }
            var o = this,
                r = t.length;
            if (!t || !r) return void i();
            var s = 0;
            t.forEach(function(t) {
                t.once(e, n)
            })
        }, f.dispatchEvent = function(e, t, i) {
            var n = t ? [t].concat(i) : i;
            if (this.emitEvent(e, n), u)
                if (this.$element = this.$element || u(this.element), t) {
                    var o = u.Event(t);
                    o.type = e, this.$element.trigger(o, i)
                } else this.$element.trigger(e, i)
        }, f.ignore = function(e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0)
        }, f.unignore = function(e) {
            var t = this.getItem(e);
            t && delete t.isIgnored
        }, f.stamp = function(e) {
            e = this._find(e), e && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
        }, f.unstamp = function(e) {
            e = this._find(e), e && e.forEach(function(e) {
                n.removeFrom(this.stamps, e), this.unignore(e)
            }, this)
        }, f._find = function(e) {
            return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)) : void 0
        }, f._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, f._getBoundingRect = function() {
            var e = this.element.getBoundingClientRect(),
                t = this.size;
            this._boundingRect = {
                left: e.left + t.paddingLeft + t.borderLeftWidth,
                top: e.top + t.paddingTop + t.borderTopWidth,
                right: e.right - (t.paddingRight + t.borderRightWidth),
                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
            }
        }, f._manageStamp = c, f._getElementOffset = function(e) {
            var t = e.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(e),
                r = {
                    left: t.left - n.left - o.marginLeft,
                    top: t.top - n.top - o.marginTop,
                    right: n.right - t.right - o.marginRight,
                    bottom: n.bottom - t.bottom - o.marginBottom
                };
            return r
        }, f.handleEvent = n.handleEvent, f.bindResize = function() {
            e.addEventListener("resize", this), this.isResizeBound = !0
        }, f.unbindResize = function() {
            e.removeEventListener("resize", this), this.isResizeBound = !1
        }, f.onresize = function() {
            this.resize()
        }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, f.needsResizeLayout = function() {
            var e = i(this.element),
                t = this.size && e;
            return t && e.innerWidth !== this.size.innerWidth
        }, f.addItems = function(e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)), t
        }, f.appended = function(e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, f.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                var i = this.items.slice(0);
                this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
            }
        }, f.reveal = function(e) {
            if (this._emitCompleteOnItems("reveal", e), e && e.length) {
                var t = this.updateStagger();
                e.forEach(function(e, i) {
                    e.stagger(i * t), e.reveal()
                })
            }
        }, f.hide = function(e) {
            if (this._emitCompleteOnItems("hide", e), e && e.length) {
                var t = this.updateStagger();
                e.forEach(function(e, i) {
                    e.stagger(i * t), e.hide()
                })
            }
        }, f.revealItemElements = function(e) {
            var t = this.getItems(e);
            this.reveal(t)
        }, f.hideItemElements = function(e) {
            var t = this.getItems(e);
            this.hide(t)
        }, f.getItem = function(e) {
            for (var t = 0; t < this.items.length; t++) {
                var i = this.items[t];
                if (i.element == e) return i
            }
        }, f.getItems = function(e) {
            e = n.makeArray(e);
            var t = [];
            return e.forEach(function(e) {
                var i = this.getItem(e);
                i && t.push(i)
            }, this), t
        }, f.remove = function(e) {
            var t = this.getItems(e);
            this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
                e.remove(), n.removeFrom(this.items, e)
            }, this)
        }, f.destroy = function() {
            var e = this.element.style;
            e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
                e.destroy()
            }), this.unbindResize();
            var t = this.element.outlayerGUID;
            delete p[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, r.data = function(e) {
            e = n.getQueryElement(e);
            var t = e && e.outlayerGUID;
            return t && p[t]
        }, r.create = function(e, t) {
            var i = s(r);
            return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = e, i.data = r.data, i.Item = s(o), n.htmlInit(i, e), u && u.bridget && u.bridget(e, i), i
        };
        var h = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o, r
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
    }(window, function(e) {
        "use strict";

        function t() {
            e.Item.apply(this, arguments)
        }
        var i = t.prototype = Object.create(e.Item.prototype),
            n = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var e = this.layout.options.getSortData,
                    t = this.layout._sorters;
                for (var i in e) {
                    var n = t[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var o = i.destroy;
        return i.destroy = function() {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
    }(window, function(e, t) {
        "use strict";

        function i(e) {
            this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
        }
        var n = i.prototype,
            o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return o.forEach(function(e) {
            n[e] = function() {
                return t.prototype[e].apply(this.isotope, arguments)
            }
        }), n.needsVerticalResizeLayout = function() {
            var t = e(this.isotope.element),
                i = this.isotope.size && t;
            return i && t.innerHeight != this.isotope.size.innerHeight
        }, n._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.getSegmentSize = function(e, t) {
            var i = e + t,
                n = "outer" + t;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + t]
            }
        }, n.getFirstItemSize = function() {
            var t = this.isotope.filteredItems[0];
            return t && t.element && e(t.element)
        }, n.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(e, t) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = Object.create(n), o.prototype.constructor = o, t && (o.options = t), o.prototype.namespace = e, i.modes[e] = o, o
        }, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
    }(window, function(e, t) {
        var i = e.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var e = 0; e < this.cols; e++) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var e = this.items[0],
                    i = e && e.element;
                this.columnWidth = i && t(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                r = o / n,
                s = n - o % n,
                a = s && 1 > s ? "round" : "floor";
            r = Math[a](r), this.cols = Math.max(r, 1)
        }, i.prototype.getContainerWidth = function() {
            var e = this._getOption("fitWidth"),
                i = e ? this.element.parentNode : this.element,
                n = t(i);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth % this.columnWidth,
                i = t && 1 > t ? "round" : "ceil",
                n = Math[i](e.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                    x: this.columnWidth * s,
                    y: r
                }, l = r + e.size.outerHeight, u = this.cols + 1 - o.length, c = 0; u > c; c++) this.colYs[s + c] = l;
            return a
        }, i.prototype._getColGroup = function(e) {
            if (2 > e) return this.colYs;
            for (var t = [], i = this.cols + 1 - e, n = 0; i > n; n++) {
                var o = this.colYs.slice(n, n + e);
                t[n] = Math.max.apply(Math, o)
            }
            return t
        }, i.prototype._manageStamp = function(e) {
            var i = t(e),
                n = this._getElementOffset(e),
                o = this._getOption("originLeft"),
                r = o ? n.left : n.right,
                s = r + i.outerWidth,
                a = Math.floor(r / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(s / this.columnWidth);
            l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var u = this._getOption("originTop"), c = (u ? n.top : n.bottom) + i.outerHeight, d = a; l >= d; d++) this.colYs[d] = Math.max(c, this.colYs[d])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
        }, i.prototype._getContainerFitWidth = function() {
            for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
            return (this.cols - e) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var e = this.containerWidth;
            return this.getContainerWidth(), e != this.containerWidth
        }, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
    }(window, function(e, t) {
        "use strict";
        var i = e.create("masonry"),
            n = i.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var r in t.prototype) o[r] || (n[r] = t.prototype[r]);
        var s = n.measureColumns;
        n.measureColumns = function() {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var a = n._getOption;
        return n._getOption = function(e) {
            return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
    }(window, function(e) {
        "use strict";
        var t = e.create("fitRows"),
            i = t.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, n
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
    }(window, function(e) {
        "use strict";
        var t = e.create("vertical", {
                horizontalAlignment: 0
            }),
            i = t.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += e.size.outerHeight, {
                x: t,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, r, s, a) {
            return t(e, i, n, o, r, s, a)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
    }(window, function(e, t, i, n, o, r, s) {
        function a(e, t) {
            return function(i, n) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o],
                        s = i.sortData[r],
                        a = n.sortData[r];
                    if (s > a || a > s) {
                        var l = void 0 !== t[r] ? t[r] : t,
                            u = l ? 1 : -1;
                        return (s > a ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var l = e.jQuery,
            u = String.prototype.trim ? function(e) {
                return e.trim()
            } : function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            c = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        c.Item = r, c.LayoutMode = s;
        var d = c.prototype;
        d._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in s.modes) this._initLayoutMode(e)
        }, d.reloadItems = function() {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, d._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0; i < e.length; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, d._initLayoutMode = function(e) {
            var t = s.modes[e],
                i = this.options[e] || {};
            this.options[e] = t.options ? o.extend(t.options, i) : i, this.modes[e] = new t(this)
        }, d.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, d._layout = function() {
            var e = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
        }, d.arrange = function(e) {
            this.option(e), this._getIsInstant();
            var t = this._filter(this.items);
            this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
        }, d._init = d.arrange, d._hideReveal = function(e) {
            this.reveal(e.needReveal), this.hide(e.needHide)
        }, d._getIsInstant = function() {
            var e = this._getOption("layoutInstant"),
                t = void 0 !== e ? e : !this._isLayoutInited;
            return this._isInstant = t, t
        }, d._bindArrangeComplete = function() {
            function e() {
                t && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var t, i, n, o = this;
            this.once("layoutComplete", function() {
                t = !0, e()
            }), this.once("hideComplete", function() {
                i = !0, e()
            }), this.once("revealComplete", function() {
                n = !0, e()
            })
        }, d._filter = function(e) {
            var t = this.options.filter;
            t = t || "*";
            for (var i = [], n = [], o = [], r = this._getFilterTest(t), s = 0; s < e.length; s++) {
                var a = e[s];
                if (!a.isIgnored) {
                    var l = r(a);
                    l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: o
            }
        }, d._getFilterTest = function(e) {
            return l && this.options.isJQueryFiltering ? function(t) {
                return l(t.element).is(e)
            } : "function" == typeof e ? function(t) {
                return e(t.element)
            } : function(t) {
                return n(t.element, e)
            }
        }, d.updateSortData = function(e) {
            var t;
            e ? (e = o.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
        }, d._getSorters = function() {
            var e = this.options.getSortData;
            for (var t in e) {
                var i = e[t];
                this._sorters[t] = p(i)
            }
        }, d._updateItemsSortData = function(e) {
            for (var t = e && e.length, i = 0; t && t > i; i++) {
                var n = e[i];
                n.updateSortData()
            }
        };
        var p = function() {
            function e(e) {
                if ("string" != typeof e) return e;
                var i = u(e).split(" "),
                    n = i[0],
                    o = n.match(/^\[(.+)\]$/),
                    r = o && o[1],
                    s = t(r, n),
                    a = c.sortDataParsers[i[1]];
                return e = a ? function(e) {
                    return e && a(s(e))
                } : function(e) {
                    return e && s(e)
                }
            }

            function t(e, t) {
                return e ? function(t) {
                    return t.getAttribute(e)
                } : function(e) {
                    var i = e.querySelector(t);
                    return i && i.textContent
                }
            }
            return e
        }();
        c.sortDataParsers = {
            parseInt: function(e) {
                return parseInt(e, 10)
            },
            parseFloat: function(e) {
                return parseFloat(e)
            }
        }, d._sort = function() {
            var e = this.options.sortBy;
            if (e) {
                var t = [].concat.apply(e, this.sortHistory),
                    i = a(t, this.options.sortAscending);
                this.filteredItems.sort(i), e != this.sortHistory[0] && this.sortHistory.unshift(e)
            }
        }, d._mode = function() {
            var e = this.options.layoutMode,
                t = this.modes[e];
            if (!t) throw new Error("No layout mode: " + e);
            return t.options = this.options[e], t
        }, d._resetLayout = function() {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d._getItemLayoutPosition = function(e) {
            return this._mode()._getItemLayoutPosition(e)
        }, d._manageStamp = function(e) {
            this._mode()._manageStamp(e)
        }, d._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.appended = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var i = this._filterRevealAdded(t);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(t);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items)
            }
        }, d._filterRevealAdded = function(e) {
            var t = this._filter(e);
            return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
        }, d.insert = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var i, n, o = t.length;
                for (i = 0; o > i; i++) n = t[i], this.element.appendChild(n.element);
                var r = this._filter(t).matches;
                for (i = 0; o > i; i++) t[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; o > i; i++) delete t[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var f = d.remove;
        return d.remove = function(e) {
            e = o.makeArray(e);
            var t = this.getItems(e);
            f.call(this, e);
            for (var i = t && t.length, n = 0; i && i > n; n++) {
                var r = t[n];
                o.removeFrom(this.filteredItems, r)
            }
        }, d.shuffle = function() {
            for (var e = 0; e < this.items.length; e++) {
                var t = this.items[e];
                t.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d._noTransition = function(e, t) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = e.apply(this, t);
            return this.options.transitionDuration = i, n
        }, d.getFilteredItemElements = function() {
            return this.filteredItems.map(function(e) {
                return e.element
            })
        }, c
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
            return t(e, i, n, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
    }(window, function(e, t, i, n, o) {
        "use strict";

        function r(e, t) {
            var i = n.getQueryElement(e);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e)));
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
            var o = ++d;
            this.element.outlayerGUID = o, p[o] = this, this._create();
            var r = this._getOption("initLayout");
            r && this.layout()
        }

        function s(e) {
            function t() {
                e.apply(this, arguments)
            }
            return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
        }

        function a(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                i = t && t[1],
                n = t && t[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = h[n] || 1;
            return i * o
        }
        var l = e.console,
            u = e.jQuery,
            c = function() {},
            d = 0,
            p = {};
        r.namespace = "outlayer", r.Item = o, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var f = r.prototype;
        n.extend(f, t.prototype), f.option = function(e) {
            n.extend(this.options, e)
        }, f._getOption = function(e) {
            var t = this.constructor.compatOptions[e];
            return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, f._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var e = this._getOption("resize");
            e && this.bindResize()
        }, f.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, f._itemize = function(e) {
            for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], o = 0; o < t.length; o++) {
                var r = t[o],
                    s = new i(r, this);
                n.push(s)
            }
            return n
        }, f._filterFindItemElements = function(e) {
            return n.filterFindElements(e, this.options.itemSelector)
        }, f.getItemElements = function() {
            return this.items.map(function(e) {
                return e.element
            })
        }, f.layout = function() {
            this._resetLayout(), this._manageStamps();
            var e = this._getOption("layoutInstant"),
                t = void 0 !== e ? e : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, f._init = f.layout, f._resetLayout = function() {
            this.getSize()
        }, f.getSize = function() {
            this.size = i(this.element)
        }, f._getMeasurement = function(e, t) {
            var n, o = this.options[e];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[e] = n ? i(n)[t] : o) : this[e] = 0
        }, f.layoutItems = function(e, t) {
            e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
        }, f._getItemsForLayout = function(e) {
            return e.filter(function(e) {
                return !e.isIgnored
            })
        }, f._layoutItems = function(e, t) {
            if (this._emitCompleteOnItems("layout", e), e && e.length) {
                var i = [];
                e.forEach(function(e) {
                    var n = this._getItemLayoutPosition(e);
                    n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, f._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, f._processLayoutQueue = function(e) {
            this.updateStagger(), e.forEach(function(e, t) {
                this._positionItem(e.item, e.x, e.y, e.isInstant, t)
            }, this)
        }, f.updateStagger = function() {
            var e = this.options.stagger;
            return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = a(e), this.stagger)
        }, f._positionItem = function(e, t, i, n, o) {
            n ? e.goTo(t, i) : (e.stagger(o * this.stagger), e.moveTo(t, i))
        }, f._postLayout = function() {
            this.resizeContainer()
        }, f.resizeContainer = function() {
            var e = this._getOption("resizeContainer");
            if (e) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, f._getContainerSize = c, f._setContainerMeasure = function(e, t) {
            if (void 0 !== e) {
                var i = this.size;
                i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
            }
        }, f._emitCompleteOnItems = function(e, t) {
            function i() {
                o.dispatchEvent(e + "Complete", null, [t])
            }

            function n() {
                s++, s == r && i()
            }
            var o = this,
                r = t.length;
            if (!t || !r) return void i();
            var s = 0;
            t.forEach(function(t) {
                t.once(e, n)
            })
        }, f.dispatchEvent = function(e, t, i) {
            var n = t ? [t].concat(i) : i;
            if (this.emitEvent(e, n), u)
                if (this.$element = this.$element || u(this.element), t) {
                    var o = u.Event(t);
                    o.type = e, this.$element.trigger(o, i)
                } else this.$element.trigger(e, i)
        }, f.ignore = function(e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0)
        }, f.unignore = function(e) {
            var t = this.getItem(e);
            t && delete t.isIgnored
        }, f.stamp = function(e) {
            e = this._find(e), e && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
        }, f.unstamp = function(e) {
            e = this._find(e), e && e.forEach(function(e) {
                n.removeFrom(this.stamps, e), this.unignore(e)
            }, this)
        }, f._find = function(e) {
            if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)
        }, f._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, f._getBoundingRect = function() {
            var e = this.element.getBoundingClientRect(),
                t = this.size;
            this._boundingRect = {
                left: e.left + t.paddingLeft + t.borderLeftWidth,
                top: e.top + t.paddingTop + t.borderTopWidth,
                right: e.right - (t.paddingRight + t.borderRightWidth),
                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
            }
        }, f._manageStamp = c, f._getElementOffset = function(e) {
            var t = e.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(e),
                r = {
                    left: t.left - n.left - o.marginLeft,
                    top: t.top - n.top - o.marginTop,
                    right: n.right - t.right - o.marginRight,
                    bottom: n.bottom - t.bottom - o.marginBottom
                };
            return r
        }, f.handleEvent = n.handleEvent, f.bindResize = function() {
            e.addEventListener("resize", this), this.isResizeBound = !0
        }, f.unbindResize = function() {
            e.removeEventListener("resize", this), this.isResizeBound = !1
        }, f.onresize = function() {
            this.resize()
        }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, f.needsResizeLayout = function() {
            var e = i(this.element),
                t = this.size && e;
            return t && e.innerWidth !== this.size.innerWidth
        }, f.addItems = function(e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)), t
        }, f.appended = function(e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, f.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                var i = this.items.slice(0);
                this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
            }
        }, f.reveal = function(e) {
            if (this._emitCompleteOnItems("reveal", e), e && e.length) {
                var t = this.updateStagger();
                e.forEach(function(e, i) {
                    e.stagger(i * t), e.reveal()
                })
            }
        }, f.hide = function(e) {
            if (this._emitCompleteOnItems("hide", e), e && e.length) {
                var t = this.updateStagger();
                e.forEach(function(e, i) {
                    e.stagger(i * t), e.hide()
                })
            }
        }, f.revealItemElements = function(e) {
            var t = this.getItems(e);
            this.reveal(t)
        }, f.hideItemElements = function(e) {
            var t = this.getItems(e);
            this.hide(t)
        }, f.getItem = function(e) {
            for (var t = 0; t < this.items.length; t++) {
                var i = this.items[t];
                if (i.element == e) return i
            }
        }, f.getItems = function(e) {
            e = n.makeArray(e);
            var t = [];
            return e.forEach(function(e) {
                var i = this.getItem(e);
                i && t.push(i)
            }, this), t
        }, f.remove = function(e) {
            var t = this.getItems(e);
            this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
                e.remove(), n.removeFrom(this.items, e)
            }, this)
        }, f.destroy = function() {
            var e = this.element.style;
            e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
                e.destroy()
            }), this.unbindResize();
            var t = this.element.outlayerGUID;
            delete p[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, r.data = function(e) {
            e = n.getQueryElement(e);
            var t = e && e.outlayerGUID;
            return t && p[t]
        }, r.create = function(e, t) {
            var i = s(r);
            return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = e, i.data = r.data, i.Item = s(o), n.htmlInit(i, e), u && u.bridget && u.bridget(e, i), i
        };
        var h = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o, r
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof module && module.exports ? module.exports = t() : (e.Packery = e.Packery || {}, e.Packery.Rect = t())
    }(window, function() {
        "use strict";

        function e(t) {
            for (var i in e.defaults) this[i] = e.defaults[i];
            for (i in t) this[i] = t[i]
        }
        e.defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        var t = e.prototype;
        return t.contains = function(e) {
            var t = e.width || 0,
                i = e.height || 0;
            return this.x <= e.x && this.y <= e.y && this.x + this.width >= e.x + t && this.y + this.height >= e.y + i
        }, t.overlaps = function(e) {
            var t = this.x + this.width,
                i = this.y + this.height,
                n = e.x + e.width,
                o = e.y + e.height;
            return this.x < n && t > e.x && this.y < o && i > e.y
        }, t.getMaximalFreeRects = function(t) {
            if (!this.overlaps(t)) return !1;
            var i, n = [],
                o = this.x + this.width,
                r = this.y + this.height,
                s = t.x + t.width,
                a = t.y + t.height;
            return this.y < t.y && (i = new e({
                x: this.x,
                y: this.y,
                width: this.width,
                height: t.y - this.y
            }), n.push(i)), o > s && (i = new e({
                x: s,
                y: this.y,
                width: o - s,
                height: this.height
            }), n.push(i)), r > a && (i = new e({
                x: this.x,
                y: a,
                width: this.width,
                height: r - a
            }), n.push(i)), this.x < t.x && (i = new e({
                x: this.x,
                y: this.y,
                width: t.x - this.x,
                height: this.height
            }), n.push(i)), n
        }, t.canFit = function(e) {
            return this.width >= e.width && this.height >= e.height
        }, e
    }),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["./rect"], t);
        else if ("object" == typeof module && module.exports) module.exports = t(require("./rect"));
        else {
            var i = e.Packery = e.Packery || {};
            i.Packer = t(i.Rect)
        }
    }(window, function(e) {
        "use strict";

        function t(e, t, i) {
            this.width = e || 0, this.height = t || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
        }
        var i = t.prototype;
        i.reset = function() {
            this.spaces = [];
            var t = new e({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(t), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
        }, i.pack = function(e) {
            for (var t = 0; t < this.spaces.length; t++) {
                var i = this.spaces[t];
                if (i.canFit(e)) {
                    this.placeInSpace(e, i);
                    break
                }
            }
        }, i.columnPack = function(e) {
            for (var t = 0; t < this.spaces.length; t++) {
                var i = this.spaces[t],
                    n = i.x <= e.x && i.x + i.width >= e.x + e.width && i.height >= e.height - .01;
                if (n) {
                    e.y = i.y, this.placed(e);
                    break
                }
            }
        }, i.rowPack = function(e) {
            for (var t = 0; t < this.spaces.length; t++) {
                var i = this.spaces[t],
                    n = i.y <= e.y && i.y + i.height >= e.y + e.height && i.width >= e.width - .01;
                if (n) {
                    e.x = i.x, this.placed(e);
                    break
                }
            }
        }, i.placeInSpace = function(e, t) {
            e.x = t.x, e.y = t.y, this.placed(e)
        }, i.placed = function(e) {
            for (var t = [], i = 0; i < this.spaces.length; i++) {
                var n = this.spaces[i],
                    o = n.getMaximalFreeRects(e);
                o ? t.push.apply(t, o) : t.push(n)
            }
            this.spaces = t, this.mergeSortSpaces()
        }, i.mergeSortSpaces = function() {
            t.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, i.addSpace = function(e) {
            this.spaces.push(e), this.mergeSortSpaces()
        }, t.mergeRects = function(e) {
            var t = 0,
                i = e[t];
            e: for (; i;) {
                for (var n = 0, o = e[t + n]; o;) {
                    if (o == i) n++;
                    else {
                        if (o.contains(i)) {
                            e.splice(t, 1), i = e[t];
                            continue e
                        }
                        i.contains(o) ? e.splice(t + n, 1) : n++
                    }
                    o = e[t + n]
                }
                t++, i = e[t]
            }
            return e
        };
        var n = {
            downwardLeftToRight: function(e, t) {
                return e.y - t.y || e.x - t.x
            },
            rightwardTopToBottom: function(e, t) {
                return e.x - t.x || e.y - t.y
            }
        };
        return t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "./rect"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("./rect")) : e.Packery.Item = t(e.Outlayer, e.Packery.Rect)
    }(window, function(e, t) {
        "use strict";
        var i = document.documentElement.style,
            n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            o = function() {
                e.Item.apply(this, arguments)
            },
            r = o.prototype = Object.create(e.Item.prototype),
            s = r._create;
        r._create = function() {
            s.call(this), this.rect = new t
        };
        var a = r.moveTo;
        return r.moveTo = function(e, t) {
                var i = Math.abs(this.position.x - e),
                    n = Math.abs(this.position.y - t),
                    o = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && i < 1 && n < 1;
                return o ? void this.goTo(e, t) : void a.apply(this, arguments)
            }, r.enablePlacing = function() {
                this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
            }, r.disablePlacing = function() {
                this.isPlacing = !1
            }, r.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
            },
            r.showDropPlaceholder = function() {
                var e = this.dropPlaceholder;
                e || (e = this.dropPlaceholder = document.createElement("div"), e.className = "packery-drop-placeholder", e.style.position = "absolute"), e.style.width = this.size.width + "px", e.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(e)
            }, r.positionDropPlaceholder = function() {
                this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
            }, r.hideDropPlaceholder = function() {
                var e = this.dropPlaceholder.parentNode;
                e && e.removeChild(this.dropPlaceholder)
            }, o
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : e.Packery = t(e.getSize, e.Outlayer, e.Packery.Rect, e.Packery.Packer, e.Packery.Item)
    }(window, function(e, t, i, n, o) {
        "use strict";

        function r(e, t) {
            return e.position.y - t.position.y || e.position.x - t.position.x
        }

        function s(e, t) {
            return e.position.x - t.position.x || e.position.y - t.position.y
        }

        function a(e, t) {
            var i = t.x - e.x,
                n = t.y - e.y;
            return Math.sqrt(i * i + n * n)
        }
        i.prototype.canFit = function(e) {
            return this.width >= e.width - 1 && this.height >= e.height - 1
        };
        var l = t.create("packery");
        l.Item = o;
        var u = l.prototype;
        u._create = function() {
            t.prototype._create.call(this), this.packer = new n, this.shiftPacker = new n, this.isEnabled = !0, this.dragItemCount = 0;
            var e = this;
            this.handleDraggabilly = {
                dragStart: function() {
                    e.itemDragStart(this.element)
                },
                dragMove: function() {
                    e.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function() {
                    e.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function(t, i) {
                    i && e.itemDragStart(t.currentTarget)
                },
                drag: function(t, i) {
                    i && e.itemDragMove(t.currentTarget, i.position.left, i.position.top)
                },
                stop: function(t, i) {
                    i && e.itemDragEnd(t.currentTarget)
                }
            }
        }, u._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var e, t, i;
            this._getOption("horizontal") ? (e = 1 / 0, t = this.size.innerHeight + this.gutter, i = "rightwardTopToBottom") : (e = this.size.innerWidth + this.gutter, t = 1 / 0, i = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = e, this.packer.height = this.shiftPacker.height = t, this.packer.sortDirection = this.shiftPacker.sortDirection = i, this.packer.reset(), this.maxY = 0, this.maxX = 0
        }, u._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, u._getItemLayoutPosition = function(e) {
            if (this._setRectSize(e.element, e.rect), this.isShifting || this.dragItemCount > 0) {
                var t = this._getPackMethod();
                this.packer[t](e.rect)
            } else this.packer.pack(e.rect);
            return this._setMaxXY(e.rect), e.rect
        }, u.shiftLayout = function() {
            this.isShifting = !0, this.layout(), delete this.isShifting
        }, u._getPackMethod = function() {
            return this._getOption("horizontal") ? "rowPack" : "columnPack"
        }, u._setMaxXY = function(e) {
            this.maxX = Math.max(e.x + e.width, this.maxX), this.maxY = Math.max(e.y + e.height, this.maxY)
        }, u._setRectSize = function(t, i) {
            var n = e(t),
                o = n.outerWidth,
                r = n.outerHeight;
            (o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(o, this.packer.width), i.height = Math.min(r, this.packer.height)
        }, u._applyGridGutter = function(e, t) {
            if (!t) return e + this.gutter;
            t += this.gutter;
            var i = e % t,
                n = i && i < 1 ? "round" : "ceil";
            return e = Math[n](e / t) * t
        }, u._getContainerSize = function() {
            return this._getOption("horizontal") ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }, u._manageStamp = function(e) {
            var t, n = this.getItem(e);
            if (n && n.isPlacing) t = n.rect;
            else {
                var o = this._getElementOffset(e);
                t = new i({
                    x: this._getOption("originLeft") ? o.left : o.right,
                    y: this._getOption("originTop") ? o.top : o.bottom
                })
            }
            this._setRectSize(e, t), this.packer.placed(t), this._setMaxXY(t)
        }, u.sortItemsByPosition = function() {
            var e = this._getOption("horizontal") ? s : r;
            this.items.sort(e)
        }, u.fit = function(e, t, i) {
            var n = this.getItem(e);
            n && (this.stamp(n.element), n.enablePlacing(), this.updateShiftTargets(n), t = void 0 === t ? n.rect.x : t, i = void 0 === i ? n.rect.y : i, this.shift(n, t, i), this._bindFitEvents(n), n.moveTo(n.rect.x, n.rect.y), this.shiftLayout(), this.unstamp(n.element), this.sortItemsByPosition(), n.disablePlacing())
        }, u._bindFitEvents = function(e) {
            function t() {
                n++, 2 == n && i.dispatchEvent("fitComplete", null, [e])
            }
            var i = this,
                n = 0;
            e.once("layout", t), this.once("layoutComplete", t)
        }, u.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
        }, u.needsResizeLayout = function() {
            var t = e(this.element),
                i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
            return t[i] != this.size[i]
        }, u.resizeShiftPercentLayout = function() {
            var t = this._getItemsForLayout(this.items),
                i = this._getOption("horizontal"),
                n = i ? "y" : "x",
                o = i ? "height" : "width",
                r = i ? "rowHeight" : "columnWidth",
                s = i ? "innerHeight" : "innerWidth",
                a = this[r];
            if (a = a && a + this.gutter) {
                this._getMeasurements();
                var l = this[r] + this.gutter;
                t.forEach(function(e) {
                    var t = Math.round(e.rect[n] / a);
                    e.rect[n] = t * l
                })
            } else {
                var u = e(this.element)[s] + this.gutter,
                    c = this.packer[o];
                t.forEach(function(e) {
                    e.rect[n] = e.rect[n] / c * u
                })
            }
            this.shiftLayout()
        }, u.itemDragStart = function(e) {
            if (this.isEnabled) {
                this.stamp(e);
                var t = this.getItem(e);
                t && (t.enablePlacing(), t.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(t))
            }
        }, u.updateShiftTargets = function(e) {
            this.shiftPacker.reset(), this._getBoundingRect();
            var t = this._getOption("originLeft"),
                n = this._getOption("originTop");
            this.stamps.forEach(function(e) {
                var o = this.getItem(e);
                if (!o || !o.isPlacing) {
                    var r = this._getElementOffset(e),
                        s = new i({
                            x: t ? r.left : r.right,
                            y: n ? r.top : r.bottom
                        });
                    this._setRectSize(e, s), this.shiftPacker.placed(s)
                }
            }, this);
            var o = this._getOption("horizontal"),
                r = o ? "rowHeight" : "columnWidth",
                s = o ? "height" : "width";
            this.shiftTargetKeys = [], this.shiftTargets = [];
            var a, l = this[r];
            if (l = l && l + this.gutter) {
                var u = Math.ceil(e.rect[s] / l),
                    c = Math.floor((this.shiftPacker[s] + this.gutter) / l);
                a = (c - u) * l;
                for (var d = 0; d < c; d++) {
                    var p = o ? 0 : d * l,
                        f = o ? d * l : 0;
                    this._addShiftTarget(p, f, a)
                }
            } else a = this.shiftPacker[s] + this.gutter - e.rect[s], this._addShiftTarget(0, 0, a);
            var h = this._getItemsForLayout(this.items),
                m = this._getPackMethod();
            h.forEach(function(e) {
                var t = e.rect;
                this._setRectSize(e.element, t), this.shiftPacker[m](t), this._addShiftTarget(t.x, t.y, a);
                var i = o ? t.x + t.width : t.x,
                    n = o ? t.y : t.y + t.height;
                if (this._addShiftTarget(i, n, a), l)
                    for (var r = Math.round(t[s] / l), u = 1; u < r; u++) {
                        var c = o ? i : t.x + l * u,
                            d = o ? t.y + l * u : n;
                        this._addShiftTarget(c, d, a)
                    }
            }, this)
        }, u._addShiftTarget = function(e, t, i) {
            var n = this._getOption("horizontal") ? t : e;
            if (!(0 !== n && n > i)) {
                var o = e + "," + t,
                    r = this.shiftTargetKeys.indexOf(o) != -1;
                r || (this.shiftTargetKeys.push(o), this.shiftTargets.push({
                    x: e,
                    y: t
                }))
            }
        }, u.shift = function(e, t, i) {
            var n, o = 1 / 0,
                r = {
                    x: t,
                    y: i
                };
            this.shiftTargets.forEach(function(e) {
                var t = a(e, r);
                t < o && (n = e, o = t)
            }), e.rect.x = n.x, e.rect.y = n.y
        };
        var c = 120;
        u.itemDragMove = function(e, t, i) {
            function n() {
                r.shift(o, t, i), o.positionDropPlaceholder(), r.layout()
            }
            var o = this.isEnabled && this.getItem(e);
            if (o) {
                t -= this.size.paddingLeft, i -= this.size.paddingTop;
                var r = this,
                    s = new Date;
                this._itemDragTime && s - this._itemDragTime < c ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(n, c)) : (n(), this._itemDragTime = s)
            }
        }, u.itemDragEnd = function(e) {
            function t() {
                n++, 2 == n && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), o.dispatchEvent("dragItemPositioned", null, [i]))
            }
            var i = this.isEnabled && this.getItem(e);
            if (i) {
                clearTimeout(this.dragTimeout), i.element.classList.add("is-positioning-post-drag");
                var n = 0,
                    o = this;
                i.once("layout", t), this.once("layoutComplete", t), i.moveTo(i.rect.x, i.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), i.disablePlacing(), this.unstamp(i.element)
            }
        }, u.bindDraggabillyEvents = function(e) {
            this._bindDraggabillyEvents(e, "on")
        }, u.unbindDraggabillyEvents = function(e) {
            this._bindDraggabillyEvents(e, "off")
        }, u._bindDraggabillyEvents = function(e, t) {
            var i = this.handleDraggabilly;
            e[t]("dragStart", i.dragStart), e[t]("dragMove", i.dragMove), e[t]("dragEnd", i.dragEnd)
        }, u.bindUIDraggableEvents = function(e) {
            this._bindUIDraggableEvents(e, "on")
        }, u.unbindUIDraggableEvents = function(e) {
            this._bindUIDraggableEvents(e, "off")
        }, u._bindUIDraggableEvents = function(e, t) {
            var i = this.handleUIDraggable;
            e[t]("dragstart", i.start)[t]("drag", i.drag)[t]("dragstop", i.stop)
        };
        var d = u.destroy;
        return u.destroy = function() {
            d.apply(this, arguments), this.isEnabled = !1
        }, l.Rect = i, l.Packer = n, l
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("isotope-layout/js/layout-mode"), require("packery")) : t(e.Isotope.LayoutMode, e.Packery)
    }(window, function(e, t) {
        "use strict";
        var i = e.create("packery"),
            n = i.prototype,
            o = {
                _getElementOffset: !0,
                _getMeasurement: !0
            };
        for (var r in t.prototype) o[r] || (n[r] = t.prototype[r]);
        var s = n._resetLayout;
        n._resetLayout = function() {
            this.packer = this.packer || new t.Packer, this.shiftPacker = this.shiftPacker || new t.Packer, s.apply(this, arguments)
        };
        var a = n._getItemLayoutPosition;
        n._getItemLayoutPosition = function(e) {
            return e.rect = e.rect || new t.Rect, a.call(this, e)
        };
        var l = n.needsResizeLayout;
        n.needsResizeLayout = function() {
            return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : l.call(this)
        };
        var u = n._getOption;
        return n._getOption = function(e) {
            return "horizontal" == e ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : u.apply(this.isotope, arguments)
        }, i
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";

        function t(t) {
            return !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
        }

        function i(t) {
            return e.isFunction(t) || e.isPlainObject(t) ? t : {
                top: t,
                left: t
            }
        }
        var n = e.scrollTo = function(t, i, n) {
            return e(window).scrollTo(t, i, n)
        };
        return n.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, e.fn.scrollTo = function(o, r, s) {
            "object" == typeof r && (s = r, r = 0), "function" == typeof s && (s = {
                onAfter: s
            }), "max" === o && (o = 9e9), s = e.extend({}, n.defaults, s), r = r || s.duration;
            var a = s.queue && s.axis.length > 1;
            return a && (r /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function() {
                function l(t) {
                    var i = e.extend({}, s, {
                        queue: !0,
                        duration: r,
                        complete: t && function() {
                            t.call(d, f, s)
                        }
                    });
                    p.animate(h, i)
                }
                if (null !== o) {
                    var u, c = t(this),
                        d = c ? this.contentWindow || window : this,
                        p = e(d),
                        f = o,
                        h = {};
                    switch (typeof f) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                                f = i(f);
                                break
                            }
                            f = c ? e(f) : e(f, d);
                        case "object":
                            if (0 === f.length) return;
                            (f.is || f.style) && (u = (f = e(f)).offset())
                    }
                    var m = e.isFunction(s.offset) && s.offset(d, f) || s.offset;
                    e.each(s.axis.split(""), function(e, t) {
                        var i = "x" === t ? "Left" : "Top",
                            o = i.toLowerCase(),
                            r = "scroll" + i,
                            g = p[r](),
                            y = n.max(d, t);
                        if (u) h[r] = u[o] + (c ? 0 : g - p.offset()[o]), s.margin && (h[r] -= parseInt(f.css("margin" + i), 10) || 0, h[r] -= parseInt(f.css("border" + i + "Width"), 10) || 0), h[r] += m[o] || 0, s.over[o] && (h[r] += f["x" === t ? "width" : "height"]() * s.over[o]);
                        else {
                            var v = f[o];
                            h[r] = v.slice && "%" === v.slice(-1) ? parseFloat(v) / 100 * y : v
                        }
                        s.limit && /^\d+$/.test(h[r]) && (h[r] = h[r] <= 0 ? 0 : Math.min(h[r], y)), !e && s.axis.length > 1 && (g === h[r] ? h = {} : a && (l(s.onAfterFirst), h = {}))
                    }), l(s.onAfter)
                }
            })
        }, n.max = function(i, n) {
            var o = "x" === n ? "Width" : "Height",
                r = "scroll" + o;
            if (!t(i)) return i[r] - e(i)[o.toLowerCase()]();
            var s = "client" + o,
                a = i.ownerDocument || i.document,
                l = a.documentElement,
                u = a.body;
            return Math.max(l[r], u[r]) - Math.min(l[s], u[s])
        }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
            get: function(t) {
                return e(t.elem)[t.prop]()
            },
            set: function(t) {
                var i = this.get(t);
                if (t.options.interrupt && t._last && t._last !== i) return e(t.elem).stop();
                var n = Math.round(t.now);
                i !== n && (e(t.elem)[t.prop](n), t._last = this.get(t))
            }
        }, n
    });
//# sourceMappingURL=theme.min.js.map


function startCounter() {
    jQuery('.num').each(function(index) {
        var size = jQuery(this).text().split(".")[1] ? jQuery(this).text().split(".")[1].length : 0;
        jQuery(this).prop('Counter', 0).animate({
            Counter: jQuery(this).text()
        }, {
            duration: 3500,
            easing: 'swing',
            step: function(now) {
                jQuery(this).text(parseFloat(now).toFixed(size));
            }
        });
    });
}
startCounter();

jQuery(function() {
    thisyear = new Date().getFullYear();
    jQuery('.currentyear').text(thisyear);
});


jQuery(".small-menu li a, #menu-small-navigation-1 li a, .footer-content .list li a").filter(function(){
    return this.href == location.href.replace(/#.*/, "");
}).addClass("menu-active");



