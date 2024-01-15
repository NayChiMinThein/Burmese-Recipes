function bc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Es={exports:{}},hl={},Ns={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),nf=Symbol.for("react.portal"),tf=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),of=Symbol.for("react.provider"),uf=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),cf=Symbol.for("react.memo"),ff=Symbol.for("react.lazy"),iu=Symbol.iterator;function df(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var _s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ps=Object.assign,Is={};function ft(e,n,t){this.props=e,this.context=n,this.refs=Is,this.updater=t||_s}ft.prototype.isReactComponent={};ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ts(){}Ts.prototype=ft.prototype;function oo(e,n,t){this.props=e,this.context=n,this.refs=Is,this.updater=t||_s}var uo=oo.prototype=new Ts;uo.constructor=oo;Ps(uo,ft.prototype);uo.isPureReactComponent=!0;var ou=Array.isArray,zs=Object.prototype.hasOwnProperty,so={current:null},Ls={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)zs.call(n,r)&&!Ls.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:rr,type:e,key:i,ref:o,props:l,_owner:so.current}}function pf(e,n){return{$$typeof:rr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ao(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function mf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var uu=/\/+/g;function Ml(e,n){return typeof e=="object"&&e!==null&&e.key!=null?mf(""+e.key):n.toString(36)}function Ir(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case rr:case nf:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ml(o,0):r,ou(l)?(t="",e!=null&&(t=e.replace(uu,"$&/")+"/"),Ir(l,n,t,"",function(a){return a})):l!=null&&(ao(l)&&(l=pf(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(uu,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",ou(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+Ml(i,u);o+=Ir(i,n,t,s,l)}else if(s=df(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+Ml(i,u++),o+=Ir(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function fr(e,n,t){if(e==null)return e;var r=[],l=0;return Ir(e,r,"","",function(i){return n.call(t,i,l++)}),r}function hf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Tr={transition:null},vf={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:so};R.Children={map:fr,forEach:function(e,n,t){fr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return fr(e,function(){n++}),n},toArray:function(e){return fr(e,function(n){return n})||[]},only:function(e){if(!ao(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=ft;R.Fragment=tf;R.Profiler=lf;R.PureComponent=oo;R.StrictMode=rf;R.Suspense=af;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ps({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=so.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)zs.call(n,s)&&!Ls.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:rr,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:uf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:of,_context:e},e.Consumer=e};R.createElement=Rs;R.createFactory=function(e){var n=Rs.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:sf,render:e}};R.isValidElement=ao;R.lazy=function(e){return{$$typeof:ff,_payload:{_status:-1,_result:e},_init:hf}};R.memo=function(e,n){return{$$typeof:cf,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=n}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,n){return ae.current.useCallback(e,n)};R.useContext=function(e){return ae.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};R.useEffect=function(e,n){return ae.current.useEffect(e,n)};R.useId=function(){return ae.current.useId()};R.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return ae.current.useMemo(e,n)};R.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};R.useRef=function(e){return ae.current.useRef(e)};R.useState=function(e){return ae.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return ae.current.useTransition()};R.version="18.2.0";Ns.exports=R;var N=Ns.exports;const He=ef(N),gf=bc({__proto__:null,default:He},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=N,wf=Symbol.for("react.element"),kf=Symbol.for("react.fragment"),Sf=Object.prototype.hasOwnProperty,xf=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cf={key:!0,ref:!0,__self:!0,__source:!0};function Os(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Sf.call(n,r)&&!Cf.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:wf,type:e,key:i,ref:o,props:l,_owner:xf.current}}hl.Fragment=kf;hl.jsx=Os;hl.jsxs=Os;Es.exports=hl;var T=Es.exports,ai={},Us={exports:{}},ke={},js={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,z){var L=E.length;E.push(z);e:for(;0<L;){var H=L-1>>>1,J=E[H];if(0<l(J,z))E[H]=z,E[L]=J,L=H;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var z=E[0],L=E.pop();if(L!==z){E[0]=L;e:for(var H=0,J=E.length,ar=J>>>1;H<ar;){var xn=2*(H+1)-1,jl=E[xn],Cn=xn+1,cr=E[Cn];if(0>l(jl,L))Cn<J&&0>l(cr,jl)?(E[H]=cr,E[Cn]=L,H=Cn):(E[H]=jl,E[xn]=L,H=xn);else if(Cn<J&&0>l(cr,L))E[H]=cr,E[Cn]=L,H=Cn;else break e}}return z}function l(E,z){var L=E.sortIndex-z.sortIndex;return L!==0?L:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],a=[],m=1,p=null,h=3,g=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(E){for(var z=t(a);z!==null;){if(z.callback===null)r(a);else if(z.startTime<=E)r(a),z.sortIndex=z.expirationTime,n(s,z);else break;z=t(a)}}function v(E){if(w=!1,d(E),!y)if(t(s)!==null)y=!0,Ol(S);else{var z=t(a);z!==null&&Ul(v,z.startTime-E)}}function S(E,z){y=!1,w&&(w=!1,f(I),I=-1),g=!0;var L=h;try{for(d(z),p=t(s);p!==null&&(!(p.expirationTime>z)||E&&!Ie());){var H=p.callback;if(typeof H=="function"){p.callback=null,h=p.priorityLevel;var J=H(p.expirationTime<=z);z=e.unstable_now(),typeof J=="function"?p.callback=J:p===t(s)&&r(s),d(z)}else r(s);p=t(s)}if(p!==null)var ar=!0;else{var xn=t(a);xn!==null&&Ul(v,xn.startTime-z),ar=!1}return ar}finally{p=null,h=L,g=!1}}var _=!1,P=null,I=-1,G=5,O=-1;function Ie(){return!(e.unstable_now()-O<G)}function ht(){if(P!==null){var E=e.unstable_now();O=E;var z=!0;try{z=P(!0,E)}finally{z?vt():(_=!1,P=null)}}else _=!1}var vt;if(typeof c=="function")vt=function(){c(ht)};else if(typeof MessageChannel<"u"){var lu=new MessageChannel,qc=lu.port2;lu.port1.onmessage=ht,vt=function(){qc.postMessage(null)}}else vt=function(){x(ht,0)};function Ol(E){P=E,_||(_=!0,vt())}function Ul(E,z){I=x(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ol(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var L=h;h=z;try{return E()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=h;h=E;try{return z()}finally{h=L}},e.unstable_scheduleCallback=function(E,z,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,E={id:m++,callback:z,priorityLevel:E,startTime:L,expirationTime:J,sortIndex:-1},L>H?(E.sortIndex=L,n(a,E),t(s)===null&&E===t(a)&&(w?(f(I),I=-1):w=!0,Ul(v,L-H))):(E.sortIndex=J,n(s,E),y||g||(y=!0,Ol(S))),E},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(E){var z=h;return function(){var L=h;h=z;try{return E.apply(this,arguments)}finally{h=L}}}})(Ms);js.exports=Ms;var Ef=js.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=N,we=Ef;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fs=new Set,Ft={};function Mn(e,n){lt(e,n),lt(e+"Capture",n)}function lt(e,n){for(Ft[e]=n,e=0;e<n.length;e++)Fs.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=Object.prototype.hasOwnProperty,Nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,su={},au={};function _f(e){return ci.call(au,e)?!0:ci.call(su,e)?!1:Nf.test(e)?au[e]=!0:(su[e]=!0,!1)}function Pf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,n,t,r){if(n===null||typeof n>"u"||Pf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var co=/[\-:]([a-z])/g;function fo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(co,fo);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(co,fo);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(co,fo);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function po(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(If(n,t,l,r)&&(t=null),r||l===null?_f(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=Ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),mo=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),$s=Symbol.for("react.provider"),Bs=Symbol.for("react.context"),ho=Symbol.for("react.forward_ref"),di=Symbol.for("react.suspense"),pi=Symbol.for("react.suspense_list"),vo=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),Vs=Symbol.for("react.offscreen"),cu=Symbol.iterator;function gt(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,Dl;function Nt(e){if(Dl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Dl=n&&n[1]||""}return`
`+Dl+e}var Fl=!1;function $l(e,n){if(!e||Fl)return"";Fl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var l=a.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Fl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nt(e):""}function Tf(e){switch(e.tag){case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Bn:return"Portal";case fi:return"Profiler";case mo:return"StrictMode";case di:return"Suspense";case pi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bs:return(e.displayName||"Context")+".Consumer";case $s:return(e._context.displayName||"Context")+".Provider";case ho:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vo:return n=e.displayName||null,n!==null?n:mi(e.type)||"Memo";case be:n=e._payload,e=e._init;try{return mi(e(n))}catch{}}return null}function zf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mi(n);case 8:return n===mo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function As(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Lf(e){var n=As(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pr(e){e._valueTracker||(e._valueTracker=Lf(e))}function Ws(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=As(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hi(e,n){var t=n.checked;return A({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function fu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Gs(e,n){n=n.checked,n!=null&&po(e,"checked",n,!1)}function vi(e,n){Gs(e,n);var t=vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?gi(e,n.type,t):n.hasOwnProperty("defaultValue")&&gi(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function du(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function gi(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var _t=Array.isArray;function qn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function yi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return A({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(_t(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function Hs(e,n){var t=vn(n.value),r=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function mu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,Ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rf=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){Rf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tt[n]=Tt[e]})});function Ys(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+n).trim():n+"px"}function Xs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ys(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Of=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(e,n){if(n){if(Of[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Si(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,bn=null,et=null;function hu(e){if(e=or(e)){if(typeof Ci!="function")throw Error(k(280));var n=e.stateNode;n&&(n=kl(n),Ci(e.stateNode,e.type,n))}}function Zs(e){bn?et?et.push(e):et=[e]:bn=e}function Js(){if(bn){var e=bn,n=et;if(et=bn=null,hu(e),n)for(e=0;e<n.length;e++)hu(n[e])}}function qs(e,n){return e(n)}function bs(){}var Bl=!1;function ea(e,n,t){if(Bl)return e(n,t);Bl=!0;try{return qs(e,n,t)}finally{Bl=!1,(bn!==null||et!==null)&&(bs(),Js())}}function Bt(e,n){var t=e.stateNode;if(t===null)return null;var r=kl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Ei=!1;if(Ke)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{Ei=!1}function Uf(e,n,t,r,l,i,o,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(m){this.onError(m)}}var zt=!1,Vr=null,Ar=!1,Ni=null,jf={onError:function(e){zt=!0,Vr=e}};function Mf(e,n,t,r,l,i,o,u,s){zt=!1,Vr=null,Uf.apply(jf,arguments)}function Df(e,n,t,r,l,i,o,u,s){if(Mf.apply(this,arguments),zt){if(zt){var a=Vr;zt=!1,Vr=null}else throw Error(k(198));Ar||(Ar=!0,Ni=a)}}function Dn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function na(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vu(e){if(Dn(e)!==e)throw Error(k(188))}function Ff(e){var n=e.alternate;if(!n){if(n=Dn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return vu(l),e;if(i===r)return vu(l),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function ta(e){return e=Ff(e),e!==null?ra(e):null}function ra(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ra(e);if(n!==null)return n;e=e.sibling}return null}var la=we.unstable_scheduleCallback,gu=we.unstable_cancelCallback,$f=we.unstable_shouldYield,Bf=we.unstable_requestPaint,Q=we.unstable_now,Vf=we.unstable_getCurrentPriorityLevel,yo=we.unstable_ImmediatePriority,ia=we.unstable_UserBlockingPriority,Wr=we.unstable_NormalPriority,Af=we.unstable_LowPriority,oa=we.unstable_IdlePriority,vl=null,$e=null;function Wf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Qf,Gf=Math.log,Hf=Math.LN2;function Qf(e){return e>>>=0,e===0?32:31-(Gf(e)/Hf|0)|0}var hr=64,vr=4194304;function Pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~l;u!==0?r=Pt(u):(i&=o,i!==0&&(r=Pt(i)))}else o=t&~l,o!==0?r=Pt(o):i!==0&&(r=Pt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Oe(n),l=1<<t,r|=e[t],n&=~l;return r}function Kf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Oe(i),u=1<<o,s=l[o];s===-1?(!(u&t)||u&r)&&(l[o]=Kf(u,n)):s<=n&&(e.expiredLanes|=u),i&=~u}}function _i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ua(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function Vl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Oe(n),e[n]=t}function Xf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Oe(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function wo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Oe(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var j=0;function sa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var aa,ko,ca,fa,da,Pi=!1,gr=[],un=null,sn=null,an=null,Vt=new Map,At=new Map,nn=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Vt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function wt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=or(n),n!==null&&ko(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Jf(e,n,t,r,l){switch(n){case"focusin":return un=wt(un,e,n,t,r,l),!0;case"dragenter":return sn=wt(sn,e,n,t,r,l),!0;case"mouseover":return an=wt(an,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Vt.set(i,wt(Vt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,At.set(i,wt(At.get(i)||null,e,n,t,r,l)),!0}return!1}function pa(e){var n=_n(e.target);if(n!==null){var t=Dn(n);if(t!==null){if(n=t.tag,n===13){if(n=na(t),n!==null){e.blockedOn=n,da(e.priority,function(){ca(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ii(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);xi=r,t.target.dispatchEvent(r),xi=null}else return n=or(t),n!==null&&ko(n),e.blockedOn=t,!1;n.shift()}return!0}function wu(e,n,t){zr(e)&&t.delete(n)}function qf(){Pi=!1,un!==null&&zr(un)&&(un=null),sn!==null&&zr(sn)&&(sn=null),an!==null&&zr(an)&&(an=null),Vt.forEach(wu),At.forEach(wu)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,Pi||(Pi=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,qf)))}function Wt(e){function n(l){return kt(l,e)}if(0<gr.length){kt(gr[0],e);for(var t=1;t<gr.length;t++){var r=gr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&kt(un,e),sn!==null&&kt(sn,e),an!==null&&kt(an,e),Vt.forEach(n),At.forEach(n),t=0;t<nn.length;t++)r=nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)pa(t),t.blockedOn===null&&nn.shift()}var nt=Je.ReactCurrentBatchConfig,Hr=!0;function bf(e,n,t,r){var l=j,i=nt.transition;nt.transition=null;try{j=1,So(e,n,t,r)}finally{j=l,nt.transition=i}}function ed(e,n,t,r){var l=j,i=nt.transition;nt.transition=null;try{j=4,So(e,n,t,r)}finally{j=l,nt.transition=i}}function So(e,n,t,r){if(Hr){var l=Ii(e,n,t,r);if(l===null)Jl(e,n,r,Qr,t),yu(e,r);else if(Jf(l,e,n,t,r))r.stopPropagation();else if(yu(e,r),n&4&&-1<Zf.indexOf(e)){for(;l!==null;){var i=or(l);if(i!==null&&aa(i),i=Ii(e,n,t,r),i===null&&Jl(e,n,r,Qr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Jl(e,n,r,null,t)}}var Qr=null;function Ii(e,n,t,r){if(Qr=null,e=go(r),e=_n(e),e!==null)if(n=Dn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=na(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Qr=e,null}function ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vf()){case yo:return 1;case ia:return 4;case Wr:case Af:return 16;case oa:return 536870912;default:return 16}default:return 16}}var rn=null,xo=null,Lr=null;function ha(){if(Lr)return Lr;var e,n=xo,t=n.length,r,l="value"in rn?rn.value:rn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Lr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function ku(){return!1}function Se(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yr:ku,this.isPropagationStopped=ku,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),n}var dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=Se(dt),ir=A({},dt,{view:0,detail:0}),nd=Se(ir),Al,Wl,St,gl=A({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==St&&(St&&e.type==="mousemove"?(Al=e.screenX-St.screenX,Wl=e.screenY-St.screenY):Wl=Al=0,St=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),Su=Se(gl),td=A({},gl,{dataTransfer:0}),rd=Se(td),ld=A({},ir,{relatedTarget:0}),Gl=Se(ld),id=A({},dt,{animationName:0,elapsedTime:0,pseudoElement:0}),od=Se(id),ud=A({},dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sd=Se(ud),ad=A({},dt,{data:0}),xu=Se(ad),cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dd[e])?!!n[e]:!1}function Eo(){return pd}var md=A({},ir,{key:function(e){if(e.key){var n=cd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hd=Se(md),vd=A({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Se(vd),gd=A({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),yd=Se(gd),wd=A({},dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kd=Se(wd),Sd=A({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xd=Se(Sd),Cd=[9,13,27,32],No=Ke&&"CompositionEvent"in window,Lt=null;Ke&&"documentMode"in document&&(Lt=document.documentMode);var Ed=Ke&&"TextEvent"in window&&!Lt,va=Ke&&(!No||Lt&&8<Lt&&11>=Lt),Eu=" ",Nu=!1;function ga(e,n){switch(e){case"keyup":return Cd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Nd(e,n){switch(e){case"compositionend":return ya(n);case"keypress":return n.which!==32?null:(Nu=!0,Eu);case"textInput":return e=n.data,e===Eu&&Nu?null:e;default:return null}}function _d(e,n){if(An)return e==="compositionend"||!No&&ga(e,n)?(e=ha(),Lr=xo=rn=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return va&&n.locale!=="ko"?null:n.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pd[e.type]:n==="textarea"}function wa(e,n,t,r){Zs(r),n=Kr(n,"onChange"),0<n.length&&(t=new Co("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Rt=null,Gt=null;function Id(e){za(e,0)}function yl(e){var n=Hn(e);if(Ws(n))return e}function Td(e,n){if(e==="change")return n}var ka=!1;if(Ke){var Hl;if(Ke){var Ql="oninput"in document;if(!Ql){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Ql=typeof Pu.oninput=="function"}Hl=Ql}else Hl=!1;ka=Hl&&(!document.documentMode||9<document.documentMode)}function Iu(){Rt&&(Rt.detachEvent("onpropertychange",Sa),Gt=Rt=null)}function Sa(e){if(e.propertyName==="value"&&yl(Gt)){var n=[];wa(n,Gt,e,go(e)),ea(Id,n)}}function zd(e,n,t){e==="focusin"?(Iu(),Rt=n,Gt=t,Rt.attachEvent("onpropertychange",Sa)):e==="focusout"&&Iu()}function Ld(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Gt)}function Rd(e,n){if(e==="click")return yl(n)}function Od(e,n){if(e==="input"||e==="change")return yl(n)}function Ud(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var je=typeof Object.is=="function"?Object.is:Ud;function Ht(e,n){if(je(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!ci.call(n,l)||!je(e[l],n[l]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,n){var t=Tu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tu(t)}}function xa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ca(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function _o(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jd(e){var n=Ca(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&xa(t.ownerDocument.documentElement,t)){if(r!==null&&_o(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=zu(t,i);var o=zu(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Md=Ke&&"documentMode"in document&&11>=document.documentMode,Wn=null,Ti=null,Ot=null,zi=!1;function Lu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zi||Wn==null||Wn!==Br(r)||(r=Wn,"selectionStart"in r&&_o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ot&&Ht(Ot,r)||(Ot=r,r=Kr(Ti,"onSelect"),0<r.length&&(n=new Co("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Wn)))}function wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Gn={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Kl={},Ea={};Ke&&(Ea=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function wl(e){if(Kl[e])return Kl[e];if(!Gn[e])return e;var n=Gn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ea)return Kl[e]=n[t];return e}var Na=wl("animationend"),_a=wl("animationiteration"),Pa=wl("animationstart"),Ia=wl("transitionend"),Ta=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){Ta.set(e,n),Mn(n,[e])}for(var Yl=0;Yl<Ru.length;Yl++){var Xl=Ru[Yl],Dd=Xl.toLowerCase(),Fd=Xl[0].toUpperCase()+Xl.slice(1);yn(Dd,"on"+Fd)}yn(Na,"onAnimationEnd");yn(_a,"onAnimationIteration");yn(Pa,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Ia,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var It="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(It));function Ou(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Df(r,n,void 0,e),e.currentTarget=null}function za(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;Ou(l,u,a),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,a=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;Ou(l,u,a),i=s}}}if(Ar)throw e=Ni,Ar=!1,Ni=null,e}function D(e,n){var t=n[ji];t===void 0&&(t=n[ji]=new Set);var r=e+"__bubble";t.has(r)||(La(n,e,2,!1),t.add(r))}function Zl(e,n,t){var r=0;n&&(r|=4),La(t,e,r,n)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Qt(e){if(!e[kr]){e[kr]=!0,Fs.forEach(function(t){t!=="selectionchange"&&($d.has(t)||Zl(t,!1,e),Zl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kr]||(n[kr]=!0,Zl("selectionchange",!1,n))}}function La(e,n,t,r){switch(ma(n)){case 1:var l=bf;break;case 4:l=ed;break;default:l=So}t=l.bind(null,n,t,e),l=void 0,!Ei||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Jl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=_n(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ea(function(){var a=i,m=go(t),p=[];e:{var h=Ta.get(e);if(h!==void 0){var g=Co,y=e;switch(e){case"keypress":if(Rr(t)===0)break e;case"keydown":case"keyup":g=hd;break;case"focusin":y="focus",g=Gl;break;case"focusout":y="blur",g=Gl;break;case"beforeblur":case"afterblur":g=Gl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yd;break;case Na:case _a:case Pa:g=od;break;case Ia:g=kd;break;case"scroll":g=nd;break;case"wheel":g=xd;break;case"copy":case"cut":case"paste":g=sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Cu}var w=(n&4)!==0,x=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var c=a,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Bt(c,f),v!=null&&w.push(Kt(c,v,d)))),x)break;c=c.return}0<w.length&&(h=new g(h,y,null,t,m),p.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&t!==xi&&(y=t.relatedTarget||t.fromElement)&&(_n(y)||y[Ye]))break e;if((g||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=a,y=y?_n(y):null,y!==null&&(x=Dn(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=a),g!==y)){if(w=Su,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Cu,v="onPointerLeave",f="onPointerEnter",c="pointer"),x=g==null?h:Hn(g),d=y==null?h:Hn(y),h=new w(v,c+"leave",g,t,m),h.target=x,h.relatedTarget=d,v=null,_n(m)===a&&(w=new w(f,c+"enter",y,t,m),w.target=d,w.relatedTarget=x,v=w),x=v,g&&y)n:{for(w=g,f=y,c=0,d=w;d;d=$n(d))c++;for(d=0,v=f;v;v=$n(v))d++;for(;0<c-d;)w=$n(w),c--;for(;0<d-c;)f=$n(f),d--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=$n(w),f=$n(f)}w=null}else w=null;g!==null&&Uu(p,h,g,w,!1),y!==null&&x!==null&&Uu(p,x,y,w,!0)}}e:{if(h=a?Hn(a):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=Td;else if(_u(h))if(ka)S=Od;else{S=Ld;var _=zd}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Rd);if(S&&(S=S(e,a))){wa(p,S,t,m);break e}_&&_(e,h,a),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&gi(h,"number",h.value)}switch(_=a?Hn(a):window,e){case"focusin":(_u(_)||_.contentEditable==="true")&&(Wn=_,Ti=a,Ot=null);break;case"focusout":Ot=Ti=Wn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Lu(p,t,m);break;case"selectionchange":if(Md)break;case"keydown":case"keyup":Lu(p,t,m)}var P;if(No)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else An?ga(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(va&&t.locale!=="ko"&&(An||I!=="onCompositionStart"?I==="onCompositionEnd"&&An&&(P=ha()):(rn=m,xo="value"in rn?rn.value:rn.textContent,An=!0)),_=Kr(a,I),0<_.length&&(I=new xu(I,e,null,t,m),p.push({event:I,listeners:_}),P?I.data=P:(P=ya(t),P!==null&&(I.data=P)))),(P=Ed?Nd(e,t):_d(e,t))&&(a=Kr(a,"onBeforeInput"),0<a.length&&(m=new xu("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:a}),m.data=P))}za(p,n)})}function Kt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Kr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Bt(e,t),i!=null&&r.unshift(Kt(e,i,l)),i=Bt(e,n),i!=null&&r.push(Kt(e,i,l))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uu(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,l?(s=Bt(t,i),s!=null&&o.unshift(Kt(t,s,u))):l||(s=Bt(t,i),s!=null&&o.push(Kt(t,s,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Bd=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Bd,`
`).replace(Vd,"")}function Sr(e,n,t){if(n=ju(n),ju(e)!==n&&t)throw Error(k(425))}function Yr(){}var Li=null,Ri=null;function Oi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,Ad=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,Wd=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(e){return Mu.resolve(null).then(e).catch(Gd)}:Ui;function Gd(e){setTimeout(function(){throw e})}function ql(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Wt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Wt(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Du(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var pt=Math.random().toString(36).slice(2),Fe="__reactFiber$"+pt,Yt="__reactProps$"+pt,Ye="__reactContainer$"+pt,ji="__reactEvents$"+pt,Hd="__reactListeners$"+pt,Qd="__reactHandles$"+pt;function _n(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ye]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Du(e);e!==null;){if(t=e[Fe])return t;e=Du(e)}return n}e=t,t=e.parentNode}return null}function or(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function kl(e){return e[Yt]||null}var Mi=[],Qn=-1;function wn(e){return{current:e}}function F(e){0>Qn||(e.current=Mi[Qn],Mi[Qn]=null,Qn--)}function M(e,n){Qn++,Mi[Qn]=e.current,e.current=n}var gn={},oe=wn(gn),pe=wn(!1),Ln=gn;function it(e,n){var t=e.type.contextTypes;if(!t)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Xr(){F(pe),F(oe)}function Fu(e,n,t){if(oe.current!==gn)throw Error(k(168));M(oe,n),M(pe,t)}function Ra(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(k(108,zf(e)||"Unknown",l));return A({},t,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Ln=oe.current,M(oe,e),M(pe,pe.current),!0}function $u(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Ra(e,n,Ln),r.__reactInternalMemoizedMergedChildContext=e,F(pe),F(oe),M(oe,e)):F(pe),M(pe,t)}var Ae=null,Sl=!1,bl=!1;function Oa(e){Ae===null?Ae=[e]:Ae.push(e)}function Kd(e){Sl=!0,Oa(e)}function kn(){if(!bl&&Ae!==null){bl=!0;var e=0,n=j;try{var t=Ae;for(j=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ae=null,Sl=!1}catch(l){throw Ae!==null&&(Ae=Ae.slice(e+1)),la(yo,kn),l}finally{j=n,bl=!1}}return null}var Kn=[],Yn=0,Jr=null,qr=0,xe=[],Ce=0,Rn=null,We=1,Ge="";function En(e,n){Kn[Yn++]=qr,Kn[Yn++]=Jr,Jr=e,qr=n}function Ua(e,n,t){xe[Ce++]=We,xe[Ce++]=Ge,xe[Ce++]=Rn,Rn=e;var r=We;e=Ge;var l=32-Oe(r)-1;r&=~(1<<l),t+=1;var i=32-Oe(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Oe(n)+l|t<<l|r,Ge=i+e}else We=1<<i|t<<l|r,Ge=e}function Po(e){e.return!==null&&(En(e,1),Ua(e,1,0))}function Io(e){for(;e===Jr;)Jr=Kn[--Yn],Kn[Yn]=null,qr=Kn[--Yn],Kn[Yn]=null;for(;e===Rn;)Rn=xe[--Ce],xe[Ce]=null,Ge=xe[--Ce],xe[Ce]=null,We=xe[--Ce],xe[Ce]=null}var ye=null,ge=null,$=!1,Re=null;function ja(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Bu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ge=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Rn!==null?{id:We,overflow:Ge}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ge=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if($){var n=ge;if(n){var t=n;if(!Bu(e,n)){if(Di(e))throw Error(k(418));n=cn(t.nextSibling);var r=ye;n&&Bu(e,n)?ja(r,t):(e.flags=e.flags&-4097|2,$=!1,ye=e)}}else{if(Di(e))throw Error(k(418));e.flags=e.flags&-4097|2,$=!1,ye=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function xr(e){if(e!==ye)return!1;if(!$)return Vu(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Oi(e.type,e.memoizedProps)),n&&(n=ge)){if(Di(e))throw Ma(),Error(k(418));for(;n;)ja(e,n),n=cn(n.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ye?cn(e.stateNode.nextSibling):null;return!0}function Ma(){for(var e=ge;e;)e=cn(e.nextSibling)}function ot(){ge=ye=null,$=!1}function To(e){Re===null?Re=[e]:Re.push(e)}var Yd=Je.ReactCurrentBatchConfig;function ze(e,n){if(e&&e.defaultProps){n=A({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var br=wn(null),el=null,Xn=null,zo=null;function Lo(){zo=Xn=el=null}function Ro(e){var n=br.current;F(br),e._currentValue=n}function $i(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function tt(e,n){el=e,zo=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(zo!==e)if(e={context:e,memoizedValue:n,next:null},Xn===null){if(el===null)throw Error(k(308));Xn=e,el.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return n}var Pn=null;function Oo(e){Pn===null?Pn=[e]:Pn.push(e)}function Da(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Oo(n)):(t.next=l.next,l.next=t),n.interleaved=t,Xe(e,r)}function Xe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function Uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function fn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Xe(e,t)}return l=r.interleaved,l===null?(n.next=n,Oo(r)):(n.next=l.next,l.next=n),r.interleaved=n,Xe(e,t)}function Or(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,wo(e,t)}}function Au(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function nl(e,n,t,r){var l=e.updateQueue;en=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,a=s.next;s.next=null,o===null?i=a:o.next=a,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==o&&(u===null?m.firstBaseUpdate=a:u.next=a,m.lastBaseUpdate=s))}if(i!==null){var p=l.baseState;o=0,m=a=s=null,u=i;do{var h=u.lane,g=u.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(h=n,g=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(g,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(g,p,h):y,h==null)break e;p=A({},p,h);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[u]:h.push(u))}else g={eventTime:g,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(a=m=g,s=p):m=m.next=g,o|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(s=p),l.baseState=s,l.firstBaseUpdate=a,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=p}}function Wu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var $a=new Ds.Component().refs;function Bi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:A({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xl={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),i=Qe(r,l);i.payload=n,t!=null&&(i.callback=t),n=fn(e,i,l),n!==null&&(Ue(n,e,l,r),Or(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),i=Qe(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=fn(e,i,l),n!==null&&(Ue(n,e,l,r),Or(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=pn(e),l=Qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=fn(e,l,r),n!==null&&(Ue(n,e,r,t),Or(n,e,r))}};function Gu(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Ht(t,r)||!Ht(l,i):!0}function Ba(e,n,t){var r=!1,l=gn,i=n.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=me(n)?Ln:oe.current,r=n.contextTypes,i=(r=r!=null)?it(e,l):gn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Hu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xl.enqueueReplaceState(n,n.state,null)}function Vi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs=$a,Uo(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=me(n)?Ln:oe.current,l.context=it(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&xl.enqueueReplaceState(l,l.state,null),nl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var u=l.refs;u===$a&&(u=l.refs={}),o===null?delete u[i]:u[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Cr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Qu(e){var n=e._init;return n(e._payload)}function Va(e){function n(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=mn(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,v){return c===null||c.tag!==6?(c=oi(d,f.mode,v),c.return=f,c):(c=l(c,d),c.return=f,c)}function s(f,c,d,v){var S=d.type;return S===Vn?m(f,c,d.props.children,v,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===be&&Qu(S)===c.type)?(v=l(c,d.props),v.ref=xt(f,c,d),v.return=f,v):(v=$r(d.type,d.key,d.props,null,f.mode,v),v.ref=xt(f,c,d),v.return=f,v)}function a(f,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=ui(d,f.mode,v),c.return=f,c):(c=l(c,d.children||[]),c.return=f,c)}function m(f,c,d,v,S){return c===null||c.tag!==7?(c=zn(d,f.mode,v,S),c.return=f,c):(c=l(c,d),c.return=f,c)}function p(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=oi(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case dr:return d=$r(c.type,c.key,c.props,null,f.mode,d),d.ref=xt(f,null,c),d.return=f,d;case Bn:return c=ui(c,f.mode,d),c.return=f,c;case be:var v=c._init;return p(f,v(c._payload),d)}if(_t(c)||gt(c))return c=zn(c,f.mode,d,null),c.return=f,c;Cr(f,c)}return null}function h(f,c,d,v){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(f,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case dr:return d.key===S?s(f,c,d,v):null;case Bn:return d.key===S?a(f,c,d,v):null;case be:return S=d._init,h(f,c,S(d._payload),v)}if(_t(d)||gt(d))return S!==null?null:m(f,c,d,v,null);Cr(f,d)}return null}function g(f,c,d,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,u(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dr:return f=f.get(v.key===null?d:v.key)||null,s(c,f,v,S);case Bn:return f=f.get(v.key===null?d:v.key)||null,a(c,f,v,S);case be:var _=v._init;return g(f,c,d,_(v._payload),S)}if(_t(v)||gt(v))return f=f.get(d)||null,m(c,f,v,S,null);Cr(c,v)}return null}function y(f,c,d,v){for(var S=null,_=null,P=c,I=c=0,G=null;P!==null&&I<d.length;I++){P.index>I?(G=P,P=null):G=P.sibling;var O=h(f,P,d[I],v);if(O===null){P===null&&(P=G);break}e&&P&&O.alternate===null&&n(f,P),c=i(O,c,I),_===null?S=O:_.sibling=O,_=O,P=G}if(I===d.length)return t(f,P),$&&En(f,I),S;if(P===null){for(;I<d.length;I++)P=p(f,d[I],v),P!==null&&(c=i(P,c,I),_===null?S=P:_.sibling=P,_=P);return $&&En(f,I),S}for(P=r(f,P);I<d.length;I++)G=g(P,f,I,d[I],v),G!==null&&(e&&G.alternate!==null&&P.delete(G.key===null?I:G.key),c=i(G,c,I),_===null?S=G:_.sibling=G,_=G);return e&&P.forEach(function(Ie){return n(f,Ie)}),$&&En(f,I),S}function w(f,c,d,v){var S=gt(d);if(typeof S!="function")throw Error(k(150));if(d=S.call(d),d==null)throw Error(k(151));for(var _=S=null,P=c,I=c=0,G=null,O=d.next();P!==null&&!O.done;I++,O=d.next()){P.index>I?(G=P,P=null):G=P.sibling;var Ie=h(f,P,O.value,v);if(Ie===null){P===null&&(P=G);break}e&&P&&Ie.alternate===null&&n(f,P),c=i(Ie,c,I),_===null?S=Ie:_.sibling=Ie,_=Ie,P=G}if(O.done)return t(f,P),$&&En(f,I),S;if(P===null){for(;!O.done;I++,O=d.next())O=p(f,O.value,v),O!==null&&(c=i(O,c,I),_===null?S=O:_.sibling=O,_=O);return $&&En(f,I),S}for(P=r(f,P);!O.done;I++,O=d.next())O=g(P,f,I,O.value,v),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?I:O.key),c=i(O,c,I),_===null?S=O:_.sibling=O,_=O);return e&&P.forEach(function(ht){return n(f,ht)}),$&&En(f,I),S}function x(f,c,d,v){if(typeof d=="object"&&d!==null&&d.type===Vn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case dr:e:{for(var S=d.key,_=c;_!==null;){if(_.key===S){if(S=d.type,S===Vn){if(_.tag===7){t(f,_.sibling),c=l(_,d.props.children),c.return=f,f=c;break e}}else if(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===be&&Qu(S)===_.type){t(f,_.sibling),c=l(_,d.props),c.ref=xt(f,_,d),c.return=f,f=c;break e}t(f,_);break}else n(f,_);_=_.sibling}d.type===Vn?(c=zn(d.props.children,f.mode,v,d.key),c.return=f,f=c):(v=$r(d.type,d.key,d.props,null,f.mode,v),v.ref=xt(f,c,d),v.return=f,f=v)}return o(f);case Bn:e:{for(_=d.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),c=l(c,d.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=ui(d,f.mode,v),c.return=f,f=c}return o(f);case be:return _=d._init,x(f,c,_(d._payload),v)}if(_t(d))return y(f,c,d,v);if(gt(d))return w(f,c,d,v);Cr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),c=l(c,d),c.return=f,f=c):(t(f,c),c=oi(d,f.mode,v),c.return=f,f=c),o(f)):t(f,c)}return x}var ut=Va(!0),Aa=Va(!1),ur={},Be=wn(ur),Xt=wn(ur),Zt=wn(ur);function In(e){if(e===ur)throw Error(k(174));return e}function jo(e,n){switch(M(Zt,n),M(Xt,e),M(Be,ur),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:wi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=wi(n,e)}F(Be),M(Be,n)}function st(){F(Be),F(Xt),F(Zt)}function Wa(e){In(Zt.current);var n=In(Be.current),t=wi(n,e.type);n!==t&&(M(Xt,e),M(Be,t))}function Mo(e){Xt.current===e&&(F(Be),F(Xt))}var B=wn(0);function tl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ei=[];function Do(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Ur=Je.ReactCurrentDispatcher,ni=Je.ReactCurrentBatchConfig,On=0,V=null,X=null,q=null,rl=!1,Ut=!1,Jt=0,Xd=0;function re(){throw Error(k(321))}function Fo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!je(e[t],n[t]))return!1;return!0}function $o(e,n,t,r,l,i){if(On=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?bd:ep,e=t(r,l),Ut){i=0;do{if(Ut=!1,Jt=0,25<=i)throw Error(k(301));i+=1,q=X=null,n.updateQueue=null,Ur.current=np,e=t(r,l)}while(Ut)}if(Ur.current=ll,n=X!==null&&X.next!==null,On=0,q=X=V=null,rl=!1,n)throw Error(k(300));return e}function Bo(){var e=Jt!==0;return Jt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Pe(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=q===null?V.memoizedState:q.next;if(n!==null)q=n,X=e;else{if(e===null)throw Error(k(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function qt(e,n){return typeof n=="function"?n(e):n}function ti(e){var n=Pe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,a=i;do{var m=a.lane;if((On&m)===m)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var p={lane:m,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=p,o=r):s=s.next=p,V.lanes|=m,Un|=m}a=a.next}while(a!==null&&a!==i);s===null?o=r:s.next=u,je(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Un|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ri(e){var n=Pe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);je(i,n.memoizedState)||(de=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Ga(){}function Ha(e,n){var t=V,r=Pe(),l=n(),i=!je(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,Vo(Ya.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,bt(9,Ka.bind(null,t,r,l,n),void 0,null),b===null)throw Error(k(349));On&30||Qa(t,n,l)}return l}function Qa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ka(e,n,t,r){n.value=t,n.getSnapshot=r,Xa(n)&&Za(e)}function Ya(e,n,t){return t(function(){Xa(n)&&Za(e)})}function Xa(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!je(e,t)}catch{return!0}}function Za(e){var n=Xe(e,1);n!==null&&Ue(n,e,1,-1)}function Ku(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},n.queue=e,e=e.dispatch=qd.bind(null,V,e),[n.memoizedState,e]}function bt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ja(){return Pe().memoizedState}function jr(e,n,t,r){var l=De();V.flags|=e,l.memoizedState=bt(1|n,t,void 0,r===void 0?null:r)}function Cl(e,n,t,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&Fo(r,o.deps)){l.memoizedState=bt(n,t,i,r);return}}V.flags|=e,l.memoizedState=bt(1|n,t,i,r)}function Yu(e,n){return jr(8390656,8,e,n)}function Vo(e,n){return Cl(2048,8,e,n)}function qa(e,n){return Cl(4,2,e,n)}function ba(e,n){return Cl(4,4,e,n)}function ec(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nc(e,n,t){return t=t!=null?t.concat([e]):null,Cl(4,4,ec.bind(null,n,e),t)}function Ao(){}function tc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function rc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function lc(e,n,t){return On&21?(je(t,n)||(t=ua(),V.lanes|=t,Un|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function Zd(e,n){var t=j;j=t!==0&&4>t?t:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),n()}finally{j=t,ni.transition=r}}function ic(){return Pe().memoizedState}function Jd(e,n,t){var r=pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},oc(e))uc(n,t);else if(t=Da(e,n,t,r),t!==null){var l=se();Ue(t,e,r,l),sc(t,n,r)}}function qd(e,n,t){var r=pn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(oc(e))uc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,u=i(o,t);if(l.hasEagerState=!0,l.eagerState=u,je(u,o)){var s=n.interleaved;s===null?(l.next=l,Oo(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=Da(e,n,l,r),t!==null&&(l=se(),Ue(t,e,r,l),sc(t,n,r))}}function oc(e){var n=e.alternate;return e===V||n!==null&&n===V}function uc(e,n){Ut=rl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,wo(e,t)}}var ll={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},bd={readContext:_e,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:Yu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,jr(4194308,4,ec.bind(null,n,e),t)},useLayoutEffect:function(e,n){return jr(4194308,4,e,n)},useInsertionEffect:function(e,n){return jr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jd.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Ku,useDebugValue:Ao,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Ku(!1),n=e[0];return e=Zd.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,l=De();if($){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),b===null)throw Error(k(349));On&30||Qa(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Yu(Ya.bind(null,r,i,e),[e]),r.flags|=2048,bt(9,Ka.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=De(),n=b.identifierPrefix;if($){var t=Ge,r=We;t=(r&~(1<<32-Oe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Xd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ep={readContext:_e,useCallback:tc,useContext:_e,useEffect:Vo,useImperativeHandle:nc,useInsertionEffect:qa,useLayoutEffect:ba,useMemo:rc,useReducer:ti,useRef:Ja,useState:function(){return ti(qt)},useDebugValue:Ao,useDeferredValue:function(e){var n=Pe();return lc(n,X.memoizedState,e)},useTransition:function(){var e=ti(qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Ga,useSyncExternalStore:Ha,useId:ic,unstable_isNewReconciler:!1},np={readContext:_e,useCallback:tc,useContext:_e,useEffect:Vo,useImperativeHandle:nc,useInsertionEffect:qa,useLayoutEffect:ba,useMemo:rc,useReducer:ri,useRef:Ja,useState:function(){return ri(qt)},useDebugValue:Ao,useDeferredValue:function(e){var n=Pe();return X===null?n.memoizedState=e:lc(n,X.memoizedState,e)},useTransition:function(){var e=ri(qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Ga,useSyncExternalStore:Ha,useId:ic,unstable_isNewReconciler:!1};function at(e,n){try{var t="",r=n;do t+=Tf(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function li(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ai(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var tp=typeof WeakMap=="function"?WeakMap:Map;function ac(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ol||(ol=!0,qi=r),Ai(e,n)},t}function cc(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ai(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ai(e,n),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Xu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new tp;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=vp.bind(null,e,n,t),n.then(e,e))}function Zu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ju(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,fn(t,n,1))),t.lanes|=1),e)}var rp=Je.ReactCurrentOwner,de=!1;function ue(e,n,t,r){n.child=e===null?Aa(n,null,t,r):ut(n,e.child,t,r)}function qu(e,n,t,r,l){t=t.render;var i=n.ref;return tt(n,l),r=$o(e,n,t,r,i,l),t=Bo(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):($&&t&&Po(n),n.flags|=1,ue(e,n,r,l),n.child)}function bu(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Zo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,fc(e,n,i,r,l)):(e=$r(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ht,t(o,r)&&e.ref===n.ref)return Ze(e,n,l)}return n.flags|=1,e=mn(i,r),e.ref=n.ref,e.return=n,n.child=e}function fc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Ht(i,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Ze(e,n,l)}return Wi(e,n,t,r,l)}function dc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Jn,ve),ve|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(Jn,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,M(Jn,ve),ve|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,M(Jn,ve),ve|=r;return ue(e,n,l,t),n.child}function pc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Wi(e,n,t,r,l){var i=me(t)?Ln:oe.current;return i=it(n,i),tt(n,l),t=$o(e,n,t,r,i,l),r=Bo(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):($&&r&&Po(n),n.flags|=1,ue(e,n,t,l),n.child)}function es(e,n,t,r,l){if(me(t)){var i=!0;Zr(n)}else i=!1;if(tt(n,l),n.stateNode===null)Mr(e,n),Ba(n,t,r),Vi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var s=o.context,a=t.contextType;typeof a=="object"&&a!==null?a=_e(a):(a=me(t)?Ln:oe.current,a=it(n,a));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==a)&&Hu(n,o,r,a),en=!1;var h=n.memoizedState;o.state=h,nl(n,r,o,l),s=n.memoizedState,u!==r||h!==s||pe.current||en?(typeof m=="function"&&(Bi(n,t,m,r),s=n.memoizedState),(u=en||Gu(n,t,u,r,h,s,a))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=a,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Fa(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:ze(n.type,u),o.props=a,p=n.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=me(t)?Ln:oe.current,s=it(n,s));var g=t.getDerivedStateFromProps;(m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||h!==s)&&Hu(n,o,r,s),en=!1,h=n.memoizedState,o.state=h,nl(n,r,o,l);var y=n.memoizedState;u!==p||h!==y||pe.current||en?(typeof g=="function"&&(Bi(n,t,g,r),y=n.memoizedState),(a=en||Gu(n,t,a,r,h,y,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=s,r=a):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Gi(e,n,t,r,i,l)}function Gi(e,n,t,r,l,i){pc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&$u(n,t,!1),Ze(e,n,i);r=n.stateNode,rp.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=ut(n,e.child,null,i),n.child=ut(n,null,u,i)):ue(e,n,u,i),n.memoizedState=r.state,l&&$u(n,t,!0),n.child}function mc(e){var n=e.stateNode;n.pendingContext?Fu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Fu(e,n.context,!1),jo(e,n.containerInfo)}function ns(e,n,t,r,l){return ot(),To(l),n.flags|=256,ue(e,n,t,r),n.child}var Hi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,n,t){var r=n.pendingProps,l=B.current,i=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(B,l&1),e===null)return Fi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_l(o,r,0,null),e=zn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Qi(t),n.memoizedState=Hi,e):Wo(n,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return lp(e,n,o,r,u,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=mn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=mn(u,i):(i=zn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Qi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Hi,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Wo(e,n){return n=_l({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Er(e,n,t,r){return r!==null&&To(r),ut(n,e.child,null,t),e=Wo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lp(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=li(Error(k(422))),Er(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=_l({mode:"visible",children:r.children},l,0,null),i=zn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&ut(n,e.child,null,o),n.child.memoizedState=Qi(o),n.memoizedState=Hi,i);if(!(n.mode&1))return Er(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(k(419)),r=li(i,r,void 0),Er(e,n,o,r)}if(u=(o&e.childLanes)!==0,de||u){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Ue(r,e,l,-1))}return Xo(),r=li(Error(k(421))),Er(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=gp.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,ge=cn(l.nextSibling),ye=n,$=!0,Re=null,e!==null&&(xe[Ce++]=We,xe[Ce++]=Ge,xe[Ce++]=Rn,We=e.id,Ge=e.overflow,Rn=n),n=Wo(n,r.children),n.flags|=4096,n)}function ts(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$i(e.return,n,t)}function ii(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function vc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ts(e,t,n);else if(e.tag===19)ts(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(B,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&tl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),ii(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}ii(n,!0,t,null,i);break;case"together":ii(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ip(e,n,t){switch(n.tag){case 3:mc(n),ot();break;case 5:Wa(n);break;case 1:me(n.type)&&Zr(n);break;case 4:jo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;M(br,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(M(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?hc(e,n,t):(M(B,B.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);M(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return vc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,dc(e,n,t)}return Ze(e,n,t)}var gc,Ki,yc,wc;gc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ki=function(){};yc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,In(Be.current);var i=null;switch(t){case"input":l=hi(e,l),r=hi(e,r),i=[];break;case"select":l=A({},l,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":l=yi(e,l),r=yi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}ki(t,r);var o;t=null;for(a in l)if(!r.hasOwnProperty(a)&&l.hasOwnProperty(a)&&l[a]!=null)if(a==="style"){var u=l[a];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ft.hasOwnProperty(a)?i||(i=[]):(i=i||[]).push(a,null));for(a in r){var s=r[a];if(u=l!=null?l[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Ft.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&D("scroll",e),i||u===s||(i=[])):(i=i||[]).push(a,s))}t&&(i=i||[]).push("style",t);var a=i;(n.updateQueue=a)&&(n.flags|=4)}};wc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function op(e,n,t){var r=n.pendingProps;switch(Io(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return me(n.type)&&Xr(),le(n),null;case 3:return r=n.stateNode,st(),F(pe),F(oe),Do(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(no(Re),Re=null))),Ki(e,n),le(n),null;case 5:Mo(n);var l=In(Zt.current);if(t=n.type,e!==null&&n.stateNode!=null)yc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return le(n),null}if(e=In(Be.current),xr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Fe]=n,r[Yt]=i,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<It.length;l++)D(It[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":fu(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":pu(r,i),D("invalid",r)}ki(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,u,e),l=["children",""+u]):Ft.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&D("scroll",r)}switch(t){case"input":pr(r),du(r,i,!0);break;case"textarea":pr(r),mu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Fe]=n,e[Yt]=r,gc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Si(t,r),t){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<It.length;l++)D(It[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":fu(e,r),l=hi(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=A({},r,{value:void 0}),D("invalid",e);break;case"textarea":pu(e,r),l=yi(e,r),D("invalid",e);break;default:l=r}ki(t,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?Xs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ks(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&$t(e,s):typeof s=="number"&&$t(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ft.hasOwnProperty(i)?s!=null&&i==="onScroll"&&D("scroll",e):s!=null&&po(e,i,s,o))}switch(t){case"input":pr(e),du(e,r,!1);break;case"textarea":pr(e),mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)wc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=In(Zt.current),In(Be.current),xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fe]=n,(i=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fe]=n,n.stateNode=r}return le(n),null;case 13:if(F(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ge!==null&&n.mode&1&&!(n.flags&128))Ma(),ot(),n.flags|=98560,i=!1;else if(i=xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Fe]=n}else ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),i=!1}else Re!==null&&(no(Re),Re=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):Xo())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return st(),Ki(e,n),e===null&&Qt(n.stateNode.containerInfo),le(n),null;case 10:return Ro(n.type._context),le(n),null;case 17:return me(n.type)&&Xr(),le(n),null;case 19:if(F(B),i=n.memoizedState,i===null)return le(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Ct(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=tl(e),o!==null){for(n.flags|=128,Ct(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(B,B.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>ct&&(n.flags|=128,r=!0,Ct(i,!1),n.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return le(n),null}else 2*Q()-i.renderingStartTime>ct&&t!==1073741824&&(n.flags|=128,r=!0,Ct(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=B.current,M(B,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return Yo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function up(e,n){switch(Io(n),n.tag){case 1:return me(n.type)&&Xr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return st(),F(pe),F(oe),Do(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Mo(n),null;case 13:if(F(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(B),null;case 4:return st(),null;case 10:return Ro(n.type._context),null;case 22:case 23:return Yo(),null;case 24:return null;default:return null}}var Nr=!1,ie=!1,sp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Zn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function Yi(e,n,t){try{t()}catch(r){W(e,n,r)}}var rs=!1;function ap(e,n){if(Li=Hr,e=Ca(),_o(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,u=-1,s=-1,a=0,m=0,p=e,h=null;n:for(;;){for(var g;p!==t||l!==0&&p.nodeType!==3||(u=o+l),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break n;if(h===t&&++a===l&&(u=o),h===i&&++m===r&&(s=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ri={focusedElem:e,selectionRange:t},Hr=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:ze(n.type,w),x);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){W(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=rs,rs=!1,y}function jt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Yi(n,t,i)}l=l.next}while(l!==r)}}function El(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Xi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function kc(e){var n=e.alternate;n!==null&&(e.alternate=null,kc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[Yt],delete n[ji],delete n[Hd],delete n[Qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Zi(e,n,t),e=e.sibling;e!==null;)Zi(e,n,t),e=e.sibling}function Ji(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ji(e,n,t),e=e.sibling;e!==null;)Ji(e,n,t),e=e.sibling}var ee=null,Le=!1;function qe(e,n,t){for(t=t.child;t!==null;)xc(e,n,t),t=t.sibling}function xc(e,n,t){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(vl,t)}catch{}switch(t.tag){case 5:ie||Zn(t,n);case 6:var r=ee,l=Le;ee=null,qe(e,n,t),ee=r,Le=l,ee!==null&&(Le?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Le?(e=ee,t=t.stateNode,e.nodeType===8?ql(e.parentNode,t):e.nodeType===1&&ql(e,t),Wt(e)):ql(ee,t.stateNode));break;case 4:r=ee,l=Le,ee=t.stateNode.containerInfo,Le=!0,qe(e,n,t),ee=r,Le=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Yi(t,n,o),l=l.next}while(l!==r)}qe(e,n,t);break;case 1:if(!ie&&(Zn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){W(t,n,u)}qe(e,n,t);break;case 21:qe(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,qe(e,n,t),ie=r):qe(e,n,t);break;default:qe(e,n,t)}}function is(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new sp),n.forEach(function(r){var l=yp.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Te(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Le=!1;break e;case 3:ee=u.stateNode.containerInfo,Le=!0;break e;case 4:ee=u.stateNode.containerInfo,Le=!0;break e}u=u.return}if(ee===null)throw Error(k(160));xc(i,o,l),ee=null,Le=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(a){W(l,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Cc(n,e),n=n.sibling}function Cc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(n,e),Me(e),r&4){try{jt(3,e,e.return),El(3,e)}catch(w){W(e,e.return,w)}try{jt(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Te(n,e),Me(e),r&512&&t!==null&&Zn(t,t.return);break;case 5:if(Te(n,e),Me(e),r&512&&t!==null&&Zn(t,t.return),e.flags&32){var l=e.stateNode;try{$t(l,"")}catch(w){W(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Gs(l,i),Si(u,o);var a=Si(u,i);for(o=0;o<s.length;o+=2){var m=s[o],p=s[o+1];m==="style"?Xs(l,p):m==="dangerouslySetInnerHTML"?Ks(l,p):m==="children"?$t(l,p):po(l,m,p,a)}switch(u){case"input":vi(l,i);break;case"textarea":Hs(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?qn(l,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?qn(l,!!i.multiple,i.defaultValue,!0):qn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Yt]=i}catch(w){W(e,e.return,w)}}break;case 6:if(Te(n,e),Me(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){W(e,e.return,w)}}break;case 3:if(Te(n,e),Me(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wt(n.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Te(n,e),Me(e);break;case 13:Te(n,e),Me(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Qo=Q())),r&4&&is(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(a=ie)||m,Te(n,e),ie=a):Te(n,e),Me(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(p=C=m;C!==null;){switch(h=C,g=h.child,h.tag){case 0:case 11:case 14:case 15:jt(4,h,h.return);break;case 1:Zn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){W(r,t,w)}}break;case 5:Zn(h,h.return);break;case 22:if(h.memoizedState!==null){us(p);continue}}g!==null?(g.return=h,C=g):us(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,a?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Ys("display",o))}catch(w){W(e,e.return,w)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(w){W(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Te(n,e),Me(e),r&4&&is(e);break;case 21:break;default:Te(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Sc(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($t(l,""),r.flags&=-33);var i=ls(e);Ji(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ls(e);Zi(e,u,o);break;default:throw Error(k(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cp(e,n,t){C=e,Ec(e)}function Ec(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Nr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||ie;u=Nr;var a=ie;if(Nr=o,(ie=s)&&!a)for(C=l;C!==null;)o=C,s=o.child,o.tag===22&&o.memoizedState!==null?ss(l):s!==null?(s.return=o,C=s):ss(l);for(;i!==null;)C=i,Ec(i),i=i.sibling;C=l,Nr=u,ie=a}os(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):os(e)}}function os(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||El(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Wu(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Wu(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var m=a.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Wt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ie||n.flags&512&&Xi(n)}catch(h){W(n,n.return,h)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function us(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function ss(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{El(4,n)}catch(s){W(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){W(n,l,s)}}var i=n.return;try{Xi(n)}catch(s){W(n,i,s)}break;case 5:var o=n.return;try{Xi(n)}catch(s){W(n,o,s)}}}catch(s){W(n,n.return,s)}if(n===e){C=null;break}var u=n.sibling;if(u!==null){u.return=n.return,C=u;break}C=n.return}}var fp=Math.ceil,il=Je.ReactCurrentDispatcher,Go=Je.ReactCurrentOwner,Ne=Je.ReactCurrentBatchConfig,U=0,b=null,K=null,ne=0,ve=0,Jn=wn(0),Z=0,er=null,Un=0,Nl=0,Ho=0,Mt=null,fe=null,Qo=0,ct=1/0,Ve=null,ol=!1,qi=null,dn=null,_r=!1,ln=null,ul=0,Dt=0,bi=null,Dr=-1,Fr=0;function se(){return U&6?Q():Dr!==-1?Dr:Dr=Q()}function pn(e){return e.mode&1?U&2&&ne!==0?ne&-ne:Yd.transition!==null?(Fr===0&&(Fr=ua()),Fr):(e=j,e!==0||(e=window.event,e=e===void 0?16:ma(e.type)),e):1}function Ue(e,n,t,r){if(50<Dt)throw Dt=0,bi=null,Error(k(185));lr(e,t,r),(!(U&2)||e!==b)&&(e===b&&(!(U&2)&&(Nl|=t),Z===4&&tn(e,ne)),he(e,r),t===1&&U===0&&!(n.mode&1)&&(ct=Q()+500,Sl&&kn()))}function he(e,n){var t=e.callbackNode;Yf(e,n);var r=Gr(e,e===b?ne:0);if(r===0)t!==null&&gu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&gu(t),n===1)e.tag===0?Kd(as.bind(null,e)):Oa(as.bind(null,e)),Wd(function(){!(U&6)&&kn()}),t=null;else{switch(sa(r)){case 1:t=yo;break;case 4:t=ia;break;case 16:t=Wr;break;case 536870912:t=oa;break;default:t=Wr}t=Rc(t,Nc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Nc(e,n){if(Dr=-1,Fr=0,U&6)throw Error(k(327));var t=e.callbackNode;if(rt()&&e.callbackNode!==t)return null;var r=Gr(e,e===b?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=sl(e,r);else{n=r;var l=U;U|=2;var i=Pc();(b!==e||ne!==n)&&(Ve=null,ct=Q()+500,Tn(e,n));do try{mp();break}catch(u){_c(e,u)}while(!0);Lo(),il.current=i,U=l,K!==null?n=0:(b=null,ne=0,n=Z)}if(n!==0){if(n===2&&(l=_i(e),l!==0&&(r=l,n=eo(e,l))),n===1)throw t=er,Tn(e,0),tn(e,r),he(e,Q()),t;if(n===6)tn(e,r);else{if(l=e.current.alternate,!(r&30)&&!dp(l)&&(n=sl(e,r),n===2&&(i=_i(e),i!==0&&(r=i,n=eo(e,i))),n===1))throw t=er,Tn(e,0),tn(e,r),he(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Nn(e,fe,Ve);break;case 3:if(tn(e,r),(r&130023424)===r&&(n=Qo+500-Q(),10<n)){if(Gr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ui(Nn.bind(null,e,fe,Ve),n);break}Nn(e,fe,Ve);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Oe(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=Ui(Nn.bind(null,e,fe,Ve),r);break}Nn(e,fe,Ve);break;case 5:Nn(e,fe,Ve);break;default:throw Error(k(329))}}}return he(e,Q()),e.callbackNode===t?Nc.bind(null,e):null}function eo(e,n){var t=Mt;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=sl(e,n),e!==2&&(n=fe,fe=t,n!==null&&no(n)),e}function no(e){fe===null?fe=e:fe.push.apply(fe,e)}function dp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!je(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~Ho,n&=~Nl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Oe(n),r=1<<t;e[t]=-1,n&=~r}}function as(e){if(U&6)throw Error(k(327));rt();var n=Gr(e,0);if(!(n&1))return he(e,Q()),null;var t=sl(e,n);if(e.tag!==0&&t===2){var r=_i(e);r!==0&&(n=r,t=eo(e,r))}if(t===1)throw t=er,Tn(e,0),tn(e,n),he(e,Q()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,fe,Ve),he(e,Q()),null}function Ko(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(ct=Q()+500,Sl&&kn())}}function jn(e){ln!==null&&ln.tag===0&&!(U&6)&&rt();var n=U;U|=1;var t=Ne.transition,r=j;try{if(Ne.transition=null,j=1,e)return e()}finally{j=r,Ne.transition=t,U=n,!(U&6)&&kn()}}function Yo(){ve=Jn.current,F(Jn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ad(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(Io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xr();break;case 3:st(),F(pe),F(oe),Do();break;case 5:Mo(r);break;case 4:st();break;case 13:F(B);break;case 19:F(B);break;case 10:Ro(r.type._context);break;case 22:case 23:Yo()}t=t.return}if(b=e,K=e=mn(e.current,null),ne=ve=n,Z=0,er=null,Ho=Nl=Un=0,fe=Mt=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Pn=null}return e}function _c(e,n){do{var t=K;try{if(Lo(),Ur.current=ll,rl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}rl=!1}if(On=0,q=X=V=null,Ut=!1,Jt=0,Go.current=null,t===null||t.return===null){Z=1,er=n,K=null;break}e:{var i=e,o=t.return,u=t,s=n;if(n=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Zu(o);if(g!==null){g.flags&=-257,Ju(g,o,u,i,n),g.mode&1&&Xu(i,a,n),n=g,s=a;var y=n.updateQueue;if(y===null){var w=new Set;w.add(s),n.updateQueue=w}else y.add(s);break e}else{if(!(n&1)){Xu(i,a,n),Xo();break e}s=Error(k(426))}}else if($&&u.mode&1){var x=Zu(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ju(x,o,u,i,n),To(at(s,u));break e}}i=s=at(s,u),Z!==4&&(Z=2),Mt===null?Mt=[i]:Mt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=ac(i,s,n);Au(i,f);break e;case 1:u=s;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(dn===null||!dn.has(d)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=cc(i,u,n);Au(i,v);break e}}i=i.return}while(i!==null)}Tc(t)}catch(S){n=S,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Pc(){var e=il.current;return il.current=ll,e===null?ll:e}function Xo(){(Z===0||Z===3||Z===2)&&(Z=4),b===null||!(Un&268435455)&&!(Nl&268435455)||tn(b,ne)}function sl(e,n){var t=U;U|=2;var r=Pc();(b!==e||ne!==n)&&(Ve=null,Tn(e,n));do try{pp();break}catch(l){_c(e,l)}while(!0);if(Lo(),U=t,il.current=r,K!==null)throw Error(k(261));return b=null,ne=0,Z}function pp(){for(;K!==null;)Ic(K)}function mp(){for(;K!==null&&!$f();)Ic(K)}function Ic(e){var n=Lc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?Tc(e):K=n,Go.current=null}function Tc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=up(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,K=null;return}}else if(t=op(t,n,ve),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);Z===0&&(Z=5)}function Nn(e,n,t){var r=j,l=Ne.transition;try{Ne.transition=null,j=1,hp(e,n,t,r)}finally{Ne.transition=l,j=r}return null}function hp(e,n,t,r){do rt();while(ln!==null);if(U&6)throw Error(k(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Xf(e,i),e===b&&(K=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,Rc(Wr,function(){return rt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var o=j;j=1;var u=U;U|=4,Go.current=null,ap(e,t),Cc(t,e),jd(Ri),Hr=!!Li,Ri=Li=null,e.current=t,cp(t),Bf(),U=u,j=o,Ne.transition=i}else e.current=t;if(_r&&(_r=!1,ln=e,ul=l),i=e.pendingLanes,i===0&&(dn=null),Wf(t.stateNode),he(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(ol)throw ol=!1,e=qi,qi=null,e;return ul&1&&e.tag!==0&&rt(),i=e.pendingLanes,i&1?e===bi?Dt++:(Dt=0,bi=e):Dt=0,kn(),null}function rt(){if(ln!==null){var e=sa(ul),n=Ne.transition,t=j;try{if(Ne.transition=null,j=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,ul=0,U&6)throw Error(k(331));var l=U;for(U|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(C=a;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:jt(8,m,i)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var h=m.sibling,g=m.return;if(kc(m),m===a){C=null;break}if(h!==null){h.return=g,C=h;break}C=g}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:jt(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){o=C;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,C=d;else e:for(o=c;C!==null;){if(u=C,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:El(9,u)}}catch(S){W(u,u.return,S)}if(u===o){C=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,C=v;break e}C=u.return}}if(U=l,kn(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{j=t,Ne.transition=n}}return!1}function cs(e,n,t){n=at(t,n),n=ac(e,n,1),e=fn(e,n,1),n=se(),e!==null&&(lr(e,1,n),he(e,n))}function W(e,n,t){if(e.tag===3)cs(e,e,t);else for(;n!==null;){if(n.tag===3){cs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=at(t,e),e=cc(n,e,1),n=fn(n,e,1),e=se(),n!==null&&(lr(n,1,e),he(n,e));break}}n=n.return}}function vp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(Z===4||Z===3&&(ne&130023424)===ne&&500>Q()-Qo?Tn(e,0):Ho|=t),he(e,n)}function zc(e,n){n===0&&(e.mode&1?(n=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):n=1);var t=se();e=Xe(e,n),e!==null&&(lr(e,n,t),he(e,t))}function gp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),zc(e,t)}function yp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),zc(e,t)}var Lc;Lc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,ip(e,n,t);de=!!(e.flags&131072)}else de=!1,$&&n.flags&1048576&&Ua(n,qr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Mr(e,n),e=n.pendingProps;var l=it(n,oe.current);tt(n,t),l=$o(null,n,r,e,l,t);var i=Bo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(i=!0,Zr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Uo(n),l.updater=xl,n.stateNode=l,l._reactInternals=n,Vi(n,r,e,t),n=Gi(null,n,r,!0,i,t)):(n.tag=0,$&&i&&Po(n),ue(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Mr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=kp(r),e=ze(r,e),l){case 0:n=Wi(null,n,r,e,t);break e;case 1:n=es(null,n,r,e,t);break e;case 11:n=qu(null,n,r,e,t);break e;case 14:n=bu(null,n,r,ze(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Wi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),es(e,n,r,l,t);case 3:e:{if(mc(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,l=i.element,Fa(e,n),nl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=at(Error(k(423)),n),n=ns(e,n,r,t,l);break e}else if(r!==l){l=at(Error(k(424)),n),n=ns(e,n,r,t,l);break e}else for(ge=cn(n.stateNode.containerInfo.firstChild),ye=n,$=!0,Re=null,t=Aa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),r===l){n=Ze(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return Wa(n),e===null&&Fi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Oi(r,l)?o=null:i!==null&&Oi(r,i)&&(n.flags|=32),pc(e,n),ue(e,n,o,t),n.child;case 6:return e===null&&Fi(n),null;case 13:return hc(e,n,t);case 4:return jo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ut(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),qu(e,n,r,l,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,M(br,r._currentValue),r._currentValue=o,i!==null)if(je(i.value,o)){if(i.children===l.children&&!pe.current){n=Ze(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Qe(-1,t&-t),s.tag=2;var a=i.updateQueue;if(a!==null){a=a.shared;var m=a.pending;m===null?s.next=s:(s.next=m.next,m.next=s),a.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),$i(i.return,t,n),u.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),$i(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,tt(n,t),l=_e(l),r=r(l),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,l=ze(r,n.pendingProps),l=ze(r.type,l),bu(e,n,r,l,t);case 15:return fc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Mr(e,n),n.tag=1,me(r)?(e=!0,Zr(n)):e=!1,tt(n,t),Ba(n,r,l),Vi(n,r,l,t),Gi(null,n,r,!0,e,t);case 19:return vc(e,n,t);case 22:return dc(e,n,t)}throw Error(k(156,n.tag))};function Rc(e,n){return la(e,n)}function wp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new wp(e,n,t,r)}function Zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return Zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ho)return 11;if(e===vo)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $r(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Zo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vn:return zn(t.children,l,i,n);case mo:o=8,l|=8;break;case fi:return e=Ee(12,t,n,l|2),e.elementType=fi,e.lanes=i,e;case di:return e=Ee(13,t,n,l),e.elementType=di,e.lanes=i,e;case pi:return e=Ee(19,t,n,l),e.elementType=pi,e.lanes=i,e;case Vs:return _l(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $s:o=10;break e;case Bs:o=9;break e;case ho:o=11;break e;case vo:o=14;break e;case be:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ee(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function zn(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function _l(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=Vs,e.lanes=t,e.stateNode={isHidden:!1},e}function oi(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function ui(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Sp(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Jo(e,n,t,r,l,i,o,u,s){return e=new Sp(e,n,t,u,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ee(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uo(i),e}function xp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Oc(e){if(!e)return gn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(me(t))return Ra(e,t,n)}return n}function Uc(e,n,t,r,l,i,o,u,s){return e=Jo(t,r,!0,e,l,i,o,u,s),e.context=Oc(null),t=e.current,r=se(),l=pn(t),i=Qe(r,l),i.callback=n??null,fn(t,i,l),e.current.lanes=l,lr(e,l,r),he(e,r),e}function Pl(e,n,t,r){var l=n.current,i=se(),o=pn(l);return t=Oc(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=fn(l,n,o),e!==null&&(Ue(e,l,o,i),Or(e,l,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function qo(e,n){fs(e,n),(e=e.alternate)&&fs(e,n)}function Cp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function bo(e){this._internalRoot=e}Il.prototype.render=bo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Pl(e,n,null,null)};Il.prototype.unmount=bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jn(function(){Pl(null,e,null,null)}),n[Ye]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var n=fa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&pa(e)}};function eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function Ep(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var a=al(o);i.call(a)}}var o=Uc(n,r,e,0,null,!1,!1,"",ds);return e._reactRootContainer=o,e[Ye]=o.current,Qt(e.nodeType===8?e.parentNode:e),jn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var a=al(s);u.call(a)}}var s=Jo(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=s,e[Ye]=s.current,Qt(e.nodeType===8?e.parentNode:e),jn(function(){Pl(n,s,t,r)}),s}function zl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=al(o);u.call(s)}}Pl(n,o,e,l)}else o=Ep(t,n,e,l,r);return al(o)}aa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pt(n.pendingLanes);t!==0&&(wo(n,t|1),he(n,Q()),!(U&6)&&(ct=Q()+500,kn()))}break;case 13:jn(function(){var r=Xe(e,1);if(r!==null){var l=se();Ue(r,e,1,l)}}),qo(e,1)}};ko=function(e){if(e.tag===13){var n=Xe(e,134217728);if(n!==null){var t=se();Ue(n,e,134217728,t)}qo(e,134217728)}};ca=function(e){if(e.tag===13){var n=pn(e),t=Xe(e,n);if(t!==null){var r=se();Ue(t,e,n,r)}qo(e,n)}};fa=function(){return j};da=function(e,n){var t=j;try{return j=e,n()}finally{j=t}};Ci=function(e,n,t){switch(n){case"input":if(vi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=kl(r);if(!l)throw Error(k(90));Ws(r),vi(r,l)}}}break;case"textarea":Hs(e,t);break;case"select":n=t.value,n!=null&&qn(e,!!t.multiple,n,!1)}};qs=Ko;bs=jn;var Np={usingClientEntryPoint:!1,Events:[or,Hn,kl,Zs,Js,Ko]},Et={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_p={bundleType:Et.bundleType,version:Et.version,rendererPackageName:Et.rendererPackageName,rendererConfig:Et.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ta(e),e===null?null:e.stateNode},findFiberByHostInstance:Et.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{vl=Pr.inject(_p),$e=Pr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eu(n))throw Error(k(200));return xp(e,n,null,t)};ke.createRoot=function(e,n){if(!eu(e))throw Error(k(299));var t=!1,r="",l=jc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Jo(e,1,!1,null,null,t,!1,r,l),e[Ye]=n.current,Qt(e.nodeType===8?e.parentNode:e),new bo(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=ta(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return jn(e)};ke.hydrate=function(e,n,t){if(!Tl(n))throw Error(k(200));return zl(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!eu(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=jc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Uc(n,null,e,1,t??null,l,!1,i,o),e[Ye]=n.current,Qt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Il(n)};ke.render=function(e,n,t){if(!Tl(n))throw Error(k(200));return zl(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(k(40));return e._reactRootContainer?(jn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=Ko;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Tl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return zl(e,n,t,!1,r)};ke.version="18.2.0-next-9e3b772b8-20220608";function Mc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mc)}catch(e){console.error(e)}}Mc(),Us.exports=ke;var Pp=Us.exports,ps=Pp;ai.createRoot=ps.createRoot,ai.hydrateRoot=ps.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},nr.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const ms="popstate";function Ip(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:o,hash:u}=r.location;return to("",{pathname:i,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:cl(l)}return zp(n,t,null,e)}function Y(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function nu(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Tp(){return Math.random().toString(36).substr(2,8)}function hs(e,n){return{usr:e.state,key:e.key,idx:n}}function to(e,n,t,r){return t===void 0&&(t=null),nr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?mt(n):n,{state:t,key:n&&n.key||r||Tp()})}function cl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function zp(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,u=on.Pop,s=null,a=m();a==null&&(a=0,o.replaceState(nr({},o.state,{idx:a}),""));function m(){return(o.state||{idx:null}).idx}function p(){u=on.Pop;let x=m(),f=x==null?null:x-a;a=x,s&&s({action:u,location:w.location,delta:f})}function h(x,f){u=on.Push;let c=to(w.location,x,f);t&&t(c,x),a=m()+1;let d=hs(c,a),v=w.createHref(c);try{o.pushState(d,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(v)}i&&s&&s({action:u,location:w.location,delta:1})}function g(x,f){u=on.Replace;let c=to(w.location,x,f);t&&t(c,x),a=m();let d=hs(c,a),v=w.createHref(c);o.replaceState(d,"",v),i&&s&&s({action:u,location:w.location,delta:0})}function y(x){let f=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof x=="string"?x:cl(x);return Y(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return u},get location(){return e(l,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(ms,p),s=x,()=>{l.removeEventListener(ms,p),s=null}},createHref(x){return n(l,x)},createURL:y,encodeLocation(x){let f=y(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:g,go(x){return o.go(x)}};return w}var vs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vs||(vs={}));function Lp(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?mt(n):n,l=tu(r.pathname||"/",t);if(l==null)return null;let i=Dc(e);Rp(i);let o=null;for(let u=0;o==null&&u<i.length;++u)o=Vp(i[u],Gp(l));return o}function Dc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,o,u)=>{let s={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let a=hn([r,s.relativePath]),m=t.concat(s);i.children&&i.children.length>0&&(Y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),Dc(i.children,n,m,a)),!(i.path==null&&!i.index)&&n.push({path:a,score:$p(a,i.index),routesMeta:m})};return e.forEach((i,o)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))l(i,o);else for(let s of Fc(i.path))l(i,o,s)}),n}function Fc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Fc(r.join("/")),u=[];return u.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&u.push(...o),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function Rp(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Bp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Op=/^:[\w-]+$/,Up=3,jp=2,Mp=1,Dp=10,Fp=-2,gs=e=>e==="*";function $p(e,n){let t=e.split("/"),r=t.length;return t.some(gs)&&(r+=Fp),n&&(r+=jp),t.filter(l=>!gs(l)).reduce((l,i)=>l+(Op.test(i)?Up:i===""?Mp:Dp),r)}function Bp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function Vp(e,n){let{routesMeta:t}=e,r={},l="/",i=[];for(let o=0;o<t.length;++o){let u=t[o],s=o===t.length-1,a=l==="/"?n:n.slice(l.length)||"/",m=Ap({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},a);if(!m)return null;Object.assign(r,m.params);let p=u.route;i.push({params:r,pathname:hn([l,m.pathname]),pathnameBase:Xp(hn([l,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(l=hn([l,m.pathnameBase]))}return i}function Ap(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Wp(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((a,m,p)=>{let{paramName:h,isOptional:g}=m;if(h==="*"){let w=u[p]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=u[p];return g&&!y?a[h]=void 0:a[h]=Hp(y||"",h),a},{}),pathname:i,pathnameBase:o,pattern:e}}function Wp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),nu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,s)=>(r.push({paramName:u,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function Gp(e){try{return decodeURI(e)}catch(n){return nu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Hp(e,n){try{return decodeURIComponent(e)}catch(t){return nu(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function tu(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Qp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?mt(e):e;return{pathname:t?t.startsWith("/")?t:Kp(t,n):n,search:Zp(r),hash:Jp(l)}}function Kp(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function si(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function $c(e,n){let t=Yp(e);return n?t.map((r,l)=>l===e.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Bc(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=mt(e):(l=nr({},e),Y(!l.pathname||!l.pathname.includes("?"),si("?","pathname","search",l)),Y(!l.pathname||!l.pathname.includes("#"),si("#","pathname","hash",l)),Y(!l.search||!l.search.includes("#"),si("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,u;if(o==null)u=t;else{let p=n.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;l.pathname=h.join("/")}u=p>=0?n[p]:"/"}let s=Qp(l,u),a=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(a||m)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Xp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vc=["post","put","patch","delete"];new Set(Vc);const bp=["get",...Vc];new Set(bp);/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tr.apply(this,arguments)}const ru=N.createContext(null),em=N.createContext(null),Fn=N.createContext(null),Ll=N.createContext(null),Sn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Ac=N.createContext(null);function nm(e,n){let{relative:t}=n===void 0?{}:n;sr()||Y(!1);let{basename:r,navigator:l}=N.useContext(Fn),{hash:i,pathname:o,search:u}=Gc(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:hn([r,o])),l.createHref({pathname:s,search:u,hash:i})}function sr(){return N.useContext(Ll)!=null}function Rl(){return sr()||Y(!1),N.useContext(Ll).location}function Wc(e){N.useContext(Fn).static||N.useLayoutEffect(e)}function tm(){let{isDataRoute:e}=N.useContext(Sn);return e?vm():rm()}function rm(){sr()||Y(!1);let e=N.useContext(ru),{basename:n,future:t,navigator:r}=N.useContext(Fn),{matches:l}=N.useContext(Sn),{pathname:i}=Rl(),o=JSON.stringify($c(l,t.v7_relativeSplatPath)),u=N.useRef(!1);return Wc(()=>{u.current=!0}),N.useCallback(function(a,m){if(m===void 0&&(m={}),!u.current)return;if(typeof a=="number"){r.go(a);return}let p=Bc(a,JSON.parse(o),i,m.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:hn([n,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[n,r,o,i,e])}function lm(){let{matches:e}=N.useContext(Sn),n=e[e.length-1];return n?n.params:{}}function Gc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=N.useContext(Fn),{matches:l}=N.useContext(Sn),{pathname:i}=Rl(),o=JSON.stringify($c(l,r.v7_relativeSplatPath));return N.useMemo(()=>Bc(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function im(e,n){return om(e,n)}function om(e,n,t,r){sr()||Y(!1);let{navigator:l}=N.useContext(Fn),{matches:i}=N.useContext(Sn),o=i[i.length-1],u=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let a=Rl(),m;if(n){var p;let x=typeof n=="string"?mt(n):n;s==="/"||(p=x.pathname)!=null&&p.startsWith(s)||Y(!1),m=x}else m=a;let h=m.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",y=Lp(e,{pathname:g}),w=fm(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:hn([s,l.encodeLocation?l.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:hn([s,l.encodeLocation?l.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,t,r);return n&&w?N.createElement(Ll.Provider,{value:{location:tr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:on.Pop}},w):w}function um(){let e=hm(),n=qp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),t?N.createElement("pre",{style:l},t):null,null)}const sm=N.createElement(um,null);class am extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?N.createElement(Sn.Provider,{value:this.props.routeContext},N.createElement(Ac.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cm(e){let{routeContext:n,match:t,children:r}=e,l=N.useContext(ru);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(Sn.Provider,{value:n},r)}function fm(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if((i=t)!=null&&i.errors)e=t.matches;else return null}let o=e,u=(l=t)==null?void 0:l.errors;if(u!=null){let m=o.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id]));m>=0||Y(!1),o=o.slice(0,Math.min(o.length,m+1))}let s=!1,a=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(a=m),p.route.id){let{loaderData:h,errors:g}=t,y=p.route.loader&&h[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||y){s=!0,a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}return o.reduceRight((m,p,h)=>{let g,y=!1,w=null,x=null;t&&(g=u&&p.route.id?u[p.route.id]:void 0,w=p.route.errorElement||sm,s&&(a<0&&h===0?(gm("route-fallback",!1),y=!0,x=null):a===h&&(y=!0,x=p.route.hydrateFallbackElement||null)));let f=n.concat(o.slice(0,h+1)),c=()=>{let d;return g?d=w:y?d=x:p.route.Component?d=N.createElement(p.route.Component,null):p.route.element?d=p.route.element:d=m,N.createElement(cm,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:t!=null},children:d})};return t&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?N.createElement(am,{location:t.location,revalidation:t.revalidation,component:w,error:g,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var Hc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hc||{}),fl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fl||{});function dm(e){let n=N.useContext(ru);return n||Y(!1),n}function pm(e){let n=N.useContext(em);return n||Y(!1),n}function mm(e){let n=N.useContext(Sn);return n||Y(!1),n}function Qc(e){let n=mm(),t=n.matches[n.matches.length-1];return t.route.id||Y(!1),t.route.id}function hm(){var e;let n=N.useContext(Ac),t=pm(fl.UseRouteError),r=Qc(fl.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function vm(){let{router:e}=dm(Hc.UseNavigateStable),n=Qc(fl.UseNavigateStable),t=N.useRef(!1);return Wc(()=>{t.current=!0}),N.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,tr({fromRouteId:n},i)))},[e,n])}const ys={};function gm(e,n,t){!n&&!ys[e]&&(ys[e]=!0)}function ro(e){Y(!1)}function ym(e){let{basename:n="/",children:t=null,location:r,navigationType:l=on.Pop,navigator:i,static:o=!1,future:u}=e;sr()&&Y(!1);let s=n.replace(/^\/*/,"/"),a=N.useMemo(()=>({basename:s,navigator:i,static:o,future:tr({v7_relativeSplatPath:!1},u)}),[s,u,i,o]);typeof r=="string"&&(r=mt(r));let{pathname:m="/",search:p="",hash:h="",state:g=null,key:y="default"}=r,w=N.useMemo(()=>{let x=tu(m,s);return x==null?null:{location:{pathname:x,search:p,hash:h,state:g,key:y},navigationType:l}},[s,m,p,h,g,y,l]);return w==null?null:N.createElement(Fn.Provider,{value:a},N.createElement(Ll.Provider,{children:t,value:w}))}function wm(e){let{children:n,location:t}=e;return im(lo(n),t)}new Promise(()=>{});function lo(e,n){n===void 0&&(n=[]);let t=[];return N.Children.forEach(e,(r,l)=>{if(!N.isValidElement(r))return;let i=[...n,l];if(r.type===N.Fragment){t.push.apply(t,lo(r.props.children,i));return}r.type!==ro&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lo(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},io.apply(this,arguments)}function km(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function Sm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xm(e,n){return e.button===0&&(!n||n==="_self")&&!Sm(e)}const Cm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Em="startTransition",ws=gf[Em];function Nm(e){let{basename:n,children:t,future:r,window:l}=e,i=N.useRef();i.current==null&&(i.current=Ip({window:l,v5Compat:!0}));let o=i.current,[u,s]=N.useState({action:o.action,location:o.location}),{v7_startTransition:a}=r||{},m=N.useCallback(p=>{a&&ws?ws(()=>s(p)):s(p)},[s,a]);return N.useLayoutEffect(()=>o.listen(m),[o,m]),N.createElement(ym,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o,future:r})}const _m=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dl=N.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:u,target:s,to:a,preventScrollReset:m,unstable_viewTransition:p}=n,h=km(n,Cm),{basename:g}=N.useContext(Fn),y,w=!1;if(typeof a=="string"&&Pm.test(a)&&(y=a,_m))try{let d=new URL(window.location.href),v=a.startsWith("//")?new URL(d.protocol+a):new URL(a),S=tu(v.pathname,g);v.origin===d.origin&&S!=null?a=S+v.search+v.hash:w=!0}catch{}let x=nm(a,{relative:l}),f=Im(a,{replace:o,state:u,target:s,preventScrollReset:m,relative:l,unstable_viewTransition:p});function c(d){r&&r(d),d.defaultPrevented||f(d)}return N.createElement("a",io({},h,{href:y||x,onClick:w||i?r:c,ref:t,target:s}))});var ks;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ks||(ks={}));var Ss;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ss||(Ss={}));function Im(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:u}=n===void 0?{}:n,s=tm(),a=Rl(),m=Gc(e,{relative:o});return N.useCallback(p=>{if(xm(p,t)){p.preventDefault();let h=r!==void 0?r:cl(a)===cl(m);s(e,{replace:h,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:u})}},[a,s,m,r,l,t,e,i,o,u])}const Kc=[{Guid:"b5e11d17-252c-4318-bcad-2de82d66762b",Name:"ဘဲဥ ငါးခြောက် အချဉ်ဆီပြန်",Ingredients:`ဘဲဥ ၅ လုံး
ငါးဖောင်ရိုး ၅ ကျပ်သား
ဆီပူလာရင် ဆနွင်းထည့်
ကြက်သွန်နီ ၄ လုံး
ကြက်သွန်ဖြူ အနည်းငယ်
ငရုတ်သီး ထမင်းစားဇွန်း ၁ ဇွန်းခွဲ`,CookingInstructions:`ကြက်သွန်ဖြူ အနည်းငယ်
ငရုတ်သီး ထမင်းစားဇွန်း ၁ ဇွန်းခွဲ ရောထောင်းထားတာထည့် ဆီသတ် နွမ်းပြီး
အနံ့လေးမွှေးလာရင် ခရမ်းချဉ်သီး ၄လုံး ပါးပါးလှီးထည့်ပါ ဆား ဟင်းခပ်မှုန့်ထည့်ပြီး အနှစ်ကျအောင် အဖုံးလေး ခဏပိတ်ချက်ပါ စိမ်းစားငပိထည့်ပါ မွှေပါ ပြီးရင် ငါးခြောက်ထည့်ပါ ရေနွေးထည့်ပါ ငါးခြောက် အိရင် ဘဲဥထည့်ပါ ရေနွေးအနည်းငယ်ထည့်ပါ အဖုံးပိတ်ပါ
ရေခမ်းပြီး ဆီပြန်ရင် ရပါပြီ`,UserType:"001"},{Guid:"97ca83fe-f6ac-49d9-8e0b-20b9e45737d4",Name:"အိန္ဒိယစတိုင်လ် ဘဲဥဟင်း",Ingredients:`ဘဲဥ ၄လုံး
ကုလားပဲခြမ်း ၂ဇွန်း
ကြက်သွန်နီ ၁လုံး
ခရမ်းချဉ်သီး ၂လုံး
ကြက်သွန်ဖြူ ၃မွှာ
ချင်းပါးပါး ၂ချပ်
အိန္ဒိယမဆလာ ၁ဇွန်း tsp
သကြား ၁ဇွန်း tsp
ဆား,ဟင်းခတ် အနည်းငယ်စီ
နနွှင်း အနည်းငယ်
ငရုပ်သီးအစိမ်းမှုန့် အနည်းငယ်
ပျဉ်းတော်သိမ်ရွက် ၁၀ရွက်
ငရုတ်သီးအခြောက်တောင့် ၄တောင့်
နံနံပင် အနည်းငယ်`,CookingInstructions:`-ကုလားပဲကိုနူးအောင်ပြုတ်ထားပါ။
-ကြက်သွန်နီ,ဖြူ,ချင်း ကိုညက်အောင်
ထောင်းထားပါ။
-ဒယ်အိုးထဲမှာ ဆီထည့်၍ နနွင်းအနည်း
ငယ်နှင့်ထောင်းထားသည်များကို ထည့်၍
ဆီသတ်ပါ။
-ကြက်သွန်တွေနွမ်းသွားရင် ငရုပ်သီး
အစိမ်းမှုန့်ထည့်ပါ။
ဆား,ဟင်းခတ်မှုန့်ထည့် ပေးပါ။
အားလူးကိုအတုံးသေးလေးတွေတုံး
ပြီး၃မိနစ်လောက် ဆက်ပြီးဆီသတ်ပါ။
မဆလာထည့်ပါ ။ရေအနည်းငယ်ထည့်
၁မိနစ်လောက်ကြာရင် ခရမ်းချဉ်သီးထည့်
ပါ။ ဘဲဥပြုတ်ပြီးသားများကိုအခွံခွာပြီး အရ
သာဝင်အောင်ဓါးနဲ့မွှန်းပြီးထည့်ပါ။
ပြုတ်ထားသောကုလားပဲခြမ်းများထည့်ပါ။
ဟင်းအနည်းငယ်ပျစ်သွားသည့်အထိ
မီးအေးအေးနဲ့၅မိနစ်လောက်ချက်ပေးပါ။
ပြီလျှင် မန်ကျည်းသီးမှည့်အရည်ကို အနည်းငယ်ခပ်ပြီး အရသာအနေတော်ရင်
ငရုပ်သီးခြောက်ကြော်နဲ့နံနံပင်အုပ်လိုက်
၍သုံးဆောင်ပါ။`,UserType:"001"},{Guid:"d15530c9-24cc-4e6d-af12-0cd794fb097d",Name:`ဘဲဥကြော်အချိုချက်
`,Ingredients:`ဘဲဥ
ကြက်သွန်ဖြူနီ
ခရုဆီ
ကြက်သားမှုန့် 
ပဲငံပြာရည်`,CookingInstructions:"ဘဲဥကိုပြုတ်ပြီး ရေအေးစိမ်၊ ပြီးရင်အခွံခွာ ထက်ပိုင်းခြမ်းထား ပြီး ဆီပူထဲ အကာပိုင်းကိုကြွပ်အောင် ကြော်ထား ။ ကြက်သွန်ဖြူနီပါးပါးလှီးပြီး ဆီသပ် ခရုဆီ ကြက်သားမှုန့် ပဲငံပြာရည်လေးထည့် ဘဲဥထည့် ရေနည်းနည်းလေးဘဲထည့် ခမ်းပြီဆို ဘဲဥအချိုချက်လေးရပြီ။",UserType:"001"},{Guid:"c548bc4b-527b-44f8-910d-b2f97ae29ce2",Name:"ဘဲဥခရမ်းသီးကုလားဟင်း",Ingredients:`ဘဲဥ 
ခရမ်းသီး
မန်ကျည်းမှည့်
ကြက်သွန်နီ / ဖြူ
ငရုတ်သီးအရောင်တင်မှုံ့ 
ငံပြာရည် 
ဆား 
အချိုမှုံ့ `,CookingInstructions:`ဘဲဥ ပြုတ်ထားပါ
ခရမ်းသီးလှီးထားပါ
မန်ကျည်းမှည့် ဖျောထားပါ

ကြက်သွန်နီ / ဖြူ ငရုတ်သီးအရောင်တင်မှုံ့ ဆီသတ်ပါ
ငံပြာရည် ဆား အချိုမှုံ့ ထည့်ပါ
ရေနည်းနည်းထည့်ပါ
ရေဆူလာလျှင် ဘဲဥပြုတ် ထည့်ပါ ( ဘဲဥကိုအရာလေးပေးပြီးထည့်ပါ)
ခရမ်း သီး ထည့်ပါ
ခရမ်းသီးနူးလျှင် မန်ကျည်းမှည့် ဖျော်ထားတာ ထည့်ပါ
မဆလာ ထည့်ပါ။`,UserType:"001"},{Guid:"ff424c10-3211-45fa-b1e8-91636e957af8",Name:"ဝက်သားနှင့်ဘဲဥအချိုချက်",Ingredients:`ဘဲဥ
ဝက်သား
သကြား 
ကြက်သွန်နီ
ခရုဆီ 
ပဲငံပြာရည်အကြည်`,CookingInstructions:`ဘဲဥကို ပြုတ်ပြီး အခွံအရင်ခွာထားပေးပါ ဝက်သားကို အရသာမှုန့် သကြား နှင့် ထောင်းထားပြီးသားဂျင်းတို့ဖြင့်နယ်၍ နှပ်ထားပေးပါ။

ကြက်သွန်နီအခွံနွှာပြီး လေးစိတ် စိတ်ထားပေးပါ။

ဆီသပ်ရန်အတွက် ဆီထည့်ပါ။ ကြက်သွန်နီထည့်ပြီး နွမ်းလာသည်အထိဆီသပ်ပါ။ ကြက်သွန်နွမ်းပြီဆိုမှ နှပ်ထားသောဝက်သားထည့်ပါ။ ခရုဆီ ပဲငံပြာရည်အကြည် အရသာမှုန့်နှင့်ရေအနည်းငယ်ထည့်ပြီး ချက်ပါ။ ပထမတစ်ရေခမ်းမှ ဘဲဥထည့်ပါ။ ဝက်သားကို အနည်းဆုံး၂ရေအထိတည်ပေးဖို့လိုပါတယ် ဒါမှအသားအိအိလေးနဲ့စားလို့ကောင်းမှာပါ။`,UserType:"001"},{Guid:"826796c2-c350-45c6-9fb3-b2d69264b276",Name:"ဆေးဘဲဥ နှင့် ဝက်သားနုပ်နုပ်စင်းကြော်",Ingredients:`ဆေးဘဲဥ
ဝက်သား 
ကြက်သွန်ဖြူ
ဆီ
ပဲငံပြာရည်အကြည်
ခရုဆီ 
ငရုတ်သီးစိမ်း
ပင်စိမ်း`,CookingInstructions:"ဆေးဘဲဥကိုအခွံ့ခွာပြီး အစိတ်လေးများစိတ်ထားပါ။ ဝက်သား ( နှစ်သက်ရာအသားအသုံးပြုနိုင် ) ကိုနုပ်နုပ်စင်းပြီး အရသာမှုန့် ထည့်နယ်ထားပေးပါ။ ကြက်သွန်ဖြူကို ညက်နေအောင်ထောင်းထားပေးပါ။ ဆီသပ်ဖို့အတွက် ဆီထည့်ပါ။ ဆီဆူလာပြီဆိုမှ ထောင်းထားသောကြက်သွန်ဖြူကိုထည့် ဆီသပ်ပါ။ ပြီးနောက် ဝက်သားထည့်ပါ။ ပဲငံပြာရည်အကြည် ခရုဆီ ညှပ်ထားသောငရုတ်သီးစိမ်း ရေအနည်းငယ်ထည့်ပြီး ကြော်ပေးပါ။ ရေခမ်းပြီဆိုမှ ဆေးဘဲဥထည့် ပင်စိမ်းအုပ်ပြီး ၃မိနစ်ခန့် ဆက်လက်ပြီး မီးအပူပေးထားပါ။ ၃မိနစ်ပြည့်ပြီဆိုရင်တော့ မီးကိုပိတ်ပြီး အရသာရှိသော ပုံစံအသစ်ဟင်းလေးဖြစ်တဲ့ ဆေးဘဲဥနှင့်ဝက်သားနုပ်နုပ်စင်းကြော်လေးရပါပြီ။",UserType:"001"},{Guid:"28ee596f-8dd8-42ef-99f3-de75f4a20f25",Name:"ဆေးဘဲဥ",Ingredients:`ပြာ၊ ထုံး၊ ဆား၊ ရေနွေးကြမ်း
စပါးခွံ 
မြေကြီး
ဆေးဘဲဥ`,CookingInstructions:`ပြာ၊ ထုံး၊ ဆား၊ ရေနွေးကြမ်း
အရည်၊ စပါးခွံ နှင့် မြေကြီးတို့ အချိုးကျပေါင်းစပ်ပြီး ၄၅ရက်
ထားခြင်းဖြင့် စားသုံးရန်သင့်သောဆေးဘဲဥကိုရရှိမှာဖြစ်ပါတယ်။
ထိုဆေးဘဲဥကို နှစ်ပေါင်းရာနှင့်ချီထားခြင်းဖြင့် ပို၍ဆေးဖက်ဝင်သော၊ ခန္ဓာကိုယ်ကာင်းမွန်သောဆေးဘဲဥအဖြစ် ရရှိမည်ဖြစ်ပါတယ်။
ဆေးဘဲဥက တရုတ်လူမျိုးများ၏
ရိုးရာအစားအစာများထဲက တစ်ခုဆို
လည်း မမှားပါဘူး။ ဆေးဘဲဥ လတ်ဆတ်မှုရှိ မရှိကို သိရှိလိုလျှင် မိမိ
လက်ချောင်းလေးနှစ်ချောင်းဖြင့်
ဆေးဘဲဥကို ပုတ်ကြည့်သည့်အခါ တုန်ခါမှုရှိပါက လတ်ဆတ်သည် ဟု ပြောလို့ရပါတယ်။ ယခုအခါ
ဆေးဘဲဥများကို ပြာအစား ဘိလပ်မြေ ကိုပြုပြီး ထုတ်လုပ်လာသည့်
သူများလည်း ရှိပါတယ်။ ဆေးဘဲဥကို နှစ်သက်စွာစားသုံးနေသူများအတွက် လွန်စွာအန္တရာယ်ရှိသည်လို့ ဆိုရမှာ
ဖြစ်ပါတယ်။ ရိုးရိုးဆေးဘဲဥနှင့်
ဘိလပ်မြေဖြင့်ပြုလုပ်ထားသော
ဆေးဘဲဥကို ခွဲခြားနိုင်သည့် နည်း
လမ်းမှာ ဆေးဘဲဥအနှစ်၏ အရောင်ပင်ဖြစ်ပါတယ်။ ပုံမှန်ဆေးဘဲဥအနှစ်မှာ လိမ္မော်ရင့်အရောင်ဖြစ်ပြီး နှစ်ချီထားသောဆေးဘဲဥ၏အနှစ်အရောင်မှာ အမဲရောင်ဖြစ်ကာ
ခန္ဓာကိုယ်အတွက်လည်း ပို၍
ဆေးဖက်ဝင်သော အစားအစာ
တစ်မျိုးလည်းဖြစ်ပါတယ်။ သို့ပေ
မယ့် ယခုခေတ် ဘိလပ်မြေနှင့် ပြုလုပ်သော ဆေးဘဲဥအနှစ်၏အရောင်မှာလည်း အမဲရောင်ဖြစ်နေပါတယ်။ ထိုအခြေနေနှစ်ခုတွင် နှစ်ချီထားသော ဆေးဘဲဥနှင့် ဘိလပ်မြေဖြင့်
ပြုလုပ်သော ဆေးဘဲဥကို ခွဲခြားရန်လည်း အခက်အခဲရှိနေနိုင်ပါတယ်။

ဆေးဘဲဥ၏ ဆေးဖက်ဝင်ပုံ

ဆေးဘဲဥကို စားသုံးခြင်းဖြင့် အဆုတ်ရောဂါ၊ တီဘီရောဂါ၊ ပန်းနာရင်ကြပ် ရောဂါများကို ကာကွယ်နိုင်သလို အသည်းကို အားကောင်းစေပါတယ်။ ခန္ဓာကိုယ်မှာလိုအပ်သော ဗီတာမင် အေ၊ ဘီနှင့် ဘီတွဲလ် (B12) ဓာတ်များကိုလည်း ရရှိစေပါသည်။

အလင်းအိမ်အနေဖြင့်လည်း
ကျန်းမာရေးနှင့် ညီညွတ်ပြီး
ဆေးဖက်ဝင်သောဆေးဘဲဥများကို
စားသုံးသူလက်ဝယ်ရောက်ရှိနိုင်ရန်
အတွက် ကြိုးစားလုပ်ဆောင်လျက်ရှိပါတယ်။

ကျန်းမာသောအစားအစာများကို
စားသုံးခြင်းဖြင့် ပျော်ရွှင်သောဘဝများကို ပိုင်ဆိုင်နိုင်ကြပါစေ။ `,UserType:"001"},{Guid:"0490d767-7225-4957-8d7d-8811797b3a8d",Name:"ကုန်းဘော်ကြီးကြော်",Ingredients:`သကြား - ၂ ဇွန်း (စားပွဲတင်ဇွန်း)
ရှာလကာရည် - ၁ ဇွန်း (စားပွဲတင်ဇွန်း)
ပဲငံပြာရည်အကြည် - ၂ ဇွန်း (စားပွဲတင်ဇွန်း)
ဟင်းချက်အရက် - ၁ ဇွန်း (စားပွဲတင်ဇွန်း)
ခရုဆီ - ၁ ဇွန်း (စားပွဲတင်ဇွန်း)
ပြောင်းကော်မှုန့် - ၁ ဇွန်း (စားပွဲတင်ဇွန်း)
ရေ - အနည်းငယ် `,CookingInstructions:`ရေ - အနည်းငယ် ထည့်ပြီး ဖျော်ထားပေးပါ။
ပဲပြားကို အံစာတုန်း ပုံစံ တကိုက်စာအတုံးလေးတွေ တုံးပေးထားပါ။
ပြီးရင် တရုတ်မဆလာ ထည့်ပြီး နယ်ထားပေးပါ။
ကြက်သွန်ဖြူကို ဓားပြားရိုက်ထားပါ။ ကြက်သွန်နီကို လေးစိတ်စိတ်ပြီး ခွာထားပေးပါ။ ‌ပြောင်းဖူးအသေးနဲ့ ငရုတ်ပွကိုလည်း တကိုက်စာလှီးဖြတ်ထားပေးပါ။ သီဟိုစေ့ရှိရင်လည်း ထည့်လို့ရပါတယ်။ ကြက်သွန်မြိတ်နဲ့ ငရုတ်သီးခြောက်လည်းလိုအပ်ပါတယ်။ 
ပထမဆုံး ပဲပြားတွေကို ဆီနည်းနည်း ထည့်ပြီး ကြွပ်လာတဲ့အထိ ကြော်ပေးပါ။ ပြီးမှ ဇလုံတခုထဲထည့်ထားပါ။
ဓားပြားရိုက်ထားတဲ့ ကြက်သွန်ဖြူနဲ့ ချင်း ကို ဆီသတ်ပေးပါ။ မွှေးလာရင် ကြက်သွန်နီ ထည့်ပြီး ကြည်ပြီး မွှေးလာတဲ့အထိကြော်ပေးပါ။
ငရုတ်သီးခြောက်နဲ့ ကြက်သွန်မြိတ် ထည့်ပြီး ကြော်ပေးပါ။ မွှေးလာပြီဆိုရင် ပြောင်းဖူးသေးသေးနဲ့ ငရုတ်ပွထည့်မယ်။ ရေအနည်းငယ်ထည့်ပြီး အဖုံးလေးပိတ်ထားပါ။ ၂မိနစ်လောက် ချက်ပြီးရင် ပဲပြားတွေထည့်ပြီး မွှေပြီး ချက်ပေးပါ။
ပြီးမှ ကုန်းဘော်ကြီးကြော်ဆော့စ်ကို ထည့်မယ်။`,UserType:"002"},{Guid:"0d4ae808-5d65-4e23-ab7a-7307e1087085",Name:"ရှုးရှဲမုန့်တီလေး",Ingredients:`ပဲပုတ်-၁ချပ် 
ကြက်သွန်နီသေးသေး-၁၀လုံး
ခရမ်းချဉ်သီး-၁လုံး 
ကြက်သွန်ဖြူ-၁၀မွှာ၊
ချင်းလက်တစ်ဆစ်
ငရုတ်သီးစိမ်းလှော်ထောင်း၊
မန်ကျည်းရည်ဖျော်၊
ပဲကတ်ကြော်၊ကြက်သွန်ဖြူကြော်၊
နံနံပင် `,CookingInstructions:`ပဲပုတ်-၁ချပ် မီးကင်ထောင်း၊ကြက်သွန်နီသေးသေး-၁၀လုံး ထက်ခြမ်းခြမ်း(အကြီးလဲရ၊အသေးကပိုချိုပါတယ်)။ခရမ်းချဉ်သီး-၁လုံး လေးစိပ်ခွဲပြီးဆီလဖ္ဘက်စားဇွန်း-၁ဇွန်းလောက်နဲ့ကြာကြာလေးမွှေးနေအောင်ဆီသတ်ပါ။ဆီသတ်တာမွှေးလာလျင်ရေနွေးဆူဆူထည့်ပါ(ရေနို့ဆီဗူး၄လုံး)။ရေပွက်ပွက်ဆူလျင် ကြက်သွန်ဖြူ-၁၀မွှာ၊ချင်းလက်တစ်ဆစ်ထောင်းပြီးထည့်ပါ။ကြက်သွန်ဖြူချင်းနံ့မွှေးလာလျင်အာပူလျာပူရွက်ခြောက်၁၀ရွက်ထည့်ပါ။အာပူလျာပူနူးလျင်ငရုတ်ကောင်းမှုန့်ခပ်ပါ။
မုန့်ပွဲပြင်လျင်
ငရုတ်သီးစိမ်းလှော်ထောင်း၊မန်ကျည်းရည်ဖျော်၊
ပဲကတ်ကြော်၊ကြက်သွန်ဖြူကြော်(လဖ္ဘက်သုတ်စားတဲ့အကြော်ကြိုက်လျင်ထည့်)၊နံနံပင် ကိုကြိုက်နှစ်သက်သလောက်ထည့်ပြင်ပါ။`,UserType:"002"},{Guid:"7a195205-ed4f-4fb2-a060-06880b728bc8",Name:"ဘဲဥကိုအနှစ်များများလေးနဲ့ အထဲကအနှစ်မထွက်အောင်ချက်နည်း",Ingredients:`ဘဲဥ ၅လုံး
ကြက်သွန်နီ...၄လံုး
ကြက်သွန်ဖြူ...၅မွှာ
ငရုပ် ပု...၆တောင့်ခန့်
မျှင်ငါးပိ..အနည်းငယ်
..အနည်းငယ်
မန်ကျည်းရည်..ပုဂံလုံးသေး..၁လုံး
ဆီ..၅ကျပ်သား
မဆလာ..အနည်းငယ်
ရေသန့်..ငါးကြင်းဖန်ခွက်၁ခွက်=200ml
ဆား..ထမင်းစားဇွန်းဝက်
ဟင်းခတ်မှူန့်.. လက်ဖက်ဇွန်း ၂ဇွန်း`,CookingInstructions:`ပထမဦးစွာ ဘဲဥကို ဆားအနည်ထည့်၍မီနစ်၂၀ခန့်ရေပွက်ပွက်ဆူသည့်အထဲတင်ပြုတ်ပါ။
ကျက်ပါကအအေးခံ၍ ၂ခြမ်း ခြမ်းထားပါ။
ငရုပ်ပွကိုရေစိမ်ပြီး ကြက်သွန်ဖြူနီဖြင့်ညှက်အောင်ရောထောင်းထားပါ။
ဒယ်အိုးထဲဆီထည့် ငရုပ်အနှစ်ထောင်းထားတာထည့်ဆီသတ်ပါ..မဆလာ\\မျှင်ငါးပိ\\ဆား\\ဟင်းခတ်မှူန့် ထည့်ပါ.ပြီးပါကမန်ကျည်းရည်ထည့်ပါ..အားလုံးသမအောင်ရောမွှေပြီးနောက်ဆုံး..ရေသန့်ထည့်ကာပွက်အောင်ထားပြီးမှ ခြမ်းထားသောဘဲဥများကိုမှောက်လျှက်ထည့်ပေးပါ ပြီးပါကအဖုံးအုပ်ပါ။၅မီနစ်ခန့်ထားပြီးမီးမိတ်သုံးဆောင်နိုင်ပါပြီ`,UserType:"001"},{Guid:"5c86faf9-6c8e-4787-8c21-ed0f2554a294",Name:"ဘဲဥကို အနှစ်များများလေးနဲ့ အချိုချက်ရအောင်\r",Ingredients:`ဘဲဥ
ဆား
ရေအေး
ကြက်သွန်နီ
ဆီ
ပဲငံပြာရည်
ကြက်သားမှုန့်
ခရုဆီ `,CookingInstructions:"ဘဲဥကို ဆားထည့်ပြီးပြုတ် ရရင်ရေအေးစိမ် ပြီးမှအခွံ့ခွာ ၂ခြမ်းခြမ်းထား ကြက်သွန်နီခပ်များများပါးပါးလှီးထား ဆီထည့် ပြီး ကြက်သွန်ဆီသပ် နွမ်းပြီဆို ခရုဆီ ပဲငံပြာရည် ကြက်သားမှုန့်ထည့်မွှေ နောက်မှ ဘဲဥခြမ်း အနှစ်ဘက်ကိုမှောက်ထည့် ရေအနည်းငယ်ထည့် အုပ်ထား ရေခမ်းပြီး အနှစ်ကျပြီဆို ရပြီ။",UserType:"001"},{Guid:"624d29ff-e153-4b11-9dcf-d7182b04f279",Name:"ဘဲဥပေါင်း",Ingredients:`ဘဲဥ
ရေ
ထန်းလျက်အညို
ပဲငံပြာရည် 
ဂျင်း
ကြက်သွန်ဖြူ
တရုတ်မဆလာ
ဆား`,CookingInstructions:`ထမဆုံး ဘဲဥကို ပြုတ်ပီး ခွာထားပါ
ရေအနည်းငယ်ထဲကို ထန်းလျက်အညို
အတော်သင့်ထည့်ပီး အရည်ဖြစ်တဲ့ထိ
မွှေရပါမယ် ရပီဆိုရင် ခွာထားတဲ့ဘဲဥထည့်
ပဲငံပြာရည် အသင့်တင့်ထည့်ပီး တရုတ်မဆလာ
ကြိုက်ရင်ထည့်လို့ရပါတယ် ပိုးကမကြိုက်တော့
သူ့အစားဂျင်းနဲ့ကြက်သွန်ဖြူ ကိုထောင်းထည့်ပီး
ဆားအနည်းငယ် ထည့်ပီး တည်ထားပါ။
အရည်နည်းလာပီဆို
ရေတခွက်ထပ်ထည့်ပီး ဆက်တည်ထားမယ်ဆိုရင်
တဖြည်းဖြည်းနဲ့မှ ဘဲဥထဲအရသာဝင်ပီး ဘဲဥပေါင်း
ဖြစ်လာပါပီ။`,UserType:"001"},{Guid:"2f14590f-d1a2-46a3-9d79-99aea1ec2db0",Name:"ဆားဘဲဥ နှင့် ဆားကြက်ဥ(salted egg)",Ingredients:`ဘဲဥ (၁၀)လုံး
ကြက်ဥ (၁၀)လုံး
ရေ( ၄)ခွက်
ဆား (၁)ခွက်`,CookingInstructions:`ပထမအဦးဆုံး ဘဲဥ (၁၀)လုံးကို သန့်ရှင်စင်ကြယ်အောင် ရေဆေးကြောပါ။ဆေးကြောပြီးသား ဘဲဥများကို ဝင်ဆံမည့် ကော်ဗူး၊ဖန်ဗူးထဲသို့ထည့်ထားပါ။

အချိုးအစားက ဘဲဥ (၁၀)လုံးအတွက် ဆား မတ်ခွက်ဖြင့် (၁)ခွက်...ရေက မတ်ခွက်ဖြင့် (၄)ခွက် ဖြစ်ပါတယ်။

ရေ( ၄)ခွက် ဆား (၁)ခွက်ကို မီးဖိုပေါ်၌ ဆားများအရည်ဖျော်တဲ့အထိ့ ပွက်ပွက်ဆူအောင် တည်ပေးရပါမယ်။

ကျိုးချက်ထားသော ဆားရည်ကို အေးသွားသည်အထိ့ ထားရှိပြီး ဆားရည်များအေးသွားပါက ဘဲဥထည့်ထားသော ဗူးထဲသို့အပြည့်၊ဘဲဥများဆားရည်မြူပ်သည်အထိ့ အပြည့်ဖြည့်ပါ။

ဆားရည်များထည့်ပြီးပါက ဘဲဥများရေပေါ်၌မပေါ်နိုင်အောင်တစ်ခုခုဖြင့်ဖိ့ထားပေးပြီးတော့ ဗူအဖုံးကိုလေလုံအောင် ကြပ်ထားပြီး(၄၅)ရက်ကြာအောင် စိမ်ထားလိုက်ပါက ၄၅ရက်အလွန်မှာ ဆားရည်စိမ်ထားသောဘဲဥများကိုဆယ်ယူ၍ မိမိတို့ကြိုက်နှစ်သက်သလို ချက်ပြုပ်စားသုံးနိုင်ပါသည်။

ဆားဘဲဥဟာ အငံအရာသာရှိပြီး သူ့ကိုစားသုံးပေးခြင်းဖြင့် အစာချေဖျက်မူအားကောင်းခြင်း၊လေလည်ခြင်း၊မျက်စိအားကောင်းခြင်း၊အသားရည်စိုပြေခြင်းနှင့်အတူ အခြားသောအကျိုးကျေးဇူးတွေကိုလည်း ရရှိလာမှာဖြစ်ပါတယ်။

သွေးတိုးရောဂါသမားများ စားသုံးရန် မသင့်ပါ။ဒီအစားအစာဟာ ထိုင်း၊တရုတ်၊မလေးရှားနှင့် အင်ဒိုနီးရှားနိုင်ငံများမှာ လူကြိုက်များကြပါတယ်။`,UserType:"001"},{Guid:"027085e0-f37c-4a45-a6d4-be198c6a7058",Name:"ဘဲဥ/ကြက်ဥ ပဲငံပြာရည်စိမ်",Ingredients:`ဘဲဥ/ကြက်ဥ.
ကြက်သွန်မြိတ်
ကြက်သွန်ဖြူ 
ငရုတ်သီးစိမ်း
နှမ်း
ပဲငံပြာရည်အကြည်.`,CookingInstructions:`ဘဲဥ/ကြက်ဥ... ရေနွေးပွက်ပွက်ဆူထဲ...ရှာလကာရည်...2tsp...ဆား..1tsp..ထည့်ပြီး...၆မိနစ်ဆို အကာကျက်ဖြစ်နေတော့ ၈မိနစ်လောက်ပြုပ်တယ်
ပြုတ်ပြီးရင်...ရေခဲရေထဲ ထည့်စိမ်ပြီး....နောက်မှ အခွံခွာတယ်...

ကြက်သွန်မြိတ်... သေးရင် ၂စည်း...ကြီးရင် ၄ပင်...ခပ်နုတ်နုတ်လှီး
ကြက်သွန်ဖြူ ၄မွှာ ဓားပြားရိုက်ပြီး...နုတ်နုတ်စင်း
ငရုတ်သီးစိမ်း....ကြိုက်သလောက်....သေးသေးလှီးထည့်
နှမ်း...၁ဇွန်း...
ပဲငံပြာရည်အကြည်... ၁ခွက် (အချဉ်ရည်တွေထည့်တဲ့ ပန်းကန်အရွယ်)
ရေ...၁ခွက် 
သကြားရည်..or..ပျားရည် ကြိုက်ရာ ၁ခွက်ထည့်တာကို...၂မျိုးရောပြီး...ရေနည်းနည်းနဲ့ဖျော်ထည့်လိုက်တယ်...
ပြီးရင် အဲ့အဆာပလာတွေအကုန်ရောထည့်ပြီးမွှေ...စိမ်မဲ့ဗူးထဲ...ဥတွေစီထည့်ပြီး...အရည်တွေအကုန်လောင်းချပြီး...ရေခဲသေတ္တာအောက်ခန်းမှာ...စိမ်ထား....အချိန်၅နာရီကြာရင် အကာအရောင်ညိုလာပါပြီ... ရေခဲသေတ္တာထဲမှာဆိုရင် ၅ရက်လောက်ထိ...ထားလို့ရတယ်လို့ ရေးထားတာတွေ့တယ်...
လုပ်ရလွယ်ပြီး... စားလို့ကောင်းတယ်...အရသာလေးက တမျိုးလေး`,UserType:"001"},{Guid:"d5085ffb-462b-4a2d-8ba9-ad43fe77c039",Name:"ဘဲဥ ချဉ်ရည် ",Ingredients:`ဘဲဥ ၅လုံး
အားလူး ၃လုံး
ရုံပတီ ၅တောင့်
ခရမ်းချဉ်သီး ၂လုံး(ပါးပါးလှီးထားပါ)
ကြက်သွန်နီ ၂လုံး( ။ )
ကြက်သွန်ဖြူ ၄မွှာ(နုတ်၂စင်းထားပါ)
မကျည်းသီး အနည်းငယ်
မဆလာ ။
ငံပြာရည် ။
ကြက်သားမှုန့် ။
ပျဉ်တော်သိမ် ။
ငရုတ်သီးစိမ်း ။
နံနံပင် ။
နနွင်း ။
ငရုတ်ပု ။`,CookingInstructions:`-ဘဲဥကို ပြုတ် ရရင် အခွံခွာပြီး ဓားနှင့်ပတ်ပတ်လည် မွှန်းပါ။
-အားလူးကို အခွံခွာ ရေဆေးပြီး အပေါ်တင်းရုံ ကြော်ထားပါ။
မန်ကျည်းသီးကိုရေဆေးရေစိမ်ထားပါ။ရုံပတီးသီးကို ရေဆေး
ထားပါ။

### ဆီအနည်းငယ်မှာ နနွင်း ကြက်သွန်နီ ကြက်သွန်ဖြူ ကို
ငရုတ်ပုထောင်းနှင့် ဆီသတ်ပြီး မဆလာ ပျဉ်တော်သိမ် ထည့်
ပါ။ခရမ်းချဉ်သီးထည့်ပါ။ရေအနည်းငယ်ထည့်၍ ကြေအောက်
မွှေပါ။ရလျှင် ဘဲဥ အားလူး ထည့်ပါ။ငံပြာရည် ကြက်သားမှုန့်
ထည့်ပါ။ရေထည့်၍တည်ထားပါ။ဆူလာပြီးအားလူးနူးလျှင်
မန်းကျည်းရည်ထည့်ပါ၊အရသာ စိတ်ကြိုက်ပြင်ပါ။ရုံပတီးသီး
ညှပ်ထည့်ပါ။ခဏနေလျှင် ငရုတ်သီးစိမ်း နံနံပင်ထည့်၍ ရပါ
ပြီ`,UserType:"001"},{Guid:"dd873eea-ac41-4053-98c7-b5e593fb5f2f",Name:"ကြက်ဥဆူးပုတ်ကြော်",Ingredients:`ကွကျဥ - ၁ လုံး
ဆား - အနည်းငယ်
ဟင်းခတ်မှုန့် - အနည်းငယ်
ဆူးပုတ်အညွန့်
ဆီ - အနည်းငယ်`,CookingInstructions:`ကြက်ဥကို ဖောက်ပြီး ဆား ၊ ဟင်းခတ်မှုန့်အနည်းငယ်ထည့် နာနာခေါက်ထားပါ ။
ဆူးပုတ်အညွန့်လေးများသင် ရေစင်စင်ဆေးထားပါ ။
အိုးထဲ ဆီထည့် အပူပေးပါ ။ ဆီပူလာလျှင် မီးပိတ်ပြီး ပန်းကန်တခုထဲသို့ ဆီများသွန်ထားပါ ။
ကြက်ဥခေါက်ထားသည်များထည့် အိုးကိုလှုပ်ကာ ကြက်ဥကို အိုးတပြင်လုံးပြန့်အောင်လုပ်ပါ ။
အပေါ်မှ ဆူးပုတ်ညွန့်များအုပ်ပါ ။ မီးအေးအေးနှင့် ထားပါ ။
ကြက်ဥအောက်ခံတင်းလာလျှင် ယောင်းမအပြားနှင့် ဖြည်းဖြည်းချင်း ခေါက်လိပ်ပါ ။
မီးအေးအေးဖြင့် ကြက်ဥမျက်နှာပြင် ၂ ဖက်လုံး ဖိပေးပါ ။
မီးဖိုပေါ်မှချကာ အအေးခံထားပါ။ အနည်းငယ်အေးလာလျှင် ဓါးဖြင့်အနေတော်လှီးကာ သုံးဆောင်နိုင်ပါပြီ ။`,UserType:"001"},{Guid:"542a008e-49c2-4504-8909-513090342f1b",Name:"အသားတုရှမ်းပဲပုပ်မြေပဲကြော်",Ingredients:`အသားတု
ဆား
ရှမ်းပဲပုပ်
ဆီ`,CookingInstructions:`အသားတု ၅ ကျပ်သားကိုလှီးပြီး 
ဆားနဲ့အရသာမှုန့်လေးကိုရေဖျော်....
ရေတောက်ပြီးမှ....ကြော်
မြေပဲလှော် ၅ ကျပ်သားကိုကွဲသွားအောင်ထုပြီးပြီးမှကြော်
 ရှမ်းပဲပုပ် ၅ ပြားကို ကတ်ကြေးလေးနဲ့အရှည်လိုက်လေးတွေညှပ်
 ပြီးမှကြော်
 ဒယ်အိုးထဲဆီကျန်တာလေးနဲ့ငရုတ်သီးခွဲခြမ်း
 ဟင်းစားဇွန်းတစ်ဇွန်းထည့်ကြော်ပြီး
 ကြက်သွန်ဖြူကြော် ၂ ကျပ်ခွဲသားလေးထည့်
 ကြော်ပြီးဆယ်ထားတဲ့ အသားတု ပဲပုပ် မြေပဲ
အကုန်ရောထည့်ပြီးတော့မွှေ.....
အအေးခံထားပြီး လေလုံဘူးလေးထဲထည့်ထားပြီး
စားချင်တဲ့အချိန် အဆင်သင့်လေးပဲပေါ့နော်.....`,UserType:"002"},{Guid:"8fc95ede-9ebd-4a2d-842b-f0f1f3ced81d",Name:"ရန်ကုန် မုန့်ဟင်းခါး",Ingredients:`ငါးခူ - ၃၀ သား
ငါးဖယ် - ၁၀ သား
ဘဲဥ - ၁၀ လုံး
ကုလားပဲခြမ်း - ၁၀ သား
မြေပဲ - ၅ ကျပ်သား
ဆန်အကျက်မှုန့် - ၁၀ သား
စပါးလင် - ၃ ပင်
ဂျင်းလက် - ၃ လုံး (၂ကျပ်ခွဲ)
ကြက်သွန်ဖြူ - ၄ မွှာ
ကြက်သွန်နီ (အကြီး) - ၇ လုံး
ကြက်သွန်နီ (အသေး) - ၁၀ လုံး
ငရုတ်ပုထောင်း - အနည်းငယ်
နနွင်း ၊ ငရုတ်ကောင်း
အချိုမှုန့် - ၁ ဇွန်း (သုံးလျှင်ကြိုက်သလောက်)
ငံပြာရည် ​- လိုသလောက်
ထန်းလျက် - ၃ခဲ
ငှက်ပျောအူ - ၁ တုံး`,CookingInstructions:`ကြက်သွန်နီ(သေး) ၁၀လုံး နှင့်ငရုတ်ပုထောင်း အနည်းငယ်
နနွင်း၊ ငရုတ်ကောင်း
အချိုမှုန့် ၁ဇွန်း(သုံးလျှင်ကြိုက်သလောက်)
ငံပြာရည် လိုသလောက်
ထန်းလျှက် ၃ခဲ၊ ငှက်ပျောအူ ၁တုံး
ပြုလုပ်နည်း

ငါးခူကို ရေဆေး ဆားကြမ်း မန်းကျည်းသီးနှင့်ဆေးထားပါ။ စပါးလင် ထိပ်ကို ဖြတ်၍ စည်းပြီး နနွင်း ငံပြာရည် တို့ဖြင့် ငါးခူကို ထည့်၍ ပြုတ်ပြီး အရိုးနွှင် ထားပါ။

အရိုးကို ထောင်းပြီး ဇကာ ခံကာ ရေနှင့်ဆေးချထားပါ။ ကုလားပဲကို နနွင်း၊ ဆား အနည်းငယ်စီနှင့်နူးသည် အထိပြုတ်ပြီး ခြေထားပါ။ ကြက်သွန်နီ ပါးပါးလှီးထားပါ။ ကြက်သွန်ဖြူ ဂျင်း စပါးလင် တို့ကို ထောင်းထားပါ။

ငှက်ပျောအူကို လှီး၍ ရေ၊ နနွင်း ရောထားသော ဇလုံ တစ်ခု ထဲသို့ လှီးချပါ။ ဆီသတ်ရန် ဆီ ထည့်ပါ။ ငါးဖယ်ကို ပြား၍ ကြော်ထားပါ။ ကျန်သော ဆီထဲသို့ နနွင်းထည့်ပြီး ကြက်သွန်နီကို ကြော်ပြီး ဘေး၌ ခဏကပ်ပြီး ဆယ်ထားပါ။

ကြက်သွန်ဖြူ ထည့်ပါ။ ဂျင်းထည့်ပါ။ စပါးလင်ထည့်ပါ။ ရွှေအိုရောင် သန်းလာလျှင်ငရုတ်ပုထောင်း ထည့်၍ ခဏမွှေပြီး ငါးထည့်ပါ။ ငံပြာရည်၊ (အချိုမှုန့်)ထည့်၍ မွှေးလာပြီး အနည်းငယ် ခြောက်သည်အထိ ဆီသတ်ပါ။

ကြက်သွန်ဥနီ အသေးကို ခွာထားပါ။ ဘဲဥကို ပြုတ်ထားပါ။ ငါးပြုတ်ရည်အိုးကို ရေထပ်ထည့်၍ ဆူအောင် တည်ပါ။ ပွက်ပွက် ဆူလာလျှင် ခြေထားသော ပဲထည့်၍ ၁၀မိနစ်ခန့်ထားပါ။

ဆန်အကျက်မှုန့် ရေဖျော်ထည့်ပါ။ ဆန်မှုန့်အနံပျောက်အောင်ထားပါ။ နောက်ထပ်၁၀မိနစ်ခန့်ထားပါ။ မြေပဲထောင်း ထားတာ ထည့်ပါ။ ၁၀မိနစ်ခန့် ထပ်ထားပြီလျှင် ဆီသတ်ထားသော ငါးထည့်ပါ။ ငါးဖယ်ကို တုံး၍ ထည့်ပါ။

ဆူလာလျှင် ငှက်ပျောအူ ကြက်သွန်ဥ ထည့်ပြီးမွှေပါ။ အဖုံး မအုပ်ပဲ ထားပါ။(ငှက်ပျောအူများ မဲတတ်သည်)။ ဘဲဥ လှီးထည့်ပါ။ အိုးဘဲဥ အတွက် အလုံးလိုက်လဲ ထည့်ပါ။ ထန်းလျှက်ခဲထည့်ပါ။ ငံပြာရည်၊ အချိုမှုန့် ထည့်၍ အရသာ အနေတော် ဖြစ်အောင်ပြင်ပါ။ ငရုတ်ကောင်းထည့်ပါ။`,UserType:"001"},{Guid:"e3767146-3ee2-4cae-ad64-cfc852c1919d",Name:"သက်သတ်လွတ် မုန့်ဟင်းခါး",Ingredients:`မုန့်ဟင်းခါးဖတ် ၅၀ ဆယ်သား
ခရမ်းသီး ၃-၄ လုံး
ကြက်သွန်မြိတ် ၄ ပင်
မွှေးမုန့်ဟင်းခါး အစုံမူန့် ၄ စားပွဲဇွန်း
ကြက်သွန်နီ ၂၅ ကျပ်သား ( ၄၀၀ ဂရမ်)
ကြက်သွန်ဖြ ူ ၂ ကျပ်ခွဲသား ( ၂၅ ဂရမ်)
ချင်း ၁ လက်မ အရှည်
စပါးလင် ၂ ပင်
နနွင်းအနည်းငယ်
ဆီ ၅ ကျပ်သားခန့်
ငရုပ်ကောင်းလှော်ထောင်း
၁ ၁/၂ စားပွဲဇွန်း
ထန်းလျှက်ခဲ ၂ ခဲ
ဆား သင့်ရုံ
ပဲငံပြာရည် အပျစ် ၁ လက်ဘက်ရည်ဇွန်း
ကြာမြစ်/ဌက်ပျောအူ`,CookingInstructions:`ခရမ်းသီးကို အတွင်းသားပျော့ပြောင်းပီး အခွံ မီးကြွမ်းတဲ့အထိ မီးဖုတ် ပါ။ အအေးခံပီး အသားများကို ခြစ်ယူထားပါ။

ကြက်သွန်မြိတ်ကို နုတ်နုတ် လှီးထားပါ။

မွှေးမုန့်ဟင်းခါး အစုံမူန့် (အသင့်လှော်ပီးသား ) ကို မွှေးလာအောင် ဒယ်အိုးပူထဲမှာ ခဏလှော်ပေးပီး ရေ နို့ဆီဗူး ၁ဗူး စာခန့်ထည့် ဖျော်ပါ။ *** ပိုမွှေးလာအောင် ခဏလှော်ပေးတာပါ၊ အသင့်သုံးလှော်ပီးသားဖြစ်တဲ့အတွက် ထပ်မလှော်လည်း ရပါတယ်။***

ကြာမြစ်ထည့်မည်ဆိုလျှင် အခွံနွှာပီး အကွင်းလေးများလှီးထားပါ။ ဌက်ပျောအူ ထည့်မည်ဆိုလျှင် အူတိုင် အနုများကို လက်တလုံးအထူ လှီးပီးနနွင်း ထည့်ထားသောရေတွင်စိမ်ထားပါ။

ကြက်သွန်နီကို ပါးပါးလှီးထားပါ။ ကြက်သွန်ဖြူကို မညက်တညက်ထောင်းပီး တ၀က်ခန့်ကို ခပ်ပီးဖယ်ထားပါ။ ကျန်တ၀က်ကို ပိုညက်သွားအောင် ဆက်ထောင်းပါ။ ချင်းကို ညက်အောင်ထောင်းပါ။ စပါးလင် အရင်းပိုင်းကို အက်သွးရုံလေး ထုပါ။ ပီးလျှင် ချည်ထုံးထားပါ။

ဒယ်အိုးတွင် ဆီ ၊ နနွင်း ထည့်ပါ။ မညက်တညက်ထောင်းထားသော ကြက်သွန်ဖြူ ကို ကြွပ်အောင်ကြော်ပီးဆယ်ထားပါ။ ဆီ တချို့လည်းခပ်ဖယ်ထားပါ။

ကျန်တဲ့ဆီထဲမှာ ကြက်သွန်နီကို ဆီသတ်ပါ။ နွမ်းလျှင် ကြက်သွန်ဖြူ ၊ ချင်းတို့ ထည့်မွှေပီးသွေ့ လာတဲ့အထိ ဆီသတ်ပါ။ မွှေးလာတဲ့အခါ ခရမ်းသီးနဲ့ ကြက်သွန်မြိတ်ထည့်မွှေပေးပါ။

ဟင်းချက်မည့်အိုးတွင် ရေထည့်ပါ။ ဆူအောင်တည်ပါ။ ဆူလျှင် ရေဖျော်ထားတဲ့ မုန့်ဟင်းခါး အစုံမူန့်ကို သမအောင်မွှေပီးထည့်ပါ။ ဆီသတ်ထားသည်တို့ ထည့်ပါ။ ထန်းလျှက်ခဲ နဲ့ ဆားထည့်ပါ။ ကြက်သွန်နီ ဥ အလုံးသေးများနွှာထည့်ပါ။ ဌက်ပျောအူ /ကြာမြစ်တို့ထည့်ပါ။ ဟင်းရည်ဆူပွက်လျှင် ငရုပ်ကောင်းခတ်ပါ။ ကြက်သွန်ဖြူကြော် တချို့ထည့်ပါ။ အရသာကို လိုအပ်သလို ပြုပြင်ပီးသုံးဆောင်နိုင်ပါပြီ။`,UserType:"002"},{Guid:"fa6727aa-4773-4488-876d-6a2d2378eb06",Name:"ငရုတ်ကောင်းဆန်လှော် မုန့်ဟင်းခါး",Ingredients:`မုန့်ဟင်းခါးဖတ် - 1000g
ငါးခူ - 500g
ငါးငံပြာရည် - လိုသလောက်
ဆား - လိုသလောက်
ကွကျဥ - ၆လုံး
ငရုတ်ကောင်းမှုန့် - ထမင်းစားဇွန်း တဇွန်းခွဲ
ကြက်သွန်နီ - အလုံးကြီးကြီး ၂လုံး (ဆီသတ်ရန် )
ကြက်သွန်နီ - အလုံးသေး ၁၈လုံးခန့် (ဟင်းရည်ထဲထည့်ရန် )
ကြက်သွန်ဖြူ - အမွှာကြီးကြီး အမွှာ ၂၀ခန့် (ဆီချက် ချက်ရန်)
ကြက်သွန်ဖြူ - အမွှာကြီးကြီး ၅မွှာခန့် (ငါးဆီသတ်ရန်)
ဆန်လှော်မှုန့် - ၁၀၀ဂရမ်
ချင်း - တလက်မခန့်
နနွင်းမှုန့် - လိုသလောက်
အချိုမှုန့် - လက်ဖက်ရည်ဇွန်း နှစ်ဇွန်း
ငရုတ်သီးအလှော်မှုန့် - စားနိူင်သလောက်
ဆီ - ထမင်းစားဇွန်း ၅ဇွန်း (ငါးဆီသတ်ရန်)
ဆီ - လက်ဖက်ရည်အကြမ်းပန်းကန် တလုံး (ဆီချက်ချက်ရန်)
ရေအေး - ၃လီတာခန့် (ဟင်းရည်ချက်ရန် )
ရေအေး -၂လီတာခန့် (ငါးပြုပ်ရန် ငါးရိုးအရည်ငင်ရန်)
ခရမ်းချဉ်သီး ပဲသီး ပဲပင်ပေါက် ပူစီနံ နံနံပင် သံပုရာသီး - လိုသလောက်`,CookingInstructions:`ဇောက်နက်သော အိုးတလုံးထဲမှာ ငါးခူကို ငါးငံပြာရည် ထမင်းစားဇွန်း နှစ်ဇွန်း ဆား နနွင်းမှုန့် လက်ဖက်ရည်ဇွန်း သုံးပုံတပုံနှင့် ရေကို ငါးမြုပ်အောင်ထည့်ပြီး ပြုတ်ပေးပါ။ ငါးကျက်ပါက ငါးပြုတ်ရည်ကို ဖယ်ထားပါ။ ငါးကိုအအေးခံပြီး အရိုးအသား သတ်သတ်စီ နွှင်ပေးထားပြီး အရိုးများကို ထောင်းပေးပါ။ ပြီးတာနဲ့ ရေအနည်းငယ်ဖြင့် အရိုးများကို ငင်ပေးပြီး ဇကာဖြင့်စစ်ကာ အရည်ကိုယူထားပါ။
ကြက်ဥ၅လုံးကို ပြုတ်ပြီး အခွံခွာကာထားပါ။ ကြက်ဥ တလုံးကို အစိမ်းခလောက်ထားပါ။ ကြက်သွန်နီ အလုံးကြီးကြီးကို အခွံခွာပြီး ညက်အောင် ထောင်းထားပါ။ ကြက်သွန်ဖြူ အမွှာ၂၀ခန့်ကို ဆီချက်ရန် မညက်တညက် ထောင်းထားပါ။ ကြက်သွန်ဖြူ ၅မွှာခန့်ကို ငါးဆီသတ်ရန် ညက်နေအောင် ထောင်းထားပါ။
ချင်းကို ညက်နေအောင် ထောင်းထားပါ။ ငရုတ်ကောင်းမှုန့်ကို ညက်အောင်ထောင်းထားပါ။ ကြက်သွန်နီ အလုံးသေးများကို အခွံခွာပြီး ရေဆေးထားပါ။ ခရမ်းချဉ်သီး ပဲသီး ပဲပင်ပေါက် သံပုရာသီးတို့ကို ရေဆေးကာ ပြင်ထားပါ။ ဆန်လှော်မှုန့်ကို ရေအနည်းငယ်ဖြင့် ဖျော်ထားပေးပါ။ နံနံပင် ပူစီနံတို့ကို ရေဆေးပြီး ခပ်ပါးပါး လှီးထားပါ။ ပဲကြော် ပြင်ထားပါ။ ကြက်သွန်ဖြူ ဆီချက်ပြင်ထားပါ။
ကြက်သွန်ဖြူ အမွှာ၂၀လောက်ကို အခွံခွာကာ အကွင်းလိုက် ခပ်ပါးပါး လှီးပေးပါ။ ဒယ်အိုးတလုံးမှာ ဆီ လက်ဖက်ရည်အကြမ်းပန်းကန် တလုံးသာသာထည့်ပါ။ မီးအပူပေးပြီး ဆီပူလာတာနဲ့ နနွင်းမှုန့် လက်ဖက်ရည်ဇွန်း တဝက်ထည့်ပြီး ထောင်းထားသော ကြက်သွန်ဖြူကို ကြော်ပေးပါ။ မွှေးပြီးကြွတ်လာတာနဲ့ ပန်းကန်ထဲ ပြောင်းထည့်ပေးထားပါ။
ဒယ်အိုးထဲသို့ ဆီထည့်ပြီး ဆီပူလာလျှင် ထောင်းထားသော ကြက်သွန်ဖြူ ကြက်သွန်ဖြူ၊ နီ ချင်းတို့ကိုထည့်ပြီး မွှေးလာတဲ့အထိ ကြော်ပါ
ပြီးတာနဲ့ နနွင်းမှုန့်တို့ကိုထည့်ပြီး မိနစ်ဝက်လောက် ရောမွှေပေးပါ။ ငါးအသားများ ငရုတ်ကောင်းမှုန့်နှင့် ဆား လက်ဖက်ရည်ဇွန်းတဝက်ကို ထည့်မွှေပေးပါ။ ငါးဆီသတ်နံ့ မွှေးလာလျှင် မီးပိတ်ပေးပါ။
ဇောက်နက်သော အိုးကြီးကြီး တလုံးထဲမှာ ငါးပြုပ်ရည် ငါးအရိုး ကျင်ထားသောအရည် ဆား လက်ဖက်ရည်ဇွန်း တဇွန်း ငါးငံပြာရည် ထမင်းစားဇွန်း ၃ဇွန်း ငါးဆီသတ်နှင့် ပြုတ်ထားသော ကြက်ဥတို့ကို ထည့်ပေးပါ။ ရေပွက်ပွက် ဆူလာပါက နောက်ထပ်ရေ အနေတော် ထပ်ထည့်ပေးပါ။
ရေ ပွက်ပွက်ဆူလာလျှင် ရေဖျော်ထားသော ဆန်လှော်မှုန့်ကို ထည့်ပြီး ရောမွှေပေးပါ။ ဆန်မှုန့်များ ခဲမသွားစေရန် မကြာမကြာ မွှေပေးပါ။ ဆန်လှော်မှုန့်များ အရမ်းမပွခင် ကြက်သွန်နီများကို အလုံးလိုက် ထည့်ပေးပါ။ ကြက်သွန်နီများ နူလာပါက ခလောက်ထားသော ကြက်ဥကို ဟင်းရည် ပွက်ပွက်ဆူနေချိန်မှာ အိုးအပေါ်မှ စက်ဝိုင်းပုံစံ လောင်းချပေးပြီး တဖက်သတ်ထဲ မွှေပေးကာ အရသာမြည်း၍ လိုသလို ပြင်ပေးပါ။ မုန့်ပြင် ပန်းကန်လုံးထဲမှာ မုန့်ဟင်းခါးဖတ် ငရုတ်သီးအလှော်မှုန့် နံနံပင် ပူစီနံ ကြက်သွန်ဥ သံပုရာရည် ပဲပင်ပေါက် ကြက်သွန်ဖြူဆီချက်အဖတ် ကြက်သွန်ဖြူ ဆီချက်အနည်းငယ် ထည့်၍ အပေါ်မှ မုန့်ဟင်းရည် လောင်းထည့်ကာ အရသာရှိလှသော ငရုတ်ကောင်း ဆန်လှော် မုန့်ဟင်းခါးကို နှစ်သက်သလို သုံးဆောင်နိုင်ပါပြီ။`,UserType:"001"},{Guid:"c050137d-bd43-47d2-aa8d-72e453b439a8",Name:"၂၄ နာရီ မပျော့အောင် အာလူးကြော်နည်း",Ingredients:`အာလူး
ဆီ
ကျောက်ချဉ်စိမ်
အချိုမှုန့်
ရေအေးအေး`,CookingInstructions:`အာလူးကို မပျော့အောင် ကြော်ဖို့ ထုံးရေစိမ်တယ်။ ကျောက်ချဉ်စိမ်တယ်လို့ ပြောကြပါတယ်။ တကယ်တော့ အာလူးကို ရိုးရိုးရေပဲ စိမ်ပြီး ဆေးရတာဖြစ်ပါတယ်။
ပထမဆုံးအာလူးကို အခွံနွာ၊ ပါးပါးလှပ်လှပ်လေး ခြစ်နဲ့ခြစ်။
ပြီးရင် ရေအေးအေးနဲ့ ဆေးပါ။ အာလူးထဲက ကစီဓာတ်တွေ (အာလူးကော်)တွေထွက်လာပါလိမ့်မယ်။ စကာနဲ့ စစ်လိုက်။ ရေသန့်နဲ့ပြန်ဆေးလိုက်နဲ့ လုပ်ပေးပါ။ ကျွန်တော်က ၅ ခေါက်တိတိ ဆေးပြီး ရေစစ်ထားပေးပါတယ်။ ပြီးရင် ဆား အနည်းငယ် ထည့်ပြီးနယ်ထားပေးပါ။ (အချိုမှုန့်စားရင် အချိုမှုန့် ထည့်နယ်လို့ရပါတယ်။ ရောင်းတန်းဝင်တွေက အချိုမှုန့်ထည့်လေ့ရှိပါတယ်)
ပြီးရင် ရေစစ်ထားပေးပါ။ 
အာလူးကြော်ဖို့အတွက် ဆီက လုံးဝ ပူနေရမှာဖြစ်ပါတယ်။ ပူကြွပ်နေတဲ့ ဆီပူပူထဲကို အာလူး‌ခြစ်ထားတာတွေထည့်ပြီးကြော်ပေးပါ။ ကြော်နေစဉ် အမြဲမွှေပေးပါ။ အာလူးက ပါးပါးလေးခြစ်ထားတာကြောင့် အကြာကြီးကြော်စရာမလိုပါဘူး။ ပူစီပေါင်းတွေထနေတဲ့ ဆီက ပူစီပေါင်းတွေမထားဘဲ ငြိမ်သွားမယ်။ အာလူးကြော်အရောင်လေးက အဝါရောင် ဖျော့ဖျော့သန်းလာမယ်ဆိုရင် စပြီး ဆယ်ဖို့ ပြင်ထားပါ။ အဝါရောင် မရင့်ခင် ဆယ်ပြီး ဇကာနဲ့ ဆီစစ်ထားပါ။
ဒါဆိုရင် ကြွပ်ပြီး စားကောင်းတဲ့ အာလူးကြော်ရပြီဖြစ်ပါတယ်။`,UserType:"002"},{Guid:"a8e96baa-c6f7-4564-ba20-8443fe9bfce0",Name:"မြောင်းမြ မုန့်ဟင်းခါး",Ingredients:`ငါးရံ့၊ ငါးခူ၊ ငါးကြင်းဖြူ (နှစ်သက်သည့် ငါးတမျိုးနှင့် ချက်ပါ။)
ဆန်လှော်မှုန့်
ပဲမှုန့်အကြက်
စပါးလင်
ကြက်သွန်ဖြူ
ကြက်သွန်နီ
ဂျင်း
ငရုတ်ကောင်း
ငံပြာရည်
ဆား
ဆနွင်းမှုန့်
ဆီ
ကြက်သွန်ဖြူဆီချက်
ကြက်သွန်နီဆီချက်
နံနံပင်
ငရုတ်သီး အကြက်မှုန့်
သံပုရာသီး (သို့မဟုတ်) ရှောက်သီး
ဘဲဥ
ငါးဖယ်ကြော်
အကြော် (ပဲကြော်၊ ဘူးသီးကြော်၊ ကြက်သွန်ကြော်)`,CookingInstructions:`ငါးပြုတ်ရန် ရေနွေး တည်ထားပါ။ ရေနွေးဆူလျှင် စပါးလင်၊ဂျင်း၊ ကြက်သွန်ဖြူ၊ ငါး၊ ငံပြာရည်၊ ဆီအနည်းငယ် နှင့် ဆနွင်းမှုန့်အနည်းငယ် ထည့်ကာ ငါးများနူးလာသည် အထိ ပြုတ်ပေးပါ။ (ရေဆူပြီးမှ ငါးထည့်သည့် အတွက် ငါးညှီနံ့ မရှိပါ။)

ဟင်းရည်ချက်ရန် ငါးအသားနွှာပါ။ ကြေမသွားစေရန် ငါးအသားကို အမျှောင်းလှလှလေး ဖြစ်အောင်နွှာပါ။

ဂျင်း၊ ကြက်သွန်ဖြူ ထောင်းကာဆီသတ်ပါ။ ပြီးလျှင် ငါးပြတ်ရည်အိုး ဆူပွက်သည့်အချိန်တွင် နွှာထားသော ငါးအသားများထည့်ပါ။ (ငါးအသားများ ဆီမသတ်ရပါ။)

ဟင်းရည် ဆူပွက်၍ အနံ့မွေးလာရင် ဆန်လှော်မုန့်၊ ပဲမုန့်အကြက် တို့ကို ရေဖျော်ပြီ ဖြေးဖြေးလောင်းတည့်ပါ။ ဟင်းရည်ဆူချိန် ရောက်မှ အပေါ့အငံမြီးရျ် ငံပြာရည်ကိုချိန်ဆပြီးထည့်ပါ။ (ဟင်းရည် မဆူခင်တည့်ရင် ငံပြာရည် အနံထွက်တတ်သည်။)

ကြက်သွန်နီထည့်ပြီး ငရုတ်ကောင်းအနည်းငယ်ထည့်ပါ။ အနံအရသာဖြင့် ပြည့်စုံသော မုန့်ဟင်းခါး ဟင်းရည် ရပါပြီ။

မုန့်ဟင်းခါးပွဲပြင်ပြီးလျှင် နံနံပင်၊ ကြက်သွန်ဖြူဆီချက်၊ ကြက်သွန်နီဆီချက်၊ ငါးဖယ်ကြော်၊ ငရုတ်သီး အကြက်မှုန့်၊ သံပုရာသီး (သို့) ရှောက်သီး၊ အကြော် (ပဲကြော်၊ ဘူးသီးကြော်၊ ကြက်သွန်ကြော်)၊ ဘဲဥ မိမိနှစ်သက်ရာများကို ထည့်၍ စားသုံးနိုင်ပါသည်။`,UserType:"001"},{Guid:"451e1131-7680-4fe5-85b4-504f5353de5f",Name:"မုန့်ဟင်းခါး (တောချက်)",Ingredients:`ငါးခူ အနေတော် - ၄ကောင်
စပါးလင် - ၄ပင်
ဂျင်း - တတက်
ငါးငံပြာရည် ထမင်းစားဇွန်း - ၆ဇွန်း
ကြက်သွန်နီအနေတော် - ၄လုံး
ကြက်သွန်ဖြူအနေတော် - ၁လုံး (၈မွှာခန့်)
ငရုတ်သီးအစိမ်းမှုန့် ထမင်းစားဇွန်း - ၁ဇွန်း
ဆား - အနည်းငယ်
နနွင်းမှုန့် - အနည်းငယ်
ဆန်လှော်မှုန့် ထမင်းစားဇွန်း - ၆ဇွန်း
ကြက်သွန်နီအကြီး - ၅လုံး
ကြက်သွန်နီအသေး - ၁၅လုံး
ကွကျဥ - ၃လုံး
ငှက်ပျောအူ - တပိုင်း
ငရုတ်ကောင်းမှုန့် - အနည်းငယ်
ငရုတ်သီးအကျက်မှုန့်
နံနံပင်
အကြော်စုံ
ကြက်သွန်ဖြူဆီချက်`,CookingInstructions:`ငါးပြုတ်ဖို့အတွက် ငါးခူတွေကို ခေါင်းဖြတ်ပြီး ကိုယ်လုံးကို ဆားနနွင်းမှုန့်၊ငါးငံပြာရည် ထမင်းစားဇွန်း ၃ဇွန်း၊ ချင်းအနည်းငယ်၊ စပါးလင်အပြင်ခွံအရင့်တွေကို ထုံးပီး ရေအနည်းငယ်ဖြင့် ပြုတ်ပါ။

ါးအသားတွေကျက်သွားပြီဆိုလျှင် ဆယ်ယူပြီး အအေးခံထားပါ။ ငါးပြုတ်ရည်ကို စစ်ပြီး ပန်းကန်တလုံးထဲ ထည့်ထားပါ။ နောက်မှ ဟင်းရည်ထဲ ထည့်ပါမည်။

ငါးအရေခွံတွေကိုဖယ်ပြီး အသားချည်းသပ်သပ် နွှင်ထားပါ။ အရိုးတွေကို ရေနွေးအနည်းငယ်ထည့်ပြီး အချိုရည်စစ် ယူထားပါ။

ငါးဆီသတ်အတွက် ကြက်သွန်နီ၊ ကြက်သွန်ဖြူ၊ ဂျင်း၊ စပါးလင်အနုတွေ၊ ငရုတ်သီးအစိမ်းမှုန့်အားလုံးကို ညက်အောင် ထောင်းထားပါ။ ဒယ်အိုးထဲ ဆီထည်ပြီး ဆီကျက်လျှင် ကြက်သွန်ထောင်းကို ဆီသတ်ပါ။ နည်းနည်းကြာကြာလေး သတ်ပေးပါ။

ပြီးလျှင် ငါးအသားတွေထည့်ပြီး မခြောက်တခြောက် အနေအထားအထိ ရအောင် ဆီသတ်ပါ။ ငါးဆီသတ်ကောင်းမှ ဟင်းရည်ရဲ့ အရသာကောင်းမှာပါ။

(Ready Made) ဆန်လှော်မှုန့်ကို မီးအေးအေးဖြင့် မတူးအောင် လှော်ထားပါ။

ဟင်းရည်ချက်ဖို့ အိုးကြီးကြီးထဲကို ရေ တဝက်လောက်ဖြည့်ပြီး ပွက်ပွက်ဆူအောင် တည်ထားပါ။ ပွက်ပွက်ဆူမှ အဆင့်(၁)မှ ငါးပြုတ်ရည်ကို ထည့်ပြီး ပွက်ပွက်ဆူပါစေ။ အဆင့်(၃)မှ အချိုရည်ကို ဆက်ထည့်ပြီး ပွက်ပွက်ဆူပါစေ။ အဆင့်(၄)မှ ငါးဆီသတ်ကို ထည့်ပြီး ပွက်ပွက်ဆူအောင် ၅မိနစ်ခန့် တည်ပါ။ လှော်ထားသော ဆန်လှော်မှုန့် ဆက်ထည့်ပြီး နောက် ၅မိနစ်ခန့် တည်ပါ။

ဆားအနည်းငယ်နှင့် ကျန်နေသော ငါးငံပြာရည်ထည့်ပြီး ဟင်းရည်အရသာပြင်ပါ။ ကြက်သွန်နီ အကြီးတွေကို ၆စိပ် စိပ်ပြီး အဖတ်ခွာထားပါ။ ကြက်ဥတွေကို နာနာခေါက်ထားပါ။ ငှက်ပျောအူအနုလေးတွေကို ပါးပါးလှီးပြီး နနွင်းရည်ထဲ စိမ်ထားပါ။

ပွက်ပွက်ဆူနေသော ဟင်းရည်အိုးထဲသို့ အဆင့်(၈)မှ အစာပလာတွေကို ထည့်ပြီး နောက် ၅မိနစ်ခန့် တည်ပါ။ ကြက်သွန်နီအသးတွေနဲ့ ငရုတ်ကောင်းမှုန့် အနည်းငယ်ကို ထည့်ပြီး မီးအေးအေးဖြင့် ဆက်တည်ထားပါ။

စပါယ်ရှယ်မုန့်ဟင်းခါးဟင်းရည် ရပါပြီ။ မိမိ ကြိုက်နှစ်သက် သလို ပြင်ဆင်ပြီး သုံးဆောင်လို့ ရပါပြီ။`,UserType:"001"},{Guid:"4736b0f7-431b-4c05-9e45-670b2bcd9a85",Name:"ညောင်ပင်ကြီး မုန့်ဟင်းခါး (သို့) အညာမုန့်ဟင်းခါး",Ingredients:`ဆီ – 1/2 Cup (125 ml)
ျင်း – လက်မအရွယ် ၁ တက် (ထောင်းထားပါ)
ကြက်သွန်ဖြူ အတက်ကြီး – ၁၁ တက်(ထောင်းထားပါ)
နနွင်းမှုန့် – တစ်ဝက် (လက်ဖက်ရည်ဇွန်း)
အရောင်တင်မှုန့် – ၂ ဇွန်း (လက်ဖက်ရည်ဇွန်း)
ငါးငံပြာရည် – 1/4 cup (60 ml)
ပြုတ်ပြီး အရိုးနွှင်ကာ ချေထားသော ငါး
ပြုတ်ပြီး အသားမျှင်များ ဖြစ်အောင် ဆိတ်ဆွထားသော ကြက်သား
ဆား – လက်ဖက်ရည်ဇွန်း ၁ ဇွန်း
Chicken Powder – လက်ဖက်ရည်ဇွန်း ၂ ဇွန်း
ငါး နှင့် ကြက်သားပြုတ်ရည် – 2000 ml ၁၂။ ခလောက် ထားသော ကြက်ဥ – ၂ လုံး
ကုလားပဲစိမ်းမှုန့် – 1/2 Cup (125 ml) (ရေ – 250 ml ဖြင့် ကြေအောင်ချေပြီး ဖျော်ထားပါ)
ငှက်ပျောအူ – 1 Cup (250 ml) (ပါးပါးလှီးကာ နနွင်းမှုန့် အနည်းငယ် ထည့်ဖျော်ထားသည့် ရေထဲစိမ်ထားပါ။)
အခွံခွါ ထားသည့် ကြက်သွန်နီ ဥသေး – ၅ လုံး (ကြိုက်လျှင် ပိုထည့်ပါ)
ငါးကြင်း (သို့) အဆင်ပြေရာ ငါးခုတ်သား – ၁၅ ကျပ်သားခန့် (230 g) (ကကတစ် (Barramundi) ကို သုံးထားပါတယ်။)
ကြက်ရင်ပုံ – ၁၅ ကျပ်သားခန့် (230 g) (များများချက်လျှင် တစ်ကောင်လုံး ထည့်ချက်နိူင်ပါတယ်။)
ထုထားသော ဂျင်း – လက်မအရွယ် ၁ တက်
နနွင်းမှုန့် – လက်ဖက်ရည်ဇွန်း တစ်ဝက်
ငါးငံပြာရည် – 1/4 Cup (60 ml)
Chicken Powder – လက်ဖက်ရည်ဇွန်း ၁ ဇွန်း`,CookingInstructions:`ငါး ၊ ကြက်သား ၊ နနွင်းမှုန့် ၊ ငါးငံပြာရည် နှင့် ထုထားသောဂျင်း ကို ပွက်ပွက်ဆူနေသော ရေ (ပြုတ်ပြီးနောက် 2000 ml ခန့် ကျန်ရပါမယ်။) ထဲထည့်ပြီး ပြုတ်ပေးပါ ။ (ထွက်လာသည့် အမြှုပ်များကို ခပ်ထုတ်ပစ်ပါ။)

၅ မိနစ်ခန့်ကြာလျှင် (ငါးကျက်လျှင်) ငါးကို ဆယ်ထုတ် အအေးခံကာ အရိုးနွှင် ၊ အသားချေထားပါ။ ၁၀ မိနစ်ခန့်ကြာလျှင် (ကြက်သားကျက်လျှင်) ကြက်သားကို ဆယ်ထုတ် အအေးခံကာ အသားမျှင်လေးများဖြစ်အောင် ဆိတ်ဆွထားပါ။

ဆီထဲထည့်ကာ မွှေကြော်ထားသည့် ထောင်းထားသောဂျင်း နှင့် ကြက်သွန်ဖြူ ရွှေဝါရောင်သန်းလာလျှင် နနွင်းမှုန့် နှင့် အရောင်တင်မှုန့်ထည့်ကာ ၃၊၄ ချက်မွှေပါ။ ပြီးလျှင် အမှုန့်များမတူးအောင် ငါးငံပြာရည်ထည့်ပါ။

ပြုတ်ထားသော ငါး၊ ကြက်သား၊ ဆား နှင့် Chicken Powder တို့ကို ထည့်ပြီး အရည်တော်လေးခြောက်အောင် မွှေကြော်ပါ။ ပြီးလျှင် ပွက်ပွက်ဆူအောင် ပြန်တည်ထားသည့် အသားပြုတ်ရည်အိုးထဲ လောင်းထည့်ပါ။

ပြန်ဆူလာလျှင် ခလောက်ထားသော ကြက်ဥကို လောင်းထည့်ပြီး အမျှင်လေးများဖြစ်အောင် ချက်ချင်းမွှေပေးပါ။ ပြန်ဆူလာလျှင် ဖျော်ထားသော ပဲမှုန့်ရည်ကို လောင်းထည့်ကာ အတုံးအခဲများ ဖြစ်မသွားအောင် ၁ မိနစ်ခန့် မွှေပေးပါ။ (ပျစ်တာကြိုက်လျှင် ပဲမှုန့် အနည်းငယ် ပိုထည့်ပါ။)

ပြန်ဆူလာလျှင် ငှက်ပျောအူနှင့် ကြက်သွန်နီဥသေးများကို ထည့်ကာ အနည်းငယ်မွှေပေးပါ။ ပြီးလျှင် Medium Heat သို့လျှော့ကာ အိုးအဖုံး ၃ ပုံ ၁ ပုံခန့်ဟပြီး ဖုံးကာ ၁၅ မိနစ်ခန့် တည်ထားပါ။ (အောက်ခြေမကပ်အောင် နှင့် မဝေကျအောင် မကြာခဏ မွှေပေးပါ။)

မုန့်ဟင်းခါးအရည် အသင့်ဖြစ်ပြီမို့ မုန့်ဖတ်ထည့်၊ ဟင်းရည်ထည့်၊ နံနံပင်၊ သံပုရာသီး၊ ငရုတ်သီးအလှော်မှုန့် တို့ထည့်ကာ စားကောင်းလှသော အညာ မုန့်ဟင်းခါးလေး အရသာရှိစွာ သုံးဆော င်နိူင်ပါပြီ။

(ကြက်သွန်ဖြူ ဆီချက်အစား ကြက်သွန်နီပါးပါးလှီး အကြွပ်ကြော်၊ ဗူးသီးကြော် နှင့် ကြက်ဥပြုတ်များလည်း ထည့်စားနိူင်ပါတယ်။)`,UserType:"001"},{Guid:"e66e32f4-fc08-46b1-9355-da2a75463fc2",Name:"ရွှေတောင် မုန့်ဟင်းခါး",Ingredients:`မုန့်ဟင်းခါးဖတ် – ၁ ပိဿာ
ကုလားပဲအစိမ်းမှုန့် – ၁၅ ကျပ်သား
ကုလားပဲအကျက်မှုန့် – ၂ ကျပ်ခွဲသား
ငါးခူ – ၄ဝ ဆယ်သား
ငံပြာရည် – ၅ ကျပ်သား
ဆား – သင့်ရုံ
သကြား – စားပွဲဇွန်း ၁ ဇွန်း
နနွင်း – အနည်းငယ်
ကြက်သွန်ဖြူ – ၁ဝ မြွှာခန့်
ကြက်သွန်နီ – ၃ လုံး (ဆီသတ်ရန်)
ချင်း – ၁ လက်မအရွယ်
ဆီ – ၂၅ ကျပ်သားခန့်
ကြက်သွန်နီ – ၁ဝ လုံး (ဆီချက်ချက်ရန်)
ငရုတ်သီးခွဲကြမ်း – စားပွဲဇွန်း ၅ ဇွန်း
ငရုတ်ကောင်း – အနည်းငယ်
နံနံပင် – ၅ ကျပ်သား
ကြက်သွန်နီ – ၅ လုံး (မုန့်ဟင်းခါးနှင့် တွဲဖက်စားရန်)
ပဲကြော် – အခု ၂ဝ`,CookingInstructions:`ရေ ၅ဝဝ မီလီလီတာထဲကို ကုလားပဲမှုန့်အကျက်နဲ့ အစိမ်းရောထည့်ပါ။ (ရေထဲကို ပဲထည့်ပါ။ ပဲထဲကို ရေမထည့်ပါနဲ့)။ ၁ဝ မိနစ်လောက်ကြာရင် ပဲမှုန့်တွေက ရေကိုစုပ်ပြီး အနယ်ထိုင်သွားပါလိမ့်မယ် အဲဒီအခါမှ ကြက်ဥခေါက်တံဖြင့်၊ သမအောင်မွှေပေးပြီး ရေဆက်စိမ်ထားပါ။ ရာသီဥတုအေးလျှင် ညသိပ်စိမ်နိုင်ပြီး ပူလျှင် ၄ နာရီခန့်သာ စိမ်ပါ။ (အချဉ်ပေါက်သွားနိုင်တာကြောင့်ပါ)
ငါးကို အကျိချွဲများ ကုန်အောင် (ဂျုံအကြမ်းမှုန့်/ မီးဖိုပြာ/ မန်ကျည်းရည်/ ဆား၊ နနွင်း တစ်မျိုးမျိုးကိုအသုံးပြုပြီး) သန့်စင်ဆေးကြောပါ။ ဗိုက်ဖောက်၊ အူထုတ်ပါ။ ချင်းတစ်ဝက်၊ နနွင်း၊ ငံပြာရည်၊ ရေအနည်းငယ်ထည့်ပြီး နူးအောင် ပြုတ်ပါ။ ငါးပြုတ်ကို အသားနွှင်ထားပါ။ ပဲဟင်းရည်တွင် အမဲရောင် အဖတ်များပါဝင်မနေစေရန် ငါးအရေခွံများ တတ်နိုင်သလောက် ဖယ်ထုတ်ပေးပါ။ အရိုးကို ရေ ၂ဝဝဝ မီလီလီတာ ထည့်ပြီး မီးအေးအေးဖြင့် ဆက်ပြုတ်ထားပါ။
ကြက်သွန်ဖြူ၊ ကြက်သွန်နီ၊ ချင်းတစ်ဝက်တို့ကို တစ်မျိုးချင်းစီ ညက်အောင်ထောင်းပါ။
ဆီသတ်မည့်အိုးတွင် ဆီထည့်၊ နနွင်းထည့်၊ ကြက်သွန်နီကြော် ကြော်ပါ။ ရွှေဝါရောင်သန်းလျှင် ကြက်သွန်နီကြော်နဲ့ ဆီချက်ကို လိုသလောက် ခပ်ထုတ်ထားပါ။ ဆီပူတချို့ကို ငရုတ်သီးခွဲကြမ်းပေါ် လောင်းချပြီး မွှေပေးပါ။
ကျန်သောဆီတွင် ဆီသတ်ရန် ကြက်သွန်နီကိုအရင်ထည့်ကြော်ပါ။ နွမ်းသွားလျှင် ကြက်သွန်ဖြူထည့်မွှေပါ။ နောက်ဆုံးတွင် ချင်းထည့်မွှေပါ။ အားလုံးခြောက်သွေ့သွားပြီဆိုလျှင် ငါးပြုတ်ထည့်ပါ။ အိုးမကပ်အောင် မွှေပေးနေပါ။ ခြောက်သွေ့တဲ့အထိ ဆီသတ်ပါ။ လုံးဝ အိုးမကပ်ရ မတူးရပါ။ ဟင်းရည်အရောင်မလှ၊ အနံ့မမွှေးဘဲ ဖြစ်သွားတတ်ပါတယ်။
ငါးရိုးပြုတ်ရည်အိုးထဲမှ အရည်များကို ဆန်ခါခံပြီး သီးသန့်အိုးတစ်ခုထဲလောင်းချကာ အရိုးများကို ဖယ်ထုတ်ပါ။ အရိုးပြုတ်ရည်ကို ပြန်တည်ပါ။ စိမ်ထားတဲ့ပဲရည်ကို သမအောင်မွှေပေးပြီး အရိုးပြုတ်ရည်ထဲ လောင်းထည့်ပါ။ သကြား၊ နနွင်း၊ ဆားထည့်ပါ။ အဖုံးဖွင့်တည်ပါ။ ဝေကျတတ်သည်။ ပွက်ပွက်ဆူလျှင် ဆီသတ်ထားတဲ့ ငါးထည့်ပါ။ မီးအေးအေးဖြင့် ကြာကြာဆက်တည်ထားပါ။ ခပ်ပျစ်ပျစ်လေးချက်ပါ။ ပဲရည်ကျလေ ဟင်းရည်ပိုလေးပြီး စားသည့်အခါ လေပွခြင်းမဖြစ်တော့ပါ။ လိုအပ်လျှင် ရေဆူထည့်ပါ။
ပန်းကန်တွင် မုန့်ဖတ်ထည့်၊ မုန့်ဟင်းရည်ပျစ်ပျစ်လေးထည့်၊ ကြက်သွန်နီကြော်၊ ငရုတ်သီးကြော်၊ ပဲကြော်၊ ကြက်သွန်နီ၊ နံနံပင်ထည့်ပြီး သုံးဆောင်ပါ။ ဟင်းချိုရည်နဲ့ တွဲဖက်သုံးဆောင်ပါ။ အပေါ့အငန်အတွက် ငံပြာရည်ထည့်ပါ။	
ရေ ၁၅ဝဝ မီလီလီတာကို ဆူအောင်တည်ပါ။ ငံပြာရည်၊ ဆား၊ ပုစွန်ခြောက် အနည်းငယ်ထည့်ပါ။ ကြက်သွန်ဖြူ ၅ မြွှာ ဓားပြားရိုက်ထည့်ပါ။ ချခါနီးတွင် ငရုတ်ကောင်းဖြူးပါ။ ငံပြာရည်နေရာမှာ ငါးပိနဲ့လည်း ချက်နိုင်ပါတယ်။ ချင်းကို ထောင်းပြီး ကြွပ်အောင်ကြော်ကာ တမယ်ဟင်းရည်မှာ ခတ်နိုင်ပါတယ်။`,UserType:"001"},{Guid:"2764bc40-5443-4f5c-a7f9-6b77f7c8fb07",Name:"တောင်ငူ မုန့်ဟင်းခါး ဟင်းရည်ကျဲ",Ingredients:`မုန့်ဖတ် - 1000 g
ငါးခူ - 500 g
ဆား - ထမင်းစားဇွန်း တစ်ဇွန်း
ငံပြာရည် - ထမင်းစားဇွန်း ၃ဇွန်း
စပါးလင် - ၃ချောင်း
ချင်း -၂လက်မခန့်
ငါးပိရည်ကျို အနှစ် - ထမင်းစားဇွန်း သုံးဇွန်း
ပုဇွန်ငပိ - မင်းစားဇွန်း တစ်ဇွန်း
အရသာမှုန့် - လက်ဖက်ရည်ဇွန်း တစ်ဇွန်းမောက်မောက်
နနွင်းမှုန့် - လက်ဖက်ရည်ဇွန်း တစ်ဇွန်း (တစ်ဝက်ငါးပြုပ် တစ်ဝက်ငါးဆီသတ် )
ကြက်သွန်နီ - အလုံးကြီးကြီး ၂လုံး (ငါးဆီသတ်ရန်)
ကြက်သွန်နီ - အလုံးသေး အလုံး ၂၀ခန့် (ဆီချက်ချက်ရန်နှင့် ဟင်းရည်ထဲ ခတ်ပေးရန်)
ကြက်သွန်ဖြူ - အမွှာကြီးကြီး အမွှာ ၂၀ခန့် (တစ်ဝက်ဆီချက် တစ်ဝက်ငါးဆီသတ်ရန် )
ကောက်ညှင်းပေါက်ပေါက် ဆန်လှော်မှုန့် - လိုသလောက်
ဆီ - ထမင်းစားဇွန်း ၅ဇွန်း
ပဲကြော် - လိုသလောက်
ပဲသီး - လိုသလောက်
နံနံပင် - လိုသလောက်
ခရမ်းချဉ်သီး - လိုသလောက်
ငြုပ်သီးအလှော်မှုန့် - လိုသလောက်
ကြက်ဥ - လိုသလောက်
သံပုရာသီး - လိုသလောက်\r`,CookingInstructions:`ငါးခူကို ဘေးဆူးတောင်များ ခုတ်ပြီး ဗိုက်ထဲမှ ကလီစာများ ထုတ်ပေးပါ။ ပြီးတာနဲ့ ဆား ထမင်းစားဇွန်း တဇွန်းထည့်ပြီး ပွတ်တိုက်ဆေးပေးပါ။ ငါးအရည်ခွံတော်တော်လေး ဖြူလာတာနဲ့ ရေစင်အောင်ဆေးပေးပါ။
ဇောက်နက်သော အိုးတလုံးထဲမှာ ရေဆေးထားသော ငါးခူ ပုဇွန်ငါးပိ ငါးပိရည်ကျိုအနှစ် ဆား လက်ဖက်ရည်ဇွန်း တစ်ဇွန်း ငံပြာရည် ထမင်းစားဇွန်း တစ်ဇွန်း နနွင်းမှုန့် စပါးလင်၂ချောင်းနှင့် ရေမြုပ်အောင်ထည့်ပြီး ပြုတ်ပေးပါ။
ငါးအသား နူးလာတာနဲ့ အအေးခံပြီး အရိုးအသား သတ်သတ်စီ နွှင်ပေးထားပါ။ အသားနွှင်ထားသော အရိုးနှင့် ထည့်ပြုတ်ထားသော စပါးလင်ချောင်းကို ကြေအောင်ထောင်းပြီး ရေအနည်းငယ်နှင့် အရည်ငင်ထားပါ။
ကြက်သွန်ဖြူကို အခွံခွာပြီး အလုံးလိုက် ရေဆေးကာ ခပ်ကြမ်းကြမ်း ထောင်းထားပါ။ ကြက်သွန်နီ အခွံခွာပြီး အလုံးလိုက်ရေဆေးကာ ခပ်ကြမ်းကြမ်း ထောင်းထားပါ။
ချင်းကို အခွံခွာပြီး ရေဆေးကာ ညက်နေအောင် ထောင်းပေးပါ။ စပါးလင် အရင်းပိုင်းကို ရေဆေးပြီး ခပ်ပါးပါးလှီးကာ ညက်နေအောင် ထောင်းပေးပါ။
ဒယ်အိုးထဲ ဆီထည့်ပြီး နနွင်းမှုန့် လက်ဖက်ရည်ဇွန်း သုံးပုံတစ်ပုံ ထည့်ပေးပါ။ ဆီပူလာတာနဲ့ ကြက်သွန်ဖြူ ကြက်သွန်နီ စပါးလင် ချင်းထောင်းတို့ကို ထည့်ပြီးဆီသတ်ပေးပါ။ ကြက်သွန်ဆီသတ်နံ့ မွှေးလာတာနဲ့ အရိုးထွင်ထားသော ငါးနှင့် အရသာမှုန့် လက်ဖက်ရည်ဇွန်း တစ်ဇွန်းမောက်မောက်ကို ထည့်မွှေပေးပါ။ ဆီသတ်နံ့ သင်းလာပြီ ဆိုတာနဲ့ မီးပိတ်ပေးထားပါ။
ကြက်သွန်ဖြူကို အခွံခွာပြီး ရေဆေးကာ မညက်တစ်ညက် ထောင်းပေးပါ။ ကြက်သွန်နီ အလုံးသေးများကို အခွံခွာပြီး ရေဆေးထားပါ။ ဇောက်နက်သော အိုးတစ်လုံးထဲ ငါးပြုပ်ရည် ငါးအရိုးကိုထောင်းပြီး အရည်ငင်ထားသော ငါးရိုးအရည် ငါးဆီသတ်များနှင့် ရေ ၃လီတာခန့်ထည့်ပြီး မီးအနေတော်နှင့် တည်ပေးပါ။ ရေဆူလာတာနဲ့ ကြက်သွန်နီ ဥအသေးများကို ထည့်ပေးပါ။ ကြက်သွန်နီဥထည့်ပြီး ရေပွက်ပွက် ဆူလာတာနဲ့ ဆား ငံပြာရည် အရသာမှုန့်တို့ကို သင့်သလိုထည့်ပြီး သမအောင် မွှေပေးပါ။
ဟင်းရည်အိုး ပွက်ပွက်ဆူလာပြီး ကြက်သွန်များ နူးလာပြီ ဆိုရင်တော့ ထောင်းထားသော ကြက်သွန်ဖြူကို ထည့်မွှေပေးပါ။ ပြီးတာနဲ့ အရသာကို မြည်းပေးပြီး မိမိစိတ်ကြိုက် အရသာ ရလာအောင် ပြင်ပေးပါ။ အရသာ ပြင်ပေးပြီးတာနဲ့ တောင်ငူမုန့်ဟင်းခါး ဟင်းရည်ကျဲ ပူပူလေး ရပါပြီ။
ကြက်သွန်ဖြူကို အခွံခွာပြီး ရေဆေးကာ အကွင်းလိုက် ခပ်ပါးပါး လှီးပေးပါ။ ဆီကိုအပူပေးပြီး နနွင်းမှုန့်ထည့်ပါ။ ဆီပူလာတာနဲ့ ကြက်သွန်ဖြူကို ထည့်ကြော်ပါ။ ကြက်သွန်များ အဝါရောင် သန်းလာပါက ဆီပြီးဆီစစ်ထားပါ။ ဆီချက်အေးသွားတော့မှ ကြက်သွန်ကြော်နှင့် ပြန်ရောထားပေးပါ။ကောက်ညှင်းပေါက်ပေါက် ဆန်လှော်ထောင်းရန်
ကောက်ညှင်းစပါးကိုလှော်ပြီး ရလာသော ပေါက်ပေါက်ကို မညက်တစ်ညက်လေး ရလာအောင် ထောင်းထားပါ။
ကြက်ဥကို ကျက်အောင်ပြုပ်ပြီး အခွံခွာထားပါ။ ခရမ်းချဉ်သီးကို ရေဆေးပြီး ခပ်ပါးပါး လှီးထားပါ။ နံနံပင်ကို ရေဆေးပြီး ခပ်ကြမ်းကြမ်း လှီးထားပါ။ ပူစီနံကို ရေဆေးပြီး ပြင်ထားပါ။ ပဲတောင့်ရှည်ကို အတောင့်လိုက် ရေဆေးကာ အနေတော် လှီးထားပါ။ ငရုတ်သီး အလှော်မှုန့် ပြင်ထားပါ။ ကောက်ညှင်းဆန်လှော်မှုန့် ပြင်ထားပါ။ ကြက်သွန်ဖြူဆီချက် ပြင်ထားပါ။ မုန့်ဖတ်ကို ပြင်ထားပါ။
ဘဲဥကို ကျက်အောင်ပြုပ်ပြီး အခွံခွာထားပါ။ သံပုရာသီးကို ရေဆေးပြီး အနေတော် လှီးထားပါ။ ဟင်းရည်ကို ပူပူလေး ဖြစ်အောင် ပြင်ထားပေးပါ။ လိုအပ်သော ပါဝင်ပစ္စည်းများ ပြင်စဉ်ပြီးပါက မိမိတို့ နှစ်သက်သလို စားသုံးနိူင်မည့် တောင်ငူ မုန့်ဟင်းခါးကို ရပါပြီ။`,UserType:"001"},{Guid:"6a0239c9-be62-4ec5-ba96-ecb915464150",Name:"ရွှေကြည်မှုန့် မုန့်ဟင်းခါး",Ingredients:`မုန့်ဖတ် - တစ်ကီလို
ငါးဆီသတ်ပြီးသား - လက်ဖက်ရည်
အကြမ်းပန်းကန် - တစ်လုံးမောက်မောက် (ဖိထည့်ပေးပါ)
ကုလားပဲခြမ်း - ထမင်းပေါင်းအိုး ဆန်ချင်ဗူး တစ်ဗူး
နနွင်းမှုန့် - လက်ဖက်ရည်ဇွန်း သုံးပုံတစ်ပုံ
ဆား - လက်ဖက်ရည်ဇွန်း တစ်ဝက်
မြေပဲလှော်ပြီးသား - ထမင်းစားဇွန်း သုံးဇွန်း
ရွေကြည်အလှော်မှုန့် - ထမင်းစားဇွန်း ၇ဇွန်း
ကြက်သွန်နီ - အလုံးသေး ၁၀လုံး
ငှက်ပျောအူ - မိမိနှစ်သက်သလောက်
ကြက်ဥ - နှစ်လုံး
ဆား - လက်ဖက်ရည်ဇွန်း တစ်ဇွန်းခွဲ
ငါးငံပြာရည်- ထမင်းစားဇွန်း လေးဇွန်း
အချိုမှုန့် - လက်ဖက်ရည်ဇွန်း တစ်ဇွန်း
ငရုတ်ကောင်းမှုန့် - လက်ဖက်ရည်ဇွန်း တစ်ဇွန်း
နံနံပင် - မိမိနှစ်သက်သလောက်
ပဲသီး - မိမိနှစ်သက်သလောက်
ကြက်သွန်ဖြူ ဆီချက်ဖတ် - မိမိနှစ်သက်သလောက်
ခရမ်းချဉ်သီး - မိမိနှစ်သက်သလောက်
ငရုတ်သီး အလှော်မှုန့် - မိမိနှစ်သက်သလောက်
သံပုရာသီး - မိမိနှစ်သက်သလောက်
ပဲကြော် - မိမိနှစ်သက်သလောက်
ါးဖယ်ကြော် - မိမိနှစ်သက်သလောက်
ရေ - နှစ်ခွက် (ဆန်မှုန့် အရည်ဖျော်ရန်)
ရေ - ၂၀ခွက် (မုန့်လုပ်ရာတွင် ချင်တွယ်သောခွက်) ဟင်းရည်ချက်ရန်
ကြက်သွန်ဖြူ - အမွှာကြီးကြီး ၂၀မွှာ (ဆီချက်ချက်ရန်)
ဆီ - မုန့်လုပ်ရာတွင် ချင်သောခွက် သုံးဗူးစာ (ဆီချက်ချက်ရန်)
နနွင်းမှုန့် - လက်ဖက်ရည်ဇွန်း တစ်ဝက် (ဆီချက်ချက်ရန်)`,CookingInstructions:`ကုလားပဲခြမ်းကို ရေစင်အောင်ဆေးပြီး အိုးတစ်လုံးထဲကို ထည့်ပေးပါ။ ထိုအိုးထဲမှာ ပဲအထက် ရေလက်သုံးလုံးလောက်နှင့် ဆား နနွင်းမှုန့်တို့ထည့်ပြီး ပဲကိုပြုတ်ပေးပါ။ ပဲအိုးထဲမှ ရေခမ်းသွားပြီး ပဲနူးသွားပါက မီးပိတ်ပြီး အအေးခံထားပါ။ ပဲများအေးသွားပါက ပဲများကျေသွားအောင် ချေပေးပြီး ဇကာတိုက်ပြီး စစ်ပေးထားပါ။
မြေပဲကို မညက်တစ်ညက် ထောင်းထားပါ။ ငရုတ်ကောင်းကို မွှေးလာအောင် လှော်ပေးပြီး ညက်နေအောင် ထောင်းထားပေးပါ။ ရွှေကြည်အလှော်မှုန့်ကို ရေ နှင့် ဖျော်ထားပါ။ ဆား အချိုမှုန့် ငရုတ်ကောင်းမှုန့်နှင့် ငါးငံပြာရည်ဆို့ကို ပြင်ထားပါ။ ကြက်သွန်နီကို အခွံခွာပြီး ရေဆေးထားပါ။ ငှက်ပျောအူကို အကြောသင်ပြီး ခပ်ပါးပါးလှီးကာ နနွင်းရည်မှာ စိမ်ထားပါ။
ကြက်ဥကို ကျက်အောင်ပြုပ်ပြီး အခွံခွာထားပါ။ ကြက်ဥ နှစ်လုံးကို ခပ်ပါးပါး လှီးထားပါ။ အားလုံးအဆင်သင့် ဖြစ်တာနဲ့ ဇောက်နက်သော အိုးတစ်လုံးထဲမှာ ရေ ဆား ငါးငံပြာရည် မြေပဲထောင်း အချိုမှုန့် ငါးဆီသတ်နှင့် ပဲအနှစ်များကို ထဲ့ပေးပြီး မီးဖိုပေါ်တင်ပြီး တည်ပေးပါ။ ဟင်းရည်အိုး ပွက်ပွက်ဆူလာပါက အရည်ဖျော်ထားသော ရွှေကြည်အလှော်မှုန့် ငှက်ပျောအူနှင့် ကြက်သွန်နီတို့ကို ထည့်ပေးပြီး ဆက်တည်ပေးပါ။ ဆန်မှုန့်များ အနည်ထိုင်ပြီး အိုးမက်စေရန် မကြာမကြာ မွှေပေးပါ။ ငှက်ပျောအူများ နူးလာပါက လှီးထားသော ကြက်ဥများနှင့် ငရုတ်ကောင်းမှုန့်တို့ကို ထည့်ပေးပါ။
ပြီးတာနဲ့ အရသာမြည်းပြီး မိမိစိတ်ကြိုက် အပေါ့အငံ အရသာ ရလာအောင် ပြင်ပေးပါ။ အရသာ ပြင်ပေးပြီးတာနဲ့ မီးကိုပိတ်လိုက်ပြီး လက်ကျန်မီးအပူရှိန်နှင့် မီးဖိုပေါ်မှာ တင်ထားပေးပါ။ ဟင်းရည် ခပ်ပြစ်ပြစ် မကြိုက်ပါက ရေနွေးဆူပြီးသားကို လိုသလောက် ထပ်ရောပြီး အရသာကို အနည်းငယ် ပြင်ပေးနိူင်ပါတယ်။ ငှက်ပျောအူ မရှိပါက ကြာစွယ်ထည့်ပြီး ချက်နိူင်သလို ထဲ့မချက်လဲ ရပါတယ်။ဆန်လှော်မှုန့်မရှိက ရွှေကြည်အလှော်မှုန့်ကို ဆန်မှုန့်အချိုးအစားထက် နည်းနည်းလျော့ထည့်ပြီး ထည့်ချက်နိူင်ပါတယ်။
ကြက်သွန်ဖြူကို အခွံခွာပြီး ရေဆေးကာ မညက်တညက် ထောင်းပေးပါ။ ဒယ်အိုးထဲမှာ ဆီနှင့်နနွင်းမှုန့်ထဲ့ပြီး အပူပေးပါ ။ ဆီပူလာတာနဲ့ မီးကိုအနေတော် လျှော့ပေးပြီး ကြက်သွန်ဖြူထောင်းကို ထဲ့ကြော်ပေးပါ။ ကြော်နေစဉ် အကျက်ညီစေရန် မွှေမွှေပေးပါ။ ကြက်သွန်အားလုံး ရွှေဝါရောင် သန်းလာတာနဲ့ ဆယ်ပြီးဆီစစ်ပေးကာ အအေးခံထားပေးပါ။ ဆီနှင့် ကြက်သွန်ကြော်များ အေးသွားပါက ပန်းကန်တစ်ခုထဲမှာ ရောထဲ့ပေးထားပါ။
မုန့်ဖတ်နှင့် ဟင်းရည်တို့ကို ပြင်ထားပါ။ နံနံပင်ကို ရေဆေးပြီး အနေတော် လှီးထားပေးပါ။ ပဲသီးကို ရေဆေးပြီး ခပ်သေးသေးလေးတွေ လှီးထားပေးပါ။ ပူစီနံကို ရေဆေးထားပါ။ ခရမ်းချဉ်သီးကို ရေဆေးပြီး ခပ်ပါးပါးလေးတွေ လှီးထားပါ။ သံပုရာသီးကို ရေဆေးပြီး အစိတ်လေးတွေ လှီးထားပေးပါ။ ပဲကြော်နှင့် ငါးဖယ်ကြော်ကို ပြင်ထားပေးပါ။ မိမိနှစ်သက်ရာ အကြော်တို့ကို ပြင်ထားပေးပါ။
ကြက်သွန်ဖြူဆီချက်နှင့် ငရုတ်သီးအလှော်မှုန့်တို့ကို ပြင်ထားပါ။ အားလုံးအဆင်သင့် ဖြစ်တာနဲ့ ပန်းကန်တစ်ခုထဲမှာ မုန့်ဖတ်နှင့်အတူ မိမိနှစ်သက်ရာတို့ကို အနည်းငယ်စီ ထဲ့ပေးပြီး မုန့်ဟင်းရည်ဆမ်းကာ မိမိနှစ်သက်သလို စားသုံးနိူင်ပါပြီ။
မှတ်ချက် ။ ။ အငံအရသာကိုတော့ မိမိတို့စိတ်ကြိုက် ထဲ့ပေးနိူင်ပါတယ်။မာမာကတော့ အငံအရသာ ခပ်ပေါ့ပေါ့စားတဲ့အတွက် အငံအရသာကို လျှော့ပေးပြီး ချက်ထားပါတယ်။`,UserType:"001"},{Guid:"cd9a1698-cfba-43f1-863b-91a20a1424a5",Name:"ကြက်သား မုန့်ဟင်းခါး",Ingredients:`ကြက်သား – ၄၀ဝ ဂရမ် (၂၅ ကျပ်သားခန့်)
ကြက်သားမှုန့် – စားပွဲဇွန်း ၁ ဇွန်း
ချင်း – ၁ လက်မအရွယ်
စပါးလင် – ၃ ချောင်း
ကြက်သွန်နီ – ၂ လုံး
ကြက်သွန်ဖြူ – ၁၀ မြွှာ
ကြက်သွန်နီဥသေး – ၁၀ လုံး
နနွင်းမှုန့် – အနည်းငယ်
ဆား – သင့်ရုံ
ငံပြာရည် – သင့်ရုံ
ငါးပိ – စားပွဲဇွန်း ၁ ဇွန်း (မောက်မောက်)
မွှေးကုလားပဲ အစိမ်းမှုန့် – ၄၀ ဂရမ် ( ၂ ကျပ်ခွဲသား)
ဆီ – ၄၀ ဂရမ်ခန့်
ရေ – အနည်းငယ်
ငရုတ်သီးအရောင်တင်မှုန့် – အနည်းငယ်`,CookingInstructions:`ဟင်းရည်ချက်မည့်အိုးထဲ ကြက်သား၊ ကြက်သားမှုန့်၊ နနွင်းမှုန့်၊ ငါးပိ၊ ငံပြာရည်၊ ရေ အနည်းငယ် တို့ထည့်ပြီး ပြုတ်ပါ။ မီးအေးအေးနဲ့ ကြာကြာပြုတ်ပါ။ သို့မှသာ အသားနူးမြည့်ပြီး အချိုရည် ထွက်လာပါမယ်။
ကြက်သားနူးသွားသည့်အခါ အိုးမှ ဆယ်ယူပြီး အအေးခံ၍ အသားနွှင်ပါ။
ကြက်သွန်နီ ၂ လုံးကို ပါးပါးလှီးထားပါ။
ချင်း၊ ကြက်သွန်ဖြူနှင့် စပါးလင်အရင်းပိုင်းတို့ကို သီးသန့်စီ ညက်အောင်ထောင်း။ ကြိတ်ထားပါ။
ကုလားပဲအစိမ်းမှုန့်ကို ရေအနည်းငယ်နဲ့ သမအောင် ဖျော်ထားပါ။ အဖုအခဲများ လုံးဝမကျန်စေရပါ။
ဆီသတ်မည့်အိုးထဲ ဆီထည့်ပါ။ ကြက်သွန်နီနှင့် နနွင်းမှုန့်ထည့်၍ ကြော်ပြီး ဆီသတ်ပါ။ တော်တော်ကြီး နွမ်းလာသည့်အခါ ထောင်းထားသည့် ကြက်သွန်ဖြူ၊ စပါးလင်နှင့် ချင်းတို့ကို ထည့်ပြီး ဆီသတ်ပါ။ ရွှေဝါရောင်ပြောင်းပြီး ဆီထွက်လာသည့်အခါ ငရုတ်သီးအရောင်တင်မှုန့်နှင့် ကြက်သားတို့ကို ထည့်မွှေပါ။ မီးအေးအေးနဲ့ မကြာခဏမွှေပေးနေပြီး ဆီပြန်လာသည့်အခါ ပဲရည်ထည့်မွှေပါ။ အိုးကပ်တတ်သည့်အတွက် မီးအေးအေးနဲ့သာ မွှေပေးနေပါ။ ဆီသတ်ပြီးလျှင် ကြက်သားပြုတ်ရည်အိုးကို မီးဖိုပေါ် ပြန်တည်ပါ။
ကြက်သားပြုတ်ရည်ကို ဆူပွက်အောင်တည်ပြီး ဆီသတ်ထားသည်များကို ထည့်မွှေပါ။ မီးမြှင့်ပြီး ဆူအောင် တည်ပါ။
ကြက်သွန်နီဥသေးများကို အခွံနွှာပြီး ထည့်ပါ။ ဟင်းရည်ဆူပွက်လာသည့်အခါ မီးလျှော့ပြီး မီးအေးအေးဖြင့် ဟင်းအရသာကောင်းလာသည်အထိ တည်ထားပါ။ အနည်းဆုံး ၃ နာရီခန့် တည်ထားသင့်ပြီး ရေခန်းသွားလျှင် ရေဆူဆူကို ထပ်၍ ရောနိုင်ပါတယ်။ ဟင်းရည်အရသာမြည်းပြီး လိုအပ်သလို ဆားအပေါ့အငန် ပြုပြင်ပါ။
တွဲဖက်စားသုံးရန် ကြက်ဥပြုတ်၊ ဘဲဥပြုတ်၊ အကြော်၊ နံနံပင်၊ ပဲသီးနှင့် ငရုတ်သီးမှုန့်တို့ကို ထည့်ပြီး သုံးဆောင်ပါ။`,UserType:"001"},{Guid:"9129aeba-6ddf-4704-b302-cd813ad605f0",Name:"မြိတ် မုန့်ဟင်းခါး",Ingredients:`မုန့်ဟင်းခါးဖတ် – ၁ပိသာ
ငါးကြင်း – ၄၀ ကျပ်သား (ငံပြာရည်၊ ဆနွင်းမှုန့်၊ စပါးလင် ရေနည်းနည်းဖြင့် ပြုတ်ပြီ အသားထွင်ထားပေးပါ)
ဌက်ပျောအူ – ၁ပင် (အရင့်များဖယ်ပြီ အနုများကို ပါးပါးလှီးပြီလျှင် ဆနွင်း(လက်ဖက်ရည်ဇွန်း ၁ဇွန်း)ထည့်ကာ ရေရော စိမ်ထားပေးပါ)
မှတ်ချက် ။ ။ ဆနွင်းစိမ်ခြင်းမှာ ဌက်ပျောအူများ မမဲသွားရန်ဖြစ်သည်။
နံနံပင်၊ ပဲသီး၊ ပူစီနံ – ၁စည်း (ပါးပါးလှီးထားပါ)
ကြိုက်နှစ်သက်ရာ အကြော်
ကြက်သွန်နီ – ၃၀ကျပ်သား (ထောင်းထားပါ)
ကြက်သွန်ဖြူ – ၁၅ကျပ်သား (ထောင်းထားပါ)
ဂျင်း – ၅ကျပ်သား (ထောင်းထားပါ)
စပါးလင် – ၃ပင် (နှုတ်နှုတ်စဉ်းထားပါ)
ဆီ – ၁၀ကျပ်သား
ငရုတ်ပွနီ – ၅ထောင့် (ထောင်းပြီ ကြိတ်ထားကာ ငရုတ်သီးနှစ်ယူပါ)
ဆနွင်းမှုန့် – လက်ဖက်ရည်ဇွန်း ၁ဇွန်း
ငရုတ်ကောင်းမှုန့် – စားပွဲတင်ဇွန်း ၁ဇွန်း အမောက်
ကြက်သွန်နီ – ၂၀လုံး (အခွံခွာထားပေးပါ)\r`,CookingInstructions:`ငါးကြင်းကို ငံပြာရည်(လက်ဖက်ရည်ပန်းကန်လုံး တဝက်)၊ ဆနွင်းမှုန့်(လက်ဖက်ရည်ဇွန်း ၃ပုံ၁ပုံ)၊ စပါးလင်(၁ပင်)ကို ချည်ပြီ ပြုတ်ပေးထားပါ။ငါးပိကြိုက်သူများငါးပိအနည်းငယ်ထည့်နိုင်၏။
ပြီးလျှင် ပြုတ်ပြီသား ငါးကြင်းကို အသားနွင်းပေးပါ။ ရလာသော ငါးကြင်းအရိုးများကို စပါးလင်(ပါးပါးလှီးထားသော စပါးလင်များဖြင့် ရောထောင်းပေးပါ။ ပြီမှ ရေဖြင့်ကျင်ကာ အရိုးပြုတ်ရေများကို စစ်ယူထားပြီ ဖယ်ထားပေးပါ။
ဒယ်အိုးထဲသို့ ဆီထည့်ပြီ ဆီပူလာလျှင် ထောင်းထားသော ကြက်သွန်ဖြူ၊ ကြက်သွန်ဖြူ၊နီ၊ စပါးလင်၊ ဂျင်းတို့ကို အရင် ဆီသတ်ပေးပါ။
နောက်မှ ငရုတ်သီးအနှစ်၊ ဆနွင်းမှုန့်တို့ကို ထည့်ရောမွှေလိုက်ပါ။ ပြီးနောက် ငါးအသားများထည့်၊ ငရုတ်ကောင်းမှုန့် (လက်ဖက်ရည်ဇွန်း ၁ဇွန်း)စာ ထည့်မွှေလိုက်ပါ။
ငါးဆီသတ်ပြီလျှင် မုန့်ဟင်းခါးချက်ရန် ဒယ်အိုးကြီး တစ်ခုထဲသို့ (အကွင်းလှီးထားသော ဌက်ပျောအူများ၊ ငါးဆီသပ်၊ ငါးပြုတ်ရည်၊ ငါးအရိုးထောင်းရည်များ၊ စပါးလင်(၂ပင် ချည်ပြီသား))တို့ကို ထည့်ကာ ရောမွှေလိုက်ပါ။
ဌက်ပျောအူထဲ အချိုအရသာများ စိမ့်ဝင်သွားရန် အနည်းငယ် တည်ထားပေးပါ။ ဌက်ပျောအူ နွမ်းသွားပါမှ ရေနွေး(ရလီတာ)ကို ထည့်ပါ။ ပြီးလျှင် ပြန်ဆူအောင် တည်ထားပြီမှ အပေါ့အငံ့အတွက် ကြက်သားမှုန့်၊ ငံပြာရည်(၁ခွက်)၊ ဆား(စားပွဲတင်ဇွန်း ၁ဇွန်း)တို့ကို ထည့်ပေးပါ။
ကျက်ခါနီးမှ ကြက်သွန်နီများကို အလုံးလိုက် ထည့်လိုက်ပါ။ ကြက်သွန်နီများ နူးသွားလျှင် မုန့်ဟင်းခါးဖတ်၊ နံနံပင်၊ ပဲသီး၊ ပူစီနံ မိမိကြိုက်နှစ်သက်ရာ အကြော်များ ထည့်၍ တည့်ခင်းသုံးဆောင်နိုင်ပါပြီ`,UserType:"001"},{Guid:"c1332978-d0be-4219-89f6-eafb0a26be65",Name:"ကင်းမွန် အချိုချက်",Ingredients:`ကင်းမွန်
ရေ
ရှာလကာရည် 
ကြက်သွန်နီ 
ပဲငံပြာရည်အကျဲ`,CookingInstructions:"ကင်းမွန်ကို ရေဆေးသန့်စင်ပီးရေစစ်ထား။ရေ ပွက်ပွက်ဆူအောင်တည်၊ရေဆူလာရင်ရှာလကာရည် စတီးဇွန်းတစ်ဇွန်းထည့် ကင်းမွန်တွေထည့် 2/3မိနစ်လောက်တည်ပီးရေပြန်ဆေး ရေစစ် အရသာနယ်ထားပီး ကြက်သွန်နီ အကွင်းလိုက်လှီး ဆီသပ် ကြက်သွန်မကျက်ခင် ကင်းမွန်ထည့် ၊ခရုဆီ၊ ပဲငံပြာရည် အကျဲထည့် မွှေ ခနဆိုရပါပီ အိုးချခါနီး ကြက်သွန်မိတ်လေးအုပ်လိုက်ရုံပါပဲ",UserType:"001"},{Guid:"e6ca404e-0588-4bde-b5ee-4919df74b78f",Name:" မုန့်ကြာစေ့",Ingredients:`မွှေးကောက်ညှင်းမှုန့်
ရေ
ထန်းလျှက်ရည်
အုန်းသီး`,CookingInstructions:"မွှေးကောက်ညှင်းမှုန့်လေးကို အလုံးလေးတွေလုံးလို့ရရုံ ရေထည့် နယ် လုံး၊‌ေရဆူဆူမှာထည့် ၊‌အလုံးလေးတွေပေါ်လာရင်ဆယ်ပီးရေအေးစိမ်၊ရေစစ်ထား ။ထန်းလျှက်ရည် ကျိုပီး အမှုန်တွေစစ်ထုတ်၊ပြန်ကျို မပျစ်မကျဲအနေရရင် မုန်ကြာစေ့လေးထည့် ဆူအောင်တည်။ အုန်းသီးလေးခြစ်ထည့် အိမ်လုပ်မုန့်ကြာစေ့လေးရပါပီ",UserType:"002"},{Guid:"a65516da-ce42-42cd-8c3d-2fb992b6ebe6",Name:"ဒန့်သလွန်ခရမ်းချဉ်သီးချဉ်ရေဟင်း",Ingredients:`ဒန့်သလွန်သီး
ကြက်သွန်နီ
ခရမ်းချဉ်သီး 
ငရုတ်စိမ်းမှုန့်
ငံပြာရည် 
ဆား
 အချိုမှုန့် 
ရေ`,CookingInstructions:`ဒန့်သလွန်သီးကို အပေါ်ခွံမှ အမျှင်များအား ဓါးဖြင့်ခြစ်ချပေးပါ။ ကြက်သွန်နီ ခရမ်းချဉ်သီး လှီးထားပေးပါ။ ကြက်သွန်နီကို အရင်ဆုံးဆီသပ်ပါ။ ငရုတ်စိမ်းမှုန့် နှင့် ငံပြာရည် အနည်းငယ်ထည့်ပြီး ဆီသပ်ပါ။ ပြီးမှ ခရမ်းချဉ်သီးထည့်ပါ။ ခရမ်းချဉ်သီးကျေပြီဆိုမှ ဒန့်သလွန်သီး ငရုတ်သီးစိမ်း ဆား အချိုမှုန့် ရေအနည်းငယ် ထည့်ပြီး ချက်ပေးပါ။ မီးဖိုပေါ်မှ အိုးချခါနီး နံနံပင်အုပ်ပါ။
`,UserType:"002"},{Guid:"ec8d8f2c-119c-4369-ba86-a4385dd2b207",Name:"ငါးပြေမဒန့်သလွန်ဆီပြန်ဟင်း",Ingredients:`ငါးပြေမ
ဒန့်သလွန်သီး
ကြက်သွန်နီ
ခရမ်းချဉ်သီး 
ငရုတ်စိမ်းမှုန့်
ငံပြာရည် 
ဆား
 အချိုမှုန့် 
ရေ`,CookingInstructions:`ဒန့်သလွန်သီးကို အပေါ်ခွံမှ အမျှင်များအား ဓါးဖြင့်ခြစ်ချပေးပါ။ ငါးပြေမအား ဆား ဆနွင်း အရသာမှုန့် ထည့်နယ်ပါ။ ကြက်သွန်နီ ခရမ်းချဉ်သီး လှီးထားပေးပါ။ ကြက်သွန်နီကို အရင်ဆုံးဆီသပ်ပါ။ ငရုတ်စိမ်းမှုန့် နှင့် ငံပြာရည် အနည်းငယ်ထည့်ပြီး ဆီသပ်ပါ။ ပြီးမှ ခရမ်းချဉ်သီးထည့်ပါ။ ခရမ်းချဉ်သီးကျေပြီဆိုမှ ငါးပြေမ ဒန့်သလွန်သီး ငရုတ်သီးစိမ်း ဆား အချိုမှုန့် ရေအနည်းငယ် ထည့်ပြီး ဆီပြန်လာသည်အထိချက်ပေးပါ။ မီးဖိုပေါ်မှ အိုးချခါနီး နံနံပင်အုပ်ပါ။
`,UserType:"001"},{Guid:"39ae3ad7-1483-454b-b8ab-fc65d49f9a11",Name:"ဒန့်သလွန်သီးငါးခြောက်ဟင်း",Ingredients:`ဒန့်သလွန်သီး
ကြက်သွန်နီ
ခရမ်းချဉ်သီး 
ငရုတ်စိမ်းမှုန့်
ငံပြာရည် 
ဆား
 အချိုမှုန့် 
ရေ
ကြက်သွန်ဖြူ
ငပိစိမ်း
ဘူးသီး သို့ အာလူး 
ငါးခြောက်
 မန်ကျည်းရည်`,CookingInstructions:"ဒန့်သလွန်သီးကို ဓားနဲ့အခွံကိုခြစ်ပြီး အပိုင်းပိုင်းဖြတ်ထား ဘူးသီး သို့ အာလူးကိုလည်းအခွံခွာပြီး လှီးထားပါ ခရမ်းချဉ်သီးနှစ်လုံးကိုလည်း လှီးထားပါ ကြက်သွန်ဖြူနီကိုမညက်တညက်လေးထောင်းပြီး အရောင်ရဲတဲ့ထိဆီသပ် ပြီးမှ ငရုတ်စိမ်းမှုန့် နဲ့ ခရမ်းချဉ်သီး ငပိစိမ်းစား ဒန့်သလွန် ဘူးသီး သို့ အာလူး ငါးခြောက် ငရုတ်သီးစိမ်း စားနိုင်မယ့်ရေပမာဏထည့်ပြီး ပွက်ပွက်ဆူသည်အထိချက်ရုံပါဘဲ ငါးခြောက်ကိုအသားများပြီး အတုံးခပ်ကြီးကြီးတုံးထားတာထည့်ပါ ဒါမှ ချက်တဲ့အခါ အတုံးမပျက်ဘဲ အသားတွေကျေမသွားဘဲ အမြင်လှပါမယ် ငါးခြောက်ကို ငါးကွမ်းရှပ်သုံးထားပါတယ်နော် ချဉ်ချဉ်လေးစားလိုသူတွေက မန်ကျည်းရည်လေးထည့်ချက်ပါ နံနံပင်ကြိုက်ရင်ထည့်နိုင်ပါတယ်",UserType:"002"},{Guid:"7890a372-badf-443a-a6f4-22c2c7aa5c8f",Name:`ပုဇွန်ဒန့်သလွန်သီးချဉ်ရေဟင်း
`,Ingredients:`ပုဇွန်
ကြက်သားမှုန့်
ကြက်သွန်နီ
ဆီ
ငရုတ်စိမ်းမှုန့်
ဒန့်သလွန်သီး
ဆား 
မန်ကျည်းအရည်`,CookingInstructions:"ပုဇွန်ကိုခေါင်းဖြုတ်သန့်စင်ပြီး ကြက်သားမှုန့်နယ် ကြက်သွန်နီညက်အောင်ထောင်းပြီး ဆီသပ် ငရုတ်စိမ်းမှုန့်ထည့် ပုဇွန့်ထည့် ဒန့်သလွန်သီးထည့် ဆား ကြက်သားမှုန့် စားနိုင်သလောက် ရေထည့်ပြီးတည်။ ဆူရင် မန်ကျည်းအရည်လေးဖျော်ထည့်ပါ။",UserType:"001"},{Guid:"9634eac5-373e-4b6e-bf3c-abae64136495",Name:"ဘဲဥဒန့်သလွန်ချဉ်ရည်ဟင်း",Ingredients:`ဘဲဥ
ဆား
ဒန့်သလွန်သီး
ရေအေး
ကြက်သွန်နီ
ကြက်သွန်ဖြူ
ငရုတ်ခြောက်
ဆီ
မျှစ်
ငံပြာရည်
အချိုမှုန့် 
ငရုတ်သီးစိမ်း `,CookingInstructions:`ဘဲဥကိုဆားထည့်ပြီးပြုတ်ပေးပါ။ ပြီးမှ အခွံခွာကာ နှစ်ခြမ်းစိတ်ထားပေးပါ။ ဒန့်သလွန်သီးကို အပေါ်ခွံမှ အမျှင်များအား ဓါးဖြင့်ခြစ်ချပေးပါ။ မျှစ်ကို မိနစ်၂၀ခန့်ပြုတ်ထားပေးပါ။ မန်းကျည်းအရည်ဖျော်ထားပေးပါ။ ကြက်သွန်ဖြူနီနှင့်ငရုတ်ခြောက်အနီတောင့်တို့အားညက်အောင်ထောင်းထားပေးပါ။ ပြီးမှ ဆီသပ်ပါ။ ဆီသပ်နေစဉ် အနံ့မွှေးစေရန် ငံပြာရည်အနည်းငယ်ထည့်ဆီသပ်ပါ။ ပြီးမှ ဒန့်သလွန်သီး ဘဲဥနှင့်မျှစ်အားထည့်ပါ။ ရေအနည်းငယ် ဆား အချိုမှုန့် ငရုတ်သီးစိမ်း ထည့်ပြီး ချက်ပေးပါ။ ဟင်းအိုးဆူလာပြီဆိုမှ မန်ကျည်းသီးအရည်စစ်ယူထည့်ပေးပါ။ နောက်တစ်ခါ ဟင်းအိုးဆူလာပြီဆို ရပါပြီ။ အရသာအပေါ့အငန်မြည်းကြည့်ပြီး စိတ်ကြိုက်ပြင်ဆင်နိုင်ပါတယ်။
`,UserType:"001"},{Guid:"44afdddc-9a3a-4f89-8d4c-20a1729ea83f",Name:"သတ်သတ်လွတ်ပဲပြားအချိုဟင်း",Ingredients:`ပဲပြား-၂ပြား
ဆား
ဟင်းခတ်မှုန့်
ခရုဆီ
ပျားရည်
ပဲငံပြာရည်
နှမ်းဆီ
ပြောင်းကော်မှုန့်
ငရုတ်သီး
ကြက်သွန်နီ
ကြက်သွန်ဖြူ
နှမ်း`,CookingInstructions:`ပဲပြား-၂ပြားဆား၊ဟင်းခတ်မှုန့်ဖြင့်နယ်ပြီးကြော်ထားပါ။
Sauceအတွက် သတ်သတ်လွတ်မှိုခရုဆီ၁ဇွန်း၊
ပျားရည်၁ဇွန်း၊ပဲငံပြာရည်အပြစ်၁ဇွန်း၊
ပဲငံပြာရည်အကျဲ၁ဇွန်း၊နှမ်းဆီ-၁ဇွန်း၊ပြောင်းကော်မှုန့်တစ်ဇွန်း၊ရေ၂ဇွန်းရောပြီးသေချာသမအောင်မွှေထား
ပါ။(table spoon)
အချောင်းပုံစံခပ်သေးသေးလှီးထားသောချင်း၊ကြက်သွန်နီ၂လုံး၊ကြက်သွန်ဖြူအမွှာကြီး၅မွှာနုတ်နုတ်လှီးပြီးဆီသပ်ပါ။ငရုတ်သီးခြောက်တောင့်ကြော်ထည့်ပါ။ကြက်သွန်ဖြူနီမွှေးပြီးအနဲငယ်အရောင်ပြောင်းလာလျင်ပဲပြားထည့်၊ sauceထည့်ပါ။
ခနမွှေပြီးလျှင်ရေထည့်ပြီးပဲပြားထဲအရသာဝင်ရန်အဖုံးအုပ်ပြီးခနထားပါ။ဆား၊ဟင်းခတ်မှုန့်အရသာစိတ်ကြိုက်ထည့်ပါ။နှမ်းဖြူးပါ။
(ကြက်သွန်ဖြူနီဆီသတ်သောအခါကြွပ်အောင်မကြော်ရပါ)`,UserType:"002"},{Guid:"cb8b4289-5f54-46ec-8078-09009e1fd83e",Name:" ငါးရံ့ဒန့်သလွန်သီးချဉ်ရည်ဟင်း",Ingredients:`ကြက်သွန်ဖြူ/နီ
ဒန့်သလွန်သီး
 ခရမ်းချဉ်သီး 
ငရုတ်သီးစိမ်း 
နံနံပင်
ငံပြာရည်
ငါးရံ့
ငပိစိမ်း
ရေ`,CookingInstructions:"ဒန့်သလွန်သီးအပေါ်ခွံကိုဓါးဖြင့်ခြစ်ပြီးလှီးဖြတ်ထားပါ။ ခရမ်းချဉ်သီး ငရုတ်သီးစိမ်း နံနံပင် လှီးထားပါ။ ငါးရံ့ကိုခုတ်ထစ်ပြီးအရသာမှုန့် ဆနွင်းမှုန့်ဖြင့်နယ်ထားပါ။ ကြက်သွန်ဖြူနီကိုညက်အောင်ထောင်းပြီးဆီသပ်ပေးပါ။ နောက်မှ ငရုတ်စိမ်းမှုန့်နဲ့ငံပြာရည်အနည်းငယ်ထည့်ပြီးအနံ့သင်းလာသည်အထိဆီသပ်ပေးပါ။ ပြီးမှ ငါးရံ့ထည့်ပါ။ အသားတင်းရုံ ရေပါသည်ဆိုရုံလေးထည့်ပြီး ဆီသပ်ကာ မီးပိတ်ထားလိုက်ပါ။ နောက်တစ်အိုးထဲမှာ ခရမ်းချဉ်သီး ငရုတ်သီးစိမ်း ဒန့်သလွန်သီး ငပိစိမ်းစားနဲ့ရေထည့်ပြီး ဆူလာသည်အထိတည်ပါ။ ပွက်ပွက်ဆူပြီဆိုသာမှသာ ဆီသပ်ထားပြီးဖြစ်သော ငါးရံ့အသားတုံးများကို ရောထည့်လိုက်ပါ။ အရသာစိတ်ကြိုက်ပြုပြင်ပါ။ ရေ လိုသလောက်ထည့်ပါ။ မီးဖိုပေါ်မှ အိုးချခါနီး နံနံပင်အုပ်ပါ။",UserType:"001"},{Guid:"3d35f2d0-1839-4970-a78a-902063f6e99d",Name:`ဒန့်သလွန်သီးချဉ်ရေဟင်း
`,Ingredients:`ကြက်သွန်ဖြူ/နီ
ဒန့်သလွန်သီး
ငရုတ်အစိမ်းမှုန့်
ကြက်သားမှုန့် 
မန်ကျည်းသီးအရည်
ရေ`,CookingInstructions:"ကြက်သွန်ဖြူနီညက်အောင်ထောင်း။ သင်ထားပြီးသာဒန့်သလွန်သီးရယ် ကြက်သွန်ဖြူနီထောင်းရယ် ဆနွင်းနည်းနည်း ငရုတ်အစိမ်းမှုန့်ရယ် ကြက်သားမှုန့် လေး နဲ့ ရေအနည်းငယ်ထည့်ပြီးလုံးချက်ပေး။ ဆူပြီဆို မန်ကျည်းသီးအရည်ဖျော်ထားတာလေးထည့်။ ကြာကြာလေးဆူပစေနော်ဒါမှ အရသာပိုဝင်မှာ။ ရေကျဲလေးကြိုက်ရင်ရေများများထည့်ချက်ပါ",UserType:"002"},{Guid:"1464ee06-0feb-463e-8169-88d88e4b72de",Name:"ငါးရံ့ခြောက်၊ ဒန့်သလွန်သီးနှင့်ရုံးပတီသီး",Ingredients:`
ငါးရံ့ခြောက်............၂ကောင်
ဒန့်သလွန်သီး...........၃တောင့်
ရုံးပတီသီး................၅တောင့်
ကြက်သွန်နီသေး........၁ လုံး
ကြက်သွန်ဖြူ...............၅ တက်
ခရမ်းချဉ်သီး................၅ လုံး
ငရုတ်သီးစိမ်း.............၅တောင့်
မန်ကျည်းသီးမှည့်.........အနည်းငယ်
နနွင်း+အရောင်တင်..အနည်းငယ်စီ
ငါးငံပြာရည်............၃ ဇွန်း( ထမင်းစားဇွန်း )
ဟင်းခတ်မှုန့်............၁ ဇွန်း ( လက်ဖက်ရည်ဇွန်း)`,CookingInstructions:`ငါးရံ့ခြောက်ကို အတုံးငယ်လေးများတုံးကာရေကြက်သီးနွေးလေးဖြင့်စိမ်ထားပါ။

ကြက်သွန်နီနဲ့ ကြက်သွန်ဖြူ ကိုရောပြီးညှက်အောင်ထောင်းပါ။

စပ်ရှိန်းရှိန်းလေးစားချင်ရင်ငရုတ်ခြောက်တောင့်၃
တောင့်လောက်ပါရောထောင်းပါ။

ခရမ်းချဉ်သီးကို ခပ်ကြမ်းကြမ်းလှီးပါ ( ကိုင်းခရမ်းချဉ်ဆို ပိုကောင်းပါသည်)

ဒန့်သလွန်သီးတွေကို ဓါးနဲ့ခြစ်ထုတ်ပြီး၂ လက္မ
အရှည်လောက်ပိုင်းဖြတ်ပါ။

ဒယ်အိုးတစ်လုံးအောက်ခြေမှာနနွင်း+ အရောင်တင်မှုန့်နှင့်ရောထောင်းထားသော အရောကို အောက်ကထည့်ပြီးခရမ်းချဉ်သီးတွေဖြန့်ထည့်ပါ။

ငါးငံပြာရည်၊ ဟင်းခတ်မှုန့်တို့နှင့်အရသာသွင်းပါ။

ဆီကိုဒယ်အိုးပတ်လည်မှအနည်းငယ်လောင်း
ထည့်ကာမွှေပေးစရာမလိုလောက်တဲ့ မီးအရှိန်မှာ ဆီပြန်လာသည်အထိချက်ပေးပါ။

ဆီပြန်လာပြီဆိုရင်တော့ရေနွေးစိမ်ထားတဲ့ငါးခြောက်တွေထည့်ကာညင်သာစွာမွှေပေးပါ။ရေအနည်းငယ်ဖြည့်စွက်ပြီးနောက်တစ်ကြိမ်ဆူပွက်လာသည်အထိချက်ပေးပါ။

‌ပြန်လည်ဆူပွက်လာပြီဆိုရင် ၊ ဒန့်သလွန်သီးတွေထည့်ကာဖြည်းညင်းစွာသမအောင်မွှေပေးပါ။
‌
မန်ကျည်သီးမှည့်အရည်လေးအနည်းငယ်လောင်းထည့်ပါ။

ငရုတ်သီးစိမ်း ၊ရုံးပတီသီးတွေထည့်ပြီးခေတ္တအဖုံးပြန်ပိတ်ထားပေးပါ။

နံနံပင်လေးလဲအုပ်ပေးနိူင်ပါတယ်။`,UserType:"001"},{Guid:"6c411b33-8530-4500-875e-9aa289c1b539",Name:"ဘဲစတဲဥစတု အာလူး ဒန့်သလွန်သီးဟင်းယေး",Ingredients:`ဘဲဥ
အာလူး
ဆား
နနွင်း
ဒန့်သလွန်သီး
ဂျင်း
ကြက်သွန်ဖြူ/နီ
ခရမ်းချဉ်သီး
ရေ
နံနံပင်`,CookingInstructions:`ချက်နည်းကတော့
ဘဲဥကိုပြုတ် ဓါးရာလေးတွေတစ်ပါတ်လည်ပေးထားပါ
အာလူးကိုဆားနနွင်းနယ်ပြီးကြော်ပါ
ဒန့်သလွန်သီးအခွံခွာအနေတော်တုံးထားပါ
ဂျင်းကြက်သွန်ဖြူနီကိုငြုပ်သီးအရောင်တင်နနွင်းအနည်းငယ်စီထည့်ထောင်းပါ
ထောင်းပြီးသားကိုဆီသတ်ပါ ရေခမ်းရင် ခရမ်းချဉ်သီးကြိတ်ထားတာထည့်ပါ ရေခမ်းရင် အာလူးကြော် ဘဲဥ ဒန့်သလွန်သီးထည့်မွှေပါ ရေထည့်ပါ
ကျက်ခါနီးနံနံပင်ကြိုက်ရင်ထည့်ပါ`,UserType:"001"},{Guid:"68656393-9f04-41c4-a3e1-1811b6ec20f1",Name:"ပဲစောင်းလျားသီး_ကချင်သုပ်",Ingredients:`ပဲစောင်းလျားသီး 
ခရမ်းချဉ်သီး 
ကြက်သွန်ဖြူ
ငရုတ်သီးစိမ်း
ပဲပုတ်
ပင်စိမ်း
မျှစ်တိုခြောက်
ဆား
အရသာမှုန့်`,CookingInstructions:`ပဲစောင်းလျားသီး ကိုပြုတ်
ခရမ်းချဉ်သီး ပြုတ် or မီးဖုတ်ထည့်
ကြက်သွန်ဖြူ
ငရုတ်သီးစိမ်း
ပဲပုတ်
ပင်စိမ်း
မျှစ်တိုခြောက်
ဆား
အရသာမှုန့် (စားရင်ထည့်)
ဒါတွေထည့်ပြီး သုပ်စားလိုက်ရုံပဲ....`,UserType:"002"},{Guid:"aeb36dfb-bb7c-4355-ab73-f015175283fb",Name:"မာလာငါးကင်နည်း",Ingredients:`တီလားဗီးယားငါး
- ကြက်သွန်ဖြူ
- သန့်စင်ပြီး ပူဒီနာရွက် (၂)စည်းခန့်
- ကြက်သွန်ဖြူဥ အကြီး (၄-၅)မွှာ
- နံနံပင် အနည်းငယ်
- ငရုပ်သီးစိမ်း အနည်းငယ်
- ဂျင်းလက်နှစ်ဆစ်ခန့်
- သံပုရာသီးတစ်လုံး
- ပျားရည် / ဆီ / ထောပတ်/ နံနွင်းမှုန့် / ဆား / ငရုပ်သီးအစိမ်းမှုန့် အနည်းငယ်
အချဉ်ရည်ပြုလုပ်ရန်
- မန်ကျည်းသီးမှည့်အနည်းငယ်
- ကြက်သွန်ဖြူ (၃)မွှာခန့်
- ငရုပ်သီးခြောက်/ ငရုပ်သီးစိမ်းအနည်းငယ်
- နံနံပင်အနည်းငယ်`,CookingInstructions:`၁) နံနံပင်၊ ကြက်သွန်ဖြူ၊ ဂျင်း၊ ငရုပ်သီးစိမ်းများကို အဆင်သင့် ရေဆေးသန့်စင်ထားပါ
၂) ငါးကိုင်ပြီးသားကို ရေစင်အောင်ဆေးပြီး ဆားအနည်းငယ်၊ နနွင်းမုန့်အနည်းငယ်၊ ဂျင်းကိုထောင်းပြီး ရလာသော အရည်အနည်းငယ်တို့ဖြင့် အသားထဲစိမ့်၀င်အောင် နယ်ပြီးနှပ်ထားပါ။ (ငါးမကိုင်တတ်ရင် ၀ယ်တဲ့ဆိုင်မှာ ကင်မှာလို့ပြောပြီး တစ်ခါတည်း ကိုင်ခိုင်းဖို့ မမေ့နဲ့နော်။ အိမ်ရောက်ရင်အဆင်သင့် ရေဆေးရုံပဲ)
၃) ဂျင်း၊ ကြက်သွန်ဖြူ၊ ငရုပ်သီးစိမ်း၊ ပူဒီနာရွက်၊ နံနံပင်တို့ကိုထောင်းပါ။ ပြီးလျှင် ငရုပ်သီးအစိမ်းမှုန့်အနည်းငယ်၊ ဆီထမင်းစားဇွန်း ၂ဇွန်း-၃ဇွန်းခန့်ထည့်ပြီးနယ်ပါ။ ငါးကင်အနံသတ်ဖို့အတွက် အနှစ်ရပါပြီ
၄) ပြီးလျှင်အနှစ်အချို့ကို ငါးကိုယ်အနှံသုတ်လိမ်းပြီး ပိုသည်များကို ငါး၀မ်းဗိုက်ထည့်သို့ ထည့်သိပ်ပါ။ သံပုရာရည်အနည်းငယ် ညှစ်ထည့်လျှင် ပိုကောင်းပါသည်။
၅) ငါးကင်နေစဉ်အပေါ်မှ သုတ်လိမ်းရန် ထောပတ်အနည်းငယ်၊ ပျားရည်နှင့် ဆီ ထမင်းစားဇွန်းတစ်ဇွန်းစီ ခန့် ထည့်ပြီး မွှေထားပါ။
၆) မီးဖိုပြီးသည်နှင့် ကင်နိုင်ပါပြီ။ ထောပတ်နဲ့ ပျားရည်စပ်ထားတဲ့အဆီကို သုတ်လိမ်းပေးဖို့ မမေ့ပါနဲ့နော်….မီးဖိုဖို့အဆင်မပြေတဲ့သူတွေကတော့ Fried Pen (သို့) Microwave ထဲထည့်ပြီး ပြုလုပ်နိုင်ပါတယ်။ မီးခိုးနံ့ သင်း၊ မသင်းပဲ ကွာသွားမှာပါ။`,UserType:"001"},{Guid:"0d04763c-d580-4c6d-a054-5c76611375a5",Name:"ဒညင်းသီးငပိချက်",Ingredients:`၁.ဒညင်းသီး (ပြုတ်ထားပြီးအရွယ်တော်လှီးထားပါ)
၂.ကြက်သွန်နီ ဖြူ (ထောင်းထားပါ)
၃.ငရုတ်နှစ်.ငရုတ်ခွဲကြမ်း
၄.ပုဇွန်ခြောက် (ထောင်းထားပါ)
၅.ငပိ.ဆား.ဆနွင်း.ဆား.dashi.ဆီ
၆.ခရမ်းချဉ်သီး(လှီးထားပါ)
၇.ငရုတ်သီးစိမ်း`,CookingInstructions:`ဒယ်အိုးထဲဆီပူလျှင်ကြက်သွန်နီဖြူဆနွင်းထည့်ဆီသတ်ပါ.ခရမ်းချဉ်သီးထည့်ပြီးလိပ်လာလျှင်ပုဇွန်ခြောက်ထည့်ပါ.ငရုတ်နှစ်ထည့်ပါ. ငပိထည့်ပါ.ငရုတ်ခွဲကြမ်းထည့်ပါ.မွှေးလျှင်ဒညင်းသီးထည့်ပြီးရေထည့်ပါ.ဆား.dashiထည့်ပြီးဆီပြန်အောင်ချက်ပါ.အရသာစိတ်ကြိုက်ပြင်ဆင်ပါ.ဆီပြန်လျှင်ငရုတ်သီးစိမ်းအုပ်ပါ.အရသာရှိစွာသုံးဆောင်နိုင်ပါသည်.
`,UserType:"001"},{Guid:"f6b5db56-5088-4947-bfae-261a42959f9b",Name:"ဆိတ်ပဲချက်နည်း",Ingredients:`ကုလားပဲ
ဆား
ပဲ
ဆနွင်း
ဂျင်း၊အချိုမှုန့်၊ငံပြာရည်
မဆလာ
ဆီ
ရေ
မန်းကျည်းရည်
ကြက်သွန်ဖြူ/နီ
ငရုတ်သီးစိမ်းမှုန့်
ပျင်းတော်သိမ်
ငရုတ်သီးခြောက်`,CookingInstructions:`ကုလားပဲကို ညကထဲက ဆန်ချိန်ခွက် ၂ ဗူးရေစိမ်ထားပါတယ်။ ပဲကို ရေနွေးထည့်ပြီး ပဲမြှပ်အောင်ရေထည့်တည်ပေးပါတယ်။ အရေးကြီးဆုံးက ဆားမထည့်ပါနဲ့နော်။ ဆားထည့်ရင် မနူးတတ်ပါဘူး။ ပဲနူးရင် ရေစင်အောင်ဆေးလိုက်ပါတယ်။ (ပဲအနှစ်တွေ မကြိုက်လို့ပါနော်)
ဆိတ်သားကို မငြီအောင် ဆားဆနွင်းထည့်ဆေးပြီး ရှလကာရည် ဆန်ချိန်ခွက်တခွက်ထည့်ပြီး နှံ့အောင် နယ်ပေးပြီး ၅မိနစ်လောက် ရှလကာရည်နဲ့ နှပ်ပေးထားပါ။ ပြီးရင် ရေနဲ့စင်အောင်ဆေးပြီး ဂျင်း၊အချိုမှုန့်၊ငံပြာရည်နဲ့ မဆလာရောနယ်နှပ်ထားတာပါ (၁နာရီလောက်နှပ်ထားတာပါ)။ 
ဆီ ဟင်းချက်ဇွန်း ၂ ဇွန်းထည့်ပြီး ကြက်သွန်ဖြူနီဂျင်း၊ ငရုတ်သီးစိမ်းမှုန့်နဲ့ ဆိတ်သားကို ဆီသတ်ပါတယ်။ ဆီနာနာသတ်ပြီး ဆိတ်သားမြှပ်အောင် ရေ ၂ရည်ထည့်တည်ပေးပါ။
ရေကုန်ခါနီး ဆီပြန်နေရင် ပြုပ်ထားတဲ့ ကုလားပဲကိုထည့်ပြီး ဆူပွက်လာရင် မန်းကျည်းရည်အနည်းငယ်နဲ့ ဆိတ်သားမဆလာ ခတ်ပေးလိုက်ရင် အရသာလဲရှိ မွှေးလဲမွှေးတဲ့ ဆိတ်ပဲချက်ရပါပြီ။ 
(ပျင်းတော်သိမ်နဲ့ ငရုတ်သီးခြောက်ကို ကြိုက်ရင်ဆီသတ်ပြီး ခတ်လို့ရပါတယ်နော်)`,UserType:"001"},{Guid:"5651e211-24d1-49be-bb35-0f3867398118",Name:"ပဲပြားချဉ်စပ် ချက်နည်း",Ingredients:`ပဲပြား - ၄ တုံး ( လက် ၂ ဆစ်ခန့်အရွယ်တုံးပါ)
ကြက်သွန်နီ - ၃ လုံး( ပုံမှန်အရွယ်)
ကြက်သွန်ဖြူ - ၇ တက်(နုပ်နုပ်စဉ်းပါ)
ခရမ်းချဉ်သီး - ၂ လုံး( ခပ်နုပ်နုပ်စဉ်းပါ)
ပန်းငရုတ်ပွ - ၁ လုံး( လက်မအရွယ်မျှ လှီးပါ)
ဂျုံမှုန်. - အနည်းငယ်
ငရုတ်သီးစိမ်း - ၆ တောင့်( အစပ်ကြိုက်ပါက ထပ်ထည့်ပါ )
ပဲငံပြာရည် - အနည်းငယ် (ဇွန်းနဲ့ချိန်ထည့်ပါ)
ပာင်းခတ်မှုန်. - အနည်းငယ်
ငရုတ်ဆီ - အနည်းငယ်
သံပုရာသီး - တစ်ခြမ်း
ငရုတ်ကောင်းစေ့ - ၈ လုံးခန့် (လှော်ပြီးထောင်းထားပါ)
ကြက်သွန်မြိတ် / နံနံပင် - ၃ ပင်စီ (အနေတော် လှီး/ညှပ် ထားပါ)`,CookingInstructions:`-ဆီကို ပဲပြားမြုပ်အောင် ထည့်ပြီး အပူပေးထားပါ
-ပဲပြားတုံးလေးတွေကိုဂျုံမှုန်.အနည်းငယ်ဖြူးပြီးဆီပူပူမှာ ကြော်ပြီး အဝါရောင်သန်းချိန်မှာ..ဆယ်ယူဆီစစ်ထားပါ။
-ဒယ်အိုးကို အပူပေးပြီး လှီးထားတဲ့ ကြက်သွန်နီ / ဖြူတို.ကိုဆီသတ်ပြီးအနံ့မွှေးလာလျှင်လှီးထားသော ခရမ်းချဉ်သီး၊ ပန်းငရုတ်ပွသီး ၊ ငရုတ်သီးစိမ်းတို.ထည့်ပါ။
‌အ‌ပေါ်ကအနှစ်ရပြီးဆိုလျှင် ကျက်ရုံမျှ‌ ကြော်ထားတဲ့ ပဲပြားတို့ကို ပဲငံပြာရည်အကြည်၊ ပာင်းခတ်မှုန်.၊ ငရုတ်ဆီတို.ထည့်ပြီး အရသာစိမ့်ဝင်အောင် ဖြည်းဖြည်း မွှေပေးပါ ။
-ထို.နောက်..သံပုရာရည်အနည်းငယ်ညှစ်ပြီးငရုတ်ကောင်းမှုန်.ထည့်ပါ။
-နောက်ဆုံးကျက်ခါနီးရင် ကြက်သွန်မြိတ်လေး/ နံနံပင် လေး ထည့်လိုက်ရင်...မွှေပျံ.ပြီး ချဉ်စပ်လေးနဲ့စားကောင်းတဲ့ ပဲပြားချဉ်စပ် ဟင်းလေးရပါပြီ....။`,UserType:"002"},{Guid:"4a665b50-a387-4356-8f8d-a00ca427101f",Name:"မုန်လာချဉ်",Ingredients:`မုန်လာဥဖြူ/နီ
ပျားရည် 
သကြားရည်
ဗီနီဂါရည်
သကြား 
ဆား
ရေ
ငရုတ်သီး`,CookingInstructions:`ကိုယ်တိုင်လုပ် မုန်လာဥချဉ်
ရာသီစာ ကျန်းမာရေးနဲ့ညီညွတ် လုပ်ရတာလွယ်ကူပါတယ်။
မုန်လာဥ ဖြူနီ အခွံခွာ ငရုတ်သီးစိမ်းတို့ကိုရေဆေးပါ။
မုန်လာဥ ဖြူနီကို နှစ်သက်တဲ့အရွယ်အစားလှီးပါ
ပျားရည်တစ်ဇွန်း မရှိ သကြားရည် လုပ်ပြီး ထည့်ပါ
ဗီနီဂါရည် ၆ ဇွန်း 
သကြား ၁ ဇွန်း 
ဆားအနည်းငယ် 
ရေသန့်တို့ကို အားလုံးပျော်အောင်မွှေပေးပါ။
ရေဆေးထားတဲ့ မုန်လာဥဖြူနီ ငရုတ်သီးကို ပုလင်းထဲထည့်ပြီး ဖျော်ထားတဲ့အရည်ကို အပေါ်ကလောင်းထည့်ပါ။
မနက်ကတည်ထားတယ်ဆို ညနေလောက်ဆို ကြွပ်ကြွပ်လေးနဲ့စားကောင်းတဲ့ မုန်လာဥချဉ်ရပါပြီ။
ရေခဲသေတ္တာထဲထည့်ထားပြီး ထားစားလို့လဲရပါတယ်။`,UserType:"002"},{Guid:"94aae6d8-d358-4e2d-9071-53cb6e2df050",Name:"ပိန္နဲသီးချက်",Ingredients:`ပိန္နဲသီးနုနု - တလုံး
ကြက်သွန် - တလုံး
ခရမ်းချဉ်သီး - နှစ်လုံး
ကြက်သွန်ဖြူ - နှစ်မြောင်း
ရှမ်းပဲပုတ် - နှစ်ချပ်
ငရုပ်သီးစိမ်း - ငါးတောင့်
နံနံပင် - အနည်းငယ်
အရောင်တင် - တဇွန်း
္နနနွင်း - အနည်းငယ်
ဆား - လိုသလောက်
ဟင်းခပ်မှုန့် -တဇွန်း`,CookingInstructions:`(၁)ဦးစွာပိန္နဲသီးနုနုကိုအခွံခွာပြီးအကွင်းလိုက်လှီးကာရေဆူတွင်ဆားအနည်းငယ်ထည့်ပြီးပြုတ်ပါ။ထွက်လာသောအမြုပ်များကိုခပ်ထုတ်ပေးပါ။အမြုပ်ကုန်ပြီးပိန္နဲသီးအတွင်းထိကျက်ပါကဆယ်ယူရေစစ်ထားပါ။ရေစစ်ပြီးပါကမိမိလိုသလိုအတုံးငယ်များလှီးဖြတ်ထားပါ။အချို့ဒေသများတွင်ပြုတ်ပြီးသားဝယ်ယူရရှိနိုင်ပါသည်။
(၂)အိုးတခုတွင်ဆီအနည်းငယ်ထည့်ပြီးကြက်သွန်ဆီသပ်ပါ။ (၃)အနည်းငယ်အရောင်ရပါကနနွင်းနှင့်အရောင်တင်ကြက်သွန်ဖြူချပါပြီးလျှင်ခရမ်းချဉ်သီးထည့်ပြီးအနည်းငယ်အနှစ်ကျအောင်ချက်ပါ။ (၄)အနှစ်ကျပါကလှီးပြီးသားပိန္နဲသီးကိုထည့်ပြီးအရသာထည့်ပြီးတည်ပါ။ မကြာမကြာရေအနည်းငယ်ထည့်ပြီးမွေပေးပါ။ (၅)ပိန္နဲသီးအတော်နူးပါကရှမ်းပဲပုတ်ကိုမီးဖုတ်ပြီးမညက်တညက်ထောင်းပြီးဟင်းအိုးထည်းသို့ရောထည့့်ပါ။ငရုပ်သီးစိမ်း၊နံနံပင်တို့ထည့်ပြီးအရသာအပေါ့ငန်မြည်း ၍ဟင်းရည်စပ်စပ်ဖြင့်မီးဖိုမှချကာ တည်ခင်းသုံးဆောင်နိုင်ပါပြီ။
မှတ်ချက်။ မိမိနှစ်သက်ရာအသားဖြင့်လည်းတွဲချက်နိုင်ပါတယ်။ မလေးလူမျိုးများကတော့ငါးပိငရုပ်သီးထောင်းဖြင့့်ချိုစပ်စပ်ချက်စားကြပါတယ်။ `,UserType:"002"},{Guid:"be16a752-2862-4224-8ac4-6bd94e543380",Name:"ပဲလိပ်ပြာနှပ်",Ingredients:`ပဲလိပ်ပြာအစို 
ဆီ
နနွင်း `,CookingInstructions:`ပဲလိပ်ပြာ အစို နိုဆီဘူးတစ်ဘူး ခန်းကို အခွဲသင်ပြီးရေဆေးထားပါ။
ထိုနောက် ကြောမည်.အိုးထဲမှာ ကြက်သွန်နီ တစ်လုံးပါးပါးလှီးကာကြော်ပြီး ဆီစစ်ကာပုဂံတစ်ခုထဲ ထည်.ထားပါ။
ထိုနောက် နနွင်း နဲနဲနှင့် ပဲကို ထည်.ကာ ကြော်ပြီး
ပဲအကြောတင်းပြီး ဆီပြန်လာသည်အထိ ဆယ်မိနှစ်ခန်. ဆက်တိုင်မွေကြော်ပါ။
ထိုနောက် ရေနွေးကို ပဲမြုတ်ရုံ ထညိ.ပြီးမွေကာ အဖုံးအုပ်ပြီး ရေခန်း ဆီပြန်သည်အထိချက်ပါ။ ပဲခပ်ပျော.ပျော. ကြိုက်ရင်တော. နောက်တစ်ရေထပ်ထည်.က ရေခန်းဆီပြန်သည်အထိ မီးအေးအေးနှင့်တည်ကာ နှပ်ပါ။
ပဲလိပ်ပြာနှပ် ပုဂံတစ်ခုထဲတွင်ထည်.ပြီး အပေါ်မှ ကြက်သွန်နီကြော်ကို တင်လိုက်ပါ။ အချဉ်ဟင်း ငပိထောင်းနှင့်တွဲစားလျှင် ထမင်းမြိန်သော ဟင်းတစ်ခွက်ပါ။
`,UserType:"002"},{Guid:"82d8726c-a765-4bb8-b37b-5a68285ce85e",Name:"သီးစုံ ပဲကုလားဟင်း",Ingredients:`ကုလားပဲခြမ်း - ထမင်းပေါင်းအိုး ဆန်ချင်ခွက် တခွက်
မကျီးသီးမှည့် - ကွမ်းသီးဆံလုံးလောက်
ပျဉ်းတော်သိမ်းရွက် - အခက်ကြီးကြီး ၂ခက်
အာလူး - အနေတော် ၃လုံး
ခရမ်းသီး - အလုံးကြီးကြီး တလုံး
ပန်းဂေါ်ဖီ - အခက်ကြီးကြီး ၃ခက်
ပဲသီး - ၁၀တောင့်ခန့်
မုံလာဥနီ - ဥကြီးကြီး တဥ
ဆား - လက်ဖက်ရည်ဇွန်း တဇွန်း
ငါးငံပြာရည် - ထမင်းစားဇွန်း ၃ဇွန်း
အရသာမှုန့် - လက်ဖက်ရည်ဇွန်း တဇွန်း
နနွင်းမှုန့် - လက်ဖက်ရည်ဇွန်း တဇွန်း (ပဲပြုပ်ထဲနှင့်ဆီသတ်ရာတွင် သုံးရန်)
ကြက်သွန်နီ - အနေတော် တခြမ်း
ကြက်သွန်ဖြူ - အမွှာကြီးကြီး ၂မွှာ
ချင်း - လက်တဆစ်ရဲ့တ၀က်
ငရုတ်သီးအရောင်တင်မှုန့် - လက်ဖက်ရည်ဇွန်း တ၀က်သာသာ
ကုလားလေးမဆလာ - တထုတ်
ဆီ - ထမင်းစားဇွန်း ၃ဇွန်း`,CookingInstructions:`
ကုလားပဲဆန်ကို ရေဆေးပြီး ရေမြုပ်အောင်ထည့် နနွင်းမှုန့် အနည်းငယ်ထည့်ပြီး ပဲကိုမနူးတနူး ပဲအခြမ်းလိုက် အနေအထားမပျက်အောင် ပြုပ်ပြီးထားပါ
မကျီးသီးမှည့်ကို ရေတထပ်ဆေးပြီး ရေမြုပ်အောင် ထည့်ကာ ရေစိမ်ထားပါ
အသီးအရွက်များနှင့် အာလူးကို သင့်သလိုလှီးကာ ရေဆေးထားပါ
ကြက်သွန်ဖြူ နီ ချင်းတို့ကို အခွံခွာပြီး ရေဆေးကာ ငရုတ်သီးမှုန့်တို့နဲ့ရောပြီး ထောင်းထားပါ
အားလုံးအဆင်သင့်ဖြစ်တာနဲ့ ဒယ်အိုးတလုံးကို အပူပေးပြီး ဆီထည့်ပါ ဆီပူလာတာနဲ့ နနွင်းမှုန့်ထည့်ကာ ငရုတ်သီးထောင်းကိုထည့်ပြီး မွှေးလာအောင် ဆီသတ်ပေးပါ
ဆီသတ်နံ့မွှေးလာတာနဲ့ ပျဉ်းတော်သိမ်းရွက်များကို ထည့်ပြီးဆီသတ်ပါ
ပြီးတာနဲ့ ဟင်းချက်ရန် ပြင်ထားသောအာလူးနှင့် အသီးအရွက်များ ဆား ငံပြာရည် အရသာမှုန့်တို့ကိုထည့်မွှေပြီး ဆီသတ်ပါ
ဆီသတ်နံ့ မွှေးလာတာနဲ့ မီးပိတ်ထားပေးပါ
အသီးအရွက်များ ဆီသတ်ပြီးတာနဲ့ ပြုပ်ထားသော ပဲအိုးထဲကို ပြောင်းထည့်ပြီး ရေလိုသလောက်ထည့်ကာ ပွက်ပွက်ဆူအောင် တည်ပေးပါ
ရေပွက်ပွက် ဆူလာတာနဲ့ မာနေသော အသီးအရွက်များ နူးအောင် တည်ပေးကာ ရေစိမ်ထားသော မကျည်းမှည့်ကို လက်နဲ့နယ်ဖျော်ပြီး မကျည်းရည် ထည့်ပေးပါ
ဟင်းရည်ပွက်ပွက်ဆူပါက အရသာမြည်းပြီး လိုသလိုပြင်ကာ ကုလားလေးမဆလာကို ထည့်ပြီးမွှေပေးပါ
အသီးအရွက်များ နူးလာတာနဲ့မဆလာနံ့ မွှေးနေသော သီးစုံပဲဟင်း အရည်သောက်ဆမ်းကို သုံးဆောင်နိူင်ပါပြီ။\r`,UserType:"002"},{Guid:"a38cec23-5505-45ff-87c5-c0a0b5572efe",Name:"ယိုးဒယားသင်္ဘောသီးထောင်း",Ingredients:`သင်္ဘောသီးစိမ်း - အနေတော် တလုံး
ပုဇွန်ခြောက် - အကောင် ၂၀ခန့်
မြေပဲလှော် - အစေ့၂၀ခန့်
ငရုတ်သီးစိမ်း - ၇တောင့်ခန့် အစပ်ကြိုက်လျှင် ပိုထည့်ပါ
ထန်းလျှက်ခဲ - ကွမ်းသီးဆံအလုံးလောက် ၃ခဲ
ကြက်သွန်ဖြူ- အမွှာကြီးကြီး ၄မွှာ
ဆား - လက်ဖက်ရည်ဇွန်း တ၀က်သာသာ
ပဲတောင့်ရှည် - ၃တောင့် မရှိလို့မထည့်ထားပါ
ခရမ်းချဉ်သီး - ခပ်ကြီးကြီး တလုံး
သံပုရာသီး - တခြမ်း
ကြိုက်နှစ်သက်ရာ ပင်လယ်စာများ`,CookingInstructions:`သင်္ဘောသီးကို အခွံခွာပြီး အမြှောင်းရှည်ရှည်လေးတွေ ရအောင်ခြစ်ထားပါ။
ခြစ်ပြီးသော သင်္ဘောသီးများကို သင်္ဘောသီး အစိမ်းနံ့မနံအောင် ရေများများနဲ့ ဆေးပြီးရေစစ်ထားပါ။
ခရမ်းချဉ်သီးကို ၈ စိတ်စိတ်ထားပါ။
မြေပဲလှော်ကို မညက်တညက်ထောင်းပြီး ဖယ်ထားပါ။
ငရုတ်ဆုံ ခပ်ကြီးကြီးထဲမှာ ပုဇွန်ခြောက်ကို မညက်တညက် ထည့်ထောင်းပါ။
ငရုတ်သီးစိမ်းကို မညက်တညက် ရောထောင်းပါ။
ကြက်သွန်ဖြူကို မညက်တညက် ရောထောင်းပါ။
ထန်းလျှက်ခဲကို ညက်နေအောင်ထောင်းပြီးမှ သင်္ဘောသီးကို ထည့်ထောင်းပါ။
ထောင်းသော ကျည်ပွေ့ပေါ် မူတည်ပြီး သင်္ဘောသီးကို ကြည့်ထောင်းပါ။
ကျောက်ကျည်ပွေ့ဆိုပါက ၁၅ချက် အချက်၂၀လောက် ထောင်းရင်ရပါပြီ။
သစ်သားကျည်ပွေ့ဆိုပါက အချက် ၁၀၀ လောက်ထောင်းပေးမှ အရသာ၀င်ပါတယ်။
ထောင်းနေစဉ် သံပုရာရည် ညှစ်ထည့်ပြီး ဆားပါ နည်းနည်းခြင်းဆီ ထည့်ပေးပါ။
သင်္ဘောသီးထောင်းပြီးပါက ပဲတောင့်ရှည်ရှိရင် ချိုးထည့်ပြီး ၅ချက်လောက် ထောင်းပေးပါ။
ပင်လယ်စာများ ပြုတ်ပီးထည့်
ခရမ်းချဉ်သီးကိုလဲ ထည့်ပြီး၅ချက်လောက် ထောင်းပေးပြီးရင် ရပါပြီ။
စားပွဲပြင်တဲ့အခါ ပန်းကန်ထဲသို့ ငရုတ်ဆုံကိုမပြီး အရည်များရော အဖတ်များပါ သွန်ချပြီး မြေပဲထောင်း ဖြူးပေးကာ ပြင်ဆင်ရပါမယ်။`,UserType:"001"},{Guid:"4056cd28-277c-485c-83d9-488dbb5ccddd",Name:"ကြက်ပင်စိမ်းချက်နည်း",Ingredients:`ကြက်သား ၃၀သား
ကြက်သွန်နီ
ကြက်သွန်ဖြူ
ဂျင်း
ကိုင်းခရမ်းချဉ်သီး ၂လုံး
ပင်စိမ်း. ၁စည်း
ငရုတ်သီးအကြမ်းဖတ်
ဆနွင်း
အရောင်တင်မှုန့်
ဆား
အရသာမှုန့်
ပဲငံပြာရည်အကြည်၊အနောက်
ခရုဆီနဲနဲ
ငံပြာရည်`,CookingInstructions:`ကြက်သားကိုအသားလွှာပါ။အတုံးသေးသေးတုံးပါ။
တုံးပြီးရင် ဆား၊အရသာမှုန့်၊ဆနွင်း၊ပဲငံပြာရည်၊အကြည်
အနောက်၊ခရုဆီနဲနဲ၊ငံပြာရည်တို့နဲ့နယ်ပြီးနှပ်ထားပါ

ကြက်သွန်နီ၊ဖြူ၊ဂျင်းတို့ကို ထောင်းထားပါ။ကိုင်းခရမ်းချဉ်သီးကို ပါးပါးလှီးပါ။
ဆီအိုးတည် ဆီဆူရင် ထောင်းထားတဲ့ကြက်သွန်နီတွေ
ထည့်ပြီးဆီသပ်ပါ။ခရမ်းချဉ်သီးထည့်ပါ။ကြက်သွန်နွမ်းခါနီးရင် ဆနွင်း၊အရောင်တင်မှုန့်၊ငရုတ်အကြမ်းဖတ်ထည့်ပါ
ကြေနေအောင်ဆီသတ်ပေးပါ။

ပြီးရင် ကြက်သားကိုထည့်လုံးပါ။လုံးရေခမ်းမှ ရေထည့်ပါ
ကြက်သားကျက်ခါနီးရင် ပင်စိမ်း၁စည်းလုံးကိူ ချွေထည့်ပါ။ဆီပြန်ရင် ကျက်ပါပြီ။ပင်စိမ်းကို နောက်ထပ်
နဲနဲ အပေါ်ကနေ ဖြူးပေးပါ။

ဒါဆို ချဉ်စပ်အရသာနဲ့ကြက်ပင်စိမ်းရပါပြီး
သတိထားရမှာက ခရမ်းချဉ်သီးက ကိုင်းခရမ်းချဉ်သီး
ဖြစ်ရပါမယ်။`,UserType:"001"},{Guid:"2fd8f8d2-896b-4374-a7b0-1eb058cfbea6",Name:"ယိုးဒယားသင်္ဘောသီးထောင်း ",Ingredients:`သင်္ဘောသီးစိမ်း - အနေတော် တလုံး
ပုဇွန်ခြောက် - အကောင် ၂၀ခန့်
မြေပဲလှော် - အစေ့၂၀ခန့်
ငရုတ်သီးစိမ်း - ၇တောင့်ခန့် အစပ်ကြိုက်လျှင် ပိုထည့်ပါ
ထန်းလျှက်ခဲ - ကွမ်းသီးဆံအလုံးလောက် ၃ခဲ
ကြက်သွန်ဖြူ- အမွှာကြီးကြီး ၄မွှာ
ဆား - လက်ဖက်ရည်ဇွန်း တ၀က်သာသာ
ပဲတောင့်ရှည် - ၃တောင့် မရှိလို့မထည့်ထားပါ
ခရမ်းချဉ်သီး - ခပ်ကြီးကြီး တလုံး
သံပုရာသီး - တခြမ်း
ကြိုက်နှစ်သက်ရာ ပင်လယ်စာများ`,CookingInstructions:`သင်္ဘောသီးကို အခွံခွာပြီး အမြှောင်းရှည်ရှည်လေးတွေ ရအောင်ခြစ်ထားပါ။
ခြစ်ပြီးသော သင်္ဘောသီးများကို သင်္ဘောသီး အစိမ်းနံ့မနံအောင် ရေများများနဲ့ ဆေးပြီးရေစစ်ထားပါ။
ခရမ်းချဉ်သီးကို ၈ စိတ်စိတ်ထားပါ။
မြေပဲလှော်ကို မညက်တညက်ထောင်းပြီး ဖယ်ထားပါ။
ငရုတ်ဆုံ ခပ်ကြီးကြီးထဲမှာ ပုဇွန်ခြောက်ကို မညက်တညက် ထည့်ထောင်းပါ။
ငရုတ်သီးစိမ်းကို မညက်တညက် ရောထောင်းပါ။
ကြက်သွန်ဖြူကို မညက်တညက် ရောထောင်းပါ။
ထန်းလျှက်ခဲကို ညက်နေအောင်ထောင်းပြီးမှ သင်္ဘောသီးကို ထည့်ထောင်းပါ။
ထောင်းသော ကျည်ပွေ့ပေါ် မူတည်ပြီး သင်္ဘောသီးကို ကြည့်ထောင်းပါ။
ကျောက်ကျည်ပွေ့ဆိုပါက ၁၅ချက် အချက်၂၀လောက် ထောင်းရင်ရပါပြီ။
သစ်သားကျည်ပွေ့ဆိုပါက အချက် ၁၀၀ လောက်ထောင်းပေးမှ အရသာ၀င်ပါတယ်။
ထောင်းနေစဉ် သံပုရာရည် ညှစ်ထည့်ပြီး ဆားပါ နည်းနည်းခြင်းဆီ ထည့်ပေးပါ။
သင်္ဘောသီးထောင်းပြီးပါက ပဲတောင့်ရှည်ရှိရင် ချိုးထည့်ပြီး ၅ချက်လောက် ထောင်းပေးပါ။
ပင်လယ်စာများ ပြုတ်ပီးထည့်😋
ခရမ်းချဉ်သီးကိုလဲ ထည့်ပြီး၅ချက်လောက် ထောင်းပေးပြီးရင် ရပါပြီ။
စားပွဲပြင်တဲ့အခါ ပန်းကန်ထဲသို့ ငရုတ်ဆုံကိုမပြီး အရည်များရော အဖတ်များပါ သွန်ချပြီး မြေပဲထောင်း ဖြူးပေးကာ ပြင်ဆင်ရပါမယ်။
စပ်စပ်မွှေးမွှေး ယိုးဒယားသင်္ဘောသီး
ထောင်းလေးလုပ်စားကြရအောင်နော်..။`,UserType:"001"},{Guid:"a5a511da-0926-472b-9ca8-9a54c9daf634",Name:"ဝက်သနပ်",Ingredients:`ဝက်သား သုံးထပ်သား - ၃၀ သား
သရက်သီးသနပ် အစိမ်း - 150 g( သို့ ) 160 g
အရသာမှုန့် - လဖက်စားဇွန်း ၁ ဇွန်း
သကြား - ထမင်းစားဇွန်း တစ်ဝက်
နနွင်း - အနည်းငယ်
ကြက်သွန်နီ - အလုံးကြီးကြီး ၄ လုံး
ကြက်သွန်ဖြူ -  အသေး ၂ လုံး
ဆီ ကတော့ သရက်စိမ်းသနပ် မှာပါတဲ့ ဆီနဲ့ပဲ ချက်ပါမယ်။`,CookingInstructions:`အိုးထဲဆီထည့် အပူပေးပီး နနွင်းထည့်မွှေပါ။
ထောင်းထားတဲ့ ကြက်သွန်ဖြူ/နီ ထည့်,ရွလာအောင်ဆီသတ်ပီး
အရသာနယ်ထားတဲ့ ဝက်သား နှင့်
သရက်သီးစိမ်းသနပ် ထည့်၍ ခဏမွှေပေးပါ။
ရေနွေးပူပူကို အသားမြုပ်အောင်ထည့်ပီး အဖုံးအုပ်ထားပါ။
ဆီပျံလာရင် ရပါပီ။
သရက်သီးစိမ်းသနပ်မှာ အငံပါပီးသားမို့
ဆားထည့်ဖို့ မလိုတော့ပါဘူး။
သကြား ကတော့ အချဉ်ဓါတ် ထိန်းဖို့နဲ့
ဝက်သားအရသာကို ပိုကောင်းစေတာကြောင့်
မပါမဖြစ် ထည့်ရပါတယ်။`,UserType:"001"},{Guid:"83b8aaf2-a81e-448a-a080-6fdb5b848cfc",Name:"ဝက်သုံးထပ်သားနှင့် ငုံးဥအချိုချက်",Ingredients:`ဝက်သား
ငုံးဥ
ကြက်သွန်ဖြူ
ကြက်သွန်နီ
ဂျင်း
နံနံပင်
ကြက်သွန်မိတ်
ခရုဆီ
ပဲငံပြာရည်အနောက်
ကြက်သားမှုန့်
သကြား
တရုတ်မဆလာ`,CookingInstructions:`၁။ လုံးချက်တဲ့ပုံစံလေးပါ။ ဝက်သုံးထပ်သားကို ခရုဆီ၊ ပဲငံပြာရည်အနောက်၊ ကြက်သားမှုန့်၊ သကြားနဲ့ ထောင်းထားသောဂျင်း တို့ဖြင့် နယ်ထားပြီး အရသာဝင်အောင်နပ်ထားပေးပါ။
၂။ ငုံးဥကို ကြိုပြုတ်ထားပြီး အခွံနွှာထားပါ။
၃။ ညက်နေအောင်ထောင်းထားသော ကြက်သွန်ဖြူ/နီကို ဆီသတ်လို့ အနံ့မွှေးပြီဆို ဝက်သုံးထပ်သားထည့်၊ ရေနည်းငယ်ထည့် အုပ်ထားလိုက်ပါ။
၄။ (၂)ရေလောက်ခမ်းပြီဆိုမှ ကြက်သားမှုန့်အနည်းငယ်၊ တရုတ်မဆလာနဲ့ ငုံးဥထည့်ပြီး ရေအနည်းငယ်ထပ်ထည့်ပြီး အုပ်ထားလိုက်ပါ။
၅။ ဟင်းအိုးဆူပြီး ဝက်သားလည်းနူးအိပြီဆိုရင် နံနံပင်နဲ့ ကြက်သွန်မြိတ်အုပ်ပြီး အဆင်သင့်စားလို့ရပါပြီ။
ငုံးဥနေရာမှာ ကြက်ဥတို့၊ ဘဲဥတို့နဲ့ ချက်လည်း ရပါတယ်။ ငရုတ်သီးအစပ်ကြိုက်ရင် အိုးချခါနီးငရုတ်သီးလေးတွေ ပါးပါးလှီးထည့်ပေးပါ။
မိမိနှင့် မိမိ၏ မိသားစုကျန်းမာရေးအတွက် အချိုမှုန့်လျော့သုံးပေးပါ။`,UserType:"001"},{Guid:"bd8a6603-0390-4a9b-8095-f89f21774dd7",Name:"ဝက်သား မျှစ်ချဉ်ချက်",Ingredients:`ဝက်သား - ၇၀ ကျပ်သား
မျှစ်ချဉ် - ၁၅ ကျပ်သား (၂ ခါ ပြုတ်ထားပါ ။)
ခရမ်းချဉ်သီး အသေး - ၁၀ လုံး (ပါးပါးလှီးထားပါ ။)
ကြက်သွန်နီ အကြီး - ၂ လုံး (ပါးပါးလှီးထားပါ ။)
ကြက်သွန်ဖြူ အသေး - ၂ လုံး (ထောင်းထားပါ ။)
ငါးငံပြာရည် - ၃ ဇွန်း (ထမင်းစားဇွန်း)
နနွင်းမှုန့် (အနည်းငယ်)
အရောင်တင်မှုန့် (အနည်းငယ်)
ဆား (အနည်းငယ်)`,CookingInstructions:`ဝက်သားကို ဆေးပြီး ရေစစ်ထားပါ ။
အိုးထဲတွင် ဝက်သား ၊ ပါးပါးလှီးထားသော ခရမ်းချဉ်သီး ၊ ကြက်သွန်နီ ၊ ကြက်သွန်ဖြူ ၊ နနွင်းမှုန့် ၊ အရောင်တင်မှုန့် ၊ ဆား ၊ ငံပြာရည် တို့ထည့်၍ အသေအချာလုံးပါ ။
အသား အရောင် ပြောင်းသွားလျှင် ရေနွေးကို ဝက်သား မြုပ်ရုံထည့်၍ အဖုံးအုပ်ပြီး မီးအေးအေးဖြင့် တည်ထားပါ ။ အသားနူးသည် အထိ ရေနွေးကို နည်းနည်း ထပ်ထပ် ထည့်၍ တည်ပါ ။
အသားနူးခါနီးတွင် ပြုတ်ထားသော မျှစ်ချဉ်ကို အသားအိုးထဲ ထည့်၍ သေသေချာချာ အသားနှင့် ရောထည့်လိုက်ပါ ။ အသား နှင့် မျှစ်ချဉ် နူးအိသွားလျှင် အပေါ့အငံ မြည်း၍ မီးဖိုပေါ်မှ ချပြီး သုံးဆောင်နိုင်ပါပြီ ။
ဝက်သား မျှစ်ချဉ် ချက်သည် ငရုတ်သီးဆားထောင်း နှင့် အလိုက်ဖြစ်၍ တွဲဖက်၍ စားသုံးကြပါသည် ။
အချိုမှုန့် လုံးဝ မထည့်ပါ ။ မိမိကြိုက်နှစ်သက်ပါက ထည့်၍ စားသုံးနိုင်ပါသည် ။`,UserType:"001"},{Guid:"37f456f9-45c3-4f09-ba71-92e3a39a25e4",Name:" ဝက်ချိုချဉ် ( မြန်မာချက် ) ",Ingredients:`ဝက်သား သုံးထပ်သား
မြေပဲဆီ
ဆား,သကြား,အရသာမှုန့်
ကြက်သွန်ဖြူ ( ကြိတ်ထားပါ )
ကြက်သွန်နီ ( အကွင်းကွင်းထားပါ )
ခရမ်းချဉ်သီး ( အကွင်းကွင်းထားပါ )
နာနတ်သီး ( ကြိတ်စက်နဲ့ အရည်ကြိတ်ထားပါ )
Chili Sauce ( ကြိုက်မှထည့်ပါ, မထည့်လဲ ကောင်းပါတယ် )
ဝက်သားကို မချက်ခင် ဆား,အရသာမှုန့်နဲ့ နယ်ထားပါ။`,CookingInstructions:`ချက်မယ့်အိုးထဲကို ဆီထည့်ပီး အပူပေးပါ။
ဆီပူလာရင် မီးအားလျှော့၍ သကြားထည့်ပါ။
သကြားများ အရည်ပျော်လာပီး
ထညက်ရည် လိုဖြစ်လာတဲ့အထိ မွှေပေးပါ။
ပီးရင် ဝက်သားထည့်ပီး ဟိုဖက် ဒီဖက် လှန်ကာ
၅ မိနစ်မွှေပေးပီးရင် ဝက်သားအရောင်များ နီရဲလာပါလိမ့်မယ်။
ကြက်သွန်ဖြူ/နီ /ခရမ်းချဉ်သီး များထည့်မွှေပီးရင်
ကြိတ်ထားတဲ့ နာနတ်ရည်ကို အသား မြုပ်အောင် ထည့်ပါ။
Chili Sauce ထည့်မွှေပြီးနောက်
အဖုံးအုပ်ကာ မီးအား အနေတော်နဲ့သာ ချက်ပေးပါ။
ရေများ လုံးဝခန်းသွားပီး ဆီပျံလာရင်တော့
အရသာရှိလှတဲ့ ဝက်ချိုချဉ်အိအိ မြန်မာချက်လေး ရပါပီ။
အသားရော အခေါက်ပါ အိစက်နေစေဖို့အတွက်
မီးအား မပြင်းစေပဲ, မီးအား အသင့်အတင့်နဲ့
အဖုံးအုပ်ထားပီး စိတ်ရှည်ရှည်နဲ့ ချက်ရပါမယ်။
အသားထဲမှာ အရသာလေးတွေ အကုန်စိမ့်ဝင်နေပြီး
ထမင်းမြိန်စေလှတဲ့ ဟင်းတစ်ခွက်ဖြစ်စေမှာပါ။
`,UserType:"001"},{Guid:"626155d3-e75f-4ff3-9361-79150a92926b",Name:"ဝက်ဂုတ်သားကုန်းဘောင်ကြော်",Ingredients:`ဝက်ဂုတ်သား...၂၀ကျပ်သား
ကြက်သွန်နီ...၁လုံး
ပန်းငရုတ်ပွ....၁လုံး
ခရမ်းချဉ်သီး...၁လုံး
ကြက်သွန်မြိတ်....၃ပင်
ချင်းသေးသေး.....၁တက်
တရုတ်မဆလာ....အနည်းငယ်
ခရုဆီ.. ....၂ဇွန်း
ပဲငံပြာရည်အကြည်..၂ဇွန်း
အနောက်ရည်..အနည်းငယ်
သကြား.....အနည်းငယ်`,CookingInstructions:`ဝက်ဂုတ်သားကိုပါးပါးလှီးပြီးအရသာအနည်းငယ်သွင်းထားပါ။
ကြက်သွန်နီ ၊ပန်းငရုတ်ပွ၊ခရမ်းချဉ်သီးကို လေးစိတ်လှီးပါ။
ချင်းကိုအမျှင်ငယ်များအဖြစ်လှီးပါ။
ပူနေတဲ့ဒယ်အိုးမှာဆီအနည်းငယ်ကိုထည့်ပြီးလေးသိတ်လှီးထားသောကြက်သွန်နီ၊ပန်းငရုတ်ပွတို့ကိုအနည်းငယ်နွမ်းအောင်ကြော်ပြီးစစ်ယူပါ။
ခရမ်းချဉ်သီးကိုလဲသီးသန့်ထည့်ကြော်ပြီးစစ်ယူပါ။
ဆီအနည်းငယ်ထပ်ဖြည့်ပြီးအမျှင်လှီးထားသောချင်းကိုထည့်ကြော်ပါ။အနည်းငယ်မွှေးလာလျှင်ဝက်ဂုတ်သားတွေထည့်ကြော်ပါ။
ချက်ချင်းဆိုသလိုပါဝင်သောအရသာများကိုအမြန်ဖြည့့်စွက်ပါ။
စစ်ယူထားသောအသီးအရွက်တွေထည့်ပြီး၁လက်မခန့်လှီးထားသောကြက်သွန်မြိတ်လေးဖြူးထည့်ပါ။
တရုတ်မဆာလာမှုန့်လေးဖြူးပြီးသုံးဆောင်ပါ။`,UserType:"001"},{Guid:"df5db243-695d-448c-af1e-3d4536115b96",Name:"ဝက်ပုန်းရည်",Ingredients:`ဝက်သား သုံးထပ်သား
ပုန်းရည်ကြီး ( ရေထည့်ပီး အနှစ်ဖျော်ထားပါ )
ကြက်သွန်နီ ( အကွင်းကွင်းထားပါ )
ဆား,သကြား,အရသာမှုန့်,နနွင်း
မြေပဲဆီ

ဝက်သားကို မချက်ခင်
ဆား,သကြား,အရသာမှုန့်နဲ့ နယ်ထားပါ။`,CookingInstructions:`ဝက်သားပုန်းရည်ကြီးချက်နည်းတွေက
တစ်ယောက်နဲ့ တစ်ယောက် မတူကြပါဘူး။
အချို့ချက်နည်းတွေမှာ
ဂျင်း,ငရုတ်သီး အစိမ်းမှုန့်ထည့်ကြပါတယ်။
ကျမကတော့ ပုန်းရည်ကြီးရဲ့အရသာကို
လေးနက်စေချင်တာကြောင့်
ဂျင်း,ငရုတ်သီး အစိမ်းမှုန့် မထည့်ပဲ
အရောင်အတွက် နနွင်းမှုန့်သာထည့်ပါတယ်။ချက်မယ့်အိုးထဲကို ဆီထည့်ပီး အပူပေးပါ။
ဆီပူလာရင် မီးအားလျှော့၍ နနွင်းထည့်မွှေပီး
ဝက်သားထည့်၍ ဟိုဖက် ဒီဖက် လှန်ကာ၂ မိနစ်မွှေပေးပါ။
ဝက်သားအရောင်ပြောင်းလာရင်တော့
ဝက်သားကို ရေနွေးပူ မြုပ်အောင် ထည့်ပီး
အဖုံးအုပ်ကာ မီးအား အနေတော်နဲ့သာ ချက်ပေးပါ။
ရေများခန်းလာပီး ရေတစ်ဝက်ကျန်တဲ့အချိန်မှာ
ပုန်းရည်ကြီးအနှစ်များထည့်မွှေပီး
ကြက်သွန်နီ အကွင်းများ ထည့်မွှေ၍ အဖုံးအုပ်ထားပေးပါ။

ကြက်သွန်ဖပ်လေးများလည်း နူးအိသွားပီး
မိမိနှစ်သက်တဲ့ ရေ အပျစ် အကျဲ အနေအထားမှာ
အိုးချစားသုံးနိုင်ပါပီ။`,UserType:"001"},{Guid:"06c9b72e-063b-4521-a3b8-0a73bbeda79e",Name:"ရွှေပဲရွက်ပြုတ် နှမ်းဆီမွှေး",Ingredients:`ရွှေပဲရွက်
ပဲငံပြာရည် အကျဲ
ဆား
သကြား 
ကြက်သွန်ဖြူ 
မြေပဲကြော် 
ဆီချက်`,CookingInstructions:`1. သန့်စင်ဆေးကြောထားတဲ့ ပဲရွက် တွေကို ရေဆူဆူထဲ အမြန်ထည့် အမြန်ဆယ်ပြီး
2. ပဲငံပြာရည် အကျဲ
3. ဆား
4. သကြား တို့နဲ့ နယ်ပြီး
5. ကြက်သွန်ဖြူ နဲ့ မြေပဲကြော် ဆီချက် ဖြူးစားပါတယ်
`,UserType:"002"}],Yc="/assets/default-708Zm8wL.png",Tm=()=>T.jsx("div",{className:"my-8 mx-4 md:mx-8 xl:my-12 xl:mx-16",children:T.jsx("div",{className:"grid gap-4 md:gap-6 xl:gap-8 md:grid-cols-2",children:Kc.map(e=>T.jsx(dl,{to:`/details/${e.Guid}`,children:T.jsxs("div",{className:"flex items-center shadow-md p-4 xl:px-8 xl:py-5 rounded-md",children:[T.jsx("img",{src:`../../public/images/${e.Name}.jpg`,alt:e.Name,className:"me-4 xl:me-5 w-20 md:w-24 md:h-24 md:rounded-full md:object-cover xl:w-32 xl:h-32",onError:n=>{n.target.src=Yc}}),T.jsx("h3",{className:"md:text-lg xl:text-xl",children:e.Name})]})},e.Guid))})});var Xc={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xs=He.createContext&&He.createContext(Xc),zm=["attr","size","title"];function Lm(e,n){if(e==null)return{};var t=Rm(e,n),r,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Rm(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pl.apply(this,arguments)}function Cs(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function ml(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Cs(Object(t),!0).forEach(function(r){Om(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Cs(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Om(e,n,t){return n=Um(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Um(e){var n=jm(e,"string");return typeof n=="symbol"?n:String(n)}function jm(e,n){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Zc(e){return e&&e.map((n,t)=>He.createElement(n.tag,ml({key:t},n.attr),Zc(n.child)))}function Jc(e){return n=>He.createElement(Mm,pl({attr:ml({},e.attr)},n),Zc(e.child))}function Mm(e){var n=t=>{var{attr:r,size:l,title:i}=e,o=Lm(e,zm),u=l||t.size||"1em",s;return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),He.createElement("svg",pl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:s,style:ml(ml({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&He.createElement("title",null,i),e.children)};return xs!==void 0?He.createElement(xs.Consumer,null,t=>n(t)):n(Xc)}function Dm(e){return Jc({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm212.65-91.36a16 16 0 0 1 .09 22.63L208.42 240H342a16 16 0 0 1 0 32H208.42l52.32 52.73A16 16 0 1 1 238 347.27l-79.39-80a16 16 0 0 1 0-22.54l79.39-80a16 16 0 0 1 22.65-.09z"},child:[]}]})(e)}const Fm=[{UserId:1,UserCode:"001",UserMMType:"အသားစား",UserEngType:"MeatEater"},{UserId:2,UserCode:"002",UserMMType:"သက်သက်လွတ်",UserEngType:"Vegan"}],$m=()=>{const{recipeId:e}=lm(),n=Kc.find(r=>r.Guid===e),t=Fm.find(r=>r.UserCode===n.UserType);return T.jsxs("div",{className:"my-4 md:my-16 md:mx-12 lg:mx-16 xl:mx-28 xl:my-20",children:[T.jsx(dl,{to:"/",children:T.jsx("button",{className:"text-2xl mx-3 md:hidden",children:T.jsx(Dm,{})})}),T.jsxs("div",{className:"mt-3 md:flex",children:[T.jsx("img",{src:`../../public/images/${n.Name}.jpg`,alt:n.Name,className:"mx-auto border-4 border-slate-300 rounded-md p-3 w-56 md:w-64 lg:w-72 xl:w-96 md:h-fit",onError:r=>{r.target.src=Yc}}),T.jsxs("div",{className:"mx-7 mt-5 md:mt-2",children:[T.jsx(dl,{to:"/",children:T.jsx("button",{className:`hidden md:block bg-amber-400 px-3 xl:px-5 py-1 text-sm xl:text-base rounded-lg
              float-right xl:me-6`,children:"Back"})}),T.jsxs("div",{className:"xl:mt-1",children:[T.jsx("h2",{className:"text-xl lg:text-2xl xl:text-3xl",children:"For"}),T.jsxs("p",{className:"xl:text-lg mb-4",children:[t.UserMMType," Or",T.jsxs("span",{className:"font-light",children:[" ",t.UserEngType]})]})]}),T.jsx("hr",{}),T.jsxs("div",{className:"my-4 xl:my-4",children:[T.jsx("h2",{className:"text-xl lg:text-2xl xl:text-3xl",children:"Menu Name"}),T.jsx("p",{className:"xl:text-lg mt-1",children:n.Name})]}),T.jsx("hr",{}),T.jsxs("div",{className:"my-4 xl:mb-4",children:[T.jsx("h2",{className:"text-xl lg:text-2xl xl:text-3xl",children:"Ingredients"}),T.jsx("p",{className:"xl:text-lg mt-1 leading-7 xl:leading-8",children:n.Ingredients})]}),T.jsx("hr",{}),T.jsxs("div",{className:"mt-4",children:[T.jsx("h2",{className:"text-xl lg:text-2xl xl:text-3xl",children:"How to cook ?"}),T.jsx("p",{className:"xl:text-lg mt-1 leading-7 xl:leading-8",children:n.CookingInstructions})]})]})]})]})};function Bm(e){return Jc({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"},child:[]},{tag:"path",attr:{d:"M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"},child:[]}]})(e)}const Vm=()=>T.jsxs("nav",{className:`bg-amber-400 p-4 md:px-8 md:py-5 xl:px-12 xl:py-6 text-xl md:text-2xl xl:text-3xl flex items-center
      sticky top-0 left-0`,children:[T.jsx(Bm,{}),T.jsx(dl,{to:"/",children:"Burmese Recipes"})]});function Am(){return T.jsxs(T.Fragment,{children:[T.jsx(Vm,{}),T.jsxs(wm,{children:[T.jsx(ro,{path:"/",element:T.jsx(Tm,{})}),T.jsx(ro,{path:"/details/:recipeId",element:T.jsx($m,{})})]})]})}ai.createRoot(document.getElementById("root")).render(T.jsx(He.StrictMode,{children:T.jsx(Nm,{children:T.jsx(Am,{})})}));
