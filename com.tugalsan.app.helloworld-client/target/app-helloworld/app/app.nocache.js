function app(){var Q='bootstrap',R='begin',S='gwt.codesvr.app=',T='gwt.codesvr=',U='app',V='startup',W='DUMMY',X=0,Y=1,Z='iframe',$='position:absolute; width:0; height:0; border:none; left: -1000px;',_=' top: -1000px;',ab='Chrome',bb='CSS1Compat',cb='<!doctype html>',db='',eb='<html><head><\/head><body><\/body><\/html>',fb='undefined',gb='readystatechange',hb=10,ib='script',jb='moduleStartup',kb='moduleRequested',lb='Failed to load ',mb='head',nb='javascript',ob='meta',pb='name',qb='app::',rb='::',sb='gwt:property',tb='content',ub='=',vb='gwt:onPropertyErrorFn',wb='Bad handler "',xb='" for "gwt:onPropertyErrorFn"',yb='gwt:onLoadErrorFn',zb='" for "gwt:onLoadErrorFn"',Ab='#',Bb='?',Cb='/',Db='img',Eb='clear.cache.gif',Fb='baseUrl',Gb='app.nocache.js',Hb='base',Ib='//',Jb='locale',Kb='tr',Lb='locale=',Mb=7,Nb='&',Ob='__gwt_Locale',Pb='_',Qb='Unexpected exception in locale detection, using default: ',Rb=2,Sb='selectingPermutation',Tb='app.devmode.js',Ub='en',Vb='6062641BC84669CD8A347133CBA07743',Wb='BB96626419BA261FBC63D79D57505178',Xb=':',Yb='.cache.js',Zb='loadExternalRefs',$b='end',_b='http:',ac='file:',bc='_gwt_dummy_',cc='__gwtDevModeHook:app',dc='Ignoring non-whitelisted Dev Mode URL: ',ec=':moduleBase';var q=window;var r=document;t(Q,R);function s(){var a=q.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:U,sessionId:q.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
app.__sendStats=t;app.__moduleName=U;app.__errFn=null;app.__moduleBase=W;app.__softPermutationId=X;app.__computePropValue=null;app.__getPropMap=null;app.__installRunAsyncCode=function(){};app.__gwtStartLoadingFragment=function(){return null};app.__gwt_isKnownPropertyValue=function(){return false};app.__gwt_getMetaProperty=function(){return null};var u=null;var v=q.__gwt_activeModules=q.__gwt_activeModules||{};v[U]={moduleName:U};app.__moduleStartupDone=function(e){var f=v[U].bindings;v[U].bindings=function(){var a=f?f():{};var b=e[app.__softPermutationId];for(var c=X;c<b.length;c++){var d=b[c];a[d[X]]=d[Y]}return a}};var w;function A(){B();return w}
function B(){if(w){return}var a=r.createElement(Z);a.id=U;a.style.cssText=$+_;a.tabIndex=-1;r.body.appendChild(a);w=a.contentWindow.document;if(navigator.userAgent.indexOf(ab)==-1){w.open();var b=document.compatMode==bb?cb:db;w.write(b+eb);w.close()}}
function C(i){function j(a){function b(){if(typeof r.readyState==fb){return typeof r.body!=fb&&r.body!=null}return /loaded|complete/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(r.removeEventListener){r.removeEventListener(gb,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener(gb,d,false)}var e=setInterval(function(){d()},hb)}
function k(c){function d(a,b){a.removeChild(b)}
var e=A();var f=e.body;var g;if(navigator.userAgent.indexOf(ab)>-1){g=e.createElement(ib);g.text=c.join(db);f.appendChild(g);d(f,g)}else{for(var h=X;h<c.length;h++){g=e.createElement(ib);g.text=c[h];f.appendChild(g);d(f,g)}}}
app.onScriptDownloaded=function(a){j(function(){k(a)})};t(jb,kb);var l=r.createElement(ib);l.src=i;if(app.__errFn){l.onerror=function(){app.__errFn(U,new Error(lb+code))}}r.getElementsByTagName(mb)[X].appendChild(l)}
app.__startLoadingFragment=function(a){return G(a)};app.__installRunAsyncCode=function(a){var b=A();var c=b.body;var d=b.createElement(ib);d.language=nb;d.text=a;c.appendChild(d);c.removeChild(d)};function D(){var c={};var d;var e;var f=r.getElementsByTagName(ob);for(var g=X,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(pb),k;if(j){j=j.replace(qb,db);if(j.indexOf(rb)>=X){continue}if(j==sb){k=i.getAttribute(tb);if(k){var l,m=k.indexOf(ub);if(m>=X){j=k.substring(X,m);l=k.substring(m+Y)}else{j=k;l=db}c[j]=l}}else if(j==vb){k=i.getAttribute(tb);if(k){try{d=eval(k)}catch(a){alert(wb+k+xb)}}}else if(j==yb){k=i.getAttribute(tb);if(k){try{e=eval(k)}catch(a){alert(wb+k+zb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};u=d;app.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(Ab);if(b==-1){b=a.length}var c=a.indexOf(Bb);if(c==-1){c=a.length}var d=a.lastIndexOf(Cb,Math.min(c,b));return d>=X?a.substring(X,d+Y):db}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(Db);b.src=a+Eb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Fb);if(a!=null){return a}return db}
function h(){var a=r.getElementsByTagName(ib);for(var b=X;b<a.length;++b){if(a[b].src.indexOf(Gb)!=-1){return e(a[b].src)}}return db}
function i(){var a=r.getElementsByTagName(Hb);if(a.length>X){return a[a.length-Y].href}return db}
function j(){var a=r.location;return a.href==a.protocol+Ib+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==db){k=h()}if(k==db){k=i()}if(k==db&&j()){k=e(r.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return app.__moduleBase+a}
function H(){var i=[];var j=X;function k(a,b){var c=i;for(var d=X,e=a.length-Y;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(u){u(a,d,b)}throw null}
m[Jb]=function(){var b=null;var c=Kb;try{if(!b){var d=location.search;var e=d.indexOf(Lb);if(e>=X){var f=d.substring(e+Mb);var g=d.indexOf(Nb,e);if(g<X){g=d.length}b=d.substring(e+Mb,g)}}if(!b){b=__gwt_getMetaProperty(Jb)}if(!b){b=q[Ob]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Jb,b)){var h=b.lastIndexOf(Pb);if(h<X){b=null;break}b=b.substring(X,h)}}catch(a){alert(Qb+a)}q[Ob]=c;return b||Kb};l[Jb]={'default':X,'en':Y,'tr':Rb};__gwt_isKnownPropertyValue=function(a,b){return b in l[a]};app.__getPropMap=function(){var a={};for(var b in l){if(l.hasOwnProperty(b)){a[b]=n(b)}}return a};app.__computePropValue=n;q.__gwt_activeModules[U].bindings=app.__getPropMap;t(Q,Sb);if(s()){return G(Tb)}var o;try{k([Ub],Vb);k([Kb],Wb);o=i[n(Jb)];var p=o.indexOf(Xb);if(p!=-1){j=parseInt(o.substring(p+Y),hb);o=o.substring(X,p)}}catch(a){}app.__softPermutationId=j;return G(o+Yb)}
function I(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}t(Zb,R);t(Zb,$b)}
D();app.__moduleBase=F();v[U].moduleBase=app.__moduleBase;var J=H();if(q){var K=!!(q.location.protocol==_b||q.location.protocol==ac);q.__gwt_activeModules[U].canRedirect=K;function L(){var b=bc;try{q.sessionStorage.setItem(b,b);q.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=cc;var N=q.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(dc+N)}N=db}if(N&&!q[M]){q[M]=true;q[M+ec]=F();var O=r.createElement(ib);O.src=N;var P=r.getElementsByTagName(mb)[X];P.insertBefore(O,P.firstElementChild||P.children[X]);return false}}}I();t(Q,$b);C(J);return true}
app.succeeded=app();