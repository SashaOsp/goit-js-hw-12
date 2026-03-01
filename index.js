import{a as v,S as q,i as a}from"./assets/vendor-SA7bT8CU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const B="54844596-95dc6909ab143f64cf2d4cbbe",M="https://pixabay.com/api/";async function g(o,t=1){return(await v.get(M,{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const f=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:l,largeImageURL:c,tags:e,likes:r,views:s,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${c}">
          <img 
            class="gallery-img" 
            src="${l}" 
            alt="${e}" 
            loading="lazy"
          />
        </a>

        <ul class="gallery-socials-list">
          <li class="gallery-social-item">
            <span>Likes</span> ${r}
          </li>
          <li class="gallery-social-item">
            <span>Views</span> ${s}
          </li>
          <li class="gallery-social-item">
            <span>Comments</span> ${w}
          </li>
          <li class="gallery-social-item">
            <span>Downloads</span> ${S}
          </li>
        </ul>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),P.refresh()}function R(){f.innerHTML=""}function L(){y.classList.remove("hidden")}function m(){y.classList.add("hidden")}function b(){p.classList.remove("hidden")}function n(){p.classList.add("hidden")}const $=document.querySelector(".form"),E=document.querySelector(".load-more");let d="",i=1,u=0;m();n();$.addEventListener("submit",O);E.addEventListener("click",H);async function O(o){if(o.preventDefault(),d=o.target.elements.searchQuery.value.trim(),!d){a.warning({message:"Please enter a search query!",position:"topRight"});return}i=1,R(),n(),L();try{const t=await g(d,i);if(u=t.totalHits,t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),u<=15?(n(),a.info({message:"You're already viewing all available results.",position:"topRight"})):b()}catch(t){a.error({message:t.message,position:"topRight"})}finally{m()}}async function H(){n(),L();try{i+=1;const o=await g(d,i);h(o.hits),i*15>=u?(n(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b(),x()}catch(o){a.error({message:o.message,position:"topRight"})}finally{m()}}function x(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
