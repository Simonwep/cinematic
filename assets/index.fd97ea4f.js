(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const p=()=>{const e=document.createElement("canvas"),t=e.getContext("2d");return{canvas:e,context:t}},L=(e,t,n,r,o)=>{const{width:s,height:a}=t;if(s!==r.width||a!==r.height)throw new Error("Source and target have to have the same size.");const i=e.getImageData(0,0,s,a),d=n.getImageData(0,0,s,a),m=new ImageData(s,a);for(let c=0;c<m.data.length;c++){const u=i.data[c],l=d.data[c];m.data[c]=d.data[c]+(u-l)*o}n.putImageData(m,0,0)},w=e=>{let t=-1;const n=s=>{e(s),t=requestAnimationFrame(n)},r=()=>cancelAnimationFrame(t);return{start:()=>{r(),t=requestAnimationFrame(n)},stop:r}},h=(e,t)=>t instanceof HTMLElement?t:e.querySelector(t),y=(e,t)=>{const n=new ResizeObserver(t);return n.observe(e),()=>n.unobserve(e)},b=(e,t)=>{const n=w(t),r=()=>{e.currentTime=0,t()};return e.addEventListener("play",n.start),e.addEventListener("pause",n.stop),e.addEventListener("loadeddata",r),e.addEventListener("seeked",t),()=>{n.stop(),e.removeEventListener("play",n.start),e.removeEventListener("pause",n.stop),e.removeEventListener("loadeddata",r),e.removeEventListener("seeked",t)}},S=e=>{var u,l;const t=(u=e.document)!=null?u:window.document,n=h(t,e.target),r=h(t,e.src),o=(l=e.sensitivity)!=null?l:.075;if(r instanceof HTMLVideoElement)if(n instanceof HTMLCanvasElement){if(!(o>0&&o<=1))throw new Error(`Smoothness must be an integer greater than 0 and less or equal than 1, received ${o}`)}else throw new Error("Target element has to be a canvas.");else throw new Error(`Received invalid src, expects selector to HTMLVideoElement or the element itself but got ${r==null?void 0:r.tagName}`);const s=n.getContext("2d"),a=p();let i=!1;const d=w(()=>{const{width:f,height:v}=n;i&&f&&v&&(Object.assign(a.canvas,{width:f,height:v}),a.context.drawImage(r,0,0),L(a.context,a.canvas,s,n,o),i=!1)}),m=y(r,()=>{n.width=r.videoWidth,n.height=r.videoHeight}),c=b(r,()=>{i=!0});return d.start(),()=>{d.stop(),m(),c()}};const g=Array.from(document.querySelectorAll(".controls > button")),E=document.querySelector(".video-container > .video");S({target:".video-container > .video-background",src:E});for(const e of g)e.addEventListener("click",()=>{E.src=`/videos/${e.getAttribute("name")}.mp4`,g.forEach(t=>t.classList[t===e?"add":"remove"]("active"))});