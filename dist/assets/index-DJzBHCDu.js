(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();function tE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vh={exports:{}},oe={};var mv;function eE(){if(mv)return oe;mv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function R(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function I(z,mt,Rt){this.props=z,this.context=mt,this.refs=x,this.updater=Rt||w}I.prototype.isReactComponent={},I.prototype.setState=function(z,mt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,mt,"setState")},I.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function H(){}H.prototype=I.prototype;function C(z,mt,Rt){this.props=z,this.context=mt,this.refs=x,this.updater=Rt||w}var U=C.prototype=new H;U.constructor=C,M(U,I.prototype),U.isPureReactComponent=!0;var N=Array.isArray;function O(){}var T={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function G(z,mt,Rt){var Z=Rt.ref;return{$$typeof:o,type:z,key:mt,ref:Z!==void 0?Z:null,props:Rt}}function q(z,mt){return G(z.type,mt,z.props)}function et(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function ct(z){var mt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Rt){return mt[Rt]})}var J=/\/+/g;function $(z,mt){return typeof z=="object"&&z!==null&&z.key!=null?ct(""+z.key):mt.toString(36)}function Y(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(mt){z.status==="pending"&&(z.status="fulfilled",z.value=mt)},function(mt){z.status==="pending"&&(z.status="rejected",z.reason=mt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function W(z,mt,Rt,Z,dt){var bt=typeof z;(bt==="undefined"||bt==="boolean")&&(z=null);var zt=!1;if(z===null)zt=!0;else switch(bt){case"bigint":case"string":case"number":zt=!0;break;case"object":switch(z.$$typeof){case o:case e:zt=!0;break;case S:return zt=z._init,W(zt(z._payload),mt,Rt,Z,dt)}}if(zt)return dt=dt(z),zt=Z===""?"."+$(z,0):Z,N(dt)?(Rt="",zt!=null&&(Rt=zt.replace(J,"$&/")+"/"),W(dt,mt,Rt,"",function(Ge){return Ge})):dt!=null&&(et(dt)&&(dt=q(dt,Rt+(dt.key==null||z&&z.key===dt.key?"":(""+dt.key).replace(J,"$&/")+"/")+zt)),mt.push(dt)),1;zt=0;var _t=Z===""?".":Z+":";if(N(z))for(var Ct=0;Ct<z.length;Ct++)Z=z[Ct],bt=_t+$(Z,Ct),zt+=W(Z,mt,Rt,bt,dt);else if(Ct=R(z),typeof Ct=="function")for(z=Ct.call(z),Ct=0;!(Z=z.next()).done;)Z=Z.value,bt=_t+$(Z,Ct++),zt+=W(Z,mt,Rt,bt,dt);else if(bt==="object"){if(typeof z.then=="function")return W(Y(z),mt,Rt,Z,dt);throw mt=String(z),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return zt}function ft(z,mt,Rt){if(z==null)return z;var Z=[],dt=0;return W(z,Z,"","",function(bt){return mt.call(Rt,bt,dt++)}),Z}function st(z){if(z._status===-1){var mt=z._result,Rt=mt();Rt.then(function(Z){(z._status===0||z._status===-1)&&(z._status=1,z._result=Z,Rt.status===void 0&&(Rt.status="fulfilled",Rt.value=Z))},function(Z){(z._status===0||z._status===-1)&&(z._status=2,z._result=Z,Rt.status===void 0&&(Rt.status="rejected",Rt.reason=Z))}),z._status===-1&&(z._status=0,z._result=Rt)}if(z._status===1)return z._result.default;throw z._result}var ht=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function yt(z){var mt=T.T,Rt={};Rt.types=mt!==null?mt.types:null,T.T=Rt;try{var Z=z(),dt=T.S;dt!==null&&dt(Rt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(O,ht)}catch(bt){ht(bt)}finally{mt!==null&&Rt.types!==null&&(mt.types=Rt.types),T.T=mt}}function Jt(z){var mt=T.T;if(mt!==null){var Rt=mt.types;Rt===null?mt.types=[z]:Rt.indexOf(z)===-1&&Rt.push(z)}else yt(Jt.bind(null,z))}var Zt={map:ft,forEach:function(z,mt,Rt){ft(z,function(){mt.apply(this,arguments)},Rt)},count:function(z){var mt=0;return ft(z,function(){mt++}),mt},toArray:function(z){return ft(z,function(mt){return mt})||[]},only:function(z){if(!et(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return oe.Activity=_,oe.Children=Zt,oe.Component=I,oe.Fragment=i,oe.Profiler=u,oe.PureComponent=C,oe.StrictMode=s,oe.Suspense=m,oe.ViewTransition=v,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,oe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},oe.addTransitionType=Jt,oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(z,mt,Rt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=M({},z.props),dt=z.key;if(mt!=null)for(bt in mt.key!==void 0&&(dt=""+mt.key),mt)!L.call(mt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&mt.ref===void 0||(Z[bt]=mt[bt]);var bt=arguments.length-2;if(bt===1)Z.children=Rt;else if(1<bt){for(var zt=Array(bt),_t=0;_t<bt;_t++)zt[_t]=arguments[_t+2];Z.children=zt}return G(z.type,dt,Z)},oe.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},oe.createElement=function(z,mt,Rt){var Z,dt={},bt=null;if(mt!=null)for(Z in mt.key!==void 0&&(bt=""+mt.key),mt)L.call(mt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(dt[Z]=mt[Z]);var zt=arguments.length-2;if(zt===1)dt.children=Rt;else if(1<zt){for(var _t=Array(zt),Ct=0;Ct<zt;Ct++)_t[Ct]=arguments[Ct+2];dt.children=_t}if(z&&z.defaultProps)for(Z in zt=z.defaultProps,zt)dt[Z]===void 0&&(dt[Z]=zt[Z]);return G(z,bt,dt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:h,render:z}},oe.isValidElement=et,oe.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:st}},oe.memo=function(z,mt){return{$$typeof:p,type:z,compare:mt===void 0?null:mt}},oe.startTransition=yt,oe.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},oe.use=function(z){return T.H.use(z)},oe.useActionState=function(z,mt,Rt){return T.H.useActionState(z,mt,Rt)},oe.useCallback=function(z,mt){return T.H.useCallback(z,mt)},oe.useContext=function(z){return T.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,mt){return T.H.useDeferredValue(z,mt)},oe.useEffect=function(z,mt){return T.H.useEffect(z,mt)},oe.useEffectEvent=function(z){return T.H.useEffectEvent(z)},oe.useId=function(){return T.H.useId()},oe.useImperativeHandle=function(z,mt,Rt){return T.H.useImperativeHandle(z,mt,Rt)},oe.useInsertionEffect=function(z,mt){return T.H.useInsertionEffect(z,mt)},oe.useLayoutEffect=function(z,mt){return T.H.useLayoutEffect(z,mt)},oe.useMemo=function(z,mt){return T.H.useMemo(z,mt)},oe.useOptimistic=function(z,mt){return T.H.useOptimistic(z,mt)},oe.useReducer=function(z,mt,Rt){return T.H.useReducer(z,mt,Rt)},oe.useRef=function(z){return T.H.useRef(z)},oe.useState=function(z){return T.H.useState(z)},oe.useSyncExternalStore=function(z,mt,Rt){return T.H.useSyncExternalStore(z,mt,Rt)},oe.useTransition=function(){return T.H.useTransition()},oe.version="19.3.0",oe}var gv;function Yp(){return gv||(gv=1,vh.exports=eE()),vh.exports}var Jn=Yp();const Et=tE(Jn);var Sh={exports:{}},cl={},xh={exports:{}},Mh={};var _v;function nE(){return _v||(_v=1,(function(o){function e(Y,W){var ft=Y.length;Y.push(W);t:for(;0<ft;){var st=ft-1>>>1,ht=Y[st];if(0<u(ht,W))Y[st]=W,Y[ft]=ht,ft=st;else break t}}function i(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var W=Y[0],ft=Y.pop();if(ft!==W){Y[0]=ft;t:for(var st=0,ht=Y.length,yt=ht>>>1;st<yt;){var Jt=2*(st+1)-1,Zt=Y[Jt],z=Jt+1,mt=Y[z];if(0>u(Zt,ft))z<ht&&0>u(mt,Zt)?(Y[st]=mt,Y[z]=ft,st=z):(Y[st]=Zt,Y[Jt]=ft,st=Jt);else if(z<ht&&0>u(mt,ft))Y[st]=mt,Y[z]=ft,st=z;else break t}}return W}function u(Y,W){var ft=Y.sortIndex-W.sortIndex;return ft!==0?ft:Y.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],S=1,_=null,v=3,y=!1,R=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(Y){for(var W=i(p);W!==null;){if(W.callback===null)s(p);else if(W.startTime<=Y)s(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function U(Y){if(w=!1,C(Y),!R)if(i(m)!==null)R=!0,N||(N=!0,et());else{var W=i(p);W!==null&&$(U,W.startTime-Y)}}var N=!1,O=-1,T=5,L=-1;function G(){return M?!0:!(o.unstable_now()-L<T)}function q(){if(M=!1,N){var Y=o.unstable_now();L=Y;var W=!0;try{t:{R=!1,w&&(w=!1,I(O),O=-1),y=!0;var ft=v;try{e:{for(C(Y),_=i(m);_!==null&&!(_.expirationTime>Y&&G());){var st=_.callback;if(typeof st=="function"){_.callback=null,v=_.priorityLevel;var ht=st(_.expirationTime<=Y);if(Y=o.unstable_now(),typeof ht=="function"){_.callback=ht,C(Y),W=!0;break e}_===i(m)&&s(m),C(Y)}else s(m);_=i(m)}if(_!==null)W=!0;else{var yt=i(p);yt!==null&&$(U,yt.startTime-Y),W=!1}}break t}finally{_=null,v=ft,y=!1}W=void 0}}finally{W?et():N=!1}}}var et;if(typeof H=="function")et=function(){H(q)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,J=ct.port2;ct.port1.onmessage=q,et=function(){J.postMessage(null)}}else et=function(){x(q,0)};function $(Y,W){O=x(function(){Y(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var ft=v;v=W;try{return Y()}finally{v=ft}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(Y,W){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ft=v;v=Y;try{return W()}finally{v=ft}},o.unstable_scheduleCallback=function(Y,W,ft){var st=o.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?st+ft:st):ft=st,Y){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=ft+ht,Y={id:S++,callback:W,priorityLevel:Y,startTime:ft,expirationTime:ht,sortIndex:-1},ft>st?(Y.sortIndex=ft,e(p,Y),i(m)===null&&Y===i(p)&&(w?(I(O),O=-1):w=!0,$(U,ft-st))):(Y.sortIndex=ht,e(m,Y),R||y||(R=!0,N||(N=!0,et()))),Y},o.unstable_shouldYield=G,o.unstable_wrapCallback=function(Y){var W=v;return function(){var ft=v;v=W;try{return Y.apply(this,arguments)}finally{v=ft}}}})(Mh)),Mh}var vv;function iE(){return vv||(vv=1,xh.exports=nE()),xh.exports}var yh={exports:{}},Nn={};var Sv;function aE(){if(Sv)return Nn;Sv=1;var o=Yp();function e(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,_,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:y===d?d:""+y,children:S,containerInfo:_,implementation:v}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.browser=function(S){return{$$typeof:f,_reason:S}},Nn.createPortal=function(S,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return h(S,_,null,v)},Nn.flushSync=function(S){var _=m.T,v=s.p;try{if(m.T=null,s.p=2,S)return S()}finally{m.T=_,s.p=v,s.d.f()}},Nn.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(S,_))},Nn.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Nn.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var v=_.as,y=p(v,_.crossOrigin),R=typeof _.integrity=="string"?_.integrity:void 0,w=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:y,integrity:R,fetchPriority:w}):v==="script"&&s.d.X(S,{crossOrigin:y,integrity:R,fetchPriority:w,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Nn.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=p(_.as,_.crossOrigin);s.d.M(S,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(S)},Nn.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,y=p(v,_.crossOrigin);s.d.L(S,v,{crossOrigin:y,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Nn.preloadModule=function(S,_){if(typeof S=="string")if(_){var v=p(_.as,_.crossOrigin);s.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(S)},Nn.requestFormReset=function(S){s.d.r(S)},Nn.unstable_batchedUpdates=function(S,_){return S(_)},Nn.useFormState=function(S,_,v){return m.H.useFormState(S,_,v)},Nn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Nn.version="19.3.0",Nn}var xv;function rE(){if(xv)return yh.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yh.exports=aE(),yh.exports}var Mv;function sE(){if(Mv)return cl;Mv=1;var o=iE(),e=Yp(),i=rE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return m(l),t;if(c===r)return m(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var g=!1,A=l.child;A;){if(A===a){g=!0,a=l,r=c;break}if(A===r){g=!0,r=l,a=c;break}A=A.sibling}if(!g){for(A=c.child;A;){if(A===a){g=!0,a=c,r=l;break}if(A===r){g=!0,r=c,a=l;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,I=null;function H(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(I=t,!1):t===n?(I!==null&&(x=t),!0):!1}function U(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function N(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,T=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),$=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),Jt=Symbol.for("react.legacy_hidden"),Zt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),Rt=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=Rt&&t[Rt]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Symbol.for("react.client.reference");function bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===dt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case ct:return"Profiler";case et:return"StrictMode";case W:return"Suspense";case ft:return"SuspenseList";case yt:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case $:return t.displayName||"Context";case J:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case st:return n=t.displayName||null,n!==null?n:bt(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return bt(t(n))}catch{}}return null}var zt=Array.isArray,_t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ge={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function Me(t){return{current:t}}function ee(t){0>ge||(t.current=pe[ge],pe[ge]=null,ge--)}function ie(t,n){ge++,pe[ge]=t.current,t.current=n}var Ve=Me(null),dn=Me(null),Pe=Me(null),tn=Me(null);function X(t,n){switch(ie(Pe,n),ie(dn,t),ie(Ve,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?T_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=T_(n),t=b_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Ve),ie(Ve,t)}function nn(){ee(Ve),ee(dn),ee(Pe)}function Le(t){var n=t.memoizedState;n!==null&&(Fs._currentValue=n.memoizedState,ie(tn,t)),n=Ve.current;var a=b_(n,t.type);n!==a&&(ie(dn,t),ie(Ve,a))}function D(t){dn.current===t&&(ee(Ve),ee(dn)),tn.current===t&&(ee(tn),Fs._currentValue=Ge)}var E,j;function rt(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",j=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+t+j}var pt=!1;function At(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Ot){var k=Ot}Reflect.construct(t,[],St)}else{try{St.call()}catch(Ot){k=Ot}St=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){k=Ot}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Ot){if(Ot&&k&&typeof Ot.stack=="string")return[Ot.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],A=c[1];if(g&&A){var P=g.split(`
`),Q=A.split(`
`);for(l=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Q.length&&!Q[l].includes("DetermineComponentFrameRoot");)l++;if(r===P.length||l===Q.length)for(r=P.length-1,l=Q.length-1;1<=r&&0<=l&&P[r]!==Q[l];)l--;for(;1<=r&&0<=l;r--,l--)if(P[r]!==Q[l]){if(r!==1||l!==1)do if(r--,l--,0>l||P[r]!==Q[l]){var ot=`
`+P[r].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=r&&0<=l);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?rt(a):""}function Nt(t,n){switch(t.tag){case 26:case 27:case 5:return rt(t.type);case 16:return rt("Lazy");case 13:return t.child!==n&&n!==null?rt("Suspense Fallback"):rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return rt("Activity");case 30:return rt("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Nt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,It=o.unstable_shouldYield,Pt=o.unstable_requestPaint,Xt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,V=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,xt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Vt=o.log,Tt=o.unstable_setDisableYieldValue,jt=null,Gt=null;function Ce(t){if(typeof Vt=="function"&&Tt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(jt,t)}catch{}}var ue=Math.clz32?Math.clz32:qc,ti=Math.log,di=Math.LN2;function qc(t){return t>>>=0,t===0?32:31-(ti(t)/di|0)|0}var es=256,Sr=262144,za=4194304;function da(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=da(r):(g&=A,g!==0?l=da(g):a||(a=A&~t,a!==0&&(l=da(a))))):(A=r&~c,A!==0?l=da(A):g!==0?l=da(g):a||(a=r&~t,a!==0&&(l=da(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Bi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-ue(a),l=1<<r;n|=t[r],a&=~l}return n}function go(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var t=za;return za<<=1,(za&62914560)===0&&(za=4194304),t}function ns(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Fi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pl(t,n,a,r,l,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ot=31-ue(a),St=1<<ot;A[ot]=0,P[ot]=-1;var k=Q[ot];if(k!==null)for(Q[ot]=null,ot=0;ot<k.length;ot++){var at=k[ot];at!==null&&(at.lane&=-536870913)}a&=~St}r!==0&&Mr(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function Mr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ue(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function vo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ue(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function So(t,n){var a=n&-n;return a=(a&42)!==0?1:xo(a),(a&(t.suspendedLanes|n))!==0?0:a}function xo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Il(){var t=Ct.p;return t!==0?t:(t=window.event,t===void 0?32:lv(t.type))}function zl(t,n){var a=Ct.p;try{return Ct.p=t,n()}finally{Ct.p=a}}var hi=Math.random().toString(36).slice(2),b="__reactFiber$"+hi,B="__reactProps$"+hi,ut="__reactContainer$"+hi,nt="__reactEvents$"+hi,it="__reactListeners$"+hi,Bt="__reactHandles$"+hi,kt="__reactResources$"+hi,Lt="__reactMarker$"+hi,Yt="__reactLoad$"+hi;function Kt(t){delete t[b],delete t[B],delete t[it],delete t[Bt]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ut]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=V_(t);t!==null;){if(a=t[b])return a;t=V_(t)}return n}t=a,a=t.parentNode}return null}function ce(t){if(t=t[b]||t[ut]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Wt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ye(t){var n=t[kt];return n||(n=t[kt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Lt]=!0}function Ye(t){t[Yt]=void 0}var Fe=new Set,vn={};function Ft(t,n){rn(t,n),rn(t+"Capture",n)}function rn(t,n){for(vn[t]=n,t=0;t<n.length;t++)Fe.add(n[t])}var we=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},ei={};function Hi(t){return Mt.call(ei,t)?!0:Mt.call(Bn,t)?!1:we.test(t)?ei[t]=!0:(Bn[t]=!0,!1)}var ve=!1;function Ie(){var t=ve;return ve=!1,t}function Je(t,n,a){if(Hi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ni(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ha(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yc(t){if(!t._valueTracker){var n=ha(t)?"checked":"value";t._valueTracker=Bl(t,n,""+t[n])}}function dm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ha(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Mx=/[\n"\\]/g;function pi(t){return t.replace(Mx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zc(t,n,a,r,l,c,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+sn(n)):t.value!==""+sn(n)&&(t.value=""+sn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Kc(t,sn(t.value)):Kc(t,sn(n)):a!=null?Kc(t,sn(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+sn(A):t.removeAttribute("name")}function hm(t,n,a,r,l,c,g,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Yc(t);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Yc(t)}function Kc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function is(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function pm(t,n,a){if(n!=null&&(n=""+sn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+sn(a):""}function mm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(zt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Yc(t)}function as(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||yx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _m(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ve=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(gm(t,l,r),ve=!0)}else for(var c in n)n.hasOwnProperty(c)&&gm(t,c,n[c])}function Qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ex=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(t){return Tx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Gi(){}var Jc=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,ss=null;function vm(t){var n=ce(t);if(n&&(t=n.stateNode)){var a=t[B]||null;t:switch(t=n.stateNode,n.type){case"input":if(Zc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[B]||null;if(!l)throw Error(s(90));Zc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&dm(r)}break t;case"textarea":pm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&is(t,!!a.multiple,n,!1)}}}var $c=!1;function Sm(t,n,a){if($c)return t(n,a);$c=!0;try{var r=t(n);return r}finally{if($c=!1,(rs!==null||ss!==null)&&(Fu(),rs&&(n=rs,t=ss,ss=rs=null,vm(n),t)))for(n=0;n<t.length;n++)vm(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[B]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=!1;if(pa)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){tf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{tf=!1}var Fa=null,ef=null,Hl=null;function xm(){if(Hl)return Hl;var t,n=ef,a=n.length,r,l="value"in Fa?Fa.value:Fa.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===l[c-r];r++);return Hl=l.slice(t,1<r?1-r:void 0)}function Gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function Mm(){return!1}function Fn(t){function n(a,r,l,c,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Vl:Mm,this.isPropagationStopped=Mm,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Fn(Ha),To=O({},Ha,{view:0,detail:0}),bx=Fn(To),nf,af,bo,kl=O({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(nf=t.screenX-bo.screenX,af=t.screenY-bo.screenY):af=nf=0,bo=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:af}}),ym=Fn(kl),Ax=O({},kl,{dataTransfer:0}),Rx=Fn(Ax),Cx=O({},To,{relatedTarget:0}),rf=Fn(Cx),wx=O({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=Fn(wx),Nx=O({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ux=Fn(Nx),Lx=O({},Ha,{data:0}),Em=Fn(Lx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ix[t])?!!n[t]:!1}function sf(){return zx}var Bx=O({},To,{key:function(t){if(t.key){var n=Ox[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fx=Fn(Bx),Hx=O({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Fn(Hx),Gx=O({},Ha,{submitter:0}),Vx=Fn(Gx),Xx=O({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),kx=Fn(Xx),Wx=O({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=Fn(Wx),Yx=O({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=Fn(Yx),Kx=O({},Ha,{newState:0,oldState:0,source:0}),Qx=Fn(Kx),Jx=[9,13,27,32],of=pa&&"CompositionEvent"in window,Ao=null;pa&&"documentMode"in document&&(Ao=document.documentMode);var jx=pa&&"TextEvent"in window&&!Ao,bm=pa&&(!of||Ao&&8<Ao&&11>=Ao),Am=" ",Rm=!1;function Cm(t,n){switch(t){case"keyup":return Jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function $x(t,n){switch(t){case"compositionend":return wm(n);case"keypress":return n.which!==32?null:(Rm=!0,Am);case"textInput":return t=n.data,t===Am&&Rm?null:t;default:return null}}function tM(t,n){if(os)return t==="compositionend"||!of&&Cm(t,n)?(t=xm(),Hl=ef=Fa=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bm&&n.locale!=="ko"?null:n.data;default:return null}}var eM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!eM[t.type]:n==="textarea"}function Nm(t,n,a,r){rs?ss?ss.push(r):ss=[r]:rs=r,n=Wu(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ro=null,Co=null;function nM(t){v_(t,0)}function Wl(t){var n=Wt(t);if(dm(n))return t}function Um(t,n){if(t==="change")return n}var Lm=!1;if(pa){var lf;if(pa){var uf="oninput"in document;if(!uf){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),uf=typeof Om.oninput=="function"}lf=uf}else lf=!1;Lm=lf&&(!document.documentMode||9<document.documentMode)}function Pm(){Ro&&(Ro.detachEvent("onpropertychange",Im),Co=Ro=null)}function Im(t){if(t.propertyName==="value"&&Wl(Co)){var n=[];Nm(n,Co,t,jc(t)),Sm(nM,n)}}function iM(t,n,a){t==="focusin"?(Pm(),Ro=n,Co=a,Ro.attachEvent("onpropertychange",Im)):t==="focusout"&&Pm()}function aM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Co)}function rM(t,n){if(t==="click")return Wl(n)}function sM(t,n){if(t==="input"||t==="change")return Wl(n)}function oM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:oM;function wo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Mt.call(n,l)||!ii(t[l],n[l]))return!1}return!0}function cf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bm(t,n){var a=zm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zm(a)}}function Fm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=cf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=cf(t.document)}return n}function ff(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var lM=pa&&"documentMode"in document&&11>=document.documentMode,ls=null,df=null,Do=null,hf=!1;function Gm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hf||ls==null||ls!==cf(r)||(r=ls,"selectionStart"in r&&ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&wo(Do,r)||(Do=r,r=Wu(df,"onSelect"),0<r.length&&(n=new Xl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ls)))}function yr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var us={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},pf={},Vm={};pa&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Er(t){if(pf[t])return pf[t];if(!us[t])return t;var n=us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vm)return pf[t]=n[a];return t}var Xm=Er("animationend"),km=Er("animationiteration"),Wm=Er("animationstart"),uM=Er("transitionrun"),cM=Er("transitionstart"),fM=Er("transitioncancel"),qm=Er("transitionend"),Ym=new Map,mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mf.push("scrollEnd");function Ri(t,n){Ym.set(t,n),Ft(n,[t])}var dM=0;function ma(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ni.identifierPrefix;var a=dM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Zm(t){if(t==null||typeof t=="string")return t;var n=null,a=ws;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ga(t,n){return t=Zm(t),n=Zm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],cs=0,gf=0;function Yl(){for(var t=cs,n=gf=cs=0;n<t;){var a=mi[n];mi[n++]=null;var r=mi[n];mi[n++]=null;var l=mi[n];mi[n++]=null;var c=mi[n];if(mi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&Km(a,l,c)}}function Zl(t,n,a,r){mi[cs++]=t,mi[cs++]=n,mi[cs++]=a,mi[cs++]=r,gf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function _f(t,n,a,r){return Zl(t,n,a,r),Kl(t)}function Tr(t,n){return Zl(t,null,null,n),Kl(t)}function Km(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-ue(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Kl(t){if(50<jo)throw jo=0,Bu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fs={};function hM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new hM(t,n,a,r)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ql(t,n,a,r,l,c){var g=0;if(r=t,typeof r=="function")vf(r)&&(g=1);else if(typeof r=="string")g=Gy(t,a,Ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case yt:return t=Wn(31,a,n,l),t.elementType=yt,t.lanes=c,t;case q:return br(a.children,l,c,n);case et:g=8,l|=24;break;case ct:return t=Wn(12,a,n,l|2),t.elementType=ct,t.lanes=c,t;case W:return t=Wn(13,a,n,l),t.elementType=W,t.lanes=c,t;case ft:return t=Wn(19,a,n,l),t.elementType=ft,t.lanes=c,t;case Jt:case z:return t=l|32,t=Wn(30,a,n,t),t.elementType=z,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:g=10;break t;case J:g=9;break t;case Y:g=11;break t;case st:g=14;break t;case ht:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(g,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function br(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function Sf(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Jm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function xf(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=jm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},jm.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var ds=[],hs=0,Jl=null,No=0,_i=[],vi=0,Ga=null,Vi=1,Xi="";function va(t,n){ds[hs++]=No,ds[hs++]=Jl,Jl=t,No=n}function $m(t,n,a){_i[vi++]=Vi,_i[vi++]=Xi,_i[vi++]=Ga,Ga=t;var r=Vi;t=Xi;var l=32-ue(r)-1;r&=~(1<<l),a+=1;var c=32-ue(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,Vi=1<<32-ue(n)+l|a<<l|r,Xi=c+t}else Vi=1<<c|a<<l|r,Xi=t}function jl(t){t.return!==null&&(va(t,1),$m(t,1,0))}function Mf(t){for(;t===Jl;)Jl=ds[--hs],ds[hs]=null,No=ds[--hs],ds[hs]=null;for(;t===Ga;)Ga=_i[--vi],_i[vi]=null,Xi=_i[--vi],_i[vi]=null,Vi=_i[--vi],_i[vi]=null}function tg(t,n){_i[vi++]=Vi,_i[vi++]=Xi,_i[vi++]=Ga,Vi=n.id,Xi=n.overflow,Ga=t}var yn=null,je=null,Se=!1,Va=null,Si=!1,yf=Error(s(519));function Xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(gi(n,t)),yf}function eg(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[B]=r,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<tl.length;a++)Te(tl[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),hm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),mm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||y_(n.textContent,a)?(r.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),r.onScroll!=null&&Te("scroll",n),r.onScrollEnd!=null&&Te("scrollend",n),r.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||Xa(t,!0)}function $l(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:yn=yn.return}}function ps(t){if(t!==yn)return!1;if(!Se)return $l(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jd(t.type,t.memoizedProps)),a=!a),a&&je&&Xa(t),$l(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=G_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=G_(t)}else n===27?(n=je,rr(t.type)?(t=oh,oh=null,je=t):je=n):je=yn?Mi(t.stateNode.nextSibling):null;return!0}function Ar(){je=yn=null,Se=!1}function Ef(){var t=Va;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Va=null),t}function Uo(t){Va===null?Va=[t]:Va.push(t)}var Tf=Me(null),Rr=null,Sa=null;function ka(t,n,a){ie(Tf,n._currentValue),n._currentValue=a}function xa(t){t._currentValue=Tf.current,ee(Tf)}function tu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function bf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var P=0;P<n.length;P++)if(A.context===n[P]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),tu(c.return,a,t),r||(g=null);break t}c=A.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),tu(g,a,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),tu(l.return,a,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Cr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=l.type;ii(l.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(l===tn.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Fs):t=[Fs])}l=l.return}return t!==null&&bf(n,t,a,r),n.flags|=262144,t!==null}function eu(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wr(t){Rr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return ng(Rr,t)}function nu(t,n){return Rr===null&&wr(t),ng(t,n)}function ng(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(s(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var pM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},mM=o.unstable_scheduleCallback,gM=o.unstable_NormalPriority,hn={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Af(){return{controller:new pM,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&mM(gM,function(){t.controller.abort()})}function ig(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Oo=null;function _M(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Po=null,Rf=0,Dr=0,ms=null;function vM(t,n){if(Po===null){var a=Po=[];Rf=0,Dr=Xd(),ms={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Rf++,n.then(ag,ag),n}function ag(){if(--Rf===0&&(Oo=null,Po!==null)){ms!==null&&(ms.status="fulfilled");var t=Po;Po=null,Dr=0,ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function SM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var rg=_t.S;_t.S=function(t,n){if(J0=Xt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vM(t,n),Oo!==null)for(var a=Ls;a!==null;)ig(a,Oo),a=a.next;if(a=t.types,a!==null){for(var r=Ls;r!==null;)ig(r,a),r=r.next;if(Dr!==0){r=Oo,r===null&&(r=Oo=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}rg!==null&&rg(t,n)};var Nr=Me(null);function Cf(){var t=Nr.current;return t!==null?t:Qe.pooledCache}function iu(t,n){n===null?ie(Nr,Nr.current):ie(Nr,n.pool)}function sg(){var t=Cf();return t===null?null:{parent:hn._currentValue,pool:t}}var gs=Error(s(460)),wf=Error(s(474)),au=Error(s(542)),ru={then:function(){}};function og(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cg(t),t}throw Lr=n,gs}}function Ur(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Lr=a,gs):a}}var Lr=null;function ug(){if(Lr===null)throw Error(s(459));var t=Lr;return Lr=null,t}function cg(t){if(t===gs||t===au)throw Error(s(483))}var _s=null,Io=0;function su(t){var n=Io;return Io+=1,_s===null&&(_s=[]),lg(_s,t,n)}function Wa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ou(t,n){throw n.$$typeof===T?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function fg(t){function n(K,F){if(t){var tt=K.deletions;tt===null?(K.deletions=[F],K.flags|=16):tt.push(F)}}function a(K,F){if(!t)return null;for(;F!==null;)n(K,F),F=F.sibling;return null}function r(K){for(var F=new Map;K!==null;)K.key===null?F.set(K.index,K):F.set(K.key,K),K=K.sibling;return F}function l(K,F){return K=_a(K,F),K.index=0,K.sibling=null,K}function c(K,F,tt){return K.index=tt,t?(tt=K.alternate,tt!==null?(tt=tt.index,tt<F?(K.flags|=2,F):tt):(K.flags|=134217730,F)):(K.flags|=1048576,F)}function g(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function A(K,F,tt,vt){return F===null||F.tag!==6?(F=Sf(tt,K.mode,vt),F.return=K,F):(F=l(F,tt),F.return=K,F)}function P(K,F,tt,vt){var qt=tt.type;return qt===q?(K=ot(K,F,tt.props.children,vt,tt.key),Wa(K,tt),K):F!==null&&(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===ht&&Ur(qt)===F.type)?(F=l(F,tt.props),Wa(F,tt),F.return=K,F):(F=Ql(tt.type,tt.key,tt.props,null,K.mode,vt),Wa(F,tt),F.return=K,F)}function Q(K,F,tt,vt){return F===null||F.tag!==4||F.stateNode.containerInfo!==tt.containerInfo||F.stateNode.implementation!==tt.implementation?(F=xf(tt,K.mode,vt),F.return=K,F):(F=l(F,tt.children||[]),F.return=K,F)}function ot(K,F,tt,vt,qt){return F===null||F.tag!==7?(F=br(tt,K.mode,vt,qt),F.return=K,F):(F=l(F,tt),F.return=K,F)}function St(K,F,tt){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=Sf(""+F,K.mode,tt),F.return=K,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case L:return tt=Ql(F.type,F.key,F.props,null,K.mode,tt),Wa(tt,F),tt.return=K,tt;case G:return F=xf(F,K.mode,tt),F.return=K,F;case ht:return F=Ur(F),St(K,F,tt)}if(zt(F)||Z(F))return F=br(F,K.mode,tt,null),F.return=K,F;if(typeof F.then=="function")return St(K,su(F),tt);if(F.$$typeof===$)return St(K,nu(K,F),tt);ou(K,F)}return null}function k(K,F,tt,vt){var qt=F!==null?F.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return qt!==null?null:A(K,F,""+tt,vt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case L:return tt.key===qt?P(K,F,tt,vt):null;case G:return tt.key===qt?Q(K,F,tt,vt):null;case ht:return tt=Ur(tt),k(K,F,tt,vt)}if(zt(tt)||Z(tt))return qt!==null?null:ot(K,F,tt,vt,null);if(typeof tt.then=="function")return k(K,F,su(tt),vt);if(tt.$$typeof===$)return k(K,F,nu(K,tt),vt);ou(K,tt)}return null}function at(K,F,tt,vt,qt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return K=K.get(tt)||null,A(F,K,""+vt,qt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case L:return K=K.get(vt.key===null?tt:vt.key)||null,P(F,K,vt,qt);case G:return K=K.get(vt.key===null?tt:vt.key)||null,Q(F,K,vt,qt);case ht:return vt=Ur(vt),at(K,F,tt,vt,qt)}if(zt(vt)||Z(vt))return K=K.get(tt)||null,ot(F,K,vt,qt,null);if(typeof vt.then=="function")return at(K,F,tt,su(vt),qt);if(vt.$$typeof===$)return at(K,F,tt,nu(F,vt),qt);ou(F,vt)}return null}function Ot(K,F,tt,vt){for(var qt=null,Re=null,te=F,ae=F=0,gn=null;te!==null&&ae<tt.length;ae++){te.index>ae?(gn=te,te=null):gn=te.sibling;var Ue=k(K,te,tt[ae],vt);if(Ue===null){te===null&&(te=gn);break}t&&te&&Ue.alternate===null&&n(K,te),F=c(Ue,F,ae),Re===null?qt=Ue:Re.sibling=Ue,Re=Ue,te=gn}if(ae===tt.length)return a(K,te),Se&&va(K,ae),qt;if(te===null){for(;ae<tt.length;ae++)te=St(K,tt[ae],vt),te!==null&&(F=c(te,F,ae),Re===null?qt=te:Re.sibling=te,Re=te);return Se&&va(K,ae),qt}for(te=r(te);ae<tt.length;ae++)gn=at(te,K,ae,tt[ae],vt),gn!==null&&(t&&(Ue=gn.alternate,Ue!==null&&te.delete(Ue.key===null?ae:Ue.key)),F=c(gn,F,ae),Re===null?qt=gn:Re.sibling=gn,Re=gn);return t&&te.forEach(function(cr){return n(K,cr)}),Se&&va(K,ae),qt}function Qt(K,F,tt,vt){if(tt==null)throw Error(s(151));for(var qt=null,Re=null,te=F,ae=F=0,gn=null,Ue=tt.next();te!==null&&!Ue.done;ae++,Ue=tt.next()){te.index>ae?(gn=te,te=null):gn=te.sibling;var cr=k(K,te,Ue.value,vt);if(cr===null){te===null&&(te=gn);break}t&&te&&cr.alternate===null&&n(K,te),F=c(cr,F,ae),Re===null?qt=cr:Re.sibling=cr,Re=cr,te=gn}if(Ue.done)return a(K,te),Se&&va(K,ae),qt;if(te===null){for(;!Ue.done;ae++,Ue=tt.next())Ue=St(K,Ue.value,vt),Ue!==null&&(F=c(Ue,F,ae),Re===null?qt=Ue:Re.sibling=Ue,Re=Ue);return Se&&va(K,ae),qt}for(te=r(te);!Ue.done;ae++,Ue=tt.next())Ue=at(te,K,ae,Ue.value,vt),Ue!==null&&(t&&(gn=Ue.alternate,gn!==null&&te.delete(gn.key===null?ae:gn.key)),F=c(Ue,F,ae),Re===null?qt=Ue:Re.sibling=Ue,Re=Ue);return t&&te.forEach(function($y){return n(K,$y)}),Se&&va(K,ae),qt}function he(K,F,tt,vt){if(typeof tt=="object"&&tt!==null&&tt.type===q&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case L:t:{for(var qt=tt.key;F!==null;){if(F.key===qt){if(qt=tt.type,qt===q){if(F.tag===7){a(K,F.sibling),vt=l(F,tt.props.children),Wa(vt,tt),vt.return=K,K=vt;break t}}else if(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===ht&&Ur(qt)===F.type){a(K,F.sibling),vt=l(F,tt.props),Wa(vt,tt),vt.return=K,K=vt;break t}a(K,F);break}else n(K,F);F=F.sibling}tt.type===q?(vt=br(tt.props.children,K.mode,vt,tt.key),Wa(vt,tt),vt.return=K,K=vt):(vt=Ql(tt.type,tt.key,tt.props,null,K.mode,vt),Wa(vt,tt),vt.return=K,K=vt)}return g(K);case G:t:{for(qt=tt.key;F!==null;){if(F.key===qt)if(F.tag===4&&F.stateNode.containerInfo===tt.containerInfo&&F.stateNode.implementation===tt.implementation){a(K,F.sibling),vt=l(F,tt.children||[]),vt.return=K,K=vt;break t}else{a(K,F);break}else n(K,F);F=F.sibling}vt=xf(tt,K.mode,vt),vt.return=K,K=vt}return g(K);case ht:return tt=Ur(tt),he(K,F,tt,vt)}if(zt(tt))return Ot(K,F,tt,vt);if(Z(tt)){if(qt=Z(tt),typeof qt!="function")throw Error(s(150));return tt=qt.call(tt),Qt(K,F,tt,vt)}if(typeof tt.then=="function")return he(K,F,su(tt),vt);if(tt.$$typeof===$)return he(K,F,nu(K,tt),vt);ou(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,F!==null&&F.tag===6?(a(K,F.sibling),vt=l(F,tt),vt.return=K,K=vt):(a(K,F),vt=Sf(tt,K.mode,vt),vt.return=K,K=vt),g(K)):a(K,F)}return function(K,F,tt,vt){try{Io=0;var qt=he(K,F,tt,vt);return _s=null,qt}catch(te){if(te===gs||te===au)throw te;var Re=Wn(29,te,null,K.mode);return Re.lanes=vt,Re.return=K,Re}}}var Or=fg(!0),dg=fg(!1),qa=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Kl(t),Km(t,null,a),n}return Zl(t,r,n,a),Kl(t)}function zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,vo(t,a)}}function Uf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lf=!1;function Bo(){if(Lf){var t=ms;if(t!==null)throw t}}function Fo(t,n,a,r){Lf=!1;var l=t.updateQueue;qa=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var P=A,Q=P.next;P.next=null,g===null?c=Q:g.next=Q,g=P;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,A=ot.lastBaseUpdate,A!==g&&(A===null?ot.firstBaseUpdate=Q:A.next=Q,ot.lastBaseUpdate=P))}if(c!==null){var St=l.baseState;g=0,ot=Q=P=null,A=c;do{var k=A.lane&-536870913,at=k!==A.lane;if(at?(Ae&k)===k:(r&k)===k){k!==0&&k===Dr&&(Lf=!0),ot!==null&&(ot=ot.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=t,Qt=A;k=n;var he=a;switch(Qt.tag){case 1:if(Ot=Qt.payload,typeof Ot=="function"){St=Ot.call(he,St,k);break t}St=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Qt.payload,k=typeof Ot=="function"?Ot.call(he,St,k):Ot,k==null)break t;St=O({},St,k);break t;case 2:qa=!0}}k=A.callback,k!==null&&(t.flags|=64,at&&(t.flags|=8192),at=l.callbacks,at===null?l.callbacks=[k]:at.push(k))}else at={lane:k,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ot===null?(Q=ot=at,P=St):ot=ot.next=at,g|=k;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;at=A,A=at.next,at.next=null,l.lastBaseUpdate=at,l.shared.pending=null}}while(!0);ot===null&&(P=St),l.baseState=P,l.firstBaseUpdate=Q,l.lastBaseUpdate=ot,c===null&&(l.shared.lanes=0),er|=g,t.lanes=g,t.memoizedState=St}}function hg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function pg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)hg(a[t],n)}var Ka=Me(null),lu=Me(0);function mg(t,n){t=ba,ie(lu,t),ie(Ka,n),ba=t|n.baseLanes}function Of(){ie(lu,ba),ie(Ka,Ka.current)}function Pf(){ba=lu.current,ee(Ka),ee(lu)}var Rn=Me(null),On=null;function Qa(t){var n=t.alternate;ie(Cn,Cn.current&1),ie(Rn,t),On===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(On=t)}function If(t){ie(Cn,Cn.current),ie(Rn,t),On===null&&(On=t)}function gg(t){t.tag===22?(ie(Cn,Cn.current),ie(Rn,t),On===null&&(On=t)):Ja()}function Ja(){ie(Cn,Cn.current),ie(Rn,Rn.current)}function ai(t){ee(Rn),On===t&&(On=null),ee(Cn)}var Cn=Me(0);function Ho(t,n){ie(Rn,Rn.current),ie(Cn,n)}function zf(t){ee(Cn),ee(Rn),On===t&&(On=null)}function uu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||sh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,de=null,Ze=null,pn=null,cu=!1,vs=!1,Pr=!1,fu=0,Go=0,Ss=null,xM=0;function on(){throw Error(s(321))}function Bf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Ff(t,n,a,r,l,c){return Ma=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=t===null||t.memoizedState===null?$g:t0,Pr=!1,c=a(r,l),Pr=!1,vs&&(c=vg(n,a,r,l)),_g(t),c}function _g(t){_t.H=vu;var n=Ze!==null&&Ze.next!==null;if(Ma=0,pn=Ze=de=null,cu=!1,Go=0,Ss=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&eu(t)&&(mn=!0))}function vg(t,n,a,r){de=t;var l=0;do{if(vs&&(Ss=null),Go=0,vs=!1,25<=l)throw Error(s(301));if(l+=1,pn=Ze=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_t.H=CM,c=n(a,r)}while(vs);return c}function MM(){var t=_t.H,n=t.useState()[0];return n=typeof n.then=="function"?Vo(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(de.flags|=1024),n}function Hf(){var t=fu!==0;return fu=0,t}function Gf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vf(t){if(cu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cu=!1}Ma=0,pn=Ze=de=null,vs=!1,Go=fu=0,Ss=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?de.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(Ze===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=pn===null?de.memoizedState:pn.next;if(n!==null)pn=n,Ze=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},pn===null?de.memoizedState=pn=t:pn=pn.next=t}return pn}function du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(t){var n=Go;return Go+=1,Ss===null&&(Ss=[]),t=lg(Ss,t,n),n=de,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?$g:t0),t}function hu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vo(t);if(t.$$typeof===mt)return;if(t.$$typeof===$)return An(t)}throw Error(s(438,String(t)))}function Xf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=du(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Zt;return n.index++,a}function ya(t,n){return typeof n=="function"?n(t):n}function pu(t){var n=cn();return kf(n,Ze,t)}function kf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=g=null,P=null,Q=n,ot=!1;do{var St=Q.lane&-536870913;if(St!==Q.lane?(Ae&St)===St:(Ma&St)===St){var k=Q.revertLane;if(k===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),St===Dr&&(ot=!0);else if((Ma&k)===k){Q=Q.next,k===Dr&&(ot=!0);continue}else St={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(A=P=St,g=c):P=P.next=St,de.lanes|=k,er|=k;St=Q.action,Pr&&a(c,St),c=Q.hasEagerState?Q.eagerState:a(c,St)}else k={lane:St,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(A=P=k,g=c):P=P.next=k,de.lanes|=St,er|=St;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?g=c:P.next=A,!ii(c,t.memoizedState)&&(mn=!0,ot&&(a=ms,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=P,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Wf(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);ii(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function Sg(t,n,a){var r=de,l=cn(),c=Se;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ii((Ze||l).memoizedState,a);if(g&&(l.memoizedState=a,mn=!0),l=l.queue,Zf(yg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||pn!==null&&(pn.memoizedState.tag&1)!==0,xs(t?9:8,{destroy:void 0},Mg.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Qe===null)throw Error(s(349));c||(Ma&127)!==0||xg(r,n,a)}return a}function xg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=du(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mg(t,n,a,r){n.value=a,n.getSnapshot=r,Eg(n)&&Tg(t)}function yg(t,n,a){return a(function(){Eg(n)&&Tg(t)})}function Eg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function Tg(t){var n=Tr(t,2);n!==null&&Kn(n,t,2)}function qf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Pr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function bg(t,n,a,r){return t.baseState=a,kf(t,Ze,typeof r=="function"?r:ya)}function yM(t,n,a,r,l){if(_u(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};_t.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Ag(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Ag(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=_t.T,g={};g.types=c!==null?c.types:null,_t.T=g;try{var A=a(l,r),P=_t.S;P!==null&&P(g,A),Rg(t,n,A)}catch(Q){Yf(t,n,Q)}finally{c!==null&&g.types!==null&&(c.types=g.types),_t.T=c}}else try{c=a(l,r),Rg(t,n,c)}catch(Q){Yf(t,n,Q)}}function Rg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Cg(t,n,r)},function(r){return Yf(t,n,r)}):Cg(t,n,a)}function Cg(t,n,a){n.status="fulfilled",n.value=a,wg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ag(t,a)))}function Yf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,wg(n),n=n.next;while(n!==r)}t.action=null}function wg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Dg(t,n){return n}function Ng(t,n){if(Se){var a=Qe.formState;if(a!==null){t:{var r=de;if(Se){if(je){e:{for(var l=je,c=Si;l.nodeType!==8;){if(!c){l=null;break e}if(l=Mi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){je=Mi(l.nextSibling),r=l.data==="F!";break t}}Xa(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dg,lastRenderedState:n},a.queue=r,a=Qg.bind(null,de,r),r.dispatch=a,r=qf(!1),c=$f.bind(null,de,!1,r.queue),r=Hn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=yM.bind(null,de,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function Ug(t){var n=cn();return Lg(n,Ze,t)}function Lg(t,n,a){if(n=kf(t,n,Dg)[0],t=pu(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Vo(n)}catch(g){throw g===gs?au:g}else r=n;n=cn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(de.flags|=2048,xs(9,{destroy:void 0},EM.bind(null,l,a),null)),[r,c,t]}function EM(t,n){t.action=n}function Og(t){var n=cn(),a=Ze;if(a!==null)return Lg(n,a,t);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function xs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=du(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Pg(){return cn().memoizedState}function mu(t,n,a,r){var l=Hn();de.flags|=t,l.memoizedState=xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function gu(t,n,a,r){var l=cn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ze!==null&&r!==null&&Bf(r,Ze.memoizedState.deps)?l.memoizedState=xs(n,c,a,r):(de.flags|=t,l.memoizedState=xs(1|n,c,a,r))}function Ig(t,n){mu(8390656,8,t,n)}function Zf(t,n){gu(2048,8,t,n)}function TM(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=du(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function zg(t){var n=cn().memoizedState;return TM({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Bg(t,n){return gu(4,2,t,n)}function Fg(t,n){return gu(4,4,t,n)}function Hg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Gg(t,n,a){a=a!=null?a.concat([t]):null,gu(4,4,Hg.bind(null,n,t),a)}function Kf(){}function Vg(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Bf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Xg(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Bf(n,r[1]))return r[0];if(r=t(),Pr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r}function Qf(t,n,a){return a===void 0||(Ma&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=$0(),de.lanes|=t,er|=t,a)}function kg(t,n,a,r){return ii(a,n)?a:Ka.current!==null?(t=Qf(t,a,r),ii(t,n)||(mn=!0),t):(Ma&106)===0||(Ma&1073741824)!==0&&(Ae&261930)===0?(mn=!0,t.memoizedState=a):(t=$0(),de.lanes|=t,er|=t,n)}function Wg(t,n,a,r,l){var c=Ct.p;Ct.p=c!==0&&8>c?c:8;var g=_t.T,A={};A.types=g!==null?g.types:null,_t.T=A,$f(t,!1,n,a);try{var P=l(),Q=_t.S;if(Q!==null&&Q(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ot=SM(P,r);Xo(t,n,ot,li(t))}else Xo(t,n,r,li(t))}catch(St){Xo(t,n,{then:function(){},status:"rejected",reason:St},li())}finally{Ct.p=c,g!==null&&A.types!==null&&(g.types=A.types),_t.T=g}}function bM(){}function Jf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=qg(t).queue;Wg(t,l,n,Ge,a===null?bM:function(){return Yg(t),a(r)})}function qg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ge,baseState:Ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:Ge},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Yg(t){var n=qg(t);n.next===null&&(n=t.alternate.memoizedState),Xo(t,n.next.queue,{},li())}function jf(){return An(Fs)}function Zg(){return cn().memoizedState}function Kg(){return cn().memoizedState}function AM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Ya(a);var r=Za(n,t,a);r!==null&&(Kn(r,n,a),zo(r,n,a)),n={cache:Af()},t.payload=n;return}n=n.return}}function RM(t,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_u(t)?Jg(n,a):(a=_f(t,n,a,r),a!==null&&(Kn(a,t,r),jg(a,n,r)))}function Qg(t,n,a){var r=li();Xo(t,n,a,r)}function Xo(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_u(t))Jg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,A=c(g,a);if(l.hasEagerState=!0,l.eagerState=A,ii(A,g))return Zl(t,n,l,0),Qe===null&&Yl(),!1}catch{}if(a=_f(t,n,l,r),a!==null)return Kn(a,t,r),jg(a,n,r),!0}return!1}function $f(t,n,a,r){if(r={lane:2,revertLane:Xd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},_u(t)){if(n)throw Error(s(479))}else n=_f(t,a,r,2),n!==null&&Kn(n,t,2)}function _u(t){var n=t.alternate;return t===de||n!==null&&n===de}function Jg(t,n){vs=cu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,vo(t,a)}}var vu={readContext:An,use:hu,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},$g={readContext:An,use:hu,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Ig,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,mu(4194308,4,Hg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return mu(4194308,4,t,n)},useInsertionEffect:function(t,n){mu(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var r=t();if(Pr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Hn();if(a!==void 0){var l=a(n);if(Pr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=RM.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=qf(t);var n=t.queue,a=Qg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Kf,useDeferredValue:function(t,n){var a=Hn();return Qf(a,t,n)},useTransition:function(){var t=qf(!1);return t=Wg.bind(null,de,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=de,l=Hn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Ae&127)!==0||xg(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Ig(yg.bind(null,r,c,t),[t]),r.flags|=2048,xs(9,{destroy:void 0},Mg.bind(null,r,c,a,n),null),a},useId:function(){var t=Hn(),n=Qe.identifierPrefix;if(Se){var a=Xi,r=Vi;a=(r&~(1<<32-ue(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:jf,useFormState:Ng,useActionState:Ng,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$f.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xf,useCacheRefresh:function(){return Hn().memoizedState=AM.bind(null,de)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},t0={readContext:An,use:hu,useCallback:Vg,useContext:An,useEffect:Zf,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Fg,useMemo:Xg,useReducer:pu,useRef:Pg,useState:function(){return pu(ya)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=cn();return kg(a,Ze.memoizedState,t,n)},useTransition:function(){var t=pu(ya)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:Sg,useId:Zg,useHostTransitionStatus:jf,useFormState:Ug,useActionState:Ug,useOptimistic:function(t,n){var a=cn();return bg(a,Ze,t,n)},useMemoCache:Xf,useCacheRefresh:Kg,useEffectEvent:zg},CM={readContext:An,use:hu,useCallback:Vg,useContext:An,useEffect:Zf,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Fg,useMemo:Xg,useReducer:Wf,useRef:Pg,useState:function(){return Wf(ya)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=cn();return Ze===null?Qf(a,t,n):kg(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Wf(ya)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:Sg,useId:Zg,useHostTransitionStatus:jf,useFormState:Og,useActionState:Og,useOptimistic:function(t,n){var a=cn();return Ze!==null?bg(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:Kg,useEffectEvent:zg};function td(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ed={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=li(),l=Ya(r);l.payload=n,a!=null&&(l.callback=a),n=Za(t,l,r),n!==null&&(Kn(n,t,r),zo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=li(),l=Ya(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Za(t,l,r),n!==null&&(Kn(n,t,r),zo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),r=Ya(a);r.tag=2,n!=null&&(r.callback=n),n=Za(t,r,a),n!==null&&(Kn(n,t,a),zo(n,t,a))}};function e0(t,n,a,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!wo(a,r)||!wo(l,c):!0}function n0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ed.enqueueReplaceState(n,n.state,null)}function Ir(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function i0(t){ql(t)}function a0(t){console.error(t)}function r0(t){ql(t)}function Su(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function s0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function nd(t,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Su(t,n)},a}function o0(t){return t=Ya(t),t.tag=3,t}function l0(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){s0(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){s0(n,a,r),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function wM(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Cr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Hu():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===ru?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Hd(t,r,l)),!1;case 22:return a.flags|=65536,r===ru?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Hd(t,r,l)),!1}throw Error(s(435,a.tag))}return Hd(t,r,l),Hu(),!1}if(Se)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==yf&&(t=Error(s(422),{cause:r}),Uo(gi(t,a)))):(r!==yf&&(n=Error(s(423),{cause:r}),Uo(gi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=gi(r,a),l=nd(t.stateNode,r,l),Uf(t,l),ln!==4&&(ln=2)),!1;var c=Error(s(520),{cause:r});if(c=gi(c,a),Jo===null?Jo=[c]:Jo.push(c),ln!==4&&(ln=2),n===null)return!0;r=gi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=nd(a.stateNode,r,t),Uf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(nr===null||!nr.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=o0(l),l0(l,t,a,r),Uf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var id=Error(s(461)),mn=!1;function Sn(t,n,a,r){n.child=t===null?dg(n,null,a,r):Or(n,t.child,a,r)}function u0(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return wr(n),r=Ff(t,n,a,g,c,l),A=Hf(),t!==null&&!mn?(Gf(t,n,l),Ea(t,n,l)):(Se&&A&&jl(n),n.flags|=1,Sn(t,n,r,l),n.child)}function c0(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!vf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,f0(t,n,c,r,l)):(t=Ql(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!fd(t,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(g,r)&&t.ref===n.ref)return Ea(t,n,l)}return n.flags|=1,t=_a(c,r),t.ref=n.ref,t.return=n,n.child=t}function f0(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(wo(c,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=c,fd(t,l))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Ea(t,n,l)}return ad(t,n,a,r,l)}function d0(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return h0(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&iu(n,c!==null?c.cachePool:null),c!==null?mg(n,c):Of(),gg(n);else return r=n.lanes=536870912,h0(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(iu(n,c.cachePool),mg(n,c),Ja(),n.memoizedState=null):(t!==null&&iu(n,null),Of(),Ja());return Sn(t,n,l,a),n.child}function ko(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function h0(t,n,a,r,l){var c=Cf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&iu(n,null),Of(),gg(n),t!==null&&Cr(t,n,r,!0),n.childLanes=l,null}function xu(t,n){return n=Mu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function p0(t,n,a){return Or(n,t.child,null,a),t=xu(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function DM(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=xu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},ko(null,t);if(If(n),(t=je)?(t=H_(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=Jm(t),a.return=n,n.child=a,yn=n,je=null)):t=null,t===null)throw Xa(n);return n.lanes=536870912,null}return xu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(If(n),l)if(n.flags&256)n.flags&=-257,n=p0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Cr(t,n,a,!1),l=(a&t.childLanes)!==0,mn||l){if(Ka.current===null){if(r=Qe,r!==null&&(g=So(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,Tr(t,g),Kn(r,t,g),id;Hu()}n=p0(t,n,a)}else t=c.treeContext,je=Mi(g.nextSibling),yn=n,Se=!0,Va=null,Si=!1,t!==null&&tg(n,t),n=xu(n,r),n.flags|=134221824;return n}return t=_a(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ms(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ad(t,n,a,r,l){return wr(n),a=Ff(t,n,a,r,void 0,l),r=Hf(),t!==null&&!mn?(Gf(t,n,l),Ea(t,n,l)):(Se&&r&&jl(n),n.flags|=1,Sn(t,n,a,l),n.child)}function m0(t,n,a,r,l,c){return wr(n),n.updateQueue=null,a=vg(n,r,a,l),_g(t),r=Hf(),t!==null&&!mn?(Gf(t,n,c),Ea(t,n,c)):(Se&&r&&jl(n),n.flags|=1,Sn(t,n,a,c),n.child)}function g0(t,n,a,r,l){if(wr(n),n.stateNode===null){var c=fs,g=a.contextType;typeof g=="object"&&g!==null&&(c=An(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ed,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Df(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?An(g):fs,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(td(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&ed.enqueueReplaceState(c,c.state,null),Fo(n,r,c,l),Bo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,P=Ir(a,A);c.props=P;var Q=c.context,ot=a.contextType;g=fs,typeof ot=="object"&&ot!==null&&(g=An(ot));var St=a.getDerivedStateFromProps;ot=typeof St=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ot||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||Q!==g)&&n0(n,c,r,g),qa=!1;var k=n.memoizedState;c.state=k,Fo(n,r,c,l),Bo(),Q=n.memoizedState,A||k!==Q||qa?(typeof St=="function"&&(td(n,a,St,r),Q=n.memoizedState),(P=qa||e0(n,a,P,r,k,Q,g))?(ot||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),c.props=r,c.state=Q,c.context=g,r=P):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Nf(t,n),g=n.memoizedProps,ot=Ir(a,g),c.props=ot,St=n.pendingProps,k=c.context,Q=a.contextType,P=fs,typeof Q=="object"&&Q!==null&&(P=An(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==St||k!==P)&&n0(n,c,r,P),qa=!1,k=n.memoizedState,c.state=k,Fo(n,r,c,l),Bo();var at=n.memoizedState;g!==St||k!==at||qa||t!==null&&t.dependencies!==null&&eu(t.dependencies)?(typeof A=="function"&&(td(n,a,A,r),at=n.memoizedState),(ot=qa||e0(n,a,ot,r,k,at,P)||t!==null&&t.dependencies!==null&&eu(t.dependencies))?(Q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,at,P),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,at,P)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),c.props=r,c.state=at,c.context=P,r=ot):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,Ms(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Or(n,t.child,null,l),n.child=Or(n,null,a,l)):Sn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=Ea(t,n,l),t}function _0(t,n,a,r){return Ar(),n.flags|=256,Sn(t,n,a,r),n.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sd(t){return{baseLanes:t,cachePool:sg()}}function od(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function v0(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(l?Qa(n):Ja(),(t=je)?(t=H_(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=Jm(t),a.return=n,n.child=a,yn=n,je=null)):t=null,t===null)throw Xa(n);return sh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ja(),l=n.mode,c=Mu({mode:"hidden",children:c},l),r=br(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=sd(a),r.childLanes=od(t,g,a),n.memoizedState=rd,ko(null,r)):(Qa(n),ld(n,c))}var A=t.memoizedState;if(A!==null){var P=A.dehydrated;if(P!==null)return NM(t,n,c,g,r,P,A,a)}return l?(Ja(),l=r.fallback,c=n.mode,A=t.child,P=A.sibling,r=_a(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,P!==null?l=_a(P,l):(l=br(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,ko(null,r),r=n.child,l=t.child.memoizedState,l===null?l=sd(a):(c=l.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=sg(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=od(t,g,a),n.memoizedState=rd,ko(t.child,r)):(Qa(n),a=t.child,t=a.sibling,a=_a(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ld(t,n){return n=Mu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Mu(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function yu(t,n,a){return Or(n,t.child,null,a),t=ld(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function NM(t,n,a,r,l,c,g,A){if(a)return n.flags&256?(Qa(n),n.flags&=-257,yu(t,n,A)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),c=l.fallback,g=n.mode,l=Mu({mode:"visible",children:l.children},g),c=br(c,g,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Or(n,t.child,null,A),l=n.child,l.memoizedState=sd(A),l.childLanes=od(t,r,A),n.memoizedState=rd,ko(null,l));if(Qa(n),sh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Uo({value:l,source:null,stack:null})),yu(t,n,A)}if(mn||Cr(t,n,A,!1),r=(A&t.childLanes)!==0,mn||r){if(Ka.current!==null)return yu(t,n,A);if(r=Qe,r!==null&&(l=So(r,A),l!==0&&l!==g.retryLane))throw g.retryLane=l,Tr(t,l),Kn(r,t,l),id;return rh(c)||Hu(),yu(t,n,A)}return rh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,je=Mi(c.nextSibling),yn=n,Se=!0,Va=null,Si=!1,t!==null&&tg(n,t),n=ld(n,l.children),n.flags|=134221824,n)}function S0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),tu(t.return,n,a)}function x0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&uu(a)===null&&(n=t),t=t.sibling}return n}function Eu(t,n,a,r,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=l,g.treeForkCount=c)}function ud(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function cd(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return Ho(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Ho(n,g),l==="backwards"&&t!==null?(ud(t),Sn(t,n,r,a),ud(t)):Sn(t,n,r,a),r=Se?No:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,a,n);else if(t.tag===19)S0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=x0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,ud(n)),Eu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&uu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Eu(n,!0,a,null,c,r);break;case"together":Eu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=x0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),Eu(n,!1,l,a,c,r)}return n.child}function M0(t,n,a){var r=n.pendingProps;return ka(n,n.type,r.value),Sn(t,n,r.children,a),n.child}function Ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),er|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Cr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=_a(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=_a(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function fd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&eu(t)))}function UM(t,n,a){switch(n.tag){case 3:X(n,n.stateNode.containerInfo),ka(n,hn,t.memoizedState.cache),Ar();break;case 27:case 5:Le(n);break;case 4:X(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,If(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Qa(n),n.flags|=128,null;r=Cr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?v0(t,n,a):(Qa(n),t=Ea(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return cd(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Cr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return cd(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ho(n,Cn.current),r)break;return null;case 22:return n.lanes=0,d0(t,n,a,n.pendingProps);case 24:ka(n,hn,t.memoizedState.cache)}return Ea(t,n,a)}function y0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!fd(t,a)&&(n.flags&128)===0)return mn=!1,UM(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Se&&(n.flags&1048576)!==0&&$m(n,No,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ur(n.elementType),n.type=t,typeof t=="function")vf(t)?(r=Ir(t,r),n.tag=1,n=g0(null,n,t,r,a)):(n.tag=0,n=ad(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===Y){n.tag=11,n=u0(null,n,t,r,a);break t}else if(l===st){n.tag=14,n=c0(null,n,t,r,a);break t}else if(l===$){n.tag=10,n.type=t,n=M0(null,n,a);break t}}throw n=bt(t)||t,Error(s(306,n,""))}}return n;case 0:return ad(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Ir(r,n.pendingProps),g0(t,n,r,l,a);case 3:t:{if(X(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Nf(t,n),Fo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,ka(n,hn,r),r!==c.cache&&bf(n,[hn],a,!0),Bo(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=_0(t,n,r,a);break t}else if(r!==l){l=gi(Error(s(424)),n),Uo(l),n=_0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=Mi(t.firstChild),yn=n,Se=!0,Va=null,Si=!0,a=dg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ar(),r===l){n=Ea(t,n,a);break t}Sn(t,n,r,a)}n=n.child}return n;case 26:return Ms(t,n),t===null?(a=Y_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=A_(n.type,n.pendingProps,Pe.current,n)):n.memoizedState=Y_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Le(n),t===null&&Se&&(r=n.stateNode=X_(n.type,n.pendingProps,Pe.current),yn=n,Si=!0,l=je,rr(n.type)?(oh=l,je=Mi(r.firstChild)):je=l),Sn(t,n,n.pendingProps.children,a),Ms(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((l=r=je)&&(r=Ay(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,yn=n,je=Mi(r.firstChild),Si=!1,l=!0):l=!1),l||Xa(n)),Le(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,jd(l,c)?r=null:g!==null&&jd(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Ff(t,n,MM,null,null,a),Fs._currentValue=l),Ms(t,n),Sn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=je)&&(a=Ry(a,n.pendingProps,Si),a!==null?(n.stateNode=a,yn=n,je=null,t=!0):t=!1),t||Xa(n)),null;case 13:return v0(t,n,a);case 4:return X(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Or(n,null,r,a):Sn(t,n,r,a),n.child;case 11:return u0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ms(t,n),Sn(t,n,r,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return M0(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,wr(n),l=An(l),r=r(l),n.flags|=1,Sn(t,n,r,a),n.child;case 14:return c0(t,n,n.type,n.pendingProps,a);case 15:return f0(t,n,n.type,n.pendingProps,a);case 19:return cd(t,n,a);case 31:return DM(t,n,a);case 22:return d0(t,n,a,n.pendingProps);case 24:return wr(n),r=An(hn),t===null?(l=Cf(),l===null&&(l=Qe,c=Af(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},Df(n),ka(n,hn,l)):((t.lanes&a)!==0&&(Nf(t,n),Fo(n,null,null,a),Bo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),ka(n,hn,r)):(r=c.cache,ka(n,hn,r),r!==l.cache&&bf(n,[hn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&jl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Ms(t,n),Sn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(t){t.flags|=4}function dd(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?J_(n,r):J_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(i_())t.flags|=8192;else throw Lr=ru,wf}else t.flags&=-16777217}function E0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j_(n))if(i_())t.flags|=8192;else throw Lr=ru,wf}function Tu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_o():536870912,t.lanes|=n,As|=n)}function Wo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function LM(t,n,a){var r=n.pendingProps;switch(Mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),xa(hn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ps(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ef())),$e(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(Ta(n),c!==null?($e(n),E0(n,c)):($e(n),dd(n,l,null,r,a))):c?c!==t.memoizedState?(Ta(n),$e(n),E0(n,c)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ta(n),$e(n),dd(n,l,t,r,a)),null;case 27:if(D(n),a=Pe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}t=Ve.current,ps(n)?eg(n):(t=X_(l,r,a),n.stateNode=t,Ta(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(D(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(c=Ve.current,ps(n))eg(n);else{var g=nl(Pe.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[b]=n,c[B]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Dn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ta(n)}}return $e(n),n.subtreeFlags&=-33554433,dd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Pe.current,ps(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||y_(t.nodeValue,a)),t||Xa(n,!0)}else t=nl(t).createTextNode(r),t[b]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ps(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ps(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[b]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),l=!1}else l=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Tu(n,n.updateQueue),$e(n),null);case 4:return nn(),t===null&&Yd(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return xa(n.type),$e(n),null;case 19:if(zf(n),r=n.memoizedState,r===null)return $e(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Wo(r,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=uu(t),c!==null){for(n.flags|=128,Wo(r,!1),t=c.updateQueue,n.updateQueue=t,Tu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Qm(a,t),a=a.sibling;return Ho(n,Cn.current&1|2),Se&&va(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Xt()>Iu&&(n.flags|=128,l=!0,Wo(r,!1),n.lanes=4194304)}else{if(!l)if(t=uu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Tu(n,t),Wo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return $e(n),null}else 2*Xt()-r.renderingStartTime>Iu&&a!==536870912&&(n.flags|=128,l=!0,Wo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Xt(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Ho(n,c):(a=c,ie(Rn,n),ie(Cn,a),On===null&&(On=n)),Se&&va(n,r.treeForkCount),t}return $e(n),null;case 22:case 23:return ai(n),Pf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Tu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ee(Nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(hn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function OM(t,n){switch(Mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return xa(hn),nn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return D(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return zf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return xa(n.type),null;case 22:case 23:return ai(n),Pf(),t!==null&&ee(Nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return xa(hn),null;case 25:return null;default:return null}}function T0(t,n){switch(Mf(n),n.tag){case 3:xa(hn),nn();break;case 26:case 27:case 5:D(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:zf(n);break;case 10:xa(n.type);break;case 22:case 23:ai(n),Pf(),t!==null&&ee(Nr);break;case 24:xa(hn)}}function qo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==l)}}catch(A){ke(n,n.return,A)}}function ja(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,l=n;var P=a,Q=A;try{Q()}catch(ot){ke(l,P,ot)}}}r=r.next}while(r!==c)}}catch(ot){ke(n,n.return,ot)}}function b0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{pg(n,a)}catch(r){ke(t,t.return,r)}}}function A0(t,n,a){a.props=Ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ma(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=L_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ui(t);_(t.child,!1,Ty,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){ke(t,n,A)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){ke(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ke(t,n,l)}else a.current=null}function bu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)F_(t.stateNode,n[a])}function R0(t){for(var n=t.return;n!==null&&(pd(n)&&F_(t.stateNode,n.stateNode),!hd(n));)n=n.return}function Yo(t){for(var n=t.return;n!==null&&(pd(n)&&by(t.stateNode,n.stateNode),!hd(n));)n=n.return}function hd(t){return t.tag===5||t.tag===3||t.tag===27}function pd(t){return t&&t.tag===7&&t.stateNode!==null}function md(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){ke(t,t.return,l)}}function gd(t,n,a){try{var r=t.stateNode;sy(r,t.type,a,n),r[B]=n}catch(l){ke(t,t.return,l)}}function C0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rr(t.type)||t.tag===4}function _d(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi)),bu(t,r),ve=!0;else if(l!==4&&(l===27&&(bu(t,r),r=null,rr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(vd(t,n,a,r),t=t.sibling;t!==null;)vd(t,n,a,r),t=t.sibling}function Au(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),bu(t,r),ve=!0;else if(l!==4&&(l===27&&(bu(t,r),r=null,rr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Au(t,n,a,r),t=t.sibling;t!==null;)Au(t,n,a,r),t=t.sibling}function w0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,r,a),n[b]=t,n[B]=a}catch(c){ke(t,t.return,c)}}var Ru=!1,ri=null;function D0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ru=!0)}var Wi=null;function N0(){var t=Wi;return Wi=null,t}var qn=0;function ys(t,n,a,r,l){return qn=0,U0(t.child,n,a,r,l)}function U0(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var A=eh(g);r.push(A),A.view&&(c=!0)}else c||eh(g).view&&(c=!0);Ru=!0,N_(g,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||U0(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function qi(t,n){for(;t!==null;)t.tag===5?U_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||qi(t.child,n)),t=t.sibling}function Cu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Cu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(ys(t,a,n,null,!1)||qi(t.child,!1))}t=t.sibling}}function Sd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=ma(r,a),c=ga(r.default,a.paired?r.share:r.enter);c!=="none"?ys(t,l,c,null,!1)?(Cu(t),a.paired||n||Ds(t,r.onEnter)):qi(t.child,!1):Cu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sd(t,n),t=t.sibling;else Cu(t)}function xd(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ga(a.default,a.share);if(c!=="none"&&(ys(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Ds(t,a.onShare)):qi(t.child,!1)),n.delete(r),n.size===0)break}}}xd(t)}t=t.sibling}}}function Md(t){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode),r=ri!==null?ri.get(a):void 0,l=ga(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(ys(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ri.delete(a),Ds(t,n.onShare)):Ds(t,n.onExit):qi(t.child,!1)),ri!==null&&xd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Md(t),t=t.sibling;else ri!==null&&xd(t)}function L0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode);n=ga(n.default,n.update),t.flags&=-5,n!=="none"&&ys(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&L0(t);t=t.sibling}}function yd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,qi(t.child,!1))}yd(t)}t=t.sibling}}function wu(t){if(t.tag===30)t.stateNode.paired=null,qi(t.child,!1),yd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)wu(t),t=t.sibling;else yd(t)}function O0(t){for(t=t.child;t!==null;)t.tag===30?qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&O0(t),t=t.sibling}function Ed(t,n,a,r,l,c,g){for(var A=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(c!==null&&qn<c.length){var Q=c[qn],ot=eh(P);(Q.view||ot.view)&&(A=!0);var St;if(St=(t.flags&4)===0)if(ot.clip)St=!0;else{St=Q.rect;var k=ot.rect;St=St.y!==k.y||St.x!==k.x||St.height!==k.height||St.width!==k.width}St&&(t.flags|=4),ot.abs?ot=!Q.abs:(Q=Q.rect,ot=ot.rect,ot=Q.height!==ot.height||Q.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&N_(P,qn===0?a:a+"_"+qn,l),A&&(t.flags&4)!==0||(Wi===null&&(Wi=[]),Wi.push(P,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:Ed(t,n.child,a,r,l,c,g)&&(A=!0));n=n.sibling}return A}function P0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=ma(a,r),c=ga(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;qn=0,l=Ed(r,A,l,l,c,g,!1),(t.flags&4)!==0&&l&&Ds(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&P0(t);t=t.sibling}}var En=!1,He=!1,Yi=!1,Td=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Zi=!1,Zo=!1,Du=!1,bd=!1;function PM(t,n,a){if(t=t.containerInfo,Qd=Hs,t=Hm(t),ff(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var A=0,P=-1,Q=-1,ot=0,St=0,k=t,at=null;e:for(;;){for(var Ot;k!==r||c!==0&&k.nodeType!==3||(P=A+c),k!==g||l!==0&&k.nodeType!==3||(Q=A+l),k.nodeType===3&&(A+=k.nodeValue.length),(Ot=k.firstChild)!==null;)at=k,k=Ot;for(;;){if(k===t)break e;if(at===r&&++ot===c&&(P=A),at===g&&++St===l&&(Q=A),(Ot=k.nextSibling)!==null)break;k=at,at=k.parentNode}k=Ot}r=P===-1||Q===-1?null:{start:P,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jd={focusedElem:t,selectionRange:r},Hs=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&Md(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&D0(t),Nu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Md(r),Nu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&D0(t),Nu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&L0(t),Nu(a))}}ri=null}function Nu(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Ir(n.type,l);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){ke(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ah(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ah(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ma(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ga(l.default,l.update),l!=="none"&&ys(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function z0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(t,a),r&4&&qo(5,a);break;case 1:if(Ki(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ke(a,a.return,g)}else{var l=Ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ke(a,a.return,g)}}r&64&&b0(a),r&512&&ki(a,a.return);break;case 3:if(Ki(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pg(t,n)}catch(g){ke(a,a.return,g)}}break;case 27:n===null&&r&4&&w0(a);case 26:case 5:Ki(t,a),n===null&&r&4&&md(a),r&512&&ki(a,a.return);break;case 12:Ki(t,a);break;case 31:Ki(t,a),r&4&&G0(t,a);break;case 13:Ki(t,a),r&4&&V0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=YM.bind(null,a),Cy(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var c=n!==null&&n.memoizedState!==null||He;n=En,l=He,En=r,(He=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Di(t,a,r)):Ki(t,a),En=n,He=l}break;case 30:Ki(t,a),r&512&&ki(a,a.return);break;case 7:r&512&&ki(a,a.return);default:Ki(t,a)}}function Ad(t,n){for(t=t.child;t!==null;)B0(t,n),t=t.sibling}function B0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(P){ke(t,t.return,P)}Rd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ve=!0}catch(P){ke(t,t.return,P)}break;case 18:try{var A=t.stateNode;n?D_(A,!0):D_(t.stateNode,!1)}catch(P){ke(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Ad(t,n);break;default:Ad(t,n)}}function Rd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:B0(a,r);break t;case 22:a.memoizedState===null&&Rd(a,r);break t;default:Rd(a,r)}}t=t.sibling}}function F0(t){var n=t.alternate;n!==null&&(t.alternate=null,F0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Kt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Yn=!1;function Ci(t,n,a){for(a=a.child;a!==null;)H0(t,n,a),a=a.sibling}function H0(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:He||wn(a,n),Ci(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||wn(a,n),Yo(a);var r=en,l=Yn;rr(a.type)&&(en=a.stateNode,Yn=!1),Ci(t,n,a),k_(a.stateNode,a.type,a.memoizedProps),en=r,Yn=l;break;case 5:He||wn(a,n),Yo(a);case 6:if(a.tag===6&&Yo(a),r=en,l=Yn,en=null,Ci(t,n,a),en=r,Yn=l,en!==null)if(Yn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ve=!0}catch(c){ke(a,n,c)}else try{en.removeChild(a.stateNode),ve=!0}catch(c){ke(a,n,c)}break;case 18:en!==null&&(Yn?(t=en,w_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gs(t)):w_(en,a.stateNode));break;case 4:r=en,l=Yn,en=a.stateNode.containerInfo,Yn=!0,Ci(t,n,a),en=r,Yn=l;break;case 0:case 11:case 14:case 15:ja(2,a,n),He||ja(4,a,n),Ci(t,n,a);break;case 1:He||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&A0(a,n,r)),Ci(t,n,a);break;case 21:Ci(t,n,a);break;case 22:He=(r=He)||a.memoizedState!==null,Ci(t,n,a),He=r;break;case 30:wn(a,n),Ci(t,n,a);break;case 7:He||wn(a,n),Ci(t,n,a);break;default:Ci(t,n,a)}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gs(t)}catch(a){ke(n,n.return,a)}}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(a){ke(n,n.return,a)}}function IM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new I0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new I0),n;default:throw Error(s(435,t.tag))}}function Uu(t,n){var a=IM(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=ZM.bind(null,t,r);r.then(l,l)}})}function Gn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=t,A=n,P=A;t:for(;P!==null;){switch(P.tag){case 27:if(rr(P.type)){en=P.stateNode,Yn=!1;break t}break;case 5:en=P.stateNode,Yn=!1;break t;case 3:case 4:en=P.stateNode.containerInfo,Yn=!0;break t}P=P.return}if(en===null)throw Error(s(160));H0(g,A,c),en=null,Yn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,t,a),n=n.sibling}var wi=null;function X0(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}Gn(n,t,a),Vn(t),l&4&&(ja(3,t,t.return),qo(3,t),ja(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),l&512&&(He||r===null||wn(r,r.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=wi,Gn(n,t,a),Vn(t),l&512&&(He||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=A_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Lt]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,n,a),r[b]=t,_e(r),n=r;break t;case"link":if(c=Q_("link","href",l).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=Q_("meta","content",l).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,_e(r),n=r}t.stateNode=n}else En||fh(c,t.type,t.stateNode);else t.stateNode=K_(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||He||n.parentNode.removeChild(n)):l.count--,a===null?En||fh(c,t.type,t.stateNode):K_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&gd(t,t.memoizedProps,r.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),l&512&&(He||r===null||wn(r,r.return)),r!==null&&l&4&&gd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Yi,Yi=!1,Gn(n,t,a),Yi=c,Vn(t),l&512&&(He||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{as(n,""),ve=!0}catch(ot){ke(t,t.return,ot)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,gd(t,n,r!==null?r.memoizedProps:n)),l&1024&&(Td=!0);break;case 6:if(Gn(n,t,a),Vn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ve=!0}catch(ot){ke(t,t.return,ot)}}break;case 3:if(ve=!1,Yu=null,c=wi,wi=il(n.containerInfo),Gn(n,t,a),wi=c,Vn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(ot){ke(t,t.return,ot)}Td&&(Td=!1,k0(t)),ve=!1;break;case 4:l=Yi,Yi=En,r=Ie(),c=wi,wi=il(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),wi=c,ve&&Zo&&(Du=!0),ve=r,Yi=l;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Pu=Xt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var A=En,P=He,Q=Yi;En=A||c,Yi=Q||c,He=P||g,Gn(n,t,a),He=P,Yi=Q,En=A,Vn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||En||He||(n=g||He,a=En,r=He,En=c||En,He=n,$a(t,2),En=a,He=r),!c&&Yi||Ad(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Uu(t,a))));break;case 19:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 30:l&512&&(He||r===null||wn(r,r.return)),l=Ie(),c=Zo,g=(a&335544064)===a,A=t.memoizedProps,Zo=g&&ga(A.default,A.update)!=="none",Gn(n,t,a),Vn(t),g&&r!==null&&ve&&(t.flags|=4),Zo=c,ve=l;break;case 21:break;case 7:l&512&&(He||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(C0(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(pd(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(hd(l))break;l=l.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,P=_d(t);Au(t,P,A,g);break;case 5:var Q=a.stateNode;a.flags&32&&(as(Q,""),a.flags&=-33);var ot=_d(t);Au(t,ot,Q,g);break;case 3:case 4:var St=a.stateNode.containerInfo,k=_d(t);vd(t,k,St,g);break;default:throw Error(s(161))}}catch(at){ke(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function k0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;k0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hs=!0,n.reset(),Hs=!1),t=t.sibling}}function Es(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)W0(n,t),n=n.sibling;else P0(n)}function W0(t,n){var a=t.alternate;if(a===null)Sd(t,!1);else switch(t.tag){case 3:if(bd=Zi=!1,N0(),Es(n,t),!Zi&&!Du){if(t=Wi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];U_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),bd=!0}Wi=null;break;case 5:Es(n,t);break;case 4:r=Zi,Zi=!1,Es(n,t),Zi&&(Du=!0),Zi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Sd(t,!1):Es(n,t));break;case 30:r=Zi,l=N0(),Zi=!1,Es(n,t),Zi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=ma(c,g),g=ma(a.memoizedProps,g);var A=ga(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=Ed(t,a,n,g,A,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ds(t,t.memoizedProps.onUpdate),Wi=l):l!==null&&(l.push.apply(l,Wi),Wi=l),Zi=(t.flags&32)!==0?!0:r;break;default:Es(n,t)}}function Ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)z0(t,n.alternate,n),n=n.sibling}function $a(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),$a(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&A0(a,a.return,l),$a(a,r);break;case 27:(r&2)!==0&&k_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Yo(a),$a(a,r);break;case 6:Yo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||He||l.parentNode.removeChild(l),$a(a,r);break;case 22:a.memoizedState===null&&$a(a,r);break;case 30:wn(a,a.return),$a(a,r);break;case 7:wn(a,a.return);default:$a(a,r)}t=t.sibling}}function Di(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,g=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Di(l,c,a),qo(4,c);break;case 1:if(Di(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ot){ke(r,r.return,ot)}if(r=c,l=r.updateQueue,l!==null){var P=r.stateNode;try{var Q=l.shared.hiddenCallbacks;if(Q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Q.length;l++)hg(Q[l],P)}catch(ot){ke(r,r.return,ot)}}A&&g&64&&b0(c),ki(c,c.return);break;case 27:(a&2)!==0&&w0(c);case 5:c.tag!==5&&c.tag!==27||R0(c),Di(l,c,a),A&&r===null&&g&4&&md(c),ki(c,c.return);break;case 6:R0(c);break;case 26:P=c.stateNode,c.memoizedState!==null||P===null||En||fh(il(P.ownerDocument),c.type,P),Di(l,c,a),A&&r===null&&g&4&&md(c),ki(c,c.return);break;case 12:Di(l,c,a);break;case 31:Di(l,c,a),A&&g&4&&G0(l,c);break;case 13:Di(l,c,a),A&&g&4&&V0(l,c);break;case 22:c.memoizedState===null&&Di(l,c,a),ki(c,c.return);break;case 30:Di(l,c,a),ki(c,c.return);break;case 7:ki(c,c.return);default:Di(l,c,a)}n=n.sibling}}function Cd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Lo(a))}function wd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Lo(t))}function xi(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)q0(t,n,a,r),n=n.sibling;else l&&O0(n)}function q0(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&wu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),c&2048&&qo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),l&&bd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Lo(c)));break;case 12:if(c&2048){xi(t,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,A=g.id,P=g.onPostCommit;typeof P=="function"&&P(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Q){ke(n,n.return,Q)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&wu(A),g._visibility&2?xi(t,n,a,r):Ko(t,n)):(l&&A!==null&&A.memoizedState!==null&&wu(n),g._visibility&2?xi(t,n,a,r):(g._visibility|=2,Ts(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Cd(A,n);break;case 24:xi(t,n,a,r),c&2048&&wd(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(qi(c.child,!0),qi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function Ts(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,A=a,P=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:Ts(c,g,A,P,l),qo(8,g);break;case 23:break;case 22:var ot=g.stateNode;g.memoizedState!==null?ot._visibility&2?Ts(c,g,A,P,l):Ko(c,g):(ot._visibility|=2,Ts(c,g,A,P,l)),l&&Q&2048&&Cd(g.alternate,g);break;case 24:Ts(c,g,A,P,l),l&&Q&2048&&wd(g.alternate,g);break;default:Ts(c,g,A,P,l)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Ko(a,r),l&2048&&Cd(r.alternate,r);break;case 24:Ko(a,r),l&2048&&wd(r.alternate,r);break;default:Ko(a,r)}n=n.sibling}}var zr=8192;function Br(t,n,a){if(t.subtreeFlags&zr)for(t=t.child;t!==null;)Y0(t,n,a),t=t.sibling}function Y0(t,n,a){switch(t.tag){case 26:Br(t,n,a),t.flags&zr&&(t.memoizedState!==null?Vy(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&tv(a,t)));break;case 5:Br(t,n,a),t.flags&zr&&(t=t.stateNode,(n&335544128)===n&&tv(a,t));break;case 3:case 4:var r=wi;wi=il(t.stateNode.containerInfo),Br(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=zr,zr=16777216,Br(t,n,a),zr=r):Br(t,n,a));break;case 30:if((t.flags&zr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(r,l)}Br(t,n,a);break;default:Br(t,n,a)}}function Z0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Q0(r,t)}Z0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K0(t),t=t.sibling}function K0(t){switch(t.tag){case 0:case 11:case 15:Qo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Qo(t);break;case 12:Qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Lu(t)):Qo(t);break;default:Qo(t)}}function Lu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Q0(r,t)}Z0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Lu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Lu(n));break;default:Lu(n)}t=t.sibling}}function Q0(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var l=r.sibling,c=r.return;if(F0(r),r===a){Tn=null;break t}if(l!==null){l.return=c,Tn=l;break t}Tn=c}}}var zM={getCacheForType:function(t){var n=An(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(hn).controller.signal}},BM=typeof WeakMap=="function"?WeakMap:Map,ze=0,Qe=null,Ee=null,Ae=0,Xe=0,si=null,tr=!1,bs=!1,Dd=!1,ba=0,ln=0,er=0,Fr=0,Ou=0,oi=0,As=0,Jo=null,Zn=null,Nd=!1,Pu=0,J0=0,Iu=1/0,zu=null,nr=null,an=0,Ni=null,Hr=null,Qi=0,Ud=0,Ld=null,j0=null,Rs=null,Cs=null,ws=null,jo=0,Bu=null;function li(){return(ze&2)!==0&&Ae!==0?Ae&-Ae:_t.T!==null?Xd():Il()}function $0(){if(oi===0)if((Ae&536870912)===0||Se){var t=Sr;Sr<<=1,(Sr&3932160)===0&&(Sr=262144),oi=t}else oi=536870912;return t=Rn.current,t!==null&&(t.flags|=32),oi}function Ds(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=L_(ma(t.memoizedProps,a))),Cs===null&&(Cs=[]),Cs.push(n.bind(null,r))}}function Kn(t,n,a){(t===Qe&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Ns(t,0),ir(t,Ae,oi,!1)),Fi(t,a),((ze&2)===0||t!==Qe)&&(t===Qe&&((ze&2)===0&&(Fr|=a),ln===4&&ir(t,Ae,oi,!1)),Ji(t))}function t_(t,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ba(t,n),l=r?GM(t,n):Pd(t,n,!0),c=r;do{if(l===0){bs&&!r&&ir(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!FM(a)){l=Pd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;l=Jo;var P=A.current.memoizedState.isDehydrated;if(P&&(Ns(A,g).flags|=256),g=Pd(A,g,!1),g!==2&&g!==6){if(Dd&&!P){A.errorRecoveryDisabledLanes|=c,Fr|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){Ns(t,0),ir(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ir(r,n,oi,!tr);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Pu+300-Xt(),10<l)){if(ir(r,n,oi,!tr),xr(r,0,!0)!==0)break t;Qi=n,r.timeoutHandle=th(e_.bind(null,r,a,Zn,zu,Nd,n,oi,Fr,As,tr,c,"Throttled",-0,0),l);break t}e_(r,a,Zn,zu,Nd,n,oi,Fr,As,tr,c,null,-0,0)}}break}while(!0);Ji(t)}function e_(t,n,a,r,l,c,g,A,P,Q,ot,St,k,at){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Qt=(c&335544064)===c;if(St=null,(Qt||Ot&8192||(Ot&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},ri=null,Y0(n,c,St),Qt&&(Ot=St,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=sl.bind(Ot),Qt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?Pu-Xt():(c&4194048)===c?J0-Xt():0,Ot=Xy(St,Ot),Ot!==null)){Qi=c,t.cancelPendingCommit=Ot(u_.bind(null,t,n,c,a,r,l,g,A,P,Q,ot,St,null,k,at)),ir(t,c,g,!Q);return}u_(t,n,c,a,r,l,g,A,P,Q,ot,St)}function FM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ii(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ir(t,n,a,r){n=Bi(t,n),n&=~Ou,n&=~Fr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-ue(l),g=1<<c;r[c]=-1,l&=~g}a!==0&&Mr(t,a,n)}function Fu(){return(ze&6)===0?($o(0),!1):!0}function Od(){if(Ee!==null){if(Xe===0)var t=Ee.return;else t=Ee,Sa=Rr=null,Vf(t),_s=null,Io=0,t=Ee;for(;t!==null;)T0(t.alternate,t),t=t.return;Ee=null}}function Ns(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,uy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,Od(),Qe=t,Ee=a=_a(t.current,null),Ae=n,Xe=0,si=null,tr=!1,bs=Ba(t,n),Dd=!1,As=oi=Ou=Fr=er=ln=0,Zn=Jo=null,Nd=!1,ba=Bi(t,n),Yl(),a}function n_(t,n){de=null,_t.H=vu,n===gs||n===au?(n=ug(),Xe=3):n===wf?(n=ug(),Xe=4):Xe=n===id?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Ee===null&&(ln=1,Su(t,gi(n,t.current)))}function i_(){var t=Rn.current;return t===null?!0:(Ae&4194048)===Ae?On===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===On:!1}function a_(){var t=_t.H;return _t.H=vu,t===null?vu:t}function r_(){var t=_t.A;return _t.A=zM,t}function Hu(){ln=4,tr||(Ae&4194048)!==Ae&&Rn.current!==null||(bs=!0),(er&134217727)===0&&(Fr&134217727)===0||Qe===null||ir(Qe,Ae,oi,!1)}function Pd(t,n,a){var r=ze;ze|=2;var l=a_(),c=r_();(Qe!==t||Ae!==n)&&(zu=null,Ns(t,n)),n=!1;var g=ln;t:do try{if(Xe!==0&&Ee!==null){var A=Ee,P=si;switch(Xe){case 8:Od(),g=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var Q=Xe;if(Xe=0,si=null,Us(t,A,P,Q),a&&bs){g=0;break t}break;default:Q=Xe,Xe=0,si=null,Us(t,A,P,Q)}}HM(),g=ln;break}catch(ot){n_(t,ot)}while(!0);return n&&t.shellSuspendCounter++,Sa=Rr=null,ze=r,_t.H=l,_t.A=c,Ee===null&&(Qe=null,Ae=0,Yl()),g}function HM(){for(;Ee!==null;)s_(Ee)}function GM(t,n){var a=ze;ze|=2;var r=a_(),l=r_();Qe!==t||Ae!==n?(zu=null,Iu=Xt()+500,Ns(t,n)):bs=Ba(t,n);t:do try{if(Xe!==0&&Ee!==null){n=Ee;var c=si;e:switch(Xe){case 1:Xe=0,si=null,Us(t,n,c,1);break;case 2:case 9:if(og(c)){Xe=0,si=null,o_(n);break}n=function(){Xe!==2&&Xe!==9||Qe!==t||(Xe=7),Ji(t)},c.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:og(c)?(Xe=0,si=null,o_(n)):(Xe=0,si=null,Us(t,n,c,7));break;case 5:var g=null;switch(Ee.tag){case 26:g=Ee.memoizedState;case 5:case 27:var A=Ee;if(g?j_(g):A.stateNode.complete){Xe=0,si=null;var P=A.sibling;if(P!==null)Ee=P;else{var Q=A.return;Q!==null?(Ee=Q,Gu(Q)):Ee=null}break e}}Xe=0,si=null,Us(t,n,c,5);break;case 6:Xe=0,si=null,Us(t,n,c,6);break;case 8:Od(),ln=6;break t;default:throw Error(s(462))}}VM();break}catch(ot){n_(t,ot)}while(!0);return Sa=Rr=null,_t.H=r,_t.A=l,ze=a,Ee!==null?0:(Qe=null,Ae=0,Yl(),ln)}function VM(){for(;Ee!==null&&!It();)s_(Ee)}function s_(t){var n=y0(t.alternate,t,ba);t.memoizedProps=t.pendingProps,n===null?Gu(t):Ee=n}function o_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=m0(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=m0(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Vf(n);var r=n;r===yn&&(Se?($l(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):($l(r),Se=!0));default:T0(a,n),n=Ee=Qm(n,ba),n=y0(a,n,ba)}t.memoizedProps=t.pendingProps,n===null?Gu(t):Ee=n}function Us(t,n,a,r){Sa=Rr=null,Vf(n),_s=null,Io=0;var l=n.return;try{if(wM(t,l,n,a,Ae)){ln=1,Su(t,gi(a,t.current)),Ee=null;return}}catch(c){if(l!==null)throw Ee=l,c;ln=1,Su(t,gi(a,t.current)),Ee=null;return}n.flags&32768?(Se||r===1?t=!0:bs||(Ae&536870912)!==0?t=!1:(tr=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),l_(n,t)):Gu(n)}function Gu(t){var n=t;do{if((n.flags&32768)!==0){l_(n,tr);return}t=n.return;var a=LM(n.alternate,n,ba);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);ln===0&&(ln=5)}function l_(t,n){do{var a=OM(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);ln=6,Ee=null}function u_(t,n,a,r,l,c,g,A,P,Q,ot,St){t.cancelPendingCommit=null;do Vu();while(an!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Qe&&(Ee=Qe=null,Ae=0),Hr=n,Ni=t,Qi=a,Ld=l,j0=r,XM(t,n,a,g,A,P,St)}}function XM(t,n,a,r,l,c,g){var A=n.lanes|n.childLanes;if(Ud=A,A|=gf,Pl(t,a,A,r,l,c),Cs=null,(a&335544064)===a?(ws=_M(t),r=10262):(ws=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,KM(wt,function(){return Fd(),null})):(t.callbackNode=null,t.callbackPriority=0),Ru=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,l=Ct.p,Ct.p=2,c=ze,ze|=4;try{PM(t,n,a)}finally{ze=c,Ct.p=l,_t.T=r}}an=1,Ru?Rs=my(g,t.containerInfo,ws,Id,zd,WM,Bd,Fd,kM):(Id(),zd(),Bd())}function kM(t){if(an!==0){var n=Ni.onRecoverableError;n(t,{componentStack:null})}}function WM(){an===3&&(an=0,W0(Hr,Ni),an=4)}function Id(){if(an===1){an=0;var t=Ni,n=Hr,a=Qi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var l=Ct.p;Ct.p=2;var c=ze;ze|=4;try{Zo=Du=!1,X0(n,t,a),a=Jd;var g=Hm(t.containerInfo),A=a.focusedElem,P=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&Fm(A.ownerDocument.documentElement,A)){if(P!==null&&ff(A)){var Q=P.start,ot=P.end;if(ot===void 0&&(ot=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(ot,A.value.length);else{var St=A.ownerDocument||document,k=St&&St.defaultView||window;if(k.getSelection){var at=k.getSelection(),Ot=A.textContent.length,Qt=Math.min(P.start,Ot),he=P.end===void 0?Qt:Math.min(P.end,Ot);!at.extend&&Qt>he&&(g=he,he=Qt,Qt=g);var K=Bm(A,Qt),F=Bm(A,he);if(K&&F&&(at.rangeCount!==1||at.anchorNode!==K.node||at.anchorOffset!==K.offset||at.focusNode!==F.node||at.focusOffset!==F.offset)){var tt=St.createRange();tt.setStart(K.node,K.offset),at.removeAllRanges(),Qt>he?(at.addRange(tt),at.extend(F.node,F.offset)):(tt.setEnd(F.node,F.offset),at.addRange(tt))}}}}for(St=[],at=A;at=at.parentNode;)at.nodeType===1&&St.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Hs=!!Qd,Jd=Qd=null}finally{ze=c,Ct.p=l,_t.T=r}}t.current=n,an=2}}function zd(){if(an===2){an=0;var t=Ni,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=Ct.p;Ct.p=2;var l=ze;ze|=4;try{z0(t,n.alternate,n)}finally{ze=l,Ct.p=r,_t.T=a}}an=3}}function Bd(){if(an===4||an===3){an=0;var t=Rs;Rs=null,Pt();var n=Ni,a=Hr,r=Qi,l=j0,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,Hr=Ni=null,c_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(nr=null),Mo(r),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(jt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=_t.T,c=Ct.p,Ct.p=2,_t.T=null;try{for(var g=n.onRecoverableError,A=0;A<l.length;A++){var P=l[A];g(P.value,{componentStack:P.stack})}}finally{_t.T=a,Ct.p=c}}if(l=Cs,g=ws,ws=null,l!==null&&(Cs=null,g===null&&(g=[]),t!==null))for(P=0;P<l.length;P++)a=(0,l[P])(g),a!==void 0&&t.finished.finally(a);(Qi&3)!==0&&Vu(),Ji(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Bu?jo++:(jo=0,Bu=n):(jo=0,Bu=null),$o(0)}}function c_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Lo(n)))}function Vu(){return Rs!==null&&(Rs.skipTransition(),Rs=null),Id(),zd(),Bd(),Fd()}function Fd(){if(an!==5)return!1;var t=Ni,n=Ud;Ud=0;var a=Mo(Qi),r=_t.T,l=Ct.p;try{Ct.p=32>a?32:a,_t.T=null,a=Ld,Ld=null;var c=Ni,g=Qi;if(an=0,Hr=Ni=null,Qi=0,(ze&6)!==0)throw Error(s(331));var A=ze;if(ze|=4,K0(c.current),q0(c,c.current,g,a),ze=A,$o(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(jt,c)}catch{}return!0}finally{Ct.p=l,_t.T=r,c_(t,n)}}function f_(t,n,a){n=gi(a,n),n=nd(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(Fi(t,2),Ji(t))}function ke(t,n,a){if(t.tag===3)f_(t,t,a);else for(;n!==null;){if(n.tag===3){f_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=gi(a,t),a=o0(2),r=Za(n,a,2),r!==null&&(l0(a,r,n,t),Fi(r,2),Ji(r));break}}n=n.return}}function Hd(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new BM;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(Dd=!0,l.add(a),t=qM.bind(null,t,n,a),n.then(t,t))}function qM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Ae&a)===a&&((ln===4||ln===3&&(Ae&62914560)===Ae&&300>Xt()-Pu)&&(ze&2)===0?Ns(t,0):Ou|=a,As===Ae&&(As=0)),Ji(t)}function d_(t,n){n===0&&(n=_o()),t=Tr(t,n),t!==null&&(Fi(t,n),Ji(t))}function YM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),d_(t,a)}function ZM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),d_(t,a)}function KM(t,n){return Dt(t,n)}var Ls=null,Os=null,Gd=!1,Xu=!1,Vd=!1,ar=0;function Ji(t){t!==Os&&t.next===null&&(Os===null?Ls=Os=t:Os=Os.next=t),Xu=!0,Gd||(Gd=!0,JM())}function $o(t,n){if(!Vd&&Xu){Vd=!0;do for(var a=!1,r=Ls;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-ue(42|t)+1)-1,c&=l&~(g&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,g_(r,c))}else c=Ae,c=xr(r,r===Qe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ba(r,c)||(a=!0,g_(r,c));r=r.next}while(a);Vd=!1}}function QM(){h_()}function h_(){Xu=Gd=!1;var t=0;ar!==0&&ly()&&(t=ar);for(var n=Xt(),a=null,r=Ls;r!==null;){var l=r.next,c=p_(r,n);c===0?(r.next=null,a===null?Ls=l:a.next=l,l===null&&(Os=a)):(a=r,(t!==0||(c&3)!==0)&&(Xu=!0)),r=l}an!==0&&an!==5||$o(t),ar!==0&&(ar=0)}function p_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-ue(c),A=1<<g,P=l[g];P===-1?((A&a)===0||(A&r)!==0)&&(l[g]=go(A,n)):P<=n&&(t.expiredLanes|=A),c&=~A}if(n=Qe,a=Ae,a=xr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ba(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$t(r),Mo(a)){case 2:case 8:a=V;break;case 32:a=wt;break;case 268435456:a=Ut;break;default:a=wt}return r=m_.bind(null,t),a=Dt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function m_(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vu()&&t.callbackNode!==a)return null;var r=Ae;return r=xr(t,t===Qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(t_(t,r,n),p_(t,Xt()),t.callbackNode!=null&&t.callbackNode===a?m_.bind(null,t):null)}function g_(t,n){if(Vu())return null;t_(t,n,!0)}function JM(){cy(function(){(ze&6)!==0?Dt(le,QM):h_()})}function Xd(){if(ar===0){var t=Dr;t===0&&(t=es,es<<=1,(es&261888)===0&&(es=256)),ar=t}return ar}function __(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fl(t)}function jM(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=__((l[B]||null).action),g=r.submitter;g&&(n=(n=g[B]||null)?__(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var A=new Xl("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ar!==0){var P=new FormData(l,g);Jf(a,{pending:!0,data:P,method:l.method,action:c},null,P)}}else typeof c=="function"&&(A.preventDefault(),P=new FormData(l,g),Jf(a,{pending:!0,data:P,method:l.method,action:c},c,P))},currentTarget:l}]})}}for(var kd=0;kd<mf.length;kd++){var Wd=mf[kd],$M=Wd.toLowerCase(),ty=Wd[0].toUpperCase()+Wd.slice(1);Ri($M,"on"+ty)}Ri(Xm,"onAnimationEnd"),Ri(km,"onAnimationIteration"),Ri(Wm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(uM,"onTransitionRun"),Ri(cM,"onTransitionStart"),Ri(fM,"onTransitionCancel"),Ri(qm,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function v_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],P=A.instance,Q=A.currentTarget;if(A=A.listener,P!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=Q;try{c(l)}catch(ot){ql(ot)}l.currentTarget=null,c=P}else for(g=0;g<r.length;g++){if(A=r[g],P=A.instance,Q=A.currentTarget,A=A.listener,P!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=Q;try{c(l)}catch(ot){ql(ot)}l.currentTarget=null,c=P}}}}function Te(t,n){var a=n[nt];a===void 0&&(a=n[nt]=new Set);var r=t+"__bubble";a.has(r)||(S_(n,t,2,!1),a.add(r))}function qd(t,n,a){var r=0;n&&(r|=4),S_(a,t,r,n)}var ku="_reactListening"+Math.random().toString(36).slice(2);function Yd(t){if(!t[ku]){t[ku]=!0,Fe.forEach(function(a){a!=="selectionchange"&&(ey.has(a)||qd(a,!1,t),qd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ku]||(n[ku]=!0,qd("selectionchange",!1,n))}}function S_(t,n,a,r){switch(lv(n)){case 2:var l=Yy;break;case 8:l=Zy;break;default:l=hh}a=l.bind(null,n,a,t),l=void 0,!tf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Zd(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===l)break;if(g===4)for(g=r.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;A!==null;){if(g=re(A),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){r=c=g;continue t}A=A.parentNode}}r=r.return}Sm(function(){var Q=c,ot=jc(a),St=[];t:{var k=Ym.get(t);if(k!==void 0){var at=Xl,Ot=t;switch(t){case"keypress":if(Gl(a)===0)break t;case"keydown":case"keyup":at=Fx;break;case"focusin":Ot="focus",at=rf;break;case"focusout":Ot="blur",at=rf;break;case"beforeblur":case"afterblur":at=rf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=kx;break;case Xm:case km:case Wm:at=Dx;break;case qm:at=qx;break;case"scroll":case"scrollend":at=bx;break;case"wheel":at=Zx;break;case"copy":case"cut":case"paste":at=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Tm;break;case"submit":at=Vx;break;case"toggle":case"beforetoggle":at=Qx}var Qt=(n&4)!==0,he=!Qt&&(t==="scroll"||t==="scrollend"),K=Qt?k!==null?k+"Capture":null:k;Qt=[];for(var F=Q,tt;F!==null;){var vt=F;if(tt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||tt===null||K===null||(vt=yo(F,K),vt!=null&&Qt.push(el(F,vt,tt))),he)break;F=F.return}0<Qt.length&&(k=new at(k,Ot,null,a,ot),St.push({event:k,listeners:Qt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",at&&a!==Jc&&(Ot=a.relatedTarget||a.fromElement)&&(re(Ot)||Ot[ut]))break t;(k||at)&&(Ot=ot.window===ot?ot:(at=ot.ownerDocument)?at.defaultView||at.parentWindow:window,k?(at=a.relatedTarget||a.toElement,k=Q,at=at?re(at):null,at!==null&&(he=f(at),Qt=at.tag,at!==he||Qt!==5&&Qt!==27&&Qt!==6)&&(at=null)):(k=null,at=Q),k!==at&&(Qt=ym,vt="onMouseLeave",K="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Tm,vt="onPointerLeave",K="onPointerEnter",F="pointer"),he=k==null?Ot:Wt(k),tt=at==null?Ot:Wt(at),Ot=new Qt(vt,F+"leave",k,a,ot),Ot.target=he,Ot.relatedTarget=tt,vt=null,re(ot)===Q&&(Qt=new Qt(K,F+"enter",at,a,ot),Qt.target=tt,Qt.relatedTarget=he,vt=Qt),he=vt,Qt=k&&at?N(k,at,ny):null,k!==null&&x_(St,Ot,k,Qt,!1),at!==null&&he!==null&&x_(St,he,at,Qt,!0)))}t:{if(k=Q?Wt(Q):window,at=k.nodeName&&k.nodeName.toLowerCase(),at==="select"||at==="input"&&k.type==="file")var qt=Um;else if(Dm(k))if(Lm)qt=sM;else{qt=aM;var Re=iM}else at=k.nodeName,!at||at.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?Q&&Qc(Q.elementType)&&(qt=Um):qt=rM;if(qt&&(qt=qt(t,Q))){Nm(St,qt,a,ot);break t}Re&&Re(t,k,Q)}switch(Re=Q?Wt(Q):window,t){case"focusin":(Dm(Re)||Re.contentEditable==="true")&&(ls=Re,df=Q,Do=null);break;case"focusout":Do=df=ls=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Gm(St,a,ot);break;case"selectionchange":if(lM)break;case"keydown":case"keyup":Gm(St,a,ot)}var te;if(of)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else os?Cm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(bm&&a.locale!=="ko"&&(os||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&os&&(te=xm()):(Fa=ot,ef="value"in Fa?Fa.value:Fa.textContent,os=!0)),Re=Wu(Q,ae),0<Re.length&&(ae=new Em(ae,t,null,a,ot),St.push({event:ae,listeners:Re}),te?ae.data=te:(te=wm(a),te!==null&&(ae.data=te)))),(te=jx?$x(t,a):tM(t,a))&&(ae=Wu(Q,"onBeforeInput"),0<ae.length&&(Re=new Em("onBeforeInput","beforeinput",null,a,ot),St.push({event:Re,listeners:ae}),Re.data=te)),jM(St,t,Q,a,ot)}v_(St,n)})}function el(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=yo(t,a),l!=null&&r.unshift(el(t,l,c)),l=yo(t,n),l!=null&&r.push(el(t,l,c))),t.tag===3)return r;t=t.return}return[]}function ny(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function x_(t,n,a,r,l){for(var c=n._reactName,g=[];a!==null&&a!==r;){var A=a,P=A.alternate,Q=A.stateNode;if(A=A.tag,P!==null&&P===r)break;A!==5&&A!==26&&A!==27||Q===null||(P=Q,l?(Q=yo(a,c),Q!=null&&g.unshift(el(a,Q,P))):l||(Q=yo(a,c),Q!=null&&g.push(el(a,Q,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var iy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function M_(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(ay,"")}function y_(t,n){return n=M_(n),M_(t)===n}function We(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||as(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&as(t,""+r);else return;break;case"className":ni(t,"class",r);break;case"tabIndex":ni(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,r);break;case"style":_m(t,r,c);return;case"data":if(n!=="object"){ni(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Fl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&We(t,n,"name",l.name,l,null),We(t,n,"formEncType",l.formEncType,l,null),We(t,n,"formMethod",l.formMethod,l,null),We(t,n,"formTarget",l.formTarget,l,null)):(We(t,n,"encType",l.encType,l,null),We(t,n,"method",l.method,l,null),We(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Fl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Gi);return;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Fl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Te("beforetoggle",t),Te("toggle",t),Je(t,"popover",r);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Ex.get(a)||a,Je(t,a,r);else return}ve=!0}function Kd(t,n,a,r,l,c){switch(a){case"style":_m(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")as(t,r);else if(typeof r=="number"||typeof r=="bigint")as(t,""+r);else return;break;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Gi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[B]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}ve=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Je(t,a,r)}return}ve=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",t),Te("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,c,g,a,null)}}l&&We(t,n,"srcSet",a.srcSet,a,null),r&&We(t,n,"src",a.src,a,null);return;case"input":Te("invalid",t);var A=c=g=l=null,P=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ot=a[r];if(ot!=null)switch(r){case"name":l=ot;break;case"type":g=ot;break;case"checked":P=ot;break;case"defaultChecked":Q=ot;break;case"value":c=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:We(t,n,r,ot,a,null)}}hm(t,c,A,P,Q,g,l,!1);return;case"select":Te("invalid",t),r=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:We(t,n,l,A,a,null)}n=c,a=g,t.multiple=!!r,n!=null?is(t,!!r,n,!1):a!=null&&is(t,!!r,a,!0);return;case"textarea":Te("invalid",t),c=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:We(t,n,g,A,a,null)}mm(t,r,l,c);return;case"option":for(P in a)a.hasOwnProperty(P)&&(r=a[P],r!=null)&&(P==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":We(t,n,P,r,a,null));return;case"dialog":Te("beforetoggle",t),Te("toggle",t),Te("cancel",t),Te("close",t);break;case"iframe":case"object":Te("load",t);break;case"video":case"audio":for(r=0;r<tl.length;r++)Te(tl[r],t);break;case"image":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"embed":case"source":case"link":Te("error",t),Te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,Q,r,a,null)}return;default:if(Qc(n)){for(ot in a)a.hasOwnProperty(ot)&&(r=a[ot],r!==void 0&&Kd(t,n,ot,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&We(t,n,A,r,a,null))}var ry={};function sy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,A=null,P=null,Q=null,ot=null;for(at in a){var St=a[at];if(a.hasOwnProperty(at)&&St!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=St;default:r.hasOwnProperty(at)||We(t,n,at,null,r,St)}}for(var k in r){var at=r[k];if(St=a[k],r.hasOwnProperty(k)&&(at!=null||St!=null))switch(k){case"type":at!==St&&(ve=!0),c=at;break;case"name":at!==St&&(ve=!0),l=at;break;case"checked":at!==St&&(ve=!0),Q=at;break;case"defaultChecked":at!==St&&(ve=!0),ot=at;break;case"value":at!==St&&(ve=!0),g=at;break;case"defaultValue":at!==St&&(ve=!0),A=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==St&&We(t,n,k,at,r,St)}}Zc(t,g,A,P,Q,ot,c,l);return;case"select":at=g=A=k=null;for(c in a)if(P=a[c],a.hasOwnProperty(c)&&P!=null)switch(c){case"value":break;case"multiple":at=P;default:r.hasOwnProperty(c)||We(t,n,c,null,r,P)}for(l in r)if(c=r[l],P=a[l],r.hasOwnProperty(l)&&(c!=null||P!=null))switch(l){case"value":c!==P&&(ve=!0),k=c;break;case"defaultValue":c!==P&&(ve=!0),A=c;break;case"multiple":c!==P&&(ve=!0),g=c;default:c!==P&&We(t,n,l,c,r,P)}n=A,a=g,r=at,k!=null?is(t,!!a,k,!1):!!r!=!!a&&(n!=null?is(t,!!a,n,!0):is(t,!!a,a?[]:"",!1));return;case"textarea":at=k=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(t,n,A,null,r,l)}for(g in r)if(l=r[g],c=a[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(ve=!0),k=l;break;case"defaultValue":l!==c&&(ve=!0),at=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&We(t,n,g,l,r,c)}pm(t,k,at);return;case"option":for(var Ot in a)k=a[Ot],a.hasOwnProperty(Ot)&&k!=null&&!r.hasOwnProperty(Ot)&&(Ot==="selected"?t.selected=!1:We(t,n,Ot,null,r,k));for(P in r)k=r[P],at=a[P],r.hasOwnProperty(P)&&k!==at&&(k!=null||at!=null)&&(P==="selected"?(k!==at&&(ve=!0),t.selected=k&&typeof k!="function"&&typeof k!="symbol"):We(t,n,P,k,r,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)k=a[Qt],a.hasOwnProperty(Qt)&&k!=null&&!r.hasOwnProperty(Qt)&&We(t,n,Qt,null,r,k);for(Q in r)if(k=r[Q],at=a[Q],r.hasOwnProperty(Q)&&k!==at&&(k!=null||at!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,n));break;default:We(t,n,Q,k,r,at)}return;default:if(Qc(n)){for(var he in a)k=a[he],a.hasOwnProperty(he)&&k!==void 0&&!r.hasOwnProperty(he)&&Kd(t,n,he,void 0,r,k);for(ot in r)k=r[ot],at=a[ot],!r.hasOwnProperty(ot)||k===at||k===void 0&&at===void 0||Kd(t,n,ot,k,r,at);return}}for(var K in a)k=a[K],a.hasOwnProperty(K)&&k!=null&&!r.hasOwnProperty(K)&&We(t,n,K,null,r,k);for(St in r)k=r[St],at=a[St],!r.hasOwnProperty(St)||k===at||k==null&&at==null||We(t,n,St,k,r,at)}function E_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,g=l.initiatorType,A=l.duration;if(c&&A&&E_(g)){for(g=0,A=l.responseEnd,r+=1;r<a.length;r++){var P=a[r],Q=P.startTime;if(Q>A)break;var ot=P.transferSize,St=P.initiatorType;ot&&E_(St)&&(P=P.responseEnd,g+=ot*(P<A?1:(A-Q)/(P-Q)))}if(--r,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qd=null,Jd=null;function nl(t){return t.nodeType===9?t:t.ownerDocument}function T_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function A_(t,n,a,r){return a=nl(a).createElement(t),a[b]=r,a[B]=n,Dn(a,t,n),_e(a),a}function jd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $d=null;function ly(){var t=window.event;return t&&t.type==="popstate"?t===$d?!1:($d=t,!0):($d=null,!1)}var th=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,R_=typeof Promise=="function"?Promise:void 0,C_=typeof requestAnimationFrame=="function"?requestAnimationFrame:th,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof R_<"u"?function(t){return R_.resolve(null).then(t).catch(fy)}:th;function fy(t){setTimeout(function(){throw t})}function rr(t){return t==="head"}function w_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Gs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")lh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,lh(a);for(var c=a.firstChild;c;){var g=c.nextSibling,A=c.nodeName;c[Lt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&lh(t.ownerDocument.body);a=l}while(a);Gs(n)}function D_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function N_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function U_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function dy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function eh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return dy(n,a,t)}function hy(t){return t.documentElement.clientHeight}function py(t){this.addEventListener("load",t),this.addEventListener("error",t)}function my(t,n,a,r,l,c,g,A,P){var Q=n.nodeType===9?n:n.ownerDocument;try{var ot=Q.startViewTransition({update:function(){var k=Q.defaultView,at=k.navigation&&k.navigation.transition,Ot=Q.fonts.status;r();var Qt=[];if(Ot==="loaded"&&(hy(Q),Q.fonts.status==="loading"&&Qt.push(Q.fonts.ready)),Ot=Qt.length,t!==null)for(var he=t.suspenseyImages,K=0,F=0;F<he.length;F++){var tt=he[F];if(!tt.complete){var vt=tt.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<k.innerHeight&&vt.left<k.innerWidth){if(K+=$_(tt),K>Zu){Qt.length=Ot;break}tt=new Promise(py.bind(tt)),Qt.push(tt)}}}if(0<Qt.length)return k=Promise.race([Promise.all(Qt),new Promise(function(qt){return setTimeout(qt,500)})]).then(l,l),(at?Promise.allSettled([at.finished,k]):k).then(c,c);if(l(),at)return at.finished.then(c,c);c()},types:a});Q.__reactViewTransition=ot;var St=[];return ot.ready.then(function(){for(var k=Q.documentElement.getAnimations({subtree:!0}),at=0;at<k.length;at++){var Ot=k[at],Qt=Ot.effect,he=Qt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){St.push(Ot),Ot=Qt.getKeyframes();for(var K=he=void 0,F=!0,tt=0;tt<Ot.length;tt++){var vt=Ot[tt],qt=vt.width;if(he===void 0)he=qt;else if(he!==qt){F=!1;break}if(qt=vt.height,K===void 0)K=qt;else if(K!==qt){F=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}F&&he!==void 0&&K!==void 0&&(Qt.setKeyframes(Ot),F=getComputedStyle(Qt.target,Qt.pseudoElement),F.width!==he||F.height!==K)&&(F=Ot[0],F.width=he,F.height=K,F=Ot[Ot.length-1],F.width=he,F.height=K,Qt.setKeyframes(Ot))}}g()},function(k){Q.__reactViewTransition===ot&&(Q.__reactViewTransition=null);try{typeof k=="object"&&k!==null&&k.name==="InvalidStateError"&&(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null),k!==null&&P(k)}finally{r(),l(),g()}}),ot.finished.finally(function(){for(var k=0;k<St.length;k++)St[k].cancel();Q.__reactViewTransition===ot&&(Q.__reactViewTransition=null),A()}),ot}catch{return r(),l(),g(),null}}function Gr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Gr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function L_(t){return{name:t,group:new Gr("group",t),imagePair:new Gr("image-pair",t),old:new Gr("old",t),new:new Gr("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(P_(c,t,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(P){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ps(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),_(this._fragmentFiber.child,!1,gy,t,A,r)}this._eventListeners=c}};function gy(t,n,a,r){return M(t).addEventListener(n,a,r),!1}ui.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=P_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Ps(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,_y,t,a,l),r.splice(n,1),c!==null&&c()}};function _y(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ps(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function O_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function P_(t,n,a,r){if(t.length===0)return-1;r=O_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&O_(c.optionsOrUseCapture)===r)return l}return-1}ui.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Ps(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Ps(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){_(this._fragmentFiber.child,!0,I_,t,void 0,void 0)};function I_(t,n){return t.tag===6?!1:(t=M(t),wy(t,n))}ui.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,nh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!I_(n[a],t);a--);};function nh(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=nl(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,vy,t,void 0,void 0))};function vy(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,Sy,t,void 0,void 0)};function Sy(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,xy,t,void 0,void 0);for(var a=n=0;a<Ui.length;a++){var r=Ui[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ui[n++]=r}Ui.length=n}};function xy(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ui=[],ih=!1;function My(t,n,a){Ui.push({fragmentInstance:t,observer:n,instance:a}),ih||(ih=!0,Dy(function(){ih=!1;var r=Ui;Ui=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,yy,t,void 0,void 0),t};function yy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,nh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var c=y(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),P=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||P||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ey(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ey(t,n,a,r,l){var c=re(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=v(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=N(a,c,U),n===null?n=!1:(_(n,!0,H,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=N(r,c,U),n===null?n=!1:(_(n,!0,C,c,r),c=x,I=x=null,n=c!==null)),n):!1}function z_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,nh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),z_(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),z_(l,a)):M(l).scrollIntoView(t),r+=a?-1:1}};function Ty(t,n){return t=M(t),B_(t,n),!1}function B_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function F_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Ps(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,A=0;A<Ui.length;A++){var P=Ui[A];(P.fragmentInstance!==n||P.observer!==c||P.instance!==t)&&(Ui[g++]=P)}Ui.length=g,c.observe(t)}),B_(t,n))}function by(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Ps(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?My(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function ah(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ah(a),Kt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ay(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Lt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function Ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function H_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function rh(t){return t.data==="$?"||t.data==="$~"}function sh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Cy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var oh=null;function G_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function V_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function wy(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function Dy(t){C_(function(){C_(function(n){return t(n)})})}function X_(t,n,a){switch(n=nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function k_(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&We(t,n,r,null,ry,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Gi&&(t.onclick=null),Kt(t)}function lh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Kt(t)}var yi=new Map,W_=new Set;function il(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Aa=Ct.d;Ct.d={f:Ny,r:Uy,D:Ly,C:Oy,L:Py,m:Iy,X:By,S:zy,M:Fy};function Ny(){var t=Aa.f(),n=Fu();return t||n}function Uy(t){var n=ce(t);n!==null&&n.tag===5&&n.type==="form"?Yg(n):Aa.r(t)}var Is=typeof document>"u"?null:document;function q_(t,n,a){var r=Is;if(r&&typeof n=="string"&&n){var l=pi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),W_.has(l)||(W_.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Dn(n,"link",t),_e(n),r.head.appendChild(n)))}}function Ly(t){Aa.D(t),q_("dns-prefetch",t,null)}function Oy(t,n){Aa.C(t,n),q_("preconnect",t,n)}function Py(t,n,a){Aa.L(t,n,a);var r=Is;if(r&&t&&n){var l='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+pi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+pi(a.imageSizes)+'"]')):l+='[href="'+pi(t)+'"]';var c=l;switch(n){case"style":c=zs(t);break;case"script":c=Bs(t)}if(!(yi.has(c)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(al(c))||n==="script"&&r.querySelector(rl(c))))){var g=r.createElement("link");Dn(g,"link",t),n==="style"&&(g[Yt]=!0,g.onload=g.onerror=function(){Ye(g)}),_e(g),r.head.appendChild(g)}}}function Iy(t,n){Aa.m(t,n);var a=Is;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+pi(r)+'"][href="'+pi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Bs(t)}if(!yi.has(c)&&(t=O({rel:"modulepreload",href:t},n),yi.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(c)))return}r=a.createElement("link"),Dn(r,"link",t),_e(r),a.head.appendChild(r)}}}function zy(t,n,a){Aa.S(t,n,a);var r=Is;if(r&&t){var l=ye(r).hoistableStyles,c=zs(t);n=n||"default";var g=l.get(c);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(al(c)))A.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(c))&&uh(t,a);var P=g=r.createElement("link");_e(P),Dn(P,"link",t),P._p=new Promise(function(Q,ot){P.onload=Q,P.onerror=ot}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,qu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},l.set(c,g)}}}function By(t,n){Aa.X(t,n);var a=Is;if(a&&t){var r=ye(a).hoistableScripts,l=Bs(t),c=r.get(l);c||(c=a.querySelector(rl(l)),c||(t=O({src:t,async:!0},n),(n=yi.get(l))&&ch(t,n),c=a.createElement("script"),_e(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Fy(t,n){Aa.M(t,n);var a=Is;if(a&&t){var r=ye(a).hoistableScripts,l=Bs(t),c=r.get(l);c||(c=a.querySelector(rl(l)),c||(t=O({src:t,async:!0,type:"module"},n),(n=yi.get(l))&&ch(t,n),c=a.createElement("script"),_e(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Y_(t,n,a,r){var l=(l=Pe.current)?il(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zs(a.href),n=ye(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zs(a.href);var c=ye(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(al(t)))?c._p||(g.instance=c,g.state.loading=5):(c=yi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,c)),Hy(l,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Bs(a),n=ye(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function zs(t){return'href="'+pi(t)+'"'}function al(t){return'link[rel="stylesheet"]['+t+"]"}function Z_(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Hy(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Yt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Yt]=!0,n.onload=n.onerror=Ye.bind(null,n),Dn(n,"link",a),_e(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Bs(t){return'[src="'+pi(t)+'"]'}function rl(t){return"script[async]"+t}function K_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pi(a.href)+'"]');if(r)return n.instance=r,_e(r),r;var l=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),_e(r),Dn(r,"style",l),qu(r,a.precedence,t),n.instance=r;case"stylesheet":l=zs(a.href);var c=t.querySelector(al(l));if(c)return n.state.loading|=4,n.instance=c,_e(c),c;r=Z_(a),(l=yi.get(l))&&uh(r,l),c=(t.ownerDocument||t).createElement("link"),_e(c);var g=c;return g._p=new Promise(function(A,P){g.onload=A,g.onerror=P}),Dn(c,"link",r),n.state.loading|=4,qu(c,a.precedence,t),n.instance=c;case"script":return c=Bs(a.src),(l=t.querySelector(rl(c)))?(n.instance=l,_e(l),l):(r=a,(l=yi.get(c))&&(r=O({},a),ch(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),_e(l),Dn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,qu(r,a.precedence,t));return n.instance}function qu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Yu=null;function Q_(t,n,a){if(Yu===null){var r=new Map,l=Yu=new Map;l.set(a,r)}else l=Yu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Lt]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(c):r.set(g,[c])}}return r}function fh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function J_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function j_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function tv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=$_(n),t.suspenseyImages.push(n)),t=ky.bind(t),n.decode().then(t,t))}function Vy(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=zs(r.href),c=n.querySelector(al(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,_e(c);return}c=n.ownerDocument||n,r=Z_(r),(l=yi.get(l))&&uh(r,l),c=c.createElement("link"),_e(c);var g=c;g._p=new Promise(function(A,P){g.onload=A,g.onerror=P}),Dn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zu=0;function Xy(t,n){return t.stylesheets&&t.count===0&&Qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Zu===0&&(Zu=62500*oy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Zu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function ev(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Qu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function sl(){this.count--,ev(this)}function ky(){this.imgCount--,ev(this)}var Ku=null;function Qu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ku=new Map,n.forEach(Wy,t),Ku=null,sl.call(t))}function Wy(t,n){if(!(n.state.loading&4)){var a=Ku.get(t);if(a)var r=a.get(null);else{a=new Map,Ku.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,l),a.set(g,l),this.count++,r=sl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Fs={$$typeof:$,Provider:null,Consumer:null,_currentValue:Ge,_currentValue2:Ge,_threadCount:0};function qy(t,n,a,r,l,c,g,A,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function nv(t,n,a,r,l,c,g,A,P,Q,ot,St){return t=new qy(t,n,a,g,P,Q,ot,St,A),n=1,c===!0&&(n|=24),c=Wn(3,null,null,n),t.current=c,c.stateNode=t,n=Af(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},Df(c),t}function iv(t){return t?(t=fs,t):fs}function av(t,n,a,r,l,c){l=iv(l),r.context===null?r.context=l:r.pendingContext=l,r=Ya(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Za(t,r,n),a!==null&&(Kn(a,t,n),zo(a,t,n))}function rv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dh(t,n){rv(t,n),(t=t.alternate)&&rv(t,n)}function sv(t){if(t.tag===13||t.tag===31){var n=Tr(t,67108864);n!==null&&Kn(n,t,67108864),dh(t,67108864)}}function ov(t){if(t.tag===13||t.tag===31){var n=li();n=xo(n);var a=Tr(t,n);a!==null&&Kn(a,t,n),dh(t,n)}}var Hs=!0;function Yy(t,n,a,r){var l=_t.T;_t.T=null;var c=Ct.p;try{Ct.p=2,hh(t,n,a,r)}finally{Ct.p=c,_t.T=l}}function Zy(t,n,a,r){var l=_t.T;_t.T=null;var c=Ct.p;try{Ct.p=8,hh(t,n,a,r)}finally{Ct.p=c,_t.T=l}}function hh(t,n,a,r){if(Hs){var l=ph(r);if(l===null)Zd(t,n,r,Ju,a),uv(t,r);else if(Qy(l,t,n,a,r))r.stopPropagation();else if(uv(t,r),n&4&&-1<Ky.indexOf(t)){for(;l!==null;){var c=ce(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=da(c.pendingLanes);if(g!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var P=1<<31-ue(g);A.entanglements[1]|=P,g&=~P}Ji(c),(ze&6)===0&&(Iu=Xt()+500,$o(0))}}break;case 31:case 13:A=Tr(c,2),A!==null&&Kn(A,c,2),Fu(),dh(c,2)}if(c=ph(r),c===null&&Zd(t,n,r,Ju,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Zd(t,n,r,null,a)}}function ph(t){return t=jc(t),mh(t)}var Ju=null;function mh(t){if(Ju=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ju=t,null}function lv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case le:return 2;case V:return 8;case wt:case xt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var gh=!1,sr=null,or=null,lr=null,ol=new Map,ll=new Map,ur=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(t,n){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function ul(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ce(n),n!==null&&sv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function Qy(t,n,a,r,l){switch(n){case"focusin":return sr=ul(sr,t,n,a,r,l),!0;case"dragenter":return or=ul(or,t,n,a,r,l),!0;case"mouseover":return lr=ul(lr,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return ol.set(c,ul(ol.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,ll.set(c,ul(ll.get(c)||null,t,n,a,r,l)),!0}return!1}function cv(t){var n=re(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,zl(t.priority,function(){ov(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,zl(t.priority,function(){ov(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ju(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ph(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Jc=r,a.target.dispatchEvent(r),Jc=null}else return n=ce(a),n!==null&&sv(n),t.blockedOn=a,!1;n.shift()}return!0}function fv(t,n,a){ju(t)&&a.delete(n)}function Jy(){gh=!1,sr!==null&&ju(sr)&&(sr=null),or!==null&&ju(or)&&(or=null),lr!==null&&ju(lr)&&(lr=null),ol.forEach(fv),ll.forEach(fv)}function $u(t,n){t.blockedOn===n&&(t.blockedOn=null,gh||(gh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jy)))}var tc=null;function dv(t){tc!==t&&(tc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tc===t&&(tc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(mh(r||a)===null)continue;break}var c=ce(a);c!==null&&(t.splice(n,3),n-=3,Jf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Gs(t){function n(P){return $u(P,t)}sr!==null&&$u(sr,t),or!==null&&$u(or,t),lr!==null&&$u(lr,t),ol.forEach(n),ll.forEach(n);for(var a=0;a<ur.length;a++){var r=ur[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)cv(a),a.blockedOn===null&&ur.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],g=l[B]||null;if(typeof c=="function")g||dv(a);else if(g){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[B]||null)A=g.formAction;else if(mh(l)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),dv(a)}}}function hv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function _h(t){this._internalRoot=t}ec.prototype.render=_h.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();av(a,r,t,n,null,null)},ec.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;av(t.current,2,null,t,null,null),Fu(),n[ut]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=Il();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ur.length&&n!==0&&n<ur[a].priority;a++);ur.splice(a,0,t),a===0&&cv(t)}};var pv=e.version;if(pv!=="19.3.0")throw Error(s(527,pv,"19.3.0"));Ct.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var jy={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{jt=nc.inject(jy),Gt=nc}catch{}}return cl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=i0,c=a0,g=r0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=nv(t,1,!1,null,null,a,r,null,l,c,g,hv),t[ut]=n.current,Yd(t),new _h(n)},cl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=i0,g=a0,A=r0,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=nv(t,1,!0,n,a??null,r,l,P,c,g,A,hv),n.context=iv(null),a=n.current,r=li(),r=xo(r),l=Ya(r),l.callback=null,Za(a,l,r),a=r,n.current.lanes=a,Fi(n,a),Ji(n),t[ut]=n.current,Yd(t),new ec(n)},cl.version="19.3.0",cl}var yv;function oE(){if(yv)return Sh.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sh.exports=sE(),Sh.exports}var lE=oE();const Zp="186",uE=0,Ev=1,cE=2,wc=1,fE=2,yl=3,Qr=0,jn=1,ea=2,La=0,bl=1,Tv=2,bv=3,Av=4,dE=5,so=100,hE=101,pE=102,mE=103,gE=104,_E=200,vE=201,SE=202,xE=203,RS=204,CS=205,ME=206,yE=207,EE=208,TE=209,bE=210,AE=211,RE=212,CE=213,wE=214,ap=0,rp=1,sp=2,Al=3,op=4,lp=5,up=6,cp=7,wS=0,DE=1,NE=2,ra=0,DS=1,NS=2,US=3,LS=4,OS=5,PS=6,IS=7,zS=300,Jr=301,co=302,Eh=303,Th=304,Xc=306,fp=1e3,Ua=1001,dp=1002,Un=1003,UE=1004,ic=1005,zn=1006,bh=1007,Zr=1008,bi=1009,BS=1010,FS=1011,Rl=1012,Kp=1013,oa=1014,ia=1015,la=1016,Qp=1017,Jp=1018,Cl=1020,HS=35902,GS=35899,VS=1021,XS=1022,Ii=1023,Ia=1026,Kr=1027,kS=1028,jp=1029,jr=1030,$p=1031,tm=1033,Dc=33776,Nc=33777,Uc=33778,Lc=33779,hp=35840,pp=35841,mp=35842,gp=35843,_p=36196,vp=37492,Sp=37496,xp=37488,Mp=37489,Pc=37490,yp=37491,Ep=37808,Tp=37809,bp=37810,Ap=37811,Rp=37812,Cp=37813,wp=37814,Dp=37815,Np=37816,Up=37817,Lp=37818,Op=37819,Pp=37820,Ip=37821,zp=36492,Bp=36494,Fp=36495,Hp=36283,Gp=36284,Ic=36285,Vp=36286,LE=3200,Rv=0,OE=1,_r="",Qn="srgb",zc="srgb-linear",Bc="linear",qe="srgb",Ah=7680,PE=519,IE=512,zE=513,BE=514,em=515,FE=516,HE=517,nm=518,GE=519,WS=35044,Cv="300 es",aa=2e3,Fc=2001;function VE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function XE(){const o=wl("canvas");return o.style.display="block",o}const wv={};function Hc(...o){const e="THREE."+o.shift();console.log(e,...o)}function qS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function se(...o){o=qS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Oe(...o){o=qS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function lo(...o){const e=o.join(" ");e in wv||(wv[e]=!0,se(...o))}function kE(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const WE={[ap]:rp,[sp]:up,[op]:cp,[Al]:lp,[rp]:ap,[up]:sp,[cp]:op,[lp]:Al};class ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rh=Math.PI/180,Xp=180/Math.PI;function vr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function qE(o,e){return(o%e+e)%e}function Ch(o,e,i){return(1-i)*o+i*e}function na(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ke(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const om=class om{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};om.prototype.isVector2=!0;let xe=om;class ho{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let m=s[u+0],p=s[u+1],S=s[u+2],_=s[u+3],v=f[d+0],y=f[d+1],R=f[d+2],w=f[d+3];if(_!==w||m!==v||p!==y||S!==R){let M=m*v+p*y+S*R+_*w;M<0&&(v=-v,y=-y,R=-R,w=-w,M=-M);let x=1-h;if(M<.9995){const I=Math.acos(M),H=Math.sin(I);x=Math.sin(x*I)/H,h=Math.sin(h*I)/H,m=m*x+v*h,p=p*x+y*h,S=S*x+R*h,_=_*x+w*h}else{m=m*x+v*h,p=p*x+y*h,S=S*x+R*h,_=_*x+w*h;const I=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=I,p*=I,S*=I,_*=I}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],m=s[u+1],p=s[u+2],S=s[u+3],_=f[d],v=f[d+1],y=f[d+2],R=f[d+3];return e[i]=h*R+S*_+m*y-p*v,e[i+1]=m*R+S*v+p*_-h*y,e[i+2]=p*R+S*y+h*v-m*_,e[i+3]=S*R-h*_-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),S=h(u/2),_=h(f/2),v=m(s/2),y=m(u/2),R=m(f/2);switch(d){case"XYZ":this._x=v*S*_+p*y*R,this._y=p*y*_-v*S*R,this._z=p*S*R+v*y*_,this._w=p*S*_-v*y*R;break;case"YXZ":this._x=v*S*_+p*y*R,this._y=p*y*_-v*S*R,this._z=p*S*R-v*y*_,this._w=p*S*_+v*y*R;break;case"ZXY":this._x=v*S*_-p*y*R,this._y=p*y*_+v*S*R,this._z=p*S*R+v*y*_,this._w=p*S*_-v*y*R;break;case"ZYX":this._x=v*S*_-p*y*R,this._y=p*y*_+v*S*R,this._z=p*S*R-v*y*_,this._w=p*S*_+v*y*R;break;case"YZX":this._x=v*S*_+p*y*R,this._y=p*y*_+v*S*R,this._z=p*S*R-v*y*_,this._w=p*S*_-v*y*R;break;case"XZY":this._x=v*S*_-p*y*R,this._y=p*y*_-v*S*R,this._z=p*S*R+v*y*_,this._w=p*S*_+v*y*R;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],m=i[9],p=i[2],S=i[6],_=i[10],v=s+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(S-m)*y,this._y=(f-p)*y,this._z=(d-u)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(S-m)/y,this._x=.25*y,this._y=(u+d)/y,this._z=(f+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(f-p)/y,this._x=(u+d)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(d-u)/y,this._x=(f+p)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+d*h+u*p-f*m,this._y=u*S+d*m+f*h-s*p,this._z=f*S+d*p+s*m-u*h,this._w=d*S-s*h-u*m-f*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),S=Math.sin(p);m=Math.sin(m*p)/S,i=Math.sin(i*p)/S,this._x=this._x*m+s*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lm=class lm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Dv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Dv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*u-h*s),S=2*(h*i-f*u),_=2*(f*s-d*i);return this.x=i+m*p+d*_-h*S,this.y=s+m*S+h*p-f*_,this.z=u+m*_+f*S-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,m=i.z;return this.x=u*m-f*h,this.y=f*d-s*m,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lm.prototype.isVector3=!0;let lt=lm;const wh=new lt,Dv=new ho,um=class um{constructor(e,i,s,u,f,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,m,p)}set(e,i,s,u,f,d,h,m,p){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=f,S[5]=m,S[6]=s,S[7]=d,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],S=s[4],_=s[7],v=s[2],y=s[5],R=s[8],w=u[0],M=u[3],x=u[6],I=u[1],H=u[4],C=u[7],U=u[2],N=u[5],O=u[8];return f[0]=d*w+h*I+m*U,f[3]=d*M+h*H+m*N,f[6]=d*x+h*C+m*O,f[1]=p*w+S*I+_*U,f[4]=p*M+S*H+_*N,f[7]=p*x+S*C+_*O,f[2]=v*w+y*I+R*U,f[5]=v*M+y*H+R*N,f[8]=v*x+y*C+R*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],S=e[8];return i*d*S-i*h*p-s*f*S+s*h*m+u*f*p-u*d*m}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],S=e[8],_=S*d-h*p,v=h*m-S*f,y=p*f-d*m,R=i*_+s*v+u*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=_*w,e[1]=(u*p-S*s)*w,e[2]=(h*s-u*d)*w,e[3]=v*w,e[4]=(S*i-u*m)*w,e[5]=(u*f-h*i)*w,e[6]=y*w,e[7]=(s*m-p*i)*w,e[8]=(d*i-s*f)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-u*p,u*m,-u*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,i)),this}rotate(e){return lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,i){return lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};um.prototype.isMatrix3=!0;let fe=um;const Dh=new fe,Nv=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uv=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YE(){const o={enabled:!0,workingColorSpace:zc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(u.r=Oa(u.r),u.g=Oa(u.g),u.b=Oa(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(u.r=uo(u.r),u.g=uo(u.g),u.b=uo(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===_r?Bc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[zc]:{primaries:e,whitePoint:s,transfer:Bc,toXYZ:Nv,fromXYZ:Uv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Nv,fromXYZ:Uv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),o}const De=YE();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vs;class ZE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Vs===void 0&&(Vs=wl("canvas")),Vs.width=e.width,Vs.height=e.height;const u=Vs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Vs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wl("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Oa(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KE=0;class im{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Nh(u[d].image)):f.push(Nh(u[d]))}else f=Nh(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function Nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ZE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let QE=0;const Uh=new lt;class Ln extends ts{constructor(e=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,s=Ua,u=Ua,f=zn,d=Zr,h=Ii,m=bi,p=Ln.DEFAULT_ANISOTROPY,S=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=vr(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fp:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case dp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fp:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case dp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=zS;Ln.DEFAULT_ANISOTROPY=1;const cm=class cm{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const m=e.elements,p=m[0],S=m[4],_=m[8],v=m[1],y=m[5],R=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(S-v)<.01&&Math.abs(_-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(_+w)<.1&&Math.abs(R+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(p+1)/2,C=(y+1)/2,U=(x+1)/2,N=(S+v)/4,O=(_+w)/4,T=(R+M)/4;return H>C&&H>U?H<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(H),u=N/s,f=O/s):C>U?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=N/u,f=T/u):U<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(U),s=O/f,u=T/f),this.set(s,u,f,i),this}let I=Math.sqrt((M-R)*(M-R)+(_-w)*(_-w)+(v-S)*(v-S));return Math.abs(I)<.001&&(I=1),this.x=(M-R)/I,this.y=(_-w)/I,this.z=(v-S)/I,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cm.prototype.isVector4=!0;let un=cm;class JE extends ts{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:s.depth},f=new Ln(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new im(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends JE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class YS extends Ln{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jE extends Ln{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vc=class Vc{constructor(e,i,s,u,f,d,h,m,p,S,_,v,y,R,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,m,p,S,_,v,y,R,w,M)}set(e,i,s,u,f,d,h,m,p,S,_,v,y,R,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=S,x[10]=_,x[14]=v,x[3]=y,x[7]=R,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Xs.setFromMatrixColumn(e,0).length(),f=1/Xs.setFromMatrixColumn(e,1).length(),d=1/Xs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(u),p=Math.sin(u),S=Math.cos(f),_=Math.sin(f);if(e.order==="XYZ"){const v=d*S,y=d*_,R=h*S,w=h*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=y+R*p,i[5]=v-w*p,i[9]=-h*m,i[2]=w-v*p,i[6]=R+y*p,i[10]=d*m}else if(e.order==="YXZ"){const v=m*S,y=m*_,R=p*S,w=p*_;i[0]=v+w*h,i[4]=R*h-y,i[8]=d*p,i[1]=d*_,i[5]=d*S,i[9]=-h,i[2]=y*h-R,i[6]=w+v*h,i[10]=d*m}else if(e.order==="ZXY"){const v=m*S,y=m*_,R=p*S,w=p*_;i[0]=v-w*h,i[4]=-d*_,i[8]=R+y*h,i[1]=y+R*h,i[5]=d*S,i[9]=w-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const v=d*S,y=d*_,R=h*S,w=h*_;i[0]=m*S,i[4]=R*p-y,i[8]=v*p+w,i[1]=m*_,i[5]=w*p+v,i[9]=y*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const v=d*m,y=d*p,R=h*m,w=h*p;i[0]=m*S,i[4]=w-v*_,i[8]=R*_+y,i[1]=_,i[5]=d*S,i[9]=-h*S,i[2]=-p*S,i[6]=y*_+R,i[10]=v-w*_}else if(e.order==="XZY"){const v=d*m,y=d*p,R=h*m,w=h*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=v*_+w,i[5]=d*S,i[9]=y*_-R,i[2]=R*_-y,i[6]=h*S,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,tT)}lookAt(e,i,s){const u=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),fr.crossVectors(s,ci),fr.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),fr.crossVectors(s,ci)),fr.normalize(),ac.crossVectors(ci,fr),u[0]=fr.x,u[4]=ac.x,u[8]=ci.x,u[1]=fr.y,u[5]=ac.y,u[9]=ci.y,u[2]=fr.z,u[6]=ac.z,u[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],S=s[1],_=s[5],v=s[9],y=s[13],R=s[2],w=s[6],M=s[10],x=s[14],I=s[3],H=s[7],C=s[11],U=s[15],N=u[0],O=u[4],T=u[8],L=u[12],G=u[1],q=u[5],et=u[9],ct=u[13],J=u[2],$=u[6],Y=u[10],W=u[14],ft=u[3],st=u[7],ht=u[11],yt=u[15];return f[0]=d*N+h*G+m*J+p*ft,f[4]=d*O+h*q+m*$+p*st,f[8]=d*T+h*et+m*Y+p*ht,f[12]=d*L+h*ct+m*W+p*yt,f[1]=S*N+_*G+v*J+y*ft,f[5]=S*O+_*q+v*$+y*st,f[9]=S*T+_*et+v*Y+y*ht,f[13]=S*L+_*ct+v*W+y*yt,f[2]=R*N+w*G+M*J+x*ft,f[6]=R*O+w*q+M*$+x*st,f[10]=R*T+w*et+M*Y+x*ht,f[14]=R*L+w*ct+M*W+x*yt,f[3]=I*N+H*G+C*J+U*ft,f[7]=I*O+H*q+C*$+U*st,f[11]=I*T+H*et+C*Y+U*ht,f[15]=I*L+H*ct+C*W+U*yt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],m=e[9],p=e[13],S=e[2],_=e[6],v=e[10],y=e[14],R=e[3],w=e[7],M=e[11],x=e[15],I=m*y-p*v,H=h*y-p*_,C=h*v-m*_,U=d*y-p*S,N=d*v-m*S,O=d*_-h*S;return i*(w*I-M*H+x*C)-s*(R*I-M*U+x*N)+u*(R*H-w*U+x*O)-f*(R*C-w*N+M*O)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],m=e[2],p=e[6],S=e[10];return i*(d*S-h*p)-s*(f*S-h*m)+u*(f*p-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],S=e[8],_=e[9],v=e[10],y=e[11],R=e[12],w=e[13],M=e[14],x=e[15],I=i*h-s*d,H=i*m-u*d,C=i*p-f*d,U=s*m-u*h,N=s*p-f*h,O=u*p-f*m,T=S*w-_*R,L=S*M-v*R,G=S*x-y*R,q=_*M-v*w,et=_*x-y*w,ct=v*x-y*M,J=I*ct-H*et+C*q+U*G-N*L+O*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/J;return e[0]=(h*ct-m*et+p*q)*$,e[1]=(u*et-s*ct-f*q)*$,e[2]=(w*O-M*N+x*U)*$,e[3]=(v*N-_*O-y*U)*$,e[4]=(m*G-d*ct-p*L)*$,e[5]=(i*ct-u*G+f*L)*$,e[6]=(M*C-R*O-x*H)*$,e[7]=(S*O-v*C+y*H)*$,e[8]=(d*et-h*G+p*T)*$,e[9]=(s*G-i*et-f*T)*$,e[10]=(R*N-w*C+x*I)*$,e[11]=(_*C-S*N-y*I)*$,e[12]=(h*L-d*q-m*T)*$,e[13]=(i*q-s*L+u*T)*$,e[14]=(w*H-R*U-M*I)*$,e[15]=(S*U-_*H+v*I)*$,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,m=e.z,p=f*d,S=f*h;return this.set(p*d+s,p*h-u*m,p*m+u*h,0,p*h+u*m,S*h+s,S*m-u*d,0,p*m-u*h,S*m+u*d,f*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,p=f+f,S=d+d,_=h+h,v=f*p,y=f*S,R=f*_,w=d*S,M=d*_,x=h*_,I=m*p,H=m*S,C=m*_,U=s.x,N=s.y,O=s.z;return u[0]=(1-(w+x))*U,u[1]=(y+C)*U,u[2]=(R-H)*U,u[3]=0,u[4]=(y-C)*N,u[5]=(1-(v+x))*N,u[6]=(M+I)*N,u[7]=0,u[8]=(R+H)*O,u[9]=(M-I)*O,u[10]=(1-(v+w))*O,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Xs.set(u[0],u[1],u[2]).length();const h=Xs.set(u[4],u[5],u[6]).length(),m=Xs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Li.copy(this);const p=1/d,S=1/h,_=1/m;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=S,Li.elements[5]*=S,Li.elements[6]*=S,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,i.setFromRotationMatrix(Li),s.x=d,s.y=h,s.z=m,this}makePerspective(e,i,s,u,f,d,h=aa,m=!1){const p=this.elements,S=2*f/(i-e),_=2*f/(s-u),v=(i+e)/(i-e),y=(s+u)/(s-u);let R,w;if(m)R=f/(d-f),w=d*f/(d-f);else if(h===aa)R=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(h===Fc)R=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=aa,m=!1){const p=this.elements,S=2/(i-e),_=2/(s-u),v=-(i+e)/(i-e),y=-(s+u)/(s-u);let R,w;if(m)R=1/(d-f),w=d/(d-f);else if(h===aa)R=-2/(d-f),w=-(d+f)/(d-f);else if(h===Fc)R=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Vc.prototype.isMatrix4=!0;let fn=Vc;const Xs=new lt,Li=new fn,$E=new lt(0,0,0),tT=new lt(1,1,1),fr=new lt,ac=new lt,ci=new lt,Lv=new fn,Ov=new ho;class $r{constructor(e=0,i=0,s=0,u=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],m=u[1],p=u[5],S=u[9],_=u[2],v=u[6],y=u[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Ne(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,y),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ov.setFromEuler(this),this.setFromQuaternion(Ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class ZS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eT=0;const Pv=new lt,ks=new ho,Ra=new fn,rc=new lt,fl=new lt,nT=new lt,iT=new ho,Iv=new lt(1,0,0),zv=new lt(0,1,0),Bv=new lt(0,0,1),Fv={type:"added"},aT={type:"removed"},Ws={type:"childadded",child:null},Lh={type:"childremoved",child:null};class $n extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new lt,i=new $r,s=new ho,u=new lt(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new fn},normalMatrix:{value:new fe}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ZS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Iv,e)}rotateY(e){return this.rotateOnAxis(zv,e)}rotateZ(e){return this.rotateOnAxis(Bv,e)}translateOnAxis(e,i){return Pv.copy(e).applyQuaternion(this.quaternion),this.position.add(Pv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Iv,e)}translateY(e){return this.translateOnAxis(zv,e)}translateZ(e){return this.translateOnAxis(Bv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?rc.copy(e):rc.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(fl,rc,this.up):Ra.lookAt(rc,fl,this.up),this.quaternion.setFromRotationMatrix(Ra),u&&(Ra.extractRotation(u.matrixWorld),ks.setFromRotationMatrix(Ra),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fv),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(aT),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fv),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,nT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,iT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];f(e.shapes,_)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(e.materials,this.material[m]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];u.animations.push(f(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),S=d(e.images),_=d(e.shapes),v=d(e.skeletons),y=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const m=[];for(const p in h){const S=h[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$n.DEFAULT_UP=new lt(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(p,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=S.position.distanceTo(_.position),y=.02,R=.005;p.inputState.pinching&&v>y+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new El;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const KS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Ph(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=De.workingColorSpace){if(e=qE(e,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Ph(d,f,e+1/3),this.g=Ph(d,f,e),this.b=Ph(d,f,e-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(e,i=Qn){function s(f){f!==void 0&&parseFloat(f)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Qn){const s=KS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return De.workingToColorSpace(In.copy(this),e),Math.round(Ne(In.r*255,0,255))*65536+Math.round(Ne(In.g*255,0,255))*256+Math.round(Ne(In.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(In.copy(this),i);const s=In.r,u=In.g,f=In.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let m,p;const S=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=S<=.5?_/(d+h):_/(2-d-h),d){case s:m=(u-f)/_+(u<f?6:0);break;case u:m=(f-s)/_+2;break;case f:m=(s-u)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Qn){De.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,u=In.b;return e!==Qn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+i,dr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(dr),e.getHSL(sc);const s=Ch(dr.h,sc.h,i),u=Ch(dr.s,sc.s,i),f=Ch(dr.l,sc.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Be;Be.NAMES=KS;class sT extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new lt,Ca=new lt,Ih=new lt,wa=new lt,qs=new lt,Ys=new lt,Hv=new lt,zh=new lt,Bh=new lt,Fh=new lt,Hh=new un,Gh=new un,Vh=new un;class Ai{constructor(e=new lt,i=new lt,s=new lt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Oi.subVectors(e,i),u.cross(Oi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Oi.subVectors(u,i),Ca.subVectors(s,i),Ih.subVectors(e,i);const d=Oi.dot(Oi),h=Oi.dot(Ca),m=Oi.dot(Ih),p=Ca.dot(Ca),S=Ca.dot(Ih),_=d*p-h*h;if(_===0)return f.set(0,0,0),null;const v=1/_,y=(p*m-h*S)*v,R=(d*S-h*m)*v;return f.set(1-y-R,R,y)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,s,u,f,d,h,m){return this.getBarycoord(e,i,s,u,wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,wa.x),m.addScaledVector(d,wa.y),m.addScaledVector(h,wa.z),m)}static getInterpolatedAttribute(e,i,s,u,f,d){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Hh,f.x),d.addScaledVector(Gh,f.y),d.addScaledVector(Vh,f.z),d}static isFrontFacing(e,i,s,u){return Oi.subVectors(s,i),Ca.subVectors(e,i),Oi.cross(Ca).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Oi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return Ai.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;qs.subVectors(u,s),Ys.subVectors(f,s),zh.subVectors(e,s);const m=qs.dot(zh),p=Ys.dot(zh);if(m<=0&&p<=0)return i.copy(s);Bh.subVectors(e,u);const S=qs.dot(Bh),_=Ys.dot(Bh);if(S>=0&&_<=S)return i.copy(u);const v=m*_-S*p;if(v<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(qs,d);Fh.subVectors(e,f);const y=qs.dot(Fh),R=Ys.dot(Fh);if(R>=0&&y<=R)return i.copy(f);const w=y*p-m*R;if(w<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(s).addScaledVector(Ys,h);const M=S*R-y*_;if(M<=0&&_-S>=0&&y-R>=0)return Hv.subVectors(f,u),h=(_-S)/(_-S+(y-R)),i.copy(u).addScaledVector(Hv,h);const x=1/(M+w+v);return d=w*x,h=v*x,i.copy(s).addScaledVector(qs,d).addScaledVector(Ys,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nl{constructor(e=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Pi):Pi.fromBufferAttribute(f,d),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),oc.copy(s.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),lc.subVectors(this.max,dl),Zs.subVectors(e.a,dl),Ks.subVectors(e.b,dl),Qs.subVectors(e.c,dl),hr.subVectors(Ks,Zs),pr.subVectors(Qs,Ks),Vr.subVectors(Zs,Qs);let i=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Vr.z,Vr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Vr.z,0,-Vr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Vr.y,Vr.x,0];return!Xh(i,Zs,Ks,Qs,lc)||(i=[1,0,0,0,1,0,0,0,1],!Xh(i,Zs,Ks,Qs,lc))?!1:(uc.crossVectors(hr,pr),i=[uc.x,uc.y,uc.z],Xh(i,Zs,Ks,Qs,lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Pi=new lt,oc=new Nl,Zs=new lt,Ks=new lt,Qs=new lt,hr=new lt,pr=new lt,Vr=new lt,dl=new lt,lc=new lt,uc=new lt,Xr=new lt;function Xh(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Xr.fromArray(o,f);const h=u.x*Math.abs(Xr.x)+u.y*Math.abs(Xr.y)+u.z*Math.abs(Xr.z),m=e.dot(Xr),p=i.dot(Xr),S=s.dot(Xr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>h)return!1}return!0}const _n=new lt,cc=new xe;let oT=0;class sa extends ts{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=WS,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(e),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ke(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=na(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=na(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=na(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=na(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=Ke(i,this.array),s=Ke(s,this.array),u=Ke(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=Ke(i,this.array),s=Ke(s,this.array),u=Ke(u,this.array),f=Ke(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class QS extends sa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class JS extends sa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Pa extends sa{constructor(e,i,s){super(new Float32Array(e),i,s)}}const lT=new Nl,hl=new lt,kh=new lt;class am{constructor(e=new lt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):lT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const i=hl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(hl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(kh)),this.expandByPoint(hl.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uT=0;const Ei=new fn,Wh=new $n,Js=new lt,fi=new Nl,pl=new Nl,bn=new lt;class fa extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(VE(e)?JS:QS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new fe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Pa(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new am);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];pl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(fi.min,pl.min),fi.expandByPoint(bn),bn.addVectors(fi.max,pl.max),fi.expandByPoint(bn)):(fi.expandByPoint(pl.min),fi.expandByPoint(pl.max))}fi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(bn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let p=0,S=h.count;p<S;p++)bn.fromBufferAttribute(h,p),m&&(Js.fromBufferAttribute(e,p),bn.add(Js)),u=Math.max(u,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new sa(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new lt,m[T]=new lt;const p=new lt,S=new lt,_=new lt,v=new xe,y=new xe,R=new xe,w=new lt,M=new lt;function x(T,L,G){p.fromBufferAttribute(s,T),S.fromBufferAttribute(s,L),_.fromBufferAttribute(s,G),v.fromBufferAttribute(f,T),y.fromBufferAttribute(f,L),R.fromBufferAttribute(f,G),S.sub(p),_.sub(p),y.sub(v),R.sub(v);const q=1/(y.x*R.y-R.x*y.y);isFinite(q)&&(w.copy(S).multiplyScalar(R.y).addScaledVector(_,-y.y).multiplyScalar(q),M.copy(_).multiplyScalar(y.x).addScaledVector(S,-R.x).multiplyScalar(q),h[T].add(w),h[L].add(w),h[G].add(w),m[T].add(M),m[L].add(M),m[G].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,L=I.length;T<L;++T){const G=I[T],q=G.start,et=G.count;for(let ct=q,J=q+et;ct<J;ct+=3)x(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const H=new lt,C=new lt,U=new lt,N=new lt;function O(T){U.fromBufferAttribute(u,T),N.copy(U);const L=h[T];H.copy(L),H.sub(U.multiplyScalar(U.dot(L))).normalize(),C.crossVectors(N,L);const q=C.dot(m[T])<0?-1:1;d.setXYZW(T,H.x,H.y,H.z,q)}for(let T=0,L=I.length;T<L;++T){const G=I[T],q=G.start,et=G.count;for(let ct=q,J=q+et;ct<J;ct+=3)O(e.getX(ct+0)),O(e.getX(ct+1)),O(e.getX(ct+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new sa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const u=new lt,f=new lt,d=new lt,h=new lt,m=new lt,p=new lt,S=new lt,_=new lt;if(e)for(let v=0,y=e.count;v<y;v+=3){const R=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),S.subVectors(d,f),_.subVectors(u,f),S.cross(_),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),h.add(S),m.add(S),p.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)u.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,f),_.subVectors(u,f),S.cross(_),s.setXYZ(v+0,S.x,S.y,S.z),s.setXYZ(v+1,S.x,S.y,S.z),s.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,S=h.itemSize,_=h.normalized,v=new p.constructor(m.length*S);let y=0,R=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?y=m[w]*h.data.stride+h.offset:y=m[w]*S;for(let x=0;x<S;x++)v[R++]=p[y++]}return new sa(v,S,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,s=this.index.array,u=this.attributes;for(const h in u){const m=u[h],p=e(m,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let S=0,_=p.length;S<_;S++){const v=p[S],y=e(v,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const u={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];S.push(y.toJSON(e.data))}S.length>0&&(u[m]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const p in u){const S=u[p];this.setAttribute(p,S.clone(i))}const f=e.morphAttributes;for(const p in f){const S=[],_=f[p];for(let v=0,y=_.length;v<y;v++)S.push(_[v].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,S=d.length;p<S;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cT{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=WS,this.updateRanges=[],this.version=0,this.uuid=vr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let u=0,f=this.stride;u<f;u++)this.array[e+u]=i.array[s+u];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const i={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}const Xn=new lt;class Gc{constructor(e,i,s,u=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=u}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix4(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyNormalMatrix(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.transformDirection(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ke(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Ke(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=na(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=na(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=na(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=na(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ke(i,this.array),s=Ke(s,this.array),u=Ke(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ke(i,this.array),s=Ke(s,this.array),u=Ke(u,this.array),f=Ke(f,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=u,this.data.array[e+3]=f,this}clone(e){if(e===void 0){Hc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const u=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[u+f])}return new sa(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const u=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[u+f])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qh=new lt,fT=new lt,dT=new fe;class gr{constructor(e=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=qh.subVectors(s,i).cross(fT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta(qh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||dT.getNormalMatrix(e),u=this.coplanarPoint(qh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let hT=0;class Ul extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=bl,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=RS,this.blendDst=CS,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=PE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ah,this.stencilZFail=Ah,this.stencilZPass=Ah,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new gr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new xe().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jS extends Ul{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let js;const ml=new lt,$s=new lt,to=new lt,eo=new xe,gl=new xe,$S=new fn,fc=new lt,_l=new lt,dc=new lt,Gv=new xe,Yh=new xe,Vv=new xe;class pT extends $n{constructor(e=new jS){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new fa;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new cT(i,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Gc(s,3,0,!1)),js.setAttribute("uv",new Gc(s,2,3,!1))}this.geometry=js,this.material=e,this.center=new xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,i){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),$S.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-to.z);const s=this.material.rotation;let u,f;s!==0&&(f=Math.cos(s),u=Math.sin(s));const d=this.center;hc(fc.set(-.5,-.5,0),to,d,$s,u,f),hc(_l.set(.5,-.5,0),to,d,$s,u,f),hc(dc.set(.5,.5,0),to,d,$s,u,f),Gv.set(0,0),Yh.set(1,0),Vv.set(1,1);let h=e.ray.intersectTriangle(fc,_l,dc,!1,ml);if(h===null&&(hc(_l.set(-.5,.5,0),to,d,$s,u,f),Yh.set(0,1),h=e.ray.intersectTriangle(fc,dc,_l,!1,ml),h===null))return;const m=e.ray.origin.distanceTo(ml);m<e.near||m>e.far||i.push({distance:m,point:ml.clone(),uv:Ai.getInterpolation(ml,fc,_l,dc,Gv,Yh,Vv,new xe),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function hc(o,e,i,s,u,f){eo.subVectors(o,i).addScalar(.5).multiply(s),u!==void 0?(gl.x=f*eo.x-u*eo.y,gl.y=u*eo.x+f*eo.y):gl.copy(eo),o.copy(e),o.x+=gl.x,o.y+=gl.y,o.applyMatrix4($S)}const Na=new lt,Zh=new lt,pc=new lt,mc=new lt;class mT{constructor(e=new lt,i=new lt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){Zh.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),mc.copy(this.origin).sub(Zh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(pc),h=mc.dot(this.direction),m=-mc.dot(pc),p=mc.lengthSq(),S=Math.abs(1-d*d);let _,v,y,R;if(S>0)if(_=d*m-h,v=d*h-m,R=f*S,_>=0)if(v>=-R)if(v<=R){const w=1/S;_*=w,v*=w,y=_*(_+d*v+2*h)+v*(d*_+v+2*m)+p}else v=f,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;else v=-f,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;else v<=-R?(_=Math.max(0,-(-d*f+h)),v=_>0?-f:Math.min(Math.max(-f,-m),f),y=-_*_+v*(v+2*m)+p):v<=R?(_=0,v=Math.min(Math.max(-f,-m),f),y=v*(v+2*m)+p):(_=Math.max(0,-(d*f+h)),v=_>0?f:Math.min(Math.max(-f,-m),f),y=-_*_+v*(v+2*m)+p);else v=d>0?-f:f,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),u&&u.copy(Zh).addScaledVector(pc,v),y}intersectSphere(e,i){if(e.radius<0)return null;Na.subVectors(e.center,this.origin);const s=Na.dot(this.direction),u=Na.dot(Na)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,u=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,u=(e.min.x-v.x)*p),S>=0?(f=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(f=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),s>m||h>u)||((h>s||s!==s)&&(s=h),(m<u||u!==u)&&(u=m),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,m=h.x,p=h.y,S=h.z,_=e.x-d.x,v=e.y-d.y,y=e.z-d.z,R=i.x-d.x,w=i.y-d.y,M=i.z-d.z,x=s.x-d.x,I=s.y-d.y,H=s.z-d.z,C=Math.abs(m),U=Math.abs(p),N=Math.abs(S);let O,T,L,G,q,et,ct,J,$,Y,W,ft;if(C>=U&&C>=N?(L=m,et=_,$=R,ft=x,m>=0?(O=p,T=S,G=v,q=y,ct=w,J=M,Y=I,W=H):(O=S,T=p,G=y,q=v,ct=M,J=w,Y=H,W=I)):U>=N?(L=p,et=v,$=w,ft=I,p>=0?(O=S,T=m,G=y,q=_,ct=M,J=R,Y=H,W=x):(O=m,T=S,G=_,q=y,ct=R,J=M,Y=x,W=H)):(L=S,et=y,$=M,ft=H,S>=0?(O=m,T=p,G=_,q=v,ct=R,J=w,Y=x,W=I):(O=p,T=m,G=v,q=_,ct=w,J=R,Y=I,W=x)),L===0)return null;const st=O/L,ht=T/L,yt=1/L,Jt=G-st*et,Zt=q-ht*et,z=ct-st*$,mt=J-ht*$,Rt=Y-st*ft,Z=W-ht*ft,dt=Rt*mt-Z*z,bt=Jt*Z-Zt*Rt,zt=z*Zt-mt*Jt;if(u){if(dt<0||bt<0||zt<0)return null}else if((dt<0||bt<0||zt<0)&&(dt>0||bt>0||zt>0))return null;const _t=dt+bt+zt;if(_t===0)return null;const Ct=yt*(dt*et+bt*$+zt*ft);return(_t>0?Ct<0:Ct>0)?null:this.at(Ct/_t,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rm extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=wS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xv=new fn,kr=new mT,gc=new am,kv=new lt,_c=new lt,vc=new lt,Sc=new lt,Kh=new lt,xc=new lt,Wv=new lt,Mc=new lt;class ua extends $n{constructor(e=new fa,i=new rm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){xc.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const S=h[m],_=f[m];S!==0&&(Kh.fromBufferAttribute(_,e),d?xc.addScaledVector(Kh,S):xc.addScaledVector(Kh.sub(i),S))}i.add(xc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(f),kr.copy(e.ray).recast(e.near),!(gc.containsPoint(kr.origin)===!1&&(kr.intersectSphere(gc,kv)===null||kr.origin.distanceToSquared(kv)>(e.far-e.near)**2))&&(Xv.copy(f).invert(),kr.copy(e.ray).applyMatrix4(Xv),!(s.boundingBox!==null&&kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,kr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,S=f.attributes.uv1,_=f.attributes.normal,v=f.groups,y=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],I=Math.max(M.start,y.start),H=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let C=I,U=H;C<U;C+=3){const N=h.getX(C),O=h.getX(C+1),T=h.getX(C+2);u=yc(this,x,e,s,p,S,_,N,O,T),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const I=h.getX(M),H=h.getX(M+1),C=h.getX(M+2);u=yc(this,d,e,s,p,S,_,I,H,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],I=Math.max(M.start,y.start),H=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=I,U=H;C<U;C+=3){const N=C,O=C+1,T=C+2;u=yc(this,x,e,s,p,S,_,N,O,T),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const I=M,H=M+1,C=M+2;u=yc(this,d,e,s,p,S,_,I,H,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function gT(o,e,i,s,u,f,d,h){let m;if(e.side===jn?m=s.intersectTriangle(d,f,u,!0,h):m=s.intersectTriangle(u,f,d,e.side===Qr,h),m===null)return null;Mc.copy(h),Mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:o}}function yc(o,e,i,s,u,f,d,h,m,p){o.getVertexPosition(h,_c),o.getVertexPosition(m,vc),o.getVertexPosition(p,Sc);const S=gT(o,e,i,s,_c,vc,Sc,Wv);if(S){const _=new lt;Ai.getBarycoord(Wv,_c,vc,Sc,_),u&&(S.uv=Ai.getInterpolatedAttribute(u,h,m,p,_,new xe)),f&&(S.uv1=Ai.getInterpolatedAttribute(f,h,m,p,_,new xe)),d&&(S.normal=Ai.getInterpolatedAttribute(d,h,m,p,_,new lt),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new lt,materialIndex:0};Ai.getNormal(_c,vc,Sc,v.normal),S.face=v,S.barycoord=_}return S}class _T extends Ln{constructor(e=null,i=1,s=1,u,f,d,h,m,p=Un,S=Un,_,v){super(null,d,h,m,p,S,u,f,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wr=new am,vT=new xe(.5,.5),Ec=new lt;class tx{constructor(e=new gr,i=new gr,s=new gr,u=new gr,f=new gr,d=new gr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=aa,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],m=f[2],p=f[3],S=f[4],_=f[5],v=f[6],y=f[7],R=f[8],w=f[9],M=f[10],x=f[11],I=f[12],H=f[13],C=f[14],U=f[15];if(u[0].setComponents(p-d,y-S,x-R,U-I).normalize(),u[1].setComponents(p+d,y+S,x+R,U+I).normalize(),u[2].setComponents(p+h,y+_,x+w,U+H).normalize(),u[3].setComponents(p-h,y-_,x-w,U-H).normalize(),s)u[4].setComponents(m,v,M,C).normalize(),u[5].setComponents(p-m,y-v,x-M,U-C).normalize();else if(u[4].setComponents(p-m,y-v,x-M,U-C).normalize(),i===aa)u[5].setComponents(p+m,y+v,x+M,U+C).normalize();else if(i===Fc)u[5].setComponents(m,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const i=vT.distanceTo(e.center);return Wr.radius=.7071067811865476+i,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(Ec.x=u.normal.x>0?e.max.x:e.min.x,Ec.y=u.normal.y>0?e.max.y:e.min.y,Ec.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ex extends Ln{constructor(e=[],i=Jr,s,u,f,d,h,m,p,S){super(e,i,s,u,f,d,h,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ST extends Ln{constructor(e,i,s,u,f,d,h,m,p){super(e,i,s,u,f,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dl extends Ln{constructor(e,i,s=oa,u,f,d,h=Un,m=Un,p,S=Ia,_=1){if(S!==Ia&&S!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,u,f,d,h,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new im(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class xT extends Dl{constructor(e,i=oa,s=Jr,u,f,d=Un,h=Un,m,p=Ia){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,s,u,f,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nx extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ll extends fa{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],S=[],_=[];let v=0,y=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,u,d,2),R("x","z","y",1,-1,e,s,-i,u,d,3),R("x","y","z",1,-1,e,i,s,u,f,4),R("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(m),this.setAttribute("position",new Pa(p,3)),this.setAttribute("normal",new Pa(S,3)),this.setAttribute("uv",new Pa(_,2));function R(w,M,x,I,H,C,U,N,O,T,L){const G=C/O,q=U/T,et=C/2,ct=U/2,J=N/2,$=O+1,Y=T+1;let W=0,ft=0;const st=new lt;for(let ht=0;ht<Y;ht++){const yt=ht*q-ct;for(let Jt=0;Jt<$;Jt++){const Zt=Jt*G-et;st[w]=Zt*I,st[M]=yt*H,st[x]=J,p.push(st.x,st.y,st.z),st[w]=0,st[M]=0,st[x]=N>0?1:-1,S.push(st.x,st.y,st.z),_.push(Jt/O),_.push(1-ht/T),W+=1}}for(let ht=0;ht<T;ht++)for(let yt=0;yt<O;yt++){const Jt=v+yt+$*ht,Zt=v+yt+$*(ht+1),z=v+(yt+1)+$*(ht+1),mt=v+(yt+1)+$*ht;m.push(Jt,Zt,mt),m.push(Zt,z,mt),ft+=6}h.addGroup(y,ft,L),y+=ft,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ol extends fa{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),m=Math.floor(u),p=h+1,S=m+1,_=e/h,v=i/m,y=[],R=[],w=[],M=[];for(let x=0;x<S;x++){const I=x*v-d;for(let H=0;H<p;H++){const C=H*_-f;R.push(C,-I,0),w.push(0,0,1),M.push(H/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<h;I++){const H=I+p*x,C=I+p*(x+1),U=I+1+p*(x+1),N=I+1+p*x;y.push(H,C,N),y.push(C,U,N)}this.setIndex(y),this.setAttribute("position",new Pa(R,3)),this.setAttribute("normal",new Pa(w,3)),this.setAttribute("uv",new Pa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}function fo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(qv(u))u.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(qv(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=fo(o[i]);for(const u in s)e[u]=s[u]}return e}function qv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function MT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ix(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const yT={clone:fo,merge:kn};var ET=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ET,this.fragmentShader=TT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=MT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new Be().setHex(u.value);break;case"v2":this.uniforms[s].value=new xe().fromArray(u.value);break;case"v3":this.uniforms[s].value=new lt().fromArray(u.value);break;case"v4":this.uniforms[s].value=new un().fromArray(u.value);break;case"m3":this.uniforms[s].value=new fe().fromArray(u.value);break;case"m4":this.uniforms[s].value=new fn().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bT extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class AT extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RT extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Yv(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Yv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Yv(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class CT{constructor(e,i,s){const u=this;let f=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(S){h++,f===!1&&u.onStart!==void 0&&u.onStart(S,d,h),f=!0},this.itemEnd=function(S){d++,u.onProgress!==void 0&&u.onProgress(S,d,h),d===h&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(S){u.onError!==void 0&&u.onError(S)},this.resolveURL=function(S){return S=S.normalize("NFC"),m?m(S):S},this.setURLModifier=function(S){return m=S,this},this.addHandler=function(S,_){return p.push(S,_),this},this.removeHandler=function(S){const _=p.indexOf(S);return _!==-1&&p.splice(_,2),this},this.getHandler=function(S){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],R=p[_+1];if(y.global&&(y.lastIndex=0),y.test(S))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wT=new CT;class sm{constructor(e){this.manager=e!==void 0?e:wT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const s=this;return new Promise(function(u,f){s.load(e,u,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sm.DEFAULT_MATERIAL_NAME="__DEFAULT";const no=new WeakMap;class DT extends sm{constructor(e){super(e)}load(e,i,s,u){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=this,d=Qh.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(e),setTimeout(function(){i&&i(d),f.manager.itemEnd(e)},0);else{let _=no.get(d);_===void 0&&(_=[],no.set(d,_)),_.push({onLoad:i,onError:u})}return d}const h=wl("img");function m(){S(),i&&i(this);const _=no.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}no.delete(this),f.manager.itemEnd(e)}function p(_){S(),u&&u(_),Qh.remove(`image:${e}`);const v=no.get(this)||[];for(let y=0;y<v.length;y++){const R=v[y];R.onError&&R.onError(_)}no.delete(this),f.manager.itemError(e),f.manager.itemEnd(e)}function S(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Qh.add(`image:${e}`,h),f.manager.itemStart(e),h.src=e,h}}class NT extends sm{constructor(e){super(e)}load(e,i,s,u){const f=new Ln,d=new DT(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},s,u),f}}const Tc=new lt,bc=new ho,ji=new lt;class ax extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,bc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,bc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Tc,bc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,bc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new lt,Zv=new xe,Kv=new xe;class Ti extends ax{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xp*2*Math.atan(Math.tan(Rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,i){return this.getViewBounds(e,Zv,Kv),i.subVectors(Kv,Zv)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rh*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*u/m,i-=d.offsetY*s/p,u*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class rx extends ax{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,m=u-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=S*this.view.offsetY,m=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const io=-90,ao=1;class UT extends $n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ti(io,ao,e,i);u.layers=this.layers,this.add(u);const f=new Ti(io,ao,e,i);f.layers=this.layers,this.add(f);const d=new Ti(io,ao,e,i);d.layers=this.layers,this.add(d);const h=new Ti(io,ao,e,i);h.layers=this.layers,this.add(h);const m=new Ti(io,ao,e,i);m.layers=this.layers,this.add(m);const p=new Ti(io,ao,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,m]=i;for(const p of i)this.remove(p);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,S]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,v,y),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class LT extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,se("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const fm=class fm{constructor(e,i,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,u){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=u,this}};fm.prototype.isMatrix2=!0;let Qv=fm;function Jv(o,e,i,s){const u=PT(s);switch(i){case VS:return o*e;case kS:return o*e/u.components*u.byteLength;case jp:return o*e/u.components*u.byteLength;case jr:return o*e*2/u.components*u.byteLength;case $p:return o*e*2/u.components*u.byteLength;case XS:return o*e*3/u.components*u.byteLength;case Ii:return o*e*4/u.components*u.byteLength;case tm:return o*e*4/u.components*u.byteLength;case Dc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:case gp:return Math.max(o,16)*Math.max(e,8)/4;case hp:case mp:return Math.max(o,8)*Math.max(e,8)/2;case _p:case vp:case xp:case Mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sp:case Pc:case yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case bp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case wp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Pp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case zp:case Bp:case Fp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ic:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function PT(o){switch(o){case bi:case BS:return{byteLength:1,components:1};case Rl:case FS:case la:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case oa:case Kp:case ia:return{byteLength:4,components:1};case HS:case GS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);function sx(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function IT(o){const e=new WeakMap;function i(h,m){const p=h.array,S=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(m,v),o.bufferData(m,p,S),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const S=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,S);else{_.sort((y,R)=>y.start-R.start);let v=0;for(let y=1;y<_.length;y++){const R=_[v],w=_[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++v,_[v]=w)}_.length=v+1;for(let y=0,R=_.length;y<R;y++){const w=_[y];o.bufferSubData(p,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:u,remove:f,update:d}}var zT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ib=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:zT,alphahash_pars_fragment:BT,alphamap_fragment:FT,alphamap_pars_fragment:HT,alphatest_fragment:GT,alphatest_pars_fragment:VT,aomap_fragment:XT,aomap_pars_fragment:kT,batching_pars_vertex:WT,batching_vertex:qT,begin_vertex:YT,beginnormal_vertex:ZT,bsdfs:KT,iridescence_fragment:QT,bumpmap_pars_fragment:JT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:$T,clipping_planes_pars_vertex:tb,clipping_planes_vertex:eb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:ab,color_vertex:rb,common:sb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:ub,displacementmap_vertex:cb,emissivemap_fragment:fb,emissivemap_pars_fragment:db,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:wb,envmap_vertex:Sb,fog_vertex:xb,fog_pars_vertex:Mb,fog_fragment:yb,fog_pars_fragment:Eb,gradientmap_pars_fragment:Tb,lightmap_pars_fragment:bb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Db,lights_toon_pars_fragment:Nb,lights_phong_fragment:Ub,lights_phong_pars_fragment:Lb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Pb,lights_fragment_begin:Ib,lights_fragment_maps:zb,lights_fragment_end:Bb,lightprobes_pars_fragment:Fb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Xb,map_fragment:kb,map_pars_fragment:Wb,map_particle_fragment:qb,map_particle_pars_fragment:Yb,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:Jb,morphnormal_vertex:jb,morphtarget_pars_vertex:$b,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:a1,normal_vertex:r1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:c1,opaque_fragment:f1,packing:d1,premultiplied_alpha_fragment:h1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:x1,shadowmap_vertex:M1,shadowmask_pars_fragment:y1,skinbase_vertex:E1,skinning_pars_vertex:T1,skinning_vertex:b1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:w1,tonemapping_pars_fragment:D1,transmission_fragment:N1,transmission_pars_fragment:U1,uv_pars_fragment:L1,uv_pars_vertex:O1,uv_vertex:P1,worldpos_vertex:I1,background_vert:z1,background_frag:B1,backgroundCube_vert:F1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:X1,depth_frag:k1,distance_vert:W1,distance_frag:q1,equirect_vert:Y1,equirect_frag:Z1,linedashed_vert:K1,linedashed_frag:Q1,meshbasic_vert:J1,meshbasic_frag:j1,meshlambert_vert:$1,meshlambert_frag:tA,meshmatcap_vert:eA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:aA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:lA,meshtoon_vert:uA,meshtoon_frag:cA,points_vert:fA,points_frag:dA,shadow_vert:hA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},Ht={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new lt},probesMax:{value:new lt},probesResolution:{value:new lt}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ta={basic:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:kn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:kn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Be(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:kn([Ht.points,Ht.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:kn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:kn([Ht.common,Ht.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:kn([Ht.sprite,Ht.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:kn([Ht.common,Ht.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:kn([Ht.lights,Ht.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ta.physical={uniforms:kn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Ac={r:0,b:0,g:0},_A=new fn,ox=new fe;ox.set(-1,0,0,0,1,0,0,0,1);function vA(o,e,i,s,u,f){const d=new Be(0);let h=u===!0?0:1,m,p,S=null,_=0,v=null;function y(I){let H=I.isScene===!0?I.background:null;if(H&&H.isTexture){const C=I.backgroundBlurriness>0;H=e.get(H,C)}return H}function R(I){let H=!1;const C=y(I);C===null?M(d,h):C&&C.isColor&&(M(C,1),H=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(I,H){const C=y(H);C&&(C.isCubeTexture||C.mapping===Xc)?(p===void 0&&(p=new ua(new Ll(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:fo(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(ox),p.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,(S!==C||_!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,_=C.version,v=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ua(new Ol(2,2),new ca({name:"BackgroundMaterial",uniforms:fo(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||_!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,_=C.version,v=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function M(I,H){I.getRGB(Ac,ix(o)),i.buffers.color.setClear(Ac.r,Ac.g,Ac.b,H,f)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,H=1){d.set(I),h=H,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,M(d,h)},render:R,addToRenderList:w,dispose:x}}function SA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=v(null);let f=u,d=!1;function h(q,et,ct,J,$){let Y=!1;const W=_(q,J,ct,et);f!==W&&(f=W,p(f.object)),Y=y(q,J,ct,$),Y&&R(q,J,ct,$),$!==null&&e.update($,o.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,C(q,et,ct,J),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return o.createVertexArray()}function p(q){return o.bindVertexArray(q)}function S(q){return o.deleteVertexArray(q)}function _(q,et,ct,J){const $=J.wireframe===!0;let Y=s[et.id];Y===void 0&&(Y={},s[et.id]=Y);const W=q.isInstancedMesh===!0?q.id:0;let ft=Y[W];ft===void 0&&(ft={},Y[W]=ft);let st=ft[ct.id];st===void 0&&(st={},ft[ct.id]=st);let ht=st[$];return ht===void 0&&(ht=v(m()),st[$]=ht),ht}function v(q){const et=[],ct=[],J=[];for(let $=0;$<i;$++)et[$]=0,ct[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:ct,attributeDivisors:J,object:q,attributes:{},index:null}}function y(q,et,ct,J){const $=f.attributes,Y=et.attributes;let W=0;const ft=ct.getAttributes();for(const st in ft)if(ft[st].location>=0){const yt=$[st];let Jt=Y[st];if(Jt===void 0&&(st==="instanceMatrix"&&q.instanceMatrix&&(Jt=q.instanceMatrix),st==="instanceColor"&&q.instanceColor&&(Jt=q.instanceColor)),yt===void 0||yt.attribute!==Jt||Jt&&yt.data!==Jt.data)return!0;W++}return f.attributesNum!==W||f.index!==J}function R(q,et,ct,J){const $={},Y=et.attributes;let W=0;const ft=ct.getAttributes();for(const st in ft)if(ft[st].location>=0){let yt=Y[st];yt===void 0&&(st==="instanceMatrix"&&q.instanceMatrix&&(yt=q.instanceMatrix),st==="instanceColor"&&q.instanceColor&&(yt=q.instanceColor));const Jt={};Jt.attribute=yt,yt&&yt.data&&(Jt.data=yt.data),$[st]=Jt,W++}f.attributes=$,f.attributesNum=W,f.index=J}function w(){const q=f.newAttributes;for(let et=0,ct=q.length;et<ct;et++)q[et]=0}function M(q){x(q,0)}function x(q,et){const ct=f.newAttributes,J=f.enabledAttributes,$=f.attributeDivisors;ct[q]=1,J[q]===0&&(o.enableVertexAttribArray(q),J[q]=1),$[q]!==et&&(o.vertexAttribDivisor(q,et),$[q]=et)}function I(){const q=f.newAttributes,et=f.enabledAttributes;for(let ct=0,J=et.length;ct<J;ct++)et[ct]!==q[ct]&&(o.disableVertexAttribArray(ct),et[ct]=0)}function H(q,et,ct,J,$,Y,W){W===!0?o.vertexAttribIPointer(q,et,ct,$,Y):o.vertexAttribPointer(q,et,ct,J,$,Y)}function C(q,et,ct,J){w();const $=J.attributes,Y=ct.getAttributes(),W=et.defaultAttributeValues;for(const ft in Y){const st=Y[ft];if(st.location>=0){let ht=$[ft];if(ht===void 0&&(ft==="instanceMatrix"&&q.instanceMatrix&&(ht=q.instanceMatrix),ft==="instanceColor"&&q.instanceColor&&(ht=q.instanceColor)),ht!==void 0){const yt=ht.normalized,Jt=ht.itemSize,Zt=e.get(ht);if(Zt===void 0)continue;const z=Zt.buffer,mt=Zt.type,Rt=Zt.bytesPerElement,Z=mt===o.INT||mt===o.UNSIGNED_INT||ht.gpuType===Kp;if(ht.isInterleavedBufferAttribute){const dt=ht.data,bt=dt.stride,zt=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<st.locationSize;_t++)x(st.location+_t,dt.meshPerAttribute);q.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<st.locationSize;_t++)M(st.location+_t);o.bindBuffer(o.ARRAY_BUFFER,z);for(let _t=0;_t<st.locationSize;_t++)H(st.location+_t,Jt/st.locationSize,mt,yt,bt*Rt,(zt+Jt/st.locationSize*_t)*Rt,Z)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<st.locationSize;dt++)x(st.location+dt,ht.meshPerAttribute);q.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<st.locationSize;dt++)M(st.location+dt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let dt=0;dt<st.locationSize;dt++)H(st.location+dt,Jt/st.locationSize,mt,yt,Jt*Rt,Jt/st.locationSize*dt*Rt,Z)}}else if(W!==void 0){const yt=W[ft];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(st.location,yt);break;case 3:o.vertexAttrib3fv(st.location,yt);break;case 4:o.vertexAttrib4fv(st.location,yt);break;default:o.vertexAttrib1fv(st.location,yt)}}}}I()}function U(){L();for(const q in s){const et=s[q];for(const ct in et){const J=et[ct];for(const $ in J){const Y=J[$];for(const W in Y)S(Y[W].object),delete Y[W];delete J[$]}}delete s[q]}}function N(q){if(s[q.id]===void 0)return;const et=s[q.id];for(const ct in et){const J=et[ct];for(const $ in J){const Y=J[$];for(const W in Y)S(Y[W].object),delete Y[W];delete J[$]}}delete s[q.id]}function O(q){for(const et in s){const ct=s[et];for(const J in ct){const $=ct[J];if($[q.id]===void 0)continue;const Y=$[q.id];for(const W in Y)S(Y[W].object),delete Y[W];delete $[q.id]}}}function T(q){for(const et in s){const ct=s[et],J=q.isInstancedMesh===!0?q.id:0,$=ct[J];if($!==void 0){for(const Y in $){const W=$[Y];for(const ft in W)S(W[ft].object),delete W[ft];delete $[Y]}delete ct[J],Object.keys(ct).length===0&&delete s[et]}}}function L(){G(),d=!0,f!==u&&(f=u,p(f.object))}function G(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:G,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:M,disableUnusedAttributes:I}}function xA(o,e,i){let s;function u(m){s=m}function f(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,S){S!==0&&(o.drawArraysInstanced(s,m,p,S),i.update(p,s,S))}function h(m,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,S);let v=0;for(let y=0;y<S;y++)v+=p[y];i.update(v,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function MA(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(O){return!(O!==Ii&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const T=O===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==bi&&O!==ia&&!T&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(se("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:I,maxVaryings:H,maxFragmentUniforms:C,maxSamples:U,samples:N}}function yA(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new gr,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||u;return u=v,s=_.length,y},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,v){i=S(_,v,0)},this.setState=function(_,v,y){const R=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!u||R===null||R.length===0||f&&!M)f?S(null):p();else{const I=f?0:s,H=I*4;let C=x.clippingState||null;m.value=C,C=S(R,v,H,y);for(let U=0;U!==H;++U)C[U]=i[U];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(_,v,y,R){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=m.value,R!==!0||M===null){const x=y+w*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,C=y;H!==w;++H,C+=4)d.copy(_[H]).applyMatrix4(I,h),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const oo=4,EA=6,TA=20,bA=256,vl=new rx,jv=new Be;let Jh=null,jh=0,$h=0,tp=!1;const AA=new lt,qr=new lt;class $v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=AA}=f;Jh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,u,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,jh,$h),this._renderer.xr.enabled=tp,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Jr||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:la,format:Ii,colorSpace:zc,depthBuffer:!1},u=tS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tS(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RA(f)),this._blurMaterial=wA(f,e,i),this._ggxMaterial=CA(f,e,i)}return u}_compileMaterial(e){const i=new ua(new fa,e);this._renderer.compile(i,vl)}_sceneToCubeUV(e,i,s,u,f){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(jv),_.toneMapping=ra,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(u),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ua(new Ll,new rm({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,x=!0):(M.color.copy(jv),x=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(m.up.set(0,p[H],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+S[H],f.y,f.z)):C===1?(m.up.set(0,0,p[H]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+S[H],f.z)):(m.up.set(0,p[H],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+S[H]));const U=this._cubeSize;ro(u,C*U,H>2?U:0,U,U),_.setRenderTarget(u),x&&_.render(w,m),_.render(e,m)}_.toneMapping=y,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===Jr||e.mapping===co;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=nS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eS());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const m=this._cubeSize;ro(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,vl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-S*S),v=p*1.25,y=_*v,{_lodMax:R}=this,w=this._sizeLods[s],M=3*w*(s>R-oo?s-R+oo:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=R-i,ro(f,M,x,3*w,2*w),u.setRenderTarget(f),u.render(h,vl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=R-s,ro(e,M,x,3*w,2*w),u.setRenderTarget(e),u.render(h,vl)}_blur(e,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,u,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[u];m.material=h;const p=h.uniforms;p.envMap.value=e.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const S=this._sizeLods[u],_=3*S*(u>this._lodMax-oo?u-this._lodMax+oo:0),v=4*(this._cubeSize-S);ro(i,_,v,3*S,2*S),d.setRenderTarget(i),d.render(m,vl)}}function RA(o){const e=[],i=[];let s=o;const u=o-oo+1+EA;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),m=-h,p=1+h,S=[m,m,p,m,p,p,m,m,p,p,m,p],_=6,v=6,y=3,R=new Float32Array(y*v*_),w=new Float32Array(y*v*_);for(let x=0;x<_;x++){const I=x%3*2/3-1,H=x>2?0:-1,C=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];R.set(C,y*v*x);for(let U=0;U<v;U++){const N=S[U*2]*2-1,O=S[U*2+1]*2-1;x===0?qr.set(1,O,N):x===1?qr.set(-N,1,-O):x===2?qr.set(-N,O,1):x===3?qr.set(-1,O,-N):x===4?qr.set(-N,-1,O):qr.set(N,O,-1),qr.toArray(w,(x*v+U)*y)}}const M=new fa;M.setAttribute("position",new sa(R,y)),M.setAttribute("outputDirection",new sa(w,y)),i.push(new ua(M,null)),s>oo&&s--}return{lodMeshes:i,sizeLods:e}}function tS(o,e,i){const s=new zi(o,e,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ro(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function CA(o,e,i){return new ca({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function wA(o,e,i){return new ca({name:"SphericalGaussianBlur",defines:{SAMPLES:TA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function eS(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function nS(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lx extends zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new ex(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new Ll(5,5,5),f=new ca({name:"CubemapFromEquirect",uniforms:fo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:La});f.uniforms.tEquirect.value=i;const d=new ua(u,f),h=i.minFilter;return i.minFilter===Zr&&(i.minFilter=zn),new UT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}function DA(o){let e=new WeakMap,i=new WeakMap,s=null;function u(v,y=!1){return v==null?null:y?d(v):f(v)}function f(v){if(v&&v.isTexture){const y=v.mapping;if(y===Eh||y===Th)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const w=new lx(R.height);return w.fromEquirectangularTexture(o,v),e.set(v,w),v.addEventListener("dispose",p),h(w.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const y=v.mapping,R=y===Eh||y===Th,w=y===Jr||y===co;if(R||w){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new $v(o)),M=R?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const I=v.image;return R&&I&&I.height>0||w&&I&&m(I)?(s===null&&(s=new $v(o)),M=R?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,y){return y===Eh?v.mapping=Jr:y===Th&&(v.mapping=co),v}function m(v){let y=0;const R=6;for(let w=0;w<R;w++)v[w]!==void 0&&y++;return y===R}function p(v){const y=v.target;y.removeEventListener("dispose",p);const R=e.get(y);R!==void 0&&(e.delete(y),R.dispose())}function S(v){const y=v.target;y.removeEventListener("dispose",S);const R=i.get(y);R!==void 0&&(i.delete(y),R.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:_}}function NA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&lo("WebGLRenderer: "+s+" extension not supported."),u}}}function UA(o,e,i,s){const u={},f=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete u[v.id];const y=f.get(v);y&&(e.remove(y),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return u[v.id]===!0||(v.addEventListener("dispose",d),u[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,R=_.attributes.position;let w=0;if(R===void 0)return;if(y!==null){const I=y.array;w=y.version;for(let H=0,C=I.length;H<C;H+=3){const U=I[H+0],N=I[H+1],O=I[H+2];v.push(U,N,N,O,O,U)}}else{const I=R.array;w=R.version;for(let H=0,C=I.length/3-1;H<C;H+=3){const U=H+0,N=H+1,O=H+2;v.push(U,N,N,O,O,U)}}const M=new(R.count>=65535?JS:QS)(v,1);M.version=w;const x=f.get(_);x&&e.remove(x),f.set(_,M)}function S(_){const v=f.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return f.get(_)}return{get:h,update:m,getWireframeAttribute:S}}function LA(o,e,i){let s;function u(_){s=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function m(_,v){o.drawElements(s,v,f,_*d),i.update(v,s,1)}function p(_,v,y){y!==0&&(o.drawElementsInstanced(s,v,f,_*d,y),i.update(v,s,y))}function S(_,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,_,0,y);let w=0;for(let M=0;M<y;M++)w+=v[M];i.update(w,s,1)}this.setMode=u,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function OA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Oe("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function PA(o,e,i){const s=new WeakMap,u=new un;function f(d,h,m){const p=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let G=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var y=G;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let U=h.attributes.position.count*C,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*N*4*_),T=new YS(O,U,N,_);T.type=ia,T.needsUpdate=!0;const L=C*4;for(let q=0;q<_;q++){const et=x[q],ct=I[q],J=H[q],$=U*N*4*q;for(let Y=0;Y<et.count;Y++){const W=Y*L;R===!0&&(u.fromBufferAttribute(et,Y),O[$+W+0]=u.x,O[$+W+1]=u.y,O[$+W+2]=u.z,O[$+W+3]=0),w===!0&&(u.fromBufferAttribute(ct,Y),O[$+W+4]=u.x,O[$+W+5]=u.y,O[$+W+6]=u.z,O[$+W+7]=0),M===!0&&(u.fromBufferAttribute(J,Y),O[$+W+8]=u.x,O[$+W+9]=u.y,O[$+W+10]=u.z,O[$+W+11]=J.itemSize===4?u.w:1)}}v={count:_,texture:T,size:new xe(U,N)},s.set(h,v),h.addEventListener("dispose",G)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<p.length;M++)R+=p[M];const w=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function IA(o,e,i,s,u){let f=new WeakMap;function d(p){const S=u.render.frame,_=p.geometry,v=e.get(p,_);if(f.get(v)!==S&&(e.update(v),f.set(v,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==S&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,S))),p.isSkinnedMesh){const y=p.skeleton;f.get(y)!==S&&(y.update(),f.set(y,S))}return v}function h(){f=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const zA={[DS]:"LINEAR_TONE_MAPPING",[NS]:"REINHARD_TONE_MAPPING",[US]:"CINEON_TONE_MAPPING",[LS]:"ACES_FILMIC_TONE_MAPPING",[PS]:"AGX_TONE_MAPPING",[IS]:"NEUTRAL_TONE_MAPPING",[OS]:"CUSTOM_TONE_MAPPING"};function BA(o,e,i,s,u,f){const d=new zi(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new fa;p.setAttribute("position",new Pa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Pa([0,2,0,0,2,0],2));const S=new bT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new ua(p,S),v=new rx(-1,1,1,-1,0,1);let y=null,R=null,w=!1,M,x=null,I=[],H=!1;this.setSize=function(C,U){d.setSize(C,U),h!==null&&h.setSize(C,U),m!==null&&m.setSize(C,U);for(let N=0;N<I.length;N++){const O=I[N];O.setSize&&O.setSize(C,U)}},this.setEffects=function(C){I=C,H=I.length>0&&I[0].isRenderPass===!0;const U=d.width,N=d.height;I.length>0&&h===null&&(h=new zi(U,N,{type:la,depthBuffer:!1,stencilBuffer:!1}),m=new zi(U,N,{type:la,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<I.length;O++){const T=I[O];T.setSize&&T.setSize(U,N)}},this.begin=function(C,U){if(w||C.toneMapping===ra&&I.length===0)return!1;if(x=U,U!==null){const N=U.width,O=U.height;(d.width!==N||d.height!==O)&&this.setSize(N,O)}return H===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=ra,!0},this.hasRenderPass=function(){return H},this.end=function(C,U){C.toneMapping=M,w=!0;let N=d,O=h;for(let T=0;T<I.length;T++){const L=I[T];L.enabled!==!1&&(L.render(C,O,N,U),L.needsSwap!==!1&&(N=O,O=O===h?m:h))}if(y!==C.outputColorSpace||R!==C.toneMapping){y=C.outputColorSpace,R=C.toneMapping,S.defines={},De.getTransfer(y)===qe&&(S.defines.SRGB_TRANSFER="");const T=zA[R];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(x),C.render(_,v),x=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),S.dispose()}}const ux=new Ln,kp=new Dl(1,1),cx=new YS,fx=new jE,dx=new ex,iS=[],aS=[],rS=new Float32Array(16),sS=new Float32Array(9),oS=new Float32Array(4);function po(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=iS[u];if(f===void 0&&(f=new Float32Array(u),iS[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Wc(o,e){let i=aS[e];i===void 0&&(i=new Int32Array(e),aS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function FA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function GA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function VA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function XA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;oS.set(s),o.uniformMatrix2fv(this.addr,!1,oS),Mn(i,s)}}function kA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;sS.set(s),o.uniformMatrix3fv(this.addr,!1,sS),Mn(i,s)}}function WA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;rS.set(s),o.uniformMatrix4fv(this.addr,!1,rS),Mn(i,s)}}function qA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function YA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function ZA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function KA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function QA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function JA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function jA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function $A(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function tR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(kp.compareFunction=i.isReversedDepthBuffer()?nm:em,f=kp):f=ux,i.setTexture2D(e||f,u)}function eR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||fx,u)}function nR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||dx,u)}function iR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||cx,u)}function aR(o){switch(o){case 5126:return FA;case 35664:return HA;case 35665:return GA;case 35666:return VA;case 35674:return XA;case 35675:return kA;case 35676:return WA;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return jA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}function rR(o,e){o.uniform1fv(this.addr,e)}function sR(o,e){const i=po(e,this.size,2);o.uniform2fv(this.addr,i)}function oR(o,e){const i=po(e,this.size,3);o.uniform3fv(this.addr,i)}function lR(o,e){const i=po(e,this.size,4);o.uniform4fv(this.addr,i)}function uR(o,e){const i=po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function cR(o,e){const i=po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fR(o,e){const i=po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function dR(o,e){o.uniform1iv(this.addr,e)}function hR(o,e){o.uniform2iv(this.addr,e)}function pR(o,e){o.uniform3iv(this.addr,e)}function mR(o,e){o.uniform4iv(this.addr,e)}function gR(o,e){o.uniform1uiv(this.addr,e)}function _R(o,e){o.uniform2uiv(this.addr,e)}function vR(o,e){o.uniform3uiv(this.addr,e)}function SR(o,e){o.uniform4uiv(this.addr,e)}function xR(o,e,i){const s=this.cache,u=e.length,f=Wc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=kp:d=ux;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function MR(o,e,i){const s=this.cache,u=e.length,f=Wc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||fx,f[d])}function yR(o,e,i){const s=this.cache,u=e.length,f=Wc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||dx,f[d])}function ER(o,e,i){const s=this.cache,u=e.length,f=Wc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||cx,f[d])}function TR(o){switch(o){case 5126:return rR;case 35664:return sR;case 35665:return oR;case 35666:return lR;case 35674:return uR;case 35675:return cR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return _R;case 36295:return vR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return ER}}class bR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=aR(i.type)}}class AR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TR(i.type)}}class RR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function lS(o,e){o.seq.push(e),o.map[e.id]=e}function CR(o,e,i){const s=o.name,u=s.length;for(ep.lastIndex=0;;){const f=ep.exec(s),d=ep.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===u){lS(i,p===void 0?new bR(h,o,e):new AR(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new RR(h),lS(i,_)),i=_}}}class Oc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);CR(h,m,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function uS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const wR=37297;let DR=0;function NR(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const cS=new fe;function UR(o){De._getMatrix(cS,De.workingColorSpace,o);const e=`mat3( ${cS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Bc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function fS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+NR(o.getShaderSource(e),h)}else return f}function LR(o,e){const i=UR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const OR={[DS]:"Linear",[NS]:"Reinhard",[US]:"Cineon",[LS]:"ACESFilmic",[PS]:"AgX",[IS]:"Neutral",[OS]:"Custom"};function PR(o,e){const i=OR[e];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new lt;function IR(){De.getLuminanceCoefficients(Rc);const o=Rc.x.toFixed(4),e=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function BR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function FR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Tl(o){return o!==""}function dS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(o){return o.replace(HR,VR)}const GR=new Map;function VR(o,e){let i=me[e];if(i===void 0){const s=GR.get(e);if(s!==void 0)i=me[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wp(i)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pS(o){return o.replace(XR,kR)}function kR(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function mS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WR={[wc]:"SHADOWMAP_TYPE_PCF",[yl]:"SHADOWMAP_TYPE_VSM"};function qR(o){return WR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YR={[Jr]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function ZR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":YR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const KR={[co]:"ENVMAP_MODE_REFRACTION"};function QR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":KR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JR={[wS]:"ENVMAP_BLENDING_MULTIPLY",[DE]:"ENVMAP_BLENDING_MIX",[NE]:"ENVMAP_BLENDING_ADD"};function jR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":JR[o.combine]||"ENVMAP_BLENDING_NONE"}function $R(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tC(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=qR(i),p=ZR(i),S=QR(i),_=jR(i),v=$R(i),y=zR(i),R=BR(f),w=u.createProgram();let M,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Tl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Tl).join(`
`),x.length>0&&(x+=`
`)):(M=[mS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),x=[mS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ra?"#define TONE_MAPPING":"",i.toneMapping!==ra?me.tonemapping_pars_fragment:"",i.toneMapping!==ra?PR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,LR("linearToOutputTexel",i.outputColorSpace),IR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),d=Wp(d),d=dS(d,i),d=hS(d,i),h=Wp(h),h=dS(h,i),h=hS(h,i),d=pS(d),h=pS(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=I+M+d,C=I+x+h,U=uS(u,u.VERTEX_SHADER,H),N=uS(u,u.FRAGMENT_SHADER,C);u.attachShader(w,U),u.attachShader(w,N),i.index0AttributeName!==void 0?u.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function O(q){if(o.debug.checkShaderErrors){const et=u.getProgramInfoLog(w)||"",ct=u.getShaderInfoLog(U)||"",J=u.getShaderInfoLog(N)||"",$=et.trim(),Y=ct.trim(),W=J.trim();let ft=!0,st=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,U,N);else{const ht=fS(u,U,"vertex"),yt=fS(u,N,"fragment");Oe("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+$+`
`+ht+`
`+yt)}else $!==""?se("WebGLProgram: Program Info Log:",$):(Y===""||W==="")&&(st=!1);st&&(q.diagnostics={runnable:ft,programLog:$,vertexShader:{log:Y,prefix:M},fragmentShader:{log:W,prefix:x}})}u.deleteShader(U),u.deleteShader(N),T=new Oc(u,w),L=FR(u,w)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let G=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=u.getProgramParameter(w,wR)),G},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=N,this}let eC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new iC(e),i.set(e,s)),s}}class iC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function aC(o){return o===jr||o===Pc||o===Ic}function rC(o,e,i,s,u,f){const d=new ZS,h=new nC,m=new Set,p=[],S=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,G,q,et,ct){const J=q.fog,$=et.geometry,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ft=e.get(T.envMap||Y,W),st=ft&&ft.mapping===Xc?ft.image.height:null,ht=y[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&se("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Jt=yt!==void 0?yt.length:0;let Zt=0;$.morphAttributes.position!==void 0&&(Zt=1),$.morphAttributes.normal!==void 0&&(Zt=2),$.morphAttributes.color!==void 0&&(Zt=3);let z,mt,Rt,Z;if(ht){const Ce=ta[ht];z=Ce.vertexShader,mt=Ce.fragmentShader}else{z=T.vertexShader,mt=T.fragmentShader;const Ce=h.getVertexShaderStage(T),ue=h.getFragmentShaderStage(T);h.update(T,Ce,ue),Rt=Ce.id,Z=ue.id}const dt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),zt=et.isInstancedMesh===!0,_t=et.isBatchedMesh===!0,Ct=!!T.map,Ge=!!T.matcap,pe=!!ft,ge=!!T.aoMap,Me=!!T.lightMap,ee=!!T.bumpMap&&T.wireframe===!1,ie=!!T.normalMap,Ve=!!T.displacementMap,dn=!!T.emissiveMap,Pe=!!T.metalnessMap,tn=!!T.roughnessMap,X=T.anisotropy>0,nn=T.clearcoat>0,Le=T.dispersion>0,D=T.retroreflectivity>0,E=T.iridescence>0,j=T.sheen>0,rt=T.transmission>0,pt=X&&!!T.anisotropyMap,At=nn&&!!T.clearcoatMap,Nt=nn&&!!T.clearcoatNormalMap,gt=nn&&!!T.clearcoatRoughnessMap,Mt=E&&!!T.iridescenceMap,Dt=E&&!!T.iridescenceThicknessMap,$t=j&&!!T.sheenColorMap,It=j&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,Xt=!!T.specularColorMap,ne=!!T.specularIntensityMap,le=rt&&!!T.transmissionMap,V=rt&&!!T.thicknessMap,wt=!!T.gradientMap,xt=!!T.alphaMap,Ut=T.alphaTest>0,Vt=!!T.alphaHash,Tt=!!T.extensions;let jt=ra;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(jt=o.toneMapping);const Gt={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:mt,defines:T.defines,customVertexShaderID:Rt,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:_t,batchingColor:_t&&et._colorsTexture!==null,instancing:zt,instancingColor:zt&&et.instanceColor!==null,instancingMorph:zt&&et.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ct,matcap:Ge,envMap:pe,envMapMode:pe&&ft.mapping,envMapCubeUVHeight:st,aoMap:ge,lightMap:Me,bumpMap:ee,normalMap:ie,displacementMap:Ve,emissiveMap:dn,normalMapObjectSpace:ie&&T.normalMapType===OE,normalMapTangentSpace:ie&&T.normalMapType===Rv,packedNormalMap:ie&&T.normalMapType===Rv&&aC(T.normalMap.format),metalnessMap:Pe,roughnessMap:tn,anisotropy:X,anisotropyMap:pt,clearcoat:nn,clearcoatMap:At,clearcoatNormalMap:Nt,clearcoatRoughnessMap:gt,dispersion:Le,retroreflection:D,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:j,sheenColorMap:$t,sheenRoughnessMap:It,specularMap:Pt,specularColorMap:Xt,specularIntensityMap:ne,transmission:rt,transmissionMap:le,thicknessMap:V,gradientMap:wt,opaque:T.transparent===!1&&T.blending===bl&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ut,alphaHash:Vt,combine:T.combine,mapUv:Ct&&R(T.map.channel),aoMapUv:ge&&R(T.aoMap.channel),lightMapUv:Me&&R(T.lightMap.channel),bumpMapUv:ee&&R(T.bumpMap.channel),normalMapUv:ie&&R(T.normalMap.channel),displacementMapUv:Ve&&R(T.displacementMap.channel),emissiveMapUv:dn&&R(T.emissiveMap.channel),metalnessMapUv:Pe&&R(T.metalnessMap.channel),roughnessMapUv:tn&&R(T.roughnessMap.channel),anisotropyMapUv:pt&&R(T.anisotropyMap.channel),clearcoatMapUv:At&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&R(T.sheenRoughnessMap.channel),specularMapUv:Pt&&R(T.specularMap.channel),specularColorMapUv:Xt&&R(T.specularColorMap.channel),specularIntensityMapUv:ne&&R(T.specularIntensityMap.channel),transmissionMapUv:le&&R(T.transmissionMap.channel),thicknessMapUv:V&&R(T.thicknessMap.channel),alphaMapUv:xt&&R(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ie||X),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!$.attributes.uv&&(Ct||xt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&ie===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:bt,skinning:et.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:Zt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:jt,decodeVideoTexture:Ct&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===qe,decodeVideoTextureEmissive:dn&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ea,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Tt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&T.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)L.push(G),L.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(x(L,T),I(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numSunLights),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numSunLightShadows),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function I(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function H(T){const L=y[T.type];let G;if(L){const q=ta[L];G=yT.clone(q.uniforms)}else G=T.uniforms;return G}function C(T,L){let G=S.get(L);return G!==void 0?++G.usedTimes:(G=new tC(o,L,T,u),p.push(G),S.set(L,G)),G}function U(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),S.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function O(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:H,acquireProgram:C,releaseProgram:U,releaseShaderCache:N,programs:p,dispose:O}}function sC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function oC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function gS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _S(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,R,w,M,x){let I=o[e];return I===void 0?(I={id:v.id,object:v,geometry:y,material:R,materialVariant:d(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:x},o[e]=I):(I.id=v.id,I.object=v,I.geometry=y,I.material=R,I.materialVariant=d(v),I.groupOrder=w,I.renderOrder=v.renderOrder,I.z=M,I.group=x),e++,I}function m(v,y,R,w,M,x,I){I.reversedDepth===!0&&(M=-M);const H=h(v,y,R,w,M,x);R.transmission>0?s.push(H):R.transparent===!0?u.push(H):i.push(H)}function p(v,y,R,w,M,x){const I=h(v,y,R,w,M,x);R.transmission>0?s.unshift(I):R.transparent===!0?u.unshift(I):i.unshift(I)}function S(v,y){i.length>1&&i.sort(v||oC),s.length>1&&s.sort(y||gS),u.length>1&&u.sort(y||gS)}function _(){for(let v=e,y=o.length;v<y;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:m,unshift:p,finish:_,sort:S}}function lC(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new _S,o.set(s,[d])):u>=f.length?(d=new _S,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function uC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new lt,color:new Be};break;case"SpotLight":i={position:new lt,direction:new lt,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[e.id]=i,i}}}function cC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let fC=0;function dC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function hC(o){const e=new uC,i=cC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new lt);const u=new lt,f=new fn,d=new fn;function h(p){let S=0,_=0,v=0;for(let et=0;et<9;et++)s.probe[et].set(0,0,0);let y=0,R=0,w=0,M=0,x=0,I=0,H=0,C=0,U=0,N=0,O=0,T=0,L=0,G=0;p.sort(dC);for(let et=0,ct=p.length;et<ct;et++){const J=p[et],$=J.color,Y=J.intensity,W=J.distance;let ft=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===jr?ft=J.shadow.map.texture:ft=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)S+=$.r*Y,_+=$.g*Y,v+=$.b*Y;else if(J.isLightProbe){for(let st=0;st<9;st++)s.probe[st].addScaledVector(J.sh.coefficients[st],Y);G++}else if(J.isSunLight){const st=e.get(J);if(st.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const ht=J.shadow,yt=i.get(J);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),s.sunShadow[R]=yt,s.sunShadowMap[R]=ft;const Jt=ht.getViewportCount();for(let Zt=0;Zt<Jt;Zt++)s.sunShadowMatrix[w+Zt]=ht.getMatrix(Zt),s.sunShadowCascade[w+Zt]=ht._cascadeData[Zt];w+=Jt,R++}s.sun[y]=st,y++}else if(J.isDirectionalLight){const st=e.get(J);if(st.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const ht=J.shadow,yt=i.get(J);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,s.directionalShadow[M]=yt,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=J.shadow.matrix,U++}s.directional[M]=st,M++}else if(J.isSpotLight){const st=e.get(J);st.position.setFromMatrixPosition(J.matrixWorld),st.color.copy($).multiplyScalar(Y),st.distance=W,st.coneCos=Math.cos(J.angle),st.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),st.decay=J.decay,s.spot[I]=st;const ht=J.shadow;if(J.map&&(s.spotLightMap[T]=J.map,T++,ht.updateMatrices(J),J.castShadow&&L++),s.spotLightMatrix[I]=ht.matrix,J.castShadow){const yt=i.get(J);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,s.spotShadow[I]=yt,s.spotShadowMap[I]=ft,O++}I++}else if(J.isRectAreaLight){const st=e.get(J);st.color.copy($).multiplyScalar(Y),st.halfWidth.set(J.width*.5,0,0),st.halfHeight.set(0,J.height*.5,0),s.rectArea[H]=st,H++}else if(J.isPointLight){const st=e.get(J);if(st.color.copy(J.color).multiplyScalar(J.intensity),st.distance=J.distance,st.decay=J.decay,J.castShadow){const ht=J.shadow,yt=i.get(J);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,yt.shadowCameraNear=ht.camera.near,yt.shadowCameraFar=ht.camera.far,s.pointShadow[x]=yt,s.pointShadowMap[x]=ft,s.pointShadowMatrix[x]=J.shadow.matrix,N++}s.point[x]=st,x++}else if(J.isHemisphereLight){const st=e.get(J);st.skyColor.copy(J.color).multiplyScalar(Y),st.groundColor.copy(J.groundColor).multiplyScalar(Y),s.hemi[C]=st,C++}}H>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=v;const q=s.hash;(q.sunLength!==y||q.directionalLength!==M||q.pointLength!==x||q.spotLength!==I||q.rectAreaLength!==H||q.hemiLength!==C||q.numSunShadows!==R||q.numDirectionalShadows!==U||q.numPointShadows!==N||q.numSpotShadows!==O||q.numSpotMaps!==T||q.numLightProbes!==G)&&(s.sun.length=y,s.directional.length=M,s.spot.length=I,s.rectArea.length=H,s.point.length=x,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.spotLightMatrix.length=O+T-L,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=G,q.sunLength=y,q.directionalLength=M,q.pointLength=x,q.spotLength=I,q.rectAreaLength=H,q.hemiLength=C,q.numSunShadows=R,q.numDirectionalShadows=U,q.numPointShadows=N,q.numSpotShadows=O,q.numSpotMaps=T,q.numLightProbes=G,s.version=fC++)}function m(p,S){let _=0,v=0,y=0,R=0,w=0,M=0;const x=S.matrixWorldInverse;for(let I=0,H=p.length;I<H;I++){const C=p[I];if(C.isSunLight){const U=s.sun[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),_++}else if(C.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),v++}else if(C.isSpotLight){const U=s.spot[R];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const U=s.rectArea[w];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),y++}else if(C.isHemisphereLight){const U=s.hemi[M];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),M++}}}return{setup:h,setupView:m,state:s}}function vS(o){const e=new hC(o),i=[],s=[],u=[];function f(v){_.camera=v,i.length=0,s.length=0,u.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function m(v){u.push(v)}function p(){e.setup(i)}function S(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:p,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function pC(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new vS(o),e.set(u,[h])):f>=d.length?(h=new vS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const mC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_C=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],vC=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],SS=new fn,Sl=new lt,np=new lt;function SC(o,e,i){let s=new tx;const u=new xe,f=new xe,d=new un,h=new AT,m=new RT,p={},S=i.maxTextureSize,_={[Qr]:jn,[jn]:Qr,[ea]:ea},v=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:mC,fragmentShader:gC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const R=new fa;R.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ua(R,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let x=this.type;this.render=function(N,O,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===fE&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wc);const L=o.getRenderTarget(),G=o.getActiveCubeFace(),q=o.getActiveMipmapLevel(),et=o.state;et.setBlending(La),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const ct=x!==this.type;ct&&O.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach($=>$.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,$=N.length;J<$;J++){const Y=N[J],W=Y.shadow;if(W===void 0){se("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;u.copy(W.mapSize);const ft=W.getFrameExtents();u.multiply(ft),f.copy(W.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/ft.x),u.x=f.x*ft.x,W.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/ft.y),u.y=f.y*ft.y,W.mapSize.y=f.y));const st=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=st,W.map===null||ct===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===yl){if(Y.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new zi(u.x,u.y,{format:jr,type:la,minFilter:zn,magFilter:zn,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Dl(u.x,u.y,ia),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=Ia,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un}else Y.isPointLight?(W.map=new lx(u.x),W.map.depthTexture=new xT(u.x,oa)):(W.map=new zi(u.x,u.y),W.map.depthTexture=new Dl(u.x,u.y,oa)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=Ia,this.type===wc?(W.map.depthTexture.compareFunction=st?nm:em,W.map.depthTexture.minFilter=zn,W.map.depthTexture.magFilter=zn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==u.x||W.map.height!==u.y)&&W.map.setSize(u.x,u.y);const ht=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,T);for(let yt=0;yt<ht;yt++){const Jt=W.getCamera(yt);if(Y.isPointLight){const Zt=W.camera,z=W.matrix,mt=Y.distance||Zt.far;mt!==Zt.far&&(Zt.far=mt,Zt.updateProjectionMatrix()),Sl.setFromMatrixPosition(Y.matrixWorld),Zt.position.copy(Sl),np.copy(Zt.position),np.add(_C[yt]),Zt.up.copy(vC[yt]),Zt.lookAt(np),Zt.updateMatrixWorld(),z.makeTranslation(-Sl.x,-Sl.y,-Sl.z),SS.multiplyMatrices(Zt.projectionMatrix,Zt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(SS,Zt.coordinateSystem,Zt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,yt),o.clear();else{yt===0&&(o.setRenderTarget(W.map),o.clear());const Zt=W.getViewport(yt);d.set(f.x*Zt.x,f.y*Zt.y,f.x*Zt.z,f.y*Zt.w),et.viewport(d)}s=W.getFrustum(yt),C(O,T,Jt,Y,this.type)}W.isPointLightShadow!==!0&&this.type===yl&&I(W,T),W.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,G,q)};function I(N,O){const T=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new zi(u.x,u.y,{format:jr,type:la}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value.set(N.map.width,N.map.height),v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,T,v,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,T,y,w,null)}function H(N,O,T,L){let G=null;const q=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(q!==void 0)G=q;else if(G=T.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const et=G.uuid,ct=O.uuid;let J=p[et];J===void 0&&(J={},p[et]=J);let $=J[ct];$===void 0&&($=G.clone(),J[ct]=$,O.addEventListener("dispose",U)),G=$}if(G.visible=O.visible,G.wireframe=O.wireframe,L===yl?G.side=O.shadowSide!==null?O.shadowSide:O.side:G.side=O.shadowSide!==null?O.shadowSide:_[O.side],G.alphaMap=O.alphaMap,G.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,G.map=O.map,G.clipShadows=O.clipShadows,G.clippingPlanes=O.clippingPlanes,G.clipIntersection=O.clipIntersection,G.displacementMap=O.displacementMap,G.displacementScale=O.displacementScale,G.displacementBias=O.displacementBias,G.wireframeLinewidth=O.wireframeLinewidth,G.linewidth=O.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const et=o.properties.get(G);et.light=T}return G}function C(N,O,T,L,G){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&G===yl)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ct=e.update(N),J=N.material;if(Array.isArray(J)){const $=ct.groups;for(let Y=0,W=$.length;Y<W;Y++){const ft=$[Y],st=J[ft.materialIndex];if(st&&st.visible){const ht=H(N,st,L,G);N.onBeforeShadow(o,N,O,T,ct,ht,ft),o.renderBufferDirect(T,null,ct,ht,N,ft),N.onAfterShadow(o,N,O,T,ct,ht,ft)}}}else if(J.visible){const $=H(N,J,L,G);N.onBeforeShadow(o,N,O,T,ct,$,null),o.renderBufferDirect(T,null,ct,$,N,null),N.onAfterShadow(o,N,O,T,ct,$,null)}}const et=N.children;for(let ct=0,J=et.length;ct<J;ct++)C(et[ct],O,T,L,G)}function U(N){N.target.removeEventListener("dispose",U);for(const T in p){const L=p[T],G=N.target.uuid;G in L&&(L[G].dispose(),delete L[G])}}}function xC(o,e){function i(){let V=!1;const wt=new un;let xt=null;const Ut=new un(0,0,0,0);return{setMask:function(Vt){xt!==Vt&&!V&&(o.colorMask(Vt,Vt,Vt,Vt),xt=Vt)},setLocked:function(Vt){V=Vt},setClear:function(Vt,Tt,jt,Gt,Ce){Ce===!0&&(Vt*=Gt,Tt*=Gt,jt*=Gt),wt.set(Vt,Tt,jt,Gt),Ut.equals(wt)===!1&&(o.clearColor(Vt,Tt,jt,Gt),Ut.copy(wt))},reset:function(){V=!1,xt=null,Ut.set(-1,0,0,0)}}}function s(){let V=!1,wt=!1,xt=null,Ut=null,Vt=null;return{setReversed:function(Tt){if(wt!==Tt){const jt=e.get("EXT_clip_control");Tt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),wt=Tt;const Gt=Vt;Vt=null,this.setClear(Gt)}},getReversed:function(){return wt},setTest:function(Tt){Tt?dt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Tt){xt!==Tt&&!V&&(o.depthMask(Tt),xt=Tt)},setFunc:function(Tt){if(wt&&(Tt=WE[Tt]),Ut!==Tt){switch(Tt){case ap:o.depthFunc(o.NEVER);break;case rp:o.depthFunc(o.ALWAYS);break;case sp:o.depthFunc(o.LESS);break;case Al:o.depthFunc(o.LEQUAL);break;case op:o.depthFunc(o.EQUAL);break;case lp:o.depthFunc(o.GEQUAL);break;case up:o.depthFunc(o.GREATER);break;case cp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ut=Tt}},setLocked:function(Tt){V=Tt},setClear:function(Tt){Vt!==Tt&&(Vt=Tt,wt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){V=!1,xt=null,Ut=null,Vt=null,wt=!1}}}function u(){let V=!1,wt=null,xt=null,Ut=null,Vt=null,Tt=null,jt=null,Gt=null,Ce=null;return{setTest:function(ue){V||(ue?dt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(ue){wt!==ue&&!V&&(o.stencilMask(ue),wt=ue)},setFunc:function(ue,ti,di){(xt!==ue||Ut!==ti||Vt!==di)&&(o.stencilFunc(ue,ti,di),xt=ue,Ut=ti,Vt=di)},setOp:function(ue,ti,di){(Tt!==ue||jt!==ti||Gt!==di)&&(o.stencilOp(ue,ti,di),Tt=ue,jt=ti,Gt=di)},setLocked:function(ue){V=ue},setClear:function(ue){Ce!==ue&&(o.clearStencil(ue),Ce=ue)},reset:function(){V=!1,wt=null,xt=null,Ut=null,Vt=null,Tt=null,jt=null,Gt=null,Ce=null}}}const f=new i,d=new s,h=new u,m=new WeakMap,p=new WeakMap;let S={},_={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,I=null,H=null,C=null,U=null,N=null,O=null,T=new Be(0,0,0),L=0,G=!1,q=null,et=null,ct=null,J=null,$=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ft=0;const st=o.getParameter(o.VERSION);st.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(st)[1]),W=ft>=1):st.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),W=ft>=2);let ht=null,yt={};const Jt=o.getParameter(o.SCISSOR_BOX),Zt=o.getParameter(o.VIEWPORT),z=new un().fromArray(Jt),mt=new un().fromArray(Zt);function Rt(V,wt,xt,Ut){const Vt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(V,Tt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<xt;jt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Ut,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(wt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return Tt}const Z={};Z[o.TEXTURE_2D]=Rt(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=Rt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=Rt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=Rt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),d.setFunc(Al),ee(!1),ie(Ev),dt(o.CULL_FACE),ge(La);function dt(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function bt(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function zt(V,wt){return v[V]!==wt?(o.bindFramebuffer(V,wt),v[V]=wt,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=wt),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function _t(V,wt){let xt=R,Ut=!1;if(V){xt=y.get(wt),xt===void 0&&(xt=[],y.set(wt,xt));const Vt=V.textures;if(xt.length!==Vt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,jt=Vt.length;Tt<jt;Tt++)xt[Tt]=o.COLOR_ATTACHMENT0+Tt;xt.length=Vt.length,Ut=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Ut=!0);Ut&&o.drawBuffers(xt)}function Ct(V){return w!==V?(o.useProgram(V),w=V,!0):!1}const Ge={[so]:o.FUNC_ADD,[hE]:o.FUNC_SUBTRACT,[pE]:o.FUNC_REVERSE_SUBTRACT};Ge[mE]=o.MIN,Ge[gE]=o.MAX;const pe={[_E]:o.ZERO,[vE]:o.ONE,[SE]:o.SRC_COLOR,[RS]:o.SRC_ALPHA,[bE]:o.SRC_ALPHA_SATURATE,[EE]:o.DST_COLOR,[ME]:o.DST_ALPHA,[xE]:o.ONE_MINUS_SRC_COLOR,[CS]:o.ONE_MINUS_SRC_ALPHA,[TE]:o.ONE_MINUS_DST_COLOR,[yE]:o.ONE_MINUS_DST_ALPHA,[AE]:o.CONSTANT_COLOR,[RE]:o.ONE_MINUS_CONSTANT_COLOR,[CE]:o.CONSTANT_ALPHA,[wE]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(V,wt,xt,Ut,Vt,Tt,jt,Gt,Ce,ue){if(V===La){M===!0&&(bt(o.BLEND),M=!1);return}if(M===!1&&(dt(o.BLEND),M=!0),V!==dE){if(V!==x||ue!==G){if((I!==so||U!==so)&&(o.blendEquation(o.FUNC_ADD),I=so,U=so),ue)switch(V){case bl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tv:o.blendFunc(o.ONE,o.ONE);break;case bv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Oe("WebGLState: Invalid blending: ",V);break}else switch(V){case bl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case bv:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Av:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",V);break}H=null,C=null,N=null,O=null,T.set(0,0,0),L=0,x=V,G=ue}return}Vt=Vt||wt,Tt=Tt||xt,jt=jt||Ut,(wt!==I||Vt!==U)&&(o.blendEquationSeparate(Ge[wt],Ge[Vt]),I=wt,U=Vt),(xt!==H||Ut!==C||Tt!==N||jt!==O)&&(o.blendFuncSeparate(pe[xt],pe[Ut],pe[Tt],pe[jt]),H=xt,C=Ut,N=Tt,O=jt),(Gt.equals(T)===!1||Ce!==L)&&(o.blendColor(Gt.r,Gt.g,Gt.b,Ce),T.copy(Gt),L=Ce),x=V,G=!1}function Me(V,wt){V.side===ea?bt(o.CULL_FACE):dt(o.CULL_FACE);let xt=V.side===jn;wt&&(xt=!xt),ee(xt),V.blending===bl&&V.transparent===!1?ge(La):ge(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),f.setMask(V.colorWrite);const Ut=V.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),dn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){q!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),q=V)}function ie(V){V!==uE?(dt(o.CULL_FACE),V!==et&&(V===Ev?o.cullFace(o.BACK):V===cE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),et=V}function Ve(V){V!==ct&&(W&&o.lineWidth(V),ct=V)}function dn(V,wt,xt){V?(dt(o.POLYGON_OFFSET_FILL),(J!==wt||$!==xt)&&(J=wt,$=xt,d.getReversed()&&(wt=-wt),o.polygonOffset(wt,xt))):bt(o.POLYGON_OFFSET_FILL)}function Pe(V){V?dt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function tn(V){V===void 0&&(V=o.TEXTURE0+Y-1),ht!==V&&(o.activeTexture(V),ht=V)}function X(V,wt,xt){xt===void 0&&(ht===null?xt=o.TEXTURE0+Y-1:xt=ht);let Ut=yt[xt];Ut===void 0&&(Ut={type:void 0,texture:void 0},yt[xt]=Ut),(Ut.type!==V||Ut.texture!==wt)&&(ht!==xt&&(o.activeTexture(xt),ht=xt),o.bindTexture(V,wt||Z[V]),Ut.type=V,Ut.texture=wt)}function nn(){const V=yt[ht];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Le(){try{o.compressedTexImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function E(){try{o.texSubImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function j(){try{o.texSubImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function At(){try{o.texStorage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function Nt(){try{o.texStorage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function gt(){try{o.texImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function Mt(){try{o.texImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function Dt(V){return _[V]!==void 0?_[V]:o.getParameter(V)}function $t(V,wt){_[V]!==wt&&(o.pixelStorei(V,wt),_[V]=wt)}function It(V){z.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),z.copy(V))}function Pt(V){mt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),mt.copy(V))}function Xt(V,wt){let xt=p.get(wt);xt===void 0&&(xt=new WeakMap,p.set(wt,xt));let Ut=xt.get(V);Ut===void 0&&(Ut=o.getUniformBlockIndex(wt,V.name),xt.set(V,Ut))}function ne(V,wt){const Ut=p.get(wt).get(V);m.get(wt)!==Ut&&(o.uniformBlockBinding(wt,Ut,V.__bindingPointIndex),m.set(wt,Ut))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},_={},ht=null,yt={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,I=null,H=null,C=null,U=null,N=null,O=null,T=new Be(0,0,0),L=0,G=!1,q=null,et=null,ct=null,J=null,$=null,z.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:dt,disable:bt,bindFramebuffer:zt,drawBuffers:_t,useProgram:Ct,setBlending:ge,setMaterial:Me,setFlipSided:ee,setCullFace:ie,setLineWidth:Ve,setPolygonOffset:dn,setScissorTest:Pe,activeTexture:tn,bindTexture:X,unbindTexture:nn,compressedTexImage2D:Le,compressedTexImage3D:D,texImage2D:gt,texImage3D:Mt,pixelStorei:$t,getParameter:Dt,updateUBOMapping:Xt,uniformBlockBinding:ne,texStorage2D:At,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:rt,compressedTexSubImage3D:pt,scissor:It,viewport:Pt,reset:le}}function MC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xe,S=new WeakMap,_=new Set;let v;const y=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return R?new OffscreenCanvas(D,E):wl("canvas")}function M(D,E,j){let rt=1;const pt=Le(D);if((pt.width>j||pt.height>j)&&(rt=j/Math.max(pt.width,pt.height)),rt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const At=Math.floor(rt*pt.width),Nt=Math.floor(rt*pt.height);v===void 0&&(v=w(At,Nt));const gt=E?w(At,Nt):v;return gt.width=At,gt.height=Nt,gt.getContext("2d").drawImage(D,0,0,At,Nt),se("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+At+"x"+Nt+")."),gt}else return"data"in D&&se("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),D;return D}function x(D){return D.generateMipmaps}function I(D){o.generateMipmap(D)}function H(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(D,E,j,rt,pt,At=!1){if(D!==null){if(o[D]!==void 0)return o[D];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Nt;rt&&(Nt=e.get("EXT_texture_norm16"),Nt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(j===o.FLOAT&&(gt=o.R32F),j===o.HALF_FLOAT&&(gt=o.R16F),j===o.UNSIGNED_BYTE&&(gt=o.R8),j===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.R16_EXT),j===o.SHORT&&Nt&&(gt=Nt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(gt=o.R8UI),j===o.UNSIGNED_SHORT&&(gt=o.R16UI),j===o.UNSIGNED_INT&&(gt=o.R32UI),j===o.BYTE&&(gt=o.R8I),j===o.SHORT&&(gt=o.R16I),j===o.INT&&(gt=o.R32I)),E===o.RG&&(j===o.FLOAT&&(gt=o.RG32F),j===o.HALF_FLOAT&&(gt=o.RG16F),j===o.UNSIGNED_BYTE&&(gt=o.RG8),j===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RG16_EXT),j===o.SHORT&&Nt&&(gt=Nt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(gt=o.RG8UI),j===o.UNSIGNED_SHORT&&(gt=o.RG16UI),j===o.UNSIGNED_INT&&(gt=o.RG32UI),j===o.BYTE&&(gt=o.RG8I),j===o.SHORT&&(gt=o.RG16I),j===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),j===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),j===o.UNSIGNED_INT&&(gt=o.RGB32UI),j===o.BYTE&&(gt=o.RGB8I),j===o.SHORT&&(gt=o.RGB16I),j===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),j===o.UNSIGNED_INT&&(gt=o.RGBA32UI),j===o.BYTE&&(gt=o.RGBA8I),j===o.SHORT&&(gt=o.RGBA16I),j===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(j===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGB16_EXT),j===o.SHORT&&Nt&&(gt=Nt.RGB16_SNORM_EXT),j===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),j===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=At?Bc:De.getTransfer(pt);j===o.FLOAT&&(gt=o.RGBA32F),j===o.HALF_FLOAT&&(gt=o.RGBA16F),j===o.UNSIGNED_BYTE&&(gt=Mt===qe?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGBA16_EXT),j===o.SHORT&&Nt&&(gt=Nt.RGBA16_SNORM_EXT),j===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function U(D,E){let j;return D?E===null||E===oa||E===Cl?j=o.DEPTH24_STENCIL8:E===ia?j=o.DEPTH32F_STENCIL8:E===Rl&&(j=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oa||E===Cl?j=o.DEPTH_COMPONENT24:E===ia?j=o.DEPTH_COMPONENT32F:E===Rl&&(j=o.DEPTH_COMPONENT16),j}function N(D,E){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function O(D){const E=D.target;E.removeEventListener("dispose",O),L(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&_.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),q(E)}function L(D){const E=s.get(D);if(E.__webglInit===void 0)return;const j=D.source,rt=y.get(j);if(rt){const pt=rt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&G(D),Object.keys(rt).length===0&&y.delete(j)}s.remove(D)}function G(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const j=D.source,rt=y.get(j);delete rt[E.__cacheKey],d.memory.textures--}function q(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let pt=0;pt<E.__webglFramebuffer[rt].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[rt][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)o.deleteFramebuffer(E.__webglFramebuffer[rt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=D.textures;for(let rt=0,pt=j.length;rt<pt;rt++){const At=s.get(j[rt]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),d.memory.textures--),s.remove(j[rt])}s.remove(D)}let et=0;function ct(){et=0}function J(){return et}function $(D){et=D}function Y(){const D=et;return D>=u.maxTextures&&se("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+u.maxTextures),et+=1,D}function W(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ft(D,E){const j=s.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const rt=D.image;if(rt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(j,D,E);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+E)}function st(D,E){const j=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){bt(j,D,E);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+E)}function ht(D,E){const j=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){bt(j,D,E);return}i.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+E)}function yt(D,E){const j=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&j.__version!==D.version){zt(j,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+E)}const Jt={[fp]:o.REPEAT,[Ua]:o.CLAMP_TO_EDGE,[dp]:o.MIRRORED_REPEAT},Zt={[Un]:o.NEAREST,[UE]:o.NEAREST_MIPMAP_NEAREST,[ic]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[bh]:o.LINEAR_MIPMAP_NEAREST,[Zr]:o.LINEAR_MIPMAP_LINEAR},z={[IE]:o.NEVER,[GE]:o.ALWAYS,[zE]:o.LESS,[em]:o.LEQUAL,[BE]:o.EQUAL,[nm]:o.GEQUAL,[FE]:o.GREATER,[HE]:o.NOTEQUAL};function mt(D,E){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===bh||E.magFilter===ic||E.magFilter===Zr||E.minFilter===zn||E.minFilter===bh||E.minFilter===ic||E.minFilter===Zr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Jt[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Jt[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Jt[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Zt[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Zt[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==ic&&E.minFilter!==Zr||E.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,u.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(D,E){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",O));const rt=E.source;let pt=y.get(rt);pt===void 0&&(pt={},y.set(rt,pt));const At=W(E);if(At!==D.__cacheKey){pt[At]===void 0&&(pt[At]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,j=!0),pt[At].usedTimes++;const Nt=pt[D.__cacheKey];Nt!==void 0&&(pt[D.__cacheKey].usedTimes--,Nt.usedTimes===0&&G(E)),D.__cacheKey=At,D.__webglTexture=pt[At].texture}return j}function Z(D,E,j){return Math.floor(Math.floor(D/j)/E)}function dt(D,E,j,rt){const At=D.updateRanges;if(At.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,j,rt,E.data);else{At.sort(($t,It)=>$t.start-It.start);let Nt=0;for(let $t=1;$t<At.length;$t++){const It=At[Nt],Pt=At[$t],Xt=It.start+It.count,ne=Z(Pt.start,E.width,4),le=Z(It.start,E.width,4);Pt.start<=Xt+1&&ne===le&&Z(Pt.start+Pt.count-1,E.width,4)===ne?It.count=Math.max(It.count,Pt.start+Pt.count-It.start):(++Nt,At[Nt]=Pt)}At.length=Nt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let $t=0,It=At.length;$t<It;$t++){const Pt=At[$t],Xt=Math.floor(Pt.start/4),ne=Math.ceil(Pt.count/4),le=Xt%E.width,V=Math.floor(Xt/E.width),wt=ne,xt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,le,V,wt,xt,j,rt,E.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function bt(D,E,j){let rt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=o.TEXTURE_3D);const pt=Rt(D,E),At=E.source;i.bindTexture(rt,D.__webglTexture,o.TEXTURE0+j);const Nt=s.get(At);if(At.version!==Nt.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xt=De.getPrimaries(De.workingColorSpace),Ut=E.colorSpace===_r?null:De.getPrimaries(E.colorSpace),Vt=E.colorSpace===_r||xt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=M(E.image,!1,u.maxTextureSize);Mt=nn(E,Mt);const Dt=f.convert(E.format,E.colorSpace),$t=f.convert(E.type);let It=C(E.internalFormat,Dt,$t,E.normalized,E.colorSpace,E.isVideoTexture);mt(rt,E);let Pt;const Xt=E.mipmaps,ne=E.isVideoTexture!==!0,le=Nt.__version===void 0||pt===!0,V=At.dataReady,wt=N(E,Mt);if(E.isDepthTexture)It=U(E.format===Kr,E.type),le&&(ne?i.texStorage2D(o.TEXTURE_2D,1,It,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,It,Mt.width,Mt.height,0,Dt,$t,null));else if(E.isDataTexture)if(Xt.length>0){ne&&le&&i.texStorage2D(o.TEXTURE_2D,wt,It,Xt[0].width,Xt[0].height);for(let xt=0,Ut=Xt.length;xt<Ut;xt++)Pt=Xt[xt],ne?V&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,xt,It,Pt.width,Pt.height,0,Dt,$t,Pt.data);E.generateMipmaps=!1}else ne?(le&&i.texStorage2D(o.TEXTURE_2D,wt,It,Mt.width,Mt.height),V&&dt(E,Mt,Dt,$t)):i.texImage2D(o.TEXTURE_2D,0,It,Mt.width,Mt.height,0,Dt,$t,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,It,Xt[0].width,Xt[0].height,Mt.depth);for(let xt=0,Ut=Xt.length;xt<Ut;xt++)if(Pt=Xt[xt],E.format!==Ii)if(Dt!==null)if(ne){if(V)if(E.layerUpdates.size>0){const Vt=Jv(Pt.width,Pt.height,E.format,E.type);for(const Tt of E.layerUpdates){const jt=Pt.data.subarray(Tt*Vt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*Vt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,Tt,Pt.width,Pt.height,1,Dt,jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,Mt.depth,Dt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,It,Pt.width,Pt.height,Mt.depth,0,Pt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,Mt.depth,Dt,$t,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,It,Pt.width,Pt.height,Mt.depth,0,Dt,$t,Pt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ne&&le&&i.texStorage2D(o.TEXTURE_2D,wt,It,Xt[0].width,Xt[0].height);for(let xt=0,Ut=Xt.length;xt<Ut;xt++)Pt=Xt[xt],E.format!==Ii?Dt!==null?ne?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Dt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,It,Pt.width,Pt.height,0,Pt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,xt,It,Pt.width,Pt.height,0,Dt,$t,Pt.data)}else if(E.isDataArrayTexture)if(ne){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,It,Mt.width,Mt.height,Mt.depth),V)if(E.layerUpdates.size>0){const xt=Jv(Mt.width,Mt.height,E.format,E.type);for(const Ut of E.layerUpdates){const Vt=Mt.data.subarray(Ut*xt/Mt.data.BYTES_PER_ELEMENT,(Ut+1)*xt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,Mt.width,Mt.height,1,Dt,$t,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,$t,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,Mt.width,Mt.height,Mt.depth,0,Dt,$t,Mt.data);else if(E.isData3DTexture)ne?(le&&i.texStorage3D(o.TEXTURE_3D,wt,It,Mt.width,Mt.height,Mt.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,$t,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,It,Mt.width,Mt.height,Mt.depth,0,Dt,$t,Mt.data);else if(E.isFramebufferTexture){if(le)if(ne)i.texStorage2D(o.TEXTURE_2D,wt,It,Mt.width,Mt.height);else{let xt=Mt.width,Ut=Mt.height;for(let Vt=0;Vt<wt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,It,xt,Ut,0,Dt,$t,null),xt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const xt=o.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),Mt.parentNode!==xt){xt.appendChild(Mt),_.add(E),xt.onpaint=Ut=>{const Vt=Ut.changedElements;for(const Tt of _)Vt.includes(Tt.image)&&(Tt.needsUpdate=!0)},xt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Vt=o.RGBA,Tt=o.RGBA,jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Vt,Tt,jt,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(ne&&le){const xt=Le(Xt[0]);i.texStorage2D(o.TEXTURE_2D,wt,It,xt.width,xt.height)}for(let xt=0,Ut=Xt.length;xt<Ut;xt++)Pt=Xt[xt],ne?V&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Dt,$t,Pt):i.texImage2D(o.TEXTURE_2D,xt,It,Dt,$t,Pt);E.generateMipmaps=!1}else if(ne){if(le){const xt=Le(Mt);i.texStorage2D(o.TEXTURE_2D,wt,It,xt.width,xt.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,$t,Mt)}else i.texImage2D(o.TEXTURE_2D,0,It,Dt,$t,Mt);x(E)&&I(rt),Nt.__version=At.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function zt(D,E,j){if(E.image.length!==6)return;const rt=Rt(D,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+j);const At=s.get(pt);if(pt.version!==At.__version||rt===!0){i.activeTexture(o.TEXTURE0+j);const Nt=De.getPrimaries(De.workingColorSpace),gt=E.colorSpace===_r?null:De.getPrimaries(E.colorSpace),Mt=E.colorSpace===_r||Nt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,$t=E.image[0]&&E.image[0].isDataTexture,It=[];for(let Tt=0;Tt<6;Tt++)!Dt&&!$t?It[Tt]=M(E.image[Tt],!0,u.maxCubemapSize):It[Tt]=$t?E.image[Tt].image:E.image[Tt],It[Tt]=nn(E,It[Tt]);const Pt=It[0],Xt=f.convert(E.format,E.colorSpace),ne=f.convert(E.type),le=C(E.internalFormat,Xt,ne,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,wt=At.__version===void 0||rt===!0,xt=pt.dataReady;let Ut=N(E,Pt);mt(o.TEXTURE_CUBE_MAP,E);let Vt;if(Dt){V&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,Pt.width,Pt.height);for(let Tt=0;Tt<6;Tt++){Vt=It[Tt].mipmaps;for(let jt=0;jt<Vt.length;jt++){const Gt=Vt[jt];E.format!==Ii?Xt!==null?V?xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,0,0,Gt.width,Gt.height,Xt,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,le,Gt.width,Gt.height,0,Gt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,0,0,Gt.width,Gt.height,Xt,ne,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,le,Gt.width,Gt.height,0,Xt,ne,Gt.data)}}}else{if(Vt=E.mipmaps,V&&wt){Vt.length>0&&Ut++;const Tt=Le(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if($t){V?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,It[Tt].width,It[Tt].height,Xt,ne,It[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,le,It[Tt].width,It[Tt].height,0,Xt,ne,It[Tt].data);for(let jt=0;jt<Vt.length;jt++){const Ce=Vt[jt].image[Tt].image;V?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,0,0,Ce.width,Ce.height,Xt,ne,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,le,Ce.width,Ce.height,0,Xt,ne,Ce.data)}}else{V?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Xt,ne,It[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,le,Xt,ne,It[Tt]);for(let jt=0;jt<Vt.length;jt++){const Gt=Vt[jt];V?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,0,0,Xt,ne,Gt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,le,Xt,ne,Gt.image[Tt])}}}x(E)&&I(o.TEXTURE_CUBE_MAP),At.__version=pt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function _t(D,E,j,rt,pt,At){const Nt=f.convert(j.format,j.colorSpace),gt=f.convert(j.type),Mt=C(j.internalFormat,Nt,gt,j.normalized,j.colorSpace),Dt=s.get(E),$t=s.get(j);if($t.__renderTarget=E,!Dt.__hasExternalTextures){const It=Math.max(1,E.width>>At),Pt=Math.max(1,E.height>>At);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,At,Mt,It,Pt,E.depth,0,Nt,gt,null):i.texImage2D(pt,At,Mt,It,Pt,0,Nt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,pt,$t.__webglTexture,0,Pe(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,pt,$t.__webglTexture,At),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ct(D,E,j){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const rt=E.depthTexture,pt=rt&&rt.isDepthTexture?rt.type:null,At=U(E.stencilBuffer,pt),Nt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(E),At,E.width,E.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(E),At,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,At,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,D)}else{const rt=E.textures;for(let pt=0;pt<rt.length;pt++){const At=rt[pt],Nt=f.convert(At.format,At.colorSpace),gt=f.convert(At.type),Mt=C(At.internalFormat,Nt,gt,At.normalized,At.colorSpace);tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(E),Mt,E.width,E.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(E),Mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(D,E,j){const rt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=s.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),rt){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=f.convert(E.depthTexture.format),$t=f.convert(E.depthTexture.type);let It;E.depthTexture.format===Ia?It=o.DEPTH_COMPONENT24:E.depthTexture.format===Kr&&(It=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,It,E.width,E.height,0,Dt,$t,null)}}else ft(E.depthTexture,0);const At=pt.__webglTexture,Nt=Pe(E),gt=rt?o.TEXTURE_CUBE_MAP_POSITIVE_X+j:o.TEXTURE_2D,Mt=E.depthTexture.format===Kr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ia)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,At,0);else if(E.depthTexture.format===Kr)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(D){const E=s.get(D),j=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const rt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),rt){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,rt.removeEventListener("dispose",pt)};rt.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=rt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let rt=0;rt<6;rt++)Ge(E.__webglFramebuffer[rt],D,rt);else{const rt=D.texture.mipmaps;rt&&rt.length>0?Ge(E.__webglFramebuffer[0],D,0):Ge(E.__webglFramebuffer,D,0)}else if(j){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]===void 0)E.__webglDepthbuffer[rt]=o.createRenderbuffer(),Ct(E.__webglDepthbuffer[rt],D,!1);else{const pt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer[rt];o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,At)}}else{const rt=D.texture.mipmaps;if(rt&&rt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ct(E.__webglDepthbuffer,D,!1);else{const pt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,At)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(D,E,j){const rt=s.get(D);E!==void 0&&_t(rt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&pe(D)}function Me(D){const E=D.texture,j=s.get(D),rt=s.get(E);D.addEventListener("dispose",T);const pt=D.textures,At=D.isWebGLCubeRenderTarget===!0,Nt=pt.length>1;if(Nt||(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=E.version,d.memory.textures++),At){j.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)j.__webglFramebuffer[gt][Mt]=o.createFramebuffer()}else j.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)j.__webglFramebuffer[gt]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let gt=0,Mt=pt.length;gt<Mt;gt++){const Dt=s.get(pt[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&tn(D)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let gt=0;gt<pt.length;gt++){const Mt=pt[gt];j.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[gt]);const Dt=f.convert(Mt.format,Mt.colorSpace),$t=f.convert(Mt.type),It=C(Mt.internalFormat,Dt,$t,Mt.normalized,Mt.colorSpace,D.isXRRenderTarget===!0),Pt=Pe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,It,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,j.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Ct(j.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(j.__webglFramebuffer[gt][Mt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else _t(j.__webglFramebuffer[gt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(E)&&I(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let gt=0,Mt=pt.length;gt<Mt;gt++){const Dt=pt[gt],$t=s.get(Dt);let It=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(It=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,$t.__webglTexture),mt(It,Dt),_t(j.__webglFramebuffer,D,Dt,o.COLOR_ATTACHMENT0+gt,It,0),x(Dt)&&I(It)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(gt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,rt.__webglTexture),mt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(j.__webglFramebuffer[Mt],D,E,o.COLOR_ATTACHMENT0,gt,Mt);else _t(j.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,gt,0);x(E)&&I(gt),i.unbindTexture()}D.depthBuffer&&pe(D)}function ee(D){const E=D.textures;for(let j=0,rt=E.length;j<rt;j++){const pt=E[j];if(x(pt)){const At=H(D),Nt=s.get(pt).__webglTexture;i.bindTexture(At,Nt),I(At),i.unbindTexture()}}}const ie=[],Ve=[];function dn(D){if(D.samples>0){if(tn(D)===!1){const E=D.textures,j=D.width,rt=D.height;let pt=o.COLOR_BUFFER_BIT;const At=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=s.get(D),gt=E.length>1;if(gt)for(let Dt=0;Dt<E.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Mt=D.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,j,rt,0,0,j,rt,pt,o.NEAREST),m===!0&&(ie.length=0,Ve.length=0,ie.push(o.COLOR_ATTACHMENT0+Dt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(ie.push(At),Ve.push(At),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let Dt=0;Dt<E.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Pe(D){return Math.min(u.maxSamples,D.samples)}function tn(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(D){const E=d.render.frame;S.get(D)!==E&&(S.set(D,E),D.update())}function nn(D,E){const j=D.colorSpace,rt=D.format,pt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==zc&&j!==_r&&(De.getTransfer(j)===qe?(rt!==Ii||pt!==bi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",j)),E}function Le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=ct,this.getTextureUnits=J,this.setTextureUnits=$,this.setTexture2D=ft,this.setTexture2DArray=st,this.setTexture3D=ht,this.setTextureCube=yt,this.rebindTextures=ge,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function yC(o,e){function i(s,u=_r){let f;const d=De.getTransfer(u);if(s===bi)return o.UNSIGNED_BYTE;if(s===Qp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Jp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===HS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===GS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===BS)return o.BYTE;if(s===FS)return o.SHORT;if(s===Rl)return o.UNSIGNED_SHORT;if(s===Kp)return o.INT;if(s===oa)return o.UNSIGNED_INT;if(s===ia)return o.FLOAT;if(s===la)return o.HALF_FLOAT;if(s===VS)return o.ALPHA;if(s===XS)return o.RGB;if(s===Ii)return o.RGBA;if(s===Ia)return o.DEPTH_COMPONENT;if(s===Kr)return o.DEPTH_STENCIL;if(s===kS)return o.RED;if(s===jp)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===$p)return o.RG_INTEGER;if(s===tm)return o.RGBA_INTEGER;if(s===Dc||s===Nc||s===Uc||s===Lc)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Dc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Dc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hp||s===pp||s===mp||s===gp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===hp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_p||s===vp||s===Sp||s===xp||s===Mp||s===Pc||s===yp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===_p||s===vp)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===xp)return f.COMPRESSED_R11_EAC;if(s===Mp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Pc)return f.COMPRESSED_RG11_EAC;if(s===yp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Dp||s===Np||s===Up||s===Lp||s===Op||s===Pp||s===Ip)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Ep)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ap)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Np)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Up)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Op)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ip)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zp||s===Bp||s===Fp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===zp)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hp||s===Gp||s===Ic||s===Vp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Hp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Gp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ic)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const EC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new nx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ca({vertexShader:EC,fragmentShader:TC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ua(new Ol(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AC extends ts{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",m=1,p=null,S=null,_=null,v=null,y=null,R=null;const w=typeof XRWebGLBinding<"u",M=new bC,x={},I=i.getContextAttributes();let H=null,C=null;const U=[],N=[],O=new xe;let T=null,L=null;const G=new Ti;G.viewport=new un;const q=new Ti;q.viewport=new un;const et=[G,q],ct=new LT;let J=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let dt=U[Z];return dt===void 0&&(dt=new Oh,U[Z]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Z){let dt=U[Z];return dt===void 0&&(dt=new Oh,U[Z]=dt),dt.getGripSpace()},this.getHand=function(Z){let dt=U[Z];return dt===void 0&&(dt=new Oh,U[Z]=dt),dt.getHandSpace()};function Y(Z){const dt=N.indexOf(Z.inputSource);if(dt===-1)return;const bt=U[dt];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,p||d),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){u.removeEventListener("select",Y),u.removeEventListener("selectstart",Y),u.removeEventListener("selectend",Y),u.removeEventListener("squeeze",Y),u.removeEventListener("squeezestart",Y),u.removeEventListener("squeezeend",Y),u.removeEventListener("end",W),u.removeEventListener("inputsourceschange",ft);for(let Z=0;Z<U.length;Z++){const dt=N[Z];dt!==null&&(N[Z]=null,U[Z].disconnect(dt))}J=null,$=null,M.reset();for(const Z in x)delete x[Z];if(e.setRenderTarget(H),y=null,v=null,_=null,u=null,C=null,Rt.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),L!==null){const Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(u,i)),_},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(Z){if(u=Z,u!==null){if(H=e.getRenderTarget(),u.addEventListener("select",Y),u.addEventListener("selectstart",Y),u.addEventListener("selectend",Y),u.addEventListener("squeeze",Y),u.addEventListener("squeezestart",Y),u.addEventListener("squeezeend",Y),u.addEventListener("end",W),u.addEventListener("inputsourceschange",ft),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,zt=null,_t=null;I.depth&&(_t=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=I.stencil?Kr:Ia,zt=I.stencil?Cl:oa);const Ct={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};_=this.getBinding(),v=_.createProjectionLayer(Ct),u.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new zi(v.textureWidth,v.textureHeight,{format:Ii,type:bi,depthTexture:new Dl(v.textureWidth,v.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const bt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(u,i,bt),u.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new zi(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await u.requestReferenceSpace(h),Rt.setContext(u),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ft(Z){for(let dt=0;dt<Z.removed.length;dt++){const bt=Z.removed[dt],zt=N.indexOf(bt);zt>=0&&(N[zt]=null,U[zt].disconnect(bt))}for(let dt=0;dt<Z.added.length;dt++){const bt=Z.added[dt];let zt=N.indexOf(bt);if(zt===-1){for(let Ct=0;Ct<U.length;Ct++)if(Ct>=N.length){N.push(bt),zt=Ct;break}else if(N[Ct]===null){N[Ct]=bt,zt=Ct;break}if(zt===-1)break}const _t=U[zt];_t&&_t.connect(bt)}}const st=new lt,ht=new lt;function yt(Z,dt,bt){st.setFromMatrixPosition(dt.matrixWorld),ht.setFromMatrixPosition(bt.matrixWorld);const zt=st.distanceTo(ht),_t=dt.projectionMatrix.elements,Ct=bt.projectionMatrix.elements,Ge=_t[14]/(_t[10]-1),pe=_t[14]/(_t[10]+1),ge=(_t[9]+1)/_t[5],Me=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(Ct[8]+1)/Ct[0],Ve=Ge*ee,dn=Ge*ie,Pe=zt/(-ee+ie),tn=Pe*-ee;if(dt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(tn),Z.translateZ(Pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_t[10]===-1)Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const X=Ge+Pe,nn=pe+Pe,Le=Ve-tn,D=dn+(zt-tn),E=ge*pe/nn*X,j=Me*pe/nn*X;Z.projectionMatrix.makePerspective(Le,D,E,j,X,nn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Jt(Z,dt){dt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(dt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(u===null)return;let dt=Z.near,bt=Z.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),ct.near=q.near=G.near=dt,ct.far=q.far=G.far=bt,(J!==ct.near||$!==ct.far)&&(u.updateRenderState({depthNear:ct.near,depthFar:ct.far}),J=ct.near,$=ct.far),ct.layers.mask=Z.layers.mask|6,G.layers.mask=ct.layers.mask&-5,q.layers.mask=ct.layers.mask&-3;const zt=Z.parent,_t=ct.cameras;Jt(ct,zt);for(let Ct=0;Ct<_t.length;Ct++)Jt(_t[Ct],zt);_t.length===2?yt(ct,G,q):ct.projectionMatrix.copy(G.projectionMatrix),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),Zt(Z,ct,zt)};function Zt(Z,dt,bt){bt===null?Z.matrix.copy(dt.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(dt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Xp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return ct},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(Z){m=Z,v!==null&&(v.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ct)},this.getCameraTexture=function(Z){return x[Z]};let z=null;function mt(Z,dt){if(S=dt.getViewerPose(p||d),R=dt,S!==null){const bt=S.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let zt=!1;bt.length!==ct.cameras.length&&(ct.cameras.length=0,zt=!0);for(let pe=0;pe<bt.length;pe++){const ge=bt[pe];let Me=null;if(y!==null)Me=y.getViewport(ge);else{const ie=_.getViewSubImage(v,ge);Me=ie.viewport,pe===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let ee=et[pe];ee===void 0&&(ee=new Ti,ee.layers.enable(pe),ee.viewport=new un,et[pe]=ee),ee.matrix.fromArray(ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Me.x,Me.y,Me.width,Me.height),pe===0&&(ct.matrix.copy(ee.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale)),zt===!0&&ct.cameras.push(ee)}const _t=u.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const pe=_.getDepthInformation(bt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,u.renderState)}if(_t&&_t.includes("camera-access")&&w){e.state.unbindTexture(),_=s.getBinding();for(let pe=0;pe<bt.length;pe++){const ge=bt[pe].camera;if(ge){let Me=x[ge];Me||(Me=new nx,x[ge]=Me);const ee=_.getCameraImage(ge);Me.sourceTexture=ee}}}}for(let bt=0;bt<U.length;bt++){const zt=N[bt],_t=U[bt];zt!==null&&_t!==void 0&&_t.update(zt,dt,p||d)}z&&z(Z,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),R=null}const Rt=new sx;Rt.setAnimationLoop(mt),this.setAnimationLoop=function(Z){z=Z},this.dispose=function(){}}}const RC=new fn,hx=new fe;hx.set(-1,0,0,0,1,0,0,0,1);function CC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,ix(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,I,H,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),_(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),w(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,I,H):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const I=e.get(x),H=I.envMap,C=I.envMapRotation;H&&(M.envMap.value=H,M.envMapRotation.value.setFromMatrix4(RC.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(hx),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,I,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*I,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,I){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const I=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function wC(o,e,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const N=U.program;s.uniformBlockBinding(C,N)}function p(C,U){let N=u[C.id];N===void 0&&(M(C),N=S(C),u[C.id]=N,C.addEventListener("dispose",I));const O=U.program;s.updateUBOMapping(C,O);const T=e.render.frame;f[C.id]!==T&&(v(C),f[C.id]=T)}function S(C){const U=_();C.__bindingPointIndex=U;const N=o.createBuffer(),O=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,O,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,N),N}function _(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const U=u[C.id],N=C.uniforms,O=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let T=0,L=N.length;T<L;T++){const G=N[T];if(Array.isArray(G))for(let q=0,et=G.length;q<et;q++)y(G[q],T,q,O);else y(G,T,0,O)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,U,N,O){if(w(C,U,N,O)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let G=0;for(let q=0;q<L.length;q++){const et=L[q],ct=x(et);R(et,C.__data,G),typeof et!="number"&&typeof et!="boolean"&&!et.isMatrix3&&!ArrayBuffer.isView(et)&&(G+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function R(C,U,N){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,N)}function w(C,U,N,O){const T=C.value,L=U+"_"+N;if(O[L]===void 0)return typeof T=="number"||typeof T=="boolean"?O[L]=T:ArrayBuffer.isView(T)?O[L]=T.slice():O[L]=T.clone(),!0;{const G=O[L];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return O[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(G.equals(T)===!1)return G.copy(T),!0}}return!1}function M(C){const U=C.uniforms;let N=0;const O=16;for(let L=0,G=U.length;L<G;L++){const q=Array.isArray(U[L])?U[L]:[U[L]];for(let et=0,ct=q.length;et<ct;et++){const J=q[et],$=Array.isArray(J.value)?J.value:[J.value];for(let Y=0,W=$.length;Y<W;Y++){const ft=$[Y],st=x(ft),ht=N%O,yt=ht%st.boundary,Jt=ht+yt;N+=yt,Jt!==0&&O-Jt<st.storage&&(N+=O-Jt),J.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=st.storage}}}const T=N%O;return T>0&&(N+=O-T),C.__size=N,C.__cache={},this}function x(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):se("WebGLRenderer: Unsupported uniform value type.",C),U}function I(C){const U=C.target;U.removeEventListener("dispose",I);const N=d.indexOf(U.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(u[U.id]),delete u[U.id],delete f[U.id]}function H(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:m,update:p,dispose:H}}const DC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function NC(){return $i===null&&($i=new _T(DC,16,16,jr,la),$i.name="DFG_LUT",$i.minFilter=zn,$i.magFilter=zn,$i.wrapS=Ua,$i.wrapT=Ua,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class UC{constructor(e={}){const{canvas:i=XE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=bi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const w=y,M=new Set([tm,$p,jp]),x=new Set([bi,oa,Rl,Cl,Qp,Jp]),I=new Uint32Array(4),H=new Int32Array(4),C=new lt;let U=null,N=null;const O=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let q=!1,et=null,ct=null,J=null,$=null;this._outputColorSpace=Qn;let Y=0,W=0,ft=null,st=-1,ht=null;const yt=new un,Jt=new un;let Zt=null;const z=new Be(0);let mt=0,Rt=i.width,Z=i.height,dt=1,bt=null,zt=null;const _t=new un(0,0,Rt,Z),Ct=new un(0,0,Rt,Z);let Ge=!1;const pe=new tx;let ge=!1,Me=!1;const ee=new fn,ie=new lt,Ve=new un,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function tn(){return ft===null?dt:1}let X=s;function nn(b,B){return i.getContext(b,B)}let Le,D,E,j,rt,pt,At,Nt,gt,Mt,Dt,$t,It,Pt,Xt,ne,le,V,wt,xt,Ut,Vt,Tt;try{const b={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zp}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ti,!1),X===null){const B="webgl2";if(X=nn(B,b),X===null)throw nn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(b){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),Oe("WebGLRenderer: "+b.message),b}function jt(){Le=new NA(X),Le.init(),Ut=new yC(X,Le),D=new MA(X,Le,e,Ut),E=new xC(X,Le),D.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ct=X.createFramebuffer(),J=X.createFramebuffer(),$=X.createFramebuffer(),j=new OA(X),rt=new sC,pt=new MC(X,Le,E,rt,D,Ut,j),At=new DA(G),Nt=new IT(X),Vt=new SA(X,Nt),gt=new UA(X,Nt,j,Vt),Mt=new IA(X,gt,Nt,Vt,j),V=new PA(X,D,pt),Xt=new yA(rt),Dt=new rC(G,At,Le,D,Vt,Xt),$t=new CC(G,rt),It=new lC,Pt=new pC(Le),le=new vA(G,At,E,Mt,R,m),ne=new SC(G,Mt,D),Tt=new wC(X,j,D,E),wt=new xA(X,Le,j),xt=new LA(X,Le,j),j.programs=Dt.programs,G.capabilities=D,G.extensions=Le,G.properties=rt,G.renderLists=It,G.shadowMap=ne,G.state=E,G.info=j}w!==bi&&(L=new BA(w,i.width,i.height,h,u,f));const Gt=new AC(G,X);this.xr=Gt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(b){b!==void 0&&(dt=b,this.setSize(Rt,Z,!1))},this.getSize=function(b){return b.set(Rt,Z)},this.setSize=function(b,B,ut=!0){if(Gt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=b,Z=B,i.width=Math.floor(b*dt),i.height=Math.floor(B*dt),ut===!0&&(i.style.width=b+"px",i.style.height=B+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Rt*dt,Z*dt).floor()},this.setDrawingBufferSize=function(b,B,ut){Rt=b,Z=B,dt=ut,i.width=Math.floor(b*ut),i.height=Math.floor(B*ut),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(w===bi){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(yt)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,B,ut,nt){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,B,ut,nt),E.viewport(yt.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,B,ut,nt){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,B,ut,nt),E.scissor(Jt.copy(Ct).multiplyScalar(dt).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(b){E.setScissorTest(Ge=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,ut=!0){let nt=0;if(b){let it=!1;if(ft!==null){const Bt=ft.texture.format;it=M.has(Bt)}if(it){const Bt=ft.texture.type,kt=x.has(Bt),Lt=le.getClearColor(),Yt=le.getClearAlpha(),Kt=Lt.r,re=Lt.g,ce=Lt.b;kt?(I[0]=Kt,I[1]=re,I[2]=ce,I[3]=Yt,X.clearBufferuiv(X.COLOR,0,I)):(H[0]=Kt,H[1]=re,H[2]=ce,H[3]=Yt,X.clearBufferiv(X.COLOR,0,H))}else nt|=X.COLOR_BUFFER_BIT}B&&(nt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ut&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),et=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),le.dispose(),It.dispose(),Pt.dispose(),rt.dispose(),At.dispose(),Mt.dispose(),Vt.dispose(),Tt.dispose(),Dt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",xr),Gt.removeEventListener("sessionend",Ba),Bi.stop()};function Ce(b){b.preventDefault(),Hc("WebGLRenderer: Context Lost."),q=!0}function ue(){Hc("WebGLRenderer: Context Restored."),q=!1;const b=j.autoReset,B=ne.enabled,ut=ne.autoUpdate,nt=ne.needsUpdate,it=ne.type;jt(),j.autoReset=b,ne.enabled=B,ne.autoUpdate=ut,ne.needsUpdate=nt,ne.type=it}function ti(b){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function di(b){const B=b.target;B.removeEventListener("dispose",di),qc(B)}function qc(b){es(b),rt.remove(b)}function es(b){const B=rt.get(b).programs;B!==void 0&&(B.forEach(function(ut){Dt.releaseProgram(ut)}),b.isShaderMaterial&&Dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,ut,nt,it,Bt){B===null&&(B=dn);const kt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Lt=Mo(b,B,ut,nt,it);E.setMaterial(nt,kt);let Yt=ut.index,Kt=1;if(nt.wireframe===!0){if(Yt=gt.getWireframeAttribute(ut),Yt===void 0)return;Kt=2}const re=ut.drawRange,ce=ut.attributes.position;let Wt=re.start*Kt,ye=(re.start+re.count)*Kt;Bt!==null&&(Wt=Math.max(Wt,Bt.start*Kt),ye=Math.min(ye,(Bt.start+Bt.count)*Kt)),Yt!==null?(Wt=Math.max(Wt,0),ye=Math.min(ye,Yt.count)):ce!=null&&(Wt=Math.max(Wt,0),ye=Math.min(ye,ce.count));const _e=ye-Wt;if(_e<0||_e===1/0)return;Vt.setup(it,nt,Lt,ut,Yt);let Ye,Fe=wt;if(Yt!==null&&(Ye=Nt.get(Yt),Fe=xt,Fe.setIndex(Ye)),it.isMesh)nt.wireframe===!0?(E.setLineWidth(nt.wireframeLinewidth*tn()),Fe.setMode(X.LINES)):Fe.setMode(X.TRIANGLES);else if(it.isLine){let vn=nt.linewidth;vn===void 0&&(vn=1),E.setLineWidth(vn*tn()),it.isLineSegments?Fe.setMode(X.LINES):it.isLineLoop?Fe.setMode(X.LINE_LOOP):Fe.setMode(X.LINE_STRIP)}else it.isPoints?Fe.setMode(X.POINTS):it.isSprite&&Fe.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))Fe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const vn=it._multiDrawStarts,Ft=it._multiDrawCounts,rn=it._multiDrawCount,we=Yt?Nt.get(Yt).bytesPerElement:1,Bn=rt.get(nt).currentProgram.getUniforms();for(let ei=0;ei<rn;ei++)Bn.setValue(X,"_gl_DrawID",ei),Fe.render(vn[ei]/we,Ft[ei])}else if(it.isInstancedMesh)Fe.renderInstances(Wt,_e,it.count);else if(ut.isInstancedBufferGeometry){const vn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ft=Math.min(ut.instanceCount,vn);Fe.renderInstances(Wt,_e,Ft)}else Fe.render(Wt,_e)};function Sr(b,B,ut,nt){et!==null&&b.isNodeMaterial&&et.setObject(nt,b),ge===!0&&Xt.setState(b,ut,!1),b.transparent===!0&&b.side===ea&&b.forceSinglePass===!1?(b.side=jn,b.needsUpdate=!0,Mr(b,B,nt),b.side=Qr,b.needsUpdate=!0,Mr(b,B,nt),b.side=ea):Mr(b,B,nt)}this.compile=function(b,B,ut=null){ut===null&&(ut=b),et!==null&&et.renderStart(b,B,ut),N=Pt.get(ut),N.init(B),T.push(N),ut.traverseVisible(function(it){it.isLight&&it.layers.test(B.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),b!==ut&&b.traverseVisible(function(it){it.isLight&&it.layers.test(B.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),N.setupLights(),et!==null&&et.updateLights(N.state.lightsArray),Me=this.localClippingEnabled,ge=Xt.init(this.clippingPlanes,Me),ge===!0&&Xt.setGlobalState(this.clippingPlanes,B),et!==null&&ne.render(N.state.shadowsArray,ut,B);const nt=new Set;return b.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Bt=it.material;if(Bt)if(Array.isArray(Bt))for(let kt=0;kt<Bt.length;kt++){const Lt=Bt[kt];Sr(Lt,ut,B,it),nt.add(Lt)}else Sr(Bt,ut,B,it),nt.add(Bt)}),N=T.pop(),et!==null&&et.renderEnd(),nt},this.compileAsync=function(b,B,ut=null){const nt=this.compile(b,B,ut);return new Promise(it=>{function Bt(){if(nt.forEach(function(kt){const Yt=rt.get(kt).currentProgram;(Yt===void 0||Yt.isReady())&&nt.delete(kt)}),nt.size===0){it(b);return}setTimeout(Bt,10)}Le.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let za=null;function da(b){za&&za(b)}function xr(){Bi.stop()}function Ba(){Bi.start()}const Bi=new sx;Bi.setAnimationLoop(da),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(b){za=b,Gt.setAnimationLoop(b),b===null?Bi.stop():Bi.start()},Gt.addEventListener("sessionstart",xr),Gt.addEventListener("sessionend",Ba),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;et!==null&&et.renderStart(b,B);const ut=Gt.enabled===!0&&Gt.isPresenting===!0,nt=L!==null&&(ft===null||ut)&&L.begin(G,ft);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(B),B=Gt.getCamera()),b.isScene===!0&&b.onBeforeRender(G,b,B,ft),N=Pt.get(b,T.length),N.init(B),N.state.textureUnits=pt.getTextureUnits(),T.push(N),ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),pe.setFromProjectionMatrix(ee,aa,B.reversedDepth),Me=this.localClippingEnabled,ge=Xt.init(this.clippingPlanes,Me),U=It.get(b,O.length),U.init(),O.push(U),Gt.enabled===!0&&Gt.isPresenting===!0){const kt=G.xr.getDepthSensingMesh();kt!==null&&go(kt,B,-1/0,G.sortObjects)}go(b,B,0,G.sortObjects),U.finish(),et!==null&&et.updateLights(N.state.lightsArray),G.sortObjects===!0&&U.sort(bt,zt),Pe=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Pe&&le.addToRenderList(U,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Xt.beginShadows();const it=N.state.shadowsArray;if(ne.render(it,b,B),ge===!0&&Xt.endShadows(),(nt&&L.hasRenderPass())===!1){const kt=U.opaque,Lt=U.transmissive;if(N.setupLights(),B.isArrayCamera){const Yt=B.cameras;if(Lt.length>0)for(let Kt=0,re=Yt.length;Kt<re;Kt++){const ce=Yt[Kt];ns(kt,Lt,b,ce)}Pe&&le.render(b);for(let Kt=0,re=Yt.length;Kt<re;Kt++){const ce=Yt[Kt];_o(U,b,ce,ce.viewport)}}else Lt.length>0&&ns(kt,Lt,b,B),Pe&&le.render(b),_o(U,b,B)}ft!==null&&W===0&&(pt.updateMultisampleRenderTarget(ft),pt.updateRenderTargetMipmap(ft)),nt&&L.end(G),b.isScene===!0&&b.onAfterRender(G,b,B),Vt.resetDefaultState(),st=-1,ht=null,T.pop(),T.length>0?(N=T[T.length-1],pt.setTextureUnits(N.state.textureUnits),ge===!0&&Xt.setGlobalState(G.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?U=O[O.length-1]:U=null,et!==null&&et.renderEnd()};function go(b,B,ut,nt){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)ut=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)N.pushLightProbeGrid(b);else if(b.isLight)N.pushLight(b),b.castShadow&&N.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(pe)){nt&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const kt=Mt.update(b),Lt=b.material;Lt.visible&&U.push(b,kt,Lt,ut,Ve.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(pe))){const kt=Mt.update(b),Lt=b.material;if(nt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Ve.copy(kt.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Lt)){const Yt=kt.groups;for(let Kt=0,re=Yt.length;Kt<re;Kt++){const ce=Yt[Kt],Wt=Lt[ce.materialIndex];Wt&&Wt.visible&&U.push(b,kt,Wt,ut,Ve.z,ce,B)}}else Lt.visible&&U.push(b,kt,Lt,ut,Ve.z,null,B)}}const Bt=b.children;for(let kt=0,Lt=Bt.length;kt<Lt;kt++)go(Bt[kt],B,ut,nt)}function _o(b,B,ut,nt){const{opaque:it,transmissive:Bt,transparent:kt}=b;N.setupLightsView(ut),ge===!0&&Xt.setGlobalState(G.clippingPlanes,ut),nt&&E.viewport(yt.copy(nt)),it.length>0&&Fi(it,B,ut),Bt.length>0&&Fi(Bt,B,ut),kt.length>0&&Fi(kt,B,ut),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ns(b,B,ut,nt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){const Wt=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new zi(1,1,{generateMipmaps:!0,type:Wt?la:bi,minFilter:Zr,samples:Math.max(4,D.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Bt=N.state.transmissionRenderTarget[nt.id],kt=nt.viewport||yt;Bt.setSize(kt.z*G.transmissionResolutionScale,kt.w*G.transmissionResolutionScale);const Lt=G.getRenderTarget(),Yt=G.getActiveCubeFace(),Kt=G.getActiveMipmapLevel();G.setRenderTarget(Bt),G.getClearColor(z),mt=G.getClearAlpha(),mt<1&&G.setClearColor(16777215,.5),G.clear(),Pe&&le.render(ut);const re=G.toneMapping;G.toneMapping=ra;const ce=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),ge===!0&&Xt.setGlobalState(G.clippingPlanes,nt),Fi(b,ut,nt),pt.updateMultisampleRenderTarget(Bt),pt.updateRenderTargetMipmap(Bt),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ye=0,_e=B.length;ye<_e;ye++){const Ye=B[ye],{object:Fe,geometry:vn,material:Ft,group:rn}=Ye;if(Ft.side===ea&&Fe.layers.test(nt.layers)){const we=Ft.side;Ft.side=jn,Ft.needsUpdate=!0,Pl(Fe,ut,nt,vn,Ft,rn),Ft.side=we,Ft.needsUpdate=!0,Wt=!0}}Wt===!0&&(pt.updateMultisampleRenderTarget(Bt),pt.updateRenderTargetMipmap(Bt))}G.setRenderTarget(Lt,Yt,Kt),G.setClearColor(z,mt),ce!==void 0&&(nt.viewport=ce),G.toneMapping=re}function Fi(b,B,ut){const nt=B.isScene===!0?B.overrideMaterial:null;for(let it=0,Bt=b.length;it<Bt;it++){const kt=b[it],{object:Lt,geometry:Yt,group:Kt}=kt;let re=kt.material;re.allowOverride===!0&&nt!==null&&(re=nt),Lt.layers.test(ut.layers)&&Pl(Lt,B,ut,Yt,re,Kt)}}function Pl(b,B,ut,nt,it,Bt){et!==null&&it.isNodeMaterial&&et.setObject(b,it),b.onBeforeRender(G,B,ut,nt,it,Bt),b.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),it.onBeforeRender(G,B,ut,nt,b,Bt),it.transparent===!0&&it.side===ea&&it.forceSinglePass===!1?(it.side=jn,it.needsUpdate=!0,G.renderBufferDirect(ut,B,nt,it,b,Bt),it.side=Qr,it.needsUpdate=!0,G.renderBufferDirect(ut,B,nt,it,b,Bt),it.side=ea):G.renderBufferDirect(ut,B,nt,it,b,Bt),b.onAfterRender(G,B,ut,nt,it,Bt)}function Mr(b,B,ut){B.isScene!==!0&&(B=dn);const nt=rt.get(b),it=N.state.lights,Bt=N.state.shadowsArray,kt=it.state.version,Lt=Dt.getParameters(b,it.state,Bt,B,ut,N.state.lightProbeGridArray),Yt=Dt.getProgramCacheKey(Lt);let Kt=nt.programs;nt.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,nt.fog=B.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;nt.envMap=At.get(b.envMap||nt.environment,re),nt.envMapRotation=nt.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",di),Kt=new Map,nt.programs=Kt);let ce=Kt.get(Yt);if(ce!==void 0){if(nt.currentProgram===ce&&nt.lightsStateVersion===kt)return So(b,Lt),ce}else Lt.uniforms=Dt.getUniforms(b),et!==null&&b.isNodeMaterial&&et.build(b,ut,Lt),b.onBeforeCompile(Lt,G),ce=Dt.acquireProgram(Lt,Yt),Kt.set(Yt,ce),nt.uniforms=Lt.uniforms;const Wt=nt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=Xt.uniform),So(b,Lt),nt.needsLights=zl(b),nt.lightsStateVersion=kt,nt.needsLights&&(Wt.ambientLightColor.value=it.state.ambient,Wt.lightProbe.value=it.state.probe,Wt.sunLights.value=it.state.sun,Wt.sunLightShadows.value=it.state.sunShadow,Wt.directionalLights.value=it.state.directional,Wt.directionalLightShadows.value=it.state.directionalShadow,Wt.spotLights.value=it.state.spot,Wt.spotLightShadows.value=it.state.spotShadow,Wt.rectAreaLights.value=it.state.rectArea,Wt.ltc_1.value=it.state.rectAreaLTC1,Wt.ltc_2.value=it.state.rectAreaLTC2,Wt.pointLights.value=it.state.point,Wt.pointLightShadows.value=it.state.pointShadow,Wt.hemisphereLights.value=it.state.hemi,Wt.sunShadowMatrix.value=it.state.sunShadowMatrix,Wt.sunShadowCascade.value=it.state.sunShadowCascade,Wt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Wt.spotLightMatrix.value=it.state.spotLightMatrix,Wt.spotLightMap.value=it.state.spotLightMap,Wt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=N.state.lightProbeGridArray.length>0,nt.currentProgram=ce,nt.uniformsList=null,ce}function vo(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Oc.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function So(b,B){const ut=rt.get(b);ut.outputColorSpace=B.outputColorSpace,ut.batching=B.batching,ut.batchingColor=B.batchingColor,ut.instancing=B.instancing,ut.instancingColor=B.instancingColor,ut.instancingMorph=B.instancingMorph,ut.skinning=B.skinning,ut.morphTargets=B.morphTargets,ut.morphNormals=B.morphNormals,ut.morphColors=B.morphColors,ut.morphTargetsCount=B.morphTargetsCount,ut.numClippingPlanes=B.numClippingPlanes,ut.numIntersection=B.numClipIntersection,ut.vertexAlphas=B.vertexAlphas,ut.vertexTangents=B.vertexTangents,ut.toneMapping=B.toneMapping}function xo(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(B.matrixWorld);for(let ut=0,nt=b.length;ut<nt;ut++){const it=b[ut];if(it.texture!==null&&it.boundingBox.containsPoint(C))return it}return null}function Mo(b,B,ut,nt,it){B.isScene!==!0&&(B=dn),pt.resetTextureUnits();const Bt=B.fog,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?B.environment:null,Lt=ft===null?G.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:De.workingColorSpace,Yt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Kt=At.get(nt.envMap||kt,Yt),re=nt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ce=!!ut.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Wt=!!ut.morphAttributes.position,ye=!!ut.morphAttributes.normal,_e=!!ut.morphAttributes.color;let Ye=ra;nt.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ye=G.toneMapping);const Fe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,vn=Fe!==void 0?Fe.length:0,Ft=rt.get(nt),rn=N.state.lights;if(ge===!0&&(Me===!0||b!==ht)){const be=b===ht&&nt.id===st;Xt.setState(nt,b,be)}let we=!1;nt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==rn.state.version||Ft.outputColorSpace!==Lt||it.isBatchedMesh&&Ft.batching===!1||!it.isBatchedMesh&&Ft.batching===!0||it.isBatchedMesh&&Ft.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Ft.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Ft.instancing===!1||!it.isInstancedMesh&&Ft.instancing===!0||it.isSkinnedMesh&&Ft.skinning===!1||!it.isSkinnedMesh&&Ft.skinning===!0||it.isInstancedMesh&&Ft.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Ft.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Ft.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Ft.instancingMorph===!1&&it.morphTexture!==null||Ft.envMap!==Kt||nt.fog===!0&&Ft.fog!==Bt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Xt.numPlanes||Ft.numIntersection!==Xt.numIntersection)||Ft.vertexAlphas!==re||Ft.vertexTangents!==ce||Ft.morphTargets!==Wt||Ft.morphNormals!==ye||Ft.morphColors!==_e||Ft.toneMapping!==Ye||Ft.morphTargetsCount!==vn||!!Ft.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Ft.__version=nt.version);let Bn=Ft.currentProgram;we===!0&&(Bn=Mr(nt,B,it),et&&nt.isNodeMaterial&&et.onUpdateProgram(nt,Bn,Ft));let ei=!1,Hi=!1,ve=!1;const Ie=Bn.getUniforms(),Je=Ft.uniforms;if(E.useProgram(Bn.program)&&(ei=!0,Hi=!0,ve=!0),nt.id!==st&&(st=nt.id,Hi=!0),Ft.needsLights){const be=xo(N.state.lightProbeGridArray,it);Ft.lightProbeGrid!==be&&(Ft.lightProbeGrid=be,Hi=!0)}if(ei||ht!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ie.setValue(X,"projectionMatrix",b.projectionMatrix),Ie.setValue(X,"viewMatrix",b.matrixWorldInverse);const sn=Ie.map.cameraPosition;sn!==void 0&&sn.setValue(X,ie.setFromMatrixPosition(b.matrixWorld)),D.logarithmicDepthBuffer&&Ie.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ie.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),ht!==b&&(ht=b,Hi=!0,ve=!0)}if(Ft.needsLights&&(rn.state.sunShadowMap.length>0&&Ie.setValue(X,"sunShadowMap",rn.state.sunShadowMap,pt),rn.state.directionalShadowMap.length>0&&Ie.setValue(X,"directionalShadowMap",rn.state.directionalShadowMap,pt),rn.state.spotShadowMap.length>0&&Ie.setValue(X,"spotShadowMap",rn.state.spotShadowMap,pt),rn.state.pointShadowMap.length>0&&Ie.setValue(X,"pointShadowMap",rn.state.pointShadowMap,pt)),it.isSkinnedMesh){Ie.setOptional(X,it,"bindMatrix"),Ie.setOptional(X,it,"bindMatrixInverse");const be=it.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Ie.setValue(X,"boneTexture",be.boneTexture,pt))}it.isBatchedMesh&&(Ie.setOptional(X,it,"batchingTexture"),Ie.setValue(X,"batchingTexture",it._matricesTexture,pt),Ie.setOptional(X,it,"batchingIdTexture"),Ie.setValue(X,"batchingIdTexture",it._indirectTexture,pt),Ie.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&Ie.setValue(X,"batchingColorTexture",it._colorsTexture,pt));const ni=ut.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&V.update(it,ut,Bn),(Hi||Ft.receiveShadow!==it.receiveShadow)&&(Ft.receiveShadow=it.receiveShadow,Ie.setValue(X,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&B.environment!==null&&(Je.envMapIntensity.value=B.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=NC()),Hi){if(Ie.setValue(X,"toneMappingExposure",G.toneMappingExposure),Ft.needsLights&&Il(Je,ve),Bt&&nt.fog===!0&&$t.refreshFogUniforms(Je,Bt),$t.refreshMaterialUniforms(Je,nt,dt,Z,N.state.transmissionRenderTarget[b.id]),Ft.needsLights&&Ft.lightProbeGrid){const be=Ft.lightProbeGrid;Je.probesSH.value=be.texture,Je.probesMin.value.copy(be.boundingBox.min),Je.probesMax.value.copy(be.boundingBox.max),Je.probesResolution.value.copy(be.resolution)}Oc.upload(X,vo(Ft),Je,pt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Oc.upload(X,vo(Ft),Je,pt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ie.setValue(X,"center",it.center),Ie.setValue(X,"modelViewMatrix",it.modelViewMatrix),Ie.setValue(X,"normalMatrix",it.normalMatrix),Ie.setValue(X,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const be=nt.uniformsGroups;for(let sn=0,ha=be.length;sn<ha;sn++){const Bl=be[sn];Tt.update(Bl,Bn),Tt.bind(Bl,Bn)}}return Bn}function Il(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function zl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(b,B,ut){const nt=rt.get(b);nt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),rt.get(b.texture).__webglTexture=B,rt.get(b.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ut,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const ut=rt.get(b);ut.__webglFramebuffer=B,ut.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,ut=0){ft=b,Y=B,W=ut;let nt=null,it=!1,Bt=!1;if(b){const Lt=rt.get(b);if(Lt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Lt.__webglFramebuffer),yt.copy(b.viewport),Jt.copy(b.scissor),Zt=b.scissorTest,E.viewport(yt),E.scissor(Jt),E.setScissorTest(Zt),st=-1;return}else if(Lt.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Lt.__hasExternalTextures)pt.rebindTextures(b,rt.get(b.texture).__webglTexture,rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Lt.__boundDepthTexture!==re){if(re!==null&&rt.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Bt=!0);const Kt=rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[B])?nt=Kt[B][ut]:nt=Kt[B],it=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?nt=rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?nt=Kt[ut]:nt=Kt,yt.copy(b.viewport),Jt.copy(b.scissor),Zt=b.scissorTest}else yt.copy(_t).multiplyScalar(dt).floor(),Jt.copy(Ct).multiplyScalar(dt).floor(),Zt=Ge;if(ut!==0&&(nt=ct),E.bindFramebuffer(X.FRAMEBUFFER,nt)&&E.drawBuffers(b,nt),E.viewport(yt),E.scissor(Jt),E.setScissorTest(Zt),it){const Lt=rt.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+B,Lt.__webglTexture,ut)}else if(Bt){const Lt=B;for(let Yt=0;Yt<b.textures.length;Yt++){const Kt=rt.get(b.textures[Yt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Yt,Kt.__webglTexture,ut,Lt)}}else if(b!==null&&ut!==0){const Lt=rt.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Lt.__webglTexture,ut)}st=-1};function hi(b){const B=rt.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=D.textureFormatReadable(b.format),B.__typeReadable=D.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,ut,nt,it,Bt,kt,Lt=0){if(!(b&&b.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){E.bindFramebuffer(X.FRAMEBUFFER,Yt);try{const Kt=b.textures[Lt],re=Kt.format,ce=Kt.type;b.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt);const Wt=hi(Kt);if(Wt.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-nt&&ut>=0&&ut<=b.height-it&&X.readPixels(B,ut,nt,it,Ut.convert(re),Ut.convert(ce),Bt)}finally{const Kt=ft!==null?rt.get(ft).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,B,ut,nt,it,Bt,kt,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt)if(B>=0&&B<=b.width-nt&&ut>=0&&ut<=b.height-it){E.bindFramebuffer(X.FRAMEBUFFER,Yt);const Kt=b.textures[Lt],re=Kt.format,ce=Kt.type;b.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt);const Wt=hi(Kt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ye),X.bufferData(X.PIXEL_PACK_BUFFER,Bt.byteLength,X.STREAM_READ),X.readPixels(B,ut,nt,it,Ut.convert(re),Ut.convert(ce),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const _e=ft!==null?rt.get(ft).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,_e);const Ye=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await kE(X,Ye,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Bt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ye),X.deleteSync(Ye),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,ut=0){const nt=Math.pow(2,-ut),it=Math.floor(b.image.width*nt),Bt=Math.floor(b.image.height*nt),kt=B!==null?B.x:0,Lt=B!==null?B.y:0;pt.setTexture2D(b,0),X.copyTexSubImage2D(X.TEXTURE_2D,ut,0,0,kt,Lt,it,Bt),E.unbindTexture()},this.copyTextureToTexture=function(b,B,ut=null,nt=null,it=0,Bt=0){let kt,Lt,Yt,Kt,re,ce,Wt,ye,_e;const Ye=b.isCompressedTexture?b.mipmaps[Bt]:b.image;if(ut!==null)kt=ut.max.x-ut.min.x,Lt=ut.max.y-ut.min.y,Yt=ut.isBox3?ut.max.z-ut.min.z:1,Kt=ut.min.x,re=ut.min.y,ce=ut.isBox3?ut.min.z:0;else{const Je=Math.pow(2,-it);kt=Math.floor(Ye.width*Je),Lt=Math.floor(Ye.height*Je),b.isDataArrayTexture?Yt=Ye.depth:b.isData3DTexture?Yt=Math.floor(Ye.depth*Je):Yt=1,Kt=0,re=0,ce=0}nt!==null?(Wt=nt.x,ye=nt.y,_e=nt.z):(Wt=0,ye=0,_e=0);const Fe=Ut.convert(B.format),vn=Ut.convert(B.type);let Ft;B.isData3DTexture?(pt.setTexture3D(B,0),Ft=X.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(pt.setTexture2DArray(B,0),Ft=X.TEXTURE_2D_ARRAY):(pt.setTexture2D(B,0),Ft=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,B.unpackAlignment);const rn=E.getParameter(X.UNPACK_ROW_LENGTH),we=E.getParameter(X.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(X.UNPACK_SKIP_PIXELS),ei=E.getParameter(X.UNPACK_SKIP_ROWS),Hi=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Ye.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ye.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Kt),E.pixelStorei(X.UNPACK_SKIP_ROWS,re),E.pixelStorei(X.UNPACK_SKIP_IMAGES,ce);const ve=b.isDataArrayTexture||b.isData3DTexture,Ie=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Je=rt.get(b),ni=rt.get(B),be=rt.get(Je.__renderTarget),sn=rt.get(ni.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,be.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let ha=0;ha<Yt;ha++)ve&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(b).__webglTexture,it,ce+ha),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(B).__webglTexture,Bt,_e+ha)),X.blitFramebuffer(Kt,re,kt,Lt,Wt,ye,kt,Lt,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||b.isRenderTargetTexture||rt.has(b)){const Je=rt.get(b),ni=rt.get(B);E.bindFramebuffer(X.READ_FRAMEBUFFER,J),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,$);for(let be=0;be<Yt;be++)ve?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Je.__webglTexture,it,ce+be):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Je.__webglTexture,it),Ie?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ni.__webglTexture,Bt,_e+be):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ni.__webglTexture,Bt),it!==0?X.blitFramebuffer(Kt,re,kt,Lt,Wt,ye,kt,Lt,X.COLOR_BUFFER_BIT,X.NEAREST):Ie?X.copyTexSubImage3D(Ft,Bt,Wt,ye,_e+be,Kt,re,kt,Lt):X.copyTexSubImage2D(Ft,Bt,Wt,ye,Kt,re,kt,Lt);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ie?b.isDataTexture||b.isData3DTexture?X.texSubImage3D(Ft,Bt,Wt,ye,_e,kt,Lt,Yt,Fe,vn,Ye.data):B.isCompressedArrayTexture?X.compressedTexSubImage3D(Ft,Bt,Wt,ye,_e,kt,Lt,Yt,Fe,Ye.data):X.texSubImage3D(Ft,Bt,Wt,ye,_e,kt,Lt,Yt,Fe,vn,Ye):b.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Bt,Wt,ye,kt,Lt,Fe,vn,Ye.data):b.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Bt,Wt,ye,Ye.width,Ye.height,Fe,Ye.data):X.texSubImage2D(X.TEXTURE_2D,Bt,Wt,ye,kt,Lt,Fe,vn,Ye);E.pixelStorei(X.UNPACK_ROW_LENGTH,rn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,we),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(X.UNPACK_SKIP_ROWS,ei),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Hi),Bt===0&&B.generateMipmaps&&X.generateMipmap(Ft),E.unbindTexture()},this.initRenderTarget=function(b){rt.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){Y=0,W=0,ft=null,E.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const LC=o=>o?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function OC(o,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:LC(o),size:24,node:e,...i.length>0?{aliases:i}:{}}}const PC=o=>{let e="",i=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){i=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=i?s.toUpperCase():s,i=!1}return e};const IC=o=>{const e=PC(o);return e.charAt(0).toUpperCase()+e.slice(1)};const qp=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();const Yr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function ip(o){return o!=null}function zC(o,e={}){const i=e.attributeNames??{},s=v=>i[v]??v,u=o.size??o.width??Yr.width,f=o.size??o.height??Yr.height,d=o.aliases?.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`)??[],h=[...o.name?[`lucide-${o.name}`]:[],...d],m=e.className?.split(" ").filter(Boolean)??[],p=e.includeDefaultClasses===!1?qp(...m):qp("lucide",...h,...m),S=e.absoluteStrokeWidth?Number(e.strokeWidth??Yr["stroke-width"])*Number(o.size??o.width??Yr.width)/Number(e.size??e.width??Yr.width):e.strokeWidth??Yr["stroke-width"];return["svg",{...Object.entries(Yr).reduce((v,[y,R])=>(v[s(y)]=R,v),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&ip(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&ip(e.width)&&{[s("width")]:e.width},..."height"in e&&ip(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:S,...p&&{[s("class")]:p},[s("viewBox")]:`0 0 ${u} ${f}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(v=>{const[y,R,w]=v,M=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...R}:R;return w?[y,M,w]:[y,M]})]}function BC(o,e={}){return zC(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}const FC=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},HC=Jn.createContext({}),GC=()=>Jn.useContext(HC),VC=Jn.forwardRef(({color:o,size:e,width:i,height:s,strokeWidth:u,absoluteStrokeWidth:f,nonScalingStroke:d,className:h="",children:m,iconNode:p=[],icon:S={node:p,aliases:[],size:24},..._},v)=>{const{size:y=24,strokeWidth:R=2,absoluteStrokeWidth:w=!1,nonScalingStroke:M=!1,color:x="currentColor",className:I=""}=GC()??{},H=!!m||FC(_),[C,U,N=[]]=BC(S,{color:o??x,width:i??e??y,height:s??e??y,strokeWidth:u??R,absoluteStrokeWidth:f??w,nonScalingStroke:d??M,className:qp(I,h),hasA11yProp:H,attributes:_});return Jn.createElement(C,{ref:v,...U},[...N.map(([O,T])=>Jn.createElement(O,T)),...Array.isArray(m)?m:[m]])});function mo(o,e=[],i=[]){const s=typeof o=="string"?OC(o,e,i):o,u=Jn.forwardRef(({className:f,...d},h)=>Jn.createElement(VC,{ref:h,icon:s,className:f,...d}));return s.name&&(u.displayName=IC(s.name)),u}const px={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};px.node;const XC=mo(px);const mx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};mx.node;const xS=mo(mx);const gx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};gx.node;const kC=mo(gx);const _x={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};_x.node;const WC=mo(_x);const vx={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};vx.node;const MS=mo(vx);const Sx={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Sx.node;const qC=mo(Sx),yS="923352241",ES=[{name:"Morango",emoji:"🍓",group:"Fruta"},{name:"Banana",emoji:"🍌",group:"Fruta"},{name:"Kiwi",emoji:"🥝",group:"Fruta"},{name:"Mirtilo",emoji:"🫐",group:"Fruta"},{name:"Coco",emoji:"🥥",group:"Toppings"},{name:"Chocolate",emoji:"🍫",group:"Toppings"},{name:"Granola",emoji:"🌾",group:"Toppings"},{name:"Crocantes",emoji:"🥜",group:"Toppings"},{name:"Calda de chocolate",emoji:"🍫",group:"Molhos"},{name:"Calda de morango",emoji:"🍓",group:"Molhos"},{name:"Leite condensado",emoji:"🥛",group:"Molhos"},{name:"Mel",emoji:"🍯",group:"Molhos"}],xx=(o,e,i)=>{let s=`M0 ${e+400} L0 ${e}`;for(let u=0;u<=1440;u+=12){const f=e-i*(.55+.45*Math.sin(u*.021+o)*Math.sin(u*.047+o*2.3))-i*.25*Math.abs(Math.sin(u*.13+o));s+=` L${u} ${f.toFixed(1)}`}return`${s} L1440 ${e+400} Z`},YC=xx(1.3,250,70),ZC=xx(4.1,290,80);function Cc({x:o,y:e,h:i,lean:s}){const u=o+s,f=e-i,d=i*.55,h=[-165,-140,-115,-90,-65,-40,-15].map(m=>{const p=m*Math.PI/180,S=u+Math.cos(p)*d,_=f+Math.sin(p)*d*.35+d*.45,v=u+Math.cos(p)*d*.55,y=f+Math.sin(p)*d*.9;return`M${u} ${f} Q${v} ${y} ${S} ${_}`});return Et.createElement("g",null,Et.createElement("path",{d:`M${o} ${e} Q${o+s*.1} ${e-i*.55} ${u} ${f}`,strokeWidth:"7"}),h.map((m,p)=>Et.createElement("path",{key:p,d:m,strokeWidth:"4"})))}const KC="M0 0 C60 -70 200 -90 300 -20 C210 -10 90 30 0 0Z",QC="M8 0 C100 -32 200 -42 290 -22",JC=[{a:-95,s:.9,c:"#143423"},{a:-70,s:1.1,c:"#173d27"},{a:-45,s:1.25,c:"#1f5233"},{a:-20,s:1.3,c:"#276a3f"},{a:5,s:1.1,c:"#1d4a2e"}],TS=({transform:o})=>Et.createElement("g",{transform:o},JC.map((e,i)=>Et.createElement("g",{key:i,transform:`rotate(${e.a}) scale(${e.s})`},Et.createElement("path",{d:KC,fill:e.c}),Et.createElement("path",{d:QC,fill:"none",stroke:"rgba(255,255,255,.16)",strokeWidth:"2"}))));function jC(){return Et.createElement("div",{className:"ambience","aria-hidden":"true"},Et.createElement("div",{className:"sun"}),Et.createElement("div",{className:"cloud c1"}),Et.createElement("div",{className:"cloud c2"}),Et.createElement("div",{className:"cloud c3"}),Et.createElement("div",{className:"cloud c4"}),Et.createElement("svg",{className:"layer far",viewBox:"0 0 1440 400",preserveAspectRatio:"xMidYMax slice"},Et.createElement("path",{d:YC})),Et.createElement("svg",{className:"layer mid",viewBox:"0 0 1440 400",preserveAspectRatio:"xMidYMax slice"},Et.createElement("path",{className:"canopy",d:ZC}),Et.createElement("g",{className:"palms"},Et.createElement(Cc,{x:170,y:340,h:215,lean:40}),Et.createElement(Cc,{x:470,y:335,h:165,lean:-30}),Et.createElement(Cc,{x:990,y:335,h:205,lean:-45}),Et.createElement(Cc,{x:1270,y:340,h:170,lean:35}))),Et.createElement("div",{className:"mist"}),Et.createElement("svg",{className:"layer fore",viewBox:"0 0 1440 500",preserveAspectRatio:"xMidYMax slice"},Et.createElement(TS,{transform:"translate(-40 520)"}),Et.createElement(TS,{transform:"translate(1480 520) scale(-1 1)"})))}const bS=o=>Math.min(1,Math.max(0,o)),AS=o=>1-Math.pow(1-o,3),$C=o=>1+2.70158*Math.pow(o-1,3)+1.70158*Math.pow(o-1,2),t3=o=>o*o*(3-2*o),xl=[0,.31,.53,.75,.93,1],Ml=(o,e)=>{for(let i=0;i<xl.length-1;i++)if(o<=xl[i+1]){const s=(o-xl[i])/(xl[i+1]-xl[i]);return e[i]+(e[i+1]-e[i])*t3(s)}return e[e.length-1]},e3=[0,1,-1,1,0,0],n3=[.78,.95,1,.95,.85,.55],i3=[0,0,0,0,0,3.2],a3=[0,.2,-.22,.2,0,0],r3=[0,-.5,.5,-.5,0,0];function s3(o,e){const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),u=s.createRadialGradient(64,64,0,64,64,64);return u.addColorStop(0,o),u.addColorStop(1,e),s.fillStyle=u,s.fillRect(0,0,128,128),new ST(i)}function o3({progressRef:o,image:e="/images/acai-cup.png"}){const i=Jn.useRef(null);return Jn.useEffect(()=>{const s=i.current,u=document.documentElement,f=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=new sT,h=new Ti(32,1,.1,50);h.position.set(0,.2,10);const m=new UC({antialias:!0,alpha:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(0,0),m.outputColorSpace=Qn,s.appendChild(m.domElement);const p=new pT(new jS({map:s3("rgba(255,255,255,.7)","rgba(255,255,255,0)"),transparent:!0,depthWrite:!1}));p.scale.set(6.5,6.5,1),p.position.z=-1.5,d.add(p);const S=new El;d.add(S),new NT().load(e,H=>{H.colorSpace=Qn,H.anisotropy=m.capabilities.getMaxAnisotropy();const C=3.7,U=C*(H.image.width/H.image.height),N=new Ol(U,C,48,1),O=U*.6,T=N.attributes.position;for(let L=0;L<T.count;L++){const G=Math.max(-O*.99,Math.min(O*.99,T.getX(L)));T.setZ(L,Math.sqrt(O*O-G*G)-O)}N.computeVertexNormals(),S.add(new ua(N,new rm({map:H,transparent:!0,alphaTest:.02,side:ea})))});let _=!0;const v=()=>{const H=s.clientWidth||window.innerWidth,C=s.clientHeight||window.innerHeight;m.setSize(H,C),h.aspect=H/C,h.updateProjectionMatrix(),_=H/C>1.1};v(),window.addEventListener("resize",v);const y={x:0,y:0,sx:0,sy:0},R=H=>{y.x=(H.clientX/window.innerWidth-.5)*2,y.y=(H.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",R,{passive:!0});const w=new OT;let M=o.current,x;const I=()=>{const H=w.getElapsedTime();M+=(o.current-M)*(f?1:1-Math.exp(-.016/.16)),y.sx+=(y.x-y.sx)*.05,y.sy+=(y.y-y.sy)*.05,u.style.setProperty("--sp",M.toFixed(4));const C=f?1:bS((H-.2)/1.6),U=1-$C(C),N=Math.sin(H*.9)*.09,O=Math.min(2,h.aspect*1.05),T=f?0:Math.sin(H*.6)*.05,L=_?Ml(M,e3)*O:0,G=Ml(M,n3)*(_?1:.78)*(.75+.25*AS(C)),q=(_?0:-.7)+Ml(M,i3);S.position.set(L+y.sx*.12,q+U*-4+N,0),S.scale.setScalar(G),S.rotation.y=Ml(M,r3)*(_?1:.4)+T+y.sx*.22+(1-AS(C))*-1.1,S.rotation.z=Ml(M,a3)+T*.5,S.rotation.x=y.sy*.08,p.position.set(S.position.x,S.position.y,-1.5),p.material.opacity=.55,s.style.opacity=1-bS((M-.9)/.1),m.render(d,h),x=requestAnimationFrame(I)};return I(),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",v),window.removeEventListener("pointermove",R),d.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&[].concat(H.material).forEach(C=>{C.map?.dispose(),C.dispose()})}),m.dispose(),s.removeChild(m.domElement)}},[o,e]),Et.createElement("div",{className:"cup-canvas",ref:i,"aria-hidden":"true"})}const l3=o=>o<.2?"intro":o<.42?"fruta":o<.64?"toppings":o<.86?"molhos":"exit";function u3(){const[o,e]=Jn.useState(!1),[i,s]=Jn.useState([]),u=Jn.useRef(0);Jn.useEffect(()=>{const m=document.documentElement;m.dataset.scene="intro";const p=()=>{const S=document.getElementById("scroll-story");if(!S)return;const _=S.getBoundingClientRect(),v=_.height-window.innerHeight;u.current=v>0?Math.min(1,Math.max(0,-_.top/v)):0;const y=l3(u.current);m.dataset.scene!==y&&(m.dataset.scene=y)};return window.addEventListener("scroll",p,{passive:!0}),p(),()=>window.removeEventListener("scroll",p)},[]);const f=m=>{s(p=>p.includes(m)?p.filter(S=>S!==m):[...p,m])},d=()=>e(!1),h=[...new Set(ES.map(m=>m.group))];return Et.createElement("div",{className:"app"},Et.createElement(jC,null),Et.createElement(o3,{progressRef:u}),Et.createElement("header",{className:"navbar"},Et.createElement("a",{className:"logo",href:"#inicio",onClick:d},Et.createElement("span",{className:"logo-mark"},"P"),Et.createElement("span",null,"Pé de ",Et.createElement("b",null,"Açaí"))),Et.createElement("nav",{className:o?"nav-links open":"nav-links"},Et.createElement("a",{href:"#inicio",onClick:d},"Início"),Et.createElement("a",{href:"#monta",onClick:d},"Como funciona"),Et.createElement("a",{href:"#contacto",onClick:d},"Contacto")),Et.createElement("a",{className:"nav-cta",href:`tel:${yS}`},Et.createElement(MS,{size:17})," Ligar"),Et.createElement("button",{className:"menu-button",onClick:()=>e(!o),"aria-label":o?"Fechar menu":"Abrir menu"},o?Et.createElement(qC,null):Et.createElement(WC,null))),Et.createElement("main",null,Et.createElement("section",{className:"story",id:"scroll-story"},Et.createElement("div",{className:"stage",id:"inicio"},Et.createElement("div",{className:"hero-top"},Et.createElement("h1",null,Et.createElement("span",{className:"line"},Et.createElement("span",null,"O teu açaí.")))),Et.createElement("div",{className:"hero-bottom"},Et.createElement("p",{className:"hero-copy"},"Escolhe, monta e pesa. Junta fruta, toppings e molhos para criar uma taça só tua."),Et.createElement("div",{className:"hero-actions"},Et.createElement("a",{className:"primary-button",href:"#monta"},"Experimentar combinações ",Et.createElement(xS,{size:18})),Et.createElement("a",{className:"scroll-cue",href:"#monta"},Et.createElement(XC,{size:15})," Desce para ver"))),Et.createElement("div",{className:"panel panel-fruta left"},Et.createElement("h2",null,"Começa pela fruta."),Et.createElement("p",null,"Morango, banana, kiwi e mirtilo. Fresca e cortada na hora.")),Et.createElement("div",{className:"panel panel-toppings right"},Et.createElement("h2",null,"Depois, o crocante."),Et.createElement("p",null,"Coco, chocolate, granola e crocantes para dar textura a cada colherada.")),Et.createElement("div",{className:"panel panel-molhos left"},Et.createElement("h2",null,"Fecha com um molho."),Et.createElement("p",null,"Calda de chocolate ou de morango, leite condensado ou mel.")))),Et.createElement("section",{className:"builder",id:"monta"},Et.createElement("div",{className:"builder-copy"},Et.createElement("h2",null,"Escolhe.",Et.createElement("br",null),"Monta.",Et.createElement("br",null),"Pesa."),Et.createElement("p",null,"Começa pela base de açaí, escolhe o que vai por cima e paga pelo peso da tua taça."),Et.createElement("div",{className:"steps-inline"},Et.createElement("span",null,Et.createElement("b",null,"1")," Escolhe a base"),Et.createElement("span",null,Et.createElement("b",null,"2")," Junta os toppings"),Et.createElement("span",null,Et.createElement("b",null,"3")," Pesa e aproveita")),Et.createElement("p",{className:"builder-note"},"Esta é uma pequena experiência para combinares sabores. As opções reais podem variar.")),Et.createElement("div",{className:"topping-picker"},Et.createElement("div",{className:"picker-heading"},Et.createElement("h3",null,"O que vai na tua taça?"),Et.createElement("span",{className:"selection-count"},i.length," escolhido",i.length===1?"":"s")),h.map(m=>Et.createElement("div",{className:"topping-group",key:m},Et.createElement("h4",null,m),Et.createElement("div",{className:"topping-options"},ES.filter(p=>p.group===m).map(p=>{const S=i.includes(p.name);return Et.createElement("button",{className:`topping-option ${S?"selected":""}`,type:"button",key:p.name,"aria-pressed":S,onClick:()=>f(p.name)},Et.createElement("span",{className:"topping-emoji"},p.emoji),Et.createElement("span",null,p.name),Et.createElement("span",{className:"topping-check"},S&&Et.createElement(kC,{size:14})))})))),Et.createElement("div",{className:"selection-summary","aria-live":"polite"},Et.createElement("span",null,i.length?i.join(", "):"Escolhe alguns toppings para começar"),i.length>0&&Et.createElement("button",{type:"button",onClick:()=>s([])},"Limpar")))),Et.createElement("section",{className:"contact",id:"contacto"},Et.createElement("div",{className:"contact-copy"},Et.createElement("h2",null,"Liga-nos."),Et.createElement("p",null,"Queres saber quais são os toppings disponíveis hoje? Liga-nos.")),Et.createElement("a",{className:"contact-phone",href:`tel:${yS}`},Et.createElement("span",{className:"phone-icon"},Et.createElement(MS,null)),Et.createElement("span",null,Et.createElement("small",null,"Telefone"),Et.createElement("b",null,"923 352 241")),Et.createElement(xS,{className:"phone-arrow"})))),Et.createElement("footer",null,Et.createElement("a",{className:"logo footer-logo",href:"#inicio"},Et.createElement("span",{className:"logo-mark"},"P"),Et.createElement("span",null,"Pé de ",Et.createElement("b",null,"Açaí"))),Et.createElement("span",null,"© 2026 Pé de Açaí"),Et.createElement("a",{href:"#inicio",className:"back-top"},"Voltar ao início")))}lE.createRoot(document.getElementById("root")).render(Et.createElement(u3,null));
