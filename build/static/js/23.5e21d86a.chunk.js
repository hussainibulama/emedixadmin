(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[23],{317:function(e,t,a){"use strict";var r=a(4),n=a(5),s=a(7),c=a(2),o=a.n(c),l=a(0),i=a.n(l),u=a(19),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,s=e.striped,c=e.bordered,l=e.hover,u=e.size,m=e.variant,d=e.responsive,p=Object(n.a)(e,["bsPrefix","className","striped","bordered","hover","size","variant","responsive"]),b=o()(t,a,m&&t+"-"+m,u&&t+"-"+u,s&&t+"-striped",c&&t+"-bordered",l&&t+"-hover"),f=i.a.createElement("table",Object(r.a)({},p,{className:b}));if(d){var h=t+"-responsive";return"string"===typeof d&&(h=h+"-"+d),i.a.createElement("div",{className:h},f)}return f},t}(i.a.Component);t.a=Object(u.a)(m,"table")},325:function(e,t,a){"use strict";var r=a(4),n=a(5),s=a(7),c=a(2),o=a.n(c),l=a(0),i=a.n(l),u=a(19),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.noGutters,s=e.as,c=e.className,l=Object(n.a)(e,["bsPrefix","noGutters","as","className"]);return i.a.createElement(s,Object(r.a)({},l,{className:o()(c,t,a&&"no-gutters")}))},t}(i.a.Component);m.defaultProps={as:"div",noGutters:!1},t.a=Object(u.a)(m,"row")},327:function(e,t,a){"use strict";var r=a(4),n=a(5),s=a(7),c=a(2),o=a.n(c),l=a(0),i=a.n(l),u=a(19),m=a(90),d=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(r.a)({},t,{ref:a,className:o()(t.className,e)}))}))},p=i.a.createContext(null),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,s=e.variant,c=e.as,l=Object(n.a)(e,["bsPrefix","className","variant","as"]),u=s?t+"-"+s:t;return i.a.createElement(c,Object(r.a)({className:o()(u,a)},l))},t}(i.a.Component);b.defaultProps={as:"img",variant:null};var f=Object(u.a)(b,"card-img"),h=Object(m.a)("card-body"),v=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={},t}return Object(s.a)(t,e),t.getDerivedStateFromProps=function(e){return{cardContext:{cardHeaderBsPrefix:e.bsPrefix+"-header"}}},t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,s=e.as,c=e.bg,l=e.text,u=e.border,m=e.body,d=e.children,b=Object(n.a)(e,["bsPrefix","className","as","bg","text","border","body","children"]),f=o()(a,t,c&&"bg-"+c,l&&"text-"+l,u&&"border-"+u);return i.a.createElement(p.Provider,{value:this.state.cardContext},i.a.createElement(s,Object(r.a)({className:f},b),m?i.a.createElement(h,null,d):d))},t}(i.a.Component);v.defaultProps={as:"div",body:!1};var O=d("h5"),j=d("h6"),E=Object(u.a)(v,"card");E.Img=f,E.Title=Object(m.a)("card-title",{Component:O}),E.Subtitle=Object(m.a)("card-subtitle",{Component:j}),E.Body=h,E.Link=Object(m.a)("card-link",{Component:"a"}),E.Text=Object(m.a)("card-text",{Component:"p"}),E.Header=Object(m.a)("card-header"),E.Footer=Object(m.a)("card-footer"),E.ImgOverlay=Object(m.a)("card-img-overlay");t.a=E},426:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a.n(r),s=a(27),c=a(8),o=a(9),l=a(11),i=a(10),u=a(12),m=a(0),d=a.n(m),p=a(325),b=a(134),f=a(327),h=a(317),v=a(14),O=a(89),j=a(33),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={viewer:"no",results:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("store_id"),e.next=4,j.a.post("/orderhistory",{store_id:t});case 4:return a=e.sent,e.next=7,a.data;case 7:r=e.sent,this.setState({results:r}),this.state.results&&this.state.results.length>0&&this.setState({viewer:"yes"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null===localStorage.getItem("store_id")?d.a.createElement(v.a,{to:"/auth/signin"}):d.a.createElement(O.a,null,d.a.createElement(p.a,null,d.a.createElement(b.a,null,d.a.createElement(f.a,null,d.a.createElement(f.a.Header,null,d.a.createElement(f.a.Title,{as:"h5"},"Transaction History "),d.a.createElement("span",{className:"d-block m-t-5"})),d.a.createElement(f.a.Body,null,d.a.createElement(h.a,{responsive:!0,hover:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"#"),d.a.createElement("th",null,"Reference No"),d.a.createElement("th",null,"Amount"),d.a.createElement("th",null,"Date and Time"))),d.a.createElement("tbody",null,this.state.results.map((function(e,t){return d.a.createElement("tr",null,d.a.createElement("th",{scope:"row"},t+1),d.a.createElement("td",null,e.reference_no),d.a.createElement("td",null,e.amount),d.a.createElement("td",null,e.date,e.time))})))))))))}}]),t}(d.a.Component);document.title="Transaction History | "+localStorage.getItem("username"),t.default=E}}]);
//# sourceMappingURL=23.5e21d86a.chunk.js.map