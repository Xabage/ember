"use strict" define("league-table/app", ["exports", "league-table/resolver", "ember-load-initializers", "league-table/config/environment"], function(e, t, n, l) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ) var r=Ember.Application.extend( {
        modulePrefix: l.default.modulePrefix, podModulePrefix: l.default.podModulePrefix, Resolver: t.default
    }
    );
    (0, n.default)(r, l.default.modulePrefix), e.default=r
}

),
define("league-table/components/copy-button", ["exports", "ember-cli-clipboard/components/copy-button"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    )
}

),
define("league-table/components/etw/module-style-detail", ["exports", "ember-cli-tailwind/utils/classes-for-module-style"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.Component.extend( {
        etwTailwindStyleguide:Ember.inject.service(), moduleStyle:Ember.computed.reads("etwTailwindStyleguide.selectedModuleStyle"), activeResponsiveClass:"all", activeState:"none", detailStyles:Ember.computed("moduleStyle", "activeResponsiveClass", "activeState", function() {
            var e=this.moduleStyle, n=this.activeResponsiveClass, l="all"===n?"":n+":", r=this.activeState, a="none"===r?"":r+":" return(0, t.default)(e).map(function(e) {
                return""+l+a+e
            }
            )
        }
        ), actions: {
            highlightStyle:function(e) {
                var t=this this.set("highlightedStyle", e), Ember.run.later(function() {
                    t.set("highlightedStyle", null)
                }
                , 1500)
            }
        }
    }
    )
}

),
define("league-table/components/etw/module-style-example", ["exports", "ember-cli-tailwind/utils/classes-for-module-style"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.Component.extend( {
        tagName:"", etwTailwindStyleguide:Ember.inject.service(), moduleStyle:null, classesForModuleStyle:Ember.computed("moduleStyle", function() {
            return(0, t.default)(this.moduleStyle)
        }
        ), actions: {
            selectModuleStyle:function() {
                this.etwTailwindStyleguide.set("selectedModuleStyle", this.moduleStyle)
            }
        }
    }
    )
}

),
define("league-table/components/league-table", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.Component.extend( {
        store:Ember.inject.service(), teams:Ember.computed(function() {
            return this.store.peekAll("team")
        }
        )
    }
    )
}

),
define("league-table/components/results", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.Component.extend( {}
    )
}

),
define("league-table/controllers/application-tailwind", ["exports", "league-table/tailwind/config/colors", "league-table/tailwind/config/screens", "league-table/tailwind/config/fonts", "league-table/tailwind/config/text-sizes", "league-table/tailwind/config/font-weights", "league-table/tailwind/config/line-height", "league-table/tailwind/config/letter-spacing", "league-table/tailwind/config/border-widths", "league-table/tailwind/config/border-radius", "league-table/tailwind/config/width", "league-table/tailwind/config/height", "league-table/tailwind/config/min-width", "league-table/tailwind/config/min-height", "league-table/tailwind/config/max-width", "league-table/tailwind/config/max-height", "league-table/tailwind/config/padding", "league-table/tailwind/config/margin", "league-table/tailwind/config/negative-margin", "league-table/tailwind/config/shadows", "league-table/tailwind/config/z-index", "league-table/tailwind/config/opacity", "league-table/tailwind/config/svg-fill", "league-table/tailwind/config/svg-stroke"], function(e, t, n, l, r, a, o, u, i, s, d, f, c, p, m, b, g, h, y, w, v, x, j, P) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ) var O= {
        colors: t.default, screens: n.default, fonts: l.default, textSizes: r.default, fontWeights: a.default, leading: o.default, tracking: u.default, borderWidths: i.default, borderRadius: s.default, width: d.default, height: f.default, minWidth: c.default, minHeight: p.default, maxWidth: m.default, maxHeight: b.default, padding: g.default, margin: h.default, negativeMargin: y.default, shadows: w.default, zIndex: v.default, opacity: x.default, svgFill: j.default, svgStroke: P.default
    }
    e.default=Ember.Controller.extend( {
        moduleStyles:Ember.computed(function() {
            return Object.keys(O).reduce(function(e, t) {
                var n=O[t] return e[t]=Object.keys(n).map(function(e) {
                    return {
                        module: Ember.String.dasherize(t), name: e, value: n[e]
                    }
                }
                ), e
            }
            , {}
            )
        }
        )
    }
    )
}

),
define("league-table/controllers/application", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.Controller.extend( {
        gameSimulator: Ember.inject.service()
    }
    )
}

),
define("league-table/controllers/index", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.Controller.extend( {}
    )
}

),
define("league-table/helpers/abs", ["exports", "ember-math-helpers/helpers/abs"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "abs", {
        enumerable:!0, get:function() {
            return t.abs
        }
    }
    )
}

),
define("league-table/helpers/acos", ["exports", "ember-math-helpers/helpers/acos"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "acos", {
        enumerable:!0, get:function() {
            return t.acos
        }
    }
    )
}

),
define("league-table/helpers/acosh", ["exports", "ember-math-helpers/helpers/acosh"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "acosh", {
        enumerable:!0, get:function() {
            return t.acosh
        }
    }
    )
}

),
define("league-table/helpers/add", ["exports", "ember-math-helpers/helpers/add"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "add", {
        enumerable:!0, get:function() {
            return t.add
        }
    }
    )
}

),
define("league-table/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "and", {
        enumerable:!0, get:function() {
            return t.and
        }
    }
    )
}

),
define("league-table/helpers/app-version", ["exports", "league-table/config/environment", "ember-cli-app-version/utils/regexp"], function(e, t, n) {
    function l(e) {
        var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]: {}
        , r=t.default.APP.version, a=l.versionOnly||l.hideSha, o=l.shaOnly||l.hideVersion, u=null return a&&(l.showExtended&&(u=r.match(n.versionExtendedRegExp)), u||(u=r.match(n.versionRegExp))), o&&(u=r.match(n.shaRegExp)), u?u[0]: r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.appVersion=l, e.default=Ember.Helper.helper(l)
}

),
define("league-table/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "append", {
        enumerable:!0, get:function() {
            return t.append
        }
    }
    )
}

),
define("league-table/helpers/array", ["exports", "ember-composable-helpers/helpers/array"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "array", {
        enumerable:!0, get:function() {
            return t.array
        }
    }
    )
}

),
define("league-table/helpers/asin", ["exports", "ember-math-helpers/helpers/asin"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "asin", {
        enumerable:!0, get:function() {
            return t.asin
        }
    }
    )
}

),
define("league-table/helpers/asinh", ["exports", "ember-math-helpers/helpers/asinh"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "asinh", {
        enumerable:!0, get:function() {
            return t.asinh
        }
    }
    )
}

),
define("league-table/helpers/atan", ["exports", "ember-math-helpers/helpers/atan"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "atan", {
        enumerable:!0, get:function() {
            return t.atan
        }
    }
    )
}

),
define("league-table/helpers/atan2", ["exports", "ember-math-helpers/helpers/atan2"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "atan2", {
        enumerable:!0, get:function() {
            return t.atan2
        }
    }
    )
}

),
define("league-table/helpers/atanh", ["exports", "ember-math-helpers/helpers/atanh"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "atanh", {
        enumerable:!0, get:function() {
            return t.atanh
        }
    }
    )
}

),
define("league-table/helpers/cbrt", ["exports", "ember-math-helpers/helpers/cbrt"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "cbrt", {
        enumerable:!0, get:function() {
            return t.cbrt
        }
    }
    )
}

),
define("league-table/helpers/ceil", ["exports", "ember-math-helpers/helpers/ceil"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "ceil", {
        enumerable:!0, get:function() {
            return t.ceil
        }
    }
    )
}

),
define("league-table/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "chunk", {
        enumerable:!0, get:function() {
            return t.chunk
        }
    }
    )
}

),
define("league-table/helpers/clz32", ["exports", "ember-math-helpers/helpers/clz32"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "clz32", {
        enumerable:!0, get:function() {
            return t.clz32
        }
    }
    )
}

),
define("league-table/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "compact", {
        enumerable:!0, get:function() {
            return t.compact
        }
    }
    )
}

),
define("league-table/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "compute", {
        enumerable:!0, get:function() {
            return t.compute
        }
    }
    )
}

),
define("league-table/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "contains", {
        enumerable:!0, get:function() {
            return t.contains
        }
    }
    )
}

),
define("league-table/helpers/cos", ["exports", "ember-math-helpers/helpers/cos"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "cos", {
        enumerable:!0, get:function() {
            return t.cos
        }
    }
    )
}

) define("league-table/helpers/cosh", ["exports", "ember-math-helpers/helpers/cosh"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "cosh", {
        enumerable:!0, get:function() {
            return t.cosh
        }
    }
    )
}

),
define("league-table/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "dec", {
        enumerable:!0, get:function() {
            return t.dec
        }
    }
    )
}

),
define("league-table/helpers/div", ["exports", "ember-math-helpers/helpers/div"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "div", {
        enumerable:!0, get:function() {
            return t.div
        }
    }
    )
}

),
define("league-table/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "drop", {
        enumerable:!0, get:function() {
            return t.drop
        }
    }
    )
}

),
define("league-table/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "equal", {
        enumerable:!0, get:function() {
            return t.equal
        }
    }
    )
}

),
define("league-table/helpers/exp", ["exports", "ember-math-helpers/helpers/exp"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "exp", {
        enumerable:!0, get:function() {
            return t.exp
        }
    }
    )
}

),
define("league-table/helpers/expm1", ["exports", "ember-math-helpers/helpers/expm1"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "expm1", {
        enumerable:!0, get:function() {
            return t.expm1
        }
    }
    )
}

),
define("league-table/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "filterBy", {
        enumerable:!0, get:function() {
            return t.filterBy
        }
    }
    )
}

),
define("league-table/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "filter", {
        enumerable:!0, get:function() {
            return t.filter
        }
    }
    )
}

),
define("league-table/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "findBy", {
        enumerable:!0, get:function() {
            return t.findBy
        }
    }
    )
}

),
define("league-table/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "flatten", {
        enumerable:!0, get:function() {
            return t.flatten
        }
    }
    )
}

),
define("league-table/helpers/floor", ["exports", "ember-math-helpers/helpers/floor"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "floor", {
        enumerable:!0, get:function() {
            return t.floor
        }
    }
    )
}

),
define("league-table/helpers/fround", ["exports", "ember-math-helpers/helpers/fround"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "fround", {
        enumerable:!0, get:function() {
            return t.fround
        }
    }
    )
}

),
define("league-table/helpers/gcd", ["exports", "ember-math-helpers/helpers/gcd"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "gcd", {
        enumerable:!0, get:function() {
            return t.gcd
        }
    }
    )
}

),
define("league-table/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "groupBy", {
        enumerable:!0, get:function() {
            return t.groupBy
        }
    }
    )
}

),
define("league-table/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "gt", {
        enumerable:!0, get:function() {
            return t.gt
        }
    }
    )
}

),
define("league-table/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "gte", {
        enumerable:!0, get:function() {
            return t.gte
        }
    }
    )
}

),
define("league-table/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "hasNext", {
        enumerable:!0, get:function() {
            return t.hasNext
        }
    }
    )
}

),
define("league-table/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "hasPrevious", {
        enumerable:!0, get:function() {
            return t.hasPrevious
        }
    }
    )
}

),
define("league-table/helpers/hypot", ["exports", "ember-math-helpers/helpers/hypot"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "hypot", {
        enumerable:!0, get:function() {
            return t.hypot
        }
    }
    )
}

),
define("league-table/helpers/imul", ["exports", "ember-math-helpers/helpers/imul"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "imul", {
        enumerable:!0, get:function() {
            return t.imul
        }
    }
    )
}

),
define("league-table/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "inc", {
        enumerable:!0, get:function() {
            return t.inc
        }
    }
    )
}

),
define("league-table/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "intersect", {
        enumerable:!0, get:function() {
            return t.intersect
        }
    }
    )
}

),
define("league-table/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "invoke", {
        enumerable:!0, get:function() {
            return t.invoke
        }
    }
    )
}

),
define("league-table/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "isArray", {
        enumerable:!0, get:function() {
            return t.isArray
        }
    }
    )
}

),
define("league-table/helpers/is-clipboard-supported", ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "isClipboardSupported", {
        enumerable:!0, get:function() {
            return t.isClipboardSupported
        }
    }
    )
}

),
define("league-table/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    )
}

),
define("league-table/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "isEqual", {
        enumerable:!0, get:function() {
            return t.isEqual
        }
    }
    )
}

),
define("league-table/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "join", {
        enumerable:!0, get:function() {
            return t.join
        }
    }
    )
}

),
define("league-table/helpers/log-e", ["exports", "ember-math-helpers/helpers/log-e"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "logE", {
        enumerable:!0, get:function() {
            return t.logE
        }
    }
    )
}

) define("league-table/helpers/log10", ["exports", "ember-math-helpers/helpers/log10"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "log10", {
        enumerable:!0, get:function() {
            return t.log10
        }
    }
    )
}

),
define("league-table/helpers/log1p", ["exports", "ember-math-helpers/helpers/log1p"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "log1p", {
        enumerable:!0, get:function() {
            return t.log1p
        }
    }
    )
}

),
define("league-table/helpers/log2", ["exports", "ember-math-helpers/helpers/log2"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "log2", {
        enumerable:!0, get:function() {
            return t.log2
        }
    }
    )
}

),
define("league-table/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "lt", {
        enumerable:!0, get:function() {
            return t.lt
        }
    }
    )
}

),
define("league-table/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "lte", {
        enumerable:!0, get:function() {
            return t.lte
        }
    }
    )
}

),
define("league-table/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "mapBy", {
        enumerable:!0, get:function() {
            return t.mapBy
        }
    }
    )
}

),
define("league-table/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "map", {
        enumerable:!0, get:function() {
            return t.map
        }
    }
    )
}

),
define("league-table/helpers/max", ["exports", "ember-math-helpers/helpers/max"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "max", {
        enumerable:!0, get:function() {
            return t.max
        }
    }
    )
}

),
define("league-table/helpers/min", ["exports", "ember-math-helpers/helpers/min"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "min", {
        enumerable:!0, get:function() {
            return t.min
        }
    }
    )
}

),
define("league-table/helpers/mod", ["exports", "ember-math-helpers/helpers/mod"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "mod", {
        enumerable:!0, get:function() {
            return t.mod
        }
    }
    )
}

),
define("league-table/helpers/mult", ["exports", "ember-math-helpers/helpers/mult"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "mult", {
        enumerable:!0, get:function() {
            return t.mult
        }
    }
    )
}

),
define("league-table/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "next", {
        enumerable:!0, get:function() {
            return t.next
        }
    }
    )
}

),
define("league-table/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "notEq", {
        enumerable:!0, get:function() {
            return t.notEq
        }
    }
    )
}

),
define("league-table/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "not", {
        enumerable:!0, get:function() {
            return t.not
        }
    }
    )
}

),
define("league-table/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "objectAt", {
        enumerable:!0, get:function() {
            return t.objectAt
        }
    }
    )
}

),
define("league-table/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "optional", {
        enumerable:!0, get:function() {
            return t.optional
        }
    }
    )
}

),
define("league-table/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "or", {
        enumerable:!0, get:function() {
            return t.or
        }
    }
    )
}

),
define("league-table/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    )
}

),
define("league-table/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "pipe", {
        enumerable:!0, get:function() {
            return t.pipe
        }
    }
    )
}

),
define("league-table/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=t.default
}

),
define("league-table/helpers/pow", ["exports", "ember-math-helpers/helpers/pow"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "pow", {
        enumerable:!0, get:function() {
            return t.pow
        }
    }
    )
}

),
define("league-table/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "previous", {
        enumerable:!0, get:function() {
            return t.previous
        }
    }
    )
}

),
define("league-table/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "queue", {
        enumerable:!0, get:function() {
            return t.queue
        }
    }
    )
}

),
define("league-table/helpers/random", ["exports", "ember-math-helpers/helpers/random"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "random", {
        enumerable:!0, get:function() {
            return t.random
        }
    }
    )
}

),
define("league-table/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "range", {
        enumerable:!0, get:function() {
            return t.range
        }
    }
    )
}

),
define("league-table/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "reduce", {
        enumerable:!0, get:function() {
            return t.reduce
        }
    }
    )
}

),
define("league-table/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "rejectBy", {
        enumerable:!0, get:function() {
            return t.rejectBy
        }
    }
    )
}

),
define("league-table/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "repeat", {
        enumerable:!0, get:function() {
            return t.repeat
        }
    }
    )
}

),
define("league-table/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "reverse", {
        enumerable:!0, get:function() {
            return t.reverse
        }
    }
    )
}

),
define("league-table/helpers/round", ["exports", "ember-math-helpers/helpers/round"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "round", {
        enumerable:!0, get:function() {
            return t.round
        }
    }
    )
}

) define("league-table/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "shuffle", {
        enumerable:!0, get:function() {
            return t.shuffle
        }
    }
    )
}

),
define("league-table/helpers/sign", ["exports", "ember-math-helpers/helpers/sign"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "sign", {
        enumerable:!0, get:function() {
            return t.sign
        }
    }
    )
}

),
define("league-table/helpers/sin", ["exports", "ember-math-helpers/helpers/sin"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "sin", {
        enumerable:!0, get:function() {
            return t.sin
        }
    }
    )
}

),
define("league-table/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=t.default
}

),
define("league-table/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "slice", {
        enumerable:!0, get:function() {
            return t.slice
        }
    }
    )
}

),
define("league-table/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "sortBy", {
        enumerable:!0, get:function() {
            return t.sortBy
        }
    }
    )
}

),
define("league-table/helpers/sqrt", ["exports", "ember-math-helpers/helpers/sqrt"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "sqrt", {
        enumerable:!0, get:function() {
            return t.sqrt
        }
    }
    )
}

),
define("league-table/helpers/sub", ["exports", "ember-math-helpers/helpers/sub"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "sub", {
        enumerable:!0, get:function() {
            return t.sub
        }
    }
    )
}

),
define("league-table/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "take", {
        enumerable:!0, get:function() {
            return t.take
        }
    }
    )
}

),
define("league-table/helpers/tan", ["exports", "ember-math-helpers/helpers/tan"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "tan", {
        enumerable:!0, get:function() {
            return t.tan
        }
    }
    )
}

),
define("league-table/helpers/tanh", ["exports", "ember-math-helpers/helpers/tanh"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "tanh", {
        enumerable:!0, get:function() {
            return t.tanh
        }
    }
    )
}

),
define("league-table/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    )
}

),
define("league-table/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "toggle", {
        enumerable:!0, get:function() {
            return t.toggle
        }
    }
    )
}

),
define("league-table/helpers/trunc", ["exports", "ember-math-helpers/helpers/trunc"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "trunc", {
        enumerable:!0, get:function() {
            return t.trunc
        }
    }
    )
}

),
define("league-table/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "union", {
        enumerable:!0, get:function() {
            return t.union
        }
    }
    )
}

),
define("league-table/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "without", {
        enumerable:!0, get:function() {
            return t.without
        }
    }
    )
}

),
define("league-table/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    ), Object.defineProperty(e, "xor", {
        enumerable:!0, get:function() {
            return t.xor
        }
    }
    )
}

),
define("league-table/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "league-table/config/environment"], function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ) var l=void 0, r=void 0 n.default.APP&&(l=n.default.APP.name, r=n.default.APP.version), e.default= {
        name: "App Version", initialize: (0, t.default)(l, r)
    }
}

),
define("league-table/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        name:"container-debug-adapter", initialize:function() {
            var e=arguments[1]||arguments[0] e.register("container-debug-adapter:main", t.default), e.inject("container-debug-adapter:main", "namespace", "application:main")
        }
    }
}

),
define("league-table/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        name: "ember-data", initialize: t.default
    }
}

),
define("league-table/initializers/export-application-global", ["exports", "league-table/config/environment"], function(e, t) {
    function n() {
        var e=arguments[1]||arguments[0] if(!1!==t.default.exportApplicationGlobal) {
            var n if("undefined"!=typeof window)n=window else if("undefined"!=typeof global)n=global else {
                if("undefined"==typeof self)return n=self
            }
            var l, r=t.default.exportApplicationGlobal l="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix), n[l]||(n[l]=e, e.reopen( {
                willDestroy:function() {
                    this._super.apply(this, arguments), delete n[l]
                }
            }
            ))
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.initialize=n, e.default= {
        name: "export-application-global", initialize: n
    }
}

),
define("league-table/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        name: "ember-data", initialize: t.default
    }
}

),
define("league-table/models/game", ["exports", "ember-data"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=t.default.Model.extend( {
        homeTeam:t.default.belongsTo("team", {
            inverse: "homeGames"
        }
        ), awayTeam:t.default.belongsTo("team", {
            inverse: "awayGames"
        }
        ), homeGoals:t.default.attr("number"), awayGoals:t.default.attr("number"), playedOn:t.default.attr("date"), isDraw:Ember.computed("homeGoals", "awayGoals", function() {
            return this.homeGoals===this.awayGoals
        }
        ), isHomeWin:Ember.computed("homeGoals", "awayGoals", function() {
            return this.homeGoals>this.awayGoals
        }
        ), isAwayWin:Ember.computed("homeGoals", "awayGoals", function() {
            return this.homeGoals<this.awayGoals
        }
        ), winningTeam:Ember.computed("isHomeWin", "isAwayWin", "homeTeam", "awayTeam", function() {
            return this.isHomeWin?this.homeTeam: this.isAwayWin?this.awayTeam: void 0
        }
        )
    }
    )
}

),
define("league-table/models/team", ["exports", "ember-data"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=t.default.Model.extend( {
        name:t.default.attr("string"), homeGames:t.default.hasMany("game", {
            inverse: "homeTeam"
        }
        ), awayGames:t.default.hasMany("game", {
            inverse: "awayTeam"
        }
        ), games:Ember.computed.union("homeGames", "awayGames"), gamesDrawn:Ember.computed.filterBy("games", "isDraw"), homeGamesWon:Ember.computed.filterBy("homeGames", "isHomeWin"), awayGamesWon:Ember.computed.filterBy("awayGames", "isAwayWin"), gamesWon:Ember.computed.union("homeGamesWon", "awayGamesWon"), homeGamesLost:Ember.computed.filterBy("homeGames", "isAwayWin"), awayGamesLost:Ember.computed.filterBy("awayGames", "isHomeWin"), gamesLost:Ember.computed.union("homeGamesLost", "awayGamesLost"), points:Ember.computed("gamesWon.length", "gamesLost.length", "gamesDrawn.length", function() {
            return 3*this.gamesWon.length+this.gamesDrawn.length
        }
        ), homeGoalsScoredArray:Ember.computed.mapBy("homeGames", "homeGoals"), homeGoalsScored:Ember.computed.sum("homeGoalsScoredArray"), awayGoalsScoredArray:Ember.computed.mapBy("awayGames", "awayGoals"), awayGoalsScored:Ember.computed.sum("awayGoalsScoredArray"), goalsScored:Ember.computed("homeGoalsScored", "awayGoalsScored", function() {
            return this.homeGoalsScored+this.awayGoalsScored
        }
        ), homeGoalsConcededArray:Ember.computed.mapBy("homeGames", "awayGoals"), homeGoalsConceded:Ember.computed.sum("homeGoalsConcededArray"), awayGoalsConcededArray:Ember.computed.mapBy("awayGames", "homeGoals"), awayGoalsConceded:Ember.computed.sum("awayGoalsConcededArray"), goalsConceded:Ember.computed("homeGoalsConceded", "awayGoalsConceded", function() {
            return this.homeGoalsConceded+this.awayGoalsConceded
        }
        ), goalDifference:Ember.computed("goalsScored", "goalsConceded", function() {
            return this.goalsScored-this.goalsConceded
        }
        )
    }
    )
}

),
define("league-table/resolver", ["exports", "ember-resolver"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=t.default
}

),
define("league-table/router", ["exports", "league-table/config/environment"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ) var n=Ember.Router.extend( {
        location: t.default.locationType, rootURL: t.default.rootURL
    }
    ) n.map(function() {}
    ), e.default=n
}

),
define("league-table/services/ajax", ["exports", "ember-ajax/services/ajax"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), Object.defineProperty(e, "default", {
        enumerable:!0, get:function() {
            return t.default
        }
    }
    )
}

),
define("league-table/services/etw-tailwind-styleguide", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.Service.extend( {}
    )
}

),
define("league-table/services/game-simulator", ["exports", "ember-composable-helpers/helpers/shuffle"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ) var n=["Liverpool", "Chelsea", "Manchester City", "Arsenal", "Tottenham", "Bournemouth", "Watford", "Manchester United", "Everton", "Wolves", "Brighton", "Leicester", "West Ham", "Crystal Palace", "Burnley", "Southampton", "Cardiff", "Fulham", "Newcastle", "Huddersfield"] e.default=Ember.Service.extend( {
        store:Ember.inject.service(), games:Ember.computed(function() {
            return this.store.peekAll("game")
        }
        ), init:function() {
            this._super.apply(this, arguments), this.seedTeams(), Ember.run.later(this, this.simulateGame, 0)
        }
        , simulateGame:function() {
            var e=this.store.peekAll("team"), n=(0, t.shuffle)(e), l=n[0], r=n[1], a=this._getRandomScore(4), o=this._getRandomScore(3) this.store.createRecord("game", {
                homeTeam: l, awayTeam: r, homeGoals: a, awayGoals: o, playedOn: new Date
            }
            ), this.store.peekAll("game").length<380&&Ember.run.later(this, this.simulateGame, 0)
        }
        , seedTeams:function() {
            for(var e=0;
            e<n.length;
            e++)this.store.createRecord("team", {
                id: e, name: n[e]
            }
            )
        }
        , _getRandomScore:function(e) {
            return Math.round(Math.random()*e)
        }
    }
    )
}

),
define("league-table/tailwind/config/background-colors", ["exports", "league-table/tailwind/config/colors"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=t.default
}

) define("league-table/tailwind/config/background-size", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        auto: "auto", cover: "cover", contain: "contain"
    }
}

),
define("league-table/tailwind/config/border-colors", ["exports", "league-table/tailwind/config/colors"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Object.assign( {
        default: t.default["grey-light"]
    }
    , t.default)
}

),
define("league-table/tailwind/config/border-radius", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        none: "0", sm: ".125rem", default: ".25rem", lg: ".5rem", full: "9999px"
    }
}

),
define("league-table/tailwind/config/border-widths", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        default: "1px", 0: "0", 1: "1px", 2: "2px", 4: "4px", 8: "8px"
    }
}

),
define("league-table/tailwind/config/colors", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        transparent: "transparent", black: "#22292f", "grey-darkest": "#3d4852", "grey-darker": "#606f7b", "grey-dark": "#8795a1", grey: "#b8c2cc", "grey-light": "#dae1e7", "grey-lighter": "#f1f5f8", "grey-lightest": "#f8fafc", white: "#ffffff", "red-darkest": "#3b0d0c", "red-darker": "#621b18", "red-dark": "#cc1f1a", red: "#e3342f", "red-light": "#ef5753", "red-lighter": "#f9acaa", "red-lightest": "#fcebea", "orange-darkest": "#462a16", "orange-darker": "#613b1f", "orange-dark": "#de751f", orange: "#f6993f", "orange-light": "#faad63", "orange-lighter": "#fcd9b6", "orange-lightest": "#fff5eb", "yellow-darkest": "#453411", "yellow-darker": "#684f1d", "yellow-dark": "#f2d024", yellow: "#ffed4a", "yellow-light": "#fff382", "yellow-lighter": "#fff9c2", "yellow-lightest": "#fcfbeb", "green-darkest": "#0f2f21", "green-darker": "#1a4731", "green-dark": "#1f9d55", green: "#38c172", "green-light": "#51d88a", "green-lighter": "#a2f5bf", "green-lightest": "#e3fcec", "teal-darkest": "#0d3331", "teal-darker": "#20504f", "teal-dark": "#38a89d", teal: "#4dc0b5", "teal-light": "#64d5ca", "teal-lighter": "#a0f0ed", "teal-lightest": "#e8fffe", "blue-darkest": "#12283a", "blue-darker": "#1c3d5a", "blue-dark": "#2779bd", blue: "#3490dc", "blue-light": "#6cb2eb", "blue-lighter": "#bcdefa", "blue-lightest": "#eff8ff", "indigo-darkest": "#191e38", "indigo-darker": "#2f365f", "indigo-dark": "#5661b3", indigo: "#6574cd", "indigo-light": "#7886d7", "indigo-lighter": "#b2b7ff", "indigo-lightest": "#e6e8ff", "purple-darkest": "#21183c", "purple-darker": "#382b5f", "purple-dark": "#794acf", purple: "#9561e2", "purple-light": "#a779e9", "purple-lighter": "#d6bbfc", "purple-lightest": "#f3ebff", "pink-darkest": "#451225", "pink-darker": "#6f213f", "pink-dark": "#eb5286", pink: "#f66d9b", "pink-light": "#fa7ea8", "pink-lighter": "#ffbbca", "pink-lightest": "#ffebef"
    }
}

),
define("league-table/tailwind/config/font-weights", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        hairline: 100, thin: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900
    }
}

),
define("league-table/tailwind/config/fonts", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        sans: ["system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"], serif: ["Constantia", "Lucida Bright", "Lucidabright", "Lucida Serif", "Lucida", "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", "Georgia", "serif"], mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    }
}

),
define("league-table/tailwind/config/height", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        auto: "auto", px: "1px", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem", 24: "6rem", 32: "8rem", 48: "12rem", 64: "16rem", full: "100%", screen: "100vh"
    }
}

),
define("league-table/tailwind/config/letter-spacing", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        tight: "-0.05em", normal: "0", wide: "0.05em"
    }
}

),
define("league-table/tailwind/config/line-height", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        none: 1, tight: 1.25, normal: 1.5, loose: 2
    }
}

),
define("league-table/tailwind/config/margin", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        auto: "auto", px: "1px", 0: "0", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem", 20: "5rem", 24: "6rem", 32: "8rem"
    }
}

),
define("league-table/tailwind/config/max-height", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        full: "100%", screen: "100vh"
    }
}

),
define("league-table/tailwind/config/max-width", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        xs: "20rem", sm: "30rem", md: "40rem", lg: "50rem", xl: "60rem", "2xl": "70rem", "3xl": "80rem", "4xl": "90rem", "5xl": "100rem", full: "100%"
    }
}

),
define("league-table/tailwind/config/min-height", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        0: "0", full: "100%", screen: "100vh"
    }
}

),
define("league-table/tailwind/config/min-width", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        0: "0", full: "100%"
    }
}

),
define("league-table/tailwind/config/negative-margin", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        px: "1px", 0: "0", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem", 20: "5rem", 24: "6rem", 32: "8rem"
    }
}

),
define("league-table/tailwind/config/opacity", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        0: "0", 25: ".25", 50: ".5", 75: ".75", 100: "1"
    }
}

),
define("league-table/tailwind/config/padding", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        px: "1px", 0: "0", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem", 20: "5rem", 24: "6rem", 32: "8rem"
    }
}

),
define("league-table/tailwind/config/screens", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        sm: "576px", md: "768px", lg: "992px", xl: "1200px"
    }
}

),
define("league-table/tailwind/config/shadows", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        default: "0 2px 4px 0 rgba(0,0,0,0.10)", md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)", lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)", outline: "0 0 0 3px rgba(52,144,220,0.5)", none: "none"
    }
}

),
define("league-table/tailwind/config/svg-fill", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        current: "currentColor"
    }
}

),
define("league-table/tailwind/config/svg-stroke", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        current: "currentColor"
    }
}

),
define("league-table/tailwind/config/tailwind", ["exports", "tailwindcss/plugins/container", "league-table/tailwind/config/colors", "league-table/tailwind/config/screens", "league-table/tailwind/config/fonts", "league-table/tailwind/config/text-sizes", "league-table/tailwind/config/font-weights", "league-table/tailwind/config/line-height", "league-table/tailwind/config/letter-spacing", "league-table/tailwind/config/text-colors", "league-table/tailwind/config/background-colors", "league-table/tailwind/config/background-size", "league-table/tailwind/config/border-widths", "league-table/tailwind/config/border-colors", "league-table/tailwind/config/border-radius", "league-table/tailwind/config/width", "league-table/tailwind/config/height", "league-table/tailwind/config/min-width", "league-table/tailwind/config/min-height", "league-table/tailwind/config/max-width", "league-table/tailwind/config/max-height", "league-table/tailwind/config/padding", "league-table/tailwind/config/margin", "league-table/tailwind/config/negative-margin", "league-table/tailwind/config/shadows", "league-table/tailwind/config/z-index", "league-table/tailwind/config/opacity", "league-table/tailwind/config/svg-fill", "league-table/tailwind/config/svg-stroke"], function(e, t, n, l, r, a, o, u, i, s, d, f, c, p, m, b, g, h, y, w, v, x, j, P, O, _, M, S, k) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        colors:n.default, screens:l.default, fonts:r.default, textSizes:a.default, fontWeights:o.default, leading:u.default, tracking:i.default, textColors:s.default, backgroundColors:d.default, backgroundSize:f.default, borderWidths:c.default, borderColors:p.default, borderRadius:m.default, width:b.default, height:g.default, minWidth:h.default, minHeight:y.default, maxWidth:w.default, maxHeight:v.default, padding:x.default, margin:j.default, negativeMargin:P.default, shadows:O.default, zIndex:_.default, opacity:M.default, svgFill:S.default, svgStroke:k.default, modules: {
            appearance: ["responsive"], backgroundAttachment: ["responsive"], backgroundColors: ["responsive", "hover", "focus"], backgroundPosition: ["responsive"], backgroundRepeat: ["responsive"], backgroundSize: ["responsive"], borderCollapse: [], borderColors: ["responsive", "hover", "focus"], borderRadius: ["responsive"], borderStyle: ["responsive"], borderWidths: ["responsive"], cursor: ["responsive"], display: ["responsive"], flexbox: ["responsive"], float: ["responsive"], fonts: ["responsive"], fontWeights: ["responsive", "hover", "focus"], height: ["responsive"], leading: ["responsive"], lists: ["responsive"], margin: ["responsive"], maxHeight: ["responsive"], maxWidth: ["responsive"], minHeight: ["responsive"], minWidth: ["responsive"], negativeMargin: ["responsive"], opacity: ["responsive"], outline: ["focus"], overflow: ["responsive"], padding: ["responsive"], pointerEvents: ["responsive"], position: ["responsive"], resize: ["responsive"], shadows: ["responsive", "hover", "focus"], svgFill: [], svgStroke: [], textAlign: ["responsive"], textColors: ["responsive", "hover", "focus"], textSizes: ["responsive"], textStyle: ["responsive", "hover", "focus"], tracking: ["responsive"], userSelect: ["responsive"], verticalAlign: ["responsive"], visibility: ["responsive"], whitespace: ["responsive"], width: ["responsive"], zIndex: ["responsive"]
        }
        , plugins:[(0, t.default)( {}
        )], options: {
            prefix: "", important: !1, separator: ":"
        }
    }
}

),
define("league-table/tailwind/config/text-colors", ["exports", "league-table/tailwind/config/colors"], function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=t.default
}

),
define("league-table/tailwind/config/text-sizes", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        xs: ".75rem", sm: ".875rem", base: "1rem", lg: "1.125rem", xl: "1.25rem", "2xl": "1.5rem", "3xl": "1.875rem", "4xl": "2.25rem", "5xl": "3rem"
    }
}

),
define("league-table/tailwind/config/width", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        auto: "auto", px: "1px", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem", 24: "6rem", 32: "8rem", 48: "12rem", 64: "16rem", "1/2": "50%", "1/3": "33.33333%", "2/3": "66.66667%", "1/4": "25%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.66667%", "5/6": "83.33333%", full: "100%", screen: "100vw"
    }
}

),
define("league-table/tailwind/config/z-index", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default= {
        auto: "auto", 0: 0, 10: 10, 20: 20, 30: 30, 40: 40, 50: 50
    }
}

),
define("league-table/templates/application-tailwind", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.HTMLBars.template( {
        id:"1D7jn2sf", block:'{"symbols":[],"statements":[[7,"div"],[11,"class","etw-px-4 etw-my-8 etw-max-w-3xl etw-mx-auto etw-font-sans"],[9],[0,"\\n  "],[7,"div"],[11,"class","etw-flex etw-mt-6"],[9],[0,"\\n    "],[7,"div"],[11,"class","etw-w-3/4 etw-pr-6"],[9],[0,"\\n      "],[7,"h1"],[11,"class","etw-pt-8 etw-text-3xl etw-font-bold"],[9],[0,"Your Tailwind styles"],[10],[0,"\\n      "],[7,"p"],[11,"class","etw-mt-3 etw-mb-4 etw-text-lg"],[9],[0,"A reference for every generated class in your app."],[10],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Border radius",[27,"array",[".rounded{-side?}{-size?}"],null],[23,["moduleStyles","borderRadius"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Borders",[27,"array",[".border{-side?}{-width?}"],null],[23,["moduleStyles","borderWidths"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Colors",[27,"array",[".text-{color}",".bg-{color}",".border-{color}"],null],[23,["moduleStyles","colors"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Font weights",[27,"array",[".font-{weight}"],null],[23,["moduleStyles","fontWeights"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Height",[27,"array",[".h-{size}"],null],[23,["moduleStyles","height"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Letter spacing",[27,"array",[".tracking-{size}"],null],[23,["moduleStyles","letterSpacing"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Line height",[27,"array",[".leading-{size}"],null],[23,["moduleStyles","lineHeight"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Margin",[27,"array",[".m{side?}-{size}"],null],[23,["moduleStyles","margin"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Max height",[27,"array",[".max-h-{size}"],null],[23,["moduleStyles","maxHeight"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Max width",[27,"array",[".max-w-{size}"],null],[23,["moduleStyles","maxWidth"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Min height",[27,"array",[".min-h-{size}"],null],[23,["moduleStyles","minHeight"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Min width",[27,"array",[".min-w-{size}"],null],[23,["moduleStyles","minWidth"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Negative margin",[27,"array",[".-m{side?}-{size}"],null],[23,["moduleStyles","negativeMargin"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Opacity",[27,"array",[".opacity-{name}"],null],[23,["moduleStyles","opacity"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Padding",[27,"array",[".p{side?}-{size}"],null],[23,["moduleStyles","padding"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Shadows",[27,"array",[".shadow-{size?}"],null],[23,["moduleStyles","shadows"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["SVG fill",[27,"array",[".fill-{name}"],null],[23,["moduleStyles","svgFill"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["SVG stroke",[27,"array",[".stroke-{name}"],null],[23,["moduleStyles","svgStroke"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Text sizes",[27,"array",[".text-{size}"],null],[23,["moduleStyles","textSizes"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Width",[27,"array",[".w-{size}"],null],[23,["moduleStyles","width"]]]]],false],[0,"\\n\\n      "],[1,[27,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Z index",[27,"array",[".z-{index}"],null],[23,["moduleStyles","zIndex"]]]]],false],[0,"\\n\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","etw-w-1/4 etw-relative"],[9],[0,"\\n      "],[1,[21,"etw/module-style-detail"],false],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}', meta: {
            moduleName: "league-table/templates/application-tailwind.hbs"
        }
    }
    )
}

),
define("league-table/templates/application", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.HTMLBars.template( {
        id:"bN+bCILj", block:'{"symbols":[],"statements":[[0,"\\n\\n"],[7,"div"],[11,"class","flex"],[9],[0,"\\n  "],[7,"div"],[11,"class","flex-1 max-w-md h-screen m-4"],[9],[0,"\\n    "],[5,"results",[],[["@games"],[[22,0,["gameSimulator","games"]]]]],[0,"\\n  "],[10],[0,"\\n  "],[7,"div"],[11,"class","flex-1 h-screen m-4"],[9],[0,"\\n    "],[5,"league-table",[],[["@games"],[[22,0,["gameSimulator","games"]]]]],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"]],"hasEval":false}', meta: {
            moduleName: "league-table/templates/application.hbs"
        }
    }
    )
}

),
define("league-table/templates/components/etw/module-section", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.HTMLBars.template( {
        id:"e7LX7ODF", block:'{"symbols":["moduleStyle","snippet"],"statements":[[7,"section"],[9],[0,"\\n  "],[7,"h2"],[11,"class","etw-pt-8 etw-mb-6 etw-text-lg etw-font-bold"],[9],[1,[21,"title"],false],[10],[0,"\\n\\n  "],[7,"ul"],[11,"class","etw-list-reset etw-leading-normal"],[9],[0,"\\n"],[4,"each",[[23,["codeSnippets"]]],null,{"statements":[[0,"      "],[7,"li"],[9],[7,"code"],[9],[1,[22,2,[]],false],[10],[10],[0,"\\n"]],"parameters":[2]},null],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","etw-mt-8 etw-flex etw-flex-wrap"],[9],[0,"\\n"],[4,"each",[[23,["moduleStyles"]]],null,{"statements":[[0,"      "],[1,[27,"etw/module-style-example",null,[["moduleStyle"],[[22,1,[]]]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}', meta: {
            moduleName: "league-table/templates/components/etw/module-section.hbs"
        }
    }
    )
}

) define("league-table/templates/components/etw/module-style-detail", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.HTMLBars.template( {
        id:"48WgDLQC", block:'{"symbols":["style","state","breakpoint"],"statements":[[7,"div"],[11,"class","etw-shadow-lg etw-fixed etw-mr-4 etw-px-4 etw-pt-4 etw-pb-14 etw-bg-white etw-w-64 etw-mt-8 overflow-y-auto etw-h-screen"],[9],[0,"\\n  "],[7,"h3"],[9],[0,"Detail"],[10],[0,"\\n\\n"],[4,"if",[[23,["moduleStyle"]]],null,{"statements":[[0,"\\n    "],[7,"div"],[11,"class","etw-my-8"],[9],[0,"\\n      "],[1,[27,"etw/module-style-example",null,[["moduleStyle"],[[23,["moduleStyle"]]]]],false],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","etw-mt-4"],[9],[0,"\\n      "],[7,"h4"],[11,"class","etw-inline-block etw-pr-2"],[9],[0,"Responsive: "],[10],[0,"\\n      "],[7,"div"],[11,"class","etw-mt-2 etw-text-sm etw-inline-block"],[9],[0,"\\n"],[4,"each",[[27,"array",["all","sm","md","lg","xl"],null]],null,{"statements":[[0,"          "],[7,"a"],[11,"href","#"],[12,"class",[28,["\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              ",[27,"if",[[27,"eq",[[23,["activeResponsiveClass"]],[22,3,[]]],null],"etw-opacity-100","etw-opacity-25"],null],"\\n            "]]],[3,"action",[[22,0,[]],[27,"mut",[[23,["activeResponsiveClass"]]],null],[22,3,[]]]],[9],[0,"\\n            "],[1,[22,3,[]],false],[0,"\\n          "],[10],[0,"\\n"]],"parameters":[3]},null],[0,"      "],[10],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","etw-mt-4"],[9],[0,"\\n      "],[7,"h4"],[11,"class","etw-inline-block etw-pr-2"],[9],[0,"State: "],[10],[0,"\\n      "],[7,"div"],[11,"class","etw-mt-2 etw-text-sm etw-inline-block"],[9],[0,"\\n"],[4,"each",[[27,"array",["none","hover","focus"],null]],null,{"statements":[[0,"          "],[7,"a"],[11,"href","#"],[12,"class",[28,["\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              ",[27,"if",[[27,"eq",[[23,["activeState"]],[22,2,[]]],null],"etw-opacity-100","etw-opacity-25"],null],"\\n            "]]],[3,"action",[[22,0,[]],[27,"mut",[[23,["activeState"]]],null],[22,2,[]]]],[9],[0,"\\n            "],[1,[22,2,[]],false],[0,"\\n          "],[10],[0,"\\n"]],"parameters":[2]},null],[0,"      "],[10],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","etw-mt-8 etw-mb-4"],[9],[0,"\\n      "],[7,"p"],[11,"class","etw-text-right etw-text-xs etw-opacity-50"],[9],[0,"\\n"],[4,"if",[[23,["highlightedStyle"]]],null,{"statements":[[0,"          Copied!\\n"]],"parameters":[]},{"statements":[[0,"          Click to copy\\n"]],"parameters":[]}],[0,"      "],[10],[0,"\\n\\n      "],[7,"ul"],[11,"class","etw-mt-3 etw-list-reset"],[9],[0,"\\n"],[4,"each",[[23,["detailStyles"]]],null,{"statements":[[0,"          "],[7,"li"],[11,"class","etw-mt-4"],[9],[0,"\\n"],[4,"copy-button",null,[["class","clipboardText","title","success"],[[27,"concat",["etw-bg-grey-light etw-opacity-75 hover:etw-opacity-100 ","etw-px-1 etw-py-2 etw-w-full etw-text-left etw-transition ",[27,"if",[[27,"eq",[[23,["highlightedStyle"]],[22,1,[]]],null],"etw-bg-green etw-text-white"],null]],null],[22,1,[]],"Copy",[27,"action",[[22,0,[]],"highlightStyle",[22,1,[]]],null]]],{"statements":[[0,"              "],[7,"code"],[9],[0,"."],[1,[22,1,[]],false],[10],[0,"\\n"]],"parameters":[]},null],[0,"          "],[10],[0,"\\n"]],"parameters":[1]},null],[0,"      "],[10],[0,"\\n    "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[0,"\\n    "],[7,"p"],[11,"class","etw-mt-4 etw-text-grey etw-italic"],[9],[0,"Select a module for more detail."],[10],[0,"\\n\\n"]],"parameters":[]}],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}', meta: {
            moduleName: "league-table/templates/components/etw/module-style-detail.hbs"
        }
    }
    )
}

),
define("league-table/templates/components/etw/module-style-example", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.HTMLBars.template( {
        id:"gI/HOCb/", block:'{"symbols":[],"statements":[[7,"a"],[11,"class","etw-mb-8 etw-w-1/5 etw-p-2"],[3,"action",[[22,0,[]],"selectModuleStyle"]],[9],[0,"\\n  "],[7,"div"],[11,"class","etw-text-center etw-m-4 etw-text-sm "],[9],[0,"\\n    "],[7,"div"],[11,"class","etw-text-center etw-m-4 etw-text-sm "],[9],[0,"\\n\\n"],[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"border-radius"],null]],null,{"statements":[[0,"\\n        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          ",[23,["classesForModuleStyle","0"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"border-widths"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border-red etw-bg-grey-lighter etw-border-solid\\n          ",[23,["classesForModuleStyle","0"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"colors"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["etw-marginx-auto etw-w-full etw-h-24 bg-",[23,["moduleStyle","name"]]]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"font-weights"],null]],null,{"statements":[[0,"        "],[7,"p"],[12,"class",[28,["font-",[23,["moduleStyle","name"]]]]],[9],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"height"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          ",[23,["classesForModuleStyle","0"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"letter-spacing"],null]],null,{"statements":[[0,"        "],[7,"p"],[12,"class",[28,["text-left tracking-",[23,["moduleStyle","name"]]]]],[9],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"line-height"],null]],null,{"statements":[[0,"        "],[7,"p"],[12,"class",[28,["text-left leading-",[23,["moduleStyle","name"]]]]],[9],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"margin"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["etw-bg-red etw-w-24 etw-mx-auto etw-border-t etw-border-solid ",[27,"if",[[27,"eq",[[23,["moduleStyle","name"]],"auto"],null],"","etw-border-transparent"],null]]]],[9],[0,"\\n          "],[7,"div"],[12,"class",[28,["\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            mt-",[23,["moduleStyle","name"]],"\\n          "]]],[9],[10],[0,"\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"max-height"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-h-",[23,["moduleStyle","name"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"max-width"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-w-",[23,["moduleStyle","name"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"min-height"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-h-",[23,["moduleStyle","name"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"min-width"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-w-",[23,["moduleStyle","name"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"negative-margin"],null]],null,{"statements":[[0,"        "],[7,"div"],[11,"class","etw-mb-8 etw-bg-red etw-px-4 etw-pb-4 etw-mx-auto etw-h-32 etw-relative"],[9],[0,"\\n          "],[7,"div"],[11,"class","etw-absolute etw-pin-x"],[9],[0,"\\n            "],[7,"div"],[12,"class",[28,["\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n            etw-bg-grey-lighter etw-shadow-lg\\n            -mt-",[23,["moduleStyle","name"]],"\\n            "]]],[9],[10],[0,"\\n          "],[10],[0,"\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"opacity"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          opacity-",[23,["moduleStyle","name"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"padding"],null]],null,{"statements":[[0,"        "],[7,"div"],[11,"class","etw-bg-red etw-w-24 etw-mx-auto"],[9],[0,"\\n          "],[7,"div"],[12,"class",[28,["\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            pt-",[23,["moduleStyle","name"]],"\\n          "]]],[9],[0,"\\n            "],[7,"p"],[11,"class","etw-text-grey-darker"],[9],[0,"Lorem"],[10],[0,"\\n          "],[10],[0,"\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"shadows"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-white\\n          ",[23,["classesForModuleStyle","0"]],"\\n        "]]],[9],[0,"\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"svg-fill"],null]],null,{"statements":[[0,"        "],[7,"div"],[11,"class","etw-bg-grey-lighter etw-text-red etw-py-4"],[9],[0,"\\n          "],[7,"svg"],[11,"class","fill-current inline-block h-12 w-12"],[11,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[11,"viewBox","0 0 20 20"],[9],[0,"\\n            "],[7,"path"],[11,"d","M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"],[9],[10],[0,"\\n          "],[10],[0,"\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"svg-stroke"],null]],null,{"statements":[[0,"        "],[7,"div"],[11,"class","etw-bg-grey-lighter etw-text-red etw-py-4"],[9],[0,"\\n          "],[7,"svg"],[11,"class","stroke-current inline-block h-12 w-12"],[11,"viewBox","0 0 24 24"],[11,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[11,"fill","none"],[11,"stroke-width","2"],[11,"stroke-linecap","round"],[11,"stroke-linejoin","round"],[9],[0,"\\n              "],[7,"circle"],[11,"cx","8"],[11,"cy","21"],[11,"r","2"],[9],[10],[0,"\\n              "],[7,"circle"],[11,"cx","20"],[11,"cy","21"],[11,"r","2"],[9],[10],[0,"\\n              "],[7,"path"],[11,"d","M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"],[9],[10],[0,"\\n          "],[10],[0,"\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"text-sizes"],null]],null,{"statements":[[0,"        "],[7,"p"],[12,"class",[28,["text-left text-",[23,["moduleStyle","name"]]]]],[9],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        "],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"width"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          ",[23,["classesForModuleStyle","0"]],"\\n        "]]],[9],[10],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[23,["moduleStyle","module"]],"z-index"],null]],null,{"statements":[[0,"        "],[7,"div"],[12,"class",[28,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          ",[23,["classesForModuleStyle","0"]],"\\n        "]]],[9],[10],[0,"\\n\\n      "]],"parameters":[]},null]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}],[0,"\\n      "],[7,"div"],[11,"class","etw-mt-3 etw-leading-normal"],[9],[0,"\\n        "],[7,"p"],[9],[1,[23,["moduleStyle","name"]],false],[10],[0,"\\n        "],[7,"p"],[11,"class","etw-opacity-50"],[9],[1,[23,["moduleStyle","value"]],false],[10],[0,"\\n      "],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}', meta: {
            moduleName: "league-table/templates/components/etw/module-style-example.hbs"
        }
    }
    )
}

),
define("league-table/templates/components/league-table", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.HTMLBars.template( {
        id:"YC1diNds", block:'{"symbols":["team","index","game"],"statements":[[7,"table"],[11,"class","w-full"],[9],[0,"\\n  "],[7,"thead"],[11,"class","bg-grey-lighter border-b-2 border-grey p-4 m-4  align-bottom text-center"],[9],[0,"\\n    "],[7,"th"],[11,"class","h-10 w-10"],[9],[10],[0,"\\n    "],[7,"th"],[11,"class","text-left"],[9],[0,"Team"],[10],[0,"\\n    "],[7,"th"],[11,"class","w2-24"],[9],[0,"Played"],[10],[0,"\\n    "],[7,"th"],[11,"class","w2-24"],[9],[0,"Won"],[10],[0,"\\n    "],[7,"th"],[11,"class","w2-24"],[9],[0,"Drawn"],[10],[0,"\\n    "],[7,"th"],[9],[0,"Lost"],[10],[0,"\\n    "],[7,"th"],[9],[0,"For"],[10],[0,"\\n    "],[7,"th"],[9],[0,"Against"],[10],[0,"\\n    "],[7,"th"],[9],[0,"GD"],[10],[0,"\\n    "],[7,"th"],[9],[0,"Points"],[10],[0,"\\n    "],[7,"th"],[11,"class","text-left"],[9],[0,"Form"],[10],[0,"\\n  "],[10],[0,"\\n  "],[7,"tbody"],[9],[0,"\\n"],[4,"each",[[27,"sort-by",["points:desc","goalDifference:desc",[23,["teams"]]],null]],null,{"statements":[[0,"      "],[7,"tr"],[12,"class",[27,"if",[[27,"or",[[27,"eq",[[22,2,[]],4],null],[27,"eq",[[22,2,[]],5],null],[27,"eq",[[22,2,[]],17],null]],null],"border-t-1 border-grey border-dashed text-center","text-center"],null]],[9],[0,"\\n        "],[7,"td"],[11,"class","p-4"],[9],[1,[27,"add",[[22,2,[]],1],null],false],[10],[0,"\\n        "],[7,"td"],[11,"class","font-bold text-left"],[9],[1,[22,1,["name"]],false],[10],[0,"\\n        "],[7,"td"],[9],[1,[22,1,["games","length"]],false],[10],[0,"\\n        "],[7,"td"],[9],[1,[22,1,["gamesWon","length"]],false],[10],[0,"\\n        "],[7,"td"],[9],[1,[22,1,["gamesDrawn","length"]],false],[10],[0,"\\n        "],[7,"td"],[9],[1,[22,1,["gamesLost","length"]],false],[10],[0,"\\n        "],[7,"td"],[9],[1,[22,1,["goalsScored"]],false],[10],[0,"\\n        "],[7,"td"],[9],[1,[22,1,["goalsConceded"]],false],[10],[0,"\\n        "],[7,"td"],[9],[1,[22,1,["goalDifference"]],false],[10],[0,"\\n        "],[7,"td"],[11,"class","font-bold"],[9],[1,[22,1,["points"]],false],[10],[0,"\\n        "],[7,"td"],[9],[0,"\\n          "],[7,"div"],[11,"class","flex w-48 text-white text-sm text-center"],[9],[0,"\\n"],[4,"each",[[27,"take",[5,[27,"sort-by",["playedOn:desc",[22,1,["games"]]],null]],null]],null,{"statements":[[4,"if",[[22,3,["isDraw"]]],null,{"statements":[[0,"                "],[7,"span"],[11,"class","p-1 mr-1 bg-grey w-8"],[9],[0,"D"],[10],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[27,"eq",[[22,3,["winningTeam","id"]],[22,1,["id"]]],null]],null,{"statements":[[0,"                "],[7,"span"],[11,"class","p-1 mr-1 bg-green-dark w-8"],[9],[0,"W"],[10],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                "],[7,"span"],[11,"class","p-1 mr-1 bg-red-dark w-8"],[9],[0,"L"],[10],[0,"\\n              "]],"parameters":[]}]],"parameters":[]}]],"parameters":[3]},null],[0,"          "],[10],[0,"      \\n        "],[10],[0,"\\n      "],[10],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[10],[0,"\\n"],[10]],"hasEval":false}', meta: {
            moduleName: "league-table/templates/components/league-table.hbs"
        }
    }
    )
}

),
define("league-table/templates/components/results", ["exports"], function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }
    ), e.default=Ember.HTMLBars.template( {
        id:"3MMjXSjk", block:'{"symbols":["game"],"statements":[[7,"h1"],[11,"class","text-center text-green-dark"],[9],[0,"Games played: "],[1,[23,["games","length"]],false],[10],[0,"\\n\\n"],[4,"each",[[27,"take",[25,[27,"reverse",[[23,["games"]]],null]],null]],null,{"statements":[[0,"  "],[7,"div"],[11,"class","bg-blue-lightest m-2 flex font-bold"],[9],[0,"\\n    "],[7,"div"],[11,"class","flex-1 text-right p-2"],[9],[0,"\\n      "],[1,[22,1,["homeTeam","name"]],false],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","flex-shrink bg-yellow p-2 border-r-2 border-yellow-dark border-solid"],[9],[0,"\\n      "],[1,[22,1,["homeGoals"]],false],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","flex-shrink bg-yellow p-2 border-l-2 border-yellow-dark border-solid"],[9],[0,"\\n      "],[1,[22,1,["awayGoals"]],false],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","flex-1 p-2"],[9],[0,"\\n      "],[1,[22,1,["awayTeam","name"]],false],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}', meta: {
            moduleName: "league-table/templates/components/results.hbs"
        }
    }
    )
}

),
define("league-table/config/environment", [], function() {
    try {
        var e="league-table/config/environment", t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"), n= {
            default: JSON.parse(unescape(t))
        }
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }
        ), n
    }
    catch(l) {
        throw new Error('Could not read config from meta tag with name "'+e+'".')
    }
}

),
runningTests||require("league-table/app").default.create( {
    name: "league-table", version: "0.0.0+84c84ec6"
}

)