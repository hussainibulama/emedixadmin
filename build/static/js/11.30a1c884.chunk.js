(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[11],{309:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(3);t.a=function(e){return n.a.createElement("div",{className:"errormessage"},n.a.createElement(s.Grid,null,n.a.createElement(s.Cell,{col:2},n.a.createElement("div",{className:"center"},n.a.createElement("div",{className:"errcircle"},"!"))),n.a.createElement(s.Cell,{col:10},n.a.createElement("p",null,e.msg))))}},310:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(3),l=a(15),i=a(22);t.a=function(e){return n.a.createElement("div",{className:"goodmessage"},n.a.createElement(s.Grid,null,n.a.createElement(s.Cell,{col:2},n.a.createElement("div",{className:"center"},n.a.createElement("div",{className:"goodcircle"},n.a.createElement(l.a,{icon:i.f})))),n.a.createElement(s.Cell,{col:10},n.a.createElement("p",null,e.msg))))}},311:function(e,t,a){"use strict";var r=a(70),n=a(8),s=a(9),l=a(11),i=a(10),c=a(12),o=a(0),m=a.n(o),d=a(560),u=a(327),p=a(562),h=a(313),g=a.n(h),f=a(89),E=a(312),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={isOption:a.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},a.cardReloadHandler=function(){a.setState({loadCard:!0}),setInterval((function(){a.setState({loadCard:!1})}),3e3)},a.cardRemoveHandler=function(){a.setState({cardRemove:!0})},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a,n,s,l=this,i=[];return this.state.isOption&&(a=m.a.createElement("div",{className:"card-header-right"},m.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},m.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},m.a.createElement("i",{className:"feather icon-more-horizontal"})),m.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){l.setState((function(e){return{fullCard:!e.fullCard}}))}},m.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),m.a.createElement("a",{href:E.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){l.setState((function(e){return{collapseCard:!e.collapseCard}}))}},m.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),m.a.createElement("a",{href:E.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},m.a.createElement("i",{className:"feather icon-refresh-cw"}),m.a.createElement("a",{href:E.a.BLANK_LINK}," Reload ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},m.a.createElement("i",{className:"feather icon-trash"}),m.a.createElement("a",{href:E.a.BLANK_LINK}," Remove ")))))),n=m.a.createElement(u.a.Header,null,m.a.createElement(u.a.Title,{as:"h5"},this.props.title),a),this.state.fullCard&&(i=[].concat(Object(r.a)(i),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(i=[].concat(Object(r.a)(i),["card-load"]),t=m.a.createElement("div",{className:"card-loader"},m.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(i=[].concat(Object(r.a)(i),["d-none"])),this.props.cardClass&&(i=[].concat(Object(r.a)(i),[this.props.cardClass])),s=m.a.createElement(u.a,{className:i.join(" "),style:e},n,m.a.createElement(p.a,{in:!this.state.collapseCard},m.a.createElement("div",null,m.a.createElement(u.a.Body,null,this.props.children))),t),m.a.createElement(f.a,null,s)}}]),t}(o.Component);t.a=g()(v)},317:function(e,t,a){"use strict";var r=a(4),n=a(5),s=a(7),l=a(2),i=a.n(l),c=a(0),o=a.n(c),m=a(19),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,s=e.striped,l=e.bordered,c=e.hover,m=e.size,d=e.variant,u=e.responsive,p=Object(n.a)(e,["bsPrefix","className","striped","bordered","hover","size","variant","responsive"]),h=i()(t,a,d&&t+"-"+d,m&&t+"-"+m,s&&t+"-striped",l&&t+"-bordered",c&&t+"-hover"),g=o.a.createElement("table",Object(r.a)({},p,{className:h}));if(u){var f=t+"-responsive";return"string"===typeof u&&(f=f+"-"+u),o.a.createElement("div",{className:f},g)}return g},t}(o.a.Component);t.a=Object(m.a)(d,"table")},333:function(e,t,a){"use strict";var r=a(4),n=a(5),s=a(7),l=a(2),i=a.n(l),c=a(0),o=a.n(c),m=a(90),d=a(19),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.size,s=e.className,l=e.as,c=Object(n.a)(e,["bsPrefix","size","className","as"]);return o.a.createElement(l,Object(r.a)({},c,{className:i()(s,t,a&&t+"-"+a)}))},t}(o.a.Component);u.defaultProps={as:"div"};var p=Object(m.a)("input-group-append"),h=Object(m.a)("input-group-prepend"),g=Object(m.a)("input-group-text",{Component:"span"}),f=Object(d.a)(u,"input-group");f.Text=g,f.Radio=function(e){return o.a.createElement(g,null,o.a.createElement("input",Object(r.a)({type:"radio"},e)))},f.Checkbox=function(e){return o.a.createElement(g,null,o.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},f.Append=p,f.Prepend=h,t.a=f},545:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a.n(r),s=a(27),l=a(40),i=a(8),c=a(9),o=a(11),m=a(10),d=a(12),u=a(0),p=a.n(u),h=a(325),g=a(134),f=a(327),E=a(317),v=a(15),b=a(22),y=a(307),x=a(333),_=a(133),S=a(309),k=a(310),C=a(69),w=a(33),N=a(89),O=a(311),j=a(13),P=function(e){var t={display:e.displayModal?"block":"none"};function a(t){t.stopPropagation(),e.closeModal()}return p.a.createElement("div",{className:"modal",onClick:a,style:t}," ",p.a.createElement("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()}}," ",p.a.createElement("span",{className:"close",onClick:a},"\xd7")," ",p.a.createElement("div",{className:"contentent",style:{margin:"0 auto",width:"60%"}},p.a.createElement("div",{style:{lineHeight:"30px",marginLeft:"10px"}}," ","Uplaod images for ",e.image_name),p.a.createElement(y.a,{onSubmit:e.onSubmit},p.a.createElement(y.a.Group,{controlId:"exampleForm.ControlTextarea1"},p.a.createElement("input",{style:{position:"relative",left:"0",marginLeft:"-8px"},onChange:e.singleFileChangedHandler,type:"file",name:"file"})),p.a.createElement(C.a,{onClick:e.singleFileUploadHandler,value:p.a.createElement(p.a.Fragment,null,e.loading&&p.a.createElement(v.a,{style:{position:"relative",top:"0px"},icon:b.x,spin:!0})," ",!e.loading&&p.a.createElement(p.a.Fragment,null," Upload Image"))}))))," ")},I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).selectModal=function(e){a.setState({modal:!a.state.modal})},a.singleFileChangedHandler=function(e){a.setState({selectedFile:e.target.files[0]})},a.singleFileUploadHandler=function(){var e=new FormData;a.setState({loading:!0}),a.state.selectedFile?(e.append("profileImage",a.state.selectedFile,a.state.selectedFile.name),w.a.post("uploadpreorder/"+a.state.image_id,e,{headers:{boundary:e._boundary}}).then((function(e){200===e.status&&(!1===e.data.success?(a.setState({errmsg:e.data.msg}),a.setState({error:!0,loading:!1,modal:!1}),a.setState({good:!1})):(a.setState({gmsg:e.data.msg,modal:!1}),a.resetForm(),a.refresh(),a.setState({good:!0,loading:!1}),a.setState({error:!1})))})).catch((function(e){console.log(e)}))):(a.setState({errmsg:"No file selected, please upload a file"}),a.setState({error:!0,modal:!1}),a.setState({good:!1}))},a.handleChange=function(e){e.preventDefault();var t=e.target,r=t.name,n=t.value;a.setState(Object(l.a)({},r,n))},a.state={preorder_id:a.props.preorder_id,results:[],item_name:"",item_price:"",loading:!1,selectedFile:null,loader:!1,modal:!1,image_id:"",image_name:"",error:!1,errmsg:null,good:!1,gmsg:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/preorderitem",{preorder_id:this.state.preorder_id});case 3:return t=e.sent,e.next=6,t.data;case 6:a=e.sent,this.setState({results:a}),this.state.results&&this.state.results.length>0&&this.setState({available:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"deleteRecord",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/deletepreorderitem",{item_id:t});case 3:return a=e.sent,e.next=6,a.data;case 6:(r=e.sent)&&r.success?(this.setState({gmsg:r.msg}),this.setState({good:!0}),this.refresh()):r&&!1===r.success&&(this.setState({loading:!1}),this.setState({errmsg:r.msg}),this.setState({error:!0})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/preorderitem",{preorder_id:this.state.preorder_id});case 3:return t=e.sent,e.next=6,t.data;case 6:a=e.sent,this.setState({results:a}),this.state.results&&this.state.results.length>0&&this.setState({available:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"addItem",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({loading:!0}),""===this.state.item_name||""===this.state.item_price){e.next=39;break}return e.prev=2,e.next=5,w.a.post("/insertitems",{preorder_id:this.state.preorder_id,item_name:this.state.item_name,item_price:this.state.item_price});case 5:return t=e.sent,e.next=8,t.data;case 8:if(!(a=e.sent)||!a.success){e.next=31;break}return this.setState({loading:!1}),this.resetForm(),this.setState({gmsg:a.msg}),this.setState({good:!0}),this.setState({error:!1}),e.prev=15,e.next=18,w.a.post("/preorderitem",{preorder_id:this.state.preorder_id});case 18:return r=e.sent,e.next=21,r.data;case 21:s=e.sent,this.setState({results:s}),this.state.results&&this.state.results.length>0&&this.setState({available:!0}),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(15),console.log(e.t0);case 29:e.next=32;break;case 31:a&&!1===a.success&&(this.setState({loading:!1}),this.setState({errmsg:a.msg}),this.setState({error:!0}),this.setState({good:!1}));case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(2),console.log(e.t1);case 37:e.next=42;break;case 39:this.setState({loading:!1}),this.setState({errmsg:"Please Fill out your form Correctly"}),this.setState({error:!0});case 42:case"end":return e.stop()}}),e,this,[[2,34],[15,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({item_name:"",item_price:""})}},{key:"editRecord",value:function(){var e=Object(s.a)(n.a.mark((function e(t,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({image_id:t,image_name:a,modal:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"addProduct",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({loading:!0}),""===this.state.p_title||""===this.state.p_description||""===this.state.p_price||""===this.state.p_quantity||""===this.state.p_status){e.next=18;break}return e.prev=2,t=localStorage.getItem("store_id"),e.next=6,w.a.post("/addproduct",{store_id:t,p_title:this.state.p_title,p_description:this.state.p_description,p_price:this.state.p_price,p_cprice:this.state.p_cprice,p_cpu:this.state.p_cpu,p_sku:this.state.p_sku,p_quantity:this.state.p_quantity,p_status:this.state.p_status});case 6:return a=e.sent,e.next=9,a.data;case 9:(r=e.sent)&&r.success?(this.setState({loading:!1}),this.resetForm(),this.setState({gmsg:r.msg}),this.setState({good:!0}),this.setState({error:!1})):r&&!1===r.success&&(this.setState({loading:!1}),this.setState({errmsg:r.msg}),this.setState({error:!0}),this.setState({good:!1})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:e.next=21;break;case 18:this.setState({loading:!1}),this.setState({errmsg:"Please Fill out your form Correctly"}),this.setState({error:!0});case 21:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,r=t.modal,n=t.errmsg,s=t.error,l=t.good,i=t.gmsg;return p.a.createElement(N.a,null,p.a.createElement(h.a,null,p.a.createElement(g.a,null,p.a.createElement(O.a,{title:p.a.createElement("div",{className:"scaleto"},p.a.createElement("div",{className:"backer"},p.a.createElement(j.b,{onClick:this.props.onClick},p.a.createElement(v.a,{style:{fontSize:"20px",color:"#000000"},icon:b.c})))," ",p.a.createElement("div",{style:{lineHeight:"30px",marginLeft:"10px"}}," ","Add items for ",this.props.head))},s&&p.a.createElement(S.a,{msg:n}),l&&p.a.createElement(k.a,{msg:i}),r&&p.a.createElement(P,{loading:this.state.loading,value:"Withdraw",image_name:this.state.image_name,singleFileChangedHandler:this.singleFileChangedHandler,singleFileUploadHandler:this.singleFileUploadHandler,onClick:function(){return e.Preorder()},displayModal:this.state.modal,closeModal:this.selectModal,onChange:this.handleChange,onSubmit:this.handleSubmit,image_id:this.state.image_id}),p.a.createElement(h.a,null,p.a.createElement(g.a,{md:12},p.a.createElement(y.a,{onSubmit:this.handleSubmit},p.a.createElement(h.a,null,p.a.createElement("div",{className:"smallcards"},p.a.createElement(g.a,{md:12},p.a.createElement(y.a.Group,{controlId:"formBasicEmail"},p.a.createElement(y.a.Label,null,"Title"),p.a.createElement(y.a.Control,{type:"text",name:"item_name",value:this.state.item_name?this.state.item_name:"",onChange:this.handleChange,placeholder:"Long sleev t-shirt"}))),p.a.createElement(g.a,{md:12},p.a.createElement(y.a.Group,{controlId:"formBasicEmail"},p.a.createElement(y.a.Label,null,"Price"),p.a.createElement(x.a,{className:"mb-3"},p.a.createElement(x.a.Prepend,null,p.a.createElement(x.a.Text,null,"\u20a6")),p.a.createElement(_.a,{name:"item_price",value:this.state.item_price?this.state.item_price:"",onChange:this.handleChange}),p.a.createElement(x.a.Append,null,p.a.createElement(x.a.Text,null,".00")))),p.a.createElement(C.a,{name:"Login",onClick:function(){return e.addItem()},value:p.a.createElement(p.a.Fragment,null,a&&p.a.createElement(v.a,{style:{position:"relative",top:"0px"},icon:b.x,spin:!0})," ",!a&&p.a.createElement(p.a.Fragment,null,"Add Product")),placeholder:"Enter your name",handleChange:this.handleFullName})))))))),p.a.createElement(f.a,null,p.a.createElement(f.a.Header,null,p.a.createElement(f.a.Title,{as:"h5"},"Item List ")),p.a.createElement(f.a.Body,null,p.a.createElement(E.a,{responsive:!0,hover:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"#"),p.a.createElement("th",null,"Item Name"),p.a.createElement("th",null,"Item Price"),p.a.createElement("th",null,"Action"))),p.a.createElement("tbody",null,this.state.results.map((function(t,a){return p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},a+1),p.a.createElement("td",null,t.item_name),p.a.createElement("td",null,t.item_price),p.a.createElement("td",null,p.a.createElement("div",null,p.a.createElement(v.a,{className:"editing",onClick:function(){return e.editRecord(t.item_id,t.item_name)},icon:b.v}),p.a.createElement(v.a,{onClick:function(){return e.deleteRecord(t.item_id)},className:"editing",icon:b.A}))))})))))))))}}]),t}(p.a.Component),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).selectModal=function(e){a.setState({modal:!a.state.modal})},a.state={preorder_id:a.props.preorder_id,results:[],item_name:"",item_price:"",loading:!1,selectedFile:null,loader:!1,modal:!1,image_id:"",image_name:"",error:!1,errmsg:null,good:!1,gmsg:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/preorderorderhistory",{preorder_id:this.state.preorder_id});case 3:return t=e.sent,e.next=6,t.data;case 6:a=e.sent,this.setState({results:a}),this.state.results&&this.state.results.length>0&&this.setState({available:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"Refresh",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/preorderorderhistory",{preorder_id:this.state.preorder_id});case 3:return t=e.sent,e.next=6,t.data;case 6:a=e.sent,this.setState({results:a}),this.state.results&&this.state.results.length>0&&this.setState({available:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"UpdateItem",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/preorderupdate",{id:t});case 3:return a=e.sent,e.next=6,a.data;case 6:(r=e.sent)&&r.success&&this.Refresh(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return p.a.createElement(N.a,null,p.a.createElement(h.a,null,p.a.createElement(g.a,null,p.a.createElement(O.a,{title:p.a.createElement("div",{className:"scaleto"},p.a.createElement("div",{className:"backer"},p.a.createElement(j.b,{onClick:this.props.onClick},p.a.createElement(v.a,{style:{fontSize:"20px",color:"#000000"},icon:b.c})))," ",p.a.createElement("div",{style:{lineHeight:"30px",marginLeft:"10px"}}," ","View Orders for ",this.props.head))},p.a.createElement(h.a,null,p.a.createElement(g.a,{md:12},p.a.createElement(E.a,{responsive:!0,hover:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"#"),p.a.createElement("th",null,"Customer Information"),p.a.createElement("th",null,"Order Information"),p.a.createElement("th",null,"Amount Paid"))),p.a.createElement("tbody",null,this.state.results.map((function(t,a){return p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},a+1),p.a.createElement("td",null,t.customer_info),p.a.createElement("td",null,t.order_details),p.a.createElement("td",null,t.amount),p.a.createElement("td",null," ","now"===t.status&&p.a.createElement("button",{onClick:function(){return e.UpdateItem(t.id)}},"Archieve")))}))))))))))}}]),t}(p.a.Component),L=a(14),M=function(e){var t={display:e.displayModal?"block":"none"};function a(t){t.stopPropagation(),e.closeModal()}return p.a.createElement("div",{className:"modal",onClick:a,style:t}," ",p.a.createElement("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()}}," ",p.a.createElement("span",{className:"close",onClick:a},"\xd7")," ",p.a.createElement("div",{className:"contentent",style:{margin:"0 auto",width:"60%"}},p.a.createElement("p",{style:{color:"#000000"}}," ",e.message),p.a.createElement(y.a,{onSubmit:e.onSubmit},p.a.createElement(y.a.Group,{controlId:"formBasicEmail"},p.a.createElement(y.a.Label,null,"Preorder Link Username"),p.a.createElement(x.a,{className:"mb-3"},p.a.createElement(x.a.Prepend,null,p.a.createElement(x.a.Text,{id:"basic-addon3"},"swip.ng/preorder/")),p.a.createElement(_.a,{name:"pre_username",value:e.pre_username?e.pre_username:"",onChange:e.onChange,id:"basic-url","aria-describedby":"basic-addon3"}))),p.a.createElement(y.a.Group,{controlId:"formBasicEmail"},p.a.createElement(y.a.Label,null,"Preorder expires in:"),p.a.createElement(y.a.Control,{type:"date",name:"expire",value:e.expire?e.expire:"",onChange:e.onChange})),p.a.createElement(C.a,{disabled:e.loading,name:"Login",onClick:e.onClick,value:p.a.createElement(p.a.Fragment,null,e.loading&&p.a.createElement(v.a,{style:{position:"relative",top:"0px"},icon:b.x,spin:!0})," ",!e.loading&&p.a.createElement(p.a.Fragment,null," Create Preorder"))}))))," ")},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).selectModal=function(e){a.setState({modal:!a.state.modal})},a.handleChange=function(e){e.preventDefault();var t=e.target,r=t.name,n=t.value;a.setState(Object(l.a)({},r,n))},a.state={viewer:"no",view:"",balance:"",head:"",preorder_id:"",image:!1,results:[],pre_username:"",expire:"",loading:!1,loader:!1,modal:!1,error:!1,errmsg:null,good:!1,gmsg:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"CreatePreorder",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modal:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"editRecord",value:function(){var e=Object(s.a)(n.a.mark((function e(t,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({preorder_id:t,head:a,view:"add"});case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"viewOrders",value:function(){var e=Object(s.a)(n.a.mark((function e(t,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({preorder_id:t,head:a,view:"view"});case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"goBack",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({view:"",good:!1,error:!1}),e.prev=1,t=localStorage.getItem("store_id"),e.next=5,w.a.post("/preorderhistory",{store_id:t});case 5:return a=e.sent,e.next=8,a.data;case 8:r=e.sent,this.setState({results:r}),this.state.results&&this.state.results.length>0&&this.setState({viewer:"yes"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("store_id"),e.next=4,w.a.post("/preorderhistory",{store_id:t});case 4:return a=e.sent,e.next=7,a.data;case 7:r=e.sent,this.setState({results:r}),this.state.results&&this.state.results.length>0&&this.setState({viewer:"yes"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"Preorder",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,r,s,l,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({loading:!0}),""===this.state.pre_username||""===this.state.expire){e.next=45;break}return e.prev=2,t=localStorage.getItem("store_id"),e.next=6,w.a.post("/preorder",{store_id:t,preorder_name:this.state.pre_username,expire:this.state.expire});case 6:return a=e.sent,e.next=9,a.data;case 9:if(!(r=e.sent)||!r.success){e.next=33;break}return this.setState({loading:!1}),this.setState({gmsg:r.msg}),this.setState({good:!0}),this.setState({error:!1}),this.setState({modal:!1}),e.prev=16,s=localStorage.getItem("store_id"),e.next=20,w.a.post("/preorderhistory",{store_id:s});case 20:return l=e.sent,e.next=23,l.data;case 23:i=e.sent,this.setState({results:i}),this.state.results&&this.state.results.length>0&&this.setState({viewer:"yes"}),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(16),console.log(e.t0);case 31:e.next=38;break;case 33:this.setState({loading:!1}),this.setState({errmsg:r.msg}),this.setState({error:!0}),this.setState({good:!1}),this.setState({modal:!1});case 38:e.next=43;break;case 40:e.prev=40,e.t1=e.catch(2),console.log(e.t1);case 43:e.next=50;break;case 45:this.setState({loading:!1}),this.setState({errmsg:"Please Fill out your form Correctly"}),this.setState({error:!0}),this.setState({good:!1}),this.setState({modal:!1});case 50:case"end":return e.stop()}}),e,this,[[2,40],[16,28]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.modal,r=t.error,n=t.errmsg,s=t.good,l=t.gmsg,i=t.viewer,c=t.view;return null===localStorage.getItem("store_id")?p.a.createElement(L.a,{to:"/auth/signin"}):"yes"===i&&""===c?p.a.createElement(N.a,null,a&&p.a.createElement(M,{loading:this.state.loading,value:"Withdraw",onClick:function(){return e.Preorder()},displayModal:this.state.modal,closeModal:this.selectModal,onChange:this.handleChange,onSubmit:this.handleSubmit,pre_username:this.state.pre_username,expire:this.state.expire,message:this.state.message}),p.a.createElement(h.a,null,p.a.createElement(g.a,null,p.a.createElement(f.a,null,p.a.createElement(f.a.Header,null,p.a.createElement(f.a.Title,{as:"h5"},"Preorder "),p.a.createElement("span",{className:"d-block m-t-5"},p.a.createElement("div",{style:{textAlign:"right",float:"right",alignItems:"right",justifyContent:"right",display:"inline-flex"},className:"leftadd"},p.a.createElement(C.a,{name:"Login",onClick:function(){return e.CreatePreorder()},value:"Create Preorder",placeholder:"Enter your name",handleChange:this.handleFullName})))),p.a.createElement(f.a.Body,null,r&&p.a.createElement(S.a,{msg:n}),s&&p.a.createElement(k.a,{msg:l}),p.a.createElement(E.a,{responsive:!0,hover:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"#"),p.a.createElement("th",null,"Link Name"),p.a.createElement("th",null,"Expires in"),p.a.createElement("th",null,"Action"))),p.a.createElement("tbody",null,this.state.results.map((function(t,a){return p.a.createElement("tr",null,p.a.createElement("th",{scope:"row"},a+1),p.a.createElement("td",{style:{display:"inline-flex",fontSize:"16px",color:"#000000"}},"swip.ng/preorder/",p.a.createElement("div",{style:{color:"green",fontWeight:"900",display:"inline-flex"}},t.preorder_name)),p.a.createElement("td",null,t.expdate," "),p.a.createElement("td",null,p.a.createElement("div",null,p.a.createElement(v.a,{className:"editing",onClick:function(){return e.editRecord(t.preorder_id,t.preorder_name)},icon:b.g}),p.a.createElement(v.a,{className:"editing",onClick:function(){return e.viewOrders(t.preorder_id,t.preorder_name)},icon:b.s}))))}))))))))):"yes"===i&&"add"===c||"no"===i&&"add"===c?p.a.createElement(I,{head:this.state.head,preorder_id:this.state.preorder_id,onClick:function(){return e.goBack()}}):"yes"===i&&"view"===c||"no"===i&&"view"===c?p.a.createElement(F,{head:this.state.head,preorder_id:this.state.preorder_id,onClick:function(){return e.goBack()}}):p.a.createElement(N.a,null,p.a.createElement(h.a,null,p.a.createElement(g.a,null,p.a.createElement(O.a,{title:"Preorder(s)"},r&&p.a.createElement(S.a,{msg:n}),s&&p.a.createElement(k.a,{msg:l}),p.a.createElement("div",{className:"precards"},p.a.createElement("div",{className:"preimage"},p.a.createElement(v.a,{className:"precc",icon:b.h})),p.a.createElement("h3",null,"Create and Manage Preorders"),p.a.createElement("p",{style:{color:"#000000"}}," ","This is where you\u2019ll create preorder and manage its orders. you can attach all your preorder items with images."),p.a.createElement("div",{className:"scaleto"},p.a.createElement(C.a,{name:"Login",value:"Create Pre-order",onClick:function(){return e.CreatePreorder()},placeholder:"Enter your name",handleChange:this.handleFullName}),a&&p.a.createElement(M,{loading:this.state.loading,value:"Withdraw",onClick:function(){return e.Preorder()},displayModal:this.state.modal,closeModal:this.selectModal,onChange:this.handleChange,onSubmit:this.handleSubmit,pre_username:this.state.pre_username,expire:this.state.expire,message:this.state.message})))))))}}]),t}(p.a.Component);document.title="Preorder | "+localStorage.getItem("username");t.default=R}}]);
//# sourceMappingURL=11.30a1c884.chunk.js.map