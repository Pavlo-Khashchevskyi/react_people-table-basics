(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(23),a=c(9),r=(c(33),c(34),c(35),c(3)),s=c(2),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=c(4),l=c(21),o=c(7),b=c(5),h=c(0);function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(37);var u=function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.person;return Object(s.jsx)(a.b,{className:"f"===t.sex?"has-text-danger":"",to:"/people/".concat(t.slug),children:t.name})},x=function(e){var t=e.persone,c=t.sex,n=t.born,a=t.died,j=t.motherName,i=t.fatherName,l=t.mother,o=t.father,b=Object(r.p)().slug;return Object(s.jsxs)("tr",{className:t.slug===b?"has-background-warning":"","data-cy":"person",children:[Object(s.jsx)("td",{children:Object(s.jsx)(O,{person:t})}),Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:a}),Object(s.jsx)("td",{children:l?Object(s.jsx)(O,{person:l}):j||"-"}),Object(s.jsx)("td",{children:o?Object(s.jsx)(O,{person:o}):i||"-"})]})},p=function(e){var t=e.peopel;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(x,{persone:e},e.slug)}))})]})},m=function(){var e=Object(h.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(null),r=Object(b.a)(a,2),j=r[0],O=r[1],x=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,d();case 4:t=e.sent,c=t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})})),O(c);case 7:return e.prev=7,n(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[0,,7,10]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){x()}),[]),c?Object(s.jsx)(u,{}):j?Object(s.jsxs)("div",{className:"block",children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"box table-container",children:Object(s.jsx)(p,{peopel:j})})]}):null},f=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},v=c(24),N=c.n(v),g=function(e){var t=e.to,c=e.text,n=Object(r.k)().pathname;return Object(s.jsx)(a.c,{to:t,className:N()("navbar-item",{"has-background-grey-lighter":n===t}),children:c})},y=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(g,{to:"/",text:"Home"}),Object(s.jsx)(g,{to:"/people",text:"People"})]})})})},w=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(y,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.b,{path:"people",element:Object(s.jsx)(m,{})}),Object(s.jsx)(r.b,{path:"people/:slug",element:Object(s.jsx)(m,{})}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(f,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(w,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.06187c5d.chunk.js.map