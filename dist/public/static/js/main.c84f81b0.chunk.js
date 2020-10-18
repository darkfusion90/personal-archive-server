(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{198:function(e,t){},200:function(e,t){},234:function(e,t,a){e.exports=a(434)},239:function(e,t,a){},434:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"login",(function(){return b})),a.d(n,"logout",(function(){return h})),a.d(n,"status",(function(){return O})),a.d(n,"register",(function(){return y}));var r={};a.r(r),a.d(r,"getPosts",(function(){return x})),a.d(r,"getPostById",(function(){return w})),a.d(r,"createPost",(function(){return F})),a.d(r,"deletePost",(function(){return P}));var c=a(0),o=a.n(c),i=a(15),l=a.n(i),u=(a(239),a(28)),s=a(17),m=a(527),f=a(198),p=a.n(f),g=a(199),d=a.n(g).a.create({withCredentials:!0}),b=function(e){return d.post("/api/auth/login",e)},h=function(){return d.post("/api/auth/logout")},E=a(16),v=a.n(E),j=a(21),O=function(){var e=Object(j.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/api/auth/status");case 2:return t=e.sent,e.abrupt("return",{user:(a=t.data).user,loggedIn:a.loggedIn});case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){return d.post("/api/auth/register",e)},S=function(e){return{id:e._id,title:e.title,userId:e.userId,link:e.link,comment:e.comment,tags:e.tags,createdAt:new Date(e.createdAt),updatedAt:new Date(e.updatedAt)}};function k(e){var t=e.query,a=e.tags,n=e.sort,r=e.order,c={};return t&&(c.query=t),n&&(c.sort=n),r&&(c.order=r),a&&(c.tags=a),Object.keys(c).map((function(e){return"".concat(e,"=").concat(c[e])})).join("&")}var x=function(){var e=Object(j.a)(v.a.mark((function e(){var t,a,n,r=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.next=3,d.get("/api/posts?".concat(k(t)));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.posts.map(S));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/api/posts/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",S(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/api/posts/",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",S(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.delete("/api/posts/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(s.b)("updateAccountAsync",n.status);function I(e){var t=e.response;if(t)return{data:t.data,status:t.status,statusText:t.statusText}}var C=Object(s.b)("loginAsync",function(){var e=Object(j.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.login(t);case 3:return e.abrupt("return",e.sent.data);case 6:return e.prev=6,e.t0=e.catch(0),console.log("Login Error: ",e.t0),console.log("Response: ",e.t0.response),e.abrupt("return",a.rejectWithValue(I(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(s.b)("logoutAsync",n.logout),T=Object(s.b)("createAccountAsync",function(){var e=Object(j.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.register(t);case 3:return e.abrupt("return",e.sent.data);case 6:return e.prev=6,e.t0=e.catch(0),console.log("Register Error: ",e.t0),console.log("Response: ",e.t0.response),e.abrupt("return",a.rejectWithValue(I(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(s.d)({name:"account-slice",initialState:{account:{loggedIn:!1}},reducers:{},extraReducers:function(e){e.addCase(N.fulfilled,(function(e,t){e.account=t.payload}))}}).reducer,q=(p.a,Object(s.c)()),W=function(e){return e.filter},R=Object(s.b)("getAllPostsAsync",(function(e,t){var a=t.getState,n=e||W(a()),c=n.query,o=n.sort,i=n.order,l=n.tags;return r.getPosts({query:c,sort:o,order:i,tags:(l||[]).map((function(e){return e})).join(",")})})),D=Object(s.b)("createPostAsync",r.createPost),M=Object(s.b)("deletePostAsync",function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.deletePost(t);case 3:return e.abrupt("return",t);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),B=Object(s.d)({name:"posts-slice",initialState:q.getInitialState(),reducers:{},extraReducers:function(e){e.addCase(R.fulfilled,q.setAll),e.addCase(M.fulfilled,q.removeOne)}}).reducer,z=a(200),H=(a.n(z).a,Object(s.d)({name:"post-filters",initialState:{sort:"title",order:"asc",tags:[]},reducers:{setFilter:function(e,t){return t.payload}}})),U=H.actions.setFilter,V=H.reducer,G=(H.actions,a(150)),_=function(e,t){return e.fulfilled.match(t)},J=[function(e){return function(t){return function(a){var n=_(C,a),r=_(A,a),c=_(T,a);(n||r||c)&&e.dispatch(N()),t(a)}}}],Q=[function(e){var t=e.dispatch;return function(e){return function(a){U.match(a)&&t(R(a.payload)),e(a)}}}],Y=[].concat(Object(G.a)(J),Object(G.a)(Q)),K=Object(s.a)({reducer:{account:L,posts:B,filter:V,form:m.a},middleware:Object(s.e)({serializableCheck:!1}).concat(Y)}),X=function(){return Object(u.c)()},Z=K,$=a(218),ee=a(489),te=a(490),ae=Object($.a)({palette:{type:"dark",background:{default:"#121212",paper:"#0e0e0e"},primary:{main:ee.a[500],contrastText:"#fff"},secondary:{main:te.a[500]},text:{primary:"#fff"},action:{focus:"#f00"}}}),ne=a(519),re=a(59),ce=a(520),oe=a(75),ie=a(36),le=a(23),ue=a(9),se=function(e){return function(e){return e.account}(e).account},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{autoFetch:!1},t=e.autoFetch,a=o.a.useState("uninitiated"),n=Object(ue.a)(a,2),r=n[0],c=n[1],i=X();o.a.useEffect((function(){function e(){return(e=Object(j.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return c("loading"),e.next=4,i(N()).then(s.f).then((function(e){return c("success")})).catch((function(e){return c("fail")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,t]);var l=Object(u.d)(se);return[l,{login:function(e){return i(C(e))},logout:function(){return i(A())},createAccount:function(e){return i(T(e))},updateAccount:function(){return i(N())}},{loading:"loading"===r,success:"success"===r,failure:"fail"===r,uninitiated:"uninitiated"===r}]},fe=a(494),pe=a(62),ge=a(492),de=a(529),be=a(493),he=Object(ge.a)(Object(de.a)({root:{height:"100%"},typography:{fontFamily:"Caveat"}})),Ee=function(){var e=he();return o.a.createElement(o.a.Fragment,null,o.a.createElement(be.a,null),o.a.createElement(fe.a,{container:!0,direction:"column",alignItems:"center",justify:"center",className:e.root},o.a.createElement(pe.a,{variant:"h4",className:e.typography},"Personal Archive")))},ve=a(513),je=a(507),Oe=a(512),ye=a(441),Se=a(503),ke=a(504),xe=a(121),we=a(33),Fe=a(2),Pe=a(207),Ne=a.n(Pe),Ie=Object(ge.a)((function(e){return Object(de.a)({highlight:{backgroundColor:e.palette.secondary.main}})}));var Ce=function(e){var t=e.query,a=e.text,n=Object(we.a)(e,["query","text"]),r=Ie(),c=function(e){var t=Object(Fe.a)(n.className,e.className);return o.a.createElement(pe.a,Object.assign({},n,e,{className:t}))};if(!t||!a)return o.a.createElement(c,null,a);return o.a.createElement(c,null,function(e,t){if("string"!==typeof e||"string"!==typeof t)return[];var a=t.trim().toLowerCase(),n=e.toLowerCase(),r=a.length;if(0===n.length&&0===r)return[];var c=[],o=n.indexOf(a);for(;o>-1;)c.push([o,o+r]),o=n.indexOf(t,o+r);return Ne()(e,c)}(a,t).map((function(e){var t=e.text;return e.highlight?function(e){return o.a.createElement(c,{component:"span",className:r.highlight},e)}(t):function(e){return o.a.createElement(c,{component:"span"},e)}(t)})))},Ae=function(){var e=X();return[Object(u.d)(W),{setFilter:function(t){return e(U(t))}}]},Te=Object(ge.a)((function(e){return Object(de.a)({root:{fontWeight:e.typography.fontWeightBold,color:"inherit",textDecoration:"none",transition:"0.8s color ease-out",outline:0,"&:hover":{textDecoration:"none",color:xe.a[800]}}})})),Le=function(e){var t=e.post,a=Te(),n=Ae(),r=Object(ue.a)(n,1)[0].query;return o.a.createElement(Ce,{className:a.root,variant:"h5",component:"a",href:t.link||"#",target:"_blank",text:t.title,query:r})},qe=function(e){var t=e.post.comment,a=Ae(),n=Object(ue.a)(a,1)[0].query;return o.a.createElement(Ce,{paragraph:!0,text:t,query:n})},We=a(27),Re=a(208),De=a.n(Re),Me=a(217),Be=a(530),ze=Object(ge.a)((function(e){return Object(de.a)({root:{display:"inline-flex",flexWrap:"wrap","& > *":{margin:e.spacing(.5)},marginLeft:"-".concat(e.spacing(.5),"px")},tag:{color:e.palette.primary.light}})})),He=function(e){var t=e.post.tags,a=ze();if(0===t.length)return null;var n=t.length-5;return o.a.createElement("div",{className:a.root},t.slice(0,Math.min(5,t.length)).map((function(e){return o.a.createElement(Be.a,{clickable:!0,className:a.tag,size:"small",variant:"outlined",color:"primary",label:e,component:"a",href:"http://localhost:7000",target:"_blank"})})),n>0?o.a.createElement(pe.a,null,"+ ",n," tags"):null)},Ue=Object(ge.a)((function(e){return Object(de.a)({dotSeparator:Object(We.a)({},e.typography.subtitle2)})})),Ve=function(e){var t=e.post,a=Ue(),n=Object(Me.a)(t.createdAt,"MMM dd, yyyy");return o.a.createElement(fe.a,{container:!0,wrap:"nowrap",alignItems:"center",alignContent:"center",spacing:2},o.a.createElement(fe.a,{item:!0,wrap:"nowrap"},o.a.createElement(pe.a,{color:"textSecondary"},n)),t.tags.length>0&&o.a.createElement(fe.a,{item:!0},o.a.createElement(De.a,{className:a.dotSeparator})),o.a.createElement(fe.a,{item:!0},o.a.createElement(He,{post:t})))},Ge=function(e){var t=e.post;return o.a.createElement(o.a.Fragment,null,o.a.createElement(qe,{post:t}),o.a.createElement(Ve,{post:t}))},_e=a(210),Je=a.n(_e),Qe=a(498),Ye=a(497),Ke=a(528),Xe=a(499),Ze=a(500),$e=a(501),et=a(502),tt=a(495),at=q.getSelectors((function(e){return e.posts})),nt=at.selectAll,rt=at.selectById;at.selectTotal;function ct(e){return function(t){if(e.fulfilled.match(t))return t.payload;if(e.rejected.match(t))throw t.payload;return t}}var ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{autoFetch:!1},t=e.autoFetch,a=o.a.useState("uninitiated"),n=Object(ue.a)(a,2),r=n[0],c=n[1],i=o.a.useState(),l=Object(ue.a)(i,2),s=l[0],m=l[1],f=X();o.a.useEffect((function(){function e(){return(e=Object(j.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return c("loading"),e.next=4,f(R()).then(ct).then((function(e){return c("success")})).catch((function(e){c("fail"),m(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,t]);var p=Object(u.d)(nt);return[p,{updateAllPosts:function(){return f(R())},createPost:function(e){return f(D(e))}},{loading:"loading"===r,success:"success"===r,failure:"fail"===r,uninitiated:"uninitiated"===r,error:s}]},it=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{autoFetch:!1},a=t.autoFetch,n=ot({autoFetch:a}),r=Object(ue.a)(n,3),c=(r[0],r[1],r[2]),o=Object(u.d)((function(t){return rt(t,e)})),i=X();return[o,{deletePost:function(){return i(M(e))}},c]},lt=a(496),ut=Object(ge.a)((function(e){return Object(de.a)({stateIcon:{marginRight:e.spacing(1.5),verticalAlign:"middle"}})})),st=function(e){var t=e.loading,a=void 0!==t&&t,n=e.children,r=Object(we.a)(e,["loading","children"]),c=ut();return o.a.createElement(tt.a,Object.assign({},r,{disabled:a}),a&&o.a.createElement(lt.a,{thickness:8,size:14,className:c.stateIcon}),n)},mt=Object(ge.a)((function(e){return Object(de.a)({root:{marginTop:e.spacing(1)}})})),ft=function(e){var t=e.post,a=mt(),n=it(t.id),r=Object(ue.a)(n,2),c=(r[0],r[1].deletePost),i=o.a.useState(!1),l=Object(ue.a)(i,2),u=l[0],m=l[1],f=function(){return m(!1)},p=Object(re.b)().enqueueSnackbar,g=o.a.useState("uninitiated"),d=Object(ue.a)(g,2),b=d[0],h=d[1],E=function(){var e=Object(j.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h("loading"),e.prev=1,e.next=4,c().then(s.f);case 4:h("success"),p("Post deleted successfully",{variant:"success"}),setTimeout(f,500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),h("fail"),p("Error deleting post",{variant:"error"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ye.a,{title:"Delete Post (clicking will prompt a confirmation)"},o.a.createElement(Qe.a,{className:a.root,onClick:function(){return m(!0)}},o.a.createElement(Je.a,null))),o.a.createElement(Ke.a,{open:u,onClose:f},o.a.createElement(Xe.a,null,'Delete Post titled "'.concat(t.title,'"?')),o.a.createElement(Ze.a,null,o.a.createElement($e.a,null,"This action cannot be undone")),o.a.createElement(et.a,null,o.a.createElement(tt.a,{onClick:f},"Don't Delete"),o.a.createElement(st,{disableElevation:!0,loading:"loading"===b,variant:"contained",color:"primary",onClick:E},"Delete Post"))))},pt=Object(ge.a)((function(e){return Object(de.a)({postActionRoot:{height:"100%"}})})),gt=function(e){var t=e.post,a=e.autoFocus,n=e.className,r=pt(),c=o.a.useState(!1),i=Object(ue.a)(c,2),l=i[0],u=i[1];return o.a.useEffect((function(){a&&!l&&(console.log("Will highlight: ",t),setTimeout((function(){u(!0)}),3e3))}),[t,a,l,u]),o.a.createElement(ye.a,{className:n,autoFocus:a,selected:a&&!l},o.a.createElement(Se.a,{primary:o.a.createElement(Le,{post:t}),secondary:o.a.createElement(Ge,{post:t}),secondaryTypographyProps:{component:"div"}}),o.a.createElement(ke.a,{className:r.postActionRoot},o.a.createElement(ft,{post:t})))},dt=a(505),bt=a(211),ht=a.n(bt),Et=Object(ge.a)((function(e){return Object(de.a)({fab:{position:"fixed",right:e.spacing(4),bottom:e.spacing(4),zIndex:999}})})),vt=function(){var e=Et(),t=Object(le.g)();return o.a.createElement(dt.a,{className:e.fab,color:"secondary",onClick:function(){return t.push(Pa.createPost.path)}},o.a.createElement(ht.a,null))},jt=a(506),Ot=function(e){return o.a.createElement(jt.a,Object.assign({animation:"wave"},e))},yt=function(e){var t=e.skeletons,a=void 0===t?10:t,n=e.itemClassName,r=void 0===n?"":n,c=e.subheader;return o.a.createElement(je.a,null,c,Array(a).fill(null).map((function(){return o.a.createElement(ye.a,{className:r},o.a.createElement(Se.a,{primary:o.a.createElement(Ot,null),secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(Ot,{variant:"rect",height:64}),o.a.createElement(Ot,null))}))})))},St=Object(ge.a)((function(e){return Object(de.a)({root:{textDecoration:"none",transition:"0.8s color ease-out",outline:0,"&:hover":{textDecoration:"none",color:xe.a[800]}}})})),kt=function(e){var t=e.className,a=e.to,n=Object(we.a)(e,["className","to"]),r=St();return o.a.createElement(pe.a,Object.assign({className:Object(Fe.a)(t,r.root),component:ie.b,to:a},n))},xt=Object(ge.a)((function(e){return Object(de.a)({link:Object(We.a)(Object(We.a)({},e.typography.subtitle1),{},{color:xe.a[900]})})})),wt=function(){var e=xt();return o.a.createElement(fe.a,{container:!0,spacing:1,alignItems:"center",justify:"center"},o.a.createElement(fe.a,{item:!0},o.a.createElement(pe.a,{align:"center",color:"textSecondary"},"You don't have any posts.")),o.a.createElement(fe.a,{item:!0},o.a.createElement(kt,{to:Pa.createPost.path,className:e.link},"Create Post")))},Ft=a(212),Pt=a.n(Ft),Nt=a(511),It=a(521),Ct=a(91),At=a(523),Tt=a(508),Lt=a(509),qt=a(531),Wt=a(510),Rt=a(524),Dt=a(522),Mt=function(e){var t=e.input,a=e.meta,n=a.touched,r=a.error,c=e.label,i=Object(we.a)(e,["input","meta","label"]),l=n&&r;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Dt.a,Object.assign({fullWidth:!0,label:c,error:l},i,t)),l&&o.a.createElement(pe.a,{color:"error"},r))},Bt=function(e){var t=e.name,a=e.label,n=(e.children,Object(we.a)(e,["name","label","children"]));return o.a.createElement(At.a,Object.assign({component:Mt,name:t,label:a},n))},zt=Object(ge.a)((function(e){var t;return Object(de.a)({root:(t={},Object(Ct.a)(t,e.breakpoints.up("sm"),{minWidth:"".concat(e.breakpoints.width("sm")-50,"px")}),Object(Ct.a)(t,"& > *",{marginTop:e.spacing(4)}),t)})})),Ht=function(e){var t=e.input;return o.a.createElement(Tt.a,{component:"fieldset"},o.a.createElement(Lt.a,{component:"legend"},"Sort By"),o.a.createElement(qt.a,t,o.a.createElement(Wt.a,{value:"title",label:"Title",control:o.a.createElement(Rt.a,null)}),o.a.createElement(Wt.a,{value:"date",label:"Date",control:o.a.createElement(Rt.a,null)})))},Ut=function(e){var t=e.input;return o.a.createElement(Tt.a,{component:"fieldset"},o.a.createElement(Lt.a,{component:"legend"},"Sort Order"),o.a.createElement(qt.a,t,o.a.createElement(Wt.a,{value:"asc",label:"Ascending",control:o.a.createElement(Rt.a,null)}),o.a.createElement(Wt.a,{value:"desc",label:"Descending",control:o.a.createElement(Rt.a,null)})))},Vt=function(e){var t=e.formId,a=e.onFormSubmit,n=zt();return o.a.createElement(fe.a,{container:!0,className:n.root,id:t,onSubmit:a,component:"form",direction:"column"},o.a.createElement(fe.a,{item:!0},o.a.createElement(Bt,{name:"query",label:"Search Query",variant:"outlined",autoFocus:!0,fullWidth:!0})),o.a.createElement(fe.a,{item:!0},o.a.createElement(At.a,{component:Ht,name:"sort"})),o.a.createElement(fe.a,{item:!0},o.a.createElement(At.a,{component:Ut,name:"order"})))},Gt=Object(It.a)({form:"post-filter-form"})((function(e){var t=e.handleSubmit,a=e.afterSetFilter,n=Ae(),r=Object(ue.a)(n,2),c=(r[0],r[1].setFilter);return o.a.createElement(Vt,{formId:"post-filter-form",onFormSubmit:t((function(e){c(Object(We.a)(Object(We.a)({},e),{},{tags:e.tags||[]})),a()}))})})),_t=Object(u.b)((function(e){return{initialValues:W(e)}}))(Gt),Jt=function(e){var t=Object(Nt.a)((function(e){return e.breakpoints.down("sm")}));return o.a.createElement(Ke.a,Object.assign({disableEscapeKeyDown:!0,fullScreen:t},e),o.a.createElement(Xe.a,null,"Filter Posts"),o.a.createElement(Ze.a,null,o.a.createElement(_t,{afterSetFilter:e.onClose})),o.a.createElement(et.a,null,o.a.createElement(tt.a,{onClick:e.onClose},"Cancel"),o.a.createElement(tt.a,{type:"submit",form:"post-filter-form",variant:"contained",color:"primary"},"Set Filter")))},Qt=Object(ge.a)((function(e){return Object(de.a)({root:{fontSize:"inherit",color:"inherit"}})})),Yt=function(){var e=Qt(),t=o.a.useState(!1),a=Object(ue.a)(t,2),n=a[0],r=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(tt.a,{className:e.root,startIcon:o.a.createElement(Pt.a,null),onClick:function(){return r(!0)}},"Filter"),o.a.createElement(Jt,{open:n,onClose:function(){return r(!1)}}))},Kt={itemThemeSpacingUnit:10},Xt=Object(ge.a)((function(e){return Object(de.a)({root:{margin:"".concat(e.spacing(4),"px auto")},listSubheader:{marginBottom:"-".concat(e.spacing(Kt.itemThemeSpacingUnit/1.5),"px"),display:"flex",alignItems:"baseline"},subheaderMainTitle:{fontSize:"inherit",fontWeight:"inherit",flexGrow:1},item:{margin:"".concat(e.spacing(Kt.itemThemeSpacingUnit),"px auto")}})})),Zt=function(e){var t=e.posts,a=e.highlightPost,n=e.isLoading,r=e.searchQuery,c=Xt(),i=o.a.createElement(Oe.a,{disableSticky:!0,className:c.listSubheader},o.a.createElement(pe.a,{className:c.subheaderMainTitle},"POSTS"),o.a.createElement(Yt,null));return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.a,null,o.a.createElement("title",null,"Posts")),o.a.createElement(vt,null),o.a.createElement(ve.a,{maxWidth:"md",className:c.root},n?o.a.createElement(yt,{itemClassName:c.item,subheader:i}):function(){if(0===t.length&&"undefined"===typeof r)return o.a.createElement(wt,null);var e=o.a.createElement(ye.a,{className:c.item},o.a.createElement(Se.a,{primaryTypographyProps:{align:"center"}},"No posts matching the query '",r,"'")),n=t.map((function(e){return o.a.createElement(gt,{className:c.item,post:e,key:e.id,autoFocus:e.id===a})}));return o.a.createElement(je.a,null,i,r&&0===t.length?e:n)}()))},$t=function(e){var t=e.highlightPost,a=ot({autoFetch:!0}),n=Object(ue.a)(a,3),r=n[0],c=n[1].updateAllPosts,i=n[2],l=i.loading,u=i.error,s=Ae(),m=Object(ue.a)(s,1)[0].query;return o.a.createElement(Zt,{posts:r,onUpdatePosts:c,highlightPost:t,isLoading:l,error:u,searchQuery:m})},ea=function(){var e=me(),t=Object(ue.a)(e,1)[0].loggedIn,a=Object(le.h)().state,n=a?a.highlightPost:void 0;return t?o.a.createElement($t,{highlightPost:n}):o.a.createElement(le.a,{to:Pa.login.path})},ta=a(514),aa=a(213),na=a.n(aa),ra=a(214),ca=a.n(ra),oa=function(e){var t=e.name,a=e.label,n=o.a.useState(!1),r=Object(ue.a)(n,2),c=r[0],i=r[1];return o.a.createElement(Bt,{type:c?"text":"password",label:a,name:t,InputProps:{endAdornment:o.a.createElement(ta.a,{position:"end"},o.a.createElement(Qe.a,{onClick:function(){return i(!c)}},c?o.a.createElement(na.a,null):o.a.createElement(ca.a,null)))}})},ia=a(120),la=a(515),ua=Object(ge.a)((function(e){return Object(de.a)({root:{padding:e.spacing(8)},fullHeight:{height:"100%"},error:{fontSize:"0.8rem",color:ia.a[900],marginBottom:e.spacing(1)}})})),sa=function(e){var t=e.loggedIn,a=e.isLoggingIn,n=e.formId,r=e.onFormSubmit,c=e.loginError,i=e.loginResult,l=ua();return"success"===i||t?o.a.createElement(le.a,{to:Pa.home.path}):o.a.createElement("div",{className:l.root},o.a.createElement(fe.a,{container:!0,direction:"column",alignItems:"center",justify:"center",spacing:6,className:l.fullHeight},o.a.createElement(fe.a,{item:!0},o.a.createElement(pe.a,{variant:"h4"},"Login")),o.a.createElement(fe.a,{item:!0},c&&o.a.createElement(pe.a,{className:l.error},"*",c),o.a.createElement("form",{id:n,onSubmit:r},o.a.createElement(fe.a,{item:!0,container:!0,justify:"center",alignContent:"space-around",direction:"column",spacing:4,className:l.fullHeight},o.a.createElement(fe.a,{item:!0},o.a.createElement(Bt,{name:"username",label:"Username",autoFocus:!0})),o.a.createElement(fe.a,{item:!0},o.a.createElement(oa,{name:"password",label:"Password"}))))),o.a.createElement(fe.a,{item:!0,container:!0,justify:"center"},o.a.createElement(fe.a,{item:!0},o.a.createElement(st,{loading:a,variant:"contained",color:"primary",type:"submit",form:n},"Login"))),o.a.createElement(fe.a,{item:!0},o.a.createElement(la.a,{variant:"fullWidth"}),o.a.createElement(tt.a,{component:ie.b,to:Pa.register.path},"Create account instead"))))},ma=function(e){var t=e.loginResult,a=Object(we.a)(e,["loginResult"]),n=Object(re.b)().enqueueSnackbar,r=o.a.useState(!1),c=Object(ue.a)(r,2),i=c[0],l=c[1];if(t&&!i){var u=function(){return l(!0)};"success"===t?n("Login Successful. You will be redirected shortly",{variant:"success",onEnter:u}):n("Login Failed",{variant:"error",onEnter:u})}return o.a.createElement(sa,Object.assign({loginResult:t},a))},fa=Object(It.a)({form:"login-form",initialValues:{username:"John Doe",password:"password"}})((function(e){var t=e.handleSubmit,a=me(),n=Object(ue.a)(a,2),r=n[0].loggedIn,c=n[1].login,i=o.a.useState(!1),l=Object(ue.a)(i,2),u=l[0],s=l[1],m=o.a.useState(void 0),f=Object(ue.a)(m,2),p=f[0],g=f[1],d=o.a.useState(),b=Object(ue.a)(d,2),h=b[0],E=b[1],O=function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Perform Login: ",t),s(!0),e.next=4,c(t).then(ct(C)).then((function(e){E("success")})).catch((function(e){401===e.status?g(e.data.message):g("An unknown error occurred. Please try again later"),E("failure")}));case 4:s(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(ma,{loggedIn:r,loginResult:h,loginError:p,isLoggingIn:u,formId:"login-form",onFormSubmit:t(O)})})),pa=function(e){return o.a.createElement(Bt,Object.assign({},e,{variant:"outlined"}))},ga=a(215),da=a(526),ba=function(e){var t=e.input,a=t.value,n=t.onChange;return o.a.createElement(da.a,{id:"tags-outlined",multiple:!0,selectOnFocus:!0,clearOnBlur:!0,options:[],filterOptions:function(e,t){var a=t.inputValue,n=[];return""!==a&&n.push({value:a.trim(),label:'Create tag "'.concat(a,'"')}),n},getOptionLabel:function(e){return e.label},renderInput:function(e){return o.a.createElement(Dt.a,Object.assign({},e,{variant:"outlined",label:"Create Tags",placeholder:"Tags"}))},renderTags:function(e,t){return e.map((function(e,a){return o.a.createElement(Be.a,Object.assign({label:e.value},t({index:a})))}))},onChange:function(e,t,r,c){if(!Array.isArray(t))return null;if("create-option"===r||"select-option"===r){var o,i={},l=Object(ga.a)(t);try{for(l.s();!(o=l.n()).done;){var u=o.value;i[u.value]=u}}catch(f){l.e(f)}finally{l.f()}n(Object.values(i))}if("remove-option"===r&&c){var s=c.option,m=a.filter((function(e){return e.value!==s.value}));n(m)}},value:a||[]})},ha=function(){return o.a.createElement(At.a,{name:"tags",component:ba})},Ea=function(e){var t=e.children,a=e.formState,n=e.formId,r=Object(we.a)(e,["children","formState","formId"]);return o.a.createElement(st,Object.assign({form:n,type:"submit",loading:"submitting"===a},r),t)},va=Object(ge.a)((function(e){return Object(de.a)({root:{margin:"".concat(e.spacing(8),"px auto")},fullHeight:{height:"100%"},header:{marginBottom:e.spacing(4)},subtitle:Object(We.a)(Object(We.a)({},e.typography.subtitle2),{},{color:e.palette.text.secondary,fontWeight:e.typography.fontWeightRegular})})})),ja=function(e){var t=e.onFormSubmit,a=e.formId,n=e.status,r=va();return o.a.createElement(ve.a,{maxWidth:"sm",className:r.root},o.a.createElement(oe.a,null,o.a.createElement("title",null,"Create Post")),o.a.createElement(fe.a,{container:!0,wrap:"wrap",direction:"column",justify:"center",spacing:4,className:r.fullHeight,component:"form",id:a,onSubmit:t},o.a.createElement(fe.a,{item:!0,container:!0,direction:"column",className:r.header},o.a.createElement(fe.a,{item:!0},o.a.createElement(pe.a,{variant:"h4"},"Create Post")),o.a.createElement(fe.a,{item:!0},o.a.createElement(pe.a,{className:r.subtitle},"Required items are marked with *"))),o.a.createElement(fe.a,{item:!0},o.a.createElement(pa,{name:"title",label:"Title",autoFocus:!0,required:!0})),o.a.createElement(fe.a,{item:!0},o.a.createElement(pa,{name:"link",label:"Link"})),o.a.createElement(fe.a,{item:!0},o.a.createElement(pa,{name:"comment",label:"Comment"})),o.a.createElement(fe.a,{item:!0},o.a.createElement(ha,null)),o.a.createElement(fe.a,{item:!0},o.a.createElement(Ea,{formId:a,formState:n,color:"primary",variant:"contained"},"Create Post"))))},Oa=a(69),ya=a.n(Oa);var Sa=function(e){var t=e.successSnackbarMessage,a=e.failureSnackbarMessage,n=Object(c.useState)({status:"initial"}),r=Object(ue.a)(n,2),o=r[0],i=r[1],l=Object(c.useState)(!1),u=Object(ue.a)(l,2),s=u[0],m=u[1],f=Object(re.b)().enqueueSnackbar;return Object(c.useEffect)((function(){s||("submit-success"===o.status&&(f(t,{variant:"success"}),m(!0)),"submit-fail"===o.status&&(f(a,{variant:"error"}),m(!0)))}),[s,o,i,f,t,a]),[o,{setFormSubmitSuccess:function(e){return i({status:"submit-success",meta:e})},setFormSubmitFail:function(e){return i({status:"submit-fail",error:e})},setFormSubmitting:function(){return i({status:"submitting"})}}]},ka=Object(It.a)({form:"create-post-form",initialValues:{title:"New Post"},validate:function(e){var t={};return"string"===typeof e.title&&ya.a.isEmpty(e.title)&&(t.title="Title is required"),e.link&&!ya.a.isEmpty(e.link.trim())&&(ya.a.isURL(e.link,{require_protocol:!0})||(t.link="If provided, must be an url")),t}})((function(e){var t=e.handleSubmit,a=(e.error,ot()),n=Object(ue.a)(a,2),r=(n[0],n[1].createPost),c=Sa({successSnackbarMessage:"Your post was created successfully",failureSnackbarMessage:"Error creating post"}),i=Object(ue.a)(c,2),l=i[0],u=i[1];if("submit-success"===l.status){var s=l.meta;return o.a.createElement(le.a,{to:{pathname:Pa.home.path,state:{highlightPost:s&&s.id}}})}return o.a.createElement(ja,Object.assign({formId:"create-post-form",onFormSubmit:t((function(e){var t,a=e.tags,n=Object(we.a)(e,["tags"]);a&&(t=a.map((function(e){return e.value}))),u.setFormSubmitting(),r(Object(We.a)(Object(We.a)({},n),{},{tags:t})).then(ct(D)).then((function(e){u.setFormSubmitSuccess(e)})).catch((function(e){u.setFormSubmitFail(e)}))}))},l))})),xa=Object(ge.a)((function(e){return Object(de.a)({root:{padding:e.spacing(8)},fullHeight:{height:"100%"},error:{fontSize:"0.8rem",color:ia.a[900],marginBottom:e.spacing(1)}})})),wa=function(e){var t=e.loggedIn,a=e.formId,n=e.onFormSubmit,r=e.status,c=e.error,i=xa();return"submit-success"===r||t?o.a.createElement(le.a,{to:Pa.home.path}):o.a.createElement("div",{className:i.root},o.a.createElement(fe.a,{container:!0,direction:"column",alignItems:"center",justify:"center",spacing:6,className:i.fullHeight},o.a.createElement(fe.a,{item:!0},o.a.createElement(pe.a,{variant:"h4"},"Create Account")),o.a.createElement(fe.a,{item:!0},c&&o.a.createElement(pe.a,{className:i.error},"*",c),o.a.createElement("form",{id:a,onSubmit:n},o.a.createElement(fe.a,{item:!0,container:!0,justify:"center",alignContent:"space-around",direction:"column",spacing:4,className:i.fullHeight},o.a.createElement(fe.a,{item:!0},o.a.createElement(Bt,{name:"email",label:"Email",type:"email",autoFocus:!0})),o.a.createElement(fe.a,{item:!0},o.a.createElement(Bt,{name:"username",label:"Username"})),o.a.createElement(fe.a,{item:!0},o.a.createElement(oa,{name:"password",label:"Password"}))))),o.a.createElement(fe.a,{item:!0,container:!0,justify:"center"},o.a.createElement(Ea,{formState:r,formId:a,variant:"contained",color:"primary"},"Register")),o.a.createElement(fe.a,{item:!0},o.a.createElement(la.a,null),o.a.createElement(tt.a,{component:ie.b,to:Pa.login.path},"Login instead"))))},Fa=function(e){var t=e.username,a=e.email,n=e.password,r={},c=function(e,t){t&&!ya.a.isEmpty(t)||(r[e]="".concat(e," cannot be empty"))};return c("username",t),c("password",n),c("email",a),!a||r.email||ya.a.isEmail(a)||(r.email="must be a valid email"),r},Pa={home:{path:"/",component:ea,exact:!0},login:{path:"/login",component:fa,exact:!0},register:{path:"/register",component:Object(It.a)({form:"user-register-form",validate:Fa})((function(e){var t=e.handleSubmit,a=Sa({successSnackbarMessage:"User registration completed",failureSnackbarMessage:"Error registering user. Try again"}),n=Object(ue.a)(a,2),r=n[0],c=n[1],i=me({autoFetch:!0}),l=Object(ue.a)(i,2),u=l[0].loggedIn,s=l[1].createAccount;return o.a.createElement(wa,Object.assign({loggedIn:u,formId:"user-register-form",onFormSubmit:t((function(e){c.setFormSubmitting(),s(e).then(ct(T)).then(c.setFormSubmitSuccess).catch((function(e){var t=e.status,a=e.data,n="An unknown error occurred while trying to create the account";401===t?c.setFormSubmitFail(a?a.message:n):c.setFormSubmitFail(n)}))}))},r))})),exact:!0},createPost:{path:"/new-post",component:ka,exact:!0}},Na=Object.values(Pa),Ia=a(517),Ca=a(518),Aa=a(119),Ta=a(216),La=a.n(Ta),qa=a(219),Wa=a(516),Ra=Object(ge.a)((function(e){return Object(de.a)({loggedInAs:{marginRight:e.spacing(1)},username:{fontWeight:e.typography.fontWeightBold}})})),Da=function(e){var t=e.anchorElement,a=e.onCloseMenu,n=Ra(),r=me(),c=Object(ue.a)(r,2),i=c[0],l=i.user,u=i.loggedIn,s=c[1].logout;if(!u)return null;var m=l&&l.username;return o.a.createElement(qa.a,{keepMounted:!0,id:"account-menu",anchorEl:t,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(t),onClose:a},o.a.createElement(Wa.a,null,o.a.createElement(pe.a,{className:n.loggedInAs},"Logged in as:"),o.a.createElement(pe.a,{className:n.username,noWrap:!0},m||"-")),o.a.createElement(la.a,null),o.a.createElement(Wa.a,{onClick:s},"Logout"))},Ma=function(){var e=me(),t=Object(ue.a)(e,3),a=t[0],n=(t[1],t[2].loading),r=o.a.useState(null),c=Object(ue.a)(r,2),i=c[0],l=c[1];return n||!a.loggedIn?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(Qe.a,{onClick:function(e){console.log("click"),l(e.currentTarget)}},o.a.createElement(La.a,{fontSize:"large"})),o.a.createElement(Da,{anchorElement:i,onCloseMenu:function(){console.log("close"),l(null)}}))},Ba={color:"inherit",textDecoration:"none","&:hover":{color:"inherit",textDecoration:"none"},outline:0},za=Object(ge.a)((function(e){return Object(de.a)({root:{flexGrow:1},title:Object(We.a)(Object(We.a)({flexGrow:1},Ba),{},{"&:hover":Object(We.a)(Object(We.a)({},Ba["&:hover"]),{},{color:Aa.a[400]}),transition:"color 0.5s ease-in"}),noLink:Ba})})),Ha=function(){var e=za(),t=me(),a=Object(ue.a)(t,3),n=a[0],r=(a[1],a[2].loading),c=function(){return n.loggedIn||r?null:o.a.createElement(tt.a,{color:"inherit",component:ie.c,to:Pa.login.path},"Login")};return o.a.createElement(Ia.a,{className:e.root},o.a.createElement(Ca.a,null,o.a.createElement(pe.a,{variant:"h6",className:e.title,component:ie.c,to:Pa.home.path},"Personal Archive"),o.a.createElement(c,null),o.a.createElement(Ma,null)))},Ua=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ha,null),o.a.createElement(Ca.a,null),t)},Va=Object(ge.a)((function(e){return Object(de.a)({root:{height:"100%",padding:e.spacing(8)}})})),Ga=function(){var e=Va();return o.a.createElement(fe.a,{container:!0,direction:"column",justify:"center",className:e.root},o.a.createElement(pe.a,{variant:"h1"},"Error"),o.a.createElement(pe.a,{paragraph:!0},"We could not find the page you were looking for"),o.a.createElement(kt,{to:Pa.home.path},"Go back home"))},_a=function(){return me({autoFetch:!0})[2].loading?o.a.createElement(Ee,null):o.a.createElement(ie.a,null,o.a.createElement(Ua,null,o.a.createElement(le.d,null,Na.map((function(e){return o.a.createElement(le.b,Object.assign({},e,{key:e.path}))})),o.a.createElement(le.b,{path:"*",component:Ga}))))},Ja=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.a,{titleTemplate:"%s | Personal Archive",defaultTitle:"Personal Archive"}),o.a.createElement(_a,null))};l.a.render(o.a.createElement(u.a,{store:Z},o.a.createElement(ne.a,{theme:ae},o.a.createElement(re.a,null,o.a.createElement(ce.a,null),o.a.createElement(Ja,null)))),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.c84f81b0.chunk.js.map