(this["webpackJsonploc-news"]=this["webpackJsonploc-news"]||[]).push([[4],{33:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},34:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},35:function(e,t,a){"use strict";var n=a(33),r=a(34),i=new(function(){function e(t){Object(n.a)(this,e),this.initialStore=t}return Object(r.a)(e,[{key:"save",value:function(e){var t=e.key,a=e.value,n=e.expired;if(!a||"object"!==typeof a)throw new Error("value must be an object");var r=JSON.stringify({value:a,expired:n});localStorage.setItem(t,r)}},{key:"get",value:function(e){var t=localStorage.getItem(e);if(!t)return this.initialStore[e]||null;var a,n=JSON.parse(t);return(a=n.expired)&&Date.now()>new Date(a).getTime()?this.initialStore[e]||null:n.value}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}())({setting:{country:"tw"}});t.a=i},65:function(e,t,a){e.exports={section:"setting_section__2vh9G",title:"setting_title__1oBGr","tags-wrap":"setting_tags-wrap__2AyPT",tag:"setting_tag__1JiBy",active:"setting_active__C8bjE"}},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(65),c=a.n(i),o=a(35),l="ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za".split(" ");t.default=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u8a2d\u5b9a"),r.a.createElement("div",{className:c.a.section},r.a.createElement("div",{className:c.a.title},"\u570b\u5bb6"),r.a.createElement("div",{className:c.a["tags-wrap"]},l.map((function(e){var t=o.a.get("setting").country===e?c.a.tag+" "+c.a.active:c.a.tag;return r.a.createElement("div",{className:t,key:e},e)})))))}}}]);
//# sourceMappingURL=4.1c44caf5.chunk.js.map