(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(16),c=n.n(s),a=n(3),o=n(2),u=n(0),r=function(e){return Object(u.jsxs)("div",{children:["filter shown with:",Object(u.jsx)("input",{value:e.value,onChange:e.onChange})]})},i=n(17),l=n(4),b=n.n(l),j="/api/persons",d=function(){return b.a.get(j)},m=function(e){return b.a.post(j,e)},f=function(e,t){return b.a.put("".concat(j,"/").concat(e),t)},h=function(e){return b.a.delete("".concat(j,"/").concat(e))},O=function(e){var t=function(t,n){window.confirm("".concat(e.newName," is already added to phonebook, replace the old number with a new one?"))&&f(n,t).then((function(t){e.setPersons(e.persons.map((function(e){return e.id!==n?e:t.data}))),e.setNewName(""),e.setNumber(""),e.setSuccess(!0),e.setMessage("Updated ".concat(e.newName)),setTimeout((function(){e.setMessage(null)}),2500)})).catch((function(t){e.setSuccess(!1),e.setMessage("Information of ".concat(e.newName," has already been removed from server")),setTimeout((function(){e.setMessage(null)}),5500)}))};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s,c={name:e.newName,number:e.number},a=Object(i.a)(e.persons);try{for(a.s();!(s=a.n()).done;){var o=s.value;if(e.newName===o.name){var u=o.id;t(c,u)}}}catch(r){a.e(r)}finally{a.f()}m(c).then((function(t){e.setPersons(e.persons.concat(t.data)),e.setNewName(""),e.setNumber(""),e.setSuccess(!0),e.setMessage("Added ".concat(e.newName)),setTimeout((function(){e.setMessage(null)}),2500)})).catch((function(t){e.setSuccess(!1),e.setMessage(t.response.data.error),setTimeout((function(){e.setMessage(null)}),3500)}))},children:[Object(u.jsxs)("div",{children:["name:",Object(u.jsx)("input",{value:e.newName,onChange:e.changeName}),Object(u.jsx)("br",{}),"number:",Object(u.jsx)("input",{value:e.number,onChange:e.changeNumber})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},g=function(e){var t=e.showAll?e.persons:e.persons.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}));return Object(u.jsx)("div",{children:t.map((function(t){return Object(u.jsxs)("p",{children:[" ",t.name," ",t.number,Object(u.jsx)("button",{onClick:function(){return n=t.id,s=t.name,void(window.confirm("Delete ".concat(s," ?"))&&h(n).then(e.setPersons(e.persons.filter((function(e){return e.id!==n}))),e.setSuccess(!0),e.setMessage("Deleted ".concat(s)),setTimeout((function(){e.setMessage(null)}),2500)).catch((function(t){e.setSuccess(!1),e.setMessage("Information of ".concat(s," has already been removed from server")),setTimeout((function(){e.setMessage(null)}),2500)})));var n,s},children:"delete"})]},t.name)}))})},v=function(e){return null===e.message?null:!0===e.success?Object(u.jsx)("div",{className:"success",children:e.message}):!1===e.success?Object(u.jsx)("div",{className:"error",children:e.message}):void 0},p=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],c=Object(o.useState)(""),i=Object(a.a)(c,2),l=i[0],b=i[1],j=Object(o.useState)(""),m=Object(a.a)(j,2),f=m[0],h=m[1],p=Object(o.useState)(!0),w=Object(a.a)(p,2),x=w[0],N=w[1],S=Object(o.useState)(""),M=Object(a.a)(S,2),C=M[0],y=M[1],P=Object(o.useState)(null),T=Object(a.a)(P,2),k=T[0],A=T[1],D=Object(o.useState)(!0),I=Object(a.a)(D,2),E=I[0],J=I[1];Object(o.useEffect)((function(){d().then((function(e){s(e.data)})).catch((function(e){console.log("fail")}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(v,{message:k,success:E}),Object(u.jsx)(r,{value:C,onChange:function(e){y(e.target.value),N(!1)}}),Object(u.jsx)("h3",{children:"Add a new"}),Object(u.jsx)(O,{persons:n,setPersons:s,newName:l,setNewName:b,number:f,setNumber:h,changeName:function(e){b(e.target.value)},changeNumber:function(e){h(e.target.value)},setMessage:A,setSuccess:J}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(g,{persons:n,setPersons:s,showAll:x,filter:C,setMessage:A,setSuccess:J})]})};n(42);c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a2dbd000.chunk.js.map