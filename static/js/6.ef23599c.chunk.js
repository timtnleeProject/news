(this["webpackJsonploc-news"]=this["webpackJsonploc-news"]||[]).push([[6],{37:function(e,t,n){"use strict";var a=n(35),r=n(36),i=new(function(){function e(t){Object(a.a)(this,e),this.initialStore=t}return Object(r.a)(e,[{key:"save",value:function(e){var t=e.key,n=e.value,a=e.expired;if(!n||"object"!==typeof n)throw new Error("value must be an object");var r=JSON.stringify({value:n,expired:a});localStorage.setItem(t,r)}},{key:"get",value:function(e){var t=localStorage.getItem(e);if(!t)return this.initialStore[e]||null;var n,a=JSON.parse(t);return(n=a.expired)&&Date.now()>new Date(n).getTime()?this.initialStore[e]||null:a.value}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}())({setting:{country:"tw",category:"general"},params:""}),o=i.get("setting");o.country&&!o.category&&null!==i.get("params")||i.clear(),t.a=i},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),i=n(45),o=n.n(i);function u(e){var t=[e.source.name];e.author&&t.push(e.author);var n=e.publishedAt?new Date(e.publishedAt).toLocaleString():null;return r.a.createElement("div",{className:o.a.item,onClick:function(){window.open(e.url,"_blank")}},e.image?r.a.createElement("div",{className:o.a.image,style:{backgroundImage:"url(".concat(e.image,")")}}):null,r.a.createElement("div",{className:o.a.content},r.a.createElement("div",{className:o.a.title},e.title),r.a.createElement("div",{className:o.a.info},r.a.createElement("span",null,t.join("/")),r.a.createElement("span",null,n)),r.a.createElement("div",{className:o.a.description},e.description)))}function s(e){var t=e.list.map((function(e,t){return r.a.createElement(u,{title:e.title,description:e.description,url:e.url,source:e.source,author:e.author,publishedAt:e.publishedAt,image:e.urlToImage,key:t})}));return r.a.createElement("div",null,t)}},45:function(e,t,n){e.exports={item:"news_item__2akXV",content:"news_content__3kxe-",title:"news_title__3WJqZ",info:"news_info__2Ny5e",description:"news_description__2LbzD",image:"news_image__8z6Aw"}},46:function(e,t,n){"use strict";var a=n(40),r=n(37),i=n(47),o=n.n(i),u=n(13).a.api,s=u.origin,c=u.token,l=o.a.create({baseURL:s,timeout:3e3,headers:{"X-Api-Key":c}});l.interceptors.response.use((function(e){return e.data&&"ok"===e.data.status?e.data:Promise.reject(e)})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return v}));function m(){var e,t=r.a.get("setting"),n=t.country,a=t.category,i=r.a.get("headlines");return i?Promise.resolve(i):(e={country:n,category:a},l.get("/top-headlines",{params:e})).then((function(e){var t,n=e.articles;return r.a.save({key:"headlines",value:n,expired:(t=18e5,new Date(Date.now()+t))}),n}))}function v(e){var t,n,i=r.a.get("params");if(t=i,n=e,!Object.keys(Object(a.a)({},t,{ob2:n})).some((function(e){return t[e]!==n[e]}))){var o=r.a.get("everything");if(o)return Promise.resolve(o)}return function(e){var t=e.q;return l.get("/everything",{params:{q:t}})}(e).then((function(t){var n=t.articles;return r.a.save({key:"everything",value:n}),r.a.save({key:"params",value:e}),n}))}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(35),r=n(36),i=n(42),o=n(39),u=n(43),s=n(0),c=n.n(s),l=n(44),m=n(14),v=n(46),d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e)))._isMounted=!1,n.state={list:[]},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,Object(v.b)().then((function(t){e._isMounted&&e.setState({list:t})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return c.a.createElement("div",null,0===this.state.list.length?c.a.createElement(m.a,null):c.a.createElement(l.a,{list:this.state.list}))}}]),t}(c.a.Component)}}]);
//# sourceMappingURL=6.ef23599c.chunk.js.map