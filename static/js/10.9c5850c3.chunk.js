(this.webpackJsonpfirebase=this.webpackJsonpfirebase||[]).push([[10],{155:function(e,a,t){"use strict";var o=t(3),r=t(1),i=t(0),n=(t(8),t(33)),c=t(55),l=i.forwardRef((function(e,a){var t=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=e.square,p=void 0!==d&&d,h=e.elevation,u=void 0===h?1:h,m=e.variant,b=void 0===m?"elevation":m,g=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return i.createElement(s,Object(r.a)({className:Object(n.a)(t.root,c,"outlined"===b?t.outlined:t["elevation".concat(u)],!p&&t.rounded),ref:a},g))}));a.a=Object(c.a)((function(e){var a={};return e.shadows.forEach((function(e,t){a["elevation".concat(t)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},a)}),{name:"MuiPaper"})(l)},277:function(e,a,t){"use strict";var o=t(1),r=t(3),i=t(0),n=(t(8),t(33)),c=t(55),l=t(91),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=i.forwardRef((function(e,a){var t=e.align,c=void 0===t?"inherit":t,d=e.classes,p=e.className,h=e.color,u=void 0===h?"initial":h,m=e.component,b=e.display,g=void 0===b?"initial":b,y=e.gutterBottom,f=void 0!==y&&y,v=e.noWrap,O=void 0!==v&&v,j=e.paragraph,w=void 0!==j&&j,N=e.variant,x=void 0===N?"body1":N,E=e.variantMapping,k=void 0===E?s:E,C=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),R=m||(w?"p":k[x]||s[x])||"span";return i.createElement(R,Object(o.a)({className:Object(n.a)(d.root,p,"inherit"!==x&&d[x],"initial"!==u&&d["color".concat(Object(l.a)(u))],O&&d.noWrap,f&&d.gutterBottom,w&&d.paragraph,"inherit"!==c&&d["align".concat(Object(l.a)(c))],"initial"!==g&&d["display".concat(Object(l.a)(g))]),ref:a},C))}));a.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},304:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var o=t(0),r=t.n(o),i=t(1),n=t(89),c=t(17);var l=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)(e,Object(i.a)({defaultTheme:c.a},a))},s=t(3),d=(t(8),t(33)),p=t(155),h=t(55),u=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.raised,c=void 0!==n&&n,l=Object(s.a)(e,["classes","className","raised"]);return o.createElement(p.a,Object(i.a)({className:Object(d.a)(t.root,r),elevation:c?8:1,ref:a},l))})),m=Object(h.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u),b=t(305),g=o.forwardRef((function(e,a){var t=e.children,r=e.classes,n=e.className,c=e.focusVisibleClassName,l=Object(s.a)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(b.a,Object(i.a)({className:Object(d.a)(r.root,n),focusVisibleClassName:Object(d.a)(c,r.focusVisible),ref:a},l),t,o.createElement("span",{className:r.focusHighlight}))})),y=Object(h.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(g),f=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.component,c=void 0===n?"div":n,l=Object(s.a)(e,["classes","className","component"]);return o.createElement(c,Object(i.a)({className:Object(d.a)(t.root,r),ref:a},l))})),v=Object(h.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(f),O=["video","audio","picture","iframe","img"],j=o.forwardRef((function(e,a){var t=e.children,r=e.classes,n=e.className,c=e.component,l=void 0===c?"div":c,p=e.image,h=e.src,u=e.style,m=Object(s.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==O.indexOf(l),g=!b&&p?Object(i.a)({backgroundImage:'url("'.concat(p,'")')},u):u;return o.createElement(l,Object(i.a)({className:Object(d.a)(r.root,n,b&&r.media,-1!=="picture img".indexOf(l)&&r.img),ref:a,style:g,src:b?p||h:void 0},m),t)})),w=Object(h.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(j),N=t(277),x=l({root:{maxWidth:300,position:"fixed",right:"1vw",top:"1vh",backgroundColor:"#1995AD",color:"white",boxShadow:"0 0 1px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0, 0.6), 0 0 4px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.6),0 0 16px rgba(0,0,0,0.6)"},media:{height:60,width:60,margin:"0 auto",backgroundSize:"contain",color:"white"}});function E(e){var a=x(),t=e.user;return t?r.a.createElement(m,{className:a.root},r.a.createElement(y,null,r.a.createElement(w,{className:a.media,image:t.photoURL,title:"user photo",component:"img"}),r.a.createElement(v,null,r.a.createElement(N.a,{gutterBottom:!0,variant:"h6",component:"h2"},t.displayName||t.email),r.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},t.email||t.displayName)))):null}}}]);
//# sourceMappingURL=10.9c5850c3.chunk.js.map