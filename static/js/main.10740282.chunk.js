(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),l=(a(83),a(23)),i=function(){var e=new Date,t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];return o.a.createElement("div",{className:"header"},o.a.createElement("h1",{className:"title"},"My Day"),o.a.createElement("p",{className:"date"},t+" "+a+" "+n))},s=a(143),u=a(144),d=function(e){var t=e.onToggleComplete,a=e.task,r=e.onRemove,c=Object(n.useCallback)((function(){t&&t(a)}),[a,t]),l=Object(n.useCallback)((function(){r&&r(a)}),[a,r]);return o.a.createElement("div",{className:"task-container"},o.a.createElement(s.a,{onChange:c,checked:a.isCompleted}),o.a.createElement("div",{className:"task"},o.a.createElement("h4",{className:"task-description",style:{textDecoration:a.isCompleted?"line-through":""}},a.text)),o.a.createElement(u.a,{type:"delete",onClick:l}))},m=function(e){var t=e.onChange;return o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Add new task...",className:"add-task",onKeyPress:function(e){""!==e.target.value.trim()&&"Enter"===e.key&&"function"===typeof t&&(t(e.target.value),e.target.value="")}}))},p=a(36),f=Object(p.b)({name:"todos",initialState:{list:[]},reducers:{add:function(e,t){var a;e.list.push((a=t.payload,{id:Math.random().toString().replace(".",""),text:a,isCompleted:!1}))},remove:function(e,t){var a=t.payload.id;e.list=e.list.filter((function(e){return e.id!==a}))},toggle:function(e,t){var a=t.payload.id,n=e.list.find((function(e){return e.id===a}));n&&(n.isCompleted=!n.isCompleted)}}}),h=function(e){return e.todos.list},g=f.actions,v=g.add,b=g.remove,k=g.toggle,E=f.reducer,y=function(){var e=Object(l.b)(),t=Object(l.c)(h),a=Object(n.useCallback)((function(t){return e(v(t))}),[e]),r=Object(n.useCallback)((function(t){return e(b(t))}),[e]),c=Object(n.useCallback)((function(t){return e(k(t))}),[e]);return o.a.createElement("main",null,o.a.createElement(i,null),o.a.createElement(m,{onChange:a}),o.a.createElement("section",null,t.map((function(e,t){return o.a.createElement(d,{task:e,key:t,onRemove:r,onToggleComplete:c})}))))},C=a(76),w=a.n(C),O=Object(p.a)({reducer:{todos:E},enhancers:[w()()]});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,{store:O},o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,t,a){e.exports=a(141)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.10740282.chunk.js.map