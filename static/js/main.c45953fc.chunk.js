(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(8),o=a(2),c=a(6),s=(a(13),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(0),u=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},m=function(e){var t=e.todo,a=t.completed,n=t.title,i=t.user;return Object(d.jsxs)("article",{className:"TodoInfo ".concat(a&&"TodoInfo--completed"),"data-id":t.id,children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(d.jsx)(u,{user:i})]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})};function b(e){return l.find((function(t){return t.id===+e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})})),f=function(){var e=Object(s.useState)(h),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),c=Object(o.a)(i,2),u=c[0],m=c[1],f=Object(s.useState)(!1),O=Object(o.a)(f,2),p=O[0],x=O[1],v=Object(s.useState)(0),y=Object(o.a)(v,2),S=y[0],N=y[1],g=Object(s.useState)(!1),I=Object(o.a)(g,2),_=I[0],C=I[1],T=a.reduce((function(e,t){return t.id>e?t.id:e}),0)+1;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/todos",method:"POST",className:"box Todo__form",onSubmit:function(e){if(e.preventDefault(),0===u.trim().length||!S)return 0===u.trim().length&&x(!0),void(S||C(!0));!function(e){var t=e.newTodo;n((function(e){return[].concat(Object(r.a)(e),[t])}))}({newTodo:{id:T,title:u,completed:!1,userId:S,user:b(S)}}),m(""),N(0),x(!1),C(!1)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:u,onChange:function(e){var t=e.target.value.replace(/[^A-Za-z0-9\u0400-\u04FF\s]/g,"");m(t),x(!1)}}),p&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("select",{"data-cy":"userSelect",value:S,onChange:function(e){N(+e.target.value),C(!1)},children:[Object(d.jsx)("option",{value:"0",children:"Choose a user"}),l.map((function(e){var t=e.name,a=e.id;return Object(d.jsx)("option",{value:a,children:t},a)}))]}),_&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"}),Object(d.jsx)(j,{todos:a})]})]})};i.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c45953fc.chunk.js.map