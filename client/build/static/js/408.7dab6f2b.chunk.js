"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[408],{4072:(e,a,s)=>{s.d(a,{c:()=>n});s(9060);var t=s(12),c=s(2496);const n=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"text-center my-5",children:(0,c.jsxs)("div",{className:"list-group",children:[(0,c.jsx)("h4",{children:"Admin Panel"}),(0,c.jsx)(t.Af,{to:"/dashboard/admin/create-category",className:"list-group-item list-group-item-action",children:"Create Category"}),(0,c.jsx)(t.Af,{to:"/dashboard/admin/create-product",className:"list-group-item list-group-item-action",children:"Create Products"}),(0,c.jsx)(t.Af,{to:"/dashboard/admin/products",className:"list-group-item list-group-item-action",children:"Products"}),(0,c.jsx)(t.Af,{to:"/dashboard/admin/orders",className:"list-group-item list-group-item-action",children:"Orders"}),(0,c.jsx)(t.Af,{to:"/dashboard/admin/users",className:"list-group-item list-group-item-action",children:"Users"})]})})})},9348:(e,a,s)=>{s.d(a,{c:()=>v});s(9060);var t=s(496),c=s(12),n=s(3928),r=s(9652),l=s(7640),o=s(8372),i=s(1560),d=s(2496);const m=()=>{const[e,a]=(0,l.k)(),s=(0,i.i6)();return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{className:"search-form d-flex",role:"search",onSubmit:async t=>{t.preventDefault();try{const{data:t}=await o.c.get("/api/v1/product/search/".concat(e.keyword));a({...e,results:t}),s("/search")}catch(c){console.log(c)}},children:[(0,d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:e.keyword,onChange:s=>a({...e,keyword:s.target.value})}),(0,d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})};var u=s(6068),h=s(2020),g=s(6952);const x=()=>{var e,a;const[s,t]=(0,n.S)(),[l]=(0,h.G)(),o=(0,u.c)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("nav",{className:"navbar navbar-expand-lg bg-body-tertiary fixed-top",children:(0,d.jsxs)("div",{className:"container-fluid",children:[(0,d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,d.jsx)("span",{className:"navbar-toggler-icon"})}),(0,d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,d.jsx)(c.cH,{className:"navbar-brand",to:"/",children:"\ud83d\uded2Ecommerce App"}),(0,d.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,d.jsx)(m,{}),(0,d.jsx)("li",{className:"nav-item ms-2",children:(0,d.jsx)(c.Af,{className:"nav-link",to:"/",children:"Home"})}),(0,d.jsxs)("li",{className:"nav-item dropdown",children:[(0,d.jsx)(c.cH,{className:"nav-link dropdown-toggle",to:"/categories",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),(0,d.jsxs)("ul",{className:"dropdown-menu",children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.cH,{className:"dropdown-item",to:"/categories",children:"All Categories"})}),null===o||void 0===o?void 0:o.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)(c.cH,{className:"dropdown-item",to:"/category/".concat(e.slug),children:e.name})},e._id)))]})]}),s.user?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("li",{className:"nav-item dropdown",children:[(0,d.jsx)(c.Af,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",to:"#","aria-expanded":"false",children:null===s||void 0===s||null===(e=s.user)||void 0===e?void 0:e.name}),(0,d.jsxs)("ul",{className:"dropdown-menu",children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.Af,{className:"dropdown-item",to:"/dashboard/".concat(1===(null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.role)?"admin":"user"),children:"Dashboard"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.Af,{onClick:()=>{t({...s,user:null,token:""}),localStorage.removeItem("auth"),r.cp.success("Logout successfully")},className:"dropdown-item",to:"/login",children:"Logout"})})]})]})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(c.Af,{className:"nav-link",to:"/register",children:"Register"})}),(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(c.Af,{className:"nav-link",to:"/login",children:"Login"})})]}),(0,d.jsx)("li",{className:"nav-item mt-2",children:(0,d.jsx)(g.c,{count:null===l||void 0===l?void 0:l.length,showZero:!0,children:(0,d.jsx)(c.Af,{className:"nav-link",to:"/cart",children:"Cart"})})})]})]})]})})})},p=()=>(0,d.jsxs)("div",{className:"footer",children:[(0,d.jsx)("h1",{className:"text-center",children:"All Right Reserved \xa9 KaranM"}),(0,d.jsxs)("p",{className:"text-center mt-3",children:[(0,d.jsx)(c.cH,{to:"/about",children:"About"}),(0,d.jsx)(c.cH,{to:"/contact",children:"Contact"}),(0,d.jsx)(c.cH,{to:"/policy",children:"Private Policy"})]})]}),j=e=>{let{children:a,title:s,description:c,keywords:n,author:l}=e;return(0,d.jsxs)("div",{children:[(0,d.jsxs)(t.S,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("meta",{name:"description",content:c}),(0,d.jsx)("meta",{name:"keywords",content:n}),(0,d.jsx)("meta",{name:"author",content:l}),(0,d.jsx)("title",{children:s})]}),(0,d.jsx)(x,{}),(0,d.jsxs)("main",{style:{minHeight:"70vh"},children:[(0,d.jsx)(r.ox,{}),a]}),(0,d.jsx)(p,{})]})};j.defaultProps={title:"Ecommerce app",description:"mern stack project",keywords:"mern,react,node,mongodb,express",author:"karanm_"};const v=j},6068:(e,a,s)=>{s.d(a,{c:()=>n});var t=s(9060),c=s(8372);function n(){const[e,a]=(0,t.useState)([]);return(0,t.useEffect)((()=>{(async()=>{try{const{data:e}=await c.c.get("/api/v1/category/get-category");a(null===e||void 0===e?void 0:e.category)}catch(e){console.log(e)}})()}),[]),e}},8028:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(9060),c=s(9652),n=s(8372),r=s(9348),l=s(4072),o=s(2496);const i=e=>{let{handleSubmit:a,value:s,setValue:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:a,children:[(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter new category",value:s,onChange:e=>t(e.target.value)})}),(0,o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})};var d=s(224);const m=()=>{const[e,a]=(0,t.useState)([]),[s,m]=(0,t.useState)(""),[u,h]=(0,t.useState)(!1),[g,x]=(0,t.useState)(null),[p,j]=(0,t.useState)(""),v=async()=>{try{const{data:e}=await n.c.get("/api/v1/category/get-category");null!==e&&void 0!==e&&e.success&&a(null===e||void 0===e?void 0:e.category)}catch(e){console.log(e),c.cp.error("Something went wrong in getting category")}};return(0,t.useEffect)((()=>{v()}),[]),(0,o.jsx)(r.c,{title:"Dashboard - Create Category",children:(0,o.jsx)("div",{className:"container-fluid mr-3 p-3  my-5",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-3",children:(0,o.jsx)(l.c,{})}),(0,o.jsxs)("div",{className:"col-md-8",children:[(0,o.jsx)("h1",{children:"Manage Category"}),(0,o.jsx)("div",{className:"p-3 w-50",children:(0,o.jsx)(i,{handleSubmit:async e=>{e.preventDefault();try{const{data:e}=await n.c.post("/api/v1/category/create-category",{name:s});null!==e&&void 0!==e&&e.success?(c.cp.success("".concat(s," is created")),v()):c.cp.error(e.message)}catch(a){console.log(a),c.cp.error("Something went wrong in input form")}},value:s,setValue:m})}),(0,o.jsx)("div",{className:"w-75",children:(0,o.jsxs)("table",{className:"table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:"Name"}),(0,o.jsx)("th",{scope:"col",children:"Actions"})]})}),(0,o.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.name}),(0,o.jsxs)("td",{children:[(0,o.jsx)("button",{className:"btn btn-primary ms-2",onClick:()=>{h(!0),j(e.name),x(e)},children:"Edit"}),(0,o.jsx)("button",{className:"btn btn-danger ms-2",onClick:()=>(async e=>{try{const{data:a}=await n.c.delete("/api/v1/category/delete-category/".concat(e));null!==a&&void 0!==a&&a.success?(c.cp.success("Category is Deleted"),v()):c.cp.error(a.message)}catch(a){console.log(a),c.cp.error("Something went wrong")}})(e._id),children:"Delete"})]})]},e._id)))})]})}),(0,o.jsx)(d.c,{onCancel:()=>h(!1),footer:null,open:u,children:(0,o.jsx)(i,{value:p,setValue:j,handleSubmit:async e=>{e.preventDefault();try{const{data:a}=await n.c.put("/api/v1/category/update-category/".concat(g._id),{name:p});null!==a&&void 0!==a&&a.success?(c.cp.success("".concat(p," is updated")),x(null),j(null),h(null),v()):c.cp.error(a.message),console.log(e)}catch(a){console.log(a),c.cp.error("Something went wrong")}}})})]})]})})})}}}]);
//# sourceMappingURL=408.7dab6f2b.chunk.js.map