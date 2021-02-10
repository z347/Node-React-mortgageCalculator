(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{191:function(e,t,n){"use strict";n.r(t);var a=n(113),i=n(0),o=n(184),r=n(186),c=n(80),s=n(42),l=n(131),d=n(195),u=n(105),m=n(193),b=n(4),p=function(){var e=Object(l.a)(),t=e.register,n=e.handleSubmit,o=e.errors,r=Object(i.useState)(0),c=Object(a.a)(r,2),p=c[0],j=c[1],O=Object(i.useState)(0),g=Object(a.a)(O,2),h=(g[0],g[1]),f=Object(i.useState)(null),v=Object(a.a)(f,2),y=v[0],x=v[1],C=Object(s.c)((function(e){return e.activeBank})).payload,w=C.interestRate,k=C.loanTerm,S=p*(w/12*Math.pow(1+w/12,k)),I=Math.pow(1+w/12,k)-1,L=function(e,t){t.preventDefault(),e.initialLoan?j(e.initialLoan):(h(e.downPayment),x(S/I/k))},N=Object(b.jsxs)("form",{onSubmit:n(L),children:[Object(b.jsx)(d.a,{label:"Initial loan *",id:"initialLoan",name:"initialLoan",type:"number",variant:"outlined",inputRef:t({required:!0,min:1,max:C.maximumLoan})}),o.initialLoan&&"required"===o.initialLoan.type&&Object(b.jsx)(m.a,{severity:"error",children:"Initial loan is required"}),o.initialLoan&&"max"===o.initialLoan.type&&Object(b.jsx)(m.a,{severity:"error",children:"The bank does not lend so much money"}),o.initialLoan&&"min"===o.initialLoan.type&&Object(b.jsx)(m.a,{severity:"error",children:"The minimum loan amount: 1$"}),Object(b.jsx)(u.a,{variant:"contained",size:"large",color:"primary",type:"submit",children:"Next step"})]},"initialLoanJSX"),P=Object(b.jsxs)("form",{onSubmit:n(L),children:[Object(b.jsx)(d.a,{label:"Down payment *",id:"downPayment",name:"downPayment",type:"number",variant:"outlined",inputRef:t({required:!0,max:.99*p,min:p/100*C.minimumDownPayment})}),o.downPayment&&Object(b.jsx)(m.a,{severity:"error",children:"Down payment is required"}),o.downPayment&&"min"===o.downPayment.type&&Object(b.jsxs)(m.a,{severity:"error",children:["The minimum down payment is ",C.minimumDownPayment," %"]}),o.downPayment&&"max"===o.downPayment.type&&Object(b.jsx)(m.a,{severity:"error",children:"You don't need credit"}),Object(b.jsx)(u.a,{variant:"contained",size:"large",color:"primary",type:"submit",children:"Submit"})]},"downPaymentJSX"),T=Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Monthly mortgage payment"}),Object(b.jsxs)("p",{children:[y," $"]})]},"monthlyMortgagePaymentJSX"),R=Object(b.jsx)(u.a,{variant:"contained",color:"primary",size:"large",onClick:function(){j(0),h(0),x(null)},children:"Reset data"},"resetJSX"),B=null!==y?[R]:0===p?[N]:[P],D=null!==y?[T]:null;return Object(b.jsxs)(b.Fragment,{children:[B,D]})},j=n(196),O=n(2),g=n(19),h=n(1),f=(n(8),n(5)),v=n(10),y=n(82),x=n(121),C=n(27),w=n(140),k=n(18),S="undefined"===typeof window?i.useEffect:i.useLayoutEffect,I=i.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,o=e.autoFocus,r=void 0!==o&&o,c=e.button,s=void 0!==c&&c,l=e.children,d=e.classes,u=e.className,m=e.component,b=e.ContainerComponent,p=void 0===b?"li":b,j=e.ContainerProps,g=(j=void 0===j?{}:j).className,v=Object(O.a)(j,["className"]),I=e.dense,L=void 0!==I&&I,N=e.disabled,P=void 0!==N&&N,T=e.disableGutters,R=void 0!==T&&T,B=e.divider,D=void 0!==B&&B,E=e.focusVisibleClassName,M=e.selected,A=void 0!==M&&M,G=Object(O.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),J=i.useContext(w.a),V={dense:L||J.dense||!1,alignItems:a},$=i.useRef(null);S((function(){r&&$.current&&$.current.focus()}),[r]);var q=i.Children.toArray(l),z=q.length&&Object(x.a)(q[q.length-1],["ListItemSecondaryAction"]),F=i.useCallback((function(e){$.current=k.findDOMNode(e)}),[]),X=Object(C.a)(F,t),H=Object(h.a)({className:Object(f.a)(d.root,u,V.dense&&d.dense,!R&&d.gutters,D&&d.divider,P&&d.disabled,s&&d.button,"center"!==a&&d.alignItemsFlexStart,z&&d.secondaryAction,A&&d.selected),disabled:P},G),W=m||"li";return s&&(H.component=m||"div",H.focusVisibleClassName=Object(f.a)(d.focusVisible,E),W=y.a),z?(W=H.component||m?W:"div","li"===p&&("li"===W?W="div":"li"===H.component&&(H.component="div")),i.createElement(w.a.Provider,{value:V},i.createElement(p,Object(h.a)({className:Object(f.a)(d.container,g),ref:X},v),i.createElement(W,H,q),q.pop()))):i.createElement(w.a.Provider,{value:V},i.createElement(W,Object(h.a)({ref:X},H),q))})),L=Object(v.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(I),N=i.forwardRef((function(e,t){var n,a=e.classes,o=e.className,r=e.component,c=void 0===r?"li":r,s=e.disableGutters,l=void 0!==s&&s,d=e.ListItemClasses,u=e.role,m=void 0===u?"menuitem":u,b=e.selected,p=e.tabIndex,j=Object(O.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==p?p:-1),i.createElement(L,Object(h.a)({button:!0,role:m,tabIndex:n,component:c,selected:b,disableGutters:l,classes:Object(h.a)({dense:a.dense},d),className:Object(f.a)(a.root,o,b&&a.selected,!l&&a.gutters),ref:t},j))})),P=Object(v.a)((function(e){return{root:Object(h.a)({},e.typography.body1,Object(g.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(h.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(N),T=n(180),R=n(190),B=n(47);var D=n(78),E=Object(D.a)((function(e){return{container:{marginTop:e.spacing(15),backgroundColor:e.palette.grey[300],textAlign:"center"},paper:{flexGrow:1,height:"100%",backgroundColor:"primary"},title:{paddingTop:e.spacing(5),marginBottom:e.spacing(5)},button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(5),minWidth:120}}})),M=function(e){var t=e.parentCallback,n=Object(s.b)(),o=E(),r=Object(i.useState)(""),c=Object(a.a)(r,2),l=c[0],d=c[1],u=Object(i.useState)(!1),m=Object(a.a)(u,2),p=m[0],O=m[1],g=Object(s.c)((function(e){return e.list})).payload,h=function(e){return n(function(e){return{type:B.a,payload:e}}(e))};return Object(b.jsxs)(T.a,{className:o.formControl,children:[Object(b.jsx)(j.a,{id:"select-bank",children:"Bank"}),Object(b.jsx)(R.a,{labelId:"select-bank",id:"select-bank",open:p,onClose:function(){return O(!1)},onOpen:function(){return O(!0)},value:l,onChange:function(e){d(e.target.value),t(!0)},children:g.map((function(e){return Object(b.jsx)(P,{value:e.name,onClick:function(){return h(e)},children:e.name},e._id)}))})]})},A=function(){var e=E(),t=Object(i.useState)(!1),n=Object(a.a)(t,2),s=n[0],l=n[1],d=s?Object(b.jsx)(p,{}):null;return Object(b.jsx)(r.a,{maxWidth:"md",children:Object(b.jsx)("div",{className:e.container,children:Object(b.jsxs)(c.a,{className:e.paper,elevation:2,children:[Object(b.jsx)(o.a,{variant:"h4",component:"h2",gutterBottom:!0,className:e.title,children:"Calculator form"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(M,{parentCallback:function(e){return l(e)}}),d]})]})})})};t.default=function(){return Object(b.jsx)(A,{})}}}]);
//# sourceMappingURL=6.25bd614c.chunk.js.map