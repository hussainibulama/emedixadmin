(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[24],{309:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(3);t.a=function(e){return r.a.createElement("div",{className:"errormessage"},r.a.createElement(s.Grid,null,r.a.createElement(s.Cell,{col:2},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"errcircle"},"!"))),r.a.createElement(s.Cell,{col:10},r.a.createElement("p",null,e.msg))))}},310:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(3),l=a(15),c=a(22);t.a=function(e){return r.a.createElement("div",{className:"goodmessage"},r.a.createElement(s.Grid,null,r.a.createElement(s.Cell,{col:2},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"goodcircle"},r.a.createElement(l.a,{icon:c.f})))),r.a.createElement(s.Cell,{col:10},r.a.createElement("p",null,e.msg))))}},429:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),s=a(27),l=a(40),c=a(8),i=a(9),o=a(11),m=a(10),u=a(12),d=a(0),h=a.n(d),p=a(325),g=a(134),E=a(327),b=a(307),v=a(333),f=a(133),k=a(69),S=a(430),w=a.n(S),C=a(14),x=a(89),y=a(33),I=a(15),N=a(22),_=a(3),z=a(544),j=a(309),B=a(310),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(l.a)({},n,r))},a.handleChangeComplete=function(e){a.setState({background:e.hex});try{var t=localStorage.getItem("store_id"),n=y.a.post("/bgcolor",{store_id:t,background:a.state.background}).data;a.setState({gmsg:n.msg})}catch(r){console.log(r)}},a.state={viewer:"no",view:"",error:!1,errmsg:null,loading:!1,good:!1,gmsg:null,name:"",facebook:"",twitter:"",instagram:"",email:"",whatsapp:"",customize:!1,update_id:"",delete_id:"",results:[],background:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"Socials",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,t=localStorage.getItem("store_id"),e.next=5,y.a.post("/socials",{store_id:t,facebook:this.state.facebook,instagram:this.state.instagram,twitter:this.state.twitter,whatsapp:this.state.whatsapp,mail:this.state.email});case 5:return a=e.sent,e.next=8,a.data;case 8:(n=e.sent)&&n.success?(this.setState({gmsg:n.msg}),this.setState({good:!0}),this.setState({error:!1}),this.setState({loading:!1})):n&&!1===n.success&&(this.setState({errmsg:n.msg}),this.setState({error:!0}),this.setState({good:!1}),this.setState({loading:!1})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),this.setState({loading:!1}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,s,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("store_id"),e.next=4,y.a.post("/selectbg",{store_id:t});case 4:return a=e.sent,e.next=7,a.data;case 7:(n=e.sent)&&n.success&&this.setState({background:n.bg,name:n.name}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s=localStorage.getItem("store_id"),e.next=18,y.a.post("/selectsocials",{store_id:s});case 18:return l=e.sent,e.next=21,l.data;case 21:(c=e.sent)&&c.success&&this.setState({facebook:c.facebook,twitter:c.twitter,instagram:c.instagram,whatsapp:c.whatsapp,email:c.email}),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(14),console.log(e.t1);case 28:case"end":return e.stop()}}),e,this,[[0,11],[14,25]])})));return function(){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("store_id"),e.next=4,y.a.post("/selectbg",{store_id:t});case 4:return a=e.sent,e.next=7,a.data;case 7:(n=e.sent)&&n.success&&this.setState({background:n.bg,name:n.name}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"createAdd",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({view:"add"});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"customize",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===this.state.customize?this.setState({customize:!1}):!1===this.state.customize&&this.setState({customize:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selecttemplate",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,a=localStorage.getItem("store_id"),e.next=5,y.a.post("/currentemplate",{store_id:a,name:t});case 5:return n=e.sent,e.next=8,n.data;case 8:(s=e.sent)&&s.success&&(this.setState({gmsg:s.msg,good:!0,loading:!1}),this.refresh()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.customize,r=t.good,s=t.error;return null===localStorage.getItem("store_id")?h.a.createElement(C.a,{to:"/auth/signin"}):h.a.createElement(x.a,null,h.a.createElement(p.a,null,h.a.createElement(g.a,null,h.a.createElement(E.a,null,h.a.createElement(E.a.Header,null,h.a.createElement(E.a.Title,{as:"h5"},"Templates ")),h.a.createElement(E.a.Body,null,r&&h.a.createElement(B.a,{msg:this.state.gmsg}),s&&h.a.createElement(j.a,{msg:this.state.errmsg}),h.a.createElement("div",{className:"templates"},h.a.createElement("div",{className:"template"},h.a.createElement("div",null,h.a.createElement("img",{src:w.a,alt:"default template"})),h.a.createElement("div",null,h.a.createElement("span",null," Free Template")),h.a.createElement("div",null,"default"!==String(this.state.name)&&h.a.createElement("button",{onClick:function(){return e.selecttemplate("default")}}," ",a&&h.a.createElement(I.a,{style:{position:"relative",top:"0px"},icon:N.x,spin:!0})," ",!a&&h.a.createElement(h.a.Fragment,null," Select")),"default"===String(this.state.name)&&h.a.createElement("button",null,"Selected"),h.a.createElement("button",{onClick:function(){return e.customize()}},n&&h.a.createElement(h.a.Fragment,null,"Customize"," ",h.a.createElement(I.a,{style:{position:"relative",top:"0px"},icon:N.a})),!n&&h.a.createElement(h.a.Fragment,null,"Customize"," ",h.a.createElement(I.a,{style:{position:"relative",top:"0px"},icon:N.b})))))))),n&&h.a.createElement(E.a,null,h.a.createElement(E.a.Header,null,h.a.createElement(E.a.Title,{as:"h5"},"Customize Template ")),h.a.createElement(E.a.Body,null,h.a.createElement("div",{className:"customize"},h.a.createElement(_.Grid,null,h.a.createElement(_.Cell,{col:6},h.a.createElement("div",{className:"customize-body",style:{background:this.state.background}},h.a.createElement("div",null,h.a.createElement("h6",null,localStorage.getItem("username"))),h.a.createElement("br",null),h.a.createElement("div",{className:"poper"}))),h.a.createElement(_.Cell,{col:6},h.a.createElement("div",{className:"color-changer"},h.a.createElement(z.a,{color:this.state.background,onChangeComplete:this.handleChangeComplete}))),h.a.createElement(_.Cell,{col:12},h.a.createElement(b.a,{onSubmit:this.handleSubmit},h.a.createElement(_.Grid,null,h.a.createElement(_.Cell,{col:6},h.a.createElement(b.a.Group,{controlId:"formBasicEmail"},h.a.createElement(b.a.Label,null,"Instagram Business account"),h.a.createElement(v.a,{className:"mb-3"},h.a.createElement(v.a.Prepend,null,h.a.createElement(v.a.Text,{id:"basic-addon3"},"https://instagram.com/")),h.a.createElement(f.a,{name:"instagram",id:"basic-url",value:this.state.instagram?this.state.instagram:"",onChange:this.handleChange,"aria-describedby":"basic-addon3"}))),h.a.createElement(b.a.Group,{controlId:"formBasicEmail"},h.a.createElement(b.a.Label,null,"Facebook Business account"),h.a.createElement(v.a,{className:"mb-3"},h.a.createElement(v.a.Prepend,null,h.a.createElement(v.a.Text,{id:"basic-addon3"},"https://facebook.com/")),h.a.createElement(f.a,{name:"facebook",id:"basic-url",value:this.state.facebook?this.state.facebook:"",onChange:this.handleChange,"aria-describedby":"basic-addon3"})))),h.a.createElement(_.Cell,{col:6},h.a.createElement(b.a.Group,{controlId:"formBasicEmail"},h.a.createElement(b.a.Label,null,"Twitter Business account"),h.a.createElement(v.a,{className:"mb-3"},h.a.createElement(v.a.Prepend,null,h.a.createElement(v.a.Text,{id:"basic-addon3"},"https://twitter.com/")),h.a.createElement(f.a,{name:"twitter",id:"basic-url",value:this.state.twitter?this.state.twitter:"",onChange:this.handleChange,"aria-describedby":"basic-addon3"}))),h.a.createElement(b.a.Group,{controlId:"formBasicEmail"},h.a.createElement(b.a.Label,null,"Whatsapp Business Phone no."),h.a.createElement(b.a.Control,{type:"number",name:"whatsapp",value:this.state.whatsapp?this.state.whatsapp:"",onChange:this.handleChange,placeholder:"e.g 08136668344"}))),h.a.createElement(_.Cell,{col:6},h.a.createElement(b.a.Group,{controlId:"formBasicEmail"},h.a.createElement(b.a.Label,null,"Email Business account"),h.a.createElement(b.a.Control,{type:"email",name:"email",value:this.state.email?this.state.email:"",onChange:this.handleChange,placeholder:"e.g hello@swip.ng"})),h.a.createElement(k.a,{name:"Login",disabled:this.state.loading,onClick:function(){return e.Socials()},value:h.a.createElement(h.a.Fragment,null,this.state.loading&&h.a.createElement(I.a,{style:{position:"relative",top:"0px"},icon:N.x,spin:!0})," ",!this.state.loading&&h.a.createElement(h.a.Fragment,null," Update Record"))}))))))))))))}}]),t}(h.a.Component);document.title="Users | "+localStorage.getItem("username"),t.default=O},430:function(e,t,a){e.exports=a.p+"static/media/today.f1e47cbf.png"}}]);
//# sourceMappingURL=24.682bce7d.chunk.js.map