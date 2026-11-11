const $=s=>document.querySelector(s);
const introLines=["Somewhere between a thousand conversations...","Endless nonsense, random arguments and little moments...","Someone became my favourite part of an ordinary day.","For Khushi. My Tamatar. ❣️"];
function stars(root,n=80){if(!root)return;root.innerHTML=Array.from({length:n},()=>`<i style="left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*4}s"></i>`).join("")}
let audio=null,audioOn=false;
function setupIntro(){
 stars($("#introStars"),90);stars($("#wishStars"),65);stars(document.querySelector(".finale-stars"),70);
 const clock=$("#introClock"),line=$("#introLine");let step=0;
 const ticks=["11:09","11:10","11:11"];
 let tick=0;const interval=setInterval(()=>{clock.textContent=ticks[Math.min(tick,2)];tick++;if(tick===3){clearInterval(interval);line.textContent=introLines[0];const next=()=>{step++;if(step<introLines.length){line.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:650});line.textContent=introLines[step]}};setTimeout(next,1600);setTimeout(next,3400);setTimeout(next,5200)}},850);
 $("#enterBtn").addEventListener("click",()=>{if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)$("#intro").classList.add("hide");else $("#intro").style.display="none";$("#site").classList.remove("is-hidden");setTimeout(()=>$("#site").style.opacity=1,50);document.body.classList.add("custom-cursor");if(audioOn&&audio)audio.play().catch(()=>{});});
}
function setupNav(){$("#menuToggle").addEventListener("click",()=>$("#navLinks").classList.toggle("open"));$("#navLinks").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#navLinks").classList.remove("open")))}
function setupSound(){
 const btn=$("#soundBtn");btn.addEventListener("click",()=>{if(!audio){audio=new Audio("assets/audio/Umraan%20Lameriyan%20-%20Juss.mp3");audio.loop=true;audio.volume=.25}if(!audioOn){audio.play().then(()=>{audioOn=true;btn.innerHTML="♫ <span>Sound on</span>"}).catch(()=>{btn.innerHTML="♫ <span>Audio unavailable</span>"})}else{audio.pause();audioOn=false;btn.innerHTML="♫ <span>Sound off</span>"}});
}
function setupWords(){
 const words=[
 ["Tamatar ❣️","THE SIGNATURE NICKNAME","Aryan addresses her as Tamatar in the chat. It even turns up in a good-morning message: “Good morning tamatar”. A whole identity, one vegetable at a time."],
 ["Mera Bacha","THE SOFT CORNER","A real affectionate phrase in the archive: “aww le mera bachaaa” — 17 October, 02:46."],
 ["Khushi Ji","POLITE MODE (ALLEGEDLY)","The early archive has Aryan saying “Acha khushi ji / Ab humko izazat de”. The reply? “Nhi na🫠”."],
 ["Broccoli","THE PLOT TWIST","27 October, 00:30. Aryan: “Tamatarrrr”. Tamatar: “Yes broccoli”. No further explanation required."],
 ["Bhai / Bro","EVERYDAY VOCABULARY","Both “bhai” and “bro” appear frequently in the export. Sometimes the vibe is less formal romance, more two people being completely themselves."],
 ["Hehehe","THE SOUNDTRACK","The chat is full of “hehe”, “hehehe” and laughter. It is practically punctuation."]
 ];
 $("#wordGrid").innerHTML=words.map(([w,h,d])=>`<article class="word-card" tabindex="0"><div class="word">${w}</div><div class="hint">${h} · TAP TO OPEN</div><div class="reveal-word">${d}</div></article>`).join("");
 document.querySelectorAll(".word-card").forEach(c=>{const toggle=()=>c.classList.toggle("open");c.addEventListener("click",toggle);c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle()}})});
}
function setupMemory(){
 const btn=$("#pickMemory"),env=$("#envelope"),result=$("#memoryResult");
 btn.addEventListener("click",async()=>{env.classList.add("open");btn.disabled=true;btn.textContent="Opening the archive…";result.innerHTML="";await new Promise(r=>setTimeout(r,650));const m=await pickRandomMemory();result.innerHTML=`<small>${m.date.split("-").reverse().join(".")} · ${m.time} · ${m.category.toUpperCase()}</small><b>${m.title}</b><br>${m.messages.map(x=>`<span>${x[0]}: ${escapeHTML(x[1])}</span>`).join("<br>")}`;btn.disabled=false;btn.textContent="Pick another memory ↗";});
}
function setupLetter(){
 const text="I spend a ridiculous amount of time teasing you, annoying you, calling you Tamatar and saying the most unnecessary things. That is, honestly, a very large part of my personality around you.\\n\\nBut jokes apart, I'm genuinely glad these conversations happened. The archive is full of tiny things — a random “mrng”, a “Khushi ji”, a broccoli comeback, a late-night “hehe” — and somehow those little things make these days feel like ours.\\n\\nI don't want to turn this into a dramatic speech. I just want you to know that I value having you in my life. I like that we can be silly, that we can talk about ordinary things, and that even a completely random conversation can become a memory worth saving.\\n\\nThank you for being my Tamatar, my favourite source of plot twists, and a very talented reviewer of my typing. Keep being you. The world could use more of that particular kind of chaos.";
 let opened=false;$("#openLetter").addEventListener("click",()=>{if(opened)return;opened=true;const el=$("#letterText");let i=0;const timer=setInterval(()=>{el.textContent=text.slice(0,i+=4);if(i>=text.length)clearInterval(timer)},18);$("#openLetter").textContent="Letter opened"}); 
}
function setupBirthday(){let opened=false;$("#birthdayBtn").addEventListener("click",()=>{if(opened)return;opened=true;$("#birthdayNote").textContent="At 11:11 on 11 November, I hope you make a wish for the things that matter to you. Thank you for making ordinary conversations feel like memories, Tamatar. ❣️";$("#birthdayBtn").textContent="The 11:11 note is open ✓";$("#elevenEmblem").animate([{transform:"scale(1)"},{transform:"scale(1.12) rotate(-3deg)"},{transform:"scale(1)"}],{duration:900})})}
function setupWish(){let n=0;$("#wishBtn").addEventListener("click",()=>{n++;$("#wishReveal").textContent=n%2?"If I could choose a few people to keep in my story, I'd always want you to be one of them. For my favourite Tamatar. ❤️":"May the next pages bring you more laughter, more courage, and more reasons to feel proud of yourself. 11:11 ✦";$("#wishBtn").textContent="Make another wish ✦";stars($("#wishStars"),80)})}
function setupReplay(){$("#replayBtn").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});$("#site").classList.add("is-hidden");$("#intro").classList.remove("hide");$("#intro").style.display="grid";$("#introClock").textContent="11:09";$("#introLine").textContent=introLines[0]})}
function setupReveal(){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal,.timeline-item").forEach(el=>obs.observe(el))}
function setupCursor(){document.addEventListener("mousemove",e=>{const d=$(".cursor-dot");if(d){d.style.left=e.clientX+"px";d.style.top=e.clientY+"px"}})}
document.addEventListener("DOMContentLoaded",async()=>{setupIntro();setupNav();setupSound();setupWords();setupMemory();setupLetter();setupBirthday();setupWish();setupReplay();setupCursor();setupReveal();await initTimeline();await initMuseum();initGallery();});
