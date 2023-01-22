"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6984],{54543:(e,t,n)=>{n.d(t,{q:()=>w});var r=n(67154),a=n.n(r),i=n(67294),s=n(69518),l=n.n(s),o=n(63495),c=n(36590),u=n(51079),d=n(47418),m=n(11186);const p=({name:e="",uri:t="",images:n=[],isHero:r,onClick:a,testId:s,index:l})=>r?i.createElement(d.Z,{featureIdentifier:"unknown",index:l,onClick:a,headerText:e,uri:t,isPlayable:!1,renderCardImage:()=>i.createElement(u.x,{isHero:r,images:n}),renderSubHeaderContent:()=>i.createElement(m.k,null),testId:s}):i.createElement(c.C,{index:l,featureIdentifier:"unknown",onClick:a,headerText:e,uri:t,isPlayable:!1,renderCardImage:()=>i.createElement(u.x,{isHero:r,images:n}),renderSubHeaderContent:()=>i.createElement("span",null),testId:s});var g=n(73425),y=n(143),v=n(64269),f=n(3634),E=n(89477),b=n(16061),h=n(46309),O=n(30523),I=n(52778),P=n(95332),x=n(46327);const w=({entity:e,index:t,testId:n,isHero:r=!1})=>{const s=(l().from(e.uri)||{}).type,c={testId:n,isHero:r,index:t,sharingInfo:e.sharingInfo};switch(s){case l().Type.ALBUM:case l().Type.COLLECTION_ALBUM:{const t=e;return i.createElement(f.r,a()({},c,{name:t.name,uri:t.uri,images:t.images,artists:t.artists}))}case l().Type.ARTIST:{const t=e;return i.createElement(E.I,a()({},c,{name:t.name,uri:t.uri,images:t.images}))}case l().Type.EPISODE:{var u,d;const t=e;return i.createElement(b.B,a()({},c,{name:t.name,uri:t.uri,images:t.images,showImages:(null===(u=t.show)||void 0===u?void 0:u.images)||[],durationMilliseconds:t.duration_ms,releaseDate:t.release_date,resume_point:t.resume_point,description:t.description,isExplicit:t.explicit,is19PlusOnly:!(null===(d=t.tags)||void 0===d||!d.includes("MOGEF-19+"))}))}case l().Type.PLAYLIST:case l().Type.PLAYLIST_V2:{var m,w;const t=e,n=(null===(m=t.owner)||void 0===m?void 0:m.display_name)||(null===(w=e.owner)||void 0===w?void 0:w.displayName)||"";return i.createElement(h.Z,a()({},c,{name:t.name,uri:t.uri,images:t.images,description:t.description,authorName:n}))}case l().Type.USER:return i.createElement(O.P,a()({},c,{name:e.name,uri:e.uri,images:e.images}));case l().Type.SHOW:{var T;const t=e;return i.createElement(P._,a()({},c,{name:t.name,uri:t.uri,images:t.images,publisher:t.publisher,mediaType:null!==(T={audio:y.E.AUDIO,video:y.E.VIDEO,mixed:y.E.MIXED}[t.media_type])&&void 0!==T?T:y.E.AUDIO}))}case l().Type.APPLICATION:return i.createElement(o.s,a()({},c,{name:e.name,uri:e.uri,images:e.images,description:e.description}));case l().Type.RADIO:return i.createElement(I.I,{testId:n,index:t,name:e.name,uri:e.uri,images:e.images});case l().Type.TRACK:{var k,C;const t=e;return i.createElement(x.G,a()({},c,{name:t.name,uri:t.uri,images:(null===(k=t.album)||void 0===k?void 0:k.images)||[],artists:t.artists,album:t.album,isExplicit:t.explicit,is19PlusOnly:null===(C=t.tags)||void 0===C?void 0:C.includes("MOGEF-19+")}))}case l().Type.COLLECTION:return e.uri.endsWith("your-episodes")?i.createElement(v.T,{index:t}):i.createElement(g.p,{index:t});default:return console.warn("Rendering a generic Card for unknown type:",s),i.createElement(p,a()({},c,{name:e.name,uri:e.uri,images:e.images}))}}},63495:(e,t,n)=>{n.d(t,{s:()=>c});var r=n(67294),a=n(20657),i=n(36590),s=n(51079),l=n(47418),o=n(11186);const c=({name:e,uri:t,images:n,isHero:c,onClick:u,testId:d,description:m,index:p,requestId:g})=>c?r.createElement(l.Z,{featureIdentifier:"genre",index:p,onClick:u,headerText:e,uri:t,isPlayable:!1,renderCardImage:()=>r.createElement(s.x,{isHero:c,images:n}),renderSubHeaderContent:()=>r.createElement(o.k,null,m||a.ag.get("card.tag.genre")),testId:d,requestId:g}):r.createElement(i.C,{index:p,featureIdentifier:"genre",onClick:u,headerText:e,uri:t,isPlayable:!1,renderCardImage:()=>r.createElement(s.x,{isHero:c,images:n}),renderSubHeaderContent:()=>r.createElement("span",null,m||""),testId:d,requestId:g})},70369:(e,t,n)=>{n.d(t,{$:()=>r.$});var r=n(22578)},86964:(e,t,n)=>{n.d(t,{c:()=>w});var r=n(59713),a=n.n(r),i=n(67294),s=n(54543),l=n(18686),o=n(54358),c=n(42922),u=n(21794),d=n(43076),m=n(28760),p=n(87577),g=n(49207),y=n(67892);const v="EPMDgp7znILo0hvyirzv",f="noUm6pjQ6KWq7mVxYDor",E="PqnKjxzJ1Zvr9qKRlRbO",b="uuBQS9Ym_VPmAQrLhPQb",h=e=>(0,p.W6)(g.sE)?i.createElement(y.Z,{to:e.uri,target:"_blank",className:v},i.createElement("div",{className:f}),i.createElement(m.Dy,{className:E,as:"h2",variant:"alto"},e.label),i.createElement(m.Dy,{className:b,as:"p",variant:"mesto"},e.tagline)):null,O=e=>i.createElement(i.Suspense,{fallback:null},i.createElement(h,e));function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const x=e=>{var t;return null===(t=e.id)||void 0===t?void 0:t.startsWith("scc-corona")},w=({spaces:e,viewName:t,viewId:n,isAnonymous:r})=>{const a=(0,i.useCallback)(((e,t)=>{const r=((e,t)=>{let{uri:n}=e;return e.href.includes("https://api.spotify.com/v1/views/")&&(n=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),"hub-browse-grid"===t&&(n=n.replace(":view:",":genre:"))),n})(e,n);return i.createElement(s.q,{key:e.href,index:t,entity:P(P({},e),{},{uri:r})})}),[n]),m=(0,i.useCallback)(((e,t)=>i.createElement(c.JL,{key:e.uri||t,value:"card",index:t},i.createElement(s.q,{index:t,entity:e}))),[]),p=(0,i.useCallback)(((e,t)=>"link"===e.type?a(e,t):m(e,t)),[m,a]),g=(0,i.useCallback)((e=>!!x(e)||!((e=>"HEADER"===e.rendering)(e)||0===e.content.total||r&&"uniquely-yours-shelf"===e.id)),[r]);return e&&0!==e.length?e[0].content?i.createElement(i.Fragment,null,e.filter(g).map(((e,t)=>{const r=e.content&&(0,u.p)((0,u.S)(e.href));if(e.id===o.RECENTLY_PLAYED_VIEW_ID||e.id===d.u)return i.createElement(c.JL,{value:"headered-grid",index:t,key:e.id},i.createElement(o.RecentlyPlayed,{showAll:!1,index:t}));if(x(e)){const t=e.content.items[0];return t&&t.name&&t.description&&t.href?i.createElement(O,{key:"corona-banner",label:t.name,tagline:t.description,uri:t.href}):null}return i.createElement(c.JL,{value:"headered-grid",index:t,key:e.id},i.createElement(l.q,{total:e.content.total,seeAllUri:r,pageId:n,title:e.name,tagline:e.tag_line||void 0,index:t,id:e.id},e.content.items.map(p)))}))):i.createElement(c.JL,{value:"headered-grid"},i.createElement(l.q,{showAll:!0,title:t,total:(null==e?void 0:e.length)||0,index:0,id:null!=n?n:"spaces-see-all-grid"},null==e?void 0:e.map(p))):null}},23809:(e,t,n)=>{n.d(t,{P:()=>v});var r=n(59713),a=n.n(r),i=n(67294),s=n(19719),l=n(88767),o=n(26529),c=n(94321),u=n(29255),d=n(46458),m=n(87577),p=n(8247);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const v=(e,t)=>{var n,r;const a=(()=>{const e=(0,m.W6)(p.Xf),t=(0,d.v9)(c.rZ),{locale:n,overrides:r}=(0,d.v9)(u.Gg),a=(null==r?void 0:r.country)||t,s=(null==r?void 0:r.locale)||n;return(0,i.useMemo)((()=>{const t=["album","playlist","artist","show","station","episode"];return e&&t.push("uri_link"),{country:a,locale:s,types:t.join(",")}}),[a,e,s])})(),{data:g,fetchNextPage:v}=(0,l.useInfiniteQuery)(["useView",e,a],(async({pageParam:t})=>void 0===t?async function(e,t){const{body:n}=await s.kO.getView(o.b.getInstance(),e,t);return n}(e,a):async function(e){const{body:t}=await s.TV.getGeneric(o.b.getInstance(),e);return t}(t)),{cacheTime:null!==(n=null==t?void 0:t.cacheTime)&&void 0!==n?n:18e5,staleTime:null!==(r=null==t?void 0:t.staleTime)&&void 0!==r?r:3e5,getNextPageParam:e=>{var t;return null!==(t=e.content.next)&&void 0!==t?t:void 0},getPreviousPageParam:e=>{var t;return null!==(t=e.content.previous)&&void 0!==t?t:void 0}});return{view:(0,i.useMemo)((()=>null==g?void 0:g.pages.reduce(((e,t)=>y(y({},e),{},{content:y(y({},e.content),{},{href:t.content.href,next:t.content.next,offset:t.content.offset,previous:t.content.previous,total:t.content.total,items:e.content.items.concat(t.content.items)})})))),[null==g?void 0:g.pages]),getNextPage:v}}}}]);
//# sourceMappingURL=6984.js.map