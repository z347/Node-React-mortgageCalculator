(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{30:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="GET_LIST_REQUEST_IS_LOADING",a="GET_LIST_REQUEST_IS_SUCCESS",c="GET_LIST_REQUEST_IS_ERROR"},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="DELETE_BANK_REQUEST_IS_LOADING",a="DELETE_BANK_REQUEST_IS_SUCCESS",c="DELETE_BANK_REQUEST_IS_ERROR"},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="CREATE_BANK_IS_LOADING",a="CREATE_BANK_IS_SUCCESS",c="CREATE_BANK_IS_ERROR"},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="EDIT_BANK_REQUEST_IS_LOADING",a="EDIT_BANK_REQUEST_IS_SUCCESS",c="EDIT_BANK_REQUEST_IS_ERROR"},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="SET_ACTIVE_BANK"},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(78),a=n(79),c=n(4),i=Object(r.a)((function(){return{container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"5rem"}}})),o=function(){var e=i();return Object(c.jsx)("div",{className:e.container,children:Object(c.jsx)(a.a,{})})}},77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),i=n.n(c),o=n(42),l=n(23),u=n(106),s=(n(72),n(17)),d=n(55),b=n(56),j=n(57),O=Object(j.createLogger)({duration:!0,collapsed:!0,colors:{title:function(){return"#139BFE"},prevState:function(){return"#1C5FAF"},action:function(){return"#149945"},nextState:function(){return"#A47104"},error:function(){return"#FF0005"}}}),g=n(3),f=n(30),E={loading:!1,payload:[{_id:"plug",name:"plug",interestRate:0,maximumLoan:0,minimumDownPayment:0,loanTerm:0}],error:!1};var S=n(31),_={loading:!1,delete:!1,error:!1};var h=n(32),m={loading:!1,success:!1,error:!1};var v=n(33),p={loading:!1,edit:!1,error:!1};var T=n(47),x={payload:{_id:"plug",name:"plug",interestRate:0,maximumLoan:0,minimumDownPayment:0,loanTerm:0}};var I=Object(s.combineReducers)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.b:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading});case f.c:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,payload:t.payload});case f.a:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,error:t.error});default:return e}},deleteBank:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.b:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading});case S.c:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,delete:t.delete});case S.a:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,error:t.error});default:return e}},createBank:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.b:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading});case h.c:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,success:t.success});case h.a:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,error:t.error});default:return e}},editBank:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.b:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading});case v.c:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,edit:t.edit});case v.a:return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading,error:t.error});default:return e}},activeBank:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.a:return Object(g.a)(Object(g.a)({},e),{},{payload:t.payload});default:return e}}}),R=[d.a,O],N=Object(b.composeWithDevTools)(s.applyMiddleware.apply(void 0,R)),y="this-react-application-local-store",A=localStorage.getItem(y),B=A?JSON.parse(A):null,C=B?Object(s.createStore)(I,B,N):Object(s.createStore)(I,N);C.subscribe((function(){var e=C.getState();localStorage.setItem(y,JSON.stringify(e))}));var D=n(6),L=n(48),U=n(4),w=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,189))})),K=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,191))})),F=Object(D.f)((function(){return Object(U.jsx)(r.Suspense,{fallback:L.a,children:Object(U.jsxs)(D.c,{children:[Object(U.jsx)(D.a,{exact:!0,path:"/",component:w}),Object(U.jsx)(D.a,{exact:!0,path:"/calculator",component:K})]})})})),Q=n(105),k=n(103),G=n(104),P=n(78),J=Object(P.a)((function(e){return{button:{marginRight:e.spacing(2)},a:{color:"inherit",textDecoration:"inherit"},linkTitle:{color:"inherit",textDecoration:"inherit",fontSize:"1.25rem"}}})),z=function(){var e=J();return Object(U.jsx)(k.a,{position:"fixed",children:Object(U.jsxs)(G.a,{variant:"dense",children:[Object(U.jsx)(Q.a,{variant:"outlined",color:"inherit",className:e.button,children:Object(U.jsx)(l.b,{to:"/",className:e.a,children:"Home"})}),Object(U.jsx)(Q.a,{variant:"outlined",color:"inherit",className:e.button,children:Object(U.jsx)(l.b,{to:"/calculator",className:e.a,children:"Calculator"})})]})})},H=(Object(D.f)(z),function(){return Object(U.jsx)(o.a,{store:C,children:Object(U.jsxs)(l.a,{children:[Object(U.jsx)(u.a,{}),Object(U.jsx)(z,{}),Object(U.jsx)("main",{children:Object(U.jsx)(F,{})})]})})}),M=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,188)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(U.jsx)(H,{}),document.getElementById("root")),M()}},[[77,2,3]]]);
//# sourceMappingURL=main.d7f872ad.chunk.js.map