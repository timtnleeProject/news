(this["webpackJsonploc-news"]=this["webpackJsonploc-news"]||[]).push([[5],{108:function(e,t,a){e.exports={"search-bar":"explore_search-bar__EbSn9",input:"explore_input__2aFaF",btn:"explore_btn__lwaOU"}},127:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(64),r=a(65),i=a(87),s=a(74),o=a(73),c=a(88),l=a(0),u=a.n(l),h=a(71),m=a(62),v=a(24),d=a(66),p=a(108),f=a.n(p),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e)))._isMounted=!1,a.state={list:[],q:""},a.handleQuery=a.handleQuery.bind(Object(o.a)(a)),a.handleKeydown=a.handleKeydown.bind(Object(o.a)(a)),a.search=a.search.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=m.a.get("params");Object(h.a)(t).then((function(t){e._isMounted&&e.setState({list:t})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"handleQuery",value:function(e){this.setState({q:e.target.value})}},{key:"handleKeydown",value:function(e){13===e.keyCode&&this.search()}},{key:"search",value:function(){var e=this;this.state.q&&(this.setState({list:[]}),Object(h.a)({q:this.state.q}).then((function(t){e.setState({list:t})})))}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:f.a["search-bar"]},u.a.createElement("input",{value:this.state.q,className:f.a.input,onChange:this.handleQuery,onKeyDown:this.handleKeydown}),u.a.createElement("button",{className:f.a.btn,onClick:this.search},"\u641c\u5c0b")),0===this.state.list.length?u.a.createElement(v.a,null):u.a.createElement(d.a,{list:this.state.list}))}}]),t}(u.a.Component)},62:function(e,t,a){"use strict";var n=a(64),r=a(65),i=new(function(){function e(t){Object(n.a)(this,e),this.initialStore=t}return Object(r.a)(e,[{key:"save",value:function(e){var t=e.key,a=e.value,n=e.expired;if(!a||"object"!==typeof a)throw new Error("value must be an object");var r=JSON.stringify({value:a,expired:n});localStorage.setItem(t,r)}},{key:"get",value:function(e){var t=localStorage.getItem(e);if(!t)return this.initialStore[e]||null;var a,n=JSON.parse(t);return(a=n.expired)&&Date.now()>new Date(a).getTime()?this.initialStore[e]||null:n.value}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}())({setting:{country:"tw",category:"general"},params:{q:"Google"}});t.a=i},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),i=a(67),s=a.n(i);function o(e){var t=[e.source.name];e.author&&t.push(e.author);var a=e.publishedAt?new Date(e.publishedAt).toLocaleString():null;return r.a.createElement("div",{className:s.a.item,onClick:function(){window.open(e.url,"_blank")}},e.image?r.a.createElement("div",{className:s.a.image,style:{backgroundImage:"url(".concat(e.image,")")}}):null,r.a.createElement("div",{className:s.a.content},r.a.createElement("div",{className:s.a.title},e.title),r.a.createElement("div",{className:s.a.info},r.a.createElement("span",null,t.join("/")),r.a.createElement("span",null,a)),r.a.createElement("div",{className:s.a.description},e.description)))}function c(e){var t=e.list.map((function(e,t){return r.a.createElement(o,{title:e.title,description:e.description,url:e.url,source:e.source,author:e.author,publishedAt:e.publishedAt,image:e.urlToImage,key:t})}));return r.a.createElement("div",null,t)}},67:function(e,t,a){e.exports={item:"news_item__oCk2E",content:"news_content__3RzUW",title:"news_title__1sZ27",info:"news_info__3K7s_",description:"news_description__3Vo79",image:"news_image__IwsD-"}},71:function(e,t,a){"use strict";var n=a(68),r=a(62),i=a(77),s=a.n(i),o=a(23).a.api,c=o.origin,l=o.token,u=s.a.create({baseURL:c,timeout:3e3,headers:{"X-Api-Key":l}});u.interceptors.response.use((function(e){return e.data&&"ok"===e.data.status?e.data:Promise.reject(e)})),a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return m}));function h(){var e,t=r.a.get("setting"),a=t.country,n=t.category,i=r.a.get("headlines");return i?Promise.resolve(i):(e={country:a,category:n},u.get("/top-headlines",{params:e})).then((function(e){var t,a=e.articles;return r.a.save({key:"headlines",value:a,expired:(t=18e5,new Date(Date.now()+t))}),a}))}function m(e){var t,a,i=r.a.get("params");if(t=i,a=e,!Object.keys(Object(n.a)({},t,{ob2:a})).some((function(e){return t[e]!==a[e]}))){var s=r.a.get("everything");if(s)return Promise.resolve(s)}return function(e){var t=e.q;return u.get("/everything",{params:{q:t}})}(e).then((function(t){var a=t.articles;return r.a.save({key:"everything",value:a}),r.a.save({key:"params",value:e}),a}))}}}]);
//# sourceMappingURL=5.87649226.chunk.js.map