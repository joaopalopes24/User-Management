/**
 *
 * Copyright 2013 LinkedIn Corp. All rights reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
! function(e, t) {
    var i, n, s, a, r, o, l, c, d, u, h = window.Sizzle || null,
        p = e[t],
        f = "undefined",
        m = !1,
        g = typeof window.jQuery !== f,
        v = !1,
        b = window.document;
    try { v = typeof window.sessionStorage !== f } catch (_) {}
    u = { smoothScroll: !0, scrollDuration: 1e3, scrollTopMargin: 200, showCloseButton: !0, showPrevButton: !1, showNextButton: !0, bubbleWidth: 280, bubblePadding: 15, arrowWidth: 20, skipIfNoElement: !0, cookieName: "hopscotch.tour.state" }, p || (Array.isArray || (Array.isArray = function(e) { return "[object Array]" === Object.prototype.toString.call(e) }), d = function() { m && p.startTour() }, o = {
        addClass: function(e, t) {
            var i, n, s, a;
            if (e.className) {
                for (n = t.split(/\s+/), i = " " + e.className + " ", s = 0, a = n.length; a > s; ++s) i.indexOf(" " + n[s] + " ") < 0 && (i += n[s] + " ");
                e.className = i.replace(/^\s+|\s+$/g, "")
            } else e.className = t
        },
        removeClass: function(e, t) {
            var i, n, s, a;
            for (n = t.split(/\s+/), i = " " + e.className + " ", s = 0, a = n.length; a > s; ++s) i = i.replace(" " + n[s] + " ", " ");
            e.className = i.replace(/^\s+|\s+$/g, "")
        },
        getPixelValue: function(e) { var t = typeof e; return "number" === t ? e : "string" === t ? parseInt(e, 10) : 0 },
        valOrDefault: function(e, t) { return typeof e !== f ? e : t },
        invokeCallbackArrayHelper: function(e) { var t; return Array.isArray(e) && (t = c[e[0]], "function" == typeof t) ? t.apply(this, e.slice(1)) : void 0 },
        invokeCallbackArray: function(e) { var t, i; if (Array.isArray(e)) { if ("string" == typeof e[0]) return o.invokeCallbackArrayHelper(e); for (t = 0, i = e.length; i > t; ++t) o.invokeCallback(e[t]) } },
        invokeCallback: function(e) { return "function" == typeof e ? e() : "string" == typeof e && c[e] ? c[e]() : o.invokeCallbackArray(e) },
        invokeEventCallbacks: function(e, t) { var i, n, s = l[e]; if (t) return this.invokeCallback(t); for (i = 0, n = s.length; n > i; ++i) this.invokeCallback(s[i].cb) },
        getScrollTop: function() { var e; return e = typeof window.pageYOffset !== f ? window.pageYOffset : b.documentElement.scrollTop },
        getScrollLeft: function() { var e; return e = typeof window.pageXOffset !== f ? window.pageXOffset : b.documentElement.scrollLeft },
        getWindowHeight: function() { return window.innerHeight || b.documentElement.clientHeight },
        getWindowWidth: function() { return window.innerWidth || b.documentElement.clientWidth },
        addEvtListener: function(e, t, i) { return e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i) },
        removeEvtListener: function(e, t, i) { return e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i) },
        documentIsReady: function() { return "complete" === b.readyState || "interactive" === b.readyState },
        evtPreventDefault: function(e) { e.preventDefault ? e.preventDefault() : event && (event.returnValue = !1) },
        extend: function(e, t) { var i; for (i in t) t.hasOwnProperty(i) && (e[i] = t[i]) },
        getStepTargetHelper: function(e) { var t; return /^[#\.]/.test(e) ? b.querySelector ? b.querySelector(e) : g ? (t = jQuery(e), t.length ? t[0] : null) : h ? (t = new h(e), t.length ? t[0] : null) : /^#[a-zA-Z][\w-_:.]*$/.test(e) ? b.getElementById(e.substring(1)) : null : b.getElementById(e) },
        getStepTarget: function(e) {
            var t;
            if (!e || !e.target) return null;
            if ("string" == typeof e.target) return e.target = o.getStepTargetHelper(e.target), e.target;
            if (Array.isArray(e.target)) {
                var i, n;
                for (i = 0, n = e.target.length; n > i; i++)
                    if ("string" == typeof e.target[i] && (t = o.getStepTargetHelper(e.target[i]))) return e.target = t, t;
                return null
            }
            return e.target
        },
        getI18NString: function(e) { return r[e] || a[e] },
        setState: function(e, t, i) {
            var n, s = "";
            v ? sessionStorage.setItem(e, t) : (i && (n = new Date, n.setTime(n.getTime() + 1e3 * 60 * 60 * 24 * i), s = "; expires=" + n.toGMTString()), b.cookie = e + "=" + t + s + "; path=/")
        },
        getState: function(e) {
            var t, i, n, s = e + "=",
                a = b.cookie.split(";");
            if (v) n = sessionStorage.getItem(e);
            else
                for (t = 0; t < a.length; t++) {
                    for (i = a[t];
                        " " === i.charAt(0);) i = i.substring(1, i.length);
                    if (0 === i.indexOf(s)) { n = i.substring(s.length, i.length); break }
                }
            return n
        },
        clearState: function(e) { v ? sessionStorage.removeItem(e) : this.setState(e, "", -1) }
    }, o.addEvtListener(window, "load", d), l = { next: [], prev: [], start: [], end: [], show: [], error: [], close: [] }, c = {}, a = { stepNums: null, nextBtn: "Next", prevBtn: "Back", doneBtn: "Done", skipBtn: "Skip", closeTooltip: "Close" }, r = {}, n = function(e) { this.init(e) }, n.prototype = {
        isShowing: !1,
        currStep: void 0,
        _createButton: function(e, t) {
            var i = b.createElement("button"),
                n = "hopscotch-nav-button";
            return i.id = e, t && (i.innerHTML = t), n += e.indexOf("prev") >= 0 ? " prev" : " next", o.addClass(i, n), i
        },
        setPosition: function(e) {
            var t, i, n, s, a, r, l, c = 6,
                d = o.getStepTarget(e),
                u = this.element,
                h = this.arrowEl;
            t = o.getPixelValue(e.width) || this.opt.bubbleWidth, n = o.valOrDefault(e.padding, this.opt.bubblePadding), o.removeClass(u, "fade-in-down fade-in-up fade-in-left fade-in-right"), !e.placement && e.orientation && (e.placement = e.orientation), s = d.getBoundingClientRect(), "top" === e.placement ? (i = u.offsetHeight, a = s.top - i - this.opt.arrowWidth, r = s.left) : "bottom" === e.placement ? (a = s.bottom + this.opt.arrowWidth, r = s.left) : "left" === e.placement ? (a = s.top, r = s.left - t - 2 * n - 2 * c - this.opt.arrowWidth) : "right" === e.placement && (a = s.top, r = s.right + this.opt.arrowWidth), l = "center" !== e.arrowOffset ? o.getPixelValue(e.arrowOffset) : e.arrowOffset, l ? "top" === e.placement || "bottom" === e.placement ? (h.style.top = "", h.style.left = "center" === l ? t / 2 + n - h.offsetWidth / 2 + "px" : l + "px") : ("left" === e.placement || "right" === e.placement) && (h.style.left = "", "center" === l ? (i = i || u.offsetHeight, h.style.top = i / 2 + n - h.offsetHeight / 2 + "px") : h.style.top = l + "px") : (h.style.top = "", h.style.left = ""), "center" === e.xOffset ? r = s.left + d.offsetWidth / 2 - t / 2 - n : r += o.getPixelValue(e.xOffset), "center" === e.yOffset ? (i = i || u.offsetHeight, a = s.top + d.offsetHeight / 2 - i / 2 - n) : a += o.getPixelValue(e.yOffset), e.fixedElement || (a += o.getScrollTop(), r += o.getScrollLeft()), u.style.position = e.fixedElement ? "fixed" : "absolute", u.style.top = a + "px", u.style.left = r + "px"
        },
        _initNavButtons: function() { var e = b.createElement("div"); return this.prevBtnEl = this._createButton("hopscotch-prev", o.getI18NString("prevBtn")), this.nextBtnEl = this._createButton("hopscotch-next", o.getI18NString("nextBtn")), this.doneBtnEl = this._createButton("hopscotch-done", o.getI18NString("doneBtn")), this.ctaBtnEl = this._createButton("hopscotch-cta"), o.addClass(this.doneBtnEl, "hide"), e.appendChild(this.prevBtnEl), e.appendChild(this.ctaBtnEl), e.appendChild(this.nextBtnEl), e.appendChild(this.doneBtnEl), o.addEvtListener(this.prevBtnEl, "click", function() { p.prevStep(!0) }), o.addEvtListener(this.nextBtnEl, "click", function() { p.nextStep(!0) }), o.addEvtListener(this.doneBtnEl, "click", function() { p.endTour() }), e.className = "hopscotch-actions", this.buttonsEl = e, this.containerEl.appendChild(e), this },
        _getCloseFn: function() { var e = this; return this.closeFn || (this.closeFn = function(t) { e.opt.onClose && o.invokeCallback(e.opt.onClose), e.opt.id && !e.opt.isTourBubble ? p.getCalloutManager().removeCallout(e.opt.id) : e.destroy(), o.evtPreventDefault(t) }), this.closeFn },
        initCloseButton: function() {
            var e = b.createElement("a");
            return e.className = "hopscotch-bubble-close", e.href = "#", e.title = o.getI18NString("closeTooltip"), e.innerHTML = o.getI18NString("closeTooltip"), this.opt.isTourBubble ? o.addEvtListener(e, "click", function(e) {
                var t = p.getCurrStepNum(),
                    i = p.getCurrTour(),
                    n = t === i.steps.length - 1;
                o.invokeEventCallbacks("close"), p.endTour(!0, n), e.preventDefault ? e.preventDefault() : event && (event.returnValue = !1)
            }) : o.addEvtListener(e, "click", this._getCloseFn()), o.valOrDefault(this.opt.showCloseButton, !0) || o.addClass(e, "hide"), this.closeBtnEl = e, this.containerEl.appendChild(e), this
        },
        _initArrow: function() { var e, t; return this.arrowEl = b.createElement("div"), this.arrowEl.className = "hopscotch-bubble-arrow-container", t = b.createElement("div"), t.className = "hopscotch-bubble-arrow-border", e = b.createElement("div"), e.className = "hopscotch-bubble-arrow", this.arrowEl.appendChild(t), this.arrowEl.appendChild(e), this.element.appendChild(this.arrowEl), this },
        _setupCTAButton: function(e) {
            var t = this;
            this._showButton(this.ctaBtnEl, !!e.showCTAButton), e.showCTAButton && e.ctaLabel && (this.ctaBtnEl.innerHTML = e.ctaLabel, this._ctaFn = function() { t.opt.isTourBubble || p.getCalloutManager().removeCallout(e.id), e.onCTA && "function" == typeof e.onCTA && e.onCTA() }, o.addEvtListener(this.ctaBtnEl, "click", this._ctaFn))
        },
        _removeCTACallback: function() { this.ctaBtnEl && this._ctaFn && (o.removeEvtListener(this.ctaBtnEl, "click", this._ctaFn), this._ctaFn = null) },
        render: function(e, t, i, n) { var s, a, r, l, c = this.element; return e ? this.currStep = e : this.currStep && (e = this.currStep), !e.placement && e.orientation && (e.placement = e.orientation), s = o.valOrDefault(e.showNextButton, this.opt.showNextButton), a = o.valOrDefault(e.showPrevButton, this.opt.showPrevButton), this.setTitle(e.title || ""), this.setContent(e.content || ""), this.opt.isTourBubble && this.setNum(t), this.placement = e.placement, this.showPrevButton(this.prevBtnEl && a && t > 0), this.showNextButton(this.nextBtnEl && s && !i), this.nextBtnEl.innerHTML = e.showSkip ? o.getI18NString("skipBtn") : o.getI18NString("nextBtn"), i ? o.removeClass(this.doneBtnEl, "hide") : o.addClass(this.doneBtnEl, "hide"), this._setupCTAButton(e), this._setArrow(e.placement), r = o.getPixelValue(e.width) || this.opt.bubbleWidth, l = o.valOrDefault(e.padding, this.opt.bubblePadding), this.containerEl.style.width = r + "px", this.containerEl.style.padding = l + "px", c.style.zIndex = e.zindex || "", "top" === e.placement ? (c.style.top = "-9999px", c.style.left = "-9999px", o.removeClass(c, "hide"), this.setPosition(e), o.addClass(c, "hide")) : this.setPosition(e), n && n(!e.fixedElement), this },
        setTitle: function(e) { return e ? (this.titleEl.innerHTML = e, o.removeClass(this.titleEl, "hide")) : o.addClass(this.titleEl, "hide"), this },
        setContent: function(e) { return e ? (this.contentEl.innerHTML = e, o.removeClass(this.contentEl, "hide")) : o.addClass(this.contentEl, "hide"), this },
        setNum: function(e) {
            var t = o.getI18NString("stepNums");
            t && e < t.length ? e = t[e] : e += 1, this.numberEl.innerHTML = e
        },
        _setArrow: function(e) { o.removeClass(this.arrowEl, "down up right left"), "top" === e ? o.addClass(this.arrowEl, "down") : "bottom" === e ? o.addClass(this.arrowEl, "up") : "left" === e ? o.addClass(this.arrowEl, "right") : "right" === e && o.addClass(this.arrowEl, "left") },
        _getArrowDirection: function() { return "top" === this.placement ? "down" : "bottom" === this.placement ? "up" : "left" === this.placement ? "right" : "right" === this.placement ? "left" : void 0 },
        show: function() {
            var e = this,
                t = "fade-in-" + this._getArrowDirection(),
                i = 1e3;
            return o.removeClass(this.element, "hide"), o.addClass(this.element, t), setTimeout(function() { o.removeClass(e.element, "invisible") }, 50), setTimeout(function() { o.removeClass(e.element, t) }, i), this.isShowing = !0, this
        },
        hide: function(e) { var t = this.element; return e = o.valOrDefault(e, !0), t.style.top = "", t.style.left = "", e ? (o.addClass(t, "hide"), o.removeClass(t, "invisible")) : (o.removeClass(t, "hide"), o.addClass(t, "invisible")), o.removeClass(t, "animate fade-in-up fade-in-down fade-in-right fade-in-left"), this.isShowing = !1, this },
        _showButton: function(e, t, i) {
            var n = "hide";
            i && (n = "hide-all"), typeof t === f && (t = !0), t ? o.removeClass(e, n) : o.addClass(e, n)
        },
        showPrevButton: function(e) { this._showButton(this.prevBtnEl, e) },
        showNextButton: function(e) { this._showButton(this.nextBtnEl, e) },
        showCloseButton: function(e) { this._showButton(this.closeBtnEl, e) },
        destroy: function() {
            var e = this.element;
            e && e.parentNode.removeChild(e), this.closeBtnEl && o.removeEvtListener(this.closeBtnEl, "click", this._getCloseFn()), this.ctaBtnEl && this.onCTA && this._removeCTACallback()
        },
        updateButtons: function() { this.showPrevButton(this.opt.showPrevButton), this.showNextButton(this.opt.showNextButton), this.showCloseButton(this.opt.showCloseButton), this.prevBtnEl.innerHTML = o.getI18NString("prevBtn"), this.nextBtnEl.innerHTML = o.getI18NString("nextBtn"), this.doneBtnEl.innerHTML = o.getI18NString("doneBtn") },
        init: function(e) {
            var t, i, n, s = b.createElement("div"),
                a = b.createElement("div"),
                r = b.createElement("div"),
                l = this,
                c = !1;
            this.element = s, this.containerEl = a, this.titleEl = b.createElement("h3"), this.contentEl = b.createElement("div"), o.addClass(this.titleEl, "hopscotch-title"), o.addClass(this.contentEl, "hopscotch-content"), n = { showPrevButton: u.showPrevButton, showNextButton: u.showNextButton, bubbleWidth: u.bubbleWidth, bubblePadding: u.bubblePadding, arrowWidth: u.arrowWidth, showNumber: !0, isTourBubble: !0 }, e = typeof e === f ? {} : e, o.extend(n, e), this.opt = n, s.className = "hopscotch-bubble animated", a.className = "hopscotch-bubble-container", n.isTourBubble || (s.className += " hopscotch-callout"), n.isTourBubble ? (this.numberEl = b.createElement("span"), this.numberEl.className = "hopscotch-bubble-number", a.appendChild(this.numberEl)) : o.addClass(s, "no-number"), r.appendChild(this.titleEl), r.appendChild(this.contentEl), r.className = "hopscotch-bubble-content", a.appendChild(r), s.appendChild(a), this._initNavButtons(), this.initCloseButton(), this._initArrow(), t = function() {!c && l.isShowing && (c = !0, setTimeout(function() { l.setPosition(l.currStep), c = !1 }, 100)) }, o.addEvtListener(window, "resize", t), this.hide(), o.documentIsReady() ? b.body.appendChild(s) : (b.addEventListener ? (i = function() { b.removeEventListener("DOMContentLoaded", i), window.removeEventListener("load", i), b.body.appendChild(s) }, b.addEventListener("DOMContentLoaded", i, !1)) : (i = function() { "complete" === b.readyState && (b.detachEvent("onreadystatechange", i), window.detachEvent("onload", i), b.body.appendChild(s)) }, b.attachEvent("onreadystatechange", i)), o.addEvtListener(window, "load", i))
        }
    }, s = function() {
        var e = {};
        this.createCallout = function(t) { var i; if (!t.id) throw "Must specify a callout id."; if (e[t.id]) throw "Callout by that id already exists. Please choose a unique id."; return t.showNextButton = t.showPrevButton = !1, t.isTourBubble = !1, i = new n(t), e[t.id] = i, t.target && i.render(t, null, null, function() { i.show() }), i }, this.getCallout = function(t) { return e[t] }, this.removeAllCallouts = function() { var t; for (t in e) e.hasOwnProperty(t) && this.removeCallout(t) }, this.removeCallout = function(t) {
            var i = e[t];
            e[t] = null, i && i.destroy()
        }
    }, i = function(e) {
        var t, i, a, d, h, p, v, _, y = this,
            w = function(e) { return t || (t = new n(a)), e && (o.extend(t.opt, { bubblePadding: x("bubblePadding"), bubbleWidth: x("bubbleWidth"), showNextButton: x("showNextButton"), showPrevButton: x("showPrevButton"), showCloseButton: x("showCloseButton"), arrowWidth: x("arrowWidth") }), t.updateButtons()), t },
            x = function(e) { return "undefined" == typeof a ? u[e] : o.valOrDefault(a[e], u[e]) },
            R = function() { var e; return e = 0 > h || h >= d.steps.length ? null : d.steps[h] },
            k = function() { y.nextStep() },
            S = function(e) {
                var t, i, n, s, a, r, l = w(),
                    c = l.element,
                    d = o.getPixelValue(c.style.top),
                    u = d + o.getPixelValue(c.offsetHeight),
                    h = o.getStepTarget(R()),
                    p = h.getBoundingClientRect(),
                    m = p.top + o.getScrollTop(),
                    v = p.bottom + o.getScrollTop(),
                    _ = m > d ? d : m,
                    y = u > v ? u : v,
                    k = o.getScrollTop(),
                    S = k + o.getWindowHeight(),
                    C = _ - x("scrollTopMargin");
                _ >= k && (_ <= k + x("scrollTopMargin") || S >= y) ? e && e() : x("smoothScroll") ? typeof YAHOO !== f && typeof YAHOO.env !== f && typeof YAHOO.env.ua !== f && typeof YAHOO.util !== f && typeof YAHOO.util.Scroll !== f ? (t = YAHOO.env.ua.webkit ? b.body : b.documentElement, n = YAHOO.util.Easing ? YAHOO.util.Easing.easeOut : void 0, i = new YAHOO.util.Scroll(t, { scroll: { to: [0, C] } }, x("scrollDuration") / 1e3, n), i.onComplete.subscribe(e), i.animate()) : g ? jQuery("body, html").animate({ scrollTop: C }, x("scrollDuration"), e) : (0 > C && (C = 0), s = k > _ ? -1 : 1, a = Math.abs(k - C) / (x("scrollDuration") / 10), r = function() {
                    var t = o.getScrollTop(),
                        i = t + s * a;
                    return s > 0 && i >= C || 0 > s && C >= i ? (i = C, e && e(), window.scrollTo(0, i), void 0) : (window.scrollTo(0, i), o.getScrollTop() === t ? (e && e(), void 0) : (setTimeout(r, 10), void 0))
                }, r()) : (window.scrollTo(0, C), e && e())
            },
            C = function(e, t) {
                var i, n, s;
                h + e >= 0 && h + e < d.steps.length ? (h += e, n = R(), s = function() { i = o.getStepTarget(n), i ? t(h) : (o.invokeEventCallbacks("error"), C(e, t)) }, n.delay ? setTimeout(s, n.delay) : s()) : t(-1)
            },
            P = function(e, t) {
                var i, n, s, a, r = w(),
                    l = this;
                if (r.hide()._removeCTACallback(), e = o.valOrDefault(e, !0), i = R(), n = i, s = t > 0 ? n.multipage : h > 0 && d.steps[h - 1].multipage, a = function(i) { var a; return -1 === i ? this.endTour(!0) : (e && (a = t > 0 ? o.invokeEventCallbacks("next", n.onNext) : o.invokeEventCallbacks("prev", n.onPrev)), s ? (o.setState(x("cookieName"), d.id + ":" + h, 1), void 0) : (a = o.valOrDefault(a, !0), a ? this.showStep(i) : this.endTour(!1), void 0)) }, !s && x("skipIfNoElement")) C(t, function(e) { a.call(l, e) });
                else if (h + t >= 0 && h + t < d.steps.length) {
                    if (h += t, i = R(), !o.getStepTarget(i) && !s) return o.invokeEventCallbacks("error"), this.endTour(!0, !1);
                    a.call(this, h)
                }
                return this
            },
            T = function(e) { var t, i, n, s = {}; for (t in e) e.hasOwnProperty(t) && "id" !== t && "steps" !== t && (s[t] = e[t]); return _.call(this, s, !0), i = o.getState(x("cookieName")), i && (n = i.split(":"), p = n[0], v = n[1], v = parseInt(v, 10)), this },
            E = function(e, t) {
                var i, n;
                if (h = e || 0, i = R(), n = o.getStepTarget(i)) return t(h), void 0;
                if (!n) {
                    if (o.invokeEventCallbacks("error"), x("skipIfNoElement")) return C(1, t), void 0;
                    h = -1, t(h)
                }
            },
            A = function(e) {
                var t, i, n = d.steps[e],
                    s = d.steps,
                    a = s.length,
                    r = d.id + ":" + e,
                    l = w(),
                    c = o.getStepTarget(n);
                i = function() { l.show(), o.invokeEventCallbacks("show", n.onShow) }, h = e, l.hide(!1), t = e === a - 1, l.render(n, e, t, function(e) { e ? S(i) : i(), n.nextOnTargetClick && o.addEvtListener(c, "click", k) }), o.setState(x("cookieName"), r, 1)
            },
            D = function(e) { e && this.configure(e) };
        this.getCalloutManager = function() { return typeof i === f && (i = new s), i }, this.startTour = function(e, t) {
            var i, n = this;
            if (d || (d = e, T.call(this, e)), typeof t !== f) {
                if (t >= d.steps.length) throw "Specified step number out of bounds.";
                h = t
            }
            return o.documentIsReady() ? (h || d.id !== p || typeof v === f ? h || (h = 0) : h = v, E(h, function(e) { var t = -1 !== e && o.getStepTarget(d.steps[e]); return t ? (o.invokeEventCallbacks("start"), i = w(), i.hide(!1), n.isActive = !0, o.getStepTarget(R()) ? n.showStep(e) : (o.invokeEventCallbacks("error"), x("skipIfNoElement") && n.nextStep(!1)), void 0) : (n.endTour(!1, !1), void 0) }), this) : (m = !0, this)
        }, this.showStep = function(e) { var t = d.steps[e]; return t.delay ? setTimeout(function() { A(e) }, t.delay) : A(e), this }, this.prevStep = function(e) { return P.call(this, e, -1), this }, this.nextStep = function(e) {
            var t = R(),
                i = o.getStepTarget(t);
            return t.nextOnTargetClick && o.removeEvtListener(i, "click", k), P.call(this, e, 1), this
        }, this.endTour = function(e, t) { var i = w(); return e = o.valOrDefault(e, !0), t = o.valOrDefault(t, !0), h = 0, v = void 0, i.hide(), e && o.clearState(x("cookieName")), this.isActive && (this.isActive = !1, d && t && o.invokeEventCallbacks("end")), this.removeCallbacks(null, !0), this.resetDefaultOptions(), d = null, this }, this.getCurrTour = function() { return d }, this.getCurrTarget = function() { return o.getStepTarget(R()) }, this.getCurrStepNum = function() { return h }, this.listen = function(e, t, i) { return e && l[e].push({ cb: t, fromTour: i }), this }, this.unlisten = function(e, t) { var i, n, s = l[e]; for (i = 0, n = s.length; n > i; ++i) s[i] === t && s.splice(i, 1); return this }, this.removeCallbacks = function(e, t) {
            var i, n, s, a;
            for (a in l)
                if (!e || e === a)
                    if (t)
                        for (i = l[a], n = 0, s = i.length; s > n; ++n) i[n].fromTour && (i.splice(n--, 1), --s);
                    else l[a] = [];
            return this
        }, this.registerHelper = function(e, t) { "string" == typeof e && "function" == typeof t && (c[e] = t) }, this.unregisterHelper = function(e) { c[e] = null }, this.invokeHelper = function(e) {
            var t, i, n = [];
            for (t = 1, i = arguments.length; i > t; ++t) n.push(arguments[t]);
            c[e] && c[e].call(null, n)
        }, this.setCookieName = function(e) { return a.cookieName = e, this }, this.resetDefaultOptions = function() { return a = {}, this }, this.resetDefaultI18N = function() { return r = {}, this }, this.getState = function() { return o.getState(x("cookieName")) }, _ = function(e, t) { var i, n, s, l, c = ["next", "prev", "start", "end", "show", "error", "close"]; for (a || this.resetDefaultOptions(), o.extend(a, e), e && o.extend(r, e.i18n), s = 0, l = c.length; l > s; ++s) n = "on" + c[s].charAt(0).toUpperCase() + c[s].substring(1), e[n] && this.listen(c[s], e[n], t); return i = w(!0), this }, this.configure = function(e) { return _.call(this, e, !1) }, D.call(this, e)
    }, p = new i, e[t] = p)
}(window, "hopscotch"),
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function(e) {
    function t(e) { return o.raw ? e : encodeURIComponent(e) }

    function i(e) { return o.raw ? e : decodeURIComponent(e) }

    function n(e) { return t(o.json ? JSON.stringify(e) : String(e)) }

    function s(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(r, " ")), o.json ? JSON.parse(e) : e } catch (t) {} }

    function a(t, i) { var n = o.raw ? t : s(t); return e.isFunction(i) ? i(n) : n }
    var r = /\+/g,
        o = e.cookie = function(s, r, l) {
            if (void 0 !== r && !e.isFunction(r)) {
                if (l = e.extend({}, o.defaults, l), "number" == typeof l.expires) {
                    var c = l.expires,
                        d = l.expires = new Date;
                    d.setTime(+d + 864e5 * c)
                }
                return document.cookie = [t(s), "=", n(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var u = s ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                var m = h[p].split("="),
                    g = i(m.shift()),
                    v = m.join("=");
                if (s && s === g) { u = a(v, r); break }
                s || void 0 === (v = a(v)) || (u[g] = v)
            }
            return u
        };
    o.defaults = {}, e.removeCookie = function(t, i) { return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, i, { expires: -1 })), !e.cookie(t)) }
}), // jQuery RoyalSlider plugin. Custom build. Copyright 2011-2013 Dmitry Semenov http://dimsemenov.com
function(e) {
    function t(t, i) {
        var n, s = this,
            a = navigator.userAgent.toLowerCase();
        s.uid = e.rsModules.uid++, s.ns = ".rs" + s.uid;
        var r, o = document.createElement("div").style,
            l = ["webkit", "Moz", "ms", "O"],
            c = "",
            d = 0;
        for (n = 0; n < l.length; n++) r = l[n], !c && r + "Transform" in o && (c = r), r = r.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var t = (new Date).getTime(),
                i = Math.max(0, 16 - (t - d)),
                n = window.setTimeout(function() { e(t + i) }, i);
            return d = t + i, n
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) { clearTimeout(e) }), s.isIPAD = a.match(/(ipad)/), s.isIOS = s.isIPAD || a.match(/(iphone|ipod)/), n = function(e) { return e = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [], { browser: e[1] || "", version: e[2] || "0" } }(a), l = {}, n.browser && (l[n.browser] = !0, l.version = n.version), l.chrome && (l.webkit = !0), s._a = l, s.isAndroid = -1 < a.indexOf("android"), s.slider = e(t), s.ev = e(s), s._b = e(document), s.st = e.extend({}, e.fn.royalSlider.defaults, i), s._c = s.st.transitionSpeed, s._d = 0, !s.st.allowCSS3 || l.webkit && !s.st.allowCSS3OnWebkit || (n = c + (c ? "T" : "t"), s._e = n + "ransform" in o && n + "ransition" in o, s._e && (s._f = c + (c ? "P" : "p") + "erspective" in o)), c = c.toLowerCase(), s._g = "-" + c + "-", s._h = "vertical" === s.st.slidesOrientation ? !1 : !0, s._i = s._h ? "left" : "top", s._j = s._h ? "width" : "height", s._k = -1, s._l = "fade" === s.st.transitionType ? !1 : !0, s._l || (s.st.sliderDrag = !1, s._m = 10), s._n = "z-index:0; display:none; opacity:0;", s._o = 0, s._p = 0, s._q = 0, e.each(e.rsModules, function(e, t) { "uid" !== e && t.call(s) }), s.slides = [], s._r = 0, (s.st.slides ? e(s.st.slides) : s.slider.children().detach()).each(function() { s._s(this, !0) }), s.st.randomizeSlides && s.slides.sort(function() { return .5 - Math.random() }), s.numSlides = s.slides.length, s._t(), s.st.startSlideId ? s.st.startSlideId > s.numSlides - 1 && (s.st.startSlideId = s.numSlides - 1) : s.st.startSlideId = 0, s._o = s.staticSlideId = s.currSlideId = s._u = s.st.startSlideId, s.currSlide = s.slides[s.currSlideId], s._v = 0, s.msTouch = !1, s.slider.addClass((s._h ? "rsHor" : "rsVer") + (s._l ? "" : " rsFade")), o = '<div class="rsOverflow"><div class="rsContainer">', s.slidesSpacing = s.st.slidesSpacing, s._w = (s._h ? s.slider.width() : s.slider.height()) + s.st.slidesSpacing, s._x = Boolean(0 < s._y), 1 >= s.numSlides && (s._z = !1), s._a1 = s._z && s._l ? 2 === s.numSlides ? 1 : 2 : 0, s._b1 = 6 > s.numSlides ? s.numSlides : 6, s._c1 = 0, s._d1 = 0, s.slidesJQ = [];
        for (n = 0; n < s.numSlides; n++) s.slidesJQ.push(e('<div style="' + (s._l ? "" : n !== s.currSlideId ? s._n : "z-index:0;") + '" class="rsSlide "></div>'));
        s._e1 = o = e(o + "</div></div>");
        var u = s.ns,
            c = function(e, t, i, n, a) { s._j1 = e + t + u, s._k1 = e + i + u, s._l1 = e + n + u, a && (s._m1 = e + a + u) };
        s.msEnabled = window.navigator.msPointerEnabled, s.msEnabled ? (s.msTouch = Boolean(1 < window.navigator.msMaxTouchPoints), s.hasTouch = !1, s._n1 = .2, c("MSPointer", "Down", "Move", "Up", "Cancel")) : (s.isIOS ? s._j1 = s._k1 = s._l1 = s._m1 = "" : c("mouse", "down", "move", "up", "up"), "ontouchstart" in window || "createTouch" in document ? (s.hasTouch = !0, s._j1 += " touchstart" + u, s._k1 += " touchmove" + u, s._l1 += " touchend" + u, s._m1 += " touchcancel" + u, s._n1 = .5, s.st.sliderTouch && (s._f1 = !0)) : (s.hasTouch = !1, s._n1 = .2)), s.st.sliderDrag && (s._f1 = !0, l.msie || l.opera ? s._g1 = s._h1 = "move" : l.mozilla ? (s._g1 = "-moz-grab", s._h1 = "-moz-grabbing") : l.webkit && -1 != navigator.platform.indexOf("Mac") && (s._g1 = "-webkit-grab", s._h1 = "-webkit-grabbing"), s._i1()), s.slider.html(o), s._o1 = s.st.controlsInside ? s._e1 : s.slider, s._p1 = s._e1.children(".rsContainer"), s.msEnabled && s._p1.css("-ms-touch-action", s._h ? "pan-y" : "pan-x"), s._q1 = e('<div class="rsPreloader"></div>'), o = s._p1.children(".rsSlide"), s._r1 = s.slidesJQ[s.currSlideId], s._s1 = 0, s._e ? (s._t1 = "transition-property", s._u1 = "transition-duration", s._v1 = "transition-timing-function", s._w1 = s._x1 = s._g + "transform", s._f ? (l.webkit && !l.chrome && s.slider.addClass("rsWebkit3d"), /iphone|ipad|ipod/gi.test(navigator.appVersion), s._y1 = "translate3d(", s._z1 = "px, ", s._a2 = "px, 0px)") : (s._y1 = "translate(", s._z1 = "px, ", s._a2 = "px)"), s._l ? s._p1[s._g + s._t1] = s._g + "transform" : (l = {}, l[s._g + s._t1] = "opacity", l[s._g + s._u1] = s.st.transitionSpeed + "ms", l[s._g + s._v1] = s.st.css3easeInOut, o.css(l))) : (s._x1 = "left", s._w1 = "top");
        var h;
        e(window).on("resize" + s.ns, function() { h && clearTimeout(h), h = setTimeout(function() { s.updateSliderSize() }, 50) }), s.ev.trigger("rsAfterPropsSetup"), s.updateSliderSize(), s.st.keyboardNavEnabled && s._b2(), s.st.arrowsNavHideOnTouch && (s.hasTouch || s.msTouch) && (s.st.arrowsNav = !1), s.st.arrowsNav && (l = s._o1, e('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(l), s._c2 = l.children(".rsArrowLeft").click(function(e) { e.preventDefault(), s.prev() }), s._d2 = l.children(".rsArrowRight").click(function(e) { e.preventDefault(), s.next() }), s.st.arrowsNavAutoHide && !s.hasTouch && (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden"), l.one("mousemove.arrowshover", function() { s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden") }), l.hover(function() { s._e2 || (s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden")) }, function() { s._e2 || (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden")) })), s.ev.on("rsOnUpdateNav", function() { s._f2() }), s._f2()), s._f1 ? s._p1.on(s._j1, function(e) { s._g2(e) }) : s.dragSuccess = !1;
        var p = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        s._p1.click(function(t) {
            if (!s.dragSuccess) {
                var i = e(t.target).attr("class");
                if (-1 !== e.inArray(i, p) && s.toggleVideo()) return !1;
                if (s.st.navigateByClick && !s._h2) {
                    if (e(t.target).closest(".rsNoDrag", s._r1).length) return !0;
                    s._i2(t)
                }
                s.ev.trigger("rsSlideClick")
            }
        }).on("click.rs", "a", function() { return s.dragSuccess ? !1 : (s._h2 = !0, setTimeout(function() { s._h2 = !1 }, 3), void 0) }), s.ev.trigger("rsAfterInit")
    }
    e.rsModules || (e.rsModules = { uid: 0 }), t.prototype = {
        constructor: t,
        _i2: function(e) { e = e[this._h ? "pageX" : "pageY"] - this._j2, e >= this._q ? this.next() : 0 > e && this.prev() },
        _t: function() {
            var e;
            e = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && e > 0 && (4 >= this.numSlides ? e = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (e = Math.floor((this.numSlides - 1) / 2))), this._y = e
        },
        _s: function(t, i) {
            function n(e, t) {
                if (t ? o.images.push(e.attr(t)) : o.images.push(e.text()), l) {
                    l = !1, o.caption = "src" === t ? e.attr("alt") : e.contents(), o.image = o.images[0], o.videoURL = e.attr("data-rsVideo");
                    var i = e.attr("data-rsw"),
                        n = e.attr("data-rsh");
                    "undefined" != typeof i && !1 !== i && "undefined" != typeof n && !1 !== n ? (o.iW = parseInt(i, 10), o.iH = parseInt(n, 10)) : r.st.imgWidth && r.st.imgHeight && (o.iW = r.st.imgWidth, o.iH = r.st.imgHeight)
                }
            }
            var s, a, r = this,
                o = {},
                l = !0;
            return t = e(t), r._k2 = t, r.ev.trigger("rsBeforeParseNode", [t, o]), o.stopParsing ? void 0 : (t = r._k2, o.id = r._r, o.contentAdded = !1, r._r++, o.images = [], o.isBig = !1, o.hasCover || (t.hasClass("rsImg") ? (a = t, s = !0) : (a = t.find(".rsImg"), a.length && (s = !0)), s ? (o.bigImage = a.eq(0).attr("data-rsBigImg"), a.each(function() {
                var t = e(this);
                t.is("a") ? n(t, "href") : t.is("img") ? n(t, "src") : n(t)
            })) : t.is("img") && (t.addClass("rsImg rsMainSlideImage"), n(t, "src"))), a = t.find(".rsCaption"), a.length && (o.caption = a.remove()), o.content = t, r.ev.trigger("rsAfterParseNode", [t, o]), i && r.slides.push(o), 0 === o.images.length && (o.isLoaded = !0, o.isRendered = !1, o.isLoading = !1, o.images = null), o)
        },
        _b2: function() {
            var e, t, i = this,
                n = function(e) { 37 === e ? i.prev() : 39 === e && i.next() };
            i._b.on("keydown" + i.ns, function(s) { i._l2 || (t = s.keyCode, 37 !== t && 39 !== t || e || (n(t), e = setInterval(function() { n(t) }, 700))) }).on("keyup" + i.ns, function() { e && (clearInterval(e), e = null) })
        },
        goTo: function(e, t) { e !== this.currSlideId && this._m2(e, this.st.transitionSpeed, !0, !t) },
        destroy: function(t) { this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), e.removeData(this.slider, "royalSlider"), e(window).off("resize" + this.ns), t && this.slider.remove(), this.ev = this.slider = this.slides = null },
        _n2: function(t, i) {
            function n(i, n, r) { i.isAdded ? (s(n, i), a(n, i)) : (r || (r = c.slidesJQ[n]), i.holder ? r = i.holder : (r = c.slidesJQ[n] = e(r), i.holder = r), i.appendOnLoaded = !1, a(n, i, r), s(n, i), c._p2(i, r, t), i.isAdded = !0) }

            function s(e, i) { i.contentAdded || (c.setItemHtml(i, t), t || (i.contentAdded = !0)) }

            function a(e, t, i) { c._l && (i || (i = c.slidesJQ[e]), i.css(c._i, (e + c._d1 + h) * c._w)) }

            function r(e) { if (d) { if (e > u - 1) return r(e - u); if (0 > e) return r(u + e) } return e }
            var o, l, c = this,
                d = c._z,
                u = c.numSlides;
            if (!isNaN(i)) return r(i);
            var h, p, f = c.currSlideId,
                m = t ? Math.abs(c._o2 - c.currSlideId) >= c.numSlides - 1 ? 0 : 1 : c._y,
                g = Math.min(2, m),
                v = !1,
                b = !1;
            for (l = f; f + 1 + g > l; l++)
                if (p = r(l), (o = c.slides[p]) && (!o.isAdded || !o.positionSet)) { v = !0; break }
            for (l = f - 1; l > f - 1 - g; l--)
                if (p = r(l), (o = c.slides[p]) && (!o.isAdded || !o.positionSet)) { b = !0; break }
            if (v)
                for (l = f; f + m + 1 > l; l++) p = r(l), h = Math.floor((c._u - (f - l)) / c.numSlides) * c.numSlides, (o = c.slides[p]) && n(o, p);
            if (b)
                for (l = f - 1; l > f - 1 - m; l--) p = r(l), h = Math.floor((c._u - (f - l)) / u) * u, (o = c.slides[p]) && n(o, p);
            if (!t)
                for (g = r(f - m), f = r(f + m), m = g > f ? 0 : g, l = 0; u > l; l++) g > f && l > g - 1 || !(m > l || l > f) || (o = c.slides[l]) && o.holder && (o.holder.detach(), o.isAdded = !1)
        },
        setItemHtml: function(t, i) {
            var n = this,
                s = function() {
                    if (t.images) {
                        if (!t.isLoading) {
                            var i, s;
                            if (t.content.hasClass("rsImg") ? (i = t.content, s = !0) : i = t.content.find(".rsImg:not(img)"), i && !i.is("img") && i.each(function() {
                                    var i = e(this),
                                        n = '<img class="rsImg" src="' + (i.is("a") ? i.attr("href") : i.text()) + '" />';
                                    s ? t.content = e(n) : i.replaceWith(n)
                                }), i = s ? t.content : t.content.find("img.rsImg"), c(), i.eq(0).addClass("rsMainSlideImage"), t.iW && t.iH && (t.isLoaded || n._q2(t), o()), t.isLoading = !0, t.isBig) e("<img />").on("load.rs error.rs", function() { e(this).off("load.rs error.rs"), a([this], !0) }).attr("src", t.image);
                            else {
                                t.loaded = [], t.numStartedLoad = 0, i = function() { e(this).off("load.rs error.rs"), t.loaded.push(this), t.loaded.length === t.numStartedLoad && a(t.loaded, !1) };
                                for (var r = 0; r < t.images.length; r++) {
                                    var l = e("<img />");
                                    t.numStartedLoad++, l.on("load.rs error.rs", i).attr("src", t.images[r])
                                }
                            }
                        }
                    } else t.isRendered = !0, t.isLoaded = !0, t.isLoading = !1, o(!0)
                },
                a = function(e, i) {
                    if (e.length) {
                        var n = e[0];
                        if (i !== t.isBig)(n = t.holder.children()) && 1 < n.length && d();
                        else if (t.iW && t.iH) r();
                        else if (t.iW = n.width, t.iH = n.height, t.iW && t.iH) r();
                        else {
                            var s = new Image;
                            s.onload = function() { s.width ? (t.iW = s.width, t.iH = s.height, r()) : setTimeout(function() { s.width && (t.iW = s.width, t.iH = s.height), r() }, 1e3) }, s.src = n.src
                        }
                    } else r()
                },
                r = function() { t.isLoaded = !0, t.isLoading = !1, o(), d(), l() },
                o = function() {
                    if (!t.isAppended && n.ev) {
                        var e = n.st.visibleNearby,
                            s = t.id - n._o;
                        i || t.appendOnLoaded || !n.st.fadeinLoadedSlide || 0 !== s && (!(e || n._r2 || n._l2) || -1 !== s && 1 !== s) || (e = { visibility: "visible", opacity: 0 }, e[n._g + "transition"] = "opacity 400ms ease-in-out", t.content.css(e), setTimeout(function() { t.content.css("opacity", 1) }, 16)), t.holder.find(".rsPreloader").length ? t.holder.append(t.content) : t.holder.html(t.content), t.isAppended = !0, t.isLoaded && (n._q2(t), l()), t.sizeReady || (t.sizeReady = !0, setTimeout(function() { n.ev.trigger("rsMaybeSizeReady", t) }, 100))
                    }
                },
                l = function() {!t.loadedTriggered && n.ev && (t.isLoaded = t.loadedTriggered = !0, t.holder.trigger("rsAfterContentSet"), n.ev.trigger("rsAfterContentSet", t)) },
                c = function() { n.st.usePreloader && t.holder.html(n._q1.clone()) },
                d = function(e) { n.st.usePreloader && (e = t.holder.find(".rsPreloader"), e.length && e.remove()) };
            t.isLoaded ? o() : i ? !n._l && t.images && t.iW && t.iH ? s() : (t.holder.isWaiting = !0, c(), t.holder.slideId = -99) : s()
        },
        _p2: function(e) { this._p1.append(e.holder), e.appendOnLoaded = !1 },
        _g2: function(t, i) {
            var n, s = this,
                a = "touchstart" === t.type;
            if (s._s2 = a, s.ev.trigger("rsDragStart"), e(t.target).closest(".rsNoDrag", s._r1).length) return s.dragSuccess = !1, !0;
            if (!i && s._r2 && (s._t2 = !0, s._u2()), s.dragSuccess = !1, s._l2) a && (s._v2 = !0);
            else {
                if (a && (s._v2 = !1), s._w2(), a) {
                    var r = t.originalEvent.touches;
                    if (!(r && 0 < r.length)) return;
                    n = r[0], 1 < r.length && (s._v2 = !0)
                } else t.preventDefault(), n = t, s.msEnabled && (n = n.originalEvent);
                s._l2 = !0, s._b.on(s._k1, function(e) { s._x2(e, i) }).on(s._l1, function(e) { s._y2(e, i) }), s._z2 = "", s._a3 = !1, s._b3 = n.pageX, s._c3 = n.pageY, s._d3 = s._v = (i ? s._e3 : s._h) ? n.pageX : n.pageY, s._f3 = 0, s._g3 = 0, s._h3 = i ? s._i3 : s._p, s._j3 = (new Date).getTime(), a && s._e1.on(s._m1, function(e) { s._y2(e, i) })
            }
        },
        _k3: function(e, t) {
            if (this._l3) {
                var i = this._m3,
                    n = e.pageX - this._b3,
                    s = e.pageY - this._c3,
                    a = this._h3 + n,
                    r = this._h3 + s,
                    o = t ? this._e3 : this._h,
                    a = o ? a : r,
                    r = this._z2;
                this._a3 = !0, this._b3 = e.pageX, this._c3 = e.pageY, "x" === r && 0 !== n ? this._f3 = n > 0 ? 1 : -1 : "y" === r && 0 !== s && (this._g3 = s > 0 ? 1 : -1), r = o ? this._b3 : this._c3, n = o ? n : s, t ? a > this._n3 ? a = this._h3 + n * this._n1 : a < this._o3 && (a = this._h3 + n * this._n1) : this._z || (0 >= this.currSlideId && 0 < r - this._d3 && (a = this._h3 + n * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > r - this._d3 && (a = this._h3 + n * this._n1)), this._h3 = a, 200 < i - this._j3 && (this._j3 = i, this._v = r), t ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(e, t) {
            var i, n = this,
                s = "touchmove" === e.type;
            if (!n._s2 || s) {
                if (s) {
                    if (n._r3) return;
                    var a = e.originalEvent.touches;
                    if (!a) return;
                    if (1 < a.length) return;
                    i = a[0]
                } else i = e, n.msEnabled && (i = i.originalEvent);
                if (n._a3 || (n._e && (t ? n._s3 : n._p1).css(n._g + n._u1, "0s"), function r() { n._l2 && (n._t3 = requestAnimationFrame(r), n._u3 && n._k3(n._u3, t)) }()), n._l3) e.preventDefault(), n._m3 = (new Date).getTime(), n._u3 = i;
                else if (a = t ? n._e3 : n._h, i = Math.abs(i.pageX - n._b3) - Math.abs(i.pageY - n._c3) - (a ? -7 : 7), i > 7) {
                    if (a) e.preventDefault(), n._z2 = "x";
                    else if (s) return n._v3(e), void 0;
                    n._l3 = !0
                } else if (-7 > i) {
                    if (a) { if (s) return n._v3(e), void 0 } else e.preventDefault(), n._z2 = "y";
                    n._l3 = !0
                }
            }
        },
        _v3: function(e) { this._r3 = !0, this._a3 = this._l2 = !1, this._y2(e) },
        _y2: function(t, i) {
            function n(e) { return 100 > e ? 100 : e > 500 ? 500 : e }

            function s(e, t) {
                (c._l || i) && (o = (-c._u - c._d1) * c._w, l = Math.abs(c._p - o), c._c = l / t, e && (c._c += 250), c._c = n(c._c), c._x3(o, !1))
            }
            var a, r, o, l, c = this;
            if (a = -1 < t.type.indexOf("touch"), !c._s2 || a)
                if (c._s2 = !1, c.ev.trigger("rsDragRelease"), c._u3 = null, c._l2 = !1, c._r3 = !1, c._l3 = !1, c._m3 = 0, cancelAnimationFrame(c._t3), c._a3 && (i ? c._q3(c._h3) : c._l && c._p3(c._h3)), c._b.off(c._k1).off(c._l1), a && c._e1.off(c._m1), c._i1(), !c._a3 && !c._v2 && i && c._w3) {
                    var d = e(t.target).closest(".rsNavItem");
                    d.length && c.goTo(d.index())
                } else {
                    if (r = i ? c._e3 : c._h, !c._a3 || "y" === c._z2 && r || "x" === c._z2 && !r) {
                        if (i || !c._t2) return c._t2 = !1, c.dragSuccess = !1, void 0;
                        if (c._t2 = !1, c.st.navigateByClick) return c._i2(c.msEnabled ? t.originalEvent : t), c.dragSuccess = !0, void 0;
                        c.dragSuccess = !0
                    } else c.dragSuccess = !0;
                    c._t2 = !1, c._z2 = "";
                    var u = c.st.minSlideOffset;
                    a = a ? t.originalEvent.changedTouches[0] : c.msEnabled ? t.originalEvent : t;
                    var h = r ? a.pageX : a.pageY,
                        p = c._d3;
                    a = c._v;
                    var f = c.currSlideId,
                        m = c.numSlides,
                        g = r ? c._f3 : c._g3,
                        v = c._z;
                    if (Math.abs(h - p), a = h - a, r = (new Date).getTime() - c._j3, r = Math.abs(a) / r, 0 === g || 1 >= m) s(!0, r);
                    else {
                        if (!v && !i)
                            if (0 >= f) { if (g > 0) return s(!0, r), void 0 } else if (f >= m - 1 && 0 > g) return s(!0, r), void 0;
                        if (i) {
                            if (o = c._i3, o > c._n3) o = c._n3;
                            else if (o < c._o3) o = c._o3;
                            else { if (h = r * r / .006, d = -c._i3, p = c._y3 - c._z3 + c._i3, a > 0 && h > d ? (d += c._z3 / (15 / (.003 * (h / r))), r = r * d / h, h = d) : 0 > a && h > p && (p += c._z3 / (15 / (.003 * (h / r))), r = r * p / h, h = p), d = Math.max(Math.round(r / .003), 50), o += h * (0 > a ? -1 : 1), o > c._n3) return c._a4(o, d, !0, c._n3, 200), void 0; if (o < c._o3) return c._a4(o, d, !0, c._o3, 200), void 0 }
                            c._a4(o, d, !0)
                        } else d = function(e) { var t = Math.floor(e / c._w); return e - t * c._w > u && t++, t }, h > p + u ? 0 > g ? s(!1, r) : (d = d(h - p), c._m2(c.currSlideId - d, n(Math.abs(c._p - (-c._u - c._d1 + d) * c._w) / r), !1, !0, !0)) : p - u > h ? g > 0 ? s(!1, r) : (d = d(p - h), c._m2(c.currSlideId + d, n(Math.abs(c._p - (-c._u - c._d1 - d) * c._w) / r), !1, !0, !0)) : s(!1, r)
                    }
                }
        },
        _p3: function(e) { e = this._p = e, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, e) },
        updateSliderSize: function(e) {
            var t, i;
            if (this.st.autoScaleSlider) {
                var n = this.st.autoScaleSliderWidth,
                    s = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (t = this.slider.width(), t != this.width && (this.slider.css("height", t * (s / n)), t = this.slider.width()), i = this.slider.height()) : (i = this.slider.height(), i != this.height && (this.slider.css("width", i * (n / s)), i = this.slider.height()), t = this.slider.width())
            } else t = this.slider.width(), i = this.slider.height();
            if (e || t != this.width || i != this.height) {
                for (this.width = t, this.height = i, this._b4 = t, this._c4 = i, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({ width: this._b4, height: this._c4 }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, t = 0; t < this.slides.length; t++) e = this.slides[t], e.positionSet = !1, e && e.images && e.isLoaded && (e.isRendered = !1, this._q2(e));
                if (this._e4)
                    for (t = 0; t < this._e4.length; t++) e = this._e4[t], e.holder.css(this._i, (e.id + this._d1) * this._w);
                this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
        },
        appendSlide: function(t, i) {
            var n = this._s(t);
            (isNaN(i) || i > this.numSlides) && (i = this.numSlides), this.slides.splice(i, 0, n), this.slidesJQ.splice(i, 0, e('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>')), i < this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [n, i]), this._f4(i), i === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(e) {
            var t = this.slides[e];
            t && (t.holder && t.holder.remove(), e < this.currSlideId && this.currSlideId--, this.slides.splice(e, 1), this.slidesJQ.splice(e, 1), this.ev.trigger("rsOnRemoveSlide", [e]), this._f4(e), e === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function(e) {
            var t = this;
            for (e = t.numSlides, e = 0 >= t._u ? 0 : Math.floor(t._u / e), t.numSlides = t.slides.length, 0 === t.numSlides ? (t.currSlideId = t._d1 = t._u = 0, t.currSlide = t._g4 = null) : t._u = e * t.numSlides + t.currSlideId, e = 0; e < t.numSlides; e++) t.slides[e].id = e;
            t.currSlide = t.slides[t.currSlideId], t._r1 = t.slidesJQ[t.currSlideId], t.currSlideId >= t.numSlides ? t.goTo(t.numSlides - 1) : 0 > t.currSlideId && t.goTo(0), t._t(), t._l && t._z && t._p1.css(t._g + t._u1, "0ms"), t._h4 && clearTimeout(t._h4), t._h4 = setTimeout(function() { t._l && t._p3((-t._u - t._d1) * t._w), t._n2(), t._l || t._r1.css({ display: "block", opacity: 1 }) }, 14), t.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() { this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor"))) },
        _w2: function() { this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor"))) },
        next: function(e) { this._m2("next", this.st.transitionSpeed, !0, !e) },
        prev: function(e) { this._m2("prev", this.st.transitionSpeed, !0, !e) },
        _m2: function(e, t, i, n, s) {
            var a, r, o, l = this;
            if (l.ev.trigger("rsBeforeMove", [e, n]), o = "next" === e ? l.currSlideId + 1 : "prev" === e ? l.currSlideId - 1 : e = parseInt(e, 10), !l._z) { if (0 > o) return l._i4("left", !n), void 0; if (o >= l.numSlides) return l._i4("right", !n), void 0 }
            l._r2 && (l._u2(!0), i = !1), r = o - l.currSlideId, o = l._o2 = l.currSlideId;
            var c = l.currSlideId + r;
            n = l._u;
            var d;
            l._z ? (c = l._n2(!1, c), n += r) : n = c, l._o = c, l._g4 = l.slidesJQ[l.currSlideId], l._u = n, l.currSlideId = l._o, l.currSlide = l.slides[l.currSlideId], l._r1 = l.slidesJQ[l.currSlideId];
            var c = l.st.slidesDiff,
                u = Boolean(r > 0);
            r = Math.abs(r);
            var h = Math.floor(o / l._y),
                p = Math.floor((o + (u ? c : -c)) / l._y),
                h = (u ? Math.max(h, p) : Math.min(h, p)) * l._y + (u ? l._y - 1 : 0);
            if (h > l.numSlides - 1 ? h = l.numSlides - 1 : 0 > h && (h = 0), o = u ? h - o : o - h, o > l._y && (o = l._y), r > o + c)
                for (l._d1 += (r - (o + c)) * (u ? -1 : 1), t *= 1.4, o = 0; o < l.numSlides; o++) l.slides[o].positionSet = !1;
            l._c = t, l._n2(!0), s || (d = !0), a = (-n - l._d1) * l._w, d ? setTimeout(function() { l._j4 = !1, l._x3(a, e, !1, i), l.ev.trigger("rsOnUpdateNav") }, 0) : (l._x3(a, e, !1, i), l.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() { this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled")))) },
        _x3: function(t, i, n, s, a) {
            function r() {
                var e;
                o && (e = o.data("rsTimeout")) && (o !== l && o.css({ opacity: 0, display: "none", zIndex: 0 }), clearTimeout(e), o.data("rsTimeout", "")), (e = l.data("rsTimeout")) && (clearTimeout(e), l.data("rsTimeout", ""))
            }
            var o, l, c = this,
                d = {};
            isNaN(c._c) && (c._c = 400), c._p = c._h3 = t, c.ev.trigger("rsBeforeAnimStart"), c._e ? c._l ? (c._c = parseInt(c._c, 10), n = c._g + c._v1, d[c._g + c._u1] = c._c + "ms", d[n] = s ? e.rsCSS3Easing[c.st.easeInOut] : e.rsCSS3Easing[c.st.easeOut], c._p1.css(d), s || !c.hasTouch ? setTimeout(function() { c._p3(t) }, 5) : c._p3(t)) : (c._c = c.st.transitionSpeed, o = c._g4, l = c._r1, l.data("rsTimeout") && l.css("opacity", 0), r(), o && o.data("rsTimeout", setTimeout(function() { d[c._g + c._u1] = "0ms", d.zIndex = 0, d.display = "none", o.data("rsTimeout", ""), o.css(d), setTimeout(function() { o.css("opacity", 0) }, 16) }, c._c + 60)), d.display = "block", d.zIndex = c._m, d.opacity = 0, d[c._g + c._u1] = "0ms", d[c._g + c._v1] = e.rsCSS3Easing[c.st.easeInOut], l.css(d), l.data("rsTimeout", setTimeout(function() { l.css(c._g + c._u1, c._c + "ms"), l.data("rsTimeout", setTimeout(function() { l.css("opacity", 1), l.data("rsTimeout", "") }, 20)) }, 20))) : c._l ? (d[c._h ? c._x1 : c._w1] = t + "px", c._p1.animate(d, c._c, s ? c.st.easeInOut : c.st.easeOut)) : (o = c._g4, l = c._r1, l.stop(!0, !0).css({ opacity: 0, display: "block", zIndex: c._m }), c._c = c.st.transitionSpeed, l.animate({ opacity: 1 }, c._c, c.st.easeInOut), r(), o && o.data("rsTimeout", setTimeout(function() { o.stop(!0, !0).css({ opacity: 0, display: "none", zIndex: 0 }) }, c._c + 60))), c._r2 = !0, c.loadingTimeout && clearTimeout(c.loadingTimeout), c.loadingTimeout = a ? setTimeout(function() { c.loadingTimeout = null, a.call() }, c._c + 60) : setTimeout(function() { c.loadingTimeout = null, c._k4(i) }, c._c + 60)
        },
        _u2: function(e) {
            if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)
                if (this._e) {
                    if (!e) {
                        e = this._p;
                        var t = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms"), e !== t && this._p3(t)
                    }
                } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
            else 20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var e = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                t = 0 === e[0].indexOf("matrix3d");
            return parseInt(e[this._h ? t ? 12 : 4 : t ? 13 : 5], 10)
        },
        _m4: function(e, t) { return this._e ? this._y1 + (t ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2 : e },
        _k4: function() { this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange") },
        _i4: function(e, t) {
            var i = this,
                n = (-i._u - i._d1) * i._w;
            if (0 !== i.numSlides && !i._r2)
                if (i.st.loopRewind) i.goTo("left" === e ? i.numSlides - 1 : 0, t);
                else if (i._l) {
                i._c = 200;
                var s = function() { i._r2 = !1 };
                i._x3(n + ("left" === e ? 30 : -30), "", !1, !0, function() { i._r2 = !1, i._x3(n, "", !1, !0, s) })
            }
        },
        _q2: function(e) {
            if (!e.isRendered) {
                var t, i, n = e.content,
                    s = "rsMainSlideImage",
                    a = this.st.imageAlignCenter,
                    r = this.st.imageScaleMode;
                if (e.videoURL && (s = "rsVideoContainer", "fill" !== r ? t = !0 : (i = n, i.hasClass(s) || (i = i.find("." + s)), i.css({ width: "100%", height: "100%" }), s = "rsMainSlideImage")), n.hasClass(s) || (n = n.find("." + s)), n) {
                    var o = e.iW,
                        l = e.iH;
                    if (e.isRendered = !0, "none" !== r || a) {
                        s = "fill" !== r ? this._d4 : 0, i = this._b4 - 2 * s;
                        var c, d, u = this._c4 - 2 * s,
                            h = {};
                        "fit-if-smaller" === r && (o > i || l > u) && (r = "fit"), ("fill" === r || "fit" === r) && (c = i / o, d = u / l, c = "fill" == r ? c > d ? c : d : "fit" == r ? d > c ? c : d : 1, o = Math.ceil(o * c, 10), l = Math.ceil(l * c, 10)), "none" !== r && (h.width = o, h.height = l, t && n.find(".rsImg").css({ width: "100%", height: "100%" })), a && (h.marginLeft = Math.floor((i - o) / 2) + s, h.marginTop = Math.floor((u - l) / 2) + s), n.css(h)
                    }
                }
            }
        }
    }, e.rsProto = t.prototype, e.fn.royalSlider = function(i) { var n = arguments; return this.each(function() { var s = e(this); if ("object" != typeof i && i) { if ((s = s.data("royalSlider")) && s[i]) return s[i].apply(s, Array.prototype.slice.call(n, 1)) } else s.data("royalSlider") || s.data("royalSlider", new t(s, i)) }) }, e.fn.royalSlider.defaults = { slidesSpacing: 8, startSlideId: 0, loop: !1, loopRewind: !1, numImagesToPreload: 4, fadeinLoadedSlide: !0, slidesOrientation: "horizontal", transitionType: "move", transitionSpeed: 600, controlNavigation: "bullets", controlsInside: !0, arrowsNav: !0, arrowsNavAutoHide: !0, navigateByClick: !0, randomizeSlides: !1, sliderDrag: !0, sliderTouch: !0, keyboardNavEnabled: !1, fadeInAfterLoaded: !0, allowCSS3: !0, allowCSS3OnWebkit: !0, addActiveClass: !1, autoHeight: !1, easeOut: "easeOutSine", easeInOut: "easeInOutSine", minSlideOffset: 10, imageScaleMode: "fit-if-smaller", imageAlignCenter: !0, imageScalePadding: 4, usePreloader: !0, autoScaleSlider: !1, autoScaleSliderWidth: 800, autoScaleSliderHeight: 400, autoScaleHeight: !0, arrowsNavHideOnTouch: !1, globalCaption: !1, slidesDiff: 2 }, e.rsCSS3Easing = { easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)" }, e.extend(jQuery.easing, { easeInOutSine: function(e, t, i, n, s) { return -n / 2 * (Math.cos(Math.PI * t / s) - 1) + i }, easeOutSine: function(e, t, i, n, s) { return n * Math.sin(t / s * (Math.PI / 2)) + i }, easeOutCubic: function(e, t, i, n, s) { return n * ((t = t / s - 1) * t * t + 1) + i } })
}(jQuery, window),
function(e) {
    e.extend(e.rsProto, {
        _i5: function() {
            var t = this;
            "bullets" === t.st.controlNavigation && (t.ev.one("rsAfterPropsSetup", function() {
                t._j5 = !0, t.slider.addClass("rsWithBullets");
                for (var i = '<div class="rsNav rsBullets">', n = 0; n < t.numSlides; n++) i += '<div class="rsNavItem rsBullet"><span></span></div>';
                t._k5 = i = e(i + "</div>"), t._l5 = i.appendTo(t.slider).children(), t._k5.on("click.rs", ".rsNavItem", function() { t._m5 || t.goTo(e(this).index()) })
            }), t.ev.on("rsOnAppendSlide", function(e, i, n) { n >= t.numSlides ? t._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : t._l5.eq(n).before('<div class="rsNavItem rsBullet"><span></span></div>'), t._l5 = t._k5.children() }), t.ev.on("rsOnRemoveSlide", function(e, i) {
                var n = t._l5.eq(i);
                n && n.length && (n.remove(), t._l5 = t._k5.children())
            }), t.ev.on("rsOnUpdateNav", function() {
                var e = t.currSlideId;
                t._n5 && t._n5.removeClass("rsNavSelected"), e = t._l5.eq(e), e.addClass("rsNavSelected"), t._n5 = e
            }))
        }
    }), e.rsModules.bullets = e.rsProto._i5
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _w4: function() {
            var e = this;
            if (e.st.autoHeight) {
                var t, i, n, s = function(s) { n = e.slides[e.currSlideId], (t = n.holder) && (i = t.height()) && void 0 !== i && (e._c4 = i, e._e || !s ? e._e1.css("height", i) : e._e1.stop(!0, !0).animate({ height: i }, e.st.transitionSpeed)) };
                e.ev.on("rsMaybeSizeReady.rsAutoHeight", function(e, t) { n === t && s() }), e.ev.on("rsAfterContentSet.rsAutoHeight", function(e, t) { n === t && s() }), e.slider.addClass("rsAutoHeight"), e.ev.one("rsAfterInit", function() { setTimeout(function() { s(!1), setTimeout(function() { e.slider.append('<div style="clear:both; float: none;"></div>'), e._e && e._e1.css(e._g + "transition", "height " + e.st.transitionSpeed + "ms ease-in-out") }, 16) }, 16) }), e.ev.on("rsBeforeAnimStart", function() { s(!0) }), e.ev.on("rsBeforeSizeSet", function() { setTimeout(function() { s(!1) }, 16) })
            }
        }
    }), e.rsModules.autoHeight = e.rsProto._w4
}(jQuery),
function(e) {
    e.rsProto._o4 = function() {
        var e, t = this;
        t.st.addActiveClass && t.ev.on("rsOnUpdateNav", function() { e && clearTimeout(e), e = setTimeout(function() { t._g4 && t._g4.removeClass("rsActiveSlide"), t._r1 && t._r1.addClass("rsActiveSlide"), e = null }, 50) })
    }, e.rsModules.activeClass = e.rsProto._o4
}(jQuery),
function(e) {
    e.rsProto._g7 = function() {
        var t = this;
        t.st.visibleNearby && t.st.visibleNearby.enabled && (t._h7 = { enabled: !0, centerArea: .6, center: !0, breakpoint: 0, breakpointCenterArea: .8, hiddenOverflow: !0, navigateByCenterClick: !1 }, t.st.visibleNearby = e.extend({}, t._h7, t.st.visibleNearby), t.ev.one("rsAfterPropsSetup", function() { t._i7 = t._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), t.st.visibleNearby.hiddenOverflow || t._i7.css("overflow", "visible"), t._o1 = t.st.controlsInside ? t._i7 : t.slider }), t.ev.on("rsAfterSizePropSet", function() {
            var e, i = t.st.visibleNearby;
            e = i.breakpoint && t.width < i.breakpoint ? i.breakpointCenterArea : i.centerArea, t._h ? (t._b4 *= e, t._i7.css({ height: t._c4, width: t._b4 / e }), t._d = t._b4 * (1 - e) / 2 / e) : (t._c4 *= e, t._i7.css({ height: t._c4 / e, width: t._b4 }), t._d = t._c4 * (1 - e) / 2 / e), i.navigateByCenterClick || (t._q = t._h ? t._b4 : t._c4), i.center && t._e1.css("margin-" + (t._h ? "left" : "top"), t._d)
        }))
    }, e.rsModules.visibleNearby = e.rsProto._g7
}(jQuery),
/**
 * jquery.mask.js
 * @version: v1.4.0
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com
 *
 * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function(e) {
    "use strict";
    var t = function(t, i, n) {
        var s, a = this;
        t = e(t), i = "function" == typeof i ? i(t.val(), void 0, t, n) : i, a.init = function() { n = n || {}, a.byPassKeys = [8, 9, 16, 36, 37, 38, 39, 40, 46, 91], a.translation = { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } }, a.translation = e.extend({}, a.translation, n.translation), a = e.extend(!0, {}, a, n), t.each(function() { n.maxlength !== !1 && t.attr("maxlength", i.length), t.attr("autocomplete", "off"), r.destroyEvents(), r.events(), r.val(r.getMasked()) }) };
        var r = {
            getCaret: function() {
                var e, i = 0,
                    n = t.get(0);
                return document.selection && -1 === navigator.appVersion.indexOf("MSIE 10") ? (n.focus(), e = document.selection.createRange(), e.moveStart("character", -n.value.length), i = e.text.length) : (n.selectionStart || "0" === n.selectionStart) && (i = n.selectionStart), i
            },
            setCaret: function(e) {
                var i, n = t.get(0);
                n.setSelectionRange ? (n.focus(), n.setSelectionRange(e, e)) : n.createTextRange && (i = n.createTextRange(), i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select())
            },
            events: function() { t.on("keydown.mask", function() { s = r.val() }), t.on("keyup.mask", r.behaviour), t.on("paste.mask", function() { setTimeout(function() { t.keydown().keyup() }, 100) }) },
            destroyEvents: function() { t.off("keydown.mask").off("keyup.mask").off("paste.mask") },
            val: function(e) { var i = "input" === t.get(0).tagName.toLowerCase(); return arguments.length > 0 ? i ? t.val(e) : t.text(e) : i ? t.val() : t.text() },
            behaviour: function(t) { if (t = t || window.event, -1 === e.inArray(t.keyCode || t.which, a.byPassKeys)) { var i, n = r.getCaret(); return n < r.val().length && (i = !0), r.val(r.getMasked()), i && r.setCaret(n), r.callbacks(t) } },
            getMasked: function() {
                var e, t, s = [],
                    o = r.val(),
                    l = 0,
                    c = i.length,
                    d = 0,
                    u = o.length,
                    h = 1,
                    p = "push",
                    f = -1;
                for (n.reverse ? (p = "unshift", h = -1, e = 0, l = c - 1, d = u - 1, t = function() { return l > -1 && d > -1 }) : (e = c - 1, t = function() { return c > l && u > d }); t();) {
                    var m = i.charAt(l),
                        g = o.charAt(d),
                        v = a.translation[m];
                    v ? (g.match(v.pattern) ? (s[p](g), v.recursive && (-1 === f ? f = l : l === e && (l = f - h), e === f && (l -= h)), l += h) : v.optional && (l += h, d -= h), d += h) : (s[p](m), g === m && (d += h), l += h)
                }
                return s.join("")
            },
            callbacks: function(e) {
                var a = r.val(),
                    o = r.val() !== s;
                o === !0 && "function" == typeof n.onChange && n.onChange(a, e, t, n), o === !0 && "function" == typeof n.onKeyPress && n.onKeyPress(a, e, t, n), "function" == typeof n.onComplete && a.length === i.length && n.onComplete(a, e, t, n)
            }
        };
        a.remove = function() { r.destroyEvents(), r.val(a.getCleanVal()).removeAttr("maxlength") }, a.getCleanVal = function() { for (var e = [], t = r.val(), n = 0, s = i.length; s > n; n++) a.translation[i.charAt(n)] && e.push(t.charAt(n)); return e.join("") }, a.init()
    };
    e.fn.mask = function(i, n) { return this.each(function() { e(this).data("mask", new t(this, i, n)) }) }, e.fn.unmask = function() { return this.each(function() { try { e(this).data("mask").remove() } catch (t) {} }) }, e("input[data-mask]").each(function() {
        var t = e(this),
            i = {};
        "true" === t.attr("data-mask-reverse") && (i.reverse = !0), "false" === t.attr("data-mask-maxlength") && (i.maxlength = !1), t.mask(t.attr("data-mask"), i)
    })
}(window.jQuery || window.Zepto),
/*! jQuery UI - v1.10.3 - 2013-10-08
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.datepicker.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(e, t) {
    function i(t, i) { var s, a, r, o = t.nodeName.toLowerCase(); return "area" === o ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (r = e("img[usemap=#" + a + "]")[0], !!r && n(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && n(t) }

    function n(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() { return "hidden" === e.css(this, "visibility") }).length }
    var s = 0,
        a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, { version: "1.10.3", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({
        focus: function(t) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() { e(t).focus(), n && n.call(t) }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() { var t; return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() { return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0) : this.parents().filter(function() { return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
                    if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++s) }) },
        removeUniqueId: function() { return this.each(function() { a.test(this.id) && e(this).removeAttr("id") }) }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(i) { return !!e.data(i, t) } }) : function(t, i, n) { return !!e.data(t, n[3]) },
        focusable: function(t) { return i(t, !isNaN(e.attr(t, "tabindex"))) },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
        function s(t, i, n, s) { return e.each(a, function() { i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            r = n.toLowerCase(),
            o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
        e.fn["inner" + n] = function(i) { return i === t ? o["inner" + n].call(this) : this.each(function() { e(this).css(r, s(this, i) + "px") }) }, e.fn["outer" + n] = function(t, i) { return "number" != typeof t ? o["outer" + n].call(this, t) : this.each(function() { e(this).css(r, s(this, t, !0, i) + "px") }) }
    }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) { return function(i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({ disableSelection: function() { return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) { e.preventDefault() }) }, enableSelection: function() { return this.unbind(".ui-disableSelection") } }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, n) { var s, a = e.ui[t].prototype; for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]]) },
            call: function(e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        }
    })
}(jQuery),
function(e, t) {
    function i() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.dpDiv = n(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function n(t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.delegate(i, "mouseout", function() { e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", function() { e.datepicker._isDisabledDatepicker(a.inline ? t.parent()[0] : a.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover")) }) }

    function s(t, i) { e.extend(t, i); for (var n in i) null == i[n] && (t[n] = i[n]); return t }
    e.extend(e.ui, { datepicker: { version: "1.10.3" } });
    var a, r = "datepicker";
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(e) { return s(this._defaults, e || {}), this },
        _attachDatepicker: function(t, i) {
            var n, s, a;
            n = t.nodeName.toLowerCase(), s = "div" === n || "span" === n, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), s), a.settings = e.extend({}, i || {}), "input" === n ? this._connectDatepicker(t, a) : s && this._inlineDatepicker(t, a)
        },
        _newInst: function(t, i) { var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? n(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(t, i) {
            var n = e(t);
            i.append = e([]), i.trigger = e([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var n, s, a, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && t.focus(this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: a, alt: s, title: s }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({ src: a, alt: s, title: s }) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() { return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1 }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, n, s, a = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) { for (i = 0, n = 0, s = 0; e.length > s; s++) e[s].length > i && (i = e[s].length, n = s); return n }, a.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var n = e(t);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, n, a, o) { var l, c, d, u, h, p = this._dialogInst; return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, d = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + u, d / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this },
        _destroyDatepicker: function(t) {
            var i, n = e(t),
                s = e.data(t, r);
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var i, n, s = e(t),
                a = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }))
        },
        _disableDatepicker: function(t) {
            var i, n, s = e(t),
                a = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) { try { return e.data(t, r) } catch (i) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(i, n, a) { var r, o, l, c, d = this._getInst(i); return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? e.extend({}, e.datepicker._defaults) : d ? "all" === n ? e.extend({}, d.settings) : this._get(d, n) : null : (r = n || {}, "string" == typeof n && (r = {}, r[n] = a), d && (this._curInst === d && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(d, "min"), c = this._getMinMaxDate(d, "max"), s(d.settings, r), null !== l && r.dateFormat !== t && r.minDate === t && (d.settings.minDate = this._formatDate(d, l)), null !== c && r.dateFormat !== t && r.maxDate === t && (d.settings.maxDate = this._formatDate(d, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), d), this._autoSize(d), this._setDate(d, o), this._updateAlternate(d), this._updateDatepicker(d)), t) },
        _changeDatepicker: function(e, t, i) { this._optionDatepicker(e, t, i) },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) { var i = this._getInst(e); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null },
        _doKeyDown: function(t) {
            var i, n, s, a = e.datepicker._getInst(t.target),
                r = !0,
                o = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), s[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, s[0]), i = e.datepicker._get(a, "onSelect"), i ? (n = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [n, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(i) { var n, s, a = e.datepicker._getInst(i.target); return e.datepicker._get(a, "constrainInput") ? (n = e.datepicker._possibleChars(e.datepicker._get(a, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !n || n.indexOf(s) > -1) : t },
        _doKeyUp: function(t) {
            var i, n = e.datepicker._getInst(t.target);
            if (n.input.val() !== n.lastVal) try { i = e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)), i && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n)) } catch (s) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, n, a, r, o, l, c;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (s(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function() { return r |= "fixed" === e(this).css("position"), !r }), o = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: o.left + "px", top: o.top + "px" }), i.inline || (l = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, a = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, n = this._getNumberOfMonths(t),
                s = n[1],
                r = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() { i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(e) { return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus") },
        _checkOffset: function(t, i, n) {
            var s = t.dpDiv.outerWidth(),
                a = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft()),
                c = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= n && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + a > c && c > a ? Math.abs(a + o) : 0), i
        },
        _findPos: function(t) { for (var i, n = this._getInst(t), s = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"]; return i = e(t).offset(), [i.left, i.top] },
        _hideDatepicker: function(t) { var i, n, s, a, o = this._curInst;!o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), n = this._get(o, "duration"), s = function() { e.datepicker._tidyDialog(o) }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), n, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(e) { e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    n = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== n) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, n) {
            var s = e(t),
                a = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(a, i + ("M" === n ? this._get(a, "showCurrentAtPos") : 0), n), this._updateDatepicker(a))
        },
        _gotoToday: function(t) {
            var i, n = e(t),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(t, i, n) {
            var s = e(t),
                a = this._getInst(s[0]);
            a["selected" + ("M" === n ? "Month" : "Year")] = a["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(s)
        },
        _selectDay: function(t, i, n, s) {
            var a, r = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = e("a", s).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = n, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var n, s = e(t),
                a = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), n = this._get(a, "onSelect"), n ? n.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, n, s, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), s = this.formatDate(i, n, this._getFormatConfig(t)), e(a).each(function() { e(this).val(s) }))
        },
        noWeekends: function(e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] },
        iso8601Week: function(e) { var t, i = new Date(e.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1 },
        parseDate: function(i, n, s) {
            if (null == i || null == n) throw "Invalid arguments";
            if (n = "object" == typeof n ? "" + n : n + "", "" === n) return null;
            var a, r, o, l, c = 0,
                d = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10),
                h = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (s ? s.dayNames : null) || this._defaults.dayNames,
                f = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (s ? s.monthNames : null) || this._defaults.monthNames,
                g = -1,
                v = -1,
                b = -1,
                _ = -1,
                y = !1,
                w = function(e) { var t = i.length > a + 1 && i.charAt(a + 1) === e; return t && a++, t },
                x = function(e) {
                    var t = w(e),
                        i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        s = RegExp("^\\d{1," + i + "}"),
                        a = n.substring(c).match(s);
                    if (!a) throw "Missing number at position " + c;
                    return c += a[0].length, parseInt(a[0], 10)
                },
                R = function(i, s, a) {
                    var r = -1,
                        o = e.map(w(i) ? a : s, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) { return -(e[1].length - t[1].length) });
                    if (e.each(o, function(e, i) { var s = i[1]; return n.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + c
                },
                k = function() {
                    if (n.charAt(c) !== i.charAt(a)) throw "Unexpected literal at position " + c;
                    c++
                };
            for (a = 0; i.length > a; a++)
                if (y) "'" !== i.charAt(a) || w("'") ? k() : y = !1;
                else switch (i.charAt(a)) {
                    case "d":
                        b = x("d");
                        break;
                    case "D":
                        R("D", h, p);
                        break;
                    case "o":
                        _ = x("o");
                        break;
                    case "m":
                        v = x("m");
                        break;
                    case "M":
                        v = R("M", f, m);
                        break;
                    case "y":
                        g = x("y");
                        break;
                    case "@":
                        l = new Date(x("@")), g = l.getFullYear(), v = l.getMonth() + 1, b = l.getDate();
                        break;
                    case "!":
                        l = new Date((x("!") - this._ticksTo1970) / 1e4), g = l.getFullYear(), v = l.getMonth() + 1, b = l.getDate();
                        break;
                    case "'":
                        w("'") ? k() : y = !0;
                        break;
                    default:
                        k()
                }
            if (n.length > c && (o = n.substr(c), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), _ > -1)
                for (v = 1, b = _; r = this._getDaysInMonth(g, v - 1), !(r >= b);) v++, b -= r;
            if (l = this._daylightSavingAdjust(new Date(g, v - 1, b)), l.getFullYear() !== g || l.getMonth() + 1 !== v || l.getDate() !== b) throw "Invalid date";
            return l
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(t) { var i = e.length > n + 1 && e.charAt(n + 1) === t; return i && n++, i },
                c = function(e, t, i) {
                    var n = "" + t;
                    if (l(e))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                d = function(e, t, i, n) { return l(e) ? n[t] : i[t] },
                u = "",
                h = !1;
            if (t)
                for (n = 0; e.length > n; n++)
                    if (h) "'" !== e.charAt(n) || l("'") ? u += e.charAt(n) : h = !1;
                    else switch (e.charAt(n)) {
                        case "d":
                            u += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            u += d("D", t.getDay(), s, a);
                            break;
                        case "o":
                            u += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += d("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            u += l("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            u += t.getTime();
                            break;
                        case "!":
                            u += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : h = !0;
                            break;
                        default:
                            u += e.charAt(n)
                    }
            return u
        },
        _possibleChars: function(e) {
            var t, i = "",
                n = !1,
                s = function(i) { var n = e.length > t + 1 && e.charAt(t + 1) === i; return n && t++, n };
            for (t = 0; e.length > t; t++)
                if (n) "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : n = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, i) { return e.settings[i] !== t ? e.settings[i] : this._defaults[i] },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    n = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    a = s,
                    r = this._getFormatConfig(e);
                try { a = this.parseDate(i, n, r) || s } catch (o) { n = t ? "" : n }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = n ? a.getDate() : 0, e.currentMonth = n ? a.getMonth() : 0, e.currentYear = n ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) },
        _determineDate: function(t, i, n) {
            var s = function(e) { var t = new Date; return t.setDate(t.getDate() + e), t },
                a = function(i) {
                    try { return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t)) } catch (n) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = s.getFullYear(), r = s.getMonth(), o = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(i); c;) {
                        switch (c[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(a, r));
                                break;
                            case "y":
                            case "Y":
                                a += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(a, r))
                        }
                        c = l.exec(i)
                    }
                    return new Date(a, r, o)
                },
                r = null == i || "" === i ? n : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null },
        _setDate: function(e, t, i) {
            var n = !t,
                s = e.selectedMonth,
                a = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
        },
        _getDate: function(e) { var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return t },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                n = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = { prev: function() { e.datepicker._adjustDate(n, -i, "M") }, next: function() { e.datepicker._adjustDate(n, +i, "M") }, hide: function() { e.datepicker._hideDatepicker() }, today: function() { e.datepicker._gotoToday(n) }, selectDay: function() { return e.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return e.datepicker._selectMonthYear(n, this, "M"), !1 }, selectYear: function() { return e.datepicker._selectMonthYear(n, this, "Y"), !1 } };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, n, s, a, r, o, l, c, d, u, h, p, f, m, g, v, b, _, y, w, x, R, k, S, C, P, T, E, A, D, I, N, O, L, M, $, q, z, B = new Date,
                U = this._daylightSavingAdjust(new Date(B.getFullYear(), B.getMonth(), B.getDate())),
                F = this._get(e, "isRTL"),
                H = this._get(e, "showButtonPanel"),
                Y = this._get(e, "hideIfNoPrevNext"),
                W = this._get(e, "navigationAsDateFormat"),
                j = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                K = this._get(e, "stepMonths"),
                G = 1 !== j[0] || 1 !== j[1],
                Z = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(e, "min"),
                X = this._getMinMaxDate(e, "max"),
                J = e.drawMonth - V,
                et = e.drawYear;
            if (0 > J && (J += 12, et--), X)
                for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - j[0] * j[1] + 1, X.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(et, J, 1)) > t;) J--, 0 > J && (J = 11, et--);
            for (e.drawMonth = J, e.drawYear = et, i = this._get(e, "prevText"), i = W ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, J - K, 1)), this._getFormatConfig(e)) : i, n = this._canAdjustMonth(e, -1, et, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = W ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, J + K, 1)), this._getFormatConfig(e)) : s, a = this._canAdjustMonth(e, 1, et, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? Z : U, r = W ? this.formatDate(r, o, this._getFormatConfig(e)) : r, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = H ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (F ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (F ? "" : l) + "</div>" : "", d = parseInt(this._get(e, "firstDay"), 10), d = isNaN(d) ? 0 : d, u = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), b = this._get(e, "selectOtherMonths"), _ = this._getDefaultDate(e), y = "", x = 0; j[0] > x; x++) {
                for (R = "", this.maxRows = 4, k = 0; j[1] > k; k++) {
                    if (S = this._daylightSavingAdjust(new Date(et, J, e.selectedDay)), C = " ui-corner-all", P = "", G) {
                        if (P += "<div class='ui-datepicker-group", j[1] > 1) switch (k) {
                            case 0:
                                P += " ui-datepicker-group-first", C = " ui-corner-" + (F ? "right" : "left");
                                break;
                            case j[1] - 1:
                                P += " ui-datepicker-group-last", C = " ui-corner-" + (F ? "left" : "right");
                                break;
                            default:
                                P += " ui-datepicker-group-middle", C = ""
                        }
                        P += "'>"
                    }
                    for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === x ? F ? a : n : "") + (/all|right/.test(C) && 0 === x ? F ? n : a : "") + this._generateMonthYearHeader(e, J, et, Q, X, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", T = u ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) E = (w + d) % 7, T += "<th" + ((w + d + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[E] + "'>" + p[E] + "</span></th>";
                    for (P += T + "</tr></thead><tbody>", A = this._getDaysInMonth(et, J), et === e.selectedYear && J === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), D = (this._getFirstDayOfMonth(et, J) - d + 7) % 7, I = Math.ceil((D + A) / 7), N = G ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = N, O = this._daylightSavingAdjust(new Date(et, J, 1 - D)), L = 0; N > L; L++) {
                        for (P += "<tr>", M = u ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(O) + "</td>" : "", w = 0; 7 > w; w++) $ = g ? g.apply(e.input ? e.input[0] : null, [O]) : [!0, ""], q = O.getMonth() !== J, z = q && !b || !$[0] || Q && Q > O || X && O > X, M += "<td class='" + ((w + d + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (q ? " ui-datepicker-other-month" : "") + (O.getTime() === S.getTime() && J === e.selectedMonth && e._keyEvent || _.getTime() === O.getTime() && _.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (q && !v ? "" : " " + $[1] + (O.getTime() === Z.getTime() ? " " + this._currentClass : "") + (O.getTime() === U.getTime() ? " ui-datepicker-today" : "")) + "'" + (q && !v || !$[2] ? "" : " title='" + $[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (q && !v ? "&#xa0;" : z ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === U.getTime() ? " ui-state-highlight" : "") + (O.getTime() === Z.getTime() ? " ui-state-active" : "") + (q ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        P += M + "</tr>"
                    }
                    J++, J > 11 && (J = 0, et++), P += "</tbody></table>" + (G ? "</div>" + (j[0] > 0 && k === j[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), R += P
                }
                y += R
            }
            return y += c, e._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(e, t, i, n, s, a, r, o) {
            var l, c, d, u, h, p, f, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                b = this._get(e, "showMonthAfterYear"),
                _ = "<div class='ui-datepicker-title'>",
                y = "";
            if (a || !g) y += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", d = 0; 12 > d; d++)(!l || d >= n.getMonth()) && (!c || s.getMonth() >= d) && (y += "<option value='" + d + "'" + (d === t ? " selected='selected'" : "") + ">" + o[d] + "</option>");
                y += "</select>"
            }
            if (b || (_ += y + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", a || !v) _ += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) { var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? h : t }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", _ += e.yearshtml, e.yearshtml = null
                }
            return _ += this._get(e, "yearSuffix"), b && (_ += (!a && g && v ? "" : "&#xa0;") + y), _ += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var n = e.drawYear + ("Y" === i ? t : 0),
                s = e.drawMonth + ("M" === i ? t : 0),
                a = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, a)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                s = i && i > t ? i : t;
            return n && s > n ? n : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t },
        _getMinMaxDate: function(e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) },
        _getDaysInMonth: function(e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() },
        _getFirstDayOfMonth: function(e, t) { return new Date(e, t, 1).getDay() },
        _canAdjustMonth: function(e, t, i, n) {
            var s = this._getNumberOfMonths(e),
                a = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function(e, t) {
            var i, n, s = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                l = this._get(e, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (o += n)), (!s || t.getTime() >= s.getTime()) && (!a || t.getTime() <= a.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } },
        _formatDate: function(e, t, i, n) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e)) }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t) }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3"
}(jQuery),
/*
Copyright 2012 Igor Vaynberg

Version: 3.4.5 Timestamp: Mon Nov  4 08:22:42 PST 2013

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
function(e) { "undefined" == typeof e.fn.each2 && e.extend(e.fn, { each2: function(t) { for (var i = e([0]), n = -1, s = this.length; ++n < s && (i.context = i[0] = this[n]) && t.call(i[0], n, i) !== !1;); return this } }) }(jQuery),
function(e, t) {
    "use strict";

    function i(e) { var t, i, n, s; if (!e || e.length < 1) return e; for (t = "", i = 0, n = e.length; n > i; i++) s = e.charAt(i), t += z[s] || s; return t }

    function n(e, t) {
        for (var i = 0, n = t.length; n > i; i += 1)
            if (a(e, t[i])) return i;
        return -1
    }

    function s() {
        var t = e(q);
        t.appendTo("body");
        var i = { width: t.width() - t[0].clientWidth, height: t.height() - t[0].clientHeight };
        return t.remove(), i
    }

    function a(e, i) { return e === i ? !0 : e === t || i === t ? !1 : null === e || null === i ? !1 : e.constructor === String ? e + "" == i + "" : i.constructor === String ? i + "" == e + "" : !1 }

    function r(t, i) { var n, s, a; if (null === t || t.length < 1) return []; for (n = t.split(i), s = 0, a = n.length; a > s; s += 1) n[s] = e.trim(n[s]); return n }

    function o(e) { return e.outerWidth(!1) - e.width() }

    function l(i) {
        var n = "keyup-change-value";
        i.on("keydown", function() { e.data(i, n) === t && e.data(i, n, i.val()) }), i.on("keyup", function() {
            var s = e.data(i, n);
            s !== t && i.val() !== s && (e.removeData(i, n), i.trigger("keyup-change"))
        })
    }

    function c(i) {
        i.on("mousemove", function(i) {
            var n = $;
            (n === t || n.x !== i.pageX || n.y !== i.pageY) && e(i.target).trigger("mousemove-filtered", i)
        })
    }

    function d(e, i, n) {
        n = n || t;
        var s;
        return function() {
            var t = arguments;
            window.clearTimeout(s), s = window.setTimeout(function() { i.apply(n, t) }, e)
        }
    }

    function u(e) { var t, i = !1; return function() { return i === !1 && (t = e(), i = !0), t } }

    function h(e, t) {
        var i = d(e, function(e) { t.trigger("scroll-debounced", e) });
        t.on("scroll", function(e) { n(e.target, t.get()) >= 0 && i(e) })
    }

    function p(e) {
        e[0] !== document.activeElement && window.setTimeout(function() {
            var t, i = e[0],
                n = e.val().length;
            e.focus(), e.is(":visible") && i === document.activeElement && (i.setSelectionRange ? i.setSelectionRange(n, n) : i.createTextRange && (t = i.createTextRange(), t.collapse(!1), t.select()))
        }, 0)
    }

    function f(t) {
        t = e(t)[0];
        var i = 0,
            n = 0;
        if ("selectionStart" in t) i = t.selectionStart, n = t.selectionEnd - i;
        else if ("selection" in document) {
            t.focus();
            var s = document.selection.createRange();
            n = document.selection.createRange().text.length, s.moveStart("character", -t.value.length), i = s.text.length - n
        }
        return { offset: i, length: n }
    }

    function m(e) { e.preventDefault(), e.stopPropagation() }

    function g(e) { e.preventDefault(), e.stopImmediatePropagation() }

    function v(t) {
        if (!O) {
            var i = t[0].currentStyle || window.getComputedStyle(t[0], null);
            O = e(document.createElement("div")).css({ position: "absolute", left: "-10000px", top: "-10000px", display: "none", fontSize: i.fontSize, fontFamily: i.fontFamily, fontStyle: i.fontStyle, fontWeight: i.fontWeight, letterSpacing: i.letterSpacing, textTransform: i.textTransform, whiteSpace: "nowrap" }), O.attr("class", "select2-sizer"), e("body").append(O)
        }
        return O.text(t.val()), O.width()
    }

    function b(t, i, n) {
        var s, a, r = [];
        s = t.attr("class"), s && (s = "" + s, e(s.split(" ")).each2(function() { 0 === this.indexOf("select2-") && r.push(this) })), s = i.attr("class"), s && (s = "" + s, e(s.split(" ")).each2(function() { 0 !== this.indexOf("select2-") && (a = n(this), a && r.push(a)) })), t.attr("class", r.join(" "))
    }

    function _(e, t, n, s) {
        var a = i(e.toUpperCase()).indexOf(i(t.toUpperCase())),
            r = t.length;
        return 0 > a ? (n.push(s(e)), void 0) : (n.push(s(e.substring(0, a))), n.push("<span class='select2-match'>"), n.push(s(e.substring(a, a + r))), n.push("</span>"), n.push(s(e.substring(a + r, e.length))), void 0)
    }

    function y(e) { var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return String(e).replace(/[&<>"'\/\\]/g, function(e) { return t[e] }) }

    function w(i) {
        var n, s = null,
            a = i.quietMillis || 100,
            r = i.url,
            o = this;
        return function(l) {
            window.clearTimeout(n), n = window.setTimeout(function() {
                var n = i.data,
                    a = r,
                    c = i.transport || e.fn.select2.ajaxDefaults.transport,
                    d = { type: i.type || "GET", cache: i.cache || !1, jsonpCallback: i.jsonpCallback || t, dataType: i.dataType || "json" },
                    u = e.extend({}, e.fn.select2.ajaxDefaults.params, d);
                n = n ? n.call(o, l.term, l.page, l.context) : null, a = "function" == typeof a ? a.call(o, l.term, l.page, l.context) : a, s && s.abort(), i.params && (e.isFunction(i.params) ? e.extend(u, i.params.call(o)) : e.extend(u, i.params)), e.extend(u, {
                    url: a,
                    dataType: i.dataType,
                    data: n,
                    success: function(e) {
                        var t = i.results(e, l.page);
                        l.callback(t)
                    }
                }), s = c.call(o, u)
            }, a)
        }
    }

    function x(t) {
        var i, n, s = t,
            a = function(e) { return "" + e.text };
        e.isArray(s) && (n = s, s = { results: n }), e.isFunction(s) === !1 && (n = s, s = function() { return n });
        var r = s();
        return r.text && (a = r.text, e.isFunction(a) || (i = r.text, a = function(e) { return e[i] })),
            function(t) {
                var i, n = t.term,
                    r = { results: [] };
                return "" === n ? (t.callback(s()), void 0) : (i = function(s, r) {
                    var o, l;
                    if (s = s[0], s.children) {
                        o = {};
                        for (l in s) s.hasOwnProperty(l) && (o[l] = s[l]);
                        o.children = [], e(s.children).each2(function(e, t) { i(t, o.children) }), (o.children.length || t.matcher(n, a(o), s)) && r.push(o)
                    } else t.matcher(n, a(s), s) && r.push(s)
                }, e(s().results).each2(function(e, t) { i(t, r.results) }), t.callback(r), void 0)
            }
    }

    function R(i) {
        var n = e.isFunction(i);
        return function(s) {
            var a = s.term,
                r = { results: [] };
            e(n ? i() : i).each(function() {
                var e = this.text !== t,
                    i = e ? this.text : this;
                ("" === a || s.matcher(a, i)) && r.results.push(e ? this : { id: this, text: this })
            }), s.callback(r)
        }
    }

    function k(t, i) { if (e.isFunction(t)) return !0; if (!t) return !1; throw new Error(i + " must be a function or a falsy value") }

    function S(t) { return e.isFunction(t) ? t() : t }

    function C(t) { var i = 0; return e.each(t, function(e, t) { t.children ? i += C(t.children) : i++ }), i }

    function P(e, i, n, s) {
        var r, o, l, c, d, u = e,
            h = !1;
        if (!s.createSearchChoice || !s.tokenSeparators || s.tokenSeparators.length < 1) return t;
        for (;;) {
            for (o = -1, l = 0, c = s.tokenSeparators.length; c > l && (d = s.tokenSeparators[l], o = e.indexOf(d), !(o >= 0)); l++);
            if (0 > o) break;
            if (r = e.substring(0, o), e = e.substring(o + d.length), r.length > 0 && (r = s.createSearchChoice.call(this, r, i), r !== t && null !== r && s.id(r) !== t && null !== s.id(r))) {
                for (h = !1, l = 0, c = i.length; c > l; l++)
                    if (a(s.id(r), s.id(i[l]))) { h = !0; break }
                h || n(r)
            }
        }
        return u !== e ? e : void 0
    }

    function T(t, i) { var n = function() {}; return n.prototype = new t, n.prototype.constructor = n, n.prototype.parent = t.prototype, n.prototype = e.extend(n.prototype, i), n }
    if (window.Select2 === t) {
        var E, A, D, I, N, O, L, M, $ = { x: 0, y: 0 },
            E = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(e) {
                    switch (e = e.which ? e.which : e) {
                        case E.LEFT:
                        case E.RIGHT:
                        case E.UP:
                        case E.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function(e) {
                    var t = e.which;
                    switch (t) {
                        case E.SHIFT:
                        case E.CTRL:
                        case E.ALT:
                            return !0
                    }
                    return e.metaKey ? !0 : !1
                },
                isFunctionKey: function(e) { return e = e.which ? e.which : e, e >= 112 && 123 >= e }
            },
            q = "<div class='select2-measure-scrollbar'></div>",
            z = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z" };
        L = e(document), N = function() { var e = 1; return function() { return e++ } }(), L.on("mousemove", function(e) { $.x = e.pageX, $.y = e.pageY }), A = T(Object, {
            bind: function(e) { var t = this; return function() { e.apply(t, arguments) } },
            init: function(i) {
                var n, a, r = ".select2-results";
                this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== t && null !== i.element.data("select2") && i.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + N()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = u(function() { return i.element.closest("body") }), b(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", i.element.attr("style")), this.container.css(S(i.containerCss)), this.container.addClass(S(i.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", m), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), b(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(S(i.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", m), this.results = n = this.container.find(r), this.search = a = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", m), c(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", r, this.bind(this.highlightUnderEvent)), h(80, this.results), this.dropdown.on("scroll-debounced", r, this.bind(this.loadMoreIfNeeded)), e(this.container).on("change", ".select2-input", function(e) { e.stopPropagation() }), e(this.dropdown).on("change", ".select2-input", function(e) { e.stopPropagation() }), e.fn.mousewheel && n.mousewheel(function(e, t, i, s) {
                    var a = n.scrollTop();
                    s > 0 && 0 >= a - s ? (n.scrollTop(0), m(e)) : 0 > s && n.get(0).scrollHeight - n.scrollTop() + s <= n.height() && (n.scrollTop(n.get(0).scrollHeight - n.height()), m(e))
                }), l(a), a.on("keyup-change input paste", this.bind(this.updateResults)), a.on("focus", function() { a.addClass("select2-focused") }), a.on("blur", function() { a.removeClass("select2-focused") }), this.dropdown.on("mouseup", r, this.bind(function(t) { e(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t), this.selectHighlighted(t)) })), this.dropdown.on("click mouseup mousedown", function(e) { e.stopPropagation() }), e.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength);
                var o = i.element.prop("disabled");
                o === t && (o = !1), this.enable(!o);
                var d = i.element.prop("readonly");
                d === t && (d = !1), this.readonly(d), M = M || s(), this.autofocus = i.element.prop("autofocus"), i.element.prop("autofocus", !1), this.autofocus && this.focus(), this.nextSearchTerm = t
            },
            destroy: function() {
                var e = this.opts.element,
                    i = e.data("select2");
                this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), i !== t && (i.container.remove(), i.dropdown.remove(), e.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? e.attr({ tabindex: this.elementTabIndex }) : e.removeAttr("tabindex"), e.show())
            },
            optionToData: function(e) { return e.is("option") ? { id: e.prop("value"), text: e.text(), element: e.get(), css: e.attr("class"), disabled: e.prop("disabled"), locked: a(e.attr("locked"), "locked") || a(e.data("locked"), !0) } : e.is("optgroup") ? { text: e.attr("label"), children: [], element: e.get(), css: e.attr("class") } : void 0 },
            prepareOpts: function(i) {
                var n, s, o, l, c = this;
                if (n = i.element, "select" === n.get(0).tagName.toLowerCase() && (this.select = s = i.element), s && e.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() { if (this in i) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.") }), i = e.extend({}, {
                        populateResults: function(n, s, a) {
                            var r, o = this.opts.id;
                            r = function(n, s, l) { var d, u, h, p, f, m, g, v, b, _; for (n = i.sortResults(n, s, a), d = 0, u = n.length; u > d; d += 1) h = n[d], f = h.disabled === !0, p = !f && o(h) !== t, m = h.children && h.children.length > 0, g = e("<li></li>"), g.addClass("select2-results-dept-" + l), g.addClass("select2-result"), g.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), f && g.addClass("select2-disabled"), m && g.addClass("select2-result-with-children"), g.addClass(c.opts.formatResultCssClass(h)), v = e(document.createElement("div")), v.addClass("select2-result-label"), _ = i.formatResult(h, v, a, c.opts.escapeMarkup), _ !== t && v.html(_), g.append(v), m && (b = e("<ul></ul>"), b.addClass("select2-result-sub"), r(h.children, b, l + 1), g.append(b)), g.data("select2-data", h), s.append(g) }, r(s, n, 0)
                        }
                    }, e.fn.select2.defaults, i), "function" != typeof i.id && (o = i.id, i.id = function(e) { return e[o] }), e.isArray(i.element.data("select2Tags"))) {
                    if ("tags" in i) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
                    i.tags = i.element.data("select2Tags")
                }
                if (s ? (i.query = this.bind(function(e) {
                        var i, s, a, r = { results: [], more: !1 },
                            o = e.term;
                        a = function(t, i) {
                            var n;
                            t.is("option") ? e.matcher(o, t.text(), t) && i.push(c.optionToData(t)) : t.is("optgroup") && (n = c.optionToData(t), t.children().each2(function(e, t) { a(t, n.children) }), n.children.length > 0 && i.push(n))
                        }, i = n.children(), this.getPlaceholder() !== t && i.length > 0 && (s = this.getPlaceholderOption(), s && (i = i.not(s))), i.each2(function(e, t) { a(t, r.results) }), e.callback(r)
                    }), i.id = function(e) { return e.id }, i.formatResultCssClass = function(e) { return e.css }) : "query" in i || ("ajax" in i ? (l = i.element.data("ajax-url"), l && l.length > 0 && (i.ajax.url = l), i.query = w.call(i.element, i.ajax)) : "data" in i ? i.query = x(i.data) : "tags" in i && (i.query = R(i.tags), i.createSearchChoice === t && (i.createSearchChoice = function(t) { return { id: e.trim(t), text: e.trim(t) } }), i.initSelection === t && (i.initSelection = function(t, n) {
                        var s = [];
                        e(r(t.val(), i.separator)).each(function() {
                            var t = { id: this, text: this },
                                n = i.tags;
                            e.isFunction(n) && (n = n()), e(n).each(function() { return a(this.id, t.id) ? (t = this, !1) : void 0 }), s.push(t)
                        }), n(s)
                    }))), "function" != typeof i.query) throw "query function not defined for Select2 " + i.element.attr("id");
                return i
            },
            monitorSource: function() {
                var e, i, n = this.opts.element;
                n.on("change.select2", this.bind(function() { this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection() })), e = this.bind(function() {
                    var e = n.prop("disabled");
                    e === t && (e = !1), this.enable(!e);
                    var i = n.prop("readonly");
                    i === t && (i = !1), this.readonly(i), b(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(S(this.opts.containerCssClass)), b(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(S(this.opts.dropdownCssClass))
                }), n.on("propertychange.select2", e), this.mutationCallback === t && (this.mutationCallback = function(t) { t.forEach(e) }), i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i !== t && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new i(this.mutationCallback), this.propertyObserver.observe(n.get(0), { attributes: !0, subtree: !1 }))
            },
            triggerSelect: function(t) { var i = e.Event("select2-selecting", { val: this.id(t), object: t }); return this.opts.element.trigger(i), !i.isDefaultPrevented() },
            triggerChange: function(t) { t = t || {}, t = e.extend({}, t, { type: "change", val: this.val() }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(t), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur() },
            isInterfaceEnabled: function() { return this.enabledInterface === !0 },
            enableInterface: function() {
                var e = this._enabled && !this._readonly,
                    t = !e;
                return e === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = e, !0)
            },
            enable: function(e) { e === t && (e = !0), this._enabled !== e && (this._enabled = e, this.opts.element.prop("disabled", !e), this.enableInterface()) },
            disable: function() { this.enable(!1) },
            readonly: function(e) { return e === t && (e = !1), this._readonly === e ? !1 : (this._readonly = e, this.opts.element.prop("readonly", e), this.enableInterface(), !0) },
            opened: function() { return this.container.hasClass("select2-dropdown-open") },
            positionDropdown: function() {
                var t, i, n, s, a, r = this.dropdown,
                    o = this.container.offset(),
                    l = this.container.outerHeight(!1),
                    c = this.container.outerWidth(!1),
                    d = r.outerHeight(!1),
                    u = e(window),
                    h = u.width(),
                    p = u.height(),
                    f = u.scrollLeft() + h,
                    m = u.scrollTop() + p,
                    g = o.top + l,
                    v = o.left,
                    b = m >= g + d,
                    _ = o.top - d >= this.body().scrollTop(),
                    y = r.outerWidth(!1),
                    w = f >= v + y,
                    x = r.hasClass("select2-drop-above");
                x ? (i = !0, !_ && b && (n = !0, i = !1)) : (i = !1, !b && _ && (n = !0, i = !0)), n && (r.hide(), o = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), d = r.outerHeight(!1), f = u.scrollLeft() + h, m = u.scrollTop() + p, g = o.top + l, v = o.left, y = r.outerWidth(!1), w = f >= v + y, r.show()), this.opts.dropdownAutoWidth ? (a = e(".select2-results", r)[0], r.addClass("select2-drop-auto-width"), r.css("width", ""), y = r.outerWidth(!1) + (a.scrollHeight === a.clientHeight ? 0 : M.width), y > c ? c = y : y = c, w = f >= v + y) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (t = this.body().offset(), g -= t.top, v -= t.left), w || (v = o.left + c - y), s = { left: v, width: c }, i ? (s.bottom = p - o.top, s.top = "auto", this.container.addClass("select2-drop-above"), r.addClass("select2-drop-above")) : (s.top = g, s.bottom = "auto", this.container.removeClass("select2-drop-above"), r.removeClass("select2-drop-above")), s = e.extend(s, S(this.opts.dropdownCss)), r.css(s)
            },
            shouldOpen: function() { var t; return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (t = e.Event("select2-opening"), this.opts.element.trigger(t), !t.isDefaultPrevented()) },
            clearDropdownAlignmentPreference: function() { this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above") },
            open: function() { return this.shouldOpen() ? (this.opening(), !0) : !1 },
            opening: function() {
                var t, i = this.containerId,
                    n = "scroll." + i,
                    s = "resize." + i,
                    a = "orientationchange." + i;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), t = e("#select2-drop-mask"), 0 == t.length && (t = e(document.createElement("div")), t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), t.hide(), t.appendTo(this.body()), t.on("mousedown touchstart click", function(t) {
                    var i, n = e("#select2-drop");
                    n.length > 0 && (i = n.data("select2"), i.opts.selectOnBlur && i.selectHighlighted({ noFocus: !0 }), i.close({ focus: !0 }), t.preventDefault(), t.stopPropagation())
                })), this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t), e("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), t.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var r = this;
                this.container.parents().add(window).each(function() { e(this).on(s + " " + n + " " + a, function() { r.positionDropdown() }) })
            },
            close: function() {
                if (this.opened()) {
                    var t = this.containerId,
                        i = "scroll." + t,
                        n = "resize." + t,
                        s = "orientationchange." + t;
                    this.container.parents().add(window).each(function() { e(this).off(i).off(n).off(s) }), this.clearDropdownAlignmentPreference(), e("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(e.Event("select2-close"))
                }
            },
            externalSearch: function(e) { this.open(), this.search.val(e), this.updateResults(!1) },
            clearSearch: function() {},
            getMaximumSelectionSize: function() { return S(this.opts.maximumSelectionSize) },
            ensureHighlightVisible: function() {
                var t, i, n, s, a, r, o, l = this.results;
                if (i = this.highlight(), !(0 > i)) {
                    if (0 == i) return l.scrollTop(0), void 0;
                    t = this.findHighlightableChoices().find(".select2-result-label"), n = e(t[i]), s = n.offset().top + n.outerHeight(!0), i === t.length - 1 && (o = l.find("li.select2-more-results"), o.length > 0 && (s = o.offset().top + o.outerHeight(!0))), a = l.offset().top + l.outerHeight(!0), s > a && l.scrollTop(l.scrollTop() + (s - a)), r = n.offset().top - l.offset().top, 0 > r && "none" != n.css("display") && l.scrollTop(l.scrollTop() + r)
                }
            },
            findHighlightableChoices: function() { return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)") },
            moveHighlight: function(t) { for (var i = this.findHighlightableChoices(), n = this.highlight(); n > -1 && n < i.length;) { n += t; var s = e(i[n]); if (s.hasClass("select2-result-selectable") && !s.hasClass("select2-disabled") && !s.hasClass("select2-selected")) { this.highlight(n); break } } },
            highlight: function(t) { var i, s, a = this.findHighlightableChoices(); return 0 === arguments.length ? n(a.filter(".select2-highlighted")[0], a.get()) : (t >= a.length && (t = a.length - 1), 0 > t && (t = 0), this.removeHighlight(), i = e(a[t]), i.addClass("select2-highlighted"), this.ensureHighlightVisible(), s = i.data("select2-data"), s && this.opts.element.trigger({ type: "select2-highlight", val: this.id(s), choice: s }), void 0) },
            removeHighlight: function() { this.results.find(".select2-highlighted").removeClass("select2-highlighted") },
            countSelectableResults: function() { return this.findHighlightableChoices().length },
            highlightUnderEvent: function(t) {
                var i = e(t.target).closest(".select2-result-selectable");
                if (i.length > 0 && !i.is(".select2-highlighted")) {
                    var n = this.findHighlightableChoices();
                    this.highlight(n.index(i))
                } else 0 == i.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var e, t = this.results,
                    i = t.find("li.select2-more-results"),
                    n = this.resultsPage + 1,
                    s = this,
                    a = this.search.val(),
                    r = this.context;
                0 !== i.length && (e = i.offset().top - t.offset().top - t.height(), e <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({ element: this.opts.element, term: a, page: n, context: r, matcher: this.opts.matcher, callback: this.bind(function(e) { s.opened() && (s.opts.populateResults.call(this, t, e.results, { term: a, page: n, context: r }), s.postprocessResults(e, !1, !1), e.more === !0 ? (i.detach().appendTo(t).text(s.opts.formatLoadMore(n + 1)), window.setTimeout(function() { s.loadMoreIfNeeded() }, 10)) : i.remove(), s.positionDropdown(), s.resultsPage = n, s.context = e.context, this.opts.element.trigger({ type: "select2-loaded", items: e })) }) })))
            },
            tokenize: function() {},
            updateResults: function(i) {
                function n() { c.removeClass("select2-active"), h.positionDropdown() }

                function s(e) { d.html(e), n() }
                var r, o, l, c = this.search,
                    d = this.results,
                    u = this.opts,
                    h = this,
                    p = c.val(),
                    f = e.data(this.container, "select2-last-term");
                if ((i === !0 || !f || !a(p, f)) && (e.data(this.container, "select2-last-term", p), i === !0 || this.showSearchInput !== !1 && this.opened())) {
                    l = ++this.queryCount;
                    var m = this.getMaximumSelectionSize();
                    if (m >= 1 && (r = this.data(), e.isArray(r) && r.length >= m && k(u.formatSelectionTooBig, "formatSelectionTooBig"))) return s("<li class='select2-selection-limit'>" + u.formatSelectionTooBig(m) + "</li>"), void 0;
                    if (c.val().length < u.minimumInputLength) return k(u.formatInputTooShort, "formatInputTooShort") ? s("<li class='select2-no-results'>" + u.formatInputTooShort(c.val(), u.minimumInputLength) + "</li>") : s(""), i && this.showSearch && this.showSearch(!0), void 0;
                    if (u.maximumInputLength && c.val().length > u.maximumInputLength) return k(u.formatInputTooLong, "formatInputTooLong") ? s("<li class='select2-no-results'>" + u.formatInputTooLong(c.val(), u.maximumInputLength) + "</li>") : s(""), void 0;
                    u.formatSearching && 0 === this.findHighlightableChoices().length && s("<li class='select2-searching'>" + u.formatSearching() + "</li>"), c.addClass("select2-active"), this.removeHighlight(), o = this.tokenize(), o != t && null != o && c.val(o), this.resultsPage = 1, u.query({
                        element: u.element,
                        term: c.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: u.matcher,
                        callback: this.bind(function(r) {
                            var o;
                            if (l == this.queryCount) {
                                if (!this.opened()) return this.search.removeClass("select2-active"), void 0;
                                if (this.context = r.context === t ? null : r.context, this.opts.createSearchChoice && "" !== c.val() && (o = this.opts.createSearchChoice.call(h, c.val(), r.results), o !== t && null !== o && h.id(o) !== t && null !== h.id(o) && 0 === e(r.results).filter(function() { return a(h.id(this), h.id(o)) }).length && r.results.unshift(o)), 0 === r.results.length && k(u.formatNoMatches, "formatNoMatches")) return s("<li class='select2-no-results'>" + u.formatNoMatches(c.val()) + "</li>"), void 0;
                                d.empty(), h.opts.populateResults.call(this, d, r.results, { term: c.val(), page: this.resultsPage, context: null }), r.more === !0 && k(u.formatLoadMore, "formatLoadMore") && (d.append("<li class='select2-more-results'>" + h.opts.escapeMarkup(u.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function() { h.loadMoreIfNeeded() }, 10)), this.postprocessResults(r, i), n(), this.opts.element.trigger({ type: "select2-loaded", items: r })
                            }
                        })
                    })
                }
            },
            cancel: function() { this.close() },
            blur: function() { this.opts.selectOnBlur && this.selectHighlighted({ noFocus: !0 }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus") },
            focusSearch: function() { p(this.search) },
            selectHighlighted: function(e) {
                var t = this.highlight(),
                    i = this.results.find(".select2-highlighted"),
                    n = i.closest(".select2-result").data("select2-data");
                n ? (this.highlight(t), this.onSelect(n, e)) : e && e.noFocus && this.close()
            },
            getPlaceholder: function() { var e; return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((e = this.getPlaceholderOption()) !== t ? e.text() : t) },
            getPlaceholderOption: function() { if (this.select) { var e = this.select.children("option").first(); if (this.opts.placeholderOption !== t) return "first" === this.opts.placeholderOption && e || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select); if ("" === e.text() && "" === e.val()) return e } },
            initContainerWidth: function() {
                function i() {
                    var i, n, s, a, r, o;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (i = this.opts.element.attr("style"), i !== t)
                            for (n = i.split(";"), a = 0, r = n.length; r > a; a += 1)
                                if (o = n[a].replace(/\s/g, ""), s = o.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== s && s.length >= 1) return s[1];
                        return "resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return e.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var n = i.call(this);
                null !== n && this.container.css("width", n)
            }
        }), D = T(A, {
            createContainer: function() { var t = e(document.createElement("div")).attr({ "class": "select2-container" }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join("")); return t },
            enableInterface: function() { this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled()) },
            opening: function() {
                var i, n, s;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), i = this.search.get(0), i.createTextRange ? (n = i.createTextRange(), n.collapse(!1), n.select()) : i.setSelectionRange && (s = this.search.val().length, i.setSelectionRange(s, s)), "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(e.Event("select2-open"))
            },
            close: function(e) { this.opened() && (this.parent.close.apply(this, arguments), e = e || { focus: !0 }, this.focusser.removeAttr("disabled"), e.focus && this.focusser.focus()) },
            focus: function() { this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus()) },
            isFocused: function() { return this.container.hasClass("select2-container-active") },
            cancel: function() { this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus() },
            destroy: function() { e("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments) },
            initContainer: function() {
                var t, i = this.container,
                    n = this.dropdown;
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = t = i.find(".select2-choice"), this.focusser = i.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + N()), e("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function(e) {
                    if (this.isInterfaceEnabled()) {
                        if (e.which === E.PAGE_UP || e.which === E.PAGE_DOWN) return m(e), void 0;
                        switch (e.which) {
                            case E.UP:
                            case E.DOWN:
                                return this.moveHighlight(e.which === E.UP ? -1 : 1), m(e), void 0;
                            case E.ENTER:
                                return this.selectHighlighted(), m(e), void 0;
                            case E.TAB:
                                return this.selectHighlighted({ noFocus: !0 }), void 0;
                            case E.ESC:
                                return this.cancel(e), m(e), void 0
                        }
                    }
                })), this.search.on("blur", this.bind(function() { document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() { this.search.focus() }), 0) })), this.focusser.on("keydown", this.bind(function(e) { if (this.isInterfaceEnabled() && e.which !== E.TAB && !E.isControl(e) && !E.isFunctionKey(e) && e.which !== E.ESC) { if (this.opts.openOnEnter === !1 && e.which === E.ENTER) return m(e), void 0; if (e.which == E.DOWN || e.which == E.UP || e.which == E.ENTER && this.opts.openOnEnter) { if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return; return this.open(), m(e), void 0 } return e.which == E.DELETE || e.which == E.BACKSPACE ? (this.opts.allowClear && this.clear(), m(e), void 0) : void 0 } })), l(this.focusser), this.focusser.on("keyup-change input", this.bind(function(e) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (e.stopPropagation(), this.opened()) return;
                        this.open()
                    }
                })), t.on("mousedown", "abbr", this.bind(function(e) { this.isInterfaceEnabled() && (this.clear(), g(e), this.close(), this.selection.focus()) })), t.on("mousedown", this.bind(function(t) { this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), m(t) })), n.on("mousedown", this.bind(function() { this.search.focus() })), t.on("focus", this.bind(function(e) { m(e) })), this.focusser.on("focus", this.bind(function() { this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active") })).on("blur", this.bind(function() { this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(e.Event("select2-blur"))) })), this.search.on("focus", this.bind(function() { this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active") })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
            },
            clear: function(t) {
                var i = this.selection.data("select2-data");
                if (i) {
                    var n = e.Event("select2-clearing");
                    if (this.opts.element.trigger(n), n.isDefaultPrevented()) return;
                    var s = this.getPlaceholderOption();
                    this.opts.element.val(s ? s.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), t !== !1 && (this.opts.element.trigger({ type: "select2-removed", val: this.id(i), choice: i }), this.triggerChange({ removed: i }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var e = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) { i !== t && null !== i && (e.updateSelection(i), e.close(), e.setPlaceholder()) })
                }
            },
            isPlaceholderOptionSelected: function() { var e; return this.getPlaceholder() ? (e = this.getPlaceholderOption()) !== t && e.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === t || null === this.opts.element.val() : !1 },
            prepareOpts: function() {
                var t = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function(e, t) {
                    var n = e.find("option").filter(function() { return this.selected });
                    t(i.optionToData(n))
                } : "data" in t && (t.initSelection = t.initSelection || function(i, n) {
                    var s = i.val(),
                        r = null;
                    t.query({ matcher: function(e, i, n) { var o = a(s, t.id(n)); return o && (r = n), o }, callback: e.isFunction(n) ? function() { n(r) } : e.noop })
                }), t
            },
            getPlaceholder: function() { return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments) },
            setPlaceholder: function() {
                var e = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && e !== t) {
                    if (this.select && this.getPlaceholderOption() === t) return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(e, t, i) {
                var n = 0,
                    s = this;
                if (this.findHighlightableChoices().each2(function(e, t) { return a(s.id(t.data("select2-data")), s.opts.element.val()) ? (n = e, !1) : void 0 }), i !== !1 && (t === !0 && n >= 0 ? this.highlight(n) : this.highlight(0)), t === !0) {
                    var r = this.opts.minimumResultsForSearch;
                    r >= 0 && this.showSearch(C(e.results) >= r)
                }
            },
            showSearch: function(t) { this.showSearchInput !== t && (this.showSearchInput = t, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t), e(this.dropdown, this.container).toggleClass("select2-with-searchbox", t)) },
            onSelect: function(e, t) {
                if (this.triggerSelect(e)) {
                    var i = this.opts.element.val(),
                        n = this.data();
                    this.opts.element.val(this.id(e)), this.updateSelection(e), this.opts.element.trigger({ type: "select2-selected", val: this.id(e), choice: e }), this.nextSearchTerm = this.opts.nextSearchTerm(e, this.search.val()), this.close(), t && t.noFocus || this.focusser.focus(), a(i, this.id(e)) || this.triggerChange({ added: e, removed: n })
                }
            },
            updateSelection: function(e) {
                var i, n, s = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", e), s.empty(), null !== e && (i = this.opts.formatSelection(e, s, this.opts.escapeMarkup)), i !== t && s.append(i), n = this.opts.formatSelectionCssClass(e, s), n !== t && s.addClass(n), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var e, i = !1,
                    n = null,
                    s = this,
                    a = this.data();
                if (0 === arguments.length) return this.opts.element.val();
                if (e = arguments[0], arguments.length > 1 && (i = arguments[1]), this.select) this.select.val(e).find("option").filter(function() { return this.selected }).each2(function(e, t) { return n = s.optionToData(t), !1 }), this.updateSelection(n), this.setPlaceholder(), i && this.triggerChange({ added: n, removed: a });
                else {
                    if (!e && 0 !== e) return this.clear(i), void 0;
                    if (this.opts.initSelection === t) throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(e), this.opts.initSelection(this.opts.element, function(e) { s.opts.element.val(e ? s.id(e) : ""), s.updateSelection(e), s.setPlaceholder(), i && s.triggerChange({ added: e, removed: a }) })
                }
            },
            clearSearch: function() { this.search.val(""), this.focusser.val("") },
            data: function(e) { var i, n = !1; return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == t && (i = null), i) : (arguments.length > 1 && (n = arguments[1]), e ? (i = this.data(), this.opts.element.val(e ? this.id(e) : ""), this.updateSelection(e), n && this.triggerChange({ added: e, removed: i })) : this.clear(n), void 0) }
        }), I = T(A, {
            createContainer: function() { var t = e(document.createElement("div")).attr({ "class": "select2-container select2-container-multi" }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join("")); return t },
            prepareOpts: function() {
                var t = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function(e, t) {
                    var n = [];
                    e.find("option").filter(function() { return this.selected }).each2(function(e, t) { n.push(i.optionToData(t)) }), t(n)
                } : "data" in t && (t.initSelection = t.initSelection || function(i, n) {
                    var s = r(i.val(), t.separator),
                        o = [];
                    t.query({
                        matcher: function(i, n, r) { var l = e.grep(s, function(e) { return a(e, t.id(r)) }).length; return l && o.push(r), l },
                        callback: e.isFunction(n) ? function() {
                            for (var e = [], i = 0; i < s.length; i++)
                                for (var r = s[i], l = 0; l < o.length; l++) { var c = o[l]; if (a(r, t.id(c))) { e.push(c), o.splice(l, 1); break } }
                            n(e)
                        } : e.noop
                    })
                }), t
            },
            selectChoice: function(e) {
                var t = this.container.find(".select2-search-choice-focus");
                t.length && e && e[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), e && e.length && (this.close(), e.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", e)))
            },
            destroy: function() { e("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments) },
            initContainer: function() {
                var t, i = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = t = this.container.find(i);
                var n = this;
                this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function() { n.search[0].focus(), n.selectChoice(e(this)) }), this.search.attr("id", "s2id_autogen" + N()), e("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() { this.isInterfaceEnabled() && (this.opened() || this.open()) })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(e) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var i = t.find(".select2-search-choice-focus"),
                            n = i.prev(".select2-search-choice:not(.select2-locked)"),
                            s = i.next(".select2-search-choice:not(.select2-locked)"),
                            a = f(this.search);
                        if (i.length && (e.which == E.LEFT || e.which == E.RIGHT || e.which == E.BACKSPACE || e.which == E.DELETE || e.which == E.ENTER)) { var r = i; return e.which == E.LEFT && n.length ? r = n : e.which == E.RIGHT ? r = s.length ? s : null : e.which === E.BACKSPACE ? (this.unselect(i.first()), this.search.width(10), r = n.length ? n : s) : e.which == E.DELETE ? (this.unselect(i.first()), this.search.width(10), r = s.length ? s : null) : e.which == E.ENTER && (r = null), this.selectChoice(r), m(e), r && r.length || this.open(), void 0 }
                        if ((e.which === E.BACKSPACE && 1 == this.keydowns || e.which == E.LEFT) && 0 == a.offset && !a.length) return this.selectChoice(t.find(".select2-search-choice:not(.select2-locked)").last()), m(e), void 0;
                        if (this.selectChoice(null), this.opened()) switch (e.which) {
                            case E.UP:
                            case E.DOWN:
                                return this.moveHighlight(e.which === E.UP ? -1 : 1), m(e), void 0;
                            case E.ENTER:
                                return this.selectHighlighted(), m(e), void 0;
                            case E.TAB:
                                return this.selectHighlighted({ noFocus: !0 }), this.close(), void 0;
                            case E.ESC:
                                return this.cancel(e), m(e), void 0
                        }
                        if (e.which !== E.TAB && !E.isControl(e) && !E.isFunctionKey(e) && e.which !== E.BACKSPACE && e.which !== E.ESC) {
                            if (e.which === E.ENTER) { if (this.opts.openOnEnter === !1) return; if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return }
                            this.open(), (e.which === E.PAGE_UP || e.which === E.PAGE_DOWN) && m(e), e.which === E.ENTER && m(e)
                        }
                    }
                })), this.search.on("keyup", this.bind(function() { this.keydowns = 0, this.resizeSearch() })), this.search.on("blur", this.bind(function(t) { this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), t.stopImmediatePropagation(), this.opts.element.trigger(e.Event("select2-blur")) })), this.container.on("click", i, this.bind(function(t) { this.isInterfaceEnabled() && (e(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.open(), this.focusSearch(), t.preventDefault())) })), this.container.on("focus", i, this.bind(function() { this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder()) })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
            },
            enableInterface: function() { this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled()) },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var e = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) { i !== t && null !== i && (e.updateSelection(i), e.close(), e.clearSearch()) })
                }
            },
            clearSearch: function() {
                var e = this.getPlaceholder(),
                    i = this.getMaxSearchWidth();
                e !== t && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(e).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() { this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default") },
            opening: function() { this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(e.Event("select2-open")) },
            close: function() { this.opened() && this.parent.close.apply(this, arguments) },
            focus: function() { this.close(), this.search.focus() },
            isFocused: function() { return this.search.hasClass("select2-focused") },
            updateSelection: function(t) {
                var i = [],
                    s = [],
                    a = this;
                e(t).each(function() { n(a.id(this), i) < 0 && (i.push(a.id(this)), s.push(this)) }), t = s, this.selection.find(".select2-search-choice").remove(), e(t).each(function() { a.addSelectedChoice(this) }), a.postprocessResults()
            },
            tokenize: function() {
                var e = this.search.val();
                e = this.opts.tokenizer.call(this, e, this.data(), this.bind(this.onSelect), this.opts), null != e && e != t && (this.search.val(e), e.length > 0 && this.open())
            },
            onSelect: function(e, t) { this.triggerSelect(e) && (this.addSelectedChoice(e), this.opts.element.trigger({ type: "selected", val: this.id(e), choice: e }), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(e, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({ added: e }), t && t.noFocus || this.focusSearch()) },
            cancel: function() { this.close(), this.focusSearch() },
            addSelectedChoice: function(i) {
                var n, s, a = !i.locked,
                    r = e("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    o = e("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    l = a ? r : o,
                    c = this.id(i),
                    d = this.getVal();
                n = this.opts.formatSelection(i, l.find("div"), this.opts.escapeMarkup), n != t && l.find("div").replaceWith("<div>" + n + "</div>"), s = this.opts.formatSelectionCssClass(i, l.find("div")), s != t && l.addClass(s), a && l.find(".select2-search-choice-close").on("mousedown", m).on("click dblclick", this.bind(function(t) { this.isInterfaceEnabled() && (e(t.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() { this.unselect(e(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch() })).dequeue(), m(t)) })).on("focus", this.bind(function() { this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active")) })), l.data("select2-data", i), l.insertBefore(this.searchContainer), d.push(c), this.setVal(d)
            },
            unselect: function(t) {
                var i, s, a = this.getVal();
                if (t = t.closest(".select2-search-choice"), 0 === t.length) throw "Invalid argument: " + t + ". Must be .select2-search-choice";
                if (i = t.data("select2-data")) {
                    for (;
                        (s = n(this.id(i), a)) >= 0;) a.splice(s, 1), this.setVal(a), this.select && this.postprocessResults();
                    var r = e.Event("select2-removing");
                    r.val = this.id(i), r.choice = i, this.opts.element.trigger(r), r.isDefaultPrevented() || (t.remove(), this.opts.element.trigger({ type: "select2-removed", val: this.id(i), choice: i }), this.triggerChange({ removed: i }))
                }
            },
            postprocessResults: function(e, t, i) {
                var s = this.getVal(),
                    a = this.results.find(".select2-result"),
                    r = this.results.find(".select2-result-with-children"),
                    o = this;
                a.each2(function(e, t) {
                    var i = o.id(t.data("select2-data"));
                    n(i, s) >= 0 && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"))
                }), r.each2(function(e, t) { t.is(".select2-result-selectable") || 0 !== t.find(".select2-result-selectable:not(.select2-selected)").length || t.addClass("select2-selected") }), -1 == this.highlight() && i !== !1 && o.highlight(0), !this.opts.createSearchChoice && !a.filter(".select2-result:not(.select2-selected)").length > 0 && (!e || e && !e.more && 0 === this.results.find(".select2-no-results").length) && k(o.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + o.opts.formatNoMatches(o.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() { return this.selection.width() - o(this.search) },
            resizeSearch: function() {
                var e, t, i, n, s, a = o(this.search);
                e = v(this.search) + 10, t = this.search.offset().left, i = this.selection.width(), n = this.selection.offset().left, s = i - (t - n) - a, e > s && (s = i - a), 40 > s && (s = i - a), 0 >= s && (s = e), this.search.width(Math.floor(s))
            },
            getVal: function() { var e; return this.select ? (e = this.select.val(), null === e ? [] : e) : (e = this.opts.element.val(), r(e, this.opts.separator)) },
            setVal: function(t) {
                var i;
                this.select ? this.select.val(t) : (i = [], e(t).each(function() { n(this, i) < 0 && i.push(this) }), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)))
            },
            buildChangeDetails: function(e, t) {
                for (var t = t.slice(0), e = e.slice(0), i = 0; i < t.length; i++)
                    for (var n = 0; n < e.length; n++) a(this.opts.id(t[i]), this.opts.id(e[n])) && (t.splice(i, 1), i > 0 && i--, e.splice(n, 1), n--);
                return { added: t, removed: e }
            },
            val: function(i, n) {
                var s, a = this;
                if (0 === arguments.length) return this.getVal();
                if (s = this.data(), s.length || (s = []), !i && 0 !== i) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), n && this.triggerChange({ added: this.data(), removed: s }), void 0;
                if (this.setVal(i), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), n && this.triggerChange(this.buildChangeDetails(s, this.data()));
                else {
                    if (this.opts.initSelection === t) throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(t) {
                        var i = e.map(t, a.id);
                        a.setVal(i), a.updateSelection(t), a.clearSearch(), n && a.triggerChange(a.buildChangeDetails(s, a.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function() {
                var t = [],
                    i = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() { t.push(i.opts.id(e(this).data("select2-data"))) }), this.setVal(t), this.triggerChange()
            },
            data: function(t, i) { var n, s, a = this; return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() { return e(this).data("select2-data") }).get() : (s = this.data(), t || (t = []), n = e.map(t, function(e) { return a.opts.id(e) }), this.setVal(n), this.updateSelection(t), this.clearSearch(), i && this.triggerChange(this.buildChangeDetails(s, this.data())), void 0) }
        }), e.fn.select2 = function() {
            var i, s, a, r, o, l = Array.prototype.slice.call(arguments, 0),
                c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                d = ["opened", "isFocused", "container", "dropdown"],
                u = ["val", "data"],
                h = { search: "externalSearch" };
            return this.each(function() {
                if (0 === l.length || "object" == typeof l[0]) i = 0 === l.length ? {} : e.extend({}, l[0]), i.element = e(this), "select" === i.element.get(0).tagName.toLowerCase() ? o = i.element.prop("multiple") : (o = i.multiple || !1, "tags" in i && (i.multiple = o = !0)), s = o ? new I : new D, s.init(i);
                else { if ("string" != typeof l[0]) throw "Invalid arguments to select2 plugin: " + l; if (n(l[0], c) < 0) throw "Unknown method: " + l[0]; if (r = t, s = e(this).data("select2"), s === t) return; if (a = l[0], "container" === a ? r = s.container : "dropdown" === a ? r = s.dropdown : (h[a] && (a = h[a]), r = s[a].apply(s, l.slice(1))), n(l[0], d) >= 0 || n(l[0], u) && 1 == l.length) return !1 }
            }), r === t ? this : r
        }, e.fn.select2.defaults = { width: "copy", loadMorePadding: 0, closeOnSelect: !0, openOnEnter: !0, containerCss: {}, dropdownCss: {}, containerCssClass: "", dropdownCssClass: "", formatResult: function(e, t, i, n) { var s = []; return _(e.text, i.term, s, n), s.join("") }, formatSelection: function(e, i, n) { return e ? n(e.text) : t }, sortResults: function(e) { return e }, formatResultCssClass: function() { return t }, formatSelectionCssClass: function() { return t }, formatNoMatches: function() { return "No matches found" }, formatInputTooShort: function(e, t) { var i = t - e.length; return "Please enter " + i + " more character" + (1 == i ? "" : "s") }, formatInputTooLong: function(e, t) { var i = e.length - t; return "Please delete " + i + " character" + (1 == i ? "" : "s") }, formatSelectionTooBig: function(e) { return "You can only select " + e + " item" + (1 == e ? "" : "s") }, formatLoadMore: function() { return "Loading more results..." }, formatSearching: function() { return "Searching..." }, minimumResultsForSearch: 0, minimumInputLength: 0, maximumInputLength: null, maximumSelectionSize: 0, id: function(e) { return e.id }, matcher: function(e, t) { return i("" + t).toUpperCase().indexOf(i("" + e).toUpperCase()) >= 0 }, separator: ",", tokenSeparators: [], tokenizer: P, escapeMarkup: y, blurOnChange: !1, selectOnBlur: !1, adaptContainerCssClass: function(e) { return e }, adaptDropdownCssClass: function() { return null }, nextSearchTerm: function() { return t } }, e.fn.select2.ajaxDefaults = { transport: e.ajax, params: { type: "GET", cache: !1, dataType: "json" } }, window.Select2 = { query: { ajax: w, local: x, tags: R }, util: { debounce: d, markMatch: _, escapeMarkup: y, stripDiacritics: i }, "class": { "abstract": A, single: D, multi: I } }
    }
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.select2.defaults, { formatNoMatches: function() { return "Nenhum resultado encontrado" }, formatInputTooShort: function(e, t) { var i = t - e.length; return "Informe " + i + " caractere" + (1 == i ? "" : "s") }, formatInputTooLong: function(e, t) { var i = e.length - t; return "Apague " + i + " caractere" + (1 == i ? "" : "s") }, formatSelectionTooBig: function(e) { return "Só é possível selecionar " + e + " elemento" + (1 == e ? "" : "s") }, formatLoadMore: function() { return "Carregando mais resultados..." }, formatSearching: function() { return "Buscando..." } })
}(jQuery);
var locastyle = function() {
        "use strict";

        function e(e) { t(), i(), s(e), a(e), n(e), o(e), l(e, ""), c(e) }

        function t() { $(".shortcut-box").length > 0 && ($(".main").prepend('<span class="bg-shortcut-workaround"></span>'), $(".bg-shortcut-workaround").css("height", $(".shortcut-box").outerHeight())), $(window).resize(function() { $(".bg-shortcut-workaround").css("height", $(".shortcut-box").outerHeight()) }) }

        function i() {
            var e = 768,
                t = 992,
                i = 1200;
            $(document).width() <= e ? ($("html").addClass("media-mobile").removeClass("media-tablet media-desk media-desk-lg"), locastyle.breakpoint = "media-mobile") : $("html").removeClass("media-mobile"), $(document).width() <= t && $(document).width() >= e ? ($("html").addClass("media-tablet").removeClass("media-mobile media-desk media-desk-lg"), locastyle.breakpoint = "media-tablet") : $("html").removeClass("media-tablet"), $(document).width() <= i && $(document).width() >= t ? ($("html").addClass("media-desk").removeClass("media-mobile media-tablet media-desk-lg"), locastyle.breakpoint = "media-desk") : $("html").removeClass("media-desk"), $(document).width() >= i ? ($("html").addClass("media-desk-lg").removeClass("media-mobile media-tablet media-desk"), locastyle.breakpoint = "media-desk-lg") : $("html").removeClass("media-desk-lg")
        }

        function n(e) {
            $("a", e).on("click", function(e) {
                ("" === $(this).attr("href") || "#" === $(this).attr("href")) && e.preventDefault()
            })
        }

        function s(e) { $('[data-event="click"]', e).on("click", function(e) { e.preventDefault(), r(this) }) }

        function a(e) { $('[data-event="hover"]', e).on("mouseover", function(e) { e.preventDefault(), r(this) }) }

        function r(e) {
            var t, i;
            t = $(e).html(), i = $(e).data("text"), $(e).text(i).data("text", t).attr("title", i)
        }

        function o(e) {
            $("[data-classtoggle]", e).on("click", function(e) {
                e.preventDefault();
                var t = $(this).data("classtoggle").split(",");
                $(this).toggleClass(t[0]).toggleClass(t[1])
            })
        }

        function l(e, t) {
            $(".ls-select", e).not(t).each(function(e, t) {
                var i, n = $(t),
                    s = n.find("option");
                i = 0 == n.data("search") ? -1 : s.size() <= 10 ? -1 : 7, n.attr("placeholder") && !n.attr("multiple") && (0 === n.find("[selected]").size() ? n.prepend("<option selected></option>") : n.prepend("<option></option>")), n.select2({ allowClear: !0, minimumResultsForSearch: i })
            })
        }

        function c(e) { $(".btn-group.activation-toggle .btn", e).on("click", function() { $(this).siblings().removeClass("active"), $(this).addClass("active") }) }
        return { init: e, select2DefaultConfig: l }
    }(),
    locastyle = locastyle || {};
locastyle.forms = function() {
    "use strict";

    function e(e) {
        var a = $("form", e);
        a.each(function(e, n) {
            var a = $(n);
            r(a), o(a), d(a), i(a), s(a), t(a)
        }), n()
    }

    function t(e) { e.attr("disabled") && e.find(":input, :checkbox, :radio").prop("disabled", !0) }

    function i(e) {
        $("[data-toggle-form-edit]", e).on("click", function(e) {
            e.preventDefault();
            var t = $(this).data("toggle-form-edit");
            $(t).attr("disabled") ? n(t, !0) : n(t, !1)
        })
    }

    function n(e, t) { t ? ($(e).removeAttr("disabled"), $(e).find(":input, :checkbox, :radio").removeAttr("disabled")) : ($(e).attr("disabled", !0), $(e).find(":input, :checkbox, :radio").prop("disabled", !0)) }

    function s(e) {
        $("[data-toggle-form-text]", e).on("click", function(e) {
            e.preventDefault();
            var t = $(this).data("toggle-form-text");
            $(t).toggleClass("ls-form-text")
        })
    }

    function a(e, t) { $(this).data("toggle-form-text"), t ? $(e).addClass("ls-form-text") : $(e).removeClass("ls-form-text") }

    function r(e) { $(".date-mask", e).mask("00/00/0000"), $(".time-mask", e).mask("00:00:00"), $(".date-time-mask", e).mask("00/00/0000 00:00:00"), $(".cep-mask", e).mask("00000-000"), $(".phone-mask").mask("0000-0000"), $(".phone-ddd-mask", e).mask("(00) 0000-0000"), $(".cel-sp-mask", e).mask("(00) 00009-0000"), $(".mixed-mask", e).mask("AAA 000-S0S"), $(".cpf-mask", e).mask("000.000.000-00", { reverse: !0 }) }

    function o(e, t) {
        $(".datepicker input", e).not(t).datepicker({ showOn: "button", dateFormat: "dd/mm/yy", monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"], dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"], onClose: function(e) { $(this).hasClass("from-date") && l(this, e) } });
        var i = '<span class="input-group-btn"></span>';
        $(".datepicker", e).not(t).each(function() {
            "today" === $(this).find(".hasDatepicker").data("maxDate") && $(this).find(".hasDatepicker").datepicker("option", "maxDate", new Date), "today" === $(this).find(".hasDatepicker").data("minDate") && $(this).find(".hasDatepicker").datepicker("option", "minDate", new Date), $(this).append(i);
            var e = $(this).find(".input-group-btn");
            $(this).find(".ui-datepicker-trigger").addClass("ico-calendar btn btn-default").html("").appendTo(e)
        })
    }

    function l(e, t) {
        var i = $(e).parents(".date-range");
        i.find(".to-date").datepicker("option", "minDate", t), c(i.find(".to-date"))
    }

    function c(e) {
        var t = $(e).parent().find(".input-group-btn");
        $(e).parent().find(".ui-datepicker-trigger").addClass("ico-calendar btn btn-default").html("").appendTo(t)
    }

    function d(e) { $(".toggle-pass", e).on("click", function(e) { e.preventDefault(); var t = $(this).data("target"); "password" == $(t).attr("type") ? $(t).removeAttr("attr").prop("type", "text") : $(t).removeAttr("attr").prop("type", "password") }) }
    return { init: e, insertDatepicker: o, insertMasks: r, formEditable: n, formAsText: a }
}();
var locastyle = locastyle || {};
locastyle.mobile = function() {
    "use strict";

    function e(e) { i(e), n(e), s(e), a(e), o(e), l(e), t(e), c(), d(e) }

    function t(e) { $(".sidebar", e).length && $(".control-sidebar", e).removeClass("hidden"), $(".nav-content", e).length && $(".control-menu").removeClass("hidden") }

    function i(e) { $(".control-menu", e).on("click touchstart", function(e) { $("html").toggleClass("left-bar").removeClass("right-bar"), e.preventDefault() }) }

    function n(e) { $(".control-sidebar", e).on("click touchstart", function(e) { $("html").toggleClass("right-bar").removeClass("left-bar"), e.preventDefault() }) }

    function s(e) { 0 === $(".overlay-bar", e).length && $("body").append('<span class="overlay-bar"></span>'), $(".overlay-bar").on("click touchstart", function() { $("html").removeClass("right-bar").removeClass("left-bar") }) }

    function a(e) {
        "media-mobile" === locastyle.breakpoint && $(".nav", e).each(function(e) {
            var t = $(this).find("li.active a").text(),
                i = $(this).html();
            $(this).html('<li class="dropdown active"><a href="#" class="dropdown-toggle" data-toggle="dropdown">' + t + '</a><ul class="dropdown-menu" id="drop' + (e + 1) + '" role="menu"></ul></li>');
            var n = $(this).find(".dropdown-menu");
            n.html(i), r(n)
        })
    }

    function r(e) {
        e.find("li a").on("click", function() {
            var t = $(this).text();
            $(this).parents(".dropdown").find(".dropdown-toggle").html(t);
            var i = $(this).parents(".dropdown").find(".dropdown-toggle").text();
            e.find("li.active").removeClass("active"), e.find("li a").each(function() {
                var e = $(this).text();
                e === i && $(this).parents("li").addClass("active")
            })
        })
    }

    function o(e) {
        "media-mobile" === locastyle.breakpoint && $(".actions", e).each(function() {
            var e = $(this).find(".btn-group").attr("data-toggle-text") || "Ações";
            $(this).addClass("pull-right"), $(this).find(".btn-group").append('<li class="divider"></li>'), $(this).find("> .btn").appendTo($(this).find(".btn-group")), $(this).find(".btn").wrap("<li></li>").removeClass("btn"), $(this).find(".btn-group").wrapInner('<ul class="dropdown-menu pull-right" role="menu"></ul>').prepend('<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> ' + e + "</button>")
        })
    }

    function l(e) { $(".media-mobile .shortcuts", e).royalSlider({ addActiveClass: !0, arrowsNav: !1, startSlideId: 1, autoHeight: !1, controlNavigation: "bullets", autoScaleSlider: !1, loop: !1, fadeinLoadedSlide: !0, globalCaption: !1, keyboardNavEnabled: !1, slidesSpacing: 0, allowCSS3: !0, minSlideOffset: 3, globalCaptionInside: !1, visibleNearby: { enabled: !0, center: !0, breakpointCenterArea: .14 } }).data("royalSlider") }

    function c() {
        var e = $("#lwbar-header").length;
        if (e) {
            var t = '<div class="lwbar-id ico-user"><span class="lwbar-login-name"></span><span class="lwbar-plan"></span></div>';
            $(".nav-content").prepend(t);
            var i = $("#lwbar-header .log-out"),
                n = $("#lwbar-header .user-name");
            $(i).clone().appendTo(".nav-content").addClass("btn-logout"), $(n).clone().appendTo(".lwbar-login-name")
        }
    }

    function d(e) {
        if (locastyle.mobile.config.isMobile) {
            var t = $(h.selectors.groupActions, e);
            t.each(function(e, t) {
                var i = $(t);
                u(i)
            })
        }
    }

    function u(e) {
        var t = { label: "", addClass: "pull-right", actions: [] };
        $("a, button", e).not(".dropdown-toggle").each(function(e, i) {
            var n = $(i),
                s = n.hasClass("color-danger");
            t.actions.push({ label: n.text(), link: n.attr("href"), classes: s ? "color-danger" : "", hasDivider: s })
        }), locastyle.templates.button_dropdown_single(t), e.html(locastyle.templates.button_dropdown_single(t))
    }
    var h = { selectors: { groupActions: ".ls-group-actions" }, isMobile: window.innerWidth <= 767 };
    return { init: e, mobileLeftBar: i, mobileRightBar: n, sliderMobile: l, tabDropdownMobile: a, mobileGroupActions: d, config: h }
}();
var locastyle = locastyle || {};
locastyle.bootstrap = function() {
    "use strict";

    function e(e) { t(e), i(e) }

    function t(e) { $("[data-toggle='tooltip']", e).tooltip() }

    function i(e) {
        var t = $("[data-toggle='popover']", e);
        $("[data-toggle='popover'][data-inherit]", e).on("shown.bs.popover", function() {
            var e = $(this).data("inherit"),
                t = $(this).data("inherit-apply") || "color";
            if ($(this).attr("class").match(/(ico)/)) var i = window.getComputedStyle(this, ":before")[e];
            else var i = $(this).css(e);
            var n = $(this).data("bs.popover");
            n.$tip.find(".popover-title").css(t, i), $(n.$tip[0]).find("a").css("color", i), "background" === t && n.$tip.find(".popover-title").css("color", "white")
        }), t.popover()
    }
    return { init: e }
}();
var locastyle = locastyle || {};
locastyle.passwordStrength = function() {
    "use strict";

    function e(e) { t(e) }

    function t(e) {
        $("input[data-component=password-strength]", e).each(function() {
            var e = $(this).data("monitor-id"),
                t = $("#" + e);
            e && i(this, t)
        })
    }

    function i(e, t) { n(e, t, $(e).val()), $(e).on("keyup", function() { n(e, t, $(e).val()) }) }

    function n(e, t, i) { s(t), $(t).addClass(a(i)) }

    function s(e) {
        var t = ["empty", "weak", "medium", "good", "strong"];
        $.each(t, function() { $(e).removeClass(this) })
    }

    function a(e) { return o(e) && l(e) && c(e) && d(e) && u(e) ? "strong" : o(e) && l(e) && c(e) && d(e) ? "good" : o(e) && l(e) && c(e) && u(e) ? "good" : o(e) && l(e) && c(e) ? "medium" : o(e) ? "weak" : r(e) ? "weak" : "empty" }

    function r(e) { return e.length > 0 }

    function o(e) { return e.length > 7 }

    function l(e) { var t = new RegExp(/[0-9]/); return e.match(t) }

    function c(e) { var t = new RegExp(/[a-z]/); return e.match(t) }

    function d(e) { var t = new RegExp(/[A-Z]/); return e.match(t) }

    function u(e) { var t = new RegExp(/\W/); return e.match(t) }

    function h(e) { return a(e) }
    return { init: e, checkIt: h }
}();
var locastyle = locastyle || {};
locastyle.tables = function() {
    "use strict";

    function e(e) {
        var n = $(y.selectors.table, e);
        n.each(function(e, n) {
            var a = $(n);
            t(a), i(a), s(a), r(a), o(a), c(a), g(a), _(a)
        })
    }

    function t(e) {
        var t = [];
        e.find("thead tr th").each(function(e, i) { t.push($(i).attr("class")) }), e.find("tbody tr").each(function(e, i) { for (var n = $(i).find("td"), s = t.length - 1; s >= 0; s--) n.eq(s).addClass(t[s]) }), n(e)
    }

    function i(e) { e.find("tr").each(function(e, t) { $(t).find('td:eq(0) input[type="checkbox"], th:eq(0) input[type="checkbox"]').prop("disabled", !1) }), e.prev(".ls-table-group-actions").find("button").prop("disabled", !1) }

    function n(e) {
        var t = e.find(y.selectors.actionsColumn),
            i = e.find("tbody tr").size();
        t.each(function(e, t) {
            var n = $(t).find("a, button").not(y.actionsExclude),
                s = $(t).parent("tr").index();
            if (n[1] || y.isXsmall) {
                var a = locastyle.templates.button_dropdown_single({
                    label: y.isXsmall ? "" : y.dropdownLabel,
                    labelClass: "btn-xs",
                    addClass: "pull-right" + (3 > i - s ? " dropup" : ""),
                    actions: function() {
                        var e = [];
                        return !$(t).find("[" + y.actions.view.attr + "]")[0] && y.isXsmall && $(t).parent("tr").find(".hidden-xs")[0] && e.push({ label: y.actions.view.label, link: "#", extras: y.actions.view.attr }), n.each(function(t, i) {
                            var n = "";
                            $.each($(i).data(), function(e, t) { n += "data-" + e.replace(/[A-Z]/g, "-$&").toLowerCase() + '="' + t + '" ' });
                            var s = $(i),
                                a = /danger/.test(s.attr("class")) || s.find('[class*="' + y.actionDangerClass + '"]')[0] ? !0 : !1;
                            e.push({ label: s.html(), link: s.attr("href"), classes: a ? "text-danger" : "", extras: n, hasDivider: a ? !0 : !1 })
                        }), e
                    }()
                });
                $(t).html(a)
            } else {
                if (n.addClass("btn btn-xs btn-default"), n.attr("class")) var r = $.grep(n.attr("class").split(" "), function(e) { return -1 != e.indexOf("text-") }).join(" ");
                r && n.wrapInner('<span class="' + r + '" />')
            }
        })
    }

    function s(e) {
        var t = e.find('tbody input[type="checkbox"]'),
            i = e.find('thead input[type="checkbox"]');
        i.on("change", function(i) { t.prop("checked", i.currentTarget.checked).parents("tr").toggleClass("selected", i.currentTarget.checked), a(e, i.currentTarget.checked ? t.size() : 0) }), t.on("change", function(n) {
            var s = t.filter(":checked").size(),
                r = t.size() === s;
            i.prop("checked", r), $(this).parents("tr").toggleClass("selected", n.currentTarget.checked), a(e, s)
        })
    }

    function a(e, t) { e.prev(".ls-table-group-actions, [data-target]").toggle(t >= 1).find(".counterChecks").text(t).next(".counterChecksStr").text(t > 1 ? y.groupActions.other : y.groupActions.one) }

    function r(e) { y.isXsmall && e.find("tbody tr").each(function(e, t) { $(t).find(".hidden-xs")[0] && $(t).find("td").not(y.selectors.actionsColumn).attr("data-action-modal", "view") }) }

    function o(e) {
        $("[data-enable-edit]", e).on("click", function(e) {
            e.preventDefault();
            var t = $(this).parents("tr");
            $(this).parents(".btn-group").hide(), $(this).parents("td").addClass("ls-table-actions-show").append('<div class="lsa"><button class="btn btn-xs btn-success  ico-checkmark" type="button"><span class="hidden">Cancelar</span></button> <button class="btn btn-default btn-xs ico-close" type="button"><span class="hidden">Salvar</span></button></div>'), t.find("[disabled]").each(function(e, t) {
                var i = $(t),
                    n = i.val();
                i.data("originalValue", n), i.removeAttr("disabled")
            }).eq(0).focus(), l(t.find(".ls-table-actions-show button"))
        })
    }

    function l(e) { e.on("click", function(e) { e.preventDefault(), $(this).hasClass("ico-close") && ($(this).parents("tr").find(".btn-group").show(), $(this).parents(".lsa").remove()) }) }

    function c(e) {
        $("[data-action-modal]", e).on("click", function(t) {
            var i = locastyle.tables.config;
            if (0 !== $(this).index() || "TD" !== this.nodeName) {
                t.preventDefault();
                var n = $(this).data("action-modal"),
                    s = "TD" == this.nodeName ? "Visualizar" : $(this).text();
                $(this).data("actionModal");
                var a, r = $(this).parents("td").find('[data-action-modal="edit"]')[0] && $(this).parents("tr").find(":input, select");
                r && i.isXsmall && (a = locastyle.templates.button_dropdown_single({ label: i.dropdownLabel, addClass: "pull-right", actions: [{ label: i.actions.view.label, link: "#view", classes: "ls-modal-action" }, { label: i.actions.edit.label, link: "#edit", classes: "ls-modal-action" }] }));
                var o = {};
                o.fields = f(e, $(this).parents("tr")), o.action = $(this).attr("href");
                var i = { header: { title: s, close: !1, action: a }, body: locastyle.templates.form(o), footer: { actions: [function() { return "edit" === n ? { label: "Salvar", classes: "btn-primary table-modal-save" } : {} }()] } },
                    l = locastyle.templates.modal("body", i).modal("show"),
                    c = "edit" == n ? !0 : !1;
                locastyle.forms.formEditable(l.find("form"), c), locastyle.forms.formAsText(l.find("form"), !c);
                var u = l.find(".modal-body");
                l.on("hidden.bs.modal", function() { l.remove() }).on("shown.bs.modal", function() { u.find(":input").eq(0).focus() }), m(l), d(l, $(this).parents("tr"))
            }
        })
    }

    function d(e, t) {
        e.find("form").on("submit", function(t) { t.preventDefault(), e.find(".table-modal-save").trigger("click") }), e.find(".table-modal-save").on("click", function(i) {
            i.preventDefault();
            var n = t.parents("form").find("input").filter(function() { return 0 === $(this).parents("table").length }),
                s = e.find("form").serialize() + "&" + n.serialize();
            $.ajax({ data: s, type: "POST", url: e.find("form").attr("action"), beforeSend: h(e, !0), complete: h(e, !1), error: function() { u(e, t, y.trClasses.error) }, success: function(i) { p(e, t, i), t.trigger("change") } })
        })
    }

    function u(e, t, i) { t.addClass(i), setTimeout(function() { t.removeClass(i) }, 1500), e.modal("hide") }

    function h(e, t) { e.find(".modal-footer").find("button").prop("disabled", t) }

    function p(e, t) { u(e, t, y.trClasses.success), e.find("form").find(":input").each(function(e, i) { t.find(":input").each(function(e, t) { $(t).attr("name") == $(i).attr("name") && $(t).val($(i).val()) }) }) }

    function f(e, t) {
        var i = {},
            n = [];
        i = [], e.find("thead th").each(function(e, t) { n.push($.trim($(t).text())) });
        var s = t.clone();
        return s.find("td").each(function(e, t) { i.push({ label: n[e], input: $(t).html() }) }), i = i.slice(1, i.length - 1)
    }

    function m(e) {
        $(".ls-modal-action", e).off().on("click", function(t) {
            t.preventDefault(), e.find(".modal-title-text").text($(this).text()), e.find(".modal-body");
            var i = e.find(".modal-footer"),
                n = "#edit" === $(this).attr("href");
            locastyle.forms.formEditable(e.find("form"), n), locastyle.forms.formAsText(e.find("form"), !n), n ? i.find(".btn.btn-primary").show() : i.find(".btn.btn-primary").hide()
        })
    }

    function g(e) {
        $("[data-confirm-text]", e).on("click", function(t) {
            t.preventDefault();
            var i = { header: { title: "Confirmação" }, body: $(this).data("confirmText"), footer: { actions: [{ label: $(this).text(), classes: "btn-danger", link: $(this).attr("href") }] } },
                n = locastyle.templates.modal("body", i).modal("show");
            n.find(".modal-body"), n.on("hidden.bs.modal", function() { n.remove() });
            var s = $(this).parents("tr");
            v(n, e, s)
        })
    }

    function v(e, t, i) {
        e.find(".modal-footer .btn-danger").on("click", function(n) {
            n.preventDefault();
            var s = t.parents("form").find("input").filter(function() { return 0 === $(this).parents("table").length }),
                a = e.find("form").serialize() + "&" + s.serialize(),
                r = $(this).attr("href");
            $.ajax({ data: a, type: "POST", url: r, beforeSend: h(e, !0), complete: h(e, !1), error: function() { u(e, i, "danger") }, success: function() { b(e, i) } })
        })
    }

    function b(e, t) { e.modal("hide"), t.addClass(y.trClasses.warn), t.find("td:eq(0) :checkbox").prop("checked", !1).trigger("change"), setTimeout(function() { t.slideUp("fast", function() { t.remove() }) }, 1e3) }

    function _(e) {
        if (y.isXsmall) {
            var t = e.prev(".ls-table-group-actions, [data-target]");
            t.find("a, button");
            var i = locastyle.templates.button_dropdown_single({
                label: "Ações",
                addClass: "pull-right",
                actions: function() {
                    var e = [];
                    return t.find("a, button:not(.dropdown-toggle)").each(function(t, i) {
                        var n = $(i),
                            s = /danger/.test(n.attr("class")) || n.find('[class*="danger"]')[0] ? !0 : !1;
                        e.push({ label: n.html(), link: n.attr("href"), classes: s ? "text-danger" : "", hasDivider: s })
                    }), e
                }()
            });
            t.find(".actions").html('<p class="pull-left"></p>' + i)
        }
    }
    var y = { selectors: { table: ".ls-table", actionsColumn: "td.ls-table-actions" }, trClasses: { success: "success", warn: "warning", error: "danger" }, dropdownLabel: "Ações", actionsExclude: ".dropdown-toggle", actionDangerClass: "danger", actions: { view: { label: "Visualizar", attr: 'data-action-modal="view"' }, edit: { label: "Editar", attr: 'data-action-modal="edit"' } }, groupActions: { one: "item selecionado", other: "itens selecionados" }, isXsmall: window.innerWidth <= 767 };
    return { init: e, config: y }
}();
var locastyle = locastyle || {};
locastyle.accessibility = function() {
    "use strict";

    function e(e) { n(e), t(e), i(e), s(e), a(e), l(e), c(e), d(e), u(e), p(e), f(e) }

    function t(e) { $(".area-access a", e).on("focus", function() { $(this).parent().addClass("in") }).on("blur", function() { $(this).parent().removeClass("in") }) }

    function i(e) {
        $(".link-content", e).on("click", function(e) {
            e.preventDefault();
            var t = $(".title-content");
            t.attr("tabindex", "-1").focus(), o(t)
        })
    }

    function n(e) {
        var t = $(".title-content", e).size(),
            i = "Ir para o conteúdo",
            n = '<div class="area-access hidden-xs"><a href="#" class="link-content  ico-accessibility" tabindex="1">' + i + "</a></div>";
        t >= 1 && $(".header").prepend(n)
    }

    function s(e) { $(".menu li", e).find("ul").addClass("submenu"), r($(".submenu", e), !1, !0), $(".menu a", e).attr({ role: "menuitem" }) }

    function a(e) { $(".menu a", e).on("focus mouseover", function() { $(this).parents("li").addClass("in"), r($(this).parents(".in").find(".submenu"), !0, !1) }).on("blur mouseout", function() { $(this).parents("li").removeClass("in"), r($(".submenu"), !1, !0) }) }

    function r(e, t, i) { $(e).attr({ "aria-expanded": t, "aria-hidden": i }) }

    function o(e) { $("html, body").animate({ scrollTop: $(e).offset().top }, 500) }

    function l(e) {
        $(".header", e).prepend('<nav class="menu-access" />'), $("[data-access]", e).each(function() {
            var e = $(this).attr("href"),
                t = $(this).text();
            $(".menu-access").append('<a class="sr-only" role="menuitem" tabindex="1" href="' + e + '">' + t + "</a>")
        })
    }

    function c(e) {
        var t = $(".alert-focus", e),
            i = t.size();
        i >= 1 && (o(t), t.attr("tabindex", "-1").focus())
    }

    function d(e) { $(".nav-tabs li a", e).attr({ role: "tab", "aria-selected": "false", "aria-hidden": "true" }), $(".nav-tabs li.active a", e).attr("aria-selected", "true").attr("aria-hidden", "false") }

    function u(e) { $(".nav-tabs a", e).on("shown.bs.tab", function() { d(e) }) }

    function h(e) { $(".auto-focus", e).first().focus() }

    function p(e) { $(".modal", e).on("shown.bs.modal", function() { h(this) }) }

    function f(e) { $(".ls-collapse", e).on("shown.bs.collapse", function() { h(this) }) }
    return { init: e, titleAccess: n, autoFocus: h }
}();
var locastyle = locastyle || {};
locastyle.trackEvents = function() {
    "use strict";

    function e(e) { window.ga ? (t(e), this.gaPresent = !0) : this.gaPresent = !1 }

    function t(e) { i(e), n(e), s(e), a(e), c(e) }

    function i(e) {
        var t = $("a", e);
        $(t).each(function(e, t) {
            var i = {};
            if (i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "open_link_#" + $(t).attr("href"), "#" === $(t).attr("href") && (i.action = "on_page_link", i.reload = !0), "modal" === $(t).data("toggle")) {
                var n = $(t).data("target") ? $(t).data("target") : $(t).attr("href");
                i.action = "open_modal_" + n
            }
            if ("modal" === $(t).data("dismiss")) {
                var n = $($(t).parents(".modal")).attr("id");
                i.action = "close_modal_#" + n
            }
            "collapse" === $(t).data("toggle") && (i.type = "collapse"), $(this).parents(".nav-tabs").length > 0 && (i.action = "tab_navigation"), i.label = $(t).attr("title") ? $(t).attr("title") : $(t).text(), o(t, i)
        })
    }

    function n(e) {
        var t = $("button", e);
        $(t).each(function(e, t) {
            var i = {};
            if (i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "open_button", "#" === $(t).attr("href") && (i.action = "on_page_button"), "modal" === $(t).data("dismiss")) {
                var n = $($(t).parents(".modal")).attr("id");
                i.action = "close_modal_#" + n
            }
            if ("dropdown" === $(t).data("toggle")) {
                var n = $($(t).parents(".modal")).attr("id");
                i.action = "dropdown_toggle"
            }
            i.label = $(t).attr("title") ? $(t).attr("title") : $(t).text(), o(t, i)
        })
    }

    function s(e) {
        var t = $("form", e);
        $(t).each(function(e, t) {
            var i = {};
            i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "submit_form_#" + ($(t).data("action") || $(t).attr("id") || $(t).attr("action")), i.label = $(t).find(":submit[type=submit]").val(), l(t, i)
        })
    }

    function a(e) {
        var t = $("select", e);
        $(t).each(function(e, t) {
            var i = {};
            i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "select_change_#" + ($(t).attr("id") || $(t).attr("name")), i.label = "option", r(t, i)
        })
    }

    function r(e, t) { $(e).on("change", function() { t.label = $(this).val(), ga("send", "event", t.category, t.action, t.label) }) }

    function o(e, t) {
        $(e).on("click", function() {
            if (t.reload && (t.label = $(e).text()), "collapse" === t.type) {
                var i = $(e).attr("href");
                t.action = $(i).hasClass("in") ? "close_collapse_" + i : "open_collapse_" + i
            }
            ga("send", "event", t.category, t.action, t.label)
        })
    }

    function l(e, t) { $(e).on("submit", function() { ga("send", "event", t.category, t.action, t.label) }) }

    function c() {
        $("body").on("click", ".hopscotch-bubble .hopscotch-nav-button", function() {
            var e = $("body").data("controller") + "#" + $("body").data("action"),
                t = $(this).parents(".hopscotch-bubble").find(".hopscotch-bubble-number").text();
            ga("send", "event", e, "go_to_tour_step[" + t + "]", $(this).text())
        })
    }
    return { init: e }
}();
var locastyle = locastyle || {};
locastyle.collapse = function() {
    "use strict";

    function e(e) { t(), i(e), n(e), s(e), a(e) }

    function t() { $(".collapse.in").parents(".ls-collapse").addClass("active") }

    function i(e) { $(".collapse", e).on("show.bs.collapse", function() { $(this).parents(".ls-collapse").addClass("active") }) }

    function n(e) { $(".collapse", e).on("hide.bs.collapse", function() { $(this).parents(".ls-collapse").removeClass("active") }) }

    function s(e) { $('[data-toggle="collapse"]:checked', e).each(function() { $(this).parent().find(".panel-collapse").addClass("in") }) }

    function a(e) {
        $('[type="radio"][data-toggle="collapse"]', e).each(function() {
            var e = $(this);
            $(e.data("target")).on("hide.bs.collapse", function(t) { e.prop("checked") === !0 && t.preventDefault() })
        })
    }
    return { init: e }
}();
var locastyle = locastyle || {};
locastyle.guidedTour = function() {
    "use strict";

    function e(e) { t(e) }

    function t(e) { e && e.selectors && hopscotch && ($.each(c.selectors, function(t) { e.selectors[t] = e.selectors[t] || c.selectors[t] }), i(e), o()) }

    function i(e) { l = e, $(c.selectors.open).on({ click: n }), $(c.selectors.init).on({ click: s }), $(c.selectors.close).on({ click: a }) }

    function n(e) { e ? e.preventDefault() : null, $(c.selectors.tour).toggleClass("on"), $(c.selectors.init).focus().attr("tabindex", "-1") }

    function s() { hopscotch.endTour(), hopscotch.startTour(l, 0), r(), a() }

    function a() { $(c.selectors.tour).removeClass("on") }

    function r() {
        var e = hopscotch.getCurrTour().steps.length;
        $("body").off("keyup").on("keyup", function(t) {
            var i = t.keyCode;
            hopscotch.getCurrStepNum() < e && hopscotch.getState() && (39 === i && hopscotch.nextStep(), 37 === i && hopscotch.prevStep()), 27 === i && hopscotch.endTour()
        })
    }

    function o() { "true" != $.cookie("cookie_tour") && ($(c.selectors.open).trigger("click"), $.cookie("cookie_tour", "true")) }
    var l, c = { selectors: { open: ".help-suggestions", init: ".btn-tour", close: ".btn-close", tour: ".guided-tour" } };
    return { init: e, openWelcomeTour: n, closeWelcomeTour: a }
}();
var locastyle = locastyle || {};
locastyle.templates = function() {
        "use strict";

        function e(e, t, i) { t.idModal = i || "template-modal", $(e).append(JST[n + "modal"](t)); var s = $("#" + t.idModal); return $(t.footer.actions).each(function(e, t) { $.isFunction(t.click) && s.find('.modal-footer button:contains("' + t.label + '")').on("click", function() { t.click() }) }), s }

        function t(e) { return $(e.actions).each(function() {}), JST[n + "button_dropdown_single"](e) }

        function i(e) { return JST[n + "form"](e) }
        var n = "locastyle/templates/_";
        return $("body"), { modal: e, form: i, button_dropdown_single: t }
    }(), $(window).load(function() { locastyle.trackEvents.init($(document)), locastyle.init($(document)), locastyle.mobile.init($(document)), locastyle.bootstrap.init($(document)), locastyle.forms.init($(document)), locastyle.tables.init($(document)), locastyle.passwordStrength.init($(document)), locastyle.accessibility.init($(document)), locastyle.collapse.init($(document)) }),
    function() {
        this.JST || (this.JST = {}), this.JST["locastyle/templates/_modal"] = function(e) {
            e || (e = {});
            var t, i = [],
                n = function(e) { return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? a(e) : "" },
                s = e.safe,
                a = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, a || (a = e.escape = function(e) { return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }),
                function() {
                    ! function() {
                        var e, t, s, a;
                        if (i.push('<div class="modal fade" id="'), i.push(n(this.idModal)), i.push('" tabindex="-1" role="dialog" aria-labelledby="templateModal" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      '), this.header && (i.push('\n      <div class="modal-header">\n        '), this.header.close !== !1 && i.push('\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        '), i.push('\n        <h4 class="modal-title" id="templateModalLabel">\n          <span class="modal-title-text">\n            '), i.push(n(this.header.title)), i.push("\n          </span>\n          "), this.header.action && (i.push('\n            <span class="f-right">\n              '), i.push(this.header.action), i.push("\n            </span>\n          ")), i.push("\n        </h4>\n      </div>\n      ")), i.push('\n      <div class="modal-body">\n        '), i.push(this.body), i.push("\n      </div>\n      "), this.footer) {
                            for (i.push('\n        <div class="modal-footer">\n          '), this.footer.close !== !1 && i.push('\n            <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>\n          '), i.push("\n          "), a = this.footer.actions, t = 0, s = a.length; s > t; t++) e = a[t], i.push("\n            "), e.link ? (i.push('\n              <a href="'), i.push(n(e.link)), i.push('" class="btn '), i.push(n(e.classes)), i.push('" '), i.push(n(e.add)), i.push(">"), i.push(n(e.label)), i.push("</a>\n            ")) : (i.push("\n              "), e.label && (i.push('\n                <button type="button" class="btn '), i.push(n(e.classes)), i.push('">'), i.push(n(e.label)), i.push("</button>\n              ")), i.push("\n            ")), i.push("\n          ");
                            i.push("\n        </div>\n      ")
                        }
                        i.push("\n    </div>\n  </div>\n</div>\n")
                    }.call(this)
                }.call(e), e.safe = s, e.escape = a, i.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["locastyle/templates/_button_dropdown_single"] = function(e) {
            e || (e = {});
            var t, i = [],
                n = function(e) { return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? a(e) : "" },
                s = e.safe,
                a = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, a || (a = e.escape = function(e) { return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }),
                function() {
                    ! function() {
                        var e, t, s, a;
                        if (this.actions[0]) {
                            if (i.push('\n	<div class="btn-group '), i.push(n(this.addClass)), i.push('">\n	  <button type="button" class="btn btn-default dropdown-toggle '), i.push(n(this.labelClass)), i.push('" data-toggle="dropdown">\n	    '), i.push(n(this.label)), i.push("\n	  </button>\n	  "), this.actions) {
                                for (i.push('\n	  <ul class="dropdown-menu '), i.push(n(this.addClass)), i.push('" role="menu">\n	    '), a = this.actions, t = 0, s = a.length; s > t; t++) e = a[t], i.push("\n	      "), e.hasDivider === !0 && i.push('\n	        <li class="divider"></li>\n	      '), i.push('\n	      <li>\n	        <a href="'), i.push(n(e.link)), i.push('" '), e.classes && (i.push('class="'), i.push(n(e.classes)), i.push('"')), i.push(" "), e.extras && i.push(e.extras), i.push(" >\n	          "), i.push(e.label), i.push("\n	        </a>\n	      </li>\n	    ");
                                i.push("\n	  </ul>\n	  ")
                            }
                            i.push("\n	</div>\n ")
                        }
                        i.push("\n")
                    }.call(this)
                }.call(e), e.safe = s, e.escape = a, i.join("")
        }
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["locastyle/templates/_form"] = function(e) {
            e || (e = {});
            var t, i = [],
                n = function(e) { return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? a(e) : "" },
                s = e.safe,
                a = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, a || (a = e.escape = function(e) { return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }),
                function() {
                    ! function() {
                        var e, t, s, a, r, o, l, c;
                        for (i.push('<form role="form" method="post" action="'), i.push(n(this.action)), i.push('">\n  <fieldset>\n    '), l = this.fields, s = 0, r = l.length; r > s; s++) t = l[s], i.push('\n      <div class="form-group">\n        <label>'), i.push(n(t.label)), i.push("</label>\n        "), i.push(t.input), i.push("\n        "), t.help && (i.push('\n          <p class="help-block">'), i.push(n(t.help)), i.push("</p>\n        ")), i.push("\n      </div>\n    ");
                        if (i.push("\n    "), this.actions) {
                            for (i.push('\n      <div class="box-actions">\n        '), c = this.actions, a = 0, o = c.length; o > a; a++) e = c[a], i.push('\n          <button type="'), i.push(n(e.type)), i.push('" class="btn '), i.push(n(e.classes)), i.push('">'), i.push(n(e.label)), i.push("</button>\n        ");
                            i.push("\n      </div>\n    ")
                        }
                        i.push("\n  </fieldset>\n</form>\n")
                    }.call(this)
                }.call(e), e.safe = s, e.escape = a, i.join("")
        }
    }.call(this);