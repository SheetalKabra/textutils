(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),l=a.n(r),s=(a(10),a(2)),o=(a(11),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("select",{className:"form-select","aria-label":"Default select example",style:{width:"10%"},onChange:e.changeColor,children:[Object(o.jsx)("option",{defaultValue:!0,children:"Select color"}),Object(o.jsx)("option",{value:"red",children:"Red"}),Object(o.jsx)("option",{value:"black",children:"Black"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Darkmode"})]})]})]})})}var d=a(5),b=a.n(d);a(15);function h(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:e.colorArray.backgroundColor,color:"dark"===e.mode?"white":"black"}})}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Upper Case"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lower Case"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.split(/[  ]+/);r(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){r(""),e.showAlert("Text has been cleared!","success")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[""===n?0:n.trim().split(" ").length," words, ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," minutes to read."]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter the text in the above textbox to preview"})]})]})}var u=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})};var j=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),l=Object(s.a)(r,2),d=l[0],b=l[1],j=Object(c.useState)("black"),m=Object(s.a)(j,2),x=m[0],g=m[1],p=Object(c.useState)({colorValue:"black",backgroundColor:"white"}),v=Object(s.a)(p,2),O=v[0],f=v[1],C=function(e,t){b({msg:e,type:t}),setTimeout((function(){b(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){var e="",t="";console.log(x),"light"===a?(n("dark"),"red"===x?(e="#dd0430",t=""):(e="grey",t=""),C("Dark mode has been enabled!!!","success"),document.title="Textutils - Dark Mode"):(n("light"),"red"===x?(e="#d9677e",t=""):(e="white",t=""),C("Light mode has been enabled!!!","success"),document.title="Textutils - Light Mode"),document.body.style.backgroundColor=e,f({color:t,backgroundColor:e})},changeColor:function(e){g(e.target.value),console.log(x)}}),Object(o.jsx)(u,{alert:d}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(h,{heading:"Enter the text to analyze ",mode:a,showAlert:C,colorArray:O})})]})};i.propTypes={title:b.a.string.isRequired},i.defaultProps={title:"Add Title here",aboutText:"About Us"};var m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),r(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.2dccba28.chunk.js.map