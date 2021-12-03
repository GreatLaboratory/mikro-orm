"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73415],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(r),k=n,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||p;return r?a.createElement(u,i(i({ref:t},c),{},{components:r})):a.createElement(u,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95483:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=r(83117),n=r(80102),p=(r(67294),r(3905)),i=["components"],o={id:"core.nonuniquefieldnameexception",title:"Class: NonUniqueFieldNameException",sidebar_label:"NonUniqueFieldNameException",custom_edit_url:null,hide_title:!0},s="Class: NonUniqueFieldNameException",l={unversionedId:"api/classes/core.nonuniquefieldnameexception",id:"version-4.5/api/classes/core.nonuniquefieldnameexception",isDocsHomePage:!1,title:"Class: NonUniqueFieldNameException",description:"core.NonUniqueFieldNameException",source:"@site/versioned_docs/version-4.5/api/classes/core.nonuniquefieldnameexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.nonuniquefieldnameexception",permalink:"/docs/api/classes/core.nonuniquefieldnameexception",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Charley Bodkin",lastUpdatedAt:1638550254,formattedLastUpdatedAt:"12/3/2021",frontMatter:{id:"core.nonuniquefieldnameexception",title:"Class: NonUniqueFieldNameException",sidebar_label:"NonUniqueFieldNameException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MongoNamingStrategy",permalink:"/docs/api/classes/core.mongonamingstrategy"},next:{title:"NotFoundError",permalink:"/docs/api/classes/core.notfounderror"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[],level:3},{value:"errmsg",id:"errmsg",children:[],level:3},{value:"errno",id:"errno",children:[],level:3},{value:"message",id:"message",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"prepareStackTrace",id:"preparestacktrace",children:[{value:"Type declaration:",id:"type-declaration",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"sqlMessage",id:"sqlmessage",children:[],level:3},{value:"sqlState",id:"sqlstate",children:[],level:3},{value:"stack",id:"stack",children:[],level:3},{value:"stackTraceLimit",id:"stacktracelimit",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"class-nonuniquefieldnameexception"},"Class: NonUniqueFieldNameException"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".NonUniqueFieldNameException"),(0,p.kt)("p",null,"Exception for a non-unique/ambiguous specified field name in a statement detected in the driver."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},(0,p.kt)("em",{parentName:"a"},"ServerException"))),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"NonUniqueFieldNameException")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new NonUniqueFieldNameException"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.nonuniquefieldnameexception"},(0,p.kt)("em",{parentName:"a"},"NonUniqueFieldNameException"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"previous")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.nonuniquefieldnameexception"},(0,p.kt)("em",{parentName:"a"},"NonUniqueFieldNameException"))),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"code"},"code"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"code"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#code"},"code")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"errmsg"},"errmsg"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#errmsg"},"errmsg")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"errno"},"errno"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"errno"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#errno"},"errno")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"message"},"message"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"message"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#message"},"message")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"name"},"name"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#name"},"name")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,p.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Optional override for formatting stack traces"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,p.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,p.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,p.kt)("p",null,"\u25b8 (",(0,p.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,p.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"err")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,p.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#preparestacktrace"},"prepareStackTrace")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#sqlmessage"},"sqlMessage")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"sqlstate"},"sqlState"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#sqlstate"},"sqlState")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stack"},"stack"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"stack"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#stack"},"stack")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#stacktracelimit"},"stackTraceLimit")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,p.kt)("em",{parentName:"p"},"object"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Create .stack property on a target object"),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"object"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}d.isMDXComponent=!0}}]);