import{S as l,i as s}from"./assets/vendor-Bg-92U7s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c="47106635-e689f78aea9055419384fac8a",d="https://pixabay.com/api/";async function f(r){const t=await fetch(`${d}?key=${c}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}function m(){const r=document.getElementById("gallery");r.innerHTML=""}function u(){document.getElementById("loader").classList.remove("hidden")}function g(){document.getElementById("loader").classList.add("hidden")}function y(r){const t=document.getElementById("gallery"),i=r.map(h).join("");t.innerHTML=i}function h({likes:r,views:t,comments:i,downloads:n,webformatURL:e,largeImageURL:o}){return`
    <li class="gallery-item">
      <a href="${o}">
        <img src="${e}" alt="Image" class="gallery-image">
      </a>
      <div class="info-box">
        <div class="info-box-header">
          <div>Likes</div>
          <div>Views</div>
          <div>Comments</div>
          <div>Downloads</div>
        </div>
        <div class="info-box-values">
          <div>${r}</div>
          <div>${t}</div>
          <div>${i}</div>
          <div>${n}</div>
        </div>
      </div>
    </li>
  `}let v=new l(".gallery a");const p=document.getElementById("search-form");p.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements.query.value.trim();if(!t){s.error({message:"Please enter a search term."});return}m(),u(),f(t).then(i=>{i.length===0?s.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):(y(i),v.refresh())}).catch(i=>{console.error("Error fetching images:",i),s.error({message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
