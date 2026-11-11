const galleryItems=[
 {src:"assets/images/Screenshot 2026-11-11 224546.png",caption:"Evidence of my favourite headache."},
 {src:"assets/images/Screenshot 2026-11-11 224618.png",caption:"One more memory for the collection."},
 {src:"assets/images/Screenshot 2026-11-11 224658.png",caption:"Context? Only we understand."},
 {src:"assets/images/Screenshot 2026-11-11 224706.png",caption:"Tamatar supremacy."},
 {src:"assets/images/Screenshot 2026-11-11 224718.png",caption:"Some moments deserve their own forever."},
 {src:"assets/images/Screenshot 2026-11-11 224728.png",caption:"My favourite little human."},
 {src:"assets/images/Screenshot 2026-11-11 224740.png",caption:"A frame waiting for its story."},
 {src:"assets/images/Screenshot 2026-11-11 224748.png",caption:"Reserved for a real memory."}
];
function initGallery(){
 const root=document.getElementById("galleryGrid");
 const shuffled=[...galleryItems].sort(()=>Math.random()-.5);
 root.innerHTML=shuffled.map((x,i)=>`<figure class="polaroid" style="--rot:${[-3,2,-1,3,1,-2,2,-3][i]}deg">${x.src?`<img loading="lazy" src="${x.src}" alt="${x.caption}">`:`<div class="photo-placeholder"><span>YOUR PHOTO<br>GOES HERE</span></div>`}<figcaption>${x.caption}</figcaption></figure>`).join("");
 root.querySelectorAll("figure").forEach((el,i)=>{const item=shuffled[i];if(item.src)el.addEventListener("click",()=>{document.getElementById("lightboxImg").src=item.src;document.getElementById("lightboxCaption").textContent=item.caption;document.getElementById("lightbox").classList.add("open")})});
 document.getElementById("closeLightbox").addEventListener("click",()=>document.getElementById("lightbox").classList.remove("open"));
}
