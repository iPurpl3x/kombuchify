"use strict";(self.webpackChunkkombuchify=self.webpackChunkkombuchify||[]).push([[123],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,h=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8446:function(e,t,a){a.r(t),a.d(t,{assets:function(){return E},contentTitle:function(){return T},default:function(){return B},frontMatter:function(){return O},metadata:function(){return C},toc:function(){return x}});var n=a(3117),r=a(7294),o=a(3905),i=a(6010),l=a(2466),u=a(6550),s=a(1980),m=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=k({queryString:a,groupId:n}),[m,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),c(e)}),[s,c,o]),tabValues:o}}var b=a(2389),N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=s[a].value;n!==o&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},l,{className:(0,i.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",N.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}var q={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(q.tabItem,n),hidden:a},t)}const O={id:"how-to",slug:"/",title:"\ud83d\udcd6 How to make Kombucha"},T=void 0,C={unversionedId:"how-to",id:"how-to",title:"\ud83d\udcd6 How to make Kombucha",description:"\ud83d\udccc Simple recipe",source:"@site/docs/how-to.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/kombuchify/kombuchify.github.io/tree/master/docs/how-to.mdx",tags:[],version:"current",frontMatter:{id:"how-to",slug:"/",title:"\ud83d\udcd6 How to make Kombucha"},sidebar:"items",next:{title:"\ud83d\udee0 Equipment",permalink:"/equipment"}},E={},x=[{value:"\ud83d\udccc Simple recipe",id:"simple-recipe",level:2},{value:"\ud83e\udd63 Preparation",id:"preparation",level:3},{value:"\ud83e\uddd8\ud83c\udffb Fermentation",id:"fermentation",level:3},{value:"\ud83c\udf7a Enjoy",id:"enjoy",level:3},{value:"Bonus: \ud83c\udf7e 2nd fermentation",id:"bonus--2nd-fermentation",level:3},{value:"\ud83d\udd2c Detailed instructions",id:"detailed-instructions",level:2},{value:"\ud83e\udea7 Introduction and prerequisites",id:"introduction-and-prerequisites",level:3},{value:"\ud83d\udee0 Equipment",id:"equipment",level:4},{value:"\ud83d\udca1 Some general advices",id:"general-advices",level:4},{value:"\ud83e\udd63 Start a new brewing cycle",id:"start",level:3},{value:"\ud83e\uddd8\ud83c\udffb Fermentation",id:"fermentation-1",level:3},{value:"\ud83c\udf7a Enjoy your fresh kombucha",id:"enjoy",level:3},{value:"Bonus: \ud83c\udf7e 2nd fermentation",id:"bonus--2nd-fermentation-1",level:3}],I={toc:x},j="wrapper";function B(e){let{components:t,...a}=e;return(0,o.kt)(j,(0,n.Z)({},I,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"google-site-verification",content:"xg_wjesEDIgKoDk6rLDaAqNEwrDqGmxpcWEldsUlbGU"})),(0,o.kt)("h2",{id:"simple-recipe"},"\ud83d\udccc Simple recipe"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"If you are not yet familiar with the process of brewing kombucha, it's advised to first carefully\nread the \ud83d\udd2c ",(0,o.kt)("a",{parentName:"strong",href:"/#detailed-instructions"},"Detailed instructions"),"."))),(0,o.kt)("h3",{id:"preparation"},"\ud83e\udd63 Preparation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(For a 3L ",(0,o.kt)("a",{parentName:"em",href:"/equipment#container"},"container"),")")),(0,o.kt)(v,{groupId:"brew-method",mdxType:"Tabs"},(0,o.kt)(S,{value:"cold",label:"\u2744\ufe0f Cold brew",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"1L")," of black tea (cold brew, fridge temperature)"),(0,o.kt)("li",{parentName:"ol"},"Pour the tea into the ",(0,o.kt)("a",{parentName:"li",href:"/equipment#container"},"container")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"0.75 L")," of hot water"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"80g")," of sugar"),(0,o.kt)("li",{parentName:"ol"},"Mix ",(0,o.kt)("strong",{parentName:"li"},"sugar and water")," (make sure that the sugar is fully dissolved)"),(0,o.kt)("li",{parentName:"ol"},"Pour the water & sugar mix into the container"),(0,o.kt)("li",{parentName:"ol"},"Add 1 cup of fermented ",(0,o.kt)("strong",{parentName:"li"},"kombucha")," (\u26a0\ufe0f unflavored!)"),(0,o.kt)("li",{parentName:"ol"},"Stir well with the whisk"),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/equipment#scoby"},"SCOBY"))," pellicle"),(0,o.kt)("li",{parentName:"ol"},"Fill the rest of the container with ",(0,o.kt)("strong",{parentName:"li"},"water")),(0,o.kt)("li",{parentName:"ol"},"Carefully stir again with the whisk"))),(0,o.kt)(S,{value:"hot",label:"\ud83e\udd75 Hot brew",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/equipment#container"},"container")," with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/equipment#scoby"},"SCOBY"))),(0,o.kt)("li",{parentName:"ul"},"1 cup of fermented ",(0,o.kt)("strong",{parentName:"li"},"kombucha")," (\u26a0\ufe0f unflavored!)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"1L")," of black tea (room temperature)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"80g")," of sugar"),(0,o.kt)("li",{parentName:"ol"},"Mix ",(0,o.kt)("strong",{parentName:"li"},"sugar and tea")),(0,o.kt)("li",{parentName:"ol"},"Pour the mix into the container"),(0,o.kt)("li",{parentName:"ol"},"Fill the rest of the container with ",(0,o.kt)("strong",{parentName:"li"},"water"))))),(0,o.kt)("h3",{id:"fermentation"},"\ud83e\uddd8\ud83c\udffb Fermentation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/equipment#cover"},"Cover the container")),(0,o.kt)("li",{parentName:"ol"},"Ferment for 7 days")),(0,o.kt)("h3",{id:"enjoy"},"\ud83c\udf7a Enjoy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pour kombucha into ",(0,o.kt)("a",{parentName:"li",href:"/equipment#bottles"},"bottles")," for storage"),(0,o.kt)("li",{parentName:"ol"},"Put the SCOBY and 1 cup of kombucha aside"),(0,o.kt)("li",{parentName:"ol"},"Clean the container"),(0,o.kt)("li",{parentName:"ol"},"Restart a ",(0,o.kt)("a",{parentName:"li",href:"/#preparation"},"new cycle"),".")),(0,o.kt)("h3",{id:"bonus--2nd-fermentation"},"Bonus: \ud83c\udf7e ",(0,o.kt)("a",{parentName:"h3",href:"/2nd-fermentation"},"2nd fermentation")),(0,o.kt)("h2",{id:"detailed-instructions"},"\ud83d\udd2c Detailed instructions"),(0,o.kt)("h3",{id:"introduction-and-prerequisites"},"\ud83e\udea7 Introduction and prerequisites"),(0,o.kt)("p",null,"Brewing kombucha is very simple, yet it requires some basic knowledge and some good equipment to\nwork with."),(0,o.kt)("h4",{id:"equipment"},"\ud83d\udee0 ",(0,o.kt)("a",{parentName:"h4",href:"/equipment"},"Equipment")),(0,o.kt)("p",null,"In a very minimal set up you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A big glas ",(0,o.kt)("a",{parentName:"li",href:"/equipment#container"},"container")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/equipment#scoby"},"SCOBY")),(0,o.kt)("li",{parentName:"ul"},"1 cup (~ 250mL) of kombucha"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/equipment#bottles"},"Bottles")," for storing kombucha"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/equipment#cover"},"Something to cover the container")," (cloth, coffee filter...)"),(0,o.kt)("li",{parentName:"ul"},"A rubber band"),(0,o.kt)("li",{parentName:"ul"},"Black tea"),(0,o.kt)("li",{parentName:"ul"},"Sugar"),(0,o.kt)("li",{parentName:"ul"},"Water")),(0,o.kt)("p",null,"Optionally you could use these tools for working more comfortably:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A funnel"),(0,o.kt)("li",{parentName:"ul"},"A fine mesh food strainer"),(0,o.kt)("li",{parentName:"ul"},"A scale for weighting the sugar"),(0,o.kt)("li",{parentName:"ul"},"A container for mixing tea and sugar"),(0,o.kt)("li",{parentName:"ul"},"A whisk")),(0,o.kt)("admonition",{title:"info",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Visit ",(0,o.kt)("a",{parentName:"p",href:"/equipment"},"this page")," to find advices on how to chose your equipment.")),(0,o.kt)("h4",{id:"general-advices"},"\ud83d\udca1 Some general advices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always work in a very clean environment"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Avoid dust"),(0,o.kt)("li",{parentName:"ul"},"Avoid sources of mold"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Only use organic ingredients"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As kombucha is kind of a living organism, it is best to feed it exclusively with organic\nproducts. If you're not convinced, try both and see the difference in taste and feeling."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use clean drinking water"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the water from you sink isn't clean (if it contains chlorine or other nasty things) it\nmight disturb the SCOBY. Try to find a filter or another source of clean drinking water."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chose a good spot for your fermentation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"No direct sun-light"),(0,o.kt)("li",{parentName:"ul"},"The air must circulate normally (avoid putting it inside of cupboard)"),(0,o.kt)("li",{parentName:"ul"},"Not too cold (room temperature is perfect)"),(0,o.kt)("li",{parentName:"ul"},"Not too warm"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2744\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Try to cold brew your tea")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cold brewed tea is less bitter than hot brewed tea. It is also easier to prepare and it\ndoesn't require you to wait for the tea to cool down before you can start the fermentation."),(0,o.kt)("li",{parentName:"ul"},"You need to remeber to prepare your cold brew tea the day before you want to start a new\ncycle.")))),(0,o.kt)("h3",{id:"start"},"\ud83e\udd63 Start a new brewing cycle"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"These instructions are for a 3L ",(0,o.kt)("a",{parentName:"p",href:"/equipment#container"},"container"),", if you are using a container of a\ndifferent size, make the required adjustments to the quantities.")),(0,o.kt)("admonition",{title:"Tip for cold brewed tea \u2744\ufe0f",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"I advise you to make cold brewed tea, it is easier and it tastes better."),(0,o.kt)("p",{parentName:"admonition"},"The instructions below are for classic hot brewed tea, if you want to make cold brewed tea, just\nreplace the hot water with cold water and let the tea steep for a longer period (at least 8 hours).\nI ususally put a 1L bottle of cold brew tea into the fridge and let it steep overnight."),(0,o.kt)("p",{parentName:"admonition"},"Check the order of the steps in the ",(0,o.kt)("a",{parentName:"p",href:"/#simple-recipe"},"simple recipe")," to see how to make cold brewed\nkombucha. The details outlines below are for hot brewed kombucha but most of them can be applied to\ncold brewed kombucha too.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare an empty (and clean) ",(0,o.kt)("a",{parentName:"p",href:"/equipment#container"},"container")," with"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/equipment#scoby"},"SCOBY"))),(0,o.kt)("li",{parentName:"ul"},"1 cup (~ 250mL) of fermented ",(0,o.kt)("strong",{parentName:"li"},"kombucha")," (\u26a0\ufe0f unflavored!)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'The kombucha that is required here is for the SCOBY: it needs to have a minimal sense of\n"home feeling" so that the fermentation can start.'),(0,o.kt)("li",{parentName:"ul"},"1 cup is the minimum, if there is a bit more than that it's totally fine"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make ",(0,o.kt)("strong",{parentName:"p"},"1L")," of black tea"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use something like 3 to 4 bags of tea per Liter. Basically one bag per cup."),(0,o.kt)("li",{parentName:"ul"},"Other teas (like green tea) are also possible to use, but it is advised to start with black\ntea as it is the easiest. ",(0,o.kt)("br",null),"\u26a0\ufe0f",(0,o.kt)("strong",{parentName:"li"},"Kombucha needs theine"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let the tea steep for a good while (at least 20 minutes)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cold brewed teas work a well. Then obviously you will need to let it steep for a longer\nperiod."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait that the tea is at room temperature, or do something to cool it down quickly (ice bath).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Strain the tea")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("strong",{parentName:"p"},"80g")," of sugar (per Liter)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Any sugar will do"),(0,o.kt)("li",{parentName:"ul"},"Best is to use organic cane sugar but any source of real sugar will work even syrup, just\navoid fake sugar like Stevia in the first fermentation.")),(0,o.kt)("br",null),(0,o.kt)("admonition",{parentName:"li",title:"warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not use anything else than sugar to add the sweetness. The SCOBY feeds on the sugar and it\ncannot feed on anything else.")),(0,o.kt)("admonition",{parentName:"li",title:"(Almost) no more sugar left at the end!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"After the fermentation there will be ",(0,o.kt)("strong",{parentName:"p"},"way less sugar")," (and less theine too) left in the\nkombucha. So you are safe to drink it even if you want to avoid sugar in your diet."),(0,o.kt)("p",{parentName:"admonition"},"The more you wait (the longer you allow the kombucha to ferment) the less sugar and theine will\nbe present in the final beverage.")),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Mix the sugar and the tea"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use a whisk to mix the sugar into the tea and to dilute it."),(0,o.kt)("li",{parentName:"ul"},"If you have multiples batches to prepare, it is better to mix the sugar and the tea in a\ndifferent container to make sure that you have exactly 1L of tea and 80g of sugar."),(0,o.kt)("li",{parentName:"ul"},"It is also possible to mix the sugar and the tea while the tea is still hot."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pour the mixed sugar and tea into the fermentation container")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill the rest of the container with ",(0,o.kt)("strong",{parentName:"p"},"water")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Most containers have a curved border at the top. Leave the curved part empty so that the\nSCOBY (usually floating on at the top of the liquid) can fill out the full width of the\ncontainer while it is fermenting")))),(0,o.kt)("h3",{id:"fermentation-1"},"\ud83e\uddd8\ud83c\udffb Fermentation"),(0,o.kt)("p",null,"The fermentation process is the most simple one, it just requires a little bit of patience."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cover the container where you have prepared your brewing mixture. See\n",(0,o.kt)("a",{parentName:"p",href:"/equipment#cover"},"this page")," for detailed advice."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To cover the container use a cloth, coffee filter or anything that prevents dust or insects to\nenter into the container while it is fermenting. The insects are attracted by CO2 produced by\nthe fermentation. The risk of bacteria contamination is low because of the acidity of the\nsolution. Covering the container will also reduce the (relatively low) risk of getting mold\ninside."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let the kombucha ferment for 7 days."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Chose a good spot for the fermentation process (see ",(0,o.kt)("a",{parentName:"li",href:"/#general-advices"},"advices above"),")."),(0,o.kt)("li",{parentName:"ul"},"The fermentation process usually takes around 7 days. Depending on the room temperature and\nother influencing factors it might take longer or be faster. So generally speaking it can take\nfrom 6 to 10 days."),(0,o.kt)("li",{parentName:"ul"},"You can taste your kombucha from time to time to check if the fermentation is over or not."),(0,o.kt)("li",{parentName:"ul"},"The fermentation tends to be faster in warmer environments."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generally speaking the fermentation process should not be disturbed or your SCOBY pellicle will\nnot look nice. So, unless it is really necessary, just leave it alone for the 7 days to come.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sometimes the fermentation produces a lot of gas. When that happens, the SCOBY might get lifted\ninto the air by a big bubble of gas. It is good to pop out that bubble to let the SCOBY touch the\nliquid. So if necessary release that bubble once or twice a day. Use a clean spoon to push down\nthe SCOBY into the liquid."))),(0,o.kt)("h3",{id:"enjoy"},"\ud83c\udf7a Enjoy your fresh kombucha"),(0,o.kt)("p",null,"Now that your kombucha has fermented, you can start a new cycle."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take out the SCOBY from the container")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stir the liquid inside the container with a whisk"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is optional but still good to do: during the fermentation, some yeast will accumulate at\nthe bottom of the container. This yeast is responsible for carbonation in the\n",(0,o.kt)("a",{parentName:"li",href:"/2nd-fermentation"},"2nd Fermentation")," and therefore you want it to be evenly distributed in\nthe different bottles used for storage or 2nd fermentation."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pour out the fermented kombucha into ",(0,o.kt)("a",{parentName:"p",href:"/equipment#bottles"},"bottles")," to store it"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To stop (or better said ",(0,o.kt)("em",{parentName:"li"},"slow down"),") the fermentation, put the bottles into your fridge or a\ncold spot."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put 1 cup of kombucha and the SCOBY aside (for the next cycle)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"No need to wash the SCOBY if it looks dirty, you just might disturb its natural equilibrium."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean the container"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Usually no soap is required"),(0,o.kt)("li",{parentName:"ul"},"If you need soap, make sure that the container is very well rinsed before reusing it."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start a new cycle."))),(0,o.kt)("h3",{id:"bonus--2nd-fermentation-1"},"Bonus: \ud83c\udf7e ",(0,o.kt)("a",{parentName:"h3",href:"/2nd-fermentation"},"2nd fermentation")))}B.isMDXComponent=!0}}]);