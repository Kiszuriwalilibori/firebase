(this.webpackJsonpfirebase=this.webpackJsonpfirebase||[]).push([[9],{150:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(0),i=t.n(a),o=t(40),u=t(7),c=t(143),l=t(8),d=t.n(l),s=t(130),b=t(4),f=t(14),p=t(93),m=t(94);var g=function(e,n,t){return function(r,a){e?m.d.push(t,(function(e){e?(r(Object(u.x)(e.message)),n.error(),r(Object(u.D)())):(setTimeout((function(){r(Object(u.q)())}),3e3),r(Object(u.B)(t)),r(Object(u.D)()))})):(r(Object(u.z)("U\u017cytkownik o tym e-mailu jest ju\u017c zarejestrowany")),r(Object(u.D)()))}};var h=Object(o.b)((function(e){return{disabled:e.submitDisabled}}),null)((function(e){var n=e.disabled;return a.createElement(p.c.btn,{type:"submit",id:"SubmitButton",disabled:n},a.createElement("span",null,"Submit"))}));var j=Object(b.g)(Object(o.b)((function(e){return{user:e.user}}),(function(e){return{showWarning:function(n){e(Object(u.z)(n))},showError:function(n){e(Object(u.x)(n))},hideAddedUserMessage:function(){e(Object(u.q)())},submitFigure:function(n,t,r){e(g(n,t,r))},toggleSubmit:function(){e(Object(u.D)())}}}))((function(e){var n=Object(a.useRef)(null),t=e.user,r=e.history,o=e.submitFigure,u=e.showWarning,c=e.toggleSubmit,l=Object(a.useState)(""),d=Object(s.a)(l,2),b=d[0],g=d[1],j=Object(a.useState)(""),v=Object(s.a)(j,2),x=v[0],O=v[1],w=function(){return i.a.createElement(p.c.dangerMessage,null,i.a.createElement("u",null," Reset Fields"))},y=i.a.useMemo((function(){return{error:function(){r.push(f.b)},loading:function(){r.push(f.a)},home:function(){r.push(f.c)}}}),[r]);return Object(a.useEffect)((function(){return n.current.focus()}),[n]),i.a.createElement(p.c.outerWrapper,{onSubmit:function(e){e.preventDefault(),t?(c(),m.d.orderByChild("email").equalTo(x).once("value",(function(e){var n=!e.exists();o(n,y,{name:b,email:x,user:t.displayName||t.email})}))):u("Tylko zalogowani uzytkownicy mog\u0105 dodawa\u0107 postacie")}},i.a.createElement(p.c.innerWrapper,null,i.a.createElement(p.c.input,{required:!0,minLength:"2",maxLength:"20",pattern:"[a-zA-Z\u0105\u0104\u0107\u0107\u0119\u0119\u0142\u0141\u0144\u0143\xf3\xd3\u015b\u015a\u017c\u017b\u0179\u0179 ]+",placeholder:"Name...",type:"text",ref:n,value:b,onChange:function(e){return g(b=e.target.value)}})),i.a.createElement(p.c.inputWrapper,null,i.a.createElement(p.c.input,{required:!0,minLength:"2",pattern:"[^@\\s]+@[^@\\s]+\\.[^@\\s]+",placeholder:"Email...",type:"text",value:x,onChange:function(e){return O(x=e.target.value)}})),i.a.createElement(h,null),!(""===b&&""===x)&&i.a.createElement(p.c.resetWrapper,{onClick:function(){g(b=""),O(x="")}},i.a.createElement(w,null)))}))),v=j;j.propTypes={onSubmit:d.a.func};var x=Object(o.b)((function(e){return{isHiddenAddUserButton:e.isHiddenAddUserButton,isHiddenAddedUserMsg:e.isHiddenAddedUserMsg,isHiddenInputForm:e.isHiddenInputForm,isNotLimitReached:e.isNotLimitReached}}),(function(e){return{onAddUser:function(){return e(Object(u.w)())}}}))((function(e){var n=e.isHiddenAddUserButton,t=e.isHiddenAddedUserMsg,r=e.isHiddenInputForm,a=e.isNotLimitReached,o=e.onAddUser,u=function(){return a?i.a.createElement(p.e.btn,{id:"AddUserButton",type:"button",onClick:a?o:function(){}},i.a.createElement(p.e.iconCross,null),i.a.createElement(p.e.btnText,null,"Add User")):i.a.createElement(p.e.btn_disabled,null,i.a.createElement(p.e.iconCross,null),i.a.createElement(p.e.btnText,null,"Add User"))};return i.a.createElement(p.e.wrapper,null,!n&&i.a.createElement(u,null),!t&&i.a.createElement(p.e.successMessage,null,i.a.createElement(p.e.iconCheck,null),i.a.createElement("span",null," You have succesfully added an user ")),!r&&i.a.createElement(v,null),!a&&i.a.createElement(p.e.dangerMessage,null,i.a.createElement(p.e.iconLimit,null),i.a.createElement("span",null," You have reached the limit")))}));x.propTypes={isHiddenAddUserButton:d.a.bool,isHiddenInputForm:d.a.bool,isNotLimitReached:d.a.bool,onAddUser:d.a.func};var O=x,w=t(48);var y=t(49),E=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,147))})),z=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,154))})),k=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,148))})),A=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,155))})),F=Object(a.lazy)((function(){return t.e(16).then(t.bind(null,156))})),B=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,151))})),C=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(8),t.e(15)]).then(t.bind(null,149))}));var S=Object(o.b)((function(e){return{isError:e.isError,errorMessage:e.errorMessage,isLoading:e.isLoading,user:e.user}}),(function(e){return{login:function(n){return e(Object(u.u)(n))},hideError:function(){return e(Object(u.r)())},load:function(n){return e((t=n,function(e,n){m.b.on("value",(function(n){!0===n.val()?e(Object(u.y)("Ustanowiono lub przywr\xf3cono po\u0142\u0105czenie z baz\u0105 danych")):(e(Object(u.x)("W tej chwili nie masz po\u0142\u0105czenia z baz\u0105. Wskazane jest aby\u015b nie wykonywa\u0142 operacji zapisu i odczytu, gdy\u017c maj\u0105 one wy\u0142acznie lokalny zasi\u0119g i nie zmieniaj\u0105 bazy")),t.error())})),e(Object(u.C)()),t.loading(),m.d.on("value",(function(r){var a=r.val();if(!a)return e(Object(u.x)("Baza jest pusta lub wyst\u0105pi\u0142 problem z po\u0142\u0105czeniem")),void t.error();for(var i in a){var o=a[i],c=[i];c[1]=o.name,c[2]=o.email,c[3]=o.user,a[i]=c}var l=n().columnSortBy;l?e(Object(u.p)(Object(w.a)(Object.values(a),n().isSortDescending,l))):a&&e(Object(u.p)(Object.values(a))),e(Object(u.C)()),t.home()}),(function(e){Object(u.x)(e),t.error()})),m.a.onAuthStateChanged((function(n){n&&e(Object(u.u)(n))}))}));var t}}}))((function(e){var n=Object(r.a)({},e),t=n.isLoading,o=n.user,u=n.load,l=n.history,d=i.a.useMemo((function(){return{error:function(){l.push(f.b)},loading:function(){l.push(f.a)},home:function(){l.push(f.c)}}}),[l]);return Object(a.useEffect)((function(){u(d)}),[u,d]),i.a.createElement(i.a.Fragment,null,i.a.createElement(a.Suspense,{fallback:Object(y.a)()},i.a.createElement(E,null),i.a.createElement(B,{user:o}),i.a.createElement(z,{visible:t}),i.a.createElement(p.a.App,null,i.a.createElement(A,null),i.a.createElement(c.a,{in:!0,timeout:2e3},i.a.createElement(p.a.tableWrapper,null,i.a.createElement(O,null),i.a.createElement(p.a.table,null,i.a.createElement(F,null),i.a.createElement(k,null))))),i.a.createElement(C,null)))}));n.default=S},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return W})),t.d(n,"d",(function(){return I})),t.d(n,"e",(function(){return H})),t.d(n,"c",(function(){return N})),t.d(n,"b",(function(){return T})),t.d(n,"f",(function(){return P}));var r=t(111),a=t(112),i=t(0),o=t.n(i);function u(){var e=Object(r.a)(["\nbody {color: gold; \n}; \n* {box-sizing: border-box}\n\n*{@import url('./styles/App.css');\n\n}\n\n\n\nhtml {\n\n  font-size: 12px;\n  \n  @media \n    (max-width: 330px){ font-size:10px;}\n  @media \n    (min-width: 331px)and (max-width: 568px) { font-size:12px;}\n     \n  @media \n    (min-width: 569px){ font-size:16px;}\n  \n \n\n}\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["background: transparent; border-radius:50%; border:none;"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  text-shadow: 0 -.03rem .03rem;\n  font-weight: 100; \n  width:","; \n  height:","; \n  color:","; \n  border: 1px solid; \n  border-radius:50%; \n  display:flex; \n  justify-content:center; \n  align-items: center; \n  background-color:",";\n  @media(max-width:569px){ width: calc( 20px + 10 * ((100vw - 320px) / 249)); height:calc( 20px + 10 * ((100vw - 320px) / 249)); }\n  "]);return l=function(){return e},e}function d(){var e=Object(r.a)(["vertical-align: top; padding:0.75rem; border-top: 1px solid"]);return d=function(){return e},e}function s(){var e=Object(r.a)(["vertical-align: middle; padding:0.75rem; border-top: 1px solid"]);return s=function(){return e},e}function b(){var e=Object(r.a)(["display:flex; justify-content: space-between; align-items:center"]);return b=function(){return e},e}function f(){var e=Object(r.a)(["\ncursor: pointer;\ntext-align: left;\n@media(max-width: 568px) {padding 0.75rem 0}\n@media(min-width: 569px) {padding 0.75rem}\n\nvertical-align:top;\nborder-top: 1px solid;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["background-color:","; color:",""]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n  display:flex; \n  flex-direction:column; \n  padding:0.5rem; \n  align-items:center; \n  flex-wrap:wrap;\n  @media(min-width: 569px){ flex-direction: row; justify-content:center;}  \n  "]);return m=function(){return e},e}function g(){var e=Object(r.a)(["display:inline; padding: 0.25rem; margin:0.5rem; border-radius:0.25rem; border: 1px solid ",";"]);return g=function(){return e},e}function h(){var e=Object(r.a)(["display:inline; padding: 0.25rem; margin:0.5rem; border-radius:0.25rem; border: 1px solid ",";"]);return h=function(){return e},e}function j(){var e=Object(r.a)(["display:inline"]);return j=function(){return e},e}function v(){var e=Object(r.a)(["border:0;cursor:pointer; overflow: visible; font-size: 16px; padding: 0.3rem;background-color:","; color:",""]);return v=function(){return e},e}function x(){var e=Object(r.a)(["letter-spacing: 0.08rem; font-weight:700; cursor: pointer;color:",""]);return x=function(){return e},e}function O(){var e=Object(r.a)(["margin-left: 1rem"]);return O=function(){return e},e}function w(){var e=Object(r.a)(["color:",""]);return w=function(){return e},e}function y(){var e=Object(r.a)(["color: ",""]);return y=function(){return e},e}function E(){var e=Object(r.a)(["\n  display: flex;\n  min-height: 4.2rem;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: ",";\n  border: 0;\n\n  @media(min-width: 569px){\n      flex-direction: row;\n  }\n  \n"]);return E=function(){return e},e}function z(){var e=Object(r.a)(["\n    font-size: 1.5rem;\n    color: ",";\n    font-family: 'Lato', sans-serif;\n    "]);return z=function(){return e},e}function k(){var e=Object(r.a)(["\ndisplay: flex;\nwidth: 100%;\nflex-direction: row;\njustify-content: space-evenly;\nalign-items: center;\npadding: 4vh 0;\n\n@media(max-width: 568px) {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n"]);return k=function(){return e},e}function A(){var e=Object(r.a)(["\nwidth:100%;\noverflow-y: hidden;\noverflow-x: auto;\nbox-shadow: inset 0 1px 1px rgba(200,200,200,0.11);\n\n@media(max-width: 300px){display:block};\n\n@media(min-width: 569px){ overflow-y: visible;}"]);return A=function(){return e},e}function F(){var e=Object(r.a)(["\n  width: 96%;\n  border-radius: 0.25rem;\n  border: 1px solid #3c5063;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.15), \n              0 2px 2px rgba(0,0,0,0.15), \n              0 4px 4px rgba(0,0,0,0.15), \n              0 8px 8px rgba(0,0,0,0.15);\n  font-size: 1rem;\n  line-height:1.5;\n  font-family: 'Lato', sans-serif;\n  margin: 1vw 1vw;\n  @media(max-width:569px){ font-size: calc( 12px + 4 * ((100vw - 320px) / 249))}\n\n"]);return F=function(){return e},e}function B(){var e=Object(r.a)(["\n  overflow-y: auto;\n  display: flex;\n  min-height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 20vh;\n  width: 100%;\n  max-width:800px;\n  margin: 0 auto;\n"]);return B=function(){return e},e}function C(){var e=Object(r.a)(["\nopacity: 0.5;\ncursor: default;\n&:hover{color:gold;background-color:transparent;border-color:gold;}\n"]);return C=function(){return e},e}function S(){var e=Object(r.a)(["\ndisplay: inline-block;\nfont-weight: 700;\ntext-align: center;\nwhite-space: nowrap;\nvertical-align: middle;\nuser-select: none;\nborder: 1px solid #C2F1DB;\npadding: .375rem 3rem;\nmargin: 0.5rem;\nfont-size: 1rem;\nline-height: 1.5;\nborder-radius: .25rem;\noverflow: visible;\ncolor:#C2F1DB;\nbackground-color:transparent;\ncursor: pointer;\ntransition: color .3s ease-in-out,background-color .3s ease-in-out,border-color .3s ease-in-out,box-shadow .3s ease-in-out;\n&:hover, &:focus{\n  color: #495F75;\n  outline:none;\n  background-color: #C2F1DB;\n  border-color: transparent;\n}\n\n"]);return S=function(){return e},e}function D(){var e=Object(r.a)(["margin 0 1rem; color: grey;"]);return D=function(){return e},e}var M=a.b.div(D()),U=a.b.button(S()),L=Object(a.b)(U)(C()),W={App:a.b.div(B()),tableWrapper:a.b.main(F()),table:a.b.table(A())},I={wrapper:a.b.header(k()),page:a.b.a.attrs((function(e){return{href:"https://unamo.com/pl/",target:"_blank",rel:"noopener"}}))(z(),"rgb(0, 193, 179)")},H={wrapper:a.b.div(E(),"#495F75"),successMessage:Object(a.b)(M)(y(),"#39ff14"),dangerMessage:Object(a.b)(M)(w(),"#FBEA58"),btn:U,btn_disabled:L,btnText:a.b.span(O()),iconCheck:function(){return o.a.createElement("span",{className:"IcoMoon"},"\ue900")},iconCross:function(){return o.a.createElement("span",{className:"IcoMoon"},"\ue902")},iconLimit:function(){return o.a.createElement("span",{className:"IcoMoon"},"\ue901")}},N={dangerMessage:a.b.span(x(),"#FBEA58"),input:a.b.input(v(),"#C2F1DB","#495F75"),resetWrapper:a.b.div(j()),innerWrapper:a.b.div(h(),"#C2F1DB"),inputWrapper:a.b.div(g(),"#C2F1DB"),outerWrapper:a.b.form(m()),btn:U},T={wrapper:a.b.thead(p(),"#495F75","#C2F1DB"),sectionStyle:a.b.th(f()),section:function(e){return o.a.createElement(T.sectionStyle,{className:"icon-Sort"},e.children)}},P={emailCell:a.b.div(b()),middleAligned:a.b.td(s()),middleAlignedTop:a.b.td(d()),circle:a.b.span(l(),"30px","30px","#5A5D50","#FBEA58"),button:a.b.button.attrs((function(e){return{type:"button","aria-label":"delete"}}))(c())};Object(a.a)(u())},94:function(e,n,t){"use strict";t.d(n,"d",(function(){return o})),t.d(n,"b",(function(){return u})),t.d(n,"e",(function(){return c})),t.d(n,"a",(function(){return l}));var r=t(116),a=t.n(r);t(120),t(122);a.a.initializeApp({apiKey:"AIzaSyDgXLfP7jDz8fFkgSexTngIupiNaabkJSc",authDomain:"unamo-1dbf1.firebaseapp.com",databaseURL:"https://unamo-1dbf1.firebaseio.com",projectId:"unamo-1dbf1",storageBucket:"unamo-1dbf1.appspot.com",messagingSenderId:"741997107372",appId:"1:741997107372:web:66630afae593423b17e709"});var i=a.a.database(),o=i.ref("items"),u=i.ref(".info/connected"),c=new a.a.auth.GoogleAuthProvider,l=a.a.auth();n.c=a.a}}]);
//# sourceMappingURL=9.dda9bf2c.chunk.js.map