(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),c=(a(62),a(63),function(e){var t=e.title;return r.a.createElement("h1",{className:"title"},t)});c.defaultProps={title:""};var i=c,l=a(45),u=a(46),d=a(54),m=a(47),p=a(55),f=a(8),v=a(14),k=a(16),E=a(17),g=(a(71),function(e){var t=e.value,a=e.onChange,n=e.onKeyPress,o=e.onBlur;return r.a.createElement("div",{className:"todo-input-wrapper"},r.a.createElement(k.a,{icon:E.b,className:"plus"}),r.a.createElement("input",{className:"todo-input",placeholder:"Add task and press Enter",onChange:a,onKeyPress:n,onBlur:o,value:t}))});g.defaultProps={onChange:function(){},onKeyPress:function(){},value:""};var T=g,h=a(117),b=a(116),O=a(53),C=a(52),x=(a(72),function(e){var t=e.text,a=e.isCompleted,o=e.removeTask,s=e.id,c=e.completeTask,i=e.changeTask,l=e.index,u=Object(n.useState)(!1),d=Object(O.a)(u,2),m=d[0],p=d[1],f=function(e){i(s,e.target.value)},g=function(){p(!m)},T=function(e){"Enter"===e.key&&p(!m)};return r.a.createElement(v.b,{draggableId:String(s),index:l},(function(e){return r.a.createElement("li",Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,className:"todo-item"}),r.a.createElement(k.a,{onClick:function(){return c(s)},icon:a?E.a:C.a,className:a?"mark-complete":"mark"}),m?r.a.createElement("input",{autoFocus:!0,onBlur:g,onKeyPress:T,value:t,onChange:f,className:"todo-input"}):r.a.createElement("span",{onClick:function(){return p(!m)},className:a?"completed text":"text"},t),r.a.createElement(k.a,{onClick:function(){return o(s)},icon:E.c,className:"delete"}))}))});x.defaultProps={text:"",isCompleted:!1,removeTask:function(){},completeTask:function(){},id:""};var A=x,N=(a(107),function(e){var t=e.tasksList,a=e.removeTask,n=e.completeTask,o=e.changeTask;return r.a.createElement(v.c,{droppableId:String(t[0]+1)},(function(e){return r.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"todo-list"}),r.a.createElement(h.a,null,t.map((function(e,t){var s=e.id,c=e.text,i=e.isCompleted;return r.a.createElement(b.a,{key:s,timeout:300,classNames:"item"},r.a.createElement(A,{completeTask:n,removeTask:a,id:s,key:s,text:c,index:t,isCompleted:i,changeTask:o}))}))),e.placeholder)}))});N.defaultProps={tasksList:[],removeTask:function(){},completeTask:function(){}};var _=N,y=(a(108),[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}]),j=function(e){var t=e.amount,a=e.activeFilter,n=e.changeFilter;return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"btn-group"},y.map((function(e){var t=e.text,o=e.id;return r.a.createElement("button",{onClick:function(){return n(o)},key:o,className:o===a?"filter-btn active":"filter-btn"},t)}))),r.a.createElement("span",{className:"amount"}," ","".concat(t," active tasks")," "))};j.defaultProps={amount:0,text:"Add todo",changeFilter:function(){}};var S=j,w=(a(109),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={taskText:""},a.handleInputChange=function(e){var t=e.target.value;a.setState({taskText:t})},a.addTask=function(e){var t=e.key,n=a.state.taskText;n.length>3&&"Enter"===t&&((0,a.props.addTask)((new Date).getTime(),n,!1),a.setState({taskText:""}))},a.onBlurHandle=function(){a.setState({taskText:""})},a.filterTasks=function(e,t){switch(t){case"completed":return e.filter((function(e){return e.isCompleted}));case"active":return e.filter((function(e){return!e.isCompleted}));default:return e}},a.getActiveTasksCounter=function(e){return e.filter((function(e){return!e.isCompleted})).length},a.onDragEnd=function(e){var t=e.destination,n=e.source,r=e.draggableId;t&&(0,a.props.sortTasks)(n.index,t.index,r)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.taskText,t=this.props,a=t.tasks,n=t.removeTask,o=t.completeTask,s=t.changeFilter,c=t.filters,i=t.changeTask,l=a&&a.length>0,u=this.filterTasks(a,c),d=this.getActiveTasksCounter(a);return r.a.createElement(v.a,{onDragEnd:this.onDragEnd},r.a.createElement("div",{className:"todo-wrapper"},r.a.createElement(T,{onKeyPress:this.addTask,onBlur:this.onBlurHandle,onChange:this.handleInputChange,value:e}),l&&r.a.createElement(_,{changeTask:i,completeTask:o,tasksList:u,removeTask:n}),l&&r.a.createElement(S,{changeFilter:s,amount:d,activeFilter:c})))}}]),t}(n.Component)),P=Object(f.b)((function(e){return{tasks:e.tasks,filters:e.filters}}),{addTask:function(e,t,a){return{type:"ADD_TASK",id:e,text:t,isCompleted:a}},removeTask:function(e){return{type:"REMOVE_TASK",id:e}},completeTask:function(e){return{type:"COMPLETE_TASK",id:e}},changeFilter:function(e){return{type:"CHANGE_FILTERS",activeFilter:e}},changeTask:function(e,t){return{type:"CHANGE_TASK",id:e,text:t}},sortTasks:function(e,t,a){return{type:"DRAG_HAPPENED",droppableIndexStart:e,droppableIndexEnd:t,draggableId:a}}})(w);a(110);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,{title:"Todo List App"}),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(2),K=a(25),F=a(33),L=a(10),R=Object(K.load)({namespace:"todo-list"});R&&R.tasks&&R.tasks.length||(R={tasks:[]});var H,B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.tasks,t=arguments.length>1?arguments[1]:void 0,a=t.id,n=t.text,r=t.isCompleted,o=t.type,s=t.droppableIndexStart,c=t.droppableIndexEnd;t.draggableId;switch(o){case"ADD_TASK":return[].concat(Object(L.a)(e),[{id:a,text:n,isCompleted:r}]);case"REMOVE_TASK":return Object(L.a)(e).filter((function(e){return e.id!==a}));case"COMPLETE_TASK":return console.log(e),Object(L.a)(e).map((function(e){var t=Object(F.a)({},e);return t.id===a&&(t.isCompleted=!t.isCompleted),t}));case"CHANGE_TASK":return Object(L.a)(e).map((function(e){var t=Object(F.a)({},e);return t.id===a&&(t.text=n),t}));case"DRAG_HAPPENED":var i=Object(L.a)(e),l=i.splice(s,1);return i.splice.apply(i,[c,0].concat(Object(L.a)(l))),i;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.activeFilter;switch(a){case"CHANGE_FILTERS":return n;default:return e}},M=Object(I.c)({tasks:B,filters:G}),V="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):I.d,X=(H={},Object(I.e)(M,H,V(Object(I.a)(Object(K.save)({namespace:"todo-list"})))));s.a.render(r.a.createElement(f.a,{store:X},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports=a(114)},62:function(e,t,a){},63:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.2280b292.chunk.js.map