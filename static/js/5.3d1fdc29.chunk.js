(this["webpackJsonploc-news"]=this["webpackJsonploc-news"]||[]).push([[5],{41:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),i=n.n(a),r=n(42),s=n.n(r);function c(e){var t=[e.source.name];e.author&&t.push(e.author);var n=e.publishedAt?new Date(e.publishedAt).toLocaleString():null;return i.a.createElement("div",{className:s.a.item,onClick:function(){window.open(e.url,"_blank")}},e.image?i.a.createElement("div",{className:s.a.image,style:{backgroundImage:"url(".concat(e.image,")")}}):null,i.a.createElement("div",{className:s.a.content},i.a.createElement("div",{className:s.a.title},e.title),i.a.createElement("div",{className:s.a.info},i.a.createElement("span",null,t.join("/")),i.a.createElement("span",null,n)),i.a.createElement("div",{className:s.a.description},e.description)))}function l(e){var t=e.list.map((function(e,t){return i.a.createElement(c,{title:e.title,description:e.description,url:e.url,source:e.source,author:e.author,publishedAt:e.publishedAt,image:e.urlToImage,key:t})}));return i.a.createElement("div",null,t)}},42:function(e,t,n){e.exports={item:"news_item__2akXV",content:"news_content__3kxe-",title:"news_title__3WJqZ",info:"news_info__2Ny5e",description:"news_description__2LbzD",image:"news_image__8z6Aw"}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var a=n(45),i=n.n(a),r=n(13).a.api,s=r.origin,c=r.token,l=i.a.create({baseURL:s,timeout:3e3,headers:{"X-Api-Key":c}});function u(e){var t=e.country;return l.get("/top-headlines",{params:{country:t}})}function o(e){var t=e.q;return l.get("/everything",{params:{q:t}})}l.interceptors.response.use((function(e){return e.data&&"ok"===e.data.status?e.data:Promise.reject(e)}))},72:function(e,t,n){e.exports={"search-bar":"explore_search-bar__2g1AF",input:"explore_input__1VE_f",btn:"explore_btn__Mauxj"}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(35),i=n(36),r=n(39),s=n(38),c=n(37),l=n(40),u=n(0),o=n.n(u),h=n(44),d=n(14),m=n(41),p=n(72),b=n.n(p),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={list:[],q:""},n.handleQuery=n.handleQuery.bind(Object(c.a)(n)),n.handleKeydown=n.handleKeydown.bind(Object(c.a)(n)),n.search=n.search.bind(Object(c.a)(n)),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(h.a)({q:"game"}).then((function(t){e.setState({list:t.articles})}))}},{key:"handleQuery",value:function(e){this.setState({q:e.target.value})}},{key:"handleKeydown",value:function(e){13===e.keyCode&&this.search()}},{key:"search",value:function(){var e=this;this.state.q&&(this.setState({list:[]}),Object(h.a)({q:this.state.q}).then((function(t){e.setState({list:t.articles})})))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:b.a["search-bar"]},o.a.createElement("input",{value:this.state.q,className:b.a.input,onChange:this.handleQuery,onKeyDown:this.handleKeydown}),o.a.createElement("button",{className:b.a.btn,onClick:this.search},"\u641c\u5c0b")),0===this.state.list.length?o.a.createElement(d.a,null):o.a.createElement(m.a,{list:this.state.list}))}}]),t}(o.a.Component)}}]);
//# sourceMappingURL=5.3d1fdc29.chunk.js.map