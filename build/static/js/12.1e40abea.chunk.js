(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[12],{309:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(3);t.a=function(e){return n.a.createElement("div",{className:"errormessage"},n.a.createElement(s.Grid,null,n.a.createElement(s.Cell,{col:2},n.a.createElement("div",{className:"center"},n.a.createElement("div",{className:"errcircle"},"!"))),n.a.createElement(s.Cell,{col:10},n.a.createElement("p",null,e.msg))))}},312:function(e,t,a){"use strict";t.a={BLANK_LINK:"#!"}},314:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(15),l=a(22),i=a(18),c=a.n(i),o=a(27),m=a(8),u=a(9),d=a(11),p=a(10),h=a(12),g=a(33),E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={results:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("store_id"),e.next=4,g.a.post("/orderhistories",{store_id:t});case 4:return a=e.sent,e.next=7,a.data;case 7:r=e.sent,this.setState({results:r}),this.state.results&&this.state.results.length>0&&this.setState({viewer:"yes"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.results.length}}]),t}(n.a.Component),b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={results:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("store_id"),e.next=4,g.a.post("/preorderhistories",{store_id:t});case 4:return a=e.sent,e.next=7,a.data;case 7:r=e.sent,this.setState({results:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.results.length}}]),t}(n.a.Component);t.a={items:[{id:"navigation",title:"Dashboard",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"Home",type:"item",url:"/dashboard",icon:n.a.createElement(s.a,{icon:l.n})},{id:"orders",title:"Orders",type:"item",url:"/order",icon:n.a.createElement(s.a,{icon:l.w}),badge:{title:n.a.createElement(E,null),type:"label-danger"}},{id:"orders",title:"Pre Order",type:"item",url:"/preorder",icon:n.a.createElement(s.a,{icon:l.h}),badge:{title:n.a.createElement(b,null),type:"label-danger"}},{id:"category",title:"Category",type:"item",url:"/Category",icon:n.a.createElement(s.a,{icon:l.j})},{id:"products",title:"Products",type:"item",url:"/product",icon:n.a.createElement(s.a,{icon:l.z})},{id:"customers",title:"Customers",type:"item",url:"/customer",icon:n.a.createElement(s.a,{icon:l.B})},{id:"marketing",title:"Marketing",type:"item",url:"/marketing",icon:n.a.createElement(s.a,{icon:l.d})},{id:"discounts",title:"Discounts",type:"item",url:"/discounts",icon:n.a.createElement(s.a,{icon:l.t})}]},{id:"payment",title:"Payment Info",type:"group",icon:"icon-navigation",children:[{id:"wallet",title:"Wallet",type:"item",url:"/wallet",icon:n.a.createElement(s.a,{icon:l.D})},{id:"orders",title:"Bank Info",type:"item",url:"/bank",icon:n.a.createElement(s.a,{icon:l.r})},{id:"products",title:"Payment History",type:"item",url:"/payhistory",icon:n.a.createElement(s.a,{icon:l.m})}]},{id:"storesettings",title:"Store Settings",type:"group",icon:"icon-pages",children:[{id:"domain",title:"Domain Name",type:"item",url:"/domain",icon:n.a.createElement(s.a,{icon:l.k}),badge:{title:"New",type:"label-danger"}},{id:"sample-page",title:"Store Profile",type:"item",url:"/storeprofile",classes:"nav-item",icon:n.a.createElement(s.a,{icon:l.o})},{id:"docs",title:"Users",type:"item",url:"/users",classes:"nav-item",icon:n.a.createElement(s.a,{icon:l.C})},{id:"docs",title:"Store Template",type:"item",url:"/storetemplate",classes:"nav-item",icon:n.a.createElement(s.a,{icon:l.y})}]}]}},316:function(e,t,a){"use strict";var r=a(8),n=a(9),s=a(11),l=a(10),i=a(12),c=a(0),o=a.n(c),m=a(13),u=a(55),d=a(314),p=a(312),h=a(89),g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={main:[],item:[]},a.componentWillReceiveProps=function(){d.a.items.map((function(e,t){return e.type&&"group"===e.type&&a.getCollapse(e),!1}))},a.getCollapse=function(e){e.children&&e.children.filter((function(t){return t.type&&"collapse"===t.type?a.getCollapse(t):t.type&&"item"===t.type&&document.location.pathname===u.a.basename+t.url&&a.setState({item:t,main:e}),!1}))},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t,a),!1}))}},{key:"render",value:function(){var e,t,a="",r="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:p.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(r=this.state.item.title,t=o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:p.a.BLANK_LINK},r)),!1!==this.state.item.breadcrumbs&&(a=o.a.createElement("div",{className:"page-header"},o.a.createElement("div",{className:"page-block"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"page-header-title"},o.a.createElement("h5",{className:"m-b-10"},r)),o.a.createElement("ul",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement(m.b,{to:"/"},o.a.createElement("i",{className:"feather icon-home"}))),e,t))))))),o.a.createElement(h.a,null,a)}}]),t}(c.Component);t.a=g},322:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",{className:"fielder"},n.a.createElement("button",{name:e.name,disabled:e.disabled,onClick:e.onClick}," ",e.value," "))}},555:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a.n(r),s=a(27),l=a(40),i=a(8),c=a(9),o=a(11),m=a(10),u=a(12),d=a(0),p=a.n(d),h=a(14),g=a(322),E=a(309),b=(a(92),a(22)),f=a(15),v=a(89),y=a(33),N=a(316),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,r=t.name,n=t.value,s=a.state.formErrors;switch(r){case"username":s.username=n.length<3&&n.length>0?"Username can not be less than 3":"";break;case"password":s.password=n.length<4&&n.length>0?"Minimum of 8 characters Required":""}a.setState(Object(l.a)({formErrors:s},r,n))},a.state={username:null,password:null,loading:!1,error:!1,errmsg:null,isLoggedIn:!1,formErrors:{username:"",password:""}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"Login",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({loading:!0}),""!==this.state.formErrors.username||""!==this.state.formErrors.password||null===this.state.username||null===this.state.password){e.next=27;break}return e.prev=2,e.next=5,y.a.post("/loginowners",{username:this.state.username,password:this.state.password});case 5:return t=e.sent,e.next=8,t.data;case 8:if(!(a=e.sent)||!a.success){e.next=19;break}return this.setState({loading:!1}),localStorage.setItem("isLoggedin","true"),localStorage.setItem("owner_id",a.owner_id),localStorage.setItem("store_id",a.store_id),localStorage.setItem("username",a.username),this.setState({isLoggedIn:!0}),e.abrupt("return",p.a.createElement(h.a,{to:"/dashboard"}));case 19:a&&!1===a.success&&(this.setState({loading:!1}),this.setState({errmsg:a.msg}),this.setState({error:!0}));case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(2),console.log(e.t0);case 25:e.next=30;break;case 27:this.setState({loading:!1}),this.setState({errmsg:"Please Fill out your form Correctly"}),this.setState({error:!0});case 30:case"end":return e.stop()}}),e,this,[[2,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.formErrors,a=this.state.loading,r=this.state.error,n=this.state.errmsg;return this.state.isLoggedIn?p.a.createElement(h.a,{to:"/dashboard"}):p.a.createElement(v.a,null,p.a.createElement(N.a,null),p.a.createElement("div",{className:"auth-wrapper"},p.a.createElement("div",{className:"auth-content"},p.a.createElement("div",{className:"auth-bg"},p.a.createElement("span",{className:"r"}),p.a.createElement("span",{className:"r s"}),p.a.createElement("span",{className:"r s"}),p.a.createElement("span",{className:"r"})),p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-body text-center"},p.a.createElement("div",{className:"mb-4"},p.a.createElement("div",{className:"loginlogo"},p.a.createElement("a",{href:"/"},p.a.createElement("h2",null,"e-medix")))),p.a.createElement("form",{onSubmit:this.handleSubmit},p.a.createElement("h5",{className:"mb-4"},"Login"),r&&p.a.createElement(E.a,{msg:n}),p.a.createElement("div",{className:"input-group mb-3"},p.a.createElement("input",{type:"text",className:"form-control",placeholder:"Store username is your default username",name:"username",required:!0,onChange:this.handleChange})),t.username.length>0&&p.a.createElement("span",{className:"inputerror"},t.username),p.a.createElement("div",{className:"input-group mb-4"},p.a.createElement("input",{type:"password",className:"form-control",placeholder:"password",name:"password",required:!0,onChange:this.handleChange})),t.password.length>0&&p.a.createElement("span",{className:"inputerror"},t.password),p.a.createElement("div",{className:"form-group text-left"},p.a.createElement("div",null,p.a.createElement("div",{class:"page__toggle"},p.a.createElement("label",{class:"toggle"},p.a.createElement("input",{class:"toggle__input",type:"checkbox"}),p.a.createElement("span",{class:"toggle__label"},p.a.createElement("span",{class:"toggle__text"},"Save credentials")))))),p.a.createElement(g.a,{onClick:function(){return e.Login()},name:"Login",value:p.a.createElement(p.a.Fragment,null,a&&p.a.createElement(f.a,{style:{position:"relative",top:"-5px"},icon:b.x,spin:!0})," ",!a&&p.a.createElement(p.a.Fragment,null,"Log in"))})))))))}}]),t}(p.a.Component);t.default=w}}]);
//# sourceMappingURL=12.1e40abea.chunk.js.map