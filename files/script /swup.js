!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t || self).Swup = e() }(this, function () { const t = (t, e) => String(t).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e || "", e = function (t) { let { hash: e } = void 0 === t ? {} : t; return location.pathname + location.search + (e ? location.hash : "") }, n = function (t, n) { void 0 === n && (n = {}); const r = { url: t = t || e({ hash: !0 }), random: Math.random(), source: "swup", ...n }; history.pushState(r, "", t) }, r = function (t, n) { void 0 === t && (t = null), void 0 === n && (n = {}), t = t || e({ hash: !0 }); const r = { ...history.state, url: t, random: Math.random(), source: "swup", ...n }; history.replaceState(r, "", t) }, o = new WeakMap; function i(t, e, n, r) { if (!t && !o.has(e)) return !1; const i = o.get(e) ?? new WeakMap; o.set(e, i); const s = i.get(n) ?? new Set; i.set(n, s); const a = s.has(r); return t ? s.add(r) : s.delete(r), a && t } const s = (t, e, n, r) => { const o = new AbortController; return function (t, e, n, r = {}) { const { signal: o, base: s = document } = r; if (o?.aborted) return; const { once: a, ...l } = r, c = s instanceof Document ? s.documentElement : s, h = Boolean("object" == typeof r ? r.capture : r), u = r => { const o = function (t, e) { let n = t.target; if (n instanceof Text && (n = n.parentElement), n instanceof Element && t.currentTarget instanceof Element) { const r = n.closest(e); if (r && t.currentTarget.contains(r)) return r } }(r, t); if (o) { const t = Object.assign(r, { delegateTarget: o }); n.call(c, t), a && (c.removeEventListener(e, u, l), i(!1, c, n, m)) } }, m = JSON.stringify({ selector: t, type: e, capture: h }); i(!0, c, n, m) || c.addEventListener(e, u, l), o?.addEventListener("abort", () => { i(!1, c, n, m) }) }(t, e, n, r = { ...r, signal: o.signal }), { destroy: () => o.abort() } }; class a extends URL { constructor(t, e) { void 0 === e && (e = document.baseURI), super(t.toString(), e) } get url() { return this.pathname + this.search } static fromElement(t) { const e = t.getAttribute("href") || t.getAttribute("xlink:href") || ""; return new a(e) } static fromUrl(t) { return new a(t) } } class l { constructor(t) { this.swup = void 0, this.pages = new Map, this.swup = t } get size() { return this.pages.size } get all() { const t = new Map; return this.pages.forEach((e, n) => { t.set(n, { ...e }) }), t } has(t) { return this.pages.has(this.resolve(t)) } get(t) { const e = this.pages.get(this.resolve(t)); return e ? { ...e } : e } set(t, e) { t = this.resolve(t), e = { ...e, url: t }, this.pages.set(t, e), this.swup.hooks.callSync("cache:set", { page: e }) } update(t, e) { t = this.resolve(t); const n = { ...this.get(t), ...e, url: t }; this.pages.set(t, n) } delete(t) { this.pages.delete(this.resolve(t)) } clear() { this.pages.clear(), this.swup.hooks.callSync("cache:clear") } prune(t) { this.pages.forEach((e, n) => { t(n, e) && this.delete(n) }) } resolve(t) { const { url: e } = a.fromUrl(t); return this.swup.resolveUrl(e) } } const c = function (t, e) { return void 0 === e && (e = document), e.querySelector(t) }, h = function (t, e) { return void 0 === e && (e = document), Array.from(e.querySelectorAll(t)) }, u = () => new Promise(t => { requestAnimationFrame(() => { requestAnimationFrame(() => { t() }) }) }); function m(t) { return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then } const f = t => window.CSS && window.CSS.escape ? CSS.escape(t) : t, d = t => 1e3 * Number(t.slice(0, -1).replace(",", ".")); class p { constructor(t) { this.swup = void 0, this.swupClasses = ["to-", "is-changing", "is-rendering", "is-popstate", "is-animating"], this.swup = t } get selectors() { const { scope: t } = this.swup.visit.animation; return "containers" === t ? this.swup.visit.containers : "html" === t ? ["html"] : Array.isArray(t) ? t : [] } get selector() { return this.selectors.join(",") } get targets() { return this.selector.trim() ? h(this.selector) : [] } add() { this.targets.forEach(t => t.classList.add(...[].slice.call(arguments))) } remove() { this.targets.forEach(t => t.classList.remove(...[].slice.call(arguments))) } clear() { this.targets.forEach(t => { const e = t.className.split(" ").filter(t => this.isSwupClass(t)); t.classList.remove(...e) }) } isSwupClass(t) { return this.swupClasses.some(e => t.startsWith(e)) } } function v(t) { let { to: e, from: n = this.currentPageUrl, hash: r, animate: o = !0, animation: i, el: s, event: a, action: l = "push", resetScroll: c = !0 } = t; return { from: { url: n }, to: { url: e, hash: r }, containers: this.options.containers, animation: { animate: o, wait: !1, name: i, scope: this.options.animationScope, selector: this.options.animationSelector }, trigger: { el: s, event: a }, history: { action: l, popstate: !1, direction: void 0 }, scroll: { reset: c, target: void 0 } } } const g = "undefined" != typeof Symbol ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator"; function w(t, e, n) { if (!t.s) { if (n instanceof y) { if (!n.s) return void (n.o = w.bind(null, t, e)); 1 & e && (e = n.s), n = n.v } if (n && n.then) return void n.then(w.bind(null, t, e), w.bind(null, t, 2)); t.s = e, t.v = n; const r = t.o; r && r(t) } } const y =/*#__PURE__*/function () { function t() { } return t.prototype.then = function (e, n) { const r = new t, o = this.s; if (o) { const t = 1 & o ? e : n; if (t) { try { w(r, 1, t(this.v)) } catch (t) { w(r, 2, t) } return r } return this } return this.o = function (t) { try { const o = t.v; 1 & t.s ? w(r, 1, e ? e(o) : o) : n ? w(r, 1, n(o)) : w(r, 2, o) } catch (t) { w(r, 2, t) } }, r }, t }(); function P(t) { return t instanceof y && 1 & t.s } class k { constructor(t) { this.swup = void 0, this.registry = new Map, this.hooks = ["animation:out:start", "animation:out:await", "animation:out:end", "animation:in:start", "animation:in:await", "animation:in:end", "animation:skip", "cache:clear", "cache:set", "content:replace", "content:scroll", "enable", "disable", "fetch:request", "fetch:error", "history:popstate", "link:click", "link:self", "link:anchor", "link:newtab", "page:load", "page:view", "scroll:top", "scroll:anchor", "visit:start", "visit:end"], this.swup = t, this.init() } init() { this.hooks.forEach(t => this.create(t)) } create(t) { this.registry.has(t) || this.registry.set(t, new Map) } exists(t) { return this.registry.has(t) } get(t) { const e = this.registry.get(t); if (e) return e; console.error(`Unknown hook '${t}'`) } clear() { this.registry.forEach(t => t.clear()) } on(t, e, n) { void 0 === n && (n = {}); const r = this.get(t); if (!r) return console.warn(`Hook '${t}' not found.`), () => { }; const o = r.size + 1, i = { ...n, id: o, hook: t, handler: e }; return r.set(e, i), () => this.off(t, e) } before(t, e, n) { return void 0 === n && (n = {}), this.on(t, e, { ...n, before: !0 }) } replace(t, e, n) { return void 0 === n && (n = {}), this.on(t, e, { ...n, replace: !0 }) } once(t, e, n) { return void 0 === n && (n = {}), this.on(t, e, { ...n, once: !0 }) } off(t, e) { const n = this.get(t); n && e ? n.delete(e) || console.warn(`Handler for hook '${t}' not found.`) : n && n.clear() } call(t, e, n) { try { const r = this, { before: o, handler: i, after: s } = r.getHandlers(t, n); return Promise.resolve(r.run(o, e)).then(function () { return Promise.resolve(r.run(i, e)).then(function (n) { let [o] = n; return Promise.resolve(r.run(s, e)).then(function () { return r.dispatchDomEvent(t, e), o }) }) }) } catch (t) { return Promise.reject(t) } } callSync(t, e, n) { const { before: r, handler: o, after: i } = this.getHandlers(t, n); this.runSync(r, e); const [s] = this.runSync(o, e); return this.runSync(i, e), this.dispatchDomEvent(t, e), s } run(t, e) { try { const n = this, r = [], o = function (t, e, n) { if ("function" == typeof t[g]) { var r, o, i, s = t[g](); if (function t(n) { try { for (; !(r = s.next()).done;)if ((n = e(r.value)) && n.then) { if (!P(n)) return void n.then(t, i || (i = w.bind(null, o = new y, 2))); n = n.v } o ? w(o, 1, n) : o = n } catch (t) { w(o || (o = new y), 2, t) } }(), s.return) { var a = function (t) { try { r.done || s.return() } catch (t) { } return t }; if (o && o.then) return o.then(a, function (t) { throw a(t) }); a() } return o } if (!("length" in t)) throw new TypeError("Object is not iterable"); for (var l = [], c = 0; c < t.length; c++)l.push(t[c]); return function (t, e, n) { var r, o, i = -1; return function n(s) { try { for (; ++i < t.length;)if ((s = e(i)) && s.then) { if (!P(s)) return void s.then(n, o || (o = w.bind(null, r = new y, 2))); s = s.v } r ? w(r, 1, s) : r = s } catch (t) { w(r || (r = new y), 2, t) } }(), r }(l, function (t) { return e(l[t]) }) }(t, function (t) { let { hook: o, handler: i, defaultHandler: s, once: a } = t; return Promise.resolve(function (t, e) { return void 0 === e && (e = []), new Promise((n, r) => { const o = t(...e); m(o) ? o.then(n, r) : n(o) }) }(i, [n.swup.visit, e, s])).then(function (t) { r.push(t), a && n.off(o, i) }) }); return Promise.resolve(o && o.then ? o.then(function () { return r }) : r) } catch (t) { return Promise.reject(t) } } runSync(t, e) { const n = []; for (const { hook: r, handler: o, defaultHandler: i, once: s } of t) { const t = o(this.swup.visit, e, i); n.push(t), m(t) && console.warn(`Promise returned from handler for synchronous hook '${r}'.Swup will not wait for it to resolve.`), s && this.off(r, o) } return n } getHandlers(t, e) { const n = this.get(t); if (!n) return { found: !1, before: [], handler: [], after: [], replaced: !1 }; const r = this.sortRegistrations, o = Array.from(n.values()), i = o.filter(t => { let { before: e, replace: n } = t; return e && !n }).sort(r), s = o.filter(t => { let { replace: e } = t; return e }).sort(r), a = o.filter(t => { let { before: e, replace: n } = t; return !e && !n }).sort(r), l = s.length > 0; let c = []; if (e && (c = [{ id: 0, hook: t, handler: e }], l)) { const n = s.length - 1, r = t => { const n = s[t - 1]; return n ? (e, o) => n.handler(e, o, r(t - 1)) : e }; c = [{ id: 0, hook: t, handler: s[n].handler, defaultHandler: r(n) }] } return { found: !0, before: i, handler: c, after: a, replaced: l } } sortRegistrations(t, e) { return (t.priority ?? 0) - (e.priority ?? 0) || t.id - e.id || 0 } dispatchDomEvent(t, e) { document.dispatchEvent(new CustomEvent(`swup:${t}`, { detail: { hook: t, args: e, visit: this.swup.visit } })) } } const S = t => { if (t && "#" === t.charAt(0) && (t = t.substring(1)), !t) return null; const e = decodeURIComponent(t); let n = document.getElementById(t) || document.getElementById(e) || c(`a[name='${f(t)}']`) || c(`a[name='${f(e)}']`); return n || "top" !== t || (n = document.body), n }, b = function (t) { let { elements: e, selector: n } = t; try { if (!1 === n && !e) return Promise.resolve(); let t = []; if (e) t = Array.from(e); else if (n && (t = h(n, document.body), !t.length)) return console.warn(`[swup] No elements found matching animationSelector \`${n}\``), Promise.resolve(); const r = t.map(t => function (t) { const { type: e, timeout: n, propCount: r } = function (t, e) { const n = window.getComputedStyle(t), r = C(n, `${E}Delay`), o = C(n, `${E}Duration`), i = $(r, o), s = C(n, `${U}Delay`), a = C(n, `${U}Duration`), l = $(s, a); let c = null, h = 0, u = 0; return e === E ? i > 0 && (c = E, h = i, u = o.length) : e === U ? l > 0 && (c = U, h = l, u = a.length) : (h = Math.max(i, l), c = h > 0 ? i > l ? E : U : null, u = c ? c === E ? o.length : a.length : 0), { type: c, timeout: h, propCount: u } }(t); return !(!e || !n) && new Promise(o => { const i = `${e}end`, s = performance.now(); let a = 0; const l = () => { t.removeEventListener(i, c), o() }, c = e => { if (e.target === t) { if (!function (t) { return [`${E}end`, `${U}end`].includes(t.type) }(e)) throw new Error("Not a transition or animation event."); (performance.now() - s) / 1e3 < e.elapsedTime || ++a >= r && l() } }; setTimeout(() => { a < r && l() }, n + 1), t.addEventListener(i, c) }) }(t)); return r.filter(Boolean).length > 0 ? Promise.resolve(Promise.all(r)).then(function () { }) : (n && console.warn(`[swup] No CSS animation duration defined on elements matching \`${n}\``), Promise.resolve()) } catch (t) { return Promise.reject(t) } }, E = "transition", U = "animation"; function C(t, e) { return (t[e] || "").split(", ") } function $(t, e) { for (; t.length < e.length;)t = t.concat(t); return Math.max(...e.map((e, n) => d(e) + d(t[n]))) } const x = function (t) { void 0 === t && (t = {}); try { const o = this, { el: i } = o.visit.trigger; t.referrer = t.referrer || o.currentPageUrl, !1 === t.animate && (o.visit.animation.animate = !1), o.visit.animation.animate || o.classes.clear(); const s = t.history || i?.getAttribute("data-swup-history") || void 0; s && ["push", "replace"].includes(s) && (o.visit.history.action = s); const a = t.animation || i?.getAttribute("data-swup-animation") || void 0; return a && (o.visit.animation.name = a), Promise.resolve(function (i, s) { try { var a = Promise.resolve(o.hooks.call("visit:start")).then(function () { function i() { const t = o.animatePageOut(); return Promise.resolve(Promise.all([s, t])).then(function (t) { let [e] = t; return Promise.resolve(o.renderPage(o.visit.to.url, e)).then(function () { return Promise.resolve(o.animatePageIn()).then(function () { return Promise.resolve(o.hooks.call("visit:end", void 0, () => o.classes.clear())).then(function () { }) }) }) }) } const s = o.hooks.call("page:load", { options: t }, function (t, e) { try { function n(t) { return e.page = t, e.cache = !!r, e.page } const r = o.cache.get(t.to.url); return Promise.resolve(r ? n(r) : Promise.resolve(o.fetchPage(t.to.url, e.options)).then(n)) } catch (i) { return Promise.reject(i) } }); if (!o.visit.history.popstate) { const t = o.visit.to.url + o.visit.to.hash; "replace" === o.visit.history.action || o.visit.to.url === o.currentPageUrl ? r(t) : n(t, { index: o.currentHistoryIndex + 1 }) } o.currentPageUrl = e(); const a = function () { if (o.visit.animation.wait) return Promise.resolve(s).then(function (t) { let { html: e } = t; o.visit.to.html = e }) }(); return a && a.then ? a.then(i) : i() }) } catch (t) { return s(t) } return a && a.then ? a.then(void 0, s) : a }(0, function (t) { t && (console.error(t), o.options.skipPopStateHandling = () => (window.location.href = o.visit.to.url + o.visit.to.hash, !0), window.history.go(-1)) })) } catch (t) { return Promise.reject(t) } }; function A(t, e, n) { if (void 0 === e && (e = {}), void 0 === n && (n = {}), "string" != typeof t) throw new Error("swup.navigate() requires a URL parameter"); if (this.shouldIgnoreVisit(t, { el: n.el, event: n.event })) return void (window.location.href = t); const { url: r, hash: o } = a.fromUrl(t); this.visit = this.createVisit({ ...n, to: r, hash: o }), this.performNavigation(e) } const j = function (t, e) { void 0 === e && (e = {}); try { const n = this; t = a.fromUrl(t).url; const r = { ...n.options.requestHeaders, ...e.headers }; return e = { ...e, headers: r }, Promise.resolve(n.hooks.call("fetch:request", { url: t, options: e }, (t, e) => { let { url: n, options: r } = e; return fetch(n, r) })).then(function (e) { const { status: r, url: o } = e; return Promise.resolve(e.text()).then(function (i) { if (500 === r) throw n.hooks.call("fetch:error", { status: r, response: e, url: o }), new H(`Server error: ${o}`, { status: r, url: o }); if (!i) throw new H(`Empty response: ${o}`, { status: r, url: o }); const { url: s } = a.fromUrl(o), l = { url: s, html: i }; return t === s && n.cache.set(l.url, l), l }) }) } catch (t) { return Promise.reject(t) } }; class H extends Error { constructor(t, e) { super(t), this.url = void 0, this.status = void 0, this.name = "FetchError", this.url = e.url, this.status = e.status } } const L = function () { try { let n; const r = this; function e(e) { return n ? e : Promise.resolve(r.hooks.call("animation:out:start", void 0, e => { r.classes.add("is-changing", "is-leaving", "is-animating"), e.history.popstate && r.classes.add("is-popstate"), e.animation.name && r.classes.add(`to-${t(e.animation.name)}`) })).then(function () { return Promise.resolve(r.hooks.call("animation:out:await", { skip: !1 }, function (t, e) { let { skip: n } = e; try { return n ? Promise.resolve() : Promise.resolve(r.awaitAnimations({ selector: t.animation.selector })).then(function () { }) } catch (t) { return Promise.reject(t) } })).then(function () { return Promise.resolve(r.hooks.call("animation:out:end")).then(function () { }) }) }) } const o = function () { if (!r.visit.animation.animate) return Promise.resolve(r.hooks.call("animation:skip")).then(function () { n = 1 }) }(); return Promise.resolve(o && o.then ? o.then(e) : e(o)) } catch (i) { return Promise.reject(i) } }, T = function (t, e) { let { html: n } = t, { containers: r } = void 0 === e ? this.options : e; const o = (new DOMParser).parseFromString(n, "text/html"), i = o.querySelector("title")?.innerText || ""; return document.title = i, r.map(t => { const e = document.querySelector(t), n = o.querySelector(t); return e && n ? (e.replaceWith(n), !0) : (e || console.warn(`[swup] Container missing in current document: ${t}`), n || console.warn(`[swup] Container missing in incoming document: ${t}`), !1) }).filter(Boolean).length === r.length }, q = function () { const t = { behavior: "auto" }, { target: e, reset: n } = this.visit.scroll, r = e || this.visit.to.hash; let o = !1; return r && (o = this.hooks.callSync("scroll:anchor", { hash: r, options: t }, (t, e) => { let { hash: n, options: r } = e; const o = this.getAnchorElement(n); return o && o.scrollIntoView(r), !!o })), n && !o && (o = this.hooks.callSync("scroll:top", { options: t }, (t, e) => { let { options: n } = e; return window.scrollTo({ top: 0, left: 0, ...n }), !0 })), o }, N = function () { try { const t = this; if (!t.visit.animation.animate) return Promise.resolve(); const e = t.hooks.call("animation:in:await", { skip: !1 }, function (e, n) { let { skip: r } = n; try { return r ? Promise.resolve() : Promise.resolve(t.awaitAnimations({ selector: e.animation.selector })).then(function () { }) } catch (t) { return Promise.reject(t) } }); return Promise.resolve(u()).then(function () { return Promise.resolve(t.hooks.call("animation:in:start", void 0, () => { t.classes.remove("is-animating") })).then(function () { return Promise.resolve(e).then(function () { return Promise.resolve(t.hooks.call("animation:in:end")).then(function () { }) }) }) }) } catch (t) { return Promise.reject(t) } }, R = function (n, o) { try { const i = this, { url: s, html: a } = o; return i.classes.remove("is-leaving"), i.isSameResolvedUrl(e(), n) ? (i.isSameResolvedUrl(e(), s) || (r(s), i.currentPageUrl = e(), i.visit.to.url = i.currentPageUrl), i.visit.animation.animate && i.classes.add("is-rendering"), i.visit.to.html = a, Promise.resolve(i.hooks.call("content:replace", { page: o }, (e, n) => { let { page: r } = n; if (!i.replaceContent(r, { containers: e.containers })) throw new Error("[swup] Container mismatch, aborting"); e.animation.animate && (i.classes.add("is-animating", "is-changing", "is-rendering"), e.animation.name && i.classes.add(`to-${t(e.animation.name)}`)) })).then(function () { return Promise.resolve(i.hooks.call("content:scroll", void 0, () => i.scrollToContent())).then(function () { return Promise.resolve(i.hooks.call("page:view", { url: i.currentPageUrl, title: document.title })).then(function () { i.options.cache || i.cache.clear() }) }) })) : Promise.resolve() } catch (t) { return Promise.reject(t) } }, D = function (t) { var e; if (e = t, e?.isSwupPlugin) { if (t.swup = this, !t._checkRequirements || t._checkRequirements()) return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins } else console.error("Not a swup plugin instance", t) }; function I(t) { const e = this.findPlugin(t); if (e) return e.unmount(), e._afterUnmount && e._afterUnmount(), this.plugins = this.plugins.filter(t => t !== e), this.plugins; console.error("No such plugin", e) } function M(t) { return this.plugins.find(e => e === t || e.name === t || e.name === `Swup${t}`) } function V(t) { if ("function" != typeof this.options.resolveUrl) return console.warn("[swup] options.resolveUrl expects a callback function."), t; const e = this.options.resolveUrl(t); return e && "string" == typeof e ? e.startsWith("//") || e.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e : (console.warn("[swup] options.resolveUrl needs to return a url"), t) } function W(t, e) { return this.resolveUrl(t) === this.resolveUrl(e) } const B = { animateHistoryBrowsing: !1, animationSelector: '[class*="transition-"]', animationScope: "html", cache: !0, containers: ["#swup"], ignoreVisit: function (t, e) { let { el: n } = void 0 === e ? {} : e; return !!n?.closest("[data-no-swup]") }, linkSelector: "a[href]", linkToSelf: "scroll", plugins: [], resolveUrl: t => t, requestHeaders: { "X-Requested-With": "swup", Accept: "text/html, application/xhtml+xml" }, skipPopStateHandling: t => "swup" !== t.state?.source }; return class { constructor(t) { void 0 === t && (t = {}), this.version = "4.2.0", this.options = void 0, this.defaults = B, this.plugins = [], this.visit = void 0, this.cache = void 0, this.hooks = void 0, this.classes = void 0, this.currentPageUrl = e(), this.currentHistoryIndex = 1, this.clickDelegate = void 0, this.use = D, this.unuse = I, this.findPlugin = M, this.log = () => { }, this.navigate = A, this.performNavigation = x, this.createVisit = v, this.delegateEvent = s, this.fetchPage = j, this.awaitAnimations = b, this.renderPage = R, this.replaceContent = T, this.animatePageIn = N, this.animatePageOut = L, this.scrollToContent = q, this.getAnchorElement = S, this.getCurrentUrl = e, this.resolveUrl = V, this.isSameResolvedUrl = W, this.options = { ...this.defaults, ...t }, this.handleLinkClick = this.handleLinkClick.bind(this), this.handlePopState = this.handlePopState.bind(this), this.cache = new l(this), this.classes = new p(this), this.hooks = new k(this), this.visit = this.createVisit({ to: "" }), this.checkRequirements() && this.enable() } checkRequirements() { return "undefined" != typeof Promise || (console.warn("Promise is not supported"), !1) } enable() { try { const t = this, { linkSelector: e } = t.options; return t.clickDelegate = t.delegateEvent(e, "click", t.handleLinkClick), window.addEventListener("popstate", t.handlePopState), t.options.plugins.forEach(e => t.use(e)), r(null, { index: 1 }), Promise.resolve(u()).then(function () { return Promise.resolve(t.hooks.call("enable", void 0, () => { document.documentElement.classList.add("swup-enabled") })).then(function () { }) }) } catch (t) { return Promise.reject(t) } } destroy() { try { const t = this; return t.clickDelegate.destroy(), window.removeEventListener("popstate", t.handlePopState), t.cache.clear(), t.options.plugins.forEach(e => t.unuse(e)), Promise.resolve(t.hooks.call("disable", void 0, () => { document.documentElement.classList.remove("swup-enabled") })).then(function () { t.hooks.clear() }) } catch (t) { return Promise.reject(t) } } shouldIgnoreVisit(t, e) { let { el: n, event: r } = void 0 === e ? {} : e; const { origin: o, url: i, hash: s } = a.fromUrl(t); return o !== window.location.origin || !(!n || !this.triggerWillOpenNewWindow(n)) || !!this.options.ignoreVisit(i + s, { el: n, event: r }) } handleLinkClick(t) { const e = t.delegateTarget, { href: n, url: o, hash: i } = a.fromElement(e); this.shouldIgnoreVisit(n, { el: e, event: t }) || (this.visit = this.createVisit({ to: o, hash: i, el: e, event: t }), t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? this.hooks.call("link:newtab", { href: n }) : 0 === t.button && this.hooks.callSync("link:click", { el: e, event: t }, () => { const e = this.visit.from.url ?? ""; t.preventDefault(), o && o !== e ? this.isSameResolvedUrl(o, e) || this.performNavigation() : i ? this.hooks.callSync("link:anchor", { hash: i }, () => { r(o + i), this.scrollToContent() }) : this.hooks.callSync("link:self", void 0, () => "navigate" === this.options.linkToSelf ? this.performNavigation() : this.scrollToContent()) })) } handlePopState(t) { const n = t.state?.url ?? location.href; if (this.options.skipPopStateHandling(t)) return; if (this.isSameResolvedUrl(e(), this.currentPageUrl)) return; const { url: r, hash: o } = a.fromUrl(n); this.visit = this.createVisit({ to: r, hash: o, event: t, animate: this.options.animateHistoryBrowsing, resetScroll: this.options.animateHistoryBrowsing }), this.visit.history.popstate = !0; const i = Number(t.state?.index); i && (this.visit.history.direction = i - this.currentHistoryIndex > 0 ? "forwards" : "backwards"), this.hooks.callSync("history:popstate", { event: t }, () => { this.performNavigation() }) } triggerWillOpenNewWindow(t) { return !!t.matches('[download], [target="_blank"]') } } });
//# sourceMappingURL=Swup.umd.js.map