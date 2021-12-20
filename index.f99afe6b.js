function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiree17d"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiree17d"] = parcelRequire;
}
var $039e75d7269ff797$exports = {};
parcelRequire.register("23XYC", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $180a62bbb243c0a7$export$6503ec6e8aabbaf; }, function (v) { return $180a62bbb243c0a7$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $180a62bbb243c0a7$export$f7ad0328861e2f03; }, function (v) { return $180a62bbb243c0a7$export$f7ad0328861e2f03 = v; });
var $180a62bbb243c0a7$export$6503ec6e8aabbaf;
var $180a62bbb243c0a7$export$f7ad0328861e2f03;
"use strict";
var $180a62bbb243c0a7$var$mapping = {
};
function $180a62bbb243c0a7$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$180a62bbb243c0a7$var$mapping[keys[i]] = pairs[keys[i]];
}
function $180a62bbb243c0a7$var$resolve(id) {
    var resolved = $180a62bbb243c0a7$var$mapping[id];
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return resolved;
}
$180a62bbb243c0a7$export$6503ec6e8aabbaf = $180a62bbb243c0a7$var$register;
$180a62bbb243c0a7$export$f7ad0328861e2f03 = $180a62bbb243c0a7$var$resolve;

});


(parcelRequire("23XYC")).register(JSON.parse("{\"dhgJi\":\"index.f99afe6b.js\",\"1XFPE\":\"copy-to-clipboard.d4fa13ac.svg\",\"hYhac\":\"note.dec5757d.svg\"}"));



var $af8c53f81f763b61$var$noop = {
    value: ()=>{
    }
};
function $af8c53f81f763b61$var$dispatch() {
    for(var i = 0, n = arguments.length, _ = {
    }, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new $af8c53f81f763b61$var$Dispatch(_);
}
function $af8c53f81f763b61$var$Dispatch(_) {
    this._ = _;
}
function $af8c53f81f763b61$var$parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
$af8c53f81f763b61$var$Dispatch.prototype = $af8c53f81f763b61$var$dispatch.prototype = {
    constructor: $af8c53f81f763b61$var$Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = $af8c53f81f763b61$var$parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = $af8c53f81f763b61$var$get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = $af8c53f81f763b61$var$set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = $af8c53f81f763b61$var$set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {
        }, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new $af8c53f81f763b61$var$Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function $af8c53f81f763b61$var$get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function $af8c53f81f763b61$var$set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = $af8c53f81f763b61$var$noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
var $af8c53f81f763b61$export$2e2bcd8739ae039 = $af8c53f81f763b61$var$dispatch;



function $833bc37a73a91ae9$export$2e2bcd8739ae039(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}


function $2072ac4b843485e2$export$2e2bcd8739ae039(event, node) {
    event = $833bc37a73a91ae9$export$2e2bcd8739ae039(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}


function $f994c168f5d5468e$var$none() {
}
function $f994c168f5d5468e$export$2e2bcd8739ae039(selector) {
    return selector == null ? $f994c168f5d5468e$var$none : function() {
        return this.querySelector(selector);
    };
}


function $3582b4e6441738c4$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = $f994c168f5d5468e$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new $c3b173a76c58d551$export$52baac22726c72bf(subgroups, this._parents);
}



function $f18be30294bdf5bb$export$2e2bcd8739ae039(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


function $24b680d6ef1b9ff8$var$empty() {
    return [];
}
function $24b680d6ef1b9ff8$export$2e2bcd8739ae039(selector) {
    return selector == null ? $24b680d6ef1b9ff8$var$empty : function() {
        return this.querySelectorAll(selector);
    };
}


function $a8b19d284a153655$var$arrayAll(select) {
    return function() {
        return $f18be30294bdf5bb$export$2e2bcd8739ae039(select.apply(this, arguments));
    };
}
function $a8b19d284a153655$export$2e2bcd8739ae039(select) {
    if (typeof select === "function") select = $a8b19d284a153655$var$arrayAll(select);
    else select = $24b680d6ef1b9ff8$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new $c3b173a76c58d551$export$52baac22726c72bf(subgroups, parents);
}


function $05c6a38a7caf1fc6$export$2e2bcd8739ae039(selector) {
    return function() {
        return this.matches(selector);
    };
}
function $05c6a38a7caf1fc6$export$90c2759c036528(selector) {
    return function(node) {
        return node.matches(selector);
    };
}


var $03bba3c29aeb0c33$var$find = Array.prototype.find;
function $03bba3c29aeb0c33$var$childFind(match) {
    return function() {
        return $03bba3c29aeb0c33$var$find.call(this.children, match);
    };
}
function $03bba3c29aeb0c33$var$childFirst() {
    return this.firstElementChild;
}
function $03bba3c29aeb0c33$export$2e2bcd8739ae039(match) {
    return this.select(match == null ? $03bba3c29aeb0c33$var$childFirst : $03bba3c29aeb0c33$var$childFind(typeof match === "function" ? match : $05c6a38a7caf1fc6$export$90c2759c036528(match)));
}



var $258e7c6cae924da0$var$filter = Array.prototype.filter;
function $258e7c6cae924da0$var$children() {
    return Array.from(this.children);
}
function $258e7c6cae924da0$var$childrenFilter(match) {
    return function() {
        return $258e7c6cae924da0$var$filter.call(this.children, match);
    };
}
function $258e7c6cae924da0$export$2e2bcd8739ae039(match) {
    return this.selectAll(match == null ? $258e7c6cae924da0$var$children : $258e7c6cae924da0$var$childrenFilter(typeof match === "function" ? match : $05c6a38a7caf1fc6$export$90c2759c036528(match)));
}




function $8adc5ff312168de4$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = $05c6a38a7caf1fc6$export$2e2bcd8739ae039(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new $c3b173a76c58d551$export$52baac22726c72bf(subgroups, this._parents);
}



function $ce0e7e4805de2c9d$export$2e2bcd8739ae039(update) {
    return new Array(update.length);
}



function $21664d1252ff3b2a$export$2e2bcd8739ae039() {
    return new $c3b173a76c58d551$export$52baac22726c72bf(this._enter || this._groups.map($ce0e7e4805de2c9d$export$2e2bcd8739ae039), this._parents);
}
function $21664d1252ff3b2a$export$67b01759a14cf6a4(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
$21664d1252ff3b2a$export$67b01759a14cf6a4.prototype = {
    constructor: $21664d1252ff3b2a$export$67b01759a14cf6a4,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};


function $d54c032546d1ff06$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


function $1a7b66fb70b2322b$var$bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new $21664d1252ff3b2a$export$67b01759a14cf6a4(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function $1a7b66fb70b2322b$var$bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new $21664d1252ff3b2a$export$67b01759a14cf6a4(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function $1a7b66fb70b2322b$var$datum(node) {
    return node.__data__;
}
function $1a7b66fb70b2322b$export$2e2bcd8739ae039(value, key) {
    if (!arguments.length) return Array.from(this, $1a7b66fb70b2322b$var$datum);
    var bind = key ? $1a7b66fb70b2322b$var$bindKey : $1a7b66fb70b2322b$var$bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = $d54c032546d1ff06$export$2e2bcd8739ae039(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = $1a7b66fb70b2322b$var$arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new $c3b173a76c58d551$export$52baac22726c72bf(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function $1a7b66fb70b2322b$var$arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}





function $fa4268423e70ff77$export$2e2bcd8739ae039() {
    return new $c3b173a76c58d551$export$52baac22726c72bf(this._exit || this._groups.map($ce0e7e4805de2c9d$export$2e2bcd8739ae039), this._parents);
}


function $d3194bbb1c16ec97$export$2e2bcd8739ae039(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else enter = enter.append(onenter + "");
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}



function $663795d9f7d9a01f$export$2e2bcd8739ae039(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new $c3b173a76c58d551$export$52baac22726c72bf(merges, this._parents);
}


function $c1fb20bdd9fbd68b$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
}



function $0135641702496bb1$export$2e2bcd8739ae039(compare) {
    if (!compare) compare = $0135641702496bb1$var$ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new $c3b173a76c58d551$export$52baac22726c72bf(sortgroups, this._parents).order();
}
function $0135641702496bb1$var$ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


function $18cb7791b300f2ce$export$2e2bcd8739ae039() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}


function $815a9b217e5b321d$export$2e2bcd8739ae039() {
    return Array.from(this);
}


function $65f98aa599b0fea5$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
}


function $3e4893193072c710$export$2e2bcd8739ae039() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}


function $b0113aa1e91721a8$export$2e2bcd8739ae039() {
    return !this.node();
}


function $b42d9e39f6e8d111$export$2e2bcd8739ae039(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
}


var $e4beca933beb3b7c$export$201a3f7520ccc326 = "http://www.w3.org/1999/xhtml";
var $e4beca933beb3b7c$export$2e2bcd8739ae039 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: $e4beca933beb3b7c$export$201a3f7520ccc326,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};


function $c73111ea8453a42d$export$2e2bcd8739ae039(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return $e4beca933beb3b7c$export$2e2bcd8739ae039.hasOwnProperty(prefix) ? {
        space: $e4beca933beb3b7c$export$2e2bcd8739ae039[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}


function $5f4d978c6cc84047$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $5f4d978c6cc84047$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $5f4d978c6cc84047$var$attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function $5f4d978c6cc84047$var$attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function $5f4d978c6cc84047$var$attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function $5f4d978c6cc84047$var$attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function $5f4d978c6cc84047$export$2e2bcd8739ae039(name, value) {
    var fullname = $c73111ea8453a42d$export$2e2bcd8739ae039(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? $5f4d978c6cc84047$var$attrRemoveNS : $5f4d978c6cc84047$var$attrRemove : typeof value === "function" ? fullname.local ? $5f4d978c6cc84047$var$attrFunctionNS : $5f4d978c6cc84047$var$attrFunction : fullname.local ? $5f4d978c6cc84047$var$attrConstantNS : $5f4d978c6cc84047$var$attrConstant)(fullname, value));
}


function $3d9222091583c273$export$2e2bcd8739ae039(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView; // node is a Document
}


function $9f36145d5117af41$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $9f36145d5117af41$var$styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function $9f36145d5117af41$var$styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function $9f36145d5117af41$export$2e2bcd8739ae039(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? $9f36145d5117af41$var$styleRemove : typeof value === "function" ? $9f36145d5117af41$var$styleFunction : $9f36145d5117af41$var$styleConstant)(name, value, priority == null ? "" : priority)) : $9f36145d5117af41$export$5e3cec964f0b5efd(this.node(), name);
}
function $9f36145d5117af41$export$5e3cec964f0b5efd(node, name) {
    return node.style.getPropertyValue(name) || $3d9222091583c273$export$2e2bcd8739ae039(node).getComputedStyle(node, null).getPropertyValue(name);
}


function $e781f0dbe81b57e9$var$propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function $e781f0dbe81b57e9$var$propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function $e781f0dbe81b57e9$var$propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function $e781f0dbe81b57e9$export$2e2bcd8739ae039(name, value) {
    return arguments.length > 1 ? this.each((value == null ? $e781f0dbe81b57e9$var$propertyRemove : typeof value === "function" ? $e781f0dbe81b57e9$var$propertyFunction : $e781f0dbe81b57e9$var$propertyConstant)(name, value)) : this.node()[name];
}


function $de2e8584cae91004$var$classArray(string) {
    return string.trim().split(/^|\s+/);
}
function $de2e8584cae91004$var$classList(node) {
    return node.classList || new $de2e8584cae91004$var$ClassList(node);
}
function $de2e8584cae91004$var$ClassList(node) {
    this._node = node;
    this._names = $de2e8584cae91004$var$classArray(node.getAttribute("class") || "");
}
$de2e8584cae91004$var$ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function $de2e8584cae91004$var$classedAdd(node, names) {
    var list = $de2e8584cae91004$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function $de2e8584cae91004$var$classedRemove(node, names) {
    var list = $de2e8584cae91004$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function $de2e8584cae91004$var$classedTrue(names) {
    return function() {
        $de2e8584cae91004$var$classedAdd(this, names);
    };
}
function $de2e8584cae91004$var$classedFalse(names) {
    return function() {
        $de2e8584cae91004$var$classedRemove(this, names);
    };
}
function $de2e8584cae91004$var$classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? $de2e8584cae91004$var$classedAdd : $de2e8584cae91004$var$classedRemove)(this, names);
    };
}
function $de2e8584cae91004$export$2e2bcd8739ae039(name, value) {
    var names = $de2e8584cae91004$var$classArray(name + "");
    if (arguments.length < 2) {
        var list = $de2e8584cae91004$var$classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? $de2e8584cae91004$var$classedFunction : value ? $de2e8584cae91004$var$classedTrue : $de2e8584cae91004$var$classedFalse)(names, value));
}


function $d738ba4c0b62d125$var$textRemove() {
    this.textContent = "";
}
function $d738ba4c0b62d125$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $d738ba4c0b62d125$var$textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function $d738ba4c0b62d125$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $d738ba4c0b62d125$var$textRemove : (typeof value === "function" ? $d738ba4c0b62d125$var$textFunction : $d738ba4c0b62d125$var$textConstant)(value)) : this.node().textContent;
}


function $486a26d52d9126b0$var$htmlRemove() {
    this.innerHTML = "";
}
function $486a26d52d9126b0$var$htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function $486a26d52d9126b0$var$htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function $486a26d52d9126b0$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $486a26d52d9126b0$var$htmlRemove : (typeof value === "function" ? $486a26d52d9126b0$var$htmlFunction : $486a26d52d9126b0$var$htmlConstant)(value)) : this.node().innerHTML;
}


function $f947967c7c5ca1ac$var$raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function $f947967c7c5ca1ac$export$2e2bcd8739ae039() {
    return this.each($f947967c7c5ca1ac$var$raise);
}


function $0dc7cd2b336b0ea4$var$lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $0dc7cd2b336b0ea4$export$2e2bcd8739ae039() {
    return this.each($0dc7cd2b336b0ea4$var$lower);
}




function $77d6c7e788039ea7$var$creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === $e4beca933beb3b7c$export$201a3f7520ccc326 && document.documentElement.namespaceURI === $e4beca933beb3b7c$export$201a3f7520ccc326 ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function $77d6c7e788039ea7$var$creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function $77d6c7e788039ea7$export$2e2bcd8739ae039(name) {
    var fullname = $c73111ea8453a42d$export$2e2bcd8739ae039(name);
    return (fullname.local ? $77d6c7e788039ea7$var$creatorFixed : $77d6c7e788039ea7$var$creatorInherit)(fullname);
}


function $86fdb563277d1920$export$2e2bcd8739ae039(name) {
    var create = typeof name === "function" ? name : $77d6c7e788039ea7$export$2e2bcd8739ae039(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}




function $f7561cbf307a7698$var$constantNull() {
    return null;
}
function $f7561cbf307a7698$export$2e2bcd8739ae039(name, before) {
    var create = typeof name === "function" ? name : $77d6c7e788039ea7$export$2e2bcd8739ae039(name), select = before == null ? $f7561cbf307a7698$var$constantNull : typeof before === "function" ? before : $f994c168f5d5468e$export$2e2bcd8739ae039(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}


function $479ef0885fa7a888$var$remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function $479ef0885fa7a888$export$2e2bcd8739ae039() {
    return this.each($479ef0885fa7a888$var$remove);
}


function $325e7fdb5c8b5414$var$selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $325e7fdb5c8b5414$var$selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $325e7fdb5c8b5414$export$2e2bcd8739ae039(deep) {
    return this.select(deep ? $325e7fdb5c8b5414$var$selection_cloneDeep : $325e7fdb5c8b5414$var$selection_cloneShallow);
}


function $1b19f0b00813713f$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}


function $c8b36e4455f73d87$var$contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function $c8b36e4455f73d87$var$parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function $c8b36e4455f73d87$var$onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function $c8b36e4455f73d87$var$onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = $c8b36e4455f73d87$var$contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function $c8b36e4455f73d87$export$2e2bcd8739ae039(typename, value, options) {
    var typenames = $c8b36e4455f73d87$var$parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? $c8b36e4455f73d87$var$onAdd : $c8b36e4455f73d87$var$onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}



function $8ff3a58200534407$var$dispatchEvent(node, type, params) {
    var window = $3d9222091583c273$export$2e2bcd8739ae039(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function $8ff3a58200534407$var$dispatchConstant(type, params) {
    return function() {
        return $8ff3a58200534407$var$dispatchEvent(this, type, params);
    };
}
function $8ff3a58200534407$var$dispatchFunction(type, params) {
    return function() {
        return $8ff3a58200534407$var$dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function $8ff3a58200534407$export$2e2bcd8739ae039(type, params) {
    return this.each((typeof params === "function" ? $8ff3a58200534407$var$dispatchFunction : $8ff3a58200534407$var$dispatchConstant)(type, params));
}


function* $ec6891ce4b4c35ec$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
}


var $c3b173a76c58d551$export$e8e78c978b129247 = [
    null
];
function $c3b173a76c58d551$export$52baac22726c72bf(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function $c3b173a76c58d551$var$selection() {
    return new $c3b173a76c58d551$export$52baac22726c72bf([
        [
            document.documentElement
        ]
    ], $c3b173a76c58d551$export$e8e78c978b129247);
}
function $c3b173a76c58d551$var$selection_selection() {
    return this;
}
$c3b173a76c58d551$export$52baac22726c72bf.prototype = $c3b173a76c58d551$var$selection.prototype = {
    constructor: $c3b173a76c58d551$export$52baac22726c72bf,
    select: $3582b4e6441738c4$export$2e2bcd8739ae039,
    selectAll: $a8b19d284a153655$export$2e2bcd8739ae039,
    selectChild: $03bba3c29aeb0c33$export$2e2bcd8739ae039,
    selectChildren: $258e7c6cae924da0$export$2e2bcd8739ae039,
    filter: $8adc5ff312168de4$export$2e2bcd8739ae039,
    data: $1a7b66fb70b2322b$export$2e2bcd8739ae039,
    enter: $21664d1252ff3b2a$export$2e2bcd8739ae039,
    exit: $fa4268423e70ff77$export$2e2bcd8739ae039,
    join: $d3194bbb1c16ec97$export$2e2bcd8739ae039,
    merge: $663795d9f7d9a01f$export$2e2bcd8739ae039,
    selection: $c3b173a76c58d551$var$selection_selection,
    order: $c1fb20bdd9fbd68b$export$2e2bcd8739ae039,
    sort: $0135641702496bb1$export$2e2bcd8739ae039,
    call: $18cb7791b300f2ce$export$2e2bcd8739ae039,
    nodes: $815a9b217e5b321d$export$2e2bcd8739ae039,
    node: $65f98aa599b0fea5$export$2e2bcd8739ae039,
    size: $3e4893193072c710$export$2e2bcd8739ae039,
    empty: $b0113aa1e91721a8$export$2e2bcd8739ae039,
    each: $b42d9e39f6e8d111$export$2e2bcd8739ae039,
    attr: $5f4d978c6cc84047$export$2e2bcd8739ae039,
    style: $9f36145d5117af41$export$2e2bcd8739ae039,
    property: $e781f0dbe81b57e9$export$2e2bcd8739ae039,
    classed: $de2e8584cae91004$export$2e2bcd8739ae039,
    text: $d738ba4c0b62d125$export$2e2bcd8739ae039,
    html: $486a26d52d9126b0$export$2e2bcd8739ae039,
    raise: $f947967c7c5ca1ac$export$2e2bcd8739ae039,
    lower: $0dc7cd2b336b0ea4$export$2e2bcd8739ae039,
    append: $86fdb563277d1920$export$2e2bcd8739ae039,
    insert: $f7561cbf307a7698$export$2e2bcd8739ae039,
    remove: $479ef0885fa7a888$export$2e2bcd8739ae039,
    clone: $325e7fdb5c8b5414$export$2e2bcd8739ae039,
    datum: $1b19f0b00813713f$export$2e2bcd8739ae039,
    on: $c8b36e4455f73d87$export$2e2bcd8739ae039,
    dispatch: $8ff3a58200534407$export$2e2bcd8739ae039,
    [Symbol.iterator]: $ec6891ce4b4c35ec$export$2e2bcd8739ae039
};
var $c3b173a76c58d551$export$2e2bcd8739ae039 = $c3b173a76c58d551$var$selection;


function $8ef98f1350267a83$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new $c3b173a76c58d551$export$52baac22726c72bf([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new $c3b173a76c58d551$export$52baac22726c72bf([
        [
            selector
        ]
    ], $c3b173a76c58d551$export$e8e78c978b129247);
}



const $d27dca3e8510b3cb$export$524615cd03e458cc = {
    passive: false
};
const $d27dca3e8510b3cb$export$35431a0e47022de1 = {
    capture: true,
    passive: false
};
function $d27dca3e8510b3cb$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $d27dca3e8510b3cb$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


function $7a3eaac7e81fc371$export$2e2bcd8739ae039(view) {
    var root = view.document.documentElement, selection = $8ef98f1350267a83$export$2e2bcd8739ae039(view).on("dragstart.drag", $d27dca3e8510b3cb$export$2e2bcd8739ae039, $d27dca3e8510b3cb$export$35431a0e47022de1);
    if ("onselectstart" in root) selection.on("selectstart.drag", $d27dca3e8510b3cb$export$2e2bcd8739ae039, $d27dca3e8510b3cb$export$35431a0e47022de1);
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function $7a3eaac7e81fc371$export$833237748009e1e1(view, noclick) {
    var root = view.document.documentElement, selection = $8ef98f1350267a83$export$2e2bcd8739ae039(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", $d27dca3e8510b3cb$export$2e2bcd8739ae039, $d27dca3e8510b3cb$export$35431a0e47022de1);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}



function $a95a56afafece18c$export$2e2bcd8739ae039(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function $a95a56afafece18c$export$8b58be045bf06082(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}


function $2954f542d349766d$export$892596cec99bc70e() {
}
var $2954f542d349766d$export$4adafc6ed0600c10 = 0.7;
var $2954f542d349766d$export$9eace2cc0d12c98d = 1 / $2954f542d349766d$export$4adafc6ed0600c10;
var $2954f542d349766d$var$reI = "\\s*([+-]?\\d+)\\s*", $2954f542d349766d$var$reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", $2954f542d349766d$var$reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $2954f542d349766d$var$reHex = /^#([0-9a-f]{3,8})$/, $2954f542d349766d$var$reRgbInteger = new RegExp("^rgb\\(" + [
    $2954f542d349766d$var$reI,
    $2954f542d349766d$var$reI,
    $2954f542d349766d$var$reI
] + "\\)$"), $2954f542d349766d$var$reRgbPercent = new RegExp("^rgb\\(" + [
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reP
] + "\\)$"), $2954f542d349766d$var$reRgbaInteger = new RegExp("^rgba\\(" + [
    $2954f542d349766d$var$reI,
    $2954f542d349766d$var$reI,
    $2954f542d349766d$var$reI,
    $2954f542d349766d$var$reN
] + "\\)$"), $2954f542d349766d$var$reRgbaPercent = new RegExp("^rgba\\(" + [
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reN
] + "\\)$"), $2954f542d349766d$var$reHslPercent = new RegExp("^hsl\\(" + [
    $2954f542d349766d$var$reN,
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reP
] + "\\)$"), $2954f542d349766d$var$reHslaPercent = new RegExp("^hsla\\(" + [
    $2954f542d349766d$var$reN,
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reP,
    $2954f542d349766d$var$reN
] + "\\)$");
var $2954f542d349766d$var$named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
$a95a56afafece18c$export$2e2bcd8739ae039($2954f542d349766d$export$892596cec99bc70e, $2954f542d349766d$export$2e2bcd8739ae039, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: $2954f542d349766d$var$color_formatHex,
    formatHex: $2954f542d349766d$var$color_formatHex,
    formatHsl: $2954f542d349766d$var$color_formatHsl,
    formatRgb: $2954f542d349766d$var$color_formatRgb,
    toString: $2954f542d349766d$var$color_formatRgb
});
function $2954f542d349766d$var$color_formatHex() {
    return this.rgb().formatHex();
}
function $2954f542d349766d$var$color_formatHsl() {
    return $2954f542d349766d$export$8133dc3fa904d6d1(this).formatHsl();
}
function $2954f542d349766d$var$color_formatRgb() {
    return this.rgb().formatRgb();
}
function $2954f542d349766d$export$2e2bcd8739ae039(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = $2954f542d349766d$var$reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? $2954f542d349766d$var$rgbn(m) // #ff0000
     : l === 3 ? new $2954f542d349766d$export$5e05a94393ac29e3(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) // #f00
     : l === 8 ? $2954f542d349766d$var$rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) // #ff000000
     : l === 4 ? $2954f542d349766d$var$rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) // #f000
     : null) : (m = $2954f542d349766d$var$reRgbInteger.exec(format)) ? new $2954f542d349766d$export$5e05a94393ac29e3(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = $2954f542d349766d$var$reRgbPercent.exec(format)) ? new $2954f542d349766d$export$5e05a94393ac29e3(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = $2954f542d349766d$var$reRgbaInteger.exec(format)) ? $2954f542d349766d$var$rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = $2954f542d349766d$var$reRgbaPercent.exec(format)) ? $2954f542d349766d$var$rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = $2954f542d349766d$var$reHslPercent.exec(format)) ? $2954f542d349766d$var$hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = $2954f542d349766d$var$reHslaPercent.exec(format)) ? $2954f542d349766d$var$hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : $2954f542d349766d$var$named.hasOwnProperty(format) ? $2954f542d349766d$var$rgbn($2954f542d349766d$var$named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new $2954f542d349766d$export$5e05a94393ac29e3(NaN, NaN, NaN, 0) : null;
}
function $2954f542d349766d$var$rgbn(n) {
    return new $2954f542d349766d$export$5e05a94393ac29e3(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function $2954f542d349766d$var$rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new $2954f542d349766d$export$5e05a94393ac29e3(r, g, b, a);
}
function $2954f542d349766d$export$42da0a331c2802f5(o) {
    if (!(o instanceof $2954f542d349766d$export$892596cec99bc70e)) o = $2954f542d349766d$export$2e2bcd8739ae039(o);
    if (!o) return new $2954f542d349766d$export$5e05a94393ac29e3;
    o = o.rgb();
    return new $2954f542d349766d$export$5e05a94393ac29e3(o.r, o.g, o.b, o.opacity);
}
function $2954f542d349766d$export$8972dc0e6ad9238f(r, g, b, opacity) {
    return arguments.length === 1 ? $2954f542d349766d$export$42da0a331c2802f5(r) : new $2954f542d349766d$export$5e05a94393ac29e3(r, g, b, opacity == null ? 1 : opacity);
}
function $2954f542d349766d$export$5e05a94393ac29e3(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
$a95a56afafece18c$export$2e2bcd8739ae039($2954f542d349766d$export$5e05a94393ac29e3, $2954f542d349766d$export$8972dc0e6ad9238f, $a95a56afafece18c$export$8b58be045bf06082($2954f542d349766d$export$892596cec99bc70e, {
    brighter: function(k) {
        k = k == null ? $2954f542d349766d$export$9eace2cc0d12c98d : Math.pow($2954f542d349766d$export$9eace2cc0d12c98d, k);
        return new $2954f542d349766d$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? $2954f542d349766d$export$4adafc6ed0600c10 : Math.pow($2954f542d349766d$export$4adafc6ed0600c10, k);
        return new $2954f542d349766d$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: $2954f542d349766d$var$rgb_formatHex,
    formatHex: $2954f542d349766d$var$rgb_formatHex,
    formatRgb: $2954f542d349766d$var$rgb_formatRgb,
    toString: $2954f542d349766d$var$rgb_formatRgb
}));
function $2954f542d349766d$var$rgb_formatHex() {
    return "#" + $2954f542d349766d$var$hex(this.r) + $2954f542d349766d$var$hex(this.g) + $2954f542d349766d$var$hex(this.b);
}
function $2954f542d349766d$var$rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function $2954f542d349766d$var$hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function $2954f542d349766d$var$hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new $2954f542d349766d$var$Hsl(h, s, l, a);
}
function $2954f542d349766d$export$8133dc3fa904d6d1(o) {
    if (o instanceof $2954f542d349766d$var$Hsl) return new $2954f542d349766d$var$Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof $2954f542d349766d$export$892596cec99bc70e)) o = $2954f542d349766d$export$2e2bcd8739ae039(o);
    if (!o) return new $2954f542d349766d$var$Hsl;
    if (o instanceof $2954f542d349766d$var$Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new $2954f542d349766d$var$Hsl(h, s, l, o.opacity);
}
function $2954f542d349766d$export$8f4a7c0bb78e6ea8(h, s, l, opacity) {
    return arguments.length === 1 ? $2954f542d349766d$export$8133dc3fa904d6d1(h) : new $2954f542d349766d$var$Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function $2954f542d349766d$var$Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
$a95a56afafece18c$export$2e2bcd8739ae039($2954f542d349766d$var$Hsl, $2954f542d349766d$export$8f4a7c0bb78e6ea8, $a95a56afafece18c$export$8b58be045bf06082($2954f542d349766d$export$892596cec99bc70e, {
    brighter: function(k) {
        k = k == null ? $2954f542d349766d$export$9eace2cc0d12c98d : Math.pow($2954f542d349766d$export$9eace2cc0d12c98d, k);
        return new $2954f542d349766d$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? $2954f542d349766d$export$4adafc6ed0600c10 : Math.pow($2954f542d349766d$export$4adafc6ed0600c10, k);
        return new $2954f542d349766d$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new $2954f542d349766d$export$5e05a94393ac29e3($2954f542d349766d$var$hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), $2954f542d349766d$var$hsl2rgb(h, m1, m2), $2954f542d349766d$var$hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function $2954f542d349766d$var$hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}




function $05b44bfd206ff91a$export$4e41033bfeec1a4c(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function $05b44bfd206ff91a$export$2e2bcd8739ae039(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return $05b44bfd206ff91a$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}



function $a2f6e498f44ccb1c$export$2e2bcd8739ae039(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return $05b44bfd206ff91a$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}


var $914bb64b8610205b$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $58a75d28d9dc248b$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $58a75d28d9dc248b$var$exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function $58a75d28d9dc248b$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $58a75d28d9dc248b$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : $914bb64b8610205b$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}
function $58a75d28d9dc248b$export$a7ebe8cc6aaf8d37(y) {
    return (y = +y) === 1 ? $58a75d28d9dc248b$export$2e2bcd8739ae039 : function(a, b) {
        return b - a ? $58a75d28d9dc248b$var$exponential(a, b, y) : $914bb64b8610205b$export$2e2bcd8739ae039(isNaN(a) ? b : a);
    };
}
function $58a75d28d9dc248b$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $58a75d28d9dc248b$var$linear(a, d) : $914bb64b8610205b$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}


var $222ce6d40bf576b0$export$2e2bcd8739ae039 = function rgbGamma(y) {
    var color = $58a75d28d9dc248b$export$a7ebe8cc6aaf8d37(y);
    function rgb(start, end) {
        var r = color((start = $2954f542d349766d$export$8972dc0e6ad9238f(start)).r, (end = $2954f542d349766d$export$8972dc0e6ad9238f(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = $58a75d28d9dc248b$export$2e2bcd8739ae039(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function $222ce6d40bf576b0$var$rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = $2954f542d349766d$export$8972dc0e6ad9238f(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var $222ce6d40bf576b0$export$2c0e28f2e2852d3f = $222ce6d40bf576b0$var$rgbSpline($05b44bfd206ff91a$export$2e2bcd8739ae039);
var $222ce6d40bf576b0$export$53d5214f625ccd4c = $222ce6d40bf576b0$var$rgbSpline($a2f6e498f44ccb1c$export$2e2bcd8739ae039);



function $0fb3554fc6ef9823$export$2e2bcd8739ae039(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function $0fb3554fc6ef9823$export$5cd576d1827d40c8(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


function $5b3d346cedd0f38e$export$2e2bcd8739ae039(a, b) {
    return ($0fb3554fc6ef9823$export$5cd576d1827d40c8(b) ? $0fb3554fc6ef9823$export$2e2bcd8739ae039 : $5b3d346cedd0f38e$export$15d09067c6a5ee49)(a, b);
}
function $5b3d346cedd0f38e$export$15d09067c6a5ee49(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = $8238a9623701a72d$export$2e2bcd8739ae039(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}


function $2e752d97a5c412dd$export$2e2bcd8739ae039(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}


function $dfbfcdf45b8423f1$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}



function $8dcf3bc7c1add2ac$export$2e2bcd8739ae039(a, b) {
    var i = {
    }, c = {
    }, k;
    if (a === null || typeof a !== "object") a = {
    };
    if (b === null || typeof b !== "object") b = {
    };
    for(k in b)if (k in a) i[k] = $8238a9623701a72d$export$2e2bcd8739ae039(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}



var $77d0961569c1196c$var$reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $77d0961569c1196c$var$reB = new RegExp($77d0961569c1196c$var$reA.source, "g");
function $77d0961569c1196c$var$zero(b) {
    return function() {
        return b;
    };
}
function $77d0961569c1196c$var$one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function $77d0961569c1196c$export$2e2bcd8739ae039(a, b) {
    var bi = $77d0961569c1196c$var$reA.lastIndex = $77d0961569c1196c$var$reB.lastIndex = 0, am, bm, bs, i1 = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = $77d0961569c1196c$var$reA.exec(a)) && (bm = $77d0961569c1196c$var$reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i1]) s[i1] += bs; // coalesce with previous string
            else s[++i1] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i1]) s[i1] += bm; // coalesce with previous string
            else s[++i1] = bm;
        } else {
            s[++i1] = null;
            q.push({
                i: i1,
                x: $dfbfcdf45b8423f1$export$2e2bcd8739ae039(am, bm)
            });
        }
        bi = $77d0961569c1196c$var$reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i1]) s[i1] += bs; // coalesce with previous string
        else s[++i1] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? $77d0961569c1196c$var$one(q[0].x) : $77d0961569c1196c$var$zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}




function $8238a9623701a72d$export$2e2bcd8739ae039(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? $914bb64b8610205b$export$2e2bcd8739ae039(b) : (t === "number" ? $dfbfcdf45b8423f1$export$2e2bcd8739ae039 : t === "string" ? (c = $2954f542d349766d$export$2e2bcd8739ae039(b)) ? (b = c, $222ce6d40bf576b0$export$2e2bcd8739ae039) : $77d0961569c1196c$export$2e2bcd8739ae039 : b instanceof $2954f542d349766d$export$2e2bcd8739ae039 ? $222ce6d40bf576b0$export$2e2bcd8739ae039 : b instanceof Date ? $2e752d97a5c412dd$export$2e2bcd8739ae039 : $0fb3554fc6ef9823$export$5cd576d1827d40c8(b) ? $0fb3554fc6ef9823$export$2e2bcd8739ae039 : Array.isArray(b) ? $5b3d346cedd0f38e$export$15d09067c6a5ee49 : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? $8dcf3bc7c1add2ac$export$2e2bcd8739ae039 : $dfbfcdf45b8423f1$export$2e2bcd8739ae039)(a, b);
}

var $10e162a99219027d$var$epsilon2 = 0.000000000001;
function $10e162a99219027d$var$cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function $10e162a99219027d$var$sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function $10e162a99219027d$var$tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var $10e162a99219027d$export$2e2bcd8739ae039 = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < $10e162a99219027d$var$epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = $10e162a99219027d$var$cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * $10e162a99219027d$var$tanh(rho * s + r0) - $10e162a99219027d$var$sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / $10e162a99219027d$var$cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(0.001, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);





var $74e74b1f8480eec7$var$frame = 0, $74e74b1f8480eec7$var$timeout = 0, $74e74b1f8480eec7$var$interval = 0, $74e74b1f8480eec7$var$pokeDelay = 1000, $74e74b1f8480eec7$var$taskHead, $74e74b1f8480eec7$var$taskTail, $74e74b1f8480eec7$var$clockLast = 0, $74e74b1f8480eec7$var$clockNow = 0, $74e74b1f8480eec7$var$clockSkew = 0, $74e74b1f8480eec7$var$clock = typeof performance === "object" && performance.now ? performance : Date, $74e74b1f8480eec7$var$setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function $74e74b1f8480eec7$export$461939dd4422153() {
    return $74e74b1f8480eec7$var$clockNow || ($74e74b1f8480eec7$var$setFrame($74e74b1f8480eec7$var$clearNow), $74e74b1f8480eec7$var$clockNow = $74e74b1f8480eec7$var$clock.now() + $74e74b1f8480eec7$var$clockSkew);
}
function $74e74b1f8480eec7$var$clearNow() {
    $74e74b1f8480eec7$var$clockNow = 0;
}
function $74e74b1f8480eec7$export$c57e9b2d8b9e4de() {
    this._call = this._time = this._next = null;
}
$74e74b1f8480eec7$export$c57e9b2d8b9e4de.prototype = $74e74b1f8480eec7$export$9dc4ecf953986f04.prototype = {
    constructor: $74e74b1f8480eec7$export$c57e9b2d8b9e4de,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? $74e74b1f8480eec7$export$461939dd4422153() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && $74e74b1f8480eec7$var$taskTail !== this) {
            if ($74e74b1f8480eec7$var$taskTail) $74e74b1f8480eec7$var$taskTail._next = this;
            else $74e74b1f8480eec7$var$taskHead = this;
            $74e74b1f8480eec7$var$taskTail = this;
        }
        this._call = callback;
        this._time = time;
        $74e74b1f8480eec7$var$sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            $74e74b1f8480eec7$var$sleep();
        }
    }
};
function $74e74b1f8480eec7$export$9dc4ecf953986f04(callback, delay, time) {
    var t = new $74e74b1f8480eec7$export$c57e9b2d8b9e4de;
    t.restart(callback, delay, time);
    return t;
}
function $74e74b1f8480eec7$export$d60154c1d7f3990e() {
    $74e74b1f8480eec7$export$461939dd4422153(); // Get the current time, if not already set.
    ++$74e74b1f8480eec7$var$frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = $74e74b1f8480eec7$var$taskHead, e;
    while(t){
        if ((e = $74e74b1f8480eec7$var$clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --$74e74b1f8480eec7$var$frame;
}
function $74e74b1f8480eec7$var$wake() {
    $74e74b1f8480eec7$var$clockNow = ($74e74b1f8480eec7$var$clockLast = $74e74b1f8480eec7$var$clock.now()) + $74e74b1f8480eec7$var$clockSkew;
    $74e74b1f8480eec7$var$frame = $74e74b1f8480eec7$var$timeout = 0;
    try {
        $74e74b1f8480eec7$export$d60154c1d7f3990e();
    } finally{
        $74e74b1f8480eec7$var$frame = 0;
        $74e74b1f8480eec7$var$nap();
        $74e74b1f8480eec7$var$clockNow = 0;
    }
}
function $74e74b1f8480eec7$var$poke() {
    var now = $74e74b1f8480eec7$var$clock.now(), delay = now - $74e74b1f8480eec7$var$clockLast;
    if (delay > $74e74b1f8480eec7$var$pokeDelay) $74e74b1f8480eec7$var$clockSkew -= delay, $74e74b1f8480eec7$var$clockLast = now;
}
function $74e74b1f8480eec7$var$nap() {
    var t0, t1 = $74e74b1f8480eec7$var$taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : $74e74b1f8480eec7$var$taskHead = t2;
    }
    $74e74b1f8480eec7$var$taskTail = t0;
    $74e74b1f8480eec7$var$sleep(time);
}
function $74e74b1f8480eec7$var$sleep(time) {
    if ($74e74b1f8480eec7$var$frame) return; // Soonest alarm already set, or will be.
    if ($74e74b1f8480eec7$var$timeout) $74e74b1f8480eec7$var$timeout = clearTimeout($74e74b1f8480eec7$var$timeout);
    var delay = time - $74e74b1f8480eec7$var$clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) $74e74b1f8480eec7$var$timeout = setTimeout($74e74b1f8480eec7$var$wake, time - $74e74b1f8480eec7$var$clock.now() - $74e74b1f8480eec7$var$clockSkew);
        if ($74e74b1f8480eec7$var$interval) $74e74b1f8480eec7$var$interval = clearInterval($74e74b1f8480eec7$var$interval);
    } else {
        if (!$74e74b1f8480eec7$var$interval) $74e74b1f8480eec7$var$clockLast = $74e74b1f8480eec7$var$clock.now(), $74e74b1f8480eec7$var$interval = setInterval($74e74b1f8480eec7$var$poke, $74e74b1f8480eec7$var$pokeDelay);
        $74e74b1f8480eec7$var$frame = 1, $74e74b1f8480eec7$var$setFrame($74e74b1f8480eec7$var$wake);
    }
}


function $2e12eb485015d18f$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new $74e74b1f8480eec7$export$c57e9b2d8b9e4de;
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}



var $78f0da7d5647f6f1$var$emptyOn = $af8c53f81f763b61$export$2e2bcd8739ae039("start", "end", "cancel", "interrupt");
var $78f0da7d5647f6f1$var$emptyTween = [];
var $78f0da7d5647f6f1$export$ff39ebd4bb12b718 = 0;
var $78f0da7d5647f6f1$export$584530fe98d14a84 = 1;
var $78f0da7d5647f6f1$export$a5d151aee16efd42 = 2;
var $78f0da7d5647f6f1$export$fb935ab5849a0db9 = 3;
var $78f0da7d5647f6f1$export$1573e22b087389af = 4;
var $78f0da7d5647f6f1$export$a2e792214ded83b2 = 5;
var $78f0da7d5647f6f1$export$9d38167254403955 = 6;
function $78f0da7d5647f6f1$export$2e2bcd8739ae039(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {
    };
    else if (id in schedules) return;
    $78f0da7d5647f6f1$var$create(node, id, {
        name: name,
        index: index,
        group: group,
        on: $78f0da7d5647f6f1$var$emptyOn,
        tween: $78f0da7d5647f6f1$var$emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: $78f0da7d5647f6f1$export$ff39ebd4bb12b718
    });
}
function $78f0da7d5647f6f1$export$2cd8252107eb640b(node, id) {
    var schedule = $78f0da7d5647f6f1$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $78f0da7d5647f6f1$export$ff39ebd4bb12b718) throw new Error("too late; already scheduled");
    return schedule;
}
function $78f0da7d5647f6f1$export$adaa4cf7ef1b65be(node, id) {
    var schedule = $78f0da7d5647f6f1$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $78f0da7d5647f6f1$export$fb935ab5849a0db9) throw new Error("too late; already running");
    return schedule;
}
function $78f0da7d5647f6f1$export$3988ae62b71be9a3(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function $78f0da7d5647f6f1$var$create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = $74e74b1f8480eec7$export$9dc4ecf953986f04(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = $78f0da7d5647f6f1$export$584530fe98d14a84;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== $78f0da7d5647f6f1$export$584530fe98d14a84) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === $78f0da7d5647f6f1$export$fb935ab5849a0db9) return $2e12eb485015d18f$export$2e2bcd8739ae039(start);
            // Interrupt the active transition, if any.
            if (o.state === $78f0da7d5647f6f1$export$1573e22b087389af) {
                o.state = $78f0da7d5647f6f1$export$9d38167254403955;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = $78f0da7d5647f6f1$export$9d38167254403955;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        $2e12eb485015d18f$export$2e2bcd8739ae039(function() {
            if (self.state === $78f0da7d5647f6f1$export$fb935ab5849a0db9) {
                self.state = $78f0da7d5647f6f1$export$1573e22b087389af;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = $78f0da7d5647f6f1$export$a5d151aee16efd42;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== $78f0da7d5647f6f1$export$a5d151aee16efd42) return; // interrupted
        self.state = $78f0da7d5647f6f1$export$fb935ab5849a0db9;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = $78f0da7d5647f6f1$export$a2e792214ded83b2, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === $78f0da7d5647f6f1$export$a2e792214ded83b2) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = $78f0da7d5647f6f1$export$9d38167254403955;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}


function $727a2160d31a24cf$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > $78f0da7d5647f6f1$export$a5d151aee16efd42 && schedule.state < $78f0da7d5647f6f1$export$a2e792214ded83b2;
        schedule.state = $78f0da7d5647f6f1$export$9d38167254403955;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}



var $b5d5d1d33a4a7c20$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $ad37b7e631bca7b1$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent , target: target , selection: selection , mode: mode , dispatch: dispatch  }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        selection: {
            value: selection,
            enumerable: true,
            configurable: true
        },
        mode: {
            value: mode,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}


function $2eb4a70ce37e18f4$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $2eb4a70ce37e18f4$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


var $331d82e4655cfe69$var$MODE_DRAG = {
    name: "drag"
}, $331d82e4655cfe69$var$MODE_SPACE = {
    name: "space"
}, $331d82e4655cfe69$var$MODE_HANDLE = {
    name: "handle"
}, $331d82e4655cfe69$var$MODE_CENTER = {
    name: "center"
};
const { abs: $331d82e4655cfe69$var$abs , max: $331d82e4655cfe69$var$max , min: $331d82e4655cfe69$var$min  } = Math;
function $331d82e4655cfe69$var$number1(e) {
    return [
        +e[0],
        +e[1]
    ];
}
function $331d82e4655cfe69$var$number2(e) {
    return [
        $331d82e4655cfe69$var$number1(e[0]),
        $331d82e4655cfe69$var$number1(e[1])
    ];
}
var $331d82e4655cfe69$var$X = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map($331d82e4655cfe69$var$type),
    input: function(x, e) {
        return x == null ? null : [
            [
                +x[0],
                e[0][1]
            ],
            [
                +x[1],
                e[1][1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][0],
            xy[1][0]
        ];
    }
};
var $331d82e4655cfe69$var$Y = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map($331d82e4655cfe69$var$type),
    input: function(y, e) {
        return y == null ? null : [
            [
                e[0][0],
                +y[0]
            ],
            [
                e[1][0],
                +y[1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][1],
            xy[1][1]
        ];
    }
};
var $331d82e4655cfe69$var$XY = {
    name: "xy",
    handles: [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map($331d82e4655cfe69$var$type),
    input: function(xy) {
        return xy == null ? null : $331d82e4655cfe69$var$number2(xy);
    },
    output: function(xy) {
        return xy;
    }
};
var $331d82e4655cfe69$var$cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
};
var $331d82e4655cfe69$var$flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
};
var $331d82e4655cfe69$var$flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
};
var $331d82e4655cfe69$var$signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
};
var $331d82e4655cfe69$var$signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
};
function $331d82e4655cfe69$var$type(t) {
    return {
        type: t
    };
}
// Ignore right-click, since that should open the context menu.
function $331d82e4655cfe69$var$defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function $331d82e4655cfe69$var$defaultExtent() {
    var svg = this.ownerSVGElement || this;
    if (svg.hasAttribute("viewBox")) {
        svg = svg.viewBox.baseVal;
        return [
            [
                svg.x,
                svg.y
            ],
            [
                svg.x + svg.width,
                svg.y + svg.height
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            svg.width.baseVal.value,
            svg.height.baseVal.value
        ]
    ];
}
function $331d82e4655cfe69$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
// Like d3.local, but with the name “__brush” rather than auto-generated.
function $331d82e4655cfe69$var$local(node) {
    while(!node.__brush)if (!(node = node.parentNode)) return;
    return node.__brush;
}
function $331d82e4655cfe69$var$empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function $331d82e4655cfe69$export$69760394fc76f689(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
}
function $331d82e4655cfe69$export$979ace6c88860aa8() {
    return $331d82e4655cfe69$var$brush($331d82e4655cfe69$var$X);
}
function $331d82e4655cfe69$export$468748b530991c54() {
    return $331d82e4655cfe69$var$brush($331d82e4655cfe69$var$Y);
}
function $331d82e4655cfe69$export$2e2bcd8739ae039() {
    return $331d82e4655cfe69$var$brush($331d82e4655cfe69$var$XY);
}
function $331d82e4655cfe69$var$brush(dim) {
    var extent1 = $331d82e4655cfe69$var$defaultExtent, filter = $331d82e4655cfe69$var$defaultFilter, touchable = $331d82e4655cfe69$var$defaultTouchable, keys = true, listeners = $af8c53f81f763b61$export$2e2bcd8739ae039("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
        var overlay = group.property("__brush", initialize).selectAll(".overlay").data([
            $331d82e4655cfe69$var$type("overlay")
        ]);
        overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $331d82e4655cfe69$var$cursors.overlay).merge(overlay).each(function() {
            var extent = $331d82e4655cfe69$var$local(this).extent;
            $8ef98f1350267a83$export$2e2bcd8739ae039(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
        });
        group.selectAll(".selection").data([
            $331d82e4655cfe69$var$type("selection")
        ]).enter().append("rect").attr("class", "selection").attr("cursor", $331d82e4655cfe69$var$cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var handle = group.selectAll(".handle").data(dim.handles, function(d) {
            return d.type;
        });
        handle.exit().remove();
        handle.enter().append("rect").attr("class", function(d) {
            return "handle handle--" + d.type;
        }).attr("cursor", function(d) {
            return $331d82e4655cfe69$var$cursors[d.type];
        });
        group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function(group, selection, event1) {
        if (group.tween) group.on("start.brush", function(event) {
            emitter(this, arguments).beforestart().start(event);
        }).on("interrupt.brush end.brush", function(event) {
            emitter(this, arguments).end(event);
        }).tween("brush", function() {
            var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = $8238a9623701a72d$export$2e2bcd8739ae039(selection0, selection1);
            function tween(t) {
                state.selection = t === 1 && selection1 === null ? null : i(t);
                redraw.call(that);
                emit.brush();
            }
            return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
        else group.each(function() {
            var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
            $727a2160d31a24cf$export$2e2bcd8739ae039(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event1).brush(event1).end(event1);
        });
    };
    brush.clear = function(group, event) {
        brush.move(group, null, event);
    };
    function redraw() {
        var group = $8ef98f1350267a83$export$2e2bcd8739ae039(this), selection = $331d82e4655cfe69$var$local(this).selection;
        if (selection) {
            group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
            group.selectAll(".handle").style("display", null).attr("x", function(d) {
                return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
            }).attr("y", function(d) {
                return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
            }).attr("width", function(d) {
                return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
            }).attr("height", function(d) {
                return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
            });
        } else group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
    function emitter(that, args, clean) {
        var emit = that.__brush.emitter;
        return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
        this.that = that;
        this.args = args;
        this.state = that.__brush;
        this.active = 0;
        this.clean = clean;
    }
    Emitter.prototype = {
        beforestart: function() {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
        },
        start: function(event, mode) {
            if (this.starting) this.starting = false, this.emit("start", event, mode);
            else this.emit("brush", event);
            return this;
        },
        brush: function(event, mode) {
            this.emit("brush", event, mode);
            return this;
        },
        end: function(event, mode) {
            if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
            return this;
        },
        emit: function(type, event, mode) {
            var d = $8ef98f1350267a83$export$2e2bcd8739ae039(this.that).datum();
            listeners.call(type, this.that, new $ad37b7e631bca7b1$export$2e2bcd8739ae039(type, {
                sourceEvent: event,
                target: brush,
                selection: dim.output(this.state.selection),
                mode: mode,
                dispatch: listeners
            }), d);
        }
    };
    function started(event2) {
        if (touchending && !event2.touches) return;
        if (!filter.apply(this, arguments)) return;
        var that = this, type = event2.target.__data__.type, mode = (keys && event2.metaKey ? type = "overlay" : type) === "selection" ? $331d82e4655cfe69$var$MODE_DRAG : keys && event2.altKey ? $331d82e4655cfe69$var$MODE_CENTER : $331d82e4655cfe69$var$MODE_HANDLE, signX = dim === $331d82e4655cfe69$var$Y ? null : $331d82e4655cfe69$var$signsX[type], signY = dim === $331d82e4655cfe69$var$X ? null : $331d82e4655cfe69$var$signsY[type], state = $331d82e4655cfe69$var$local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event2.shiftKey, lockX, lockY, points = Array.from(event2.touches || [
            event2
        ], (t)=>{
            const i = t.identifier;
            t = $2072ac4b843485e2$export$2e2bcd8739ae039(t, that);
            t.point0 = t.slice();
            t.identifier = i;
            return t;
        });
        $727a2160d31a24cf$export$2e2bcd8739ae039(that);
        var emit = emitter(that, arguments, true).beforestart();
        if (type === "overlay") {
            if (selection) moving = true;
            const pts = [
                points[0],
                points[1] || points[0]
            ];
            state.selection = selection = [
                [
                    w0 = dim === $331d82e4655cfe69$var$Y ? W : $331d82e4655cfe69$var$min(pts[0][0], pts[1][0]),
                    n0 = dim === $331d82e4655cfe69$var$X ? N : $331d82e4655cfe69$var$min(pts[0][1], pts[1][1])
                ],
                [
                    e0 = dim === $331d82e4655cfe69$var$Y ? E : $331d82e4655cfe69$var$max(pts[0][0], pts[1][0]),
                    s0 = dim === $331d82e4655cfe69$var$X ? S : $331d82e4655cfe69$var$max(pts[0][1], pts[1][1])
                ]
            ];
            if (points.length > 1) move(event2);
        } else {
            w0 = selection[0][0];
            n0 = selection[0][1];
            e0 = selection[1][0];
            s0 = selection[1][1];
        }
        w1 = w0;
        n1 = n0;
        e1 = e0;
        s1 = s0;
        var group = $8ef98f1350267a83$export$2e2bcd8739ae039(that).attr("pointer-events", "none");
        var overlay = group.selectAll(".overlay").attr("cursor", $331d82e4655cfe69$var$cursors[type]);
        if (event2.touches) {
            emit.moved = moved;
            emit.ended = ended;
        } else {
            var view = $8ef98f1350267a83$export$2e2bcd8739ae039(event2.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
            $7a3eaac7e81fc371$export$2e2bcd8739ae039(event2.view);
        }
        redraw.call(that);
        emit.start(event2, mode.name);
        function moved(event) {
            for (const p of event.changedTouches || [
                event
            ]){
                for (const d of points)if (d.identifier === p.identifier) d.cur = $2072ac4b843485e2$export$2e2bcd8739ae039(p, that);
            }
            if (shifting && !lockX && !lockY && points.length === 1) {
                const point = points[0];
                if ($331d82e4655cfe69$var$abs(point.cur[0] - point[0]) > $331d82e4655cfe69$var$abs(point.cur[1] - point[1])) lockY = true;
                else lockX = true;
            }
            for (const point of points)if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
            moving = true;
            $2eb4a70ce37e18f4$export$2e2bcd8739ae039(event);
            move(event);
        }
        function move(event) {
            const point = points[0], point0 = point.point0;
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch(mode){
                case $331d82e4655cfe69$var$MODE_SPACE:
                case $331d82e4655cfe69$var$MODE_DRAG:
                    if (signX) dx = $331d82e4655cfe69$var$max(W - w0, $331d82e4655cfe69$var$min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                    if (signY) dy = $331d82e4655cfe69$var$max(N - n0, $331d82e4655cfe69$var$min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                    break;
                case $331d82e4655cfe69$var$MODE_HANDLE:
                    if (points[1]) {
                        if (signX) w1 = $331d82e4655cfe69$var$max(W, $331d82e4655cfe69$var$min(E, points[0][0])), e1 = $331d82e4655cfe69$var$max(W, $331d82e4655cfe69$var$min(E, points[1][0])), signX = 1;
                        if (signY) n1 = $331d82e4655cfe69$var$max(N, $331d82e4655cfe69$var$min(S, points[0][1])), s1 = $331d82e4655cfe69$var$max(N, $331d82e4655cfe69$var$min(S, points[1][1])), signY = 1;
                    } else {
                        if (signX < 0) dx = $331d82e4655cfe69$var$max(W - w0, $331d82e4655cfe69$var$min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
                        else if (signX > 0) dx = $331d82e4655cfe69$var$max(W - e0, $331d82e4655cfe69$var$min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                        if (signY < 0) dy = $331d82e4655cfe69$var$max(N - n0, $331d82e4655cfe69$var$min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
                        else if (signY > 0) dy = $331d82e4655cfe69$var$max(N - s0, $331d82e4655cfe69$var$min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                    }
                    break;
                case $331d82e4655cfe69$var$MODE_CENTER:
                    if (signX) w1 = $331d82e4655cfe69$var$max(W, $331d82e4655cfe69$var$min(E, w0 - dx * signX)), e1 = $331d82e4655cfe69$var$max(W, $331d82e4655cfe69$var$min(E, e0 + dx * signX));
                    if (signY) n1 = $331d82e4655cfe69$var$max(N, $331d82e4655cfe69$var$min(S, n0 - dy * signY)), s1 = $331d82e4655cfe69$var$max(N, $331d82e4655cfe69$var$min(S, s0 + dy * signY));
                    break;
            }
            if (e1 < w1) {
                signX *= -1;
                t = w0, w0 = e0, e0 = t;
                t = w1, w1 = e1, e1 = t;
                if (type in $331d82e4655cfe69$var$flipX) overlay.attr("cursor", $331d82e4655cfe69$var$cursors[type = $331d82e4655cfe69$var$flipX[type]]);
            }
            if (s1 < n1) {
                signY *= -1;
                t = n0, n0 = s0, s0 = t;
                t = n1, n1 = s1, s1 = t;
                if (type in $331d82e4655cfe69$var$flipY) overlay.attr("cursor", $331d82e4655cfe69$var$cursors[type = $331d82e4655cfe69$var$flipY[type]]);
            }
            if (state.selection) selection = state.selection; // May be set by brush.move!
            if (lockX) w1 = selection[0][0], e1 = selection[1][0];
            if (lockY) n1 = selection[0][1], s1 = selection[1][1];
            if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
                state.selection = [
                    [
                        w1,
                        n1
                    ],
                    [
                        e1,
                        s1
                    ]
                ];
                redraw.call(that);
                emit.brush(event, mode.name);
            }
        }
        function ended(event) {
            $2eb4a70ce37e18f4$export$2e2561858db9bf47(event);
            if (event.touches) {
                if (event.touches.length) return;
                if (touchending) clearTimeout(touchending);
                touchending = setTimeout(function() {
                    touchending = null;
                }, 500); // Ghost clicks are delayed!
            } else {
                $7a3eaac7e81fc371$export$833237748009e1e1(event.view, moving);
                view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", $331d82e4655cfe69$var$cursors.overlay);
            if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
            if ($331d82e4655cfe69$var$empty(selection)) state.selection = null, redraw.call(that);
            emit.end(event, mode.name);
        }
        function keydowned(event) {
            switch(event.keyCode){
                case 16:
                    shifting = signX && signY;
                    break;
                case 18:
                    if (mode === $331d82e4655cfe69$var$MODE_HANDLE) {
                        if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                        if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                        mode = $331d82e4655cfe69$var$MODE_CENTER;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $331d82e4655cfe69$var$MODE_HANDLE || mode === $331d82e4655cfe69$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1 - dx;
                        else if (signX > 0) w0 = w1 - dx;
                        if (signY < 0) s0 = s1 - dy;
                        else if (signY > 0) n0 = n1 - dy;
                        mode = $331d82e4655cfe69$var$MODE_SPACE;
                        overlay.attr("cursor", $331d82e4655cfe69$var$cursors.selection);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            $2eb4a70ce37e18f4$export$2e2bcd8739ae039(event);
        }
        function keyupped(event) {
            switch(event.keyCode){
                case 16:
                    if (shifting) {
                        lockX = lockY = shifting = false;
                        move(event);
                    }
                    break;
                case 18:
                    if (mode === $331d82e4655cfe69$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1;
                        else if (signX > 0) w0 = w1;
                        if (signY < 0) s0 = s1;
                        else if (signY > 0) n0 = n1;
                        mode = $331d82e4655cfe69$var$MODE_HANDLE;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $331d82e4655cfe69$var$MODE_SPACE) {
                        if (event.altKey) {
                            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                            mode = $331d82e4655cfe69$var$MODE_CENTER;
                        } else {
                            if (signX < 0) e0 = e1;
                            else if (signX > 0) w0 = w1;
                            if (signY < 0) s0 = s1;
                            else if (signY > 0) n0 = n1;
                            mode = $331d82e4655cfe69$var$MODE_HANDLE;
                        }
                        overlay.attr("cursor", $331d82e4655cfe69$var$cursors[type]);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            $2eb4a70ce37e18f4$export$2e2bcd8739ae039(event);
        }
    }
    function touchmoved(event) {
        emitter(this, arguments).moved(event);
    }
    function touchended(event) {
        emitter(this, arguments).ended(event);
    }
    function initialize() {
        var state = this.__brush || {
            selection: null
        };
        state.extent = $331d82e4655cfe69$var$number2(extent1.apply(this, arguments));
        state.dim = dim;
        return state;
    }
    brush.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : $b5d5d1d33a4a7c20$export$2e2bcd8739ae039($331d82e4655cfe69$var$number2(_)), brush) : extent1;
    };
    brush.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : $b5d5d1d33a4a7c20$export$2e2bcd8739ae039(!!_), brush) : filter;
    };
    brush.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : $b5d5d1d33a4a7c20$export$2e2bcd8739ae039(!!_), brush) : touchable;
    };
    brush.handleSize = function(_) {
        return arguments.length ? (handleSize = +_, brush) : handleSize;
    };
    brush.keyModifiers = function(_) {
        return arguments.length ? (keys = !!_, brush) : keys;
    };
    brush.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? brush : value;
    };
    return brush;
}
















function $2ac18b6b1803d52a$var$count(node) {
    var sum = 0, children = node.children, i = children && children.length;
    if (!i) sum = 1;
    else while(--i >= 0)sum += children[i].value;
    node.value = sum;
}
function $2ac18b6b1803d52a$export$2e2bcd8739ae039() {
    return this.eachAfter($2ac18b6b1803d52a$var$count);
}


function $87ce8b1d602b7e8f$export$2e2bcd8739ae039(callback, that) {
    let index = -1;
    for (const node of this)callback.call(that, node, ++index, this);
    return this;
}


function $a7921dabe57df6f4$export$2e2bcd8739ae039(callback, that) {
    var node = this, nodes = [
        node
    ], children, i, index = -1;
    while(node = nodes.pop()){
        callback.call(that, node, ++index, this);
        if (children = node.children) for(i = children.length - 1; i >= 0; --i)nodes.push(children[i]);
    }
    return this;
}


function $ae2e5e3c1fc1a319$export$2e2bcd8739ae039(callback, that) {
    var node = this, nodes = [
        node
    ], next = [], children, i, n, index = -1;
    while(node = nodes.pop()){
        next.push(node);
        if (children = node.children) for(i = 0, n = children.length; i < n; ++i)nodes.push(children[i]);
    }
    while(node = next.pop())callback.call(that, node, ++index, this);
    return this;
}


function $b571eb5a87c2b337$export$2e2bcd8739ae039(callback, that) {
    let index = -1;
    for (const node of this){
        if (callback.call(that, node, ++index, this)) return node;
    }
}


function $628f486a0455318f$export$2e2bcd8739ae039(value) {
    return this.eachAfter(function(node) {
        var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
        while(--i >= 0)sum += children[i].value;
        node.value = sum;
    });
}


function $59aa9797ada97edd$export$2e2bcd8739ae039(compare) {
    return this.eachBefore(function(node) {
        if (node.children) node.children.sort(compare);
    });
}


function $75cbe0e7ef5fc69b$export$2e2bcd8739ae039(end) {
    var start = this, ancestor = $75cbe0e7ef5fc69b$var$leastCommonAncestor(start, end), nodes = [
        start
    ];
    while(start !== ancestor){
        start = start.parent;
        nodes.push(start);
    }
    var k = nodes.length;
    while(end !== ancestor){
        nodes.splice(k, 0, end);
        end = end.parent;
    }
    return nodes;
}
function $75cbe0e7ef5fc69b$var$leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while(a === b){
        c = a;
        a = aNodes.pop();
        b = bNodes.pop();
    }
    return c;
}


function $aecc935a58d8dbfc$export$2e2bcd8739ae039() {
    var node = this, nodes = [
        node
    ];
    while(node = node.parent)nodes.push(node);
    return nodes;
}


function $8129c2017b19a637$export$2e2bcd8739ae039() {
    return Array.from(this);
}


function $64b4c883db30c3f2$export$2e2bcd8739ae039() {
    var leaves = [];
    this.eachBefore(function(node) {
        if (!node.children) leaves.push(node);
    });
    return leaves;
}


function $c16189008517e96c$export$2e2bcd8739ae039() {
    var root = this, links = [];
    root.each(function(node) {
        if (node !== root) links.push({
            source: node.parent,
            target: node
        });
    });
    return links;
}


function* $d2b485d582ace13f$export$2e2bcd8739ae039() {
    var node = this, current, next = [
        node
    ], children, i, n;
    do {
        current = next.reverse(), next = [];
        while(node = current.pop()){
            yield node;
            if (children = node.children) for(i = 0, n = children.length; i < n; ++i)next.push(children[i]);
        }
    }while (next.length)
}


function $2c785ab2e8f496d7$export$2e2bcd8739ae039(data, children) {
    if (data instanceof Map) {
        data = [
            undefined,
            data
        ];
        if (children === undefined) children = $2c785ab2e8f496d7$var$mapChildren;
    } else if (children === undefined) children = $2c785ab2e8f496d7$var$objectChildren;
    var root = new $2c785ab2e8f496d7$export$85c928794f8d04d4(data), node, nodes = [
        root
    ], child, childs, i, n;
    while(node = nodes.pop())if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for(i = n - 1; i >= 0; --i){
            nodes.push(child = childs[i] = new $2c785ab2e8f496d7$export$85c928794f8d04d4(childs[i]));
            child.parent = node;
            child.depth = node.depth + 1;
        }
    }
    return root.eachBefore($2c785ab2e8f496d7$export$5af32d52ab5dfd57);
}
function $2c785ab2e8f496d7$var$node_copy() {
    return $2c785ab2e8f496d7$export$2e2bcd8739ae039(this).eachBefore($2c785ab2e8f496d7$var$copyData);
}
function $2c785ab2e8f496d7$var$objectChildren(d) {
    return d.children;
}
function $2c785ab2e8f496d7$var$mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
}
function $2c785ab2e8f496d7$var$copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
}
function $2c785ab2e8f496d7$export$5af32d52ab5dfd57(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && node.height < ++height)
}
function $2c785ab2e8f496d7$export$85c928794f8d04d4(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
}
$2c785ab2e8f496d7$export$85c928794f8d04d4.prototype = $2c785ab2e8f496d7$export$2e2bcd8739ae039.prototype = {
    constructor: $2c785ab2e8f496d7$export$85c928794f8d04d4,
    count: $2ac18b6b1803d52a$export$2e2bcd8739ae039,
    each: $87ce8b1d602b7e8f$export$2e2bcd8739ae039,
    eachAfter: $ae2e5e3c1fc1a319$export$2e2bcd8739ae039,
    eachBefore: $a7921dabe57df6f4$export$2e2bcd8739ae039,
    find: $b571eb5a87c2b337$export$2e2bcd8739ae039,
    sum: $628f486a0455318f$export$2e2bcd8739ae039,
    sort: $59aa9797ada97edd$export$2e2bcd8739ae039,
    path: $75cbe0e7ef5fc69b$export$2e2bcd8739ae039,
    ancestors: $aecc935a58d8dbfc$export$2e2bcd8739ae039,
    descendants: $8129c2017b19a637$export$2e2bcd8739ae039,
    leaves: $64b4c883db30c3f2$export$2e2bcd8739ae039,
    links: $c16189008517e96c$export$2e2bcd8739ae039,
    copy: $2c785ab2e8f496d7$var$node_copy,
    [Symbol.iterator]: $d2b485d582ace13f$export$2e2bcd8739ae039
};











const $67bc606d6f0e3183$var$pi = Math.PI, $67bc606d6f0e3183$var$tau = 2 * $67bc606d6f0e3183$var$pi, $67bc606d6f0e3183$var$epsilon = 0.000001, $67bc606d6f0e3183$var$tauEpsilon = $67bc606d6f0e3183$var$tau - $67bc606d6f0e3183$var$epsilon;
function $67bc606d6f0e3183$var$Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function $67bc606d6f0e3183$var$path() {
    return new $67bc606d6f0e3183$var$Path;
}
$67bc606d6f0e3183$var$Path.prototype = $67bc606d6f0e3183$var$path.prototype = {
    constructor: $67bc606d6f0e3183$var$Path,
    moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        else if (!(l01_2 > $67bc606d6f0e3183$var$epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > $67bc606d6f0e3183$var$epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(($67bc606d6f0e3183$var$pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > $67bc606d6f0e3183$var$epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._ += "M" + x0 + "," + y0;
        else if (Math.abs(this._x1 - x0) > $67bc606d6f0e3183$var$epsilon || Math.abs(this._y1 - y0) > $67bc606d6f0e3183$var$epsilon) this._ += "L" + x0 + "," + y0;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % $67bc606d6f0e3183$var$tau + $67bc606d6f0e3183$var$tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > $67bc606d6f0e3183$var$tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        else if (da > $67bc606d6f0e3183$var$epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= $67bc606d6f0e3183$var$pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    },
    rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
        return this._;
    }
};
var $67bc606d6f0e3183$export$2e2bcd8739ae039 = $67bc606d6f0e3183$var$path;



var $16a6f5626e19c3a8$export$58adb3bec8346d0f = Array.prototype.slice;
function $16a6f5626e19c3a8$export$2e2bcd8739ae039(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}


function $478019d7a24034a3$export$2e2bcd8739ae039(x) {
    return function constant() {
        return x;
    };
}


function $c9dd83b7f959372d$export$d141bba7fdc215a3(p) {
    return p[0];
}
function $c9dd83b7f959372d$export$4a5767248b18ef41(p) {
    return p[1];
}


function $836fb6d465d70463$export$2e2bcd8739ae039(x, y) {
    return [
        (y = +y) * Math.cos(x -= Math.PI / 2),
        y * Math.sin(x)
    ];
}


function $0af3af8f39276c55$var$linkSource(d) {
    return d.source;
}
function $0af3af8f39276c55$var$linkTarget(d) {
    return d.target;
}
function $0af3af8f39276c55$var$link(curve) {
    var source = $0af3af8f39276c55$var$linkSource, target = $0af3af8f39276c55$var$linkTarget, x = $c9dd83b7f959372d$export$d141bba7fdc215a3, y = $c9dd83b7f959372d$export$4a5767248b18ef41, context = null;
    function link() {
        var buffer, argv = $16a6f5626e19c3a8$export$58adb3bec8346d0f.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
        if (!context) context = buffer = $67bc606d6f0e3183$export$2e2bcd8739ae039();
        curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
        if (buffer) return context = null, buffer + "" || null;
    }
    link.source = function(_) {
        return arguments.length ? (source = _, link) : source;
    };
    link.target = function(_) {
        return arguments.length ? (target = _, link) : target;
    };
    link.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : $478019d7a24034a3$export$2e2bcd8739ae039(+_), link) : x;
    };
    link.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : $478019d7a24034a3$export$2e2bcd8739ae039(+_), link) : y;
    };
    link.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, link) : context;
    };
    return link;
}
function $0af3af8f39276c55$var$curveHorizontal(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}
function $0af3af8f39276c55$var$curveVertical(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}
function $0af3af8f39276c55$var$curveRadial(context, x0, y0, x1, y1) {
    var p0 = $836fb6d465d70463$export$2e2bcd8739ae039(x0, y0), p1 = $836fb6d465d70463$export$2e2bcd8739ae039(x0, y0 = (y0 + y1) / 2), p2 = $836fb6d465d70463$export$2e2bcd8739ae039(x1, y0), p3 = $836fb6d465d70463$export$2e2bcd8739ae039(x1, y1);
    context.moveTo(p0[0], p0[1]);
    context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}
function $0af3af8f39276c55$export$e7c381889b2cd14d() {
    return $0af3af8f39276c55$var$link($0af3af8f39276c55$var$curveHorizontal);
}
function $0af3af8f39276c55$export$75de4c8c66884e04() {
    return $0af3af8f39276c55$var$link($0af3af8f39276c55$var$curveVertical);
}
function $0af3af8f39276c55$export$7739cfe68d4e0799() {
    var l = $0af3af8f39276c55$var$link($0af3af8f39276c55$var$curveRadial);
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    return l;
}












var $2691809f86ffdb57$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $c39a9077473dfac9$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent , target: target , transform: transform , dispatch: dispatch  }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}


function $bc8ab33d399a4019$export$563a914cafbdc389(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
$bc8ab33d399a4019$export$563a914cafbdc389.prototype = {
    constructor: $bc8ab33d399a4019$export$563a914cafbdc389,
    scale: function(k) {
        return k === 1 ? this : new $bc8ab33d399a4019$export$563a914cafbdc389(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new $bc8ab33d399a4019$export$563a914cafbdc389(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var $bc8ab33d399a4019$export$f0954fd7d5368655 = new $bc8ab33d399a4019$export$563a914cafbdc389(1, 0, 0);
$bc8ab33d399a4019$export$2e2bcd8739ae039.prototype = $bc8ab33d399a4019$export$563a914cafbdc389.prototype;
function $bc8ab33d399a4019$export$2e2bcd8739ae039(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return $bc8ab33d399a4019$export$f0954fd7d5368655;
    return node.__zoom;
}


function $c1c9bff87109faa1$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $c1c9bff87109faa1$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function $be38667475e048e9$var$defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function $be38667475e048e9$var$defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function $be38667475e048e9$var$defaultTransform() {
    return this.__zoom || $bc8ab33d399a4019$export$f0954fd7d5368655;
}
function $be38667475e048e9$var$defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function $be38667475e048e9$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $be38667475e048e9$var$defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function $be38667475e048e9$export$2e2bcd8739ae039() {
    var filter = $be38667475e048e9$var$defaultFilter, extent1 = $be38667475e048e9$var$defaultExtent, constrain = $be38667475e048e9$var$defaultConstrain, wheelDelta = $be38667475e048e9$var$defaultWheelDelta, touchable = $be38667475e048e9$var$defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = $10e162a99219027d$export$2e2bcd8739ae039, listeners = $af8c53f81f763b61$export$2e2bcd8739ae039("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", $be38667475e048e9$var$defaultTransform).on("wheel.zoom", wheeled, {
            passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", $be38667475e048e9$var$defaultTransform);
        if (collection !== selection) schedule(collection, transform, point, event);
        else selection.interrupt().each(function() {
            gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent1.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent1.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent1.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain($bc8ab33d399a4019$export$f0954fd7d5368655.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new $bc8ab33d399a4019$export$563a914cafbdc389(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new $bc8ab33d399a4019$export$563a914cafbdc389(transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent1.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new $bc8ab33d399a4019$export$563a914cafbdc389(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent1.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = $8ef98f1350267a83$export$2e2bcd8739ae039(this.that).datum();
            listeners.call(type, this.that, new $c39a9077473dfac9$export$2e2bcd8739ae039(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type: type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = $2072ac4b843485e2$export$2e2bcd8739ae039(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            $727a2160d31a24cf$export$2e2bcd8739ae039(this);
            g.start();
        }
        $c1c9bff87109faa1$export$2e2bcd8739ae039(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event1, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event1.currentTarget, g = gesture(this, args, true).event(event1), v = $8ef98f1350267a83$export$2e2bcd8739ae039(event1.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = $2072ac4b843485e2$export$2e2bcd8739ae039(event1, currentTarget), x0 = event1.clientX, y0 = event1.clientY;
        $7a3eaac7e81fc371$export$2e2bcd8739ae039(event1.view);
        $c1c9bff87109faa1$export$2e2561858db9bf47(event1);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        $727a2160d31a24cf$export$2e2bcd8739ae039(this);
        g.start();
        function mousemoved(event) {
            $c1c9bff87109faa1$export$2e2bcd8739ae039(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = $2072ac4b843485e2$export$2e2bcd8739ae039(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            $7a3eaac7e81fc371$export$833237748009e1e1(event.view, g.moved);
            $c1c9bff87109faa1$export$2e2bcd8739ae039(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = $2072ac4b843485e2$export$2e2bcd8739ae039(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent1.apply(this, args), translateExtent);
        $c1c9bff87109faa1$export$2e2bcd8739ae039(event);
        if (duration > 0) $8ef98f1350267a83$export$2e2bcd8739ae039(this).transition().duration(duration).call(schedule, t1, p0, event);
        else $8ef98f1350267a83$export$2e2bcd8739ae039(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        $c1c9bff87109faa1$export$2e2561858db9bf47(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $2072ac4b843485e2$export$2e2bcd8739ae039(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            $727a2160d31a24cf$export$2e2bcd8739ae039(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        $c1c9bff87109faa1$export$2e2bcd8739ae039(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $2072ac4b843485e2$export$2e2bcd8739ae039(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        $c1c9bff87109faa1$export$2e2561858db9bf47(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = $2072ac4b843485e2$export$2e2bcd8739ae039(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = $8ef98f1350267a83$export$2e2bcd8739ae039(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : $2691809f86ffdb57$export$2e2bcd8739ae039(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : $2691809f86ffdb57$export$2e2bcd8739ae039(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : $2691809f86ffdb57$export$2e2bcd8739ae039(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : $2691809f86ffdb57$export$2e2bcd8739ae039([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent1;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}







var $241242b2e9bc75a0$var$IndexType;
(function(IndexType) {
    IndexType[IndexType["Ascending"] = 0] = "Ascending";
    IndexType[IndexType["Descending"] = 1] = "Descending";
    IndexType[IndexType["Text"] = 2] = "Text";
    IndexType[IndexType["Geospatial"] = 3] = "Geospatial";
    IndexType[IndexType["Hashed"] = 4] = "Hashed";
})($241242b2e9bc75a0$var$IndexType || ($241242b2e9bc75a0$var$IndexType = {
}));
function $241242b2e9bc75a0$export$47befd089b54cd80(model) {
    return !!model.children;
}
const $241242b2e9bc75a0$export$10402bfe6347692 = {
    name: 'Fields',
    notes: 'This is the collection for accounts',
    children: [
        {
            name: '_id',
            type: 'ObjectId',
            notes: 'This _id is autogenerated by Mongodb upon insertion. More notes here blah blah blah blah'
        },
        {
            name: 'changeId',
            type: 'string'
        },
        {
            name: 'masterAccountId',
            type: 'string'
        },
        {
            name: 'unifiedAccountId',
            type: 'string'
        },
        {
            name: 'billingAccountId',
            type: 'string'
        },
        {
            name: 'toolkitHidden',
            type: 'boolean'
        },
        {
            name: 'termsVersionAccepted',
            type: 'string'
        },
        {
            name: 'isApproved',
            type: 'boolean'
        },
        {
            name: 'dateCreated',
            type: 'Date'
        },
        {
            name: 'dateOfEnrollment',
            type: 'Date'
        },
        {
            name: 'dateOfTrialExpiration',
            type: 'Date'
        },
        {
            name: 'dateOfNextRenewal',
            type: 'Date'
        },
        {
            name: 'dateOfGracePeriodExpiration',
            type: 'Date'
        },
        {
            name: 'dateOfInvoicePaymentPending',
            type: 'Date'
        },
        {
            name: 'dateOfInvoicePaymentPastDue',
            type: 'Date'
        },
        {
            name: 'dateOfCancellation',
            type: 'Date'
        },
        {
            name: 'paymentType',
            type: 'PaymentType'
        },
        {
            name: 'plan',
            optional: true,
            notes: 'Plan',
            children: [
                {
                    name: 'type',
                    type: 'string'
                },
                {
                    name: 'maxUsers',
                    type: 'number',
                    optional: true,
                    notes: 'maxUsers'
                },
                {
                    name: 'maxCandidates',
                    type: 'number',
                    optional: true
                },
                {
                    name: 'maxOpenings',
                    type: 'number'
                }, 
            ]
        },
        {
            name: 'isTrial',
            type: 'boolean'
        },
        {
            name: 'isUnlimitedTrial',
            type: 'boolean'
        },
        {
            name: 'status',
            type: 'AccountStatus'
        },
        {
            name: 'subStatus',
            type: 'AccountSubStatus'
        },
        {
            name: 'numberOfActiveOpenings',
            type: 'number'
        },
        {
            name: 'numberOfCandidates',
            type: 'number'
        },
        {
            name: 'users[]',
            children: [
                {
                    name: 'id',
                    type: 'string'
                },
                {
                    name: 'firstName',
                    type: 'string'
                },
                {
                    name: 'lastName',
                    type: 'string'
                },
                {
                    name: 'email',
                    type: 'string'
                },
                {
                    name: 'pending',
                    type: 'boolean'
                },
                {
                    name: 'dateCreated',
                    type: 'Date'
                },
                {
                    name: 'role',
                    type: 'AccountUserRole'
                },
                {
                    name: 'canAddJobOpenings',
                    type: 'boolean'
                }, 
            ]
        },
        {
            name: 'sentEmails',
            children: [
                {
                    name: 'firstCandidateResult',
                    type: 'boolean'
                }
            ]
        },
        {
            name: 'audits[]',
            children: [
                {
                    name: 'privateName',
                    optional: true,
                    children: [
                        {
                            name: 'dateUpdate',
                            type: 'Date'
                        },
                        {
                            name: 'previousValue',
                            type: 'string'
                        },
                        {
                            name: 'newValue',
                            type: 'string'
                        },
                        {
                            name: 'updatedByUser',
                            type: 'User'
                        },
                        {
                            name: 'uupdatedByUserupdatedByUserupdatedByUserupdatedByUserpdatedByUser',
                            optional: true,
                            type: 'User'
                        }, 
                    ]
                }, 
            ]
        },
        {
            name: 'featureFlags',
            children: [
                {
                    name: 'excludeOptionalPII',
                    type: 'boolean'
                },
                {
                    name: 'enableCandidateReport',
                    type: 'boolean'
                },
                {
                    name: 'enableMLJobDirectory',
                    type: 'boolean'
                },
                {
                    name: 'experimentalActivities',
                    type: 'boolean'
                },
                {
                    name: 'enableJob2vec',
                    type: 'boolean'
                }, 
            ]
        }, 
    ]
};


const $90e896f729ee1e04$export$49d7b074b141ca56 = 17;
const $90e896f729ee1e04$export$91a15f1424900d33 = 14;



var $b4ea8558997619c7$exports = {};
var $3f742a469798a47c$exports = {};
// shim for using process in browser
var $3f742a469798a47c$var$process = $3f742a469798a47c$exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $3f742a469798a47c$var$cachedSetTimeout;
var $3f742a469798a47c$var$cachedClearTimeout;
function $3f742a469798a47c$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $3f742a469798a47c$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $3f742a469798a47c$var$cachedSetTimeout = setTimeout;
        else $3f742a469798a47c$var$cachedSetTimeout = $3f742a469798a47c$var$defaultSetTimout;
    } catch (e) {
        $3f742a469798a47c$var$cachedSetTimeout = $3f742a469798a47c$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $3f742a469798a47c$var$cachedClearTimeout = clearTimeout;
        else $3f742a469798a47c$var$cachedClearTimeout = $3f742a469798a47c$var$defaultClearTimeout;
    } catch (e1) {
        $3f742a469798a47c$var$cachedClearTimeout = $3f742a469798a47c$var$defaultClearTimeout;
    }
})();
function $3f742a469798a47c$var$runTimeout(fun) {
    if ($3f742a469798a47c$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($3f742a469798a47c$var$cachedSetTimeout === $3f742a469798a47c$var$defaultSetTimout || !$3f742a469798a47c$var$cachedSetTimeout) && setTimeout) {
        $3f742a469798a47c$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $3f742a469798a47c$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $3f742a469798a47c$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $3f742a469798a47c$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $3f742a469798a47c$var$runClearTimeout(marker) {
    if ($3f742a469798a47c$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($3f742a469798a47c$var$cachedClearTimeout === $3f742a469798a47c$var$defaultClearTimeout || !$3f742a469798a47c$var$cachedClearTimeout) && clearTimeout) {
        $3f742a469798a47c$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $3f742a469798a47c$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $3f742a469798a47c$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $3f742a469798a47c$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $3f742a469798a47c$var$queue = [];
var $3f742a469798a47c$var$draining = false;
var $3f742a469798a47c$var$currentQueue;
var $3f742a469798a47c$var$queueIndex = -1;
function $3f742a469798a47c$var$cleanUpNextTick() {
    if (!$3f742a469798a47c$var$draining || !$3f742a469798a47c$var$currentQueue) return;
    $3f742a469798a47c$var$draining = false;
    if ($3f742a469798a47c$var$currentQueue.length) $3f742a469798a47c$var$queue = $3f742a469798a47c$var$currentQueue.concat($3f742a469798a47c$var$queue);
    else $3f742a469798a47c$var$queueIndex = -1;
    if ($3f742a469798a47c$var$queue.length) $3f742a469798a47c$var$drainQueue();
}
function $3f742a469798a47c$var$drainQueue() {
    if ($3f742a469798a47c$var$draining) return;
    var timeout = $3f742a469798a47c$var$runTimeout($3f742a469798a47c$var$cleanUpNextTick);
    $3f742a469798a47c$var$draining = true;
    var len = $3f742a469798a47c$var$queue.length;
    while(len){
        $3f742a469798a47c$var$currentQueue = $3f742a469798a47c$var$queue;
        $3f742a469798a47c$var$queue = [];
        while(++$3f742a469798a47c$var$queueIndex < len)if ($3f742a469798a47c$var$currentQueue) $3f742a469798a47c$var$currentQueue[$3f742a469798a47c$var$queueIndex].run();
        $3f742a469798a47c$var$queueIndex = -1;
        len = $3f742a469798a47c$var$queue.length;
    }
    $3f742a469798a47c$var$currentQueue = null;
    $3f742a469798a47c$var$draining = false;
    $3f742a469798a47c$var$runClearTimeout(timeout);
}
$3f742a469798a47c$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $3f742a469798a47c$var$queue.push(new $3f742a469798a47c$var$Item(fun, args));
    if ($3f742a469798a47c$var$queue.length === 1 && !$3f742a469798a47c$var$draining) $3f742a469798a47c$var$runTimeout($3f742a469798a47c$var$drainQueue);
};
// v8 likes predictible objects
function $3f742a469798a47c$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$3f742a469798a47c$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$3f742a469798a47c$var$process.title = 'browser';
$3f742a469798a47c$var$process.browser = true;
$3f742a469798a47c$var$process.env = {
};
$3f742a469798a47c$var$process.argv = [];
$3f742a469798a47c$var$process.version = ''; // empty string to avoid regexp issues
$3f742a469798a47c$var$process.versions = {
};
function $3f742a469798a47c$var$noop() {
}
$3f742a469798a47c$var$process.on = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.addListener = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.once = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.off = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.removeListener = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.removeAllListeners = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.emit = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.prependListener = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.prependOnceListener = $3f742a469798a47c$var$noop;
$3f742a469798a47c$var$process.listeners = function(name) {
    return [];
};
$3f742a469798a47c$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$3f742a469798a47c$var$process.cwd = function() {
    return '/';
};
$3f742a469798a47c$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$3f742a469798a47c$var$process.umask = function() {
    return 0;
};


/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ //  Unique Hexatridecimal ID Generator
// ================================================
//  Dependencies
// ================================================
var $b4ea8558997619c7$var$pid = typeof $3f742a469798a47c$exports !== 'undefined' && $3f742a469798a47c$exports.pid ? $3f742a469798a47c$exports.pid.toString(36) : '';
var $b4ea8558997619c7$var$address = '';
parcelRequire.register("1VVQu", function(module, exports) {

$parcel$export(module.exports, "endianness", function () { return $1687fc39f4cf2c65$export$edf525f30916fbb8; }, function (v) { return $1687fc39f4cf2c65$export$edf525f30916fbb8 = v; });
$parcel$export(module.exports, "hostname", function () { return $1687fc39f4cf2c65$export$640106f6dc7d2706; }, function (v) { return $1687fc39f4cf2c65$export$640106f6dc7d2706 = v; });
$parcel$export(module.exports, "loadavg", function () { return $1687fc39f4cf2c65$export$3ea386628068cf62; }, function (v) { return $1687fc39f4cf2c65$export$3ea386628068cf62 = v; });
$parcel$export(module.exports, "uptime", function () { return $1687fc39f4cf2c65$export$749d472264fad440; }, function (v) { return $1687fc39f4cf2c65$export$749d472264fad440 = v; });
$parcel$export(module.exports, "freemem", function () { return $1687fc39f4cf2c65$export$8b931a48d9488767; }, function (v) { return $1687fc39f4cf2c65$export$8b931a48d9488767 = v; });
$parcel$export(module.exports, "totalmem", function () { return $1687fc39f4cf2c65$export$9123f37609399513; }, function (v) { return $1687fc39f4cf2c65$export$9123f37609399513 = v; });
$parcel$export(module.exports, "cpus", function () { return $1687fc39f4cf2c65$export$9b60beb643db4d69; }, function (v) { return $1687fc39f4cf2c65$export$9b60beb643db4d69 = v; });
$parcel$export(module.exports, "type", function () { return $1687fc39f4cf2c65$export$bf9fb029d174d554; }, function (v) { return $1687fc39f4cf2c65$export$bf9fb029d174d554 = v; });
$parcel$export(module.exports, "release", function () { return $1687fc39f4cf2c65$export$23d3fad09dc44362; }, function (v) { return $1687fc39f4cf2c65$export$23d3fad09dc44362 = v; });
$parcel$export(module.exports, "networkInterfaces", function () { return $1687fc39f4cf2c65$export$d2f3c2f7e0c7dcf5; }, function (v) { return $1687fc39f4cf2c65$export$d2f3c2f7e0c7dcf5 = v; });
$parcel$export(module.exports, "getNetworkInterfaces", function () { return $1687fc39f4cf2c65$export$3bf7c33313eba0fe; }, function (v) { return $1687fc39f4cf2c65$export$3bf7c33313eba0fe = v; });
$parcel$export(module.exports, "arch", function () { return $1687fc39f4cf2c65$export$7925d89f138dad5b; }, function (v) { return $1687fc39f4cf2c65$export$7925d89f138dad5b = v; });
$parcel$export(module.exports, "platform", function () { return $1687fc39f4cf2c65$export$722a64dea1b767dc; }, function (v) { return $1687fc39f4cf2c65$export$722a64dea1b767dc = v; });
$parcel$export(module.exports, "tmpdir", function () { return $1687fc39f4cf2c65$export$9e6c06a7d47f9af7; }, function (v) { return $1687fc39f4cf2c65$export$9e6c06a7d47f9af7 = v; });
$parcel$export(module.exports, "tmpDir", function () { return $1687fc39f4cf2c65$export$6b76988456c0292f; }, function (v) { return $1687fc39f4cf2c65$export$6b76988456c0292f = v; });
$parcel$export(module.exports, "EOL", function () { return $1687fc39f4cf2c65$export$266d3b9babd1fc45; }, function (v) { return $1687fc39f4cf2c65$export$266d3b9babd1fc45 = v; });
$parcel$export(module.exports, "homedir", function () { return $1687fc39f4cf2c65$export$c1d46b5ea6262c0b; }, function (v) { return $1687fc39f4cf2c65$export$c1d46b5ea6262c0b = v; });
var $1687fc39f4cf2c65$export$edf525f30916fbb8;
var $1687fc39f4cf2c65$export$640106f6dc7d2706;
var $1687fc39f4cf2c65$export$3ea386628068cf62;
var $1687fc39f4cf2c65$export$749d472264fad440;
var $1687fc39f4cf2c65$export$8b931a48d9488767;
var $1687fc39f4cf2c65$export$9123f37609399513;
var $1687fc39f4cf2c65$export$9b60beb643db4d69;
var $1687fc39f4cf2c65$export$bf9fb029d174d554;
var $1687fc39f4cf2c65$export$23d3fad09dc44362;
var $1687fc39f4cf2c65$export$d2f3c2f7e0c7dcf5;
var $1687fc39f4cf2c65$export$3bf7c33313eba0fe;
var $1687fc39f4cf2c65$export$7925d89f138dad5b;
var $1687fc39f4cf2c65$export$722a64dea1b767dc;
var $1687fc39f4cf2c65$export$9e6c06a7d47f9af7;
var $1687fc39f4cf2c65$export$6b76988456c0292f;
var $1687fc39f4cf2c65$export$266d3b9babd1fc45;
var $1687fc39f4cf2c65$export$c1d46b5ea6262c0b;
$1687fc39f4cf2c65$export$edf525f30916fbb8 = function() {
    return 'LE';
};
$1687fc39f4cf2c65$export$640106f6dc7d2706 = function() {
    if (typeof location !== 'undefined') return location.hostname;
    else return '';
};
$1687fc39f4cf2c65$export$3ea386628068cf62 = function() {
    return [];
};
$1687fc39f4cf2c65$export$749d472264fad440 = function() {
    return 0;
};
$1687fc39f4cf2c65$export$8b931a48d9488767 = function() {
    return Number.MAX_VALUE;
};
$1687fc39f4cf2c65$export$9123f37609399513 = function() {
    return Number.MAX_VALUE;
};
$1687fc39f4cf2c65$export$9b60beb643db4d69 = function() {
    return [];
};
$1687fc39f4cf2c65$export$bf9fb029d174d554 = function() {
    return 'Browser';
};
$1687fc39f4cf2c65$export$23d3fad09dc44362 = function() {
    if (typeof navigator !== 'undefined') return navigator.appVersion;
    return '';
};
$1687fc39f4cf2c65$export$d2f3c2f7e0c7dcf5 = $1687fc39f4cf2c65$export$3bf7c33313eba0fe = function() {
    return {
    };
};
$1687fc39f4cf2c65$export$7925d89f138dad5b = function() {
    return 'javascript';
};
$1687fc39f4cf2c65$export$722a64dea1b767dc = function() {
    return 'browser';
};
$1687fc39f4cf2c65$export$9e6c06a7d47f9af7 = $1687fc39f4cf2c65$export$6b76988456c0292f = function() {
    return '/tmp';
};
$1687fc39f4cf2c65$export$266d3b9babd1fc45 = '\n';
$1687fc39f4cf2c65$export$c1d46b5ea6262c0b = function() {
    return '/';
};

});


if (typeof __webpack_require__ !== 'function' && "function" !== 'undefined') {
    var $b4ea8558997619c7$var$mac = '', $b4ea8558997619c7$var$os = (parcelRequire("1VVQu"));
    if ($b4ea8558997619c7$var$os.networkInterfaces) var $b4ea8558997619c7$var$networkInterfaces = $b4ea8558997619c7$var$os.networkInterfaces();
    if ($b4ea8558997619c7$var$networkInterfaces) {
        loop: for(let interface_key in $b4ea8558997619c7$var$networkInterfaces){
            const networkInterface = $b4ea8558997619c7$var$networkInterfaces[interface_key];
            const length = networkInterface.length;
            for(var $b4ea8558997619c7$var$i = 0; $b4ea8558997619c7$var$i < length; $b4ea8558997619c7$var$i++)if (networkInterface[$b4ea8558997619c7$var$i] !== undefined && networkInterface[$b4ea8558997619c7$var$i].mac && networkInterface[$b4ea8558997619c7$var$i].mac != '00:00:00:00:00:00') {
                $b4ea8558997619c7$var$mac = networkInterface[$b4ea8558997619c7$var$i].mac;
                break loop;
            }
        }
        $b4ea8558997619c7$var$address = $b4ea8558997619c7$var$mac ? parseInt($b4ea8558997619c7$var$mac.replace(/\:|\D+/gi, '')).toString(36) : '';
    }
}
//  Exports
// ================================================
$b4ea8558997619c7$exports = $b4ea8558997619c7$exports.default = function(prefix, suffix) {
    return (prefix ? prefix : '') + $b4ea8558997619c7$var$address + $b4ea8558997619c7$var$pid + $b4ea8558997619c7$var$now().toString(36) + (suffix ? suffix : '');
};
$b4ea8558997619c7$exports.process = function(prefix, suffix) {
    return (prefix ? prefix : '') + $b4ea8558997619c7$var$pid + $b4ea8558997619c7$var$now().toString(36) + (suffix ? suffix : '');
};
$b4ea8558997619c7$exports.time = function(prefix, suffix) {
    return (prefix ? prefix : '') + $b4ea8558997619c7$var$now().toString(36) + (suffix ? suffix : '');
};
//  Helpers
// ================================================
function $b4ea8558997619c7$var$now() {
    var time = Date.now();
    var last = $b4ea8558997619c7$var$now.last || time;
    return $b4ea8558997619c7$var$now.last = time > last ? time : last + 1;
}



function $bdf0195f3bc674cc$export$4997ffc0176396a6(maxWidth) {
    return function() {
        var self = $8ef98f1350267a83$export$2e2bcd8739ae039(this), textLength = self.node().getComputedTextLength(), text = self.text();
        while(textLength > maxWidth - self.node().getBBox().x && text.length > 0){
            text = text.slice(0, -1);
            self.text(text + '...');
            textLength = self.node().getComputedTextLength();
        }
    };
}


var $3f8d765a8f62a44f$exports = {};

$3f8d765a8f62a44f$exports = new URL((parcelRequire("23XYC")).resolve("1XFPE"), import.meta.url).toString();


function $081488d5e2f753d8$export$5975b2d75619419a(svgRoot, tableData) {
    const tableWidth = tableData.columns.reduce((acc, d)=>acc + d.width
    , 0);
    const root = tableData.root.copy().eachBefore((d1, i)=>{
        d1.data.index = i;
        d1.id = d1.ancestors().reverse().map((d)=>d.data.name
        ).join('/');
        d1._children = d1.children;
    });
    const nodes1 = root.descendants();
    const containerGroup = svgRoot.append('g');
    const headerGroup = containerGroup.append('g').attr('font-weight', 'bolder').attr('transform', `translate(0, ${$90e896f729ee1e04$export$49d7b074b141ca56 / 2})`).attr('text-anchor', 'middle').attr('dominant-baseline', 'middle');
    const gridGroup = containerGroup.append('g').attr('stroke', '#ccc');
    const hGridGroup = gridGroup.append('g');
    const vGridGroup = gridGroup.append('g');
    let tableHeight = nodes1.length * $90e896f729ee1e04$export$49d7b074b141ca56;
    const startTransition = svgRoot.transition().duration(500);
    const containerOutline = containerGroup.append('rect').attr('width', tableWidth).attr('height', 0).attr('fill', 'none').attr('stroke', '#ccc').attr('stroke-width', 1).attr('rx', 5);
    const clipId = (/*@__PURE__*/$parcel$interopDefault($b4ea8558997619c7$exports))('table:');
    const clipPath = containerGroup.append('clipPath').attr('id', clipId).append('rect').attr('width', tableWidth).attr('height', 0).attr('rx', 5);
    containerOutline.transition(startTransition).attr('height', tableHeight);
    clipPath.transition(startTransition).attr('height', tableHeight);
    containerGroup.attr('clip-path', `url(#${clipId})`);
    let currentXOffset = 0;
    let primaryWidth = 0;
    let primaryOffset = 0;
    const columnGroups = [];
    let primaryGroup;
    for (const column1 of tableData.columns){
        var _displayName;
        headerGroup.append('text').text((_displayName = column1.displayName) !== null && _displayName !== void 0 ? _displayName : column1.name).attr('x', currentXOffset + column1.width / 2).attr('y', 0);
        if (currentXOffset !== 0) vGridGroup.append('path').attr('d', `M${currentXOffset},0 V${tableHeight}`);
        const g = containerGroup.append('g');
        columnGroups.push(g);
        if (column1.primary) {
            primaryGroup = g;
            primaryOffset = currentXOffset;
            primaryWidth = column1.width;
        }
        currentXOffset += column1.width;
    }
    if (!primaryGroup) throw new Error('Must have a primary group');
    function update(startingPoint) {
        if (!primaryGroup) throw new Error('Must have a primary group');
        root.eachBefore((d, i)=>{
            d.data.index = i;
        });
        const transition = svgRoot.transition().duration(150);
        const nodes = root.descendants().sort((a, b)=>a.data.index > b.data.index
        );
        tableHeight = nodes.length * $90e896f729ee1e04$export$49d7b074b141ca56;
        containerOutline.transition(transition).attr('height', tableHeight);
        clipPath.transition(transition).attr('height', tableHeight);
        const hLines = hGridGroup.selectAll('path').data(nodes, (d)=>d.id
        );
        const hLineEnter = hLines.enter().append('path').attr('stroke-opacity', 0);
        hLines.merge(hLineEnter).transition(transition).attr('stroke-opacity', 1).attr('d', (d)=>`M0,${(1 + d.data.index) * $90e896f729ee1e04$export$49d7b074b141ca56} h${tableWidth}`
        );
        hLines.exit().transition(transition).remove().attr('stroke-opacity', 0);
        const primaryNode = primaryGroup.selectChildren('g').data(nodes.slice(1), (d)=>{
            return d.id;
        });
        // primaryGroup.selectChildren('')
        const xOffset = (d)=>(d.depth - 1) * $90e896f729ee1e04$export$49d7b074b141ca56
        ;
        const primaryEnter = primaryNode.enter().append('g').attr('data-id', 'primaryNode').attr('fill-opacity', 0).attr('transform', (d)=>`translate(${primaryOffset}, ${startingPoint.data.index * $90e896f729ee1e04$export$49d7b074b141ca56})`
        ).on('click', (event, d)=>{
            if (d.children || d._children) {
                d.children = d.children ? null : d._children;
                update(d);
            }
        });
        primaryEnter.append('image').attr('class', 'copy-to-clipboard').attr('xlink:href', (/*@__PURE__*/$parcel$interopDefault($3f8d765a8f62a44f$exports))).attr('height', $90e896f729ee1e04$export$91a15f1424900d33).attr('y', ($90e896f729ee1e04$export$49d7b074b141ca56 - $90e896f729ee1e04$export$91a15f1424900d33) / 2).attr('x', primaryWidth - $90e896f729ee1e04$export$49d7b074b141ca56).attr('cursor', 'pointer').on('click', (evt, d)=>{
            navigator.clipboard.writeText(d.data.name);
        });
        primaryNode.merge(primaryEnter).transition(transition).attr('fill-opacity', 1).attr('transform', (d)=>`translate(${primaryOffset}, ${d.data.index * $90e896f729ee1e04$export$49d7b074b141ca56})`
        );
        const textAndCaret = primaryEnter.append('g').attr('dominant-baseline', 'middle').attr('transform', (d)=>`translate(${xOffset(d)}, ${$90e896f729ee1e04$export$49d7b074b141ca56 / 2})`
        ).attr('cursor', (d)=>d.children || d._children ? 'pointer' : 'default'
        );
        textAndCaret.append('text').text((d)=>d.data.name
        ).attr('x', $90e896f729ee1e04$export$49d7b074b141ca56).each(function(d) {
            $bdf0195f3bc674cc$export$4997ffc0176396a6(primaryWidth - (d.depth - 1) * $90e896f729ee1e04$export$49d7b074b141ca56 - $90e896f729ee1e04$export$49d7b074b141ca56).call(this);
        }).append('title').text((d)=>d.data.name
        );
        const caret = textAndCaret.append('text').attr('class', 'caret').attr('font-family', 'FontAwesome').text('').attr('text-anchor', 'middle').attr('x', $90e896f729ee1e04$export$49d7b074b141ca56 / 2).attr('visibility', (d)=>d.children || d._children ? 'visible' : 'hidden'
        ).attr('transform', `rotate(0, ${$90e896f729ee1e04$export$49d7b074b141ca56 / 2}, 0)`);
        primaryNode.merge(primaryEnter).selectAll('.caret').transition(transition).attr('transform', (d)=>`rotate(${d.children ? 90 : 0}, ${$90e896f729ee1e04$export$49d7b074b141ca56 / 2}, 0)`
        );
        primaryNode.exit().transition(transition).remove().attr('fill-opacity', 0).attr('transform', (d)=>`translate(${primaryOffset}, ${startingPoint.data.index * $90e896f729ee1e04$export$49d7b074b141ca56})`
        );
        let columnIndex = 0;
        let columnOffset = 0;
        for (const column of tableData.columns){
            const columnGroup = columnGroups[columnIndex];
            const currentColumnOffset = columnOffset;
            columnOffset += column.width;
            columnIndex += 1;
            if (column.primary) continue;
            if (column.content) {
                const currentColumn = columnGroup.selectChildren('g').data(nodes.slice(1), (d)=>d.id
                );
                const currentColumnEnter = currentColumn.enter().append('g').attr('opacity', 0).attr('transform', (d)=>`translate(${currentColumnOffset}, ${startingPoint.data.index * $90e896f729ee1e04$export$49d7b074b141ca56})`
                );
                currentColumn.merge(currentColumnEnter).transition(transition).attr('opacity', 1).attr('transform', (d)=>`translate(${currentColumnOffset}, ${d.data.index * $90e896f729ee1e04$export$49d7b074b141ca56})`
                );
                column.content(currentColumnEnter, column.width);
                currentColumn.exit().transition(transition).remove().attr('opacity', 0).attr('transform', (d)=>`translate(${currentColumnOffset}, ${startingPoint.data.index * $90e896f729ee1e04$export$49d7b074b141ca56})`
                );
            }
        }
    }
    update(root);
    return containerGroup;
}



var $4f11d1910f985a76$exports = {};

$4f11d1910f985a76$exports = new URL((parcelRequire("23XYC")).resolve("hYhac"), import.meta.url).toString();



var ref;
if (null) {
    null.dispose(function(data) {
        // module is about to be replaced.
        // You can save data that should be accessible to the new asset in `data`
        window.document.body.innerHTML = '';
    });
    null.accept();
}
const $088e22a6f1b13ccc$var$tooltip = $8ef98f1350267a83$export$2e2bcd8739ae039(document.body).append('div').attr('class', 'tooltip tooltip-hidden');
const $088e22a6f1b13ccc$var$svg = $8ef98f1350267a83$export$2e2bcd8739ae039(document.body).append('svg');
// const tooltip = d3.select('#tooltip');
$088e22a6f1b13ccc$var$svg// .attr('viewBox', [-nodeSize / 2, (-nodeSize * 3) / 2, 800, (nodes.length + 2) * nodeSize])
.attr('font-family', 'sans-serif').attr('font-size', 10).style('overflow', 'visible');
const $088e22a6f1b13ccc$var$documentTableDetails = {
    columns: [
        {
            name: 'Notes',
            width: 20,
            displayName: '',
            content (root, width) {
                root.append('image').attr('xlink:href', (/*@__PURE__*/$parcel$interopDefault($4f11d1910f985a76$exports))).attr('x', (width - $90e896f729ee1e04$export$91a15f1424900d33) / 2).attr('y', ($90e896f729ee1e04$export$49d7b074b141ca56 - $90e896f729ee1e04$export$91a15f1424900d33) / 2).attr('height', $90e896f729ee1e04$export$91a15f1424900d33).attr('visibility', (d)=>d.data.notes ? 'visible' : 'hidden'
                ).attr('cursor', 'pointer').on('mouseover', (evt, d)=>{
                    $088e22a6f1b13ccc$var$tooltip.classed('tooltip-hidden', false);
                    $088e22a6f1b13ccc$var$tooltip.node().innerHTML = d.data.notes;
                    $088e22a6f1b13ccc$var$tooltip.style('left', `${evt.pageX + 15}px`);
                    $088e22a6f1b13ccc$var$tooltip.style('top', `${evt.pageY}px`);
                }).on('mousemove', (evt, d)=>{
                    $088e22a6f1b13ccc$var$tooltip.style('left', `${evt.pageX + 15}px`);
                    $088e22a6f1b13ccc$var$tooltip.style('top', `${evt.pageY}px`);
                }).on('mouseleave', (d)=>{
                    $088e22a6f1b13ccc$var$tooltip.classed('tooltip-hidden', true);
                });
            }
        },
        {
            name: 'Required',
            width: 20,
            displayName: '*',
            content (root, width) {
                root.append('text').attr('x', width / 2).attr('y', $90e896f729ee1e04$export$49d7b074b141ca56 / 2).text((d)=>d.data.optional ? '' : '*'
                ).attr('text-anchor', 'middle').attr('dominant-baseline', 'middle');
            }
        },
        {
            name: 'Fields',
            width: 200,
            primary: true
        },
        {
            name: 'Type',
            width: 110,
            content (root, width) {
                root.append('text').attr('x', $90e896f729ee1e04$export$49d7b074b141ca56 / 2).attr('y', $90e896f729ee1e04$export$49d7b074b141ca56 / 2).text((d)=>$241242b2e9bc75a0$export$47befd089b54cd80(d) ? '- ' : d.data.type
                ).attr('dominant-baseline', 'middle').each($bdf0195f3bc674cc$export$4997ffc0176396a6(width - $90e896f729ee1e04$export$49d7b074b141ca56 / 2 - $90e896f729ee1e04$export$91a15f1424900d33)).append('title').text((d)=>$241242b2e9bc75a0$export$47befd089b54cd80(d) ? '- ' : d.data.type
                );
                root.append('image').attr('class', 'copy-to-clipboard').attr('xlink:href', (/*@__PURE__*/$parcel$interopDefault($3f8d765a8f62a44f$exports))).attr('height', $90e896f729ee1e04$export$91a15f1424900d33).attr('y', ($90e896f729ee1e04$export$49d7b074b141ca56 - $90e896f729ee1e04$export$91a15f1424900d33) / 2).attr('x', width - $90e896f729ee1e04$export$49d7b074b141ca56).attr('cursor', 'pointer').on('click', (evt, d)=>{
                    navigator.clipboard.writeText($241242b2e9bc75a0$export$47befd089b54cd80(d) ? '- ' : d.data.type);
                });
            }
        }, 
    ]
};
const $088e22a6f1b13ccc$var$container = $081488d5e2f753d8$export$5975b2d75619419a($088e22a6f1b13ccc$var$svg, {
    ...$088e22a6f1b13ccc$var$documentTableDetails,
    root: $2c785ab2e8f496d7$export$2e2bcd8739ae039($241242b2e9bc75a0$export$10402bfe6347692)
});
const $088e22a6f1b13ccc$var$ref = $081488d5e2f753d8$export$5975b2d75619419a($088e22a6f1b13ccc$var$svg, {
    ...$088e22a6f1b13ccc$var$documentTableDetails,
    root: $2c785ab2e8f496d7$export$2e2bcd8739ae039({
        name: 'Fields',
        children: [
            {
                name: '_id',
                type: 'ObjectId'
            },
            {
                name: 'accountName',
                type: 'string'
            }, 
        ]
    })
});
$088e22a6f1b13ccc$var$container.attr('transform', `translate(500, 100)`);
const $088e22a6f1b13ccc$var$d = $0af3af8f39276c55$export$e7c381889b2cd14d();
const $088e22a6f1b13ccc$var$v = $088e22a6f1b13ccc$var$d({
    target: [
        350,
        $90e896f729ee1e04$export$49d7b074b141ca56 * 2 + $90e896f729ee1e04$export$49d7b074b141ca56 / 2
    ],
    source: [
        500,
        100 + $90e896f729ee1e04$export$49d7b074b141ca56 * 3 + $90e896f729ee1e04$export$49d7b074b141ca56 / 2
    ]
});
$088e22a6f1b13ccc$var$svg.append('image').attr('xlink:href', (/*@__PURE__*/$parcel$interopDefault($4f11d1910f985a76$exports))).attr('x', 425).attr('y', ($90e896f729ee1e04$export$49d7b074b141ca56 * 2 + $90e896f729ee1e04$export$49d7b074b141ca56 / 2 + (100 + $90e896f729ee1e04$export$49d7b074b141ca56 * 3 + $90e896f729ee1e04$export$49d7b074b141ca56 / 2)) / 2 - $90e896f729ee1e04$export$91a15f1424900d33).attr('height', $90e896f729ee1e04$export$91a15f1424900d33).attr('cursor', 'pointer').on('mouseover', (evt, d)=>{
    $088e22a6f1b13ccc$var$tooltip.classed('tooltip-hidden', false);
    $088e22a6f1b13ccc$var$tooltip.node().innerHTML = 'This is a link note';
    $088e22a6f1b13ccc$var$tooltip.style('left', `${evt.pageX + 15}px`);
    $088e22a6f1b13ccc$var$tooltip.style('top', `${evt.pageY}px`);
}).on('mousemove', (evt, d)=>{
    $088e22a6f1b13ccc$var$tooltip.style('left', `${evt.pageX + 15}px`);
    $088e22a6f1b13ccc$var$tooltip.style('top', `${evt.pageY}px`);
}).on('mouseleave', (d)=>{
    $088e22a6f1b13ccc$var$tooltip.classed('tooltip-hidden', true);
});
console.log($088e22a6f1b13ccc$var$v);
$088e22a6f1b13ccc$var$svg.append('path').attr('d', $088e22a6f1b13ccc$var$v).attr('fill', 'none').attr('stroke', '#ccc').attr('marker-end', 'url(#link-arrow)');
const $088e22a6f1b13ccc$var$defs = $088e22a6f1b13ccc$var$svg.append('defs');
$088e22a6f1b13ccc$var$defs.append('marker').attr('id', 'link-arrow').attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').attr('refY', 5).attr('refX', 9).append('path').attr('d', 'M0,10 L9,5 L0,0').attr('fill', 'none').attr('stroke', '#ccc').attr('stroke-width', 1.5);
const $088e22a6f1b13ccc$var$box = (ref = $088e22a6f1b13ccc$var$svg.node()) === null || ref === void 0 ? void 0 : ref.getBBox();
if ($088e22a6f1b13ccc$var$box) {
    console.log($088e22a6f1b13ccc$var$box);
    $088e22a6f1b13ccc$var$svg.attr('height', $088e22a6f1b13ccc$var$box.height);
    $088e22a6f1b13ccc$var$svg.attr('width', $088e22a6f1b13ccc$var$box.width);
}


//# sourceMappingURL=index.f99afe6b.js.map
