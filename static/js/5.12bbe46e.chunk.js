(this["webpackJsonploc-news"]=this["webpackJsonploc-news"]||[]).push([[5],{118:function(e,t,a){e.exports={section:"setting_section__1vm0s",title:"setting_title__1f4y-","tags-wrap":"setting_tags-wrap__1Px1Y",tag:"setting_tag__2ERrU"}},173:function(e,t,a){"use strict";a.r(t);var n=a(75),r=a(76),i=a(111),s=a(91),l=a(110),o=a(0),c=a.n(o),u=a(78),m=a(27),g=a(92),v=a(80),d=a(142),p=a(118),h=a.n(p),y=a(73),f=a(174),b="ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za".split(" "),E=["business","entertainment","general","health","science","sports","technology"];function k(){var e=this,t=y.a.get("setting"),a=Object(o.useState)(t.country),n=Object(d.a)(a,2),r=n[0],i=n[1],s=Object(o.useState)(t.category),l=Object(d.a)(s,2),u=l[0],m=l[1],p=function(e,t){var a=y.a.get("setting");a[e]!==t&&(y.a.remove("headlines"),y.a.save({key:"setting",value:Object(v.a)({},a,Object(g.a)({},e,t))}),"country"===e?i(t):m(t))};return c.a.createElement("div",null,c.a.createElement("div",{className:h.a.section},c.a.createElement("div",{className:h.a.title},"country"),c.a.createElement("div",{className:h.a["tags-wrap"]},b.map((function(t){var a=r===t;return c.a.createElement(f.a,{className:h.a.tag,onClick:p.bind(e,"country",t),label:t,key:t,color:a?"primary":"default"})})))),c.a.createElement("div",{className:h.a.section},c.a.createElement("div",{className:h.a.title},"category"),c.a.createElement("div",{className:h.a["tags-wrap"]},E.map((function(t){var a=u===t;return c.a.createElement(f.a,{className:h.a.tag,onClick:p.bind(e,"category",t),label:t,key:t,color:a?"primary":"default"})})))))}var _=a(163),w=a(164),O=a(165),j=a(166);function N(e){var t=e.setting,a=t.country,n=t.category;return c.a.createElement(_.a,{className:"no-tab",style:{maxWidth:"300px",cursor:"pointer",marginBottom:"10px"},subheader:"Preference",dense:!0,onClick:e.onClick},c.a.createElement(w.a,null,c.a.createElement(O.a,{primary:"Country"}),c.a.createElement(O.a,{primary:a})),c.a.createElement(j.a,null),c.a.createElement(w.a,null,c.a.createElement(O.a,{primary:"Category"}),c.a.createElement(O.a,{primary:n})),c.a.createElement(j.a,null))}var S=a(85),x=a(172),C=a(168),M=a(167);a.d(t,"default",(function(){return D}));var D=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e)))._isMounted=!1;var r=y.a.get("setting");return a.state={list:[],modalOpen:!1,setting:r},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getTopHeadlines()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"getTopHeadlines",value:function(){var e=this;Object(S.b)().then((function(t){e._isMounted&&e.setState({list:t})}))}},{key:"toggleModal",value:function(){this.setState({modalOpen:!this.state.modalOpen})}},{key:"save",value:function(){var e={},t=this.state.setting,a=t.category,n=t.country,r=y.a.get("setting");a===r.category&&n===r.country||(e.setting=r,e.list=[],this.getTopHeadlines()),this.toggleModal(),this.setState(e)}},{key:"render",value:function(){var e=this.state.setting,t=e.category,a=e.country;return c.a.createElement("div",null,c.a.createElement(N,{onClick:this.toggleModal.bind(this),setting:{category:t,country:a}}),0===this.state.list.length?c.a.createElement(m.a,null):c.a.createElement(u.a,{list:this.state.list}),c.a.createElement(x.a,{open:this.state.modalOpen,onClose:this.toggleModal.bind(this)},c.a.createElement(M.a,{in:this.state.modalOpen},c.a.createElement("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:"80vw",maxWidth:"600px",backgroundColor:"white",padding:"10px"}},c.a.createElement(k,null),c.a.createElement("div",{style:{float:"right"}},c.a.createElement(C.a,{variant:"contained",className:"m-r",onClick:this.toggleModal.bind(this)},"Cancel"),c.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.save.bind(this)},"Save"))))))}}]),t}(c.a.Component)},73:function(e,t,a){"use strict";var n=a(75),r=a(76),i=new(function(){function e(t){Object(n.a)(this,e),this.initialStore=t}return Object(r.a)(e,[{key:"save",value:function(e){var t=e.key,a=e.value,n=e.expired;if(!a||"object"!==typeof a)throw new Error("value must be an object");var r=JSON.stringify({value:a,expired:n});localStorage.setItem(t,r)}},{key:"get",value:function(e){var t=localStorage.getItem(e);if(!t)return this.initialStore[e]||null;var a,n=JSON.parse(t);return(a=n.expired)&&Date.now()>new Date(a).getTime()?this.initialStore[e]||null:n.value}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}())({setting:{country:"tw",category:"general"},params:{q:"Google"}});t.a=i},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(79),s=a.n(i);function l(e){var t=[e.source.name];e.author&&t.push(e.author);var a=e.publishedAt?new Date(e.publishedAt).toLocaleString():null;return r.a.createElement("div",{className:s.a.item,onClick:function(){window.open(e.url,"_blank")}},e.image?r.a.createElement("div",{className:s.a.image,style:{backgroundImage:"url(".concat(e.image,")")}}):null,r.a.createElement("div",{className:s.a.content},r.a.createElement("div",{className:s.a.title},e.title),r.a.createElement("div",{className:s.a.info},r.a.createElement("span",null,t.join("/")),r.a.createElement("span",null,a)),r.a.createElement("div",{className:s.a.description},e.description)))}function o(e){var t=e.list.map((function(e,t){return r.a.createElement(l,{title:e.title,description:e.description,url:e.url,source:e.source,author:e.author,publishedAt:e.publishedAt,image:e.urlToImage,key:t})}));return r.a.createElement("div",null,t)}},79:function(e,t,a){e.exports={item:"news_item__3G2hi",content:"news_content__1S5_k",title:"news_title__1juJ3",info:"news_info__9tG79",description:"news_description__32Is-",image:"news_image__38mXW"}},85:function(e,t,a){"use strict";var n=a(80),r=a(73),i=a(97),s=a.n(i),l=a(26).a.api,o=l.origin,c=l.token,u=s.a.create({baseURL:o,timeout:3e3,headers:{"X-Api-Key":c}});u.interceptors.response.use((function(e){return e.data&&"ok"===e.data.status?e.data:Promise.reject(e)})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return g}));function m(){var e,t=r.a.get("setting"),a=t.country,n=t.category,i=r.a.get("headlines");return i?Promise.resolve(i):(e={country:a,category:n},u.get("/top-headlines",{params:e})).then((function(e){var t,a=e.articles;return r.a.save({key:"headlines",value:a,expired:(t=18e5,new Date(Date.now()+t))}),a}))}function g(e){var t,a,i=r.a.get("params");if(t=i,a=e,!Object.keys(Object(n.a)({},t,{ob2:a})).some((function(e){return t[e]!==a[e]}))){var s=r.a.get("everything");if(s)return Promise.resolve(s)}return function(e){var t=e.q;return u.get("/everything",{params:{q:t}})}(e).then((function(t){var a=t.articles;return r.a.save({key:"everything",value:a}),r.a.save({key:"params",value:e}),a}))}}}]);
//# sourceMappingURL=5.12bbe46e.chunk.js.map