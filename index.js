import{a as w,S as q,i as s}from"./assets/vendor-SA7bT8CU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const v="54844596-95dc6909ab143f64cf2d4cbbe",B="https://pixabay.com/api/";async function f(o,t=1){return(await w.get(B,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more"),M=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:n,largeImageURL:l,tags:e,likes:r,views:a,comments:b,downloads:S})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img 
            class="gallery-img" 
            src="${n}" 
            alt="${e}" 
            loading="lazy"
          />
        </a>

        <ul class="gallery-socials-list">
          <li class="gallery-social-item">
            <span>Likes</span> ${r}
          </li>
          <li class="gallery-social-item">
            <span>Views</span> ${a}
          </li>
          <li class="gallery-social-item">
            <span>Comments</span> ${b}
          </li>
          <li class="gallery-social-item">
            <span>Downloads</span> ${S}
          </li>
        </ul>
      </li>`).join("");g.insertAdjacentHTML("beforeend",t),M.refresh()}function P(){g.innerHTML=""}function L(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}function $(){p.classList.remove("hidden")}function m(){p.classList.add("hidden")}const R=document.querySelector(".form"),E=document.querySelector(".load-more");let c="",i=1,d=0;u();m();R.addEventListener("submit",O);E.addEventListener("click",H);async function O(o){if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),!c){s.warning({message:"Please enter a search query!",position:"topRight"});return}i=1,P(),m(),L();try{const t=await f(c,i);if(d=t.totalHits,t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),d>15&&$()}catch(t){s.error({message:t.message,position:"topRight"})}finally{u()}}async function H(){i+=1,L();try{const o=await f(c,i);h(o.hits),i*15>=d&&(m(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),x()}catch(o){s.error({message:o.message,position:"topRight"})}finally{u()}}function x(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
