(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),o=n.n(r),s=(n(44),n(9)),i=n(16),l=n(7),j=(n(36),n(45),n(39)),u=n(6),h=n(12),b=n(8),d=n(10),O=[],x="https://jarrettpage-nearbyplaces-api.herokuapp.com",m={getPlaces:function(){return fetch(x+"/places").then((function(e){return e.json()}))},addPlace:function(e){return fetch(x+"/place",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},searchPlaces:function(e,t){var n="";return 0!==e.length&&(n=n+"?placeName="+e),0!==t.length&&(n=0!==e.length?n+"&location="+t:n+"?location="+t),fetch(x+"/search"+n).then((function(e){return e.json()}))},addReview:function(e,t,n,c){return fetch(x+"/review/"+e,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:t,rating:n,customerName:c})})}},p=n(1);var g=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],j=o[1],x=Object(c.useState)([]),g=Object(s.a)(x,2),f=g[0],v=g[1],w=Object(c.useState)(!1),y=Object(s.a)(w,2),C=(y[0],y[1]),S=Object(c.useState)(!1),L=Object(s.a)(S,2),I=(L[0],L[1]),N=Object(c.useState)([]),k=Object(s.a)(N,2);k[0],k[1];var T=function(e){var t=e.comment;return null!=e.rating&&(t=t+" "+e.rating+" "),null!=e.customer&&(t=t+" "+e.customer),t};return Object(p.jsxs)("div",{children:[Object(p.jsxs)(u.a,{onSubmit:function(){m.searchPlaces(n,l).then((function(e){return v(e)})).catch((function(e){return console.log(e)}))},children:[Object(p.jsx)("h2",{children:"Search for a business near you!"}),Object(p.jsxs)(u.a.Row,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{placeholder:"Business",onChange:function(e){a(e.target.value)}})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{placeholder:"Location",onChange:function(e){j(e.target.value)}})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(h.a,{variant:"primary",type:"submit",children:"Search"})})]}),Object(p.jsxs)("h3",{children:["Know of a business we don't? ",Object(p.jsx)(i.b,{to:"/add",children:"Click here."})]})]}),f.map((function(e,t){return Object(p.jsxs)(d.a,{style:{width:"18rem"},children:[Object(p.jsx)(d.a.Header,{children:e.name}),Object(p.jsxs)(d.a.Body,{children:[Object(p.jsx)(d.a.Title,{children:e.location}),e.reviews.filter((function(e){return null!=e.comment})).map((function(e){return Object(p.jsx)(d.a.Text,{children:T(e)})})),Object(p.jsxs)(u.a,{onSubmit:function(t){return function(e,t){var n=O.find((function(e){return e.name===t}));n&&(n.name=e.target.newName.value,n.location=e.target.newLoc.value),I(!0),e.preventDefault()}(t,e.name)},children:[Object(p.jsx)("h4",{children:"If there is something wrong with the information, please fix it."}),Object(p.jsx)(u.a.Control,{placeholder:"New Name",name:"newName"}),Object(p.jsx)(u.a.Control,{placeholder:"New Location",name:"newLoc"}),Object(p.jsx)(h.a,{variant:"primary",type:"submit",children:"Update"})]}),Object(p.jsx)("h4",{children:"If this doesn't exist anymore, then delete it."}),Object(p.jsx)(h.a,{variant:"primary",onClick:function(e){return function(e,t){O.splice(t,1),C(!0),e.preventDefault()}(e,t)},children:"Delete"})]})]})}))]})};var f=function(e){var t=Object(l.f)(),n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),j=Object(s.a)(i,2),b=j[0],d=j[1],O=Object(c.useState)(""),x=Object(s.a)(O,2),m=x[0],g=x[1];return Object(p.jsxs)(u.a,{onSubmit:function(){0!==r.trim().length&&0!==b.trim().length&&0!==m.trim().length&&(e.onLoggedIn(r),t.push("/"))},children:[Object(p.jsxs)(u.a.Group,{controlId:"formBasicName",children:[Object(p.jsx)(u.a.Label,{children:"Username"}),Object(p.jsx)(u.a.Control,{type:"user",placeholder:"Enter username",onChange:function(e){o(e.target.value)}})]}),Object(p.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(u.a.Label,{children:"Email address"}),Object(p.jsx)(u.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){d(e.target.value)}}),Object(p.jsx)(u.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)(u.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(u.a.Label,{children:"Password"}),Object(p.jsx)(u.a.Control,{type:"password",placeholder:"Password",onChange:function(e){g(e.target.value)}})]}),Object(p.jsx)(h.a,{variant:"primary",type:"submit",children:"Submit"})]})},v=n(22),w=n(23);var y=function(e){return Object(p.jsxs)(v.a,{bg:"light",expand:"lg",children:[Object(p.jsx)(v.a.Brand,{href:"/",children:"Yelp Project"}),Object(p.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(w.a,{className:"mr-auto",children:[Object(p.jsx)(w.a.Link,{children:Object(p.jsx)(i.b,{to:"/",children:"Home"})}),Object(p.jsx)(w.a.Link,{children:Object(p.jsx)(i.b,{to:"/reviews",children:"Reviews"})}),Object(p.jsx)(w.a.Link,{children:""!==e.username?Object(p.jsxs)(i.b,{to:"/logout",children:[e.username,", Logout"]}):Object(p.jsx)(i.b,{to:"/login",children:"Login"})})]})})]})},C=n(27);var S=function(){return Object(p.jsx)(C.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)("h2",{style:{textAlign:"center"},children:"Welcome to Project 1 Yelp React App!"})})})};var L=function(){return Object(p.jsx)(C.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{style:{color:"black"},children:["Yelp Project \xa9 Copyright ",(new Date).getFullYear(),", All Rights Reserved."]})})})};var I=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),l=i[0],j=i[1],O=Object(c.useState)([]),x=Object(s.a)(O,2),g=x[0],f=x[1],v=function(){m.searchPlaces(a,l).then((function(e){return f(e)})).catch((function(e){return console.log(e)}))},w=function(e){var t=e.comment;return null!=e.rating&&(t=t+" "+e.rating+" "),null!=e.customer&&(t=t+" "+e.customer),t};return Object(p.jsxs)("div",{children:[Object(p.jsxs)(u.a,{onSubmit:v,children:[Object(p.jsx)("h2",{children:"What business do you wish to review?"}),Object(p.jsxs)(u.a.Row,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{value:a,placeholder:"Business",onChange:function(e){r(e.target.value)}})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{value:l,placeholder:"Location",onChange:function(e){j(e.target.value)}})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(h.a,{variant:"primary",type:"submit",children:"Search"})})]})]}),g.map((function(e){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(d.a.Header,{children:e.name}),Object(p.jsxs)(d.a.Body,{children:[Object(p.jsx)(d.a.Text,{children:e.location}),Object(p.jsx)(u.a,{onSubmit:function(t){return function(e,t){var n=localStorage.getItem("username");m.addReview(t,e.target.review.value,e.target.rating.value,n).then((function(){console.log("The review was added."),v()})).catch((function(e){return console.log(e)})),e.preventDefault()}(t,e.name)},children:Object(p.jsxs)(u.a.Row,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{placeholder:"Add a Review",name:"review"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{placeholder:"Add a Rating",name:"rating"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(h.a,{variant:"primary",type:"submit",children:"Add Review"})})]})})]}),Object(p.jsx)(d.a.Footer,{children:e.reviews.filter((function(e){return null!=e.comment})).map((function(e){return Object(p.jsx)(d.a.Text,{children:w(e)})}))})]})}))]})};var N=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),l=i[0],j=i[1],d=Object(c.useState)(""),O=Object(s.a)(d,2),x=O[0],g=O[1];return Object(p.jsxs)("div",{children:[0!==x.length?x:"",Object(p.jsxs)(u.a,{onSubmit:function(){var e={name:a,location:l};m.addPlace(e).then((function(){g("The place ".concat(a," was added.")),r(""),j("")})).catch((function(e){return g("There was a problem adding the place ".concat(a,"."))}))},children:[Object(p.jsx)("h2",{children:"What business do you wish to add?"}),Object(p.jsxs)(u.a.Row,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{value:a,placeholder:"Business Name",onChange:function(e){r(e.target.value)}})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a.Control,{value:l,placeholder:"Location",onChange:function(e){j(e.target.value)}})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(h.a,{variant:"primary",type:"submit",children:"Add"})})]})]})]})};var k=function(e){var t=Object(l.f)();return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(u.a.Label,{children:"Are you sure you want to log out?"}),Object(p.jsx)(h.a,{onClick:function(){localStorage.removeItem("username"),e.onLoggedOut(),t.push("/")},children:"Yes"}),Object(p.jsx)(h.a,{onClick:function(){t.push("/")},children:"Cancel"})]})};var T=function(){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(d.a.Img,{variant:"top",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/330px-Good_Food_Display_-_NCI_Visuals_Online.jpg"}),Object(p.jsxs)(d.a.Body,{children:[Object(p.jsx)(d.a.Title,{children:"Name of Business"}),Object(p.jsx)(d.a.Text,{children:"Description of the place or a review will go here."})]}),Object(p.jsx)(d.a.Footer,{children:Object(p.jsx)("small",{className:"address",children:"Address will go here."})})]})};var P=function(){var e=Object(c.useState)(localStorage.getItem("username")||""),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(p.jsx)(i.a,{children:Object(p.jsxs)(j.a,{style:{backgroundImage:'url("https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',backgroundSize:"cover",backgroundRepeat:"no-repeat"},fluid:!0,children:[Object(p.jsx)(S,{}),Object(p.jsx)(y,{username:n}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:g}),Object(p.jsx)(l.a,{path:"/reviews",component:I}),Object(p.jsx)(l.a,{path:"/login",children:Object(p.jsx)(f,{onLoggedIn:function(e){localStorage.setItem("username",e),a(e)}})}),Object(p.jsx)(l.a,{path:"/logout",children:Object(p.jsx)(k,{onLoggedOut:function(){a("")}})}),Object(p.jsx)(l.a,{path:"/add",component:N}),Object(p.jsx)(l.a,{path:"/business",component:T})]}),Object(p.jsx)(L,{})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),R()}},[[53,1,2]]]);
//# sourceMappingURL=main.1d1bd800.chunk.js.map